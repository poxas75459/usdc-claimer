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
    "5sJWyqfpqcraJr3ihYkcfYPQukQ2C4Tc6g9xcU3RFDqe5tqz6yVeBv767WJNes4fG2wt76JMepw5fjPgsZda2ZEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KshR2wQJMX7m3tKi4HDXy3pXZrgFH9weTHuzuyzg184QUZNAPQb7i9qiJu8nNXdRu79SeqHAUP2dcV4wpynk5H",
  "key1": "4TzJtB25gsJpb5SKmREyMEcnuiTwNv8qm36hdrTDouDpSisF15zKm9yZtQE8kuRw1Tp6i1FLxWxrpQJJFVCgMxyC",
  "key2": "5jcrVpmzUW3t5xP7LFbsZ9itjhkySqXEXRKcZiNpgM4LkLfDH1Ju2FWwQzuNB6fGLZmmzPp3Yh1YZjVjZ2ogoDZj",
  "key3": "EmrgxR7vcAFMiegdh2StxhwWCsPREn48hMEAtZdNV2s7LPJjoyRcXa5byRNAP8wQZm7XxfiTWXTNnLr6JuMzHEg",
  "key4": "4WtP6bQrTDzKaHxejJgwGt9JiwJXqoK4vZwcKkvwewYUq37VimUXfDdZEGSE5nBKhHJVYFWpoqyGy4dSNo7J7Cns",
  "key5": "5pw3dMS5f9WkwkJy7opK33eNhv8NToKUxaS2HfYc7KKwYYPecQcb1qjnUYMPD46uHYQqv8diHG5bCVFAQdYzdFVa",
  "key6": "5oapE1Esz4MEVfQXghCoPSEvycWzxsGUn4VE6qVW2fvmR2kVr4XZk1A41tmf6ABVsi6vPwQ1WQdJyHGqzPockdYr",
  "key7": "5aVxsUz5ghwXvgX9Y59DBkzjtsha6yRX5HNghZv9KeQ6bDoHk5KrFjRvB2v3MKMwbg12k1HJThixog8Xc9zFB4wh",
  "key8": "5CbgQ6i64SkxYaLhqdts4Q93hktGvx3GL4fegmruSjWKYYQ3W11BJ4ggzQLKmZnubeCy4E7A7JjN46WPS9ewEUBk",
  "key9": "3ZF7mhw6bS2wVyHZk2SyHSk8EhwTW9djZPmUryqaz3JTQiPchesedqYfLUV2QDrdAH1jBPC8Uzp8ydTZbyRHeNQn",
  "key10": "4eoQVwJi7U8e3APvFhjfc9pKSibFCtUwp8D18cVbBWGujN1MjddSoBfb6MwEcu1B4cn3GSB6wzYc55e9vjyC75nD",
  "key11": "4PHELc353p6t66YkUYhdyd86cw1ZM3KPPCsK7NKAiKw9yqUwfbV97ufM96P6FdZd7qWQDbT7HC8HPkhCue1xAdBd",
  "key12": "2oCSkMMHGkhntYnxW21aXq4ugyuTb8EnPpU2Y7YjQyBeEgWfFVY6MqTNj1wY8UtcQuBVKbcLexwFFaSAAX9StwZw",
  "key13": "6K2VXPgTE87yKMxrZwiPYRLKZiWK5QXZfC25oC9q94j98gFaXHAm7R4hq77Q14U3cPaFiVJjH9bauGpebsR18PE",
  "key14": "5mAnLiyQXakRdwFzpxdnb7o5VbomT9hrSZY9HzjXhbWUwr2gcrwXWuuSSJXkAHyMxD7F8Zwh6QxJGxqZgTYsN2uc",
  "key15": "3xqUNTBNRgS1rcHZ8HXXnArz1RRKYazNX2yPjuWqTVBNUtCce7NXZCrPfFaCmX4Bv1gZ8nTdQv9yxLWqEVn9FxG3",
  "key16": "3PPY6GvbSy4NkjQDDrWAyt6VTxS6JNQzpudwyZprQxmwBGyibVQgSiR1BKvymx7uxW8SeBWtWkJygSqLegEBNdZM",
  "key17": "2gCCv6nkvma2ynKVtgUMU9kMoSArvvJovLHFKCXVkpkMnTbiCNdtWAzSTNfEuTzxmrcvz4bFcjHeYaMynNL9KpQx",
  "key18": "2oEUyQMsGqUkzWz4JDCp6cnSEMJ57D4DKgW4NsBi3n29PKY6K7qFPhxDci7JCh8KvF3EYir4KyasZRDGsE4itszb",
  "key19": "4E1FjMwTMddN2iSqcarDndngpYC57hwQRM3R8HabP8W1cwfPzA3vUTQXnzTQk2dKgdx5EbD3RXYz1yGhUGnRsHP5",
  "key20": "4p8qq6JoLn2BR5rq2b7k5CdFgfS6q1i4zBpGwTHbtCFguhKzYkumgmjL46BZ45Np57XY6yx3edJNiH9eNrbQjNwj",
  "key21": "2wDiqx7aoXTcjhRibKRh4yMdR69VrXQKugiGNf5fSsaxLnS6tDEF11iejmZUhJG12soSqF5y9kBHPoBnr2sHVtGt",
  "key22": "5M67rzMMzi5VGLmhCp98aGKdbbaGAiUdgTJcdHWSVFgCyeYMhWxNChfP4b22MpgqBRh17FTbHLVyx4xY4Pa7BDgd",
  "key23": "3rveUGY1qohDyR2UZU3VYJi59a6NjZYRhn9Z3hVWxCLQ84DqLPfh3Fz5T6HsjA9fVRTd2Ld4ie6cNzwdHfhDeYet",
  "key24": "39qXBc1U8mxE1FWwmZCNESVx8UsnjC3Ue8aA8dXfMszTHGkUS1SDg6JXCqv5icnXxmE26xRo2gW8QRewyVBhNUiS",
  "key25": "4FqtViVBNjBDxCeHsSA9VdJM7sV9EtBfu39eBcRJTHJiDFzzYr7TTWVXT5T879ucVkCZ38kiUo4ANWeKvp8vybDy"
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
