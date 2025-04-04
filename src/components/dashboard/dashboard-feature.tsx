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
    "5bNFFYiZTSyvSuU8gUVT3XXP14GDDnLBQA1U3Q7rzQeraPE33bSQ1cisgKQwDyD2AT671XrTi9CPAEMnvkobHKWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MwBbDxRzDFNtgoXqZVRJNFvjhVT6axzeLBBkBPszDrFWXS8tv1ppFc4VxtFTirvZNYRPszzZ5wkeoc89PD5XpdJ",
  "key1": "33U217TpVB3d1VH77eM5qvRUuiq5jr6eo17A2m8viZb3oDXofCFKMGyk9oNtThRfaj9HncCM79NQ7NjoxTqcY2ye",
  "key2": "5Gdmu2aaBLhBuCnFfB8Vkaogy7SMNzo1rb1ycTj7EC2FiLrJGB9ZcfVA5gGNumKvMGCqFKgHzRpi3K7vTD4F4Xum",
  "key3": "YJ8j2Lj3YBYqq8d6qdNkgyAprSHGqX5yFiVMF3fUQsGpHBwAxS61EnFZye7aDZm1y7NYqHpzKjuwr3v9indkKFz",
  "key4": "23BuWfwfP5RQB2h8ZTyjUbNmGqSpR7fP6jhJzKH9idzabxQyQvLCeH3mM59rpz3zTrdpkmCvUYFSBkHRJKfi235D",
  "key5": "EVmRUCmbd9Sbt1PgEYcUjN7EaoUyj4vz1877WTDgrNSDhZK3wMSKshhCMio7pgQQLLG8RYQgPJeRisFGUknWvBT",
  "key6": "65p3cmWrGiPnqnkwqQBYdy2vTFo5V5ctded4XUki44rwx8XVcwMWu5xz9egUagcvZ3Y8rWfTS7qhrpaEESsAW26w",
  "key7": "HRBzwM2zNiKZk9Rb7U4WRZbkSG7BGnxKT6aRgehzRNSHnU1Apx4JDVP2ixsd1athKhkRBDJHmKW4f5ZG7bfXE7K",
  "key8": "3hXUuVE9ozMtr9DtqkqAXH6pPAidJGautzfSPGZVc6Z4uFgeSNcQPmdX2Csjd9q8ioW1WZJ2SqNYY4T9h6PgNjsN",
  "key9": "2bjFgrUrZCgFZZzoCma4qYx2LF8bMZ2W7H71Vr1ZKHvAKF56uUyUvwcviz7hSyYffZ5eZQASdJfSuGUnRR9gtk9t",
  "key10": "4iwn9wNf2cCZDS2hgLwKhdjZVhEQNNYKWCmmeYzcRQWTHbLp6nkCMnqjucVcgeZFbK6mXDp23rZHwWjnXDo3bxix",
  "key11": "2MWgV9nswA7YPHt3C6QYotisFZDBfK4vMQSogGNT527v8LoSPepCoHsLTC9sFbyfXVNUYYgvGSroYihzzqtwe13k",
  "key12": "79Txvek5iJtwiqdwCSLeuC4sXQbFr93CNkCr9ayiL62tNGfymRK7donB3eDcfKcVUD4PG76yAd8PkBX1SD5hYp1",
  "key13": "5g2oYZkCcYchujfAmKABdV2pyUW6SMVDbNi4Yrtyx5jfdhQ6yLZUvP7VZ8Pv7SayQpfvHKFcrxRpfvVhLwDgvvvR",
  "key14": "2KM1M8P76M68tA3PCM8ZLnhHbYhaaH3GCAeEVaqrLVhGmhQP5UY3jzuxb7mzKH299EVtqFBmFwLSZz4aqZgTHW8b",
  "key15": "2qtmkNriK7uW44VzwuNmyCh3zVnh1PkBKN9h6oSn4vGvGY58KeaJkN7cG7jR3hskHjXQyVWQTCTRitH671zdNVJd",
  "key16": "3XdDxxanGMML1wEwDCh3mBykox7b6rwKwqBCttqooGNNzSaN1EgSQzHfiGMt5xf4FucZUJWU4vFNd3RVeWDvUzVF",
  "key17": "4xt7vfnxizrMehyKCkotRqLP5w4vUhAt3YonDaDwfUdpXc7Pn1N6ogYHpFuGmq4wtHNsc6NNd1uzbwgZxBLsb6qu",
  "key18": "3bnFEa6RWbdXdBLdmP4Jd2nYxDnm4CiMWT7ox7nJaqbwXGENKkYoYnxarbt1TPy5tR7udm4HfQ6KaGFhhaVLsn1J",
  "key19": "4XwH6r8cHvEmc4kwxR7Bn8PUsksmwCd6RnAtJW2gwcdXqrNkThPZVNeDkiQgJQcy9Tk6HdKeKUHY475hsMuGLHCi",
  "key20": "4WKtTWScCSGHw8doj5mHqRqjSp4Qw9EgCsPXcGW1f1BrsVdPGSmFJxAYCbmH6pD4Ak8xgTY8B8mVzifm6Sai8eNZ",
  "key21": "3ffeXFYzjEca6zC58vYGMCvfZTX3q6sXxk2gowFvtBAZQ8wYD2K8fb7eTBXkqDf4FVCeSEQdEqJeLzzW6RVZ96aL",
  "key22": "tyE1V9uSGiBNgsmz4qz6ciLvsfa5kWYN1sd4Jf7K9fYZijvLsdU1ZeThFx8xA2PF67xvoRWJCjAbRLq49Mfo5AL",
  "key23": "65D4LqeW94kh8ckahCTR8ZeyogA722JqrT9cJsoXreubtuURCue5Lt9QzsZdrxtN84YUPeuiCrQvmRzhLniRXBRU",
  "key24": "5KLWHJaGrjqzAhYANKLfUrNVb9EPnnwGDgAbKZfSui8GFRktghZEuXAf3aw2NRvqdq1TEhSFyQ8VgU5958mDGfKV",
  "key25": "33qzbAa8v9q61epVYKVdysXFvjKQ96JLMLmeLHVVEQKrquu8Q3wzDpsXDXKBjSWb6SZY7k2EYPtLpU7iXuFub6qo",
  "key26": "2tiK4Fwwgt5UhVeqrJwPTG7HKVs8rFd6zN2oWiBmDcHGhyoLCYCokC8EmFXuaCKX4ovfwxKAUS4r97P3AZGSvFCF",
  "key27": "3YQ9hEGJq2kssypjCAqCvNVFexgZuJg8UzmMbeswDP3p6KKi5395WBqMDBrqmRPamDr1PRhyo3HYXrLbSRd34V9H",
  "key28": "5eLkcgx93XeQXV3WxrirzmLSDMQD6VKXpWnVHoogq7CZ823bcjfPkRnj2S8RFjskBoVbMAUhc5Am6uFv844wDPyB",
  "key29": "5zT8Aumn2ctyQFtzsEY7VwFqjghDZzBx8oj2xG2twYkJRrEGdvkSpiXKiJGaBjM88zHMzpVeF5QPKRkaYZcum1yg",
  "key30": "65HMrtCJwJRxDdaiHUF5tsrfrWRjBcUvYmSXg6BqLUrvDLuJPWoUFjjsFRvemqwYJtgJthSmZ8t6MhqsdWMoS2dW",
  "key31": "4BCeNJ3CFRDm6fjnon4rFv6U2LEPyfznPDCVJj4SYkDx5ZsD8GgR6GvbyYoKGzXG5cxCpwvNJjMVEiB64QiagCfd",
  "key32": "23kLysiGfBQEFXVVVTExUCGBgZp6Abs7UG4MyAzRSoN6ikuRyjGHkMSLgTYZa9hSMYAMThfT9M61BdrQwr2fMFpf",
  "key33": "7Su8ZLE56ZggT7LHTDfMDzCAxhaPMvY7y8AcbkDBR5e62zxz3KpjjbqvmBHm2fWJP5rTnSJ2BFLZ4o8EQZS8c6z",
  "key34": "5QcLHx2fh7K5fte7CKHHa53U4muKWGwR52sce4ghSS2tHgqV72p4mriajES1JKQE83e9yGNzGuks6Lw7Yv82TvfS",
  "key35": "5M6jFs27XSPhjyTfPdUZay5SChyETZ9RaMYhow8FTQeAgTkjmXb3nFrktXsWJ8q6HpQuYH6cZUMf7pW6yYWk4SYp",
  "key36": "H9y7PFXmbL1rYKVujejjmacbSCsKMBGWjxsEEjk2zYJGHWmwL1EpCbVk5FFnAJgqJJnS7fJhg2vqgk1ia5RT1FQ",
  "key37": "2PuRg5o88NLgPp8fZiKfe9HjsGvQqZmEnHveuNQXbLTu6JBn1BJUWwh45mf9YDRxacTpF1w4VjJgchUWgfRR8hgp",
  "key38": "4by6HoCtUfFTeu7iedagFDdTNaNJoPK8ocFYPoWoynohfD2EHaWAhciJhWxb8iroxUEMYBGrLg7z8dd6dAjRUAKv",
  "key39": "3CQ92LxGd6Bzihjawytgh1UAX5PkAXQA5qPnrb59uZ7Js5o1H3NBp5uixiPWdKiCJw1URV8GumszCpXuvz4MSEDJ",
  "key40": "5U4PMEBq6KBbHgigpELKgstqpm6XPTVM9zjvDbS9c2qcY2epm3GwuCH9kuPwVpyCwePk2LhqNYmNa4Qwf6AXpt8E",
  "key41": "5thwVGftLRW8GJXLQ4g4ZMowi4bhhaQWjpGH8iEh1raVTpdQkoMpwcWqjML8jNFziL6QWj9UgoLBsVpABM5ub87n",
  "key42": "5RCADbi3YmauNCzvPiTJJDE9AGAEuyWkvFtuJncBjeyjRBqmnzUDAT1CkVUHkt4yZwGoZmk6PvfAAZhDabyoX7yy",
  "key43": "3B7bNknzG1ErE6P8pGgjm5FQXRyMFp3Vk6WFVFe9YMqnaFfJz4hbooCfsMs7kZcAwRJU49LUUwnv9TTbzNGYfR7L",
  "key44": "5e9FMSAwA5JCT1sVFzzs8SaaLCzm6WQ4DTyFX5miqw9WAdNLikCcY4YHYMfxK5eN1kDpzDY3mEFJzu4d9W8gvjxD",
  "key45": "3Ajn4vqycRiPMJdxASbadcB4tzebtnZg1BcWbTPsT9JpCYkNqJXrjvir37bYq6DTtLmfo7bzcae28WXXBpmBDVBS",
  "key46": "5KpE465RBCscarj4sddMsBa8MLfVbRDgUx7JfUxnahf1yy8UMbERteJkn7c3uS4Z2KUpxnCoisqUKwTt6bGpqywb",
  "key47": "4UxCgbptBn6bHQpP7zmqEeJk96VYBsB4p4vBQLhnCSojEEtSJ4UMBvuytkZpX2gxFT3fELLhPyhgi5iVdbnBEb6K",
  "key48": "5LMTKzbJLYn3EF1YkmvLaxF567qVdCBKNynTheor3SXMC4EPSH6wZmzQgWudQBBxqK2CN1QY7UNQJusbx5UDFaFE",
  "key49": "3ttg5tyBcpPwBrLxA32UvRkc1T1bjT5ZJ6rGVtSErP2NgE8u3PBTpRJvcLkLknX7zXdh2yCaVfNuQEWTo7YaQLFf"
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
