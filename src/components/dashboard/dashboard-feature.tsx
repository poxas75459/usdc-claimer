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
    "5Nrvvmw1MMac7Do2N3ZyJ8LBhndb48t6Vf7C417ohLFnBPrSAtc5KxfpMMcgf8yvUniaeUyg1NZcKbg7JHWN7BFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZFmtnhep1r98rAXUqSkLMZtgwEEeWCesRFTvHuMSzwvJdxV3sfvnPa3NTj9mVWfVouLUCq3DoJKPb4CWzbJ1YPq",
  "key1": "2YTSAMdKPWq8oo55zWdhWmdKQqC7BnsUnPijM15RQfVZFo9XpSWnFyGG3rDtMxMHGCQyL6nR9KDC3dWLZdPau631",
  "key2": "3WVtf9M1yWzxrRDn5iz8jS3AN3LezC2Fm6zKUrYuyHqFfwRfFFnZRRMytYRDTE8o3PNyAfsUwHf2AwtqXYrcCcGm",
  "key3": "33tGAgBNvaPufmkAiNRJy59fXUHBkJgkhXmztDDPjUJMpYoCg66mL9imgqLEWgvcsgEvcExZ72LghbapSzrArfTs",
  "key4": "422RdRLJGX84SoSHyegKzc175xXRevna5jdL3e4RnN6Z5mwPLMKPVb6J8Y12kZs8oxNJjSuBuNUK44ozsi1BRthV",
  "key5": "rvK2LSqHt8r6HK3j9rGfwt1PhdgyNUHi6qV1VEBaW4F5X3AwVbgUaFpQ88jUhdneniYGLCPHroJ2amZWDRGNqvF",
  "key6": "2Ubx9Bo3VqCAUnjhKugSXXe4xMamRf9GoQ1N3mq1y4i7DHUEZz8pSqtqYQ3eyLYSdhdGJpCKwjjcG8ALFmnAQdQi",
  "key7": "61kmvBkuX1CevfSHFq7zzep778BSYW1GCAFDSfffnjhiJavBDkfbRmy3k3uyh8AzhbUnzFHhXyE1jBAMUf5kCZcK",
  "key8": "4Tx1Vub3bowbdFUZnzrHzbYoT7iomBQoj8JH8s52zhXTU8NxX9ejXZy6tLn9btbZV6HdNVvNdqgGpyoZdPKna6nv",
  "key9": "59tSPdVZc5zSgrRSnpeRL4ize8gSJixFS8D9X5uJE4JpTRyESgXat1gCw3KeFQCpULw4Dk2ctwSsTfeLBhRThKyZ",
  "key10": "2ZVfaD8FCp55p9kLjDrKg8y9M8mtomdvj8ddzJoW7ynPhNTuCSmXJQfA6JdeGPDBkMtKvDdE3odgPqxGvEbKggUE",
  "key11": "3g1orwxUdtZnt7mU2vPkAvksmcc3BNMGWPwSzouTkXmCec9mTZsV2SPGiNghtYDi1VARm6R9Jg8v46efY9G4q5HC",
  "key12": "2o3qrRjbeUgR2B2WpFGCX5jd7NcXzbAmwwExYztsayNYhFQoF93JSQtWv24xbDcQKEDML3zztNrctJhGq4ohY1VJ",
  "key13": "49jBRwfTZaKhAVuXieRXPQir3JmwZroFgsCr5zM9K3AYk2sbqxUMYC1BazW73kmJUx1jp5RHtEkk9ZwL5DraRBLY",
  "key14": "29YYuD2eQJiVKLxqJbJLZkBshpV8HrQ6MaYRzXKgcTUbgGY5nQdWacGEcTahzi788DpC1PywsiKs1peAr32Aj66f",
  "key15": "3z8ZofntLr7RrhSpyL4cwAT3cRHDysYbd6f7Bys8ZnpgNSigaWs2VaEBTBk8ahdmkdY2rVsdbX9Zcmhfyyv2XbNi",
  "key16": "3wn7a13fKEpD92LxL4HqoFCMPbKn1LHmXXkbnj6HeCTQvpwHQHThDds6LxjPvLzki7h2C8UjMNDt5mMLk684y3p8",
  "key17": "3XrUDRK7ru6MEp8kFXSrhheH1XfdUwAF4KEuYgBCL64frGR6xXivUkwr5FgUu5ZR8P7xLZ3CzuZ8ZW7SoDe8RCkC",
  "key18": "22jnHzz7HRL4Th3EymeFfALY124nX82DECuBW8cB3JU2cCDJ8hrkPPmKpJHAfLQ6v4SGoK1Barv1DvxnSnap6spC",
  "key19": "3aXUr359eUxhAwvxSJ4hwZdymv2X1TpPza4hLc8uZL79oj9CWN4mESExYKrTiTbWuAbeyZDjn1J7dmsfumBydDVa",
  "key20": "2m7JWsMVDBJBmHAJs49Gkek9F24jMYyZVNU43sM5rQYofukvHCHBDJNLEvkLy5rkbqfVh2UNTBnw7SqLou759YMy",
  "key21": "41s5wPw8YKoUp2pq5pZXPsAFEWUwek3LBpYvQwxEDXSpSC4hVufYPK3D4u14tQzQgSGYb9UaTEw6atCkB68Lf9mS",
  "key22": "i7rK2oSgdjpRJ9uC85Ayf9Wyp9zQfbn2ts5sR2uWufWyttpqKNiUjrtKRwLzXPPdiR89u8Dv8jckbGk9A8RUbHw",
  "key23": "4BiwFaZ8ve4y1U7jrQrgAhnqekSXiH6hoVjiY8jtNSx27DYJzsgCzwe8eLJ77TLYPjX45GhbhPoUwMo7AEQ2fkCn",
  "key24": "5HggfGWAymZYwYHoiRVwcbmbVx6Qsbhwug8CMECjaGbtKMtUCDH6YYUmW5px44M7nDqNRTprTyHozx1AaDusum28",
  "key25": "5UUDkYLit6sDdZK8CPz1ZK7U8FXNtgHKxt7m3b2XpfW2GNu78s1KJCFe6YQW83fUmeLURWQw2pNruhjqqCfie3rb",
  "key26": "5G7eDeetTZZ7q2a2AQtL1PcJ3PcTcBiypJd5PzcADHim33sZbtfAwk8mBpXPb7uN8tNaQJKa3kpXoQ5t7da4Bhxm",
  "key27": "2qrTBwFcpM1ozVLMorWgPD8BrnwYJcF58riNfxJL2gnwdaauFVqQLmoHxRLXN5CSMLVEf2tCaErJhHhsZkyt6Ad1"
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
