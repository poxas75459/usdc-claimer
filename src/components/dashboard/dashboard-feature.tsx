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
    "agjvE4HMbjchNLhnwmNFQRHwsjSC6kmVrzQFZ2GcVoq9aMcqAiWeLaF7HQNESUqLBkvRpUYiUH9WNZSyhRuvsgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k6ZtrRBY7dTFo1jdRxWyEXzitFKXp6UHog4YbYmLJPck7hvSZdfQobxiweE1Co75KzjQMTC6s7qYZ96QyPuYEJK",
  "key1": "5Mp2p7uBed1pQC4Zsi13aRrqrVR38ydHTeACQi7SRDA8XfYtiYZdTBdqbEEWjb3AXmFpy4M4rF7553K6zGGuhLoh",
  "key2": "2T22BAJkuKeBsyPazf1e1Ux6BF8SZW5waBwpauudoUHNmmW1VFbW7QtdpJHzsjmU7xY1uNzrAtfRU4eu1wADV9gz",
  "key3": "4ZFbTQTGMztM3zxfPdk1bv9hqoMtkGnW3vTEk4GrVB7fupmKMzcJtqAWLWadB1PdNkptvpEMYLQhbbzVi9SfKTrn",
  "key4": "4dizDvAkRuG39edsfNQbomC9iRRVBdoDY7z3cYv8z6c82j2K8QSiE8r4H4BxAjXGkxPjo2wpN9CciYoaew58mDmS",
  "key5": "5Ur5Hm5m68nCziaxomDP9fBBHTNLMXnXa2qP4bebuGg3TyiM2NsJE2KUxg29VWRkJGSQw9PxANQ8WY2XyRQQV8Gq",
  "key6": "4SNimf5Tzs1PNbEtV9YDtD1NirAJ6kvpYPJ2qt4SpEGdYweVvzUe54ViXoJV24DeofFpoZVXdoQEKTGyeVfSdLRH",
  "key7": "5QnqpqNLDCJmuAUqDaQW4YpRCRg81FXuufKJHNJtirv41hXtFJZZRfgX26wMaKLPffLeUeRxSsHMB7s9z1G2bYL2",
  "key8": "5xpuHsGogSmptSboiKS53XGksedA1LLM63UWdxb6tPKNoWQ9Mj17u7bZYUZXUZmxs8KoDTpFHHxCeW1p3b6FCCWE",
  "key9": "62wReNB5GowYqNES6Nf3pZRqy1m8DtyCgu2NQRFXFLmb8esAZP7rsTfpsAQcjmRjpKhSmCBYjmsvdmJm4vDsAdWD",
  "key10": "fGuNqdpCZYfcfYqCM622VMTRQMGsNu4BtGgy23jE5wkc9zdoDbQxLSsWVJARxzf1ziMp6tsiTqipGGWCZidF1K3",
  "key11": "RqPKWVeC4t96sMuxAMdHKJqY4yzJyfKydRh8a5YFBQDyZjn8S9UVo6kLS7JPbAkfF15gzRX26kKsW1ap3sVaVnj",
  "key12": "4f9Bbm2umSLai6BhdKy5wgnxA3chWAMCrCsg45ZDcb43RS7K6SN1nrZHbb6aPqdRQJxG7GbJcYQk8h2SzjTFwwYT",
  "key13": "5HfQpLxhX78daL7oPXCGsRSTQ32KjjsjxoyDyradKBR9XFpSjgxhqsHJzuoNp4fiP61zLymxEr4yKJ4frDrSRDhm",
  "key14": "2m7x81g3ZxmVhAL25zFeJShTP7JNbiAXCsXJMFuktf5Kd5uhNzFB3Dte66vHkCXuUSXw7JPhCwQuZ48eB8zayy7k",
  "key15": "4DT7xYp9i8xV5WnNoWJvtznwhmoGmYFdgncEZosjou1n2q6emm9PLwSdFvbuscTgKr2eyDkqcYf5rnYwPHWgVQTC",
  "key16": "367z45Xtdmkrr6Mb4B7fUu3vpRVuhbnT1k828BFbCY7BC9MhJN9xhQtEU9pCXRqRqLWTdZWqLdVqA2jtMZJCKktz",
  "key17": "2K4xu8Pp629qtWM5DwuNPQt7P34V6PowyyY63enQstEaUnKD9is73z5mk9GKAjz9MwYkcdpPqB79LQnX4GgAKSG4",
  "key18": "4eiPA7T8AdwWagJqDWfQF8LbWQsSxicwU3u4RebuTC4c3yUXMfziEnYcyX3pjGHyD1HrFkkYJ17nhVgqzdBHTdo2",
  "key19": "212EBTAJKxjHgcnRYur4E98wMAazk9bS7SnrZvGBkRUd5xFdh4xQ7AWjXKHM88CF7uS8mT3v5SmTvkQ89SXtLrLb",
  "key20": "2X1P2y4AtRHXjhE3fxiTPm2kAN7aFtd2ZSTMmmKLdf3jSbkp7186iyjL9cZ2BgVwQJ7KDVEDJHQgKHANs6jiymq6",
  "key21": "66GY4SMPzPAhUYUbXoNcjNALodWVrNZe7QXk8iqRxfiN13beKrknjAvFrzERCXs8uBbHMLc5akPE3FW7DFruYbXC",
  "key22": "zTtSZf5VQfv5b8qVSxnnqKjqdLJsZPbwA7NH5vZaLDaDhCaxV9vNHkNYJPi82i4z2ThE4BByEFPMZcRCzxU5N6r",
  "key23": "2p5ok2bbzNgvTiRGVvdynVNw3NsxqhxDm6R6jYo4CxV6K87kwF2tGAcjKNXULoNFsmZuB9YXJ6YrhweNAW77uEY9",
  "key24": "3GrPQWcK2omAyPDEVzGACiTnotXWQTUBom9A1wVTa7snKT4Xb7QAqMdiTBqD2DW3iUi42ga1qLaBoRiUo3G5fxbQ",
  "key25": "3AHBQXryKENJh8RT7XKFhkVjqYjRDaFJWdvXQHpiQjv2AyNiLXqLzMDeAzYshmXtE5cQdVVm5c8XPRRjfpEg2aUj",
  "key26": "48bfzQ7qAJa1c8tDZdy3DMMKUjcB77brnHT2YnBnT4BkXKT4BE9yfoHbp64m8DrnshF7qCVSL5nMBug8PvV1isw4",
  "key27": "tzjVNYnPmdoHP6ZHLSUuLDoaRLEj39o1L74xhcJ4UntXigjeQS1NtEyjuD2kGXfmFMjP8bNmysS1UKAjF38Bjmv",
  "key28": "5xJfQDgGmUTikPctZxDG2rx2DgkV9t8G36GbNvtFoKGZ8DBUEysMP83nCBSBiVs3JaWesHL6eeoomGv556f7qauk"
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
