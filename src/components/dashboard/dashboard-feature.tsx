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
    "24yNgttBq9j9yihG6ZhZRsFLvuqcWrA7tTKw9WoFvyS1jerZ9A6cikQA2R5TNR235zLCgBdrBcGjyJjBfLy36onh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wLwEAhTKg5Lbq3VKQkYYesgb48A44CKYBJg35kqemD6LQhpP8AdQT4EBfJuHxdACN5uDwV6KEbQpHpdVrBKQuUo",
  "key1": "5RMXzbsybTyJEY7CeCFpK1jqhHJ6EdYCZTZXQ6fZBSGMwbMWXqUCx3h4WLZYen7DWigWFZ9QqCrVmaJyGU92Xg7b",
  "key2": "2Fs1z9wyG3uCqsb9VAfJamkafXKREUY2TrJ9t1GeiWYUvKavgNBRLvLu92BUX46shFbEycrZZf77ZfocMCuqfKAE",
  "key3": "4sHB5AqdDeyjYArpMYUZ5AgnVqTxLmxHhbWWJX3vwuxMgGQgB8fgKVgEdSECkq3F3qvHLfT8Y4mJwnegPSkeqxE4",
  "key4": "nB5W1s2x1n8YVGJXdcQm7wWY9Hn6ZP5p261MGpw1Dgo4pHZMDr6MtXhyoY1FoCqXvGNc24SWJNbm9cEtpYUiwCc",
  "key5": "5av2LLFPVVPiJDZVKaySGjqkVPNjfmqKEuXQchrSWRTxLkoR6GPdxGWRuEruwq2ChQczP4DJk396CgAA7bTHpU27",
  "key6": "3sNQcmBwYs75owQtUPdHMD94LqTpNGW1EKmhFuwXMeoqcaHbF7HyVJik4RfnHDx2FYeYkdQQyTQnnm5vXF3cvA5T",
  "key7": "5xysjFLpYbyxMQhTSx7vnQmmBxpAURuyn7xSFx3RAS62AX7pDQQJE79T6TNri9Q4UEpYFzCWNaEVEYhE3AHcaU9u",
  "key8": "1bK2exWbXFRVKchHf2YPUnGuikVuC1ikqHqDhSKZUv7Kzw89w3dxeoouD33JrHgk4G5mq6s4evqNdkAsqAX8wnw",
  "key9": "52rcBjijnuurhHGk2Y513DVaNSv9drGy2EuZAfrUdqm19JvhNsQL11ieAhoFBTdGEwSf9dje5iGmwZDqfZHuyv5m",
  "key10": "3CDakHtpRck9KfHYQhZYvtcrZMtKXEXyYF2KQTPc7XtNPEvxsy4yqY86muNVn27t5vaYh4pqpHqEZnXxdH29e52d",
  "key11": "qjnTpkn9Yi6Lerwq1MHcqq59NRDuju7YJDnDTEQbzkudWr19FiWfsiXvvjfjSRFLMt5LkfE6HV4Q4i5zXMUSdRd",
  "key12": "67epe357ZzmKyAjYjwv2WfNyJxMYQr4s7NkASNdcN2cFKqzsLgcFu4NUSsS7EvbcWLKGgMS88mkfq4bBi1ccZ7VE",
  "key13": "3VtpxwB2azE5iwA3vLkQMbFuL1rPRPxYu9tV22hfH98t3JUxx6rdZNewYiHBrH6AKUoa68JNSHuttYLTPKNumaDj",
  "key14": "4zekzjPrEsYD51YaPHYmD9sT7ieoicJJGYByBzbnMJdnj9Uywbu4JUbH5HD1u1uDqw9D4ChKShnp1FAXEFip6bDf",
  "key15": "5Cdc7mEaJ1kRhehoqXazY2HuLBeveM9SBNVGs7csJohCCoJWVxG9k4g7i6SWYzHSiY1WLUgwFDei1Eiyd5pe9jER",
  "key16": "3UcEoQ4EoSVMPb53FUM8RQ22JHRStutUE5PBoo3uUV3DN28H6mZXJoftqWmhBD5TvJMugFbY2UtwFT6MgW36dxas",
  "key17": "VWqiHutgNNufoU1buF3s22wBmTGZ3s8YnHFreR5yRt1J9qopcCp2DjSRJGqdyqtEWGF6aJuAqM46kPnbeUuBZGm",
  "key18": "389XhieFVhhLRp4BoXwScEWLmu4MGYKH6VehNSvBBvwvbVTwVkYzULNqKSBinHJh1MfcVYmBDjMg6xrGtctoz5jm",
  "key19": "2NWGAQeqF6vJnyVUtYMmmYvEVSm6tEtQUeqVc62V5DiyhswPHmuL3U8sJPjkq9aTMSWyTwqkZH5KXNTMDh1jdoVN",
  "key20": "3ohatajeXBrh29H9JdUjwzcoa93pzK5mWEBAQBDpDnq6XLQJc6WxTFGRW8ate2TJSTAerxZTcei3gYWDjdL4kBex",
  "key21": "4C1bBQrPK6XPtcDgpeKtjnxx3HJqzkNV1cxcFa38A5z1DFXBiTXpTQz4FhxaD4PqJF3kryT9TGL5x3h2bvR11mHx",
  "key22": "kFCm9X76RoxpVa8qZ592XTpyiHTV72f2jNuGotHwvn3qfPSr8RAoA4c7jUk2di39R1zUuths1md6Vtrjo8t5M1Z",
  "key23": "2VBiiuJbJuoUdVMvUpjWozujrk7U9v47EadZ7Lk5YL9dptPvS7chYNEp8cdreMDfqyi8khyiDmM2EFSZGvzXQCYo",
  "key24": "K9Q549wfEkhC2Q3VeyLurTTNiSC3qsi6JAYT6gqK33q1WtkGansJjn4j4QJKmNZhMSQUyMt9vjMGxPxf5r9sUwZ",
  "key25": "5bxgdNTHWySgpp9er4TXiRsZHPDFhEhXW5EEWqGKkNKCtDqgMDi23odnN4MeyPUpzUtx6ZfRtnms4DXw6apRKJiW",
  "key26": "3fdN8xsocG2qfe2sVFbjbUUMqvSisr31GuooMiF4z45qQLKTfczNmS12eCfdbw1hR2JvH58Nu5kDSbMmuEEM9Zeb",
  "key27": "5nDkNZTc1ePcKYe5pkqhikmhDMZFaj5ccj2PhYruQe4SfDkLf7R35bE9XyZaqsKTFR86BTX2ZmFt5YvGqEjEKfLy",
  "key28": "3usr4EAvzkChqaBmEQfBmQVyoj5JGHsZL2BvbUCLiqp3TPSf4hF2BFHstFi2PvSJA6A5pMYZmP6272PjC1acPmcM",
  "key29": "E9nQhC9EXn8qmKQeBZ6QMs3KxU8iLxrWqjz2LTdaKhCme8WioNvUARDBj4dBF8q3ztRomwf7F1SmuhFYyV3D17T",
  "key30": "49KVts4gcsoLtcwU34rABD8TCLKCydDCs2oCfyahXUarU9y9eRGciNwNS8j819rJYmaAnnTV1ZRkzYvbc3Uy6PC6",
  "key31": "scSFpdsfpGLmGS9zwNVTKwndSqyze3279BhdAKpZDyMP9Wf62nZTndXcmnJZegm8TLbJdFAGGAF3mxktNyGqiHN",
  "key32": "5z6gQJ3QKnKnuyfnzDJCPYeb3QinnKtmLF7qb9Sr8nGvo14RmgCockaCp2U6DQe5QceaUgoiGuVSS6cbHdTwDLBs",
  "key33": "5goVGha5mzYkhqZ9gdeg3RQZi4zvi6s2HABTUYkNMK1eDfnM7jaWEQ8AH4UfYZBBffc8b1YiwThttDnwCXXaMdjg",
  "key34": "4o9KRCpyiFqwYrbvVi9RFfep4YAkwongut6b4P6XNJKC76b3k97C6hADDtY8jNjANxceJGstffX9sRRhGVDxmvND",
  "key35": "fhh4mSTeNeTU92GarKVddU4bBFLzgJNVJvJ1GqtWtQxER9FZ6jQJcjCg9v5k4TEXFWZjdCGf68SCkXtaoycwRxA",
  "key36": "w2docscyLj76zoDrxdLDYeaa4X5HD5H12CESmCekLwkvYjdC93eVydFL3WYQx4rPY9a7bLywwCLTK5JhAkiC5HP",
  "key37": "3zJJdg7gniPp3s4kFoQ6rndhNeiwvAyGeCsM8eWBQEikSM5cGaYU7PnZ9SrPRru1idLbjEf7vabCHvuYpancJDRk",
  "key38": "4DG7pm64GUBhpYJQArCmdHLvPb9UQYtb6sPtRGasdzzZcBNdZZuKtA3ySjCF7rYeC1at9vAD4fwQaeJdKmaAjdGm",
  "key39": "4heRQ8imrqMnnvGjD3NFqXcLeKg4YrXZpht5EYRkEM6AsdNadEbp11rBs43sUz8vmgBeJLJCs7YWFHtSfMMcQrTj"
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
