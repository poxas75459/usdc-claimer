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
    "4YpsWXLjxu3hCMphmkir1LK9ApLA8e3QZfUUtJCNSh8fauazGpJknzSD6GLajQb7GaKvAcJAfH9zejCiEonGS4kD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PcgxkpGV9zSMEZd2DzE9UNAU2jrZEnxN1uqtSFJ1GV2nRvEUXc2iZLgxnT6vtcHVpK2EMWADnrz9zKcM5TyGapD",
  "key1": "vXaWueErRsdU7cv4FiKPbL2vi8ag47eDcrmL7fuVYnL4MWkqXch7xv95zqyYHEpULYWrC9ohcf3pmukmoKNxLRn",
  "key2": "3pPxZ3D7xMxGEVuAKJD4dkXe1LzJTv9iPxRYLK8aBWCevKFfNFHd1SuxNMXnbXxh2b4tupFoYYSR2UhPsHT4wrRz",
  "key3": "2a6wvzLG84xrEThQrVxRpjgtwZeTFvBzYdpJtQxmgPpVazYe4hm2atnpYRdnn52AxwoCo6pFtdnG71PNt8BobF3z",
  "key4": "5oZgyJyQUfebqy2gSuagrmKY12ByhZ2FR3zBvxBWDvDCe2LsVZhk1CLknUKbyefPSfEnQX7CCGwxZGfZqPi7QuRg",
  "key5": "gECo5SdD6qAp9syBvbLXzE25aYXQYmttATpdQnZVPfTgiwEvV62mSU926PRgbS7XqN7DMxt5XomvQ1ex3eR2naq",
  "key6": "2sRVNXYDjsW3uPFWSEaUGQDQwvb9LeynZyp7eJ4NSj2bV8HGURMQeHSZWoQNdDTykenwMXBysUpoDThjVZtY67ZV",
  "key7": "RW8BJ7EZKjdZ3t6RZ5MeM8pLxFiF5vB6rigfiM2c45G9SSLKgFw3WUZBX5QY4jtPEbLqevoJAyBq5TWkPzDWkxf",
  "key8": "PHke5Zjp6E5jpU9cEYu6QtXVHMZReN1Mor2csn3coSc4pqsgKN5ursopmCdsPEgzos7LWbkCHCtuG2CYYtd3Vzr",
  "key9": "2RFuaYm1AZypLx2NKme9wvSrJHpCxr8fVmUxLJrxvYyYkMtwxFnEpjioGQVHh68gdwoKfYYfC1wWbCaVrVXcVY3H",
  "key10": "4prFahD5EWQ4d1rjLRX3knkedVxJt3fhxdQivijkw99iPbA5H3mn4tdzVMDmM8VrvS3qb6gALNv9mToF4aVeTRwV",
  "key11": "4reEzpuFr3L36LFqPN5YnSS2K5HmyhhE8MLF27HH4gJu8SCAPG2qn7YPwg7Tqam4Z9tnTNfLHHWdDcWZZDXwRUES",
  "key12": "4CwPh4WNv5AxZf5GeYm3pW4VvXStKQ8AL1W1HvW11cppddUUEbouhzPMN229S7gYKvcx5CGJA9iNERmeLPssHuyD",
  "key13": "5fsNoFNhagh1ThNyjYdJP4V5cmLDVWyB9Z3ugEds8gtrD25noYvU8pRvkKJQCNGJyZquQnjjUoDBZ2DQHNFw3C5s",
  "key14": "3czvmRHN9j8CkvHJhkJmf9mNzSJb8c7fDmfx3dvLDJ7BzrYUZV1zoAzJTQSfooJNvqQaw6KDCDkGafZyqCCWPYsK",
  "key15": "3r85w92rK2gvkPeJ8zPTM4iBVpuzHYSgXQgYWKKzzLfAuEtF1C8GFLY983NGaW7RXkmU16dbSZasJzREXzHdoU2U",
  "key16": "5Pc2TQzn6DU3jiBQJJ4KPB3or88w98jQYmoCQzAbbfgofFaJbCK51QKwxqLt7qo2Qsu6HaPhTd72vw1uxH7vuhRm",
  "key17": "VSWdjqPmStUXZzRC1ZWy5LfV3oZ9ddczEjkUKx1sheR6dobUYuWrvWsoNB5Z52dfNThg6ERvxHpcFfc3owkHc6Y",
  "key18": "4yZXBVggFZre24TzPWhCBmqp1onszwi15vBt3t4hv3pbUU4k3XDb6Ab8h6Msc9euiAYXwaCvSc5AiurwjeZMfbEa",
  "key19": "vrh4qFoRMXKSQC8ie89PdiWG3pRYwCHqPCqNbN87cnaxx8HQBtNoVUwrEBFMRs5bapGdYxjDPHiFkM4pmchJkL2",
  "key20": "FdgntbGuqY82q7j2cXPuGRCbk74xvkLEReiyoZNNfNPZ4CwVhS2DgFfZP3PoNFa3ya9DvjvfQwEzznVqsqDigty",
  "key21": "5WDDtVEB5tPa46aFzqwQd4ZzmrLrKSUCGUFgmJRtD8ZKQcqzmica1dbgT3Zv4iDfVBKLkkeiDNdjMAv98wi2itnn",
  "key22": "VAqzaYjxQg33FAsZq6jKqxUTzhFwGh5MPoHDNtBJDnFub7ocMsenvPMu2zCAKRkrCcmEjm3ycMr4r6r8norv4kb",
  "key23": "hBfFKQkUpxhbpXF8P5zqyVunFCcB25YftUxcXZ3NGj43nSWbwEk6YVtS9XcWCGC9VoQavDW3CphhZPgpyFyFdkU",
  "key24": "2rSBtMmsm2uLUG45LpLNHHYbdEEBbqyY3utS3urGD5MtWMdNfoxf4xLzRzPkZxMHpFy2BtCH1Mfo91EKYcNecLtb",
  "key25": "3uHcSZR31utfhBrBxfvUnnBpmfNGYUtqjCvJLZdwk9fkL18NjuSD1nrmhtk7R6So3Qc5Y6gZx7uuisMC9hJcAHTv",
  "key26": "2Hj54jJnBUG3HQ3pk2XHgFkGDad1bvyrpmPzrXkob54kaEyaVogQMpzPU5rkYbnLKywQuAAwJV3A2iWqcFeycjZL",
  "key27": "X2etFniPvNiNeVgG8jZJY3rXsAw8FXQwTQE4RhhqEerFcdkf5SupwcjQf29mtKzBVsCEX7CwBi8Y1RYrdCDx7PG",
  "key28": "4pqQp9a41phqeWWMeCRjCEHvU6JTJrhFbCJdGnn1ieSdUz2oP8ppT68X7yJUpSjrxKUcX2r5R1v3TnV6pbjJuba8",
  "key29": "5fTRwkFjn8TvvEst9b2rVqzdmf45y9pjhaSLX8KEzG2q2sgj4NkvK3hSJ7eemPn6BEDB8J4JCGyTViWZAkwCmK7M",
  "key30": "2gk4G4Xaqz1tG2Wg6SZ4BpTuRFT1p6urp9sWGJyNvuExDjMg9CDeFD6oBRPq9mS6zN38pfk7EP85SbiXQegjKM53",
  "key31": "suhnDAKyzQAuuWzLUoDSRzRJXEfTsJT9MQhgRdq3dL7VwJcBmd1CvYXgDVxJFYmRk92EXE4bU7XNJa4BnbHiEyV"
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
