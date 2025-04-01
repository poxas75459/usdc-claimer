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
    "3QHEJW39pACGTKHTY4BPBUrXmvkHdX3kWQQMu8sD7jpkxZUY1R5rexZCEUgvnCUYSTbKh4q3rBs9biFiRqNACnTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "618UaSmx1ZJtZDezpV8etzDLgx8556hXZy9f5qtwnSE4njsRjZfTtkPYoXMtJros2wnix9nSPBPJwMNwAfjgDMau",
  "key1": "5AqD9cwWeWspMF76F8PYZmF6hUTNmHZFfR28ZVqucMEUR3aSk2TGpGqeDiv1p5jXC22AVMu2XRLxPMspSH2H6wb5",
  "key2": "5uoyDU9SETewxgWpikK2o7FjGyA3QvhzuaMbH9nq7u6oozHBvezhpAsCmruRd7EMitvpLUwfRDQPDoKdFNPquRfk",
  "key3": "39PXVHca3koBwpLA2vmUcYuRYgYYvVzdEEQudKxwhUZxmd8722rSnUQHhLzS37bhMQ7WTxRHPcD7FwA2itBSDNsz",
  "key4": "5b2fKo4ZiHQWBPLDonogBtPAvqPMP9dSK5zixUSFBMap5msPtutRCruxRUFcmHGjD8BYBLbko6EpERHcznmgJCpv",
  "key5": "2F6BKuDfRHG1pDaz654hjVGacNSGBY2dM544x8yuWh1teeZoJVvfhRHRhe421o5rnVCboPEjoyDZv9adDjLH1JRB",
  "key6": "43v7trycVZuoRfNGshJv1TXtRN6dB6Qs1HaKMuQ9L9TyjCrjUXy4ENVEH2MJBxakXcBvsAa69fSsSjpfNzbLCVX8",
  "key7": "4T52NJsK1d8t364tvEVP6inhWG3ZxftUhXtH5ADE6pRgACFqk2UnzCiBkGBn2W4FbBFmdRRvf6xjTjXhNCmZP1Mu",
  "key8": "2VkHQVZ6hmMEQUKYE8efJ6gdRpeDMdRrtkLmpEPzx4kFFoXxK988upppfP9Atdsn5Ky2iG7D9vGSoSegQarNFsMu",
  "key9": "4TMAiYqmm5vHk5yqc8mxqrkJ4SgL6kzrmNpx8MV7XJG8Pm6b5ky2hwJLE68SfctQMXwzUbXXYivxG22XEnWtoHyS",
  "key10": "brdKocTytJHSrCQJ56dbMGJjgPpTZzfcQQp2nyBAWLFq1NQA9BWYRc9q7QAbAyEgpcaS3PqCRfcXfVWyvxWA4n7",
  "key11": "2TcmRviBriC6paWmsHYgQZR36yAfzwvXmPnMkd1mpywjAP6pruK71Ayok3qFMHjRW9LyyfGip6b88dACxBCWRkxm",
  "key12": "2wVLyiVPkMq4YFSSQsBuLqf3aMAyyFRRsuqrLXcxdMN5Vu1AmVhn7iR2gwuXUpeW4r35s8NiGx3JBUYzkwgmUpr6",
  "key13": "4And4kYtW1ZWU7VjUP3cAAkxqEXHntkgZXhe9gCDFhzAboRJEXXeDAKAfHQUPLW62v7EwKgvwNTFWzyL8U1PM5yh",
  "key14": "5j1va7BcEDA1xqaptUiG63KYa9HS2fKnfLe5EBWAvALWGetLsWe57K9VYFriNUTx3zavkFRVfCNwNtymRBQFi9dQ",
  "key15": "549cuJXwGyjA9sXkFxZj36ToCw3UssLdHz7YfStdkiu6e1ot76U2LaZWuVrH8TBqLuzToFR3DYmrzXcd3Sa4hgAz",
  "key16": "3WNM5jwGSRjCHDo6zddXFDoGrSmdGHpMjcbXAvwpDCZ1eGJNCgvi9EC7RpRxWyf3GTq6RczkuRG92jaWnC8fWvAV",
  "key17": "53YCdCbLtB9eQVb1ZttG7YK5gPiPCUhcCnJ9MbfPSPqgF3cQ9NbZDQQuSJfejsKgtLuFrksCwNw1WB8VGGxybDj8",
  "key18": "2qnfLynLDFZRo4GxUktt3Ped4vKQn2S5reHaPk1eUt6cpTcgJj3SFDj2rK2DKUiaHMvUbiBCx5suD3PFbfj8phDV",
  "key19": "5WYz5wzHpnLSXku2QHq6tBh6tcF2vhECRxmgrkKmU7fzbDXALeN9acnAg3RbBYTkPHLF4NSxK6NyZfinogwGfmFJ",
  "key20": "4W6qgB4YtfsnZnvvurWscdDSdy6dEyLa1Big1yVK31bKv8b9m4LqSDALECZnBScmSag2NX1hRRCkCAtsP3u8QEBz",
  "key21": "3NWKCnfJFekKFZTji4BJCYUzRwMSfSG9k9zqbJga78SfpPy3uibqX7Cwz8U9Kn4gbnRcxDHyLpNQ84qpA9WS4kSM",
  "key22": "xT1vDYFmeCG5BqHQW5Kn48XbbN7fMmjFMrPQ4iHEoGPiay1oBeLZyJbG3TKETEjjcTUypTBm41YMm3B9zyU4bGm",
  "key23": "122HeTagMi7CHvmsfsLTg2Sc53yS5TZiqWPhpQbJ5VZum6ZjVFsuWsnkkXV26SXbENH2Qropzq3ajBWUfdSaSWA7",
  "key24": "3cL8QykBRoBFgT8vk1P5SJjoU7KhSQeGwCWivf79q33R243vhJbmzc5aBqeVb1PSWhixqTue1yzLLDAzBSSiXE4c",
  "key25": "3PejFQ67sySoCEBHXDWBdfQy2QMrNaqHyEenoar5cfm6rsRB6KLqDtWDH8SNp5M93heeZXdK7oSbFfDW2V7EZiQz",
  "key26": "5ESKCopwi7nYrTxFSNak8Zc7gmveyFcAe2R6kZcE7n6y5hJHKX9qQAttMqrHuxyzwMTBW6WKu5zwBH4bqMbBdFmZ",
  "key27": "56nHE959SDzRZfd7LpdTXaGqZvmZFKqgCDuUA4Gbm8H7MEBx6TsQfG4QXhTC8MFRAj3iuTezQjidqYPLsYpJejSt",
  "key28": "4TRzFtoeUEiKTX4acGupJtb4mrDnfS8nDFPSU1PkNkzdizdoRW3Xki1eEBMpweNpoFCrFsx1i5xV59TRFxdSUJhr",
  "key29": "Ju9DNh56FJawXJQYfyqTdzp9jhbLDTSjdQBvMT89bDLziJysU2W9L9ph85ce755AUdbJEqDTHj8w875DoitXFku",
  "key30": "3MGn8nZAeeHEUtRqHD9gJxoiHkPsbNRi85fFdPaU9RBWzQLUb84BiGWsJbQKdgKWnGPA2QhnfCxVXrqHvuUBC6EC",
  "key31": "528kafG8ASFBcXeNafj6L9h9Lt3ZvrKq9sLwU8Zx8YLqYc663YFAHqB5oMsMsUBeFaTtMqPFS8vKyXHTUaSKj88a",
  "key32": "UfzgTuB4tRT7x2u9jMzmyDyWdsEw7HDKVq1rzTRrtp9ad5AEK1iQBt6cSwyNWEV9NX63nJWKPH2L5CEeM2NsxNo",
  "key33": "2cZnKTQcHFBM5z9mPpWa8EsdMFoJbeZz4eCZev6Kk8ijUGTkonpyrFL1Q5vLrwJ1hJUbDKdwBehgxbqK1mGgzLYA",
  "key34": "kxBiKecQHRDvCQ951pWoDKVgFwzBwqqGDVV5fcbJ1LsEeA769Wxkz9MpHXonzGTgwVt2uHJGpiUGTZML3ruRzMt",
  "key35": "5Mf9Ew5s6m6WULkAT6NuNj87Pn41Xn8pAiwT3tsDqiwaeLe1JUdnGRaJa2ChfTaf3QGkBLecAt7TCeZNweNDRx13",
  "key36": "RAQYSKmBUq7iiMZJ2wJ5P9cc1BTyEErN4acikyubZK6ea5UN82qtNARCJXbaapwCipQaWAQH6ATFcM1CWtgQgKa",
  "key37": "4n5U2jXAzVzNFV5WZeQjJPqstbRh6oWaYfaJb2YcgMHw48uRz1ZFWNeqVREeWoZycF9GAwL2gA72QhasGP7HdibE",
  "key38": "5wFkeh7K49aAEMywuhBUc4ZMbgv943RQbqwfwZGmsfogom2rtBNfrNFZQ46bHhxJ5FTKXYx1if2R4Zzb3jsaaA3x",
  "key39": "yDFG2Zq1oDJiVnPLtTsdtz4e5cscMD4JW79YYR45SyGXm7rEWJcPLczGry18eD3eMTk54hVViRidMTGHJRvfQt6",
  "key40": "57LkHTz8Ppczqygkerh9T63yBe61CxEtwKPQQPQPH2Aq6ScAYvKGXDKWN3auuHomDcTagsF4TECBUaR4G6Sncheg",
  "key41": "3MGPWkoEMtahdgNcWVHeKAShxpzgsJmHBWeVoC9kH8o5ofWSUyoa6we3vAP1dxLEMsSeSXygD3Q76EKngQNZo3fQ",
  "key42": "34BaNHSKHkmt52upBUgCKQdLjC69wZ4hCQGWfLL77YjNeotSVs6TYeFF5Wh7iS6LZdSb2WhMxX9QKrtGKP3MLQ5H",
  "key43": "FHnsReUu2HpyksQtxh3eh28y5bLfbioeyV8YSSo3qWnHMif1f78yqZpQKAN2sjMpnt5F1y9eyHBGai9MhWkdk5P"
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
