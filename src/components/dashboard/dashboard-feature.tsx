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
    "4xtjPhMT61wVzTLnDj24s855fuNDiQGcH3JnVE2KomMxjUFYmMp6eKsfVCaMSrCz7LZj4LyJZNCWUMD87d4PFLuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i4P8FhmDSsp8ty9cKH4wvjYs54QZzzhB9S6oUnLvwoA3faAm7RDzaEMrmFgSgQkccdxr4tqzRgnFt5jV5B4RYAm",
  "key1": "2Wq7J6EVrw6Hr3cQCrFXr5VFvda7a4Tq9qXfszJtPTGRF8sJ3cU7S8SJoBkSM1h2aJDePPnmzvYhKT95eLiCtuRK",
  "key2": "3hPWVENzsirQrN9dBeNATuYxHRp3EXn1HfhrUiBLdBVqVPJkH5TW14JVaDh568Ar8s4bqkcpnDPChT3cY7ADxK5B",
  "key3": "4QBwXuU97o38PDBPA2m78JMzzj9jBernYnLUYUCWN4WcrjZRhgW3qcH1y6Lt7VhoWJDrzqQHZF4ypwi7e1UhMtYR",
  "key4": "WcZ3NZ2JXV69jUVm3eyhQyKkDLt5sKAnfHgiNuqx9CM28BRtDHYCAdi4JyL1VV4svnN3kCDhpgPTNDJMbz1XErg",
  "key5": "2268H2cCQgvKMSTx8JtR3q59Rh6hWoswj7bLC45Rm1Ai17WQxkGf6R6chbMJDkxeFjmzHkZtimBpYAzR3jQoTSVK",
  "key6": "zuJeF6kMoAkg9N1EDyPumTUzuGgZWEmQgwrdSXsTMfKe9cjrMDdYVVJx3f5qwivNVXoFzRdHqU9xm4g1BhDNBLi",
  "key7": "2E7WYgb5T8FcRnngfRSbwvowyw3FsBGfPEhDLG3QDUbQiE2bBt7FU81KaqviZVKDZBtkkoAFohNjSiHgdiTksb51",
  "key8": "2RwawqPFZ1hVZN3nBnJuHEfPqjk7sJ3bM6tm3tm3FQ3JmpWwEK9EYLz61HEY9uZx61ZszEuzKcWWd9wyAsJdSdyy",
  "key9": "xW5qAR7teWQaqpqDU5G2zmXJfmULGvH8vS2hUa28MBEoZfK13gG9Z6KTq8Nji8D3P9B7ztrEbWyuwmWWJT6jJHu",
  "key10": "46AR7yMJo9gzSr3CC87JcoJNaExQxpS4RJZyTCUXEUzRMZidP4VyBmZY56QXah4qcCLyf2beJFwSKwSGGGJQrXcP",
  "key11": "3QYkChu3fbotxqV7cfHVUyhvxQ2mpD917vhbgfwPiuqnfXf7FM4mfbTimRAHyRhGZorZJRUgDAaRUfHBqUKAAp8N",
  "key12": "3kZsJriqzwsgUhp2kt5Sr4SGG6BWxT3dEEuYmpkJmiAqPRJP4rCa3a47xcsBzBWVPRW5r2sdcJmcb7uoyBk3U9Pr",
  "key13": "59sMouj8onSo7iQ7NGDG1jVPV5wF3K8AzWEFfen4TXteZ3omxTc2fhUQR3RqeoGgdcwZk2hGh42GgG4jHNQuSvts",
  "key14": "4rAX6R74Cfze2ciBAU2hhmw6XJD5ewrduRLCFqoVHn7emFmhqQ1J4ugXHpTFmywQb4pUZYsfRMvDTM4GCCzGGbXD",
  "key15": "4nphUJDZpB2fhfmmUhAxEFboJM5HJ6Z73ADWkTHQ6Tv1MiLHbBYhpTVsbjBLkAKHDEwPV36sbLGN3betXZyZKnXE",
  "key16": "2obh5ziP8sCNaYepHNCkkbxV9dME3GcfFZtEjPqaVfttVXp2zvmhpPtafjpGF25gGPaZ2Jzp8w6SRzJKmTNk7nC4",
  "key17": "28dH5xUaU4zcANvAjbZjRYyyZdHBeWqA9sMgYB2kQqEFsXy8Px9KJbfBQGgPecZU7ZeHeoU6LsAG6TC4A7TKAUxf",
  "key18": "3R1qKZ7Q1cr2HEB567VeAYdgRdHedDEsrgDRVmaUKz78Cb2tHoCWGKPrpzJqRjZAKQZ3refh9cDM8spqqZuVeyQ1",
  "key19": "5qajX1n7pGArpY9K8PdKdXr2sCfgDAA1UCUpuFGKjvriowfc6KR37fLXUJKcwNyNaRe8ZWyL3kLkDb4FD6GFtjyc",
  "key20": "4geGxdYuvatj3wXHHY6tPBocuiB7pqqcn553B2oQk7kydrofsDLYKqnxNX9gpXvAFf4ecpcjGqKHhkj2AH7SKuFV",
  "key21": "5CuLAnnZq2WrjQJAZtWZL7rKUwKAq1Mam4hWLoqV4rwAdbLtYCaZeGMVENg69QVJTLaBbpyzVhgM98CzkFMWZQ8F",
  "key22": "57B4wTrvxfGYTDCT8S3jXCmNVZoHNvu73GHaFRD7ge156M4WuWEH6ytgWhkvPXHGTFvNRkTwerk98M26MNK8DA7p",
  "key23": "2g4Xp9TB8AkmB2BocbUK375aJp6pxkrkLBzmTtTNtUnhC25tYhPF1MLoTxDd8gvK6dsFWxPcAoGa8duqtQND2hg8",
  "key24": "2iCbZ11Pw3CH7qHwkE18ck3FnRQpUmT4hck1d4kyQEX8bdchgp1wxz9Hh71AwT9RNiKHkAHpNCbTNFTL6rgWuHFk",
  "key25": "4GNxFnhnEtpzuZUQYvwArfyBD9xStfN3EPL7stU8R9ucVrWvomYh12ncUYX4Stq7HpHLcHmRev93BzC2yJyoW2Wk",
  "key26": "4kzPABYTUu19wj7hNJtRKwZHnBK8qggDzcP7zZQpabHx1KZAq2MU6XcQ1PerT1ELRQGBdDAzWi5UsCiDhZxWyRBS",
  "key27": "3tYGA3V8B71bno2F5KJTKsqgzz2Y4PWWw5vwHuCSbZQe4b65jyd2HMt6cBMckoYfdiJPmfYvZkxY8vtvPhw9AqTa",
  "key28": "67FTj6iQf8nHj5QDVDqJw8jtprv1s84hdGoxWHQ9Ra4YkVRAAY5Nyevu6omazdhWL7V6aC2xZp8j8B9Mhqi82Ynr",
  "key29": "NXdepy3pMZu1BWQW5o6ZUDR9R9TWJyLAqQtz5fftGyKbo7ath3CVFFzfBCcZymMyght3TgEgQkJyYqoFdnybxjE",
  "key30": "5wGcp5o3Fc5y3g71S67kcycx7Qwv4GDKrLFNix99RCGHms3wnxt6JQqBg58ToscUUNnMyoQYGMiD9eQNjsbjvYwq",
  "key31": "5koQ6U74w4yLfRRxsgJtf1CJfxGsNPr3BaYJqaLAuqjuCZXzfTVZKw7kb4PuwaWLWQwxiSQauZ8r5XQGrSkBrPCf"
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
