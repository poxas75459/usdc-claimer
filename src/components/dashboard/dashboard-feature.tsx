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
    "3jWMWSLHsscu841whjDbHKyhYnfaGyj5XkqxPcWukhKzNq1aYWzVkbgvCjMQpMfdqQCmrePxaxjySfE3UtWCz5Yh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5up4Rgvdto1pTrJNMMDLMS7DtNy7UXusv1zU3yEK3fbYK7qmk7DbtUjAwTD6EiMzNtpMwGoDAbYgaLHWtDkarieu",
  "key1": "4tg2qpN8ButCDRMCFvJHJB5L6NHwfAyqBdYAg1htEujcagsyu1p3Z5h524njgenfz1CBVANL9bh66NchURrgjeGq",
  "key2": "4pRECpNdQ1k8uZUgXePtCAZu98Psj4B5V6i7BBbiwEK8nLxfRAUSDvQtAoZb8BR5FSzqydJS3BanLWLETW1CxiEa",
  "key3": "54W7TYGP73qbizgVgvKHfqJhr8Ru8xToUoQSkjZoGT1jJTAK4skReYxpK5EgQsr9ZsxayBFbm93eAWzFYy86mPdY",
  "key4": "ahzi1XkTANTbszimBFuRLeqS1VbAvS4SZ1QyMR4tbh2iteqF9QBDbeVHqjqUBU4p7aGsqPsZD6iNxFfoqbyKd3u",
  "key5": "7GY2i57MuT8SMCiGAqvbyCejXDtDFshJbUQNA3z3xgE5eWc7LKuTAvRWhjAqfyKEaMVUdRZj6tqGwtxbjBDEKo9",
  "key6": "4gd6doTfwF6eJup9wpgZDUaKdppvFjr1wTDidR7cqHgRWqiAA9yX5xtmxv1UPPajj2sqodhWFD1axQekyG3LsEJ8",
  "key7": "3DQB3YG6LYxyDujejsjYiJyLLDuTUvxCkTubxqDxEC1JExdbNeeq4isPMW7t6srFjKwJKb5E6nv4KQdMwvu3xNm8",
  "key8": "xMKUeMeLT6Eqr6b8yBN8S7nWjmFTktGFS2J4V3V3LFpE1MPcqhDM6D5E2zozP5RESDxgvWf1Kveo3G7mkguvjFg",
  "key9": "q6iLPAAYroZmjFUbeUy32rxykfvGF6YvAwwSJFpjntCyyNL1CB9yFGmDgEFu7KuGA5SxDnuhNP5V2jN8owp7ZSL",
  "key10": "qn7FPcZQvSZ21kkLEFARswZEWHtmDqMnqHzE7Vwt6gyAyKdtYbLCyc3umBzGLG4jPrx8PmNFxaB5Ey4HVX8iEcY",
  "key11": "viKdor9hict1ErMXpCUnjZ7tofKh6YUYJBYd5JX71bfMGgwyHAy8xRpBTU6R95gX2Q4aAYaBwhhwQBNo4JGZPsf",
  "key12": "3AqCAi67pWSuaGdGGex4nMsTo7m9FFCHcs7jQh7qngFKF1Z5tytws5x8Vov7PXthoUWRwXRB2bmHHN7ASBsSbkdm",
  "key13": "TKsp2nzkcUAYnD6vS1Lb3ztQBo8ov17iVfbNR2rHWaddMQVTTXF5mWEkEEQkzmiQJ7DkVh9JDs6nemaRDNVQ8PX",
  "key14": "53Y8VoL3EBe9XRj5jrFwRN6wAqmNexg4KELxpjve8ZWoekMFKrvc5kZGiuXY6Ji4FhwoKxLHqduPtRQJduN19hY8",
  "key15": "3cMcRwKUaqjRDv3reemMJcuaygKWwdVYKMSP1XB5sQKsTz8piN3FVTVrhnzor5XPAw3nc7FCNMF2HTAMKR5AWyE9",
  "key16": "4d72uSkVeQYiNBfjUWww6fGShi4Wgq9ZxZ5Gi8oHUfSgdzswy7scYj4Za79QYf1p5aQGWGMk9WvheLXfyPQv8CDN",
  "key17": "5An35yM4ASfVyeRWSGpLLqjdYoARiW75pA18SqA1b1ik23K4kjg6JBGSrGaqvRmoDpXdDY5vCSnvB6HenB5xu5dB",
  "key18": "4H6u7h1dqTP1bYq6o8LRNE7qaicownxjMPAmfBYUGNpoxDdwCzDLHbrdLFkN6WcTuxXJgn8ciKCtkMbEZbjvLHvP",
  "key19": "4YVkWhzHYSgCg3r9MkmAvce3HeZzPopZiuTRxVHNUUwmUUheHk3HJSFg175qszS9Z56UnYag8c6nnGh7ZminRmX4",
  "key20": "3d7v427EFLXRgvioV9WWHhghUNsTo3cTC4i37ZkZjsmRkFEk347ajvtm2U7fRomHXJenwgLWbAmr53JtQeSerqSS",
  "key21": "2PSPyRtMTBG83b8GHEQG74jTUzysBVc8K3o41KhUePuADKTsLqB2EMEbSPhQZneCbkNUBc7n4z7cmTFoAx1qGKgT",
  "key22": "4WTa526nLGkqnurkytgG2zgGR5cYyKMqsic4UM5G4KjWHmWKDwMY71fNKeUko5TMr2huaFh4hGKtijo7UwpYMqDD",
  "key23": "SiQfPwwSiJt1MmBeH13NJDRb9CPJU4nmVWUfmCnUFrjt4tsaCyXPo7qet6joSDHPZnUJCKh5M5qbpDTNS4Z4yRd",
  "key24": "eGtrYcUz7sqHVN2izkyW6376hrWysC8k8D9QbWEpfyQBXwruFzpFKJnA7976BDHbUNrchBhJvWkxyeTFRkivUtg",
  "key25": "2MpXnWVTvAjpuU4ZydZbt3GsCFPdZuU2rAWzx65nEhJX6fjGCn3bpG4ZDsHuRAXuQxUT7GBzY5topJdFU1qek8Kn",
  "key26": "3nzRsNQLrgmh9DFQdvv9MU9wzB34zAwfKvutaQXnyLGotyxVci6Cg3mwVX15L2AJ745rnsapwtC61oNx8noSAXfG",
  "key27": "35WQsdP25YBDQcwCFCLNGBYoTcsysgtheBBdUDorvbYLTFcGryZgKp1a9beRaUUuuYTzzRtJsGf8UYG3rPfWJwWq",
  "key28": "3M7tsnyopQ5ZetHfCrr8YdGwofsZ4DY9GxgbabWDb9ZbLxxHhzBue2LYVhe6C4Hj1a3GGeFWF6ACtDHAhUkXgwsU",
  "key29": "5PGcgeFcVv4G4jPQox6AVsUpG28X1eJLFSxmcpXgBoCHbvnJtgZNVH65JhpsWpQVdDw2oJHs6KPU8Ns7qQW93YHo",
  "key30": "2XYuUNQW3o8jQ5ybFhKUDRZKqyjccMhe6DXmrxGPC8u1h6iz6atMnRaUskLewGTk6pwy6YojrpStsat5bTXrVCWA",
  "key31": "2jg5hNP2pDZttsCwoGLpPB1W6ZyuckfBsq35RaQN5stFwQgHogcuTk9kqMzgWG28wuAyMvzfdRXgc79vXL4BLrKd",
  "key32": "sU6oS9cL9jdMwoxwRuGPnvEqHieFmEL5kA2uoe5qJeTgnBrZeHfNxSMWbQr4vogH16aZy4ZUicXM2D11x71HfWP",
  "key33": "4M3VVoW5B8zXTSeFnJqr6iHXmDyFY3WXrKPqXKFVSMeaNgkBvNCpcfATMaXhfrurBTCwq6jjFMgaKG4qpS3qbCkU",
  "key34": "2RncpfePFCcBki4BzmgYjAJu2ZMt2Xen6pJNKyLQD2VEuTyU9P38F19GrFXPJqDMiL1Rp3KfTGjoqeT1TCK7vx4C",
  "key35": "56vGqtybsuf2fEyPMR4jHqPA51qSSbKdG8gSHtLBJPzbDVKFTsj5C9cjNbVuVKHadyoTm3bnPeGPJEnMUtswpxx9",
  "key36": "3CFXvvrq7myX7wdkXQAYVMbHrNFRzTtw2rL7y5JzzhmsAxWw5cWDGZn3gbS8Tpb4owagsTuQBGU9m9qqB6yutb1x"
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
