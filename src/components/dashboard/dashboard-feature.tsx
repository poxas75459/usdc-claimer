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
    "3e75XurWPb79xcSzzZsGnKEwHg8SKkij19atF7g6UNGqjhiFYkB4SiL49C2t1mrMzSmVY7AEnnSNbpoS463pbFa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58vbSVZ9JzKBkYmo4kLrG5RVTUZXdSfzKhRLmc7oabYNJWwzdGh13HGdaCyp3u9LRLCSwgPFNCsHG5jJ4qMCTpWH",
  "key1": "39dnjXQFX3o9EJTBGFUBHjfp6768ybeZqnb1B7n4rTzjdofqSmmdgW2SundNdfLmU7SCin4jVBwBEQTUe19bdNtF",
  "key2": "2NLPTZKhEBYobBNva8frbuD7sktwfZonSSCCHsRyR1HmjcVjXPAL5Xa6Nqo8XdB7dbjAUW5BuaAcvaEEdpv8AhUR",
  "key3": "2wDQh6zVmqBYhBgMjME2ohCUzGK9UrPz3vFMmBHufaXVdRXLpYTrKLnH1igUtt6Dk4oKywLav1FcMMTYR3qKCjaF",
  "key4": "3xoBvtVWHm4Udt1tfHL2n2UbXzFpzFepP1iuiQZBdWXmbpBzDDTZcv51TknXbhXysthuESAFS65ZPvLY6RApZoSF",
  "key5": "JgfaR8i2KsRfnUFCkAbLg1rXhaahYwoP5sMpvN8U7M21oKiqrAqb3jFRqejEmo2xSptUmZvhe35xR3fRCrwr3bP",
  "key6": "4kd8ekRNJZQS48nPTXrgxXcsx13KfcqvHiwhjw73XDD8Qc1hMSvwxMaq98ofoaZYtNyAJbNZqUAnxLynViyjtLcb",
  "key7": "2rkds3MrtyaFDnxG5oykJd5ncQ6iyGMKXSMWS7C1oifNvk7Kvyy1HCu5LP8e1RZ2mtwZWjVaX7AEyWooxG3As55v",
  "key8": "54m7b6TRGJC7eQoFDo1Jv6hj15Z7jqFM1q1xa5CCdk8ndWZYgFapTySDXvmP8CJ4gh83jdv976nisr34dhc3n7ma",
  "key9": "5gYrd5jb2fnmxjUiysegJpVdpGqTYb9dMZM41ML8ytq1J6BYzxCmq6pfNn7MvbxLTufMPS3AgqSzWjQ8Cd6NJfby",
  "key10": "4WCdtSW5oSdWjXrvcs6Ub3jtS3Q9uV7APswhe5hbebBEKzy3g9sHNoTbR3TgChPS4BWagraxW9gytu99hnqtEQuJ",
  "key11": "ZQL2ibhSih43LzPxwCDdDVh6LaXLsMQhSY3PgTVexcrFvKEJpw46nozjroXCw8hnQ7fNz2RxFYPuEqhsjynib9J",
  "key12": "J8Z16QR9YiCdvEGWEphgT5mAi2qsEVF4dpNGC33jaDdNLu6Vjb9YWkxAtcxhhRGCNA9wAVFfmuaQNXvjTE1WwKQ",
  "key13": "2sGegfhu3gXofTPwB7cuXmLCeyDkAzwGwy2sc3sn8YWFnbgVZ5vvjr9AzGAAXtEsBDkU9dSEV5dxycqiTuCjmX5a",
  "key14": "fQq1kZTcgU18HpjCiregLAL6ExT9QSjoNB5MorzjuJruCG6BNR6swS7dbKhbzL7uJSZ3RiAiZGRiThNnHujLvE4",
  "key15": "3fEN8bcmZAdUAX2Pp2M41WJgdzvaGsn3w1n97KNBvuP7EpoWBQbJbugbYBS3w7HkbUtJSvMctsGe9Z7QFogamzXZ",
  "key16": "5Q4T9s7KKqoB97GxbSJzevKZNZZHnbiVtD2ZutXN59ZKDYQ1fnJHbE9B8QAFPCiwCdzsbXED64h5PjvEj83hcBHT",
  "key17": "3mAPUhn6pfNPaRv1Q3KYxBWDDp23Yqq5S4UDhxiUE2CnrY1Pm4i9hqViPT8KMfoKLfXSP3bzh9Dqprc8r8Rgvx8Y",
  "key18": "23rQjgwUHCFfvoj3jKMDNhEf1QTskf6EySjsSzStiKY3zzcJzSEoGoctwDEemnJxEgAMYvksHM1iM3XqupZqoiqb",
  "key19": "5TpRUBpQeekQr5DJnbUdhMupmQtN7tq7sLMyYBvptwcai5eJKE6ZuHsFPmoxfjpBdPLx2MqNj2gL78TMLDBmaHp7",
  "key20": "fhCfKZKu3Be675WH9mmjkiNbU2VFH4Y3RvohYEvq1fvMYMnrpKJWnBXJudMtfxZSLT7BmAgKfhhkpqKjm63XYxt",
  "key21": "BBSDjy1MRkrc9SK6XsiQk53obnTDxibW1MxB6JjyQRtqLupPACQHoSiLyEebNkMiuVuNc8r9GjuzhjDxJikAGsP",
  "key22": "5qVrrdPDsR2scV1dV6UFEBfGtYeVozVZbRKLfQTdCjMrzm6SxYdHgdhKsre8tTrxqHu9vkH2Sr78Zu1iYo5GrCai",
  "key23": "5U8cLAcgkQ4HEdmZNEC8gHaBakpZKf2PKETURbcpWqeWxC2N5MGe8ZQ93XWmdguWdnzq7rWimdqcjDvvxqFuzgKB",
  "key24": "7zkSPFSxyqik8xkNLADqn6scbrLXVJrcVmrp4GtnmW6E3xP7BrttTf8Kj2UQKRtBBjNDp2Xei3imuvkFTcr8MB1",
  "key25": "3jyVDbxvJQX1pU4RLdyZY5HUkhuoFk11xRrq3JGNughdy4sV9Rp7othv4AsYD4fGA16MgtcvFXNUEmRkjD2CsuoG",
  "key26": "4Kp5Z8ZMAAAGj8eNQpiFwBDh8511wGYELwCWSQXAzmbYaocyDFGTNcRwXvEsJvyJRaE6uqH8bef3aFWwC8Rty7n5",
  "key27": "3XhwJUNSTow6UNtrfjQPH5x339CsNATiLSP5RVRa6E3XE9UYHwBRKjw4iSKeYntFqg93hUbY8Lc9ZvBdXCynRMNH",
  "key28": "2KnprR24DMrMPpTA6p7poLnGBu7hMbUci8HZZj4DsGXazatK6HZBmqDXM698cKB2o6BKgzVW8iR7cbV78LMcLmoZ",
  "key29": "4GyUZHXFxB3rgVPpUk3zDxornxiviLqBx5hNbbSvHA6V5kNFE9ivpE7GqwqyBaJ3tHGABrJKyx951XgksK1Dajm",
  "key30": "bfsVF3RbAMzQWcy6xcH7FgXxbA1vKjv7VULFqdVpbd3K6fukTw1hHZeq5PXtApyxEHXuW8tdeeN7bLc45xTgRpK",
  "key31": "4Cgb5s8r3mUSbZbzYFkVvgSm1BohShqJzCdaziUMrdSMv1XThS3fsd2gxk1x6TKmiYQKaLMSR3VGmRjnWFNN7wMn",
  "key32": "2vDTJ3N62b1fnpPi1DjVELJe85DEZMRm3YU158nsC64T4cFT1HpTDHdoEaCJAyAxLKvJTTSVgAZvqsfMCUUS2s3W",
  "key33": "5evLTBjr3iuoXv2RFmX2MP11jsE8XMjYKQB5jtM6NMZAnmfv7QvmFQEEsiT4ua59GuG9zocVk288NRezCX52fSmH",
  "key34": "45HDfTDCTHqzSxBhQcJAUKEqPKLPJ4KvR4n3kKdSn5LS4qydj5wPsCd82U5dLBsEnBiu3o3SDkueLixgAAYSAMq",
  "key35": "2XAd1opkxL2jELjsfNq9Z4otmSo9ZXYKf6GuBgPx1a2uwVrYnrPSv4wMA1Dfx1TAQzRnZT4AwD9EcfUczG56Mxma",
  "key36": "42nVpguFpQAYJtK9mq3vVZEpMqGDfdxug5jiv6yeh3N8zfubDYr3H3BqQcpDgCpuRj6Qoy5HwVUb3L8HnStjHXV6",
  "key37": "2DVpR452nrznHCvoLy8fjMTjxK5stZHw4jdtXEotfVyNd6KgsD8i74kvWTpNSGEjfSwi9sYNj5S495KQdAQkJoCN",
  "key38": "5hMuJn4BMQ9kVrR28BssndRCsTJfv51hwt7yDZd1jSBrBK5oyB19YYEVda1XwGWdUhFLFNM1ZhvaW7p7bTpZXw6K",
  "key39": "4nEbRjashm7vvA42h7ALi1rR1qCQuJZ2zKhsFGQPdxrBQbuC5aQgsduJgfwBK8VGb5jQpXcnt7KsxLhr71TVyU6u",
  "key40": "3m9dWnxvuEP7YKjvNHZxaippPwxA1JoZkPPHvYhN2aY9dCZVvkkdqcJBfvzSFB8kNCj2eY5XGHWmGTv1UFnbwmAx",
  "key41": "5t3AVnNN7gnE6M8D4iSa3XacEVQSNJroBC4gE68VSGyYkvgkMEkaXAmwzMcaRsXGegHAaHAZBRPmoiWatW5jBraD",
  "key42": "2EBJXWo2fUUwaDB249jkY6weLt2LxAhrLC8DytHeqzN3zQE3XTARWqregxTuW1b5pRMq2jzTa3c9wnWtbtrD5AqR"
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
