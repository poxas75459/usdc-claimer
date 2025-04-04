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
    "D86jUb4nmcynUcBHEReqpE1CEiZqkoNnZtegHiVvF5YxDR9cp4QjYaHVtkTNTeuqjxgbPrfUNQwUrawCjoMYHHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ptvnFRHi3RgKquJM7Ggot7dUDyDj4oRcCbQmppgQNuE4yw3oBPJDi2R74QeFi3KUmXTMiYy8eVzjiWDUhkN6U3z",
  "key1": "2pvB6ZAZLWaCaMyMi51V3Ye7j6ZAw4JKEziLCSjBnv3VGVWsVdKBjJk23nAwjGd65inJhzqF4BcspdPdqWGrCp6q",
  "key2": "3qzNNhBA8xTR1TnZwG49M9UjNPzf1JbXKtVJNfdeTN7rfFac5TEvAZkwXJpnzjHpbMzvpqZeaEcpd2YHn74vc3Kk",
  "key3": "3sB27QoYisY8UjzAN6uSUg7n2YRYGttQ7tKHdqss2aLdpPBPSY2er7UrSjSih1kwx96YUs2ZUFpGPVDR4xNTwsBg",
  "key4": "4YAJ1yWkU2EaWUdJY9Ung4V3odHxus4c6whSiAbaJPTRToLMddWoTLSQKAjM7WkboHV6wthLQQG4giKq7ciQvqqM",
  "key5": "Mnv31fMdkTGSQKWsKvPndxAAq9LCFK4B5UdfN8M6xxrfumqziPjS864t6gctwMjR6i6mNdsXTmnRAZj94pCtwy8",
  "key6": "jbizrZV8F8QbrYEqLro7bca6nA3mEGEZqUkwyNCGr4KzbK4CU29A9X7X54kEuwFcu3ywC8t6CknPjMb9eLrr3pw",
  "key7": "3Z5dPppgU7eCPLsrmJZtVBDYPK7vczovehAWKprPqK6ks6mBhPiqp9T2utXydXxxQeGYmVjH3Lzbzi4YwSKedTgu",
  "key8": "4DS2dYyTYhm6CgoFsA9kZquUioJXZyYYkqeRXi5D9qXt5E4TwaAoZth12nHsgfbMc9yc1o7y5ptjHQRbqxY6gYKT",
  "key9": "5ZHiJuWuyrt4xtk9MNqekcKTpzx2w5CwbKd4a4QYxkyNXLDq78pKuqumywgrbSGhoJHR5dWpdPBQ68CebgiFZdPo",
  "key10": "25tgSPqaxjETenknsVci4rLcs5mZt4yzdzNaotPK9cFCscSTQQPHq87KdUu3fxUhq19JGbCsdTrMmp5F6xxAnSAm",
  "key11": "4eAXN4T7CaSCUg3R9ToLNCcGCeUgDUTXfnfDSJm2GuaG5yGbCKUCYXNF5ACbbPWKjSDN3dhvJv1p83QnQyHfth1W",
  "key12": "2uGzhX3jGxyGb4W29TDc1UHBfsU3NbNEMnRvkcHCwqVRXCQm6bWf1zZGHXaCfJgnH31cLJDEdaNbvccxJB57Vem4",
  "key13": "3kYKwqt1EcQstA6z2RWcwdJbGwcS1s9bTuN4Bhne7BWavC2Am3oty7SgfrTc7KAT5rHBxFmerfVZM3zxJSTLmFtU",
  "key14": "4shc6xoGL4aSXpQSn4Krvb99NsjaWLG4KekhQjhS5fopyZRbJxZAUtSBVDE43FS75cHLAeNA6tC8dp9uZaKeyr6W",
  "key15": "317rqDb2E32eEwWhf7kmU1XQQS7ZYRMZ1BiYTigoUKfszAQovJNN9P74BpPvyt69V63CqFSU4g45tBuoSvbPxx8a",
  "key16": "5SFzqRkrqhYC6SsCQoeDtG93fJACGTetpWw69HhM1ayAkBuDETfS8YS8z7eSxPVZTTcLnj4U3rjTQ9ESQrEfoKWX",
  "key17": "67WxWBE3UcCzDKVQYjQ5b7nphhm8FygsALVcMJrq6rFXFtgexn6dMC3f1YXj1EhmhcPvEBS7DgtCpHdQbdZYgd93",
  "key18": "5GBL6JQVG7zXDNEpSGub6w4aHhQUTNxtd39RkPmdt7HzHBfHk9pw7Pe75iWXMsWiRSkKQiPL79Ae9AfPPeqrYNWh",
  "key19": "23dnpWoCC8JnzPsAQ9YsM4KGyppV9LoDnAHst5f3tuUQjf7Hf9j8VLyxykRx1AYrLPDHvATLuC3tuHAan36v8Fkg",
  "key20": "5zroJM9upPxtjq9QWsYgTkXsyWsBXNQe4TVoZyXgmXmQFYNuN52iotYgbg2xP6s18n8jyWWqEWrzSjGwZfzxEx9y",
  "key21": "4U93dS7UPPVV7kGa25ph86ULagqudqJnVVmPcK1QEBG576Vpzqc1xkGeVCTGXRGM9agcGeQcyNPYfDbZdxamvmh7",
  "key22": "3VvwgXwLKDL5KDDUHAiYdPb6ua4VLCB4nNxneE1J8vPJ7VsRiwHvVKzkfKU66Mu6gRrWJq4jxDDAP4ucTJzX4NjW",
  "key23": "2XJ9Z74W2vSvUWpKmgKRnu3PkbFtda8Tu9rjpyiHDy8k6oa1bx1CzkqiXUHzumSVUXVEVf53fbQWhgjVxbHPfafr",
  "key24": "29T6QpEynLn2uYdohdBtGZ5JNtSkCwQaKKsWHRU2LSWsjSsbMBQQkTsYf6T7X5FhjpAP2QFioieSxicLqtjjZkKZ",
  "key25": "5yGifK4iTypNMY6zCCCqR51z1VjnF57FfU7wvZNhfJsnEzqZurXNw6PmDAHxUqtzNxZYpMX3CxWm9ZFjoU6UWRfM"
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
