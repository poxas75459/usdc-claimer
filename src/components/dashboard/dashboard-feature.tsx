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
    "51vwXE1fGr3hGTkNqq3yn6uKFbUBFWhtHk7wLwpJZL4zseyfDiwUAkDUtJRUKu7hTKyY9JGui6WBtR8NTRvwAGf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m2sDZFznhgqBn45UrWSUNpUUpv9huBg3bLc2DvBAGHdpZLfowHFKABN83fKpfdo6iofRtfN1BymsTxBeeNp1Top",
  "key1": "4Pp64wFkn4LrAU4g4ajQuBLScdh5bmvFY5qgyxiv3wQningE9CFJt2uDCkc5snGy3tagM6XgUmVyzcB2vgCoGXd1",
  "key2": "AaQTaQsBJjib2zovJNMWX1PgBAtCyCA9g2p1SrdBDQiVSDHYhzpnr9K4nPdBXytFoGTctZmMC2beJCT5vqv1Mbm",
  "key3": "cpgQ8Dx5W9n2V19Vdjg266E6o4q9NKAWMpkjauAjXfSsU55J82VEya8BKFM8ZChTC6JjnmYWidinyC7R5QkEDkz",
  "key4": "4C3TJAhGHgqGtNNxjnmUR5XJUpviUJ9oEU2SDxK16rXQNYLWuQM4TotkPhnbBEg5m5bLrt9qeFZg6FXPJ18sxG5C",
  "key5": "4oofPoFm2NsKjZAvnHWunWJEyv7CRpUFbNUg6K6Wr4TP2z5rb1mLhiXtxMn5dx1CrvYJykKwErMiFwX7127aKnEG",
  "key6": "5YVH3SshtYBUA6yS6bnqvaCz8UvTNdizeVX2XcX5uHwf6GwAqMktTecYURBG6xt8PmYUHtc9dnJPqGuJ1aDTrXcS",
  "key7": "3vHuqhGp6VqFYazjbxypxJFprtMCp2aG7QjKhdooJym7WhmVJbbVBx99adDn3FCEhgK26SGiVzHUpHu5xm1mBVNs",
  "key8": "3GstXfRKvZVbPTgqdHEkqDS2oShB84Fs4YpCizqbioLp8KcgGhG2USo6DNbdXMK9EKH4xh94HfFWpSCa2MwXBwP8",
  "key9": "Dk23Pw7wae7dKEEYP4fdd6VZnzV7fcoxURMt4FmJBRjBGcYhUFRdgTTHoJ5f6iExUNYafoHtUTBTALtGBSxboHS",
  "key10": "5p6sxvHSb7jXHGvfT7xCTrM7GAG9tnpMZXWiLTNTzG6n6Kq4pBPZewAjDUAkupTqAWV52LoGtDaN6pJYBahyV11G",
  "key11": "5qLtW6MFKMDJJ3yqCedYqk9CZ3VYBzoqyXMFdWPrDdRYZJJNnJrP7og16zPq9nxgAcg2YdtLdjifnfwvPGAWWo6z",
  "key12": "4BNPcDFiGtvH7AvgXTWVV3B3w4db1UeHgn7A4CBUcJBbAM9HZXnhQ6dTokgfUGhLYjdbx967AERV2tL8fL89L4Vy",
  "key13": "4oWf8BoYCTDLyX9vyDFLc4P6m4BFjPBiAsgByXmPy3kJYmVGZMuQGaMZfDbbXb84gaP2DbbLFtAQ4Pm8ULbpocpJ",
  "key14": "9LTCVL2SPnm2HgviGxuaxqeCQXS7QxK8G1WsTDzmKjq9JLWR63bL5x9a2RySs8Yt2xToT93Fyj2VWY9JqDGMD6K",
  "key15": "SPmggWtFwpLE7S28BCMzPLy2KDw3NoWNU9eTSCVS3dBj8k1BQwUQ78ikibXPDkn3ajjpohKC1hevoALu8CY77ra",
  "key16": "2tLCcfuxptz6rAvLo9fV1aQF5zCpZjiYj6sFk1ZNz9YQtciJnwVMd8M7wjgp7nxh8uDE8D2FVUWnJbYfik8HMthT",
  "key17": "3cY51cudvXi3RATxaDxFMHDuZP9hV6F266fcsG78Hyo1dE9rhyHxEaTgHS7fHxZunjPefT3dp6iF4TrWU429p5bh",
  "key18": "yWvfV1rmNjwxJyk3fhs2m1P7QqXUphTqqzysiPmPe6Hcswp5Nvwppb69tb5FysuzJ4YnZfGp7fvyeHVhgP7UfPt",
  "key19": "3PUKSVi7mgDyqmyfKGmttpBoBfbACzZCcrMqfdRXytDho1jBz95xRDCMiP5QbPu9nmsZ4GjRJjzX2Xz9ZAJDJVDY",
  "key20": "2Kct9YZPfeBXvTgxoYtha2cD1ccpmD4zY4N53YhdVK7gZk8Bm8pDgiqqx8x7GgF6qVyDCtJ9yTB7ZTwNjeFinfE4",
  "key21": "3cg1JxfHJgHAW87S2XDJ841jrbGQLYEasffeStQj4ccj42dmC8tvPFQ63Wh4to7U1ZLPGNWnHNt9k6oVi7fdEbrm",
  "key22": "38qM7pqR3pz6n3U3eHYsPC7L1bdfjdZP3tKEKbEnLkknAuLvKhEyBtPRhKD16wzAdhbFMqbiiV4NZHsdWwPPRMZy",
  "key23": "Fis6C2TLgtrUhqvuH4XX9qNr7iCsAuqDHCatkH8DNEYqSsvDkwBu6rWX3kXTZtXV2rL3zd2T5AJEwnr4nHB4Aye",
  "key24": "5RpMyGUFrCZg859f6p8wCXfuvNj1Z6TxZKdzj6fA6TYmySDcJd6ADbaSfuKSYDaCfew77VXEooGg4ER1U9FNDMet",
  "key25": "2oMWKRspQ9gYK3EKZ4oF7ErNkLqcPeXbXFrMCwfVSVaKei6tHTfLpruUgP3Z6aQDi4HhvwEP7uJDDUx577NWe8e4",
  "key26": "3zG1NeKhLa66atCAMM2xDdozLsfVjjgoY6DC1SxwV7QvgGt3c3a9PfdTHCo9NLr6DDAratdXCvKiaKJuqmBhUbpv",
  "key27": "4iXgXYo9Gmc2XYPwWoeAu5bSeKrYVDdVE34X3rdj9BehhvTLzERNW4MM2reFq79M9QSEcJFwMiSE9MoKR9qs7owc",
  "key28": "9FK4686iVegysYgooQEZtbpSG736SCgpQ4K3N71qTNXeHbFiTgxyXcXEakUGBaahoeCGXH43DXRuLZQsXBzfs31",
  "key29": "F3rh6MxVEe6UrxTnztfHLzZiwzfe4szzRqL69BaeZnuxvFZjxVH1f9xJaqvKHaHF3XPXyj76wunFtTn1vN99Ap8",
  "key30": "CNemqdw9LVTJE9DPD9Vex45E2Fu8eLaqhd9sqJNfjd7ES2gXR218XhwM3agcBS8ZtW7oyZmSktLFKtmJZs8u4ki",
  "key31": "665HMHVtma8NRq11R14Ve3yZqFhu8LvHnipeMLggv4VdbZ9H7k4fPcdYxT4ns3T6t1PQwz2NaWgJyfFW16ZzRpzd",
  "key32": "3gXkMHE3SMeSx6Yd8Yj5QReWqer45P7G6n7mHJjQTDLfQWSAcMT9XVq4hBkpGzq2n2N3aoqnYr3JCMKZvco4Dfmd"
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
