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
    "6iiNEqKRqttsLy3Z285D1Z5x5DeC9Q8VspmuSidVpAHfzSGqpYdXmS55dWbU4EAGo7UXpUQV6oYsp27Z1Ba59s3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ToAwx7UFRGMbKVtaJFKaUmPQrPLwNvhz3pvcV5Mo62KUuVRuEmJpMQvcVsPZPWcR5Ta76DBUFMLgkBpJMXQFmgL",
  "key1": "4dFdVeUPQdevw6DPGvoTxvNGrBpSzTq2Pw9wYURdKF8BdLwHD9mXZzs3p4j7ufbvVSugGwMSszcFc6snbj1okC5X",
  "key2": "TDWZMPGfaDcpRC2PANDpKaspUdaZDu113JtHhrThdpXbAo45dgBvrZTqGTap1yCGYagegprUyptNc576uCTYkt1",
  "key3": "35w54gBfqGAsTvBFcBhmJxHepXNL6amChsTv3qe5TEDsq1aTc4eZokwC9QwojeqitxfnF4Za9bxiv3EYRGcvnPej",
  "key4": "52CQKCDnT8mfRNTJ9VJgyJyYzmAr1yfYuHA7PocF4USGmhrYrN9T2ggDPyTFVYax6mQ6A9aNbHX7QmbUWLDo7P95",
  "key5": "m6dTbfzftdhdpBrbkb2L3JYXdnLRdcDCirbhYM1PMqjQPaDNLEe86ye2pA9rnVEG9wbax7za5t2zK1hERSuF9zG",
  "key6": "65gQPfWARUhS7DeWfPQTN2m5T1v4tjYeRMdQUgEVsALc1uk1RbaQL36hRQaxsXqdic9bFv8CUHWy8GAPJGutGoBd",
  "key7": "6133sBh9HfJPVXxPNDFgPhwkVVmHc9NPJcWiJaTrTyHy4NPjuvAkDHyXtZEsRxcSBW3Zv8VKBTU5mBz1mtjgAebe",
  "key8": "3fqnHF2HSCR4r1SUn1rmhiVZHMahCfcsxLyJxKHNu7XnXXasji3r1ZuqYVqxCiDfCtffZHcvhjQt5aeEi4xYxx2N",
  "key9": "X31tgNWFmtiVHR2QQncXsN5ixYy43nRFoCKaQmnDeb8KKa8qhp2ziyMJRS2YSBM1b1eiMk7S8Y6BJYSjuWaQZi6",
  "key10": "2a4T1zWWT5Q3vtS5urzAFy7u65XRRqFpkfeBUitzvk11P2KguUjXjnkkbiq4iLRYh5XYPiaVZwStSi6Zk1UBcn4c",
  "key11": "4zwjGLExtuJASbqxmTUujjR6rmkGwyEaK1JXvjQDnhnTQkhxCQ56uxzd7n7B4SKtdnRPJTHtYM2WRsQyjH8TndDf",
  "key12": "2aMk2fDzNBm2Nm62XxXDEzv51SSa4zUjBV2CMYVaGjh54651nWU1oQ2WNPjTSGq6oASy8bMq4wN78yn6nZWAtXq7",
  "key13": "5FNuRwbyzRad63DMKieA5jP8Cv1hmZK6KzqMheDh5iZgMbeWbu43tAdqSMEAGdzZ6yfksffTtzwuaL5WL2qXULfs",
  "key14": "THvWgeSnL44VEkpN1wGnxc6TSXqQ8HbuLAhM9DXmEYh1wHwmWuH8rJbyHBSQaJqzE9BcJoBjE3wPiFYjdrfdtii",
  "key15": "4ZDaRZM1A234u3TkjLEQEq5YWjovh3SW5db5Pn88Er1xKafnT8Ret32nG345Jn9zfFVutUCG1TtsH4N3fng6ZDM9",
  "key16": "5gjmayMtgPBymH2trcX8er1m3KxpsnBobPQmpFQiKhDpxxkTVeKyX3YxNK7abaAQW8CEqVwwNULPTjwDycnfNczS",
  "key17": "21sAofBPA6hYhesYaTTXF5RaK2hQAwezGsrf6ECoBYYhbg3uSRfBfHJVAwXGoaxSCerA36V7vndRkg2J4weofjK4",
  "key18": "4Z3bBiNje2Tu9eVV4DaN8PdUdiCEjFK4qydbanohegf9oZ3AX3uZpykFpX1A2SVuXtMnqBq3EGb35bDb9wqTwFZv",
  "key19": "3SeSSgdLn52DP4CiJXv474gpD24wKJihPCnLYKghb6ccHFeMAAKaNxcD24FcY2CSurvAuSygAuaP7fRadb27GhBL",
  "key20": "4MUNBMsFFJJjgqioCnpThRJMbmLZEChP77NJpYS8oYEb1p6PAQ1oQF5DWqB2yMKPGDrkgtuJFe2f3jxsFHc644Zq",
  "key21": "XC7LV7Yy8XC77FWLEPn57KnxrFXLYjhN6TAUTCo2A7o1T6kSaURNTPvCVRt9vcH3KuJ9zLYHU2nJG5DBCvb4ZZ4",
  "key22": "2xiPKTcdjNW8L3fnyVW43aPwu6fkgvAQ7DUkoxxg7CNZKwdndNEB4ebu6dpgVBBdwmnth1siRi4bew7ZP5CiSyqv",
  "key23": "k6P5dCYCp7pnRVFfpESgGc6bytrCSeBfKr4qneMpJ7KJrNkVizvn8L5o8K6Pm7of8t9As7ViJTLAEGK4swux8a1",
  "key24": "4WtzzbwPYwMggvqfNNVriudYwBjw8RmFsfRNvBHLjeozNPU2R5zd956Nd68Uh6PgRUjsiTurvmB9oMzak8MRGSUq",
  "key25": "KFc4NMeTGiQaKxSQUvxD5zs2a2APmeFdr1chdA1YQJ1EWJD9futQ1C96Fboeh6oZ1NP49imuf4tYuNELzVb1YzM",
  "key26": "4HiSCboYnCPiuWhmijvH7977qjpzCQc42EpsU4ibqrfFq8ye7rWzSLj7XPkdcbhcndUgUHdxhFVZn2GxuEVfNEnn",
  "key27": "qx4SkricPSGpHiNyT9bBpXZ3YTpAyq7eCC8HLPdcCC7CHAGoBLFKuQ8gBo1jwuQ6EByc4wQnb2hquz5ZPYoFdcp",
  "key28": "26ttK2536SdsNPQBKFHFXZnK6Q9wRb2G1R9JMnqdqz1ryw9GEABirHRLjz4NwzjhX1XZ4LKNGnoDANKaeK8MuB47",
  "key29": "rXxu4kyKUphAq7b2bhDF5pD2Gs4eeKiudUYNv3gD35xb3Xcc77v9RgjXqSkMUy8AXhAusi39M1EziPmV8JdXKQx",
  "key30": "4MJyLLJWtcgAyB4oZ3ZR6dHVoR9bPXFUcNV9NPGyDq1xw6aS63f1wpoT3djYqbZFGP2NkVYeBm5CSHuRv1yyKcUv",
  "key31": "3jDmK5z8K4dVrsMNMGjr199eSag2tEK5BUcJeWhbdvVh7XucJ4LnnWWYqrTWGS1kRV3b2bJ5hj4DkRPW4H9L9d4D",
  "key32": "74nTPqAQsW1djuiGwGVgMcCNgEAb3AqQizsYzAk8jJjZJRSAvzWZDEALP8fi9oNnPeb48YVu9DvMpy8cicWMUv4",
  "key33": "29LKZmiqFp7YzsfBk6A3fwca5aMtZmPQ3dVxQYF5YYwke46B8aGPWEKGGx4ejqW3Db3asGE3uf3vLSmqGYccA4Sr",
  "key34": "5pgUqWUSBUiV8RZACR8HAY8aPR7n7UdpzpJP6uHyWh1YWLEU26necSmqxPnCAf5ug1yPA7QVMFC5utyn3THxRRrs",
  "key35": "4ZotNbe8YnZkomSpgbjiBKr5KTWrrph1N1bhKJWXbFvnc5RzPuL4Qo12o7DyUmhweVt8zt8sNbJfpUhwV1NiwNwZ",
  "key36": "5kM1NMc8Pc7xMTTTtWX9prtHeDWLGWnb6RqGd41iS6tCZGDgFWBaLpuvpk8cXtbYMPFVA3WUhQxj9YPZPY8FLH4",
  "key37": "61PmEKJJ1mTjUiQKiKp54UjWzebt37xNFJwxwg9Co612gkySYcxRTrYrKvJpH4RfktSWLzpqQTM17jt1sFMxuSDL",
  "key38": "3eX5GHKSidHFCvf4gusKMy9kovDxp3FhvbjuRwjDzQ49Wp15EYtipCsfgbnM3S9Q5ZUE9oPo5DTTWQNbCprHmZzA",
  "key39": "4kpP6ytqaeMoPorN6yrvqaVsEnHwn6pDc2XArCr2Jn1ZFTcVUtaCrAXfqfW446zHyBqkenJaJGxZHeqd7VvndpRY",
  "key40": "3ktmh2uV4Ee7coG5TnZ2RDyQcCoGtbwJjM7yHWXBn1rufYfHSaqkboDFUi3N3R76AC21mGtpg2JYxt99iiqB5hMJ",
  "key41": "2bq7Lz37oHzzQiogU7i2cxWXJo5N4Tzu9K8WZRR7fKcvyj7U2AV8QivjASKrJLzt3azNzEYvhgXRrfR1HMhJsj6C",
  "key42": "BPc9mAarpFhg4YqoAnR7Yab5FzfpotTXUoou1VPQAVzjCnTPZGjH3vD5bqsVp65QxPA7Up8vevUdnLPkXDixzKn",
  "key43": "3yt6wquRu8NRgfofPcPkovHsweWvpUCVsBGu44HFEEskofHX6heddzkKReVvMN2G97gwYzBKXuZPddXViaVb4hxc",
  "key44": "Q4JNQJb39JnFnCpDeqdeUqw1B3RgKGpjjFgZH7fGjzewo2Zuwx2G2QhRc3GZfMJi2mNBgbCdwauhRAZ9RXzXLTZ",
  "key45": "4Uj3vgsvUBGzq2DAfRJgHLL1ivtdqeiBZMKPau4xwX3gXDr3Au8ye7jFMukAiWEfYVwD1wJRuie58D8WWftHh77v",
  "key46": "4Wp4sBhGDg3nDdkb6VxHkm5vmYbyYgRGioszHojPq33fNzBmE7i1bck4MgMBX7M5j1Wbp6ngSWrdgXer7yVX5XWD"
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
