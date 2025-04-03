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
    "37FGTYUEdSFV1p8eGFZogETncGLkfiyCGoss81wp1rdCcCbKNhF9aeJFsWzcR8J882Ykt5zSrrCMf7oGj2P8z49H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K7sEgnYpZYJuLr1W6SEM2HZXjAyFisQNhikqhoBfvJxE4n96b1ahwvyC6xXoDQPoTat8cJSAmSaXYjap2RtR3Sj",
  "key1": "2qECn9G2puXRsNytUXZ1bBLSTTeZuALMLihZpnbjBk1HG1NQy2D2tvBBgtHS6ZVfYb5LEQ9HCtuFJfCg9WL8tYoq",
  "key2": "3ZgK9BGacyeBiUsvX1vZxx4pvKPtNr4ymiM9Qt1GhiV5sdESjRjErjX5iK6txkWDcjsHadqVACkHviwKNJd9hYN8",
  "key3": "5bimdeTniveRBvsArJmkRhfKg5XUSMuiafj5rKNLkTddorib17rgow6a5vYPwx9uhbHYWfYTKx9bMKDkfE67jD1S",
  "key4": "4wKkjLoSwUmNz3RUwVMytpMwdxbMaHUudf2yyHtMeYSVJxYf49bbVySVLwdQ9Re67gMYWXx4mujt4nHYyisTdRZf",
  "key5": "pR7GjP3afTQMU6gxfCG3Z2i37j82DtnMzYuNNPtja3M8DtT7jSPuhAnxTiFG3TiiynoJ9zzyFviiXyngmjfjvoZ",
  "key6": "3D5iEh5aaRoTfNAvRBRTYFbRLZUakdVH9HgTQbahEc2AhG8At39TjV6gxZmzWVuh9yXn3fgnhMDCbrFd3YsWvYmR",
  "key7": "37f4vCkF9iUByrVZLD7dnqaqt4y3pCN5VBAu2f4enbs1R1u7HgccFCAnskm4w8586cir7NdJdsC7Vw8ytsAwMzqb",
  "key8": "4hcgnVa8ikzazSjgq4n6S9mQD12JJgEUkLLXRzPs7dqNTgEsYEiVP4HVNsnguYQzWCmEc7itsTpEF9YHo5xwhuTX",
  "key9": "42R1zjuNJWjSLyVMSypqBKz7H1NzRBVDf6ZiDgYPx127PQ6QuXQhVAcN91xvn1K5NjxekQb3rcrE7Wau42KjTFiv",
  "key10": "3JU7KW14xvjvrATnCTRkqhR7SdxwTVfbCKWuMaWwsr2ySksR9jiq6baH1qVd5bJNyxqpAuBpdwkDz68SMqFzwJ9B",
  "key11": "zvHUm7PhN7HGkNtfQCLYdShQCiUQeTsZeXyHBPjNMTARL7xZ1o6oR9fBbpxqVV685iKt9gF64QF4wNHRiaCuW45",
  "key12": "66uoHkBHoAkTABzp4e9ePuRP4JfVUAM5wRAxR47LQrr173JMtfeqZV9w4d3p2jxVeVBCXQZXiecGq7vJG5zyw5GF",
  "key13": "e9CM6g94vkUmeGiJow2Zo6oyjudJ714rhz7NZhRBbj7itzCW9usGoLrJsY4r1PLsKLRM2LNVq9rMj3P2iivV1px",
  "key14": "2smaBX9i9ra6upbfQAJXGqEzMQfwkfEEYVoVm4DHEPmwCdWNTqKCTLm7iKjCDZcGMZn59ZMTg12beuQh9zr4iyQ",
  "key15": "2CZotMjvevNXF4itbMcFemkv9xhxeZ1fLmyu4e8Ct58FdBxYY1TrUxiCFbGTvgHj86D7f24bt4cRMppC1h9sA182",
  "key16": "5AFtu77xXmy5zqULbtZT9pub4NyUpEDe9xoFHoePrGicJpJy9CcpW38dMWkzFqGi5qY6tyN7K8nGBWWC1kCM7Ax7",
  "key17": "2LAevETghzZ4jd4g49TauH8voWkFeBCmxjqw1Dxu93Gwwwx1C8PudYaBWrNsMd4aNYj7ovH6VqnFzmDQrpgKBHMP",
  "key18": "2YgvsSMY6oj3t16mMZh3g47izjm3psJSCt5RRijSgUrSr8QHpfD7YzMippxa6sfAQJ8z2j86Ls6k4ZmPS27ejFJ8",
  "key19": "4ZKv3k8kU4mKf7dwZRf2iVBd6Sx4pMHNy8WTV4mwYvdCAgKNVmCqFMb5XkQCFm24n3M64zN9CbdD3RLdsEiNnQfN",
  "key20": "2hneGFUPuCYXXrgLqBmE5fgvfeeAhdQvSMXdUdJh1XYXnP79Sg27fZLoW8crpi7niHnveuoTergfp8C2FEWgQcj9",
  "key21": "4sYtucCfpcLVPPcMoPdCgDtzjJxMeKt8v1MiNHHqL8axoccJpvtc5LUMPwRhhR4otAECgCADfU4GkEeDwcviKmsC",
  "key22": "3hSPZypchRyaqw7gter6VY3sAgWXn667x85pLAmvZChFUWRdrFqR2czTWf3J3VeCbU3kvBgam1KoMxuabCEWSx91",
  "key23": "3vPYfESGpV3XL9mcQAP12SnP6kVennw7237yUppRZaxvHc9EAv9A8QkVVoV91w3Pwhp4SJPLvBDLstMoSuBrXGjv",
  "key24": "DpeZKYHoxMgE59G63PY4JLsYvHkRxCL9FCcqj5FGtZRQdJ1qiKKRriik3H7uoaUHMZfEqMnGWAzGWk2DdVhsh5q",
  "key25": "2nR7kJ3MJuTEX1ySsfYVBThGagrmkhbJzJJuvoLJXiE3zXmMi4CQecokXNx4b9oKmbTPFHxC4jqun9SY6SU7rGQB",
  "key26": "5S4X8dEZJCKPiVXqZ8dPG4QqvJWk2umA9Wtcdm4qzJnXTPB9SrzYRkB1x9XKTrfZjM11vyib4PjUW3hjhwtgT4yT",
  "key27": "5xwkn1RHDhbNtuFTtSTtNR2aawSBTtfj5mAYaf6K5GrQ8DwnnzeD2FAMMdefeUazK1RNgMtfeN79b6A7dQadfbc7",
  "key28": "3j3JfP9udUEAUaWdmnirpC58nRe41b9umrAxJY5MA6Ue75gqyeEF8ze8uoVTVBS3jYq96t41UF5wMXpYdmfsbsdW",
  "key29": "4bowQM1n51EfHTob9qn2zk7LrUpNzQ2w9t9d6TWo4dqBMDc7k5UQFzHW2AsuiUZXSfxBVBKvLhZEwDjQcsbC1tHZ",
  "key30": "5iR4P8nd4dbCGkyTeaFTU9cCXYGcVjsMxNoU7G79wyZq1bcnPs8sXKFMRJkdgv1rqXdLBtR6Jv8r1k3X5ggEQ7Gf",
  "key31": "2wU98Axc52TCSjZAPYo6nzTYjLNLvDfqoZMNge6BvvxmJuJWjrE8ZZQgaf3o7PskcmyWPFvbgb547w7PC2EnzBqT",
  "key32": "5jRTp6Ee5qAvztKGXTP3B7eQGC33scTizCb7sqArsH7r6zjX32BBgucG3i5p2Pph7aRFmj7TB4VgE7sg5ai1VUNL",
  "key33": "2UWzJwetEF1d7MCdntdMDsDHiGpzF9HiVpt7SrJbFV3oWCCBf6b7DDW4epmTWvrRd8KsVEM9RviMGZNnbnskTSii",
  "key34": "2AE3QpMoaWGjkiCjGhKdEjN4RsGfjJJNi5ZP9kkHnr9j99EiWprJ6GuVYXDgh1EDu582tWjTLGR4E5hdmdGzEGW2",
  "key35": "2pXuP8xwgTzu9gqP445DP6wRsG2CoJCLwK24quYjf2ma2DWTaVRuLdcNe8WwwarkC1SEYKmSma3mxuEziMJktgME",
  "key36": "GLcjZVD2m2hK1SVtQko2Mib1M126NxZr8xFy1iMQxxcxZCMtrayzkcXNXJtKJVVmrJoqBJdQtqmndypUVadeoMG",
  "key37": "w9wQJZvKkuuP646tEbuigYsYdxYQdoBdzpWaxTXrM92A4RudZNkPCRQeWoixPrwymqZg1cbXbmtzm59Lc7aomyQ",
  "key38": "ELfteEBCQEUSVMo6oGzcM183r4bksKavwKCfGLxvzp8WFzsC1Gebms51mdkgCc1zcvdfHbDYRnzDZatpbaAexBC",
  "key39": "ag5zrG6PfamJQP1KkzxqP1GuFsGpD462Dg8EiSkFA9uaeZgXkKRGqSamGAH8GbdCU5SSrD3jEaqyQ74tYr3WSZV",
  "key40": "3LcMCUiqFHJus7YSjBF4STtCCK1ehWojvnwzpBr7XjhXFT6jnnjoqFya6ZciqGuAkP4hFkSKXzxc92tAHtwSP35U",
  "key41": "2By7HRpoyFQXfW8MKyYiwBtqYRBgUv6Q3ZP3dAUipGV1fNKxKw8cxiEPEoqMp2Q8vMSRz8mhUPL2N6rr3sBgKfms",
  "key42": "5P8jY5erxheASgZqWC7TNPX19HbRPWvN2oHxbsDuDYLos8QuLTjqvYM6HWHHx9sE2UoGqtT6FqsSEueh3wMPZfEs",
  "key43": "4J7w8YA1bpGZbk8EWxNGYSiXQ4s3dPLVkswL4RQGxsYR6b8FXgfPYPSyyZ9AqTGu4wD3w6RgM9Wd7hrV88Q4NKpr",
  "key44": "9oGUXzmJ6Ssb689NkQfyoWyUPzeSMQQxCs2zUq4hiWmC9tw6VdnXkFpxT9g8VXKpydbab4xzZ6HvX8nEehTRKnr",
  "key45": "78F5NhjKBRQvF1eEprwpr9UigK6nEybcreMHbnqvFnecQogsagAHhV6EPxMch6jhPf71e8TGAbNJCSrxxARW7wa",
  "key46": "4GwHa9wW72KbdMLeHcdrV4Ttf5rt1SegfYn5ki3JUwmekUgo9AnPRPnwRr2J4DhEcda5zwFow8NYDRhpa3cUnPxr",
  "key47": "5T3ZN7AXZCeWZhAgN9MiCEMkwYwEU5E5fs97WjJBC3cEazjfwzdqVLNqx1uT7yiF4gkgtFygGfE4tVLNb9APGmaB"
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
