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
    "4ezjcEbUTikVDLsTGGeEf8EcgX2u7BjeWR4v8Pyi8SrebcangiJiZenFEsgQ7MMF2h2cLi7R9z5kmGwUyx4ZPBFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sHQBDUJscrWj5LpN3N1tHxZTP3Z9vtjuFaKb89k5gojsuFwJ6cJSXAR4gbGfwb5KAysTYfpguv1tBZXjTkXACmN",
  "key1": "2NUqVXsTN8giubQCyEAYyPGUq9sqCtdz7DP5xedQv8getFjoNbQy9sU79Z9R7pouMSV1fjXeTMYpoxFH63Dnj4K5",
  "key2": "4HkPSmzusht2Pmo4BJfjuY1iCV6A9ejfcUtz9aC16wSRypa49Ex1w3yAHQvAgk5Ucy9zjGd2QL2BTALxLH5Kcsi2",
  "key3": "5mpo5e1oyRvfcjh1fprho9XF5NGVixvAgEpcNbgryDqZnRFJ6qURJ4PK9HiVayHoDiErioAnfgk4HpYaBe9ycum",
  "key4": "3PF6PK33ykNhRdG4wRnkxkoybUzp9YmYtX5Qc5mj92CP9aoUV4i6vb4CURaftjyF9LuWZ65Tb4VWjUEDBi1oZhpp",
  "key5": "5hJLA8KKkJrSVGeSrg3iZiCFpK893aaG2E4bNEHTfZk1Zi8WyK2QprRH5QggZ5TKZDQ5wQFW8Ke4nPyyjuvkb5LG",
  "key6": "9KANtFKe7T3HNNuTtcKFsKLw5Fj4UxJKCUJ2iNs2bfX3yi7npQ1ZM4gzYvxaf9uzVKuX1TLQ7fYyG6rFgnhVDU9",
  "key7": "3g7mxmWCL8Q1xL9DWr7mB7VoGeWgHF4BetAb1ku6EXMwP2LkhDskxZe32yZT3Kfhej4QEnCA4W7C52NqitwcmWr9",
  "key8": "5Zj4sZxb3kZYcrFCchK59HbFsDNGAakZrDm77W2JYkBBr4Uj1r15DRdgenY9LssgQyVaVLpuDSaGmC3nAAgvfiaf",
  "key9": "4cKSNpDDrHXpEsFZKspgHG4jHmFae1GEboVhxDSZhMFmNPE9SbpxnVSjFTjvSx9w1pZw52kitzucJFp59o9SpeR4",
  "key10": "5iiEA9feiqdfQddJKhyRAoXS3gJ5oCTvu4VSdu6HHmCxXTnFmdAJJAH2mE2GhkLKNDYAA9QdJvpp4tive8gRjxYm",
  "key11": "XufbbuMAeY3PT3HGRqQt7RdMBfMWMAaGrivJ1Kdbmko7jbZrDKfBd4CiqFYXeAwUMzftUmup1T71CDZSe5pkuXy",
  "key12": "3YUTuGDJy8o9Agxta2ehs6KfH2htryjWUdZF7YPkMQUgGRDhs9smfXycdtJw32JRF7mzVMVzG6Muu3aVuAJpnwDi",
  "key13": "4nqozbEjP9s3GJVm6L27BdAV4FZCUNED6heuVt8qnHsVJHwmXbYR8rnhwVnUDWcfFHpMe4if34rGmnCXkxBnadou",
  "key14": "2fvJcG5NsbZ2jdDWXjAYbiLmPsYo9TKFGafux3kWkn22ci9w28wnGVu7vF9BHCNfcyc8wzR7C4Pwo25RzXzGUTPJ",
  "key15": "4E5FxfsLrt8ZMUv5n4dDLx3XpfVzN1NSaTpoicMYDLS9P1DSsigDY4hpdoxfmecsa71TS7vugQufwSqXMDi6yT9z",
  "key16": "5cnnffNfdA4p5C4biJcD4DiLa4SG75vkphU1PXJ52TMLw8CY3daJFkUqpGQ9oKngV2iWbT2XjxGuecuxtM58Ccj4",
  "key17": "2gpPPzq8whZ5uSWFx5NT53krHpyq1Nt72WSfKjPb8cyeoiqdwZyJ1BrKqWNDn6L9kxZ4467yCBXkC86s9Kq3JNEJ",
  "key18": "rvufCLraXEXKmCJSAxjgXSnTeEHyCnqA5MZCUwUyvxB55ETMwyqYc32MTFHg6PZYay5MaE2yeEucTYxdPU9rEQn",
  "key19": "64op6R1o5JuPLDh8vVMgeqQzX5PHLwq8HYGgw9qm5GptsVihNX22BmfnhKHzcGvZPJJjN32ugBLdL6hyQzHW7Xj1",
  "key20": "3qS24SXwfZvx8ZE7fCjTdHXGAKSMqhAfKaooYgUjmC2XZrwayHoqFdBD5ScddqXFPiWS9YfKEVDfjvQdrMEfr1QX",
  "key21": "47qzWzWWFCVCSpXoMenVjUmumgC3U48rX47T2723zRK7Gu5faPrs9nWqDp1mJnyF9y8p8E3PigkQjFqaJDk6yJsT",
  "key22": "2ZCVe3jAuPG4PKgRzacCyHTtDTVzBZ9wu6mt2Vc8xfmu5uVuUvDKEjZxcxDvMyw44qvexVguHiLBj7ucaT6p2sDv",
  "key23": "3Ga1kPrvZcmxiNu1Ca6fmyNDarBYHzExW4gdeHcr9j2yb5CwbwKdybWmmbJzisGaQknN7NxWm7GASptsMRZHYpVf",
  "key24": "3ACNnSe17Zu3F1U86eeReB1jUnYjmR4pJm3F6363UTvkj4t2RkrznSjJNZcrYXJg3YcTWUaQ7d6tubESN6TScxGZ",
  "key25": "46NZtA7LbuhZvLXBoQTtnajmSALCKHnfrimEXWk31RTxMEy9gQ6DWNWyD2TJPKPDCD96rUFVuSvm5m7qs5HQTXNe",
  "key26": "4qZmMMq5Dne1YHXyTUgZhkqnoSysQBkVt6oSPyirDtFcqSqLnrBVFfJ31aUSg2kEGT6NAbNVerFAR9vpW8x1riKp",
  "key27": "5JEhw82rRaGxZGxrjMYnG14LSTJQH6EufzSy4W86Wv3eENq64YbGsvvN2AKVRB3Z9cuCcGWKF4HgGJrQQRss6nqk",
  "key28": "5b92G4DFkcdcqyB6bXLu81WwVFSnAYxvQmjMdeYWsTPHwc7q26T37VZ34D8dzGthU4f22MzR58EZrDwkTcmSTXB7",
  "key29": "4bbi922ZBKwgPnY5yrEVrE8HqrxrasytiTB3wtq6X4hJo9MtyHaEmimjFa4tHxCcQ1eTVXRNhqGns1h8ciwb4Qq",
  "key30": "2TdKGWUkxkH7Qdt3xEB448bwoJkH8Uios718MiCrp2KDRwFfc4HvX5sTXPF1HeddKUCCXVJg9kCU3NstBSkvdFk1",
  "key31": "2GDafBRwjd7L8HAkbm6kWtPx5niGKVeNT19znoLKu4yRGHVKqExFww8MCJ1QGTYpJ7sMFgBYa4QK6XiAa9TqbmkA",
  "key32": "5KnXPJrYibkurv7GN6XZUssmtNsR3RgW74KKAGSiXVVKViZn8cBruuNAtdgGhXAALUvzooBGSn2MnEKtTjYDGfqX",
  "key33": "3fMhs2Cy3KM1h4GEmhWg17YLp54xi25qdu6EEWChKiyGWBcKz95f3juYY5TucrcwdsGWE3JaUsEWE3NJePa7xyyA",
  "key34": "UWXmZfcg8okWqLYH7tpJmBjWxpGwgZXUuZjyALLvcBaFn8zja2yHQcbF29F5D4Cp7i2WijUyz5w4r1TQSW22btA",
  "key35": "CuWWuzxBdNHxLJe1yapPYGS7yVRRZmZHXgELVn5NnFqn2Gs6uKjpcdF71iwMsxvxACy2dVK5aaPWS6cvqSSWmP9",
  "key36": "5Jz8Qs3j9wJ2dJy9CCwcmGPTZLY1kpqyhUEG8RXV4RyicvWUcp9rXRGrBfmWGoT5Y4sis76YXtUijEBBUs37VyNN",
  "key37": "63j1Gnpe8FMc6Z2vTpuLcA8LD9UjUxoSAgmxNevUNanz7BjhBcLWt3gtao5BXnBDc5S5iPfoVjtRfkqSkkVzcPTS",
  "key38": "3x6W7tgycGomTxL13TSzkTmtbKD1RHQyBRFxndeGGHRWZj6isTgcZiuCAoqBmxc7VPcMR6owod264V4UxixSjCGL",
  "key39": "2aekn6kNC4XxNAEAC8vaABLpUahe3jsQNRHGvA2dp4CLXyRdAGWkyWNzY8zHRrutBvGKXzR2qiDrfLFRbnpUKc4A",
  "key40": "2MarZvF9RZwFUCLTP5tBcgiSXD6DawAmYPMg2e5eZpuog2cGMaubCkUVn8ssfzAwABn4AkeWjcT2VubF8ycZXo1d",
  "key41": "2JGnTgEg1UzrieYMjxgzBrnxRyRVLN81kzibnHL7m1bY7juH17nWX6MF9AyG4gRRXDbmdQTyvJSEjxqXxwXbhAsb",
  "key42": "fW7hcGXpr1z7cZCes4SyZcBj2i7Mhvz4Wm6pFn62nLF6SfwLkKcGc87jSMKMvhKXeQYT7LrY7oVcDYNnWiMxKtg",
  "key43": "4ATKD2YMQMHXtcoCDgTWC2AxgPcTfvfufTNvRfuGNHspEtEVWUcVqZm1cehBnHiZndcBEYgabGG7EeJpEWnf11WD",
  "key44": "4Pp7SX25vvminqfim2kRgNzeb8dPtJXsFXNtUTp8bEbyPKJoxRVELk51TxBenwNCZnBV9a2NvwysDGxACn6vGkcA",
  "key45": "5ABWhsn7KfWLGZiJCs2wu9cefan1SBbMr6weWsDYU6wCLpozgH6vL8w5t7jNktzjTvqyAn7KjHMtMDRbQvgjV1BN"
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
