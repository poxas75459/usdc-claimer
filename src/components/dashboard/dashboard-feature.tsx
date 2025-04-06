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
    "4FMdT3YvFzD1WAsFSKnS9zEoYEABVwKpQnw4LEshxdKgjNJA8pYj6mxTkmJnMMiSJSwAovF4pHU5vCb7zb2Ywhop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o8GcG3To5t8Kg5XgadpWuvZKjYDkZieBa5XtETRMyuc7PL5xY9k31GWmeWD8Rt7SrnDy1jskcyEYZ5PaD7LSPx2",
  "key1": "3weiaHBu9S1xqydYA5PAU5z7M5V6M6iwFErZ1MDKMt841fB7n7jbx1Ez4bxcsBpaL4vWZrX6zYCibCRoWCxmgtSf",
  "key2": "4CreCfcioU5m5fC4yx8AxyPn1KinkXw7tFWt9eG91yAUMmfT5goq5zXGnQt7DhQB1ZjUDnYmsgeeXuue4JBh4w8f",
  "key3": "4yfWU5XuV6DfnHWZtVsTc8N4g6B31MDb4my51fTULA3exKu75W1CmSsj2VqsbqEyaBhJyrsaQPJLRKJhXtgyqUir",
  "key4": "4vrrqjSvQVcTrGHM3ZZ2e2EXu2HiHsPaP9vp43qZQeDeBJh9ZSnqPbSrutYNUeSMvs5Q9PucPg2jxAtUvKgQp6sz",
  "key5": "42uVi7v83HA8tSccYNeFiQNePCnHjfQwvPNLRcE4t6jdtJGMmHDwMaLYtUJr42qiFV1aTYDCi1SEoPkgLsZTLgR2",
  "key6": "52Waq87pRxeWDtoGGu5CWSMZMX5vXRUJd9f4rjALCmddizrNbuvsh6dK8RfCdAJ1PcY3i989Sg7hGUp2qcK97mAg",
  "key7": "3Uv5CZVEK5DTd2szvA74VX5vNysxWhH1dKCFWb2Z3YKYS971USgGM2YKSzo989tGgbdznHizQdAKjH55LCbGXm5D",
  "key8": "5YAjiXjrAQN3cpyGEUhfiNAXsGZSTrTakccXD8ccsaoi9aQQfbgAKLtyVR3n8hDJ7WVePFUnk3Wet7Jq945TNg5o",
  "key9": "45VisoPmkpHNjQwDq5ZBo1s7m5sQuWhpWmTYFHAeuTKjTBKg6ycnCiZcA1eUdmoy4cFqfUi5fD1q2JvXLoZnVkZi",
  "key10": "54yQYo4Rkc97Rx6cjSkULQCukd8EjPNuGtvXH9qWCJLmbiTiPNUQ7zvBMV6h1v3bUSS6XjsCkPtEo7f2xSYbVWuh",
  "key11": "5JZgSHvB4hS1uxf2x8iSs4ekFivwLZzBPs72pbAudaQLnjgdPqRrNSc9qsejFqZEkyC8jgQUcZKDFvNXjneBcVnu",
  "key12": "22ibcYPcj6xFvRJfUz1Dv4nzLXMPsGS3SPVWFSQvQKCwZ3hFDKKAeeE1W1kZZEMaBWDyidHRT2Uuwh7d4uZo2mHn",
  "key13": "1PDnaD24RynfFPE2HY4Wnhtmkgqf8Ub3hBJX2mD4b8LGJbuu6zPs2HU5seRCSRnVNPbk8Q8SUaQhoQGzpn9j8e1",
  "key14": "58beTJ2R2vTcYcAjsrHKB3WAZ7hSkVxdkYmB8intBh4Qx2M2uVzK5PDf978BKmNk9jBTgKVaNaTyAeyvE4n2E2f3",
  "key15": "4ZKh6ZP31DwW9WhapXDheKWGrKypZ7WhSugRnRfDHqDdYNdqYHFMZ29W8n6ihga8CNT9wdSBSBUb7r34xPZksBX2",
  "key16": "3nkAX5CgVLchatu9VMtc5JrxZQsHZSfuTqx1wPBFYt1J5UNDNVPCfn4BvCsF7qmNi25h2nQFmNBUrEEtW8Q8gbqz",
  "key17": "4TJP7SvJBweZpQfaP3TYEoncWmLhj8QcXVsSSAYRYpkvX2xtTFPBSegFm8qKg5utu92jtaXdqA7NMWH3dFGoeBCL",
  "key18": "44uBYzoJQFsJYumDfn66uUUTTM1rEY8W6nJw1QXBAguCq8fN3pmg7Wyy6msuh48tW5isur1M2xQDjnttEzYu4Mhf",
  "key19": "3eehwxBNEuQWrT4k8yxEpaDCxP71hKeZxTzQfkFXj7RNzeaszgU1TWnyUtGSYZp59AhG3ZsQSU58knxKJwAVcyPe",
  "key20": "63fDesiUSWCPUYRQWA33nVTUJPNJgp6qc9KystWQhtJ2AoTWcuXJ7hT1MTGwmYMGBny3djTNWy1YMf2VRobxWMCg",
  "key21": "4AijZesXFX4WnjADxfkxUMEVP7ESaZiVE2SvmgV67Vkd2NP1Lk71JTumCzpLP1AQrDbw95pJczvNMmFRKnGTJwhH",
  "key22": "3hSdffEkFm4uepBbs5x1FZ8jWw7Yo8dRHKvMLMNFHjUGna62pxe3VTRPJn6Tjt7z24JPnfkG4khGrJ1ifiSYzsVP",
  "key23": "Cy5CGYVmzP2Jr8SyppJSheXMma1ZeAUVBmr8GtBnwVMfGBFnHxi9NQ4wSKY71P1XdYEgbVAGfTPb4Rbgf6jv3dZ",
  "key24": "5af7QvXvZDUT9XcJtfttsH5y9U6a6M9NSckWxLLLRgHhDDfA8bhhtipvzffBdvAwVeXEAFpKukWMj3eN52j1nxFe",
  "key25": "5mmMUYcMGfwJZTgc4PnM8U1TA6iYDgwiESdQbYoTcmTMJbusXW8Mfo9Gmoe9a2jbdWz7xHZE5GFwwu5ZkJCduJNd",
  "key26": "5sZEfEeLDRDW4SANR3Lp8g5q89vBY3BQ1UyXPzmoEMqZCcoRgudstKBx13z8SybM9kH2QSVDfdzsWGmHDuey4U9d",
  "key27": "2vK89xxYs5zA9AA7PAmr6LSTdesBFUbz5RstGe5vJvXscAztFkNStSGQ5xaA4uADMAuhCnXokpy8ATfz7N2v5pq4",
  "key28": "i7UGGw6Se6teeAvoVBAMZnio1rWLGpBPEc6NeGTTYxsujLVHcuXAmjeeaZ9eYCQpnz3JBb6cTN6DyoEDxeDMVEY",
  "key29": "4zQ4dxjDSnYef5DSSRfrpm3fK2Y6mSn5dbPwnBSPW9tf51xcgSEdZRVc9fyaTqehNNaDEge2szLjkoy5apV3X1V1",
  "key30": "2VoApdQS3xgQvuQ9eU9vR4T8Kzsg2ruLwnUsFNs6ypz388KSyGTqwxQaC8cZiSPPz1F9rTxoBBf4WRpc4nqcB2fn",
  "key31": "3eRHHLmburjtf5Q2gXPsiyGNGQrjwJETkoySv5CLDCf63vZCM2Jc22BakrEovgeZ9QXhXQJv1mkrEZHC4pBVrr2v",
  "key32": "2C2LyGnSrvbQDNtfZbtQShbRVuy2nwMS8H1as9Xuhknb18fN9kL4qe7k76PMch9ePyW4Lh8XUATgxBdMo97NRQUC"
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
