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
    "2E6mSVHvyZqoVR1HbGDYddpGQhvjzidQujuB72oJvfutQ4EpG8KgdhkyKLohTXr2zKTaK6CwAsmH7bnQEdKyTGJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JqYyQRXUrNhNWQKE2DFBvpxpnQy4hZXvRn8G2D6nUmuBaUvAfzwBTefp9G5ymCc7DRPkTHQNWfF5WYZXpp8fEyS",
  "key1": "21NF6yHK3CrWRHQeQoxdhnbP1yhM3TUqhSbYXWfFMnT1sLdXCw89JSsPxiaA6fMa5ohNr79ZMqQ8SWe4sLoi9nqU",
  "key2": "WvUcrcnAaMbQybJigm9aMzK3eFQTAjA7B4WsrbtkWfa72KK11eN41zvFCFd2NxmZaT7gnMBGekHicrTudP7o1LZ",
  "key3": "2PE44b16Pec2yzQDDSeS6vg674c6Qp19DvPJBdGktrs9bixpLKi8cbfzU1oRmcTHrik3mRbE5rqW8PLEMgHgjAYv",
  "key4": "5uJ8EMYECMQp1YyK7pkwEjzLZYfPV69yZAwxTb21jwb1y95u8vmwFpqBmVSGuFTyusYyF1HUskLP546XjvrVGr41",
  "key5": "2MHCp9SeDG3qnwBiqFaqQMxagGWkNtFpB2ekD5Spkjv38Z8XMtg89so7Ncj236BGJn3dKYjixHEBPdS6tiUirQ9X",
  "key6": "4Q84wf8R74JpLxbcW15yPVDPwLQfyGZUFV6q6BXb4X7pCTBqYDqgpGXx32Kg8uG4spq8z7nfKW3G2k46YyCHLVmx",
  "key7": "pxLpyzj5P6d8eACHRvctKgkLEDVG2rUfpCus7rBNnRaD5YMBkycs2t3cYzJx3hwUHZFZduPLffivzdH5wt43wGq",
  "key8": "ehzh7mNaxJGpXPBzyBHMchX9AWdk5XDVppf8f4rUJGqRsoLaMa3JnvhECoeGtutJCvpxn46yzGp7TJppBRP5m9Q",
  "key9": "4ka5EixWAVZWNrvxH6fqqWrinUUrKTd1StV2xA4828soSGJDAarfr8KXjdDfp4HtxELZoTyieXTyDj5TBUYbSKG4",
  "key10": "2ZWT9E33YwbA4cPwnrcndeQS5CEbaozjqVKSoaFMvvyqSShHfmKDDi5rmVzYbd7GrFj2B4E2NfkiGEWcqt8dEsDY",
  "key11": "3rRRbAuDujceVGxMUVSExaK8nz58ZTUdA2j4vFs3gwKA2i5ZP2EVYj131sXH1fQKVUQXZiUnwZq8tggKu5w3oxzn",
  "key12": "FFZpqr5XHL3CKU7pZrDbXZhBwYoVe77nCmG2wLNvKcjhagLzFVJHsgXvKWJ8szavBgW21p9SFtSfDKeRKvmikoT",
  "key13": "2hPhddUYpUUDMMLGycvCmCgHFKNw9oGakfQo8BDMHm6xWkH7n14SKfLDniQwnnvDqimiT3U51nzgvCQspChPLhLx",
  "key14": "4FwixwUNZRzHoyEtfaZrTc2gwEPS7eRUajQVzK2TLj7waeS6JD5fAQ4972k9RwUPet8rHJQkAioBTXk2h6pGUxz4",
  "key15": "xrPGMFc8AGo7u6f18PcgqscJzZVgiAYtitLhPC6QUbzYrwpuNMfezbwNmpZjWZsR9JaHsgw6dZEW6Lr8BwC3fm3",
  "key16": "2QbCh4hqCwBjRTd7jg2CMvXSRAeMpdE3FEnHQoadoYFKyY3oHgwqAZVaot2nxhJttCUvU5uoskkLZLBwh9M9V4yh",
  "key17": "2qkJFXx4ockiNavjknJTiu6cPyZsg9tYhNUrKSPSN4aSk4Re8SmJGLN87rbHimcTt19GtyYvYbUHqMM1TxdWgrnB",
  "key18": "41DVG33e1djYZAzS5VRYrZA7xGaTw5afhTFV2kt11GBZv6GzCDiodEYJNxirwTQkQpyRxcW9GAPcgeb9hfNDdZMP",
  "key19": "5eFYrVM9Xj4zrEivmvZqGNugL5xgYrLQwxjL9hpVFdEuJLsDfoKQ16CpK5WJ2Bhysqix1GynrMRzjiwjriiuVnWe",
  "key20": "4uCSncJTYagbPgA4JPNhVQuxwtgn3dZdRR7dbtrwTDvupg5DgQe3fd2DWJooLWdtyYV9WVGymYZ41vdYiW1SWYbT",
  "key21": "2ZT4AikdEeA5LVrRmW898MMb9tXoAJTb1MaV1AkKHxro1x7R5f9krVyGGoyiwi48dPJBLarEcnye3wZBvSmwTQTb",
  "key22": "121bRu3soKpiJG4L44jyJ4uvEK4MXqtDCbiDcpmeaLaEZYCDokDMXn4Do9kuvPrgzvMsvQLDouruAeoHRSmzeT4R",
  "key23": "2TZhDfiLobfQRQNougchexwT2r2CWVGjjs8EPhnsZnQDTMmDBjxF7UqrcW5ehFid36pd3hLz98dvrmg2TwhnjjYU",
  "key24": "wor3nSqLKVARngRLZpcknzgzLPvgUvtpcq3WoQcp2e2mxr6rnQehZ2dFRxTUFhBiVgxSgf98LZ4KkzCWfDobWQe",
  "key25": "4R1w7zE1rcqcczMrmuPm3QbqYhAhx8AezwekPwf4LiEQ1vJ1WFHC3L4W6hqTakiW7fvt9VJoG75MkCoJ8uaATE8h"
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
