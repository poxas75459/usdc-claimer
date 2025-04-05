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
    "4o4czBfqxtvU7XDRG5mYKA2joebPNF74Z3yXsdUj7tZYZH5rP2Hhed1p8qmXqUiKZuhuvkVAWgxZB4rKnaAkehhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41T9mAcpkeaktfevxJ3BSSrXXHDvRKxijx6AMiemN4LVB6L8og1WJ35L7yTjUww33B5E7oqrvCZeZW21FK63c7dx",
  "key1": "zcc4MJRcJJmJfi8drR7qC3trQdX3N73d6tXPoj8awzH7sGamcjDuBQWfH9MSwWcAdsQPZLcSqFvi5YHMMxWaxG3",
  "key2": "49umEkBvd8AeLD5j9BwYHfRmLgWE8tWw5TNaPauMjp3FZDmogBhTKxnkdKBzNDqybRgrRwXK4X6oebmD6mADK2Jx",
  "key3": "252QmEpmKq5RHdoGwQ6itxpDuQfJ4shYXi1ZEduy3M2AhKbVn53rZ8ZFt53CeCv7sWcfU44AHDGy1GmEyEmUxRFa",
  "key4": "2LqYmAENRtiGXMP5sEKJX8i68tjXbMRdyaPHDyHtw3EoqCuMfBVzFBjCLsecM65GFNud9WZGYK1s7gZdvtYYpD8H",
  "key5": "3HSC8fieH1L5Lg56fDW85NhDi91m3eEqSden2LhcReXXqq2y1Q6GuZEhoymBbVA6CUg6ZprrDSQjxfBYrvXzndEd",
  "key6": "5aNzyc5JtL15kmSzhNLpRgDYXeTYeFEJvuVicKnMeFpenDqtBYZuEd8oXdYgUGMMwvpR9vSH7EodJzYVn3cmcGd3",
  "key7": "iaoTeGAmPr7XXxqjsmqjTcNDtK88M3Dy157i4jjgvJDmpGzwPzJYfsp8Mx1EfwtpdZ8iDXTEhd4gzMavsYmm6ts",
  "key8": "39wcaLXaG35KBHEhLLhZ9UnHnVbQeacwVM6Zt9fxEfM3a6ipjvRKU7MkZqpMd41vZJtj7kdwxyYKjy3K7Rd7JVaN",
  "key9": "53ZNhtUBoWtuRwbdQVDLB1oqaw77YNXx2yBpz1cgNv1qqbo9bt5gFTFhcCHZ4gKKw7gTXGFfD8MmNqEd3j2Tv21N",
  "key10": "3LU2cZ7DsY9s42iiRQxpVKyNxwNyoe1q9xjqL4hDXsoMFwgQf9kRU6xrLYvM65EZXep5ftVQvfVGdGtGagtzkAFY",
  "key11": "2NMEGbdPBRCJ3YtR3kJLxrowBXaNaviqjEfbv79LmSe6o5zXT381E13anvaGdqXV8BBrFD4JLUhfc5PSCGK4bL86",
  "key12": "jU1MfxiVvyNNjGJJGDM9mxVNM2LxGamPsfGwVgsdvnfhxMXDiwaHYGUYjCpAn6o3de9tFDHyDUN1Ww11epGHPke",
  "key13": "5toLHik1hdw5VU6P1bqgmwRsnbjZ4CzY4T7waUosZVCLWCYQJDW21Xj2qNn3CbrEsCKHA33Du3h2zAsHR2zwJkVP",
  "key14": "4ibHrxwrFFixk7dUbBLKVsDBdH6otQEacfTK6ryZVDmzSfkNAV295oSnvRRiiNahvYKCVFroawhn47JXPoxYoS4p",
  "key15": "a1L8vmJxiLPWtZ42tQKpLF2ggsW2Ho6kfARQp7yQwUUoFw4JthyzULTb144cMa42xjc34QPPFx76RhF3Jri5tc3",
  "key16": "5ho9w8NDggQ36dAXEcF8S7jZ2a7S1ZgpNHLjtxZHZ8MJMH2FTDvvsD4xRUmLha2me7HYWwdoZ8eGnThdhp8UAwks",
  "key17": "2jhPkt61y3XoNvyd8CNnQYGGo1kMBB713x1yo6jACcWx1B5wo4k5ef8VSbRmrt8dHoeBYx7YCj32Cj9PiybQH2Yw",
  "key18": "3eWbewyQ6HVRhZjSrj6M7EvUD74T6BaXDv4QocABRU9YgCgWN14m6x9f23rHw5DDkrwdT4h6p7MtMm8TcN9YUzHp",
  "key19": "2foAKAoQsyafD13P9bAjxwYa5HHVRMaWT6esbdWizKC1sDF4zU4SJvixdTtSjzSCBnkq9rEyjwQ6fBeDT9Rzhzs8",
  "key20": "5d6uEdwiiiAV6R6TLp6LUTyBsJicsJaEzSUg9LmFpRQ7k7Y78CLznihbdCkYq6aLRD93ACdxrdxjwhQBYz96E1aH",
  "key21": "3tBxAiVmv3J5aJZH5eVcAUPyCmFyZEJjfenVXwyL5t6BQ34nFysNLGEsyRnUcBcocCbZrAUcpgscDNdJfnxgg9ys",
  "key22": "3mJphNgm7UUskrCyUAHUZKcGpAJT2WWnZay2aJfi6DqPvAXQMeKujVMmB7R6tPqdQnssVTcN5VgfLRJErtViREny",
  "key23": "3MgYGufRUDVzPToSSoLg45ELxmdgrA1HMTNxYUDJPMxAKVEF5pW5ugfoyopqBYjAPRngGZ9A15kM7KBHhkLzGEid",
  "key24": "4DRChqzsc3r2w5SDyq7Eura5wEJ94hXBGRbR64Kspk2T3TzzTa2yTHMcRboj7gpoyyinoXLarSFDLyLBGjeyXvrk",
  "key25": "YBFbCB3UkbXo7A9d8pVe3Do9CG2CTtxGhBRXU4YQM7FdtrRFvJ1fUm6A1hMowaz8TiqhevA8qQYqpfYV4k9g1Vw"
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
