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
    "21ZNWW49Sun23FBq96rtsEKu3dSL8iS2G5XUdyxBX3f5hFWdgsB9J9aNVmjusDot9RuKyphLeJstJyZE9KLthNYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AdcntVcThkg2naZ6N82s7gA9AYvBXxAVE36a3txM4JGwzaSMUcLxKh139MevNjb1mvKU4TwyynD1iBTBCtxWac7",
  "key1": "HrN9ZviTwHtAu3etLLxXw1uTbbmVvEd2XSNKEzeihAGBtHHFxheaHyHWyiJi14Nm56NHVp2R57SPkEnUfGdKLPR",
  "key2": "4aavY31Ss3gAVPHLc2zjXYH6h5gjS3t34EB8z2G7BxY9wWLtG2o9Xk8Dd17q3xn8CmueDnEgZs9UCdrBsHbuQ6Jc",
  "key3": "5dAdgdZWCQJQuPMYXkn9kPRLySkiVxc5s6jNcXB5zeGBBj23YGX3o5razhi5RS4JSwmjXyZ2yKZ6B1pwhjAZEeR2",
  "key4": "27AfaKTjKx2bafKULYAwQETQohuuP3ycpSqAPBVkKp4rnLsGUvBmu43in2kvgmvkNcvj8uBzNBLuKwxJFcR762dd",
  "key5": "G4wYn59yKJMQfPHLA28QDg6ywbQfn9rQBDt8j9aKLHo2FiZhqJnJTAgVemVxfCNCCuuKsANR9t55gJ2YQGkd6Bk",
  "key6": "5U8huRJ2hymwjfe6samnHEQUWUNqhnP8xCUtXmUjzzYQY8srVUiCoAriUXTs1nardzgyA5XU3bcZ7Y9iqS5FHJ8M",
  "key7": "28x8xvhcnYcBE2PRSsm8VftFqY4YuN2F6BGhVyGPbNxTjPhrT92JJ56S7T8C2469QHwSBRVq6xo49wsqKUVAjB5Y",
  "key8": "29AmnpCyTzM71fxrMfdWrkULNePK7w2vxfTUoVnoKBhREXFrjmUxtwq2c63whMww1A44xP6zibRoBSRzZPNKVXTg",
  "key9": "4AUDjZiAcmni3jBj5WtJc38xP6WFgmz2RB7ZJ47CHK7rrwWurhbEjjf9tafo4bfsUrpXU18TUVy6mb3Ey7Nboa3u",
  "key10": "4sGjdYB22uowpqee8mQAk6EJSJ26UKB6xF3t5vt3kejwiYbNMNd1bieFJbsWgLdhewAqzgASskWEPgnC5MUbzLG",
  "key11": "5g1NH5gdR5ziJAaBb5NyRkQSj5fPXmFTZPJZEmbtnsmTiecsQqhbztvKdcuBJuk4EPcTJHfmmhcxCLeC3D6TSxAb",
  "key12": "3mWpUfUzTkPyySTSuooGjaqNkp4fSEp83qXH83LETay3dUzPiM15LsmmTkZ9wX2Fc32ejakM7D1na12RzDmSr98M",
  "key13": "2piBHBK3jnAENyM25Zcnren87cTk3KDAXW1seJQH5HbG26oaKRqmim5g9yNnrk7che5NrWFL7k6r3JR5f7o8nUEg",
  "key14": "29Panz78DUEM9wEk6mZgPBb28QLpJ6utGhMctrqcXnHYweFdKGFEnor6hyfLUWHrckF5ztD6yUcb9tDrE4vUTKWh",
  "key15": "2gAyVXCfSm5kRS5GrG2J3SyEU9CQfyhLGKAyF9cQ7LveVgGbxQe1tJdXcwSnV7BYpYtMGWs7D5hSZbpAh4JyxPUw",
  "key16": "5xEx5huwPGhLSbRCXaN8z7c4xt5EQ1uaJY7jGX91DUENBCmEMHBCPdje4cxFYdetA6LhEnX7zHmWhXni2qcdc7Kn",
  "key17": "4wbge3tVeAupqY2Azvrh94QkUzwexiCbvSHyTfATXpP2CStwx6ZDc11STmMnmWDgX1AMEeufjFm2MxSDPesKZTZ5",
  "key18": "2d9QPLoepszzFTWpNn4HdpYp4No7NW8okExPFVgxfYGsyvnyae6h6yFr3EpvaoYKSEtgf4nhMfXTiTwir1qf5Hgc",
  "key19": "4oRzifmUMoFPhxYgDR468cZAQibEZqamGRmYmhgDuZHETwbJ2obCgRnYj6fCZamfJTF5XTanGUBkTmLZs9EetkZT",
  "key20": "3oJKB6VtZLmbV2eu97PZmsrvLrDWizg8ywXRGmfhyEfaBfP2wAwxUjWc4wTgsbrtmZDxKjUXZgvfhr8THG2Dq9b5",
  "key21": "4yYujrJ4m6TtNHaQBKuYWmagXvEttsZVAeWkhVywcx5C95Jmys2nxY3zH6ARDxK8UenvFcw4iCHiK59jR3PhxJfA",
  "key22": "4ZdakkKsy8x9WAnNgzu6jvT4BjEfNngBdZRsUcjFr5Y3qFWnsCGqUwUde5oFdbp1Kds573bVyAJEHHuNRbYpGc4W",
  "key23": "GjU8ApFJ8AFth2kAJUoPLSsT5eZoMdtXtkq3zNdJh375YJHBapbmqh5pyRt1A1jCNMcUxtF94E6HnF1ScT2PLJX",
  "key24": "3SL5gBa7k1GVEp9xQQaFY241o1x7MmNdih1p9SZsh9wy82Xq5UMeSjBuxM77pkwSHrQ1kRJdhddo4FC8LANFJA9W",
  "key25": "66122GsJLFSiNYxig5CNNacpdrx1opkHrZBS1P1Dfn5kjpEbdo92Yiuebvk8U1JmtRapnTMRdqK17g6mnFXhKoPL"
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
