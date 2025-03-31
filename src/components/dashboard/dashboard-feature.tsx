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
    "3AhiJE517FgqmTid23Qph3aSMupRHZt4tj1jMkmcYre7Ukyo8BsWHzk6NiiVcBkPsEWjP9kNB1S7Q2NssEk2uH86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DpqJgQhLGAqvPiuxhewXu76CUA6ha81D5pNLY9EzWdLqwsrKUd3HgU1VnhmCesD3F6mtapUqcujmoWsxj6VLMwL",
  "key1": "c2hAFHuM1CC5wwaBPbPCvD8GTTeL7j2tx1KnB3LSifRXA4smfwSt4LFnm1JV2KEk5ePHJRwDETSZzcmKywnrpch",
  "key2": "5Y2cLaAYYnRAeEnt8Rj8pKiBTEohyMHMKXszybgJBUApnUGWwVG46Qun7kbcdDxew1VsZo6tDpatMbvFh6nNWqcX",
  "key3": "4p71YQvywpzWcmbnMZLbAd4mg9tD4UZwRGwZbT3BzSoSSZwxQxQ5WFpcmykVG7j5hGUHk4WvSQnxp4ftjzyf7efJ",
  "key4": "Gsm1BWoCXvMKYAvTWuWmNyz7zGeZJtMGd1yRE2gss39ubqrxBMUfMyr6mP7hr54Rw7ZHQpLYDovc71jcJramci2",
  "key5": "5Zr4PL9ukgh971DjUB31UtQ5a99AhvCpS8cB8adhNzEkXBWh9Zq46v3o1LGgfZvqX5szs2s8vxtoiZfXYERuqeYZ",
  "key6": "3grNAFtHGQP1oisuam9CxJPXQcyNELycL8ah31xWrRkCcgyjdfk9aUof9PPxUSMiMgoKHveJXN9VtaCvjg1MzEEg",
  "key7": "5BtpVkpEUPEd2NcLK8tiy2R279ntBerQZHEVFpAMzXAs9U3mu1fD3zi1jhH1RSbzHXUVc3XzcMM1Q9hxnWp3qZXY",
  "key8": "4fbA4a5TrQsfWTHYH5ZUxyhCv2hwTAoTKUPxtdhk67QoxfS4mBSGqghtXA2RnDJmBzG4KAyjkneGGFHJSdNAgCpw",
  "key9": "5xfDoWFcBdVt2yAaC196Egx6yxqmTkyfMhydDoJUc2NcA56LffVhWGhHUxpAYc27yweYfvA2xvzLU8sZJyj1rQCu",
  "key10": "61GV2YWohge8UcRdfCttpUd7CPycjbMnakf8y7s2x3bYqwYuatxjXRMp4VxDbpNBkLGu1cZfgwQfLxgY6KT9JX6i",
  "key11": "62zVxpoKXUSAJ1eUehRXjm4Kj8pFGxQuGwPcSNK8thqcF6BRoi4C35kq7XrWn3NXnn67CK9RctLL1pVRmyGDwrhn",
  "key12": "4ZvTsBs6sKv9GKDkG1fxqeV1rSDbwHSi7mKAvsd8k9uP665GSf5uX7PVcF1PnRippmfbnB4JpVBiXuNyrQV3rQML",
  "key13": "kVgQv7krVmk6hYe2csNAF8gAjjTZaj5t321QrDfWHuxuRYBScv6eGNfELaerjwBkTPNirAZyatSdhsCEbDFuigT",
  "key14": "3rYRhRyxQTz1SzTdB8nfnrb9K7hTXnC1iqiToTKHnXDxFGFgbYyFp5Qw6f4NFQH8xt9TvZDS5Q178UDcFkE1a3vE",
  "key15": "5Rpqj2rek3MBEagCPzTdaezFK6SPrV7m2hPFhJeAUGHziH5mz2WifokJsxXfuprw2fgmdDsPmpj8K4tqdaPdeDxb",
  "key16": "5zGLTowdFdo8EozHHWXg3hafJGUrATCXEbfNjM6woimXXvFFnjHiPqQbKKhoZzRu37f3CePPvAtAJuhPP5vzgHLZ",
  "key17": "2Kab6HREuncipSZCgM1T4yxWQCmiecHWevVeq7AS8tQNdQ6WCopc5PnesWfADPArTAutGqLLpDxqmJ2tbMUagWti",
  "key18": "29muSHBGoo9KPCUC2fmAb2Wb8n7zrrUKzCdFuw8Zdf7J5bLB3QiR392EWXC5LrxKC3invhejLyqAnxB5tLZnR8S8",
  "key19": "34RABghmz8HuyVFq97kYxqq3y78cNyW31F12Jysn1UzWaRkspgrjqupj3jXBrxkWvzy6Q9XgLRZVF5AnjCKpzDM",
  "key20": "2UETkF5k5E1kKWUYdyrubjEo6dVEkZhycfntouE7JaHQumo3Ws5vo3p3anyFtkpk54HSfdn6fsCV2uXXKftaNAv7",
  "key21": "4BgGXSjJ8o9QeX995inCgnao4qPUR1bndPYh6spRQnZd7xGBcKkVhq9aq3AGsTCzMxsMWEqCL5JyqGvYBWjmSQKc",
  "key22": "5CTKLVfggW7MVZorbLnWmss6MLhecXShNNue5XjbiyDbkcsefVqpydtcPKYbiXSjmJuTv7629SnUsKKPtamJiGNf",
  "key23": "4g1zvGmE3XBacqB72T7uVcKQ64cHQWawcQ7qnKpmDRLqTZg6DNpkU2dpzCD3DNxHAqM6BxoSiq384t32UEJzuRNH",
  "key24": "gWydTxBrnM9cB862A1ZAJxX3WURkTdGjQf883evrusDeNu8ohQoAWm2d9APmGVeKiPkGFtY5hNW2VYr391V8ud4",
  "key25": "fqWiPry4q8d1ATKsJCumDAdYQ33LCGEpWCxGeiKuqYVMsGqxQUAkrfM5mRkKHC3eXoSR4VcTumbKgDAjN47yBCN",
  "key26": "QXRPU3uueQLHatFQP4pzy2Q1z8F914KbAQpv63s5F2xtqMep237uTzh3UfZdcKR3ZUPP2tQef5Yw4GGBufNVK3v",
  "key27": "nzA9e5P1FDpVJ78RvLr7XjKRq5jQcvqAbb8zw1SRKoPXQNbNG3XwxhDsfRjiQGGtuz4LB8sdatFLp2YarmpBbaU",
  "key28": "4PkQgbXtdMyJ2wXDaCfSs8QYGLnzcRi6WHxyX3Sc4kxgVGHRt4FK3NHQnyvhtiWK3LuMS9sK5afPzVBPFmkGAuxY",
  "key29": "4oV8TncVFk6aWL541B4CktmN2Csd8W6E7n3mjbExh3cohpzRT9BUAt6DcoiUzJ7Fuo68wwHmZs1tS2NM9TTGs9mX",
  "key30": "3ywWikDD6sTVbMprLnfUfa2p94ACNirPXJzrPyBSnL3yU23JXGMrjhm1XMCw21PEXjT5Z5SLMVrFy926LyQhrrgQ",
  "key31": "5dbnoBPqYvEA2WCraibhAQG9jFZmFd2p1HfcLAxmUZ2pNLe9m3pEP4xCX7q39gbHwCLyZXmzkn8y47gFYj7PrAea",
  "key32": "3cokTeif5nieZhrNF7KGg46TRfKNuXpkfyEKcR7DEEj7BHBniYPspxyuqMZXA2q1QW1J9VoSEekvMkBeztjccuwQ",
  "key33": "26pEpajw8fURZXDEHKVnSYdLT8QAptuRUc8tsT5hX9xbDZG72JjTMMfj429VPdSAreCwpcpRuAJAUoAJQ5eS8YJR",
  "key34": "VxVjEsoPEHm94oVJQzghVK3xXfmL2aGzqHe3KYqrdAXezKLXET6419TXNTc7rLPG7JaJ3gd4RGunYv6qwuPjgs4",
  "key35": "2uR1wX5DMy8svhuV8XTshg4sseJjmyot7s1b875VVwZEMFVyDeb3kzqGVnk5EEkKJuKWHyJtHniFkFsthJ2uYxQk",
  "key36": "677H9iTK3j7xrDbNnUtgzXhUwFY5YHexGrsJ87De2CrCsR1F7CsmJoaBYrCcCmr2yM6KryPQecDtdtSEep5EFDw4",
  "key37": "EBP2xh3BqzPoaVoqfdVkJyG4RXCgjWRyHxPtk39bsV71RAmyDJYT88QvDoJt5byU7Dyo3akt2vEBghrytaUBqrt",
  "key38": "5DdbuL8g6p4UfuQBRrspD7aM8gg6GvXBn57FyRyZoFFJ8UdLXVpVtgL3CtVbPzHKwiR6SzJMQVpJGwov19ftmZiS",
  "key39": "4MCEK1iWW3K6fJSN7xadc3cUeF3ywieukYvX9hDNCuQEPA4AUGZitqecfTmEu72MmCHGTWeUG4RqoqxzdE2Qqfjh"
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
