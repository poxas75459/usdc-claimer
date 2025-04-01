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
    "36qDKPEq8YgsFJfTcKiwRuj4MJHEzcQ1wGATZ4ohRLDgNv2yUm7iqYA8NkaoCXMYabmpc4KK1tXebjW3K4oEanHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MxEbsfLTwVCBcnHgT8FNvLLYKTy2po7RTz7MZ2JRAcmX5F1tppzTMxbsq98xR24QQumLpakMhUJ8kqz6cXXpQZ7",
  "key1": "5CxRWo7Np4JX3waKRaQo2w1BQzVLRBoHadRP3dz11ZHeYY358aRDBkcXkTD4DoFeZ2EEHNtwt1Bn2gyCGRHTwvia",
  "key2": "4wXudsfDpEe4Zhv4nLFLSEmNGCnrwZW7hDefrzd1tvAX41K4eiEyqPm4b9SCUhivmQCvbKj9gVjV6P5dC7Jw4nzo",
  "key3": "4E6kozsRxDxPdFBFYcBdhBkK9c7o4LwPWEPgZ7uY9W4yhkfb7fYc5Uyt3AC4uFMvnMv4HbKBcsBSKNvowfFFaXtW",
  "key4": "4e4P9EBghYvHdfsPA3hbRpucjPzEX66iesKQ8XWUyU5WPjDSEuWU2PqkQEZyjqFDLkQgPLBTKzFh7JzkKY7AZYRr",
  "key5": "6Xt8xY4KyKciQhwanSAGaMqZJSzQW128SQkWQJiMcqjVzZzVz8UFjrJqyVt5Pq9jEkSn9awf5NdjHtzFAESn2q3",
  "key6": "57rEymC15fEVH8r757WxiXyLh74ca7CCRCV5AXXoR8wtFtvNhEi9k7swBzM97ME6vqjMjaqE6Nkud6vYBj2Dbt2J",
  "key7": "5afV3a1RPzdsrpxRbcUPrg3aVsi2YUeuU86KHjfMB7zYqc99Lyny2bEx9ZPZG6yfCc7hbwe4VrNuqBnuRLmaByXe",
  "key8": "51dkm1aPyhGXCvMWJgvS9A81CwDjcGm9KxoaRfFWHjcekDRws8tLp9coziUbw5gLACiqxdezCnVrRVz8h4jZUg4b",
  "key9": "2in9xUpZMjjE6hpqTKKyxtQdyXnGoVRyQs41gp6mv6RL2kcKHKL7AXjqvnVaMQX4S619436WAn7sZNHeX5R7voGg",
  "key10": "4e1gYmwPkGfm64sHDxVfpD2HoRpABH5qisPT1FoXcG6ABgpZG29xA5w8vgWMTjHvjUGVhEwndRCLRVXKXhaJS3kn",
  "key11": "5e6LyMnWyyRBc34ekXaRYmzHnqUJJmV8HvnDj2yK9dS7KHN9v6REGFsEt5UG5MAKUangmJeHm6aBhM5q2SYZ4MV8",
  "key12": "ACEURRZ6DLFm6gWZ8cuYJVaHBsc9iFuNxoopWEV4naCJdCDnn532UGnx9oAqTVV4hPRGSVyrMMuLGokE1JDzZpd",
  "key13": "4CSHnmWtBDCcfXypCgKVf6h4sk9dNTYzqmhpaWyUnqG6sswyqiuxfi6rPgiPTT6E4KxCTmToCh8TFNaAfqtYgBat",
  "key14": "2DULpqLHwvN7JGx7SLEJDpry7BVYVapLb413gpxdJmV1hn75ni2Xg1sZ9ffhj6Z8DWsuG7BP3CnuUqbv7pfmMJn8",
  "key15": "3WEaGBSrW36bjGubvsMUHpav34YS3UeUjnp1ASsXqAjDzzmG6SbMFXTbGffkBwiL65voNhu2VdAVp4ADchCtuRrw",
  "key16": "2dyg1hoDn8M7wN1FJFrrbJhrcw7XfxpWC3iB4qTkCm3Mde26eggcMNtmyv6TkSpWfM7WKyqMT8iMofXKagehWkbb",
  "key17": "XWgvf2sAfCkBaTR4ap89Hj7vHtCa5KJbNJ8DVLp37ksuC6rstCPAuxBDmXFr3mNtmuXnuRijD13Dy25xZSnEy3L",
  "key18": "2ssUGfxCLs1uetnpvGf5myqnmxXzFmKjpbhuYGr3GXyiNwfusMhn88eNE2g4F8dQ2CCVJu5qfZsHxafBEHGSqT9G",
  "key19": "rwwshAs25KUkXZcTAtsJtckw7UqN6E7wYvnfDC6SFnPzdSWgi1EmHCWJPEjSaXLw8P8HyXJ56ePgtzGRB2st35Z",
  "key20": "5nQwykVXhwKGJwL76M27sBfiAnhZehTj9J5nWuVqoQZD79hZynLYaCJCZWe3GYbdvNLcRR1pz1DMPw7CNR85DBqY",
  "key21": "4fJgooojbcqJJVSu16HP5PKYd7TEaTVXXjPpC6umbogumFRsh2hRRYGp77Do8hWPvbck5ouuPo979hNTPcKHSeXm",
  "key22": "5XP5zzgtZ8aFNoCs4We4pWGWC11bsF6pt7kTd76bzN1iytXkeh2LqY8xanjidCHwbqvQ6454V5C3V2v3Sa1x3hbX",
  "key23": "3xkeSzf9r5xEiki3GeHjYvKbd2NFL6r94p8Z43fqZ8VEqMzETEs4av56c2m1Py23wPPAtNRZNcoW35pQj8wwnLfC",
  "key24": "3DPLy5we2ehHdsiAsU14KFh7UD8ooUJHgQhiU77WWQtsjNLrKGnZd5HSz66AJ7xd4Yx9Mb6g2W6cL8BQbWPUi8i3"
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
