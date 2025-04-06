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
    "3pav1qN6bzi3KFizUKg6JiUkzN6bev6vVeuCR45Ud1oY4uoQztZWuP5izof47gYYJFm35jkj8EWAQcJRSkiL7rFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hKnHHK2VrhcbpeaXCgwDnFWoptzjAwDyEMvDM8bckxpLE4nVZU8HFLbf7rqyvG8LBSPA6VfZmXf24i9JNyKXAKy",
  "key1": "3eMYk7zCqzbjpiueKKxWgobYhmHLGNmmgUNWw8wpC98KS3iym74sXvTab84MA94C9d28u1r2r238VDZgDJjpx2eB",
  "key2": "bafBR2JmACdHTReapbJgchLrVbZXxKLdHDGt4tFtRmXTR6xDpyTcj7Hey7MMwTGxmbroZE7Wbo6Cm3eVkPviBxz",
  "key3": "hkNpUQwnHydG17a8CgRhhVneTwCGtR4wzE1zsbp7DBtrQ1DsxN2hWi8w9EDY6qiFHyB3CPZ4UcNsDCYWhWMaNxQ",
  "key4": "UojBmmXSwtXNksDuSKQJEyKExh5mZQbQX65C6wTCH6betApJrnX23jJKXU6ojTuR731jhjyKQoEinpeCN8korKR",
  "key5": "519QbuxWgcKP1GJgHUtSKTiCNopwbpBWt6iaQkANZ3c7jvRYBqwtqiuj4mRGCxLGopqpNcT3pvQtDzDDGzMmhf8Z",
  "key6": "2bL9ZgPdF9qwHZtUs16o8FpfLYJcY9UoQxXmzezriN7nkdWiEFbLxebFprDR7YUX6yaxfSDhyEYp9fAp3xd1S2iK",
  "key7": "3MNworMA8YxmXDNiTqUSfmhCzF8xcVMFGTdUkGr15uBmG1h4AKYKApsMfuTdfgLrZYx2SpTEhgdzJUnfxm18UsBv",
  "key8": "5LANffRZG7exvdd8jtQTbLh9toiHz3uXGJvjJrkY3Ez4gTWEd2xJ9DLz81htgh569iD55j1H3Cv6hkAFa1DXsHP2",
  "key9": "5DV3NgFJGw74YNAo9m2cRP4LzpBKnMSk8LD4y1rJiAcAEf56xzRe8K2mZQDSeekGR5u3BqDAL4HTvoUSdgzZxGYq",
  "key10": "nBnrDznqrf39id6cyk3eCzywDe2pRVALfBVuKeaHyixLBj6AYRGp44phvZTbjAmhr4dmD5gMwEkoLepxPckThbW",
  "key11": "Qx7FTUofy61DANswDVeB62qH9CTGo4yYvRa39JQV5TwY7KuXZ3wGdic1nFbEsF1f6xTmvtod4ZXii7kDLU3H6wF",
  "key12": "BDjRxbdByeJpGiZqJsQWTWJcq8vTUdNUQcCHr6ssSKUVBhfDV2E8tRg9vurTFWyrQuTCvajSW9XQA8SgrFsQHzo",
  "key13": "3QjB13zzz4ddD5N81ExRQN2ELYH24HXdpSkrLAKrtW5ZMe37GGAbr2fMZ2KF8xYqh1cHVPs4q2HCEmuhSKqStkQs",
  "key14": "4TpXxH2uwchtsDQPRqy6crSBq8suWgWLpUTofLzQDonxGT4XDKkPbxFoggA2M3gaR7oiDSBb1QbntMi395ktiBaR",
  "key15": "4iqQ2s7REhNLvQgAXJDHk5yDLDo7gbKYXntrL1XqXrgTzQsJPbCVej8Ug4Q54pDk6aEaSWDpfAK755ZbJGMaotqr",
  "key16": "WPf9MCg6RyEZzcjdQYipkNkMXsaQZwqWHuEUWX6aE96pQB85BL852WEMhV5LwTgvYaoNJkvFHJxVgthE11Ze1kd",
  "key17": "tp9uR65RCfjZMCunJgMPfCkbD9psQ6S3Mfg6ye3M1KpKXn6FTwqamMxmQwZ5pXgqmWTLocaiZqpUyXfWboyfe9V",
  "key18": "5nqF7Up3cjDX6YzLNUR8B81GGnJD3MPY3iPwjp7T8KKVCQRFKgfMvjRKbPBD37wKE6LhCVPDHMGYWeqDW426DpJ5",
  "key19": "4prQmP7JCajg7EhMHDs6TqxsBQjdmbr4xymDvMg2n72EFyAWD3fwSVe72xdf8BiGjZuALYUudpQ9U2RrpJYXVNyi",
  "key20": "5vUwGUvHcE3SuApkemURNtVbebrZ5ebsCReiusq6Bc21sNYv1C2EQYoaSANQL45EMer53T6DB46G31zW5k2dfdcL",
  "key21": "2MmxaCfDFgvrC4uL6P3aA2w5HBbf2MVdDQ4tiSSMrBHy9upi8naeBKbL7xXJrQXuFkBA99A2epBwrG8f8hfMKqGA",
  "key22": "4uafudCJPjrs2ZTi5ADXKCH8r7Ky2MRfbz6oPj2oSrx1BTxNYkYfN5utgb4r4aS4G8k2JgRpzQXJMd7bchmXmagi",
  "key23": "4UTBjuBkTBdJ8284yDYVnTUi212EwrRSHr3FUKn3v7fb9nWHf8qaHjTwL9xc39YfgWHv9TnyJ8bmhdRTCyNgrhdA",
  "key24": "3R9Mv4rWCRJPeszQx3VQSvJYEfEqdQHZY13ez6cBtP7p3jXVR254y2i7pCM5B1mUM62qxa9AJosbYeNXvsC5R7Nb",
  "key25": "3cqtfomQazdDixqchVL4mKLPcwffx4Hz86ANGULqZpBVGoUPYb4WJiDVE1UUnM4tXjhRYjg4LaQQvvHvB1ZAYaUH",
  "key26": "v8T46ETvqWfrVBt8BXuF3XG4jXmXmLHyYdkMpUisMuBSy6Yg6XfaYRd2m5bBjHJhR4UUdDaSwb4DwA4FmZiwHP2",
  "key27": "5JpRAFbNMBsf1cpDwKG4JxnxaPii7e625Q7BeWXo1zQWbakLmCpziVK6EXfwrbWdUGMGX5ZgKxyW5zceCjuSm8Px",
  "key28": "3CvrmFjcko7C8Mpja4gyMdUxuvRjvCPHHNf4AJNUUdvxpWQniT5BvVzPb525qkcUcmvFSxzqJtnHBpfniY8uTb7a",
  "key29": "5ELJT4XTCNXLB4d8t1qZEL9ErQaMdLbvn6ZcVW7KSk7ADRqaRFcc29cNRn4e5npScE6ABaGYjCmrpMjfjH7NSR9N",
  "key30": "7irCgpXyVZcYh6mkS8PYX4axedv4wHS2ApADuntjj8TWKMVUbWLi28P4h9kTNFutiaVn9JXqDeCYASiAXY11mf2",
  "key31": "NGArmKBpGwQjWZxjS1LuEkhHxjXFxgko479Due1zieMq76gQzQ6EoGsBRe1e9tcaHbhL9Uj9Zmd1QR3wzAAaMcs",
  "key32": "2gw1Fvy9Diy4ZLL5cCN6KwrM6jshUQ7Pgt4PS2QVD1sTuJnTDa8r9bZtjRhJirCWZEtnHPgMmd53TWLEdr8eAe2L",
  "key33": "hoo9WmCDPc6njAf3vJLxW3oocEFqFv9nhFjd1SeiP4jgM8nQgxMirCykUMgwN62duhGbToHfEUKqFct42gzzF23",
  "key34": "GCx4k6FGJeg6cFfbFTeqt39WwtKNjrXaLrdeSA1BUdTUCpbUwmSNcY4P5e2bFKmsQM5TDWpZ2pjoom1ZTJuVJUX",
  "key35": "42gcjowAEE3o8mGpXFDjHys9RhEkE4DvNapXzcL27Neu2qQGCqcirme5FPpbm118z9z8a3SJdojjU1B1pz1KwGey",
  "key36": "2ppeF4Kfp7n3uLYJmJdNSZHsfEJuRmakRzJbZaDK6X941Cbu6gCx6zdQYYTCpNpB1qmiDxbi1VR8Qqkx16oWsXaT",
  "key37": "3e6VZ6iwEU2eBcqgRphUXFD3JCMTNuGUARgeXqEZths3TqAMi2frTxWaZ7PH6EkJmEdFiWKaaSYDeidJNdekwTKU",
  "key38": "3jQLNU2PQM1eDtfud3b2VgKF9SLjP9YQGTeUXmxvQwgJkuE1fD9B4x6DfXp9sbXddy2BoYdHynTqBfUvh4bJ2RLo",
  "key39": "3enkE7E1UJiPfbFz9RsiVve1ti3gUH6hEZQw8B4LMaAWFmrcNFHoKzHhfceN3uCy51sfL9S6yMJCNfRNk37aasPz",
  "key40": "2hSMbGxJ5jFCASThpzzYh2i6fvxMzUM4n7jz9pC2MVcxezvJi7ee6Nqee6M9kvPo5LH7dzAicQvrVfvXxnuE18BJ"
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
