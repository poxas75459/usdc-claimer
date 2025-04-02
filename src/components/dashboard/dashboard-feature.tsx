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
    "2YezVM8LowYEhw1UyirHsEios49YQxgZHEaF3oVR5Vpegk3F3zBAj8anLuv8J833ekHPzQUS3ipw8ZwPwUbrChnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NPtmwvmiUWDbYxBYWG5YHwnPBPEaer6WKBMvkr8euKfHTkTAwgMXTdThQZfrRCN9dfpZcrtza7KGJCMsMkenmMu",
  "key1": "52JAqtNw2hqyPvCy3xvUAjDb5H9kaBEAteVxHkU1626zUSWBpvhzNahtCbeVzFzaNQpQoPfE5zbkcyckdCELLvAz",
  "key2": "2AhVBWwhsqW3KmWasGx63qWJ3NCzYm7af6ia8AWY1aBZ3gSBR79ZDmeK1z7iFWKC4ASkpnE7adgkmxj5GSdLvDuw",
  "key3": "2iyXCPc89cZSxsAYrAQ7tmN7C4smfQpUHRnAQ9xLrJgwniHFh4BFL4WcG36cUvMjoymjzcQf5BLmQFFAj3XVAsLA",
  "key4": "sBZXM7cvwDfgQmSz1fjb26HKP2RVRizZpr3NLycCStNsF9Bp2Ab8Vc7gWtfoydg9u3ssBxHYCwakcZeEP1cbgyW",
  "key5": "2FS6EYZBYH1yTTUW67D7pwLBEP4XH6Q6QSRejmcq5dSYSzYfU2XtYCcP6wHS3DXA4hBCEG8EgqoHYe3SAVKNNqq6",
  "key6": "3MUpFMgenAqRqzACxrRgjG2wExuHfmHMVz9pgCm4wipKxwmfQSRWZdQ81g4yfAAX8cnN4WMVyuTCFGurbAVAQWhU",
  "key7": "3gm1jHyj5UzPPzwfVTibqkA9j3UMgfdSutija3ZX6GPyF5goYPWAeUyg5DwGyA4xDcuHkAvjn9FhZz6TZQk2apXs",
  "key8": "26DLsacjAn4GmyPjBZBzc5zVV2jWdgKui1sBBMTrEZkX889BaFVmwctPhDSEG1tLS9BZUNekwhWJw4dmvYq7oq5F",
  "key9": "3bkFymMbp43Pj7gG3aYpWCiFtprcpn861PQMLpSUDPE524FNuR5Ck5JBd4EX24kmXBwVGHX75bZBW3vDp8iuLq8M",
  "key10": "5fQJeZMsbYkrrhTgbyE8KNspiDhMf9Xh3ic4Crtqop1Edt4bK4bK5SzQbVzU1TQnD2noxov1Rs8GzNXVKH3Q5bVY",
  "key11": "3BExgbXzcAYh9BTvbYXmDsDm87ZUi7QwCUSFPjVFi2Bhnc8ai4z2pzBBRnjsD99hAYu5aYJ9xukne8Qufdotrgq7",
  "key12": "KiLQUWf9fn2whaQbHQb9K4Q9wUbiBikBoGNE9rLMpLWPoDLXe3sRZCkKigw3RGkkWQqt6jVsGQJi55Ex9ofSSAi",
  "key13": "5tucGUYKz6gGJaLbsXk5u1GRo1G14xzqf2Yvua5DEZUN23pDFGRNeyx33sspAisWrNUwvLvhtGnAdom8CWuVfACt",
  "key14": "t6KQduuwH9rFXa4Y5H6sJjN29Vs4nPQTvT9ka6tAAgoFeXnUFpm9xqQBaMC3zphEht8kx4ynHYmKLpxzVQRrK68",
  "key15": "3eFLoxCjmxRTErJ5wCCEgjurGEVsrErnUjpv28hfidgcnFfEofWun6iJDDCnr4KtgvQGXK1RHvcwbGXjHqEJLgGD",
  "key16": "5nwysRjB2SCrika36H5DD332hT4DyrYnMffS4xBDLCXT4Rh2KkM2wc8JAJ6kgiCM2H6N4CudN161AtdtN3pPiQ8R",
  "key17": "4VT4MLTsWanKpSpz2sDQfb1JvibVAMFPCPxYN1Rm5sFdqj1xowhVfg72fbTjZXZy9C7RJ49JwkHqxZvF557cKdpF",
  "key18": "2oCWH4YJH9ac6nhvYDC1woNUHM3yASDG2rJ74zKJytxqi1uDgH3Uy6xydgu1MNZyujpzzguPrgeCrFkiuR8aUKM3",
  "key19": "5nMbvoqpC7L3jDBdhQ4KFSr6uzUyEjTrGpBNy6xYxABvPgy7d3M6KMMvBGVJ5Gs1FS9HBXt7cR2MSwnE54Q3QFrG",
  "key20": "65nvwLe7uW3sekYdYKNWovq26oqCp3aGFTeGoxZLpH6655XxRT29pBGznVKS6hXYeqUFvEKy9nGPJFUe4tNuwUSK",
  "key21": "5rtQEUH996TvRqa7eM6jt69ynhxfaECEi1EsqapVWuGnpASkhWuvczX6qFAh6pFFZ6XYVFYqop1SEZnk8ZNc6GjL",
  "key22": "3AFsxVPJwzjkXFR1FJCsx3Pf8Ht9HXv2FvZyuKBdjSZcBmqPLqh4ZY6C7JegrVVatzxECHXRXxQrWQ6gasyDSd7C",
  "key23": "5BNSBmi9XSSjVG66sMN9ZBeQQzq1C3WwDwBfBnJ2UfofzbbR7PyS7yUNPGCaMdfdN6EAhee6y7YwJq7TpNWTg9L3",
  "key24": "2jXk1CyV8sneMcgSqE8XZPNkpByxipQSzwW7rhP3kStuJppbjBxiSjdvBVF2LxGYE5cwVnjPp6nrkdhBHT65bbYh",
  "key25": "3Sf8EHZhQ17XE6sWc2Uh8mXoqDrgB6EqL69jDVifW6fRxy1gqdf7gKiXj4XLPzwsf5bdm66t8ZJWusgmwUkGCnhQ",
  "key26": "bwHH4PEx7XsMpq5A4v5VAdJXqzFCtmrcTHPdNUYtWyyFXmNAvwrkFeNkQkqh1hdgGAyPumbUumv4oMAprcBDPW9",
  "key27": "MHEmtuWs8EUn9rELSVgSkcgWMAXUMdDKxxZwvKTC7ikcgBYXv8jgpEVms6jnxRsJERnAQNbU9LDhK5DVmFSVP4S"
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
