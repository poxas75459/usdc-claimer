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
    "2RxMUKrJERNhEhV71CQJxGoEGopg8xdvd83M1Nbe9Ny4rocotNL1augTfT4rhKrDSXXg8RSj4jWuiPrdpnnAsBZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RyL5WZLcE7uyqhSkNteVqb12r43YCmNaozrejBoAYbLZP5NeYWc7LSgJR6mtgaKcZcgWAsRFzTMkFy5n4ejmYBx",
  "key1": "JRUXY43jgwoU2k8dddmocpzhd7YA6SZGsb2aRcq2CZyrVYkjbPCnsoeXKitvGkrXNBR8TGhnSbRspJqoBPdnxRz",
  "key2": "4hma22rnbVhDKDbJFciL5XMJCypnaJUYRUQwqLHgBaYY1WxVgzS2GzJgwMHor4UFhSjL3jeTsbq9ne8Rx5uLtiJa",
  "key3": "a8b9RNTqaBRVh9vY7WqFq5foR2xhPmKKjGBxpg6bFPGKsxFUcyXuP5JHEa6H3eUhCh64ytuPeE1PN2siGoWaoR3",
  "key4": "2neaZbdQcJbX3vibhSap4855aKrZnswEMujozesRKXzMHvcgn6ZBEVyQwwZmZtWJSmcXBDfyGXiNqNWSNnz5Hdo2",
  "key5": "4XwbnQBodmfPJtCMrgji97YNXj1EsiEnz9rMRYT3VJtezQ4xLcUxvVdwjqtmLq9MXwY3X3SURG88mZmmcg8amiig",
  "key6": "4RLcdiTQg1tFQbxj33kjoZtKvVZDQ6FZU8KXiR11W8TTbpboaMhwPGiTE9C22JH9QD9nEn61yocZYdYQm8GSTnpW",
  "key7": "3VrtAtFQ5qCNgF9tfTQRx7cwsmTa4dcbBDXirj4ezsSM8VW3Ue6NTWJbxSa7uHkZ7BLNTppQrbVXomYfxCjgzNz5",
  "key8": "3Juq2WdxoTSozD6hijZtPJejQfTeqHizJ62AMovxVxRwMGaT7DVeBue36FiuC3zD96LzNy4r2SgsQWoEHg6aCFr2",
  "key9": "GwBJm4ZytcpaPbCD8ZZrUebHFVBrnmWkWiNcnpND3oqqm5jEJNNyFtfrQJksknfQzcvnUYqmxEqGRnELZyosXRJ",
  "key10": "RCWC5yYBvxjvS369aBMa6PqfRVHgZR12zKnZ134Gv8SCMBUsLf1rtn8qVjBjQLr1Aa1PRe6cZnKeiHQ4VLAbP1f",
  "key11": "41XLmQPrgeZyU32GE57DkhcBSY8Rzv2Fpnqnt5ekuXev8Zo7Dw8DcgSGr4xETnitkgoyrNwZmpNxHPTr5t98kmvx",
  "key12": "36hnHU6EdtHBt8rxaHpQkg4BRNvMwNmffZcMxhhZiTe3pEEW9B99rA1VBUQYLYVDLbxbhdHGPr3THvVhz6ak1Sja",
  "key13": "pTNYnno9njyZGRKFHRjt2ZAiBr5ucKNqePZMDxVTtBGqGvJSG8YcnRSK9zj1WF6Rvxom5NVzY7d7SGbF6ajd6RX",
  "key14": "NFL1Ncgcvb4BkHG8ucEVCwWSHKCJwCd6WHAcNAjA5P9QncU6bkrygPD4f17Z4tYK1NxFfjvrYTT4pXsiDFE1ZdU",
  "key15": "2TugPrMeajZ6vRULCFHMc4B2sP1n2SA4zwSRaEh7UC778zSFsbfgiYVDi9Jse8QkV423Nc4miAF87T2yvmr8jKq3",
  "key16": "4nf8SpTJ6mGyCiWvMq49Qa599te98J6wGPqP7xjLJfDJPc9CghbvrPY7zQxtDDmE69htLvhrQKGyNoepWZxeyrL3",
  "key17": "4ukif4ez93sFj7SkgDfFQc335tRUbz7QB7hA3Ug66MgKt8ELSicdeir1RGLgtyR92QbGPgdhi4QD11vLf8RKs33y",
  "key18": "2kN2ur3KW55ngBVABmfvZhowQtqp6xkr3kS9DG63BgLRtW7qh1RXXqwz6SwX1jR6EaXr14uDn7SzmoHfQrp4DCfu",
  "key19": "2m5FWh2w8RHciQ6UeqdZDVws7cJCGMRoUEZd7D2YYn4PoiwMZrFupTM7AWQk5a4CfrxbKSEEsWbpLroFh9YFnQhK",
  "key20": "2t7pbxyQmdknNFxADWsEnB3AhPa2k6he7oXixxk41orif9wzfxVrYqCzswKnhiatP42KnhaKpZTarAa1JZD4mbeb",
  "key21": "kLm2Zm7rCST1iCRemY5PxVnXXu4zdFvT5msdNLDqmEhVsDTpXpLmMs1AifVvNHYn559L9g6YNYL1LETg7BuT5aK",
  "key22": "3eHsidhsVdKQmQcgk6FRuW9pdB3vaTcn2B7M47PLwPQUd5uQktNRKniBJjm8RcgXgk4jE2qZE67LvdjKALYVznY1",
  "key23": "3Tqs2zXhoUCVGkyVXKp8qnQEq3epHtG3d4EzgECeLVo1YwYbATFmMihjtNYcwAWxmQnq5t4nMdYscr32S1Ms3dqT",
  "key24": "4bxPyiVh2QwGPzAwpRtpCLnk7c3i6E85pdyg85M4iQsg9EmLdoRnj4x3xTgzKRsFsCnmzuaFHKD1yZeHSdvt86AZ",
  "key25": "4kvGEKk1JKH1iWSHmckosFXeXFwjSYkZi24yUkVzSjSqPmGLdEQ5g1rKXFEQjd89KDb9ajxypWnVECaT1YZU9hst",
  "key26": "4qVnTQDsxhrQKeiKaLarEuvXfKVynXke3996udJMQZ8bZU73ZLAjxKZCHjZNrVbLrXxVLWaQBaPfbJfnhAkQZehG",
  "key27": "5fHHxQUGC31xBtUFcnyQj9B4d8gkVGpV1CKPKQNP1WcP73DZFiBvp4TN8FoXJqAQb6d1k7JduA1i14t2ZePida3R"
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
