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
    "SZm7cv3PY3haVRN5d8Pzz9KnV6Ljz8fdWzif9Nk2MK5mqq7eddf29BexbdFgjZWYJY3zzHWXxDTwXCo7fhaVQf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4opAot1ZBEo6HSN1wroNSmvdwmzj6XWVbJxjVtmcuz7HKvSxHHjVN3f7ydUHWhVwcJW64JJUETJR4rXw74KjLW6a",
  "key1": "4GAwga6tofLndBTB2oAopS435cnNFbY18pd7o5cqXBsubaDgdWLew2EJViETVtLDmWFoQW2uPx5aJ15Lu4upmrt2",
  "key2": "3xsjdXkPHRRNXXRMxaQUwJp6LuGgdhumiEAUfQcM3n6btL4Se5cHBHhqPw2spXS3XYzbdGwroYwubGQJHmtKL5D3",
  "key3": "4fChrusSBaWCk8mXNBpQNGyHE7ZjpBUkqNyB8Ukjx6fHrtFyjQ53j5ouPhkLkqmbMS7ewTvacBsqizzDbme3oths",
  "key4": "4pSGeqChYEbLsPfaE5VqF2PePVr253dfn53PfAzM2xvreQ58c3km3ReuAjj7iYVBNu7infNYmjJHppvoBtWEitc5",
  "key5": "3smvuTwnH3GHZ7oxBZHzqh3y1Ny2B53fsu7Q6y9ozwk1UDphE8kBdYKxrL43YaE7Ab8V3tf29cj73ULzfaAxa2Gc",
  "key6": "2ppbePh87gbmLipAZ6LDYicjswsA3WQictW4uUbnz9j2wuWWQfEQzYiTo947JwMWoPxvyiyfhgpuH5ydCs9MbXXo",
  "key7": "378iaQmFezqfwMXKgVDHzUn6mbbUTdZSztgdFP4kBtbpnaEfVHSsNkTcjLupmJZqUkKctDr3J2yD7APJWBaNrhMK",
  "key8": "3TxyKjZGe8ZAPzxAGKJU2FBHyxtFijMAcjtA44hgfeuD1f7WsFA9EvWDGivUDvrdRoUHH4xHky29EKsLxnAxepWz",
  "key9": "4xMFR8nMmfwbLaJfQKd2kZPY4miCgHbczYM9NBAeKYkhL3Niiapa4b6WDmFyTAB4zx3jwbs94duLbHy5xVpSd2ML",
  "key10": "2S3x3gyY9kN9yoyiV4MFgm7UzNWE3kCDtBQQGHYvV4K9U9t8zRz3c62bEppSqbnJQaCnAfb925EUoiW45Xos7RkF",
  "key11": "3TDmKDrL4NQzZPsXFuDWQBZAB7DesY3UaYNrFCH1beH4fG5EFTAFQ7mD7K8aHn2s8qPqYbCyobnLtrZw9LenNzAS",
  "key12": "4e4GJ8Dn5b9fCq6X3GttrDUpD1NHmtnpvNUD1U3qcRFXZTYKi5mRnQbgTv6phL2P6UtfXKYKPgkzUsygfdFqJxUS",
  "key13": "3WRHRBZPsvnY73mDux7H34fCHdxvYaYez522pr1gBJzAJU259Pr8QgtTH48PHxM2TPWE5zqRgvMbfc6jwZPiYsCp",
  "key14": "tavBCLLLeVYyRhi9iwfqabqKmCNek5rw6DY31G2fqfDMMTKhrrRgAtFP6msceR8x4sx7HmrGLDKyBh48iETn659",
  "key15": "tQemhyE7wpmkbMdzsfYDDx5sbmjfRThEBdj5FdVZ6yoBNz9bqdgz1Wr7URTXbVc5nkZrieuTZEmRRFK2LbFhiaz",
  "key16": "4teL3Rawzg6RmqDndedtJpdZLAT9Z3TTrVMe7Q4bhJSmzPGnQ2rmMcsHiWZ1hq4u3eAbzTXJUF4nCkCWJ1rbEyjV",
  "key17": "3QxiAhUMCK88MwU2FkDRQtNH4Xy7rRRfz6THZ1bEzgpYRGGTP7EVWzk8L6CLQHhobVW4sca94tMf8c1suJ3aWYQd",
  "key18": "5abm6qV1dead3zg9ATH3qLN4UJniarLQ982VYpLrZgM2LmtiMWbhgiJ4b5dUkqsjZnfmuS9p5Yfji28AptsYwc3u",
  "key19": "66Fdk3iGaWZkux2C9UNb37FsoAQY7HVRAMw61Yag9B8Fe82idymeBnHh9J4vRzh1cyt2Fy8uGoe3jpprjfPXXEca",
  "key20": "5ZNJbE99VQkZfmc8fZHKTAeHFnA5gXhohL6aPfoRVxG8owXDHWkGJLKmcGiFCjEBBQ6rRxZ7StCzp2o3GxXnPPkN",
  "key21": "4GYVTUpd5vxZAcZ5FGJnBRDtXvAmkhBc5dJAm9sRSgHDa8wVuM3vz6dF227Vy83otouvC7Ej8K6mQiTXbbmVCsiH",
  "key22": "4p6na7Wssy4DfC8UBWSBaFAgZ5DLBWkXHEgGBPEp5fpDCnfnNP6JBGc13xD1oHr43mJMUUJg1HfqGZL4sU1tRwwc",
  "key23": "3EshXjcTzUWm3d8Ebyo9t5mQRpWkgMydECMCEej9WffsnbR7yrXbgoo172bwceYYoVb4bGofez6X3yPGGdChHwYn",
  "key24": "Bm9DQn9uvRvpjtViTJkxgzNWQ9Z8w9W25YzSfQ32SYyuWuFQkv5RkBi6kJgVpUz4qigLeaTvZQoruevGUadjhTE",
  "key25": "2hvUCDjyRpmsK2fwaavUF9FCPYx94Fus7nDCxYp96Ydps4vGwZP7xUVTVU6m1VNMXrHmKCMiz968FP1CBkVVXToB",
  "key26": "39auujmf7A8GMAUp9nbCtGXjradYDPPMLMkxL623wUJDouqUNSM7E1TKKoeoJcC52FkmxB67pCsKvbwEvXwK2V9f",
  "key27": "4sFmqBkA5Z9NxCQYSGuD5z3ZRnM1yrS2EFn7MXYKgJnFpBGd3JsAKUoRXMzmdeF53aBYxM232PgV6Qxfw1Z1fVBE",
  "key28": "2fC8GRDBGfsnnDFqZiwdohjP5ZBXNLBYcCcemnSWaiX67Sogz2ksJMKBXYWA2QgKHywcunZjBJME9EVV9Yp1cMie",
  "key29": "3Kc5kffXYc2ZkkSaXDqYWvFjjnPaJhqzDGXVgdBFbvtktSMVWhqzzZdntWD7qJz4xuQr2737AHzydG3ik6mHGvHq",
  "key30": "5LV7uVytPcuuxVTkpZsBkgDU41o5xJhgicXAhFY5CJ7r6ZjbcoQhEeMDuKouQamorypcVhEYzVAg2YiTB4gf9B76",
  "key31": "64AHWJSAp3V4yGVTUBuuTstG5TXiqxSQxAwcANmkbAXJqWKgdWAR6uTAgLmTUxk5shwAW4C57Ru2xXy4f8JkfGVH",
  "key32": "rEMsVyYoUHuPiKVJhcCTWQNYSsZwDPdsp1f6qayyHmN8z7hy5Rj3FNkYSFrsrGMvWs7MKoQ6b22nr135jhKcEFx",
  "key33": "4oPEzqHFfbebSkfyto8DUrjxhVMVTsh8E9dZaPXF4v74vqA9PE67EKajWNy6VvLbktuoyqZh5zpEmSh2Hoh95a18",
  "key34": "4DuR8gt3oEDm6eqshVM8k8PzP7tb4PJPt7Gk95s1q6qS6sKHqwzjqWzHk7e9545fAq2bfK48kbaPZFWyjHyogBv8",
  "key35": "2K8ZGKJzZS63D5yxqfNcLY8CFQm4446LQZChMamsPSsAFr3Uk7p6SVmAaYqiHmoAG95uPaQdMLFApcEcj51NXdJj",
  "key36": "2GW83ygcvMrHxhbN9TfdCotDajqYSWtPJTCKSyn7hR7tuKiL5W7QKoFEa5HSi7NbY6LiJHgzeHtXSZfZGSCS6fv3",
  "key37": "4TEyecPYEfuczjKsp8Q2HijvQ4uk9ssH621DgDSkqBnzzRPKkciSy1nAfL5Kzu1sT3wXWpEnuUBuxEyGs5KKWnEj",
  "key38": "2M4J6uJ6MfwbgdtFYFeiy9C6BMnLd95XYRQf69NdmLCBXHg5gUFautmkQz8QgksLA9vv1sajUXgaFoATnsHCDuMt",
  "key39": "5ZdVpM5pU8bHtSSgv56hnBKuReBKgnujgPntekdMJu8MX7kfDWTSRJzxfzD7JEESGfjJM84jzquEEst4dvJVsnVc",
  "key40": "aJEyA1ohhEULSnkv9A3b1Sq4d48cWam7Nq4gQEGqFuGBYhX5yyoP93oHJ33BajkpAGqGhVohLTYQdkvvt5Ns2Ej",
  "key41": "SvRYPVPwFLSgk1DGuhKzC2KtPdC9yjvjShkqeCzxoeA1Lhs2YJGCgzquBm7LTZujTQTsAzYnp3Yjuck6p2m6Ze2",
  "key42": "ySx3kFtueKFDDJtF7J7Edk1AW9NzbFiiYege1ErEaty6z6ZAjN2cSnvrY5bmBjAgvZEQFBToxxzVbD9Xwi7GXNz"
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
