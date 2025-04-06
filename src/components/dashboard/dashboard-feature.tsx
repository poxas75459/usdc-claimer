/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3r3tUoQS574Ru7YCEPXrTx1AJTLLbZSE7WwpcvG763vuRTGSaU8ymRXAwffrpGG7e4Ypy4wdfz3Bf3JRM9ahHgY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QxtRJLpkojCDHrcyMNQrqLL5JQUPk9dqnkhf2aUsREgvQgX8bkTxZV475EH8LLitbGPSLRJcSx7QwAPrTGyXaNE",
  "key1": "33qDArLAZHc2VpsYzfLQUpZmFGVyE7PiQW5VhzcdzqKATMRF2eUsyeH4ZGfpK1pHSDVZ75uBPunZL4VbnZ8gRN4S",
  "key2": "2z6JDPWdpUfaq4maoGwf1uqJkng1tFkLLm5dfC6XyPPcoPSPsQiNCLtWTh5RGvxLgQLc1jjQ2yraiBWkFJbRvmty",
  "key3": "4rvtdHdEsevAGzQD34L3Hbd3FrhkbFotqPfeQRJmhk5Ny8K8Z5XR7WBsJQs9wkjEQs29zE7HkzsvNSfruLeaaDs5",
  "key4": "hKURcoTD9JVfWu89emCnAJb6HrRmtG3nKcNB8SDABiUdcSzjLNmLbZs37mEFMHqb3s9HEKLXiWwX567ck3M7aGo",
  "key5": "2ADJbcwrWMN2cE8698ZejNPaBMzZnmyok124HTAfUNA3sRZN8HhTK4XXAAbAcQZJjJSUL3tZeLNJeqpyJMhcyKrn",
  "key6": "2tRH3VVhw1yUJVLZ75jpYiUykh6UBTH4ggv8zxtN8dcgt1TqKJjYaR1gmWktVciJZiakpA9Hj1UECKNrhDEYuP3f",
  "key7": "5vtmajRLLmoxkSGzaSb9FTERgzNJRApTyXn8fpCnHvMUXznBBeNpt6P9wsmSQaVaU3HZagD8oBWp8mNSveAHctZB",
  "key8": "4LNo98vojmj7KXwHByUUoMGvoz4aTrWnPce1PJ4cMD95QAJGvqAGVXdAs22fBW8Lc4ocXif7edXAh7h8m5ZMtVDj",
  "key9": "5Z5m1AKWigZngjne5hQKaxyd4do98gxLCXx6wLdJDjfRwCRooiYpPuCMLBjhqkqFhYZYDHt9cj1UpBJGtf2hkD3C",
  "key10": "z6TKskdUhs5a5v8TenyDtz3U4nVkshxuWPqGDtGZ9SxYwsi1RSgJ4W5YN3P7MdQajZymm6by93wupPGujsgiWo8",
  "key11": "2EypSfKeVpFpyRS4u4bGatjxBNejuhbYz27U1PYwLLFo5pM3DEyDbxTC53wc9teRwkoH7wKnCtA4fzjzWbVmJ8yz",
  "key12": "5UWPbhAKQLszvZ5pMQkrxpjfpeXTMNUrak1FCHRJFMQkDmHn15exRN5JAqoHXFLDiyCEdGPPqUwgfctwYbcoNpKJ",
  "key13": "4VLY6PBSKeTQiWjPvxvCVxSjNxZEiu1EdfkaSePU2Ai1HWVqunEDCgNZYa3uqJL5EE6CpvkWmuLnbn3iSPfAvXwm",
  "key14": "8SbowGPBckrZEzHw8GRjMjZ5sK3MNBSBoUxZpqqpU5JmTHfcaTThnKvkPNetDpo54jsR9qSZgv6sztgNKDjceLK",
  "key15": "n5b9Ua2QmiosS78wz2LP5QPFgkLCEfHssooSfhaEWysYV4URMUZTRaLDrUsLDjykJhsPkHRLVX5gh5BqcsXgJw4",
  "key16": "2Q1Uut87t4vxXrcehYzNvmJ1cYtUitTcy2nrcUMNAgWQ7KtJQsmNa7WCvDdpPrv9HzJPKTKT9wNs1TbQqxZMhfVS",
  "key17": "3cNAwHDJA4WU3nPQjk4ZguAr5V1dCXHWczmmVkKRyEKg9Jo1otZJuGjyaDHtj59humKjtr8qwCa66BofZFycz9eH",
  "key18": "3nchu2B78vM4ANNuNwrZ5xpQYpsBiso4V9gz2anWtJ6WWrZHqERxP8FfTg2jZmZQHhx7UPT47uNFcB3askBybqM",
  "key19": "5TocB1CFNepXx8VERyi24LNkMXANS8PDrozxaaKqhQigJBsShgLe9h4XKvJQusbierC1q1zqm54EDNnJmeZC7K7R",
  "key20": "q2PfuRcgCPTRWUkQZGtbK6PNWekFcXKk8aZpbrRWRmH9AikDrSTWnykri6jjCEZN9i4dCY2jK8NgwGfefp9wczD",
  "key21": "499xVXPjYuqKvGD7TSEUnkcqk8gqeFnaLmATohtjnC8HVUDNZvsUWNw3vbRq2K6Y6dem7Pn8srvidUu5vnbZuTps",
  "key22": "7AkSAr5TioEf3jeMZFNRgzZ5QyUBTfi3VrnJBAcuRWgxQDDcTbPvKTvZM93TfPhsr5KWkdztAhzuG7YkdD8DKoB",
  "key23": "5yEosNXoakLZvD4hUSR6Qojc7htKd9ak1oP3t9oSovgXyeEFozfNPLRGy4hpE6rp5oZeLf2kkpkHHSn5onNGaCwV",
  "key24": "nku1tnbZSKnxDKEt1PMPnkHXTWodkcLbqJrZh9YEVH7bbyAgoRyjZEYUs53v7ohWZT3nq3LsY3FzGWgnzxmmdB1",
  "key25": "5TiGRrhrbswm7oDRK2EWdbS2nnG6cBokMe6R7ZCtcd5KocTrp3MF6nbfPYNqZRDbfPiuW7jNGzLCk8ZJ2QLBZP6r",
  "key26": "39fYbMGKA7mBNfmXPYYqHL9viYNzhXhh1jECRw5zP7WLwiKpwNptAZuK8MC6ussMzJLgWkiWzP1oSveMqdhvNMmt",
  "key27": "3AcuFrcfZLJkd5ZCWFfZvVvf237r21mZvS8oBaYvtQF8CyXZCPNPpjZut1hkC6AW1aiLfTgG9obZP3HeA9Ltnubx",
  "key28": "2YPDbTD391su4xLGLdq74EB2SwhwtF2oZVUzhdTUMVPM4GV6gwY8FmsWkhXMktzY9UCDXtsMBhPuDYgvrjC7MDrz",
  "key29": "4XdKE7ubFNMCkZtWCj1PFmDYDx8z98hVMQug1vXcvaU6H8FMAh6yQmLsdYa89xp2JyyyZdD9ssnQ2iqrEXA9jdbR"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
