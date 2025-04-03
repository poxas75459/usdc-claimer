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
    "61RgLARtLy9CxgnSTSJyq6vU7gByprjyw8LNXNtfceLkwzzc4TNG9GPbACZnUQyZ6yLRFQ3i11Nwnxes1XeVizxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56hfnWPtEiJ7xWgMHrQhd5qFJVHZNboTsUarzinexLvQYa5bWFXS2nxEypCNTtMW44YcpfViaTmpmfRuJqu1yCYD",
  "key1": "2nhK21tTLRe7YNUvD9shQjQyFug3K2pxUrUKZRoJpD9DVTG91yokFEcJQ9gxEaxWCUqGQCJ7pBibyhZG2nuiBff1",
  "key2": "5c7JFEuYkHdkBzLYYyF6CdPeyF6ZxmHzcKiHLBTje6acfbVrL8pA4c9poahWjdvDrjVfNGNcacUX9J7dVQwckZ7d",
  "key3": "5UYD3CiG4eZjgpeomBasLDJfA48aLSdXPfSuiEcHiujKbYqngm9TstDwYzitvhm2GGuB7yjf8NB2M2xJcfeUsu8q",
  "key4": "2VUokPXE39eehrhbKc5B8hiwMjraJw4QfuqEA1ihLaiSHo8ToHmitV5PiqPF3Pj8JYcddew6kHQ4f8MYSDLNjC5f",
  "key5": "1LSTeCUKgMYnZdbf5RUSa8vuRN9skm1uRyqNggHd7r1T7TKkLPwKUbdRHVuqPAxHzV4gE5sTc3GP5ou9ECxqvCF",
  "key6": "2JKLooe5unhayZqubtmWWmNCQAxpZmpktb2wcdR2nj8JXik2b3jpxG5yFoL7GzUN9tMo4oTNCgqkHW9ELfBokk9z",
  "key7": "38VQ2Qyq1LvYQSRSzNLZeXRFA8TgGvtBpPUHkifjmeMoz9kXZyACygX5mmwru8Ppy2hdo9bCiurmmyc4WVEn8YWC",
  "key8": "4ezPd37pLTbJqacDfteGKwqq2RL9bSnaeuKjPJLZTuzxZNtbaQzafdLcYuDk1qWbB3HojxyvzToRQxefLHK2RQg3",
  "key9": "4SwtS6Vef8r1pf7N7hXMsV2FT9PbPae6sxPSnNcKeT1XD6fAWyKxTaMqhs5fr5SzJ6i4jkmNp6hqzBDEYubzUHm",
  "key10": "4k76mRe8chNk9oprj8MPHgMbcUCWz7538FRmmcZ7HjLyRnqiU83EXsDLkt9ij35mMK8qgfgSNtERsGoL7ESU7613",
  "key11": "4b6P7NZWuY2idRXS3iwe6mFApXzc5QaqnyZ3jmtE1JjZvTEHgESeeBkfL5M5f8um7zJp5bKyCjfXjapqp9wWjoQ6",
  "key12": "frk7EVspPyMfLshtMqECp2hpPm4wEQPJWbf23F8N8ERapYBiCrQFj31a7Yb8Uayjf7ANtG1mBXdzLvQz1AdxtpA",
  "key13": "5xzTfgGv5c7TFPkfVgME6CwWg8SY1iMRLDGjM5u8toxiTHXBBX9jdSeeMEkCzaHxremHc6yewJB8NPzrK8a2VjEZ",
  "key14": "PcZKLsCzRiS5mbi2NHBBmqivfp4mdem5ydZUiTz1QGpzvaA83MTgjEP627jhzPKxjph9QANV9E7nJHmUsgzMsEP",
  "key15": "61PFHc5ei2nnVFbZKzz7xmQY5ssMuL69RDgJmS6RGjV9hi9obDP4LFeeBqMXdXAcaSnwqAxSB9p5QPy3AwayWY4v",
  "key16": "2fzwB6DMgshbtXZLK9FCdEDzxybM4vQHaTGb2vkCbjNqmSygSWgw4Dtr29LRJZXuaqR8aoa8eGDgrj3YNKmt2VzF",
  "key17": "31nF9Gg4tvt36QjCLAjjKkjc9GnCgwALs1JDprZYeGLdrbw4ew9kH1m9N8SvUewA3Vgmk8oEqGtTntcjrjca6rLm",
  "key18": "2j73Gecny5XhhLFypLvAspGP2LiQJXHJN4xCgH7tcXKJNUbb3KwYinoH6qEVSXR7G7VLwq1brLXDcSd7m4cf6nGm",
  "key19": "46hsunBNK1KVu7QEGVkSgFXjvAxmoLEYefserHoW49XMwLo1ALtGiErqXFLkseJPK7nLfohDBgnyG1SVQq9y7oUF",
  "key20": "2KLD2bJBjyCrjY8mA8nZrvG5FJ5jzsTuiR8hfU51FqxgWTaAXJxJBqKhB1HrM9h4MJSy2L3jUdjPEJCq5Pgbgate",
  "key21": "3SHZPWB3CygamhhYchGZvacNLxA748Y2pPp7yDqRpZhkd82cAfPJTN58v3ZwEbwMKVw8NXTuPwxESzPpgRxFJWm7",
  "key22": "3KxnVLqutBFPPAQFNtUc5MgNVS3rGQ1r12ziUxLs31r89rF4nnkP3s2SoweVyG8EXvsMU4v2MHPcZ5f218mKqydd",
  "key23": "5yifi2PMAbocLkUWMaaTpowm11mZnEHeZjtprZ1KsjBU2RQSUZKJXdfauMFCEB6qRvv7A8gs8v5EPpEkGUzUhdH3",
  "key24": "4He2bDDEqanELK9wkLjk8QKeWGTN1jLkbRE6VCNgShsi7D4wpdEmydKpYckdkGDf6PWjUs8bqyDq99SxePoMS6JW",
  "key25": "5XGxPdnpg4Nc4LZbDWwq8AJiGuWnSA5YL49xeTjBoCgWAyQkz6tEsCy7VqyCuFHw6XdZA2ePWcLQYDH89qP1ziaX",
  "key26": "5hoSKrevt5b8qR9oF3PPBrEuuBURWhfpz8wjHSGu5L7JiT5XfA89QrPjCkVifzEvDbvEAowwdMu8Exqjg6GUMq3f",
  "key27": "51jZpi6ZVq4iRNK89neZYjJV2u43C2ExgRiHVpeGnFJZWb3ujEzCBgaGESn1Sfy5aDGGdxytGJECGmVFhqEpZsH",
  "key28": "2fbCk2LKyVS23t2wxGHEwD3jSQBWfCdtLD2cbBbkx48hVVfiiep4F5Pyo8jM9o78V3fNPA42q79UHhxaLYBNM3XP",
  "key29": "3dHKW8ohFEwNmfcEdkGGg6SRy1Jwz8GZTx8GGwnTqfBPW1ZErQ2ijirLjUC2CZy2TrK7XNYsZwiRrf95gxbvuygV",
  "key30": "37akzMcSsPHhXSKrfLnZN3pzHjWFS1xXj9Vp6bBPbV3dRvFtujUXctnziLM3VEDEStSw4nvvpgsJRjeoLapQcQfz",
  "key31": "5YA9VNP6Tnjqe63Kqpgk5GJSeZvcTYPzCEM5gccZ1D61SdYjfQcaEe1tjEpH3Q1hvXahnknRPZHXvJ3VoitF3TRv",
  "key32": "277bBgHqKfJF3Vj6pTyNUbNZEzdDaVw5oaRiMTzJap8eucdjQpCnTVEBmCqqHeBcC38C3YRTmLusxnB98g6VGD1M"
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
