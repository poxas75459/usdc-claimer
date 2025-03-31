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
    "3CeJySwaUT1Zhw68W156SUAh5iHoA1wA2SaFFMeb4Gid5eYcF3L1nBEHFiyXjTsHUgaic3pwAjrzxMJtFQP4UdSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ynnd1TfoTEe1zmKEWvS5832E7dVJ6xjRHET7hEU2ss5cnxgbiZUqATNhDqmMJGhBVwDq5KRjNqaXnaZQYdGLiDb",
  "key1": "2sjWpDiq2FXh7jHYiRChiqurpXAXatib4HihxkR4TcGAFbFrTsYQhyNdhQn3BMnVxbMxzPeE34w8D4FWDrG8Y17L",
  "key2": "2zyrzANtCAG4horMK8KSyT5eu4bLZSRP5hzhRUAtPNJnVQ92wrqXLVBD9iuzi7VhbfR8A8bP8VFVz9mAyarXg3Wu",
  "key3": "3zqUMvVGmhGm3Mbj8E9oE39HPKmXrS9pzWgfzbRN6pCwbnsCR7bBvvDiVnVezVjGQjTdpQazxsqa7KkekrqmQJBY",
  "key4": "4P4jHjctHGwgw9pPXS4jsdSkJ5Qwcohga43hQiKJMk4TXYx4wHbvt2mgLPmdfbHdz3EM2Ub61Cf863f4gJKe5UC9",
  "key5": "2cNAwQAALiRDZkj68BHnMuxYaZ8b4KBq2kqJGVLpd3t68wzmKw2MBgzpQScfFjhthWqdUXKP2AEW4i18EyypURp5",
  "key6": "2gbzGaeM71Pk4gGcfZu6pUUB3VzNrSbj6wciqbtYTwHxH4t9USJwNyT6s8Hd4eSGzdVwbHn1TDnSaDmB2yHT86Z9",
  "key7": "2pmnemwW484DmsLs3Gmkav7iooRyQZo3xbEMMcf58U7pteGdBrSk7pSip6gxSFkQRgrWHH4rwRzEikTfxFsFT2hj",
  "key8": "61BWKYjawuutbmMuR6w8nsKDYKhUFPG1zwKMLiiL7WFsXtentpnBdpDzjeaciN5ZGshcSbQYiyMqsNN2DgMgVxjk",
  "key9": "4tzB8khEAyU8kYK4RAz4HRVHYDcBZRSqy28dNncHnih2gdPWKcE47LDNcNcBUHt3FADKyZ3u6W4nFHZhRrjPgeY",
  "key10": "51m15hSmyNqH1X8Y9itiVqLgwY8FqHcp7UHSgeMkzYNfLtmEckC1dzwECoqNraHeseuiHyofXyVPLvZt3E4UaxeQ",
  "key11": "4s8iyBWqxLqemd8bQzryp9fZVdNk5wQxe3iJUQURjM4Xd1T72usBA79zv2MHxzjVXZzFV7GMpkHuG8dKgrkZ1Fgu",
  "key12": "4nDP7kAbopgNfhiHsekNiaAmFDnHr5KA1sJXvKxf7V9yHcZ7Z74uKtv4Lg1nPhMjaKac2uigNdicr7iVh3u2HtVG",
  "key13": "4Pp4aciEXQ5GH6Vk1eaWqUPp52CSkh58H899qP5ShNhrSYSypc83kwbbuhAPpyLkQEQRjxBeesy3m2TFmeNuncjB",
  "key14": "21KsHXHQ3yqD6YGstRUi4kHeKCzfQ2YaK8vYiFz5omQesy296Ri9hRKEUSqv7q3gHi52skujCeW86ahCznYXLCfM",
  "key15": "ZYyJoaV9tit1kdr6e2ZAk2NJk1Vu65yiLPUPGB47xTitxLxW95YvgsL8Qk4DNyBWdJeD678QJHKSpScyxCN1ZgZ",
  "key16": "5g9Zd3PJ5mAjUbhYDtwkZfvkJmvwUQ4qYcaQCNnhQP9aaXahgKQ5rvcGg9sfamAs9HDhdnCs6BB7itkxnig1ETD7",
  "key17": "5JWMchVfUSj4i4HM2WvCoQUtoPPb9exAZVZEmB2ryFgrJjCirC9gy96gwqcN9z6sZT1QVR2n4vEULb5AHLBsK4Gp",
  "key18": "4YhZtw4WZL6S8gnmCATzD5xJ4EeibPXiAVeMum9P1DLKJe4Y2LEUHUepUytx4s6N7c7WP2WHy4W2pgAjMhxRBvgF",
  "key19": "4sfgG2LJReVJa9SDE2EUPhmeyUk77TaEo5avgypGw4ZeLNu6D1nb1S4rMoSzHio7v3zRHMKrqZqUTNKYGiCE76f4",
  "key20": "3QkExRYWFpEQtieu2HcnFq1nYBUx2MwUW7yNDDWCmroCTXzUFU95eR8RjNZS8fLpEy8hYntU8ZkYL6kgNQ4NMxy5",
  "key21": "5xREwrRvttfPZAYoH1D6ssS3Sa1EUsd1bo3MN9t1CWND9Rgu4hu5twr36CWLZEixR4RSLr4HLpEfpQ7mwh8gXyPz",
  "key22": "2SQpSEnN4pM5pmmRSSocxJrdvuDQi3YMyWnHufADuqxWQXkA7E1mRvaA8DasAQg5sE6uTG3wtzvnExLrC237dfXX",
  "key23": "4Ue1GFQDHc5r5hcqYzCUe7WuXCFTQfwxRFuvSrgSTVJmzrCPcWHtKNiD2r8ywKbcjRGcocW9pnp5eni5GpWQZdkK",
  "key24": "2w7nkSUQEsj6Jw8YtEDnWk3Se9WvcwiAYJnC5u1rrwnD62R9yba82XZzNcJn41DYcQGTqgbH2wcSrte4ViwzAENF",
  "key25": "2FJ1LAY9JHyUcA4tn8H2krVBKRR5MRXZbShvKFKMDpxScj3EBD81FBDJi39MHsNZtj5dhRdCkfttxoEMnk3ijqTH",
  "key26": "4UBHB83D6FRy4dybbNGVcHfut9FoSgfxcwjSh5D2dpNU9qSxh1Rs6NpWreR54p1yj23uNvgZNRzMj7JPLq5mWv9E",
  "key27": "4ErPQvJCUPjoXHR9aH1czvfbuYhbJPsw4QprVrRWmvWnQfKPgJy7Dbak74F6RZstAgZSL5jfmkDcos5mqfhCE3bg",
  "key28": "4vguTqVbATwZus7Wbt5g5Hnn94rhTjsV45QDd3BYdwrhwU9ibrMWdVqnSWrkQfAgPxCf5J5zDrVX93NAhWwxYJqA",
  "key29": "nD2voexNN9VK2yLdi6mnxxzBF8ztNwqonaCY7McQ3fVKX2DffBbPAsSEaL2H5V1XvZNBVnc6WjxtUdE1pw2ABxV",
  "key30": "cEgty6fcynD1Xv6GbnfpSwajcfZXyh9cGjWULuJptExQFsurrp3rqo5MynThCVEdYHN4QetivBnYdEiDFCDg7Bv"
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
