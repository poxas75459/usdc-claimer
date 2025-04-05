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
    "5yjv7kKvdeXpNMXUnka3NsEyktqdZm6YtWWzidxy8yWCGdBB75ffjtyShtCyw4sYKPFrmvU8LEE6tA5VuJyqomCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23pi2hZ42UcnjQhPGaJFkUe6HcnbrZ4EzmsHPts5xnb1Ct1CFgu4DbEexVCpmvfPfqvSoU9qsSHVNuDewnaCVJWz",
  "key1": "5vZ76UBfxUHhJYnQMC24v5JGostynfUV3T7XuruNAkMVwJLozvsbdoLBrtpogAizxF3KBkiL8KmWTKPwjBsv47Ad",
  "key2": "vaJx3AojfL7fBLDXx4tcgEterqtbf4udLbRMc4zNJ8R9wXxPi2HADv9qyXjSKWGrH9PFeoeVtvth6iKGrjq1pd4",
  "key3": "dGHovVw7goe3cNCJaPzoQzqYZ7ZGxRVrojfnWo8MT8ezFz6vYtaK9pfV7jBjKje5HMEuvGFBpPiTKKgEqttcy1u",
  "key4": "niBEswFzVTJPRxumcWdPLm4CdqjukqdW1fAj5cDkHv9Ddg8JvUuQzXTNnsZjwB5Ndf644pcsGTPFg2Zsu2vHjiJ",
  "key5": "3vZpg2UiLfqg3HxHCBQ8f36V7XqZF7YXtdcFNJH3ENHZqMTdxowMd4rr6whm73oeHUHNXAZjccTKeSzHZZSNvY6L",
  "key6": "5bfXbSUM7XV6JQQvBLiBuZg7LSCxW1Rtbnp7c44s9u1MFzeYQtwRnciUuboES4eE9bnp4M7TBH9xriLvocj6iLpC",
  "key7": "2UMVfSViSq86k6r3383YbZL4PckgX8aPK2LctWhbqugmakbUUeYENRxNgedvUtduP29d4CSGpGXbJ2Jacke61Qfz",
  "key8": "2JLRQEfhvNGNNXECc2bvUaQ1RzNJBFh4Y9Mteye6x3VnaXdQ4bieVQ5cApq2gr6shCbGQUDYZvFa578AcTmJbrBE",
  "key9": "4fs99q1dsuaP5inEhzneCvt7X5oQzQGHkHJ2nU74P17GpLKiaQvGfuXw78td1WCqThryWoHyYdm1nMgj6okFkQqS",
  "key10": "i4ffxSb3hQ45KW5k1PWjD6hgopyVEQ6PYmjKwRSMmxA2kdEWj5ZtQcRctx4BfdiCp41zcL5qNKuj17AkwKaddAM",
  "key11": "4LtbfYpvW6f2PFsW86pbFa9VhB9pUWdCJWoBuT3o9BcYrJ8sYyYhrpkZaugUggiaDyVVYiDh5nhrHyZnBCcrYvdB",
  "key12": "3BBbRNyNdrqFv2obRmfNaHiGdTTUvJKtsjvfduxwxPsDxQvkPLaZRdevDVTCMCZD9RAP5ge5GM5hr6kjmTSJ8WNH",
  "key13": "4xgiykQCCHsZKhJLF47UMJKmpdPyjph2KjB2EVNc4s96ZrxfY4J4HXzosP4D9bFcMQV667DTCk76LJzY6vHyogme",
  "key14": "2t7Go3snf9AXa7oqLKJPnhf2XLUQAiGSr7fWjfKAcgDJXG4rGUU2wUCf2uzAarWg8wxva2L8Cbct5PDPBynimKYY",
  "key15": "G1T9MZywGW4wDeUjFbttVYnh3MyWfByhQzaNugVVThxCUEMNJQgByQBruc2eau8YyTfeosFxG5JWHTnwxrmRMuU",
  "key16": "Sa1ySiAVesAQ7LApic4JJDbHHnvYrsL4Kzo5h63p59aYiaY2qpu6FC2pucDdXMaRaxaAooe4cHXaWA6Ny3AM4r8",
  "key17": "3TgYqq4WHVceVicm6st8kjRMaPuVp4Qw33og25hwvRQ6NENbcq61iULGncmNRnnL3tL6u8tqr3Mjvi11dM9P55F7",
  "key18": "3SKhprHWzsEEfcjiuW1cGBAGBf94JFXZTL7bQcFQBH2V7y8VZZj9Doff3tRWTrh98fEAcDNm6tbdkp5qSHZBH3dg",
  "key19": "419XLby89ftNYPtb9ea8FoXAHFBY7EanFWgiMAnxb65WmjNMrnW8XwrVVr8M4uwtLXmzs88vxSEt9L6mtUdemUmf",
  "key20": "UvonQraWPWWbvQCpXUbRjJR7LVARTpmXdL6JDRfTDSyGUWqwSpsaeFkvrZHkdT9N36SDzrXWtvFb5EFAtgdxQCT",
  "key21": "254DTscBvhRqyjQTBsHQmEVa69tiAjzrbPd5GDzocSr18EdzfV2Ygh9qqhUGbUMdD9L5eEFUfwLhquRFxhDuvNug",
  "key22": "4kgrG1nSghYcEBEdTJZPKYjHheXzyuN7qKVsNKZGz5uDJ8ECu6vAzFYtYzofjPhaNjhFpZYy1Cm3XipTQP9QseTQ",
  "key23": "58nrofE1jrG7QnrPXB3c6wJUGJW4o7KTCxNkCWUbr9Zva49M61iFRzFXMiNXHaMABH4vUq8BsXp9NCXA42Da1Fxh",
  "key24": "2tszsMCrUc4UitLbxtUri7RUEJrE5SDqnNFCZu8Dop1tRsH8vLbhzMAVCTNiWCGAA1WPoTvsRfChjMW9e68eLhkA",
  "key25": "46UW5LTw2wfMmE8bfLU86AXErSng4WixeMQGkZwpZjprEttrHHSbPRyvTLFTNDvUJhZSY3ipebXXP1ct55Ur1pN8",
  "key26": "64mCYP7kmetsufiQMHpdaTHKXHxyfu4ugpzFkb9Kt3D4fxrdksLfQbbhgdNGKVzBYMgYCWSF7DsmVSnZ285W7N3h",
  "key27": "3f73wCr1DNtTK9XmBb4hSZk3pr7Qt6VLmP2hdMBhyUGBXXzaAxEXP6p88oG9FpLJZGbToGaX6mSYG8HHeWY8byTL",
  "key28": "4d3fZGJ7SYXKmCe11uyLbVcL5NzVcmu4NgqfBrp3NSChhN8vS9fgq2WC2vj6b2wyFPa4oBYmWza16ZCmavgiRxgn",
  "key29": "3dqX12VfpxPa9ECLxXuh1TPAaxMiLDsm3RdpzMNLD12ZE4Kjf34hrvxGqDfhsQJTHYspc8MiYNH5aFd1cRkqrUjq",
  "key30": "BacQQEJp57A89TirojgNST9UtSmDkPRncGFgy9KxD5y2GqnsuJRLZtwbKnkdSUgCWMsRDAJfk4FurSiVskP5keb",
  "key31": "5z4a1GKfVM7bxAyWJwv8nnG95LY2EHDvn1RAZKLi55w6YbTUQnqR2n5wxFemBFVgzDwdo8iJeSpnxJLQfSZoeyxg",
  "key32": "4wqWKkNhJQjjgaNpGeNVPoJyEZGq73YXEji1m1LKvHg34FLXogR9bHi7NLgZtNUAKG5fPrRaD2Gbi2ZEVxdf14yv",
  "key33": "3wopaBFZnTm9eKfmppwrJ2BKFGBdKSVPJK6c1sSRZwmrLyn1ufKUEMHyKMqpyTDcZDNMZqTNJiuQzm9cdkZhN594",
  "key34": "4uqqnfz5tjYHerDEyhF8xE1evGGFnTKcX6SLzR4sHtPRiWikDJq7VTwA5VEooHNH8UA6P8PHfYSCmMnavusyjk8D",
  "key35": "REMCbDqHz4BUYkxzuC2W9mFWwbQEeSB3TPANapoqg6mx2MWkG8J9fcxHKBtmjAuVqpqZwnhqUcLfq4UNdpoyr8g",
  "key36": "ZcWue9SZBtFCxnajwJspSbHwnoXdkjsLGcANZnvUiQckmGkufHGQmcUo8GNjqXQFWMB83SaaSEab8fgJp1ZCo6W",
  "key37": "4Hbtym9AmafzP7rvaorTdrRuY1ccCKXxJ2RFcXWZdEKusmZB5M79DoswN4CCGBq4kGvAgio4vvXG5Q4CRmmXn2Sn",
  "key38": "5DY9ujdhZfwAYPQXJrVB1b4YzgY5k3w6dz2VdM7JVftCck6Em1iMjArWjU1FFLvT8MYq5XgBNHwz3QRKvGKnQroN",
  "key39": "T1z9d5m3cVRFgAi1aBo4WRuW8g6wyRwPaQZxAYBP3sBUrNwSygVz51HQbtRh3KwiDuwnTHfLvtMMZAaFNd5Uvfe",
  "key40": "5JVvDcpXFYs2cQYaoGJM5x3YjbQ94rm9KdGLxN82eGWcNWrW33Ax85Ux6FLeREbrWawq86Ub5Ez3xFKkbgLUPq7X",
  "key41": "4PSsHwhmtfCAU4iP1sDDXc59Vyo2YcNhXWu8mFgZ4zatQpn6xTUTY7sr3PsHBbANQYwckM3TXHcv9mWugVgWbFRR",
  "key42": "2RvhsbuCY7w1TbUc4ix75rHu7uoxVcMzsBLkXcixP9KGQSWHuPn2pns6cSpRwbiX5fXedtDsz6e1oupPUWB8bWBU",
  "key43": "4PJCHwik8pyR7Ny8TytZvvB8YR5thB7rq7TzQDG1tNuUXKkC6zfrvTZPm6qFTsHkhcTGQDSDptkBtLvh2ujJsLr7",
  "key44": "2BnBiWR3PZP4ugj8PrVyikJYE2gxuHb9orc9uyGeQUUMG1xAcorVv6tLZtgHCP27mbDktzsMmB2zkM5z981MND3H",
  "key45": "4bPUbyayJ7DHSjtKiBiK7K7wuUWR74Nuq3vfRgb8kB71ixwqsJXKkekVHYydMHXqwaTYQj8Zcx8cXfAHUJSUCTua",
  "key46": "4NAuXpawweNyUS3ogJ1MbZrT3MxtAaVhpeRFz1TAPTYNMUsxq36aJGvtcnrnd1aXXD9ZKW6TwXZJwScYMnNURqn1"
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
