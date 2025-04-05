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
    "2WYsapxB4ihMhaggL1E2jBXQar15BdKgtTxCnx6XYqFFksBKTa9tN1vtWXcmwuVVyk1rHzby2tgYftbZ1pLHfQye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NqJAH9QdGyudARGy5KN8rivBPEnsaW4ezBbWu2ZV869PuHRTBmws1iqFrhZKugJfxCyS2YZRDMbYuHdjcWLUJjk",
  "key1": "3d9bcmMkph3pYCK2Dj5pDV4LbNWAKUvU3MT3cg178VxLhYJqLTJBVZ2YB6Y2hxVAueAF5J912kZEdd965brKX8kC",
  "key2": "2J9LeaTCoyPbBS8xwgqqDFLzb4T6PRDUBbrBJtTj5Nk43WMXhw1fdT6Jd1RTLdJHV1S8DF8h1rvJES9bC4EtvEwb",
  "key3": "3NNMtaqA4WWw4xLyh67dN1TvoqyJqBgYH3heQCyVGnWVP3NcLWw47CnCLBqBo2Pi4spseGc9x7NqXrQpw7oxcuTz",
  "key4": "3wcehb5Nu59FBdY44m1SpMT2fqUKs6zPepoENThi2bBKGzSRGiM9kDNsrvjZxzMFp9L5vjHkvkjwhu5TTuSZ7WAJ",
  "key5": "3ZT2ytC6WWipaHJDUYhe5X8nz7c1XfwBbBohQMDQzBUQ6iRTeaBG6B8Qv4B2Qsa9JQPFmXymkjFm2yisbVXRti52",
  "key6": "5WZvaYJsefBjkSccvvr48qqFxFBmznoH8BQ9csnVjXxcHsNVbxcRrkEd8cmDM4AnnJykHomycwAVqSQnmnNHAohw",
  "key7": "rq7XsaBHMho5F5eyZgjEQn35NfTSDxjP4crZ4EZz87PUpxVBPNuf9kaBX1ZsPcxxfSoz7EUEJjtsshjgkRrdYb8",
  "key8": "27MEafrdUur4UDt2SJBmVdvE88KpuwBpmziDHsjbtVmMrmJkYrdTEsQ9mEQ18B1fP36jp74JA7uTnvQvWBUj7BUL",
  "key9": "KgoDEMzK8pe4XzokdaV4G6JZXD5feyQe273Uy6J5q6ibiXZ8EaNnR9vtY51E6xmthypUN12RmNfst9zhHVT4ppS",
  "key10": "5SntJZZekLfKYubaQqEJqfcx8MZLMddLDA1gFfwdHoFqYHvRhwkWDr73a8aPg4t8ob64Vm34qMCrELB5uQYemEZz",
  "key11": "5mGMY3Ve5Y9SoWLG5Y1wSJZLDM8kmV5zs8BgjhbF62FYNMaFkSzyy3bEJnurEPyUEBgVfuSUh773rVR1GzLaVtMa",
  "key12": "2GUV8QXegmagYJguKSWr2gDY7112EC2Y8cWjMyEEU7bUPeS1DJVKXJByKGTQWyvBq1CvQi5T6nx7d84C9gAh4r6R",
  "key13": "5Jg6mMNmAqNPnMMPXXREzG88hEcTRY1dbmDKebUqnZCVVd29C9WeNrsUoL5wjwxsqY7wC417r1ayGQvq8G9rGFJa",
  "key14": "3C2erdFeu9QBoridwNpTR94Jf4WGSrbj47WR3tbGw1PigNXSsT3wTZVFVLTrAGVMRLyRJdksiqGvn3y5S5WiDD8m",
  "key15": "4Xge6T3NSWZ7XT8FQsyyDn5eG6WvyUJM5a3xXJgVgd7q62434W54mxeG5TfHMYv4Lar4k3QNuQ4WS6u2XuR9RmYK",
  "key16": "3ywQhGnYTHNHLn7Xj5LLRAY7Z8Fx6zb2NciXkLwwD3YRvyAU3pMHL5QbRygexnNEAZQ5cjtXSzEt4CvbzMSwzcWK",
  "key17": "2V5zyE5SBWkqidYvKXFhvrHu4QzKVumAfGdUqn4ggrVqDGTjSVcS1Ke8ArZd9fp7XuYG4ku6bnTVBRiboPAt4vn4",
  "key18": "4nzjQR53zgU7GvZiDTq8DhcutjEpPBemu7qv8UcfpKMc5aWvpeBz2QuvLCtK9TyC5te5agjC2fh2z8mymg4wMhH9",
  "key19": "44L8HhgYYdspx2bXemEMSWxvo7AhumKt6znjntFKuyCnuMWJMtFy6KVvbxWMBJZMWm8AihnUEHry2f5vCV8npw7L",
  "key20": "4zCJGubZkyo4q3e8k2dkK9vbDWFTz3rYXZiR9yudaXnH98zvQmzGc4rFFJJ5W9z86fmiJsQjyquURKdNBnER4JKp",
  "key21": "4dhYLvwjedSBn8rYucV79mBzT6ErgVEJjYLvBuFLLvkjt5VXXaVDPQWkgKVW5VH31CJfBJvTfMDURmadxFfhiQiN",
  "key22": "49h2nNBJpphsfDzLbpD2nVLyQBoLAJWBTQ5Dwk5udvhCDWA8eCsHKLP6oHbCL2CosCzQGMihHQ2gdB4HJBV49CRB",
  "key23": "345atKd9HE82YYW3cTHhr8uvpZgtNsVBv9ETD1Fbt9uA4nL9Lzm26sKet5hQa6n3pXDMYFuGFCc9UUuNG5MbEAyp",
  "key24": "5w52YibV9smZ82tGkNepm1YRKijvUiGhAF7aM2FQCKuKh4xucsAY7VCEug1Tvfd7ECU1gMFBGt4TgWMPGFsxkLeH",
  "key25": "4eti3jnCQhuiiWbZrSEnzCeeTrxkAFLbNmrGaeg24BGSrwMZzJm9BxyFeRXf3Rdvet3Yq3D2wJUkuwb8h6pGwypq",
  "key26": "3AXUNhdBVGbTqnkKBzDF8DUFQMEGoLFFiYekYMqf16G4zyH1vmRVRFXFXBUD311Eop43JUxUpj5JAj5D4RiAVLt4",
  "key27": "4efRmxTKakekAL5b95pgGZjNoqdhTsN7WwzNBgKLJEt7Di4ed4eSiTymL38i1BvkzgjKun5pdtRnJ67t4Uj66ca7",
  "key28": "RBihsDUZS1ds33NxXnEwW2QYDKp474Av2udtYdEEgmXMr5MzHxixRFcWvokR5g6poNBkgZciz3fbboPFeXz5XLR",
  "key29": "5fhmakr4s7znED6rxD3xs8oVqsaUKdFkxYTzAkhfoyMiagUEanZfQ1TKoC71ixwmfDpBXQi2pk7zgm7mhUCGq1rS",
  "key30": "TfdCz1KfWTxfqzDSrsSJNwbBeYrq6csz6ost5CUV34NUtKY7UGWKQZqMqxDxpXqnRjKNcvLrmXYYqiokxTuApuB",
  "key31": "5rqgPDXeovqvhH5L5HHdFVm6J9sWAdxtCYtAwTo97SzFRUNXVWcwJkSdMfyk75FMpvroLABKDN8i8yxKPmNWSSPx",
  "key32": "2bJ4BXABoky2gRAkJWnbzSumwi7WkKvqRW1SbB1rbRRnc9MM4yzobxGAA2JCYqrEUCaLfs2VR7vTmuGEZSqR74hR"
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
