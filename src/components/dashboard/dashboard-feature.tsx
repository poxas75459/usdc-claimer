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
    "4dz9hLokUXPg21wpcUc3Q7TN9X6w4MMToBYJtGZhL7AeDidXEX9MaCypaxduXnDBDQzzEYMYWvNpfH6dptdSXXCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LT6eQAKoUwCKCm5FDMSRSpTRvdpFJJKaKu3VG7X4TjS3vBQ56UhphJ8HNdY9qMjYzTacMQDiXvHBnMPAw9Nk9Vu",
  "key1": "2w6ryf6PYfQiMjGZPRSUuMG99oPDfryoWMXmuEtW5w7JfgqxJFTAyeUakA2SRxJRgGNn6dhtCFp3gd74VkiJ6twY",
  "key2": "2dD12at2XroLYdoj9dV5gP7KUvJGd1TE811JVXpaDEaxbX7e5onU7f7x2w2ydp5MahVhYWNef9SGn8oN1dF7wXJx",
  "key3": "2wtnQJBqQczrdtgBQqNzZEGvw1ELAZoKA8xjndyunQ2vH42NRPMXSnGxcjgcxx5JUxgn2g9XCE9aZRsHHoQzjotY",
  "key4": "wYBYjqpUu9YbZyZU18xTPKjjDhM82Ln4i26X7FnfGb1rZFN7YDGDHDfUAJQxFsQFNFrHAFtTXrMDB2Nkp4FUhfM",
  "key5": "64CYKuzecVcjKrB6yeaQ6zr8YHhLPqkaiaoGPL14wAvFhVDDxoGkWdDxV9cZcqbXYg1zz1iKGPG4AM7DnN7qU4iY",
  "key6": "2UEf5dDhxfeBw3P1bvUCyqxDV2DatvWHkHg68t4T1ku92ZLnnLnWE76eoyT6ivhVNVhWqWrsHFKybUTmuu6kawwq",
  "key7": "5staBcLV7Pvr9j1VGcizquZtg75kZijpWMk2GkCMLiXv3sLxS8VAtivsFPN58wc1UPuZYjKCKZJHSfhn6Kv98yKk",
  "key8": "raGAkqYyh1mq9jUxmmbtPnXp9BqJMEBRB6DD9CCggCjmRFSxcc8c3U7mikgH5Qctv76N4tF8zXnEPhiW6UyZwqb",
  "key9": "WL7VYHXLyLLHTim8hmwYJoUd84epF3bPDp5xc7XriNcE8BY5reU12G7YACtGCyFbxgCeSGFvuF3MvbAjoP2FB44",
  "key10": "2a6pNkfUtgTdpKhRUuQSNGPdcDoohA7Zjy918TTgzzrA3XzTc1iEGNB3ag7SM8mz31EWKfdtE7zM7eWpmrVdFRS6",
  "key11": "62QTgynMt2juSSacGo6S87jPrtQM5qFmG9ksrUkpH4beXcVAU6z3fkwveoqaEkh8skwbKn9puCaPjBWwT1eJwdLz",
  "key12": "5EY6tnW3pyvjRQzH8VCBiD9GqsjzUuVW6SatDfJigQQjccdp66q2ktM7wpw4badbo1iVUn3KvehPUwDHnktncG3q",
  "key13": "JJrWSzZwRzv1GDuKyL4J5wNq8Z6GBakfM1jhyHmYjDUU81xbDonVsQWFPLDcsBuB6N68o1w1Y9VvAkC7Gyo9r1V",
  "key14": "5xEXQwvKFGFNjYoiXHJqYkDS379U3w4uRkHCAwwKe9e1KW21n7v7AdzbWsh1bAAY53DobUZMNpr7tTVLivre6TM3",
  "key15": "4WeBgfpZhYpREmauyBNwF45YWCsYnVnJx6BS3t8mAhHDi7FpemexrU7zq1LdUGQMsLtw9H3sSgJucw1NQhFp3Nwe",
  "key16": "4yFmKBu3cofNnv4jfLCSDjxcJyg1T4ueFncwdQqLL4gapZ1nUEHRrMjkvaFDE5eHKTDQsRvHnwd41zh7GkTdjAZV",
  "key17": "igVZ5XtYs1MFkhuDEoUZPxgnoPYYjThrBfaEsHePHGzU9SrM4mfHDREdG4nJT8YhzzDbzNqgFs42XBMuYVmeSSx",
  "key18": "5Lu3UBSZDYevobVrSnAgXQ1RJLpcYDMCs7vCSvbVz6FBfY4WcegrtP4BrtDf1E8R9M4Z8JX1zkxnWG1VHmz9jJs2",
  "key19": "3w5tBcEAZg7BwonCKPojwd3tfgRW4g1JtAy5UhBY9G8x5iGZbExxCEQu9py9JZxKoHrxoSundqTe4XDYEWPYRLtc",
  "key20": "4tnpXW6DiNBaTVnT72gmz4v6x6P7P2293zDCvsr1foLyGZhKvPfbrmFkERZLmqueNTmSAB8dAZeHn4HdEAqceMiN",
  "key21": "2Lcv3Me3vmgWLANaACPH8Av2v7o7msoqpHvVrPpGNqx7Ek3TMuQCYy6KqzC6jS4MVTSkQV3mZGRdwnu4czF5QskA",
  "key22": "59VuLxBmajzEFAUKkXMyASPobSCgiHWiq5YGYc4Nb96SG6xY8bXP9SypNUgTZDFEjBeKHWU7CpDyhHtYzqWx4zvT",
  "key23": "3z1yzv6qJbegPFhdNseGruKzJqqtB3qBKUNVGFVxdjFxD1AAkGkR8rpM6Ke1BeBsyvDzfA4sGF8shyZqEeZ2jgmy",
  "key24": "5fHCnsD6nzWWak54uuy1CvQB9ri19WKK79dY2tscrxSdnqGaNjZ6NFz29kURRqRkCEeMaKcs7KUgRcTgob8zLxWm",
  "key25": "3WPLDyVo7gnZWzKLgfFDK5hud3hZbxHag1SEax3tYjELxpdbVJ79Tc3euxtkyYNzxGZ5WtTmAMYMU34ZAtuBNReq",
  "key26": "3sNEFRFeyTxKtTjAkXU4YbohRMCFNhBnFwmjCgxRcWaxoF6gYEYR1AKaLVfFQf7XR4e2u1ngq6x8fTz11knAJmcy"
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
