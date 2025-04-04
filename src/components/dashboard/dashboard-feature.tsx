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
    "5eknLSxFsPA33YXVqQBL5eZqTvEvkiQHdpH7YvrxWFFBwPB3iD55PuJndURjxavFS5WT5Zo7mjEDnTd5aRR6hmMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FmPToiHxk7YLqQCNzzVPRUc2m7M5EKn7dwxbSQKuyL35ukXrG45DMCvWfd8eradkdCMCwwF9Hg8xxSrzcevButP",
  "key1": "42BvirBPdFMDu5VgGpRvPghhtS74efSuusJeTwipnBQB5w89GkLgGhdw3PBDpMsExT7B3vh3h19PKkDvyHeLGKMD",
  "key2": "3mT7RoonBi9YyZo8NUynajkbhby5LLkXZkYqMjo274ViK7fitxRbd76c7CypcaKg3mTw66Xc6beL6NY9gGGExsoN",
  "key3": "4YM1FG2PVTjRvpBukHmVcU7X8CvduewR6n8yNwgXJ1wrkE7PVud6Pcf2SFKBfkk3E2kymV1JMJJdQcK6LwACadsj",
  "key4": "4sXkL8tMQyVLKrJN2gharahWYvTFdAUdBLEkZwphK4K3LjpYGpyUP9H1expwktGe2TVbi6BPp6TWoK5ydCXssWtX",
  "key5": "232tvBXzBhijLFtEPqNEXiUgWwUBRcAKiEs4ZnLuHoMikNSmwdpzWQegwftiELmxuvzPyQjybTRBFiGbB1Cf46Vq",
  "key6": "5wQXA8eT8powTfARSXWcWnN37Tf3cSqBQaQgrwuUmBZHxr7y4CwHyYbEgsa1mNLDXLN3iKzXivohXehiRvqNxHkC",
  "key7": "5vt75q2wMfpKKXyvumK5QEfAQvAJg85iUsWXnxiKqf9SzCriymxaU2p4iARBG47yLazDR67RFP8ozuxFjJCdcEH",
  "key8": "3SG7913CKKkgFginGANj58G769cJqcu1eY3qi6p5T6WN7NKEGoEiNFcGeTTFwF5eWekVYCxWPk6KRwXsyNoCTqCq",
  "key9": "Fz3MQ3m6Xejzy7uro8i1xSZ2g4yzxaqSGCvZ1phxtvUH2NtaoMhkc98WKrqapm1kwbg9Ln9eQ7iqQBRcGyJJwLw",
  "key10": "2YJ5XVxHVK4UgDgAbAT5dYw3bEhNzD84AxXS4Pu3Dpf3JzX1J9WETjZPQGenVZYsfjpjq9B4BCCvbfifyxZ5uQSL",
  "key11": "5soG4j6MCYsxmngooHBMyTmnjen2s98CChxHXhX3ygajdk8eaz8wecVVoiC9uwbE7UmS8X3KpMgsPcosKUzi6871",
  "key12": "2FW5iHBZESBbZPiCnzQCQEQzLFFcgfK6dDGTmXRXPTQLk9YKhcvt64ycdXUKSbyRDEWkoxp4CSxik4LwHdUHC6AN",
  "key13": "3QeZpMUPz4KHjvyQJXdhw4X2McGEV8hynASRGT6h1mgmThe5jEntJwg1Zc14Rq8UXJZwV1VQwiw44TxJEWJSsHzf",
  "key14": "3PuEdMD8wp2mdA5VrgfVizbZGnjFd9bHyZV2JJu3L8m5FNPw9wsRdFdrNat14puFERSdyPkzDC1NaHzA89L3io7n",
  "key15": "3dqbASCzXbKYdHWsEozUTWi2A7iZUb2UT5cEuQGmXDrrAfSeV8gYG7NK1CRdhS47R63BCTosYtGoFv5pme4DLyrk",
  "key16": "47eebbaCGnw739S3xDXZ4xbhqEVe8YJmi7R82oDH6YcyBuLE7g9nYMwCNRBuusEeqetuke4VXuc1f89wesJvbhdG",
  "key17": "4smHUqnaqX7dBpJKx4NjKYAprd5d96PgyryVd6Q9jdpEQYjRsw1yQTaxDkwpNZBXXsg4DvqpWb3EjLeg7yaBQfF",
  "key18": "5imWyDua5nmquQD7jW919GZzeUNLY9L3Uw9JdErNbRTgxqaEnLf3enr1NoseBSSE519yZQguWQeR93ZvZC9pNGWb",
  "key19": "3B71JDx4EBxVkQqEXLiM3doVZAgiWjQHyh5fF5MqULVzojDrnF8g7F8qqmGwEKgjasRu5SJ3wcp6PvhxvHusa7vz",
  "key20": "2xhhutuxT2hQJhCtwig6xUdwLQupq5q7d67HoudmsBm4pHXqdYmGfUNdV6gxDknUn3jCwr176S63hUM5swuCw8bz",
  "key21": "3m9wMfQ7bkSDifedmSboBpz2DwsK6FUfrdQoKyfVoL6JHYywi231h6wMaEPRDWPEnF84hTWnnQhu9ueZdSLj3LS",
  "key22": "2WCE5KmhmRGKdJMdJdWsyTqHAAnqoKzqYTZYNduCWLxjZ3JJcLvaoJUJE4fCn97S77Qpcbndzn66xBU87YQbVvHr",
  "key23": "35GcWoJ1SdDQirf1M4ZiLNXJLtSRfuWqfoAqm5C1dMKeFzEdQJEzbRLAiRgP6DkZsi1fPCEjWUpvTdPsPEkvu3Fj",
  "key24": "254yofHTmfRGjn3YZQ1BnKqsrm5JmWzDNh1eM73cYJJZGCJV5SUQeh6nfGjcYG2fCSvWGcVByWcAwWUyB9gfb7bN",
  "key25": "4dkqtQGsDehjDcVCumApC86ZxU3LdbNTFbjcksiipq1GcHz3gMcnEPZJ9hYpCWYG6DW3ZvpdoR3Nn4Kb37DDhy1Q",
  "key26": "46yLAxAtyjmPT925iqVqHQ8vvgeEvjgdNQDbDhc87Fr3JDbuRSqvzvZMqt4X5qckoJKxHquSyL44DsP19uUVdYMg",
  "key27": "3ihweHPiV4DFAK88uco9XnRNL3uEQ7KoyKpmdNgBaZzA5y3xAbx2Hv3pNQSq8WtNXs7x3ihaN1P1hN5GGA2vvzdW",
  "key28": "3vj7Q4QSJzTbUhjuPaExwpifKwaGnoXpX87MxUhX88vbpSp8g8nKLDHdSxVJScDzRJrRPxEBpBLoDWPRqyHSQK5A",
  "key29": "3ZAJqstULqrgEqQDm31xbFVSMnmzv8pJDQcqSS6BcqhX3K2aHjhgEuFv58uSNNPLjRKWdeDayu1joakruC2iUFeK",
  "key30": "5vDEVRnKwnvs5HzPddyY2X3kzuUnHHn51qXQ9pxRVo3MDeoUkdF3dut98cYeFvADfwfq3wxMW4gWYhALvKw552LJ",
  "key31": "4ysniqQe6aF5sf8qYQwnCYfkTviLYyViGJGoaQHC9LJBXz2vGNMz8Ej6VqdbN17Kw5r4uWTU9eF8dyMCgeCEeqU8",
  "key32": "2Mms99xmfkSkUXRTncYDZGNNGLj7CdewKFm8igyRaPXD3CPEYw6rZgR8yeyvLFi5hLqDFCDCxwDAMQjGPred7LdC",
  "key33": "2g9Uga7q4tPfvEtbrDACSLz8RhLxJenxk1dH6jNANqJnVgUGFowjyDUqSd3N3b8Vs3kaXSL1bFZjF9jtGRMJsirf",
  "key34": "3kKgjaeqLpMq8KEn5H6noJKrcZbHSkxUuLXAzzgZNE96AkgZgXotGVMSTSHGzW5K5ZqT3AQggBzJTbaQ5v1fF8y2",
  "key35": "Bx6gZaGo3w64hETuHk57g7HhereoV3Ti1MgqP3mZ7a53YC6grerurvjM9xtMLfzQ8wz8UjTnFJ4WU3fpc48TxHs",
  "key36": "641cCt8P2gPmiAtci3FATD8SHrJsZ5D9b8GN9LKo6fdkK5hfS4fnApsYdAKHY93hefSKCtwPfQzGXx4PXmmH5yXb",
  "key37": "3no8jsVscthnJb81vV7iifXbq3Q2HsC8DtdMRLhknrxFN4dvfeBNMkecKeS4rWJzGvDqHkzbANTgrYeapDNu3oSV",
  "key38": "udStS51h9FqTvnfRKNf1BRxQq1esegyjGeLwia5WKtpMJj9oasrAtvaLjie6KwbeNkBamySKFcTWFBLSETcoVBc",
  "key39": "34nsnBWZx67xqF9E3NKweBzfaCrcGfpQAKT11Fh2uiPcAvG7AcWXLqfWkX3znJHnrbNi96uy9hgQhbq8oFCnPYTd",
  "key40": "4MoLUFhFJYrsQz7ZWbmgXdTRxfTzchP8U8amHi2YQSWFzigCFqSVzsqbmCp5LASFYiA5VbmuwEpRxQN6rUtLFVb7",
  "key41": "28uZRWjxc7s7xyHGX7rKQQRQp9xxx9eQ9zBDV1TVVTies9cXAaenjZjiyxC4a4QwLUYrLUHmw7ghXDYeQEjBSZne",
  "key42": "4NaZz2WbifjDyR2NPzXUpM4uDQzKyw8TASGebxtP3q6SnyH9djHg6d6Vyef5wufxgUbJqSmKEPZ9sZD5sWXYFtfb",
  "key43": "3MU1BTStMFBJQfxTeSRJxLMD7Dq5WihwsAkCaHgDpkap8sG97jo7tZ7PvCCrU4LMLrJx5hWAXtUXaYtVXuffuT9J",
  "key44": "66Fdhn2i8amQ62sefSjW1ZYbzUcaWFJ8bGN97Z4Xeo1PvuPEyh47BNwjyDFKiWfdayqCTtE8tnzt1xUu51Q4G67G",
  "key45": "wQjWxmGkS3e9gAtic7aqDPzqrSLwfc6w5nSAovLakayFV3U6kt15W42jtPt72aRdxUBFjS1mJ8DKYzcAAwbgmrA",
  "key46": "ez8jA5QfJWmJZ4ixSkNe3KaJctGgSdikxzja64NJ3heNCNtwRuT1n1xDLb6SiZwauD3e97eKhzihnJYySG2t5e6"
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
