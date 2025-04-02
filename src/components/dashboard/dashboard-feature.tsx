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
    "2KMqyt4TdSRbH8rbFQmU6P3EKZZZ15jUJvCFxHK99aeCQg9vvypfutC6fUDGDTrqEKLZEyYf7dCEbegWHhwNEX7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jonJqiG2nirmVoaqmEGsAfaV41g7gF19VXfWmyy9UTwYobRAZ693f5NjqwkFa3LFGpNQZS3jz8ohnCDey3c2RYh",
  "key1": "2VpHTFn5hfKKiVX1XDwjqUvggxQRnA8mmauaZuN4dSbhPi2GvjBoP2sbsLqCHkxZD7GraPJDR9Bs5LQthXce2fAF",
  "key2": "3tvAikkXguyz692agUa3wbcCxSHKzthqDYwNm2t1LawM8M2ByZDEwWDcyFGxfiK3FJfmSCEjbfpe7zcJhhLxgEvo",
  "key3": "4oJVD6xFcTgqEdndofhKCcBM5u3aX9Fkbgyxsq7gLKfwrXxR8NHApUcXUERrfzahpUPmVndpRMrTevKsWtGxL6WM",
  "key4": "3Pt8prmGedF8zmauK3agppuudLcUhfVer46nXST5ihmWtPvC2Lr7a8pXKcnkFTcKwfMbUGi1nvT8zCavPuGDVugX",
  "key5": "64jGVyHhbFaxME2e1psjFgWFN9nLLwiXV6sgRBdJZbnqNUhYVgZbbwi6ZbHfcKwwFFkt1CtRpUJXCR8q3wAqLoYY",
  "key6": "2X4DYQ5jDxuzvZKbgJiBbwgZSqApWxGxCEg3dCSJa8zHM7LBrLY15LPKUTXNXtxBbM4u5QUPJM7Es5Ld4YgqoeSH",
  "key7": "3AzZvsEJGrNhiKjmheMTVPtYWEMnVJvseufBwbTgfrVVP8HAE5ht5BMHJqd5vuYUUpBLVeb8ddnNvyvKPVesfLyA",
  "key8": "2ohisdSW7nLAGmLQXnKpSCmiTCFE7vz9GBQ3Ry2YpDMLFjqWQPHpaU4ArQTSzkBZUSGwf6FTFG4RKFEqjnDruujS",
  "key9": "31AzSJbTzKmaisqVR3V7VjBBj7hxLm2HnLhRZprFo5pvSLLRm2L5paecMjWaJHCnPm6hUrEXpo7gHj27dAgiwF8d",
  "key10": "3QKZRf3e8B7BteAnEaRtYWKpompYchV56rq5BBBEEiU7uZaoxc9UuGkHbU6xkythzhGttTMKAM8NEEyb5fFNmzJY",
  "key11": "5xEB4sgciByhf1GGWQXpBX2EqPqEJsecLRTZ2hGmtKpAAB6UZd1fSeruRaMUvKtEvL3pLqUsWJQJFFoNhnCASWnT",
  "key12": "Gxw6cWiRRtg3LrXfDSCjVNDdei8nQ4AaUpWmHCpZwuK2Zhrn72rpdH4qJxYvPUBDChpaEWngo9QE877krxrDwB3",
  "key13": "3dWyWHe2XsUzsmvuic4cKrsZfXU39P46fTuRCPTSpeqn5NY1TwdmiXrNk3nEyJoN5iHTeJ6uVSkS3EXHAqW8YVUg",
  "key14": "64BUHhcGTs1zWUfRRLvwRymrbzsjqnUog3Qs3w1hscLNfQ9ZgKDYBmenjiRGS3szCu91U7MLk6goJzP8fewG5Kf4",
  "key15": "2i36ejTp9Bire9MsbY7wxZx9gvALjjFEkQ1zeyGxRAGtf46RYNa6k3rvqCYeTij393pYCj58uuTPztdpwqWh7n4N",
  "key16": "2Q2QCcHV2HZmPik8bddcnZ8WMGK7tuQFhhNGsSRuR9f6zupBiUC9qW5CnmpegA5tZnDTtx6k8FGSkNirzune2Zjm",
  "key17": "582zuQjt7LQAoeANZ7zvSGYofjMfAp8DY13QswJbYE6SLxitA8sHERjXQ1aLZjkWyyTNmC7NXaMSju2iwHdCfpRB",
  "key18": "616SPGDX22TDEvYkdDx8HBJfJegSeu4Ei77WQjAmBPTtBd7exqokYR82ofQAYQX2qKmLodGpB8xnxQY9JKp8eLtX",
  "key19": "3CerEGzcjTdn2dUZzgjeGZYoNmu2QJpQKG8Be2XmSi7Cr58Eb8B5yJPcbQMzcjdxWijFGDkyL7zMLXxACLfJMxke",
  "key20": "5FpnU2rbwK7UH4N4wQshFq7NrmiX7NuKJFk3M8yHq16McDnBiStNb72krizU4EcykLceDzDD9WWnnRtVip7A7TN6",
  "key21": "2cjgbPmYjCmWCL79z4mStv5u4AfwvMR9FEKVNrx6UTXXPU4NyPrHgwQiNd47fgggUhBzvxXAyLaXptQzYpEQmqL8",
  "key22": "3LwjSYrtpSEiKQfpXceP4AwbiEB8kg5e6fQAyBhKehTcnpbTWYYGBayPcreBWioBP4o95pVnHZXsuQYA9QVXLCyg",
  "key23": "Qr7xS1YhWPcG4XENoavLt9TWZHaiRwkoNXcGK6AxGFKUFFEfmuiQhrP9BjtaxK6GYU4XGxJbAUFuPkvJW8mwYms",
  "key24": "5nkG81oTFK5XSmGciVdYkRWeMJKu65Z9NeN3XTnR717WVkG3ykZbDpf9swZr531Vmb17b4eykmuesBH21pjYPxiC",
  "key25": "3sFfqsxmx8tpwWgbXxHBzVEkx3bh1NPTmiBmrVPdwqPxovCSM9GWoVdz2SP9Noz2ourkBCC4woF5h3j1My3kJ4M4",
  "key26": "4BGP9e74FSwwDQFoXJ43LwWMdR3y96vvKJUJDqquUTKbHmsL4hTpgrvsetdrQq2ma7QsgMXqdAuigMKoWSEj7pFn",
  "key27": "2bBsPKUFBX2ok9krZxoSJ6qtLitk2MtvkxwTdai9oTL5yzyWXmsMs2BY1Km3ctqWf1nmQ4SNDxXNhEEowWMqeov",
  "key28": "3yJG7xpCWVLqGRv6bDr8PNBdMBWL5eQrSk3Hf8yU4TC2XXVZq4YxS6Pf3RVKtj5NyBLR35kCxZjxRp4UUye813Ri",
  "key29": "3cCBW8zfK6ysCHQ12TBwa6iN6mxpcQuoysZAzNxN3emY8t4EjQtn7wVZSvDnbHzGCYDiTGCWfYQUVLBv1fiBZR73",
  "key30": "2hM7RdDSg8VjBR1jZQ41JJUqczrTGmxSK29CWkuQ7VNhnJTKQoFgimzxQLv6BTQbFkdoP4RZc4AFnLsomMTqcdGz",
  "key31": "4AYsFuLd6s4cDgdfEBVjx63wtP6Snv8y2tftXqFZfsmfbeqi7TF2qwDaL5gJ8ktMpSVyDiQedaq3777iAgtgaHmd"
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
