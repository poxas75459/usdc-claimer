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
    "5iFdbYLtbNNZ1QqaJGHcbTuAxh8UZchoRyMpiXDXGGXcoTs5E2fV6d7Toi4m9zVyBm1RbZCZgmQ4xRSibTMmzg9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kP2iXA5VpXtMgWixz1DZZ9aQZAWGTFxcV9J8cxrRiQas9Xt35n2MfrGnEQ4frbVQpSxmZakN7fonNRpMKu6meEq",
  "key1": "5wyPW2Df2iGYFcQe3kzuJgwLv37ZzBX9n3S9C955t6LRdrCcv5TA1Hjk31R2Gi69rJj93Kge8q6amTx5YR4ve2Bh",
  "key2": "5wdc1kxYnAsLV2fSRmHJWwA6KAiaUszYzLzQ6KE8DAfZN56qmoL6T7gRP5PZQ9jB5tai1nDp6bxBNpQyVd7mX6wq",
  "key3": "5RHpNKE36x1SrRv32NJMCwqnb3NtuxWuXBiyVeEJkAUsEXSbz6bTsXK4VoQ8SzGFfgF4eKVnj2yLv2sEnToXn5Ro",
  "key4": "2CE8oKzGdj4shEkSz88F17FXpWrtpcZEB4PmMrhvis7Moz2MiNBzmbqeytZSPodxv7uLy7QjY7n6mhCH1DZsB25B",
  "key5": "5uPDzFL7Rkb3SEUbx8v3wRw1DaCyKhTznoh6caFmos6rAGFJYSfuwRTfsZNxeaDxG5RDMMugsRTqZF4LYsbnLV6v",
  "key6": "4HyecNoQBWakTvgB5YbaVRGPS8BgqxWdgN9FMf1Bq8tqkKMJvepA3HdyLX5GqfFp341R4g52xYE3QYtHNtHFDxXH",
  "key7": "3Nrzy4VkkkWCq3uaMYkkJZyWYW1VJDJqzDDMjNDnHh7DMby2kai8q15n93ovDZbZsvARaSPfR77PSKY3G721aNWo",
  "key8": "2cWwJGFVnBd3eK1coxUAD9utgtLUrHuagQ6JpqjoP57pt7ccxGiN2cuYVN5f1FHHwUQ58ZYdHP7QDzsUtCws3pPQ",
  "key9": "5pCkszBDGFQCUeZQxAwbkmPgUFGuQEjWfvAJFBV6mXFtd6zwsYZpqReftdiMJqP4o89xzt2Efq6BaUB8y2dhUKpL",
  "key10": "4YsotKUsJ5C7u1Qgap9PJAdNKYjyXBnS16Ri1Q1kJt8cmYLpVgVxfYoyTeJKDNrh9JWzLHf3VBZM4zPNEDQMmEFw",
  "key11": "64vvj2FyVThLBFjm8pDpamEfTx4sFN561jXoZQRxarex8TPuSHfWnWA3kZVt5XvK9wmyappSpSbWSapWt4BEUjM6",
  "key12": "7faofYhiYW4nusx3eeAo1YS8YDcjMm7NyzwUCnCDhmZBzv812zw2zpHYwPS5bAWJfQCT3ovtihGXWUwnNU2KgGU",
  "key13": "4XZwbdVKnPt4weD3YBLF6bVgNJ3qpsUE9MT53aGQAXGiYpNpvwsbH2MdaM7MdsPsCH7XxuPBoNjSQZmUGrgbuJuV",
  "key14": "C6CGkbzjwNa2bgK9gfke3hUD8mvyESYxMvAgssRtqFcgb1DmhGNxY5YEff57GDnrZvoM7K1LmfidT5XP4caUNd9",
  "key15": "634rusHGCKZziYTqStBxy4aJZh7zM64v8iUXpNLdvhxmavJ3t3cPEuTkk9sVQmDi858R7wj4E983dx4a2jpeiV1Y",
  "key16": "2xPERz9bizauJUyyBvCdyige4wTptU5jaexocLATqZHqrHo3BUEARcVp3MYR6qui239a8U8aQ4frVe3i68s9ZMu5",
  "key17": "6QWdkj9VpyShmQE5SNTEZHHxkUkj42E8kJ3xq4J2pCLA1tPC3dKR5Ag27LgTP7eBoq1u5hnNhmrY3xhWcA3wBRu",
  "key18": "4d7cPhEyJJSc9ybQxRCmuCD6odrhgYLfVCK8tP6ZSewYFxxRts6zVRCEkDH2queLYDF3dkqMeYgCpBR3mYmdmmwU",
  "key19": "632wZQK8AYpjs7Gw6PHMrAc2eko2h7P2GmD1ffNWL3FDsB6f1viwTPnk3RFCTmZ8G2y7pHe3hxgMHKnY5ZVdKdLX",
  "key20": "59gQvByXXjV2KbZjSWRrLxNmBrQ3a6EjHFyCiCJB53vosth7FoGJbqXdXUq52GecE5oPns5eCEg7XQ22oBUG2VcC",
  "key21": "3fsTfin6cm6JxJUb9PQYxoCwQMjLPXLhGztZeqhHNY2vf5HfdS4YwBM96VwWTE4F9yik7Y8syS9DKiWhBW5H68xZ",
  "key22": "4DKsPM1wW3cifMF9cmQuo1f1zcWQF7bMYyszkm5gqgLyvBuqdDSvD8MC3rU5ZtWKD3qyLXqjgQv7TN4FgbvhNJMm",
  "key23": "4z3VvJ9Lf4ngSTakYw3SrS8DYPyh6NV1sYE7LcWNzh823od8BLa2qVvn5UrDYGUS9SgCshrCEjzuwd6T3qyqvzhF",
  "key24": "372k4MKnMd5CRXWnNNpAYhXuWCkrMgUYPzWY5jkZRWAQNXR5p8BFLTNbEji3FQ3CQRpHQs2YSWK4PRE9KA25iAtL",
  "key25": "4Qe8QjmMDq9wJmH1XJqU9YsVJj9gsKy422WDgXiZFSoMJ5XFqfaxp32huAVWZXi62PanoGDwuRyaFVJbzkJFkZPA",
  "key26": "44yu7g3W5yMbDwNQv4t2Q8zKhdBi8iaxCDwVKwGRi1DjCJjdhEbvEtpP4XF8rUWkhSqahStmfdQtuQoHG1MLjs1",
  "key27": "4o6Y2BwtX6kx7V21Ey94j2VHCpgZmzudBnhQyyuuD7S9Lz5tdZXwXc9jeq7PAyKDXkWpS2TTqzaPai7ni6K1fhY2",
  "key28": "2Pk86qToYQUNQfik354M1P5bSaGnCVWtXrGkUudBj2xAPErkuYgCRBGMwwAc1uPMDfrcLtEtyEpz3kWgWjKwcQ9R",
  "key29": "55d2zyefwGXR9H52eZSVkfooqVMHzH616sg6dHU9yLfMCYXYTsf1zvjde1Fbst2MjXYzPQKVQhgnEQpHkWmMgiyj",
  "key30": "5iXFJ3CZJjGyjkABaqvYzixRtUUNTyuhgazmau8REfSNib9LaxEaaJqhf7Z4kumGJAqKLLeEXBJToWjWdJMoZZUk",
  "key31": "5XX2deeLRJG2mYsuWiTPyaJULFsPXyuE37jUM4KBUCaGcoV2yjbttPpFieNquQa4VKumPGGDwKKsfVPn28LE7os6",
  "key32": "2Js23N4zTgrQDyKQaCmYmTTHwC98BtAM99ytFf5NLZKbuCmpTeSNjvv6TXG5Nyn7fkXVDuzYB4hxaXoT59FPnXRG",
  "key33": "fiuVVLgGQrPtCbbdXvTnGTkhRxq4fjkNB4bJEBogeBBQ5qYBRSdkJdfk1Rq6t74u5Vj5YuyxaQyfuBz1NrKA7sX",
  "key34": "54jLGKkDqMt97XZWnuG5gLMBkMHP3sXzeF1JgWE7q27XNfyq4JnJfJMQhF8neoG2MZGic7tJZgYPYFmyzXQwdKC4",
  "key35": "4qn6ytAGyrJ2qhQiGcMmRmkbfV2NumzrWzu8E7k9mJrqVSJpZ2tMftUf9WQ5qwSYY7eRUYyFwQXUbUWRGTBvy565",
  "key36": "59yTZCimsD4PNSptMdGHRXQvS7zkuMwq8Z8dJspHwsWzEFELFYFBivVhZc4Crry3M5fumVkvQRKkGvX1ubxDt2b",
  "key37": "2xesSivQY7FiAp1PhUqQ1aN1VkDBn1M5MdayDBgpk9DV7voPZNkTrFeyBdeJR9nvZx48ZuRwQY2ftxthUfEr2wyF",
  "key38": "3VqzpkwLXhVNx9kgKBYtJDbyUyb2ykQquX5kP1JfNTxbvhJ8sWUexL2SgzZEWos2m7mjM325crxcVnP4U5aRiukz",
  "key39": "2UoDNdBJWu9Ay5Ggzc5CdNdHxGGPzjZUyYc9vWdqmtF6s84pDw7RjESpYqDQfnTrEUjXhf41MnN2eytxHdspTEug",
  "key40": "28WiN7Ms4F81Mv9hL5CXtnE4ejaQgpawHByrbr2E2JZUwPPmbxMxfFj9KG38jg2HLzv7WPmb8VA4yfrisAGq2Le4"
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
