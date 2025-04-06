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
    "2RkTukpAw7c1a4oWCAspXmND6VbMixJE84YrtZXy8ryRADc1afuti5dJb3azzeUUah2EStrDgXJEV5rAUyAWtGs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NP5hcHzLZJThkSSfKuJcDte34AMvq6MZ4MBJ221zxAmGviPcAJmGj29H44TzJZqhj8jDKd565qHFgmMv8KiAVLJ",
  "key1": "WQe7wA28jTcfR2HkwopTiVAeRsZq2N9KAaBrVUQrkv5wcH6vSpUK37RA9MUAd2n6YfSnRtkrRtPrXEHgjsfpwVG",
  "key2": "3zybmtUrwBNLJczf4Sq6xDc5KJFh83Yh44bykXz6HZZ3JsvdJDKiWQZgK4g3YcbFnUFgchsAJKUEumJjmoUjqkiA",
  "key3": "nBaYfAxSaYifnDsLcQzVKTMJKYuXtU7ZvWx9Vwrhpfrc5dpPseyE92eJ6NLGThzwqqXUUBBnWgA7TzmHGFmgEEA",
  "key4": "3mF78scF3EgM4xG4TQ2MSnYguWoBsANp241qcAVGhDnoszLBzDb5bDZe8bzTc7Gt6wXUnUohJARrBCdbxhECJdmP",
  "key5": "mssWDVE4h3mT1G9basN3PWPUmgi4BEzSWb45vfQzkm1HKXMi82uxT2bvTDsuo2gxrFvo9tskEtRxzzdS3Yn1cHn",
  "key6": "4VuR64RA2KcRfpZN5JpAtFwRmSqjaCbHwnziCnGV5erqiz8tBJGYw1pfgJfQiobbenz2CHCbawKrfAy1ampiw19W",
  "key7": "WhksTKhcULa7V4NbfrgipGCoW8YdVwidxE74wyNGRqWZg2PTBmt8dJukhUgAfK7Tj6U34zpck3pX1jaDLg67aCx",
  "key8": "3GMe1zsj2jane36N2hh7Wt42LyRPGSqTvdjtprmENLcQAHArD8P345cQKY7ZgZ939ejK6JqCuK5cKPHxMoWjomTt",
  "key9": "4rUZmo7K9wreaePdtDH5we2RkDJGmphJYnJjYtxEgEK9XQ2jpmQFaMUAd4PtgeYYR7R5bRJdEPsqfCmvwmyH2jvP",
  "key10": "5nZvDTMAjsMpwQkSdXd6bVdErPR6gRS9WDjtm2jYpLdUBR1MzQoG2K1kzgqxQzsUGxcyKQi3raqQX5g9Ck24RofE",
  "key11": "dL5JeNUKTQnkAq74odArmt8tmuXgNDSU8bT8imGJKwf5ZFuEZYR4JvSXdeAuVLzCQT4ZJDRHNfjyoqNGmsURt7k",
  "key12": "qJrqfvxeWFtKChHViENp5UcoXPewFYRC9vXbjjqaSHYrox84BFmbomPuP6pc5xVjwEtayQ3rS26haXVDH3dWReN",
  "key13": "4LSceGDsaHUFM4YjjDmkyjbNwvK5qnepkVQWwCTABup6KgW2eGamhu72Yx2TFZuJ6YoLnQigLs9n5R49cZ32CAST",
  "key14": "3zbym4YK6GKSJmSVf694Br28GCax92ygtas2wYsPh5yWd5CJNKhXYJJCxpY1k1rU62C8rrJiVxtoyfjsyomcaPzi",
  "key15": "jgvGUtD8FJpXJVwDo2RrScqN5VnDPLTtUtnogwgpdagR4WMZmxitJET8FvyHj22ze1UepRKJkoPhvwF7nGsSvvc",
  "key16": "3f8HyPswuRHs1hHEUCczpK2YR7GEpqMcd9ry2AyQxjoRRW1V8h6jiKV2fVDw4oWoGLCePiZFuzRdfwo8B7ZQmvVY",
  "key17": "42w19A6XAmxyM78F1u1pSptvg4FMaaunF6UMpyhws3yNeNFSURtR5kAgiLAWmf83q2HreZms8uqa5oLyWNnH3nqn",
  "key18": "44sWZdXFRSQwujq62JKaL9z1fRt327jSn3NfufyS45MC58QnLtyzYoya2Wf8KcgAakvwYvGUBpFtzaToR8m5xG3W",
  "key19": "3BCywiyFvX2Q1ADQtbKBoAe5NYFEZp9SaAfnYJbUXFSbawuPtHKWkyGkmhp1rrQZL7sXVGSaxMdpXMmsimq6xw3u",
  "key20": "4CmDQgwdkf58wcLUS39G96wZhkEN2EmVqQzYPAA1V1pB3nW8uMVB6pNFxjWSMv4MioZwBDnw59qBB7AJNNua7vBT",
  "key21": "4VwrhroyZMJrpj2rhymBqEF4wSzLdczaTTcx7jJF5pc11PXbCJo9bZJUJNBeVUx6XJFY8Hh7JxGDS9q3ea2ZJ8gx",
  "key22": "2JYQ4bMQPn8qA4C9gznZMDcNYG4iubFABpDaPyhRQSzViGXF7xxaUnQjfHxH9nspHy8XPWRU3LUxkMQzPR4Y8uvV",
  "key23": "5yhuhAVJhuNyH3LYvNpyojxM1ivjbwS6HgjTjWVpcGCqPHT7QdbSLeqQSqP4FnpN2dafiuBZG5yjJP9ECDgeGk1S",
  "key24": "ykWHUPUQwyqkucacaK5ZgQvapAzPPY9qYYzjSJHpw8v1zjtbZ3evoAfDqmmFjQhJ2pvPR6m65fuyY7nUoUUQ8WB",
  "key25": "5YEtSY5Ud1uQ83bfCGrAjv4ooimrUi77Xook8F2y2Mx1xq6yUfc7bXTRvaauknibFG8rR6kGmE1wTkcUmrwDg2zZ",
  "key26": "57f9UiHkp3psPBy5etsjyzMiRnRkoJjnHhirZj65uvNFVpgKUsv2F4qBAF6mg8SW37P1cWLenJqEGQ78y9yxVPfR",
  "key27": "3eBsAsSXDZvB8BVuqG4KRXnAqrPYpd9qt8XF6v3HjZJ9yLLcgBtSqVXSvKMxSecskwEC6LmrNpeLSxQvk78HRyM8",
  "key28": "2J9198un1hCu9TmMspjP1LFcKimnCa9NNyHvBHYrFECT7U3GLNGCn4PDj3oB71PdeaheXncgsTZ2gWKVDrAktyA6",
  "key29": "2QTRa9ATwW2RXMCEizMy4Z3muygP1ftvZ9HXZhrNdBjjwjoWbNbs3DmgPY3mVFsZxmPAsULj2cHkupNVTtmW52xr",
  "key30": "2kZH2YkXgqpSpD7eMhDAshgtnmb2EAz87udGf6nDSbU6EkRCFsBKZCRzWbTsxfaUGnXgcnPmkUEJrbDLWV9KGnNh",
  "key31": "b4trPBhz4pgFwd94iW53xdS76F9JLNkKYDV7EmfF4Pa5VVvT8zEqc8it1SAbgUM2QuajDZcr2JWYh2sdx9bhRfX",
  "key32": "3qfmRPYAbJiKjw2uqfAnkZALpumskBZsKocwMKLmMbF3kHWC4gjUeioTNducgWGbrfNqGAdvEkeqy7cSqRh5NPUz",
  "key33": "4YnU1KVv8mYq71z54RQsYCMWsLSenM188FejbbiPdJ9D9kvv5RiaFrX84EXYi1Sf6vMJtBmie9G5M9u1ZDCNBrdG",
  "key34": "2f1x83mNNzEzmqTPGpgGLFTveSrkrbA3u8qsXuWQBeerBY8ZJQg5VmsEh8E1iSHa3hKai3DJNXTpQDi5mehqpDZA",
  "key35": "5Go6vSELrwPLwHaGqKy6w122K2kmfHnXT3T2RMvcy2eYvQcvvmVB7xPT9jZrXAeGApjXDyaQjGLgYXj82NjyZ2Gv",
  "key36": "31RzUWbhpdgekPURyAwuPckKq6ktzvR5p3L5edLzEnKMBWUDdYyNKPDiaswidY4KgfiqLM6vvCNUNgjnHuX6szZf",
  "key37": "4JSW9qXTvrjETikYX3Mwc7bJRsLSNMTbJMKNhtPC29TJgxNVNxfnQBkvXKVDK5yFJp5maugWUtosR3g4DdUaCFmR",
  "key38": "4rmnismucUHUDTcCE2ihoM3YPauqLxmMeVSx3Wm6z3p2F1ktxCmgVtvQ3ZEegvQ3xXZenCETvuLo6xnFjfJtmT9L",
  "key39": "2gCZd8JgSKdsFn51LQftbS5z7kwKXFvSuA5TXEK9kpH72RgK7kAnaUAV3RTuwtQieUnC9MgkHtLv58vUYdeVfCXc",
  "key40": "NUFxXvVUSRpqRTJ7Zm6Rv1WuPZ2G5UQDfiaWdrTXzyzoKBvGJpHKYyLkSwj4i9xuHs5kvBgjPWck5PCWumfASGN"
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
