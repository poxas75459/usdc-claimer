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
    "3KoW4AC8AEso2sYDeFirsM9xYkatFmVyHUx6Se1W5Bnm8Ki1AnwYvvPj1tLHUPm6M7xUhf4gs7GCgectSrDSVyQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65f1eSvC8shhJnko6U3p9WCmVR2aREeTX2vRAjvSqRXLUkCuUG2m9z63KuPaEEuTk1mdyNUDdxArCLXovXF72h3k",
  "key1": "85hSuJvB7qNwRVHSpLPLhURpHVXEvGes6qfT8eDceLDBRFFBcMqCGxVcWFMZKDJJS1w5hgQD4NwbRzYHS6UdPMa",
  "key2": "41R4n9NGmVFQXAxPZk1984MyM5QAALidmtYg2nunbfne2ihHNNYR1PTJFnWF5tyQgLpGFFvtv4dYLEiMoAhX9J6z",
  "key3": "3EwmLkZHyYAvqtnqutZqhvuevEyonSH1s25zjkGbJyjPfQCczTCEpKpYMy4JbMhdWE32kkT9J1Kxm99yVyx4xSE",
  "key4": "2oE2Vpf8S1yDLxEL8ZDoA3HNWRAayvRTG7nz2CWnBhaPevEuph3zZyYjwmdwi8mV7qQ6Ec8FnhtEupn4B5Ttae6E",
  "key5": "2Ptwaa2jvEZ7Sswrpg3d3cDaM2NME9eyxVmknANcKMvZH8PUGtu125X7fDfnaK7aGmYNb2mF5WjM4cfKHAc1xUZY",
  "key6": "tN7Gn2YgA5uwY86nD3nZaKHWxLR5ba8KCz9LbfhY8cYJz4PDePGv987QV21FWrEXVL3c6biJwxiBtxLVonDiq2v",
  "key7": "42Gkgy4GnRFeVSeYktSeMVd1aGG7KVyc9kbMveeU8R2rXNNbeqBMPVDhGH3edpxhVAA7fwsub3pfqUkjXdDyvUh4",
  "key8": "3YEkaHbG7rhW9Mt4xRi19KYab6YBdwJsf5vHYX8SjyfuTcpustAd4T9Vt72AGbKoH4BvscTM1MuHWL69ogYo4V63",
  "key9": "pmNy7N1THE6UXWCtvFCgkBqCb8y4suU8zDsAPWghK4GizrhYtUQaUzHdYsZnojX3j3Fo4Ty73rNRYToiKyEoXXY",
  "key10": "5Jbdj2yLCDoxNoipyYRJARE2d3ysCXLWGQzCdpnXP8nX1D6FNMzCTBaLFjcCaDpxFgM36jCenDe35WxeVQMv1rFv",
  "key11": "wW6k1DGrCEK8mjbPhWfbbpsz64MQ9qjVzBvwx75YbQtUHotQVKApen2P6v6XryfYGeXjpfQSePC7X2taCDuvZeM",
  "key12": "ad1UUuPCWZAGwZzuHvQy1haD3xjzCrck88B63mikxNP7zUMYjy4bSkQhVGTw26RSGLkZGc5BjJKVUZefcLzuvRL",
  "key13": "a4ZhDwayuzquDM1aNQ66jYGicL84AF5iLLBo4iQNstYKCQzt4at3xCb8NGyvnKijusZ7ZNfdPE77EgHnaKLLLoV",
  "key14": "3vPPrrHykn6tPZJDxUot3sDAAxpxxN4fV82p4qMF6XTh3NvmYTok9CVJc2FpQXy9Nyx2pdENEecrtZqrkYAQmZvi",
  "key15": "zHtJcYs1eEGsYB4bfqpaaT9offWhWAtkZkkVv6ZqRrrjHzFxjJxqvfk4Nw5BQYRtNE22N4xZH8AcZLBvBZ7zuCs",
  "key16": "jiWzXttYLbNbkzj1ncBN36ZSG4fgHdj4o5RFVnLSsRd4auiv8YM1KHJkVWaEPUFZo6RiHjyMMvvfLwU88z1vdhC",
  "key17": "2d3RqYVCbHKiM5wfkhXGCXJTe1x37CtLNVhdVaksTQJesz3UNZ3eKRJBK5z6UhrYQ4GYB2xojG9xjDoGHYvvw1vH",
  "key18": "4tGkRNQ1ZRMzmp6AM58WS4WmTjYhWkWwcK1e95bhn4wH2P6wiMUMnzyfFRbxmQDcfFjYfNbUCWNpchgP3PCCWe8W",
  "key19": "2N4sS3QooQ1yTffVV41WtKDhDWQa7PNCP7W8PVc1Qp1cM4k9PU9D6Jw5j5HvV1AMh65o7K2KBt7GkkbByD2DbUkA",
  "key20": "5quLUbKGRascL8rZVAkRgbzmUbHju6cgjpwBofTH91K5AMaNH1b1YjZ119StX4eiFqGu4haBisFniJRTqGZj9UKy",
  "key21": "pkZZZMaPjogV2BUMARgh8gYk8Who4L8U3BZsgNevJ3CiMPh7h5JtxCdPrYLuSdnZPuhHF9BidUGjv3QQnUYKXTD",
  "key22": "2TuQN8i3D3BHwyHPWwpBA4bHho3vmBGDzCbTgcYDkxBxuWm2Pyzudsxj8g8ghSyAfyFLjpZnWtpZiuk4V1r6Pmuz",
  "key23": "3jSvCu99wC5bQso9TnLgvaE6qtnfr4NnPym1t8ZwSpNCNKRkzHUdQr1Sv6Yiren3ysu6Twm3dNNrCHNYeFSXDTwe",
  "key24": "rnYZzZUQAxDfBP9EJ3UxQ7JdG1MrqmmdAxSZF5nyzrjvfyzBGrRjhQS2w4nWqNmqK3QzRhVbuTaFDrmyQAG3sQX",
  "key25": "L3KY9iH6aAJ8qiui5gN2tke7B3iruqUQAzGxQKkse88SX4Y7M2n9pz9zvYjgu59w3DmW85iNJg2RnMzmKmaoL5N",
  "key26": "3A6uiBDfVAJsMhqhhQX8dAASn7DNwRGupaW65vBGjZoqDWA8LWkrj9rcJuqEFgjchEUn8sGXF3ZzJ223aCVsub1B",
  "key27": "2bTKrGrZeJdvXmRjm4VxcMC5U3VK3YSNJJVkDDQmaSMfAY4P6quSs2aF9Rfae88ku1gPFNyKwyQ2uMevycCCvGSM",
  "key28": "2HhG6L3iM4mmbiiJkeYpexE5msPfw3YSoWz8GvDwUWmwJGRLmSFgLk1UGWFWDyrus2W2dUHHJhhV6GfNf638iLYf",
  "key29": "4KCPxt9HVCt7PJKDRqMhFWcLzf3xo7DcBE2jtntD1JoTAsCUE2NzE5m9D1d4fhy4x4SeaJrRCyR1fkn2bxgtZA1V",
  "key30": "4wpuukCwtgQgrF7ygXGwj6LLUvqgcDcMxSyzZWbX6P119gYnS5H5tE6vna3rQfn8VCFE5e13cabEogGBRrbz25w",
  "key31": "VEw9saWQ4NVi5DxZmbdjZznkww5nH3KACokhcECvD7mKE2D8MxpSroZ7YteH7FJ3NcAPsTAXVCh8dXsMUMy8wfU",
  "key32": "4vJVAXv5j41wXEtmc4rUvuM1rHtTNSpQfUu82aooQo1ZrSiLRhp1B4Naj61fDToKugaNg9J3Evfd1rNxPhHtzSf9",
  "key33": "3tGZGqjGmU1CCAqiPFv7BXf9PQN9pG4aidx3dapbcsDFtbFsGBBsfKbxPXBEyrKVAD2e3ghxHajU6KeaB3PHR3oK",
  "key34": "F3f1a94BfGfp3gd7Mu5fiG5SyCCkEs4zR6P6wDT3EkXghsYr96YtzYrErKu488w67CnXjnsvVUbDA3jx282LyCN",
  "key35": "5keT12mdTPfazV9xXui8ECfUsQvXTfh779JNhtX3b7NkcSz7QF7g6Ng9inffcQybJqC9pwXWAkWzUWiL5SxYCU2X",
  "key36": "y2dncCJPPaQch3ZmhQsTtGqXnXgzfFqwKH2mZ4iJezqx7dXowP5kdJ991tY1q85WfB23n5JwfoLiuY6Pm3nFdXp",
  "key37": "2XqJmb31XKAFKkTWP7a3JqhmfgJQTLi7czn4rPL3pxc96QKqgG1nX5VJBmE9tqsqzTFGsxJTLEwP78rBTr9XDyzd",
  "key38": "3YzU2DEraNV4UGZSowRWZuNCiKJrR3b5befXzSp8dtK2wr3hoy1c8gNt3LbfvzhLc2ubST7gnb3aWDoCQJp5ezRb",
  "key39": "2XnfKMNdipwDYMtKdPoGt7CnA7nDYdY1mU6Qngx3rQqk58HfCW1JvNpCwPnAP5whw2mS6n6vPaaubLJ8hRB8bnaT",
  "key40": "5cua6wFDQhg2ggwP5atzrAcfc2Zh1Fuo5ozvF3P3cyNURyxPH4KFAjYpfyKbJ8GtTBMzEoEtUM5uXpmT2Eriek7L",
  "key41": "5xaaSpgM5HxkQ7xswijVRd1HaEm9i9ttM4tJzb8JemG7aL7eRxbLyV2kqppv7cgUqaDdw88Gbh19UM2Z1ybB4wtx",
  "key42": "2P5RjNWoUYFZ4dKtiKg74CfTuDGhKbT4nZDJbLZxKAPH8CJyDD9pdQdheVSdR8KbXYNqNWY6KkWQhdtkrVPHa7aN",
  "key43": "tjvA6WwCDXzwMJwUYoq5c29EUPaWrwRWuFuQke5YWsCtMAnNiuEiGcfNbwQdhbGxvL8VLU2433N4QsgG9wehezX",
  "key44": "vucVCjUNmm7eaFuRS8jMi9YJKJMEFH2YWxegZRuct1m812Sr3PKrKwkuAh5GNwamU9tPCdAbTEcEw8SjspjRtnx",
  "key45": "2hmBUMM52sb63DpTRhfwzC8rzHLDQ8r3AbAArYX4AD3meihbLkaz4FqLuorg5QseFoUf6SDM2UNMb9dQGVb5VnLj",
  "key46": "52irHBhERjJYx5oUVHh79Ht2jHFBSDpMNhNSZfv3LPTewSPwECNuSuWj9Sx6hjwdFv6gdjU8m511K9HRPbRDEfK5",
  "key47": "37GHt7ynEvfwU9nuytwKenpQVmpSX3QZDbzcCtmtfHenYTZ7sxeZeTmC4X4h7PmiwNNcCAqz7EdoBsYa6YXQQ5Gs",
  "key48": "BcFTCcekZf415iuuy9wYEtdsDtLruNgc6zJtmJFkAVLmUR5mtnLFcusUWM1E1U9kSfFUL9TqkxWA6Lr2vSRrPbj"
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
