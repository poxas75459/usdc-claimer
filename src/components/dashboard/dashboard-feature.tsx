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
    "62Un8TtQeMZE5m54zaSmWz3f9JDg7mEGKwvhKu2Eo7wa4yn8jRJWfejtZc7TrbUNMWsu28y8xW33XM9AMHHTdMZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AFM3sqa8pLH9K1A6D1f4jfFpxVt8w6f43fCvoXg3mjMgY3dBZbJn1eQCq1M7JM2m3H9P4sRvYp5PmLj7tNJP57u",
  "key1": "4po5Wg8H78pAjZLLDCqgkCdArEmPRqzAMAp5K3vjwynzHjBdTFuzzXauUtSCPKudWoCuXbfbQWEJFP4XrekGiAgb",
  "key2": "neaQwrPwL1yq88AuDByN8uCLJ9DLx3A8qRGT4ijTbvjW6prWECk8sjUgRRYx2ZbYsnuXWRFbX6AitTBuorVbb7B",
  "key3": "ptJ8Nf1VkYfQa5WH8snZdZ5GB8vKNBEm6FPL8utQ4pb98TXpe6wPa5kxTCFFbGUvYkJadQbD1LajQRgp1QboFHD",
  "key4": "M5RdwhJLCBjCgzz7NKRggAcsS5k3GPhY8MWedQCyM2r97dE2ihZGdyxiVzGazzgZxKSk3MNTGGNb769yScUvVdJ",
  "key5": "5rYcfSDECHacYJuc6feFE7foctVPSWpzYAWbWruvaVX3abmiSNfnFSaCfLGYpdv7Y2YDYpVRGQsJM5NuDuA5Yu69",
  "key6": "5zg7AcALsmHqKNGXNxYQ9SBvorwE3yznCxsPaCCsUDfWs3SVoukpbqSx1aiPWKEbiwd22MfuS3513cWdufNXmp4T",
  "key7": "zMcnELyWvWhYNt4SXNGZtBXZZninjGefrdjdDALxefLED9p4R6hHJd8D7kuKvffFNdr5Tnda62YUeAezB8Js2K1",
  "key8": "2dKVb7roF5aSr7Rvn6f7S3ZUqy7dv75agWoNp5Xd4P6HqxSgbhtyoj25K1qHH12JGizbahio9TWTWejwtEZwN52m",
  "key9": "2idwfq4UP9MDrFtPp4PrDPp87og3ie5LZgEyCxLHS8EzzDPs2P5qbGZsddma57EbJFDMnGSDqqnVqR9GFP8tN4Hr",
  "key10": "3v3AiSZ82JBTZJAM5GMJ7sxxFfaiMSRsPsNDPaaeq1WM3Fr4uFrXaPKPuPgAfh7ggP4odCR4DPGFj3bmjqjxJuaA",
  "key11": "5ySBmFqMmuRnPAApAfGeyxeVWEGkfPaoRYTftsudwTzg3u9DKAwnpeRCwJiiA5Szxv4Lm3zfVp2qDZzM1cgnaY4z",
  "key12": "3YZ3UyLzR7iu2PQJc59S5Qt6bEKeANrDN6TWHtmtEwnayx7EVK8KbYMkjnGu2f1mBzSQ2ih6QzABaK9HesRkKqj5",
  "key13": "5ZmT8iYW1RCjx2yBehupgjQFv9hau2xJBULvMHBYt99mLXX2Uz9AUiTwDLsGigNWxkfCfpGKMUuyYE7FmKt75NSy",
  "key14": "4oeGYADpYvPngqoL5TbQeQo5TcXe24q7QJBRMfHEwpCc2SGML6QNh3YTJeJ1FM2JbBbY72ww9PpiVAdzyNetkBXg",
  "key15": "3WkQbQyR5fud7yeegnK6Fry5cEyRVs3EKtfFqfUJF55VSR1bFmUCtmgKv564sZikdeT5nsgmrhV9DvYZD3Quqs9W",
  "key16": "2pvuwRLe5a91a5w843tinAdb1cCvvK57NvHE7h93sRsM8cpkPdE729tMdmuqUvscXYjKF1VvhZXddTQF7d3rGNQL",
  "key17": "25wLSKmCjii4ADA1EfgckVigFsyj645LchU3h7R4TQNkEDw3RRdyGWEXgv3iVjjXZ1WiNcxoJb44FjRWeX2K6xsS",
  "key18": "4y7Hd1yRU7iGQNdxoBfnykZwJMhN6m462iobeUkuvNU9ub73FfYZQ3KvCWuysVAAoNkHsPQQ5HXgxP4sUyt82AWx",
  "key19": "4WTtN6U4fXqWYy4tNQYawQa6CSV2Ss5BuZZa3UyVvaLQwRn2LqXZbPRJs1JtvXrn2rZTqiaGq17UxMq6sUb55VjL",
  "key20": "5jBBVXvScXBQgQFcJAndva7KvEWsF91ZMqAocmRFsFfeguk9vrR9YoPcawaJHhXDFusguWs5wpePx4mSXb6sN7A8",
  "key21": "4o15j2Xs1zb14Atg8DsN6JPCUohFboC4GJw62FgPkAHZvMxsFWo2Dfyi8WbVutKtBNcvKZ3wkEuXwgkYEU5jXofh",
  "key22": "4MC7bDNsLtPoJzFpJuKDS6xBpyGT2j51auVQwojjMN1JhW3MuyudZnJxPHbh61B5isaSBQP787GSoVXPpmzNxRXg",
  "key23": "5G1Yy7giquhgi1opckhB9h1Luj4a61zU9CX7YG6prL6QkRtnhXzkX6XuQ9DpTwn53ULKa34v3d1AU6gP2VEdWVd6",
  "key24": "WLxG7Ew6JQcGLfGV6Yp6BFF3SzLC9apafKcA2UwP78PnLzupP83my9gV9ATwdEpeWwm1HX34NhpUMY1pMNhdgAo",
  "key25": "2EGeuH2wA1KY8KFYY5ZkzJAR2WNfg23k2w7drV8yyQyRf5KvaQC5hYunLAqmeDo5VrNzmcKAHbMCqcgY4babeCpa",
  "key26": "36GQk6eEuut6NbGr5dMYRnymLmT17S6QxJrXivXMEeBix7TuEceZnGpj8Ny6uGfbSU1eVSXfJfWXhBQutbkauYhk",
  "key27": "4mezxEqJWiGdAacAHjeWm5U2LCW5awQ562U5TR7LENwKgiWzNeui25X7y9Ci8TYi9qgtRN1xvznGFYAtXCvAmE8N",
  "key28": "37VpfJvDpzch6zMKm24U6qPc4tSpDm3iRFgjmREWhfdyxQ45mNoQVFehdUrna9BUQMo31JihBJtT9gdBrYJQP5kk",
  "key29": "3E8xNXRziYk5RXyFXsqA1iZTnAZ6XrtvcoP8RHPLdphMRFaPP7sPwWQh13kxo9y9R7xo7gaK9gwvpTx51qd2wjgm"
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
