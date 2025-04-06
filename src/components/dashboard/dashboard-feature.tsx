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
    "5NEL6ihbt2BbGVGHuZcTKHDPW59Kuwe17B4Napm1Mnfo5XCJmkUFpoS5g5uunghcrB13oKDew2HpsbripSNSEenX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R1FEwdnGMjVvDGFq5qYh6MGvWeJtxq68KBPMjPANKdh6kDbfSfJQ9wPTtSUr57LS9SaFtfo967EhqXfJecs8GiD",
  "key1": "2xJAFea1dcM7PZp9U2ycRgPmSA8g1D5wkJFxgNTMywoa3Qn83easFzJSZe42FZ2UUPcgj4UGV6h2WMoTo7GamDf8",
  "key2": "3vKwqq1ikdMoY1eWd967w8XwrqodYiyFK47bC54xNSyzM2g1tB2RtYXpZ8LPzLPY7WJsHuHWgXeViPUriRjG3Qwx",
  "key3": "4bapyTWEw6XwCjjhfGLoM3RoHphWxyKmBgKGms58MHL7LjWzcKWksmSoG4ty5gjY8uW2P9ryFz5f5Q4UtuZjyog6",
  "key4": "53rud635gySF1kQzMUfat91c2r5zm8YofmoPqh96VB82MrVxogbFthJcQQPb57kstPGJURvS3L95TUGxvGTCtJGj",
  "key5": "2xgizHVBMT9RoS3nmJctsSNszPrAxLAtXwxVGcPhH85jgYVD6L8avJxUu8SFBN3rdY8Yj7GQcjdvaUiG6W1CWtPp",
  "key6": "2pd2BAZA9W1iwv58r1iRxuzZXJdFA4HuhBj7nRtyjena2KFDGnWxXesFf478CA1Hqh4oH7zy3Vomk5rjkXWjuyzS",
  "key7": "4xuEMkiRdhC17b62mrrF2X2LqFqR3P6gJhhBCoVZt4xHtRzcvwuvcA78YDUdfjSC31iFYvWRCDQaqXtkBmWMTrQy",
  "key8": "4e24VYQ5YujeXuZejy1bjp2YYckMDf9nkcr5uWuMvbmNdEV7TTBaJcgeaPHLFcqcgKERwh8vnamkUKts7ntkAs7L",
  "key9": "5AizzntQnzALbZcHvBtPobygTbVSeTHB9v2mR61j1vuscWnpmt5HAybzkKdBttSeh2BCt4MhaJcbuUpypPSFsC2X",
  "key10": "5qSoidQLQxm8fH5Z6Hp8NvJeGRqE4Eh2BCg6oBajWaDpDQEKSGXEC73nra7rHJVZ4EC4QYDASgS2XBp2j7UKWnGj",
  "key11": "5LPTh4kmoPAbdE8VgucSyKnFM9nBKyKdHexw5w84oyEFcQK1mxdrrBSQDH6snPEVXCWpUywicnqkgchhJFzKY2Cw",
  "key12": "52ZxjKUMHGvhng1KrWeTy6B1ZibuXRfKqM8PMxWHrXv6aAK8T4s9dZCmXf5d7b4p41Quqiu8a4ZiyovHZiq3bFCr",
  "key13": "Xx3kDspm3T66onZ9rnrtV4bHWRsXYdGMup5DDpuXuTsg9Viecp4qnLzkvfwHRUstmiYLscJDtExPU4s6Wg9g1Hw",
  "key14": "5BHvgcTGLThNAK7qAsVGYir3unNfNyujAFKBuWCARYhcpLCrM4dMS7v7Yb2pirVZAQgfMrQpUiBkAHqxMyU3SuQ6",
  "key15": "2REd2XZfVG1k65M9qbYjemmP1Gaejw36oxgbgZPahyFr1uzjgtLGBmxqVWBs6BJoMQERScq7Zw9yA8gMuMSPx74d",
  "key16": "4TGLKmPkwk9EhsGFHMB6ZU1Ni9HxwSksWoCmKMqDKCuUZAX17JoANubfm3FNE3Zyf2S7XwAJQMx6rpKWpox9gBTA",
  "key17": "46RXTvJkpmpTCEnkNU1groLNsLXwCca3YRfPkUPc28kc85kUuQM6hLWXdWANQtoBEbTDN4Gqd2yLoXXqraAN59Vy",
  "key18": "2LSeB6EEMXs8Myh33ZCJvQ1w9wdmypDcZzxM3KDq9wtMsYEd4GVRbUhe88H5cTsqs95Dzk6Zio7eGLDTtVfny9Hn",
  "key19": "3EJs6hNLBnQw2h13TNpMP4jU9hGaQWE4CQuz5yWNBcq2nLyRzgivLdRPvEB1FAcxWCaTCXYXL3HARusEyqwHWLVT",
  "key20": "3czfu5BBEPtShy8a2UffAXoRCqDgqFBQZqyn8BpYs2ptAy96YQup12eoQosPuEqHdqqRM5BB72dCQNnpi8fXhg8b",
  "key21": "NFGxDkBTm4XZApnmnKRjZKcUqH49LBpgYpqEDzogt6BWRsdM7MEKyt7bXWiQbqx8Y36mG4UBvVfKigA5rJfQXjJ",
  "key22": "3UfHFF65M6tcs38oFNFN8pocVugcs64ZTCMNC96HaHRggiFLxmfPNtGnTE1kimRACuT1v3emzBtbhqTafQsJro2V",
  "key23": "4YUEsLBgHQ78KQ12ousvT6jn8MuANtJxnZSxnJ3UxwreSBiKiQn24eieXtXgPzheR3kW9J2qe6DYwHP5HFsd5NUF",
  "key24": "4PQ3MxvCaxNJD2aELuHdRTvXMnqLR8NbuGPZvoSMq3bWDckbBz2gsWdtboG4m3tKh19M9heFbjco2VaHfRFhE9Hz",
  "key25": "4p4FonoM9PZyRnPsJ8sh3dspowovJSBbYoNS9FEgUgS1MMbkaGMiTafsR5VGny3TNYHcV5LwppNqFCPQttG2nyag",
  "key26": "5isNQE3wozSkyqY1ByzHU7eTkyyhTK1h5boWiUgVPTD9mj8TDFyc3a1zPNLgypFdh4dwTd8HebpTHWhrZPptTcCj",
  "key27": "4Q9pQbWvFQmWK9pwj1DmT19oN3bysKJGRQdWCmn3QwjUsQLSvKS9avA5vACQECAmuCERdkkYCEHHEfCBEzM5jfVk",
  "key28": "dniUehRYwmsmNqyNhJx5sTSr2YoQSgivJL5oA4reUrjVpmkSDj7UaAidzsDFkA2qr2h88htzrGQ84HdT3CuYCcE",
  "key29": "2ky1x2WZ6wrRUuqb8NB1X6itaqDeNHQLYy52R9Voo7UDMNVBqCPBJ9XTkrMyWxiXPyTr3hCvCefJor5DHNRc8Xwm",
  "key30": "63jon3fXBfW3AsuAidWHtGnxBYhwpekHqrENFJH4QtSRyQ6mFGwEdDBRnvxrMmNge6Fto259ohfWWcWJtg9xMgc6",
  "key31": "4YuGAQr9xp3DHtrHhc76RCJXxJ91Rp164QCLX2mVoZMY8NN9qAUNqkwCj5m1bY84AeACxfD9XV4xWjudJCUL7u7F",
  "key32": "hozgMHv6YaUv371S5U9Y52hE63kjFPV2Xc2EqJxtsHU8m859rYZx3nc84uZrhEQthAheffeCxSCt5B92s6wjwc3",
  "key33": "32LR2Kt2rZLFfzvaMTe6kVwvg57PRaBd2RchCgjKKbot8N6wK63Eii9JePRd1YciF8xJ24eiP3wMP6b2JJ9pFtqZ",
  "key34": "5zVGT4Q9pdhhVryNoygeLCAHKr9T1dP8qDZTmr4BQDT6hj8dvFJ7UmSyqjoe3vTTgW1uWT8z5VzSHoYcv6uYLfpR",
  "key35": "5iZyiddnMwgg9YWe4eWuVVfmRBZyK4x39kdniDwMZUAnmWYdgCdncLbvQX9vZeqMY3xQafw2ytbpmaBnLHxoTpxE",
  "key36": "2aVL5VvMB2CxFcokvdXMqcgwgKExJ7HzmhZV5AVe74XkF32iSgVp4V6pWELEyTZofaJ45o97x7ncgPmrG3bcqnMv",
  "key37": "GK67qQhKsFWD4ewSVL6Y4rNBxXwC36SCZ1Wh5vn5WVtooa7CnB99MvAE9mvWFLqEQJe64DoS1uWahnzQo5hoYJZ",
  "key38": "5EPdoAQbBdnx2dPgrmNidsCp26J2b9GgJGnqZ56tagZo9XJHwTWsfnZZY2co3XxcBcE7z8ukPaef8AapedZD8AQE",
  "key39": "3Vyye7LSbr422R5NG1R23XNfjKcvo4ntX8okUuJAhsU84YkSRYZetNgj5V7tsfw6Q5aMQnyp72iyPHNZ2S23jmaA",
  "key40": "4199oPyCdecAkkHJbCR6Lr3EXtDdVQP7rLpqqRCetZNGnKQyHmkaej2SgwvFgbN282xfojNCHkDaRF2NDwwcw8ro",
  "key41": "24xSWpgtvFXA2CFguKMnsWpRnBcALNqRHt5HFdYFQ3tVcPP1LiUkNJ5ecRYEdzZQQ8GyQy4U8JSbbyV3UKCGevCH",
  "key42": "4GT7SYXZh3deHEGUe68z3U849Gb37rd7w8AUG68mQ87m1oYCSabfJcbgVMZMBxUjs8egPhxPi4DriaaoGhszBUyq",
  "key43": "4etvvN2d78XFrfxTRXyMAp6QK8ivBaQT4LojYvME8Xrr8CMWEbBUrCdT3UdN1SMfLxAW7mPUZs3LttR5rXgaXD9r",
  "key44": "5kL4FER1YmLofPNdoVdnriA4PmvSK5jvVGnA9Rgmhqbxjxm6hAssLgWN3LeXAwLZ5NBpUJHSCPE7WgMTrVaMPjmz"
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
