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
    "3xVQsBzhaWBc9UaCug5qC9TqXw6MKkLwna2ZvSsz97qaRmC6SMnGPsRoQJk3HRmWi9YJUCbxLBbRoUjoiDTQcmNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BKb4xjfoVsPyczXJufjwTpX8QnS5DjixjV67mqGT98ZA1wGPbqkNfpxFEpUS7XvB6iaHV8HNQH3rCX3sKctXVBi",
  "key1": "5gXkgv65cDEcv4N2LnTmEwhT3rkTtzH6vLr7sd22sc2BBsRAiidQ37fbKuzuUugmqCVDbGWwA678dNDrXncwadC7",
  "key2": "4YrNPWbDJUJT4rrUzyVs8tLc5NFnVruJHUTbTJ6TgoWiKD1rnqJkmcBAkv3bHLGNxMrqUzxp4X2N9yzti9w1WGVr",
  "key3": "37MAjZrX5Y5QZcwZwA3LVpKFFxJmxDUiToMkos4sjHud7yfxVQ8FYUq3vsZy2JU6p63DLkv7uHYsxup2JZRV9ehx",
  "key4": "5UoYCZhi6U97qbpdrJyL9iN6cQNShnVLHPP6gQCxuWNAi12eoPHqQAKct5M8HLP9GfzP3gAxw61tLnJ8GSqZbGyC",
  "key5": "kEXxESsjZYkm9t7qufESiyqxBUp4rKbcntnurpx2xSfEsp4NB3WQM1vU7PjqPHLF2FLhkSUcHRwc9B1fTBJYWuu",
  "key6": "VWdSDNH6riyKJfgqPdch2aAJ1L2q7HLtmePGoMcQmGLZ9QjnruBUbRzyAUn51NUnuFgjzdyZERYXtXdCcFAKGd4",
  "key7": "ftkrDHFtJwUf9yPfqd4ci2RQGNQT9GUH68bzKNJs2PN2HxcdfMddkDGJXipx8stn5o5JCXR3TrVBbmALyd1z2ro",
  "key8": "3eByregBtyo8JLxiSHVCTDXkY2HWnSLjDWW5AP5rxFpUZRdT65B3KRXcLWpMjRGx9hmKznMiqMgBGc9qL57U1jW8",
  "key9": "4LT592DGuDHT7nN7vpA4ZT567ZhukzNtTt7uhPzbUErmtmm6cMy4uQLZCHubA2JatFqAhLsNEW2jduLYTZ6ejxsq",
  "key10": "4NGkYrkP843GMz2XacFZhEiX9wRbuXZRk6gKZTqnp5S4EbWTZQ5BbdRCuLf6jpTg6D9wuPcGKUWqkYAY3uMcGXTF",
  "key11": "JVvsXy2XTXPEoFtrqwX4WWHxT93JAc3G6bPtqWgzuwUWQ7fRuKytzhm77airw8iji3YnLngbtGPiuf1HeQtLA8H",
  "key12": "5QgL6w7bXx3174T9M1RamaVkhiDs7TTpMkYoTjHtGPNa7FviQg9SuQoeBJP4soS6TANmRyRLWFc9GXGoJvyqFep7",
  "key13": "2VDCev4RXNAraNczcnagUKa9BVZsDnWnPfcHvCSd8iJpoqBjpyHjUTZ3broYpFHSDgQCM2wnZepQ1HdFYCGymVnD",
  "key14": "FM5deEEnYt5nAQeTTaWXeF2fU42XcspudKihpiLr8tTw78Btap7PGWrwntPwCJiaeQhjVbb7NMh57xwJzc6L8y9",
  "key15": "2UfhoWpAwev4y5A1oQTS2Em1UFSf3zG2MXzkSZ8NJQdEeyaBifMWEjFyxb7c2vnuo54n7zKUge6KvCbgJDrgf2Eq",
  "key16": "29eBdtPixpJDshCrRDZLBQTU3ktYxM4K2Hw4REa2ZMVaF6UwgYxYWST1HRrGtPwC9xiCD1iTMRyfyzDCfp9vjpFx",
  "key17": "51XnRBhvm43WtwUZAHpKNVTqmANtmTXA7KJXks1AryZYxckPDZVoEE13E4nrW126UVF5qkq6Y3rVkSYYjGFiG3co",
  "key18": "3UhEgVqLiqu8pbtoWV6ox5QkLzVzPJ9dGeyzVCL2hV9EHo5fBvBYPVXuXWBp1y5UGQ4LGNRLmmGZPfDcKRifQTEy",
  "key19": "57r16PdpmVuvGACdd8a6GUkCmvCDtVuCBz4jgPcL3KVFiRwGRwur1Fx2hHKrS7Emjwk3haJWhyg3tY4d1YzCHGMW",
  "key20": "51WAPpg4fA39iP5BS2QV6aSzWWXP4jcUf8gQkxJWvCfvd1PyEWtakSQpbZzVDpFVAEaWxgQGPtCKn5zoUMYMcLPU",
  "key21": "2jc3MeVMDkJqPLVBc3jVFbo59YGdYsFP6LxTohA2T1y8obbSow5EuLwj2R77GGK6DgmUFaVr6iS2ca2tde5xmWXD",
  "key22": "3d1bCQTEVNfpTRzn59MLkzHxKa5RoHwegXfmD1cS8MPi3gNfnL2NvMgz6S87GMYCvBGqTkri61XThGHrmaTohKYT",
  "key23": "3YLjQbMKRrvKiH62v6xEmna2pJV6pDgRb6FZ4HH6YF4yTTvQ6ZtJk8vqUKQSmBWN6p8LgZAB2uYBYWuDChobuAW2",
  "key24": "4ivJmhjgmGivorZg1WDQLFHT7pEz3tvxaWsCFtmivFNSJhMkCEjcL1NHaWmYWvxfpsjvyxpp8wTXxfmiGyN2UHWU",
  "key25": "5KTeLtUSjPy5ZobXcixnTiosqP4gVzTLj1J3fjwJwDMbbgxtMdisjasymBAL2Cxsx9ZXQoGTNa2faAUAnQAY3SLq",
  "key26": "T6PHD8F6ENnYs44JMLt9oFrdUKze5DZ6nv5Mc9CxeLZ2yCkqcRE8RgFK12rrfwuky3tU9xgLrvTJ3SwAeT59qg5",
  "key27": "47hnCTHeqpAv9mHQ8DbcuugBLfgTVj9Vhc5yBJGZ2advzUzRkLkMyF7PX1tH3qNz3EiagojxD9gqtC5wu8SAT4Au",
  "key28": "3tXQWJihg49CUsyYGhGRZkLQUVPNXoD8gfaDX8FatTLZCdZRcxatRbanavj8VCmeXowcnhaAJe2yNMC2Q6bLhMYw",
  "key29": "2vmP6Din8tpSBP6hSHNe8YguQcyKX2VBqD4bQb9G5vJubMnMzuN5jHGpkecvSQHB92K1quBnhJ5MeMeFQt8hbJyb",
  "key30": "3eScfujFWbkPD5eVqpcgzF7u7RauzxuJbsdWqCtT3iT4ZLgUBwf47pCi4xVJA6tFKgYXmz2qrxz2rxcTUaJBPKGo",
  "key31": "4so8tvW1dX9NA6LcMbQar9LPsSoWVy7W5ZNamXtoRLVXr6bZKrnRXV9ww5rvHAHDCVkAu4uznuFZc1EeFMcAy5Fc",
  "key32": "4Q2q4edEac5HXqH66eVonCY92XcUbW1QVZ1rdbiB9Y8Xjgmz7EbkmRAy2YZtwUFpj3aUNNLv9dAxjS2Gs77WZKEu",
  "key33": "4cwGbj3L1q1eE7vnySnbEovsNk3C1prBw3iBQZzfKkPYe7aJq7LB1RPNy91z5VgMaNHzWsBRRyvvnUAKPNWeM9Bi",
  "key34": "gfxGZNpotT87Zbk7TwV3yuUeKQaiWzPpdQKkYsksD1oGWLL6e3CxXy4EiTKnXiPBvqR4ne2SidaU72FAE5uah1f",
  "key35": "36Rga3vmmxBnePBHnmdEmV7MJFWqCTYPTi29JMJGmiVq54R7xKcmWedYUPkVgmvVn3gpN6ccjVW8PFbPhUA1Skbt",
  "key36": "31Gvt95T5cZaAocXuzDoDKJyNUYqhqLuLrMezqTi9AqDymtjem9DSeQrPVoJ5d83PnbhZVQVEoDFcnVdN1wGw5mE",
  "key37": "3evfQ6ev7HotA5qCBF2kKjzSa9vFwVTsnLFt7rhUyW24qNJnJqyHSkBeSLNMFREwwixpbfSuUSdk8ccfT9p931qr",
  "key38": "3YRK27dcoYd6j2Y2DvvvS41qaBE1KmByWYjpqZNwgVSvoWo3fRQMm4qmToEr9tx7KJxpeJV89duJ6Cw8JeYqBh3K",
  "key39": "3twuj9nLJjCeJkuWscRqDqa5Wx58Qhmunmnc5f2SnPAaU96UKjkoTCjYuEmBRSEMUEH115CKnwMSpTA9hTQzqKQV",
  "key40": "3AEsYFB6YKToHYtYshGJX34vjC51Vv8GZh7kfHg5j4kFSUGcLVLegCQTVVvh4E3BJBjfj53uvP2VC6hp3DQtLRCh",
  "key41": "5UgnX8pY97vnKQv1ZpVJrgaHEcvrDWFo9dPUHNMufMuh5pqzVPEksiY49KUHioyLzS8pmVh1F8SPCj6CXqtUXtxJ",
  "key42": "ve2XAsXR5dgqS5DXhgF9CGjVPCkWuRjv97tHvcAWLMmofJSARvTCvY8AWt1AdKn54keTT57234nxkMP1cpGQUqd",
  "key43": "4xbcGGc2w8iqUTMxkP2qnTS9mgdcA3shSCxeEQUuYA2p1ELZcrk5feJUFgbW2JLAznigXz8xgjZn41bnBLfK6oWA",
  "key44": "239eLTLs7WyvNiL1VG3zyUEoYjRrve9E1GscSRNJ3S7XVjaTUhEJo3LPsNUP7LHzQaLb9QzAT1d1q6NJaEWdDyC8",
  "key45": "gNhQUzJCeLpSib9vdxvuCFxKbtiQtQFwBonceokartdUTMPYHPg8zWqV19J1ArvVHyrPvk9uDTTcKoCQT7WrWVd",
  "key46": "2zSnA4Vm89srk48yM53QmriYwH7ywvzuDCDsoTdVN7YX9Ga3mLQu8MQBmmA8oGy2vWSUaeiPnQogM4pQ9XK2q2GK"
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
