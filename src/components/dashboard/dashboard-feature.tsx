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
    "wt6V85ZSKe2UJJMMP2aT9kR93V3n5BKEAQbCXwXXBLkBGX7wJBVsMWn5Ly2yUhgbnGK9HRfYRyKbWcZfJ1Rb5me"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WYQSwgK4QYLXc7ETTjxAEHfrHLDamuKsdjGRwoxZXD3Drff3pwUkAroQYyGf5mhvdoyzrvTtFVhfJfYWJhMbsw7",
  "key1": "3YiPgjTLh73rZEEGFN3hqTb64NwFWijZK61japNd9vPr84EEzGHkUyaB5Adte6sSAQTKdGqv2P7Bmd66sdgombGn",
  "key2": "2wG1B5dk6G1MpGZwquuY4jkdg3h7bSbHr7m3vA5zg5N21CVh3ykdevuqJkaYpg8SPUEuaoKjhLokN1FfMUmbm62c",
  "key3": "5JBcfUdGPrXGbpdzBSRwqS1C4N5XGYfUoajE3wZa8TYrc6jvskbPuRvJKUe7DGapp7q38gZmphGSSCTdMUjfzEyd",
  "key4": "ggQ3GJyXJsF5NgzCEyxHsFLAJUkaha9vdKhXQm1WCN2HXkD5otoymFwcSGBfozyNWh1pD6vSE4WEXiz1Dq67dcW",
  "key5": "5EL6a5gV6c8wPAxuXcwLuEuKE8L5yhAsqLXkcE4zz4GLBKrr7arxEPFuE7KeyX19JvnuQecbCVXbPPP4NBxUgz4H",
  "key6": "2ioPRBjiubcmkoiVXRFUz7v4B23xCFx2GziuAnkpjsPgzg6r8rZ9TvKVPeCNTnTNriKrUcedjFdLoBx6G5zkdKiu",
  "key7": "4wHniZWf8tJk2TTZ5iABH9ELBWrcxVgRuzQ2VApnvYwoizLkpWELjBhF2mrfiwM9hDeBXgDNzCnsvwTqHUsm6CfP",
  "key8": "3B2ApGZctMzt2jqbYE8s8SXHok8YX6RY5sLJ4xEdPLEqzxp6xpgQcTYU54Lp1CEeNZKJ59UxsVuk7qmD2DkpLNSM",
  "key9": "4KY61fbpf7MmzazGq8RQ3avw7Nk7c95eqnwvAMxg6KVHFPdwYSvC3hjSqm1UJEtS3sbEPKqwL7RKYu3pVYjQehDp",
  "key10": "57CAoBLxZCmrBFfPeCyesT7nyrYzQFoK3SUhBCLN2Zfgq5Fta7uHhjx2fJP5dNQZ3Y5aQb6eP9EZkgyTcR9yLmJa",
  "key11": "2MhTngrwyJ97gWcZUNPmFmDXQYvown7Faagkk4wpQA9XT7BbsF3S6R7giaNstH6PnK9ZVLobpSToiJSYMLrTKK2T",
  "key12": "4YqQ5ws2xD6saGRuZZjMTbb1zx2qJJRLD7y1ftzUrDph1tEhDzwKUpEF2eAH1bzdzQmwobZzSRSqMM6EUjRfJkAe",
  "key13": "2MDGzRce2Lyt5Aaoukkk65Dc3TFZNZx9Dr4tEZxR39dvveXRZsqAUeK2b2hEjtxXYK1f5qibXw7tfUqgwrfMVm76",
  "key14": "BLjhjCy2vBLca7etr5CnxfCVuJYRXaiphe3juHH695sCQUDCF8J9EERHRSKbfsXeyMAXiAX2rx29yGZfvYTM8Rr",
  "key15": "3KvUR7ug419E53K1AKY3rGiC8VYeWU6RaXH8HxPnuWhphTXCGiLJhkbEuNrpfp5UL9QdV5impYa3inb8F3LwGK2Y",
  "key16": "5d3UCkdfAYXckAHovCwCvKBisrZrztrHf6XPX2kbznpCFyN4zj15H8NwKLSZc1VpgumwKrZDLmeCUHaFi7jzHBhi",
  "key17": "3G7KViaRWhCdGZcLhtJgms1N8FDbmNhikQzuMTkyzTPeQY6qxwS5879KnKLf1WHEUrLdh2wRVqSQfUQGH2sLhsCC",
  "key18": "2zU89u5hzRUVyV5hDxAv43Ga477emS6t88uc68hFqC6fHNtbMog72uKcw5jVxvYnhyn8jhsJi7eeMyUbXdE6xWhu",
  "key19": "2eh1mt1pw7wEWSdB2qvFbstMsAMr7HaPsJs5kUJF8cY2xw6fWUHdCpLfXLz7G1Dr8ftbPREycyd8F9pxCoub23rT",
  "key20": "53b1SXS86cSo81CZmCq5M6W5pWaj3M6SPaBDabNxCpSa1JLpxZXGBdNdxymRjj8yG5UrCbNwb7E5csgSwqrQuAuR",
  "key21": "3RkTEgKpWSNpxfNWhuFFdytQ5uFFVRMus8yvjnJZ2g2UfKYjQuet5oMBSLwrPYcQTzf7qHAKwkrMWHHbuC9ZTJ29",
  "key22": "3bZbHppRWenjkStcbAxEmsM38Z4RjarT2aHs2ikzNzKh8jtjFrGt6u8h6C5SwY88qWdc8x5Vs442TtoYFKfsCwR",
  "key23": "3sAfXUPAC2be56tvMrLfK15s9QX8GcQWr5R9XqhZejFxhkD7SBaYCMuYEJRa9oqw6GHR8TsnYEvL1WHq2L8YQLWa",
  "key24": "5cR2qgxFHD3kV6LQ656qhmqovgaLMt3emebEg1DSEAFBC56MW3n4k8B9qVXVVZQEJSJ9DBNhEK2VHw6W2CeqbBjN",
  "key25": "5eX8nYnAQPoi1fWA9ejGpnqMVVWGkmzbQ2DvKk3kNf8mCjUYae3SKc3t7MLn3P625mwvgRFN29WZ7hoKmHKEY6aE",
  "key26": "42m19fAY8ifuzp8beQ2txCxbDCxHk4Mx8fBySuN3ZHyaYnuF5iJL28aVSbyYPcLk2FMgGaX3vLHrmSuRirPimpe7",
  "key27": "41nMz1WS9mKve7QKiCVxR8exExS5GirDdqaWcfVL9cBHHXHQt9kxeShvLK68wBUx5xDG6KRjKAZh9C7gZn1jPQKL",
  "key28": "5k1reX1Wt6NPApsXDMbdHJYnKkq3LN7PWgpBeojAqpLfHzqpUik3Ss8XD8KshyRv2cQDhea69m8fUqbGpZZqhUvk",
  "key29": "JsE1crbzDpmkJiZVydAwBC4hqSXqdpenMLMxy4vDncDH1edyRPsmJRW3JFEu6nT8vPFGB1Az8VJey7Ty9XEWjes",
  "key30": "59brWLFEh5MX2csVogAVSGtn3pbXcCHwE7v5o9PMgPUuDp6WxBhffBx2ZRV9arD7w4Y96gYEbyec1vVUzxTNP8zB"
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
