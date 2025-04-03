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
    "3tffQktzgQK62hAsQmPycqhYaSKYmAnH4yTftWyEZ22AcerQaZs4xYW62Uuw3jcLejn4x7qp46Kemort4YvVrpuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38JpEPLG19UMFf7riVPVH2ALxxDgDKPh4w52EbtHaw94M8RrbbSg4A9hJHR3bPocTY5xzDkpySMDbm9DB9WjLs1f",
  "key1": "5tyRgWDUFfFd8uQ6KEo2mS85PnZPk9hwNdN7ajzSX67hvuZDheSRZ4Y723Sf9k3BU25DF4huUUVgtsmTCJ8iHvXC",
  "key2": "4nzap4mQgdtZu1eti4pbLRQqtkQjthxm2pBwrwaYMFs2MPF1tZkBHXAZutWWfEE5zgGbRSaWEegZSNSGSPhxB525",
  "key3": "2kY99tRYjnvpwxJLuZ8pwPrAYjsVKtYA7xxPakaun5jBhPRAXXNi8cvTo4U7n4q8jMRqDXuNaGP4UgJi3r5Gmhm8",
  "key4": "3JdvYAcZeUJ7ThX6W9SkuQ5UBCakyeHzt1SnFYVKdmCX2W3GGPwExvwrSfEwNao7fsyeMVRg5rDVDtR3odoMQ41K",
  "key5": "2yVJxSgjb3nEwmSyUqM1L4EtaGnLp9SvAfNEw8xz9FcYobDW2ffp2UvWmDmVBZb1CxsQWYXD9McP6ZBnVzpvgtfg",
  "key6": "1QjAAwzzQDrE1PKMtQRtuudevMUChTj2AqEAgtHyZtgHPi4ddiCQbVGvnXS8Tmr8WVEos1EBwZh44QribbKmWPs",
  "key7": "4sxVQxfFL8t7bmn1xXGZNB1yhSngpgyKcmaYADwodYiukgXnPSGc839TAd6ecgoFv6LKMrxkLioXi6YfXkTgRZhh",
  "key8": "2BervPGa8y84SzKeYuP4XwQsx3P3gacq18k1xWBhmhVCwEZqzqsGXGnJGkPWYwwLDEkUmAcdqxXd5prUScUDSbtE",
  "key9": "4Pt7g31cY2x4MHkoUwH28Z2YPic4Hb81AGekXaFHFNURdffAQNGQ1GFiLPYw6d22rLhAcLL4HbeGRt3AmFuKidDA",
  "key10": "3jsTUfcTFsQhrkAfRcpz2ad8wpeMMUU3tfp28dkaRssn9JPfeCx1CYre4mHkeJfU1Tz6UXwB96XVKvjvgJKuteoT",
  "key11": "MixpUkuy5uU86Gpf6oUBz2i4D1PGUxMXrh8FK9jKJX8ymBYSMEASYTGwzP6UPfU1CUwMK5Ti6kysaFvvC27VyUt",
  "key12": "5NCDJEBFmpRe4LJ7dVJRtSnhYmLSqJXy54ASdTjzxHcyFmQwBtv8UfS2JFc1rtT6t4Kun1tsZG2AadhakpKEZ9fi",
  "key13": "m8deW5M2Jd7uJ5NcyEBxGRXtV3zAMPQtz9EMGLuHPREhkmx7wU21Y31uSayPxyEiv9a2mVjWPWq3U223P9AC5DK",
  "key14": "4jV7pv7uXiGPSwwFHRJ4cGhxpiMCynY1b8V2f3iftht1xyVVqyDLVZieBpXpnrpigfDFQ5gXZ1kP8X7Wn7yHQMJK",
  "key15": "uSKGrqxCANHRGQG5Kt772kgmZUWQzxHAoqwdY7PxJqBqmEMVAdjA3agDbTgb8NwC7qT5gQuw38XFDy86cooywDz",
  "key16": "uVrmh8Cnj4QJ7vevk9mM5mkEHiw1WwfaDCg8uTwRN1tQSyuwa8eKz6L1gCB7aCsuV9zWdP4zhdy2aVZra3FCKpN",
  "key17": "6wupCgfHLiRdiFhU7dMSX3jwCbyUSKGFD6W7NDyvvF1LecuPArCSHVFhSbzXNXT44xbpxL3A5sGQEvkU9epwQ1Q",
  "key18": "9AUzJ993hxLnSxoXBqhkE9ier9EY9A8oJ3AyKgNApe7aTKjFJ2mQ33MZeLGa5UG3uVAs39bWiRZC7K4rt94S1RY",
  "key19": "2TXYJSuhq4uBu3PkpVZGfaXGhukr2PkaT7iNcnYJoMpahxmEgRubzCh1KzG3udE9AY6JhBx8s9d8yGHm13H571r2",
  "key20": "5svTPErXY5NSwZPxwC6uJBLWxm1tK8vuFgWdoHmqvZo39bg9Za2htr3zCgbitkub8n3DdvrMoF9w9Ht8c8SMEafx",
  "key21": "2YYSsLeyTB6SgSMRtcbpvBCnv7e2wdWxCkypFT96ZwvnzKL6b2ReLdg7WwGWCb3rE4XT3rJ5xWWv7KFUjss8C5fY",
  "key22": "7sA9ogJjFC8U89nEhFfmdfxrbhGHrF5wbMvMQV8kePaLqtvzqQAKG6a5pneiTQncuYp7N3FZd2Bo6smCa2Jh3WT",
  "key23": "524w3yz8qp2gCuHrjtApmKxGRGrtcVwpjzNxwswGhK1q7wjkEju4AJg2AVdh9Ge6JquBBVwqqVAjXuw6CWsQNkiL",
  "key24": "38uUTQtLc1qXb8hiuCubR4epe56FHdipCMehbUhkriGHPuF5j1AE97vyXT21RDSn7oZNZCCJyPcccV832emGr85G",
  "key25": "Hn4sXE7RFANyJtVi5651JijUNmGeyQZmBF5c5NbUz4Exp8EwLEmuTuUbrAf8EeBvPHGptw3SEPxoJ9xgemvTQc3",
  "key26": "25jJFHT2fCrqo2QZVUJGFpqP1mVP7hdEY19j3Qh7iuyV4mM6rZBfVVBAjkdgeG65eHuvupkcA369sg3dcqjudAjm",
  "key27": "4LekpwLjcVdz2ZGAn2C3YT5QV8tkhnzKaMpnqBReD4SopFKwMELT4VPge2tgNohuNdpm8GPLy3TjuLposchPLwDC",
  "key28": "4Lq4Q96gkQjQKuZ9j8gFREBMjbVi9X8aY4Hf4Q4K4asqfzHCsU6XJ7SPYcAkPH66CpEZQ7mWFYvbQnLCiwnBdcZr",
  "key29": "5VQsPkuYiXigwCLTZKKJQeZXDWQ5fsCLFxN3cmLKSF6F511AtEZe3H1k4fe9N4kFgWZki4Cs8ZrQJ3NgEAweUSuR",
  "key30": "3XtXAWcvQNa8kny4qYJ5efCMY3JA2teUKvEM6U5ty3nTWYKkMgdNoLNpbF9wTtSts62ZqdHbmGDA7RLb57CS25im",
  "key31": "36CkT5jRTdanQhSAwDFyHxKDAfa9Hq2EoZiTaPxvLf9YXHx1ekqHjGJzBCTkLNkk1dpbkkbwi2SU3nvy7gVw9JBf",
  "key32": "4HMForJao8KtteaReeG9khKwVeH8hbhvW5VAzzMzG4kaxdrBgdMRSAexiJMQ5qTRSypiFoCy9fX7tvf9QFEZzCTw",
  "key33": "4BKCV5YYiCMbzL65nksektWJsgoNuk93okfxJSyJLoacNxQjBUjjNiXfNAGbjp8q4iCifr1f5rohJu5bcKwPfsnF",
  "key34": "4WxiyXuyjM896XJkzCSf25xB6b7H38KLCK6CwXihD1W8zTZrRS5bbgHk4pRdCHsug9JTpCqRABGagTEPTxzXquRe",
  "key35": "5mRemwVFCWHSgKh9zH5TKvN2Tfy6M4NH72qim1A9bbpzqbCDTxxgPdTzXEf5gpLt5nNt9HXBiyHhqM7bq7qswp5V",
  "key36": "UZ4SQnKWmH5BeJywXuvbeig3fwGpKdqtmkn8bsHKY1wh4nVRKG6hvKSUF8Jcp74B7gPwykqVKByUrq2YYE9Fby7",
  "key37": "5TkxFYcdhoMv7NW7TeNEo9RmUyUug85x2Nzgg4x6evrZEBKci171UazD1YVi1e1Gdtuj9pkXYkGtTgZ9pWvhytw9",
  "key38": "3TZ54pCxMUxWCd9dVmNCJfWpHG8ay6skE8nU8N5KSL2nTgkk8xw73hvJXgfHqM72ekKGLDfBg6GsKS6Z2YriCDTq"
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
