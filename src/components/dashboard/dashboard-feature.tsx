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
    "2nSucqurrtjzB66Bw4V24eVfY9QpGga3KcRYJtFMNqaXSJ6LzcDBnkMoCdep8mszpmmk184Povow5npzBDjgXF3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tKY3BCoy7yRPVjiDQLJxrjRbkUPfGVhbuSuas7YMzfcJJcPQsL9X7TadiGwFvJvtdirfxpUdtUQ7gbeHvSGpYTc",
  "key1": "1SjXzR7GmZLCc5BrqRvnb6xH4sosTeFrRL7ueb3wC4YuJBp3aB7urjQSEeUjsAwKtdDEVq4E1oSwc7dk4pB5BEb",
  "key2": "4ykhMmZU3Qj7AyMTJFTP8ZBn9kRSWCqTNvgFshv4YnVH7tf4LW17zZvpXDedcxtGewqp4mhaj8JhcewwFsiP2BCd",
  "key3": "Cn9zJzcMkmzVtNhM6mNX5dLoM9V9KgGB5YuyyANe4oFvnV854wDjZ6Y2P8cn9CKkXyN46CDA8rmA2Ui7WVeNvTU",
  "key4": "5r4x7qmcZEQKNfsmu9thSDmB9ibRRme9bK2TuwegVhAXUTJUakTE68KjhUuKXHuTwXjQ5PkXgp742ByS3qFRwzgT",
  "key5": "3rLRg5S18RETTdkhVrnibyJF3Sm2Gx48ZxYTQbxhTL4zksRvujV4YHTmsibPDiqCjF9eauRn33SNA1cKDwYg2Yw5",
  "key6": "65cQSjpxHq9S5k22Zki2anczZVDcN8vEVVReuJhus4A9js3VFaMcRof8vFwot7kbeVmGutFMps2EtZj41nYxQkax",
  "key7": "3HSs9WELY6i7dRcEBw3peG2FHsYvG4ZL7avYMQotzXf515WUGhj4mx7zE8aoSeJhpugNC18v3WsMoH8RJFYkEYeW",
  "key8": "5eQP9a6kGVk3gg11UmKMzMsNgSPPMu6QMSaEShDYRXDAakmobvURBJC1tPc7w3292mDpovwr2HguBk8bkaskAssg",
  "key9": "41wGsKVZpe6fzzpxATh2GLQAwkp8xo95HaZSJZjY5oGbC2W9LXUzVtEoPu9FRzU79NyGebRDqYzHFyoPYd4AMeMH",
  "key10": "4iMeh7hk2a99Dr5a88Jj36iJPNbW9zkqGGHFHywPhWD4cw2eWYr2Z3KvJVKpu1KSjWcZoDd1Np1YKcj7Jj1367ks",
  "key11": "4dTyahhnL7BJsri8ZZb8FL9Be3HFtdpWiQaefA6ogdnQU4eTcVnYBGp2QStmnYQkZWXDYyV3cFetYcbMzaRN9Je",
  "key12": "4zdz6h5ebeVTf16BfJaCKGzELu59wSytDmPfMoRAxJDm69XyqcDubr5pJgcuujrSHvkSTWznW6maDsfcTFVjDTjG",
  "key13": "5e7jW8ecX8DwTUbqFYrmrQhAchuECY44oFzfTqX3ZYkxxXnLbiWTqzDZbqqpVpcTa6iauDEfmVGM2hBHEPDuS3R4",
  "key14": "5KtZVTebCAt63oe3KVJg4Swz2W1g5VBhizsiwnNHq49xGDoQ5965Zqhr5XAodwb3Ef8SzvY98eU1qEQ7gsce1Tw9",
  "key15": "5P4otKDzK9FnhVFjHjiQ9DybwnPBdP7zehq2FKi3vCe7q4mGvfA4cQNPGao94nGPLuBPnBvppYcjaZ4AbThVAvGZ",
  "key16": "2bw9JPT1aZwMJrR6pk7LhVkVw8pc13PwQRR9a2gSB5EtNQb28jRzG1odocnHbnpaDNHTxAVJGyijKYrGc3xpDdTq",
  "key17": "oRYHwrpH9wgHGvhQUFXkuoHogJnGq3oaFeFb3hN9pwjPV8iazYqJGKK918DpVwDfUN8BwdF8tDP9R8oz6nYR38X",
  "key18": "4x49orszSRJuMqPaF8d6enJ3YXMesxeZGx7ux5GhkQhzu4dihdhWQMuyDJj65qbwMspLyQWtHQQtQfin4BoTbXWG",
  "key19": "3BWBBuXvbTaJR6TuyvN8dJbaMVqnP9mKSf53C6218JyC6G88vA5YUaS5bJs9ZgEPzzJ6UzbFqgrL2JnjKv3yCioe",
  "key20": "5tf95m2QhgBw2iXytiWbKLD6pun74ot3McCtQK6EvxCbvMzaMBu16GXcM3qvddFNwZC1rJYDaJopQbD9FJ7vVxFH",
  "key21": "2roKtqWYA4ecAwvoxwy8atnBNTcKwRz2vT8qmVLvZKrd6qmobWp8FtaTLYd8C3sz1zyPeSdzCGnPqvk4W4pEXH2G",
  "key22": "63Qggzah3yEV4aveUzsoAwMUjqSuSYLgih3JDxX21BVq8UdaZRusX6M1zN6zs8a2ktwS7smiAhSV8u8miJG2c7NY",
  "key23": "4yoDaxwYJmG6rMfhJcU2yhY6iHeHRmFTHUa6WzUeHyKR1HbnkTe2h3PPKSepq6qDk9JkgQV9wXuELnvP5cn6RdAH",
  "key24": "23PToDgZ2aiUnfPSx6J35eTqFz83Cz1PJyva1yBXVJVq48AWLeg7kLnjwuZX2m3eFzg7ogvxtoN13iadAgUvUXam",
  "key25": "Kx777gjPqX8ozXBpLaMuXGF4mbh168Sk9kcuh2HaMtEq1aY9eRnoGofkFyDXYewS7aYVAcqjWg2DXtc4WZM3GKP",
  "key26": "5S4dbvGdL4dCe4tf1sniKje97ssqoG9Tc66A6mSbCzCSBHrEWe5VaiXRdfRdq1TtrSfw5LJajB899DBeBbJm1KkE",
  "key27": "2csFsPf35FSDyNb3EVLZaopwpxN2z2U4nULmrf5bii6Mb6o8bxDoery6Q7EexTG5epLiebqR3oawKV3b3XKr7iuV",
  "key28": "58EhUPEoRM88yGqvWnNnXPBLbiaaAUEWENfG44rhr3gT81JVToe7dBSJzteNDWdiVZV2XuhBtwmu1xKFZE6p37pt",
  "key29": "7wwnFtmK6gpZPbduJKsA1RwNA7MCWGkKQhLaa5nmKvcxsCER9t292eAQknwy6SA8swrh5BNqxvKEdUzMK5Kani5"
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
