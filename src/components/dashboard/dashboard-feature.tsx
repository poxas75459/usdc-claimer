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
    "58ZmfZKvsY4bYa1P1kwUUtov5pg14nreU1ve17JJmZCnA9gokxqm7LVL6ZuzVtHmBgVC3xL5CbyibNyJEuf1PwDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vktDP3BvqE4GxtbzCS8GPqfrZUFkUZxTfxpALVdqzo6DLqwtEamcdE6T4zv9EkTs7mzC4qqmRQp6K5VvU4w5Esk",
  "key1": "4mq5hBeeFqEspEvaz9J4amTLQtEzzLwJr4k3TVy9so8UNNBasgwr8raonKWYbDkMWNhvmE9cBRwPbkLkcWWV9Uq8",
  "key2": "4iMnf8wP7doFzADvcyJ8YtKcqUGBE7WkPZEQ8TGXRSWKctEN1WwHn1zn5iQs1AnBwCdRrLZV4aEx1ZCMRtgFCV2D",
  "key3": "2TofVamuMPyMudpGMvdz1yxscVX9o4JbEzeSSqvoiFkP6iimvYzLtaJcP3gQJ3ktqdQZoeTX4wWxcHCY4ZYr2SQx",
  "key4": "4xmBAfJtVwQnLkbAJd12e3VghSU1DvLQYo6uM4U8hxWFHFyXCegsRkCwW7xDrEZPS48ZEKorNpJWEUxgnL9Nu9Zk",
  "key5": "4aRBFH3ExeFZ9AFKZiyGbHXcuYrXwu3DEFuSjF6a1bQxdA2NUVdhaUDJJBoUDYCh7TnTzwZ8jVUCK9FaXvxZZy2g",
  "key6": "5LLYna4mwNrMS9R8kYxaYjPCzGYXjMwWvEa8w6zzPg2HkM9gF3wmdgknFWvLbXJy5xsoJWb65XaSqjdB5oyudJxd",
  "key7": "4Qb2m5Xf1tusttyrW5zCH3sxQXtxj9mYGnCNhqF7kxYCMdaVVBzuG24fT6krsEDMSUnKWYNrmQw6zWKX4U8zn1vt",
  "key8": "ed3SdYeaed5wXRRovxZvuksjE1NZJhe4RFkJrNeAkK8CmktJU2NGZmmapLZ48vwAqHQQJya8qNaGZMwEtgN21ng",
  "key9": "5PXs4bg4GCbztQoTpXiGHv11i4kJKWmePvafYE6xWL88P82PAPfwaHNykFheeUzY15LzHvfHknCUqHUK4FRWno99",
  "key10": "43PNzUPtKDjXRysGnJXYp8C8fKgerjEtFbpxw1GuueATtPyYFzrPJxVwKvDC5LfRXdmumLwDKwpoaWiK5ZrVFHro",
  "key11": "3G51hh88UmDifm4kGjRoXT6TZNm3yBbHJwKPoxd8eCM6vZQC53Wu1HJtYM9xtGXQagTxCGgdGDdHT33MVTt2ogXG",
  "key12": "21fCgJV9w7i5Emeowk58bzRSyc367Z8QiAuZdtgEqRZn4nQ1QJHQdBMykRPLvf6WkjnjkhPe2XXocD8A1jWuQPic",
  "key13": "kDU5QRqpcze1QXUpe586qcACnCk3TMUkPa8UPeWv2j3kUWa8PskDf7TSdMf7fHS211RoFbstNnWgVyBT1CokqR3",
  "key14": "2vrEJDv8sZzPoJfLp1D1qw9yG9tpCBYcd6SjLgDWPR9SJ1P5JYrsuLJhs3ifcwqSenA9fyYmkA3MyRyiSx6PJ3hJ",
  "key15": "Fmzj6wfMoDFc49rBFmz4RyKptjXaNDdQ33SB98ZdvehsBdgbjTHxWAL6hbwtrQMUG95QXsGYdohdUCd5tBdu9sg",
  "key16": "2R2gfZsBX6A5fnmpvACL16VzyYV5qQUMjys6ZvfHZB7PstzSbbd3zy25gsJtuXwS7ntdLBJhk9V5GkXmX9sAikqj",
  "key17": "3tgjtuEi7rbKyMRMAS41Z85jJ7J1j5vgnaHbidQTZS2a5yzov6BEemqrE1wqoqbXTLyvf89GUqLG59kvhSYk1iDT",
  "key18": "2KvraUgXp351yCef4AB8MHp6tP4ZwGB1aPc385ciKhC3KdRTrhtNqe9YDfvkWnfaAvCzkous1oZv9Een3Z7TwUz9",
  "key19": "465TYAL1HuZfDLgHW59m1Vys1j3Tie9oH6nNsTAMfbcFg5QJdm6MqaQoeZm6RwEsJMtMwve1MjjaCdE46BWsPDpU",
  "key20": "4m5j3g2gUCs1PcBVcTRzYETVJbPtH3Zsoc7qcabCiwed93uw13fg5egMBnhGYCWBnkrTEDx9zF981B3rwcFBr2ZF",
  "key21": "iZsAT3vWCUVMh7BWDHpoC7F2AtNkecRAzi6DoxArnMhcVkEjtjxVc7ZyUoRvQfZ8jvUhaRtUQ71RRC3ku6UCdMH",
  "key22": "3dBrvi1jdMKKSYL4CdzExp4hMBaVjx3PrW92fbTJyVfFBhqTxYjzEgioqUjqWz5FQpxT4AW528mmNuZS6jwWhHu7",
  "key23": "VGt7SngCPYAKoASpFqWh3pptNutmGqtNnx9QzbPX9DurjWKA8GycJ6KoVeyEPJbW9VdKHKJUHHZwZXfBozScDH5",
  "key24": "5do5LoDohU7EdETXSKb3jRYeRuhwgJ3Verc51a4DCVTdeiqUXNB76DACuYhsaR3mquHjdmvFxZ7Yq4Qmgu7zbwnM",
  "key25": "iM6zyGf328Ka1AanXEuWQRGZduSpuXVCgkRqnD4qjU5LiB9gB7ppQDT94ueLtMKcRLQyA4wb7AW1fKrQ4qXJjEz",
  "key26": "4aZsUKJjHBDuFNG2fDko6hka2An54KcCpiyR78m3ZqyxpBmerkSGyDVFjshd4ioZqmS1S6oR3YDcmsKbJM5s78GY",
  "key27": "MYVYCSdQsThtZq1Z5j3ecRuAWv1u4NUHwrVViGmjgRtcvfiqjWooEu78URU76QdX2ntioq7jTWNf6oujCCXaFq1",
  "key28": "3ZKKqNobEA6eJ5eUujpPdXonWJLef1KZ6sY6rTswYLvbkdbJoA3wXWymysLr5RnWYB2F1DW9RXeuskzUDXRhkxAE",
  "key29": "2hudL1SF7nnd8dkUyeiQrM5mDWUNRYq5zKMEz3UF6AJsKck4KMhbHARJT5513ZuGVqNuAAxtkvuddZEAfy4SW3mw",
  "key30": "gec3nBc5PbyX9gZUtrNsdpfRxEfTuAaLR7WQ2bDCm8bZbP424Zfo7j1YNQ6PsKewwbHkagoZcX2nAKCRLZNzFm1",
  "key31": "64DZRQsoYrimNsWCmYz1YcGEpxM3SSpHfDf56K1Y3CYWyDwpY3uDhFifv59C33kLGDLytX2bhVARdQ4PinSn9tHc",
  "key32": "4YLXVyzqDVF6J2vJLYwgaH2eo3ZJJtzGTFQJuTHzr7RnSNVe4gucJ3ZisMEemozJbkTNq8EMXdfWnPSJ5cQ71B1m",
  "key33": "32DsKr2RoMyc7dvXk89qTWTtSENNiDGvbSfNax5LxbWDC3MUSuPwoeKMN8rfzMFZGip1RMKaVQGqiiSQTpnD84Uv",
  "key34": "347PmZ4DuFd8LBSfneWpVsM7ChgiepgiVJtH7yXsfTAwpTbKYrBkBGsbbQmQJ9GnridAMPjjJV2dCBG9e9QfUQPp",
  "key35": "46JVsFadLceaotoV2yVyPRwFB6LAgRGR7LJVZ4BHMkFNReL6ykSHhuvJPXtrsteQc1fNjiYTw1dQo7MjrvhCYRrZ",
  "key36": "3yMX572WTNDAoCSRfUuBU3qQNztV8y2XTBKyvo4f5Km41XyFv2LXf7tcBQhL51iiwD7QCFDVfkQzEv5q2EmXJycy",
  "key37": "8c6Bj3vvYnrodLtdjKbQxjutE1Nxgn3wXzBT6xTFS18MVUM9ptCyZcdizPBc2z9gSn4SXuGWfnBZhyqm7ogJaGN",
  "key38": "5uGPeMRhjaELwhvQ64BAGeuTH9mVYewzjToWLa7AwX4yMSFxPAhcVeBDwUiYph1K2jmcKReiQUzXzwTQQfPhaQ94",
  "key39": "4AHBg4BxGYm5vs87d6JTEYHUJGavt1h3MSjFBshkuiUVfPSBKTdyWvMv16gurBQzDbJPefgBnDuiXaWQRZsegVbq",
  "key40": "mFcGCUxWTfh4eLY6PWLzaPFJDBPKzkccLpH272byxJvXwhgJtHH3cD5yxQjw3SNqSkpaLMLfEPLKL4zDXiLcNEg",
  "key41": "SmAhWq3pSuN6ioSDvA5C8NhTkEQEeBkuCe38jTJ9BvgJMhQkzuh8R7ZcbuX71fqeTGMZaWURSUL1JS4xixV9tUT",
  "key42": "4Udo7ZbU8n6gKexZ9NXdL8ZT5uH11M9u15XyGUAaCthn4dMcZoMjeDUcAKcjBM8vSjYPbAt9X5GsvWUXWXuHoaZ8",
  "key43": "2Fb4hJURpwjq7DGKFaPpfihKgnrbuk1gXv4475GqRVc5NkV9fpSvinv6uaq6Bgp6VUwsV28X8fe4SUf7dWpXeE7i"
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
