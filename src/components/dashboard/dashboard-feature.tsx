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
    "5whqSMoWLeC6wcVziPhJcmXZ2EwcWkCcHD5DizuJiUBYE85kBuKj7gN1c69AgZExKNMXejzSboZ9EUWQzLQLpaFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U1qCQvppvtgeBUBu8XDeManpVoq58cm5VcmV13KBpXfifGQ9iuQirbtsRwqDrsDAKXqLhg8eXsahR3ehMcUHxSV",
  "key1": "4C1As1BB7yBoPwfcqM6h2qvFwg7PftWs5o47HLHQ2uMZ7zpfrknGAStGU8RMzvE4g7c5uDgjuHs14zZ8VhAsW5xF",
  "key2": "KFfBcHGX6Q9McSfWu64mqmy1fECnxqoV3ixbXvgXhyCBneZwaHibVzC6xdc2r1ujfJHjC9gxHymRWBJDLeBnNLb",
  "key3": "4FpwkvMvCWmwkD2zmJmhjJCWQCPwrqC5ywshneohU41G6CXLj9TGpjHuSPkXgTHf3dW41o2X3obkoVy3RCAPh1ms",
  "key4": "54dVzyoAeZAU463XQCmdPb2suJHGiB28rsD4oXwzqJQ6ratRSEVnP5gQbeXFjK3QD6cchMm81ubb9pzLsRKjHoXM",
  "key5": "3J392RtU3AvmK7YgZfHrPTwepHikc4jDGVH6ftrukxnmv9WoiYRx6ZvJkui6Pg9DV8Hke1hzLW7SjaPqjPuSGgPU",
  "key6": "4Q1u8YdGMhLdbhHn646BLiPVmJSdhU3BkG2eCGXDbayaHPhG3VwqNaWNj9fUwvRtbKmytXvSj5ztNcop8yVyz3JK",
  "key7": "JfW4Ra6hRaakEe53s4sQvFNAQoHxk8tqmipFWWkLmEHqY8sk9JivKYEMDvj2HAekLrBt3EKMaYRs41hTPT8goxK",
  "key8": "43BhKv1cnSqQQVFF4zFxdwb4USgq3S5WKvtBCev19tYHJenhqNrdswVwixsLXEen3NNDfB7goR69CN39CoQTgQhp",
  "key9": "6MaX4jhSvyszbtis6jqfMASHcy8rKbtMySbTiSwUAdzTqJNmL6zHGuEEeZdkRvC8a5Z6FoX8fbhwSp13cUA1kXM",
  "key10": "47aRaqX7fnxcs151LP5Z735iEgw8J8Dyqyis7gPU8YZBa4xQTywad3euHqGLc7Crkn2m7ZrjPaLu5odqEr6yP5et",
  "key11": "3ZsnsRD4muUXj8Rx4NGu3vtDNc3VbpGk8t3mmdFJEqda4bzRar3mfNhGtq9dH9uM7HgCU9iuhxBWeWExDKdVa4wX",
  "key12": "3H7AS2tLXb4X1rkqWDGdE7kLj5a2muuVsj51BLtRAXvURbBFbgRoXGsJvPVJ4sGZXPMVu3DuvnAPHwsypqhnUkG5",
  "key13": "5ovk2uZuEWNjdS1BfnXFASYyUBBCrh1cY2ofBg9NGFLynU2hKCZ1zHJfBW2vc4nuxyNqZEe7RPkQaRyX3HfU34dm",
  "key14": "RjWtj5oHruqVF8rs1rJxwffBFrzSY5aq6AitTwd1taAVEnjgsNDcQViBRLMAzKyFHuzQKUJ6t3tWqifU7ncwr54",
  "key15": "dbgtGpNbHccnibZimfe3rDTu65tZehkeGNaCXHs3mvPo2xBiEpn2MpbMat7Da9Jaiy7qgs8bNSLdddvyqg9cvEG",
  "key16": "5y73CyfC6AHGZc2ripWbNoK6NGrpAtoUTVBMHrac3DNJ6pUvxdEsbduxRdKVyJn4RgJYmct12Pt4XkknZNbfkSB5",
  "key17": "62KAisqNccFL543tzmnekVmSF1Dt5WhFLbS9TEWamReVyyzPfErjshvAeApBji4th2U3hWg9Z2YmECZVWn61sEKT",
  "key18": "3vQ5fyAEGewiiP7DXdS5NNUHJtbmzzpJ8GQeu2Mce3qFiFUPwEgiUkVCsZ21oAEQjnW5pPtKAMWZKWE58Hy9JbJE",
  "key19": "ZJNcxpA3PjViHV82T9Wtbopj8QaV3qWonkGSDotBFBThVW8MMB5aieDkRuyFfTfYYjUUiBgxYZbKEgrPFqLxygD",
  "key20": "3WvUcvLm3UXbKQugJo3We2vHwvWTjMFSYjpLCjUXSsdDsuQaX6HTSsJShmKRRdtmsU6Y5qfBt2AGNt7LScqdXi4",
  "key21": "5zmZnjS96dA1v727bfGY3qyXyZV9xNtMHq5NsuFMF3G5yUKkz1rd42RPyE1KjnMRoSGYPEnzThsyCtVpEb5znqLh",
  "key22": "EAMQmjMWAVqMjycwfdSUsPUEcSzPawDMexHmEmfML68c2HBicdPkippWw16jakJRLAZoz6Hg7g9PXuvsrFjeX3x",
  "key23": "2VA8kdmmajJRXEgKSFxLZ3aX1D7MbZaVHkfUm1AE5ueJ2XvXPCeHe71zGvGqXCrjs4RV6eMG6tyJfB6oT44Rku29",
  "key24": "26KmxrRC8KGoEGH6mv5F4LrHTgCRbsi8d6RaAfMqq3dvSa87XeTWjsE6hQqj2c9MpxRHyh6kyrAmqxouckAoq54f",
  "key25": "5v8fxoQYDyoof2QpydNwFXfczDkcU76L1J6AVpAFu1T474HR2Q7EZsrckVnHfBwfVigCfpsnxYnKTftgHnnLHqYP",
  "key26": "3aRnusPpk5EWHDCnZ58spASQVvgyUhv1AAu2dR4EzcXPPiZeR3Noe2TFnBpE2UP6CxnPUNLdM6JNfTWsShZn6YtY",
  "key27": "5WsYwLAAi2CeZMRFkCtLvjiSQj88sdcUdmEzkJhBS9g3EF5Hq3MnuDnYsY9cdUi1pqKDSUboyFxgQJEgwUS2r26i",
  "key28": "4ubYyMLu8pd6zReWxD7bgjpqDUPUffxNAErEkkk8qHLoYonhi6uKHaswTKs5rknGtovK8jKHGKU9fkBQd8DqoWky",
  "key29": "5sLJW7VqN2vjAGVoGpZxi8FEkKJCqXBQ797MkAkGQ3d5HUnMBLnTem7jbw9g1VhVohDddayBuTHb8yhwgbursiU7",
  "key30": "2GS8kfUXxU1seDxN2RPgv5efeKM86rXy1VgJ4vQNVw2P5fVyEr8ZJSgCWqFwDrWFDbqf91vdDGPU6Cn4ZGHDBapL",
  "key31": "e8VC3yFQEbUtmMwT1DCr9BWue4nTjDSNuJgqL58mDSndLhEWZSgEgp8qDMYt517g6toTU8XUreWQF54NWvxsQ4q",
  "key32": "3pyqzJ9QfLyCEAsoXLnNa89MbHtNyWtnss5UJ9FUqd8eYEW12NsfYDHw4fxDpkjSUUDGutuchv8V3cneKsM2jfgK",
  "key33": "BkjmXWbe2cMQUeM5LwUVzbu3QeLoHKRzbFwFS47S3gutU5kDBS9UXJ5PpcXDYrhAzE9ESeoV819RaPuK6FaxnXf",
  "key34": "3q938aPSvVUo9L83GqaRnKKBhrZSatbSxUqM5dEPbB5UXvaVecgVweCegNk3vUbEA7aAm3RSrL6XW62kgqGTSmuA",
  "key35": "3pPHko3Zt8pBkNA3DUvhBb5iZqQrVxaFMoTMrUGHjqe6UJu3BJm9StJPzdDpcVJ4gzHW1WeQ84e78AU6VnD4WFum",
  "key36": "3XQzqHNP1WZ9TEAtksGRso6xfoa8TZckRz1wKFm8pABoZbrQDMWi4SBUMWv2EV35Ric9di2jPdzQCZfDq2Nn49Gv",
  "key37": "2NGMQHnLVqdz8aPEEpfxtzBe4fL6x89NYMehiHPV98zP3zR1eTLWpxjXAwsgPDeLssf16Q9CbPtWwbDNuTcKmQoe",
  "key38": "25wj9ESfDFbEy51zuiWZxf95cBf1HKmXXd47RCrNCaxg2CP7fuPpCWJKnvd7AoqzhdA6pEXCUhzGPrjtU315K1eQ",
  "key39": "SsHLe2Urk3MLNMfuZgYE867HiZgeTCZ6pDkhCY4c2wnXYkaAxkVBq3qEvp5ha4kdC7M5GYvjTtfPSGx5E3hnqEQ",
  "key40": "5HBXog5kpWDDiAeToT48oonXus46zk4zGYNTFt4fi8jkyYiup8zKsG4gYJU2BR8Pmqd6NW9z8z7Whcbh9ZxjsfBY"
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
