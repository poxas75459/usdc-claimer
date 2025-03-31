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
    "EccHjL8pzY7JHAYafhctyyYT6SBHSiGT57hvt2FoRGFVgGbcehKfsffsbBTPFpQoGjRtZ9GbDoFWwVrc3J7eknF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A2AkhG8URswaTdyLW7K4j9wcNQqRjhXvKcnJJotobNs3PFzfyTjywPEsL1FnhwuXRpywLxiuMXuCbNKg9CGW4iv",
  "key1": "5pQC3asEQBwiiwVZZ9WkHhvSboGkG7nkCsHuBDhjXVKfhQhfLTyD8mEHtYamZhgPUrUzt5FUeDSoqLxNeBLUkatL",
  "key2": "63LDtxDVHcvEVRTqukwZLj7rKGuyjM7XiwTiihQoQxjngapCUFLUuwGraiMVKCMctaeNaAtC4FSiMCPhQhrJtJiH",
  "key3": "5A4wp1NM81SDQr5vPNaJ6tkme4pcywnFdzMejaUqtQuEP6Ayma4SfHzK313iiUccaEw2Cr4aGmTWbBQnQH4BB8gV",
  "key4": "4vA1ZJ8vx4mPFMUGq2Lg4oL3eN3gXjU1xHuqxVktTCgcwi2fc5QGkTNRgpiNNkWuKNu9GrFjmECaYVSvttPz1mJM",
  "key5": "gmEodrHSjHgfTMWtV8Gmo1ovhr3k1JpYntjttWmtWxRSUysCwsfVwnvHexmb7xx7qSbToC7L4wuDBZwLHsuMxS7",
  "key6": "4H1KAY6CDmWkEVzwzBfVCHhLK44JhD1SpgYtMyUuAfiEKP7ZNmwdMgDzSWjcB58f8gktRZgiK6RmfmXZY6wYarH9",
  "key7": "4WzXKGmb347HBxMiadyVGqZ7FzDP25GFAqrXCLSoL8TWQ5cxwvgbrccXRXETPWToW4hK5nZX3ftayayjoZnYyHbQ",
  "key8": "2EB3fxEE5GXjtevGZPmaomqcAdMSnBXtKMkLDzMJeAdgdrc82j1xBLNp8KWZWKsv1seRLyY7VhfuvfNsZEvs5d6E",
  "key9": "3aNMRc48QLKLr4aGJAhzZ477KcshNiTRswZPxkz8ArJLEgsgpWzj4WMy887Yrh9rVWxH59bYNbYGWvwZ6xGJi8Fj",
  "key10": "4mWeqVHFe74z9s86QQh764scAqwA4H5BungbbqwCnVYeEPiYrEEEpDAdgQAz1Qgnr4FY2dDd7zL7udJ5ax43HDrD",
  "key11": "2A3z1XAx3MLhCshDQJ4tYAxNAxXaTcju3FUVVYq6RDnLyiwfSaBCQWej54ssVNrnvCWX9UMe2dG22okCXugZR41e",
  "key12": "29UUiYPTeCsCdBXbZwYpQqMzwSmGYwNZErd3uvHNL3scDYkNvEj1BxtFSXFGHjqngBWVBoNiZgjdGPh8289FKG5Q",
  "key13": "4xapKakFujXzZSXtyjACGyBRaA3JCq1rMXi6uA9vz7wqpdGmPXGQnqw1CocQAJqLT4rmx7CYcUTSCWevAsTiWSoc",
  "key14": "hxAWdyngLNtQfbeZavL49DeFzoMBZyt1EWqpTyy9JjPnZx7DEzw9hZcUGCiAsD4vbVM8MrrhbJzS5tRda6XtzrU",
  "key15": "3UQp6wyt6Gwo6EZQNZxDXKt4vSouFpkxCGtXKt1GNbzhZNWETXWuX9msMnfbnqCkLh9REJMBSQkT9GhEPXdREwKr",
  "key16": "582b4cianCeL1og5JZJTGRrATmwMeZ4ksHXiKXuioLVKz9wAP3xoBDmpkGpQhiRnqRphLzraNr7cBkWYHgQpSeU6",
  "key17": "4NANM7YWE4Bb1Absup95NfBtC8YnCqcMW36a6MbGHgPTDFB9hm3PzMAwqJ7xDWGhCVnE8T1HjE1peWWnm397Hncm",
  "key18": "4JjemxbK3c9bSqyZaNuVD3JDsEijjoLxKRgouEUP8vpjoP2g7LRXArHivwv4k1SLBpTV4rKJ8bdEEJfsYCSQpZnM",
  "key19": "3xBPGWdgXYm29E2Rc652aWtHr3LQMrehpARstbEDGVmLaz5VyCdPtxdtFb5ugKbtCmU8pV73U4pzBFKNL8EAoL8k",
  "key20": "5fPbXdHZLeqdr5hUGc3fS1MXFgycTq1jkPt6h2fTGV3ZkGqe5v46THZrWoJg8V3vMGKA5p7wwu4RzVcWrBedCQQp",
  "key21": "W9Z3Gehmev8w792kEG9vgiqUiXoaN5xofh9a5D8Gcj1WAbwGK4oS2KagSQYT614rCD8PT5XE5AY2Ny5V4ooGAWC",
  "key22": "4fi5c8c7HPx5sqxWhvsi7xmwXEM7XJvM1nCUnnpej8ceTSUphza6Uf4YwkUZgSRRAot9wdCku21obgoKiUdC3Wet",
  "key23": "125hwZu4wxEGtGGx5nhpXfLTfsUtRVb431sGppAva1jvkFd5UKcjZTPs7xfSjARRKMV3aipL76jcT969ce3gYzd2",
  "key24": "KYGYyhxkHStBymYmRLm871qfEH6VU2jBexcueV17vVzfQvHxesuVE292cee6p21xFvXem3jvcABcBF7MnVS4Se6",
  "key25": "3rcTzxR6WF7AzEdTNapvGLE6KyFNewnJmp1SSuhtTGoKHJttpnfiZVvkxXuJJdbZHNm8aaVYdHA2zR1E6LBTFMV2",
  "key26": "5Gh3TC8evWuR2MTpdJDG9E9KDgvyhdQpzZZfSG8EQiMRyvEjg6Y2MSsNJc79PRa6fRrqB72U52daCrHMDdeNCVgv"
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
