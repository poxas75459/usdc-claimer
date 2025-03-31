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
    "5FFbYEsoayzbbyRFLFMui9DdExn5RpYnpdrNKUafzCUsMLJ3c4rV8abnjtiec61PcHwoRHreYkUvdeXFZWn2uwJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D3ZVXYyxy6WTXn11xEJuJNS7iHh7XLBMnoRtB9QfSdWXsX1C9yUEhAJBuAjE6eZWQmrDygMuQdjHhQHJYmkbo4",
  "key1": "2uBqPTAHb7WprDuYzBeRU3saJ67CcyYg3idYpwA7gjxXrGJangyYXHEeb5St2r1ctffDhzC5kpPtZSp4KSUZaLua",
  "key2": "5wAAZo6beukn6p2YxKrXeHWaVwz6akdUyPjALh8iV9aHEiksqXgcLzKFCTpJ3jRZAZuhPjksGj439DYzFqpuYyfk",
  "key3": "4uQHvXNpF5bZPJyZugorenLfgyxnTDBeMo4kac3agUvRuVAFLq7mH57M11JKZWtmeUW4TK8ZVTPEUgVe6Mh9gyNs",
  "key4": "5juvxtdARa1VWCJdYj4LMJHEuf8d3CYW6j3wHxu8JQgHhM3vHMJbb4L2MtKqHx74Njvn5u7Y8ETAej8ZKTZTXxZu",
  "key5": "56CRafNN1p1BdGPgphvYq31fp34w3Zf98YPruiuyZBc9atLUPXu2CEcaNfEipcgHq1hbkdghCE3Uc8a61pvAnPUH",
  "key6": "ppNFhpGo8TLD3djUPUvWK7TqqqiUUTSjo2HsKRb8JNvD5vf16edvfZiXHp7chgPmeniFcYX5pmmNm7RfAeQbSS2",
  "key7": "5mRmzijn8yi1JtCjhUt8hNyigMoB6qXbh4gX647YCPMHHw9mkWcqMT2r6MBv5A4Qzzb8fh85tcmcpnGcekUWueTk",
  "key8": "3Dq66hU6cH3QL66tEf5Bz16g6ZVBB9srM5GKacMqqYkpj5GnDbqFyku91uXhR8RJhtZM2i4gV7382Yb3MBN6MHk8",
  "key9": "3g7HAMJZc1WmoMZT2n9mZRnrQL1VpCf7s9j1NSB1MwZn9QU4hUzCg3npB2FWqB5KRZF6PgrbWtnDvRm3r9c3Fs59",
  "key10": "2mnUirn23e2PVEVR5aZ4R7Zbd84ATjWWncX12etWqCHFLJDN9QjQvL8Ahk8XwBJwZjzy9J7j3Qo2y1fX7ujoDLZu",
  "key11": "2PJeTtYPMSU6UGpLgPnWUzRWqEZ6f444Dh4u7zcd7CepX2FgTgveCFsf61ouaGBY1GejR1owe5wqR5vubqF9JcBH",
  "key12": "4ztyrLYNkjhHZSgEo5vpPwxKt12pH6g5KF8G6n5E7Cq4JyEHkcX6HR43Yw1DPvmEYipcBCnehHR7bgTJKPRhJo4Y",
  "key13": "2rfNaQ1fZTNk62keBKvCkMrf3REq9ru5pHmKuv71ZiMPo8scFVAhYCokNCGB69fQjSnvAv9g6oSiJKdpRcd2L44W",
  "key14": "3ykEWkEFrvyyXR1JJoPsFSHF51hHQ1zHwzXiULKABoefUk4N2ghFPGFp5eGW8M9FAXakv1KST56gb3b37Ksa1uGK",
  "key15": "cVNHv5S2p5cKfrKrE68k8qr2JJ3zVw63irWX33HCsSR2AApTbAQ9fEt1KWjgzRezZXyRVi22HsnsZx66b9eRzDy",
  "key16": "2QGdnVtMVRsguqRqdeEt5dxyUiP9doyS8KZuQxqe3eYkRAswyzzvTeMHPiQLqBMgoGF7TDL8q5w9yZ47WMrb6L8o",
  "key17": "2MBmLGRy5JAXyrXiAkoVUcYfTFxRhbNGuRompmpfqXKLvPU9Htjq2xaMNAwGG8NBkTEnruChXSvhDqpUYxT4ozRZ",
  "key18": "4VS5dfFwPdhXTCcwhXRc2yvQLUEQKsFHnQwSeHfqnYJFFmGSbMSnMB5ekAq5Xw7zzg3U9J1NkqUn1xkqbSd8fu45",
  "key19": "48Gu4f8FT7TunVbeMcR2jqgmHF926FRqJ2CLX4GvxgVtpc3sxnpbZesvFgVXnAdQuUhP6UonWqRDbkLJ5eafTf9z",
  "key20": "tqYJaXLs7C66W354F4phJTEaKk8qNVNpYWH3BQzVBX6QUxRKXCq8h9GBvSiq7a2YR3Mo8ARcSQPRPDXTn6NZD5d",
  "key21": "3Qwo1xEHcrNiSiLNnpMLkbiQz4FNQkVFMv7mHpyajTrjWKpjX4cNnd4LqnBKSynBuwMc8aCpiBvxx6f9FofHVE4i",
  "key22": "4sWJBvGZMEhPugvF3CDLmdA3Tn9u44mZUEK7bSWJeSRnsgQacyvuzneNsBkXrRUqC7yAxpqWZEbHPADXUqZY5XVa",
  "key23": "3aPEc9Jgr8GA8A1aAuc5GqL5v4L3b5fjLpR5Vi4ua6eXGgxfydt4KwtKiEGXs3XFiojA93pF475kxV6jbG8VQvsA",
  "key24": "34cq5jMTZzCN7Bcxk2B1KSX6L5ib5cAphyqiQWep7X9tkLkmmso6tmiHLCkZpu7TREiNm8Bu6hHSQ7dTSMNDZgUr",
  "key25": "33iPmkaM3EpuezhGNJUnyhmbRDy27WeVNFv2t8S8xQdKVLTucWv6tucj5WzG7s3thoKj16D7A3axgq2gnSwnsaDW",
  "key26": "4TKTTkVcTkZCCJkJCeavf47WfzUjfLnF2JmiGZW4SPt7oqWNY4R13N27CtYtr8kLEmVMwv2AvHtZo5D9p8yaGVBV",
  "key27": "A4rdoKaThUvm32wycetrxLd5VwmkRjj4M6WMhJxUR4KNe1MUCZq43Qks85VSrUWKUsKZs93q4qnDVrsXEpjPL78",
  "key28": "4p28yK2P9DPB8vgSxEgjxuqAhr8cCD73sbsB4W6qKEWKSfUQkJWV2aKQTvrcLcaDYaNcPFfn8QB4Uyh8TTB11eup",
  "key29": "5PSLJ8xCEsMDgjwoqm3h9RxSHJUxYcvJpoL8fXqjrxbwMWR8VvgLMwUgCNtECFDRGFtU9TXQbSFNYLdkCvqAchDm",
  "key30": "m5j7fBLnEkGN2Ssu1BFcQY2RYtijm3yA3WNagZcsJXMK1y8WSdjRSXYBshSfW15tS7yYtGqrzmHGyd6VUuvrpkn",
  "key31": "5coUe7ctU2MV7MZ7uP3CS2ZYtduCPvuQosbqRP8YDTZ4hHv4F3viB9W1pqcJAJZid3b3gjuNhT7NsjPM2xi3nMfe",
  "key32": "65doywyETigaWZLXv6MmDqkRxk2Eo3bu3nwjzVNqVhThxamvJqfMY6xLEdssTLgVAxN5qHPtFAoY385XTpstn96v",
  "key33": "eoxev6fcrfi2v9kgLtQXpzyrPNLAJZt9sQZ1mhxxKBvZcGJBY5YH1jtExapGFQTSZWMv2UqWD77kon3Z3UmuGjz",
  "key34": "4wYCUomnieu6wWWHKVn62h5nr131jJx6pXwdQEZqnZpypJ8zqWcp3ZVyytTNJcL1tvMfTfkDh1cPkkfnPbRSCBLU",
  "key35": "3jMDFUSNWF11axNjnFaEC3Nbk3NKXr5JBvxdA9tnwKD53yBHjBCjFMsE1cxYFWSpGsUZCwike5LVvSXUr3oxSWMA",
  "key36": "3Q5pHSqrFw7mJpWEKcucGQESKeUbqiYkAzk7C5dxGEzYqpp7Da8iE3zyr3z6uCdy5uoGB6raLMHN17qsXpBzPEmD",
  "key37": "4LhWQnWuaCbvE1Ter5iVrJqD3zkCW431k7KaMPHdUHxRBLK7nDh7tKAwKP8idZiVH68sE5mMa6FhL29c7MJi1uUv",
  "key38": "2KVsMcFsdZRNXgN7cDbdYoTuEKvxYmMcdfagBwZ6nKip5hM63jvS4SpW9yMo6Wt45nvLey8uG3VproJKxxeswkFJ",
  "key39": "4v1ReJTXA8uvw5qmM8TyVGzAyQZJeRXptuAdd7uhbNSJNxfMQccWQtAqhWoggqx13ms2MKnyhq9B9B39XhoskoHN",
  "key40": "2eE45pW9PtoDUJ43TQZCNWeT4QX1mJupfdxjyRs1JUiuT23PQJG2UVVziy9fdcbLMmQdrL9LXoxmoKrgoWyqzE2W",
  "key41": "4BgPRwXrrHDqzyMDhpo21QVarZAvVCpsawLymCc21GB5bS3kLszivyy4j3MuG1MXhbaqxz4MYLuYrUt8PY5oeSjB",
  "key42": "2tfCcJPtT1QqNvXzCMbqEbEBBF6oM797xRso75a4bHmxKFYMAyZp97bNd43U9F3edBjskSytz1gGshxPNQ1PQNzJ",
  "key43": "4i3ZdFdXoo7aioec31mMRewXRVNtXyi7EyvnSVBTgu7KFvP3WUPmMVX7oGUJXEMBTip5JnXRxj4HzWiCa3iu4CnG",
  "key44": "wmkrkwmDqio3xD8QFRPGVu5AsyMiwguFhk1nitCSUYLwN6HvMhJGfz69tbqVjmg9d1m182Wf3NwZL8rFvpxHDnE",
  "key45": "3678rqjv7Y8bDxvB9GCqS3vhkDzUJNXUQpNBgH3Z7NCZmE6FfLjmNZjCvz8hKR3ZH25Hk9onquzzjPf1oZStUdXB",
  "key46": "uYnmbtg3Y5HqH2K3wWSw1HxzjLkuyZaDEdPAeZ1JEMxgBK6gKuarbkbN5ss2jnEDJJFxHh8aVoJwgVDC5hoGRUY",
  "key47": "7JZ3zA9KB6mJ5QrJJKjRLjg8TMFCia6cTbbQ4i9mzrDrcP5yhVdJvfjMTLaGW31ZkbW9QerUihywDeS6ZvcNo73",
  "key48": "5r2wnjCQUwQNJqTGQN6kENacJfBBFjrxmVM4dFSieZCQ79iqa8PGG5sf85JrmEkJcjJsu7fhqM6rcnJpfR26Mj1y"
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
