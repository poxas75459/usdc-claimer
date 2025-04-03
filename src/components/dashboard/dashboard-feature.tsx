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
    "2GPtDfHGggNi2phhyudi3oxwXtgFTfxnon2Qt68pWhhBT1mzdwNa932GpJKs4m99K6wDxVGot7FvK9SjZrXA5Lg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LogCAAoYDFVcReuN8L3EQxnV4bggttn7vMeAfrPq7DDpEs6n5XxbRuqFPNANqK9VNQ8oyqjp4bRZF1RkN28xYrx",
  "key1": "5P5vcxnnNSUhAXuZVFBWqdLeiZVb87Vjr9LkUkTZe5vFryymruG5wWa83RpnBPGZmyDJMakPArfKcTkXQNSwAy6D",
  "key2": "4bF6cm5QtRKJtAJT5S64V3N6XcnT6mmS2UAdUKCSXX1wHwnXSftTEidoKL4QEDLgGes3pp3UW7teGNZbXH8QmaVL",
  "key3": "25HegoxqK71aHR82V29TdC6YTURt7TDRF6vq1sobUCydyseqPN9TpwopGHbtEoVqSTf3UV4Bqv1qZcyGDjqP7stg",
  "key4": "f8Lekh88nuzAWJhhi7GdG38ckyeFz2VU9vp7H4eJPoxovqLfi71jr45t4LGgWCuye9dskggXGkdyag5uhePRFFr",
  "key5": "5k8BfwTmMFNcZMcM3v77aa25JLVGn7tTCf99viNKCF2AiWpw2hkb7gR1F6M2fvJjuqqVtT7y6U8kuzq77Lv8Jja7",
  "key6": "4aaKo17xZKFiiNk83oD7oczuWmQ3CVALBctrGZPh2DcarzVvo947C7LHuzJv27BrrfTKvtQbTdBxSQKa1dA5dzcF",
  "key7": "2z7aVra9so4ru8meq3Ehr3kSPADJ9fXUcA6Hy6EuzJYLp3g3hLnUmydDJhPo24XxPBGQmNmr1tMLxAdm9nqQaWUN",
  "key8": "5c4mB5Sk8g3fBMgJ1En6c3F4z51EWLqpvW5RPE96bcXFeJ6rqPs5YMbwEQx49nkNh9ShA9kfUPGMK7VtpqM674Yb",
  "key9": "3JWtNck4QLVYiUuUZLFJBZntrhMG7ZvZSSyXzFsKLhYr79uWhsqirdsN6gdnJs7dZocaPnEbNyeRHeW3YQynZyxe",
  "key10": "RAUkYErTYbmLGuX9guZ6FWr1Lxa1C8knuBRS9AFWCg7exVaBsDKLiKbtmfC9rPD59ay1r5EJFAZzSPeC2uAGRGt",
  "key11": "ZydrnZzwAzmCbLLQapy7bt7cSNvtPRwZjRrHsSf27Ec4E1GvWJrAVWteXLLt2ma6hF3QgMVKyrC9gQvKPEXpjzU",
  "key12": "5TXxhJPJeRGHW13iTWfwdB1R9BPr8kmq5myDNRYfQnoPYhSRQ7W5WButEbCvANUY19seTuFHrF6sB8wsnKaWVRNV",
  "key13": "2bJYg9ZQ8mRcYc3agHs6xm5fc6GBjgSWBcDTeHF1mXCwGJZWHUncbi34mXkfx6ckaHbSNBVhs4SYWW2UFANkh7a",
  "key14": "652p2pztDqaQCa13FDZSBVskYumz47itZYfjbUjMugVF2wBoCM7N11b6EDn4YzvS1BgtUc4runiu3ntjmLGYM2wr",
  "key15": "3weaNVB4CyFVNGNKtMKT7dfriKLDZjZLqXXRUynDJHLjW7yRzcVt9pLjKH1R6d1etBbfoLfF7bd3zjnfomQNz3G6",
  "key16": "3eU4RAEYeKnLumB52shATHxp5BqrpnQs8yU6hzLhicZTntXnUkxWVypmcYC1QjEFQLPAbKYzGEsBhLmji7YZ8JTu",
  "key17": "2gTFqkxzfNAvaAKwhAuHhFcbWvJTZUJ3BFtCJwnY4XiL96cuG7GZ6BH7c6bHzxmVBoYvkUQ7nivtjP5LqS8gkKPV",
  "key18": "2kJJBYu6mcw29JqNqzWydZfq4S8U7icVERk77pcVmu1vede92P87STEBFW3i4VgZCm2EdCv4uG58FnK6ciYC91Eg",
  "key19": "3ftQqzkcLYTSE2eDkbyVZUvoUwxq9UvGcw91cBpikpww3VhoUcLLLN7FQh7pEEB1mNo5Gf9p4RQ4Vteag3foyh7a",
  "key20": "4QkJevywXMwGUW4cF1Qr3afUJSzgo5xNKfxcKNJFeoUuUk3iVBWGBU4LdLRRESXWC5W9XZjerfM9Zw2zVvtQZQCu",
  "key21": "5vSGychRgGsRbQXveGJrooCSpWyQyMnxddwrGz4EhuH3wRMRVjMzdK3XRaG8ctVhm1i2S6iv5QtsC1x8kHiUdUiq",
  "key22": "N8w2BnFkpEWkSCHEMufRyXr2niBDWrSWJUnwUrHXwkLEAUPyNiuH9iCP2G5zY71gqom9k1rco2hYKmoLF8m6oVg",
  "key23": "3Uv3LaXsiWrRAHBwnoT8ysiHuFWpbZgNFmkUhHXTZvu6YCX54r8hRqS4cSbwJCgYRMWCLPfzeLB46V92yUHfgRpe",
  "key24": "5NUXmV3XXYyMmvmP31GNpv5qGxcWQrrdDTeMinqajugAZPBkJrpBozsbmgMY2zgWzRViqWRDonhnrQ6Giudr7qZA",
  "key25": "5hk7aV7pFrfeAVQywCbGoWZFtYMXGLf8EAULaoVNSbsCaHrZQdYaLM5SZyAJvmSHSPoozoKKkC7nP6sCayES5Jtn",
  "key26": "2okk4nxTd9nxiSKSDfDwusGsHAEg4MB5oiTYJ4pxwKKTcx2s4GCwNkTqu5rSKnf84vByf9wz8qTz8cCwh9xnm5AM",
  "key27": "4keLgW34ugtNUcqjCssTaAL9cCoRyybNaNVCBUHRterES6enzUixUacAZ947F8cqcUFbJHtLDaQsby67QWViatJL",
  "key28": "2LmLhCNi5m7i3Xuu3iwLXa7oeyBqSUPReFiF9tGXtiWRj35EtCrqAK3NrPym1uyzxaQkoUhTu7s41iQW31ApfJX6",
  "key29": "4XyX5NKNbQZSHRS7qkuueasEfUP2HDktYpMpTWV32yutLiyQ8PjM1r6VV7r8DK5gdPSiFimrQtSA3i8MgVEZfmBA",
  "key30": "qpQiFdLJufoBLiGdBxDfe8vzpXyiNno7ddH5VTKZA1BhAVWvYWVMt52DfLgwb4EjbSvj8Bkd75oqEi2sttp9CwL",
  "key31": "56QteWMxqYNZRgSN2o9psHSTc4hhd74tLTUBLD2Vrsuk1oNY5QQce15TaRCuRwgdD45hEMSDgNVakt8PpQeb1txx",
  "key32": "PovFFRJB9ycyhJixx9iHHAmVzw44T6ZCpSsBXAeBznUfVZTgVb6f7QoiDWYs5MjyKzV9y7oSxB5BZAS2xAtLUNe",
  "key33": "2JhpCKyCM1iqoH7Nqhazv7vnB64rKjuDezkFphK5qtePFHZzsmB7LUPHFBFHw4QbiwcXtUXannrFu8jWpGhjMBxv"
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
