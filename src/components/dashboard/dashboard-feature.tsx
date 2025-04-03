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
    "2PdpKwdfsiYUcWqTQrGdSScYnYFMmcDtDz2NZ4aR7UJ6vumKRfHgsdGTmdiWHfphQcn2x195BLfVpxuhQLoy7rDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M2kcqNLYxaEFqzMHJPdzgEGeGGYD3yA5rDvEpa5SZxqGeWQoDYcwjV3xUQR3zGkg7SwJrUgri62Hwamub4ecUYo",
  "key1": "2qNqna4dmY4ekJazc3UiUxxeSyRCV3tK4snTRW5PAPVL4Lm7PMHv4tRwVqhxrA1CpLWBBj2yKURBpvmsYBdeSws8",
  "key2": "2ds1362kFt3CmA8XaCBh9HAiD8X1vQnTMZ4N7AtZCWSPezMsiNS1RHdNKLSLbqUMaQL8HH9EKjE67iHqfe4A64WE",
  "key3": "4m2f3cvGa1m8to4oNeyPzLHNhmHjvAhBjPyD7rhHNHZa9CC6zohKr8EPbLa6xR97jCHC7B7f8fyNojjB2xQvGMSY",
  "key4": "4RzHzriQ61KzhJHS17PVd4LR3oiaEqvsKLBf51yVpqV9L6h9nDmxxuXSETMoA6rgMH2fywWzZVZV5MD5hHTMQ7C1",
  "key5": "2nw5uBbsHHXnshnkvnqqCarjxbbVrG7TBzHg2kecAzRn6LBwTjGRBBvVco5A366UzT5eEmio2J3XW6NhW8cDV36K",
  "key6": "3ivfR5FaP82bsNiWoJFgY6bxBtGFnBTzQvsswFZJyA1MnvmMaogfVMXmEnQPzKVZD741za266unzVMoV6BCyUc7B",
  "key7": "3GF7vRwqdzh85HjYWFZCERuJFyHYUHFGBHT9f39mBvyJExJEQGUUmkBUKscdhwTkm6BvApU1kfWtZqnqXZxXLjuX",
  "key8": "5LbrJkEXR3TzBAud8PD7KZuNdooH5AJSp5P6GF8mhXdfbRK7wsP5UZ912XEvHgwXFUQkyTaVSjiazzfTnXQXiY4r",
  "key9": "4sbGpfr3Ln7hvtaS7Z9CL29Jx4zPs2tESsAcMea7RiBB8epoQwxPqNuihvqaH5VeFMQdKM1cJbnpV4rZj7r3EHkW",
  "key10": "5TLUJL939LDfbrsEantDU5LosdimqNvgrqCYhQ8e7q89htmNw5e1LUFp8KWP2rGvknyqd9RguXtK3eHfnfMg72qf",
  "key11": "3B8UBnBrPQ5fiGNTVJ7tTrYbaz7uEoHtVsUGSX32Xnz9SNvXjsBipdgCRrwhNU5Ebv6m6Z3jUTarkzV9Lb7bC3HE",
  "key12": "3RqSdE9MmLtLUqVgcQfijx6A2myQ3qyAgMX2n95R9h6tET7uUCX9Hd8FhPwVS99R1Lcasj3xQ7wR18vKmyq3VwUR",
  "key13": "8PW1nt6VgJwAve6pWMPA2onyKcPGgSygBt1J47qJ1qqf5bAevyjxapMfGytTs6efwFaXxVjXFjiM4182pvqM2DR",
  "key14": "4HLd4GjXtHDc1pBQXt7XuGzYgQNemuNXRXj7uuWTMZ5as8V6QXkhi1eJt7z9GiK92aMREseDnp4VZ4LHSSRoXhA8",
  "key15": "2HYBTt8kjtHSkd8CfBzXhUwq9HmGUp5kLvG8EmZBfLysULHfdt4FFoa3wmxq3Hv4VgyDxBf2mj5ErL8oG4AVvSPL",
  "key16": "5f2KLkGRSSH5aGfSRaWuzv6DRdarPPAVPsKkKnW4NqGWqp7mJgi1e6sPxr8dmK3nNYwdhu8aKyAZoGYQdh7r2agY",
  "key17": "59At9neMLKPDiD5uh4Y79CUrjD5oTbT4M9sqgXcgwZYU2QYVM16chWB34zEABxzavA786iV9EDS7dN1jwZxCmVTx",
  "key18": "51gsjxbD9W3dff7xoJmXfKCAvAuQPRykpfbXNZR2Xqfm5apfJV6xCDahxAmBkqcTekLE5vo9F6MUR5B8b2qRDExL",
  "key19": "AHHTExa8CPAcmgCZAKFw23RMLNwLe7zvMBuKvbkfqyQQ5uyM64e5dpHk2rrznxP91Xpgb5vaA6m2q2EdbDuG93F",
  "key20": "K2DM4h6G39KpAZa3tkcxR5eaJvtXg4afSPKMyqKhv2yphADvTLs58rMnzMyHX2bKtdGkR2kuosvNcEUDUoeZ8fe",
  "key21": "2cFHaXRDpoGFxN4qqpZYpe7PDUqLu7Cbr218d4sxUaz1zWbT4UUD3qKkknrFrQF7MTj4WmEYeHq3pzAEHg1MBPwY",
  "key22": "C6zTNw6VxFNgnrsumtmd1uxw62aRHTGmPBsexEKfVXPTRpgZ3naeRpLZEJR6jSb4UBetUEQAk5QUWF11BDb4iuD",
  "key23": "3o2Jw1fmhPh8F2vHapjcdy73C7zS7JZNtPDyeMS2X8RsevTvQmtSKykA3kbVgJn4s45xfBbV997YujfaUPXsDQ21",
  "key24": "36KMs23dS6jTT6J4guVoFRXrDe9dt3ZDhTXMqmwJp3v8tqcVdPCGyqmL8snFFAApkhEyEwHs8LSdJkysieFGixHx",
  "key25": "3FPrGJ2CZiDrcBPDP1xFnm481bhDiSGFNaQr7gFBuYtiZNozF411odqDB71rf27nuFgNbTUMacGQGE4twon1fWaG",
  "key26": "3G3Gee2ZyJeJdVGEKWgw68uqUtV6TbRFXr4UocTobPGsHPccK6u6tx9WpH8JatYgpVLYyvBnYimRLhXZAXopvJat",
  "key27": "341eirjC8tEAgCE3Ac1TUnftbeqPepiCivQJ3w3HNui7n6Cqc9UWpAkd8DYpbsqXsX54cZHnr11GQUrDmxdrdDDk",
  "key28": "3S9ywTwW6DqPwyR2Ur8x9Z31ZfnSY8PRLYV5HLaNBD4CpY2pVwRnC2pfdYmfx95YjS1ECZETEK4pUoxVfLA4ApGo",
  "key29": "5aAG3a8Qp7Bt2Zwb4JEChJXgRcSLiPKavqChciAwQzKsKXGropaL8jy78PnwoyAHb7LwEfnqNtnY5WgNhzXGs9VJ",
  "key30": "4622oFAZZd4JaVX38uE1kT74dBfzWvikbWXxgKDNBMMt1TzHPB4WxeBjpUDfgy9JhcUHZmmdu9VeYpZKzqoueYYx",
  "key31": "2ATbrrBZURKhbEbaJ5Hsm2WVp61Ddoc112PFUBgLffpwPA9Eui6quiUXzCaG98frA3kWZ9ZPCe7wFpV1JFf1PH3p",
  "key32": "2Zbdw57BpzMGbuZDjYdztfdCDgDtAk6eiLXBo2vdrWycXwBhaEHYSojj4gEboU8bor7hKC61h1J27RGR467N7KVm",
  "key33": "JbkEcie3EvzND3n8fBAGZ1MzENmLsW1P9FRyGf8SMjUMvsKvwAPt6E2Fg9NXdQV85XCqNkdXzkswhxJFvVDT2dm",
  "key34": "4vJPpKYEZt9hBCifXekDpaHGdzKnonLVD12DfjjSJg1gYA4zXbCPGYjZyb3Ra41FpHJTLMTCMZnhHpvdrS6iTsWn",
  "key35": "tviz2rwpauR6gdazEz867JC5g94QB33BoQKiVSWbZVZ6Ssd59SKUmW715opL2oL9Da5EJa5tdcfb1X3WubWQJk8",
  "key36": "5bjKxV1BEGAXRn724AJJEaCDtzfQ6emCm8Qp2rdFRw9CBH45CpgYbMXzreLBCcAprjePJpqVyeVhDdiQqEvnfcEf",
  "key37": "XPx3qGN6gWS7xtPmpcfyPugwmt5LQsAJkhkfoWLx1a2XoKuS3oDbngTbc2A9SkFdG9XCEAQfpNAVtGAsfmuEYi2",
  "key38": "4WYc3ueoDyNjeDzPjDWQoxw7jm34Ga7B5f3onTTP8LPLfm5kRP3HZuM6b6ioQWPBZHgyNyedz1Biig487dN15uVD"
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
