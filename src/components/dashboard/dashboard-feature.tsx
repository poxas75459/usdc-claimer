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
    "3HvJKcLsuyCH1n28ekGxyrfi8RNULwcKaxKD45hJL69SFcqhmgJgMa6HYFWsqQbcx87AxnmXn7NEiHC9PLmJeymx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41hjuK5feQwhzSCuC5jmEyRTxwC85qWuh3tffPs3ZdAgEfLVTGKGjxNtcWoFvdsyNJUWXQtVy9yAmUgRDpXxLe56",
  "key1": "4eAHozr5n9ohYyGyGjfjNebHRvd4gMdS76hDNH4cNWU4beqyJLS45g3T4c2B4Rqu3qnekN1ctgdp7uQzqR6SzLYv",
  "key2": "3MU4oVxWqq3nrvkD7SfmhA1ATJkm7e3XmYzBGjCPrhgVTGBWNPpQVC7jHVaDdhv15Syu6YAG9gv172D2xeJXVECR",
  "key3": "3pPtpXhBEf2aC97kZmVC7AebupHVvoD2K4BXDZZFWMKXpQgWpqcP8H81KhSAGSdMDvTxJ7TWjeupdtBGWGaQ6Yb2",
  "key4": "241aM2tS4i8rWsSu32pQAMVeK75161knuJofb636EYzaH97uZAQ1VMRi3yvdp6qP84AtHNwT8vjANdqmFYfE7wUN",
  "key5": "5976NbDdktyLPQqequT3rfLVRgjLAoBgcE1dHQkKYBW1iF5RbmUcE8yy6Lympx8fGmbLpRKAzDr7DcitWvm5U8Ly",
  "key6": "4ouCRnJZjHGZs5w4MTd84coKUXK4qak58m622JoRALBPzF4dx7Ub1myzqY42R3j72xERHfCdtRYw1EK9sZZkbc2e",
  "key7": "4pdq6yw47GfUJTaoWPwQvrUcJT2adg5q8s11w9qYCx3P7TD3spVC6qcaS1NW7EdsVGSTqH2djMpMYnjC5BfLEojR",
  "key8": "58jTJH5W6oL8gXkEKQMyaevq8vQGXS7WUg246V8R3C1UXFbwiq5UyJN87A7h7Jcr7qbgcb2emxrjn2ho9DYmG5ba",
  "key9": "4frAFqgZE2Ft8BysD2hfWrSuiY9cJb95SBhnEA7VwiUg59KKsKCuvHzypPUvjoWiZMwATR9STSv9N27s2DF1tNtp",
  "key10": "5U2bfs4NaPd2ywoksNMr3ovY3Rzogo8VzPiYhX3ANdHi5HxBViwpYzmPN84zY8okzJnpnPVvzeWk2LDnt6TFcwaH",
  "key11": "4rbeJ9wqHhcdkc8f6wYD2YGJgM1siTx3qAYzBkNUquyUn9SeV4AvuSb7mi8jpECvgAc2GwWTpzcLszHuUhYJhjik",
  "key12": "2VMy8ybriHFxaij3n4AGWvgPBhMxvQem2eov7kqabw9nuVSUmCVXtskroRkhE8VAY1KoWPHUpoVGREfymaEQYuTR",
  "key13": "5WhZVBhy2RRdaXpYJKMBqeE62ZBmVCYA5V7hxt9zkVTbuammxT77iw4wDoeEy6UwVNAGwGLBZ17VrvwornceV9ex",
  "key14": "fBUjNAcW1o3zdpsuz8Zk6ti3qFXRoPTKEGoHZF31ASwTX6cMVuQ6noiwFcAHKGNHcjn6JFNo5u57KAhoNdrWuVU",
  "key15": "5r69Yro3UnTYt8SfWgMF2cT8LZJvJFHM8bgNimJCqQ7fcaHLsVokehzvfkupFSih5ntNjR9D2VSPs1mXVrDhCDwP",
  "key16": "5S3EMUDd2rgrEzspJJ2qtvd26tHn7GErVPwTr2oj2tmzLWqMeFkrx29wabnvHn9B8nSkvtUyQtB57nKaJxMU9APs",
  "key17": "5WotH3boEztApgs6JtzLKhGzMiZnEhChet62JEV573cUyfvJxLWvvYL2GjXpqWsYHYZRuxmQCDPdXhY6unrxW4mN",
  "key18": "2LEgh4dpTC9kjAQmx2MutpdaY6D5SAJ5obEMWgShZWEsEdvLK7pvYCV3jQzeLWjLBFxCQvcGDeNCPicKFYNXeNQL",
  "key19": "64gigLFW5HvupXdkc5Ls9sd4bpHa2uXRoYGceUbQSBuhGMnF7beAWWFXLE1b5AwRJAuktn9yVVGiMXcG6VsDH26K",
  "key20": "4ahqtTajAdRWJQvJdZKAZErYHcYGDAKc2gzpX4Xe4KLsd3cqaRckeNEoUqKG7Q3ER8mNn9rzfFFf3R1k5z4dthiT",
  "key21": "27maFiJDY5zKmJmz3aQRsyixBJEL9Htye6LLk6zS1bAA4w8znoa4AwPzXJSp2k6dCtsUzfrc5snGRQtfUwSbPbGf",
  "key22": "59W5Rog133sMRDb1USuTEJ6N4D6V8WEpAgaJcha5vaECkfq6Ks9XeXCDBaAKR5uyNocWWKZxaTfKXKtQJXzHgber",
  "key23": "5es7MTXbbFNsvYVVJvTZm2mRbQURTzFvFahejKy5b3mnuwT9tUW6G6iYXkapTHBGLo8Grb8aTbWuFRkzUY3MjLh8",
  "key24": "2bpAAu4ttpbqQzCepKugsf4KvM2SqsGr5GCXreBm4iqbUyLRjQL7ffivTjGfTBttK6wB9RGKQ9Lor2SSQRH3FgN4",
  "key25": "7pLFF9zhr2YY9DfWkUZeLDpsrwBNFNXuEQ8GX7Rv5PbGzFAHWkLSDxwSMSgSf5YGB6JkAUUe6JVd962ADmrxQGT",
  "key26": "2KUavDJH3armXEZTxazJpW7tPaGEujJdGDXQg9CJxmNXpEfEund8kH6szPgxxsGhAfU54is1mhvsVdmxqTCKLQcB",
  "key27": "3G6BamawZjGzEaVuR8maTh8tJyHxxpc4vnVfQtVgVUogSNG9rGTUfnMnTYezr7J5ebn5o5BXVh1BfZJmY4Db9xFd",
  "key28": "4gWEqNDZxqyep6akganjxYp1sKqxXjg6oTzr1toFb9eP9ruTCPHnnNs5xjhNMCJBL62529rNFcczNQhQVREVEWhu",
  "key29": "4UnKa2vPY6658smsHoYHUBTvWg6kFRynJBeCMchUedfnoDWSYbx4PGQDsE44Dfwpddmf19xFUmYHiuRFvDedJKV3",
  "key30": "Cdm2ZujbeCr5KMM6siCw4awcJXrjXxc8ddNdUXWg97TWkfyQbS3HV4sr3ScsHSQUNksGu8S1A6UDaCSxMAkSngm",
  "key31": "5VJb4ZmUg7pTnQZ7uEuPYUndUBZiMBwgw958gaacSDaLUGPZ3bu6y2NLyxVJA19ooi8zRT9yHsogUawopkAa1qmi",
  "key32": "5jSHncbMxjot2f1qSLkMadqcxstrRunWFgJVi73Cwrv534GfabZYEdTQVZW9XS1JLGqTecepPw7nEznLdnEewGMQ",
  "key33": "3U9S8aCbd3UASWF8LmQnFqYmNxMRzVxzU8i2RLyZ7Y54hDA4kzrjX83mMAAjgrDq7JHVABsxPC66QuEHTD9B5Y4E",
  "key34": "3w1Htgaz6Z4iG91AsfxGNJVPQ91Sbt5jsYVKSk4zcsNchyujJpQMP8DWgkxFLX43UV7BHrpvEMDs9d1JfhLfhGuR",
  "key35": "4Pd439Nef4hzYLU2RgwxkDkChKB5VvRZKTTX6LugmkYK68fxpqddNDZzjAUjMjbDKfT6hBYSfbeFtbAPWg7ajSbu",
  "key36": "KR9srDUcwzr3Fht2R1fmvqaaeoSboL1GyKdrzSbhi2fHWFPMqa2L1pgM4rQFBVa4eXcGbnyf1JnEX8H7bY78Vip",
  "key37": "4wy7qCtwuWr5KRgzpxzUE1qq8vHBXDF4SqjPVDJn8vPgZ2uF3by6NZqRAvwTxBHLQwU6q8qdSAKz1WM2AjWT8z8x",
  "key38": "5BZTZxkWQxLArYoFhGRbYAvSMcZoML4DCdXjVqFnPrjqEpwx9m6qW1v9SiDgYfCq1qshVasEwaQsYkfHF531Zxz7",
  "key39": "Y5soMCqxHuydEBpUQ1Nrj5MPrN3mMBg1ffk7z3fZ5bR386j8w2bbh4TK7Apr2DVvP6QFt59EqiTSokFy4ZF4MUW",
  "key40": "csUAz4hfLBnpTgQN1BpJjApYJvetnNLTQHy5vM6HvxhQ1Tk17WYaXYP9AkdJ9gVX9XusruxcgiseD5wmdYJVzex",
  "key41": "5C7p5AaQySrLPam8XPNJrBWw5Qd6URZwvvSPw4qNDvjMWZZ3v4hD43yLbSLijD8KVJ2v5RPqsvvCnJkDaD9bYq53",
  "key42": "2oNkqSC7tJgPXRpunEvGf8WJtzvsoZDAwoE6W97tpaqtA1pbWdyewVBL1wXAcwEXDowJg5bnpagRZ13WFnhG6Mbh",
  "key43": "59wotzU42uPS2Wu6K6DZaY3sCh73Q8mns1megkcB1pe2brHixPucswiv8z6NRSkUcW5E7857DJ6CVtqBFBDV65S2",
  "key44": "5gPhn4sSHSAge3UocJdWYCPWhUqan4jVC8DEixXNXLTrQ3FcW4y6bQyjGo3gpgy8C4vVWYxvt8FP9GjqBm8SWwZ5",
  "key45": "4xfiC9YdJ5KqXHiTBQnVdgWY2RZ4SH3C3wmnc4L39MjXU6s3s8uhcreXAeiRC54CRdo3vqtANRSqLS5qDybE3VL3",
  "key46": "3WAyfKPoBcdsFAzf4aQCuk6ZGa3oamWTRxZkYuJf8rJd5xC3CUyfwXCBB6AXkm6ExPSoc1frYxGYTxFEz4VyCRe9",
  "key47": "4nac3AHFvb8BZhNPnYryw8rMuyChQGBLNSfe39SgYUCpX965LV68WTj3kQe5brhD3z3pqCitgVWrdwtdWQjitoEi",
  "key48": "4cbNxmSmXsvmLn8Nfc9DmJgJn8oWkTLRnp8Ubxc4CxdvQyjLEFC1NtsqZbKSgMAeHc6zEYyn3fVVVKMNhhEvZHPS"
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
