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
    "4GHc2ESuDBi7zWxcm3UY28T9bYNQ2yAWRyzsiWkh2NyEw7jeyPN1gHurCr3CqB8GphcjeH59JC4LXiieX65c3LPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CEM59MVkvKWB6H5vh2uQsx7uxrm4BAgh1eQGJgz7mXenFsVQNp9rc6BFEeANqnsVscZvdkh58K6wN9rFX85JDs9",
  "key1": "2r9dc6gyPwJ2hKQLZgobkNbJLNGtKh7rHmadZ71P7YFS6w7tSDSNBPyLCqRPa1VKkkCEiND4o7jREtpEFa5kgnHH",
  "key2": "Hiv5JSzqShP5RTcUUYkVuGBSDQ5EVGDLUgzMJkxee3nfvH9xdZyEMgiykupXUHaoP8CAHbzo7hGn9feHWidAx3Y",
  "key3": "3pcdA355Dr7MSTdGPDjnNrXicjqhfUyv8NpbCMEw59CdroQSngUgQtzCgyBHcAuLN3V4wkRS91S2DnSKWyKLLARe",
  "key4": "3cAKQqzvAZkNX8D4eoiNcAUpjSWWdZ7SfxDay8h9yNwkwTXbfrt22yEULvsivSv1b5a9Ljwo1FeUSWbRSYao88Bh",
  "key5": "1FmCgt12c5ibW3f8rz8uxfY7jDpLFULy6HeQuckuQ97r6PgmorfVxProbSWJi52Yzwdiuce2xATxtQQA7dJYJxZ",
  "key6": "sqUjYWxUAsiZxB2XXVKo6FGQZondk8mvnscnrJSXahByuKcsCGTTqidSrYk37JFet3Ut5JjAWAHzcerMRUYnLeN",
  "key7": "2zLAx51nBiGvQZykDyxKkER3nLTaw3g43orMKMeT8NxGyXEivEgD8vywz78JqMU9jd4exbySXWkaSBH3VR4896xX",
  "key8": "66YVhZ99gjqUN5hYXfrQUuV45JZNs4DrPV3x8HqPEsciDNNnbYEiVeRGow5hcvSro9e3tVcW2X3Xjx7EaeWXAhr4",
  "key9": "hXfd2QskANRC2toMjMCv2WkCUk42ZCrn5LWaDSZvPnRN7hUtMZVqkSxjTTWuDSh5UT6uoSEgmnPEnha131N2wW9",
  "key10": "28qrspFpUR2So7Z8J14VLocATin7wuLxJ4bknJnx9BR8khnobpWJVdg25Q82N5kdHr6iKR9msepQgunJUPqzf4dx",
  "key11": "3SNNjeHVoZW6kT6Pd8TtLw25AzTM28SXWPvPrsY9HEn3mtffBmJyPGfVVddBXYdtfNy8qKNcwpX3XhEYmYAZ4Dm4",
  "key12": "2xJcQ65iAhY1PXZmPX5AzuGGm5iQHQhDWJW5oGCnf9855xgdYXLoaezUqprk7BxzhX4H1wmtNhv8fcDwaVi8BkKV",
  "key13": "2ZPpLpvY5F6qW5ctQVJupt2ieQhVhEmuXWobDdoB1KK92PJi1QD3KKWNzeeFgj3cb18MNYwaBjUNPhvfFqbe1zyy",
  "key14": "53yMS6XnHLZu5LjJ8EGytn69CAD22C3sP62aqkyHMKsZsHf4thrDEeh94mg4Smhy546NSLy1a2Z8BtZqdMg32fU9",
  "key15": "5Zu4rkLfxdiQtSZzMdg9PAPfXMCrZoeo4HbmrGdAgyiTbytK1pRkVh1RozodNXJFKKGrEDMf5ndQMkGPXJSiJ1hq",
  "key16": "5Gmctr4SXwzNbZMnE3JfTZ5nb1TdmqNNWfENUMw7aLQ52GhuRhD5hwedwdzYDBHictf6oA4yHbRfGUPJjtda1DCs",
  "key17": "5fE89A421xEUPqyq8GXqVbAS3SEvpuuWuyL52EnqpWmLAPK7syqWtB15vtDsAp6uEexW8f3ykt3Qq1FRxpYikXh1",
  "key18": "5H3gCfSmxKezhzKZM9GbqufdUtR333K2yTJjgNBNvjuYVYN2TpSgEYQxd5jFHYwVZEXtwgTuTiipGrNhrj321hws",
  "key19": "5Mto6WoKRvSPhsuX36jb34Dva2CSeLXZP7nZbxSMWozeCWNeA69EneskdNgJNCsAMVUqXffDN1ZgXAio35eXvcj8",
  "key20": "5H2kPenvrKPWMvhPWhztGpPodD1hnBugu4FS1KborR6RTmMtwBHz2GSZvyLC7ZcRoCifjDBn4U1jhqLtmRZtby7X",
  "key21": "3uy1QsghwtcEKMBPSeg1rrSTtNKj4iazeRJBaGUGX4UbaQ8DUM1ugsxtPQNs6aGTCMyF8szmGjihb55GppEus5Um",
  "key22": "4zWHo4a6dGTPJYnNArbWvUYwECW3SxCcedAxkwfursiCyrxYDSd9Tydb9fV4FTQcCjHj7DXSsniU8JhLMZFqFA9M",
  "key23": "5CNwU9jtXjvNiwKJ8v45WhjddWS3aK6JnYEyGMyz2hbfMMPtpCup9SnQjbShetihyi6W2WDHn2oyAhL8oYhxu4CA",
  "key24": "58WW3qsWjL1DSX4Q2zDm9nwi38FW6KnN28n4UiBz1uiYXxKvAwcAbYqz2GMk3J9ZCfQ8JZhkwAMPA4AoNZX4baUU",
  "key25": "5pyU5uRxKwJ7SruLBChep3oZdoXxGgjDzNdvZF5UmcXxztpZTU7NLdxueGkhoSPAheqoWFPTrREeNyFWJ5YFFDV6",
  "key26": "2VEnEU7DuiezicaYmgYKF3xxL2Mj2CKRwFMJ5QEz4FZYg3bUUmdCNtywVw8M3TQgUFGHojXW8mUXbS2Kku3f2kUx"
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
