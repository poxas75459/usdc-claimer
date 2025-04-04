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
    "2RYtuZfyaAE6iPnbnEbgmdz1W3os6jWJkrHpcEKc1cny3MvEXsJ13bN1feKPgydmitJdzqecUFfveRqXETKesDZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JCL36wiCmf3rmiisboZ1A9pUbtG2rMHEDfTxL2oByUVGeTkE3q2jA7JTpNjiKVBNQGTvavqkAruCqmxThH1Rycd",
  "key1": "2JFw8g2qCXKteebtBTi7Di9RuiYQ3fMvvbVyHma2VyApbmgjoetedVcx6RUMJdUvSzE5ztGdnJ7NxfLAFYXhj9hZ",
  "key2": "4J1NzJVzkmKfgVZ4mkctWeBddkNc546Z8z8ALHupxmScpxcvhkAcfMTgWhT4RSJRMqJ7nm6CjrZ4GrHXDUS6P5oz",
  "key3": "5XmBxW7TmrpwdP6GodcGJyg2p1a69Wxjjx2nHFwTdoWnVwqAR5PFp6ryMUG3DmUkLVyBa8wZfKGRpDVY8xMc3UYo",
  "key4": "4TaFXoPq138mu3TMudsoF8WzMVSfeBuZ3k43h9fdCSeGwfGeW78gmVKubsdNs5sTb3GaghHHMqwACkZhYmzvVijX",
  "key5": "5B9WQmox68fjbSDKSoQrrWpqrxCWkTq6YALnq8LZACZX22roRkouziXUxG9RWCv3RCijQ6jytAPcziCqJz6KzZam",
  "key6": "CWJNNjT1byT3ZTGmJNP8vMi1TiGMStwSVnbMwnCkEAjFrHzVLrbMtGZxUK31ucn5DJqD9w89ksLhrXHuHSqA3WX",
  "key7": "3JQSrSU2VE5uUB7PDbXPuMT1nVoaEtEWeSdTnn8yGhXigKbUh6AQPewAopjXizeWe6sAjHPR4nFoB3Y4YVDx7TZA",
  "key8": "xi9mHcTCorygzTNvbyc1QethNHVitR2Kaa6QEvW8NQnyUWgntD9ueUYpNXVEG2UeKyuDKjr6MAKvTJyVMN7RDn9",
  "key9": "Qy5p6yrU72gzxGWc57GvRS8hpShnnhqSBhzN3jjf4HrLXY5M5wq1bhauDKnrfwcGTyiKZn6ath2C5UVLnqSyGVe",
  "key10": "436jiTSfYf3qHU3U1xMYqY3hpQcMed2RXLxyLDxkGoiRMBgVaN9JTS6t4eyWH2gd1b6PX7EKb2dQAyCNP751fh2L",
  "key11": "2X7v49N2g95nj8CNmxgGS7adeVVd2LGaUroP3oAX2baodTs69m3ExDiyJNaw1xKUgNgsZfmB2uhzW19ofzgqqy9K",
  "key12": "5qAYS8ttqL9qjhDajdifgBj2pSdm7Av6binDmysHKqTZkYcBCMsLRpzKB4eat7iE1chg3QjYUk5yKdLk33WUS519",
  "key13": "5F3yabLrvbbLCxFZLtzDAooUySzZSYQ7hZ25Ud3MYVB8wagHiSsLt5LCE4WLvw2KqYcDLvefxhoogtJ9MNabBLYT",
  "key14": "3DHVUu36J64RdZbQB1hQpCpScoi7Fi4mGsBaDRqmb5RJ7BxKbugRfjA9kDdqfShy76XbYjhpEci3Myh8HWprBVL2",
  "key15": "4a2mYsxsjBi5Qduc1TLu2RTcGMFFHxsjkVcGbS4vDRkWE8PSWDjLEtZw97iK2YbUMZqvxsqaysQgkgWDj7iA31JB",
  "key16": "nkGRQeDmGTbUtWRMcuGuZ6YGK7n6NQLF8NLb937f3CeFXUiG5haupKPXq6bgRFxkNLLzhD3xBRtinxnc4vGiEKF",
  "key17": "7GJpWa8D8KSKrW2XZ1Z5Xwmz89b5BFkRCBPCv1R3y2Zh9bohUUocXDCJsGzEXNh3FKgyciRqJtY2bYiyGMH18Eb",
  "key18": "53WbeP729Gfxe5GALVk6LfefYV7Av73aThZTBUvWzJsz673zPtpQ6MeFa5BRYo6oWCdCHf6qJpVabPn1jVMwq3Q2",
  "key19": "38htPqZPThcgu12cAFwc2VYouDtpcXjYfoAU7bXvtd9bujZimdZJc3Li5LAVymajxx7GdjixLJm2TJjjm8Qy2YTH",
  "key20": "57bNvqU9mgXW3YQDLC5XHYt9spogNmtWLKx1eZG2VUW8y5EbwwMmiFF3MhFDusFgatwjHKb3FojuxYNoeyxiHxpo",
  "key21": "2obkNEqNxWqjGXws7fCaQT6eorgHir1hcJwAPxRUMez3ra5yxFNXaLR41hPTABiTDphpG88b6b1PA9o7LSEU8DLP",
  "key22": "3SEUiWemLRALocq16Hu51pi8WqK9toPg3zNJVmUKKvpW6D524PMoTDsz4PqCQiWS3AwVfWh63fWFf5hGFLvXvoKc",
  "key23": "58k2XTJ2EctTvHpsNhSKsZY3VYbJ9MiTgvSJWMkwS5GNCTymZahhew25Ud55xDew2bJc59U1gCn3hKm792SfZT8F",
  "key24": "3xJs4jS8Nr1BCETiQ68EZG7xMxgcs2cTGXTTNBZj35RmZ6nXEjtTKSJyVhjGfQQ3tCxvPzr6YXz3kPAwyMFJBmdt",
  "key25": "4MGFc4mHagfX4SSFbog52vRzqqGZNpN4jQKKDiL7AVbszTG6JwU3FijWKRX6RKvjf61LSvnbTsjFDngAQBui6wSR",
  "key26": "4i1Z84xTM4wQ5UWfih9jhfr1dPDnmB23eJ4A3skAEFLmmcBdRYoQ6PdmXXNSNUL9sLqmBpDtd8LVfSBT1T18ZiiU",
  "key27": "3Hq947h1qL3SioQLEXT3xM9uJbpzSYjhEvVd16XsV8qu1MGX5BVE7yrr3X1qcxQAEGXn4begVghTzuKLdNDCZWYo",
  "key28": "25wcDxKoztgLdVSptgWLWh9m8VdVD7TYiR4DTXR7ADpCq4eZDEwq74iTydkdopF6yPuPBPpLdK8okrcfz2KdsPe7",
  "key29": "2fDPw8zdwarXA1NAE1zPvqxNDtPwCMSKUStP14AeAjWxuVzyePrNmqgqyAPPyr8BDktWRMs5onyr8aRF5yrFLwBk",
  "key30": "3dFmzE29nBfY25E1FSeEhMnuY6HKoDt1PReHggtfHdZrBCuL8v8VhgXbxrpkVi7Bo8sbu37G2iHF7ugdfC9TCMFh",
  "key31": "5FtKztvkcoR2TN5TXDdW7ToLK8jeybuAxqesTMC9JnkWjnH5Q9NGJYQDfR2YGikoXG47FRhzXcc7ctsxtyqf4Tn3",
  "key32": "2LyJ5HEDZ8tC6M2mRF2o32bxeTyKBfbPK1bw2n9aHfQzUiEmZe9aKsT33mwK64vu7ALgcyGHVe8i1TEAbQxxxros",
  "key33": "3r2eEFenfDxvqyMKi2UykKybeqqV5JhuH3wd1ALqcc1m3pcVwg6kQdTY2qzBbs9KPAzMqJRsDVWtCPoAHqDCmP86",
  "key34": "4EZhqJmH8ESXMBbjCnvMRcyJZnPWvLRoZgLjfBEjpbMNT487dPXrFCY3bysuUa2AwQsfFH4UyzchmYTYFtBiS3Ac",
  "key35": "4THxx5gkMEmzDUEXguiRWLJ1NF9yhh9GpkkqhgHi7WxeXbxjFEnhYaQF3CU5FvE5WoNJQBsAFierDGW8x8CdRTQd",
  "key36": "2rHYBNV8gSLAW8ktReq37kWychgE1GkzyfBqQgJ7UAHq5PvepE5kEkSyL7MjYVDC3hw4jjzHDuJox77ByGMZMyWy"
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
