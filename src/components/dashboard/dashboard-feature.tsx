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
    "4N6mQ2H3gP692wnDf6dyiKPJF7sLZgKjSnhmgnBE2fzs3SYpxmDkQKRYoJaXQNPDCZYuptJYVJ7fX9hVHu8zvSVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cvDQhjCZTnBwHbSxKfqyapUVtJBFziTDoXcYHpSw6qa3gAjs4EWrp5YnzcPC2GwSjeKZVrB9Njyrp3VsxeQRKvy",
  "key1": "5uZPd8HzocL6u9Fi2au5KsKai2k5wwQEVAymcre42ejzQBTyR9mZ4ej3LMEdLM8hZpmM8Ed9awJLsGp5oXVsrFRh",
  "key2": "4HkVQPHcckJvZEjXe36L5v7WwStfhq9qwy9eTsJ4XzgChMePNFfDu6grTPL9ipr2Q4WNeZsoNxYFuT4dsHn4S6Dq",
  "key3": "3AJ8xwPBcnHMwEqTo26NW2GwnZ4dAqF8rf7PB49iehBJkQBQnxqVYavJYa9BnmYYuFEsnpTWD3nhFeWkxJSFg7gX",
  "key4": "22hEvSJ3AKEYFkw83RhfDnUE6YaCHExThyrYDUd7s3FgwUZ2uC5UbERYJZyFuoNf3x9xJoFcV56fjp8SLAo6223b",
  "key5": "5cDKscmNGWJpGzk9V2YZmpLHhbsWJPKnCb6cAKQVXwegJB9A3dUxQNznVxCV3KaVSgCQDK6txEe8uCSWwtKWHnra",
  "key6": "3QhcoHGx1bsaCVaqHMXCNgaSZ6BEptSCGEZ2dJ8AGJDZMfJGvZu1iqLGG7kE1zHm33x1fkC6C4jLF2Zm8NKNabbC",
  "key7": "46nfYAk3gHfVTLoE1p5A4EskgJAAKhKe79TRirj5S6g7pKxeC6xRJXdoCeRWiBA2kcgE8Vw2TL8pXTVbCj11tCRf",
  "key8": "4VkR1ncottN9vFjZXY8QxrNyNtiQAMWoJFZ4ZhCfSiVoSx3dUCHp81uDRdRN2QSwht2XzenjuUn3GhNMk72gCmwb",
  "key9": "5cXvw3aX2ZZoiukcErJj7e9okR8kECjjXC5WWFACishPS4uYJN9HntXRXsLkPt4N65QwS17WKk1dMwnJ7C2h6QAy",
  "key10": "2rak7GYVfzZ5AEYH8TmNsbyqhKPyHGoFY38dsB9RKKxkdzNe18ohRCast2bEw5DJYyKzoySc5jLrqwwVgCQBU4J7",
  "key11": "wBGXsCyUzM8FbgWenBpoGhg616XySYo4s5rSEfU42UFd47g4GqCEa42NWPtbMHWtZVYZHVHKVjws7yCux1m9TFb",
  "key12": "2KR39YGDmXHS7TUDVfkHWgyYfAshqgAZCDqWYj2jrZFXaboJdq2ePbHj3nUThBrN4iumuBG6MXXDvVHFAEzf34kx",
  "key13": "2YyG6r9XhxcurDEe4QkmLPw3ZApx7JTs69rTxj2RBUgwPecWquK86gxeSD9bmjg4aR8ZzhQnUF57GyD3vExMNxnK",
  "key14": "5E4umW8qsgQ2EvQSNeYxT2vfth8q7wMcnebYkq8SXfX1WGU5obGTDFayx9jH6v1a4Breido4x4KaA8SUYfp99VGi",
  "key15": "2htzDLx7WceS7JcNANznUNRQr2u8C1JLg3be4KBW2bfzK75sp28zd2kLK8ydwVg2fhxFvXpZk6BTRjykixpWhGs5",
  "key16": "4WDPM8n6G86VAtrZ9HAsq3FCutxUZFSJKw8TgUwiSNTrBPGn2R5htcyMJqof32BBCBR6SJsfVuUwmBUY94sjEBH9",
  "key17": "4X2G3GCST6cHMRQsKWkGnfxKK3Ruggv7sYfnWSpLztK5TvRrKJa1NSavyszvfT6uRR5N6veZj5W3PrKCtGpPK2XP",
  "key18": "67W7zFpWcSepd8f5VctpbzrGPTGbLMKSuFU83FR9CVdgCAUskowxHY9S2qEV6jX8bs31XDr3k6fAGfsXKKKhrSFK",
  "key19": "2joF8tbHzixJoL2D8bauUnM78EcYqL9jcnoLk1Cfypb638Z9oVbLV2TEjp2BWgzxxUJ5i3Sg1fDbJKsQVh5F1jrr",
  "key20": "HccwcEMjFjGwiythQWqLGmfKzQAYJCGKUwQBqM2HnjPAtLuVorbsGwZMNU1toAgqPgWLoGRmSeNzJLmt87N8yYt",
  "key21": "3apHFM6ciC1Nbqgq6dho4rz8J7Ky4wCUSSUBfmD59upgdCtHAHKStoQjfNUxrXX1NfqiYDcRRtna3yeXonFQQ2Z2",
  "key22": "23GVFCKWWvbCJxbaq8NVApqWKMsaK6sV7UxyGCrsxETLvZUf5CDc72AfhDhapYZ3xjJ1RtjRQyAKvk5Tio2vt6ze",
  "key23": "himUPjADonQGm4UJ2k75akdDkfA7RVcZH5cdaq7zEqszeJTx8qyUuZFiaMqzzbBWeKA7m1sX2kVLxjgQCzrUmNc",
  "key24": "2dMdW9F8eUdPsngzpgfoc7ym6eVFC2ugfGTytKhrenqfsgD9UyRVpEsNQSZTS5zmVDaLvBb2hHg5qyqgFY6eYgT6",
  "key25": "36mP6wZwNxFxGwp4ZsnevyryXDokzWvuq1XCGin4XYWvJXVtxiTzQQjQmpuy1Uxw6pq88LJbc8BViCSY7hUb9LJQ",
  "key26": "DYovqXCcuUiGQg8BgxuKkfAZvLC91woo4bSX4dtHDZ3H1AogPYa6ZgqLjengD3St7SvRATewCZxTZqzakuBxSRB",
  "key27": "62CpfoUyiQZ6QxvP4ZqHjzujGheAYJENZFdz3T6MkoUz8sqKeJYE7cd3NHxni6hQ89xeqoiFJwkjLDzxPTYXJgiM",
  "key28": "5S1zJo5pfNoRLQdvPHhjzDVdLfdUfGA71FFb2uvffvEn4DqbgNnQpiLDtqwHF8bdXkKeZirhzLahz234qUfe2Gdy",
  "key29": "32hZyDGyk3APTNk3xk5sPsphTm1uxpZ4v3qjrN6E7Xrv55ZSzbLCbhc1uBYKjEnZtmW1rw68dkUHMTbctZ4AViXx",
  "key30": "5x4mbYQczW4WxDRQqmRqKn9kBVMkSkK858SZwnivxuMFbNMXiU6aamhxc4LsCr9KMvvU4TjuhtGaDmmS2P83bhZr"
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
