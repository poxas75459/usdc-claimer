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
    "4tRbWEFFBYqBS76pABZ6MKMb41hu4W311BiGFVGqREvobAKsxqm2QUDM77p3DsMF9v7JJRqhWm79HTSSXrQeWXBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ab1jTpTkD6hK9g9asBNL2GnKyzg31waqcH2ntBk9ULijGR5AS3MMUkr63s67PPPQUiF6nNsBWetFcj2Kt6p3eL4",
  "key1": "5CXANjTmqxL38YaMhg5saSHHV6u8qMm1BHurLExPkGo2HCbye62wLVqqifphbjnuRjY4aE8ABiBK85qarMozMKH7",
  "key2": "2LLaNJPm6QYGKrgyg3euPVWwkhBh1g6YmNcWbVJQpp6MUjL72b2vBHfwsobUeuaVL4yXBQDVeqwNNkJfExDgEUAj",
  "key3": "32ANF8BWaD3ArQLs6Yxys6GaUExpwqmKEwE72FRA3aZhGmJzbDYHg7vDmm9iRFKPqyP9qT5ChZ8LhJyAWpXP1q6w",
  "key4": "2sfUqie7p1vEQPDu3L5bk9qGHqhinHAZRLY46YTo3e27zXxq2meyGDQwc16trArbQCgJjT8219vHkxScCvQx4gYm",
  "key5": "2a58Aks4g5FmVDbZ1vw2EaK7QPTXXTehBV4BY6YCABQogbbuF1VF6KxDE21N755w92PaLBFvpvKN3joqMvrd5G5q",
  "key6": "4WY4sDX3ysXiLzw48cUx6u4Ctn6Sp3PoLSVByu3yN7u8AdcEwnU9Vf8bPqhZD8y7hU5ojUABJckPd6crvjAMfAHK",
  "key7": "5S6My4mDmioBeXD8H8QyDFjDbvzfozJdu2VoXxyRs8CJvrf4Zm7vaoJvtznHymGcxDEKNWpS2x8qneREF9Qm3GXH",
  "key8": "4pdkfCr8ETDcfQjyXwfx8iA7K5BpTeEztXr8Y2Ye3sccAyXKRcZhHshm1ZArfNPYhmMZbPdU6VzHhm3PgW4k7Znd",
  "key9": "2AuRwncZvExdbxzjYSXVxKHpuVHPPN5iArGmwaFpDdRA3naZYTGLNbtrH58J1dgx4G7Fezgn5DKam731gtfVuaJp",
  "key10": "n3E221T4jaE75CP4w4Px3XxZanEkV1mexitWYC3F9WMdKEm2YezaohzKmZAVAAUBKosWT7pitnbnkHqRJKKZXQ3",
  "key11": "4RzZqiNeTBtKMfNXyfUzJAakWjAhuFwbWzNSv1kSxX2njB8Ap5pMgkLHQYimTQKEY1n4ArCTDjBdmeHkPBGPt4fd",
  "key12": "wn4rSvDHfZbhNpLrNHobJ7Ch9v3AhFiUKYT49AiqWFbTm624DsANYTfhF9qZtFxnVW6xm1idchE2v1b67NaSukW",
  "key13": "4pbqnp8wrPtZYN38HqEV1kCy6suqQ6ga5Mu9LBLj2zjaMaEsoK1YPzgwZTpWXSPjcECywn2DvTsLZNt3jT1LZ4yZ",
  "key14": "8GwjzyuoZW5cr8XTyvcT43k87HRgFrSabowdHDxSgpcPbHGBNNpdgoKhgJPmwwvFQDijiQpvx5m4ZKshcPRthoG",
  "key15": "48hooGxEsiaSw2b37TJZtN37LGe38Ric4XkLDyxjuzD2yk7HMer83wo5L92g4KfZyfA5U4t96vrurknjFQiFwYqB",
  "key16": "7W2Wd8WWHXoazwFgBiTFB45SNDBqpgXRW1TyffAHDPApgVDeGRmRCqdWWKs3v2Z1p4YgLsuqMkfdtCuZadyUHG8",
  "key17": "3WJPakDeqF33uGyEF1126stJcjQAdbfzRMWg9g4Dey7Cmoep2JtQCnCVryrsnficEWdMnRRaGaLXheSwzV6Zh2Bv",
  "key18": "bW1caJkAskqA57zrcwij61Sve9PZKYi7iFzoApxXqR7auYJxjJ4HWJxAXrpqPpK6XjiYdBaVYy8swoJsiNfVvdJ",
  "key19": "4TSbBUwVad55XvrzoHm6nefRHp4eB3xnU6f2qYeJhL7ZZXg3JTDJ9kVvfqCn5iXmb5YNvzhT22mvjfk3iX67FY78",
  "key20": "TFzF65caTaKqadtZHX2xo3fwbYWVCdmrFkDcUCF28DPQqUxrRf8Au8ew7iuh9S14CxanA7VBEsJKgqn1TqKCABW",
  "key21": "jgd183bVqqByivMWVCXTC4yQAjXZpup5o8txn1fbg23vr6a3dSoULFKcK3ASbohYoDr7y9fTi5i28rWNYLt52TB",
  "key22": "5rZQbL8yjsPiviGAWSBXRugDVANbPiBkLZPPJeaSNzQpmD5oeraiywVDzRHJuosHCTWFxN83FHttJyWhPPKSijPH",
  "key23": "3rzYbFHL2Gnrfvs4pmskDjD7QcLKLaKwa1ZV3HHuSrNoAdhEyesfcCrQ9BoKFeNdSvE4AhJhxp1DyhKZx7qtzf34",
  "key24": "5GWHfaSEMjwsZcWTYp4HgstPy1TKYWicz2SQpHaiMiZcq4dJ7uoqofhsLABZ1zo5GutQ6oXvg7qRABBvQscPAhZh",
  "key25": "36v8bEJZXTqadp2o6bhwgzPjAzpcSKMZPCXCFXjuZznMPKxeHRFrPKa2UJTUUCmeDkfcGnS3gqDgdU7iuMF37CCb",
  "key26": "3AqAuDPqsdMNJyqnrXXKRcHicqNLj5xZ2ErDRUEo8m52bHPEFuDDXDcDguNKRbQvoAddSYGBFqjY78EsoDsqmNn6",
  "key27": "48PcNuwVThy5Btt7L4sovT19XD7XwFt6AEVzucHFfm47ZGZw5ZzVxUiZwF1s9mcFSqYYpu17yqMRxgLXFGXRkUAi",
  "key28": "3d1MP2YWNs4QwjA1wDX3Q8hggPLZqbQDSZjbspwH7jC1xzix8L54cyLjgnGfK4JXo4gHvch6CejcPGjBBTb4SLsn",
  "key29": "3qQRpH8h8TKksHVPK6DLS9murQXuc95xMfD3h3nvA9GMyYYcVRJPyCWD9VZxAhGZMQFGc6ZK6Bg8qGdJyCX2WKT8",
  "key30": "3D8WoSpCf6JzLZ44F4wYvXAy9WxeqsJDCJuJALGSozE7NHkK8uN39fUyJWjsWcY6u3y9WAgbsmXAQQTkjiPK8ueG",
  "key31": "5EwETYYztJtZ8q1FbWkppN1RjvZA2PpvWt2vdgDczTJrVFN3jcPmdjnSXbqH6ZAn6eCoFjBbZbZ9sXAQjEdEcUVV",
  "key32": "41kAcjUnQHs5dHcuZ1ffNujQmfak8A4oAfds9XiCDrWfiM4RwN8S17uagExx5qvfPELJDLdK9ksghxfkZceu4sU7",
  "key33": "2RJrVnLXicWifMpsXUcEoMCar8y9N63MuFbbs9CXk8at2sUHP6oDA1RkybgVmUZA5g6N1BG4wFbYYKBVaXvQ7zHk",
  "key34": "26Xj6F5ZM84HJSMHtsZ42aJgwfkavqxFr1nfWKwksoxZiqeNPehf7ikAuGn4kwG8cfkyh9FwLfNvnTVW8kDArEGH",
  "key35": "4ngywvuvqqr3mdyL5pN1PfQT17dXvvWneMLe1StuarB8o3uMhkUPk21ZTukVKei4QozCREumJNbLLVpNeihxR9NA",
  "key36": "2hWWfDEMcEuCvYpxYUuLTgjtp6XNbpgzR5v46UQ3KhPqbQxGcVWUhLRo69VNy9mDwPAFFZtqJvbkT8rzhCXQgeGT",
  "key37": "4Jh9hUeN9zYBD2ctTrpkas6r6gykxqPoVjPxAu1HHQ4mvmwUypdvdE4xKDxrh5qxxFU7ph6uyCxKSRcrW6iazJaZ",
  "key38": "4zgoiUPv2grW8tP7VkMFNbNcHmPcRz86U3i5JA5J3kG4iARVkzbQErXeQWtiZAp6oQ8tdUrHYnwqxBRWTZGBJh4A",
  "key39": "2NvkGESMUt35nKcYYFRjy1UoxQ7n367Q5WeLhX7AGy64e4sFdQwWYN9k77inTRnh9oMVBdYTFRpHGThhjYi76CLe",
  "key40": "srtEc7WmoCdeB53WsT7qhvBYoXdGzVER1hf7DESbcsgfp5y1NNcgKE5DSam5nySQtSREjAkYT1rjUdiLGJj73qA",
  "key41": "5SYkuHgwu5SfpqSejjUByjHr5uuMjempHkraC51HguXtV58e7LtHFDq8MX6XCsMRKE2XcusVUwoMRRf1cHvs8LB9",
  "key42": "5AigSRVktfZnc5EoTLVhDKStseqkhPPcDsA5VqJypgm13hGAV9io7egqCXzB2H6KeDsbeqqFkzovEwwX1afBonWQ",
  "key43": "mAgmSpDAEAzoYXGpgD1KhshFJA4ndNkeCKugLjfpQvjiiSa3WR5P2XpALRhgUcQtXynn3f5VNdnKquACnRsWVpA",
  "key44": "PGUtXWEctRH5UXH4MzxRuX81dHvABHk97XX6TpVn2Cio7Sxa4J9YfL16EUAWTE8PbpnHjsCgsTC8wusu1vXXJ2Z",
  "key45": "L4GwRAPtXPYATLTBY9fX3Y4yfFQzganbGx8GL9kd6cDEPRT7TmsEwXmi918smWBMxXtbioQdQWi3RjB4MLzBSNR",
  "key46": "eHAqKCDeuQBgHxmUpLkUL3HtzecmcArEqkN8HVnzvAqCaNkEhAmECMBrr5cQQgotWSMP4dShXm4LDkkgRixA7pX",
  "key47": "5axim752DkLwKKPPmiLKz9DGscqL2qLKj8CEpEzUE9ZJ3QatW7whcvBHtMoenbDKWM69zyaA2bUoBsNSRVZgJTd7"
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
