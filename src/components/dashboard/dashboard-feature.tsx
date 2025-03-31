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
    "XbaTgT6pgYv572YU6LEMeb9BUf4v1xmDBAphzQXvCQ13Q4fUWoCXeLdqEfeE53oqRjW7SQU4TNvy5n6BQfaBegb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HMFnuri5KWcRajEMvMCfwkXSGHXr1PwNNNZWEj2Y7xLsY5gtBaArwHYsP4TqRMzsmYmpNvDswm6bcZ1cqJAM6BF",
  "key1": "SmRVRiyHEpVRbxvC7e4mRu71BQt5kkZupMo2oCuKt4DctW4Wp7HN1zz7LsnExqEoVJt5W6nBwzR7VzV8eMfeE25",
  "key2": "mK8RqeuQErpbbS3iWrHs7xdawE5HE57QMGVA6EgJzAfjRaUHQa3yeYxGyvUpMaewgnHU3sGGJPZjAgKFAvdEJHd",
  "key3": "34hwqPGwwaZLeZbFg1PSVYuUsGGfYMbrEgznS6KmpMGT2ojLLUjkruqax3ApQn6CVjqwwQzLCQppMbRFzdVTuxCQ",
  "key4": "Qtw4pQcym27aYfHbfqLAWZ9AmZqYwF4YYysPc4GkhhWe5w1LEWiQDZnTHA7JH8SYqzMeYhknxpTrauqPUv6DPmU",
  "key5": "2CK14Pgzovk9uPpyU4zahJqmPv3TYXFW6PjanMtiQmb1sPL1P7WeuMyaDEeTDCzVZod3mjn4GxZdG9juPEbsjq1M",
  "key6": "2Ej82i5nFQRPaVJK6jFbAK7THN2b7iZECZic1kceGx97YEzoa6sYbtqGpsd3wc7A2HK1UyA5rFguv4X86Hyz9ZJT",
  "key7": "695BpPKtbq5NMpxEGeTL1m45PxczoWbjH2bhhMLdVkHavWRioCxZBzs6nkCSYbRfyyTHDp7CXxUUKizgc2DDw3d",
  "key8": "2vDbbaNtnZR1GHgDLJbrxXv6uFLQCGMk3dj9WAEHYv36zoxnwhgiPQw4wbDoju8GTmhy9kVYxDrkkbdskoxYUPPa",
  "key9": "2zk4mVREPXtH44Pq5k2DzkHpVwX5sqna1B4s8E6TwVi7FemZx9gDmouEfz6aZTuwRZXaqqieYtYTK8osrafZUotb",
  "key10": "5eFBKAdmzkk4juGngP5SH8S2pWtiFsdteBJdLyEDQmcpRcv1saBWi7dnXZqzFjJdk94skxdtdQXjzLihS8m37WvG",
  "key11": "Ne3ktJnEkSPQUgWZHQCb6rT3gFKvfesMiqRrvB3osUme1CRfxRSdzfhBmuB2Z84KdowVVd5m4Wy3Mc4uSQzjzqF",
  "key12": "2DUwWrFrgn3oaH3voRmjELG2pkYYJ6r9nyiuzFzRubRnMhjhKibs13NQ2mwphdVPB9GqBr9sGiGadJAeEugfqeix",
  "key13": "2qoth9fEJi6ePA2hUpRNfeawHzYiTMLj8EQadvY4xWBurGkhTrBpKK9fnEQnBrC1dEvjAYHnGsy8FTooXC2vpbtZ",
  "key14": "mneXPLhF5T9GFW55ik4yUjv2fGdWpj3EVY9YS8j9FMmhF92NTcTrAMG4PVEXm6pbsGjHWya1VJ9fkSJEXKS9u8E",
  "key15": "3tbNQctRQL3JXT3ntyZMfFRG332YrCTahJL2WYE1SVT11ffyJEmdVbs5QyLGnBejBoVdeH45XHBJh9h7QorY1AxM",
  "key16": "2yEH2djHX7tbwpQV8gYgtRfZvDzpXXRPz9dcjByj7JAFDqqNYEvzE1EiGWbngapMWSj3Avhi1wr9iBQuSHGrdcTf",
  "key17": "4AsHJ8kAAnKhL7T34Vee8dAa65UGXxKS6ggWDaqoYTJECDJjMcqoSm5zYnV9hC1Th33c1YPqH5PFqgN1BSvjMHsN",
  "key18": "2QpHkmzdYsk8Mk5s5SKCWjpXEJRERZfxo2Qy7vstna66Gqa1nHyKRRxQwBrrhq2dtXLV95axsJCz2vrMhXCorvz6",
  "key19": "2dyCrt3obJf7LWUH1GLDD2MaXuZbpZZJQisLdN8AdqnzjwUX7QHp5fsS4LMjLjqm2GGvq7hkg1ncPoemgoSEjuNc",
  "key20": "3WKSu1C5o2A5v4KPSjXxUgRnS5Mx3rH1hmDX1xm92bVHcacdm3t7tnQrUUiEeBfrZhaYG2EALZsUxNQgmqt3K4D7",
  "key21": "oJn3FMjZRBy2cqkAGS6DnUfXJj5fbBK3tvDHgsYUrpBAwoyAHvTQKgNd1jTpJjKZ7pYAeoNqQ9cgJgpWA2m2Rmg",
  "key22": "3g3eKE7iQ6EJCuQtez3kTuqFx5jssuPyoTKFrDfzX36Phfid8PVGxP8Wt6NcXyE2YfXPpXckzXfuN5iuHK7b3g1k",
  "key23": "f2aUpq1uQ2VZ7Ao5YUdbpSPo9Jug31AKER9BsE5NTvspknQTz7GEX3ADQaWB6CR1peNCL8T8jA1R8TUpYctUhTj",
  "key24": "3jne1HMG6KpGEABKz3ZVabp3TCqCiJzCBX4pCbKkBUk1ieR2AjuG6CNm88HHXUNvJ3svGnFAQHVakm8a4xXpx7Hc",
  "key25": "5jFqT9HsipgKC9xZA943xdUPVaUF2DN9VCGoH7ThejAXPx2QRZqv8FTcPNmF2Qo2aJ2kkcCf6WP9iziDxwMvYoEb",
  "key26": "37Uw1oPkuCd4VyXWRPTkNSSFddLfWZHAk6mNAeTvneTzvTWLroKYBpUmo4HucN5jCybFxqZ67bSc9pYPYL6HRJ5S",
  "key27": "mLF7AWCbvfeFqS4BsPeERAR3rAZrC83bZ2T4uMNKDLKQQ2Sen2n5RZvc7ZAX8L5HkVnd9AcE6c6kE57yRoYKquc",
  "key28": "2Am8MNN8RkwvtfbneYqkTe9YL9KHkde2Tu2okS6HuaEBdH7Yvjm168BDiXaQFJyykUx8Gwcq8PadHzSffs2HEM56",
  "key29": "3RY8Nv6DnJhNow5hsNm827mVQqNRgDqpUhhBzUtyWYpoZMd57pZWkgBCxShz8yoPz9fqZUEhxv9Rmx5kegLtkT8S",
  "key30": "5qTYkamDiHsNX68aXBheooEacXvF32v69FhWMKpg21JxzKTMb7aXfV6Kcb4jEVann1VyCDUQkcy8QRtM6fGst6kJ",
  "key31": "4DE8mR8xbGCAboxj6FQKyLHa7k85Qrm1ygXXGuVRTijbsSQTT3HWikxhDXjqMVinKcXpu4T4YtSUVAgweEhX36A9",
  "key32": "5DULrwvoMJptfZGkjT9owKNQutARjvbRsPPiRKZ7BwWqCEFgejhETT1oytsgitnnRoPetTTPQfnzgwVWBYJpKZLF",
  "key33": "66irK5jtJUUKQGUa43VbaNQ13j2jBp5pFWmprz4tpGvvdckRbK2bnnyhn8uYv9iJo6dv7dtuUZBkEaD8aYSaebeh",
  "key34": "3un81aFhg66WnKPWgjTUCfoAPxvVwnaaapg7yQoUqzt2UVJHEdhdRZjfUpJTEc9jqD5T77wk17tz9g3PfV2FvmJE",
  "key35": "5gHSJEirpxqtFGPVpqhWdu81kCEeK8soY9pM6WMRkPNNnXXAK2Uvg1GAbzrg1HWmKU3bdaFfdmGBhBmkxaJq5mec",
  "key36": "5ADgV1F955hjQVLQyeWsbkRbLLCeGcD9A4J66JLstJuktrxYFLke3pYjbNM6Az3M9qNjskfXoqY8YWTxr29TfE8A"
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
