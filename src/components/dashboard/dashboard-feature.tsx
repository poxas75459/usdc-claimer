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
    "3xSocwAKSn3PbDbSpHMXPRURBU1qTTN6pJ4gdPEdLqSnfXhk1T4icdP3RPdSs1aqoxDskrZqEMGeMGsDC1qHsv2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AFw3TnpmGS4PuGKnSLhmhY5ALEPKmshxzhzdYRGdwat7CdvEi6eUTYDjGeR9AZC6epbEvqvuNK6SpDeHjfz9ENt",
  "key1": "3UQqbo1ZARaWujDuinKdppU8Wdx8ipf1gE9gwCPUA4NoeLvxZG17obPvdjZ1dqo8cJp2zJeBrmngse9EH4tkoBP4",
  "key2": "4hCgKBfWM2jgVNkXzqaMuWHF9fR76DfYFdNYt71Qotpfc3aMQUvkHKHZD4UCzY5QitwbkAfc9yYz3xaVLJmfWt8B",
  "key3": "2XpTxabKDmAWZUK8vMxvDWTZCEiYmDEBrmQ51be4BnNp6BEH3PfLs4VcgEKiE4bK2yPgKNsYGpuZiyJpp2RUSroG",
  "key4": "58ft31qdcUQ927RBCu3GyNAs8RS5bYYm3Svbasjtq5Lx1kkrnHFLhXcgkoi3pHfm48tXDB7F2k8gu1SMm8zvTU1L",
  "key5": "5nXFbVJgfoxwpUBJmwkt6Vk8mTqbNUrTpEU5gAsMbYiY7U8JhbWjjfAtfDumeXfHhbEZWAgwqKpbs7MJdPCBxNDa",
  "key6": "61svEofKfXx37usLFMysWUxZ3P16zFNK14aqWHVtrnyNo4iiBjCKgrJ4vTKQ8Q2jNjMm11xHbNmKnCoamMVaAMZV",
  "key7": "2QfkFdA7gegJFZYK6jCHSJgmrTjxKLVDCitheq2TKSg8zUQcVTUpvRfTPXJSbW6YkZN2ViCLFCNr1xiEX4KhzPT9",
  "key8": "5MSeJahNu6S4evtUKfp2Uh8gK3iDpugjkiuJX433t6ceQWNh1wTJQorXGnyxDTpydw63wBsqzdFFwxDS1nnxSMJC",
  "key9": "5wpQndqgprKdKz7tMbf9jd9KqrQqQZsJDuxqfLP9YUg7Eg3rDBWpd94motFj5optepfrNiHitcrn6o1bzfmQYJdq",
  "key10": "2KZL4MtP2eErX5jsSfS3oCxXFsTYAZWXFjz3MRZgFasgxevYj2YKFVabfCBuwvhgKho4ynrdFo5frTjLDN9f7yTm",
  "key11": "4UJ79Z4uRE134KC8uiuS44qT6EbnuwTRB4RXCeks9qCtUud45cdZ5LfAC3QeccBBfSpGfEUefi5e4SSpAZK7Fpvk",
  "key12": "2bKGAjgD2bpT9SNqVt43n9M6xoqsAB9pvAEtrEUW39ED3DHwmAn4vdA2WmuZqpdYZbNCv8UJfCE9jYsbBwjX2Ax2",
  "key13": "nBLeyZcbQvN6nHRdbYZZ37cACyKViZpMLnqzG8Tq4sKdaX45TH1T5QLb2E2R29c9qJ4wf5Cnz9sFXHKY2Xh3kDk",
  "key14": "37g2sk8o1xk8Y9N6kkk3RRHmVEWqDjhRq3APjvj3dsSVbQN2wvhy6ReAx5LqKDihDC8kLL6oSvgvcZYLdw4scR1T",
  "key15": "2quSvpDPgK56cjxs7EGhiFYdWM8crYBsAdrMMNqhhbTwc6KvuD7sNQVcB7iip7RV6QUzSbH9syCnztmZtDnjjrNh",
  "key16": "PFv2AULLLbJ8zonwtiKDkEFLVCBWnw94y9H7PaTTvXHqXUfXiduqLMZKEqSqivPZYhx6qKo4uv8636imxhTt9PG",
  "key17": "3d1MgYgo9yMdEeDA8zGwzZA2F6t4dQyqXsWz4QFtdgf8rksbjcoZHnUtCEZA6sSM8S3zjrPExYmhea28QcKhhEuN",
  "key18": "57LqvAH9vKoKPrekddMNcoMZcuy4Yn6RLeqLXwx3x6JzUidvAwjevtq127parjSDnZxiyTaWoXKGeha1Cq4yPkkQ",
  "key19": "3jmW3YKphcP8WHoW8XGMd4hSPWm8tM7G1uAW78jQZJjruwuUbWd3orChzyesUrvkGzkx2odURAvcJRe5oCekMDdp",
  "key20": "3sa2oGGd1FXaptTw4JeUErXLWwjGFe8GM8eP88C8XbA7qdJn95twF1FUCMFGRNJg8mrEomHjAvAXcxUnj9q2jFUF",
  "key21": "3QFfd7HJr8Z1fMxMdbxynL99NFrYFmh3pAsKhBAkedpMLFfAvSmqoL5mz2anvEmUUm3VYo5iuGiEfSnJyBhoDEUr",
  "key22": "3PbNd3yp7ZjrP1k94u3i4QFr7Q8gWJS5mGdKK7thzEJU7PDAdF1o7UoBFxGhv5jwoyjfoNQjWLkDAJiBYddRWu6i",
  "key23": "64xifzTDFbLoEGZsBycu1YZn2kKEr3f58Z6Q6URKKuahSc4DqHXTMH6UmU7rN26fQRNHm3hkKaxtDaCQn3npEKJr",
  "key24": "3gou6tmnBy7TuA2uvc9LneBLLqVELQxXJfBgmiiXzJary6E9uAvNYs1YLMwEZn23EpGNC4SThH6mPF2CvTdhYiNb"
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
