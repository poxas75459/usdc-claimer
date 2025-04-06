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
    "5ysG1WEMo4FFJ3bn5KvwVJeLLJTAUTL3X7R3VC2jYBdncb5NmQLo3KATnbnP7gKHqr4HmJZgWSrPzZdvEyw2biWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iDK1c3jcXVPHaKaNeQn3XR5yetstB1nPsKHvdiai8EswAVaq3pebP7hZzwZiVmiJ38pyXuMXN9sW55sJ5Wyg12u",
  "key1": "iyrMH7F5er5EGUB7rtT7FTKTkGQZnksLsfXe1WetbWEQ1gMHgDiqL3B5Pd7vCmXnCXGnnf6JMWqyAGmemZasaYU",
  "key2": "3m84qZHAuMwRq6ruT4xGxAbC4NWBLQeefsP553a54FNzL9eFmQHnbcSnpZKmjvcvkvaCAyvdSQEzek9nessZxe2d",
  "key3": "46He3H9fnrzcJNuuFMCVPgXoVwohRKHdn8bGe5UtBsCRYTHhBC7nup9VQDBzq1ugomembP7vNvcd5CBj9gEoN51V",
  "key4": "b6MLMLYQP7QTeQrFXPLmbb93fLQmQsXZNnrgjwuwDEuZG7eqX8nox8pLvbaDXnoXQYAGT52AZNFP1sNG3NoZy4b",
  "key5": "3LVjYB5UBbX66ybd5iHVkg53Aa7e6azbVDDoo9p298N3UXWdwp5AiriQiUs7Zkd2bdMbLSdiYa3HYE9ikqP8trvv",
  "key6": "5guMahuFizpPzjg4GNYd4Bhn4rEPPgeFuh5BcjNaFt8xnQVKeXHwt2AGw4RxCpiq2s8JyVDyJ9tob9NvVbAYAna6",
  "key7": "BvuCTL41y3QWo1UGdZ58jHsUTVk8LYQ8umWc6qmhYyLssPTLPxgzuo2DanVevnzMV5bEysWid2xDBTyVKErpcRD",
  "key8": "2ZL9keASDcEHnf9DrAQssE598ZtkvL29Ky1Qd1MCuycXYTrKnGULJpcnNE2pJfP3stv4CibB7cL7E2URKytPex5L",
  "key9": "U92uFqV8GW2gtQQrCikF6ABxDF7bWpFDN6Lc3t7SXaXZTaKkxcX8tcZybirtr6t5c6vSUvSVqYm3XCBmF11cuCo",
  "key10": "4iDp5sgBkjPRZdxuAiE5nBQUDkUBQE5UX3qZKPJfaSH6B3UJNdPEjCEwGkvJbqBpDKLM8yayT7R65ybQNpXMBnUT",
  "key11": "4eSCLqfx7MovEdQ8BqJqacf1jCzQUb9W5KwRNFg8QTnhTCD6tF8rQ3y1EbCq8nT8amsYjQ4aanB8idfKpC46qFVU",
  "key12": "3t4tMvVT8X1yTDf9SXk8u3Pm7aRxSTcH6bcJ5Nf4ziLsoA7DTosqoVht3ZutWQMACAHfGQWXE6ESZxgaWWpvxbYs",
  "key13": "wcaMG9GRwX4RuoAfmECwgoUW4mTJT95sV44zC7RyTXi8jYKsiTnZ6ueLm2KMMZJvPuAeqbycxuzkDZdvnGZid6X",
  "key14": "4VnPvYYXCDsJ83XZ6UwctvrJ32oARaR9L5t8dsgXeV7tvhZ6TsjPknrYeBRysfC7LN8vdo5kY2w3TxhknibBwpFe",
  "key15": "53i6nTX46vqezCjQjCsUfKJW2q6HSu8Mi8HBiS7BXwB62grd6B7Xu7NU4ERocBRaQLAJHJFKMyNkQ4gxFkr38AwJ",
  "key16": "43f1v5VSGWerRyh5BjtYBm95UUPAtghkfLeJZG1dDgWQrmV2a7Emzk2P14iMZCRyA7Eby9W2JUCgLJUefXZCdVM8",
  "key17": "syGwp2FXuC52qSpoSph77DKToWYxthMzVehxa8Keoi6gbYSSqvw15jcZ9bCZGLtJJDFwxAG8K4zw9j5U3aZBG2Z",
  "key18": "4ChbUVNLToDQJC9un5u6d6Pvai23FGA4MuqAzZfvGPZBpnskBxcXBgoRbg53bKPTom9gafa7HgmVDYvxPkH65TT5",
  "key19": "wLVraGDCPBZSszyeoPY6cJijLQtNpKZnhhg1K2j6b4vQvDjA1ifjKRkQBPQ2nJUz6soSh8YcThL5j83tTBf9af6",
  "key20": "51M3ajoXfjusAFPfGsLWKKnr7NC3KorPP4e68MxJLaGfXjmkofKEFqWFhSwicGBtTMuKEvv7rsdFNfLZw6aWAYGz",
  "key21": "5z8NQtr2y6rgchoxQqqPdw7DCXLYqJaTrqftqd1BF8WGKjvL12sTi1zy3YEPv5XRfj3Y3e8KGkUBR6K74f8zuyLP",
  "key22": "4GaAKePXVaE8xBxz5DVaBUhrg835kjNPtHqq9H8uziPyjBqN1y11FruvqKgjKKY6Di9rsScz4enCkys6BYmHU86W",
  "key23": "3SyPU64LFuXoL9QCanymKHEgat95Znm7W5tyUsTftQibD2FKem7hmdcm9KqSVgHKBK8K7a8tEzia75w8y7pbqGDQ",
  "key24": "5nbpZYCuu7FqWpq48EwYPV67dmDwNbrR1c1aWKymyERR4EgCaqtMAD7hXr9HeDNn1ZxY4Z4mRRXqh6tgr8t1TaSN",
  "key25": "3UpG7igKu25ERCvqSKr9dqXe5HjCxGgouwGKUhrKmQ3h6KcKCY9VeMm7CadH7R4EbZA82ddCWKWzsZyA4qEHg59J",
  "key26": "2YaYiZ97osod9fxVFDG3q5wkw7TmxQu6Q6ynzWwehQ1mvc5dkZfRQPZEK9buTxr17jCik475rttPWqvy2G4EAg1n",
  "key27": "31DwZ6wn66wbd63nEgTefaw9SoSchXDgjCJs1MfubcDLJkHJoKh25RpajauX9jUbvqwtNQYqGhcVSX67YCvMwtTZ",
  "key28": "2Uzc31xrrhATzftEY1NRdcdLvjhyuqx4YbSekLnsos5tNe5hW6CzrQ9LncBqLvh97G651tS7MBcYkn1Rx8NvAqu3",
  "key29": "QENbryXdjx7c3KkSVuNdJj8rtjGfavLuZFXebWpsYekLdBMoFXnRpbJeaxLqkkGWqFbqEZY76SknTEC2EPXuxLQ",
  "key30": "2poKaoXhQfnguAXcmyYXh73oufxZLMuLdQQWB8qHyQzCUaoV3JxeSwyZdTneMFG1od8g7ZDAWSsPaqjdiRXyCVpD",
  "key31": "5HwT25UgatPvFVXCXFjJgMu3miCXZ5jtYgE9PuNhfVrddQ5KFDSvytaUJWXCe4hY3Xdn5ZTyxe64RtPUgf7sFRQR",
  "key32": "3pWCsLUk5QEA2RCLHWdYm1iPW7WQDFP8qK2Xy6jjH2cPUoNskEHGmHYmpDy7m1Nz6wVE2iXV1ML8soiXufoFnMkk"
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
