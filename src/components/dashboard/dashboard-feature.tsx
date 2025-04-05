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
    "4WYX5LWXYPWUiqm1nMWS9uCr6CutnEKK5BcfnMKipo6VwiqVhpPfiax2y9MYFTinAd5cJYQ9ySmp8f9GJrHM4GF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25qVX75QsWk1JV8u5UDpHVMSMjEaMfPqx6oAJRAryhmuJ2xsjLzvWsFjH1mUtE3YoDUhHdNjZw8VzbyFdHyRps1E",
  "key1": "3NYtwGG8uLLk8igaKZ1mRsra3C45NwYbrr6WSK7ncvGP7RHYHmJ5XvLbzvkGuuNCb2JErr7FnQt3Pu8cCNBbhY4k",
  "key2": "3NmrEsviACbXuXoVZ1Hnb8eJfk8tKUkMRLR6XHwvrUKaUdryE7JYBgtBbogvMGboKwKVcmdPesLWBWgvTURUG7L9",
  "key3": "5AgKkTrYoP9QLdVDMcerAyx8nibUTyUjcCJ7wDhx6162GrUkxUd3LZGiU5XD7mgotWoZui8tsLbdHs6xZG3HFFo1",
  "key4": "2ueAe9ycf8cCxDMfPFDL7LmdGUxiBv6STBXEbkc64xUEot2FTJ9AMJY9uDmkVsMXqiwJVxjaT1ka9AYcZvSy4oQe",
  "key5": "2bdk7oBHfACDK6KWWC3jhBb3E9ptcQNjuVSfetBwLBqeetKDwK2zJYzo38qaeatdqwJEdQW2xBonXtFYAYasvCYq",
  "key6": "34TNiy1TkaCeaW9hewPJdpYeeJgw3yFp6UJpbfGtQcN2RX8WotGEoFqpEmEumQd7mWpJBZr8gZRjEmE34Yij3CGg",
  "key7": "3yw8rrWFS6SicsP8bU9qyuAj3qLc5VwoVtTNFZn9s6ZCsXoQ5DZaXx3f8Aa5pqeHF2mRawWGZhWPzwpkGxWTsULy",
  "key8": "436eeSNBaRvRisaNa5vPqjM3jdhPzWJVgtssUAxucvu9eVvuPYs92CDLqfbLT28NtyEKT8nde79LZnefDDe2mzEz",
  "key9": "22S76soEfq92bNQGtmDKhYtJ3k5uCrj1ky61vvnZ7K24KnF1AZBKqonusDGCeVx2sHoWdrLxo7Kqu1pissM5StFr",
  "key10": "4vXdUuwHf2VLTz8qWPmRAib1NuJQcFAsvu26sxa38dRbQpmgTes6Lna1untHEMFaMiuo4EoZG4adwP8pgJvnYozy",
  "key11": "43qBmC6XURKcE9CHQJBhd3mZg6XBdiM8fRvztbXwWz9qvt92iWdbdPePEaeyzv2hcCZFauZGHi4aPY6xzGixXfLx",
  "key12": "gLSsApWThxRgfmwtBEGYkmYFSJQUoMw6hzuZhZ4jUWaFqQefPzW7pXGDKgB9fChw9KD8U87ebrLevNopTVEHjkU",
  "key13": "4apvF8V542caB4uicFLRQvX9T5kcbgUt4HCrDL6jQb9t1eQEk8ArbQmC83Qn19isqowx2a5pFywAggCScrw7rYvS",
  "key14": "4znjH8gSRmddSXvCVWh2sZdMPqv2WxwRXH9pN5f2anrhhmEaWyYjDU9JFYWWKyY3ASbXqQJd73FgcEgRkuXF1aTs",
  "key15": "2wgc7CBRTyoCVLBUYQBtY5yLDuBdN5HTiUjrLh4dtFAmCM2SvkKoxw3JC2xo54chNThrUeBDeEQ4eYGmPaE9jybY",
  "key16": "2n2eAYem4G7i7UUncU6RUdtbSFfq9TU1hN3VFfsEhVi4q1mJMcC9QwdV536q8Te65m8C1HRHjfew4AwaizJiNS6Y",
  "key17": "59YQkqArE3dotnCM634itMsNSMWiix9g7J9NWfb3C1h24sH5E5FDAcKgqbPYpHYTRR8rHSjQLjY7mM7riQ63N1QS",
  "key18": "5QKa8uVZs77PVeH6V3ePhMiLwxMEaC5Hs4ycjJsHztn8MPRU5p4H5iSWMmMU1Qij7fYLjmhJsa8SrRMA2p31rSs2",
  "key19": "Gq1nnMsK5LnAXDCTvr4r9De8X5n7gzvDBmPmYARPpoYHnUyJY8o4x5jK3R8ktBMU9qM2Ucv5G3e29zr8yqzG8Qt",
  "key20": "3MTsZGXZQqQBjH9qPUG6aoqf3mXm9g6yFwrn3W1Cs29CNCAFPTCtUo2W5AfTNdQ9dRavueHZCHpmRbYLZXmDpNxw",
  "key21": "37ZHmim83JAYVwza8tFEGxTudn54kAPCDLnXUu3yPyG5b8nFkNPt7HCZt1NLjW32LXrbY6swmWjHdf1gCF4gtDFM",
  "key22": "4bHuEVbRief65Nk4w9xVm3bRQWhLbm7Ng3yhJpJZw4QrwYaUq6YJeuGzU64C4gQimRSanS3RKGKZRhL5QPHk7orN",
  "key23": "2QPybXXWm8BNjo6jUyRuzFofgzz1UTUHiB6a8JTZK66DhLLDAqPBKtRz5VkJ8umAMGiB84cdtn4UVz9P4RsGYhYV",
  "key24": "4t4L4dMpG4FHDUUwqzJ5MQ5Bsw2fub7XoPbxdd14vcDE97JAN77CGJtMYT6HvY3EHS6umxazQ7bkh2S1KRup6c2P",
  "key25": "5yV2x7RsJ2ukoW9dFm1XveJ6zTsTt7741QvDkQu3xijTyqv6LUHSWejqm56Nu8coLNZqZgDzUev1WdNHqaxPUz5J",
  "key26": "5B37rhWGCFC5zpVSPaZf14T3P3F4HGxUmLxVwGupeGxa3UCo2vRZ5UsXThFkKNy34rwQQ28gJCARZznJhBvg8CHB",
  "key27": "2UkVWwuHJoQwoHwEZuRnN9tVuptvcLvxSTnwyni9DH8vkkVY7ZUgoEQJNaGZNi6cfqNaaXfZCjkKRw1n1PGvVibW"
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
