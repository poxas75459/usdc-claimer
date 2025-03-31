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
    "2DtWFrz1wd6yrwLb9ZPD8yfvDAU6ufz3L5P6RZZeTb7SFsQcSbL4fTwJhnH2fUSmKTFXgDfoZefnzsHPfoC46mD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48f1aXxGGtTXNLCTEkHJAJdjb9d4z1xCD2ai9XwFe9LdnMVuFkCqrmuSLUMj6szsR2WvrTqGCD1aXW1cZjHBGgsF",
  "key1": "5Udj2fhV8EwFgLstyYiUuXV4THaQtvB55oqfQSmTvJHV5GXnpBrT6eThu2QQforW3kuGhJkx5iir8rizPnS2iUZN",
  "key2": "SMH4ynA7j6xLzdeDSYPha8WvGMY45f8GZfo3UKvpmsDfdaW3V9fztGH5L3747dz1GNZAdftXoa9GFAFRDsepshL",
  "key3": "PbDJSACDfBJR2s2dHWr5ck6wbmMd2WG7yQRo4iGeBvLHx54jZpfEStH2yH9GyH3bKpk9SWFBQgmqNyQuj4sj6Xa",
  "key4": "RySAYmDoyDcQaKxP7TpKrSvUuqoWEGqad4siEJQ1A6jQUVQpVPnffmtGTar1nB7Wvq7TGZV142h2uQz3rveDdWw",
  "key5": "WHstJpbHdsVy6qN9AxTWwLR88mYfyWZN6NvBhK6ZNscqyth6KJDfmbExEMpV2GCg4XXBnQ3ATiGYx23ovLdoYGp",
  "key6": "6EiQCssHPf44ctf2msWsg9VpUDHNX2QmyUUf569mTyaBc75JsacqWwHKjPLZGaBf6t9GX6NCN3VB6UnraaTf64e",
  "key7": "4T6kBJbmJusL9WkoFG3znPdDQwyxM1AQt9cddMpKbuRQHioUSz8Wz9SPVE8LCZP9Vs5GXJrLNgpK8rPEmB3UZgju",
  "key8": "R2TLZenFFUjiFDintfCtNpW9vSyfhPvafA7pnUP4nGRb4nVrBbe12UCD92fEkHWF6Zmr3oDMWfUwPw6dWtcr3VD",
  "key9": "3S3FjbyF8AezdWEJV8yVmyDGA9pyGdQ4CE1FkVPKXsX7KFeosBcD85JzsGjynZasZm4r1mRWb2CzjJm4RZ2o1Spp",
  "key10": "2t7Ps6L4cBJpRJoDTLMfMzBzV45EPuYrUFgiLyGQT9ww4StGCgsdmnQNia6481neKiXZDhQdDLvVNNwbmstJNz3f",
  "key11": "4aQbXgJFNcfKXo512AhSn1C66QhYBKJ1RH6j9wd5yW4aatrh5AFQF19djCiEjzkUAwXg3Xy2PvTQGhUPeCV2KMG5",
  "key12": "2wCmm8Z7LiGNEdPA1uhwDKnzHqVDYkYUQM1XsGhYKkPApzD9gNreYCmx1JJwJZ37bjAg15vqVm4ddwMDDttwCrdb",
  "key13": "3uLqodrvv9FA3eHtEKjFibbPunN7k4jMCxCKE9gWpgfzuS4fb1v8bV3N3JKMDeWmTA57zDDgZATqcTe1JYXSNftg",
  "key14": "3UPyawb3wFTv5KqF1P2GpVtFaMJNUTQrt2emE4UTSVu8g8hbPnswwDHfCgdYC6Ty2hqf6gixiZGvjj9PSNENwvmA",
  "key15": "2wf9bgdgUEEQauc2A8jypC5G73x3N4ZyiYtkCnD9PSqMU9pFpkBNk38zQFKUtH2qbXZxiUS2zuwSW3fdf1hrnsXp",
  "key16": "4N3Mm6FZrksEib417goQu4VQBcbeVVQ4RWXcxKRXcsnuHU4aUWcJQsAh4KfRVdUxdV2Bzy7YGCo4KooE1o5FD1TM",
  "key17": "onuKwiKKrjHuBzST5JzGDmJS5VKByAm3E7nkScdjkVEMwNdfqxFjNc6xYJd3eCxYM1zUpewiRFBSYpURLwaFWnX",
  "key18": "3ByoZP4gNbB5aFrg1n3wq5GQwv3Azv6Tg2e6pYTLpQbQXfX5wm1AHDuvAjPXJ3MtRWnTLtTM8B1gejt6qj8EjdBz",
  "key19": "5YCf9JCsYX5udydYPDtEfkrxLbJtcnbBrivfi1tRajqV5AA9E64LFuHBnvY6pSm2xMVX3dhGbnshHHqXg7sNbPkj",
  "key20": "4B76vamBEd7ga7TZDzr8hBZdvSBnvTv6QVaZofcSG69AAfWD38XZJThMUbDGbzXGyUL6wZuBD9TYraXWvKNyrXFN",
  "key21": "r3GwVgdhESGNCVgaEXvmU55Cv43X6xDZYwWh3LzRyXvXvo9mSqMaqnt3GpyAuNiDLWUhRuSYFGRDoCMXptFBQvq",
  "key22": "53uWWg3u4TUmDzdGPzuHbxeCUNQMTER1BD5Au5qrpHNm21hZKqx1vpXi56fGjqhPkxpRdUHMXqMZSJvCLpMZxE8Z",
  "key23": "5EQxqwpHcZkci53LSnnLmeasiS1sc6Q4kF733jjbqzq3q1W7vFXwA8q3hHcHzM6HQN5EXne9pecyajTLeoVdXhPP",
  "key24": "QJctJmyTqGa3pEC5xjfsPUGpHdvNAPggVpEwskSxY4YATEgMEWGrWwWGFz2mHPiLu7R646gvGNmuJec6KZR79BF",
  "key25": "3gjBpZvxCh8denBp9EqW2V7m2ZjZGqpcLdzNRESCT9sqPZzwsmD4mpdP3Qbi4uBbduZLpT72XtMrwe8FViVKU8Ba",
  "key26": "5fgWVrSWXXRYXsae1jJREVqsuntPnZSxnEboyxkoZUMiafXXihR8t3CTDraywnt1edvqdC7LDi4q7C3BKE3m6qet",
  "key27": "5Wx2cdFMssdyZx3Cw1Wnn5m5DTP4HGU9w9aft66qJmtuHuGNTqLPpzCTZZx1B8CmVgrjz43AuoXiueUWqu2he6re",
  "key28": "3KGhbH854XVhAguUJSy37XPkjcenfbo1jC9qurDQDGtV1vhwEHx3PzqhT6aWys6VrXa4HQLCAqqsEyPy4rmr2xnY",
  "key29": "3DAvKCqLTNsGskufNzHpvd4L8f9B3Fy9A3kJANhqnkKbKA4N1X6n8jCtgvB1TbdsDbZHi5haTwrTF5TP72EcVrhU",
  "key30": "dqEPem6nXRAKPKGsvBDVYQXAZR5W49obbY1LJ9XWgnQGUcZKhPtrHZWrYiw6zyGi9pY6y1531Ru4mnK7sVU336P",
  "key31": "55RLrNRdK8kwVfzxwFCtXMpJDUYaDtrJNk7oWaq5iMdnRQUP8oTXvvGXe5dYta9HJyBKoT7UWhuFxuTsXKdhKG3q",
  "key32": "4tEQRb2zfTPMLf5VfayGZ4gpr1ZMnkHaRAVjDpCwZpjSNeW4c429sked2D29K8eiL13rLkkuMxtXdaWf77zLqyZb",
  "key33": "38qkqwLCuugNXXrWk3VLrbW8JEYWFzRZck3REQHvCt93fxfiHnaKEd6YoPJSooHcAYRNhmActhSwBcqkhydrdTrW",
  "key34": "292QEnQVyvPX72f8raGoQ3mwaz3khgfvxAhFPVck2vBbmTMvddV759JKgpmFp5eKXTiSfKhb8oMd4A39MmGiGVq4",
  "key35": "3TSwamjpVxWz6T3qQBqCcPsXSet9huBY2ffUaUivgKUhi6GnUXyZKptV1LuGogR25dMQ29mEUMKFX6UazYmaGLT7",
  "key36": "3GXHCSHPzXDFgH3e6KiWq8UzzQ7bg7g3eXhtR2Eu4EhVJxjPe4RYJ7rMYx6X2C6UJxDoMNtbs7Q91jhYFAR4FVZY"
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
