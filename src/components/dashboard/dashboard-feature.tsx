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
    "61BzEPnWHE5QXbsp78h8xaEDTGJgKh5pP6pcrEpPoG82mPpZhdXrkCrJcBSYDgm8twjEJjU2WzZxeEa8WMt4nEgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QyiiqcPEd8s2B4PxNS1qm4dmU295eBKeXMuuckrAqRitJ19FhDCPxtoBRHhTgyYrryETSLm9o3CroyKczDVQPt8",
  "key1": "5Mz51deKHwyTKHP4GE3imZNupvAnGeQYm6NevnEauhNe7xcCsoaZ1phYYMTj2RbB9DXNmkcVHPfFzvuW3AxPG42B",
  "key2": "24rs6CtxvCmQZnVsRFNiTXDUujcjH6fpPmCe9uAWsuhWkedLZ3Wh2qLt57x4k9RZsC6tin8SLoj1GQVhvyYbJVst",
  "key3": "3mRpvrtCs26WCWhYDfj8hZNuKYpSJqFtDdNCkZhhesRM3zmmPkbvHm39TK1hzU3EnK6pSiRSN4bTZ2MubUbXBQvW",
  "key4": "5H6jgLDTm8zt384NUp9fyGQcuKZc9bArc5PaoiXisBwwEgW9UPjbRVf67JyJHCHAotxs2dvgAxyeBbqEQEw9HUA7",
  "key5": "3i7Qx7JmfVZ4EqH55NgmrRaRA4T2Z8fwMCBNbgGd3nBoyEoCANVFk5NWQaD4tL6K8fmNuoiVkQfyT4KnDV9d2usX",
  "key6": "3zj5tiV6NBnjge2QNMH1LQ9EGxAwdhuEopt1KLiFkEA8MjMu5wKcMChvkysBkBuARDNgD9eh4hPAqZKJC3hroPDB",
  "key7": "5rMbpxR7Rf2qH59MjVQ8kW9bbEQLccDBiB9gzo4VAjtEJ88rHQ6NXBKeiy2WxAGkL94qkL4xytb49QZfbmEAjE9X",
  "key8": "STWjHGoTKyuYiXiT1LhCfdGK5Q57wU8mSabe8b14DqHX7ppm1k6PGX6vHr9ACTv2ke5JoDEgpUEhnQ99Pf41Bmi",
  "key9": "5a1JhcUJX9ksmg5WM45f9v3PXTRKPDB6KUcCFzjVp3CNur3p2wtrsEjHjddYm3LUSZT7FZ9h5my9LjPtE18FBXF1",
  "key10": "2ZQ2eeX1Bgw99vph8TANJQR2J1uiX89gJNKTkz2t3Wn2XX1nfec2DnhyzK8QQZKEx44NKFNtrdNmU4L9BZhDcmWA",
  "key11": "2AajXy5KeDsoUii83TkWtKPZ2T8ZN7x9fEKE8kQPmjzdkCfe4gmqVHAEouPDBETQPFcUVQCDSmgcy9J1yBELVu7V",
  "key12": "2XwWvPpMVzPtLWhQMGdDs3ututeW3wuHnaTLef8UUpCWDtLnUiUpWK5ACWtiwbDTvypPGvK2UMrmimMKKRtE981G",
  "key13": "2Q6yb5eXv7jDEGG7FYVFn5rNp3x4dCEymADApQVJALnyeFeyGP2Z4FwWXhndJu2uSy8PyhDh2gJ8niXEEUrRZQUU",
  "key14": "2Rgp6Yo9G9jTxKqRSfX2EbUmz2BnCr2EFguccVwtj34eLVZg1GBboFricKdkabm1ReXhkfZjiYG8ko9BNWn9hnMy",
  "key15": "3LzReHu4KDHRNtwdaZ11TzmcSdaWjrD9A79YPLsDPQh7m29jMV2SSNDQjAvW6FKz5tj7fBjw15wxadwSzqjhvFHF",
  "key16": "38fiskBxq4192J5bVc9GBgQQnrBSKW5rrP2V3ENqTR3fB5hKWPdGxqCHY4imjpT9fUkCbJwdNb6x9q1rofHrpuBA",
  "key17": "36gNoFv1ZRC3xfPM7kNJ6BoNs8FPaZxLDFdBWTDDsQM4fPZ5Gyz82Fxvv8ccJoWBPu3SnRCjKsv3FPueuQHiA8XV",
  "key18": "24rYuf52upKhuMSFPkpe16tKwUFiVrv5mUMKrQJqgni7Tbq7EhZ7RZyZGiXtwWhCYokBpvH8QUEqYhS8GQC2hmPC",
  "key19": "4xoSyEKKFmdjHhU4WAP1wj7ow6KcuiqPa3DRGFn1da8sZijb7dVeF3qPw5MSLZse77izQRtC7KdSRXuWTLnVSfuC",
  "key20": "Bo73kWksWcKdwtHZNhHX7Zuxued5hWD26e1vsEWH4UVXBBWb6DQUACEx5jyUzZLxziwmAozfuL7wnjwUT8zVYg2",
  "key21": "4xTECgEV6YvNPNYaSBYRtoTXBjqxk2PgPJE3kG8vESM8CGh6XqSHPMEzS8wCymwttW8HYZZ9dj3m1ARwKSrYSne9",
  "key22": "3KyvMzYrS9ayNTQK8tKJAY3ALRcd3N7fuyWhyTzfQGgofZSaqT63eL6bXzMsiWsrSDXYoFgn4WTwLXo9uidW2PVL",
  "key23": "4JoxMXNz7hhsSdoU9Vf58xPATSQx2o8sqpkfQttrQAnczDUpVsQJvniEutNQhhtwq1sLrEUKgUeB5ZgqfwcYWUtL",
  "key24": "4o9twvdRojyyx8h1cfu2qbzpDKxTGewj58aczyrmUTsVx9EnN8u8S8xW5RX75LZhbfQMh1DWxkMkd1KJdMQaiASX",
  "key25": "38dFiyYj2ayffz4wpsdVthaWYT2aGjnmkMTeFB2J2xafaRw2hoeZ5DaT3Vkzbrr3XccShPF7oudXhx5t4MoZo9rd",
  "key26": "3yX8WWymRmX21Z1nPLvG67HsP7csjiAhH2Gaena8AaouFvrxrucCW8wHVP4oVs95kFtsnS8mopWychK6VhYviC4h",
  "key27": "38XXta8uoKcZLTspdpNw23yPhFETd37eSNYXTBX5S6NkzGSj7xBaW2K22MrUCCfaXQj7kDMqbqPwoykWwCgD62Qo",
  "key28": "3vQczUoZKLy2JfDyWBmsPDWUsxSLp6RRXfqEjhuazSBDJnoZvE4SRxPaDGXS7vHdGm7Jp4jBDC1CankgPzkU7Mxd",
  "key29": "2Bo7qkJveg4c8WhghGdS9z8WvdaSx5D7AiyU3e9rGWjJJ9midu2rLmm4LLPADv1kbKw85gSEPQvoMr3E46cD8s64",
  "key30": "4hm4ddDC8o3kWYq7DgDV5X3jjUFf8ChVFVv99k2XwkpdzsBxiUk8Vw73nYTH75kufEh1234GQLVebf3C6nPuKXiW",
  "key31": "5mNyDwWixKFZtBsRMohEaMxG9woq3hD2qx92zWFZtJRiedBEfz9E14m6DsbTj9UkyEEaAQZHrbEwHhSVpEqw6BRs",
  "key32": "29cvBoDKoFpK4J2BG56LH7M3uUsiM6Fx9GVpVWM2HCQoq9GovgScfM2eWTwVZmYjN7y7qjqVVguqmMix6aRWjtEj",
  "key33": "5t66sWnYY7gaFcQfYJX1QR2DgzCqmLaFLPXaK3w9sYxxfKLNMrDonQt9r6Y4A5qiEKEanK374veETSXV2uD1otyq",
  "key34": "517nKc96cRmsC5nrKyFnMtuE3cDkdNwV2Abz7MenrB8cFkrPqbdZ7PR6E9H97ttbxSeW1sJqGZUDq8Fu2o7vBR5X",
  "key35": "2pQzCnaHhFB7wHA8RAPEyUWYcMYKnLVsTLaziTRcMBsiPqBYPbHXaHGRNbY97MdiZCVXG2i5AnQf1fGC5t5SEiE8",
  "key36": "5i8FeserFttG9tRNRmgKAj6458igRd7mHCuFbrBKJ867uug49Kk8DjTdSKs5QRAtnHL1bhaMVQp3Xt2rhZxRgbYA"
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
