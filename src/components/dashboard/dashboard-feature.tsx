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
    "67LGKt1j3suTr4ViziHSzVR4CWrEejLLy3QaBbzRshZnYXLLhWBEDWAmFunpHhTmTVV3jwxwNU8Ggj3CK9rM9uzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "339zTzCbJgPActtjvKdXn87zsFxeQyUgMLJKsQNhn3BNKa6kB2zCZPDXQV19bCZ8U7Qci6MBsUV27LEJ66fxNVuw",
  "key1": "4a1RRgyifbDqkRucAPPw4tcvYQsgVt4BPVyNiQGbmiAEFmcCXd6QK3ZYtuiw4eSxQAhqF3r8dX6tCUDDK1UyZWp5",
  "key2": "5Df4FFqAyiELoXnnyrcqyTLZ3g8buJVTtXrXCTBtt2ns8DjPLBi1XWoSHYexptP57CJFebPaDeYsL9o7c38WvNLb",
  "key3": "5CTgYKZEFkNpd6T5FowQ6n1KmkJSu54HeQP6JpyQtjKZUMWyXPea9LV7hiBhSXQRCnnyAEJZqjxUSGnMmnodCCk3",
  "key4": "618NCGSZZ8JK32xCBu17Gf5ZVFaq8Jz83ut5jLdfha5rkhrhrbzWiPciA19YJcHa4EjBoMbiwPNh8Bhv3mocPmbJ",
  "key5": "48J3i9j9MuemAHtz131puALia2M533FKmxKYgVzaCbXnXtrJmUKLHtiLqwa63Yp63yfi6MkNq5R6XKZigEig8np2",
  "key6": "66BdrpAuMoj4zq1dcBf45oHR6RFaX22uprKT2bcgSEFJ3qUhaEPSxfNPNEQxrGm64QFgt8BQaaZZeZ4XTmBZX7v3",
  "key7": "98rCwYsyjuCxEk2LfYZvejmafR3WxA2sX98j6S98Pbtjwpw6dMD5e3h9gCL8XfQaSnxD1Rvq3gHdn6UWgbzqYFb",
  "key8": "4kGHFUnCURjPXbAAF2AbSok3yRHSgNJfqjKuk48Dad8YcqPSrHUop9X7dnZesm4uCV7Cxm7YqaybMUUynv7KTtG",
  "key9": "JbsPnnM6no1dkjkEop67UfeKkaj15yYjQdwd11S7geFWYArXpqiDp4sYP6DXP4zd7MFfTrQEkWDrTdFCGpTXeKi",
  "key10": "4DXz4AGQnSABkJWAL5He2EiKuo9E8FcnFdEVS9CGA6AqAe5GsHBPEAsSB5gpbVw98RQfvsc4iDq5GADenFHjdgBu",
  "key11": "3K43uL1v6LD2qvnWfF9qnBt5ocEUb4P3as5c8KTNCt4Ke65q9H5B9gifCEbBsX71RJK49y75Uoi2xM4tfPFDfkJW",
  "key12": "512qu5EULt6NxsD2P8gFgCazWANYZRLWUy9NKk8Cr28sF5XtwvHshHyuStvkD4fLhhS55Tj5V9AnFV4HgRagH5BN",
  "key13": "cFrdf2cManqqiM3bNLDuvYSzUsspTmVkpJHmZrSehBE92KrjK5wP1DFZDqTh7fvpRHaHE3Euvhd5nGQBcWHStBG",
  "key14": "3xz5qxmsrRFDmmLQm4gHqPESkAgbuGX8ZKoZBpwyPD3qoo9TRvSPFAWGthKTg7jwkSwJ7EZkCWqbp6wScC4NQCtz",
  "key15": "4Hjvrfdnc5ckBdLCX1jeCEnxveGXM5u5PkUJs3ZakKRyGUjkBzUPn2aKkawnNVnrAHgy41PwJauyfjzDgQC2iVmV",
  "key16": "5T8HwbiyLiFqENoixfg3beqtxQ2hpR9eg55TKifZMkHTysYUstuBMLM8VfHTkG1FDYvHdmVuf5tSuYCD1EN92MNs",
  "key17": "bGjiG2DTL1zoGaEt2oe6ahdLe8gRiaxzUSPLJYoL9hZZMyADU9p3g2vdKG9YHSTfeV7VaHcmRL9sUbMyvJ5NzTJ",
  "key18": "2BVsVzSoKTXWy31HWunePyCvnT5YfqpE7MJnfTVvbdFHiYpzsPQgGTUtimRbjp3HWJC7UCKRMX6ipthKoyhzxwNf",
  "key19": "rm9xuTQQB71vsLh4JnnWosS6s7VNokzHLRNapXNCpF9gW51uX6h7yrsnsjoU9h6bzJ6ZUkpGGmNyoxyqe96HwmU",
  "key20": "4xMyDx7wW5iXv4pyrXeyNUy4GgpFdmLNnRA8YQnGW64hBrtDgomCcbTjWhg4bK7b8vG1r7WpqF5pbAU6kSDsR7CK",
  "key21": "44Kzmmppzp1xeBSd8yk8uKStehBYv3F5vn4swGk7XoZAKmxvFGts1f2tueU15r7G1hJ3GYWwPdJPqvBnYDkR3op2",
  "key22": "5qTSYSjbqxgsAQA9HLrcraf3Kcn8RoPwgLPXr843wsZ3sR8pX8KX8RsqNio7WoLKWmzZhePeK71JK2JywQ7rJr6L",
  "key23": "5PP8GCDraJrfgXLKyfvhUV7ZyhhzhHtu6kUgc4CbWMAmaywfVZG4KzDwuqfUBD34m78W8hZUG4mboJ1jqZRUcq9f",
  "key24": "32ocoG8H9R5oM8rZ3NnHdYK6ZBZQS7mJRXoLz7tU8bGPmDrjwPuo5AFdt6fiSKTrqcniGnQ4XwCXERGc9KR1EFco",
  "key25": "5D5VDLpdxLBR4PnLeJMHXd7QaXaPfMUfC5XWWCtZrG4rNHmheq3xYyCSw4xQeLJ5GAkGGoRuQfacoPz81XnQqASi",
  "key26": "NMxeGtWHaNwdgwasqS6g52NjSpnuu3U18t7xG9E4jH24YELTUAFRtZfR8HeRi7adCRX631T8FysAeAs1zBXky3J",
  "key27": "3JJSNidUBpXxzMVLydJqVN8RrtLHqZtw5XHJFyPSFVt49VZRcqxSQQzi281w6Exy5riS2onYQDhUBmXgW5xAkF1h"
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
