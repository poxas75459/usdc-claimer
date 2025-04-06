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
    "2NTEwvc76FKJW2XEwp372emscvcc9eTbQGfS2DfAT4e1gVZmynv4sADN4Xwv8mUUhSAWJwFPj1ABFgkys4dk6emQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mhzjSPLop4BdysHhkgACkr13NDFsDuxJzLg4gTz8yDveHv3E9bXfSqxDvdU2qjLc1QZoFxdCiypDn4bV3Lyp3gb",
  "key1": "3yyoGEFYJo1zZJJkxRs2FrvUb1fP1q1kh8DvXtYohCLVeSodjm59CvWyZkCDxrcjrTzVcqVV1YEmS2dZvHohVmWY",
  "key2": "YSR96n4Abqhd9DCcWgTr9eJcEtCSrwdSv4biquT5yxysow2VRZUuu6hWoMJZU9bpfCAWoaddzzd1iQmqSeMwdJP",
  "key3": "48rge2dU3kzrpwNVrLQ8VC4xwBEuYRDJNqJBgBRkrMECww5QAA1JbD19Xw6XJyPwtucuWp2hoAPc1ggVwFLQTKnq",
  "key4": "2ygvHXztQ65vjg6TBjmezjfNT5pPyqe4VrF6y7Qfj1wgzy31HJpTM3wj5GUDxKdZPa7vwwPWYxYkM3qHBwCZGygv",
  "key5": "2UPRDKinm3CiYNHUbDcs3KzGmfKxDiWiWmJvvdmVnX9aCngqNBSH8pasKPuJ2vsZhsQoZ6jUhm3m7p68bX4zZgKf",
  "key6": "3NyLQAXTLnLMLZDXG255814g8ptJ42twUeqdzFMrnfkbKzN2BiXbQwtEKCyrrSVWrY29K56q1KuLawpYLVT5KvE",
  "key7": "P3j6mJHZ7F36KBBysgY16RNk2kAdGz35ZpfNtdDz9NEdL5PG5WoYBDNR85YeTkuEvzrJ6UeyWjBzob1MLFPcGFW",
  "key8": "2nJhFYw7DBZ7KxMNDKyMWHDCZE8RpaKaH6VAsFiWq1F6KTxsssrbrq7iTPDQrESnDaeDy9ufUCzwzDwP6K23ob5J",
  "key9": "5e6ebEF2QWXXkzttkW77fhxssQ6Fx16e2E9DBv1whv2B3Vp3gA1AKz8XTyKAKSF79rTv12rHrcxyuCvWdHG3kKbW",
  "key10": "QYudH6cH31jKZcUfdzv6uZwu5h8KBGbfPWF3zkn6CfmDrm9V9skgYxznayTEZobbZAexEoyAxTEGj3SJzP2zuuE",
  "key11": "2CPjBETFmbfFrcF5eEGD1ufppTXtYVXeDJJtJifznAASTA6UmHdB28dUnahiw4biQkeGStUNrKeNavcY9Lfaz1Ca",
  "key12": "5zuABGZW7h6Z32P47M1ZGFQdnc4mrrrcWDCRUGdFdvNpg1G5R6TZLTTQv9aJmrGm4hr2xjwxih245PchxN8PzY9H",
  "key13": "5zJwcJ3ZdXS5hyEzxZ3JAfRVdJtqd1h9tpEfFFyRM73uibaemC5YXuPUNhRYDyAUvK9QzirRBdRKSKFqDgyAbSoz",
  "key14": "5fvse4CCBeiuTfuz5HgKTVpWSMRMAashtxA6XZjWrTCeE8bxuqjVDBvMHypVTy6qfeWZTaznL1ngnYF2HaDSQcDT",
  "key15": "4oor57ECyXFifoDPV4XdXiMdu5f9NhjFcPZjZUUpUpR14TarSP9KrHEgqLs1bfJHNnzU2wVDLvdPNVpHu7SSBM4Y",
  "key16": "PauwrtotzVb9BUeAT2dUZ1S6k6N4rrzJ6brEuaJGWcLrmDoFdV6KjdxfHDdni1BTQJuJyJif8JiLrt6QNXQiB18",
  "key17": "4HcdZJdAyPY2JGSwjuvTiiryqpVnbPvGMUvenr3gMtRb2VE7X3QUoyyQyEk3NfjPBnTzVWXTrcxhChFnsuZ7BpCP",
  "key18": "29xrKbyiVUj1uNHCVxymarnuUXbwY8fJughRgjue2W9UqW6aAonbi36koXxTo2xQepGgakKRsAwoXjq3yHTaXLo3",
  "key19": "RkZx5qNmRySbD9LVVWdwD1TFKrqjHLtzkVs1fFHP98fZddNNHNjhye8ZsiykneYExUg6waYhKaWdSnjpxBUgWiL",
  "key20": "4L2NnYzuFs1TAscNhtgFVzrNN8194yrQBuszA5z2fdkGiaHHpKRiTNKXBMYCfvc6nPtFesHtzwhdTTFmkj3DnA5s",
  "key21": "3DjHakjBvfX6B7Pw8RM1v8oQmxpjNTQEAnbqoWFL2pdrNi8owZvV3kYWLR9T3w3Sn1i3J2EVNiBtxFxvyaMsYLpv",
  "key22": "28Ga5LQCCeSwNfLWwfB9xzoXF6kXxENhSCJfqzc4FrLEig4E4snChn463TMdXMAmBjmidw6uFKKA6v3dgGhMraAp",
  "key23": "5HiJvUTSkBMRA152N36Xzzi6Pk6B1MKEVtAURwWxZoeritgFDuGeqyhRA7rPqpuHcaKPaZvV14eSDCJUkJ8g5f1C",
  "key24": "4z7CUErMWbM6neK5CwmBnr14NAMEypBjfXwhGywSH6huW39vyY9AdJdKzWT5d5nfiftcda76L3f9cJsX5Jq8muGe",
  "key25": "2mcKD6FYFtaDX17G87ww4eChrcCCWgN6fu8fpJq1CrzXtvvjZCVzkDaAcuyPo21AncTqmC9MuUVQjoyZRPYt9Eaq",
  "key26": "4Ze4tMwM1eHRZwY7WjbkGCYYCbgJ1NsWs38R5UrPcKaag2NjMTgSme3y2jLEkrq9ubZMWmMCxWRNDVwcyM2fBt8P",
  "key27": "33E5yTMiCFoo1yohobPfZxgkxVSS8yqZmYTwDNBD5tSuxbUGnCSHFXTBdHs1EJZ2FdgwqG4GkWyvszYQ7XzmCWRR",
  "key28": "4rqTj76GuXQGmXBPCL1BLqUo6LsmQi6Sw6HgZS3SgjEznrm8nmDWzHi3kmHgyoqvq68sVPsT2WS1pNGNZ1E6CTXJ",
  "key29": "4xTo9n7VkKY4udnvQZKgdLAZZadZoSogHjhaGFvpjQLg6KVzjV44CQs7bkcSrgFSmiQ4UP8vjmJ2xNUoLKWPmSWf",
  "key30": "511iVBwsW3YAaGi3bBChn7FjLYfbDvN5Vrm7dgcfPdzJMrsYduCX2Vd16tmNdWLurpfxv3frt2A1XFmqgTv7haZV",
  "key31": "5pCcHxu7aqdgtVQgBtX8KLg5WLYnWs53PgMM3ef1iabRXhGyKGspSrDJnrZ9bkDgzURXbR4zkDGJRZMHcyjVrJam",
  "key32": "59oVqGqSXGmSmJMo96j2rtrcyTpnEHstbaXUdD5qhPF6yHBA5fo4uJUgoEKgLsV8jsSbj8sk2WHjrXTMsoPwRbmf",
  "key33": "2eYQFMALaVwyhGxKz4GtMy7RfDgc4XAYDoixhfxqguk7dbNpyPTJacfdMbQBdtQ85nqKN1ziLvdWQeYEVwtGFj8f",
  "key34": "4qZiHT5gtDkP3taH3YzdG6zZmX25TU2JuNYUkh5yiSQUtqN47QxtfKvYVvnA1y1uscJ7XV63RRjVkBNVeCupMjzS",
  "key35": "hdEEyfHNLDBWBrRhKrvFWij1TSYYvbLsvkBtsvM4hTad6RSVkoTgys697yWMGQqCLSZ4fuWkHjRKcB5j5stcGQy",
  "key36": "4SQi3bXeM72jXM6bxzpxNjLyiwL4DZ1bkXNxH62SkfuqAhhc7YhTSdsq7SgUNukzjezKT4bZ4oTMsrm1rfmj3wTJ",
  "key37": "c3A2dd6ww2WwTG5WVY8PUQa5PBKabD2XGJDmq6F25veXDRrHxzaMkKXKGavCKLu1434QbLxrK45k7JDvjagGaKm",
  "key38": "4BUVRgWQMPjKpBf6hnh6qVV6be6xZPUzX1vrkQV13M85j3sJY8h5MRdGhMQ4WAZCKoCj8VPL638Ht3tpD6vHX2BD",
  "key39": "3v4EM5Hg3EQZ12NB69dUW98WyDeQjkoEesNwZCMT2HJiDNAcKJKK8jrZmGj6syEdVs3yvVz5KHCfBpwNZcfrerz2",
  "key40": "3N4dcqLfCQ7ZJc6xskqWXZLfk3UefZ8szA8YvZYoXsRUQa9ry8uUFcSQtLUega24dK63zxeH14UPtXCLgYo6kbM4",
  "key41": "468hq4mRNHN2Us3o7cHbApnKFdCaby1Pck7DCmmjkMYwrJvRrVj6sqvVzktMiYLrC2Yyu81XbSsG4qvEx1E5ju5F",
  "key42": "3xY7zg8w7LTuhMMhPySFpmC6rtGR1hTiXN19sSAHkH4aNgExkTYViRvWQuNkEFznqZ8VprvbT9j6ZynHfyFqmyHg",
  "key43": "xxsFSdUgv7bF18UtS4QJNGP2x2U8kSZpMVqQ4U8hYxGMe48A8VrUtQpqinBYw6LaZhg9wgNSUspaARQU5LGC3an",
  "key44": "5hi1DwKsJB5fPfrxAYg9kgco7QxAuERJqz2Wv32UkyPwi9K6cofzNQuP5JmfR9XSCYJxJU7P47tyhowMpfJksEWT",
  "key45": "QHdcz21KGvJDV26rhQSHhvi89ZyZpjVnmKRoUh94fm6SmhqY5CLhDbrf1g9ePSapEK3R3kQd8N5yN1cpjeYYUML",
  "key46": "2ZKYNDtgykxkWGEDfXMcMRkFfRdXGmuL2hPSnM94q9Y5YkEkiJq7zEGNwecEUmK5MnpXSBztay6gvfajzAqpFscB"
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
