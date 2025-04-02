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
    "2ACAbSz5YrN98gPFwJG2FP36xmGPAbmLZbNdRt3NXQHkjMH4CxR8vjk1J17occbEnJJoCyy2pNUrCQyV17G6HYAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ahsEAssS3iksQ98RhYJ1WmrVkaETwBUsNjZWTeQSPGJgfGeEaaCBemCFSTQ8JR4zu56wsMGt7bg3TuFqSezPVL",
  "key1": "4GjryDDqz2rKMNQse8GZZ8E56X6ZU3Be6Rzc5zvDH3z1gYBcamejW3qHhfenLFZpFVCAdm1qinNhYiRWtKKNYKr3",
  "key2": "3s9wkZJD5oB7GK8jgLPB2EoqSo5u8AyrH6WTJ74VWRyhzwPZzHupqmo48Rd5RFEJCPs4shimk7qenay4SAra573w",
  "key3": "5n4CFXC76QUnuZsV6GBSr7rtKVpBtWQyNj4TjtBCTYo4iVdQYqGsghRkhUQf7py8cTH4yRWBdmeHBrChSf3tGaCw",
  "key4": "4M4QXGwdBWUyhxSsWajE32g73B8dbb1E4EqTiUa6c7VxAsKs8dLvipu4EkWW6KC2HzTvoHYh1yjRWR3Bmo5iqKxy",
  "key5": "GbBwZMc1hPDUtvDVBMXhU56xeaCuqtYLvfEkemtyWugT1gHj8T8e7uWnSqAAMuURZExPDBgB3QFkCEux9KUF8Lg",
  "key6": "3AD4HrcQHBoMqCFzE7uaMqHFXPHj4DeXANrCHfVZCGfihLjQM7SJ3WwSgnmKxQw6jz5GTeWP6H3pMMjSRgQyJJUb",
  "key7": "2HmY84GT3nwmz9L5nYvJ7tacnzU5PWvS9bbr85cC3AA673zuxHy3bwCWWy95inzjW4kDdA78KGFR9kkhacrPjUzH",
  "key8": "vwg2ik4WC7MvcjjaX5heZJJ2ADqsu9EmxdtFsPnySD1UNtDjmcz6fwm2RbsE64bA3ZkAAS9hbQdYygH2Ys8yCbk",
  "key9": "2ziwYUN5kBaL31y9pnEoWMkmVUpT6wgCNQCwZ2DucKR68XbzAhm3obyqP3VAmNwAk851xYXsqbDkVX2nDSBXhFHH",
  "key10": "53GWC6ffi6fPeW1zhQg4qPZnZaz4c2kw8hsLF5v64m5apHq6ncswviHeC6TQdFUignS87hz74zb7s56Uxn4nf7S8",
  "key11": "dKYymCR3TffoA4daRNqQBmuZHJPRjV5eZrpJtf2QRzxLXRvKs8xZbhZKbJQLWergAwU3BxGWKXRuZwTuonCGw8y",
  "key12": "4vVgzbnu3TrghqFiFwMMBgC6bmgcAQNppL14FqjF4E5QzzX9moFVURkYTG7FETss5XVUbRkXaQeiXZXwYag76sR7",
  "key13": "4zgE3DEpLHTqzwMFgLZV1tAJ5iQw9R6rS4HLdBCcgRkeiAmXxo5pSsm4ihUyrDRLjLMDs35yEMQxSdU1JwPx5Sfh",
  "key14": "3e7zAhNamKn2ezAKyXQVMDdGk1HmJAUfTiZVTcmD6EdYprP22Bwnh5npYfNqf5Q2Pa9SeEoWu1iJyXcyxoWodHdA",
  "key15": "4kYSfwAcRKiCapGgbM4p51Sd1zV8ndrvqr9bBEibyj1TFRDyEU8cuFVAQdKQGB8fR5uDFXskzi4wB3YCcb8cchgC",
  "key16": "52hbJ5xX4dLLiyQQETNgpuvmdH1JLLLCbpKEoaekHZrRnoWkwatL4EKaXCyvNsUpYJjJsbWpwVXeCAsYQe1Rzq1s",
  "key17": "4jEhURAJhe4H3Q6oeadet3P6BZhU7DbqjhM9xWGe5Qsnoh2jNUShrYUxoEjoPVZrHUreUh9EKfX7Krct2nTowJsx",
  "key18": "2rHZvSZjrfLKTEtHFeUpYdhf8gM75AVW1Me5rpJKzB3M4iKrvkY4qBJC5SsCw7gz75dihaPWVWy4WBsHVwXt8zbd",
  "key19": "5rpMV6urEmoRfFR6et8pHnfL5tdskyC9Yg6Gnn35azVX3ugy7YDCgJ4rGv4NQq9m6np6qtBCZJ5DEmEb8DffzeLR",
  "key20": "2MGsxkxR6spUYRqBpNpZE78BTPFoe9ux8gzjXovDjozyy5mC7hsQziJpPnvdkt35qDhCEcZD6BW8DwTbnDZ3WjWy",
  "key21": "3iXNkSP4VrmWZjJfsHJdRyeS4sRo7vXARSTdW73rsPXnbha9g3hxEpeCPgjHMtvjhGN4LGQrRGavj1ngYUgKLM1s",
  "key22": "BXSNNSGhhEgJiPhsdn1YCN9zNgXm5onCjDTRizeDmcCiCfVjpGoCGBtbmog6bh253pVv2FyFDChffLsZsrakKFW",
  "key23": "4s7KUXrCsxV9X6SCado1VGbCPvFcVsrjyV8NxoqxJT4Doj69RcCwNdT1n9xwAo8wg5gAqWyCgZ1ncUt7c7coKKtW",
  "key24": "3A6eGybGQYABGbfpQodErTmUL1rEYoL7ggmQZRAc3hXmTKo4fhoddJtUfBfsToyxXiiBR7pTrE8VnR89dAeZqsUp"
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
