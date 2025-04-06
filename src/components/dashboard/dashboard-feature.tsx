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
    "2xNirwA8pBwweNd7Q6QnvAHiaf919vuFDDveDP2qNracftwLBZm3Teh3GakRyh4pJkPxKLPBP4NCCaPkgVe7JucV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vz5xqXXE4Gm5QLqD2gtR6f8qvDyJehejA8otdADCjFUiV9eeph1QnncodEotzu6AEKiiwe9gS4RSmvSPj9vnZW2",
  "key1": "AcYwdhEf3seLmDvFuDHFun28yGaVNFq3CDupMjroVXF6S3H8H9tFGw1jjWN3xUbGss7MhewhfScsvMdecSVeewR",
  "key2": "F3Y3n1GpCNtyW88BLQGPkBjKtdZGKp1Ui3qHgjAdzNbvdErpNh7oDyNL8CUniaKPUbaoa1MHesfusErKNv8yS4a",
  "key3": "qDXTq3Ai4YWkQMcUPpC61pfY4Fg7MGXAimb3TMGxp3vDykai78S1SW7CJz2RLFRw2hsBNrGbg3VkNsVu7g4KK3s",
  "key4": "Yq7EgBxWtHqZKZZPst3csLj3kP5vjrMXVQm7kpJgwADCiznjjWPxuf1VVwuzm5CrMQy69uoWm52ifwnhLi1ox5N",
  "key5": "5tNt3EK16SB1U5T1VoymE2Wux1P4QxvbWLWwsrBaPvvDN44onaSS9PVST1uRFsxPCoR65NU3F3EFuYS9BQnAsacP",
  "key6": "4otZxESkXz76uASiYV7FKBUU1nBBWPQXmax2ojrrpeMQsRy5jEHkwxk92MXEtfReVxb25VBgMjizJ2hu14vNuNY",
  "key7": "4HD6pAVFVmPo74dMVNCjM6nGqRnkwJTfeTMCJ6pH9XrcYaVeXY1ZTD9oGCT4VgcukMjt6nCrswjwwDDKxeZKTGgA",
  "key8": "8FbnYnPWMUtcfh8iwnfe7A35ZFgDmBEy6cXma2NNKM1qZedWGNbdKnKvBwxd75gji2J7T5KjtSjapo3k2QnAbeV",
  "key9": "49DvdhPwuB4VDieGeruJAp16aGgEfwipSmguNCX8jSWU6r83wamDXtfyoWYLdrwbZPReAVmJ2qCnMbmLUNfwTpyx",
  "key10": "zB9s4uNrjoD1nPifET15sXoDHf44qzSnbnGW1Am7ynB5mubGp1sEMiBekztAKqnnvyqmmPtST9LTuBpqGcL2dKo",
  "key11": "3f4xC5JaKqXnqJSx6WDN8SwYYbvBxiLzZrQoHuo4XjWezYsHPkYnMgo9ZUSNfXG2GCss1YzJjX8H6kwVvf78x1mU",
  "key12": "5ieQ59e2GqvWkqKSMXgJsPxLnQpBDBwr2MPy9HkLaEG1CnuaXHjPL3eKWncTbUHixxfKJeRN9ASSNgNSvPTUsWkY",
  "key13": "59JDW61RhmoEQA5AibRMyntLtujPyomdf4tnVWKWmTc4KrMoRpEEwJQsaSodrerZ9xHHQ7zcCib9pyZiwiHRdXXo",
  "key14": "2vDFRAU9uBtuGXcxkbczUHJrSJvZYApxzJdnaa4ifXMw2Qkob9ozwqjJioR6BY6HmTwScjR5fbcZTLKv1Jsj8Qz1",
  "key15": "XjDf9yxygga23XBUAmfs8ZLdo4cT7Xs96mkeFmqhgcvAcqjbytwXE6424L8RqkKGYqYMVcdiNQfHA62tyUeGTqQ",
  "key16": "aKHYvMpH3W4qMa41c6qjQAg31NEWeeeZbHgr7GyXSxoiss7VrSnSK6i57BP9mnESM6Ku7RridR965tmynzg8DjU",
  "key17": "ENh3HFZLcVC854z6MCxz4QHc2C8d9CajTbzcy9FEgjeodoyfCP9AzdZrwtrZfTKGV4oCQ1eNjEVXH3PajFSaNcR",
  "key18": "2JCimGFpeNuQpUMMW7NrKTFxYCtq1iVPGgDMq6BVsReQe1X2phpgMVPTLt4b6ZrAkcXsa4PY4SFHdPYu2roFcv47",
  "key19": "ksUXUPrVMUwKc8vKCQDJ2yL9KfUNQmNwmK1URHKKRiE6px1NUWSrRFN2eiTAR22HjrKY2dFtfg2SVL7wc4rxK4d",
  "key20": "kjyzxqwkfFDJ4bpARrZVoq76WRT9FW7qmLB1RviWTtgm72qBs5TZ9RmkWToaMvx6AdubiFvdgBaB91avMA3VFn3",
  "key21": "3jVNR1bngYBBvxLBDE1PpuQcR2gxr1j1BvqQERPoS3Thqi7i3vzaSY4N1ayUBQNVytT3EkotxDKV5HNkUtLV2kww",
  "key22": "jVshcLkehiiDufUCJTr4U4QZFL5edcS1Vj3Pt8SQZHXSRnjzV3b1x5YGJoVb1Q3uK3KmYvNHW7s7V5oR2Z51wuc",
  "key23": "67aSTFs2WXMQhhyP7rwoiASkDpoP3fmHtGiMRdr6SCHw5rQXxXrN7LjPs7FKku65YFRF9fFQztyG8QFZEZBg1JYB",
  "key24": "5ccYGhJFzxHqFJ1mxKMNJdFUiffZ2BoZbSi93ab6mS1qCmt5jGoNKYBKkAoiSgGbpNRMmhHcjKJ4nzRANA4Sryda",
  "key25": "3vMFhgJLXU5JQYk3SnSxWfcismkgt22VceifWKA2CBTRStpTLRkfY4jtEKVauoLJ3q1V4KWwp6GPvE6HbggVRHrt",
  "key26": "2Z24kXas2b4v7iiKAEpm8hq2uZJoRNJ2j7jNFBjxS7xPBaeJuFPcxuxrvZCWw16ZKcN9436CcguTJUZe21jo6PdG",
  "key27": "5Bh9HpEE3Tii8AtvzRoXoeNJR6g6LfthrFxmuHr25nUhYzcnC47qjBgJLCZXevkbhrFmHMSPwbmFXmveCBLV9HwP",
  "key28": "2eSRB89QNMjkagPmKivSubfSBF7PUDnewyf8LBqXbJyfwSo3gbrHaf9XtaRvUTeuMH19g3ngSiQHs5JX5XnjFUti"
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
