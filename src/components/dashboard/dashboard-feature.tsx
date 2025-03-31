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
    "2f9JW2sAn3mvFFUKKDHUJGxyGNT4n5xqjNSxyxDFuziW2iDdmXxnJFy3RxoDRqEqSxt2UhqTVBeMRwYD5HZ2MyjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35fV8bpinm4D2HdQv9fmrcPhTkoukxhs6aWPRTBjxUBdvz1UE3n7kx2vQJWgh5Q7h55CS3sgBFsdaZqGt23x2jjX",
  "key1": "52whrVui6r2ViRfssvQMeVzLT5LtQgRS3Q4q5GzhEMzkzCRWSJnLhtTcge34SZfrWg5XvoPQy1NxsoHic7NG3hCJ",
  "key2": "2ZQciEgptmxJeBkQiiK299m7sZspDgG6Z3XLzgtCrvoXHkJvsv8UHbBNdz4m85LNaFbMq5z77G7WNqSSLHD7SPe5",
  "key3": "5iRBFkpJ3jyr6VCxLuZzRCzZSmS7umKnKHXby6WjpANe7jngwb6Lwu4CnN5jfZM3H3za6ZYwXSpmug49YqDt8JPY",
  "key4": "5ndjURjpMDde8RzJjY52dLPXwDfN2ukF97hFqFwh2J3PSuLWuMF8ZpT2aTvybiFj4hmPmzx7WPdgBxe6RgK9ktnx",
  "key5": "5baLvoacUL5qypBxwefAPWMeAB38vuZ1f2V46KKESaEAzPjPsMHDPCDjT9EkesN9EKEfRiLvhYBygjRw7JYm7Zwx",
  "key6": "32Dr2g6KnaBJT7s6noGg1PsKBcXuPMr3HHfAEQJhcxKPT3bCZVR2zAJxJLD6gAvX1BbJZURn8qn6g9Vgzzoh5xZv",
  "key7": "3BPXwU6cCtSecJrx2oYzRJYgCB5yUthrUGZnqCU7kF7Kfp73p5QaBZfyfFHEoT8RLYFaqccy6b3NSxeaw4gEHymR",
  "key8": "4C3WCFPEEAuB36tceVurFEVYEoDWxWtNGHqx6q2BrYSUwAQCT7RqeK45ZyM3aAELycQuy8YhSMov19xtiBD9tNZf",
  "key9": "3RKrnharpqFT6Pim95ZPU3pghWDWHU66hLSToe5j3wMq1BDDZajtekM7sna4gxx2NtEJUD3isXmjyuDc4TddFQBh",
  "key10": "4RxmqLgPF8np12hAdsbKM7dRPguxBTo7oVp9zgyYprJXh2KjBLAdcgKbvoy9wCoCyJhPJWxQ9b5ntqwXQkcy7DVi",
  "key11": "LvkLQbmZ1r6912E6KD65mXDioXxXRwJmtpyW8BAR81kP1iZXqoaDTs1sHLGhWpNgdsFxWVEzMS4xJjaGDmS2bdy",
  "key12": "4zMaqPvWEgjkj2JUBLVy7KoLAibBZmUhZUJeCTx79jB9oXksGq4yDkrLcSES9sVaADfZubAuHPAmtRwJVE2Z9Q6p",
  "key13": "2duq1SJGw9q9DZvFuScfj5AJo2kezPYZNgAqHY8VmpaZS9NeqTm7j3LzvJq7g28edzE2NfhzGBzbdZ8xcLRi3RV8",
  "key14": "TzD2scYKyMWSsEDsCpfvk5va8N6Kw5CejNiAbr54cXxwYRW7e6MaJbhWcwjJeXus3xaKvQipxoQVHfqDHqG15Zh",
  "key15": "65rmeJWYrzRxXkHMqv8JwA8xUGPiKbbtgSTbPGn5NVTrDymhDJWsToG5rsyvwWAyHKCYSoSBgjxhGPwCSB2MoCMv",
  "key16": "2Wgg7Ds4rEfPLV2AQRNviL7jR2evj2jfsP1gvsKxwstYKb96EvhQ6LAZiCgZwdLoEaK5DUhm5tcfmh6bqhNzG9iq",
  "key17": "2mwA79Me8DdQFhYkjy5kkra13GAfUm8PTuqiErTUmpuDioZxjkpCKndw1LRd1iKAFyuGpSXTJGmDHmvFcsimvKbQ",
  "key18": "3rYsSH9dsHxR3VikNLTBPk8DViqrRb47eW3YCeuJvpCg8j9kTEDgbAJs5cTeZ58jkf6ZAHHDWk7mmEKmXxTbYYZf",
  "key19": "38TvgcHdeVhcwt6CRPzQAGmVBEH1zL3QK1hqDVL3z4nxMEZXMU8Qsa923s5MCPKCu4H1XhMe3Q66Cr4fJdJ8WLV1",
  "key20": "4UT2HwrRd2VWCDGhKhxp7ubYsYLBmAt4fqwadtEWaHC1FjC7LpT7MtfuLg3W6dNTxqU3ywttnjg9zBvPmeGphzRs",
  "key21": "ufxuVpB6gk4HRUa9cbTZHPr7asqxphrz7bEt7Tp4pjW8yiSXybRo2iciUNj1jLkdqA66TKptfFU9nZ89eYpXoCJ",
  "key22": "2NSPeLCZhfHtGH4eUd1pKhWjFL2fL1F69qoVQ1JLGVRAowU3A99DGC2jAPnHA3NAri6EMYDQsAaXQhJV9N96SpXY",
  "key23": "5pa89NuWDu1tBsDCSM7HcYmFhWTgvtts2zEtHB5Tiptvi65oVXjMU4SZZe9ajzSHKqBFqZXJquX6z88JDnYVahbk",
  "key24": "3WXVhZhtLDdhwcuzvxazh26zWRKRX64TKmjqJBLvscmbfyFyJQ29Js4QdAYCdySB7j5NTpeQVPkps7KyKG9vHrSB",
  "key25": "2adX9dpin8GDZBACo7cEUYVRBsDumcYyfQYz7dFXjLtUe1TEVN1XEqSJ7S6BMFVXn41UYv2YLPSbvXrAHwitYNhT",
  "key26": "jbgU4NH9wDtV5TQknMZryfBpoNreHRmcqe2UnpCDkgjzCJznvB5J2ENsMNCYiwzPZtbanmdiR95duwV9hBKeE81",
  "key27": "5g4HuW8QnqJ9G2nrCcaB6Pfam8mPCCMJ2oRn1UH8AQLUY1TYvNFjDt6qs6A5g2sfJtLfSgj5nE6K9JycAW3rK8UY",
  "key28": "EExpXAQUp3pvZerERUNNdXG9SmR6m9NaU16mghaPtP4KL4iTaXpdgAr1TuQ6DFSKkQaeKw2ej4QrXGNB1QWmEJh",
  "key29": "FdwNTaNfM7Gb5L3fm3TWHen7nAkLYfCJPKkpEtJFME7ePcXDwjQBEKbQSAGVZgrgk6WNLx8bL1m45kD6ELxMCHC",
  "key30": "2KyAiGcMUDToHGrukKQDjxjzRsKRWRjNNYsKeV2hYGWTdbAS5mkKo92PbHCtziEiZE33Dq9HrTDYftdeUFvMqpzP",
  "key31": "4f2w2moHMkHzLb4k31Tj8e17j1VwmCUjuQYxt6DeFGR7GBhzr3CMhmzqPisXL7VqryyUFkDKYWE7VKnREwSGsuAE",
  "key32": "3WmJNNGSqtJ4d2HLY3kEQJiv5k8PnyAwGvWho2yf9NJ5WaW9C7Hs1p6tLVLTNGM58bTLFGpoCVKnB8pY4RafyTU3",
  "key33": "2TRUDDJFQZxvJYR1JMqUpG7DMNcsK4Pr9wcZkEebiW2ECMvz2crj45yXhM3rdv6wnb284RWkkzVbxRP6j1eCgbmC",
  "key34": "4cxh7UHryL3AiV4WGkNKGXLMNhwETB7LAcHeoLTHKPVMhk8Fx4swVsv5PCjwC5uRR23mz7yDaQB1nHi4tB8rtom8",
  "key35": "2WxyDuYdBxv9rdGJgDqR4GkJbYLk8TJZqdPRGEoaaAkpidRJnnH3htm6cjeU2jsQThvd1AyNUgET2Amg2UqVoYxu",
  "key36": "2ChxcAzKohGG58Tm4AWVpmromSgX13esDFw8QGKBmUQH2cSKaoNzprFkgwqK5LgWrRN5HrdaVPZwqXNAW28Pq6uu"
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
