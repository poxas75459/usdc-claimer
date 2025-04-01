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
    "D8LNGHJpJatu7PAGV1oHnY7UMziSGSkDgMP7EVbLy2mfyQqYd9MLqWXhRwBDzEjmATmHRYE8RkhaSCZV6QieQkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sankzFVawcAzG1UxsitWuuMXd4KTHsTFGLTc4GAaCPe94R61PdJc5r7EdP9URMveRFgP5Des8aeSNMTtKvxczJv",
  "key1": "3oUwWHX1mnsaaoVELqFkrr69YkfjHMCbyk5pQCRGxWpmfPPtVpwv37BpWQuToqbdj121PVcif3nRQ2vJQSfFjzbe",
  "key2": "4zcHRTv9Aoh5KkwM2CejhZM2tRP8grtgeBKJboEbb2kZQmVXCmtGNWbP4sWbXD8zLr3ZwS5UPKkKdMuDvRvBNGB5",
  "key3": "5b3UtdyRURwBx69W46AadX3xsPsDq2wtFAm5iue2BpM4hjGRhyBTW9L7DkKEZD6MiRJidTr1ZC8usU3auwSoJfDF",
  "key4": "3Cv5FJvfMTbj9hGVM5QFLVJe51G1WT5hGffmgJiUXhgfiH56FCis6hM5YEB78hzoKR1q6dhu1ZtAfpDyrJ2JcZ8J",
  "key5": "5Yhm6XYGg7mT1nJH9vcjBf6afXTJDx23PiVEVFGSvhf4m4FtDY1i76yUNxyka3LivUp4Me1AFNJSUJSv3iFXgrAc",
  "key6": "4y5UKfiJ7hRHm5A3VBzWGWJiEP7bLQ4ugwqUP37w7iDMrwS49sf6wFMHvQzS4pta1KusdrpiFj9UMd9N2u8UmetF",
  "key7": "kBiJehsW7RZmLEH48bKi4gaNCNAR8qxbARSwNRh1vMEgiVRbEpmzFWQ6P7PTHYwWLh7xubbRqdhEcNhU5maUHN6",
  "key8": "24CpaimyQ7uaZzGFLHEbvgK4P2drQQgdY8fAUKhj3tiMyuuVgmgjo5vwgkNe8Tz4A28fdLGd2JpC4jGyFPPNnorX",
  "key9": "3JEQo3TFeYWwRVk6Aex1pYxcsSbSinYj1mSeA1ttDv7czpEfRvcKxEWhr5uGu3XeBXXQaaVMaxHqfPDETd5oc3um",
  "key10": "44Yumpo77ZxQR8UwEN8KVJJhXReNrmYEr7BPGJQ1hqPnzn6vjXhvx5VUMQ3eKk7VmSn7qx55rLt8e9kFM2rnJoAn",
  "key11": "2Rfjn7FhQSgKMGbCxndzwVNS2MPSxxcjVe5PV9Bfr5m8reSnwmzUhHPFkVKRbDSTCnuyz2p64o2TUv7Zgnama8ud",
  "key12": "sMJY6Nhu9c6WJKrDrdkYF4zN2Aq1FRk8jpQgfaW6GuEiQFb1xLnTjirVWs9Fjz7pyADP84Se9BUxZFDudcSmsrT",
  "key13": "67bATtS4mEX1avaADZ83rvrZVx8L5fCatmc4x8pqN4zMm6YPjP6Cgimxp18fFUhWsdyWXXaPyurDXJM9oVh4BqWP",
  "key14": "LBUL3HYTHhkqTFS63ZHH7FNTAW1ooRDVgwzeHL3GyEAKdqaBJncYot2aLeHSthwgJzUqjcfZPxhwZpgPAsoyidi",
  "key15": "5iGoALj9mSRLQ78ZLNirsGnzjVhrnkM4YWM3WjozEZtxfhtNoMrdUbwuTPZrw6JkM98vSTibvJRLyLuC2spnNthQ",
  "key16": "3NUPgVqA9bquf8JLGabAiwX9LbFx5spHmybD88WeDKBGydmZaYL2n4bCQ833oRhmvVJfbD64ASa115Y24zDGvQPU",
  "key17": "2cPqT4wNitYyP7u5QGHyq7yXZ8QhdANe3LQQ2Q417C6GfW2NUTJVPuSjFoa5PpYuButzZWdStkZAxEHySXmbix4q",
  "key18": "56DDm6tNyb1ZvHtGtVBMy7taTTn6pnuxBgXwjTL8wHMV9JqgY82FLxjqbLgSRy2uek8MC7KELSVpzUYhSFypFBGg",
  "key19": "5Grn7g5VYTDtprJMieXwCW6dLhdmqsJ4eHKCBkq6iiQh8AzEyb78Ro2fttobP6XKwMMUq2hcj2CZX5RxxPEayigj",
  "key20": "KYLTCesS4L8a4xEZEbK6KJhadrwJA9QBoXwXoWxQ7Z3Pbhp8yznxWqsBxoZd8sHRNqwKDcbXMWS1XfoBdjgbwLh",
  "key21": "5NmsPLTNp5netLFygb9PYEYcADdpzuY1nhDKthPX5J4Ubnv1XFxb42prXLW7VTAPnX5c2KUZ9sMhwqjoCoT4x3gw",
  "key22": "5ziLkFTECus6bQDxJQWzGjW1zvXXGsJDFp5RLNWU3Tp8eaaqXtMhu96q8xabAC54uR5SYBjAmqCUGwAMsgiiLGHv",
  "key23": "37jjo2uqnkbHjNXg9n9gWogyJobaBeXWEytaP1ScFkgRtCJ5d7EBH3G9MkSScG6WKGA5hsV6u4YpdfzSMvMzRKpd",
  "key24": "2jpD63swR4rRF1m9McF9rNA8cRaPvCKeDoDBdSic5pmnFXyFpFBZxdeYtmdhBVQ9R26yXjsFZ5jpmkbfW8L3PX7Z",
  "key25": "j4Ur1yN8rRq6zMYiFFbmtuDH5uiFBAQGyZWQ7pNCLywKrQtnt7hcmcSJZk46jVtcrzh1kCJr6md37siDuaM7QX2",
  "key26": "5kY828rn9amQYQYRqACRMm2pFTaviihBveBCT5pyZ9M4oXzcmcci6ozPr3cEqBUkpBGQAMtkimUuC1s78oUEopcb",
  "key27": "3CEELa5xzz1hiVfHZGFBiqSSwdhDGZxXh5QbpDn56aeyAUqavSvYFg3fuDoFFAuPHqNAeJSzinfMBFz2sdakLmcP",
  "key28": "5fLrVogGby7M2JduAGfD4MN47suBB5y4YpyZ5tWZd4zcWHGXnw1HheCeTSxPvYUGUQSZj4mqCMp37F9Mqt798bxt",
  "key29": "4GKCsiAsYUYJtkTy98XhrKP41PCbR2tmJDmCyQp16E9vevQypMNMZs5VKEZe9tGia3tbJ42WiqZLUT8CwK8hgMrJ",
  "key30": "48SfCu2pq2owodVUBeEyrJxXTTUSnEW6y3CheLdzTuW8naUSE2F3JUsQU9xagmdGUanVvAwtmq4jU9Qhrd5qjUu6",
  "key31": "2cYCV9FAYKWWNiXikw1Fsk2oGq79U4cLSdPgNP2gHHbLeV1sD6mYnhQfj2wRysTPqJaiPZ14sbiFz4gHfhMcfeos",
  "key32": "34qAjkoKKee8PSJkjFnexLGtfcagUqB1BuyNJkmFtpDuKnnsjPcD35qwMxk2RyPPgEyAEpzxV8LeeR6Eh8hkxcc9",
  "key33": "5hoZ1e7r9u4vsmqj5o5EQe2v8yz2ajnJZaBJLtnb4fJaVqwGGRzLBQd4cvCGKUCuWh4ZT2ZahdTMmmarZN2oJcsq",
  "key34": "3Z9yx5VQUfcAXE5YpyZfPuY939YP1k5o3c45r5BxTtxV3tktozHidz7gdskX2kDb28mFQKYk2VukgjgroRKr86E7",
  "key35": "5CttRQcUuY3NC3Zv4RM6K49TSGugnwg5AAiSVe5krrNHYBJ52CfBdmSVGjzz1HeUpw7ge4JimETwQKykzhNZXuWR",
  "key36": "2qGCFW3fVgdGEWzRQyEFyDfKykQgFJgsL6mEkLvFyLCjqajpzkR6Yh2YgjFy9FC8u676LVEJpN3jecsfBmF5x7tr",
  "key37": "4N8okGQvFGMVpcKh1WW2SXQasAMexgWzp4pAveZLZx8fKnj9NPyQcyajUBRNq8jzPYpegLMfAssgXmWJWANay6tJ",
  "key38": "63Z2o8hMdW82fCmffvkHkxMdjscSLpmiJDZvNkaeG2tP5utofgvaRhRvkTmSaVFsZoCzE3zPM2jha779YC6aCWv1",
  "key39": "5byedNEN2Rt6DYRhaAVsWfGYTjH55TX9SbQ6mHmgJj6gWbMcbMDiefoC4dHAcccbHXerJiWAANFu8o2VpsoQpLfU",
  "key40": "3hZhwV3RYYe96WTKYCNP7ic1rB7NaUBbf4JjzDLF3cZ4TCb95jTUUygTXDwkjjHEaFoYAovjNYHDvmPmPsnbze22",
  "key41": "2Qnso3N7nQsC28SZCXBy7PCZxvnm3V1eJUsQR9vWouJSZL2EKaALTyaLMCsUcHusNh3Z2UMPqfvAfj3ndCeThCyq",
  "key42": "3VYVKLx6nQCUn8e9ZfCmwEK4VM1V4a4YB5MMVaSirvg2VET9MDG9vPsf9qXvVARXKV9ZXeakNAQAnMhPXWwryJH4",
  "key43": "4MKeykPq5RDPkFbizcGamC4vp3yzZRRPJtvCVz5jjpvNGLdu2QNgbUuxhGSJjRRNLEP3CjVkELgZzrwRRPH5AjnQ",
  "key44": "Yyok9eSGkqF98yqZeiVSi9KZhiNhkCJ2h5m4Qco1quLBptccR131f387Q3x1NWMuPwTrUgGd7pkuo4H2qAtERr2",
  "key45": "25eRBUfwTduYtYJASuBCCLPzzE5cbEg2i1PRaULS8X8AWESF4ZCrSP1EZdvogYkTn11hQcAvJ84L682euzLfQxY8",
  "key46": "3NVhkjHeTsBZrtP2HaVFhtgvTQ8xfrzTt12PcHmfN47U6iVRJaEBFvvvmmbwoEpbfpUUfu6wBaNBd48kAj3QEHnh",
  "key47": "2Fy7we5o9ki9PTdWnMmdHyuCtmVooguzz5sFfyyU4GajvR8GnC1MQ859tDJyjrMjnEG61YuVqZVtmTD2MGwwFF4P",
  "key48": "2HiAyeR3GsVP6HjPhwSL9kPyqDNbZ4144QJQADfZ2s9XQRCckFdynbhYf9dqroKjN2wfnCy3kGzBqMG423NLAdgw"
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
