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
    "5z6A9FKxSqKodgRunGyYkVtw6s7k9dUmSJQBDYiH38L3E3uts5QF2FW8AFFoFoXXYQ9seR8TsC49e6CVLu5vamyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aTnB83NGzd8Ap2E9gsRspkbyL9JBJsTKhQFSVgVLgoxJmZmgPio4rSQXUsk9VwnMqkQ7Z8amRd79FFTE8xU3keR",
  "key1": "4WBJmUUpg3rUmmApsqy4zWqgBLfLTtHrn4VAJwaEoVCwPVrng8dastd6J696pcPEnFFd9BVKguq4uzo2BVjRk4Tv",
  "key2": "1MTi8Qe23Xq6naUBEC2DuEAuhfsRoF4zBN9pHst1SjzppFbYfyjBRNWPd6dr6nzsqcdGaamqdpF1AQ2WUihsPuV",
  "key3": "3p4hfHuqUgXSWBmba45fWq2oNksje649t2BGbqAk3uear3uYTV5Rugk6EMTkq6hCLweqADkj3dLABNq7wCPGjjJt",
  "key4": "3fLLd3kNuiVjdHnwyLdPvm8bSAzqpuF6EEn5UP1ETZ6NyYcYEQ8fsTC1HX1pGAvARxeyiQ99MdiWLiA8UQ2eyaVb",
  "key5": "4at49TyXgpRW8tZuCjxof7AUzzj5pUfnDHTdpAaDXQfL3nsE7eiuiWqGotXczmSUHsC7MQMFoAWZdWXudAqRxD3",
  "key6": "YKehNehNS2fuEBcoN6Un5ThrbhP1av1JNTN38zpUJ91cyQoUWQhB1eGxU9mUoFfNMjY4QgKAVENpqVWgX2riFzX",
  "key7": "66yhvXHK6MYozpZy6qGZU9LHVxWA73GNcHM3t8LVTirBVG3bwYfxjKroa1yuCirZHafpBaXkWLuEFwQSzu4zDCtJ",
  "key8": "vbzefJCiZa5eKcp6eAqXFTfH6y167sSbvHzGEWohuMxcVHjqrthcQTaj3DhQexTb9fc1b2eZVLEjFFtZEov654v",
  "key9": "3snWm4u2fjc8d6Vb5BUFQnRth9wurfPocV7b59rY5QHrNasdcniBa1c2g3RCdo8LgGSTjNJ74qsnHGwn3yDq6Bug",
  "key10": "bL8TtRrSER31CW6KFJGg63FBewqhki3kbtibKjzknvPTZ2Sb4TKHnG6zPgh5JRNLcuXbegsJa1KrJh42AzTmqqM",
  "key11": "yVAwAJCUBw82CbaQgfuj7F9yMtXUgJDiLEecoUPQRYZTVTHDfXS1xAeyj1i6EQ9xkKVknvAcTTd7N4U7nCofabM",
  "key12": "PBESWnzwmgGHtJ61gaRjbHxzCnTQ1jAy4KmqbSEpAgThMBdDNHku2yJnPernKX75Y16w35ZZVxdshuehKz62eTj",
  "key13": "2TyHNEaQrXmccFYh16X45NvTyVgsQMySUNq5uydXGdtyj51X18dEmeveyn4MR2taQCPCDTX3gudZPqBqc151BWeQ",
  "key14": "4x9DzBd6oW66KzyvMJaaFR56rQMym7BHPA8F4ZokSsCG8fMWC37xcbfWP6jN4CZTuMyE1weZ4kPYA99YpwRTAnhR",
  "key15": "2VimLAoqxnHQz4jcLWwpA95J6zSreD8ZkyTWVSLELQfRwrUhat57qtMb314Vcbz4QsM2ZvG5qECu8UakBNhieY4V",
  "key16": "3QrssyHkk1g5Kq8AVUTVvat2GZEFnx4pryuYg9fXE3Cokhcua1WP96UcXzBhJfRsBo3yh4WWfDz7pViXtuzcsbxz",
  "key17": "298Czt43w6NtASd1f2gSLtH23eV184d76bU2d5xos2UaSAVtvSJbddULqzSFSrtemgBfAtHhbUw9fRPeKHCWHMCF",
  "key18": "42az7XBjfrwF2EkSYQRjoQHWdaHTmVW23kk9ypzCydbpLXb1vrVEv9nxdiBcasXBJBX8PUBrDssKk7j1m6Dd43BF",
  "key19": "3bBAtQN7w5QZZAqfBC548o2Dm24srrYYq9QbmXvJxrhxw7hkXV3S8cB9KLqkNLxwUcMhhrDAJdzTESPiCiUfHK58",
  "key20": "D373FREb1FD5QA1vbb291Wza1WrRbgtJurxCvC9NcycNgs23dGR1toBRvbGWmCJP23QHCRPsjx3E9hAJX1xRYrw",
  "key21": "3ao4nk4uUrUMNueuWjqdwv65zF5BVy7NsE4iTjq3JGTGYPbv2jX5i5yn4bbiCHYMhniJ2mqmdvvmpWKTUxvaAkNV",
  "key22": "5UeNasQzmdWB8wCpYim9kGUtBjAVwVDncU86ymMXsN5BGWC3ewyiVwvdsLZTFeUvi9UsbNhY1UbMfo8LpBzoXceG",
  "key23": "4TMxBtX8vPMbzgJKXbtHj3b3ZAEhnjpZiGUdT7fLSY5m7YPrRdDQQtJL7LLxkrEeUtCrK4PbcS9ZS4fDAsBA8Xpd",
  "key24": "2DpHVJcebDr7uTLJFY8tembC4Uackyn6aMEQVaCMinbdmkydg2Ptp9m2Dp19BRSsurwrG5bBAYxQqGLb3SrBBTae",
  "key25": "3EWP2jkQRMq4W5rK1rk7whzF5Cg9SNqpxZT2T1YmthsB7wLKpy2qNTAH2kahvb6KLMZBMw6kCFHfGsugZrnBSVFm",
  "key26": "3HeFaHcPEdRmxBL8LJdZk6BPxtLefDzC45vgufaT2yxRKp7nGBpkenkpnAkA9QFtgxKQSqQq8Xi88Wpso29yjt2y",
  "key27": "5JMPKmyhBUBHtow6jeh7i7UHgmtXHR82ivcYyf4U4NjttECNEQDRR7ezxBgJZdvZKx9XjBwiTR5krPrmPQd1yxQX",
  "key28": "5PYn9Ba5F9Hcvjof6vr5RZyEBfn9HK24kZfyB9sxh7eL6nLpf4mewHA7gXjwMC4ji45WPrjfZoApBNk5kSR5suh8",
  "key29": "3Aqx5veEGBtkYdnGc5nUoMAHLYaiNLun9ZZ83JLEqz4N2Xbjf4YDrRKYMiPt9vidbgNVn6z8GbqkawpGZoDwnszc",
  "key30": "44CJdDgmKVBDJ3g3YFDeY1NcbdmtDLJKY8ak2Kony5gyx8JcwvAUzYzXXdCktvZs4kd9nEV67aWMgH7RpLRb6X5K",
  "key31": "oyqij4MfVu56xyzsHBN4pmYcLYmJMaWjPSLbtqe1SzXkyPKah3SLp7WxJtkp8WfhRyH9azJvotE5LHxFh6HZZWE",
  "key32": "3kJvTjw6YyuTk3RV6hZsfz3s1VuVhoLBCDbRF1zBYWUzdECPJ3XVSUYyTA5t9KdsMREQy15wme3BvZ5NZz3VsCes",
  "key33": "LocdyHueCTS3m9nUcVqWYMFNxHFBYNFs3ndxu8ohBFtBZjerMCNJEoRTXqCJMzyBng54FYdQFsJGfLjRo9zhseH",
  "key34": "15nWSyyskfX7KDNnjpydnPXCt1zQTr2pfE2ibbxHPHbjUAd9mr2L8cGWLKDrDToiE97uzJszCcMYn9ghpjTWqHG",
  "key35": "QHsMQ4wNTQwJcYcgoJpX23nDJsyrA3ZjZ7ZdnknNxGuFDWtd2eFsNmbFKFnpa4NrTWNRviiRG34D1Hd5rWRqZ6r",
  "key36": "2W4KJbGNGPUugobPpvE2pr5xBnHznxcPp7ycUYAzu114thS2ztZZHppVcGgeRxUFn1nNYsb9cgy5vZVa2qtAqpJE",
  "key37": "2qgdU3e9wqN112TJQZV4XLBndfYPg395wkbCiEs8zYgLVJmKbXuZ4nG63ntfPd1K4CjTi6C8WSUsKoTJMindW4i2",
  "key38": "594MYXguiQcqgqdi6VQ2dAqCLXPqBvFwAWATViG1xVWQUwVXnMyR4oNrMvAeesgmiVEnFVMU42EdtAmLSDxXKywA",
  "key39": "2VyW2DqCYWxzbZxP9zjTvht3b1ZoHhJogzGfPEMq3MmKzDq3EUy6geskyGRhafoRfPwezqYrDXAtGVnCzThxShX4",
  "key40": "2higUH22y1XwBt2eh8tKop33ZDM6Hx66dSfsHxeHt8E7SBevhnw1dVif44Ln4kL8qPafcbdtfzTB1vgT692KpLF1"
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
