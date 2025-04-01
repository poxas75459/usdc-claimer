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
    "55gHp2WgzKsxcGMdH3djFcguNSzprkBrsDfcp6G6dECKKfBj4w4rJqicNiy46SGkzqNdEcqy3NTuLanpHongvwXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fh8uN9NdFbdbWkWuMUAwFvzvQiYpsyTsSsTRf8LeNHnH4qbuSgiLaRs5r5Nzyp52eihvZU61RYhxiJVBgTCfXof",
  "key1": "A7jWuiK1tAxCLkUFmA8nyVbe3yGcb4T9G4HgtrqnDYKL2xfhM1XHnw97WufXzYbpukbmv8i8uZCKguHHTvHgjWo",
  "key2": "24DiqLHoyf3k4gF12qZ74tFpyDf5nf8EgUZbZbW4RJAXSvdFUVRQ534CshkrseJttLXaH1gKER2vYVfUpQstnFf6",
  "key3": "66ywWkRu2XphaQ1ucNj5iVqi3c9ag3e6PMUb5RWWJSkWvbQrxpUKVtohUGAV416oNZHtMkpoTnqpFjjn16CwQNiW",
  "key4": "3mKoCMYnYt4V7UXTkRW1SSU4r7uFNbt2YRdXKH3wzsoF9YfjT2d9c7g7qCixwVQsb3sXqdGznFpqK1ZPBhmzhd59",
  "key5": "4yh7kcMvYS8vdY25tRNmTPrw7RXyWX4CJt4ht1tn6FdPHd1gZBf86e16VzsY2zQQ9KsJwLh8qiEHEQVfAGVW3qoK",
  "key6": "2a6quNnVBmp3XSp3VdFWCY4vTktc86TkS5NCc2cBwk3LGnkjkqCz4ixt4hMyPRhgfPFQFwgzwKYfrQezHyxEjiTL",
  "key7": "4aZyaosqdFz91smsU7CH8VGmGPZZPT8FqdHouChNLk3R31R3kH3tBJfYHTGGQf3GQoKt5tTsJEejKkXh21AEsW1W",
  "key8": "koYnhsnSDB1CU3cWzoArNuEBZNYcynemHSyJSf2JfYi8ewqNfumyYytgMoQPag6QGY1QbuGCdkzP6xiKwCXn3xP",
  "key9": "2BSAAQ5eRUpL3CZ5inGi6PzRLCaAGj3bQ8N3aUSLyd9dTnpHzdaKDLkRN8j7oTzsTEjen5zeXu3SEQe9DtMYgc7P",
  "key10": "4naQ2inLAfXzmv387tjozwdQg7np4dPkE5QYirL8A5aVERQTvSjRcEcuuFPuLX2zZpLqtGRQD7cmyPMHQG5RGi9o",
  "key11": "2avtUrYcTeV8HdBAe4KSMivhZMb9dTDRq1r36MutmhnQrpatY27BBxwLrm2W68bPxVcYn31rTnYTFzh2fhuvVqt7",
  "key12": "3novFigG8U61SVPd8dY5iqLEyWBdr1ZBt7LnSqzxsfhjVyikHCkY4yJm5rMwCs35hRhMLugW5E2Zc5fJH3MK62u2",
  "key13": "38fDSEizpD4s6Tu168Hx2svbXe8vMjaHYuh3jsqYMMZKqy2YN1thMZGm8FbYbrqNd4Nn6e91ymiHpQCE8YxhbveA",
  "key14": "3ACmdqDyhiPFaUVw1e7SV9nTutibHcBS7K62xbjMk1MzXy2hyrXoiPyn9pVjdDXFDFypVf8ehTNED8wQmrAZdbT5",
  "key15": "5aMaFuWM3mHCbb5knZCQ8P6QAtad697PdHsg4aWW2MBZNydHFGsBygKWFbx8cPNvDqCc2S1F94ioP3xTJaURYrRY",
  "key16": "2KuryetoJeCyUY7RVAobp61xjd3QGpSGFcNuLygwScSWtEUydUrDvdiAECZwhXu4rUJHfBUeo2y7zxes3PkwW1m5",
  "key17": "JowxHFGfjmyqhJtfSXQGC3Bt68VUQntFQewn3qre8vR1g83R92hTPszrb8P5u4419LebySHqsa5rgJVpCefqVkh",
  "key18": "51wo99rndr4jJ4FSCoVAMLiFyWdsyenWqAsdApmphpHnxgqG1MX79pRx2c45tp4wJ1PhEUNWU6AMu9gK2nGhoCZs",
  "key19": "9eQs33qS2XSDUCPD9kcbkJatgici3vecLKR125ebWBuNNZ54kz4sabaYCKzcGeEr5AmY5WdNRVpJFnFXDzRYdpy",
  "key20": "2EEvzQqBvNR8146RCGosBbZSQUmWirhYGw4vpFApxKjh7CiAQUfLR6BtdNfMjPz4ZWPAe8JB8hoPt2K2Y3T5aq8z",
  "key21": "26XZMgDBJeanQEJySpHQzBhNGZKKftEKkGngAaAXM3tHHDJMRuudcyMBPwqTFU8kKrykit9w1mxH33TvuSG5tF3D",
  "key22": "R5BoMbq2eFPDiNSkt3zp73BroMqf7CKDVzb34RkEU42cPxW9my55epjJu3C9SR8gWa1zgckv9vaseoXhcQCLgrh",
  "key23": "25wRFYjC8fknsU5qpWN6Wd2Xun8ZrkHRxU2RawdMBMXgqRSUN1qDEfjJBCDisyXE9MAqVgyrvwddpbyvWnRDPZwq",
  "key24": "57MtBeH8VS89GeNaC4BfgHQReBXo8BDkK2W6fYwwALQusf5aNW9DHGEJymnRnbdgHW9SWBsZPAwu2VzqsRm9vnYo",
  "key25": "3RZvD1cyRpFruGeuE9zw5bioMrLQAmsrECAvVkomexLz1Tx2WLJQJQRiCNU9aSBumDkChgP71RkA5cMWZRh8GjHe",
  "key26": "4S2G3N3pFKqomcjbtn4wsZhrAMaWvjdUNUK9Xa2YPAcTAWruckwbBRqq9bFsu2rUS5q7x9WFEEJ5iE1V1dFprSso"
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
