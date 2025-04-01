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
    "SYeXi34LBaBf2p1onnojrugy6WXHEX4hKns9WuyTPFgLBJCUMpC3aeZuQb6m6LRX92dKk19oNuM5Y94NsrvBEMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MJtja2u65dqEJPepTDpEdUu5ukiaWK6JirNJsiuHLXWrQenbiLuP2kCLMUdbbL3MWTrziMRq6a9SZtm4ZnuW5tn",
  "key1": "5m73X6fhEjYJtFGNLS6qDcvXhU7Shc97Ed6xaYx8ZSorytsWvuwj9jgSid7R7dnAToBxxDfJp26U7m9JMzWxfJmo",
  "key2": "5tpgzQX5mtXdaYEHAxiubGmyJgb98XtEtTyK4ZoUEcpgRbUxzLcjxUFz9E8Bv197vrxdXXBbbNEdaoR9Gq7tMfeF",
  "key3": "3KGJjCzPJFbwvKFhE9dzTXabZeEf4FLxemMhUtq34SAF7LU4zac6jdX245EPJwDBZcVjednvYcK71N6th36qAuWx",
  "key4": "4Hh2d98YYziYm8GTU92ppfK4ugg22jqfgGqxAnwG9uJzTggbXFjkPrZn2TsjemFEuAfM7Poq8D13rsZdpG9qDPcf",
  "key5": "5VCRaqknuqoqeS7QJDRdkGzxWvNQ2G5xWoSW35iVAhNQ97ar9e46VDnZsrSkhu6BbSr8fyKjec3irSKvxuHJRbiA",
  "key6": "5anbc1EMDPye2ZDZfoJ3XcQ72TPdfgF6GwYABHv4Xi8vgoZ66SWbQExB6BjU841A9PMkwBGfm5j4wiCoqKGdJhCm",
  "key7": "3JDVMeVwEgziSEot1amRU8cacLmEjuy8pXYxmRSzuC4tDH3zFjd2oJziwmyFNb8t95ZBFweDYtoqetHfCzxJdoug",
  "key8": "4bJjizjxEREnLJujVxhbphmk78imXjYgLVCcs15qaxvkZoi86oVUZiGGvaXxqs9fKmG85WjrrawVf37avvtv2o96",
  "key9": "3gYYssPkhZoK1WBRG89aHB18of51XjaVyo7pZQA9qdSUFAEQXE5FGwr1ZPVmtMSjRHqmh9TpNf79uuuNhCqnLwMT",
  "key10": "5Q2wQ6DwrKmsVAXesU7T7igdY3dzzvXpv9wbdMHDhgsJgVazUfCJjvPpJ86j5atJG8MgFZNJpgMTizib5aNsMs6y",
  "key11": "bY7C1eg2A3MTJwH2Xn3Zyo6nmZpHSyzCXr9q7GttVgmV5UNeZWk7Lq9tymGfmrh9joH1DBuV97UcytejqW8v7KD",
  "key12": "4mS7zxQAjwZ6Tp2aiBodk2KQpsvvhBqMQ7DdXnZNq83cfgTN6YRdP4VPqyUcnwn4wzAHEG2Y9tCW9Xg43mHq6b2x",
  "key13": "622xs1jBax6jMkrj6cD3TB5cAY6FQJ7zRBi4zQugdFchucqjhGRpEfzVnhQ3RAb8hpjZNwq821hdP4e2hcYAFWJY",
  "key14": "xnMFeS1gRhgepoCwZ7fy7STiHQLxgwjrfVbEZva4fRutBXWATYQQ3cDfYpBp6nBKR7wncbCw1AUcfzF1vF5PDcH",
  "key15": "3qDLNf5jEJSi26xAbjwa8X2rowZYTy2R9caoFzm3bj1T1YMYrZbnS33pZt45nQAgLhmNtJ4QvzGetg7FZx9henUi",
  "key16": "5eUy8gis5ayvdYioLguPvpgqzeDDTDjDhRepj26KSzHsJACgvco91sWUWFqs2m4CnUjoiMS1YZVjzutHviqkhEzt",
  "key17": "2ekTcrZcWy6w1ytyLkLvPGuBHbmQxMPGapgZjaRdcnQgSLbx1YXyVZhmXv7KKJ7Ku1WnE5hMx7CJtzuAE5RJLJGr",
  "key18": "62oNNg9ogP8f7uxcJGv9UEtNx5FNv5bh6ycY7SiwpB1M4N1HFWxgqwHBfnVUSQ5SnsPv3i9do8GGbUML3Y735syq",
  "key19": "2RE3jvE37LXoT2PnNQkH8DUwzphoXfaT88eH4EGa5zXxobff4rATWrXx7137x48XtSppy6v3oj6invnVAYZmFPjQ",
  "key20": "2aqvr3xE5kjCUWkdg9QN3Skz4gmvZCQBCfh4L3n1WDV6Z7CmcV65c3RGq7iWq6P62gKcBKYVi5qpSWWAoiCWF9au",
  "key21": "2743PSqYHUvCpTzvKwsDcK2akyfXHZckKcipbd78ACT49CJizmfnQJo3uaDhBfyXkn4rMTugHd3hNPBm5hRCAiGM",
  "key22": "5ZxxN9jDrXTL519JQfTFvC7pSfmsqf5s5uN1QfNwYJh3bfocuwd1Lcg7oQy2kWDFEF3mv28JegzEemZ4yqMZqd6o",
  "key23": "5tYFbEZogBkbfSN2QXKvcGeAeLruP2DVd1RLVeAPCoKKn778gU3TNJwMB8uekq1X2UUmSS34bVjvByGVHf2iQAhX",
  "key24": "5Eqp9Vynse9yKvHxwgqWzgHMSHWfN1bZ8GsthLpwnnprCu4VTB87hrHyW22wuAcM9NSkShYMsQYiCQURB3oKw94w",
  "key25": "4onVTJXaKy8F37dzZt9Bg3UGWnumchdPu9AVSGGNhcoqb1DAhTf7aRe6GyQLxAGUogNcHg5FaSfa3CpWARgc8wRj",
  "key26": "2E3UYTDvuBExX2bKgd6NtV3on76EgpvHcXbih5NqQCM44LZcAYpvXXdKySszj1qyxxmZ7zdppdxvMEpciRMpTKx3",
  "key27": "5mQowBZWfepxHFTwhqHcHCvt76CCSNit1hw21wSGGdvCUN9CE4iPLzCMwDzKZE5vYhH7YKhAUqCisLDj2RK5weMm",
  "key28": "5dxDgwwuCtLJQW5ECzPSJNTPetRHvVwh1rWbBHbDWf6cjYfGxeLMZqKoYxuWKA1dF5vAS5BQUrLEG8hzRrmbHLDN",
  "key29": "3bYyeTU6ZFRoGp6V8bQNufcXGovDxxa5TGXcwahVeGCFEzSm7FNP7Bw2UpTbPTrcjBsfF59PYzKqRaXuaCzW9ZZp",
  "key30": "5QQLzPHuDKx1mHvvmcwoa4B6iGkTNRBJrLx5C6SF7GUGr5uHYYnDGJqWm2Zs5c4QRKP74PtLrkSJk2oHpTtLkJ7B",
  "key31": "gtdqTGPYh5ZviD1YG4GaEpUdPHe5dR28UGdRL77Em7WXRJqx7xARtPSruWmEeFrnGsc7UALF3AyFYi7HGCc9HWe",
  "key32": "4Romo2Rwj3PT2pfaVHnCRbn95ze9DWxQnpWVwN76xXg2AN4qKMKCmxBSjYv7Vxre5AZEm57m6yw8bre8fhAkoLgg",
  "key33": "vdg4eWQwmP3qT5NMN3xY2a6uKWjPHPcQs6ejXNSuvpL9GcptjjDaKsoq1dsT6FinTdVHFZyfmAYpV7Kbn2rz6up"
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
