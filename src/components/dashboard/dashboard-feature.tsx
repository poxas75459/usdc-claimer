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
    "bpUrnJodhfaN7h66pEG42BxZjX4YKHr3PNPc8TCdAiGz4fe4S7NptC3E3TKh7LN8ssfywTuWCqTAXFSKqKstohd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67VELXwX6VSDjPjvpW2SJ2uxHEDo9571sqnYtDZiM9PqLUzmZiH68VEpqmeJLqYifKYK13nKZZpem6jYRfejd42k",
  "key1": "4RDoHPL6W1yuvFqbTchNE2SYMhg9YUSn33D6SVmAyLyj3KnL9xDK4YGn2eyQmcsJBzht4RbBpxLwVgCBbyuRGVRG",
  "key2": "gqetZy8iUeY9KLFsbAG7yDbqJfYfriceg4jmD37XkTuzYGZj5vKz9tyg8WQ99DLazD2g1SoYvMV65B7ps6EuVnG",
  "key3": "4Gkyh56zpHv7g2HLWeeb1yrRZKksb62ARJ4sMfm8M9jRANpJR4ePhnyKX77nfoE1cRoj7Dy9mGuAAM1tg1sZki1Z",
  "key4": "4pnED7wvhmxuqjEkxPWDy1UyYGH49DR84V3HRqUQdNjvdD8RjVkrb4fyYrEPWbxnCcxu5nq8xWnnLugBnLvQaAMt",
  "key5": "51iS5HFLEmsXStDhvVtjhgJXmNCCPKDrWaCxWMwneLVuADzb4nwdVbfwzKzZG6nja96f3bztJ8YifPcw5VCS1xox",
  "key6": "5CCp99ag82G4gcC3PwEF3n6Chc47KKHjY7EbJqbVeP3F2wNZZWmZwfGiQiXrhFMjwDhhx73tWteoqXMkKE2PyrNk",
  "key7": "644YDR7zSd23GDnrCV5iMRR9yy2mVm6Qece36YSBv29RUKA7dUNL6Xny3Fy7a3qeNf2B4MqdhGBQP9jYsmoh8tZn",
  "key8": "5QeDpN22DTpBDQSPXgsbS8njboxGAyonHL2igPeSQfp6nBCAyeXkuzRQ3FZt84jxX6YQ8cjEVXmQNDZkdHemD7gG",
  "key9": "5zfbjm1RVvkgRTS3E4sdsCTWSzXkPdUqMjQZwx8vv7JBDJm6vKtMQ31TrYDcBnrM9LAB5T1aD9CfVw2PPuun58XV",
  "key10": "4Zmx1yDaG3WoTSzK1pGUhvjpiS5hy4FE9XB21htjTN57LotHtGefgxrPSLxdkYLVLqRJJ48fv44YsgZHFa4RK6SS",
  "key11": "4jWXmGBKiFFTJVaqrqWnyPTs43A6E1GwzM5unUiAvaBsAg4UM6RixXCRxp7vzHsh66RpoCXzkVyKa82cqozSzpeQ",
  "key12": "2k6qPrkmPxBz16D6sZzQ9QUtRrJwh2TZL7X73Ei5yPcjJoezLENRNzapi6yc8eTrMCYYHpb6FncFJX9NV9WYu6xb",
  "key13": "5VeQohiDf6RdtyhLYqSGJKEfPLaWmD1aYWbfh8akpT41tBd48t118UNjaH6gssuSC4dAQg8kGQ5nRCAg4SjXhGWQ",
  "key14": "3AR3bizfcUmsippU5y8uqvsTqTZejEqmh1fcf8rpcGMEZwCb1RJb5168MbUXojEawSBLMozDjdf36uNjpMAnpQnu",
  "key15": "2vzFVRAeDLCenTSzDjwwMrX5pZuy4UExQCCGbCdYn3HgZ56Q6zKGHz79qkoEewhic6B1CWwE1UMEQKqwZ9u2bQe9",
  "key16": "565bDhJ1DizM63xRdnFAJguLGFueUJcEbPoceCt2MGS6Zi3cKp8f5F2JzoFef8dPXzaNL85X1KdmGc6JMMcnHjcR",
  "key17": "5KeUGYvUN8X4EkRyGXw4CzLx8REURvb6Gw7ofXLj6HU1dy7VptHq3MKAGgrZC9odZFXDHaPGhminsHTUEhG7mwhw",
  "key18": "bQoZqDTYJNqNBuW2yYoHLS9GCmbGyF6i9357iZuggVPuJ4cqDYgt6ss1eGmuprMP1KR4haLzoN9a4MaRpCQxHNk",
  "key19": "4HkedQ3yVjqaEbKMr9cV7vxmP43a8BKTkqMPBjRBbexW9ZML4No4v3sUUWVfHyuEwCx6QpajXp5dF3grm3BArWWY",
  "key20": "dasccs1fjXYKc6Wt6w5ReWt89KnNnKt5tYjoM3hLuPcZE5CpK65K1LR7fdDAv6EGtRzkPDF7gAL8j4pTaGFHe2G",
  "key21": "4TN5nona4kALi1Y9kW82cyPCyXTMWZxTACKr1We7RnJXvguNcm3434HWPFdxHD2RjxTqGPpfmjjmqve5Sqobwrz8",
  "key22": "3EFGkzYe1vUUrmvBVvPSD1JbKk6xuWivaBoLcL8Ui7urYJct3n3Xrf5CLm8j5PjSgAHAgtabmthqUTWB8YdzvBEq",
  "key23": "3c8GgJygPMGmoFMmfdoXEARBPJWacwei2uTmDche6v41cyUwFAWZ1LcUvb7ZHnE849uRDgGFtk17Yh9KgZyuU1VH",
  "key24": "3ykHMJQQpevZ7xwkfgckjkuZNx2evRG3NDcuqPgrNusFnssRyjzeJNkYkSxXgMmFuBuDByKtVHb7mNUCnaPPV9wh",
  "key25": "2H4dj6PBqGrbYyNrcS9eY2ePdeLNGyJ1XSpYWJUXR2cVcRmvahp6xwr17nDoDkWtXzX933AqafcgyibLFS2maJDw",
  "key26": "JKqZVcwG26Vq376AS7MF6apR57rjTfbtsDZConQmW9EXgJTL9m31fDky7jzzZmzjDEef3e1ymaWnJJSF5biUPn5",
  "key27": "62xUXWofD6J9JbZGtMnNthA6F1UA8rcjJX2TheKd2VFrrgk6fcYHFQjBVEPftXMTbPPvYu9xAXWKx48odAEPcjRx",
  "key28": "4bAgDW9NTuYk2fkcP8ttrtMqmDmxsMUdv3nshwkhmKwKPLL2E8dusc8RKWi3DwBD3Ac4hkaVsEjP22XPmgXMuyo7",
  "key29": "25XRZCELGp2MEEhXdmmPcEexgkiFcuwJbnfUzzVcwmeDwERQbECJGsRvh41jvJaTQ3ZWzD2bCBi14Vhe27v2on4P",
  "key30": "34a1KhTatAPhPyRqi6v97PwuFMSjWfzTmq46nGsABAQ2j5zH2BW4RZ2wWpeo2GRbm8hhHhW9Amhyk4J3ysFrVgXZ",
  "key31": "54EPgtXJ43ndeAZWCBt1ByJ64ufx8XM7EhA7xeGVfb1GTLCNBRaWbnFt77CBf1qbMmfmFxXdxCZJgcHN84dbTqSx",
  "key32": "2QYB1JSg3Q9eScVqgRnFvt5gMTGR7exmjMn1tHpnvoLZQLZeaYSTwo3nKgrgwwnGMDTBEqnmL49iCSYtgNtTZyvP",
  "key33": "5HuhWCuSfe3VZjA6jVKGrZG3kvLUJkpMByHWGWa9u8eW3cgei6eZHBZBkZwGDiL4anKcz9jxZGuwU7wuk2y6eVLQ",
  "key34": "4ijstxFEQdHmXHSVPRPFQrymuu7sa7LDiomX2dMwwwrUqFuRktGiN4VYn3A5NUQASqAy5x3krwBAQqUTUV86nDm4",
  "key35": "2FhqhjQD7V2zqJ1uoJXKSj5s4tcJxMP8oEmDeNbdV7RZghb7BLsuZtoFP6V3eGgUDbVCoVNh6Th8dePGEbLbe2oy",
  "key36": "yQneeAYtFiRR4YrByBBcH9Pxz7Rd5T7a56hrNMxgaYnWhXR2rf5pWtkazXxvDic8prDCXBpqBZoTcsYyBBu3Ju3",
  "key37": "4YmatJhLTXXmstKoC7kg5x1xcmJprZLphFgWcjQwFUAM76YUN36sr34hZjYweYRwmSroLTXG7ZvWq1wmFduq1ohD",
  "key38": "37Daww7wd5RfcCVjhqbTDaWpRwmYZe7RpJNaV8nnWJoCpivbqj48i5JaKBUar537Ln9bvEFcitDjLwK4z2xkkfNd",
  "key39": "2rF6oM5ymmP4iyihtAd591xF4cfmi55qFTAxBtezjupWfaF5ozoTzsKUaomo2scxsVXVmWFUukDieF7MiCAEYNWa",
  "key40": "5pqMjqhPbeNWmyPn2YiLTTk5h2QmXKFpCF6BCoAiyN12sRvrTNGK8QdirU4VZHns1hL3x5ktuu7Zo6m8uEMCah8g",
  "key41": "2ThEEk2pGeYevE2BPityFr3mgZWHmx74oW8ADHiSVhp5M2DoLemRhBjuv2YJCb9V1XiLqW23tz1JeFwFpjxg7fKE",
  "key42": "57MvZ6vWWtCFy2qLH1aTaEzBt9ZRsdX7QhVGdXdQrQUMwfKZNQHwkwJ9zdKSxjZm2nqwvFfrYTgakxaMcFvMdLxG",
  "key43": "3fB6RcmRJJP9XBq1mkRDcLqgoRHFWN6pNhXHdYdJ2TXPS3SEVTCU5GEA2DNya8wTZsYs5HdsDp1ydCSPJxKGNeAq",
  "key44": "4TRygwka8nNWTHntToGVf5qYNBUxu5K387mAzUxWYq9qCpHQAFNcVcWScqXPmrPFPzQ8h1jCQjhWCJ1G8gGDbEvY",
  "key45": "Wri686J88PB2nBvkYnQFdBp9bhEXycPqfGxADMpnbgiShS8kTZBrLQAuzMLfwgHDcEAHkw4qvmPYXQfwstcoF78",
  "key46": "5EqwnycV239W4VnA3UcXpXamchBP1bxUJM64HHY2Qrj1Px7J4sK4gnCgCXFbiYFdGoSa2HaG8ZmajiRF4reVw2tk",
  "key47": "5GkiHB34LE4yodxdKj44zhje5aAcy4cNpEAvdAAHzEpzdYygzfapeMkuKShumLEhmuxTqxGeRzQ7J5SFiQeDd4qA",
  "key48": "52kDcJbHTzAp3PtgESN295RWhmzxrUL8qxd13B5izDr9TwraysEyRARXmhaFDsEk6qEZ84w4z1FrZppumG3gBFF8"
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
