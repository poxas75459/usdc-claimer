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
    "3sZ38fxsFiL8wpdmruVhA5P4AwaS32B5rABwvm86PiqqMKPot7JPzuWYWuZiczFSbbr1q2h5bXTF41tDCgzQRz2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mGHsDwYgk5cFQV87xvx19frhMjFQ8sFDA7cLmSTzkX84cYyuMqJMbNsjgnEpHuTgPxvmmbR4NW8NmwbGjpDbu3n",
  "key1": "5Gk2DVrK3aUXtSeLKm2vVbMKsK8aXk1Q9KTYEyCjR3HMYQfPSSdVt8cCv2vL5TBUUcdbc18vz7cy6CfCTEJYdXEx",
  "key2": "3MHHD962XbXUnMQ3m9sUjztNxtHKNKPGFqWbmm86cqCP1PoVzJZqbvkCiNAVBuJ6jt2vUhMFaTppwfNfp2wKsYMx",
  "key3": "629x1dDEZqdtAPzaPEjBNXHrUAhy7v4FZXvoQxvuTwiRieira3jNJBEhtD2pwncZiHW4brTYpEEVWSVzkyDB57ZB",
  "key4": "4WE3hZrGg8DAra7p7uYeJX3ppPwHCDLnrH3a4ZtDaSY2XaZzKKrURJM96i8QiFBH4e5wbFoEXQWkNmztDj8VXFGT",
  "key5": "twPNGkXmhLWxKstDNC3zoXv2prJoqNhkNBNc7cdrrK1JPsbV1xD5V4MNpwj7ijtSR8QZfzfLmrhtKWDn9xER4Xw",
  "key6": "3Ehgh6oVkbVZ5kyTWZaRN6C7WjQavGUdGoxHoGi97ydbRAREStnU3fV5vgej7RMUyibp2PwEreHjFgR7yK9Bdhw4",
  "key7": "5Ge7ioWudeeYDryavoLDSyomFSGWvUKUwyPW5RnixAYAi1wEcE5dWHMqnKhuEaAQhXHAeLqwwVA4jG2P2MKV6Q2R",
  "key8": "5nLBZdDqJzGamHPZ4U1mUoTwtsQiZaRAeJ1d1izkSfugydDbgjy355MxBaxDpx7gezK6iHswUmm5GUXKkJd4sWio",
  "key9": "5Cg88GHk8fWjJh6HnVXUzcr1qGhYq2WZPLxZcZb1zTKDbjkoC1Rb7iv6PQMMtnvSJmL1HqWK5yrtgPWXmQir3Bc1",
  "key10": "5NzMcDjHjJ8MuyddRRwNACXe5BYnrw4B8XnysxfKhx7ZxjHCoWULRLoRbAYBsi44sBuG5fDCWE6qbGrnJWUunw5y",
  "key11": "4Ct8XGhHmAqvFsHaEvGQFrfwMr5f8TdDuBjGhBXVbkjFnXY5mvCgRFzJNoZKmsdzotq4je2fjLvhJa5MfuymiUDB",
  "key12": "5oPB8QQa2AG6oTPVk6uyFjYAc6aAPW57gDYuMDz77xBEmLXVJj6rtrJK3RkeRgxpQhxpNxWDxfLWcdU5o1BwdPAE",
  "key13": "2yNBegLfnCCJL1zuRvEgddhPHudFnHzYfzhBBTsawc7yvkKd5yQ99A6oRH6aHtM3fxkvvUP91spUEnzd7bDbpsNQ",
  "key14": "4H9fmUdaWmfZEZbYbKYsF7QPMS6VeTugkPjvw7FqhF3KubjNZe27PGej5MSyD4QADJndFDgbTcWa66Hbp12VX2jk",
  "key15": "3yMMZSS4Bosfkkwk1UTNjYP9HhyYDEZwWtVh234gxZ6jUBa1enqqVMJFL3HeLPE8BbR7vMNMHBaNp39WMHYYaitc",
  "key16": "5jRszomsmNtaWjb5E4RMvNLhZpuWyako1SZEdWBqbHyxNnPikqSfScd3aQhSv9JiH5oSk1rRPJKFSNqFaem1eZJx",
  "key17": "9d92BdmCfSwTdukv3zy3L2U88f33xkQXgm639eGJcSg8hSKb6ywQs4G3baD6tE3njdsnaLK3qVF4Nsj9o7tKiHu",
  "key18": "x7KtxvUfM1Vc9B4uoKsPMXTF6FQDGAwVvtWje8AFSzmDxVmX3uRzZiqModkHF97j4b8qBkexUucHZmdxGmRiQSU",
  "key19": "51XfzSg1VBodnUfduA3aoakLEY26wuXnmV2dZ73nwJhm83ht7LYMjHFqTeYhYSVtfHWyQfWYiJCpiM6Wd69Qkwx9",
  "key20": "5yWjZs9UYyvxK5wtGAs8GxA51QfQUA6fjJ5Wek4LeMoAxkw8fvb4HiMKkzKuTVqkgFEAVLyXCNGrN65WXT6PCMGP",
  "key21": "3pFA35mLYffkoY2qDK6xPTUe2Z8qis5Vc8kEUeRNQLwdTQajorg9MDKVs1NEBinaACTqxgTX3nBrGSAuQCnuUjue",
  "key22": "5Zqs5bRCB9JPyT6TCiupXdKcjaodh2irvKMKfj6Uunbu7ZfPyd3BN2DTxDo7f5F1d56eYLJKuDoFmT77Y44ae9TA",
  "key23": "5mzR696WuhT8Vmg836QGt37uKUFPZPhBgPfEFtHuYRxXBcAMVEydCv7yXANxPiEMWXxexekjjRABvoAHdoPirbL9",
  "key24": "4dNAYcrRc2PUycL2H34DieEERZbsydSBw5kykXX8vfT9KXizW6q1wokVHM1cdkLDyh2UeNgLfMK5Ra8SNR31sthR",
  "key25": "2DbAPwyqugSCFj14EYUmMh6dNszatuDrcxiK2PDurduEs9PJ5idbk4PFNVVqkkHyZGSa9GKMEdmjYdcvdw1xmuib"
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
