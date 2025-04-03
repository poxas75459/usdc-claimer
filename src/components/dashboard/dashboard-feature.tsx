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
    "5i4xfk5QRBx6SarqkCi5j5LeofqT6GHWjCt2SQ5ka3A8wXJEq7d2h5ko9amX2aeoS8pBttEKRNwee6XZQxdKMerL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XEvfhan2TWUrMiU2zqixV3LZUAsU34vNfjJm8Y2v5Rtwhpvi1EBs8dn8Xpn7biTMyAhdzRAhUaGs1YhRLPcyB7A",
  "key1": "ATNTCxWiJdo7vmhjhV6z9UVMxnEJU1enEXK8m8mFQwjrPFNRD7dXBJmdy75kJQEty95UAwRTv9DC6SAwz692Lvp",
  "key2": "2Tp8B5EYaQQyixH1PtWrL9Xzq1pcU1HrE9hhavMSYUB3kuhimnh77iiZiByYUXsyAqPqYtdjtWz1QncmEQ6Qqote",
  "key3": "4g7UsNjuZk8WVanrYoi1YSWhioaaBk451G8daedKP72bVGNjBwh2dHhqVK2aCFSyB3aDtFB5LuJCqMqRqPK7EzsP",
  "key4": "2tUqMJFjXGNEYAAQxN1y7CTJ3rBwLvkr8YK3CfL9vTkQh7zAMDvTE1yESr7ZA8vCVnJVhG8PVoUh1padXZ9sjUdA",
  "key5": "2tjis1PLKv7mTVM2jMHDixApHeFtp4EEwnbZZzh7ekt3mAsB8CcLe8Fa9jUdVHJVLx94FGKp7DCeKAaY8iDq6M46",
  "key6": "5mS7N3Y7arRGwj8Hs2pREG1JadRWKift6z3mXw1qYZ5dhEfdSWynmwPn3aATS7aPxrhrFiu5pvModACZTFxurX97",
  "key7": "2uovanhxojC5GVKjKbHD4GCNCXjZshAmAmrQjzJAz1eEPAuqan7RxFmNA84EdA1gohBmKYQZx9HoT6ZVaJxn7ZNi",
  "key8": "4EZiiGYqj8YN2phu2KFUj9XcEbcMortGKgL3UvSmJhBvLDS2Dvp4scQkbbCzHviaojNsuqJhe5artTno5CXjxk6p",
  "key9": "3cwnuurWFH38rzntLikN2FZAzco2S4QxkSabsdbrZDxiY1egZtL2XDrGEzPo69jfDHhdAyzCmRj8Knam9SwzGtZx",
  "key10": "fNzXREKAFupWZnAmsmZcYGa5mGLJt5npQckXynReesHRcfpJVyn6McdZ782JwhGe8bKN5mpg2crYhvboxFdaYZZ",
  "key11": "2yipihyPCqqVbFVj24FLiMWz7r2jFpqX1hU7vNwQHYAHSBimZbW8fiSVibqodUWUSVui48VCjRhYUPHtrCK9Pwbr",
  "key12": "3gDTLtvsYBTGKChXRdcGj8tcG1bfk77sLF8CTb7kiB2FNB4aA1ZjHtw4k23JcpLsifpmyrpXzPMxJAB7BLHEG2NG",
  "key13": "53CG87Rin3SFxUBm2oXeDqHzFgkHPnPdrfvntaP8kx8oj6gtB4RLocXf9fyvc66YCmTMt8dxQoazci1fPLXYZt5w",
  "key14": "2g7zEo2VEpimbkM3CVgjJhUxFJfDGZJ8xoeohYELeiwcPBkBw5nTTTjiDC6zwWpWW6V5fx9wSqGJ9fQ89eLhZYC8",
  "key15": "5G7qa1C5BhzfSGYasLa3cfnFUVjspeJMtXwaTvkbGTvTy1i9FuGUZNWB65FNTUUTgkrCq2Y8QMVzmLk8V4BTFup8",
  "key16": "3BkM6CzGNyuMnntq5RRuT6A1F6ut5NaScJVQ28idNByLiNjy2NmsuVnF8L4iFKTU5X4JxbVivTkdj2R1K6PqDtEV",
  "key17": "3kQnb7ybEfbsdP8ypbVsPLoQj6E4RkfVba5og1jcnB3tEHXK3ujos4smMQh5xd3MUY7gv3gMWyY5vanjHzWHrnKk",
  "key18": "5eXrNY8HR62voQYyNeoXbbnhkon3ftB37k4ZbYDdoDEYnuRdi5f9VXKWHubG2rYvnGdiCM9Nk2D6iou1xinCnxSv",
  "key19": "3TuNsczVxLBAUvh4AbRi2sHndSTbTnMZF4kSVrffgG9FGqNWFij1B7VNRFRRHskwfAbVJipJcXfSX39oJseN44oo",
  "key20": "4MNrpGR8zdaKgnr9XbPdig9xTW1RHscasH6pHrDTttCcYaQWLCu1HXoLHW4KBahw6SPiQdoA7aR1GCbsU7cekwv8",
  "key21": "4JBxmjxezQyZTs9zczJFJFMVMYnPN6stKYZ7a5HxFcUKfEXYHWsaKeCszjLBnybhTokdoApzeCcrY6JPmPtYm6Ce",
  "key22": "bTcohqpt7VBVetcVZHfweBbvy9sKnTF6HBEpx5s6uBwwnni3fKfpGPo54bP4kRo3JnF8Zi7nYvxdpfnMtY9ExRs",
  "key23": "5Z3HzeW4V2oEJ35iBUgpWPDVAuWxRSwWufvq4JZNNcoTJioe7Z89HqF6hdzyDfKXbYXmeEP7FwhHQ6VXdYhUd6Ud",
  "key24": "4LCQR4BPDyJFxp1p11VXVaYd93HivYvqrP7x54ougg8m6M3GZPEFr17H7QdMC4SNLP8ti1FeX7WxYYvh36Ca34hJ",
  "key25": "2ePJ1tfBE8FhhZr4hZxUMs6A1dUFjTSiDBos3dAGEw2ydbEvV1sYBd4qtd1JxqBKU14SjHweAfWdpPipg1Zni33t",
  "key26": "4XTWs8CHdrDVq4C1bv3cMBV3NhUuArtwcsA31krLeaX1sTNczs5q4xcv1K4Y35S38s4NwsNj43cZeLq6aKCiHx9m",
  "key27": "679rHsUxXygpdA4FN4q2hzVzDQ1yeSFGE9SFe1rvNuqjStkLwUXUYSrD7VeU3VPU4rFK2tHFnZvVd1ocb97HVguV",
  "key28": "3roLiRAq4WMKBnLChpD6nLv96shFEjG8nbDdv5irnDk3oLH4txLgHCFhtK6f6z3Td1Qjs2EMv6CVa6pwwgwgjM96",
  "key29": "31nzjbpbJFwu56URsrwJmDUZPbxaYfffY1BKGGxq1VtMBobT5EuANKCky8CWgj2xP36ZWLCaYSGjKPQEBQuJPh3x",
  "key30": "2hXwMM8L8x8UFhsJ6pHwyLLcXqtVhVBg5veWhoy4vmHkfcTFdPthRkSZoum5vap5YXgdzRo4Yi9AfsTwkjo1NYBK",
  "key31": "3iXEzy3qtgmgcys5ZHrfZhJEeF4vBQmzKfd1PNzYjdqEFxpQTrjssjdkSvi6DDkZfNsW4StqcKTARzREGJYup9pe",
  "key32": "5gKV8muxjhnpSWEWc3xkYvsGFZQdQAFcEriS1EXN2tZRUQJVek9eeTkyXSzdGiBcRUGDmjFJTDtytyyYy1Sn6Pud",
  "key33": "b2F4ejahrJuiJZ4GuSjScNftD9tZi8TUu62APmjTg827LTdWgQkf2ENhWhYFTyYmkeC7pk27poxedr62sMvapDj",
  "key34": "5JAvaJsAa24iGtrpjomKHJhVmJKWj6y3BTvVnMwc3PCzk6GsAJrhtru3mWvmNBBeTEUtaQUAvNMHr6StKRXNXbg2",
  "key35": "TTJDzxdkETrsHFomwnPxuQvdKrYxtUgW1RfLYwvpwhf1xDhkn1Bmsz31kFhBdxcib9kooFUwZ667ViqVh5zpHZK",
  "key36": "41ec8kzvyVp72G3nf2tVh5A6rMW4Caq3YCMeURmTcsJ1k9W7Zdofb5kB4j5rSNdcG5bkJsjybLTUp56Z9asfVSQN",
  "key37": "5QCZc7Pkjq2MST9CHq6uQTeg8FENuef19kfBhgnrCeZ9wNis1b5nbEfW2rMN7hzkPoWNeax7Y6j6PjsBHn7FME5W",
  "key38": "2CBsy2bCu2cBSAA68wTmnDqrgnkeXNpRtp9Y1nnZQg3uBQwp22MgzupXV2wvtqDH88DSUuCeka4icTGN9dxBkNkL",
  "key39": "2d8wExCST7ePntoASw8Kh5sbsR84DwtWurXsUBuWUwLAMuFBwkRzd1LvzS3ZbciNP7FKkzwa7cnyZwLqrb4NTGGr",
  "key40": "22m2nVka25RnLwEBdTEob2ZXxpymswJhyPLw8qbb9gbS5LBwze7mjJWLCLM4hawpRXbPtYkNhGBgfE5G6Q4XCHsB"
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
