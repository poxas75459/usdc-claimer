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
    "4HQEiJ2j9u5QTTgqFgKbTFwmxzQka58yuaw1rCFzUp8JneYoFRJHmxDh5iLvZWyAt4VU5ACgquYSB4RssPsKpDzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "333fWSkgtxXG44TAEGkjXbk5BEyzYfgXev4rP2C9tSiX26soPjejsqGBDXwk3FaDuo1zN4wbLDwNrYCy55crpeoE",
  "key1": "3tnmejk1eoB8qRD8QmfKVnGZLzvGS7yhcVV1fdUiNzxssvzBMXqP3vNeLsQWwv3G5dNq39F9TXZURoA7wbQn39dP",
  "key2": "4fT5zvaQts9psWbweeQdK5G9voY3XQ41MarnTkdgADrM5kdCmZgCQXmz2YUiomNm7qaes2n9LVatBFr3mYy6BgdU",
  "key3": "5yB3umgpWvNL6HZ2DSWmzisRPdhh8KtrYUQJXQgNSHF4mi8CCgHNP6wVZq13oFVEvkuhxnD8UjhhPTCVqNeZBYEj",
  "key4": "4xSh534ywKt7aa349B9H2Nz2D5xFKmrNoe7BqSD8ar3QupLvD7KJtmxM2cNePQuRD7CpSCgD4Q36HKV5y1jP9C5z",
  "key5": "McqYXjeyMQChi7Bc9B9A752JrrkTdhBqf82wMj9q8fckT2c96p4yeaZ9Sx7Az1dcykZ1ock7GhKFqSNuGpX9TcS",
  "key6": "5A3h2bdDjfUHVgzjHGzJNpZrTY8TgMFYhpLbHV136Z2b8kV5TEtMps2B12kALX6NxmteyKX48cbVnzfnhVerSDUJ",
  "key7": "qiPLeuEsZxUPwHWL53zHnVHYjDhee9e4WMFdEYWoMxQWzLyb97c2VniVjc8BQkvG7xrgPY5Z1p7NR3vzUoaNWVM",
  "key8": "2aTCaf8E3upSknk58GdXCzt3Fnhaa1ksxmYduX55bvLqBFptrKg5CXmgQf4snyVA8mx24BgJmnxmXZv116DGQmHM",
  "key9": "4LV11kfkmMquArt35tV4HqczYvCvEtVbV6DkNbwsP7UG3jtkweHMWN8J15aMqq4r2DNTuVak1rJZzCK6LUPu2RKd",
  "key10": "25bVKTjmyLBQVz98TXFFpih5xwxbYf5SuggBgpn1Rd3CwrD5UZgoYFsrtKnQBAhCSxhGzLtK6vJkj4xnNgoHBjMH",
  "key11": "3nby4WMavKeS2HkzoBYiUuzzVHYEjUt3CBoUHAEiDwKqZttBPJCi9DVe654ah3HRqVYPWiwMnnUoWFtr5ANqJDQW",
  "key12": "5ufdsyDb7dbjY1uk1z1rEfDGcHRCqbKVnFxzCkQURoTyTKZZ3fk6Q6mTfeMDMG1Nfc5N5LaJNTNvtALKmMHuu4ee",
  "key13": "3aNcsTURgHCK8LkpXLADZggN5B1bp4vnmaYWkkz37ztT5ahLj3X3HvxbTWdCVnd4DD2S6qT2mNanBKcRox5BCT5D",
  "key14": "3BfEoz2ELAMzqzdtHdSJTcqYUGhWA4Y2ARe3DDJPLybEJm2i9kqXWgPrYmGyThAVTNR3ccTXs4Yu9AHwMQRynaoW",
  "key15": "2dhyLTmHVf3DBwdjE38HocjZj1X4g9qK4uWdEAgc9YaqkxTC3fP3YMaHqtdurhUbGFsoyRG4isHUDuQ7Tp5eR8fo",
  "key16": "4UUMx4TMnLW9h6C1eaPz942rrhdc84Ca9nzvA3oFs8uCnmKxUZGdDoUo5UCRHy6CpGiDcjU3D9cK136URQN47S65",
  "key17": "2SvvGmaUMzbSxXc2Bm8mpTkd4TXhvdUeKTkvzBudhSqGLqMjwLrpKVfL3ETd8Am7CpYBxhGejBZghwgPSKi1bpTD",
  "key18": "cXsgwJnZdWm2VP3VVdhmwoP67LnrGbjQov27A9SQnsSkeySv2qo4SFqWGM6bLuq2WhdGw4HiSEzYkj1jyqv3BKL",
  "key19": "4Vwu77mVMQGbnXkyfzpFrapzp7oENueLHQwLuQb3qCZ6sCxFe4a44vzFh4GZeVuy1h4SteAWyw7HLmG6DH3yYEFJ",
  "key20": "5gaaURYxh5ot5DX9KGHRUNkfpnuXQazyFbZ5kpViom7dQRHS2Tq6zHYufiqW5gY4u4WyDDiaotXWsHGZHPqCpTU2",
  "key21": "5fVXajr6jzLWDDiV6edpKWVsvQBaNMjXphpebgV3gCNFLiikNJ923RvfUYXpSWHwtdQAGnv8Nu4F5wjpAkhwaN2s",
  "key22": "4UcYS9JY2S7hiKs8WDyYHsnLcESAEdcNbThiir1XKYhT988hBikWExjLzQQhNALsrtEfGuX6Di1MGcjN83KK7mae",
  "key23": "5NtRpZ3Zjk2NdmXAuKQjjcbx5gCxcVhsfbSocsMpp3gaM1gSbErVrvVsxGd3f68Xye9Xhy6rQLjKTMK5QnYAkwAp",
  "key24": "qfMzX75uQ5dzdwi9gMpeqLTm85QrGuCpjSbWh1556GmRbrfiJKnsJrSHTGcRRvddxyDwkzvmckn4yBJghHYEbZ5",
  "key25": "42d4UbBhbRprMJtx32j2JqS7U5vNt3hx3SfyLEhxp5XHoULyRLb9hKrXLRxfwuH1vuhBKorKD3Z5XGjxeKonRgds",
  "key26": "3XEmKeSMheWTAUJa2t1JShjHNcbtMz3dspuLA4bnTFnn6CFt7VoX8cmSDD99zv7ZeWamfL85sE6KEYEqTH8Nak4n",
  "key27": "4FRmbFUzJ62spiFW7XSGk8ZA7t34b2WWhyBwhvPHLF1ZNFbK9KwSdhxJd7mDnDA756GNyWnpt4LJcXu9yGyNtp6T",
  "key28": "5hAdJ4omCpqzr338nRsMCPbfr2bJ6ABDmQ5GtM54wdDNUEnix9EfgoZN1Ge5EUaajZ1pd2h1sK1pqUqBSJsNiBt4",
  "key29": "GnsUS3HNGG1C8mRRvmchUUWXxBnrvnwbDC84Bt58QKTBsGaQ7PAc3p68DTKf9LYCzkXZEhtygk1WgFRC3avaazz",
  "key30": "CDEg4Z4rTt5yAEnc8WPvssPmx4pqt93jLBez8cHQgbjeHM9s4otZzvRgYjwYpt1CHrC7tZASzo8JpZV5optRSbm",
  "key31": "4LNJY2Wo5ymtfhbQeC4qRBTY6ApFRm1Xg331YkKxsddTYhynmGVPf73SoRCnw1QSQJj8MxkiKrXvqeGsP8ZgaNqG",
  "key32": "WuM94UM74nFxim4jmDVG5p7rgMzntpsR942RJViR1eQWHttiJLDZfQYN83eysSKkmeL9mgYpuAFpTT758iZX71B",
  "key33": "2YiLXnXTp5xXfAvon7KZHB2hgjHkNQkzguUTC1RSsdW59xChmowi5S9ZdDVVEgeEx1TQC5ajNt9ymubQZWj8W7hq",
  "key34": "4TCAi78HJdAWJ8f2Wu55cvBmenjHTfgdzFsiuA9zGnKDStRcQhSoj9mXq1ZhoBrH2j4YsrEc2Tdpzh4udrU6UEkV",
  "key35": "2ZEMyeayBaaFR7LNUT6tVRDWtNKwnMW8mMATNB5RSoo3jQ5yy61JxMr25jyXmEQK2Coj7K2KsC8tEimuQ17WJrnP",
  "key36": "5zENMWrwSZqxQBxDtoXzcMGzjchc8ajwSaTheDTyFBNuzBdnZh9Ff2vNN42StCTgdokXYZwixB4GigrtF6eJg4tH",
  "key37": "4u8MkXoYuqMXL4Ewhs823WdXxR5Wd4LtiQDcpUMamDG8MbBocdpi3WP4pZ3opZGQ7Qo6wrfAvJ6WezoU1QxGWFKY",
  "key38": "3f1ovGmw2SDXgL42QAHZ1LDYCT8K9LZq6BtD8bKo2ur3YWFaLoFM2sxGeZ9Tp1AyeTccQwarRDfgdqMNHBHHBYzC",
  "key39": "53HZxs6d92UhLRgzMmE5mmRjRzCqJbx8b9tssqZMmUqUcbcvLdeVCSL2ZVLKFjT8oi8bCEDMSrFurD5TJkY1hM7V",
  "key40": "5DicUayuAf2uBspZYf7Ce9oQxszV9uyq1L6941E8jC5sibg4xuyQyjtR9TvuDj8pQSN9dUv9GAcKdrkSvDXYyrsr",
  "key41": "3JUuTn5DazD92P9Bppe3rrsaqZ635P6MrPTP1zVHrKU9iTSEz94P34yWQPiwDBq9SiHaBnMfUUWAxhrYnTN8pRdf",
  "key42": "4DXtQCU699EpvdvLhda8t2a29vofNBnmH7ghaTVCak1g8tM6SMWNtqH5XK8ZaYu4sAdB15FsGR1CU5d2iPDUiCk5"
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
