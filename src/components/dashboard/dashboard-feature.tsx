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
    "Ebz5HNzjNywCVodqeaWugNXHpkfnzRdPJ54weG9rap9AHRJmtax5qZWykAi2FVSrjZFkSdAYHY4cc4BMuiw1DmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2213Zae6oG2ttaCAMoaxmVzABEhv9W9Wug635CSaQHuL73urBF73WGZ6bsSNVdqFDh4RHFD4RB5RjPHNK7YnbYrD",
  "key1": "y7296RkQpj2cDEuKnBwCCa9SBCwbJKxvdZLF8u4XcfD8oubERebnqDezVB8Qqv3RxUteGwxbWRPt2KTeAutUx8W",
  "key2": "455pHH8KxNz1pR7n5vc7XVYrShf9YuUNYc4kWqEMgyAmY6W2kS2S9dZb5x2F3AqDWEgaTeq9qxj9H5U3y1R1jg6m",
  "key3": "aM9GDgSdZtsY2ZhnFye9hexRVBU5mG1oZUNu7NFKFuMzB7u7tShc6YLrVovwWSrNH3rB24ycUcbd5MXUPxKWZiQ",
  "key4": "45Bu1Jx8ksPo5YgUgin1TPdLUvo7jnSqEEruMDB7htzqrqePyxYYEEARtGfnu2jWkd5zv3L1vFqghJojckyiGVdk",
  "key5": "4oib1GRbKd7H2z4zKyowN1ZjtkLTnK9ZMSqczWQ2269Sj3mdc2HxiEjKF4CRf7hNnmksrvZenCVj9T4QEVfAY7NC",
  "key6": "35h2w4bV94GwhKJxpFCMR12GK1nLK5c5hUr7GrcT9Sd99xnHVE7CS8TVaBMU566DsAjR9dfXVtki3xYxJM1e911N",
  "key7": "isRWi9tyVtnMYEE2dZCErpPxZ2PYBMhV26M9KkMx8spXAJvQSdURPbJyukHqoxtDgEVTJdhDyvsfuDLDeQQs6EU",
  "key8": "3xAWspyaojzn2QZq9jS6ZLBWptmWGRV9zW75AxcapEPvQFnphaU2ErFSx2uSpPfUjjx4H4ArK1MmZmrbqFxmYAXk",
  "key9": "5kvXr9pigeyQvkdDRykKS8yaJRQYcrKDmuntJ7ibvoREKvExuv6HRwFRnbDSXEZmoLkHZGqgfEfwkEKguxfzaGyV",
  "key10": "3uGAmHK41Vq2TvGqQhseWgrWju1GGDfK4LEmGBSTuBYUjdn4ER73iYhk2Rc1Fka6hWtWAVHYX6i1LQyF8kNvHdt6",
  "key11": "5L2E6Sc9dGiqcLaiKWiG7ojnjd7YhcS5mbrzWChocb2ihReWji8ed2AN8mDojbjVa3pHHazqgyPXfxzgk5fMw9pa",
  "key12": "38rgpCCqpWmDLyn5FkAZcbmGEepVeT3ykSmR4S3wZPBrH4KZFJuaz7BuANhbnmSF4kZPjNYWbS36WufuTM5VJ4ti",
  "key13": "4XnE7LDiksmdgB71TreiwCSZBXVrjsLr5cNckfPhWuc5yPZfEcCDA2bAZpDuboKe1tqhuePXUoWcXWxYQSLFmiqF",
  "key14": "5ENfoVYsS5YXMNdQ6UQJXyHhLvbTfYWq6B1ZPfn25iEM1kdFJingXVu7uxTDEjZvMw8t6x4f5akohqXnMYAbeBrw",
  "key15": "28WX5HWJcaumhzRkZKk4g5gPSi2xEtEbbyYsfW1WdeXSAVjXc2GBJaZo9114atEazm7MuP1BzicMtYjiqgYFL8u5",
  "key16": "31NeKUNb2nQT1so6kVH7xUCHKYfNgFcPNpSSnZ3qXyzJR62ff8wL5b3iF6Rcpdx1i36Rdi8nsWMUsrCjbZi5AZhM",
  "key17": "4ezwooEyxkfzNZR57oFEKR8BZ9E6e2gNUBU9ZxWxYQJh8PDXAFRppVVy6ucmDxjSqAQPmUvgmNzFrr5Q2ooo9ycc",
  "key18": "4M5qBCvzVUNy7sArCzh9i9Wrvqss1eKHLnKJjJVnxNbgUd4iaFtxa8cb3q4ywuaupK4g9rvyxjYkg6tzb92mpYGe",
  "key19": "63LYeJVm5UV2PULN9TSC2e9YJ2Ykon2zsQtjggeMojKjMDxp5r7w1nAN1tjtmC977LLk3GfpjJDXsubnv5eD7Qew",
  "key20": "3GpFp1JA7ngenvvwiEZcPUa3i6DD8Hx6ZFHDKJAx15iLLwNGxmTgc5q65QVR6N1NmdLkeajbccmQLFftURY9iRa6",
  "key21": "PMhuqC9CMHBUeAZUteZiqntZ3pHDXv9B3epuzKXEhacuYhhpCYNp4sGkPmdqgDjXiaiA1Gyuze7ERyXQpnnHM7z",
  "key22": "5PvXktVw6gFyJHCfQSenAqNAY9VSaVGkCUtca3rf21dLUddFGHMLD1JgeDcLuXsS45xnd4gRc9Y5HWDmgTy39Hjs",
  "key23": "4133pcQYhdDsooo6ygY2cTNNW7GSW9eVJ1ZJtKXVKiE7shsGTrmGdZ2Kt2YVuX6bbcQQ3fwf8gwDf5vNaAoyFJD1",
  "key24": "NqF4gq8keJ3wx16Ud3wRzsEkQaYHg8cxRbd39s83yj3EYyjJwcQFVbqCKL4qAnv4WQerLZKhyuha6V1tkBoiuaJ",
  "key25": "2YSZ89mZMLimkhgvV9eVxTcqnPXrBJceXH31iCD8Pbx5BphomZ9fNBz6HYbJQXRNrF1drcj1vVtqs3TemWAEaRqs",
  "key26": "26U9E14YdjPeg3gFKEwXoJ9vikEVnpjaP18Rwb2TRVfak2vzooHfS4ELo2WJAnqwQMKQ1R1vFhbUpyr3VdyHtbW4",
  "key27": "444nDbqBYPGN2TKiKjz5zsfe3tfEqrVepb5qeS3mQEheropHam1rDXFnyGkrguAbERS2qYzyErrdFSW9x3edWYc",
  "key28": "vDCEMGL4kka6Vc5kjh17zuwzN5qETBVMXELMQ5PpZgmvvSFhYwtpmc1axJpkUg8Fsfi7Vcwy8dDwmJSURjiPYmT",
  "key29": "3GStPSFk7caitWDv3wwLhztsNfxrSuYYyErEyKt5irp7cgtK7dUAFJnwFbbBnaBzr5bWCYVJwXhEJwyEcXLs1hyC",
  "key30": "227tPZoEvXhJmZMxTrxFvgCg3E11fUgXBP1VUWaxcN69ubmWwmhJ35M28zcwbiS5dN2NsT8EuoAknNMXRKVRDxBW"
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
