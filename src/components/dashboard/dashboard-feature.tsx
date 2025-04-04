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
    "2SHJ9PWcQjkEmVz4eGBXTd335qywEFwdaUWxyfHUhX8vBRV1RKqZw7ogts95ycXw2BDVzeZAapCFyipwPvacrz3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44rhCD14hBWS9hUhMXhX2RhsqCEnpBd1233Ysa5tAEDwGYgB41W1Fi5THQB3how1qb59vWqb413pcYt9SVkkwsH7",
  "key1": "3QoFszyYZmYhX5DJ3Gdxn2wj6bEfjD4FCg42dz5i6gs3o48j5AjoHBRz1WnFtCBywTukr7QhEvVLzQL7Esug3c5Q",
  "key2": "4vPyKew7T5Vk2Qop7CXLS5TuQ7yMZw4xGbmmVyUPhQbap7oDXzSEdk1TbG7vb5radMbroGu7yHfpkpBeco4Da2sa",
  "key3": "3mRizW8fmieLYi13DR7G7m5Fc4iwhy3iVx825WXucSopePGZnc32xMGogr8uEDEMkYFJwBE8YsitcLUhb63afciB",
  "key4": "5C1H6iW9WoPtS8gKyzc1xMU2VoHR2Q8p8JdJNQfDmtLYtxH4txP4fEP3m4smhzP3MvamU9P6dVKUGxjfYgRUrYGa",
  "key5": "3JV8gvMyNTK781WwdHwCRBBfqsLieKYkb6JxMMZGqggj8PnkzZkoBSWGdfj4yAwJTWkGnirJWZ4xK6DkXjhzFtqT",
  "key6": "3Ract142RpMLKo7QCDzdgGAmV1oqHAD5CVwk8p94RD18BoxLkV8mrBz6D5ehdUbfnFjmi4dDDGvHpSkAA4nqvqiD",
  "key7": "3FqdQ8HLfdq34792JHqWAK6oaYwXyQuufxhMpBrjqZKFGKNACPaHAXcNADoFHD646KX4xG11sNgeXSpAqaKdcSEj",
  "key8": "5QQTayCvx53QjYZajcMx2yCBo7CcbiFqAAUBBV9aTjYKZiCU3ui78gAhfK4k6YAce5vSYhGbL6gVqSfpts5ZyrMn",
  "key9": "2Esue4gdnR5nU53haKFmgBASfQ2Rn4kZnNceN2HTR5wrSGL9PJTvEf45cmyLun8amYhqpuMWLumfsx3UPHLLyz7P",
  "key10": "5XsKmdMfHQCcYaZEmEwSYNzFZjxBLNYWJTVjdboa5tPKSSTDMEJ6iodmuB339tHUuvJ3Mb7P5v2KfzKnDEXwew1F",
  "key11": "DJPRNvUbdmfQhYUzj4yL8j59jxTN1gTxBnNqNyEXZRPa4y7gCySi1ETi75JcgTLxbhMhaoc4FdR9dxHDY8uoGP5",
  "key12": "4WMvv9o3jWdFvNReT9rB5fiX5KMWE9KPp78TTg5QTqL2DK59RDnhu2XsAgFH4PNCbmm84xSTuV7Ck3ue5aJFcWDz",
  "key13": "A84pzXVLPjgeZRSXfQKpuT3iTMSQiGqPvKhssHcjCnWVNUHRVM8Q148KSWFjPtk4HmHWLtsos1nzd9RPfV45NVk",
  "key14": "2jBV8Gfvnw2eUMw6Tuhxtducz4ccFoCD9HhBq1HPGS78ZMsXApVsyJZJDXPyrKZPyLtLsZPge2UHaRFFsrk9okoh",
  "key15": "4atrXCgFqeZNJo93pdN7pq7ejw2WL9qDGyTKK3ufvsXAVbjNnL8cKC7iXUpbQPWhSRvD1mEWUga91NU4X2TR665Z",
  "key16": "3DLxy9S4At415VccXE7NdcpnAujz81FWNW7CebUWGk5VQgxQ3wii5Sgq1amcHVYC6HQo98e5pvuhYiVZKkUbiY4Z",
  "key17": "3GhZcaNddvKPVBXgtqz7Mb3cbz2svjYekTG5gz5oUCtiajoWFepXb8x8nynp6gnAGCxxfd7dmrgFLjGvkVUidf6M",
  "key18": "5zomVaBLjnhzS1gzxqyR9Fd8Ljh3DMEU1fZm8GKyjeATsxMtMRyv1LFD3XQrM21ZtNs3PAPzFDvYchf5Sx4d4D3y",
  "key19": "41QQ86g7v7iYHLYT99n6kUWbQ7MEEyKjPojaUPyhG3qigrGkC9rRc28PbyaPhtm1y6Uyxa9HyvFLJRCA9xNfWEyb",
  "key20": "43vDD7KUcwRKxyL48z9T7EpVZJ1GLpGqMmzdAYS8WvBiUXyNVP9dvWVe5VddaVREZmTTyLHGVPV2j9QUyrSyfKXZ",
  "key21": "3pFde3WiKuZ9saxWXAVabPwMnh3dDytsRj9QGPDq4diT9z6HRoQKfYUwHV4EDCRwn68gK8wPYGibF5moFXuibXun",
  "key22": "2EXnNYsCn3R14fWBQSS44GPjrkvcndCpJiX9H2MxzQvezkZdpLEzG8E63zKTq2qKjBKnSZjDcHqHxgo2PgASawyv",
  "key23": "3fBjWz4E7okg681AC1csveagvavG1sqt7Wj98m7rx5CnkoYh7W9i8eYfFz9CqKNL2eeDZmz8cJtPNHaRkkSqpMi3",
  "key24": "5NXMhR4Qzde87chBYpcujcC3f1of74JRhkU15A9ZYj87Npg7oo85xrhCHrUEJNcVpSq3E53dZKMxgHYn7LsLgndX",
  "key25": "UpJPQ4bY4jZsN39QoCbgf8kMz15ahxd1hbbp4anmtCrriRjJzUZSqMxXtQK7Bayy2PyrhRZ8f8HZVvQygYPdEbt",
  "key26": "3cDFtaEPciJm1EzQJC7bKLhendk5C8U1b9qdhT63NfGwggQWyViATZZJXkF1RJqLsBLZwkENjpo9FiEgA4cdEsZ3",
  "key27": "v5hnFYipSgTto95S22aVsHxwgwXTavjNbXGr5ppZvsCKZtxKCDmK6qN9dZgF1EAwhbtKGXoA83d3cgVH1xe5jKu",
  "key28": "SyB9LFwnYtEA2uCiSJ6z4KwAWnp1uEuQwXzqJvKeVfvN5ceaFyrhjjgGQF2iszp4evzoESgag1Cf5viVHARqzSf",
  "key29": "MYv4mmYdsGcxns21PViojsmBhzof18CcAczuNzsrswfcaTrkyXdzqSc8xWQALzchKP78ibtcawwRwFvZDLLxvEi",
  "key30": "3qDrGZBBjjDMwXACm5E7HDP51EEi6XKWkHYoZQK32SeAnvZFuXvw1DATEe6CoM9TMLNwjWPJkQUTD3Fct8WsaUS4",
  "key31": "5QwVvvLzQrNEP81C9ckEQSsUDGKAHgvHdgd3RazvLfwNdDx1iiuBtefz5tXZCixH53UTBUf637QqGrhYgsiFJHaa",
  "key32": "igDeNb6mHDbAj3mqzmmxXPnFS9R5W67RdoMgUb3uRAcx412WssVgwL8UgeEEirW1TmQY9MXTUciH9eDDsaB7LxW",
  "key33": "5YXmiK5h8us4XUXGMpC9JVihmb4Jr8xepLwSTypo4NtmTSe7UqjeBfoAhg1pXhvpyWa8Hm7Xskx9WfAyyHF7gH2t",
  "key34": "5V2i79vRZy1P8JWof4acpnuy5KqS5JvRCkuEfQ9R4rq2ZHVeUPAwZF6xp5va93enpphho7cx9E9fLHGfkYdkRPSD",
  "key35": "4uZsEdJS1ncEDAuiiCmtTsrMQuf5ZrmL1Nidqx3Vg37guyNrfpDAwFQ3iHFPda72dG2KPdYxFjhrRcBuivJCXRRw",
  "key36": "2d6g4MrxqRPqvJ4p1jhwPsoL4bAKq7FsYqWNTaLt87asaVz4WZYFeNhTENNGhDtMCQcLc6ReLepaNWhfEfgH7Wx9",
  "key37": "3S1rM7bLFhuSLR8YBcWjxjUM7Z8XvzTjtiLmCbEWZdJTvxzMTcEiF3CQNgYSfsFB4kvaoz1h2tE5VpXaJuXoX4yE",
  "key38": "5pRmq4sBrTAWP1B3AGgFfqoLT6aocKjjjjcMw7hGYuhkvz43REEYoc8dHuZtzgto14uerxhMsB2AEf2uTJtJuzP7",
  "key39": "4ygyguforUuaqrwuypgiyhbHMnfFHcWVvXuntDJuN53DJNgnnziwdahnezX77Bz81FN8sh6R5HfCPUjvJsR9zTWa",
  "key40": "2NXtrUUHsctVZ7FKqbY6uqhWJ9hZR4AYeb4VYaykQKMQGGXsKogTkZB4Dq7457hw4FSpByVuG7Due1RczBwFgU3M",
  "key41": "2by1xZSqqPYovPzMuhpgiVk613Vbtf9T88ViEyNtvK4yktTs1TsFgsVuCvYvQfp24W2b1Th4p9S8Nv5b4sE4KgbS",
  "key42": "cWQf95s261B6L858X1zz4ortJj6YyBDanu6yQBkokCdRG3i5HE61i9KxqoQZUGF6Eq8sor38YxZxzBnE6CzjtUp",
  "key43": "3Y7bRSj4CkZRtofM1Nv3iZgtvXMNst2umCMgcoqKZiBLouWxVcGDRqMz9iu7tDQvoKTWTudCD7kbZQvyDzVwT8v6",
  "key44": "5anVa6Bjz7YhJiHMmaW8jP8rBXSqGD8UeEx4Pqz9bL8dRk7QtNgZxjDZa9BPkiRirzjbiGgCMmaZ2TeixT8Z5sec",
  "key45": "5GZdG2MxaVhAohc6TMso3k1NHC63aAdSuZ3WNfhR2jjwp8diMpBk4ZLs1qTHH7WQCU6F9X7foCzjcNiuiZfsJxkm",
  "key46": "Z2JVhkUTtWab55ZxDQX894xeJVYi9pnSm93dhxUaJF58ke7hoAmaj3zkzpvdvGW1KBkwme6rgxX434zqRE8cwQB",
  "key47": "51qSKMi9Qbi2duTVfuNGBKmGqdpW75J4Y4UnXqRmfZSkRjjrwZtJKjH7VhVFiFm5JCbCLCo9tHxdXXNp9nAFvyF4",
  "key48": "3sQYfrpqUV74jnc7GLozKW3UocCxYgG61f5x1HaugzjMvtmyYLMaTDk9S4BfZ5Xb9z1JgNGCZcjKWnW9xx8QXtd8"
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
