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
    "5KXgMBVkYumoCfH7YJfr45u5rTohLqawwUtYq9abFRZK5g1AFoUBZ7hNC4NKgrBhmJUhWoXsfMK3KQe2576bTYz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cqBNb61mNgTvFRvzrQbx8WZLnygk53pnjgfnVnDTbuDRGMGvALVD73PgnjaB5WGWgVDfNGW9yzgmpctqHUPrNdb",
  "key1": "58nrRqGzWoTKVVJU4ZCTEsfeftpd6jq1GEter8TWFfFvbkrgLVPV8UbyA3kcYkiN47rZPw2kbVGmF6W3458N6Avx",
  "key2": "48NCgjku6VyhPeiL8YnqJaATgnuBdhE84MQPQ4upYdJ3n9G6LtLMKAXvjx43iKoCutAs56vtv33MkkKHX8nWZCrF",
  "key3": "2SkobWf9zTiWboWz5eFSctwiK6EuovK1tQyCmUW3kjAnySdBnGZxDsLAbNSmVNXP5YdPgDF7gT9iM1uscJjBgyur",
  "key4": "2EHFZEviGNKdg5abhMWUHs5EvW5SCy9mwgYrLvhM3XczQkzZaawcXyNgWyL1G98iFwmHS96eSzvyN1RQgZbsUvxc",
  "key5": "3XRZbWD6Qr2xCALWEwXFgxM56TLDgdd9XuE2iJqv9TUmbbvC4aQTRZJAUBQC4Dhdvizgz3NKCkybpatiugSTLR6E",
  "key6": "4e5ZyBkZuHmPrPkNg1JTnXjMdhe5GsXm8m2ohmSyASo4uCEmUKTm9CjdYCeBeB8a1mUjALkmoVxZoWa8uQ6ajJF6",
  "key7": "5nopwZvGgjodkapp73qpLR8BjHfhfvbYwdHGaVcxSN3S9w4AwoNeCvPraBAfb3wqnPneuNHUpjy8aq9KZmuGzcTG",
  "key8": "3oNsoqZnWfasnDau4CZYpj5WDP3aADaPj4wDyk8BWkLucJF28UsRV5XrfXsLHWPgzjp89WW21NRmbpypaB822dAk",
  "key9": "3kDQdrCeiF4HMXd2WTCuAxGJTLFDTP48J8DEgKSfUJviN54JHpHTeMqTRDRddPW4H39TiJUBpcbgexJjHE7He5JA",
  "key10": "2mzNsW8iriTZpvEXuEX4kK3XQF2hpTM4qwjcVCZq7L7miMjoUwNiCXFoumADx7Qykk6UmbK3hhpgLEvLErN1utKC",
  "key11": "63ixcQ3jChmRVspU5kMFZPA2B7hmY4yov2BwqjsNNusopgai55qeJfE2aLbhHMDeXY2CDDm1ibb1rtSfvkpiC7NQ",
  "key12": "3EZWY3RbccRSuhUhdmFDRTLCo85BDEwtqMqJmz9pT5Lm8MMKGiuVhrsR8gnMcMbEAeaFMQ83qvdbwaBn9hmjm4P5",
  "key13": "41UaeQmfjiF5kBSDtYPdSf1UkdWyAW3gN4rwSB7Agak32neSmHBFstiUDpQWDJAwSMnJMn5U2BS9UbgTbNfTNX12",
  "key14": "4rxHCg65dxpek4EixJz5zTz1r2F5wDSJpWH58jALm2ZHtdqihLqzgevDmFvon9KpL33JJ8iZcZZzZ2NWT88kokum",
  "key15": "5jH5Sjx6vtNtajfENye1ESTcUwG3AvFxWTjrfGzN4K1Ne16YdwZN7ymf3gDFKXeq1pZB6cWUHQTQwPJrceoZpRGC",
  "key16": "4S8pYFM9tzo5huoYewxsYyFcTkRSebjJd9Fn2RG3qPgzRFegWgmA49JfuQwv6JGeJDdoiUvBuUg2ULUA2423n1dH",
  "key17": "XBVTrz82ssTYBmBtqqkDNurVpDAjkSwNoqoZDD4iATArfFqYK8GBC3fQBLGXf4VTFEnhm5HexTtAHYRHHk9NW6f",
  "key18": "4se9qQg8ryQuJw2ks6xAkBydSsMA3fTuDaABZrra9KiNutMr6AffVtePaMV86KpaKqYH37demhx4fCzmDtt5ZDYY",
  "key19": "woizjBF5Ud9VgeZgysXryJTDc28uptBEVPQPpkxhPNkX6bG2ToyDqKXtUnRVR5EE2PDP3zAtKiFhQdacUDzuWGs",
  "key20": "vBWvuLXkCutmZCjbTdQEiffAZVkXoWaTDUncw6emPX45ucxjHczw6Gd2prBHaSfdHqEGMaDn95484bZj6dY44cZ",
  "key21": "5WGMuxjj3jAc1GoaQGTVk59jVLUN42889Rv6vJ3jPwGcjgqtBxko58VeBzRJ6r6o1h8wU2dxVuYGbEM5DP4nftzV",
  "key22": "3BLmYnVeNWWfNyTsVKH51Q6YobAmrB77fqf2iJiMvoSBFX9J9tchEvEoDQV75pPpnPu9RcQKbyLdV7warkNA17Yw",
  "key23": "52R64UhrJHWyQwNA9MpRezGrpCkLgbfuW7ZHhqRpexeY4Be3MK6boWqLpRCRhvcU6uS3JAHxmP2SvpauGSKfV8Gi",
  "key24": "H9BWiyoGWiCPmXWMQkFCpizLCt635wb2dLdMcuWPZtTW1vmAJsrrjgipMG7DeMQ6N9C8uaMssxkoRqpFAtc95R6",
  "key25": "2Drqdoi6DuRRNfXD3y2jW7aCuHBZvgnBqXp5Y6YuzeQTQ7LKg9MuT2D5cLs438DTTMhVs32XuJebuKDL4xUv8eNP",
  "key26": "5GhJrchTkQBqHJ7PJY5HM6PgiDjWy4nc7sAuz7tsBLMFnMmoU9VuJFrYAL2XLgxJjDVCUWViHJXC4omAnMcSYn5h",
  "key27": "4qQnfHiKwH7eaYGkNY2TtvgFVgiUquNTaqbqvsoShYNYd8PURZxnGfYmapCp84ERiLrJrZsH3HmeiKpZradyHYMx",
  "key28": "3uSwtbor8XymPjn7DmLpdBkY6Z2aaZr9R3iWMguhMi55bwFzaN7TqAcCsNhCacY8vFQS2v5ZNBKSrz9wg5JB3XzC",
  "key29": "2DnEdmoaKRiTNJRGEygFVhbmgW62Mvd8zyrF9HQZq8VdMPXZ6Bp6FGarwue8MnsbmeX2BVc7Yrw6BF9fD45SjzRc",
  "key30": "3cAsUFxR536NbgQfYfmxFPcyb9hULhWQFmMyvpzSj2TrP56HjvCzW4SKYbo4B4S4x6YYA1176btRvib6hsjSEjaN",
  "key31": "3Ec55jLdzWaAAXwadcG2jL2rBCsiUEbcHxoNQB8CM8GtpYwFud6BuqAV9oMF2caBQHA2xwiALeH7oYv7K19vnuKo",
  "key32": "5bksb1tWu9RTQG7tUpWp4CtxHgmEGNhCQ1yv3q9ZxmMhkPC92DRQ5E4AhPyAkMHHmNZ7Pda2i31aD7YuktPCRKPX",
  "key33": "5qTmnUdzprw3DBf7Gr5RXJuXdfmdHiuSKFXrqcdhv71Td2uW3Rh8tZH1hf79Q9qgRH7YRcTkc2AxffmfcyeDwGy9",
  "key34": "4XSRyjNUdZnQdsv5TTsHY51UfcaRdSZ2bNso5YDm4AxSFFE3J7UC8yfyVsrKoyJ4tu63tNMdVwMUQCCdf9V3XbQN",
  "key35": "5DHrZrgxVZ5LH6o4CNeQQ9bdFJZeF4vgpTEqvvvFdUGQqAqiRqgNRHk365Uq9cTZ97VSPNJhsW53tq1e7UQuMBt1",
  "key36": "w12Nmt6H13bF9YCPtDcWTEaziGr1JP4XyQYCi1KB6pnrdFKWPvK1EgnP93PtLhXYK1ecvqQvZXwqXwxUMJpMLsM",
  "key37": "2m5uXGFMRjNYCab3i7SZ7dwzRTMLFVDGLf9EioEnnyGo3H8s7sXhDsUjLchfzh3U7FwASNAuE9Lc5fpciv7FjsMC",
  "key38": "4wCCqAuoZkduAAHE3jeKntixZdZvTjSydhQYoaczow8Pc5fHuUYDzzWKXoZfU2pox9zw7coq2unk9jfnNQzxNLQr",
  "key39": "2yD1sonPW5DsfNjHu1x1dF6sNqazMC7ssHgodMYV1et8TeKLyZ9oDnL4Dhd5WLpedfnMRuokfYWJWS3n7kdrEr6C",
  "key40": "2bdSuD7T5W6uutPAVmrNaMa2KSTnsDjRQycwHsLrb8jYjEXqN1vMBViPMXnN37ZccRwDoenRRWM7LL27LjnZJ5dm",
  "key41": "4NbkPmCKKABUurLwvekbqbQNY3rh5Kj7K6Madke732fxHm5PBzeZZaU2xVBg4JnPCDrdsCjGDBUX12pp1wDmjaDJ"
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
