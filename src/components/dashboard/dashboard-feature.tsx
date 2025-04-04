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
    "5U5ZZ9nzTvSUPm6cubyzqHZdgjSJ1diM1ttnYBgoX3i35TW36jbput1uUW9wBMuJeybzLXepybhFJvrF5BRkzZmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NKeg9gVd1MeVgNrdDyjcb8FTc8iSKq7fSbMHDD4HwoiJciVkgGzRiTA1B8M4hZMS5kgmtzH3rtWS1YV8rVAqA4c",
  "key1": "2cSjF6KM1uze4kcek22WeYP6ZRZGcvLqe3FNZMnGNWLmy9GgPvQ6mAWw4oGpCi2xXbknyi95FBYSkrmdQRBQiikr",
  "key2": "3i2r3CJ6LrZUxKqAPg7cVepRUwH1Hw99fXgiRQd6BfrZuPQ8orQ28v3k61CRGyXm6j5Km9iE5bfg7ttLVhmmfcJZ",
  "key3": "4XnQSwXUp6x1za3BGKK1qbA6irbK4ZgRWfZ9tbea9tsWdxkzj5cbfk2LBF5SU2LxWDh2qZaTyBHZ5n6bmbvnw394",
  "key4": "SYLuYkH7d4mWRWNqM7PK5ywED1jALrjw3eryNtt854f7zCjinMZoVt2bJMqLAYXjkaB6VDsN3Zm2FUNSKLmF5gn",
  "key5": "2ypYsFYhmm8tgj5fVAaZZhFxQFC3uBtA96HedZrXxEHrqSvv5NG8PCE8BGkc6dvZxPEMzhgrXfqyxwr9VwdFBQkv",
  "key6": "4euBTyKSvwtbeCCQHAnZmM2GHztnbGcRTqSWDaC8AnyWu66iyM7ShxhftMxWktAi1A3zu4v5iYsQNPjrrQy4xHaS",
  "key7": "4DCuVMwJdbf1ttCxjZASKhppHrsDeE38c9ErVZQBYiGUFtVVtXaJUSxjfq2Uxp4fc818FTiZhBrChWPAM7hW1MzA",
  "key8": "jg8vH3gjvLqVTJsJhBpvRkgmSL99TjhVF8PcLx2PqF1ZWWcbAcRDX6UYcXbA8Mv6EkmZY981AE8gVn9ihBHSt7Z",
  "key9": "k3dLbJ7hii1EvuPx9uBauVLtPcW2hUR28c5C6CTW5GKVAE5TSGxiGGi4bGpMFAZm68fVC5aeDKtfMTVYPwXcZZw",
  "key10": "3W1YRLB6rKSprsrRfAVJtXDat57cJbYRgDbSZD1FQNDtwr8ZRwdcmtWMfTsY7oFCSSY94DEUi3ttfhCGVr6e4Ej3",
  "key11": "4reNCwqq3SRjKHovaKx8nhet91Hhr9ruzCdbsMJjaPQvoksdiir5mjqEBdVc8UrcUWNftPrdoBoDAZfEmhs1aex2",
  "key12": "2rZ3cr4m9h6KhNt7WcxwJTzKr99W9E4E43WrE7LfVJfw2bYoWKVbC8bHW3cZhtFXjAh8C98EgU19xiEmEvA18Cv4",
  "key13": "cLqvYwq5RQrU3itN7z9mMwRFbZaGb3BRis3p8G93FgwfhUtwnaE4DY97KpcLJmiqikudTG2DXPmFT4sUFsiBhEN",
  "key14": "DhzPRwSy2CKZDpfxWLXq1oPiHZ1RYmqjRLJya2hHZC12NaHiQUBV5thTnSJVDqTajPYhMMHnnNBN9AYkAHuTXDb",
  "key15": "28ruZeawk4fEMqtW64qTAYRxN7kLSUFhBhupZZZQbaVmbouJdnH95jWwezBrZHErCJJvUtVCeBEfiHsEsiJ7d26v",
  "key16": "5gsJPCCCus4vZEU53EB5Sz2XbfWEaYYZJKXSmADL26ryeQBRNz57MhkogRfzN6g5YUFmSm5jPRMQHH8D2fAs5L48",
  "key17": "4fJGGJ1zsd14HxgnMTPQ5AucuXoWYboFRSeyqfANXTA4LE6GnKeBU9SLizEbpsMqzspoiiNcgerqRS64kiSTWFUo",
  "key18": "3nH8NVzxCrpxDtg8VabQSGvgKundK3L5FMfToBgAu2EiDfVioDjQYzbYjZKsfbTWw8eeKKyG1ovQVj8KMmSZfDDA",
  "key19": "5DSUT3Cj2j3M8ctz6ad7njC8v2PEr9s1bCpY4rcwc9SFuAuSioDjnkdJFfvaAxvVKZaky9YtAAp6D6Q6iFn4tM51",
  "key20": "3ePtNfRRWBzQMd4RfRbAthSKYLVfQDaJ4EMt7D8VJSPWBgMhHiwFrZhHzQokiZQ96sdAwcRi3opkQrEpxNyVfvi6",
  "key21": "5nQqEZAC9C7SSW38GTbY3kmpuKzk8Cc6mCx4Qv3qhw4dMue8NaYwTHWEevcfQYgjk9mBoKibRfYrGNdtLmEM7DPU",
  "key22": "5bACC2rCkHJciBBtyQyFiu6g4HE3f8BfENGFgyXYofnJNKodrdkAg7bRiwwSGoiKkBzhAWzauGohZUzVTFnxDYW8",
  "key23": "2sXfKCDrfhqRJ8BMkZNsN927dmNLpigurnkHqX66piB8Prvdd6A2g4gCevRVB8FygDJQu3VrHioYXNTTZFq95fag",
  "key24": "4mC8wwGgqebYwp8CYDVRPnKFJwr9FtDyZurtRYCXvA5ARfxSjQeWpr1czZPq5qtTPcfd3mEE8R2sxsArmmoRMmxP",
  "key25": "yyc77oeTrxgBqDxMZm5QZzNg23JBqAKHm1om3LmExnr3s2EgCxJQa4XKCirmNmoE3jYnFXniYF3V6pAkAfVESzP",
  "key26": "5sz3JUAvoBaVMawpS79FCxoXXbphYpmhFj9p6mxjuJ1ze6X1qKveSRLDq3mRmGnmwEmCKbBRy1wEgzYBfUt6USHV",
  "key27": "61L6d3PMgfr569LdmcC12DjuHbGrbhHkCKvT2aier8ZtxQchnkF3ry2gFmPMrCnMdBCfVERiEhcD5XZAbKc7mAFB",
  "key28": "3kBnmVqHwBTrKmu7EoKb5x2cBZ5vJhQK1pFrfr6q4vLy3ENFWQMcRi3L2uKwpyNDD9dp2eq6W95DzYaFfj8rDfZh",
  "key29": "2kgoMcyutouTQLgCKDFqTC64UQf1RxQ4CmyncNP6wQkTmdTb6j2iLits6jG3hYzj9GyYSLFsvKpfCn56fsj6qYub",
  "key30": "pAqxEkVpVvkmHNsMx7s5dpDbrFFvGH9UiKMaV5ywBkRSvnDkiRhKRMvm2wMkQiUXKpDK1J8J2QHfXHr1mAt67fW",
  "key31": "5cX711cDMPaGnbiP72RetTbSbcMrX1gD42nxm4PrTDynEYEuEFGbDiXTyE3Z4j219i1yz49roLXSKs83Cn83EZ75",
  "key32": "4RizjzEdBJ8JVr2FNjCCCzcfYaDLArFpoxiNCanwaCuPhDbjkzf8AcSq6HTKkEnScDZc43tQD3tKgERLZZffYxxQ",
  "key33": "2CQS57Cys4jeHBx38LCAkrNQwVJZdVjhpVRiriJWAN5iTy29dqXQUxD57XeAJkg9tn4FntCpCyrb3s19wRhztBPD",
  "key34": "5CHNXEZ1pXDsawqrbL3ZouxD9qukM3vjQwcekgqq2EnYmz7UsXQLnusixMGuTnvMb2VJhhopgt3gHb1HEjERYHb2",
  "key35": "2ngxnnzQX4QYmGC6R4uRAbsDmaXu8YarHLCHDPQ2djf6btFQvFZKgqP3NCwi6wT5DqoAaipKQ9oLeUTPAtTWdVJg",
  "key36": "3nNSbt9EnSDRyuNneVqty6ikpsNQshW2vjmbm4ZWArJ7hnXSvjzw2Bx6PCUmbH9q43FgP2vCs32Afbch7SzhdAZs",
  "key37": "niWVV5WtEq9z7biGjfghwyBR5FiCKt7Ed15fU1235G23jv9m5AF1FcZRtoxAJQjECHgjFXQYz1J61E9JzaDucvn",
  "key38": "9QnKMDXvJKvCoRGuVhWAHeN8ai5kWGKkifKeKur3AbivBDdxBkwGy3RUCDUiD4HxotCTyNYNBDP6HjCtGLbciSF",
  "key39": "52NEY6HnZVcNEsFLCE1cHGDVN7zFvqkKTkEDywK7m2srgFS3umEbzzStCK19Wfg9wudu86Xa8dMZRKUyBhiTJS1S",
  "key40": "5gmHnWAw3umR8PAJnY16oRLik53hEexb8gSDtsLgMPLQm5j3QDC3GUqE8pT3xgVA8Ru1Xi17iG4wtYAuE2aov9GT",
  "key41": "3W5WvKwPtRD1yUcdWhd5RxRzrKGLNNz2fgWxqi6Xn2mD2vqGRmaQKuE1YomonFnfn2X6vo2gZ6Y7a2gzr1ZZz6tS",
  "key42": "3q7BNcxvjnKeJyRBt2metYwgPDfF7dv1zFhWP3HZJ1q1sZYVUdrGQEGTcsGDmj2bACqEZuqgESebhRchiqGGUyKn",
  "key43": "28WGZ5NmwHtzWbBekqzayuq3bWJoe8yRie2EZkMwBP5PqcMi2MM4Bo773avn4ZufCoAesAJWZfRNUvJ1FrzKu7Px",
  "key44": "ymFZfjb65muwi2tTVKyDi7WkRqmduyNGG29oSM3zMi3GtzZBX8Ct5EpKu5UhurqCVU9Wjxrab1RsyevVTQGECRV",
  "key45": "9Xa5ZqGJphENoxWaD2i5KCVcW2yPGr9mzuPwZ3LoDjawmc1RUfNC1FVpUmejrmjMrpigDDQSyPp172aPiJoz4Bb",
  "key46": "2Mvfk4gMZjDkU8N2AA5LyC4ZfR2dRUep5WCpxDxYFj7pAzHRER865fNFo66D3K1TgJAXdyMRaZm3Xw3QSFxTS5eE",
  "key47": "5u1kGTPDLTKyUuyYXoEin5MR8sbkux2jPzBbW6ePmQhsRMsTRLUazNSyMig1UGNKQbFySue4gQmWZA7F83aSDUub",
  "key48": "3BrQqzcXRDwgRKUBbMj6F6vJNoLe5rJ4ghGx3NvbhLxdWxn5oyzA4zKrsdsFUvpw2wCC6MjGir47J8mb7LsuNruc"
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
