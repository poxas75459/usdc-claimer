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
    "86T2YsfzKcJQWRBnYCkTdJXQ1QTqdeYe4fNAVe62NV491Dji8x6YpicsFjHPd6WoVtwvBgVUEBu7TqBMWWo9G9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j3CAVZSseFkYwmZcFtnd47Vi9jVbmpHza4HXpqzHi49ojVGeTWhraYbpDbAnmR8P6yWbsRjpeMQP8WCdQ3r8uqh",
  "key1": "3NFj49WRsSa57PCH8oDViKTmDaDuDxSzbxPQahNALRZqnUr9y1YnuEV8NowAwBFvPtVJXr8jRKY54vqfgSPugFBL",
  "key2": "4AAxNJACyhQiFWGeScivTPSgLuQrCMUf7jeQauH5UDjggWTtPvt7Z6ScYX5F9Wo3TRmG92spFv3tiH8Ebcf8jcs1",
  "key3": "63LEmqmwYAApaP1z7nuTKPnpKTRc748QiZu3H1WoJU2tFAYsBzFpzo7d3GE3HtZ862VqHw7EoT4bHd9DsTuTUXVV",
  "key4": "3ZjUqQXAkJbZx21exErdLGkHtTv41BM9gQcdeNdDyv9nWQoK92SAemf8S3LP2WtPJJHYE5LdmKYGzntVkKv1TQe4",
  "key5": "5caZASE5BDuu5AZnQm4Qd6Dfu5fbFnWavFsy3p57t8HAJaHizEcC8GW6KvzUC38kjuzr5c72ACRbdSgKoZYQZQim",
  "key6": "6mdLKsJAoT6iJ6Pm8Eip4XrgVy352irkLiqhMroJQWA9aopaxHsUsormr8dxEBnYrLxcyRyurcx2K4MfytWjvdZ",
  "key7": "hPt5jRkTVRxS9YQjtMzudEPJDqKAvR4drhQpoPsSViXiP5QfpuEu2yWJNgnMqDWCG73mEJVbQ2BLiHGSW3ctUu1",
  "key8": "mHGXNSQQLdC76miActQ6HLLiXubrQPpQeHRe8KT4Z8RXgGjq2zQb2sWdFyZvUwqoCEwVq8u9sKpGVEp1x5SdrJF",
  "key9": "2jBQJQR9cPu1M9WP6iH3rGPG2JFS71JhrXnymJbkK6G5HfVxAPm3eakF3ANDmZzDdeR198FLs8VndFr34SPBbP9U",
  "key10": "4xVnAHA5bnDibYmE3Z1EVH25odSvnvqAoJ45ejxTPbGj7goyM63CPBVRpQJtATHYhZ55HCJHzb1vMQXiat9hB7Dc",
  "key11": "pMs7smzcQVo4vf1jVBDk35HiurdAMwD3bWQLREPMYxRw3TQp9JnneSjXdyaiZnANdkvZiJL7MZWJ4mFYmbXMX6F",
  "key12": "65sh7Yya9irpuTVsggJ8pxXjBfQYQxj1KP67Shbt2juNAy7L5ejfgeJubuTwMPkhwZrBCdUUtUEq4TBoVRYcAYaZ",
  "key13": "4tCoyxM2pEs8cLcLgGwnqZYiKQU3LfS7GdFst4vhRJphAhz54dmhdePkSPBWWxxv79M2hgrhb3PXp6q4rLWu8mc6",
  "key14": "3xyP47FCMYutGBZ4q8a9QwzFvw2wREEaRAppqNTGJbzRQcPrzXoxRuxiaQBYh1RyURyPA2RE9ms3GNRbe7biK4bs",
  "key15": "4HB3zQhK5qseB7bGPzeQ3CN2Ckj1gqFNVX6pffBCjBzVGCHUdwYrk1VnR76EmFNgs9AcQyJ5nYFioPgkQbe7aKXu",
  "key16": "3FquAmqJj9F13mhKB4yo9c1y96WmVN9HxzwQrKTSBRMvaKZv2USm8GyEH9Csh7oAMVBaPVVyMoVDWGiNNmE2sNsU",
  "key17": "3WihPjVkmg1Ez2WYS2btzEWM8oP5DfALSMJP9wsGn2N3LttvwvEqW6WS78ppEb4VjTce64fTraHm8X7BZtGenckb",
  "key18": "5h5Jq4qiyTRZ3FoxCpxTV2fXh7WZhnA6PMGcVmVAvMUXD1doGTMNEe8U2APh9xqeMgi4CGGpEepi3tXKqhoahnQz",
  "key19": "Wt8zvkjNvMhBN4sVtJAQzqc6oxCnXKv9fPi3J3a62QfjcUsFfCQFXMkhRrHfKgx3xxpK6mpVMJ42zJqMcvSk2w3",
  "key20": "3zK6wTwxArUyMreSWsbdV8U5pMcJN19WvaTsvWcpe1RE3fSXk5vGBtsbXTrb5GKFtpEDEv5vGWCPEttekKmq7AGP",
  "key21": "2sQozCGx3BqztRpSRHZTGtm5VEcPrgVpLNen7m3nxG1Cw9avfxjmpDwkkoqKSHFwtbVRiiQSueTDqxfPccD21qXq",
  "key22": "4HgeHeoQ5ALYfhuFeH2iaME9oJL1HcRcqKwxpFrdQbKsdgebFPAkdLeDLXqGaUafDKAwN7fbwchiM5awP2d8nJiW",
  "key23": "3iGkagfPCG1biJCyFu2vSn2SgrYnvj9ysWVQbszoxDLRWAzkJZniPd2dXge5Mq3Mm7xgLcHfXdfUDJZmM6v8Qj5j",
  "key24": "4CtTxGUc8j79kzyTnGmmgMGDVQSPU6jrNAuERUq2eu5EfrP2J8wE2oRotVjd6wpMsvdc2yAkuiYNBV8CUDUgM2yc",
  "key25": "62ZYTSgqLAYDTFSuacppB9gteEA57rKez2NwLWoSJdtVyH2ZWrSiEn2PW3biHWWDcVqf4nddYhKZpdVgn6VYHUXf",
  "key26": "3dGGyEY6dEcPiPznsJfySM766wuMGYa3RnoRB3vxzUDrhhQLpzZtguQ1pPWjTYkPHdHjjscEnvyCBHDPpoQnSid9",
  "key27": "2oPuDfFrsdzm7Mm4XMzdXrxwK8p2cSYQLTsABxvNFEsRnsHrVNJu7R6GNuWv9yK7bNRr1zcBro9dettkLo8mS3s1",
  "key28": "3dBB5dWNo7ZYsUPquYHJwHCHmcdQtF99JEQzr8jvvcuhNdDJ1LFzTA49rfGucqYH11hsPzoVH7sPyQ3nZibwkEo4",
  "key29": "EYj2uffUMvCSp6WUWkEV3AzJT56so2TdS12hMqudkQkDbM5Z1yZU4ufeF174MSmjTLrn7JVUu6wsqMLQQfGiqtz",
  "key30": "4tCF5fx5ZEjm86imqKkZ4DUXiG2uz9EEzXsbXFcYFSZZVRgPEV21LKwLvPDoXoDyVgiXPgLAm1CCuSBzExDefaif",
  "key31": "2W64jXQJfchfRKZa1j3ciGWmRpSfMp29gU2cphhg6Q7r8GFm6UYg1NfznkstXBmBgB4VSvd15pUjv5aYZXf91nVa",
  "key32": "4Pce1C5keYft2m1Cgij3YVJ6qCH3uaF6bZwcxT9NTWBx925J1kvxWCUYk6MBZLmpQE2x6qgJxHyYYSsKUed2dZkG",
  "key33": "mDXB5dE9EcTM4X2goNKeYd5cfwH81ugc9oJo7c7Dn8gGUxcT4rnNURqdsGwSzzMzJ7S7h7WEpDDDEfKeziEDL12",
  "key34": "3usz1314CwqbAuHbzQ2QVxfpeDJGPE4Zdxu6Q76eakEAy7WzmVYVyU5Br78sBkiKiWhStivwHdvXaSvsrscjfDmW",
  "key35": "5apHfRFNuxNZXTGj1sS7G5NAMB986fn86kTXd7C86HRLtMgd3uQNvLaTaJGYFUaFCZFB4jBqZ78gsR43bcTZ2SdH",
  "key36": "4KJKPArsbKeUJ7nsRBraqtcKAoSvXooJTcRQ1tja8NAjCG3PmrDcqXqkJPFETKaGmgm8kSB7Zw3pLrVbaZeFJuW5",
  "key37": "24XxUhPNZxPDQefHpypv6Fgve3wmf44bLQeAUxnC7sMmtT6vc6XT9bPyrUJen7UqhdcFRuU75FHgeLg6L3ysLNiY",
  "key38": "2TmExS5LveEuRGTsNnR3aiA2HpPDrxJ9tbZQvCHFLPgdAoSUbQr6rd6vui2rmptwCbVYEByXDkXCnA3xpUSb6r2y",
  "key39": "4tsNhwsoyKd8uxRv2vUfUjY495Kc1vwJVVD69ZEdfe1BD9XLJ5nfZew39ZazJ2yZjSH4BVahuGxZLkgLesP9zXLU",
  "key40": "2MeV6K53Aq4MpHmnXQndS9KPe1N1oSKg35kgU5cPiR2Dgnc6C1qddthPZUaQHE8N8zTDJts4YrWNDkWM8ojdo4Z2",
  "key41": "eKu4MzsMqZBsoeMsZmcMfWTxDwkDufXoJcMeqWacXyzqCJNHceUWmPmdDWhtUoKkH8FEXRtygEZJ2XWFb4iKqQ2"
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
