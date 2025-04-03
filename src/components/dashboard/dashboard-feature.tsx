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
    "26Hkf7UZG6TXHmoWaVrNc4hEqv8yUqCpvUstKLGbLKWCh5GkFFZxqGXWcjaoSR47D5B4M43aZwjKGVo8dJEHX2D8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tajbz8fyk1WMde9Lk4dnn2bSCwfheE1H3y4bjjqEP1rGMzdhqb4LJAvR1CqtXhA72H6HmA46HUk4BLbufxBqsuV",
  "key1": "2GbgSe3WXV1vjWxJMAipKCt6f5cSCKeEpBtf6Q51HUuLkNsgjkAqRUQRmSDjKSSbzKWL2yXRBmJwbb4bWwhkPmoJ",
  "key2": "21Thoe4XpGxUY345GqN2jfZxV44R6HMWspGKLdYi7iXhZbWDtdSs4G7ScYoVjPcJtZfdK2B42YASuNEqANzFhghE",
  "key3": "3kcv6hfsjvaa46s5JGi9Rc6AKDDPdpsi5JrCgL2E3g9ZXiHrFA58cL2GRfdMhHXMA2qAUu7YPqvKjwcoJotsiN9U",
  "key4": "4WVm4ewGFd4o3aUVErPRxur89aA8BkvmhCcNEkfVEuPpBGeDusotqcSbztKQF2AghsNCG2GzrtN8igKgAx3bDrJY",
  "key5": "3vdexXphZ7rNvAPsTfGgVwEeYt1ZM2mVzQjPyxkchTeP6KdYK55bKuEp4osDayhchwk7fU1VgXK3MRTvzBY7f1jd",
  "key6": "5YLRWKhJmZLRPtJg1aKgLmNbhaM6yhj7QpAFkjNAb1GvRXfuDxdb53eihbX1PupThemAJyLt78uucALoKcuPQjBq",
  "key7": "5SuYxbVujteKx9ZGUsb5rWQFWBRGJE8BYL7mVDGF7wtZjmWVzkn1zCbrA1wCpbzeVRBM9LvCDqjKL9bhijy7GDVs",
  "key8": "ZArZvPmottcHNTfo3ozJLpkauxDXobjyajwTkQxQy3YvCqWQg3FntkU9Jn8GwPFmJLJKJLBphhtbAgUCXDJ4iLG",
  "key9": "62dnwc5AZKj6YazwW9cUEXKwntrtZW76LhH2g39HG6aWPULoaa4kAfoNTyaRSxcGNJ6xyS5MRUafviVCMvsrHqRg",
  "key10": "5Pd9CFJYNzaMbDT8ZA7E26iMm8SEXbLXNBniu7V7ceJNRUvRBDuABBiZ5shGtcoVFiSchWE3MYi82KioVb8rDv5c",
  "key11": "4KhGRRybyyz986mXrrh5sHsRp1AJpJFvfreCoD3uJp4eWEUYxDNkwZWZgVWNTBR7veH1NXQGrHr9pgQ6YvCKCukF",
  "key12": "5DfjA7LsHBLxu9Ez1QZJ5eHgxgY9bAWnjDvZv2jRA89QYy34qPgByBjW7RyXvbYVWiknNUwsAYkXz4vNVA7YZqEM",
  "key13": "od4c5wDaXCxnFnkfFRz1tKCU9FSEZAj6ysRVQzob1TrSYoMtiNa5Qwfqh1bmnB83LqU4aiFxTnLgTkPgz9AChjk",
  "key14": "RMyR9Ld79kTjF3JXNiijHmJ1Y2Lvra4wAriVLsidshB3S2geeo5koS3mxJgws7eMJekCUA96xdeuXjx3qPK1eyS",
  "key15": "57zZ3hhBH7hNJPVjv8xEVx7SBiqicVyNcAd8CFRDiviZ45r5sQcefwHnPp3fMbbayaJjHho3TAu4zs4EXNSJuuUJ",
  "key16": "3yKsmPJuht7mcFJAsQSvHvRQVDyXmBFu52kMMHtzcK6fBFKGuHNsLuYi9BF7xbB1onSuFtBxvqa7kJ3ChEZGYU6z",
  "key17": "2pTBfdDKxQyjwQLbZohbHxmb73d9B9PW1jETEDeK8YPo7e6vaXm1tX7kXi7ajz7KVJ1PmY8B2CC3t7wFH8uhfRc7",
  "key18": "5htBKLCbvKyPyAXc9nLTLjx1X8ipWQFhzD39dVu4dcjhDfgGnG91vpjC8gBqrNJmMDv2pLKdTPLn6L28D8am7jsx",
  "key19": "2GvnaWrnscFji7B3TSyrn2ojdpChkA7urcEsTL1cZ5hAGmJEHRmw4P5URCC5nNzQx14EdxdGpG9n9SgZgUgpik5R",
  "key20": "3RaR6pPjHSxkJNCXaDxuCECP2VguvV2YuG6qN1vnQpv7Q8DfwhVKR7fMxZZ1oFFS2qChtnD52GM1wMukV82Z5Rns",
  "key21": "2r4kWnNxfnNsrKxdYzdssEMRdk3uxst7ubLrYApygGpox9oe2RezEUw8twhNAXSK1xyEmwnFFCXfyXSfYi49Zzq",
  "key22": "NB5o89pN7EhVYLeZjcS55Ta4dpWKCWiem3TCtePTcBgyYxvBUmTegFHtyWmPqw343qZKc4thseeC2jGSAkQhaWM",
  "key23": "2Dz3XN6U4K436vc5MEJdNQmWRqy3sUwNct2m8NhMfytgb4RpvebSThGPYkMPKfhEurkWPgEDG2Sgzgwnr8Usdrq5",
  "key24": "5X4SYYfmnsfMisg7TvykdGy52MjL6UYW96unHfdXPpiXYNBJJCPN2jGSqKVxx9bojGFCgyhm3UhX78yMVmB85kYQ",
  "key25": "2v3TDvVH8ejeYGDBBTkhyRxsbeGzcgAcdQ91QnpsnKzdT9JmrExdGbsXqxVdNAXcWJwbGhNJ6buqhvm9ANviitGw",
  "key26": "3B6ZGAyecdNAeqP3CFi9Rro2VHLFbSZtY8pXHYM8ayzvTBgdV5mfLoicQry3LPGBJYAxkApjr3H4JgxNewTcSUD5",
  "key27": "5fT766dfa97V4QZavhDvhXAC1R4CuktvoHZPo5gZbNR5rB4ayrL9pFb8UisiLAZrugTL8mckZDWFmKFyAKNpJf8y",
  "key28": "3jg3NJooLVwXGNzZ1p3mW8EDujAcSdFtqPLXN6NiyfszMaDC7N27Z8dpNaytmcmKqp4JsUptNR7jrkPhuGrEnBir"
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
