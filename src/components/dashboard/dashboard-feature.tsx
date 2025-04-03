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
    "Kw5sEpKX83Ns8cwjjkXVTyM5maTsBGEifoCuwoQ1i8MLrocU5AQFVKU7Wbd5qRcRGzaPo6RMb6buTPTP7Fck8PM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dvS8FPc4xBM7rJF9Cxpvs92L9wtRU9VeoEa6XLuNbpwRahi1RmXPq7t8M99u5UhGXJL4gqSdqyKz5mPWoKFvuy5",
  "key1": "4aqemQk7bmsopUPEszBpMCeTMiJaSiQpRL8DQvQJqnBvjhCryNaVzrbqAbKcX9ScFDn49SxYBupi3EXYF4mL9Ghi",
  "key2": "4wd9UwBX4nk5an9HPmBS5i4Pv8VRuanNmMHyhQUaedViEewXsczN1HR63Z4mYmysE9tYTH52mHU78hEW3nMxyB4u",
  "key3": "VznTHT1dUZa2opbpQ2F5jPcvSUnv8Bg6XmChvBq9JA11zjrFJvyGYkJ8PDQjwmbaRS5RPVTFrzcvVFCZLi6B6SV",
  "key4": "5J3AiZBLYmWA7Ke59AsktsfMQCUqkhDwmyKiRCEA48xRt2i993sTZc4WUngVU9JpQpetheWuk9wBK6q75m7SWpyk",
  "key5": "2n5fjxrRcfYgwEQm6ERzm1ipLhiYFpeehg3AP8jUsoCdH4VAV2VyhAzbq4HvDZcCNC3n36N1wgpudWmT6XFu2Duq",
  "key6": "57eEhzG3NTkTKT6VCER3Qff7N1nPbkiBdyGQc8AC4dUvVA4ijvhJWHXNZiS9e763in6yC91BoreronznRJXjVf6",
  "key7": "4pnzUs6Dk6bVQPaFWf8NX9PcXk4kZqRpWeKQnCBoeoGB7Ap4cW9WxRdrc25M8sBLRsyBpWtmqW24eaoDTkCWhpgB",
  "key8": "4j7bySUbC4DVsyR7XmnSqrRLUszh5R3Jf4KqhXP9X5ByWgXKG1feNNYkhCBEcv3TKtAb7NwqVeBAUpmLQnHZ8CzQ",
  "key9": "65u28Q4sLa8LdAT8S2Pns4JaxeodtYmGtRvsABW1zEWwxh7MQvVrMLNy5QFtMtH3Tt7fRWFhJ3Tg6BRrv2iZLEKN",
  "key10": "4GypiyweeNcTbMrg11dHkPNMAQmJsgWZ9Xsa54HziMXzLcdyemVGkc4zcDXYnh9wJfk7w2cRADQvnpaFtyZD7bvL",
  "key11": "ZvnfnygekVB1QNmhtUz9AgmSnh74LRdqDttgyGorxAqiumKx7UAA6WGFWrWiTimE4wBW24cmM5v8iuxcsr1Z1xG",
  "key12": "22Xjqk4pQEA2cKxd8vwwtVwH5HxyVWkeMWyDoVscGZ5Cij5z6uZNY1KaKZhotpY9V4PV6R2eNcRhNiBcb7WApKDZ",
  "key13": "DTnrVLZTDfEKY1q2HJrU6wdmGnr65ibFy8DB8PCKiiRxFbTZwhxawXNu6mV2Lg4uzaTfHm3X7SBQuwpxeAG8Eoc",
  "key14": "5vX1B5wFsmHyuuFVVFUQ32FhYP1xUr1m1EDfF4pW7KGS9Pd4JhuWuhEPfqfPk1PR9C6UsAERrEFegRqrnLyq6ybe",
  "key15": "57P5HU9qiG2DbSajnzp5QU6R5hkdFvfQVTDcqHsx9q3Dv8t9rDJpCXAf1snJekkjvF8jhrNy8t2E1HRWxfFCpnGw",
  "key16": "38KWvJrdsQrh4iA5kuxsXWk7x3ZbwvrTXwQ7xwYSAW3WP2Bt8GHMA29N5CtxSfBgF6bbxUjEQA6dQYK2nqpHLsz4",
  "key17": "3XtLhbfBdWu7b85PmR5VLTszsKF3RhUPwtpxVTmyavs8mNYFneqz4PTFDBRr8HHjXEFQfVbJNvp8yNcj5SfBxAph",
  "key18": "2872DGAMPAJmz6knuDPMATMXoKnnSpK1wFkfZVbd5gZf1kZvoHhgTsaFpK6PN4FXEQkHLC4hKL9UqJetKWtJf71x",
  "key19": "2jw7eHAU6UWejWheiggXvn9amtWK9Wh6sfc1GdYJ9rVRZwUAHduYNg3KkTiTfCf1oM4hLLxeeJTuq8pWpULZm7qT",
  "key20": "4sUy2vDKDCsbRSJ3N5WsGU8aEjnHbQJP5m48U8ED7HT2oTyK2PrwDdMugW785LfkAW5TB5FaDzJZyb1cJiKoAV9H",
  "key21": "3VN7yU4zZKPq5NABFGPeHRvc8Hxq76tQoR5E7vPBqLTsuX8WQc4rxks7Xih2iNiMtcZhcqzGHdrvtPStzrUKW693",
  "key22": "4N7G39g2McRhELKbRKiuoBSP1fokE9KiuWxrZZEB1V8xmMhogCEY1YPiPHKKgWb5nYMnojJUmeP9R5vqWxjLmNxq",
  "key23": "4yDWZNz46h8CHfY8okJhncwNu5VDJJ2PYbyCpTxdgnVTi1NJWunN9qebCNv94LJ7T1NCJTCLsXSDGmjeZGnbrxY9",
  "key24": "fAJG6KwbptY9Zs73GUpjeNcDG5BA3TgvMEuWSE8HhSGCghQGvCn2sCRxatwurGWK3H3mPmExJfHipuRSnxVK6Tz",
  "key25": "2Pajr9D37sDKWe4fwKYnDsHnxucqwKZyhBLq7soueuACAtEdvW9eRB8LVPCFUzZcZLZWucZTArAF1J2gw4ziKUoE",
  "key26": "3LroDBvy4JKajazVPF4Z4eVoTVrh1fSfowHFGYxZTkZ9hD1fZ4irq45vagL7N6pQS8tMrcWtMyCEQ4TKxnT88Lgv",
  "key27": "2tH1E6k35ZEt529yZAtAXu8TvsoMzk3MvCpwmnnDZswfjzEUDQ7oH99CHTyqhuSUSVv4PrxbCqCRamgFmQBVrHvM",
  "key28": "3cJMnC76fyiWLnmX9LpkYujwAC5qf5c61PxtLCPB5TbYoSxcNkFAaTFjdfQTrZvSYdCq3Gi4Kc9s7KjCbYR1pYa2",
  "key29": "zzk69cYcWM2kYcFGihzqJSYbJAt7X3tKbXZnsB4pbKPH7yDVsAWrBzrjxSBTpmsdK4NuJB3kMj5MapzCFoahpmK",
  "key30": "2DiM8Qb9QMybvUNiNPanP7CDmYjh6xggyCmD5iMWVauujgQfmjJPRv4KEWSYB3QF4eWatafm8xbaD4GSAqMHTR9s",
  "key31": "2mu2SfoMHXM14vPC3YPSVSRzs57d4xTUo3eB3H6jU5qV8Q95zw72MqzqVTbGNqEzdoSnU27rGNnJVVJg9JJjqZfb",
  "key32": "51BUaTnGC8VRD4VYXyoPsCPQZyS14ixKMHXCEFqihqpLQyU7rGy27mhXAt29oEhMcRYkzNejrs39DVc6epZq6925",
  "key33": "4jum6YpK7GxMi4BaTHNUSQC2bjGjGJquG5VHVek4mvD5eD8qdGRmUENFZt43svsRZ3PQyqgrK1V5TmqDtcrLzNtB",
  "key34": "5PkCdFf2t9Dwo9nijbibFEDpoVwXaYpBe5YZ1mVLbUv3YvW4HMHw8bkrh7kpGVauBJ7kLYuvAwKbXGnE3de5SKAD",
  "key35": "3Mez2n8xfhMmRu3H1HLM1mopEZkYgeVfS44G9oARXgUSCYMeJb9f2CvpnAxQJY2vYCDitptj6eox6cKdnr8DtnKo",
  "key36": "4JiFWRogWK6R9PsCGmf1bSUeGft6aWv6TXWw4jWjFCpnEpXTmbFwk1QCjMXo3G6nLb77eetXeRjFxnNfpvwTeh6R",
  "key37": "DvzAp8iYQAqZLVTH9A2Zguw7sT9CmA4gJYq8TDqMtz19MepTKMHKrocRoZgoxZN7ykzenzz14QjFcD1W6FRgtkV",
  "key38": "X2Fdg9bHwunCG3YtD6zx6XaXokoWeFfFZe6cHECajD9GNtjo5otRwnwZAiYBQVBDtWfcoZ4jsAJBvjT1z7FpTy4",
  "key39": "46CHVxt2PKYHnRfjJ5j4fCkwjLQK8FwkE7WAsLiEfHhaeApnuDf6G1FmcKReRMtsec5Fjvy1McnNFjxhd19DBnta",
  "key40": "2mcTL4mBZDAbCxF9H1ra7wgQpqcSYxeEc9Ztdi1zTLqveipZjyLaDXpTs2dXtvkbuFsTApR5NEShXzpAowNTWC6y",
  "key41": "5sD9N2xzbtRGRBpio9tCtSakGpm9v6jRrvhf9FP3p9gC46dW59Hz4LQxSDitrCBGj11JrtAF9GhwoJDjhPoTBmAP",
  "key42": "pHGLaUysU2xPrHbZ6TR3hZkkmSdsDuqEZhxPYx5toFtFKujVDCaatdZdAutN7ZjeNRxPvjtpzdcJD4LHd919FTh",
  "key43": "MkkbQ2ETBB6wiXnrRn3QpdhzL43Q3DTxWG74mYkfdNh8geGB8tkxqacwWq8JK9FZE8rgPmpDHMipjxp1SLgSFrm",
  "key44": "SEdCB5qi9JY8TdzKCNqbYkfLzfY9p5C8V7Zgsh7x8bBnj9wSzRkkwmU2FkJaehnYEFvAeFsZYQYGFnK4Qagdwum",
  "key45": "5XE7sKvBdWLFuWcSBxfWRrjR9bvA6QVTyhTfrLzyUq1CWEzGL4MTqTVy7WAxA3xSbvNtuJmkf5XGXegjy9aKMVHp",
  "key46": "e4uCvwDWWzNeP3ZQB4yb1sSWSYunyB361gfcYbauwbACLZXvkWZTEnRyP7tQvst4CtxwKrFj1QMm9zEeZQS7WiE",
  "key47": "5PbzF7HEnAwAo1JgHmmWUqQMDfKKxpHdb9sHzQz8e393BMfXYAdyhz56ys11PU7KoL2LTZTaxzks8n4cP3YTTCCS",
  "key48": "FMtTBoJ6WC26oB85ZScU8WbvQPtFWPo1tAnowHwnSmUEXti3D1AmUrb2beCUe5wvB1fb9uPf15ja1DrdwPmihRJ",
  "key49": "5ansVFpzqZW3koGJpGVzmUxKsBPhsaHASMehsmafejRc8q2DS8i2skVWt6SA7WBzrEwngcLYGSfWM9YBEsVvkxV2"
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
