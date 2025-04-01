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
    "5DvUyDBKz81RkdvbeXqooj7q8DEjDcfwNkjRSni58tpKx3Wi4YmxSthrRxCR8tap5fRB9bUHkhkJr1WFTV5jPBPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ncRdMjrygRHCdfqUsjDw2cm3jZ63GUrwhLDNBBswiw4XqSiDbcZkMoN13bEjH3NrbdVZntHPmbwQrc9eyHCj1k",
  "key1": "4uyS81g5g4m2LxczsK59J2etTGj218sY5cSg2CjZ55eNCJJqX3VjbMye4pdgddKPTAfsaXQf1bVTpagqozW5Uybv",
  "key2": "59MQjZyFLB9JDzRVbnJKSZC5R9cDtCMps5KgvcPx9aoXZRBLrQvWSBc1uwUrf6Y6r1bjEjnAKf9pnJSzgA3o5b3q",
  "key3": "3JVsCbiPj46cP2QFAubdrW5zmQtXRN1xTC3WVnvgW2bEZXtnUfH7eojgDXy1zFjYW8hsnnRu8afhfsndKwGCoCLT",
  "key4": "2FkmWissn1wrjZovxKGdK4EMS6Mv76iRzcS8hD1vCWxjA2gaTVE9Rh8cS3sKaME9ZvKSG6VqNTuLxaR5w9vPu127",
  "key5": "29qFrN8Q23kHsayMp4sjpQTi4ZDko77TsXzY6SryENWx1h5rED6mfZgJzWJ2q48bvS98vLZidTNt1Nctvho3UWLU",
  "key6": "4bafPqPeHntwi21LqxxwbHgtACFr9EFUdUh5XcEJjPBdYS6kYaeJXCpm4VRf2LKfFGz7qMCXN1GH2dFYStCcbvtj",
  "key7": "4j7gXBy6tVuq751Xinhv92De5CSGgcbGdcJpzu4ZTCVVEANGmtgkqAtKR2eVPoB6XbXp1zxA4QsLnPUcV5Kz1P8K",
  "key8": "38h17x4AzddMqUzfo2ZCm7hKqQw8GN5NKQbP1Hdy5gY8NAiPWV5uDP4nQVJ9fzwp2s2C3ejorzapd3uyi4SGwnbP",
  "key9": "41LrC1wUXiNZGCnWe6JVSwDW9sp93sh13YCWcomBk8SLVdAnTtsuiaHLHzoS6unuTbKPbJu9tykLMpWxLZa62oFG",
  "key10": "5T2iWE6Bzeroaig437sYxg3m1WwcFpLaBTPChnxFLkfZp3k79d8fsyfpA3NJN5yYToGGLFj27ufaLEXzKadGrWMS",
  "key11": "4H6eWJtgeFXLZbud1FQWgz9Y1ok7xR8qUCrtK6rBPBuYNBsstDu3HQPwExn569EHb9YNowUFbPYCqJ5nXdUran7a",
  "key12": "3qADs9BKbL7pW1QMy2YrPjTMK8B5sUXzobE12k6p87kyV1ZwYkpRjviDa5FoQKq3B5XYPGcDATW568k4K3GZ36ba",
  "key13": "3iR8DNKKq1sTeN8HypNwGPtuKuVJSocKcp7xPEWbzSfSMpUshsubTSkRQrUiVSp8P3AYea96Hyyb85feTX2Bt5gs",
  "key14": "3WGePNJGz4g2TdquTgReCbiW51UPpxLFbtK8dr6UcN343cG2WuxqxxhhKwE1Ba4eokjut6VNdu6gWe8PPUuA4x3h",
  "key15": "4trztjs6YHunChpw3WurvMJ4mrScPLDdxQpyd5TUMfVL9MSchNpdoVvptXJfEyNBtA4fkAw1Svcx9Viz3AnDbBmo",
  "key16": "4XVWyHN7Q2A6YDSWgzVzeNgY9XEAqxDopv72DZyDZvtVqFMDSCWw9bYXYWNNuZH2nh87wyrJyxWyR9zTb4JHydAi",
  "key17": "4iGfcmSKBgXHViSzMJMAs7ECyqP4A523cEyjVr7Nmq6zU5girE4XiSUrffwWLBwRLjyBM9XaGyUwgRgifREHADc1",
  "key18": "2uAE35oEJfnyMXZMnrDhYyn9QqLVnv76Cjw677aVHATxMYxq6y22yVfxQseEjinxg9vkiVZTd51Ci9q6KRVRgJnm",
  "key19": "3jxhtc4sKQQAcgjLcYqTEAzosQd3b7yTrei4WRoDjDsgFycnhugCsqrDknyawjZgj5FmBDrzKDNZS67KDeF4dA8g",
  "key20": "2mgnc9y7ogySbXWPmGBLLaHwTU7Lxa8gqrnbfh6keqzXzHt3hr8si51zGgNPYsgE3KG5XjoaB6N1SchZSyYnqiYa",
  "key21": "9hatkuXSn34rbjvgrNPq8XY19bicU9LW5uQsHiVJMe741N6Kez5EVYWNemTMFKnpAoFoQ8sQSNLmYX43V21a39Y",
  "key22": "5U8YsYjRVAYK2sqQEpZ5C3XecKQudPmRTPGadRgCBp4Hn1pJwcX2UKEeeNSUroaaSnrMWDsNRbfqyJtMgFgFiioK",
  "key23": "5AYSVYXZTmx2k1BkP1T4X83DS2Duy2cgyEWadHNWpbgmTapFqzcp79jzxUgarEG82uyM5he2QzDXiYbLmkfNnLV3",
  "key24": "2MQdV7LRb7sdojRDQgrfiJy6FoqbeYYewrWEoY9b59kkxCXVbwMWtnP9VWKP4F7JAHJxF9R33Nwz7v5U72nYsvbw",
  "key25": "5Cy8J9ST4oi6wtvAAG4jWLJqGx3HmHEwgn9HGGeVd2XnTj8r2fpfRA799BU45MrD8ZkdBmMH93jVbLLiruYGK3Bg",
  "key26": "35vjKgdxfbRmr3hFRjyhFxwZqSYD41Dbh6eXig2EyFKpfTfGuUWR9d6MXW2gwJFLjeuLyhDAWQnWZ1pyWARXHudG",
  "key27": "WRcbXcDCex2ff94iB28mV31vh35Que2ZZnpEV5E2tWAZuD9ueaSVvGmjkK2GhzKNbK4t1aQvaLKXYRQa17Yxyip",
  "key28": "64q38YowYJkhwMnjZoazSuXkW2Qzv8AcQ54R8EgPMPrKGQhRv2cRE3vyC8UDXeWBW9fmrPcevhzyEnqD7YTvxvpd",
  "key29": "38r5c62QpnsdqFebtjfzrRNGgBR1QZWkCapPYciPLmwZ6Bjrq4vNLJFks6MZjAd3SfTV3GA6kAD7J38f43kZPD9D",
  "key30": "3YxvYWWm9NCNm2UYjzU2v8CHTa6KRNsgvsR8Cc6hvw9Sv1GEu19uL1kHab7u2DZkD5NYRFUwGQcVQUcs59bE2UFP",
  "key31": "593giy2pBmrj1hxak6Wk6ysb5G9xAzHfoVtJpjq1jFJ8JU32RpmRJtgCc9Zn4KuzUuvvXHFAhxczrHdjqKuDDNt6",
  "key32": "neEyoLsDcJE3aJZCcpXZYbiHHUaRc9WpDLSEfn8S6qKoqPgLyxSuepeqh6tiJhiXDQ3m4wvko4UtJb1WqRnDLbT",
  "key33": "2vVEPPs3ht8ad7dqYdugdLmrDKdYPdKK6tm1PRB2ebFmoCQu759DVGcgpG8KMCiJcQcR6eCfNxdNP9fjjDiAiT86",
  "key34": "24hFgkoiTEPJh96eJn6cQnkvAFXSJv6ADAAyLBQ3iip7giVEVbK78ZdSoXZPMvu35hQX2kGpmaRiUGCsv7zyj87h",
  "key35": "2yug4TmxbNwg22hDrAWbpmYynaUBTAPQ5xEaaTzjL6RDeNAYmMrwJmER4gya3yvQMe4fKBGHe1U8z16aeJg7QeDr",
  "key36": "5mL4JRmFP814W9SuPrZEyBh32p8qyRoX658LSDmhzhq5u8LRyPCRJngRvQ6C2mBj3h3p82gfbqktL2P9fsQ34RNe",
  "key37": "3xdoHzVQfEWTQZXxUaXeAe95B83RmfDwpDTvcN8f4aycfmjVTAaP5dGUBYWi5rXVPSMxVEAQ58AkzZoLnx42gLaF",
  "key38": "2rsiJX1r3FX9R8uextNRGyRdqDkVejpwcBCS6oiV1fevVVQBt2TYpYfP4ue52kcCAyKqXrm7agKYaDr8dVrf2ZiU",
  "key39": "rxe6Hhu6vnQSbmXdt31oKGvFGqDZhiU1wUQmqfHmZGhydd9GWyRgig6hjF55qFVZYvWYqWQRzLuXdxrAUsmLm4o",
  "key40": "5uKfpF58Y4xFiaxVv5m2uTh8bHWkhr9BerSP2UjV99oGrYSGPhgNRNEX8HRp76xKX1dGNEbF9ipDj1KsGakBezzN",
  "key41": "4gx4uukXc51CHc2rTDLPh9CkV3M8WhreoyEn5d9xNjfomtKsJxGrVThFVe5Pa4siNtP977frTCKc7kEXD9wY8C6Y",
  "key42": "bvQgs5J75uQpCLw99HdaoKCY2jpfmY3G4Wdt6QGrwXYjLFEALj9A6ycyaEfUcq4g9ZHAduTAF8aQFRpUo1aXaFa"
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
