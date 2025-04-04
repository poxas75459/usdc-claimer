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
    "4yCXU4Y5sgsvg69J6nPE3v8rWeRJBC8nPfR42ndZQob8iTLNrrnWLnE6fTZbM2BvV6SkpDNC1CumhdRddHGriJVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63TbkWd3pCNQ2TZuRoWujqDqgxiWwqrdNW9BmX9qFEK1FYAoboXSFipbdPPwmrnTxCg5zekZCEd3QPF2s85JKeMU",
  "key1": "4pgExrkwd1Ce2vXZ2fUJ86N8MDwwmNr3A9WGh5SyDGEQ4ifhnnAVZx4FbXgNr7BbkzrErbkHgbEVyrNZTadYf8bK",
  "key2": "bDFXuskNDhCvcQVoikocR32hizh2ndby3Qbe5pkmutdd6CyGkKbBYHeHRporWuQ7QkPsi34fFRV9KYb4Qp5VWzQ",
  "key3": "5h9hSJUhZ6zjUTTzeNrwgBw3QcA5xnZirmyTburBpk2W5S1eLtPdRxjJsuzBjYB5Afr8T1vqS3kGJu9Hst15rChs",
  "key4": "4AZfGTktJVYcx4JWX8sbmKa41v1Dgf9S4Xjas4gviYHWgBJ4GhJrz6g6JRv9GcaQqVKN7KdJL8pnyd1LT9P9SSLB",
  "key5": "3B6JMBKYEWz2auYsn58RzSghxjaGLvzHviq6inL62eYofuWdz87zAamZtEPeTYsjzburDR84kc9ZYtPvfc72GuR",
  "key6": "uQhCyAi4oiJKcG1JQm8U6p6G3nycbAsGxVn2qqmPxkwS9bXMxW1XBUano4DsEH4Y4hF8qpmC8YBVhcpUzD1TsvG",
  "key7": "5tpnPKoUibBELH3oSMsv32bqLX4v9MdXyUFetBKxuoEaXqSXfPAQBsKX2awcq3LXYqqkvi2hcWzNw53aT9TTTkdQ",
  "key8": "4bq9ck5pvXVGeKR9PijbKFdLVG2n6fKHKyFtLwAzgAxLRHQPDidnSwMz3W9HkDwgiNtYAb4VwWESjmYjHh3FNJdr",
  "key9": "5Cam5bCrZ36eyRzDZqurd1gurjXyN7U56NDKKzvTy4Pb7ySFVDUpwBaGxcaeZjdbUxqUkZ49toxiPN2ZiyguAQ2S",
  "key10": "33t5CWgUsiuLAR6dfgEzV3XS4shp6fmpozWnYG7oYsL6EizKfp7uEqayu8pjqFFFwFnwjPaYm6keux3CFVH14HvE",
  "key11": "5sR9NQqH3XeGucXXSjjNJ18KPQwD1x1PJWgyByMbh1x7u8MULHaWcXkt8Cj9QyTvnBQCfARdZLufLYCDQR8oBM3h",
  "key12": "Dqe9eLynzM7F2yrxesCBgB76KJXHgmgmEyoTnabp9jqsJ1rpo8rdmLNiFY3vnQXqEdGtwYAyzErWsagiAPrseP7",
  "key13": "2vFo4XYmBp44wbFcmu7AC6tBux7A3kWHyipQWN5rPb7rKYhjwX5Rcykb98Q5qDrKnayqDGmLd4CLCF4BEtTcCpr7",
  "key14": "5vyji87DABJnCtsBfFahPwxg21ubY9n53Z5q1zoNg5ny6wJ3qFEwz5kHaPrQBdLMETYRXeKQhGu1ucz8zitwN8um",
  "key15": "5tGoZtcuQUHyCBy5a9NzuyzXDN6NVyaFD9SLfdYscSkc8B2UiazNLACa8Hw3VBxuWevvz6X9mWeQkc5tze7FLQXk",
  "key16": "466uKtdeU4asNQ51ciDJxJpdZBv91dUJXXaT84GUrG4VLdUypBYK2uJV6mmpViogTATcve1tjhMVzmpfGqfJPwTP",
  "key17": "52zV3ezewrjRDoDzETLMm8footd7wvSLe1WpBvnxE8TWGMgpNRF971fMkneWxux26em2DfgeK2vRrjTnEfA2wwty",
  "key18": "26h1aPooXczkwKMgBeYJDHDAPWscVDNeHNPqhRPfG3QbqjABchuey363Wsvpc52sJaBqJzywacNC2ia3Uvny5ZkD",
  "key19": "5xSbx7v3gEgqX7TybDVzvj3NS2t5Jv2G4CYAey3pqGA1bb2QEp4TZeotZkNcv7JTdCxSNdw181rcABP3FaFoANY",
  "key20": "4knSDKsPTszKmHjE89g4yZjDLVYPm1qNBp6Zz1xTiXdmBN8r9KgCQjDUp6eM7zy9LGnVRH5ZgxhTjDuG4HvrwSaq",
  "key21": "2yvR8Z4QtsdKQ5D7pFmUrnAFnVDRue9aqvx9JmZo6Ap5tFwFbKtF6QetgbudEHcRTznbUXTbYN9CL2zRMhATQeF2",
  "key22": "5NKaVHENE9be3b3tUxhBfkGPgBoNhwoJ52g97vDjd3nid7bYpuModV5V9hNeBk7BNtHi8ErxabjnhVAHDuCYdq3z",
  "key23": "PZig2C5T7HyGrfsBgq4pNbopBtidd1BaNRkAhJX5wDBBTPoBpxjjvyrGe4xYvEfW4eaFjhwBiBu7rh3jmtSTPkR",
  "key24": "3rjpSQ3ExTpXZx5Xmd4cBPVdQXCsiwPYWtGFUa5AWf4ro6vncoCvbPPkP8DNc3xHjsCmYWsWbmcvWcSDi9XnnRFs",
  "key25": "5H1rYzRE13BQwkrGCrXKT7JyFWLaLYoT5XAaBJAtSVQkxPJcQrKiWMdq4cR3rTFWpxYhEpagziRcxm7evntv8pZB",
  "key26": "4uCtK4GTSuR7Q26kBy8KvTbxxShK7HgQS5Hdw2Auddi9vU3zuEtLVhqMtu6p1FarkX1p1uvM1Sho4WZ2HffJALDB",
  "key27": "fBDvxSAanWPL4EoMGfFY8iv7JW5MxBKkWedWy8pd7UrWMo9FWQZojj3MeaHuf1TZjHynTrpi8w1QxwxJh6ZpLAF",
  "key28": "5Hi6qHjiEkyoJ61bcC2ZxemDi6KbCPvoSHJq4tfPid4egwaKvAwKiaGrH6mjXgS9Su9pg8zjwKCPzoSftyfpc2o2",
  "key29": "4byrLKNFpYrc6Labmeu3zYQG8V9sgmujGhat71Q8JRtCgJ8dW7fLQkJNtJrHr427aYLjnN3c2upR38wgitxEytnF",
  "key30": "5Nv5sT967p59C7rgaWbddzJ6mpqkHfwTA9PYiLWYV8RbcpzFM3GMQ7WzvWQ7jgrpRyVXuhUnBx1zs8yYxMXioXC5",
  "key31": "k1x5YoQKGthcXpaXjz3DT8PfedUV1M65Ggt2AUSgXFf1yZhGqNk517UbrdVaxpb6A7vG7NrDB64abXEdfneXECy",
  "key32": "LmTDb8NsDJJqCyCCdrQawWkzQVPooDuKEDyre54eZNFu5aPZhPGX3pAnVX1aJwYeECbwXebu8h3ro39siN49p4F",
  "key33": "24TV37v4n7w1szvbmz49BZXm8Aq8jsZ5AzpDNU5Z7e7KQqHdCavmNfP62KYcSXU4REFv34aF74gvjCnwVxNdy7VY",
  "key34": "4VSFG8n9nYiXvhYD2nhNe8cDnbMKa5AQmUWn3bx9wvzgGakXMYQZw5myE9DKXWugqsTEx7Ka1KYmpFMyD8i7dyrU",
  "key35": "4iTYWDipvSt1gTTPDkJVBfsD28T1Cp2bnKpbjBC3ANG8xLEWawgADChRhH64ZKzJ8798k7VNuTzyy2RDyLn8MvpP",
  "key36": "7LJHLCiyXuMbC45NYCwzhfht4QXE4Yr5uSgPuLAfF3j5JoEfywgcAm1YWtWGY6Tfchq68LyrhdDZNsvEAtaEMd4",
  "key37": "4xzebcDLotRvM9gYaCGoL3PZofPNzyrdMzRGqbHSgBL8Dmg4dwLAUvFZkecS91tESCDguahPXS3orVnVQbqb5S1N",
  "key38": "3tPsVhJ4AdM4ziyWkM4YnzyTrY2tK9G2UKtBPXdr682D9pv3wZGJNjXZCnjTamHo6vFiMMFfpkKkqfNTNeJ9Bpo",
  "key39": "54nDYUUXPcz7WyRM7WP81N7VqyRP9Dwbok5j3o87VW76r2QQhv1wgwmrfWCpukEqUGta1F786VXxDMG2LkVgYPYN",
  "key40": "5s9z6auSUE7Mb323D83MS5KFC1ik9h3Nw1T9uSWPBmGMovTjLEq4kMMBhgBnpfnMZkDGoLCiPgyUgzo34AzRougJ"
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
