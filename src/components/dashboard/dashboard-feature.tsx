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
    "47afxQbs8AVki6MpbJU53eAcwW4VXyi8HdV4Xc1GWbph7GxdsmpJyLXtoxKshRgqFZun4TtKswhQfq7rRzqhfhB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46B9WmvDj15jrowxFfCPcnHNiTjcE7VStjkZ2XJc4NyxUEXcg1Hz3Na2LiJrZefhtgp5FtTgfCLSa9ean9TKmuz9",
  "key1": "2QuqfGn5h7zXbKkgHjkZzRvtqU38aKKgGbeotXBt75FdSvg2yHtrq9UivYoDWvMFNzo7tFFTenNPtbuufrt1FbrE",
  "key2": "5Q7yyuoDwswVwzvAjquC4svr5G4g2YP6vNc69LWyZpL1W9qHxJCr5Kj5685EnpFF1DiTKwKUnWfUE9Ksxoke2zCK",
  "key3": "62DDasFopRkzk9ReKR8RAwcaXu6VBTexLKCZhknZJEznvdRWTDNtnt7D51LzCEjTuJQVArv3C73c2BSCqp7fBHLH",
  "key4": "5WF3CEoybs4ozMpgA6WmnKsbnWkRifvtduu4EPjaC5HUbkcm2bvH6YAy18jNhjG8nwcnR5mFJ8Xx8AZsxDV7MBYo",
  "key5": "5P9gVLTx8thHtrUk3GxSdL1SAemjCTAMzRUa63thqWkvdi4eWYPTd8KA4uMMHjhnxzPz8cRDxz8YL2ZB9jKuUv9J",
  "key6": "JMBa29qn4LVtaLFoSPYgEqoHrjC1bDtdUg3tPjjJqU7rYUeUyZR8oqiEnYB4cj8s7ZMwW8uHhFLnUbBzqepwiU2",
  "key7": "5NpYkwtHTyW8kAYh9bHZ2ZWmjsgtChB5kixkFSF1onJKL71cvCw1UgE7DRoWCwvC6849zVNm6Y74A2638e22Fo6D",
  "key8": "62RtRu312LVofdErZExUBGqeSr643rss7QcxNr6fb5HXB2rwAXf6qL9U6CSRJSjXP8reMMJ4XvLSnVjvzcTjY9tJ",
  "key9": "4zKjUBc4kw2m15DveBEjTqEUmNRCuGCqzy6Hsp2sqnS5pA2wVgZgc5nTdcXqDkSWGBrGfVyXKfqAxHYfemVQvQny",
  "key10": "4Re5mChwoHfm6hCXTTSVbMmxr5w7Kv8jC2M7gSXzMbSmJdCQa87CFBHbGBVZUGy8eEKT7P5CBin8Nxe1W1vKUZ2v",
  "key11": "4bc5fk6T4t1fPzJhhD3TAxCSkgBT3skBW76jGHkAg3vfQF9qDTRepiGEaP9iY1krAQU3h2JYGM4Y66vqBLLT3Hjf",
  "key12": "5KWp26bAvBV3SBeKDMJL7XqPcycfKPhrskPGx1qZZurVPeCjH5VosivDoJezidPuun7ZxDGtfMDzn13Pbhkb57ND",
  "key13": "3n33oeF3YXNsUmcMM1VDKMLBg3FYg7hqUDU9VgqKNHFguF3ignwBvQHY34CEKSP6eN2rcGrnz4wdgwymUrePkUJz",
  "key14": "2mGjDdBcz1YMSSDQVzNFnEgx5bU8CABuiRWnbSrEdALedZUjnb2Xp7sGU6r8QUGbdGWaySgfa5CSH1v5f5RXKuN1",
  "key15": "59C5E7zea7W3ubYCA7xcUXYt5gR9CCzybtGrLX8gM4gVePHVGxsa2TaK6jtPpTQrjP5Pt16xw9prtoxShiyJJdi1",
  "key16": "3CEV2R6MoQ4KUuXvpz5SeGzkUWoqRRydB9k4SaZB9EaNPJDfzwVKv4zH7B9corWvEse3MbFUomq9yWZEBHHWVF3m",
  "key17": "4SiuCZvCczdUTM1MStsDytgiK4Dy8q4niHQt849XhTdP65t1KUnueyFWJntLfBAzN3TuBpPLa68cmCYXHgq1MdCc",
  "key18": "6hitFR8CroPw1RSAbSE9FhWorKDZXmTWHBetrtMBj26oKuW9t1niNiYRE8PPJ2PvS5hXdN5VpJ6f4F6ecERHULs",
  "key19": "4YXrhkgGcCWTmAHWfY971ny742pWqeLW9wXhGVeXLXa4dPbZgKjJQi9jJr6BYzLWVxWQe5WqffTuj6aoCJe2aHsw",
  "key20": "47cvMywGqBE51bsRp2dPCaZQkt8rUwJruMivvCvBnx29bQDtoAYwrnRD53HfocqgZQf7r7EJ3YVZsWq9XNLdLi7z",
  "key21": "5ouuMPQhRwbNjh2C5xN8udigoc5MN5HePhQv378N8u49KR14woeQB437VghHAAjnPXVhRmt5qCWfE4SH1uqcfxsr",
  "key22": "wEsRB573f1RojT8Vg8o8GXXhDwmVqi9a5cgaEKosynUH7zAciBuzdh4i8KB5sLZs5cb1ywULERtBJzpiUkWQwPp",
  "key23": "3ejUcQhd7pMFhB6EbEkq12vD3SUvLStXdxScfMjV5jgorZTzha99YUuSDX4z2RHGGPK3hrje5wKUMZ2QJ9aBYYnT",
  "key24": "2f5tVBkZXMQk3nmyHcnmja2WXoxFfobbxXLwgJx5uUK2NjHsH4c2TtksLjsqGzi6fZuxPQqLfVWmGgR1vGbWveJa",
  "key25": "55hpwpN9HW1qMtUr56yTbgrJ7Hq8hDdCFaTzSZj5Y1x7peatZkn6RW36JaG5cw3pzb9arYAWVLgcgfuboyFWPiho",
  "key26": "3v8fhDPKapARsSdm8S2djFZUu7uRgt6nXLcmtoR5uYwmN57yrCcmRvnMidF3dXyydQKHsApP9EZnHik3HGDmeHVJ",
  "key27": "3Zf3XiCVv5xtKNSYtXuTyh7BkGctXV5LhqNoA4SrzmwVoNuqYubJ1jPEzdgRFzF5N3cwWrZ7A8Z4qftREU1HKbsu",
  "key28": "4gphEFH5jDoLj8osRCpxxRB5HEZt9oZM5QaLSa5KJY5Bd861LWcpnBVg2YLEZ9ppxAjMhYyDiZqoEd6Hx7x3JVLj",
  "key29": "2ytNTiucw7LKyFwu61AdVE1rYLNAW1A6ZFQ8cnhehmVt2nBsAg8pPYhUyjT95YaXMqGJPWkoiqM2S19iBY9PTnRX",
  "key30": "39XW7Td1MHQ3f3wv4oFfeJk2ig7HwViwtY4agtS1Kt8rAQ5PSV2ALyGdGxzXAyWcEmj4ARvzfDckb1oBCUCEWMKs"
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
