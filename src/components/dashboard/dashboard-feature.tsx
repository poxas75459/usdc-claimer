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
    "5CvkRkUu7dNJoiEGusr7tvTPt3qMPbFPbLX9YMyNVoNNvTu1ZASTzd554mXCoyjDsHia4CiKGKk3r7nhXGL4uyBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QU2HdP8uVBpTkKbkVtc5MaJ7WBgwEmPoEAfGfURpczdZN34si7f2HfueBXUSkB98tPridraAYbxFfC1LbtKAGxR",
  "key1": "mskq1KX7r268kABcbiPDALMdMSMjrRGf81M2cCJ6JUgaDwEeejEGwTLFhYQxMiubn9sap6zTVWZcu9vg76kP3SJ",
  "key2": "5kvyAQ2ipnZxed7vjV1GEV2DUNCyXEZfaKAeAzJ5rwMx5MYD2xRJVQVdvXLFigUBr71YUqNWCcGheeoxqYvuLXQy",
  "key3": "5Cf2yhyUQMy695TuiYwvtQ4Pt2uVkLwDcng1Bti2GmiLJ8fgW2h5LzCpiepA7bHLkYDsfPFgZ9FyE2xjwLJEhxgx",
  "key4": "2zWAK6nscxRQ9NbfNTzzHqgzexsvwyiZMLPK79dTbtL2GvW4WN6V9EjkHP6Xhz6Y3NpKFseqp4dCJP8RQW54eptB",
  "key5": "4hxdc1otMjtbAza9GwnQe9rTDNnWZpm1KLZLyBrvFhxT8MviD3NZxwohUGZ8mYwLp4SR9WNLj8KXYrXK6G7M3beM",
  "key6": "4XDjFpJGoe2g7X2LYxC5gbwVu3Em72ZMYBK1eiS8wZ62853tTx6RM6g122TV44TwkWFDyaqPJyrycLXk3MAim6jw",
  "key7": "2VRax6a6rqmxJiYwBT23Ztex9XkSrfJ7V4qYQ4MCLgyXRZjs1wSD41Skg76y7hJn5xfunLv76D9w4WHDHNAZQ9vP",
  "key8": "2fCWCmGQLfHw9GUVDgxxzkMRW2UWc8zEX3vvvMT958dwdWqNMfnq4YSgeGvnWTDNW5tGiE7xfE4w2aFtMZXeLQde",
  "key9": "fEb22hbTi2npD84czQGTMK2gxeJhKSt8LJGsfF1YfGBRPgGSCfYzfxBLDzXetVPXhjTxexqy3YDwAJTsa5Z4E9K",
  "key10": "4ohJUM97ookL7GgZrBK6ujDknd8DhKYQ6GNKQqKz51h1xEuyNbMtREHXBtoWMwRTZS7C4ZTQ6Kgqx7co7QuTGiE",
  "key11": "38D2Khfhdw75XyrjVJgRDegFTV6QnEwvvpssk8E2kQmcThNydtbNhhfrR8iwvwm9QonR1a3tV3oXGFupoz8qg6Wf",
  "key12": "2A7Mzn9AqXcuaG32DC7w49NHuTEMRYmJURCMwF2fsErApZUiJSohzsZGjMSYi1yD1keTZtNSeg243d1qmuPYdqZH",
  "key13": "4X1mutPMLJ39GRFCeiEVa8TCf1ZkvrWeQ2NKGDix67JYLinVBhQqesqH92CUV6QRMgDSXc355bFxhi9s8hQS3Aes",
  "key14": "5xA3vkBPSvBrPsph34mQrv22zY1RfAcTd3PKUGT81dQXhmDrZiHZDMhVbWgXBzeFA7ByLfpuSiX6ZEGzcJkbhPp3",
  "key15": "j3XYBcBvwC75tQsBBMvXmDvSi663FitHoDaCHpdtyzA2QA3S8VF9ZPXtutHDQAdqqCrSPcLfyHpHxKb6zsyDacc",
  "key16": "3XpEuRd7BZGxNBRnuRqGCTCZJeaUF6HzuGzfUqji79PZzqJKBmpgCe9QzvrCNTnNYDNtvPD2saKwprkRA5gspvyQ",
  "key17": "5DweQahjWXJotwwVebbc3m2zJwNXxx9vwYnDs3huVPu4Kfg7rKocQMwrBvNBEeHq7NBoXXmJGZgzfNbVffQDTLhj",
  "key18": "ZJw1eAQgAS2dFFB8ifAE6rHg2LUwsYbocDYMNpiuvz6h9FfromBneR48ZWoQw6YbCC8XxKSfY8XLDfbvH71mizR",
  "key19": "u6BsdKQSf1HyQSvG2CHgGFt5rTtdKHHDNvSMgwoD54oTsAsnq3mL8SQwQAwswby8dyshF8S1pKnzXpLkVzDbFGg",
  "key20": "3GYrN3SfYftrVctUxedNHzJxcnzZ5cNRGcMj6rnG9PKWPtGvN1cGRf8yqXq2FLGatNPUp6CbRyPunjcPPFeeVWPv",
  "key21": "3vVw2jQcZdyCAeXXfw9TVuMutkyYQWatwhg85Qdi813Hc4fwWx8sqdTh15DZEowBoVQuF4BrPgihAcxStExeg9SD",
  "key22": "2X9mtoyTTdU6opFuCGaSUjqdFGEqiugLA6Ph1xydthX8pvFcWzoh5prCuD8H4gwkZPESNPeNbSKjUTRSfnxaawzL",
  "key23": "2L3aFU27KqmRbfdLcnAk4zwW39TUye4UpbXaYR1t5RKxJSjcCD5oJiHHq54GKkwUssrTeyZvivB9cPMct4egdhJc",
  "key24": "48waMJJhySuhJc8JDEjcQBw6xon1VdKLDmGjmXeYHdA34XLmjevACL729PJ4pdxL6RC37GJ47jXTaWHbghPWroV1",
  "key25": "eRGGBAdkCNWuCkMWxBz14bEjF3yN3PZTXUaqSadg4MNkdXhkK5Jxj7FSHdTatMjPtnLEn61dipw9TeSWr9Jhs62",
  "key26": "3vHNjWoJwgDisc9JsjGHZHCm6JDZVCZme7ashT3GX15giBiPwcNDFsNiLR2udRoUvbY61Vc53WvS3Jucy1avXY74",
  "key27": "3nnxycPfXAr1wG6n8dkHyay6jvdSSo2mLfPpjAwNs1wf9QYUc6KEubrPgdF9QBaQuzrrF1KbL3wu1wssM9MG223a",
  "key28": "2n8hwxZYbKUDH3pqrDa88bst6Vwg5QVH3qqftNCxwdn4ugfc2fHZ3pJZAJL9qR2VB7xm5dyZNAa3kmA1CNNpKqPm",
  "key29": "28tNQpSG4vb8GBJvyotd5UADGEcG2WovV7MVYXWipMqBivZivwyghDEb82fBXnnTSLvEgiGBEHQWs6S8dEdyxuCD",
  "key30": "3D8xqrPwioyDUyPn6byFzLbu9w6poLae1NJpbR76TusRKgxCS2WTTCZXDADEsLcHS36uPvtRq8yGGZpMomXse797",
  "key31": "5gcxTDPkdwinfCqxebL1q7MoTZGMQsL8PGEMa9kv9LjyGd9opdcd31wYqHePo7mdS84AoeG8Q6gnG6DAxfUZFJQS",
  "key32": "43coUFzf85A2QuU9JW4YnmCdugPXoCa8ZDtG2YR7AjqtDfjrSNwB6Z4uxPwsUDuztyVnwaSTbDz8P37XAEf9SSt6",
  "key33": "3DjqGJJqAWZWyfCsBPgn8xm7m4kEMxu6qEkiVBMTj38zFuogCczcJfbYJ9QNe3E31zQfbNRPqWZS5juFbfeYT7CS",
  "key34": "2Vzd5PhjVApWB3H1TNPPUw4VT5vLyUmAFHow8nnpg8gmnk2V9w1pGmtPDGkyCULVKYUw1yGW3gDyqiHteyYt2Qqv",
  "key35": "5G4SnQiYx3HoqcTxsBkwsfYFz6xXuCUcR775U5y7hjBnWYGJMoev7uVyprivVKdGAb9nPcL2BArhh4jD2mDQXhRb",
  "key36": "5ZbpyiE4LKsWfPYwQyJBZRwLVjkjjQ6niLQ5T351gJjxim3oNpjs9xrP1v2wPFuxcTzMZS2UsMYPZLXXQXxKiNuv",
  "key37": "3LRz7nxaquYznkA442kv57MHrzwzvsBTCkmGghLtigTNVHFmB3Vx9L53AgnH4qTSXbEZm3a4R6AJ1t5jmh2vYDt4",
  "key38": "5V2nQpR421fpfAHwdSPpLPp5UzTCCJskpzjvVnt59stz2w3JidrunS4MxKWtVvNbMYGuK9J9J9Lf4zBY84uZDa3f",
  "key39": "szXqQUHCL28R6QTd6fgZ2sA6LHffn5Xwch4btiSZE6pqEfmECPRAsuhwNDxYFXckxw9LmxbTcDSNa7n4WZUsjBj",
  "key40": "3AAE6PKFu5sSUx4c1B4sBtHV44gEiebgMKXwcLrWbnpcVaBQNB7nQkbDhQDmAEdQdia8FfMWdAo5wGJQNPcHXq2X",
  "key41": "2xM5sN7wvDLTf5bE6ZHk3p9HQBQ8YxipzcdT16VKX1ybX6hpn7pxrJ94RsR5KaJoiRyBxauekv41Su8sG4w4YiF2",
  "key42": "zWc2mb3UGd5iZFguV751r3QQVvfCoYzEaRSPg4FNeQQq9DA65jbz89BxufjNQsywJbpWnb7xjfnupCszxF36eki",
  "key43": "5vYyjqPgjGxzCg88c1dRa4FGBYFze7ppjpSfRjW6oZ9SrQbWNcxrFePL7ZMJbfuApKzsLHdxBRepANksBnXawYYW",
  "key44": "4Z7hq3m3UFJDxpYsuMrZny4f5mvhRWnyhnT25AHf6f7rsnKy1UD7zD9iV4kgvJTCuhCoBjWNc63oUjsHkDYXgFce",
  "key45": "3QDT7f2eXSurkFocDsqZ8UU4AbMCdJa6HyiCQQZDrJn7tyyji5887U8ptabf9ydz49oGoW9SocueGksD7FFcCr98",
  "key46": "41VEVPq3xNQvkx6QqvKM4HQbJRngWbEjmQjCA5qU6iQEz2xhG8uTZAH4irrrwHnwsfGzBsDwaUnzPARxN9ikgxdR",
  "key47": "W4s1DdpKefBBarCc7tA9xBhUS2g5Rn3LPqUb88Nh7JsHVUXrD9nRYyTASeP5vpDEmenFneho71migzpsAe2YWZY"
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
