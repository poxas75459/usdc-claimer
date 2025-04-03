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
    "d2gwodfyPtWLauktfTgzNp1v8UopNV1mcjS9htKoyPoDYtYjQbeeRoaZqWyPVm8FT8qRbdYBwgb7TPS4EcNum6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "284ryoWqYdGtywAFxffvwb7LSsi6Bs4MZbbUbshoZGjGWETXa928Nb4xjXnk9w2mEQtbMmUT9JT3KoTAX6iNGgre",
  "key1": "2kHMhyfrmmXymUC3qw5catvCj1zTVk51CkRdwTGBnqhStMhqbdagRc27ZrdeDes3XQ5vDGJLvnC6rhx3pfVfNgU",
  "key2": "2JiGKcYi2C5HwwZgCiQY3TocsB4n4tEkyJhbd8sNM5qo6pha7t7koVag49oXvvn5yFDrG4Ged3yRuqsE4gs61Mjj",
  "key3": "3CbKfyLmwDJSLcbsDMXdZvhMDy3Mimwd1oNYXtnkgEerrNXHvpA3Diwop8AFcsLX9i9zF2NBNaU86oJxFVYWHvtR",
  "key4": "evnWzrHY3hU3nfArraFys9RvSLR396ARfDn3kABwfZRk6H2Gp4474TtJU4pxucAz2hutLX5mDYgjJY9Gmq246LG",
  "key5": "F1dMxSPHMd6GjAzJE61boCqmz1NmGVqV2powV8AnXTQsK6e3h9ck58qW8JJNs2rcKyWPH9K1iZhKrpbSPx4PLCZ",
  "key6": "3MPbdEB4ehijHLsoqz5wHbCD6pJpxKbQF2kMLmd6UdReUfa2oj7NHZDwwW9fA8PtVPXtocs4UKtFMZSA3buGDEEw",
  "key7": "39TdRF9NzcgEZeA8YC2gVBU4HRg1bQUyprJgoHfTP7Tbh6pABx3znYs75hnzqpESMXartgN6P9tPmn3UjPniYz9o",
  "key8": "5DQTv9m7wwigCw9PqwGNNkcJC4T7LGdviXy81xL4fFV4EZKqgeiJqRTYk457XjQZSxanEjyuCAD9vL95sTzQXswd",
  "key9": "3yWFZBf5UiW4FsBEjinuwu2k4FRC6KGSXpRr6V2Ne2pPiH3EX8pZ453LuykTXCrK9oiJ8mmkpxf1nV34co29Yndk",
  "key10": "3mNAmNucC6mbV6UJ6htbGbGaUdr777ziVB5peW8SxsnSYx1pFjhiWitHkicbg3mGVp7dNkt8UQN7CZCAdaX1GvqS",
  "key11": "3BeeFgwfWhYw6SssVfmvvF26knLMh9SWYurrhqux5dZLWfB2Ut7p6GqTZ5Ry1zJEFEQKM2NdzkHpc4K9aAg43CHK",
  "key12": "4sUMBYLTxeV1qiGofb7sUm9iYhEmxVgQ9V8JSNS6nbkNqsCpp8J3wSTmRXRokL2JGdZW5YVzJTwBycRbY6uy6ZgV",
  "key13": "5n46ZguE9VxTJ6gV1dgDAQhrjNyXpzTkGeHxZPGLf3MSDmD2eMFXmHjcDAze5QZYVdaQadC2oDc7yhZZeqWopJvg",
  "key14": "3kcoMaXDprKKdn42iKCy6B6eq9wZUp3FwH9cJDuMWUJhYUehN9jgQoK9pMDK6Kv3jXRzkSzrDyaMQN6cB8kgWTCo",
  "key15": "3fgByGnPVXinKkgVVLacyLxUq38ieMQZKSW8zvFZ6dbDntcQQi6k9NhnQA2vcoW41Wwy46rjFkaK8vC65k2t5gej",
  "key16": "2jXcYhQrmmZuuND45a8PwxAFRGQYssw2Uez116t1D2f2wqMThAVsxHU4RSDdDGKrboM5Dt3S693ayiRJftHzt5XJ",
  "key17": "5Eico7kfhtG4cCBKjiF7t6EzFgmvsffmoAk2RKNzVTkJi1JnDeJtdL8Fb6pXPqFZ47zg5vDootzDsGdrZqjK8cZB",
  "key18": "5vvDSvCsR5KeUonBrhigSasmvbu2yJi5q8QogHW969azxBJvcd4VgxYNGFHVwNqgwFxErdJYAHixhL8nHKqbMi3g",
  "key19": "5uND7c5YtSFQyReASDG2hH1BDgwqb2B49BWoiuD2XyXnaURKu4qzuKJzoA9MEa9PZYbXRDGqNfBXq49qPMMtYSrq",
  "key20": "mH7x3knUQSX41iacLX8xjhGGeCxd1Hg1jc8EJ645LRSS8mFQHJBSUerMTxsLDfyrXyEqgLCAPrkQ93bFuvY9tuo",
  "key21": "3A6QHgm2C532tdhx449VUj2pBokB27dfhvZLngXy3wG3k41feM3eunjRrqeSyCHrtvEzt5bGvxjDajPgpatv7tan",
  "key22": "4EdxnM9Czuhgmdoj9QjxvpohpaTUU4mWcHmhX6wSFDobbXauDtg3qTjwixMrN4z3G4uc9HHwGzQGmnDbm4p8JgqN",
  "key23": "iSnwQ2JyJzov1H4avToaECZVUSeppdGUXmEhZVuy5dKJgxPhdPDqU3u5Y3Q3K3pKLXMohnERmFLZR3bSt4LqRBm",
  "key24": "3nQrZuTWSH6vxwpRZwLb3HY8T2zN8YdzvUcYxR4F8qEQ3JJEQoaTfezAcpCkfkqzgtSHHdBkBMPj6RmcFQvkn6My",
  "key25": "4cQENCPMAqVjuNZetebpkkszsochJKz16dSvonHP4TUhzX5aPBfbQZBmvXtgZm6SYKVyKaPW8LC4gVAdG7PbEivQ",
  "key26": "5afPpovX3xgJqX2ZYXsNBVZ54L31RY1nbhGqignykapVx3mu2RENhXvsTZVBRSD5rUcp3pjr7xvTL7ZxDET3nqtZ",
  "key27": "waHJHocgkJtf5dbY2RqYWitWvLNVxJzk2G281Z44TncifuvkYsKAwbKQcAtvEKtLmfjS8XokX8DJHo6ZdCkhkKN",
  "key28": "4W2h8FWt82V5nYohmcdVJ9M6ikQ9PjwAJKcf92Gcj21WSXkXAtkwhPqiVZg78f4MgYT3EjqGnHLaFpJSWcRrLhHq",
  "key29": "T27fJGxf5rkf9vL75WMMZspQ9QuFusxFMVTkaxWALFGg8nXauTo2fueHTYCrYiQEXE37L2wVk5M1XoPiK27bvMj",
  "key30": "53BF67vTD5kBxXJxhnrEqAT1z9Dd4Li5gG9i1gQdNTZGNYAnsQAemPnAWksCUPcYwsV8fuZd1VCxwTRP3vXhxw3U",
  "key31": "57DevuRwzNdVkzkKtp9FUPkBkizRVT1A38Xb2VJQcHorVg1Svnk4HoPoYYJPgWQjUqeBVqyWBoPXtvp7bquCX8wV",
  "key32": "GX6WsN8cH6nctGhSV517crHVhyKt7UhGf4UPMmWBrS68SZbXjyAH9cgdxVgcKR1tjQmkeWFwY5tTci9gmvzrSwX",
  "key33": "3iVh42PtQ6h7TrdiS1dTJQRUszYG4cuEoVSj8nHYdDvuWAnuKR8pNRmS88Mh7SUXMbrhYWS5ytSRqYcN6YKSBkWJ",
  "key34": "366x99PCjGBpmKsgVyoTAXcpjzEyGY9eRF7XR5uNjVGbpux3WpE1qntKYLZfgyWrDM9cFhtrFJtL7x1jPdS2whjz"
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
