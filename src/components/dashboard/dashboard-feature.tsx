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
    "4WpocEwwVERRxZY93CtVSS65WCeD59uSXcUPYxbpofaPZbU6FczjPYbrjLyfEN1wn8mdYf6d8jKMHqVHkgoWSvLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RYDRCZbiEwenkHVNidbGLVxdaujnAVpDVLTA1otioCasXHCJPYvXFPcpHZyuw6vbL5h2zYTPJ7pkixNnniY2Wxe",
  "key1": "5mJ7Hk7hSvMioAjAr5JiEHz7QNkkyfnziaxiTH5oSbWueuXCuA5BXJJBQj8jxXoeyg2A3U5ahPj9Jd22vdmDAazD",
  "key2": "3wQ88o2qoZPBuSdHHmanxZSGhBu8Py9DVUCLoq3Fb4i7k15RiiU9spkgGMiGn4HKWYWtdaZXLPXUSLSj6kFmDjxf",
  "key3": "3ooEwdnd76t17mnsCyCMSShv3JVEmx85VJJ72asd32WsXN9DGXbJ26WzefQTgd9NQTSycEVQXHs4sgWxAUBbAyYX",
  "key4": "3LC4jpTsfhMR6MwrBQjRqi7vk8Nh2xfhR62jHZkr1Ni9KaVhTHJDxfF5dvJNTqdU2JKjfjKVaXysskoFBb32mKcw",
  "key5": "62uGm5Cv1VoVX6stNrGXDyJ5FAB5GV1mc7fQDdH9HjnY1D2ehuxCMsRqnVkKxrob99Y6GzbwVojynf7pSTd6B7tR",
  "key6": "4q4KnMzswc1oLGY8xV5yarEnoPVKkxpEVpfwmjAnGZUdD1BuHrfH3MSCh4M69HdanbXchj5VJi8sT1Eo1bpKzEQr",
  "key7": "2oLxiePBsnusKCriJvcxFhwcL9x38Q5AG7iXEVnECdjVAaZS75mP6JfyMd783z4XuVLVFWeVRSxPqhL3GQHGKmNp",
  "key8": "snvQ79ge6gNyNffdLYYBBbTHiXp7qm2HEaCNprp4XZjnnymS2UeuEKTE71WJ8t1ciKeki33SjDwJfR2ixZPREdz",
  "key9": "5MMaPoozaUZ6w5Xr39y17Q72eraeVk5BFxoXNqUkkN1haBsctNjXeJTM5iQ7iiQM6G2F5hGwssFvtrAauJfoVbVt",
  "key10": "3b4tjwi4eym7Czs9Pwi8PXq1Qx9kbRS9Zhkz7Uvp9jkKWNhD7BLJNfLac8Cx4xJqRZxA9pasurGCGHqrBuky5Nzd",
  "key11": "qHmhDrjUtRYsVTByXYfFBQfSCYfc3LPMBH3mt3rwfnfuPp2XnzycXwGveJGBLqSMUxbwQ68rSJr8t4bYkxZvuZK",
  "key12": "FiVhFvES6NvqtdP1bUFjanV7YAX1wmHiseYrxhCRQraGZ53B1SPhQYDTBZX2it6LnpBHREwwDSDN8HRmbktkTtW",
  "key13": "26sHRLBtvWVVgkXwQXT6DG3khgPD4E18gRNkTz7dz4os7K9c7RBQiXvSaBANCLKK3n4mmGWtdyWJSJfz7VMJMs44",
  "key14": "4eWLXQrLL7PwVk8MhFvBVp1fU2JPpYcdt51v9evMJEDdxo2tyLb4Thw14ySrMgvm6sGEfEVc9krhnsF42DVU2Prf",
  "key15": "24TeHLxWFJpqzpDPKiSAZJdsKdQdZNWJKoWBT4RHGWzN3FAeDRRce2im2gxyU52BgQZ6ZKoq9ztuFeNasEu9MVPY",
  "key16": "3QzXMX15dd29jEGeMCjmMcaQbk7Zpkkza5fMp4Z3rq4tRDy5vJqN4xgBLF3sPDK8vwUX6QCAvmDQJYYnPAcjPepf",
  "key17": "4u67nusmrxiZX8uMGbztG1CULPPENGMHiLgqbi6fEKiSr6T3D4uK8HgS6jg7Z7VsEbv3N7WXbMoUUw3RgnAbXYrW",
  "key18": "5RUAppxH2qCjibFD2jtXriGVaZHzyoQeyE8K2YYnM6p3FDYMvuQbja7879AS8xkQxX7sEEVuR79QGsdtpMmM5vSN",
  "key19": "42yF5C2eU2P3THTejFa9ZfA16Szdu8JS4fh5QFZ4LS9aCGUNo3dNPbdA2JQcSjRBZDPvfmfjEJYh41UFVAiErW6W",
  "key20": "cce49PSsVT3eRybhrZLkUvTGhEiYgrhkZ4m1oibaKXr2qqojL1VY9ddHZ145384LLvoCtkdpFq8jxsWXVh1op21",
  "key21": "5hzpTPBkXoUKsTNpG8XHPGpDr1tKCASS8pmLJSzxTh26fr7y8gXSnFWUgSVQxW7YVJi57Yc5cBbtQCS4NbsECUaY",
  "key22": "3SQzPez3Gy7LWN7G5785cvC3L3McU4okK7RaMjUC1Q57xnqqYP8ut1PmjigucXCMuxtHpKRkmTgqsLj9qyEMQq3r",
  "key23": "2aEShJ1cVXq1FsPzAekwxzoE8yLyGGtz6HSHb242RNLs6JDdWWzFJNNvGmwP6oCEy1WdPcK1oT3MeC25SMnQLXjJ",
  "key24": "4bQ6qY8d7JxEKnbLSh8DSwHJTk6zP58Hhyhq1vKwSokZKULrBV4HYif1GLErndsxzFirPmRaSyrL5W8bZGwuGBuK",
  "key25": "2AYFPp1QmhEA84uACSn6gqNY55Bt6myuMAKFqDAo8kkfwJTPreeVDAMcyqbwwdSqskwG4YDGu1HsUieWWr3kmnWG",
  "key26": "5uSPr8z9BuJ3847YGpMwNDexkGR92Uz1s6joExTuK31Qwg3MeCMaebp46gRLp2svQMXiMFEhzytVS4MjehFMoy4m",
  "key27": "66qisLmvvbBHt7RxTQzMKpJhA7PnJz2rA1ugfo38SzkoT5Vt1KxvHuzXG12zGxzYgWaiLpBWRoTrvdbCa16QBtW6",
  "key28": "3VZLSaewV3zt7Lf6qLSih7pfAZr7rjmL27UKghHpXr3XdRvW3i4CS4CsMpfwqMTbQstiMYgrSyp66FpXhiD3UvZC",
  "key29": "3U8Dbt1XuBuuSUyZHWB27RsDRJAmMQQ96D3KGxo3XvwXKCb2aQjm14EH7a9e7kkqQGTKbnHG164Ag9J6uskmSFtZ",
  "key30": "55YmoADzdkkLxMEe7ssiCe1Fq442V1wjJacm4PjTrhsUpqVctoGySr2Rdxh1s9UfTueHAqUk587cPFo3atzjhP1K",
  "key31": "PAikKMTncY3NB5fdfbeRvxhkv1UnAPMTTU6TzC8C6ZqSuRPbxjTyHFuzWPD45ZDyp4H2AQ19FXhABvDSNoGCcqT",
  "key32": "ZPMN3tvoGf61w3XEHUmZGuzxCUgccRczFooSsP9iR4dBQPiY2GX8Kz1i5AVsk6h6PQrMHqdSvNFTwCz5URoZhzZ",
  "key33": "4qLz8BV2d2ygnCXyCS12UUcZVbkKs5FLuuxGnmBsEGHx9VT5jvErKbBsNorecCb5v2PJR6wHFqgHiPFpNSJ9h5JS",
  "key34": "FAhkM4zwNLYSvgRUJSa4agDXnPFuce1hQ5rTdwrAjJJ1fwa26k8kL2Up7SAs7zV7nUeSER6h4sMzRvwhpfmNdJo",
  "key35": "4dbsDUM1xtnm6VA8ZDsviNBSJQ5MQ1qXb3FMeY5uUNzL5qZ1hxRFngUwExgGSr2ZdV7Jdc384gA3vigb2zpxgAKQ",
  "key36": "LANSNrCweYRA5iGtazHNb2mYZsvigmX3D2zGFJwxTsBQxXpEGKH8uN7a5hxdR1eAgeoMxvCH7b35xqJXzjVVdwU",
  "key37": "3pGCEsNscRWyNCnWe4FkwkqPYUFfCir7zkYVVbcasPwEzgw7Z7M3nproaZyX82CoBMjutxP2oN1UCKUppaAkq8Y",
  "key38": "xJFaW1bVwdtCefU1fSdPoYgJS7rLyGWt6dRqRNy1FMbG9S1yvd3CnfL2V5bMvoTjMEbvZWwnVuki31qnY94gJcg",
  "key39": "2T8Wds5aAQPvG2BVo6dVSw6v2nVpkcUqwRwmSedYbXqBV5xEGkBLHCpfXs73RYLn5wBY1BXmDAKyU8ynZMHjxavg",
  "key40": "3CuJDHmXZjRjeC9MScveaVd3H9pALxRhhnQkwryuyqLrCcBWPLf9fhAh2WanWraQFLXwgVAd3TWcHXrWbCbrn6vG",
  "key41": "SrR81N4VDS1WTUmWXihWQpUuCbL2yjwBaJ4ktpK7ry6NyhPEV3E8hF7WV8e2DWpXnoV7fMHaWBH6umdephxmRig",
  "key42": "qZBgrfovPVCDXWagG7Quv1JWjMyAFohG4QEmaMVnmQg2hr5FieWWXMbg2uQA8zsFVs5UjLc7w2kzAXmU4oGqjQT",
  "key43": "4Hr2mcugZjkcMHYL8rYtnYYGJD8Uqh8eV8idno7NsMcqpX6T85tQfgRhd5vR3q5qf5R4CHSJE9Ht7qqsqtTwRBNg",
  "key44": "rHusosxaCSogSSHuWHnHchLWtfXTrApfx9ApqXcqCXSzdsNy9x47Y7vUMMqMYcugLT2okdAtroomYFxSzz7UG8j",
  "key45": "4EuAzJ1dxBhUQMXpqyxzk4TEKt6N3Y7eG87qEraGU1PBssUqsj4ffbFSHiLhUVcX3TJYxJ3Z154Jgo5G33atMVQx",
  "key46": "3WybA84w79Mspfd1u2tCGoCDGStQoj6bucyhcg3F3G2y5SnqwckzoCW29iiRZEkGibBUwqsJf2Gwpuh1hHbq3x9E",
  "key47": "61rb7cDdpirwyJBg2t9VtYjf3jnLWTg1bCPkB2dXSea1YMAknCZ7mMvjSN6SF8o1HhSdExtcx5UbYZYi7dvhZEyK"
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
