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
    "4srCk17EKSsmU47hzuRDHtDgz312MeJtBQrUsDcHGVDrsSQzWV7Zs18gbu5FbAY4VB8vN6vVUerkZLJP66vBvMoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UCDzwf4YoZYF5fB5X6oqxFaYqK4QnbbtAYstMtfKMRaTmmfPcrMDxtQJaDm8xBfmyww5SkyvukTugzNphVZEeBV",
  "key1": "2QvxNUiKJqMU4WQGJ1bgBFthbQ8sLGGRuGMxD4NnjfHSvRaBvapRntrrMg24KpDkdhuypByiuVrptishYwh7Fov9",
  "key2": "29bZxqUFk8n2euE2qV88dieAsxXgXWNcdUxKJjeTm9LMdTcbnWj8DfqUzvKfNoEFCGw6yv8P3YGtmXg1WpuSBKHf",
  "key3": "5Uat8Cq28ABwpzWtDyVJabZ7Z1ERo7k3ZGKeTPGJpMaoWqH8TWj3XNzuX4SKyQXy8mAxnzXnwHZxYhgMhiDTmhNa",
  "key4": "32kg5MD2fzQa1yMKV68YEg322gUj7hde33jpvRfjhek1QNUpTJ8xcwHwe4RvyU8oQHC7Z2DxAFfLrskLKENK32H7",
  "key5": "2Ea9dfW38oEEEMERgRiGvt3qn8BMro33H3kYCSajf1RyNbbrn36bsGqHhkFHogxXesiYj33ng9xpvECGJ98zqKRT",
  "key6": "4zMuFN7vp21NJijYdcTGSKMcCQcLa6hDJrMHmC89V3MVYV9qSjdLQtH9RU6gm33KdYJ5N2n6nGCJa8XF31uR2brJ",
  "key7": "4Mievn4hSJ6obcG5UFqXoXj99Rp2NpiNPDDmXZXsfg9ZcAqhPW2ppWn8LpbbdjWyJLR8SU6MpiCTeLNFGdXokFMQ",
  "key8": "qKuQNTj55VZurBRj6kE21X4QBGR6SUdLt9DSri2FaV7fzXPSgeUBQiM6KikAkwUT2gvGo1iPrrsxovE1jn6nkro",
  "key9": "MTiVCSFmKhv839FrPQhzWx9NKn2k5DWdcvhurGHssoVPXm7kd42mAWdq3faS6HVCUR6Y4NE3BEhsMZFrY1Cd2CB",
  "key10": "3wfDXtMqJxDdmSfoTevNjLLriYexBzsaYxRcwAm5HedZbxDMxjr1aa3P7joG5HvwshZPTGwTg7XTet78CyG3qGha",
  "key11": "3CHDbD8U66iEduZsyb1H47mCgpMWTi6yddzhCtug9HRG6wohfrSUcpxNfQJdKXw4awUA9As8CmwEEnXMxKiANHDZ",
  "key12": "4YevTWkSxQDHGSAU4B6GpGTBkRopZiiTHC6hUSxZAqo52r3vrNZcJCxuP3KwUaHV8ocgHccZrVaLENyEpgixXHfh",
  "key13": "3MR6q3j4A3uhzn2RBNTtQJSNZTnZERLvg8SgRB5tccxfRAkTsdh3npEYurDK88HQutZ28BkvGoinDRPCL1VZPskm",
  "key14": "5Lqxt72pMMLVj3S9pnNbJ6H5jNWBdEwEoRBQh6UDvXnNFQkU5asjM36kKpenn7MWEwWfFSTcLhKNzcz392A1oy2u",
  "key15": "67i7yjqj5bTuVSS8UXfXZZfe2KcL671R73AMk2esUrsDuJhnPvBQFcdbqU864XPS5eQr2H7h77SPX6YvMQ1Zm9PC",
  "key16": "5jL7p8hZWr4su4Zq4p22qnsLq6hBGmQmFdj4iYShffZ938P4qJ46EckNbG7tcv6MTw8Nwipexo8vwbjhnwLY3ryX",
  "key17": "49fnAPnRPQmWK55hgCDu3ZeNtnu2oEVxreuCB3dfUudQoDkJrtuMeNT5kGULm2cbk1RLVvXoLCF1YiWJymbgTwTM",
  "key18": "3GBZEVMvNNoLhfcZoiro3sNdKowGWVTHF32pRfSWPEfcWFhhtA4QAoBd9qybGukJmvH4cFwMyYe69EQDEVp5oZbB",
  "key19": "5EBfD4HLiRdJPZEFErEY6twepGHKXSYvpDDP9u74ySQiJpt87GFqvo72XjUyYwxNPqPdZrm6uBhavW4qpMKWxbQx",
  "key20": "64BgQsHxVSVB5fAEDHWV8xKtS4VxHhGnFMU6TsdibkKh2FtfxzNXf8rjYcNQUGqj1QBgfoHxnLkDJxZ2Ln92RupB",
  "key21": "eV4DMjBJJKFaMqqBP4cbmVsryPmaS987nZ5CF3VrywHX36JmoWdDztHLdjsAHz848mAGTW16h6MEoopeQy7LG9K",
  "key22": "jSr2cz8bkjrhWaFkqBCtnuNAayPPDqTV8a1j9hA7FX32jwToLsecyGj2HssYGRuM8kQyzqiMZzCUYR42tV8ce6L",
  "key23": "5DNs5njTEhcnnVjjLDMNjfpG3F49DyWW5HGTrn7ivZTHDuQ6iL693wMrCCYLmfCETxp5fKZfh4WnBX4U7MKJw56N",
  "key24": "2fhXArXkS8Lm5RQugU5dMetJFwMWgkcfzwGjBuJRinnAwpiizvxPdtbDBhYwRqz5hTSpyJckg96f7K62aLdsUYPp",
  "key25": "2VV3hvqoeRiaHn7Dx3aFzAQjo1JrdX3WZr388g4DUFMW1WiMuKmbPt27graV5G4ByxnWV4ZhemNvYTzKpZuizhem",
  "key26": "5vRAWsLt4u5LpGKenKEqsz5Qd3mStsa536QG7DQbPAtQdUbKURyZ2TcJy5nVas1mBDYRL7uwpj6e3c4oBRwosZVo",
  "key27": "53ZqLhNmeLAbbBNFwc8A7Zi717MSfT6RnGBfr9SPwGw5tgbDJGZVjge62pyZe3CBXPQbkaDT6vMpdnn5UjfKaMfF",
  "key28": "3T9i5QaJE4B58ZVCE8pQSYf465UThUPVvjsK9KiWVshV25zXgJi2NDzV548ikHNLpKtpPmEkfvQrKvDPA3CrJjvZ",
  "key29": "5idtm2XZGNdpxKqyFfUZNt24zukKnTmEbRZCZ7DSpi7bikqeh4azrfbkXWm3j3U7B3cxP9JztoHR1EYoDQ6RxoER",
  "key30": "65fFzm5faA3ogCAqkG42U8UuRR7FE37NnK4X8xcQ3UyTVYUbnxwz5wACCV6tmTnb13whj6dBqiioi6TxN99mHgYJ",
  "key31": "TDqn7q2NcCvHy7FLEDZck6emocmWGmpWfqeM86J4LkKXGAkUYYNezj4ACax5na4PnSpYbkgRGaz25mzUGj3BnMt",
  "key32": "2KYxRCwX6VnzvnT4PrMiBVQu313hEotARoMejVb7SUd1rEmEnjfUmhkwnx1fuqcE3yKzXKAXEjb9RYqbERXW7bSN",
  "key33": "3LzHr5ra6LPMAkTh517MW4REpW4HELo8W1Qvtg2Y9d1MP6rR8YVk2faabTfojssWBM11wLQ3Edc15DeUxDYHMVTV",
  "key34": "31jhpmxebPZen15uXvvbk28dG8wWC1FWAyeqPaY528qbBwtnfmJDzWpZ5qabSGXici7vXd7f8XhfgV61T4agWgmi",
  "key35": "22oqhtvYcn3PtncS3a1SoDnTvh7sFjvrE9T6UC5aG3npzHePbceg92rk5fVPz3yGVreq8iQPumyyaFN9wVXKj78C",
  "key36": "5ubfhDfzxMGVMES6BBWuLgzdv5oGyXKtW2wKY4EmC3Miodq7KhLdbsUrdb7CrSMWExR6PDUFTfnDBxkd2Da7E8a6",
  "key37": "4btKZHFGFD8RHezyiSQPHQWaC2zLmKvJ4CnrednhdkHzZk3WK31g7f7A7DUyfVDBNVu3iYR9cfUkn6j1w4fPQwDN",
  "key38": "79zTgmu5ZXWtpCBU8zEnDyB56Yr6nskmrvTTr5jywn7nsRgDXy84sbUr5GanstacUMXEnSukWKhEP4ss4YEpbnD",
  "key39": "3yavRDxm4c2r7bGrJhtB3svDh4xFDLjPU8Dk8cEvzFwdhGgkUELX9Xys2bHNvEugCKeEh8ZQMN4fBYudaTfCLq5",
  "key40": "53toDLCjP1czz1adESzhGwTyJjLrjuanqxehV15DyFr1vLhYQbV6BibbMjZMy3bFHbfm3HCqasfbUh5HTkyZ9t7J",
  "key41": "2RMefC3WzJ5Cz52JufkvgaHaySPjzoibUDWT41XVbftQCBTzeJnrAwtC1imdu9uCtNXXwE9LMLjtozQuAv24uMEx",
  "key42": "3onNoRHnwQwgRiZKrEkwWt9j1DBaGPua3ogUfnZCYuV8sEc8FzU37SUuiXPr9mEEtDJ18JsbL6Kijb9Q86P1LhaV",
  "key43": "NVnZV1b4KeLuv2PWez6c1zXJMhf6bn3Xb1k2AYV2JYScc7jCmPoyaZ4ENCVgvvsFFuDfuTvfoZ9EawA2wpLTxXn",
  "key44": "5u8wwLcHKGSapmxXciW193zKVDKdSGKfW6tQ2j8KdUuyY5j4tEdnzXa9S2pwjG8Vn9XSSYkDpRuXgs1uWLooWCJk",
  "key45": "7Zu7vT5r7TWJ7ktGXPcNMTPHE9MbNDVoG9LWHUpoCs1v15MUJ21dXWc96akm5TdZ3TLLWNsTs94K8rdHj6QrVB8"
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
