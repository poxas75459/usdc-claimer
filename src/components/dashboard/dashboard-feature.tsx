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
    "4rLA4EojiubXXg8JhJxg7N7MWncAqGKxJCExtjennhd8zShUMayQtnKu3qZmezcoSipvqdYRHHhZSjLBEA4JxLdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FxxAQiTm3XLwvNwousZmwucLb1jmArZGvuKto7qV7uDn1m65MzmyoTd47Ei1WxfDmnKMYGHZtDfgvKvfWrRvcBY",
  "key1": "zNdNroumUMJ2iKCCKorp7mrg1LQhgx52C7QS7QUo8MEtv5VxWBzCYa9ADRcN3e2NCQxRuxZ5NCPH93eifNKZtvn",
  "key2": "467gGzMV9hUX3TGNmB75hZEgvL2YQDZ8ASepg1kFc1zbfyMaxRp8x12JnasDr7uGC1CDiv6JhcD9m2wuPSbAdxhg",
  "key3": "wRMit3pGNrnvevoSeVWsVKHGsdmRzYgqS6HYjMSde2Rf2z6fWUwHzZ55aVaUiqd1frk27jkYknAUZ2qiYxuj2Fp",
  "key4": "4aE55F1EYUhVQQCBwY6KYvv2R5EyHgcN1jnayePwjBnMnaz915noSWhVc9cc7qLnP4RR3MAa6R2efFA9LcZ3xn8N",
  "key5": "4Jpqu9B9zCNU9rufZSwEVRwMtiuXMhfVkN3gznR9i6Fa9t2E8aw4EvNvEL6VALgH5CAfakbpnK3rPzW2YLHvupe8",
  "key6": "2Phxy6WkBLHNmiErEA2LwAfYLbeq4dhNXqx6erJvkFi5iD8WwknJnBXEeh7S7W1xzaFUs75hc2tQe3k3n6wXJeKi",
  "key7": "5NVV97QQStcwa7XxWr1qPRUCsqUEWHcr2D7dCSJyb7yZHntSMRCfSXyhqPx1hJLmzDYn2BHL5mDnY6TReTeNmoXk",
  "key8": "53FDKxYb3dBW2JdJFwJ2mPXuX53oqDnEyNwC5iSTRGFog9kbpS3bQ6feLEAEMhHUYgSDBvKkLdpZKyRLmy9DYZKX",
  "key9": "2rx3nBDracJEzMHZWDfYSUo52c5swmbsXVk6QcfBzvDHNyfpypTY1ob6q4QGmUWQDQebUxR86bLqa1ktNm8si7FP",
  "key10": "4oQqVheDwgtmopWFjp6SgjcydpogGbM3kgZ8BUJdof7i2zNCWoZgojabXw6kvpFESAQRGwev6Mf8ajfXErzD1tNW",
  "key11": "LoyngUEiGMTiYbojYxx7xyHBxikuMz8UNXjuJBB9XrmzyCWkUmTwr5wWG2Av41AsmYcvwM6vL7mwuNNQAmNs9gJ",
  "key12": "ceeyRM9C46rs8Q6f3fUzws1Mg1P5wmujdUBTHexD4Rq6B2jTr15UKGrppPAE598c8D6uzTXnDQxHCRMkGgaSYXa",
  "key13": "Aj6cHyj5xrLxjFr6dB7MgdYtFgv7W7RFBWHWyLSCT6n9iiuCFVn4wfW58RuDjJVaAtr9dYV9BX3rU9Vzk27uhHP",
  "key14": "5a8VCaeUGRzopTc2SuFGn6MXHymgoNXjR3KYLCRE93s3Rkvg3gcH2eWCvZDHheL9YPfTN4iwoVNJJr2UnGer6TmB",
  "key15": "AjkViVnHPPggFBbp9XWcWbAkq1Y6HBHb7S27jhy2mZNToHjiJJntQFr5urpL19jedMM1BTVyK9NJq97k8XMEGdh",
  "key16": "1vNmNTHH7ZXDSJ4s5BgUWkbGkpUhGLsQ5PbvpZXVMo6W6bYfDCAPzJY1ji9bW2N81fZDswYNxp1YwoqZZndJuaU",
  "key17": "21qVRuzHo9PwvYCkedpY83f7SfZWyW4NaJLo5RPhiTAi5XiXA82qRUYUb4it6ALEoFoNNim7a3U6FaW8AC5GPoJP",
  "key18": "3gmsWZz2cttRspCsjxRmtPr4E9rY9Pxc9QdfFZcdMWozSyEJcgS9NhKXPgSxs8rXBAF7DGo8QfZrkwubcm1Djjb1",
  "key19": "5RWgV6uhRXtJAEAfukCmPwkAnsNWSZ5nKcJXMh8Kg6H57V8QXuBtkVR5vMVtB8viJoXEhqxkiwYkhisRyRjszcGv",
  "key20": "3SUuCuuN4rxWn4yTxGjdgTKkZPEzTBY2aHA7J3ZDaSWVdwtpAeM8zVxqTkjV3ZUfKEf85sMyfvAtwBzMdeJKcF4k",
  "key21": "tgCup2rRLjGF6JZbmcoD5Fpb3J3qNhxt7DTZ5EhYnEFhGTAZsEMEQ2nPPRwPVw4xNZsfbo2f1JgC7a4qTFaTz8X",
  "key22": "3YBxpVisNXxLNm8kzJnqnrAE91iQYPW9VxMxeGto1NMkydHopmzjGPtYdrVQaYUQWhiWk6ER1GUmmf5TgS3Mpabw",
  "key23": "NbY87LLqCgD4ihJk54gqtguAYf4qXWcktJ7BTUQAawcmufwozvW2LuPiP1wqqc8A9GmvPHasTwKhNFxp29xyyvg",
  "key24": "5AKUwnK3vDscdTEkGrrNZxGaKWPZn3wS3QYg4P2UyXWox5unTtWpBfqcbRaFwHQKaABXshL8xHBuEozXWLdJuzMd",
  "key25": "2F6nXFeadCLa8pXSSpfbLAwRb3uH7Q2GQGMjbtzEJ396sqoQ18CoGByLjPZHCedW5PWLacjhjFvqtNnoeVz45zUP",
  "key26": "4rUATkySHrXosiqkd1AiyF989CY8uD5orNXhpHqybuRgMPVHzZPxHJJHf7YSQgrkZFUTTSxcFYhhfNxRKqSRSKPX",
  "key27": "3KrTLm5oogLkeko1Ho6u8ZzaxnC3jPqVfgqTSnPK955ZmFc6SxXnfQZz2C5qcBZG68s1vddWA1bXLtCGNUMZRYkR",
  "key28": "gW9qQjqmxbMp7rZ5VtiNasqFZoCQ57CPJYoyXQMfCkoWsAKe6xZnWXNdfC1FbehHKt1yd2FYFapmc88CKW5Ha1f",
  "key29": "3phyBanM81dDcmkFXsn7qv8Vh7MppimjcfgkcuGbGzLNCsCWabEdGGshmK3LxX3t2svY4kxkRej6WBJPDUHcxUjR",
  "key30": "5VAaiKDDAuHzVxL4f1D3QDRqCn4iahvr81c7su9pojDm52sWXiT11UnUgqUvTAd19e9DEJ5j6D45uCwcs3Mvv7Qs",
  "key31": "4yhaYtr8Cp6HAzbBaVmsyusfCn6AiQT1R6tr147saRmmDnsgvkcgHKitzJaPc96mtKWddusJZfPtMEmmdKLSbwis",
  "key32": "4Ji8kEeysuEbiVdSSL1ayS8wXw1nkPVyhaTRxEzpLwBEEXQRMsk9pqjbF1fGZAU94xsU1AQbDMFSL17sGgZUEeFx",
  "key33": "fwiPBghnNMEvjPQeXh5ayL3JQPtVWkBPLhecaHA4ot7JbWPPwAWgWEcSSU9X4VKy87n2Lr8qKEwDkRjMXjSn9gC",
  "key34": "2z7rm3xA3WYe2qXZbDuds3gxRjQaTtSdgwdHnHKC59YGRJMXMkj58WdyeRBdRN7TrfGZ5Y7HP1rq4yeqqcdX3kNR",
  "key35": "R1BbbtdqpsYgJAQmFgLFCntMG15WuXWHmgEHvBQA4o6bv6cQD5BorD4P1AdKL7H2qVLnvyGW7YboD3ij9RRz9sp",
  "key36": "4qqhzXGY1bGQ14jHHuJ8UzenRBqPNZTKXQNSVTGZximpP9367w872PxmJihYveNCXym7nXGa4SZ2SSudchwfMJ9V",
  "key37": "3uxP724i7NBMuWnLeU8zzQUpYG5phMNwWScEjaAtgveN7UxZVqsu2NCPgZVwAPCQjJghip4kDiEN9EoUPb41NTpL",
  "key38": "545cwgtQR7AVB4zxmK21AVCEJTuGXiRpuYPmf1KqFRD1MvwqXiEQE1g86fq8nMzermZDfTcK1NdtYTf2MfnibXd6",
  "key39": "LvLuB864d6f1aijuu4zxBu1UwKMmLnVBc7Kmb3nG8zb199KaHwchRb2GjVTTHFQXwRBU6WUZGnLGVsbfmUDK1rB",
  "key40": "WbRRHnzwCB6soM1iFAe8rTZVCTLJFryc2ugw7pHVhXGfkXoT5cbb7GsZi3LE9LxkDqNhYkEZCBdZdki9PrAe5gP",
  "key41": "2rXtbG8UdocmVA5xfzqReuaUTAGPYTBJzhJix7xhpAXErcMFmrkB2NtAq8uzzcW23SWE3xYXWqcPtrVz1dn22XQ4",
  "key42": "576KLfhtjXzb6Yg9AmzeAJrpDmwdUABNTQkqLsnjcFmmhbhedLFqf1hU3HrLsqwyKFckPzFD2CJpWcBqZHcHJ1R1",
  "key43": "2nQUHF7xQbXHQm9NmGaVkWbSH9p2xBaMXVL8znNBdwaSMLEPx7K1AZMkuUPNRQZLZJQFeFhGqTnU2RwCaqQv7NJK"
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
