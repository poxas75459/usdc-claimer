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
    "3b4kFC391rPUjUkS58wfsvzdPL6GRaCJwDzSR6bgoNQ5BvCseuG2368ZphKV8Fqn9dwBAEdmPPbfYeF99pJ5YUMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RD5RiLbBbuC8FGxcQGJNhN8opdR42AUNXohhfEubCtxe6WqYqNkxsZEpnssGMiPz6gxRz69p4hdRZmNRJS7VP7g",
  "key1": "4wCoG6ERVxwuTWdMcppfTmCo7Xd4grPZvghEfR2GWK33uacPsJCkK9dJmp1pfhyBWZYjWT5cpwBvz1sJL9iNCgZr",
  "key2": "3VUuuBvujVTRT6gSY1YfeyJPXBzZJYeMYBCckuv9EeFbNWoR6mdmKn3KXgfxTG6tQjZRRNEWLhF26DekEVRmtkG3",
  "key3": "eFMgaJBauAHRCac23DJysPBcqNoAzm4xr2qJv2CnUHD52Raybtmr1Ar7vtHBaob8h1Fi7jqnMLY1cRD6kKy3m72",
  "key4": "AaxRjeE3r7KfYhgcSzaKPR3K1KKSSkRD8CDdh55A8fWFE1UThJ8jAwyurptukBUDS5SVipTwvVD9QwtZhtD9pFL",
  "key5": "5cBpW9tSehDaTWWkYLDSjaFFxbwnBRNNSuHroNSPY7hNWksXgxsUVxAPVyr2eZ36qqCeEbQp4wtSxN5RyeVU7d8S",
  "key6": "4XtMLScf6grdU8jMzwv9RgUpkzk72TpDTZ5XU5aDK4sPAWdVY1XE9XDpqhGYWCcV3ZsnB7Xxt7RJ1BU688TvsKqD",
  "key7": "4V3QkbvAgogeqcNc9ehFdD3wBUwLKPnovNXtGWcHuEFprN5VBinRwPexcqSQFR2coij1sVfbbMeXjyqXRKMnpreC",
  "key8": "4kqFrv1KV8ihnaSmA6uMSXpbQy5nExGjSJkSyzk3nyN2323i8oFgaGYmbdSfnbseRst2fkq86htuV5y8Zg34BJxE",
  "key9": "ExjafG9qzhiaRmCPycBreK9FSqGp9QqMmaAyuTyRrKSo61E3Qb8hS5Pk8DsQC9zvGrKeUttzbYAKcMPKhRwZVh2",
  "key10": "58gfHLSTA5ENTpjUjq4ZXsMy5ee62d8ag53cgnMMGr1NxQ3PmaMgJTAotMTSkEhx8RJYBLW7vALZ5uEQ57bRPTjL",
  "key11": "2b8vv7KxNhWaUwu1uJTefisycdxLkwFhYQeWCEHWRKDMjWAru1PrUQaLpZKiSFGgqCauKRbMu8ZGggurQQ133Z9R",
  "key12": "NXPjFBFHuRGkZfqSMuQVNJnWLkc2U5jahgxYYCBYZYomtSpTSE6A1jeK9iqVNmANTBpFrqKb8Nuy6twmmbCsSju",
  "key13": "2jabMWd9NJovpGFCb2X93ZXnqDS7rEFX8R1nxgY8f2y8DngwLeeMF2NSrMHsrRk8cbd3bKc7XXNr7dqsU7XVEYcf",
  "key14": "3YX8tUhpa7Lo7RUfsu41f6fZWWwQWzWHcstXS3QjNwvjq8tGWeZQ4dgBLugnpR1zctW3LJcSF2enG6GSC8VpNAgs",
  "key15": "26Dgb1NmNjtSNoSvN4kmWuJdPNjZiFv9CtEdVksBk5Xb2BPKDmsMgxwgaBHzmTLkBKvGVAoH8WWimfEbQc7jQec2",
  "key16": "2UfM4n3iGB6ZuQ4DjjuFYY1Z3YSvKs9sJXVFKk1VWXfQjvTReQig5YRJxucNDJuyed7xT7zyJyWQBgrutGmE9EPi",
  "key17": "5rqBgCz3C7FWioNByti7AvfjXYFETev5ECgXXZrEKgwT2Re47Ho7vHXWPPV4EPzBeT2QhEUXtJuyjVx11kqyLFa9",
  "key18": "N6Y45CYsSVRKibdLm17HywZKX3U9eaEwa5hLAzePfRB3poU4QqhBQafULrC9o8DuRRQ1QmpgRNxVJ2aCmpq7k9p",
  "key19": "2NeJuJgtz8G12vtMMQaahnJ3dXj1xpC5qPejX1tLAiwaXpmpvrSDiC8fjFmovdgBxrZPczmuuuQ8w3ntmJvpQo1t",
  "key20": "5uXZAw2SYjRRfRWm8KQQezxSUxuXhAtwbFy23xtyhfnmaGDY6hW5aqbH9CZVndyDCduqDXA643rtFHURs9r2HseA",
  "key21": "RtcUBTDaf6wtq85rDNcZDFRWGkSvVKKwnWZhrLkHYxQC7bj4gSwgyqFTFMqjcDJPiuux8ueZipmQzMBk1SFJqy2",
  "key22": "4yNEMkKZo7PAiew3qGupv91peQjRzFsDZjUzZZjFGW4ReAvbgh4FJFeUnnjiKCDFjA39ghxA1MSVcc6s9pRAs5nc",
  "key23": "FYU9kSHPdDKNi3NYRz5mxvg5jSjttupoHFWVi9p1wUejA247cmL2jy2CGCxsqVgN1GY4KyzyUXzwhQsP6M14ADt",
  "key24": "39FPzFzZARN7byb25bfeRdpheFXSq3MuGhcfReaW5NS9Y65BRKfFVpYQTzr8QZT7WQaFf2n7xzD8kxq152WdiFyY",
  "key25": "4QpJPNqw2FqW94tvTpg9rTQRV3utcQb4QsqiwLRrJopr9idJ9rox21E5PAPXyhkDTysDTqmKLGuJPpGf42kqrCeb",
  "key26": "2gEJ2JLnF8sjvSDzC6Xir365TwixGE3ZqQyDtEjzrPtFHYdjxvcfWSzzrKDPvg5pWKXhTTa7C2UVvkTFoyFnFRJY",
  "key27": "5SHfestvHPcEzAbgveSRCRdNsgJZyLqcsNpDcq9mdVZR3Rz722dC3T1vp3RnKNnyxpCctYMWhmQsk49rMFe2gNXQ",
  "key28": "4VFKt7fVYJQ5dcnZSSghpbwvfTUPYG3u8LNQQUeuV3L6eqBTke3aZMHA3y5nbjGp64k3YFxrziQENqKfFLrxgUtj",
  "key29": "51k7c94JrsZ3p7xDLHAiP4XibuHhFfcN2MxtXZVoEYENUwezgp7qvWVJSgo5XLvbX9No3FhKci1CnSeB5R3g4eiZ",
  "key30": "4bJNmnS6sFHwya7MipgWThtVLpwzkE6dT83geYtBDg4vEg8f6ZbzEc3LtcoW8aDBemkGVThLQkwydT9pNRGC9jRB",
  "key31": "2EfDcwnJnq3Zevw976cMzk4qFAi3t5fH6taELPj9zss6symtsSep1qYHSyiJjxo7JgR96qiUoPV4zv3MV6TqCsBv",
  "key32": "5swPnLNLzQDF7krXLWg3ULfqNDYq4CNrotzj8wFgqWPM7fZBbssjUhyU6yooacX1TZhYzcL8716BTRRMECfkfFqS",
  "key33": "tY28Uzw7mdGpbtwHXy4iX6g7RBoXhPA9EfGLyEtiNiADqweqzf8M7VsdWxCAyjN8eGEHdntX9dAUKFdLwbMaRSL"
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
