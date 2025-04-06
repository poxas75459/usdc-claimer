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
    "5PFNpEhXeSRkyhU1P9RaTgns1TSs7g4JUmA6fGfN8cHEW3wViReqoSvx7rvEMwCxtmcihtjbSk8xKHzbPyxi2sYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i4PLzbcjA4fn6nVLYxcjphJbPJF5NmgKBxmRpkPBR32mNoqmjBMgg5Fxifgaqjywjozx6LzBpLZrcZazo5B7P8K",
  "key1": "P7Q9mPFa78kjUixtMNioS7qWpsdQyNy7SJ4Rv2xSZh8grLdD4csonazRQ9h55jv1aM7KuYQq13XNmKLgAXwL4D1",
  "key2": "43H9uiP7riaxaek47zmqgXundm67dfz6PZoW2uZ5SV5NzZfdMeXB72pTFp8kupgckc2JEASiaPdLFq7MQDG2TDqA",
  "key3": "55zYyqBHLaQcXjnEvRBakwCYTq2wXwTviS4XnAncUNVY2jJBW1Vcm5AwcNNcP9x6AxYwS2WFsVv66r3Qb7wXGeRd",
  "key4": "5cedV7AFU4sfjF8ynixNWDiUY4L4dXLNDqYV32gLJB98dt8GkZ5iSWaMUKSRKV2YPVbmteVin5vQ9exCdjCKjzxc",
  "key5": "4hwuj6W4Vn2EN1EaZzaE1FCwqStXx1zscAq7vYncLbauzJz3YVeGBjf8mPhZdWn8naqdgJBUEW9v5deK9h9yfzue",
  "key6": "4deUUQeBRTRb7KPqwX5vMAzm8j4KSEeWYjDZKadeF4iZzRkAqzRYZG5ZLDgbuPNoUntSPxAki5y1fSWPNxmYrvGW",
  "key7": "5KojHTaRg3rBhNze1uXAXSsEjbwh7kZc6mjmrw4thHP9UiaruUe6Ea7uYy3qVB1YKQMCEDnvg7ZHqgWh3s9yMMF4",
  "key8": "2zEtjAy47QsmrGpaNVj7X7vZoPwmUPVrnHZHrzgVUGMfBkwjTPPvxd11MFkVxcyrK5eY1bgaAi7XsDV7b4WDYxbp",
  "key9": "2idortAhTt8dA2KbBADvbc5wSCSsbnG6pFyshhTxWsXLj4xEFxWCEHaH8HfPb1z7XRRKsMitW1qBy9VSuZLzMUyH",
  "key10": "41JhLDoCv5cGJGKqCia7k9dK8ktn8TfvARNj7574FrpPNgj1y45HRo2u5pKnkkNetGVC6uFKxEPd5qDLjUHeHSbG",
  "key11": "5PMPwbQE34MNZhEcqBgcUuqrSh7ZJxP5VarHC4WMo4XxVANnJ3x5qscnQSTLsD4MKtAbT4h4HQE3icccfvc3RwL8",
  "key12": "63MK6DqCsk3L1iPrtr4WWzgjPw9ZdnbR5VA4mTnAXBDAu1cVjZYnmarajDEDbuJvhmgVSgwrD2JKtVgCLQpnHZ4N",
  "key13": "2G9beUf1MtZcTmTJW9M5RgKd2aNAznARGaJui8SqAVwgfUGZEvDiCZCdLj1tiNLke2gSLN4t7JAVM1pcSb5ss2kk",
  "key14": "4v1wRGPGfsB8RxfruaLxsoN7Z8UvayYTW5xssho152TCCipukVTt6MGyAeeSnerCN3htdL896a93vaT8QhLx9zkP",
  "key15": "4MX4C7F1inB9XKcvm7FfaTTVVdEPQHutDfaZGJ1yRkCtJXfk2s729srhoGPkSzXMg2f9xSgTUJ1smpQU5sfFtToK",
  "key16": "3kM79cAq76H9677yC3i2J6kdRaiK2YGdbC3P4PMctLvgkR4iJR6WG3KqZ5sSQfSF1mvvCeG7oqMxwvSyzTbDiyhu",
  "key17": "4F2ytsZVVNLdFQvCkuiNgq97GMkQwTC2scXsyWKiYr5TNZaNTN8xLWkwz5xYtKkpPCMtiSnF5QHBnXKsDqHBkr61",
  "key18": "4WQa2wQo69RtbHiRnJaqaGkhRBsHrzw4LL2Bi52t9MBY2bNRDrNz1crCjbecq7cqDLfjzf1kBbXKwyh8z6bhwgYD",
  "key19": "223ppNcJFKovRuL2W2AHhtK9p3W5tyQ51s8ctJ2yCo23rTJKfZko1x65N8YAK2yfCoXrn6cUb7t4TkS4HbHG5WDB",
  "key20": "3Ez5uKk4WJZUr9ZdEczBMroQzbViqubbN4mbGHK9EYuZmfkSdUupndxg7MM8FH66MQ4sGsZmuYDvE38sk8bZS4jK",
  "key21": "3bF966Gudxs6pK4tKemfhigt7Df1n8AcZoiY2hYUF3yqbMh89LVV43eGufAzec8gq2NGwfoSWY6ZbTqNuLHwH7TL",
  "key22": "4cvnDRgxTuWotSHpViz6nuf5nGQCdTLyZNXqVjxmTZS4CG7LyDiuwASujLRPPcKEpEhNXJ7xA6guvpeFaxQ8h6CS",
  "key23": "5RGCgqz8bCosCMLy1fqVqMTYcLQ5qTdu6Nij8tBqCR9fnTkCBDnXMRMEVLbMx31yXDPu5nqn9vFUPtz3SkppZ3rw",
  "key24": "5KX66ki1pjzyEkv4EUvswgy15sWoc5Wxg8TPwbGHy3LkddFjkvdu7mcaAbuh3FbhkRvsa5qm8LNC8ytHQQ3fMavn",
  "key25": "46pri7nQAg8bUxVPkQFtXxb26dasp4KMvTeGYzuotBmfqBWDoHm7p1K7PSRRKfbMGyC6gM8vz5eLk8iEYFMu2iDZ",
  "key26": "5wxBzXe3mXV7CW74vPLLNTkVpWWmH5MxShf5M1B9EMPKPyXem9cujj166zbd4G3KtYfwNVKZiRJpsPCrSxVsTzcq",
  "key27": "4q25eXdB3kNogWMCJPsmyfpZd5bqgA2ZFcWhZ5bNSYaMR24FhZXCYUvLri7sjLuVakjR94DTtW6T6KFvNuQ5yv3D",
  "key28": "4as55KNjidzgtSaix7mAMUiXzZpBVd3thzJw4ToCFXGmQVUMuZENnNabiRRWJebD7FfLsHFiSXRoGcJ8Zw7vJZKi",
  "key29": "BcDWu4KRcYfTrWnKxfYaiQPtvKZH9ENCWXPu6QT5KSV73Y4iytC5QaU57fwTgreL8qvL8EwMqpjjfvAUu2sTtN5",
  "key30": "42khDMcM83Gy4xTvgzRPnn5MFQX5xpBPM3k9ysv4LX3trhcUBRdzjQAinxqo8oGDPqJ1pAky8eUj5WFzt38Yydiy",
  "key31": "5r6U8WKXjPzmBuWP3afEW9YT3tT518iWXVw7ZGLspyhsK68rGupGmaoA3p4FymQkn2Qi9EeP9GoN8RcMDQBsdgvb",
  "key32": "26q7tWyacobjYrMDiczRQZFB2PCeSVs1dWXTtrKukM9PK5RtmzPrT4FjyeyJ4s7NQWbR6JmrrBgK3a8gDMe8PYDe",
  "key33": "4f6WKM3m4aTw1wagS9QTHonwJErQuzPmm6NXHoopRTKygSVioHb8nJbJECzPDCFLVK1wtsaN4yyUDu3PWMvVs7FP",
  "key34": "5p4pqYgAH5ZZt4YbjXHjD8FE6kEGc5uhCt8advENfwUihFV2wfyaoXwDsq15BtMZnCwCucTwHKSzSkSaZCh9wFzw",
  "key35": "5tbqrGEUproMTE3bJit8dYo86KNytyqxLeiv2x2T9qVvkLxwxwBJScv9j5RV4iXuN4YaoGCBUtHK9iXbUSc99BVy",
  "key36": "5rp4gRja5GSewQ6LznysRivD3zhbEDoXXb4E5gVQzCyQQKa9bBdUUn6wqqw3DqPK3YBsQXycpxPfFhQnDePZdieZ",
  "key37": "3qVw1tnn83YsX9yxnqxVASagRdriQugHBFp7AQsQKjktL9sRp9vQ7Bi4t46gxezvDknaf3swdCVjt1tZRPiT7rLj",
  "key38": "5Em4cKNYtAoaonvMARXzF6WKa1U44Jczv3EAHnYJDs8LuGkwtbpr2tssGh4RiC3zHAKuM4ZJXm3W14ENo1KRfYwT"
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
