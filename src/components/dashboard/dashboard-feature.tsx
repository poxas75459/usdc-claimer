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
    "2xo7Bqimc8g5LxUpVMPDqMryZBEFqNtZJhgpZx22S2Zzd4TdeugAQNx9CxERDjxr6FL7VFiCmxYf6JctxuRNzd7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EmYoM832fF1MaZJkX8W2mXU6orM5Av8VHV2Pk8CJzZJyQzTCSMPwhnP6w7yK3mdtsEpM4JPn321C2pJvAitWG5q",
  "key1": "5Ckx2aoX6hdBUo9CwAt6WXGkPXgmsncM3EnYYY9diqmGa7xTt7GgwwB2Htep3y1xeHqCiEHpcUmstKhDvaiEULET",
  "key2": "2K8mziw3oqHbAxte4G3QosUfg2bjiM9QDoRHVptYq1hbgugJ8LM6LN8bwWAjQDcv6aoGB8eMpWbM6qp4dnFb46F4",
  "key3": "HqLnKu4bUHdVJhZRbZtoxqCFst7ffU3AnxAk9GdyRSLQ6gvURzmw97Jp35Wt2WZjvvb5LmJnDUrPjzVk5rSs8fm",
  "key4": "3YoKgrQx8remwJtpEB4oMQoFG6K6ukQKDLZT5EkmECRhSF4rvmSayfAQaozqKE3Uy6TEQ4DYetvTnfJaTKXM7ePH",
  "key5": "3hVeW8TF6iJ7mgoP4h1LLiRjCWncqWTWSpFCS3rxJ5Gw8GZEja6xcWSATNBJ6QMgdq4xUFyuuT3jvU1ARZdoHQuf",
  "key6": "5aVX2DLHwhv9SEBScRPQRzKryZJHvcYdDdvgLc9Qna7xRUryVnV9aWTbKwArF52AMSJXNeUGBPBD8ninJ9X62drc",
  "key7": "2UnPH7vqK5XrmTQxo57Mbp2LsEoqv8agnWwS2g3dRgcAKQTWHKRDFM2UY7rfVAKznqHHfJ3D2AtG15R4qJkfunbL",
  "key8": "3NudyB41CGeFbqej3p3P1xLSEnLdXenpwUyS9i2F4e6N6hovkWpM2KvNmoovmEKFhwQKcp4kxHbsSRkn5kBwN234",
  "key9": "E3hgaYznUbQNRM1Gvu8EVV4MGUWwsp9gwcuHJdFZ7znJVwic6jC4Mb7RPEgnDRMtfYCf3UQsdWAhcFXGaf2awwf",
  "key10": "4rV1J35Vdw7d6ZURFGSFVuAfLCAMQ7F1n1HDwRdyE67wvLVw1CcjA7CUoBYfAWho2cT5d8bot3QUihUQPMECrg5v",
  "key11": "81wf3Y1i2dADcVkWUTCeRjxNjTp4CXkQrz9ce7k1Domz4zrjku9S5GDpHqLJGhQ5fx4xLQZzZS7oPsXZwrKEj3j",
  "key12": "hbCxMxoa7got6ybEDG4N1C8xNQv7YHFxab3YrSbiaZYQNNcaMWgqwZH1rH9H4C4gYuKmy8JAwm9Cc52HKNQMpwr",
  "key13": "2qzNwp4YKsKUyn331tbR79iBstUMdWb5uCC8CTGrJsxixMChguY7hUVKr48vp2hdBVEwSrCoVDPbyAbLYU98Epda",
  "key14": "5UpsRKr4MunvKYkX8CeravJG7SsQdfbsSBsELWynVZNFivh8Ft2oxhhLfb72sPA3PAJKngjfRywq6gCurR51UQTU",
  "key15": "2gRzaCtzQKyzBSjbAcaqW9UYyHcJ9jUPgSmkqUzPmisYrRD2v7dez3kvwmagKi2YebW28WeRAtCgW3xPRMfRvfnB",
  "key16": "3MBG7rsKvmRKwxeNBasJxsxMz8Y7R6c693x4E83kLQ7aqLSHcvEZpuNVg7xPBdGo8pvoUpR8LN4rKkn3hxjWuxB2",
  "key17": "42gFG1acVtz9uyAbpvLEhjmu8yapt9UpSeENUePLEK1puyrDry2VS9s1iFqTDtTAHjizuLCw1qHzUadq21Xwb2Ar",
  "key18": "8dwSbyFoaE5zKetTuvFfAE5MYiBwGTdFQfKiv3v3dHYNEtRqr8SqaaKXa9MS32FVsjRU1mEVXcqMwhuVTUkwAGm",
  "key19": "2rLyes1g4EDnyq15Z9Xt6h54s6BDdvCG3ipMZscLtBh7SiykmXQetdwfKcy72FNt3nzviQs8VqhYnDaVPNvLPKCo",
  "key20": "42tY6Ng6Rs3JEGSkqa8ufPhuWAypUp99nSQ4Ku2fZBXQpEHxWnFU25cD18vJv3mxr43UoRipT9rJ5dXzeVJ9iq4R",
  "key21": "ud6F8bQJUVom2v6uyK6ThLdmQTFtxugF1URFFGcuUSPY55xGMGyxZcDRysaCXREPZHyQunTN9QBVdiGN8WKpzsu",
  "key22": "4JmSCxeUZXDWCaC8SWQcfgH27YTSzM1ckAthq33UVfARnp6jNBXNG3VDoqF5ZY3Ly14GuiWUo1dyuRmkhDmm3cD2",
  "key23": "33Luw1Ku8K9jn3RX3fYnPPoQCt2zihLW41A9Eeoe1y4iBDMMpM3sgpXhkJ2M2V7zwW5YFTNcUu2fKghazYuV6zob",
  "key24": "51ocgMxE14c62TMVVGcDDhTw6kgyRQzSa8FHDVd2UQjBbsdMgihMWdePHP5gM7QhXd8bMLdYQpXsRJa8FprxdMJ9",
  "key25": "uLafyYJp8hNvqCoqvmFXp2EWuZBcHo7N1sHfTSznvCJSdG2knwcnX8AwnShAUyqQ217E8M7xXUmdJ41DFdVgsar",
  "key26": "3aeHask2ruAWSPmRAANPvQWKgjBseKQAHwjBmzGrqTaptxMobPefbxEfnhMYWL1mTXqoaYGEqY1MsDHbkyA1CnSr",
  "key27": "4bDto9kDgbU3oJnQcuuQc3Dm8d41kPFoxvZvSvSKbPgZSqP6K2XSceFerQh16hdb4aMXnFt4EPjL5h5wCKVvZxW9",
  "key28": "1pxpi3PbptwHtA8A9dCiaRZ1NGWeu7HAUdYebdLbtN2SrunxopaxCTGBhWcUjBnbkyP59aRx4B5DvSQu7GzWxXz",
  "key29": "42RAh2FBd9K7PKX8MEYRTndiU1WaL9NmPsXdrCFJCWmPu6AUPs2tDdVBrBKwAQqSWKoEbBLHB1gFMRSYHCshQL5R",
  "key30": "xo1vbVzJH2Rf2WyCs7LwEHcCAETbvvVEH1G8pkCJCSn1RTdyYPS95DFmmD9psNKTy2EVNeKvKpk9rXGrdTJ6Z8b",
  "key31": "5QCgYAk7zvnKXafutJ77nb7RDp91BHNpGvBrGJEhWHcEgi7A3UHvRXJkwCJo7aCr8sddsVtVG8T4yLxd1EHFdBuT",
  "key32": "2LMFAk9DdxqQRMVpMRuYuWshNLpQ65yzdPYH8akg7aGnSeJWbppupSsv4DZGNMTmMDj8zwnEpQrZYGKA7H8NaWX6",
  "key33": "3Dgx2iBwdM28YtdLEm1cHFYnPCs1ogmG4uMM8dawa79JqTbjG3EC4RsK7o6VfErweabRt7UJA5iWxowrFR8ZDXFW",
  "key34": "3tbWGprCGPPx5m7yPfBB2rSFZYZ5kPKFXbKethudEfJaRuSxNff5J9C2iG5M9fyqHex5VCPqx9QsqhmGvdp3wdQW",
  "key35": "29ifpgn2Z9dXvmnDzgShNHdX23ipZSfoAGisryLVgNmuhiqeF5T2oieZLZAZcBKdyyMyUbRSUUJVub1bsGJyLNt6",
  "key36": "5trc1QMJTEeAdstfaXNjWjezCrG255XnZye2dsvp3hEiXjSHNxv1ruugLfvnTjREWxSdNhh9MK37vPp21Lj3xwyS",
  "key37": "5hvgdSTshxmZ6GKf7QS8HyS27bfjcV1YohGFEpTGDWLkBGHWcrrHDQMBqu6wgTQuBJN6MXxtw566MMUmeTA6DNW4"
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
