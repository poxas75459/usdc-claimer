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
    "3DJ4yuR9dv5AkZYmgQKxdDBELqJR93ABuN6k3EvBVQtFWZCUCJrmfddR31hRp7p6QURgzKDxJ7Bkvw4CxF1TZ7Mo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tx4LkiFQebDEyYUS9RCS7UHUCbem7Dyo7bt7pbQJg3DSjTyfmee9V52fr3o2TR9eGhyqXeHXN2wyLLMArz1xfaK",
  "key1": "56BBH7L9oV93MfegZYwvuKVqQGBefHiprAT9SSa56LcrptWqxhU3jvFPFxVSm9havMqkuN1uwrr58CWi2FtrsSTV",
  "key2": "3Mzt63B4rcuDMdoQav2oDYKvWYdTeZecMMZpXtsGDVQfcJyaSGa9G2zw9QY852sKgauAJ77ChWj2yA5dHn3V5xoK",
  "key3": "28pxZ6PLr8UsVrT7g77QwjpkzvkZhH3bcSb8Cqo6SjwQAyGBQiYJArNa9MhQwgy7EaSnb5u2SwPzH2P6VxxqYxqk",
  "key4": "3ijzery8tZNGHHsPWY77vU4GxntbpfFz8FBrp44W9945Z6pZDnAG2bGsmG8DCbJub6hnvtHkLKjRdeHCx56GV8EC",
  "key5": "4uet7wj1QpPke4zmgdNfkJoatcMpXCjDXFZgMGdMqcu9GSihU362FAYMooAfDkTbSUrrJNHBV3ZzLvY7FTqL8eBH",
  "key6": "XbXTKdpzJ3CGrApQ3ucdgNXVhgYdnhcKG8TGwrNCM3GcRRyWwVPNPqqzapWdbwQU5ktEAjNSn7qddNYHwj3CqKa",
  "key7": "4vkogP3boBdGfZcTvcroZD8SbETmDhnBnzCNGq7jzivHB7G4AE5J2LTiVxtNJLuUKwDPGNB9v1NRrAxSpRd9x25Q",
  "key8": "DFHsCVY8YZYN6Mn9y2BJ7NZPFuGbV8qkrRd8gxq33FRsi4fHyZnvbnenyYts7GhDRYKynZLpxYuwyEpsFaYU57R",
  "key9": "2amWFLezJaDY4Bq6LtByWM9E19rSsXY2ohae8rVeFhPxTDD4ioNL2JUkfPv41DMacVK9yjBbY2vySkuewrt5XgPe",
  "key10": "4CEjBtR31K5juCy47fFYNJ8uiPRLrDLfevpgwMBQNbJLTht69bCiTigAJmG38rg3JAJJu1aWjbQxquL2w1Ma3Rtn",
  "key11": "asDfDYEdUzpuLoxzVqa1YduhpzuJU5732AQQCc6ugifPYYWgroWPw8TZ8ARTABCuWBt5hdgtcfCzX8UGk21jsxh",
  "key12": "5LBR4mRd4nrHSNE4bZsavma6dp9nyVbJGhjmhg7etwtC4oTUv3S79iSyWihXjD6FEfAQnd6Yes7EWMVv7Zkdap2S",
  "key13": "5fANbugCWhLp4QkjxVn97N8R1XGSe4zQXtFwN6wAzKoKpddFZwqtpTvXnABzBnKESTB5GJggkhEDpFZKLkoni1ch",
  "key14": "3vWPEHNp3negygFJQaZ7Vufybn1Qas4BjSEKY2CPMST3nbeM26XpC1Wq3pEahfF9V2Qqz777jXY6dzeN43TFVeRM",
  "key15": "5iP2JNkdYLHDGbTrJBdCWxfkRrgUxKF7Ju7A7aRJk9J9ZNsDe4WFqM52TaL7P1oNTSnAUWeSVLMHThmAihf7JDpW",
  "key16": "fobSvA4twxDiWVqHKFAM8gEYvxYUaa3xD5HmswFt94kPDRQqHdVUz9HaYKQBfns3JG3mvfbkVwNJ69yafzCJWvt",
  "key17": "5uAcSJBL1waZ9L4gUQnLSyQ9xnxahgdbFyaWJtVRcTJofX7Hhop2ecxAFaD1QDrqMVGX8TqsXayYXxu3p499DKKm",
  "key18": "3RJNqWF6TKzJsT3oqM3E16Es89uSrPTYLgUJ6dfuRzDyk1JUjrSomCAUoxYshg7HZrXzR8vVtaCNUWYkYShnnWi1",
  "key19": "2p2hduQXbp5y3DGztrhbZPwqxh1NBVngu26zm3TVpetsU3dG684hZqiLi3f4sudWwSfrn61EKu8zqZmnxrrooJKJ",
  "key20": "UnchfwaDdWVGxeD7YiNePrfhuqykzRf2XDUNKYBmZGBmedcoHmjWN5zJbcGQearSGqN7vkMuDeNMezTQkVoTy1j",
  "key21": "HtgPEBBuFpRRpen4VuBDx9qboAKyuWrdYWGtYAFXAG1w9tWkSVwSmW8t9Qdo2GFaQEoq2CYE5VAEJjeZVGW8UGB",
  "key22": "59BNGmABEQavy8uRjXJ7Zh41E83Tjb48uvsa59c5THiuaMWTE52j95ZGNrMbg3suYyHjEUb9gmdRazZAFGvKjPrE",
  "key23": "23ne4iY5dfwh8xdMJc4ps6R6qLfKtAnAmauBzz9Fz9urQJpD6E89xxpLHjTA8Eh2dcKUXHjge8czdvjAbbsx4Tx6",
  "key24": "3TRB4PgnhWvJkg83F7ufA1sGVXeS2qUJa9rEsqw44gA8LQqMW1eoHwoJXWSqpZSBgJkxaucApgHyX2jZgKb2MvRM",
  "key25": "Qw6xfitUkM9S6t1RZKVpqw9SPrSSWz4WMqPPe5eKfoN764R5KVcCqb2HRhqTpgiSaEs8oexrbZDB1zdFR1b4ntV",
  "key26": "28zUuoK44h1Yt1ojyr5B3QT1P8Gk5JpkJqe4dy1pmT41w9XXYgXZVpr6EUaMXAJWFm7Fjs4MCzH8CBTFY7WDpJuV",
  "key27": "3Yht22vmgYQn2dwqDgNhWbqm6484DufNUVaj4iQPbXfUFjW6KKWzfi3BU635c7ZREC9VcrfTkZMtApAB3mYBUWDh",
  "key28": "62jCG455FirXSKsDTDR6m2XgR42dD83vHW5pwpkZL5dg7Eotz6W5yiES59XAJv59aPSDu4RcLJZfUakgWFUzuUz9",
  "key29": "4EVv8dTPdb8FpYAPy3BJBYScS3KBUDFbfqCeSB3uHcFh5AU6fB6zgcdXLVxgd81Y6EpzvDcFWuH14BCpmViSkbYc",
  "key30": "47pLT4AVmzy1f8kCeXU1kVXYqbehKvQrgzoRMRE1iu3hoccvwmhaQCxWeJAYeyRj4RPByvadZ6FLVjHDpw12ovon",
  "key31": "vcs1W6MBksUGyBzhYppxkNxs9gP6qGwXz9aYmohxopVUe7fTEiXuS1wXVuJYKWzXY51MKSjfLvnRopBJeWAz1ne",
  "key32": "5w2nZ7m8FdoFkQPQWZD2xaNjke5RXnAbYSNef9N319cTT7ookhJkNX69tbhYSYteoH3qVLb7Zw5cWkdqeBEXjqxf",
  "key33": "5PiFgTCZZ6LYiLJP2hZqRBfEU8YUfd3tAZqW2FZ1hii11SvRBL7x3PxkqUBSAEr5ZUVaapmcosS7NZg1nAeQRyVt",
  "key34": "5GAQvqFEBjNcBDzXzkKGCtXCS1dq5NSknjyqsYquB1KH7WLrs2jfKU9aM8Kahc9i7JY1UnP3EUnd5UDPQAzC7VCq",
  "key35": "AXJTwyRLzCZoAy8Nz3FG9vJnRbi6sgoEYs7LZ2u4PwV1eVPA7gJFdvRQzSnYL8wbgoHX99jmr337tbGktQGV25e",
  "key36": "2XWotvZPefnABczEcn7weA5zuLKoGAhRtM7mSq2mWHsRYwgWrvz1rZCFzBMvWSeedwHKKmSqPZswnbGGgKUhhi6L",
  "key37": "3t1srQEoHf584S1EGEfMQmGQgy1R9YWPfExh8oXLF5fK5RzT1j3N2Ha5fLKfZXxoS8wWdg3x39La8Wayfsbe6fNZ",
  "key38": "5GaV2U71pZJwkwhBxxKcBDP2zMSa7VtgJ3dTVMLULkfhvz3h9Ai6ZusoY2qFiuiVMKY7EKHmssDcCFpWEBAWC298",
  "key39": "3DXkJfsaWcVqpWrFFvVmPo4E1TgXFvWVDWwcikpRhworHVNWKyMQ6urVN1zuiK8debHaKZ1BqcTe9Tqp66EKeKtR",
  "key40": "4AKo8AWufe7AkWZMAFUhnUn2nkKqFiAdSKN8D3Y45amrhWcTxkHcPqSCggmgWYgwe6hkJToBsLcuUj2jgRXb4jEd"
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
