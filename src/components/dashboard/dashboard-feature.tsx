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
    "3p7ZnTzZK8oDymJR2fztwhcFwS2sPYGPs6XGRpDmFPBHjsybLyj3tZBDcgwDy1LYf2NjvGYHtZ4FBngheq6XZbGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K5nyGZUwhB1VzXatRiNU6QBCKnaVWxqeWWZDhqWGQxGGhArjGReMqDwE3AEiFXMiqHNS8fFWEq72G1cvnYFP528",
  "key1": "4bvKaSohPbkzv5orYYJVsN2UJfRCg3BgueV13cPqkrwff4ZWVnXkv64EWxFjCRwPCMhvjxUGByVS7yYjakT8nAnY",
  "key2": "2DsN74QAHZx7MsVpXHf9pJ6GQYzjPTuEozLFxtfK74rmdBaq12dwUT9Q5YvrJQqAVsKJfnVB69jFjnpErnV6zJVr",
  "key3": "3yk4UvH3kh9SBGbZtJGAT3F3SnjM3uDs15q6XvTSRd1KNxaJ6QVSMe7xVoMCCc9D2WbxkkEpzDGChDbpc3nqgqB9",
  "key4": "2v9j1i636aHFRUpPB2mxMpVUfYYqmGW4Nm93Yi6iJfB9Mf7MoEUJ9yk6rgPRwZj9xqZuvcuzGa4zhZ5kV7XVqcZg",
  "key5": "4LMsRHJG3zT6popGMz3Ae5JmPdXTVXScWE2n4ZY7rBNakv1fVAocDTvWdSzGkajYTCRc5RzJAoXZcf5eGb6Cj2en",
  "key6": "44CdULBBfFHvfC8C6SHywYXep5jLkyP6DUvWLkHNjpCcJz5nshtykLLZvwjMtRaxxnbfQSwqYhkZj3fwQqyJSecU",
  "key7": "2PNwduyfY8MvvbGaWcPYm8BxxZrRdmiwev1Kq8H4iUKu6vkQqbG6qXfVJZDYs8MVgE5AoxQDAw1RscMGXrjhGo9R",
  "key8": "sE1NxWKkRbQCSjNvT8HwPvCnAkXsPRTxcRcSLe54EpLrL2vK1D2e8SEMiahff256LznVtfPyP4fk2d2niTmzW9e",
  "key9": "262gXuAKei8zLtchZ4KPERwhuzWFhd1k3Fp3kGUmh84pucy46QUaqVsvTaLFQ8q74isaDpDommWid4w7ZQkNGRMP",
  "key10": "3jcYjVoBmhFf5uJrfzk1c75RHGfJZ6ZkSnuBerfXEdZFKjWGkzib2US3mTdbR62TsUndxR2EvzEfHZTLD9on6trY",
  "key11": "BTDa8x1tHYoCYXTbuSFuaixMqqKBMx77UvRJ4CEk6cKzhXbXm6fNvevpkxU9YyZCZZJueJ4FQKnEbL4giHzjreG",
  "key12": "2sPBY9wXHbTxJ982vD9dUJSuv8YRCssVAen2HRBYECACqKrsxpJNrwbhvvphEWSWuQVzpHesri3VF4JaiTu6ZqQK",
  "key13": "CFKGrvLLZcArjJ5So5FkdsLQwUmEhbKcQzpUeUcyDCT4EgmvKen8WxUvsBbhHnaL6CXgLH9kEeY2CCfb8AFdNbC",
  "key14": "53kFJvfnj8vXMQkBRQYx98hQS8qVYjvwn3jKefLKUwdkgHF4GtCrNSDhFcC6vhoRRAX8YTt9KtwWX7sgR1izjxsg",
  "key15": "5jpCnAUMVqU9zdmoNu6oYfpT9dCGSs18YhKM3aZgQcH926oPH8eUM6ZHfZmHcLT3GnqpSfFHN22cyzSNsruXW9hh",
  "key16": "4srNtbsijyWGLQoh6mQ1GaYYPqi6gRDsu6AbG3Lar3ujngntYBvpLN9wCp8JugTUPor6KZ31mb22qy8WS2iURP5e",
  "key17": "5JZJm7GcR15PfPJu1TQ8WAzFpWHctSw1WFQ1kjdZJPb8pqxafkdsAhLknk2mHnMeuWUfYWR9X1SE32EczxLYAJxH",
  "key18": "x1CtqUfek4CqfreQy6XD6i8xtREQVheEUYxSdLvuCmpU4ej3EBNNqQ19mzyjXATYYU415NAgTfScbRfwKfa9Uiq",
  "key19": "4RBWFgvBUmQSuQ8JJJcBWGP1nUABKS3u5N7FmkX6edgK4NQdKG29DwBd1zZmvJNFYHz9ijDpBm32LiP18dVnNfpr",
  "key20": "5s1dp4E3rxjhgvWzHhqGbQFVPrrZDYNkibgYcvVTdjj6sBnUfQVSZf4tEZDr2MQkgWuznXpn3LBDWvA5C1LAHzQ7",
  "key21": "2YDE5KbbkSe2tZv5N2NvCsUBYCt8jHcj6HkSuUHLsHdWSJouwMmdWdo3G21AxuwTqWnE3BK51w6PhLcDkMgNsmAB",
  "key22": "4qotGn8ocPrRcc5TP82i3J7qGPb6VYKAW2GFko7sV7irSQLm6NMKtdBUNtoctFGpogxdUQCgRXs9u7RnGnA6Cd9s",
  "key23": "54J7dQChRyYmMJJa3z4DFBznDXKutuRvD5Jv4BC5Lp9CE71mNo3osmWWSCyJKoAY356w29ZHS3g1BjEoqnkxe2S6",
  "key24": "2Y69ecSSTQqBz1gFLMZURDqrSXPDbGZgvmHgePUp1rgiiVRVMDLDmx55E9bCpqSKsetfS6PD1yWsWNEj7kiQa7Qu",
  "key25": "5XWFhgJs1wwZtwTnMg1EwmRMBQGF7Vs8MNobGR1JPDonXSbDf8i9gy3FyRqZDMMNcKczrtYy3JndgerULuE3dePY",
  "key26": "2Nz6tq7J6nL5E9oueRq6DuVyCPtokdGq24nWQhjZRALh8uCGaKosDAA1F8gk9YbZmh69hBG9yHRzR7q6ntuDyQeg"
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
