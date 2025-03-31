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
    "2aSfqv5GT9HDJeK8gWqKKqtfrp4LnBzBg8y8LW1VCQrgcabJstETorxGz49PNysoY3intY1syFk9hVpv8SQS7MyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z95uJtqVXuBnPbKKUXLCBdCCKWd4LkZdsUZTveDdhv3zN6kmzVjcCg3dM94PbMCpKAdBRD4XehbpYP9eMeibMfV",
  "key1": "4y8T1imqBZs563P5KwLJAZeJ3L8aozQqZNhaU8qQMNqX4LRiuuT1BgS3mozyTxEYy1V4cuvAid39pau5BUZwbPzk",
  "key2": "3CXz4j6kM8XU7t24SVMciKHKKKEq7zwKYWhwhrYirfmPqM6kQ1ESCpCADZUxjUwXkPkf6eWbHvrCMTTyPDHU9ThD",
  "key3": "U1sz9LELErjPSQdLgh2cCevEBFs3EcRyM8aaCMHAgxTFyi5jGVP4eFzgcRHiHesbLSqJ8gNApp5NFAtnNWJEvyc",
  "key4": "2uARm4q3wJ8yUMHSxzekip95Ljce2qnoMWg5JZTceaPaK734tX6AXX8WWKGrBNM2A2qyCENmvqLPUHCz3cNXdroa",
  "key5": "3FgAumHvnySiuqgir15eaagmtx9SfNeBBus4QJd6ZStf7tH6WH5oWaHqSnNmjQ92T8pTYwHHxqDv7CsV6pUPYXMq",
  "key6": "3gtzVpCMd6hBXDmnx23C92RdPZaRZdETg22neVW2PWHgoMcFVe5UyCqNHJTBMJVugoeWo7tDunu7fehGsBMt5YSC",
  "key7": "HMB3FFB8P1mX4wYZtb9woj6gQMAuFhzET6Zry6hPHvqaWUPruDgMsnGDnmh2m7EzCnL8qGnKaapLb8snw2TE1Gb",
  "key8": "4ZpDJEBLMCXora9Mg95FUkkZZi77hsJXhJCWEhSuQCyfqjDvC9bftGZCjFXdu6JyxxTvBcr7ektjGML8DpbJaN3p",
  "key9": "2LJwu6364H1t2CewSCBeHUgfzf3nme11aMtEPcxT5bXhoBZceVR6HJpViye2QjUntCp2LFovRBCqfAXPVq5oa7Pa",
  "key10": "5poMLSTH5pAXXcXQAsd1Lv5DujLx51691k3pdhEbHsnanMttQsW4ZVYw8CC5CBNjCT8VN94LLbxp72ibhYVapSvW",
  "key11": "5G1sfxpcZE3FPNkbsvFqKJhMZLYXnUWmFbEtaPbnwoHEHjButujCeh7F62gttjAkAY2rndnpDdL21oAnYHpJ3o1V",
  "key12": "z6x3P1V7HMCkzC7tCZXTz5WXtrdgfVRhamR5Mu6HzpoGBad2m12tkLZbZiosKdk5v5acwBAABsVCPNXJSqJq6wB",
  "key13": "2srNbVUZwMJDTBgCktw2ycPBTVxsFp46dbQsrGV56qE4tiHQaEE9EWuq7gVEMAzNGfr7sqYcDJ92T2R4XwcMBQ6q",
  "key14": "51K7aVqMcZu6rvnrcYDSggmNcrK2zCjRDDNST6jRtt2VDrJWgJvKGW56P7saqpsN5Cc11aqnpofRc4SrvecbXk8f",
  "key15": "4BvPaULBPNXrwges4L7wUbmszs46sf9TwXCJQktfZ3jbjM8hwUxNf4pvvoNVzFEznDci4WA3Lf7UZRxrUvAWmkt1",
  "key16": "2NTNrjWSWaL8MowUFRptKo9LHxXNvRvBjGpzeXzjUG2NZGkmyybymEsEFU7k3RRWr2TLYmXRET9HZxRMvnAZ7j1r",
  "key17": "3f8yvJH9dAhe91PooQBJDJgkZbUqQtBWLoU1wSP28sFZZU2nbq9DszgUyotRQCPt6D67CLRsz53mf4iDG8ZcHHHz",
  "key18": "3kap4KHFVmAn7kTFz2yLiSgc6F6T2WCLuTQ8rZmbeAbj8WaA5AgaP9Gm1KoHnXMKYUB7Bx37pRjm7HhwuWyizFhU",
  "key19": "5yvJCHEKBQ8hHFgWZAGC6B6QFf4sM2Bi25rvpWw8drCb9ppTZdRkdro6xhhLvPq7MT4omb9xLfP8guo6dWcqgvL4",
  "key20": "23k3QMJqm2EsXmcXAJcjv3Qhnwk4e9HPSskL897CRT7RV3bzHvAd8EwTKcr1F3iXjccUNGXTQduBx2jzLRbEM1J9",
  "key21": "2yarxAZwXH4DLWyTxuuc8CXDEMfapkm8HJnWnCbbcvMw8asxSV1XpAguzZjrbsAdYcqXv4VRaGSrQFqjWCu4rmU4",
  "key22": "4kRMQREAReDD3fixAYX4tgpR4AgeawcRDc5PvzGz3x7MYc92SMa17uAgnEJwaTMvGVcE6Wnr2JhRNfQZy3r3f8sQ",
  "key23": "4VrKvpn4BsAVUdnuQ9q2XVBHsP3WyGwEFQsXpknaHqBTUfegMxbYARLpGHcYAXtVuto9VyNsF7ZFqnR8MMdyJ4S4",
  "key24": "pEn85mf3yxnFTjGa4qiB5C1ChNmk9CNChEbd1W9QYzMmhrhd611LfaC4o4ZdhTEzWq1hgHG9qWT5HVFvCiKLXP2",
  "key25": "2eaAT5r9DYdReKU32yaDAUhVYchrccmdjYPnDUtsWoPpvdYEEJdma4rDR8sgeYrAhcWkpZg76hJ19nVQxREfwATb",
  "key26": "4EYuK5yUkJJPWYKbZ6pWT53wQcuCPPPEUo92roRKT2DnZqVyECsb9cuTLzGRyNqXq1gZihYLAE5iR6xLC9jnmQXd",
  "key27": "23MCkHRR8sHTUntNLyX17o7NTB1kVVWGvaYKyAqzjXHmDNybhHi97wTCp5MbbBt7ksFwJj6rL2ndMsjJBBJFxnvY",
  "key28": "54BnkQqrePKLa9ao1VRbQXt6sbiDYYP74BJirMzY3J585XJW6kfrJbHvdTd8d2tCQREStFenk2HwPfBg4CuJcs5c",
  "key29": "57dK4V4ACsaRVASJoT9YP6yKHxmH66zbeYKewTyrjKtV6cRthVju8PaBVsEAzX1XeLGHMasZiCVa5qSjUBsSH1oF",
  "key30": "e2TFJ6dAxQMERvCAnpWGLvcVGCoYi2EQCTjdcp9YnNS1jPRfV1JyJ5mXacpQJj6qq9fQXJmb9XUfrMzc9RNxBmB",
  "key31": "3BehZDdJbPWXWpqgjac67gbVLV4nv4M86F4cwH8JphHR4REqVuE7aaegWrsaYBCMHJc9NAd34tjUt8iJdJSo4UXA",
  "key32": "2FGxcKf8s7YiCsdxPAZmYj9bWbaeGT9DgP7Wbyme9suv91jD58SX1nrWtqrDtGG2k3QfSBQLQoizq46AEDheBESj",
  "key33": "3Vj9a7KeMiLAr6EgqXsjtL9epN4gny5rXxDMTcU5LyqydptWbx5dksq7C3EdD3m7G4utPhssNmt1zrHotuiwKexn",
  "key34": "444YKT2qVSzMuMw9E15zVyY9nwJ31PxGhn5qZBKtdcCAB2929iTCXtmpNW3Lpxpyzt4wdsvLeP85dSRQaDJcDJy4",
  "key35": "fU15rPjnGNvEWpMwVaBsiEutqznmaw9R2ZDk7rLpgx5wdqtHDxP2W4snxvHNfe3qEScJ8JNF6hE2exqvJbmjkd4",
  "key36": "2iFTjA2k3Pzm9JEgnkDQdUT6TTkET9RyQur3ZPG9ADJhVcApeau7xVFKQNKDAbE86buErhNs7XuFpYyPTUH35UYd",
  "key37": "4yqHuR3wLD1AWVgpiczQhhozWmZzJyJ8Qjk1epBguyK3NptGgooaJTZcBD7b2qWk6N4VdgnvhCNmTsyjfe9yqUez",
  "key38": "NXUoABvGk1ch3AyFmZvjYTM1DLSkUBfnc4SRCzMf7hpdGVDtRfCLkQMk1Z8NCmqsPWaU4BUfhD66a1KaKoLsa6h"
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
