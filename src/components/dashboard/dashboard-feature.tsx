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
    "5PfNw6P2dWh5i5LFQp4z9mYSJ5j8R2m8NewvkGg1grUW2RYCBGW6nQ7mo5cJhrLKRMCAiZn6DbFaG7z5dtrZCAB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bYeV9ymR3EUbXmXvKYPGnvypQR4tgmVqcnLoCFxrGYdTxcCRT64jroV8nffXiJUe25ni4ZvbqTZeBBXDSfTn727",
  "key1": "33ptquzTv2deiVCcXhPCPH77Ppva8iq56pHJMetbtAoiJv3q361ShYnM8huEUnVV5HDrRPxGqrmnUG1xhLBsa33Z",
  "key2": "2mGLndD7r2iQWxKiGpbUSetgQnHWE9xWJPKuFQBRF27bsiSrfTbuqUiQ4jCFD4FfXnb18cqZ6UiLB9nPVdugS5Qy",
  "key3": "ZhvnzXvEdmk4WtiLPEv1PYWi6nJzrfXsf8DpjFbSCCMEAyYCeHbcGe1Fj12Wtpy3UkAhjfdS4pdmqGgLHAV8WGp",
  "key4": "5GxFqCpXePRoLFhSmJd81AXbWBViFLy61c4vMJfV9FGvjCM9kDcb7pMHRVXJ6LL2xTRrpDSPn8Y72U486wQBaXV1",
  "key5": "2ZGjZyoLJqnMdL1x8rsMZsMeH4hwNbMkQL3yPUM52cLGQHmy4zZCsvbEj7wmqNkVpMjb3FmgnkR2rLwmroD69yEP",
  "key6": "4vma86mAsunyLNZrkXtUvnZaXR2PapRtjFw45cJQ5fyMBpzu2i9GEXjHkNMq5UwmuJf3fvgvrYzq13AyBRsAK8E1",
  "key7": "3Xqai3cR5Yu6Ueic1z1bseWXGUN2ywHpHcusTrqFPD4k5VJFqyoTk1wQpSXvtwKicJKxM2qgrC1N8F1Xtm13sTf3",
  "key8": "2t2VWzBL63U3BGQEh8VZVzZ5NGxtALbsHpPAKr6WpF7PfdajQwnakRR9xycRmS62sU2G2fYjzjdkomv6yRY6qeBK",
  "key9": "2xrfUL7LMQP4zG2Yd6djNbaVSWTf15CowYuYhR8BmsBLaYyXwGh73Y1MVpZ8T1v2iEqp577yVcjZk3VQqpNPQSgy",
  "key10": "wG1BDTJAhHcTigt3Rj47wKp1CNJT7B3ftNEnYMGGS1nAW8dwWc1tbpMqUrxbgVtKAwHYU1czM3ZBxZFKqvd2Frm",
  "key11": "2CGyoPazk2m9D4QT8jRecuwPkh5kbwZk5zWoiydD4Y3L1HMGm47F2gAZU6Zi69MvVc9pUuYw8RNYKvFuNv7wd9GW",
  "key12": "4wALquRMty6DYYFbvGQCPeaDA76LFWUv5w7Ayu3A7wPeRAVFsKR4fE2yxtXuqRbL3upPNWzCJ6FXMvtbwfz7VqAc",
  "key13": "2StdsKpRzqeD5kdg3dHcyQboyN9DUTbe9g8Pz86ZQR9fXkTbpa9kGFYsufB2QtBUwwPdQmqCAqr71cRzoUpBWfLw",
  "key14": "iuviPKQscdMqPr8okamvj3xBpyZCPoMztT3mVWRbF1BjADVwVuhCdeJp2FLzAWsqKtAxbi36DzLqM6Jtd4RBtSg",
  "key15": "51v87kGjUE4RhR8TKUhTZ8cpAAw4Q69D3CXkjAXJ89BQs6wxmf274S3StB8ETxseW3SwtManbGkpoGrsvzgjcpPT",
  "key16": "2j3AjC1drj6683CbftFTa8WmvKrxUxKPj1Y3J1Y6LrivP1sEp8N3qMfnoJU4p2qVt3hnZPeqCpu2P73FtAariSp1",
  "key17": "TjjL81vtQi25zU5xh5vRTvAzkw99dtfE9GGEKJn9UbJp3aCPx8ZDXH6xAJxZ77KWohutEEk6Ft3xcEjhiGuwAbz",
  "key18": "saw2pNo3Yv7LsgteAMyuH2o8UBhvwcVt6ssgjx5SZWqvXeJZ5SNcVvyM6Ztm2gn9SHwj2jkvTpCYxaZVURdXB3W",
  "key19": "5JaXN3ZSFcdZ3CTL22qaio4z7nfTccqwdpvQK3xAouHXfsTR2aozM6tJcPvkxr2JpCs4KZFmqhig5pq9oq81vnd4",
  "key20": "5NoV1BVaAP9rJj6CqYC7LsetPigoJGzfQTtb6Gbh7KLh8eyYxgf442pRUdx2QH7QLry9kKZE4cmavv8hXv5k7xcJ",
  "key21": "4wnSaqRrpwcxprgXeK3MdmEMNFBUoNnaN6csfpEmK8ZGF6XVkqES6QUqPoCzPR2NkTkmaDr4dGffDUKoTpyFgGrd",
  "key22": "5Fam4aVqgwUpCVFo1Fo49dA91FnX9JKovDJDa4cQAwxse6gnkpcJ5khVr5cV5y9v9LdQF3mwtwUJBVSj5CjfCHJ8",
  "key23": "5vCb1sGH7pSQTS8XtG3nxNcbxPZSS5XhsbpE3HnxHyUKZ2eZrqcwzn6U8uZkVqznyW9JtkaRvpuTsyoUPcxePU67",
  "key24": "5suBQFnSZVtKRArnkY5cnyr83XjeYQ3nyh4znf4hpKdyabWLFvx6aTSmRFCmtHcUKnZup8HoWJ14SwbowVaqD73N",
  "key25": "5A6wpCuY4L55vGzud8jr9JxZxKwMSV1GwLo5SHdDs7iBDsiQMdpC4659NedkVd4EK1wwbrxfPBZiSpniMKHbhaod",
  "key26": "rHZBsUPQVmLeytrkaDQnSnBSN8JkGVSwiyLzPjEU6RtKsRJLD1yisfNcqBSLfVppP4oVRhZVEFi2UPrMtfM2nC4",
  "key27": "27i6CeWfTJU6Qh5NdUbpZNV5zRc2bLkbtV7hF624guMLJAWhL76CRNQ6bfECGZnh15PqsA9bTTZDvDGopi81fFZx",
  "key28": "4G66xB3R2sC9t36npVJjhaCvYiApkccbX3cfkiFE7iwANvi9ua49txHM2mhGnUFv5M2wVz3AUe78HEwtYqJ5wSUo",
  "key29": "LKkB8inXPmCcptcJQzaXXZ9hMEeV6LKEhqr1sVxuQttQnzWFriDnfGjLdmZrz7czKE34FBv5q1qMgaaSoUZSsFr",
  "key30": "4Z1UKWr59f9LaPEuchebWhXFtCbswXek36athB1WgFBysLQfyVydAbprgBbYrDSe6EQPXGbCt8SThG9qvK4fT1tn",
  "key31": "5LVRoyjkJwRCo6sStgiugA72UR998YwayBUT9S6T1G48dPjFYu2TXNUSUvqTk7qyPnPW54HDNGS1f1eZndXevZQH",
  "key32": "3fojGDGUtsweaqdyMkCxdag4ToDU8QgWwKtFpC3PWNDVmisPSv8c19PkSe22F7M9mrPTYbjKj4gyWXZiakAL11sp",
  "key33": "343DscbdVi76cTi8BkH9rQFnVZxHjRxNFyQgQrPbFzqPck7DSKWBUvJq8LmyK8GuV6NgboU8ta8eJETRxQBB7fqH",
  "key34": "5h6sQ6bBjorK2hf1auzGA4w3mZ3FigSVWFsndnh2ECwWQtP8neubXYEGfYpJrp7t3Zno76UdrXjw6AjfXrt7BE3d",
  "key35": "2iAiiMUhQ1wHbFybZtfyWDoikL14bvzu5NaWatpwRxVFCLGW27J1MXf6zxMNLUdbgYcafAksJ6XBxD3CjNbk6Qgx"
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
