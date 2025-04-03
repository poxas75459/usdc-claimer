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
    "2Yrh92vkCkBuHsbCABxoUsZp4mAPavNc269KUAvsyK789nwWLM3rX2JsoiFDbEWRD27xfg3CDUzFvarnT7RLbH3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rqhUpPKYq5KDiYHu1ypaEZHUS4Rvrdad7aXtdyQfwhmxNTd6CABziPXJopcCAjLTccZz2Tm3sFu9DNnex8tw3Nn",
  "key1": "4ovZQFFzuHuTu7QX4GyypHrShakak4RfcRzVGqzZmQmHWE5QGLTXWMwAVBzu1MMK8FUpho1zyjp22YLRXSWVjPah",
  "key2": "UjS1tXQ7b4Tuz8oMW4uJRRzB8Jp46WHWWqVs4ikZisCt64AGhQyjtxx8rfCU6zBfMV6JMfuF9pXLGWrq4ceaeQf",
  "key3": "Ci3CxguNTzv8V7MvMEDrnpKTReWhdHtdDHPsbF65jXVwZenFpS7v2qTpkpspYM6DUetvKLExUAumxKyAVpjHUeZ",
  "key4": "qX1f1cchhjkW8NQVDLRkrsUin6umDmVGnwhX2XoRtr9vtddcY2b6f4FDc5Nq6HD8fEuQGeVfxsN7uM3gpayDUFc",
  "key5": "3z2vX28YMmRshwhkKUsiBqajGUS4WeJK8WrhbGbWN6UR1A4SMNV72YiFr6ct58GMTRYf9sZ4eyTf5L52cZ55NS9b",
  "key6": "2nmJtf3aidLhohkYr5YCvpXfu2P9yuxf3ZCnNJHjsBKGyMni3gLcMM8FnbcA9Fc7iwXLVt8u8vHgeLB9TVtBvi1H",
  "key7": "2fQudky3TPcYuYB9sUV7pGz3FgrFbpuE678nzvpCLa84osVtoFEPVPeCLjS17JfsZijsBfumcVQBeDFrsPRNpckC",
  "key8": "29UjJBmUeE9uadK1JX16FTg4oiQdubtt5XwuEYCvuDospw5CgYZQEtHfGHZm6mbqT92i4ZBbhH3iX3PJ41cS3r1K",
  "key9": "5LBcj69cQJjFZL5gmiNp9fo8KZyEJMUjWPCxhE65QSJZFdXf8qv2NXCi15NF8dqkk6PmnyZBXW98KPKqrnMzb2H6",
  "key10": "4G8aHA5CdYSwiAibEVzAd9dz8BrXeXHi4bsKrdQRDXh1QfrkUAVm6wZhHVTyHkE6sRyeEHvo6pprAviSYxzL1kds",
  "key11": "2nFuUjWYhAMDhTCCyEbQ5e6GeHD8MVwnD9Yb4cwC7eum6De4ASk6Ejz5AnJiL1vX91ZZJDmfgy58o2MRkc4MH2Vw",
  "key12": "yy7kK8BwP2pdeb58gAuoX6mhhqwCMDmdRpeh23icc34PJ61Nnm2fLiRuT6TXdbUe4PW7ePuWoAhE8S1Dr1KtsUa",
  "key13": "DeW2n8BNAJ5gZzfG6AiSWVpnu7RzAwJSYXW9yZzQsmVR6JzKA916xD3r3CjMYD8Pcbhs6jvDJW1byZBCyv4rNiX",
  "key14": "2sgbmAmVS5PFby4p4JHwzsnH1yLtgCn519wjHeEVysKQNiPGcVjF6NRVhMRDwn6dx67P3sgxgTt6edRxxm7iAbtb",
  "key15": "4uTL5Hi1vGzXeQ4t1MJxgkV2KyRZZE4RLSy91ZSpKd2Qp3jNfrLU8nVUhgzXsJpnV7mkk8PVVurobCdqkvX22s8U",
  "key16": "5cvPtF6A6U3ysRDEdGNJgJj2CwrpY81DdB3wwMaL7ZDGwbB2cHHMo1runDMoe4rwtxqjquWwAK6AYbAPHutfsf6S",
  "key17": "4hFxEWC1kb3qMvQ8Py1qsQumQxHf5omvkxhpFWdaACgWpmA1p73ZUFUb71mgu6iMfFq69sviL9jwnmHgewcmz2F7",
  "key18": "5JA2GSaJ3UB26KPMnEuM1oC9t1NqU71EtDZMUc7yP8Qhz9UUU5xWXLPXcLPmge5B3Adt2zAZwEF3kf77wukDvA4i",
  "key19": "5mKiweWSSDURkC8qSS5HrUyBckKx7s6wHZ5qefWNUy6QTpQxvEwbmQve2UyCgTNXwuAfoGYLdwwYaELs9FAP9yCQ",
  "key20": "zL2fuwfvf9W5VraC8p3m9PdRknxYNudo8SJeKBTr9Q3PphquRewKXzk9Fr7E1HVEAgG7rVJGM5WGQ2QJ8FZwvcM",
  "key21": "2Yc4nzZV5fA1Cno4CZfYLufaaE2yDgC88NR5RJwjsuFiVpJTWDDurGNfCMHJnXfUALAL3KBD7EQM7hKo1fRhBUrz",
  "key22": "4vxGPaPDu9FtVboifLwePzmNW7ua9pQ59fAw1o9jQFbYxUuvwsBTpKAd5bWgpsoeAYp1teM9XsJYNqyVgMaizUGK",
  "key23": "5o2WJpfNLZ7TGKAgPxrCLoxnVHzwdthKroHhUekU9mdDLVRj7GxTXpzJaWnQKQFQJsuXAjuKRvZAx2CKhv6Hpa3a",
  "key24": "iitbcW5ZBZSp7yMDVxo7K8QCxSRjXrhcRp9Nf8vbcvMZozpZ6eUEMAvXFUqhDvKTLqabMX2z2J6EP9QiKvH6VZZ",
  "key25": "2BFrD4qE2H8of9mRFJhKNYRAC1gF6sgJsidSJMmwcPwnF1EbV5wyr8z3hCqqgguYjpRYZaWDxuEK86CEMLJiCp8Y",
  "key26": "4yS1MEJGQzcTB3wh9wrAs78HtykiXfiJfThJn4f6fPQMJ1zHoLRxVvuGghsSnWvELcF5D3MjMA689AFfchwvCje3",
  "key27": "G4LsxqKvtY6nKcHRtqgnfG5XftM3ZmRJFRyTrgddCJPJwJBNxtnDE9LodiNS4wuVasGY6NhE1zrSWpsNJ5wG9vF",
  "key28": "G5CsbrduyMxAeZmaHdqmHeF1wZs69yryfFtMwmQQ5u84Kss2d2ocRqTNVLw4arXHojPVXPs2LAtCENzC4ZyVA2R",
  "key29": "5c2JrMvQEjPwRqmuHQKgJqcZCUvaA9NZm5qHwhAE2w2mZTQJbnPgJumsgEmP7SSoYweGTYkUKLUAVDat3vkLLY42",
  "key30": "25mRWZivaPfZENmy6GzSnhpswZ3GoeHZAcwpugsqJhyEwsmbiA6744u62M95s1RhgiGdUZgSt5VUwYH7BqromGbx",
  "key31": "2vUxBfHadgdY7FanYX72CpA8Y8E9nLZ387jj7d8or45MtoPkAUwaf2TFoCLx2cNtDsF2nuASF6NFFEc13VJ4ib2t",
  "key32": "2Nd5Un8MSxaCzZaMjCE2o12q1B4bfMr75gD8SGkJMWw1akZvSuxw5aqYaTeqJddFqKa71v9mWaAAooXdvreqrXKa",
  "key33": "2c39gx6iV21ty1faaChoKBhGiEvJooJUXT71U5njduGtpDYdZnFnxnQNujjcZ4CLewKCK5rKixzxzd2GwaP6k9kX",
  "key34": "4XqKJdyZJahTgeSbUniMJN7LQE4ZV5ZQk6wqzFTQGL5WvaNsWBK2U1v52KDFBMkZ1UMk4i4wDLPgcvKCgbTW5oAx",
  "key35": "3FR5qgBdWE4McZ8TF2WdEjcGpfpepf3ztNJYCbU59jPpXzcPHS2VCMnZJ5vfueMiYrUbW9F5jfvM746uuPo9zwFN",
  "key36": "3aA64B4Sjtej7Bg2KPgDR9rsvifKhvyqkWbTydaHo54tgj9sD77eEC2s45AuvkEPNAEQgEoPhWs528iry9T25v5d",
  "key37": "3CkLzSuZrWrQtuYDs9SV6pexgfaL3299WaPefv447MWToCdetcCQsFPzf8FtHhJEG5nAA899avjwsimu9rsqHtfP"
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
