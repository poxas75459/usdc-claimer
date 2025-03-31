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
    "3dVfaHZxKszcKh31V6ZkzH4R4Sx8KVMfMFHSKjjFrdLiHYqm2kDbqxArsBjqoP6XtW1X9LhTiYXMadBG3iZiJU2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gHCCHtcipR82moToRbkgPs16gZXUkQiQr5vLLysoaApaq4YxXShqoDBMNNQi6tLnVUgiotdLNKNedUoMN1dDZPs",
  "key1": "2fYGrv2ZeLdwGQXue8xyLUT3G9tmthX9eX2HmHLHhzSfV5gGF3jizjFRjzUMwAtqUcXpp9HFX9vyZkaQL81X6Bc8",
  "key2": "4waFDJvzXANPfCxhgq4ErTzpaSPMXPSPBWnXkSepDPfWaRxbuVehs8sv3avzhH6DAckMfQuE2Zi1P9XfUymrFQaF",
  "key3": "4iaste3qTKpPzpMbKs2Kt1wmtAXKQ95N3aBaMvpSsDru85bM7xCCCnocRML7WssVwm1UfU4svVMBMcqtHiJRBgr1",
  "key4": "3pauM1JmRAnvJAVcPHW1KFyNbnzooro2V1LhGZgEJ3MaDzfRK5e8AQYs7Z4nPqhWTv8gop6pKmrPkQ64NjdZoHvq",
  "key5": "4JoejyrrKbh3rjfB5rJLMBHdkRerk1EkXLq4G6VHwfk98gKPMeUgn7XYE1ZFx4VqQGKdMFqCRqaoqTcLz7WP63uj",
  "key6": "23UsCccxjNdnaEkGnZqVx8EeGN2ZpL6Ynd82XWpcsvR3D7YdYeadjyPPaRTr7oJtrG2PaQk1pKFDzpWKczaa79K7",
  "key7": "28WByBxSP18zUSf3oqYSNwH4P9GfA6BCcJnxSQ2H91Y6HcaNpKzSxFrBonsbnBk5CKksej4nmEnZhQYzHvr31EX8",
  "key8": "3sNvefxeijGy6qrV2Y9GT7cVwxEWpLvLtPBBiu1XszJp2qFENuJQ8HBeMVhRyQE3ergJDSWb3GKVK14vL3N2xdb2",
  "key9": "3j9CSujHUgsqoLmL9BYohkenWDuEEXSfBucj35hTTbq8JUS1oBJzjfmTxHYKeJL7xDcXyZuYbbj6PCieRMv5j1JW",
  "key10": "4HmiNSaEed1LLsg2Fy5dvb4bTAzBweT6Eo5ch2tFcTNERMp3srmcpu18rQyyWaT4sixEhYZkR3mvt6fXGUAbVuow",
  "key11": "4LyhexfhAR3AeZp9e4B14UD1umAPh8xW1FyVFWVfsjT1RJa8t8eygCcrxYqAHw2pRXSHNMq6v2U8HEXZDwgLWHXV",
  "key12": "4PWBBrUFEbabDkFGnwa2CgvgXNZhjbabUJ5G8Gm4cYveqVQDX8WShcgeveCrBpsn2FkhH4zXCz4M2UQ94dzWD21G",
  "key13": "2hX4vtMXXLfib8Ad2whAh7noorG3U5G7CzE4kxh4QH1rfVsTd3SVWjZ3vqnTWMThKoPCqhWcYkQHNspp5jJTbgRz",
  "key14": "5dKTkWYMFEXx9VN861VaXx2HHX5Gi2haARgjE7a9S6RJyNXgi9v7P5o49gnTyynCDRfYfYrSdDfZ1Q5dLrQzLxY2",
  "key15": "4Bx8nZuSQaDawb4Le21Nn6usrn3UMKpEtetAajjtQGsdM7J8MJozhwpjcV9ibgu6oWvEqnANJyhn96LbEJtPgPgT",
  "key16": "3SbGj5e5xhdKgn8cd4PPeqo5mbUep5RSY4SCQsWik9hQfVZbEkYKw3F7Xpk2LTXmFx2DJqFyS3wN5wAcixh3i3GG",
  "key17": "2wmcVqtSUtRt8HJNfRgwMh6nvmevBMAzfEgcWduUuX1YczYcuEFNgzL6ucDX4ZvxXnKChrCQENoHNEkL4D616nkR",
  "key18": "5xSje2YTQ5Ns4HyyztRTEWmFokHG2pgftWabf9JVbto9fYZrpE9xWfSZZceRtPvJXDNE31extyZ7zXXbEnZGuN9z",
  "key19": "sWW1cyBHsZdP4EUsQ1aUop3JAnHECvDA2y7fAoDjGevi7pCvfFuVtojcTqUmwz4CzCG9AKe92eb4Q4agTMmNGeD",
  "key20": "3u5V6FJ1fSw17kuFcgaaNpsGYsSz7XaEMa6NGge6z9sK8WYJ1x1G26VJAdCbdaU42FvVq7a61sA6yCe6WLC1sXiK",
  "key21": "2E44NruYT2n62GTB2EpwLxJDqHyZ5nJisRwp8bW8yi8rRHnxrjy2MbxUGQAZEsBf7GKCg5EJvhSi4EpaiBP5FNY2",
  "key22": "49vVRSAqXETab1GfiNxEbgqncwtB51LcxJWKFbAMjUYRQwWKqNzbz5qFLqDXF4oYCvof1zF31JJTaBtGLgx3NTfN",
  "key23": "2giHWX8sfEYiuSQRiFXoTWn7ScZ1nYt1Knq9uQnDBKfPLrnWiYdsYVJjCNT7zV3sKWJVHi7eeUpfh8QgpM3d5n8y",
  "key24": "4Ub3LuNPAP4jdmcwxgtaGdbrVp3TvsU5shZwDPREWp2hUMZEZ67viGPb9PqGdSA5sTvmb38gQCHdUKqUBCcD7Nf9",
  "key25": "4obic4xk99xgirzufb1z8AHuScNnq6sjARdak4wVSx7dbhuUiUx7FgGmqgzABARtQnyFPNNaiEuU6MbTfrCNKQcG",
  "key26": "unZt2ndT14Cpot1R3S8Sjdp8GruU8XmaznhDb1c4jYPDywcu8gZkcQkrcnYZw5pjZBkxFci6YtevVhnUawzgEhf",
  "key27": "56dfAmifsJGk9ecugkTgfGqZR7wd8YTwWaE81fqKfpLzoxBqhia12QRXhpGvs9zfc3TThfuZPkGCYdpZcW7VSxzN",
  "key28": "25yh9TnSPYaxcW3praKeoSkp8QCL8hPM7Yj8Gd1RWLv1FrtCq1YaKxEfpPbN6W8AN6YMnDUu5CfWNjJAUnX4JMgT",
  "key29": "hy6WACCUES9du89LDZthD8pMoBacdhbHmfQRLf9zp5HWsShNcQfFYs7ovTqE5zjvHM6cLAHPyYQ2RUB66teK9vb",
  "key30": "2xtqNAUijcRLm42aSxSxM18mi74DfXprRZ4AuBW7o3Kt7LCsiZquBQsH8rx5bSg9SY6XqSsFqkysFK1PsL2kbDhp",
  "key31": "3wYNotBV2dHhjeRvsvUrnxae4ztrUBjSZYvA4jAdD6r3xdds1HSfBoLCozod3qxECC2xYiMu1ELTnjQieqtfX3w5",
  "key32": "5Sxf4ithA1oneLxpAN5JkRnpAKKJeZX1DHRd3om5FtVsdCva6qRjNjVBgk63eK8ceFc7muUJ5sPgip4VpGAgrrbv",
  "key33": "2SncNSEFrAdidfC3xZ7hSDYbdFGGcbkyekdvZ9zmM6rVEsKtpWoXQeERZV3Yiw9gwmxEnFEyridMfm3Ncq6q3y6S",
  "key34": "2U4EPnqrYxR8oxKaLJSryG15MXrqiQ2gHSU5GJui4xJkRqTo61b72AqjrP5rBXPn8F9coC4Eh5mPkewLSofCBuGS",
  "key35": "KdHVbvZenQTPnb8PA4mvk2ThjZTkbBjTd7YFnxocBcnDTvQuVatgRfmRyA1SJMERxmPRfrXkjsoTfbzdS9Ppj9E",
  "key36": "44WFDpWVewxFnQW3esY1cxHKLcmZRVxBcDA9UiYpx9jpViykURNMwV9qKK3rDbUZX3Wx8yK41AaJ9qCLfm4ea5PB",
  "key37": "656Dx4hqKu9nXm79ZVC38UWuSxQuu5HsAFqfNf6rZTHxESXdDNHwLeJe3AhZ7SPL3Gt4Bt8WGPSdMgANFSGzhTXW"
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
