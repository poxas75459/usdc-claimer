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
    "4YF5jFspBMHFot9oTWDgKTY3TfQV6UXExgqxYC9AR2oQ6Tm3iNTm6UcyHThYt7GFetZVd9vKLoZWJio7egQH4Etw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bfRNpGaVSJAp26LrwdrnMSt11jcxQ8FRK47VvegYGPUJE3DBfDGs7b6vE6haesppNufp1pW6DL5dYWHNA4GtwBm",
  "key1": "3KDn3pr6TXBf4f819NGDqL3XLtmDDX8ubbCyYJtTfB51uY1J2E16jsLaDP4h1BXdxsuCiuLyEu94y8awV4aCSUik",
  "key2": "1zt51ccpR3LkEYnPTC5N98Jc2RptXGfv2Wjf3ZCCRZmjnQRmMHhgLMYfu7VVWxbRUg1Z8RXSxFfuy5qDzsk8BAj",
  "key3": "3oV9nH8WAuQnRQRTjYZRrbaVSsGQscQhEU8GTPzXixmqHAJWALjkuEu2MeUXYoVEyTfJu6Qt62sXzcdek5fhDEDC",
  "key4": "zRTiK5SE72ara74tSJQAmAa72kqjGDNWy8WaMtQKgP88Yod8tgudLbG8D47e7RGc8gMjfbt2CtjTHiJMSV1Prmq",
  "key5": "4y3EVSuDWRhhRQB3RmQNWPVZfws1Qkqt5coeoPMTDgoE8NkAFg1KwnSrZaBNMYMyc27kuJdbvEeZFsPDUWWwekE7",
  "key6": "5dznijhbhF98KNKyMoBiozZfuViQn9Bw2bwhJfitjUs4uunnCGWbNnNy9J2dZvfJxFmZQusYNDiZ8Sh92hiW8qJY",
  "key7": "5aRfpW2UArWyyHWGtLw7uqt1SWyTHqeWoyR16TpYi9piX4y72KAEg4wpi9t3st7cuGDaa9oFqGQorHnCXqb2pa9X",
  "key8": "Jns5Uc76QCbEMVWYSzuu8jMc6X9tcyiV8EC7REWiBxUgEuYGTkuNA7vQSNggMnGYtdMc7X25P1qjPAfMNjSc2He",
  "key9": "5ezYGrzSPCjfRjuLkA3RwCxHtoQAs51mV6PvcVesqEswfF1NDEQ1JHZGGSNkLtucsN2w318N87zpGFchms39NHBR",
  "key10": "qtbXonY1cEkYqRi2BMVvsnJyAqxZbGtMwsXVpsZvQhh5vcfffGEd7F8pxePQp96NBr28XkY39dpzWK8HGtTfGiD",
  "key11": "3rgjoutZL2YoMvdv4pDaHG7qxPDUTgPS213U4CeChL5J3HTtmKtRFiYeReDGjiB2mS7Y99RHwAMhBTub2xPYm8A8",
  "key12": "33qSrvRDDNaSUZnDQuNWnxGJKdD7zU9PNeGEoNE9BFfv7HfrPcCsERRYuDxqL7xVxmCbwrQLHdukHoHFjswNmJvB",
  "key13": "55fbir1NKnpFJqrXHWcrUfGXXdoL1DWNqJr7QGfkpzjMaTezpBQP19JHjYByCerC3akABceEffSQ7TSGMVtZbUGz",
  "key14": "3QvuEk8z3boMgRNKySQYKW4gLqBEdbcW2D7pi7JaDSqZFYoo6mGYmX8wFENJJGsNqSJpbQvukARhZrDmbaZ1TQvv",
  "key15": "MLTjai8Vc3TAszNg1rB4t59fKUmaDymewuycWFRadtciei5VUCgUkSntmrtbvoztajMzk8vqXusdgS4R69nLv9z",
  "key16": "rjg4t6WopsygF2JoJRRrkzbDdfrGThngNnbq5eNTGi6bwj5N7nbvXjs2pobuswfxMc4YB8SomPdnqivPYCsy15b",
  "key17": "2amQUaR9uBTiaPMR3voGxe1eM7R2U5st3UbFAep22LpSKQskaJ2JWvfZAX52dXzZLj4VLNML3inStqVSVKi5RKFn",
  "key18": "5nciH4JqWV8je97NKY92oHjizHpTXWdrJhgrjmZTQHUE4Bw3TUZLfiPjFLstME1jPB5xfWNPsfpd5CMzKR351Fo3",
  "key19": "WGadqAonyxw35pQJePfQacxFk9cxigvo4f1toQMmBhfyg5Rf5XMWMsFsv9eStLaTMh5ygGNxHaP2zViJMZRg1wC",
  "key20": "5brVYYePmGFBnxtD8B6WQBr7Vi3zNdFM93LEFMPbAqiMVXXk7psFaZcVdiTmyP2EZq2K18E5q7BPMH3USxeL5vQA",
  "key21": "5M79htKNNEaiQzMzi2dn5izMWmnVWcdWhjv5L564vJAVrfa69ppUKTDseFxW3r6HjEX1FQuvq7GFQmCs1BtbMoFX",
  "key22": "5YFDt7qutwyrrY5o9Ag5fPoURcj7SykE9Ft9pXnYhaZHrWFLLTd8PLFaiuueN5VzFXbDPuSgYiTLCuysecgsAj5T",
  "key23": "3tc32q3rrZzhyKrRxrT8pzuTaJveEU2hcuZN9fx7aw2WzpKyzejp3twHHdye2HMhS4wp7dbNsjTm6MhFuUJe8Rz2",
  "key24": "24JL5dJufJnCbymrbbiL9vE8pYW5on64SpGPX9FHhMtDRpwsaqzaaBDjgMvSUnjzjt258UCrFb2DiK74scvYyrhu",
  "key25": "5RkqwkyvYrKrTSNqf6UB5QDjWLu8ns32xJPFQHidgf6H3xbHhTV8icWitbCHYP69cPf3yu6edEuhWom9nPsm9HzR",
  "key26": "LNW8hfKuLRmRsGGiLHW136eoWhLxZkR9hgKKi5u1FpTaxpPNjBeYLjyEPSgAL6XUMJ1ftEemjgZpwYN8fQQJyhP",
  "key27": "5vYZrDRup8MJB9nrn2wNE54oe3ZKW8EBXu7N2WxVrGuj357TvwYoVhafSaYh1JBfECw1JcSyA4EWPaB8BmikcaW5",
  "key28": "3mezeELT2xeax1ecmPxbNDgeFdhPFzG5PXkjp9H8UYZ4NrRY3v89tVYQK8Luh1YA1suLj1B5G13xJzGR25ECBkSs",
  "key29": "5oo1iVAXAyBk78yVbSnA8HVjZ5C88nHbWZGADffkn6JtsPf3y9f5EFPfCScuiQ5zv9CGo9KswwET4Ny7WF21xKZS",
  "key30": "EcwBDBmaidrFU4d84kUtyD43VhYC1FM3NMuFkSNrXY7Du4zAof88rfxD5ULtSt7oKt2wo7CriC1o6jvEecfT5Fh",
  "key31": "5pz6F6EQCgQG4HiujL1wNkQXzGRjx1syvSDzQ7Vw4LDXGRBvXZ24Gha7iqMUZH9CuQkonKP7mXKVEspJjS9JTdx8",
  "key32": "4TGaGFftu5PGSBmNzyyS3EQt7dJ5eNVqhGtiWqh3ZcbmoHJnq56zHDayE1jqki8tjBBzbauZwyy8gPSmW4jenXTu",
  "key33": "5NRV5PM8RGAieVPYLCLSneYgEfmKyLb4YkC2qAfs6H5gf9s8FiQGS5A5CpFN8bmi6oV972juMhotbCyzSTibVGmb",
  "key34": "2k5C7MWdkqBUkdkAbER6vMESL2uXDsCes1y4nEQZBjoCztbXELeD5WkBVpSTMKX3L9uHr99iN44WmQBSmcJRoiis",
  "key35": "472GQtBLai4SPisqF5FQaghZDJo1cdUpnn3BT8GV3SSbENKdhacJZT5dHfJSmgdP7Fj3JPrNe7cmCU2upVnZWHg3",
  "key36": "3ME4PArGtgspvqskYDzyvMbYfzneR7rvz7j5Ek4tpJvZk6hj1K2akNaCUP8be2aTDnpfmqzHvCE3PQjYeAWra6wZ",
  "key37": "em8b2M4HQFh8Bekxb1YAXLHJLJT1TGyfQ6kknKYifJUJZ8pd3JnXqREoKz4mZFPufEePTUGD2krqXdo1kScM9bD",
  "key38": "5uGM9TCAKooNT5Dz6aNdY1UgDYceCgr1AERhYFZfvxpEKJRnv99VuAcFTCkTMAA3ZZJtX5AL3TcEvxZzV1j9jtyH",
  "key39": "K96Pcw8G3ERhGqCvXejn4uBH7J9H8sicohTVmsDpFdsYYE92pNedHKS7XzxsoYkG4RqPYgB9EGXj5qojTpcrEhg",
  "key40": "sPmWS7vq3AnSoXW8Y2ELetwomPcDKRQEGGS4r5NC9GyKAWvRuLYszwUDS6AG9mxXDrf9hkUDeaK4zk28C5H48hE",
  "key41": "gs3HGQTjeF7xcXheD4fLQMHmEFngg1Qd7fFSwhFxKPdMsHc2mWpjXaFyUghP9H62bSe752JJfXKoER8uEtQbqfs",
  "key42": "5JYpofuFcaoGZC39YmE9eZ6XPhBMxR6fgNx4KCbehMu5L87u9QBbktEpWqgjh97got4YMZMeoGjoFVd9dVa9PXMD",
  "key43": "2fwtebnQWHBUyjKXCReVz4BPAXgPezmzpHt79GRKqtPirbdE2oRAm2fEfaNTmQtUpTArhWJ3JUmmJZwScpwxooha",
  "key44": "3bN1ctTJNBXmozDkiw9mVWJZDXW3YKMF5QhD1uM4pa69FJbMEkJyAPYc1Mj3UYeabD48EADZPWQQAPSACgrdSMYc",
  "key45": "553ZJhTwTVQ5wxzwzq5wtbQsXddpXf3m8nhRHqruxnnm8bmAde2PrRh4bTt4xUTkWoU8sV56N7Bf4fHAwWZReYod",
  "key46": "4wFahgSpXWfigRy3Sj9bTmJoZ5xhQGtHwtPR4FaPxxtSfFg3LDDTa4oAKogxekiNC2ipYTXBMZVQcxBJjpfbs899"
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
