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
    "4bAJXDRawnN5mFNBzHnkzkt2x36y9XgvNDm1kJhDF83s2uuafmLHnENjprRExqVkzwZwiu3d9R7zMyUAdMJwJsbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49DBVFe4qnbuhbT5h42yFqTNzMQpoMj4jTns7ZC3VEJtxHBcb54q49YKSuXVLtwJ9Axe27xrWx9NpM4svvpF5JDZ",
  "key1": "2hLGjKGCk9ssQWc51HPy4rcMKYE6FbSqn6i5LFdPTW96uinCRFU4eMUT84Fp3tGCg3FnWCU3TQu9nfBg36b3aoMQ",
  "key2": "2viztSibHbHcn3PsehLjDWCgBaoUuJzuVp8bdYwGUDvr2ugqi1prBg7WjgjCoxV3dy1x8ZWx8uWbVfweE39padeZ",
  "key3": "3XuWzxYN5weT39zSXi67LQLmp1Z9FrwVmnpwFvHUwJSc2YZdrZc7MpzDRZV5FbQWMhKcRE432Pri1hKfoGXDMn3p",
  "key4": "5EpNKVaEoMUbfX3wFqx9vqH6eAAFy3hyr1kPCUaL6jDXPChuo9mDfD3DH3RMDBtimWzgENvpvs6YyCfC3gSE8J4f",
  "key5": "4J8k7zQErhKYftHo1gHuwcV14hS8LeXkjRvahLHKERk8Sh4m9NaaKR1aXPkVcua2BVQRTJXNWmRXTTKakt8HpBBe",
  "key6": "5jh4Bv628e1x9qraKpHWmzABeu1safu8rkZ9G9Kr5FjfmwyYbgzjhpgj53Q9hZdzJNyTebBhzwV7QoC83tipcKJd",
  "key7": "Wtx8aDD5qn7oWaeBjxgRt5dA5mZH5f9Xt2uTkAHkYmvQPX6wnCjUdLapkLhyUVfD6JoKQ9KKAxHyf9pi3BdobD5",
  "key8": "3AbVdPAnx55Te7dUgCdiycZCsSueuXcCb1sHjqmLkpckMDUJXH9x6RtqkbjBXsnKd3v5ggDFcxh98KCvQZbSU8K",
  "key9": "5bsyvCrFwkMgf12hfbVCLNg2evbyaC3uprzGM3WBFShwLKNLUsm5vGCozfAo6Z37QRFU6MAD4WV8ggATseywrbx7",
  "key10": "4T69vuu6beW4wqPqhCoEwQewCHHSz1QURLcsKhbBPapqhbqojUKzCvpBNi2k8ghM3WxmWuW2BRbWkQ1jSLYK6hVe",
  "key11": "A5RQT6YdDBFVxAPSTd2GZnLLJ61PwESSCqYpFQVFCYoTjYCrcevomtCY7GiDvPru1yvebQjFJZkbJTTGBxkB9Xj",
  "key12": "5EiTJqJAvxwEaiFBUy16BS2MYW5CaekUj8Cnxyr9UDQMLzGCW67x2ejuxg4a4yVXf2wKvyEmFehnVYdMJrsuBQUp",
  "key13": "2UA4EnvEnxxjjjdo7hWPUbMadmyf1WESA1v7ntSfLVGU6YhnuFqoyVRB299ABwuyAs9ns7Ztynjj17QwEoq1qdWW",
  "key14": "56T4eGtmZWuumvNPkkj25i3iEqKZPEQ6mnDhErunWR3EG5ZEpY5jZGLubsSwZxdTcCgG2r1mDTG11SGVsTK99o6T",
  "key15": "4f4rAJuQFuCnj7DvyrZsuWAt1GenA2uxjvh5zyc4WuWsBNM1PjrzsSWvNYJhxNgog6PSmXX43FRKcaAnSHYbJKuD",
  "key16": "47L5LbAxUZ2VQ4kx7QP9zK9LyPLp2GJvfv458sHjs3hyV3EXZvBMgS5FFF9mk8zSWxP4gTSKtsGmyoMyUFwS2MGp",
  "key17": "4inraMeHm5GLsrBWiPT5bXR9SkxfTeo7rpRqcnDQtLFkwHyaQFWUW5etzo5LH1rBNuFJ7nHTVhLDcipiVxebvFXe",
  "key18": "2kNdkcYq6mPa9LHny6jVKgpoPst1p7UUR31ndu8nw88dppAdxPq1xqaF8ZvSsU7SDUD6sXDdV4uSX8ENDVXzQ3ty",
  "key19": "5r8PneVUcjRNybJctREr7ZPcgFTLwNzQQAuGmb6GfASnnWAMY1HQdfsRWF9PY55AihfpAtczKu8roWzg1wsZR1SG",
  "key20": "KE96RzdNCoJpituz8h9DcATvjvccGF8g4dT1vs7Sm86DQbE9Uy47nShjBWCxzSviux92fTo8a2yWczbr6Wj7beb",
  "key21": "xoaAMD1XjtAAaZPJFDQvSV4Ry6Eh6RkD7b3xsCJ2m7FbzR7zrp36ob4CBM8fKejkK6WT6v17AKov2zczF9Pp3HR",
  "key22": "5KjVfrFtaAmTcGXUBEGwZ2g8DzF4EkKpdMgVYCqCgLQkKADuoEU7PN2rqnLmHNkeKLzKUbFf1p9cTmVauivS8jMw",
  "key23": "4NaQt6HQKYyZyPjD6ZTmyrqUSKpBTz2bc7FhTGY1DTdgQkx2WicubrN3ya885TeEh5AiV2yz9qpYQWAKK6Vg61Mm",
  "key24": "4uj7qSpxyvB33PFVMchHEdvHLCm561A1RLEm8nX5mtfFDFyEVPj7ERa16DDxcguGymgvB7pKiwLBedMEj2fzLtKh",
  "key25": "2FVT8JtmMjMDXz7gbymvMjBw8ouPSFLtwyYc3pEd17PiaNxMGKHMTcmwuHvSZ9ysRbaxqBrXHum2QyPqB6AG1drT",
  "key26": "ANDtgho3RY4ExvRwHew1y57JcWocnaTkNdvK8HG5pHtmjMQ1uJtSf3dtwctZCE316roGo1V34JFrMuFovZJ1P6f",
  "key27": "dz2F77KECfi3Q6UgoPNXSaJT6BmJSuf2zKV1ksVTcxSZ2xR2LTVudJu89HKQ7ta9xmbHJvnKkMyGQtashtyVTj6",
  "key28": "CsdCzd6wFrN75yGV6Gyo7e2f8PBEDJRtX1YSK9wpnm1S8vNHCSXiUYKQLKrLGedwcbdtT6bYSMCdkcYZjTo4vtb",
  "key29": "96BtUneHXjESb5qSeJzE2Ra2ipBDRmgFjsjH9R4MEH56yaSx4a7jDcYbcUknwtzjk7pWN7TadXYfmfStmQJvg7e",
  "key30": "5MtczGmVDsBoxxTDz9vf38SJYtKapLaTDiDcS88T6u6KMRPCCeofUKjCR2ejvuwBbPYXa95eWntot7VWU3MM4nFo",
  "key31": "VK7iBcfpdYKMnzZJ53k35SiFU1fBhtmtPqSuSAonSwb1uhgnSSSpovfUGVAaK7kf1FMVjyTfPm1QpAsgcSEU9e8",
  "key32": "2T9Ttneh1i66az2GQjWGNZ9xJuCyrWiaiPLcJQbDC9FJRKfCQJeC4byxriSFLTvXdecasgVRow3F7Asx8cyvkUZQ",
  "key33": "9N4VNDC97RYsCtfY1qr1CLxHGm2yt26GRmACc66aMbwrqbPyeEEX2t7wZ18ETrWxGqwdMwmXvpLgFfxR8E9mKU7",
  "key34": "55neTxA58rHPuj4mYjxN8avqxaFqrWES72cu3FnnAWxFQ4exYjh1TFU2iU5whJkJxfHoeajiivPMbd1zmLeGZdY9",
  "key35": "5d3mhz6pvaYKAChdG1PRwP2feQUE9v4nTg6JYMn2a9a9UKdb3muJ1NpZMzQrxWVUdEJc6WKhfN7JdXy2EYP3MD8W",
  "key36": "2u97E3Y6dDHSYHtdRYmay96RCMWfFP7dbgpKVdwLFBE4DGYbwmYLTCvNq773T6mQ2XzaDAi8tRZiakH91Aq8PWbK",
  "key37": "4NTBkMnqskHJNa4iR4e4WnNNkVRnVUXpvzgLvPc3C7SrojoZAveTiRcnDGvA4AVZaykhTbAPv1hTrCvrW7uHwkRA",
  "key38": "3c9V2CzdqkwCCinDJEr4SvKFbJbjeGkDXnHLuJJmcEd5ZmREhVfUvik2eeugKmP9nx5WzQHsLZfQDfC6gHVLn8hu",
  "key39": "2HGJpMkFQsHm31f7VKfjip2xWygMkQybiWgoaYR83A6rEmQ1pFbgZQc5GvCWUmhpL5zKJk2V3jkHG6drakEdUpJe",
  "key40": "2zpqQy79DVSCQJ1rc7a1ZyYPnBTGrB3r5Lo2Lj98LrAQdqgzzR7XQQMFYpyPr6NuVNpEAaYZMq6vvW1njbosCYht",
  "key41": "3J5p2tFk7xEKt3xGnd37shGZ2cTVvaJ6MrcjDnK9JU72WuXGDgNMaGNS5kkzv9EpCk3YPi5uanydgahqSABBsijX",
  "key42": "oh8qDMtDvCixuYzevRUAbqN1DhCfUQrkaTEs9BW61kqUYXe38rFjgWRze6tw9TKhevFKt7L2zbFtYEJV3dyuibg",
  "key43": "2UvE9a5p446AMKDhnXuWS8XGfWcgRsKBGELbqLPaaaxdL8CGMkK5GG5aEzxArE89oYHWTWB81eLrd6zsyJSo6DDJ"
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
