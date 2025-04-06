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
    "4Qxv8WxYpGxfCBy9pHyPAq8JVfNdCSX3ye3doSkydHkvzAs5a8yjjYT31oEptrgjzT5HPccKk8PmCmfaTLz7maV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zyaUF6grdarKAxSudayRsmJ9tvRn9RzDGAaYfYT7nbDYtvmjJtq4Typ6QQSBrv7FUCTdtXGc3Ftjd4wi99Bbziw",
  "key1": "EUun7aWXA4XbsKFW3GZRBKmJrv5WWc81V77McPmrBjMe9jCmb1aCGXfoZVfg2QVWKDpuaxeCtpprts5UXWYu5bQ",
  "key2": "2TsCQ7KScccFa6Qo18WB9vHAR7SwEz3Y82EQT5a6jW1fSjVFGtcACT6juoa4SFSB8GBhPkjhrT1zcjWjSKU9iSCt",
  "key3": "65P9JeCBookuPHy17B2tLDcLZn1Q6YEUdjyu7T2uJjatpxcE4tMhcTXcMyHweA8kGmZPC7xhrKUepK5W69TG24hq",
  "key4": "33NY8MErCLG6bwHXF74262oFp1C7rsYUhiipWc4TFeQnUjfWLPnbvQgAS4qCcJtj3BW49yRHy2uM9A6vxmDR6JfL",
  "key5": "5qTUGJUoK3PqfETaSpzacdj6mTGSHhiTmytwW9akK5E83jpfrYafdWLo9rbrArqzpehqWQ5MNhPDMV8JF8QDk7Pi",
  "key6": "zCUbx6kTnBJosPEXQCSjkjmRfsRf21mfgXkhSiJ6puBHARtmYAtLogERGMxbUnZUbzTxSKqUN624hbvwgh6zvzw",
  "key7": "nYci8xvtJCuGw3Rk5S9Dkn8qCgJeZhaDp7wwb1x4cywDSjo74XVG34TEKSrhvN4EuuUuKGbw5qE6gRg53HkBSL2",
  "key8": "5FzvLKzhCWNc2AH2eg824XQWodVnxHbpcBHtYouHL4G1BPgW2Uhm7wbqGvcxd4Lk3Y4uVg8M8VitAyyFUqhAvh9D",
  "key9": "3ZT6qwu3Ny1W5raopgmwzGr7dd9gjw2QFE7bsg4faLjdHuTvVa7RNRibpGrZ6JLG1Dvn9bNChn4VDDGLYm6g2zuE",
  "key10": "NufHgP8TCJWXmuecF6Zez148CNQTJq5CbPfSHv5xTMgJtYar8yYzyJtBCHgSBh5ssFroJaGDyDPGiKoeRM71b2u",
  "key11": "5tzxQRtQPpAZ5oa3qUtdDgksm6F7p4LMFyGfTZ4wkm9mtDUSs2i6aXSSPXySa7jNc7ejGfPWajsRm5FzzbHgwhkz",
  "key12": "2GLDjf3WCVNqhVZMbJsedfzQB22X4u1dYoAApxdYfNeUHHfLX8a1kUJRseo9xwXbeGnoxLvscy9xVtNq6BjeiT4G",
  "key13": "4KrMzXfjikgaFeW3GB9krcYxTmYKzjSQqYWrKHwRybjcHbvJ5xBGvsMMxNoypfJVvtM8sfXjTN6HhkiHyMyMFftb",
  "key14": "jEB8762ui2GHfJ4c3gecPavhgrLJUKcbUVXX27mhZcCdaULXVGUTzNWdoHmp7sanrkvkF5U1WZh9tqRKRjh7Ymg",
  "key15": "2ELpiC9knqLJw823H5UJn8AtiSbfnvrka7sba3CoySW1GBpu1RYDEMeqj2x8YQ2ohy8kTBwHUu8tHQAbmA3sGxep",
  "key16": "47k2ohZx1Pam236rcLpHaqy9h4tWnA71JXyPACCgDQCSAi2imXDhMVEwNsTeZaDAX6CBBNAmEw3P92N1yGtKArrN",
  "key17": "21RsaRc7m2d9HHmVkKXTuaGizScsexvN88L7CTsVJgDxo4tMEbYjUDAXGwrKqGBZdKG48DuDKcH9DEpH9Raea3kS",
  "key18": "PrZa4A2Enw65r5tVB4ikEN43FER2yjw7U2obLDFsR9ajwW9KvMk9xmTUAVJKV74HbeGier3yaZoWh4zRyDZZstR",
  "key19": "661K5tLRaJqf2DYW7QNnNp4cgRhnirRKAU8TwWhaRbkpWngoKGKKdhda4kzdTpE2G4PEi3TB5Ky5Vnz65mqZ8zyx",
  "key20": "3tU4ZVNUVVxR1EUuwgSQoYbNwo8aG7dayNbnUJwtKeo8q5pFJkeTn5MdC5nUtxHDqnuM186his5HcFQnuZF9DDYM",
  "key21": "3j9vRBmSpM6jsEB4LZrsYSMQoafKnuzJVZhbyGn3wQkBeWJBc9g1UTg6Kka5yFpzGAJqSpc14ZpDDuS3AjZg1ny2",
  "key22": "4bCpw4pL1EmmEKmjqtLnuXwh7daxNJAv1s4uXKwbUyT5XmDR4eEy8N5mZSTjHMsNrniscoXhsQHcGoGGxN3QTwMJ",
  "key23": "25vBVjiAy9U3cAKn4sVFLZcfo92PZTzbCqAfaPrKMrPDCgjFi3SfwFfTXqpwpnY9LPxjoLZTMits6gV8jisv5gBm",
  "key24": "5fzm4vbrAxaSSXhnHdR6gsvC6rMxs5ehpoJ1eD8eLuXcNtwyCApmAJgB1yaQ6pNrETRFLPB1nuHJVwY7o2j5k4ru",
  "key25": "5ZkDamdWrEBHJ3hMy1PjAXsCEiLCy5ocjoVcCoHF2Yrj3HBFmxpSRPgvzLxVHxnJhtVvjp3UULXyQ5j77sigwEP8",
  "key26": "3hmwCT8284zQtYeSNNBRnD97fG8w112P29cPDQiwh4wxWjiYA5j3ZoNYKq997gaB3GYVTqwVr5Ep55dsrnzpEtvk",
  "key27": "5wjJ2s5uaWaidDktLaCZzwCjJ9HbxF6LGVR6kKsSjwtw92BSoNEV2X4fm5e3mFVaN9mU21seBYZa2S7zhcjYZe9y",
  "key28": "5iDnFCidPuWkpqbU1e6qLUNNgoho9DJhPPbgiR98eugMdxLVs5GdQutuL1kdj5tmmp12viWeqWiA9LgCSw5uUEgh",
  "key29": "4eu2bBdvV1gGvWbtnpYMrj7xKHh3SnyhpgGYrbexuT6gifdWHaEAEWYKamWsArG56HMy9NGgZL8rbSC2Wjwh1Kf2",
  "key30": "4aJGwuC981WaQLXywNsFTzwTR8tt4kH69MPBzigAYJ7v6jbQBdT67omNsuUdGUjzCDfKWMKgsVFuPDk4cshr7tKX",
  "key31": "4sUmmV6WdLcPnMpFFbQ5X6v8mJhhJxvg4aj7kfvhPo8LpHbLCMUHaaCqTcjmiGoe34b3xxbScYPdmmi6Q39L6yEC",
  "key32": "5mfMV1iYP779xeGeWKkoKTQTt2zqmm4zoJbAuKPubNwGAWdBRH9XSrW3zBnh9SZHR7i6iEM6Xp8ZEQXDPV8gK2cV",
  "key33": "nxJJV35PDuNDZUHFuMynYzUWhhgTHUcTN3ERTbcacBVQc4ziw5ir3zSse6jASrx4ufyw2fPrsaK69Zcuz8jaPEW",
  "key34": "8WQVXMPs1zQBpfusRg1EmJmr7cQXGb1TJFsi3JQP5dSB7pNFRt9WJeo46VTamTs9PWxQruf5upsrCV7HBb3EM3E",
  "key35": "26i9PnnnMyrVf3udLQwSVUCEE4vwcPou6pmFiVXsH6rPRSpDzWz2jBpwAsiBmuRBwoaE3kXLPrxNjdkWHqHu6SL7",
  "key36": "qTMdvQAXmHgNbYjZEMwtRgAb2exs1wWjq2Z65grsd917NrFGpnpiFixWfqpUK5CccMKgX4Gxy2XjgKksfUAdHrQ",
  "key37": "wn8wyZRrn7ShWgxw6hj8fRjXXMcmizWtRR3Kd5u2aai2jn13ryW4BtzDd25o8AMbRoJEoe7eQS5HcLSWDoMb4xM",
  "key38": "jU8SnoA34T7KwoZwjE1Pn1jyLZFwSuasjUm7JNgBHrfTtRJ9oBYBd7UTMSpgrQRvdBtoJfi9PtvyyMaqG2R3heV",
  "key39": "5FJFjpnHof3z4APFboGyduuMV1bvbRwvJWH7Arpo2BWfShUhcsKfirAat1Gk3M6JDkMKVFAUyvfXkrzVWTwy6F1A",
  "key40": "3bpeH637NuXqf7dEmLamvFQUYcaFSBvK6WQTNC87jydzB3hHUgsoidmxAzPCuBbgzd2RJE4DPmL8jt3qJV28N1Wr",
  "key41": "s9Bf5crYPsw5Uqx5SEY491wWbuqmntwG86YnU1R7CdWiezDJfvdrzYpxayPm3ZfUkTGWLNbFRHr5i2mgT3K1csW",
  "key42": "2gUCoFY53LHPY7FvB4WP5UpgGg4rb1QkjPDy5LhXSQx4WBBUHfB22RovuktRFGDJq6EFaxiP8wFoewia9g95BSXk",
  "key43": "3XGG9TopbqhRfZSBVTWzrjGNsSMrhEPVjvbPGkBEgvmS4Gewv6e29EUdmN9dpGJEDW1GrNGuQDsKi2yhAdHFrWvH",
  "key44": "2n3SyGTUJeMLaGe35hjA8JB59XoJdhgjKoU7RmaPycsQ4wdjYFJ7RtokMoY8KyRyZEVWNSig4UAdVK966hUYpNiR"
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
