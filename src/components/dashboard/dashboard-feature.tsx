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
    "AHw3sWp7iHKSGDqZWgHJgC9SJddL4K91Gq9cgYNTMQtbCmUnjqzQqXtRxfqZWRptdcscgyMrDFRWMwXBpEHZwzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kktMdNHafGCxyursQN2pHsdtKA4EvD79GE3fVH9XXmVhLoVcHiXcZKkJRMi4u6MGxQFs8Rm5jzCWRUdJ2HKdcC8",
  "key1": "3EPhiv1gR1u3eTbhYCG2C7iHoo5MQbbtwTZ9pVRjfYvJ54Um4k2FBpm3AEnezevbhEdgZBEnrqDdzb7JXtL5AkaZ",
  "key2": "3Cy3XJ2pNPxG5Jrp2QVis6qYq9WeAwpksN2VouG3WPYcDmpGKojaemXW2Zt2n4tvf1URYLcfuUYY2wEzZr1E3WrV",
  "key3": "4HmWghSRJ8S5ZRysVStmxy2Q924ABcBcAn2JZdF7WwFMj3iw3D95bEBAuLJhVPqkXBYPX8j9teHLNEZdEuqxJpSJ",
  "key4": "49rxd6iGBBgGuHtnENNxsGkxkaTSQe6jBqp62CLxWBoriY8BvkB7XCyxDFbqGWXQ7Q3yrJ8J4tahgaT4dhVYiSmB",
  "key5": "4bmDY9E1v9eUgpPtxrhEbDpAKJ7FC4FuVLy6EzdzaoWJiKfJXbBwK9y7yRrLJx2szd75iYr9GA6cgonZVP6dRug5",
  "key6": "4T4mw3VnFSNBciyxXiQEja8rWAf3FzcDZKV7mDEnFft3FiL6mvKYd4vwp6DySwNUUxJiHPoJ5CvrG7JBGWaa4XM4",
  "key7": "55KELwF1TeiVhehmNWucGtk7ES6w4csWFHDw81ZsdzmGWf8GP47Yw48xSJ2sHkjtXABtA1Gbdc81FCagB7kkX6A",
  "key8": "3wsT92MwJXSaBNjjdJZKrQM9fjdbzV2z859SDvXLBc1LYEz4tJMx29iTypA2FNYz2nLZJy54VEZvaoQmiiJQ44Bm",
  "key9": "2rCAs1nWMbMyYVtjpo1MB1C81ayic6tV2kShTFMU1QuCCTdXiShBf97ESXu8mDnMcpMXWaxmBqvFYLvEv96bNevj",
  "key10": "4yTsBVoXmcujWbm4PpVfz2AMMdVRtBgq8de53qDnTQGs1TCsPrUPYoSTHPFK3fLzn2rBHvVKv3sME2uSvnigDebL",
  "key11": "5QkJ2mB656kHDtinv9pycAZvDED1an9rrfpHHyXw6UnZUZZAixfHiiPnDNuphjThwQQ1G5qs1JWe6pfDZY6AM2Fe",
  "key12": "44MjeGcNvM8uLMU9tQtybeZ3ESEAL84bJjfkV6ihd8z1VjfgXh2suAf7VAZM1HzhH2xuWCq6rU4mQMuhs1eicbgD",
  "key13": "3wVebcN5yqQQrn4QCfLQUd8WUKQEAfDFg8r7bKJoHfdMrJEEJjEKsAv44QtMJEPcW1UJXcPSgYwrVibzRUM2tRug",
  "key14": "VkGG2iCnWmLd6BQHRpkfqBryhtEwfp9YAfA3tyzn5oiqsQwXudh3ESDsJBAa47MszZmRhXuE16cLKoxcDmRUorx",
  "key15": "54hwnBLrHUZTxvkrxYFG4TMUbvc5pdKHqTU2HyzWJxrwWQEA6gQSdLA481vSxs8EmntiVRHaBr3rEx5hpaApsxjb",
  "key16": "2znUu7AJUZ8gmaqtXxnQREXGk3yUhK1auPNTX2kC1UPjiKpEArVWKq1rZHQ5yuVnuPVPts2Z6EbqyKNcTkE7F4k8",
  "key17": "4TFv7fj4dfKgQjxvSF6V2NSQFS8K4a3YenQ4CSQZhh5HHR1Bb4S5gMvkVfr9bTCFYb7v2PPdMyadTjaFSwCYn4s2",
  "key18": "4sfN4DwjgwU7sn1miMo5E7aR74hb84s8UQHkAyjBLbn8WVaG4o8Sr3ZrHDxcLgGBEf9gugxMByaPhD3jBthX32k7",
  "key19": "3RiK6G1J2mUwSeRvx9Q2x4aWRUpzoZBVy2pSP41V48wpUSpDcMS39DkYzNJZ1gPy4Kq1CMJ9JDYebg8Xe5yf9JwT",
  "key20": "kJTRvktxaAEmTRiNhfgzLnVGgFAy16Rqxzbhta1Kyop2rtFgV2HAW2EA8jmotWXZDbxZVdSMqwtpGYH4zJ122cM",
  "key21": "3kadiYwCjpPCDESfhrY1QXVggrBg4uzNdVa52eJApQ56PJLSW71JN5uo5BmLBgHfTbK2HHYZCL9DKDYTWZSaTLR1",
  "key22": "4H9fshuqDT82AvHkTWMsYumMPxkZz9cx1AeGUFcfM2644154vZLADZjXnou1iZrxHdLGb9xvc3vtw5t3RKhFkdFi",
  "key23": "bJyEbGPPCN1wbFUWaRH2P7bVVbjF2LnJrESpvRTsVLpcdRc69Qw8QAnbVDgKKKNSfXzgrgQriHjqu8tZtBFbLAp",
  "key24": "5Q52g41Zoipv1kBpS16f6xrPYryF5VP4PncyW2fpB4wRFxjeNXkpiiNi86kuuv2kcyGc6zzVNNnjbPUDuRvhkXYM",
  "key25": "52LWCMFNHGw7uu7Fn53dkkUrKymWJ21jxAstr3VTcxKZaNu4cWb6n9NTFKZ3bKCEt8mQPWwzpwtQZe2pZADrhJTp",
  "key26": "3VC4SYm7d1gYZsqiQPJhQBinTRQPhEsZWCJ9SiZzNieLsi6iTeaoD6FtEH3Xg779QwJ2EQh1vxGu7bL58H2cXShi",
  "key27": "4ggenzZKD8dKmxpSaeEuqTdg7u2xY2wuoAHpbn7CRSTSKFiFHctixTBGSWhr5yDasks9ExjRScWQgdhjAhh86UGw",
  "key28": "2uBpgsZydPZbCdrwjwDTGDJKRChgbcy4DYK7Pj4YBRd7xTzTVG2N68tYR6EQLfP3JeRbkqDqo9669yR8FTNcrCSC",
  "key29": "36rdzng8j3wz1zuGfGcxXnuHTNmwupYzZCD1fE6PdYmSm3D8DNax9mmtnTsDnKjyUJUPuu262XfGdTt1Pks15qYE",
  "key30": "2sKdsaqaVxscbWAsC8e8NYrcREM1sTmMbYta4LyhJydwXxcrsJiDYGaAdF7cRjRBUeWbM2ZsJ8jd7MQWhRqMsq9m"
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
