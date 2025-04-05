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
    "64Dq3bwHgWFzWyqUJySiQDPivAZg5C4A4vpErTNnsqK2kn54m65Rt3mR67q3toyyGn4FVHKzTx9SF3sLfk2SEvFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WJGMUEP1W3k9DLzNYytm9LUjdoe3UqX8NXo59uvEGvjLiDDWD3PHm6a31MAv49EDLcvfoQFNgkL8w6rm4pCB5K6",
  "key1": "2d2VSeiHZa87eZMxYvizi4JAPiYebAJzzkPSNeeiDZ6yajrMTyXnh6akJq3uYLEZq49Fr4ExB6Fa7HidiehmGYY6",
  "key2": "QTAiKoJgnD6ue8NRGoyxznkyjiJBUMyEsEUv6kRbdq4rVvy9JpFAFvGUefjx5DXi1CmiNyrzwJG3j9YKZqD1yNT",
  "key3": "5i9cc3tmgtqabQNJ4Lsf9BTRJyWZCJ4d1GMX41SA8tmSpST4ahYMHkwvmRZJqDEnfaA9GgB6nqUoDXdL4xc51vQD",
  "key4": "2VcpEARfV7CKEVCreYHMWsJz1Y6YGpNQrjCNdXGMscA3hUJBtfz1HsUqT6VUSboihk23RvzQJvRvXcMkjsc1vUc5",
  "key5": "zjWzhVh4gmSBZvwWL3uiW3JCkifynXsz35DyNUe36KgmECfPP8SnBmwaHRhdX3hCnu6MGhp11pizfKESzsnYb5G",
  "key6": "4ucUbV8K5ThtmnAgMbnuEG9ewqyEhXfQmNnPz6o2p99H6hHQ16fpdyhRvQYTvaxbhWAdiUxhZKrXyY4fB3txhg2E",
  "key7": "3oLd5XmBmqxToShB4xryryivDhmy93JrwP3SfVEH9jF7d9dZaXz7kny7CsFxDH5fa6NLY6XRaCxyaTVbxUgU6RkC",
  "key8": "2pnJsPpg9jGBCCcD5CQCbckve9NC68qKRFbtiCAvQZigKrrBuHqKimEH5HbqmV3Es9jpLBE1di5eLE7UAZX1mRQM",
  "key9": "3Ms4rYBJki5YtjK3gyqZGZ5PGQgEsUiLvKsSgAd9x3jU62oRdwdCd5MaeVUSfQk5eNZZ4JJVqrbQTZwywMfjMy5m",
  "key10": "4ydQRCVFLL5kVa8gF91YPHVtfGprFQZ2QJSQRtZc1K1HrtHKmFVPArtDTHufVdf76mQveDpNbehPPT8AqR7MYYPi",
  "key11": "5AvXrr3neqxYxZW7ydQoHxno582nSNcSJM9CiFYnE9cQ1z5arfML39ixNoLXBQjdmBQuwsyVUi3832okrmcjiZtt",
  "key12": "4x8njCQzsN7GqPK9ZfNnmps42S7Avf9j5TzgxhCbmJxMycg45GP5FxSQ3VfpThAHXT2jk2omdULxQfiix9XE4WHN",
  "key13": "3VrX5cRMXksop8RqLpoeAbYDa2x9pvanoY533CFrCQBccBVb48bt7PRJBgAJSrtbbzWJsdcYrsy49ovi3TAVHhqZ",
  "key14": "Jqdn6mkmeLeVXKaJuhd121k44h1vvmYiaHQxUqoBj7pu9iXNayoW9NohU7LZQvP7mzpVZqRi46ATdgj7c3rEGap",
  "key15": "3ok51k7nj473YbNdUTzDjAbo98MEAgotisyboZPiQty4dPyxFTGMpRNMgZUHMmGKyh87zdQEFWdeWw4BqNLFPJBc",
  "key16": "379nXUrpXfu2s325H5U9tDLsdo3yHEhGSgnE3VPeE3PptKtTU8ALWYBTWa3c9rgRwq1nEgjvRwrsubuK6z1oeH14",
  "key17": "58rwdBnnReMNGvTAJkCj13iVkxmzn7YEJVG4WGPE1iVsBjNN9XUuEoTZK5JXPqYmvyp9CGyF11PrdLqSGWrRxLh8",
  "key18": "JfCDu1xKSJjnNJSebUbpuepVzF1bXkWtUXezqq8XruPuxe5PuzQ7T64NStKsGgHippH3xBRmw5jPTT4jeEEtZRT",
  "key19": "2Gbm1yEXQbxLmetBYpzGmZ8B2AuXirdRQLCpVYR8pRYrvDsgegAhYNEWDZ9b5Qt8r1zF16vB59WVXL4rEAmqZuH7",
  "key20": "4SY3E5z6fhGCPTRatDGC1fTabWj5cxfGxD16BKbGt6BvrzokgjHzee5ZT2X4dvQxrVXBJVXS7Tc2Aewe2trQHPQM",
  "key21": "aDjNRES4EXjFED7mWU8fhhMsnEBeiXsEdGvzMDue8qtkou4QH51xzG7osPjiLHcU4KY2vt7ZjmVx9XR3yUks4mF",
  "key22": "4dvC7kKJBuXwZx7Q59GHo9EafSnRhqfSfx969ys6Nptxy299mzeCwQL9RczNMaoqx6sujQngddKAgdmfx6Rg9qkY",
  "key23": "5DAspYD4WLtCbEWQ6cjx7JQQDMMsG8GZ1B4aZCB6AmUL2CMjevtTdnrUpNFBzv7Rse9cL2neTz3yQ6xikgjf2NC5",
  "key24": "46KFCFKbvWTEnyYUmUN9vc2UPCVXK3GtiYzh7mBPoa91oC3ex5ieY5A7xg6ZUUNWmYKJfqtebbYhEkDe6j3XfwLN",
  "key25": "54GKCNEE5omAbADwasnCKZhC26xQ98NUpzKmN7x8RV8pKrLuAFPrhsGSC2232vQDoJqQXcvBURzytBx94mTAuZbJ",
  "key26": "2V1rxSuyxioGsMBKNjxGG5e5bPvzoeZLZGX38uZasfjEXUaN6LdvtaW8J37U9LzzXcbLzPDrBzRoYwd9bTbPsHa4",
  "key27": "4rz78DcgtDziA9mM85WjmU4MTujGLBfU73PzhoQpxdxTT9f8GSVQkYXXUdSDzptB9SK2XG3oaDhUwyjTLU7kDYwC",
  "key28": "5fLBUEx5QD1oqinizL6ou2zaqLcSkjDpmAzrhmZFptwDEw5Nkf6BNY75XNkaaQYS6VDSLKhhHomicsVZ1q4zwcgz",
  "key29": "2pqd6fiKfLAFd8LmQ9Paysr7QwYQVRMTu9XZqsNFzMpCUF7ZvUTNXPQDieXLwA8DZo5bsEecbvRGnHdCciR8c27H",
  "key30": "3hqjJjKHoFNJsxjUxjXebEXbLTmcWuWPf2jpSJhbcAjqc7aRnWGyd1fNdC5PJvwNpZ1zmEMBWzrQSoab5LadoyXF",
  "key31": "5pSEqveftq6vrp2i9VMYbzT3NtHN1izU74NfRhHnSTUfmmQ2AXZZYGCZzrPuJgoe6RaH4qC23MpGDghAY3zMiSyo",
  "key32": "3KFjzk6h3bZeg61NDjHM3rZuEKvvurDeVa62qWaa6nomnFNNwr5fkHwR9FEMddfhrRXFYKRSXaNqNEt33pYhQavR",
  "key33": "2KuiaWXF4qaVm7AZxmdLz94jNDdscsYgHnegjYWARqmK2p1N9BrpyTfepP8uRVgTFgJoDMrSFHDcHzCovykKSEUm",
  "key34": "i7h4cAGkTWqWeZob6nuVoXC4QMoUzJ7FvKq9ziXucYg1K3y3xQV6vsdTvnKyioHEbu1x7GdjW5SQJu8bWBi2yYU",
  "key35": "39R1EijVwgsEggpzDbqSH7oN9oSa4GFuQ4c4ipRjcUzFy5bQv95sukviSgmKVvoqyJL1waa1J1Ar78H8NwWwy6V7",
  "key36": "XeekZStCymX87jdVD9VmcKK4X6M6N6TTLhByHPCtQu8W6CytnGiSJTCu9XSkxtRgNWyrRm8WQUeKTf6Y39yp8s1",
  "key37": "2QvqaaL4GKp9hytDvf2vmEMzv37QRyiBGZamcEuYZNShQMpWFpsmsyXzC9CpPvm61Z6qjyZ8WUkASybkk59AjLSn",
  "key38": "Q9jZv8AiUuYvjJSMMQ9qUxcG7FSWpxQhNqBMpS3GANwgfMJZxLsEMDhjJmqstxg4dBKxm1f7jKnRo9Q1peHXp8U"
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
