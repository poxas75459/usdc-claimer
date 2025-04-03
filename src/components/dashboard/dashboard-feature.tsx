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
    "21Q3oNCB6WU66aCkwrRAq8ScnNZfAzqJuzJCiiaZy1n9meeUZVq8xKaSTRy8kztNLgEpH6w8o45MRGkca7P8vz7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c3ugADj3r9oXhcAbd31iL3EnrETmtezYaXCPnXt2bLTnEEBtR2fEsyCeDGJ65zkaPorBcPLVUpPUoKEzB2xfvgA",
  "key1": "5gRBg928naiVLboUYb91i972ZGkeseW4Gjh4nQD1FJBT2MjpLQmSXaFaov2yKiqQBeEyx8be1LkZKrG39HhwLtfQ",
  "key2": "Buyznk1FuJoW2y7L2Yxpsdb1kLbFgDsPxMVoikWhmZf2DqoXDZwzYaxM4GbBS1c4MrQSHsqTbLp6UG6MVgsh9Ym",
  "key3": "3UHHLyBL8PDe8t3PBuTm23q56ziifYmb94TXxxVfpSiUinLZtdL9w1FQCyntwzzRTqFxkZCjc75XtNg2jSbX8dfT",
  "key4": "4tjrtDpwSsQJWeqeYej6x3vCpbZPfZRDhR9DYC4hLcYvVtzv64eNi9xRGYWUNHUmsL4teSpY5fFYczt5SYbgSbQn",
  "key5": "aPjzJKEsiCRJzwz3kzm2eicXzf85ib2Lxxn6Qf8fufmAP4VtZd1wfpdfe1rMnop9osRDev3GWcnW1qXn3ExXcUG",
  "key6": "7iDP5o7Hh6P53vhMCs2tcxrPm47WpukxuAkDgESb3YJ4u3rsbw5WCTy9ptwXqN3H5SjBvDPEHs6ozwCyDjrQJ82",
  "key7": "31p1WFWNySXcVJJ9KHnYuawwGMyjPssLnisATne5ngkPDfmyEw8i6AA25FrBisk1FPyq2SSYXjg4E3FdZ7onrq1j",
  "key8": "5imHTLyFrthvK7JebyJUNdA4Z53t95zjB1CzS65mKTHumHFh7eFm8n74upKMaNy9N9No1fBVkqvmfYo7B6BqLhkx",
  "key9": "5VQABm6LbMsBR4VzzCHGgyVjf67nqeY1eZvusZskqzU6SGr21fopTehhgMzzPn9MMvTevsLfyS3sDfGxERiUSUUp",
  "key10": "X5AJPmbvZPYzTFUoEScRZSzyPjmSRWnGXhQ1C1hEGwMr7AzgEPH3jpYRhF1be2ji9zwtzEv9ntVSfkLA8gVCBNq",
  "key11": "3z5S5tTcXAhPjy9tdMXdXgfrm21VLGhYyVqZBi2EEU5s1U3EaynDijSDgYAhW4tj44RYeuS6MpfZUZQGjaNwTb8w",
  "key12": "4MKzgkzjSy2T81kxNfXUhBQ8rjzSeWeDNyTULQRqF9xjUZQWJSFqamZ2ogc3cNtw61tUzgkykWMCCmZ3FcKwqc9j",
  "key13": "RGHmvbWEws5m7B6xA3FT5yVbb1HV3DwxWhuvXoxPx8KyuRrC3UuS2SSN6N4RidftUdcv8BqWTWmccL9xKFtAFjL",
  "key14": "4pbHvT4zAZ8MYf1LymrTjeZ9REowzEZC1GzbjzhmPDWVRz4sKX9onyKJgehEb7AJbxXP37g4mjMsDqUK5oWX492c",
  "key15": "4YvSWUnLRan6WTTBr7aoNyzMxPmKLGXoZmiCPzGajPyBnFZXWFHpb5mU8i9pFh5evZFKUA1j93AtwAET7F9AxYo",
  "key16": "4gycSKZQUH4j38C6rAmqrKfWCiyxUndo3FFw461Wev7kqUXymHKBWTHyAsCv9SaT2ZmC2zT3FzU3FHter22JZ3So",
  "key17": "GsMQ4uCpd7CFEtC6qhJab3LRjTbHeZyR2BnHjYugZaojQUBUmwBBVPTPEJPDF3uF15tsFdfTLyknFDifHyvRDQY",
  "key18": "4ocYFgiC91yRrkTxeQfP9XSC6p9BFi7QpT8uxqrYsoPuHBSNv9rZXrJ5i3mRpEN16gHevqtZ9M9qTR8pHGREMzVM",
  "key19": "3G611CcX1Qqc4wzd4y8ZX8b11E7ERnwcDHy8xpi453n9is81isqRjJGxh4KxoxQ1YHR4FyimCvBrmjHf42dZEgNY",
  "key20": "5vxWCsSG7sPMejf6iwQk3avp4He5fGa64dDhMdZ5eruSRmknsAx9a7BMAGLvDMBraAsdJagtkaQKNzHf4weTN5Qg",
  "key21": "4eZ9xz1LzyBi2sA87vTHS6MJ8Ye5g8tAL3ewqHaaPoq2CGshSoEXKEnXDUamzwsz6aST1msaQ8PHZ35wNZiRWuBx",
  "key22": "5WxsKpNiWnG3YtbRG2diEamLASizikUcqQq2YmDFXLUJqGKy1JUzt3cXU4BYRFr1XYxFP7c6u2AUBSfG7d9YMQmc",
  "key23": "4TRyoBS4nkbzZwR9ZYSss37y9D8wtP5dY1LXyAsVkNzKz3ysZQTwEoWnrDugBxUEBwfBJsETiCcWfQ5M9ZZAdm4N",
  "key24": "2BH8oNuK6u7Vy5Ti9tTuLEU2TG8cs9NbrHy8ynK2HhavH3WJo3zN9jDrJNqSW6M2Tq9G7bKWduiivyh7HuAWwrnq",
  "key25": "2mg2XBpsZJ7VavLweYtLFk4WFG4LCv9yR9X4286HD32KT7E1UX9YHQr5Fr4obHMysG5LmrJazMFocCZuJGEB1V3h",
  "key26": "2zZiqwPfh7QedDb6SUwrZ3deSuQoECHhaxN7qogyRAwqLTDFiTH6LVmr7nzvvUuTgwbXcrD1PaW77UNbVH18jb3Q",
  "key27": "5FqZ2tWLAmjMhedzmRQ8PRVhroGiEUXLbR6UActZFrKUU63an7KBAD6QDXSQw8XmMC7kwzJitUnjvWkzKKnzVEdr",
  "key28": "29hU1hgkoNtRT3gZUppbBmiMTvkpumLx3L5J8odp8jFCjoAJMwphSSy2MrjZx7ZP7woCpbrUTPN4EeaJJPRKEWCe"
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
