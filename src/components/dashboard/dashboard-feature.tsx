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
    "5EswD917jLBxQGqrZWndtX8EcBk4X2yMUFfTq6mWpCx32HQkwYxkrYWRpG2wKWvrFFfxFNw3c1Mk7sMGpoG6EGhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21vUBFf7bwpq3DEuMSpW9eZx5PzJQJQjNL3iHGoRZWi7Qa3xoGnThFGhLd4YiZDsJDSs6sd19GfEVp8Bv41Z1AJk",
  "key1": "3U5ddJjFPMsxpnDEGpigispAycAkjpLtQi4RahvvLQhca72vdhDcMgUkZK6uArHqtaUW9oZdGHxD7gVRWB47MfHU",
  "key2": "Q18r6hLUEAHP7dshGMoT4uJss69SmmqExz83QyjRsUrFoBhPk4owhBgtvxDVUD9PgH5ECbfnGva5q7mzwozqonK",
  "key3": "2dK9VS2LCWcrsJhBHdKaLuBVRUAjqVkxJR6ps65tyvmYPLn6zkLPcA5JkMs2y35Foz4SQdjGbZhewxg7KMHJ2Pg7",
  "key4": "677dQwzRVqGDmvQoBdyT2KK5esiD23SMFsVRxAp2YDYsqnVvw6Ga4eqPvzHdTVTQiomNTpVHjsA5PYtL8riUALsH",
  "key5": "2ZkGwndKyYzy6GvxF55ShhaT9U3BQQzqdtuyvGgo3WjWsMdfLup8Rd8herPrHkq91L8TsWztgwERQdAkegrN1W5a",
  "key6": "25gR97KoSPrTc9Z64uuR8wvc3vL68TvDHUW78uiRpcfJHMX8w5vTNuqDaE2XwWWmqkmw3dmALMhHb67gY8Jr3vm3",
  "key7": "4KUcetY2Fne872YLmzUCGHaVvGy3UWdupHLkPdyeJRt5CCJxek2bnLkyWUUN8VaS8LNJfFKLpVtYbqH9XY5zBBGf",
  "key8": "3FjUddZcWnKWiZEbitV2LY8gUwGZcJUeEMVAwUAhKEJUHi17ooDhnPFLgmicveZrZXVqzbE1v7AGPfn9hmCNo3cX",
  "key9": "5nWxLcuzDspc9ZQaNdoAkaJL7VieFzK5aGeiZBe5tGJvpZ4hTLXFepAS57zkoC9Eyj1whpkrXiQMRR3bNDM1ZfTG",
  "key10": "3URrseUEcPiAUawp9wWpSjph8bdmSn8MimywDVV6a2qHnDeWieweCSy3S75AkdZjhifm6jW85KpKXCXCe9JV3W7T",
  "key11": "Jyn8x5Q9amTvWcKWUMTDKZggD7QjTz42xchrfYwvi9dXAsoourV5Dvk4dvWL3wPTj7gAeP6eYypnaDrPwZaEREQ",
  "key12": "WJkqXf8Z2WY4FMk8Vsrk5nHhxidm9kfDrwBjK9CsGPBfULJG7axjRmrnow3mBVWdPc4UnW5GRtb931bRT3TUsx4",
  "key13": "wsAu5YFUdBLyV3vqPD4ZNLa3CDEmd1cMibbojtbjc1ApvtbgAKnTQ35KgLkCgaoFRnaLiGrgx1RxhxZFuQBHa8R",
  "key14": "4donPJxw6NJddWDFYEYNY2fGQKc3ric8YTEAG9Be2FCjQL5Pyyyky4A2PSTEJspWjBSiydYPyS27s3edmkVKc22t",
  "key15": "4ZuzF1N5xsmiSCctpGiMMUegjGqQkwUFrV5A9RzHwwJsY2U6i9J3bVqav1m2JBxP9s2FhksnbpYdAkvMRTkyKHTC",
  "key16": "22ixsyQ8K5rVB6dB8YPCBkxADzUWhWFB2z1PJ6EC7RHpC1UjtSToa1ebWrQxdEBwgET3eMnyHNTsbPXJ4oCXharC",
  "key17": "42Tx7Fg6HpDKPnjYjjKwtABfrbAd7penyx8iebNAFsi9DVHaR8Hjm7zpAjqdjZS6bSCgEhAPCDZQw8gGp3b5pdo3",
  "key18": "yYSjURoBzfHD7pV4FiaDe9iJLE3gPFqn81Zp1e1MfcrSmMSeco25CMxPYnHQbXVtwaQhwhZYzAtX5bcEVSq1oi1",
  "key19": "25Rn2kdrwioJwbJFMXtzvbYv9XWEAUtKJYm65SzWNuiQkexrtUUpixZRCUQL53nPmKtv37Kq4QB86HahgETmoVD2",
  "key20": "2pktegGk2n3YvWZRhCYLRFopWyxg33KtMwdrAb9iJTsnfYTJubn1ChqTXyCWkMBWBEE4CKsdo5q82uGTvToXkceM",
  "key21": "54QodMGrzhb11dmjidzRnDjykCXSYiFqr9HYUcEaLR8jmfXt3QfumjKF95vSvBs5qct95t4gapmkwSy5iGh5A87U",
  "key22": "3DeBKw2fLcUvZs3Fi7dTNS1R6Z55rB4LGYNRgezGGWpdguv5sGSxPdhK22d1f2vWse5jvWT6dxwJ5GdoCQjXDtnD",
  "key23": "2R4HGcFupdVyxhgrQ7ccovWNWFjcdqozJsgZPnVxVQfHPxVM1k1dA44c6wnWCCFCNRzgbgfDSQEguh3VCvRBpdTH",
  "key24": "vL4rSnGTCKPbfDgxfbSChZuEEFJwPUYjZAWKf8tym24ELUQdobhfJw2a62vN3hCaapvfmaK9DezvwBfUnerd6eC",
  "key25": "WUvC9bCDWj31pJkSbvS9Tpb44Aa6He9XBr25xTm138oamwJ9aWUC6z1Acy5tW9CQmjMMJqnG7bGR2gJQRzBrywS",
  "key26": "25E4gN7jEWbDtfAdZgdxRpf7eyh4bT1xxEZJDUtjk3EZYxvVBXop11ZmgvSktCDFzp3EcSHoLf6wn4BQnkDFNj7C",
  "key27": "2RqxyF2s49WtvpEidnfiEN1SCsv88yQy9NvUJ7PDyZ4jiX64B68gDeegSwfw6TTt6S86xcZBbwFVzW1WYgcwYq7",
  "key28": "5LXf7F4BCtCVdep5xnGMbsZ48RsxjiCZpM2af5TcNmpqz5o1V6sSvS3otADd6CTdvCyiEdxgbSreyWDg3GKsHRvT",
  "key29": "x1uuXwhfsJHnPsmF47NSuL62NWuJpabA9qzaAjfqa7LEZtr6TbjMcNmeKJQHQdGfHDnscNjpbMiL4ZewHbieoAF",
  "key30": "zTTZLs8jMRhWtyrHq6dPTj6k8ANQtngToVJSakXJ9tUXbvRt1y7vN7offUfw9LSvxibwN889tVr9ndVKZ1itDot",
  "key31": "2tgY8kfHcQts6EZmhWn76aV9KoThGnNDn6HGFmL1CspfyFRGrokotKYj6SWJPfxYYGCcDxpfZFekDP8V1Z5CNikG",
  "key32": "oCZXntsG2W4y8J1V7hhU4MwreBEpFwswRmAstEPUdats1wQEidXmAAHQcbFy5TTtKgpYUqt2t1zb1xTJ7jVrH7d",
  "key33": "5uyVdCk5qaL9cja5r7JntCdNxDGysbUM5TiWnZ4jbHj6wynTJp4bhqpTsA6tuBz7LorvhBmztYyiNSeZph6gAbR1",
  "key34": "EWhYVjTRL21QGt7VGpnDanHbo973rXUnG1MeryNHu5yadEz59aP1p7urBAUxcjToupmq532ZyMkRLUyh3nRLoEB",
  "key35": "5SAAGbM1xBV4LJHfTSyX4DsLZVqSgT6qkuhRRtkwBBNXFcwg1rZUPafanArwjQrkDsJwNQPJhpjLpCu6f8Ssyc8e",
  "key36": "338GAPPmwyYqn7nwcoPGQDwJ13UQS5cAWvwV8K9LAFjTjP7J722NwBQebJawe5AtWGRPi5v8er5CdkPiU3Jf9CDm",
  "key37": "2tprnPg2wDXr6fUqJXFxkdCw9bpxUgDkFEcGSvU9XnaqSYNUsatXgtMdGCy4iSfzVRurQrxWpz7YN4EUNhX7Gxg4",
  "key38": "4G5UCpQjVhZDjHtLsRuxEhsuKs6gdhrfVs5KKbmvMBcTpmTKNQy3yVy32r8HqStkzWxYs3iqUEd1n3YaU4zhQ3v9",
  "key39": "3HTjMJs3fE7BfiGnk2a8xs4dei7AfC2WuDgU825h12BKe3KKR9iifUmVpRpXwbFy8wu46JP3G6ZcUxQyNN6QfiNK",
  "key40": "3AAPUprMqVR2JiukgeVek1AJPjNdN1DhxDZF9oCbcdW3wvwvpFLYsQ4sTaomgqtsjY1SpB4aS3RDXnrRDs48SFTA",
  "key41": "4jdZziosccHCyNTt5fg65QxNYku6DybD9d1osghdhPP8RXfU4Frij7EN2fWMnErWQ7TYSKMfJYgV1dR2z7NBaPoi",
  "key42": "uWqZiLQFFhx4negsGZDh1QkthQ7Foca87A8e5YjNJN1WuWZ9qiE58CxqDnPwcgkvGiZ9kJQGtGfzATC2n6Qtfwq",
  "key43": "4aer6UvBmwL1ZjY4FAKTbbFMU8CqhipMryQAa8mRs5GWGFVRtaa8Ei4jYSN7GVQZjhHwMmeiHWFQ1Er542C3KLLM",
  "key44": "5PVPQE4Um6chD8iecAdym9LJqzogjS4VUsZeGVNNw4GspmKFbzQbRCDhZaiLKv2thKNrZ17UUxhvTUPLdbfrJtCT",
  "key45": "UJs66FqWXaQA8G9L61sjSiX7eXmnjVgwQrjNGPcckus5nc511SajE8rDN4Ykv2WEFrEwcgqH5yWcMeivqCczAZc",
  "key46": "2sxarG1Mf9BEaRHgFq1NFzsHDgX79ag9B1oBr52BuFVxTz2yFS9MERxmETnBX2d63pVFoNrXG9jJYPn3VpdN5yuX",
  "key47": "2ZaKcPwY9yfzV3uHytFJMburh1qKbM2zNzXk8kXKVdWoeDZwSpKmpCsBgDhnDaXGLLpfdK1XTQPzeFLJL5UPPqsR",
  "key48": "3pbpfk3FMRwCgkAB6fhFpRxJAVGZVQt4YX6oj7v1EHURWKyHkwTwVB3wEL4PBQkHS5n8m9Q5f8C7PmnBFsxw77Zr",
  "key49": "7oupYaFjBH8FTUgUwEAx6vp7v7xrFF9CtYEdQp7zo2PGC3k4XMP2cZW9u8JPho5vFGYd3Ct8wDPhftThyxS9z5s"
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
