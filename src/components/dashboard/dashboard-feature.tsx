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
    "2DZqnHNmAsBNFZLdbu9Qd3QzrqhcBN1jM5tUdwWmktvKYoYEiFWbdjckbx3P6BMUY167hG7Am54SWYL1W37Nh2YN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Sgin5VqLKw2AgvPrDXMzmL8deHTuuf8FAo5PSJZW4VCfvrPYpQDhqvc6JHwA24jDvuUhRSQ91zduE1fLnN4PkS",
  "key1": "2gGUb6pX1683Rm7q7RXQQ3Rs51min53CsRPC2KWuMLqo1aMJ1RXG6SSvgFHwcRs65fB8zNuWSQW9WZNges9HT5U9",
  "key2": "4pEUH6NwUGZUUDfPersqwRJPSRiyqx1BNj6hb7AJtVRwRWpDDmX3evmW6KU2CUSoDDjyk1bF7oYjMUZboa6SJm9X",
  "key3": "5LQ8CpBJfkF3a8NxhNyQsn2541AXNeozMQohNocF6ixEWwpuvkjKMCLAWwGE3yTyTxxrcKZExL1FvHAvqGLesTCN",
  "key4": "xxW5mb6b6gYLjxs9U9ntaGD8BwL8nT9xG97Ro1csVZaRpvx6srjZfSrX4EFs9348HA41qp4ZByNaytCga12yXt1",
  "key5": "4maQCMZpwSrLzZNfbSxb8mkhTLpkN3ktv5EThFP1qZqcx3h2wGCdCTzpJzEW3Gj12s3pCJvJhWQKQeai1HjSyagV",
  "key6": "2pDT8kM1knCKRzAKWryRxkfGr4NfVwonotSnueQnAECDBgCM3StkFf7AXDAqnppxVb41pDGdDcw3TZZyFQCE2KqZ",
  "key7": "3ezf1sGoLANPpQgcSZHtpbGKyLJ8puJzG8z3Rv9wDFh1JRDF2PYNPtXZknBH13aoEBGPaqpFAGD2qzqfLGL2ViLN",
  "key8": "3TJGCgB6nqDCwEw7hu1V52iM6VVhhfzsxsg8BrVqPRFgHn1c9WBNT2Mx9jedR1Y1kPnnyxrbaZXVAkX2kvJpPNr3",
  "key9": "3igjuxPZoMracYQ1PsvGz7He29haEavDzhyx4dMDrGLEXqsZQngivD3bH2THPLmnYkGG2CQGXZrgRnV6y5Vj7mkr",
  "key10": "yZEaacfVrs7tzazKX9BHhgenZD5QYMeWVsZvVwN2VqY5Pg876Xoc1WBRFapY6LgFjS9i4Tbmt7WEwyeFAGNCHRp",
  "key11": "nDiWom2fbeY2U3ouLjxVbV2FFcmhn22WWUqG7kLaSvxeBCGyX4oZVdvtPAPqrAjz16RRHGiWCLmjoC86J6NU5NY",
  "key12": "29cNz4Fib25bg5deFwWLuV2gQrV4nfeBiZUyKSMYRe9dRmZ7SwErnhHdT1j2nvatyTC6p4JQjxGsuGQGKUeKwypX",
  "key13": "9RdbBYvZMWcoeyGGQERa1DK9Scx38eyyjmbTptAHNQXLc2y89KD2mwadeReBa7dNNKMYYEQvbsVKdSJSL5dJZ33",
  "key14": "2aH3yiu2DNZnzvQZxdjUf9TSfXvn73gpuax9ywv7be5wGYon1id888LfSrZDiAjMNvsqHVnSogHdPeWuJqgLFVRX",
  "key15": "yQb1HDeK3owHXPJrjDNohUrmHHyQwZwEDYgJdodyk5AYgiDrDNX8fyaGAW7nrUt26qFMrYXMKUq2XMaYR4ureS3",
  "key16": "3Q94dzvpV5ursLDVKL4QSMpZeb2jZEghRYApWV2mfz2KQKo4tJu4pyeosB9SH1JRHAD7hq3cTm1z18EQMHqmEmev",
  "key17": "4gphFsVqFq4ZWDc43UG3sEg3Yr5TPXbBVqT61jWhSdkLghiV7QVQwwoZVHG6hwre2VJiTAf7nX8MDS6C4stYNn3K",
  "key18": "5Cachnaaz93WWgfNyas16PxAVq5XtqrAknDn2FaoYnbZBU3aJh9PdBRdfvmggmLJtZpjTJhcbkfMwtY8DTFkRyw8",
  "key19": "3VExW3ZW54aiCtszM3bwxYmGzDSS4QofLgEEaQCxRJ7vhhULz7DaG4yAuGzLeUSFgPUhwRHZPsAZT354X5ZBjVxE",
  "key20": "5bzmG7R5kQS1rJrDdcoazMX7uMCqZiuGDTBTRzcjnmRVc4PBJr6vyXzzcBhrv9sUMGZKqAKTVqy1ihnJKQbd49kZ",
  "key21": "3uYxm8yQk9jw1tKLeLjD5yQS4Yh8SREZXV1RV27FPYKUcw6Sa2YruwXEqAGoCwUQdZoUCVgSUppt6LzJzYyKxPHv",
  "key22": "581g5W4QBXo4VLvbGtM2ZwSux9PBf6JS2TZ41RX63fi7dMQiQApsYpgdF6oNNMw2BaMSUxxkGnRybezibqadggyF",
  "key23": "FJ9ALP4WNDiMbC4MNeNE8YoRVDBJb1KWzvP3yu91Zese6RtR2cdMkRZPGyeyT6AbbyNtYwH4pzZjFJAMvRbjJFs",
  "key24": "4BCuXuuSw2ewA2ne2JgfGa5Bz1uonG9xY4H6e7mF2nbEW1aS6UsZw6qVqamBpfZ5UKTGe8eXUFv5LakcRaLoNthX",
  "key25": "5oejsagacgQwzCtVdRFrZqEhWfUsP1eBQs1KnCcPXjcJTvWVkyHKyJjvu6DUcoZbfnrsYQWwYfG8kTx99hnfx8Mz",
  "key26": "BrWkHoZFT8pgWfVRvc2FtXDFjTwYofUY5Q51a5UJX6ai6YhLpBs4YqW6MKZhADWs9EgNzUyQbQH4UCw2U7U1VPe",
  "key27": "svbzfpytwr3MEQAYjfj7cyYmsRL2BMZRaPEqDn5EaRyNLQdCuqNjT1xkKEeMjJ3Hy5Av27Xwpww5AeXYyVTWA5Y",
  "key28": "3SpG49H3smTx8VtTSiRGKTEu8D2PrmhZpUnVZbzwQQSxgq9VitULXnbyzkpuHQgULQPUD2vFMF9PDmCkNeVQN9vF",
  "key29": "46wEXSNgGsRGvNjYPxpbWvzbZmHQwTFmMtcaV72sPtWqFXWRB8i5Lyns83wU1z89pZ9yvReXrv49yokmAdXxeon3",
  "key30": "3ETWDq74CHGDjCzuX6zjRe8wEpqNmE6a3ZzVuLJcRMVhKjmsrJEn5mrZeNUsvLAc8tyghzgzpWtSf8jkRgKLgTS3",
  "key31": "QBJKY9xzARs854Xj5gQeN54yenrJXYzToJEoNvQ42GWkFYhT6UAcd7vuGA8AxBAJXAr7FzVqkjN1KCfzMG5HJvv",
  "key32": "4bQaJoWLVXT7Xvy8umoHbLAhZgwTD5a3GbTYX43KYocYVPEaFUGSGqg1j9z2vipFkjKKCTuLeqsqVMDp8oheJjHd"
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
