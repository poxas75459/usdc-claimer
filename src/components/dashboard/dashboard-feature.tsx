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
    "4S7wfbbxf4tgpLoJRvzBd2rtvMFWEXkWgbG9nUf7v6ViLQzK9ZLkxwYYcbYXR6uTVs4Xmqtv2Mv1F1LKrAa5NVzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FMDxcQz54tNeDJX5fRY4pE5FpT2npqVrRRhnoCpwRoQPaSz2b7sWmp197CFxcKxbN51N1yGL2xm7HVLQ77sPjEB",
  "key1": "DhTRKC1fx9iMArFbB39f4bZiWKwmThq1gHeSKKjMDmYJJovQJFdWHGi3qnSXTSW5yAJ2HqryBfmU5dZGcc8kusp",
  "key2": "3iWuLGczUhYdmkhuuxyME7iLz1ri3yTaJafFUA5peroENdyqJbyoe3vvHUm5Eox2PXCV3sumiyo6f6fWpqb5WobH",
  "key3": "4xf7VXwhXh6TfotLBXmqdBdVKvPgN3sn5shrYGZQTg6NxhUraqXfSvDfBd1DZcW9buTZU8NtVCsexoh5xnxGDEvD",
  "key4": "5yTnPg2oky15zdricPLSVYkdaRbCXSQUebj22UjE95cei3cEmYaRRsQgbdv9sZAAMArGm8FFRf9EmYgi26JVHpE4",
  "key5": "2u4WohDuSXkihC5F5jsJsyTmx7aGs67CjtFB8RkQHqvQ1QEFaXfCcu1S4FoFRoW6RAfTt8M46By5fTzsWTgKBCuE",
  "key6": "2gxjfreaDDYzst6JCbPZRzSccNQsSuanAsb5Z33xgYLD7HmtFj7UDWkj7GbsLpWjyZNVHq853qoTNitEVbTetRSJ",
  "key7": "4TWMBJWgEQGaTWVpG5mjp2fboLMADkB4nMoPZmtveRs3H4K6a2eEUgjZhvBok54X6SxqLEiMa332bG3AZsZb9mAt",
  "key8": "4o2CgyGenc6uCixt2yfvfu7NUz22wEwYVWqi4D7ZvysLzgGZbuUtiwvnArCLgqek94Bxj7u1FjHEyzo3xzYB9JfM",
  "key9": "4S1pqSCQxBdhJAyfyKK9fWbditiwJFDLx1nDrvC7y8fFdessMQRCLw5b2CLngDMkeTHajrohcPJuKLx4pq3rBrqg",
  "key10": "3HPAEx6YaKKyz8S95A9psj3EAYHWkVqLNbR94NLmsQW5ne9gG8UNNk4xDhrSoYrMYMrKhL3F6DZ2dchGHsYta1oz",
  "key11": "4qmYRomi5D8XtfVozT7a4JtMTToKYM9ABiBEpZ2spxySF23671mmhLB6ozMJiHkfXB19RW2z9WJo6RLJzvq2eaJC",
  "key12": "2SSf1t4nzHhgCE6MR2iFWbAt8u7f6jZsJBTR8vH4UVQSisnb2JaZ8cthQGaFcxh93pzf67Ar5kqKS31fPGYYbnrT",
  "key13": "ic1jThUqSsxY79ii8v94DzfNZ2TLQhjRyQnvfzuHU8YxtrhkrRu3jh22S6MfBoWHLS3gBVMRcw2tbLsJsc7L6xV",
  "key14": "3X3PxfCaevzLBi5d9a6qg7Uio4nhMJ9JrkuqHsyxBUXgNpWzaTE6n4eHTeNJATQ4qowu4T4BJAM7x9ETSYY32Qpj",
  "key15": "2BSfae8iUFt8Pq7k23QJsExdB1nPLLuAGtLBbK6epMdAJvUTnpMVvJNJFZ4FNmBZmLfZYVDzb4oA1FpRTwiWbk8",
  "key16": "yAwWUz3jTFo8cLwDdZLc66vzs1gks7fipNKZvDJ2yzXs9SKSFA249HJtiqdmemuTNJcYBHfhyoeaxiQ6XnZ2RjX",
  "key17": "ZpKXr32HFU2S1ftF8Yx3vHSrF63XgnnFY1zZU2A16jUCSwMPKtWgWWWhTxePTH97Vn6eDWQbnLC1XYSarpGyLMA",
  "key18": "5x21Db5K1dQG1X8jq6Y5Z8ZvH6CSsd3YU9G8d1271tZXcuZGdAq1Gn2GNZo5ZvQ3g5DrzjEo7R45yWjYTakcKZvy",
  "key19": "sKASu7rf6SzpvAF1Gdhw4AJb1cByxnYuPcRLPRDxUYe2ZUx83FYF29YS3YoU7LnuMzutK3HHiQyiqsXndQeHhqq",
  "key20": "5QpFJUUUM4MUj1ot8qNoworLAtPgbUvqzKniPzNmDyKqDzfoRKmmfLCEd17V4M1Q43shjmasc2t8YYPeAXk7YaFP",
  "key21": "2j2qZfPUtfnjBpPSyNH4pdFpYg3Fs4xWLy19CT4XHHTCxM4vug956afwefyubmkffCVNBpbvjX6tUjL2utEgNkS",
  "key22": "kcQcLeX6ghEqpQdsuqYXzYAxRcCYKQVbPcb2nKpNvpnd8ooSAveo4hiPUCa6GhCoPpQ9dcSSrEdo7ZJe1kT9q4Q",
  "key23": "3RFmaRbGuuE94YpxvC4ympxRijFv2omLz1xSvsszbZzT3RPp3ug23LBpJpCPqT9k5mJ7dYJRE1jeYSsJD27WcNsC",
  "key24": "33whSC2dntfWi1BSkTiKSgYcrm5ULwDRqEaK5AStkUMt3LQocxVieWobSSoBV3Bzug1gegubqy8PBqqhChgCGmWT",
  "key25": "5GRDXozbufy638VBqowzTyTnKReFn2EjZnNLZKq6xHSGdS554APpEGPXmdTS74H6b2iqn5j8YYLWCbfsxcu4RWrE",
  "key26": "czZqsPANVLv7arrgchXd5vA2HBWf6rDHq37QFwbBzw6MgPuGmn43RWdAEmGJZ3CmA4Fxy7FNE31g7WPLwQjQV9H",
  "key27": "4JXAbgbhYyyoDQdiH9N7k6qcH46EwsWJGy2hpkQic7yLPGeWin8pA6mc9gafFxAvWFncJiyXz6rhdUzUJteucSmd",
  "key28": "4msadfhwuT2zu7hCyqYBy4WHKsgqitx42SC6YVfKSsKQdHsFZuNrqCe5jScpb1eaE6EHeQMD9cEzySkwztEN91Rz",
  "key29": "roMSh3uD73FuWrkkitMzwqobEcx6JaSLEFY9WHU6rCCN4A3F6G1Yc48hnxhA1s2AcYPAc7uSujG5248z6nWawue",
  "key30": "4rQyHbxatnaiyEnFFnf5BfCezs1DX5TbpFRXBfP5571oRrxJjU5GP6Qbs8XqULPpooG1i6LR5c9wRRBPeoBXzH1m",
  "key31": "iztQYXiJ7mHcRMSzV8DvuTrQKyB9eqpqRMhFw1W2BUyAy9heE92RNTondNsLyrEY1nhzCALMKaTSjm5EqaoCxeT",
  "key32": "4Y73BuHLTWcJSBKcbTzDR3UqKgfdEAcBkXjbpefxCFCWCcSHCecMdprJ9AJ2cHCJSk2S7F5e5pF3WBuZ8YU4LXfr",
  "key33": "5T2qTrM1maTvjeMwY1UmMo3a3KTdcAjFrnoKLVBevhA9MotuebhqiyDVSFM1GzMaM3NDyLfHFFurtdM5hbYxYbvu",
  "key34": "5tkj9L7YZJg5Z3fT7pEizPxWeRdsNWp8zEVK5MyGK3pG9AN15pQkYj2wF4T39i4UjNX2giyyBx2cyeerc6uezS2v",
  "key35": "5TNFfZmfuj2uwt53xPrVbvv83BTvKuQxUoNApu6s1LvByJRGCyDb9tMj5hEtyXzRu7pwRzg3QKM68LUdJUWBU3tt",
  "key36": "4cik4HgjgfufFynEqbY2iZY9NnHSbVU3kXsNW7mZ49TbzQB41kZYam4JDDp65LfwHM1dHzZhp4A3tAGSagYbmVGr",
  "key37": "62Se9MhPhtbGiSJng88e8THshEBfipBjskECouxyQ7D7QJSAwjq1KdRr81itpY62a3tVwqt878m6SkZLZ2uoRRNE",
  "key38": "22nyqudRW214AW7BT2og4NR6orJgcxL2S8L5L9qhYVfFoxqsv1xhTwxUksJaYN4a87kPGkv12ENGF569MQrrrFMq",
  "key39": "3yzfsjjgLfN2zNbWfJ4docvWZoFqVJLZVxiz1etknaguiF3yfd89qiNEbys5deq5nhHA4gN3CJwHW2CV1AyofReH",
  "key40": "3qNkMwJ4YVYEHZURFsAM5HqVP2Rmi5ZeTy733NzNDHZT7Z2WhQ9jP1Uqut1PBoaJjkvPtk8i4WaKRRvgkMko3cQ3",
  "key41": "5jGaXcUfvN4ttrBPZxwDWBQsKBYfcGgsE8EK7JJPYKQkBiCeUyEjLTsApeE2ptDt5UvsUbBTTL93a2SUAiQReUog",
  "key42": "4EGoF8ZiKYb1nbYbzXWTZQAirLJpUDgSpDQypin3pxVVpqGQjxjj6kkF4vapT1ww5SS4AKt67fH2pJ5bRvw5UnqX",
  "key43": "56zPU55oLzHzGXWfbFX4ucUMVeXjzuowoyBtWS4TboM3kuY2PNc8Jj9XotpcWH21EfUqNz2T4fc9Lj4TpSMtHHzt",
  "key44": "tv6ep7tu3WrpqsPQJBy1Ee4VPoawQUqXnmPskj4SLET5uxkf7jYporrNfKLcF3qZhknavJMFHbBAjzQ6rRHNFGp",
  "key45": "c4YLSe4mTSSMLy77YQ3qRBGx7H4KFMm7XLCqPAu7PfnxBK6zEkGBqRYPY7sLyRBUD9eJm737KnQCf63kMvuySas"
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
