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
    "5eRLDwQ7KqVSuMLHDPMbhFnPgqyNxHbefwGtRJLLcyA81RK8Cpp8EKHPh45rbfySzwE2bd4HS3njDtuv1mHMJDb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57D1YL75Xe24u8rjQsMvn4wqryeuhnSbxWFFNqfmE9o7qFbERW6mJhxBGZrUZZS7THeK1qYLxJfnPhX8XMkzkn7J",
  "key1": "4dwG46z4GUZQJXFCfBEzN9gJW9KkefsdnaZn5kAFAG5pBef4BtmDYjuR3tzjgvqKbcvNXcqrBUh3ioRqTiygDq4c",
  "key2": "tjXjreCjeqY3YvEtSQ9x6MaCb3VNHpgUhuvx3VDtZF4qMcKwwsL66qCjRCm1hpzJKVt7SUWSQvrHvZygYJqLMtB",
  "key3": "3YxvV5PZeSmG69vvEnHa2UCTPDkfTC9GMnySAoxc1zxLVwEdY9AL6iMPjT44MtFdZgJo35nE5Xzb6vMT75HqQ2r9",
  "key4": "41oKwHn5ndEASV2YPLKvEHgD1Xp4ucdY77nwjJJUZNC2ae6SQmJc5UZYCFFHgrpCFSXhy2jDmD7zxAk8DSe2uzRY",
  "key5": "2oB1gctwxMm96pF4JZTWqqo9biu3LfafsR8wSXnPRZDKAizGt8SunadcDKZjxHiwg2yfNRHiJDbDaWozbRWwYcfs",
  "key6": "5qnJbRB42aVAJ6fs9RjRbPL7mLQVAG5ZQ2xThToEt1povX29VUw9DmS9A5wzUuvY7wwzuqZmV8AeN1PEwuBAKKaZ",
  "key7": "3gKWEphZUat9obkduZNxuQzPvz92Yp463APUbpXWYxvBAgG5P84J6p7FPDnrMNpbt2JbnToxDiq5fc21w4nwy5r2",
  "key8": "2thW2pBG7PDLstJa666LZAAgbWGQtGDd6TTPfMXBmh4bwyA3KQGDnxEsyGEy1MNsKaDRqJWDx154pio7UHfgout5",
  "key9": "3d6iPjV8eRhC1CMWJmasfc2VD6reHBWcAy3EM2R99MmwVF4tDsVEWf9wQFsw8ginFxwsYHRVZ6vxwPWsqk1scmSs",
  "key10": "57vy2TAExHhk195rqmvWRWzxmwoLMyzgtRaSGCy3qNypUxqWjcakjTprrpZPrHZLSGtmTBZYkLkxdhWd6fHTgGa",
  "key11": "4WYkb3a6nCz2AUe4TeC7Jwgu42bGTgoSyUZuB4mQZTZcbaCcro6Js5Tj65ZQFip6NSMCPLGiKFgrQwouT7sBEEim",
  "key12": "26Y7V7MSeT28TcpyzXDXhAiyVCnuRseVEKK4EY5hf6vj3CqkAhjdPd1gWE1Vpb7HcEbmzPKDaU4ENdwqKmtWu77c",
  "key13": "5amZu9s1QaggR1aCNUvXqKGsnh8L5ms8JsusFoFQZg5keUerNjreZD9RgxBKaqJFrojHbezENkLT5whzrbqMF7Ek",
  "key14": "3K6NUDpV4oChVgW2wXZMet4jSidy7uLAWWmmMdpnSTUqKLESWZMRkg2Fn6CkHNDZD1erQF2yfB62K24mfRAwsz7a",
  "key15": "3WrHaAnYMdwGoY2NRCokqvVkWxi6Ao34MVJJgCPud9p2W9L6RurAb1U4Gz2F8uRf1dVGXxgnk4TwC5KLZZGjJ95A",
  "key16": "33otufUaCWx1QoF1NXXzV8FB2TxtP479wxXH6CRiKy1x4XaSwHhcdrTCYcsnvUH3t5b7kw7hByBRn7bnaTDDAH5v",
  "key17": "4Gdfi6JqxxuFUFTVoCqYF7YZniioGwS4G8C1HsnQPnHNgFav5vJKiZeKgra5bawBEaRkGUW1MYR6EPxNWvKM634U",
  "key18": "4kUoLrtCuJdwyiycEqGnnongSBQ1rzRdrRfWXU4KDKJBx4WSn4UU397gb7Sx4bd7EAAEcFLCsM5u2e3wuXMcmb5Q",
  "key19": "4x3kMaeHTJT5T32G21YdEfrAgenLJ5aaLzmCJVbkRfYi1cNE34EEgoq9bHevxKvLfTjVSSoHMZABYpVhWz6x7Xrr",
  "key20": "67jRtUqbbSq2mqCiqgZXNMtzL6CjKQK7VooJ8Zp4b3xK4PAiSHT7xUT8cZy5d8uP5RA94Yt5HS3FG9iDACMdBTvd",
  "key21": "3wmdVM9egZbV6ApZcqGTQk7haQrGau1P2L5yDYVGKPkinX44v8G7RVk8GzpurgbyXnRVgmSEAXgnEsKAgKMSW8do",
  "key22": "UF2M3NkyYUAAR8Ek1PTTu5wLDGJsowjWTr2jEVsArXso7x66QAoJE81oXnSfxLpch3Qup9ZdsUR9tHeiUrEQ9Pq",
  "key23": "52muXvRfL3UDdhffRxfJxaEHCQ7XWTgpZGMqucjSgJD2EnsV3Ffu9VEumUV1XDWZjrwWTx7GLSXzqx6unwcUeTo7",
  "key24": "5VSQ3MZ5VPpbngDAy4uqFDjTTBzQnKhomwxnH8JvXYVi6iaPCNZE2N2imPbic8kjE9nJTVE6VQY8dXX4UjeydMSG",
  "key25": "2VXcXsJjMC74KioPwGjFLhVEe7Hw78J23Wb2edwbRWRoscEnLxHTyGxNUeYpj48YFYSjUijZgsiB9AJhUbMnQk1p"
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
