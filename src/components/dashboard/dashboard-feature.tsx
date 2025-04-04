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
    "4DXLzqZY7bHzhbWxvsy7MZgCCoNY4UtqMVYgaSC9jntwtE9FZTBUUQR6H9Dc3ZG2gETctWJdadz2Sbrn4ZtdsYZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ScsfyocRGjo3n65QvkUYNBG9qrUb9kELfNGCozFxqLR1f3hCkWmNGciHYGntk8YbVnjq12bEe5zUMBbWxE544SA",
  "key1": "4mn1iGuCwrZW33wAQTvatbe1vkm1TGDDHET5DnsWkBSGCfjFjdPaoovCPXKoKZfeZDDADgjXbLecxsSTqbc4TTuM",
  "key2": "3DBtpcVrYtmUGAxaqtAusJKKQFaHcNuXNjT2ZvtT5GDRVuAxdaDF8jeGgq7VHd12k7SM3fRu4nZ2kHUdUjvhapiP",
  "key3": "2KAJ6GeqRtUf5R6Lme5toCN8gxAygCoZ2dKBxr4smsB8JoXG9RyeNbmh6S9oV6KWpSe6jsVPGcUrMockGqFKTuqV",
  "key4": "2LE894D4oYUqTcaj1T35Qsup5bRiK2meEGCs7g3Lh54bTkatNsNc28qiR1SBnTQAAPF9GpTPoPWUwzfUQyoJEuhM",
  "key5": "4n6WW1uzrFwP3dry8PUpQTNTtDwoe2kPHPYbjqKDves1us6cgaeMVPrWFYsHFstMjAPa97EWhFaXe9dL88Tu7BC",
  "key6": "rSs4HmFLfxnsT3XV1Uph6sYv6Ye9Q5C8TP9pFrAyjySux2wUbKrj1jhMhzogAm4jfokfdZ9nQ4iVAkPLAxiBCdS",
  "key7": "4BVP5SjByXxJDthSw6ipvU6tQBGE9Kcm1uC6hCcn9wXG7h6utumeejcxKg6QLkVfxhFsd9HGmPNgcnVtMJDhaxZr",
  "key8": "5mjmH1rvPEdD9H1FtmRZmp381mbt2wFchMAgxm6MxnTnqaRWnnbK5wL9rVaCTfgV3rP88cKc4KeeefCR4aZXnWcW",
  "key9": "2xBYnEcTpgzSszTqm3cKjNiLyWLEGFzdrxeunQL1xD8eHSFmS5Z6ME8H6VDYgDrLFAyFhHXn3VifC9uAcQ1fRUYH",
  "key10": "5dQPQMJThizKMxUwuDu1jQaud1pDos6ikRMvH8Mc3PPLhonMcqi1yCeqiXwowzd21gw1cWPxniLYJHNUbqZbbPfH",
  "key11": "2XsGadLkyg7R5o5S1LmLVSNSYZv6h2dYVBpfzXEQCoW5s1vsGiAx9uEtyYkZjM7TuifUKbBextUNehaNuRHADqy5",
  "key12": "5hfG7T3wQq5kfvK3HpKwAnwsvynkh6qNK1xhxMizxkWXhbRGUTyAQQgWJWtMttxqtRNMHLAqmutkaeU8CqdiTtPj",
  "key13": "rkCRFG78rsCA9gXUSXSGcHjWLiDotaXW6iqeYh2z396i2iWxXek6AqdauiExSQnULVn9NKWmYEGS6g4MvJgjf2o",
  "key14": "3BaUzPPDnrd9vQmEU2VtaEtQVNV53Nrgv8UwN2fE5KrBWqmFLmu8mWvZoRz94FLy8WiJ1xtJQX2kj9gzAXVGdq3X",
  "key15": "2UZnVmiNuMjMs3xZ3G8tiVZhCKoxXdQgUKT2wJs4soRFxLkEEzoyRNEpvfqsr9ZSewbJ9QRhhFS3PajUmQ6wyntJ",
  "key16": "3PDaMtEe9h3g3UKPB1q5zQAXafqHBusNK4gbbGouZb1gVmxtj92zq6AR3RqmjivRf6Y8EoNKeujpKX1cPxecmKvF",
  "key17": "5eEooEUEhDHZ3axFbHQzXMHAPU1pFKGjVpLgrf86sd18bFny11dCHVzij2hSqCAQU7rRWikS4n2yvdppTGe3qrE9",
  "key18": "4s69Mz1cjNSRufReu19193sHtDTigckAF71Hkxri8TC7Li3CLxZGi56qmG27bdQzwXPzvCDfMMrUxSH7PazZninh",
  "key19": "2htA4136eUA9cN33MtnDuu3BTy3eXAMbFn2yyhxnr769ez7DdfcqGVZSyYXN3K2CkDwZ9gmWVqTokkZJwGRcLoR4",
  "key20": "26u4we6hgXW5yVtEZqsi2Um765uD9gosyRhJXQdMth9ERTek5Y2cSUEamVuVLEY7rRkcrexfExwdpUUEgXW3ckeG",
  "key21": "3uv2ZHToPRvNfiPLQf5PyXXA5qzfQ6DtumTRvJAYd6w8D9rYU7GAnXAAo796XPpXZrmKp8kZet9749HAm3wuUZ3Z",
  "key22": "55Zc6RgYBqc9Y7PvfqqgQoXTYPzZqa9KGAMcV8UZkoTHZ5CDGGbqZYbR9RoXxRjLRm8UW2RzYxsnRe6ZfiMyJ7WS",
  "key23": "4FfHna68rjfsxDhs8fY6Uwe2dDjmW6D3bwjHgviajy1nTddR1RZJK5hMLRhWgRM9JJiHpP8n8RW1cNkhkyb3xghr",
  "key24": "XGqEGHxeRCQM76HgoxHXAGVZPmB5AKqKEQBbn38JwnaXxFz3YCGK1QsaQz2KD8dYA38Z8KfZBg74nimruSysMeb",
  "key25": "4zzp4vhaTuHkV5f4na8TACpm1BAhMj4ugdFRsfmGT1AbayWnhfFU2x9pxZgAUFvJwqTV9c6sa8d3VEzrGh3yX5mD",
  "key26": "23KL7WVEymHpFvCPFU316R5c8S3HGpWVyGtPgyU5xxA2fSspGDowGigrvu9iLKdGXXoMoT8sLRYD5xST3SG3n9Vq",
  "key27": "4HgJ7yZ7JygsNDJ7NAUcgE9tK9iN8bK8buDD3Cm8iXeAoQYnqfLA13yWm9j1h8ktqDvfvPEjFEytmmXSEBJhfik1",
  "key28": "4rMGiGsSb7cTMRUorXSCmN8ATzgUF2FukEh7b9ainGPPKPgYoM9kvUPDhKQe2ykh83yypMZFyqUfMCcCZqoGHUtW",
  "key29": "2deifmRjebz5YZJsJB2F4aS9Afh2WpQwcoMBY48B6TbwETkotqsBRD8yGAwaNZbeYnZQipVyZJZsE3beu2wFoir3",
  "key30": "5EDbvfv9izt56JZXDtWR2Q6kfWfGN7vJeKCSbeo8DjD43aLUvzbWyFYgAPPHB2tFAK42a9Jqpw6GuNG5Jehp5eSG",
  "key31": "3CFDosAM6jqU6vDZZQGzdQY5TbpcLtbCeWRx8rS7wYwVZacweawkRaM5bhHEDkgkat3DSkNV29Uw99RhvyVPPw6C",
  "key32": "3kBdspEYGVct5Jv2yBoZdqxgKKxk84FuBbzYEWngsnCL9rris1jrXHn18pQDftKJkV2qWDaBoDuxU9d1RBBMosac",
  "key33": "29vCnK7HbmXz8eead8AW4Xp5vsMF7oifcFR3rtZAeEvyLLdadRm1KVbfEq9uhPwXtey5z8bMGJmd5FrbZsQ6rCLJ",
  "key34": "4eUN3xoQLPyhzFsTjRsHRD1ntL7Lq1YsNukDx9GkEqfr2sGY5tz7AaLSocc9T35KFCRtSwKdoY1RoJmm48NWtsU",
  "key35": "2mAriyUUzFjxyBM7DNWKNuL8ygVH2AWz13rxyY451FVZ5ddYaEBA5ieUCcP7vszn2ab8AGBiwZouj2YR4DFy41u9",
  "key36": "FMNJP7NsmNuhHLeXVPzMLq5ns1mPkahJYMQ4fRun1SRFN2i2yb8HFKGFqp9pwu6nRb5S9qQU3kYT2DuUC8Cdij2",
  "key37": "54BoTV28iUGyURrJoNSCoxKQMTBzGa2oKd8PgaPpitQ5k7WEbyaXf6tVLEbiMAQUAhWZ4wUgEDCGxGbfDL34fPau",
  "key38": "n4iTw3JQLZSHufVHgfUeztq7Sip5cuYg77X6GLPDSHxo3X6pZypRBC7jhhJEF3iC7DWmEUnMp5aTBtG6XZv5WMY"
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
