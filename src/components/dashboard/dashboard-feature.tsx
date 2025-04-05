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
    "3zXmPP4HpypTVMyYH4ExSSAYZdMQdsMjaksrVWr1AkjbwRNQgR3YEojDrBK7sz561qqL9cj5Qim1s4Ag9SanQsFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t8PJhsmJFgdeDurfFtF18TpChp4RiMHMfM1e3rwq5DaroJb7nyP1S3MQhAeksDt8evM4xicKDBtEfF4MADWrhEE",
  "key1": "3gSbAUvjkbDdbVxMgsUFbezM9i25Yyu4FJzRumni5rmACyVwHkvCzrB2eBQM2J95auMC3a9tGjAPzog2sAVgnhun",
  "key2": "mBCHRpqMtLaD7wP6L5xJjEzwN8Z3yEyE44pZrVq9bMwaf43RvDy94NeyUENqTkMWmcbWp6wvx6hbUPL1QCZuLod",
  "key3": "6428vDHVZGB9rojAXocLbJKswR9x8ophuK3FTatYuNVdq4yZqjQdEjiSQwB6eX6vv55F2AYfdz98ZK7bcgyFTuqA",
  "key4": "5dD3wLNCmhaDBVU1gEjaxUtXPRGX7ME4xLf6vPoz8AazWK738PB9em8VKUcxWStn8JjGKULrWQa46dfmDZUP6Leg",
  "key5": "DJL7rVxL42kPj9L4k8YXg8aeSHwRfQUyPtCeHERACfsnXVixXceSEwVH5spTdiLhiwMxCFS7ph1mYsvNP9y3pcy",
  "key6": "3tXipenyiRxD4SPmUPKwJmyFbYWz21YBJoK33H2NRP7HXHzWwabnXZJFmdkcZvwTpvn1h1T2o3byTXu2vKPANwYD",
  "key7": "3nZJmEyzQZZGTyVeMrrEbvM4nqQvRok6GDzXQNEPRgvEqyLmnU2CnzpMUtZLbCHjUV8pZv6ssA5a3emMfaPfJhVy",
  "key8": "3DoBgEfaCXWdEDTbn6KTXzw72jx9WJSAhmqTVQpFFRXKcHXMurzyuaH7JyKp4eTHc7rXgnkEBzSFuxQxQVLxg258",
  "key9": "ionvCGNW7qzPrPAySkcT2xwQTUMyfCfSggcVcX4GUPuBfQSr8r3jvFRQET2bwRUGho6VLDLLvUj8VnAvHDV9Yz6",
  "key10": "2rw51Tfn3E3nG7JkQyTd6HswLQDZ3Wvf1sycPpyp8Ee1U1wqKuotvsw4z7d2u9FkcMBsKu8nAcQAaSyJVT19C3Et",
  "key11": "2GVeP9vcyqHCxCT7ni3APTMaWjo9qayhC6SKeFgiycHnFuiRQ4CSacErKtecL6QJ6DD9FpuxbbfHJM6Fr1UwHADS",
  "key12": "3ZDvNt74LE27iotwdKbv4Ug3hyjPn1nFbuNeeBLzygYx4PJCwrSXDNM44nDXkYPKtyWBpY5NDprgGwvQbBX1p9XB",
  "key13": "45EnBQnyocnYwsF3n6fFBqg1XktVKwdtepn6krGT7XbmiKhW9taihuu8AYNBon35YXsBLG5fcDDSdonuQ6Tps33i",
  "key14": "5AJfBtBdGQK6LDYYKxgBHKWGtigGDa5Yif9a2wpjKKvxQqJZYM8zbMJeYFVrwgqg1M5UkbbsfhBHR3BLW1FTFgvm",
  "key15": "3gN7D2m2n9f3G16TuerRUkyaTvVcqAvPMoBC8MSKCDyJ3mLN2dHGZD27tctMJbBwhqWT2yvhYSc6RU2gcAnzkdnx",
  "key16": "3h4crP49kz92D3jRTGMHnvXRNGrXey8tpLWTLbcBNoRn7mxaLUqbThXXS1QgoVL8PEnVDn1eACQKzG5ZZwQz86E2",
  "key17": "ch5hatUDTK3uLv6wkUQT8CfsLTuXRKXvSxWHi69oJFGDdAxWL5wyuYJojFj9jqntabiog88pHsESAhEM97Mj6Ye",
  "key18": "279JhvSgXQGTDbAfbcsZanP3YHsuq2WA9NkP3hMce1AQosRpVPJXrGN9aUFhycvWxBeSaP7QVm5psVxmGMJfHDNQ",
  "key19": "5hz7y8aKUNCEz5fQFuhvMmdqADu8ftABi9oiby8HxwHhRYLuxvo9jyAq5ir8EVZmstnw26xDesF7wWLiMrDdoZE9",
  "key20": "kQD8DhKvfbfrE4pNvk6i4GwUkxSe61R1sCuPjaxzi2FKw5q1cHyvRGajM1guWux7cFav7ujnWgaN9hS3Uy6YaAY",
  "key21": "3nLFhiyXo6G2L5HJGEwgz4VAN36nwGERwwwa1iEAZS4zL5QLzoZxWpF6iwmLfnwtbwBkY2XrXDzae8Z3d2jUuYGv",
  "key22": "4XzQdTRyHC67G31YyGyGeUq7hBMtVuZDDueXNc7Pg4MnQ1BGBeW2JiRtp9aJz85YcnzmkyG9nko38qpMrP1AV4FG",
  "key23": "2chhc9zDzxqSLnsfUiDBnTYqRkLKPMxgY4YCHeEagQ4BC75hAJwL8kkSiSyqmFdqxpx9XXpHXta8QUtnfrmCf2MV",
  "key24": "65h5nx5Rb6oTFb9qV3vcyrAyPPZhTJjhdPpC6fKsdzUzQ6KMFYupPbHrvyzSsTc2NarLyKXJF4V8yuyYrAtFbANq",
  "key25": "4rkz5eLJCdeeVdiYKds7rb4FHZWffT4RdzNhoe5PirooeT7UaiVUHoU2fstwfRzFyq3JD3HuXYUUKN8kq3g71kPq"
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
