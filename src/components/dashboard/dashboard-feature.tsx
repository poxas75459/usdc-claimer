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
    "5Azo9simnG37fgKLzASUXL7hdFYyP9bNCeo1YhXH8Lbtuge3oQ2uQAHtXrsJH59ytEMRqRyTWf9APXNiuUkv4ZFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zTNGRida5RRq9nmKgPAkQv2QoFFH7XJtXzT2GCREUwMZDenmHGuGTHhYw6LKAXeHFSjuEtNM8KT7dY5WVze3LSM",
  "key1": "5xEdyWUiR4fhyt1HY843pzCtkaQajMcFvK724fSmpftddCTFDRzKadmpxHNTQbm5J2R1o2C9NbVxGakKQitz8TiT",
  "key2": "EMZn4kL8ojnqS7jMKndwczT2SSB8zvyo2DFwU7BvTZJWr5fa8LzmjnfxJPJ4Puegwrvx84SemtQWnGTXPtGsVAN",
  "key3": "oCwdSEoqyWgqGvbPyzaXRoUBQfyCGXDk91kA4DJm65vnohZVuNYK2KRxuQiN4WdzFkYKukpjrBRysUkhq26F2d4",
  "key4": "5nNyTqxkmJB6xoQAbxz9Xs9p1ozcLF8rNvKerTkSwriCSmBBvEo7X3WpqG4cf1hmSWy5tDPJ6psaE8crq9kJS21g",
  "key5": "2FYtStrj9NXNTBcpr69ghucad5ogzDMVs6T2wa3wZLQf7DBkrV13ggZ4VsDToM7KqtzZdZXoTvmycFtrU3RTzzJr",
  "key6": "53XVBaDxCguzXpKfYTDHFcexpyQpvu4YkjATm1VqGhcBiYpAypAvBNRpYQ5R2BZ2coGP1XMwxs3wUGCQBQrvM9hK",
  "key7": "2r7CmQe3XXDQxfv22FBX9BQfGhJ16RPymX7UFAd3r4kmqGKTsncsSsYKKM1pav47n37QFX3SLQFvWNbY8t383aoS",
  "key8": "4jNyodBMaZ8a88jnEvjkFz17Us8HajqCjRB7crFUmLE1DP5UkATuFCrVbjzfAA5H86iQ3sSjbKujRUBZF3sXG47R",
  "key9": "FNvPki8L6Wf2K9Tunhgvvd1i4r5BSV3NeB5ty7FA148nFsHCyrcaBKizYWhhqNJ4R7pjvdUuLF5vwLRBiC1oppJ",
  "key10": "2Lp2eUmpm8zQiF2LUAwbZzNYrduBELo7pm3i2TbPSMgLuk1NGzAS49h1N7a7WtYxs3t96fKJzn18MWsBJTzs2gxZ",
  "key11": "5sNCHjTc4ALZabKnYFjbsm7HFn1Pdn8L5hTMqgU3jbYeGz9j7SFBAanda9LW5v5WnSc4zxMmYRNBjiS8VTHuKhkg",
  "key12": "N7PCGDeKnjpqLXK5RG1TLgTPfxxeTARQ3TBLD7sqQuwHUk9NKwYBMqQCCaU5cWQjz57XnYs9uzwUYkB4KnwSHcP",
  "key13": "2aaaSsNytXC2r3qg7rQbFh8Zq1uu6kkoAvrQJWuviN2KiYCNgTq4zd1zkCJcmbtnEK73hCBLA3G1o2fbzdK5JW1D",
  "key14": "2wG1iKeShzkFMvqz9dg5C3pBeFy3jeARGc6nvjbtdFvdNxGaP2wVS1VDtpNCGCCnzPq4Wcsyedn9YVh8FTwpENzG",
  "key15": "sBKrvUExM124i7FqRL7ftR9NDcvSbYp8UL2kJGEeSJdpfUqdWPpj4sZwfzaeBpnj7NApt1L2v2JptDHbLwH6HTY",
  "key16": "dJqox3vAbUmHdLJtmBH6EwAAzJNxL8EFHmGhgsYfqd47ZYPBWGEeFXVJsC85Axp9eRdnsYCD1yRtu4Uk4EbBnEb",
  "key17": "4o3KjC22GoJ6XymErzU3yWLDW8dHx9p4WH6xXk3wbfBRoTUAYtHhQcJriTm6DpCBkzp5FE6kVikMmvxfspj9uuEq",
  "key18": "33p6MZ6WwEucaj83inSjhrvZNQx9RV9vCKjxLxkYiFrCzxaSX3DCMHsyZHM8DHTEVHxi1wvd5fJ5qcnnz27hdtuT",
  "key19": "5RoyfGuBM2uHza1ye97wMrbbNkDe5xLhbu3XcD7PzLfs54YbbN3RPHh757gzLtie3BGjrdmLWBotoh94hcaiMacb",
  "key20": "5LC4GFduqAxj2hATHYcPC8eSWoENo3FcS33SRjrKZdMuBSphm5d4hy1wmzjYSod6fUNWZxLLo5PxRhTBgwjfMGjG",
  "key21": "2C9G9xAKDv7f7MChoD14AUgnXRB8vvXqhfmTzAXRhFJBxMnB4CZPw1ug2D4BAnq6WVix4P6h7tZskzm4dXvRpxCa",
  "key22": "3DfRjdW5okuz8AHvEgqupBKhNkx34QikY8j1YuWtUZ3vkmsLEuFSUmmzLmiNhkSvRG8wCf2LzBnt6YzUiN6RGbU1",
  "key23": "eG95y9njMM2UuhyiZWKRr58rv57Lhvsipm43f6Xi3AKaJTqUwwtEwf66j8wwv6sjJnEuYbZC4wp6sGjScKgNWp4",
  "key24": "2Uk9uPra4BXasZhskDAZL8NPoYiW76TnB1GFkVCmZUVSzF7azk5NUdhwD5f8xohVP9DAR4vvhF69tqCJWWfw5hTH",
  "key25": "2X7fTRsNqgY4GLXVvgkzFZ8u5TjCNrR7pzTjNcbprfYGP5V6TuTGKwDhbdUQYvGEPTLWh3KHEVxYAvAVQGfa3rdM",
  "key26": "z8ZXj5VgxeZ7dnXWYeLiw6fKZWSb3ewJrLpZhpqHZYcnhurc3Tvur8eWV6V9LH5F171x8Tf5yQ8d5ZCXtHhYFWU",
  "key27": "2p2ZSvTfUaXGJ2a3R8SkXtco1cDrB4UjBci7Xwut4uswPJjuQWF6wMPht1SkCPqJkSR8XwfrGExPgAGjBBDLPyGJ",
  "key28": "22Yc5Y5wujcXkg9JAmgcHoedd9jvww8cGYmBNYT2DJE4FxZAedFjsnpuXRxGfcMP9GXwm1xyACa4XUhKUkkR3DLL",
  "key29": "4w9yHvgVb4Wiw6uUJvmoPmEYnTeEG1fshbB5ajE6b57VaSWzus8ZTdASFvpHpFMouuByrKA2f4CMGRLDDX1MoyYj",
  "key30": "3u3hNdtXAhvuoJ5TS1yTUGxJCxargzVnSuLbpZY2Zy7NZ8qUGiNwB6TJA1LtCvyzyHUhWowRri36L1ZBNGxnY4a2",
  "key31": "5yqPZpkrD87RqpPAmhZY7cfx9cWBtYM8aC6XJQ3m5SEBRWsKHNUSQGjqNc8itqEMwRQ9UQYTWvYggX45KCvnMRsj",
  "key32": "4iH6ETrzxERJicM9JTm9D4vP3TVCWsQX8GFMc9NTDsFTN1D3EaMVmzraVfjZZAiVW15dWkdqtPY35VCGN2QWeunb",
  "key33": "4kR7igQAmua5j8iYkGwcMYuie3HjFh4z4Mo3aNbC8CS6KgrmWmdS4hoX5ngCU96MNabLGi6UV829x9YWGS4XtKnX",
  "key34": "aSW9oZrSrFDi8AcJDQ5BSFUAFEz4e4vJGVc2Kiu1N8nf9Rhu1ehvyCtPhkWd3gHdyzPyAd9ZcqMiwVHgFGRo1BM",
  "key35": "Jk12K1UV87emQX2aK9wdk3uqrzxnSXw6iaMCpQe5bzA7Cnuq7KKVrm3g7ogYeLZvPrSt1Pmi89GfvN6SVPBBS7t",
  "key36": "5Fsx17VfX6ctQ1EmLw6SzLLxrzUdhQX4NwrepwiuTAPYvFJHR31FUzHpQmfjDRL7JRtDzMKyuJqGgLGnaMkvVv1b",
  "key37": "XGA1hie9VSXXeaKV8WdvZo55EqSzz3TzM5tVJkQEHxc8cLTJLCL1fbHmZYHkSSFVNQd9ChvK4Tp4bFMJus81QPt",
  "key38": "3y4cjiBRb2zUZwUcd2fZju17zwq8gPzrNYH9PSw88dHqhU1KAgHLLazWp9hracYHZHe7LMgPBxnWzxMKK1ANQfoh",
  "key39": "bjvck5LqofXCNf2P4AC19C9R6QEdLrj2iCiwzMpstzpZtX6vMsAgCPhKdCRqV92xgY2fqgdFeVtdw4tQgMog3nJ",
  "key40": "2oGHih7P8Ra2dyZZSh8XhoXgmTiopfxCpx45DWU69gqvg7QcTAYaPRBS7BktLmZjk2NXGunnPCErhZymCTM1JQXA",
  "key41": "2TLhSoCuqjp73UEAG8xfKxuvPSwz2wX71QX1ZNCFbuux6fVV7ZytxwDNjW3aLvdtp4JvNArzp8ENXB4bh2gq8ZQb",
  "key42": "2QpJo3jAe3SrtFMKNimUhrRXGQbPu4NetXQtY4aN2BuhSLJWxGhqMDXZ18RXR8m3hgyAVif1KdQ7bTvur79K33Nn"
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
