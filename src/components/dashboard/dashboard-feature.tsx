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
    "2GAs3rLn8pYVhJErn6PZHxNGuP7eqLvfRY7gstXqcfXDBEDnxsLL7w8ZxRr5RSByq5djJ3yBnyz8KvxNaFdcmNVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eoXrUS6inAUkXGoD7hs6WK5n2qev3hrZowuqAAu8X8EPdHPziQoJQ8yBo7VKSWT9ot1ehJuDUuQQo5gD4u9YBY9",
  "key1": "2jQQihjixn51jqCWoyUzFVFXVJLpk1F9K4XXB8Y42dmfpqJko8mQZB3yPSaKRQPiqhmRMsUvUKEG4fCP7tWxDZE",
  "key2": "4JAF5jyBZqYF4gP2F7av34eFxXqp7ER4qCTrtn7LaD8aVNA98xju6UzgDwYYeYCu18A25GAZLMJHiMSozGMn4v9v",
  "key3": "4GpvZa6fUpL1dTYgSzss35pQsk1d6ygDaT9nvvx8wBvMwDAb4KfRa8SqiC6y7GLVPkqYmoaCrEg23RzJUL7r1g9R",
  "key4": "5DJDefiWjruSZrrq5MLpHs2HQK9ShpfwZqEQP9EpLe2S69sJCTYofN8ydb2iyKnyszferJ3jXgyJaFjfBGdWW8fF",
  "key5": "2YvbQHFJJ6BAcFJV3dEbTn3C62NQM2vm8YyQbeM8CGKmQPyPzybvfvgcAuTDJnhHjVKYBXfM3MtccHubXong8tMF",
  "key6": "5kbimivqB3iCRqsCCBzRSkKc1nxe9B74oGh4hKffhkXnqFmZAMaED75e9TDUmuRDJnEUeBduQv8muGHGZvkSD7Y5",
  "key7": "2hQx5jPqEjDRTkxEQdSijHnSKA8CNiMQtd75y6sYFDP93U9rYygkdj5JzDcRiuKMKX1E5n6EyM3umqky5XKvKy6D",
  "key8": "2pMHTJzeGDUVoi9NXRQ74Hr2dZngh1m2rXeXrrtjQZDcn38hLXc8Lh29fV6EcDqVq8sDk6mxm7XcFftjv499ynry",
  "key9": "VcEnqBycbxLjh8yTr88waArp71vCYJEVAgc4cSgYV5JCwESy5eXEMemvY9as4ZGYCM5gkY4E7iMgijZ13AXU6Qe",
  "key10": "5qqGXk569i4JmhhJ6hd8nisLUnS1n4ofm8QCVxVbEiUcpY4LFf2pg2Ef6J5VuCsWHyCqLDauHgPRtvjvndk95SJH",
  "key11": "5F3jaxd22hGgXNajnuzMVeSm1xxnY4SyEhRnj2855rWCD7Y5y4Xi9vUYxhaMk72HhyLVoMYR2XNaA7gVBTHDXKZG",
  "key12": "4Lv31NHuK7HVQSNE7TuQBiLX52RMpAps7BDNET22QA9ookYoA35v671dSWVRMhBoia9v4EpvKtidPJWCsxKsK6QB",
  "key13": "pMrZGnLyx1LLg2CAn7K2TpzWRFUcuWuHZSGwyVKqgcecpBmUxtcJ7uHBkvv1WfdgUi5gtLmf31BmdZJybo1Da56",
  "key14": "3Jh8FxUeNYiYqmtN7Q9jeEGB1BJfcj5EE6oN45ooegFQaQgWNp8i9nEEDoTykcnLqRUPLarHz2kXiwhG3au2gpnk",
  "key15": "3QcGWmyBjN8KvdNCjRUtT3EUMi5YPQ7CFBkATaNBXHT57XScBm9rKeFefZeNCiqKMe34egA6uuxUo3WkJumxkiRA",
  "key16": "5staTGAYSXCsB9TCCT6bf5XUAwqM8XEj2cPe71RWbyYw4AeSJfphhK8Dp4YWTGDEA8xAb9DEVG6xsZB15DrAHBwg",
  "key17": "5GXbBkhZTAG2wFGjJNiNu8Y1sPV6W6sC6pt36UNiAwHYVJA9uskcbQSGPpxProGLvok9Tk1LhQTv6S1yEPPkzuEK",
  "key18": "4TunaaHzimC1iXd8ucdC7LqcNte7LoHMLW7pfVZJ8sFuCqt9t6bUri6o4XLzsNRktiyNeYqoRnGpihtprefMd7ki",
  "key19": "4hqmSmVyfeTvyXB7H6rrkkYyCBP1MbPh84GS4dGEf5UxALcERPgC96cCQSerPzQjDsPch8kEoKEMhRuToVC88HV9",
  "key20": "3uWqZtJ2YA66PZt2QC1Dg5UpPCZPFTjP6dFP7KNmmNgtFurEzBUYgmcKyKdx3asLY8JbYTQt2jaoKtS41izvc2d1",
  "key21": "4kpLavVDcCjVWeJe6iDDaEroS2omZZUqfT4b5RSkyoz8vasY889A4KX8eHGj1T3JysqAWKhS9HFmbsbZKqxi9XEH",
  "key22": "5NFYnE19WvfwbTGgoBz45FVcq34LYHXep1PRZumUa91yaNypHeAEsyRWXLvqNb5S21aYEmEH14AtjEnvo175v8hj",
  "key23": "5UYij7TcZnx96mv5qQjgqSwAdsACsbupUAXtMGGuJSi4DLAvp3uckC5rqKPxXADRFLrnTSdKfTAeoHkm5uZj3Kbr",
  "key24": "3aaDsPXbpJQCaDzgrB5pvANWfCTSwBGK6NmZ1kPyQnciyWdt1wCmhJphRhpqqaKmoWLtRWcGJTsJiqqGw2TZ4Phz",
  "key25": "ZPJ3CZ5vy4HeV5drnLwWvboCAMgn2cdSvH5rpWoeTsfYUkHVudvNptNFYhmA7UNnC2zYxY5iGyBNUAverSCnZNH",
  "key26": "3GMd1ZXt2uZaAWUwAEe7BUZRDbZLDWuc1Mjyy6J8DaTaiYzwJQTCYpsB7ee8KY8pVfb3iu5j11XbwWWcMmyN4v8N",
  "key27": "42dyaaXXg7iGFJc6tch5pKqMHiMsTFiv7ND8mogxZs5FDcFmeLd8xZhMUhJi7rGEKT4X44KfWVzUbuFJt1RNnemx",
  "key28": "52CVCy7oa7B4cAwwMbVce5waLEQaFrAxfZamiEm3bZFwVRhoEf4TnXFLBmBTzqD9kt18PUaC6382cVePs7VXXsCr",
  "key29": "2Tv2oAKtWDcAC3N4pKkcsR6Aeb3oqnJXRUrw8YeBTcHxe2hRgsgdExMe5RFJZNFsJKzH3fG8YoQFTk9AW796kcmv",
  "key30": "65ALQe85yLipJj7iUSNwkSEBgeF1jgxRPzTHivEKoNRHg6cjHwaeS44XLnVnV7UYDEmS8AAZeh8Rh1H3X2PCvwKg",
  "key31": "4PjppgQyBoHwFmVcRo7n55dZ2irz6UutppwGyGy6yd1JasRC56KCMWPEhUAUPh5mzzdf8wmhaLBKthdnsuqCWDJC",
  "key32": "DTdeUqS5mjUkWfkMBy4ttebJuK33n5Tf6Nf3YnMjPKQVk3E5cRG9a8k6mhwJigmrKYeJCqKVxaNyikMXHqVo187",
  "key33": "2qbqXX81yAG6qMay6uw5ezqkDfQitAZAuSBats8ojH4x4KQAuukj2zENxsM8tpnjr1J3hdiDdSScgdg2Fa7Q5UX8",
  "key34": "62ouotCg7Zc26C1nn8V7r9qqgUJVHGDd8YrzWNQcGzBSZapLvJSK6yoqFj4B9ZHr7u9BwAfAkK11Hi2YcRKb4a3e",
  "key35": "2uTzgfPf9QERTQQQL8Hyskn3HxK3NEAkGQV96P8i5X1Xxw1oXCZwc434hvR4ERRxUh7QjMRyB5nGawZ1YEpxCgG9",
  "key36": "3V1jJV5LrneuzNS7hBo3mNzc4VacQdqQsizG8nudXQQDac1upAd2rWzgjtQqYDdic3V6aHxJTn9Ne2tZB1tbXdCw",
  "key37": "5rSah6GQcUs4f6b9bF4ZsC4ke2NexJ3UsRNYzTz1xB77o91d5aWK6YM4JZcaQvKZzUuupsPLDFZqoeyw1mcEsLr1",
  "key38": "56WMC6XQ8xFVJVbYVy6qGoNhtXTyNX3GG1Uiq9FZ53oQWs1hs2zSb2CJCrGy1frC2nDAhMJCQ2qv2MzQVoX9n7d3",
  "key39": "5c6Lzm8vixvi9DZ2WcQn5p8zcgtdog3q9fXsj4nhpXQhYs7WRFnc6oTdgfi43F8zWu8djn7VeHxpki1reRf1yHhf",
  "key40": "4ChgZKLd6sRoKxPDEDrKuEYE2LawsuocL4KBu2XqyGX38RQpbYnuSUmdTwA26urF5SQgwo1ao8sAeZbYB8CrwZrF",
  "key41": "492AnWiddGE7Myf7VGnT5LzwqsRC5Z9RM8KPXraaL47nBv4bn9NhqFmWjBHSAkqcXRYCkhXhw4t2KNRipe2sWyPd",
  "key42": "3fESSdSasCXYbEhXaF5vw92rNkMjGwdzojewxP19qoZwqwnxiH4KLK2LUrb6Sj3hzHSUTammXEyFHzB6gLYz24Cv",
  "key43": "5FP6aNMwtS17JizFVxoq4ci9uMU9tv1152oJFuNPWArnexcCU79gvscwPC2Do7RXCY2ubNwGDj1ZThz739P6B9Dw",
  "key44": "4ypNX4QAPgmCwHiZntwhHk2MT8HvFAy11pmGQz1tDENzfgeG7ho8iFEi7DtgERXSAU84Du2v8BoAS5WxGpMeE4BN",
  "key45": "ThFPBvd1BZydLmb3eyFrThciV19nua3PhWCTHfnsxq38WXHQqMuy2JYJJEZ8emU844iUgrWcyZbrc3kXp1jfU6g",
  "key46": "2oDsi4nZr9yK7fJuZTzmS9FEugtGDkVU3XYPE5MphCL9gKQUP8xENjdELZqpoP4oTDQmjp21B9355SN1cpFfES8E",
  "key47": "2MxR3fsDnjzCcR8vJEampK2Y3WaRgTLJEjeyivULdEMUSUjpPrMU8kYX9tDahVyXiwvf3mAUPtaotkMJpCTHakoM"
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
