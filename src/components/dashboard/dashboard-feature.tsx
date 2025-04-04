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
    "5h9qyd8rGfBwBRjAXXhnsmmw78p2rEbNZ8GoC1Z6mbVru3Vv62U7HuP4zF5fQG4stbhxj2SrvXkpGsLkQxUG3reK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hEhNhSFWMaGKnZD9jMbmYqdfvXJCTh8sNedp8hFhvkwivTLQDU8yrj5JDUfXgZj1Xmkg5hUqpg4PjEqQHemyrUF",
  "key1": "5M9vA9krauaSPLdaTdJXmBFG9wQGUB118EsA3pQ5uMfiZnJvk8GLddFwTkEEGYMQ6d2zGB9E7iUW3vdsYWGFPdH",
  "key2": "66kfUanj9TnSmEvHfuJyN8wkgvdcT2CyLrugXfF6eG4CSbKS794LvhfNy4ssdWsdRi8faF8K3ofNRhED6yspE49S",
  "key3": "2dwSsux1WYCkhEdVTR6GPm65Ro7mUTeob57Ki53JdE59bMRt47vXNqE2QoB18wshLkp585g4SgkkQD2MgFo8X7uh",
  "key4": "4W6RGP321gi3qVnox54NPqwYX5L9kHyFAszAht4tyAXnGm25RRV8QgTJkzDYLedKngXZ9tMefmjDmUVarY8KKbRS",
  "key5": "3mUCNmtiJcD2JNH28BtvAHZKGobVXRbyETBwJtA7eKmXKkVqwCWHo7ARG3xsh6V8fX7LApMdomfGrx1aK3CThqRW",
  "key6": "64Hb6JcrEE4zVa9pDTR2QHziiHcNK8k6aApKeVcgfm628Mpw7SFHtoj7W6dy2osJnQYvj6YeTMEP2Qiug9dzDDmV",
  "key7": "j5aruvQzsCy185PUiUYPQrPS9zEFBzS59oaCVaE6aDwFeqXMkkFf1ipyvrdAjeRyEWmFTHRVYPGj1s5BDwb3rMm",
  "key8": "WRV4YoSquKxQrsDqsmsfJJEnbiSSyJkejXhY7s6LJqZaaBNPXH6VuyuXWhWQTtWjufyGgXY1mShN7p1DLk4NGfa",
  "key9": "35xuoKdA2ewydNhCweHmeYf63cR5FDA9SgHkhrmrPK9fffBk2ZjJmsJbZvYg6ji5LQUEDfBiog22ajLnWt5kYRR1",
  "key10": "2jifbiVNA2ERM9dLpfzEEFNpcaMYaXQDsBktLb4Zcskc94hmJMV9s3d1W1DbpWx5Jmmm1HVzvSobog7HtmFeFgus",
  "key11": "63oXi8ySH8cGVUi82KNd27GnxLVaX5qiB8zuPQUUvWedxhm5S5pG68GjQ4i7mkNfqWhLUASYtjeEx5Gv4YoRWfS8",
  "key12": "8mZQnGoSSNGPRaTSp5WKWzuFcw7Xwg68mfa1MFN9wFhu3rC5jUBv7LQ1ZRUp8Xcwa4BexbgjuDuqW6PTmZygj9F",
  "key13": "itDGwsDVqxt3CF9v6B1ebFzjSe72r8PPDX5kgaCHufsS43pgaAn3hvbXfMrDbJCE6yWNyaSgVu35JcZ2qyDspGo",
  "key14": "3kuCvtojUtKaH4fjWFkAagh68VEGECacbnRYyUQpqhSWYwLnvCj2gYj2saAprn37dXMnTVkq7hHbm8bt38QB7KfJ",
  "key15": "2Gs7HJLztjkPtmwXtJeLVt6Y5hDKqJxoMy1MR23KnC2S8Ns8HzeuUkZ4SPBgqNKb7ddakiicFyCvET3uTj5oPrah",
  "key16": "VwBBEcSNNcYtK9vGKdLJMSyrEQYvAxuQWbg2ARWUVjebDwfFjyj5zBkGymoBjtBJBYB9eqvtCKWbWxnNXyh7Kc8",
  "key17": "5w77zELpeZkx9S1zPpWEq3XHsEuu1SEuGYkxQCYTz788egaRvTyP3B8GcYnmSNACRpVdv5vgmN51WUh9DJAm296n",
  "key18": "5eG8DZBrSW2WK6pYdJEUYFebCJPpmbELCEZ2gtgbRid6SwujxU2iwP7ckNWcUAV2Z8pfrYZouikPozapzGtAnkJD",
  "key19": "2hvM44ZfuMBMMNwkGRxDqzQnTgAdzB2Ec3cZZ6Tt1jLQWHtPy7DLDXbFeea44VMRH8kGQQ2NbgUXoxJzUfrQfUuc",
  "key20": "aNkXVk8PKFwmvbFbDhdGD6xPv7e59u1b2wQsHrN4ALDahbEYgN3LEQeWHNvgQJjChPY98iPMezYhhJ1JDGnLRBa",
  "key21": "5GLsLD9p5YGeKP9cexU2drfsKMg4ykYw6WoA8Ghe1QNeAVavDrNRdFTAg6dnrwTBY3sho6yhxGtiZ36sjUKXtx1V",
  "key22": "2VqzufUayUA8swB8WGWdcqH4gvCXuth78Z2VRVXft8wRFaxE7mzq7G5kSeDqMpWDUD1t2tQ11ZK9NHUCe9rEnScw",
  "key23": "36o6DCqmW3BiBSXWmpPrgzzsjtEvMdV8SNCT8e67srHcLS6LP3Su79qh5UN5y6RBEFnUnZ5oLcimeYuMVJZ7UkcP",
  "key24": "5f8AsrQC2EiELWqJDktAtFKCGQBJ1RxyzgQvPzG3hG1P4JGTNXTuUaEE2BGAz6HixGryuZB23jMs1akvixvm6Bhs",
  "key25": "3qFgGPioVtvTNs5LncaE8ENjSashpSZ9ay7iZEnjuh6xWA8C6BqzUroy6vZFpdK93AVPLnGMLxnKvvWMhof2eX8t",
  "key26": "2sWMtXmE7tgTTCjcBBaABsRmwPwwiiGpx6cxMJzZoD1RTKN29mEqjUyogf399SNtJa3WiuvUSbnUd6cyLyoEsEs5",
  "key27": "3M31WNLrvxfEfR4pFQsnUn5YAqNSMpQCmo4HVWpx2uwRt3WpYa1Mgfys8qWFnGfQ21bixfTz3zQJ3mxaAF11APRu",
  "key28": "3mLqfeVTxkFEexq8daZcaWVYhUnG1dctjfH5pRB3MsByzX899bUu8wPGAyhXfTyGRqQ97UG6H8GLgpT8KW6BjnzJ"
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
