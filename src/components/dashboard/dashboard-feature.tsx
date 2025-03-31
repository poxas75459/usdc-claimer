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
    "4q1jaPG7cXKfsG7jKP4VjhTAFX95LoqPkfmSu4DLr4D9wVmEL6nG7JdaGpCceEzcd1qyd1mC3a5rYWUdFqEsJqtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eGYF9GvDjGY1aSKvDbrGPg9MCxdLA1MPBfjamkdizw4X3aNNDvV1jMLEjSVh63CLgQUjpXD2EbwMf5qqmF8J8S4",
  "key1": "ZnmjnTP3b8fJBuKmBahuZcb81cYaPvbDTQQByRGXcFdW7ie7g7JQD7RU5mDHGTjG8Gi5dL1vStxskT3uk1ubHod",
  "key2": "387LmYpgZ7eZLxYkdYUKjBwvnyMdYa9KJiq6boVvRaUNrBUBVy8rp4QSQ47vnTLwTX72YPFwBGSCqHWSmBKNXY6e",
  "key3": "56pHWEHfWEaZTHmVTnYmorPxWioYDXeWkLUrqSVh3B5MYb1n3dzgNFRnmNjhd6n11zgGmHHCrCUJa5M3wuRbgeGb",
  "key4": "59yJkvyTt1mPdzigC8AqNzUXP3zY96Hi6fmCE17Uvin9TaLMxb2C9dus2X4NDFGbo8M3VYq9qATGYwkUeBDhTEMi",
  "key5": "5qH8NhUyidtwzVD4yGxwouNPkyD9qsyvrevTJiLztyy3Xu7qy4dwCjYXKrcRdrZdY9EfijMcMshmy2p7Z5cEhBYf",
  "key6": "3Ca7R3dTsu7LiBnHzsq9q4Vzy7Dr2JnP3Af4uKw5fAf2vfJn1SfLJkfZU7B2hdjWsDBq4RUBzdykFKWpUL8MGD6p",
  "key7": "wtVrfywCipf9u3BuhwY9qYa2Rj6mhZqWjAKxhf5o3CvntxonjjXdwvFsm9dK9CEcYLpfDueLC4PDSw61z3exGTm",
  "key8": "3Nf2YaoHx91Fg5wwyoxXuBrhuiMkbzK5GvCkNRm92EJSAHZqi8ZYXWq922GZqXv9qsW4S8begzAMHvobPM3L6yZX",
  "key9": "5GcUBTEJUYW9TSDkiu1JGJiVnqQqzLpJz8Tx4KNLkDaEWCyWNqnBqRxyEYVXpbsLYN7AdYPa235vdkEMwKY8kEXo",
  "key10": "5qK3h8MYxDH1K8oR6qihAwsWiHjHBMVfbnoKtr5Tjpmyz1EVJLwQuaCDEQDMj6cknFfYWY2fQXbGvjKNXL8mPjDr",
  "key11": "VB6Bs3VwDwSinrf8SRLiVAehx5N5W4y1usG1K9ffweC6DomzGMbWDyeL55TYTT36VtfEqRr9PYiVkHF4PgfY1dK",
  "key12": "JRfKfYtAMxrEDibNXzZE99G6FY9adV74DPQpwH3d7sQhmhfKHYPNTMcXSCDADCfbbN8pVgVVumZENCzcpZfbYDx",
  "key13": "5Bikf3EvqHnogawtoEPx2dAGqa3wzWx9f5rUxhTuJbepgWKzLAqzXXyoCMGgsnM6ZYmsRJq2Ew7vZVNaXECCCY2S",
  "key14": "4dVGEv7P9wfrCoNAkBUuQh8FGd8uU1noSpnaCadfFQnYgbvv5xRHncY1NEhmUxuxtPTkcLrgoL5bBuPv8TJcExVk",
  "key15": "2H4LUZwNGPmNs3ffqLbULXQkJRwrwWufmgARsdMhvBBFhvtdsCwPtmVwyjL25dogbHVuLkSAduV44iJinsGNb53m",
  "key16": "3Paw7mXxK8dMkqCewvijtTidniscwHfphwzF4NWMt64PYyUdz6nB6JG4JF46fxNSABrneNdhZZyw74Cz9j87d1hT",
  "key17": "67fky5hiT7JnnVXxWxwDiwHJCSuSHiSXFgqprSNYgoFEDCFP5WGnKwpLpyzAqjXQCH4HvN57SMegQ3TmZbvVzXGQ",
  "key18": "5ct2qf3BsdWacZtazWYtQ9UE5wMjnCKkZCrW2rSB7SvJiEqMTgSMhvbgvfa1ucYGzn8yLs4nA2W6KgSPSEHmA9JN",
  "key19": "67ZLHqJPnjSet5HKQ3vY5qjJDk2EdWTgAVNmntHnGvsRVibvbg2e8EY76e1g2uhhTt6XJ3hmb95jdXYr6LuumZPn",
  "key20": "4GnusF68mQCniA9eD1PF8FVjVZryKdDJUvaP34VPSyP8MVp6cKnvLaq3pYbqmUHbE7BkMocGi27fGMUhj764CAdf",
  "key21": "57xzJthTEBRYhqyZ5AcneqkPUVG9Y5k6Cf7nmYEVJKM3ZLwPsUwfqr7YvjAdjRTBKdJV61e1s72vBJMiJGiyK2tg",
  "key22": "4tawbuLEFEmkVU6jecXqiWLj5wm3QZTsiCMDVGqaCKvhh5DBbzFAa3V93FEQhDCYfMT1bm97ArDyv9T1N7BbgZJq",
  "key23": "4LNkdnJTxoFXVUcUVwYw4in5JDzTHVJotRQ7TQWHB173vEEUBWGAPCC8oBfvhT4sRvQAuRK8A4pfygWfr9eYrkc6",
  "key24": "5c5t3zExAxKBA58gK98tpbc4j96PhWNyHsDCofYneVtJuv4XAeBHRWWALjvaNVPceU73EChr5nuEJbjDtGsJC4xd",
  "key25": "5MA1pLo4djQc5nPagRKNerXWQDLv7dqxcbRf9BLiY9pT3ysPHvf2d32Zx7JwK72XB2cXarar81sWEdJe7UDSLz9k",
  "key26": "H2Fnw8Zgmo7aC9sG9Prgpp3cvhESoTSVg4CuF67ChuJ3JPxdjodZHwhWPxwUPwsrBZyotfQrJibJUyp3dGNkabN",
  "key27": "5dVtajW3CWkSNsQWTaqR9kV2EXu5EKVyjm8sw7vBfCRFELcVj8R9hmrZZCSZmNSGvxUNDZtKooNjWtnQUvuCcsWf",
  "key28": "3jhnLLRoVmXeTrDr2YMeHtiWkZyuEBnDaRWvLwMGwX7jHYKBF2fQmGsE317MdmSf5NUX8Fs7dttmvrbKk2r6aAJN",
  "key29": "4agXVHn7SxXnMYRqfuWmwCGT7r14EwoYsNc1r39FJGySDgr8oKRozXDb6fCmJnxy4dGGYwcsaPKyRxMF8J1dQpVe",
  "key30": "35bRp5NDy7VoRFW8HSKuow4uQFH2yTtFWSp5isG8tgvd3hKU6frBmWEfngHgS3tn68qhuuYDJr438i5LTVFQqy6M",
  "key31": "xzpYZrUjU26bi8mtZ72UfxjuuH24VujspJGJAGp4zU6ALj4NT2buQqyBBwgKxUB1MCctvtHnU3m3YQJh4kLYZLZ",
  "key32": "3JBR5R7cYGDLE7rwqAvRu6ikq4Q7fMVFizuBa6MwDmUZQwzW6FgawBQyH5qQ8sRjMUUPxj6HBJxobCm6t54stDTo",
  "key33": "KhT7R2SvWkjD9or7Lse1AKwUtGtnZYposnMxz9N9XZsYqEJErFdkQrGLA9mtvRRB2i4AhEUnXm5op2zovEuasXf",
  "key34": "5SEqCGN7Zvk41nkDMnP2jSkirm26yfCskqWZ8BPDV1AmceZTptLrdxq73z4GGWMF1PmGqX9tG4bRi3vuTS7cDPuP",
  "key35": "5N6Yuf4mKHqYCDftgkcuiyP4UDDfnJUFyaQTmnxRb53bEqoagzqJnuhGQQvG1f2XxK9jjZMDpmU2Jo8TzXGpbvT6",
  "key36": "EtfUsbAPu5d8KpESgQXrqyQifPqsrqEuS5zG8CvicUPxXf2xgXMLeV6qbWeXwT9NHQvVRFLn5VUwvFTXQXaFVSe",
  "key37": "3U2zRYzwUFM8UkgvaLuiZTiY9Jsi2iyuafKVJMwpVJYXBw5V3dKi4A7QQ2WhVjwoMeJSfQZ7S8wU89idMjYrjTMf",
  "key38": "2Nx59383Ga7BH79XjdJAdN167BCunQBDK9hgosirY6zd7iurKoM6ya5eb3e5MGNaW3meHgUX1dyL8VKCT12zsAXW",
  "key39": "2xT4PMoR2WJEC2HLGGsai8vaKEnqsDyzmDb3Ff9Eeqd3FVsDW6nMzCjYRrEabAZ5Kuox6mdDzJKzkAPmnSrm6k5",
  "key40": "2mUVJiBLdS7dB8nP3tChSo3NBNUc1oZTBvNqtzdZx35VotCh8du4ztZ5c6FtAwmr9HqLfAZ14oZFmEECneBKrwnN",
  "key41": "2QwMFZmq1q5uVaJ6w6Bp4hFyYoUktSSCvCxQXG132kuAnjbyAG2pjUsxX7qoD9iDp4JTKnT3iWEnKKV8RQEjEfNB",
  "key42": "3tg7kWA9JL9xZiaHpu6ff8yGWweE8CeT6PBrrXtav3AzPtm41CeQrLa5LoLVqZu3zzbgsvodNMFFhmV5ejazeAEy",
  "key43": "4V211uZ7pS7CFaXyStHGVWnNgLLGWg1k2E7XB95mR1JAyL8Fv5Tds5MKpFBD66sm8j5D5pbptyf3Q9TsKWaS17TU"
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
