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
    "2Kg5jTrLd3n7gRor2UGPdmHFEekuevSG7MNUxrBtze5ELW41cXajM22EJgjnUAAf65894SBF4FvemppGGvJ9HDGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K5LfG9pa3rcQZHfHuBhbVtUHC9u5kSEjMFfqzgr65GWnvECiR5DyVyMXt5tYnFfcBYyQ8T7W3NiizrD24tqYUB7",
  "key1": "3DxjysoCQeAG6tuwHkhxAM7RDFfmd1FiLydYem7qndLJuAjs4EH1ZjVxSTa4e6ib2fqCPtC1pKv6naYUzLQPPQPy",
  "key2": "4ePzfFwjsWQVZUFQbtZHyTeSsEsJAWpTUGEv1vw52tZUbRabXzQQdww2gXduFLZem95Wxoejnz84aPYodmuLHhtq",
  "key3": "2GjZngHgoggwBDhdzgsihyS6eStp41VYW7zSSuwkv7ubLTvZYJfVv2HRqscnzFS3VLeEb9oGaDhRMJhDwY2ULTW",
  "key4": "4fvmSqL1qG9SNWwfCcbcMLPBdxD9xuVvBkc3SQZ7tkybQ3eKogb4XYJPVYBmiPKA4M7ffBrC9JHKRTWbFZ8S4R6X",
  "key5": "5V5YYDGWMmUySHZayKdCzc1M9opoKPejAtzRz6xzqErPAEokyDkDLC5qoxRg1UArKRSGX6nVrwwwfvRxDZLpaSve",
  "key6": "QGbex7PVwTy1N5qPUWMsvB9aRQ1ARvU6DZSYwFuMJCXmThRfg7qiGD4tfVkEBxFzFLHDTjXez1WP4BtG6QSBcwG",
  "key7": "44TM4F3V59R7QWDqPnRDTTRwR6W9mtUUEm81eHHobjE3GDFKGSVDbeXkEbaM9cJBTGDTDFHJrRP4v8dWH1cqVo3Q",
  "key8": "5ry3YMgsaJPy1Zy3BsPRmenvcx7d13eugkxAVh5nqizUeNjP3WCYMf3ELQA8rHeUgSGras1DXbVU3QA8TSRjSn6V",
  "key9": "497zhzS54P4vzpCk8zit4mc4ayV9VB9C2VJknjhy6ANnoAYbvt5yeQqAeqTPzhcryqZyJWTMSKnH1UZZCA8ZjKD1",
  "key10": "3HhtQLBvniAVGtR9c7LsvYNUWeue7XRkNmymY4A7tCjJyxZ88grtNrJ98Wmt8eJ44wnDfhRXBkBuYtYu4KWAERW2",
  "key11": "4GFVGcnBtmMNwqH3m6K7RxHbR9Dym9WevE1ae46pwQpk73RHrGDFbCKJdA5uyCcG1LBJxAyzNACNaTLMJ7VPEZ38",
  "key12": "2onSeyCJKpiskcnAaSRR14CkUKLkkotTcFgDqL1876sUbDwY7jh462uSgEUnBLPWBicLHx7xvx2GZwDgYmnsXo1V",
  "key13": "cDD6zm6FgNi9284RSjyQrvCRxpLjfKDLtZXGHH6xixrBYnSvGqFcWuNUaQZVcu3SGxK3DMSZJJ6aqhABBucBji1",
  "key14": "41MMAdwRUMeSCJNuPjous1kVpZ24uUvemKKnmqVMgeBWnBB4qVVNCPwj69zsXMtrPuzKShDTNUmMew6RZ3m72Et3",
  "key15": "2zK3nZ48WpbK7J1grzoEVG89s13KCjEpSwrJ2qr8N8h6meAtcXjmsVDycJruRJnRMxGhDV3LeLj2dL2KkqYSgL9u",
  "key16": "5JXQhNN387S5Ebg863viV9Lbt7uzgtKJ9vrqvPE8yKeWrmWKNSswGD5D1R3w227bnJiRkMmnnDh1mzvHCmLBT8f4",
  "key17": "3EzhMMaghJ8xdvXNYgVUTGdmiTQVXAK5bUVWrKuc1AgEGGHQsg5h9u8nF6eTsAus6AqXpsLUg2GoMpracXVGwwT3",
  "key18": "611N93vqetxhDm9FtTZrLnujqUzyxf22B11tHFvDmaG7tJjDmEEe17h1sCCFM7QTtxEt9cTZffR16m3aoRpY7RdA",
  "key19": "4AJR1znnYC8bos7vJuk69TvQmcwdfWLsx1mSRVTRaNtQsCDPbMrRop4vXRzFLZYoy9r88G5qguABTpnwLP4b8ESC",
  "key20": "5gKDCvBEQ9vZwbood2Ppvv46LtEWB9J4G6ckfwHmtL7fwqD7c4RY5DRkSHyCamZximUTG7zvtzR7BiHoU45iAYha",
  "key21": "4d2t1aRsVXgdcYJvogU6FXs5y6YMSupmjQTXZzkZj3quUWqNVMz8fpwKHJabsB9k52K3fJ2gZhiM2kNS38jYg5jg",
  "key22": "3yQnMHVXN94nnSyWiZZDr2VkZL4w3kUCviSwGYP2hPPmxi25FYfNip1FgNfdmVcy3uBM7vMCf9SnieLKoHTPiR1P",
  "key23": "3n9qeztQD9ewwDe6YvNBJ7q4RV4PwdKWxtRtfEZ3Cn8LjwG41HQJvi3WJTW4K5ftApPaZKsmScDipS5V7BR8wERA",
  "key24": "5SGvSB6c79DEWpRhz3RbcSzSJU47PfBrt5wsysBFcQok8aiwvjzY4vg3AEyTQuiu4o4PQ9Wx1wNiZGXZsfZX541L",
  "key25": "3n5MfRt28qGd6c1A5WDq8k4S2JpQ8YvQ18cBFCTZhacQbKtyZ1DxBiMZcM8hFXBo7efU4kmjb2crAPkXDC3tHRbP",
  "key26": "4gPpF16Cp1a27rq62M88vaSdKxYj74CPzRZRgJ6C1BqUBYEd4U6gg7zMsrhjteELRu9hyCvT5MMzJQeL2Ujrt9Jo",
  "key27": "3RadXoQLxfvrWUvVwMoUeSkwUmTwLxqAUQAW417CVfGa2XGGP7Bnwa6yvgtceMJuaaTY5Z6jf3oqhLrhkRVLoqQ",
  "key28": "4XZPZVAnYf3p2tMdVmnow2m9NREAjR8tEiXAZWhC1A3zPa3zswwZfdz9RJtVyULYMzK7QAU6Zg5FeQpUX2vbYA5P",
  "key29": "5ipfVUaFDfRJBaCQ3ohHm57QaERYFKh1xmdqw4xz8T9nEyBJvTiPFFXC6fc2GdaDmJNwWfqkBQ1eNn8fmgz1DaxK",
  "key30": "Tr56fmTt1viuhB1z9DyMVABYPoz8LuhurPieVoiPyypBiU9Us4nSX5xGkP6Y1djaXYAjh3LFbwLrNsnNEs8VfCW",
  "key31": "2wCrKCny6eDKnHz9u9Qnd62H45JRbQwFD6FDtz3ndw9fWExyuERBySiyVHWtP8Gfpn7TajMgG6Vv3ueWDUiNEp9P",
  "key32": "2DFdTfo7yhbYfCfDQC1h3GTEnZnCc4oAYHiYnnyMaKqCjZAsSf1XM3GGffGZVjcb7ckoAXPVSsCokGZexnBDqYQx",
  "key33": "2MbGyAQcUPWsmq9huETLY32Nbx3pevin8YfzDWbWzNG4kVYtzv1YTo6qz6LiYt2zNFcy7hq98jpk1atYkzbtPUJd",
  "key34": "4hkQxGbBzfB9JuicFT5UCGxpJ11qeFmQaPdYvmuYByZZaRYB2dEEsPmHWfkEYRg1r6zS6UydTajJQG2eF6MJCgVK",
  "key35": "2gFNRdkXgcUptoJ7EVMdHPArWr7vCEVvP8ch3gqKSAoxRHoc1sLFRaRBAaAZNMe5n2fVK4nHgxhaEM1LdcLhw7e1",
  "key36": "36v3BGcGDS6AL2mseha4WSs67m9xUtWwNKyiHYeLXzj55VGwomKDLNRnePbbEC9ejGCgf8hHPry2NuHFKbsAsoAL",
  "key37": "MspPgoEviDKjVLALAcB43fMTxXhWQqApYwMhfhPvAuNUoSKJgsMGqFTZXd6KMDVzvs2wzYm7Ei8ve8wS9DBgxmJ",
  "key38": "64zcpZTAh5zRYqe4TfZot7S1Kr5mRZaudJBa25No4j8Ngu7eMXc4a9tDahCaYrkCoqj7MUUvqq9L1VPwbqSfKV2c",
  "key39": "3ZBP9kRvwLjJunGR1gJoVK28ZTKovoAiba5x8hbF8BE5yBv9HkHyiUJW5nN6vqPHPJoLj91TNpoTLUexUFt7WKXb",
  "key40": "5xDhQ6gJnFTG8YnF2CrWSmehV6ByV2DTC1MhANmMo5wsGFGtFtYKDmEUQBeCA7PzYNpStDs6zzqnCFSfbEeKyzBV",
  "key41": "5jkuhD9U7oaw4RHddFnvcYSooHr9HYpu4azaUCpLhuW8qUHLmGKuPRgtmnXxKX4nhTCGzGTeypEuemLz7tT7bQxe",
  "key42": "4nNfyGqZNVKpJx5mSHhExFpEHzBseF1s1WxqnHtB9rEGyqTdP4zhpfD2WdKbv6fqNXVA61QNdFmxB2kQzv2nAXyA",
  "key43": "m8YTmLst9gsK49WLsvM2JjsLXMR48BA4S9yjCVt3bp1XKvYJtAK6Kbup2BG2j84wxNh3sG2kR131JnavfaRu38G",
  "key44": "2bh25dFfMeAnm9o5LA1r88VRuBGKfESeK7unHbc9eaZvM8iyqi8VL4DDKZpFQbrou29Gt3rbQ3sW9jh6i8kGR7hJ",
  "key45": "2Lkzqkm5qvLCKectLqt279TPRRXG2ppraZd5yii41sQikH6fT9Q9fMHaFtbJnY2ig2fb3GijfWV9m2cwX8VSJbE6",
  "key46": "5hmYaBUxTeH748YVMomFThh5rAPJjDJwyCKbrUhZicztZxrVJJZEDGz7JwE9WUWDtxckD71AQaCgDGGrDWAbB7K9",
  "key47": "4btASYhNf7Poqq9uxYY3WMmdyQVJjLzzU7iig2qssXL7dqaAojsuAMEm7tr5a5VRR3mdWu1KTrSUXzGYygERFCur"
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
