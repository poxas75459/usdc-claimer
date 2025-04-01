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
    "36bZDCriXJ7QgWGL15AEu4ZQxmk8HjszcnpuyvouocFw71iu7s9WB8mwLCLG4bcM2TMFWU7oPs54thUf77C5coCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FhA4SpRbMLon3mnpqrcuH8bT2wT8gQPzqVuK2ZqExqLczJgU8NjhDxoyPRZR9aS5eEw8FbMwxngwa7TBXTrCfaS",
  "key1": "4dqA7QkruVU7EoLbYFDQ56v7EGXtuNXgtKF9Vvp7ENnD7X91JCqmDnJiWdt8xP72gcGCEtKBEcpNq9GTnXHfVcC8",
  "key2": "2WdLiTR7zxnvcoibSZxpN4w4oJNBnC8n3PEtvP4waF1yCneVJas1G4Bc2DLiQNKfYt39ZyY779RKugcYMQzkz4he",
  "key3": "2Dh7KP99zg3fdRDpX7RQcrXG25LWkPgiTgRDGJ4SqDvgi7mv9nCLLX7SWUx4ERw37mug16keRBYq1jWoXq37ocZ9",
  "key4": "3232c8jEkyQPAKcou12cNMShoCwUAFtrsQHyVvNxKwBhvLjoaV5YcDRaBfeYtrnWSv25bG1y3jqZJbkfJPZpt3XM",
  "key5": "xrRhp7mXYvrAMDUNHwcu2WfyULcQNC65eGKHxisyfD1p8cagoWQHG5ELi7qXF8HHfFkaktXpnUG2QEGC1xKEZR5",
  "key6": "2x1TxRbg9EziYiHy3kGcck8cDgnvteEE2r9rkn8Y42CGrUmX3QPBynZMhiC99h7Bh6Y8STCRuapKgWdN8X2QcWyM",
  "key7": "5UuCmGWrMks1LtLMbuJX95axRxi4eBUKZPYM7PogZedARBBJmqz83gMZkEr7Dv9ECkkMxLwheLsLJiW6aWYqfukz",
  "key8": "39kBTnfoeLs3XQmoZ4vYDNpv8U3rwpbcbPA1HHRDXav9BaSG9VqLqFqzJJbSUBEBgGfkCPafMqqxwKWWet5nZtg7",
  "key9": "3GFmxVV8DD3ZJZnX57ECU9Ni43WAK7ghNzpsi4NeKv7BHHDkDF6nKqtQKcY6DKSk7kA2o8DRTV4HGfR3dAXbv9fy",
  "key10": "GULUNu3yU86HrvSBh2V93bbcnGWmoJRY3Uf6BFV9Y1vEVqUWJp2G9j8yUE1qT7hDTKaa98ic8BzGTkbCLcvX7df",
  "key11": "4PgQs4oJLuBeRsDFskvmkSxjZUzBc5EQtKrwKgJwNxXAHmYwpEebcADDjRP6j818Ynk3WrG9uFSD7KbNBPyKeSaL",
  "key12": "3r9ingEgfVc18MJaRofAq3K2JjQU5ECrw8omQvUSPfPPG17Kaz7eejEunrM3uU6tt7cVbEtJhm6wvGYu8FH9P2Tn",
  "key13": "4eA3zhhmy2rX26pdCxcr3RZ7k4VWjgDUxv7vZxMiGJAEFFYhADsYmdwqbUxog1UwHzWk9X6FVXSfa1YXFBgHQire",
  "key14": "2zKsUzzEWAYkboYCsPQLJsWvnuRkWxabRuybPkuwb5riSC1WyUJv7d5gP2tN19obMX3dZDDDbFjSRjEHh8uXSpGP",
  "key15": "52CSa6ws6u4BtKQbsrP7ag7ec1JLArVmsb219gJ9UTcVb58pfW6zyA1FxYa61wDGVaaSxZYpz2fWYq8q9i6Ln3Q4",
  "key16": "5185oPjNaLzmbfrYsHbpFJMwq93eoNy46JHfpqFgLzW53qvPB7whefbKGCSQ7ZGSm9gwZodMJgHb6f8zoM5WAfLA",
  "key17": "3MNLGqVEEcThTRMXszWG6yjwCD7PjCJeRUTijbe5yLTg9iA2XNjdBVdu2siZeMdu664TFnC3wgRDuAFboTpHABn5",
  "key18": "5TCCHXM3nzA7tPeekY9s6rKoETJBFj7Wb9vMaQtCKqsQE1Q5bTG1XACgHUzP3UaeM7GSR7Ni4ihjveaWmruVmtpv",
  "key19": "3iidg5yFL8KxVvxk4hVG8dnjP8853ugw2FCmS4AyeqzvRtCXbPFSZtxJgkBKJz3gKii5zd9fajpJ4DjWG7VZArqY",
  "key20": "59jwD2tjyYBBHqPDysNmYPdjuZUefzDjFWw8SFK583GTRQnauTH8w7LmFV6E2ZybDsXJfXeJR74S3jHw5S9dyaeJ",
  "key21": "3B96mhVWJcGVbcjKdAQDwDnfXegVmPFkpz2gSxwe8vJiEnS6nzaviGYo9Af1887e5vprwKDuCQEefHvv7MpTi4T2",
  "key22": "AjcvtT7gHBPtJeHVk7NdpTpGUPkdd2rDMFdCKpukBbHbi8Z4mP8Fpx8tKT3LXqmnymeRwiHW7YjUy6MKbS3AwFx",
  "key23": "5LSRpEJf8PbxzxWaKhuU9bjngGnKGvkJTjD9Wzj1CMxMfbHeUZ3EgD6KAuRgv4iMwDz7kythotRctwvqhBkbwU3C",
  "key24": "2uaXrEYT8ubyDwHNAANVzDWPB7wa1keXSndawpfLzSko7c7jjhJyCfSfcrgbsbjb796b7F9Je7cmswb7hNKPSSMz"
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
