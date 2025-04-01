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
    "ujx44YCgdkhQwHTCcrPwm9suT1Sy56FynvfiNRJuo8w15q72VLwZJiVfCssDVQRpwrvtBNgZ7XazZs1Vi8A5cVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mmwVJ853oFyQEWtmjpkJ94ZgycS643CryHtyi4yJB6dXtRLH6wTdqrh2s6r7azrACXJ2ttmTGHF7nMbuSEt4PvT",
  "key1": "3vt6qcWT4C1EPkSLfd2upLdCwoRRLwVaq7CcNcss23MXYfvxdbQzBjWx9ARg43nQDgPfdHefxeebCaRyMz1VYpMz",
  "key2": "67jQAyEQfDshdH3PNhb16rfjCddFkRkAcC8vnda7AYf1RCQn2Kn8kd4H1cXDLTb1kG3TTUHLdPsTG2nWLD2gEv5m",
  "key3": "5k7e1UZauVwiJNEPeQ3S98L9CUXxoquE9djc7vsZdMjYFpDjP4JLtSuSn9A5TrZW5Hy5Y1pRYcXQnAbyeJeX4f58",
  "key4": "5JjqUnacJ2Sci1t4egt54uVMLZiYgf9Hd3UumoCaJorS2LJtnvoFYX3hALAVGnnxFSZksQW42KKbWteA97QBFEUx",
  "key5": "63EpTupaVYM6smaPRojrSwHaBAm8MWdgFHzbz1BQt21fSudtkwsGJMV1cHj5RYCmGF7CeSWSDtHw5X7LmYKsWZwM",
  "key6": "ckpUFAhSoGjEwkGwYNbozeiNG8G73KoXvsJFSWAnh8SPYBygu8pjHVreC72ZjXKwwb6vt7Zf13A8YoQDSPzT9fB",
  "key7": "W9AKh4bMeMuSAD37NeUM2fg7k7KP34QM4YbQqsDXCMaHuKFuCUGsdcCxcPzTSPsigzurokHsPwSDYgz5MM9mmpe",
  "key8": "4p58Nj1vCpxQuKHrSW3tficUxVT14dL3QBLypJS2NfqNzoqE7UNqCDr77x4vFFFFu67DFME27nQpNbp72H4nVe5M",
  "key9": "4x3sVj9LDfqYJoQgqSgvJJAkdxDAmyYniuNM9ArkUD1ZjLou8xo7uAiefVQa6bvo6cXWwcAT2Z89JKfUXiCV5VJm",
  "key10": "3c8afq99mhyaY8JNeEQjNWK6KTecMa39ioHaXzEtW6fQRv7H5UwduzndQ87tuFyaEjHGkmKZogLjdUxhbmN7uGcX",
  "key11": "3HCGxLH8RXg7sJ9CpwyRi9CdcDSe1g7XLYTLdCw3CU8eSGqE3Mt2tP6SfFFF9PEVrYp2GKkZyPgzGPLkQa6AmCcP",
  "key12": "45CdedS3T6c5H1DG2gsW3gruME579qyNPdqQoiXdm3X7h1LsXUStaSeQiFwnPrXdyDVHNjipeR76y7RJLy9A51vz",
  "key13": "4Ur8ETF9zuxMRgvMFtx1bzH8Xrq3XsFQUB2JyjDYnWKYWHiqLaAk6Dks3215CsuknjsLgMjdQzvRMGDvsHacmw4S",
  "key14": "3qTWmMbESNzCHfjRM8ztTjqTGMH178WM6XbpDaeJs5rBxJeoGt6KEQBr6rkxNAD3RphuWUqPmjGSapRCnvR6u3Dr",
  "key15": "46jspn5emw6SrUGNk2GC4bEPfzuXKg4eHAwVpzBFiNCrm41NrwaK7mU4bAt7jHptxTsPQ4yybTkCqrsSe19Ehpu3",
  "key16": "gGng3dM48SXUMC411QkdVLhFL3ik9cauw7qm1FQ8JoqQFnBbBkjjUuUSwg5V7DFgDAg9ScczHvCy4m6j2gZDNzZ",
  "key17": "2ssPUrFo9dU5tgashu3HBfUBytzUkeYCSkGoaAcnCZYRMyT2HRMeq9dkThxauCKh4GR6sFJdgKs1U7SxnP3WLzRx",
  "key18": "2pqCdXQDz6HajL3PrQohU6f7nTqJBiot8TKpvVaqxsRBKH8PVYxsi9ZBqHAngVBV7akbtquKvnWp8H2tvAzdnBPK",
  "key19": "3JrtcbWhUHtgcyBoGLFd56VMju1onWMGdS2LLTvz6m2BwnuD3G1tv5YP1MPwHzpRjUXcDyNRYhgj6F8hPD7Wk5PV",
  "key20": "3fi7TiPHHkaQGiivyVHz5WtggUSCiEYJbc9TsZj4Uv9krZMt4nG9uB7YBw8pqFmNCWy5pfyyqjFL1yXgxLUoiEET",
  "key21": "3azDvjj8iTrpN4mziiHwPYDRS86ZHoWScxikz4jfBotJrBd4T3KgX3zQsVCtniqvg7NSXEwJ5PmzwCtdutDKc323",
  "key22": "5LB4Da9ecLFKRFwFfJ4ZyMU5JgErM4U5WweswTjVWmW29Gp3kvZLBxf9tscK7zmpUbGyprr9ABJ1mT8VM5E5EQrn",
  "key23": "5vqst5iawRYHUPjU3LHJyTs6nzzN5Y8G9mHhG7fixFYkcuMZxGEYkRfsvbdtiSXMpg4XWTir1QrV4ea5qQsbMgVY",
  "key24": "2d9pMrVuSDwxFoVs3Ea3CMu1sTSB29iZV5X96G9RFo7rAmJ4GfG7zWhJ2RDmA3pWK591FvM7owcK5A6Y5NkLbYd4",
  "key25": "PmBvb1ueZi4QXdw5TE8Y5HWsW9vxZbpZZHSxbE2EuWsvtLeU78wwcLZvR3w6qbytdR8rsEiQobZ4L2TRZKmJAbf",
  "key26": "55SU7CRkwkUVcAAB4em41UVeofyUFW2ryeUbqJXUgi7griexXxnT7TMW9vgQFRNNAq5qG1a4D8M1jm5AUEFMvM2N",
  "key27": "iLvtKQ9duM159gZgo9VMmitrqLStJY8KUhWWtnTXxy8FMaYzKegqMebkmFvNSMjVUMMk3m5wWpXEcYc8efQ6hNp",
  "key28": "5VEo4RvzbLyWC2BRVjBTHQKPv62ApM1GmNeqzxDjeYYXqJ5ErzhQXeFW2zVjU5csarSC4ApZAE4tTzPTZsuBF5iR",
  "key29": "45akqDgEg9NuhDM2XovPYqY3cw6M8QoJTyn7VoTLnL6YYjEXgtZmjtzWy21kTy8eCBrDTHtR3SfdXD4dqjxYKfNk",
  "key30": "3LmsPL2GwPLcgSfGsUqXwNE9EHWeKiktzJf7LUPWqei8fVDsUspmf6LB6ZcJR1bEPEsYy9x5jCKBYqXwc34VQ1rM",
  "key31": "eFc6LcxAm2yXoe8iMujUWRt6ZVum33arXttaGVt8LgESWX1wrh1Zqz6Bn27dB9GAW5WBrBnpt46Fx7bAv5phLps",
  "key32": "2ZAfBxV1RUGzL1XPR6TDrfLfdxJk9MGfYHnwf9Lj1C7HrUsefJ1jueKq3U2RaNYu3dh3s6iziK3MqmXE3mdcqUYE",
  "key33": "3sTTFaUj1dYaux2xYQ8GqGhDj67mw6Vynmak9Ag2ChPEJPHkGGyU46gwvdDzfx5G9pmEx8JYYu3FyWyT8HkHu13b",
  "key34": "98RhjiTbJTaTbiLec2KCmRkTVwqcn6CemcsS981N49TPucRRxZZFwyhv6YbviPLmMWWfzSbWGmkSgWXLgHxPYXK",
  "key35": "3hbs1d2p2Mw6ygVC4Rr9kZ6kBsmFtigAbjMBvqEE6TPCGvihjPEhZmhCgHjUtKSPspAd9aBwgomH4kjkYg6enQeB",
  "key36": "g1f7LsE9kRNgVVXuBio2cF2cvMxqViwdmHbWETNmGxEsktGuNAVNudYLZNeJnnfEJmsPHBcnRLW48P59YjiUXCv",
  "key37": "5huq7bdiQ5qqTFZRcsMv46fUfG4htZVwFVUMKKVVTJ15TtpwWMiskQtgjWfys1NqdPQBQgVSxQDf4vwq1gSh6osZ",
  "key38": "GTWDnmE1LqAsYqFL56ZhvSwdN4euDdhPjmS1G45EVEiqyfaweyeLKBi4jM9hn3eCtaTTmYFGMhA3J6dZj6uEgBP",
  "key39": "3NarVeRGE7gtwd15UpmrWvkQFJRdAwfX3U27JAjwftEjep5PuEPLdAyWUsBvB1GJN7sVkpa3PcjU2Jo9dxs7uq8V",
  "key40": "5LJmwJzJjYe7WFiHoHL71XFqpioFDrkhWeGZ9ZieaCQw8dcy18yzaYWbFoiahCr1fwHkaS2rUwaRfCGpapAzqK85",
  "key41": "uBpDeppi6yTZdAibP13kMCcqG6i5CBM1kto5CYGKZV8vvLs5RStdJW5ae3xDgyngH4tvmuvrgdKwvqdQZaXHzg7",
  "key42": "gavAEt5hLAEZk9ubjezeHxEub21E9LpVdtha3e9uM6AjLdCNeRjBVKxecDuhDwttah6qnWEe5koE9MCopVdQ3Af",
  "key43": "4raRsHP75duE8jG3XchQzzxJbYKbv1N3qkTGQdwx57FQN2VKxWTVg1JqSeLr9txCg2A4PjDiqm8o8sQRx2FmZm8a",
  "key44": "43zccswwz37puvXYyiXkkd1kBJ2T66dmqTxFA1e1cgFQSnsQL7Vb1k7wDNcgBefVbRk4Gh2o8ebZvzU8y2o4zteJ",
  "key45": "5Gd8XBTjxH3uw5ke6qTxzffBbJ5tXk6mQg4dFRGYi6udCEni9BQj5ttmMJfAgUfWRaUjj9PBPQdGdp4MpXz5NZYM",
  "key46": "2S4Wu4u2pgX4dgY7YwocvccKtV3w9HAeXsPtDjAeHzY7oM37YEjNTasXY4t2ujvaLZJQS6BDp8hYmAJNMd9gC6hZ"
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
