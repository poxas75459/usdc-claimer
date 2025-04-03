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
    "2GGjUddF1RuMsEmxWMKd61mNKicXRevNgPfkxUHv4Z6C4tYzxFrt3ERChYo1hiYSUtz54ys7usiCP3EoNKUbnKn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uSuXv9CidTEjzkT5WbAjUwxsbroEsSkktfosPxUjo4ficqvu61TVRyxePGJugKCQngVu5fgPkekxhRjSDrYKFbX",
  "key1": "4C4ekjQn2aRX4sPgs9hE7yJKMLJ9U3WAC6oSRsAXzqTavQFVsa5Tgx1K87B7UssDegh4nqJ55pNm8WxwmTEEY1t3",
  "key2": "5fyErWnzxGaeNYxi6nfPw2iSf1U6ibn7sy5RZAGWbMq13Dinjh52jynBxJFGpLuwbdEW4yAr3fGPS2de86A3Nn5T",
  "key3": "2e1b3zuXiVB7C3uzWjF6eisWXqE7AYLJ9SKPeAuWPTSS1tdxnjRTU7H9XPWYH55jJF6En12SN9S7zv7r321z9rXV",
  "key4": "2xhdU7jyvLRhfhjJJxB423xZAsyCBdsNUyj3QiymRUevesTrCgJ4m2FE6XNKdZ5FNodNK5pcu3GvJrVGM3ny2Jw7",
  "key5": "3jtzGGiBW9ydmYrkqTjHsmcUAPrcnkiHQuKVSWEuzPqr7jedrAsSrKBzAWPsNAjsdeoEunX6Trs7Wjyo4BgUZJQ",
  "key6": "41mY1oG7FEpPhsKdpcvL4mgtifVJFXnisUL8CwjMqWhYudnd38WZyrZ3vUTaq5HVX3kJnTECUCy9Q8YXS5UjFMTe",
  "key7": "5PYCg9nLcnMWjo5W5KsAEfaum6g1k1MkfLhBbeSBZeQNSdd1dasUN26Yv1kZuZfv9zMrqFUQRx7anCEKcQS7yLYD",
  "key8": "4YnHpG7LGEJnHhqkseoJGny2MidDQ4q4h7pyrXL1qEtfV7BFduERcZ4qd8QR65jo9jFm1xbiR4rc3Tch8fYfPUD1",
  "key9": "2MrLGCyBLiJt3sYfaxNjgrKx39Zptu7XqLqhAvFT1s7KEh4c3RUdMP5R6jcKEsjYccGYxpE7kQYbLQTNNgyAH9Uv",
  "key10": "3R7BsoVS5nf9mqUDbUW6DUaZbMHt9FAEdXdkHnekUnKU9jjDyy72gCgX6ZsSvhkNNXCgeof2V8Gi8pbVPsNoL8ii",
  "key11": "5cQfd698B4BVXRJp5zZcp5rfYtsdRKWzcoPKAj5R9R4ZPPvYxohFMQkscF1zNf1Wtb3CUgkEGNqhSYeRpGXrxtDg",
  "key12": "3gLV2nmiUkwUTjMxMuY5dh5zMvzpvAXUCi1djoJC5Jn7Tt1dJC5uJmRuQA9TUsyHHAPSa1bYeh9fQk2jfrjdpQN4",
  "key13": "9XJb1iAQYiX5BUBMTzSSGtwKsf8yoodHXDsEUNKUk9oEMXnjzbrPkaGnvhnzD9LYEZp7V7Xo1tJ5jZKhpspfWmr",
  "key14": "tJL65Rv48HzNMyZJnbwJQffquFB9ZPu24RLveEx4c9bxeVZVwbfniV75rZoEMn6Ez9szMBoYGo6TnVJEuVTW8Sy",
  "key15": "3ARUvexYoYNgyCLWpKpwq9jtaq8XSEBcj97Wnf8avGSqQETaiuCVXjtXsDr1gRMWurz1CT3oi55wP6NbETCtPHhR",
  "key16": "3NNWTm7VqYer4DCEz72RQkSz9StxYwpkwaBoNqBsQTZfjccRsLZhvyDFNEeyc3NG1WahQbms2mQnt85fDgeVmu4b",
  "key17": "53MGur3o58FNeSMkREcgHtU1rjn8rX9cD8myRnxupQLHgg8A8KVJA3FEmkDugaa4xWCupyK6aGNuBmSkYpH1hPXZ",
  "key18": "AbwVnbLSsx73uNsNoN8xfNpecNXQq1VFnHEZt8JNg3fYoU9g9ZWp6GDWeU8xHjtH57GUii5GvXPswqxUdJ8Ge8m",
  "key19": "54bonoRfFs4Vxz8zrbB2C4TBDZP6PaUBaVL1hHV4GzwmeRrAUfMaZ7AjUmyEnisifUZ6jRNAgiKBcoGo7yir3i2r",
  "key20": "EVaWAe4b2di94sDpE9DjTJwo6dhEDxWRCywH9xmLetPVWHh2ajLEP9xCxbufyQkGRYzmZsFPkZeeFziV7j4b89R",
  "key21": "4yQDgoNHtTEXKdMFyoMREoSfnN7b7vnkTcwbjj3umubxqMvz4nEwzRawAzZhBdb1dMuLt7K1kJiHJijeVmywy4R",
  "key22": "3fWrdVtxiQXjfcJZ2y7YeC29jSEEBQkKWC6sStHMC2pm7MzXdDJ6nctreu3R2cHkKYx83Wem51AoLJQmRfAEtb4C",
  "key23": "2676y3MRYWa43fvj2xG2ivCmxciQ88amqRgboRr6yxJiuRA9i4FPjGzDzD3QLNAJENvDpPbHGpMc2hJczXLgDrcB",
  "key24": "4Q5ESZcVjNEsu3jn97ngobVn9b4tSwboyqe9WNwzFoZwmzUZ3Qnutymz2LGrfetaGkxVLcc49H9hEicAFfBxVggb",
  "key25": "5hcJBaxPpy7Meat1i7grQDLVDQL8UVbndjMFmdJKoq8se8DGwTQYMjEUCAkuxjPBY2sXZ69PzCXU5Ua8xh8QGzCT",
  "key26": "4ejHeyvAfKgtNQjuxanphwYhgN6KBR3pXQwaYXeYNwz8PUscvrUBpT37s3zRgWo96ph99s8VFbC52fBSTXTkpJPN",
  "key27": "22BH6SXTrRphYbKwM4eu8j4XMLkW5eZKuJ2z3Vx4pX8ZjdcDGCDALtbdoFGu34Pp9VoShiq28bhzQifXt4i7SPP6",
  "key28": "4p5J1BzCyQPXokg5rBdVyDDZsadbGihSN8buQ87DKzE9i4YSKLriXqcwy3raqkSaZZbPwPhs3VGDeGMKKac53Rxw",
  "key29": "53eqMo3yRobWgU6jjkfFHVZcvj3c4xp88fV1d3S2w117Y7yrji8qEBNpnhysT29XAGVJevWDRUZHx4iAPedERh9f",
  "key30": "CRaUMknYaAsA6NV7u22JoXNBLh8SPZgoeErQoH95ppB8dhMoYQnWZDqjBRvuJDRX4tfXaKLf3YtCJEjTwWz4Z7K",
  "key31": "2ZvjXR7GAjZpHwjwCVNkAda1EaKsH5CfRGY969oY7YDhRzsDBeSSQBNpQa9PehuFE6SvUo8aQBpzLpqGXGzZYhBM",
  "key32": "3exjrirTHsihA2CidRv2SNUTMVseL5aDavnakFgKrZeLyYb1PyV8VeEZCmagPbPpUDH5jGr4wd24KCQQKUH5ZfKC",
  "key33": "3P8itwHG8Pf1w4Z7bWxxCGyp8iesjrJwfg5fMUuAmZQc8358Q81tjNHhSKLKfb5jkSYW46E73dy6JLakuinJkoTe",
  "key34": "3bAgZV5pnGs6dmsnr1opc4NPGgWB8NYPxk6s31vxJuPQFphTYeNYwZwgbGdEMvDjLDTn38urDSvtw76QnSv2QvYh",
  "key35": "67XAZSpgkBoXSxBnTXMai1XHVi8hUpbn6h2WFiWfvE7g5PZrA8V4VgELLU3xRepbWyYtdpTSvLFr5D2LvyfNq1zX",
  "key36": "4uXHH8dS8CbBBRPz8rY8rHRGA7AiEwFTEq9vUkDPCBT1H41J6FJGR6DuTujKH2nk3RcNgKyEdWCuh93Uc56ntijb",
  "key37": "4qMSMeWdg5BepcacHcJjkR9tHtxU3UjQ5AmdZGqzBhDNmkRVBoKWrzewZ6sqfFth6DnkWnq8nFRappZS1PAq7UUo",
  "key38": "5SUQrYuXZuGgS3QupXdwjvzynRAS2Ar8VCZRM5iooSnmTSquv3cxTk5eMSqDwnmW2idJRjrr7Jm36JbneSa4T4Nq",
  "key39": "coCVuu61ZQucBgiA626jF3kx4Bacc87wVQZ9VBGyyzRNrsDumekRhkTHPMVhy7P5cBJC3S313EAUsrjw6P1k1L7",
  "key40": "Ycn8AbxBtWwXQmPa6vfa3qqeTCSP7ULEKhVG9C43wfaAPQBfZh1LGXRyArQsEKci9nx265imCUC85qHDCHWoAWs",
  "key41": "4D7Bjg8vySDX4Reeuo85PERsDu2GNpMTot3MNtgXoeXXuu63Ww5UWnPoWpr34bYGU5U11wtjVC6Dt2tgVSvTG5yo",
  "key42": "5d5dw1TFc3f3XwpEid8FbyL4gqnNVpYBVGnrTypkBVUN3Ukmb26HqQ5SAKT5gTFZCsr7RC1ua2S5sRLffhNmKAJk",
  "key43": "5CtC4fuuCoxcsHWKa2pis2hjTm5LpQusEs8usgigYGv2PjucBQEo1zzoKpi5Q4rCAyC43ekRvjBmSooeRWFveBBx",
  "key44": "2y3yYZS59rXXUDG4HzxtcCCwTe91xJPsEd21TGX95QGW3MAyYo6PoYAXznykYDtrY3pmNPJW27esLjhpNGH2Sdkk"
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
