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
    "4e4uRtoyV6MEo5LdJ63bsAptSeir3PUGSvpp9CVBcHoyKULB3KMn9YriQxNFRM4A9JiJbY4D4gS8ZqXAdjMpZkoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uuCNj7joCh7DXCKYgZGkL43qgTr9FgqnPfZb1YLvfT74oj1DgKrVkYARbsHoEWAMzHE5MDEM87kBYqvTj47dtLG",
  "key1": "3ZiS49RKGt5o4gjKtPjj5KRpWWs6c8RvZ39AhPb1ahvLLebkWV8XuDCrgiy2Hzm4r4joTPjRE7LgrfX18E2H1T8F",
  "key2": "2DjqFcjWKQLbLhH1Z9j3YbDpkXXM1RctLcB4p8X9guHFGoMnuLfdyoRFHCCJSM61fE2BMVk2unNhJWFmEEMChPuZ",
  "key3": "4EApDqBkBrWohDeG4gqv7YAAnnXwkKQuYXt8vXyLj9ur5ec8dqNfCuzu9YzKzii6n8mUkM65P8ni4N9bBnQy3B1h",
  "key4": "226yXcvXs4pwkNSGgoYWgrzwSMtskmwuhxwp69BTaptU8daXQjvTc1hs5iU6Nw5Gv5HKyHSZSSHPh3UndNmeKfYQ",
  "key5": "25p68VLKjrd46Xks2iUo44CYvHWi9acd76WoRbmjL6VxjbfnG4VxeVQQvNrjAEwXh6L97Tv8TX3yLRGvciNFUy8p",
  "key6": "64S9HPSZmb58sKseRt7qetQksvs5gvHnRjvH5ppcaGgL43YqWvS2BYX539S9tRedByfViE3D2kHnPTnBUjQbM4xH",
  "key7": "4DEXNeMVnVS3xBZzZxoaS2QgCbhnW8uwnZgxHUUMZGeXvVRN31BgaXpruyHVS1KMHnGZdfsQ6Qs61A8HD8SuYi99",
  "key8": "2LnXqcLJwAFjxLjV6xDMSyuKc1bEy7MS3rGt9bugLJarPtbzieupVNma1svXbssGQGoifBT26MYLJwwP7BHX5Fqj",
  "key9": "5go4N1RiTJnXukeJAux6B7yxwsdFp6UQ44w1RKajYWY43DnSyFEGEyYnV8jEAPLq1o3npLLidATG7gikk6yuTxyh",
  "key10": "4QZmDAtwDgBX4wpNyfkwN5Z6kVdT23Et2b91v6erCRrFdXDmEeHxXNQAmN5d8ksY7CVexcL9pEe5hEXgE4cyoE2r",
  "key11": "4Ts2UoUKcpHAipCXSGqzSVP3Y2KUZ3zd5iKSbkLAUUMnpJWjUgKuJsTXegrxULNwMHFhtxYPL6mUDDtbKKM6qd6o",
  "key12": "47DTkd8GgUe9XFG6FLuUDQBdjCuNTDqMnkPFSfUjofiBbq1DuMoWHb9nEqVfGURwhc3LByy9JmYTHHsJnWuMfa5s",
  "key13": "4kphorrRKVU1ZvybvRDU7bmRGotB7mwcZhsyx6MsZx42SVqeWoupYYvnqsZz7jVm6uD8vwAa1cBhmpaJ9Yxn9j7H",
  "key14": "2euUVYTCTQrKdn7nRHewM8m8RZYnoZqHKgrqUzNtUefwjqVdAABnfFWb3dB6tRn1yE84YBhE2csedFatQTtsdFfB",
  "key15": "29YCsjyb4SAeBzbgPTRNGs613wAopLVCK3aYrWvQLr5z2VkvkVj4q9GrfjEKGZ9nsTJcRxK5aSsdyZRmBWkjN9Fp",
  "key16": "4dPdoTuEUzjAdMjwAYZjt4dFDuQLcEHp8fEqcczDqtqsR21xvbqcVWffTogqt3xLFsZ3TjjoWBgkrZDqmPk9j3hL",
  "key17": "cjUrqg6T3635CZuQZmAzjpwFYozLRSxVUt1QEEw8yudh2He2LdMxySkFmrQ5rvQE97uLeYiTrCHCtKZ3tVhEUgC",
  "key18": "5KKwLexwGZ6mHVq5VzuCbSqFeu4HoRG89KBx2rN3RqZqBLK1CYxZfuG25MYWN22dkNvSndyaYNFqg58LwAbNRoFk",
  "key19": "56bCHqMoDejmRtmsznLcqSuDEPn7B3ELfk5wxeT6dXgWtwxSCRiiKGpcBpL6tQ4ooXNcbHKpJn1Y77VGTEsZAY21",
  "key20": "3GXiw2HNQdQ44Ne5QTckkBbYwuwRTWyVKXbqyJ61JhpoqfPDUV4HzmhzdWrQnL9uWmGtV9WJx1gCxMuKxAucXAEz",
  "key21": "2en7YkoGKo12YG9aaE1PnqZckMQcNMzjfLMB8RMKJxm3N9Vv7GfbexuDDoUhQFQ6iPPzGvraapRvcewwm9jpHj82",
  "key22": "2C8jMyxidyfUK4T5Aw5GDjhoZCPfU6oYEsXf74ygAMc8MXagfJmuFjwtxBoRZTy2hKekKjse6sG9GUi6rQAxe9u1",
  "key23": "Nq1wr8YcPec9RQ1iUENCsKwwPFaSJkPyCYXtZqK4rdPXuKFJZMPnHVq3TsNQR59aSnrx4kRpDxJLghRfSFfk4fK",
  "key24": "vhq9TXdGHNfKfJ3nPQaZkXtE8yx3pkBusCzCA1NSpdy8Gt6z5H2nt9nMWJ1f2AZhpWuguiGZjaZ9xYRFVwPkbYR",
  "key25": "5NZBswdSX5rfqGoTrnSaJXifFeaNijzCWzsJwdexj7Y4Db8szzx3rexYDFZrpuqozKcqciwXrtYME4S21Naxazoa",
  "key26": "5eJ4fxAgQ5sD46fr2m9AAuoBZQjXekj5zAH37rmy6r4dpEP3vrSmkb1guAVzMVZnxuzrjKUygJxMipztdNPG5zSc",
  "key27": "3MZ5gxif2KzrwYFJh9DvYqvxpF3tneEnMtHSZ9PWzKaqqDkzT1CYvZtGC8iAKTqMq4QZFzKkVkyiukkZ7A7GuWut",
  "key28": "UCxL8XEwsVVMSAgvabNm21pELFTAvgt1AxiTW3X6dnnnMew3QzbvZLzHdczVHdCK5emMvwVAmtkxfu1yG54fBhq",
  "key29": "3MrjKQtJZpUkNQExy6YSLFNja2TfrhkusXk4pKxgU3XiXBRpmQwVqMFAsfL5dP3oD3AAnwVbfDC4rj6XtEbT9AyK",
  "key30": "4ZZV9kj6CrbFhsXebM6jFMDFNxc7DPn6A59kiULhzop8rhPdo1oBmHQU6dkxf5pq2YFsfttG7KEuv6PVFMNJo9a",
  "key31": "52XMzb6XtnXy12JZ6V4Y1b1QoFwPRGR9RSmsQJfWrjya6EqCqp5FoDL9AuegPpZkgAgnqsLHfbhJxvx5gsVPuqRA",
  "key32": "51kkRmVyQsgUU5YuyTXensdrarqWEoXvxP8Zw7mhKLAwa8YigdcP2YASEJEG3a695EeW3w7vLUZmsz2syRLTVnwr",
  "key33": "561NpGFLxY86qUox5BrpJrdQFnY6cVR98Ra88tYhd9Z6fYQ73QqQMkL55MWqyvyN6ntJfiQsaLYh7eL1fxAJ73Ji",
  "key34": "42xH8guz31oiD46jc9d354MGXiqtKxVMC4JRTBVJyPxndwznMvdKe3r48ahTPdJYD45y2j6w5MfGPDKUV51uPd64",
  "key35": "42XWoTXmeDCkEZhFoUL8aY8jCQsr5P33ewUqP1YBcoaDs6hRMc9cho9MoMYgB1WkgJ2oUC4hzz6GBzEshJTXNp87",
  "key36": "3sy48aoGF9k7ViVGYBB2uUwsCPXpUvHHrE4QQKXTfCJCWBJSackAGcy37UDJ6dvLB6EKyRvbAoCnWViiHSiZEyUN",
  "key37": "3dxrSzEgBmLJXYPneiv85xzXRxG6JD8xe4SpLBhf3Leq5HYujzVh3mK3TcfXPubXrMfjbyMTve5W9RP32aYH6Qqu",
  "key38": "5g6Dp4Z5tqAKCXdfbK2x9FrVpxepKZEGFRDAPJy4C4ss6euPKiM4jMGdaHAdC4qUWLJu41ESHwCtd1yFtAwzWLMW",
  "key39": "3gDwBC2qPht5CUkF2dPXRtWbtqzCfC8tmATFYHkcWjHio6ZVY8KPwFKxsDGSn4fsYGqLVJCXv7Zu935ZGopLr7sV",
  "key40": "4xYAK1B1fCLo7M1RZFyqvh4vDkirbbUXeYhKALvTxg37bNugqCeUmr6sx31r9ktiNjHGfUYCwyoAejUK334h9fcv",
  "key41": "4g51c5hHh3jTnxL5ri1orvJPXnDnYcoAh7Fk3TaU3g7KAsv4q9DjopdBZoguyPaWCgvw72hBk6dnyakioxaixTHr"
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
