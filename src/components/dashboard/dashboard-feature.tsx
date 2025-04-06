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
    "4x2Sen1C6PiNWEeQjTD6xMhwgNXwVR5xhZDReUg56kmXvDCDfb1HddBYggGAD62KLxCkm85NCNV2V1KXLk8Xq7KK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZbvTXzn6tSGU5amAW1vg7GTFSqpduZJHRr1UbK6HpD5M8y5SsQa5JzrjVZWMzHFfGwFPTfvEKvpvMNJQA2DGTXG",
  "key1": "5ipTzCqDUCMSSPtE5wdswQpSYDJHyESM4u3YNhNpStGbwTq49NS7p8aGheBmbtewWpXtt3DXZNPREcrKzcz23j4a",
  "key2": "4EsYKp8SsNAzSzJwyFZbhFJXkoWZh8agBZnezNnwLKQv7qB1NemhhgBwZA7qBA7VwxLgsJYAmTB5DNYa2eQ99UkL",
  "key3": "4E4MNWdMXmAojzZ1xyW6KMpo7q5arwpzvxiff2cKzF29rSyQJwNsspjocCUpd18y6MHDtEaSNU37MDU3Zr9pfacB",
  "key4": "5JvHQcEkhhAqTQmeoLDLrVaZjMFDcNmUAXwB8zk7hBBNP2UJgimikdEoQxh2N23wtqP9z77NiFEmNRcWox2GuKV3",
  "key5": "SLryXihzeRjMrGDFxxMfsxQedxqTS8m2cJ9Mvf6vmKnrbJS84n6jsHRb5nu72xe9LAC1krfmGqg11wRwkDwNXhd",
  "key6": "qEDVBrnAwtmqsSjarnBVDV15AHRbMnnPLfQ85i9fxoRmsLeXozT4dhmUvFcCkJ8YEsHLgpsRucN6h6kfJSZ6F5c",
  "key7": "3j9SYvgfynfFQJueoDYMJm5fGnuVm8QcVJgc1sTaD8fjXsQHYU324XPNGqJaRbRFfLaX8Rp3gdj4tauUgyMG1Vog",
  "key8": "4MWHXKygJU6r5zG3TKBaRA6wjQYsr21hbEvpgtfkkqSBapHd6gY38A6gBDqb9exbPm5grBoEg451ri3KYr7zVobX",
  "key9": "5bfmU4LUrQsAMoSKspr78adcSw9UuPeCJZAvjcorLJ4h65qdRN8X2tNBZgiENBh32N1Gcvi59NCLmihss1vyDSgm",
  "key10": "2qixZPhKRu7XipUWNUJJ4xPztNVDyP3v2KTXe1yWJXPE5YoQTU879a4eMVqs8VwLxZeWYGgthSdvirvMyPYWiKAe",
  "key11": "4UYLfYjP7Nrfet38RXNab7fSP4aB4oRsRMXRx5Bkd8gjuQp6a4AjoYSHRKjrLbtdKzTjzse9RJhVExrxfoGkABH8",
  "key12": "4LR2i1go91FnnjvDWFCyHb6vAtwJHWP1jMz4Y2HGMdPtxMUMmsEodExxbDTEF6kjwQJ4EgZ9gCC9qVcYPF8RDCAF",
  "key13": "4FiToK2uKLL2ZuNvVvfXhNvhQ5it3kV3kphwfYUXzooVZnwBcg5SRjo4vABb52wFmrTFUvhvNVdUe692mHdrt8re",
  "key14": "2xTX8vcANk8ei9R53emnqShtpS6XnaAAbAypVomSj5YdyS4v4PReUDSNS8Sris4fFdTYpFYy2KE3v7aQT5hCxFYd",
  "key15": "2hG86X6YeQu5uTeHrjjydqi7oBZ1PB2bkzJGKtMPkx2Si3qLuNjVVvrs4k3ZyLUumCrkXb8megVXZYN7aJGHjhBe",
  "key16": "cQofuFfyWgTq8YExxxDY7ZcQvby4nDjNeUcR3E4tZGfs9pbMbRWVAwrUqWcGAkrhSrJSvpQhMLhLMTUFmFFrJeS",
  "key17": "5bf1YAGuLmHv2mZ9N8g4kxHCxig33oHgxMw3T53x1DJFRMLHXdLJrAB9rUvvovXwDPBgh8EcfDZiQrU65C3sRKyu",
  "key18": "4t71h9xUELvmAv9FmWE3CJwJRhhLnr83K6idcJU8k34fAJd3TRxdsBewmP4yBUqYbe84HMvrkfKw4cd1Lh4LvJ36",
  "key19": "5arfe2mYRCmi5upsUSjuLYxZ5KWkEJGt6sWsvfdPWHTfxp841ZyqZNyg95VS1mqfxG1nGffLLH8R6RBhefas5BqA",
  "key20": "2R68AzhEGqKbBzgcM7196h2RMa7HWfo23nYNvgEUVwmUmJEoWDdn5mpGDmo9gvDawJ8eBNBoLKKyvuJbLPKwFYvs",
  "key21": "8YrRbYY63vFh1z9HhYaTp6bxDNKbQkQnzLaiu19AqwEMG1FHewW8ujcdbjtwd3a76qRxxVUUnrFBpJuFfDmK4zb",
  "key22": "35zGY7YgqRkuCotS3XPm84pNFDgPSYjRbKTH3p4t5q2GhHqcVnn6kM9jfXRcKsxC41UE2A2Q1dPKLvF4hLpHv1vc",
  "key23": "3RTa6Qwq9A3AwBqFNT2sishGcfFxZmXE15MeCsQfcx9JaZ3ENq3CfVmfebaVSiyyfxJSsG3PNCL2mZHLTuuqCaD2",
  "key24": "4EdXH41iAJaX2iXbAic8MpM1NvnZo3Dzbs596roFxHVYVhecTx88c7VExu6eSpnHDrg9KiqbbDXuutTaYGKxQdc6"
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
