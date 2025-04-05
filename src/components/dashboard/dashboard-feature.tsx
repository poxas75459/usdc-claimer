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
    "1Kws6s4C1s1QHdsmqyYx495GDYLbu8Q8UcYecyDv71qU3S14WyXRmUAuyKcZDAwEaGtW8Um8LPpn3gu6MLACE8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fTtnBHHNZUu48HXfFRVyCGaWz8m3Dx4VwQx1JzVF8iyZd8CPdPABYKmoXmdkXErvzkHZEPHnr1oo62qBw6uDzFJ",
  "key1": "4CbRbT9g2Tq5SaZh2CmDbaEs8ymbycizX7nvnfpFv9trhi4cEmdoMfWeW4NLnwz6WJRPALsP4vpy9gWkPp8CjLfS",
  "key2": "3zP5HiYqe1k2edq2i9pB45H3emEEU3ANHwq2bqZvnUTumTFtTrBDSW9Ep4DzLMBBXgEo6Ctry1BLVBHugwNhYn9n",
  "key3": "4RbAugALK6duatpG8fRtqkEzEcZysdKJVNaLc7PucDWuFkySFVFCiZSz7NAkTWVc4ee5154nBvXwLhGEcE6KfLsT",
  "key4": "4cprKskqcePEdEe9wXeEWGzeRBb3JtG3yHq3476CaBB6f18mpEUVNegF5zdMohYQ64Tmg14MyS5JPuQaMvQeakKo",
  "key5": "zwUpsQ2Cs5k9zjgkFScC1vcsXg4RVNW1mXURBSBNJ4RF33cQgA8GJ3Bmvz59JW1ARzNCQwcjManK8x34aEitj5i",
  "key6": "FBKPQDg4iTa61EmcugWCpbAvBpsf7RUxUp2fuxdiwdLWxEe3hUgHoqE2zBWYxe4SCVWaJS3zLxnwJ7Xv1zMeEWu",
  "key7": "2xWDQTwS1Whg9ovWsnAPasDBHEomWnQDn9njdetBjjGBgFQJL8H3WeFkn3eMiVNSRuEYHETfybeXcxnoq7Vo6bR3",
  "key8": "4XcZyjkXrUVwHuQbSX6nrTHfgg9bXL2K8eyAva7T3VdurUFmPKn1VHePdt2AYSv6rdZ1sDhQLP9vi9YL1TVsNyMi",
  "key9": "4jAVNifgF5aPzQccw1AEtsD9GtGRpPMi9h93rFb61nVBC5wVwwaNvvSxGkQU5DJatLLj8GXVpwCyxzfjMZjQP7Qg",
  "key10": "63RjN2itSkXhrTEAoEZXW5mGSKYrrCJMzG7krk79jqo7pCsdpaYkGHKdZvU5n9P2y3cxN3FbskxohsJGefaagZxT",
  "key11": "2UxydtZgyygon3ELSB8ccw3peHjxvTrBBJpivV6pybfjxYx9wjX262TPXSoh4mD7iyRhHvCDRUf2NhHrAiaPTZYq",
  "key12": "36njgipNmq4svYCpdmMWsLXxKdm8z32FmZZLZapMHvSjGhXKVuoA7t9fdDcHo3et5zMDEuAoxtiXUCEx91BScBR4",
  "key13": "2nUqsvv9pdPnbGsxe8R9nTGbk4MyQSem5Nj4pEqzfJiwfGv7wjiwCdpFzcwabCvxnRJpfhF2w9Ued2YusMaSL9Jc",
  "key14": "25pRyoHM4E6uvaQDFtWWCVbf3j2htbHFRMDr5AsNuhHkLJzS7fYYbiMUswMat91ykak9apSRBj5kcbFygorDPv2b",
  "key15": "3eMDQmXn5CBMHu9hJnshmoHk3mM1P2gVM57gtGKCHNqTAqM8UGqXrJFkoCF8T7mqcLyBhnVZu89SpzLvxWpDAAEq",
  "key16": "9QDcRP54vhrrvADPjKFp3WyfjZ9tMqQ21c8nYZZKXXrdctv1XALn3VSM4rAquyQDNPTcEjUem1BKdK4NvGFCZtc",
  "key17": "4KrX4eNmGjFmV48g8Bhp37nkSLi4sF7RGJNqxWMC7n4K6pfjpgvNnhZ3J4K2vZfdTbM9jhb9NqYd5XTDM6YvHW2k",
  "key18": "2eKGykenqp4uWW94jjmtyrBjgHGbiwTAn3GmgE43JBeMTcaLNf63myS3wHYUxD2iBUManFyxtb3TuYw27D78QZWD",
  "key19": "58FxnPyZmG5xeFFBnnf2JdKAekvxfuWzX2QLSd6gUJJTAcVfJ1ihopMEfZdrVaZTuBJbDizHVcQS2jRhVr84dMdx",
  "key20": "FPLUyBx7ach2Nc7RKK6UrVY3k8x2iCqHYCVvasrMojyTmgLgt8pCisDAwoeFVphbmU28KSpDiGj3TXEP4sY3sQM",
  "key21": "qz6UjJvbx1p22MNAsBPsQ4W8YnBAoCAoPAwq1JrGrXEWBU9RZZw6PRkVkwiSyS3eEkyFPozmuD72zs73Ay8fXxo",
  "key22": "vhw2AxQbEU1Cs7aCQgENk71xVRMtAicqPZBaCMQ5YztuY8q1wVH25xjZHYoihvr66yawvykmp5HknKfU4oyVqz9",
  "key23": "zGX3EcJNVkre1P6qGFQpaySq2TkA3Fq2pioNdpRkyVBeuGDc1NwRvgGRrBhqczJLuW8vBADYgGRSjecnzyKj1ab",
  "key24": "TAnHGR7MD2fpGczFgh3CYCPPqVnWDz5mhafWce5nJgvWenCcKc6Kj6ERSJgmJcfCDckEiq53rpV7BhmFWx5Bweu",
  "key25": "5DrzLWkGoRAdFzv1qGGBFkLFox57QH5mGjHam9s2zyBvMb8iFaTNx3XyLrRqhd9t5NDRMHSEozSg5sKjpDitBrH4",
  "key26": "4iB3zUHEz88RZJkFoxHqftKHnBeZBqQfy2eaAjPihkRoAWqB2veyW183mucKncg6ufftu8FrwoDibiE8vJKnDPHP",
  "key27": "4JpkFM7pgGXNdmueaXvhvonhWYb7TmZhpnaV4ssQqVXfX1ci3ftoPmi57Kk2VYnQC6awWT1tmw6F2vntKnN7NR3b",
  "key28": "2LUCyFne7ddAcHAigpWyCmrEdojkZx8FpvUhhfzfwAZcq1kseUMDyCGueWxH8c7n4VNSzR6vU7T7XZ9JR1fUMVxb",
  "key29": "5p38nzfBCCWqPs3w8DxJeWcsJabcDyjwwR5nHytc8AygqujCnQtNPmq9DPRnmrHRhEtD5dz8LkAPhhaAXT8CV4Eh",
  "key30": "3vRTtz9qYncifQJPqYXz4va7CDzyfcmB2pNwsANfqnwR37ssevrLiqELVQgamEXTbBX9c5qqXbEsSFmFefeCvzdH",
  "key31": "4pcbuYh3AHRPtRnuW3KWGhFaQq1eGzLaRK928ysAjtH2M22BjNA676ezPEoBrNaTGH4WbDxsppwF6rCb24J2Hm3G",
  "key32": "3CD8bP3VUcHanZqcd4TTm8R73SjVmo2DnHwf3NWtYFcuwtdwyGRxDTdSuAdTpy94pctDX4afKaPx1r2RofNTd6k9",
  "key33": "2JbYysoNGKt8wTzvCwqtuzDYYtgqTXddzF3US6nPg6nBT8ehDTEhNbYwHyVZozgyqcokVGPysaDerPR1wZkSiKs",
  "key34": "5mSjSXRTCfh1jyHU4265yn5zY2Z2evDejoWKFwvf3FSu85RYpjSSo9ZzzYeK5Tq7pDmmSkT9kiwLBAMr7zem2qpg",
  "key35": "3NsHkgo8zXsuyrb8kUzFoGoyzFySENsm6oH9FJpQXZoNpKGSgxYKddPTG2Tm4MpEUqLhDnB6jamgjNzjZCfbzVDy",
  "key36": "3vFDoXVGg1rv1MKwKNbgXa48b2SN79RRqMaGVxaca75D912ne57RYeZ5AHyycZhYq6xW9DJBbUsjqpt9M4tPes45",
  "key37": "3rw4aFAdaKARNnJyoj8PQtJmQfgqsXYwNv5pD8fh23EHbjaAC1fKStBPjoqgy96SdCADfvEqGpTPJriZouWGTP9K",
  "key38": "M59ozsrmJe48Z2bdYqKGUVKDyNWna9PwA8riY87AmDfy9vCKhrSqX1PFWi5nD8kJpmbk1dNMCpbES5LHYLFeye2",
  "key39": "b7A2puMXGC9dEmyVDVZ5GT9z8i9ZtzVdqRJRErfY4FpicfdRqpPCaFj82rsdVHWWUJk97Apj4Vwh8E91skEQrh5",
  "key40": "36ELxzjboF3a66uUFDB2vkSkohivNZT21JKgG5GvLk78yAGtLzSoFFnzExL3vi3aUmnPF2PKbvsokzTVhEdQdDv2",
  "key41": "4PKJyXuhWLrxf5pdeMGYEBALcEMWLmF1GED1Z5soaVqDX1AvJZWbRafCprwjrghe3WkCVX8E9MsWy8QNidpePS2M",
  "key42": "jTXVwEuH3ihgFCtSTojWoztrpWJDGgdnQPYZiakwJ49ka4DDhKgT2CrhArdLykZWkPTyVPy58nVfbzCp8PTdbAs",
  "key43": "3L29omuPjYvpgKCSf4vdG99ZHeEVWgDVTbLNMJYbhf4ZvXL7w9bpr6Hgtae5fhRkBVFqbu1YnkVtb9uJmeXfdtV4",
  "key44": "2v9cHgPp1iHZWdQcve598GduBvbjYhcMg9BVesbTHgec9Cb4yjsbWp8Fj6hdiEKbzkKQuoyQCUy68592x8UcTcvE",
  "key45": "4GtwYH8ghRAcbZnS3HcQNfPCZgq4gzJdA7TMDhmdC3bo3o92iWEBVWEUKTjRVdkdKVpQabXwMWwN3VRxD4TFHwtW",
  "key46": "2RLLdLQGiHSr2LsdGQXeke18QVtCEFEC6ajAAEs2xE1AFqDCaTNvPG8HLL2qTDbvyEbTCAJYrB6kpdqbtd8VBZUG",
  "key47": "5ZENrLvAqosrbRjXfFufuZ6xv3AqGuvF2LxjKqf9pEFVVxhswxfzAAX1KkzWMgX9xcbcUDwvFJcYqkUaf6LdPHZw",
  "key48": "3q48wUYWMJaCcFaaxwQwdpPUrCjbdAbVfHAp5L3oNTMMiaP3KdGTnjxm2bdh4jpPW7zTQCNiovugLnJKzoDHzKs2",
  "key49": "AicNM1RDZjJ2UoTQUVcgYssnHtEhGt8CPRqiJ2MNwMtM4ZshmWKd9kvcZDGGc7cZeGy4h4XDkhuTCwmjLMFuGdY"
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
