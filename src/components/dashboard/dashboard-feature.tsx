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
    "2FQ7mpbcQ6Lf8zdXbrCYtTtoQCffGmbczuk1DR7MPjk1zE1GcUt63Rg3JyPU2v7ZNjj5po3ck5YRmMEXrfz8rwMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yZHGjDcYY1FdmVuGyytKV84gXUSzZ6arMsWAE1qAJhi1JMWYa1JbM3AgCt5m1LrT5dSuVYnUB8rWDgiLpoBgsCH",
  "key1": "4Ayd1pvR51tNLyFxRux8at7c3uUbvWjC2sHnoWQeuyusZwFgCXSHwR51bNkY3F3meHMyyMrrgs53dCe2WheFn1Fi",
  "key2": "2cSD9KJ3bM3B5SmRtsNyhiMddJFAVuiTuNp9VUyALbz6swemUWABp6ekVx21uPz75cVKcDPoyoftpNamXLtXBB3u",
  "key3": "h9qaWLVTC7T5eMz5xqFjaqpAUrLYHJRhq2cJXLx19WTwLUxcFVPD7G4La2deAyFYEb9ZHkXq4tX9oQXZxCjWnZc",
  "key4": "4ZRZAZcSsKHkCRgR1EtTWX3wSERBCWeUfjKm9vVyuaFjz5k3AqrPAKgcg2MBcsYgD636woaPhQ7CZYJ111yCVKgK",
  "key5": "kpgptRmzLUfvwQFKtqFtPT2rvj6YUqgKetuoWRkDZvZv8q2ERLFKv3hosqVPdtHMth3QvLZx1uBKmA8vL4Xrfio",
  "key6": "4UQZ1G7tihHrVsPpvsrLzEWdgcu9RoesDigw4VWKiEBhn4iTQqoGqL4znsu2NKrnZ6po2YdG5yT5s2Ta4EUUqQyc",
  "key7": "4yG3Gpk4V7rmpyfeFopJnrdKaZ2fMfyVRawVtB86UtXZnZ5ZbULsYnJ19NZmikmnGeB71NV9rq1xZRsPnRRu7eAj",
  "key8": "2NbyeMS19CnjALeBnp7ZQCtBsZXcEY6hXaXjodBw4MHkTWtitCHJq15j2AfXZsDiLVaVR1SZ7Q4Us1YVkpEJBg39",
  "key9": "64yWLRmdSsL6Qh9v36HihAYJiMW25XRhgbCacWz3JoiYtpPvKQoRuBpfrfJNG9HXsmvRRp27xtmzVjxxuf3jJQXu",
  "key10": "kD9eThHFsvLN9bqM7snGJnGay4i2PWr66rAiZVccBKXY8YefUBGvrD3TfqHKwj1MkdKiA7WxMzhXpb7FurvtNjs",
  "key11": "7bsbLtua3CbwHnXL2YboERZv2nHZUvyNzoYh2tjJqXPyUpG8LWdJBhMaDNraKoURmfuH3TYtUyCG7NQikiLLk4t",
  "key12": "dHdPR8dSKjMfgZZgAzuqPYcz4fHVd2wuGwiBcnXC4AEzgNFNkGoYGmS61b3J4Tz6aMaSK38fBgFxnEMoCRo9PBZ",
  "key13": "55KArQeQg69pcMokuHQgLxmzpD45Fj2yXyZL2qqD18J1EburY97KCVw6hJHfxkHxExwbDMNmunNteSR1wRT2qZyx",
  "key14": "4Pn4QoLfFuXT5astA2YnBxvM2we5bwaHBfR4KtVMT6vwL8wzyLJypb2cTCyJ5Czg7NtGMx3chT3WkT36sUab54n9",
  "key15": "5kuHz7FPz1wxZYt2Wnck4AwoVaqwG2Zg35TEJcSCfs7ttYfszifFWxqBTRnc5ey3yt6c1sn1aPNiV8ShfLXc4yUU",
  "key16": "5iACmWc1rjdV76cZeP2JqKo5b8wGST95R8RUmmEudHEaMn3dhyXVWn8sqDD6tZqw8NYuth3PViCsZotFWi1vSv2r",
  "key17": "j9XB9f3q4X3T3t1bbVqCehPb658MuV7jV834f5jC1tkcMJLLoJL5QEa6qPSMjznVezBv3VYDVW7qREQ7xRdKVvi",
  "key18": "2NvWv7mXm3oof3iiGmcLZKwXPGJjjszDj9ZMQDZ3hfWs5ywYRDHyKE8xioQ7bCaXjud6yWP4RjAjrVSmBPamp4Ew",
  "key19": "CfxhAyrNZCgazofre3hzUyvNcmLnGx5k4K66n9fsBunYay7A1xBfrZMqucL3aEakzNQvfHEZDJTs8XtkA9d5F4z",
  "key20": "zPCgVa9L6hVoJ45ELEL44jjJoU5kLkPymKfex1c7Lu7eN4rZrLejPp41ohpEhcZU7S5Pnb6XYiP6bcH6Z1SrSMZ",
  "key21": "6HZpNg9P3jzk6MSj2oED4oTtKQYHhRv95XEbyLumPgkvJ9jdbx1sTpzEACe1R5zMsbQpDJc24Zi5PBYMhBV7ZBp",
  "key22": "P72xqhDXgLRnFNmCpuAzTm5HtcppRNk3zNJtXsT9wBffpnfY4zoSFGpUvfdCWBU8xdhEPCU23mXKKaxarcRrYgF",
  "key23": "mPqD1Lq3japAzmvdAhnngPyKiWeUNZY7NnrLQFpkTLxT1HEMCZeNrANCCEzDqC9bMBQoGF8f13kCsLSpg4Wsovf",
  "key24": "5JKvwJxtdYBdDHokTXb4SDwYp9SK2xrZKYPZHuCcXN653R2HvY2Q5DezCRUUZoqpzfzvLdCnAS3BnpamCpzgCv6m",
  "key25": "4smZTHQ32C7VcfbsfAi7rfarKriezj8PvzHgYQN6MzK5N82bP75THUKYHJmU7iuqiz34LC2EqBARL3jjCVxVnDMM",
  "key26": "3K6WZQqMYh64s262D9mwy3m6mDJYSAiGnhnqdMEiaG62yENyF5p7TXACpdHZzQdKDJDmDY3iRpKjWmcTenKSiNQR",
  "key27": "5hETCzVXWoYh63ZDwbfECd4rLq8CrGYgLqZtjBwGwji4naX4MJpYozpQKHrkrGcHRHZJaLq59ZgsiztSJfYncFid",
  "key28": "576vKd3arjXGD9wTxMU8bm6YRBRCX9eJkyFd65VYsVZ3aWUcm4vLsdfJ8pNoQriHFcEZqSURSDpZq5XuCYcYtgtQ",
  "key29": "3tVUSahYiVXBWGFWpfEqiWeNQhdFydbCxzdVQcWRA5scT48iNx85yHMuUVHSrHPN9aPnr6StKyCq8sHVZaXDKmPM",
  "key30": "R3MCMsrtrgGBdv28gKAjwCRWhz4jA95avXVCrekYMqXrbnnvTUESFf42DZsWEBZWWcZX9a5TeCerrXiiY56UGsF",
  "key31": "3bnbwWWDL5fXcptfBMChiXRFLK7PkFefAcBT7JPfjKdiuawB1AWUnaqaF7JW7DQRTS7T11RbQrd1qMSLxpVPYPxg",
  "key32": "4fFiT25VTh7NCNbaj2vfDjTueeG7bE5ZfPcAVg7BMNcZ7Zk3HaY3gC2fLV1K5PTsiBqtPr5TTz6X1MMbpP6KPouK",
  "key33": "4oMcmCc6UHfGVXXfhXmFmqgbFE2TkhddEL1EK1dEN33uF3dsww33k1Vu15Jj4Dx1Aa5VuoeTTjBsmFg95812tDBt",
  "key34": "358XZTimvbCdJ58XznbNQCJqRwJjiBkRqChFWf8DhPznskHt1JB421onx7ui2RTfPymbK73x212g3bctkgj4PFGT",
  "key35": "5H6eR4QHxid23Ckby7L5ZkfnSeJ9vcGHgDvuQC6KwqJi9RpzMSbVRstENe1W1F2xkYdC9Ri34LA4m8ZjoBVTDQNo",
  "key36": "3FbKtsUym3UFKtFZ3B1e4kYFMSqJtPcZ8uHLziH5pYi17af7u8XSWThdQYmZGpsuDjYDZDX4EQU5vM7Z4mJyg2b2",
  "key37": "4ktb3z5cbimWAa8bpkyvtiWL4AC3DUE4n983bjJAqRTFjJv5wyBRAxjXWxhjQfZRy5LxQuTPru32scLks8f6edHY",
  "key38": "mSUq2e2ppywQwcRuTc1GyXXzQCWYY53AkQnqUJ37gwCbmbbNJPxQtMpAtmbKw726TQQox5FiMhqzHB4cvW2zjPo",
  "key39": "3m1bHLh91JnAevsr4YeDXZ2ZiWqVKKconjVUUR1VXVnkbqfD7zJGNdxUeukBgBGaeuqMnPZeYHe8UmdPohrnssbC",
  "key40": "2FSJu8KnTnV7aGE7eP4xxLmhDzAKNx7qJBC4ENS76ahMKTKRTDfxJtGq1YshFFitmWC5Rk7nxfYgsMmEwfE4Gb1j",
  "key41": "4zxmM21xDmjLgXrM7Na8BcFCjCDEbaj44g5kouqM5opL2WzUNvBD9LGrc3H3WefgSyJ2jMNcfYXBMiaPZ2NBBAhp",
  "key42": "3kUCj4va1VjLdrQUxWqnNttnoXseE1jNxoRSm282Lj9yWQg7T2oo3b2Q2XxYr9AcRgNTmgS81ZYo5PErBeaZ8QUo",
  "key43": "4kF8VKRWAwW15FFw8caiQZoE6Y4cXxdZauA4xwPzUV9bpiyKNfPe3mzwcmoaFwKe1voTguT4vmFLgqwfjp4kfmsT",
  "key44": "iNNBTcAfXs9ih3fnRrbwm6mSssoEf5BBdpwg2GwezcpMGWDwoQ9jyuRoQKf8UAutd1hiurRBrEc332A8gz2XQLZ",
  "key45": "5STqJuHiEUfdVJ6RMJ3jGeM45dA86r31o468z8koaKoSu5S39rcy7T57DoAUoBNbKRtFH4gPqTMzsrUi8APWCusa",
  "key46": "4buN68xevZWUpSyjnyPCveXjTA8V9vY7GmLtHmdrsx3SimUxGgBtL1g6mFByfSEayyg3cMKpQxwYdgXdkCzAJ9fS",
  "key47": "2T2SQu7bjWvNymFHxQ62ZCLp11fPQEkPxkh8Jo4YC8RYddd5CpAHSGtoAwNUVyYCqsDzgFZ6jLhUX4ozvFxSk6fw",
  "key48": "4QP7JihPUPCxVn1EAQgMEsy9z9LyePjRW9jswTATcwiB8HFXqAm64pzAzdFfMnFx4AdWs7Vi2Sbu32h2thv7WPdF",
  "key49": "4tiyciVVJajk8ScZG2EiwcVjJwQjbK3FUHfwBxxm8CU1y1djTaMzVh9v1twCDTQj722bQfhuaV2zqZgnGfB33V5T"
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
