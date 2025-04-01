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
    "4AtcDi117QbYvbHZ4pTVsPUETLSpUsR3zdV5SPxH8wT23Bokcz6KEcwRL4jJh1zPTaq3Bb45Fh4cPRZC1XHGpCz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dg92RCZ8pUHbtQfoyYFjGctRzQSYVngybRbEWW1jtFeMdSfTUH5rgtuUZNwdDPqR6yHWe6rDz4S8AN929795TEH",
  "key1": "v38aVos1vGwhxuNL5ue1ZsTNdo1VjpVqptf6mw29dBSccozq7c6oJZ6dSURrPXB1avXkcK7VQ7FoWSr5cPfY92p",
  "key2": "2QKGTTzibUrfFWSqovo6ZQU2P26rVvLEa5TC4TFe7Row5ZjbghBPpbh9So1EaAwQ9VWN7eoB3ngoKFyhzn1bHNEj",
  "key3": "4q7NNgWWgKPoveWkevSaijrZYKpp6s7P2qHb3YVWiW6vb9rfD2vFJ9ZZ3SAgTz3RjzZM56vkkXpNgTHxYMQc6hFH",
  "key4": "39G36SRBnDrgMEM9s6NRvReiuJKr3i6z3KMDrB8cN9xDh6cev6VPiRY9FdCEnAiKGTdquQN4N3Cz35ERVaZxW7Yk",
  "key5": "4Xnr8s5YJMWG8UqkgXVwbSj4PgwnS7xUNsNwpfRyXcZJk1oAwVWdNe7ai9S9rnE7z9n21dzh77DvP2d7su2ey8PM",
  "key6": "3ffZCvNsKCVi61zmR2Jtty3qEhgNbNzCEFMo4NXCVMXQGBpYmH1B7dXQjjrcMsSWeB5AYPJMG8btNZhL5ru3KCrw",
  "key7": "4GQbdhpZ4r4Py473CprCbeWionn9t8PRNSzue7eenTj2t9W4C5LTQfsoXmZa3gXLtfXEy9jJvsHKmZzZxuzReKMW",
  "key8": "5t8AyKXz3u1uGxaR2Tihh7aAG4kHKkmLgvY2xR4gwn4tWwnFvD5g5Qxvv5vx3DALMT7obW6L77DWKftqdrX45FPT",
  "key9": "54Wowzc7uHttQ9Md5MDRkPDbYviTG3PB36ENMkkoKtpABeBYZkb7pmDvzHRYVAmkRLY51Fu9G7AbzQzTtwafUAtA",
  "key10": "4x1StriAj7WwYT2FjwCpRHRiAXTapeXs1QtP1JDxDmBXqJMg26uvGhMqXcyzp5hh1mStDUkrM5V4jPWz3KkccCSG",
  "key11": "koxHdg2VdzuBEMQFApwKU8SNspKEZ1TW3MiVcZPESahcVDQwDG9DJzTcxDzWSGVjLnFVSg7Q1VQa4acT2XAvP4n",
  "key12": "3ZC2jKzNaoi9dMTW4WQL4ETxNNW1S1f4cLctyKaVud7DWsmbB3sEFE1FiZLhspSUw5ZKEaQEnczb1X1WKNuFaKni",
  "key13": "5WHnDdcdtPZCF2o2JPsQFPYhkZeHsg538uJujNBHCAcdmFT7XDZqykE1EXNkDGNkHdVfRV5R2mV1Mk8B4mFtC4tU",
  "key14": "3gGMGuoZqRe25yXsmRz4VFk77z1P3wUeKrA6VuDYoXh2iRN58Eah2nSHSUCb5HjWAB7zKRrGpNcXSDYDWRoWWMWS",
  "key15": "Kwdbbk5MAPSdhdWNVd6xzX9AxzPBvX4QptEUMBLgxUzPSQCa8cF2dQht1pKs3nbyoP5jBXQ92FCYdDdYeJRf7r1",
  "key16": "3XPsmovjdnXpG3jRNcUgtmf7RzdJsCDQbKtGSxuLjCnjdaKVriWQVyM6snBwum4grBr5NTTF3B1MXDeVw8bNGjVE",
  "key17": "4CwiG9FiyMrYtZ2xrQrQPxQiRS3WDDrFU7mAf3VKJcmEUy3NuyPcqb2hVxSKCPyxbtFHR7DMQh6UAMhjgRNukbeW",
  "key18": "Faaps24SB16AC4UyWHcCRsaqRhnfCoryroQW6nGzGTQaXEjxn7Q8Zafi2MV2TEvYk5n2HFv12LtLZeu76qu6YG4",
  "key19": "37TQ3JKzxJhBb84yeZXWkAe4yiS91DBEWDB3oFfWo7GHBybuPSX3Si3oJ3GTcfKgbTT4NNEXgSRJ6vrtVjZ6VZPD",
  "key20": "3hja33JFxu43AN4rchfysM36PZhja5rzMaDqqfKxdbejg5sanJPmLGHS1MVxgfwbMoVwvYnaPQqgY1npnmmVfP3G",
  "key21": "1J1WjAkvR5q3H8nSLBhLSREPyWKyABiZJugW9ZcgB56SK4kP4NGttT1RxysyMXtqDY6XjykLaajT1ozrVaEsdfY",
  "key22": "5jVUbpdtPmiQwEYrnrJH8fAGrxnkUeQ5ZSPaB5WqeEh4zDsTUkfXrL68snQDGzvPb3sboJa8Xv7QUkTciFtsL1Nn",
  "key23": "3vtV3e7wBNmZ3aWWJ6ShXwU1BAKfvg5JfrXzZJyw2PNej3kKZEyGZbHfVWkN9gqdgXPDCPqhbtT4AxyHCg4eNG4a",
  "key24": "19u1pmq2NfFuDCw1dN3CCSXQQwxiNVF4A8WwrNTGJkD3j2KZ2uuEM1YmvsG8iZMia7Rg4khFBNCU3Z4BBM8hwxf"
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
