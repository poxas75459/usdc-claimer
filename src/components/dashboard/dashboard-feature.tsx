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
    "4Ru8DdJm6nqLHMKyQ7EUvc2CbbTUNbQw1BatYBuj9inpuquop1vuj8QAjA4ZmhycY7dW7XwGArNUyYSwwGFoooPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4phBxeZbxSAUVFqJF2VbeKf1TaP56sURJr3DasRZ16xe976243g7qrkG6EY5tAa63258nUweQAaLugfXzaF64fQA",
  "key1": "KCA9Euf6drfXcNA3qUcpcfMQUgFWCw1UX8njuHajSoGxPLX5bDAPSAZ1D6uPACatNWVFsBvpoQt9hqfcUbY7qHi",
  "key2": "3RE6SUux2mghwsSJtxVPUNp5rAdPhfLhLgqXCX1ZGfWZbvLuFYjosTvV4wKxag8tEnhaT7Q1HB5yug9ot2DiKN9n",
  "key3": "2nWg5idgS8etaNx5zSDuSLRnsPsp82hvwMSZdvopTpQy2fYL5J8XVg6Ek9LGCooDUXKb7TcSjzGBWPJ7WExJWKop",
  "key4": "2nq9XrgKsNkCCfspz6G5oiA2kkaoitEtCjfEcSgcCARdo4Tkh5daTqgNX3jcoG8gDJmUerBWqujFRTfYr4Nfmuf4",
  "key5": "MhJXGThfCoQk5b1uAmhmb8e5MNgThw72o6QUns1X1VsJJV3X47Ve9FAKLCHAaxDmyPzX1bxoeDw3yhP1n3Wvv2K",
  "key6": "2XFvDca3ou9LSokjBMKyCU2m8E68jknU6PU91QNcH471e5gyP4dUPsKkqBZZr3agM7CPKk1EXnHhfCBFxy6cnCeK",
  "key7": "5UDArvFn19c4aNVLibERm9BVUvJCvj7aJVWM6FyzrhYAfJ5Se4VL5URpA1ms2TtSCQd9eqAgMAZ3eGY3kDcnEq5d",
  "key8": "5ydyRPhTDrSZjWTA5VognuMxz3aktUVRPCW23xHPr841t7SwkrEV4rzDkq4D642xGzQ1GzmiU84XKsD4nEMbK9hA",
  "key9": "2bWsA93BdwKrKbSaaDGQbh6L3Toz8998HCFNd7Pew3qCFiN73BbL2cpPuPJSFfkvG56VZ3saACcpNzT32cUGpJci",
  "key10": "3BeqjkfjCq8Q8bWiuW218XzhEQbdFcyS3aBvqN9Q6LuYyyKcYWAozRMUNshiLRcTLNNt2X8pZc5hEry4WS1bsbxy",
  "key11": "487WnCeF2RydmVQNYkN77jTrxh7CJzC4m6rS5VKZZWgT5Vp4DE2EfYWoHJi4hQqU3CwaSUTTLtdD1GaaWsb8UbME",
  "key12": "4SLW8fmp2VGFKw3NCmYXVV5z4AYaBmhKC9uogq3EQV19pkkSTJiZ79q6edCZy24s5jffx5wCxzZvpYZrtrGkjr1P",
  "key13": "5yBZzbqmmfMHQmG32gcARcZv7GA9JwQ8Jh1py2g7BAbSxZaWsfjDKKEjr2Hu6gtG1MGVKpKEAUgP7pXooPpdhxQ5",
  "key14": "2JVyRaugMyiQXpAq6A1drm6ubKswAwBEppzBvXCA2QfSSS5fEyhTDAoCRX5UR3N1CLiJkNMeYKJvAWERhtPkuW5o",
  "key15": "5JSkpPFaePSmxKuyQwXWFovhSN86oBzXWEJ5LUpumoUsKZKYWejXrekWojKfn9xkCjPaeQp3YjW2NTrS516Au3YB",
  "key16": "4w2mBLYsMQEg1y9cvNWfWpuXPqBiGghLAnRzk5BHFoV9teMh9nMnaAD7fG4e8mNdhXry5SgVNkEFzSQp3UbQQqAu",
  "key17": "2mZTpQcRwfmpuPhnKknBDC7MsaGwzTvf1ANoQ2gZjy3DxxhzQgA8SGcN5mqzxesYGN25qKy9D6eacBrN76SwF5eV",
  "key18": "5ZqoQshDLo7TFkJGmVna8xbTKMJhDJ93NEe3gv4rLyMRwBSSwzqT34pizeNckRzpxnr31CpZLEdEzeYTMT1V9Fzk",
  "key19": "5zCGNx2nEx4j7v6dcGyterMa4Vtrtvs8pBStgmZXt1CJ82G9JK3nuuX6dbkuxzdXgDM6c2pPsMf63qnoSy7K5H7k",
  "key20": "2s2Y4fDaW6g4sj7HBALt2k3ZQLFNEADp4qaN6kzh3xzs1prAsLeYzQEUR3V8p1TEwmXQZ4A4Ween3vTz6rxopiz",
  "key21": "cNrLTcG53p5wGc629XxQ8mJT1QdUWdHA3Y2pBD4uhirPGy2kPYUSqon2jMjW1diegpsjebtfgHgD77qqdsJNidk",
  "key22": "3k8nyxos5GwUZCn5i3G1rE1EdrNFpy85GBKAeLh6w5gHKeVUTwJfH4Q1QBb3SVrNF7Z4PNyAJvhE6WnTHXxXqkza",
  "key23": "vTeK4NT6Kg6U9LcPiAHiSDtNXKS7HbsF5rbfeZS9dHxj7k8uMYcEzrH7HAiHD8p3x6fPMY22oRaBzdRm7DTB6Av",
  "key24": "4KG6jo3C8gxxM6f4f5cPLZXW9jeQQNT8s49Xp9x6WX5Wwe3NXyPFGhEwZispTjg8wwgQZaqEmC891Mr5fXUtmTvS",
  "key25": "5xds9KA1T6hs4eV5PYSGVsa2H6kqHRcy7GC6K7mVLS9QxhB9xQXkSc9j7xa9UsEiRiwMM7AU2gKatRdmqq2TUkx1",
  "key26": "CmiTZxTuM3gdBksQnc6VhSCZT9FioJ5ab19eXet9Ucos5xL6JfeD4J6wQSxSpG5f9Com6XXr5d6gQxXhxKiq7Ya",
  "key27": "29ZCRkhxPjeu7VBKwKtfVxWaH6RMR6kdPu7LLqja69us4zbaE6sJYnUDCmBPXhoX1NbsScwgcQbqV1jg3yPu77AX",
  "key28": "3ecR9awoykRnP14ocGEJEYMFQMU2Rorc7H1obw7ZpQXYziaLxGuUpw5YncqTPxiZEurNN3fjJRRh9unbLZ2Qkb61",
  "key29": "4PzCzk8yqDEH5urwTm21Gncb3YQwL8pvbXNJnmZ91pV4YnBod1oNRM8pHGpaHs1TeFTsPBSXPoAHmd1yh6cQWP5k",
  "key30": "2ZNUum5GstMvevyBgDa4WCMi48YN8d5y1Hft3vgs3VbDPusRKZDperytxDcWwrkMHigyc3HzLxWVppJq5QdjnRp2",
  "key31": "2rkKWgix13bcMsx7541jxQPf7KJm7aY49VDETZcBKCwXhkgqNt33J13Nxsjz8mRy8Hn4VVpgskGUnbBUXZqVpU2s",
  "key32": "4STxBTm39DZdCkqzRjGFmgiLcoZvMQGMxpqYWBRrqcG5VJA2peMmMbg4v2gRJA1XY7eyvX5fEcWgmNp35zxhScdv",
  "key33": "5D5aNZD3btZmC2tmaU8WW5Kz21ZF73ZqcganGJbFTiQP1hq9iWLHzjmE97urDcQgTVF6GHTSj2dwZbNoC45kUvEt",
  "key34": "2XmWmpWw4qugZLqupHwcMEAyCBB9SdVkScD1ioPX2GMRMVdzb2fZfDJjKanBNAWM69Qjr1K5weNMDiY5QLNnBXXH",
  "key35": "4cgX3w7usomwa5ugqQhh7V1qGRbiWHN2Zx5qzx1WZFNyGCvrDUMWnui1dGumJ1NztToUfG1JfVia2dSpWckoQNSS"
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
