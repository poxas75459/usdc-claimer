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
    "48eKDGbb3QvBQdps4TfRwQCv24RPvzJc3wCZS2HqCn4kGLwqmtuBZQuvPFitFvErh1xJfKcRh16xJKdnM6ubMWN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gT84sQ4zbChbXKgin9B9fBT1ZFzQMd735FsqHFvT2JErXDgXKLCGARrVujpDow3P3y7tHpn4vdCBZFRavEdbtfd",
  "key1": "5FAg3txnMPKydutWGLbmfug4oJbEiLsArefHsCTvgcxQXNmRv8P8PJ7rjy1xcQUusgePQnhKETeESVKRR1Gw8QCm",
  "key2": "5n6KowYbgCXHorSZSJdTNfykXo1QMaVRqD3dZmf7L7mjAoeaT9qpNBAyXVSKY9nff4rPenkHEjWDmYeNYb4wzkKq",
  "key3": "4ZL3nZbQznzwysWSCB43JMHoEiU4PRrrvpmxmUigGhYma7mDq1UBdTdKEfhDgUQjc9AUHdw53kEDgT365xCcYkJC",
  "key4": "5tPUWQZuaMWPAxe3CzuHsNJLYyWRQNtchMW9ABwhnhyugQDskVPo6xZJx6QEW6hmBaoHgQkXiMfu8sXceNekDN6i",
  "key5": "4BEwt85qcEcNULF6eyjFBKX4d1dTnzsn4QNhYriXLesp3avDUAdw7CNqxR3QSLwmGsy7hEdTv7zDsKVPYjQppW2T",
  "key6": "4bytZdfjAiPJQPKjrVTtEarfFWzNjuZASTiKVy496XY2MZjshMaK2m4VWqSzZmWfM8RaC2FMxtK1wCtvqoSJAcgX",
  "key7": "8TDQApFidted2YMbUfqiZG8fDtfGXwk6QBwNdtmzkJtShozY7tC495yq7N5tvLN5DfCwr9DCSzqa3GqAhoQnxmE",
  "key8": "4GuFaVGNu4fLqBi7W27LHdyAqrQjSJRSj6bv2zSRnk92rkPNpA4GscCbMjPXZxhqcb8mCrdwuv5hXRNaFUzjx5uy",
  "key9": "2DZGJXcrJJs1iC9g8JtwmwaK85BYo6VHMaHErpsKgp1bScm21tDrXHLQGzT9EVQ13Tn43Pp4fuoKD9KMTax8oJ3A",
  "key10": "CaCTpA2KKnmVM2E5PkFJehVQTVTveBX8RaYWb8Uw3i9L4Z8fzetpaRadnVuNfTL52UzXWVfkYRBE3GTyKQBWGNy",
  "key11": "2n457dgd4tazNEPnUFFDX2z8RvpQzig1Hdg8aW6tRkgombTy66u8aeSdVRJJwEfUn3GvxG5iS5BqnZzJnJgujRrH",
  "key12": "2ZbrYyec3bvHkAeEPuksvCj8Cb9VsKSMxQHtBjNwbAFTqbV59RXra7x9vfiEkjkRLmPqRitcJixV8i5XuuXCqDMZ",
  "key13": "2DjmJ79AFn12g8PeCSF3LvKD137dZAKerEZwQkfLqArE3v4eGzb3UUKMPAvH6fgzcMNLgu7ie5kv7AfBHk1CeB94",
  "key14": "27fP1tLxeXzk8wmew6C1LYfRTLXhXfAYNPVMdV6z3rQPaXgLGiwYaWGsywwzF2wPZsSB6TUJ29aidjqpC8zecXy4",
  "key15": "3ASQDdcsww6GZ6i6Ujud8g3ng4tWkNVLScNoFF8R6bUpGUZctTgwW7FrafRNEkMp2N1FYmB2ghZuhBubCvb2xWYG",
  "key16": "4NmvHb4XGbk6eEDfQMv8VsnZCFMzpRuZuN3bvGLvMuyTMNXstfSV7RFfehi3Rr3TKTTwd77hfzHDgnyi78uVMAqo",
  "key17": "4LuKB5nCmsow96RuvfEEQfnJGC8qRihBnxEXHtXafy9yzCvVo8XSKSUofr9rKcmyRmGUXM5mGAzZnkWMZi2oUodJ",
  "key18": "qvSxWjsp5pPNDijKm9nCzGi8hzNNmZWAvE5oQpApAbodcoGWTLq8ESdgaEkWUYvjPwthbwUkMGnrke49pa9b3kL",
  "key19": "4kipBEuxtRrF7yjyGAwJVVzVPqjWnXecwLbygFaKbBXT1rThv84DqEW4ZPtCKMfTR7KHowDEVheTExVrgMfTdBUv",
  "key20": "2Hctopq34kJHoHPGHc66axh7T4Pzi8iovTjmB4jWutXrn3Rr6irbhUYfFhg9tfWPxtAm9RY8ETfaxsCoqLRjaiVR",
  "key21": "62WXo78hT6tNdFYtET4dbTLcCW1JChwqNuMZ7DX1PZWZyAj3vnfonnquyz3KrR8oLQYeF4w2Az6DFHqQGcA8QvYv",
  "key22": "2wH7EetgbfBFMrVxyr8bNLX1sxWtxh2RGKvSAjvFn9H161gXiomnBj8nxAh5ThKMmTa9sEyETHCsRiNoHj6pZdjb",
  "key23": "2DACfmPrq9fXKJbKFh9s5MpACCHpktf8xuqyYeX5ab2cVpbn8ptb4nrGbehHjgAgaGY24qu85QjbnYhNphRzN6xU",
  "key24": "4MKq2WTgiUvpvzcfPYamfE4LawHFgPGbZmNo5wotSJWb7tv5QWqJVjgD2KBi1492CQbkV51WZJjjphHGT4ZAdfQp",
  "key25": "4MMiqScphZNmRgXHw2M37hhushbNFvKsHNiRVcXk8JWY8yWaHTwJJPui317DMGPHdLULEDhvSkjGPJ5PjH5fLJnN",
  "key26": "4JTsjmnex5YBM1q6cXUmLNc2yAeyVeV1oPFFvk62NbPMiuWJwXnBVusRU9B2vmhXTTRHi5zL4UdZAvC3toC8tyst",
  "key27": "5p4u9aEtf8RqbxJEhUqZj3HUTuEc3YUvEguxf1nWWeeFacTQi6oXEFUZCHi5BckfVmn7bGeADiuwkThkD12bK3WR",
  "key28": "2u2b6YY3koppGK8BJ8Ywq6ygK6cveL9iuLZUQtTpJs2EwzsZ5Q18M65f5n6t3EZrYtbCqpSy9MJxfVzZcNoKANXz",
  "key29": "5BKAWYHUobYCmfWTURqTgRJSiQRu3VyyYxbaNQgLoh1ZLNgvM1h9tUEP16FmPRG4GMK3hb17FDSP3NHyz4J8Qbdg",
  "key30": "4H5qYf9xAmwAQmhP874zAwkNTdt2fAuytD1d26zGoq9AToz5aWYJvX1Ghgb4eo8aRuHor5pALBbnvKP5SFWLnscQ",
  "key31": "3qNwAWoqrbPCNuAVrxck5rW6PKUrZ2sAnTf42bmwMFKB9U5inckj4ZJdhqcRSVetxiKyAPuZUUbJFp5haGaGrvGk",
  "key32": "2pWRush8dqJYsmiK7JNzacJZHYFa69RB95GWoL8tTYZxxLXeXtGXczH9TNMfPSW7p1KhF5sN7T8i4i3FQQZ3xdhK",
  "key33": "63H9dkbHLsHEmm2awZCJpuWc6MtTq5tgjBTJZ9xsNZ1QGyyXDcXsiEzGFDaT2KqBqgRthXaf6q1VRdomNP8RBLiH",
  "key34": "51TqSKYcVfehfosVT4YvpkXWJ8sqTfQf3tGcCXB8viEqEpavoKD6kipcemLrPbP6z7DMVStdDA8kWFkUPcRxQVzy",
  "key35": "5PtmLdzK6eQaQrHQzs8fSsPJDrnWxkEbKeEoP7yU8VDfVv1HP9e5yW9vfpFzPSCAaHyqXWoaej5hmuNXMiimAX2C",
  "key36": "4jddWReRDUNXVv2oC1CpQFBUA83UrXJUgM92WcXoCCra9s4w8c3fCpL777xj2j3nWb4gdEF1diX6QkVA7m4Z5m8s",
  "key37": "4NxNtfCgZcdJUmMNrDVMbgpNVYJhnuA96gguipPHxkpr1oB7Tm5tbvRJJwm3n3WtpCTLB83Y3aXU97MsjSnsPStL",
  "key38": "5yknd1L5nMF4M7zsahZqg1q63FGsqGmoDuhtWpRtkyAAVaTkxC7ypgp9cJyWZexFfMGgRKoKHiMBtoR4jRqVCkHq",
  "key39": "284EUqZx9kw7bZQZM5MWCWqKPDJUkbuDfVFvEoYGq4K77ZGWM5SGYbjZfc2xHKiRzbZP31FwLehqHkKW2wAp1y2o",
  "key40": "czxadLF7x1Dm4adN339epWhW56YWrTzVcmEb1R3DzquPNXWHWRU8f3vkoqcLCPswHM6kjqUF6gerj7qEZKW3XZM"
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
