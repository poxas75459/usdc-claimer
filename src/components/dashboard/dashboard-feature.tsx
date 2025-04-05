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
    "5Np2RF6dorhdvQqEMmPqiAwgpugCsmRhDHJBLPYAwKf1qSdQwz7DhMLaXF7Rgy2PwPbnS1AFcz9k4acZZtpG47bm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3smVzeW23Fkh6wDSdN3Hm7WJTrdUKBtZx4bA2NsvDKiYx41WC4YD6knEMW14FrVbbkxUSSr66n87EqKqve8SWgSS",
  "key1": "DXtyxLUXwXv3ZfBYFpEeJw9dY3m6qPBaGrtWJ3NjPsj9SRDrc8wmKqctAMYEmvQg3f3jU8dq34nE9BhKobBXH8f",
  "key2": "2SHcLmEPdsSpcSjG4dZ54wjXnZafBeUWM4vVRrMzSnaDMRGN5pdeb1Afwed6vZQJsQtS4sNDr4zJspmruwHoieFW",
  "key3": "3Wbjk3MjMNne7Wie3LQcXiEXowSbeXyBUjuvCTXT64C3TGDS1GHaCUU4z83KEAvsLKxTL2ziJ3kUzhbPM29WXaQM",
  "key4": "21pB8rH6uQ64YKvzkKhUPYQtpBB6QFpkX3GdKLHCVMVeojaWxnQv3uMvnipugkesSZS6WNDD72ZcLgQhQMB23m9m",
  "key5": "4iqBLjp1aQJHuQYBXcTRcfGThAkUGwztYYnQeM76x7p5J3BYyFiLYodanfniz8tEc83yjgHxRy4ERhDdi7kgkgWJ",
  "key6": "x1qhGHuhPiqzwJfiZyP1fWvZW1n7MQKYdHKpEKFVQYpXbxMmXDRpiJRhoZtC8xZ5872Yyss3w1KCr75jW2TrhKT",
  "key7": "4puixuE6Qt8YiWxYomryJ5S5vwWBtHce7i5zmG5GUCNmTbsVgfcfymgK5dHTAxvhtLkr2Bj7W8hV2zMsrQGpfcfP",
  "key8": "2Kw4Ues3aCu8hd4eHavXQLyEAvCsZdMQBP8s7HJivjJgwF1otfmDP1C9P86hT3X8svYtjyNZ4TdHgyuuttH5h6Pd",
  "key9": "3DgJVdyG7EPKGMZ3enY7xqF9LJAiEiHvCQWbFYQCSK8kayfePUvTWDLdmhsyPdHjgf1JXKiyvtDEU6tWLZ1wMN5X",
  "key10": "58B7DQfm75N8A5mpR1ympU5df8Z3tiAxFnhQiskY9CzqWxdh39UoTU1BXg63TzRZeMR39GLnq8iym6FjKnuMuzY4",
  "key11": "4HQMof3TayoghTHtAFUAHX9Zka28MwiizCdNphCYmwjaSWJpoCY9PuTaxk3KwmZHFvUSQDier1G6yLdQU2KMgogS",
  "key12": "4VsNuAbcoQ5PvzsWXrWfvuvx9hPJPyffR4m6nWQdH1p2r49o82yo36TWtdsnkGYL1v4cKDXTHSY1mMRBvAZ4p2p7",
  "key13": "4itgp6k4JPv78YGPxtZ2ZS8TvPxzKbzUgsePSoKeCt5vx5XfEexjn5LRg4KCZYfTynLqQfXtcMtDv8ysA6Kf39yM",
  "key14": "5guGNqg6WuvtPGRKKGfmxa7Vr47PP9Zqz9YRRWnmro3jqbZ3y5vqwkAU5K4qdwPijRnRYXAncVURJdtwipmU3tbH",
  "key15": "229hQm91mpdFZQphn8366rBCeK8h36xzgGhjrtcNRkFF4oaAGfLwEfSZr1GGQFrXqcWvdfehggjZFZMiNwF8GTEn",
  "key16": "vcA1RiJfcfGY7vMKnYWnZmayZK23GxXeHQvCZZi6dFs1AdCgmt4vM4L1jF5Kv9wB7oJkUVkro5Axw6feffM5fUZ",
  "key17": "rXyudga6byjga7DxH3WCYJD1Y87qmU64gguoQz52ZoMJfaoWHUNLk8RTwMj17FWKApLCiXBSS3XsDHzKFQctz79",
  "key18": "41keL19kq46ePwJDnjM5VFZ6B3QJ8QvwWLYKq4hRT5hQts1TMKDm1WbSpKdV1htcd8dt5tfDqQQu8Ub4CWconzZs",
  "key19": "2tnaQocYEyaCf6dNNwYtDgnHk2MYg16RQEAebj3HN6daY6x9DvSJ4fzZdpnkPPbHY942CaTHX9JUEGEPcSS1eUwV",
  "key20": "2BdSiSJtKYNYfUhateKLSNPVLuCjNtsfPzrDypjm5S6kBvmNaapDzEcJrKXaSZhJAuRodFMnnRST89PNcAchDEYf",
  "key21": "39KLcC5WwsGUfL6HBT91Jd73LpNiNGzN2ESLbjPjYaigd6bcr2w2FEyYnDz3uNpZ51i2fT9LTatCtG7y9rWy4Z6m",
  "key22": "5hGBPzPaSZ9xCzF9tZmbSVgAjcnTooiW1dULszUJX5BX28AQ7WS4PS4DVARmH631RHmfDgnP4D969qsqDrACtmWp",
  "key23": "tkx1SnfjPiEhXdRJD7GHCWH5cQi4pPhgmYWQDfHx414YvupRV3YHbzVfK3Q9miCf2Mp79Z7YRSQK2ipmnTaPDLe",
  "key24": "XRJ7VJygCfPbRZHBA3nGxhotzVyJKJmwR3ZM7Qp9qEct7Uj6WrfNU8s4nccnCo1TLeJMyVZFT5gqpNU8TKmRB21",
  "key25": "4Z7e2QkX65qcdrtN5YNqvHbaChQwFEHSxS8ssKEy58ufApVGaWsQ7qUjT62MVSqBgyxvwhPBQ89rPGLzZCGZtncU",
  "key26": "2yueqyeu4yeD6h4jt7upWGLjRitU4iZV1PpaS8bf4DSsftw51f5LTfotqEYJ5JfxJ6G84WBwDrQU1fDx9oaCpG3m",
  "key27": "3YjitWWB6hkZ6iAEQv6mx8eQsAfKTkWxTJN9A131RWG5FHt6HCSgMg7eW6jfCoFRVgKKgNKgqXySMNCATcxbGDRM",
  "key28": "XGCkXaoz8W1tAvEsmXf9TPE3fyT7jKTxrLyPaHRBVV6VaghiDe5RK6LcQmgdfyNxvZ9HuYtTjD2t4gn45Mt51DH",
  "key29": "DLAZN5qvGwmVfRPHBe725UMEqKrpJhajNTTrL3BMGtX1btG6dA5JWKiZRhWSRVgdiwRxSphSsucewSF2AD9hwaa",
  "key30": "4Z8wKKJrSZLn5Y2gAqdUqKN4t3S9u2sbp58BXAyaZSMSa4gLoJwaFphLukC4WrNCaaufocSgrW9KyVwGnzk3JJy5",
  "key31": "2ES8rWvJeCHN7XXAkCAaLYATbEJqzS4fGRUu5jAqUkFQmwU3mWUEju7j1qoCBizh1bRsxz8mGjrNe6RxgUcRzrYw",
  "key32": "2BXu6J3FhMrWEjRt7sveNNzLuHr3PCnSaqREnRN7sQcdiUgAqQWrKN6Mov2K5dmwfSCBuiXTkzT4UTN8eRvchEdk",
  "key33": "RdECX8Lev18sVHnJXG3VK78c1bhbVpkf4KXDjqAMBTCKgAL1dUD7HJeEWwNezf8245o8QhriRUFH4WkvsrCv1Ue",
  "key34": "3AH8LCH8s2F6LxcDbSEtjVdixgWKf3uibRZbfR2fNEPoMXphdZsskcLyobGKnZ75MTQofZ8jq7mDZfBGSH3wFtLZ",
  "key35": "kEEoFLU4utiXb7sR3HkYuhCFq7Nhe9P57nGuo2YXbbLhszY4YgKqCJReTbNLuvA3TDm8B4drtJu9pj1Y8T5r8mQ",
  "key36": "29pzxBgkYN8tJETDqunfHNr57EZjzRn8DWGHKyFW4yw3KjiTzqQjG17byVSYDoKXXBB5sba5N9C4eKXy48ztRZDV",
  "key37": "5gSwewBJGm7BkaJpV4ZxSRfbHwYBAzuQYoc7WBYyj22xoghEtiaAjsKHwAVXYL6nPdjGqx9bHixtqY3HvBVRvD1b",
  "key38": "UA86zFnuQYseVm4hB6VgtkZVQJgebutzXtWmNpiBxeWsJtNSZz5tXQfZQTCjT5ZHmFZHr6nvvYvdAvyWhjhJ5PG",
  "key39": "5GnL8SKv6cRGebAN5j9EqWJGEeDHcPkGAdFYuR2eYnTJzrpdaaLZWmVWsyPFAPUvk5EKWBEZQN17jhAseLR83ezV",
  "key40": "5kvStwB4VQvE718X1apeyznms5h3zJL5covReqpJDBR2nbpw1s9Fxk28dyT5fhX6z1sE6nUcDfTkdQDXC6GpBhwZ",
  "key41": "2waGRDWW2zAyViCUFVs4F2dP44LE4oK1oENScNeRmJ2tQeybJWZavuV16j2ExF3LGANAGhjP5SJHnUqTaeGSKcDe",
  "key42": "3Bxnnr8irvaPbCjY1WBBcKEWRfsHzXdS5dv4P33PrAHGJr72d3nLPTjZqjBR3VZ9qTCPeWDDvuvawXkE95Dhu1Lp",
  "key43": "5MmmA8B7tEiMHYoXytxFr8qJo2tw78PB1y8bGwx3a4MNm6F8QJgjQF7Y9WbzQXReLL4cWtRUYQ44dFUvXP96Gksp",
  "key44": "5qRgQojtTfpAzaZQFkBgjx1D8Cqo5m2ixz3mHwBp39fTr3NeVyGzf7YLxUFNbqfH5U9GJFYNofdi1thTpMDCtXyK",
  "key45": "5gEtJvuBwqdoLdgwyMvBqABvaeV26SsfLg6hCcs3qfYMXwgzKFmEBMK8rS9qnXbtqoMShWKaW6qdtBnDPeTwBfjT",
  "key46": "2vVWvjCtxTPGYEx2LuBNRNFhSWCaP1FpUhjEpHJFqrWX8WT89PhtemtDtSYVg9akA8Qmw7M2b9wFDbSBRu1m4Pg8",
  "key47": "21535h1a77MHikMcVnjNfioJ44uczLkgQnn9xyz93dWicX1FFaQSnbfh18Kb413iDkFpUoKAuargZpvzQK18Axs2"
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
