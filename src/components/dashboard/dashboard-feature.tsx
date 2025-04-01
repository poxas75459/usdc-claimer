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
    "4xuN3Jgc68oRA1iKYZJh7yexS8JwuhmyXkea7rvGi9VXLQLujJZcPdWGqoVFdv6ZJTvDGxMMZcvuhy4szmrM2S7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NW6nfBFFyV9Pz92k1nWq3g3fchUqGDpJro7B6svWi6HtqaaiPd3svbKm3GfW3zzFwNVDemHqafeEEyquL7i6fb9",
  "key1": "2PwvkaQFWbrDnw3B4yTpHEajHgFrkprCqqaNc6Cot65zY125JXiF9UyvUKYWi9DWTUf2Bj15L9p1A3HyNnRN1JQg",
  "key2": "3HwqsKVtH2kjxDiuRqkijtZwfV85QbrAQ9sXXPbaAz8QpWbwTD1M7rsz8uBbNXiN4434oHMFu6oYhgWpsC2wQSDF",
  "key3": "4x27R6BQ8GUcnZBQ5k5jAGVGZ2t3mwDSgYLmgACQomCkstWvTo6sQxzRXJM1cCtS6ziRkDQ6J3XH1NLWmXxPZtDS",
  "key4": "84G7hGR66o8LtE5572ikzKNvtuNiH96w5NeLxfMkPZMyDtW6CnHVyZZfxyUdAzzL6xXgP5Y1STVcuFywmnBwNkv",
  "key5": "2ANCNzUSfCVnypyQuRe4Le2q7ftKRdA9xda8AWG94UjUpLDdgGfxNYAifbM7uCMwQWAij8nCC8BP5jVjFLJqftyd",
  "key6": "5vp2CowrKyv5c6v8d2f8ZhVxVSJXL8jTsJ3xZuoDB5ee7f2AtSBkTrqperJiq9rnVK2mf5Q2Redh33graTjDrsaf",
  "key7": "5wbYoMmyvxTn78aLjWg7LpGTqrnHaovYMTkXbNkEKMpTvh1aN11W1FF8v92NcRx2rrgrvYVFBCX4CjZNrwsq4tgw",
  "key8": "RqE83Sgx1uZRQNqnHchfYteiLBrgsJrTPbiLMu3PvSiayHVK8GXHMfapNP4tSZ9ThQ8aNxSEhQA5xJod2p9Wdhi",
  "key9": "3fAtW1p19j6EHGWxqTwqLpsvyoUCxQqbfRXEgMAGafLbhofUsgYffZhhE2K5wjqmfyindpBZVD2ireUqQx9xPjSU",
  "key10": "5tbru3J6BbiGMA8SQaJvYBuAFtAdMeJFJGQGdmP2qbsPSEq5iD8VbECJuNydUtP16po5VmHKfSLfDDtRnXydbRWd",
  "key11": "Wo2cYLG1oAaFfKHzGWVrXBP6zRvNbxjCEpjixSh3PNzAHsbtUuF73gAAtGDDUDMb5bA9idXhUCqVHnSRy8hvdfs",
  "key12": "H4VZGVKNgizWoi2jjvZrny3wHBXG6prEwM8v8imxLSEpk7ZTSoHhbQXvsvpjtvtjokDkonKrEXXhWGx4yXszB1J",
  "key13": "5STQBjRPgrdjiiAZEQUrqSJRiR4bTPFAmEntCsGgHUreQxW1mCns4RKgk3kF5vMTgr3PLez4TN1iaXJuA4xcMi1p",
  "key14": "LbVuRcnLfX3c6uJ4Nt4BGJvZ62pnxmcZgji5fxTBnLnSFVYzgiWS9A6NAD6GayKoGmy761AhvShVzCMXQmbUWEy",
  "key15": "4G55ggzyEYnAvynsrmoans3WDwrLm5E88SnPdk2LrqCdcqLWtdRV3Xo52o8uG8PeGgom1Qaha3jhsR1mJTCFvw35",
  "key16": "2Abk6D36Wubxwqhm91oVCqNjv7VHsACwvqzRhVfitf2LvoxqhU7Rp3GEJpujLEQ1QHvgDkdgmkg4SGpWpjhZeacA",
  "key17": "zwKfH6Jkuxs6mAD8JwD2Xs9EzXGGnHmpYuN9A64aU4mwxt3Uck4h3pnC2UfdRZcvE4LRQVA2eekN3iDNwPTGjLE",
  "key18": "yQLcuVQE1zKVNcPrnZhuXx2V5QiuXBbKB64qcfnAFUmGKruZxpdbMfv9fUf6RozvfbPtbchy7y8rkdd8GAsJLvX",
  "key19": "4X9eBWcWy3iT64DKm9388V8WDRDXgm4nf6cVhVzZmNQt4SxwxBt1qSySSppXZdpkevXU4okShWbYCkTa7QSn6ciA",
  "key20": "3yndG88Fqan1Z7caC8D9bhoLGtCGzkPgWvAGV7Vc5puKDNSwo93cJcFxrTrVD2b8hL4NTreHrntMBpkZBsiws2Cs",
  "key21": "WmAvDTqH9Lqn1d5tLNpVPzM1w6YDRr86WRVPEwRq8zojLVQQdRx67tnUPNzdFFUrFuZvPZgZC1K29zsEMuQ3txj",
  "key22": "2ozDjC9BrJbCzMVKJUhRnejpWvWR11NMDNi5pLYqiuuuvrgyKKbj8RtsQ2zNYKR2jcix7wwG8DFh3t7J5W6VzKgz",
  "key23": "4eeX3CW8K6bzYuoNXZjJU7DkXnQEHdNc8M9zDQA1QAh2VxoXdtTQj7Qcqrt3oD3was7bp3zHjsrTZB3Uq5KJRhkz",
  "key24": "2uQjbw4bWa4WpQmyUXStHArW8SCK69HeRCjuGNwkMF8NVJvMHBD15qNCHKH6R3B5FKk2yo1d6HUZQhVjiijGtfyh",
  "key25": "3pbf9Tyn3dMNuKtDUKyjVM1dHTxqM1WYa4NwaDmdYs3p6nKxtvAaCKQJpGdyg1NoQYycCYFpGVFqq4LZfSJo8C4S",
  "key26": "5suKBzWAFM24edKEfxKNXcFJx6a1E6GCs8dGnYNt2pycyAb3KnGhY2WocR5qEZLof3RFFcEdJ1xoWmHPaukX7iuD",
  "key27": "Q7xgsKuMZs3yFXAyNCKPd4pPfVAZvG6z8e8UsHguRawbXE5uXPkuVi1pYqWcGWxHfnaKZWELD3Kcz4hL44hT5bY",
  "key28": "3mQ2gKdsCtcBHi45a1K2NjwXtc1AHdZde7Sx8TVBjKFEFsAUQEmvDiSSdkD8o7shnSo9DeRxxNgpYSnQy9YWGLGe",
  "key29": "4FCx7cWmYaxJYxarZPUcz7QphcwVKquTMTLxVXb7MT76WuZMi7FosvxgCfDYj43F8ibzsF9Zz8kqhCfZ6MKbpsc9",
  "key30": "3jhFYnvPg2s3L4rnFGcaN2bLG9iP6P816RTNzgpcCNZQJNvTvVJfLKqhdbSwd8rgsnZNTwH5EUmw2xehAgFD1ur8",
  "key31": "4a94CKNhHaYayRQMWDUi8CV9rLWNM542C8SbY1LUuf6EktghCdufPQmwZmwvEPzSLFRnLvUNV6q2RJcQ7wW9Ng7P",
  "key32": "31NMNR8z4DWjChV6DcMXCBAQbRxUYGCGvWaehLdk5e5Vydjww633oFTWpdDu9Kaq3KHrdJQiKMRHKcv5Pzmrzz2b",
  "key33": "57egViG4rGQ7T8VS1eE9mRgjxdjXaVX3j18LZx9dVxGBapdLMfkRcdcKgND123SShy6EutQ7cHfzMjbZwh5wbePA",
  "key34": "42MpjbJveNixuzNYeUyFc1i6ycRtNThvccA4DhdoKWVgKHMRsmRn7j85GzGuzgExQUKrwjV3nv38Jp7ZdhRBxnMJ",
  "key35": "2wkgLzPsAn3phrtuRVAgZJKzQQidAQid34hH3y64RSeMJYE2BEzQS3BFTJY9x5954LQJ5QkYcD8GCNpZMfwK7ZjR",
  "key36": "5DxMF5GWACst3afuAXjrwdGyAbW6UtnJm5J7qK1qZXDJfEB2HBc9xCTuV1CLztXoaP2XN8AMPUPb8XTYdtw3ucDH",
  "key37": "53TvNv6ZKeWHesLQyELQoz92sCYgnDMCEnyxreQP5J3V2YFPZRBXdujfFm6Q2Pe4PWW8XUvMPbmnQYuRQPaGtid1",
  "key38": "cRBEnf6hwv6csvAGCXCY2TGTFttLwFo4dFcUAwteGB71MTCXCxsBQj8yuREJDkdLVZ3rAn9jUYftNydDr9w7Pv8",
  "key39": "3keib25iH2FaRuriafPEUcWohAFAzuk5gyiaXjfz2UVon4ZniVjV8fpg7PNmDJTURnwc5bi4TdPD582ox1C4Sbrc",
  "key40": "2txgzv6E9vSaz25BCCPv8ATEjsKJfH3LneWJ7fgB6V8JfUMtuXXT63YL7ArKusxrz6NHZYAdYd7SGa5fHhEc6XAn",
  "key41": "64yYCFviut4vTWG8Dn9BEBRBAqjtzfSe6X1TQdxB9T39bzPYWrDHuvr4TnCJm3S9Egqg6qdkTetDbvRyUq7Dn5cQ"
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
