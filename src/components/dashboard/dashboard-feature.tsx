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
    "2khdrHTPHcdG2BRAT2uPCdQnDRtRSxiWNdkf4r4PJfn9eCc4U6h4UWbfDtsdpMZL5mv8sV28RXD5MFjhpuTUYsET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eB3QNAgFVtANndv94gvyPBa7CvuJR9HBBRjsP2KkqpQ6SpGqWaNWBnf3QpMkrLNeoKnVxaELg2GJmfjG7x4HjDu",
  "key1": "gWa1YRPbyXnsxWUktRjbHy3ybt3mzjaAFow6KHG9LtuhL2Stg5vHnpiv6YRYcHgAtEBHeqhagPUnPngTiPq8Wke",
  "key2": "37FRWi63Ba5FjZhiYGFVGpsDn4jTB9ALddE77J3BENF2GxVuuY4qto9xdWtKC94c687i9tXrabFKMG7URAmJbsiY",
  "key3": "NKiA9988E7Atup5HJGVLMEbdkj2xdJz2c1n6wxD2hmssHZLEAxpxAy7qvPjTr6XGVbwQd3rA5zVfjv3L5nwrsYH",
  "key4": "3C9HgPr2QGpQ1s2mUTyDSuKvC65prZYbU1DwY8e6qCSbU8kTCHwwyUhnLbqH4Q13VP53rD7cnCaqqpAKjw9maPUK",
  "key5": "2Ma221bXYTWvKvJ3HvovyCnWR2FsszF1KmyjVyVJu6JA4rdTcYTTS8QSvFqHFKmytjNejweAT8sFMZWt3oHigtXr",
  "key6": "2zQ5RUmz6BwwZ5apDRSsmGyP2JYiBsT5y6isGPSGWzfzuRoh92DmJ98AwNG1kk5NgDQMQp3XD3NB3Sjc2EPc2BBm",
  "key7": "2Di5N4kLgoZ7qZk6WUvQQ7zhCpNer363hJTtCRyy3jnES7NU4Xx9dt9CBwouDHNnhjP2WYnA3qfxSHHwYHeWuDiQ",
  "key8": "LZZRRXXQqtmx7vqJssDqabAAiqNpewTTkkdPu5jh6LexK9nDaxDb5MB2EgakW4ZrWh928okC3MkDSsxZCQRKrFi",
  "key9": "67GDAS5nkgMmNvH7rDv4k7dfgfXZYKiJtv9HQVjmTdgaLY7LLnmiW9YmiHCUWKDiYk7JUHYiE5x8bTKXnyFMUzyd",
  "key10": "CanDnFQxnUK9bngiXWuWwJcMCVkuXHSzNgGX7wFukBhFLf6dv9nLt5Zu8NqcXxkCLiB9Aqiart35ijvZovtMwXP",
  "key11": "4ZcXqRhi9fDq5bAq3DA5oKZVZtEse7bbMNtdCQ7QUFskTcnpjZWmTJFePEGvbeVV11BdWxF463CcBCHw79hxyFoE",
  "key12": "KYjn2WboUvMPnUh85Rxc6BswoWTxDUxFbbPC6mW1WLsVNs8enqw194CDxVsKDb4BQc9XKUEFqybSr86AJdPtSzM",
  "key13": "2iPGEC34ZUfMMEU1sf11ogWoAnBodYfCVkMkzK1dXRRoggFX7bEvVgPDx3uDZwoCw7YCgi6E5sPrpxBjjaffRK37",
  "key14": "2pi48KjTBYGP8DFkDxNr4459bXxxTU5P3B1CTMjoAohJ2W97MHZaBEvw3T8cwTdSRVzh1d7HPsGwzpPfA93XKv7K",
  "key15": "ZcFzZ5tjiiS6mRDi9kS9N79S9WKyAAPgDNEQx17eX5eie849RSXdUhVrh296j24WRqhCbxTFzv5Q7sHmvH4jgze",
  "key16": "WsmM4aosNi3PsTWXBhYAee8jUmvSbvN9oEY52QFNEfi5Xocu6LoqVuA1JSPs9jVW36tFYGXMyAKMnettf3NVS38",
  "key17": "Y9XBn2F4XtwotpcVNv6T5K5Svk2A5sFSC9DbEd17cP3Mm4A2cw5nwMqiPac3UGER6n2drZurgD9esPLL9eKJtgf",
  "key18": "2fjVCGXgWNxRFmxncgWvXwooLhFQkG3K6D9wN68W5yDFq7EpGkGLQVPtV1DxNp7sMqWpMi47k3NHok6XrRdxNQmo",
  "key19": "63W4wu4uJNALGnvuHiVtU2PDtschQ8AwYfwQ1kSSyXDqyoaUNx7nz3BSyeGtpCxUazRJbPEd1hAvyUHVs1ZoJLCZ",
  "key20": "5kkPcfppWLMyy2kv8hcQTmWwGQ1s79uUGivc8CC1sRxiWv85VffccrTiRJz2Tw7RcDrzN5tDZBRfaZoBwe8HTzdh",
  "key21": "3TjJqqL5F6DwxUZXZ4vc3M4h4Uow84AgQGcoZCei6EE5yWg6whDwCxc1jwFi264e626bDEyoBi76tMoqizgCwSxR",
  "key22": "2xCeoZ5QGicxPeXHcxuqJQLL9qg2cgZQn6Rm1SsGhhEtJ1cjsgpru4CuVn36XbGzdAJSdKYk5dZZhcEJU3Gx9ZGW",
  "key23": "4iWnkLtgcvTX9F2s5VP8C4TXcZJ5YPwhAU6CUmmuX67SQvQbEctRutmkn9ewLmXWjX7Jv6wkCnhr4wL25h2uXAKJ",
  "key24": "5v6CGP6TnLCSUuKvpXQAyoykAvX3BjArTLxb8Y5vfVpYMighUKkeQQ2rLrcNziubkDca8NSpNLUW92LhYLMucYNe",
  "key25": "3PiHVYxE5ApUBanoKdMR4s2jvnXoWuqHFnCG6Ddq7DuvmxirqjSgeN9og1r4LHBLV2uSGr2xn1wgJZtZnzdfmD7i",
  "key26": "5MMGrnmV5RVdsPSrWiaSXky7jRaFNj6vvnTriP2oUd9EF47zZSgYNc1hWqV95MzpCSJCGsynaKbnURhu9yFaBKPP",
  "key27": "5KVTpHbzmfCe3U1XRMU7hDpiDez7xqHDWg2KJpSdRtZi4eMCggrUSoxDiTRjj78xaWy3njdWRVHZxwCyg7FLSpZM",
  "key28": "2s58miTzpQ7SdBMM8bJPdUdcAU6tnPHtEUJDFrFXupG728skcuptjw6fEL84JoLnxD2g2c28h3vgL6Hms4B6v5iV",
  "key29": "3hbgAqbbKFTYXwedGZSoubSmFk93DWR1XQffZCxzMQFi7QzKtiWqMM4H818yoh2WigFcQtxcRwTCmZ6DV3gdAo7h",
  "key30": "239k2Ny8bZekZecbghAAo7LDU1vAGQiKWy9Q4hgiPie1mbPysuoHePdxk4Fc5jMXod6KVpzDdzjs7oPSguASevqZ",
  "key31": "59nHHG6HjcddGmQhm5PsgWbaQ4Q2eGC6y2G399po41BaPTcNWDKbsdsRRAcua8keYgmtUM3YMWRruPCabUDwhL45",
  "key32": "ihh2UFySHg5tywxP6T4aNYBQNXRSgNCzgysvrsezzWUjfJ7ZUB3jyHTi8pamESWH7nqx3FyAottc7Tn8Q9PGp2C",
  "key33": "2EKnwWpMcaNp7YACRDaakUakCo6UzJY2dtAS58EyS5fnkk6QNnjgTQqgf7qKF8SVY1qgf6L7xQMPmLCDyj1JXwdJ",
  "key34": "4FADT7YGYa9Qp21FnDB4Cnx4wTBmYcdpLyJT3ku9Lqb3ivT6gTfmAvBL5uQhGWQqiYb1QPaHR689P9x5uPQt8YoC",
  "key35": "62F1HzH3KLkMLScfafXwHu5AMyEvmEbek195CbnBMpMi7BUuRoHdmVXi1GibpLWjydJZnyfn8GASZ6oZCH8nfsLY",
  "key36": "4C8Sd1r1PQ2YTkNc4ZksNmPDcif3uibcK7gjBz2qF9saHtWmgS5MvXmmiUw9smAfV5UKkgNi7aS8GpE7KyceFPvP",
  "key37": "5c3JXWmr6ZWWwT8cjC3VdCd4nHbjbq2pRCgMqjNSDBx5bu9XHS7keTv51LsNJB6N5MufSM3TzhtH6cn2QH7C7A7U",
  "key38": "2mxXq9Bt5fAHZCHo2mQeVMyy9ajKKtmj1iQva3ySvH5RspKvnkJU8y1epBfHCSMkg3GxBoxQjbmjMkdkqXUfSrCi",
  "key39": "4D1etftG8vxmHFuPqvTP5TjaspvmXSjdCdd9fsACSwisXhJAVCkRBYgmqvsAmH89tQLNK1y5yiDuvbcHK9SzKQjg",
  "key40": "FTMBuLcbsTSpba1WgJ1jLEMa13pwsxKMuqa8cExtGtG4b3UtyDt1g4reaT9Q1m1WeUEdVZQ5EC6qxWcstozz6zH",
  "key41": "4WxXeuRo1uBtFT3XE58nZbbbTo7kAdyTLtaK2FahX3PAd6xqjRkTu5bHYnm57xUcGSDMnUvtU356YHLkfyh42DMx",
  "key42": "3i6VMVtTR2Egx3xW342kx2ubBaa8j9rCf3wXEZYn1hkPigMYXeu1ZsXWuNv4rc93zPzeafpswtCytGD4NqTEjvTt",
  "key43": "2QnM5PUqxY31eB9ZjAAPxSrrAKfHZmCnU1Dg96o6D3hmda6aJxw6LkhmMMX5yn32UnyNcxPLgerR8vyv2oRgnpXw",
  "key44": "5pgwxXcprBDt9f5SAvLGTc1dKqVvcfQ5uNHhSjAWsTA22SAhbr8pcNuZStGtaPEtwDrvd9yjDsifBSoy1pH4Vxwr"
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
