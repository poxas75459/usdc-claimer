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
    "2yPLWqXctJVjqZ51JPWDBeaj8C7ZCcpFfVTX12chanY37EF5MZp8AHJZFsW5yUkHc9qQAp6R598V8FChjrUNTUeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HDw8F4R9aZr8nhyg2CPd86A7KiBDRGrGjLuMcocKSZYr4eHz7N1yFU16itissnqsuk9vEPvwy8Ks6Hu2Vj51BLN",
  "key1": "28GYNQ2w95RipzdvJoBmnUamPuoZ3iYPJHH39VVt3hXWiJm927bnoxWMD86aHMEfiykj9GF1SffunGjk11GyHgYK",
  "key2": "4PQVLF7AzdiA5FkLVPABmMoqCPJrZjV5b4HvA6CxrdvPk3S2S73MSCZgjJVT1Xiv4YDYisVdua8PuoC7jBrPWmqH",
  "key3": "4QTAe4y8qiGfqLCqNGhoVhiZRYycqdDiV3o8FgsgwNU3ZrKSqJTJ1fHCX9fySFyyi4xZyiggYRwxmduTWYtzqx2y",
  "key4": "3AfPc6rGGnwbk81VZryeRotQBptc5NCA45y8W4qQ1VDhjrbnQVb3rvWTTvwh4FvgMA9DbAMVq8GcDJzs1HWGnGDQ",
  "key5": "5By1p1StU4hdXzGTF7LgZ8hk2A6MMa7iWbYvf3349uM189jaZPSRTea5KjanLmnKgVCtefApZm2D3Z3ous7xMPJ9",
  "key6": "5JqaopYuYuRxWrB8XUZiP2i3fkWnq7dKy1PsUJY4GdXAHrHpLASSx9hzfdhTAVkWcEu2S5372vGgR4udMEiYZf9N",
  "key7": "5LuB1Ec2stjDVuvSL12z1qQTyowGmcT8uiaDt1sE5AJsrRRjPzJhCw6MGnQXTpqqYx3XC4THE6vxeN7eVarhoDK6",
  "key8": "31dspjtnjeShxvdvoni9eg1tm5m1EC8EK9a6eXavXjz9EpMzCUF7asuQQ6zTbzgBAk93exc516jckC7ZxcZcf6sP",
  "key9": "59t35N69rRVHpHMqV62nKodoWEyuFE9V4tJF9Uih31cQdbMbgfvDDSNXdZx9o2PWuA1fLsFCnHfmh74HeTcvem6B",
  "key10": "3vGGRZW9Zi875WbddKE4EYnrDe8fdyaAVPDJYxLM6suGNNh36WjiaWWJG2WYkKR5Rd8vYVP7MancCjceKzd7HdN9",
  "key11": "51fqLvuo58vbRSRCMeKVVbZxgWGtXMwbwoLkexDig2QUBJiE2386GTg5qYWczzDSyLYrpPmHdduZj4gNtn86DsF8",
  "key12": "4do6FwghVuJMQKDRXoNCwsxJ7ya2S1X2biRR2R9TsKL8PwHZTTMdwnY6uDKuAmvCgqSAGmsQCijNRpWmaJBkpr4t",
  "key13": "31kKoCrbgp5yn3sioVdDE5vxLjAMVJSaeL3oGE5ae27bTV9JvKVM9KqbyFayqRZoHgPq99yQWarGqukHcquHF676",
  "key14": "4p5LARUnoJstzYqczLHRoLdihjmncWKYsR7BdxKmHsCenjqkJubc9sPrUCbBBGhnJ46r9tKQsbHFdg6STuwmTAgB",
  "key15": "4TfLKJuRWSr8ajWgEhFFYzEnW2L6N1qjcShpCX4KnRQP84xdhRDKzKzMc6UKWt9YeQMButo9TwyqejMb8CLkRLaz",
  "key16": "4fyZybpRhfRC9RMjZdGrus5F8JePudNDnY8qtcBDqsRhX9vsh5wMMV7GEtmq3rL7jpJfk1NPAMnwPiZtAcFGdhTy",
  "key17": "43eENengjPKBahBQGe2dgPnJobvN4qeX4vx8pnQwXCUE14kJWkUQqT7YbanEx9pdw8ryyXZT5eb7Xwp8YHpfkZWE",
  "key18": "3AZtroTBxbD3dPj7jvGn7SoSyRW6xJXRtrKg19whQQ7Tu7Pq3q8mF4pMTh2YwBR9eiNrFbPTMrzDfQrmZ6SdoDxu",
  "key19": "2yZ4wfmQyx8bHiR3NqKnEoZryJCGaxgizipyesKP9gvxhFgY3pMdRK4Jq6wpSvDnrYrMrHFZumPGZcSCPVEfqffL",
  "key20": "2kseSLJbPwgLWLeEstgcpyaLVbN19Ce5vkygyXT3sagUvRPy1KrbAF7rAMVqPTkWKEQJmChhyNecu4DyKHMemHGp",
  "key21": "CV2z4u9cuwBR5a5b4zV9WMdxzP3zuCr2nfgbzTznfJiL4j44Q9oKvFGdPjHtX6uKbkeZGCFv6tvQNsek37eqoM7",
  "key22": "5WniyP89u9x2Jrd96Ej7VmcGA7b5D4xGMJ31KtdGDJ2hAVbxQAgjXkkq6WL2DHL4q3HYkiyEDCQ7qfwe8UcTD1HP",
  "key23": "3782nRPfiNyn3cNpMfYhiaTdT9kLmZVbtgd2KVbkHetRYq2tT68rHQNpA4S9Qp9EQVV8vpi8CvyCbAvcGZmqYsKg",
  "key24": "9PDpXpz9946fmJ6AhQxVGrAWST55EBK59XaQJn2fxdydndVdhNfz8cXoHMt5AzhsT9HtgnGzPbgP19RPQe1okYX",
  "key25": "5HNGwWmFwNLBuvmjKoS9ZY5bxLxYSjRgmX7FFSVyp9xrMbm8nL8MLU6XH5n5ZqBGGC2umjzFafpKwemfb99q8DKw",
  "key26": "bDetABEFFPMtM7JLwgZfV2uhru5azkPv5c3yLQCdap8UCKSxBQ9WCo1jdXdWCb9zGRek8DvRuR4Uwb6GrTjHDEr",
  "key27": "3mfNpRGAMs7W63f8oWjNDxLAgJstbYy7PrA7bcWi6LHafVonzaRLB4wtzpVvT5x1vLNAbEexKoMhBW9XEhf5X32c",
  "key28": "5CFGRCKv3ruXHjDz9DCoFig6iYFkf7YXJ4tCNvJWPGa9rK8qS6mAnQJJ64XN7HViQqfoksqqAC8gQkbMosFn8kX5",
  "key29": "2SUiyEkCbxdhxr9CH3bUjUR4eE2vcrn8ugoFdFizRg4gTwBiqvzPPuVZMwGALpxNCFuamNAN1niBAr8YqiBFJ71m",
  "key30": "3uiwRMA91Tg2myybsm6xFaSBuVNY57W2ryocpXgGkrso4GxHUHJHj7aP6Db4EQ8ydw1AYbtsdz9vMsc7ZpofzkLP",
  "key31": "2CN8WWZUXCQavKAM8vDJneP4zvBRH33nyBvLg7HCUX3EW6JKGPfR5kVmkXk2YfjsQ4sXabYJvk13jxT2bVPU52oG"
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
