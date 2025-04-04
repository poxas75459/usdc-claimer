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
    "2ttsCDUBE5U2QXRPVuCVNq1GSzjqCpuzVkHgE9DMTfyL198nKZCEjo6cZTkh2o5UnvZkc66bn9VtDbLQ47CvgFCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VPVoUuoXHT6Maoaq4aGKLJQ96vSqRJ7yMWxNix5Q6cqWT7mrzaUiZVhVdkETqWKEuWQdhGkjfx7HwQKqb4JK7EU",
  "key1": "9QVRDp54j9f2rBzYnQ2QC4KBhJeA2djo4USeqWNdmFMfYE1rdjgchKRP659exkXsmaqaj4XoqXPrHZu2X2c6BK3",
  "key2": "EXsE9RM7cogJtyF84HXfT78ZVhhBEHWhQqiJgXst667855UDmADVghAPgn5q5VDkna9sDh3VpDizfqyCeCfSHCz",
  "key3": "2ZxW3CnzZijghBdAnof8yQGoY9hf42EahuTFe2X4pTpwdwQYEBZzdB4FQ1AtUWPnCh483KMFbZuPEuQRi5qfBQBJ",
  "key4": "4dvKYBFBtFgnTZm4HZgA3eWN9xXbHLyRmSJJj34X1yfEoxGHn7io1B5mtGbg2W58Ckbx5dzrnAPBJE86BvAU5kiG",
  "key5": "5BfwE2MQiuf2VTyJQT1A1TZPBY92349uHDKgztS3BRguP9r3ewX6tEBBSdHyMygQ3WD6PMwTred8ywZ3ARDjUNS",
  "key6": "YgXczqSeBKKycMYPj5hCFdV8naPHD8LW674swJFDcciSpiWYfieaqsa992rUhitNqLX8RvFAhb2pojNdC1xBgrz",
  "key7": "3b3Jd3H7m3LLbCy8xJRdahDVdMjqU2wuBpBpRZsRq9NN2R3xAmJTEnnqXAqfLFcarRVyvBJqA7CzwfUPdu3Y9YbG",
  "key8": "5h2DegYEyc1FtRZ7XNnmhzGeK9JUfoFG22K9cP59LQEoNvEE2BSc7V4TkELwsRHgW8PDbXwBU6JgzCGpu7Qd1qJX",
  "key9": "3hnVKkz7SMW6VJcz8TotMPyqikkYWHi3ifhdUMmpJwFAkjbLxivEtjkPuiX5JXop6JC7BFVY4RAi7sPgudF5Jztd",
  "key10": "k6QHuQ98sJVvMrJsrZTBrLu5AZJxYL1QjriTAL4o4r97EZinAzxD9R2AC9SK8MbWHJZgfCH9Tcpicj1GjDp4tbd",
  "key11": "4Z9NndUkbzusEtWj3RoD1kPNaM3fCRuFvPgocCW5VizS8jxAsS9fDPWN7kH5iTm4CNGdnKxvRzjcFW6y5rJ2PJJV",
  "key12": "3Y94TVreUAKBsCypBTwwMF4TCfXP3CWafmUw9FGSVb84iBu38JMJ6ehdAG4FfUxVKE3hztWVhxqx8Jo8iJtXjNYc",
  "key13": "2rLMCNgPctkN5NwUyuieRL4DyGHiYYKXhXurjs67AVFHKjkdVLqnUVHPxL4kPEwTxq5sWEZYUqjoPKTmpTbX2WDT",
  "key14": "2vjZbPHRoe7XPtA1vyaRbobQcFWtdQ56v4Hqt4dzZ4pGmt2YqGqKEYnkYSqL4Zfx9hq4WFkprZH8VnuyYR7mJCaN",
  "key15": "5NmS3nZoF8R5ivnx19CX5TzKfg4Ne59XBh5V1jg92eezsb84uCfhdZcjScVZoKpA58zVrfRmSqyebkZ8Ukj7XPRz",
  "key16": "5mfpLtAudz75cWcRJDULiiDT5FngC4GppN9i5GATxymJrnQ3rjBZSWWn3knK3PMBjHaFCmz5YT7d1782FhmRTSgM",
  "key17": "79pTRo2BWnu5F8c53eBqDvA3gN3aguN84kJArr5XcAYfpYy1QXyJjrZ82PsWAXYB6zKj4JzbrBGHVSabXz3BTNs",
  "key18": "4PCNjdk1abupy2wQFsQ7XJogFtjgWSQMmAnDQg7vTejPSasxzjU361frtk81f993XYqPWLyRQcngE8eE8W7KVeFm",
  "key19": "sK39JACeGe85P6pjTtj7UZxWqYK7tVcLERwZtTGRzVHAgw84dUhqy1t6gKdwP5LGMsj1hoUNW1gWRY98DNFcrE1",
  "key20": "xFXGupwxyZJ3xvn7FRxg27BUaUF5J9DqiqPSekshjhRe97CD9kfBtgseH5qtHrnArMjriVw5N2NCUGvqCBe7Uda",
  "key21": "5MDwzqG7N31R3dngNy3dbowu328ftyPXmmkqFCptakJee1TbfDHnCNeE4L6tMBJrxU4suEJxhDTZRMei6o9xVmJC",
  "key22": "KrGwmpjUQbySr2eGNgbm8uCrDMyCa2gEtep7tCMWwkeBAUKXW7rdUaBR8ERf63ACqSUAcEdsPDY1Zwf12gwkctn",
  "key23": "2EHRz1qnnxBLMAmJt3yTub3eNrTHZ75Khn1dhErbzf2WtKtVZAEUTgHobNjMPgjq8S59TRLouhUTeTniuJgHxAzq",
  "key24": "4KWB7jy8yTgyrZ7WRUXSg7fxufzF6t8CUX2jNJenksi6ttZXAz7foXoqyt257u7tyuVwWBKeJj79R4cUJrX8fhzE",
  "key25": "5zJ58hgCiGh1EjpNRWhCBNmCYZBZwRwMnguXGQQByBY2LMzKsePJJfbgzKpJcUMBjZ59KrRx2Qb6wew7jNDkyvRp",
  "key26": "57pgDNrN3swi57qaLfw95kUytuWFDieng23obiRNjNXRDtk7BsJaqn2ikBha7djLCrQQ9jJsMfdSeXjffXBwmDLm",
  "key27": "t6JhW5gJSBhZRXs28VcDF7mYA8uHaZZtysAkTrAYJXu2WHSrr5UthJqhCtVihE2GVs6jwNzSHSAxsDAoP9qez16",
  "key28": "9gZJ69M536bg4Abtq98rZDY6okiBUHv5X54KcS4wUKkz3LbFRctq9nZ18j53d2cwdyNyQR5KNSJ7DMCe51yiG6b",
  "key29": "3JsiW5fX8QfUcyEaDTdHSjXkiAyfYPvfrMBY3D3cdaU3Hfr9ViBm5sCw12iBGBakhsMHhSBhBG3ATsttbyw1R2BW",
  "key30": "2iUKzLJARq6GkWB1YsQ5Vst3UV9HZJsLhkwFiTaDzREBcRS2ceSM71NVJ7Voe1fmy4xEtEGMRDjt5wu9nLSC3HaQ",
  "key31": "3bqv2oXuDk57YHJYyaDVb8oDe77uDA8GMjePkE1TFaRoiPVbnNAy6uSpUaga5QGZQHf4HAXrH8tnMibMmsVYRMsB",
  "key32": "3hjnpnCFc2UgXUAYDn5nhZKuwVT9JD11xwXoRYUTTJFmxwmTcgV5G1TZwfdCZ51PecydwRTTdA28EKcGNtNMpXtL",
  "key33": "SwC93KyBMmktn4kyHfMQcaBxgDH42tqeWqdT4cCcnz5n22sSWo6MP7a5rfX8tkVw9kpZveWz1tKt9yQ1ogdmX4y",
  "key34": "58NsF2Ms4QGcKAHiszZ6DbvxHtjAkGcHBj7ycGBPy2dph4Fb4xZZedTcwpumvNbKNkJMkgjbchZpsinNUE4beccZ",
  "key35": "3XqDSLKcatQ5iz1cqMxQMYpbexfb1RE1nVDcu8jrUu8gm5EFwqLiXdqydyWAr5jbphLLPbSNQAmJZ55Ar6epbLEr",
  "key36": "2jizMZDjBcYNTa6y7wnSuPDPraKv3mr33nYPmKjuy9HPt2f1abYaVQ3yLpYaNxACZCV2MSXFh9d1Le21xYhb6PZH",
  "key37": "5e7HbAufw1ifRAVU4oZW6GnEiPy7Fi3JUQHEjxvQ6oKmqKZJjqNXLjqQrEQ6VB4xrQ3dV3jGhThr3VDqJT4nJ3zD",
  "key38": "ehFyT7ickzRXjY6tyj2pw53AS4cUnTWCnA8MjNcRiABUCYXJanPVRSjM3DoHuvkDCAtAnsTt9xrDSWRLYHKJeu7",
  "key39": "4bvKMsDftJjm1ngsXAep6qWFDzddgscWkN7mUoykZWBYWtrjriA6wkTuTfozdMvC37Wxc82Lj57WPesqc4xkTtUU",
  "key40": "4J1hv57mEgmP37dgoKnFQJmhRZfo3QpxjZiCg4CmJhJ56pbTu3t4FCvJZq9eRcWa65HXbakSnqczStnZx9K51ZeJ",
  "key41": "4prhqRjCqKXjihjm3qG5qTznFrsF8UQb777AztpH1iH1gRxD694raD3S4GmcwmKuesDnNukRaGZpgWHdHDFtoPpU",
  "key42": "3V9d2U6qo4dTDmJZAReHedRyv5PrED1KyE25WQKHQ1YLVvPGNA6Zbz5LmaPdAtNoMM9LCDAeiqpZoZpS5jZYHBht"
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
