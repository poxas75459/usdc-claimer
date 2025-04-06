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
    "3qgGEfDbgKxSvgqGDQoB5KT3XpbqQPLrcTJpR1KgGu7PtzeuAy1L9kNxg5CZknFwy2NftBxWXgZEE3LjLNaDfY6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PhGFinhLRgQyFii3ZpUERrGaoBrVydkACQM4QcgbPSfjRqG1Sw8aCo968YCacFaDhnGZF7FdLFS9kEniySbz5rJ",
  "key1": "5g5UUXNN3qaay3yTx86xp2yWWVzsKtQ5dSZthWmm6DBjQfwfgsEfKkQYPv3mEXBERPM4LfrSdwQzJZ849s5D9F3n",
  "key2": "3aRRTFn4ZMaQtsyZhMDsaDyQPu7Z2CFcAh2h3kQCgcoKU7ZWnpEawNJzwSbcjk7SFfPpKiWq3s2d7dLePcPbn6ee",
  "key3": "45Yq8vHgus5j35iTgHHMteu394YLWoNiSF8BTdpL58dqrf7vJtveYvs5XfBnnJJ2c9mMEK3dmJmM7FEhir4q8Q9s",
  "key4": "wTApNjM8oux5iM2nFfmJ2q9NFiQ6jQtSAxeuTxpa9dwvvqsGmeJ7EUpZsNAWP3FhqzBnrThZwVyNbYCrnYDruN5",
  "key5": "5oh7if1UecJvnUaeVY4K9arRLuQhMi9S4KL8cD7oWXMC8KSDNgam8nw3FSoyFAcuvf9uyLmZUXDbyreH49H4uGEM",
  "key6": "2HAJXZepFzQyzzGf8HSTsMAV8wbGFTWiie1fiuzd3ft5synLW1AsPfZ4R8gfMF1FRZRKttKnRowBARTYB3sqrVeP",
  "key7": "4qxa1kXTFYWhXmMCAnyRkunUNUcNagwDAifBcJV2pqyQz7WDY9Zwm6MJmXtwzWSESDCXE4YRCBDXv1SjYxVwiwVp",
  "key8": "2ygcFpCAm5QEDCj4wnhXZ29VjhHYKCCS7mkNFSqPFYud3edvwoc84u3UwPTvHQxotQdUeY923fEdNXe1XS9VLMvq",
  "key9": "4mPrVFsAxiMH7H7SSpggbavPxFjTUUkMpSqkQdMWmGwN7m5L5tMsn6q4Qqj518EBsBYbuaYkzyj3vraYDTRfx6cB",
  "key10": "2Muhf5f1xu5LevhcZLGwpuXsED7j3SLiXQXkr5iZnX5mjk4K77BtG4L5swaXxuE3GA6zJCpWU921uraUcT66LNTz",
  "key11": "5T4X7jW78cgv6VR66LTe7pRQCn4evEaw6hDwfvfkv3B9TKJU2JgPxF1kcSiFfkC385PuM3DsbMDtuFvuNWceMWxA",
  "key12": "53bSMYJCtqvg8ggRyHGZVh48iWTMaKWpdsNMiRZh78EN8PH5qzU5ZQaPnXfjwQQdD78bEmGrupjALW58RcvVQYku",
  "key13": "x6fJYRE4E3XwTeDWb4T2565nH8EgWdUtDzdTFLoWjbF9Mdg1xWqEx81RvEHwNsuJUZds3utjs6aRAPrzwADRr3p",
  "key14": "4FYQoVzt3a3ZzYCUV7Yf6GtQicEF1TMprnWxPdZbMyCrC3HNFAynjPCGPahD9cD4MrrxqS58whDcEviDSNS4fLYF",
  "key15": "3evQLFeEHP5PdAN1iAW2bK7NCHp1Jradxe8R3FjkTt6cLXhDstdXtKNmWBsBrDvwwauyzVMDH8r7KpgvuMBLnjoZ",
  "key16": "5LT1YhNEuXei75oT1MTGAMmPpK62w2KYL9xdsrvKbUuPyApEiuBJ74V7YvSDXJpo69ocfdMZHe94Li4q8HtP62P2",
  "key17": "4oYTiQZFeXPfQ8KgJBFrmoSU91HFP4UMxS85psF5T6WAsYZb362dGtX5FwBNf97XhKn9DygRnsXrF32Cxz9QL1MJ",
  "key18": "UWDS7rp7t99PS7Ufx2eaBar9cq6KkDyt5UeEhxAmhEjRmPwBTZjwLB4xziLVck4Mrg49H4zBNHCnybGWqSvZF8B",
  "key19": "bJnGXJU6VDCeQxwM7dZCgVhiuxYCoAqauTwtT576EuDMkUiEFnusaqi2BRBLu1aNaBZ5cNheznf6GjGZYVoa9GP",
  "key20": "KkBdyS2YiCUdhiocczpWJzwY2DViQ9tNAvyDrA9bwRWjh3L74Ae3gcDwKKBWEFyVhZwx9PM6nK3TR6nVy8tJvSU",
  "key21": "4q45iAUdvyrVgH1obZDoHNLjQU9i8PNCfgfhZ8s2tyqgmbXXKpdzTqLgYaFbzRNd7GFbzqQWyokaQBg6ztjSofjc",
  "key22": "2SZE2mC11z7DpThSVUjdcBBBWxsbK6YCvczb17Qn2FuemrfQcsXWZccRtazdAnWmPHtVn8GUoFQ15jBhVfnEjNpY",
  "key23": "4bvWG2wbfeSDZ5CJ9Mosr1hD2orHrpUzxdWC5yqLA9h9mHTBJwaVknTeDYH6T4anQGjan1f35DkmmL6r2ZEzm6LQ",
  "key24": "3P3LnXhMeM2FRDYSKEEgug26RafiYRxkxnJUUuM7zQGojjWPXcwMFLn8rLQJjRTkV45wrC35HJCmsDSjckaXU5EA",
  "key25": "58rk1vazEqqmqLPYF57zAduoZr7MXSX3WDDHK6xSeQ1V976CHvk5GBiwuuu1BVPdoLatju4QnP22UJg3spiLugb7",
  "key26": "5yX47Ecvaf9iPpiTnJwdTU22r1zTtEhtT2699CvE9tNzLJdq3qdwCv2vz1Tmxfjaa3Uqzn5uPJCTbhmh2QkYqEW3",
  "key27": "5zaBBBxY2nNMvt3KcaQvMBuaJnf2SBhthrN9Qbxty4xzFcHVmNqkosCdoNsSpUo3jeNJKTTPYRn8dATfMCGu4Ehr",
  "key28": "4Vg89ZnYDQ87FpeUurXeThXYe8hhhVYYkP5KbJ354ndbd7Qyvk8Y86UwJ8uNpuWey1vLKZsgLBvJJhpop6z54Uee",
  "key29": "2u18kXdbdk7mHtBNw7gf9QjSutV2aqDdJ23CoLAsjfyw5LMvhGwjSqgtQCmF8RyccPN44E3mefXtkLwkS43P5BWD",
  "key30": "2Vf2Ey9y7zksdmZzAB9yYKJ3uxw1xHs7oCRe8XRGLctbZk9zFWdBLVHrJERZ5Zrd7Ku3J7qD1tGsQaC3jwghba6a",
  "key31": "3uAByBMWZhZmYYiQRE6cASwFXoaHzLN1WBGmxbUeC1VwXWR2uphNToB8z5GTNJfNRwT9EMovzyECfuTmRUAeLeXp",
  "key32": "2HhEVrjiAXoXjbso8J8XuCK4AT8YMma2M2x7P6FMgf6Z1miDK3AWNnWrrvNraciDm8BbxzAy9VhpQxGhxNFwqYBf",
  "key33": "2VUyqAQSXuE2UtWSppvGrpBN5uEbVf7hDcGfs6pN3juoKcY4GWwbWJqNPz37DXZ9wUiQipki1ECEVDpfFkkxECVq",
  "key34": "4LGu8sJS8YnYwWAFBWrygp6MSstNAhXNy2RopL6bZk9mcVtkuvZhKLGAT8cVxWB8JAGqFT1wMv9kWPWnvfqzbuzv",
  "key35": "4y6SGmwK1XcZ5pWa3WdHX1vp6LwJ27mwVT35kcLDLk13CPv5meekaq7M2EzVXFkumM7v4NvdgbE179S6Pun9Q8o",
  "key36": "2ZuCZ9hg2BAkYeFN2ZgzZw7KFrVEqRnJ9uDCU9PFhZxXmxJQbCBDb7yArcbiohNXPKJGHbzG7496riQifEgeB9M5",
  "key37": "4hTBSnPD7S3pQVrEwtUqzkWXF7xcBY29xUCAPJz4kUNkXYhE4XWAjm9FfJKMzhHh3eLcgQXNy3GYSdgZhiRk4NSj",
  "key38": "4w8mUXGQ9NvJVHpJjnFCU6LiH1326KMZgzHqqxbH2hpWveVVgWiSqCXyJyWc6ZVooEM13U5HKdGPmgmkmgJUsonB",
  "key39": "iXTUsSBVZnU4eSi6P3xUXPV1UbKhrEMysXWQ3AGrsFLf1tBJD5mQWHMdy7sfawYJANSC1w34UP2HLup4XxRVa4K",
  "key40": "3XkgSRihvoinZ9jLMG2b4MjtgtpGa3fXqaP4N8nSxZr7gqSQ1JcGmv9JTeX78Kk3RWiLEEq8PGv8TnRRdincfDZA",
  "key41": "2rAzzfUM6VRygvDxFZPZEbwTFKvSZUTS9cEvTDaUA8YXnWXtaqUuREBi26kcMhr941ZEekyVDpfced9pXtfnqfAZ",
  "key42": "3RZBLArLNynQa8Zxf1tBiJndoe6ijoA9KdddMS6eJQrad5Xj9a8mjcE8uUucxiHYC7tv27LTY7CgWWxoqAF5JdFp",
  "key43": "2X1AhF7NquMPxL1gTBRFByHR85kwC6w9pmuj5wTBF3Mi11GtDk2B3nQ2a3bgsrJdJnD6hNaqkRqcyToXNDDpQJNz",
  "key44": "fBdLaiDQbnmPKsQUYnLeNSG5JN4EV1zXZkLxvMVDyoS39m6egTukZy2Zwqt4MfHQG3zAscAw65Ne99Ja3CTRnVt",
  "key45": "JuNBh1daGg7gctXLHy6SLUSJ81CGAxuph9v4UmTgLXzsG6vLGTzmSzwDYaqnTSFUi2dyek7KimH2zHJ65to1igt"
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
