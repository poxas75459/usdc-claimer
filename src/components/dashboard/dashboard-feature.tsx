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
    "2w8sDcHrKJZaR1DfuV9STs1dy1izXRRGpmyKwCCkECyJQHoYpS2ShGCDFCNkeGMpZh6VLZ4wPDiXRV7X4PbHTsUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wtawLxNkA9JngQ7XpN7Gc3YA5d7T5w9sgLaoKiYhYBQyf1MnpktzJcfDeNx1nYGXD397skfZ3iqgAKxxqvMWJSj",
  "key1": "5CJWjxPwFsvrfK6gQ2wEcToQnb6isiDaZDWfHCRWkq4cis6pFY9UmDxhgJpPPUCpoEo3WMpg78McB2Usz7RsERwd",
  "key2": "5FxYKnuvfccNgkN48PbkEPwBkXfrVTKmEbN2grxh94Q1hJgahkuoDkdQMgUYQFgMofzYPuA2WVPVyP5Vsgr9FUoX",
  "key3": "3tQukgAk27YtPq9pBZdjtFgADDm4sbGzR8oqDwWRGQSTBkQRfXzjUtim9fMxEG8GRfmQkCrpt96mDYnoFSrmtkRf",
  "key4": "MrypB9g74CB9XBueaeuxqSi1YdF1hmHjssTibeZa6skfggrRYfvjwrSFwVBPGLS7uoipkcNSE2WYzewQDNMzm6G",
  "key5": "5rCU7kThaNZbSSCrTb6sPNhtXJfKCrSckU1CPmxqDycsVYwdKS6yDZmWuDEDhqMbpoqbhBhcxGw8UTD7fWEA3Lge",
  "key6": "3j84Z9yrF3N6cgybedYZKny9SAyXRtz78RmqnWeXMVnHA2cXoJPNDiRare2vELfnoNHTZhr6WaUteYxKpfb4yc9F",
  "key7": "kBBbamDq8qJGf988P48nVCd9huzqpRvQWLm1iFJaQgvSzb7N2pitpkMtesD21bHLZ7bnuwpPaxGXtCZ3n29AXS5",
  "key8": "37C1ibUbTC9DLWGYC7q4kGjcAiRtr88rftpmkBBJYy1dKb5QFj3M81oBtTs1HcT53ezZyxxvR2ABtDuvkQaEtyYt",
  "key9": "kL2mrm7njLuAshDBh4GDpoFHcv16HrbNnrgJnfbJ7h8YTTTnnT7W93jJD8eEvnb9Q7Z6rfU7QFPgmr7R4dyGFzY",
  "key10": "47jEXiEK9DFDyKUCJXE9VnrKbtYcKC587hDMi6toKU9JKZerRY3WQgG2PGrwqZK7nDkirbQZS75uaTm5sNtj3N4e",
  "key11": "2PmXhWmNBGLNvUKosgRDHFKhBraAp42aKfabd1wfGoXkQB5eaN6JvmRu35xnkTabwAB5TJSgoHDaJhfWBmMgqw9X",
  "key12": "4Jwd3TChwByHZtZRSsUfTDQUE6WUBrEw1JAMEpKj1HGCZy8i1S65QHQb7TGUtHG1UXKFwx3fnXgDSAR7sFbXQvB3",
  "key13": "4pRRBZBBNyP4tsyQYNg1Z1mMHkNRwNLs5Q3phhrhS43YtD32t3rer2f2hcj9r4V1n82zUjXeX2qHKTrCQzcN9g89",
  "key14": "5hXUs4oSMU6xWainY7LZ6Kdy248GaJUARkk9g9tBEF1DSXUT85zwKKfUwP549jbRqzqcR8mqe5tBQtJWrE3tsWuY",
  "key15": "2jBqMuXGTiDuABt2sYsHNXH1wE9DdwDNFZ7RcUB5B8P5kpv6yeJjTYtXKzF9cpBykq3GE3j4sKdspXLiUXUK3GWc",
  "key16": "4zD6M8ECuDANYhk8EjUnCBrmJ3QaXQpS5Lnw4EprKsrGa6LfsAGsABPNqg6X5V4NiRcg8Gdxv5dX51ZGNwth3HMs",
  "key17": "5SqwZDtb4THfzNq8KmVudvd9uKGyADhWe5XUy8gmA2peAMXNuz6pDHuZ2zN4F1sPUVrAT13UNJ61M9B57F2yNdZ3",
  "key18": "35sT7YW6E4TaRDewABbnYFYAALcqpqbcKh6r2ufepteDi5YwhyPjRoXKVUSY6oJGLjM1vqcN2hXarVHmMBkmtBs",
  "key19": "6KzHwgDLApGcqVskT9u1WNXE8aFSeYv9s2Jssn6Ri83316S9vf8gaH5sG5BqBFPQignch8jqGUn8U74DtCv1g3B",
  "key20": "5xteaP6pbuCYWXsh65jmHPaaLgkCEf4GzfttErB9Wb2jqtNAyQXu89ASVCnXp8Nr7ax2uxZK7U3cLQ1NUn1ZvuoT",
  "key21": "4EQV2CXwNrTG9uWfgnKUU52ZJhSGajPA3dnC6HiyxhxwX7k5fVRyUdSwyJsS4AbZfxC6wZJcTec8qh9KbEshJPKH",
  "key22": "4Tu2PofbqV7b5VVXRmnTP5dHFWn3kXody3YfkxudKmHzgqi2CotzVyRECDXtR2CKZJbbivhr7bkbKL3acPfnzSiw",
  "key23": "2ujw8taapRW7FnJtc4DgyJDne6DkQhjMwNneaMvCMDbKstFa9fthZeWeVGmCCuqu3nAuCgVANmumjeag4Epmsd4R",
  "key24": "qXXRbN3TzoxixyKERuAoGcCDtGin3A9ExjZT2G3oygpCUGUtQDZ1LW6FM5LbM3ZTw6ZoumJ9hzv8ti98VcticRD",
  "key25": "2eLy2y6hvWfKMoiXbkzBoVchHvzMumd3wa423TwbouYUDj8kG2YpPKTYV1ApSccxJ2fK1HuZHdhX2Th31oay8mSB",
  "key26": "2koqGwmnJLPtyW4xRQstzEQ6zvtUAcQkqkB8HdELak9aHkghghbHEMTtxMukTt6F8aJqVutUiMKHQsr6yK3GnmPU",
  "key27": "64wiatDVdVkJU8pW6WSe7G2L3gp5qLP6gm7Hr8mhVVT3JfTs4f7qX2sZMLZmQS7rHaXL44ZtArPr6idugQasLuRR",
  "key28": "MAiyw8yBuT8CNrPUz7xezTeY1FAZMo1F4LcTvrhjx3Vr4acw6xJEVWo8BmWV3hsDsvYYAWrpn4tTcZeVFfJg4Yk",
  "key29": "5g9YnLLCVXT55XzLoJBrDigkhxFSg57sFDgPLrX3kUjSkCJSJHrjriR2hBigm1JQ8KFZGWLFAppjHprNaBGr3ibi",
  "key30": "2sn5Pq4pqrjjz78qksZb1qFBEU6hga43ycg7AMXpo34EMdgDSMnWwoPzH8hg8LDFsGVJ2diYgzDYa8YnBgBxp3Y2",
  "key31": "4awBVio819TzPkpnfCyYxendmuD3PtuRuutdqHZ8AtUFKGAZ1Kgv2LdRPBRofyoqSwUmfTiz9zRUJpVjLDejJUFy",
  "key32": "d9Lmn1NgG4ekPCkmAySMByocYMZwNgQSNybpPJx1n41RXpANnD1cedFXwQYjCPN4QSCUvXfFa7dXdU5fZvYDivs",
  "key33": "5swrmZvX5P3q3GxQwJV9w2uJrPAkLbxVyKwUMQipwPnne5Bi5N1gCAsdmbs1hMqN7B9eJUmxdahfkDdsnA5g6Zw",
  "key34": "4ps1ZLL47jY9LwdCYEieisHPspVnZsNcRAvnDy7bikZF1owL3nh993d3xBHAYTBES4nGdmRLYgiUcadzTmTPFHxE",
  "key35": "22YFCy6ZEpu9bzJKMicPXcda8nELMbuHXjX4JYpCCnkqRz55QuMA3cvuf6CGriQm7sAFdSJ5qfeBi4NhVbJvESij",
  "key36": "5SemBtRTfZhTk7MoV3JAHuLPQ2Ja7roLvdGfhgU4NGZXNGojPi729P5kX5yRLhkt2xDYVmUjwAmZf1K11NoZrP1m",
  "key37": "3Ryh2hhAZ434iUZc2ktuZofirm8Dq4Ncz7eCw6w3yx4aYZEJGiJQTna8BaKMozmgqXDaXg4shLVkLknAgr6ZbSPB",
  "key38": "59CfPwHinoGe9PYFVusk1AUvgg1YzWqmyrYaDrx6VSsaXMe7rGx4wafJDNrybEe4faqo7fLZHfVS4bAc9WAmBr1n",
  "key39": "1RrYDDQUEQa2fySmDzY1HVGGAbrHN4TWG8HCb7d2u8F8ZHsRg9XzKQozgygY7PLXRzc7b9S1VQ51AVor1Pfcfmj",
  "key40": "5ZdD4nMiZ1o1EVRuFyAtzhvSA8yzZJChXysHKFrfE1KjiDfa11vsb8Ryzqcf8tzJ87RVQpBWYyYBgLEd19aYQ5ZF",
  "key41": "47BTQB3qWdtxvsYQjZjBB2iuugKaCBMPXiiNrzQX7RjbfkZAK4bePGaW36yFjUQSQ6FVvt3osnffDLoSg2mQ1MbP",
  "key42": "2KqjPE1xUyd41eHu7FEKwBddJks5CHZcVdYKisnbkL8zq7AMPkFydCiEwXFnqu5BGyNdYJFwcDkrG2ko3RQ6emLi"
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
