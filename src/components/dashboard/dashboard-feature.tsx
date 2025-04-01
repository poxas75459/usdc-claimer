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
    "2kbRicNXMdD9McX7zD7b1YGSzBwGZ966Wd1v8AhRmQFXKE45S8rJXa4SeVMHeGhZM7TwJNKiCKWwWESxQZZ2sQbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25bW75qixA1uCDTw8BXBazytnhoJTui6Uyv2x8i6WoQAdsE2dBkHJnK8ynQYyJdcqoH1yWMx748wtPjuhjBmnrnJ",
  "key1": "2RvufByfRDRuwa868feTzs3upiV4qpJbFQab2iiUsxPGsSLG4KBbnVZ4FuGDRLKzJ1BedhWYo9i8KkBhaxpWygow",
  "key2": "4w26hH6SysiCiFjtKyVrojxe2pJvCWkPSRzpLute57Sd8d5CrtB8NiC6Jy7QJuQypW5S5t6dnVmpEr499Jbs5SLq",
  "key3": "m9nA984gHZeyrk5JmePaAb68TwCTFvyz3K2FnQ3MmKwrpMK59hmP3Qamm7YxbnzWBY2JyyMFgDyKas9VocVaQt3",
  "key4": "2mdH22D5ZsQVAteL393GVj9zxnpKKtMa9FXK7DE8qFgd4mKYocpZtSakTqX2zK7ihkzgp2VnvE2oXpwECXgdVpfK",
  "key5": "2sWvDi6j2VBWw1h6qJNBroSuJr7oz9TPoMNDSvGeJLiwMtKabgzD47xGGgj9vZEeAtznVZaZBjgE3GTDG7VH8dNC",
  "key6": "3EKijw2nLvkesR3NNcaNjMozAcASACyFEtzfBsS8a8he4gaVrt8UMhsP2twZHVNLsiD6ZrCKPMwxq4bY5ehEHQAd",
  "key7": "2NaLHbguXUwrBiBQSYYAZwq22SmvQvgPxWa2qDdJLC1YTWj1pudu1tXm9G8mL9WPs2d7HQYNm9s3iFDBT1b7W9WK",
  "key8": "3G6kug5Fwbu9yW61vK9jE9ZHbDk3Eyqdy1uQAsPvTWCp3jAo2wA8vZbAoh3z5hrbkYB14TEQ7oTkHLpwABBCcXgn",
  "key9": "mr1tBfH2C1BZ3i8ELniUBp3aGy86QUMQdNCeZUjt6hUZPMCXayBqwsTRqdoWoJBaUnLFDMMcY7tMbfmesgBaz4J",
  "key10": "2MEMFqcrXHveH5ttFn3bLmvpasCptVc1AUejq7iqmm28HGXrtfxHTrL6rQ2awQrf2tPZUxFuytwvjS2MkbrysNeg",
  "key11": "2vfY9mKp9zQBpG4ku5qMsWNb5sSgYhdQv9DoVFSLgaJNhdD1vLtDgmKvNx4QWMkWrU3Zyx4QPE4dVKEDHFT1qshu",
  "key12": "4LajxxZUHMNE1tXxXTikZ5DcA6i7kVJsn5C3jE8k3rcDz1z4pnW4fRneoqEVktRCsjAiFWgQPC3vhVLkTp8bb9Vc",
  "key13": "5KPp6gXJbuPVhftuke94ui8oLHPGSqa5SMyrJqjF25fXeksFcceKgYjiqA91mCG9G9Y9GkxG6edZ8Q2FEuYksTEL",
  "key14": "46vU4cVkES88GDYioy2iC58Y3GbejiJxwXLH7dGtqpLjHDeCetzZQrdg6naQhpc5sPSyssXXrAH4WnbtCN4ANXzC",
  "key15": "4S8uSXxPE8jUC4WVZeFD9qpDknXMoQotUDCt2hTLKH7hgNFYQd8p9qAN6F99ZRaynStPZEf49s3goUHdB8Taem4T",
  "key16": "C8CqBcrRYpaw8X3FgMLdoyXEiEn3U7yc9GKdPJJ69R4T1bTr6wXUhMzSS31yNL1NHAMuxFVW3TSLHJqDP8yBjzQ",
  "key17": "32ZstYUE3ozx5ZxZLJJG4sUmfVi8HHaGSQ8WgK2RWq4PveDzoMKWwjW18ZDUZfKBNmZXzoS4tpd21qaoh3XeesTc",
  "key18": "5Ga8SJvoeAetxebPBrf1ic2UvLp76tH8i58T2scDN7ynmtzeAytuNHiJz7v8PJBED7dMZJ9mXAsQzj7NGZEXuSM9",
  "key19": "5oMZ9uSduwuFXL1NgnbWpMUA2S5oxd7iyab9aiAYPso9ToPm8Td9PP2rVYZsRdMdznKFtTyhk4J5E3dm2z8pMWuC",
  "key20": "38wxU3ipBaPz4nCbu1xFhVWnDkB6Yg2fsBeTytwwJELqmweGxfBHbN3XAA6pi6g8ZCi62tWGjWjYsxVd3JwUXYi8",
  "key21": "5PLGmM9iQGHrwYSPkxuH5Tg2sukgLAWxgtBtKmvwSR3znVtBiBiabTcZBvHv9z8Q4VHmq7ZHTcSyJjhw75aBAYUk",
  "key22": "5JxWvKcNV8qLkxqEzRnyu3q63E9exqByBCpVXAZPPg9G19T49t6RB6aVTjo8uNQbQrrGq6RBCdab7TPB1gRrBiqw",
  "key23": "cdfgPFxMrpD1rszT4N4e5SFyV8apDxjngT2sH1YyeyQchKnfrdWWcyJewJ9vLRUth4QmRQBiA9VjZhBNvfaB8kH",
  "key24": "4JWPQMS2jYjMjA83UzQpsHQKpUPsFndhkZVKqshMvyAeGT7DvhdQCcRXMDxidkAyM76ECx3UZeDkKAaHvKrFpx6P"
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
