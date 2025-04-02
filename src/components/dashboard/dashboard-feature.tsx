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
    "2dkL72HbUyezWsUkjT5HpM9tsVmXG7CpBRJkTsvMYmiv5brsTiZKQGgsa4j5nECJhsKGtw5uufwCAkNsAdm1QTfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p6kAP27g4k9WFF2PHD3BWWqSd1QarVu16wdohryuZAB87ru474AcYoqdAYfy14gBcNDWqZFrfzS626xP61G3ncq",
  "key1": "BfWzxJLFD7FbqDv7aEYQvJzB2Y9RaoupPeEtC9cFpTdSb72jPEHZxmpTUVNj8LVZCe1DfDY8Nt7xrnQxEbHpDHH",
  "key2": "5M44MZjAix6oxUa3syPq37LbhmD3t98VwYb6gP8fApXXjKiH1V4QcjF8FcrLxZoD71WLUDGNxDhNuju5mC1co5EA",
  "key3": "5mcQpfTTS9Mvg2VVbhgePWTWUKLUibh8CskpTcSintg5NByCZW6Yj6q5Lt6gNvuRGgA7VicqvsX4jJwivf9R1nq1",
  "key4": "2Va66w3nyiiTJcQ3ovfeMWxVmTF2JZtaruyoDyGDnShVCpPXBvVPRnWbUGod55TRjL7pFMY1ENvhNrV5unzM2hB7",
  "key5": "mD3kMvtjVMFLB728SWmJDbHvcYcyDn5GDU5JniSUSVWQBRZoxz3LD4fNFVtbGP5xD5ZskBERBPpKnhXfEereH9g",
  "key6": "4DBEr3HCw9ZANoQgRrcgzytTNdUetqav4QsTt5ANgWQapHvKm4L2TBc2vWAmQYWNmPgACiTps49SGAafBi5EaVfd",
  "key7": "3RBfsftNKneUsso2i8zgBrk2Vj6iemZPDAnCfrBbrZTvjKCo7QP7aVBbntSJvtZp9pCXr24anfjvM5TZat98rs1L",
  "key8": "5aHzuP4kJ1nWeFXiSu5gmXCwpzDAXVBw5xpb3ThwixXg8VafdGvWVaWQN2khuzr7HP1bznzqgLURqARk51QWKLYd",
  "key9": "62F6V7WUEqGCwYGmLa8JgUk3jytTW2DXXHrigWaXhvKyzGd62vwYfexaUs3sZac8QFfrgxXA1g2VMo2MZMn2iA5Q",
  "key10": "4b67J4jYvbDahq171rkMAcd7TK5otdQvcYoGDBQ6ffFrsRth3rA3ARzwbYAeaTR4KkqUkevQS5wDAcYUkezr33An",
  "key11": "4j4MaarNnVCU8AzjRyi3wpbQYU5TuV7w9qjv3oYFS2YTPJboyCGeSxpPpgS4azLxfA8Y9B498W7gJJBcNmRxNRpi",
  "key12": "4WYGri1ZAw8A7zrCp4Qww4f59QXBqv3Y2yEoxrGXjj5BReVtao3QUnX5M1JnRkHrKcKNi5yBTnW2nQwU1Hx6pGFY",
  "key13": "3ghscHka5AoGKFuqCN2fpMSyNzNmhpJxP2hi69grcxFWDhK4GRZQzwt1z8K7hB3LNUkZ2dzYGeeNiXkyCajLmSth",
  "key14": "4cuR4hPU4rfFvCNGo9obSY7HuQvYcdXF9XvwCqiAWxuoWPGrkK85TgbsFqvNbvqi5fMyPeA1jg6cGPAzbXMbo7Sc",
  "key15": "58ivndBCG2Pmvj6a1jLZqdmR9bYhVdueWTLzia1PMLbbqNYxZCmVaynjzKtUqmyUAK8RGHrt1fESwvZ8u2iYeB3H",
  "key16": "4dYXz9YYSoi2xngPY5NUv4Z1ZF3doSCT2R3zzV1coa75egCjq85WRs3bZCrdfD5Ehq4s9inCUMwWahkHRKUriZvf",
  "key17": "2cUwphRk1wuPKpzL23SzZZ8hSYsV7eRaeMkiwq8vtV1WEZ9rfGdNPRuPwQWvUAYytghPEgyJ7TzKTZnJfTVRyxA1",
  "key18": "2Zqsk9oRNecztCzpA7ydJBJybDQ1FcBdL83x8ZiZStHwgvSi4zGRAfkeLKxMoiW3jBpeMtSXLMwByAZwLUb8uXQb",
  "key19": "2Ha4Nnp6PeVyuGaDV3XY5496z4VPtxwLvN7mBhyTV2r8mC7aT2eWzqnTHDWDS4HBtr8f5xQGxLLrNudVwkWhQyk5",
  "key20": "2HcdoE4dXTbSXspwb81r6zniJ6LYFbQ6DtTJMDn2LL76NEAji8BkGG2WCtCdowZ5WXZ6oRR58BWkJTtHmuw7m3gr",
  "key21": "2sun3xsceFtzhWAj1Ce9WwygehvGDANaV4ZRBRqSy2Z43oetPoobnmBJJ6arxczAGtyiV6iezKGYvkHaAf5t17WT",
  "key22": "TaMu6tJK5KQXsCfBSzjtnm2S9TiT68WVy268y5ArXPpCZggiiq53ccaRagFapvhVByUBCFQExvjuDsXTr6LB2bQ",
  "key23": "rBqRjkya5BcgtsdL3vtc3KMTzY3Y6zgaiC2cRqU8RybsPo9DNNzXD3LWMTxudWFdcCkqNc4oAx4DNjj7ggiBFsj",
  "key24": "5UVAtfhEbD8zfXdYrsKun8DCZkFWR4GYakB5EUFmph76wxghrnqwE1ER5U5YN4a1a7UkQGkTHbze2RXT4d8FuFxu",
  "key25": "2Cd13854WK6kdAPnHg8CVGBUPXG8TZ7XwirRZ5kr6oxiz7ZZmtdx6xj6S9Ez6i38E1FVi6Dx4HfLCzpxTbfn1C7A",
  "key26": "2fid25Ljs2WM1nA28CF9kCCZHd4MvZW3ibPHNJeMuwiM4eodDoTSCCC9YaCmge3JSFbsSDBRNhe7yKHRiQPDMpyo",
  "key27": "nEzgc4v9bujkpMfSmzTFsL8vrGu3945xQSqnaUQyfa6hEWkVXBAVkkZE7ABYDySzonKL8gNtbWX3MwS12zQcsqq",
  "key28": "3H5yGjLPcS6DxbAt3eJx5U4vUMCUyYwTSY6uaEmRmGXN2r3qN2o9u9xu4QTjX79z2bvQku3ZZos7cbi6b25CVmnu",
  "key29": "3QdMbr6s72YuSsK7rZiDjCpPxWE1EyiA8WRX4XHzJQpVZJcsoHUYgoH74vDn1UxDtBF57mPZc2iXuB6o8guTeuKk",
  "key30": "3tesXfCVzXMQPQ8opsqT9vvEVgnm9bwCjLt7kFJ5UF9S3R2tEktwVVwXZ4L3W8V3UC7pzBQMRsADbpkVW9y6aTxd",
  "key31": "24zWLcLjJRAK5xKFNoDPhiAjDdiGWSpRM21Am272JzG9842iaoRhCfHnbJHtydvoPdW16ZFxAhtVPQN7JSyDehbZ",
  "key32": "5oT3GGEscu1ADQgt7KAReGHnacUeSqY1BXgenrGqwXTkhLvpVQyri2fFykySSzBJ3P524ZDnZtwEwZfP2ovCNUwE",
  "key33": "2qYonjLDgA8dNdpkyQosh6vbJM4t4zwSPLH63ao651mFbJfsadEqk7ci2LbPv9ErPPQ4xX53RiApU5j9XWwTmpqz",
  "key34": "49dTu2G6sQfYJVhJxeTBesQqxvXurnZDA4hC8DmLCAejqGS1KRxexpACVKzxsvGV5b6fSCqtnCVTS7VDwq1Dw6TU",
  "key35": "4E5LzAduHZ4rJ37jGBSAhv3oYc65W5AdKYR58ebTiYUhE1sG11otM69PbwiNC7Jzvdv8VRjyBAnRktP4Xh3kfRWy",
  "key36": "51vt6j5TCKYtUAiSbvD3uAu7UnR1G2MTeoGZ2MuvqPM9eciR92kMXkmvrh1smt947NFHhqtAMqvc5XHLzBuATY5T",
  "key37": "34LWx3zd7uvr1xCXU3XP12ak7wQGA289fj6PWr4tGsRZkmQnPe3NeiWfUJF7eKWNWGq8kDaLsVXP8ncsZwnVpyvz",
  "key38": "3gs6AmVFfhy2VZeQKJ8EUw1wvwx5RGNVhY8JzYZBY9PWaNy9GhZ5Q4oD6n35H6LdrA7yWiNNdg1AT4RWdYJSEraw",
  "key39": "5x5GMernYrH8Y1fe9ySH3w68K2E8UYQUq46v9PCwLYSUoCHvmJYzYgXk3Ab5zyRGmPpePwCaSfBU9MHvUW9FX741",
  "key40": "2aLnR5VhnmhHupkX9v5LqKezfGQuVcu7qypDHBG9H2mubKEiHiN9siScaxYJ4xR5H4qTrmbNpTGJpxFkpSHZNti8",
  "key41": "2Njina4XDi9jS3Wv8xZ1Uw11qvmgv5UtEmhQnBeJsceCDCZYSrgpqtgwADyoYTrKHi1TE64YzXVVM8QMrkfeA1Ap",
  "key42": "KxSmZ6pYFkmRncyw4Pynfh6u4qn68Up6EYfU2kthnycs3QdLzh3qBmgCpcbgs9kqZ7617PikPp7HRKXn79nsQ5T",
  "key43": "3hTpFKBas96DZihyTLBm8cA3NU5E1VBvJeFJxVXH4LUsJgc8WVbaEy2acrnZQJZBSvrBEBr2NapEqjq7deikcKYZ",
  "key44": "4V29QEw1F9TgQTCDnE7RbjcZe3ee51zES4giQdzcTV1G7ueyjWcwyh33X4325vevKPm3JgNRxB6PyTAQdeUrGVUt",
  "key45": "5MSgvxtFwTSTYVodxsEG8U7Rx1kpc6bbU2571KSA3Lw4MTKH7UyyhEC49y3eqgUHDR2MM4inpDG72DBgXrYrvniX",
  "key46": "5eDy4D36pXAbiTEKZUCXqo9KCeSVbsRuM6ySnRjD8HE1QW5FruKp7PyHWXXpJt4Bzzi81JkWpeAQEEjcxFsQoaPM",
  "key47": "2wVS9aDj8m4qVNLBNiFeQHHEdFLF8dok5HGq3Gs1v6mMfHpPRTHa5MaMtk6C9kFek77f6tZ2qu94VH2V9dZn462j"
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
