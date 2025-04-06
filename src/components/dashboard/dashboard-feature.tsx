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
    "5RzagR9AFGndsSG9wdaK2GQXxMszCvTEQLzxUJz3A6TUJQ8WgTFNU1riTeabXWKqhpiueB9U5E8CSteT1j985pqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P7A4SMabVfLNLmDMcYtsvh6R4CskCZ4AHwwCmm5c1eoKd9GtXbYETLn9NAPG3y2BpZHRofRhZwtfmGGu3HopNYT",
  "key1": "4Dp6q99Dzsu3BCmcg4oXXCujSdt6utJ1EPddmukg1xLN3uZvuBSP2Xo5Q38wrLNvnqdzFzHg23nZf4UJd8nnXaLP",
  "key2": "3YCAstBAd5m3KHYiZov7Mvr7yAdqrvami9XzsP3hqpowb4gigTRshzLwTqLvYVTYiqZW2nM24UAdDVCZhhAgwUBN",
  "key3": "hF7hW9aTHQQSx7LijSogxExg5WiHt2bGwu8ps7X7TJYCWSUnEiFXpXA7kLnCbU5KsAZMuvNyghjHW1FTssskgyF",
  "key4": "4hgbmEpWMMwtGtqcqsVehwJFNaEHULYwBtUiJhRzb4kP4ctciFRYgzsBgK7rTjSjYBE8LdG4X1FdsFS9bNkgdaCM",
  "key5": "3uwgpQz4coxQtZ5UR9BLTZGy9hBqyH7NE97dUKhwRZo4JvQKQxfiThji7NgwpB7qxXyMoUgwVng4teaR8CSfjRYf",
  "key6": "2xs3JgvCv2CHMVbvRfCm3zJdZH1wAWQknn1VvoRNPtTK6M8KJSHsHfNFHCSNpeiD1DEGLnu4zgJx5RJ8vEcWkmcq",
  "key7": "2HYzRbvTzKDcLzqnPMG7rH5Evppq36xxFxnvDJsVe9wHBHEw8pd3WYmoBMxi1UXBivphFJZnCAedWChNymcoBLvD",
  "key8": "3BUAa6mST48aZx7BVwBVnxL3cHZq8gW7svTbkYtpwpYDHtCi3iGcSd6rTjoPtQFW4cjxz2b1RU6rwcj2YfJz32RG",
  "key9": "56Rkq5grqCcJNKbM1tGaYxGdShzHqKuuA34sM27P2P8YfvWarPq9fe1WibhEMhiktN6XKw4CPHiN83e9xdirzipP",
  "key10": "5XtnKn2vYADEDR6UNK6qUzhAFpS4xc4gT4RG1scL1TQXQWFPfcp5sAAZWcibwUUmNK1PBrpMXng9yL784Ckz8ZvV",
  "key11": "57EKUBUzEjgx47pdptWN3EiMq5jE48VoqyA7K5eJFukvFQYMLwuEMJhKrhLc6W79XFtouFtRV4FMqWypawevEx14",
  "key12": "NupwA8PUHqYi385qCK6T2Neuq4hWtDqkkFgyhAHVUtYMxQxN5usW4NwBHAavWovpzTDenbuE8oNac3nbdJGZK45",
  "key13": "gMnmzxZrCb6J4XFzTxAYEtqQUMQpFY7ZTwQCEbvZqrFXCNKW49HGBTwE2cs4zzeXHSYWBrUGfb68vWrwN7KGomL",
  "key14": "51cfNz98154u9Nqfqi3o3qi78orGEPGgt3mxEc2ebnMM6DeTVk1o9LuBajjvbEgMJQ9yzHokqEbREN9WvPVa8SAY",
  "key15": "3176mTmcrb5goBt4eaQeLwJQwFd4ZRJDbZnLeX9Jhi3eaGrnJkLanY9NHq9bf8ZBs1somDGq1PRYy3NHcxwiu6Er",
  "key16": "4GCRGTCPYrc3JYioNkkZk4uGcfKh34uFfjEWvdNwkuQtoYKzDgXLWXsbxgAZmapVm112kzmdQYNoFxRyk3tPPQts",
  "key17": "tvrCawABedTmKVPJWrtv45Bu4qujTuBh3DUzWu9cm7PfWPMu7NguGPMNoWcvPvzhWdnpv4K7aGw8g2nRKvWf7E6",
  "key18": "VYz7T3oY7ViyLnXswA4bT9CjDnJazF4AdAsz6n5HrLYTfbpjqaQGULWq996Nsn4K1DqK2Nd62Jg4NLjXWvDq8iz",
  "key19": "5wYwH9YzXRdYb1J4pdirAvD1DKAjPVcSnjtK5YMgBd1FZUBXKbtXZkQ48sGBN1cJ7rhrrPwBjxCn1UCo6Z4HEefN",
  "key20": "5GoAzEDMS7TCTUkZaXfaDZrtNvM9toJ4irNBcMpTTEjXhd1wTwoLys783Cm5LDiyywtdw58ZiAzv8pCUj8dG6py6",
  "key21": "e9sZRnkbv4MDhfAQBqY9wUZSF9e8UF4Z2kj2YiEBrYv1GeAe9RVZn8D2XJjJ96HzdrLXLae8DMWEJsc86QzyYi8",
  "key22": "2o67GXp4yW9NL6mfCNxBTmBoRFfj5yVL9NBN3EKjZTd7dxMficMZK9gfZzYzzLsywJ1qN9tBfY2sxqLvSzZxGPma",
  "key23": "4FYrUnyZY2jtPTg7fr7JnQWpqnMWY8TESHi4ZS2jG4bbCercCtWwHyQ93cVyxTiE9N2yrfzzfqX5APTejsKMph3f",
  "key24": "5NEGStX3bg7S1JUQ2dNXeXQWmLPa8LndGxop5jZFLwfaM7HWyboWzPVwHdurPp4t9iWDr2aitmSLNdU4v8H1dJJE",
  "key25": "5CPhgt677tocjcVyC8kkUt7xgRKUnqdAmhwXnwd6v5evktad2gNSkixywUKtg5EMdDK98vpDtyqUiEmDYAxMGkD5",
  "key26": "3CFhxU8vypyviXyPHg1x6Y11Q1xq1cikBfz577VWXhLuLXvtjRCM9jErcaNpVGfXWEGUTikr6wQ6cA6wsqB92MLr",
  "key27": "653UwYNC9uMPRGdoWRcy9VRcFDyye6ZFonrcHBhSq22B1xPsmS5GXNft6iLjE5oYBDFRYoRPWQaYmbCUd1WWLiHz",
  "key28": "4V9ia84Bvu913TJiXRxfpzqSaH6997x4m3RhMcZdznQ4LUhpTpBkqvHbW6KYZ8HcxntP8YKovSXiseP81NvfgtQ2"
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
