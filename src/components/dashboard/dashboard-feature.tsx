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
    "txk28LwdzCMmJ5WcEj799tpGNExWhqREvuFQkLsx4XqdDnM4JVBVsEeaybg6MVzVFDvCew56YQgVDnV3uzsBExv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UiFNn9sJWRPhQNTzkoNAyU5CFKdVbohMgrUqWKWccM6138Q4DNxxYzCRZe4aBuq2DyoqbUXuXE9RWbLRCyrYZ2Y",
  "key1": "4mqTFx5e52XhgCbXGSb6ZL6ASN9v9AAYyH1TPkrhrbgvzawERzfXEDoThygwudB3HG4mxb78Lgg4PEYQgCHJsTyN",
  "key2": "5FMEYCS9uVXB9NoY5M7yttN1gDi44Nywq71fftvesdjP19dr2KwdGn6wVQary6vo31DMs3MziXZirWR4bUZoGkDu",
  "key3": "2aMv4eeRhtpLMrkVRVAjwZkn3SL59jaiTDBuehm3kecSNpjb84BmPD7Bykosx3q8zTzxEVLhG8u55JX9PPXUYJ3c",
  "key4": "3v57PCZ3HMhyfG6QnJtsQBQKztsrDLScayF6TaE6C1hPuvhV5D2oMzbptrCQ66X76cUbvXuJMAoSwPTcVFTBspQF",
  "key5": "QH41wnw3QxjBUxLQerqPPcZnHRwMdNr7C5stbDSirx5Kv5gqYbnasdCdpAj1DhB4RgavWbQK57jHyWjJhLHxB8q",
  "key6": "5Zrzkr9wfdstyGfRkkXEkodocBDkYMTHsa8qtpXK9F9oa5nRswJGuDvoB4Dq9EKq9wX62CxzsYk1PY5V7bzWVJ4z",
  "key7": "5supXMRpQpHYJbmdg9GYN9uZPE7ovBqJMoVjH5CwNNURNH75i9Uyeebi6begDSmbDtL8Yr6V7QLnwEkYCXreP73p",
  "key8": "4zd8FKKV5fcYFGyBnhHbCeGv7UY7pmgtmMoqQZgLQ5paUREXR4h7MFnDaYMY1nUfjDYtugSudY6dB5SqUypmHTFP",
  "key9": "1ccLwDkQ6Nb7Ena1T6pWfctM5QSb6696rzrRs7UM8AgJKZKsQiGtgSEQEbY3mUgdRvEg4vVmPysLa9uTZBTKQVo",
  "key10": "3CmzQkrTFcgS9iZjZcNosX8mMY4fGHnNJ8LXMLfU5tSGu4Tnf3VXLRJD6ikKJtpRNT2pr1kWkLqBBQ3vau5VA77h",
  "key11": "38YJZi84ce79dW3xZzKbwrzkPstjaMaW4y8mjvP7eAcVdP9ALpR9zwXM5ALHGxH2uNcrWtiEkTpSgcwDFczLv4Qz",
  "key12": "4tqnxTisvdcHd9DKYtKa7Dic7isyDvKQqrKYEJgc4b5zpREHak86BufiPDTQgZRDie7kHzN7DRXU7jqA98uahYKy",
  "key13": "2FabMgWCp2DkYdtFg1E2EvAodGHAmta8NJiCpGzr18rvzfgcV7ahUKsA4Wih3fiiVsfyfbggxF3MYXTrNidWaWMP",
  "key14": "2KBBsczv4JfEYcYYgRUw4vc5UW8FJSeHW4QCsrf3h8sWtYK2KnVVnVEUMW1vBQU143n2aRtZBBiYmhNeBABajHgp",
  "key15": "46qDjLCpkjXHk6B1MYMQpGWnCvz6B6X2AzktRvSnbqwSP3PYMvd8H3bnzvcSTVZJPCwcYNvdGng8j7FVeQ47bG3Z",
  "key16": "5mnKUo3UqcwKgCLpNryH64Ms7GZda49qhWC6DLRYYcJ4d91BKHSzsbyYG62hsUxJ8Dk3GP7LMsf6zHStufQvV7ps",
  "key17": "oHBtLjrKt5s44JX3kyueARYd5Q1ESxyUrB4EvesCqAZPrTmCBTqZwQGzWKr6UyF3uTrsXgq5oSjsUg9iPcLERqV",
  "key18": "3V52AuS96GgcqS2aTwMDitSFEyUY8bjjBaiwxNNyHuYQVdPEVYddCXGgWpCG7oYS9T1VHAkFRWVdu3FFRykUn5Nh",
  "key19": "4kCejcDP4Cmb6aiU9HbSrUr41n2pEg2wo9KRsKssMfQ76vdjkrGACbV1HdzvmtNQAtRMAyiGtLnRppA6c2HSvEwU",
  "key20": "2MyLJYG9N8NpEeh5RS1adLNgW1xrQxQNDGTBtAVkegYutCoX29eZQXS8Nt1qVL7uPU9WZGK297hbcK7jPMxxTtWS",
  "key21": "2k9zCzw8n3bkk3K4aG4jKFtKjuPGuWWYybQtSLDBuKCWSc6SmT3KKBfcuaw9hhqU1RM5hin561DkyW8gWsBcUnK4",
  "key22": "4T3BhtMuvAynFUGzqX4r7QRTztSN1muX1cJ2XKe8TnQa7YsdV2FQLYdhTYpK2o8jiJWwKjFDYEpABdXm4okqRvCS",
  "key23": "4ffYBVNjfhgchA2YRCJaYdyBE6P277mVnTPqVUqaxT4PH7Krapn8UfNKDZPmeWZ2vE8o9EFF4jBFEvpvEaHpcg7o",
  "key24": "46AdSX8Fa5xA6mUhnWX2X5dkmHuXDUc3eGx5ENYMYwxYPHX8ztZKyihkxaso1oYRpKJfsjj6TjWvVPR1cCrVgzht",
  "key25": "5q2nGD8xsiKyGLo6fYeKHUdzedT7NXfxVHZd5zs9KHuqq5qgeBUsMcyzR1K1KUXvy8UftPa6eX2ExT42NyZ2G5Uv",
  "key26": "2wqufAP5pUsiCperTPiFifhb35BeXAg4hLHcsaW8uJffgm4godi6kjcyngujw73mJ4bNdR3wnpN5NSDE8FJtSdux",
  "key27": "2FSiKC5D2Qmj1T92FCE6mnghFePwiJJGnVgQJk5ub9a21dstCihZN4Kj3hHVUz2THKXGeXHPpxhE7ruEwLUJexWU",
  "key28": "E1fV63i7XRExdCxtDQ1rbncRVypdQsaBUaapdnyuHCA54AGF5LnPLdww3Qbkm7EyDpe6JG1MseFtK6zsTFccCUx",
  "key29": "5HXuY4Mw9neZVqxvAdgYwaBsxti8kc2Dh4KFrJmTxutLSRzEMEaHqYAbxVedeDAo6ubc8SgRMLscy3STwUXpSgUW",
  "key30": "9pkD6W2TW2so8jGU7oKxwHjnzhUSfahsJoBy7ckoh6mWTwZdyFCSfAJA4tzeCaVai8xBKeYPybzGg4iLmBh2YUk",
  "key31": "2aJjAauEsNKdxcpAfD4CqPFtrs6aewhVZBPiGfGhsT172GVe2FrYL1UmLczbYzetZSLxYxzSN2E8NKhXEc65ixAX",
  "key32": "2c3rUa3VFnAidB2Dt263GSv3vzJr7gCZDRpafRnJgaVQmpWcgK7csLxXuRcScW8DWPSFDdn6vXKBtVkXaDd5aZ22",
  "key33": "2x6KgxBFHGqBLVCtxmDk1VRmwyaXXrw5VEimLMmkZVoHi2ef41qGt2JV9d6o41AKyWzgAnAv5xJyC9J9NApk5JFQ",
  "key34": "654yFRzDFdUviPdkdyFDH7iPkPVxgmXcEa4qZrHrETqc3VxuyLcaVzKeqNmYhmukRqSpfqPLcatJvk4Thaxn3qXa",
  "key35": "44oKVttzKrUc8waLsXPracUqNbdiGCaeTcemriqHSGyUHAunJ6ywMDvh5qwQXwSpctQKt7vT1f5aC5p86AVHWN5U",
  "key36": "65wrYHNsH1iQ24RpcyiTmo2s6KUrD6kr5dk2xy7dmVA4PYsndA4Q79gahe2QoQyLcXpsWUAyLQzRBuS6J8w8QWr7",
  "key37": "5Yu6V73yeZG1699eZKtW6dRxibE9D1b8wRJejRaf8xHXy9AMHCvkb8oWTo5DEY3bmUb86tBR7jrPgZvgRm6UeJVM"
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
