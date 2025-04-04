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
    "62gw6G62RqJESejWxR45WRNhe1CktUSSKpthu9TdKd2ViKxTRoXGtcvHWoMcSciinstZNyAZoDcVNJEd1LyU3TxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uFjLAoWhWn29YT91NQHkjyW4AcN1hC8GxwveM9AjPvfPV7EQ5SwQfi38fJszMxmidfuPa5iG3eGiJ4duQqL1nFn",
  "key1": "5TekQ3wi7Kcsnt4YzQ87VvTQSssBctcieusCjf3X4hRmcLBod2UUqyNAw4uoQrp1F9aLLcxBZzXhFo71axjgxEzU",
  "key2": "yDzvHppE5Tax6cHNjKXhLiDrLQS355v2CnLo2C1FUrHUqfte8n2tTUhGNAWfYejAX2VPhzd7qcTtJ7Dg3xQWk4Z",
  "key3": "41MT5xjTBkVKizciURX6SNAPSV4TwZrBybbyLWfBxJioEQkTxV7wxoQYWFWe5W8XzS9KogqzszJvQLyaAzgnBdnZ",
  "key4": "2SmESgQykQtxeHG4cJyfeRMeZM3PaATdRvToTE8eGhzvHhSwV4iYVSLJ2b6P8cSUUWmijgsrp9No72R3F6UeUgJb",
  "key5": "59TsgFv4aowwYFjs6nyBYyezPbuiJo8xh5AoJwbeYu4m29nyLeoZoX8bkSdRxoR942jTD3tCtCt4nCniFxHqs47A",
  "key6": "2S9viziCzvsEReJJf8LALj9LuS67dFnvJb5sJjUtu5vyFHgAh2ZKu5saZSt4oYUoXEzKGUz4xePcCj8b9LUHpMVK",
  "key7": "3CdPDVY1krKuXVGMBa2Se6sVCQ9VJCLsTw8h6ZtPHKwxHzm8EtxL89iatZrLTSFsHafTYq56TsWgDgEtPtcqrycw",
  "key8": "2au4A83LW5EkEtwZ3xwbc8Mk64HMv2xSPMXs1Ye5kGQv5kZBuwGLp2zG8fVWnrsP4aJ4jNXb8yB4DFRQ9Ks7Rzqh",
  "key9": "UXQbnULiKhAEh4obcpMtQVTVewysrbozq85uTAWJ2a8JxjLkj9Hp8CZMqzyJWNxKca5epnpa7wvmEKKYS6GqUzM",
  "key10": "634f7ZJaLFuuXpKnPBc94pzRWm1JiYsioEdApzyEifKwLChPfUMKi2x4JxbRmXhuuAWsWAb1rVxqzaUdKcjkvgkf",
  "key11": "3oLe947he9ieHqTMhZrRf77zEiYkEy85Vh45UU3jDCnfMM3qX6Nx4mCq26bNfW4o1qsAXQtYiAbYQp6W57r7zBMd",
  "key12": "3V9i8N9gQECw3SxqXbuVncN5cZMAw5bVhHNUkZv54GniTCfA842jRMoZzFgUxZEEsXUPPG9YdNvByTuAJvqLZcWw",
  "key13": "5WiKumLvUhePPtesS97DPmCfBwvckUwLoqcCdMpi2qGNR12teoPV7oKgZDS4RpGkDHdkMYiuUUDEaABbRPs8B8us",
  "key14": "4W1fyhp1PJjYFHnZa6oEJVP3heEdFDPjt5CYuqoWV3P4w51NUShvLh2eyT8WTazBVdfHeBTpWoEEdeM9WwtAvkUL",
  "key15": "4eqzXJBv6H4usgBhdeXTHY4nahXZZSS5h2HxsXUSUK8FVh2NuTNPmbmfhG8NQyZntYSKrPMcjLa9vT4UhUerUQ8Q",
  "key16": "gA7bKAzbehJQSTpPmQEjRChup9j7DQGpwrBV9HfeER4PCe9zyMB3rUtnjus4zZyMxkR2qQfwD98GfHoSdrcZw39",
  "key17": "629uw7YrofkmwYasb2gDxy5pqtNsnUmzbUsankFqu1jot5ZQPAJYyUviaD3BNp9w5t4es8B52eEj61pkxUaGf9vU",
  "key18": "5wcyJoi6xvCo7aizEqv4jvTM8CWGX9kCLBXJ95buStCPFrCA3Gz786RVxSFEXxUfr2FQVM61xMmAnsHmsMS4kDFL",
  "key19": "c6noCNhfXWqkjTdU6DzgVt3qcqfzD5rGgnFgnnLgj42jshxumncMdTkf8pkT3ejWRwuuyT68EdmpVSTYa57J1zs",
  "key20": "5kTC4TbLLwKqtuQedhu1SamRPA4jxoyxPXRn6JwPT16noL5dMhocG2AEh2izZvZqSS2Q6d5hrWu1NXwxzMLC4GVw",
  "key21": "65KGcytR9Nb1NyzQa5sj3MBzhoLrnDJuN9jhQQHKU1XMeJH8HZuWpYkcMTFo8gkdV3HhZiQBnXxb66HHWbtAEnis",
  "key22": "2ET4LrmTRbGy6YUbb6bRxr7zKVDeT5kGy4zwMckk4J9N7VKLFEU4rNjgbjKoyWqaCVfRDmLFVy7UBZ7WikNzbRVp",
  "key23": "2uSsk9L8XqdWs7wE2ofdr5pTrrUdzG599HxpZWyqoe6ug5AczrjrQB1UAr6H9MKrxbxaVQf3tBCVjKCWdoLjt8hm",
  "key24": "2p7ig4tVhknddM4r7RBHiEQ8mQGrECA7sZWjCBzUFadScSCyR5dwHPUa5Uzn2wQFPA9zg3MpWMdpt3sNye9p7SEn",
  "key25": "5N3GxR4YaoawGB8zY3RrVt4AFnnJy3j8CXS4NRiQYeS1VyLiTZxZw1oMgSAnoHWN1k2Xr83cUAQyMc2PCeD7VNtz",
  "key26": "588PTtjqHsHA6PUpNxegfX7mveGvkhkQDphQPtyWezUBLAgFSbi9cqhijosDUPbMbvmaW51ZqtoLh17FZs7K86dk",
  "key27": "3sgjzKV29W6daJwd7kigDpVTVH2FvJN1M1d2ndbHTXtJ4a8CwVkpQh2uSCm43z7mNyJNzaxS6HqyuJMBGyVXPo6V",
  "key28": "5f49RE3H9FNofqJn3h7YL42nCTaQQw7E4p2FrDXnUqnkuiKAW6WdxLVWGo4b58RHFZxX9c9ApmYSgzCGRd6ULSwR",
  "key29": "42VH7ojEmUi4KEfuSZGroKikbiUwKeyZUbJGQKbwNGb9L1vmJQGWmfn9XZ8st4i1G2oGss2eT5uu4t8jsmyapA3q",
  "key30": "2SBbdrNTFgHUhQ6MxTaahu89UCVACPArnRMADWejVRHk9gYPZAz9eqRDuUnVysDkYSAoDfRvY3TeMZBUdPSnpKS2",
  "key31": "4rb9Yh8cs7vQFueAmjhZbVYdT9Jrt8XbYX7rAYEsh2cEdaTca2u9ktZ1hiwpUsnyQXHZ2ivzHXP5TWRquHRg3qL6",
  "key32": "4hRm35QqTP47otUoCjZ82eVqkrS8TptyZ3ZTWMnegN3MVqherZwVUSxQHqVs18pMxqvKv27sCYorVySjChPbfQnz",
  "key33": "5JXqWmE999926FBc9Kfh2AEgNFs9cb2ALRQyU7bErjX7SgBUKD81rhGWzwhWogrp7jzESRwaRdmNfwipA7PqUrgJ",
  "key34": "5hpXz6P6bRMPWD5QVHqZDYJoQoGoxz2NX6kzq6c6gQfuM8gqg8ohLhQBVgFaBufH3Bejvu2BfAqg3nVZ1jJmmyBF",
  "key35": "4yhB6dNE7963Cf3JMGKD2PSnvDkbAdNQzQyMNsnqftK8CBUnYzUkQjc7xQL6fSXK7BfiN2YeyoxZVJ4mx3iEDC3E",
  "key36": "4nus9i5YhNLCsYeaLdEy2QNGEh75p23MNAYYv1Li7DrhMea2fUAjwHLwCt5FFbfcHK9aaRtVqSQeYhHDFdtw98PD",
  "key37": "rFwcSoLFi9RxYiJsLzZ8t8FPwf35jJEQBTmFPWFPQWU2tx7DXRSgxdqFTEGKC5pjTKbHqn6EzGy3FKLJthKG7K4",
  "key38": "2jnKswYb2t11aMxHwuP9viY2gu6PmsGHcfM7nhAC78TSA6pF73C8zAPym56Pq9QWHfvp4ZsRV9zNFrEmF2XTp8fQ",
  "key39": "3z2ptNcU2bb8r8etBct4NaCiQrvw6qJcRoLYRfJjid5Ss7Txn8ktyadXz5YHn4AvviRXBzA23EZVwtsRmuaoad5E",
  "key40": "2rEJfRKUWdKHdfCpU6GWyFz5LvYSh1jsdWYCrkxD2e1e3yNY1vEA7WXJWbHkNijtuWpVhbRTWadJUZiLMz3Adbw",
  "key41": "4WnTkQV5pZPkr1VVLoAr2NR4rdBPrE2KoLuSZ7EG23rkDeYozZEG4Rok8gevRwVxzTBHQcA2JKmTWRR62114xHSE",
  "key42": "3u1yjJi6wS2GzJbsX3uqfWEkxBxWxceXxYNNHKaCFfnaENLgz1CSbsGZLqahy6ECc1qJSixHaVVcjpS5phC9Li2j",
  "key43": "5DFSdrQHxnGTn7f82b83vNZg2ztG9ruiHjhURzUV1QatBsWyDVN9uuzeMfJwQhA8xJmkWMEiPQd183Cn2GLpubrC",
  "key44": "33ePLRvqZRGV26AFrvmzFwerQDrKWtovwpTU7F8mZQUCnPYi7i2DV9JQCGjJeobFk4WVFZp3YnvnZk6WZj7ajNcA",
  "key45": "4pWjCkGb8rfcc7xqpqBuRbRdAmLgZ9JNHgYAESXW5DxHnVCsqC3EZPxyB7QFSVMMAQJYDAbJoFGxinFUUq2YD7Rt"
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
