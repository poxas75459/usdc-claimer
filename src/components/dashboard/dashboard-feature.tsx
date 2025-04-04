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
    "63FRn9NApBLWtuQWjEGxKmDS3EayjAuWkPmGvWR7uWWRPfCPNSDmiQpL2pKybQb7curVSWYz21EPSFPhEhsU3gb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YwMT8axH7iD9u6KMhaub4rEKBisWwUEAPHKCGwjJrRT94nrmcHVTriFRov7Ka62kMChcXJ35HNbqH6C3TZY9EPz",
  "key1": "4g2oz8yg3A3s8iyR4jL9HdFxzeiQesv5BZE7FMpRCjiuedcSQumv3LaaahQ2Yo5QvwQ9F8uCBnHFU6H4VirwfWZ9",
  "key2": "4C1S3Ym6X6kAZEAjMbtqwoqyQFgWBCqedJpq53J2ftoJMuHKvLkTrwdmoiLTVHgmjrerA5RYfdMrzutZToo1VF9g",
  "key3": "2dmwZfifP98d6TfNhjtiRMVjTRqT1tWbrvPcGJbs3Jzi7dqQsVTjQfWhXqLPuRQcbvGiPLndDWHHcdRkpzaa4CvM",
  "key4": "5bHjmkqqLgCZ9NoxMbdFw3YE1Drx9EGRZBWsvbDvaVTZtHS6Xntb26fadG6n5TzxjqqQRqhDMfKmhR4ckqErwybT",
  "key5": "3XSA3qko7BQjpft38kPfXTNHkU8DYodM4AruCtodrzUNb6cVaWyc5eH2YwD3J88tGhBqriegmsJnZ3Ngj76Y4Q9u",
  "key6": "2dKHNvWjpFgas1r2ghHHysieV4rz3T5VJBgpAw5poBrmbCZwu7ioWdLPS8tJNaosht3oL5avaL5ixsrvLrh7ixgF",
  "key7": "42WfyFkQ4DbTVPy2d9TucpR7XiYDf2PMSE2wiNKCM32abfC16gHFntPyN1eMUep72bFaQWzxGaohimC2znzcx3LW",
  "key8": "2fnB4XefinJ2n3WQKLprUNzuDmVthNK5oLDxbLs4NnFWDZ5EFCB6U7z2w5ND1RsVgybbEyYwNfveJDoagAK2CaLE",
  "key9": "5vi1UyDgwJovrH5WztggXj8c7VhGqJBoSriAeaEevTfSMVWTGP1zAqMTSy5KatExBGPAP1NWnENHuH9ZhD6w9Pkk",
  "key10": "QqPd4AVCihsGE9AEQ9e1AuHE2a2nykae4tsYdnog8SPSL8bYekAoXqgZD33vc5esav5jDTMwDeadFEn6DBSe6bu",
  "key11": "KDGNw74SpSdZDDJ2Qo9zLqxSRDWwDTu67JnoBwrNoKFpNxM3GLRLgoY6dyMHUwvwXDixa2xRv46chHgixzuMPvW",
  "key12": "62Qu5toUcpcYZ8CEUZApdYV3f5rRtJgAHmM1wUE9nAFQ733AP7VcqeoazDdHCT9C8heP3JvsedZFCHtzsCQmNcst",
  "key13": "BDYqiKA96Svegg9CkxYKBtJ7VRiwBZgBB6PS5wDwUoEhKv5aCkhs9btXCKgkkCqC4BeQKdQFbnM4MFrXoDDXJ6a",
  "key14": "2V3iwx15a3HNejeUugsKgwVKnhpYDeCsG3UmgwUCRSHFGBWf1YECn5SKiCcXYm2AfJnqaEiAQ1vAZV2Lzg2cVxt5",
  "key15": "29h7q9wUSgJpV7FQrWPrCCCdwMiWTmXmBqWjPoffsmXejM61h8KoxycyLDfssMDvjocPhYqEUQj9T4y3FNbbiioj",
  "key16": "5ZcgQQAHwei5BhBpZFHwKKqm9s6dHZp8o5Rm1gRfdFKwit8bMtCnwf4FVXDDMEbHLiBeETZxnb48Xg7csDxYGceE",
  "key17": "5GoZYkSUiwv74aK4vs4TsmagxT8iinVXsyHTHKfSGR7UTjVYGdBx5fjxtBghCPYD3xua8CDeYcY5VgBY7348RBGj",
  "key18": "2mqZ8d8x8QMkj2JQKYVnCPTXVbyXJUPynC3LpHUXNLgkCmXfctdSHCUdrCVKXXj6UpRhnomXp43yf8QfhkJsndge",
  "key19": "4bL1jrKaEeaMPwuwapHvwHNFTP2DPYUtyr7VErBbFUhwaXeGPn9pQQcPSNU4v79QcFscxck8vbQ5EUvRVfWj4ork",
  "key20": "5F8wvWC7YuU2huKjFf26bdV3pCuFLgGeYQbohPxVfNwPkhgcthc7y13jXEB4yrZsb7mi7AXuxDv2YLq4hENPubmr",
  "key21": "3Y3uDw9wLvfCFZLkHryVSvFoocPUiWUgjtcCaARhcxYDJFUsU1ZNjdpSjPwQqGvjJQhnG3nCXfQDTHJfYoBjBL8D",
  "key22": "2yYEV4SyDWQUCRkZeygiHqY4VCtKmfyfj7WWJRBTnEmLBSAv1ptTmndEBaMWr1RTCeYgVFuEhmQB3EG7buBboFrQ",
  "key23": "2jWrP2fuRcgAAaN3EnCUdUQPPHp7Ge1JsatMmn5sQH8Htaq3bsNhzSmijSYyTFfNyXQrZVgy6Cy3wdBH9dsQMBSB",
  "key24": "3PUmFvqqGJ9nKM4Af3uwtZmgdg1ks2b2zngnNzWT9HhHJBT282kzrekqAL729kZdR3tCioPYJ343wxXD7u67nD2G",
  "key25": "4xZZi9BAuT8F5eDQELBBKhyLECmqeTjJzhkCmsJKqND3cDzVBiozMsSJBtuTeGiL6fLiE3u4uWCY27PM1rbJx2Jt",
  "key26": "5YFa3XhRQ12bkQcDFB7ZWQL64sujQr7PhqackGkaFZUj7wayzVzPWEVJZ1TUaooWmnYqaPi1CBTqRCfARotNhYVY",
  "key27": "3VE8QniTQTx2zmRRLnm4hefvxFoFzeQfu1rK6s3AEgzdybc7EHNM1ZcBv5kcWeCTgi5eTMsRVk713N3Jhw7uExL",
  "key28": "2gST1kChBJHTotMTih7izYhs6Ex29wHZ1jUYARdMjfMdaCjPhFJqy9HdBaK38SarQXXvponsRyE8BHtjAfJnRkqr",
  "key29": "58B15rpy4xdbMTDpya95H6aLB4yzvokYfA7rbs6mEGKVf4C6FNNfC5TzbwPrVT9GT4A5KAAMBBWHbqxSArAKoMFN",
  "key30": "5REoHN4hsQtyWCp4LFAoW1y9nH42JEXGx5VpoVvDZPhnanCvge9KChQ4BRxSz3qfSL1hfdM11H7iWt14BmNLk2eD"
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
