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
    "WjgknZs7fbaEEQa3vNkT1RjcTAbvvRJkXCXvs9TXAPuBR1RCCZGivkyEMCgV64fHCzsrLZXSkd6JVS92jfu7zLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64pKiFL6h72RagujCvLcRYDzRNdJBjPwkERDgzoKs3UApGfUCTKXirix4q7UhnURbrAYSW8dxVwW7BSZwimqvhNs",
  "key1": "4JcgTX2h5WYFtTZE6fiFvPhm2fBXrvUXjHreFcwsJ9cXeDmnyKibotmbvHXoAf8zuRBmSNUp5FpbtgR6zCT7Sjq9",
  "key2": "381FAtDKgZyb6pvtXzC1Njx1YyTzWkE4MKCy7mLD7TKE6rSS3rcrk7MCdzd3uG4PL6ytnL8Jqz3BhJRm173i3m9s",
  "key3": "5hEPvjXWHjQqTaitfv727QnadPn4uhgJQvxAn3HfzreVaV4rwMMEr8ZrAVpTJMEpG2RLjtroekhgem9PtBL95y9A",
  "key4": "9Kec3ZbniJcnBwRoB8kqzkKrrRYsCX9R9HWVefM9n9pJfK5jK8wkYpeB55vMdq3wjzvotCSdwByF3Tzi6VoaUKW",
  "key5": "48pD3LCzqvRFi98NXRY4T6zeDEtMdFjVBQtZYD3CdsDFzBa9TTjda9FrKmvrk9uUbcLf5aFnHZLqz9pj9pgY8CL8",
  "key6": "2rbAvqpABKXUN1augNQvzUJCt9uqpy1dSaYXmdFmJQxDY1EU2kvY4i4zMEVgc3JmRVSihaNfNC1AwojuVtYN8Pfw",
  "key7": "3Xg3vCCXu2Ugbt5nNaMWmJUfkJPi1KsqPXjbprMwajPihn2x7sJwPbhmFqZEPxMZBmL2JUsDJMM8YynJS9vPduVo",
  "key8": "2x4Y7LxZFg7eeMowog9JFrrSZ342sSXSa3DyKDQKtFmbHYRZvhrqM9gmxeRfYwFmBvJbZQ8dq4T4YTkZa5Dm2Pmf",
  "key9": "2T1tpTw1f65ecTYU73tb5ebHSwujoJTW8FEib3qzT1envBGQ39NQNQwaLAW3ehz61ZXY3j2uBBtyK7eUKqTdi9Ly",
  "key10": "3QeYZXimvrggnVz7ZoSeH1kFSZHZuMGSXjnT4PfyQLRKQ2NVaGg76BMZSCTT7QDLTjnsM78KVQUNZxmdnBN6EqAC",
  "key11": "29NaGAsyqCxPJsFezoPJfzk5V8ncbRVZhbWvZp5G6i1JTzKCnLKVchpHWSruDb6iQQ8nRpP1qqPi8bpqD5T97nXj",
  "key12": "33bGufx5FetCit5D8hTgE9w6f8U2n366kUBxAXbNK6Swq2Dwx2bqjzkDSiLN7iydGmPq83GBiXWkTfCvMqyJp5Bm",
  "key13": "uw4pzuxi2zjTYvqGMLubn6grp7tu8DifSGK7XzgjzxT8imG83uMgwb6j9e3cATaUwMegdcDweDPxReU6fLNvLV6",
  "key14": "WWDNwgXhV8e7KCBxCZrKpQgDhDptnti6AyLUYYWbdUay6GyQqQdao3tbcVn68LUiSXFuZhePRGbzEbFyGunSLrs",
  "key15": "229xa9GTWQTTv8mdYcbPEmysnwNYbrm133A7qNpT2UUTCYnZYzPSGpEePMFpwgJrMtN9TQWLwD8mjxQfPJJUEoQ9",
  "key16": "62hqnDxdAvVKvjuzN7V5q3QXCfkBHUY5j1KhStkqmjoNkhoaAFCnDiJPLM6Dp9ekRWuwxyGmD8RBFH3SRPy7g9kC",
  "key17": "3ZgqMN68q8pm2kcoCEsaKd9u9V53C7FnxRMrSvarN4xfxdiAYLvRKpPxfkHxc4zhticM42U699y4TyeTTKdgqteK",
  "key18": "2eZjCurj2aGerbPQ5Jg68hGfekXQpyUGduMDQSYz9HrYsyNEW9epqFAG5JvH9tSJUTdRHcdAxdBBSKLptvT9HLUQ",
  "key19": "nsM2eTSyWLVqyQ4YJkHDxEf69ffryHb5me3Aypxyz5JpmSg6rFh3eTgqjNQFu5AevpuuKc2d6FL7XFQen61oXWn",
  "key20": "zHfQ5soHLffUg6HN1EWowiLRt7in9zyv9qLZVZ2MNPJHgni8wqEHijdFEzYb9b9e4zw2NCRsg7NKMnzaXXVQTu8",
  "key21": "26SEfgye6bhugQTji8Do6hqsMV8UUPsA8yQM5QE5faS5waBofz7tqrCvW4avh4qNhBDQqx614D15137jQ9YjTPkd",
  "key22": "4KLKtGP2xLU1EGFhSwyfjTWXrAW6sCobgvg3x7cdp2iK7nD18e5X9BKdEUMjBPLuaWX9Vs5iPDbZVCchAZeSheHr",
  "key23": "3nAh8DfMadzAxnJQJaZ4RF6aNcrhepn5NQUwZ8YfWiYyPLfanWmdERWR57sRvCYhhp4xDBLTJi4ECqJ3x6G9U7tH",
  "key24": "2UzMRUMm2sRHAKoDjBXuENA5F4zPhFNYBZaL9qWmwUgheKqeRLWBnHATknaJ2jyFLvD4Mxcv3XTfKGA9k4P4orLP",
  "key25": "4KbAH7B6ZSfRtde4pptY1GeEBU7Z1XYqWMEP8MaD4ETKUtc9K8Fd1aAzZpR38zM9sSNait3ow1aNCQSXX1kHuBCy",
  "key26": "3vW7uxRmahciBEzkVYKtt2t2SeGU5QBkSd52STy91txFnMF29RLVkjTNkNvMKFFCMBCykqPKcGsgwxYniVjN2g2B",
  "key27": "2C2vb1rkM3JfZJVPpV4EZuNk46mqtFbGb7w4S9x6sxRu3LVnj1vv5EmcG2JXKphk7UP42QZWtBdMwtLg5NjGUJGL",
  "key28": "4oQhEK1Rwxu9sf8SPwJDyyqwYuxA4H6QJA3ZBEyeCGY7U8CS6gkwb4w6SQ4SGMJtauCEVfthtd7sdXytsosn6RGB",
  "key29": "3E8afG1J9DYqPxX6ezgGYrkV8Usz9VVBBSErQt9wRX4bn8VTSuDAJ5ppTSioHpTKfQ5vyEPQ5Nwa31V8PvGfX35q",
  "key30": "2jMR93JaeTPBztyi1fJpk8ezW3bRqCUayabRpsLqTp2ArYaNVRC6RGvzzq4ZKkotnkWYEgcMRhigBzqffJodYint",
  "key31": "29cFewTCPZRv1ac6wbLQanucs1wrxdySj4NVzFWG4VymktvE5ayR6BVTLo9yC51XMUZ12Gisn8NVKHm8m3a18Gp5",
  "key32": "5KXVPxCiL2r747oZA58jVQdomf7GCLENZokpGvEPT5jvTDiGjNETG14YHsM26iU5mPDL7yuGet7rUkgWzMAcxYgE",
  "key33": "5wTcHycmGo5eKFr29MLXztCL9yQLseGeRaXgn9u4FYjPWtfVdyhkqUACYVyUAbsWrkpuZBapVsUfup9rAVV1B5dQ",
  "key34": "4SxYaHNnpQt3rjsEcSYJSYmX28XiKueRtAjT7sieQnVFaiJSAZ7UNfKnWcmjZ4VQiFfb7RQMBqNxmxSJweB6uBVS",
  "key35": "4QKovozYAa1MoqHT7uGmN3r9c3SJfcS4mDNKHZEYVVR8i46mGKotmNH2eVBc4kpym1qZsB7iysa8X9L3cNBc9odM",
  "key36": "cNWoDz4S2w6hf1txVLUnW3xDDq6Fxa1YZA5ugQUPXhMHhNRAwiKqG6DiyAayejW1j1yytGuroTrbGaEnvDDTWQE",
  "key37": "4Ej3yyRjrLyJhZG7J8D1mtnEYjnAgs8tWKmcvuAkW5R8ogqh5BB19pupdANjHCwuWGHf1j6zX4o7dea6pNS5ibb",
  "key38": "29DpgEr2AVquVAxtDP2UgnJBoUZx9PMYBPUKBxgjEjUjwqgC8GkkknTvKBYF4sxfABAXtiJdD7GaMCsX1u8fabf7",
  "key39": "ZPwexb1VdXNGiZWPintdhYziiMszLUvC9A4awnixo1LVvoQYA41zawa9Q5skMkK5ayE9mzt8U9akL7DGjCSm74J",
  "key40": "2By1Ur8vHfGWNrUastDu5xVdCi2bJzt6LkNTSouraPNpq1icyFdGBs2jKpByYnjngx48JnZj7NUdArHkzJ3FWP6H",
  "key41": "5wzngAYs6A4vNPubwp6sonSDHFCwkue7FvqozmAZPQFhshdWC3r8QjCAB3G9tGCQ7c8yeyoMo12fVkssbra5DGmk",
  "key42": "4NtUyPrx8fveR54qLPpoGaGExKGeUX98faCSREP8u51GapxD47uwa4nRg827v8hPvJjrJRXnGNsknZCj4nuUB15U",
  "key43": "sQMjirSDycCnuq2pHqReXUT3X3FjFUPvm6HPj8Ym5HbD14RZxB5duw9nVziV5SDbHv9QRrym4hja1TcyZ5TJsQd",
  "key44": "2rs8k8mYR3QkaFekaFTwMbgqZuUicX7MBVeYfpmWmPnqPRu3Dwp7g7zdKfxtQn7YENrPqBQVZMRPhqg2KDftyDLM",
  "key45": "3a8HbSE8EMijUwejCPdhKfwXxqVCgBAT1DBXkjDMqoicoEnp7dXPjqTQ4ekzAiiML4rTCVmD9QxARY79JWTBCSwa",
  "key46": "27Ko47CuVTqNhng8wJuvsRhUaYimr1NV97vLzgiTzijikFof1ZzbZLN16yMg1y6dkf9EDKXZSsVHZm86zf7PmxrW",
  "key47": "JdVY5f9ac4FmVnJTAMcgHwSJAVArDfUzg3xj7JDYNqd5oUhhsTLuU3T5aPnFnZHHywokrUqnx8fLEc2GzubwgG4",
  "key48": "3znbAz49SY7XampoYnQ6ativuZqf1uqoiv7ETCu6zph58wbuH7iEN1SgaVGcQb5Ntnv5N77XMjfTMuo7yD8osrwS"
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
