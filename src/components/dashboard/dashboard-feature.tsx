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
    "2P7KDvcufcXLu7WQ7narf3QdmtP3qRG1mRiEFVyuHBRXQbLb1kg8Hh5QkKZP9umj8x6q3doNus9NjWZh9e1FLuXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XQrj3jCmiEMicmQsQ4vhehCgTbXoJtBhTByoYUjHbx7BayYSGUvJCBP1vvfewD2xeRig6PzpRRAsuEjv4j3JbAe",
  "key1": "4XbCg2Dnsgy6hY2ms7R8y1cCAGMBJ1dLjfAB1ndqEq9uR7VtLXraZNPamkrZxeyA9BtPqf5v9y7rgPzBLqn4YEuL",
  "key2": "5bdvnRbwo8A5rYXAuQK5emisXwma6wYeuJhCcuCpDcZtipHrxCruw9qyxpN5TrTeXAKsvXH8KNfwF3AaqRiKuSdy",
  "key3": "5LvDAzu4mWghzyMWBgjJ97Ca4W622HdESNicBKyWipMjRhyWLfCTzbC3zpWFV5dm6n37GK5MScsPmXtjKvRGcVsL",
  "key4": "45zNPEGK2DLFovKCwraKVKJqy4CZKaqrGEAnqiknoZaPw8swDu2yvpjpTJsoQtgr6q7kk7NXgkedn1DPbybPSDPD",
  "key5": "2J661HY5xtVZeMbogMFTvpfWfeSYsbHx9UzG9y1cooowPGpN8osoxwJQ8u3fSLwagBzKNJfJwa3WFX3Murkn1v28",
  "key6": "z3xTta1khF32ic3fUoeySRRiYHbg4uh2NMLzvYf5DPNS6BcYEfZ3u8f9qGVoCBru7J9vyvxc73BAyV7AvjLsvpS",
  "key7": "5BWmJX4qVqo25pcwmocJJxKfuR2YXTwJ5q7VhXdCxuLqNSi9vCWQ4sWfan9qsyYDBntbXbqQrGDog4aGz2p2Sopx",
  "key8": "u5J4CS99MF1mm4v2etZ4mXBginu978S8TM3nfPzed4XmjNJiDUYKifM1Jr1NGtvainchnqe6VVMkgZSy2NgnepJ",
  "key9": "kiPgLXJaf49zsR4kTn6Fia22wMqnue7Ha9ntSDKceabeARf4CpSfHAXhbMpW2PGv45otL1a8BCHQomdPbsxBUdx",
  "key10": "54nQpfRLqjLjZENS5VuoucRaft3xiQHgYdnn9hUngBTeKZfE56cA8Fu1D9MZiTJFnDrLCmcm5ZKGBHFuuCjtL468",
  "key11": "5yw6n14mBGH9gYWry95rZcn7sgNuHSM4eu6qm89mmzFijfDKELkVXuxei3usBRQHX9FhcM186HSwxc9EYMYCqJa6",
  "key12": "2u64ZNxk8YsEzn7b8swTGtCNjMYFM38UCka437AHNiD2zTqUnA6t76zJtBGpmtNP951WXS6qyaVjnvGx2eC7S61C",
  "key13": "3MJqkkALV7FqS7MzmYqM74BXzYerAvT2g9pNhopx4qCT2dLJPEyhGFTx4588yj55Z9oSHXfSiVGkHS25Rmm5WEQ9",
  "key14": "yNwoF4yiz6WdTAiXjqGQe7HvvWq5oayzgd1kgTfaqTLYfxXKFoYAyfqAbrtXfysNeCigVH4A2M4Yq891SvdrggS",
  "key15": "2uto5kzQerv4Qsp8QS1TspWfrhwWaueDGRV3qWGyRHr4W8mYqfLmgAfzHhdyUq6BFMEeUciZbuyJZXkGwLHtcTT6",
  "key16": "2i5ukD95f4KmYLECFUXf85d9pVAhwKswyfvJzydZg12ZvumyquYkZbWLBu9Aw9hErzuCHA9fP4TeognTPqzpk8ec",
  "key17": "nJymwnvvGvU2NRdkhVKpHbdWbRVNVuzBPHsDU38ySMxbEcPTtDdreT6rXCstcepbHTjCTPwwD4vPwZkeXraki9E",
  "key18": "2qFPXpLDN61KG8dWKwnkAA3wUyQprERx2vBiaC6uiRGM73U3D2md7Rw2vECkVqsNjQJCAGhqU5eERYJ93ikpHVML",
  "key19": "5MUK1BY8J2psGNSk8ubgcsk5hgnWdFUE7e9arkgrW1vey1nJ8VhPaenDoZm7JjTfEvvooNfd5yrCBmWbKriRmyMs",
  "key20": "5espb4yR1UocMWXB7QAsFTvrmCzrxBssKRaADV2hkvKWvUbsDDk9cgzACYf6w2wkRh39XuNB1qoXuJn94ARBkJK2",
  "key21": "4MAMcmfM7REZfFpcrzFf2ZgpEQBeZuXBLmEApCEYp5yGkNDDKjGhFCrgdnc9xrQqkxbya3U3HP9bKfBXy26yqYji",
  "key22": "5xMTDMwLH3XLZcNe7dK5W6f14hojsKxAgAXHwpM214LFvYcYX2Ua5gSFRuwA82mhS5oCE37RzBUvfE6mreZ97b4T",
  "key23": "4fKh52CDXwzVSjUVRX9m2ShgPiEcAzJDHdNXydKZrbspLJfpYu8WPVAocsCdwiX6MGvoxwpbLqXdj4W7qYNPLXPb",
  "key24": "5VhcYVgNznykHz4YvsDqiAjodv1F5fbGVSwUMXk75kKfpmKWTgpZdPduA1hVyoyWmDPpCV9aDpABdhEJbdeFLe7p",
  "key25": "2vJKMSg7Cuv2fdcXfewLMo2RFdeChWJdxJNpcjG9grXvchm6bWR5YabucvAitGk4fDJEE3WmwTW9iKyoUXRitDkG",
  "key26": "46bHkgu1XLgsBUDErdiadr5d89yrErs9NfJrdEmLBviioZHCg8cZDHhgjHe6FBiavqVrGBrd7fCnJkUjAif3EVU1",
  "key27": "4tfmbvrbByTTuPDYeWU5F66WXBigmwcaZswvyUgtN4D8cK8KTHyYBfGa7PB3PnDGZTrjsGArc5vC4TgGt1YH3tCz",
  "key28": "2qmGRXptWn9i3Em7y2GuYPg8MudtjtKquqaECEqzs5hnTy857kCPQHEyEMFE3i3L7Hh9XXrxJbniRQ3N2X73esKk",
  "key29": "4wBCn1Cdcu7Q75dG3J2u5viKuXGcU7FiPRc4X9eT5rAvFeWPagDn4QE6fSskaWVMBE4bo6encRCeuBS3Z4Wz7raY",
  "key30": "23Pd8EtbXUXR6erY2avBFFJejSqvRdKphBi9DCbZ8HtogTxTDJXaWinWgnTuAzt9vWtGs5N8tjVPNBpPPmTBLT7P",
  "key31": "pf1Andwj28Vab595iFbmcL4SKNQbdGLjmcTjh5hWJo44z9oWRXAirX5KsjwUHz8kDo64TiCpGmonFDx3743WPut",
  "key32": "3jDz9mUZT8qsBtTh2owKdS9D4BHfDh3WhmJkxKL2RMMnJtzHr4jnUkKyftajX7ziuHoVRbL1nLR9R9G6xdCcFJvG",
  "key33": "46MyhLakU4tBfHPir59ARQG1VK1dEmfWsFjHe6PkTRv7iR44hXwksHqZMpkYsurTdNeQHtB4engoPGKj8pNJuoEb",
  "key34": "2K6BUZEpUdJnfvZQ3gYSpmbw3sDH6P5aCkGB9JpAd8t8km7k3JjRFL7MaitsVwf77Lm3wvRozppPLmC99A3VrVQY",
  "key35": "2GvdyXepgR2r2GN8wLUPXd993nPxH8DMFr1o3G2gV2GzQRFMdnA3EwfZ7VPdtHTrYrx4syexceb5b5kbHeqGW64i",
  "key36": "4AkRHYAmfnee1JVAyGQCCnXqwM2bmYdveox6Byd5aToewDsZXHaZJaRUTM9qzTh6BFAfLHoG5ShcM4xeshpJ3bTf",
  "key37": "2PHDhLH2q5vH9fHiyoJsVaY7nTnsuZyr6JbLWqPz3C3k4wkpdqhphs3YsPHec38GMQm6J8qkBm2fWLgBWY27M5Di",
  "key38": "3RVPKQwRj3EphgGoahcB5kNqakjE1rp3UkvjSQf8Y6kksvWxcYGY7u8eAkxTnPbHoxW913BLVNyeUpjaxxMeUyks",
  "key39": "Cv41ChkNfLdcJSFKw7jUQoEkzsb6y38ZCBdDPvU4HL3FeGmpyyaLM4jySAHi9PMChpwVsZemBeQTUF21JPVYyxy",
  "key40": "64qw68JPEwkHgUoJKxujfLLwkg28xVnPVzo6RHH77qHAZiAMeqEU4RUx4DCfgMAsioAcnbijLwBPkUtk2zHkoWoi",
  "key41": "w3nTnr3SEjw9FgTnGy7eRS4LwrKRTMEykscAwpNdQKTJQUEykthgkdWjowEc3YRpyXXfzScA88KNkq9QavjmPyZ",
  "key42": "4bKxzyDt2XW2MrkP1Ugiko9rCDNGB8Hgj8BTZo2A3VFfapt8g912zvU6g1kVDchZinEiLpJ9DAiYrXT2WjhSZ9JX"
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
