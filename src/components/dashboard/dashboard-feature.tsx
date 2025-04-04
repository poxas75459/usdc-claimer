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
    "5ek4TcYvRcSzmZQeedp6RKfADfhMBkKGv8J63NygfYL7zmPbzBEqZB6DZCWv66uZ6wHfSa82e1emEBnnagH3hb38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E7t3t3ss8jwsT9REuTU79Qj2SG6Pci1bDKA3ezvXcK3Hrr9NpVXBNZU8PYodnowbfo34mZurGPaw3ce2YQPzeKj",
  "key1": "5Vbszuca3bSYhWp7BBsc1zxwq73LS8u9ygnHZmGJc7DDGcLAFyPHxDR9mATdKoVtmN7icn7VgzYC7QDNPwLQr6U",
  "key2": "3DodGN9ZuWyf6Y4D6tWFPS3HgXJXUSfa53xPaLHDPRW3auec7Ua3hPMR9GmWwBQwMZeXa8dtXL8jDMZh59JnboDz",
  "key3": "3oduPwZzJ3iYWkbdorpXeGJeSnaZuSgXJn8VgUB5gdZsdfi9jPryHHw1GGEasCACE8PQJjjm8RbktZM9SXiAW4QR",
  "key4": "3RAgB2SDHUj74D3RLLKnFVhR5YFtZgn1hZDq1HoHQxbHkKctcoq8rjUnjY5y9UdmUvgegJu6kk7Pra4JCDJEJ8YM",
  "key5": "2RJZ3Ce88xacYs4qjpQxzF5N3bQHf7LZUWaFinXZoD8LXHzUkm4MfZqSZ5pRqyiH9h3Rh4t3hVJcM4Gcs7o1wBDz",
  "key6": "3EgPooEkmACN7CcyNvHNA7wTG8N6F3Et1RkFBMRwUe6gvFY24HT5gDCXZCze1qi6pEkVCrxmbMWBLiTXTxhWEZ1n",
  "key7": "4VB9GuTGhyfJJWoQy8Ta1dsN6pLEt8JrfZARHspgv7XJf8qYkpqJTC9paMR1yVeLBKzeQMdJrdBLTBvvRfh9btoK",
  "key8": "2WPnGhbFZnka5akKrgPWdQkWz9xSUPFuC32kpX6k1S3bfpmgMDsAXtSefuUzk7s13ds3BRFjM8csuuYa9g43UmV9",
  "key9": "66yKRKhNEA3E5wvy9bweRKSoKy7wkxBktnM87ettEG8bhuvi5zEm5JFU1jy7F3fDkg1potn3YA6WaiPVA5mHw5UJ",
  "key10": "5M8rXSfkFDLGZ36T56FFs9yALrZdNFgPPm5B5yYWrqKmn22hMXmCMS4Hvf5XSTEdY3eW8ePYJWmXf9jBcnNHiie3",
  "key11": "4kxezEEJzaLknnPLZfXJKoTsoCkTXfQ5E5oRdY5kUdxWgL5BAjiCiQhmBF3NgkvmVSjpKJh3itPtjezWbSQQa8oJ",
  "key12": "4FTRXDB18fNvwWCMrW1vrRgK2RotPamzkgjMLkC61kwckkGQBM9VHf9dcovRJwn1VVvXijqHCBT4medmYrPhZk2h",
  "key13": "47tkuDzMRjhjyAP5T7afCwLD56iFbk8DG8PRCdDDR2v86P982iMJsqi3hqWUEedv27cF23Ws555jraeZLEuEmrbN",
  "key14": "2k5ETBX2GfDo6e6rrNZ8FPFqGgYV1fu2PSaHDBScZNtEL2oSuvYrPc6yNyuvu2qERXcfSF2iYaxAwMH3ZtFaAUc1",
  "key15": "5jWxaXkkNnz74oGo9qU5uJqPoUGp5GKs83ngUyC7Cmdwem5Z4kdubrBxj97awsdMTEm6AgbPepX6H51hmwjrXLjS",
  "key16": "46ng64SvXXbFtUphjHVMnBiFX7L1UtWM7bc9yVrws38tdbEasTocFZdmCkhMHNUKuB89WYov2C34U8dK9pvMnjkY",
  "key17": "2PBv4Ha2wf9cKTtPL3fEPYRntwW2xC5r6eTRkwobGW1TFb4beLVwZ1NCPw2aPhBndLGZyLvnV6yC3MxoKHDJW9Pr",
  "key18": "37bYJpZ21B1EnMR7QGKuT18fcGGtTCXTvSkhNoLMZEWTcnLZ3CzudPCAS45UZAQrAPuCLn5XwyCdDAhFZqzVkpTw",
  "key19": "4SJ5oaUKsdWBLkE9jYuGXStLRWj2QH1Fkv3E7YTCtzBmUpA7rWQ7V5ESb1vm6YnPg1ebnX5s3V2P7duLhxwtaF4y",
  "key20": "3bRrm1Rd2XZc7fvxJJgSCK8zcSWiuYBapKggVuUxmujzwj8kQsvXWtZ3Tw4oJCNQdLJQdZGCxqTaZk9XbkVtvcZe",
  "key21": "2pJDbdbChT7sH9aXtaqxfbYExBCzvgzDMmH7L1abtss1eWSQpdPNWNmFpfLkaaT2qaahTABwZ7q6MLKKwgBu3izp",
  "key22": "3jcEABcmH8GFLgbhV5QLpmFHeVSxBmhbAMmc2h2T2M56YsCktLzLx91pq6ngSLjjwdMnjn8MTDWgVsy4KQejBm51",
  "key23": "2FTFMz9H4jtjPox7t8PQScTpZLHYJgukHv2ZVAiCbPxW2yowNtYCigf4SSqaL1VYRREKF9wJn486mvFJfcAvBsht",
  "key24": "k6JRQeNWjJXAswgXgM24YSipjm5nRjx3o5mfiPvcCBTrC7ogpHDMtTjeC19qcwiWmVCcaoRarDbVaWaUXYKZXhe",
  "key25": "HCWkaXLPYkte6N2TXaMNpFoX3mMbf8fPBtiZJwWdzsD75WmYkx15rBbpLApGPuKFQezSCaVUSJexFYdmVoAQwLP",
  "key26": "bjNHbTN8PAWUmjquXmAm6SroQXmns1eCG49VRuGxvZ7mB6buu58pWZ3RjyXEaXcyXkKp6KtSKry98iHhzYN3Hiy",
  "key27": "4YcDwrhCf5jGWTFAKq4eT5JJbHB3x6C2s9JaGoMBeSVeDt6icWgLB2YzYMcngbDohxRUYMPoekwtnBDUPfE6U7Qm",
  "key28": "4JKjUnQeMxVkL1KgMoRYpZkxL6cvYbXCC77qfPNz3XdCVR6RVFFaRjfZdEMq2SzuhNL9ujpCcg4NgReGySMftEuX",
  "key29": "5v6hngRXYC7GASYn7ytj11Wk51dnzKenWFVpcPJE93VX6XxT5yykjEE9uHLCxqq66x7XxyxcxQRwk9369R1PDN17"
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
