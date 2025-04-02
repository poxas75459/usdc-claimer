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
    "22WsNp5wiFBufefbKC2si63V3W6rkWLmMK47ibtpXThRJ3qdM88WFq3c5qQ1fFhRf8rvNu3ghQ4ruYQnVoSDhP9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CDCdCBoHsJMRfvFAG5fsd1sACxeJrKeXKsUwapcw2yuJTcWMmdH5My1TA6At3RmqRDLskFagHY4iWJEvcp2uYPq",
  "key1": "3Fbn8LPW6G52XYeEuBdVWXvJYopdDMkDxgV6xmyV2qxYA5n6kxQNh7kG4mAmZi5vpknLd8tf3ucLMog542gQLYXi",
  "key2": "evmaUi8bPgG9jSJkkEZx1yvUF11rTViw2CMPu4N8gbpCjxQkazvA5gTYRLbActZJZuhFPSoMqgCLSN7319kSvZC",
  "key3": "2YmmhdeiPgTbxM8dctoadp7WiD8r5HbZrHALXycWDHdfVbL51yYdxyscV21eCHAVEimazQbH4RQ7qbyEAfQRm7yQ",
  "key4": "4VBhiBjVfMevffq7eLNpiPDrN8B6pXsjhTSDUhwkbYr5xG4ZeayUucsxWUFr9usXTazf6bVmmKZDUHGs15zimoaS",
  "key5": "ifD87YPRs8JMPqNgYiry2fGaVraZXdGnzRmdXQFZrDod6rKnYTHnSZQgBcG5RX9iK2WTUgnd7FueTEgqbpWRuyb",
  "key6": "2QN7babnbkeftebaYu2t8KwYVXZ8rTuETjRMuzps9baSEhEPYqcoZjYzJDsbQHEqkXo3rLaMQV8XpmQ2QZ58KQw4",
  "key7": "65LMsd18RKSSZ4mGrTn5Yw23g1dmvb13jMEA54jvgBws281sAykf2Wbw56C5MuEL7sM2adrhXiB7VWZ763KAs2MS",
  "key8": "3SNduK8Hhtguj1LCC7c1xEZBmFqwd7QUo8A4VEYBssbAk4Bc6G6XWgBxgvDMwWiXsjLVc79NTSuYATwxxV1JA3ko",
  "key9": "2JAhPDijtNsBRbN83kcrUQJi42nLewjYryUTMXCHxYpPcKFPmNQmoR14gw8XEiUZxQRAFhmRjG95hd5BkyV7f1Tw",
  "key10": "2NZvREHzYc27rLRNKt6RGo7uRHWjGGcceQw51yJXGaGe52vy8zij86vQHPcvawDuSxyspBEz9i12Enh91UqxRkSf",
  "key11": "5BSSWHhVUSgmopj5F6H7tgzedFuoexvqrqqvQtqyY4MVPqVQ1RtXDrUNX1oAqNKdWBQRJ2rHMF7RfmL5Lyv4KeaP",
  "key12": "J3jqBkxwCYiBNayzBjX96dYC9rY9o9KKbCeAkPCP17ZzZbusjB1jT7swUcBMpTrfnwZJ2tXwZPZccaRM6f3T35t",
  "key13": "5Rb9H7Lzq95mYo5JHiXQX8rkmTKbmKCsguJfUVc2otEQYeL4b355fUEwMmK7tNJ9NpocjAQ5gEatHo4pZt4jpw8z",
  "key14": "8MYX11xuQiqMbBzAmkdk5GwwgfcadJ6aVbq2Ks8kFycoNanTQbwT1JK7GnyupkX1DBNPBYFuL78fykX3jYWja3T",
  "key15": "3yZyHHpHJ1DASoKZ43nfrijc75CuCq57xwArd5WuCHDXj8mq8hE6deXi1GkEQV9AumGnGpV44F4dydt2YL1cCG2e",
  "key16": "2Mx3FuqKBu8YULrV46smiXoQKs7aQe8jpcsnjk4x8fEf47rUYqjvNvcJDjNdBtzVEVYzLhEJyAXU9Tbaj5G1RShY",
  "key17": "5AMqRrTGoXtdaV7XWjKgCSx7dxPmCmbW3FWzGwv3878EucYrJDh9qWxby1GCB3ArmoQBVNoo2AKs9pagspSeu3X4",
  "key18": "4eA3pWb8CDTycwxDLc9WyyrkdqW6mER4w3231ugrMri6Ec9CQPDfSo3DHeXA3B1LLCLeZjtVmb2Wo2v3u6yKynzA",
  "key19": "5rC8b3H3EabxmB2k8tcrnVAyP8c73NK8q9gsRe3xHroHhJdhRbfi2pzBToNFpzMEYp6o7Yqd1APyhWkKsQrZM1Fy",
  "key20": "2neCVRd1h1cLMyFP7D4VppMiqMj4p6pZL4H5kHF6BLLboRk8iNTwBzDDLFXY55Pse9xNRvnKVyo66ksmowFRdhZt",
  "key21": "4VL5sFctWPGuoCYwX4PPeHUWyoX8sqEnYRb8Lp5tyghDHw8HKaLJWbZb2oBBkJzH1s2VnFXzX25ZsckSu99nXogH",
  "key22": "5Md4yPHQcXJ4XuAwcMoGSAKQwxqK6pCnYJTs5VqbP1HBYn2AJic94jdUHrsi66WVki3tPcx2q5CTKWPURW1KZjQ2",
  "key23": "nK2zLp1jVqyTyexULU2y7p9KUaF6xDC6bPLyA4HondxdkJg7yphPu6vK3FmFsszsGzfPEChXCe4cSTdRV1RNNf6",
  "key24": "5hkZhSRrRMoebgD3QAXpRJyD3z3KMA4f1iDMLeQS4uAkRYagcfFhR6Bt97zsMH2GydXbZVJ4g6cNsTCFqG3dUBup",
  "key25": "yyU1F3isaFrr2twyNJjfaZrjkzY41tpcC6zJZizgkzaaUsjwP9CutzLjhZ1gLMaNsAq22RtDzYFFqxWfK45oT3K",
  "key26": "61jz5KZewZMDz4fi9TgkCYAu1gKDEJkcCJ7vhfQE5mvKu7RTjqJZXhKPC2xfojZHtmFr1EBnq87cLvuQKdeEV1Sy",
  "key27": "3x5iAty12dSubezeeZVDxq7KZGrwhkDXxsgKGQ4JJBVmAC9AvJh11amPgHa3phBY4dDPMhAn4PmDnFShpVFBKr5y",
  "key28": "4veJc3PCXpv5y5HzgAV4SdwTHGBqLwJrmHQaR7Wb2UoFh1Lruu2Z8X9F2s26JDPnhLK1uiRH3xYtnJt3LY6j6LJn",
  "key29": "5gA5ap7oES4GZZohn97hbxcctrD9DZTGAzasfyMBWB1MNVSwktwrZSRrZmQGVaygVPxeGzJ9ffjDHnsuwhpd9Rgm",
  "key30": "neqLMwWsRveqD8YYowAMrZN3yaJzPxhDFfLK5bLBafYJ39CRNiVtgyfDjWnWZGZHSu18sRdjjoLyUAq92JbHgUj",
  "key31": "2Ewcgmw1L6n8CYoLVHLgtgPZqFNxcQmmCxXvuK5tEJKy5kBvZb7LPHxMZ2bjT4pQKNZWX6yEYHRCjfkFvHfajr9g",
  "key32": "5RwqwuFmnxFn8dr75eYMLxknQumGbsVsYDVirHFCExEkSCHbkZzkct6bYwmek8q9gVSAmZuBFcjQmWwo6bdBtxbM",
  "key33": "oyVNt52uhjgvsK8jDexbRKWCcmHnc5aZ4rH8Qr2bzi7uLKbKbusg6RhAdvFvntaQGTtKveDARrvbmVxvnJoFS7i",
  "key34": "27Ad1ia96iEh9a8G1YY9PNRMPJUUmqGd6ZoFbEByRKKw4jt1hBsNYVSVUDHia4DLZpLJAA93tiP3edrjwkzV9A7G",
  "key35": "5bEJuhEwRZbLGEVDUshvcb1XrHWA6Hno1xhTDY5XJZRyWgBEJJvLzLLN6MFQZGYMiuqL8214UdxHSpaf7pWhaiHW",
  "key36": "5k36sYGM6hvjVbhL6LMB7WWuBMBEhAHFP3kwXFBUGYXXwremcFT2pUyL2CYxd5xKTfzCQnFiDpsHnZuRx8GnRQSH"
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
