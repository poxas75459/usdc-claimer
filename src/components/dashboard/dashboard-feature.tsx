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
    "2RTG1fnECvwgWrzjQeXEDBBQ2WKesTVbjstczX8X9ScDC1wSp6ghKZvfpN6D9XZbB9fVRo8qd1R7vvvkoycKmG2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SoG1v7ycsFNpwy2Qs9CvAbe4n1dSdKbQfL2E4vqamFDZhcRq5o1yE5rHiVQtwLFjJpMUH4tKGeKiJbcdWesGjxR",
  "key1": "5LwTQy5ks88J95WLvSuZC3iWBQcYkHWQXsKfmGDm2EydBwvAtBf8mNumdJMLbr6ezC5smRid9wpfnaKH1N4kyBas",
  "key2": "61AZwmQtX6wk8gSjfwdWeDdTzq3aoaop51tMvDyn4sGuGRCxaJuSmdcPDTikMu4QGEH9wqsQ6zuEgJCGN1Fhwtyb",
  "key3": "5pmAfDBseNyRyA4H5uux4ChuT7koUM35u9qVb5pFiwZsJuwdgYfpvoN97bZRhzW4emh2tXJ1YfgoFahkMjitxjnU",
  "key4": "xhJhQyyD6kpFJsxL4kDiyFPotygMgtt7GxFJNZ16h33WXY2iunHcgiStAeRwzTvxvSRF8sizJa4RA9xJUPD6A47",
  "key5": "2G2ETwRb8Qh34R4gxNSfkxg1iWX9cVNXpg6WTpbJsWKuwQDsnngpa4MCxa7Pg7jDEi2uTs5pgjJ2u94ELPwiY6P6",
  "key6": "2VXdJxJUUGvGeiPZYjcD17Mt2BmiGmJfNLo4XiZT6Mm6SvaAnX5LyB2Z9MrtHydPppDY6an8MENCeQX9xbjr6V6U",
  "key7": "5s1eDp5exURmqnn9whyPRWr1TvyAt1Ue49LULucKxb75rVLczZsaLqc19UuvCaJUemXq2C6PUr3whjaq6c9vWSgj",
  "key8": "5i6GicjF9AVMf9N3uY6DZHQ74nDFQcPwYTsD2bQALqZoJsu2sg6ngKHfMQrt73CjMEDSJC9Ve5zRZZUUbX4SMb1s",
  "key9": "xBc7kAfcVMSTPXLGWjEjPu4VH15zeknBZA9uyt2P8JS5HCCh779ZJZB2fz91W7mpxMAkPJ95T5kmskrav6Drtup",
  "key10": "4y2KfhE1J2XU1hdBhbS2sRqECkzbpg3Rk651mBH8VghpD8fAuULrXYvsG28TUY3B7Daggz9xNs43XqLYnUXZ8DNy",
  "key11": "5a3sbXa6qz5VBAzVpb7Xz82yhdiLzuWQNdA5qR2PXKYEmA1cH1kNMpSrEDTCmb5UCXAJ4j9ToTfg4ZXTpgVK69KR",
  "key12": "2rAhTKCHkzydCpQRiqaJdJijfMg5tewThSpYJtkSqgTzQ5fiaAqNTxeC4rhyxJoyBHS9zSfyb2FrjGuQQ6sffe3k",
  "key13": "2wHZJ5sP5G5g125Z51HNqz9XnQcWxQ2L6cNt3FmxC1z7wcumPDkThspvW4ECmvoTVWAhDvLQeKAgWwT28gMQXRsX",
  "key14": "wQEaqTgqyHKneY8Wrifr5smcguSyAm8Mdjg3Q4PKcLsMF1raRMbZfteEBHDnQss3aWCsKPyL8Q4gG1APahXE9nD",
  "key15": "5eiJdmZbdHLhxbkRvnZLvXHM3akozwmYy5otzN2n1HNW6Xq4LkJhtUPRN5JDwwvWjwbbfXAMGZL1s4z7uZH7B4j3",
  "key16": "3sAUzSpGJunm5XppX4QBT2MFj318NH3oXpvo2riNQUjVVyGYGD9wE3qUdqZSLPcudsRqBoJKuUMQckn8GrXoH27F",
  "key17": "4qmpRq7sanHLXJBBDfcAPn5CZmur118WkLq933wJQfLGjWdPqFvCYBS7Yn7meGdp1xsd6rnZL99XRtTFhcDCqb1E",
  "key18": "4J3ADvsNVKN2AkkNSYF67R3dNMUQQ7K1frUZ6BzEW34BGvDAsFqDCjN5q7VMbJppHSV99hNa4GBZJepsRSTG8YLq",
  "key19": "25hZzU4CiaAxWaWv796F7e2hfPQsiiyweUJkKgk91RbLZSnS1Q2r4RenvouXNUyTBX1ZPS4vQVRDFSShayAZg7rD",
  "key20": "3ahpZAqbdCCTUpHgjgisosbB5M3RpmM1HDvWirZtLLKBTJPeNXwEo2DDUuxF6VRWDhthGHeJeYoVG9H1P1TNKQqg",
  "key21": "61wSTzPx3VKjc6BDpWPNwBiL4hnSZKJ35uT7RaDsxaxrK3WMJZbAJKqsCLpcRywsgrkW5sQ9DfL4G5jLWePszKVo",
  "key22": "5iSE1bJ7Q6rHAK7d1E4P948RPsR6EsazcYXA4xFvtkjjEcb9VJPnH76Qdkc3Zm3Ukw1nY33VNEYQon1gHvasY4ea",
  "key23": "2gDma2Y5ZS5RkUafkNahi6E2BXG4a7fsSWfpJc5ipawwPKWKakwXJgUD6VwjXctHE2CvohESFLd4qfZ6MAK85QBe",
  "key24": "58iwFPgxVyyPFE6w6K2pjZ9XqfwmEh7mTPVd9rNCFjcQ9NSWU5wcBibJgQo26GDfE6m9GTxrp3sTcQZBWaJf9RYT",
  "key25": "3UUcWxKb1XXSSz9BLUfcsSMZNNVwJxS3yEkzaCJqhrQP27cK1BVP5CjMLiB915NhE4JtJrQYZriEPJGqHHhP5zE2",
  "key26": "kpwWb7ZN3YWm97NYc91uDhRZ94rLNvmYDJh9hko6VHXWJw4UfS5v8H2PaT2fwxyzSWxk1BZpqoX3FwDZCTx4BYR",
  "key27": "2uUJNXQFxbS5NF8QXZRoCvfS4yPpXJwXAeYpHWSVVX9rYrsgmUPBmpKM3QeBrWioWG9M3sp7ERugnQrjRYL71HCq",
  "key28": "34THjTKxJ2fc4Lnf15zt9gqkkRZuEhWxtrfKEApy44qkKxWtkcya63UD9bPDp3TqA2ee5szRx9AsAMJ5fZHTB3HZ",
  "key29": "21pRFMBgrjUBjaiyZo5BUUDB6jDS5nMnShf5yKQHYH3jJPuNfu4ByUMg2q3Qt3Z3DifcdYkQ1ukRJvwMKvEuG9MM",
  "key30": "GouDkqvw4H7wG9zmLaBnTA9dCVXQ4ZZnM4z32sxQTvFCZeW5zZiBvMWZyuKtSoa3S8mrmKGsdAU6VSYK64a7GbQ",
  "key31": "3F1zcK9i7L6fsmo2o2HvkRhcxv5jP8iztgDiungW6sdGu78eKBjJ7FCAGEbjCxcA4Lh3nfMbZEniCMSuEJFqan4g",
  "key32": "4aG4dAxXRuAArRC9pYnSmCi2nrdB4mz6SHxzo6vdEgRK1q6yg4DfCNJ37hWAQHzBWq8yKV54exRcSGW9AaQDoYeo",
  "key33": "2skHiwXvkpU9dCKFBDZdUzDP3ePbEKWkTbqYZC2d7aT6zq8s4wvVhZCbMT5Aj7nKCA3rF9iYaBuzv6sMsRfe11uV",
  "key34": "2nw8xSdGmRHWUA6UjcTGucafQvw41A6GnFx9h8gkHmfXxytxcqdQ9sdLpow2e9ry1DWZRcUhpnkBHR5xLvH5LysQ"
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
