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
    "4wCaV9pH8Gu9FvR1X5MiPuv8WHX5Huwi2eQDnjMCAGgPbQorMLaCYk2FhhCV2gDo32JUx8pxx2dw8XgcS1sU72p3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SoEwWD1ZSkVunrRKCDwSaCduRnWP8VvHBwMF5AGYe68ZudjtARxnA9X8n7yrm6BnohkYYyawtN7jjYwWA4TFYxb",
  "key1": "ADkkF9JLHmvKozjFGhVpC93YCKNxFavaJgVFbMoMEwZBDS8FdjMMz91NsR49JSmviZumvuEZLrEZmF32GNCAcHe",
  "key2": "4CrJAET2cYAFF6SGfQEvrGXbT5F1wR3HtxQAHEdbAJta2Ux8vqcgvtUdKF7ify8dQFbs5e8qp6attibMc3LR56i3",
  "key3": "5dHNPQe331u35YrwgXAYPVc2g5MgHzNNhhB8sLHyU1EHaY4HfBaVFUDXoRsiwrkxtLx4vV9yGNrN6La1AZ3d1U61",
  "key4": "535YVSVvbJwLtqLJpbshgxBqCAk332SdRXwfRXiFAi6QFEMcn5qCsQXdKvKMg3zsXCT36BmRk6jA9dT5FZNFD1sN",
  "key5": "5bqn9WjzsskYScf9eWj51SEVvq5wibBJfUSYyGgk3R4BWgD3Mnrdk217YcCAg2scesoAimw85U9pF8LWscJ5SFrb",
  "key6": "2CqqRdbFwoKKv11qMvzHJornm4tHkWeF8WFJrcrBjL5rGaF8TQdpRGuPLPuyLpRyksWfXQM6aeNtqYQzhemAwkHN",
  "key7": "2XJAVC2c2ceMkNfX2Cyjm7st4iC1KnSehM4AgsKTfkGU37EcNcCGSArPstEzSz45p2L88FDjRCaRovY6zkuZ3rU4",
  "key8": "2KrU22j7q5eAm5MaqdFZfbKMWt8YLFKC5WJKFLTsfFhC7AoqXcwadUNbt69daeisBGZLzZbykPCqWVAWrsR1DZm2",
  "key9": "25WYY39pmzhrXtM6YCW2kqDuyMBBH5HjQ36EHcz3douEG11WmzEofpSdDwqiQWpE9NCfusH7d9NVjW4iahHxSDqh",
  "key10": "4QcTLqYmRqmfYKJtQW2xj4ywTAPDGGX1U8bwRtBPKWaMdxCNqhB2z791KQWrd6wAt821sREoXn9rwjpRDZtQyFFW",
  "key11": "4Ub45ygepcnL1uX2HEbB8HtL3Cg7KVhmsNYKgshbHbtViXb4vTQfs9YVYz4Z9x3WhTZetHm8uniFZE4BvtRnFPJz",
  "key12": "AkWqcz8rxCjgSrE9pddhuba2jsJjXLkJMfQnJkbipwENJrmWfb9F9mexV9eCS7Hq1ASxqMNRLE6HwfigFHycrjj",
  "key13": "3GG8QryLNURvcE7fhTaZhwRYnkWHPcXW2u4mLKtqAfNzyafg1moyhrLormiuythXAZoAwoJQCNe6FDjqEk2ZEQWY",
  "key14": "4hHMi3zifi5MdVQbdn9a3FtHBk3ynnSFQt7ZNTF1Ho4BKWmDwuVq52u6mjDri6WES9CAwoWYQPr2T9ummytUpZKw",
  "key15": "2wwDKX9JqwLWGgsa7qvAsbDARb54DRZnTVKtcqEBTDuTkmPdHAN2VeVCuAUTC8LXdGmyLbMrfhy5ugpBhkHRKq2v",
  "key16": "6L3zyZ518QDRtQ23sVPdoGnmeJ4mv3LCKbZV6MiGmhLLY5CaoiYZZ6xmcHRyxdqKpKr7RA2JZpCvqArcNHNiJLY",
  "key17": "33kD93DMPVQdEst4QYdsTCbx6RECDC1EQjaPosrxQ5MsVWfPChCYGQVTSLE9safbvnvpUerMp9tyXnC9MPhTKTSR",
  "key18": "5ozxSEFuCb3FU5nxMiwPWrUTm2ZHaHr4LqtiXC8Pao8j2BFjBXWEBtTxfGRS79fZvNH2UZxjX5VrfAX2XBCJyufT",
  "key19": "2J4Fo49EWxjR5rzmJKxDPgkjN3Qe4ZbVvhBsnnMucK3MMoPc2RWSUv58UkAQzARrAoFSLVSLbhbg2v7B6g72rKVp",
  "key20": "5FVVJAuHgBmWm8dVXgUEqVsgH7GeAT1uKyCJkzQwZEhF5ugSQ7wSxSBQuFn7AGiRh3Cg8KwPyMF6wanHdwfXetWv",
  "key21": "3atg9gsdSfnPo68yugwrmvXZSa3VELrh5pinVtrZf3PMHHacNkn3ChQ42DVrBps9jpTMx1tSNfASVQkYuMGCTpeS",
  "key22": "pnjwwQc99oUJoQDDBk8dbxLWWKEBAFBQLhoZKHKSd2hB8pkWeh91ANSxGDfXu8koirU9aamNi84smHzKuqis4rh",
  "key23": "2k4ZDGcLJRbE9mfpXKLPYeJ74SJkruDt3EMDTafULq69RX6BMiK1Ai9fREyiCNdiXHX2j4LSQMewUDSQVsJbFLnX",
  "key24": "4HfK6J3r3Eyd5NJmCKrQovR9ZxZhXpjLCsQ8aCP9dq6EvhStxV6vf4QvSuZaCwXQ3TnT7CyzhLAjwnivaX59gAji",
  "key25": "3odeuc6Nt1r6pxZhnWw7seBvkUe4n8iW2NCCaENZXBQpGwK5hRLTb75JjXDVQ1DRoy6TFxHnXYvN9fgGRxMx3RZR",
  "key26": "2DE7qYX5MNuP9YrHSp5BoG7kCGD7n2sQxR8LPM6sXZxJUYJRF8JvnybJQPb3JUgq2gxfrXbTH8cHZnUeQ1P8AzJW",
  "key27": "3r8DrTzNGWjAzN5Vfifzy5ZUaRFv68eHDrMcnbg3DXdj5UWpezeibxa9QJSJcLu7JDzHfwWHsCEGWuzeFeZ2qz3v",
  "key28": "d3CbjzRaapFc3SWati57xAwXKm81NQRMKkvwU72GSguHcYBqK3oo8ZQmeebRUuyX15BHkPEqnfJJysGF7qPavuT",
  "key29": "5WHGdjphimpMd7SYdwmo8A7JHE8RL45cBHBhcPowUetxxRoFwqfnk8edgbpbwcuwRg87sc8QziygpKkKiA4GVkpk",
  "key30": "4BSex4rrGhJaLHMXk9vSVrXVAk2cgJu3eZXRPS4ByFXCFGLmkfRT1MazL45n2xwpZv7Ycq3utM8zzWTmpm2RyznF",
  "key31": "5C81cqW1ZxGAwSixTHCkfiVYoVTSJj58Z9qHMn7qG5ZFT9u7ogMCYpoBPX3PTnAzP6u3EBPYMqMH9CTzgG7AssPH",
  "key32": "3jtPueofao1AMiTGcEabazx4WsZj5Wq4c331k5BAqmhQJWJmnNq1VfkxPFHDKHU5dGyYGqhq3Je4n3ciKvcsfvvn",
  "key33": "2uZSrr5j1aHFpmQF32qhygaW1vzsjNjFDpTf2fxUspQy5zjCUytBWPEyQkznejVAPifnmN54RVGT5FFGicEHR5tW"
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
