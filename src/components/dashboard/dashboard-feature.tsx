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
    "4tCHKVsmLFPWh9CVbuMuorSQoitVuFFUEZZxx5RA2qcQeerZVLn6ENQiYb6VDJENftWUyJ14nZHoBPGFWyj9pwVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n1qHUVCvNm25Z3ZEzCLMZKBRgbY7KxMsbmMYJpm7Neut76FS84F38eAVSREBzabbLotyrctkBnTDnVFANqPNgoZ",
  "key1": "5dwBurzWvnzBy1FdAq8zhaZMmTdNMn4RSjnbrKVMEWV7hxQPBF1oVAYQKwSfF2mdHa9ymvxAxXuW2cRgBTR8dLX7",
  "key2": "4v6xwo4LovyiDt4mqjbju8K42Mzf7qVEw8W2jfVtqMznADWHGV1X2GzMEjYgnXKrrdbPZ2JoovhGhEqzNjBmmdxU",
  "key3": "FioUjHrVjskLPY7p1ef8adnd8zK4r91eCks5Y1QW2oqkDTgoG5s2ZmVNZ7RiJ1qf7jvmR33DWxQp2uWax9bSm8N",
  "key4": "3LhKMLVNqU9H6mNnzNdnofw73Spk9SH49DaSPo2D1sdSHBDgaYoNJAyr7ys5nX6cGTYAbPaPVsDYXU3ainoJNcf8",
  "key5": "4FqFgmhTZQaqaPgPHt4ZhiJMPriVXk6qjw6eWxibuQfUrex9iGcbnmwnoMqEz2ZoRPtPbcVHLB3d3x7pupQXFjny",
  "key6": "57f8ZK4zjRNehvuMG1CpotaJMSLSR1n83xRCojxUjTBdLbsH6XuVZqktoyJvDmB1Q3Tc29MnnG7P7NwhGv1EKQkA",
  "key7": "3T4CbuCCUro5CPsXQhFwhvtijhqS8XqvnDZcGbAcAscW84jUaDJUMHS8hCdbcaZVsErL22wUwMVzzaAY3xxXD6iq",
  "key8": "4tYXwZaKFoa5KeNHTmpVVFaxXdpQjF5w6TYPLCkxWFUibTYXNTH8Dao3s1suvtwaxJg1i3FSDwTzVqMabYHmuYP8",
  "key9": "49mo7ieUQQ5bTWx3pztdUcLpNs6KzbMC8cbkHVAd7QaD4Ne1JTezAyd3tNCpctacTEQaowFviuMHQam7CUCP5WF1",
  "key10": "ckFWpuqoe2ooYQZ9u3YLrXHTGX5visfjXuxsJc773LmBjhxxpo2xF7D8P9aNiJwU9K4ShR9hb91sF7ZAoaL4FSH",
  "key11": "3ChxBtM4cSRf4DYt9xLTUxXBmGWXRZdVsZv8grfXHvCdX2zTPXJreVfQq1CxyuejnQiwNDiyQ4HVKzAZrurFcuK",
  "key12": "oRk4PZ2YsECDoca7Qi1WhWPheXgB2RLSbHzfqxyhScQdXtfbf9brxtKHkLt3qQJE5cozQuAueEx5oVBKCKkNXY5",
  "key13": "2TGsWdyrJbKWZ3MMCCSaA9tdi5aH9SN3GP5bkkBV9TFdvzd5JPza9ExsXZFzNrivM6g8JPM1316n2j7QCWvvEa3v",
  "key14": "5gu1ajACDTkUWQ1RHiFeVpiUgLNBWyztF9KmgpRobZ1afdv9M6B1pZVhXQrhR3FnPXMbTg8K3Yu572VavtZPMthr",
  "key15": "3Z5G4EHVKvyTLRHU8ZKs9jJKXkrmacxyEjaMTeE1TyconEE3QtueN4dTXFeWE3vhbAKJskvD2Pq8GNMgAjyTwvB8",
  "key16": "2CBHLSCUxJZ33fGuAXb2ag8wiF43yP1uZEAw9PjdRYWfBEnbEW888c5p9qEEmieg15F6f9ausMYwqxBxzZQ1dFN",
  "key17": "uqUvDEDSXozyBLcfwyjihyxEndfiE5kLQz3SJeDqr231D1obX4p95MzQP4BrJsiM1mFGTHxJNvvUF3z76cGE5pW",
  "key18": "4HUf3ZpuTd3H6QZtMSYbsjk1yyHYPpd1osGdySbA37UtyKcZ45SnfCeVSYr6L8u3nka6NMDCr7sTh8MjNyjDuP11",
  "key19": "5cmRm6HmDh2qwaZMEaRoZ5wz3Jx3Uk5w9Wmtt63Y18NR4KMzKuWsu9d4pkXjznsuzB5CFwDcdyBngYp6jMLECCBf",
  "key20": "5YKSjkeorNQGsVGajzogxmm8xTL4AvvkxxLMoSt8r6dwLpJptW188od9JRRhnSfoGTm5ifnUd3eT6ywe1YWJgGAB",
  "key21": "1ACmn4xJboc1RKgcWvtzsLvUasAJUtuojrvF8quyfPxx736brtcS5ssAzR93ykCVpUstehmKRendAKmGamSHpgN",
  "key22": "4PMnLn3t6RyxeyE9RaMhoyMpCvha42HMjDrRmF27Uw1CLLa2biPU93s7RqgovhG9xnWgXmsqP1KHdjec8SvdsYJ1",
  "key23": "dANCh83dg6uejgXUHzty1Lf24gGaBXksugWAgFUm5wnowLzCUN74jB7bqPi14o9iUPjQzFSHEm5oSUHkZzgiASZ",
  "key24": "2auf8C4tdkqGA99G1rXNgfVq2tuDbar9BJTZAHrmp87XresygftxBcbiC5z19tUhqCn19efqKM5QnbK8R58cXQ9i",
  "key25": "4dzPH2WqsRJHdbjg6Br47fT6YjG38DZt2QV5ynC2un8fUPdw1x5MMysoxhGnGtMGdQfsrtL9i33nf5p6uXCZr1xy",
  "key26": "5HA7vW5xNqMcpYfGc1i9rqTmt4CjLRBJhxS4pJ6DYfMEdEuLxihkuqJNVZB3uL79jdKQgdGwTjYX8HDyiQReXeyy",
  "key27": "m8uB9darV1JzqBH3p85NUX3JLNCBy4sAQKWVAqnYgJSczNFHf8Rzs41agcqKXW3jhyFCMBrE3cUAAjq13LnL55t",
  "key28": "3tLUb3TbD2HFqXKs4yRtipVdunMBQkNapQQCw953E6ZX4UiNwmpMzUSUZQyNkjeDdLD4A61j11ZWFF9gSUQfVasz",
  "key29": "4jn4xwieN23tpGK2NGAdSDm1HWtTBWvqaDxNSkToA7cLV1d379gbabq7fL1P34TVAYCM9Jt1Vayz5ujByhzgHVCX",
  "key30": "3u3pC61EAJLtShTJFrNNTRCwz5WpSJ9u5deUbAV26oWUdMCqQe7ENwxFVtNcP1fDwYYe4YPYqZ8R3Zft8f5oBnzs",
  "key31": "ZP1ptNStZa7Nqg4FLUXgHakgUeroxHGkUKTcAGvp8nDZ4A38TXdcDaq6YqBQA49E3hhUbAnBrQz3ZYZkMwugWnh",
  "key32": "5FRVsRBR2tdvSEm9qRWas13JpKs8BvoR5qa1vXCsWrw6MSSoXfLobUKCKTygomvKmH6LtzPDabiKKZ2Dwt6WsVm7",
  "key33": "uAYhs8AeKp8k3b1WNLPhVCVBPmcZZtuwRqHTGGFm1JB8r8YD6DA4KWpq1p2b3xvmEyZnYsvsvmLRVcaEerqg4wg",
  "key34": "2UreRB7pmZqdL1aoD2cET3i8XuDZojy9EQ5RJEN9kvHfdr4WkKFi9BHL5bza9scrA1pQSzFw7n41fTwNWgUu4jew",
  "key35": "46KoQtuGdBNL3AJNucZkz2ksAF6Fs6CxZxZoKvXUDZh1rvS1xf1EBD5hfRBCTyCTxYj5NrCHK8FE2qTd6wQqFk3P",
  "key36": "fekbZjBgXLh9QzveZMxyMgr4VfL9MXk721i8VFt5bZgjsG4GjsuYXaU2Z8q53rGPof8VVbmDB7B5yzk6dr7JDVe",
  "key37": "5T7D4m3YH9nn2ccbyNaES71UHp7AEk6RmNo33eFmo5UJtwZspZH2HKQMSfYXJTsYiFxwLiQJRqCUALUie2encGv2",
  "key38": "5ZzRRNFSGU5CrNocDumk8SMDudnJjNYjvtKxT3pmnLP1TVNhHAEMW93xPPPykhwhbwQ5oUAwVAvGifSiDzWE1GMy",
  "key39": "4mUVuV8MDUBjk5MBxaQRmzHJSS5eE5eWec7E9jxEYfckDMDSXTc6JWBrkhzZAycGRY5kncAymvnSNEczi7Emd2g1",
  "key40": "4J59ExGtoHtKFTaXmhBYpkrfCgEU4ksvA5XTxPyVM3yB3f9eN4ksLRTLawbTGpn1CHcFy4PTfEZzZsnC3VVA373d",
  "key41": "4gEX5WgGW7JXFMcGxumz8x9aEZDuV9HhhUkbpjucpsynSfNV7ENqtUFNTuwWRo81b6jvTZPmN7aKAZJDDi7b9eAv",
  "key42": "3wg4KPKywHam4xpPabQQcfktUjPz7WJNCBMJFeyfN9BWXoiHhvAYt4NK5SRbyvDaFF1DrnFPhatVFvbrGc98G8e8",
  "key43": "5kk4KTTEQPUNKdhcpWcgkq8WNP5Ws1jQ2wEvPfBM9tD1BSvXVmBAVVtcbV6pX9wBamcPrnTkdph1D91mxpqod22F",
  "key44": "4TvLQyxP8QFkcfWUAc9hBptjiY4A3m9VFYELxixrCwe8rkoRroDUw3GmZsCeHUpKEmNU6HhCNud38rYTxVp1NzL8",
  "key45": "KCfMgxQaF5vk3RfWie4KjchuxA7a9wWeDmQJEkZXnA9evfqY7wxWwL2LD3Qz47yLoyw9EppZcD47s34xhQJbTeH",
  "key46": "3WRWNTNLXDYHFcHDyHfVkCi5nc8MukDSFPdTYCMJTX3tjcutncqwaLaXzkRZCG4e4Hq4eEogGE3FsCxhxZqVsKqe",
  "key47": "hYK9Cs81zkpo53GMAVBHq8gsx1y21x52zShvh5fqgZH7NP3pYFfsXyt24vmkvWqFarWUkHRZBtQoWEBSi9JFLph",
  "key48": "ADxSTAEbJETdUpmWySL5zk187ABkwJBs2gRmyx7jhqXybaYVymPKkbt7gSzaNimYEiF5JChw22Dz5jAgB82pQHS"
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
