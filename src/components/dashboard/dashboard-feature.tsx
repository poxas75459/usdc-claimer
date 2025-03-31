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
    "4pZDUUDRvNQ7rH2BRgUAQ2peQkdVyqNGrBxRHcFg5heK7DzrrKtXUi4Ksub4ZcG5JFqUaZkgVqqnCc4MUUZdJgz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EGcwrKVWqaNneLY4Rjocegjr1bEZjyY9keyyg7XaMZxx77nwE1rU81KDbW3GFAhmA1JR7h6uYAxCTkqkkkk3A2L",
  "key1": "2Fh81t3pUW9khypATdercbqWLtzycGmbJvWoP3iA3wDcQS29CpoJAdLvy5KCadPaAsBLKoeChxsYM5vb7zbX3H6R",
  "key2": "LQwRas4dCV7R2TGviip4RebMVS1XyaCuTPA9sCzv7y7wXu1VhvNj6o4ASKijnZFr3Sn98yGaJuBupK93n529345",
  "key3": "5u5SsAp9dDzmzRtazziTv2KUvY93NYQ2BFhkNT2G7pbGXisRRm3R3RHkBfrSPCexL7GV1YMR2JyFw7huXntrdLaU",
  "key4": "SkzqoxB6XvBAAbgXrWghSvKbxvRBaoYj6kJYQZdebbxXcARfvLNYK9NxJAAPWC7zPtNbLSf3WzwrbAZFftHdbAA",
  "key5": "32rb5bG1BDhJ58RFNB6cm3E8HXB223oEpCCNabzDQisjnbFyBgyiGiDXGbNZwQ57rh3PG3iygLTWJcTr4Jkeiucf",
  "key6": "2heMhVkwChDfEgMajCaWzkepZf2E9FvQK8AmcuCBJKnXEBWMJhryr9snXPx1GWphZNgHpB2wuCWqyxSfgevWpdV3",
  "key7": "4862GgBZSeY81AgbzVboGXJnLrXms1gzuLpwUnqq1UeBL61b5fBtFbw1FU3uKyYkqxvsXygJkqxR6vGiBqDgJZjy",
  "key8": "3s6GmTjMpccAE1zboXEboguhees3GAMgduxBf9Vmau3hMu8EgXrDjC84punjmd4BDeW5vsNmfxuuVAcYF5Wmjwo3",
  "key9": "2UkMBNzVGRMoySZJRqccaiAk6ZpDRf5uMR6g9CG8DLu5L1vDptLNJbkgWscvBWNcQpxpsaw2dSAPoPm4LC11567z",
  "key10": "a3zc9fN2MKCUPj42epTELkfjvMJQar6QLaaE7XAjTxEnWuq7siX1BR8Hbe6a2XxEgeGuTxXdNRp5YqXJV1S9Yrm",
  "key11": "3ZGd8W2Vnbp8CvibqNsZp89ydyGYbAEesZmWeyyzbNjPvf4PTC2JeNU9vEHaxhBnCYwDcA9vtF67NtqVtaeNWaDa",
  "key12": "4Msj5HyUf4kERZJGn861TQjxSa4kWKpvZ2BJAnfDfybBb7r9s6EUx3dt2xizDJi1sZqvQDVVKikK5S8uRNivv4Q",
  "key13": "4k11xWkj8n68b6PoFZrMbPXzoa7gaWinks5CQ24w3JgZ3xgAHYAu1z7A1YfCBEVojVVVV6FocFszV7QS2PQssJDB",
  "key14": "5G946t6AmRP95XzHxAJfM7PBqS8nJGC4vEh1N1ppUBRzVpWigLZeKUzvtJnYaQ9mRggSQHTFQZSeCEuRHNirQkUq",
  "key15": "4gqFJE7puSEnuZpUF3F2GHpMEWYUGoZKXvCMtTGpGSLHmeRwTrA8ZMyyvhyoZTMx8J5crpHvvSgu771AfKg8Qqb5",
  "key16": "HAarinJbySCRUZ95vT9yTf1vfBhuy8mET9nHMueXHJ3p3NR8GAbvvKqL2ZXjmxyGwNNBH6J85NtDkDzxSBsYbmm",
  "key17": "2XZEkUCtUpDLT7uirz2tWtX8rJvsjfEdsNRyPcbbkoACFYXHMQVgqHhNHAEWTs7v4EkamKNjNkUa1KBTNfbzGg86",
  "key18": "4kTw13sQ6UQTuJeHq4VaKHt9FQw3eT5ULguAGGy7gpa6iyvYX8NJZRUS4WYoCA9vayR9Gw8SqqaRfeHcMwWMRefJ",
  "key19": "4NUM2Yr37PhydjYkZu5LodYEVyd2hxSkgtbEAVW6GJPecPCgZshJShNEMPQsjnM9F2yFqWWFJMmSCQ9L8yhw84Zu",
  "key20": "3ADoeaH5ZuNmNFZfSBNtsrDmnXUG9mdBmAmCr1nyXEwo6hfYaaM1jz3urcBnhQCLnaXJBUktei5umHBqbUUbtFcu",
  "key21": "nGkuZjAk4acTLWxZbCjxyASb6aYN2YHStV7s8mfi4cKWnGhPgttMAcuDnyYsH6EXcTd3Rw7Kmqun4zigYaZnWhi",
  "key22": "3CE8bzQT2EH5jSZkUxNRdZaWkmWcSq6dvoKNubZKW1nsuvTRhxgadsL18yVXwCgvgKiZDUk99yWjA5BRWi7Gykuh",
  "key23": "4tbBGYb3W2mUq39FvbR4Z6WwbeoRP4LybSz4FsMUhsnXt9Xo3bLfLpHY3KxReqj166hM2JGd5ZH2JmjQqCZH55EY",
  "key24": "2k1CALWpt8zvRptpVC7g7firmTYFGzKhmXvL5wBwTfi1HWRqkxj71ZrXYPCGpfK9uUQUaTFjEBmy3xKCwUkzuBZj",
  "key25": "2r1J2HLxgzzjwFHz52woQudTTNFBppFBTBnztJrgKajSNZRNnfWGmcLCxeudqmhKs4h6Fmt8MVPHLeu3iXFwrBKZ",
  "key26": "2dkAC3rvuKqHwXhAzWqw8qCezrfag4m6fBq9WRotpkUoNiynkx1oEap4H4TEDZLKhohWcmw34fWLBEivtjpbB1HS",
  "key27": "3mfDBvUhoqsuS5yUGt9zZq1kwUTF8RvnosQUypB4UjDqLmoU3ivx1QiuDDvSAPpfLTa3Ur7wvWd68cRFE9SimpfA",
  "key28": "jx8YMCrCy5ryph7aSssaTAG6Bonnwr5yiJLjHrZb4YMpaKFfU6QAoVQh9am6LMSupJSQWPKXKSrC57PwmkczX7Y",
  "key29": "3SvdfS1AFun3KxiGPysVUDJsQkd4eq2F3DEEqdctaMwkYRSUq94mnHTo9bdiGgaQU4Hmd2TWakVP11RquzWfXvLU",
  "key30": "4ZLGZZUnByDzWoGeZCjU4HJFbRiT4VFD7rrkwS6wARQyKP3YPdD8ScePqQBhtXbwAFs3tB4RfZ7NERvqa515HwrH",
  "key31": "4CQYzbCfYT4eZLgCf4CvjGFhcKzEe7Fm2v37NeEV9v6Da7QuS4P8akvxWDoeKx7CGJt8gyVSpkUrM8PiytpSLzpe",
  "key32": "5huURRo2xuSuj6E9wnqw9gYtRzNVMJbSQw9wYffzrmfd89PPYrf558BmcPjN6eQhHipH6QqP2Nxf9FK3tN4f5MkP",
  "key33": "4LwaVj3FEbat9HhBLtZvXGiMQXJzdN1tQCuiUFq3WDyBqLKxVBxBodq5E3f25sgBxNZ52FvX6U7LFP9YiEH23Ja5",
  "key34": "2YE7FZPBFxtNzGUmaH59ahW4sFJzgS3eho2wUobtu1GYTjzUPa9RcVLEb6n4h4WRq11iWuULVQjWpxEPzXSA7ZFi",
  "key35": "8NucdE2enYDF4Gpx3Rdhw7cWa28MzbGADMpmtSPFLy29kpsCrsNLycQ572W38qW5iv2satR7czBFz6UmSX8HgzC",
  "key36": "6Pf8UZW9o52AMUSXYMV8KE574S8A6FqP1ANL6UWPP3yUBuCNhs9TKbsPv5duyuGisi47e8JUBS3nAYtUt7bHFGs",
  "key37": "4Ft3Au34Y4gyTytnEGNXDX13EiDv9VRZguu4GYgSSPV1XETxzVocWJGa5BEkkSfZyZXKCoQM4anAXkP4U9mX2U7L",
  "key38": "3Havqrqw89FnsF5CzG9EZ2DkVwYtLiW31cY3YkKDaj6s5LDVy8okzEzfBRe43XYbCPUR36p34Bo8SB3uteYhozeG",
  "key39": "5z5ymj5i4KNX8SU2xp7y41QYfrQm5Mo9LxdWAKyWAyZRTmfp7PEqZZQskC28L99QxfC2k6Qt3GE9fGEhAHjrwEhM",
  "key40": "3Zez8QA4N5h4527fGRFR4eGME1zLKZL2fTiXyCnJRK3cJxScippbAr3mDdtzCGLQjoQdyDP2wPFsrawzcbD5TkBj",
  "key41": "24E4opGMeJ1YDuyF3ikUfyknLEiDC2kGSyC6YRWsWwoAebNEx2pUecMdRL3ikESqQ3SjFJrr9FCQ6sXvGeZuKVMc",
  "key42": "5rhcedxxZv52sxT6LXYF81SqMat3Kyx4rVgWiMSnxbju6Nxr9PdWYT4NwhW2rMxNUXnEXHMMj6sVv6kcfJ5gyjy5",
  "key43": "5ki9scZJoNaudG6vRaSM5uXB7JQXj5u3vTcD7JtYw3mYy6koxyugts9SD2zS18LFYCVzUvH8gGDbFqumkpdwZVHZ",
  "key44": "viE9PTgd3HmvE4Gt3zpNU9cFs9F9zwhCtguRcj4D4GDB4VqSCzwKjmW3iU6E2kckWz812mahcN3pv79HNbTYavc",
  "key45": "3sKna4z4dQcbPNpnK8x2vFus5g61eYqMoGHvu9pubhYSSeLPFiVFtngw8G8CrG2rPZ6caQQFkVjev7d4d5bdxRBs",
  "key46": "t9c71b884VKiZXxTQR7SwcQm8koacTwTbEAfrQixCx5ZDARJzhTZU5CawBpyu9XEppDZjRNha2feXLq5StaLLcY",
  "key47": "58HMnez7MPxKhyidHbdvr1NxMDRDr6A2yz9gHjfrLn9Q9triu8WMLJQAsRoTM5SrDsLj6ci8FsDHNcrMpfmzEjds",
  "key48": "4cfZXebFSvwN1uESeBSbcLFAYixP4afA845AYmuVgtRBDaRe7ZCeVhBinWKhZni7S4ZG5ixqdm7MkZHJ3t5wDw29"
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
