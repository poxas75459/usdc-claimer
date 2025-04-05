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
    "2wgR3wdvxeecf6RZ9o6SMNEAnx8DJjMi8ezdmo6JJ4NNBmPwhcGSAGr7qgHVqjihkLLRdaKaWsVfLZ7FyhoWf8vU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cUn3qzELMUCTJZ4vtuPNYhoircbQashfVTbX3oizNNUmcxQmQWo6xEvk99viBXq566ZtvUMD3uiB7GDmgHreo1X",
  "key1": "4t7BZwzNTrgUczRfq3txwnbowxaEZRx1Q3v5P1qyhPptrrR8MWMgkbXXUKbLZWqn7kp6wrPALdhC7HYHGHnFquYj",
  "key2": "oKghBS97qCQWVdV4zXQEUKytDHvJra9XfUYQA2Tz2cXeCiWRmEbP94YnnyJrnv3Q5km8h42qY6B6djZtwdVTB75",
  "key3": "2pfwLTg2v9Xs11FeWRs4eNkB8xMzWocexhEBCb2CdF7aAfKJCUZeNGttX6wjjQ2BoRh1BqPfU6bAfibENXfVWjCX",
  "key4": "63FiFo24vKMgBYQfscdB5KDdavHHGmRqBxT226aFsdtwbShmHoksgdaPsj8WJq85Dd8eUAvQw6haffcT2sKC3LjS",
  "key5": "5PvRXjV53VwmveozBQkQ6ThawnBudenWKuvN4hdJKZhd3HaXUMXcfsgcp2rWs8mBb4R2bv52CMRnW1pXcWGngJZP",
  "key6": "FSi3h1wFhdR3BZFbLJLL6zV65SDKPiUH71L2QqTY9oGi5DNEw8tgcioXaMpLGbHEYHNN41zqU262uYjjT56UhGT",
  "key7": "2KbVp1NSEghdJNL7ank4cNfUjmzC77p3zLn4w564CE9fK1yAu4pCtrouRDNoosCJiJJNnD7CAP8jXxqSE3pHJe4V",
  "key8": "5seV1yE4BGGGDzx4h6AFEWfdn43ewkKDxvsiUhYexDEUHwbHX4F5MhmfEMqhHwwFWtVSQtxmmenmwdt54Sx58s8p",
  "key9": "4XoEBpgvtFBRpWoYKoQ8KA5izNdwVweLkUvcpsnwUXwrErFfA2wYLzGApeoBEiKXqPsUQowkdnNjmYmgRV1DDVTe",
  "key10": "3nx6GouaC9iN3ujeWuTGYHLHNiC3xtFnB9gXEfcTHy9VCZMgcN4faYU1aqpaDoN2RB24jYmizMoT9f6K9mnKp72H",
  "key11": "4amhG68os51E7CxrD9KrF89wxd89J3WJaTWdzePtohU1wd25y7fb9UtZGUSXynM87E3DV15NuvfazsDdx551ig2v",
  "key12": "34TpAdXJaZRmmL63BvFgGANgJYrjXGsR8hdpZkSySQwBkZoHkJcYVGuNmKGjiVp7oq31wRCvrBwFJZVQ2mMBAMmb",
  "key13": "2pJq5tsFPjWEkXnHxhWsHdapDYVvePFY5fuo8bDdZw5Vb3Y6h1rHP5aSpjZqqShahskkDdEi3eoRZJFYrsBzht2b",
  "key14": "5AbB3bWFemKPbAwV3SCkNbZuGgqDHMv4gEdutQMjFFJz6ZzJEW9yFsmKxwVSxZrmWFY4G9MMZcaa4ajm7NghBzJK",
  "key15": "3iygV1yEYzzwCAUAV7pS5YeYDrSi3rqx7T2sgrFQYMnbqgQLARzJogBuRcMtqVn5reHNDDxxqD49MRtukS6BiU5",
  "key16": "8kkY8BcRr2f9Ny5MhSWYR1GueodLNxLAbc68HE1vmVDWoB3hFzwtcFncr1qExJQqu2hJ6AL6Hrtvvn4A1NkmYoQ",
  "key17": "2csgXjrX8YyGrSFDgQzUgZbYbUbmbTE5EvATYLioMNfhJJMqDHp7Ehz2JZYNpw2KVPcVyHWWaVRe85pgc9wPKWbK",
  "key18": "5v2UJt5erUGygNaJ1Rt1Hz5q1SnDqJVv1TJDNgFh7onZahwceLjFFi72gEogjE6Vedc7PY45C5kUpCSgm6iD457x",
  "key19": "45FxMu3ycvYLXPUimE24bEdiPaAcWNUSmgVK8V9fdFe7qNiJLQhFumgXNQm9DBGZmGyLrBBJeysfxz6t6gYjwQtG",
  "key20": "3YJoWrHXThsKx5KZNHLNXeWYN4KDMDVBHag9Mt8GqGsanSEmWeuTMWsYzpjMDhiXpEoFr51MexR8nev9S9LArQyc",
  "key21": "44szLrqF35HkbYKgwDd193cGk82QoUE5UorrsR3jy2e4vKKkTGuPK6F8vF9buRxtFcowMtMdhDDD1yezKe8TL1n9",
  "key22": "3rAa5LUN2dFB9hxuo14Znm7K6oC6yYA2MCEfiegJawXqWCND5ntckhF2btNMzDVtVUwvGew535bk2nE2hEwvS94x",
  "key23": "LDEmhbBMsjWkYubvyZScXiRaczXX54ywaobh6uX3Zv2npg4uT4cfrd43Qi2GTFLVcijc9te54ymBKRBP7fqownF",
  "key24": "21XruLKzVjteLSGCzDvPeucrRCLvZGJNAjPZ7RUomTc7QTnywd4HhtaV9hqFMWPno5jVwBYykZozdy6nVnn4MFTF",
  "key25": "3JjJaABLdpLvms2oirDnBuSuCynTA97E5dU9h5tNVxUJ5PRJtTDzAFSUff2x3iPMEc87HmsyRZ2g786VTSgA3mN9",
  "key26": "4xzZw12oXcZuNtF67igUSqb5Gfpu7cDziyDUasJ8fo2EAFxRM1MUSBRwKcSa8oxEeKiZJi1V6dQuydwtPPQYYL6s",
  "key27": "4DjVvsHHPF6kcNco3i15h14gCNJ1fxidcdji3fwZQv1j4T529B5YGj3qj58Cu1EsvH3sxHKWGZ2eB7STdtVcbf6U",
  "key28": "2DuaMkbVDYqj9DUnj31VD66Lz8MqqsziSSzFXuKxXa2ipd6z2ckAnQ7P8VTNdP3EkQKwbaL4dYo955Bs4svnfj3R",
  "key29": "5iW3TUPqMQYbC43yFoNonR92JWCetzvkXHdKErZyUqdAb3cdnY6h4oSFasVutEBVFumdWoZ33Z9M4gxxu6pPVtGE",
  "key30": "ziJUgXzoHtKqErTJbM7ZHM5E6shropyqGZA5VrjUwq1eEfn5R9Q7SqY7mPpHbfaT9ZK9WCsC6aUK2pvfZkUXFvT",
  "key31": "58VgxEzGoU7R6uJ8ysQw2EZ6dzfPjYwuAcWQDWN4a4yHxKZz7caPs5VwcRjetwxnfPJ24XfqbQ78nCHBb6aWcZnW",
  "key32": "TM1nSXzDFVrp8BjJ5tGHHLpQhNWvVN9zMhxAk9ynQNJqdpFQ4rKMtbygQ6xUquy2tUqhsPWThaX63Uyn8fyu3x1",
  "key33": "5kS1juJuRAYG27PScx5N4YSS3uxzsuuA5w4Tg3SE7eWmLAn1bcmnN2XFPAmCzQa8rD7TfXujACg2pt41tCJngdEJ",
  "key34": "Wxvf7YfwdhJkJkCVxvt6Tx9s4vSSbb7Uhzie9jVmpCjnvX3CSXJ1FgcwmCi6yW2LbSgqAgdCGqE8NotJ7QrbRfn",
  "key35": "3PuX8TtJ3wvY4rYouXtEhLp5Kzdd9ttD2HhhgJyuC5kLKCsx3fKPcUMB6mbmyh85cguV5DbRJw42NddEhXEQMvQx",
  "key36": "XyMFvtWEzHzFvf1KGxLooHYGkTY4YPZ6vsyuYADjrLhb95t76mY9442uHo5ff2Rdan5VMh5ck2nn24QkYKb1uNx",
  "key37": "BzqA5h6W7CXHsVJLgNn6AsqFPLTaECiboF3Tav85VA9Xyawvc2Xs1fzQ3RWTfuSUwFtoXvkctbQj2FsB6PAYXD3",
  "key38": "4pzf8FPFkWrhJ8Lr4FDb65RMXBoREbhPhGvAVhXLJcKcsKkb235QqUhnzYt757LiMCGYu8ieKJ8PBHVFcfNQUtxv",
  "key39": "EewPh1sAecsxZ8Y8aTQTvpAvti2Bxdocrg82Up5F2tyDwzxvrwtTP9LSEgn3gYQN2BkYzg1GzkrRr4zLPMTtjXj",
  "key40": "6meLd7NYhcaTkR1sGs6AckpJza4KDjCcXUJFFnUaFSTWZzWzCaUbRmrGA4S6EPivoSW6BSJAh4GrX3DEhjZtYRr",
  "key41": "5ynu2F1dK6n9m4y7BHPy3k4XWJpkPB7ZSFnGC7LVjXzHJTrw1BU44chss3JTYh2w8aHW435Qgxm2Sbj2npqgGFEu"
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
