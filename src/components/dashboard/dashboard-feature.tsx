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
    "5EABgQyyjnDosBkwJx95wSUxz5c5CbujF65nQcr8vgC87zC7pHieKFDuQMpfsQ2UdpNY4CVBWs4hinoodTS9m7xD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54K8aNDi3VAPuSFtLrjmJcrJy1gSnyQwnAKZUqh3REdhS6szkGZjKcC5k6wYUUDAmWwZXpxA3H8vNMpoLotXQw99",
  "key1": "4tceUUQmjChAHZf4jdEXgYMfHmGU7sduLcvS3w7pfUHMA2zgWtBubWfB4s6pYknKtBf466m5D59mR2HTwtvJPF7i",
  "key2": "GMa46ZDtFPsJcXA9EQB2qeZi3cd6uAKPUguUyrsAap2i7hgHvNQ5rWjkmuCLo4SL9ikn3ztzhAYs4g3GXbGii81",
  "key3": "3yomJxJn5D8L7V9xXaq6D1Pxfz2GXZPWpHaFqg4XE3dw74bxkyoaw8Y8vY45iNGbRKs4HfZdBKQD8FSMmkggF9XF",
  "key4": "4ApHMbQqwBNc4H1szZz9SJZGbN54A3rf3NJM4TLrzYG16XS76GMApbE4bHRBPq1X55T84bLVz8n7BPhnJ86vfdA4",
  "key5": "zq7gD7kFYtczJiW8dJuerbgCfiJRzZvdCHcwoRhYVZr4dh5DskHVfCZS1i4nAbLbA1r6mQSzDubXw1yPpFBjvaw",
  "key6": "3NPrvAjXubbgA86T9pHTfoyhAWoVVoZFMvUdUQN7rk6PMwkt1761QzfkY353qqAeMeBs1mrTWNnCMwaoysci4S53",
  "key7": "3KoZEWb3TXgaviV9jDT1oYiJ48aeoLkzAi9u7y3Aky69PPRCxUJ6ECDSQdw6pHmriGd3EbTn5rxotuBrHvEZwNrZ",
  "key8": "28hiLiHcAq78DHMCXk4xoSwvEn2ATtxFJ1TXhgaEY9eLDEPL6iJ7w9nu8eiHXunqFFXwWunGot8qXpSNmhXZW9b6",
  "key9": "5QLBDqxirj8eCrz3seF1nVtpqMjZgRJDCSC9LYkQgnPm89sZ7UJUGe4DxRbpQKEtyXPX4mFCrQ4ZBmbrz6VoQBtL",
  "key10": "4sdcxvxNJApHf3EbWgC4JAHmyxZm7Yqc4RqMAy4ztgPdgfrhtFkUVSyi6u51aCq4ePUxpi4ScQ49yg8xp5wUpUx7",
  "key11": "5SncuMjM3hiYD1xjutJy1qFzz1gJVbvSXw14TtU8fxKQWt3EZBXpwV6p3XrpGnRvepWGotAs15axUDb4ZJbk98bW",
  "key12": "2uyUwBmHSQ5Eeu5x9WM5QiK6xFGhrqSiH6aPRKr8EBUGnDXD5Ti5scGcwd8xDdrd3bKVU1vBakRccom7jXWe9hzc",
  "key13": "4DG65BS8f59PAh4ms7TqeAm9c4vPUynZLK1bRfKTWNmocBeA3mfSGbrgCyDmifFe7Ufpi27xJYB6PNB45iwebjiN",
  "key14": "4bz5RLv8wzp4XWeTD7nkRMFS4qeb1L4yoENYSd2UMHphkAj2mhsbsngQYTWsyCguem5XyLjgTQvtb6PHyj5qnzj1",
  "key15": "WgQrrnTpJ8Xt3HNGHGMpothAd51eUkj3N6fPmWbGBAg6LpUPA5m7RwPkynVdRdV8S1XPunrLowZNcuG7zMbJVk4",
  "key16": "49BLa9H31qKeCvjazkpca2M7UFZJbsUWRdSwnVMGHYRi2y9kBNPaRrcaMeAS5h97FRMkCCnstvM88PC8swe7cEUe",
  "key17": "6TqL1ayaoUZG9gUWB5KTudwRFsDZnq4CsfxG4YTNg4qBpMR5sb7NRMREV76gGQeGc9JwMaXhexuWA5UaU12yiXV",
  "key18": "4MVybvzh14Cd8zsmpUkBcutoq9g6tfAeYRiUwREQMQdanprzQjPP6qcdsJD2rbwytDQHF8mt9661ur75fxe1A8NV",
  "key19": "2PtWdq5vPdjHUkoPrHrPCj2xBGzPX9V5se5H1TWAuVXH5FrV95RLmnQUkkLSH8qYuRF2oumTZqpAnypr5r6PKRi1",
  "key20": "WaSzxNMzBTtZyrcpY3Z3v4xtUxrcSFW3GaVxsxSrL5YLHNgzFsWYSggR5ycxuHjaP5iMa3S4duQ9DQMSdACWCuX",
  "key21": "5qfczFsxyJiKtRu93YTgx4PNuW5QpVPKwtd5SAq2DbpSgLVUxHm5cJAQRHiJ8my2SdZzU1Uau2FgFRJTFANR3SHY",
  "key22": "43YQYpfRFSaRTTpuCn22f7Pgv4Hf8iTRBWV85xap1gvkHhZi9tcvaB4sS4DVNA2GRfWbZrgvuXmzocU8ngxVYEUn",
  "key23": "2G7DSmfm5rL3c8wignoBxLKqRAKuZadCgf2NKT41bBc6AkaceETAN6iEic51YNZYR1GZY1RAGq4h8RdaMXMWmXyx",
  "key24": "Zg3xZezykPk6SoypDNJ6Jxz1iGf6Bwz2RwSYtqoQ6hPbE9TYHcDaiKBZ5WVPUTZykiHyVpwvF3mcvU1hWJDSaYW",
  "key25": "5YD83f1wHGsBiZLsHWyDDNBCH3my5tXknZg5qMR8q8nRCzD4RCAfT2Rh7WadWqsRbi1ozeRbSaSMG5wbAqRx3idV",
  "key26": "4rmsWSPwhTMoKUEn8HwZ5YC2qhqhpTfJtWGJnmR7MtWm2U7vNjJH1tEiobpWJ5xBXg5WwQMUv5eLSvtDyWyrg3eA",
  "key27": "47CKr1z1XHggjVrpBRtuf1647CD1fjjfEvBKvhe4BoGrGa3t8AfsF1FiRJV9xQ61g4bTVHB9NqQatFkqQYK5ptho",
  "key28": "61H1XKnpYTfzEagU6rrRh7czm3c9L22sLFeLZVKuJezhkScsV7hNJ1FXqr4Suk2KsC53UR4MzDPVBvesmY1xsszA",
  "key29": "2hdzpHj8iXW1gav2nTvBUaiKcgNr4egRqh6BWq2gWGasHrRpxw8FFfCzKRdHSdvcs2mTV3Si8XnTZNfuNymCawjN",
  "key30": "2F23c4zgsKU5jjHFyHhWajNZJQ3bVvaC5iQx5MLTQbcMiiFBTCoWKEU71VCi4sz7J61hZbQSAaRdLFR4BHz9jv4M",
  "key31": "4cXjNNfdeU5eofwMR8cVwkrqF9VrPuC9KFkGDgQCnAXts56q8RpKTzDVzv9M4onsWw9t95UPxF1NLGMk15Txy8QX",
  "key32": "2bz8Su5D8sUhD7yG4aDYfaz85FdKHs78i18KdZ9eR7vnGQHn1pPiaEXyqJCVneq4Xh8qMJUGVwNMuS9t8AgWGER2",
  "key33": "2ArsT59ZfQzTTMoWVpjAEhwEwtQQx7gcJrPpepieBmXGy1aEN8kJRniLHqE2R6xKoucNwy8iPHSDmMuYPTpS5Gku",
  "key34": "3P5NMzqjJYshtyAmu1Zpo2ZYccgJeWzq9AX5H9ZmbWjLz5y5V4WBGV6KaxDaSkEAiDUNK3n5Ei53YU5gSBE5t4Rb",
  "key35": "3yvXumiePCcmU335XwbbuYq6NXuBJrbi8NqZWd6sJWRnFsPs2LpgQmbSUdokb7Qxxd13rsRZwuijb8i65PKDLjQa",
  "key36": "5HgrvxZdxFTwP2oYm8uy7J9MFouEQqes5DdFBJTkvVEKVaTqLFnXRZpn8tMJZg4TczQmwUgE7DyEJYXtx7TVwJZc",
  "key37": "ThHMi3CXNYvxjkYQNdoF6vbjXE5kTZdZAPLpcEU7cq3ejN9F722JQbyLheTgUwnJ45TJpMvBjSAJe26D6Xc77W7",
  "key38": "2JbNVrsFFepZKcovsUe4pS9H8PNgB4TuBm9j9Z6vmMFmHJ1EqV9h3kqnSEKZFgysdwAGLj8UnatxikLsRPX58W9i",
  "key39": "4iVLj6v3nQoD7WbMfA5dKaqryPUWfPdHXxNc4nMf3yQ7DYwumzWNmNT3scWiE8HuPzqus8GDw2vSeciGWf8EVQNJ",
  "key40": "2bwNePZKENLyLhKhmghkS5gY3Qct5BFDF82fs4GVaZ91B4p38QgJYzkVVkszg9ppCfVT9PZkwhqq6ja8txqofypM",
  "key41": "2jbwbd763e53jUXEvxctRBKph4LUATwwkNpSxinMFNKgu264Tw3WamahFVSsR1JxLV4hK35P7pi2NTYEU6tyRS3g",
  "key42": "mf5G3en1z1sXekaNCsYDbBjg14pN8fdHaZs6kCkjNWGxi1SNV6dLF4RaDHFU1vKzadi6AcniNJE9ytqV8UAu8cc",
  "key43": "2CiaZfw5cNbUMSFh4wG3zF9QCr3RhZ2dkgJfVFt1NkiPzioqG1oNnJVtc1FHtC8K9PSmQjW4CaYyuw2uLr3LAVCC"
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
