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
    "2hm3G52Y2Z6aJfas6Mo4BRFKjKvZj89uV1kaGUErER9KMxy2cQMRHwoCrkuJLmABXyYQ32UC3iTscPddcJv9Qe59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z2g4xtyxUWM3WZhjKPJ5jbZBttgpGf5MXei9y9Dp9kWxX34MCphkvz7H8VtXvmWpwajKBm9fRfmEuRwdk2yRmts",
  "key1": "5nYDsvdAMoJDaJRdQga31MSzp5fbyRnaTgidoJvGfaGCgELDCdMT1tVppJWqKDtQ11KW1kdhhikK7ibZ3KR3NB81",
  "key2": "2SBg3cDiunTP5qWBZxX6k91JvQ1kUV5gdZroXP2XDtePN79jpH3rfpSLix6vAykbaw81hQhJFX2sfsmFi1zQzp6D",
  "key3": "4d8teHQGhMyA2sREUq6mLxpbyz526EHjtfL7e4XUZFGrLgwbkZzMHMuuQuEEfSz8yw6oKt5APKbhLUkG56rEGk7H",
  "key4": "3RkEmtb2DsAvELZeXCwtKfpxGbTFdPzVGsD1eQVRFieVaFk2wWmoJ4pidji2BPGJaxEDJ2SFAzDsBXZzhcyF3Hbg",
  "key5": "5tKKbkCKkzX4JQrhN5tov3gpAEBs5FRRKYXyJd3rbg5mi4o42hfdBvd19zmfj5Td6DYwUvZUnuGqqz7eMR4xK5yp",
  "key6": "4zAW9b4Rxy1eiavC3sNZK3qdMrJYQEgjjAsf4ULXLYXZbc3wiUzvdWhoeHNSdGA5ejw7aPccGsEYM8YV5iP8rFo4",
  "key7": "32CMe1BCJqxCX3jgNCkhjDHidQUV7TmTtKJTu1yxJL9VsExbJPWVX2YvYUthSRuipu1WCMLWMKowDxsoZsGsMSfu",
  "key8": "4YRUuCeHNMNvZMNi53PvCBjJTyutJBH7byLfr5xhapMaEaNyqmxFoAduoqK441mde9iPfvaUvgU6BjodHhbyoqcN",
  "key9": "28C842Wyz7WQ1pnG7vegJLZfn9KxJRpENRT44JgAA8y1xMkDifp6U3ePG7PT8T8BsmLZwVijXJZSJtkf1Ex6AdaD",
  "key10": "4FsedhFvwebm6j8eqY7umUxKbW3R8X4CLUvKE6CPZiVFvC4a8cGdhPtF1ALRSshSLLrvuJdwiW6d3CoQT2M93cDp",
  "key11": "2B3Zn1BtKADiE1BiqG9A5aUtF981jWRNTjAhvJWuveq8AjKSLHuDbxi1keHb64JHsJVjzqgQtgry8cHLHKhJHZ2g",
  "key12": "64kzVTSt5PR6XVdnQo8FezLmP7Z4LvomKvdQFHZ6z1UsAStuoqXc7DD7X2YSUyYeYtPT61vmiMbfuGtVfs8Rzrrf",
  "key13": "3iH3aEU9XpmPWwkGtrt7QjebMbipkMdPyD2JVNjrTj87Y5Nhu6Bqhpx2H5PVHeWCSDp1JMNjQxse3x2yVzEiiNrC",
  "key14": "5xNK6JZP2nLqTWxjqsqFKsP9hTwfLdWGJy6W9fvCpKdi5zzSBdVR4P32QU2Qu2mZdEf2MhAX95znd6fpXKETUiyi",
  "key15": "4bPpoY54QriQTo6bVrCjYDis53dfb57tqzrz54bxiTDkTqVFke9qcnYDYvG7HTVeC4gQXhr6hebJ848HXnzNT9uD",
  "key16": "2kivY1tqeYT3xzAzmhmCg2erbHEqrAgiiEN7EnwLkGERJG2jndvg9Cghqj5GgD7bH9YnLSSYqD8NksRJBYbXsdMn",
  "key17": "64mH27gNx4TEZt6iteoiLb66FWiqNy3rfetscAhdGGYm9RpNXKBYjmLMch6kEyJ6fhRwbdLu41kYeTieecZZouDX",
  "key18": "2ic8XJwnQ48AJMu4NLUoHVMNdgnYotbcsyygc1yV5QC3zHnRKTUoHkFVyg66T5AfRJ9q5ZEBgeybWZWysnzXACnk",
  "key19": "5fnWtmXDiv4dHQAaA7xJLCMKCfx6CweVpAwq9SM3WYMmGm3fECVrsTf5CLJh2H5x7wBmkoKXQB7daaG7mZXeN9m6",
  "key20": "28spJZvCcqVmuRtxsFz6Na1RL2UHQja6rdgZm3CQfWDhNRGE9f6XULqPwSKvVG6M4BTxk4Y87vdM7aEboMDtK3Xw",
  "key21": "ZF8LRfQ8qRyK1iksyqxZQfg6BztHoHpKRJDkb9NqSxsr9fxuufoTYmZTuakTeR5NubDm47prjGmrRfduDy7LVu9",
  "key22": "37NvcsDL4zBRxWf82L6VaVfkHo14mNP2iBKqHcEG116ds7FH5szeo1YcrHKmPmRKcqcxbbcbERfaEzHAYRiHtf9K",
  "key23": "21PsGMvSB8rCJRBkJmHTYBMKqwCg4tbP1bsPQZsZCtamJgYdMdp96FD6CnRvUBtkXhG5rT4BmFgxfPwza8r7Ezjx",
  "key24": "mHmLJfBVGZyQrpqacTPksHrLpfsiyVtL7mctweUuhtd84HYE68Mctyv46AkV4F1y7VmnCYDDXoTfQZQrpkpJvvH",
  "key25": "3kk9QJ4QvtYV1dJdHBW9N5bC3PFDyshC3tudLX3PJwJd7Acxf74cj1iBrapTADP9kNXu425KP9WdwXzGxYEvhhiz",
  "key26": "58pxTr44QqApdn4YAjkn7jsDDLgef53fmLoxYKwh9Bm9ymbwaxS7KqndvA1WsEx2pohRLKuiJGwp7WxKJxNH5ops",
  "key27": "2954dj8uapGtkYj2UJXMKVB8TNiqFdvcGWCCye8b9vFzMKibkdmp9DUrgYSgJbc5fPeZb1w77zoqvQU7t27jPdDw",
  "key28": "kueNELN2p4HhwKn5dkiQLNVAb8ZvH3tRJxjXWVFAMYRayLZ1yPytLiEAN33gmxzyHfJCkFTxWYP6t6h5mnMUtMd",
  "key29": "2hWvoWgRUhnnMV1Sj47PWWa1cHhYGp2B8SdJjnniM3NjJpKGozVWF6gPnFbntQBHr9suvKKT6PqZzAi3At52z4F7",
  "key30": "5GR4iUzhK9EiCBARLFodSX2gAcjjikzv7M4fYzeLjGyQPzBFrtcvA16a96s2cNnRSSphT5nHRyP6nSvUTraZoXrr",
  "key31": "5kmJSaNEkSsNY5pYe5waJdWZXGu87NSWGxo6Hhvkhi58soo7yy615ps5X4BhmgGdBmuhFh2jacAYNoM3o7z2584j",
  "key32": "3AaMGxvjq3gXkmr1jnMHk6NG6bStLyXtoqnUTSgjWkXEoN4m9oXNUs9uJ7ErLUGED2bjSpBSi51UdRpFXTbeMaLb",
  "key33": "2c7cUHsPiHCExq7WiYqNyR8EFkH2VK4QN3W6m3Kvk2kNZZF1uEQh7adWc9ZQ1QA8XTU26dAdJGeiAdkzsFcCL64c",
  "key34": "12A5QffoGh7RXNnNo54Ju7B3J1Rw93MiEaPSGTduHjK3jauX6Ve9wVxHzqAUNePjfr1ccQoKJvmPGyCYUc6ijMuu",
  "key35": "2z99QnUUKUtijhU6QP8WwFjczGSp4MaN2rhuxoLp7akFVf6RkBdhWqzDwACyH9zVm4bC5H8euZFKgSCF4a9PkkiM",
  "key36": "4T3YcCrAdPYyMNvys1TxQ93J5VHMwGBh14Su3H7fFkjFsao4Lywcz1EzAs8MsbpJTqZrhyH4q9mcrC68ij5Tw5yx",
  "key37": "3uRqYkNnyGBfNBWY8ZrHohQuDyMHCeMTiCy948ueFYyKW3AeDHc1bHz77GsBHhNEreFS3XjmvXwHu7BDGosW84wz"
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
