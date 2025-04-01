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
    "27fA8uayrURKNtGvAhKkGyoupM6UDuPwMegsS1X8iG9d6kx6ErBLvjj4A6vcEAPLwGvyjpnhs9CwwJftkvyRJnW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39b1x4ZWWSb53PnmjMzoL7rzPRg654cBkDTyvnzDSenibTf8R3vBrrextLXsPJSHpsuEGUngxqxwLiY9xWW2c411",
  "key1": "5ioXQReayzEC7s7pwbXGMuWfuMsXkSpAPsujuS4FHnVzyD7ES3Z42d217tPNJ4dg2g2WK2KaDCpqkeUMhV6AQX8N",
  "key2": "4wjWZobkhijHDjDWnxa5Zpb6cm7hxopy9LjYsFj9fZQ1XjLYTHR1J33dgcwfkfXAH4BeBwXLPonoWXFVTEyExs2V",
  "key3": "SUPfd6sx66uxREarCeY569UXwHawvignVMhG1dmUapTExVpxVhg8uBkR3TrCggoKUnGJRAWEYN8PLTgAsdb44Xh",
  "key4": "2A5fXKwthLTBNAbLMt5VQUW364qoykFWXooRFUHkyo3ovNrKQE8DyTKhAt1GpgNV5DayCT45Qk1LRAzVAx5LFfkU",
  "key5": "4fU2jThZwyJ1R167S4vt23srcgts7n4WTNjWik8TzGHwsETAhumFkABB2HotFGNeu2hUZxGeyHVczU1TcNo7hS6P",
  "key6": "4vM6uYmnMdzGBhjkMfeDdnGVKpzneUdFXGQZRPCuZdm6Q5unKuujQToW8ohDYgvYe32KuWM9RASASN8B8k41ReLE",
  "key7": "NMW3QP6Z8fbNdSLB1WfsA9Y3NdaWHdvKJkEdjwDozVxZKdfNbgJcb2hoVgMznMLuRstrMQonZz4G5aYmUwYhnfe",
  "key8": "72caJr6pM84dPF7ASYzGsPPdg22FDVTVXWnR9eax8BT48vDK2owQbLG7XwRA4Eii2WW4j6FkzP1YAjsJ3fVRQsB",
  "key9": "3bVuwdDXN4YySJQtChSrFWzNNiMxTeYZ3h5PDy6DPrKpxU79DBDerczt8qCzETHwUZvu5xjc2FzPeXH2bnWbJgtK",
  "key10": "3fBjVakxArWbsFgEB7dvzabhwcVoA6eCYEaQmKQhU9bdZzbCeSiJektSGL8jAsoy6JnwSZd7meLoJrHnr2TNB3kY",
  "key11": "C36p4BErJBxvKRxu42g8ZGB4htgKJBHc4UNDNhNA7ySw777xq28tseY4U9QyEjAET7EMxHJuXgp7pRA4ZVLs2eg",
  "key12": "HNtnTQPMA4SQNr6HpWYvE5PQAG4JXwBXaHDahhgYkHidsdAppTWjvL87u4m7sTwtZ5drFRK2AUfJjnYEmJTXk7W",
  "key13": "2TShnUHNzE6sC3xb9d4k4WKqqJtm4b5LD1yBAVjWwpF7po8A2JAYtJPQ4MDLwh9g6TydGauCpmExpppdUko2qLr2",
  "key14": "554hcVyeATvGy83iFYdZg4AEV92kqEtx5xah8YgV8WyNbxpawQ1Q3JqbTGJxMXso24Uo9c5JztTwKhaUxVzYmGF3",
  "key15": "2oiTqbSYov2M3cAJwCQTgrWA3iUhFUrEFiKeLZRrwkQP81d8mwScSHxPyjdBJjfTMAAHRnvLC7R7DDGfewGYJ3tb",
  "key16": "4p1FL3sNo82c9xHAk9t16d5pn1ezFe6jt48wFg5wATFZ48HPeMNrVj33JS3v9i9F4rsVisTbMyb8bxHHj7qTCBwz",
  "key17": "m1TEy9VLdsAkCFtt9qEMzyH5ZrY6o6k4u76Dfy5jiNgaaR2Xzi8uhem8d3gkZr2SEaJ6RrRTwYfkY6nKJgQbHz9",
  "key18": "h7DN43QaiHGrxoEAQY99sjUYhGxpFTkYDGqYGRKo6c9o2euiJmfhXYhSPVmNqAaP8ynNi8qLdT11nC3JWPub3qu",
  "key19": "3ECP8smYbNBpVtA2zDswZLqiBwLV2hYAuykiYubWL7td8hECjTndyVhJR5WKNDhPTowotd4LPKJac66crgARFg5V",
  "key20": "2AnAdBEFVdZAQ1mrLcWQtzotdRiJYoCU3HNw1AC8sSEiDsczjs5tPB9juyn9BE97cAvsfD1SQnpatgnNdMLmxPMz",
  "key21": "3HErjbLrDt8CmGc8XQ8LvMyw6XD1sXT6GwyCTFy5JQAkazveWeAaxerML6qoLiRHUewxGoEH2Tzv6LE7hcEgs2cN",
  "key22": "3bQs62m6UPYrm6VgJDuL57T1UipYuy1EG1zaxziKesJFrVsNxacmfKcVKkjxwsAVdbKLxfn5hoom2PvbGL36mvod",
  "key23": "eecPvKuHQuoG2znZz14Pv6rrH6L5eRwoNh8srSXfjJCfD4gF1f2SZkmu25TCbz22gxD3Tk6BSt7yTchQjDXxEF2",
  "key24": "4CuZMVAKGzMxJLvCvq85g8jJSKoSFDwx2XSABss45pB6azLxE6cfEqVyJhnyAyxY4nzySsemNMjkzbePV61hiPUa",
  "key25": "2ELkdLua4qxrpvQKjbnrLp1wjyRVsDPvt5gMusGL7wm9ZpempHBDSCoRztz7vv1yoChAjCqPjKr3NqyiU4tuhzT6",
  "key26": "3kMtbhAsXTR96J7HYXbSSuhLdk7ov11r1LurrVx5Uhhqcz3ZWPDGZzGGWQEc94mLyr4P9N9pJV2Gi3rx7U3mpyw5",
  "key27": "mQ2LxafEzqhKv7FLy7ZwPW3r1RK8vdHKkWbxoh6REi8U4xY9tNJ7rQZvBaQ2voCGjrAZ8Pp3JX3VEts9aLje7cL",
  "key28": "4x7A1QKkRWodpGVmWBWZEvEv1UqnKN28wMr6F7GcDtPXUwN3JsStbsMxJWeZBoHg8EoB4jshtaw774y6FAxEiGNX",
  "key29": "2XWtvRMcmHiDTEFjpFRqw2JUDesgcZ8PTE4uHiEx8S9oDjHtthLxNY4e4tAeJBbGQW1BcXKiC78AHjK728i5UMhy",
  "key30": "qLTXX93q3AdBtTR1kCuXodEDbSVvdwwixQQWrgMcWZQF6QjgtBUCbaNpJsHgTy3a3y6QS4RGRWMQkkPMyAJmpYW",
  "key31": "qA4Q2ZUjoeyaXMs665iehfkxdqUJb4chsHXVA4xKYbv6oWDBAQuxAVJSsB5Z3xaPLBa9VjyrrYuJvt55JKhCK9j",
  "key32": "5T2p6fCFWvJgnZ5Nj6YneJ5gttQqnmjj6ourZN6mWf4P8Cdit9PUaXxJw3ysYHk5Q1Gpm1B8dm3nuieUtUCbSVgE",
  "key33": "46djJjvWTnW3J1bRjAWUHk5vYfNyWR1oJ6qoZUxGpJePfH7AfYGGWVThgmTXq35RdrVDn9gQMEBUPGuqjragrHwW",
  "key34": "7Nto1QJGo2oZV2CMXh9rUd7o2BE5bgBrBfATRK8huqmNpWKcxNuSPFmqX5P2mayuDTzXXdkUr5Dm3TqBQaW8peZ",
  "key35": "3AgK5CaebchQkSK9vjVfFCyLx9uXaCcGWMZ46MgVq37decuDWcufY96161yTEX7aaLM3f6G1GypWX4oVFT8uq7qm"
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
