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
    "44sVNnpEPtB2CrcoQPAnVScBKKEjWkzAVdLU2NoNmMQgcPBfdGv6w8P1g4Y4WL6udmVdDoy7YhweuU7b24jFqzKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Usd68hdw94Yo2Ri5rmMufMkg5zWAtuJLNvZNNfnEgJtTW9Q8a915GGCcNcJj7YqKfAEcr36JJwEvgYKAeE8BdMf",
  "key1": "2NP6ndby5ZrwHuQ9CVhAjaRhUSdoWiQcrupVzKPDa39oXXkrmYxbsVnzgkxTb6SjWhuy9ztdyS4gQAW3AFdrGGgM",
  "key2": "5APyCpDvWzVvrJBi31tXdYCUYAmYkgaGqjqrYCW1zMcWSQFseCjfC5xViU5WSJYHrggbx6bak1z18czoKUiLoVHb",
  "key3": "4b5PNPjveK8BPm7swPLmpKyRrGw8CB3SbYsAEXbhMXUkcHHUvGDKrRzqiLFSwYTyumWjecV7z1AhpyvJ7x2hG6sQ",
  "key4": "28phQ89KGPFNGKGiXDjWjvZLasfeCVPWtkrW1748KTuZCzR5NHtJM8jFvtRrdK44Nqui5bxhn2dk7LLivBX6DNBE",
  "key5": "2mu694FbNRfB8P1eow4kYKNgrjib6dDY1c7wsfreTaw53HZycu21KcGyqGERYHFvAVFQEw2fdH2mB3BCuzzE9ZXJ",
  "key6": "35FoxWJ8quBEcs9kyLRGXEJTKK5KS3NtYEifgXtkghupZJ6NmS2j8iHiwfCDPN6Th6HNd7M2g6NyRRmKPeS6bdZU",
  "key7": "29FgvdafX3VB2PidwSzfdMzkp87pt1YWsLKjEKw4VJZnzoNKpLESYZ9VqNWydsUuwZnPUX1nzrZRfTMVfoxgAkNu",
  "key8": "ngicFWkQcX2EA7ZKV4orRVjCD6GT5YQANf3HTZ5pyM9w5KQQgPxMU5EDH7L5V2WXC8vekFY5rzUnLLMrEoWFZwY",
  "key9": "4y6puWZTnBf2Xd7XDbEAUGbVQGPc88Xgoqx8ocryAHvbVNMzXvJQoK5hEdCj1D2jojD6TytYm7PwbsT5AoUsVumo",
  "key10": "5GHTn8aPWjqoXW5grMRUZN2SmX2iKmEttQfSVwuyxmGM9kk4La7du1vXMFoKFCQQBgCmvjxi7fhGPwWB6tjCZYwB",
  "key11": "3b9NADRw8R1gnPJv5uenM2jt7BwnQUU2yLM5cQwxZyz42fyETQfUXDZQMBMim6DxzpWJSYHf5KWHF13Efw7oRH4b",
  "key12": "658B2YHStPR1YSnCd43wGi3dewCZEUzsjoQ66ctsh4KxkHUks233x3XJsBD6CcUfcfiNr94UMxVWh6TEvEvZiV75",
  "key13": "32e5VGxXDzWdVAgWL2D7VpALKHX5iSBHFD5VeQzTpoz5EaV7JT667nNurjc45naJGP9sss7qq9HkM5WiXang4kRQ",
  "key14": "5LaD7F2bRAPipNBqPQGvShDvTXAQAEFUhhqCSu5v3PvwoekhtcDjQQ4Ges5mH3ALr1fAXu3HYbtBnvUu3RBSYHi8",
  "key15": "3sYi4gPxANrGgUinUC97yUdVSt14KfsAdUq6KPnbpWuQ5jRj3yexqKn65NXh7FoXLGWgHeBDvRe5dVHNERDyiFgC",
  "key16": "3MLBBmaua1fu5BiTLrHei3zsLwY1cz7RyQwHb8YzB51an2y7oQY4nfBbZqmTZDyNPg4DbzLnXVW9HZXcLuyHDpHo",
  "key17": "4F1JrTEQbGDMgvpMTbGZvVA1CaYPmcMymzMBoaB4S772eaFb1F7AvEziCq9jemJ5cQrgbf1bvetG9DXnBbn2prRh",
  "key18": "3xxkFeq9EYzdLurMa92S4s4YnS7HaCbMC2Me7tD7Hv8iMgyNviJnPqMQQceWQ8JxLwmzgf1PcCS1Y4yFLVxmCM1S",
  "key19": "62qdX6xKmx26EULPVHesLtwmjgScPCKw5yyc2MJQ4HMzgpcXcMNKjsZxoNYNPEVg46Z7ZESutheUQHQEZtya2ox7",
  "key20": "2YCfrcVAdswSKLgBDG9gEgvdrRpxUKWsuTZ57qgzDhdvLvR6PfJ6epZWEAWt98ryNHiaFE1oJsunGtgq9mcLF45F",
  "key21": "4YSTHzUZZfJ9kXxPeKDae8D6UbiZBLwg5o8pPYShqGYi7dW9JMtqkESLZvN9ydUtP4QgQYKQWio2CqtbbnSKvJSU",
  "key22": "M5aED3ftk2MH2sA6JFkgjL3LrTJBsxJH2hjq4S3wpQWCxXYzZtgLhcr9xDa8zsa1DV86ZMaSenkfknH9yQawBHH",
  "key23": "3YMugymxsPBsxBQ5CPxJ7Bbkq3e6XuVpD1ZAMrPMEfHtPP8gpKkhxPyZzmxsVhQjRkV8YBT53DJxQw3Q97j49Qb8",
  "key24": "4juDfMWATBqLAB8r3hRBMcE7aDXv76VWSFQ1uYfDtLH6zyvtiqagJjvw1RLvk4ooiUqoY4b4o8r6Rnoq3hoBhqsu",
  "key25": "3io1E7RhKux2mz8RRbctX1pbztwqmc6qy3gjL1BSqgMHaWQG7jpjiA9p7MpfiKNjhbVmvx9kCAY1p6bvVrgd1BNv",
  "key26": "2yrzJMmYVqu37yb1M4Zjm6atuhsSUgeJJBN6Xmwra8yTispLVxPsF2s9eCG7kbN6tazbTSuyT5nUJEn8ubfte52s",
  "key27": "5UXFfjafrLDRhqdGWp3EjYBgxhGBuKwYt8opWudjEXjzWSqvtwss1UwXp6cGLZkWoCe3jaQk7XkvXfiBPSjGzceF",
  "key28": "3Tif4zFBf27YSBGjKF8spyJZHu3yy2eVUqjKxzQDNJV27gw1bRuMnSUBCc3We5pRZ4WoRsNkRPWhk8dG9LB8fx2d",
  "key29": "4FPtNPcvANFQwwfym4U4i5QhjB9A3bXWjK36cMo2AqkjXEynBrx7STY5nP8UboYfS2aVZdFKizXYbQWvsGrWybWB",
  "key30": "3BYqv1zbzYoZkBoirsmngL1JTzrQqyCX1fgnyt8Ar3X8U31bC54dXdEuwwwM1QV7bmDhEYdRktAQ6uSMCjQK17fA",
  "key31": "3bfQpTmncZ5pS1Wqz2siaDMvxSi1wr4Xvm5AHLxT3SJWypjvBMD5urfMhPivDf5LAaRewsiohbrG3gBMvNz1L4WE"
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
