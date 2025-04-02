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
    "214fCsffnmEihSMKFK451UyAoDdfe5q7ZKWFshpYCKk22Ziq51VqxMiEAX7uUKy6CC1gEaKER4wwpR6iDUTyMRuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PDkJJ7dBtx16Z58NsG4qXahxoZ3NEo2HFbjeJYcCFTor9n65iMM43puZyrLANZb7KbafkqCjU7FgsSsHUSMr12y",
  "key1": "tyTZvWMAnwinWK68hprjff7ZgSLbMc3ZWLT6zXqQETgFNqiXGBKFb3az5g3skbQ5qLHJbHsgEd58oDEVnXwh1fW",
  "key2": "3DqGug1Mji3qDpFMqgnmdWi5YjuChL8BV6RwX1zMfy7npwg8MBF3KQU1yZD2hMygt5iMPxzX4tzP9pgzzWgY4TLU",
  "key3": "3jgriQeSsowizkUdq51fyXPiPzTKJZWL5pceB5dMXzBXtVLoLtiHkGtHDpNBtkKeAz8MJMeFgMTwxvSdWTcbQtBV",
  "key4": "562YVbZPnjJH3VX7AqzkvhZskNhJNUVY8n9Y9g7yimSpFU9Q3KFoDyUDxmNj8WDv4ajx9hFLAD25QaFzeexJBBDj",
  "key5": "4UJvRceJXv6k3vu6YcB7Xq3tfr5SyvSEDW3BqG4zujTvyEnbnwfR4wntMRZKka9y1sxnfPAmEze6Z1z7QxQzMcnQ",
  "key6": "2Q3tjLLtjXRx8M8fB85GVyijQjb8ZF5TzCihdiYA3yeEVJCdqY5fDHdB9Hgd9QiMCTi5WMcjmXdMXRfJgt9V2SRa",
  "key7": "4DQNwLm8zLyUQv1a5RC5p3TN3ojR9bkDZG93CW7MZGbLYJLT1L431foEv8g6cjNv5FSou2k2bpCvYCt82NRxxQ4N",
  "key8": "2U4ZoCBCdWtnVjnzHxniqTbMoEZ1kasJRD5VAy6QK6g9aQErYVHZAFQEdzRBmH1QMHAvG9PvDMu8ZsR4iVzCHSwW",
  "key9": "3NiWQproFQFDkvWuzqF5TCEZCLiDxnqQeVebcT37y1pwYJSPoLvM8jsWtSE5RPC1caiPFwnFaiC85g2rDncRmK7Z",
  "key10": "55iHtznTLBY4qic9SK7HxGVKEeRWtbsPYG5PgFVV9g24wji4yZgsFreeQ2YqPT5pUUXcPY1sSSvB7uwKkMPkMqhg",
  "key11": "2JayKKvxQV5t9TCpN1Va8E2iRdxVGEJpBPbx7z8QhSV77uocUNXmsWfynZhdEKDenFpAhrNC182xFdNkzSJB722S",
  "key12": "2nGpKq4fAgR8S1tggvWjZ88gMbHYWTqGhKgrMjL8UjqthqCw31B7SxphNVsTYFkaU5rfSWSp4YLYY3G6vpLYSCqU",
  "key13": "2vADXHdhfXrBefzeqgEMfMoU7SDUbNDRPv6YybfLD8mhmrAvHPh9hsK1HmaVHPrBScYQYprrSCFWQQFZHd4oKtPn",
  "key14": "4yFA2ZQ2q7iTg7LmqXuweyW6FYc3pGkGTeQi9AoxaG4TShtefwfCFrdGEoefBsrFaMELz7iBFLL3hbr3a8RcQxow",
  "key15": "5oc6P3sSiUVjLCiWuxvUZnBSMR6ewiSZ11tbXxaq8RTaH6LUi2VbGh1bHobddrqEWBkykmMxtGUX8wD6J3U2P6Aj",
  "key16": "3XcxiDd3d4VSYuwVoUGcdHTnqGKg8fB4UZmx27BYqG3qN6D5m1K7tZ5KtacPrBMiu54hJsWvETegWRT6fRUR3R1N",
  "key17": "u5TNafGofnPSECWP1SujYyRvidhYTAiZ6H3Q8dtz2reV8J5PySZLmk4VZh2wMiDSopJWiZo2w8EmoKLWUHuyszA",
  "key18": "UyTty8WGipKM9uBBLDfX2x9hMd9gdzTzUb6jM66vLzEtHYHLXvShsewSrgtddHatLhC62cs2SFAy8bMWarTZ6B5",
  "key19": "43fGBCRw1KKXRKZkwY8bCv5rNRKWDY6abjWb84DXbLhFMAKJPiVCi5WMydHy6sLN7T7hbtMseX8RPr1moJ2rVFNQ",
  "key20": "3nCxYe8u4MNrhCQii9fatJ3fhEMZJNJ1r6yB6rkc87VnhGRGRKiz1uSKTafVvo8XkWoJhApcRBxJgrAtKyzw6sxQ",
  "key21": "34WHasB8rW4WbKZtjJxDs6L34W2quZiViJXw3jrXF7W6dfzepChyoiaGCQRV5oArwHg5i2mXXbyoDQZuxkFDnmKz",
  "key22": "3N1vXaifKj96GAZBL9Skf4ToCFqA2HneE6DaNrTh4CFnyVYhi3vJK5skHJ3iwJpwyMCMfpd27ieFU8FLqs1bXbn2",
  "key23": "4himcadduZDJKvJC9gC5A6d3LpfjrzZ4mdRjMJNgD3on6hbsh1DmXqAao3q3WoepvGTwdWQS4xDoXzCov3TSkWdA",
  "key24": "shwZhdsjMmkaquKkRtAdHiDnCrRgHAyN9ikbLSRSETvWQ1e3LXsuVaWkdEVYwJKrq4nd1T9o4hKAEjE6Qpc4Smv",
  "key25": "dwWVZxEh8eg2exwJCdP43wn9HndpS6oYTeye2u9Mu2ct3RQWvVKS6pNfkzLjVtHZTwGAdnqzEVNUSSTo3icgtYo",
  "key26": "4tMdMAjnZW6e3SjrDSYaR3xWNfhjBHAQFxkFCan11vH21WZNm2cDVcFaQEPbpQjDxazom62aKSJmXk4UkZtAB1aQ",
  "key27": "cGt75KwXzjNafkWjGt9PBQsHJCFsmhv5h8Geo3h3frmuj5cQ2RBTCby2WXXZUS8VYD9FiPmLTVg8biN11L6uYdU",
  "key28": "4wL5G8jfS7CP9xTSFMKSfekvCXhtrM4j32x2XAR2rr9Ecsvz5EBr3V6H2PgdP7JV66kwJ6BTpboHMtSaSrYPtVWV",
  "key29": "4j6WK1v14bJyk5GtoYXQB8Lw4p2SDqRomVRQKVfw3sVmvZmRPM9K9azyYDbAszq4f66gnPLWbmPwYnQUvEXkBfgp",
  "key30": "5tBsQsqiL8Q2EbhiViYEwJrnXDmyfNNeGyVParmwWocoZ4cNHwiYC6SmLaxYQfKfuyfZz211mccsfSQM9gf7znWa",
  "key31": "4Ps2vboaScvupw1LRF99nMxiSo3zMkczTLtXL7B2ZC3oHMacyYSiFXVNLDdYZZsmeQuv4yUH3Modcyar76qk79wJ",
  "key32": "3AySi5sKRFW2foC6Xwi92dQvSafKGvdfpvTA9nxr9FR96XDU2vCAD2ncaeYP4qVbV646LLLgbWzN2taFWzKXjn7b",
  "key33": "nxU7GNVQw9kKyZg4EawdJo4GLXTb3dy7dPsd8aFLg3uyxoSdVfGtfMufhJL5TckCWMLL5nrT4cY5mbJZKC4uXSm",
  "key34": "3ctMpzYnMuFa7Qj7QCoff3FqMdFYScSFXcAR5gEaZXuZ7JeYYsE7DsvnC2fUamoz43Pxn3WHDZEJJ71uohvVFakN",
  "key35": "5584vfhWEPywHeixLMkcQstQ5XYWYfAhb5NVcqpv6W2S3aiT2HCWeDbPUfrn8PCr4vtBdNKm7jA2hD1JwsoYJ6Pb",
  "key36": "65fCNXiCkHwk5wbsHZfx5umgRgU6Zw7VKD8JJfgYuy5MAXmgmBmyitvN4Y7FbeGX9BdFxSDqhLJGipzgxCcnvNJk",
  "key37": "2hLmZoTvMMnWJQmyJWwfqgdqBjrrrodfpxWyqVvaoQPMYPTj56Kpw4CUYLLjLgGA7zwY4pPDTSrk2i6mFwPDitRc",
  "key38": "38TBfeMKKt9fjXP1GGP3bRjXTp6icaemLBEW1Tzt4ejpjgp67UHzXVP6gQ9mYWqUkMo7An7hWbV2SULaQAr9AJWG",
  "key39": "5Ec85Zvb869ZP8ZsENd9FoVLe4ujkUMoSZ6Eyjjwr4znsMRp1tGB9LkEACghsjVbJB6fS1PaYZ7h6aeAFb5WDRic",
  "key40": "4z3QJGmXScHjLX3m4yW4ApAnjwcVCHmE5gSRvJ8r69puvqsp1nCuMLMqfndNEGWyKGxJqeJw7kEz3jEdC1PZqx1k",
  "key41": "3ZxnGXwh8e5yXkMi6H3wQmNHwt1xGLZGTMreMbwGSRStMwEFJvmpfqXeF7QtKNk7sWynbLHHKirBUeV95HmThZRQ",
  "key42": "638XQu1jC2rXuy6jVjrKkCxr5yWUxeGNiEUqmC9t7Ymy5novdMgTAukYst9ehcKurmPpYdWsa6nQksUXc5YZvSuU",
  "key43": "CQMvyEMp6Rn5JApDXqaM3jpNTQFL3wCNp4NPWQoLa7WpdaFirB9weRGXAzHDDvp2j1j24evSBnUqUKRKZrQxksN",
  "key44": "ptCApLEGXEjUZNB5ZiS174e3P7x9LgvHZKTE27tvibw4U7afCtEMgrQ48P9bjdSqR9iQTRcrjiVqUdNUwgrTiX3",
  "key45": "5J1b25ZXDN5AxDE9MhxYPQCa1ZDqib8GRttqWthdYVLKsSAG6Sg6nAvi1QSG6bXG7XoVjiR2iqUGHe86oyymg3yg",
  "key46": "35hdGEYynwUiUZTgLmhVFXVpLCZ1xWdavd7w1znf36uHTHWRBNsHFm8SJvMwhDnAwdThHW7W5ix5GDpmBnmaqg9r",
  "key47": "6Zhy4rw7g4pHEyp4RtcCmMjy9JPcr3GsrNHHiwBaihwEzvDypu9sjxJZF3TdsgFH7A3o3fup2EfTTKGvzFnYT5m",
  "key48": "4ZixaZRw1PXtsnXjajmrntNDXTTt77RzwGchenRM6KwziMRkwtwAiuqohEYJRyCHk8fMAq89dvxDbeLwBsz3B7Xq"
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
