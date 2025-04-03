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
    "3ekt2psbWvQZ8vFxDswtmUEmcyDbw343kRx2jhsMNoRJkSAcfBSWbXF7FbaxBotnB8NK1EZhiRdQQJFGuRDSu5fw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oXueGqJkCQBMnNfi6sLBpbQRAugrNguw3wfyZ6HSCx251tGpDt6uJfgxMPg7qQBgSRRB2eP5fLtXA5vwDknByZG",
  "key1": "3VqP2yuQg6gPNWW5Z2QP2i7L8qDFG6g6etPTJthk2QiozSrpHbbzBZQW4Zk4ZwRXEUHvQZCgzbC6th2RJPS47ysh",
  "key2": "x9HBcWtwg9C8pEhoJQ9nwXu9ic2dRqDxnCRuBg2VDKwtRYCvQz5sZzwH9db84ofPVCvNAGhJyJUxsA6TJbv7927",
  "key3": "2Nxa3kapMx1QZudJXB85NQ8Rigz8DDUxNd6pdARUZHGybzMFBEdkY3pYoQufdmMjkkdNy7VJrqkyiaBfbdy3K8VN",
  "key4": "3qJs4zQ3SDWRgKUNGDXmpSM42Xai6D41U7PmMiDVaChERBG5F4AQhW9skWWhdrHTvxVT3XhZ9LCx5JBju1QVa81z",
  "key5": "zjQtSmnxhKejin2dZANZsyBmjYRtPKppyTkT2xn6rXC93TbtfavQrJ8cDDSdzJhC7RCLkSB1zcbB9HYhyVq4JxR",
  "key6": "ZVwBjvcEzhvZkNx9x83Zvo9WKJHNa89Ea7Y7ndymhPgdEh9L1e95FMDCAtCoBai8aDZRf1hSAcf6gLiAYpHqLj1",
  "key7": "5tWszBxVEKExN4CmwtCPW6tPv8hiicrWUTH6ZekySaFH1ZUbp9t9w4mskuhfFwGNWKmzR28UFw5pnCkZnp8LUAb9",
  "key8": "4VE6KFsAPfzD7TZhC5kDDWgSc9MtVZTuSqnzs1TxXC1DbJtKqxny5yoq6oK36ayWrDUssaqBY6HS51KfJGHwvCXn",
  "key9": "4ky1HT27Fe4TyWj4C3dHsX2NmubzYYLvREKuFobxnwNaqTUpQVLkh5uAEsqAYcd3P3eoghoYQFPoNvfoh12Pf7uL",
  "key10": "U4mvcnK7h4NjxUB6N36D7mZiJtUKVzKpsupomgBXgHQcu1jYmbBdFFrpNiR8shPsqkyYbefveifpttGgec8kV6y",
  "key11": "42XjChWaQt7C2qEdD6LUo8Qa8sDmaEmMaVF1KVyD8cfCPazvGGWCH7DHJzudDX3fqAXr7eQTPLkeKLVDtaNDvE48",
  "key12": "2AX6G2zp8qSNq7etM9zWiRLetRSJGGNWJLpdKDKAmLrp1Cr2QutJXZvcaoofcerUFBdRKdsdv5Hns76h5aGrTcbC",
  "key13": "57TcWPqWCF3hJADvDyoxFnA3r9LscKUtoHDhTXe9fKpDDgAnAXdDNyJjwKBbuiazLbC2vVARtpZgvo7p2SBpdpY3",
  "key14": "5FYstyg5aDKBsRWAWmPqsa9NspNVJpQRdQToNZgP7dQ6BJFn5t2hm4qPH3KfjrgLXSGxLQua1RWaThDLhfeDKJK",
  "key15": "b3DZ3qm8R8NBxUhbgPCBps5kUBMAcP4BDXJ6kunesUxqNaku3oMQay9X7bNcf1JWpN5GV498v4Xa1XmJxtRjrHu",
  "key16": "4UJzaYApVy9mxVkRSnAwbeWjD6M4kY2saT6G5ieRH1EzEmbSi9sGgvdov57hMGjzFCczoM4YeuZ9tSNvocWxgac6",
  "key17": "XRHyrWoeuzNRkuAFTXkJtb3Z5HTt3X5MvK1h6udkgt5zp46kR6Tw2eH8XzVKHgV9eVYAJu6cMwqjqFhwPhxD8KY",
  "key18": "KUtDhm7ZR22ckQWTMhd4Kk2P5TPbziTfxmNRMiWDJLwZexP9SQwDf6Bhnd4rojYrvxrh2CK42ZfetpQNhKUtXPP",
  "key19": "2SDLHyxdXBkqXSRgnGuFTrTLavu9epmjAJN5e78FTbfpyNjTtAuiLGUzTisS4v9bAoHewzM3rmpL8pzCjT57VTz4",
  "key20": "2XLbtqBt2B1uD36PCUwrzspJqegrX29ydLp9EQZr1oSNxjiXeM8MY3wVHtFet1tH9ofnEkX1XZjadfEGsYLrYdco",
  "key21": "5CS9bW5TE6HVtpq1jyNaXxcAKq8mXq1V4VUC6wNjnm5vUHNYZmmynH2j3o7xKs2LjRGU69jY8jL4jgBHFR65KpAw",
  "key22": "2M8ZseuHQExPXBwPh4EMuD56ji2n7UHHJTsvVZxi386T7Jd3Ju7ys8zKfG2UmrZYd4m6MpgRZYKnFhFBYJW6o9qC",
  "key23": "4Lya71DwrEx6FE1UUfhHW4xrXBoH684KxJQREPxdYVXK5gWHUcRjVWRfCX4BiKJ1mciuXYYJge3XCL5WgwGC5LAM",
  "key24": "2DgBQ7MV3kCeLVkxkYNUgQ8kQ6tWQiijTbs5k1d8AWthddvZgkbsG7KBuYoNK5fjVPp5Rm6E5mHD6fmQKjbpTh8b",
  "key25": "3bmGD26kFzHLrWCfuVQgPbZm2fzfYUK3vqMfartnHteaZTyWwmbMKuEHZdwL8Z2h9H1CQJzAp7pUi5BkE93xirgm",
  "key26": "5suBSmfHbVQ8kXD9qPw7CoiejPZNsaccvWhJkXrRhtvSaSkV6gYTe4SpH4nF3SNfRfb7TxEd6xYiaJHaQXLJwNpJ",
  "key27": "v9hg2NDHnrqKoJ2kfL4C5G76tKZhrv8gD8sqHCdRjRRWS2dAwPVqnN3vgZgDUkTFBc35sxsvFYtXMQRbNwm9G8u",
  "key28": "QHyBBc6fJBw11UzBM7pozYH4HCUwEi9WfTXkRicZMwVvWGTR6XBsobJ6HT8jA6cRAXYHnQrYeQ4MHhs497Fhq54",
  "key29": "2wNDif6jnGbNfaELiYjpbnpuHZrycbXQzUzE1dQcJttLHUHG28yVwZvL2djLbkNrjLE93xeAjUE6Cbz74S2RPYQg",
  "key30": "5SoB4MQCJhxMRMC6ri3RhJYs5WNLyisB8d6oE6wtYNWYr4YHkDbRztRr5HLrCZr4Uo45s6VcA2w2JFJVmgCJehTB",
  "key31": "5EcsrGDQTYWiyz2jBmPcF6Gku8UPPyP28Qvkop5goDhFHCbto6gB6Tx2x6Rif25qLCsStk55iJcPr9anaLrzbomv",
  "key32": "5sKUKcHNgkHqVDJF2CdPhTTBnQCYPPCMkrHbGqUS7qNDf8KGJATfGWjRn1CickC93CXv9i3LaDfKNuq7ESfjgMYd",
  "key33": "3ktXRy4kAFFo3N3HSUn6gi9PpMcRxXAq1iCWf2yRb2iSVMjgU45Cc2HZbdHFUdSrinbgFXRMD9i7vfjBWdrWGSZc",
  "key34": "3qTmkA1nEu7SUbNUvrWwYopJz9TxhbF8HCjt51dKAKMWiLAZiQ1g7kYv3irMKe6BHmS9A8enUTp1D9ddxZwaLFsr",
  "key35": "nZCcQJQ4LjrnJAZMGWpveVgHmqCTSm5fVmq5TsexxrF8JWE9pedooEBt2g4eAFsbZBLFGsBaP1KSKhmev9T9pnJ",
  "key36": "3XDYj8FchfCJ7PCAwAq1FuAJ6SbSLJMrvXnpNPLYsc91TDaut8oe8x9wDeuXowwJ4KyjEoDJygZ5HpD22E2ngK54",
  "key37": "2UpPHT2L1rnT3zSMAV6uJ4uJBbcRXuKDJ3rqB7LaqBkVRgFrJhcUyXwZyeEsDw3yGdU7gpZs7hPzdgkSoXKQ7ZGB",
  "key38": "NmZwrD835CJ4qjqA6zDu32XKLCUhFSUBEuDUMXuvB6G1Gi8FriiqE1VE1M21f9KfpvtYGcP7rUb2XhnzuSF9Qgz",
  "key39": "45f238CoFRDST8VLVaeS1ru8wr4JWLyJHryKMUnSR2XwZ6ZH3ERaLehXqaipuFuA9MY2PieYJbatJTzryGKFoDBk",
  "key40": "5ADKxMrAVoXh8Rg86vHP3ViqkvqbNhUmaqfEBKshkV9F4VSscUic77N8o2YDC46dK5o8N6Lb82b1NBjvhFGCNiTh",
  "key41": "5mCmxfaGVxwTvN2CXqWCbRmyLp22hd8CdzzMymxegpVrkkLKC92aUeHVFe4Vpvz3FPGdCMdwkqUjxRriXM1DHJL9",
  "key42": "4g53Twdg9UaMrF61ZfsBzMfWeuwmCQRDgynmazdT3CYJfDi6jNbXz9LgGFGMy2mzD6LiAqLMi7Xt6BHad661LW2g",
  "key43": "4gCjAHdhimF4d7ZWwJLm36m4AS5Dpf9ymYomGNemxY2jabPqA9kN5bakKD3raAjQD31uDMXe1bAqYjxn4uFjaDRN",
  "key44": "3ZPHzGkeZx72NLAGC2NjzhwHmXgAfEyoNMnyB3t9guBz15ThwXwLPoXLMrkXwXbneTgiM2PntcX6orenq91dW8iG",
  "key45": "3gr2jxCEhfkdjmzSnt36ocmyuXjtVa4iuZsYDBc8oJ7QJCAuh9nMaghiN2PY46mqnsu76y5fvo4Xhn5WrfCgP8ZA",
  "key46": "3n3bPZiWddyXWWN8A9YrtTPszPA1ys6JfqqWZQ9GspqVqRecxQ5FxSFdT4Pe12BzdTSnALhiZNuAP8somFRvUMWf"
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
