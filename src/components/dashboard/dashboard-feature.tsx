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
    "2nGrBsmNkP4d61CAUsGNCQkjmfr6JsdjD6DdiF6pptMzH1xnWGjArowUR4eo2TJ9CMpxeHpa2KYrzCa9o2cw5qbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VtpU7bLScRdTSS8otwmDvCfoJbKtw1oSZHNxCypUyd4EoE3tiiC8zebgZdKWYRrDYQfrkCWgWPGX8rDVi1NPGU5",
  "key1": "2bRhtZnNW3bkWKz7E8Hqu55jSb91xTpUwz4xGfVeKAJqgP5A4bYTWM2zxa7UHdZmjvh32bXP2yA7eRstBoCT5pRf",
  "key2": "5D28aW7Pa9g598ZFUzHd4Dpe6YsEH6HqBno1DcLLin2RextCGx3HdiX6jP4BTaRye2xusY1aSKz1XCrjGV9UqGgC",
  "key3": "4dVnYmcKSuPoYurUJ2duEuy1kcwi6YsHTkbTvy9afbJa7xPw5zZofLp2cipSWKrzEN4PLaN2wAGzCKdGnZxyioM3",
  "key4": "243S19Grh26hjtneUWnJkJAu1djjeHGFUJ2V6Zfo3aFtpDDqK1gMESDFeHFo5tsSo56gyEMpUUUiRQRiF2kcmNf3",
  "key5": "3GGxnyz1v7jR6BgcVwhBMrY8LTvsw7N4vrXYsr8x5T1TanzArsDFbJwWCjD8vptirqrmfPxYaA1FcW85zXFGEPSp",
  "key6": "4tirT9Aa6wxN1YuhNFdH2mPXM7VZyXj7prcLmVP7NNyWuEDT4GocTerkLEvc5expp5ApaepT3VammRVrrCDZcbcy",
  "key7": "2CWjgx7SL4DioZzPVQ9QLhw6JKvzAHEKtr631rYdFHKN4fAvuawLSu1CgUmuvH1HMRXGgGB6c7NijwXoUKbtyuU5",
  "key8": "2Vp1wNNKXrhQoELWVJ96JU8nJQpUyaBwjiJXvWLGb1N24HXSd5u325omQweFvHWr6uS5TNdzbV3t4nGmoEEA8LAq",
  "key9": "4aZAnMtoBucxbFq4G2SfpXxBfMgDs5qKfPGWZjwoNH16PWscTDA4de4mDR4ZRnKFhRJdGNTCHpmXXeuDt5qh45mm",
  "key10": "4JnrgXfpCAdZY3pPgpuyZyFddEt25q2WRo4ZswERRDs7mUVxCq8tzuB7EKnUrYqNHzAqvtDbK7vWLYrKuPgvJqKt",
  "key11": "4hUDaAtEjxqQRo3gecSGdiU5JgbfGxgNThyCxB88obifbqMsecUZKtk2tYUqSfbr7jfpYuE979r4XYNdyYdt9aSd",
  "key12": "51tEfae1rn3UMAKuaDv6jr4gDLsuCyUjbN3KKthkUvpsTwf3cZ5PAYeXvSJBjbZGBG5yLdCrMjLmyaSWg3fER6CZ",
  "key13": "53Kf8qGTGaAZK2jKns2KbVRzbM1GZzSF8PC7eRZ5KgR2DnNfg3LRBohSeaNCAFBYdJTUrUfE352zEsJEWi3Bx5sg",
  "key14": "2ayLz4nGetG9veGzV7c2CBfETAdQdKYcdv4CNcMQFuUBRxYC1W3NWNunMdftNLiC6tizyEU1RV6XNDThMmH2cNNg",
  "key15": "5vKZFPpaM2TJmBQqfWHxMJ7cRxNW8ffXxYx8EvpwXUiCTjJJRFR2Ygsrju2DxiLBWTymWFafFhqZVC1ymUJVNKQ1",
  "key16": "WbzSh8EhbVoi6A8DAWwNDdSmmvzqqDTVGrtNVZEYyjyQ5ZVCou5bY5LCiU5X9XYYa1UpNfP9parTiMHNpn3jcCa",
  "key17": "HugZomRftJf6HjAnPmn3s1sHA6oMT6osVCWnmARx8WrrbRnqvXdHDPJmMSXzBEJBg71nrxhEarxqiD1oL2zAhSK",
  "key18": "5Xh4ALQ1ErdY1XgE75oC7dkRjWqU2E4F4a8ErhgMrfDs4sK2H5H7pSPE61j1XDDTxadpCbvDnjsTNN3TsgjNxAaW",
  "key19": "jTKSJ9wBMK1VFYiVXQyJDWi8FxCXRAYG3Fj3qRz4NkXxeZXZaKyE4snHNkqmUvCg9cb1Hg72g1spV8SVtfRneiH",
  "key20": "3PctZStoHVMQwpYFkscwzr8WMXXWaMPit9VMzF6FXxj9dk4vYbKXzgW8os9AQkWhPLvAcP4zpVqrDD86BmbFHBe1",
  "key21": "3FpAeu9JvQv7p5HvDmQsG5TmduwMwHMKrUmqYcSZfQZKvsp1dojsqvfKxyVYEMtsk2imH4SzZTaWZUZixNYr75Fb",
  "key22": "4kvtwtJW1mqBfykMTEoYQxaRUpZUCWyoPE5AXPUrASSKXhDRi4AwMLHXMp1bvgYgBekVR6Zvx9NdiERh7RRLuPx7",
  "key23": "3Qey7rFGgzKrdwHLcv94tzm3D2EoKH23vgkuNCM8uqzUsrRAFj58oJc4HKxqfdpPcdgEQK8Mrgenv5m5s5VGewfT",
  "key24": "3xBm9s3o5sk3XpQwukXEqE6ijRTvrQGebPXz7Qbe1Ue3ntxYw6x2RH2RuUaRFdn4neaKGJv8FfbKXVNawpBgLh8p",
  "key25": "4Vp2H8pn25PgS2Jvf2hDyGSM7Qxi4QSRk5LQ2BJTH6zbgo4B6i3zNhqPJpSQrh6NZzonMNGT1jdLNfg9F9gqhsrm",
  "key26": "4n4KKF4mrmAth4AvvG1762cA1PTkm8fufGYxXt4wvKS8vucLEWqAKECXiEsQC3zU7om4PBrhaZRtsGqHiVDjG2m3",
  "key27": "28d5BFf6KpMsusDB3ZgxiRLJ3X6x2vJPhFQM3oaaZ23ZhbkXttJjQLuJw4PYdDQeRrYcuCV2sRGKdr7TjGrzm7ev",
  "key28": "twmD7uhuG6JArayHUuLNerLskVLx1HjgTdaGvT6cT2Z9CUDwRVmVRfdyiPRkwmqUpPf25Jbd8eRmbjZwvUMVQL2",
  "key29": "39DHwsXaxoQQSFDjjPyqACZZatRNiz8cqJNnGwAqLwXpEbxQ8j567RnigQneb7jjC9U27gFLn3o9iXgQwqZPLzca",
  "key30": "7jsbFwuonJ17KHvyuxtAo9LvJfQxdt5MhRDdVR8xz8fD4mbqPbMhx7QWS9xN1nNtcFXE3sEBzMotBTpky62GR2i",
  "key31": "45Lf4cFWoreLYXKZZfWLbpKfteqjZ8rjaGus9vXaPYkYk3tM6VWKvVNvVfY4q11PMHLBEQ2ASbsAjVnSfLuGAsrA",
  "key32": "2HN1akByPHr7sELoTmA5LDmrLbbzkQJ4aQEmyGXDpaEwHJ9fHysSdh9GwPGqkz3bjm8xJjK2n4SH9QUD6VF99hxU",
  "key33": "xmy7YsJMQyesHzrRX6Dn6VWTe9gupmJzj3D8oU9GBJYF3iCLgUhkqpWPYkf28ojrzmjeyq3iQf5PPWXfpVfXGAX",
  "key34": "5ujvSFCa5MCSp78Q2WnAoxy5ao8kGRqZRXFF6dkveNwFu4ki47w29sA57cbz3Mcy48emrHsdMXyafF3qHARKJu8q",
  "key35": "5Ba3fPvymxH9Mm14Xx9DwE8sVaDEhwpe8H7Ph4frrBLGb61yfNgFENaLUemDyx1yQwCeuTWd8BX649Woa5e4JU8E",
  "key36": "5VW91V9bFmApLds9uSHrah7cxsAjCktsgFq12Ma29DrYW2zKTZwXNMBfYa5GzLoxdGatk3624y8ueELscaqPY2WN",
  "key37": "3rre9HEz8BGqmPDs7joowrtdfDEm2b8om4G5aAZJeLUrkAMFVS8XhRcnwKn6BizuJJQM5sPmZyjGkBSXmXtCwCiU",
  "key38": "2Yi21cAZLsGJyzAPzXc97Biw9ovARLce3GTsirTNnwy46F3irkNsd32Qsby7vSQtmYkKzWR5CsUfFqPtRBY2gAFN",
  "key39": "4dbdrmFhz1DGh6KhmAmJHGTRv16p2ChYjvxsJJnLaJRXWQjPEnA4XRemkomL4ngZGJ6Az1PFMgK7FAsATC1cX78R",
  "key40": "4s3PzWJyUFWfUBXY69U8yU2pVF1ZKpcg2zpoWB38tnCCpUbWcp8XGXMTHmhWkuBnU7sUcnjYESBnPLyLtdaM77bj",
  "key41": "pVif4bBo1oUoeCPJY9xJe9oV6rZ3Vf5ZUGQFAJ9yPjF8r2Azz3cWPHLhyKWdgPr6nmKiAXKpsHjnvKJBZqQckjP",
  "key42": "3LpT6pZgTnzx1onLNMcmbo4oq2Nm6UpNDA88dsJkTpFU5Wq92QTv6Q8sRXZS3dJvQihEKxErPQ8ZtbECJxihKpCQ",
  "key43": "2dMYdX5GxB93LuEWcKMgxbg8zo7r6zjhWBvABERoX9eALox3bkEG8rS61ttan9r2CbK7Kipzax8FVxypRjuS1iPV"
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
