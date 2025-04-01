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
    "XhYcYyyo6GSZzaPpZABN8zyPBYyA81xHpX6jmmaBaw6WEmweRZvyeTNRZPcz3GcfkqsdTExqatyQ6Tfc5Lbva1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oiKFWaGPwCohrDmMLsYk8N5SRhxXszndaVK6V9CASRLxyUNtQovviKLRWdkVoucUMrJn4LMuJk5WVz1gULM2pjV",
  "key1": "5zmZzchZ7L9dyuXLTteTZGxmDyHWMoR8PqZTMj9iKE9vwMV4UhQuS4DaRgrr2uanVrXVCvZ4YjvBDCVCF6JBE6Q2",
  "key2": "3q3o7d74QViFtSzHhQzQDNzVo4ioyM1grVLvHCywbMCWkaAEfD9KSqfj2R6DqaUeLYXCiHVjw7eBCY1mdVy24at2",
  "key3": "2hbKoz4F3TTnieN5mYMQbkUAaNJtmF76d1b9bGcqQNqpjiYbroe7TKRY6e3MYUtLBwAoYAo6iS6ctwcY2ezzCoc6",
  "key4": "MnzX6T4iYrXERSdxiDvXAfYGVz6TW3SmVdfG2hcPVDx3aXp71xoD4cQKrHgWg44xS3ZRXLGqrpUdJNmVo63pn5f",
  "key5": "3s8fjxyGFBo2T9rseiuWwzPdN3JQzACeihrrTHvj9QxMBWTQDApwVU7EawKUsEjYGpcUbxoPCnnBaiafS9ETvLTy",
  "key6": "csb7nXgeyhYU7hoUD2KxNxy5fMEbt1tVXgNuBtWYCj9K3pG5zPXAQpsZxpJZSnptn83dFznGQJaJfd5NAbAY2bq",
  "key7": "5GxuJbgeVHL4QeQTwgFZnHPiAe6zR2Wxr3JZQQQ3uXd9Eo7Zszsa9kDMgjhzX54m5TiPoEyPJZohbcgWTihfYdev",
  "key8": "3GRS1h3f6MZrxMgBgUEds5p8fE8c3XjMx1CFPHZzaSCG7QWC9vxSB8WBtodoLXk8x1DqrjmcnEyRsfKroJCEwrE5",
  "key9": "Pfn36FFXTWDsWq4Emt47FTAobtn6TgJYJ6DgDiMnzDwjpdGWKUPQZ7jseHmwZi9WVDECKBjHQsSn77pDxT4A2Rb",
  "key10": "5Zfzfm1chHerNwVr5kNJeNxR2jUSCVK3rE9twkhKGTGh2FGtAogedT3qpHMtMHwAGGcdzZ6gyyuXaPU8sUaqSXgF",
  "key11": "4fHKxLio7hnKbKKJ9c27PYL4sRmhjFT1z9ta1mAfGFtZAZnSCywMxTsn6dr6tPqVbskGr32hdZyC4Gh61xuFWCNz",
  "key12": "3TVW5ZEbswJUmTCAGFpTQKAhVDx5xTVChuh8CKDhoFgpSnHJsED7enDrouW6nFQRCrnxjyggQ2uF4Y4P7MQhXu93",
  "key13": "3RQCt7FiUP2a5DHBQMEdUnd6XiBZrntXw3riFtZCDnqfKH2J9tdiW9DURM5Xk9MBzebrGfk8CvgoFL9qzHfHREnq",
  "key14": "3ucMtWnVfmKFKCVpg3mr6w68B6Y5PaJcG4g5us5EdtN1TSraqx6JgVEto3ztkXM71x8UfkLC15NQtF1d7euNTbda",
  "key15": "4hyRn3TeUcuAJYFwZmzLit9QKZpBzpZ19MYv7P2EJgtKwMWyGueox7AwHKP4znpRUGADVSfkTHLrbb2yDoX5p4oZ",
  "key16": "43wD5By99LGieVHrQwFCmBD8inDHKgU3rjct7nnuYYhFzmEBkXF7ovhkAxoPniXBZKMBb7Jf27Vri8mmZj24F25f",
  "key17": "3K51dzer6UGJyTJUAydoYPazNet4dwenuBcJ7t9dNSackV9ftFeQwagCsJpZJ872fkbiURQYpYmzsWP7i1NbxER8",
  "key18": "5HiCk698K83Mz7pqK4cFVGuZnC5mwu3BYobxGQPFEnuHUe63feDvULLzakvaEPcjFikdKqsoJsFBG9TWnNgMx7Ra",
  "key19": "4Zx265HivzxwH95F6Jex881zGhyrN5nVYWmQnKq9Z4czGWwt6duZy72mtcez98nQcMc3mtFP7TWb7egVrvH4aHTM",
  "key20": "2uEQN4BzHTi3UCCHfKh9qEWcZJ1wVWZbRzq1qafMnQXLojovomq7Z8oy4tuyxbv69bkjsC1BqkRmdV5xCXyURKZh",
  "key21": "m2ZkGG1GzXfVGsN5XfFSXd8MbJty2jprLkLJa7qh9W6BuwFb2EtsvxP4FDCvFJbzFhkezCZnY1cQ8nVhxtUwzQc",
  "key22": "2wc67frwpkLwXcxooUPQyfsCJbaBbu27hJJ5rjEgcQYKeEP2omRZ7rWmkRWWm9mX1aZ51DA1hx5EGdWqHT4jAjbG",
  "key23": "2LzSmDVhbmDiNBFyWRahVYAu9YXbxA9hHm777d2qZQvGQHasNz4eqe8RikHBuKPuaVfxbpsHzrMc1ZG8LvCZtZK5",
  "key24": "3EjJ2v7fMidY2wC6dP3BCiVhCeRtMQnAjbUE8cSfx3VRmaE7PrGAVk94x15YD3JUWL5UPvcXkMyM76FALnGGSfFa",
  "key25": "46SK4xRTnGz4MKHXfQToSETdSGdVVXwPzbFfkjSFLcpm2PFCRrfb36cXEA1om4JmorQFAV9DRgyDGwwxxoWkUxhK",
  "key26": "5oUSQygMmAWgahAjyTjgnTJ3GvSobjwY5hYq87dPNSHjdE59j2dnFJYKSLfA6QJ7PoPaUv6mY7QCAqgq1kjqNsjc",
  "key27": "TVyvtBKA2y8uXrNTJh7mvVtnBBYQ1oAr4FrRiVytgM4Wo79357CUUWhnTFCgLET3Rx9USNPh4GdTHS4BYMmXHzX",
  "key28": "29BRYtFEjdXLRHT85iUuneQ5cYhvBXFccgWvxeZ5x4GfuCeNWqQZVgx7TPve4kuJrUchcQYpk8Cg2444zVp91jAe",
  "key29": "4Nrh5VvNTjwttv65VtU27D2MhGi2Tbn491kLTSCqjmhkdJaSi7HBSa5FM6gx3sy7RaqFztacFWjYn6W4jpPXWxDZ",
  "key30": "29Jyc3DAeDgeaAqStUHXM7GBoYrv8r5ZWNQwEJQWTUJbBYeacJRXuwRHCUf3PrqpdLEfBHrTVtb4m7g6ayd3WGH7",
  "key31": "qfkbpdbeXSYMhwoiN3LheZRNfxW3zR8p6h2rMDjyig13f95Nd7a2a9m4HBgxEtQfGVm1yzyyHDBYBxWEWuPPJJL"
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
