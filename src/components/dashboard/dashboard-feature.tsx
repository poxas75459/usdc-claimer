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
    "4zJh481qU9aqBDdUpbWgbRMvtUPCpYHQcSEg2aeVLH1yfjKDj6bx4EYcKb3eDH5mo9sXzEuVjpqpMpAo2kc6Reyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z97LTRGC9R8fV5x2UAoBe3MVW3ZEXCPufMH7tMqyNdU1xXiaLJ4imY7tFEBqk7rD6qDUiboZ2RKuwxEy3YZUvX2",
  "key1": "2PPtV3vUBhPKscdd1LVxuSG29XX7r1Cq2jjUnt2vrRwbU1G4H25bGCxVFQzBDB49qrKy53UukC5EPYuseP4v8wXa",
  "key2": "3pNNQj34HKkGWT6gkqPpGUz671g3QdBkvoEZ7qTgo4juVH1rwGCHdcQXV4cgm4NEoseHLPHCcXNmmTG6pRKaYCcK",
  "key3": "24BNmFHQx4SCkuXVoPPyTDHC73KN7vUZq7G2ryVjP3d3qHkZCz28YEfeVed5zdCFUFMHH9X48tnm4C5cnqedySfj",
  "key4": "3M1buzXUjPZjQqYNYzTtHnm5J2oKfwKJsQQ232Sf3B45ZQBB29kmkmWWpuFMTjC4XwfNzVDQ8N5Y7axypPpfRqsv",
  "key5": "d2nzN4ZMfVBgy2tp9L9NW8Svk4qfGYYWNeZZWhsD63HPCj8XJdaXt5QaCARho5mg7M37cDnJkjnVSi17A1n2a5c",
  "key6": "2DdCM4iMw79CNjczpTYgaZde3DpjSrrFECXpqa79NswH9XS86pVu8LKAW5zfZjv8XHC5T1uj2BbraU7YwVYzaFzH",
  "key7": "5G2c6qte476yhx1GomfAUaFiEsHiXmLsMusBXxpmMJZM44TZbvJAcAi4pd8V1yyvRQQ7tmgJT7m7BBK14TKBmGxu",
  "key8": "3NCZ6j3VEywZAegDybcKxgMsFUgzH773ZhpF4VQZt6kkEXdL2bdziRJkfEMVh4t58bjWQA4wzQnQAML2RU9gTrcu",
  "key9": "3CsA93jepoAn7mNPnRg538b3wXNgTwFKDUJmoxG1aFnDHYnCJyRS24qqkwLo9fnW6Cs1zL7TJuvJB9rycT4mp4ux",
  "key10": "AYPLdMjYK2JwuLnEGvG8zjqhDim69TmAZwF4XuqnY4XUx2Wa8nw1516KWFrGreTirtmpg16babCMJBZSPxNBXf4",
  "key11": "qcbQ5QPbhsoFk22csvkbrPTdCFHFJRqRzmhDZtD36ZzQpxXc4b9vnv1BMBnPaE7DQV1c1pBaTH8DcaGR6WZQd2V",
  "key12": "45RETDYc8tcs3Qj2ng1wp4cB587H2aqfziM8VkCyfkN1J11eHGzmmC2GX49vWLyrK9ov4UACb2pQisbK2wPYwKz8",
  "key13": "5q8AyvC9QPZh6Hn2JAwHN1UTXNBRq2q5Wm97ymxqvD4SdHUC3PMBPk1Sa6cyviiEyjqLfSmvBMm9CxgXH8uL8jnJ",
  "key14": "5pXq7qXHvuQsr7G2sbRhFWLqoyLAawFNgRWJh9K1LNczkBr4U5tKorz6z4E1TiBBLqz7AZstRi5juJjCkDLAGxW4",
  "key15": "413XnRtX4fWb2ycY6QvZPw9TMTq1PQKFavZRdq88PnXXcgrEx333c6HpTFRe8fn7mP6LHwecMceAGogtFVfdYeqX",
  "key16": "2pY5RsL6rRMT8kj2ZbvzUFtW8dewEYFpGULNNAeBTxU78SoXuZNRarkDJWA7xFga2YATaTz9tBBQYftAihDuzuqL",
  "key17": "2AU1dUEYmqUzuJXKEh7AzWg5Zeop4ygf5B8bwFuqZ6WrLZu9nZkzqEjtLHGRFKy6JPSkxQ3Ltgw37A72Jh4NXgtc",
  "key18": "5R7RZHWby7BDqXktcjLiis5fD8Y1Ct9LzexSVtJ5X93xEcExdBnCBc3QoQ9xwnem6jzdqwak5HGyV7HPxizPTp2V",
  "key19": "5hvJyrqnFZz4m5ea58ay92aU1T1mr2DV79QrsfDSc2A1TyZuvFyQpzHUWtsTAF1cSwRMxy7ADp2auf5QYA7VxLCN",
  "key20": "5rrNjGLVCYVmumR15pKeDmWYg2MbKDNpi9yRu4vKboPHPwqA9jc9WM6jyvtYDAwHShVnWSjpm89oN2nsk41auCQa",
  "key21": "5kkKbfwduAFqgokmuqp6Ls5JXDzPp39vCfBM8n8T1L2ZQaSXYGML3NmmMcip2X9LxGwWC5ttwJrqtPiZZEYBBKSL",
  "key22": "Wg84DfcfSP2fT1eSpT8Zv2TX7RWKMCqSr2FNX1op3rf7nraY1Z2UjSVSZmQGBnKxurCdMReCeGtjv5EGRJN6f3w",
  "key23": "4c91suqtSbR9Nq4yiNFAPBBvQLFZvSfGXZQKTSPXmpX4YoH9rHbzM5gvVByJf8a4uVepRM9AMmuNxsRFuGBwsCDF",
  "key24": "5jVpERZRq17gBct2PiysSxQXknWp1Bo2Ci43m6cyiNbcLoiSGfzBqHTrxkXYinFpkwveRZBYKGhAkmEdr6UfTurR",
  "key25": "5EAvR65PGKu8QRaBQceoKXnQbj9PJLXFeywmf1CTe76ANGCbBa4uouy4Pnn3tfdXhusBCZ72dXge49hFYf3hZdDU",
  "key26": "3Hge87GR2Fn2vgy44tmB2opbntJj28RSMvfMnXxH6A5M2LGpxd8e6v4riStmE6a4Eu9K9cDF8NmT5rsVCfJXZR2E",
  "key27": "2GpWjANhqw3iGdpWorTUjLwpg7GFCRkWPfjx32reiD3bP8hnr5s4wj66zwcBdEJ3XMpHuwcJWugoLY9JkbFKLAXw",
  "key28": "3hFiSv1j9yeak3KKDiZhKvgvrZNkra3iPLxjZm3Yu6zfk8MBRJWKnskProPGT6AwubhvBL9bYf7kg7WAjrW77UHb",
  "key29": "3sfiANb6fWKcuHR1u9jVbFEsCrra7oQDdY6n9met9ojGNsMdrmgNuTzQduRXzuPWuKvVs5wSbS9HeHAQPKAMNj66",
  "key30": "2VVcbByaxULeRBL3kgo4iS7u45q4PjoNw895R1ttM8HLqfeESff8tnEDuAGGaF6ebDKoB8aVJRucbFuD4iZskCUK",
  "key31": "4TPcxAFZB3oMb3MwXfTWrpwYK7FN2aRo1x1uc5Li4WgfWqn8J9wL6VwUD2pbVGEu8mzSbg68kdHSsw8UYoTqxMi9",
  "key32": "443jmkVj6UeeW3wj67FfwoebsbJ1LjFjPxBTDi8xHvYgghaVnjj5S3k8WwZKETXj7v3PeyUdf3VdA9yAAcVAKoLU",
  "key33": "KMupcPVG7im9nYvyikGRdD7QHrTPbxsB6GrsX3kUkjuAYoQASvx2qkzvXLMybHak8K6XZHAod83pV2nyxt8gxbq",
  "key34": "5PN64JqL9nwYEheDwNJGLZWvUqKsqiwADbUxTM3KTBS5RoZ9abFjfxxaDAtxFpqxeuLdukgN5gBVrdJzFVyikr2B",
  "key35": "E3rU9FEsDMk25cvDhdRDuz9gNxoTZz5JHWMfzRw2eoJtZpC1afvecgn7o4PyGvyA2sPLLoNQRrJX3wX4emcgwUv",
  "key36": "23GjBQQGQABY5cVvdES2UU6ahWjgYfKjNQ3Gk6P1v6eHNnCEca7ugLvD69NzEyAwjriTaTBg2x3UWNmqUkuNC4qT",
  "key37": "3KiT4SvBrpBpxGMLG4HPEEzaCTY5Xr3mjrme34wkf6MTdDCuqaXXAAKP5tDgo8mWsbU3EitMA9FRqyAk2TLBJHJi",
  "key38": "4tTowPoRwFu1K96TAFmpMR3YZbvkXkAP1dmPrno9TMVivNrp5cAzr9Fc96fXxbxnj8eeVEzTz6WczHcywrWEEQvR",
  "key39": "2uiFXruSss1UXfHkJtkKycQRWaDAegBDbuEttnsntM699kpKVwG4459yVgyR2HTWV2iUyviTAYSbp2DuJbC6yUav",
  "key40": "67K19QS4hVxPb68kSnDzgYaAFvz37pfELNvijQbbXLxTqoUGYcC2rfF8vNsVogkMMLcx9eFbxdmZWLjBBaBXU3H7",
  "key41": "3EWHYaSEYVoUzkAyGDSbTJfEzzjFSzEr3qQzEyn9q5jgG7w35wvWVPJnQZCC4Wq6kZEc4nVTV1PMkd7qUoQSUSss",
  "key42": "5X3o3i1UqaPHokyYbz6mY6yRUVuBFyih61KHpYLjWBQaFbfVHhfXjR57AMkvRAWyuKrrr66Sa2RPtRFCqQ1QWHzJ",
  "key43": "2C9wAhAFez14ugaRVvEB8kJo6LzpUxrUSnjRcTxg5XfZHgd5PLey3pbpZwezwahvNDBgT1baxjbRi8iHn9cZDcx4",
  "key44": "3VCkias4TxU4uud26ap79Rb9yeq35L7ZPfrz1ft8bMTrj1mZ8EJTCpaoThaeiXXsTDPYWBUMmKitwTiSKKKZXki4"
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
