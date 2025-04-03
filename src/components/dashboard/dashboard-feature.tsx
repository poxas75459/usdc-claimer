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
    "2G1Ar6853wgTTJwjpCEXrxC9UgXXLjWU5WzWo1LW2s718PTdyQfLCorWdRZVvn6ULCBfxEsuQvhEqyjXUmFKX8kd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2miqzVegHw1HkUfG4LufbhaCkSX2jjuTpxsvXntVZajKP2WuXZGEM99mSdDMayvhf6aU3SvvUU3Bmchbkjr3KAaW",
  "key1": "4rMXutzFq3g6KZLTK5oTfLHPAQ8hGH1RpcejdLrtxoDiCZG4uboTDVqYfB6UimipwWU6XrU3w6Vf3zNShdLd1Q7D",
  "key2": "7ByZMJ132T5y2GsL5KeZ8BmfXGt5CSkptkS6M3S5ykGtw4wgZ8LuxetzaaRBrBT68g1QY7D4YWrjScYNBMrtPi8",
  "key3": "i8NGVh9ktkLqHJtivXiYWxYfjWFnVQmRPReC5pqcpX5vzYAXeQsAeXQbhGNWcAzEMhidMgEwGhGSYbqpHyi2J19",
  "key4": "4Pn3ozfTCZuRLM3VVaB1VjdBwgqWP4329ACZjZRAHFdMnpkx73fWk22WQ4xF96bHTmuh7wiRcae5VUB52by6Zkf7",
  "key5": "383k9XL3GEmMH3krrR7okxv4FL52SxhY3ZJMSHxgrkGWWBfjTHo3wBjpmbprdjFwuHj573pasYXB5msgkcxeDq6U",
  "key6": "6nwkB37c2SyMRAu978ystMmNA6x5ruaGAv1T7wVQ1g25jCsUcX84WLzfx2QkP4UtjB5g5k7KwTiHnBJDR8XerCn",
  "key7": "2yvisWuHnL7F8Q4mVAADdrJx4PUtnkopRGJQAS65vTyhXxN6qc4ZioTo31TZSP25TjLzL5ZFFM6PTNpuYv4qRq2q",
  "key8": "3td2gmFmAWL8uSqPRYUMhEhHhyEwJpJYCU131Affusv2XqjpYTjudgmC7XxzbFYs5SWXtSo88ApV7Lf1562Hgv1J",
  "key9": "4XcVoBrq1tuJXap6nEPB7euwjdPpn7ueb4d3rJ6wDLc6JU6BJ2HXNXv5AFQF7moPKPHqPmZvnxQvUqFxuZV37PGL",
  "key10": "tmpWQ9fkLzkvjA7Ypz4UppQv9v27Yfh4fx4BrzxkfYUFvp9HiPg13vD2GyBAYT6VwsbwJKF4r8QJ25nD8a5zvKb",
  "key11": "5gScaJ6C7UCXDJbCYZPqZGazPUVqYF9mWqu9P6stdN1FweSZTFwtiJfEEuhziieGC8JRxe5YwbjwVjsgMLbgw1BS",
  "key12": "41v143u3cqSe5bmQE4NhLbtuaEkALKpDpWRLqPUo7tpxmqguo4qpEqs1ckkBQbdRkuQ9rXfU3eqdwuH31qPJjhTV",
  "key13": "4nrA4L1m76RzhASC4KQm4LzaRTrAfpTKyno9Kf2pe5KXQZdTLf5MPeN5xxPSYLpGECQXvw4F89fnY5umDQ38W128",
  "key14": "2xBAVwjWDAR5ur7NVJnmq5hqPLVVrjhdxvdcQTqjbkDMUKnGgBFD9fnd6L6DXZ4Pnrnq23XGhF4gS8aEeAzqMH8p",
  "key15": "5qdv61jwnDGgBJ3bzKRGFe5zo1mxBNEbbz3Dy1kERqqV3vH4RrWZxnN5nR5xR576qBdGExgkTDvZSaGcUZKGNieL",
  "key16": "4jPz96bTug7wn6X4WQZfBJBmYxYhsQMBXQfbYJuS7bZx6GaJMfP62ftJEHzEt1RuYDPPUj2i3zXEfF7XkqpKX6us",
  "key17": "5vwHG4N5TJsev4mZg1mzSuCru7VgWJfiMnZsGi77BuxuDTo2yFNHcWUpB1ajioZRLjA65zNJQuvbUH4K7Q7rLC1V",
  "key18": "42zh5AKPMdS7DQdhGa3RV5Q4VpWfFXAyHn3Ejf4k9QQYrBd6dYrgPqu56SiVbb8fg36DW87USzEybnX8fXsihGty",
  "key19": "4ozeaMwMCCV1j6WoQftsDTnGCcxGFXxzs5ciBwsM8cUk4SmZbFy4bqTEXn5PMkrgyMLfmHLTfitExCkwWcScB2yA",
  "key20": "2RenN9sS2hFVnZmri93E64Zg4xAkBgY8gLpdtcyQYNGqRdRgRgkbq3FdyKRpVcFDdQHSvegABuguRN7snW9TaSpK",
  "key21": "31A7uoSQQfGPm7YxyrMujyrhvCnQGvkBWvGikQNY1XaAEd2gTLangD68XjDywG81e6rnhtPXjgokAG4xiw6RqroY",
  "key22": "44v8g3KzqLjU1qnSmQPewV2nqUHmafmm4HMFp3GP3G81QKadfaFEefhpiJ3bDCs6wszZDk2iAzBuvN29UHC87sBi",
  "key23": "Vuc9B1Wd1LxdwFB6ofBeeYAKYimPpxDQrusDz7oFkypgbrUYV1dhqJRBG4UXkSXwPDxQ1mbQN5f2vjYwPhmi8LK",
  "key24": "5mucUSVr7eUWHKXnqC2sWiV83yX7coMmKPCkqq8uRtQmff5qpVYgm3K8j3wYH9nUQd5N11JhK9nEQa8DJ9K5d4wo",
  "key25": "2K8kXci8kGfw9kJydYT5JDKH9JU8mHepeiwgyrHmD965LSGAub3BETeg8xpUiJWcBAcqhv9ChRhqTLCyx1nbsLWv",
  "key26": "3jZzLf41Z1r28nKEqqQpD84YmLYLkhMU1D7nVJr8DHqVqLgAV86emyXk6Ud5yMh5gGQQ4z5QkwTHWyNt1SKE5zqm",
  "key27": "54QuY1qXPfomnH4VYkYUR6euLXj187nTB58Px3JdHxz4ZfuCSJVXggFUjNnXgwNzrN97KxSVgJN5kJnDhEwfkmdL",
  "key28": "2tqN82r5UrQduXaSvnru5ZPwr4EqYo1yTJ9BWgwdJribrzcgbNcVX2wUBMbcxJMQVQycSwtgJhyNXdshBYmKvKJR",
  "key29": "2VrbrcZ7n17MzpKQYz6TGazZnmAwrN3ERPoeceS7aGx38YGwz3exqnMRprASbKu9GkQtdyyb4krnktkd6zcx68MH",
  "key30": "4M8Y2xWo6BXwN8vnGgF7Wn1Dv93moW7AxwNS5edQt24SufhaEMPfjjsbp17xy3GQUVsvhNWoeGEhEyLUx7N2LV9D",
  "key31": "3xh2f7NirgYE3tgkkLo1Aaz27hjKSb77juMdDiXjHV1jtHyVxYG5TwgEbtygN8vUVsR9xUtR74oTcYG6GBQFnGbC",
  "key32": "nm6qcJ5vy5MwPCCyWvEfiBfBb2mxwWYtuw5qYkA5KkVAZiCgPcCwt3G1gMtPRcr8CSBK1yJRarovnMjteFfJCz5",
  "key33": "4XkdMMGJ3bX2wbUXK7gK3BDRg5DVSFTueJVxhKKk5scbaRpkFj23GhM7iAN6gLbXVQVFsuzPUZFeKbhZmSwE62Gp",
  "key34": "38rg6mm7tjNUp4EG4ZLaJZPYQz2SXjTwcZhpF1UmK7hrqPE4WYmqQF9UcySK2qed7f9esWqhzN5YnCoiuFzkDHqJ",
  "key35": "3ZRUPpHh5LW3YRtfTxyfD76FuQAKys6CZr2Yt6xKAtPBkQMJSoMPkqh3WBKEHuEeLuDN3gxb63UvSA8QLqvL5qt6"
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
