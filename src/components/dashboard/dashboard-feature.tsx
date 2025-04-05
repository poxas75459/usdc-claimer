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
    "2LDytMuGqK6gsYXSBLXLHE2W31puo3fGoeAaGYBrG6ZLS4hFk9nLitNnJ1NmBEHzshAQxi6PpQcBPzuDB26yGqfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X5iPv8P5m4X6LM4TD9VbkSxNnCAF4HrhFHqXH3W9yHogs4YnhQuVuPsiVzNQTx17Fmepnh87yCrhctGmj3WW2PR",
  "key1": "5NrQwWQHxFMQ4uKRnJWtdZJmUsC6E6CXHBpYPwoB7XaDWcLXXXmHASnNykE9zDgCaaXjPPrEK2GFYewYZEm1XLwd",
  "key2": "JNhmHezyGA59CwaHpXXLA8hWy8fR9NF7R2oAJ7TrVCSwwVD8EFRYPaB1wRMRunXbDqX7iGCRXLUZSTqX3xr5QN2",
  "key3": "ynosb8H2beFWucokPTMMpmYnWphhdPYsYDuH1um8y13XGe59m3dPY5CDjYPzaYZj7vJQPkBpsxyvyNi7rEEsXek",
  "key4": "5DSRfa9umupsfT6fUoQ8spMsTfm5YBSXw2zmCKbRavTHmDcJRhfDVnaSL9NVAXBrqfMEohXsndRno6XY3Vut5AfP",
  "key5": "5fMzqgc2E9nrakjr6cANuUEuKm275XkdPBTwH45WmSSDMx7j4fakUL17pv6WFiA8qWJyKuFQF4qTUcN9CQcvFsCT",
  "key6": "4MUA4pFHVWfpEh4JCtU1MpNwEjKoC3cSaFVRbeCu7fw1pPjD3JiN4DHL5f5WamXoX2vU2joCvXjYcBpC5qpkMMYq",
  "key7": "4aod19Sv8AzTsgoioqnFf2siQQddwsy1fLmPMyQuFriYGsXzRmHXF9hBUFcyWbYkCc7D28ifoP295GJWRed2Vq15",
  "key8": "knZNaHYvYz91kVer1NmQbsnUr4bjuD3oEc1s7GcmqoU286yqrVMGY6zGg8PPuaS71PhzyGUg3DfyJrh2uKnDCVa",
  "key9": "33xqn6CHLwKJnZGjKGa7KuAjhM3Kn2hVPQoyH7SoWNDPePVSEae9eqcGpzE6fjx1x1YyhJu7TfkcB3xpjQS8pttx",
  "key10": "5V8YH1CaAR7kY13cFbruw4SNBv5Bj6aUazdMwBk8GC3Eufa1YbP4E6kpJ8WywQMTgzq7VkcbjKaCWVkd8MqHQgkT",
  "key11": "2YLmz42FD3ggyLwjBkFfmxpofvEdFszERgMoohRAyjJRDFtRn4do3ALzNhnPKjJjUbYuFRiSgAnL6WyUfN5c2gvp",
  "key12": "2t42GuGdgU2zgah4twvVCeZrzgfk9iBYmtDFv4SycrYBMQuMim8pHZShzTQmhNyaKXK3yzSR7MdTN6USCVjZo3PJ",
  "key13": "641swTT3jNRWxNXPhg83gMocaH95BPeXeKw6GKKWjpgWaDw64Q1yttW3Lv4kLC5CsDvzK7JN1XrHndZYkf9r1VDc",
  "key14": "RyGgN34fh2h6gjzrXzumVWCSJjnCcpsEz7nCKaQ2Aqo3Sn4jdmYYFpZSGHeverLFuRXAjk8qHcur3jPbN3LfGPp",
  "key15": "4PTswZWvhRSvp1VFzQkx5trVivkTxpr1yUMy3fFcEg1UoYLDVt4WdURYKRh1Gy2mMm1LbTvhqy83nUy4hJXWjYzr",
  "key16": "2XgKRtodTR78M6Po6ZPd7HvstEKBY9zA5gFmDCkVw27fW73RnHJxLdbaToDM2GWXced13rcfeGd3Y268pk1icDNK",
  "key17": "2fbFBrYQHpQ5wWA4dty8VFKp7shAZe66jb4jQyYPpwvzLzksV5j2GrGxebpYX1r3kddgr2mcEb4CEm8ziTHDfLfp",
  "key18": "2qzdJJVBu2SPhzZ5S3Cwk8js7e5poUP969vDwDgo6ZzUpBqmZsAHkx8gL4PxzMh5MG911EfNvq8GsrbWB4EUdpMd",
  "key19": "4CgUiREbhxuXxPznMKnkNYwPLkioWH4Wr2g4n3qxLVUheRYuDxvDi5gQTZB9WikQPh6X3rfyGZkkV6cR8MTQikdQ",
  "key20": "vU9FNAj5vKzx93cga7JfJNKn2AonRbR9ZcpyZyjgeLgsV1ywYZqYgvf7AVVNvwYphTUPToM72VC7P9unoUC1B6U",
  "key21": "2bGtUCer2X2zZRjaoCqFUDkXtpzatpo1zfH36WqsmSviWBND1xy3CU4UUS5hC2TDEC952ZWftkejRptTXRniZNXv",
  "key22": "5N6BQ3KWciNU6Pxmvc38BzKFvEZGtAdXtwSZWcrsSHRDpYmfnR9zhkrG8M11hnD6c9sJ9VjjMY2Lcn2duS8Bvr6G",
  "key23": "JCxga5LpM9BxYgpcsg6TtBCQuMPd9di7ETxSS8Rd2GQ8Vtogjxuy5XdsGZdJbZYHSod8CjJqKSsKH3uSekpNW5B",
  "key24": "2V9oK88vXFxy7H9cL3FhtbisRC1hms66guD17QwTsyU5nvbejY5iLvWENYgkmZzkLXgV7YcySWHMLffKtDfEpx5g"
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
