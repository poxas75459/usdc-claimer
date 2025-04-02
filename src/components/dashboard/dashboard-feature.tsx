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
    "57pARWLM7XNZonJaZBabP1zQhSrMsm2umE8qs1zjaiaXj8dBNdbSKJ8eH4beKqtqjRihaweg3wfguSapgBdkvfQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sPhxK9fzCHXwJzKFNTLjbYU1cwbiBfiqFDCNdVJecT2xsCTQyvJxR432kpZtEyzZGb6ToBPrEjLb4oT1rh49RTj",
  "key1": "626ZxNss6JGRQLbyGwpmMu5mJU1bWrhnu2YoKroybo5BPhghdLwzmZt9dbCjPSvhHFmpCrqs7D49S4mzvX1KbFFd",
  "key2": "3tfRK3XnPu4MSUPzu1ZjNP2Jaf6uewxQxZAEa1THHgu9ArMHg9JMsXywwZVDEkp1fm8qme8CijgKWRtjFbXhKWDN",
  "key3": "9guFWvLTWYsf15Pn9RmqbiM6oruLFo9h2ftyWGFDqv4tME9fAPQsRxETPr3VYFxNxDJLZBf99UKGjUTA15jXY7B",
  "key4": "4tUaU3NKST5rZ54dPQAwxR8S1cXRrXk4otZWbuAGrEwytxpsiK7YK3dxTFMqSsbyCC2RNfiZhQt2XRg62rNzj7og",
  "key5": "5TajA2FBubGQdwFGkt6bZpqiHRKYrh6cGY4KZcdeJ2WE5bZwGFWJURKJN29yStBZjdD5kvqrfTVqQb8JuQMR3uJ3",
  "key6": "MqMNsp85M7x5G8supkTKirHN4rurauabCeDEhUyKa8Q3RpRLkk1oG6xagBnc2f2sRwWDNLJ32MWkzmKffm69TD1",
  "key7": "28mDJHdmfB6aByqq71679AzDvi1CjVAmM3Xx7xo3Sv94WUdwAqQ36PoJXMKML3NAqcJ33u9rEYRdFAA4osuUE1br",
  "key8": "2LfrSk66LqV1KqaChmZ5c2AxGUjkzrBV3X6WBn1n7QqvfDuxR6SAza4m6cWP7CZDzLNp7MmHL7TQt2vTmrpMByik",
  "key9": "4mrwE6z1tm2gqKhC5QFEUbgRZCkrJfXeFJskEVWFLjY3ZNVx3YuJ1GU2p6q4qodWELeG5CwYmEajJNHhS2rdDNLR",
  "key10": "5JLVvHqhoHZdqUAefNJY5iDLajynWX4JncAmUr4dN4dREndZTZ4mBUGijsYJNdGz1dHwkMUbwBv33aRi12WsjTNW",
  "key11": "pMacF9ELruB8c2BRYRet4iconCdHVWAZPCnVa91QKH1ibb2HLonGGsiJUeJ1ZsTLDUti36wv35PzG34PgpKyk58",
  "key12": "3xkyUsemQSgza3TZZqnRFdNF7YUeFQdJNNWVomHPAgBYc9WVCFHaiDBs3RX7ALKCzyeUhhTMd8THAK5S2Z37cdzR",
  "key13": "2J9vL7qkNtaHSoqgMmdc5rVTb6cp8b8Q3MJ3TVrAs76pmijELPzFo4KR7HityYwZFrQNWY1mKVnmyLKEq7XxLmxu",
  "key14": "3yvtg2jXha11bmZRfsVQ4p2nPMrpkkBrzD2CJQqd77fDvxWjbgJtrt1ku5zSVMK4AUw7FjqAMS4ASvrxXPTYbxU7",
  "key15": "4edWJH6kUH63jqqgLHeTR6zvC4xJbBvpyntscoUuWETrjjksGyJSBNaUPBFw4x5FEYXH6Xz72F152MXMC3oyu3Vg",
  "key16": "4K9mxLWG7MgQqibJrThZoGyaAxZPTq25ViendYNZJXhv1nm6KZ43H5G93cQ8v4rrhBs7JQXYd4m5FqLm56ZnzEf4",
  "key17": "2JMpAiva2ugqPZJ1mZvyJ2kkLm3nkQctn5GmdtjoHi33eBEcu8ZD28KDsCNMsigBMkEMdwx2BXfcpUHYZdJGLZdn",
  "key18": "5YiH8z32Nxw5Z4pqknF7QG4rJ2LyRbSTUvLTUtrgD6X23RbiZ2gCLPm99ETDEDCx8oJ31JjofwbinDJRWRh42TPG",
  "key19": "5YRTLpV3Y7MpXJ9WhoRMbq21K6dN9Rypq2pCE2xB13DMb4L2bgnACc4nc8K3aWA6BhqXKhgyW74phoce8XjtX4Ua",
  "key20": "3JENn7EQwzBZWFB9ZGNZbMR7zW5GsHqR7fUkhmyDt3ZgaUHzsumqRtix3SUKexg2R112fgW4KfZLw2W2aD6SvPHJ",
  "key21": "5En4CcUnWWcbhwgoyRX1DxcN5vNAsctmMKV1ZM32eWXGoRuqSNZXiWNdUgzcd1KXhzLUhzXJK9zHSa19mV7FG29e",
  "key22": "CEXTGAe5TgphQ5hA4Hdp5oqBnFbxPthgDBbgCDXRykGWynk5w1GJJ7eMZK4tVVnpWsrVf9zSZh5KTRujbepNHxj",
  "key23": "FJYr6oB5FeY6fYSsBZTuanNEZFq23bpPCqfU4rpwUv8EYMk6BHA28QREgGGUFLzSgTm4PkymJGqN1ZaovH4GzSm",
  "key24": "28oYDSJJCypSZcbnVJemQFPYLvkZWUNRikinCHUcNF73PaVmb6wv68DydpQhuw7N766LKkGD18aS3ZcHq26zf8Xm",
  "key25": "M6MYwQDGHyQhJS7aTcYpLwCWJsqFgxaLQPKFLf8ZtmMfA4r4S9LqMSxGfJ4xxpjJoDTPgCPBa1GaJCUrU3Ae8Fw",
  "key26": "535ZcEpqR6p8vJR2zpkv3NYcHESL35VxjmdnHGGnoXqsGVeCaqUwMm4qUaEESFQf3LpPQssrJ3ATK62Q5juEm9v7",
  "key27": "32mxgd1TKZf3Jo6XudmsFPWtTBSeV2e7DJQWiGttLowsdbpzxJk9jkuoMc34u9W37KZ1vZh5hT3AeMk771VKFBy",
  "key28": "GKSVaAz5q6o4o2168rkfeBqAxfKsgNy5uToGQiuTWXxNL6xcvm4D1BJnMnXe5Q2QVia7uNwGicSKiEXndGCv38s",
  "key29": "61C13hGSp7g1T9yXC8Xg7x9ioKChHs7MansG9tumPDtNkTeibFW7PkNRcKrZLsKjFgCWhMdgzw3TsjPbxhZDthub",
  "key30": "5De8QJp1XyucJrCmTW8TN64Jo9kMnkiQ7G5dBNkqVwkjtEsowVSsFm5mMZogq4d1hq8tznTYKHcUkrfXAeh1UgQM",
  "key31": "uGBowduLx7HGMehXwv2AZih97tDnr4np2VBxCaAMTQ92FfNLDJA9pZedTqGduTnmLcosZxJefKHd15LrDit4DGi",
  "key32": "3LBxUVS3EyDY2wP1ZUKn47bNY2fgCyQtSiNvpgdX3PToQN3c1VcWDtsrGWRhS4srjjgws87vVY8p2SLdqtit2T3E",
  "key33": "3EcGyGh3jbdNoGkuiUFiAtCBYDwkri6G8zAe9RZpZdTLGB9WYSQq9zjD69pRDcNG4zSqfW85xoS7Lmto9G5FEdeK",
  "key34": "m1GvZXxwrFdGrSdgkFTjr4eyvee8MDzDP6DvHMQ1Fzo49Hqmnx59BfNLqodPxTQVPmVkr2Jku466x2q2YUneegb",
  "key35": "4gHg8daKXqYepub3zgXBtr5Q4mSM7MvDZg5jdsngJFQPxCKykMrGFQXNq3zMdFFeHtzcg9AxPzNqmdsikwD7RNtY",
  "key36": "n8owgGUwNtTm8ymA3CkJiHW63qtuMX1nmtmSKepWZt7JkhHT3BZcNbWThyHioGiU5Lp4Z1ejPVvnoSUbcHeEDvj",
  "key37": "5eFnZKPWwkqtjgDrqPQmS4NhG7jvqwkEVHjQAtuHAEpzGak4ZCFiDEn83vVZDjHhGSnzbrBHHm3NVP8SxLDPou6J",
  "key38": "2WvZH43AyHSYc9U3DUHSYNSkCDcPCkv2nnzRFGATuAKpH2g724Lu46ujUF4c11U7Q6TLrhAKCREwp6Spp9UZ4BV7",
  "key39": "FuK4CFXXZpdYSm4FR5kp44TCw65Ry8QsFykXgmDguGXTd9opRrMSB3yxyYs7RYLaPdfHQSt1WZNSFntv7TE1tuC",
  "key40": "4snjVTPnTdF1C91UyxUr8udnGx8XQ5G2hpmXhQLc8eoyrWypeUdz3JTwjKBr37GzVtrpvvBN3XGd5fwkAgN3PPJV",
  "key41": "39RmRAPPoaF6hgK9z4wRLUt66ymMjUd3cBPySpFVG3Nc32z7UDzKm5n3tAPKgFr5g3EELGBoQ3MJmY5GHw34pJ4j",
  "key42": "5JYwyCS5mHJkRiuXwKLAzPAVub7JL6A6waUop96TveHtBs4PJLjorUaCjk6jtsmznGP4sFdDYBVUbtYQvvo2pdNy",
  "key43": "4fQZ1ERh5cNvrdLUkEcMJTHv6i8Yi1wzkzfXqra6rqhLXhuTP6kLvDcFKaGXSD4K5FpSLr61UfE5bAkNHJGypoV2",
  "key44": "2HAdikxohuSXkzvZTW3Rm1HwBrPED6rEb5AYafu6aLdzY1stxiN12BPoRo8vSs8XrKa1TAP5Y71pidMkgmEZV9w9",
  "key45": "5xuoXwD8yp91YsvxFNsfjsRmB7tKp6oBzr1PvzCEKggptDdqaNWh9UqHBUShuCwiYx7puMNAMeNnDC9PqK9TESAQ",
  "key46": "2u6GAnVhhvyAgKj541hU7GiBA3b9zVSwstH1YTRQEg8ftFNmwbkmu3fgesbgxYd9ZpQzxfexsvanC5CgPhTzu8hq"
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
