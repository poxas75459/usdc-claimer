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
    "56NqTfkjPNsUe3bKyNgkMr1t7cNNnpsKZmsengjYTuEu721SVCqACdcfM4aNkNSqjtqWau2gwyAQVAKpFnpiht6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SqU39zqLdUCURVsiSdq7iSfTHvPY88EAjMByAajiyrrpwbRHDLHHeJDPUXHux52dnhpf61y9srgLrhCYP988dRB",
  "key1": "4yyhjRTXgSzNctP5dLe84GAkdKKAQvis3U2FQQQYjKY2mHhXcBdNDsStMaf7Y1VdDd3Z5dTgxD5bS56bCtXWNtQu",
  "key2": "2C8wses4WqSGn931jy4LRUvi2n5x7xzzMNb97PD7h5wQpzxWqYiauvQJPcCEDYPxVJx7QLwmzYGjwFoHaJpULbug",
  "key3": "9CyBRmtFHyFRntG4Q4huonMtWvSzKGBCcTGBSSW4Fxp2r7pDBPYUu6XudJEMn4m7pNJoEaoXDMP1BfveRhKtmTo",
  "key4": "3guiPcPewrqbXHHyz3yV8epd1T8HmBuqcsxBKag2Jb2kaSV5RNNz93TsWcEmpHb5pYNaKL7SJUdWM2BS9VWRBrbC",
  "key5": "38b45bctpomizCKrbLjhGkXjLqPKbytzecbovtnQARN7m2XGEj9pjJRzTjaG8ksed7rddnZQ2zuLereQLnkmXQre",
  "key6": "2hmPQ6dLPjwaqwRpiyXcm59Lvtt4YoCcAgNQssA1Vuzw2Zwm5agxrEB96jDib88WHUnuDrBBEAyKomcGrQ8aW4cs",
  "key7": "3y2NQsGtEfuZB22Za4BZTHmvcGKRqWoW2o22tmFofWNKULL8gZzHmL3Zp1sgcSUG2F48yHeF17AbexKJnY3A1BZm",
  "key8": "5QCsZ2t3XYt5xVpqYa8oufbcGdvZ71b2JNBMU6P5GnscLMXt4fQKkh2T9bRQBApKTwGMN6eU4HccZVSN91QhY4ax",
  "key9": "ZfFaBJ4WPNogpHvs3ALSMUu2jpYnHRsC7kbMFwNUPtc7GrQrfQKrM7GWRnsYwG4E7Ymi1NycA6TNBDbZgm5DvZy",
  "key10": "3gzxJXBac6CxYmDJPvsWfajjeax69VderWdHb41zv64jFVbh3Mrd29D6QjmZN96iLdr2cfongnzueMDwkepRnzQ1",
  "key11": "3LTLjUcnkm1oK2jPLzTe38vbypsRtAxNvGQ7n7LQ5rCtfTpEF6FeSNkmF1RptDy361ax3q8zirdyv5coYpc6DJz",
  "key12": "5NYGtTSmHJt12ncN87eLSPmDWWgZLVDtfkWuSbhBuEfvDvXU5aivPJ3zAhz7Ch52UJTno7Ckeethp5q2KUrhDk2P",
  "key13": "5eJcr64BAXhZBG2we6gYDK4x1tSzLbX6CBT3YbnDhZkQQMQZdLUCHjKp7ibfK3AXNMRLcvvHiuokusPUDUqyeDYq",
  "key14": "2XnCcMP1CN13x8Hx5RcHuvdK1JnrZzmKF9cLZdGosVMCVP421QMKzpfq4wVaDk4F7MnJXxcj6wKd3vVyVrt3vrK6",
  "key15": "57PRo9TbLzhG2DqpYL8ZXWv9pXtSDsCzmy9xkZ3nkj14dZfJKYEBsnP9ZjT1MgZwtsF7SrKMtnNtbamrfPTKdiom",
  "key16": "3o5PSRApaDnVMTzCxSA8XGFkGJTk9xWZohRuU1g3Tqvomfat538kZ7BDR2LS3Nmz5V2eVzg9FURKDULFxUX6f8TF",
  "key17": "39NoSerKZz8VfFYo6D6Aq8Hv3Bm8M55DyA6o4T43V8KMn5WCcXi4jaYvr5FRZubaTeHCtX3nfLLYewA2dV4EoiPd",
  "key18": "6RJaQsRtWSHyNxVZDnQvBr24EbjKCmgHnWuhwZ7pSpXnzvdf8mtUifLenmEB9NK8SvMHPNh58fXH6aaqmLE9xaq",
  "key19": "24FQCoNCE3LFVDw8A9Vum2RT4RTFTESMC6N2uFKM4PcJGZjmeuydR2bnN2RngRQqrnBTH4pUVMghq4mfegEu3ynP",
  "key20": "5qve94opjCWFJT9qBRmAGM8RbKK3bPGbxMnifVw79yLPN29vsLDsHnEgj1BMYeSyZBMe7yk4j7ZZHDgnLwW7pAXq",
  "key21": "26VSck6NWveN2V35RxZYDtYbhmZxbiHsxeztF5dPamHenLRUSdw4H6Rqkv9f9uveUctq1zrEUyS9pAuw9mb4NC4z",
  "key22": "2uNAjjtwVQqHmgnH1GiubAdVKdeQgQ9kk6o9TjHwEQNMDoyk4Pgxu5L857hb2QfYB8cs9xbm83QMrMcPVyTmCyQd",
  "key23": "2aJ2TEMK3Z7H61ChRa3rDJgxUQQcgdn2m42ygC1b9SSueZdbTvx2wLLrQE8dnwd9UCjwpLoek4ioek9Spo1syBj8",
  "key24": "4YAYtNXKWyZycv8XRystKsGL2yWqMEKGtFaDwvtqG5gWvtoS3Ka7wERYX4MsPXLJcphkBmAk8Bm3jVXSDc4PzLQj",
  "key25": "3DMVb3WTxvwBuiApMmBPxH2SA2oouYbkGG92Ge6JhcSYo4mS7f77MHJs2hHkoALNKh9RWwMRcXoecyGDWXW9LXZf",
  "key26": "Ejb8JPk4vFLfS1FdoFHyqMrBvrPnbPcyiVLyW9G6arzRBfbN3kiJeD7FEgYhp2kcepg5ToW6LKK6y6t4UP4SMfH",
  "key27": "4gvs7jUwjTKfZ5roJmU3M6NwbNLz5pXs6fFp7Ty6AANaTwAWHy8QPW1XAQHw51aThWJkW3VbH3B1sPsCtsS969ow",
  "key28": "zcqNzDoytJ1LkKVYmDKhgiAY8tcJKybpjBrBpi7UFKhUyZGAbs2prudeZD1XYHQo81vrn1zKfCCVfzTTnhpDQtF",
  "key29": "83hR1FrZBu3xKRw6aY3YNi9Ck8jAs3nEWq8saqfYmk2gjKs14A6QmW54ogGM4HVCJqjdkzKeALaBCmq42XLyDfV",
  "key30": "4S2dtayid1gpqFn3EzkhETP6xbuLGLhqPdknGTdkaHgHtJEV2ZJFs3yHhZ4MaPjbo9csXDWZbR13wdpFAhtq1mQx"
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
