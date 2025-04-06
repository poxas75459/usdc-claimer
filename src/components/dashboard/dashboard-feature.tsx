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
    "5jkgEygAEEtNrkg7aXaHbZwHanrAA9f3KJdBFm2pKgSi4DEDSVpFp7YJZ2ZueGqYAwqoxaBGyDDHjf7dUXTfEvAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X9gecQuHZAmUoUKHG2j6DfJJvEM7tsNux4AtgYYbzdiMpYwjH44CbmUsvhoDmFmcJXwp8UnsEPCwzwmhrcogjbt",
  "key1": "4aQiAWopashJ4P5e7uUjhgkAYwyhcUvSjDo7XiD179hehjfyXGdWbyvrV8EpKT6pBWeSV7MAQ9T8uRm4EgggZwD6",
  "key2": "59uJKtYoBASeVamGu7xrCyFNSSw7ixfd59uamwQaZpkN5SBUwP2CveEUth139q5uMCUjffdL7PgqcqGgPDsVNa7N",
  "key3": "3i2tMtwMqX9J9A229fP7ba6WbKLszwv65zmAYjRQ59tBDaJ7V58sWzXn2tHSqgBuu3jRRQvKCr6sE99ahVcTJLwn",
  "key4": "2ZobDX4D9ctorxankRWtRTWw6PtmVmvZX5F1z3QB9tQrhLghDU9ZQg7eJc6LEhhTndPBcgttNKPK3Zb2xtUoVKXm",
  "key5": "ivV5n9CYnsGX4PW8RqCkjXqKnd3rN83454MZeo1hYVRj4GZEDs4QNhBmneiUyFHNuJDqqc2mz9QYtnrBJNqwdEr",
  "key6": "2rF7QVJaPWpyrzU32BTPLhGfkyA7MZjmFodZGyjFbcx8wcP6iYzPSNbah9dkudMGtr14vHJnjWoo1B3u8RPvmj3N",
  "key7": "53Mg4Soc8BhVn1nvKoRG867kmAnZTGdLWga3rireCQSEXabJy83V3HA6gEkPh7eQWTBziyt8UzLE3WKwiSMkBzyH",
  "key8": "pHdBT3Rb6dSa1hpSSKhJiP2TdnwQhwF96d5JXWHRcgd2oKigweK2erPke3EhRGZ1vzBZPDdzzJxMntqCPFWF9CD",
  "key9": "2evyjxtqzPdVrq2FvJe4qo1FUYsbtqwauUgVTLc6GGpEoJR2yh13fnf6PzmPhYZ55S5Lmk77nGeXfW7AghWQwghg",
  "key10": "N1x1b4cwynZZ6D4fgfARZATkSigmy4fASKimpyksE6PKUARGbVSzwfEnfVf3cXrpn53mGtk87pTKbSFuUCyrXA6",
  "key11": "4MYVSFhnmQJHeq1GQSCEJoiezDhEpG92T1FfQNsyZ9nJjyhypynKVU3XmtMW83kNrqJGghj3VXmBpjPc5YGT1NV6",
  "key12": "4n8DurHXm5EceZe5UT9SRLKvWqAJGRpSvGnrpfL1fhxiPs8UHeLYr8G4q8wAyxcGiQ5tJy43RjGbxj25PFYvfFwa",
  "key13": "2hQRsDEWa6qG1i1ufD2yUifnDsVgrk3EsXtyvdCi88nHtudfUNREVjvsksLtDmuzM6c5szbHpjuKhVqmjfpRc7qd",
  "key14": "3VUms8hDJqcQJP2ZHesA6ZPMFbBmQTZzTUSEESytZKoyWCWbTJSjzqkawfRkGJ47Ua4tkQZEf5s8XtEEVAaJszYk",
  "key15": "hRK3y4pDf7PXjf5Y4ZLDGqnLeTJGdiW62MD7hW8Q8GNToAHfb3fPpQiWC2akogEFPFEJigDLei4PXmPoJLrnqx3",
  "key16": "3vMJGZ7AWE2HXdTBmHLbVZQwjX9vivXwsrd5sDUps55wV2TcT8LrFmTvx5rWoiLuEgqXJAwxDKMzKZh5UmnBZAk5",
  "key17": "fTq35zCiB7AwghbJ5Dt2egQ7bcWFsdrfZgyThijVpqZfmUvdYXWFz86PZgKzQu9WfAaCiHLqaGgA62GudKZP1fP",
  "key18": "3oJovyzV9sTJWhnDEVwXxfRrEnRRw7KS3WDng9RroNMKRiPsv16ipwJTe6B3i3kkYq9DUGQFZJA1535wHZLJDAZJ",
  "key19": "5L96M1aAW2f8gVa2t5igDkwjVP25X7csF6bF5q4EKhPP4hyojF2HZLj5m8f3ApCPEmdx9Y1MhkyeUTEEpXK3ExFE",
  "key20": "4CM2LozQNUNkRbfmtFbJv3M77J18dCjjAouDxDRfhnAxHn9MLs3Q51fALaofrrN7b9UiYZWzKgkWXDNX7uNbPmnC",
  "key21": "2SNVRJjSV91BkMK51DmMAwfqNwHsb51UobJwn8ecXUGAi1joHf36UYJVbqYsBECLnhaKWaWimMhfFSexkWepN5eV",
  "key22": "3jDQsmYafkwjEJzJBL5Yrn7s18GdAkaGs5tGVQPnndBMgm3UdedQjdnvLvhm6m4aFfwpqWKJSYRrQuJAkiG7dVX5",
  "key23": "3cfVU84ApX9pvSRVnXGRCVSx6HoPmJ7F7VfDhVChU8aXLH5icYk9wLFh5XN1a8B6L2RuCcob5ixyNLWQPPwqQGXw",
  "key24": "2aeC9K3WaoXiqwxL3Hoc9t1MCkXsMnFvD3SswfZwtMe162hWvCdJSVKvQsH6FZZCWK6FpF2uwx1ShtFaTfXoA6W9",
  "key25": "DQswEHBfKRmu7GHAVfy3YSQg7fUgLtVaqhfvyPbmqTc1EVqgmWQKskotnCx4YV9ACg4YxJh3VxV1knoBtkS3NVk",
  "key26": "RowUeunVcDCyCixygPudBGmR6zSWN8V9GqG7hieggrA4iRubp3ZotJKMFrAdqVr2kbqN5tokMkRt79n2P9pNL54",
  "key27": "4d8ci9aSVccB7JKLxJhNmbNVLnpfrhbCN2KQ3WqaDcfdW3V1hdZHJJodHybJMCoKSu7c7Esyr8PtCe1DvLMM28BV"
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
