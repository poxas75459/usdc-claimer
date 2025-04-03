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
    "3VH1V3kMukktQyww4FNsdfFq2wAVBH1xEuSbNMtpuWfYex74LrgoqX6fp9LcDDNoFpdTRLurY7BPDoumayKitS1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VsgGoEkkHB42pRtmscGszJbGh6bfqAZTv35aBeEn11rBdAd6xACd4uYywzeLqaoLiBpKNtaqauAj8Rx65c1JzZd",
  "key1": "3n8dFPhPkbUzkJfNQq5ozNN4GtU365uAXm3jfcRAaZEg4bDQMo2xmJyBNZQeZeY2r4b8d5JoHatbQR5oRDKYqzJU",
  "key2": "rJk3WtrhEhCd9y22wexFn79Jg23AjLwDZjDBg5qxNgNM39Qbxxhn46XJrAX4HS1LPNLNXzoi2VgwBqDetKToSe9",
  "key3": "7vMekyvzzRrXR7UBQDyD7b2weDdhmWG3WJs8sLU4y8Ckur6DRR8YRzMu22gCw96XCT2XpL48i1ovMsMc8Titnac",
  "key4": "2KSUSzohnMwDUvt2nBUQyqefaYW7vCu5psvCRCp4kYz2zM3JjpoVCw1bhigQf9vfdiFFerfjDBSdLEx926ozdMkT",
  "key5": "4ntw7q9eeVaqg9MfPQ3HB7zpkzwwGxUbfbyUH6vzijReT45x16D3fP444xYZPUrbJ2dmQBs3msh98Hsc5dzboNti",
  "key6": "3MSJN16ENhSWDfoYsNLcHRYY5FprLi7KPGPru2uCZuS9CgRr2WdQ9wjuFBkD1zZCFfRRMgLU58F9JJC7Xm9etWkX",
  "key7": "q4kupwjKfXZTPmokRUvhi2aYp5WeyFLntKatL4MFRZ3FreSgh77bzuRqmJ2DbaAjCPyyQCTH54Lpr3MiLJZWJV7",
  "key8": "4t2hu97vzFQEv4TdrD8tFvP4r9BGyngTnaALCUXyMW3DHeoLAovDTFq2KFHYw9gP6fi2DpGsnAvMkXVoZvAsGGiD",
  "key9": "RkKU3qaE57qwHAa5WbADCnRezREZuahCpF8JTt8t5f6BccHu5ckjMAqG1r87ueCXsQsPhDe2MczmpJBYTeaH8ok",
  "key10": "5nkbA5sDrVTrnRX7GsHLqqxxgXah7dXvF4CCZ5bbjiC9DMhwCUrKNv4ePfto9qMjfiXgYNNkxH1XJXka6wAh9nj7",
  "key11": "3maie1NWGRm2Cf1w1a8F8spKxq6KpkVZuKsj62F1P6W9KDbdmAZjX15iMGnQVEcqq8Mg3KhpWgVr4vU1468rsknw",
  "key12": "2kRcLmGxbadxrtusFtoSuMYSvgB6FGfc3nQQmFaZK1oz6nQBHwL5rb4do3oxrD294Fm7veMbKPWp6GybaZnPnM7v",
  "key13": "3DcNPozYHhaMK911AvFv5TsRQZKqjcrmu8WTFJR5MKsq8eTWZ1ZHxBB1zEvknd7UcW9Xp8WMe7ybEdbNMaB3Dwjs",
  "key14": "4VgwyA3ihvBxckjhP7a3haxUvwFGYXpBnSEYnjWFuxUZ5tGeDw5j4ZLMGtspYywPbDL16ccBjFEwgqczDtDnYyUQ",
  "key15": "imnfs8jhMQSEUqejSPVE5H953Ae5XQmeg4ceYaYjfrrEXnMvC3GUhEp8PRuExSUNRcRoFsv6DP67998kgfwt5aV",
  "key16": "YrAW9wBwVeC1sqrhdpAebHwE69fYR6YDn3NmDgPaHZF6WbhqffBbXj8TybPveLWhysUXHRY7eQDSpuYY8uDWP5L",
  "key17": "3NtcUgMLpCMWRND6ByMeyW5orWTHhPT99WXiny8XkZo9ZKXdDtCWmaZ6gp2jA2upihi62V3EP7irtcApi6ZYVMhn",
  "key18": "4gNfmdbWk2ntNSRmXFv1bbNztFeD28uCTsd51MPHu97QPuTU9cmqVaEynJqwzpBN757WkGUjGLHWPApGNmjjqB5Q",
  "key19": "Kfx6fzazcc32zdLT3udeEmwdt7TYw3jarrv8CAaAtqzxh8AdPvRSLcPmFtyfahvdxvp5Anh1s9GYe1PtZQ2H5Hp",
  "key20": "2mBqdndoHqYjv9Q6DXwDhGwfAik4Ztrta5ahFX9Z4GkdgwUQBcxkPyFdFfLVNYTLYHhgXyHK96uky8tLpbrimdhU",
  "key21": "31bXMnTbimjFJXHwyTfoHqcGo3mBFmS5TH7j2uFncqvwfFqBFFrTEyk85WYzMtkYFYHBM7o82672d5dtcnPCaUb8",
  "key22": "upoCCH97QYhtS4ik2JxRJHqtt5mXj8jZRtU9FgqSMyUk7EYswFUhpm5rbXsEbtqponyheYGGxEb4tNWeZurKnUJ",
  "key23": "47M7T3wnb8FQKyDDRNvCn78yVM2MW9eM4SrgfhSECV5KnpFVQWpv28uYcx1cEDJeKHkWC7ocSRjT9B6wMW6SUaJN",
  "key24": "y77Gv1N2Gi8qm4FYLVigq7uPs38jRDJgP5MLhnyQJ5RBkhoQFHq6AWK3yXL32m6zNKKCAjjZfD7ShmGzSJWpMjg",
  "key25": "4ctXt3AkZrBS9FyMXdx374kcL1R327GYBEnfVXVFMYJthAV8UZTWyBWj3eTAVrXU7FYE8tQTNQrafSZuTGsR9rm1",
  "key26": "zZpia6geoziHDjDRVNJzmfMkroKTkuT3SL7kD8BKaMwJYWbFj5aKyMTBhxzTxbVQ18aQwQtqUM1P6p4mHMUoUYe",
  "key27": "45Q5RS9sz628HkHXTiAqjsAawwqFUXyQDYCHGHT3xwABq9tCpd2zP14XyKH6AAeHWyYCBweRjCf2D5ZwT7ZHAzsf",
  "key28": "3WjtppRiPd7rRmXxnGavDYPvofv736re2rkbtEKehgUXbDUowAcu4uZXSWQMFhFvUcYe1ZFLeTnDL8wWNcWDDimL",
  "key29": "2GV6L4d6yJorTLPW5P91fVgLyJrbP1FjvN6srxvbMhiky5BstmWMqJK7a6hsVXnCy4R6bZh5hAkdLEMD4zEtrEiG",
  "key30": "4akMvdAs8hsfSma9yFjPzKLW4YpNM6eSvrzdthTKVypZ1kKGTQSVWtfxUnmZBjg4tr9Awsa14Lp43DLABoZpm93R",
  "key31": "2vo1T5KDShtZGASVQgZedx1t57EPUPEg24fPKFsXxLWLdepAZggQjME7zwgBD5u9nsSYwXhbh8ZJLvAvHJgx66Pc",
  "key32": "wbFhLteFXFYeZdG1Ung7tWWuzmMRSBDLkzMarruK8iQV8ngMQe2UhErMMqLKeB1PxEigYCcGDZaN4xmKSLPRamo",
  "key33": "26NqYfbYBdoaaPsXEsWbeSQtToocaVAYy7UmkJ6ntGGSkVgkJukKgmCrwDBNVMWktBRt4mihYxu8Yfbvwvx26AKH",
  "key34": "5LbzTDNoycW55o5DTAFYNYd4NRgQx6EmpRTbkzGYonopfu6StHFYA64MNyL1btVzSzpBSiacRLttjh9TF8VLJ4Rj",
  "key35": "3tU7SPXd4VJxGWRRBr5bw4eHvFKkwDnF7bhpHnYT8mzy4jb1wXdXq8CV1Mef3PUKzntRRXSn6o9i1QwwENEV3DAw",
  "key36": "27S5JwfgQNahHEPinp1jhCSA9kNU6RhwcnaPnLbBiWxW4oHsEhZocw3eX8v2uWpcyArt6rMujvQbpzkCtsH5vsHZ",
  "key37": "3uWsWZSrHmYFjhpkSp8SHc29xbczyR88JfP9VCv1EJzn84rvKfSpwYcw2QwG1vpmrtaUPNx8hzppSXXTdWEcztUx",
  "key38": "5rGoWyrv2XgCUNu34jDic7K4eiEC1CEUwZG2rqru8pPVrhqPnivSQnBYcXjtAPDr1e7DNdqrgHuyhMttoKYCYNbj",
  "key39": "3zoTa5ZAPYxFPsHMr9rSFond4ph3HBSCd1AhgEwNGLUEWGbLmEEPQUS5mzo1i983ZkHV3ALR8KbSmu8wt4roRDLe",
  "key40": "4dPvCAqDkQSqUUDYE15G8pni8JCd3cEe1SwYq3zTyWeUEEjHCZJsg5CyVSPKW8YD3GrmvmP49fYibX9ZUFLALdir",
  "key41": "4nXNfJrzTb9kUXqm4KUe5BJ9TNHiB95Ft5QXepog1jshJNYvvqtpkUcHutgzLrs9pWETvDPC9zpRRSyWtvYbJHGg",
  "key42": "4Wk98SbBJSJzRoP2kqRK8K81LeUMAQoJJ3dDNDHYWJa8cFQavgBqEG9DnRxzRAZGVmADSLxd1azMN75QbUubRU5t",
  "key43": "5usdQzKtRaokY2xzX2dep37oiW2LwkRPpAHVfEst8iZv2JTP7DeK3FPTBFAUm9Yi9CpimkHrmZrcoTMFBZtdc1Nf",
  "key44": "2swFsAMWh3oHsywVuGgXo1shGTtnvpir5HYiV3J8VDqdtk9RKUe3jbhgwkWAgsipBYJxUdXiyoNEht1KpSZ4snoG",
  "key45": "3iwRBCrHGg1xvSnKQYH6poWnNGNgZpECELqc3GcjJ54qShD8z4ifKcBGXwSmEJthJFhuVxixsnSTfRdYxHvKSzKs",
  "key46": "25xxSJXX7ju4SEjKse3yD2eo447yN3XaJVYe3aHv3aFhMUYBuLRC11jTY9vqwcdnk4HxVT6bQdkAP6AkoF6HRVVg",
  "key47": "5KYQd6JPPPbVfssq62ZCWnjHLc2onNPEpY3jSj9bDZBmPnKkFEVHUxVogb8UmyxAZ1CVbmVZPummcorJ6kJAyNzM"
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
