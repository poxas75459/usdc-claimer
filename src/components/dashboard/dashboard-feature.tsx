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
    "2SQGA1kmq8o6eYY7RJz3RExfSWkpjLvQZ3wrgufwzn7uQdLCkkRH6WWNFDrau28aSjL7hL4tNwBXeYdKMDVf7i12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XqUNv1vJDRBHUhwtQ9ZXgxy9wpeWeLEXzjHEd4WRNErvKCWuiLiCr4fAXyBCNaSbtG2nCtPFmSRtafWZT1N9oNV",
  "key1": "JByYFAjn6cG9RDBVw3w5nwpGtcD43ryidEvz9RGF8xDVadbYHEY6pYLYb795oys4K6dLipAHxwmHoCjm6tGxdT2",
  "key2": "4RBXy71C8XVWwKvNumYEKUS8pDf1tD6GMYKDURKbYufZnZ8f4KqmehFKCQSAfRkL1CWLituEh5JDBew68R8vMych",
  "key3": "5nB6DXAGik32849erm5tAyVkLgZaHd26JomN71hAaASEJBfEKKJW3ZBwug87SA1sFRZ2rvUtc31gpTFs4oLj1FgK",
  "key4": "2qKUiqKeSt1aaxUVZXViwBTjgKYTf89gPAd82d8ndHNZ2fkCsw9rsqQpMeCpvA7uaw9F5tfSGsR6Tv5iFkhGieUN",
  "key5": "64dBn5xUkXQ3Bhbrjqc8hfZ8qLxic8uXquYaVQN2xZsBnZV3ZwdCHuLDRByazeHFfwV94uz65xKosvUumQNqmUoP",
  "key6": "49swQW4EUZhFj3vfkRNc42ENcfnBdCoiQ1xebCubXNxXQKEkwnSZPLdfUkRm2zuoV8yYt8ortXzCa8PSDGqzpRfQ",
  "key7": "2FKf1Eg6e96Lu3APobGMihQMsMJsXA2Fww9omgNJeMAX1JJ8d9fUGzPdda5D6GuAe3ftYt66SxaES9GNCwN4U2ET",
  "key8": "4MLo1qLATq4bxPSsjjKAxwXiFyXG71o7xPYKZ61RVYzc9s2etLSEexLTt9st6NdjFyyzMgNcTD5qFuk6SY9GL3ig",
  "key9": "4eUHAD34PqHGjjpDYzUfXBX8fFdcDNHQAB7JqtzujNVs4qFhhQjRgkq46acKzC8fLxns7d849ejean2E5jJxkcD6",
  "key10": "5Ee7wL4o3VfbDmzFcKUvSX8Tfq4tdD91eFkmfHjXF8i7uWk52ph22iZo8Dhh2QqGiCEamJs6PBQV6fYrGWv1Y5iW",
  "key11": "t2BVYkdNwKr4vin7XeyzYxYKcxXjGKPnssVgWWu127FZ29AfanKgcVw6R9H3KXYRR4Fd1ogjA7vhLFXPewnfthZ",
  "key12": "5dLz6s5dTzecngeniLfp3AuDo5oyLbSvrDb5a8EHKB5tQb7oD4uCb4j93y5hYYSzuqhgaseti72PeiEXJKA8jWdE",
  "key13": "2XEvb7mr8D9mezYAo6GBECjcAAnjL37X2F1jG28VNWbiQUdLkx4cerpMpzyH2ihc3jUm3R583sH9gNn7tsnNKD3H",
  "key14": "3tAhfQq2Y1C49XNZJJNCzobBcjxQbQgUAkvHE3bRpTy4BqZN7T9JU8YjUkKiXXbTcNTmWQ3f9EM8624oVqkasiTg",
  "key15": "29fFqXtZPD8qwq2pDj1f7ZuNCidTEHvapSuTMwpTZQ1Yc6SzmUJLGXr2mj8C7Dy56KSe3eqbMGqPGjDwDdBLLwqF",
  "key16": "3Zw851H3amMgo3k1XQZocDra8MWG9RDqk1krmxuWAzaKpeHuw9DdfE66XwNzfYV2sfhbdLPzv7rY9SqaUmzk8ZbQ",
  "key17": "3S81c5DEEQmSmeE2SwNiZPBk2aBna6e69pxYDfhnLUSiVEzFm7bUbvFyxjsotZejTJKy8HRLmWePaMhYmxb3p6ei",
  "key18": "4TQWd9pzYjiHK73wMEMYZw2krt6AeLPM7H1KPxwmfapVXYLTn5WYffFuBiz2HqyUrWR1LvNyUwZoSZ8oxw9g3gnL",
  "key19": "5v5kwnPYngESYbHgBvEPsG1psMifeCE4dSuLRy1vSekqDALQrhoZHj7F4BnZXh4ibRhL7QjZWgegzvCoVdXDqBAm",
  "key20": "tYK9beR2knE7XNLvf6puhJyzf7JcVLnqUZw5ZKZeih9TuK5CgQq7sosJMdvMyqtwdunSSMnTimnHrviYC88LzeR",
  "key21": "2yWzAcxbDKHYXSfyv9AZXSpPDuteBb3xPujEL8giAUdCkUhcqNA4Ed2ScpEigk4pcXZkEfY75V4urHyovh2Z6j5i",
  "key22": "4gtbRBPPAxeejBT6uLnFtSuYWhNnDmNvtPLdp3CMJPLhGAaRLranTiuY3AjcH3BLNurBRCf3EepXvnt5Y2Yw16M",
  "key23": "2nWwKBU8byxQ3VJbrDppwEjtvJ8DA4hK2HFcSPEA3S8ZPgp3sqrKhUaChQ2ebxccfoWPeq5mdW55ACkBC8hwmXUy",
  "key24": "63nLZzLxno9Wim3916hzhWHGP7faNgKXmq7LwMyutWp4DouiM3Tfb2vasCnHNiM6zdQNWB423y6kaXs9QRLgp7Zm",
  "key25": "2Q6wmtxqKqs2w1DvDAebMNNXSCwR4pgyRws3GT8nXZf1doWxvzYievdzVrSnWeTspafqTgT1phHjJ9TdjAjX6Ket",
  "key26": "44mMiBP32NPm4CoCi2E7FDt3NuX5Fup8xGHTpQ59wXhQXVp1iNCqLTicAhQR3pjzmHD5S3f1YEAmUpH2PHFzPNpo",
  "key27": "3jxDS6Lq3Sspk2qz3nVUaWWwQ7GUw4To9yx6irF62ofd5jJzeEmDeA9UbJ9rFCrSTHuxatWkP6RReKCj7fSaeQXa",
  "key28": "4y4ziQfpj3jD7YTWncDZC5isn4vVie1w4M73XvkvfgKa1kYJXrbJQe6w65a7gJ7v5kAnxnZHae3KbBdB7Z9rsVJ4",
  "key29": "4yZzK3o5Lz87AnKjZtgZmbnRmWJQDEm3vbUGphAVZwkaNJFgCZaMe8SWy8pcYPDn7mhnWFBmAFT8mrozGzGbisEP",
  "key30": "jmRuxmYnuYtSHvXLHFC1tYkhhwMLDjvSrPZD7JVibtCzN5TDaSLTrjejoBEascA8tdS24Nq6Dojhk6DYiKEw1uj",
  "key31": "bPqHWvFqmSd9Vb63BP1PFeKDK4nSuv2Ynnyxp8g5n1HxuNjghLnPrri9ayrGUBANYdVJS2kERsUhnrXvJKx6UzH",
  "key32": "3bZ3WESpfwanZ4Bo1Udz8cmuY11RWGzBkNvgyn6CTXmhVDD7nFRSpWbj1UHynxPzSAzGPcf8Gqud1SLQMT2yJq9b",
  "key33": "4JRG1HUFuFDF78VY9KoXgYKy34mX835rAkTWn8xKGDsFCkmYb4FT6PmAP4t2Ga3ZCbpxooqr7LZknS3DHrgRUfFB"
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
