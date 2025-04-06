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
    "3f8VEVMseuxxMm4Wm8WvusufxgTjngGGNiqf5XqxufqZxJSPmfzoGHyCHrcivACeJaUiwfuWpaJTHU3qN2nYw9ek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22bkepnA7UcS6AyoXJYUWa5nsJUp2EYy713Z2cWA9hDNRh1wDYJXX82Hvn2qSvz1cTijs7djKY3BFyTDVHaRjRhZ",
  "key1": "3aypaoC9mzEMGwTwzhZz71DTETbsWAyDaVtHBKANXwBrGAnAdmstEvrJJfKCNaPbvz1bfHeRHLLW1vtzmcQij7eL",
  "key2": "4pMNZh8aC83s3Zhs5QUPjsRVnEG4tRPHY6cHxQGH9cC1REB3CbiMfT2UPaDD5cGtnWoGap9jAa2dXrz1DNHL2tPv",
  "key3": "3m3RyN4gweqyQu2C3uye2r6VUK5TvunnPi7wsnfBffvM18PiWepp4otcBNZmj9mHimWqLdkV6UH5Szowj5mVLrVJ",
  "key4": "3fe4qsi1AcCfz9Bsh3Bivnco1FUkS9wKpubNHZyqb8hzDdoBiKsFn1YsEqJ7ZCY4K8EL6PbD4UQYwzGBEp7xRFNR",
  "key5": "tYugbwSxSLGYp9Y63cjUtQ7u4y4KfWMdSqX2Qic2bZgf18Wj4qR6hZFUzgPetv6fW4J2FzkTKga4519wkw3wUir",
  "key6": "4BKUebucUbev7pYNxyLUXQuMb4SQe1vM8H6tS8QG3oh47bgEbPxkJnqyovzRG94KG8LBive36HT3vHhHGkBudrZp",
  "key7": "2Vu2h9R86xs6iYvr1GGd5R6v1beuXZCLJo32vmPZjLf5EkECvmSfxPWZeSJpQPYB5BXUDj4kd1oXd8acBwLyoMNV",
  "key8": "2EPA7DNScnPaUnRdQ3bxXpZv2NnVYHLr3AWgRaJDQjUs61xadiKZKPaaKuCLhAi2GojQdgfBARCM2oDh6ydsmoHu",
  "key9": "FbX492WfbFTYgSHGN9Pe2V4qRjZMy4uR8BbEbGrsCzC5YynoYEUhi7gWZGQs3WAwjaJDQ5Lf87Af6qppTsTHjhS",
  "key10": "63GJwagSjWPiH8Kv4nRio3Xz29HevBHEHEXUKqtDyjDsokeN9i8XwmAx54oMFdec6xVhG7PgNSZKVo8Ec7vKUxSC",
  "key11": "37qDJF63CvyhMCDSnn2c7xMfiagZuecKb1h5rGYXBqazToQzjRJfuJf4AigPfoFKNnqxJRkteHTfo1ZT4SoKX8WW",
  "key12": "58xA4ecQxbuXYExApjByddCL2G5G6cd1XPnB3mb7Umz5CwpTSsVdKmT24KxXW5uw52dBXsjpKbwBSgXHvYVXk6Gu",
  "key13": "3MKAss65gaYoTtSeTnA98TPLf5jLHtgcMkvXfUcdSmDjwd1js7tZarst7rjwSH9uGJznWPdghPU7KHVdKUe1R28D",
  "key14": "37euaXFST16sh9gtzYVpaT6xcMb2FUg3ddxxxi5w8PkJj7dS9ThT2drCW5U65FsEHYDFGN5dBXwT8nQPkm1KZxXX",
  "key15": "5kSpT4E4xPc2adPSFbtf3Pt3Jh9aYfsg3iDeU8SJXR4qNBAoAtKjGrZshUjwssYMvgL1382N7uscPfkt9N4JQUrn",
  "key16": "2ipbQr5EKTqNhw6gGhoyLmf6fQNTEdrghRHtQboH1zdQ5GjnuYKnub3upTb8aAT1xmDkCd8r668JUPquhddGgK8Q",
  "key17": "5NJ52KjwkZFnGpAZGodHzXzi4fTvNwCNzD6rHRpQMNyowahuUnbk5yd87L2TiJwGu9VgD5ZrpuUfKEvZ7HfDwyin",
  "key18": "5DUgaWSWajMGWfaDa6vNz3mHVbnxg9y72s6efgELQK2WVxCumgqkEhFD93MtPkK3CVADYsmrPPeCx9wDV83YXcCo",
  "key19": "4Ykm5XYUxsG7QWzoMz6cHH3eqcEWw5zEXbW4ZnQhg5maZyYxQrkLePSd6E1x5kM6DTMdtCWWgAFyUgfGo1LtxhQY",
  "key20": "5fPCqZJopeYs2u3FFcvFywpU8gxhCzvsthzSXAZf97F7hNaN34TT1zxTmWQCwaJRh6ZFGNWNasCcKjVFnQJY2CAY",
  "key21": "3z5KqoXx6zizoi5xriLg8x77ehtry7K8megECArrXEiPpkbNbis6gtDp2zHAsgJ2pgjC9tba8J18rCjGYPbt983B",
  "key22": "3czwAEUozJzbtEb7VkE72pSYbL3Rbb68EsVzn6TcxbiKBYygsBSzf3LoqBDKBLQdGrofwvaxjfDYMX9m4FoENHdH",
  "key23": "3f8TvvtJWLG5e3ydMHLTPvU1p4qmvRSkDf8brvQMQ8Ks6AuVpPR8QqrnGgYbgprPRygDHeucRkz92zmxXmiLsGrw",
  "key24": "51QLfLtYsHLJiWpqBXpcnYZxv38zyGx5xEoGtWpDShKHCCutG4DUVf2FWmBU4fNmUjsVwE8sFqiZrX3DvDMifJDw",
  "key25": "8oTnbroQoqTfFyPb74FmANc7SpeQchzRtfvGwF9THbWSmMqE3s5H6Zu4MtpS8KWcxFpCQqQtRLxhhpjPZMkfTcH",
  "key26": "2b4bvxwzQPQrRjS9JPrwwcZytMXE1Qs3dRvJYrLB3wNg2QVM55H3RFBxmJUbmBnAZhJmJ3FXtRSMR5fVTYTNLu1D",
  "key27": "4GBZgm7RAurzW6WtkLUvfAWPf1KgHPxzkbAEFydbbcoqV2PwAPXs9Cd1PTZ5NvCFtpHWSPqxBgjUtbPiYA36h1Sd",
  "key28": "56FsU4WgnwEVvqMwkPHj3poJLUzaP5wT2ufuPkMkm21boEpAU9rnuPucxCb9FLixGjkr2UXAEbcBE2A7wjFLjzHG",
  "key29": "5BVydFLxsGTUKpzFC3TMYL6Ju4iMshafNTiga5uVMAhfqx99yXu9n1ftfgmxmjih9bHgqWw3aVpUbKGy2SvDTP2c",
  "key30": "3cdtwMqpbrYQxAQ3xJXieTHSmq7kfvL2FpXxgBeWd5bLRGoBF1MkBKrPXiV4hGc7viNy6iudK8CRs2gJfyCYGs44",
  "key31": "7UriAE6ksodB2b9Cc9ux2LNGYrDgqQKjyxJHf61ETov3dQzUNWRQvhzb5uvsk2ZAU6B94VRwX9gdgVu2s9iQd8s",
  "key32": "27MaTb2byWhoCDaR7EjJHZUrhyQPmXtfZSHEERddYArtzHn5h9BxDnsGtQVaAgDFMozp1JRLY5u6tv6w6cNWpNfy",
  "key33": "HzH8WBmtSf7LWzEGkeMpFqUZhy6cPst3cNmEbA8hFqZEHC8tLVDsww7v2c84WFHYCzbBgEdSXCyjMpD19p7ABz8",
  "key34": "5FKE6uPrisXc1zV1d9rJuboefDnKGQpNKt5Px9K1SWrcfqaJZJt6Y3XTopEy8rNpVEmzXc2KNx5NDkH43kUTKzoR",
  "key35": "cY1BnZ6cDALnmjdVoifJXEr4ibxbgxV37qtsG7QYn3TEPxewxV8oStVs6UFcXqzb5iEPprmArsgnxBFEC8mcnjR",
  "key36": "5Cq4kKrz78UGGnLzryg6HzZ2WZavCrVYZHUnywvtFUy4ZdUACy1v6VvNPbYFHM3qXfyxk3TD4mbJXNJCfEgs16dc",
  "key37": "5tUvYrAFMAFpaChJrN8posMofFKTfi6zw4pDT3189uswZiyrjwTSzDADJKwcdtwqahqKor9AgwmYb4V5H3aGhdjo",
  "key38": "35KbrugSCfzHou29pzLNfJxS9EyL2RvxxNotijj1m4jtHFkuovdjjzcFQ7jdh5nZCreQpR1KhQTDAWNuzSz3zfH3",
  "key39": "47heiregh4QHcRBxds7iU4CdcK3aqRJezRPA7RkSmfYh1yvff9w7YWfB2Us1uDehPdMGFZyJnFSYdDZzxU9PYeZw",
  "key40": "5Hz1s1DGfyF2YkMMJG9N5GZhpFdwS4JFc3Dacwm3YgeXUAdHMp6L2jZMf4rZLL2CP6c27YNMLaUqonMQdeTJSx6U",
  "key41": "4UWpBSuobXGwNy6hRod9gRDsk6zKh3nTUXdo1uFV4P5JKVGdwJ4paRViPvN56dDZ9WNrTVRemPJPgvaRpyjEsLkW",
  "key42": "2fr8Vb4yc8sCsMbo3siunGSBKUkYc4GqMhzLxqxkBX4o9RvvimLyk1dbDk1QohadzoV8xQ5FfJs2wuMokyGWM77M",
  "key43": "4btQfua455MSMaK9XpqubJy6q38Jgij52zB1pjGBSARYRBz65M2mQpUrFC7xdAe5PAZmwoSmJiaZ9ejRi4tK5EfP",
  "key44": "dAkEvq77w28Dz2bqfKuNNJEed6Rf4cBaajKPf7KNSoGQ7yhqW1DJW67X3LDUDfaeXu3i5zDANAyuwrPZ5vYK8fQ",
  "key45": "iBd4TwE7xeRFM57cskjBwe46a6Y6x2sGsQkeHkjyadc4w3tfBoQsJYeGaB6CftNT6EvQpeLvNgyGtMRCWhg1KZe"
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
