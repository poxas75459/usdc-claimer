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
    "5QdRcmSN2u6kXLYuqbV79e4y3BgZgy1MWhTRsvEANSnPNiQ8CZpa14NiUCr8CaH1EBRc53rc7Y34GFhEXVFtF3uw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "347JWHQKH97NvrVGE29x1Voq6EFi3tuaNsXdodwLexEhhCzUphzcWtbyXr99cfviAuoQLuRmZ8WZEtWYXXBk1byi",
  "key1": "zNHoYeGNoGr4k2njz7E8tN7rmuwnaUMZrH8TwFTmFbVzeW1pWfXBw8u9TirAsFS89YUmtfzdQ5QondRYNBqzeXF",
  "key2": "4yvgkma3F8tzHdAUxB7HATJCuw71bPp3mAZQFcu94EDGH1huSHvR1tkVs5VBnQSgX5pFnQb1s9xz1MRZqMKBvyhD",
  "key3": "2jYiPvhszDUXvbPsfsMzkLoM9KmhwBUX7sQkY6Cds9EJVoLV94wJB7rgoverX3YDJfKSw23YYiyJuf2vKiaGLhMW",
  "key4": "2uVdsxGSAZczujXGAxpxvkNMgyEJxJ57BtuVri5udXocSb7DrrQgYNCZd1X6A1a67VrvsXYPe1t8o26YRqq1yz2t",
  "key5": "2pMbhRuyDv8ounPXJtoFrCa2to5gs6wUJd5ijeL7T3Bwr5iJkzcwZBXaHZ7imu3d5Gmx1GEN2ykE69urRa653JwH",
  "key6": "372Yj3krUQ16iVkGCDhiwf72oPC8CYewNd7YnJjTBHcrEUJCMAAnzCVrsefSGFfUpD6YzeiJEq4qDaJDvX4RfAFy",
  "key7": "4LY9o8NzdBK8SVE2TqP1R8rw8MwqYfF4YPxECR3XsNWwKYLPuimSgvTGb3keL1d5RBvX6No6BGtU6bxRr2spimT6",
  "key8": "4EvqX254VcV5UXTjrFVJcEFSBPLAA7fCN8zF8MGzxQQpppKXyvNLEB3P411EqoP74y2YN4tgxB3aubFZynD7Damo",
  "key9": "RyvzDPKsmvd5gXRvgysHPAb3tWGe2CPcWovGsQ4jXdQtQSKKQUzM2B9BKQtReN54FpRQbrrwCafZpWkr6gDQMWK",
  "key10": "3g4cPkKj4TKMPhNVW3ihebR3MvX7DywKiff6GtJHaPuH38C9LDFr16bBnB1qz9HhjXTXLWjGp2TVuGchEWVdE2ZS",
  "key11": "23g57boTsTyy9p3hgtDqqfXijuJL74AmNM1UVL58G1wAnXTqhLQJBuKvEMs3etMTEcx4RcUjF8egLHBwHcAo5fe6",
  "key12": "3YyAaHeCvUEDXBezZfP6Qf1H9rb9rmC4fZH9mYuVTiL4EPx6FCXTEK4RbRrBiwGziBFs5gjWNQ8gQHb5X4rueC1C",
  "key13": "2gH6ta7njrRi45BJiUZjnSFdkzY3EQrbfxhAA69cf7peuLoG3Wx5BS5NAspKr6wugZqdWTr9zETCaYvriydJbd7z",
  "key14": "5J1pAXG6mU1YuXxAeap75kK2jd7eyw45wev7SJUrZ62LLZjv954s3UgKA44h7TkcPDg7ZMXEwrDeJvYcnrU5iB5R",
  "key15": "4kCn7Mf3hQNveaiDSnDhfgGCuhfC9ZMHbDJXKCHfZvCrvTyKmDBTCEB7WL8RRKnFom1abarrcqPdDkwKNgqMUqf5",
  "key16": "2cicZafCbq8KR5cQz9JhhwWNhCBFCuhedW137FydnHa4GhZkqyNxmXGtAoJkv5yf5phzMqVdm7XGmetwv1yTdQEu",
  "key17": "fxgBj9R7ovJ2XAZNXxX5jHU3NapxvEW1AAnHK95ijLBzymYtKi5cNUoJLozQ2pyhyKmCRxypR2tU8463eRJUXDg",
  "key18": "2rgLfvPHwbko9GKJweeF1vngSVdwr47vNvGze5cGcxhF2Kr26wuXn2g4faQ4gRPCUWmZEFfJnoq6XqAoQcBn5qMo",
  "key19": "4vQZGimZTyNaWdQAg7qMZNsHRGDe5FaE1KdEsTkZSMyNv6RpRymkYV86cusAbEUbpVSEJ1e7xfKqHFZFjrLBQc6L",
  "key20": "mj4crjoFeALoFfJHf53PKug3kSib7G1sJPquiKMqTSb32x4WScFCUtNYxkMYoB4Esef2CcakQvF2AKK8V9UzNxx",
  "key21": "3iGDe4dZaTX7uXjAFtu1bYce9eJiKLNxAfvYBHbDHxsyVbhqBivuQfESzikRxrKhr4rxWfb9wBtPASSRE6cyJYch",
  "key22": "4yJfuVC8V9T7gSZ5NWiz6kMJnQYmKstAbWmVGXPo8J2dkrkScmVpANWzL7L4dKCWRiFDkUWDnLiy7bKMkY4cMFem",
  "key23": "3FxEkQFf935nUQVvDe9HDzPsNGLZAxggKywjvH1L21a7rSCt2QMn8v6tfUa6w7K7UL5sX2MRbji3kFxhuHNRmZDS",
  "key24": "4KRPTbUmMy2cNBxtBt35W4778Euu2DJBBjTrGzx1RmMRHWZHYFmDxyupnN6AP7Lj4dfXGaJZCxq7Ep5Mc6EU1EML",
  "key25": "2XwnyGmrFsAt6XJsAi4QNMmafodvmf4vt4bHqXbcxLgdNZVXB7i8CyXzPzjxU4BK8HWauWgRTruo9ZiELa1WQKCh",
  "key26": "2HsiXKKvyQHuUmQwHhhjaboAivKAUbgPxhLm4taiSShR5BfFic42j2bVUSZ4LU7GNZhFqjozERdV1PNXzd3bj8jH",
  "key27": "51mVZLCCHednbTJrWBrwJsHq14qPQv78WjwY8GbNHMhQPrSePn7pb9431FNwbw9L2t5a6Nqsi9XZ2Dm9t6FQqoxB",
  "key28": "65rSkbDwCkRxzqZovG1998HqBtLcWxFtd6xW5VYSFVLafNhL9EC4DpMNauVGTGQx3rKEuptqqT8e9zJAsayiAWHU",
  "key29": "5updY1R4LfwZ1dE7YDh385QJTRueXbDX6CQ1n6earrKkGgYFecxcaVkaJReWy2c3KSm7MjgHdhQZJvgBPVQw2GX8",
  "key30": "3BcwZjDnmJNJh2MyHKegg8o2xRSwVFr4VFGUWMNJqJ89Ui1DvyHMvJ9CkXLLBmcZXqCMcAnrReW643cApSewLKbf",
  "key31": "8xBH5H9mj1ogV46zxMAUgwveRS4qZG72PS1Km8fmoEpyVJuHTxFekRhn3c6LWbNU4hGpTuCCeL8ST15briXxTiL",
  "key32": "5iToptAHkXct44ocs5v7CxPSUgeN4KSofhZrJ9e343LJmuh87wR2qAbKikt2wwyLAtHGcGSBwpZisBYHRpRQaxaC",
  "key33": "3QEPgg2HjUShMuqAn1YyXhmqyVk4Mmik7vTUMEDNbSXqZpwVkU6fKpt3pJ2xgXqdhFs7hkd1Ee7c8jLsRKeC6Srd",
  "key34": "4mE9xef5mPA8j1B5GUh2BDegxJDeUE2KZjVV2g5iT4QYXVzHAXNaQ12AWqnu9pzan9zt3QpN1hr8oqvxoxHpASXG",
  "key35": "3hrgvPZ9qaLAbt4xFLEgZNNjeH3wANMsayJmFENExNvFm66vg4uuheAVEevsMkANHYyARwNa86NuwTpjQZy7nqa3",
  "key36": "3BrU6eyag4eZ8wiKrThVZ6uAbQ3CUpDh8QBMosrcez1MMBVEfE48v1kriGDvghMpe6N517Egy7JwpkkrP6ykZ6cG",
  "key37": "7d2ygBjP76xyBtWwFWEdva9kUmjqdZaoPMpxB1iw7uixDK9iNMfL7VmaujbAJUu5Vv7W4gaZ6Zi3piwgp9GUkQG",
  "key38": "5GwaabC8ovCd3vB8U3gVUzkG8uYHxpriMxRNzM9ZatiLffQ5yDMKL9sqtbHhdVAYu1UETUTVQwBfso3UU4JaeTFy",
  "key39": "5vr6BFDzfuDRj4A6FLcCuf28Qqgo6nMZMCo234VvQgU28uDJtkWvPjHRUCa2BfNLwr2SAEUVJZT3i4x7vpmdVp8J",
  "key40": "4udxfHU46Wv1mjsVqaa8EUS28FWdzYrTGbjSpjeEL9dAhNH6Q7pZjug87reo7UFGFAiPoMnZW1xgGtnMXZhk8bWi",
  "key41": "3wdMHFWLPfNPukHsNLaTTU4two4CogtFpJGrWNxKGimShUKgsH7ByXRKvAYvitGMvxwyequUESVLktsjJwB4bjFt",
  "key42": "5LqPH45yZcpW57ccEoCHxTwxGanXB5jRxX2tUp1nnTxdWAc82Wb7e2XRBqeiZBpaeYjTEmk7BqvVX3RQbQqJHuEh",
  "key43": "5Fx4Jj8GbRH9RBPkXCujGqsUnDEot7GiSBSGcpwrFo7RGrArQC2SANt5294TsSsmAWiewWy7MHi7Ys63nbYHv5Yi"
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
