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
    "5qfENUJhrevSEeKybN6oB2mVwdFnci5boCdopJWJ87EH4QnVhmPyGDWizjLimaubbeDNNe9PvLSfYHHvNiSRC4fT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CAhtz5eZwMbKLFL8sqDXuXEcY3e1xZ3RZqYBoutEEqyhzQHcuFZRw9YdTt7VZsY1MRxpjfwUFEKm8opHW3Lqkkn",
  "key1": "3brsjVfskoeqsFLd7f7KRZ4NNsHB5sySzmgA5o28grCbEoccRtZqrFkZPbEsAdWAaGvqxcKkA4XV6kpfJm8pNjuv",
  "key2": "2etyXaMj2Rs14ys53FrmHSXp5s1gmP1VueSLjwf66LFbxNopMwp9VjMXQkMTXNDgSwQTHQXifChbwMtY8CNb4dsC",
  "key3": "4ZoLHtit7w1RdJuiWoNNJiHmHEPcR26M83PKsFvSBD3Tc7Jcni4ztxeREJoSdREpeMueXTYveEWzJb3yWiGDWwqe",
  "key4": "DKT3AabLpPyiXZYNm8gx4uX4vHiWpiDBZvKZHh8nCFXpo4MGe5YGuMVZy9s2UF4Y1A8fAnmg29hnRvMZvU77UCU",
  "key5": "5ncEjxPwaq9Xf36kwTxH3XP2kgrTMuNTnwtxUg7ZKDFTyASUNF3NaNujkjQkGRFjo2AgxgUPtjCvds5QzvPQJdps",
  "key6": "4CemP8DnTDV5HmmMFjwUdx3KAjCMLJoXjfXsUYDmx3h8N3kWek43iVsaiVpT3kQaEyReaCQ5oEqX8aANyCdWA5MM",
  "key7": "4EPz9GZWtHJhtNN66NFGcLFTgr55Y3NDTE6eQpUVJgNeGZfcjdL1WdGhc1jaJKMmgCzH3HmTbPnAsdtMHzwv9C5V",
  "key8": "2qiNsNtqNCZfvzA3gvrW89CexcwUu17QrkRSPuaQMpG962XNoRdU9bzVEvkZNf3W1BeUJSN4wPEyE4U8kQPGeZky",
  "key9": "2LKcwaP42zNsXqaRFmkBV7jtzXAWpgJtaDJ9kZiQSZ4Hx65t7P2UBCtQ49NBETnf216mGY1W9D3zxZV5rCEn9dZF",
  "key10": "4vG2RaMa5CC4LXbRPWNdnVT6SRcpkrokk8PNAWCzCo8mH6rqZPJvXo82HJMeebPWkPQbVbi969QnuHfSwhYHWxTK",
  "key11": "4gyeMHDAGZq53erMg8AE2RWZF3LboigEtwLRBE98rM1G9BwpzfoS2XwnqyViHoS3zr1B32P7qfWpSAMvvAe1x3ze",
  "key12": "puwQ8nkfCmndDepkXQUFwwrYSYqhUrMJSAehsY1V22ypLfQ2HN1ivwF8fZRzirmqfKVbuBAeJBrBEfhpVR1tCEx",
  "key13": "3zeT8tv5zCTje1cc4HH5jXhZFAZmeGqagQX8pdTWsH37HuFQdVxdVx1D59kcvVFUY6sRi1CkkVed1aFzgdsvc3Mu",
  "key14": "3ArYX6c644nHeo7MZofErqK2PZB6XVR8EQvm43D8tj2XEyLd7rb4SYYxyvJCHVb7N6AJ3TYpB8TybduHvPUz85hg",
  "key15": "4WeAVAgyn74A2M9KTkzsRZJVGkc3hNhQM2bD5MGnQvvftdyXu5j6xCS2dw7vai4xaCffBNVRN5KKLWCmMtCmUayh",
  "key16": "4gPmknoi4RD8G83w573wuQrJ3czh8A3GAwFwdCSSDSUiNMJdnPiUg2tKfhuCYs3phMBzS3k4GSR4LMEdF2E52Uht",
  "key17": "4bdWr1NiEnL2ZbDuTikLddrHQ2A53AECzXaHyoYRs2ftP681wQZpicBWBaSEb2YdEg8K82UdiFi6EKFv2tAFPLWi",
  "key18": "3bonU8bh4ZaABLpvEMpNfqjMwoZwHbMZWU8XRYZeZxqC4BePMTJCDHmkLS9xX8WUX23He4ESnGBNDoHuArQuPmSn",
  "key19": "qZVNh5uaUFW5DCVrJ5smU8vZTxRC73Hrmb1HArsPwUqyZt92R29KCvxS46hst1fTWfNkxYfQXd3KgzhQkURKEQB",
  "key20": "5nsMB3pmzHqpW8sJCF1hozwMW8rjaggK4Dayz1Rs2PECK946sTKyS4ijYL8DfYWS4A9BfrXWh1imrffs8749uoVv",
  "key21": "2FRX8aDLCmPy5F3tmZoXe9hxBVnAvf8CKf9fjkbyK1PL9wtVcWieMHRe9Y4D3osUYtLust7an8YKDF3H9jFqtneR",
  "key22": "4TcDqM6sqhZ2AhMH396T1gAqhzzBky6R1mdnEbkK7ZGgVsYmjKTX7fd299U7Y8coXbybnz3kyhwC1iQFhHzEHqsM",
  "key23": "3wVLJJ45HAjkBkgBXgw8nU3xKyBNAVCKELTk7wNm3UxDpCcYRWyZxFVhBa9PJzVyp1inVNH1oXqF9DYdQFm1xVbf",
  "key24": "5egM3H1BNCU9ZJqgyvtqHYsjBkhhqFhjFv7CaSWL99JsdNiVLgHCux3n8TRQqnaTdydA7DJiJLwTjmHbK3aV8o62",
  "key25": "4uhH1M8EGmJ2T6TppnyZKEkbq87KmCQ7JxtckE5Sy5xpQhqEiKsQyQnXik3g4bbN33ZhusPxvN6HZsJsbxxi8JDZ",
  "key26": "2jPuT7xvUDbVANdUghx6oNhaFb5GP5sXcpumAQC1tnTsFG9JJ5ufvn47j3gtH3XCc9SzJJycfgQn4znHtUNVqkpA",
  "key27": "2ox4AqRdgeZZgZTNpL425g6ZSQxewwT3hQijDFN9ZF6saWtKh7Y7eEMfLoY3Jw7GFssb6rpb1hyEDKQGUj5e1ron",
  "key28": "2dvTV9mRkdKdkpxuehx6sEA6XBKU5D92YpQeRYZRKQa9zeQTCQxULc1MDdXPWqmz5EcfG1VhbXxxLiekP5TDstCj",
  "key29": "3GCAt9srvkDNdm3qfNYRiMo197g7Bhg8gJHDhqcQm9tiruwMSVKBSeLcJNMzrH7fcWkBbjJ4mct5GCPADbFR9zBU",
  "key30": "2iCvRfeaLEeGMpmedda7LJjjPSpu1zaUiBTEW7YqLs8nWaq6AWLPHsXi3kawTPjWWwLgt9mydTcS6aEbS4ASLqgx",
  "key31": "32rDELfUNn1aeX281VBGdzCmpUaPQy61YSBZrpybGUkAqtWxiDBUQexnji7iq4eUFDmLv3Xf9mHhE2AY6V7F2mJW",
  "key32": "27LzW96W5s8QFXv6QcrF1kG1sx2qXjNaTcTYSPcnCmANzvSLvMZT4PQ4Bs4mqgVoG9catYckNxBAuxj9yUK8kGz4",
  "key33": "3xGwebbNxPbiELUAGmvgeiUGht6QWyyWgdcZuvmpN21Wdb7GZw2JJEDyQYGCmvKpZL6Spv5tHFHFbDcztkdyarvV",
  "key34": "3HxM8snrBdqW3b96tbCm6EaxJYbJJASUhBULK336oUsSHhZZwNDsrMEi54u7QN2MW35axxXAAQW83twwsjbZ8skH",
  "key35": "2eEukhVTPwDnpgAmSPD6BUGoqv1LkecohDVwAGf7GgfZ497S3qG7PK91PHgD8Aoh6RSkdMekbmciZcPviMZncPNP",
  "key36": "5JP5ofLgwZCZT7rdLA172rUyWe6njsQofQQT6XkYuxVzsudawJpjN6QWEpPJHFNWQTx2UvmtQgqyXzV28rqJmtNL",
  "key37": "4zkNp8Eq6qNMkbJyagLwAkg6oF1pPg1khB8rKHW8x1JSNrc5izkp2kXwaznXWzMKnqsgJ3P74VMfRLpqfrsgemMw",
  "key38": "2qi9ER3FmmRFVnBWBQoUHSZ6sL2JvcZK2RwXVjLHmN5wy4SUXPUYABadhiYR7gVgJ6p9wGLYtvT9vmUmB18mfBjS",
  "key39": "4q5maFrmToFdcgYucaf4TViGyztU8g69cYAMf8ovbiz28a9dDpaHMQ3fQYXNNeSowZvJca2PGmwcKWUaKVv2LQyz",
  "key40": "5KaASdTcB5p4gsYbrZQaGhQaBEcbJmPFiq23QMBKXJSMQcxxvXsu1MGCYQxPJoELr4byL3UATyYzXBfHm4HaboBg",
  "key41": "5gUnFgSGkNxRtUNt3iNKyUUDcBiWdiZTcSYtAejr9AY7ZWFiAfRVpLuEe5hpFrvvs7oTUQyr87g2jhgdgoCUHwTh",
  "key42": "25cC5R63c2zFv2g65WnWpcvbya1JkHPhnyRkV9zbPUtEEBpoxZk1WQ98PvriEMvhHHcazcTEzcLRggEKCUYkLtkQ",
  "key43": "2H2EQZd7kdycVxqBLuKpSJXGZpKAEfAh5zYs7cFSPyeG8DARXCceiwhsDq5peLnR4kvUgZCiQKVq6wJtb3JVM2rv",
  "key44": "4EstG2LYjPaBfYZZezmzpcGAtaG5vDvmDmwpV3sCUV9PwwwuxwDjqqMPAiMqnTHiVXT9gysMrWurm7M5hpoES7sP",
  "key45": "5t1GCnQ21gi1aLrhTbQydwRYe4PPT2RoNF3QahfXMoAGjcK91u2VJJaHJG7yx7pkcXuu1yj5D1Pruv4X8oKYpWS9",
  "key46": "37XGqb349KsGky5ZNBVQQPvgrc9srMZ9LJcwHge2Ab3qdH7CSMcrDabjg5b4MvikNFhxAbXbV823NpxCtZdp4y8q"
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
