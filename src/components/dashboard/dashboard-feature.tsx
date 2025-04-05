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
    "2Brg6VrnG9b3Yd7gXj2EBFTbhzBZFwbiifbeaMvZMhALxWLmcJZpop2eUKFpA3G6YwEAV8vdn9DKigawQzst8CxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hTjicvQVKhNFoUhBRabJvjuUFrH6tDz8q3zPzB8kqpLK5EfAfCCrbh44d5wxyqg9SJrSsqhn8ZCDWfj8FMbqqNv",
  "key1": "3EaGbTqEuEzXPW6tDfjfcurDqPyQARVA3i24z6b1GSpvcy9tFKvCYELL9je3YRmhDVwXtPUYK776JV57ibW8riUa",
  "key2": "32N7ZMzr79zczcXfuvaxLiChq49h6KWNSXudPfgXd9qbsEmRAVWWyeYxfQfNhGbkPLJWWnKqoVhwVwDnLjkWdvwH",
  "key3": "3hLwYmAg7PdRTsUYKoMhfLxx5sqHfuxHk1CdeNVtSYSYamhSt2w7JYQqr8VrJMmaPwybgSEygoYUAJpnBzw37Unx",
  "key4": "5Ygvrb79CcyEB48YbUVopXgaoeUm2qst636J2ahfU9c8gHi5496mx3c38rAKw9xDNkPHx9RNS5ne5fFUPBSMdBSJ",
  "key5": "NWGAJgjGDCj8AMY5PnFDGE5kVNmQ6bxsbPgJsUY8SqyFVN2fTURizsR66YtLHExwRGzQpgiku8tCLpdaxm2TBKQ",
  "key6": "4a3qMUNV823YdqxHVGcUKUu3mJqH9wkQrpDzpCmrbn3BF9bJcpi5kaEKXXXswdU4RFg2Ww5LaH6kuqMukUSG3ARh",
  "key7": "5UciAJpkwnR8xvDoKftBZGEU2pJmnryADHoL1Ktg4ke2VfJbLir18ot74bz4zRmKkiGg2WPn8vvkwpHrxQUuiyPc",
  "key8": "67YFF4nyTJDRBT5kV3gjEjjtt5zqkPrrMguryomTWrgUhXiFo8JgpixSyX7DzmCEceTSqbbwxCH7U73mLFMzZx63",
  "key9": "65BorU6CgUxEmCnQMSfLSWKgbF9UwTJxVuUswVVEAGXhTrbpqvBuU86ycxvcUjNfbkMyReqWfZAznmFcZEJ51UPz",
  "key10": "3sRsGTS3VXLDGps5aGVWE8B7AJD9rTFwqwTDqkWTJW11gi33kzjRf8eR32t1rL4HobLMpCshHNaHmcWoLPNb5qA7",
  "key11": "1KR1zQgMZq1A6vYPyQhUXb27K8Cb6NMwFhEAGJxWPsVes7qbQ1kFmAJcXmafcZWXcBxbpVAw8iqgqEYZTBERGsM",
  "key12": "3BhMq2GwEpbrwmnTyaW7QmBF3K89RMZfuifskuUG369ph9bZ2Xm38S5oXUaK4PngfPwTzpeWhzzCCuZ8u6D3s555",
  "key13": "9q4ZYiUcygcXq69vBD5rfGz65jUyQ95zc1xtF9otQyWUZcZQf9WRSFxYYEbaNmQgKwYgGkbjdDwC4FgHv1R93iF",
  "key14": "33KaMSFfbg693BuTmrXzEX8SNqzGjLFKan3LR3PDRaCZjXN5DuotHkNMwu6r4bXZhsTMaXn3KXkVPXPMJrDj2sWL",
  "key15": "7uZYCFCykSacQGVUFwG9QHovTFjf3R37agkftef6qZwnAYHvX2MyF6MtG6rPPRFYvvVZxhzTZNMJHzth4uYDmrP",
  "key16": "3cB5H5sNoJUL9nECvpaAUBKo56MrWAeVbCKmwY51Xh4t8cwxJBqL6pf3bPnZEvZVnQ15ZNqeaCSWJStWTkzV4bGh",
  "key17": "jvMuYs5jSLT2YkuM9rJpnwZ49Ma7Pt86zNmYacXi9p3kuD4K3udc59gX1fbeFNq3Suv9LDv7Dogba71tHdiwmJd",
  "key18": "5YBAevyWdaBug6h27ZHezeup5ivmMspc8cFEFXzAocPeoBNuLeqF5hZDMpKePjbjUm1JeWRdmGrUEpvnPpic4GZk",
  "key19": "4MALmqxFYfwdmYPzAyhTEwRreRUnT1HGqnmfc1nXBhVpoGRe3fxv2AKvswR93FWHv8SUHNJZX1MJvvfJwp6PxhFr",
  "key20": "2ook6xCrbXKMDj9ovLZfm1wmV4BBDLfHrtgfAdpsuEDvREaTUrJENCHtb2orrXmDmH7fR3Vpg1BdNZ6nvprHnWRy",
  "key21": "A62XouxaBjwERgkiM4ek7RXsAR3kH7iK2V3m45w1cK1mkS9i9BgtMdbZ1ptSqHtDsfMfqNAcuF3rZkZRcZiMdP3",
  "key22": "M1kj9SV7wPMWKMBkbvkANDZw2A693wTDwLnTQm4BWMA7kijrUhYduxFW9eoHTsMRGDfbCez2hhJ7JmMMQ5bmm3f",
  "key23": "x2NUxX32Tv47QhgtYJHs77En7FHvVJyFNKgtcnNjhhXJP8dt6iLmmztBinm8uDjf2F9vVGcfbSVQpWtqNffKn2a",
  "key24": "3565hM5rkWHTEsF4jpY12bUJEqrt51A3Akh7QxnNjgXYGfEW32n98xh62cZBx6GJWxbqDeSbP4ZpNyAgfLnAu9B9",
  "key25": "3pb4FxtgVn8kvbYniFYiMC7gnAp4YghRJ9VKFQVm957hbjBSvD8iZkTNUTQbQhLecdX7zjctNzWAPy9FJmk4rwr4",
  "key26": "9WE39cwcVpfRZ9kzf9BsiAxtR19NC8Nj3r2sD7jbREFCnU3VX6GRL222QjMzVbprT9JacHsFAK3Kh78wHgci5hH",
  "key27": "3iZkzhou2XhMHYHPFBB5fsJZz7oP833X9NGCADX7tVD8NwoC7sN7SGrn2vBLkqxbEygGxhdidyJrs6RwTEdDrLm7",
  "key28": "2gbB3SdtQvam1e2a5xEDUUSfG3RCiy7PNgPf4s7GtBr24yXT7o7c6wUhf1QTfgZyknQJywfYBxTmZKen5tzVJhbt",
  "key29": "3CcJN1jqqJR6yfd4MWZAAThViraswqBCqf86VVHSqagr3WAYowbcCMn3pfzjaCfpUMJ2pptfn2yuCL2UKR16J45F",
  "key30": "4wvyECTXJgMtJ9syzPAXPixbit2XVVaq4QRrs5tRRegcFxzpXSQxaruToK4ZPCvqW3AKmgZWGXhKLSNAC4bSpHWT",
  "key31": "5YmHwjdgCo61EvomwKWnK7w8NyRGqEtZeitpDCQxYnguS61aMvdUVeXbV3mFqL2kw68VVfY9f1eG2Ta3eBZda2gj",
  "key32": "588i7xoSJdRpLnq4tZpZmP8viCqLrF4vwKBqRz7uukcQvPnRGpq3fYaDpBoGFGTSo71z5kgoTmC1UK4WBY61VxrF",
  "key33": "5wJRgUsjr5gQbGW8UErqGf2HrtGgPbqpmcPCeJbjyGPuc1wopbNwT9YGPAkSU7ct2YsNih7YcHGjUq9fu56PHLje",
  "key34": "4tgnG7HosJ5DWqo87wipY4P8hAvpmJu74h3JX72uaM6d35XaBHttNyJoJd51rNeLh3aaNzBkU46Bstsi1v6VNGsz",
  "key35": "qnyc8XQASiDHKoBtUdGD9CMPGF9efa1FYVVq6sZnF4ZZP2KrpQ2my2Ad6iZTs6XmXNEZZ3J1kt8ceLzHqtMbXLJ",
  "key36": "3Fqgm7wSvYyNA9gPmqSeVQnZc9fqov6SSqA4C1Yu5zbqDD1SuzUTSgypNDKCZe4PxyUH2QDHoWR3TFTZomoLdG6T",
  "key37": "PtUCA7CTPguZw84Da9Rvj4kaj3MLBSLyqiMfysbrX5hANbzomdpLj7HEPwGZcDquyfD9abRFhmPM8gEShFUmh1c"
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
