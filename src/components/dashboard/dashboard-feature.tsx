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
    "25JMHyj9C4jXsNsZgwrxeLTvRTvxVgdQqtZ6TBtSRFPLqJhNpQLQChA7iDsP9yQWnPqPAU9jUwoXsJgRCgkzNh7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tazodVBRxsiTm44X5akBg8QkahkZiqyfmRUrH8hYf8fjkUWPaNZaqAgP1PBgysbzWzdiJvRadmN4AtdA7C1AuTJ",
  "key1": "jpmSfsPZTZBZcw8vBUrbhaLkLi6rnXGeRY1AoGnx7QZdteVPkknQRtMshiYPFScaLyvdMTuCAR7hpbKm8VbTvoR",
  "key2": "5dqvTvog385rYoT5ZKH3Sbio1UB1A4sPvnLTvHB34s2y7gKExWWJtcGgKXbjEP65fHD4r2XT5HdcvubXUhUHTMjZ",
  "key3": "cdf4KUePcJieskW3LMeZ3XcBZw8BA5MCLz8NS45JrzcRbjaAqU8XDDe4BRXJvMjADidMDKfPdNF27aWkjE8eX1p",
  "key4": "34o9gvejqg7Nk1kMqtPQ9ncmWC3J79M5vNn5KafLni819inbKnYwRXChwFZeTvZuzdRSw1dNj78uD8hAjntwTHcz",
  "key5": "5Gr92ewKEaYjaX3DFTqtzixrBVFjF8aQGo6dXw8cxdBN5hMkKP6gYCbzQxqLAmVwGy38tpnzpgF64uDdeDyjMN4K",
  "key6": "jK7QMv1XzNnRkmCSPu5BT4F3KzBHJPz5tLgXRGedqRWKEu5v3JeX3gWqEwtfugjW6eKMBLNTY9FgX1BTeN3iZoZ",
  "key7": "8fjf4JLPQ91b3jDod6HEqBFoDibViDcNkdQBn3KJkrnp4kqHcfowCqR1s5s5JHmceumUQPomVWn45jQA7vxF5Fi",
  "key8": "2jGbav4HvH9suGFKSMNjKXWtHv1xVv8hFvtCDTSc5ig3KU8ozgBkZuznhhnBhNuBq6MsFCKLqWaZYD4hD7gU2zm9",
  "key9": "E6FnwFmyfyeg1PY6bD9L48neSJAJgHivg8ZBmL6XKniqbRHJ1DNsp4qWJa2N4gZdrHP3267A9dYRuo3VRD7JwgB",
  "key10": "4y4CRDDny3KSUqExqDNXHfifcrqW8p53vTwJdJdovRUF53pGBamtecbWc112v5nYdazjdTpPLN7qBSUuXMAKBimt",
  "key11": "5JKGSg452Pxev8ewP5bj8dZ5xLXjjd99qrUU33wm2ArXZ7waVh2V3YD5HcEcXr8kceFegCMhYX9KTPf9gYyaVNC3",
  "key12": "LJEznxFrsXSsNKc6wQyMRVJf6ipaZeR7pWEVWXCzCMcJGEGSebej39vi8ybN1ZRKMWJ5x7pbv3ZxUSo4B4Epvf4",
  "key13": "43w2xBuSWSd542nTvk4edvvpkJdDnnz1fmSbMfxk5FrFsSpSpDEZiBARkyPA6FuJUU35nydu3s8JuJXKczbPEp9E",
  "key14": "PX96FGtL5b1NstCF9dNURpK2S5oQrqQp12UFZv1joxgoLefnMrjETq8S2mVj9Sr5PAnDQCxTgS18rg7UUTRsviJ",
  "key15": "2vXhu5yRchFHyyowH7CVo5C2BGgoL34R6ZqU5vCx1Jr8EXBeGz7bJ55JcR13tb83LNAGEwge8uJwMG2CWv4XHkv8",
  "key16": "5qZu3pJbaxJioYSUttUs6dccapvvEKi8VSfyE3RXkNNcRFdoXzjsQV99Ji7K6dXRjbAh3YAi9SpeFrJwsNe6AEvD",
  "key17": "5KupipLQqEnqWS3r48C9HBJVQhQSW8SXG6ptdmzJce9mvespFXRpN3a7grRvn9J3yqL7zwLg7v5PJQaDFtYE56Zi",
  "key18": "5vDhc9LMXU3JtPregJVm3u49XwHcKhjDFwo2kKwmBm1qWmDkmRwqKNg8VdhzbL4S2W6ddoUgjkdMS8vtPmqgGFR2",
  "key19": "3Jjv2x35ZjoGwsNZfeF9SMJYGCqCrAzhike9NuFENu88eQoacnDMqvvB1QM77dknNZqtmE6osqCmjgdWYXyW2RH9",
  "key20": "2v3LRcRKbuyheLTHbuS2UsjamzP7DPSXqcbAmm7XZoHeYFTFGB9nZ58dWkSjWWmsRGKAeDmNzEcUPBQ8Gcu17eUG",
  "key21": "4PnGHKQqM3Mf7exKuYZNL3XAzkayogyk6JVzsgQCdYaRbuLkbTjxd6mbzhLavBhdumPaVYxdmugzNTNPnFvKtqMs",
  "key22": "GvX6Wu3rSon6rgeJ3TEM8ZpWcpNE8cF4g8j9xye4pDJaaJAGhsVW6L1km4dJF1NMZ3tDyDtscj7SMtDi2DEvJKL",
  "key23": "67eiajZadB57CMJMw4ZUEaLEKyar2vqudCijd8Kn2ce5u8wTjy4kJmy1NBWQxTW42jkFHxeXcHGNhp7NieeVXA3m",
  "key24": "4BUJQ97LfiVhuM8Rcf5R3nfURGZgd5fA6KRdikLcKcDzgGyPcqhZHdYbxHYfWxMLGRLFDYsSNyocc1ZyZ7oESAEv",
  "key25": "58MxhJSc2WEjXzXGQSaVMtZqNHcg2qeHStmkXbgKGasYPBmNTCFiqePwYBz9Dfj38FQHUQMthLZt25MhKHQHafgZ",
  "key26": "3ajAv6BZ9GeiQcS9ZDufpq2D3BTUHU9FDsxPoD6tgC5s6saVrK2vLjcpDGohKSBLkyZWAT6YucjQUfAQgBA8GDaL",
  "key27": "Sso5ziRFxryivrx6xvHM8z1VWsEuBakA6DxS2SPoEyav4AesV31a6hstTGnatBYZRmhJJ6GXvtwGEcCjDGbf2Q6",
  "key28": "348Ru4BTNox8fLt5Zn4AvfzEAUdunRDMWPnxZ99i5X5n815ZonmDL4umdRs1PCUUQKfgctKHK7Ebm1k6BtADTzYX",
  "key29": "5nxE1HM6oo9WHcSDZDh13ZdsggjWEjweYEoU9NujTye8nR4wWkAHNywbkCFKH3bpm2GufQLbmrLN5ndiSCZuReW3",
  "key30": "BkFHLo7N1qLnSmL7k1cLeNVnxXdaHWmVdVcwB7ZpeTJqiipHVY3Jk1LQy8CTvbN3ZgAybrzLX9Tno6wYYTj8px3",
  "key31": "5u5auJ9RCex4uKgYRKAMuWK9Ypd8rf9H5jLs6KaFHDw7f2Fq3XaWzkGJJoydc5yuNDLLQnBgKRxAns5Jjqf5cXWj",
  "key32": "7zfepPgGj9drHCJbqGhjAhNJb4LZoeHreEaNnpCiwcZSP5MFW7AfC64yMojwbaHYBc2DzrSh6xGzhBoBHnif9aq",
  "key33": "5y5q4Rp5B1tKM17CCChwHt17Ue23SKkxerc1SwHwkksuzr7NFnEEcw9UH3mRZwgXCtLoAQNy2LeGzDhWNCi4jhJs",
  "key34": "psrE2yUzhMRMD3Jcv3ufj9maVG4iX5TgZk9kU1JQ4meoisajzfAm5AS3oxLrJEkpivThYyFEBEptvEC6oQ7o1sP",
  "key35": "U19nFGE7RXcHXrw34MdGBvvFzTdwRmBQqNDoMcP6XBR84w7jBdCemYAYrmvWeGgHGYrXoFRjoP8bGt7bhbEy1iR",
  "key36": "47pfJ53mRhqGVu8DPHz7iRUEGX9RpM87ERPbqSDJ8srpenVNEVdppisgqoGwWfLVR28aK6YSeo19SgXoHJNkt7cL",
  "key37": "RL7n1PozKFnzj6kodqEidiCsQPEKNWvWhd9mqmRaRWoRqm1Qa4Z9L7QU88czkcS7UhrTAxTz7gHo2WArVmeBQyP",
  "key38": "5UheGmTqho61UP82cQjbbSQoiYiyTGmyncwatgtv1EQTyjjsqyHa4yvLrQ4ozxNBuXutUo9oWEMDBUpJ9Pri7ZXf"
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
