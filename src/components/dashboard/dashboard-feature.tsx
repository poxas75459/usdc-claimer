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
    "2UeyB4NHnt2K7VosBgGuhWTdYESm2ePW8NFBjgqtHBqyWsD8Y9kUbhsmnXBUcjZ4B9obGvVRKZqg7m9JQRZEXjC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Q2742MTH8Fn5gzyUdwJngJrtJsia2vb6fbrQqSL11XyoW5WUep2WgmobxMrUuKwBf8DmL32Lgu3xfKvXsG11Ft",
  "key1": "soD2DShaoRCVa1pCwA27M34712uoru8YL5LAVVLGKRQLsUhA6L7gdCQiKXxMvNc1DHHVKJxhyEZeLpa8E27eghV",
  "key2": "3DuUWwXFz3YzLHusZhtwW1UjvbnpP94g4XTdjB7cB8XgrBiDFScZiVwgZxgsYj3QMbZCnq9sww1mpacGT5h1bbqk",
  "key3": "3MSsrF8i2GmRob7oZQWMX9M9F4YRiocPmjtLxA6LQfqyrHNQazavrtzTi8zSJrTKBCAWwLHC1HEU4nDdCxyPuBvd",
  "key4": "47ucWW5c9BN3Jdw2v9BxXLwAkTEXZLPMvD6riYuVdd2YAGTyo5qkmGic1BAo9MBai9QMy63FThgG4Mp6d4kcuoRX",
  "key5": "66TPG4EwmFJybPaDwuySzFNTR1ABm2XGKXYs3W1mavadnw932UFUwgrXdkooLmCTAwUcGry3X7MHiHvRuoTnQk58",
  "key6": "5C6Q8NmuLDw6YhzPqvG22CFCPPPPh16hx3n8nCYo2Ep6VgU5svwD3Sou8yAzryncgLBLZNjkBKgpTGhr2ve9E7bT",
  "key7": "5cRvjfcibfVphKzqukDneJ1J4TeMaEe9eUjjFNophJRLSicfJb3YdjV9i2XfWForVJXpnCUviCXYBgLUGuKSuuXE",
  "key8": "4TkUsgmZzmexnsn9kNnKXBD9aYsXJ5z5v8cXfZivK9WEwr3w9XVMYg5AzHQTGTG21nh2JRdgVmf8XKXxY6ovzEz4",
  "key9": "3yLPs1ij9hayHSQKERaj5wDd7spGaYjA9mZ1ks3wYzMwwUKYXwyDFv3ENX811oK63nN4coi5fMaW5obiVSwUEkVN",
  "key10": "62rDLKahruo4jBjHr2PCcQaojf4623VghPTYz7gVtbSRoN1VCVTMcucnQajukgyvaQKVRWxeqD6gY2VXcjYzGxnB",
  "key11": "Sp6Kp5vtBqRaEjKp3iVH27AHfooaBt24zNG1fjfUfxxc4rat5D8AEyYXmuMZa6q3oKVfaw3dQDGnf1apTum1NmS",
  "key12": "vv5bZfydUjafqjvaXwkStQ8gfc2ssoNv97iyXyxD9KPtcCz5Fs7gEaqZtMs1h6E5MFEiTWsPEq2F5cudwZ4Z6bf",
  "key13": "2r5eGe7MeNe2VJ2gXWAStCCKTLgV2ACJaeZ7iEgCgYSfHXvTFaAVLVadFLyVmjheXFALB74wnKeBahs7NZhWsdR5",
  "key14": "59xFXvm9FZyCUhBQvWtnjd2nvgLv63LjuvU3zxxQoTX6CN9yC2Xs2sdM6WHrrJ8HuLE5PeYqDEhDo26uGoqU1mi5",
  "key15": "5zF9d3MRVti4Y14LGbsTD2bHooafLmL6AMH6pb42op9Ueq3HrYQfFys9YWzp48FENypXZG7hFFSpHUNEsxJNwiWT",
  "key16": "2Z9Q7uUxmGo6AUQ2YRG9fJoPuJi64P6a82bnQdDAJQoK6mfjAJu899oaDinAC6LmUohYApiuSCyDZmGJQZpyELNs",
  "key17": "59H2xDSdVMxe33wGWJuZXzaBuFtEnaHDMUyY4rCcFYjwRGsvHMtTDcFpHXT9u8QJ1p378GBnrtt9PQLF2vVWmAZ4",
  "key18": "2bqGihBPb41YrvkneKrFbbHCHs6bmCxcBXkGnWxLsed2aNGjpFgiKYgWXDN2srffQs7foXZYwRBpCqjZaiYiCmfA",
  "key19": "WNS5QLNHiwXcUELTNfYsyt1YJUGqKHGnXoDEHCQRK66V5fEqjvqo5j5osxteJq3uPDNno7vx8gpNMHWtskMN3tQ",
  "key20": "38L7F5g1etsUDLnvmHqnbRx2tGYnnEju5wUFSTp32x7ZUUm8Gys2gGPjZt9AdHVkSWW1e51r1rrYFTPydcAauxyT",
  "key21": "2zVnmV7Btox9dSmXWsYh3i7gCqXAMN4B4oPJvVS4uAAXKFoizGmwCcuSqExJeAgXehkmEzedzCvLEJjXP4zjC6Uf",
  "key22": "2DCkWEcpXjEzq6D1wYg8sPcs2gwtbrfmgMPxdHidC4gnk8W32SgzQJConkCmeFWQqwKaQdhVBy7UNZ2j9aTii7Ka",
  "key23": "3h1SqR8TrSsuSTiMZvr2UbmbrwzZR6cQCMid9hymzJox2Ni18YX1Rud7EWZg7VCeunBXACuGAiaiTjPr19RAgt3K",
  "key24": "3JGqx5XnhyJ6kU9Y1S52DPyFiv8ruW1CaAkrob3mSKDZgTdaATBt5ce86Qym6zapbTmYAwdvyCEQPvy5VwL1DrcB",
  "key25": "4R9RvFfg16Dd3PMzGGXhJVQNUzftamVeUqKMttHUJdfmU7272zuM5c2HV9TnZEBnWmSQ2vRNikH1KqegSmhyinJv",
  "key26": "5cNGUnA3gf7JQ1x4jpqRYcE4XPfTbp1R86ffAN5uFsHmWgFZztCfKJZ3TagmSRFkw5XsBgR13UVo1tCa6emTgXwa",
  "key27": "4taPMsXMmGNdX1gVRP3MrtNiam5LMgZdZXs1pS2kZZ5Csqisw5dVYs8FPEb28XhorWtyJ2Xj1KPwCWch8KP62YWm",
  "key28": "3Nc7CALMvt6it8pNAC8wBdcxsc1qsZfhsyQzVUG6B9oboi338698AT19egWFzTKZhAcSpTxKQhvsPLrKM592fVZF",
  "key29": "268DNHRAyPVZg15HFQgvPYh7StAUJcfKvUazHBxT3W7AfaikarorVg4T6B5mNqjYNuwyN8g7rAPGw31ZU1sZbHNt",
  "key30": "uiYWijp9ccUN3SxVihptiXN6ERyahRbcyGkEi8vuE7ugCoZZS3Gkfzga1aWEpD6ryqLR3nqqhxfFQAZce3oYUS2",
  "key31": "2drQMmaxVBHdZD7zhoYxKKj6eaKGq9EtnMnPbWpEnBxx7Unq5nF4HkoUDRXomXvNFZ6TcTv1nD9YbMX1M9b5ZV8f"
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
