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
    "tQHuhQZUpX78JGXEdFE3dBgNYX8m5eeuuXTXhUbUmeD7EFxXs1HV4tEduR7DmUbiqFHdtrftQ1vcMHeu9iYTtPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nzdqbnm2EvA2BZbzqcYeSNnPv7dauTia3qRwJKuMVPuaoLaMiRb1Ga2ogZqUCBqH2YaGwvc1dQ29kAroVtWxtVc",
  "key1": "44iPxJcMxwERnNKBDbyorxaWEJQ4sRzYEMqwUH7ir39iVqfjFYq4UPNjDLQnxGo1KuiJJa8T4vD7qjty3yWAmUgN",
  "key2": "2Paki2i8VU26uygLwApaiAQpzyjnLCWPzMA1JUZfwbg62xhR3dJouUc8CHXRryZG96UjUFki7nmf3kLz5ukUjRh4",
  "key3": "RR9RBecZQSHShq4yKsHGKVUZaeGdeWEAwvY9K2Aveeu4i6iVXUXCVh4gGvqADffZdoZk6p5ZdszDhGQnsANrw5M",
  "key4": "3ouATAYVEh1C6VDezy16Zfn1UmNgeUJWzb818iRfC9rZLpR6bGrPQr2ZVxKodZj8g4VhPwaGYjU1UH1fLcrJiYb4",
  "key5": "3boerqebQz58Bfstt6yr8UDFLGejpgBvbsSzqaVqh7BQhp6KyXPP2LEAafbQL2gp4kpg7qDhuVmxH8fDTqWqfAF3",
  "key6": "29UsdpCaBn7H3pW1ZqUpn2u5twQwFMmqi9eEpcjhKVSPpFRMcacubpbScqe9nWmvjcysRTKMseVmnDJeVKuEKZfj",
  "key7": "8NNgQQSk5kNABXaczsNaRkTVEDmeVzH61bC3DnZLYRJbmB3Z7FVwnK1LfKMieq7ZLdAmbAbei9AxkqSzkY1ym6g",
  "key8": "65UiL6tiFrXbycrLkhTVm3BA6Hbm8kuAoDLCoLNipYwUFrUgywwALDYJ3yrE7EW2LfEGRE1fxiJQ9CKk6YWVicLX",
  "key9": "3wQdpu55LzzVujUKtfoAUiRLcNAtuybo7dtBF9hPL3CbJybCthYnAVBkYTpJvjLpQVdnxAGdv8z6iRFfDXy7s4b6",
  "key10": "32aFckMc172mKJWuLmt4iaYjvcSxSqYwpgqJdcSXDJCyXs55Ez5igqjkafAi2GqHbu9YjmrmPCBaDT5sKvd5LMzf",
  "key11": "3wDEEUASDo1Dne2962HyQ8BPr69uLKMbBGK2nqVvizsWmeR7iPqeQbK4xG4frMxx4RzYSeMiSKB63Zex13zWmEP3",
  "key12": "2ygzMuVZmPBqbW9B9ZRSd6npPE17SZhBSVoBgZDrFu3snzf1cLQYhxNBgnWFLx6KBDTVgc1zt2y7WEJA8uvCnJGT",
  "key13": "3NyNzkHX4ptqLDvysDy9MVqj8GBgQK3xGsriU8jugEdHF7rXTTsbKGhBFhaWg1vQdKwiQYyMReoJX12ZFdv8ocfh",
  "key14": "5JqVkUBzzshTXTZemKh9nk1qUWhWzsShe1Ed6fpHMXa2B3pgvoLdkxyCHstJYkctBp4h7gHJirz1XYnJiLzFqYtS",
  "key15": "3W88vx9UoGDQMT7Y3d4AbtCJNHbYA1nLcULV3uSxSjmmYi98BbcXPFjuWuFxtxGyau59dQfcb3n2eNwafKuJHmCG",
  "key16": "4GHkD8RSzEgxUbhceGDErxkFquSUZbhx5AUTsHbw87FXG7LQLVv69ASxFewmSm37wUpHqLLfjRGkbVzhducKfnjN",
  "key17": "2tjHboUkuN9ZnzCbZGc2kDLFpXvvFF351gChUKfuRsQA1pEHLBTRi5TTvtn7bUgBZB9t1y2z9LR5szseJRPGNwAg",
  "key18": "5KBkEKgnrfcWC2kC9U2uRf6qzUsRLh1Q2KLSUkXzVkHJeEL7R8DAutae39FNxR9tPgWeME62j5Kq7Ez23dDHYJqV",
  "key19": "5TemdL83pnqvAyX37MZhypSGqmCY5RUhqcufHdp45BVKP65qF6t5WKjaEe6vE3QiecyxsrNk6Luq6o7dd51pfysW",
  "key20": "2b76RjmMcaw7MfvgnvnT2iMG32rYi7iCFuyTqkfQWrpQkEjup5H199kw4WnU6xakn45QhQ3JaotPikrHJPyGj9Lp",
  "key21": "4aAQdCAWMVoanHNUkaf74uCdSzw8muNCNkcVAkmTZ84vktZpNLGRkWZSpov6HDuWC9hEX9Z1WNCYUbVqBbpsYV4i",
  "key22": "3EYo8cxcEiQDsCtdbMa7XSZ8gR4TxUpi4tNfRDN7fQKEAvN362tBXgjtcZWabXPJkATMDGfNt3HoFPCCbevDFwHi",
  "key23": "41KTeeCrjo4Rp4mqvCP7ffGr3XvwKzRDTCQhV3G455VwdanZFHdsN5edhtfdX4uhEk2rAa4zWYyLVHLfK3GqWBwQ",
  "key24": "5hzRCoC4NDs3tVwihftZ7zxugxAHioCfbAaKsqyWwqPFNByusw44zWBysenKVxh9mM6KbLUNguwuLBk1Ftdhy1eo"
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
