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
    "4Ap5QYqaH1K3xALTVwHNqFaPqyphkvcEdZkGizjMeiHTxxuqrgXxE1GWyNjo61ojrGZ9EEqPFdr2muUYw5XrTuDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QVnuKpv1KcNop8Lyon4jbcLWwsAoF9h3AhKCGpj1oG2xzV7AxR8atoimipZLuM4PC7qPVvMkCxNnF2sL5Jtp6mK",
  "key1": "Db3jccRMGHiHTHexhqCokEFj9NBP8XQCMWCtBAq75qs32ppBRgSYjyRedZYeTY8yL7rzvw2RMVspiuFX3eyEiHz",
  "key2": "3mXknXZU7Ycyyaudvp5UU9mDgXiZPxucPgYEF3qoTuQe7r5LnKMLcj5cDQdCbyFAG3noYMKJonfn4sJ1YYW2GCwQ",
  "key3": "2AoHt5QEbabxibiZ1zBFoCjkpua8S93TGL8vbfj54Pd3kHa7shpPzbKLW7n4uqEmV81nigY6ZAAqCjLoYQVy2YPQ",
  "key4": "sWCYrHEV3TbuiaAWcYVAVLTZcdLPD3mGGYmcpYhhsVvkGn7pXZddwCq5EEUQ4bQSQfAciCWqvVuLpvNqtejJo85",
  "key5": "Xc4XbcfGNHDpoKB2xsvxL2CDFsZkRFg69QUn3AUbRfAh5Y8UfWxEXCJFbvkUahuw5mCNdR4DDUUvndAqvKBwZUz",
  "key6": "31XSj2dPrdrufXgFYcZJBr4Z7f1Sjjaa647MpzvtTCseMmpXtWYpE3ZeeBVn4VahUNeJVa2waVvK3NYs3ktAwknx",
  "key7": "31gNmjzLuh7FyMUF3YCLRA2uJX53PUsJ3uquGddVRpSnTwAQyqrhsrSUm9tGpLRsUyEYmF6fAKxRMtccAFrcMdY5",
  "key8": "5b5wFbdCjGU16pfdTeZfHjsxRUcxoqrX8V7FtuDpitEy6Y2BLdr8Mo5wUfEv9XuBbYEXkUXnozYqi5tuuMR98RUi",
  "key9": "7RoPsVKfRcVN6Vcbgw4RyPWX91YTdaposiFPC2TKRB8LRrxK7D4rA8H4dUitghpUv8oeVZTQuXYHwijDXZsoJtR",
  "key10": "2Jga2p7QJ6EKQNPGjSkqSYeAJuHrPV4zYpt2jBT2mrhTRrCWwucYHXkZr3jaJQkCFnMEm26aaHQtLm2ny9iu8LK",
  "key11": "Kx6rQU1GoWWkrxgU7J8tQiGR8ed5vpJACxLB7tfRmKpu4fL6wwL12xR5iLSt7Ne2ZqFGSE7mfXfRNjAXYqVFQ7y",
  "key12": "2zhmNFLh1u1xZohxZkZKtW2X3Y1JqAdjxconRjtR9HKwv5wuV6h9HYkY83sPrjUjasotmuB9u8LSU9K7xdpKwYuY",
  "key13": "4nEne19qajUGjAAhwksC43Ae6oFCi3d5SDcTXWp4yTGbLXnZEr7W19j8VScnXLh1S8hhWCD8fzJy33RC4LMFFGHg",
  "key14": "2tTsK7exLMCFPzenYf1twmGzcvDxUnb4htm2zkPHXbDzxZd5Y3CXPskybRAHN8wkpg5awi5AZ8yWedKmQgw8AfSC",
  "key15": "2hNwHDCxxjyDBEzswVruBvRLMc3CpwGBGTnrEvwPBTfEMTfXCf6oKEWy84Xc2b1ShxddZG9fpje2LJDtYnrq37cQ",
  "key16": "52CPDHNn2icDjfXxM2Jf29bdgBr29KsTZEtmu2SeWJ3uX2EDRRdiRCxSCy7Y1MufaAc64c6NHPbj1ws8KaCqNj6R",
  "key17": "ftdDkScP8gnHqxF35zwowseGzcASB3Fu6uBK5XUoAtzXAsBMeFGxaLbykUALrSHc26BaHv2ZopCRRp2zUyPDmAc",
  "key18": "2q76KfEbuXPe1T7WXjy1Xf1bZjmrSLNtaCxJzobUESC1ER6jSuBJQwiADXfYWw44Zs7XwYikkSeLnrQCVdAMJ69r",
  "key19": "5nMk4bVVCTTwiTnnDXkyn8sXHFyUBBroX66yvn1pQp2LXBWHvqsFVgE3Y8t6UmfKoy5dv9f8GcqZRGqjnLhnbYj1",
  "key20": "2AehbihD8QVsNMf7fDWGoEU726JG4WZVJqTBhNRNmHeDRUe5kt9pNQYiNJVAKoXN7ZTo2W7jy5qRECF1evp5hL5C",
  "key21": "3dHAEh6S5Gio6qMewkztSEzz66jiNwNRQ8ZAVxWaAjeiCsttT3vg8yp7poZEFdFs6DdjPddTUjG9doL2qy396XK",
  "key22": "WZUwYRk7WQrVHoDytELq6h8kRezoJxdMzdew8EerPxkj8v5AscXUHSgXxF5dMeymLpvnMGsQ76KGYkZumK2JjaT",
  "key23": "5rZCb9ZcahPWH1T72WdoasaP86dApGH4zhHGe3wU3wQTnF2XoqZhvvqiciNqH53jDTd2Zvgz6oDr2BNmKwgKVbmf",
  "key24": "2D4pyWurzjXwf6NttUpiXAMuWJeF6KM9X7ZtPKidRJ8WzGaZ6VE76Jbv8om5YN6FYWCVdb9XPY9vS69unAEZjkvH",
  "key25": "5budQzshywi7M9e5ASCcBsGeNRXzb6WtA3R3KBz3YuHFibvHzUXLyTfsUYmbzNEJXtqiS3bMeMCu7E4iDDQRFbUy",
  "key26": "49FW9FxB4puKqtGkooHGHUgJSrUgwDrDSzBboo5Fa83FvGekkD3bSdNuChwPXgBWoZV8c9XfFPEtaszTBecTzFmZ",
  "key27": "2UJSjS5GPVqcNFgosUGUxJqiYqVFcNjP3w1h61cGnLJo5anxfeUXURLA9FYrMmrQW6zM4QtCWPAKCj66gGnvgj9c",
  "key28": "4XYXtPizFjQNAujorNNDJxSuNaJVaxGpVhWKA6YWY1HB6obNp3WjvnNwud82wrVu9KyqRcYWfNw4iYQJq3LZ7yKZ",
  "key29": "4gkaL3jqx5yYEv3wRzEYVR3VBZvY33kAfk9iTLXWngvKvn25ohZNUFFudE8SpcsNaph1Z8AuL3EWn82hMky7n1xz",
  "key30": "3tGMqV1EhJQjw7u2Nqxar6KFASYhEuPSjbaugkQbWFvjrdYjD7RY25rabvywsnqQML46LJovSTbz7Zre91ftPqzy",
  "key31": "5BHQxbfqjJQR17NmLRQqvwxiLfDZLagP9rSRqCJxD1E8dFFaPFBhNcYnfk5iVuUmVaC3DdMUpYvJcwWt2wV1R6wU",
  "key32": "pLbody78Q1mrjcwM5yFXk7LDiMEeFCwLX7UjSsM4ektCHotKA4DFirBRsd8zgGHCzC7kGnMHuhDm6yQrS7fhQj3",
  "key33": "3tUFfbJegaQ2HLMW6aaqLMPrTPmLu1Fhq6bAEr9bREvdcmF8bBHhwpeFiuHpzDUPd19scqPjmBJqnaVMGbuxDRGT",
  "key34": "JoM21JoXr4J3yiJSTq13FpUBHt1B5dQFa86mVk4bUwK7JrZfUESQciWJcDBiy6t9HseQ1116j6boVZ9AKcjEWNY",
  "key35": "2VEjNtPKYiPtsZNCtmGDHx77onQ6GQ4mLKSwxwbS3jRBgyQsoJRjmKE4DFo6EuBG5w61Bz2SnERvn8YpvgB4AYtW",
  "key36": "51wNNQBVeWbtLG9iwwMHSQFwGCzVkDq5VXbNrpyy4vdG7ZnrbSoWTcebsFZVyfvyUVEiPwSUs6YPbGFCcbY11Rkp",
  "key37": "oDcYmtHpeDnsHNcPh8dXHSTFQBN9aUeaJjY8bKSKYmTNFM683LpMoKvuBTzBaNgXkz7LfZE7CWtQx23nDpYPsq7",
  "key38": "5vHGTrWAcPfxPusdWHbX9xQkw1ooMSFZbUJJUiY9noCcRC47iqHNBRUdBSQm55TLuanYJHYpuT97nnKFxFW6Xpjz",
  "key39": "5xcjgWwpfGNEb5MTJyLGknYFFcurmQp9j8PyLvG3xJH5HXfdwFQJkhffvrgx114S7dQsQrav2Wn9bEFWrTqcxp21"
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
