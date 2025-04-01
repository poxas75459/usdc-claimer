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
    "2NxYNxmvQMDcZvPQHNHa8CMXmG7xCb1NFs9n2wJWNY9YDaUeV6NCfbsaePTXbZRVUi2n45jdNBPqcoSVkBhCCaSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "siL3osgpSDwSAbV4xuq73QMhSFu3odoe76HNsiGZg6oSN1nNWH2VXc4Eco7N2s6c6K1Rr62zepfxbyfWPjJCneQ",
  "key1": "jx5JbciNACn1npdfpJdT1dUc9NnKsbgu6EYcfkGCfmuTnzVzLncvDajFhTA8xpQADYcJXyKnuB9EvcktkRqQQRd",
  "key2": "3vHExrQuGxbE2ccUkdx4B5eCbYUwCSNu4VQvyx5vEWv986XY7G7oN81EW8SzBJUoBZADPbDyoB7V25owzvGVMK8s",
  "key3": "4j9QDdSt8Dy7Bu4wTMdZTpBbuoLLttHYEc4chHajzKnPqr5uvmnZruGHq36ZmRuL59w4DocLoo34ysxVPK8j9vrs",
  "key4": "31sPYa1UcVeABjrxr5byUrB4PJLRWXHDaFg7xTaV8Yz4RiFEq6Y8fCi3YQiGZXrgRb2ESwaxvSVuA1oZ9iC4iFiJ",
  "key5": "ktMFWh1rHQf423fuM7jn8vviFhVgXXQzdFAKDL8pBDCPWBJJmqkG7QZHUU1Mk2TfUgG2XBwPSf9yuaPhpYSh8bj",
  "key6": "4GW7CKSD6Ee25kLJ4Spdj4LHBFLoB1GJo65vmARSECHn47EveH8HVwnckuKd7RoyBvMyX9fQiW8Jrcwa5NfaXSPj",
  "key7": "4VdRuXmmS2fsayybCJuVdEH1xw4Sy2warfvjaaBi7XbuowvaavPTRihuaiymUYpbgGg5caUBcrV4U78vMyWtShnb",
  "key8": "4gMXvERiaWq8K1z13e95UY6W7BSf9dvSjFQpRMxSAC1Kax2GmkdSpNvP8h7nq4QncnZhX3iJHwCUmReJxLyz9RJE",
  "key9": "59zQFguunP9LPLLh9kWJzPb1GYaNxJCp2o69tM383dih5mDLGTQueX9pZsJ36qqHX6WKRYsJExdfoR3wHLtZh5mZ",
  "key10": "5oxontEA2irKxQoiby14G512bgAe5Hjx5vLcUx8DXeHkVPpST1VC5sqcX6GibsfgMwYPx2w8sC5kZwHMRjmCnqie",
  "key11": "3Ht6tsNCcFfcnk1y93eSH236tCK1jzR82UXA3nRd9jBDt9YpVCBJgN22s8FodTk6xj4TezuyjyYBo529uJLcDHNX",
  "key12": "5rL862LQgMZpcB4g9n9YTFGBwdbkxQUtvJQvQ4ypwndidZ6CtV6EmGxLpMthFNF8Lsi7EwsHJuHBFeGV4shx9cbN",
  "key13": "4KTpTdiRcmY2TnaS7rxggghaFcYme4B3pMpXjphGzgUP1cxqq3t3diVdX8TucSnshZ9zLRbHgvZeXPbyR2rk1mz8",
  "key14": "oZxKgg5cPVK4fReTHDWtDfpsuy6kAurTAD9V7NRrWcQxqFMZFHbdy3MkKrSyhesc6K6rUMudbqeHre1cmgPh7vL",
  "key15": "36dEaLJNG6phgVPkGeG5oLbPdqrhf1V8mAuy3u8epk7MsDBM3mY6nxwBLruQk7Mbf6T2aTgt6rmK5w3qGWLmqGv3",
  "key16": "5tUE7m4UBickeGWhQjSkZeHKSQXJQCZpeK1YvXoAapcujmQAmMzgimXDh3hQHmdChKy8byCAMDHNeprDZcPbMwmk",
  "key17": "5VrXxS23uqcpgAfRDo8iyWdb4VeahhU7dw3REkRNGnZnzeAR5piVRkkgJH89aes8bAcWHpbzJSWfKfCiQBnXWieo",
  "key18": "3yeuGR6KcrEqPrGS7CvHUczpvCcYP9KcLpdwJRDJ2LdGBoQ9JHxhxtewsYnt55HAwWBRXhiEe2WHTBBERW3Aehh1",
  "key19": "2M75oQWtt2yH2RyvPLU8prhAFCKZMQxz8AzoA3wh82dCZsL8tATDgA8MEth7ZxLAJ6thiXBHYajXHUULYMxUFWtv",
  "key20": "3A8ocCAMQ4yYxtt21tTiRXdbwWi7S9E7ULTtTgRC7AHRmgUZmHQjrxaSJv1nzNMLTCwiwZmxVL1zQ9ZtnspEmZRx",
  "key21": "461MoB6Fu6ptMWUjqcxZRWF5gwQ8HaMWkH8FJeZUjwLu8npFc6nc9WdV5mTxeKdRnMw77k3yh91LLLQRRaee24Ff",
  "key22": "NpAyt9UT1hQZaJbWytxVRrsdzfmSzYnnAiFhwLUueFEForNyJ9Rfvrf4XrFKcU3XY7sd9d5thAhvwQWjgFch1B4",
  "key23": "3n7sqB7dVmjuh7Kf7jBsVkbJQt2EiCweUg7WNcdWpGeJiNtM8SPRmAp3qD6C9UZV15hrWECfAJKuKArGo3KMjFAS",
  "key24": "3Rr5ubESHUdXVbYDSCiBkrCZGXdkMYedukqNbPuPN9iFvF3hTmBPBQEHVWQnWAKeiwAC5T2L1BcdKupDdX4AD8Wu",
  "key25": "5L7FeWP6N1uQ2J9xXp3SjQYnH4eeMB9C9CRDXVME8KZPMDvC69B2QsvDYohqwxo1FyNRQ2nJkLKg6PXGnLLaMg3P",
  "key26": "3CiSRUHfuSuW9KYrp6T7iPCgPczWksHkMP6TQxdR9oeB2cdM1yEYzCgtLxWGLygvQY55PEJNX8xr4s9pch1HNtNz",
  "key27": "54ukNsQ8Zn1EaEoGYHEw1MfyUmwNx1Usg3G3NFhNWRS2EMYFb6gWyF3PeHzt52YmZhcerZCUBVGG4UdApvP2XryL",
  "key28": "5u8GiFZofy6YhqhnA7vwBxT4dpd4u3aoa6ZQf7nqyFBcTEkArnGzWACbrJsqzpa3mKAWv9okAD9bkp6DeR9arBdc"
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
