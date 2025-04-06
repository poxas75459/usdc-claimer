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
    "5HRTft1xbeQDeLyPEErChUCbDdyZazVRSzXy25ixJaisSc7rTgcnMdww1zeDYiHFCHLysfgeKhpe9sFriExaY6cn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5npjvruPHR4rQ29orWBdQAEzRW2nZGNtjUjSKCWyBtT3qswoiKjos4u3gEC35g5XVEqWvtR3zCEuduFY2qBApYv1",
  "key1": "4gZ4XfPzLGHrabQqEGFsnrUCi9Nz2ieA48gQKpesgdmvWn5cgjwPmZXCRiLeALD7bTxTcaJTieuLnngUhAt1SaFM",
  "key2": "48967sJGBKozKNGF6QuLu6HGWeBhMRh96BpQaWP6yon7FaBtxRKpmQBqaefUqJ7LYc5VQW7Y32zz2VRQKi6GUpdh",
  "key3": "3YdDvuG2awo6s6iL3QGaQEG5MzijYUcSmg1s6NfAsLiBUaLHh3sPpvqfNzZnpmXMsrSNbBrPakzFd3xyBiuVqGMk",
  "key4": "5YmuYVjNw2Bh4bijM942cTVGiiPUPtT59zf7D88R9ifio9fHFb5RuL6ZJDxHA2pZWMREynbESaTHkXgr8xfuiPYC",
  "key5": "2c6J4hzZfVtQCnN9KWTvPKzPcUnd2muHxZgzrUhxkCP7Y9gKU17YMukxdJYp38osLXn2CyeN5uohAT7BLTWxqqk3",
  "key6": "B4LodS5GZps3xEp8joSmuX3ik2CZyt4zhiq58ikNGwuwBYs8PXSBnEg1NuXpxCPDLWZjHQZsjQ1iytTfeiae6zq",
  "key7": "3WKdysKG34nWmQGmTvfVH9JwehTFCPtQRV5qduMr8TFmnmz9VdAkRsi8JFsD1cQYnXHRFySeonid9gggKBskpbAw",
  "key8": "3eVotPSq77uyC7ew6CwTBoi9cTLaTLEaAfCWo6ZZ4apsfNKhoyR452gYyVW7RQjMjnViWuJ7bQ8S3jqt4UbVfTvo",
  "key9": "2BEoKzGLGvMV7bq3wVLZbLQebj4DHL7WGXMFLLJE4PuK1TocezEydA9nAtcpCAy65PkMioRknsk9tyuXV6obcUxo",
  "key10": "4tvNk2UDD6GNqKupHa3A94yjS5q4tz43AEVKd5JNmUPz3DG7WDqP3bT3GWhbNNGanWSVtSxcyZbrLKAUhDJtG8yT",
  "key11": "3v5d2R7Bvr3z4iCE5pF2tvZmAaGMFVgjGMdrWshT535AN4msTTZQN7p6EaBZBkNiUxDkUsQPsWxwTS6sdSxziBB3",
  "key12": "32KicQUgdDM21jRRr9NgBrCo9rrSLu2ikqpFmWmkupzeBHCPchdegz4FsrxpKM5bHJYgwjZgA7yMQ55Yk4rYRyss",
  "key13": "2FeWUfonWSy2bEmQYuyrb662jo2VART1XmX6wGL3pSykjjNHtb6yMr6k3c6E29Jt4PNqyv2kWxxvtGmVjWLngJyH",
  "key14": "R9Lj8ZbgV7m3R2zJXHMKCLuvxA9ChgHsi8oDELUp1KiFxRph34LKPVQyXihGfZt5Y9h3anV7Fq21q47Jbpshwad",
  "key15": "2TrKZQKyrVmMfMwqihCcgMPnVsGe8Cov6wXWcr8X4z4AE5VuG23KUV4QX7swfoZaczu3EnQKgZFGetzmSb6Corjh",
  "key16": "q2HcT9myALe9Rhw1GeLSebyAyTwsN7WhG4hsp6hrgyP3PRduYjsp4YpRzBA5m8UQ3gXscZbjXdqWjxorsKYbaYN",
  "key17": "3KR3g3a4fW8bKEJFNmdqLE5GFE6ZxZQuD9pRAWDcY4zm14ZMMSKCEeBeoUcuVEFruCpjNCTDfZ2r8B6JDfg2CUiK",
  "key18": "2te5uSuNTWLMGFVSfChxy3xqF5tERuBe5YzqZAjJhQbTqu6UrpLkE6emS4JwfrpgNVWDfXiJURgXy35x4LT81cXh",
  "key19": "5FEHUk3s5jvRxeVrxysCYJLmDAYm1ZCp5B3KRZto6DFY9wsnNpHTXXCLKUBDUQHprB4XpRnHw3DNbEEnHW8Uhhoi",
  "key20": "5FxrVz8ZA5KPSAAdZBBh1HdHtkWJGtYMWLDpXV5SNpA7K3DGPSpwVG4843MukRq6WEPw9Z2zbrpjccJPdzdkufhi",
  "key21": "66rhx9BCnKjUCJiS1LH4F7NBSrtTfvsfMmTgsfMZLy2BVeSwwdFgwRra7m7d5QHjY7eSF3pRCMwS3coeY9rMrQvH",
  "key22": "mveWmKxXrQk5zvniEQ4a32NbxUG4ofvm6WJLFzJ8dgbtXSb4FBcKEnVXGmkyihgtgQ9RUQYJWpD9x5yu3R4ENg1",
  "key23": "3enLji8UkPaRKFqVmYsLS8XDfRiLzZdEZKp16GQ9VnC56uc7RyXowDFSYsV8dQ9bKhMkp1gmfkMUhb2jbJ8CGGP7",
  "key24": "5KLwU5AiLULAeVz37eGW9hyM9fYZtYyy3JctxvQajdd2BjM7P7vTwnrc8SMuDPqb3Sj2bjycX8Q7cYp4RcxJY2NS",
  "key25": "4X6rS2Hz7mzoCFUojJnX6ovk6yc2FEvS1F2V5hjgTi4rG89xuFaaxemYoGqWg3NbDSsGoxSm4g5XfP8Qq8P5pNbB",
  "key26": "5wDPEqvDrobrAiRb1uStqyDqHSfF4Hrz9NjgCXPasD3j3mYjm4i7eqwvhCbvh6fkG1mjdbM5Mpiis6Z379PP4Rn8",
  "key27": "pK6D6MUmU8Py2KzD9QMzL3TfQ1dsCB1JBEe33fDiWs1rnEdTrG94ePFhVC4zQrj1W691vBUCHxcBKdRg4F51iJ8",
  "key28": "25GrgxUef1FYQJYo1yi71YceTDfAJqV8e3r8DtSLaUpUfSpMU3wmksmELp4xu2aWufn2aEL78SMepPGhYSU3wNbR",
  "key29": "m5T7GWrTA3JvxeR9C9RZYJ3NJWLZrwBMyeRe4McJCAecqUM3RptWhNSB7mFyt45PT7xECQvQHMXb1ATFRR8JgGs",
  "key30": "rYXXFQFeqVo5Ps4WyveNebpTmQBmYXhVhD7a9eRCoqSdS6nVqaEjmP83zmQMW3T8VfPtpWgxS6WwhvvQGqXDZmP",
  "key31": "3RFpLqC5JaNkk3XY2wBscBf1ovmpPWAWPQkg6m49ib6JggivKV1pdUF8TZqRFsnX66w9u1XB7hRqkA89ApMaw2c2",
  "key32": "4iDx41dFZoWPiyntroo4bUL8pykT3ykLEShSGAc6TL57ZkJtKB2pHPeGvZ3Z6AGiJBY589ewQsUvtppw5nQWqqY2",
  "key33": "26xU9UvMLzxrtGkayG3BGvDHpHVW7j4XvZgtFXGbvZjnERVMkUxQStkN2ut9AX5mBWibwUkWmoSijmXeLxp6ryzN",
  "key34": "5iEVgU8XQpCXF5qJwDUuxtxTD4DiEeYuZS7UfgHVFUqGkNvuu7sCDJn8Yau13vf9suUqNnatmZGA2cW9onb8QNii",
  "key35": "86xCQVx7ECbabpiueVBtHBTKhkA539ctiw24uw1cKok5f412Vy8Y8RQRcCVcSy8XviWsGuayNZC8hnREpDvwVmW",
  "key36": "wVuU9YuCD9Av9K67DmYiyewMCvHVMo2HLdWy7cagNC74bBhGWiup32huYVAKgD1cy1cg9kUtxPnF8MLcKN2JZsR",
  "key37": "2c9EuJPRWJVJbhjqzpvEMjSTHF1QGJXj2MmKkYETku6jfAy4fXzJVVvSoArLmdyTJRVgESnT84tg3ztAf5rFyAJs",
  "key38": "61uauJDYGcuqnrMqKQrnTcqDyt7UHcC3vPVGHXsz7voNUKiwezkg3jVktqpwasw6wue2PhWSRWm3YFYZjA2a2Ekc",
  "key39": "4mEWWUrGTfjhQAdURZEQxMwenCq2dggZAS4sUqf7E1tUNV7h64ZNY8bBTZUDgG82RoNTRbPCcZocL7UDT4nf8BR9",
  "key40": "5ouV18vQEhg7FyFgPYt8ftnEuCQtHBtri9P2Fmj5yCREvSeseZbnomHNunqih4u3JZx6kJG3qzEBp7QRjncvwgcj",
  "key41": "3eAFNd8pp13FybZS2aiHwQHJPyvCfBWYEgnt9wVbHeBdLJMDkomQhmSfZZeVbVvhiKWatG7i1TvXnKiHm11TBaHg",
  "key42": "27mzW6NBwVShYxwEQQHBNaaMLEkskEDa2eZPLwkAB9Q7mer1XLYYsbKSW2DL8MrGC4G6KLqfJu3vMWjKaW75BvJu"
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
