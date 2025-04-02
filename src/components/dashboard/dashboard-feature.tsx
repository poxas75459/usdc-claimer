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
    "p7Pr2UCZmU5WAXtN9cQoczRxdx8wXATBVnCzaeMr2WDRbmdfvc8kshHopWBYorrMKx4ioU3J6jDaPTUmV9Vujss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3un4UxS3p35LTwzyRe96s125HRjnCKvMZiNTiQP2ZCWKezmhpUMDpQXkAyefEyJzCCceKmeDh5ZGyFuu7cYLmWxw",
  "key1": "5344EDWuJAKLa3ZKNDjinM8jUwxPjBKSb8yozqmBx7QWUt5QovoU1mFL3NixmYATG76jM6mapKGbMV7Gid3RxT3p",
  "key2": "4mqtBFRy3B1iVT9GPFmQiTCtgU4ftUkDMsHmfykP5aJVUmuoBasKxyrmyLGm5YCTzxxqgSTrHLbQ4WY5Kq2jd4D7",
  "key3": "3zxRxuLpMB24SCoxBBAoyajzcs42M2Ln441j5coNRwiKriwdAC97Qp4CNy29USAM6Y7wDstfXqNrLTg6GyqG225t",
  "key4": "3Vo6SmXpUEY1JZJA1oCz4gWyTc2jLrwxw5Hs6zexF4cW5HYwRiXFFj4htWUecCumrcNCAjjMSPCysNAxZt5r27yC",
  "key5": "5rhDA4WNPbhms3zrkdYBBwLszYBMpdN1GZX7a6pTuSG9qvznUHHEAgJMvzxmecFJ6VS5juJoVBBTF7RQ4ubVjRvj",
  "key6": "3uZiQ35bE6YHgXDntDssV8YLLV438JbzGtYDV29Qubhcjt5hiU6TDwPwX4AFbuW8jQYmqEfowifZ6QDeuBkaDSH6",
  "key7": "3yTWHX89iGMWtFXcF1XTzEVzuyN9QrSdxJChDCnJRiNKMutCvz1jfEF5ucfRH5e2yNLt6q3ECgb7cxmhs3FkMvxm",
  "key8": "d6u2E2mAwEtmMeAo4Ji7NkyJBkiwyqsv41vM4UsRR3n7ubETudRmuQEfD2AYj9mh6kv5q7YqhgsmBeBuQh8FnbM",
  "key9": "5zv9NTCrEm6Yu9S3zK2RRfQxdVD2HH7tVc5F1HA3L3FoyA14VSwZL6o86dEEMgLQG4GT5eep5JWb4jWM1Snz9KFP",
  "key10": "2iTy8Gmxertf29PJEjZZskGLcVhGKkmYAdc3cuPKhsqhJ8hsxzQ5eEY7RdMjCs7dxHWEW5EVdcLfP34kvtAqhEUU",
  "key11": "5dzP3VBTQGstX68xFDG3a4un1m9xJ41poiSJbpRSExPzAh9w8DpVQqE4e76kCeNwobRMDG6GQ9rJt7XCpQyxU6RH",
  "key12": "3CimkeDGdGN2chCX4HJUWqUmeSSxh7Di7kwM1XRhtoPrzRfWdKtGdxVB1sNsU5UJm94CVjztPkR4XFzVSHUHn3y8",
  "key13": "2J9XDf995CYZ3MMSbrfu14iHAEBKqWjAH8F6nUUqbV1CTF1vU8tcF7uvJ2nRTD5WzBnifeCgzU7KLonve4UxvsuW",
  "key14": "5G1EYRY3M9wxRFWm3PXSzbZFXdADBAd367Kx5Sn8KfZSexcduzgDeoT7eLt5dD4jc5Mk5xAHHQowNAgc7zRbBvp8",
  "key15": "4ECwzqYsUG9W5fT4XeVDnEUhYRyFpSb33zfSWg3vPPm7HGGbj3kAasN5vRE8vXWBo2nrCtPUFhJN3jAZcRULX2ZG",
  "key16": "3H9mpXmuYowU6AxPTxgSi1RUbftz6H3nx3xXcoQjeoFDEbZ8z74VDF7mqtgTwpuuhC9p1rsqw6Q45WPkbeLz9XW8",
  "key17": "4BXPzMq1PoinJ8aKP42xW3MC97YRqnCLLpiG3krVZVDBi6wi7TBzPaUcT1u8NT6YGrSZ3LKaZXTyTCyFZu5Wo6Wj",
  "key18": "DDikMCphqoK633WRbWvhG52H8Lts54W3SxQnHRzAxS3UPcBxhXeZtUYov8n6Gy1ZhvUfRwA3rCuyZ6RqZj6eZtq",
  "key19": "223syqCx9sicKe3cQqUvyWh4C3652LYkRcxyVs5QNH3rp6NuFuxe2Kx5c8VVquUnqVF5bbNnN5jwhv5ht75HtWYt",
  "key20": "3zkejBrRLUCNbrJMpjMfrk87fQV5DKa7xNJxLrrtUme2gXSP8BzNye9E3jTENKijH96EtBEoBf5N8C2d2tv3SsHa",
  "key21": "85oZ3exAJTxH3PNea2xgYvuogrKLEgfmSk6r7b4LTyJ6f9ejWEgvduULXqB7VDaxZGg6x7noPc6T5HLHV3vesdm",
  "key22": "48ELg4DPq6wyQBmBNXSy3xRdbpZVheYTRW8rgeUw9KyxKTE1kQTeYrnGU7WBZadVNk4j3XwkdZpBgy8iaM1K3q72",
  "key23": "2N9WSpKxiMpjrDFtgd1NAdorXZeiJhv3NrKnWenxQm8WKG8WrZ8TZXMa1Q79nnYFXeBZM5XzPTtxszjXhuzBtZ6e",
  "key24": "4VAwLQo9BfvEndo5NFzAxov5WS1bGnS2D3hfDsSjxLrMHWNC6GejiRzwgkLwG75WzWYwvxkzv2fddPje9Qv9iDGf",
  "key25": "3x8Z6fJyMJdNN8Fu77gnedk5vcYhRbTSqDqKqFhYEqayQfBJxVEY3GuHtMEthmyZo23mzGacfvBWEewgsPrrke8i",
  "key26": "3EHUj2EJ4SexfL2frVX6d5wNivkwHFrRhcXyHoofDQEt9PodrzqjyyK8L2LeXdPYEByxepZBKmnf5sGTi958HRib",
  "key27": "5LgMQCeFHEKsGnQWrrhZxXPYLCoNkJ9umJrwXK714KjovSf7iek3mVX6aAgd3DMEA2CxYBJXi26NvqpFhes3Rork",
  "key28": "n7evh9UXoYPK3Vq1YQrteSryRgR5ANq5CYSvbnmZTGeLfqTh6kzr57SuaF2DVwZX6KAyrbXqfbwsRahwS3UpyJ4",
  "key29": "5BfZjkdiyH6BrkiB9KbV48ufTxswrWQv36czydPp9GhReRZcM3iXK2fNnoRwC53Wx3QgYTXGCS4uqHrT4XRS8n6e",
  "key30": "4wgkFx2HmbBmxs8pmQNKaVU2vBFb1LYLBEDw6cYnsmo63EYSt1HDyvQYYza27rajfvgMUhgfaDqmaFvJxjj96h4a",
  "key31": "PYknQ1u1Y9jHfVt1aZhUrhM4qJwftQGZe37qJCGbxZCRMJebzhsjFK3c8vwr5kgkp2BHyECoDtVGRDRdTJvQPdB",
  "key32": "jVHqVjQJ1t5m2aux2jTtApfadrJKF94iZGR2jDhQpAAEwdKQnHHWujgDedHjCFuUqydCg1HUSPMZgLhMi98jWwM",
  "key33": "fLgs2EXntoH95jJpAPo5D5FoCPUqqBNDexk9W3Eo5uv9TSEr2C1q4iJBY634XN3LT3hnS2QXs7KjNexFuxB5VaQ",
  "key34": "5BmK5NVXWfq7LM6ZzktoU2Y3oNk1WwPbHHHoqYHLB8a5EL7y5C3cdw895eHifsYXFA4nEJ21GJCqVSjpaFkGkYgS",
  "key35": "5S7sgF2LT1Ffb9McXtzm3PUBsj7dUfoPahTpceV4WyZGcRdDQvk3STZXjKXShFTqQFx7HNGicXVRtAL73DT1FAri",
  "key36": "5C1uth2RCPbESykfpLmzBF7YnKSxVthBQH36vYpFyP5PQKXYuHTDH5srNh9HPeUuCqe32D6UyyiJvAdohi4p6ZXd"
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
