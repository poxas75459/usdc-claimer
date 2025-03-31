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
    "4BWwxbQesCbX5A6HKnsUUfNLpj4tmhwtp1Z4AEscUxFBwH99PfKMqCHuy5FJFChrcAuhL5qeutFjTucL3fuWkVSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LeW3A8k5rrc977pXfCfQ5VBvEuMot9Q8GzGDpvbzPQWWvmEMu7KyYqUgTrPDf1UKGbzCKqwvdxq1udzue8MRFYZ",
  "key1": "56RT17JcFYxpHnuTRL7s9QHMFVLj6rqVpeZL1D9gmvfGDUBNDAWPRk8yswU6rS5uxkevhCywyPMjuDjgXzMXULt8",
  "key2": "2D15s7ZX8CgQnevu5qei9Rp6a8noMZ4AGLm9YMkuCiBhnpKkbPvyZn4SgC5TxinnmDPb5ZJD9bJoxVuRG7r2wjDe",
  "key3": "4TdqCMRLJN8LPPV9pXxXXnY1SzPzq2oCupJeB5fupMKHQKTKWh6wSwbF7c8hY2y9LVm3tKUzUv7cDoGqRGJ9hijZ",
  "key4": "2PMJRqgyV33LP6ji52kM9TV3J1PzwvKLGeA3YmfEUSYuwzCmo93CouCRVKvjzU6yeeR7ybhjJhm3tWvrtPd4ieQS",
  "key5": "4UVTL1ipuDaxzHDcA6RKrLk5fQqtmXHvnt2KnWQzJKyjdtwghbPzaj2YSusLW1o6aPLrkaCiFzt2sqZMgF549dtE",
  "key6": "um9X1tc1twQDTysaXHmKX9zZyXkqURdyr4sWq1oGt3xZQkhkgGKY9jwqerQHW1wf5QPrH8u5EcEv2C2xYbisram",
  "key7": "hiLvpuCWrCGraqz3NuD5nGLYtb5e7T9wQpYsPojf7DbmUJKpu9pYsdjKVCCJEE9QNenL5pTyuFxhnpem58jeK6F",
  "key8": "4KEwkn5wcEUteFNDXBR53eT4mzpGPQ6gBpkV3qoxc1P83Fbyb4bh9C2aLzYdUCxkkUDyxtfxyZU3WusNehZa9Azn",
  "key9": "4z5EShKRyRgRxFuP8t6T1SVVZh6pZbm3YWxVhXEXPqYCHfbCo1T2Q6PW67bckgWV9pC7CpuuRcS6ciamefPhYTth",
  "key10": "692YYbWssWZtKQQBFDC2pTcJLwgCstB3JTosyui3z1pK1s28qLRbk5t3NtLUtMjd1JHaxUanwwPuZyECiCeJzbg",
  "key11": "TXVjUKjbHnSo8nusQfGE8ncJ8nnhQxhDQSPeCLyrxsVNdRD1XrLXV26eW8UreYsT6vk589XpXB4DYKZeJ5R7Cyt",
  "key12": "3sCL84nZG5miCof66Dhhf9HjVmotwQAhF1GWP7bogtSNMQdMCfA9nFfi1T5CWiYZ64qUQYe7EESkSp5N98D8nakY",
  "key13": "3CARvSZbMYD6JvX663uG1r85r25jcqXZk6a9tjtPnRQ4sv3Dp8nuJTakjGApCEKTqKF586VbT2yY2cHfcCMeKHrS",
  "key14": "5DsDLDmKZ8ATLogyN4MBBv8Gn1r5GdvG7dSr5gnKErcxKDgCp6uNND6EtHrTmccZoQ3Ngb5CszAracpTUw7x9aKx",
  "key15": "5rZYvkCTxa8YQpuyK3ZxXkcc43y7hUpAMx3BPKm9B61cyCLwnaLuyVLq9BAAR2R3eBHvtsgJWdeGRvWAoqFct7M7",
  "key16": "5wjPiAC95zrcJnZUZVBhwnnsT64pb1TQNkJj2rgAvSN9afZomCq5PbyuCXbySWPMQLReYUjGP6sVAZwH3kzySir",
  "key17": "2sQwru8fCrZPokBMqQQipRgorDbTPxgG7DPF8jGB7erg3kHMbE6hFYoZVHfjXdEADGj29DdWFt7ou3mTRFegaBVs",
  "key18": "3yNeDuYXsxz2QgNP9MsUtpy2HPpCcxUaC5qGS1nKnyt5YauhdhX7xFRpf7bMhpsZRo6E72iAhTdyqNCsKfCXB2ci",
  "key19": "2Q36Hf6NREtKd74r9i1kRyBiZ5UUnhvcSRG8N64joFAUmovFniUXC3viYvFFiHA1pF8X2yfY2WZ5qKWgQvcdtwHC",
  "key20": "2DQ4oEt8V9Bfmn8A346G6ZVAqtyuPmRZdrcTUsBzCX1f9DYLYhrZ1sc4kndKUrjZb7ErqJ1xgXMhMf9om55y3LHx",
  "key21": "4KRfA8srSTJj6jeWTU83yYy8soEUCsJg6F3KEc1bsgMyKVjypD3hcEBwR7xNoW7UfuXR9VktQYyTjw5XYNWx1YB3",
  "key22": "5PNQ6gTkHXy6hKSiLBqGfkCcn2uqqCoog39KnvnTrZ1Rxjddry6ATMX9UhoWtv3jFDNvnui6teFTUWahtRkrFUd6",
  "key23": "sz1U9LoGUQ12neSKBMz1pqhVqvuV4SUycq1xN8NERoVst9qeULLspRC1QnwbSAEQHFAsAmLjsvWafPMvxLLcv7c",
  "key24": "5KNe6s6Kpp2vECNWCzptwCThbho6XnkmkXGUrFPomMFxt4M1ErzqXkcnk1mMcDdwtLsex98ziWoNGkapJtcSnsJv",
  "key25": "28VzttXFvFKTqWB6JyxFQy72cmeoMWCqM7ir9rzj86z3ZXGwo5HDeH9NqGoUHyyu6LUNym3CJ2iWn7nM73xg7Yty",
  "key26": "2kn7PWN668s5dnBu2QYabEpvtGUPEqbjZ7PmTtRxckr3WLRjGmQ5CEtPciZndwLhMAHMY5fyMmKcNh1ywFRv5gct"
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
