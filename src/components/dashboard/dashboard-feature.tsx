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
    "5ub366PPMZeu42cGeS7MmCEXCJW9VqDAno2Bz32q3HVdJVxpryJUrGcak54xhassK7BqJMifbQGX4nLN39oJoMWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28k8SMruTYEenXMfBME7ifgYPTW94mz92CQ6KAeWo63rs76tefrgd3dhkLzMUW5qLbosqZxTnWYJAsXLj3sWPXqr",
  "key1": "4hmaUwC8YCnh3fBqRz4jzQw7M3FZ7yMZ19hhrnhMdFufEFHnfnAzQYmPnVxW5gEnCXYd9cHEMswpyzNvT1Mssn1E",
  "key2": "42c5UbQjarT1vM71rGbQC2QKMFYTrR9WzjCuZCQRV5TTb4zTbXnR6kyjty9VjKu8tgDmycfNK761s7vKMoDNJ11j",
  "key3": "5dxHqGTxVDe1CTaYNAYV1qQ4rsjob27CKo2S7C8xkTFfmrQ3AevQJpPY4wn2yaXQV2cjkevNR9ZpC7Wy43t1fMot",
  "key4": "2zysVm9g3DrJd5C91t8X1e1n5X96yAQaE6qhwtqcUXFFR6D9gEHj9dH6mC49CaxZxrC27fGBapS3Ywb8Hxr2kCxo",
  "key5": "52Sv11vRcPYm37ksPv8EjQqBfgeFyWgvq5KSVMGW978u1Yvu6ixgvWQti9LsdyJeYQgaa5E9wCp9fZL9dCVdtnCU",
  "key6": "3U3r92vts1hmaLgtoZVKkUzdJb7ifxWX8vAcxgQ4iVoEpt8Hk63U7zbuv7sx8aA49HoUw91QrhGk2tBGWoZ72RKR",
  "key7": "2kuq1NBb6ZSDSheUXNyBcqcEP2TdYws9vzPmpPdTeXxdbUGmSQs5P5ti41LNTt4RarhMgjNTEfJzH8mNVX7GVcKB",
  "key8": "2eqVC5SDbXMYzG4DRuS1zuTN5aBHfkMxhDm8wyNh9M3fcJDW2tS22Hu1vJDGbnAPc5cJ4r3HUowtS9JWparXGNLx",
  "key9": "3PBWrmCMgjcKwppUXkf9mbgKfjCqBvPXLwCZMK56MCpSS6twTjmuJ8Xz6U7bwuYETj9ZeSCoMwyM9XyewJbGkb6R",
  "key10": "43jhEmDxwsbrK2GhhffEqSous5C8EKZkgPb5u9F9WwRm2V6vZU8kqAJQvZ7ocR3gmhYkVXaVgPcoQbiSEn8DvdLk",
  "key11": "5E6ERKzQbf58xqWcnEmuQ2p4dHTME3EZZngdEu3xNLZhTFfieWfcfetCV7q2EDia7nTftkvpLtXcqHLJjhgX1gC3",
  "key12": "3ghXtJJSekfQoAeUC4kyQ1kySfB95bNrSDXc7Zj6XUGo4yZtbZ4SJLX26GzRUhttwqJV2aGqLP2H2eMU8bGBcwXB",
  "key13": "2RTbZ3u6Tbz76Z4Bzp2YFhm2ASzxwSZf9ZwnBGhw7JjTZgojRign55LoGtRKgsWotMQBwYBnFjaBDTFH42G4ZycF",
  "key14": "ecNpz77uimynmMxLN5rxeLHB8T4XZ9uUNg56ZyBN1fBwSnaVLTpP2pWiWeqZtffGSh6nWN4UJvwu6HS9LWTbN4C",
  "key15": "64VxCJuxJTjv8Nn8G2ushaDYeQzV46JbZn9QTZaa5MMHxSGimzhom7rFtquFTYDJK3Ef6B8arr5vzxHFAnLvsK1d",
  "key16": "nUHxWpKMrUXsUwsDiwGX92FuGthDfYg5oEhrZ6RkgZ7jF6HmFzFmjQEAhRpEz1eALeJzyq8RWFyEEk3KAwbjhvG",
  "key17": "VaBXGCCWACDPAa2JKTH9QkfLqwZCfXqXs1yahMd3xR73iuXpfybvAkQuAiHGspDNGYKD8nBUVGEi5uxRs4DVne1",
  "key18": "4PnhYPrWuWugUzVpjoZUanp4S38u7SCkAt5H1SQU67MXHonAruJUnH9dM4VsZwYjrv3D6o8z9qWZR2htEHGNcb1c",
  "key19": "2TirGUpkwfs1RNnqoD3PjUy4K8s8NaqWFM7u5kfQxRRwjwqUm83ES8Jua43a6kmvaGaRTxtb5QhkPCKT6H5xdsN9",
  "key20": "5k1XFNkJu68Hxg9vLNDtL6TwomwxKZ1w63yYUxKeJ1tqdzjCdmBQzcuYc7e59ZCLaUEoxBfmN4uWoiFrK3w4gbJc",
  "key21": "3AbNomvYWpaM6mtuNFSBnUmYE6e7H4tbRoMsugsJATGv75WmLkp5xg26ZJU55ym8LaMrpXmvv61SPnvPbUY1Q1XW",
  "key22": "1iUu6FSPdWKTv1F9mGWMxQK3LSUcKsrpe5QRYvxMDUbHsECnXB6QPiToD35iJAHVY1ras7RWvN1cTQGJWEk8iGC",
  "key23": "4xxztiNkCEzvsad5siTdmKZtJ4dr8vUsw2fgSHb4vnWkWKfBv8nRUzk2HEcEaXaqddvSaUsQb8vmHrokGQH1G5po",
  "key24": "5YYA5NPHH5hX9cU6jtxsxp6RZnmvo559fbWAYJ2mrRVmm7ZnzJCaVizZd2R9SkuRBUV2Nj62vZrPUE5Q2YmaRPWc",
  "key25": "2RmE9r9rR6kQBNug4cpZnMFEyNysqTTkZ2U2dAkUg8q6ghrHCSCF8JLKwLEbWLEKyqVK8gjvA5pfSGzW3aZ1e16i",
  "key26": "CpvRJGGosMJ48zWiR8YhGB86yrxnstDTbVonouXT1Yu44M1XB7wEpirrFGGeRn5LzvexbpkJ1X5hNwVJ93FYMmE",
  "key27": "3aUYHe37nZwuE3MhzYMCsLDZ3bPPJ1uWQ9ng9qvDX3aFpdX91ppdc5ZKz9TKxaPiSAM8dJgXwb1huVmBWG12mfGQ",
  "key28": "4B8djopf12q1LYTJPWAcckiqetegGAaVUfyeKcPC2f5KVr821FCRAywoJrMaMzDJHdvJrmQ7TMEtg8vfdnXt3woG",
  "key29": "c4hAs1C9sGRkqSePnJyMvfKw2p6WPxLyfBz1ZX5V4dZrXeaDdE78d1FpMp8tvzSSPVbQKQM6tnPuefXcFc5fb5L",
  "key30": "48hXvJorU25EtkoLYnQsYddkaV4VyKNhdHMSbqrHj4oRpVUDWqLHYhRaafkJjUMiXoXrth6hnJeN8BkjvbfWfsdG",
  "key31": "2YhGUm18cwuMEaeQWcWK2Wa5owogmKQHh7WLBeF7TCVEz7f5XTXoFxwfPn87D3Krd7RAheqKcz8oTXvefhPe7YHx",
  "key32": "4LBAVu1Spvg3RcqQ5YVfDeudBnLW9Ghtg95fspHgSTko5V3Lq44v1WGbJcbimzcspiZBFFXQSFJ6VLYYA7UGXk3h",
  "key33": "5hAxcXAo7P6iQno5SotzHNqTgZgiBH4F7hEV3p2CJX9QKSR6DzM7WHGtxFxo3rs49sXysuTUjf9YWKkSby64VXpV",
  "key34": "SZTsfoJu5idsJqXAxeFuRQLVUqTQydTrAHw2PjwZd5AgBWoRebtNor3ww1XMYBrNsaSm9ew1SYFcPGhtauuM1tc",
  "key35": "YtZXkerLseG5iXSKfxR6griQkXTsCMgQKhvrL1zhosZJNnm7RYcXcvfJbHehtqCPFMhqgoEZ7jVz1H2oNUJbGHq",
  "key36": "4vmFp3MJyWP7SFVdyf3CzkRLiXxMD5TSsVanucwMdTQX5FQT7DLZhLTodVKrZ52Tx6UxzhkCkNcFXmErdXGEpuM5",
  "key37": "4uXMDT281yTFkxY5qMRrYRKNTjgpkdddMfjpaYUTyymrhbmETQ22ejH44QQYQgqVfPwjjXbZKJkPjUb5cheKC14S",
  "key38": "46XyBAMsWjxksLaEa7RpYGEADUuKUmfsgHug6sx3rdDYbg3ti9ok28mLcw8Y2nkKvm1jG2aZARGmeCrQSgid4cAL",
  "key39": "2xDzHpLTCFTkUFmoQFPjNdgB4Ar4gE5GU6Xgn4XSwkQjvandV4LrpwRBwP9FvwzgrTX1fcW4F31d7U2mGX3r5w7r",
  "key40": "5wDon4NQ996L62k4NtCiNteHXHQ6bqx7ECy6gXMbBnCWWxqwrhc7cvJTAVivAWM4Lf13skBmc51wSye6TJdAMZkL",
  "key41": "5bjst7Qpbe6Y4w6yNkXeKuBx2kEJtqhu7bb5ckjF3rgrKsGcKMrPKtPyhmKArBRYenTgsA1ikdvJqEWycFbvc8PT"
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
