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
    "25rE5w4Xm21ZFvFKjyeNQK4aHPL9ZpFNNuoCbC8nqL7RfovijoHrTiDzuFyYjBoHFLWBXFfq6XdW77a7GJCMRThX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3efxfdX3nhn9vXWHxMQYiDd5J2rb1YdoE71fM27okJ1bSpQMkTik9RKAScRxSXWe4JkoQHgg51quMFFD9y3D1U77",
  "key1": "4uk49F3yKthMVKN8nfz5FKQpqux9prEckhBR8d8wqUdGyFESUJ5qX9sy86NtoVqjypgRW345zd4nbPocNoyUimmU",
  "key2": "2Q4KLFGFC6M6n3KDY6WqEN7JrGQAvmw2FMDVQ9NHSNXhbrbnVoJnRskFmJonnGehSifwFHu1VNniZKcxRfwN7PyX",
  "key3": "3WBJahi1aUFsDiPLNzbD2P5Fv7DF5ZqiE8nE15HeAZ2Qfc3mmkmBrokHzf4vQkgwHRtyUt2FfqoPjGRTniAGhNP",
  "key4": "1hSd3HDdM5ZHdb3iUcgFgZb9W75eA4UuxQczzk5JXCafvSsL3YtJoXsP9Kjet8Ac8ixNsJ857qsxaBVHnfXjJj2",
  "key5": "3gFPFpZXwHNwhbQ6KVRpbj8BnNK92aYUGjTydr2F27qXfFwEaFEjSMNvPzCY1ndJHfzgk8H5QE4jFtyx3xqcgrcW",
  "key6": "2fxXk4bgq6VxvRxVWMUc1XffVZbF84AaBBsH8RD1LdjaJNDzWcu8a1nusRLUSZXW7vFuZggx3iT3xWAoN3xLrLXH",
  "key7": "65cYrroNNzyUBSpL1GJXapK8L5kvhnP8oQLp9AejM7Ec9FG8qGcN9W8AJp5z6UQJoCJKcAAK3tnnTxGui52a2g4a",
  "key8": "QNKjqZ9Lj9Zfg3RZtVuBnxj3JyDyXQnYH6s38noKi3NePWjJP4ipDpYxswohACyAFZewxrXJ2zqpq8wvNaPZtcw",
  "key9": "SUAqCp7Gmz52vwu4FW1GuTgbiMWAQ9ahGviZeBbwH9rQvJ3WuuwpvXD8LSUBn5Gib9bcAjso9sYvZnvXQCm9jem",
  "key10": "3UcuuLVq3cmLmFBpMeS4McAi1MVLwXVfVupK9WjNvfYnRabDv8NCbxg3HeDsx9gF8mTD7ZJSroQCNp6LefUmz3bm",
  "key11": "2MXc7sTbE5q7cUm5ANCwYubab5eqAzwvGiUYJ4xRip2qZxjdhEMpuXg7MxW2iis35D6qf9eTc8zqF7Y9HJTFGY2g",
  "key12": "Jh7UCStx5YpEMcBPqV1GLkfPoogpwQycrYjHiWBFBZzxbr7NgESfCRfJ2KCZhBMzdYH8BHrB7UB1ssPBAybWG51",
  "key13": "5NttX3HV9sxi6nDzZDtNeeNTSqqcYpxnJCCbgdVYXpM8fCqz1krYmziBCDPAbtifDr9f9X2w2Bn8Cxztbwep5fJS",
  "key14": "23ddavqA2jJn9jWBZPSdgbHMT4n11Z6ntvpd4xou5fJVcQGkLzvMimeF133HnwMtZJqMCoBebmTnWHryQ6ETuek4",
  "key15": "2FKbLYtwHjdQ8Xw1tA1XqjZxmT9mfrrCoajoiJpbA89QE62aVRQB4NtiBfNp9A4M2y6ByACJZhUwJMxP6QHQhHuT",
  "key16": "4pqeWnW21tV6qJ9Txibs3Cp5nf9oEk6yuKFRDyvYvs14FJ2xwjgBjCjn8wHJ4G3KyEz78AJBNNLMY9m2TnRYV4Bz",
  "key17": "4voTMGFNnJ6jiYbcvvdL2VKqksQ26b7eDz22s723KAVtc1K1uB4Vik3SKCvXy38UFCFxPcRegdx5dvvUFV9B6ZR9",
  "key18": "Kd4uGCjC6owsCEkxaZn2WoYsKoWvpSWmCo1qAnpzKUz66qZFvANPQeeU5z1bex6wR4m2SiWpxMnpV7tQNF7oAr8",
  "key19": "3BSFJEq8AjdiE3sMJvQa97fzQS2ET33tzjKL9hnvb14QdD6NokggDXtdURRbGjGnPtSs5tu1aZZaq5TTs69ZqfPx",
  "key20": "39xFirtG53QBoshbQyg75KtJZxSG3L4RJ4Q27LVLGq4ZuTHe9uZjxVGHspL1veMj4iVG4Hj5jqi5NreQ52G5hXp",
  "key21": "3a8briZ2qh1J5JeD2FQgT9CwcXiurZ4AZCB2JcKE4bi9tPkFsGcFBQEhWQ8fxjxmQe28FzXF3Bk5Setgi4rEXeWL",
  "key22": "3kEA2sxc7XiTQGRgAkThRSGKFc22DwMhcPd5GVcduRXYpHVr8Td4yd2qHydYzPfMUH36RvDKD2pXH1RELChHAGNx",
  "key23": "qCHsJHPEx8cuJmvYx2yP3WhpTV6hbiqYXYusBJrTBKEtZX2XoReXb5BgLDQgPnmWBCWXygSXiucHG3LnHVZLeKC",
  "key24": "5JW3AYGSEL6d8cyDsWnASap2MAUdSM1h5Bh4DAp6oLer91YYXkkvSmbzKd5xTef7qthBx2L3Xz6ikvzuMUm9RJ3y",
  "key25": "3n831T4yoNxpSsxcjZYNjUPTs3Arzy4E8yKM8Kty5EfduQabtDuzaqSSCv9vUthwvLEurHCZTQR6Gnm4AShk4pER",
  "key26": "4sYSTzX3ZkMo1RHJtHDTXedwbsn9JJody6XiMqDrwYTdsnuF3zZTEZKNsKJ84tkjsaBT2sSxF8fe4aPY1xWT3XbB",
  "key27": "512LwqC36fpgU13V9vvCSgNuXXCAGarKJJcGM1jhk6P4bQwYzknurpkZu5fSgx6vvN3nERj5ifz2nyqxsBcLBNZ8",
  "key28": "2VYkVLGX1u76pFtDNtSdgkcNNVsRuFyuqxWN5bCxJEPQCf9aXKQk5F6SkrrPBLKBMh5aiQHSRLJSv7iSAxZzPkas"
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
