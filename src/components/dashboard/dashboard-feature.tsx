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
    "PyzbMDJVxp86RRedTW6WC4z41bf4yQ2TGuC7JSyTZsaXzhdNRmEocM2iHttBGZtYgHoh7C1ypNh8xo3NRMAASQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fofpyeECPGroiNHBTWdDHCy4rEKcKcVFQ1ZoqFc86tgzfRYqrw5zWGEb7v8G4zuBzwfyeAvJ4oXbnhTuabaKqqz",
  "key1": "2c2yLKq2u1KnaRcYn2Pt3hbqywoiuH9GBv2kjcd7UE7LVCu4JhqPfXFMQ6RuJ53tNrWyx1WwXPGpKhnntsDxU3ZZ",
  "key2": "4K3p51nWrCqkmafvikKSzEoD77orqJFHz3CKpHBdvCY55r4q2tfJw6jPNyH3ajoLTwVLgYLRrSxEBdHXLiqSe4kd",
  "key3": "54rKjG8fJiYY5VcPikAkpcfiNd5HnSQXQ1dFTRnWyepHgWiRXs3vJDLSFMh9BfNN1B5Dy9MXknKzpfjh16goFGPv",
  "key4": "26L7mXTRREw8PaAB86nPPWuXnrqZ1qtDWCNGRueeqebph9zuxULYMwEtZGqMvV19r5VBAQJPmzDr44X5Wcg4nEXG",
  "key5": "P2JNLWAjfgtot3vSJx6S8FiJyQQk3SAGZqj7D9CYwb7fKsLoeAo3GpwKDKM8pxGJvGyY3ZEvkUNUtWwd1WHnXdE",
  "key6": "2msvr5KfCM4phmyyCGc3Y722BwyKtHamfx1skhs9N7pawtUbP5X8ytJHeVcqPLjwpdNkQCVkdi22AYdZNqEutunJ",
  "key7": "R1UoSXmALvZBkHstgqBJEJfz1uG6cCEt7jaBAYJYKbaMZAm6qR5ZYPBefWPf8HY5VfQPTWA4JXPggoQiUwvzGmw",
  "key8": "2TRyciTESzZTsYhkfWQWAunUN4WYBv5wk6JNwxo6YEf4e5sTtDKdVnT8FsPcJzWcqboiTj41DTAB8vco1CRau1Zw",
  "key9": "3e9CycWidraxHhLWcH8AU2K32JP7Th8pphzmxhGRAad6iaAqUg1evEgzibCWCi2pZ9TMtvzVM3XG8pRVwqijuvWa",
  "key10": "5J61jyWeUXn1Kzb9arXkhXcS64Vj6w5iuVEAfCENnM4NZ4gUhq2Tk5T2WzmNwNnZXL12hNWaUtaCga1HS7avsvZU",
  "key11": "4SAMEA5KxCvPcSKrdpUffo2NEW4SDcQgf2GePPioQGfoVWGwAiSKT12v7C8JNBk9e8AjxVivNF25Gy8A19u8YoU2",
  "key12": "2T9MG1GHYWgBMvq1i3dQtQh5msz4uF9TsovRBDNbcY2KZtfkKU7cuZX1N2sKESnjW1tK7exJw5AMw6JWoUXebb4Q",
  "key13": "5DaQxZXmvurUJvX5m3GvHFAsx3jCELH81ZYMEomnZzjJDBHgoH8m8f4dXaMSi81ZMFpr5Zc2GmSnfyK8dNzSXnip",
  "key14": "5gZsAQLwpTt9N431fmyXc6agvTWytnV3KnG6yVPqz3re1wnPQgidYXvfJoyKWsJoanXkcBCo4YmBpjoTJYTK3M2Q",
  "key15": "qJEbWZHEiHkVQKPXcJYBjPjT7zc122wvChuwnPJ8gzUGqHaJGteiSC3Xuy4jydAS6kYS5GoziGgEMFa7aMA2b7o",
  "key16": "23kEgz3utGBYA9u6QjVrL1b5MoH21zmLX9K6DQ11bXwTH3RGw773LZPaQHmCPhFLVwvzHEotteoLbeh1wJuVYNnp",
  "key17": "5seC3f4ob1ZbYUNkCqrWQdeKBgk6X9uXnNyf53gyeJamWiJpxskE2wkueuTDk8mdEhMFawt8CKjFnmk3xR369ujr",
  "key18": "Qo6WpZuDEVyw5mnc6DiXvvY15e7HPfWSBDGRmz486sd4uF2rW3GU4UAnXAprVtFuMk8mp3dqSSyRo7uq66Drpee",
  "key19": "XxdbHtAe1wjSpNvTDz6FwEuwhF2MeLFSuKy6QoNBz74bwtbA78K2Yz1NyP7iZBuS21WPa8sbz9eTrZYWJ5wCfcV",
  "key20": "2kD5UMgXX918dT29F8BKPAifjJo7XjabZaikXkqMscispNnRwKs144MBDY1ZokwL5qn2WZ6G4kSGFPYQ1qbz9SV2",
  "key21": "28VetYmdKwq5Xrr2XAvrfEp3LbhcLDfgxWCt5xc9Ba5Q93RTC53JCtJ2JEZRgNDaemoVfwTQF61TEu45Bwz36gP4",
  "key22": "uXQ8DKbM5cK7ZV88xX3YLax6PTmg8wogwAUTjKofLt2wex1w3x8o5zNVjqAW2gnn7VDMdLCFKMkPkavBCd1SBe7",
  "key23": "4pMAFbsRtjZcu6zKq9Uth7CZbrZkHkBdXknoCW2CXT4YpTVpqvUzpfUbPkB7gxJJCDtBTLcHG9QAukD5WwVCrx28",
  "key24": "4PfWmb66LLArfab56pHnMKjSeQay8KsWYnH2DLmUb9eDHMQsjkhpkijcDjkTXL6Ur9fo1vofXDimFrSksrkibuFZ",
  "key25": "k5bi2p6ofqqH6v3FaYjMYM2MRVrPrA6ckCj3mcDxE8hVEEuEe9H47WpEGxji7dhJrU8TFrh9d5ECRJJVxoe5TFM",
  "key26": "5DWNaZHvbuhxcuhqiQoobVd9LXsRAWTbeuU2cdPQjJCAT1dCkfXxdbGRF1i6XTviHN5LkNuF2c8Gkh9uyhtPivUg",
  "key27": "3RahVXgqTcRU7rydytFGsU6JsaVp1L8XN5o7wdVhQH1BJxfosS5GN1hLz8pZGswjHTRWyUY5XYWS3RVnBtLWAgNB",
  "key28": "2hd5UAeQG9tFPx8sv59LSWuX82Qcswi9vt2gPMGroRwUjmtvGKjjMfhrCcFdSpSy7CNNkYHEcbCsk4MV1YLckuFW",
  "key29": "3aZ6NeUq9Txz4RQjYfJ1XzppJ7oY1QHumSxQQjB18GzFpuKtnTmWdfVx567BToG6kyS2GaBoYaZzXaSBUBgH57bi",
  "key30": "3B1KQgWdwsDyFvAPdjhA3eE44SdP7ouvKRGhXcsRq7wMiBBChwuBwmDiXW9F3PBnHeE6pXFXhesnc5BhYJHN2cDS",
  "key31": "63syJFpH7R6SXdCSKnofT1KtP4GBCShHk8wqC3otLe4NFRzqW7bGj3SBLKjrznEGg632YmqhFjfvXxmsvgCdW6FD",
  "key32": "3rs3MMvcvkHHNJr8HzUR6zLGLpufPvUz9znTVHoiammDhg4xST1ThUqYTR261VLh4MmfPCYPbuQxAAbEDaWcHL1n",
  "key33": "2BErA4bFWXYDyRTTL2qCtTNsBqArgmm5xuMoQyKhPgqdjevdXk2ub6AZgnmgcsQ8HZtaaBbSHsZtuAuhF6X9HU6p",
  "key34": "4N1r9YeSm6ruvXnWZzNtWJ57vBCs1e99bEKQaypb9sajQAtEAVGFb2gGJ16KRwaYwj1yFHXrYc3tkYvAixZi5k8B",
  "key35": "5CmvSmdfJiYn1dxD8kCFiKqeuSZs38NASJSHFLdb5fG9DRQ3ANQrH9WfkySbjLvndGBTdH2GvLD3bDyo37rvodfU",
  "key36": "5mogSv6bAT8kiTf5aJBsvAVkY75C19EwNvgF45vXoDExvXkpNoPZV9Yc7mhWkEGKDVDBwTU8CqoDQ9AfF4f9EzxL",
  "key37": "udUYXVsrZw9FzKQZgXw4xp7yCu5AJsJMhrUgV8ZXuDWp4L9HE7eKwpg7WLRHyKr2ncSauDeMfDoaXqh8hpzDB7d",
  "key38": "5Cgu9cTyfukEdvqrmHQYAKCeWtKHwKMT1grDw8FnPeQeGGpp2qp7vDpnSSQKcam8r5pEnvtqphjuFdzuktqK2SWj",
  "key39": "4aJJedZL3buj9jPpexLiX6fKGJQF6HS7sjAk3T4q1MDfZh5o91MtRrHcgiTP4Y1muhou2MseUgUrjobmmpVmarpa"
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
