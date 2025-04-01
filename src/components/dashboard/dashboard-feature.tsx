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
    "gmpnNmPZUP7WBCWY3YZrtK4qjQkGC6c9iUYXfqCW2rfxTr1KDuM9AjgxZxNx2zJzUFF5i1UCQi4psxPx2yW3CTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sRP3Z6rYtDKzHWxUZn9mssC4yZMGgyhLS7KP5zdpp94zFqykQA9svQiSSiTq7xiPuY8t4spW55FDJ2VmdQebrf2",
  "key1": "4rcFH6WhMGmwn574bAh9Q6sUZP6uR4RMeef2tmAe3V511K77jx2ZMEm2mxoUwu8wyZ8sSXE9zTacDgqHTUuXHR4U",
  "key2": "2h4jysiVkSj9m2XtqHdjwi4wjgJCfSZqdwisYrsPGTJFQdnNYG9T4i6CrK6uu3YcCVfquyVBRY1BYk7PJKRVJbuT",
  "key3": "4zZnJvX2hiSiXCLDnVxR2H1Jz7s5SMb1zrv3JzEyTtE7AecWVcDHCSYzNY9WbfkRy1drCcdznesRXNYFqPKfzZNc",
  "key4": "2NGvPTLTCymw9JtDeW9rkN5U1bpSRF1M7x1j5Gy7sMmnAvhwEiPL9mBDSiy5H7ku2CfVWsE9HXmQEZnm9c77FGeH",
  "key5": "4TmwMtvB4FPBsVWcSZ6DsFSwndS9G5jZ76vVkomENTdBQY27LXGfxg5Nit1yuk3BUKiEcTpb3pUNvTKqmqFnEHVs",
  "key6": "28YStWCwvjpZdsHJwhBntT8wctWVsjGBmA5kJWtNTLavuj1T6PERfrzWhdM6fDmbK5DXe8ofJsW7rVtFbFbiuaQp",
  "key7": "3Huh6pycho22XUgRMxrRFcKhYuTB3aQ4CiKro5N41MWsnWiTyEcxoZjeBYJ6xy2rUtLacc7DHiCTrcihwhNc8rCY",
  "key8": "3qqHdyfBSw2MExa6GThKZJh2wVebb6UJphruEHgjhDz9mgXfrJ7KdzazieYu1GSGsTgexx1Jiuhe2FWHTwe8iBvK",
  "key9": "YSqVYnQbRPBN7qSiQC2ssPFJ9pygCFDuvQo9Ju6feo5jZhzLTQybsvyQpoeKVEBC7t6eQKg5buf71JD6jWgb4oz",
  "key10": "2iGyqzcjwj4SrsRMjKDXPbYNBbHJa9kbcn1oMn6j1FskspWjafBzhdBxCbQgmHqjp6WEbgeFunzvwtWZaZnKJ7Ps",
  "key11": "5AUpbHJZiuZV5XZtGFcEBRGU7XZprZYXz4vD7H7P1RC23kTpZyULhjVYthTZW7wGFsm68tZEsBsXWcWb8JrNQN55",
  "key12": "2bRQxXzgXeNpMuvJP63LA826Mv8Anpoafysupvq3fbDbiHM4a1eLXRMiLJpguJSyFpAuMLWuW8kZvX1TJ4LkGq7r",
  "key13": "4y2ebXjtbKwG7czoNigy3cLnTywXr2Z3Ycc5V5sujF2EM6HqM6Cte7L4LW82QPM6F22rZvb9pw8xcw6MGRXZrMFh",
  "key14": "5iQXnEpqijcT9yxpUgMCQBhRTpBXaysXTbhnnfhvJBibgobgXufqbgYAqgNeHac4jEfU2f8uPNAyPYYZKL6zWw7r",
  "key15": "3Kmtz1B8J7tXmTttmbrzxSxecLzBArmJRhG24NEP5gmWoN5h7xz3AZti8D92bo3stUutS3NTB4TeaAXvwrgFCy7w",
  "key16": "vbBGcsnxhQJoLhg9Bd8TzZV6cFuo2ihuMVtLmq8ZgFotnTAVgZGJxbhPvEiqDZ6ka2g8Xsob4Fj37kDtPMxpJUC",
  "key17": "kHMHJMvwkAz27mvEVM1LSKTFR3tV39EySjzuVbtuwuHmQ4A9v1tAKxwywrffitHDKr1p2qEfNWj1unnrPskx1VW",
  "key18": "2oT3PavGTJmC1fGCRY5DxaZiH87MjczWUHwymmUTMboyH73awxCbRC6WMs1jfx4i7ZvEBrW3fNQvgt4ZdAtipLWc",
  "key19": "2bbaWfM4P422Vq6eWtCGe5yunfctqXVdjEwGjvUk5FpXw9AWCdJUxEdTMVoszM1xiBabis2VhUGx4sKZf1KQtbn2",
  "key20": "61k4CtSnNumS8wFkPAAAWc72SD4TptbYYRjEVRdW3qTxgioDnBZ8LQ5kwQRUTwVKjqFKk9QLvwhSosUPzy1pa4Ee",
  "key21": "Rmvgg6jSJgrxMGAKHbbDjEMJZuN4j2CaypXiuyEUL2fGvcfqLsj1KJ8EqQF2vju9Hndm5NNSf95K6bkebEEBMJX",
  "key22": "47rzDbWyQTJhB1Eu1zLKrNiNvYoDJ95EG47UywFVVZHk5zD7fdoa7fTsfub5ceXQN6JaPeYBRWVWX44KhDTLW9xC",
  "key23": "5bQUCSC5NGD1TKff8A9dCFbWGoRbnALt15J5qxdrXsfpr3QSBn4GKby1RbEibgWYbekjn6K5V43N9FpxixJaapPJ",
  "key24": "dFPkXbJrcmMrUjJSa7cDveUUtRkGv47AEh5btog8DogGsrgLrCLauYT8Dy1bevr9yF3SjYeGYiZ5BPKrwDc3rZo"
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
