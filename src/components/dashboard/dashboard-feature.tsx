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
    "5U2tYENTKVoHHPiarQXdRRDipqpRP64yQXnBEGzHsMpAnydrkgDXk6RG7Q4TfRmozL9qjAkFNoB8idxgtsSET9Wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HXbBEd6CQyVeSGqTyNsxMjS4CwpF5ZgKiCuczHNbuPkDNnpNCfLpNn4UUPJpsR3hGhzas3FDZ5Xvkw75yCoHNEB",
  "key1": "vzakLbK4MCN2wX59rncn7nkwLaCqMkJxQYish8em2mm6k9gVa1ApvT9PbQevP27bjUju1PfkjTBXGY3VcYrAi9d",
  "key2": "2zmWVV6kMjG38XommtjJJDYX9T1ZztuQ5m8poPXo33YPc7eewjeNkBRpkAf9RwKm1XUeUkB5dKmuXd51Nce77N54",
  "key3": "2yM7K1wG2UFBAWvPH23nQbWsHusRSyJHqW3Nok5jquEKNKbs6CqyXsVJXH293FQK5CkJLMTsUCFKB8fZ6dSBuMMA",
  "key4": "5F8JE1Pjj1uvhGzqsy8YwSQsWD49r8oXJSmL2MpqxnNYrZijNM2vZ4N1hNJvvL5UxZp9ihjRixMZTek7UYY9bYNL",
  "key5": "4HQzzwTmoKt412W3aikDsbwwyGJvtW1CMTurynxVEW9uC6yEy5f2Juc1Y5jSN5SthGVDZ1emAjTLWgVK8rA5KTFB",
  "key6": "dzogmod3bWUJvXZsMgpjLTANBiY7R2T1PW3Wtzv53mosVP6YqBgKcswgMpioTETbfJTZLX41jwvQm9CcKYYqMrw",
  "key7": "qmVkowWKThY7XVtthkjK3nPQNqyBoK34fzoPVbc8v1jA15hga31g6mh1BhnLXFUVaDHeBVoNDF84fMbJgQfUsZG",
  "key8": "3h9p6AdtQ43byW8hLvSWhnZy4Y1Mr6cn82ck437XQtRaCK5RYLtsyrw4W8dyoQ5oUSGct8drLnGyFMcMiZMLkXny",
  "key9": "MEoXgmDdRmrkHCoP2q2nUz1LkKA5UQevc3swu9nbPNJrPqq34uBHHLBiix9znmMeiqDoD9xk3shfm9bDfLpuwy6",
  "key10": "2wNBNdoHZqbTZwcJdLHiv72bzzkyHzmP8UF9uMjLGjTzTQ7YJrMMNLMb52kwuT9Mjbchs8E9XtobLgvkzoGadwoh",
  "key11": "NwrKfPdvsPjdQDUH87BXXa9UcTn3rvhEGJkSAGq2PKXKqdzYsA3ZeMu1nSh1CHJpKqzwhixdzGcwh4kfb4uQ6kf",
  "key12": "49tYourr8rwRWBNzYVHpReEAQxeH1BeQbymQQiyXqPHaVYQKLPnwPgfcLVfFvPzbw5vMAA7cEPCDeJpW4t4Sk1fF",
  "key13": "FxiKkFKkVGxUYQi5uRcJRt4h1rbQpEVvWALJMxQKoAjHjo9n1KiykkLLhUnUuBXeh2riVaWWQ7dBBN6dzohtPKt",
  "key14": "5hML8Snc8HrQ25zvV2wQoqskKe7ruR9AuYmznn9TiB8VrNLn4ksqGKq9G2FSeNdotXCL3PvcQknDtBEw3gCKBxtw",
  "key15": "5xZJWu2CtzLFQs1hmvQb8WAbwzMGMBpxjwjmTnW1UiUCkjehdUoFV89sXVX4CSnqydb2WgR8cahtSdRKm6GGGWkW",
  "key16": "5iEgL7Hxa9cNYu477jJhbTkj6j2yfCyE9YaA6eors48rdfXcyWrMSKzR5uCT5fTFnkqYSjvCVFBjzyy9rQWt3JY1",
  "key17": "2FgXyRLfy6uYGTezMtpbRGpsYHJEaV5CANZNJ8DD3563Bg51vsJtJJiMiWrUkUpq3NLDqqhtcCFRzm6ukjM9mxW9",
  "key18": "2GTronfh1bUN7U4qgfQp1rNWk1z5GpSRud7Mx5maNkdvjU4NBX1fcVqZK3ExW1W5cjyXWWJTXNdBZyhQMEH9fCSY",
  "key19": "2GrGW3ijxmWLcWmWHQvHzwt2qRrMeoYW9epwsJkJVZ1JcFEDfXMSoVyEpGuL8a4E8a1M5AkfuRjrFp8jk4jJbWAa",
  "key20": "2YJ8SMAZ5q85ztzmmUBGGCqZqG2g3ATp4j2o4uSDryu7RvaTmrvzYMUyPSY4mcqKBospUBrDKS75LJ4i7SP6hSAQ",
  "key21": "3iB41GHi3ZycmfaFACNgapqam3ZbueJGKuPHkfqVKV7caaWqkaswDa5wV34NcsWyqFphxbKKFiAhX2SmMPP2nwDW",
  "key22": "24Q8szrAJNkicL7tKtjwEJh5BfK4WbcZxGNmpMoeXgTCrLcTCHPrRPoLbW7s1PUwifaiN2RjdShBmwfbrWcs4C1R",
  "key23": "5xu6GiGD4aEhtms4g5nLpvhZhLawcMbUnEVJMqf8SduDojS1moHJLg7Qdnhd5BWUX4Bs7tfTtVqRaTR9QM3zNKFN",
  "key24": "3RE7JS4BkbDLoM7nMFdbztHycHUaWD81bghahzwmsRRGmBK1pR9Q7oSLZjW1MX7hsoHfCUvSsd9MAZSs7fKg3TqT",
  "key25": "3Mbjb3pm78CmjE4wQWMZGU3E9zuNXcYvWodu49UteLp8ZkBbFksBxunUvNxdFGWcinLpdyDF3dcsfUVce6e1pgb5",
  "key26": "3B11bZanx9N9WssaoRcmtTptnoyYYVfiA2GFsUSbiNPS6vtM1nWuJfEqjLcd2smcwpCmka1MkuztjrBz74rVbuV1",
  "key27": "YkrVXth5pRSrRYNZwbNc1GHekUZuDhCeUdWCd7HXFxCAFyZpkcPcuEb4B1ACJhRZWFkJXG6rEGqrn3pwjgLW9Lc",
  "key28": "4WM4cAYkHSayfJ5141NFo3pqkx8RnjXbANffWXCekLnCSEPABBhrmXUVF6RUr8ZRKJ2v7bgMvGjH57q1VGR1snPG",
  "key29": "5enfvEVwcXsYCu1PXoEBysJ3SieBKQuviUHv1DaC2hzM3rGo7RFDR2ejQfczZJSzsbbD12u5xcJ92ZjZuGCHDnn8",
  "key30": "4tPg8MqmfznhR9BaYpz5YXArt13dnT7U5Euj1G3c7UER7JC41exyFEPySL12i26D4TTr1czAAMcnFMWgVtqnsKmM",
  "key31": "eyAJJK3PvxgKwV1gfa84xr6c9R6XJ3y4eUSxSXDqtDE914kmCzDoQgqE4VinGn7QqW8dzB9HNjV38sDTXPcDF1z",
  "key32": "3s1BDEBV8jypJyvDCEtYFi9QyMTMb4GcdmHKqkbM1L2EA3Na5MCCUNHiBVQeMBJ39DR5Ep55tgj1zdwj6bFjUGAc",
  "key33": "2xFSXAAM7aZhLv1gANJi29hphU9xRJuSwfGAGiDTbtf8bPxmrnBcZEQqEYXcz3SWevVNVvhQ8zmAgjnV2gazFHPG",
  "key34": "JDbSZujLK36uyDpqhnP5XEeqHKKSnZssidKXCZCKyBGwRtWi4r3gQQiyzj8aCt1LWWwL7dYSxFh4fLD4THQLeqQ",
  "key35": "3pNb9E7KFvAKNigQRSEs1FpnXHEHTABMF37uAFQKJykNovHthN41eQ4Pv4uiKYNNy7j1WyrnrpEoCrKpVTpyNdzm",
  "key36": "59LtZV9WpZ914pm1nd2qVirsT82eSBBK7X89u7U8sRHKBxfKLbYr1rrEz5coGJRpLEdgtSDfNsgQgVodgUxcVAWB",
  "key37": "4VMMDCvcL55c5o8d84k5vrzQq9hCamxi2m5yA4RdPGnKx1L6zpUhPAAA1EAhiSyFcZ9PbVxn2CzMHaZcUqEMoE3Y",
  "key38": "PND2iQESLAKvcUMBuKT7nWCjHA8EQjAcXtEQ1TSZn6PoAwP3sWDKczUHA7BnsLLTefCcupERZK7Jr7zNgsB9Uam",
  "key39": "3FincfaPYgcQzsqTBh1FxQBvkxb84Vw1Pq4x1EbLwxWATaeE7TUQKVwCGZcjFsV1zkhKJWPek5zHnogpseh6ndWa"
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
