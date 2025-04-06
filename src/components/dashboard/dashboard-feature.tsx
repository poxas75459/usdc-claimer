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
    "48HkfFwkS9VmpCxDVhZZin47xavhfACtmNU9QT9CfnfwARPQF6i5XzkZf64ird2daaRuGKnLRJvQHJc88t4awUcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ac3AjtvwhQtREwU3CjftDHkZjb4wd895EAd5mkK8D3ucQtHRHtfCSPKqpJazS74vwFT2eZFzghNm9vTbyHVrsdb",
  "key1": "3aj4XAnhWK3ZFnAWqTXdhftjuBEFCzN3RsBSbV7Uw9Z4eDLhN68AqpsBjSCKAyVi1X4jazu8MSX5jgYFi85DdUg",
  "key2": "54Ekipe1vGrR2H8kNPNKr3ncBPMLPCefTD9zaxWhSBX45eAVgKePKwGQeTqdrVMsEbKajMaVbG1Y2WUNGxHTP1V2",
  "key3": "4pj2n7MR368AJ32nhZSqrPRDBA2amLgNQAnVJ4QaPDdpDvq1DX9TPSpgHNpDCtiq1QBV8RZhAGEyCbw7dfBw8B61",
  "key4": "2r9a1WW1EKN2kZ1tWByMQ8E8hXzUs9TgimVgoPEtdSVeMYYq8nEvhMXqmtnq21TR91UhCRsM8HatoaHbYzCiuCFE",
  "key5": "2Zz8YXQLv4ufSCUnwe67dvUeUzxWS2kSNy7kVzDXsEa3kmZhgvgsT9SecCxVXccZWS69FywSfCtBjTgqZyyBnks5",
  "key6": "48avRR2EmyS8sutWjmxCTMzCfCh35NcFFhnnYMGcGeAPanXqCwnksFjbU4k459DyfUzuQbnpD5AgmyBhLpADbYpL",
  "key7": "5pY8G9R2yvJhN8xZUTsYAqUTBD9v4VkgX695fyByFabYqXPhfATS2XRAw7LUABtye2qYBFyb3deJv1pv2sNdn6Xa",
  "key8": "59QKdP44pJTovUa2rD4yCUNQiHxJtohAYDF7bpeR9e2CHLtaqJGq4MLT3FsoM2UwK6Yz1SvAqdYgnNoraAswFA6t",
  "key9": "51cXYcdccvtVVK7JmynmxYaLfi4jBrWsXycY3HbfvbPZ7Q6XaByW9aES5kbw4Ct9madapSFYGgFUEy3yqkntKSnu",
  "key10": "48CTsjDtCzxQSgNbyd52Ch93CFdGUsfnUH8Scg6HtmmnRPVfVGfzCX6QpotEKEKurHT3RMjbHKXqMWCWU3bB8kCn",
  "key11": "5LCaZMEx8cqeAq1Xtcp5E4BxpeUqeUUE8DscUCo7p1zesHuBtA1BwjR9DDeNBpDcmovT16ZFhRMKJ9mF8M5oVhnP",
  "key12": "4amhDBex8o65cRnhvVoh8GMAsXtwHUzM5cnAV4Ezm5P3g2B9HY5F6pWPx4iUDsKgC8KEtZf5uzFrj4NC9JYCUbnw",
  "key13": "67UCjq5jd6TpNyJV5kfUF9Wymqz99a54d6Npycf3Zz3BJ1v6svbwT5bkrkmN4ztLsBGusa1tVpGYyCcrgxeBLdVW",
  "key14": "2jSxz6YzthyQJ4PV6qRo89F4rYZVmXnREW8crAhoUQXetEeNWBqyXrpY6CeG9K6bYbVgHkMoCEGQ7CE1WsFhBYhd",
  "key15": "5gswdBhPrBWNbQvRD4eQq2TFEPd279cHkbMiViBhJDXW31sdTJffDEnhJu2xLUx9M8qDMLhhmGEAwCvBuPJfJTbY",
  "key16": "2x7BL48A2inktXF6ztwHHkiNmVLj4Pxo1Ft2DjG9T3JBWNj1TwWDbPR3hNWBZtcPw7m1rors69kuZnkkWUyV48FY",
  "key17": "4wuGvzULP5XMv4g8EV6ghQmieNAuAWQ4KM2Cxbk1oWg1eA7zqjAomFtAFXW5bisSiTS8NNEP6A7wKNZPL89ZzLyp",
  "key18": "4JbN5xYxx4wi4kykgBVyC2Pbf7N5botyL3zFJqq3kKVW9K46SfzBLFe6Va3ZbXGYnopir78Rg8ZM5JzajkmB9GJG",
  "key19": "5viNXuQJCGgrHUfkMVHVbeWfTsbQYy8XsBwjbKM28QDWtuRBknCNtGPQcjgR6C7fB75GfhgY4U5q8JsHdu4qz7yL",
  "key20": "5hQkvtiJEWGNZH9eicA7hLVdFAch4xEy6kN6vkf46qsmNbRAu7W7TQc3pk781aPCwy46p6C3xj9YeWv2dSb2HoEV",
  "key21": "45ybphvTTuVA7KwbhRn9BiziATjQ5podezxNZPMbsaizKJjLjwseGqbvKArbzjpw97R9Mie4VXuHSTRTGLkwgiQu",
  "key22": "287xAi3xuypFGmvW4gwCLe4P5kaU597VizvnHsuUxMtz7ALtZs5ygYywxpNSS4M47vhF8KvdeWsj2vFLPTc1cZau",
  "key23": "24zcEdBRVMdZ8xwrPek99ZKYFEUrChPU3cY2gqKL1kQENyhsyXVjSV8s91oQ1viVFCAobQmBvyEhXZmqt94ZeHei",
  "key24": "24C9YVCSuonZmifJizC1QJS9YRWqfcRU2yQbL3UaTxV6CDZdEfs8oqCRotsJsgjiGKZvsMNhChLpT6ueVCyBdCAD",
  "key25": "37CX8f6EmC6jvmJpXNZ5STgcQtmfgtAABEAMC8yVdWu2PeE9PwaETdYccm9YsbPMKqxseDfpL4x4WnS68fXoQwvT",
  "key26": "56j1rgLTwTNVAtuZoYfwCqGn4Gn7owi3sh9DyzNuE7WPFW8bXZUsgXS8rrdAcr9yoPDYyp2ipG7qXNNiVaozGBsY",
  "key27": "253umL7yyWRaRwGsZ2RfoQwwnFJHgNDJYqSbQcFAQDxwEMxBPDUk7y4wTcSmUPpx9GhYarVK1rQSM8WrqRgEJSvX",
  "key28": "9tjUTyVwH9Rho7YAdW4oEBwiBTFLPhS1dUh3UkzqVjGoTFKbnmJj3VPThcAV8cNkuCDA3SB56z3DDNmCJQcPRbq",
  "key29": "5LUy6xSbrsp39n6vuV1cxA7YAJaRu9XjM1K6tYzoTRRXebJrSRtspFu1mmTjpV5366LsS499PjS5NJBVgWnJvHZR",
  "key30": "gKPXphHQ5t8ZSKTHVE45opfxeG1XRZcRU6LS1omRhqU5g4ztjDkthx8HtJYxzuPdziUgBGdEmABHMCkKHg4i7ou"
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
