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
    "2h4wJP9spsghR3Mku24QBFkusrz3gzbkvvoo8cFcTE4rg2fDsKDYeKFAzQvRLm1YMJf2LCgGtJjFkqq26hejYSps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LDFFuqYiAXxeP5fEs8M6dkdGaFqjU6Xhs4FhyDgQkxcN85BBoZY4TeodzmwYtP1FEUivnRx28XBNfFqkMzXcSTw",
  "key1": "3D5HLLUuiajXTy72VwkA9bojYSdfM59ipGQZL4yFTpX7QuMPZjZNWLJLBsRtEe1k7DNitBW6TvEctVkKZQxDRLpg",
  "key2": "4p6EPRisN4CSyUYJBEzryVDU24m5w26UfRtAyv6cEVcBKCUDdNLj11tf21d7A3sRJ5N1aeC4Pskm8AHjVXHQNGYy",
  "key3": "3pKXRLWD4As3ixYXSgwrwPG7GeM5k3WxEWMRS6BcFmH2z8GgVi72tmJopgPERDe4nvVC7Zo4kVJSvrvhPJ3jeG3V",
  "key4": "58frKakBiJ7mzz2BqowK5JiVruk4Mb31h4X133dfq4oYbRJ8xU4JEcLbHs92ogsoSLrfG2y3iAjnjKM8v2oEcPQj",
  "key5": "51JkqAq58GKhwUFGCTJEej6odDU6eoTJ8a9SgT8cjhC7EUHbEYJCns7pW1SvsTxuL2jPytfUuwXJ8cu8DbkbWgLK",
  "key6": "g2Ax8wsXkBprgNTqnRk3pvSqLkB8Fpaw7tdLEVworLNSyPDtzsnWSo1KmpcfdWPb9MPtEcaTDEyde4i2FcV95MA",
  "key7": "4KLzx5fidbxA3Gdd8EFZSFukiNCpwouTdGGAPTC4aQLrfurYZY9aDQEtREGR4AyQzik3QRxHCUCsSM8i3qpQTPh5",
  "key8": "5wjdjPBR6rC2akeQyrcsNJMMWBCPqdVfqkGQ9YxYQi1kT8zqHgLVNs7BfhQbCHH4paW5asBtALXuT4v1vyXF1vjB",
  "key9": "VRR2pprkQcksLEDyQQzaTPovsCt72W9pVw323gk4iMCRVdeV65Mro6YHV137CbUQS3f3cNay2YXsU9V39cgSYzL",
  "key10": "4asbz2r616esfkx5NQxsyrHm1VTHe84LXVPkUe1T9wasrZ2QL5tsGmTvGzW5zQeKgu9MJikTvpo5UNbm5Sz7835q",
  "key11": "3GAT1aTTKenW9y2Vq5Eab1o6iZxLNfVnzABBrj97eXZ7A4ep5p8ciDPU7JFV6Y4T5yPpmunLPquT3hGvh7QC3g8j",
  "key12": "3NfuNRp2iPpRSAqVrZQ1qyGqYxsYDw3iNPgQW3KuicFvFWPaAFiJCZVBZ6V9i64pDoBGh68UxKmuQZWSCF2UiKGW",
  "key13": "66FBPKFkQfihW9Sp9dU9itZjWzi56oZJGQh4F4bqSjEhEvveMeoiqcNsXwA5yy7QRsVpzwx9BWyAHHhex1f4TMVL",
  "key14": "DaF5P2CndAe61x6D7HhgzJKk2hnS93rgnpbTuuQ2YaxEFkgaERMRcTjQB3NLnnen4MkZZ6qNHWb2fm6Le84PdLH",
  "key15": "4FEmcjzbkKkBAVQfjNZ7wmEU62zpDD4mGaXbMG6PeT5kVg94WGpez2YpTGHX1KSbz413SFtMxGtnvcDFF3CxdVJJ",
  "key16": "26MT6zzwws5DReTTfQctmqesy3hpBWZsEYk4uieBahbhwWQBhDUZvhovxLNHErcmh3aMEqqaj247uLng6FQYwLpk",
  "key17": "26rkb1HQU784LxdfuqvJ554aF5BA1jHUXmTeoc6KkV5VgEf9ysKj8XrVAMJ6joyi1Vo8sJjW8TJvou68C1iqFEw7",
  "key18": "65uWhCRsLMeD48SwLriZfUBeizpS7pauGFQpkaf6Sf4mzrtY5MUdsHbGtpvZnHr7kBtDPmGD7MCNkTAqvcA7vsTh",
  "key19": "4VdVL3k3Ndx3L2pUtCHNVeHyJaV3bNftUdHPBr865K66WX5D61Zdswj4docDZ3HJwU1XVVypvRoK76WyYSShqrMe",
  "key20": "2yWLAyGq66xsVeAKxgroPmE1tgt6tuSFJfZo7qgoELzGFEKdHZX3ZrrNLZKz6RgXvbL97if6AfQvyerTuvevAuKz",
  "key21": "5THJMbEKihwLqdn7MjEg2vW1aSH7AUxmVbKY6dB2TboUzXy8q8ify9SSuWqnUZUtfLSABurZwNh5q9q7iwU6MQ4D",
  "key22": "HYkPHd98MofpNwQxWQr49mjmvs71iRQKjSGQDEQ8oyLj8URwhiVXowC2HodoeoEtzXSmdJTrtnYM3vL683yPzXw",
  "key23": "3KN4uhCzfiFxKUnNW7K2AydMkQ2pbua1y3iYPeznPe8TefnaXq7sbefTvQScaXt926jxJESFSPhdXkZPyRJw6fDT",
  "key24": "5uh5szrQFnszj6esUw2iMmHvy28CGJHbVTmxM1sgGDYWhfMA8gLXAeBjYir36ag4ZagC1zesdoqdFE8Ms3eEcuTd",
  "key25": "3TtHraq2j64dPSDDNNifCCGqS6gcrXkvTfM3VSR3Czw3vXCsyVYHJWHieHcst1GiV1osTZFoMFf2jXA9pKokBmuV",
  "key26": "45m6Uc3WHamwp8jqFbmY7cKTFhCpKJPXQFDdQ9XQ8pxcYBtD4Wnxidcnx6D6AuyWLDouKSHHGhYoaicPuaeRFCUb",
  "key27": "5nSPLyKB9SWjDubTv97skgBqWevGQSyHkQTyZ6Yi8JEWQJYd2JzmTroWxRDpESBmEqzqy1euNLg6k9wKjfRVqmt8",
  "key28": "4HgJYHJdfHXgNq4y8DXnBVbynMGi9XaHGuvQG7w4gvSpV4NhSu1TzwYqkptsewSyMUBRcuVfmXstZWV9zRhQZWCJ",
  "key29": "5JP2ePhaNyXJ9nUt6t5chrhChQbacZxdPnThwgSnMnectwsUf1Dcjjm99mm7kDzHeBsiHK6yxVFy5exv9HXb3MZK",
  "key30": "3JSy1iktcCCVeYbNVeLm7NcW8YXfrL1CKSQKsUnfiNvJAYW9bX9z9SEr6meASBs3QHxf6jzojw6xHDvKykij5Tnz",
  "key31": "2XYWTYWK4f7wA36RsSpxxYWTUDv3phZm6x2bHmCnP12YpnPwRWX6b29pZuvxZyUdDLbNmEDkg16wSo9pMVeruL7"
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
