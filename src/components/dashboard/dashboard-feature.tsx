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
    "25782CFVhFHet6tbwDNPyew85imujaQAnx3Z2dTQoHBsEaVHVgtkypXLYq7wAvnFS6TVMBEmVc7BuYsA15MS7k9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "658vqVkvCe88VzJXKd2WoY9ogu3m4XHnYcjkycTWbUaZuqfyDPJ2ChXyqAhRhQTf7XWDJU3sqPgaVJHKnz3mqpr7",
  "key1": "4mEMLpVJgZQFtdHd4EdecnCnEMsydR2YcY98RonK6hmRFpfBV5ooBfTi3PLDCgpTdnqcdMsyn15eax9Zp1c7tPpu",
  "key2": "2ZN9aBsDUayDbTsB1gJwVc14nphWEX396ugsHPkfBE5s5vYcZ8Gyo6uXAYGkVJZYDsBKq5S8vVgZAPd4GwQF8c6m",
  "key3": "4grvsSiU5v9io9FZM8BKv1QjRvi48vRGbxJpoyjBBkUtZ127AiEPw6D4YZpCsfRBn54nWxLuu6Rhew345XiHtuxq",
  "key4": "8xPVrY21cGJsmnJWiEQeHTcnvRd4Cb2fV8LKmQnRnwJG7P32gnpBYQdoekWY9LLNKyTrpU6rNFcEo47LQjyEWho",
  "key5": "4HALwQcpfpj7RAQJwmUV7B2ZciTCwxGUvDYe19ERFZZ1USxAniRQhWoQvaVeTzNRFcEaEdumS1QCMTvHsycGAAua",
  "key6": "2w4bkgGcCdCLivRF6GvMTk1cqdqs3PB5tvS6JbUpjQeDWDPoUM2mjjxX6SU9z8eweEu1knPS72nebQzbpmrFzoGf",
  "key7": "3GxKHNTkzRKzQz5bB1yLhi9x8mnzL7UePEPiEzXtQrAmUr2t6NLGFdVQCXuLA6DAoB5uVYS68gvbZyYRdFNR3y9k",
  "key8": "2aHET7KXir9HX4nBPtysUY49zZciFne2zYPKYzj5RsD2DD9wBdsKevT2srgZgV4zSeDZKQG5MM7L4AmzyjkzkWaR",
  "key9": "39EuDHDCQNr8SiYcaTbKiLPEkjVt5bRecMqZXQzPkHYgk9MpHhrvZopseLzBsYx4Hju5j9RtBgHYo5GHHW8gngSE",
  "key10": "27PnkNA7vZVE4P83PbgBpnuS9HpjzURcnYcbKH1i7YY3WqySRxMz7JsXaaoZaTstvRV5HRRdYWh1wjaPST2QkYqm",
  "key11": "4Rg3k7735L2abkeUCdcSE2EuxcwfMXaUgV1DvJyUaVi4cX8wYUWZcV1XngNh8NJFci4mJ4BpWu7NkciTzMiMwbPR",
  "key12": "3T2jHW2oD55D9Q1AnDNpTKLEr5pu9VToYCDPRpDciDk314Wvpp9XKs8S6LD1jniyJFh3wHxjnUBrNygmab1mu9S6",
  "key13": "4MYigAtbkv9RVvzjHpUJ4fHXknW9zW21C6a4XCZVvKPwTD5mH3MJ7n2GrJeEBKFvYc3EVmu6brWy2RRvkrQBMaZh",
  "key14": "khAgbspLHbShHUUq6PKTdskyv2p41ggNMXKCCVVF32RN6WFfoDbqN2nKmw4v33UQURk7wmDCREe1q9hyvjhkS6E",
  "key15": "3DHWLX15VZuTs7gNwyjvLBw25HSvnffHTynoomxJAqC7CbQU3QH772ECt2AyuxftiLyQM4dZLXn8Vhx4h9ydDYs7",
  "key16": "xZPPD5VMqo3BhDZLebNzVcT2sgGGYiNjULgNZd1vLnYW1hzRV6YBAK3o4oBCEsH6Wp8nZXZk4AxLiiVkyqHM6Ey",
  "key17": "28zTui7MWmpML3G1AqLK2tigV7nnAKvPioLr69KqUyWi4HSHNn2cf7KKFKCEQsxes1wCcKC8JfNK2PUPQTeRS5Zj",
  "key18": "2jSqhBVn6Z2teQgDc3F17c32SYxbnp5afpYzAgMrjeohWnC9VW8fFnX6womps6Tp2hqoPKpYotbRwfXTRfm7JZjK",
  "key19": "3uNfxLtuQ5poqFXJ6FmHYDHEPBDmK3xB7a5ZT5eZCJQrzUSFQq7YZVeYobkgTUFESEUyyJqURjreYMhuBnDKAXTB",
  "key20": "5rXxVgMLYFkNVLbFVcwzCPy4McgqLtQzvVNJXP7tkmPcQKRbpjvzP8YVTN1Pcngy3z7d46rsYMUbfn8djUyewnot",
  "key21": "5Jwg4rrdndUcbr1UyMG6836fCZyAVAT8kqRzqTWo1uSjZLWfrwvNi7nbKy2s3udZnJEe1CZ7ywfX48XU3H4qxUHk",
  "key22": "4bmx7zGu1TAWrWzfbMk52NUojdWQ66QxdCZt5hf8SKTKKVb3255epYb82L2bfcXBNuQaLpAWdePPo7PjZmtg2R4Q",
  "key23": "2WhHFB4568hypHCqLJBKoeXVTQMW7hVEJGKoPrb4X8BVdpmspZ8eju1TRf8dwEbjJpStmkzfFuPchDUJ2CEnRbum",
  "key24": "wGqAHSYcFrmyGEyqaUrJEWEDaQ8KZTdQTRfutK6vefwsEb6SJGcBmxgmUMg1HMwxy3HnhEZA5qfKfmZJcuhzZco",
  "key25": "3Zy3LtP8ENNXuPz9VPQW23wuLsX3vxnjzqStzmFUS745uMS1fcbw4oXhDmao78tQHMYNQi7jQkKpWxjCYPipcYXG",
  "key26": "3gz76U6Uk66NpEKo7HAB69JaaunkFCco6CgHDBWaDxuhtDyjq7B1BvDjKeXLc1NziPY1RnmS8q1bxrwEXxFnscsL",
  "key27": "6WQAi7ggs9sYafpkahbh3fDQ78fL8MucTB7t1UjvbQzc8Y99XfZMFxWzsZMm5vqFY9gzp8g75rernt4je7NJYnv",
  "key28": "2jPBfRqHk2pT9FRFhcVyZCbGehvh6TASiY5sNgSZMSvtHjpmf5JoQNWMa1MoET7uv3wUjfQgF4LFcwRAXux2e3rn",
  "key29": "swLVmktdqvtfBeYZJmXmByM1FiLNB4RzSdaCcLv2dsRQou5fpZ7YEkdMrUhXfyPeddK3TZTnjmzYQKjQ3DBhfPk",
  "key30": "4kqbwqA8AdN1ien2yyy9ern9fyNjj7LpDK2dfP9Jab2Exz3MKEaqMQMetjZEj9fvb3DFpXkuDC4Fts81hDVpM6f4",
  "key31": "5QoR3x7pkY57TnsWkTaifHqyC5zMpESffAccw61FCER2tXgbE1iEvdmLJ7dBmLr6uXxx7aE4CZAkB4uXwkdrYZF5",
  "key32": "RGZhfzHQfVBeUivftkj8NqE84fy53ntEN68jiKpbeA7VdJMR2dxuXq1fnWYyLXL1XybFmgmh6tBvmbwzGPAV5qT",
  "key33": "MZsE474C7BrLs9jncrmpWsQ49HmzFphR1mQFKcA6Jckf2q8wKUzDSxffYrDRK9KRjBGvrny3DqHCdbXNyGkybEe",
  "key34": "eVzxHVx2SUhqKgqJUAhmWySpwxeMxiQT8GLxhQEtaiJjfczpXwXtYffzVJnLtTGKfHyHVDe9ds5AgdGsuuMzNy9",
  "key35": "5t3cqkMAPUQKRyA34TXidauAAWoZ9nhU1aqB1Ebw7BgvMrSY9jjkMvnarvKinJEJGksLMrpmvyqPwwPgKnwwWZ7T",
  "key36": "5rR27jAjqXpnreMJAZAj3G8pCxs48DgctrYnDrgRb4xmi1uYB3iae2yhv5TcE2JKn1fgSwb5gruHgobnXJsBCf3T"
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
