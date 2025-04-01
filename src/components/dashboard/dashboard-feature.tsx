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
    "58bQZQpFqs5Mpoix3BpwAJoSdNqh9cEQxERSXhaFkdbVDojxgChFiiqxAwU1NXXUUPswip94fMHdwc8Nx7vessVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RTYpk1VG2yZFbbPE9faTRBdwSbngWmRYQwecr16DruygFNeR9gNfxcWonkTw5PQVSrEaqgCHXmCy4MLFQTR873V",
  "key1": "4W8bFJZwv8qZXueP3DVaWC3T37pHdukVDfghBduFbnYqAQAy3u5qaeHxVKwH1a1nNdZZLcCh54N9C3BM8qgMMhMB",
  "key2": "4ntj73EfMTQbG3YVnLpGCyXNgtG9hkLKGWadLS6cRgn7gpzdHynqsa7CJBxdhn1bKjDvSrzBCmoU8fSnN6vFakKP",
  "key3": "5Hv5zBKpmQS4KJ9PBWv3MemjgXEor7fGpyXVNLJQR24KV3i2oPAhevWsYt6ndR5JtphdotapqH3MVM3EBz1Hy8Ng",
  "key4": "2avQnGXR7GHhLPS86sxaVqzsbbyEZPEq8cNVJhEKnMZkeSajuNhzz9geuJJnzgmfLDGgiV85gQK7889rvZVyRdTS",
  "key5": "2owE5nJ27AKNf3CLyZe12ArwF4Zdr2sPMJLzkV5Ucznz9zv2QKvmYR6CWWTX7qbouYFnMdfwA7Xc6BkF2BrmfdV7",
  "key6": "SLzZREMke5YA5FgL573LKbGh6GUWG79sz8y1RfiRrWMPur9wckuLfgTYGPakdWWm62GeUC88rLZMQeay7zYdQPA",
  "key7": "4MuAJdZpBvxXzbjbz7Dj3DKxR7hWVgkPBPPwT7nHFCRh25uChhZawA6hFSZTWXeZpDzKY3vn9wpj1XaNoXe43r9N",
  "key8": "2bt4PShfRsg6jf3g1NtkfApdrN7dRszMhL8DoutMvxBtPTzd1QvkGjxstpN7u15iqw3PqdttUJeoZvruq9bzUuaP",
  "key9": "5iy1Lo9huvN732iJv1srw6uAN1Y41SN6eXJNPqTBT3CztFEZiqGerdJkHRbVxcuG4SWAKkT22TNaXpWkxqKTYJ9n",
  "key10": "5ySeXsRMJXiiDuv4qiJwkoFfb7r3HvRu7pz7q6Xb991oNQVAG95eHWqbTkp23kVeBpowinjtZ6d49G5vBiP3cjFD",
  "key11": "5H8G79UQTEycP3xL7DJ4i2XZUwB6XCTG8fpptx6sAfLgv3xhwUBmztmxMZWHdF9co3SEFPS9MrQcRX3DV1a8XmQR",
  "key12": "4UMwBTWabd6Gz9qQjYT3VDVQysHd5rFi3XeHyPcyvYPdj8Tve4jhMMTNZgLnK2UL9zTUymDZKLQJjTrn7DyQGAy2",
  "key13": "5g7hnZJGmV4VnztXBrx6Wo7w8yuyP5qj4Cgdv7JWeHCcjyggjEbshgqWwJWEdxPupANKbhoffgx8GQ8MsB1kMyRb",
  "key14": "3xtZwS1aw6ScdCGHEfJgp7evLHW1vkRH6PzrKpG9eWpasyyABTbqLaVdr4QA6TnkLNvDiA5A1Q5dAstiU4Wy5CF4",
  "key15": "4SQBkUKHsZw2BvpiVWxwL3deeyMVZcxSFryPz25sg3pYxyKARdzi13kA4rArmychsqeo8n6jSM6f3tf4iW58zfK5",
  "key16": "2N7ARYBsGcUhDJYqQAXxp5KtJwhteUWrNcc9D9fdD425ECgMzLQUwW7ayoPG4viuoLWuhUPaz9eRcpGydV8G33wn",
  "key17": "21zuCcuCpL69rWgngczGyRuFq3bBBXjGpPvH1ES4jVr24AVhUU1ER1nNvLuDtdw5VjSoYoRunDsxxZ85ZNsPQW4N",
  "key18": "4J4YDg9J8uNu5CsqLKzuXNDALWef7A55RZtRiwqeetrZbH6nxwAvyk9rzoYLYz79MXdMrG6dfi37HUHca39MDSr6",
  "key19": "RJGYcJQaHfqhwDNzUWRUxcuJwjfvNCQN8JEBm3CCX5ZfYQNTKJ91v6oD9VBvKZKcW6jFpWrLgrrgehDAJqV4JNo",
  "key20": "3UhFBTsEhybjTREXuDKoyzumtVbY7JBBs9jPXfSh5MrokK893FS95LRGucUP4z15C1VhjwFCWfFxYgPvH6Zw7zAf",
  "key21": "3eP52FyPNfMkkBTEM87YXT4xhh9VdD3Ttzt9ZnxpSGPNm1voEg1qzgGRnb9tn1aSvE2AdsEH42SFa5Y8hNQQyi3K",
  "key22": "35MkQ1ThK6DbtGa4hT3E5cixY1EB3Kw469LdTkRG19FBaG5anzc9XjRjRZ5dUxxR8PR4REtXSiAXhLQ5ZyuTmx4m",
  "key23": "3io9PNAcmaUT9vsBmC9SURBM2hRQdTVEim1TSoPUxkZmjrwuM8tcKSgiHAKFvx1eqaAj11RRXaYUob9soDBGdq1v",
  "key24": "2F2FykLgwuBHo6xmpxcsqL48o9g3kJBKFoLDJDdAd5qQcBu2DgWLRif6ZUBoGbFHjbanxn2tkZUwQmYCahVG2tpu",
  "key25": "4FuyR5k3CTLk9GCH8dNFoqEgEF8xa3mABFKmmKnMRJov4yPmMmuShJwCAC7B8bh6B2f2PHSj9qM2RiS7xpPv9DZB",
  "key26": "3rCp69a3rgUyJbC6iURHGLg1xJEHmEe3oo3j3cNtzPNCSY7xCDkn53GtjmMgs7ka7XpdN3ZVcMiG4sszHS2amMN4"
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
