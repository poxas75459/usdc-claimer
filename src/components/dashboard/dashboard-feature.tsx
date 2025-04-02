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
    "2s2bJPM3p1Af9byvfgwKXyUay15adGMfu63KguWdBpHxr5J2tMZWeMK3JX45VrcbCDYYrcMSeaGDoitc83CQhuBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jDPwqeYPVT3dm9G5LU3Jb657RcLRM1xA5nppTQHFccQWqNUDkodCWVLfcCCaHGqST9C1U2gRyRGoTfDkh4vkHP8",
  "key1": "2YPk8wvsbqToFctmRgwVJscguTv88dTdxQTCo9BPoVcLXJ6NTzFRTjB6fMu4i9S7fWTqnpXpeGppZ7UbD6x7cefj",
  "key2": "C6yTvhXEM4axsz4x9G1ZyGVw63jqJ4888ZKxNEzoYoyBScakBwpixzXAiioampcbt5CffsCs5RkSJjJFfaQskz8",
  "key3": "5eNQXKj2bwTMSKXYkRZfFXLdS6yGo1SPc4wb2wHwyHLPPmevRqtADr5PBUCtXUd2HihoCLoR2AgjQJtXknRcyKKD",
  "key4": "21oR1v4z8w5ZoWfHTc8HQVNR5o8p54UZ48AfQ9D6af2axLrbBieANzC53ADyFsbpfACDCr8kg9odhzYrK3LBAzrz",
  "key5": "qowTTs2pCFoPjcf867nmpFM1XjPquYoP2GCzxu8iajRxLDUSQodGwFu3m2K5gVC1Mhw8BhCZAD8AHS3Hx4Ushpz",
  "key6": "31FkZGFZ1mWhBniePRPBvpR7K51UVE2Pe9R3ArogJcWm9sXbTd12wGeXdbef4ESnyARLUVd4v8p2bdHqL1jGkQE3",
  "key7": "2SrYieTgVv1mWxixwpwmJGcS44GnYfn9c8EVL5LzPYfoozNSHxXGiqAt2bmpRoUWdgAukrqudBP5V79BgVcV1gGm",
  "key8": "5ajky64a2PzFxXMX5RzpiY5evQd8mRyGMzcZfp4DGNX1Nr3TAH4xqtNEtgLiPBEE2mxMaQKkoVem2Fj4wk7t5Tvx",
  "key9": "qKHadatdyFo3Z9oZ3HFhmMsyE514J7WszhD6gCirwUpigZgVSAaxfyQJ9wMu2a43MGcn9Y2vQViraHUBJtpH7R7",
  "key10": "T2jEoVGaFvEn8QGMJvkXUBqRrv3w57nFNT1Ygi9pTcRPzdYJED6PUqwT8a7VhqjmC3R4Y5b9Y3eSdv85BE1gRXg",
  "key11": "22r9uzGqPph2cezqENbY8JU4fa6tXtPa1BZVjUKtsK9UHSH5czMoc534EPQASt9QbJ1jxxEEvri64HYFPmTBjids",
  "key12": "4ySUzz62hReZfj48DjigkFd5TzfEi1yFQcHacEiDpbGpwQExb3q6a5KiLLoLJDY6msXFwMPiootQXhU2Qo6ucNS6",
  "key13": "4GT7e3FtvdJMVjqxvfABsh9noCbudKZ7h5xtaY1jDwq1atwn4Jt9ZcnfdEurLkVGj6EVzEFyN8FQJSJ9MSroSyGh",
  "key14": "3mMTiXnQxdoGFVd1zZbv7RhU1TAfbYRzqJ5jGnmvaKp4GxN9eXHj5PGLKqN22Bfmqep3UHDtrQ7Rheuyrem2Drmh",
  "key15": "3eUBKe1Cb11pABmf8MXJJT9cECHX93XeuaL48MLh1iEMYoY37Ayx4k2gkZY9qor5MkkYrUcEWkxe4kLbk4AFhnRU",
  "key16": "5KQKiUauMb3qZC9sHqQCAeRsPtJYoYLsJz8kQagRWrRhBVgWVJiU9Ra6B3AYgpJqJdS3792w6dx4WEN2V6VxhnxZ",
  "key17": "ViB1pLVHUm4iiNJ7rxev7EWLVii2sot4EjkaTmmkdmgoDfg7dGahrhHxymXBzbhvb3Ww2NdkQynPD12fARaq9Ww",
  "key18": "wGgYbEameJJt9qpqVwL65KNQUwKc732zxhUQkJ4hWewf72FFCuBtiwyb9hWojTrwTKe8yAjHpuap66MbonXKyaT",
  "key19": "jNTQUdueWRnv6K5iQNinKQhCJyzRmk4PjVHSTrVfMNbJrxVh8gP2wsChPVCvvQPLXTxcSQ2mDB2GSGvo2ygm4jp",
  "key20": "4Wwhkcx5PkcDJdE7MRvB3hy3pWDXwbJuthZRBHNGsa8HUiQpuWWjcoSmcY4o5dHrBdxPJ61wJo9GGQabDBjyho6z",
  "key21": "3t6jcJ9jwqj8X6fX2zXnxuvnm6iPMTGAaSUmhns5o2voiHuprQpVoSLvC2EtoeXQF43DcMptuapmpAYHoN5YHFDp",
  "key22": "3pL46MxXdNd8hYP4Md7N2XG8HftvM3cw5aPmr1Y84TciiJeK1KQ3a1bdC3VbsUST7fUexjPsDccpBcyTW97GHfUq",
  "key23": "4tkNqQ8pXdBATo3noMF5VKXRRakzVw7JcLqSw1GpNEhiTpY8DPhMk73zKn5C5zQeuwftXt3XDp5ayLLQZHJfxucd",
  "key24": "2d9X2ZNzHve6g8u3PQVmGmyTbqwnW9d7UYiNHMPWeew8M7sG72w4cSZeckFqt1ekZdVn8oGPgU6tiNcJRd8HTVRU",
  "key25": "2iasrW2KdXxESMUTmM8ZnwRovXfsv1HbiU5H3eq296NMvmMyLjb37CmuopsDiDsc6hpQi5AGqrqaGa4pYBoaMcrF",
  "key26": "2itwaa42kMHcH9Euo7PpMo2MKZBjpsfozEyoJaPDXVF9vmgi8vFK7NhqMVqE5BuPnna1xRaSKUoUYfPNzkaoJyz7",
  "key27": "5tfSGyF5hAWcdbzhaTd7sdgqaW9ARHqU2ESbHHH18Ro3qdrGaZnse8DGJEUU8RtfWQcxbZYau3uUq44pUTC2FA3i",
  "key28": "4ToRuG2UZTixmxfKDgGVJ69xHgmJmjKaX8RQUBwyRoRGDrCFimSN7xcLphHnEpfaGYQ4ixzY2ZLMZ6vPmXDBJuN6",
  "key29": "5ttSHhjG4nmmx8tRDiX1BjX7Xgyb4ZBFf6NX1QMyKTT9FfQJBHgY2idyLiMQc9cbHqyghoDKGmZ5AKabkDHaXpH3",
  "key30": "PvJvWG4aoFy5yHwZTnbehUJyvtp66Dxx7TXDcP6EkYPsD9x3JGm4787wPQiLFcXaULusHikUo3Y2oZL9F6ZzkBh",
  "key31": "3CHJ2EPt5W5s36VjcawjZ8h8gZT5wCi6SecNGsaSz63sgAqvWf6EHmpdHXGPCPMgcYNAHdfuP5XMzmirE6mcXYZx",
  "key32": "5qVktqcLJwTnsX8pasxXbJLDpgZhFPcs9tHGj49mK3X5gL76EK6PAZtuq3acuLLmLTVKqev6u5LuCuDCBuucAhmx",
  "key33": "4J2QwjYxF8gmsaFgRAFGMtPZff2oVo9ucPJBVfWnvuvjwzmhJJnVsnMPMiDghA3knJpq5NGVz3aSvZeFp3LKjupr",
  "key34": "3iSbgrateFCisEMW92eWHWFC4rYryGB63pEQNJLvMTVUmZMn7McDkoyd8c9TBeiuuLfMb4eJdno9mArzdNzYWzuJ",
  "key35": "5r7h1heDa5tUCN43fKrFm1dAbD3VA4entZtLKcKYdtaxxXmwoanqsYCnK5oaAcCVtjE4ryjER9ZEhpzmxeYGMcdx",
  "key36": "4ouLgMSXm7uN95irzKB3yjSWazHwimHGiipHhrxZ31S72s32WNZ4NkgHc42nMwvb8LSXnNwyCQuvvyZcLMaN8wCe",
  "key37": "3aWi6G2n37QwQcFPKWzps91N5P6dnwJ365wUuKvi254owpPJkFwHcXjP3oscQ2cpNYSrtbiHcnG98cAoULRYTqgP",
  "key38": "4buu2a5bJMGiWSAZ7TNBVjHJHazLG2pK1xwcNaeNF4bk2nkJ3coGTw4T1bbLGAHRc3GbbBzd3DP38cG7AENJFYfM",
  "key39": "4tbtPWNYdgB3Vjwon5zKu4Gfi3vwygznKbK9orPYPMmyLhEYCmFV9jfzSdehLtaZMKD2kD77x8oiKrAq9uLAW79e",
  "key40": "2qsAgAdyWzJo61WYsbe1839kbgMtSpa6ruHZt6253FMro2Rok5tvEGMMEoGHZxg5Go4KwtizTKFDj7s3MfBmmxeb"
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
