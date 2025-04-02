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
    "3UHnniTScbQWvFD7CYAM7zbvKCC2fW3WBKaNtDkjQUA4g2z4KMC5CvUme6EomQfQjQ1D2wDa5K5W4HhLrTEDKq8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kVsocbXJvZTakQoU1tXQFnHGVSHQmrHNYhZRJRNgUgPJN7yassPvSSEPhpoSUmqiHtNcshZBJfKQ16pgMezy2e7",
  "key1": "5Lk1F2Yw4Mq51d8vP5FcP82fpSms8KZFeYS5Rh35tua1SwWHPvXNt5g2i91atWWddWU2XDhxF8cT8gfSasrodAdq",
  "key2": "2iaoGXJkfbtVNit8HdySBXMjBWxvaz4PbCaGdT8aD2rcvPThEtZTzw1AberpsjtRtTYRtnDYgKM7JoozUZJNPFhZ",
  "key3": "5bntf1RNzwzmcQYyec8zHmpYjAjUNCYERaiGug6GeD79hSs44KPhgh46PcMz4ywuw6EcSmvDTV3LfVFGKiWrNffg",
  "key4": "51S9RaS5g2dj6RJgJGg6hHrSz2zvX4dzKEPf8Luj29sAMGSyWW2XcYtyJDjvUWGBRkbz11VT3P9ed5c2x6AcJ5Sc",
  "key5": "4DMCZMBxGfuro5kdRquF3DPTYpJzYwf5ik2ESPq1KqgJEhQRgPKuEoyJcnLJkj9zRVPhf6sgzWCLpbNwpBGTCHyu",
  "key6": "4vLwkwJB9RPk87dMk1MZpSNJKqp3Gh2jPX2tJgNZqkGG4h3J9kSFoWb4xjGR8Dy3jRcyDV6n8hZewqKs6Z7oS3K2",
  "key7": "3aPYiKXQFg2v5meUADFocSKxVsWwMtbf2H7EVkHMfGyXpbHaFVdvWjRWLPnFzL2ac9vvQ4j97GeWSP8k7DocTbPc",
  "key8": "5bGVASfZB8uR4SGFNQtGEJsZMvBmsWevYWYkbw28tHbst27UB9mLp5eqU8fM6m9LsZa1T933rHfMLJ5fQdAV2FXJ",
  "key9": "4hxvsPjM6iGLrcvtfGhM5mqaRfMKYAuSQnPWCd9rUnY2bssuVZ3oYNwtS9Nrea59pJuTPuDw7RNg65M8NQa5tb3P",
  "key10": "TVrU7Hy8jequNW3CNMcXsGmPCPTXo6ka6ngq3rj6k6xyUx3wj42D6bJ2kvFUWmEkZxZb6WvzryLBHToLdyDY25b",
  "key11": "3w1R4psAiwLS8YoKE7w4de8tukyWievGhDqcJrkbezpBxsKTWjpHCBfWzT9t5Y4Gepwk3nx8qD3RjqzVQz849PUe",
  "key12": "7tbnJ2VwZ5NBi1oab8a2rhgJSfyvK7uSTHQQ4cFKWGTZrHVEKfUztMb4VSKn3V1dcNHER3spWmCT7nKP2c67s8Y",
  "key13": "7kxKiiLhpyLFtzT89ajHHe9rLfMCiYqe8k3n7SLdBV7FzaFx8YoZKtJcybafJTr6aSx7TzUTYZV6QjCZV1SZrcm",
  "key14": "2VhPHWRSAo4rQYtPYfoDacEnwUJQC7jWaPw9xNY4Eom89NCHmcXo9b4t9FPCwawdDzT7Y9ypiGR9pn5xus7SPsxv",
  "key15": "e697MD3u1eLUYHPRFZRrzerWA9A8tar71q3KjzpKSSAvuBz3snC1MC3gPa6EhNcGroDGPn6tWxnarRAYAncLCzv",
  "key16": "4gg9yu75Y6WgCpN8mysejVmeVRjmp39EpXA9YYtTzrPscPSkdC3HKjwUcAt6uBUrc9mZJArXz7HwAkQJan39DnPA",
  "key17": "2QJyW5ZxH9izyGBcumWYzWD2fAASFtEeLYsgGpoFTp13eRM49NTz4PUccHBkonmvAWcvPAdsrs1odTCRKpwTVPK8",
  "key18": "WRNAaja2S67aB87zNctGrgTnMDPRBvKpYGhFJeTnxmxhxQG3fCzPeyQunstHZ1jHQvdncH7LjZtEgCHBtjS3jQg",
  "key19": "5J66teCKjTWQycqiWNL9tpCYRGj64U662ofsKuvGPEjS7goJwE3nekurLiM18zJorLXFjStwfdHue1y7tnUivn8M",
  "key20": "5VwBGcF2KUPdXsY855CC75XrHmDogUZMXMCcwwCmibAYDdwF9vZqYDZKAJbpBs4gHdt9bEL6kX75DD6bMBz8LgDm",
  "key21": "4PV7ARrG7LGPfz45QCzBzsgkNFE1qPSCpnAjXLVgBxmp7FXSfFkb8GsD4ZEKmeazSuUjtvgssju48RkaqP4EXygb",
  "key22": "5SJtaSPFpEfBCTxhvLWcPTPCMFwMZdFUczaQhYefoq3fiwtbiYb1eeSTaJaiRdPBRNyTN4QhKMrH5JTGiq1SbDCV",
  "key23": "4vUTUTmS861MWDz89fG7Zvbm5xbLeQ92ZBzfYQr3M49BHFkrA44wEGrDZCBjvfhApbUnSnv8ZtW9Q7PkdR1QyUsY",
  "key24": "3EWjuUFcAWmMeq7nbMwwrJzzEYEx1aacZv64rCaYFntGhYpyeJCh8JrH89wHVDZij1gf7MeLQyryu8Y1x4YSHGkG",
  "key25": "4cypbFzjYiSerZYaSXrHQjXt4APyajpam1utkaW8LMZvBVNhDpEG86gLmPZXnjCrc4BuHZYytYUD86AiK72oucNQ",
  "key26": "2rz4CmpHnFaRqVn7HJZRqSy4eYH9r81EF5JzTqNrYkxV69reqqoWX4B5GpHi4TtMwXjhRWkMT3wYWY4mYzAF3CsY",
  "key27": "5gYZVsBi3FD6PGJUUJNVYyoMdKhCsW435xqrNg1TtB4u19Xkxj2oQuZjVkGXcRBSMFEpN43meaBtnsyfTwxcN7hP",
  "key28": "tV1c6gr16bxYRfDAt8yLXcjHvd4boTU2wZCHRjqH2VnxenarFgsqVZ9p1UjX4MDtMxr8vQEDQfPH3NdJ5rMiE6v",
  "key29": "3LH8j792BDLAxPkfd2WYe1BkRRGpPkfnxtqpZ1T7VrAAVa5HwcUJKpdDPMDfNY5GyAMiaeNa7y9fvUzJTPeo44MS",
  "key30": "3LDoXUY1XqnfaT8sVNcDhQ6i1P9ywXkTHeSbE3Aj4yJPdrDTqnBR3ocu5MPmbZqrR9TH2jp9mecCvjcJorKJgf9u",
  "key31": "4jCT6BRy1ePSsr4aLECgzwV2M5fsvrx5pESBX8xhQWhLqxTjCTvpR3q1hff43tGDtgHcNKdM7ggQvoXo1TV9tVnt",
  "key32": "3YZLshYQggnBVdteKrabsgNnTzpz6pSnZ4su4pLaQWxUoLiCEE7FDk1YdL22JCtA2TqF5AUbgHSL1Nq5stRsgw2p",
  "key33": "2omNVQ8UQE1jsftfNsWEJsQdZvXyGHwWrShF64w6RYe7YB5AW9ZFaGiZBJpFcipXGPUw2LXGvDLmHfBEmg9yd6PD",
  "key34": "38fhMi8btBNeGxYzngo82ZizEWMpbDKCEM9kngEF4ZUEdH4TYvi4gCCMkJ3yGJ72rcg3CzoXvtmVoKhUGWmiHyuD",
  "key35": "4viqLBxTaPyEQ9HQdmhnMtySsKUY7aPuRh9Co7VCsA67KSpXrzsMfW8qh5LfvRUK9qhgKVDbZC7aue6pNSyTbwxm",
  "key36": "54EMpZnkwT4CQ41XcJYXkdNZybmSkpK3x7p1dn852tM8W4tfGugQRkCLHTM4u6t76bSau91wqeQwTbwKD5GayTST",
  "key37": "45qCbCZZy16jwFGk75Xyxss1yQoSN87Ro6jtoJp76w7RzCjGmf6mnQQUsRQSrMaNUbDLLGGs3uLz7rf98FF7xmy9"
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
