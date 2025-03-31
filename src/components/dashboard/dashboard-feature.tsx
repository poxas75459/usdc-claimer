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
    "5mkGfeRh91cMbdcndnb2RLQvvLgcr8D5tPaXm2ycUT471CF6gnWrRajg6yJXSvteKHyArnRww97Pu8vJyDQfYfHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dKJrt5kag2QL7sLCmZMveLFNo7Twds7xHaNRrXDUdEoiPLtDvT1o7BrLxDhZdKmZyuW7b2BaKEmJzcRX6tLWaoh",
  "key1": "5mQK64hKRRMkurWENPYQeB8TY3nHUVwvdeTXRxrQ6tgTtWqabPTkxUq2H3eRRkNtNGUB1GJSgN6wgGf9NrajhjbP",
  "key2": "TTiFakj9egAbfWfkza8odtji2A1GXqqL3oynAoyQsqp2JSb3W8diDZ643aaNyuRv37QjqV7h41FkQnhhdMChuXd",
  "key3": "3KJNYuKJR5dEBepEJkPkBi4TjktAjd5ktev1Ysm6mPD5mYX9aQ3RatTvJTFWG8B5kyStaEoznnSty6nTkGM4G52T",
  "key4": "q57DRazEEgf8mdESBzZv1D7TsTAcyuu5VijjbfXNpmzV81eyoEWeUpKz2JbGKTY2P7jbiSjygRCFjEz17Gdm9sj",
  "key5": "2HNdAeXCsiZiPZw8dbqiFAVQQ9F9HtuNHZYjPksgm1pc3FQ3i2FEDntL6LRRiPDnWfaWwPsAMwZ39qcGwmZ4Y9V2",
  "key6": "36pWHnfAKMaeByRBkTxBrk9rvK1dTxotbzpg3yteQPN2N9iRJruJ1xA35QkwFfkuytRY9utCfQYUaRCHi4SgxRoS",
  "key7": "5Kph68WuD38dLsrxwZqAbLo2xPYJfopRWUjsmydP6DsotJYSf1iJhQzuZg5hPPrWw5W7qxskQ42jWkseJQnazDFY",
  "key8": "4WQkAEfTtXzRp3CAuQXo1k3FjmUVynb8m7pL7xGzJKWW9ouRbaXgs31hLtHTaECM6KkbCkQG2dYtfeN7rZxiKAnf",
  "key9": "2gLWXb1V9Hywz7VA24DWMeCHmnLH817VMByoYeZG9YCasM9c9zyk4J3uhpWhfXSZSxuEUdkVePpGCojY3hWX5QuF",
  "key10": "4rHPecnnPntwpf2XtTfqP2GCQdFTseCcTjTkvqChyjArV8H2oNwN2QGwoc7AzY6hXdiGd15yQW9sWn19THaeJ3rP",
  "key11": "4LTYHpxXDpgsaT3ihoNgKWt3d2r1RogJi5edf8q337HNb4kxAwvbja3PptohQZKciYmgNCiZ6rJowKobQjR3EPcY",
  "key12": "2A8wdjzYPDgfdWQ3Uksf6PebANv7EYZcoELQyzCF8rnm3rpeT6BrF5z3UTz46Qkjm9jithBP3RYTvd7qfYFFSrco",
  "key13": "3LxEukBSMoUyagX2hzGevrqcGijdLAMDE58wxggiPXPXqVchdbNSf2PRApjr5prnr5fnFz6ae9fsVAxWpV2bhvvw",
  "key14": "3EnkxpGKtuAozvcBxybovecAhUgcdsptFhZm6o8r2Ptzb211bPEThGruCZzRkVNoBuSHu9ck3Tp5fQ1FDdkxqrcG",
  "key15": "o3NYwEBMSZjNzZdE93TE8XnbN6cQ2o56UbXddqtfLavM65yFq8WrLk3Bk11qqYLL5k7upRLc3EEiEbRcjZenMAr",
  "key16": "5eoF9TDiCFFcLGdC5i7UiZgGc5mjsXDTaBFZ8QV415eHg1zC53ySMYDTUQ3ra3ee5AokAyhRcAXuQKKULg8WAMx8",
  "key17": "22vaafEZWhiir7kqwHASs1hWjjWKSNQPTFkvX4KcNhN5mZPuLNf18XZeH2PFJ1MCdxiHtJK5vsSGJXd2pFJEQQk1",
  "key18": "oB3Hx3XKArEm1P5sZv6rSGKkobqxkUCUJKU4i9ZorPtHLVBBzPA8agWVTF1YHBVYJFQ4srkoTLherChzyb9YC4U",
  "key19": "U5h7sQegxP95h8S2e1Xds4wbGQfmBoiymWtZqJtaQwqqNVB2rXz5XhRSsV2aMLZQRGwj4LYUCyCWreW6TtrSBtj",
  "key20": "4LEGc3JQUjs7MUVwphVyhpy8au7kFf7fqqYhbiMvpfbkjnFKqVJv8y5mDcEJnsmbQ4qHc9SyBM3YK9QhDH7i81ok",
  "key21": "2iZ2NTB4yKogEimo6JyoEHGaCRxpjJPbPApL5qX5gnB8HvLKKupH8pFeCSYiV8avDzDQBAP9WHNGbsJDRonAAuCY",
  "key22": "3agQWsV1uLxj3umZiNYgh7NmRhHKfUSriVQoJGTcQa3ZdSQ2sY18rkgmM8AB4pZak3Yd9n2hdL1qSNVuX47fEUZ8",
  "key23": "61q9LsXSv5qNEy5iXiSHfFnZX7RCneMhHd8XoBng3Jv9YjR8VevMYpGKRU9AEUvRpnRxgU4ayzEfNfZY3FdKdhvJ",
  "key24": "3KtbZToh81SoXbETGtojPBjvMjH9tVCb11AvGKyTgwg13XTr4coXzwdgXC1sE25yGchxbs4zextAzuTRBmsCtVc6",
  "key25": "4dom3hynLZ4MA69myZk3zaNjHsbWMS2G9NoYfzU2GLZ3ygjV7ifopdAzT5yBubwNzS39gLpRX1iAqgevEZL55DRR",
  "key26": "42BXqiRCiebw3LAop3Azw6sTcNLpLzdJG6jnjCCdh8cjkuPr6rGedQumd2ssbQuVyfkJ9dNFUqp2SXVabNWHimwD",
  "key27": "squTNmdkqLfUHjMMoauxfAHR1hoCgjHK8rhwaowtb5R77VNo2hixwriZjXYX49zNEt2woiQR8q3KZp9i7wrLenk"
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
