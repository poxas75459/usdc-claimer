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
    "4Hk2dUTy92n8q19TgKfTthPNJb6k5qxgmN32jkh5RFibNNwZDCGQCgxb6JLNy6Pvvz1FWQHNJvUdrRJ4LAE1JhAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ubJrmiiUeNj4QuhkeXpJWM7jL4Kn3YwfJNy2NLM4xxFr2zu9FyMGcNujDkHDHo8HRURDtEWyFzGMFHsjWp6DiPx",
  "key1": "3ZnRar5hiD35RAD12PMXgoUMewno7AQci3BNZtyMGMNuv1d84v87zPbKYYESTDB2S7pYpabUsuTdZVtrYWzcQfrj",
  "key2": "4TUejbrhpAfeeHFmSwYgwsuonwMWh2hShnpfsfqQ7tQxXN8B7pURUwsBqgtH79BYXRZmm1s5tJ5d4qAZehiAH45v",
  "key3": "4eVah5aU4WrFGHgmqvNPK7n4Xg1jEd9w5k2RbaQFSY7PND4UypP4NNChWgad13ENZKzNL9UZVaGJ4U24hBhHHRiV",
  "key4": "kmmFJ3bJMmEBMvXq65zT8EXoBCFoGqkQz1xsSyuyATUBT1mNptug3b26p2GgWvt3vaRx73mrVyVYDo2Pi1nBXzm",
  "key5": "4iwe4oJV6YujXvf7AWhNsZTQpREhnWU7FkjzrZPvbt3xj3f6M7mtEMV8oXDWKjJnycsB82W7RPu8R7MFNYrp5pss",
  "key6": "5d7Jyb4fxJ9R8GyA9m6J3zFuCzxR6fZYzTV4fRK5WveVT5AuvLj1iybJaWvEuwjRCfuhtcFUfe6k8fts5AQfewWg",
  "key7": "44BHw92uEQCzNbW7E1bzEcUvYxrngJyNz8yDKPQtHBAQypaCPeVCPrTXibBmDYLTx6TRpZ9KzLNBEwztC3VBiZNC",
  "key8": "3zR8oXvVhwj3DmZtzjXNzNRqVRtp3qgmBtrE1GDDfcnrQpR93hz6WRUuPkJh4eaAov6YFqELLnCBZAYRKegqVwQe",
  "key9": "44pKWqr2sWRMzfpMo1CZBF59ENegaAFaRrFufsVgZuS5dV9BS4uiFJS5R7spGCzo7gwJwvDyZ3KFvD2U8QTjCwYW",
  "key10": "5iat9jx8JAVoR33o3uGgMBjYtutMU35ru37TLrjY6FfwBAfBfLDYM1ARZ1wXufnFaf7EE3XfxNUerW9fEWDxm5Ad",
  "key11": "5kpeZnKQRBrE9QeR1GwtYy8cMwDyzDCdY5sFJrAHioAvDAHJhqW4AYpykuqbnT31NPYBkKCBVxrc1ULN7XwFs1gx",
  "key12": "4bF9nTuWEHH2WLGqraSPQM1sVQ9LfxLdsbFBb7KVZkWDMkndAHbxKswefVEBtPFnqQhqY7pzZnCkstQY8LjbGz5z",
  "key13": "65nhz7cg5tK7P9SAEzvZg2ghm2XDtiuRFdS4kTVSqDCnzE92rjXpHYkayxmHKeW1bS1qxEveTEYevqfLqanNqBVa",
  "key14": "5xc2wCu9dBvAfTwpRDgutEhBUr2hhJ69eLkHy8ja5h5TNabPLiXZkZC1kgg2MrbdfnmfFBohcG6byqNUDLT7aoaR",
  "key15": "DPCsu9arpQaJ9GdY9K2BfjXtGLUGeke29SEQsEitPg7bodviAhSJtrgv92Eyt5TWzS2TRsxHBi4Z1mHqwA4CC1H",
  "key16": "672AehDmdbJgpyGyrrCuchPJwWsgtR5GgZPHQGJfgS6w79qqz7Jwd5XEvhkuWTY44Vbb5eiusQgQnEVwG5ePkkqQ",
  "key17": "5Xe7CyH1dp3aHGCuDqU1LWmwuG91BAsV48iRkZbw4v3VqEnJ6zahFBuVuQGq8reuYPo74so5Uhu87nxYii9MLtdF",
  "key18": "2LtiKZUFvSQKw6U1KVq65UBfVjxNKBc1zXDnoxTssPXG6PRc6pTNNNJ9JtSezafzsY3ouG7uXderJJ6TMtdE2ENM",
  "key19": "HDMgo1jcwfXo8PNZGeEC3oyXN5reCsdtAPWm2113X7EL3SednEbRJ1KPSiMUPVbhUmM7rkHP7LPn22i8SMUhqyA",
  "key20": "2JeM42zShniobGyYkrM9wqUeb7gmp2htSSUMveahBRjHpXhRf9ei6eqmZFisCkXPqEdPsqvmUpK5QV825YSRwCvZ",
  "key21": "4r125TBkqX7rDVuryCLwwgVNwA3U7o8ExR7GRhB6XtGNUn6KDqYmktrf5MoW4vyw2BVLQ7E1Hb5X3aP83NFhgEz1",
  "key22": "3WCq4ue3KjoENbL2AWL2WqzM31NDh8bDWEWRQ4wrvBub3RoBPtdYqi46XkrLkJDa2vm7CkhiTSwqcHAzo3eF9daQ",
  "key23": "2TVYccrxpQMkohwuBjGCqsezLY81HsiHvMsu8npemyf2t35xU9D2dTxQs6AH9G5fK4SGDQNDCPZNiuK6VhrvSueg",
  "key24": "4FeLx2XHgem1joUSKFmBeatXgj8oZLKkrwaeZeELc7yBvdk3g6jYf9zY2oxsASnJm7VGJtebKT1CY8oC4tTZhLeg",
  "key25": "5Kg8DvBucW3DPM3fUyqtEGxnvuRecTyrRdxLJz5p9qF6v148sLCB79idifjnmnvg6qUfJ6AXJhJsvyNXrghTS45c",
  "key26": "3eHXTdS8BFVx3RPQnV1qNsNYAi9uA19sWFLGhsroedbbr5xwrp3NSGphN3Z3jcqjcHJiKT5hREr58dyPvb1BBErW",
  "key27": "56VxymxFSGN8Ls16P9F71fgdKmB8V8szRWhjt66SFGcWTxe6NHM4WPb98eYPNhYNsJr1wkBSpdkSnqUvKWMDtbBr",
  "key28": "2bJyvYzjrKGM6N5HzHJZC9m8bhSXWCTASG32wB7cxH6qfmT5TKxXvKDVtA3esLiaapxYTssWxLEv1Q3B5QkcAS48",
  "key29": "5PuiBv8NfcZmGGWxK48it7qc6Ht7wBi1rrZ96vrMRHRvhwSTd4whhZbqSNg92jfSLf5WZpp2mVG29PJ5H2eNpDDe",
  "key30": "33vVwpZXyLxKrbdUCBn4nUE3Lvi4X8XMGytvjzvbbnXW9pAmEe7Rk79w5LVNeU74iMhpvUVQT3gszwxbj1ftAvks",
  "key31": "4ZstmxfLBJNjB6SeJeqrFnoqPKuxLJb4NEP2pFB68bBMrbDuayFMCgzPmq1hRUMFY6EGxGzmPmeKcronTpowtKWj",
  "key32": "2UPvDtjrPDU5pEL5y1Mom9bdfQXhb7yAnY8iKvFzT9At6UtbH2vbi7N3u82AhsXZDifxp5UQE2ELuux2YLx8Zat8",
  "key33": "5A5uhhdPzZN9H4km1qEtJwWTCqydfXSReKdqNd3DCKUCdPQdR9KZohMeBjrJQdyKEjJjfr4ChusVrir5qwYznB6n",
  "key34": "4UGcvJvmKjJiuaFdyKuywHitrPtPfsxghfqUfu1szfeb2k7GkVNTbr355kh7zCUTvafrMBdVoVBqgMzqEAqh5jdm"
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
