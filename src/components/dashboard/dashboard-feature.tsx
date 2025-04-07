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
    "5TJvvSdmic6zK7mj36zer7AFwBvSaVxsLcWHZGvbnWg1FCZNsKKUdqKwCBiaMGMRpPk4FWvvkHHSuPyP3FoNQnGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cT1UEL1XoxnsH1p56CDRiTiX5oBX1uhzMY3NrVQSQd5QkCvk62qf8wQaiK3Vwg7JzcRv7S7oKkDc5dhjaB25UvP",
  "key1": "53cGYYhxMcrKxgqHhuGqhmBQ2tVLLDQCeTDGL9hYHq11svmyt2wqA6Ahsh1xCecff2usW27Xo49tqqu33fF3VjEm",
  "key2": "5TUFRQiE5AZUnYFTsphXCiXbvFyw1TYXUeQ15dD2Ljqoxu1sFe38bLr8AFn8q5sVWauSMQvcGth5kL9a2bBLk1L4",
  "key3": "TLR9cNSs4X7xeQJtyGGvhVt6JhKmToMXTwp1S9XnW3xR8FNrFTaRRssp14VQDfq9zDTyTQaZ995VVZTafZ2o3FH",
  "key4": "y7WSfAAogb9GEvzddqUtnrKC3XXED2NWWeTZRxshdBvEJ2Q2WUPnSZrJeDXcm4w2TaEnRpu4dvsQRFRLayy35Ta",
  "key5": "3jzS7fdWiDeNTYYSPieX9JX45RupfqsRLjd7NiAzB5XDtaZzEcmV4zTtFijef9ePbw141DxjpPTJD87jHHfm29jm",
  "key6": "4AGQ6fdaShXfALjYqsmD8NFZ6uFHsU1g8ME9Y8eqiUL7ES27gizxxpwre6V7kPwJ4Y1L4MTaTpqELQyQjD4F3RNQ",
  "key7": "4sF5fgNENkZnCAqggASYxizpGBKcbXQ3RUdcHbXyKgVkPoCwek5URZeuDxMnHZPZr9cVyzpp3V9xVpmJPhB4afBM",
  "key8": "WVLPXojBusAhthuWB4q8JU7aY1Y51hZsSAKGKCNWjKMJT2VjA6k85oHz3RXR4jrUQrJ2put584CsGuvFgaNs1mK",
  "key9": "4qiZtM9GQdrFSzy95uhe388pcGsWwmW6kXqWExkYYvhMpPzkqZM5wWqixkSANUdGSHwx1fFmaQvG25opDwqwTTEm",
  "key10": "3obnSG8Bb7enKUajfe119K9i4pfNdptXw88KLGjkxjr9hLU3GG5vL9jWcgPgHGnwVacEyGDCH1GMT7xA7FgVZHPs",
  "key11": "45BwvjT4w8sfaNRq5kBHoGxAjqNJDSR9NGhqfppMpSG4zb5Y8TW5dLnc7yLDZ9Xh6m9jV9M2RZ2wR9SKijaRhjeD",
  "key12": "2tLhmNYbJKn7nFFmTpVVdj2Z2jgRvk9fN8cfyEPPQBBZRgv1FPBGBB75xLk5yntiX78fNYAhbjkANrSZoXUhXv8B",
  "key13": "3SFsxaTB9zSPs6Y8pNFdpEWShP36E9ZdYC4e45o1EtiYBwBw88pA7Xte9cK3hoMdFKhz1euz33X2mLPGYopbkQba",
  "key14": "4gdZLBT4WPbyUWyG6jnvcHdMJrknMDMj1YqkYggjMXsJpyZBKK872tkFhoQkXHapt3tRoizxaDgKrS3FF3qZfpwe",
  "key15": "44jiyqJE2dnu981iuLU1R6M2cfFtya9f8berzo33Uw56CZcFArxLt6uyoLnDyP9YBF8hb5ZJ2cvbwdhTpinHuXFQ",
  "key16": "4VSYHk5WgJPfXqgZm6WYLeUM7GAwypukwTiSNmFRbvG68ofTrnCBqpeZXpzWFGtumUkwW8ge9r3f2Cr92Pdi9BT4",
  "key17": "5RehPoJib6yb5EVy8pycatSiHyxDYRLSNjCayNJYvu8p4GYrUWVqzpyNwf5bm7CPTWp2RJ4tTHo4Bh5M9C1FHNRX",
  "key18": "49GpCanNECrjXcksQEBeejJqM8YgtkHWseLGVzMeRGBUnFfCNQ4gcN447Trph2oQvXt7ynNXFBQTsDuYPcdCCxES",
  "key19": "nojR6oJEQZiCLyRr3sAyeN1fXpazmEudUvvmhZEZCkrGQp29sSHrVXJU8X46EsHHhmSrmP4DSbamA9HZC9k1e7j",
  "key20": "kB7aHwNrQHszrFcuHEXtHiBnDj2UvncqS8N9zT1WTX1vzAwV5vjw6iDswSePr8czxSap46DXGXackihskFMhU2d",
  "key21": "3oCL8fX6HK6mz7KucLj66aP5ksmEHDsGXWx87z6hFKNbqdqoCA9fpbFit3HrzFdNHWXYinZbyNVsQ37Js9u7LpAi",
  "key22": "EgvTw55yLoxw3BUM3CRVSqvnUFhKtN73RS61YafTzTdusb6WHzi79y7db42NqR9GPvZrJVQFD5upViw4DyetEyQ",
  "key23": "3qGCpcpjviZpiBVgkGT3PY7ZAq5tHPe93iZgPpCjgjsBveZ8EgMybMGfga5prQGXJ6pe2fEqCytd3QtUXHRShFeF",
  "key24": "4A8gZYH2w3upJsCJ5qgDBSqpeJtq1dfwu7sQFFEW2bG2UyVnw2rrDpTpeuum4BWrj1urjTN1SFDtLs7EFdsWQNMV",
  "key25": "4uTSCXh4AncCGDZbckF3y5GR14vf6vURyurqJKU9w6zzSHiPYAnfULBsTppdLkFmDYzPX7c7jQM7VFP6cVNsN4qw",
  "key26": "4sp4bNrH8PCPz4GL6hwEUXKS2QupVCdpM9f4fZ4xF6y73x4b8qsK2FiX1DDeFcQ16PEbNxDNu7AzZkFbuepEFdKk",
  "key27": "4aJXagPU19Zrx3Fdnqa5L7BzyWFtfySHgTi4vXQeYQiYAsMEt6QdJAUAhgaR1i2EyvsJnhAycvw5SDi7R7mDiZMK",
  "key28": "4Q7s43k6ptJrwMeTDcHNCp8mdxr75wMH5EAtHBiJGgdfrSjEztvMPcd75fq8zLvTnzKcf9xpsyJNUH9L4ZFhdfnh",
  "key29": "3hwX2M4sXjxjcvx1UvMkW5eXdci2gAHkoedkLj1M5GCRoz23YYTv8MWBZ8FAv4D1h8Wg9WH5y5gQHZwazWeBwAn",
  "key30": "43KTM6SM9YZ5afKuw9vfQscAdh2DMKDMzdW2W6MqABwfLiYG7Po3SyXGDuJQwNqFywm5YuL1KwaEb5dNsm1eGHdW"
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
