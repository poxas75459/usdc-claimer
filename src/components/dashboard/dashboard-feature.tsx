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
    "3KspbhDMsu6q4m7Bskrn756YdKPL29SM311jQM6EAPFvf8BarMfNnJ5fuqHeX97sRqMjdvykHnve3er1fTQpAdwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UbnbsBT6nMXSLYer5N5j6ezWT8jZueoBUSojFeGNeEVES864tp2mF6QPqveunmkHf67oGticT7q8nwybcoc5sMX",
  "key1": "4SfUpbarZ3ewwGvPQrriS1ybnUMq5hHv1j2S6LdFLfD4a6QvGP2fegVe9jsQ2R8HK28bDyQyHBQVPbStHVHn3asm",
  "key2": "3BPAqja1Q3RrqpyCdTq8dgj5rqapiZExUFepVyrK12VzQRLgnfqcMiMfYeMJSAw4XiDVbPdsTRMuHgsJh13AGDRp",
  "key3": "5BG5uAskwKQgEV7K1ybeTsxYQn9fQiFwrafTngT3CFPXJ7Thyr33RbTwPivaGuwXedRMvYzEYTzLsTLFnMuWVgJ2",
  "key4": "EYQAVoAmGzg7nHAA1ANivUK15MuvovtWd838JahbadgFXjofa2roZNT8U2TdFMiaToLbRwt2AErhfwW45MZsYcu",
  "key5": "55ZwucyYFdmACdCsUtGgUks3JnDz598knYsd3op6gVyJGZa94dPE7o2Kr9j5JqP8DFcRR2F2iAMxwPXx8HG5znrU",
  "key6": "5oHt7n6kMQquEPqg24P1c1mC9hVmJU83qkFpxSTso3U865i4Q1CHJ5JcmmABchXLDceiYGdCUCaUCgbHq6fzzTn1",
  "key7": "5VPPNKmU9aZoqvH1cNwFDSn3RnCW2vg6GgDPwR9xYyKyUFGt67z6CkriQoKwFz2cWexraMxtqiik1fWvsBgRF1pZ",
  "key8": "5k6C5ugdQjGgZRcBwfSmrFHSsdvnQjbZbjc9VfDGQVeBi6dr3HibJJE2ooReQbwuUzHqtTX4TkWowD4eXeUqgW6k",
  "key9": "2AbNz93bkWEiPn6p3sJDepSRESJqosJjKvQs5P9zXL6xx3BcCiSpNqBULhvYdeEsLKsZsCRrrrGG2R99sJsvfx8Z",
  "key10": "2Dg2D9UNeu36KQUWRYDebYJ1WhTQQgo7FrqKM9BmwbMERYqyUU2dY8NVMCw4kjLUhebrbj1TcA9seXyV4tvSqcCM",
  "key11": "2PF8emuHUwgpdA3uY5tK4N8wSCUd3uhHvzZ4kAQc3RtWwRXTvczFyfeBU3nt89cCZhHDTPHxr7e6aZFneZFMk7np",
  "key12": "735UidzXPM5A8AFZQUExN8UEbobBaDycM6fCiM3b2qMu9ebfHziJ5ekXDJKV5Sz6aTYpTzW6qpCYcoY2nktS7MK",
  "key13": "3ZEtNToWcu45xCQHooEmvLG9WwD7VGBGU8X3VE4mArkX7PaMomdJ86iVeetkPtgBo22D6XYufo6uppqcU4qBfjqU",
  "key14": "4QafpsKcRJCVdkmDXSwdn72cRKLh81WZwGj1N3GN8NTxhMcH4XfM3iY4PouhkfyuT5r9B7NLArd1zhuyhYc3BwHm",
  "key15": "3DL1HuVDRNfQjRAL2GYg3a3LJTBjDfvqEUBYSQCHW3x3Dd7zUrAG9PaozCDtYgPXKXjZKh5kDLx5Zkv5xh6di9CY",
  "key16": "3YDhBhNGoH58rjwnnTFUtydRSmcRCSitRRKxKQ3qqZKLTbqUJZ2QhAUmTFjp49yPzDigySZsQ9ff32bFsM6KgRuW",
  "key17": "54zQLUfQbrnTrNpRfQJJxKgABmRm6d17WKWwGXMPJPJRiuyBV1ohZgTQf5Ri4BLhqcXunApVc2ajCQAf8xj4sH3m",
  "key18": "5CAPGA28CN1wJPNMHU3emFHtFQ4m6EtGgvgadioqoAnA97WhN569uVXccgKReaCvM4s8yf22v1L1S7kxyXTUAxo1",
  "key19": "MP7aGe5uRsxWsPaGfh2Ny8etUffyZbaKeg8Gx4YmeyqNq9Ct6xU3DyAQdx7NPt5UmKkWeHp6zqfmM8YQuaNBhvR",
  "key20": "3CiR5bdm1URjFdjBJq2c4ssnvbYsUJCNgp9PaeisHS71tiHD38zKdUsBzCJQ6xEnEVorS9E6u5nzRbNXGfsCoWAF",
  "key21": "4eSSHxUNM3Q1EZWuZMSxVENcgpXH7ZUGyYLsY44M4H7fFPXN2TdVa2TdVMsBBL153mmpBZqiNVipvwrPE4oBwjJt",
  "key22": "5yQ2pdVsPakuhs6mUG4LLC3qb6BBq7MCz8MWkPuQAiWDnP2wxqkwmhum21Vy27QDJBA6ehmPGV7fKZneqKUxwKEm",
  "key23": "4eWwevL8uboakT6Zia7HCWquWHRxjxJ69889dtKnPkvVXjpQPM4MRCs7nynseVmRuFejiTRV3P7UtKNjJQknstXk",
  "key24": "53ez1ft4WwhTeVXmxDGJyP1stBAxHpqBc7zBUZBdM7Zw8mLHjRp52PH1wQCrBnaLT6yfAfA2TxCGXb4mr25SJasJ",
  "key25": "3nS16Tw32kmpfm4AsPwfR5j5RUKp7LHSVYkoeHeofPzJqCGkkx1igSVN2Xw2czJWnc5F4UzerYN1HynzyyTC8fpd",
  "key26": "25jfKNinN4dyFrQkqSxMv4GgRoejSoqBPQmsXRAisYdocxXp2bYGEiHdZqdSdg9GzEjFZUVnRSZNu32yN5RBJGgM",
  "key27": "367Db1U5y1PFpJc7FGYDf62siciQqHEv7oDSza1H1B7CdQjp5bU3dGZ8kvmv9AJ3qB6taVSqFHqyrUY6ai4xsGeX",
  "key28": "225MMwENmUfvKYPSJaYdBNNXXAp89BEsDjA3fga2nc3MUa4X3UdyH8rAkrmmEn9arm5tsc3gp2ypgtpsTaSur5zd",
  "key29": "5yJKKBkQ7Ah4oAiFupke5NXgxPXTHAad2Lk8kbWDrJPdEWNLjuKQKyyBhqdQV5iNgTHFaC4xniiSUTMbzHQRrkgz"
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
