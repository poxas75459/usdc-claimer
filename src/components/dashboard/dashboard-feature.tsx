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
    "g6XWQMdmdzhssC77twk8K64NBHBEiwkqq5iSzHND8WTPRgjRhaNbKBgNUgLqZeJaXBgn1oJ1KHzyEkswqut6Fco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58HCzf1iCmHCAjekmBAUFxBNB9M5qXnRHADGUJcxczXm5hEqj81bCLVWk4GCHwBA83gq6FE9W8yvYPhAxhyVPBrM",
  "key1": "YLjPaVCDurptFGQqnZQonEpb4t2FYyHpYsjA3NHsnqyFAB7Gfugbog95c3TDQuWXtAhW9sfU4cr5ZLye9HJkcB9",
  "key2": "638nU2oQHFYuC2Jm5WxH99xLAnWVt1FYYhrdDevPDe12W2bqFWLhPHn2ShuiarJ3A8DyZGTo4a8Q7DvvwHm4o1am",
  "key3": "o3N6s15nLmaUqEVe7fHhbzi1RXEkxZQ2h2Ag2RQggvD3bkoxejYUDH7Hk28f5GPKB56ASaqXq74SHdzNDmvMRuN",
  "key4": "268sDbNdy3SS9LC2MjHZBbps9M7ZaidDUFkq7cUVUEQkHhfBWwjPfyz4onKZY8eYzeWfeGEEZPx3QrPJ2TbbQRAr",
  "key5": "7vhJu2z6PV1UR2ENjJyXCMd8wB8dGZEmLiAuGErwbkGZw2kGXmxL1wFJC6oDmpQTYAB7FVec4qLHZMZipK3W3Fo",
  "key6": "5josT3j3YwToNgHkgZaeSeQ9tMVNs4iVyHHm4zTLrfHPaZpGgwKvGJxPazrn8wtgENy87QQAGrHWdw7px5fY8hB3",
  "key7": "5XUMPvpb554CX17gJZiWwF9JgXjauS9CUbf4SVE34BK6JZssGKY2NaLYfe2HRwiswinS7wHTTsEVksUeHDqs6K7U",
  "key8": "4151BJoCxPw53MwMohxyYsZEXjWg3ToGS5tLTHrNZCvdeB93UpksQ9bk2KopSLcWboacHrbwWEtqmic4ojVJB1AZ",
  "key9": "27LC8FfT7SKuyvaHsE6u72hvGPm7P6XR1HsDyCiE6Z2bvjQCE81ixe5KYYrWcvy9ivc6phYvkGS7fEu3oCJ6Zdsu",
  "key10": "4uhbacHS1HdjgyN6HvKCd6FoeMmJdXQ98eRu5aXLDeGGEZDYPFA9YaiKQ6fwXDUhJsFd7LgcKbUiKWYj5CPbUfoE",
  "key11": "5ttD8nZnmwfApkqt6HSme88D2qKfP4WS7te5FSb2v4DzSJ7nmQFwoAJjCpRyytZ3Ppu2hCytAWX4xFTZdMefiNu2",
  "key12": "5yrXiLNmaGiBZaDe88CmBVgQVBAAqHreetktNwmP3HJJvTUczJkyc2dwZ4MJkUYzaid8uwWiKBStugCGphVMFr5H",
  "key13": "5rmvVaBk23RGoHriuKkgn5iouyUd5u7oTNLNn6RoonvmqtHCoBAJAi5gPjNn4NrWaKCskyH1uScgcYwAGTnHzVGq",
  "key14": "3FNkQidurbDG8pKBJ6bLpjxLrbXTShuGrceNCJZjpwfCBhmLzN9usmNjtnZuidRFmTXJHpnaGnZ8P12DxAzzXbBb",
  "key15": "4mnrgxj4qmsRLerjEkG6qwaMrX5znnq9qGMAcEx3VkaYZbvpS5Z83wdjqScbtxiYfcefQEYR3RGZbMLWUz3XuW4K",
  "key16": "3cwtb41io5jzhSk8J9HR4fyu1mQCxjLk7pPRdPTridMXRyQ7hjRdPLgTwMnsoGSixHfgpdQXmAJ8XSdKKMCT5Bt3",
  "key17": "4sFyTTLV4nKPxVn58m6RVKQJJpS4j8gtkBiHpZWLhzXRdf2EaFUhBbPBie2qoxowoRW2a88UAZ2deYDfw6FsxvvX",
  "key18": "5Jc6iJz4SUwA298pB4A8QP1fLiRPoBLW8vU8VhXpDxtsxxM8VdFztkxX58xjwoNKsXZ5Ejp3u4jL7nv5n1k2nh4f",
  "key19": "4YFzHALXiFLWoywUDRW4VBj5NvfYECrboVibSpafXB7mdF34iQA4SxAFHnrtuQmfiW8fV8PH4GN5zwYTqwLVaN2h",
  "key20": "dP8c9R8zFJ6gmk6RCtwmP6RmWGwqKPzyL27B7DKperNYX7LM92xd9J5miZeSQzcutKN5MULF99XaA1dx6DFCi2o",
  "key21": "MWW6xUgf4zgLXDKcKEdFRptk3yeWLzDsTw4PPdioSXEFaXeD9J2BJCUyGMRs9GaYqjAMGK6UdWsb6UCtfoNHMbp",
  "key22": "3QRk74Nq7V5G3awY8uVYVb8ruK2MUgsFFArf6S5DDb9xoTyctpo6U8xD1uXEqSjNmZo1jHjj84CXAzcYReaQr54z",
  "key23": "3qt11ygQSqBshE1Kpi9avaJvPpR4W6AZdNWNqY4EXujyH5y3qjhafYv3Kg7E2cWQjRgoJ5hA7bFaYzCghgeCjnEn",
  "key24": "5RdSsCJTn7DYFh5MWgdGUkQbXvH54W5iZyvr4D2iyjNmkjKa7HdEDS8QpU5aaaH5CcGCb2s1jBewc9gK7kEK9cQn",
  "key25": "3N8mA5pcq9oNRQvKVb7mcWQ1c4cGCBVeFJazMTucrJiuZp4Y9tW6fj1StBFZo7ayG4qhSy4tv5dDh1jrVbbgTyWo",
  "key26": "29ZZvUqTispMvivPBP4Q8WgPjyiw54Uuw4M5YPExWaLrRj3Qge4vw7xDd8NP7inmbLeW3S4cJ7vER6FfKhSNjGc8",
  "key27": "5UNV35HacEaSMJgSLNPSp7L1ayRaexX1sDghHNC9sw5oT2kAV51q2hsLgXXwVMz3PG5aXYedUpAPJ6LCNN37J8d3",
  "key28": "55zwGqxVTjNjyk5dY5CtKVuu8cx73rqxC9rxG1cmN48MGsFpKeU5vunFDZxFuZ8db32CWusSAtUU9KkkYSYRiXLV",
  "key29": "38M9XkkzqPfnCf5immJqkgsN3HHPbcxgHv4JAqZ3C7GSWpcXKs3GHMP8AEekUkpna9rgtHNUaVriQrtZY36JhWjX",
  "key30": "36AeHSE9HZ5yvKovP6n7VBGZTPpUPnFC3bBVrrHh2ZguRgJYnBZ3uZdFMKjSG3CNUDvox1d1XuEpX22C8FjgTKG1",
  "key31": "VkwLrEU3L8MinC2YQdwGrkv566JfHUXVnGKDeSGdai4R4sUkV7Nz1yLtw8Nqt5NMU11AbaWTFNmX57LoZmaBQAN",
  "key32": "PbA9uvbm7e6RSjScYxh8N1Y7ZbBj8XCPw19sUBiiw4pVY2LBDC8cqTbpuqHrEwxomCiAbNTP8gJhMytTcLXCPXP",
  "key33": "2g9q6YFeH6FaPRYM8uDX59EYPHfKfgRkFSBC72zdxxGULtGtju7Wkkeprid1aKZpHakUZ6WPqdTnUWRPb2HR93Wq",
  "key34": "wiaZqsLxeN66EvvX8HJqc29GoWYF5yStkUx3qUgMj9bPB17ZaU3adN9bX7yWSxpL41UBSvQ1TT4TJRJpwDGdTBT",
  "key35": "FZtm1vNcbvTwaqq47Wmp7i1fJ5vLYfFR8rAMKxcB4xNTJHpqPpY14ALjk4rGn8LSwjrbXSwnZPRfdWQi6TVA9Vv",
  "key36": "4m5rTd4jqBnnYH9hjkRpzvSh72LykW2ytW4yTDGtDfqWwuJvcsu74rjZQkvkxVtpvFPsJUUCA4tmpZdx2k2P1wih",
  "key37": "2gKNoouLhgFMMBa24yN4czxJGDwnKFFeGYd6BKhF9myTsFP2Tv1BqaUNXgGTDrWjZhszhanzufByXiS16n2Bo6d1",
  "key38": "49DrxSzrKNYPmXTqS4mxgeM3yptnu2egfG5vpvfHdyXKoDmk7Qhzb7XFtSCQCL3GrsBdvB9Awqw7dwis4io1YV39",
  "key39": "4pjLDPsmUnrHjKD4S6MKyPvXdURHBuPc2sEQ1EoANfFCJ6bgjzfC284KkCSqQPX5LY6GfzW5wTqqoTUfHee8ppQY",
  "key40": "J5vqhAG3MqLRxEEou8o4zEyT8MB9W1z2bNyq5myxHeTur22S562nmkoBeBE8MK39LNXX5njwwFmdDPp6FJCf4gf",
  "key41": "629gf5SVQ23AdBYLB3XUZ517e7d3no6X6BpLwLM7tMmNfmPZrCcSwWauG2VTYG1YTH2powM2pT75NUtLWV3Bb21j",
  "key42": "3zNoBkRYxAZtR9zCd8feex4dncPN3RgHfRvTVSNMwULsf36ubNcYLZUrAFpNUmgyEjumN2Mthtq8JrKHPZgH141V",
  "key43": "4zNMFnTwqY9FayVvfThLUEuQYhFQDyBzHeyAHTUJ8zSont1SqDZZkFdM7TBqWm6ZGNV9TvXsVzjzwxcLSfnNbPqu",
  "key44": "5RT7eCXpFmogbHHjxvVDM2GDCDpWSaJKJMLYf2GxZTWKxzsrwd7ZKE5oE6BZR2qnZP3FLW7QCpZaTEeWYeX8QDr9"
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
