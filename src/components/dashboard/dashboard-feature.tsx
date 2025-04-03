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
    "qEQkJEmwxv3dfPVAQeeZzwvamMc9GyCmUMJBXiQBXudKZEM3rGkKZBeq2hGTwQq1Uh2ekqjXhw4S8ViJQWCn4gf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31XV81VRGmdYqhP1kxyXixhucUB21Yux7aL141EG5um8HiRhh9iUT5HPrH3TJ4nPPAmawP9cQgzVBq2sDbUrB1RW",
  "key1": "T885AhegSArkBXqoNjuEAFBYrvriYP6TRL5F8Bax3eP7TWbPwPjWNeFd7qJKs4CggEpxANm4APFAbtborNGhBHR",
  "key2": "2SviVjRhGWDKVUuVH4Aw7S6M83oJa2ws7FdJThK2KQXKtE35ipAtFV7t6AYbDHfGvNpZs4ywq7Ed192GGqC3CVbt",
  "key3": "2uWZF5xUfcSP6ZYFsvt69FYP5qT78My5n5P5WAEYnf4fEKt72pBsbE4btt3TxqjJbnsa8bx2mRE8Smch1ZCdy5Db",
  "key4": "3DzCQGmzBtxYQsaZckSTQXWRPSN6S6H4EBHNGQ5JBiemKbWe1Jcga7UBskoFDFnxcFq3SzMPsgHwtZioNx55NJT8",
  "key5": "49GfVgY6UWHfZYZA5STaDaSVtsTwFQbNy1XgrmxNAm2JhE2gp64XaAVtxJGdR9b4NJWvsBqTciuUXwqUJ5qc7Y8C",
  "key6": "4tJpGoExKrpcxAb9axwXqm4hWYt4TKjDb3dtjZCt1gMRxC5JvKVGc72CjQmyFdvEJesZ2mrYWeD6cFJ6wpooPDnY",
  "key7": "2fUajYwCaTYr3mfJPryqdsR4HZA2BAgiKtboVkQtossJXvfss8AqjyLoL8v8Rid389oykQbYJ3z7vad6GTBE5XQd",
  "key8": "2eiBVQah1U4YVQWGjK3RizZpdcriJGccqLxNQ62fixkARSdUkhA8aXTkTkW9VJYJ4xrXXBcgnQFfgCbEQWs9VTvK",
  "key9": "4kSjPfxtH9kvX5qFTbw1JgExq1TQ2UsEzkc59ZxCohUEPzwVKh6BB3JX7vzQxkDmzfwvYXDjaodYp9pcCLiKFgGX",
  "key10": "5fTRc9hjccHvgsYWFBPbcZYvxmP4PMMQUTn8UqSqsdxrGe2vKNmYN6xDDhTaL1XK2jAciwKSwEqzDqQ8otGRUnK3",
  "key11": "QQdTvkqeJFE7adHadP3EULdKPmWb2yiy3WghW8PEiAm2JK6eTQwKfQPzA1j2rH8y1igzD5Xo9pqbKAJ4G94hocn",
  "key12": "4Y6DsA4PCQBNyXBzCxk3R1tVPQ9QoTFfoZbPBA5swz6ARGhe9xhRL1PM7Crhk4AqcWuiWJPJEk8LExEqUZ4z24Qg",
  "key13": "5WaJq5oRZWEnxbkZXsszRXqBpjpuY8F8Hoousa4AMZmasmtQftzUQxbRKryDfgjRmuemjMKikYF1p4rHskyPpcwV",
  "key14": "2S5fEQqVAFEQ7Wc6fzcp2fnx9Y1YP1bp6Marc3MYmTnfJX1JEvYeooLbd3yrCqLnXhKjmHpXPHv8rXhDBaKJpzJr",
  "key15": "4rATTQ4TudxJWWWAegrWcxX7cw4PMr1c7euS2Kp9KBt7icKn9rKSYqVdVhZzw7BpMPzRRPMg1YdbJfYrdDGEnvan",
  "key16": "5HKNq97PPkEztaBge7g7QujS38WmW7NiE4aedA7wZZ5dcnGF4cYt85sWHWgBMJPzY8qCQ6tGu2zhwiaVJbqK9ovp",
  "key17": "7ZUbsFVQPEUVhkD4Kw2gXJeRxqExCEiD8VHEMjk47T77Tx8byKodbVqK5m1ztrTPVzs1w7mvoFpMyqZ5jSdoFW3",
  "key18": "7E6iyhKqj9P4h23KpdAjCrBUdiEN4R7BbAuGUXEoZNAqyxkttCMoHEzmus52ZTnwbG8TjzbwZyd6wuA5e4XWqic",
  "key19": "MqHcooVATg7n8msk5Dk9t7oHEEB5LrNQLBmVZamH73kcWUvzgpa4To4nkqY7mnvJdAyvvYdQ9VQnmWfuspKyky6",
  "key20": "XF7JMKDPPp8oetJftTyJjAA2t1K23hmtFbGthapdQjbL4hqpLzrsyacEN7bVcqer5vxeiRAGc1yjigLNMXs5ECD",
  "key21": "v4R1osNEjDGM59rt7z7BJJPJtR9RNacYEpoTjUFEn2f8BSWmgNGQ7iCjRXd73k48EBPZdzmNBmTP6eCioCUX2xm",
  "key22": "3PYpa1roeeW3nCzEcx1q3txSXqJLeyg4HEAgck8ZzsQEuKBn7QPgevZ4m439WQ94NmTUyDvoGr8KYtYHeKBUEoEg",
  "key23": "2T5H81rzsGjwHJvZQYeJ145Mzi3Ucy2tZ21RTf5spNbFJSV5Js2TLsq7hcjvx7bdAA4gn1aWgENmrJwSccegdG89",
  "key24": "4Wd6PmgHPevRmjBeL9pP2vAQmoVKTADJfwfvn5QbAMZuKzX3MSjk8xpAdcfQgVxq2FCv8qmug5CtWavnke63wB5L",
  "key25": "5XQeex2pSdRGw1ZZQEeFu23hbW7GfaWa2fRrQjT5BG3iWS6exMRhVSQD9kj1byG9Vb7SZnJfS8ZrzEYgC3hz3WV9",
  "key26": "4aX4GZP1sHbPg4hNzB1h25bscgExqsz6uq3ni1UqD3VLnbsXbTeVRrA798hz3TwLtR76Ff2dR7AJu7EcS95DvGng",
  "key27": "2dM7LE9hu8RqrYVXFrsL1HifBkGHJTQ7xVdJE7RDcCpjEqatK9Rbd3cRUnQ93AwWLwXSFCuPs66pVzD3iJp4dk9R",
  "key28": "3899ZzSfwLCKH2NhsALpnE9gvRweyJjzBj3xpySvfV272qmvTR2dgbitnSxKiEMN4DtXU7a16FBk4TSbH66J5Lmo",
  "key29": "4T5HN7M1iA3MKojzE6E93vpW3iarJUBnYtLKwWjJKaPaWBAw8vfGoHwhzyiFoPgkDzjmxnhLw4AUfkk7VSmdyHNB",
  "key30": "3cgAw1X3TKhJfdZ47uSBrwiBx8Z2cD2Gs8DnHYt3Aisn1DQHp68TgipsHBmRhrakE2f6CYb6Zuuid3jr3Sr42yDf",
  "key31": "3CqBaPMiCZ7XQBRAqZ7RkY5hBuX1wNxZE3BHDS8vQgpyW1TrdvFnEqF2JitkshX2curqaWueJtAJ8WwYpk6pgqLm",
  "key32": "5s3N1SCydCyT88QnCUci6w3b2enJJwCQvrGLhzzYSpKWa1xfW4zrrpxgb17USrDFtcb7VZCSGxtRuqZuNNuqFfjV",
  "key33": "2jUREZQBpvngnVj4QEQ85TkdHfKXEMCBB6GwMMQA2q3Z656tMqTQzt19eNbrR3X5FnUv2ALQ8q2EvdufDM41C4xJ",
  "key34": "2mQb2PwwDW35hiPXv5nhM9FLszagXg64ktZY5BcfxTweLr8eDZNRutBbiuBgq1akQ28jaQZrCwLk9dbjWRczMMeq",
  "key35": "3qqzcXytd4hvmTBAVHgzsN49f5F9imRcqyCXgufRJyM3URUHd95ruWPS7xfZbqkBujVjU4awCUzXuptgHtucXDRC",
  "key36": "55ejb9S2vGUBzqqWBwpSbpdG6sMKgnt6EAxVkiUjuovr2AqcrZN45EB3xhesdSZjAzKiQBVjYV226Wr4SiLGZM7R",
  "key37": "4E6rto85otuH7RuQpptevXuHZcS3kMMJtQXid9fbhVuuFMnq9gafVTV9WQoY7MwvG68Ee8CJpKYKZYiEPZian2Ko",
  "key38": "LPJtoJM3fAQgHssHDz2u7RWn8UKwZkzRfpgCkbJCBE1cC8jNMBFEmwoAHAF1PpkKAYvjLk5wBdTuYP9eVzi4Ymq",
  "key39": "Zd7qTX6iAeWYrJMxR9xJJBZqryVff7ksuKwdnTawe5u3rxeG3V9kbcG2Pq2pTZCFQrivhZ7Ej8v6WzTpnqdUyut",
  "key40": "3QgkRak1odqY1rJrta1k3k1Zxq3E5Rx9et5t5HthM94PERtG52FCjHgyAPnvdeJHAPSz4rSmYPERfoAPxDXDQ4WL",
  "key41": "CJVEvCmNTCPjyCSfZ4dir81rYSMGXa39fzRpbQy25s48LisVHp2PJLD323MDPzPb8p75vAKx4MSQ3newKxs9zFb",
  "key42": "22xnBjTr9WXQCi3Jrn3wKiLG6mrUP1RWY3TQD4PmKo1QUFN5Y8e9MfKw2QGETXWAbWWcLeB5BBk7Tr7pNa8pMTdm",
  "key43": "28ARkoV2GtHEMJYNi4s9C1PwiGsAxpxmGhPQggSSSd44V66RnyLgesskkzc4vfkm4dSmnhADqc4Xj6T5SvnM3oyQ",
  "key44": "4E1MEXaZanHWmKmQ8PwkFEHPNwMLgtvMRZFcngsijTRe7QtUSMsbVeQ1MYzoKy5wmeuqdAtHKYz3zWo9h2X9nXin",
  "key45": "8KqbkDfGZ8mhxFwEVwFZ16L8FUpppyBhhCHwcWHUuAiSPZdJUtnQPZSezSyS7s7UM3Zuu3MZrfLY2kb4mBkiz9J",
  "key46": "4whG5N88HNchRz8AViGs6jJJ2N3FLBYi6D1xAJ5H62LovhAii6gRog33mwuUMMxEQHs6LLjjDeSY1ZDcFwsjLJqW",
  "key47": "3uCTUmUtQt6GvmBDTYsA1GNkZBkuiU1b4sAJw58t6cVLwZsze3EVQW1kia3JrohfxEMps1ajG9JfDHM8s2dUYC1S",
  "key48": "2dp1Az6eeDcbBAAD6B7R4sK9mgFBE3sKj9hVHBEsknAeYQSvjDoMYJ42qHAi2c9T7GgKVo8AWMVCci8sakbUPSbV"
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
