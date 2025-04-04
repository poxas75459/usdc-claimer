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
    "4YjyDbFDANrR1vFv7nDNi38aXBAJ6epkyMv1ax2yjJncvJpVLm59emjHLScV5i5xYNp1UdmutjYkEfahDr4JK7MR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BpSHMVisrrmDeiMwergyHDwepLL1JKAVxeQzHgJGGBw1ZBnrMkuf96fkBTuqm6c92Byw1NXZcmVLqbTzBurVKpT",
  "key1": "5YjMyjNaNTZGH2MASoH7mRNNUJMQjVYHhY9TjCK2RK3wvBEtdzS2dASTTSKX77S1oY533wNauVdo4JjkmJWcHBi4",
  "key2": "2SL8ZcTxZrz8qm48efNLQXEFEqtnWB1rtgCdJiCySFkRcBoPLvYpQgSffGpYUnQopsRcHMhW1jJM2bcVBF3VS4xv",
  "key3": "3CFpSH996ZDM1Ys6JsXLfFbL22W1tMzrHLfbXd4q8koYGK6WNo1SvrC5FMYBS1EkHhgQCZtJZFZqa4k2Pf2YRDkn",
  "key4": "2Xxs7wYuW4sqZw4poCM45fa9DCdsaLDb2ubf7tuqgvWvKc6rtxYA5E1y9isPWXXJuzqXA2TYCoWsDmJwRDxFxtbK",
  "key5": "4ys1khiqW6hz9cGVkHt4eXJcoUiJz98yop4qKCibCc62YvAX3kjX8KKK3KNd87ZYcvYttYeRBazvWwzuPxAgKKXS",
  "key6": "3KeyVS454vdQyVogUhKacTqj65KJdQXxKzaSn5xS4iAzBsNNCYsNhha8oKrw2vXxS1bVHFiPemNu3NYjaGEnKMXi",
  "key7": "5XfgW46a2sbxxeeU4q4V6ap4DWDbphyQCE3v7GEyNSALog9C9EF1WHcCQE4dTn65eehNgVX7YZC8AQusqBip7UZb",
  "key8": "59X7QE4wPDcTFL7VXigLqjSjAjDZ2VW6GrcCWPTDqruPjE4hCivB8uXoB6ZXKyKBdAjYAn7ZKdzApUpvaCAhWRg8",
  "key9": "5XGJVduPtWDUV7Z91d1B182WGH4tuDAUMuy34uV6fvu7D195rWKTfAyx9XC9m1ezpARm2dCMe22AREqnLiFVKUkj",
  "key10": "5LiYb2eLD7mT23UcmpXSRDxpPkCQaG9jcDjLJReb9Zg1Lcet2GosuFDKjRkZqNiz3KHxfEbUgHd6N36mdpnnLwLu",
  "key11": "21fAdfJZxdaHHTsBRFVFfb21PXiRg9AUqQGRxjQhcYzmpwZReiMUfoMEmcSBG4EnXTr8jonZknfeyxkwf7oLJw7M",
  "key12": "5tFCdPPkoyiR261NsCiuVYqTYpS7enADXudddzTAYw6ksfsskTuh7HdswLtp8K5g6j8itbJQFiPuvaYQZzacggjb",
  "key13": "4x7ymq8uwWhabGu1mSbKv45FLDPuRvVwf7jU1BCqfTsW3xUyQ1ihm76WZ2wyzWduLvPhuunqAwTSuR3EM9fqec2h",
  "key14": "2pu7D6NLd9fLYMLL3CSWYpR3sF5TqFWmBsBmXYTs7kriuiV3AjLZBkPpLkWgFcyVXFTv7DsKWCBanBE1j8a9RKJv",
  "key15": "67hrWUXj4cEew7ELyKLnPbXCqFwbYN8YgPZwnfrts1GoA7ajWU51PtPRyKqZTtcsBmwRNfJRAxFAgFSqSFfm9zAG",
  "key16": "46c7KHpHL7Md4SnYp32PBmYbQk8uGKKJdCGyu4RKRTdY3A6ALH9nvXLunkXombbfmHfQo1CZiFE91QhoPSDBUxxt",
  "key17": "PYcP11bjopPVJxKkkwAZKE1SNw7pBsTv5LqsdzNwfgvgcWgSr3QTbqECYBG5GnRZAM2JRj8wEVoYgkwwndkEJWc",
  "key18": "5zDNZvM14HmXykbmGVRAiKayp2RuSxqRwfsgsrWtbK1QfdAq2S3jYswWvZUH75W8GZA2YkSsHeWk8kiEzd9SP1oq",
  "key19": "3csvCfEZNV5UrYZNRuPbkhhopuLs4ssQtYwjWmY2U7NiRzBQiDdCu6RULx1afEYMgTrB25hcgj9zszKoRxAaNXQT",
  "key20": "7zQbLoWAqeEqBEbtWJC4QURuH9V2gEEvZd5NoARx4ZMMU3VpDLnYCVMg8LhfgrmC8ouv5XQHvgcexrjJLarXnmn",
  "key21": "zQxEsSXkKBaCf421tf1NaNK7ACnVVT2eYAQccCSwCuYLXEhawHhAu2j5ATXPUB5N3o5p9mzShpw7JpZNMxRzS5R",
  "key22": "3TqpgUK6jMeAHfdvrzuJ7XXweS6RxRego1JCncMnY2q8mFZTaaGTsn55BrVHGWwnWkUGoqCdmpkXNgWNdKBN7XGX",
  "key23": "3H1rngV1XfDFvUd5KFyAPWUYRNXw1Gu1ka6zv3ZPRHtg8URx8asFw9XfWMYQHAbJfLD8Kxac3degdTcaTXyggwXi",
  "key24": "crNuGdnhcHPEyHShCCQsGm3r6ezkW1GWWJXknh5tndQtXNVgbjNcTggyx4PVfrxqwJ6GcgqmW9cy9rSeDMBYo2d",
  "key25": "2j8iVm4dwRCv3W5SAeSqezrbhdD6a7wNmksHpLeCnJqH2HTD8vM2KaquAB8SRPzxpGSy9nRutY6orU8AXgKxHdpi",
  "key26": "4ne7CafJYCNAf3iYw47VLvzomym4E9k5LnDPDNdpb9uJzLLuZ9NVEyL6wYj7aDvQ2gSwiwiRqz3o9vgXAJHw7YN9",
  "key27": "5sR2rrTf77sm7RB7JEgXMdga4oTMh7x86Q4BCn57PQmaTeRWBmPmUnmUjdnGWjxJnCTCqcTQCYxHUG7bVD2uhNCn",
  "key28": "3Ae22v8AnGTtAxrv5DLW8TTnro6FzFK8peMDX41116DByKR66puCijDSa5PfkBbwpdKXTTR4unpGYUV98wdq8tAn",
  "key29": "2aZPTVKkVxj2ZoaPaxK6jSF4xB4WarSXrCjRcPtAct6QAzUYLhvQMxYEkb4QKyK1TxRaPD6MENACUycaaXwCG8k1",
  "key30": "5J4PzuEyf6QJoBQbHmawfRjfke52u41CtY82vuiC7rU9cdzyaxqDQZCZCfJuBGS8FG22UrWyrZ6LxoiL8k9yzesk",
  "key31": "5CCyzQonTVqgdJvrewGXWFSsimyP6JoX6GpxFu7AuM2jzNSvLcKf2aazyopaGKbYxzxYa8GYYu8CuT71ayRuoKGk",
  "key32": "bhWeCDZWtf795kiFQSoC5Fa2EJ29TAdN9BCwD3Po8xq2dSWrsU29FwBnfuB57nbYzmgx9w5Pfn86nR5UzXRbaP4"
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
