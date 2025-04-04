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
    "5VLPbrUgjX3w5igYSQDZzBrEQgSCgB4w4qSnE4wfXqCiwrVfgMTTxZRfgrp9RiYpfA2N6Vf8EQM8aj8AQstaituF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wh1utiaPLtdxYzAadzdg2pm4qLETULybYiaVkJCyzV4fKNXvsYtAek9YRLgkNqRF66yxrW9Gveeah76VRqManR7",
  "key1": "mkmRLc9UG2esd7gVBNre5sQAfGQRLZmqy6fXR7FJw46YUin2g7parLbmzSuq1CXhkVih1KH7wpQvX5VkmCQ3Jng",
  "key2": "3s7NBcodUGP36ns8qAfjyhoNJVuuoykTGzpfirm1DcofQbF7ktkr1BHWoRD8EeDYWhp8RTTsGiAVjsYBVksjXsk8",
  "key3": "4oHFZdyAyi2ZeUKYWcdFkAev8NhjuECp4jYgZ8TxiVPbRhCiVnKRmY1wTXesZDdHWpAERdVGRaEVRBM1WFNtfBwc",
  "key4": "3ADWtwpATpm4RAhwE5L3FABHt4knvgMHajNToBDjGKKNsQAJRNz2YDwsT6yYoPP7XfQhWYrNm9xG5r2mntCdjLUy",
  "key5": "3Nx4yh6GLZEsZ3gN7AM1qU2Njyos4ZAXmQtLb2vPQU368XsnKWUFXHFZjgtPbA5SWHBAHEu88idnGT44xoxkVQAv",
  "key6": "3JMifwbytsVNHRVrD61Jm1uKVehbpBunvMxKBZmXkuBF7cFovahthGQuoYDGabsZ6yVFZ53qGeUnLas1xDY2YJdh",
  "key7": "5rEfu1NnWS4ToCgj8iPaXXydoNBXYxKVxcCbnagHF1vtuWPouzGxGNbQP3QQHSkL3A99i9kzgeGgwuaWQcEUYqwa",
  "key8": "34KvAZ9tXNM3WBA3qK6XZ7xR22ZwzeHUgC8TSJrvAsjj6na91bcBJmAsGKo14bfqA9gHzaqbeyEFxTpQhrf69CRc",
  "key9": "5Lf2tQu8PNX58pd98EeAc3g2xTHn4o88aqx3D8RDgMP7Q6MvvCXbnebNHxf7ZqjAy88JUYsdW5f8hDXCSo2N9ZUe",
  "key10": "4S1GYRYZGx6TX5PMM5LcMXDq2JAVqCYB9N7mXuTksGukqTHk1VT8WEK4P6R8eqtFNo1S9K8r8WDcATugSZTYcQkT",
  "key11": "4UqkEaSjtXEFBhMpShJqJ5Zk5EAReiopA6dB9F2pSSVbsDCMiWREJzE32ds9PU4WCQsTQTuAumUhvDfvYJ8W8YDU",
  "key12": "5b2N2g6GUke2gqpUuynZ9p1Lv8ca3Qkw5Fkqo8CpT6fcxk9d2pcntBWSuFDvBvrqDg39EsgwEZtRovMCEHcsuVUy",
  "key13": "65s4ZzXZypLjVbv1UN9GMUcHaCxm4iuUyHqhLddeaRsSVe3zUTr5BQG3R8WPW1wA9rEfwCGh4rc9Y8haa2CdoYzP",
  "key14": "4zdsxrSMH2uuyLRzN82PrivrEiDJHc7y1EF1gYKXHRhvRWV88b52NXFJiCjL3rY3ZavX7wnx2BjBZyradfMsPbvZ",
  "key15": "3L9nuSv2GrdKU2gJDtJaNveU7FFXVw4gs28NvWLiuKshiqBCHPfFX2A3RPBbaV5ccHYhS3G2HowzT6NFFRe5XEyz",
  "key16": "3qkMTsufWettzwVjeHWTYKkMY1u2b98CQeC8uCFGakPhEoeUaNqa5ScufBHuaxS1ypPEVUXVACWn1A9f3rUArf1T",
  "key17": "5dfE2GKKE3xRdfYBsuxqZRRNNLYkyrmKfCra88pKzp3WrvqaJzo9FTVftgEQS9B6jKhb1BKNfPwBWuQwf1zvpmH1",
  "key18": "4wHYQopL9Q5yCEvaai686R6eT7zCs8jusxoonKKoUFHFgaYpApvyiejvopSrZyYMKGSdusEvrcGkk6peN38wibPs",
  "key19": "5f4NgXHb89HxEJFuKxWTQwTaCrihqgNh1eX9MdyPZZav2uJWAtRB4ETsK2Ybt5hpjbLXRBctqRk1BDpgrExz1Dnw",
  "key20": "2NRUTUdtDVUxdm4gZTVtYQy5iQKcHkCADGq9AEhmrExpCw74VveQbi7hWQo66HJZLh8ny4w9kt8J9972Unj7RHNa",
  "key21": "4bhpqiKXeTG6jTmoRejUNLUT5Tdy7vE7GxE5rnr4s89AsZ4CvGiXNJJqZtMbBmM64dhDZRwCNAy6YFaSifjMqk8a",
  "key22": "2xYAmBzoWUPN9X8mZQjS9hdb3najE1cckhqRqErkfyvFXta4pGANNACRpHWCeEYGuaq88b7seSQfnCjT18411nYq",
  "key23": "5zdiYEeWF6cc6p5HT5nipa9PED2rG6VGY81Kj6kzfaeFcxy7CZhSwuGdg6NqaxN2gqhMugZcVjFwUjvYBcPYzDvq",
  "key24": "65rnEKXETHjVhCJghrr5ws1Zt5YQb3zTcmFzpaQ4gHvHeZqb9qi3tJVADo7ENYFixrj8rXMUGZtey5X91dDBkWjz",
  "key25": "3ENFEbmE2QeVgwnxMAzTQnj2AWm8oXQZxrFKqFhRm5DSJ2vZy7uWdMYxrbazXqE6TzcE2o1ewwRinARUCcHhCy86"
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
