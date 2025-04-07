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
    "2ovechXju7X8EGinx8dEYP3QFNPHYZiMj4EXerPAgd837JSPUdnsesfkrYyiQDHHV1EBm4zBviDLuv1WCLVQbbuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fE8FGQCUo81DhvvZ71ma9QqTpUYaj4e8Dj12FVXf5KQA9EreK6zMuekVsu2A9RBiMXFghzAuYA8crsudbBTwLHb",
  "key1": "2CoAz1AWWoV3gDfmcVFgqKpLm4cYvDZaohaDVvDtz37ugdyCLWofh48KBcr3RFPjqr24JJFKR55ySYpgX1HbocKj",
  "key2": "64pYbGtw7GKeNoqjw28JfxGUyTu45JyRYqhq7zdezcfxpzFHNkdsj9DguM2WZFiNW4gDaYPdR3j4buZzBxLHqpT5",
  "key3": "5JFCxfnrmc8xfUxZm7w5Q5i5MM2djCenmYeDYyXPPL7LJRfV55D1Qvk1f5DSETFUbu8yfxm2TG73sr5i9dy7RjYz",
  "key4": "2dUcPfSAP3NYsnkoHPN8ai5geWvXTLm8QBGNfmUP68sxdnK6cn8NLE7GkRhGCy4TXmfEcx1hHwLtos5EHNsPnxrM",
  "key5": "2vNQqid38k7txv6P91GLGLhEFVEuWNe1jTtYnn7jFrQoPWC4z7YPj3QHkrLpHUj4RewaADzGfJ35wmuinVHBMX2R",
  "key6": "4kX6kX2aRLJZcBaQS25VomK8MS2msdZDZ6NQ3ZQ5ApdDgYLN2tK2ctj6XwPxkCiftTHfxH5WgA7GFF5gpncXzKQr",
  "key7": "5fBkY5KVUGSW43aUYcyAfs9kSDZCZoidRKQroEJK9gLf85S5BmaGd59jzztuCJ1uVJjF4mfz1AyfU9WmmswtSi65",
  "key8": "S6yeWKhXP9nK2DhUsLEzFDYNuVe6xaCXkmvFf4ZJ9eNNGr7YAARftQiu1K4yoZ1GdbFinjpNUasRFo5MQ1kbmqZ",
  "key9": "4kSDF5hTqBWizfam4jfB3XghQbhe9SAa5r18EAfAQPicoW1EVN1u7EBW4DaMhiLtiYGAEMjStpLgWW2xjjunFatC",
  "key10": "3DLyoWFKHtdWyq9mZ1FqUHNpvSRPVAhDgStLYh3ECGSmXqyjnHTZRNKDZf2a7dNf6occ69RUfVihKeYRpjvmbLHv",
  "key11": "YgaqDWoNE2tP5W8fF488dVVd9Kih5ZjyNAMg7hun9nhj5nZNxet3iHLpUP7FAyB6ZJFJmoEWnh6BdZ3sPTLUcqD",
  "key12": "3udNwKo5b5LYeVHoFCXE1Fk2z5nNp5jRDYwJhHsj3G65SA6S56KaeyDNZhv4V7uBoTvRXxhhLP7tHiM6Fei3rBV3",
  "key13": "2hWJJN4rDj3mYPubEeWDjPo3RvffT21r6vmuvkrWXiEooU3D2gmq5SYZmkxAudWMd2KXPfkCoKW6czo8x4pqAiBm",
  "key14": "GjEFqZsgLa9rn6ihbKoqiRfzZMvLbxht6izd8CMLBznjAQeHprSnXKFAJrxm8YGq6qRfhaxbGxXPyaXo55pYV7J",
  "key15": "5jYrFQVhxyQQRLf9Nmj1qA7Rvx2AZiKNn9tfMe7SMonhHTFNVdw1SrAdTcVZCQfjgNKRpiiiv8qpkJ7E2pKRzi2M",
  "key16": "2bUsfyU4XMxZXzE1WKvBqsXYfXmUE6vudasNXLhqSeVW7S8dSq7VAzP6upw48PZzChMuAatexzU9p9EiLt3FmKWQ",
  "key17": "4r9pXNSZfSk5SSZYJ8r6iyGz13emPFCYbbZERx1AuzwGj5feqpQrvMqurxWy8En8nGHn3GPTXsoeWGkSvhE8NjNb",
  "key18": "Gh2Qwn7NwfZmUjM4DNpzK3MGep3JUKA86qTKe3pAM8TFfUPQ4sGhGqDdofm85vdkdLQHmjkDTc2KnM1bWhPgDi3",
  "key19": "2BwGdBBB7rw7EHsh8PQXo6z7Yjy6BaTstFuUAGWxrQWLSerXN6WFfUvMyDZZtZUH8kAmvWmdVUadhofnUb3AKPnP",
  "key20": "3uFeQ3UUAnBcpUTNB66s8XE5yp3GeXfVJ3HeBGoTDFPgr4jwsH8QcXHwyv95egNWhfhbJPAkEaUzypEYcbzPx3bk",
  "key21": "4u81VWfKhU2XBKF15sGbwo6GsMTRTNqCzjATs3CEbd2LDNMmxyu4qKKfz4uBmiJx3dPb6RFysRCC6X6m73gF1wZ8",
  "key22": "4ecBs3nDiSpH3aBLnGMY6qqckHEYKviazvcUtB7HUbuC9dCTvu2X3t23jnihyVRRFzk3RddWFhDRWGAfsUa6LeBa",
  "key23": "4tPKNcnPaT9VLhTAjxCFxGLyPioduq7Qfa8RSdmenRbjo1es2MmU8UvpF1mYjA6EazCn4ih7KRrh4euAqsQ11eQN",
  "key24": "cyQqxzHDELwygvWftjbbVcCj2vRwKYgAFmgS6hFxGaKhgXULGG11JG4VqRrwyw4hs9QLnyUEyw6nM6DGvaQAUh8",
  "key25": "4xEyqmPBfejpXic3XQ5CZrSojsZafLtNwjK8QZMuqoNWixiRefwcsZrcKK3nuUY9JfstZvEBu4Nd25WWttsfB7Ds"
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
