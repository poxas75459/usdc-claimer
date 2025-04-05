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
    "3nejCVWVvPQzuDUgXvKpXmovbWZbkaKLSyFZ5W8XJT4Lnn5LGyduBrNcXJN8t3UEWpzTwAvs6xkoZE3eS2v9miBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "injJ4DXP3dfu55WQnm6n3tQXPpkczaZ2WqQkTUyRHL82gSZBVRH7jCof3PSt3j6vhra3w5Hzys1AUMLt2BHSzsT",
  "key1": "3EYKHvGoFDY8gaTVBSUyXiVJeNWbfMjfuqMr61E8wd4fhFBGA58F4KTFuaqhhbbyxvNkszNvzwfXECtJziAmUL5",
  "key2": "2hhzDUmDan7L1etLeMBhpN2iJJVhGJ5EFyXEiWUcM8wv1zFovghaqCfqcaSboCqSofP8DXdG8hJ4gjQWV1P8pzQr",
  "key3": "35ahkEjZVTA7VmjS4Y3krWGMDoxYNaRuSVx39jw2eRs5j3Tpc17WxmN3HbrYUJbQY2takXmBvC6oSothRvyJiPYA",
  "key4": "3ndWxPnTC79YdayJ4x5fkjCYfMM1dFha8b8h24JvCgXots1ZjWocPWKWUC3YSeX74Jd31PKxEdaTqpFgpA4mJa8p",
  "key5": "3694hHU7AzfoJNQvJq6jbNPnzf6KjyngTqMdxyPKvmK3ZNZJrERChcgpvm1t52P67WBsq9arXJJyyCHr5m6FnAFW",
  "key6": "3TCemNrseGExxjttcn761Eytz7wpsFb9FtgT1m5NkXqJKdYBPhUo31U8rHc3Rx2E9xjEYx1PPtoLmn9voUyhYJE",
  "key7": "3a3iKXyeWV3rrtwSxroQRBPf3fVX5h8jGXSpYCKk6X9MQBxvFpHvsd3tu8t8cCie2sQ9T15hU463e7fjbJCRPAw",
  "key8": "2hyGmMh2fFjnDgT7yyGh31VEmfv7zZkuXZUoSBuEXjX52FfvoBQD1ckSvdxqpc9oHLmvsnY2KwMnAiDG5iHTBaE1",
  "key9": "5kHpJMLynjoCn41QEN4RJst4FeTimTax6qyKEM6oNB24tHod6kavcWGNdKVH1reio5Z2Zf3gZRC7T9P7iRqpn149",
  "key10": "3Lkwth4H1aenZiSnepGpYHrT8YqGUCxiVHrMFZacp37Mmj8d2bBK6JHMfUWw2aKZ4xgfp5cetT6Ks7zxqskbBWhe",
  "key11": "64LUrFKnvQ5k2iVftsKzc71fzaNJ5rpSGkVKo6961nRVhrdYwvNxxAqodWj7v5fM1aMY5ZsoouHogDbGY6YNwAhN",
  "key12": "a4cQyKnCkjVaxT46aqpDQARLuuWvkh8pcca5FRvKpghsNgQsX5iLg4HC6PKYHa5zWZnzUBsnKFf3kTXUvMrqJXq",
  "key13": "2nxVMAnXLCYq2fQaZ4Qx4iLwwZSz1F9oA8sBuoaCGYcoNyATc9LWxG4aLSfAysCyDqpBUa359oNsBmsqJsWb8FyX",
  "key14": "43cvBXuGXXx8bmVPRmJobjkW7zsqNmuwcMSga6k6j6x5ARtpiCjWPmVKbvnHbWzX7BLaBEwc3vtUHbHF9SfFGVQF",
  "key15": "t2kwSpdPGMhwydRHKpqCNj5wTJA3DXRQnbY5CTuAJvGjGtv8CS1YrmExvTRvAzn1Ec5vVVdsd4v6vw2qeHgbkwf",
  "key16": "36t7ibTrjKFnyrmh3JyjAwrpU7xk72nGgXUnXqW5cpGWZHksdYwmwxdoWQx9QRka1BFZRVt7yuGuNoKvqHFaQpck",
  "key17": "wNHEbcGUttoJZ4Mz2iozvEGwsp2MQYb7131EjzetAkXY1uicRjvm5eZrnLRwmGHPG7VLKfbgTimnLrYwivhPYho",
  "key18": "4BEYD5YdzBgRp6FSxw6P63Yx5U2tAKHLF9oE9v3uQMRP6R9DT6TW1aaydnSgr1LJKwXUXrvB7ywu2mbUKfzjZBAe",
  "key19": "4qkipFf1K58DGkDoomUAaHvaAtZqozb71LfoNBQDbnRLvDMJj8CQyoj7kuV9M142kk6RJdWewUEmZFLwsVJG4EB2",
  "key20": "434oD638Jsak1uXsjm5W83H5yzbNg94T7YvcRXj7tnoZBFa27iGuN5GDmMmXqYSJRGmpaiFE11MYXB59EiXHeRRf",
  "key21": "355tL4zR4PQtQtt2Hbhzj1z3T9MSHGF6Yet85HG262EJJhNddLBvjMYKW1wMjdDnGEssm9vJv9csF6xC8JCCS77R",
  "key22": "62RcXkNyKhM8gfHY2E4pge6DY9y29CHASVEVy47huG5vNgd9wVYGhp5pwEtJG7A2aAGRwZ341whAG5W5vry9cZBj",
  "key23": "3ZPccxLAZgeYGEqYDCypC9qqifVECPLoBP1Ycdx3JFkbgmbe4r4VT25AoZXDc6uQmWC71mFhU4UxPDJL8qvPkEwa",
  "key24": "4U4aSdJKXUFXRxefS5X7dJ9qTuL7zddruZGmY2N9DosgY3MocCAkxqGS7WVjixC2NEW7sGq8isWE7pDiCH6waw3L",
  "key25": "3He9wif3eEsUhnc6A64JVvwX5VqbTCaoNVW4QqNuvCPyyYhR1oPQvo4aKcS2QGwgWZzaKNVr7DXjUpit1Rnw9oxi",
  "key26": "vGmup4qNScGYEcsKfkTRWPNXFok1rPB5KbEyxqjJNANQpKEn61FrxBXByBptuEN27pEmhvWDtpohLZVpguotPb9",
  "key27": "4UXFy66MRXKGHkSvPjdrfZHcCSCq9R8vjrcJV8QnTc6LrEt9K7r89bwVPQ7sKg5LLaWZfhXDGRfCrwpJCeRKdktX",
  "key28": "2udVMf9wq1Rq1joWJVaz6M9miT4y7B3cT8kS3ke1LKwiiZ66U4Uz8HxySvQaTpMBhdQg4sXMN3Q8Q7MWZE6gSdzC",
  "key29": "yjQgvBg2RStnC41CU5XY6ruAbJdpywhhxAWcMt8V7skHUfEz6VZgo6ty3Y1fvFYqphkmx3UChKEGq5iEr5q54t4",
  "key30": "4S1jLTXfiVoTQjANxvEhVitPYPEYHWRFWJhjx9PA5NwifsK2DUbGJxuVB1LgXoGcPHWbN9VVdzEikTmRqNAQQvrX",
  "key31": "5yxtMRbfcxPA2BmA477TVPwQuHyEt2T7mFkD6aPTp8cA48kUXzm4Eko4vVBt8g66q4LExUGbmFGX4eDk7Md5iKxF",
  "key32": "5q4j8ZPpubHHaXhYSMF7xnqSFK6JyS2pYmkboiZfs6Q1pGW7Hz4zAePpe4oVgYgbAi9HYSVXGfdaP7h47JuTW1AB",
  "key33": "1UgDL5e3njNA5cREc3dEcuVDFqT2ouxMnUnboZuCX68fHjjeVQ7h2tNFmMjALHTDkL5K396qAX4KhkXYwNJbPA2"
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
