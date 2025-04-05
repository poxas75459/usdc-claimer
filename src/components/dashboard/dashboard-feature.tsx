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
    "2dKvdApn8VyveCgECZDzgB5RNgudD8t2ggp4sVpNXVYbpeDUJywrYm8Z2ybfdWzXvrYN6ECi9T5WvZSRRutbaGED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UF7dJLHZnzhaQJgVxcQq3ggzqXtJPMfxNSy9erNLE7X9JKDRbHas5DHsrongTWfmmk3UMWcSCM6vZhaXjRnMxbf",
  "key1": "cXoUcUgtQjBYeGfQA7u7ZnuA8gH96ddhHH3SWmo3zaVqvPLJeLWnCm1H3B1KngZXje5AUxTB39tg69q5PNE2q4A",
  "key2": "32wiy22v23g7LdX9SA5kTWd6RUX9FygZcEfcgJjq3XNg8XmZdr77SQk6XLueKTxR4bEJNEKYLYXSf3bhaSqwSxea",
  "key3": "3rUauyx7BuyWqWgZAtBnmQc6Xcz5p8scEyBQkmoSsW4idzSf1ECH3q3ohyXhg9VRZvkMUrTcAQzTGAGM1ychb6bH",
  "key4": "495FyZwTM1JTp6H3XTBGYRKtqZJFhbbo5BzoRw84u12PaS7t2ouhmvto9p8Ad7CdSMo2eKZLNzea9UkYBdbCw95g",
  "key5": "4r8JzLnpGrHCyddhUqt2CfqeuFYXgbfRzFRiFy9kj1jULRfnfnx2aPoknkRPe8ebjXR4nMb16MgMG3j2WSQPXwvX",
  "key6": "53pPoaj2GueFhMjdM5c43EubWSmEdqf2LTiiXSEPcAc3XPFUGR4zJZ7jMyz3d9PWHnhMWBC9ePEJe7f9MnoWtMfp",
  "key7": "5bzAtSv4A32KEy2A5eUqSxYv7hZvJWRuZ3RRH9F7jJ3hdRxHxjCvQK1bh2ZSFh96MkiPvELzbxBnhzoNT4Vrnx9W",
  "key8": "2mCfNSXiCSu5WzQ7vLVFjdL9Vtme4z2gtddH32MhZCytUEMGRT3gXm5r2L5TCBEiHgq2u94HSmFSiuT5YzLEysDc",
  "key9": "61WbKyjp9suMZZSWkVRKSZvkfntKrH78GmTz7jsTcfGvBLKkXLkHf5p1ZcwuQdeahnKtwy3azr9kUua8dGShfw53",
  "key10": "5J8gJs6KoBZnpYRRa8ACvCp51svhU4hUniQhXJSMen9S2u2WMhCoC1Jmpvc7YynoJiBQV85BZPEJD3C97texKMgp",
  "key11": "5AFJqMfwCBDVah85s1VDNLidHGFT1BRJEjaU55VfxJppx53k8Vn7i1BWEXb6QwD1MyZPRtiPe4iqwvUMnV97mB7p",
  "key12": "371ZktXVLQQzDzU76FG561XpZPCq7jkkiYagZs1KMq7BsKwkaaQEgNtuKMjQvNdoCfRH3pc98xEuqkrcbRu5ELrC",
  "key13": "2q3MsAC1NDnqgurgicD7Rz1DHgV44rcsP8ygBKfBHCs9djH3aUsVu9wgW93sGhnmGFYLkGejVQK2iE2oa6g27T5Z",
  "key14": "2SmcpmasC3UWexsgduxVA6647oZDTy1mJDsMdSkFDiQhBmSwrac3byShAdegFTxArmqS1j6QUkdXFBNUk4LE2CSx",
  "key15": "5dfTXXXRxxr8PF5XB4v6m6VNR5kaH4K1WxV6iP3jT6bTyWorHtGsnNrh6nxJnfBzgpqsuPf6itPNu6nHsRWms52i",
  "key16": "44ma9B7xSA6Prn6NB9JmodHixGFHHs12WfkHGap8YB4ApL3TmNxh5pcDXJFhTbxo8U7tBLVdy14JqNcg836PdUrL",
  "key17": "4swKjzkY3kE5x2oBpPLzroopAhbNapiuMMG9TvejeoJrr3HLTUE84AEFu4y7p5GboBArtPDtgR5k54xbM2kE3UCF",
  "key18": "5XRsoZhERRxhsKL6dUfCGvBAeia2n9vGWhXvUkDxSGUjGTwynx8JL9fHmZ5ZGi8U6n1qXy5Qg24z8piZx35xUhH3",
  "key19": "4g3oZxLGBP9cK63yQUxC1ojWNuZEnatsUrGqkFeTagBmX4FwB2roH6pUpmsjrZ2kEFKEqUidsPmFgcPuaSyF6ndp",
  "key20": "5Mjockun2QxWPo7LamCu7BshKaK24oVEK4PgxSb25TVNmDs6W1eBBJVTErKSUz3Tu3p8WB8aSsic5vvpTzSLFZXS",
  "key21": "48uGHENZSoBDhE6BYMu1Wi1k9MAr1ZkAz31ni9G3HECkE3GxuBjkoHqzR79dPVpkD8ArEpvPUyFubMfBgTmoYNmH",
  "key22": "2a4xaNZV8HGak1CLLittZ5CwZa3gF2kdWDt8tiwuCKaBRgzwds7GQtYVhBRBsRtT4PFYW9j7DvuQGGEQ87nhgQbB",
  "key23": "4oF2hFvNJEAjsSni5ERx1C5b4mmfHHLJ2hdR1D1iAHuh5cTtTk8KoHiwEj1nzBFErs6YvgW6z8RaJDoi9TEMXUb9",
  "key24": "2Zd58FdAbhZqXe5E7JiD6PTVxxdzQw62sasax1NZJw3gu3pW7wUyoFHpVxnbyJ8WkEiebWhX5jNi42n48z84uFSA",
  "key25": "4hsn9uKsPtEVKnXxyMNb6NR7ccYC17ub1wgcsbXdmbCxwKJ4u7yvp8WhXFNtUHHcc9eHNu1AdUko45n23fKSgTBd",
  "key26": "4h5TftEcTNVuf6HzJC8NNLejBNwXGCGpZN3LLWk7FQudaahbrrja2L5kHS2WUNRyRvRiVuXdiEcsqqH1636it7pX",
  "key27": "4pnt6SdmCvdce7V3QHVkrUGVfjn8KSqSWuWCmVDQSG3TLyMUkeWnVmWBwrAJEMwTFxwHo4VBa1MwEsdNv8PmDSqn",
  "key28": "4QxTdJ1ZYh4HMNGU6smmbQJRPjWNQa1XeWxaupvCosdHhefYgzvd6x64QPAuDAiVMBaiRjAyxmiCLbvRQD8XyXYJ",
  "key29": "3FN9tXMWJYtLmfeDVgSPByNfeNg3jYy4GR6RCphqAKWCBuA8hdabcZeWyz73yq5EVXrn4pDExa1GS2KbeR4kakXU",
  "key30": "29gmszSBqFV8iWcBZgwmDrXaMmBmjk2wXGckxAcwV8NkhrEC8sB8d9DeMnBM6Jii9Q2k4sZEr9FFbFrig2pEC2uy",
  "key31": "4nia3akUGwdD7T8to2w3uwCvqYQXYYesXbNc6vJGL4GAEQdFu5ZB2CDtQQP3TRnC7bEDgygiqyYWq8pBxNyQj8HP",
  "key32": "5iGzkdbAG3wb4mY51MYtsJjMr9Ggbkqj8viiiPx6ybXxhbMZxhuoyLAz3Z3TX4vU3VD1fYmqyZKjngRXVMLCtbfd",
  "key33": "2a2vDuJQA319yXkkbXxMkUt73X1ytMKRCZhLwLFHVmfmoDdSiavvaUiGt93L6c4AqrNM5pwHeQiBP7Z2B6LqELj9",
  "key34": "xPGXnf9vcijhVfKbDmM8twXuZPzv8uM8vzdakoz63cnd9yiVDwrTGPANJTh8yE8VEB1R8ueri9BbFz5zGZkvZZP",
  "key35": "2kTXMhX5W2M7dDyHy4wVhqruDTxEaRpSXBUrCWXAH1UwALHJxxuSNkcbP9P8JWutgAVhWKaEB5MnvVL1rjZiNHR4",
  "key36": "2wQK6EqJysfjJFcXzLrEjR4dUo5k9XRkJ4HdKzqVkDjLKtPgZnWmb1QSczTT5Z5saETpKMW8KyLUiccTkkiT5btZ",
  "key37": "5v1nMU5588WxAEkxXZJkfLF19C1sAGqigZehDPm2r12mVGvaVWV7PALVVxSbvrDRKesXTLBE9G2HybHtijVwhgc5",
  "key38": "2VAUh2yk8FU5b1bhbN8FEBwjQ9ECUW73zgpoEx1zCQRYtXMMjJRn4Hj22jhmhUw2iiAcm3bTzAcCepzimLg1Dp62",
  "key39": "3VqRa5QDpmHgXx9ak2HRqAYLQHcUvAwpfgLv7RomV6tDoXRHhNM16gJSQSiXWQEF1fdJ9DkFxBKnQmFSFGVwLuji"
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
