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
    "EfL4QawHz2P18rnYEKjWjx8RbSDcveiRP8wJSfL6SMYbHqFsCLtRXvRrLw4QqYzzuUhD3jSGz7iLVhoxTc9qk3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jh9R8uUiW2JqeDUgJVhi77jKSMVcamwZPMN7divgG9GZ5NRkidebMvdMN7NjGDC9rm8Jn7SusfxLhWN14gk9jMT",
  "key1": "9hVc4XyJaxjAZwQ44Yrmef3c68pQYfxZSy1DnN79mzJm3p7WSq1CtKnyfzbeMGyvn7PuGzCkRXfqsZtpJiKo9ff",
  "key2": "3kcRY36jD2XZkyowsDijpzuTUHVKXBUieXt6VRbvTaDWgPjSVaxVwRxVLkyfGpGur28FYxgV5AH2PBDa6WazFKCp",
  "key3": "3KSyhaxkpwpWfL7GMj81xp61A775zcednAmFMs5BNmbGqwwQN8ULsUn79NSpFN1p8DYcQTqErNMQq6CXsFhyG2oZ",
  "key4": "4XrgPVTdBzmpqr81LHS5U7GeqR17ZRdhyjLpHxzNMm58E44uAR8UKbMmszt3zYeu8ibtGeYstFpJBGYHX5mEP49G",
  "key5": "CXbyhBKChTVsd61sJVXQ4uvuVDFECrdgNFhaVsMBsA7CtUjZVjH8PEoxSUagw8PviWApuqvMzH4eYdXSYneQkkp",
  "key6": "5PHDJMK7Vhs8i7g2gM1RcKhMdsLe3Qi2U2BwkUTpb6xhxRfB6CEzWGYFyy9mHFX8LGxqvKf4scP4csEuUva5oEhi",
  "key7": "2UcuCF5WSPA2JKcw62D5RTVXEHwuTfn8rVjBzMLEWpEA3DqwqpxBfmZgewHtySxqyyM3mjti2Li3P6BgY8MRXXck",
  "key8": "53Uvyij1pm7SLBVLkQsqF2TqC6UadsQpJHU4Tb5zp8GByuaNr5aLWs3EdKB8EMWVxk4PE4336sjmiCVUYHXPQGDh",
  "key9": "4DU5BQ8sLzKyAyH2FA6KgPq9jtWomGbKqECvaxneUbDLrRwUvosXggATwCPWnKBSrrquYn3niCZzskPvZjt1Lt5h",
  "key10": "2QgYo7FoY6TuzQYXau4xBfTANQ93CE5pfAMVA6wmkesVJd99EfJNYf7aL7jQ6FDdLUgEpxaN1VRjSgUW6pvnd8pu",
  "key11": "3BnqTshPwizYYz25ver2aPq9xJ5SWfd5bKYpHsijdYQ41UcHsnvSNPj7oFVQ63x9Pf4LSJPucPjJyDvbKh35U4QL",
  "key12": "8Mrrkq3kEv122rFQa2xYXtW7SGCpZUpHosd3GGN3oWqm7hxhwvwXPmAZysQdc8xPr74N6LJaBd1yJELGMqxZP73",
  "key13": "5rYiLeTFyAAzaJADGwyqAT8CJ8LCMH1yuqN3ovNmH5r2T5afWzJZDgPMz3jMBipDgx5Ff6yVbw8nQw4QLGbzRwtz",
  "key14": "ySYT6pZSLGKwjoPuQ3F8VFGYGH3Lg3rkVqyDsBxriqmND9JN59aKPtyXZga3eydKcLLJrHE2pPVLwLa2hoftkXT",
  "key15": "5Lzh5piGQiqASFWXKa4JiZBZW9UdfnrkrXSfGZpUdAKxbAHLxhoz3cX6AvEBZ1VzABFHVDrJPzLMgvNRzkZB8hmW",
  "key16": "SwNcaN3bZkAHu35UfDJhg2NfQ8JS9Bz4VskAEdHxkXMaTDeTvFFfKwvSfMGsaR9H5UkqkEigke51pKAL5nt7Brb",
  "key17": "2MLR23wDiQjWawpfWVBocbsrFsEA7CLAGuDJJ9zqExhBLxuR9Woydk3AhZeDakBBMGN3FmBstC3hu3bSCanZ2a5o",
  "key18": "48WR1sutfeLzuLZiYkx9hagpCPbNWhiVaMYXtx7yuKX1vsAmTGymRJpSu6mJFgT5Srg7boDyRdBX7eaDNuDXTzvk",
  "key19": "31ChduyWheqFKVNqTCMxun3AWg3LBLfKMccDuTyQUwcuC57KksctWpdAFK3qQde6UqTUNMxSs2JDxpCtG59k3Q17",
  "key20": "4ZQZk2gZ1eX9K7ZyuEEC5BFfjSVtZF6t3B4TfGPRh5QKjMFYWHM2a3NMqeXqnbJ6MRVYR1daCMn2gh1GFmXxJBoP",
  "key21": "2KPqoczHxrQrkji43UAVLrmYDXUihm9y3R6LRNEFGxLyC8DYSSmV7zHDUFdrwKLX1fGNPWJgNbkM6Q6HNixnS7Ea",
  "key22": "48CrUPM1gpSyAsznqokkCNSR8ufKY3aoPi5bvUbKVzD6Wgjaxwd3iZ5MqUvHYHWE9bZE2iVKqdc3mXgUgPzt8TQa",
  "key23": "4NYT4PSYX6Suy8eWyWUBH2SM6QjyafFNGkQhgPjt8zMWkZBN3YgMfH9ShGsx9jDCoUcbHEguMzdR3VWmCe3KTmtb",
  "key24": "385whXhsHH5somyTbic66kZJrZyoabpR7qfRunWbE4WPLmguqCYYjEkUwnFEgXPKx2gFUAs2ZgjwveabtXaBV45L",
  "key25": "2758Y3UFGqcxJswHGNjRFTahg1W8qGdSEhrdhuprQ1dag7WHuyvRiK9Naz3yR4nvtSYauYqptRvULLUc99hFrYeH",
  "key26": "2YfPraZ2T9qgCNKFC7Z22HpPQYbRxWfjNqHQn6QeHRKbqoTP2j35MfwUqN75iLJSMcHfaJXRnRkdHZe4Lw3eYbuc",
  "key27": "27Q1nNQVNJveNmdKLKJthaHnhH4BJJH4Limh6tU4Tji9taJK6uTLQq5U13aj3tjqTz4KT7HYoJe18iB2YTRyAUQK",
  "key28": "LWidXetXftGaHmxcTjfuW3MAmbu7iNjeBDt2AS6HxsHH9tfwSoJVb48LTfr28zcXpiyjJspXrVErLPzhLVAn1i7",
  "key29": "57AWALjX31hsj9CKf2pMDWoXGmqUEVtuDQXNNrGjkZQf6uSgHhtSzpyThF3CxbT8ZKYyFhV2hCLtk9oFpJ91BRwt",
  "key30": "5q1WaCN5e9gES2Kr3bimUWk3cGfBvHyN1ZcbYK9zuXcRHUcwTnTr9GTGhTRfsa93GFuXDtAgca5A7wj2kmrX83Bh",
  "key31": "5wkeYW1Tho9VQZzqb8pYWCxPGYEzCQUgpf8FyGmjuu5qrTDDWt5ZMdANwqNugjF753rdGoWLZqvtn1HPAPQAM7Rw",
  "key32": "2x7HXBhssPHjrncp6AVv9Pfz7ytd5CLLqAy5N89F6kHuypwzYfZL7rRPSm72PeQYghjqjNUwUDSD3v6MRvqbbcgV",
  "key33": "57GUu39J6L99KzEjNvVKVyi8RjsbGhkKFS1H4nL7Y8y4TQXNxM42P62kdMY4DXdXN8BRmVweCyXj4RdFGRT7vFzX",
  "key34": "5YLiciVb2ZU83Ptr4PgzU1TLSZXnpgBeZwkjeF2U4ipEqRxUSuh5mA3R845N3rjosrCHGAq9mqYbYc3hGtYMsJ1G",
  "key35": "21WsC6QqxGdzFnTWTEt8RZUFCwGM9E557kMMvp8KpZu4YvXHzmB4MBYeB7ApxMa1bqjA7HApFnnqCa6eqSaNDX3y",
  "key36": "gkPb89aoi3ayL2oLqTH4M9b3VhWN8yjGk4rFiFqoV56CxxZogFceQ2D7cU9ESYLRJwVu45gPTW7aCDsyGUGV5Sv",
  "key37": "CXd2nqyNehcUaDHWjm5temSHvu5yyp8zCXLKh7oX9QqJiMArPAYH4Jb62vyKA7V8ZcG5Be4k6mHkvpBBDChQYqj",
  "key38": "4HQgJJgjzCUQuSje7WfUXj5xg8ESfxwkVNGKnwyEirCh6FZzyFidsnH4w1V8qvBJs6caiTjRqfvor6oqVCLu4cNC",
  "key39": "3sjFViMvF4AgdKjixJRnh3aFc9XkGECh3HiApznoUZiUPfRzVamSiRnu6qfw6JDL38JgP9gLv7qnm3gPWKFBBnpP",
  "key40": "4ZhAWdGvP3FVtpfHMRwLhZSQxJ6fNKazQpGdPUFLALbkshAFTZyJmeMixCVohLtkPd6FYyGoSVBvkHYB4yQLnajr",
  "key41": "23bUsmoVfmjJH2RVrizaC6utZVyTkyB6KQphbtBC539GynKH4soapx9AeM1Ve1h3PYGQbFxcKDjzKxTj1oN3jn2k",
  "key42": "uGyHjnWJ9SRc3sU7A5ytSiCQFDwYQackSXaUPq3Ehgv2CtUyoocj4hQTQKDGHpnhJHRpmmsfYU2W3VvtYiZ3ULu",
  "key43": "4aVmNxokEJoyPKgYum7C46H4cXjSkf83CSPQJM4S2HLmHPyXo97tJQCCx9uzCfWf74tnesUiBAwdkUajzirdGjsT",
  "key44": "3Trw99akmEJmoHy8Vi9D2DuncEiFJUzKFc7XNbQNBixmqt63h1CrJ3yuU8sTyLdYPdL85uAjt1V8smK349qeoDVf",
  "key45": "5SMBBxPBJHqZeJB2zzmGFJc1hLKDbYn88MngK16EinCDcYBQuqjS1utKrvptoenoS8gdRVeWjm4iKkuTt2L15uKm",
  "key46": "25PehQcJD6rAiAmzeYu7TMpct4y7kqaLVh71RCijNXkU9ZXrzEBGb1WfbHc6PYuatvRgCs4nwJH5RXAM38WsJfWS",
  "key47": "3TTjHZQfdnmUQFpLq27JW1Vvsg6K36mzmd6cCbEadE3FRfV5JRKWJLVXji5ebm1ACGYeWfaF8Pj1yu8oNxoCWe9p"
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
