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
    "5XZh99wTaTAHmGxLRRNKeqiXMKmMQm1d9pEKtQjXSKc1DYopNao7FtHDQv12PQffXSjqpQB2uN1hvpFZPdNTXBJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "thPhAaE9fESb6ERuS4a9W672wbQPUBDFdszU9j7ZabXPtH33XmLDXVsoPzgEoYXef8Zimn9464NegvzEvvmfCg1",
  "key1": "569WcNRToyf7wnquJJZdCJ978VT6k9bd8YJmgJQ5vjbQ1Dszaa7VEMyonGp7LAGfZ9W1gk4XGVLgWS7cDsKaX1c5",
  "key2": "2BcdS6995mGoqWHwAfkQuYxBJPaBvr8BfaUzAGTaLvrG476yGyQiFFYaP6ZiqeaMhTXVPANSH2CjZ5SMDzfffsgy",
  "key3": "3QH2Go6kU1EJvWCRCrjYNEjACNA8Utcw3RZ6uNRqU5XfhKee8i2Wqeup6QQFtCe1KeohBzus19rkgX1Q4vrXuB3q",
  "key4": "61Rb8NuV2wRHkMDAh2BTXeaavDVDgLhWr9zVFTHrsJfg2p6ZYeu7xvpk1cqp6DuLDo5XBiKkuisqrQh7APxeJVnP",
  "key5": "2qWRGfxbQ6D8uBQcb2hKTzhD7QSWZF4m7zfKYVVnW33yRSPJZpK7PCie9AbWjqyrupjbdn8F8XNYkQnJEatXJn7",
  "key6": "5M7GDxSFWFh3tPxhjU7jwrD35oFxzshD3oS27WcCPH8ryrCLBzeGnXCyxdeumaFutsPjZY2rBepf143mxwkmhumN",
  "key7": "4LyY5T1EWschgxEdKQRMVJHnxXNQyZukXn7U2HGRYxRT8BwhEZKoJ8MwttUdtRDAwrAuvEqt1PXKAWWArLt8tAaf",
  "key8": "2LQbJaRJAy95JgMRYq7zdoAtRGiEazhLRkqeeVHshL2JjfL8s2yVjguYh1gazSx4qybjAcWM2TXxgdjidqoL5CUK",
  "key9": "4Vfrk7TnCVhQXW3bhk1iVmzdE1Z46PEUwuqCwgJ3bsdReHbtejRnxuK2QByMstnpu8BSEo5AQ3u646Lj9axyuwAR",
  "key10": "2mtaHXkn8es8CDYgrX5abvu3BMNLSdGaBTD7LNCv7e1ZKjAzPtbqmR6GLatLvrX2kV5D5huchaPM2h4fUNZv8CLi",
  "key11": "jQqgqsXzsMRBsuoDzYexq3ZjTEGsUaVpRbuFAc3PADJp4bckuN9bvNY8ahAtoPyT5csp3FAcnP1Sg35urJsMr3s",
  "key12": "po6b89jxKCm2pjBbwYGVrJwFQ8zXvP8QBcvF2fSmDkuPQeWsV32KwB7Xp3WmyuX7mLaxRLNg5UBVVXFnXUoDQbC",
  "key13": "kMpmhkdPCacWaE7yzuqqjLwuYXfnnb6x7YZKpoxj3wDgAP28pasvNfoWYhHPwkvfuJxLCGvCoBxcACbBKbtF8pR",
  "key14": "Qj2BZepoZDaao7HdmdMd37dcUtxSDsJNjk78kenPWgLg17DZUXEGF4CH44sDQe4W1F76SfxYv24p2JRfAQr9BvP",
  "key15": "wcoSXUd3fVW2qbu8QsDw1R7Wm6G9bcbz6tknK7xvo9KS5wnuyi5q6LtnsppKER4KANaK3C1uEVhQ5XpMQNEwnGL",
  "key16": "2i2eoTjDo1TvS2z8QeDj8TzD28BKnBL6HfWm4QvuhKeesXuEKVmueeFuafFRfgm9rsx2DhciPhdUNjwAweTfv3No",
  "key17": "3ypUKxGJDCatc8945tRCwEwdzuBDn3DEFKPm7NrDyd3Y6ixEwnK5TLCgj726fLdsv7XXfK4iW1NNjacDXeXm3H2L",
  "key18": "4gbBQBpYZEqW9hHJf7FudPWSYLa6TFbnAgmzqkPrK1eMWhbLynwdK22qUheWRX5453Yodrqr9n7rbu8ZCsx1cg35",
  "key19": "5hSZeQQiZsHPM89yF2honC9jp397qAdWCPpT3LXXsjDgvex7PEhtV3e6mu9HccVqS65Fx22NJSf1yuTJgTyirhoo",
  "key20": "5VXFsgCDAjDr7KFLtBmkBjyYcJreTtt4XpXuYbYgksqk1B9ETvcZAJhGzqNbVg8v96voK8VeHpdTTVbTFBvdLi56",
  "key21": "5WVtRwSkXupoLuuUH6W6Ui71ah1XjBS4JsKjzTkXabt4sGusNxTwTah5FCjQQvDPQm4QuewVkWnzoMVwtMNTXYQk",
  "key22": "dTxxcqQpivQJ32TUCPbWKiDnErsn5tLm8NdxNcLq3fUFdRUAyLtaxP4bwzdq3W5bCUbbp7JsakMTXRCgf4pDraF",
  "key23": "2wGJc6tDg6684ua9Nvs57afYTo3FhzdubroXFQssrTLTyc5rJXgw4jAP2ked4Kns4hEb2i17nszp3XYZaHUkjpTe",
  "key24": "3tGYYTZsJmjQiwXT55JfjoC2oU3j3fUak2XyveoezMEZxnaJz7ywtTHvRgK5o3dDoeDxyE73goe8xdxqDk4tfzSQ",
  "key25": "RqZfcCnF1M7szpbfqWzWeV9dWV1d4BqUHp1TMQyRC3dfK3czJQUpZF9A4nymLqnHhiy3P7NHmky7SpzdpLxNknd",
  "key26": "44kmUjENXDfYFxdkaka3mCEse556e3iupiuwmha8CVvHQm8EsifMNMADxhrm8cFf71jrDwMbHGXEufxDHFRobMJg",
  "key27": "3HHUJ8Xg8vrDs8WoMeeqyncQ6qTKkdZAXistRqoJtoXxryrP1VuctyEcjbBJ3DxB5eqT8zfZzAgML7ppJ61swLJa",
  "key28": "4iqJPS6VceJWwfVU6dHQ2fb92K6ivdTG7kgVPd1X1XyX8wD1kzBvMEvR28y2Rf4GnVEvdkjZFqNrt1SC3sEzXmpE"
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
