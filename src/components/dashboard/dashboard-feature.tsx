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
    "4kjn9PDHPfzHyRVshs2aoALbMbJwBJyjU6HTA5VkLUBiS3RWzDLbNEuLdG3NmxQPi7yy4YCHhmrwMz7qRbYpDaTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GzdnJ1VvPfH9hpa589VMZg38bzuQUVmTBHpmmZJXYXJpQKm8CKyiDk9rTiLM4SxeqopuxS4FQ82tbWpqbQtsBeG",
  "key1": "5EyBGmPMfesU29oojxQJFiyWUU9F2Qd6gvUjBqZJYn1mCh68AqDPXMpBjE7qJvNRzYvmPpZrXd2RR1fzr7M8cF4D",
  "key2": "qKM9kLZssRNeeLXUXZsc4chEm3ZqYoghJikLSrWmVQAgSooC9dNdzho4YrU7uuifxuXvaUPEfz6HvrjLapk8kdL",
  "key3": "L8efK7EkkJuwXniDQEMmxVNpzzp2UXPhFRfGrTM8i56gpR2MtVXH8fKKfPzAftcmMiMeQS61NJgDU2izDJXxWcp",
  "key4": "4q1nZZTpXMiNFdLT6rd6B8T3ZbbMXnQ6V1rKfTVVdHHqZ16ZQfMkRJYjfn9L2KJyTTAdckJWuaMHcQLDmp9UFBYN",
  "key5": "5aGZ3ga4MmgT4CqRbhQG5FwnWMuuuUpp34Gx9x2TPha9mp42KuhXYDH3JvyKayfzCnAoerSL8e41hchsEXtBMooA",
  "key6": "4qc1GgCknxwzMF8t4Atbf7V7uJNg8hsonQAGEygRrFuKaZRS6yafe3ZKQ9euSm9Vssd8mLUs8t5DQwhoJ1FKAbW2",
  "key7": "2cwxhYHU3tmAkTA4bHfwE8NonAeme4LkWFCqbniW1FKgfbbsrn5tcm12NocRkTrFHzVPxtveegJHLYdf8zrWJvBe",
  "key8": "3NNu6hBvne8cHaLE65BnefkkyYahLrAbsvzWQ3RbFzxkEsyW25fzbRNd4nbpf2BAkjRvgAEY9RsZFKyNzdpxS26L",
  "key9": "5aPXEMKv5cBtZSf5LZ7X9LhUcXz7x4RPN83yU1LQnzuG6QqThZC64GXQM9skRaH3f6kyQkqUHog8393X9E42NJaC",
  "key10": "2pYz1cUmDzCgK8ywgj6t2wyGAvRMcAAuMSTnrKczTDhCwjp7sAeKEpiisnovLfYjqZtNdLeEfZEkSQeBwjC6er3R",
  "key11": "2xriqYxNoyk4CfK7zBayEsNNgPmUjCKeJCjGTwqLJCQfR5H6R9TDWyxSExKVQGYEWzuYABPLAdqFoUxN2qqiyTXh",
  "key12": "zNjXJZryyaLX7b865G7BHTzJPCH9L6jUXjSgKzuQ4kbN7J5wSNFBoegCsQMwFeqraZFquPq67X828a7sr1wWZvL",
  "key13": "3B3do63Xa4A1AyJsCJSw76VvKwGoWekGL2RxABJokiHrr3pQLF17SGiZKSvCbZM5qxvZ22kBZk1rsBeRYozT52Sw",
  "key14": "4BVoEeR6eVjwrS2TuAJ3FeNGjXiqi3uArUaqD4JiMWcGrYY5CCXs6Gfa3gmYwTasLrk7ySd3KfawRjpkjHREHjoF",
  "key15": "2pbw8kLsNVG6ho5dUZmRrCN7eedeByrVR7Dbd4dJ28sRKtB2rrnMNQb2DXL9dvppqNKNi7uoVYYbbCC4zUQYbSRi",
  "key16": "2pfSNfgqDTrKxS4zd5r75NXcmpuZqwmmea82oS9ChXRosiEAUrAvExc5CMT5MYzD1jAjU2tXywXaLmyTrGqcLNwL",
  "key17": "Zqqi886Cgr3gBk1WGNRVzqLCqSoepQUnup61xHCVojwGKPS4ZwfjnHRAZs9cU3TciSopbtfiUvT9TNjxud75EMA",
  "key18": "2xgCq2TFGrsFxAXc7xxKaH5GH9xapeT9B7QkgjrgKtaGxUZYUkE7n8oS8jhUHbHetC37zVGic3Y1pnTuhtkzD98C",
  "key19": "3yYgYJ59zry2ESDiidGTW33RXUbx4ga586eifNzLZ6sjdNftaTBpjjk83Z5ezn9M5aXa8fmgA6r328FfnY9N74zW",
  "key20": "5BEsyLEhFVmTyMokosh9vwNUy4pAVTJEyfWLHyDUdVoAu3ULXh13W7ogxoyxp7iUuWE6P3476jgT5xiC7YcLC71y",
  "key21": "3h999Jam2eUjy7P78DEu1xBBjLjMNtQA7uo69Ah4ZbxMKho2CUk1wFCWzemzHSX7WyyJp9BVqU25LViPK5TD8Hoe",
  "key22": "3RMnqiBMYSwF8i4w6P13VjotdEAdiXVwMYr3zGrnRtMrvJ4cTi7nW9ec7uVNcqTCUX5v7oaeTBjrxr7D5yEjr1VK",
  "key23": "3SABm85Zj12ogCxT1PKJuEhvJfuZa7J8X7WY3pTbkzV3k7dLQr24Wsh3X6LbwAbGDdehnGbGtEu5mPrAg39WArG8",
  "key24": "uZyPCGqPnJkTuWM3WcH4cV5uMsg1ReXWGxRgcN6GXYeJ5UKZGmfSf86HVvHDzc51adwLyF7CtTuhMR3TKzRVh8M"
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
