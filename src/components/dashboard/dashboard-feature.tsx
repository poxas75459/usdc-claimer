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
    "tRjCh9YW8LvX5HaTZqU9RHq7WdczjcgpXVXu6MXwNqAXw4QLS6YJtdReceLHS5qitWq5VXaAKecLcU112RNZ6NK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ecHDWhpdcXd3vQpXnKxUWzTk6kKa7fTzCzxHNKtWPTyrL4MnKttPyBXLHuYD5MSd3qBydG23nZqH3mfaDCG2gP2",
  "key1": "2MuKwWpWHgjPJdUbcequkRV1ow6nfUeRW5RPaVfDyF1qBc76kgGUyViBbsAThW9hvyjdT12RZrZhzQERx6Q9Eq2W",
  "key2": "3E9j21caPihd5BYr7XqbVVwDxqQhaUEBcYqU6J1CLBzdx6sYHtM1uK6L1affu72xQ5zERV2Gn6qmpwKEpMHjDv1z",
  "key3": "4hLaCoFiTWCcxNmQYe3MH2wbNaSK2rcGFE9VwKfdrLCeWA5SiEJ25YubLfVZGYSCmHFXEhFxrDmeBtWYT2R9m2Ut",
  "key4": "JVSzcKfk4xFgNYNanKcLq4cdSL7AbMTajCrSfxJzpoTszpgtd7fCVCW8Kf37VHY6wTUGHJZE12EwyvNMeR6RFtc",
  "key5": "5ANuGh9Do2ShfQ4iP5fjRSrdQe88tS35v7eUnisNKZcP53rts8iiXJiHjKeyaXbdz6fyXtxeA2fmr6ci1wWTawhT",
  "key6": "27B7FwxnR221iwmk3dnSvDRrJmBqDXbwdaA1bA3uDLKn2d8djxSiBN9VrVm4HtvsaQuw7w2a5kVCVZ1ET37dudJB",
  "key7": "3rKH6reHNp1wvVU6bXkfY3qWzpC5XDvme6k1a7jb8uUS3a1Kzcsv6myKW7pfnxXkNmzRm5ydFWZktujfYAve29yL",
  "key8": "dmsuUUvY2jfwYvC92HVv8rXbr3oKLXVLMEThJLHm9SSvRmro27XxK8As8QuyEibAXC8AHrCFnj4btYfYTr5nWka",
  "key9": "JD3MhpdnkKaTtax5jrDWhcQGovsoZhnjKP6v63yor7td7m6TjxPuXjHc5RGBXGUvejJ1puE665Cn9Kgi5uWBoXz",
  "key10": "2zpiKnxwpAY9sYCLwVHxurm5LMyDzJwTZoKCg6Bkd5gV1XusVu6PoAYnoN4atZ5CGQEvw8kiRsECXo9SghTuzG5z",
  "key11": "5ktSzPKtkewSiY7VEDZieWCGCMNanafDYekykVhoBQDp2FWenRry1h5RJiZKjtde5ztCjxZhmF2gMUYDutFp6RfC",
  "key12": "4JUMsj5e6XFjjYtLhP74nq5HpMFvAqhXwbZjxnAv2NHjq3RFyydotZbixp4hxs1bUr85fHCCCrZSkGAVH6mMXNEg",
  "key13": "dNr6AjfyJR3hpPfPJLC3b5xgCeuzDaAWpPJdoJEWeMo2mfKzgVEe73qT2r6novnkfnWrDgMXtNzpSkHCcycjENL",
  "key14": "64Cdmse4J8hw2WVqrvKCw8psYpqwLvBC7Ko71BmJZcXR7sGHAph2TCotYm9gFoCvmsRgPo5JFMte7ctATip9LyxT",
  "key15": "qRnPaEsQbjkVu6hYcF7y1ygNwxsTncAFJDExEzHsjwrhfnozcrP1vETNAwQni48K4N1XGXceuadCnNHR3AMRX53",
  "key16": "5F6imztAg2AygaqroakjPcko6R4AZTPbu9JSA8WLxTJtccF5EeiMf5Z3aNFZP6VkZKXSgqWab4fWPbs2NEx2oVCD",
  "key17": "2m5ruUk5C7kG5LN6NHVFhoVvDhwbjdozxJo77onDdcQ95X8UeS8L1zo9a54MJRNiuzugc7R5wpcLhgkpkazsTxe6",
  "key18": "49md7y996rBJhNUr4oAxCWEp5hfiJViciJAY3zc4mDhRqEFQTfD3L5ukvPyPEjxQscR6VZi7WJgRLdvkDoRUFy4d",
  "key19": "ntqEiiAyzmwEVUsWBwje3nbxCT6ZXXbewaZU72oHcfW3rNPqVj798Ydj5aJKHvjfK5d7ShmdikHrpe4UcSaFRfS",
  "key20": "2Hi9VyYg4qzUvswFgPM5T6i1bwqqjHnba6yBGVRQ1N6zWMGjVwTDSJTm7Hjo7jxg4oKzM6DoJreDP3Rg1D7yHEbN",
  "key21": "3Mf1X598cYEHX9uR9ZAK2ZYZaP5Gs9anK5YDeG6LBeS5LaxuTYP2dm5o8TQxEQb8XksRBiYoHxvLFhC8mYiG2Y89",
  "key22": "3AQNZuATRtifTRBTYZThDJy8h3PzJPvqeEjT4BMoRZVbyPLG9YzGqKQVZqkXTw7wpio8jDFwzVEVcWtCp2GYPDWb",
  "key23": "5disKiBGwFD6sE1M3nPUW6NYW7rtbTnV3fNpuid1S4RcmMBppiG9JdJbpgigAT4hDhrS3hPiJu4CVFRDEiMtsaCU",
  "key24": "3foPu67Z65zkhgxwTbs5sugGZ9otqkM88k6MBJ28JuyeDe8SeE5HvkEJ8wq366VWuid7urEoMkZJ5d7AFSMFCUGp",
  "key25": "3zuykLGHu2PFYUTU8ZVV4tSAq1ZHS7fvUdTawEEU8SNm1p64gdqgf6VTc7uEGh2ynaqddnCdgXdRwtorPfTfksuw",
  "key26": "4Wtnf7Ynq8vJyyjvpqjNgoNQoKBEqpvc5NijeD3bZZDg3hXrTh7oCvTDQJRoVYsSXnTBje8GzMqWmTikvmVr5tSF",
  "key27": "5UEvvFweQZNrpWVaRkVNARxMJBw6cj4MQ7uWLTfieHCJfgT9WxyDicq31CNqrHY7poxUKXq1N77rbJb8V7wngkRj",
  "key28": "28R6YUDoKAfCcGdYKFbiqc3GZPN3UYPNPcd9QcHgwdVaKxzbYMhB2AgzFNVcYpwG3ARChyCXLqZMVVQ1q7QgtkVL",
  "key29": "3jPkq2YUdgieoLsxu2b6Qbv1kgc62BnYB3pPSL6BApEREBkz6N6BNxG2bY4A5n7GcAjDERWKjudS9fdERSaCEWt8",
  "key30": "4MCNVgNwCicZeu3ovcascsEff6pEKpjP9AEKrGRamX26LKXkThxxukhAvjbWcVaT6pC5fiGrtLnPBqDFNjUowYSR",
  "key31": "wgtasYRPC5NgrFaVtFU6TJbfGpSLT5aGkkkXBJXBJdmWnZHcJVaxFDfGn6EZCC66bNxRLvr4gzvEiEJN8Cq3f6W",
  "key32": "5sohXsZs52fHQNp37UZZaxXgLxgWPmAf6FhRSYrFBJR24bu8g9BcyqXoijUSJx8rFyPNoGX55ox5zdStrkWx9gax",
  "key33": "5tNBjDT2goxLD97pLD7wV9ywF1vpQucShmtqRDEKqqjqw6cuKY6gYcT4pKmyWraZ9swx7XYdB5efCyxcfuuZ5pMs",
  "key34": "3QPNMdKs4MxFS2vUmtjdikGBMXkNcPs5FVU3ERX9czxbZyzZdMWhqXBJD6e773RsoEGhBzZj5TJF6cWbfuCj7g5W",
  "key35": "5jU9QsCSVEzxVcW5mmNi6yuzBx8kbsxg34RhLDFRA3GuWauobLTCDPYWBZg5bvyMepvSj1TU7uZE5HPS2XGyM1jM",
  "key36": "3zBiqLgyw2YGnxfh9UMrMDx5Map7fwwtFvvd232ZFdPD3W52czjFsBw8vXsatDiTZoYZte1L59ZdRw81tWB5BNLd",
  "key37": "496WdgS6JFL4Ky4xVaMLsY4M1Wd2HbdLMarQ79dgJCVAa2ort36J35vyghxh1HxaSeo6McPf24Xe5foXJP8EzFW7",
  "key38": "3ZU8hWmRu9K761ZyJHqrEWzzgrjGUZKKYYVnWm1mWH77U1VWafJBY8CCvdawwuoj9pTBgWYVagkvY4W3jyegT85o",
  "key39": "wYi4Ak92JMrLpzuW78q6zs8sfJGhpphpTDA843jZr7NyAxzMjXnxiPfDksQMJKAmQnWVXBrDoN4Gj1PUGPyhRSW",
  "key40": "3NXvmwqh3xsjYuXrTYw5UoSrN6b2Rw97mpiac6gzjB3vX3HBvjCdKVQdsifXhoe3VLC8m3NBhbhMXHbc4ogkqUcR"
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
