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
    "vZWTZy9d2rMC1RK3ZuR5EvZ8CmtB3UUYTp9n8cX4XYGVwh5xUV74xo5q3FKdD9PrjUvq13ryyr9D1zEjTebqohD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CwkkR1jScBUVZLbVSVAv7PWkQ9L7mm2VpXzohQWZvacRYRp7w9jXpL898673UgUfDTeLEcqofhr9opa2YxcUajf",
  "key1": "37w9p7mbUjs6UrKg6ASMHnVfeEtsn5UQY9W2ySdVANdyzNY232fSgQpr6Xw8vpYSNf5uLqTdR8csNkTRGGypiHUm",
  "key2": "2xvQBJn4AncmyRnZc1dX5Gn4rEpwm7TJkWi6MPpbo3o1K2DoJ3XTGcimHoCtjsccEwXPVJ8mxK7xsTHpJSt4ajRT",
  "key3": "vNeMWKvLggg8zCLMW1BFNpEemAqkJnmKpKVBDFFktMxichNrhi4MVDCeFuVY3tSd71oUV73F6jEzQJcpJx9bXVv",
  "key4": "29eELiDZnQaBcmdd97NZdjiHMZ6NoxQCWSSoC2eLoWdR4evZdpWKo5L6fazVqUJNf2SWyJQHF9ZZnQUjFDcwnqnR",
  "key5": "5GuqLvM56bZSZwcDjRsduk5Ep7xk8H9QGsjsEYLegnaDt9g5PSK4Dvh15egr3Zpqmoc14JkJRdnQpA7rXTUcRg16",
  "key6": "36aUZreS3kNNoMruNe7RdH3N2pqZHiAJ6CHRJyriPajtp6rvCSYM9T4MUftMJLZ6QZKyT4yG1oisYZCTwtNCKeps",
  "key7": "2M2CHPXZbDgafG1f6KnrxGF2azqrqWwJeLG7C4namk4tobM2fF79Zsz7fbP9jvbPzfTWwvZ2G3Th998RWi5BZJJs",
  "key8": "38xWZfBMwLXQH1yRiqFsdPy4d766HXXuE9QGnGiPJyWt4sEYh2iQ5UXNCSAb6Qc9Cddfd34thyAosx2pFEt6vaWH",
  "key9": "2VTN495DG9bpwE67th1z4p2hfTze8vK8aZeZDcmzPQPiLFfRFnakxTEWHw4E2Zm8Zuqym6i6VMHwo677JUDFpAzP",
  "key10": "5NHBPYPSDw7NcpvEZcGYmHMMzVZmRBr6jumMR7C42yLj2SBNSYdPw1SLJDrTdWYfvpo5iNb9nDumYheArGz5kkpe",
  "key11": "5EioHc8T3RT82UYFVDNpVknxBCcqt8LzhLUvtSNSsXZtmoNgSkHgapMQrHPKuo7mWGLeoYc24tnZnxSToSAr5222",
  "key12": "3doNLZtSMChd2LvXFTGcwB6sqMnxHKbqYcogsYyb1BNcVfzYNo1RTMSEStoNC5E4kNUwo5LEjDZXtDRVnRGc43WT",
  "key13": "2TKW1QcGekamcfL4jZrZxi1jYZ4Cwvgr4zyW1XjWWHFx3H59xScznDnDZeUipPeUcg5J1Aeqq5oHM82XQsjqKDpm",
  "key14": "4Jq6B5pYJddt8Ca93mSYRLamXDXznYyjc32RzeNsSyAL91Pde4HhJ6sJhzfCthAw5Qh7oXcXsis4orw26oAuE6y5",
  "key15": "obrU2s16vS4DsxxUwxtSSwVaYqaZkndkvoS266yp3YyyRoBHfoqCMjntpqZkHvQRrGnvVmDfCbPqLBzSDPT3jdr",
  "key16": "3Z43TheybK9YzDrDh6U9h86AUtcVhbfBz1YSpu6ungH3t9nh4eWKHnUYptGfDYne1ywCRyA5SCTLQqTMLPpxQkHx",
  "key17": "2MAAyRAFrm1BGNupQMc36q8ytuhWKu3Jzq4XfYR5hG6SmDDydu1dG2NPbhsRqA14XsPuNPFzeRohD8xdLTakCAqe",
  "key18": "2J16YCqXyDTBRggAH7VFSCNzHgtEbGakvphDrSa4VSeqSj3Whh7Fg6mbUBtq7JCUyTKPfHoY9sC4vM1nnZRfMDkh",
  "key19": "2vxkUhLs59XyFfzwbLrPCT988bigGPfRkqGarrBF94uoeDby7RH4EtAF9xML6Z5TYLTn513Lgvno36SUiezQY2h1",
  "key20": "DGzVsukzmJ9MbYitBCqmgP4HaYj47xzSZcyMGHhnt8fK8cPYnJS4Fc5ErBWiewd55Ldyd5TDxWrgUKdPjdifiq8",
  "key21": "5H8CSpwn1JmcdvR2vda72TmqDtVwP8eSrmmQSQ96co9kBTpXLRRnuiA4MGhvaDHxEEySdExuYwCgmy7hsvWcQs79",
  "key22": "3z7PyBCjiCYySFod9nUt7jpaQDt4et8T1utZ7XxKnrLr7heGRAnwWH1mBf9jyEqkbAKpKfHTfJBWwRP6FpWs2U5y",
  "key23": "3oJKz5gpBFVp5x6TtPsCs64kuQjB623jwPua7xakJLjcx6cH6yHWhjxL3wG2jHuKzybuGhvicTbqBLyAkMoyx1Wj",
  "key24": "61V789DdqzwtDg2BNhr44fzpih8zxJyws6ApVAMrYFyoAp3NzF7QJkBEMoSS5AMUNEpF7YvHQJb55U8zbqEbH5qc",
  "key25": "2Ph7oC1TUVnG1wmW46AYFD2RKAp7wGMbMSgiM6CHPZ59D6QM5VyUmGayZcVarJVfUBsQhfuRzZ7V9C7LtrozVwY7",
  "key26": "2iCSPSxcsatzqf9rAQkUgRo2YeSA9v4CnwnbNELLcCwFc5gCYxSqVN9CozL9WseYKdAARvFfGQwHCmPG4cMPUfaM",
  "key27": "2JdLDuutu7cDSbYczKhroAot5TqX3g2sEvsJfWB8Pfra5Yq1me8mPGUpRrNt3Tx6naTMfpEbcpDDyKKkRo2nyYBw",
  "key28": "Jfxwf8k4CZZQczUJVSwjL7w93sLqmWh51GJ5ZrTSoB87ssnw67WivXJ65WwwvedfomsCF59GKKcMAnQowiBhpuc",
  "key29": "3opWX6sgruZaw5WdRxRmtPkjf9a6hNV3Krd4YDeSYHQmgFty8JbVMhT1ZfDSN3ENoRDuVK7NVdBS7vpNWDRzwYbT",
  "key30": "2gpHDVTLrMDYe4eeTqyZgUEYKg2MVL54gfwM3SuEtZrEsjrEZk42ymF6TwwS1sgqDAg1oeeKcJsA2oBn2FoSfLt5",
  "key31": "21bTPuEeFZVtistZsm3MN5oXMnLQjnFuV85dnLeMDxU1AwSboYNrRWS9qKYASiWMSm3xdZKZvjDiBhG1A6rY9DmT",
  "key32": "39Tq6pFVyyKwmfbHUqvNvANnW9A4MkNt1mp3a5JbXFSk54J1YiQ2jdybDLHwHPu56PyMtBsdahY8u5FjWaWeawGR",
  "key33": "3ecBZJbS8LBunY6nzr2fFaEvDMbDf7kxjGuDnnuVn1ue3WGFzaJWDDf96p7zqVDVgryF5uVkR1k2Lbt3MSpNfN11",
  "key34": "y2X4W6eooLkdFWVHiTvtbqCLWbtfb4syaT8hj2rAtA36ijYDNhscJTHa8CPhWHzfP9nZuSN39rndF2iuTgQ3UsG",
  "key35": "5F53QST24McT9haCwMdRyerPCiwt7E4tq3cAwR2rRuqyXGKiUPcBZHh3D691h5UB4ap6aJgVfGLymu3uNcALrkLE",
  "key36": "jxsKq5ouXAt2WtyLJyFiv14922di44bwfcri6fr16DVQiqaKSoG6RtKkvGnG1fF8wjcziNVhegyC8M7oyddsNwG",
  "key37": "2xs6WDLMd2FkdFA5XREUXcxTTHHuT3emzaYi9Wgx1HrST6VVvzRwwdTiWpxnWHfnBzJ7df7bd9sV2yL2rhatn1zJ",
  "key38": "4TGYKupP85JcNcTUV9yVb8cMWX6JuMDBYACD1MMZyvY7Y5hbJmyn1Bozivpe16JVcdA3WM8oQRwdvAZ3HufUQ4Cs",
  "key39": "5nMDkMgpWXeMhecSettobpX29M3ntXBvxuAAPH5bRWpdGuZLX5Wrpm1hNTH1HVCWfLoUJdLZv86tN4PWVrSceMoJ",
  "key40": "39gYaszshbuFouR6MPBVtKCD22CWQoEG44sR1duQgi3X1LXkWpkdHmYRGTyfTwY1stD6uBQzgsNADQj3FZYsMy9Z",
  "key41": "2TpHpSFwR95ibPuQjFPr6hgAXH111oGgGQn9GhHF3u5vtY1Tt5QThUct8AL1TAddQoe37DCVRuvsakhF2fcAZHSc",
  "key42": "364c6imNFWKE1uiEtdNwhpLSf3kf2urWWVfgEqoN8Sammii2JyLXpVs1SSoxFvLmee8XosNJaN5A9FiwhPq8S8Ho",
  "key43": "5feGRd5rkGrQkBcabU3BYefovX7tmttGsZmdR4vsueZr2KuKmV5tLD8etqqh5njpWMYVm9Ydy4XUyFYhZHFhghtt",
  "key44": "s1CqLMwcdMo7QutvshLvKPt2z2N4mMrfYpZSV4z7wmxXYZC7cDdi2M9vL6sHnmo4ysdUWtVzLky1sixfp1fqF1h",
  "key45": "4P6WRWMZTCBs97W2pTvVg7TK6tWNcxwQHdvzmQjbSc52U9VyGV6QE7FnLxryrW2PmVkG6d2jucpaFyo96aKnPWB",
  "key46": "65QctJm3VzCT3PQaBU53bPLn4cA3FbeerStefMeLXBFSkzCFHLX4jZ6DUmgFpW9oGC84Dv1CU7wvooEkPERsnzqN",
  "key47": "4fMCudiKm1FHTHg1rg89eFMzcgkzfdSLwGU1yKyio3rz7gaMfpYbWjDkMhhar33hupnCJcqauhkinxtpynBVNVAB",
  "key48": "jDJwjypXCnWsvPw9rU43Zb5mE89ok1HJ5qBkDn3JwdzmYjCu82L9x9pmBs9dByyisjGdKMyHrHndZ6pg66dhF9o",
  "key49": "4ZpbKZj99W7ZjABJ4U922ZRqDjH97hJH6AFX3zT422xs2WjA9phUAQbnU6wXhDknYSf9zJvJ9SMTV2ibNXJ8q7ub"
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
