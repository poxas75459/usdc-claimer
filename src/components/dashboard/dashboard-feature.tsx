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
    "4MkKqFe6j73UYybiX5SVj1GYxF1itbMyL18T3NouWHLDimHyAGgf9ytUEfiJM1xkBYER4hrVdYB6k8PF7bsim6ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gkSBZj7z8mC1bfnE2LgevxDf6CMGyahBfarAnFaHRYPsGHFEKq8zeRYRGHZmSJXuhWfw7gcEAVhnP6JbhXjaA7Z",
  "key1": "2WTszp4oyUoF5ZaLb6vrJECUrNKWM3cKLHsEtQ5huwBLbetJg6kjnsLRPsKqCbwD8PrbygZzZ3dDpv1qPtD8cAHh",
  "key2": "5nG8keqyhqwCftujhDGKdKMgCzSvzzdr2rWecZ7ccMKxaJhoAKBKKyPiYgEVe7mWYnquQGLVpFnWaNsdGrMt5KrS",
  "key3": "2Egotxk5eXtvENaj6gX78HT2yeJgZDwAWpdkLQdquZ5S5gftAj8tCjAn1ACQGbUFdtLGKs6326W8wxZbsSJZanhk",
  "key4": "3n7dTx1REB6wZoqY8V7Wamt8qr79iQXjzgkuvY4DnLWMaBbPLN2eaAh8KnyDP78k5UnZDuVDYvvUADMWxVEbAojJ",
  "key5": "MRuo2tPLmQ52o3aNVP4F8Grzu1jwCGe9h2FPB3Cv5cLATeRU2m1BpoaL6WBTSMNmk1PmN9rMRYjQK5sACc7BQa7",
  "key6": "56TcSSVNkzsacYJMkSdKW5Ua5mnN439axda3ooxyPTQAinM2vT99364SkbhNc9xBDVgLPtC1UmsjSSvBr73DqJFS",
  "key7": "4uJAW9CSU4H7smLsYzycWQgW1829P6KPMWSu1hz89xGr7hx1KRVRrkCQJ1hdwimceccoN7sj4p1rLLg4EjCV3YEv",
  "key8": "3AryoBA6hptXtTL78cZdN2y2hyY6WvMfmX1249ivqPTqrAzvyo5bBomUDsBKPhjqeURPQLEbYTeqnB4BpjMXPDMc",
  "key9": "3VDiMapnAa1pDTJRKETTVjcg7zvCeiN5NsFDpWUXN7yU8eXVpVxzdZ9JXfMLKgYPbugqidGAqHNoKm4SiRbYXFDW",
  "key10": "4onpFAw2t3Anvkv9aWypy7uWFaM81QuB7tiwaPWqPTqNQ7wRfKLW7a8TUPjFsxzw6MkRHy6b3RFs1FDdXG84dDb1",
  "key11": "26vSgDphTxDbYw2Zu9eaDpTppNdUeZc3oG1B1tB3NFoNfd2vsryRqAyF61GGtmWaCjFKnsG8hKLEYCbqErhn4Vwk",
  "key12": "5WsKou7SwQteaHNHNwUMvaAanWPBE9w7SLKWJecaAgnsRZKybtJbjp2BqXYaGtQ4ZPLnmuiM6rJ2kd1MeJrqWtwc",
  "key13": "3yp12qi2yeYG6aUZu1AuKWN6juD9chQiAJJyeM7kNpZiPKqUeAgx7Czug9HZwQVYMay5xdJdA4KsRs3SYEXSPNfT",
  "key14": "3W4yb9bPe2RHUcYk2ZwTDYxdqAdFPNNpzLp1eFFSWxfMmJfwvPyCQtjNncCbTBisG9W9k4KcRKjvaFXtq4tbeSwf",
  "key15": "2bnWqbYnpB3CG6hbcTUDNAFpv8ouU9hgcqK4DyQYdWD3KccYu2zX6vHrXUR2CzLAAH4SZhtkee2d95VHEeFrT96j",
  "key16": "5DKNHvaVGUQ6pWc15rcTT5Kmc64LTEeCbNDHf9VGLqqaHBVHsEaKaNEdCrPPMN2eE1Wcdvo71rsZLataa8xidULh",
  "key17": "3r6YcryqEJeCeKNdQ6yEvoeZo632E3kLcbcXz3h1sRZYW2y6AACx9n2FJj5Uh9TFvMrxVKrLXicimcMdVA7a7HAh",
  "key18": "2Pz6HXdTuF1T6cwcg7aKHGJMgK2SdDavUvpzABCDjzuyJT1CVhEovTw82Bko3sfXaLkkb2oHq3jkeZ3VybFXT55J",
  "key19": "5b6PLVpWft7hctcbvZzbcckLdtp5nZ3gd6DjnZaXbhGwudhbLZYnNYVZmit7KmfiQfUqUZSeWCS9CDUyKt8r5RNd",
  "key20": "5Rkza6CV9JeLetM8FjpBxWTyDck9p7j836jmkMayqqEd8xDu3YLxW3ATTFro4kLwXH5cdvnKWdNxUQanezTSy2Pu",
  "key21": "38BC1QcL3V5ZSQqZGmiRon8k9jx5CTncQHCVKmL5xaRXTgvB2dVB1BANUEhhigY83Y58WkKqSXkN2wposuW7yXMn",
  "key22": "4YTwma7Anuwkqvwaj3WDh3xrrp16AR11pujaKGq4W4jfABBpJYoi9TobGD57BieJyYDSQyyUUhN7fqxLaQWwGxZP",
  "key23": "3E8AUi8rHWQa4chp3WdiW7B672hTbZqcbHfkoeza63bQkNK6vSBxgm76n83UoGw5f7MtfiZd4ccXiCxchEVpv1e1",
  "key24": "LyrhioQwFHKUMKCzGFKyYvasEyxRUiBhGtjLat48vXCT4WLdaCDTgUQCnsVtgdu61WkwsmeKDCn2pHorpZQ8rtn",
  "key25": "3bwi9bpjDhN7mDeH76SSQPMQhsJwoqhKqzjHfgXaDWeoh64vgDw1XQxsRfBgcWkR4upPNUQ8fe9cLv1TYpNZwEQs",
  "key26": "2MoXLLsY4N18ZgUyysYxDKYXUdWNkGVUno11C7VH11DTviYXyYh7EaBCnnU3Wt4uVWfFmzAGgJeTQsqC8fCiA2CS",
  "key27": "4yztP6bYscoiA5vwLaEsvC4ruLU7cVNwDLRpLU6PbVePs62M88NaLNDQhBKLMN2P3XVxJHwicHFaQBjSu9WLgWEj",
  "key28": "3FGdQsrBMZrEVJizCr7FRj7ZBxnNFwCpffv1fnrBsUnzaPJPKptCSPRaj2fwvvduG2TqwV7KPjkjWLNGXpYSya56",
  "key29": "HftfTdaTLouPSTAdYuZroo4kL848P6trnqkyrssWL57mwEQd5bP51wpmFMM33uCi7M5vEMLjrcjtUAED9XxSoD2",
  "key30": "554S7WfPqaL3pXrd681R5h79mteNMCd8Hpc2mZSJV9fr5K2mmfZsCzwPErYdDwytSvLnanfVpjAuCB54qdWcSzzb",
  "key31": "4rWctdvRmbvMXHghVNBsryrhneXhyheNjxQvFydcY3bEPzSXWo6jBhCTCDx9ZXZPJWpqbbxqYaQ9eUPsCSzd9S7r",
  "key32": "3RnaKZNsE3MkaHGzVATb4GWRDPsbPKDECUcEhdfpaX4uBajBWw1FUDX7RVqtYQ1TM5vfwjF5n5cc6hyGBuQva5YY",
  "key33": "5zZrTGXMgzFnXNLeEEXvnnJcYd8oeN6emRKfAgMVDKVFjKX4phD9JBzGpMroFwrsKtmUJDq6L6JZ7nBHqTh3jph8",
  "key34": "4NSVG9bCMxCubtPeSxJAU342ecBwPpp2ZdigC2rZcBQVpEeqqLoHbBVAZjFyoQagnBDuHXJDTFVNTnBaMU8T6QNz",
  "key35": "3PWqya3Cv2S7pisGCEomUKDjajdWayYMUmSu2WDy4BiBPp3ybkLYJwqgHPDnepdDbLioixF3U4kNkypiGm8sWDaM",
  "key36": "5PV5C2BUVdnh3SJDsdTGK1BZSaPktcXe63NnPg91TwkP9yWmwThNFqa8StsjVUw5QeA8j7VZVm54ZdFTzAS7WjqL",
  "key37": "2hQZUaoTfBEGXiw2QDnwE1BjcvdFEzPrQJKtJWYyw6aFVv2mbSDQYPmxaizDUgt25xbFyQKiAZdDhTmLkTGqZfq",
  "key38": "3A5PPh1TYqk7KhHAKFhS5ijCQZH6yRYfHKM1F5se8ejZHEL3NvDsvr66Bp3Z99etmDur83DaSWyTk4J2YNActb43"
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
