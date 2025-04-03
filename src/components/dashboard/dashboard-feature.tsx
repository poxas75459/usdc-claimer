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
    "2VzQ9Wo1HPKJhKZXTvqm5PMgvAvWYswsguJRitSHq9phv5buXmGAsNyABce9gWXJiHwriF1ykikqRZdzRQ3EvUZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55a3UnyjwNX1pr7vpGga5BDCpghzv9vo11BuM8A2ikpm61iXehgPWvTBAFBGa6r5vJrWXjc2MSYsfevoGqhFwkDC",
  "key1": "4tiqEb24NrGWw1szK5f9261xP7ZmiGCdEGdX7465FiwoDZgxke819ZqFv7MHot8wUyprby8yM5HUAe9N747GfT3s",
  "key2": "4qzW7yLneM6prWuNJHDQ9DCcqd4UetC5WZjPdEksfVMcXXtCxDqnK5AcYYDducBHsXA3BnokzR5XggQzVWzi3eKC",
  "key3": "5cV3GG1NMTKAixBzDHT1p4V8zTbGXEb57FJHgGbA8e82eAnLuQMbkMpDH3TDC31wz9ZQMh8EdChqCCg7sTUFVo3c",
  "key4": "3JiMwYdJt3xngMazZjaJm9y5mci2wh77Cqt7L4gJqidJ3VEwoTfUE4xec4a5biymYV7Sjz48Wi4ua8y9HXLK8sWy",
  "key5": "33LXqGbDpxJQzdmSrauZhTuwJgnyJY2zLB5YEDrG3VqKb3jjwesLg4LUMLCMeLd854bDggJ4C132BnStwUDb5vdF",
  "key6": "5p1M9hcE98dTUjjGkAeTcuSQTn6iMi9VpFeCTRxNPBhb3kereJEuJR2MxCBEUoPuqre3R5Zt4f5zW8a6rxmmoZzM",
  "key7": "2cztnDLNPdrAG61ft47JcMLA1bfHhQS9cD5KbELf2P6NFPQ2JE8LaU7jMLp33QMmGDa6KWunP7kVALzr5HofwsE7",
  "key8": "4zaZhFhAb2dysYshaNmUuzPksWZ2jWxigP7zzWQkZzNA3qjCnjHxUFzwqGBu4Kvf1Ggv18Aoy45JgHx7dHrma34e",
  "key9": "5ToF1gQZh644TZNmYMZU1ncZ6tZXkRfb5Mjkg5svvByeiHUXxxcfofZ8zw1KGKiVeeRuA7iRTfM2vUDRJguWPqgm",
  "key10": "2shvAxUjLLEshLaUfyDCoNtp5qQXPtESqpD5Xa8CYEMeAQsPxAjhhfxdGQyzs6gcm1krVG98LaSAEadbJrP7ufnJ",
  "key11": "3zYHg9o2z2scRMuaSJPSHewbMsgaBys8xHLsn9KYsTZkkSc2Jrs6aCTqmw94wqj5uVnt3KVF9pf9ZWUiATr4RTnM",
  "key12": "3ytCPjc5WtBpjZLg4zGT97Gqd7LHSyTSRgrnhrswVpUD7D5ev3fYR754jh8JUaoKv4Luw6xxxKNbocrhBYh9Jm3A",
  "key13": "48v1ySYudTk88YmECQ52FoV6zfQCZJSF7RfrQvuwvQeHkhRMSb1ch2LQhbCtg22bXtiHkw2ybd4ATSx74T97vLsH",
  "key14": "3VQCsvFJqiHEcSxK5wa4s4Jh2oBu7FpmxCTjgMzUvgNiEPyewe2r77ojoKEEZmLp7jT9HUhyia6bNyLoEhVjeW5r",
  "key15": "47BNwuNJeqX1V8xsznj3fGuA6iuvwoG5RhBPqcJFk6zMRsnmVGL2oLcqctowMVm331ykUfXiyrmCMT8RCxy9KoDK",
  "key16": "3TFdNu6Eg7GHbinHRcJ8FtftVYTnh52htE2LbXqYyow524VuJSNXQYTBFBX2v2TpcYQw22XhU6rS5m64zpMbuBDS",
  "key17": "5hXMLJs4zQtAYD1eWqL2ShdM3gEFUrN9fcPDRo14WN9jXpjeNiSjRkXNchR6SXm6eEHt8eZapAFc7JEecjd9qXAH",
  "key18": "542VKoAMnUd2zGaP36hdAN367zw7mKGmLKY6SHHU6hzkAdYkExLy2MRmU3pHFKnwkVwcYejevFR8vp2H9EVeUnY2",
  "key19": "3ECumFcEMu6r4QuyKoqMeRPG7XVqrZxixRMKd5QQbWM1B6vKR7GJ6kymZqNGYYoQWMk5X9Kj9XbyisewyF7W1aUv",
  "key20": "3j9zsQbPhRuNQVicFB8emSPCuwoLnUu1UqSmPy3Pm5WYXa3FyupuUCME58bUEQ5Z9c5UWdNXeG9y1GdnXNQVMYLQ",
  "key21": "4FqKQ5YEjHg4PxbpndmzcEkx1shyoCKk4dCDF6ERxchdiEa1yE98K8nDjbgh4Uyt2zQ7hyncK5iyVuEjvm5S1Rho",
  "key22": "4S4jxCkTyhm4jhrSLcGNXHKww5Q3RUv2FqpfVT8JZ2tfFNKLYZ9xeQehJGCt2XuDqhTQMevhGjz8taKrqCSTDK1N",
  "key23": "4QFV5CRpv115aPqvvespnf95Z5FNX6qgoxvtPaD9Py5KombUybm6FWEF4y28MYjn8SGqMCvcQztchT8Q4HpuoqsR",
  "key24": "34syQzQwXgo2iRSjSw7z7tH2jWTfXgWD7kne3TBgWXVxi45Aw1vzLWVu4oYot4VV3X5bTwabjnENLmAEyefLAmrY",
  "key25": "5ZmwHtsUtfAoR4f58VWP5Ao15Kx96CEVovZ5muqgpnWRKNjSz6dJjwZui6pu29uTiLkYc7mQdTYp3JD6r3cSNfjg",
  "key26": "3EGW75jYcQtadyPv8e81qDnj4DMsvE8x2Z8c9QuXXCVXhTjjZnhMCVu6JS4qNxavbF7zW4gEFgQ3cehcA8fQWJDr",
  "key27": "5vrLrT6Z6viH2HmXmpBwHSwHte4HQ78juTWzjVq8uvLLKGdwCBrEuhMyXR8bQ3ULCkyYVLb1yrWArzj1pXUtaaoF",
  "key28": "SfheZ6nu3LayapqqUJ2adMQk1sDHKDTn5FF9oVePxStRE8dx2g1goG6L69hJo3BSypZs4v5NboxReen24QaUxci",
  "key29": "wjippDnkfZKzHT2DLLMevYbe8xX8sdFjCrwoUyyzuYEGY3JBYof7EcJAMXfSwkSQogupPUsDAUV8sFPwGzQQ7yK",
  "key30": "3bewhnp3cpC6zQvyhzRK5jDufjPr35CStiyuQYVgrrhisAjjHnfsRQKvbZYLE6inSE1v7JYEo8cuecprsoPEU66E",
  "key31": "4D5H9ipyZYpTcYC8GLngd35gHwY6Fcuescm8Zk4J8CZrUYHtq9v4CzGpqSFr3B7EY6BMYj1hbvHHGeRnsGji3NcY",
  "key32": "5e1tPPk8Z7MnNZjQQKxSJ4EGW8e1rJBJfXxuhWAhgTyNmY5zsJdPR3Xf2HHd2ExMGM3JQ9Ji3EfcJePCTDV7SXr6",
  "key33": "5S9k9rrKLERezR4Kha1BPZiWjC4pdcvBvPnjkjU28rYQ75sLBKg4jRHSoRcpDf5azyzGUTmWVEWD9FHPXUg5rGrw",
  "key34": "4P3RNmJmEqrne42zC4dmMaTomnaR95ofLFdLM1qvi8LG1H5y2LNJRg58k2NzoMwcMJpwDz2wPkutFjQZCteSjwei",
  "key35": "3WJV6R4stsW1GxBNbagxaVET3zx1ocbWoS5ACxpiPoa7p43FYRymrsDSsyCBynSW2YuLgXb2A9zb4wtkWSkq92e1"
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
