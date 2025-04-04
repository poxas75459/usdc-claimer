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
    "4zY441YdRAnKHZWgLyRMtK5xRFKGMDN9eARTdtmrYfKKYTKJQXW9J9ycmPoPcnvJrgrQp5NauUKnnCNhHqnMYE4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "469YZnPbSMPr2TYeKw2WfkLrpQfL16KsBtavy7MBJpvuXR7PZ6cHrdwZ6rfYLfwH1nNhUFs6puC3Skofow7QN6bi",
  "key1": "5eDoEyJVw4oGy5UnNCUJqyR1vCsaZgiJfcorM12hCnb9KMG1rn6KgMxu8zBm8JBponpxvsffYbw2Ju4SfJJZWqoG",
  "key2": "PgUbmGHSsn3ySgiR5QMq5GzVa6yHJRaGZXvTeqDX5ah3KA2PmadMG3w9BEBYUmTezXcBFumykyuuP4iuf767ePV",
  "key3": "momfcDdHDbckwfAn6EUSzRKyvjyYJHQTsiThBFQq5QSkRnJrnHgReitue3xvcNdpnJ4vfhFmCNELEJGbjdj63Kk",
  "key4": "3oXzhabGGEpGHPqWQ3hLxhEmRCEj5HcfkZuEJmBC8uakMonVsNm98azu9JrDKfk5bUba37Z5EK5cKnkV6JkhZqyq",
  "key5": "4LoPmnAQ8Qpv34ErejVKeQCVeYAzAYXKybbvTKtekw8kM77A8uetAZ4jFKo2VsmsrHyStdfjV62YHv8bAdWFL361",
  "key6": "3koRf2HNdh8jt7WZaC3Lut6kWyVzu5pHgJJWKAz82Uu8vZdGVSv9E3uov83NzshJi152Liazs1nYMs96SMZy5pmR",
  "key7": "3Nu7oBqjmrn8TYTRFsXgW75BiFsNqmSwNAoA4MYpBtFjVf9yKTUBmkv4C9iY84Lykv7ZNHKZVzXK59idLSsiRSyW",
  "key8": "y6QA9VMUE5UWJUvwKNe7YxSyBGVnjWHZfbnXY2pojYq1nuY44uKthTZ5tjCT35gfY7FFrww4Pjexw8jGjyg298f",
  "key9": "5vLyHPJuErpLuScsVbg82CQkQkJtbDkoLgTDhxT3T2U5HMAmkKRW3shYnZbBY43oqrc69Hgc3qHuWFNYYGbA2gL4",
  "key10": "boR3qMXXzUbA8rfdqoN82vt6wp498uWomB4YWtQKq5aDzAgZ1bo6cdG1tmHy1WxWBFb1o616VShXPEvtMQ7U4md",
  "key11": "5L8bHfmtjuH26nJUWYmhFD2mdYcq5Dmsi75EEGwXQfYN1yJATaA3emWGCK5BrCGihYE6YoELyP3Pp3Ve52A3WEiz",
  "key12": "8jjPcNAD5b3W55pL7xc8VxyKmymvEYxjcvxdCWUH1Mna5ArJASXwDX2naKRZR4UAHG6muFt1wxi3C5rUeboj4YM",
  "key13": "amZaWy2TFoLwvypifGNM2j2LM8hS5pNBVdbcdgfo6QgySQs9a6mBk1hHtruf5SakGHSSo4ppnMcNU1Scv6XLeYS",
  "key14": "jXeMRNfnkFCGaYeYAGVPNjj7j7A6CiQGxzLypBDQCLTXHfQoWK1T8bvZ3b5T8pd5wUNuxGhBBQq42s1uhF3CvcJ",
  "key15": "4QezGXBTPB5UudU935Qqa47rDevJMwZX8N9qtt8DNzgqPQtHJSCNFxJuMPnwqh5uvSrWSTCBjUKKWXP6usgfou5Q",
  "key16": "3DENYHxU5X6tsTxjnFsXQhuQ49NFUyqznUTqGdbmJ3hLumpPD4fY9YRUAE1wJ5j5TK3mhGB972XmWjougiADfn1d",
  "key17": "3fxJRMQ7pbzFmmeSYeP2gbRns7yTMaT7CFxNVz6buNfmp3DHMDnN8FghBG9rFKLRp95EAPjAxrRQak6oWjpnXrkT",
  "key18": "84kf5rLbPnGoBKXuHYiUv1VVwTmEjL3274EZ8a1phsz1CkcE5cyJL3Xw8G1iDQVBHd84dzW77eBzj7BqoPo9pS2",
  "key19": "4KgnwswDWQ8MPVFGKT83MBCWzsYsNV3kcjGNsJTbkfv35a49UopsTkXx13eoW8mtDtrE4Q5PuDPX5fTTrpB1sjHK",
  "key20": "55TYvN6yQsPgdGHxuw3VKLzC6Gi4Lx613ggGXWnReM7iLaWJe4ZxB1zQmSDow3TcN5UsiJjwb9L7avNvNMoU8yid",
  "key21": "5hetMYc1fkjzH4ifaRPN6haSm5AQMp1WoAm9iZaV5cVm1rUxcK4sPM2F8fLQRu2PnrCNwRLoMTQsaZyF1ZmkaLf7",
  "key22": "PWHEPGT3AZEcfvH3ew7SC8RHtAkM7z1TMuztKXM1X4hFLZj1BA75uE7kd46VpnZkNLGdkxCf3Bz878BLx9bD5eK",
  "key23": "3d6ddw93osm3p4NRz1BEbBpfQ9kUNDkPfUC52WDLA681TsTeV6eWCf81xr4EKdTPoYokq1V1KNSZL6N4UAVnoUn6",
  "key24": "2VgZSJhzWZbfFwVRVdagb6CBGh8xGw8MKGgGWqGBSxxU8XsX9aFYPGy7xMHNvTv8Y6hhu1E4oRAPyJqAHJmDvGSx",
  "key25": "3n1YazpELMgJ9PKXLZXAPP3NRoCtbFuYbB3nqHfa38k4pehpKrZXE3iL5Nkuf5BUi98ni3mEyqkCPztz6ym2cLai",
  "key26": "51XaSshYaeTtYB1ZKVH46s2Fp8V8PmJKGnEyGwGgSf8yrHz8XWvKD2tQqRsuRhBSGat3AcJ6d6D69PQnG9sG3EUE",
  "key27": "55aVaELeNyei3XBgcMd98vYToPwFFfqcf2rJuZvtRGqjrdu7CejRgvBa8U3w1KvVE7SZ42UC8jnWf7xAWe8P61jy",
  "key28": "41jeWTnz8TaDxmF5BPegpnRrMqh528psRoG3spNXNPD3GSykRQMk4tnkpZqLyRJ3Zs6g7xNGPGaExWRiMt6Zg41s",
  "key29": "56hwdcEh37PLJoRdy8G2sxbrgCEgjZ81QSFhGWQ8t7TKXyVwUskXp1vA9KuFn3gb6G2LpSfZrvXqxetoLQhKk8vg",
  "key30": "64E9ADPH8i9FkznE2t41exuyiiGmjnzveaYv28UX5mQSXvcKULMuZs4CTbje7nncL8j7VH6vDcYNPXjsLnN68WHs",
  "key31": "56JLVCesHPKrfc4NYXLbGMvCZTmpHoJKjppsJ3suNsaezD7F5GKux4C2QXD8jgvG6s3oq9Bcc6Styp9L6JtN4YWU",
  "key32": "3EEj6Aw8FPkYCJzwWS9hu9VSxaiXrrtjtu1zmEgh4TDvTXyUgnPjNHuCxjQZHJxKQGnQTyP6qiNzbcxd4jLZma2E",
  "key33": "34Nmoy641meauevv5GUf3tRUqDvTuhmWfYY37s32Cy8tL8vPxC9zoWvcLK21QCgZKtjufFNQ8ohuRpeLQZ3VbiLv",
  "key34": "4Z5HYPqYmSSerkyG5Vifi32GqVmTZc6FWojjY3TezrANHiE7SyLXej6ZzLVscALPWdNgEbVGiTobuufRdzcj8BhK",
  "key35": "ktcXezrASoRHkZ287XMu2deqL63pJWvMZK3fesagMLiwwKXC7WX6XCQ9VBokmyxCB3xZKJgfCZ2g6FmZBQYfq6X",
  "key36": "5SJvF8Y35CypRZgMCBNdayzQRkrKr1ZptvrzgBhtQ7KnMd2KNehSjd9DqwJR1kPCcsWgvthdx1ZviiYUgJ59eQVy",
  "key37": "3Sm7eFsMm3bABvCGmQ3tkQSgjbE99HgyCja6q4prR5CDBKap5i45MtvJGqDfXJgG1aV2ZHhDkRxYY9TXaPeuFbBt",
  "key38": "sAqpi16Xs9emyJGnxHDMmiT5jGGwScbySz7Dods5oviLdxMcvX2ATdViJRdNT1ETzHxVrtPFvxC3Xi7hBrbABUL"
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
