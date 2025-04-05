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
    "27JbYGWiAxNBDgiGspztwbMgRusJ6jGgNii6Lw2pefZQwvWyHiubmde1c21VpG11T25HnNNRUtREQa5C4hvsz2Ce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vLqCtg2JieJeoStFTf3cGZY7XidPhsyqLeSpanC5Y9LUcLwy2FcxpZEFpkWR7PmW5Yc7cddjwX7UCUu4tyipwVV",
  "key1": "2BCovs7D9KM1pHUeTPS2ayWHAtmZ79EixPDPtSJ5A2AitFx51TjMapt2mktCMX58UdkD9CqeXSkWhzCvQuhvsSrr",
  "key2": "45nNrogDouH6jfF9gtvuEJ7bhUuRteEtqMStfC1ygGqMZDKF8BTXd2yZNw3R5qGPvZLjy8Dfku2V8G1PQ81i6wj9",
  "key3": "3uaueEiYzvHCi2nAFRaAzrgBK5Jg4uMNW6kKiiW9KHcpBPLxEA43YJtetkQVb3AoQ5R1maYBhrgS7kzXbz7DHxwW",
  "key4": "3v1aahnfWCXxH5sXcUfKuWPUdcC9eZufEkzX6mMJbHAZ1HVHqqjJDkjnLad1ftxEz2iLBPPh9Qp25Niya7orKf9y",
  "key5": "2jJbcvhTCJLMtZDviaWmjRs85LTvN5bT4yvPXGSSMScQjUr5b8SF1ogoJcCDi8DokLjFYJieaQrdEtDH4CEoocPS",
  "key6": "3HT1bqhvvTgsksZEQhq6rCa7PQADYiqvmJbVFygZWYRJoitGj3TwYJSnhJZTtksTjbQw5B54mCR7tEuZo8YZCjU9",
  "key7": "eWZUdM5mAd9jFAV3a31Ld4uZ8YR2NxfvyMX66ZVoB6YEvfEqRrcqGiZLyUfwjPfd3vEMF8MPB9o3piswNBzvXfL",
  "key8": "5MmM253MoiiCe3MVa5Xr9aGPVg5ARb1dmNHWREAnmZpiKUbzbinsHBpg5bm4BdiTZgMxJh6FLqmURALiQXs93nkb",
  "key9": "3fEDqevemwPXqq11zQRTBRLxzgyw2FVSfWKsuXBwGaSxbLnUe4h2bbyRSMfbYwnBXw3jNPvHyAJR3Cd5LuvmE7eo",
  "key10": "4SXY3Y5vpgaaP6kwbZczqgB9PzrZVe37sKQ9FUnma9WwWeEKZpb3rUHn5poXrqyhUvrnje3KNmgUzuN6HBCcWbUR",
  "key11": "3d8iWzHt7grDGdPsswyeF2SsqNuUy8gjAZrGVJakBTgSA6nzk1BHKDh83Vw3fmL8g8NRDQawMf9EqvzrhRmcFqdn",
  "key12": "uahw4RfRS8TAi9pyLxDPqg3ixAfXTAP3KuySLYdiwUH9ZTEqLRLU97rCZax56rd68FnMPAq7HawqC9g6EpkH8zq",
  "key13": "36ZdMerXZ4Ljw89Ldt21auTk9XL9qVDcKmVVjfHAymMB942Sm4sVLUWGn8KoLJ3mshdnf7dwZpyCWoiwy7FRY4Qc",
  "key14": "5MgWCkRR8F76S6gPYF2bHbo9T7BeTH7YXATsqfnDQaCerDDcwQAVX3smtRWDctAgSRZi78gSJ8YVt7cpFgbCkciM",
  "key15": "3UeRmFbzRvGNcoejpgvmgUjK2zXKrdVVL4944ymBQzwzY9YqYwHXRGz3rqLiBeWHyGeuGmSHtL7zKqiYpzc84kpU",
  "key16": "24B4ifcm1RQNTAf8cHu1H6TtkRjJA6jghzvdNVaLQmik2Az9NGUtwxL8E6yDLyGR2JZynKvYEnJkoeXo6aTTZE1k",
  "key17": "WYyYXsnZc6Zv8CcQJxV2gi1KQvURpUa5RbaQdSSrWpGdF1QvjRLUvkg4AnmSybnftaCt45SFAzGWxhyZ69om17N",
  "key18": "5RV1GYWs9BxcoykdSEGFz5tvmTYxwn7tkHaPM9UL83wzSQNyxH5BnjNsaLEcj3JGMdAd26onMQ5uPpLtiw7eqPH4",
  "key19": "5rUh46zZAB3JXWSKxojVjYRbZysS5Pbq7ox2DFBb5t2DxFgHXCUeQ3ZX5p1Ap5bVGjPSwja1dDKbpFpmFi1aWJwm",
  "key20": "f7wqF6N1mhayhBGpAmZKT2TzZAmBC5DdDg8a94hZcv41ueTb4faAz97xhamNsMiSfrkp8LxvQkFqSumaA6YQR7v",
  "key21": "5K1FstTGbi3gKffa63K31yhTUkinpQKUCtY2WbMRNKcMSCE2V2smmbU7L2TvFhRUckbGT4giVrAYfKYzSFXPGomQ",
  "key22": "4uLuTXfNHMeimvfQnn2wGKTLvv9QE3okB3PAaZfiChvVHsZaoZHZScG9Y2e5uGB4sGtpJa6n1oomXmqzAoqXNrtG",
  "key23": "3sHmmZ2WiHdLLUsAcugJUr2wEEi2egwiobhZjftDZxHs3wwZcNbaVS5NRGj3o7UH1Xq7V24qCTLFCWYVhNrWCHKp",
  "key24": "51vFiyKnp2fodYDZr4zJtrE3KaEWgF8dvc7CJNRtBDjc6T23XRcNeTfeoN3kuu3xvtWhPAMHBNgdbU5jebwxCqjA",
  "key25": "AVtBCG6S7j7K2TMWgk7PKMbXuZMR3a4b3K4Lz9uBtcrMu8pWucsmQNCdSyQXM3zheTxfRDqWGq4oB1wrfgK1kfX",
  "key26": "2xRtgK9myAD9VdEMrbnToh1BaESazmQCFgpKDuD7zPKNZtNDko6ETt9F2u2EK3mKBocC7x6WYVFBbgN6xxnp7u8v",
  "key27": "4dZpQDXehXFXKAvaeLDKNBGMzg5PwKj7wAtfcD5qGeEDXa6ueUqQSRuywaqK3uBVyGrG813sDXiAvzduVNNuMqaf",
  "key28": "Tz6MM66Swm8z8M9LrddsWA8coXV3Rg6N1wW8WuDAfpqdDigqZ2R1AU7PqJnmsExpNeSk7XeF5Px9vFzmZmgvioW",
  "key29": "4Pc3Fins8Yk33LCJFcFc6bk58HzUoRHcAEnquYfKzNRCg9DWzPf5oRpaJ5nVAXAM6p4gnKadVJ6UFU11btc8J2K8",
  "key30": "5fGJMSXmNx68DA4Dmff56Bg9kbUNhM8z8YPSQnMiJA1SGSHNUNQLRPwnWG978r4BW2WTfGzesVwkFi7kk7TdZ7de",
  "key31": "4UJM4yZ5Lb3JCKiqVTeYJGfWZL2GoYU6pxuuQKnsgPjo5C8NYf1tfAAARu8HCcqMwN1kp7txoVcpZUx1G741UmuH",
  "key32": "3QahcTbahejpxU2C9wrXjTrbwNEg3T6ninDquUK2utAi3UGpXAgmwbLVQCxw9T5Az5H8R6CZngQz8meDkjeFG4h2",
  "key33": "Ccd96Xo8WCAKodUwjjZD62K1YB2QothYrtfhnybLi5yZRMEo3Ga5Efpd4XNeazuPfKKeZHRumRoVZEXhqBk3N6g",
  "key34": "5RqGw8seuA9E64D8xe41A2QdhcxjuWHbdG3gAQKBXC4XoC9cQfq4B18YJWSqPU7PD2yx9q4HjHv7UmgdNKeboFGs",
  "key35": "2b6jJPJSJVY78ynFetCEy2rbx7r5RGUmQReaNwV8ZeELrgXLmXTSSeoJ6WWbs7kNJTyM6BYts5j64BAiMA8XZHYq",
  "key36": "5u6EYp1pT6q8ZkF7EKH4uPSuRp9r6FaETr7Xs89gupt8yRKzHd5Z2uiBGsQb5SaKBfi6QQbu5PnFDEnRXGaSZsR6"
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
