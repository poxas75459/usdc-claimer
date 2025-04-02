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
    "51Gsy6HJVha73ezJdwa3iwQxzTy3oHsNmBNHd35iUaRP3MWr9pcDgtxruPEf3aKMfnvEs3amq2jFAvEjceim9xHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VrkQe2jsJzivpmFFUQdLRrPYmS1YHAY3ezwNegSy8jc6kzwi7rqBUcBwbaUR6GxzJZJCuHhdvz9HiYMvDAaJzbe",
  "key1": "2Pz7po14iTZAozdpQ7sYnK7qK2GKe9Vy3gjubSX4PiagYY9bmM1qRZS4F1w4f2GxxtvccotPyXU1MLFHvRS8mwUx",
  "key2": "3XrZxXAjUadCR64YyjMsyMjvUsM5o75DbUtkZNvMH8hLhKPWqYyHc4ZofuGCUFBgWnRgbrZeaFf4CHLtLYTawEgF",
  "key3": "5qQGMTBk7ZgSnw9MBKEcdgagaK38Rhxmzr9PY7HoQzNHHpeTTkGr6vybnQE1f9ANuam4Y9JdTfMXV39Sg4z3pTuv",
  "key4": "4CnvkQQW81bzSQhWy8D1jWrz3Sv3B9ACyvfZkbdmWN4ucYLBpBJS8LyDyGP7NL9LE5LoZ8qt66XS1c1Vi6AfEVsr",
  "key5": "24jQBxYy4AN9yxUh8wQnWofdwhRaDph63xxBhv8SFDbthyDqk2o4M7gzsvTfmVtF8KQWNwBbJiYHvrZJ2CbqWXYs",
  "key6": "5Caf2EpJHdJguSCvSszxXy7UXW9wZYtXr19XwG86oSt58uevwTaKSBc1Gbey6ceVYe5uQA6nu2AgCPrPqgocQhkg",
  "key7": "57ojfbA8gHfg3CPf8c2NGTbftWXnLcfUQV1vPcwfgmeG8859vaC3RawFAxNU1xKy1t1bfN61r5kuk97casfSt7rt",
  "key8": "3sDLPrwThQwZqvmpwUGVLaEDQvAmwrNvsQjeoUHgVMnWEVmhfAdsbnf2SCHRoCQetp2Ld1iuiJm1Ao7irfNNj6cw",
  "key9": "5RjmMiNAr1EwGq2sfZk88MdAHV7EbjPMSoSv8LexKusGfVRBFeqBDbDzmEfShWxHszZknm8kJ39drBkXaWmn2H36",
  "key10": "5MYUUNt8rDV11YRwyy753SW9uUhtg7LbqhQNcDjNHxAfQ9DUmmfHb1LRiReqTUfNDxqsP7M1gt2hZPXocXcYwZhV",
  "key11": "4Qemr8zrHXf1vqEELFYhAvv2FMks5g7qTY7QgW6MUYxkrxzbYHi5xggKgwZ3zwNtFHjMikBU5CgvkXUHFPCnLXkC",
  "key12": "mgWKKK4wTYYcJkVENtANJyqUuhD9xidyFjg2zSP7sd4ZAcjBWHGUspeWwDo4ucPxnSpxrikuspk6Br5RrNCB8Yj",
  "key13": "5DiMrtYuxqi6n1KQuLnjnSWyubfhVPD2anuqGajraWtKUc8aiHeSUbK6QHL53u4eWpBoraxjGyzWZCzY4SzDivNg",
  "key14": "2bHKT7uUR84k9Qz3UkNhbaxQXX5t8oRQk38eeZrkxiWvF6V9G7RVg6mMth16JndaNYygAEcaDFk7JHpVA8RLKz8t",
  "key15": "5ZSnM1UjG3AgojTTihonyUH4UTBgoE6VCsySNdKzhd7pFprCJ3wRKdPfzHG5HGwtznQGN6ZvYbEm6oL6Z1cQHxKB",
  "key16": "3cqBNUKiK5sZwMMAzpUm7CUgj6E55yUWaDJ8Zf91nFWK3YkyqdtMS9jWj8q5w7mAFK4or3aXGA8r3FNmHue2PUHa",
  "key17": "2V2UpwcSSeXnjcBt7JnMK9RE5uRUpXi2HJLaahayZFsZYHyG3Fk32bJj5agNyxrxTQqDGGksV2r9RR3RqpG2HGmi",
  "key18": "5WJu46NZbuuAJfvFFvrEqWtMDw6xRfLUVknPvi5zBWuwJfJMhuznBvLGEQ69kj11j37q2AtNPvPhunDjzH8CxP4z",
  "key19": "46phpK2K2FecyiYFwsgHi8ySC1nhsBXEJsmKTYaoFjFwSFQ7gtwWBPSjiDfDXbyKRX4NgfQBp7v35MFxAkMKKENu",
  "key20": "48fHC3Et1WrcjdrpLQE6WBJS59B8HaYNybY6KXDtvAQZuE4oxUEYc3rxu9yyA6KMwEAYNxzFmBg2jLCnpNdsvqdF",
  "key21": "53NPhA8fg3Tj5JtoGBTY7qPFf5inrAZKzPRJumQgLHfkdEcR4GkMpHz1cEu14Ru8e1rYFutFiBSJ7ZCaNLE3jUcu",
  "key22": "5WCqZhdfT73pEKMDoASCZax1wPhQHjTKTqJwfibM2GPc6SC15oc5bgUzm9gkJc4iVtK3y6vwVUPNVxgMFdESDXD3",
  "key23": "5NivVZAaZjJPrbH7w7JpavP5TyuiiobrgW6uXPfDd9jZomT5ZYW1sheBsxZMXVMproBwGdgJhTHaMwesG3xtG9ug",
  "key24": "AnjcSEPQiLaFb9RWoQw4vYT26fAywXCGt87KXDpiMHtDsToMtoaEJ7zsRRrZkDgpN35oA1XxQA1nT7QrEt8eoMd",
  "key25": "4qG5MYScmW39tWBkDYytxpohKdGCdjQXoHwHBP7eVmve7YcZDYFDPJX21yK5K4xwW1wz5JUZBn4WWmUvVzzXE8VU",
  "key26": "4yJzh1d62kSG9ts2ifNK6zLtz3Qj5297mFWJ474XEPizGEeKnUKgyNWeicGHi1xRaTGDSW77GSk7wY7CH9dHCrmj",
  "key27": "jCQTSKtGYr2dEpqL7qfrZ7KvWsDFbppU8PYXKfzi9sDt3HJTmWwA9mt7tft81bfokupsk9JtHwrsZtTsCx4UpZ8"
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
