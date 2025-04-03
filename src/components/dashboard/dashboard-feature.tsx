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
    "5iTvJsg1q9YsXwFKoUSNqAZ1W8EU93hoWrQdKK88FfbvkZPCZWKaYHrBcdYxS3BbNSEZ9H5QULNDR6yN2xa8BnoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CrFthhAzxhwYzhZ9CXfL2SZpFiN5eAnb395GhHPDeRUArTZXf9ryi3Lw8HH3grHqTU5U6f1L62Nvafc1fVVhK61",
  "key1": "5aehbxZKgGdpWnpRAHQLkRmjfzZfH53MnXaP7HpcxGqYbxXx84NbX34N39pvyQyfh7pZe7mfbDSXyF4cx3sKoXqk",
  "key2": "tb17DqYkQsFEHWG2xoW5jzoN8nr9m7nV6j9tpkRW9pjoRTQZWziXD7owixunbYGPomjxrQsqUKFH2cU4GR1TTJC",
  "key3": "4x3GAovimPjfq2uC8iXXwB4GbArfspv1NenVenDoyxMWxbJe7noEjGgsAMoBorUwJkcA9JN3nVP7f1jSTwjhPUNb",
  "key4": "5EPUpsWgxc1wkBM42TcGKo4mv5STvN5ntWE5JCvPu1UygRG6nVc4kyoxnZDq9L3CveR2dS91TEczeXG1PWypEu7H",
  "key5": "4vhwoNc365S9vXmwRMTd7tdYGDrz5zzdSXAmefiZ9nbGBL8ovHFPAH3QvBYmZ2ZGzsrmScbmsEw8R1kii67BPdXV",
  "key6": "22wxrMU4GQ4FCFa5LJD79sdwJLsqqMLCap4xdSors8nUr3KoF6uKwAhJ4KiidnUHN6Vn4h1R7zpdypi6vrrqk46e",
  "key7": "5XqxgRVtwzpCogC5QGyTfjuaMASiRdvU2W53jFrFcPR1xpFidkFK8pyigBifn25adTtgeX8QQAX3wnCcoHXVjwZ3",
  "key8": "TQ1W7ZVJXc9xkAbQJnQhDtNsAKLUdTdSkLWY2BRCy6ugtpReVTbTeuCmjR9AzfinEXr5CEg3sc4mAZjoJ8NtNLC",
  "key9": "3RFiGvn8ZZmTrRgFaCAG1bWKPrFnXL7peYusPFfVK2fbY8LeuSdCbXURNiyydEaVcA7ajoKQfCFtHppGuUAEwCQV",
  "key10": "5JKH4t9Sq49eKqMUdwuZVw39XUi5EkECYe6S6pMxewxzU1CGmVj9t9Ajp9G1WtUvsM8obCRkQdTeQuPDwbnDnr8H",
  "key11": "2mrC17Z26d38xUBDv3wXq5D5iddgnDjAfMMrfyWqovyARH8RC1HxAtzwgZ9gt8QyDS3na2spJuigxNKhC8QDLMEo",
  "key12": "2wyHZYnswiAtgrmGZzD3xLvHJmx13SwxxfzHSmTSg2XaJr2par7ot6v3twUN9bMDTTX4ni8AdbUxuvstpmhEfnw1",
  "key13": "2H3UWuJHweHPU21W6QSk23tFaBe5WTRHmRkfKLDLC8MW96QYTLvGgec4QwfS8uJufovwFVkrs3Zpv7qz2ATCQXAa",
  "key14": "4GpFxwhdj4tzwSwvPBApyfTt1bJYr81fF9dAJhhRCuva3VjZrxzBPuBAZdXaMLKmZg5WdyrTSgrmgpFUkDqpYb95",
  "key15": "5gVeypY5GFxxFJe1YAb7HsMSZrNhcE3DNGoWu1ZUSYqAzD4tG7owqFpNNZfRtJBeuWZ364ZukTpdos8iR2Y5eYhi",
  "key16": "4jLvjXQSb2ouE3YCa3QjY9GpiDCNMwoHPqRpTLKd2FmiyddfNxzsM54ns8Sg2vQRtHK5VifTiK2hYfWJvEpdssAP",
  "key17": "7CNxN1ao8Aq3GnvAg1YD886YcJ7kZ8XC6PLWPuALD9ecXYaSbH1q34Fc7tfCZSk17RTHhCQsAFeh2cCYHVbkrMe",
  "key18": "2r99zqM9g3tQh96yY7Z6q9uprzuifGiNLJzBLYwm31wqgsBqbCGgYv1iRF6bysfw5AvdmygTUWAaSjX9sDPueUH9",
  "key19": "2PvgGsiatQoyTuyroyVsAEb4JccS7kLvZEk1qpzmktVqRvio9W8A67MLQYcyeP9CZ7ahgY8Zx3CXjdt3qA6GkbQM",
  "key20": "4fgN9QTPb84GtwJp7U8KvNy68gVbSiXy7sMBYW9UWcpQb9pcWCTayQr1oC5xef7e2kWNzsZfyJjfRXfXUobpso2T",
  "key21": "2aCQJUbquDnrcJzY4gEKupB8F7sTEiTpznPehcduVbWEo2vYMb5DnMVHJ5CJ5g3bjJ3Ggu6ELYHur6TBvE3CwJCG",
  "key22": "3fdFKJ6VeULAweScuLay3ecRTm6hs8aCEiKuS6NmhHpg6reC2hEU2xTxoMyzPPbMdACavYSyovDyUBpd1jrdfTUZ",
  "key23": "3mfYsCVHEcpATeDeNDNmVq3CVYEP3UMv96MiWum9oWG2dKAwfeEhFixwoQ8m5Nt5BJDTmuA24QxQ2de2PQNFWzQk",
  "key24": "3Cfvo8ZPwqTsbPePNJDpFbbDtPPiU7wXHJzmxYDzXFe6JEU6jSNFjFY9T7uAo4G3Kio97DyVaQVioENnK6ey2Vpt",
  "key25": "qei1KJLT2emAqqRhS4zJQFdW7LDt7Aac2Kwy2kS5v2nsN5zW5mBePUP2cVoxTE6v3AmY7DVjeJKKWT2ghUdpLkG",
  "key26": "3cgdegGzATBkDz8C3ja6uv1G1nJiGApnWCVWT43m8YTWKe7GfUQT7nvDswDrhxs5gNw7EnD3SBHcpLVF5JpBKhD",
  "key27": "4XoFTmSxjMxKfmCgoHe3EV9HWabYB95d7woKDGMjA9TT2dn9aBpxwCbcp6vewBqtA4kngr2hKNyPbGrkLbDN73gD",
  "key28": "2y6YQUFM5vN93AVGuGdrt8qmsQ9ziBmpuXWPVkfRjNQsuXRU1LAdUS6XNv8qaDkZdAzoubt2Z8m5tMkkEhMGSWhR",
  "key29": "5dKBeZDW8Nk9Hd6J1YRvzGZHx4snPNqNnDUBeDaDcGk22Ux2bvtk2dN5DEhzWFcQbHDsfAB5NF4B47Tc5k8d2WWE",
  "key30": "52BvXSwWeeNKxWNrgnp8ZW8aMKgy53qjNKKaw1i2dV9FTmHZQLyi2QWTxbp7mdkkAnPY9AUbBNHtsXZzapuXnVuh",
  "key31": "2opXTqTfWwdURtZte2QYQyfsHz4tHUNaduYnPqyx7QtJ5PAoEAJ5iVt6tPeT4hZF7Sd75ZLhgwqicM3BkgHCrnjD",
  "key32": "4uWr6vZN3PPKXFYDFF21teHX6stEnoQ63YyhXt6EhJduQfe7FnnPccHDjnWhv8BhsiFUVn1hMfuZuwRJGUpdCafm",
  "key33": "5n9m5EwWR6dEWfu5NERuWizvbjoPxbWGmQgvWEErjg7nVscCxP3ndHAUN9sxgbiS8gbKnARjaEKDArfXkGKwfXYC",
  "key34": "4TVs3k7z5oSdaT8mcHxCoCxdcyhdTY2jViVxJKWujZKbAJ1Ebp6UQr8csj3i6ns4mPSSvsYprjYzTcXePApaEbnY",
  "key35": "5B5uvTSWkLL3steeAFJH3HFoYuc8qg4Nc8SVyHVQwj9U9qV5AHURvaykpuF8evtygZNp2Yq6GKhhuGrJtx5L5xSD",
  "key36": "JwwMHpivQhwc3pyNz5RiCs2aZoj26po5E2wVHYNRnMC2dhMTaXTSdFb4D9qRw8ATUjMQ4R3sGGyQHkSywwznk7V",
  "key37": "3YLqmJLRXLJPsMADCNVTyp7VnebSjMLJmXntGXwsPqFFSEzU9Vo9SB1Xd9XrqPLNjEVNSiayFSmcWJbnPrWgimJq",
  "key38": "53DgJQNpYt9bgo9AAy7oe8zY6ct3rbKHfsEbmXzLyL8N8y8VznawafHWpd4sqiLbDn7zniS48B6Zgxd6r9fgFfHF",
  "key39": "5hPYAqMqgjJa7utkhGTAKsjfpXkCgaQCrVQtSMinKjHiP82C9PyBjiUkU5rYuKHnzRH7t1d35Nw1qRrtGcBXb7oV",
  "key40": "4cEupWiNT1CjCBWpzUcuLX7foQGRKh17ajp1vJrCHecUbEhK6AU1WmFm6f3oAuUezKLef1C9idi5Pp1iSvT4yVeh",
  "key41": "352zw7fPGVqxfyGPkDad3ge7Xfgoj9mgeMu6uKbKHUGy9kvo3ibUAv8j7tgyFjXtSJHWZFbGatmw1deDxhzp5BXi"
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
