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
    "41kCbZr2Y7AzspiwrcepJqtP5vwZ5Lr5iETh8vG877QBkmARPZ3urUiiHm8iNFCQepLr2tjaMtTz4CBjD883ub69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22oejE39Wh6ZsM6gfRtXq9JRAwLL2wAmL9Pmzgd4R1gYBmdR7byCQP4asFzj4pSjWSWju1EPcaNocDWKDkUaEGT4",
  "key1": "2ZowYh2fnuFGBi7GpZHtfwQkEjMQd1i9VVFQarNmzXnTrmE5uNuGtDz4H73Hwt9m5xVQPAFLphdcLcnWZLWEdVqt",
  "key2": "K9UrRsoX8sbz1AQTuQ9NkATYJ75d8tzPyEoyxEEFeq1Wza4hrwGS7Gi2LfmYwE3madxDdS8vELm4R91Myx8qBVu",
  "key3": "4YH1ptCtbRtYjARRzEEXrKZhokeMp2RRQ8UeYxmGVf7UsnK6zihG53nbLKfJBfgZiRrNvqXYfN4arFyQ34jiS5Ng",
  "key4": "383bkpLjamC9ju3ZwXotCJ1KsxrzyhF2GtnxHs2eP2sqWfqpM1ThvVQMpMYXwRd282i6F4DHrFTxHBo1tNoyf9bb",
  "key5": "2VwCw1PHYhMrumDr7eEQsBgJicfk317G4t2W4JoVQxHGguLug54JpfMYrZKvJbKy48fAkN5NdvSxq2qHv238Wp7R",
  "key6": "JrzGqbiyUUQH3Abq3b2AH6Ub6dTH3hE8Ud12dS26NKbuYisPZEsCdvh6Fhha6vcAupcLeLZNCoykaRkYQPkGEtS",
  "key7": "4T3JxiCBLpggfWG9aq6kMBxN5SNiidoWSXFntzeaAQtkkjrQ1Mpx9cWScRWbC3VzNqZr4w6NAVScUqGsgNLUGJK2",
  "key8": "59bogxtfBud3adUuuen3v9bkg16KHZiLitvQmFC2vduQLRHVtchkTZwm9uF9UbygTcc6rAX3X3ZvQ5CU4JrFJJHZ",
  "key9": "65Gyq7yWyHVXwScQuxJAjNJDTbeRksYYaNKyJZiZXhE2Gh16RvPBgWRhG5h3U3dL6Lk2EKKMJ6TaN1mN3DEe8SWz",
  "key10": "3Z8amHHHsKvHSontUhZvGq8rzfk5oZfEEfhfad2tFmwirtPMJvupsHBHpvWT9EeDfyPeuZYaA3A191Le4fY5x8Ew",
  "key11": "3oPDMK3WrWNCSZKdCGHb7SqDz5zddinc6VdCoafhidbDSuacXTFXApAQUVfAyzGHQT4cqNNEnfs99dtm8PPqaMoT",
  "key12": "WpMqXzMSpvmkfby8JdrgsK8TbEq6QY9Uo8zQQJqoderTv7pAjn4QfMfyBvoPVMHhZzNyuXtWTdneezmJxQ86SzQ",
  "key13": "34XcnpQdjg2yk2tKxcpDkCHqtHgUkeu53gDB6JJANL6iTDrHC3zwBFtjpYgJYCFMFu7nx5SAAwjCqQYbpk3JLhM2",
  "key14": "586NNHzhbjZwzkbghFSdifc78qapjn9uzXZLbJ9gThFqussmfhYXvHnuGebm3XtNrS8qGH3CrLDeaWpsL9QuXVmh",
  "key15": "2CfMMUMciXyQR8AXhsjxJcWMAUzRq4dEKdeW9Z3MA9f3dXfAdx5jYeSTFLKZX8qByt5jvKWuz9Ug4a8Cymt1BWpm",
  "key16": "4pxjVprqTDi3fNhUwtoTQDBcg6jBLeohyLHhXpddDwASRfKjLYPGE9tf5NzszFhmbz7dUrZPTR23ZhVd3fRkxnJZ",
  "key17": "2BXUygYa7AztWURsF33Q2kJg6boCVqTx5EYBm6iYVRY3q7MiHtpHyYViX9FQAUF6QgcCJ5CHAkLoT6xfhFZytHzq",
  "key18": "3KmKiVxUKgLWxhTptnhBpx6wnD2C89aeMBPrXGSdGXXZKXks9qud87TX6pDJiyo2PgQwyDccKViz8ze4dNuwGPq6",
  "key19": "4RntNnSjfw5UKZg5nordLDGCHx1R9NxQoEhnN6XaCsVnwzA4PUrsdzDRJT7AtV3Gjq7MidJVVNKnUFbvHJZFCHd",
  "key20": "3o3NSXhEJZcSSeqwTHZCUB6rP4REAg5xChjavzVXsF31F7b7SAFcEvjCJGe6z3oErhx5mta5yveN7ybpHqVyKps",
  "key21": "385riijYRGyxYou7SCzijRaYQMxtXTeXiWtB5TaLKdBDq2387CTHtFEKu7i9BpUPeupGr7KfGSpN8YQywo963DhJ",
  "key22": "2u9oosyN5qmw2vri8ei6X5AWVFN76tAojTHvSHwCdThgVL9wyp2ipTn61cUZQUdcNnnyj915CgPnJBRXknx8eaZZ",
  "key23": "YKcUzcjCuQ9Az26cMJJvjH3v5nCGntiCHFJf3ASZst5w8HRYQej9RL1vr7TpZcF6KJvtVcEkejRYkfD2XsudYEi",
  "key24": "5MwHw3XzGi8rqFv8B6RaazQzG4LLkeWHQF8V6vgndsaSLGNVjSgap2UkLjrNnxMfm5CfZe8vFytVfeUa3qmNNoGk",
  "key25": "3zYQVGgp7BdZzSf1XxaPX1iX2oipKyuNReaCGpj6xbyRMVZi9SNrJoM51P9ftMbW5LnkKPqsTNVanDYEjfryoYd6",
  "key26": "3YXu3CqCc7a9ZFViSB41gPiNJtTuRGaqjtqppNEq15WLDiWzQqe6gLwvQbeF4X7Fc2798UY1eSfKKcMoyWyLEXjf",
  "key27": "2a1yLWoXx2DfTVPRj7jdmZ2TcEojwGdvCMeJPctVuu3PwcgxpM8CWnWkHXaGZ3uuJQM17gbfogTBugoWMYH5v1N8",
  "key28": "4dt5mKUSSdczenMzg6SwrkVnDH9CAKbwEWFcs7vuXfH8EezS3Rnh7CsbzV8VG5vwicg7DtTbbbmKSDohro74FEF3",
  "key29": "31TSaRKjXUUp3V4BQe9zurtawsEAVmUZDWENkubPBgKyssvVAMgD6WiQbJU9UiSA767urNLyjFzV7dysMPUPUZyQ",
  "key30": "gYS1Q2dSvubZeco2bbk1WBepnriT1Sw4hckgDzwqAF5svBCNSgMhxzA5RMK6BK28TtCUZyAQ7oygQXby9e76J1c",
  "key31": "4Dn2VWVnE4sRtLcUzEjMVPuHFGozLitWMHiHxLwP8nUYW7r4jxfx4q2EWEWpdZxfF24JXAx9NrnJEeaAoHixJThP",
  "key32": "2kMkocxyT3ZTVzA6EpJPBBA8xbdj2ZQttvbERhCpuvKw6URXcyaWPR5w1AfJY9eJvrUMXcaexx7BQxutzc57nxCa",
  "key33": "5R5w8pQxUsPEZfkqCjaLaXEHP5xM9rMRY4z7cpVduznuLvhheAZUbpx1CwvXMgWPqTDVPdSH81rWcuGCWbKgBVTU",
  "key34": "2XQtbnwGMHS34gauzW22rKQy6tBnd2TMnohkEFufLR1or8Sxumt7zPtUYPHDzsorVZ28eBRDyGYHK477kEds3Hxf",
  "key35": "2Qi2DHG4QcmXdkcahx5iDTx7JmPefCYbYkqdDvtRXozBgHyQtb7wSWzxBvhxW6Z6kY9pSLp8i57TEPSfksGTBEF",
  "key36": "3tq3DivncPsHfWrYCYqhe4DkeVdpwM8sDjpFTcT2RNv726Njx2bSba6ZW3zTwuYTSpgT9S9ra5Lm3kGsWno8cfcG",
  "key37": "5q2J7iDECVpWyY1vNUXqKEt4Xyaexet3AQ7FV4F5TDz9Sc9Mj556K8u1V7WhWcAetKP7G6d9E8uBbWqJwd1qJvWC",
  "key38": "3uhUR6MPeaXUd3UAwXtxSzPXV3komGw8fWbex99TiXdEisCStGFJqWXTscg4e5fwb6XzVWsHPgFy34vbuvVvotJN",
  "key39": "2d3BfimqebevYY5TW3dAY4h9zzgTk7S3HUgHgecozxi8eTpp9UXqNpTtMQGJxQZ9gedWAJ3LXb5dnpYuL8bKfz43",
  "key40": "2nF86n7WrYMy6wWWTiCpHTs1V8knnd6ct3dWdd3kfVAok2t9zdnG2ntZa1UR1WA3th6Vgvfu1iBekSyuQfAb4AVn"
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
