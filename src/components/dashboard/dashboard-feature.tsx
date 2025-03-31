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
    "LXEndz7xfCQax4KUAa55GGb8XqLov8vbFbsy7bEKW26kWhf7NRVazjYzoNNjX7Y2iof36QexUBChWvhUPf9F5WD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zmvGL1nbpxy33wdSdbqZJnNhwaQeoeNyoHZiFPALLw9iKNt5YFNbCjPpKSUqkh4dNJ27u5pEFiYUGkBdFfhCK8F",
  "key1": "Z54pZBEs1TcCutXixBoZ2ohCQPby7NhEqNx6K9PKuhRLzEFghXuZ6Rrh3eauUZMkejHaWwyWyQXh9XhXuCAUEox",
  "key2": "3wRRcx66uVCLyHstqkwfmiiRrAjG8RmQNgZY5JHvS6ab4oG9RssRKoSK1UY17f4QzV4mWFnQmorqeFfSA66ndE1p",
  "key3": "UAdbo9n4QxiJ9DC8gbRu2Tu453EETLDuVGmoVZenPZpemaoziDjABHMRiAEtNCYSX14Dzaw4jJD7tB3B5eqMXXq",
  "key4": "2Gdv3nVptTiZrAiRtCDocm4ctFvD98kBsPMYNgYX3mrVbeiizgwnCWhXXEAnUpmjeftqKYWXLqTruq6cdJYPgFMx",
  "key5": "2VsyhAKxnrLMhPQuAeZHHgojDp1dmzzLSd5xPRqLNvgSLXPywabYF5U4kLYttMDf6cSnhRg4jFgfH3ATVvwowop4",
  "key6": "5LF62L8y3pfCurqBFc4woCv9JbNQe5AbJzZEe69Hqz3RZ3EzgQTmwwRtuhh4m38mqhP4t2teDMdPVMmP2jnKxHf3",
  "key7": "3ykgp753mnSj6B1jeZtqQnRfgSMDVAivuvr5GkkDfFApJJdy5RCZKsnA6pCNP8gFugTHaE7C497YP1wGkRE3gT2E",
  "key8": "5fEFR3kSfKgqQjV7gLuKmDhiSYoXKzFhvZkHmJkZ2wVhjSs34jgJoDGyr5wFTSDF46c6JgYC4YDwwC3QkcdW9p4o",
  "key9": "U6oRMAJ4Sz44RZ32CZHF1ykED2Dm8zJhoLPp26Caoiu4YRk6vsEbmPSRA4YWMYHFEN9BbGr8vPkTTURSGwpoXzh",
  "key10": "QCXHvCmb34rjedhfvCFqDh1sWzYamHbjkHJALrN8n5RfVKamAra671PvHCtFJbGsyNCuRVjNXgjN1wRuyUFs9pd",
  "key11": "V48DBmaBiA9VuKnPL9RgiAZXzi5dWGEU9Z1QhBvCU5NWjtG6t1QJTKKTeiu5SSdD2vhWEF7C37rHTEY7wc4mZKA",
  "key12": "rdCoXXeFgnyUwfTC8kNsHpz6sYX3JhYS6G7c9Evc5LTn18k5dqUUPHJU8xjk12Pf6eLGbEw7YTfpuMG1xwd3P72",
  "key13": "3v8JG8t47ZUaxe5pN2dp6GjwuB4C5qFaAwrFGJGhNsbEe8qbbDX5wz5i5z2CZQ883MRLNuA1BQyzqBPni6akP7g2",
  "key14": "66kDSkCXE4xdxAgSjCKbg28LPRFDgD9ZRkEQJ2AZZpsWN56iEuBMJXWTEyKHUfpxNc8AiKwMsU2QRYMPHMEDFRfd",
  "key15": "4t9FjF8iv2cbwdGtPgy6Lt8kaP4hrcSD8W3HkHkGy1dk1Y1MLXY99vGX3UPF8YMtCWrGusdNiLykrbnGXocNLgBk",
  "key16": "67FghHu597GzsaP1KJiB53hro2uZcDjAq228kzRgae1Qg4GSUvb6pERKGCVBAN7T3TADY7Q6cvQajiqfUtmPAkzM",
  "key17": "5XEwP8CdUDqELHCXa7kdLk3wZV4zmirBnEvsEhLmm16znQhLdjZJpHToY6hRaSUAs5Jw2BL7jsLNCAmXuBm1Cyjq",
  "key18": "6cjHKMT4otHwFgPeaxdihEtqoM9xkmW1cZcnn9fv47EuJ59KhWAm47Ftw5Yf72eWVaxvn7UzgASq1BiHKi8sPWY",
  "key19": "5bof5pCfPNi3YkC6bU1pj8Br2Ph3tV7ySGwQsppXPetDHunCkutsBMyfpJQyhXJVVNrzXZ9TCd4fuLYqQPif4LU1",
  "key20": "5QseCj6PytVSVc9Ck7BoUjL3B93LA1sUnJmvjco8uQV8wg8vRnR96dxrGgU8rFUWnVGz24WF4uhHoYAc9DT2LSoL",
  "key21": "2LzDHpT8TFGpgdQXaWEmvUETG2wsBHQ9rMdGgnDg6Uj4gjrzfSUfydeWfek3qQQyBvHY1ftJKFSDNgUnioiTEb99",
  "key22": "qodbvxfGfmhBjdGBus8JHucVxVSf6dLZU6ZPxS7AHdrHZ7K82Uh9uLtpN1SfMHavcy4x6UP9xeFs41NRZYJX9BH",
  "key23": "4A1LZex5thR5hhbf7UmVAqrTz5PMsR9zrZRCxtP9qrfUf4BJ3hBXHky1fqnEM8MkHsU6a8ceXXpCi7qeD4TndQAD",
  "key24": "2epQEVdJVsVxYHnwodLkFp4rdxhmEW9SnGxDn7pbjyejEnGyaWmZcUSCDY9pbVsuYtNFzJ2LbM1wqDcom4dNtpYK",
  "key25": "5678fpUrTbiij97eeHa8QGtJCe5GPtCMZuLzCcWasse2uWtfzj2MPaABRvY5QzVD4eiSC8t2aFXah1tEghzEja5h",
  "key26": "2BXcWPAXRH5BbkAq6PbNrDSyCbViCiet2ymvoqUbG2oT7Y4x7zivkpKKaF7EXpSZZJhmjR1mqqWvgN2cDJ2G7udf",
  "key27": "ipsLM3b5Frzx9nj5maxLpNYxf74REN8LnuiiR6ZKTAmCyBcuCykNwKYbqpgxfkAsHgEsdrjXZXaXjsP6p6uer9e",
  "key28": "3fRGHQgHGt2nDtnruvhHb6Sd1PkEEE9ZJH6xavAQ9Sb8b9M1LVdSKGhgzjfLtcPevcjprPmms423a6mjYeBdbqBb",
  "key29": "m6v9aJa1NNmhiJGQ6wWhKKfRuvHnxSgrejwEU5Cf66XPyJJ38TWBjRRitKq8KADiumduSt7Bp9PaMBJFPdSevzT",
  "key30": "gke1fG2ZNAxnmsaK2hFFPRTAd6BmLQQsaudhaVY8ryQZpMwsVdcfcYRGXAQAo3SSDbT8JAfATAcr5y2NqG8nzFU"
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
