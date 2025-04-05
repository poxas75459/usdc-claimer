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
    "3QGGYMg5LqqJgxyjLi7nyE5yarFPM2wMNUJtkikBFPHX1yQLF5oSED57yaagcPmAy1jVVevtz4XssGfLb4ekyf2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ixW17SeuktLQ4UrSBT7fiw9datNZNMpQnwpS7arEHdD72WYF4yHoT5ctYr3QB9MsDPdY4VMpjr67s34vyDy9Kc7",
  "key1": "552RLcwLrmS93pofKtz6N5McDLSZF9BoNxoH12BfLQpryc4VjGejM9H9S21xjbzbYmtTwMFoQwP2c8ho46MHDiQP",
  "key2": "29dvNWE4kFaF83KVzEYZw5tF6xyoP5JfigqcSP4uELwHUvRzPmM462pabhdA9LZJUDabU6DBZdB4iVsRkqeMDcy1",
  "key3": "5e1ZZHkKi58pNagorDb5UqcrVpnH9Mc5bfyy2vUVYvYyhCyGxhVZVKpAWBhn7YKKW9nALSnuX1F8FpqEdEfheNSZ",
  "key4": "VhMgSnqLBV9yaTHpcrtwT7n7cURkkt8RFVhjAE1PSM5LWka3Yvb64BG4vQ9mXH4Ajdpq4ypXNJRe6bwqzMhUiC7",
  "key5": "3ZqenELVHm2NULjMgBrNPeDMz6xw5AYf3XqSCNyknw48mz8m4BKqph6egzGE2zG27CPeBvkZedDntu3koyESsRWT",
  "key6": "MxiE5rcau9wYiDbK1RQPLg9VXV4asQc3jw4LHrJr5TgzYhgwY5tmijwH9pwC6B9NSjVKCfh51Q6Gv1NqYuxPRik",
  "key7": "3FkVxPZ4P7mi7eqkFNKsXqXS5PXyq1BiK5z55MSyoyrCXkqeDCpprQn6CKNj8mjn5iwTA9uqDEV3a1bg4QHF1yr3",
  "key8": "ftjpG4nsWS9b8aJnke1SY1xs2zmTXwbX8LpDug9Nj5XnhPuMjVDXGsQyqwThkSFe31s2obKkgbfNfKVGYNnx9Qp",
  "key9": "FbcVAEDoLSQwwQFv6ZGPnFLNZdU8b1US4erErWM6EfnENkXGKARincy2GTGwwv7po9ESaw93ugtHMKwbksSrQwf",
  "key10": "4nZqfs4rZZrJGPr5USrmQGVQE4d7AXbxTyG9yEgnLzYrqgFDy2tVt8HZgyipsH86F8iwPTbNRvT6GYHE9kUMT7VC",
  "key11": "28xHBfx6e9hMrN8CjFqqNrLUVvzce4w6cjp8FSHEWGtAJ5q4s1uhBdiAGFstFGiF3fgqCkXeEGAmZbpQ7VnFAZ7z",
  "key12": "5BvZm7hripBUBCMaSAGDRQSHdV7rfHhoBiL3i2kMmj6HT5GbimVg4PstNovMM2JokXCEH3c2pnWzoW414uLY4tKz",
  "key13": "4w7oeynDpnB1nqy2dyUD3wu2EWNLxYLVLfPL9Qq2uuh8NYYizELpV4yYFtDuFdJMLLcYyCEtaKCGPGH46UtN6rz4",
  "key14": "tsPqnZeyz9L4kavgVuN5BXURGg8dktUmswZ3h7FyeMR8rMA988vZd7zNucpb43DdXv6YyVSPqi3hh7S99SjYXYg",
  "key15": "34Lz3y9LRFRNz7pdMb6Fg3vLeyCCNYAfUwasLdHbgC48CprZnroviiinZ3ZxY7t3XnheSasoat4J7BaSt5QgoHce",
  "key16": "2cdA3HnLyoZYdZGFbrJQM8b3n4Cvk45iNxiNQoAJiFxo5JDxbM9XA4xci5K5BZLa2K2Zd6Va2nRwjhLvtJ4Q6MiX",
  "key17": "4zwCaNU3UEoXJQpnQ9huMy6oR7ZYignU7AHB1r8gknpuqAK1MFfqoCSqxvJDSaZBBQ9fAvupKWYvvCZSz7yHxPm4",
  "key18": "4cA8nJGZ2voyjd7KYBQaZCyrhm9d5swGiQATGaWGpBaEdRmaYPVFnvDW8v21poC2WPFY3cnUp2xGbsjWwR3Toh91",
  "key19": "5B6a1Eb1qmtDsrPr4Bk9vdUJ9vNKYCnKabuyqUH7Wp6Y2KwjzdymNba88fQGUgHuMxdmizw9YYmb4oZE8dZRrGtp",
  "key20": "v3y9ZoEBnMy6BhGKGZi2Z29zxS1ejd1jFVG22qdxMUMhZYPrvUP4V7oVHwVN5xdsUF9r9yA1MtXJnTxbZfynhLk",
  "key21": "4DmUZTPmw3xrvPjkGrLxn5VoxipxmE8fxTzVBEfaiAuRFWrWRLGNzTfb8s9Y61B7MpZrGjV178YUYK5wC8W1mNxf",
  "key22": "5uTUFG9oEeYB1wzggBR8PLMxY6tBJEX77nZixD847dnXAwjYejJgaZXJSMhGsbmvxutdatYLiS1TF2AUuMJwdimq",
  "key23": "4TV8ztb8A75YFP9Yx3RsXQKAsmh3q9Y9qw7AEp2bJQ6hsB1amghSKEoCXVwxQkDVBckyVseUcMhH7T4dcpdGsnEr",
  "key24": "v6SVkYpQkbGgQsG3SfPiCoQP7jiAkuTPE38qAi9QtLAVw5hK9AN4MUChs8gLRNcy8QVGmXZv2EdN4zPveF9jMMF"
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
