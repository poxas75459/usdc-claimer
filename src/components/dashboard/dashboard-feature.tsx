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
    "3uWa5vXmVdCvdcqA6n2aLoXbtAhKRkBCUoWYmCjUzJkZdKg8MVREaYWJhonFCjJHt1uWro63JeSFbTxEHC7eNHpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xsec4cKeLuPFyrK1y1i2beCtXzhjgif6BZEH8mgFBqMBiNueRVybmm7MTj6RbcWoPuyYaFdXXQMKQ4jaWa4nA99",
  "key1": "3DQixY7jBs1ZofcYacZWbsvmuMUNPCsyymRmVzh43NLDZw87RvVzi7Te2JQhAGhVEfRar1jqKih9Fump7J26p8zS",
  "key2": "s3ifFQFCSJj8TwJTXsHv8fuPV2R3zHQj6JJ3oEJprsUGGFEcJCrAx9cGtK1Tc1ExX7P3R3GEZyC18NdKY6d67Mr",
  "key3": "5JJHJ7xSoQUdaphiKTojkotvys84wNdiWNQG8gJhLsGp1axZ3KPwwWk4FVKEej5DjhesnptQox636K1w21Yoaxzq",
  "key4": "4kxUTz48NkB7izKgzxmZribgUJseVLXt13sw7xfdevykmrzh4zzVRBjtCqWAG1akQt7UsNiwnbSxouAjPB5oYUWd",
  "key5": "24SLskRQUwbcRs6UabJV17NJ56qyLWue45dSwCxgn5yT75wihNN5XqJ74UPnaNUPkWkYXjmcG8ztHHQwnWUxFmxG",
  "key6": "49abSsARATammPneG3519efydeGKSrTBCgMUa9J1tuwqQcGTXv3LQgYDCAXbRtXbkaKVguXLT2bCNWe1nTqiwmjG",
  "key7": "4PUTwfA6opUfCqMyMbHqfw5aof9mWs6ojwDwZrmJWvDr9j6affKTvkY5RYHrb6mywbUprHeXiH6xyj7VXK3wSNj",
  "key8": "SQ8fjucSsAYML6RCpadgd5XqsvLKfbaDe6YufzXEBDcGofukc5nzs6RKvJkbu9duZe4Z8wcRuRusizBDYDN5P85",
  "key9": "3PmcBC91jBd8ASRTMb1GnKSQj8nTBqFZ5wY34qtdArHhTk5G6HvcZ4NYj8c5oajnq32qDRPbW7nRRp2vjeYivZC5",
  "key10": "FhiGgBDLSrCVjwaLmv7BAWHvWfnEsgX1xJyac6uZVV7Smiz8rowcu4ztBQRfnYkPoN43DS5NJdeGNEG8AqZENvb",
  "key11": "32ugUFX8pS47midsJbGEMyQFyGTPvEXLE5w5cFLjxDc2jdub2arFFk25zS8miaAEVBBMto3gvKMmYmjKL4b4iS3C",
  "key12": "5WnKzqL66J4gvrwW2rQ8S9SyEB4spXcHwF8aT2VMC26EQA3ZFYBvGjDDHJXv5BjAWgMPk8ysMNG3hydxUL1qYxS2",
  "key13": "NqSd95Zi1uHxiSRf82LbmSNNshjrtSBhV8hTidGaQZUjK9FC6BRgiGdqi7EMpFAdQn2a4FDmc47s4LKXk2odJ8s",
  "key14": "4LXobzZiv7ZQAEKsbXAjr5wS4JuCeeKnaWQ3QkRY9DKMhFv8n2QT1EVecgfpUGGYwn8WTpLPGKuBMVfVAU8v45Sz",
  "key15": "4Gv398YyEDzvxSWvpuHn9bYtTyJLQaKSbaHTGsJfMkU3wwx5Zw8GR6YGRjv1zJ5CxmiMjkWbwFzga1xkuACHof5t",
  "key16": "2vPaib7E8BGjReMeMRP6zvnobbhjq6Xt1STWY75icxDwUtsCt6TXEvzmBFPCrMVaCGTQkj9vGFYdbx9pV8VVxX7B",
  "key17": "38dWFBTVkjPYucSL5e853wVyznqkgFhN92r6shiQibfvcaiToib5BspAFxSSCQrPsXvUjAKP1xcmTEKu28cv5Co5",
  "key18": "5rLrnCsYi2CPASArGWhthhgeLvTzhW85evq89k3D7Aundq2THAAHd1oPBZSnJDowdqDm26UJfPW5wq9XbdXMsjWV",
  "key19": "2PPssQQZafLtQhodwe4WmxHDmg92r7HkBgBgP8HgBZWW5aptKdyN4cayfbbD4uYKHu8Taj2skVtmvBY5yauSvjCC",
  "key20": "Sh4Xg3i2uu8xSYafBpRdQc45yHVPB8WugTo5vXQpuAN3VZcSHsD1byKi1HHxquLrTj4cSz4hXLdXRPbiC41KqHx",
  "key21": "3Vi4C5AhZZHpWwdhMD5M51AyHaDZtbofC15bwvtkWn1JVYZuZDHyE65PRfn5k82GNqiaSp9Fk3TWnDxJhyrYPdPQ",
  "key22": "M8bXpBB1b3fxKT7EeNUoAsvepqhnRjgEGeGfYBq3hc9D2wea8NSniKrdWvdWxEHNdYzEGsbvyzNyDDSaHbeQr8H",
  "key23": "vgNg7s4H5p9gKpUwaonwUjfjxMgvz6VQa49i65AReLNpeWtGFVdeAu4wdsqLURmhWEdJZqnzQDPDLyuSbEqmjm1",
  "key24": "2dzVnqKuzXatuCNKYVfeQXSmbo9z8RsUeRjur2sHzRd8fYM9YwveVTi6sEMn93aLQ3beteHwMzPdXTC3yrdMkHUF",
  "key25": "4Z5ioLn8TGuXuh1Ttt1hsJsJSUzs4oiKeWCLJnRo9dwAwfEeR1ByahVw4NGXhoC2aZorCrj1r2EAZMYhucdzCgAS",
  "key26": "G6ERPBmuLfhgec18HyybmpXF3vmjavpfEVNX3574dhDKw2ghFyDuqXZrbJXfa8m7KeDv2v9a17Eaxc1294Y2W3k",
  "key27": "37pb9aMEnAjo6wWKsNSXxpczjvKWzbB9YAsiW8Vsiex3e4aFHHsRFK8FaSQWEjT6jSBY1L6MMiFhwkzAjgJ59gy6",
  "key28": "3iW8rNwFCDeJ2AauwnZcf1xYRksEAghXeh5uXEzwZeNu46YAwUvKcfi8tvZS1nYYovqJPq7nNmeCiRmvHBiEGfav",
  "key29": "gJ7cGgcuL1Tsi8kWHZVw9eTE5TdE1StFUUykPzzmMradUfYKZzm7XM6BrX3FSWr6nfsP7K4uaff71utm6tppSu9",
  "key30": "P83qit4cY68EEQ83ptLCAEVrwdyKLLXAdDSdxUS3fdps4CqLywnKrTU7qP1wf7SG6b5RpcrJbvZ1r4JGfK2d5zA"
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
