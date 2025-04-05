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
    "5RViHZqmUjHgy7NBMFY9bcfoxYSVJxKQYtf7vD1q7NBVZGCsFRHxsrfQDxB51nYBF56ZvhFMgn9B3myGHZ9Akf1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uJzJtAhL7nAq8qBMra7TKYR32ZsSRcQqGjw6CtEhCoMgtJtUjTw8157XurkXbPqdN29dqcj7io21LwUYTctm6vp",
  "key1": "2eLqhYomZQs3QLF4x8r9aHe7vWeLkncDwP9Ek6Uqjn6p9GwizPqou8ziimghzgHNPd4NHxMqxHcysNLbvEw7W3kY",
  "key2": "3N1xrkkoDthcfFMj8jf9euPd8Yor9eZLrhqb96omJZwto78Upin1zvtcuWm6fFhWbqGHGCBm4mbgW2jw2Suy9hk3",
  "key3": "2MLxQYXeAb8KbrbrDpiaw1pw3obRZe9PiGckYLnJ4L9bLypyW8n8jhHUVHn62o3gBNvQqwJ7RaZ6ZTFP6wqEQw49",
  "key4": "5HAdgz5PAsdXRyjx7FnssANRTnFTxE2Vjn6EpHSJNVCdFo2J4DGiXT8pmipGcDP2Ag69LFzQoqoiUkHKAGqFTXKx",
  "key5": "P21pMcbJpKPHFJhLKeayxEmhP7mvEpwS6QRgQHECHJyAboqgYwrwie6MDzKky8b5vp9csJkzovQ551RNfucFriJ",
  "key6": "4JdNj2bNx5SEgeJirrgGiMkwQymXV7zGhnEjCFQLmbGHmv39qAnB2LHtYqsz77EF16JAaxfBLYKpuHvPtcPFAqKC",
  "key7": "5tsgUHd5Wi36qAdkEtPeZ7YhYh5cP1DxRJP3ZGeSaqBkeWTbELm18DjWbb7n8fQr4z54h8DZpLRWr2Ho1SVEfrvC",
  "key8": "2Mjmv44vtN7DCrXm9eKaVoZPCw3GXhMaD5EwrtdBzDKoeAWD2RH7dpqLHzqjr2oXqoiJhUP1kuXbTn5vNsD7WPYH",
  "key9": "3f13LAL1by8GvkrcyQ6MwZ5fhVBxnUsLGtcz9viCEeSQ6uJoTeap8Wf9pqnBBAiBU5hurWyKqef7Agmp2ysjedd4",
  "key10": "42gPjnmbTE3W8LpXgkWbKVRrygsShZ4BhrJkodtyidgJs6dsi7k8mNYNqH9hgKU4qfNMdd2AKzVaQuvifd97fW5S",
  "key11": "2EYTd6UkzoAQnbrziMCqJfdGEVpmyvm8Ky4CzmvBbSNcDYmGkqC2yeb7dEwAZoEepwPWTwkAEFDaVfwgCpDmaU8j",
  "key12": "3ycAfJvcRiPWhcsivViiS6CD2eMX4FjrXVX5GZ6kaHCRLZdh8VeiaD7cS3CM5ERXbAysj1wGbkDiXwdtmxVDru1Q",
  "key13": "38jbKEYu1Gxv8V7MqpsGq8Fe8YRsJgwUcBhtDWPZxRMHf1ffZiXCHUAtTfAMxvwfVg97fXFE5rtfYa8Ybc7NU7F1",
  "key14": "LuKVCMYFUVknXEwhKGCgxpJVSNwESagDzNapjNGQs7pBhVgeaJcRuELme5PxAHXmKMd9k7ET1NLEHgkGsw8GNci",
  "key15": "4jPbWhDHXX3hxi5geiJMqnDhiDP7rEeaRQN9msYKDdF7afw715eVE1KUnSTPNXVuPC9T32ZRZCDwoyRTxYY8LrkP",
  "key16": "46ktHBwqCkVzAt8T1z5E35rbhvyve26Z5Toxbd2viMJq7Nf1D47WLsPmwdBc6RsL1EzuTKLCDUnwwf5RsTPD3uHS",
  "key17": "34DwG8sXhfQxU67uiBMmDf8GodgWLvPfHtjBBhsiSWbWXHE93EJ8aaqf41DN2UuS6vmsh4N92uzubSdrSYhsFgoG",
  "key18": "2puaxyFNoWdv8uKS2JfnjvYioZRxqvy27zUMCov24oPFv1sMQWVrQoZPrSZFe9nBJtfmDEW6NyozmtS5yR56rUEM",
  "key19": "aTQvEa2e629wxXp2HpZEvyEuX1XmPM5k7T4RYHEGvxg3j8zFksNJf7TvGMaQLU9vprhujpGqVcDfA1xB6hbyiUT",
  "key20": "5fyDQwXxnXb5t5PDC5N5WSy5ogdR7LDRkEdc2BXoBTCjNvE3Ewfi98HinWcrEELZwwhV5kYDgWpR5VngwCpMuFQd",
  "key21": "4hsgbrZJ3iSpsBtd4B73GxmjGnfkbpBTvo6dKXGkFfAnwEBhsLksxbyPmBT9YoPa7offdYK1mFc8knay3ESwAyYa",
  "key22": "5bXz5XgQNDfs81ifpPZE2hY181TtE1GSzzqFGGerZuM2SakedhM2Dhr5ZWwoHZqRTN8Nztp844D2fY54EmfFJfkP",
  "key23": "T8erRXzxTmCStVBUV4Q6McvwQ55kuGFjQwuEnXb13W3npYpq22xvMHWXnMe7iE8jwa1K7Z6Erg1vVFwB3G62Sc8",
  "key24": "4vX2utgAxWcFDPPnG5w81JSHG9Cuv6hYLUkvVDfhe5aCjfZoaG2voBmPSNy8favXM9BuGFV45MRw3aWJTxRYxK2P",
  "key25": "5XirzFRatK5oGkUZ6esb4NRHJJG4TXcJ3PFuYmgFwU1rkzH5CA5kqtgMQuto1ZK9mR7bHQKJuBxZ5HCTgvCEjv3M",
  "key26": "47HttyQ6gV6TmcTyJpRAeGjQxDtmHvQn6snQ8dJTX8iwkDD28YrCuVufgg9LghGQ74Jm9JFtavupA8utEg2fQkGj",
  "key27": "4UKXRxS8RSHCRMCxfeJBtEUEUTrAdaZ8ckABUShcAYjMmw6Nb4EjpzwN8zTFmvrXTWmtbvnFJ3dgFryngtVZWnQk",
  "key28": "5ts4owcErY8WmPfo7CCUgrU9BW4Fb4gRD3zEQgFVLA117bSYvagk6s9AVGfnmahzEegCBdt3P3hDHWU15vLmqm3G",
  "key29": "3oaRJjmjUTxqm5HRG9cmiSddqbebXidkiHYwpPbYJ9GuwsmvaJvQdyQyGfJnnXXKxGyCRoJH8TAui2QEWD3iNXQS",
  "key30": "shUvhg4kX78RKHMTMJbsepbruaHjqMC82RNe4avvbrpoV9Qm2aCXS45LELDQCumnLg7KLHivKQihcd2pS7uHPqq",
  "key31": "5sB9QLuTD1pVuJuvkCtvAoaydBVR61HdhZtmfDM87NjrdhzPNLy41FGCywoV8TCrwHK4Uq1pcZgSNMqMpqtcbebN",
  "key32": "RTHV64SJdp3xBG6oCXG8Rvxv4anw1tnYLtJGaNNmADSqQeLZRSCPvbufmMh5K7CN3FNC3hvCpAF3kb3ncoCZ16R",
  "key33": "2tYpoh12eKpuCS8nn3kPnXKcL8XMG3kPtYnUdgj5P3tchxBA3cFPxdDkvuozWTN2WR1b7mzznoQXLVcr1AWPb6AP",
  "key34": "25kRutkpkgV33LnTB1JYhUc9UKUy85iEwByaYFnhSd2okd3kUWQkD9VXQKVqobsdLBjk4KL3U22gdDMKMsNpeMKN",
  "key35": "2wLLvyPhvAjpiWcuE3rVkt6fgypWnREnho5zkRaFZYHEcfGYV4wmBPFTzmvfVNqMqK5m2Uz8aSTKnECVdH9jHoLJ",
  "key36": "4nBUcTA1VE1SGUHCf4V64Uwj3bQpVegNMyjY7nAfhBubLPr48Etg87hZM8dCMz7MWShbZtGSYQW86tCL68BvMqcZ",
  "key37": "2xLhcQSVYJs9JaZusqGJPKGaYX2hkbXaQQyTEHXZf1YAxTw8SzVyXWWdLRQcUnrR8Xrmp5xjNJvQU2teykBjwo4m",
  "key38": "SMR4QhuDrxBVKQNaSFtyhAJxnR2kvuMoU3dvBrq4yu42Yyb8vem6d3rpb3h1DL62HD7riizgf8GarL8orCxxQqb",
  "key39": "5RRDXhUShuetoMW3MGUkzDPMyryMBew2zaxitRnHGQTZv5L4cjjRbu7oM2anXGNs4iaZor5b5RLVLBquFN5UUZL9",
  "key40": "wivjCJxxwtzqxxuqqzt78cW4yCKBH9PpvVME5Jx6WE9hnapaTC3bRFL6CSLbUJYdPVzi9V3H7CcFBHuKit6Lo3M"
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
