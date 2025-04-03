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
    "5eURLGkUryP3AK6CkkHUetQstf9B2vSKDtSdS1aJk5y3A67C7zFfVUjmQeKVNnZ7wcXNLZu2piCk6xMWUN6gEitN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PowXo4oMYP5suKSM6eANvfDZNuj7gyUvwPrpe9RbBcU5EBEyThcMr3E4KavULq8UKeZWQMtrYGaP6kJZZg8RwgM",
  "key1": "52mFEoxEQzFgrjQSpeSaSfr9oACAnzFdo2qLDQaMRp6xMpfpXXNCED2CY7qbknRg2ymTXnfN8m4EUNhFgw34Y9C3",
  "key2": "MP1RXzhmPxftH6nmauboUeCiKCF9WNWpqH2xGW7neviVMjbtxsHjGEpoZVnbZz9SfbWxdKSeB1AEaD8ShT1LKyS",
  "key3": "5dwQPgcWNDpqTLS5LiX3VHHSZT7sDdkhs5NVBxHxrCpzo6PXQ1pyy9H2pHdfmoME1xoBErqvToCoRgKcCxn875Ty",
  "key4": "3vrWuakacDU8gpnuFaRspDXGVH149KHJvAfDJzi3765wHptYnzovmosoFsC43vy7zXiraDgDRBvdNC4FTraDkMsb",
  "key5": "3ACVyJhoCEgYJv9YBqXCQHLChnmEUkZMfnxxUDitG8AinPcrA3ws35sncVokLxhYLB6UmmCKM7QtwQkZUGMDArzK",
  "key6": "3gfkQVBzpwQxBxExF5EWodtP5N6EKjPZETU3s6cCNRmR5LpaWJYL2PWcdRYZCmLEhyAnV2VH6VLckv3yWR1ZumUb",
  "key7": "5sJMo3xmgZF6cri6t73zAXaSVZ9vBG5EZWKJkXwLZry17rYV6k6vLcR4UXNCG9z927aTBQKjnqJQnCHf8di4rfzD",
  "key8": "3PmRt715V7gqEprofm8GYgaRVxWSMzjChCejur6MykP7v6KK8sGepvnUziQQ81MxsRhfJdu4c4KrYuYhmiupp6Bz",
  "key9": "2GrWYGKxtiD2thKpRodGfM4ostGqvGuZLb1Rx61SRzjwRJBWEEcNRkKMu1s4JfnEHv3zignSs8b8wJq5ymw4rG2V",
  "key10": "5r5z735CeTQwrFDSbg49X6EEdBXJ7AWHd5P838ggqAD7pCH1pNjBR5CbymWPttgydpdwLNiocDZyyHYrQHSgrDUd",
  "key11": "2oKAyrxGGG5HfFifhNBkajDwhoyjLEwfGuTq2PCcVX8G1q57b3iE4opJX8yUWF5351o6qWFWhZdCLj3r7ZNmiMZz",
  "key12": "4nJE5w9Zw43X9JHQBofQVpjTU4iChtvmbxg5BQcXYySXteWN89HkqNu86pZ52cufB1WjpJGnMWTPYUjRwkn1oPcR",
  "key13": "4pNU3pPvwfWN8unTBDyM9bQqnsBVzFM9s6djspvuw6Ts2YV4wMp3HZfzVrJQtRdhfCiLJPAGzB3JvyHpjCm6fJk8",
  "key14": "W45ePNM2eFpGXmVzeWuxd3Cpppfn8fnDdaE5hjnXf7zeyN6MR9KZiF7efXz4uXafMZPRtxFYhqroZ4SDafGEk3B",
  "key15": "4ZhMDQu6vBKng5nnCFwKcazUZKbLpwLmWJ6TBSPbTQTZykurtR5b4eUaGLLXAMqaKTJ8xs5ovy1zwuDtTQv71hw5",
  "key16": "2BFzCzPK8zgea426RsmpTj5f6gLd1xj3VbnhvdT7sfKBtiELTm1B2i9pioLbtm21zdvwxLBRyBRMqd5ATspNYk9h",
  "key17": "4ADdiVtPUWvA2PbcQ8YLRcBAf9UFTbdXsGbeiWwHRTo9K2ueYTWTFvZwtHarHHkRQKsb4QqVPcmVW4g1yH8L5LvD",
  "key18": "5A1qCa1j9TjpYkNCW34p5MpbqbgeRKsMSxcuPWFLZLPoLUQaeLH2VHG7Z4Zv7dLjCV98tiXND4dv62rfqkDPmnQg",
  "key19": "3iLghJzGNNDYkThZDQxdvxhJwhgJ42oevZ2uiBDy7wbsUUUv1vbA3LY4Qf9y48zZpF2DJtPPeBJxBGtyhdPioqGE",
  "key20": "26uStoimAaFcksSEjVPS2zNe1qqjno5pRzQZpkzpzXFSjLa8ZVwGUMDbii9xft81c9tR3myZwGcErwKfQ9sjFuoy",
  "key21": "2zTDz5EMVSj1UoNtW5csvWYYPjD9vw4wSXnYT3MXcZKK1Fus1kekA8S3ehnMoRgvZsYbqMSeNyRc15KnFqdBDEKr",
  "key22": "27FnDaR3ePNCheJLg6Evxyo61Tut4crcaTKCgAHzbUNgQam3pFsdmXUToGic6Ag7sLnHM4T3q6NGrLKbYfRUU1x7",
  "key23": "5NpwG9Rkc5HrH9H2pQVcf6KL85ZzphKMj3HffXh1Y9N2gCpzo85t2rEas2JpJpg7ziFssjPdhiQBADwdwuBL2vkR",
  "key24": "uE13uZmtEMT2kKP7NevY28yZhPptfFVkjk8FYYfU58ZnovcodosET9PcAevXNtNU5pp4cTsPwWm6nStt1SbiyCR",
  "key25": "5w9qiamhVFsmA2wcnDceSrhqfjSk9Z1YizRXyPi8fmWTBXcLbfGNvii3spbtq78xWBpQQCTpLKx9zpBvLKEBgsj1",
  "key26": "4wEHxgRzUhvzLNiNJRUVc5KUBVG9EN586JhTQUvapu1xEG3tbJWfUUYjf6KRtaqDaH84NTRq86Dd9JcFSNYzF5x1",
  "key27": "5fw68s3akDPdr2bW8x5j6ooDN8WQa6Gf9Vo2LoZm9z12ikVh5t9ngzGu3hEWfU5x7Tr2hjEhpVQ5bmmyHFQRovJk",
  "key28": "3MaNFsqohDfUWVjpQkDvASkVmUkgP2fdhSpVgCGuhUm7aMNbCd14WqneX1EJcDtcKLz959nYv3gKFDDmZHsx29z4",
  "key29": "5JnVfhZUxZiNzcpYAWMsofqRTgGBgqyb35FBdaKRK1Rzhn6J8C5VxtgnMvKxjTLFfjW8mUxVZj5kNp5K4Qbuj4x5",
  "key30": "5DTPv3UToAXnnE96kXa2x44ruz8SEmQHrrVR8KuHwrbAUW2bxDa7SheAhfWUfZkU7UVSUvtZMRTddXYdjFFbNTnt",
  "key31": "55JpreCUB14cfx76rxzDM7WFbevNaT6BdXn6VcfNw8aNWWDfrccTtRbErW5dCvQQfZ6b5dxni1fSGYJC6PP7jeBh",
  "key32": "5PuFPKh3VD3WsjwYRJ1EE56Rq1cUPN1Q9kzWMn6vmZ1gYkyuxiFLLYGtUcMAzwzfRXxXiiX9rRN7zMc3DWHwzArY",
  "key33": "3E1ZMzfsZUCAW4paeCH4jLBPf3ojvcxuT8893tX7GNtiKLSMLyys6ZwEGSVUmKgJfHxw9eXhvcKqB6YzgGELhSfM",
  "key34": "47tMkRA6A4m2UvmGcdXLjhMpiRWURJYDFy79t5A9ZjZFRy8S8DQTLePgG353PDf478FgncthC1h8cs4Rw9Jevu1P",
  "key35": "5VmyexhW1qY43BMYSAw7pksPNCs97httMMZewyNpZcbyj2Tvu9CekUpAtj2Lf5ci8KvHcXNa2feCu39pQZ7B8mzj",
  "key36": "5Tsga3V694sMr8Y4nW4nDL94JCvivbBqDc4f1shjEtEVdY6JyNTSnbfcfjRdepCxumLyZQeuKhca8Vimsmzcsmax",
  "key37": "4CpKJfQeTUGp98qTfM9pZ9mA6WdKpyTrt1MmpFsuBYA7FkydbrqYyr4SZkaYXWkig7r7S1C9qSpm2QNy34kmXeU2",
  "key38": "KpvbGX2uTgJXjGcp8DU25fQo3KAJd2wu6SkzCK5bXLUX5gNnyxuKhhFgKLNUtJjKYesbN27P12X23yb61aoSugq",
  "key39": "3Q11fLPWGz9hYZutxBLQ6jUj1cSkyLe51nCorXg25oZwMV3F27qVKeqipE94s15QxZrktZ41Cm3CgC2cz2KdC1Js",
  "key40": "v32ofQyJFMxgFK3rBSjuJMF3zoJxoN96nk6m3bghuQM62ozzAY1WLtVtJD7Mg7kRDvg4L2yPw3VZaaKuC4bD7Nu",
  "key41": "5ndX95aG9jjpVkQ8xaGMpvoSs2m6zgUsfaeUBi1m1RYFvzumVVjwPscG6GcGNeMvUjw9RiT9WHig2pAmQYa1tkmS",
  "key42": "5K6Kepsk2u98HD93YSdFTbHkJVS1tUUGLA6PCJEsqyjNWcgvswaMj8pEUHrYW1ZktPsSJPZfKcoWCsfzHNhZQk9X",
  "key43": "2Nz3hdeXxg6oNnQwpGmNUQdcLCbizVk8eBa3ZkGHaPjrSY2VjKJgXqehgrpsHq6YDBZxNTBP8oaGQwPA1xf2GQzG",
  "key44": "bbPCjBBLzwk5Hf1ik4KHb3VsMwbSJMoJPEKSfnZKQZEvZmCB4E1HEj7UgJGrwm7VgKE5cA1CSoJfYn1TCxZSfSA",
  "key45": "5FRem1DFrAyMs4WEKdfUHhSCumLo9Wdz7cfprNNYKcVYzeejekF5zwYyasaHAGYWrActLLDJWUzBdFFdEGq395t6",
  "key46": "34xL9ShuBexypStfxJVLe4tj7YRgqg1CMMrhLfvki4mnwwkPH1zuXfj7TqQVKauWbwbvkmbX2vsihpjdjuKidmSV"
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
