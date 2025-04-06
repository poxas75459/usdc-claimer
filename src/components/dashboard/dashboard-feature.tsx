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
    "3XUvofbr5V3vXL6eakjGWa6AqaxmL28zTbSDYquazEjN1USd8R326GAwpqH2vy89bsivKfnYJ92C9Q7zExRyCeV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ny3e1htU51LHxdhfLorfTUgb36hbmWe43QVPms4WyMrnuXBoFFwSubKwpbJEYRwQaSVh2aGLndLbmzGy2i8GBpY",
  "key1": "2Dr9J3LZzXujcW78jreTU1CkJqgfiEAtLx41B1KwnsTieQBHc2xcCqNZ1iMFMaxdxYFqmnrZsCRT3oc3bfwMtLnz",
  "key2": "pCFVrVQu7FHrtCWVXo5kXpFdmPiDgPhbpeTjx1QjFdnP9WFGZCHKN5XUuXugBVgnTSVjGVXSkCUjFG4kvse3WJE",
  "key3": "24yZV6xjJMhwj8eubsMiMRWopduVrEwujXpeEuifR7WbUaAv5RjL63TFj4WEx2XXcnkbCQ7AFPBYBJWey4EmiJaf",
  "key4": "5xHGxH7KwraeUQq3YwHZaVW3qDTZTRZ9TC2E1gQnXeJS9rnR3mKt7qK4Ynm5kB1w5zpsqUXNkN19MWzmGK6JXEyR",
  "key5": "28R333UvyTBzKvgf6uH3GUKDGMF3BwqxqB3qdKBBFQAjDxDkbbrEKKYHbP62m1ggmbRdhuJhMEyw2gPXrvTMUpWp",
  "key6": "3Xy46ApnLG7JkGMjEyjY6iHAoDLYSuBNNiHdMWKjSjPGAW4ZLCXjkMB5xTfoogdDoQr2vxtVvTpCNrj5dWRhHffJ",
  "key7": "5bT5KmjqjG5fsSrrxPRVUDBJEHvvkMPy765aJcpE2A4aEh1UqZLEU3VRGxzbuSFVECdESCRBtWBaj717SjCtUHb2",
  "key8": "3QTdqPt3bih4NATQ5hyBrbDhorb11W7Y1qpCr1LHEDS1DyBNMCEMCriJcNXs2dnXjYopc3oGUGHTydocKnRuPbaB",
  "key9": "5nWC1ytwLiZyDLfYmi4VjWVuX56ciF4LFMB26p3oY3sSMm1Ro6T85mLbJn7JgA6UaHE3cFCEpvgTew3xqG6nPmJX",
  "key10": "46dzrPvAYqkfLzdVGXvjoXWak34cPd3GGnTe7K4poh4Y2bs9sy5v6WJmsafYXhu3rcxEoryZkzipZhqZDAUfwqSd",
  "key11": "upTsijKSzhUZifDJ22pHG7xGzG4YDb5qVhfZMXkLLdYXwVwB6obWPdv9fwwG3fko6usr17oiQZ6neADuFjmsveu",
  "key12": "F1BxebQDAkdxZZum9jLkToXZfMUAiEPFjWMAt6yoJHAKGSDqohWes649t7LoHN11kQsTBaRkgkeceCJjFewDRi1",
  "key13": "27rRiinz1QnRHwGzATmwXD2GVgxpc5fcUDHENponGYv2RiXPi2fgnoqhvE7C4SKhsaUzPvPh9vriy2KNx7VRLmyr",
  "key14": "2U93dPsVoZA1LmXQikbe1NX5nVF3othdQAbnBimyTWE6CbqkjvwvBeAv5dXZ3cnKMmpQaU56CHc2NtEB9qSot8uq",
  "key15": "5G7oEhLsxBtiWjX6tfy5D4gs6rC2FJa7vQKsWs6uSd8xQELcixWfUyVsLPQLh5b7YoLSLwaaRAwdKSzvG3fNenvU",
  "key16": "26poD7uSK9dAH6g6gTpCxNBhHwUQJ8H7nh7ieDGrcfAioCv3bos6JZ4LLgeLSQqpb7CNXhqXUmEETpKbh4LfQUwa",
  "key17": "nkT5rWeh6nt49kU9PA48UehyQnmqceFJAhcYY99gzQ3tcz4BR84mTuXmQCBcgriDpTTpEdTMirJi6mvN5gm9bdx",
  "key18": "5vE43D5FNPvGEFRXAQw16kFPthUtnNpKTt7GuLJ49WiqhFuNSdgUDXaveRXCAMjDWa4RSCgbKbYvuBRzWmLDL7GP",
  "key19": "4XDGWYs7aoiEJgyQgiZoGXNwdmFKZbLYiu3cUUSpS3Dk9KopTQ2tyqHAFspFGcbVsceNnmA4B4xi53md1BUXLx3c",
  "key20": "5ozaHCi4T3VxtMyHnAJdeUw9kc9zyuHUf6jxbTwrb7G8uzQFoqq3wmkts9hzKeiuJQAHpwfR33QwgjyFgUQfohqP",
  "key21": "5cBBHHs4V5jj1VHRnH1rtUpfhZDktJZqQRt9hFugHdv6XXmuadKG326fgePN4pX4E95yrmARmiBYigXj2uY3qV7Q",
  "key22": "jGyT21SMKsmQxsR1gG4oAUFyHx5FpTLpTf2JuBAb8K4UqcFsDHc2ovNsxxFMHofE8f97uKwcbZdf3w2USsuss2W",
  "key23": "3A6DPYCWwaMsrXfxvawRgDyYnMtqD8su2h7B4KKCrDPgQ1uPYT4yH7RAH2Ji9bpnCerawXw5AQWQvsGvR2QvVJRa",
  "key24": "4GEKhqfGLWt9ZE6zyzEB5eNYnqhMjhx9HNUM7XUFRG35NpAdDd77KdXxrGSDVq5jwFw7eoTWYiUzFRUsaQmFqev1",
  "key25": "31A5k4dUsRjPLZh5vgQt4ye86yxEZfTdhQ9xiB5X9Ybe9zykXwhVVZFbg9HjdwtyPTsmnSwsCFs1WJs6CHmPNxPT",
  "key26": "3zWEYuasNTuHzJkiizqhydHhubtFEf7C2dDmDiX5m3B2dQB2Lhw1WmETQR7kam5nkJtduw8NH3Zf6akZrUvvdGcs",
  "key27": "58cAZKd8XY2YvLCA2FkcZGxRhAdTtwdnVGKhUFPCXmsrMD8YWnx8scPYtUh5DFn3XjkmE1yzsGkhAoWVKASPmp2G",
  "key28": "3ESZi8Lh53Bu32LXUcstYw6bfPQA2mNZrB1HJaPS69PFQYNqtDtQXdiMWnq9JLdUCmHxe5Q1JfL9rU3kJ4WYD95h",
  "key29": "2fDKf2bVJqLqzKMrQpeXfPqHdtexSdjYQdEERM9vRFAhBtYtRum7NshJxta6UPwu1DssTBgdje5JVG4JpP6gies8",
  "key30": "5QmPHkT9TVxgHQcNG9qTGHn3aHYHcw39oAtViCwFxhdhdp6T9cpcfqHDTH7jE8cnovsWgGthdwCATyuFQEt7iLzj",
  "key31": "3NVcxREjzVNTgkKRW21Yp7GT8okSXok5ZyueFcmEbxR6HZXo2d5STwUpUGGFCEkXt6GTNEzBT2a4XGjYmf3MbY6E",
  "key32": "58msUSsrjpUhACdcX9tZRDjwj9KxLLp1HhEySZJy489KKqtWHuuAjZfd4Z8LStTqQ5VMqwZ5EErmZKAvw5uuqphE",
  "key33": "WDrK1y6vMFpxmzrJZQQsUe2hiakx7Er3FWWiSYdbgzjUJfb7ivCHqFVhnjiZZdqD3hLipq97KKov8BHwekjxM2Q",
  "key34": "3dJxDnKff9XrTctepBmcDGuJTZ3HjgLWwsXKR6UQgnppDzV5iBjQSDeZqhTJtcXbrCaWzriEGhV2HYxJ24PopccA",
  "key35": "2HFs8Btu44KanhNn4taU2RXvQspeZVAbyjbDAiNWwKadAWE4Af7s9RggjULr4kHLpVXq7P4Hs5gNMYa7D7Jdab6V",
  "key36": "279FTfgw3wE8LM1VzzrY5wDFwp9p7hGmfVTtNYZKVkAMmCcwivq93h1jiZBXGDwDJmATkD3WgGJoH2ax7QqAGfXT",
  "key37": "25ZdvEeq7TDiDQxqPNiT6rH7Qwj7AT6eXcTwgq9ZrZZ7F2F5ax2cTT5YiEDSVNbknVFv2cEWF8u2a9U95DaDCjb8",
  "key38": "5uRi47HDdnKFsJUoFXyGwzLA37r8PwkejWcAiMReKBjWdZxKBpAJvuxa97hxunm1yF6zXSssv6DAHPKG4NSwmjhA",
  "key39": "2Me2kmWBEhFWGPyaFVfqT5ENNyiGNmrr63BUeSq6CnJwasdF7QuJFtRrodc5nZM19hfwixQwkH2STPie4XD4CUF",
  "key40": "RasEzxYvxBZ6Fc76X5cARTZ69wXAUV1ayEnfBbd2Dza9dMXL6Shs9FyDHvU6D7FkDranxkn7ru7zh8A3Lr8Hg86",
  "key41": "4aLQdxS6BmULQ9Lh356VYV7A2RYk6qabY6onjVs7ajr3VAFiXRDG73RHc2ASCFrHGf97wurWSTyNCSU4k87KtiNf",
  "key42": "efhvfTxLG54xWj6mKhSVsvkNQ4aG4dbpGZ33DF5Ndq5oZsxZDKB34urbLNCthEBDvnnwfPF7K1Xs1kY39FZ1JcM",
  "key43": "36MApZ4V3BKsxVkPGjU2yWXcAJYmKaKLr4TFVDpyQh9ego3kvJjYjQKxm5vLiMfoph6g6JP75oHawZNDHSJCdKcE",
  "key44": "4Qa3ynhLjhwSKYSHku4AG9JPWtLyRrbfWYufefcqypVNqXbLcF3SBe6CZtuS2ocPEtLaU8xZYBqwjTcfZosG3MeK",
  "key45": "4RT67HRTpbBom4CHr7E2rDioa8bp5Bk1tU9vhb9kSepz1k7VYL4FvyeGxYXWhAt8jMe7Y48byHKcPro7QeNaQ1TD",
  "key46": "2X6oX2nPDU4nXGRXRtCYdYToGYkqTKTAahh16GjZ19SfzLCoemeWDGsMz3idfZqDq2GmERWkBef2TANtQJSjk5pv"
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
