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
    "E8x8MAWkoCBdMCfffYnUSx6hBZyXAZwqazgFHcPPiTwHThNd7DQwS1CZXs31Ukm6dw6PqtkqQF95LXJEuka2gsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VrDFcsujNnbyjQwdUUYM1kEjgbiFu32q6BGguVvUoXKKRe8fZViLc5NkphvnU42JkYiqKeYjRHQtW3KwMr5FvvC",
  "key1": "2Zw6DdCum4Y75yndNCQq3xwEkcy61JYkh7XFghmZHN7maoWXKH6wfTJ566CjWiG9QpCatCPPUCZjDGAwyKjd3i9P",
  "key2": "3J8azUWUehrc63RHJ6jWgZHiJx3rn7uMvJRv2gvy4xXYeCjJ894bKtqGHX74YvZ5WdSaJjBD4Wfpd4ehf8tvhVMy",
  "key3": "4u9hpH7PtY6cjevm31ESFTMAyGgNyAKfNWfbFyfYFsakj2aSnYJERs2BEB32Gxz2zu9nn8HHegwJmRb3ueGq2fwa",
  "key4": "4v5SN7unrpcodQnRc6TPBFQMJxwKvbCAmVWkAZF2kKaR6E2vn8nzox6V7FCi99jZGXA7mdZPjU1ob2WQ3JufpRnV",
  "key5": "5JcdvUBbqa2vx96mfHLjgw2eRrtzxepKv4QzYYkSAA7httuov3NXHTZNgtsLdkzYBLnurpnviS9Mtyuiv77HQicy",
  "key6": "5VFbwE2jCEQ6oQPEFco1BWyRUuEFr9gsGo7txTmQA5H1Bi5AhzgLe34uaxMtmBEU8WMGwYvRgBiQMyWFqRdBA9T6",
  "key7": "2B6yAgxMJvqm27gncdFBZwaw7yRRvHyDG424YvM1UghhfZjueZnQ1CYoysHXquDtNvLrTHsdjdjXd2nKyDxRun7A",
  "key8": "3C7VLjRTtBcP1jjfq4FKTzNhRhZvNcY5re5B3t8WzgTavjiunzhUKF2VhBXacvmn28ZXikuii9s8cnhfexqSwYaX",
  "key9": "5e1pkQ2ZxGCNY6y4oHBByKBRdRyA44DC2qHAw6LUviHCNQTderETCZTUwyy6No4gwzrqegW8FsGkrfkPT3g9UKta",
  "key10": "2kqBkTtneByvFthKXgM937ggDNqEnxDLtnPZc53CprcVg4UvAoJrmdTpTAXdyNxRJFgVCYdM36RYfadEoixQwfhF",
  "key11": "5Lappo6WSd7q2UBDSJFupMSAbyB5H9NKrGgSedauFEUw9WNopaU5onL989RWLnPuZhZ4SboVz4YRAZFk4Dbk6cU2",
  "key12": "4a7wM669rE8siD2F6Qpz7eiqPYrPXaVGvZLSYima5WmAvwpZQvxZRTmgDvT68qGpufwmcjQHsxPx9uADP7n14AXP",
  "key13": "2Vq53gX7D1ZaSxbsPKbA8SFvAk6uDdTSCbW5GWi4V8GjEY4u4wVt64eMvmDWmwYV77ZyWrkpupFQGqhifSeEQrbA",
  "key14": "3u9cJc6Ye3Y5WeEAAaanFA2d9cRoAeGcz8eVqHyyauHJZUhUXgvmtSGUE9opPhkPBnhC2CVEDMKhvzR6Hx9FV6pg",
  "key15": "2PA1j1ArR6ev2gipHJ9AaGhq11AXsaVpyThDpXkUcTWedYv7kE1GHmgqLnuLRW8ASUVESyN44AA6hBbWTH4jVnGc",
  "key16": "HzHuowpU9AzCpcLVEGyr4vSFtenecCEDEQioPAyGyMQCnk9DzRbWVZAVM1kX1LYex9RGu1L97F7t8q4Dii2mchY",
  "key17": "5GhFt2HYWRi4YPpaX4C2YUBZtQHctFb2ECnYfetks3D9waWvqqzujwATuKeLFrbNz5CamjLaWR12cep3npbREw2b",
  "key18": "4pWHmyimawbs3vfzkkutR1WKa3c31YdaW97fCEpQqBfCH6uT4mc48xtskQh4wPgTJjbjf4UiPxUDio6cTk6EXBSb",
  "key19": "47tJyBJYVH7XJbELLA6iHTj3jRsLBFU38rKfxaYDdQSaHk5juNwYJ5mi4mk7HEvLHEnjyvW5uVwAa2pnVC6GCt2B",
  "key20": "5SqDFLjW5YGC9BUaJoPAgWxy6MitnGZNcLD8Z3SuoDRsNJcQycY9EfgSBAnT1pxU3oMdqHrUJUZtD7jJ7LFoqf9f",
  "key21": "2Na3fXu2AAd8ko3nusTBjCSN1q4sRpZvrWZBnCjJSzThLgVVfwuXpK7BDHefY6HNrrGFTxwwjiaoouAC5jMzNzq5",
  "key22": "4JfLRh3aqRvXjgddPqjNYphrLBMkcguzXCJjbMKiXReTh5HWt7tQS6EpJixNBey8NQKhPKmcmZcBVWfXBdNquojo",
  "key23": "2Fdx4Uvm4Ymgz5U1nn2bS4XQ1ngpkLc9dD2yRUqkmXJFzzn7iMdJRLZGRXwwjywYvLYT5GmXrqFxuDYcwJaApe7d",
  "key24": "5vX85K8KHVsDyEsAk5h5Nyd8itwCAnVSwWjnpSKPywq46hKwMzFc6MLtTGWdgPSdNdqd9vJywfuDXfDZ7gwBG9qX",
  "key25": "5ktKHLQiqghBDqCd4HpikX1Frx8EMfFj3SGJY7KycLt8aJR4W7fMvWndkcRgEpwZ7BkgYiC4DWNuefWkZAaMrijT",
  "key26": "BAqvkSHFY74kGHEt5KCG3mZkqaxn4YN8FbgzGGCVRQDEYuYc2BoiME1mb5D4gpMbKZjzWF5gSmwwDNufaFs1HEz",
  "key27": "2owDeVMeRZtTU3QW1ogAqeaoDwbQyAwVUZjmPevBNtChTHtMgiVLjHtiqsTvWmCyM9PbnmsoSWYzStBygYzMviV8",
  "key28": "3GkFcNAd6ATLBQEpuPPiWFoKEXmT2iGjrEUjvcbVVEZonjMrfxBidHpZtpo5jRRFuSfdSbYG9NdmoU4qPtrTpQ6M",
  "key29": "4A2T7GrkJHj5Bby9FiwEfWByv3eP1b3QKKHaAK4FLz3mMY2w9bwsYXgKmsMWSmDGqyrH8HbGAoEN2SFkAk1EQ6T",
  "key30": "2eJvt5L7Ak18erjJXBLAQ3Ko9iHcqeuXSJ6aTS47uHPJa91NB1jfSq42BN1UyDCdWDxLL8imFNJbGUqnFCbNNy9C"
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
