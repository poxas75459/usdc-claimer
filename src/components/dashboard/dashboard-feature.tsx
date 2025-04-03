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
    "k1JGSrojPuJTycfWwzDLzos4PsV4P7b54bifP68xoqvkk1qivCmEYpUWugNoVViorHyFTywCyTquLEYdP8ZFSkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KnoGPwktV5kkBDpGmUxSxGmBXDaTMJWWEjUKe5SywMmQVxsY5tyYeLqaBXyUWSSqj4MXDa9Ci2jkcju6cH3bf5L",
  "key1": "4UHndjAxfZTb5KzsUaSvkbHdJp3evTrZYcFmuxNjNwy4Kgci2qkL3RmtEGJyfHLtVkbVy1XzDeisc3HA4qLKLwgV",
  "key2": "3Msbb2LAgE1aihgAsQEbK8E387SLnbVzrwRkDCqrBL822hnwHwNwGeEqYN24kmv74taMgPnjuK2fcUCbpXneJ2UR",
  "key3": "5423eoWFk26VRACdiBSnpdQBaQx4KkyHuJKoWuaqzTudHuQ6faMfthdyY5oWc6ueokEJa2HAmJiPmPBUzjfNraDB",
  "key4": "GZ9nnwSeYHtkJbvkHPsYTf9zNQWRzKwsLMJcbyCyDiPgvif6GUGEEnGSG26mg2SwvwXgLgy8yfQGRTrgrRenhqz",
  "key5": "4Nsfh7STg3hP9uQmVzcjJtPVnqzeYFzekZTRgmV21EDyXkdTU2GoCy1R69wYN15fzvKKjGrkoBbcdZmVy5ZtXQa2",
  "key6": "3CJWBUHGF15Es8nYBHS9gq2kD1pZC66ngbVdbynDcFsMHyRYphAfXuuRz6VgY5Qw1VK7dJ3KZzeorHZAaZwSzEHV",
  "key7": "3JNoVQAqBkix9zcKCiSn1NJjBZvTYjHuom6GPdSAkE3JoAF4GVWVtuZDJciKAbrYLMCF9neZtt7xdTr1KUyU4eeC",
  "key8": "2FsmapC1qX2WfhLikAByZU67iLE6eo65LAKFoTDuAKkDcmopvSk3ogd6k4n2ww4a6CXDA8pQJ5uDNhCFbbqNjGSH",
  "key9": "3ktwdGqh9eAYqTfnsjLb5dcF5h9DKgxEmKRw3nLQyYucxvT9SXj1zEb7AQT8X3Yf2kRfr6cuZWjXzmbSPisQJBHL",
  "key10": "2PfRSX68dW6Und55FBMNbY9G4DdtUBJyuGdEqN7o3PgsnGk2X1JFvvLw9tEj9Mvr9CNZWSBum3uNcTAxhVtoR5YL",
  "key11": "48T9UjFhSgwpvLqSrfD919zYuP7zaSvuMnoo5QHgsJ5wkn5JNGBNiC2uTtFsToGxyav1TZ6SFefpgHBLbqauQMXf",
  "key12": "RfMEQUMcubzQAuAZ9iecDtsYwVC5KYPs2BYdBEJ27dmXoPhGz9gdbXbyjk2aoLFLDEjybypARqLqPakwR3KsRaV",
  "key13": "2yBTXQuBKHRETHFfeNXaHotwAs4RWef6FVJdJtjdsgj7Bfo8tjC7XWJBw6aZfC5HnrwkWEXaZXbeX8LARKYwiB6q",
  "key14": "38eSojEFDQ4CwcRT5NtP93NU7YaC2v936Fm9HxjtPRVcA8m4QvvfRGdYcGbrfcHM1gdtZDnc2mSA62ExBcQUYLeM",
  "key15": "sAErr6PQSQ5cDfdaFKx7QpD9FD45n6JZD1iZ6KHYWD2Zyey4qWdKeCXEU8x8fjbqxDDtedS9whHP8FLvXtYTrQS",
  "key16": "4Jcqy1v5NJUJp4dXAqSEou51GqQSsC4XhkwaSmfvDtE3KPyHt3aYW4tViT47qPxL1EEbESrRCh8KYWWoGZLoKtQ9",
  "key17": "2xKssTCmd8nWGy85DG1UFB3MRjRFY58gWS3XRExNWa6D6JrqYQVgCVuBhop3wbeL2tTDVXvcSe8xVuFd2yedtomH",
  "key18": "3vqRdvWWW7BbGqdrTATDc51wdYTDVbmxhbgaztcnVmgoFvw2o6QpGfmK9YALmbtvujrmZU9rWTpjodsgLR4bdwa1",
  "key19": "5VjUGGM8cDzyAb5YU4dxrTZz8dCuj1yq4fP8EfA4DxVoMUjLDuMy3PCY93PwmigMSSS99PCaAmhZb5gMG6gwtAAL",
  "key20": "2ka49v5krNkWFfJ4kNHaP4c4sH9J6kh6vyhaD3AgF2hCHtuZfqgiwZtpqcQ5xYCrKhNUJ8XHJi7MwukR68STtkpz",
  "key21": "NpWHEB3HuAEYwFViC9A6r6VFF3FwoTCzjvxP5KL7PKtZBhzWrFbXJMxkxgLTLAnc8uWf7vDB5Yjzi8C4gKssP9c",
  "key22": "3mxkd2LksUE4YPwLQ4DsivvDkdqqDbF27tSdLoX8ibG9e1aHU82FXX9ZkPQB7WrwBRZHDj8u7g8bwsaMDSkmAk7",
  "key23": "4tejxqepVdBnBdTcXG6QHq632D2HL7rnJCTuQ2TUETTB4xWGea6Jtwx3ZGSUz5Q3ZAUZXeUVEbkyxCDtNiqTnnvd",
  "key24": "3NSRyiPKmU87VsWdUfkMc1Hcz9gCehALrZg7cSBqQAfHZexQdp8UaP4WudYiFEeKhccWTdCdVYnbmjsVLutzJSD",
  "key25": "SK4zU5xqJg6hMUjUmqm4vDwmJ13WPcZQjxvorR6niR8KyuhMj4j36yuGs3meLJk8PK4yewQg6LK7NJif8hMDjYe",
  "key26": "5Bbj16yVAT9QMhL4dumgjUNY3fDPDvV1otNWXSaAJUB1kda9jKnM9ddWurMEUwogMSrXxrJufcxafjvTnAywvkYP",
  "key27": "2qG5ruanzwyYB1fuJQeZmY2gMr1hg3PQxZE8aN5Rnni4NTM8VRj8FMdDefbVSmeY5q2qAu21mJSqQ3iB2Kz22dQ"
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
