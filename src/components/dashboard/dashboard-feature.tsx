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
    "fxVS973NNDFYUhAo1wAsSxAk2H7jsdez9PdCbvezFV91Tjycn7eGX7KJBFXrtD4V5Sjd2b8pQy97ooVWdCkPQGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t4YqDzEECdvUpiagya9PVRSGVK6DHjSJcAayU6hAz9dePEsgopqF7ycSBuBXKrZjzCHpPjet4hNFpcx2ydiPEDz",
  "key1": "2mfnRdLekxLYiNu483kUbu39VHkGtentQTKxuWpbwARhFwSCkJg5wAJnsePa1VuTGbtrcQE9J2CsPrFTV9nJrHPD",
  "key2": "5bBYdkqnwNgkMpMPPTcsbLTDsrCKGAFZ5kjqPPSsE1AL7aDHPxhvTyL1nB9YB7pJuraxJR3HRBsTcqq9LSfbgULE",
  "key3": "2ir9UBHsiLeLzNFWSuBVwtvEk77vvUeZs14yqFy8G6cqTmGLydt4DYVo8Hnq5Nev5z6Xrdfq7PbFJggLNaeRaME9",
  "key4": "2jWynkssN4tYbgwUE4X817mKZ1NRjput7EQ3MpJybVxH9MEnCaVe8RpH1f5gUBm8RcRixK5zfcGqbBnuZNaPry7A",
  "key5": "5wuRa8tXdfYPfpxat82G6dkfBS2ZKfgLC5HU1gbe4q2wT2tTbRsrh8KK88aQ1k2aH5fnARzKoVDJ9VkJ71GKvBX9",
  "key6": "2kHaJ5bYb4ZgFbEvcNH7EWB51h1kPVWgKKm4MK6KwRmnEs41iodVqZQ8aPkGXmcCW72Vac5Z7FxeNjkc7pndtppb",
  "key7": "3zuA7WtjEbTupAtv7N3DquU5uKh4EZQFRmbwUeSmzLNsdiDM11KqwMhxKKUnkFyU1TshshH7cd3qrbYWz1E26XQt",
  "key8": "YFiKynoBFc4mtzcVsA7eTWoZ1oKqyzZ22P3SLVUrpxcak1ahYNNBtktfChJwks36CK91ArXidwG7kTXaNYBiq6N",
  "key9": "5vSmtyHkMftXWmroD6Gdk9QfRRUbuGTD9rfjQawxPSeLsfppjXXzLFNJG9rJe1jBhdhfmjS7ho1Za1Tao2RxaTKx",
  "key10": "2zND5HBcxHxNEcUQNPm9boZ5MK9Rv124mrM2cbGnWhKtpKE9T6eZGGQyYYZgRzVkER8uzoXaKhP8az1oScEz4kg",
  "key11": "31yL1xkmPG91WrL4JmpsoFU8gtP2245taH4Hfgmq18sx5SvXRWrPnyTpzq5uJrkbvLS7G6wfuoMLqttS9x9ukZhY",
  "key12": "27hcsoWLs8vsqyNwEuYgzbCraDcRYU3HZR8ufnMvDqtVU3kSaCzzDEweRudBS4gDfD8gkEGpN2ZptFXtVsZz6dZh",
  "key13": "5xnPz6fUcXqoWhAzQ5kUkND1B1gbV8SthfPD5xVx1Ur7m3EDSS8nGVT5JRNEbJyUxapGJVntdnKzBAB7ubhngjKX",
  "key14": "62MJBLsozGgaXqyHPpBqAuoaRUxoHGVcLRy11qzVucA2NWir3oC7WqHBBBvs1jQJNWqJPqjagrxNqyn3ELtYmX81",
  "key15": "54SfGKmo9bRHBN9z4EduZ9UDH6gk2UynTRTKu5N9u4Baz8AscPxoi6YvABbM2eF9oyQ9PZtWH6xa4HX5m35nGRbz",
  "key16": "5xMfBKTyVjw9sQb8rPrc8r7yXKxmtHA5wwdUo8jVfsvE6sNAeLh7fku59rLJq8ckVo9uGWmFafuYXc9iSYrh3kdL",
  "key17": "52m65WJUDqhpx9dMwsQnHYAVKwtGuozvpzbPouxwyww9gYCj1JCYyGGrFpiNx6God6iDUaw8PwiTqMbQr3uR4tw9",
  "key18": "BKwcvRDdDTC7sEjNGthNxBxj1kYpWRDYUszQtrNJW3WrLgREvdBKcQ1AfN8Ah699eR2VL8hsTbt6qctPPsQYixw",
  "key19": "33iB1bJ39Cxqc2RZx4oGk6tpFHesRW2FWcEqjJUzqjy9VWyEDvP8PwVCgZnmcfZKs9zrgZmfMhXDs28xRSP5965Y",
  "key20": "5cWQUzTa62TQ1F43jeJEDkT2Ge6zdTcBGoaTFqrSmKRckkzfdPZCZy2NGww98QX8yV6kWp3yL6d8bkQZss2xKV74",
  "key21": "5scphApVZfXjsFfGwwrLmivCuCWVaeBw8Y8MGHw8VHAPQ2J5WKhRwL9asDLgMHVKta4wRw5tNsbHEsji41WT4UT7",
  "key22": "5aDBNfLSyGnHL65wUGXAXpZpH4Gy2z5CP2DM2TmbUyvFCZoG4GYGErawapdgapkUjjPqES5cVK7jpxzUK7GdKuFn",
  "key23": "57U5S968vbWKBcUom9mceYrGAXxt6ckjLZdnuvgwkwEFrdztv26YoTupLUDNoyA4acYr3t9bgtGXBJhYCnPvvgJ4",
  "key24": "resNpabaCpttXBirR5LFpaX7V8ctSaWgLqJndFmPbmSjKxxDuy9qYfiiMscbNrMDkHkqdTqDJjDbRPGi1L1E3ZL",
  "key25": "5qRcfegy1sL5JtM3c5R7vPAJZdXNaxCjh54GvWX8z6pcMhrx6CvzQTxwpKJbac5YmKXVNc4LEeS9aLsZShfnfHX1",
  "key26": "2f1gCsEZ1NwyzJLmDvASbshG9VB6Ai24ERyv7NYrYaKGhmEUj5wRLjFA7GtAkaBirRKdYfEdmYpLxnLY7zGxJ4uc",
  "key27": "A6er5BFgNhcLoeybjeocvzxcuKfFRAwSFQBre9fMbvtirYgfo5yY85CpzRfozWC93SWB9oSMMcaBGCe5a2ZKjrZ",
  "key28": "5rtJKfsP5VBvAYWiNUSEPUxUFizfVjXBoQx3zUxFZYQ7B9H3XvL5THqVDVDimVJ8yeMjPCddqCU7SeRexz9joPxM",
  "key29": "3sg8N5Wo9UdhsuDDCzVcFEZMSEnv2CihYw7RHfYtk6Vm5uY3gLnYdf9cJbfDEPmeGN2kyD4SrrLC35zHjfqBnSXR",
  "key30": "3gvxqdmvEhxZqZmP2SGqSdMn17PhoQB12bzSv4BuUJe6ZuVRLK4e2FKNo4cWVYGDvqYiUyXw2wxoucgJUUFxDXY8",
  "key31": "2MKNVMCTNc7thYwRTMkLDLoH5Au8T3gKVzKwF77vTUKmbcMaKRjhenJwtCFJ8z9Jr8bhJEhDVC48XfZKhkbKEk13",
  "key32": "2EdeTYQPHZm4RMiEa4iFGH7LAuwBQL3TuzhFrUY5Lx9iFBkPADU8KV42rhZ4g6g3MWQ2XjEdDkAvgXv8QNuMzfE8",
  "key33": "KmowGdAge4g5hEREMZERLccEbtXwGsa169MnUtaKv31gGLeJi4dDZZXhbhjuiSkcsBgFDgLvtZRhsEFgjmXAeYj",
  "key34": "7DEttptbnanq3J8LR2KGhyJXkQkBoXd2ppHmB9djQW87HtvhiWLNx63bm7PefE9tzW6A71uFjA6K5nWzKfhh354",
  "key35": "3dzMjZ8NqVTR3nhUjur2CKhMiSteY93V8Crxc2PgC6DQUa8Uv1pPrX1V5g5H9ATdGRmje9gL92JhigcVWLFpFgkX"
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
