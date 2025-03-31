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
    "4QwsoCdpwD8hPjhrpaTBpB4MWiT8LQiDiEc5hxWJgfjuLPKZCw8bAWWDKKhP6kucdnq91Xb2dcwwzkkFRsiwLuWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Univu8JEVzfywDsueYGKGzQqaaEzawAW9a3yy9xoqowqu8PRqK33gHNV6SyueNVEW9WMWn51YHp9b5XsbsFEgCy",
  "key1": "2KMu2q9jCiD1kYXYRFpAGAG6piRbidvVGAAN2kF6JACQQ5XbqVTAoNNBkYmb8uKVaBtVDgRurCzFxDvpzCVAQBhX",
  "key2": "C3VdEYL5mnoFTdC3DHDDdUW2mwx3sWS6Kh7Wt3HoMsqGKPR9H1nAjgewvTpeZwnJhChMQDJk7jP8Fv3LFAMBRGw",
  "key3": "8zgYLKc3KRKJV6uMaRoYtVQzX3jgAor9c3AjtKD71d51Czvm4scgfKTnSxBNyLSomtKuZpHhdyoGtp6aSCSLpwf",
  "key4": "oGqWBYSHB6Bw1h85Yfhkz6nb4LAvuTpP2G9MBTVppKjScfoHwBULUDqntfxQbYpAbtaB5Z3LGN7U6V4N586U399",
  "key5": "3UU7QUh73HtKLJ6CLFGdgCEJYYLqUD8qwKYgjyJsRPNPafhgVMXBZfigsVKh1Vxa9aWwBuznma8GPoScncc1EYzB",
  "key6": "3rDgArSEg6vGfhrp3NGRP6yvwK1JsLuvRu8W8JBivsQ1YCiLcJ4u1ZtwYLX9zMUQStgYhoc666cqZyTeaJqaeqB4",
  "key7": "B4FTysiEWo6LJApS8HWrCFZxnace3nAqLJQ5Yy5T1vFC2WX94abpRHLhaihiFEh5gYXPHJfkAUNf5RFLq9eUfcj",
  "key8": "4QsdAjvV36ASteU7EgyBRKGJqku6p5D3gT4Jcjk66aJibbikK4oK9MXvU9v4r1q3mbPnXYfHqBpyqnzhTvJ96CBT",
  "key9": "4cCDBVb7rFwnmtdwLChnut7YNYZyf1JzPLrACfrC9iu57NzBEGMNuVc4VsKq9ytVeSKCrYE58bBH8gt8LrVe2UAf",
  "key10": "5aW2SdN9WwXwkeFSntuR271PobmVSJaR1g1p5934Af8us1UdhcH91wBYoGWZQZKbxHFgpxL9v6hNYYiwrSzUe1ZR",
  "key11": "2uQUdvvTgGaJA4iQ8oXK9aMzyGBca7iEeEStVjcG9g5Two8CAHsTGGu9nZwwrhAxUmcAmeBw4HM1v1MzuRuPhxoR",
  "key12": "2G45CF5phNfxjXy237cSdckCGi82QGNV52aSr5xsmoVHUxmBU7dMLhQUEjzjetC9q1SBcxBKDNZZ6UmYYt21CijC",
  "key13": "ffhXW97J465V4QmYZvRPMdYofVui4Xnj3ZeSa3ofQSfQ4ebGtZpdfLw7YJXG1frGZAxNkJK8XGx4nKih6rYUJNE",
  "key14": "5S4NVekPj2GLb4k8iLdmnDEsiZRybkMzm1ckFSfsFyiNEwy1AeczHZErWhDyEGdYvDhQkbr1jpZmwg45e4VrtTkc",
  "key15": "5vHWMqoHGWEDp4JybZy2qRo6n2V46qYAxA9j9EumBAnerkgwuaawmwUhKytUQVTRjPW3cM3sWQqLVZeaCGxgB8bZ",
  "key16": "3edRXxTYEf3vbM14inB8aj4Hg62ybFQYJZYnJ5S42QF55oEasbutxBLkwzAfcxHYvASrqUppefn84wBhzxqbeZcM",
  "key17": "4zW5tRadEySAUCUamXVhhovdDXujgdYTkrmuRV1AoCY51MCyDCbexPnqiJ4yxpyf7vf8SYpzTyXtfuFadqgtMahM",
  "key18": "3h4aMNn9fswrKSgYfGcwt8KANjHMSqE4fnHUtEZBbfJXbV6JAG6hjHr5yZTwCvUErY1RPMHW6epjCZrcopjL6G4Z",
  "key19": "27Lkp9uJYzbSiFDQ5Vt2CuiizUbheGAe1sRVcruBQHKN7QUDCpJLNTXqVyCXYP9NkbtnwyqjuWMYP7HgnyVDoJ19",
  "key20": "2TDZLjn7jXhcUKkWJBgVKxHBR4scGA7B8hqb4dV7qpzmV8LGFLnLK6EzhZwT5DogmP7GDfjaGCWZVfkXCeaNzuwk",
  "key21": "5bJss6yjEPWxzTeo6ik9TpAgUfTHTorqd1HGNakiGyTBLPrPCRFdR8Y4phyVjL7sPjPaGYfj3t26KBNMJSnMQBZD",
  "key22": "3om5g4D1wPb9WSZpMfNbi2dDNUJnVAtKotYXP8BRpZm68Jq5wvimxzjvpX5FLtq96cgxwUkNPZcSCKZKVUV6mNiD",
  "key23": "4seeRBq7w6jM264F7ztEgqKbbyVs2Ppc7PmqjuGyLP5hHBMRQK1tFzL7qH7GUkh1aN8nZ7QPX8D7djgToM7pebSw",
  "key24": "2hfX8kDdmRYsiWJM9tf7mt53AxMdEJEtXNpvhVXS2zqzEHtq1MHTyXhCJgjex2ngMyjUZL64UJd718RABRprwK4B",
  "key25": "25FxKj4UozLDWr6qkfGVjpt5Sf8V7JG7svWE5mFf1YiLYYLNs2iikecfM2r3PTNVkokoie2jkFyRoSumXFmbWfzz",
  "key26": "5vt6C3dQEX7aJALN9PUsEHs5co8JCaG5qGeJkifnTorN2M5ncQPGRXMD7MzaNdQomURsbfG17nYwTkZHxxQkTPWR",
  "key27": "quwWwgzjJK324bH3DuSBdDXYLaLDN4W32mH1fKspG4TdDMUBNLULP3pYgkGQ4HG4YUqPjoGC76UsZNFzZn22sXE",
  "key28": "2FD8ZxFpvv7rrcZLQ4wPvRNrmwhzqYprmyrth6DUeyQvrVk7ZRyDVQHKR6JSq82PYdUQUByDQZHKrSgDAZBv26Dg",
  "key29": "2dc1Rt2zrdApVUsJhDxd7i1mLVLort7b11T9TFa7toFM4rAcaJHFeBQCU36iFkoirz78dQAezmktNcEiC37Vqg9u",
  "key30": "3EPTkLJa9qCkBSB8YZ6i9pvm2eCVEyyTP9qzFjAhQf8aJ6JnQzwUSs3dJr8va7GcLYR3t1phiY8hFR677LUixwpL"
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
