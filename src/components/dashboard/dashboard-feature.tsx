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
    "26rfVj45GoXXHjvtE6hdLWv2HYSEZRkZpc5maozcp1bqTYWhdXXMPWqAZE9BW2u2eYbP4YpzuDC7ttby3tfaWr66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hkQnw75rvGNepuMDJZsuWuMrzYuLTsi22mKpfwaz8qf5pBEuke5qvaDYgE7E1tPtzmtcM495cSQkTQHhRcnr5LG",
  "key1": "3yKk5JuBmpNyjbMDhXciLQizFfsAxWB7DzGtiXiDf5g8e3vN5UmtmGaER6nLVxCzcfBzCU3jUqtV6FSJgWSKrDNn",
  "key2": "RsYYotvkLXazXVGhU58GZp9Hc9eM5eBQkojbd7XMbz58fKiaeWZzysEr1MZGXUmaqdXkXFLPoBEyndw5rLHdRuD",
  "key3": "6tVoZBy3xdcEeWuKG2GDNov7JXtQFznZ368j8SXuMB15eR9g14pnCsH6wZUQXc4WpfT7bnNXnvDX9GJv56UDRFn",
  "key4": "1ERaScCNTSkqNWWLjZK4Ef967r2GzbeCpaFaWgGsttDYMibEYGYCXPGMLguUeaqE5P6RNCjN9R6jFmhzk2BgM7P",
  "key5": "LKvHp88rmabesa4oXNTKFiWjj3LqhLE2L1qkrqSJYw7AHWjQTbpuG6ayL5zdttpDqFqR69CEum9cZkXWkohy3md",
  "key6": "MtJR3rsSVdZ6T5wST1sMexyxa32uC7zJAHPE58HVxpBGuW5wX8epMHews8SzHpTrMj2VbznmPfVvvYF9UVRJZND",
  "key7": "4kKjeE5cVXjs4fC4RgJm3qrJvufyctfyad5SRkQoFt2LYkTHAft5w7gd8TL1nsjw49frgsCV2QD1rGnsymWjBJVH",
  "key8": "541hTBueukBv8rNRhwsgFSc1scx73wp4Hka7n1h8axe7EppSRocbqGixzhefQY7vsrHquvYBgNEsr7DkTVZDb82b",
  "key9": "2SKpPt9MoBqhmmrWDuizXtTV1cxx2upHUFmxiWuzMmV7EndrzBd3dQx2b3wX5dn2aXBK4d66EX7kvdQ13K6xiJMa",
  "key10": "3zitoZ7gvsHxmidujc8XGGZVJK3btHFw2ozohheWhTCi6XcNjPLHeZUbuQv5iR2gPyRoGmmitCsqiDHs6ZAKfxtb",
  "key11": "9XFidfKkmfB8fp2wVWiSFt9FyE6Tp7eZTFQVKt3tnuCD7genBaQebG8VypESd2c9UDB4xsgPiwNcXQmwSpZdd7X",
  "key12": "3bUWC5sTHwKHPmwmfeLgg9SR1PBiUwr12CTi5iN2vwhBgH2nFAqf9ND8Tn8z1WrWEULTSWX3y2UJRWJ8bfBWdf1U",
  "key13": "59NTZ3vG12LzRT6j29HXhS8rMc6RyBbYZg7FfxJt4pvx88SRYSqCWdZPfXsnHy5qCYdmUZYgpsz2AYGAJ7wFitja",
  "key14": "4C7XRdNFmYTrJtsEhn87HoxUbuBsEneyP4meW3K2cp37sUYxUFwfUaethtUwQwtdTyShwg8iMr68ToLi2C2WT38k",
  "key15": "2tngY46K3Xtn3h7yYkh2cSm8BRPM6QPie6NCNzifsCjHfj4cuf3mgWrzCF2CANWH4B6g37k5XtYPY4TGJeuhcce5",
  "key16": "2wx6VRByQhNUazu1dkJfXfiGvKYHjoTbdQGKYDKtGfbtfZgWiTEo62dCvz8M2KNH3uYgFMzNpSdatRSpR5mqMkHk",
  "key17": "4wDFvAwEgpc7NAsSBECbApnW6QwyRCjTufrupdvzKf4qAU6kN8Xp2ntp3nNVhP234JKBeLWxrdHuMKKKjwGLqHAt",
  "key18": "diVwXzcMn2t9xKR2HxkbP84XA77zPTkVfBCZjNW24MTU54AoFdFj46Fz5MMFi9j9uQJyGwk8ggoa6LA6ok68dZp",
  "key19": "66YX1VSydM4He6PCyQ1LnUffSRmZwACz52TXoreMrXM2ShYUUymrEnzr9kSjMVXnVQWnMmjLVPRoGu2NmaDjPKSm",
  "key20": "28u3tR8RGVTvinM3JgzrxP3Qw1CLi9NZyp9S9CoqCfKVEKki4APPGDGCQ5p8C4bvMgtpcshoWMzPh8YN2Hx3FvPr",
  "key21": "5ovDb1Yj1gkLVztqBEeNA6ixgkUgqKCpnqrTTu2kgyeVBxFWnE97MTw8mZYNQ91THXNNgkJJCSFYoNAKn9kD7Uez",
  "key22": "4jbaUTqSrxvB7voKUFpJiRmYKBdfdY4jvS7SqP3ysGDtsTwycRmYcRd4YAijZq15xjo7v9CwCR9k5AdeEZ82VYkD",
  "key23": "fLWVrCsaAny2bvWqeGaQrXbqSrQ5t3KVJvYxrNy7M9bzKquAPyhCy2mfBdiTmUcdq2qVzMVyotadso16sBtc9Ct",
  "key24": "36cgzNWWfd66gDi1S5CA5BuqZWQpMsuSdU4923cNWUmaVPoVsTz4JomJ7x2qKBNQFAaqXhvbqxn9nxuWHTTbph1N",
  "key25": "5NuSiMKVfo2UPm1tjw4eUKHGet55sJFxgkk7PSHq9SfPCHAMYb88u9Zi1a4bVpqiQ7KtJ1Rs69K9gkenUFdfjrP6",
  "key26": "BeBgTicJdZ7cEZwdiwTcWCAUm5NZdaDKDucSiTBjQjRtVRTYQK9g88MXhr2DCfqKTzuBRHN16HEHnUsyxmNvw6b",
  "key27": "FSgE3PStHb8VCr8VQ7RMQqzy5QvzwnasSmjq3aY6KTZgjj2CvvGMyUr3XoTsjDLp95qCP9h1XUTqb9taSDXeF9Q",
  "key28": "2zcyU5fZAr4Mk55GcSwZv2cZotyp6NKawccrVJEKvFJT9keBTBTkSbQUWMKZ57bDFNUpY7ac8XnC2hpWX9iN76By",
  "key29": "51vvVzq2NfZBG7FVoPATvVsPoEEs1wc5sSBTvf12RfsVxR4sWivgGuCS3Z6GavwPwC5da7g2EqpTmDt5H7s6wzJf",
  "key30": "41dvyfszjw6JgeMUHFuBeGehEgXXcdA7c2nF7t4aeb5APeTJdE1tFjTcKAfRxHdTvRjRWNndAx4wkfVCBP1fSv1P",
  "key31": "3dhfrKiDy3n3oWy1F2qUAEhJkZ9N1erWKWCTavuYRAcUTXttABfK5duNBfbXVUKM5vXcwhACGiTDsFmmy66DhMy8",
  "key32": "4Lm6V2pfU8pAFeKNMQXfmsZp5aifuHAKBmd6hnAiSGqT5R8Up9SKPE1oyXjyQYXkraoD3ryf2rX5481fAcbaDuU3",
  "key33": "4uox3e6ygaVy81UcThayY1L9LZz5s7hh5JFuqgYM7b5PSdfPLkZLsZAXWUsZLyzuuqSrW4sZ3sH7hkYGFuF46BN2",
  "key34": "61xB7969XuHfXAakVNNmXbzbRhdpwLk49tuLw3CsDFMoE9MGGsNJ4V4PQ1oBASPdJwCMHaucbp6vZgeSRrqfwpd5",
  "key35": "5VoKFHxQziKqP6TV2WKMCkLcfaHJSUjz1phM8Ac15vSxVo2BwXg8EoBoZ7JpkWtvkUNw87oT5TGKRh1cD8QWMTyW",
  "key36": "363uyL58Awf8bEB5zQjUsyUYfRir4i6QJXWqhRYH2tkWkySavY79EBWLoC3UF5XVeDbwKxTgB16NmAXMDtESAHUM",
  "key37": "yBspcXxxMue6ZCHnXxJ4TJDtMF4HhWTHLAWf9dPN8np11tzts6yci2Y7KUM7zZqnVw3Fa8mpspFzbqw1sVTbkyi",
  "key38": "3D5UFCCE9TmbCu1R8n7TaAcvWEoZATzEVeRVcHUYvSntVpWaKoCuY49SdVYHc1H2xMKc4aqkGBbaatopLmW8dbRU",
  "key39": "3MVaPBopfm5KXptxBsXa4JyJcTq7Bikm457m5E7wXsxuWHziebxgz56d4JBG92P6xVsUzaPfueKvVe7g7nST8j1J",
  "key40": "4jBnqcUz8FQSQaNgLEj1GsMxcnVGGSscbsvvguw4q3XxEExhpXhYDZ79vEP8WHebcv8yYxC8FYeAzDbDnFW1wEbo",
  "key41": "2kUkJbuooWwGnj2Lu1qWGeeMuXcpGUYYXvELCQDwUgd6eXfznyauWgxSCqq3ocHp38xfHxij8qsARCqLfDfd2q5o",
  "key42": "2135tUP1a16ucSeJz2jt8zT7yqYyo6Gy3LZX2YNcfX9P8eMQahdiSnHS8avEBKheyBRX559Y8i6w29TCpBKWTkUB",
  "key43": "5Vemou7JtddTWUoRKoHDX9kZVPpmQyA3EZza8VQ8xajSnLEEsET3P7dQJm6dvzTBTugu9MD9gRH7XQqhf39PCAAd"
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
