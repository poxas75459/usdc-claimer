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
    "vEQZvguPLPTNQanndhChj3RpxPZ65meiogWYHyDauZdnNsjkUdZFNdkZZ23Lv6Bj4qQecSPzxBoE3TQWTRBY9Bs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RdWrHU6Rz9r1vaZ4dkDuSPAak2SGcjFGheEAU4pcoBwwGMQnHkUDRzKKqv7DFu6vcnC1cNkKHcDXCJwhysQdRio",
  "key1": "3PPfrvDz8vrL17LzCr7X1sDvhyXcins37pDoFwZ97R9N8s4gKADjpuJraFzSkkXT9GpsR6xnEesJZn8f6BQZjX99",
  "key2": "uj9wFzUUXUrSyKCg99XtMCeaPuzdWVejAawuePvnghnwNSk9fsfo7PJPFLXwKcafgtzWMYxVsCA9CjJWWKJifhU",
  "key3": "2zbtFsYPFH9vVd6QaP8gnV4DFTj13zXmmhZe3kE2x8DqKTCaCaB5QuruchcnkD8gv3nUFpY6EWCvpC4y2LQwGkVD",
  "key4": "2DAtwJggXRmrLLGSDFDpvUUDpKmRk32FwhAzhE2DHq1GiR9Nnti78Pe9FsmYvCeBLn8Y7CKPjVwwChpGguCYQXiU",
  "key5": "43y446jwKLGDWJYgkNHPpqpheWGDnuwgr1xNNaHT2R1LaLCKo23CWwzimdtuQa1uBHKxMBXFAQ38mrteUrjdLsC5",
  "key6": "2cKJaeknz7EEtgxtDGNUJmEHoSw9wraoQ5RXLZz3MzEGGmxzNfrk3H2GhBSuw3dsYnQutkHB8dbC2aTnRXKZ9x6r",
  "key7": "3Ga45y3n97JZVn5pPLne7NsFrv2SUqPvmGKoWTwnkq6wFZEn59iVK8kRhcDS3Z7LL75RUHxZ8ksewqQYVyjoeTSB",
  "key8": "3FntmNHHf8ZCgTLbMpQTzfac55RaQeoejLt1YwgXfRzERi3avoEjweua3i3uLq9ZdyBfPqZLZVJ64w2wKurBGGMP",
  "key9": "2zEwsvvLw5mBoYzzd1G2A5zUDquo55Yanp9biqwr8u6m3gyHtxbJhPJpRx4syXvg5fGZujgw3tN3GXRA8ZG9PduW",
  "key10": "2JFCNe8am2E6jEYqaYo3QGCrto4SGcR8J3xUTNJBU14DG148JqbT9r1VApHg1Z2x1KDx6GLjBCtC5HSGmu8CPYHw",
  "key11": "2Z7h1eAAgPbmjTUG11QXzbeQ9649ngj8jiA4eMyMNSCppYna4PheJzzGMT1JXxNZ4b46r4uPzKD9GV2XNWrMr15H",
  "key12": "58kSdchmHNe1bhJi6BGCNqZxDd2YyvGV2zGG1tBFHXgHHpX814tq1aL1x7Suf8YD25ZjvxRtZJGohJm4CWN1Povx",
  "key13": "4Jkuy2UDkJpaixDL1vNMKnRZiyyARPMLiXiAZUG7CPYcfb7se2Siw6K9zTG9BC8ghVz4sB35KVq7nz1AiQ4rwW4t",
  "key14": "324EK3fGaKMWxHV5QzgW3S3CBPUhmgbZWvsov6qifRnyDxaCkBtPAd2KEUkLy1do122YY4kBThnESnxfsPXCUfUs",
  "key15": "5o5XmUKcBeWqjUBbkK3ES8xccfnUjkQrEeMhcG2ovwxZdxWTcTyP616qEJL97mFt5tEGEPtoNDmcL3Wvb3WrQUNQ",
  "key16": "4CrK7YV4c14FDWHaeG6pQiogZqtSQ5o5hzARwoiYzNC4zeRbBuw4UvYnGLNSf7pp1hY323BSEL9c2kHrzoRuxRwy",
  "key17": "35VFHrE7bKh4FFJSvMLuhp82j6KHrUjDH4LtnYKPiDcLDzM3AsfkXjWCHTVTkmVVaWf9uvqukdMMhYEGyd3nXuYh",
  "key18": "32KrSnvZx19mtugH5ngwxRL5aX33n8Mbn4eRBQFYjQPbUDNs6WhbofArR83myoyuPPAiWiGxQNbYv2S7cKgwWJPZ",
  "key19": "2kkttnUNuDN6NCNb5upeVmmiTXHvGk8Jgqb37WKKBjbTNhbFm6BLYBazZAPZbHLREjwSL3BeRGy3jgaD2WJ6aT3e",
  "key20": "5oUBFWp4Nyv2awmeBYXReDsGkExsn9CB34isZe5z79VWaQC4nQWSrmcj9K7TSfKjpTbKxUFT7g8gXBbdvFQSGdWC",
  "key21": "3CDtBxpzCSQAVHj2d2qLqDtg1Ak2rH8Sa9ETrfWYPCfPvNpWvm4oq7SUiCBeLoPvFfLGurxFjrZqW1bSxrB132by",
  "key22": "3gjB1mCxWUqVjXwjXv3Jb9KUQUwiiQhiAPyhRhrS5T4ExarpoML6xn2i562H2bCvaDy2yCCk1wq2hn8FTpGmijf6",
  "key23": "2uqaN2gtQo3Tw7Qc1UfLYm2fbNGYeRJBiwjavyV5iWXiuvJjWnJmB6wf2oL1c7bk2Q6jLka73CXVrGJ1z2riELNR",
  "key24": "67rixhdXWGxvuWr2dx1tZCZ4xNhAbV1pE7jZia2tRPKwHbU3j1eSNSd5osnrkyW7pbHWFEgx3Xf2HuViTBB6eUfY",
  "key25": "4MjbxP4Re5mrA5tqdLunmVHAxaSJwvHpqYRJ2MwE1Nb62w2viV6XStnwZhrXEhL4KZdbeypyUxeoPiiuW3w81J1G",
  "key26": "2CBN1k1eDSx3o2kr7rZJCPwdQbfbd29ii3W3QV1uRvBUhENjFNHFWky4RtGcn5Akp1JDRBNV8oz8hRvkWAnMXMBs",
  "key27": "3GNCcMb7rZhuMZLCMGv3sCrzouHXqxHsc6KLU5Aam3NAjCbfTKuknKvWNfdH9CpqVNBekvb4J934D9cH2gjvDuyy",
  "key28": "3uufWME7xKyBPPNoYadLD56pGwT4w5WcN1hcvDNpSoYCt4Vsqu1o55iUz4WTPY6yq3jj2CPQKypni7UjcQrbWV4Y",
  "key29": "4fSf1PpBjayGjj82xg42b8v2oK5X7UnjeothhZAMjqPaqgrCK4eNA5ozXCLj6WD6SeWwdQ4dnuBXDmPEYeJaqd84",
  "key30": "4ZbQE2YgEsz7PpaPMsHZ6UVgqUZj5zq4KhnbuyCKQ25kpGeUnX5JBDkCrrjVFvjK28zQmPqAR7aReotpAnwDFNuo"
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
