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
    "5B8rRmF53spSJRQHsgpNQSTmHJhiFDuG8yQ2PhTdZBMo1sWubCxTL2sN3ppu2aifuvvpg7wz4syYdUmiwmNYRyXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UoqWvcxJAGMpFNRJprvWfvaRB1gB2oYJvkUj2oUuQZFE7n1T3YajBuaFRFdGBrabvQnYcbXxrTJcuEPCgTMuFRM",
  "key1": "24ow6XwiifniSYRdnDsBEpBiAez1iQhkLkw67D1meWNPQcoNusbNEMJ1hicHmYwsK3Z7JVffD64ouUWiepAs4NMh",
  "key2": "35syY1iLWvLbf9hussURvyae8duCqoySUKrDqNLgY6Sp8VdYrVHUPWE3EEDmwMxjaaBdSs7op5W1ccLLybeiYYrH",
  "key3": "P9a24tjngbnKDiBdi6X6Q1shz8x785Nc4BRgqUi5eADBh8DjxvLJR9mC22t4i4U2sQGQ42Ax8A9xNhpxqkbbavZ",
  "key4": "2HcAhSTtegXYp3SLbzdWdPtbCjnY7hGBPTu5ewj7nE3y5k9n8hQiFHjwoDHmFdZvVg8uh1oqnvKFBPFpqd23U34b",
  "key5": "4tfdS6cWHBkxmh9A2fg7FJ25VivDDCxhhGPAqcKcQJr85t921TnjSkDhXyF45naRfyjfRs9HnnhD4mZ9mvxs8bLB",
  "key6": "XmFcKHHVX5a7mVaNNR3cM7ipSYLAuRdn1zYPoReoVrVcWFM4hwj63Za69LmwDQxtEgwwy48k7hqZZsgFL51tQ5g",
  "key7": "4VMxDXV7v7tmxXRSSqGMzm2oDPyh84Hs26NjeokkreC1AZujvw5ZiXrm7bGpFD5FEYqA8k6oHn8BNUaK1pnUuGxB",
  "key8": "uiVrvqta1zJsR8zRhVmi4Jg13YGXGrK6wsfenVo5vVqgUSMVXkJmne97vg1M9RcCBbwuA4tie5gLeZf3kwj6atH",
  "key9": "4bodccJbW5vQWmn12KtZiRFBzwfMJDVwC9y1b6ALbKUkS15km9LKuYbw1DiMeNCipEsirggKucjGzvt1pHWn1fxD",
  "key10": "4C85sevdbv68oXoFe39P5iMUKFt9WuoPeUWt57FEmNCyBmoQEZybt9AtrQo6UhVNXBcVtLfxhFfENZcyWApkfLhH",
  "key11": "4EEdL5pz6me8Tw3h7LhSkiH6BP7WmJYjoB5b1STwk1kfZdJ4F1bbjmqbtLKWpAZq3oD46Fn7vZk57TdJgVUHEvM4",
  "key12": "4Qx2AZRPd3f9qKv4C23PiQV9ETMXudwWYFpJieNR1fjZcKcgbfUHU45aHRqBQDhMnPHq2jHZDLKeZ78S6daGr8WS",
  "key13": "2vQZBVbW85BfenzHNSwnvP2K7DnDi3Bf5dvuiC68KAqUcy2nupyDLis5bRgzhjiQgXh69b6uH2nEZmc5NcUKnxvv",
  "key14": "3Geg74yRVqkfPw6Ny6ULLidTEeErZ2J3bES2sF5cV42mJrLQQLz8xrrriVi3NPiqZ1VVri7JE1s3mPXsmnpfDaXk",
  "key15": "hT6dC4yXWp8eHoXxb7VjAja4nQx1TThwsNkBZmCLc3LCpia52oTLHTZP2pr2GWTSzPuZAJvn7cSGN5cg53Yza2N",
  "key16": "2XcTgB8Kp4ViJNZRfBsCa874mbV7kdyJFpfL8Z2jWua9UV6uCLywm5xiPjuQSbF4BKwcMBYqZBbrcJo79SPBpgZj",
  "key17": "4cP3E3HhFzRDkQt3uUA72VckRn12J7ud1WJ8wVBx1kcHmMnwdRGetZ1Bwy6XSVP8wQQaQxWQernUSHkP7VwwujNf",
  "key18": "38mncSkXcVSQEzk2tYrPNpZVnwVhJGDhkSKWWJDZVaGzf7tXhnDDFpPpPg33ckPgmMye8WLenLQqRdozFjxgV8Nv",
  "key19": "2Eu8qhG462L3sxYUsoX75HSjjvrgocCvKcewJApgy7oQcCp9qpNqFV8vags4NTD9uxaDjAwFYkcWtzQbz3DPRMdf",
  "key20": "4kWCg3jgkAUVynUbcUhyvBomDdWexv2p6u4mLZCxvE6WuZBpk4qtRW2DoW46PYH6R8tPQpToriGQX9sBeEiKVqGM",
  "key21": "4q2Nfzfn6WbjaAcy3R4gUZNHqUwP4BtFTK2Pkie6CTVn9whjRzuSZSoVkWuuK9XHBDUd1M1j8tFnrnSoGF8iJaK6",
  "key22": "39aLdDmj8cAJS1wkZSwjUv83mTefCYbiYBbb4QP96fJTkEqiiHx2xMM9PQwjKpX2EFdu5LzFsAr7LMz6g5C1TtoU",
  "key23": "5sXfHATw8EmF5oB6ghMLhhUAF4XqernBkUVXMWeMuQeBmspiqFSAtNZaULVXj8zdnqTobundqLcQ71zUUXnogLAx",
  "key24": "2vcui6CkcRfZmrjLxSWb4gmP9Miihcm1GZdHQQiFrvv5Q5aYcRMJN7Y73kBJKd8FBuZww57pTaU4nWf5aDMPW2fH",
  "key25": "Ydg26sC4419u68d27znXDuYAZF7JjmeDFmYhWw1f3nkp7S9KRGTPTXfdXjRhoD2s2ptSZtRr49kmFzoaeyz1gwb",
  "key26": "3oxMkHiu8Nz2izSB1jMJFRNh4ftzHb14tkSYS1bmCYPqMh8jaSXgZ4ZtMSKvcD7wecnrzPT7uftcETCVerxjFubS",
  "key27": "2a25U5exCwpDjqbDcNj2CoQx9RUFEncHq1TVLih7c2suL6GLHTd1ijjAEXPeQh3bYfL1oyw7sZhJDQdvTHapnsbv",
  "key28": "2d2VWC98cFPttPiWD6ZBpp2gVhu5BCFZotWALgU4DYfSDJ4osw6vi71FPPkWN1eVn18fjrEzfjkfhcw1AfSpJXoc",
  "key29": "66tqCqtCGzjdmyuAxsj7K2yhGCMsyddPz2WYCY8DUazs7s6sjWNrJxrMMu1NsUjQUmV4MZPEkRg8BFnvWRVUEX4U",
  "key30": "RPyBCgMXDH5bvwHkxwEfg7RnU1FKvWXPyByBtGoevTw89xhRLB1fD6Mm6neMMj21bXxyXHk24zu7QWst8y48XmY",
  "key31": "5wmmP9HYND3CTMwbRmV9DDvjQDKZ2AiJkq3soXgCG6tDu5UDZAvE35xNu27275ZygMnbMYiyr2sN35QWadkB9NrA",
  "key32": "FyevjDJnFdB6zszXM5vdFmvVidKLiHMz6Z2o4toB2vs5kC51tShyr6po6nbherw3GaQBmJ36N7pJmGDb1QLchM2",
  "key33": "4zcnBWKHzWsqD2nnkYyKTYmN4JXEdHfys5DVhpmKS8CBy6dhccduFaxaX1ae8AdZst7F7s19MGEgmnqbBARKfZsB",
  "key34": "2iVjZq459WHsjqXhufhXk2hkkRqwuPsFsvABXxyDBsBo4uKp9j54pkAsux81gBA6vvnLKNDUtP8ZXqJyxGLqXGFH",
  "key35": "4Lop2bNFDWs6bfqhQbDdBphSWSWGFpf6SGbuPkfuFG1T6ftfdAoS9Nw3VDxZnsA5hmGaD4TmnmRPzyFHHYvqiDT9",
  "key36": "gf4hXxJMNbJJTQMbQFhujv7gMuwBiS18JKJSVjnamyEWvBc52cQPcbo2uNvPHwgncAhBNrnNsGViFR1HiYKP4j7",
  "key37": "3MZT4DwWyXu7bei1Etq9UrfWYtXCYVmH5CUN7T7yCioiGJmzVqmTqsfBQHMGqebnua5qNhHbvSkiH9p651P9dTJ5"
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
