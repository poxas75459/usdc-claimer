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
    "PaCnDkqB8u3w2yBfB17a5jnJRjRgrRj8MfoQearkKrJSJsnYmEwFnxqqJqFpemixjGgr85RfoGkm2f7x6V4mJ67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38sRk2Hd61qm7VYo2yU5ZoTv5aVLzZfy2tefXhufiE6T6yL1iKDZmtRJzMzsLYwpknziUnnUVf1x6EnT9D7wtcGH",
  "key1": "4Dasexkc76TPf5crHUrwVr4PBossCncvGsZK56rzEEDE9if2hfkfnyWKUDSJmXrQ4cDujqASLgHyBw7K23bpV89f",
  "key2": "3NijefUjFQAoRao34yMnVq6zBLae5DsbXKzhcBfVDG6xvfT885rB3pn5xpstPYvq4Yt88RcDQXz7VMP4u8FJ3Ees",
  "key3": "zXEiZArELvUb27XKKe8RdVANShgqFKojRt4Eh9UMC1F2XyQAo84DjnmquKdoisZoTwz9TPMDNjitTH8pSGxxnQo",
  "key4": "5335XHpPi3bvwQSaoydvmRvB9sBci1565nBvKoXrHXPtB5RX5Tu7TyisBgP9gbjWyAevA67UqrzNKiKsZqTwZibr",
  "key5": "4ZCpQ3nKj4DPE7efy4J8U59Zj3i1XQ56vE93nWyQYx6EHpu2Qy38SWPrMVhUJ6jxWMq4R9xxfawyJg36pPA9aJmy",
  "key6": "673PeBswE7YbyR7f4BETrZmnyuYwWMwsZR3nGCzNBRKCZHAJzWKdE4wwWCXnXuBXE5qC4ZPfQeQLuVF7gtsd9nSH",
  "key7": "2xS5oN9cJQW7UGxyLQ2i3Q5YbmM5ojSJikcCAUeLYm9uHr5FWGMaEZt99WzwvHte53BxZVCtpwutWbSZAXm3irMh",
  "key8": "3RKULvqm4MvGXhqiZtt2ht4GCgYKxYimmgVHCW1xK9XxkwP8QN8sBa92Ma4NZRNAcheY2NaNVYaxQwyPVTt4qc9P",
  "key9": "4Xsz7UdksSX2KFNTRdiYmYxLoE2nck4xTL4QLo6ZNGed6u5FkJFYpq5zbAADqBSxBec3NVfW1rxERjo98EUKcSbs",
  "key10": "4CbhHEHthibqWV23rokEkUF49gcV8vWyU3UgEgZty64DRXacDMzSCeZnHf8wxsh4RJqGZ2FdvW1nqb5AHwmnff3b",
  "key11": "47AgxmfaLm7nzb6fWpSAG7fhRXw4ricLj3oA5CTcgcG8xQ2kTDxK37fGjUwcuUNoTvpcoAcvWiC6bT5m6VKQv2H8",
  "key12": "2gsULbUhMQxgtK3er8eTqvgDQDx4zb5ajit4brs2yVLcpDEpwvL7x7AcXD8mRLTxdVPZUv7ZL3hQJRus5DxnauDS",
  "key13": "38irtpDEgkNJ7Dj9GPdAqVUf33wNeg2HNrN1nn44E2g7Copjj1DKCiHxEFvVGKc1KA8JRGUibYZJvgL8r5uakbCH",
  "key14": "2RDiL4U9vLos85CUgWsstY9ivDQyvteQ3dCcLnYhub9fuUkW6cC6o1BGNkG8EHcwpnDbLiWnB7hd4akF5teyHmx",
  "key15": "4YkdFya6GeZjzj6kgVGzpMmjNWufEaiLrMZdgoUF8ygsi3h65i7c4eyD9g988RfSEjYCZTYZJ6vccv3vECk41NcZ",
  "key16": "3LryQ2udDYkTde8eDszUbQ4w59Fe4f3diHWnkKGQCBB7FG4NYiexb4uqzpRmAkeCc9EzGmCd57iEkcnYvfGLwBKz",
  "key17": "67DH4StKwomRqgWbTBKyHk6fFLNsgQeCDfb8U9oFbpaVAR4QMXLfvKH2DtW96NNBMEeHasadSVNmBCJYpfd1m4Qe",
  "key18": "2TohoReLBpVwqEXmuTatBf4jkaCbphVNw7nqcCZDspucNyrqdyt9owGQSStmiztKBVXCiRdqvbYXo56DUyNU5EV1",
  "key19": "xUUcn9sJ5mWB3QAqGUYW9xkQuML8h65NsBahkr1kFFs62svbyjM7wfrwSmtrLpTPWKp85NG3dHk2S7dqeM5cmMB",
  "key20": "5NdgAVVAbJZetGS8PECZpPS5FNkAxPVV9JcRiNWv9u53ArqG4PguP5sJuyEXqsnRhYH56t87LozSCPNFnudCvbTW",
  "key21": "5Gmqw32HZivc3m6Mq3NS9zEuoHZhX7CbQbVomk3domYZR4xbURFwSRCZAtrDvycJPzYhXkZWE8Sum7TRbrTGqvWe",
  "key22": "3drmcPWWYp4tv6FASrHnYkv4knGdjN3dtcpKoeUwpCAVVww8tctDwdqcrM3ZWrAEW5Ynkipun1hiwmgJUXEYJ7Ww",
  "key23": "5LLwCskUVjQy2wvCCZB1cTS3g2zNRUw7gGU3rHN2eg8bBoiUZ8FNiCnbBZsB11aUue6JP1dSwSDJFeKdTL6RjYiL",
  "key24": "2jouVSGLAkAMJjhLmZTP6TfvTopW9gHhXdWPsPJ6vTvqvfo9dD7D6XxwnpP2wVbb4Coys61Hs9kE21wdPDfHk9c4",
  "key25": "4MRTAJG1GJcGNuZ9kex4NjFWDTHCMY8pEym6ryojZbrEUs3UBJtqWEpctWrQuokREYzHvmgB6SU5hzJZ7aB1zkau"
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
