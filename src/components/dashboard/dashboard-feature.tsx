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
    "53WjEmX3vAf4DMW43cU6J1PjuV9kW9KLxTsoWfZAZ3JFP3k22Wg5fxEkj3JeyyrnrEuQnwG9AdF8oJGYKJKz2A6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vTzC15B4aRB86MSmEkpifid78USmWTSgVcQkxLEDWF7PvzCEFZjFLet1DrUDMR8cPiX2QY9N1En1ezjHFXr5qga",
  "key1": "52evgVkvU8LWcD4Nk1MmPJ37St3CUwu8esaHKr3EGqkVZMZ9MmkNXWLt9Pef7n9HUzneQ8z5uKrkszE3SDp479Vt",
  "key2": "2uDzgBzJUf7SFwUvNehyDJwdFtM4KfRmogTPtKvFBT1UV3q1HAXQtZKgJwSC7pc4PuxVBhq1P2wXihTmUDVMm3XV",
  "key3": "5sKBEU7e3xnQv1uwyhDmCUMq7D2URdeRAqGokUnY76FxCemUxVhZv6D63MM1GXCpJ76T1aV9t9aQNLE6HSpyFdJn",
  "key4": "2Yr6hHh3P88qytrxR2hLsWZi7bQPYTw657bX9ySpgbRZwVzMJ9Fhnu6rP6pa4HafYkA5zkvovf36vNTGKv6xqq5P",
  "key5": "2esFWikMzeKtShZHSsCDVbPNEnGQ2qZw1ZmkibwFQb1YtBMtg9czCMjb7mduFZGY53W29EByMmy8zafnPwKRuC7j",
  "key6": "54qHjoSdMGgwVuBB7D3eXhiUDvTW8QKrPnUvk6e2g8Kfa9aNPk1WFuM9CswSMvM6LTjwWzaRxZe9Yc9Fpfp6Bsco",
  "key7": "38t7NKL78b1nUNDP3kME2ijXybyxX9jDpc7Vbc9BzQJfK61izHPVEzYLTuRz2DijhEdfCMbvXD4hX847ki2S8kqh",
  "key8": "657xeggufdwuQKW6vM4HS6iTbshD524VZPC7d2uexUeTcb4h9nTeegz1fubzvKprDHbSfPhQoVpK3w2S28onVa68",
  "key9": "5HLVUVgarTPdkEsGrv3hKdggDEYbLijPmde7ipMuURnreSC2UbkdrfezrEz4w9RWcQoiA58Ce2X3rCJSpecXa1Vk",
  "key10": "KvrHRHHHTCi4rsrb8HGiXromgiwSqd7Cai9c7q6qdmmr3nWaeX3pB1bJUa3Xjtd2Dd8ceyY7RAQN89NZHw4Cm3P",
  "key11": "m3xCPK6iqqjMaLeTLyXaNMYaVxodaivn8y8c9NTwncx581329mvMmzNwfM3Dq8Wf6pErG6PmWn9bBZXoDdKrCgS",
  "key12": "5FW6Hna3GouLcJPR71iPmDfkDbYZMk2mWGP3trSZV7H8VbdCuoxZt4rx1mmevnFwGCxE8q4WKCkCTckpcudeny2r",
  "key13": "3EKAyPor49bSReEhx8TFBoxvg7sCUXbs799JRi47tQCgFDfH1kUq47VLi97uWqMuSjwh2b62QAd4wL3m7mBzwhNc",
  "key14": "44xptycy6bdc4WPkejpsftMtLhQPEAG6ntq2Fkec2SeuQRQ78zkwHuyfSJWdxVGTFCxUQEUB6n2dydGgeDerBWM",
  "key15": "4yGEEdti9X5fv6GP4WwJGjbnYND5NyLfqH4TZjxeWaL34TbddN7Y6MnQx4HY8S7r778qvR2e4igzw2SBZm7KuVVs",
  "key16": "2Aaf5BrMaLze4LajWMMmzLH3CrmDZW3BXSvGbN6aQUSmtDLTQ8sKp56Xi9W9p25faxy8FwaTqPuH4fX3xn8ZEbVh",
  "key17": "311SEXjxsGVGKXqTGVtdgfaHVVPZXDfsHk9LpJkRAmkLC3LRzRUW2yDUMbh5zoUKqTNcYhJcFkqKWxW2pixB8HJ1",
  "key18": "4GE8JQ8W7zyuJFc9raY9VMpu4GmuFu32f3gqVG7ZrwrfMHFKoLfdHUc6sWVV8m6nQMTzRSVyoVXrrxAqLtF9PsZh",
  "key19": "4iDfgNNaTL4wquVZy11FP62Ty2o9Uq3rrJV3y1cwjWKRc5fUQMX4TvnDLGX12KRoVqgfzbLtnQV487Q2EQqse2RC",
  "key20": "HUeLsYEXFMNP7JrG3tLH4AT2eExVNT3HNHWmfDmFz4xs1nz2TG1e7zbyvTwzuzG5HqJerzz9Fn6bmaSHSYK3Kw9",
  "key21": "232vYzKyyh5VGt2pNdQooHtsuTERgotQ6W1QTVimzAbWEPkCc9JLBprx4D88GzLKrx7oNeaSHXqWU2iY9sah1ZPG",
  "key22": "4BjMEpxJSrmEVBtYthipZosf9LeXbrUdcsKyxKWr3zXi232rvitLiZnoNkeRRVdKmrqDGJAwCytq5M8tYP7YT27S",
  "key23": "2Dd4FEgsRhg5xgyz4ymG1ppEsPrwJFyBiMHq4GD8HYmNhrq1H9WAw3e9kgWbLU8vT6zoHManiNM3vBgvd6Mkfb1P",
  "key24": "4o5qxdPMC47tEzxXJmNpawnY8JdEZe97DXP8RQiuZEpT8e955j3RnfKExEDViEfYjwAcsP27isWvppaqu8E5h7Sr",
  "key25": "2yYFr57KsfHTgaTX4wQN23Hu96U3j6pezNX1dowaSjMWmDYtkPaK3VZ8FUXdqiyMr22xmrXqiwD8XSUCRkhxLQcR",
  "key26": "2Qhf14R9cLJyGcYqxmAqmU4vCgUdviTZ12fCKQaByDtAGckr9G6PHmiR8Njc99WjhUXEX2N3hUAj5KZX7Mfv15nw",
  "key27": "2y1vcpNBkGARaS64KckmS4ZGRS9AHf3cbsZMNFexbXhKSAPnXfG55BiwdYYM2oDSWDchpdRaV899hwmCec8uSTFq",
  "key28": "tfiEBVzX8ghkrQjZ76h8QxDKj49MJdR6cXVXFVQewBNmsyzgP2txV31Ukx9XLN3AUrrEu1a96iDMkuePAYVLZMF",
  "key29": "637uREsCvnqivYMrVCmMhW9ujxbUahDxr41yyMZVXm69CTkdXPFEi9QDYWK8JSBHtHcPRegpGugXYU5Z4844Noyn",
  "key30": "4Gg9yD5dbbNcs6B32ov2vshNr9ofG7bfZbryZ1yreXyWMP2fiYnHnx5ZQ5efwuxsuPQXsNYPQr8YwedkwazxxKLa",
  "key31": "43S81S7vgzcMj1T8om4jY3BdeNQqAFfRmK5cEHyTE7hmdwvfhhEyCbAYNnmufLfN5AoK48arUSVqgBxgwzRG1pk8",
  "key32": "52sLZnXV3RojUzCdo2hDZgMpBbWjFPz2Tf6TkPEEcpp4mbkCrXxBWRPn2DDTk6MwoMLkGcDjj954pLSaLZJjEfEA",
  "key33": "4iyc4MPVgvkJk6xb8jtsGvbRJf2WifBH9cxYdZy7JrxkfbZraYSdwd4Pj5D6kGXS92NeTuUroUBzLNZxFLDNpJQn",
  "key34": "dMuxVMCdWkr9s8cAD7tHaDK65hWnSmrytzaUi2ffFGo2SyoTq2rQ8o6LcoLwVKJGn3xw3qh3gCs8zoCwzPQYprB",
  "key35": "3wq53PiZ1kdqCPuyuppRY9ERToH6oQJy3jmwKAiUTfM6J6cjDH2xkiL8Djtkng4jmxq9rdU7W27Zu2DGSf9gbXSL",
  "key36": "4LkqKBdVj1SBL9R617uhXn7r9sLeq8fiAH3jiohtpqpmkJBLJgkr5RWYD5VD9TnYr46NNd86ptnqPfkRuRVq5PPo",
  "key37": "2WvNMf8ShtRz9o3SrVzNJDGWXA9UKSUdFSLthSVSqGzphHfnjXU1hj2nGtLLyCj2vAQHmvwqGMjZYitbs1QpNHpn"
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
