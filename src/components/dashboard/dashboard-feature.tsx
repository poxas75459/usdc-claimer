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
    "5LhP3xQdQwXB2UNvFWu94tBVvxRZDafvVEEq5dZcanCuzmFcAFiSCzwEXTC475ZZVMEAx2pw6yxCkRaUqDENgamG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NsLcpeek53ZHsNkMCEsp2HmstM8NNPdLQoyTdBqX9FvMqy7KZXmPdvM9CckUgxbX2ckLnoyQpc5xbcTpRK6AHfe",
  "key1": "2DnoeEP4sYdm2NUXC6s3K6dRuvJjFkf45a4pnGEAzHhsnja7zL27yLp6xKtC8dEmNhZigcmDwSPdLVNrpHYn2dGc",
  "key2": "XK4XDijq6EbVfPvAPb5zFhg2KCPt8mNHNr6pwcqYfQzDEwPvjBb8V4LEeJHPA4V4kywb7TEPprPKAiFgb2Bd7ZK",
  "key3": "2beVtH6j34iZypJkwLSzEDgMARSA2JMSjtAuvRoQyRS9aBSkvwDMM2FJrfKyTcrzM8CAKKDH5LzAFAMuZfxjDv1v",
  "key4": "5Hpn1PSX4WnXVGxGix4at6k7DwL1aGiwjGDdiEZbPUbG6xquN4z5gkZEpbnwtiFGuv9sSc8nTADv7WCHp9STSx86",
  "key5": "65Sr2JAxJMHee9KXupH9mJitoTq3ygzff4q83AxSFy5JAYV9fUfGbzyXfZVZvkswzM3mpvXkhuHrxb3yvEFr8zih",
  "key6": "WQ9n6RZ7kRUyASrPftK8i5PPhMq94BixakLyMdzocpzH8rQgqPir6yArmMD9aWqh1BhEFEC7GFU1tgkwomx94GF",
  "key7": "5M1beRs6oTeY8EqvRXcVPaMkzU4xgazGWUwS84nKFPCWogWzbiJkyp3vmn1ZUQ8EgxHzbEJB1HAd2yQLJ8QACM2Y",
  "key8": "bwjDpZNEThCwxG1LpeKkR7yBY8YEvVLGYB2njbB7wCQUyx6GXiypT2Pdcbnpcza6kSTpCjka71fC5HCatwugK2Q",
  "key9": "3NHSEM7uxSKGnXzB33Md8ru1ALiMJus1TyGt2ZsQBtD93TMqvJDyLK8pH8czDfhJtixxAK84HQDdXXV3QFsVC7Nx",
  "key10": "4RENrYAppFpTWgc8Df7uqxwv9NsDaEDuPeLLeQw4fzC4oPafPs5QaFesPE3gzuLZNk7aMGD3qWt21bzHEBdeP6pu",
  "key11": "5pZMsbPCSt82yZkiyvMJs6sA9cw2Euf8ArH4JTF8TNf3hxeoiy6zP1786vQ6M1zAqnxuUKHb34pmwkgEuRNmcHkp",
  "key12": "4SJh28ype6P26BnyBcr8ZUU2Xsyn49UVgsEzimAosEY4y9KgKxC7o9PtLnB64H2nytHomsbBiX8zpWMaLoH8DDE3",
  "key13": "2ERnmu7renNPAEuapSNg5PVQhw46vNdVv8M1QTqMujs3aV3zY4LRtpY1affBbGYdGy9zoAkehfmPWw86QVpDgisB",
  "key14": "4CXqU7UUG8Rbwp5Ai2FKvAeoZ7iHdSkWPCWdN9n1M2wRJJDVNVsuArL3LnF9Na9iMN9oprYDrWoUwVFVgre38m3L",
  "key15": "3CfLaE4SFPZTyMsdXPhRqqsbm6rcG28gx3qUk9gttcLrobPXn4ybYMPuBY2KmsEhUj9r5gZZsbe6jGRY7yU93SWF",
  "key16": "5yqXDsTeiJsW99zhPnVozjNYLyQeTxjapaXFQ4WP75fxKD1gxM1TekaxU3utALxCnUmTM2Jv2pbXvanBHMKgYUrr",
  "key17": "5HDqiHvFmdgy8mBogXwRiQvRyPazvc8zJaYst1ynkgK9DXWpsnTjKQNhPzXmG16J3MUZcdCtXRwQkQmXcmcjeicS",
  "key18": "27jSQHKnRxM172pmNYhC7FpfZS8Rk3UBNsxG3SSMumGWLLjcLVb6zCKiYFKXp4DA6bNkTkvzGhbq2xqijhwbhJ4r",
  "key19": "f9rDSBf4yVPnPH1jR4GEWm3NpQM1LKpHdfujQRQr9yP2fJz41Ki81sjTeMu8AghrSBpNppnHqxstZrPMsvHLNjs",
  "key20": "v9BUPZn7RueMt33wh95827QUZfv58KkHEZZRJreBw8W4jobQSPcKoRKhTfQZuMGGVvrbCuvFgUQsyayVsouudDr",
  "key21": "2ZQjMkSMq5cLxL6G3CyL9hfy3LazmAw8dcou7KXiYBNJYMMTdMhXnZEwVgX3Y2JW8ZSHn7jeHSwG8YddLuTkM1Ks",
  "key22": "5aYCw7kuhMnFthpv8aDrDufGuxqSDr1hUXF4pDVWVsbpCauhU6HY39ZMtjE5PdXFMaLngciJkiYAfLfmu6hrWL4K",
  "key23": "2fUU6ydiJBFTL6ugwpMw51paQWABuTYvTAAtV6THW8sQDm7Z3HHx34G6rG36tPEmGAVXCmgc6zMjRL6bNvQW89us",
  "key24": "5z5L9G6VoouGTabf57yScApABU8Xw5RVeAixckNviLLx1Pt5FraRZ7m7e9cX1o3tQj5jjGd3syKqu6SSPkri3M4y",
  "key25": "FfUWFpdsW1eT4mVyGpKWqr3hKAuS9dMEpGug1UKFMQvC8vqGYHYaZEXeS6NHEmbtgkhuSPdT84hJ6izz1BBmcmS",
  "key26": "41ifGXSTHCYsUsTrh9rMbbtUy6QiC7imeKuTE4r5mZ9PouidW1QfyHfiG5aKBRXpfWYq1UQmgvpZFpSmyLyh5Ywo",
  "key27": "YeeYuxKKrj95LPPjsVAuViQYcuezF8M1sB7uA5qfNXqs7e9WD2BWnxczm3NBEkZVAeVZxZa72Br1KehK7UeiVnG",
  "key28": "3prNj5k8ZZedQUEKQmgGdq4UzNy3fipQHmcuhnhXsuzF4ya3SybkKqLMyBSy7d56zhyYwvks4Z2R35Bgh4ZfuWcL",
  "key29": "2rnDmqwbkZWkAACUNn2SV4LCA4bCKBLXr5Trw3LDUHGXFyjC2FzB292ctoELWj3FxErDiArp6PhPiiuKaMt3EAEU",
  "key30": "5oGAWJeq92ssjDPee3SXbmNX4dtehNs7xC2SAzHfjiNqkNYTUWWrujjuEk6gVW1Qjw65XWTunqScejrigaed4Srj",
  "key31": "4Rmq1H87mHMJKgap9kZmR6rU1QcFyZTBgYA3PJ6kS6NvSTVqDEcbwDkMGACP1G5Qp7rhJc8P7Yx2sRosaSbcFF3f",
  "key32": "58vpqEYpZzZKCRQya3eNCGsjt2oHN23JxpMSDss51Y9qt7k3Sr418tkUCvbZgDwrHBE4nEe1TdVJjxYS6afrcQke",
  "key33": "5XrAJaHGmGcTTmGLtVq2EmJJ2QXWfEuJW6H7VjUckNTSuN8n6fUhQGC5hUU9ugda8PhE5LTSjLs2xz4jJg5nLeNk",
  "key34": "3dUbDNvy52MG7LbXhTYi6eJsBJxmVkTNzofHVjkZ39YKr6KxP2pEjQYQ4BWjiAKw25TLa9AWDZcorXtpaUAqd8Ez",
  "key35": "3xsphvEYo2S4xauYsNHA9uTBavtumm1q4YGgQzZEFm25nFpJRE36MAjvzNe1GVGJUpLeYei6SVh74b2YM2QbnEtE",
  "key36": "454U9gg79MagSu3RTYTvrxJaojRugCzbjKGA2prtMT1dDtnyPQZAMymMTAVNN27P1yXk42Ly5cnXq4k4XeYpPQtG",
  "key37": "3rvEGTNNiTyFScqYDGDTDPCAzDjqqH6Qz2AZGr9Pp4GCwS7SB4YpzpCxkSRHYtqgisueReQpxZg4QFPaH93R6Ebn",
  "key38": "GGhydPsVNLq5LaWZ4PsKFD6NdNyUi2ekfDXEHvZhspzWneAEJnw4RvNoUn7baQd3H5VyaBPetddYPadSJ78Y2wU",
  "key39": "2vGCLyePmMrMK7iH3qjxn8LFuU3KbLEe5t8w6Nj948B1W9ubwVte4i3PoAxwSyFdiKGScZJas8gBJmqKSM8fs696",
  "key40": "5CWtqzw7JiQNcYhRsoeER5MAiBaXjLDSrBZwoj9VgwVxSWZf991xh1kCaQTuTf5TxzgSihfojek6Z4Ra85LgDgmt",
  "key41": "cervNRbYiovD8Kr5wSf6Gu6uUAfF4XXvPkh16uyKwyNpcqyCYzn92UYsYEqWX96SHB7ttb9gUkYG9FLYp656DkE",
  "key42": "4efbpRGAMH26p6zXASD1mHh8ZEF8MaLVg3VYemXJsamBjbYdhEocwidaYGpfW5rBnoHsHBxfdNiKypArMQmoEgYv",
  "key43": "5D1qnThBhJ7sh2ZtkvL9LoXfX1dxHNs6ztYNnpxTuzTVqC64KiiwHb6ukFQTvD7LivRcSzAaKPMMQ1Abcv8NzojZ",
  "key44": "GxYotsfF5B6eRvzfFT5CZjf4moSCfdqZNen14qA5Vrx2CPXuMEKYbyPtSfPsYRvFMfsRyDM5UUtNyj3mUiv336H",
  "key45": "3U6qYv2XPtu3pZiKVaMAZc5XGXpj67RdDjKtWGoy5ZbzQVkMybSSAaTApnTjP6gLbrN78QqRxAbNVKBUBRnynW76",
  "key46": "5JsTCFqjA9qxMYxBoELA192ZA8FqtxwzCtUQr3ZLfQKRAuWkHYHxMdQNiv6KjKfqiD9U7icpt59BgY2tCQZSKBU4",
  "key47": "67KhkiFK5UxgpA251XzNjVJRJpK6Yjmv1YGVU46j16JJuKefk3k7zWXyn1u5uH3eQomBvRErRCxhXcXzq9SX5SQ5"
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
