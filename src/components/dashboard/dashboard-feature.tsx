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
    "2kLF5FvnU4ArQKA169UDecvz1JtgjK3c9YV7EX1pSX6xXxpnjPLJjg42XyXYSS6vjgGJ56vU1fnPgUw6V2EPwp9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BqWmbniZHBRoFKMyDF5Stq52NzHMGdFbms5aWUq7Ar7cn63igLUg8iYQDxGpx6Ufcj8n5wf4cVJTjrKswpsUB6F",
  "key1": "397pCGJYaimrnA8Scpx8gkJyfnk1kX48bazCWHYcgpTk2epjs15EDdKfXhj7J9Vt2QMwghqf71PNcXUucVR7bFgo",
  "key2": "3S3J8JMXRPcyESZBWZw768GGj8UZcgeiP4BDzmk7C2kMJ7WFFM49S1n2XtRTpTY6DboaSmzrMLzj5KqCBa2SA1sr",
  "key3": "wuKQg74UXMm6wFgWbC7cs38yB9PJbY595pBA261MUsj8DHF9jv6YutHrVKWHRxd5E9idjXzWx8qntqD93bmc4w1",
  "key4": "4KXCSm2Cp7hrVNszSugHw29xggAEWqVmX8GwDv7BoVC66ZA9Y6w4wpfqQ7q7S4YSzeHjVFnPT72KFmifHLZ2A7Py",
  "key5": "DpNVQNkFANCr5kebaACGhfwwswj6nF8StwzBA5yDNtoSt4iG86PzPM7xgP9LJpBkh7w2D5s6uJ9Zz4SEv7tuHh5",
  "key6": "62HowZ3QENECbJLuRCEzweHXfooVXjRVpKDoQzuW3TQfqhph5zro9LNPheUq9Yqxq77fotxsRXL5RT8U4fRhABtL",
  "key7": "MW2HyFtzaY8xMj6aE1t3GiiTnGZy6xXbhV5cBpfQame3SG8PP1xGQgYMnGQmXnAMvmRdLcKbHWgxyUA8Xswbx4j",
  "key8": "2KfJuqcAzLRsoxPCfT7NCSxasghTcTjEqziFbVC2WXsRMMWVgXpf48zYFiAMxzGUchvdkyTVNAJsWn1HEgg8VcKQ",
  "key9": "62RoypKEry8UjRVcsWP9zNmqWmubVtmgvrkFn8EoVkyddhwfzxzuTNiUrZXQXy9EoYhhE1FUxEzWZvLz4cTQwxEg",
  "key10": "5zEpPUZXgLdgJrHWc4w7kcth6onhsZvKKHcNbakfhuA5gpe1bVXiCq77g9qykz2BVbrEZvdU9c7xKy2Pey4gfcDf",
  "key11": "3oYbZpMGn2Z6r6qbH4NLAphzpsmMjAMD2nPHr3vahLALtRQKA7yAB4vXsxBo1SUVddZcCt88oahy8gvStwqupcCM",
  "key12": "38PQBtjmtM2mUpca64EBFkxPoX2eKLYMT1niNZ1pJvoY3QgH9VtZwcwFDF34YkkqxxMDqHHhtizRkbus66EYwPUv",
  "key13": "2SpKJc6GkZ3kEXkALQ5pyuod19E2KiLtpDYPFoJKZxFuWrbuGGWLPJfPcDXrBmoWLmK7Ar1hLoTQdzNVY4VHHmUJ",
  "key14": "3UN7wWVsFHwEoyRVN6cc6mRTqZM85p5dc3de17MyFoZw17BPFQNhH6ShAzomuDecNU1og2fonkmK6Yc9mKfWZVhc",
  "key15": "5iv9BxsH7bvWf8uKWuBon1G6qajVVqGkvDaBrbz9b1j7N7fnntiWeVVC496kEf7xjXwfGhcTuW1ynC5cTFQCGW5x",
  "key16": "CG3jWKjFAT7zWwmDHMaqEnvGrejkmJH16FgFS7w4wXEYHV2o9GWq4agbiysayu3scFxFBaoqFNYPSTRNCAqWEuj",
  "key17": "35Hh55VFQJd1DsZxhwnWbEN3dxvaAap2781GKQFB8jBjqxbNENEoKdszAz76AphVfLPKGZkignMkBY3B7XrQCjHR",
  "key18": "2yTwqMNKfZSgiFg4xWJtkwwn2XE3q8ab81rmd4s2U4TreSTrgiBo6b5xZM7M7tb4dR53d9UqBvZzwsnHb6E3y9iZ",
  "key19": "v3Tim926CqbGBdNuAkStZxDutp7hhvJowbwqRBspPDNsZ2Wcsy1WN8WyvtuuBdDbhAKE3BVU7ihhf7DB7PHuxbc",
  "key20": "3TgahGMDk9Hs6jfefKSy55TwjYqxgu1ch6tGGfv6FmYMaJRkcyst795ASWHn2B9whsthfs7FK88rtapdPvG5anhS",
  "key21": "4F8r3F3NKbURbb4s72VUEH4Xvh9DpgMXhNjVHtt1etA1aHg2D6f2jL6Z6xbYSQ7uTFkhrBV9M366hiGzzAetM3qx",
  "key22": "31JUg9B6jgE26m7oKPpwxuWCLnfoNk23woEJv4XLQzoH78S6wGMVLUiDngcmq7Qb1LoHBVmgeKwhd1PH9qNyEbWG",
  "key23": "29YkR9t3GsVF1sEQqizSji4UbnccUXLAhF3tnnAUG8qYCKHA8SjHn7zqAkTUv1DTEy7VCjP15TqSkekTwmDp4nxJ",
  "key24": "4cSy6BMwC4g5WjdHVMHAhrNcsBbF91DuxLSsBgEhKxa9exrrtRdVUkXuYFQPXyUktd3ueHeuorBSgnPYxavRHWbT",
  "key25": "3WYMn8KygyLxXbkGoyDwM8SNLhXvsLoHA36G8H7JQhcZDw91nPopJLRhb6NpXonwM76WbKm4u9qncDBEPkjjud8d",
  "key26": "3ShDXQ62hKVCHfT1Eq3J3W4bpjd9K94shMBGPVpyoNGrNJteoKKiJCFiyHeqw9YTfQKaCEau3jnvoqegr7eyLg9i"
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
