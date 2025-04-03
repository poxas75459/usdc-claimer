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
    "5qZuqWJzZeJMunL7BPEBPkDjUu99f9jKeNs7MBEb5R1uL9pAf9kxUY5A16jXD3Qmma2QTKFsgyAvM4oXxUXwmTPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uj9w7qXrDFiXLqfSfG1wCgiunC5EuShMePUh9LgPTLPuQw8Zbhpug5AaiPDDVqXJ2Lwy1RETwTNjD5KnFxoUnpp",
  "key1": "PAG2ZhYXp1Yp3vGA3Ru45a2fn6Zg4p1abtzUvsiUg84GNcWuEiegxU2Jws5LjcNSEA6Sub32yf9aVdEEBdfz1wf",
  "key2": "3r3AgHcSiiQHzBYA7LEdvuEZNf3QWpKQmMEYpkwmGoqNWg38EathhprW3TLKt39zt269byo8XYoqu8eYEpA1Uxnt",
  "key3": "PKDiubs3TGFuParpvT78TJAqNoqhrFXyABoVk4vjhm9qXbzScgth315D8bbtaxscfGykGDnLsq6d1nZnukKfrWH",
  "key4": "5aRjicV4jVQDvEHgqJnB3sCnuMwpKbF3Vjqq2TgejRruwPoEEZMEp4T4vLzHe46r97er1jMkucrxS5NsuX8KGhEj",
  "key5": "3wRkiEq6pPyJiUpWg67LWkogn7dCuUJSf5eJse4H9nJjMcX5DHHXCm9KGbV4ijAM7Yn3CHjW5EEMiRqaEsa32ctT",
  "key6": "3iXPjCnAotrye6mhex5S2VCB4YNd739Jje9e547dXJVT1jYfD1X2Y64aEo7k4M8mWpqWFxpUJF9MrQ33EaWckMfR",
  "key7": "4imnSSmaSzHGqXspiokiipruYAVnd37yTWRZSGpqHrhJkEooH9QoMm9Nd5LrwPcGr2mZTv2J7t3thJqixAzkFUe8",
  "key8": "Msc6ooqrtZ5X97BDwyrNekLuoUQCFy7kvus8J6m7VR6YYNoBtQJdk7BeNGcL5JbzAoRsuja5vSkNssGjEKRpZrF",
  "key9": "5XdYFo38HbWRQ95Em4G3hPz5mQVME9tauQNkzf3EHTFhJgjN3Ua9a72ZVY6NBrdxoqsmteFjCstVWaEbBNPbQWPv",
  "key10": "5YxM9ZCuFfBCuoJtBj3GQnYh5riZ4pQGLu349hPieny9QFnRpx1YMYJ4YHLgGJJ3vzqsak8sdtAYfr7N1gfGjbqZ",
  "key11": "2t9LrSaoqWNK5NSJuG9KAsrNnRg3uTF1fWfRVddkfYW9952kGoSRumGhCPKNKa69MudFSNjrLDtMGcUn2cmXpqhC",
  "key12": "5i83iHELv3gmKFgL2eQn7yzTuExDCq588xvjs2BkshSAAonPrpvysAzgHJHttntiKdzi8bRtAGTwJXLHfkzHHrtE",
  "key13": "3R71Fa7fKZxgQN4XN9ek1W2v293j8zK6W82ReoyTvgoG7YTcFqgQ3jFt1KpfEt1rHiSzosGz9jsofchEMtG77ucG",
  "key14": "Ctmw7pr5F9bW2DfBApzzL8cmAJqh2gLVX9StAmpMov65KyAa7ThQMgXj1uTmNQDhqdRNBN58jjhZ5fbJdc8VDKY",
  "key15": "467DcmdvjUqEzgBeEjLANgLHoioEe5DYTrNMGMrZERWRxwvEfmdUEHiHfEuLmce6V2UGKS4Tuo4Gkpu2HGJFnNwQ",
  "key16": "3FWTCjWZe1GrK14B2R8ibxdgFLJjfVfUfibvX7T2yVrLcNkUZxG8tx26NCVHW1mH9XEaRD5TD4AzKxFTyzspeVF3",
  "key17": "5umHt9QeBF2qhatWEjoJpxJqKUMUYhmaDFJRZBb1unwKS56GjKxF535dGfxex4MJxFcHLdMNPYUfZox19AMMX3DV",
  "key18": "5rN99zUdKzoCYdjsUncz22FxWKYxZWAtDRuR5UBbx27nibFF6E2756Wvr9n3vcjBfsuvi7dcakX5JmMGqJV5nG7V",
  "key19": "5FB43vWvutqBfsbHhhNFQvqjFWhkW8EcPYGNwr7CDR99V9uq5a9GkYFxqUuavnmWaZTzadPsg7TxyDawksF7dtNv",
  "key20": "5yjrsxXURmDST1eSjaBFk55RePFZVXkizp2raquCokihNU7naZVhQvJsFrLMm7kDcFuqabLeTNR61whg7uEbCUJV",
  "key21": "1TQcyN7hMqdVrf4b47DhZMW8qpxJkk8FdxjVRTuzWWwSGeF9gnMd1SL4P9wUpm9vCRYsfUJmydjwY368hcWoP4c",
  "key22": "4Fqu7AEisNBv2cRFbQfaDyDMkEUesYek7UHGAhuk6APLqUX61o7waihwU4HCktJtbFueFijmPUeHgUap6Wf9m48R",
  "key23": "1Z1ikV6tLtzkS4iotaXg2rnfbTbQJ7UDW7FQpLUXi8YH5PPBFejWnu3cEPmtQsrNRL7MNFtqD8yqbQdAqFwFEGP",
  "key24": "3MMqgKSrZQhLRwKLia3c7YKRjBeRbG2TsLCBsgnjPeBQfHJPXK6gW3CBsFSqaZYsYvgovzL5mpo22k36ozAPWaxa",
  "key25": "5ovYFMYaGRx2Q537ipUTeLBubBvBTh7wV21XD878JUUi4tk5iuLMeWDDbQNgWSb5bViJuwQoXtSkH1xCkfabtL2J",
  "key26": "3SsE712KbKRgPxgxE8n4vUkjjZ8hWc1mMg9YZp3fUj16BgKiTgeWkUV9pgVTrfLJtTvSW66xQWGx4AB6onXi5AtL",
  "key27": "2NGWuyQeTvYkinKagf335kggzayvN8S1H8PvAMVx7bSSndi5xEpmqJhkZHaaZC2uJgnSB9E8VRnnJg6QussH3n7L",
  "key28": "mW1E7Y3daedGwjg97dLuPPdo6yUXhztRei6VQra33mCoXe6VtBQz3apR5p2JbWkZR4YGRK6uyhosFnDh9r4Cnnt",
  "key29": "3VWzivxatbHFLZdSmR8omCvCDvZJi8DHZgd9EzK5rDqEruvyRc6dFWRQo2aoXPhR4A79QwKguUfuTwNN5BpuP6FT",
  "key30": "4nnVnGJw2GHxGT5sqJmjvcYr5C6xJVLUEa8ZT5U4Zkew6hqDHggyoEnH3drzfzq7P9FY1WFBFYCXaJTSo9PmqGSj",
  "key31": "4iP9K9qQ2bUmLB926g5oDb93aggea5kjh9tD9kxkgSQqxMqnY5Wct6JkefVRaU41joq6NgMzPJwzd8anG7wJn8LS",
  "key32": "22rRiQyx2vA4pEruHEYSpb7EFyivKkRMqHBDCNv6Gnycr2WWu7bTvb4oTiFZNjeaJTRRySZLCGiVjnzCF31GDHsz",
  "key33": "ha71iCqNrcp7yv958AV48oxomYaqRFUvnZCDKmkWPLhGhSsQUeNKUAkzCQq2BjeDgG321YeE3XyCdxGvEggQ8Bz",
  "key34": "4vmRHjZupVc6vGToAub1tbi1bkcX1fMkRXcg4PfLcPq9GSRuBwGg24mfcjoL88YFte5PFze6kEm6sxa31gnEFKa7",
  "key35": "2nN4qpskLUZPQrMcBLGMaypvacPu7vVsvNvbe7fqGkhcepnHmLLDBqWPx5Q5J7ExEaA8BhsNfFoN8PhNXNhimUEn",
  "key36": "HkPKREifueApNYEMvwDgHZSSC7Un9zEBqH1obwfjEct2aVxWWMe4oPxxXZicG3HjZ7oKW5wF1Q2e6dg4cxP8HoC",
  "key37": "dUhHJEG6zwPpEhwjNczw5aN9r2scQxSG382Zw75h62WfbZyhTdi1eV6Ekrgbd6R61fV2DTqx1N8MUwHMubhqs3d",
  "key38": "sTnw4vksjn7cD58TfkqTQ8gNhQQFb4DGUti2NComJqjb6DXNZrYhGTXpxi1qmFuzaLqQaxzmTKkY8H9A9Rzp612",
  "key39": "WVUw6ohSeH6bCucwhHTPBCsCBkHEu8gPDXXE6EqyRsEYGXt79vEMp2QyS22wAUBCPUzmJSPF685fYH87WurBUNE",
  "key40": "2VsRJaFrJMqE6haVcLQmeEjVMHRY3vzXiTV6QDVDMwGLjuf1roVAaTnWAB195rWtRcYenwq2gGC8oU3Eq2DLeDU7",
  "key41": "2hq5ocEeGxExbstDohHu8WidQguceQ9vFbPcZUdVxix3VngzNCGw3uMwMsCUZDBGmBEXevmAJ1umFyUpNKSFT1M4",
  "key42": "5KLc2uijrijAr3uVo2931pJFp4sNrMffjiZJdJuDWmwHzywAb6DBYJGCy3RQvd6VYajwbFey22haHJAuLtc7kk9n",
  "key43": "38QNYDRsUwPApamveGG8b9xkL991uJxN6FNeGeLCJwiYv4gu3iAJwAnVRRXWfHt11T76W7bKRki7p7DFYA2Bpr4J",
  "key44": "G4TMPKmrpvZYtRevxJPHjiVn4STxr3eqzsEk7671YZ4crDMaR1bmmRP5n2GkKLDiE4c9igZLzxApEQ5eqFPhZQ4",
  "key45": "Nb1iUdS6U81Uhc3W2y4oNnUqUcDrkLhDB2pY8L1U7bQEu3H8ACj45siws5ho56sE795oWzWAu5X1qELVkZiyU9d"
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
