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
    "5sZBXveJg7zCjvgeBzJtdFq8Zm1D2um6Wpi6vdqDC6jqJ4EASaVCmSY9FBmYnBP2CRBfGT6nqsf5PcK5j4pDgUyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BnXcnBDQquU6yo27NQvWGeqUvtHX8M7hbjgVTUiLYSkHNbb3Ru5zETFzRjVtbvfeuWkAWsuSmBcsQ5nP32W9kQi",
  "key1": "2a1qbCECUdutCEqesmYhd7SmV9tqC3uAgU4DHZGFcKkDEKHrskZxMiDsArQL8GsookYUXSaWfopxotkre51WpPSX",
  "key2": "49AitHriWLUDeG7wXZYwpbFs4hHsLRo9ihTnFieYVtnr7JGou6fEc8FBYsjRJcq9VKPZfsWen6LBZVygYxhSAafy",
  "key3": "3j8oSvN1DzUi5hrP1guF2uAQTkwxksV2XCk9RT6E7RB7vKfuGCYSbvwSDh1oAENeaYv5dou3rKSRo6tEcrzoXvft",
  "key4": "34Hd4hmAct3VyC6oAoMPySM53WwN3AAqBSnkTQPgMaAwxCaPJiqWPcdSG1PNM8D2a2g89JYcFmze3kwBoQWAomYU",
  "key5": "n9cV3GNVozVMYDJVHfqtWKH2amUkAY4QVKiqxjoGA9XQx5ZkyxfRL8CyzZLMn8JWqufEkvXX1vP76gqgDBtnB4w",
  "key6": "5vPVQdSeXdYvMddqvrLQZiaYHkJzmJFkgaFuaCBxyC5pwK7CGKeshbwNqrscgePfpX5kXeFhHeAELPVXENxo1DZj",
  "key7": "5AdMq9mpm5GuZ9TDGhL1M3XpbCS1AQiSQKhXKF9ZrpmDZoLntJrnc4CPoEVjoR7DHf4ipRpHLVZtBGiNkVqR6tXC",
  "key8": "4Q3GzcNrxst1HoT4VmDwkNNFhS4TH8PLxo3iPViwMhKrC9M47U5ryijHK4AamWpVnRPPz4Jvmr9k7iMur5YoZh3b",
  "key9": "4bwm8ZoYsiXzUANPsBhJmUmeEHoEEp51QcXybmQ128EB6Dha4FjErxgSDLi4tWr3U1GbnWwvmyhY4L1npYumqpCc",
  "key10": "5DUZMSPnjNuyhpgg383nDR7cMmzoMewsTK8jaV861xVV9L7zKyV1fKg6NHuVPLL9G6u7XzyYBss8Ls4K4X7UHSXX",
  "key11": "3q5KciZeUckp6GdBqnLyULNuNjpmEjgVqLkY8f57fGxQbQAty8xKeRiLBV6kLmKsJQ5WvFrSr8W3FUCHZcL2ywES",
  "key12": "3rfJVGK6FxAfRT7DWyK28JJZt6zsgRHGFPJkmuynr8jpc56Vc7UFGgaJ9n68YsXA4uSaW1tRDSZEenqdyxz5wpFV",
  "key13": "3Ra3iexEg8AQFuV4Pjx6APTETuzdNnXjrjkMmmzf1MB6fZMNaDGw8nQWWbUFhLcutW2218hBYC3CnGNSTrXWsXUt",
  "key14": "t2sn3KxZ7sYpWaqqsXWUQuuKJR5RxYKvTFXfswFC53HhCyNC7ZTnhoyYTJjS7aG3M7H97VrvSHBfQD9ykvYLEN2",
  "key15": "5Y8AzwyhyhLB9fmHK8RZUYaNNPdXPYoH1gJW8hJHB4KusK5y9fLhacEMsMR4ScLrep9TqBAmo7y42CoWKq18YUBx",
  "key16": "2nRxNibqPSQENY6xMwA6SkYakzRYFM3UZ5EjC3e81QgwXTK7MHoHHNXxzBvqMnAE8oae2txKkituFNxATdq3Ta4v",
  "key17": "651LKkEYzGZNPdt2D2bKRK5yGUFFRwJEaRNCcDr8P1d3k7yHtmfVnp5QGCZjGNgnNR7UryKHHKg5Vao3TmMNpKx5",
  "key18": "wHnQ61Fzrs38tMdbah9gRJtaMaP8zQ55quSsy6ruNXQWWwBmxJUP6eHAc8chd2Eorq38xStGrDWxf9XMmqKKTK1",
  "key19": "t7vGuyS4ZAUz7G8hpRPj7wLzzG4cLNrZVAhgrENDW2FvwEyvRWcoG4t5exBUFUFnbtqyLLN35fbcrY7NX4cKbZo",
  "key20": "4WqsTN5iVe6zLzqqBfLvGoQ3tVYwKmR3LVWBEiqyxSVgkz2gWpkCNA5jGcNT5x7DHy9nFoNQFR9rGr1narTqYNAR",
  "key21": "4WBYczKsKh95mmMNEeH922jQUZ1Qd4rRF8xbVH6zZDL7F6fuakLE9V2Ygc5EgDAA7tkWsQbcn2tmnMygUkiAkqMD",
  "key22": "2Vk8cHUgt7rSyJhj45qeSyDdhfA9qCghzKNUTSELZ2QNtHhgUPgzAUaMUmr6aA1PGuq5CVeHF844ubRvfydYNM18",
  "key23": "4weBg2XXxoGrwqD4TVMf3SipN51JcdcNMiQLdkbTHb41T35mvCZ5CQPknRKSNnKHqMNs5ATFGvRpkp7E651Wr67y",
  "key24": "5Pwn6sYXR5cifbzacR7PGDKD4YMyG4bvCbemkssMBhXuXS9S6eSSLyPh3WJqTWAVoqg4WTQwW7nZwiZuXEyXrmbS",
  "key25": "5NiqJPh4JjcFHnLrKcMKFbeVHGEvvP1z67aawBBDJZtdy3soCsfyvQprzy4ayh849BQNFdsJz5Q1m6q4UHrCKAA6",
  "key26": "3CcUhMvb9mruvKHCivaCjtjWHffDHkrfq5drdeYLWb6K8JZKD58K4LknR7pTpmPMD4BTGKjAEWv7RdonvsLhFkzq",
  "key27": "5RznpjcqatsPaZgSkZpnCxkJzTYU1GMMBqNjkxjrN7U6W39oasHndmeygTmVArDb6hNDjjcutuSX8c31geKX2hA5",
  "key28": "2vp87GyV8ibEcktFRCFe17sFfQVn2o86yHXfrQ3KAAEA3Bew834PTshP692qE8a49rD6aEg6hLD52juEkd3USGqd",
  "key29": "2muV4EYRDX2jpXw5LSsyudoA9kCn3NTkabkBArKg2L9Sy82UMx6cpfd4jNoPp8SNMGNF9vJFZ56kHi9fYdaYquM8",
  "key30": "3Yeh3HNpWyu2EdcaLNs1j4dzQHvfDo39i4rP72c2PrhaRA57tkzW147QSvonDHsEEzYEjDgFLxaLPJJ5rQLqoM6j",
  "key31": "3AEVSLMam5E87RyN7aJwp6Voavhf7wP3MvNfhVoAcGLHxHKe2gdMbxZndpQZJKvYkhGi2MepKrQ4EzWYtRsf84hQ",
  "key32": "32xXQWFPGpGPRFTw4oWFATDN3DKrcNd5k5ZVYeRQHRTC8HUtTduyCrAwjRn5168znTfP9bYgqHK1wGmJCF5V6XWN",
  "key33": "28oCuXZPTXmeZ8SKC15mVqsVKUnarx9HGbAgFN7EVDtq2ysnq7w5pVAdPeatuTxkSTBUa6g7wii2ktBWSzdVeYRM",
  "key34": "4BT9RWGg35n3DLwvULUm6v5C87sMKLc2F6C7boFFDizCitcRxLwbP6fQb8U8VXiEzwyoyDqrq5b1uWXmzuWzq19b"
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
