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
    "3Z4y4AdoxDwsjKdacfWMHnWh5JQMMM9jZkc6zp7fstCJxLSPPs2chEceFL5v8MNcdNTE8dZAUuDWBhhw7TozLYJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aLYRgAxTQMtKCQCVwWMerDSrZWkgUNDerjuMHmd85egueYPXojNymzBgTTCtRfB1wqaUTWgNb2Ke4XMjrvVUnqn",
  "key1": "2qWMveiFtye1gLYkYpQK2nxSveeTbYcuFr84sGPfSbToqBu34y7k9P5k1WbxeAv7hdcfgMt6CV4DuVVN5KNK7UpP",
  "key2": "JTS5qLXLT5vobfmzDHPEn8ZPubN8UukjWSKd58257D3DC1KSHc5UCjLiVgySDHDob5aNxrwgL74eYijnPZEDWEj",
  "key3": "3rY3GquUuvMdpUKwd5wj1HPcKsrpvMrip3Rqtk6BtdUYxNfLHcComjytEhc9VkipLydLUCF5FM6VuCQFXhGheyNx",
  "key4": "3dqKZMi3K67a2fsnJD6jPCZ2hkCQwd6JgEZKk7jqR5akgY5BPyEPZpxvG66L96rGVX6D3fJ2bVhaREeNpgPhyRpW",
  "key5": "5PyLKek3TRwwa6Z9o5U5u38PNN4RWvJ6zhSELFdP92k9Z55dsRp6E29rC8LAiWrtzt6BDYvYMUWJKcuqfU3h7QdB",
  "key6": "gcwheih2agsmoeKjVL6RzYuazKyF74PoA422QnCXc4NPRTdobryUUCHmpmo7par3RYLipYGJBtqTEAPTz8U5maW",
  "key7": "5yCULepB9owxzuczPKFMq5qp14pchPdo1ub3cyFEjgnMR6o9Px33h17dgzYqALRc9F3ggDJKsHhLQwQAWpkTnYxU",
  "key8": "2WEKoNBDSi8g3tgZXWzodkSrAP4BqB5Qn32wn4TY3Ne3gNGH3yoyC8JCJJTdTLQYfDGnP8tXZ4nF1uuF6TexYeiy",
  "key9": "4fFbjNXZvTG6GqgkXwK51U8bjKUySTtyA8dBs2sfQYcHJrQHoHjExsqbYR8BBcBGV3Erg2mVS1BPehcV91s5tLci",
  "key10": "5ZBMS1JS7RSA2eonwpykiZSK73ajjxkxufLkQmkp1g8uFjAJ8C7ghSBRo9WjftyBiKWH7UPfxcXx878Yohj3KNCE",
  "key11": "G3eq2sD7NEbuXxfyPJuqxKbcekFC4UGS39VYU8qfwyNkRWj6HoA2EF2n7DZ87zgqwL4oVVsZaEr2nGizaz7PD5P",
  "key12": "359RLwmkg1tL2ZoT22Anmfp2c6yHrh7xxTwiF6xyFeEcTZW3kK9wqqFFqQMFWcaf3vzyV6qhiGEgkQ39YADWCosg",
  "key13": "2y4QFgC1AyMR8EBYTLSnefVsSL4EQRf8Qan8NEPKL6xnNc1gXt8Ra64YhW9C4UVDFkccytMSo1PVhTnGXYVG71k6",
  "key14": "2dFN2EHh9yhC42mB6Cc2pbqV5aHVWxDiE6gG5bppSsjwK4Lmyc1CkDyi5puoC5A2H1HzECs5Lc5Uc1KQWLJcJg4M",
  "key15": "2W4HXNrCA5S5Bq2fPnshj5YHw5XVgtEJTArmdY7jkQtT74osnDjFDZQuNverMBfP1eZ17BsHLT2ns69MC6tQFrtm",
  "key16": "B8TJN7bw7a78xjiiAnyNmuX3u6rdHbznJrAAJBg7w2tcjkij3U6qNPb2gJJyELhdzxnoQ5YF5ewC2N7CTjn9Ar2",
  "key17": "2gJNvesYMVpSjyAKSAGSZvofJ5BtxWiwAsho129t26VzT2VyZ5scgvrvGtNREo8ET7EfYjk42v6V4cjYF3KhAerV",
  "key18": "25rtxSqh1CRNF43ctRsRHvM9Ztwo2TmXkBFtZJxN2niCYPYJcRGHqZpUTy4J1x9dU9D6CR45jLc7Mz7ue2wLsQsu",
  "key19": "4tcLvXheUHiBkWw8HcJCccW17MDAa9BhTeSwncLQxs994ZYHsGttQmNtH3DwV27Y8oQ7HJ5UxFdt8VWKBPMS8YLD",
  "key20": "3VSZiDvuWF6LASNjhDpA7EASzvF2oiV5BiC1x4FopteLsVidQr9m2WXRBaED3WGaPJmG2a7TrpXDKevLgCUcwhp6",
  "key21": "4CAEQzxEtvTGgj5mA5hvei8ewjrjfZAvmmUT5tzjJoRu6ZTV93f1yzChZefpk954qK7YLv659fHb4F7TVq7L6U4T",
  "key22": "5swYcimnDqVyQWrHC61kDtGyXs32GXxWDDvv6ZCs3Sg3vTa35xJ7fgPmQd4QpouBMyqYMdRFu2r9BuLCvFqQTaWR",
  "key23": "23aJDu3Gtig87zKYjrijF7LdJDy47x6CBbkNWYm5V3QKTkQq9TQPA1NJFpFNcRuQJRLHpQKDL9Yfbm4Aapmf61uZ",
  "key24": "qTMKgarQU2UTh5bke4GdEkVXEN6qe1WiFDxbALvMHZvni8AB3AiDJVEg7ULmKNfK8m4r3zEBbc4aywKCGAKwKwG",
  "key25": "4rFkLRy31awdhQd684GJmfUgSuANyi7f8VfaXwumQsMRZfeUc5idB9guw7oQQp5Shuf9oaXxUQAHyC3PZk9UyMqi",
  "key26": "2NgwDDLdazHioB7nbm2bnkBMA1kg2SBWGboGK2UEnKi5oDsySdDfaDmsiejm7dhhURqZ7CMhVGKb3yMcLo9t7aUT",
  "key27": "4qqL1u89xdG8vvLwVkoj6NYkaA7JCSZNn9eVy9f9aJv9Kxswk5CjE9cTLfETeD8RyD4F5d5J5mFVNe4fykfSNxEr",
  "key28": "2ntpmYwHRfefx4zytug4JtSrejf49ZZ528yaf6ZNuoU5Xs5vFcufcc9xqxym95fcRK5jBT9JMCcthKyfnMKGcPBr",
  "key29": "3DprtKtUdBbgJjrcC4vXhN5bWU6nJ47xf99izMg3BXu4esrv8d4rVK6MArjLR9Cz5uF6sNnB2wXwoJnaGYDZybgP",
  "key30": "5eSatdNS9YmHSm2aFowi3CnHvpoYSLCMBvV7DBJRHvBZ9j7Nd12jUMXJHeTFgCo45bfAXHKx2gHaFK8yGkfyxgYQ",
  "key31": "v3DDPXwMmRiQnWS9ACp4cRfW86TXBytt2uvNgC65cu79JYEgi6YjcPkRWH8rSXQpbxvpxZuxFV5rtXshrkv3Vva",
  "key32": "4cFtU4EYtndwQMyRBjQs2AgVQbzYDB6fw5DhHFfE47QCYr1o5LXYQmRjnnCrTcqE825Gf8X1pLbKjmcW2PQVRfmN",
  "key33": "5pdZYFNPCyjuLz31ePPESk3FTX5zVn95N3J38hx9QQNtxCqNeYaPDtMsjex8Svvhha9AuahCY5Kv7nAptW9tyERs",
  "key34": "5PCiMN7h2W7BSWexA77RvG9ZzKaCD5fvz5eBN4r43SB97Kx9ki1APc3DKNRb1zHf7R4nuBfffh2HBQPnz4CxP2qT",
  "key35": "3STyStf2jm53HEUD9C9BKfGsG9PaF6WR2LjrMA8uNBxrmvQGVA8CmU5LYBQiUUXGhbjcFVzZXHVyJN3JTAa5KXnJ",
  "key36": "3vt7ibDp8HuZ41jtBpj39scy8c9KwuCgv4hde7Xr3wRAPrstB21aWTFypGtnhNUmgXQsZT3JTP7dbuNFoi47TxQN",
  "key37": "iZsecrR1VSXQNZgEAraatbfcPk5dzejJtZ1LtrvFT5f3s2W3viZgfG8eLYM2riFjjfxHTxrFdtYXFrb1Kh6Gb1z",
  "key38": "2RCUSey5JtPSmFitsrymRSqzVzcw89eHtX4gL343EGogNG8qDnV6CnCudK7aLiYJjF2qGLFZhJ9RYTBSGts68LuB",
  "key39": "mokLHADM1m5AS6GY2UYMCxF7b9LR6FEjvdQTXsydseSXwBSu4PakYaF6MzwrC7xXSSysHnYMgJ9vxvQEgyZuyNv",
  "key40": "4sqPHCWWiKADv6adHtnUNvVnXf59C6tHkfjzD1E7S6FqTaCFkugzZa5vz5uYwEWa7SyKHYn4Y6xu9HyNeTGoS5we"
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
