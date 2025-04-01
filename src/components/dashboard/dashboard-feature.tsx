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
    "5KxHK635ufYMD2GB7YdZp2dYwEf9s2XV6WFNkHmxGXQYea5wJxGwN6xGrir3z6CKDidvh4bE726pk9rmkuhm8X4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ozLvDC1g9FaapyWCCT1nPUoH6x13uh4iwS7qPhpXC71twP8pH5ffDjBGy11FuzARp1Lw9QaSb6tLU3Eh1JfXS8",
  "key1": "3aaizE7wTB2fzfWhqYsK43NFrkp6U3XHvjSJxMvWzMpFJm6rfmkyugvkcHAAtdhWd4d4D9HxwtoKmBhwBVE1Cjhv",
  "key2": "5bTQmKu2afnxFn9pdBd1ykhk3qJXivfGesWeGbMWTjwZ9eciFm2kXYDZszC72amaFQKpKcegcNtk1sCJvBJ88mxs",
  "key3": "suoRjai3dYwsT6MC6EBrmjHGGxiukA5itL8T1i6KbTc71JAjXbUNT1w3rs5gkpCGMUvo5b3wK5yUyoB9PhZ3Ytw",
  "key4": "44QbJThDeEFQdVpdCZKB77s9rEvLSZXjeH9XFhci1eHjcAPqYBpA8UREtKbJwak1iyjF1zUgtqLnRB793wooUYM5",
  "key5": "3UFhxzgZfeP7dbVndDZ4MLT7bF9MjY315CCxbuseYJF21fD3KjmuqBDNAtjsrMWTbeLCP5h48ys55HjadEKd9cfh",
  "key6": "2d1q73giQdyX5WjR3Y5BmKtVr2ZYWf8kRmgARXdfM29uKPE7AhMCsx2N8aUyqJxka7E5GVnwKzJ8aVpD7RB12z9y",
  "key7": "4XHL9PuAA4mcW5CpmvYRzcrrTzqmL75ZDdgsPXy59tt7x8NWDcsgfgYbHAjmvdSxAUR1DytK8bg4njLmEAS4tZ7E",
  "key8": "o1Eoz9VdT62dreFPHsDXzwQkeHX8vQBEoydcLHPEzYpKxnRQei5ZniiJDKAMbLJLiiV9rWbu8k3DZef7apzUCwV",
  "key9": "4REHubsFbuGpGaj4ajXp2pLF68Q8nhiRiZyQN2hFkgbKhqaSyiS3dZRW36trD2QSfWdrS3ZoThg7nwYkz3fKQuSo",
  "key10": "WzFhTKRaJWwDsFUjLbPz9DrWyJjZyk43ewKRsxfDXH9AXcx7FL462A44wHWKoN2RJR8WwZ7D9x6bsJ4pYXBuBGA",
  "key11": "5k5NVr399RfmHSyB7CFxs5RMkjFRB7gX6LH8JivFFUKRhSh7HwUUFeZ1qsbn1Xn93ex76sz73tu97Licb21Kz8G3",
  "key12": "4kBL4wpKSizgiTZEsvi2P53KMHciwpD4JWAYFsAmCn2eD4DqvGLaoEbNHg4bQ1Yqe7Tr4P1MjQHniNop5aLLvwDY",
  "key13": "5xvA44VpZ3nDPgpo2nisYVXABkBVLDNWvkk2MVZBsZMyWVbVzyh945dmQprBabd63PmVbu59DF9e422zvNAJXK8G",
  "key14": "2HfZQiniqQCqinoJsvaXnwfJ1PVLauR2jKJ7TFfmo3ritpAECW9nbwomPLTh321sofH6q6raLCFVionkYLRc5MPQ",
  "key15": "uuH6mtrRsyJdd34gfiBYxym33xm82T4bGnjZBBdenauLo5uwb5CXKESkzW9smXJdRvFuspJvaXkMSL48iWwVUcx",
  "key16": "4havPijyYw5AmTmwhWEjGdUg8TTqNcoLsvSzCEgNFa5562KtafL39FPoHFtTFCXbzp69dBXjrx6UNYLi55xo8Hud",
  "key17": "28QANcwD2J7LkXVXENmEUcjJF5FE8NXzAB7TqNiEttNYQD3YAmzo3U2kLwkQzpBn1Uyc6LBmEyWPgxkpde5rD6gn",
  "key18": "2wLJPhVyBgidbtbrzeW3QoC7SV3Swk8ffcBGvf7Fwa48aZgk96LB3GDg9jA4fW19DNYc1W5MXGmuo1nXhvHmccYa",
  "key19": "2kEmiAofwWpp3uKAqUMsmEoJDUKXD8bRKinF6835aLDSBFPJU3gYLnjnAZ3VJwyYoBXyiEioGWk5EqxBsqSbVLfj",
  "key20": "2u5fQNnmViHzkyPbLKpFTMwxayPhPPRNmXBqYXtFpfcUi65K1xCKnA9YmbCY1hBig2ccTjpVcXMRNjx3b9HSeBZz",
  "key21": "2GwkN8Jgj85HweyvqycB6PSmCRVdL3x5c6cjgAhKo31dvqrAPjiQMg1kDmfvz15boSe19WFdreGM4cVyT3kAWQ3d",
  "key22": "2DLQHmDuMzug431kU2tP4xg4NjXEqwhCmWwBqQiZdNYvwH4xuA8DkQ1ZLYaXWLj2ExniWqA3UzgX7PhwBYwJGbdN",
  "key23": "54NsahyzrX9B1cKtvMzpLxpw9ixWZRN1FaPLP5QVEWofKDfmwyKSNauzTTbaP14VyRMuFC13rC61UcoF1DoDvbSY",
  "key24": "4d6oUBDCyMj1pgkw18WKyhZMuGgSHEbiJzMHVUTFKwhMjwyrXU9w6cnfqfSpHgeqxokRkhJXBfpAxXYA4uBWdkgd",
  "key25": "5yCy9RFo9RpZV3EXqptjoRbMgtkbKbnk9PhZ2BHCWwWBXdMz4RgZXFDD2ecFY1Kr42zFYTZVG6c3Xp1o6M33X7Nk",
  "key26": "cPvLWhcnvqcztxe3miDyBi2D6nJ2pM9xTkq6mXGwBUHYwRHX931bMYxGiy7VZaMrF5zR4HdRzRphjrvQYfSW5es",
  "key27": "5QvghAFGDJiaEvtUJJiQApNBhu8cWJh9BHCvyrME1UrrN8E8JTc3DknhzwxKzoxa8GgUKN8RLgGWURvmpnfxHQvT",
  "key28": "2NWojZpm1bABy8Xgoqzo1evexMgpD7xAd8FYQ7RtWLNZYoXNdd54TLRTahsRSJm6VHZ5E8uMKDtU4knjz2Umk5An"
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
