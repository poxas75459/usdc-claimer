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
    "2YR3f2UkqSVbWpnZrS6vVCAHpimhysHqQEkmDRZg8nR7Zky7yVKzj4nuwLcZivYiNDK5RYUAvB7q4vXHSuAxpRXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sW5qc2UBKxRLqEatshS1nJwMcXJn69yndb8XU3iisHbavaqAA6YqX4seicbdT43g7fKHPPVGSNXHChkL7demwcK",
  "key1": "2xtLQ72bNEe8Qr2mLDjvwhA22dYwXPEcs8aw1UGfWQcY5oquPu4eizBToxhA3LNhfa9778hAuqrnFGkyFUE2XdQ5",
  "key2": "2WZzqQmYos5GLk4S3ah11KNcFAsYrecoxa13QZo3xGgTPpNu8VEdSPurtW4UhjzXJQjFJFXT8n5wPozntFdWXs32",
  "key3": "Rfz6oH38d8oJXv9yqQUefjzfYMsRHXet9DtU1Ht88wjxPzYwWiq9PjWWUhoWcy8XqM7DNoLMDZYZpxB5S5mbsrH",
  "key4": "2Ju5WNK3gVs7bf3YqEaVTbvFWGA8ABWv7yctLDCXzHMWqacomuR1opdV73npN5hsCu8Q2hfZS8RmCkyUZ2FdUy7b",
  "key5": "2tNd7cJUccWbT5KS2nXWwA9Rdq8Y6GJTBvjngTLNqpTLKL8JQqsx58ZrcuthAgNDNikHSK3Na8djRDvwYDVq1wZx",
  "key6": "43tpTHo9R5cGwgsgAZamQVgs64bkukK277SuwUYhyptBbRJ8A4LZzbQsLRugtDkgcPL4kwkwkxAh2yFmakgSeN7d",
  "key7": "4xHEUbTQUeiGL622eTX5T5Y4v9LETgCdBddkdnq6EaVf4awsxZv2MDhqGQSEarEYhPkRLpb9YNQS2fXurRWXJuZR",
  "key8": "4yFHSXPyBGf1WeLXnLFcZKpXKPYtEeQmAMKQ7owJwkCorxNs6jMiqWXtux3xEvpZ8chfFizeAYpcmWC1cDFjbtby",
  "key9": "4SeDj46iLerFUmq7Goh1mip9N7FujG21LpSrzuYwPhUFED7DHJTUQhfMiftRDwKLrw9JXpVf2QzJ2pVZtbUqtBwF",
  "key10": "2ey4c7gQVGmP9cutqdkv6oXB4udGt2JgxjCj3t6qfNMoBU7p6P7oxMwdopbZsjhTjNZSZxaV5ZshnQmGUofAFnoK",
  "key11": "48P3Hfokr2Vghm3utJBpXNQpFmKLeQikrKDy91dBvGFokPpkZs4jMEVvQFgpv9DCswuUU74T9FaP348PNijY3t8p",
  "key12": "4pKdsqmpFNZKirECsTBVVxNgByVPLRGFWKWFF5we3ytGX6sTzYpA3iKxw6ryfybSW75gG1Sx6Qfgq98MfqbByQt2",
  "key13": "4XWh1yototdpiiav8ye7PNPU36xsBxCcytbvdBfdGdZMJSgNQeY3Y76Yx8V3bMT3e54hjEaaoZB5rv9uhgK6TbQJ",
  "key14": "3f6GUnxowcYvw6mp6SP2tGskPcdegdEBwsrksqbUT1Zy6qdf1ihD24QJAyyTrk3xkdB1sXRsFh1m5Y2aywmt5x45",
  "key15": "5FCq82PwWkU3ztHbE9PdsAYLmRNdsG1eF2tChvTdaAfAQ6k6Sbe2ZgKkXqEbVM5kPYR3uFZhzT3FJ48MpruEQb18",
  "key16": "27bXzEkL5yH8CGhpKcLbW7pXuogH568gaLqwnjPz1bPwR2Rb8mdDdNVqRrWj5SuY7gd8rzprRPNN7pfs7X3wwkju",
  "key17": "5J6kiQQzhnmmdbSypS6EM28mfXxWJ6BAHbqmHycXQLgMwU2RCs9UNmd8hXcQDfPdzKhkUdqr9UbQNeGVA4bq1AvB",
  "key18": "5KKajJFubV8ZbYGZLpePd8cGoVyC1fwRTSkHCWa8pXqfoT3eN9VoEbSk5tqHdsEApxpzJnN5H6AVNKTPNPMyhFqD",
  "key19": "2tHJXegrVYwu98PsouGc134fw7uDXj3Nt1GJmekWTbTonLvwZ3SgDLfBCzAQgjaonR3V3ex13ePVFmT7D38L7Lj6",
  "key20": "2nrHc72GntpfW3tPhb4JEEvTLPz1eXUiMXMRuHWkBgXMVESsQBtScpULmbgEypfvVZ4AYvUZhZnoxugrogghXe1u",
  "key21": "5fRH1QVwPC3me1tYWCjAonPkCooHZPFmdb5EFSWGGTcnXzND3nVtGir5see3P86JBAiNXYkP42hLm4amgvUsLNe7",
  "key22": "syEnuutSZKM6GunDqXckNJED9vjnD88ohepoQgFgXAxhMUQmxw4PxTusAom5kQhyJYMVb9q6tPTBwppTcc4oY6v",
  "key23": "5rJ65udDnJ6jBmj3REhpJrd5fKNNEVNaukEdZSUJGx9M2XpjyKDe6nLWz5uLgXNCyQDb2phYUNc6CR6oPGS7SUQk",
  "key24": "FRS7yvvb4tif6FWdmfa7WhW7D4X9zu3FkMsPkemoyrBC1vfqRLA6kx9ZXkjW9xna2xNbsF3ufM5TdcBNsK3PtE9",
  "key25": "NZ6jtNZLWPokJpgieikXso1int7NkrjwjiDPmBZ8mGazmaPkjKq8tqXSKcmtYyms8XjHoBfzAqR26micZGYpKcC",
  "key26": "dLr863DdEMEbeZQQahPkZttnjGXv1cD7YbwVq379qa7sxFZJAF9wk283qigQWczqSfMRrzz8ZS574m33uv7CEfB",
  "key27": "qPTVGq7EKXV2kCDJ2AoK7E9mG7G73ED3GTSatnsFZvWyW2QAHPvcgTPYfS7msuKPHWExtdfpt5PnBHMNBnV2t7f",
  "key28": "5ytEmnKUtdqHcE4SHf4QDzr6Xury1WMS2Xz6pUX6TKSKiyti3wkA2uSc1ARPsjN6jSstHQpBgmJqp2TxGdQtL64t",
  "key29": "3ky5q3iGyMzfnmLu4ai4uNkhEbrpf2thLg2rWh7aHRiej49qufdj5paGLRjGmGktAoJ8UvFxtk5znsCQwgnSoHUh",
  "key30": "5BcSthx6xm6MNqbyJTHYFbfdcLiVVPYMqFSTXYAYTL44dviWtKC9zb1MPAz7sRc6Go31ZRDMmYwNW5wD5hhbQt53",
  "key31": "3n8X6A3wnQSH8uHF96wuGTK4sP8hDnA6NjXK1JkLmkNxVk7YkF6dcQ8qSEKSxrgoh932L3CJVb63b9PG7HoGo9Mm",
  "key32": "2GN3sEmFJU8VQw4pRT2w5KmmyYV2QogSFdJh5hfa4Jwa7RqRc3MJec1xLfGhMnCWR5iKFDZTZqpG99KJT6jb2MnR",
  "key33": "24NKsx8CEVhbth25oqnZRTbav6jRTDqqsswH3c3BsgujbBaYKWRjPwYt4YvM7ByyAajriAVvEvv4uTByKrtVtpAS",
  "key34": "2kZz7g2iaK2gXbn4un8X7XcAmHG2gKbRps2cvvL8mLeyNCFPSi6j7NbmiNgkMSehD1NkWdJEMWaJnU9j6nJuQ9mC",
  "key35": "2BYsBkCDH3hervFcHVPucEP2bro6s9ijxtPkho85cdf8vCrVn6EFQTvVjzbSGsJCCS13s3AcQM3N5kRonsAzi72P",
  "key36": "55TVCP6eJgMvjqNmJL72dsFkLXGgKkBkXYwV9UmNNisegWyym4SfVm6cXuEKx4QgAvDgN5RzMK83jbXUaFgzDYZu",
  "key37": "3JUAPpfwZnXNG6v3g1oCuvKikDa5vdo3a1JmuKGHJc2mTVGBr1AsQvcrjyp6a4btn4C1oN68tJJ2N1ijzWpwC11i",
  "key38": "4NRiknXPfoD2fYy38cfLwHApny88uFUp1H9L5pGJKNkoUEB6Dw9LzDETz6ZM91oGBum5frkuYDNmQQwx6WPfyj6s",
  "key39": "35TS3hZAD38F1pGjWbbXpZaQsUbrTcKdTHAYZWhbJCKGFNZh1XcHjb9yzf3c3taYWXbwA4xQ9mwQjbHm4xAqJtfc",
  "key40": "2keLQhpUu4wfBviQxdrp2TDtEzHMydoh8hzXfUDgcrcoBfvRR4rLNWPR9rN9s77GgG3FcmgRdqexi4rzsSo6iwFp",
  "key41": "2D6uUyBTut1DT7umf3PkiQ85hhrggCzm4iKvpHvmKMnJYioQZEwueqhMCdojkjGCWUTkPPCY8S2FNQ1eCRu5tAx7",
  "key42": "4vM4okD6sjaYznan6wBV5jDCPiEzGUu9eh3bQ5tZ3BBs6yi8gUHUZxnADpeg2rhnVk6HX42Jhsk4xLhEc7BqVvYb",
  "key43": "2QJeenthockTsdg4Ub3ibtoDZrT2VD12eyuLVGJUdidx5sMpeC6N16dWnvG1abogaTp8gvs7gZCXYi9AY9NtRBu1",
  "key44": "3gNN8qwJpMow1pzpV55nfcuYZeTJhfpxiQrdYGZjsqxk625F8rBqV2FKQgBfwSiVpCvxNBK5dCaoREB8dDxpmwjg"
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
