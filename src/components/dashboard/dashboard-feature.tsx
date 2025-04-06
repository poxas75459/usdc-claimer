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
    "2WNMSaA9uCfpdWQMN3XxNGZ6SS5w3LBGFZsizJZuFhZeegkEmkTcDRK85kt3vGwtLKCwndWg2ea7zm8T74waX8Bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V2Ajvp5hnPwrS4uT6pUEMSjzmtb1aKWWgvHVxMH1xD7GruGQGpEQvHJteBk31DoWeLiMufnjkZofLBLumFhu6GL",
  "key1": "3ZkiLutse175kkpZEPzVoASCgrd1XF5XGBJZ2rinqAcWEXmA9KAsQDBLXFa2ZZRKSitELtcDQtozTP695JrpXWAo",
  "key2": "2BhZ6ikTL9xcZ2snYWY81PqiYeRMG23RGAXMvktjhL7XDN5xc6qEwu7TQuZqythddzTutPipoKxyiTQtgLrRdPpd",
  "key3": "SN7s3mL4QqjADuPNtwcS6L3UGoK9h5ni3eiNqHtP2uMM9ALeayVP7qgcwD8ykAuw1h9Bmq2DZD3TdvQDpFh6R4w",
  "key4": "42jRKBBUxvbT9rJMTpH1YpkHEBTRNe49ZhXtwUcQq2nwaDNjYdMAPS8vCEV7UgPggVZKzjcNwVRxddBPdBWyBc8y",
  "key5": "5Bap5eN5RiLWnr3fznExhb7fno512FhgZLyxdqnYLN7ZPCotebUGKKYP47QtR5tUc4MZZUXNLYoBk64HzAQibBnx",
  "key6": "4kEhZvRdKXtAVNdNmFCwFhuR54iSapWJrAdSJ8NHHehW8pALa1RZV9rof11QaxsSvBkCgRJ55m6Sqt8pjQAKZddV",
  "key7": "eWzcLVLhnHh1wL6wFguVNf7iP3CXFEBpqg8PDKHjNWM32uKZqXzaVzXBLdowSGsUysBwTmPNNTY5GsCLNpbhiBb",
  "key8": "5wd7ZCvhqFqHGDXfXX4cWTwAFAB2bhJU6qtnEjwQ9d5G3gczqCBNTLPVVzEjF41ffF5iLknQvrJKrkDS1Hbuxbg1",
  "key9": "oE8WqyTH2NjhQhM1DDXmcGptXtcNtD5NA2JPX6bPU6H8kQPDnX6vVEE267FEHnqiiGhzrbzAp6Phki1FTT3LVgd",
  "key10": "2XQxb6wA5j3eL86i7B4gSA8u53a82MQg3R6Rb59hRBRfkrbFTezQqmrtYVFvnJHPjgw6yT6ZxygDcn7w1qyj5qqp",
  "key11": "3pyhUTA4HSuVeE6qcW5Gpfxk2XnU1SH7a5Hp6TK8HxBPcVV64DquFFbmEFjD12UtKgATUgxL7iPwtjhRzEMjjJj1",
  "key12": "4nhF6QAX5dFqpeK4MyHWkZdnZWPfbeUjy6BmfAjg6nQyqrDqkpi8dih7RXzL3vf6m5hi1DJeX8ZK13o29L7dhoeN",
  "key13": "3BtpYvuESryERUjXaey3JBMuXbiqyKZxYRvW56hDppPUX9DSTF3XeACxKBmBmB9vWk16ff2RmxJT5kGXhj7Q3QzQ",
  "key14": "3HNhEebYLoWAyLH2FAoP6nqzmMmcTzVbZvZTbrWJh3L2wEk3bGPC1Adt5gbdGngCGWMkCf6h4Cu9yxy1oX8daTkv",
  "key15": "yDCned1PfB5wA4J3xMwAgFdC844a5nZhrP6xg9Yw5eCJUuRD2wXrNBnWfnygEthLN95QqWwrpC2K9gDz69aqGtN",
  "key16": "5wHZhGCHM9cnkFKs3pvvLHkQ175D1JFZ73Fv2f7be6daY3pM8a3tBaTLkEWsaCKc5XoGdS6qedMseTWV1ZbYv8QZ",
  "key17": "3RqNP8eZT51tMaxZ2Nq5CiwdWFG2BGZAMs2je2ezBDZkbg3tGEoKq8kA248vXxSmnqDfTSWi8WdoZi486egQWycr",
  "key18": "uqsSSsyGikFRgS6Ur53AL9sLQfiGdT3M97WLFaJdLCt2RqJNjiqxM44hxbZCXuu3ESdv7o7zRQefkzQKSnrxLi6",
  "key19": "Txoy3q6nMwEJnrJKup9iTsL98AawcW4Nnc7cN9iX3qUwDeDAB2tWKtpKLNzJUvnw3bUgkGRS8enamLaS83Fr2fZ",
  "key20": "2ZZ336kVazjfmHivxZie9bf2LSkrf3HSNT8iXcdwKUDbe2goHeBYP8sEZD3db3jSeWbuT4kFfWpwKcpoySdjNVs3",
  "key21": "3R4ZA8sPycSxwwqe2jGpaJUiSzoYw1AtTchQtSnwnE92YNYVtc64oXPvkxhD1Udg48u7uQiqATrWv9i8yCt93x1A",
  "key22": "fCCJ6VxhPJ2meFutPVhxMDfPG6SE7iWxKKGdNKTfLb6FhjL9Uqxhhu9nwxXeMRprutRxNNt49JaJE7FLYMUvpjD",
  "key23": "2yEemRjiRLiPrH9GGMuywc1rkaaj8mkZvoKxU7ut8cEMUipS2GZ9qoYwNkx5xCTy6ej55CwP3HDrHhPBvSZZTJyj",
  "key24": "n3nVqTirpzBcFeoJEhfrTKpTNT8vwGQoNwwiiJX5aGgCRqcJTEMMnbpBwKsTVuGdxBeQykTTtgSkcYD3A91p4Vo",
  "key25": "3KTbPzDjzjsnt7cnrSqsDNAyTQz6xr6c9vHJQeCiJv3vWS6CoFHr2S6E8k782YQUKBVVuYvqMnHnCgau1yom27va",
  "key26": "4ACLhZ5cHd1tQSNgkDrY48QGfKJzw8C4NDzfZ49uw8vTq6cHGzSCxhjwGUrUqxcjkNdLvRcYrirpXCyfDiNMtoph",
  "key27": "KqZmPcnjotmzZD7BzKfCy1thhhB9F4dXRaarhLAnaGumRFE5ES1XxvmoD6nVB449BUF1UfkBgzhM8Spmuajihj2",
  "key28": "3mDU44WSB4whF7JJcmo6xAq6gSGQ2BArhCvTumXQeWHbTB3ZTBNMhcn4WgVnxkd6K5fhq5WvCJxvb5bmKUDGRVTq"
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
