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
    "2Mbjzk5drehKHZHuKc25fTfNwbrdDDD78AcqCwdapJLLDPw73Hhu1EXPeVopmXSgojUvEQ31GpZRUTAmJrQpoY5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QVM71RiHz5RftfDBb8qGCh1S5dwucrbVtTrxEyKCDAQCU8k4BvRPrG9yfRBwXu8bvz2aU6FLRrhyodvnnBMkwz3",
  "key1": "4HLZQ4f1B2J5QDhSvPy4GmJnKeZBtgVZAMLknynJY3siUMdPgDkNRQkUtcJr7jdz4wLySPtrW8g9c6FFJ5RRK6RB",
  "key2": "39c691BWLhTEnwMrcquY6WK6hKoX9YWLmg2YtzyBnppW33iQqxtH7ZAedB8K8fvXWnW46kPw3AEdRsCcupsBW9AB",
  "key3": "248tchvs74G7WzpBHPafHGVu2qC5VKNBAGRfqSjPMiX9NEqzNiAKrrQdsPQ5qfDbxSj7g3bYmQ6yv6C4eWhGeK3D",
  "key4": "2dThTKQQaQR7V1kpwt57a7KDVPH9dYPNP98JhD5m4ijUfpWMXCSuEbueKUZTHuVrRrJgJUbVFBGVn6VmK4xndBtG",
  "key5": "3EBBaZcvLdvcCHmmVa3XQhwHEprDrLTcFiAcxtc6K1ffqZqg49RXYSivvgkZC3upCPWTakWwFj1iNkD7cJ7DSyom",
  "key6": "4fMp6bDAyL4GMxzECTFLaHaPM52EEvtDrjuRoPZQF6Jci4Ze86hXEuLBNnBCcvKGxriyBKSNRVdj7t14r5TtELc2",
  "key7": "quJMq595TUMezkapKeRAUuWXKgX3DEQYKcK5WLAVGDTEDsznu1MprriCwMceFbWUZtfHPtqWU3mYz68fpr7jiTU",
  "key8": "5fShdcWpdMdpQREDJb3SN7Y55gE87et73mAr5QT387Q1XJMsWZtaQpE6GsvrDswHK8FC1dE7MGMYBf2p1Hih6sr7",
  "key9": "3mTaeCaViAoh393oLjFhiEJZqSXQ8VaJfC1tV6Qi7eGpRURAiDZaHnHPPBx2jLQwAih3z9So9mRpfANMHo2T6Vpf",
  "key10": "9zqTU52RxuKEWgHXKBoYmjhvRxCMZCMeTs3LKwsz4zKHxM8u7kV8kBdp9nWNJqAnYedWqCwMZaR4vQyV3xkqMbn",
  "key11": "8FqbKFuuC2baXBi9zVgs4HFkC9xNrnV3EkWFeYg1ZeFjnk4b5JXCiH1RRqVbFW8HwG7RMaYY7SfV4fSvzAkeFAy",
  "key12": "5haFyShBFFPL7GeUVWyXhz8VW3cdTctJxC7DUg1sik4iGEJLpXs9LgFgRu2ueXfBrMiqV8xVfE2mwuLPn4367NC",
  "key13": "5aA2U8DSMuTLBf1Ld2b9oa3VYRJ1yEa6uzzcyPsdBpZyKuB7gHDYtupB3JktqmquT3qRMdqw5FVVfTr6zn93b7H1",
  "key14": "43NzKuuqQcPp6XMvYBLuBSWwvM4kmomixsxvdVFDLFhjhWnJFM7d4RzNa3hGsiAm5j37gJi17apaywkvpoFVZXQN",
  "key15": "3NempcFiEvcBKDeEeiWenE1uuXHjCCafPvcU9iMsqvyz7ssjs2YqmxbMXsdkZ9Fff13uGi3xKDVjU49g7sULTaTM",
  "key16": "4wFJ2PFUHCVtRb2ZA1kUtDpPziCKHRsqeZu1dMxJMgm1Rxh7VrXvSJ4gJ3CfTZWXZaoqYo5ruL7UZpGvkaAbCzja",
  "key17": "2BoLnMBDEiLTG6SbGxmQYtK6ZmZPpKAy2CbJPzrQEhUinyyjW8Frfmd1jJCnp7tyUMZ7BkX2hUALfhe6QEUaVUum",
  "key18": "55cpNPMarNzhaGqEDhJrP4KYRk8kKuad9GDYvUfGH67MAvArwqRrATi1tWXCr6mKTDEM5RdiAt6uKk1XA5rNFj8d",
  "key19": "4jjLmVSBhAr8cYXojqjobAYh41AUJJzdjKcYo892KknLVdXxQXhKoRYcZtA1hrdVhyaMGdUtfN4NsjioSVbGr1tT",
  "key20": "4J8ZyCG2qA6JCon9BDmC9cYgEXG8ShSHYZZkV4qzZ47Cb9fq6ddS52cQyskJkSMB3D6CHEV5oshVmuzZkxRsGhrs",
  "key21": "3WMF4dgVfWhC6bJu8PJqsLmy4jM4obFsYT5PTjFjcmQVa6fYQAWDbKM3EmPfuFCXU4PVA9tsckqT8ryxMTTEkSuU",
  "key22": "4WnBziKGWs9Z7omfG4rB9KHLXozAEG9YuPRQqUGmrKkB5P799UcYorPeDeW7tacNfn8N44TsMokSVRi3mmtS2CiY",
  "key23": "4myL1pD7xDVzjJTEJV9jbnJHnkQ4aKLxvuHaL7Pd1CXP8V9FxntqXe7XZ5CWTwKm4G6Z58jEAzwXGyQ7NvJQgLmx",
  "key24": "4JQNzzazRx9exzb5KbP8cac7ymYB24ftm9kMSHhoWfbhmqcbd6jFxF4J98VSNESdV91U1aACepf9P5DZp66MEoD2",
  "key25": "2uxvi7jaLNEDA1HjbbAZ2y8oBvrtiu7HzjMwvnL7xLajbJuHg4dEv4yqNw76qRpVkAcqcFzonJNZbU7fqJZcgudP",
  "key26": "5prb9vQACbDhB2dLuPpE57zH5h1Vyh6YAu5hQMpfm8E6EwTskUeo7Ty1fDwf4RFdXSaVd4ScFHAbEiHJrbVrmeds",
  "key27": "5kXkDFXR744y7y3z4VwDKczk4FFqhRgqNX4BC2rV4No2PiKWfHMzryr4GcDaob8YEPtPWbg3nA79QeEx4rbmBq91",
  "key28": "5AVVrt1t4G1BGehSzw2X9kDuJ6JFVFqgswhsKnGxHcuH9zu1UYhULGVAYYr1u2dQQnvtux3sdZdDoTW46ihreKAu",
  "key29": "m2VqQRqBRhyzS7ebFmCfQFVQgbRXhNEPzA7kuSfBieoJhqCcCV17S4XpPtkXfxUffLBTofepGQahL6J37YCPVy2",
  "key30": "3AcDWEj5sHU8bE4JUM5yd9siRm1Awcd71Wuh7YvbqMnRJJyWtKT8mzdPAdpmf19Vu1MQUT95G7iPhgiWLSL23Nb3",
  "key31": "2rnHiVSw4EATVCZhMwQSFWZkDF2BuTEXe9aXRtgxHRVB2MtCGJZe6c4mKeAvHW468Mfo3Pa3K9LsyRTMcDWfK3B1",
  "key32": "54rKu5KaVmwSun541f9WxqdRENwFKNwJtYqhxtJs9ZF4XFtorGVteNjqCJfpiLkdEow5wQiXVb6gHnFq4TTKSTgL",
  "key33": "3rtcCjMHyaaAjX1JDitHoQGmSgDr1Y7GeKX8pHQWQDCitz4dMDYMgBRV91Tcp8E6jvi1yNMBEh6Tq6qqNe2J9Mj9",
  "key34": "2WSUuX6N9ErUyn5TyBmPSTr7qnXeqY8DeZVMJe6Gf9gemSpN5AJyLsUJ5Bk7ty23SdNtSHfsfynVKKPzXXvLkqab",
  "key35": "2wxMAJWne9BjrYEa6WGxP7R7pTYGKCEZyjnb1i3hj7hPnqooDqXBvqUrWbwZLP9AS9VoJygW2uawzYbNXrqPmSr3",
  "key36": "2HTjC8NWFhYtgxmh5CdAFN4AUXMVhSJ13rxHs5XFQ48hUbpopcTH5Q3PmdWixm14n9CPSwB3Prz6u6YWUYgLiFmG",
  "key37": "3nrUqQZeRFZLsKFjTwNn6X5ouVn27gR9cJw9tRzSWrEuSKv5igx9g4tj1Ds7uJx8cFHungsDSWHtbnRT1Qw2Hk8g",
  "key38": "3xq5kfRXNHatm9rKpD1WNaKdyqvSgN8mLnAKsUPYyzepkMSUeHTZNhPyqvWBmwrtWSJrH5YmSPdCSfeXyeMddsWD",
  "key39": "67MBRSB51LQ7yJfqLVyVhkeFU3tek8XUBsgAZeBEPmRMdFhq9PKjpbQfc5VXGitgTvFvzkkxVqd1JrPQWs9VPiDn",
  "key40": "2P7PtqLR2YjQHxP9TKU83ftcqaohx5ZBQBMRMpovvK5qa2jVLzy4ZvrxzqYaLVPccLNvkGXf3tMcmNgC155N6wV",
  "key41": "325P8q2gxSPhiLN6GSiiMkGYtuyHzeQoJUBnvrdXTMVnVFFgcMeyKant3PtX65TfRGCsRCVe5X9zrZ3nt22AZV4E",
  "key42": "3EMibZoocX1sLS4YAs3eoz6EM2sos3KrJiSMCnj8gaFJGQjrw6c2nKj2oCNMgb7fA6mT8parzKXJ81VGxf2hSsuT",
  "key43": "22d7pPVwSyB3wvGeR1p4vNoHsQ4cyWcgCE1JgrYy8YUa6NfXaWBR24jGQNJGpMSF5K72ra2Nd5juTepgWec73qB8",
  "key44": "4cC8SGH9LrCYLDdSgNoZf8Lr1qUaXiB5aYgmJah34DX9EkFqtYbSXLosbLEKS8Z5T2uEpWnXkki2doWQo4NJ9uPK",
  "key45": "2WdELmEeBThEh6Fg4XYLzL6jgjmkonSjK8iV5PADw8CFQ8Z9D8w4j4xe7a2QdaAjFi11zeHj2zVGa5EZFFC1vddk",
  "key46": "Ej8pQnRNwVySJaaXxTmaGp1BxP8SqcxggSajUoMTr17GqS2L74SUDoX2RJkiGzDwF8SGcarhr92nStuGAnuBAqu",
  "key47": "FHbqn1YTLgXGY9v4oTkfBsHgrE2T2FN1fJvVQ4LgCqCqowKrC1oY33wqw7PzhMVHG1P6hZNDvSkuWFY5ck4GxxG",
  "key48": "2sLpi2efckhgoJzo31E4RrqMR1xqMmVio9rLPFzNVW1ZoPcdRpFeAeJiK2SRGN7RFYL6Wfq6NDYTka9Z5Ab6YVyS",
  "key49": "5pvqFyC4KH6Yna7VxL1sSz7QhtVMBfyPzzdqsjdqXciKgoTkEpfkEeq9CutjmuTjajkGPLhScguj6Yo7QYuBH9JU"
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
