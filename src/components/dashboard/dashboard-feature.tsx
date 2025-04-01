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
    "5F9CypNeoWSw2UT2juqXBorYchfvAMHcRaVNU1xh3XGLhyspWKqWEB5GxkYNNdRACyMp3wpKeE3zZTpkmXQQairu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3snhqD13KDCXwWidfouiiAMng3ZNiihmcYpB2sXFZDyTKrn7dQjussZEKVogS8cJ4VJnCAvKBqMrXm5xwTFx1nqD",
  "key1": "3tMRqN2S3E9ZFGt4QoZ4ons91U8J8Fesed16P9WqmnDDr56Ak8p6KxDkx2FvJbFoYR6GRY6PfsdiJmKRQxyUUDai",
  "key2": "4iWz6KSeTHx5cUnE8kmHYLNM8965UZ3gR5ZT4ZjLuLpGY9DsEcVS3Qzhtarx1PFzjaEz7yhaYoxJhyoF7enigUXK",
  "key3": "5bFJvh6Z64SkLx5iQKASgVMXPr8h7A3CtNMHbL348Ue2HEHZjWeXsEKmkv1ZCSzktTukG1f4Kun4ypF3HBEv9XFM",
  "key4": "5VDvtnFV2MXX6GVjweGmKqB8KXiWKiRnqJN6nAUDZqw5k3RMTKypzUDoDdjL1SfKxvoopGNxttp2rzkhXjpg7f6H",
  "key5": "Zi2qsN9rvuJJ1B7MhAZ5TGmoAZbFeRd52RTYgX5fYj9Pe4C37NCKxmYJJxANqN6ZeqbdFRCBaZGbLYK2NjJwihU",
  "key6": "EzZj1ELeB16gNcNjaiKCVmteWJuECvheD74kpG58oaeasqfNLrrjBYndTX3E5tohtn8igoFXw8cUJ2HcK1UnWQb",
  "key7": "ZHuNh7F5LSzfSurZR7sxfgQjAjfPKQwWgMhJouUHFm87uGNNbZrEm7dpUwzeofhV9L5rxs5LQmmMfhNE1mQ48ES",
  "key8": "rKr1hHyETv8g9hHANVeuV2LG3hqkeawBCz8hUwQDdSpNNC8w7RxfZZzdLiHR5r2FHy7sAFKVxR3NSxW3fwnuooY",
  "key9": "2c6aAT6KXKcGJNWSFDjDPVcoWncFrYnKMprf8NHQd2WZz1LYExyyFtWKntRDcU5kNA3i4hkbYEvYZL2P5YVoj79d",
  "key10": "5wjP56vFKDWm1oTebJf32Akmjqcd9ER5LW3MgvxsFPDvG28HSbmU5tNgCDsFbeQEEqeRmm7E7jmxzC1VNgE4QvwK",
  "key11": "3P2gGQJPpe1KboBHVkr88ufZVwyQmeiudLLxqMjiXhv3asNUvxPaQoMv7XFBDchL3zBhe3vEpJeU273f94Xzs9TL",
  "key12": "3Z7ayo1hsQiNZQhZwhnxZ1Sqpdhga6Du2C9yhUjLUYxafjGa8T7dCTcf4qjVXYYmjjpZDUMBhBxqaJenS4NmWBKR",
  "key13": "2f9kvwsn4LA4xTZX42RA16FQJaihrFAxjxbCG3Lyacj3DNTqmEnpxsEHVoVR5C8fwrfry155bkG8S6GRBDgLqc8i",
  "key14": "5cUQYq2Uyw5gCKh2dRGmwcevTZVMTxRF1GHYAmJcaW9B6SuMwswCsrfH3hCQCStRTQeAHLCpkieyYGKSb4xTBdHZ",
  "key15": "3NE96E3eM8azVkJF4eXVJpSyyTvRPzo5SpuGtwSRqFgM6SvbkhvtH57qe15X4hks9FwaPapqK9h8Z9b1ZUHx7wMV",
  "key16": "56qDbdkBoCDv2835yf9EnyiCWJtwR2vpbdF8b5pyCv2KeE9HQ1hVta7Ygr5NZePb278ooLbvwha14KqmeAMSnobR",
  "key17": "4RrvMtFFRpeQmu6zbcj1robPLx89VsgNcSyfXz4SCEYZJDxn3tAPuDfqpfS5kmTkSrB3KeUE16QtKoVe1jTH3zpQ",
  "key18": "4zrre6TeNnj4d4Drqz7TKroohE1RNdC4w74cM9LwuKxPXNdA4u7Cvd7vM1LdAaFaKFyWTaGX6EVwXz6G4buC8doc",
  "key19": "4Ge9CPnqXGU4fMNLAeiaQ5MdU1umWzgGhUvW3wDyubjZRChThkX3JRmmxiP73JDRpmV5UnBqzUafswoFiCDWU7fD",
  "key20": "wXtqAn2RCvHRzhDnhF9QvXGnKXFb4zfiJNKRC1EtbbDpsSsVMadxWqZYzWRcpRxyPVmA9Rf16ehcQUYubh8xGpP",
  "key21": "5ihDxg89mmSuWQPjkQ3UKA15cxq7q8cZBF95msUqs2mn5mxbjq13JntLbvybow513UHTCidjjirrWSjbJ7JDfKjW",
  "key22": "2y3mqQeu8QyhJ6ztrafiJAiQCu3qeVMHyDSYkZqwZAWpa5EmaVFNFXmDb5MRfh4f1H3VR3JgmMvo8knZCphMPzZx",
  "key23": "4n4a33QvqDxwam5RQRNPr6gvA96ti74kUhJdBKjnCoobmcMSNr9XhtsMHTMLriE36H4K3zNbqeJZnkNgLQ6DzzkG",
  "key24": "45uQM9xDqCcCNXAMcFf1rEjbt4e9taJAN5dteHRbuDSYRysUSn5hFuEu8z9AgiHL4gNCvf32HcowaesobzEkmoLr",
  "key25": "2fAwjngmRd1N1dnvmjacMzs9dakBdQPZCin14hYsLgCWCUXufkzM59YAtN5qbeeLeoNwCYZDJCBwRkXiEWAuDmbg"
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
