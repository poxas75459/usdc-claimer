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
    "4ngZM2qikBJVQTTf1gfaNKFJPuS8xQFaJRZxpNWh5WxiQK1poNnVYcqdBqWi9kd4YtkUJ8W82HbGBCMGYCKB4j6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t4zvPqB6BUhrS8eAL5cvEmisXmJy1B1fhA8J6snFsi823SK245oV2q7eGTvVQELJUDJoEKFL8PwMB14NNW3mD6H",
  "key1": "C9gqPfAAGiFhELKnaQ1scwUxt9mdxq9XRe7kiMUdVYMYeoPLwDJMvcdLy4tphGPprLTUWzbmpyr8AoR2BjLZNT4",
  "key2": "KvzzfnLF1cuPVpiDgkQa8i1TDdXqvNnqaVBvZdxdWPq8qRb1F4BaebF5NtYKjVC41chPh9jh3pH2DsyAd54jaVD",
  "key3": "3NLji1S2Ceodb82FfdBfYTtajZV3WrQYYW95EHCtn9mgWV1jAkEBS83cY2PNEmHgvwCycix6tYmUh3AatkVR8uXz",
  "key4": "23VVs9tYJxWpMWv97ePequjYmz19Yw3yE2TkrBYMqJY3Hz5U1i2MSM6JokTcUmsE2g7YwK19S3MuA6xtPKN6dsZ6",
  "key5": "2P57GGWGLpdus36JYzoL9Lp4SGszbki5Xz1vY27abUa16FE9evjMPZTpbdwhr4KKZWd2oSJz56ua4uJcVQ2qNtR8",
  "key6": "56Ls3Cp2FrBxHU2Ceo2qG6Yw9ciYDWQNCeFdgNzgbHSLMCMdMrAZ2ezKxj8N2w8WwPPymhfKGmV2uwA2eJ3ByVg8",
  "key7": "5wLnSnaJGMEeus3zuKj419dghepyNq5U1Apc9RWZ9ACJpZzvTjV1FBTvK1phr2KKUGHGqgpvSNAc11mzF5whBHMJ",
  "key8": "2f31P687g66abpyeXKutCgj1jfggd7xfHMdySZtNBrAgvHjSgw1QJL3TwFZKjGCeXddXXdSNgruW3ayWbVwm9UFj",
  "key9": "2LCYagPSGTMUcvq1xDNtV5eZHfgNYoauQaUbaMSQ5ddoXcfMCbqS6YNJLrHtyi1Cfvj2RSd2oiPrjiL8Vt8xcvWK",
  "key10": "4vrNEQe7YKNbgTo15jRm9P59aTtEfeGtBAS8bpkUHoiP4Hv7TnGw8oV1mpkupXJsLEAWXLBzaHp1nUykFDvV8BRN",
  "key11": "4YerjKgBaVMMx3EMEF69Fnz8m3JQ5brNYtgcLZ7PGMWfGE3sfEbMmaHgRmosW7ZttGmweMZ8KLMjTK9t6aaRwATg",
  "key12": "64EZ37aaW7FQghpBweGXK6xSnRji2tRK4LtTHai1rsEKzKrRicdtooww1X8o4buJw7zoXea6ewvXcHWzAyb53eqF",
  "key13": "4VPZev34tVTvmj4P3s5u7uRQSBmYpo19vFyyRNg8Ho41xyhqK8t7QJU2SbQuALeci8FhEPa32WHJu1vdAzCPotuU",
  "key14": "CAYvoh1oywkKPmpeSNFwA8XD2NuRsqYtyc7xekzmYAxGDVrHHKzf11jGyaoFvZaT9VBd7uswaN4a1KnV2ncVnPe",
  "key15": "3KGdCKEfVviFQR6SUwDbBFDTjcDcQGSNHcQF263dTZqj5vk3bQ4JEpvKArNUrw2UjK6M1Lrp6oMEiMwuH954WLzT",
  "key16": "4LcL5WtEhsrySuuwmtgPAoeBQmi7TwFvSwDYHu4K1diKBw6MXaZnLV9btB83RgBbAmMbqgW36f912NjsHbWjPFTq",
  "key17": "58J3TR8kYr4KgAgDg8x71MaKY89Fpvnp8nsFANfoHbzzfN2KgoZobc5fVBTM5o4MmEQDsNrz8okKixurPYJmj32u",
  "key18": "5UgBXFdJXgKMVUJ8mEEurfJ14HGuzBhi9VRj4JAfYBXCDummif1LRi5eBWJsqSpsvvFri1K7YP2yWSe5izsYUJxy",
  "key19": "65w1KefxRSk4UPAC471XLubvybfDJVn3gedL8kGzeK9mrvZnenjv2Lk9uTYEyM5xK4ntoqbnTmipcwZynaqaEKRe",
  "key20": "5d83dsKtvgKSjL9Kw83vrnFJugte6DHCic39Pd9Q7j41RgU9WnApjgdqNHs5L6pFPj1TMv8gFh2a453qi3c1B64G",
  "key21": "56aMskPKumWNRNRqdviSvf8ynv2pbYLCYnqbjg5RqQ7RrD9qAJe6c5yzQpApCJijZ5rwwyHSrAKYx5yvYbWmePBV",
  "key22": "247DkW3RShheWWnZsXSL2hGXJFoqDahW8iymuoAwcpxBioPhMwMKB5ewYE69bSLquTStusSDBuNsUH82c1Z46Knt",
  "key23": "29r3XaAToq2NpPn84CEmD6bRp3dtYzedacZBtTFTx7VAytESXurjMH17J6vSaMiXUdoW4PZcdwbDLM6rmmSv5gQu",
  "key24": "5DrBvsRdX9LV3nq9PpcsmeLnr3pAP3NMX7Zq9SV883eYFoQHYcCgZVAGRzmjKYYLzWS84e2sbEcGTNdEQC9CFXoF",
  "key25": "3WUpNV29eRmZCvBbnw25jtmJhwX7oiiqqGmNFqmqAirP85yNCQk2agpCjwiDRXTc64T65wmyhmWLjy2YnxoP3u7U",
  "key26": "3dDRoGycYxcWzCc5Dd2upg5UH4R35TKS9GgXdwoA8ZKgTwq6RrtEz22mFF1aCNKx8BcDfKcJaYMfn7vztaqQxQcF",
  "key27": "5WwDt4MRdfPf4nN7eeDkecjf4UuRgL2CkmJ5MGxhkkT7GAYRiwBoXv8Kai9s6dQaxJMY4E54mmdjxca5N9M9JYP7",
  "key28": "4bnoNXtjB38CgTge22piHvvXDGH5YQ5aiokpaZFAYDjm9rTo3mbjSsMA178WJU6rYhnVCymChSuSStoFSKCLq6Wo",
  "key29": "652nVToANdjAgzxWj2Qhk9r1fmhjuENVzgGbA8fKycUxkATeGTyrYeV9xqouyNAwMVMVywYkXuWUBLsS2KU3WZRE",
  "key30": "4yUoqhtDbWQntERQMM4p1nAE9KXjihc9yhrqySwTCF6fCT8i8zTEcc2399uLs2imwrVWzdC3GEFTMr8hYbcyipSf",
  "key31": "5Xe7YQyGaSxt2M113NjLGDMFYrbyGMYnyyzH6XB2JyTcsN18p6FmQtBRASYkskZ3VW8p3UqDfxJ9UPhTnoqC4Znb"
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
