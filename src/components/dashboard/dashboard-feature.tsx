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
    "TqpJosZPBcSAQ197q7zMQoSGYus8CcQi2C6JroHFmV5DtBNVu18MPBnkTP2k2jxEWgbCvgJi3pwFkS952RyhzpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GomXfavGaqwfP4FSh5QnPATD68DnuQBcaMThGj1jGGn4nzz6wqpPUwAkq6d5VhFMLzZeNGmTvNCxtW5RHnJjAe3",
  "key1": "4iUJBFm33Hz4X2DcayH6NTaZybFCtyPwVr2UY2Dn7XKDbgG3Q3RueUKMuXHRwTubQXHzgGiUu6gEuhstE2VmRT18",
  "key2": "2BAe3V6nEDjgeuoLqc5LGzoNy6RehYvLa7Y2non2CyyJacbZcGZwsgQEWCA7NQnru1QtXumEa8F6ZDRA3SE19i3m",
  "key3": "ZYktCunB42f1D5zc2W87GZMeLeS2vytKj9h13Y2U4XHpARPQeo5famg1avH9NPPkBhGKSPVP7uM8ndKqULk1iuB",
  "key4": "5ijQWyCvUjLhP9X3A4R6o5uVFBU1jvB5ZpK56fREKjuYQLCnApQpqLmJfVashoTPxxWH7Wz8pEbVckhtZa4WBZoe",
  "key5": "PZBKkT7KDCWH41tjfaLJnZLdutDgqDSoHfBYjB2BnDW5Cx5fPNdGvjP1HEqkCd82TCBfWKRvSMRojAa9VhsfTqi",
  "key6": "5wan4GsnvhkohvtLSk6BaoMsNEdEjowuniCNHuzvxCNvEnXp2TWvmFxyJy2driEBp4fJZ7CFd2a91mPfAP54zYff",
  "key7": "3xrruDQCA5s5EqKaQWNdvim4jHjfKQ2WYgpGWULiRDrUDt59SMXpsMGNjgREC6Js9hj6mh5ijPsQLS5dUhzxonUa",
  "key8": "5gdAHRh9P8amv6G86b4bGm3wad52xxrfUSzsxDNVZQbh2BswsoFGp3wV9Xg58dHTFK1fBEfW5ibEGei9nkeALnAc",
  "key9": "3sMN4VxwsebJhj5VWAi6EmAwLfoC49MGAXTtHEeycvtgfsRETaQuz9xNAM388bQKFqpbi54jencpg3A9QGMX2e5L",
  "key10": "4XFo1KnzwLEPBECmrGGe8QDnHGLhGP6vQ5etbVo5zMvwCGMLf7rRPwbSynH8jMp5eWJr28aNV4BvCYwnoVJpgX8G",
  "key11": "4i1ifNQ6u1C91mc1mVS1PABvt53nWxAF9sa6vXpxMwCrKxBevzc9NCoQANbgkqiJDfNRuRqRPuDzseGMESwDWr2P",
  "key12": "4ncPvRvwDcawfiUBTFSEV2WKfTmJW7a6fW1UrFQTjKBbYeHiCRcGKW4QNV7tdLt9wcBSanJHfy2x9uhX2UnCeX28",
  "key13": "5pcMQkMtRg7hHk6nbqiZq4zCn7DSAKkd2kEbZZcfriBZhnaWMTiSfhg9ADWZprCbEkovVuxdRncGJVFfFATsQ5yR",
  "key14": "38QP8Nk6sCUKLRTg1J19VCWa6cuJ5HVxdXhfuat7fywx2kPLNT47BzsWAw2dNfPrcqiUMxrcyKYmN5AeoLCCa6Pf",
  "key15": "3dZKFLe7q1MAykh65fDKefTT5g2cULwzySNg74n8j16EkFg2cLT4UdJFZq4d9vbiULhNmkCiK42CfPdT4mGXpFrT",
  "key16": "3R7KuG8qTrLhBgEUpD3oXMfLa4JnQkKzg122gaTudqpK2uuadRuiBNamNsdENxT1JRoEndKdv6tZs8KquC4Y3Z9h",
  "key17": "2TNFvvXRJbcqxBUMgz2punLWkTJF6FeyAp2hFBtWR2WDtL6T4e5HPEhBN3qR8jaiMvcFmYuhiwpb5fm3D3soALG8",
  "key18": "1v47HN8zkSgjwedaydtNPeJ27oDkMtQLvGb7D86KG1dpJnWPFF1JSWRqtN2Q5secRfYEAaFGSnZFHFVRVP9fL2p",
  "key19": "5Y7dRKvtJgibxuAk4FkeSzixrr5fM9jDt6xRvz2fJ9ewFUspxnmPZC8ETGUqrJkJ867nLnb5LhpuFChDPdsQPnj1",
  "key20": "5hKZUBnnVGN1pXhLemtBQKu63BHF4jXzTW6Uq8prFGYmj8jA5ePqxutXEZeGDbEGhnFRnGg8i8Ao9hLrR746FtUB",
  "key21": "4i2XTFmfCqkdrV55BqiQtPiDMjbXkTLiPP8LWKzps66rbywwytEAGSatA5C51pTDDtZS8hYpYvGNT4b49HBMjHLn",
  "key22": "32HNkSFsWE4V8Yru3uJLzRkjXqQfS9rRfRNTN2Titi41kXRvxs3zaz1Wv9SBkYwzTGYjF66jCjgazGUz6XiwKRfa",
  "key23": "4X6qCiRBM6nftxDW6nJearLL8CidQHyMjrV9TJ3gy8sUDnhXv3SMa39hmYfLUVPkhAGs91ixRCBNM6vG6ejiiVJb",
  "key24": "5Y7DpJWyUKzrGgY294EZvnxAG57WxjkaCXVF9nfSRUvZYgnXUK5xqx3DFtVT8LXDaqdUUnDKg9XqsLTFKt2WhR3G",
  "key25": "5mACpLN2K2RTaAJHVzHY1MdDn8wdbuoUtRzLt5du1zgcbSFTR7pkETx56ikzgBk9kzPywSyCjsDszP6s5PUeLPLc",
  "key26": "5Se5ZAomtagDtH1cjycd4DLVHZmwfssndRjFdYFptuT9tS9YFC2PKv5vH36kwDGNwpnErRhAoJLKH6q9hdcKaMBq",
  "key27": "2zSfHAyRHQR6UbaTF8w1u9tCo7jMp6AKPM48FepZopSvaGKUhiAFo5p8KJC2kVJwxTZbJBSk81HXKfxGhcJKaL7S",
  "key28": "4YTKCzcPRYV3HMTheWKdkdxHfE6en9QkTn538Ex37E5K1rsmoQTvdTgAEVNtdxfGeEPqXwG3ZEYYjS4Gewz7EcJZ",
  "key29": "5PSAda2PRxtjji9ek4J9JZrDfBYG8oX42Yh4AfmmihqFGTzwmDXoAMzQ5LhKDmwMoCDyR1bz8hUNuf18HfWPQYNa",
  "key30": "629FTWur3ndoJgbaLmkbx1T8eoCr5zESwUrZDPnb8ZqDd9bNiPckqVddrbaHCdfXgCfZhGLbXNDMQJhptcohFTNd",
  "key31": "5jdvvWRLNgvmzK5DRmHfn7rZUwX2xRbgTTb4DfjzLN8Z4s45ZoTE15mK5iFhRDQ1TbSuLD6grq9maoYGXkxJf4hL"
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
