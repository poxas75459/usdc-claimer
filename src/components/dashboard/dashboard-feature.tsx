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
    "2sSgyzPBjbrTaCtRS7GndrJdrPuvgEj7Kbu8F4tYn56Sib5qD7zT7SS5SKyoygZfe6iTXJzGNuyRsHQYsafi59Mo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X48mAM8tkD3GTCDuXKCD1dfdPwuMiapFsbY8v1nWdPZF4Qnn87Jm6ta3UisRgR18vK3sS6BGxfe1Y2QFCZFXyzN",
  "key1": "4nvjrTYiUsdfRsYmqSaUNbYNNaZcJrojf7ddjQpp8aD6UWsiYoMVKiaFyRo34qMsKqkv7ANu812uWPUv8LZuF4V1",
  "key2": "5Hjh5LYuJ94bc1jL5DsMue9ecqtYjtakDum3GSe4uvxGaNde6K2C3pdGkFFNibg1KyuucYVDBFMV9VvQrtsu8S4T",
  "key3": "5cKbcLQKTMbBHLNyeNPERX8fGBFvStS2WGkmsqdsqB4QSyqxBeDMQHVkwMMKcXEocbNQw7fuHvDVtsCKLGKAiZar",
  "key4": "4UcU8ohuMBABZxMg4KvSPUEbs9gneEqmZYsdiJagEmGgmKUpUrw2iv6eDA2xph4aukWZvPxSD6huh146QXhHnmtt",
  "key5": "2tSKuUqFYhEcSqnRhHkci6JSDHYuYSuJQhwc8k64g3Prp5YENQiMs9jE3QjD7e1Zq5WWaWp21gYuq2FVQwgFUB7N",
  "key6": "4JZd8zYxTGDsmiVq7gT6NZ5XzGFVV1SboLdKxyZXB9dz83bL7TRiSNTzmzdWBSHPQXY2yvf1JGuB1xMyD9QtcGP1",
  "key7": "4Wwd8nq5k7L7jS5QnCKdZngH6gwZTaWzxxXpef1WoUz4SD2RsAnBscbxYSqMiWUziPoXeA5iRc5Py6jBwCFx8yLA",
  "key8": "3JUtSNPbr9aMq1UtTgEbDhDUwTYsibtnfrDqu23bgziW8ez91HCPJpNScPEb77foU9fZ8ivWHwtmmvLv2zRn4ipe",
  "key9": "kd4oLabRJ9KTLXk5hYxn7X2MgJvwUrUPP3tDEyaCbsEFdB7qrTGtY7Yv8vw9F7jjymHuruxkDB5JM5MXD6DX9Dn",
  "key10": "i66vLNUR5Kz4LLA23AVrcgKhtZLN2yekjHHFjUwwpEeiA7jngs6u2pgthyu1x3dc1YuNnkQ43dfh8MY1UPK8kaj",
  "key11": "5KBDZ8L3HDbwEGjnDf61Z8qzK7i9fU6W2GonwjPZZYFeDmXQhgmYpjZC5DjjMvf5P5gzM6tRgWdJPCXyTyL72p7q",
  "key12": "2nQnpXUhbrqxs98pN9CMRTRdqTKxgsyNg9V6jT4whtECJb698qjXYpbR9dZhCbDvMBdw8nZxmoPt6bcFiCmWX88T",
  "key13": "5HR4ezdEeHHLxNL1hRtmSQ1pbJfXkj6JrH3PjuAKfpbi3T5HHvniFJyGGLkuZRBfFojJL3F7MgMjbaFDMLKfntFT",
  "key14": "2WM8ehNEM79xXn9tFYY7pqF4Gy8ZmUzfmQYhesJUQ6c6XxGWaVhgoK8RheY5m25iHpwJEeKfEW5fyHFQ2L3of6hn",
  "key15": "24TfF7ortS84WV9rqUG4gTw5xDubrUfSNJh99CYbaKhgUDemaNCxNxgwjnQ9QK8uEctw5f4Xjy5Z3SKy4L4eDxEY",
  "key16": "5oqsPcRW9prG5bQSALHXH1FbUNnEPNQJsPwg9pcTsxFuoWnbZrnmKVsM3Fz2MWDFrLpXsdFwvwk4AuyPxHE6kkGZ",
  "key17": "47v3Hb8t94WP67pDq7QQEbqPPAnUkY9JokQn6eFpHqS2TpdV6vFEZHQaXCWPRLv8AffCpWciAgeVVtVjZitGC2LV",
  "key18": "oD1U9reV2AFpLsgUeSjQ7cZSoYFjYhdVv1tFociBwwHxP1aLAnzGUMEnugDzTeeF9s9e1Botw3VgeTYWrRFA6kX",
  "key19": "4D2HHCPieoz8DNwTWmMGXWpchz9KmsExeKR9UwjKE9pRg7eLVZMgkeKGzU8PSXtxfJLg5rhUfu6kNaAHKtVB2bb2",
  "key20": "3VFb4C7dERN9BoiD48eNL9xiUGimQM5DC3nwjwjwWuXMohQoAPenvhzVKxeXfVK4aUxrPF5go6azNPVYmEhqLqfp",
  "key21": "4i9NvixdpoVQvb2SPp27zszVVdzXYT57NSqvJ15BtxshrSFRcjciY95yGsKbWV3AGPRKNXx4hEzH72gip3xmJcPC",
  "key22": "5WFVbkFNFrXcSjR1HGy6WvBkMBpiwr9fSnSb6BnY6sJDQoMfJqQUoHe6rFmCJQD2S4CFPou2vp9HoNQfKBmgJXy7",
  "key23": "3zZmq5LVh5RHac8ZB7vTmQE7xWBDJcYxtQi7Vbj3NyExHJPU1fCbMcw86VPSoUqtGsdWNZSH2o5XfysGfENLShmn",
  "key24": "4YjWjj2Dm6r1gLyu6vQzYNmw23WpkXMgmd2Suc17G7b2S6PNw41RphGpZjKPEPaUguR9vEsgEq4uRPWgQHdGPxJb",
  "key25": "3CEHAZBRe75J8eysGG59WuN8jypaJ7g4n2WjmXVfpt454XeyGwWrXnBi3gnKkf2tXErGeeSkauouoq957Z6akSQ",
  "key26": "NueGBtUSWSTK9bTrfVWnMtP8Kdfwb25ggioJBgib5bUj17WBVS3g9qK93GD73R5bQ6Aue6bxEEdHENYXiy7vbpf",
  "key27": "RyynEnYFphssjGmaNpVRxB7ZkScWE7mit5TiaHHVAKkNfBzefMB8ZMud2wgG2x1DBw98kA7BDAd9wCFRvx79c1t",
  "key28": "2pxpkJEPSYdjas2RjgkQD1x8E4uDDCkMYquLonQ2xYQjB5jNxPhRqGBnjJoBpDBTEaFdD3asWaodvmNCibJhBim6",
  "key29": "cHQ1DTKS9ZJJD3GLnXfhHW21YKGtHdj6zfFcNNwWaeEqJb37zG4sr12obxWvd3SdSR5aBMmQ6ZySaQx5pHmcWaf",
  "key30": "4XV1frKwoXrpbJPjhLGwW4braN3SUUXNfouxaih4PCuzFXo8WPJrNkqZzc1S3FsPYuzikt5KSgaWfXf9RHxbjBDn",
  "key31": "472zX4McPKeRMkc9VhwCY3uGjc7xc8D8FsSzKPoKzVaAxBg8y76wGmqFYEYZ7ZKW6Vgit1hnvUApUfHUSPDJ5c7Y",
  "key32": "25QjxT7RCQLavZ7CciU8dLxhsbhu6KEmEgpWHWui3xQQz8bk31UompZUMnArhHEJc94jRjRiXaFwGuEVMFTDMW3p",
  "key33": "2yx4Nb2FZJ9mGfXt9WBJ5BkQnPm2ShTFfCeomhqQdWjgzWZZXoWpLQYNfGZkrQ1WuDD2bYetLUifdpxqVm2t7YzM",
  "key34": "47hLpz5HmFRdPe8eAqwTLaSmMGABP17tTA8RNzN7pvvS2AFC1zM6WYAr2R2iCPXSptC9GCWKrs3NKBZScKJtf8xv",
  "key35": "5PzjLFtjmfcGwELtDuDmg8n4VvEy3vEh2KtPUTgqwzLN44j4rYQG92iYp6kYYsVwP5j9eiu8i1RQarLTy27JriWB",
  "key36": "31SxcAijYvnEe3z439XjUsTExkMRxd4aKL7gqpVqgqLcdFALB9TEJHokpHBUorDjKkCrGwrXqu26tmWLSVbBVWzt",
  "key37": "4zKTemkLpu4yB7thMXW4dbkLbHKMLMvxgBx7Ueyyf5fcHyLtcmvtbcWrB7S3WU8rEbB2oKphi16v5JoYXqWGkL41",
  "key38": "28PLfAXpFWqQxqn7mzWP6PnZ2L16b8UFA5UmiZWBfoYm2dV9Mz1kZurRpRxc7pWLb4WUUqtbWQFZskvWM3ot6y3G",
  "key39": "5XCpZvEcBuEuBvQhDr3Zaa4BVhWM8uEKPr1Q9n5b4cGJJoX4mJXEC2Hug6qiQKxXgvZ1pUawJnAPPrs9NuyiS1Ub",
  "key40": "32R8wvVHgZd1himaKR1jFc48yJvbC2UJCfMDBxbvtceDYm2S3M2j4j23kMEfbBxkdnzKnqZGmoszLEgQDuLf2nQ4",
  "key41": "2rm6QqW56ncVJFCWLHURcot24yBgUCHyENteL4EgRJaJAgKS1gqfj2acp6WFCuUBdiYVPqYwMoiG7KtE4aaDTMgD",
  "key42": "28dNgUPEEzmLqCg3B7WNr8QGAYvnh5QnY5dtYqokTpgja98LuqgbEGtmqQLXhSj7MLL4bgTq5RYpUnsgbm9hEMgN",
  "key43": "2NanxfSTNcRpnHc7KokrAqTpJyPHuA9RBGrkCiQMPC3fWSsqKizF81mJQhj2JHw9rNSkvriUqca3SQQ1aubwdRCf",
  "key44": "5hjs6qh4tN4T7Ej4p4ViAnnzwGaHxDj3xuFPuHDzGKKtE2kU1n5bt9ZeH9q2WYnQeCkWzM8ASgMNUKzPunBvyGjz",
  "key45": "24Nmui8hdoasb5DanUzWLqAZCpFEYYP1sQrn7sjoEUEyDFT1dio6WSDrsiNho4V9zscffgE2DCjB6dxogFiapkCH",
  "key46": "abXcEDqsw2jupphufKkzQNKzsM69gg4m4Aj5yfYH4V2198ktRLTuVgfyGvSD85L74g3tvUbSHyyPefYpDKPHwYG",
  "key47": "4DPRzTPAq7BfqQSD9peEggh4epGgtLd7mu4ZEKnecfgX5zie8G1scBn5aMhwzn7oFdwmySR8TX5AG5BAfHc7AoUP",
  "key48": "2wMHRhyAStEVsC6VfK9zAg41QFpik6WoLChRWGU3FQbuVEZhEDAwowza6uHkrxj6uCFL4dJ7xE8ZpbACnVgSgMWu",
  "key49": "w9BXvZ83eEKqBBsK6qw8FUHiMZ9eqJDKv35Xb1tMPYpeEFheMmSCNUCUvqosw6JzuRK245cnFCGaKSwuXpgtR5S"
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
