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
    "dGxa4NcMMmMBqDtC92XFYSmLPdXHdzsewzKMLFCp4fnBVKzBhmRdz235fUP6jYeBb5iwQqhjp7mC35d6dLS9u7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sYZ1P9kf3vXXUDopwnBCTQZRnZT8ws4zp563NszRpLskGuLgzvbGkcsNwNrjJ1bSyNmWkNGfce4PLkLH2UcXm6A",
  "key1": "5fQQ9MLfJ7epoUKfP1EisWVG3EJLYBCtif3fvVReDxKa1Sj7gjgGK7atyxWgrfqFT2bByKQvUcVv6qYEpdX8Nf3m",
  "key2": "292v9fuhThtEYKYKje2jSapBREku8iN2QYDRNpUsvSzP4vzENPGEP8hA2FHLRhRGJHdERZHhmRo5npWBREYpfVWZ",
  "key3": "5W5qo1zcQtA38KMG5fYcwGbVkW2qHoAbZCcybMZvcRF15DqJRVgNx1VXYfwyx7pynJJQFCe96ipnvVF5EEBdjSVH",
  "key4": "5kJZtMwBv6ehUW6Tcw8LWq52jsmgB1tTpmxSEJdvXaKjG693W372RGaxd3n8V2sKDMK5JnV8A3wXwGpdj7jN2e5q",
  "key5": "Yt7KwCVoBLDoiGGWsxwQTE58JrbT6W4rbc5fDFngkvJxQiNW9SQXBWjZ5uwm7ukSrzPvmDaELKxJcF4AderymLH",
  "key6": "Hmp7RnrnNT7bMMHTg7o3bADvJoyJgzPtBb4vSRfQsnnPKP7xch9TkdyUDVbWCMJagz1KAwV5qoeFPvavf4HJHCV",
  "key7": "4vQigENsnowSDKTjDenoPFTvoxqm9tPxfUP8Cy3ULs1uWaLNGfZXJSZfyz1xet9SzjRkH7MMgSj62cR81PT8gPs1",
  "key8": "4uQALyRXbrW49nYuoPckYKmHn73UPCRkzfGFhcrzfWH1VV8eKumdV1S6ntK6Xj3AT9vBcD88refaVnrsaK1WVm1y",
  "key9": "5BE8wuW6A4mTQMXv9crgc2pF2DxTKMBkEE3TR4UCV7SMLMPznHroiR9pUFr1S8zGstKwJ7EEMQ33BbQt1X9KMfN9",
  "key10": "3JQPJrosnbmnXL4YoVBeKVWH1Pf1MxW7x8K4iDgi3KQHua15a9XGFhaXxuydUmMcfvQgw323yzDnCSfg6f6Ja5ZU",
  "key11": "23ewvDeS7qyTfCjDrLbs7WFFJbpPT19YNgtDzunMSHLD4ztKudvy5o87ebPyZrN1RoEExcUgqVgdZYbfXFMzhzP1",
  "key12": "PdZAQw1WZsoBhmQunM6nDwaJnwbpeau7DTguh3JVfQxwwPty1FyajqRzpY1bc6UJAPnhGJka7e1MLfGubEZJFPN",
  "key13": "5tpKZDcixQ7mPWCaJCwpgP1ZYnRxeoTM3kJHasE6SayGyGQhtheH47Ee5CwwZVqn3iYpAcshmG3Qra6bWkAF7hyN",
  "key14": "LTq3T3e56UYcQYtjVn4ExhrcEsLrCgCo7ZeXy7dguqkaDzagBhnSGaB2LyiXkfxfW8J51EBi6syy6VxcoDHgjxT",
  "key15": "4bkMF8bVwLyGm27hGxQQg9eGYZS2aHc2urZ8P3bYiSX4C9FTbgCPQTf4LK94AZ55DAqLVnwQ9bUn3zPcgSZy2NdE",
  "key16": "4UZshzYFjVAFrLT8YTFGSgSrB4VvintTKfZmUoDkspSd6CFKcbbSsV96ZaFaZVtSYRq7JWKz8uFVZ3tughqay8R1",
  "key17": "41RE65PF2xBAXn35VxNrkZguCfVPqbLFWNaqxzsKutJkENSkqkqD8UBNGCNTxhjHvSawpBiccEsbZaZu25APUN8R",
  "key18": "KR6faSWYwunM1Zrnqnfkuy6DdFqjoZMHRJTjKxymSnMt6gFuypNuMG2S87bHARHF84LTXbxWtkwX9XHkw3jocjZ",
  "key19": "2ugZDjKG8Yuhrt2Q3eHyQqjbd8kycVDNZXaWNKrX9SGtEQGz5cFauQnSELntxuMNJUULzSgicM6xAQorGr2pA2mD",
  "key20": "5NJovdECUQmoQ83DbhBMiNjnymMXQ4PgYm1mzBMs51F6h5HCRs2YpzxmMwgUzedz6FESV8igc1NJx6rH8Ji2dXsZ",
  "key21": "27Lyv8ejVCak1jWgrNMikt4CmArq3WanuP22d94fqfX7w6jQ8xEqMmYGGqeQLcEsYFxaUxkKK8ing16Tce3k9L2v",
  "key22": "26UGzesQTQk68BisZpg9puQBV9pHaUbUHiAHFKaaeye59dcB6zLS1bD8MR6Q3rAaBFkhW74eXpF2WiwYyL8bfzYN",
  "key23": "2cthHCw259J9peorK43P2ZCqNu8PqjWJAmwR2PrtZf3PWPuJLTwiS7q2eGXddKkixjC9zG4yg6AxDgdyvH9kTUjM",
  "key24": "3NQoXjDGop7oRha2AWLfKrLAVkirgQRiUHeFW3XY8u2GB2KQvyG76JnZJwxzG82ZyZSDqK7WyCBdCwZ8C1ut8SLc",
  "key25": "KAESzQoC2Ydeohyw7DdgTtni2wjrn8k6k92iz887Csb3v5g54ChaJD33Sr69NQgarQ1Y6qp21Nw8aZKDi7y2oGX"
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
