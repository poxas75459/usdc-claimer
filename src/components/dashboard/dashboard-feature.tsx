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
    "57KGMHBrYtyDKC6h7QGDWTBNUGSQ4hi9WzAzK9sgpiwtKX12z3NRUtCXwPWpjrsUvfP9VfaGUePHRsZfwyMUfjfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UHSVFGD4dFHBsgRbTvGU9NkP66Z1MCo8uC9MPAcQozFLhPoo5uPaWozajBFnonz5JoobZVgtCUHSiDkqsVDPykc",
  "key1": "3JGQuK5corvGgfoHrCJCZCXhzmYgPWv2mRcNBv3kcWz4dqp8cQ8Twyh83bwQFdhn3L9kKUYxQHzXNM29onCyjf8c",
  "key2": "3yP7tAfKVFwovj4QzjstVPdBJL4VzXjpgyp1vTVX8x9Jm4pVNkxavKqcjY7aNkdRjfYywc9bn384ysDvfntK8rMR",
  "key3": "4L3sBmv1EXyTzNzfyxRuNsPTmfgWMcpiy7N6nqT1NT5QYv6GYiMPEJPvxhWrXjhCgsQAH4iTmj91smx2jRHB8nDn",
  "key4": "2ofdQzgAxfVVqMzrhUk3Vu3HvSUuHb7zNtJqhvrgMy8P1dEHRVGqavPxFwLG7YSGUv4z61W8QavMjQHspUHotMNT",
  "key5": "4L7Qakwo4rmZM6FZeoP3vxijCFNTjfgKG9botabPsKHW4Q5vfdG64NEMSpovTGbotLtxcsjpdCCxNt3BTwDKxMhu",
  "key6": "4XwCbtLQ6wXrRSMcH2JgebZ1PCToZjGdP67k76W3y3KHtPTEr2Vs7QjUywWMSV3FVngiHsqarKiLwkCJ4RTuNhs",
  "key7": "4rad3fCfi3QbkmaiP3vUkK3Xcfsxjhxofn1FQmN61USWyyTo2b6AAQwNEKw1YvWbubYRqWQwnQNWSXu1agg8YYd7",
  "key8": "4TnQiss3YFXh36kGriiL9SkxcqbNJciUP5ZxHUqwCiGU8RKtsuWajZV2qsdL9xxPq9aqZru1XRqZZvCWx7j7iq4U",
  "key9": "3pxBbCxVR68EGD772evSZKN1MPxC935yQEzshLKRbAMt5Vk8krZKdrpidjyMaMNQN3bpVVUMVvk3hG3mzL9UqXfV",
  "key10": "5EgwaDh8KrKK1ppQTtYfEstQEaDkqSXjSngYGBFBQcgx74XnsWYuNA6AzAkG2ca473zv7RJoVkAsoHNCUivdNrR7",
  "key11": "3JFH2MxToGsqEfYJP8jhg1tgE1gLpFSMfNiQY9MNUgZRKDnyoeNQyy9frxqNCxTe1rjy7mT234T1NfZBtkmeLmgn",
  "key12": "5d5KqZKqih95yRbQEh1mZBwGyJEQQmAMDXX91hE3Hs9f59JQSn3SC3k94n3C3J4WujfFiyFqQZqNerp8VqwGSjGe",
  "key13": "2PdzpuPktgiBD5snZe9hMFzM1FjQ8v9HznPRERxgis5Z8duAgmSDAiQhyZew8Y5Kuc1gMTMGeN2iEAFryMQze5DH",
  "key14": "4sExGs2iH2YHmRNUjvFWtgLuPAzmMh4rp7rNhjAFgYBi1EzNMDAejo6QRUMCJNyrCzzpRrNHbLBBXwmL6UB25WkZ",
  "key15": "5ew4k6RRcBAtWbm8usqECUWfJnkDKmCz5xdPjGBYpkYiZsZYQ1zeh8QQPu32YWz1mjrMz2peR6Csn16oEKUSqUL6",
  "key16": "24wvyAy6Cbt1A8fxq5uYPJTYHzKKuD2WAxNStbZBagc3xvA46GAtxZcK4kKuSwrNL2YUju8FnqV8t56aWKWEkxCu",
  "key17": "39m1UgXNYkc7VdNaN4C9oLFbb7DPzUtwLR9VcXz74Qnv2PwQCvdiCNBLuzPCHJJ8PmgD3rbxHMBD7XR53r6uURJU",
  "key18": "3eg9zjaAD8oHFcVovbRYUfaRW8tNZbskHHkYrTQdP4NxSew8RZ2GxtFTvHEBM1867Aw7CtcGpZSqTBa9reMFr6mX",
  "key19": "4vwtRLZKuKzczNVjkiseC8beGbb7iR2T3MccmSC4V5deLaNAsiwbk2XWsCX8zCMfStAQzRTPnyYzAEXk6M7TcQ4a",
  "key20": "4oGXU3QxGkMzwGX4EA2ySVZPyVtHsSMfKPfcRGRiW1a1bq4V1vy4PnAkZf9ijNLBwbHe5euQakoASdGk2j3rRB7k",
  "key21": "3mRKcgb9jiGkReDvo7qyVy2Jm5ZRRjz51WwRfV4RrYP4igKjiPg55fYBHb6yqcGsP4XPUjGM51BcY5EMpCsbwu5W",
  "key22": "5XbM8bPZ1Yj5puDT4Dt2UipAFb1X93z6DUvWAJSC27GFsHQehWKq2DQUvBgpdVZDLWCqtSSSchV5M66yNzQAm4Uu",
  "key23": "5zUZqVK5XBG7zmmq7BRgdEa2fcsKcgqtPQdgyLrqbp8J3rSkRCjH6hqubttzpVtimUahSKxvWYDfobGStHDSyDQL",
  "key24": "VS6Un7ogDZLmhi7qqqebFb3bzAwdbbUiLDNkqtrus2Yb3HsSmmMjz3PKjkYBn6HTJCgcNP23kg8KKTdheYgoeEi",
  "key25": "3U8BsmT3JVJV75gS7pqneX5QTLxZ9AhHnrsT3WLmFqpQG9Kdb9nmNjAGdgBmmXGafwkTWWj1bhuaxpa2wRwXWdV4"
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
