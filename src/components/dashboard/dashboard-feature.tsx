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
    "3G5mKMuPhMGQ3wfeDBGwSndaXqGFV6s6gtuf9hYMM63eqCrjkGYEWnGSnNxryVyLNubGh8vf3mQ6J1TWNQxtvXQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f9SmZjQvG5gFCkKQGVATprhgujPY1w7RLJsf8DvHaaJoTCNFGYunGCtXnEEQLtehm7mJoCvDN5VXgapjLopcQuf",
  "key1": "3kqU3PBt9nNg2Gxoh34SvxVayLc5H7uen6EJMYkQvt4btHGE5Z3exQ3MhPn2C5KWKU8jRMUvhdkhJ1urJpDHtzRw",
  "key2": "3yxEbxcw8DbKFGP2bx9Mkgoh9Zv8zK3L6jbbpjCGzWiuhF35WDG4MbdHgTTMpsvm9mWKLkFxpUxzYD2QWbiBqEVw",
  "key3": "3bTKEUhRoG19gPDMC6JHkftuWTpQ4GBouaKG1bRqzsfQ9DhVs1G8G8RWcEhcxWQ9JUYUd8xoaapEQJpSXvMekgjT",
  "key4": "3dhV4kdEGbM2VbeJyBZmtS2Y31TqBfbZJZA7A31ts61eFotogZ77EkdNCSnCg54eLCmbFSNgaV638CsYFyo7rt6C",
  "key5": "39MHMcv5mimj7an8cna8APBZs1dXFYxFKTny56SdhXhDbRNczSEBD3cjAHhFgw1mRLz6gv8KSEaH5UZrySx2gu5p",
  "key6": "2Kd4ndTX3YjRBHw1cBPUWqHXt21E84hccDTXH24mPYH2bqXvdBpGKxFME45UBPkBPETpETxtoYsLj5H7pJVNUvwf",
  "key7": "3iED9G1MAJP4u9cbQY5ZbB9CxGrCUTLyVDwW3xY3MRZ55zk7bpNW8ATmuCtK3bQP74zpt5Xqh7TfzGrbFT1kuvLA",
  "key8": "4s422eT6WxaL4SZZxZNQ1vJ8t7Cg8MLQtbP5cZNXwzSx6gezf46SA4L6waqT4A7sq16haJfoakrnUBY3Zs5NDJ3F",
  "key9": "4LiyAisS4FnvsMogxBswAtVUzpkadJTZNKwAxF62yYDmiioCwvjB38JJopiD7L9V59tZhnN6Brc4LZMWKmkFqTeh",
  "key10": "5q4iQYdvK4nw3E8J9aqoCGRyGjXs8Gvi4z8bDijnrYRPSuaFB7WPzoSmsgUdXHZckw9Qq3fpdmxhqexjuR9xYeCc",
  "key11": "4iLYiAiNPZRM6fNtSsyLyKbT9dMMo8AXSugmGM4KxWkiPfbyZeco7r4FyxkwkCtqFciQxRqnTzK42YVUctVveJom",
  "key12": "5fp8cxzS6VYMk9mpgXbZ4bpcFvwxSQGBr7tuxeQHjmTzvPTRhx9uWi43g4b6noBbcqpaV8L46J8J7LKjSQHWuKx9",
  "key13": "3mTT1g16rWqtnuGUhBGZ6jXSkqYH1hJnJb5dWQan6Cs3D3fbU2QWJh8sqiXdaubQjFkpNxHs1oMvKsZQyXJo9rGd",
  "key14": "5APuuKqooacLB6qcrLMKuzbQqkHTqhAtojRDmQsJf59PFhd1iSkpZpQE7XoAsWFPgpLrr6CzsU5ZuquDr9SXAM4Y",
  "key15": "3ZTr7b6uJKMbYppriy8FqsMveyCo8wbnJL2k3rK53Q4QimLwfskYnHJiPZb8YxwyE1jvp32Pn6HSRFjaKQfvy2y3",
  "key16": "5y6fqxps3kLMzj14cFab3yH7n4JecjNuTNQDutTPGLkMAszXbAHmou2JoneqJTGB1tg4GkVqPckpCjwRmnYzpeZY",
  "key17": "56iu21b6oWBrSDXfBxLqZLGxmRwtMRD4CrCKkb51tP5PZzXh5d12jQ3QY7Hkjrb2hvbMABFWsgzEUY68AZ8Ub8sF",
  "key18": "461bjAmVWsgaUSeZJcsQ2T6pUPDosrgEYjwkauzFWCtXECMGbGDGEiP6LfAGjwRBUv438rWyY5MvE7bVxocqse1Z",
  "key19": "jZNhFezps8PGvrKTm42MZ5vjcDCoyGHQzg277q4rk2kKbKEqrRBuDzAqGdbEUd9HFqdeNzTs3KZ1dSpxQcjMUBq",
  "key20": "4KLgR9FUQckjjYq3vVq4P5u4HQXS58Z3gJKqKqXUfG5oyyLgrpjGrPpp5X6Pbg3ADNPp1k4RQtVXkdo1v3Xrjwhi",
  "key21": "2L4iw7QczZupFfeuUWSS557ET45xnYCZ4tifr17F7YaTUJjBMcUw9R7JuY6dSHCAAsKoxHg9xUwbyJpfpjQovQHh",
  "key22": "8VcVLpw5D6z4FuvMrKQBtXkUEhg6JvvSkSERonHHWsykd1Rwn8TA9EaRg48VtQ8dXwzSi8mpoM6CP8eo7pq5TP9",
  "key23": "3xbh7YzaW3nrtcbHqQHYWrjM4McmmTzvdzwdt2ULTd6orTitfHvE8ChumB2G6j5qNRB8TJHbyP1ccJmnGXvpdr9G",
  "key24": "3vBkB46bxgwkNTxytsrcHZaLq7EsTZco8mvuwZcVf1CHw1LcoKTXwdqRfQ7B185EQm7apDLQd31PRd6beC9jZ4Sn",
  "key25": "4J5JcYPsSwLhw4N16t1HmHynxrEzWJNrZG8TZPpvyeQipp93rGrZbd8XNJgLryC65H9E254j3Zm1hmXnCQ1mLhpm",
  "key26": "56sT1au261FKsc1hGyb6Zat3puw451V5Ju5cEPEt9sbUugBUTezjrjEQaZGJYA2KSSRmn8QWEz2AGmFuVHudUjwp",
  "key27": "44E7cEjcYXkykFARxau6EpKyEhnzzuLQ6x2ZyfpQbDYXXRyt15seLCbYipfWFR4t9VLuU1M3PcYx2xa8A5wBTgXY",
  "key28": "c41Ug2Z6guNqmqzpPEqcFnf2b2QBRsP5L6sa45v5DhH7UKdmwuY4bTzyQaD6Un3hDV7cwisC2E9nZEETsS7nYBE",
  "key29": "zfYe7sFKsUHaq9td6XBhjLPK9RxTuaygSPrMvyGMyd7YjD3WCVDLZJhBgD3h7tN6PzfNaTdhya78ukSAzqCfyxf",
  "key30": "2vTY3qVt3t77NgVYpS5zYgEtm4wHi8tJ7HgZ6EpFfDRkpdGncKB2gqXyPw7LeNGDwypn7FajrVdSnmbd7KPWrxoE",
  "key31": "43HBZwW6Liiquhj9KavE6KGvQFLazyuEoCgaU2FNVrjESssmymkCkKDQaT8EEvqPCs4nXQkXba9TGEw6Ua4cEmXi",
  "key32": "Jz37H432RTqBVDUme8RC6CC3oVF1y4DJfdPcra1FicwD97Vy4Jv2WyiBQmNckdy5phykAMLDVsEnGwSKpShhC3K",
  "key33": "4z9unEa1LGmHHPWVAQxEcDd3BMAisctUzPs3seNaiFXoh1dx5AkDqJyBYsv8KyPFQrtHqTD4refYo1JbFeYcFrEp",
  "key34": "2rDkGgCraTkhE7qfvb81nRQhLYCNV9hkdkR6pf4TzFRMjKzJGbWKgEWqVSU1XHZ9Ujj2nw3DJ4VjeBLBUVDizjbh",
  "key35": "Atgjcj78F85vRQDGjuaQMnCoDNXikdS465AedT6uaBxTVcMUSSKUortHUEugtinFhDqC7kTFQu6w2qGkFo1jzRn",
  "key36": "4KmzYcDeZdBkzRzSHaTt5iG7QaiYuaZo7SB2sNUSoAxLkTAr1k2wjjXAqGMBNrUWMATrvrP8RymR3RFFLLDShX8P",
  "key37": "2LGgcVmHq83iQBNtbpKuc2nuaMTVZTgTM9ySBGBEyEaRG8xhVCBTzSa2h9MEwUDznfyhJhJyWyyJ91P2ppUYRUAk",
  "key38": "aqrUkSkVa1zhHNyQoUtfNJdjLGfMswpEB6DpMn8U83WrbftAsawBdh75bymVKBTpG35N8FEipR1f2Ut8bRGXaEE"
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
