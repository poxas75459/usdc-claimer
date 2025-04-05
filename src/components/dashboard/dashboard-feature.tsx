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
    "5rpNeGrmqvBZZizj3qZP5NG8wpXam3QLvKw6vyHyt51R8TS46HnfoggCNrg9GeoyHTqtPTij9wzmdnt4PVo8tkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xHkNpXh5hvM5tXGQXMqXAuNN8sgkGnEnDucecM7SHJ9GrKmTgM9BUX7aU4goWiNCUQtu9Xmf9D8YzmJFoeQGKJw",
  "key1": "4LWt5ff4v9jrYqRAfLjRPE3RuczTbtm7LYbt4zpo9NNb169P2xYA64HyiDwU9kidLw1LaC62Cziy7X58XduWJw8Z",
  "key2": "4BChcU8sA3tGZmfFYMyjd5QR4SsLJBPp7LNn1xT62jMDXhgjZdF3umykzhJ4xoXYusa2ULsjxg66mUh4pjajkK84",
  "key3": "2oXd3vnrtsdFP2jEt3cN9KH4bP9XXFBxZJCDtdvHWsmZtW6X3DvuPqYkNVHjMCk2Ukdi1VysCKhGtwWBG5ZhPcjF",
  "key4": "yiZM29yheVVGtSAeedN7mPqN8AtoKQ4adAeoGQcgZyXo2mVDiHdCCCZzh85GRbkt3xHo26emnxt21oRNepdMKGV",
  "key5": "5kK2eNnLEmmD47eYHFrPVP3uXkLCGfG3EgaFAsAEDktNsni89aukKXa2CbqADUknagBMXbeuz6Rhpze4hJXfWNP1",
  "key6": "zd5gsVqciC8WFG3QDyqfAehJQCxQLqJtjnrjmsYPgBYqWZYnPKpFes54TzQZNm2a575PGrhMsg9cuKf8Huhz2Z7",
  "key7": "Mc2Fki53jHVJ6LnvVBHHqBvH7PEXccfoVQSXE8UC6eGXGaZ4i8H78RHvbhTLV9bRETy2pKKz5L1MqC55FXBeJBe",
  "key8": "K8qmZ9i2KnvqkAfnEg7n5D2bLJHYi1hbUHks1pzbz6DCwFBf6QasM2K1nKUjWw1z517hdfrQaASWkJBfD8ppZdN",
  "key9": "pQLz9N25wQHTsSzNdLQgjWpunpLakKUgEq6Wrw1qXN1mQmqMVrwKF9D2Z9SGdyhkwEUYHVY1jVN1U711XghVhwP",
  "key10": "2uuKnBVUaMq3YaFHo87fHE5i88FknF7PCPQ7JGgoiNh4WyYPQDJkLKqFHf5r2LcqcW39WTkj2JV6YfyevCq61yBJ",
  "key11": "5hHLXM3PcDXpA1r53bTTjHCkNmdHEcXgxnDrKH2eaZj5HS37B6JUtMf6FSt5Z8uBGLWHWYU5i122aiy6kHVxiKQP",
  "key12": "4QF41sNWAp5nkXxa1woJiAwJEpRLSdCU3oqQBrUhFvdcGf8MeYwS6Q4Q87NK4CYTKz9jmo6Q4mL5B6HyDxU9HyL7",
  "key13": "PtDZDdDoRqrsxJ5jx5nxeMXY5K1oBJTqGvGT1FmCYjZzCz6BeW75RWjM4RKeYQ1U4hequ6YDCV9wuGFfjuf9jNS",
  "key14": "4Z2Z7wqtjEdf9rfmugDEVdXCmogyoN5KPUxNsyCuM3QNkADmbWBUvmfnUQfu6iwrsdKg5Dddjvg9iZB1N98pA2gM",
  "key15": "3MBefj1xjj22VZBUbNihVFdz1mpcZvLeP1z2iFZ57idzHct9vkkcUZXPFFkZiYnoaT7o5ZkbxNmivgYmhCXoy9Ao",
  "key16": "9TkyWKB6u8kPazZQmbfxNBU392myfNAYDhCKCv5w4PN8PQ5Q1DkXHfg3V2rB2YpeGRMQwgEGKKCrzqc9qV6ngiM",
  "key17": "5aEEtQWAQ2B2HSQ82aSuAYuKpGs24teod38Hwkx7pg6Vp7VsqvSDi6si4nShkvWovPkq6tftzf1HDT6DjTems6FX",
  "key18": "4fLLcpDUrXDydV1r4cxJJdGqYqqhCDLPKvWJULqyderwAWXPysXTv2GKcN5gWNAwEYwhW9CT5527iLAi449S15tJ",
  "key19": "3Mg6GbV3qy3Bo7W8oFbkLnACBMXHxyKQNHU2EWW4B5a8SDHh4bf6wor1rzwaKxYUtSaWRNVENyCuudUZnRsQe8aV",
  "key20": "RRpNjyY3nWdgtZffFz3RzgDdJGjwWTKRdRwaG34Xxvmvb1sRcsBFHUTKTouaotzLD8rRURkE4yUm9BAhdFcJ8zB",
  "key21": "2LGvozDrSthWw5RrEQcs5jNto1T9krjsr5TL6mi7s9BYPpJJZjeGPfLbBn5PC2r7SiiYDxYc6K2JdKEY9dtkpkvG",
  "key22": "Tjdu3mrNk9moDAz9QYK74LinTsTYSz232Cc1mzPcV7FsCACUrnXqjdGyQWJCAMFAHkWANGiBSTGrFWREeiPdtUm",
  "key23": "ao2iT8J8a3TxP7s93bEcJpJp4d11cKEFQx8tGr22YmnjjqvLFJCJ7SG7X1etrHEpxtHKgwmUEDiykU11JNhkNM4",
  "key24": "5gDt9PR8wDuCMLqaGCcFdMrpPq22y7sx8ULLqfn9CQq1SH64Cs75i3PBaHskuQxPaPmktm5qegELiapajdGrjHLq",
  "key25": "5TeZ16USeHbUA2sTCcw2hoeYicQYPWCc7irioznkhtroJMMMo8SoBvAzWjyAemFqZ2gCf9pwxVtv8ohDgqBNzdnq",
  "key26": "s5HPR4zMqU9MMhL85BQaG118LxwCeKvcyrGEZy4qDc5wsxtkG7tr3P95eF6WtURUQdmvyi8o8BwrHjVhcbXfmow",
  "key27": "4w9SkEUKfpHGJce2xENMQjj5sXJKzCtqYGFK1F5TzsRQTFuBmsqeTV2wxWwhpVe4U12urvd5RKGqvJqbcjp3i4dt",
  "key28": "3K7nrYsPcqoWdJZqGDdGXWzFbgm3CfTYUwrfhgsaHFyXUnrojAGa8SzjumtV1sg1rk4uwxsMemRz9u5wbFvMfmXD",
  "key29": "2XRXkzM9ZMmtXdmf8p1Csdi58zBDtFGQ7XoqTcLeNGbeS5HgzTkzxFLXNaiztRpAFujnENCdMFvkucB8btGcu4RM",
  "key30": "N3NG6a5A4svfycqE7qYKTkTAx7q9pMGWkQvdqoDTPfUvWFkVZ2JuiJSBcfEHW9iyAJGnPvtJYVWkqJHkvqe2VSU",
  "key31": "4cUg8bWK9iLyAzVBoZEUVuwKWNsPfowjoTcXttkbPDpDJPsbDJThFtJbxPTojVYtUsKHTLDqN2aGZ6dNUwuPeDCX",
  "key32": "3BQRzucDrKa6fUuyqbuLmh5XshU8iukiPnU3iiLxtV6jFUBn3xr3C5aWLPGfeLSzWJdRvP7anGmxLPBBckajF2pg",
  "key33": "2pjnwnVKFiatd5Xef3Y4oDULnPWzRAzfbjWXGokNqfN4iGkfzdVSoJb63rFg6VnwuBhmw5xedpCZNuoarTp36Gyc",
  "key34": "2X7dQojYAUcLiAbQ8Rnf5774enaCaSSRC6qcJa3DFfUrR65CtNtEiVjZiCxEE8jifcThppDWKviy2SU3ufBxVu3N",
  "key35": "5tz3QFpxYmkLBYUQDJRTUHEuH5NxcrMNgMdtyjKuEqZrBKpEbviXYeVkGoTPqSsiyWR1nAbQSXFVp5MWh9uQcukE",
  "key36": "5yz6YrPxc16Gqq9f2pPixGNGx6nXgpUcejWmNs2uoKfbhmuUy2uAc5z1bXrdTQQetbvL7NGc87McZ9XUmjQdZf3m",
  "key37": "5ciBNuKVmWTX45UFRkET6tTohLqgDDH819tnBg6FLQwTAo8HKdzfgbpjF4WRUmcLagpEgGdLoY55evv8RAyfNpCX"
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
