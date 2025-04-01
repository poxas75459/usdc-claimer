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
    "5m2XCjCbwfb5pZekgoL3KNufUSh1rZcCZ4FdAPDow5r6ivdKjAgXYgcBTaPiyhQe3E12sKXTPEdnWEsuKhvtvEQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uB6jCBUxFp8CiFMqq752fxjshqTAYzU4TyfLxaxLHA8MJVoyLQ1TpXPF3M9KoPo7TizRSfeMRt2XxzcM2HPUasZ",
  "key1": "5JkrAuHtKRUCvaPXTt9YZa96rjswZo7xd39Td9YyLd5uDYbPj69SEg8SW5rV3HivGLJnaNH9bXdDG3e7N2DKZDuM",
  "key2": "2462r41KVr4oJHAqGow5PZ62MQuHxanv4sWfgpKHiJdsyaF6zma5hTSTPH4F9QVJmmKHGT3D2c6y82RqmYvybVjP",
  "key3": "2Mxh1ySm196ijVDcKPeoY5MN2htxpNWwyyoaN36jDDbGr56axyxVyDHiGgj61dmU2PeSJY5tVThz4RG2NLGcywnb",
  "key4": "5MSGb3AquYxmAJUKfmVWbhVrsAR4tFF2oBnzwysNHvc1f5ny1DUB9LkV2pMadyxeb11rLg16fyizcWzeEQEgyUW4",
  "key5": "N1Me33jeC6uEHLedpMmJEpLT94MqAEkzme2PBAMqxqhL56fG2Gd6HVquxcnwznm6iZkxBE9dt79j97PYaUmkXq1",
  "key6": "4dM8ZNtuti3t81axgSyL2a9kVS5utQnKQm3U1cgDEqoDwyfceQqMkGpWxAGNAL6i8qDPmALF7EG1TcG4tKwRXWwg",
  "key7": "nJPKr33J9sa52oYCQRe6AaTTxgDDuaDePqHadSvA3rRm1zSPLaheA8nfPbESkG81Y3C1Ber68JhSzRp5nQ5NCLy",
  "key8": "quFRkvvunVdLScNDpe8KK94VTwzvcNY4bx69M6xHkifDb5uiBU3jGkx77jSHtRv8dFnJ2KtB23YHVhwhZYWb4P8",
  "key9": "43tBStygtyiJbVvDnnbAuQbACS9i7Kq64bX5oLXVipHNBRZgGmDomBPj6GdKqVvoZgyQu2VosnDfUMgWYm6V4MuL",
  "key10": "5TZSfXH3EnctHtdSPCz4k5UkoRx9ijywTKTb7wKgB7Z34B3Lr7CoWby5SnZhZc2bgHNeoxQQZLk5BDXn1vpcSP3W",
  "key11": "CGec8T4wakKr5Ev5x3CWxud87s1TnvmNKaV8ybRrtCe7PpN7TL3NKK5Pw7uiwWUbDMmWA3HLoq7VHxKjtqV27u1",
  "key12": "3RATuPqKB4fUeTffs3fccwnrWFtWFvicyUthfdRn9YpVNsYuS95KxYcam4yLfp6a7Cor1AhisSqqj3A3pFyQJTNY",
  "key13": "5hheGjWrBiz5N8hbDgF4E48vunPajwJ6qpchY9FnDYggfHku1grNwPpeMPgNNJ9ZCr1TswBqmnnk3xZ8ZXrqaJwm",
  "key14": "4bS4U92ynb7JbpG8TuzWAKB3aBPRjKvjayDmd7sYfzcWmpvnoS2SXaWx2mWyy4TnafxP4QVQv8Ca3niXj4HfwKLk",
  "key15": "2buzH7UX8juRyjiK8xcp54eK2WVi1zvb5F1YnzZVMHZ7A5AHXdCD5ACcsyVzSoN9GeAzz4neHWnw5fDkFeBZwyuY",
  "key16": "4qwPTaHZdgWFRcRjDafEumfGUZfUTqGhPuXUkewPrM2CDNJHSMvJdefca1atyXwsNxP6mcwzbHWWq9NkdoZEA4tv",
  "key17": "5tWdC2kfCGdmjMmrnWgba6U6PJnRyYamSGAdpEA6AjgLtr22JFhfvwipLa3FSF6s4ANvHm8jf72FUX6uwDH47tYi",
  "key18": "3jF6XJAKumvbd84xCuGUn3tKwLuv3sSdVmoQhSiA3nTYm2zDgZZDPUJ5BLbUtP63cy7J6VeL29WbAeFek8geUcoY",
  "key19": "4R8bvByeBnBVDSzjByuNJKq2QC8koyX6Mpzo2gd84AyU8sJVcdpHb52TyDG5zfxyuqEG4ANXgVtXSstdRC2Sdnre",
  "key20": "8PXBywE5s6rvNXyJdYiMSwG4FAUY5ZcUeK1XJ6amPydboUgbghyzfKnQB1ESKGdtzijCrgFGZqN3zJ3FyeuFz4N",
  "key21": "hDJi25PYBSMGWf3b3b8eqc8g2khkhAXumZ9r5f2641nZsFxJUFp8pLs8NuYXoPdnXHupH5CKzd4HKXVEJuRpiBC",
  "key22": "4rvqq9mPn1yBxFFz4dCrSg6bVUHV8WHFsfkCzwxsqUEoveP5pXGoyq6mjot8DU71yNeMGErxFgXJ7LUd9NsnbX6c",
  "key23": "2QZiTrZfSLEup1BvgKnqTHfBBQYVWyyzdiSw1CNisYy1ak6dV2MLnktm6rfebrSqkspCCdQHCeL6JdvcrjmP3i4x",
  "key24": "mHyzhFWChfKizEsbs6Y3mABUq387p9jcGj43wGbAiDE2MAAdjkBPaDmqkPVMYyAAXtdFJJdhHw6wiKNLfyUtUmA",
  "key25": "5JjRRQdkNvwhH4mejXnFCzYrLUFGGj4zMyMrrECSo8hJT2SvtCMpsvxMhV9HQR2vsuCbVgMMqgdWybAEjmiPGqEy",
  "key26": "G96xoYBJKbELSN1yv3LSfBQpB6qTc8m4fJvvsiFxJRmvH5dhMuXhPhMw4P7cmUv4aKMVYoAZxZsZ1TpvGJQnjA9",
  "key27": "4W625qdtZKt6MkqhLfZugmxTSwoBqLTNj1SpBCtKqBfgWXDF8bftnDBFbMcUcLttLNxsYjY4gv7P2HvCdJh5fJ97",
  "key28": "4Q8HbJt9U5MWfvrh4bqd6RPJGzDQ69KojquGVtHVJ3aPGLQDUE2XMLepJVPPg9KTcxzZcs5qb5yip46wQhQcL3fi",
  "key29": "P1nDsC6KsGhr432MhWb2eHd5xgyZkzHEDEjtneMyBdoXjUGJuytQeguhb2ijcRzpzxhsjaZhkWqZN9VchJmgi9v"
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
