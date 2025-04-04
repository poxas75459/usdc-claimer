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
    "4c8C5anPEPsPwSDzR148txNeW7z7wVV8PJSNYw8tq9XsWXFMm1nUQrDWTtyCp9wAe4xxKwS7mn59qLt3mtvoqC8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZaSQXfipJkcs2ys75vtUDV1jBTHLkMHfdUyk9FyyDKjENP4t5AHzoPSKu3HBymQbsxcWgW4egbmDTUbTinKjvkZ",
  "key1": "2bLdTQNkBsXGKrZadwHS1Kt6UZg5RFkxm1wv5T7eAMyFSAH4nhZKTzkNaQwZk4FDH1SRSX4mCn3d58SbcqtmHpF2",
  "key2": "4PSHeUTKvByYoXScDUk2obn92nxKYTNCw3K6LFNwxPUCGzu2c9yhPbgcnVYL77MnfhqonsUtwaGndUDcLL3dyrjm",
  "key3": "3wpaiigLuc5JXrJ3TAfxR3XJDw1ouQ96RQEQujNUde8Q7egg7fHESHVU3vBJaorHixFkU5X1vKKQvau3DM3oMFX6",
  "key4": "5MZ32XrnBsqEJitbHTY1MuqHymWdwZ1EdeER1LtcLYaKRAM7kyRp9wjbrKFqDV6E5ykweXDuMQLDtAMvknwuxyw1",
  "key5": "5THivNMAoo3PK4jdG5ErsRhmFjYcxzVnZJHRmuvJMLGoe91qkbTFBEwpxLdUokmAQW1hxL3RbkQR5fmSejndvPxp",
  "key6": "2k1yUeFAnKfeYC6WiDs1nqfiRdkNDjpbp7kmTzxFK9FJqLpSaqTNKRpHZ4DLeHgBRKAcUC2star2Ls81W7rBBZoP",
  "key7": "h6hhhotoy1Q6E1yYdB9YphS7WggL4rZtVnYGTEUJnitj83QBoPuEGjHGJZn3JTc8W2hdbSQV3pPN7AyjJkFVcyc",
  "key8": "4DhAs715v6fxKgFLZU7GBXAZ7R6h3hoDR8FtoLAot5Cd4KZp9m19tiR9y2u8v1WJk9mYmPprhueeuxx2vF6fueqC",
  "key9": "4jESL4UEZRMvyV5k3yXBzStGsZP5dYxtnJXEe4wNb5GVKAHCWCbLS4EXkZQFg1qzrAghgCvLKuVS1CMLpsVXVbtT",
  "key10": "4apSUKyxpwfiFeTigbWjXL2YR9skhmEPTKJVpifcEa2K82BidJ1jL3ndxg8AxCnrGuaywUpsJL4t9LRVQL26TfTL",
  "key11": "3hnvU8nJqyNzh5LaFJHPNfooz8tBJXDRUWtHcB2FU6d4inQ7zNwLnDTPX1FUntE5vQCbbjCPtP9dBsJk13Kb4tHj",
  "key12": "61xnvzsq7u8HmSgffkyicahEJQcDm6Egq14BfRFoZufc1HgLnvQMyCXrm4B4givQGFYg8dK5LV98BWXeTsRwkuCy",
  "key13": "2vPSe1WdFrqNH79dreZQrTpiMivrQcqxHisYZ31TLajVMtMxvSwKSnvLp2h9CVV2KKXpHkb5bneiFJwYffAMnp6t",
  "key14": "37XikzTxZG73vsPA91AfKo66hLLjfLrFAgzpgTtTBGtRjQzJ1E2DFwK58w8hKk19UP6W4uS7g6vXo52PPY5A1gZ2",
  "key15": "38Hf2s9gVnvgWzQ6Ladh1j5c95SPvemb7mnPW21bVYX2obtzTb66CQ4CqezpGWm43gbdyXaSvCGfGC4DYYXeJXy5",
  "key16": "8jUNa19S3c9nL8TdFnmEFzHy4dNR9cc8bVyjA9i9ZUX5gyKGhZbDqvhp9K1ZrAKfpBJLob5qFXYY8a8HmLNBRFR",
  "key17": "4uDkogv5wNitZXSUi1kRsdmtaV3aRw2mx5g9F2VoirJFutxaZ5NYVXuzhQaugfVDWKUXPrE9fSvuLr6eXtqjxLkJ",
  "key18": "48b793Yqs2KwAQr3W1nj7aE6Qo7xZrC6ND8mr6rFDgmQUASHrSj9T5k1i4eYKxDk1f5kt5mgzUwrxRizx8ZCAk4P",
  "key19": "4cGZgscxCPbYRoJ1ppJchQadrzqBcJMyP8adgLYYr4zFQMM2HnbzG7QXGZ27GZp9UG6KLiKvn1D1xncdKkpXNNEV",
  "key20": "4iuHmfWuU8oELvw2D3btjZzfJvmjGPHCP1rQR1C3aCNMhcDYVUGhwgkrwwSCBfbH2g63K884oRkE9e6U6ErUkyLB",
  "key21": "5MGiZTpzsVtWyMma5RLaK2QSRPZXAT4cprmXkwciu6nFYXWbhvLCXnfcMCjs3CtJTakmTQhLo2Xee4Sn6N4T4brQ",
  "key22": "2HLYGvtMwb9xvom47K4AGWtiL3jpVLzdXMwZ5TP4oH6GNwSKJSTRkETdUvsjNbQNVUzLwG9utbosTZsxDUgnkVxR",
  "key23": "Rhcrdd8EAjFVbtVAeJ4cxfvcWZdreFMR4VstmpV4gUw4oCSwUzymjhgJx5H2BGzWcspTD1VTcLVqbrSCsAVrvJX",
  "key24": "4J4eCbhret6hKrtFhojwyEpA31Nim1RESvV2n58H2CcbioWLhwvd77XR4zv5Kvis5A3oGhMbz4RUV3KBisXd5vGx",
  "key25": "ggWDaaikzdtKHML4hAA4pt8t34eh1fQRiQsVFGwrC2bniMsruGUiRvDx515oiFeJ1f3Neb671kEt6NTzikHvffy",
  "key26": "aufbPGDCrrBk2gmKU5oMu9JQdt7TJohoSa893vfm5WZoiMcgWhz7ktQZD3HGdWZvmntL6Qn1TU8ErU5c1dbER7q",
  "key27": "5m7bdHKsE5DQeNn6S2fhPrbtzYvv4kh8jXR5HXYM7CsdzNypUgfNQJnPefiu4WzcBPoeg81G7LZPgYiurbSs83dN",
  "key28": "4rxvG35VRSnLkU2wYPLqyrMAEXJSjrBMKgbLJi1rEVu2VQpPcskxABJKyguQcRYikh56hSm6EYgsfrJ86gqFekZX",
  "key29": "446aPN861fsRh1gYdrbfTGgGZ6ZYc1ifUsVuig7oDxxf7Enq6mucgMzjdFXkRxbCW2Q94STfTnHjht9kPRdTS5DZ",
  "key30": "2KzJEZBrWzTzrk6yLDHwpmHBgo6QJc5587KGE45vs9JQJho27dNLQdwszD7SB3EZbG5zdBa2FAMaoB2gD5Af6EJ9",
  "key31": "2U6vihoQKKsyAs2sEd9XotCU2mP33mYSkeybAmuUo17hU5UsiqAMUhsfxoXWNk3nxRBFyTYR28jBitooxcZHVRKc",
  "key32": "67n71tEEUngQ89swUjh7xsxErjpYKC56mfy91tL4zG1YsWzPYLMPEz1j3MZxbT8S1mak1VTWRjZpH7AwQsUV7ZsK",
  "key33": "5RdiXFKt3pB1x3a58YKiddWXw4ezGjpAFvVHuVjq1vFvB5efwseLKvQ69ZGTsQK8LfK4QGemoqRxHjtCV6U5TEQm",
  "key34": "35h4xqAu2Tx5uESTz6W9k5PFfT5zFytXKynqv5X5DySyQZtJwG86wQFmrru6nA3o7z5BhPR554VeAARnkdfcSkns",
  "key35": "5A7HrxU1WsZN8GjCBpFPnqNa36D9r62YgGQbrePixyBjhXUqptMA8abp7nWpjEFBM7kwMmiDhHvH7DAf25apSL7e",
  "key36": "2hqnXBtzX22NZomSmvHtwMc4aR5VfPGwUxK1gzScyQjzTLxT6Ljw1YZoM7hfsPru6NC9ZaPhij8N3HR8VD16z3Xf"
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
