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
    "51VMDpUTw8nj6NwU3MWuHLRUqHPaUv1cVVQUsXh4DiHSAYVk1nrZ7aYcTMBUKFyo4tMwBZR8x7Vysw6xwT5Tegjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HKe3p9AwgG8EK3JFVzsoKSzMaXJCY2DE69vockuopwyFnAubNcdc4KMr2yKLwSadwogHoW6DHEo24aymryinuFL",
  "key1": "416JgG4z2E6bGxxvx5zBzcW1sA4regZxQGC9fgFtEagiKheZxeFzivcWmmRGCpLW4EXPk1acvfnh87EFFiot4tkb",
  "key2": "2g9JMEhkXKHYrdHEL74qtEkcuxRjaNf8WoTktMFqWmbUzPPuqmPydmwyuthMdEXyo34nFcewQAEkscn3z4jruj1C",
  "key3": "2B6masYqC12QdrugAZmBCd6FE6xABdTL3UZ4h9sKjUT79NphiRt2yjJxFgYG89s6NcJG3K7PvbEtaTrPazAHo8Gj",
  "key4": "2FECJ8D5BcEAmMrnEJZfQVBeUCR6LZYsYdp2pJ1uxb4x3oKvA3c4rG47uAKLnZzLpa6b9X8UACbwD5Rk6SEqdGXE",
  "key5": "4qykwD8376fMJA3nk4h7moHbdwJGbz3sdjrF7GNoVMbUmsQ6cTurNSo7vrWfkC8i4RLyGd9vkTHdegebF1NdQ8jM",
  "key6": "4cqFx3xpA5eKeMAdkGTmaEPeVeGKCNvLKuH6dv3PrHboMX5VYJnH5BMk9AGocrWMRj6y3MKcE4yLBXRif6GqvRbM",
  "key7": "uDBxmaKjFhuDPqxCubAgiV3856nwVd8TjowKE3bY1AKc2tdFPJodv9ficA6J5bFTGzaNuq5rP1qFMWTvu6Dk7aD",
  "key8": "2peNFoUTJBSjnWT49NGbbJLxZTAEcoMiDnz4vq8wnW2H2USsjJynSvnuoQavsqqZB7m5KVyE4ZVzf4XkuXRBwDGj",
  "key9": "2N5rBt45VAm3csmzkB7G3Wg9X3FncpRthQGCFBu898WeKC462ZLozCdhNsv2pThrrpwDrCNE3nY6WjCEmQEePGec",
  "key10": "RXxYZHAAk54yDcjGUkQzKHe4Rtxq2tFXwtipih1nQ1kLw1hRxDr89vbYbYsZ7esTVz9rmRVFKYxK6DfCogWdhDU",
  "key11": "3hFwaZk3zHpZzPdzJhESspr2pQK65yGJzcMQtNHSEGvW1Qw4gMmWTJxRDaAAaHVGpXBhsFDWKWGPt1vP7c8qAWR1",
  "key12": "nhhivhLy6zCePVuBmzP3TgMrmee9Sdhcx6aLXX9gGhcWBobv38yYzCCuHXDD5n2oyfzFvnkbNeuMvXh8L5FTr72",
  "key13": "59ju9FajUza8nmVvkrM8fo7wsuCikX6UDQjM6zywb6gpAandYnvNNyhfHoE21o7C5p6g7jCoqkqrt4T2ExWVHfU6",
  "key14": "4RqyipT2VxeFZkGydA57UVHBhN6vzmkXCx33tq99jKjWjXNVf4mL8YDDcpCpbuvoj3WiEaRcCPrNSU8Xk7Kuyu8J",
  "key15": "2Wy889bkhLVYqvVcbwnJh7VQjqjd8rVJuQDctHXnmmta7AEFgWoSVGRp8q9hrL2Dc3M51tNySFwPyz2cgiyh7erb",
  "key16": "tSbFWCv1WFdyvb3EfjETPD5E2wYUDdLTXcShB46woPYmjXExpCFrVxQ1MGGniJspaFZebHZPLan7Pv2cmRSRq2n",
  "key17": "4VDK2N1TQHL9NkggsVSQH7Xcno2hx6ctJaxRpAZDmRsP8ATNDYHXbk5GPxyQFeUK1w8hTktef2UJ9viRiWY1SFWF",
  "key18": "2recamo29jMuF1fqwHEiyickxwk9aJPq4hRJtrBhDa7V5NY1W8ojnLffRR5mZLnMYSjWuQwA1xLKVQTQTqtSivsC",
  "key19": "3bBXcjG7a9cWgb9HSeRxkNPautjLA1DLdsxa6F4nZzhsz8VagwYy6KUddHZ9Bfqp5g5cw8mb371fArKwYrLNcqj4",
  "key20": "551WuTh8zwt6F9HD4hXJMyRYwUhFnZfed92b53Zha4sajuJyGq4JXsHdTJ8pn9n9eJKfMfCM5WPiQ8rSVCMKMZtv",
  "key21": "7QiDn3gCkXmvKYmKUXUQGuxAxJFczJaiNLZmUDLndjXbgeM452wd9NtvT3oeDuVXmU39ddX35rnBLa4BXQxtB1y",
  "key22": "5aGF8PgVUJ52U8xDtgikNHbrQGs9Jsp58NcbpVY3ba87uWujjqAg67R4rrrKUic1Ly7M7k2E3zKCAGBQrpxcec6P",
  "key23": "4wK5EEaJsz74CA54KjVLZ1XyXL1JP1MjUmECSXt9SVHpLzThhNvWSwh5PCUvwghuyv3kZX8pK5EPH7ZF33jqHXxf",
  "key24": "5i99dMGHUbBT3CQDrafWQWPB2ps1tqoXDeMDSPxq4wAketCpF5BWUsjJ9cNzL1ML1SmGQ6Cu1y6ezcdZuNQ6v1ph",
  "key25": "2LkG3aw8tmMDEuaQGUtpmS7heWNeuEtmwSaLwvc3HxuU9uQcXZ11K1AHy7M945XWZYASBetJ6ZVCHetDCp7Z9Zen",
  "key26": "x6o5py2fATuMnu42xfky7APi1Ses4oc2kuyzm2jQy7aNjKZmGPhZi2B8EnmGp73UVeWTmsEzEnbJDTfA8k9QFpL",
  "key27": "5sConDEQKHSZ9XmjgJemeEHiyCiWyR5Af23AwXpF7pxNGrnQeQzLw3FFF6k9Q8pyEozn1Dy4g7q5HpzYHq867rAv",
  "key28": "XtDPqRNnnUqsLDGG9XTsaSrdrb3pSfU7B1caKiXDYbvN5CWgtUutMAkcKt4m6SaJpYZmYta6rSBp773eaSwjp2n",
  "key29": "38RuXdBpjrMHcpfvJUbBkiDi1zuqXA8K4NEfdTbBwEjV4dZuSNeRQrzLck1Uu2GuCpgGsZEd5YRZS7KhZX5cMYdj",
  "key30": "4bLM68eTifLdY7NeRnC1T8M69KWHuRZgQ8pgGt6oU7sVA2h7V1JC2a5UjrPFpv4sq95TXsucjo9Qq88ZkLtCEfCz",
  "key31": "5rhFKQQZRa62gzAoNkpgksrrhvzz5GwuzqfMJF9LoXaTm7oFeuvf3UfND5HB7kd3K5AypFr48s6rafSUjjhBCd12",
  "key32": "5gwogGJjN3UX2qC6fvCTHGwvk79BDpWDW9Cu1c5GWMUucABaBDJrL9UvNArvWaj9QvmbKjAU57RZqu5aMHGXksx5",
  "key33": "2pkB7f81B2Ri1pTbPERrtQfkNHAU4xUuJz8eBnqf2LxpFiQJdmhD6DK5meymPSyyEGxikJBVKmU457pHybY6Kbv",
  "key34": "2iwDom2TbBWBYpVw26AGnUkGA2jMWVqE3mUewZSsJdrgTNJwpHMW8SAZD18C8WECZ1tfVyCZV4nB5FD8GvcS4Ft8",
  "key35": "3innt2MjTgaLyKjNjAXTBhYja6AWVPzzs24RomkmindtvqeE6tau2KXgF71QWLVdmCSL5Cj8bfdE9jkNoyeUYAUW",
  "key36": "4Spz6avTwD8DLej3T6YKC23yvag1J8kmZZEQbYCGQSfKx2VD5wLdxS6nuJHdxN1GdSNFZQzv9yrhA2BAudm7WDWb",
  "key37": "5Bfa1mEaMRVFo4vcWoVKikhyHVS6UE2ZeazUkACXgUcovH1xEJaJitqivnSZSK3B6PBtP1Yr3cEFsiTvvD2JeNq2",
  "key38": "RCnJPoKXKQNRZ1R6dDzPogTygKJ3hLFLU1owYb8pBa8TMKk4sHLU6QQpCNuUCTNzjFhpHAsEBd5zWsMgXLECjv5",
  "key39": "g1un19EcCWT6WxQXVygvJ3dqytDMcnmVuxivFbW1hxBdkqCQk8TQAEFxW8boo8nggnJco8VSTPz18gdb3qyECAw",
  "key40": "5waW3765v6voZTKEvZBJCXZwqpJwc138ZB7NzwPjMVYZY2gsXFVXzBRoQ1ALuGtVH8TyPeRiaLphZpvppkzxgWdi",
  "key41": "65e7u6Tx8wS5DUroczNfest99oH9Myi9h368yFh6vikBwgwih8FkmjZgyHtmB8HQmZtbwjd3m6BdtXM47cbkr2NP",
  "key42": "4iftEpWNVbxJWJiGJzAHXvRYoD1twXaU2ok7ftNXrKEXx51NUM2U5aiT1B2HJRkcw62Hu22odVfExRUP1LBK9URS",
  "key43": "W8UmTPU5ywMk6JGH57XWYGztMPKMSZK84uv4P1b7Vd5VyNmoSxbVb4RqU1hZrURERSqci6pLLC1r83o15PWT4pR"
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
