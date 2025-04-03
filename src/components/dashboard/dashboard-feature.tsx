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
    "3KxPQBDBCXzSdFnYD6kueASNq7xDxUJ3PKdf7HhQ5qw5EFBHJo9bBoRaUGGZWv8q5LY4JVZdoQv39g3UKpGYhPDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iQvCHFSg45DzeWiA9RM51kbRzatmnGW8vR1SMGL5aCmyeTnPLZ2fmB5gKzghUmLXQaues6apSRfXbLXYGDibXD7",
  "key1": "2aan86eUEHyVNFLq5eXetPKmreSLJ2hNMkeFbNfXGwG45hJhEFhaQ9fuS41rYJwo1Urm3DjNpD8L2C5EsuVKmzVQ",
  "key2": "3WqT42SuuDxjGbx9aKC2BJwNKWSMxr8UZYDqTbUeH6g7N8gBcMp4bFAwL9MPCPvqwinKQ4B3ax7qZRBXvyfzBnaf",
  "key3": "4xq5EJ6qfrgePEf5LXdRYnrnH3GkmYMYMs4J1cum36494QfDsfDjMYAiwDv7Q8cAiDZFeYzVE3sBu7bwASYkChEQ",
  "key4": "3N2WrtX94GjLq3LZFJCpHTon3AXpmbkmDawixkgLU3X8JkDcCVd32u19GTyzsaiX9R5kvCWcmnt9ZN5g8yHGbyvM",
  "key5": "2SwdFwVLFqvVJpNzxtjFnBUQYK9QKmSYTzjqmJib8iP1uBNj6RinSyNJnnKUzQoMJrAmNqYY2N7PffP1ZksfPKrs",
  "key6": "5H3qEMYy68972Moige6JGyBnr3U4urijtvDW6VDE5jxzgoQekqaDJREXXhZZ1fSiho3D1XwZ5pLtrvsBs2KcmveE",
  "key7": "6DzXvhSLVq8E8k9MYAo7MsBuS9jHm1YGxnhtnJYx96L4MJNryXLS1jgsRw1U47uNeaMwvG7Yk42wZ9Ftvki9hyW",
  "key8": "5magDn5VpB4SEXQcyGk9ESG98A33Fj2QDMLNMmUE7uyCAHtCLvzhghiAnf8mMYhzTUCwKtW6KUAZa4xRKa3Q2vKv",
  "key9": "4a1gx3sjg17AhSiFuQghiQGq2CNzQPxPdFVWd5G23ssyCN1Pv8cA4yKpyMnEm4Yg9Kq7uWPXcEzkR9d3c66gENp2",
  "key10": "3mdmtZAoCpWgki4x72t17jQAxje6HxduvyYfbMuc6yzxUVJ4UPeKAoSh7sN61pJx3jCG7zZUyVHykxq5QZb3pdyc",
  "key11": "3ziKsTAXgDoZvKKAXNRC6QCxDfmZipDSfJAKd85fjjfPqjT41372bYptyrBSaEgPHqCtz6inam9nYZokpGPU8DMd",
  "key12": "3UDStoXnUBjcyyYM8zNg7nzaVVXJqQBfLGt9WAfjFGtFkSwg21EW8LtkD22ChHjnownAiyxyqMwCAqw1czaASXjt",
  "key13": "4MWbTDZ4D2BmbbwgFoySz7Qw8RNGb1on6TGrM5dVy8YcxAoKfvnbPZFPtpwpAPPLmhWksHqjPwCaFhg3LZPJKkCx",
  "key14": "4GeBqQvk8MEeb4QcNQM67v1xWNSrE5XbnM7gUf6tV9cmoatyWj4N1p8arxhojVX58agBtjTPoD7wkPQ6yayGqUR4",
  "key15": "43Vo6wyh7HjitJ4d1kWJ9JfZvbwejWGDr1PTZBGFoAsrNLRHR4LMDwJ32gGErgm2YGxbEfRSUw6PvZFHxnqZnTd4",
  "key16": "2Eo6rMzvPh6FJmVCkj2KsQMvf7gTvVuWCsGenJTckNmjjp9ngeDfQwPZkMhvFeJnwwGwXjAXwaZZdrpYYydH8k19",
  "key17": "34kPVxDdv6abiGF13kUZUQbZVsBbDpjM3n5a2XrmT2L1rSrRsiJ5dJWHMVaC9aR8TjCPoyeH57h8JrkHSQ5RY8F5",
  "key18": "2tHr1uv39iYv5hKBANQpFpqKgqz8nv48QEioyhoFwQ649iLivhegMtGfXB72rcHV1Hs3xyGF3vtUm6zoMxg5gxcE",
  "key19": "42sMy6vDyNeuCLRrDKhTdgJC8xRRFLxfbKBB6muvvT1A4FUfynVwXZpsuaJTVhXcuH1UxexCqbEXxAmkAR3SErwo",
  "key20": "4MBNBVnWqNiF5jkFSaABCgcVwkLtTHqqcHhCXvZNFQg1XPGo8cYFLJwJKdx9xC7rAEpT2rAND24Pxs5bW8NLsCyQ",
  "key21": "5WuS6KFvoyiTsBDAYfTmp99s1xBM4DaxfTAQu2sezFu6YCZNvCvE5Yri33YZrn4HgSmpKZCvd2rMi8HZBg17QjFR",
  "key22": "3YZTs5LgnBwQ6RKrxYdGGJpim28H9ARoy4S85r7zniLUEpVMHxnbG9QpqYBkbGkXBqnaceJAMmsr3AwZFbVyr37r",
  "key23": "3ZskS9GPXcPPLLrcsvGByG7XPEne4jtmRUVqbZyQVCtEMcH9vqDrrTAX5emsjMGj1HzFTzQ2Q9yVcSvYEnqakJ8U",
  "key24": "484F7BQZsZUhb8wPKgDe9zi8BbpMXgPgRDeiysuEseLVknvkwKdjMkrxuEgXbQNcu1t7b4inBhegvD7ke2GEKCcv",
  "key25": "5yaZce3EwtSRyZZFLb3NzynFcTa1AE2TtWPSmkv5waxFcMZSwJ1Ps6Aa4rLEsZUgjnaYdaiy6KLz6yhVQbJ28onP",
  "key26": "n1s9iCud6BexVkSkgo7TBJeCAvCc6Q7ZA5aXgcdYrNCWv3iyCtJsQ3TAZLoKU8sjGgTceeDbqNhiexYYc3hH7Mr",
  "key27": "2MHJ4rUndF3jVYezis15u3Y8eRs6Lm1rzXnshPzTTFazfxE2dU2aUQamgAK8F2fd49avF63FWswe87Gw4ZqKE82C",
  "key28": "23SVpoWw9nScMfZ5VKw1TKW3a9qkT9HePjvMdSZ7KhiWLL6DS7q6FNRUvkWEx7gf7t5VdRHPTBRMySsN8qA6jeyc",
  "key29": "577MFyxncno4D9EM31Da1PVhrkt5rsnWQHsSAYXV2zUn73ukJE7VCNK2VrmLiMN5Pc9NjkVJR44zasUgKsETxwsL",
  "key30": "2bgpKsF6tdLHtvN7STepprStsiuq1wK6QM1SPBHwpJ2EwditNbQsbYenf5XTE1nciWrrAB5bKxZ4XedB9QKJMLJu",
  "key31": "9YZkTCSCR2jHK39hcob4fq1oKzqGMLmohaW7LYVJF3awYqxTTFUwcpD3E9N8BVfXAmdKuMemWk4TMcuvsQkSccf",
  "key32": "5ohNvusftqo6e773FgHUe33b3u9ggozeEHotXzsKT9nACfxahjb1JgfGjxoTuSQMykzbu82JYwEMVtrbGZ548Hby",
  "key33": "5aXEu9RBNtBJj9GMJwJSHW4PFn98jdkpQzssEmnSP12gLDHhPWJY2LJGBp5TyxDLhQ2gXjuC1ctRRGsdAY4rYXuZ",
  "key34": "2G19cvtAzx7NiMC52VeXLpHwMVUVBXzRaC4qRmc2RrH1YBF3pMWfTzFhvFf1WGg6tfdFrLdzZJPpnK33vauiEuDc",
  "key35": "4zJpLiftTt2mo9DFgNrnjiAzAMKe7CnZWMWu62Pf2hXNTDJr3CezJ9873FYjSHjBR8XsWodoSgFUuE1pkZ4cnxoL",
  "key36": "4AkEtiiX1x3Pky2QGQAyxhtQjcQh8uFs12yq7G5iv4haxcTQi1QEY4YnmUvKhQ6YWJp5XZU9ENTExjWR7XqCkcSt",
  "key37": "3rceH5hFv8BPzVSBNQRrSZJkKAto9gLvBdiheNh1NV3b9YhK7Rcj7ji81MHSHMBz22HcD86fVc7R6QurW7DBESxw",
  "key38": "328HyzGwAdjTJZV7WH5HJnM1dLq1KQqu57r9qkTqYgWP1F4JpDTpe4SuSB7NGVXc8DXm7bcjNv2PdW7oAMZohVQ4",
  "key39": "4ZxZiLzHELTQ7HzAigbpsaCms1Xj6mfh6DGatYHQhZYrQFxktriTbduJ64Pi1xFsAtXwRzeyBv6VNbZcxCtkWR4T"
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
