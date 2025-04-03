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
    "37rTJrR7vbt2TebF1atVY81MHyRJZwEYA37m8Y5a8xTuqH2Gb4qH4dLicu4nBY5L5aooD9qshukLPxEpsvAwbuTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7hehU1Sg3UFJ1hH5nZDupumYceZ6YVRenVR9HkqS9TUJx8aPpSTxVzkmWURx6U7dqUDR9mHAdLF5nZHdTm2h5qi",
  "key1": "3B9a2yxXCnSPAkjPjbFqmTqLjfDbbohck9s8jdBzP68WBUg5mif67j1LZiLY7ipWG378gb6ji9aPEgmSfQpWzFDd",
  "key2": "E2GXLzRymUfBdgVYQuvg3KAXc5pr8CCbZHDLnVB7j6wafkLzk3CtKDvvct5TJjesMb56VZpNuRidqTZg3HeGDJk",
  "key3": "5JNvmpihAz35juUXogq8Mm5GUZV6EZ6f7JLMRqCNpetMgW9owLv9oQnDNnQf8MWBikYj6YPe1QyB36GJYJPQ1Fuv",
  "key4": "45enQgQ7q6ZH3ebRxff7M7seF5muvxq6sho9GWEErqL2g2Yi1FCRMsFRf4SDj5s5hLhLGNr5T3H9LSwPZu8JDLaU",
  "key5": "5m83aPMMuXRR6oZz2VAcCGxivERK9D2T5xe4uDpSPKMRjS5YxJvUxHXJTyxSFUyL9X3rcFavshtvqttpPtNaMGd9",
  "key6": "5YJ6nCaAXoVGHkFa22sMsDbn9fc9d9aP5vsZYxr8c5x4QixiK46cJqcnB3AAHccZ95ShkML8EdH8d52ppUnWwBsv",
  "key7": "EKpMtEKY6zz21LFhaghg5ZryYf7DYBWtndbViVWoFFbPjrpfdnAijZ84vos7CcyXC2nhohzUDHfi5VnRhqCP7tU",
  "key8": "5H73Uzg6XAVouFiQ9KUMg1PeAh5Y7eWG9TeQ6iQdiTsCsN8bNSEBQ3zFeFW5BfiYvAPndvQPWSh2qmP2Ev53jxwR",
  "key9": "PYMzFRb2nEYyeNFefaEcMn9mbcH4ftaeAxQfNZWCcFdNMK9ez5PsHYX1HyTqCt7HtCJ39p7gEqgvaUx5G19gMBK",
  "key10": "tQdRSseQiJWX2XubKrkHf1WXiNtKWRKj1MYTeZGDiF3D4bDkBxHKAHY6ubuzzXnsrw9Qdvzw2w7QPmvJCs3T5gQ",
  "key11": "7dkcGMa7YZGaSkyrBxXKAz5YGFezw5CLuSyLSgAMK8hw6UagGnh2TpgFCM44xipaE16fBiuDhUCfue4DbyNbseX",
  "key12": "3drqRUNTwhARv4TdryNQzVyhyBB2NPpNbgWSgJ6RRsVWeTA9sZj3yYk5AjXAJ5Cg2a2h3Bek7eMFfi7KZTG2b2Wk",
  "key13": "3hyTczTCoHgHrVS7tBq3iJccEqbfLgB6Xa2nZ8Dn7JtkA3p2tztVhS7ojPDmiB5cz4gfo3hhWAjYNzexGxn7TkZq",
  "key14": "5qWcqD8YU1eM3uHNWiCTmcnQZBsFKCGTCkmdXmGQnMtecUvSKYd63uvoNgfSJqar7mUNCqHjfbnqbjpz9yfFoMf1",
  "key15": "5NkobBTbqQZvW8kCbKvWZX52J7W163yTYr7gC25NvSt3VEqChyj7sUmZQHvEcvfbbkZ9tjbGR85UmycZFbRzR5YC",
  "key16": "2ZAxccEYSaKi2U1ZUPV8bn7LnK2LCa3VtwFNfeQJwBfBa5e1RF9G2r1JmRT356EoGDLFcPLaEnwcpb1JMLGVqffR",
  "key17": "3adXbfNLbxzZEHooFuKZyeGZ6Y8bdm37SzRd9RWZe5pRSAEokcQ1Kibaw4B98Rj6pnkA6Vhydsybtf56i19kzP4d",
  "key18": "3DGtvQoA8dDjzsQyWX2U9nG4G9XYQhqGEfgEJGAiwzrDkqhhsXtxofTSH4yFqQPXWHPHpwEat5R7aySkVXYed4YP",
  "key19": "58Ewmkh3PTZdiRnXAkJRGvmEWrmMYvcgYfY5yy2jmptxykBLy7NVG8QpxmFsQVnTfeot7nAGbGFR8DfZ9deeYJE8",
  "key20": "3C5zrGS8u6z97nrHobcgu6veqgHjKQfM8CC24K1DKGZ8mTWbYTpyG9yfcvchyV8WCx942LkbxjSHkwQXz5Fu1zPM",
  "key21": "3SVN9pd7nge1B8NdZXX8aYupvnUS66dqYZrLv8CRonF6StdyqX5rr8pfPyZKUgahdiWfv19hEzANs6xvrmcQtU4V",
  "key22": "5f9Eesy1Hj2pnqykxWGs3hxyqYZi1rFyAUc6oRhbHrY1ogsqRLXw1mksbcnPgvKqJ2fT2V3oa4jfjm7rmcHcPKp7",
  "key23": "2niCpyfL1TB7SvbtBpqyo86C4sUear5A7v5QxzLMYuRQkaPgUUXzSEHxykhMF2GjkUFQA75V8F7c9V8CJSL2ddgr",
  "key24": "613Lz3EnB4TrSjj57GDUtq7QdcoTf5EEZBR313NnFPaRrvFUMTJp8w52aJ9kejxzzQaPAKoGqLA41RAVJekWp8ss",
  "key25": "2urzRBgaVezhNomb9uvYXQxoqXCJr2A2gU5LWLcD9SJtmsaqN9ZXkap4fgDf4hipaJ4vfAaNm2vhhxQCZ8ArQMQD",
  "key26": "38xUGMnM4w3iWJSUXFUvF1oJYci9K5fZZpMBU3JfUjoy4wX68t2tBb6LLcvPCEiwsaxxroLMEKc78ZVJUnmtoxqr",
  "key27": "fafJYXf3Hew2vSVd4jxHMU76biAAkaFoz5mXhGx8RsPBkMjFrPQ4sjoviu2VnyKvfQ2BNthHhautYU49c7h37tR",
  "key28": "SxhZaY1GoXJPsUYYQyqtbGYCYUngDdGd4eK6U9xSfHMKbEv9x7GahhdK6tu8BUhzTW7HMZKJRg2TFW3AUbVQPok",
  "key29": "joLT6MBoBr49qEFB17K1jDnoLbxrZVWyWL2mRGL2hNm7PKDpVGKq2MFegiDtP871siC9AfiLo6F17pMopNoaZo2",
  "key30": "2vTXjFYXeimbzHHLPw631s1uxwR4o5C8hu3wzkMp1bBqEuP3FHccXyH5LY25LxqeoykFWRwhHdBzC4qmEXMitvKF",
  "key31": "4P4FAoD8n74z4jdRK2MJVprX25XKx8qTrf3uHj7ogLn7GwZHoub4W9auyonUtFPdeG2cze13jp2aVYCsGeM7sfQf",
  "key32": "XsWwSMJRnSZbbuFN5FR4o4Bd5daEyHnfgsHwdmvoWWfb2Ze4KVGDBBRyBLBmWUcdjatA2qpALSt5sWgiDaGFVyY",
  "key33": "4pgSuWWHmQJe1ujbtn1Eyy5QyDHTCTPQmck8ZzHnEq9SzQq2dGBqbp1Lb4NMWnZUW3udQRHUuNdzgKBUycuQBtRa",
  "key34": "2K9NdG5kg9s3x8jkDPyYnUzdQjpEA3zz6z1kAwR2kQL7ch1DUntGDCy6eHuJwZT6SAH7sn6WeeQSoV1zLLPqzKdV",
  "key35": "42Djg49G1h5NQjDtv9AC6n6jobRAWRdPXXbApeF3ZEENd5RhMr9ZnP1aBtVAJdrpTD6BSRBMwLDw6mfUQdcm8ZNc",
  "key36": "35YVftSxqDHGX6XXDxFGjpRLo8M5aZZSFZpKfCuq4AyuKUk6yRRzz4KuBLVatJ6LneNBr4WHueLNTrKDvMrEZqYc",
  "key37": "4rNTCDDEaX83Vym3hhCn4V3F9Pnuy9bxoJ6Z1bXs1DLESjBxTWpQkgf8jPtbeSwNDYTM94xBaGDojZCsMnGQB3tL"
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
