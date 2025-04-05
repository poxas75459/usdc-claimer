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
    "4cRL44TAp4DrRdKgXLJuBkrgcWJot3DHB29n3LhPdgSwEML7S16MKpUphLkXAQa9x5ACeneJQ2LygqU3o9DXLzGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SpjBxMJvLfri2LZyQYnpSCHHsMAZ5ibtJWgrKJo1ajbAXzXrKh8Fm77nnGd5TUj7UgJfmY28Bg5PKDc4HKkynRc",
  "key1": "3T4JeHTw2QvVZDpZUphM4bEPuozKmMrCvq5PkQH4BFxxaBZpA6py27WsZ9pzZ3c7nHdmLd99d7qWSGT9yzURUWFF",
  "key2": "38fNz8ZyKodZWnbF5V6tFdEH8tJiJjwArPY8NEFDMfFoNtpf2SHumT7bW1MpmeYmTLpzjvyaMC7nMLRjKXFG3RC9",
  "key3": "8pBz65EXoBkjFDttUaiGPdPGz4pyPRz1w9UiZ8TyaMdNz15atGnENb3AXxKFrjo7m5Nx4mvuyYcu9SULATS3Vsj",
  "key4": "4pK7UWKXdUVbTj85cUxUG3tYif4xnyznCSQ5LW58DEPRSnVfVxy6ELYQpPsxPTvSaJANVEpqWveAGo5EYfCdWRke",
  "key5": "5uQRXWW9mt8WptL551TiPWV3FQo4qhHwCgNJrZARcwc8qKcgBPWbESxjVYzmW7YqHeWhXGD8BgxGJEPrqdGPH8aY",
  "key6": "W166vzujTCvbeWbpHYxSSYVCdeuLZ8hMDchbqAnsdrbcUbNTmEYCNHGjDDgvhxjL6rwofJCj1rqiyf5629ZNZAa",
  "key7": "3rpkdEDGBNSeaf2N8cwQGhwhX93HExiirCW6ze9JoUoY1FBTGKeWrtZYiYvaw2vUY61zoBdpFzgC9be7norfEs8o",
  "key8": "5Zt3cTsqv9qA5erDJjd9Ekdi78PfmazmCWvntNSqdh7zvFMYpBeEZh7k6Tn6YAdWzoCNfdREGmbphZoTtynokH1n",
  "key9": "55seMUaJ5ZeX8uqL8xsfWEobRRvXTKW8Ws2gkw4hH8xhKtXfKUoVWVTkXo7dAe4Q31mrmT6oVgm6PCfmSMK3VJj5",
  "key10": "3CubLPqBuEmQCJ3246vNuUfiJqHZNxVuMtgrbQip4LiJ6iGHXRKABF4VjHDHZbj31qkDFaF9reYda6yY7bGEasEH",
  "key11": "4ZXEE5ybjVPCcdW1oH8UkEjHbEuJBEkVsmUVATACniCDVpL38eo1EfFTvknNuAQaTEj99nR5U1m6yCaWhJjFhnZd",
  "key12": "djAaVuJc5QAVsrqeAmxsQgr7EDbaeLTdDAfshQ9w79DszkRpm6Lq9tSo7r3eYRyGMPdeQX5zyQmTSnFCAHwJaG8",
  "key13": "PP4VbCkUYru11YftrDhDg4B1obJaacN8qwCbWQFxJMCTmmfUndqtK7SQ9u6sufPi8ugJQSHR831FvfYwJyqzkL2",
  "key14": "G3yvMitzLXUWuczo88TiktFVR4BPECQf2PCrGxAHhChx1RVhoKd5jG5KcaGvxT4yCs5bVf3GHinxj474bb61CsY",
  "key15": "5MbHS3FV9sQCto9yQSgBP6HnNcT1eCx8d1c5tAhTUwLmyDXpL5ijzFAybWX2WBHWCeR8JMdGpkJP3ihzUifJ9M5E",
  "key16": "4Q4ykSmceG4prWFwK18r4Kq1JTJwu3RGQT6ZPQ5UVzt5rGWrrykMNKVyxJiPmsFAGEW3mvP7aCiMgS9KSTgbNM8A",
  "key17": "5mmEomMmdRLyRApdcbB347DYB8DygK3RH7zECvBEaZojSfio3qQQtprDtBwJZoL6NrwGk9iy3VX4sNoq3ZEajr8z",
  "key18": "4fYnxozBqtS2u8BipjVBwJ6tSqkohgUNuUpqSy3DPHoeqjj9MMTJMtNg56jVDYj82FJK7aS9ncmzkQppnrughiSW",
  "key19": "2zgFSiurfvm1G3KPdZu1RPeJs5irdmA5LdmwGyCYPmDsn2682VPx6FJDEhxGF6v57XTooeTvi96bYAREDnyE6S5J",
  "key20": "3216b2tusdjjU2xb5ZfwqGU7QQevQsrw32CNbazi8Mc3X4bResi3giBYuAN8hCdySR2od8L9RCridKteWic6HDkx",
  "key21": "3UGj7fLDiZ7okpK6xTwY8ZyFaVdmgwFAMpk2ArbP2HMubNUn6VsPwUENAyWq89nceibbTaRTXDJccqrL7QAgTARX",
  "key22": "5DTPWrBYokescCy9231kxipVweBEqJLDhx8JM1EFHHbL5JmehvMUDcvBfA7AJZBoD9dou7WPjWr1ULnm1pVaK1xs",
  "key23": "4f7A6mtZQqrDjdyrZKoNGueDpH2ga8nTAWioJj5TNnSgtmPw6JuyWEJVNTXAq8VTUNhbLeLrMwaPgwRZtHeoKwC8",
  "key24": "4KvF6E6SvdUFzPo54nRQFTn3H2hEFHEZNMK3BG8dQkXKkL2GfcwkMKy9u8gs93icRVD1s2bwHEnRbqVqxKFrsj83",
  "key25": "3Wgf7DRphSdfupMA75fKCjUEYCsXJGZNRABcqnqKwTNrJTV1F1giX4Yo9PdBc5rY5fuqXWtwLVpdZzQ25nU62p1R",
  "key26": "2WVk6DD9oVhFNhEEpKE6pVh1qFUuS2asMyAJLnFiRadPUrDCtTTW74Q1nbX4Wv4mCygkQQyvo67JHm7Uyc1kue6Z",
  "key27": "U3oJKntaWBu3HUXziKwVyDQ2pDqdketBUhrxyd93PsG9QJ8k3HuruHSLVc1SQJe394MnMSMH4yPEPmRgj1BWj9W",
  "key28": "38G1yZHUvffcHJ6pRrD3b7vZLDgSQdnyBgbejJBM1nReQkNEq69XzjfaSGQjeaxQB25kvTbCNK1wcDxmBe3HDx8n",
  "key29": "3ptaP1GKKa67ZU7d28u6YHpUvGxSKjujcmczKx6qrtYuEa999cYJ29D7fAnEPfyr8bWYRjgLhdDNM1nYFz3WU32q",
  "key30": "4sPN4JwH79C98uuNVbFgcWnWRGZajShQkJ4DWhs7YJCRUtt4K9JkmMRnaD5gF1eYRuaU99RKSyDRVXoniXGj7rnU",
  "key31": "5vFB6uEkKe4kEmdmQWbx7LnV8c8kqTwkP9aweKE62P1k6c4HhHyPUtJZMNPJatDPkVg4ETdDsUkdpLQwQqo3QsnR",
  "key32": "5yApBe8PopJ7wQDdLv2dpaHaitiZzMMPtFi4XgmgWRX6Vr9hJmqQ2bJ3eQG6eysPxGF179r3RoTiU6fJoaXFo24e",
  "key33": "3EotrJ3G9UvY4Y1mBxZKdfCXhii9dkqEzqVXMASZUjreZX81YPjXiFHRGiGeoekkgX1f2DKDckdPkpV1JBAKPCsX",
  "key34": "5UXvwgMv9AYynhUFDbrd6kqkxh3QKRmKtb2eZJj3UAXuugiMW747cYx2MQ6gXheJY8Apef7frLzA6oxZ47bFwpWg",
  "key35": "2sspwtEcASztxyTgWDSiCzjCgLJ9h3NPm3Zgj6K5RjS82KDYWsgdprQKttYUGm5M2GLVvix6DczcLKd1EE1vZyGj",
  "key36": "5R2Jr9aRYZMHCFGASfdei9wYbddt1Uw4Ngxz6fScsLtkycLCdqYuaUUEpTeCBzSH5ecnEKzWWZEaVKht7SXKt8PK",
  "key37": "CZ2ruXMESmT2iszoQkwMPJECMTRVMUWUxaFmT7dhA1MK5yNnywGfxLvx5iaX7ou8NLaQRneAHizMngNYXVX1uCd"
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
