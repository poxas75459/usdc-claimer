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
    "2GJ9G5TPJfipTq8fE5KPAczghAVDwQyUkRubX49CVs1Mvw9j4vbWPvzimhTcBxgdrDpNsrYz4iemRDiG9M2ZGxbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gp3u2GoTv2sdwLoUa4HzaJf3KiGvaxSFQvcD3Zw3wGKo37YW5DTzPTqbqsFgtEo8MAkAUbJToeHHSoXZEkzxEYC",
  "key1": "3af1gMDrN7kNp45jJUzJGh3eHZaQu7HrrL1jmkbBGqUDCSML1WSeNhsCyc7KuP5veNs9LJp8bG5LCUysuYFVumPy",
  "key2": "2pYvr3YwEtyfEQWDj375mDkEHGxVNwZDvCLa7Qtabfw24YcfBeF6J48ydjPjM3pGEcD7a1rQJV4ScYDH2bFEeSow",
  "key3": "RTMwZM3zA3QMRqif8TPMAtA34a5hRjcGjwfngJHyyck8MGKQ1AxgDmzgqTxYq9wunGVn2ZKG8jFKZpjuBZD9fmw",
  "key4": "2VCuPf5mVWDLR4zeKYK6K5v5YfMpe5qHE7PMDUQdBobsUXG8vHwToa4sSztB6dmsGfTJsFRpdVQapTTFarbNXVxZ",
  "key5": "42qop3BeHWTrU928t4gFTDrB8yhM6xeh8veWhCMkRJYdjTx4UkLe9H1QsNwWeYyVPZDFGCfgSBhg8Q9cX4y13UL8",
  "key6": "5ia96vzR2HYjK11HQVAhpXpWYWxPz5s7fJCqdncB2N9GTY2ro2vHhmdE9mKt2QpJfqZdNjJQxASz3nyenPE6mjRy",
  "key7": "2drefG5eL2irv3LPu2yNMm21Xzjb5uFCwcTPqTCvR8NmU8u2uWECMadVKh7GguMfkTe3RgXohBubUpPbJ2SU1UyN",
  "key8": "5GYqAh99LUSpJUdABJCeLShBZFYVNcHAavERhtogM7vhyox989StJ2TkrXBBhuTvobF8WRDavrnw2P798nD9LaJE",
  "key9": "23vtHEU6rQ38qvrVx6odB4jDN7E2v3ZWxeF7N885LpFu1HgwUDxhq4FnV2Y9czzMnRttxx1WmLjpiTqoXAZQDSwW",
  "key10": "314DkiguHhQC9YksK2LR26xhn1JK3P5NLvifgdWwNNozKjBiq5kZZ2FunYXsr45EoQZD2TX46XLYYzhe8f56hcbA",
  "key11": "6YMiEEkG8jRaspmUGKQTMiGzPXRrBUwPckw7W8wE7nLTjJUWjqTZ5qFvhWb27PF4tLnZ9k5iTiBZWrVdGBsm7rz",
  "key12": "DXMdKSnjHqJDmniuhbEGqaxN3Vk8qT852wQA7NZSgUAovdeohiCWaKBC2oYiJWQKeyNGcEdxe99xSKUX52Y86Nw",
  "key13": "3y8AEhviYrN4rczBHvsEuGg63Qn5gUioLkbJnUQwFLLX5GatShseU2UK5ULVng4LBcCVmj4koKMfEwUNCPvhTiV2",
  "key14": "2xDeRN7tdNRQfUdrxRh9XMf3iS8EELN5NQ724VcfTga7DyjTiUNpGXrBv9piX6t3FENWU5u9ejq8pd7H8WFaQv3W",
  "key15": "4b1fbxxftb4yadxEzYuMLwGhHPw8rfsFaJUHQEbhCbKna974wDYDcK4hZDUoCGxyE7vHYejn4f2B9kXjN29Nb9io",
  "key16": "tAyMsgcvSf3WpByYtR7B3nro9aEWuo8B9nMdoCSo7jZV9whpz2mbsKzx4TrgawHeA7NTUANPiHrJYFkRJ6wstbc",
  "key17": "3p5pbZhdoTbosscbS7CLBghMoVtUvtRTBekSgTZwA2wV8ywcCNDaAcuQv4CuAQMRynBR1MCxT6bFLXrAHVkidXmg",
  "key18": "2qHGraSXmKmJ4QbgsFCxFvASpakNw7prDPcmogzo6KtM4wy3Bo58xoj1knPoNfgRRrQuMSttkRivDngCrDiy43xz",
  "key19": "3myH8uTKrBnWnKhtMuopJpTn4jj4qM2cJ7rhNd4WKbYi85Fbz88Exz42ag1zGjSJjAxYFJf9PPRgu416ghgasswN",
  "key20": "23td3b8f79e8DJzmeiiQVazsBbQ49DNU2MiauuLQxscCPWtT5u465CAkiA97r93zyWqKh5ZHHki37aWcqi6VRvjs",
  "key21": "5yXm45bfUscTNEqhv4PwXB7x44o2NidXRJBamcye43q8XUeU6DrPqLnmoWnxgS7UQHYm3rHATRmXACAHfuWjJKuQ",
  "key22": "vZkqmJXp2UtZ4eQcSqfGn238z3UFv5wGbFkCkto1FXHdBgtHHK6NebX9WKAyWsxsMahUuW8tcrU3jUxRgag8v7w",
  "key23": "3sE96pDr2qCbiWfNvDRBYPQGxYuuvzxiFZnduGDrUwuyzU87fzKWaTg1RgDGGTtSvednj6Vjp81eS3staQhodXBc",
  "key24": "NNS5uutCxXg3sW1dSaq2nhPvJrVmZr7WRabUQTJAXMB3VtHNe6RtnngjbWskrpUPYLSXoNWdidTjhDv6zb3Sq3a",
  "key25": "4xx3imtipTebAHrVpbBHKWRkY8JkYAyEBrJAhZizFEarxnm1ErMPRauryBq1MyBwwFywBxRrQUq8qrhAiH9KXsRd",
  "key26": "aqZeTq9Epc5uBsMrKRCCpN2Z7GCk7MthXpViJCx1F7KZywGMdMQfukAZk8MYHSQLUxw3fttD9pgj3VMVNrfzDLj",
  "key27": "55RcwheD7HQbQVrBYRpDH7CydPtAu1mGfYUNEowWXCNwvoqiqhJVYjd7JfDXu9J7iQgDfYDEANzjPa2oBsPkQ53h",
  "key28": "5V2v5YZoQn2k1mWR6dUXtE6Cwvssj77jwQzpiznD2UBfLmKMH4bVStLMonwtPntcsVR6eJq7zjWyJ6ojHVpp69Bc",
  "key29": "5QV2BWN6mGe13wH9zhLre7eFqZ6WbH8cDkyQsTNcJ5R3LJK4N28dSpu9LYz115sx4RpTTLdiMsrFXjZACFcBA3sK",
  "key30": "2qrcBrpT3LSB1Ye1UeZdCkDy2d6Aq1DdkHZye4DKEefZMxC6wzQ1WbiaNYnwh79R3TQHCQYKdDYCohBwsz1oLxGC",
  "key31": "3o1KrBey6VF9US6Uc4skWom2Eg3BaUrxQCUJ7xc36bqex2jvhNTR3gv42sR85pcTk9LHqyRn47Rinf7Eo6hwzebo",
  "key32": "39fkAPStGf1gVU4kHcD3vj1tojfFacZ6cZV2VbXSMto1UMrxSY9sQSWuaFeD7gDHqXpNjRiskRHwxHod2CDbDWAZ",
  "key33": "5wxkuX9GWhT3vVYTqGYL2demTJCrT5HbvSsSp6LNfaert8n1y9C5vBuJaXN9ZTHNZTHz6mjct6ZERTn9ys6AodTF",
  "key34": "4Y2xR2T3kN3AdrzBJZNbgix5woeoFDHbeZsiqANdJd7ZZ9s3QBdWyHgwB93EBvA8WfgvjvS2YANmrcLsqkzbzTBh",
  "key35": "kmJtXJLKeUbcKZhsoS6sJxupv4EX5vvZ8Y8TjjnhEsvyLT8xUfFgasH1GXYdD7AFS4phcqgc5g9bc4mPukqFXAK",
  "key36": "rZo3qtb5Kd7CYMgmvZUp6ifpEG6oodnWSkZUtR1EeZhhexvdV21C9ZGmF67jogw8UcQdfQhhVJqot87kXPcXsdX",
  "key37": "3Yh2FX1NT9tMzJ5mZQWWFbft19zf4yH5eGpbX14i52UK6ZytHpfeXXmmkvLFNmqFihmEAEhUYwyuFaUKDhcEqyqJ"
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
