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
    "2crr5utFharSjhMg2sX2cuShwq8zRyexJspEYENCb1CKHcwhDDn9FGtpLgPwhwtYXYytg9yrBUoTk4wFEbRM66in"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JBeANZSqQkj1APoawu4UKEUKQwbEaZxjHAT1n1m7PFB9aMpx2sHv8yw4F7a33MTQkPRaQv6RmqSYkcApLe29ng1",
  "key1": "2d2oKeBn9cTz1vK7WgQFnx6HhwZEuzm3p2Jju8VdfqNXcXzzfBoD5QxrRYihecn1tLxRTkDHkKmHTcxJPaQNCM7Q",
  "key2": "65FcPfCoUR4hdAPN7coFst7ufC2C8cRied3vsE4DWQpojw67GLALNs7NWiFa9JPU2aGypvZ3AoLZxyEkQR1QDWPZ",
  "key3": "3A3eETv61tZH3Gd8NpEB6z9cHDyviLWikFWnHq3GMHfqSZmymc5hKNR2SqRtCw3BVoQ2uk5EwiP3hJweJLwKTqTx",
  "key4": "Nku8eAoXxxiytJAz6imYfR5dSNS5HAi7VcwFZLwdEaSPLJHJopDzF7A67tVviBwCLEmXWCX4LwQcaTLVk23X3tV",
  "key5": "7wrNBmf3UeZYiLanEgUeDqVRjQ1vkr8Xa5Q5ptGe4Ze5H3T81ndWaewnG4vJrVDS28c2AsrAM4j6mxBUrwPLCsH",
  "key6": "Viqh3qWkQANHEaR8AhEaVL8rGuNua7Zjd9eQgE34vwpvcQCWQhmxQ6DZhycxzPK1gTuRQtDVRwPaTifhjkbvN9w",
  "key7": "4cCHgB2VYiNbzJP935niQqdU15HVfEWEdFqDvKefkLNggKiFaRXgMvsU4PJjPDnj4mxiyRzyFhsGzFH4YYmqPBPh",
  "key8": "2Bdnfef3nCvdnF2XXxZEWHSU9ijqcLQBYooQZHKhyweeoLuyx26TRPE3uJnvn2R2HktgLEXZLQMfYWS3TaSFuUSy",
  "key9": "3WSKYaNvaAneTBG2YPwTmN36SRQKxo4nscHQXqEtqLduB5ey5u2Yso3oXSZr2i4vN9TP22dsB6Nu9ZG4DeaPrxJN",
  "key10": "3Rz2USt4xeJKNypodjbcWR6Ru6umK7uDgyXL7E9dd1fLDDLMDRGxwZAFhk2BJMbKdQAbcWYVDXGYFLeroQv9ixu",
  "key11": "yGkeb7VjxGTc4mzKqU38d964UpCe1FfNRYLRU6reZW3H2SGP1N7f2AQHGcTA4qrVm2Mtx7PxGAah38dq55NPZhU",
  "key12": "5Gcq5FopFTpvNjALps9eCzmsF9vv2kKdn44xmiv79CAsKSU88xRbULCNM5UHBekg5s3r1iJJ5vyXS5dBCi8GCczG",
  "key13": "FwRQbatHhtmpAdixxz8q9Z6pCZ3dLEMCpoj5y7jY26ZUWcHgbXccQ7TJ2B88iExiWm4e2rzmqLLHzi5evcN2gx1",
  "key14": "3JTgaAv1nEBt55qMDuFDQgfu1Z7Fngk85M3gC96tBrYoQFYMNk38uLWJo7L8TRm6LAnWj9jCwHsK6vTM1ji3J6Sx",
  "key15": "4vTsNQFiksMiUZnMsXPWYwqNqZJa6nizDJU449BvDHC7HuCeG4fJH4wjAStPpeuPFnzuQBQGo1rtNMJsQRhfYGkP",
  "key16": "WsfSAs9xeXTm98MxUAiFjMTrGFSTMschaUxccXYRZ7gBSEH5zMfJHxkW3WPL49uZpjzNSRFDRJ3C8qMH88BA1hR",
  "key17": "34gX1pjvEfZA22fG9n5xKG3e1vRNhPqG7r6hWCRSfvWgch12YHkcqGyDSNQAoiDxZsafgCsGjSDDKjKaLURAVKwx",
  "key18": "4zrYGpRDPpFoWAARwx8fUkvTTV4XAZLwaquvmDZxk4bFS5wgPdz2bWhh9WmqXZhS6S3bcYvCYgxddYpz8d7awbWm",
  "key19": "4d5pdvMKxkey2m9PB4kupRb6iMVKmX8PXiomXXTRh82MkUQZPGAt17KbyJDi9Y1EtzgzDotwQyH1G2bJMwBfT8ZS",
  "key20": "4La6j9ZDGwXimB5c7dJraQHx5ThPWPtff9YvUzqdijyuhf4MZESUjPiumM1rnv8Bm5fuyNNSDTZje2sjTUCMoiMB",
  "key21": "3PTS1ujypQgArk2QbfGSrwPsz7bW3NeJUWSoE6AEAZLYVcVCEDAY4gA5ob8rLB3RSbgSNnGwvYL5D8ctejfc2T42",
  "key22": "45NC8hrAA6gj26vugDaNArKuWGgPbxpVZoEQJ2GNC6Yr3uTxEpJjDp5tgreNtRBR3SwW8kBfth42AdkZD4b8koyB",
  "key23": "2D5PkZyd7t7fsiXAbF68YNKYD4W8rcw8zJ3ktnq8zN6RSPkFRbU9VBzbXzim3YztEgNTxpBorvqWbXNu8BzKz3he",
  "key24": "2WnhaDkVS61LRVdy9zYHhfEgm5LjQrrirLCT7YsX61vZMS1fQDWcWifNJzPLqorwuk5DgKtDs3ugsysshqVWkeph",
  "key25": "3LGnAkdNiG56F9ETcdU2u9r9j1GjPHe81Z2JLNG9FbApcerURSXZpobQCQP5WxC5v7Rg2sufynP8JXir4nKBGbw",
  "key26": "uNtZ4zWRzgzkBjPKEhJQCTr4kSmQWXdYVx7tSD3GMUWTyM5AYEaXMWJ9G7YDc2AbYRi8puEbTM3LMkfEa67bKPJ",
  "key27": "5nGHNZcnM8aqHy193TSWuRCVPs8JpzzYcdf9dqKgV8ksZ13YAiw7aAPFhhquBJJddsY18zZB74PnsWdoMkxnvywS",
  "key28": "5gX4jENA9ZuEN9LCRf2oK9TXZSCPvFjDqqiBkpAtm2QSzWYJayB2yfuGz1MRK1Dt93HEJFaWWeyxKW78xvD6sHHU",
  "key29": "2qpNusERpuuudg6NTsouvMqfnxKTCLZ4JJ8aHhSN5ZQb2KjiFdyoz8evWu4cCg13NS7xoWQZSDggMLDjnS84GMpa",
  "key30": "2a4LwDFPw4FpmqpoTuuzAYDZq8eh3NvRZpisZwrivhkHV3e8Vpbj25hanvgERoooqEeCnicashJip4xzUSy64qcQ",
  "key31": "4Ro8QD8ySoHFLRrCnY8sH8JAbmmQug1d2gdCNPYZb5dyWaBRwXGZF1bvLCtJYZqxyaCMYHYHfrBVctJ1pFAYhGWD",
  "key32": "EjTJdty9LihP7QMDDZC3qtvGw5aXsD3YJXWADr1nQcRmohDkGpT3Z7fhZWRnzdii4hQtCBhii3pXUCqetYBdt1q"
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
