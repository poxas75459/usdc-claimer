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
    "2Rqhp9LLnWVG8KB2n2M5co75FSuoCP9UxET5WGEKxp1iB4R4zjQsDtay8irKQn2fhj3jS3vLpJqTzwxDmcr1H6S7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uGKiRyNky7YM6cd6gKdpJGnQs9gbQa5ip2pxhWHbCDHRWG49iM5952UScma4ARQFhA6M4S8ao8K5MMg1uCdR5Au",
  "key1": "5u4FucEj9L2851cpQ3XNJN5U6MLsX7i1zkBAZfRqFRwscBasB29WZ9WG9ETf8k4Hq6puxiNpLfBvVkYsDacJMRbj",
  "key2": "9tw5ihT9z6qGUb62bRnWNs6RKJNaPR87sHkQEXhJTVhnevtaa17q4Rie56NdWQVycdenVFVyfmCj3bNWXuc2WXw",
  "key3": "4FdJKxQBcZmuCrFGZDsFYZhBucBmwVCzaRAmaAyc18akDGAPsZXJnGCyUD1RWVApPt5R7D5JRE936QwcJJDidQfb",
  "key4": "5otXxYbdEKJJMxds1ZGzDBn91s6kwrz4pZ3HmHaHZntUZHkbucWjjWr6RjR3nskFW3t9LtLxCtSsMpEzaXeoDbnr",
  "key5": "cAM4NGchN4HrrVk8ugRqKtkYwVu2n4WzkUqiXEmkVGUiTogn3ZT9mbe5jqKuRCHr1YqJiNWTrQFbxEf9RxJHvmx",
  "key6": "4Th27D51bqx7gfp2v5pvhsSXnAFfaw7DH1wbjHiTEdETXce8jRqv8Bg2H3MziHYigf3D71R3ArueLP33GREsfmUo",
  "key7": "5fidu3jfnRLGVXAXB9sYWQqaEtmPvSHmzWDjTZs3BJGNEHAdFcBBMmDAHrPbLD6JV2ausad4uU1uKdye9f1jK6eN",
  "key8": "38Kx3otonEYtLdibGK7a3PsMyVSNmjDS6e5vSQq81DPE4397fZoZTV9SeA5QLMrJ7amo48iTkDkjWycYcr6zJ134",
  "key9": "3zHB4nJ6m9VtC9ccRPRLXZQdbpk3ag3JjRQXRJJzdhw139ULZY5eAYyVvWWCrC46hv5khf7icNM1M96aYZAfXVuu",
  "key10": "4z734xQZu2kN7pzpECRAFiZoQ6z2WKzZ7au6Mer3xvVHWMb9U1f3V1XBQ7zVEpqmkpfj2HFsbF2vEsjPEiWtwvnh",
  "key11": "F993LDtzEVWqb5yu3Rr9UJEYWcoHaVo9aVxdXiLsEH1Vsm9hcZzBPnst6CMS75m3NcsUFX6KJpspFNZykq2RtPS",
  "key12": "2n3BZQFNshRyhrXde8JUTfGh39cz6KPxQDRQEmAHBpGDymHGrpKcTCmaWJiWs3paapudhtTmvBW3ktucZjeER76m",
  "key13": "SckpruTLDNFSXS7yEGPGgtA3hvNQSGQoPD82WuaePyo5gTUXHEzUXYyrjzLiKBF5XDuHHakMejFDpaYpqPuKyJP",
  "key14": "2JQPXuNEfbrNPM6bjNhYrXAutVKaoPoEVndQuEZry19LcZpjCvJXcQFADEUR4mhbHtARoVfLVEJXcv22wh6vbkLj",
  "key15": "5S47K8xszv5goQ2ToKYZHRZJtr2cgSDziTQy5acUEZL4u6p3yxP8N1hzP3CokroDPtY7gi4ZW1nuE22FfZfk7Rc",
  "key16": "3tFgvY6oQrAjJ4dkAUaboxdMnCNY7PCio4cVYbgT73MfVR1X4VwvCfXAFkJq9QgeDtcAq4qfJLpWAgwupGXsviTv",
  "key17": "4Bs73n8JCokV1Nc13byRUV3tixXpiy1iq8JzWfu1A1dMLvVoE2op62Swt5EDPCAeoz3Noybc4UjuXn7rUYLQjjrr",
  "key18": "3bLFTGV7X5GV65C8o7g42jkuwgBKVVMwTepabTd6akL4YKs9hCHqL6x4mXLuY2nmh3egjFS3ESWjnscSaewcVfhf",
  "key19": "3tE1dowi96Gsp2eqSeo8ArdYoCrAiE3QygsnWz5oBuFzDULvsuXHyL8CpYFd5ESvR22Nt98fvxZgQi9iYQc1ephv",
  "key20": "54jjPaxQSHgMpT15fk4eVK84k7Z6o4mm66reyZsDNdJ4k1zoff5yaMYiJTM8gJnMZvD4XotjnhW8XcPH9Rti3Auz",
  "key21": "5vvgEZUzWzf7pmzc2NgdBqVhWcLDx2jU42F4HrEbjD7hsvvhqNuTwpH3gZkYkBwv7i16zf4tLvQ4b8FMNM2UesEB",
  "key22": "2Dwf4uPueYqziuc5LzaCfHuVYH9H5kDHc4L56fNvxqS1qNiL53Rp6EF4b36cFFyxkVRDSV3NnnwuGYoq3Lqk9yht",
  "key23": "dkhMAv4Pu3wHN7TMcgZhBtJRcJvQEKVKzVoE6KsuWF9xGTYrLvsfXEPZqr7ebXtbdKg9MVmsSwBtCUufy3bAo6W",
  "key24": "3xWNi5cx1v3qn1ugj9WdqhDSE9Y5rqZqnMXPsZTMTRD4TNtRDrgm3HkGLFxijxJafCLNrRg7rfEakFasCUQ8BgZ4",
  "key25": "4UZXEN6tds5dwshQD62ooWYZAnYvnUSJmTjbVAcW3aFM4cz3qikznjkcsy8H5W9n91hAdjXzKrDWjcFasR4bYZmh",
  "key26": "55g1aheDXaQesTwERBe13Vwie8ijD4NdswZd6tyyZzVKT7GhVc4HQiCEZXJwUXmMAxWv444cHsoZi3odVtrX3PN",
  "key27": "5S89zh3Y8pXyvNJxY8CLXq1jCunkniprXgqhesWdeTJ3Nkgy8SN1qAkQ3pCQfFWZxrc7P2guEDMXbqS4ygwUMULH",
  "key28": "2T9pPzBBVTYqF9nKQKN4uuJJiPARdziZXCZkfpdvx9raoe9xA75wRbsHKqbkQtTyuaLAxf3FcwU9UvXxfuV2P4im",
  "key29": "2XFeT8hBqRDJoQJf6f5h3CftfaaQ4GbnbEyLHEyfaRgGEj47mAPJcgcnJJadmXSaCZ1EwfSN6gpva6SHP2qMqtdr",
  "key30": "4Meg98TCgqjBtQGJupazUZfyY8EBofpr8nTmiaaxu329MqiqxSzsj6NG3KByjRgJwcVfG89fapYCYXQm44oBCWUv"
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
