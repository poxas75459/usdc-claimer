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
    "3mm69xnM6BUe6qgisQ6oPsBiChjjh2igLp6EM3GjyW429EngbVZJi3oKjo5kzgtixuYSpAsnPt7XwnmXpym4Yxra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57TPV1DaBvkK8KCKdqyYop7LLTZbHSCy6JVeARuCNmUpMjxioaDXitzxKhGho4tvhXcUa1EJX34iAv3Cc59PZrUP",
  "key1": "5CChX76QW9WSjRW2f1PkyofpBJWr9KbX4bkowSyjUizTPMfnJ6r8zM9TWvBPcRwY7an8mpxX8GZKwm8LtkzQQSAN",
  "key2": "5UTMuxVgmrTaSHtYqiuhhr1xaj7H9RhtGrwtqCaoCScp7TT3RCj63NPuLrANKDxgvK57MQvbkgZ5ftoWtvUsk8Bw",
  "key3": "KGCCigsVgJ1WxSSjZpkASaaY7weFdprbZZWpWCx7CvvYacwLKjnTDja7bABwm4WNk6wWgKztmoyrve8bt3TaQcx",
  "key4": "62zwHhhSp3M3TZSot8pA7k7RmEmAE2Zw6uNKCoDoSmuayBid71ePvNifpd7xkAaR9NgZkzAfjoGgWu2UDWye8AAP",
  "key5": "2RrDucW9gHPPa9Abf4osCKPZGBPGfcTNZHU1dcsa1cGgH6d4WSzHBobfUeB2FT56UYfiSqStjHEVP9Zofg73EkFh",
  "key6": "4idmDHQR3TRixgvpCwQXNK68dZvmKJLNBKgnrGYPmqcuDhN5GuNPByM6RnA6mHYHDYKLVA2LusP8gGNyPGF64J8r",
  "key7": "75gvNJoeYrye6vY4SCNZTXUoAnLrGM1KAkhUGpFnkXPaMcmsNtWV34dSQheQx9otNGQe29e6E6dc5YtBxWYsGxu",
  "key8": "4NAmEHeEd6XpVJceGP1EojJ9ZA8b8jtz8tE1reMN1ZmUQLs1YWYoAMm97fmcM5XUdSLj27hm2LJXrwEqN1Byewsw",
  "key9": "CsfqPJwNt7rj1sP8ySQGJCuVmkTk49gboB5L6VA6CRWavAts8AbfBMxFQLgvD21kGrKjKmN1EMCVvE7vQH53Cxk",
  "key10": "kK7Norf72iaCbH6o7676iFDpa6qdrZFJ4yCMqEFaPXmivHC7N2GYXRdKT91RReVox7PyyDvjzzkaW6127jtyBdh",
  "key11": "4LWYwuLh8gd7inMK35mzvWwpHTq3tWtHoBazUKFseRsZiEu8aRBVGkYkUmXHchnsvicLBMbwifWGGn8PxWnegmvr",
  "key12": "633knwtnUXYwqWS6K8hpgajkcitAd6grhjcAWEq81zUxB51YQeTXkmsPMA6EruHtH9734smd1YQ36vKTbot3NQac",
  "key13": "4yhubEQU3rM9oFt9EkAhyTUozuGPMGASwQ2VBot5AxAh87B7XBvE89Y9VopNhJnSAxBE6Z86UkPcfjDLfcLjJn7J",
  "key14": "3dWWRDhMnCik8qFDmeYg1zSjoLj2wkYFisNctU8GbUQpSu9h1mxBYsAqk9wj6N6VHrDcyPw5jh9d9s4Ysmo36L1W",
  "key15": "3x7XKWfH2mE1YRCPUuy51AKBt5pMDS3bKS7P4fyDBBj9oW29yAvq9Qf3CD3eZhZTuYsAspiYbXTD9iHT72wJhyL3",
  "key16": "4KhE5AsrrA8JNSeC5ci4b6QCrLjpQbXJrDd7f47U5pyLYxK1aq579cTzKQ4hEVx8bWKrX2oHEddFLRb9fFE7C1MB",
  "key17": "5yW2JFpmX4CQrMPZy7VfjbRZVsj435UCbYxedSZy8JyZrakrqdKPqToX4sFbzndxwqxGsUqtP1YxBRsj8hPKrutX",
  "key18": "oTFWT1VAZKyhJ9pveCttoKYPPhZdiYNfa3ubZMSWRahd11eKam4VjiTGc7trSGCDMNSumywR5FVzCDzekCq73xi",
  "key19": "3a7gybM4hLyDiF3Qk1bNEMjvPtAK4suceDRSiJdb7zBzawZ4YQGRBB43aqAdnQJEDenpLwQLWj9ZU5oY1DS2Fm3K",
  "key20": "3DUF5qK32vdYGZgFfCvK7UTUAYQ7SrH5MQsmYhkKseTWh312niMSqNhwiDRyAi7v7zHhSwWBRG4XmY9wkvaimdj3",
  "key21": "21kZ7BfZ7tTkpdF7ZN4zJU1pk5gXAh37YVYM3d7t9CpWskXCjaAGtJAg7HHvysYMy8sD44ca8ReT26qJ3f1MjKXj",
  "key22": "2Gre77xenr8m8xatEcMBMC4uNgR1Rj2f2DGo44A2Lm9MtRy9JosAxMHWQhSgSqzq39LKxhLK5TvToLJsZtjoE5eM",
  "key23": "3YCb52NYrY1a1CyJQsAhLh5wfLVomRbbacRTs7TouEH87YiJucR4ahXs9rsoL8s6R5qgVLfbccpAAvwcY7xE6PnJ",
  "key24": "kadn9fPYFv42BL1LBy2LNi2ACCA36SAseNYALfbLngYpkKTXGr9DEq7s6iqL8f6hVbyQhUcLLFsPSCygXSS9cyR",
  "key25": "5ruJwadRypSpGKwypwuLy9qMwAZz2c3xACWXBZLZCJ53UJ3YNHBwzixmph5LvbqCL4LPTYKHUFAn27UqUYiHoBw5",
  "key26": "3xh2yZo18ruDfuAhhAodvY3Cubg6vY61nbNtRKnzDvHy4omQU4CZTcNskjad3Exvk2FU7RofFcZ5BWEsQn1R5hmy",
  "key27": "3mGzH2tv7oNbQ5t3jWBXkbufEy96uxetjKjQ8phEpr58evJsUKwP5oPComwdu2tYxXVe4iGiDq9JXwBVVbWGFLvo",
  "key28": "2NHZRxcYaEKTzvsa5q3FQiaXCh7UavJabjems3MsfX5K9oX9f9Yt32FDvokJxKG6eSiDv8Zm3jzfgstsbUcjTjVp",
  "key29": "36mt7s2nETpkDH9sAfV8tDVXXfyqvMFxoKpKkaJ7xgeYzJxrrNAiw8eXQCLHSrkGLSJbc8PMiaYXN78U8jAyhsGF",
  "key30": "4DLNMSGR26A1tJSPUKAcjL15rutdDVae8gRMSrk977gQhbj45XvRRdrZNnex3WaXW3x35kd14GcxF38uFfLpCyEh",
  "key31": "4ZKSKWT2dPmsQsK3T3YtMFKtCNsXkbi1pvrYrdk42GsGZtfJFNxvQR5ND8Cv3oKtASZcDwpY17pj78ETsdn1H8PF",
  "key32": "5TDf2c7qGGD46wkMCr1XnLiW2aMitykQDTin45QnThRbEe2TqSYDhqcbhpPWG98odpjMKmVBDRXUxVUzu9MTrLVv",
  "key33": "5mWdZKTYBVGYWM4sqQKV1SCUom4WoZUG6s9WkV3pey98nAgmpM5DF1nsHgYiCdF4Q7HzAzcHuqpkNEH6Gd9y8736",
  "key34": "3Lch2sMXzfoarGUJj7ParY4kDyWQMiydJbLGzWpJKuTwLTQkanrcXVthgoYPoigvvrVPzQGHYcx6twzHp9ePrj5G",
  "key35": "4KPpwAXeavVyB28FcWUSD9pM7e6QDADQTK56NVQeEzAkfafmNZJ7fMpkD6Wu7REFzKeYCUpPVR68BrnB3LxH7kHy",
  "key36": "3pyuy3pCzhLkniQge6CfkVPriiAyQyumHQ35oDGYaxB3X7oUaZgm4HM58byee5jkqNQoQfEQNCDPYCs3fx9EjYZ6",
  "key37": "3gRz359PnG4L574yrS248KCj2Zv4PuEps9vgPgw8Mfge4QBAJaaDVUY76Q9vQZmxegfeBe6MgnGGXrwwDMbcnZkP",
  "key38": "4B4gC57Z1X8Zbq5xS68WbD8a652knpheVCE3UBGV8iXtM3CnbDdyBUgkWbQrCJjZzxAFuVRL8xYPuf9nQdxzkdtB",
  "key39": "szmQccH8kv8rDrg9EYKtg4TYRbJkk3M8k6FkLsXrAXSkUsJHQDwjQLvefu5BuaGv4EBL7c63DMVcG2RW6Mwymr3"
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
