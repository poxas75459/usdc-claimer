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
    "5Ks8uocXA4jb8QLDTq215D5f9mQFCaXdfgX588YvWwynEpL19kAX89qd7Wp3BcapAdL8EonzrDe97Mirk5RuF6JS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fcL657EYsscBfJ6nNZczoLGZUqjmhWBBy9v7fGedL9WnSy3NwCFok8JQDXyLzu1U7Emh1cUpTg6UXoyqG37e315",
  "key1": "QHwAjnQHLU6ELmyrC7XZ7dZu1zz5emk32Lx1fSjgJCahfJumFcuSZ1RTtV8tVRLHcbfAeXGE1EkcXv6PLZkf1RC",
  "key2": "QwUDdm2j8mWLYbEaWXzjhBuryuDVkfkZy1yJMxG5rqxDmCwFWy6emyPmBuVJ1gkE8WuptNApPdKfMnKzXfs4Puk",
  "key3": "m1AJJMLYyqcSJkcB2w455hxYmzZxNikUq4ovNpz4iNyEr2bczwQfaxMMer1ykdz2GJ8SCbzk37N2ZCg9pPxcvhV",
  "key4": "646WsqWcUrLA8F55H7bb26GpidsVPAHqZUaGsuHDGevMXMNpXWZCLMoH4ZXXGdvd4PQPjhriS29QS34uDj3FjYUj",
  "key5": "61ct5fCh4mYJ29Hi5sYc1zz3PwVY9vZgBdM3X88pR3dayGAyrN3rJXgtaK8UaTqeDHJtxNb4px9nimxh8ZLXue5v",
  "key6": "3W5EDMAwq4CJ4f8yCBtTogJyKJ35mLhbfLN685q8hjxYxsQBygPwBHDbuR62KVsE1r372je1NCcDQM1bqb1vjRjk",
  "key7": "52eUQURq4aRQ86wQ9RkWcx3WByfCw3EKqz1FpRkRrzXn2r5RYiM1EmVkmrV8EeWoHs1d4iQmrQreTk3RMf9VFxZU",
  "key8": "3DZn8Z1R5aHhKa4soPfRKma3xWpTDcLu9ikFghkL1EmrwNfEKTrX6QSwEpSewzBVGNCZiCAzhrdePo2XrxRNSpFb",
  "key9": "57668WgHeFoyW8d1Cvp4z4ffHqps7FWeVR3k21JWPgbntQUtc5iZ9qS2VJTeQawzpVxWXckujrXpkt5RJqdNsxCU",
  "key10": "58ACgQA4GyPSjYSwonNfEAetuCqqdb2Jc5t6h2iUVNKCTMATF9vvCqjmzY3YxNCt6ShEoEhs6hg6oFENZw2gWNFX",
  "key11": "4YNesmS7nbZfWm7hyxeyCbnfhMMD8BvMjjLY8HsWHgLesRrRuz7UcEM93xcCqGQUtjSBhmRQPFrJRFtedXkjk5u1",
  "key12": "2HN7YSzX4Y3BwT72dodXZqR5GFpr4stniproEj6jFzpaqssKmTZ5yFKv9wyGGbjyW45LLMcuA34zTvSeVjRD6Gn7",
  "key13": "3HcAy44Fdw87ySH3eyw7Lk1PMdJG1Uj8ej5HWJLceqXDhZ5kAuR73Pu2uu4URmcsX37xPYGuQpTncJtXpXBEGJRz",
  "key14": "43ntoS93QvJPtAc3jTd2q6A4CqpkpgeWRTJxueKfspKvQz1QM2Ai6nwtWpadQuGCvpT97M4VQEG4itLG1JyatC4p",
  "key15": "36R2BbDWUTRNeWpjstJRALov9hBAQGBCzg2PZ6HruFfSmVAuAxb8apUu2GSFeSJHkZpgHae1eQpiFLx14p1JLYKw",
  "key16": "5Gt8LrPJ9dREtf6ubFUxDnq2QxiB5XuF5ac69C1nsBc3nkyx4bv4XR2EDyn39YmkbWAZzU3rak4YyYk8e58eSyjH",
  "key17": "4xXmiLxaztMrbT7j6Y9YZ3AeYx1WJiN7tW6BFiLvqafkLQwSM7gJ8EZeqMetidNidUMFnhEWFnub7SFddpdiNym7",
  "key18": "4YzABFz86YUXW9oZgzhG1k87EHVFz4Nij5BUd9SAS4qLgqLrDWDBjLQjyXq9zeG9zdc5WVaKr1AGVAPagjyWuUEb",
  "key19": "57AADJPvxhbYYNG6mbVpNBwhQH8674kBmvG1u5YvWTFKJyXakjzDcFWVDpeU2XZWzLcVVJMywzopG7M5TYxjHHdc",
  "key20": "3kbJLaZt7Jvhtu6ez1sk3hAAs6NVyT7v54KpMnQfBv4rkDTRtMr5f5ogJtNPjiqqmhpuM2uCtJLu4z7B4GVxRVSq",
  "key21": "63Louy2ZitqnAvmQyfa1fiBdQSjRwk3itB4RfeCM9XMJ4488aFGFoqPS9gPzqFS7HqDd9wDGKhpkFXUTeufaqqZu",
  "key22": "jZLZTLf2PieSKaBhhbQTCg1HmJtnr9H32H2xkioFewva6BhjGHUkwirP8AY8XV4zhwSbKMnFZTFaygjeJQHZJL9",
  "key23": "4LEnMnbJ7jCnLNLfgkKkPByAXr2Jkzzob9BD8oASy2o8qwzJ25UDvfK9zaDzQgFZrBTjFU1kjLaGuAUSjK5wyRSe",
  "key24": "3oUdrqRu4b5UYePokGYp3gfvS7sin8Q7megJTaMXyj8mmSGT2LbMEMniZ8bfGgBktpUzCFuMjcJxgZoaw2fBHxfi",
  "key25": "E8ifgpsbeqWGKH8pNhKBo4jCLCJwiymUghbxB3coF98Lz6iNDW4eYC5mMoX6ro4ogkjuUYvxDSvQVYXawcNvd4L",
  "key26": "eiAALDmX4vAVgks6nhBEAmJyXiAGcKidYcFa1U9XpmykqDZVQ3FpUBuZsQYoNeX6sZccP4MdDPCgEe9i6en7FRR",
  "key27": "5UDKbFZZGGraGbFqAXg7ERGrFLMCQGFFc2RLhSFmLUVG45MZnCh2fdgbY6P8aNTgk91nCFcZKYJnVREckiRtWn4J"
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
