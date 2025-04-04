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
    "26ELZ3NCAWJxzkTxDN5h55JDQz8ij95mRZzYdz6GLx1g6qsKRoZPQUU4wL4V5jjMUfTX1z7ZFeDybrJaLK2fZT2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LgRp7xAbaie35dm8Yx2tZT7312feUYCBAS4vP3bpJhWuUkY3e4zF7rReCQpQCGABYRfMZXwYc7k2MgXFLaQ1K9t",
  "key1": "3DhW76wc71wyqWZc6QNTB8Cd2KjA53c17ZTaQkgXXGbBR7SB3mHefypU6wWCDABnGa1xRCsg6VE6ovy2yHDmA6Mq",
  "key2": "5tnMMM1ZNQfGSz6uhLuoNPGZNXQHtv4tYKQHRan6xUMN52XkzRzAgvYU4motneP3mX7ov5BcP76pmPGKgRExnwYg",
  "key3": "5HoaoZAxL7RWWoFV41BUQdJ86HjvrabLso8jYWRTBg6joSBkqxpbirJtNZVYPFyPuqVeNpj16E1PK7AwB7YySxhJ",
  "key4": "3BZqmQmLo8EXBqCzDwrdCo8dbWo4Gkz1dU8VQEBvP98Cx9XYxaNmHTCMa8zxrspWBA6yipi9diVN3y3koijeVkQh",
  "key5": "tMmYnhS2pbNLZpPN5BBwqCeD4orQmdes7MuqYwYqfMz6iQGn57py74rVwz3VzhopQT5q483DVDhCELcQMEnUrmj",
  "key6": "3BPRLmB7TXwaPPG16EjwKkaxay9J8P1L5Q6zK76UZ9uHrBLBKYAiV7nf5vh8BjPdzZWvEnksXLk2DKRbqhwQ41t",
  "key7": "3gxdXo6DZYHbRaEMUwwqh5qApDp5Ppzf92y5HKtWEGjdeQqiTaYzh8GDE6TcSGRD9sAFhUa2raiYv1YmdH4K7R9j",
  "key8": "3Ar6jzQeevD9JfLyNSpyMVYRJo9Hi9kxBf4XQ2Uj2RGRrvf2owzfKYdWoGALrNd3r6zLai29KGoXTYyQp4N8Zaot",
  "key9": "2BWUet8xGHbg1DoDpFxJ6xQS9ny6abJypSemDnBBi8wYErti6LLYigtLJgQajRLLEeVQ1cpoXpTwfTzf4oHtyh8L",
  "key10": "o7RFvbghEbtmsApmfBWb9xLJf8VccAt1VwefqWwNAG1kjThQSwbLWgkSKBTqGGAe5g1ifVggr976zcSpt95Ms2M",
  "key11": "4uhGeLnk7spTRTtjMH633XFm2xEEXUERHaHiq985UqHuZiiaoPT53w468G4fSEudVeaKZTiNkB4zmJUUhF8cbkQ",
  "key12": "5Q3CPktH33iSjgmH6EmeHWNtE9CWTAF8XzBVEUzAyfifY42jNTdzpN6fRrSBKexpC9gm3QSw3SDkYKQHJP7SE9Km",
  "key13": "2xEkEmUN3i3Ypku8Wx4f79YNEatEbSqgJFgZ4uAznnXj3XmoK6N5GebWEE2DuE6zfnSAH73LU5jFxv6fEysnp25j",
  "key14": "XxD4UEf61Pj6SVTkUNcTyhA96cncUUU1VCLTsSiw44enWJi8bcdA3dYc3W9qxHLzZNKzTMAucGS4U182YuvndMP",
  "key15": "2BsXR8B37XQyi6rTBpAd6fu7qsE4764chS1w6duuws5T81wB4WXFCKgR7gLA9Dizkhksrk8xcoq7WxGQciZTarvg",
  "key16": "47YXiDYuDLdkyEk5Sfeyis1KhR2LwDc51C7LRr3XjtPtZUGkFbLS21Thb6TuzKFo2sBe1ecBMcdPexiGJjs9Bz95",
  "key17": "45XiB5o52Y9RtFp2XUnuedbDNp4wDBprkSAvoudquYJ2QNjYG9BGTWKPHpmHRBnchFkcWaJtae5j9K9MMUVTEA39",
  "key18": "5qRTfTcN73K2CW8xZigz4Yup4Hyp4qHxQtDALQcoyfL4kwk56HjQ8REuhWm3fCc2shUJCSA5PLqiBAkcRDWT3JHt",
  "key19": "4Sqj6dVHfRRJAQH7Qvyam9d6Lk4iL8DSZJjn6qJ3BZFG5UqBUAU5q69JAfunyPi64R4BzGvTJa8CEfAjZQDitRBy",
  "key20": "W8HmPNzPEr2b15Nf4e28koUr91nDejdvULCLCaMNPXUJYuziBssUqtDmrtnAxk86grgSosMZFqFz7HtSRNPCAdq",
  "key21": "4owcyc6xaec9PuaKTBCzLkv9LJjB7N4vsdJeqA4rHahPxAm2b2oqKYXTBF6nYEPzRByNYuwKmQRaFCvKE97iv96i",
  "key22": "5dvLXiRTvqLZc3XCwTKkFC7BAitJZmmukz2n5KrJPDHZohGvc7Hth8Q8sFUbvtRzwkiRSvxetGgabc5uD6PwGxUj",
  "key23": "5scYGDgiNPrSXVN54NWWrXpGTFZtsiydUG1bL3AuGAZ7vTYLaBsaZYsVvhWMzQ3rahGpXNfcB48MtiNnpPNo4juZ",
  "key24": "3Wg8zSuaEf4k2o6VWTXssbp3eCKU2NtP2oWyT4HXFdWaSn5j1CfzjDJurvkUsXSe9RfWiY2oDQTidRCWppYxapfu",
  "key25": "3TFy6C7vFR8tx2JJxrWACY6vgyzBdzVtpYz5E1rFkWLXLUrN7WLb1y3FFnQXMEe4uyxXZNpCNaH7tHn6hqL7nCzs",
  "key26": "4QXuthAn7ut71N34TwHc3yFNQe5VwF2ePaYARGc2FfpKPugBudMjkhR8PRkkeo4dvqH9AeqyjDseRqr51Sku4uej",
  "key27": "2H5naNaydTAoDaHa7VrFcCaXQHYvCdUwjJLvGZiwKXmpftWhGUMSaWn5nzoHrxxx8aiU32BRuXP7G8oB5RmSSp6r",
  "key28": "4LeYkPV892scAiN9wuHUtcvcAj3uiV9o1GVC2wnC6Rtoo1ws5Q97AR6G9cqJ6d8KStn6xuWpgLQwZaQg99odzcDo"
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
