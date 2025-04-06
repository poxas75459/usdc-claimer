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
    "3sAZC5mq7xjsBJrTdt1cKWjCJTxubFfxSmEPBsT3QnkLrxBTFzYHY6q3gU9i1H5ktWyq1V5BSPRQQhuHcybeY6Vp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F9qVLX8zMidxeVWkArTeYXvQjMM9wAfcsUenD3JRitNJsmEHeqFyAzxcf1RofSkWGWTPoQM4mFhCQM2gfpCmaLm",
  "key1": "2SsWpJj1r4yTpLfByuvcjJRedimN4rW5usXNF2cevkJMpD1MR5WVuXq8qGoY2YB1QNGsgYHZJNwre9nudQVWkkuT",
  "key2": "2V45NRUYKNk4wmDu4YUP4phvqyRuckSSLFLn8KBMJ8DbXfTMgGchwhkydezRxFh4AbRGXu29r2MK1wQUn7rT8moZ",
  "key3": "4NJ6BBNHPDs4xgdXkmcavKAPPL5ZbE9ytzFfG16dZwxNFr7TuiBf8VEkuKB9VbraVVMsWGcKZapGsZE9DGAH9KLH",
  "key4": "5rWR5tcMGUnBHJ1fJzfaFzVLohXA1QFo2SAxSzVSDVQetusxF2Usy4j27PT15qneYg9sM7Zie4gegEnMFj3kqsGY",
  "key5": "4tndXoayXEsuqBdvtSwyp75ajwWcYWqAJuyFCen9dioTz84DU9onihJLeNif6q6jvXzY5PFK1utiSZwo51H8S6za",
  "key6": "5CXmvqb382Hdi465Ny4PxrcVLjBZsdUTyLMXjWzVDsrqyfiUFreCHnxsNsZQWXhL98qbhThKQyrhQsnafSLL9HZ5",
  "key7": "4gVETm3kM9xFJm8Z7kAiRYTL31THZzjk1AbVUiAXCxojPARHAcLhwwEYtKSUi85LMizhEYGsxY8iFzQtyDi3WFM8",
  "key8": "5MzNwZ2agnGrSJjBHkFC69S11B5xjL2NZMbbcwjbpGHxUmDQnr9EuVxG1iFyUEr9HHNZUt6fuaqV4NUULkmJABeW",
  "key9": "hyVm2YBjaKYZ2ALgP2tFEjy1jVku8FYgoW75nH8P1Q3kopZHBAjWgJ4iMrGY5iSTxEkqUAwKu44YK7Lwy5aQ2VR",
  "key10": "1BzPyRBixXRLUU8koJJ4pjgTkKE8ATivDoXwhdpzsf7GC3DEfaX5fZ7qhqEd8JA1pd4YhSxvbv7PLeQZR6kXFAW",
  "key11": "3EZn2p1ZEp2orvgnG7VgQLMTVT4BNQXyGbaCGwLoumvt2WqTEa8JFxgv5NRsyCgtUXaPCT5zpsSZbm8N6NSJo138",
  "key12": "3ER1zDfdkiQxubGqG6gd3KRZcwLpVbT6b8LFqhKNgv8NwzTkZ3UtvisExNRbgxmGj3em45RxuRbi6VCdBJQZfqK9",
  "key13": "5zgt5cPMuwQSG1D2xd2qUiQs6zQJbCdQmMmzdVRyqgjXysTN2VitUQK1eUJtBoGoDTSJcJK9PspqnMZkgdwssDbp",
  "key14": "63dsPvFNTu8sStfKJY79o2re3xBi8KHc2cQy1pGatH9S1jriwPeuU2TsbHihCo2HsSD1R8JrZq3f64KYASZxiYEH",
  "key15": "2fRgVnSZwJRasdNjT7iy4uEKzQUCu6odnSsQw1pCCVRxcpmrHvLgEbGCg9khuktj5pnUsz3uPxpxhXM9ZBkCVj9T",
  "key16": "5Lay9uNfiuuLQk4kPRDQ5DVbrFvxbTDh7KCrVZCi9AhnDzVmUCuqnDRgwjLBTZ6jiXvwomj5M9rczgTV7S2PZdq",
  "key17": "279wkC1HPf7jhNT2YPcVY5eaEFiKwAMehB8G8ZJcP8m36eXrWvjyNiJNWnHJXUHRC3TTcoDEq1TMWiG14is8hmd8",
  "key18": "28QBPv8iqKDc6VMKFjnB2ZN8SuBStTBdfMhvkQzFVhS3jPb7NdwJKFoMm539pKjLG8XT45twXZ2met34UYEEu3Wy",
  "key19": "2fhZLzgJgbuYNCmx3NBK3jgfybgBYVV3d5gaozpzLR5hJMT2BjfFEUUobDqa4AEAHGQGpCuNUKTQf21caqVpKd4Q",
  "key20": "ZAku6yYzV7aCZmtzJdRkCJA28yZsLStQRLqNQ2fdgZqhoummpBkcJNNHAoK8pauyKau2PxjdWoUnJaypGhLSCar",
  "key21": "22XkGMuU3pJSxbA5cP8vFKFXvDpHdBMeYBzhh86MD9nLNxGsPAQq4gBmB6xY4y9owohzWAhuwiGke4qJNJ8kCq33",
  "key22": "r6CkWiPEv3EvdisKHaKoHnwPRfgFjWoPQoLBTgJeBHLTYEmbS2WLbXjVtVvqUpHk5DvueZzqQyLtvQ1sHgEYSd7",
  "key23": "kyHRNvaQvXVLwdfRZWqWLQqUUkezw6joK4fkhDBYAe3zDZRJwevhRv5Z4Qb4a4QsjVrqMft94DhNdZddDz4BpMS",
  "key24": "sVm93Wj3upQDy2meBiwVxVqByTf4aCKkLBbZynK3AAbcqfLuY3y4D9q1af6M2cYttymo6VcNn62HHxNV1famizi",
  "key25": "4eNcF4ccrA6EhdCPNvW7rt1Xqx2fXaAaiXuWLUv3qB9JRqfFeRPuJtfzy1GsZghdrVPYdMo3BZ5d9QcRhuPuutW",
  "key26": "nYqHceN6KQhc1GjpzdTLL9ohMyyjdGxZjQPA9u41M5yAMN3FiFbiJUdRLmQCGtyjn12gYPfUXK6TzJJNrkNbNiG",
  "key27": "3QCJSkJyxeeKbXCU2wbbg5tdDsWRaDVqTKPxNiAZTiKWoFxjdYFta3p7Meu6vrX2gaiuVijR5uic3gqWjwHE8Qmr",
  "key28": "5ck9UN2pihMLRUHNstrbgyP8R8MsHATo7FcyqRucwTLQbe9ea2HGw2oGwDrMCqhsrD8UkwtLsuhiZRvYyLgQRwaK",
  "key29": "4YPvJfbxuXx1oaAvQKpbsQT8zuYk6Q1qroaWsoeCfK7B55yvyFsfCLc2yNxFVJz8pwfNJY1Vcp3DGziPTXHg6sWb",
  "key30": "CDnZnm51eXDEs9CDiDAd7CTbjaCZrJU6eKwMtFkuwx4ZF53FRwWc7QLcBdoAWoiy8oLetsyPSF6S6NQ4pfaJsQD",
  "key31": "4wqVBgHjp6shQWQ5jzQhhgjpNXqLi4kNrwosJmv3mMJn37Vk4NNcLe5vk8CPgsVjVLTE2EuPYd9RRQRR4qLobmCC",
  "key32": "2HFmx4F3vJTXBjFh3jqev57Uq6FkgqZuEymgUTAD4X29Y4V8VGPUFqCXh5JqmcfpdDGp8wbZPGYNhphH1WVkiheL",
  "key33": "3qkTMPEMxTaADGLAYg3ahPb6nskaiAS8nvvrFBiTG5QZaKr6jQb1KNELoksBevqCUv8Phz6deGhPrHsVjVgRTM8g",
  "key34": "PAnkQsbbosrRjeJKExBZajMLkWYhKYnfgDq8DSGNeFxXJLLG7Xvej2Kw3nkwy4RXGuBN2oZYxdMBenyw65PpgUk",
  "key35": "55XAcptHM4Ewbmgx7yriSub88jtap531sfbEj1Q1oLwvonRgW4yh4GHJPFVpKvRK5m2kRrtB4G9DUmVX4NgxRQDu",
  "key36": "2yYHkbffQ9brK3wYfpS4cpjfyYbJdcSDzdHignJykQTUTVh3nM9HL5fFFtoWKEifuTye2nwnvvkg9bSB2BVX6b8b",
  "key37": "3NpbWfxnyRQf7YBe4ugR9Lycg5bK7cpjSQQNpHkNc1v2EMTTGEnsp9zeibKJvGCeV93bA8mo1bt8gdBV6DGndq66",
  "key38": "2ifbgArM7UDd7EpcK6JDcQ1joJQ54hPbxJGDctoSEKiN119h93UyaUqCbcfgpMAtjucgVjjmbS1uWx1jK1AJzKrP",
  "key39": "5t2p8khRXv12otwTMkfpLDdHXkQvYNrwGwhEhbBSJrGyS11QLdaELPz3Ffbn7ZtMt4vdDeUnFLax5JpF2zhiMLCS"
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
