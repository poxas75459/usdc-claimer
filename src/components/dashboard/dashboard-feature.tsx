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
    "9hWdwg7rYM5WHfBv58RtT3bsx8TjDBj9ff8f5a5SQXb8cZAo4fnfM2ULATZhiP8FheLvb7AWftGysczj6kVaJQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "229KByBX8ivuFAEmVGcVVE7g7UzgYXh5swDMrf4TL7bbcKf4RA6aQ6XbpKNqWMynAsMW1P1fMnTCT2mcKW3fNPEE",
  "key1": "3NudkwpwHRNkLPepxpjJcnBvoCtiQPFc9FTUDRSJjYGTv7USnHx54tZfD3k9ZxA7AuKJvmNiyQ54xNNMGvFx4AWM",
  "key2": "37seY9J3JcogykFWiuPR6QSTiwquTFB6pT9GySfyRgfrqeiuEYJ6GLXmCJqQoSqkRYu24Cx8Shi22uagV9a9Umrr",
  "key3": "3cw1W2RSattjhgSKspBnGZiHNLy7QCkQhU5Q5zJxWCwoRb3xdoKkaVmwktYeGmKVf4P3iNTvqA6U6UoF15tZ1QiK",
  "key4": "2JsxWCukVYZoe5XjwkRb1fhgpvSHPfXwrLxpuVPs7VmsEHxBeDqSTXGtZ3L2e2yQUq8ZvAEEg5bYfBxtf6KgLrN5",
  "key5": "31WQKVU2XDMgXnHwGBFG9ahLnqnMYJNYjgtGASg45AcqzhXG3ZiygphJirz1ZovBr81b8EDEa4TGPnLezczWeQeM",
  "key6": "4HHfhJVeis9j49YM8cd6g2At5rvKnBnyKAovh7T4HXrN7K4Nu8pT171Fop7JyZ6KwUrHSeQYVagk3LkdH1scG1jg",
  "key7": "328quk4U1hEVExV5mjzcpBoJmYRjjmmkA7RUnboX38fqCs55Vk8RY3e7GdxBZz3foU9kAMXKpWhBdibCsMvqt47J",
  "key8": "2fZVR5YVnEs48eUy59wh5ZpSf885KitHGdr3fcEUUwo8VVVLkvCwwCPcGsZZJLGNxHqyobXiz1ho4KyechRnx3aw",
  "key9": "5nnFtVibyB5VsVGbukLidsySS933mCpe4CZZLva2hTdjLf8hU14a177dnXhNfkYxY6sTzBqRS5NyTT2o6X7aetuT",
  "key10": "1M8jbneyCXhMdQi6zr4J4bYCQUPBppivzCsTVe4WzquKEwzPkDfMaYzPCetcs5bJhQK2tfMRkngEpqyQCy1XTfE",
  "key11": "5xReKbEmQHdo8Ydje7ythNSXeJqLbaag9Gui3kmisWWFB5TDwU26TkNzDpTGLzGnVaZkT3tm4nGyPzz7AhVsD7YE",
  "key12": "2Lw9ujxU3fAJh6knprr7iZpJ2pdy12Ytqwo4mgqFn5Br2mtv6jC4DMzE25Fr4VPURoVWiZjRkfdaGpciM1bHZs4R",
  "key13": "5xMXnprWh1mL25PvXZ9jZXKaXnNeuKFPLXJUkAyzEK6z4YYCxxGQy6NdLXvsW91nX51MzWQMFmCCaDcq2ktrrpe4",
  "key14": "62fJBrsDkXzNbcDb1dZtUMRKfWwRCCafry4mhYi3sB1LGQUG7SB8jL5uBotRkBgmRMoq9B6oeDMBKrmguPbY8UaD",
  "key15": "5uuqgfohYqpSfbcJzmhTLvYhggQx6Vn1BSmtyu5uW7if3hsYYvS2PZgZ4CZm2keoen43vRTzAaXFRm6LngsBB3RU",
  "key16": "4o1mGENuEUUccmYH2HLUSAgSqqpYv4THSSJoxc7dJsKgs89GK9xzn2DkxyY8pyf83WvGLD9XJf12RsHxMoyMo2y7",
  "key17": "2kL4svqTieWL8dcjCAZhyShLAJ98QJ5kf1HKEAEvLp7aKJez5WqkjPpjcg2tZasfnk1UaZZDZtYSSHYt8r3HPeVD",
  "key18": "3vmLKAnxX9tU7atonsPaLXRUSnxDem7qJ1q7yaMDoK2fNq37H7wpkJv1Nnj5WWRmxgCfxtJhNuZjZLMxA3SrbyEZ",
  "key19": "3ge3E27anwumvQM5Rev8y7ZobkJfJVZm7GCmd1mqXJXf5AsjbRhYfmDdaYtaJ5cNtzzNrkasnTfktY1uyjN6Pask",
  "key20": "64rSQ9E32wLZ69UBmGV7pu3PY6wuZDJSYuZvHQZLYxoYwVrUcWJ2oioDsqSxoajJYcGGYZagrYVwkWCG2iATem5g",
  "key21": "5cHvv8pjrTtaCoHTy1sG1p1dqU91a8ksYm7X59HQ9PU5GSHyZRfpTxzwjuQ7sFdEUzUxukWAGctgchMXxHTKeeXT",
  "key22": "2ViNQxp3TveFAJw5stLPxJip3TzmtkM92pn4qWnJ1F5iXFT9Y7SZ8UDQiKKpckkuL86gQrPQ7Sv1xYqqSLgqonqk",
  "key23": "2b31ouvFgB2esXCrGLZFByg1QTFA6ZeUpzmepBmYKaJimyWPb4JbTR6aC53xUcAg4bmXXDcTJqMZUZwCGpnZQMng",
  "key24": "37YXv4ccBgCKA9KgWe52dzPM9Yr2cgTooFnQa8E4G9t9HBGcXHK3bqoSQBk8mF3soJkUCGgipSTwPPngeBPxXMxj",
  "key25": "s6Zj6SC3c1zpQCVe9WeYCg492VRPjzLwMb9gJURVLMtQPZAnT6T1JSb1rv1aT6rS5H9wAPo9d6JcefDy55yuBpE",
  "key26": "2stPiJC9ViZ5N29M7xXp2ij3mSo8o6JjUosQtATRx597zMCgKrHp4TRNkV7ReaqbfdfyHUceFExsBDKjT7siw6aG",
  "key27": "39maqeT6f9VSarbJbqVgbJfZjkHcpi5SBnB5uq2uVELdiDHj1yJyinHJCvJbigCvsWG7qu2p9vgwHaZXvdpo5cyP",
  "key28": "2WsQ18DXd1Ni6RRFVgWvv2SjR5XYm3o4aVzZtjfLJ7HhABfYF4G5Z5sWNGRoGfSBiZ2mfZ8eFV17uixMde7Sh61V",
  "key29": "2V4h6ZRkq1nFAPgZeHnj7e9FDFf81Uzxt8DxPDKWwc6xsbjbstF1jJ1jf5xp2AbuCThntWy3xRRPCkYiTdipxZya",
  "key30": "3Uz9qB27GSRBaoAZFHUdwLtEu3T12DsUxVX9x4izxYAc4TRz3qp59Gpx7zMNWK8NnQyJQgwSo1JS8y5DgW5MyD8j",
  "key31": "2Rzv45dHZY6Vc4swVGnH67Piwuoo6siYQm9tMBFhPzmbW2KhqQfh8WSyLTQWzsjXZuo2Y2wBXNtSfmFQMZcevZmP",
  "key32": "3xdgy8AmsEB97Am4eYCpxptC6qv8NAuyyE28G1EWJEKSM8CXexUCmEwiBCqpExphmifHaohgN4631tnxbC7a3Hr4",
  "key33": "3RturVUV1Dw7eZSbxW1U5fBvTSjkBMVNskxc3jM81F9cxWYxH7PuyjTnEcJyL4VQWYkYZ4RJVKM7vwPCWUiMVZuG",
  "key34": "4QGs9eWyRYiJYGf4F5yAiNWgKiajvq2tD57afh2oxtJTwi6b94dDbS9tu3ThpjeWBy18S4RCG3XmYQoa2eGVC9sB",
  "key35": "HNBnqy9dn9ctAxXVASDp9mctMfzmHCrEYZdrjY32xnKehXu9XtV5Zzm2Fc9KTjpVuswjsoSucKtPyA4EzAC7fyG",
  "key36": "2TAoU5CVmHHZy9QX5q9gzSi7oGNxUyPFbwyGETvrChFSZHn8xFiGj3nY4iV5FpQ173pGLTxesdkJoCPJVsStUDDJ",
  "key37": "6kd9unJksV5euLJRrEJvtT1FHzMEXoEkkyNTLES2uEAbMke7LQzz48NTLpcmdCrFemQx6h4KHpWdQsYjYgyUry1",
  "key38": "5ACZptzpFyi9LpY9emhVFAA5AAesC69SecZH75WQQsXAHQ8L6Xj1eTA4SWdGBL4TDmy8Lin1tc7nXkQcXq7KBZQJ",
  "key39": "4TYRnXLkyDbMfu6SXZKM597riqpfPMAPJgMFD9hdMYivnBKtBN7m3W3YrbJtKCbURxo2fsKU7Ei9yDHikqVpRmRg",
  "key40": "4nwwLqL9oK2hr16V2GATfsw2ADB3PeBHjbVudP69qPm7j3kNBnXRLvPm2xS75Z4e8b4PX3uF4La5PkFiS2NJ6FZN",
  "key41": "3gAF5RFd7ncZzKXxUyMjzLiXzRcgs5ufTg4LF6rUUoaSgL7MSi9EHMyJUNKey3WX9Nr5Rwgjrst8n1dELW3aRpji",
  "key42": "4VGP6MGtDnXtcmpNhg4jh1Hs4YxCRhBvW8zXBRnDrswTeFDip1AD5JaFv6nk9R2rEpAezXmYJRv4FVLj8mnViKwt",
  "key43": "2zdeWd3duWAETWRRXq5JH56QeXWPTtEtY5eXVfbNviNC8KZHQ8nE1391v9MjiRoQsrmhz19BH77Wo8M4yG8TgKbA"
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
