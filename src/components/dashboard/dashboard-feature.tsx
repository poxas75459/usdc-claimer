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
    "jjDHA7B4YC9kfsGqZXjPU6E4gx4LEzacz41ZBJHKKHRjtYzqZJCFLSfZQJJQiqSH6Ge85q6Y97exSwgHQgSvrET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65KSPKboDM8kr2hxjAnH1T4xuy6kZbKCxGYpyHbBzBt6KeYMEF9wf2EDk7Mprx9FMr73yN78JNeQP4SavdptyzuP",
  "key1": "JJmTmvk57yNu5sa5mJJbEe2bBuGyQ4NUJDVGm3DYKwjTdD58bypRfYY7HC6b5fkcRZhUTaeCY2fUJnkc64A395u",
  "key2": "5Czd2M8mXoGtAk5yoaSp8KNxrStd3ePkcM8GaopHZySzsrmKQK2mXJxHhMpht3KHXUrjTpx2QfgaRMT3z2EDhwSU",
  "key3": "2dmTGJWta7FPrA1fwc5NGitimYfTuDaZ5PiaH8eYwy2AzQC6eHFhQSgZz59GsHJq8XDaC86TqS3HMHNi3h4rYG7G",
  "key4": "3Sdoz5jBtnHmfnYDjPnRvLYrb2W9WVVeqGQSNNtQRDUDzq6RWEGMFMFFf9gAjWJeYAff6E7J72o8csiPRkwHmAhC",
  "key5": "8BGGtSfaXVk19eAvo6tuTiVfz57CWogzNXc8fA7YuRd4KJfrx2bcVB2ED5ALE2bBSjFp8tUAvDhKYWoYjPhbeYR",
  "key6": "24a8xPkdvfeiYm7QF4s4q1wW7FhsqzYZkCsEii2KqjjeMDhE5FBX3XittPw4bQczrRG8RLkGuFwWNDaP4wswLJx4",
  "key7": "2qJJy7FYvvn2saH65TzckMGQp9cdCjd262GFEogTGeZznG8KuWchcQmcNQVGxrfVXNjJFUGUFCJzJiuNjpQaQAiV",
  "key8": "3LUmNACSwTMU2Y8Cxs6Z2t66cNBjGASr8fh8YtNyaM5LCb4bHekpZdiAk6C31AwqB2vnNRj3WbzEEkVyYF8nUsgG",
  "key9": "AqJ5LMUV4fqu4T6fdU2657GHT2PNhmG1Bf6LPDB48GD4x4xa5nbLxvJ8tsDtaWTbnKWnm4rLd3EPK39qPQ7JB6M",
  "key10": "5rVNx6wkevwPtpfztQ6n7drPvm3jAuAkvZGFGKJJGXfAsmDGycL5L7ssWmvFHW2LQ9Jm1i78CNj9rNbAy2Q11Urh",
  "key11": "4gpL7FMeLGaT9KPCxdDyLng7pg8JSvbSnRbHxhLBUK2DpuTjNGpFPxXwpdnNkR7M9tFetX3nKzJo1QBZshEwXGju",
  "key12": "5eSBhW7Vq9tp1Dhep1pZgVoYvmiM8h1BMXL3sAfWRezEzB1PdR1jtLKkqLPpUMsFc3CuWFvbEdGiAtvuiYBbTr87",
  "key13": "3kVN47seuATBBCBgivxBmgDR1mmxK9UW21aH7mu7fVmoCscM82BecFyjrCLVCPSEWm93JdV7UGXMbdYzBJXBh3eA",
  "key14": "3pPHgRyE9FjrMhT6swFeMNoaFjCtf7tDHdpBARasvhe2mPQVCKZRAAPio5rMWmaDFuXpZbWH6wf7smbDyCeCH771",
  "key15": "2DbKS3WbCZrrqjQ67hpFc5nXaEQaEQh5c8BU2cmSBPp7bNDsUYBmSg1P6BLuufVW3egbpgo6j4bzdHjTeFb7pQWP",
  "key16": "4U3eJtN7iB4N9XLWFusWJ3SKFzXKG93J8aHgtdbHs6tkH2Qu72sVWZTpe1JqsDx3KvQHEMUj1ivixpAumeQeN71E",
  "key17": "5arDGVgkWjGvPuTGSHK7EuV5t9NfButSXGctMaLiAvJ9cKW4ynUuWqf6chpkwLLsu4necCYBEQSpBFntjGtzpjo4",
  "key18": "LbLqsm36CssLXr57gq64Ss3E8ME1XwCzHN2zN6Riy7o9ExQXAGQUdG1Eiku7gMubhTq5fLkW3p72ythjoSCJwmm",
  "key19": "2mTFeQGPgX1Qsz8XnCiMGNdcPEw2i69t1WaNAak4wFEh6jc3y9huwhkq9xasdTMZaTfW3NzWQKNzc41BXVdVQ2ih",
  "key20": "2ECizY6PnnerL1B2Yvi4t1XjB1bR822Rsy9jc7zAqDG2WrqygrTbt1YcCPUXS12RjguuLBzmUPp2gygEziUdtJs9",
  "key21": "2zvLiBe8ngCbcty1JQtiD6K9zM6o45wpsDjESBiYeEGGD8hAxgr9irAEJawPSTAtn2KCwoegyHFgsvVfhYVq6MEC",
  "key22": "4ajsRYJKJJFNpA8ZFWwawH6T5dq4AMoQgLS74L7dajSixNkgZyHKSd6726GKFS6mXHP6pNxjerrvVorWdN27LgtV",
  "key23": "sM7VThJQtkVJLRrksDdAfWJcFqEFD9TeAVDejC3ujZY4x8QqxFejDduHf7EmQwFe3ewNrjCiArSDqi1XAm1thYX",
  "key24": "42RH3TE9eFpjJJqfGbkDxGmK3ahwr5bxTGKvGygWmtRa2FwhxbxSoko8HdpDycs45W3WU1eEb2o6FpUVKYFTvv62"
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
