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
    "4FSdEwWtmziPh7XnjUcTpFue7qwZz8E1jr2VSKPDYovhBwcSsZFRnY9BZmKdaJyv5brUziM71DVYiJD3DpQ9BARi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R1ZPPK7S5FojvBYwaCMjGZYpWEQWh5izCCEi6PmvbBB17umQNFcy3aSySH2Nmh5oHr8DpqPDm8jGMkBLnNPH5X2",
  "key1": "4CfmWkW4U2mXRn3Uk1hf6cTuZGiFAgdyyDPmqKvgbwDSjnbwuPZrSjtCbMCN5fwGLDiYQUVMyrBkG7uaqnJBWmJS",
  "key2": "47q5JehQnADZptr1McvkpRrcmnJV545sMzrP8FrvS1sJZPdxrDZHknA4gBH9xPNJZgMyzzvwHHh4NArCiL7zhwtR",
  "key3": "34UrhbKQh3D7khPtnGuYyxqWEDGZ563h8hr4ujnRZrCMrEKDXf2weWGCgkcrVipahBkV7bxqszUUUQjo9d69G3Wt",
  "key4": "59HVJKyYFpzwa91GHtrEBYMw56ZedNcYM26VsrWEXz7pJk3Fnr4CtnzEFYWXFFkxgPFP5QkB8qsXgRbuyunZGUoT",
  "key5": "B6PTWBoTHkugr5uGDRSbJBgzDx3Mtb2kUgJZHRMFUkYiMsTSpVrYYcSqwW4DWDYSW6E42ry7Bop6fSNSiKyX96p",
  "key6": "5LXpqpVrRSRdsWRhDZ9hzvEqSvqZKEGMTNS6qXe7bg69nU1PnVrhhtJ8ZRB58XFbPDECc9zTioBbnphKGUrCSMKw",
  "key7": "5bgLL6pZuhpifBW4hwzfwNZMmZrqG6DwYNsafhUtVuMKcnGJxr76ZXKzRq2rrRWaTvUVe9hozFdWdCjGtgStzsJ6",
  "key8": "5UqZMUatrPv2qRbzf6YcNTMFdqmg98ZjiPJwTVn6VAGLctjmHaZuvdDAtZehvGYjcLfhB9tvs7JgsrU2SQyKZEad",
  "key9": "52YaV6dUw8jf4et6JBAaB9A6THAsonc5RkBvHpRN76PeLm3LmWZiuAtCyGvpEuN1EhDxAsmbkN6TPFKT6ztF6XNF",
  "key10": "2fQRGxxBXLyYzrvWXV4HXLe8V1ZDjSUbKMz7LZCZG32cGe3e5wBFGW5LUdq3f1gKN3stpSi56zvkFjuGBbLWFsSQ",
  "key11": "5w8u4xbXNU7pEd4dyKiV5U6c752oYKXZPgRL5miWAf9ixuqXwQC5JGGgdJwjcuFKjCTNv9PPJLZeWTxBiGEhqPpn",
  "key12": "4cpCbXgTiWXQDJumTzWiFutzMP1zUx8Lte7yVhscuV7oPSchH6HAbm3KbEcmhXCAPMTQd984SfvHwNJfS6GaFt6U",
  "key13": "3dFkVXxggo61TEXrEPwiquXSoXtYHZMsKLLnTeKyxojgXzMCJLfroEcxwsK7TkagoV9zXNxvD47YnQ8esSMTqT75",
  "key14": "2ucp7vsEZaBti42rmqmdW3aPhfAp43zMgFEdmmBDwNCRs41gCE54toQyKvmASeFwM5PkCvJUk2Me5mxPFNzG8us8",
  "key15": "5XUhSkpubXzeL4XVSPXay3S99LJsFguLxC19cGCUmFEzdkRojJJCpbgHPELLZm2ePZXSDuSsQKGHMP13fCX62g11",
  "key16": "3nZ64XzZrg8EsWsQkb3jW52Te9h5K8Zhj9hJ5W2HrFPAhizD73dFLU6FrjnVS5PiaF65PdwaETWiiwUHTCYjGykE",
  "key17": "4sd7N8cASpabdpaTV1scPFm8tFNK4bRx23uZeF9woN6KeZrBBdKnNsY4dyPSUJZdRNUZy95FYHt4nfxA7WbdUYvP",
  "key18": "3q5Gfqmrn8jJaFNaqiW7z6AMTWdUEkAdr2b3DSHvyRcWMwZBL2bX3sUAKWNcVHUst28GkFbfyYjrCLauUgr9TJHK",
  "key19": "3GN44wqGbTKtJfi6NhMR4Rm5J68GHNDZc6XnBx8TNsUHbN5fZqwB4D9LRCcSwALe2FpB7teSH5omq9cHnuVR4aRX",
  "key20": "dpxM8Va3t3e1Cr7sYycrwiitu6LgguJyZVp3r6spSBKAbeAeFMCxzEbQBnw62kgpdg81TKgcihYpjmRtVtcUdHV",
  "key21": "38YdqqvCfqPe59HzUKb6G9rPFu8C4ruSyum8PsuABEFwdk4myfdRqQAPjvNFXUi4X2fgzS3yfnfU8wN766BYcHE",
  "key22": "66s6ctudWY3CToLHFPkwfAaQKfjkdK5rvBy7zDaqWtyXHtZxkCtnKHu88qZnLe2AubcAK6uR2m1Dd3nks2bhdVpC",
  "key23": "4D4cnZGvKM3Ev3xdzJ4C7zBqqE5oxnxmtSmC2LmgCnpmHi5efqGqXsmHMg3n42kTsgH3cvHGMN8QfMxvqh14A44F",
  "key24": "61YQL6uMLLofk4tR2sXdWPzPe2xkpwR1TKLhGq7D7Jgqt7DwpzWPkmS4DdHZ62Nb64W1n8sL2ov1fdRaybP8X4RZ",
  "key25": "3ZHenJJyL9qQ4DbNCR33RedxPtMJTnwVWGWKSdU4ykpboMgS54aUptRWYnVhJDEdmH3irjXy58HcZ9Tr7Vd53zau",
  "key26": "4whkgo9ZjZbHriVU6rQKjs8GMTcY3Q1TxFwLNWc9D6mrzbEV4oRgQtgLUXTAgayxD7tyeomPQa9mYQ8GQz3vrBQY",
  "key27": "224RvLtjaaPdqLmTvfkUHwGYCbooJgcqCR5NDu5MCKoGdZ9vQf56pPPjDCRYpaxCvBfv93W1enu18R7cM2VJWDzc",
  "key28": "2dEYumhKnUVA9ur9mJGJfeXT1E2KBXvapmmAFXtXYE72qadVZhWFu87Dn1BKHb8jEzZ111roXo6ku5DYWdiNTa6j",
  "key29": "4oPFVbJLYXzXwzxQSC6GwaFQtUr5YqYJLh738kMYtLBmUDEmqkXuktnXJx8KMFDbJkSNEyfAfrXbp4XDLqvRpw4c",
  "key30": "4h8kar49EMmWWpbFQqWiNfN9iKpABcyWgC54kaFAKcbmgUejGD8L55JDDMQeUy3NRjpKzrZazY9yboZWrj2oPeaR",
  "key31": "4QAbC6X3qVTRKXaPajdwAJfvhaW6zCJBHcSo5c1dD9bXYaY5Zs1bCris6hZkuVbEy3JaGCm6Lhi1M7Lmed5E9tP1",
  "key32": "4pZ3L1KfgEsozzZZi1FYtLBJBDXfzFm1Z9vvEzYCAJYuD6Hnp8Miz8VLc7Az3hA2T8sHg2quWA26DRhXnNHFxXu7",
  "key33": "4fSWToRV4fddWNPJsjsMCZVL9NoKQcGh1BkshH6hQY4Y1UNL9rXA99E2Ny66H4GfRntXHqxqgf7ETJCxBqbmSJMW",
  "key34": "25dGf2QiT65MZ9z531jy99skJbUkYUk9vLgKFAzNbnNZqfp4xo49i47shLnRZymJswBpqDvs3SJLvYwnNQsNSCMb"
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
