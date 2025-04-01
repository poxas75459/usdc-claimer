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
    "4VyVoLc872ULRJcFAJSiZnF6N1rhJDnwVmMMsji7S8swnwydTj1bBAPr6HAeRxq8wqPYBXsrYRpsoz2nLZrvXJZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JGekXgfsoYiq2983gyvg8m6SSgW7gRAeTBkic9U1eDuoV1kEcht2tksHv4CHGjgRB7E8tK42AtPCDXAWAyAMQMA",
  "key1": "3NwZAFMhUd52iJ9Lne5HRp54ddsftS4LweC9ZbJCHURJtmEsNK7RjfhCYUHbP6js59MbEoRQrJZ1eF5pynUNaUc3",
  "key2": "66NSYp11JcgnWFCBKDCLFvAqWJrnuXfuVQZbXpFmEDcKkRQYUyH6h8Zu1RsdaV54oUPapbLmaaWovZbteE5NqnyK",
  "key3": "44mfQdHB7E21qgJBmwBhV6FBM7go97fpPyguhRGr7abAwA7KTrRqKYt21DiDyHjReiXQ8VzHNms3Bx2Pmy35LLV",
  "key4": "3UVUWzkwaVrUCW4F6g1puXX3EBCUvmHvjMcDG8w1A4Df64LGKiBsB4BYLVveierYb3W8oGP9nX69d5yrzqwR6qHL",
  "key5": "37b3pMUqHGCF7U3GTDudDgtcre5v7e5NqZ4KSEfJz2WdYpRkdm2EMFA57nCCAgxW3WgsznvzvC3zCS6ZHCLPMuL9",
  "key6": "4GhEfkVF5JP8LFiHzLUEgxqN5tHDRRoaQUBVyJvqNgR6NkXj2wdN3hc1DdUamWUXToLFu1ATXv81ywGMyNropBuk",
  "key7": "2Q5439MM6m3MNexipCe6PhE5jZWbnMbV5UggZcJ3cTdpFQDeKhzTUafymQBE4QeiYGUE5f4HnvvQYSzXGkhWqB4S",
  "key8": "kNJJ47PGqKQjRXH3463ca3mzH1fg2AmDvvMHkHUGjJErYjBVo1UmCdNETbKx7ZF9M5Jdb9Dr5LEYH4tDj8S8Zgc",
  "key9": "4sbDmDKGX2w2rZxjyfSx7eFjgyRbWHDX8k4L5Y6cYgQhjZgZFQkuGAn4KYNHWc53Qoj8Bm8qzStnHVg9FBiJvmnK",
  "key10": "4y5Ws9mGxXKUntZvV7NcD2ykzLv2jLgpPskTHVXU8NdfMRYqGYJ1fLWc6oMB79fyuk76m9b4SgyiM6iscaAHdjvK",
  "key11": "ofK7U6F4ftdTFXgkxupyQtnfWJyuKFHLRY9QaNStA3TAsbC4fJcneek6n5skQGmJwzgB9vbGBLGBpmgvoGVwcFS",
  "key12": "61CAubzxcZBKdLjkB75eyXpeTMNpPMn9dEUTtxWTEcmsJJz1DZubqHotCeAjinpijsVmtWZRWKQ1LbWPEV9hzy2j",
  "key13": "3c1kLLPFXY53uYJ99esroqp1zQXL88L4KTu39kpSW4mn524FMmqD8nKDimJe3mWjYC7dwpqNTAc7Skw6ZJd2wxeB",
  "key14": "wz4wt95R25gXyuMjCFSuebBGBwZa99dYZ1K23uoZLbjSnBQCvVjeysUnXxuYK1Tb9YFnn5f1XfcgDtK4U6RLq7w",
  "key15": "4XmLpHCyUYwkwvFCzp26YjaeUwMZZo3sMHo1h3VCA2T9y3Uddxakt881nKf4mwjPv71uzipARs5RnYWu5gNeYgTq",
  "key16": "43gD5oWkoet3b8KEG22sXfH5RTUMqMLMvphgJnAddyBnuEuiXS4UqtZsrsGRESnfGFubFoDrXESwLcRVkzJwKuSJ",
  "key17": "3fHkxHtwFN529bHqi1GbFNhfAqVTczgUtAkqi3fEGcfecYfFxG7GzFpnM42EFDomGXWVZzEiY9TzoApfKF14xjH4",
  "key18": "5GMnuYDoFZnvYkQZCv7Ry4D4DX6X7ZgrwdwMDVoqhECHfFHdNceXhdLE45zQRK6NiFqrF3ug6rJ8WLRJUsPxLSsG",
  "key19": "iBFPHeyuNusCCWfH2KVjudQYmGTjfxszgsp1FrYajjP6mVxk32DXeSuDiczMjpzdd6EvvULamUq5Jw7788eCt1X",
  "key20": "58bRzKjUfawioqqqSqZodJyuGEbikd3Xzq3i5dhMvjPY1FBt94944w8PhwTSoS2ycahxCej8PXWb8ErLDqZir73n",
  "key21": "3oCY4CMtuHATN5rPrWz5YorTTXQ2cgCSDPnuqDoTVYCVorTQRAz56cfVtcfJNvMvCPFp8SnK7baSH1ZAMu2y46kV",
  "key22": "5GXuUDEWQip4SJzJqV6guMtZnnxzjGZVVLaTQS4o7rcUBQ6dSaau6hRX1isNg1W7tGcoqTw2ADr1pfLPPyTToWWq",
  "key23": "2WTN2KJPsK2dwC52VuPPzToxNheNq6124op3b2RH3ceqRwULNGMgevkSNWRLS7zgzh6KGEnwUFmX4Ss9yNWPe3Z4",
  "key24": "5Q2H72qzb1N7ogjC3RC6aVYN25qErZmXkyyh3jgAhJ1oWbcPeuAsjaQH3aJgf23AwzhfBHvptDkB6xR2xLpWAEbe",
  "key25": "4uW3GrozzWB2jPtH21qV2QcGtjySEakfH2ExvTrmEpfGrZmmXXrfQ38cwYoUevtKwZyBGSgitvmAkD5mVjbuZrpq",
  "key26": "5tnfqp9yMnwmcBxeXwooRWmbW4d7c8C3qGdyQEJvCcAKHDPdaEEJFEhKv6qkMis1A3eBAZvJNA9saYX83eb5pZBN",
  "key27": "5cbz7EreNBW3oTiiSWBQ5tqxGRst21eJ4YtwGwhyTBCf8rRc1eQ7SykPWndmSr5d6xhqJonRQt1B837gukYQMcuZ",
  "key28": "3sA33z9vi5mMZ79otkDUtcrDAN7ey1GPbkvoXGh8uj7aAZoeEGcejdhEGPcDseEtrKVX4781UZ6hJDfSDbbDYKW5",
  "key29": "2JrYETRvhMuj3BUdPx8ZzPWyKc7vSc5oLZLd6FzSYbFWzN2WWMn7gQGiSNnCHdsk1sf1Aktyx8bpYAbtdQsSxPjd",
  "key30": "5ERaaCcW8NLRKvkgtad267BH9dktEkbeJr5C4WysXd1cEfwsoR6XNtJqYmJr2RKHHZX9CiVoSxWF792Tn2pT14om",
  "key31": "244c3mHucQ7krAi6boaUfV6RhDijnHeX6DAJkFUvvK67o4VbiW41uhfZvMNVM72zHJ6YnbDW97SHCkdkhfvSoDK8",
  "key32": "4CvzdVfpv6KJBLUBBfmq8sNdPiNUCnMK5rmZ1mr4RQp399gti5RzQ9Y4txrLZUb9gAnShu9WSBv7GwwzUY8EhBb6",
  "key33": "3GTeeeDmQm4eFruF2DnT44i6yqVo8sLW1RXbZp96HoS4cAAD148F7ei7TtfZeAri89Ya3EkkaHFKowYN1jX1DtgL",
  "key34": "DR89MA2CJi5Ut4aYxqJpohmNpEJszhrJbwZTUgVWKd5vo2tX85XZo9pASvq4647NgF7pAQZRbDajzQ47pCi6aG6",
  "key35": "3YWsA194QXKKNqcaMkf7naoib5RAKMwTvY6eD9PGTW8uJv16dS37NB6k5HJQvgdY8xPy39rsufDLjNRhr2DZZP8g",
  "key36": "4NRGxvqdPcwDLx1G6hELYvYznYixx8zsrhfGpQeQ8nS11jfhZodRrqBe8T8tpyC5Vj7i1zgSbciKsP9ccShnSuZg"
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
