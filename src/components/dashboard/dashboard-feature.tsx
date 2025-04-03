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
    "4XqHBpdUmjCgojPrsrqFstrjuzn41CQ2va6pYTJ3j5VWSJZoCsNELEwL76weEhwfgsFbHo17g6auF94rfyhqBZd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37fhKkLQAC33aHvWXrfC8fPXw9fp9cVbd8Aoj5ex8pqf6bJdvYwJn6VvoXrHhTEVDVQJRSNHig5rfGuFjympcW7L",
  "key1": "3JFX4k2xUfN8LBnJwXajRvJkCm8K1f94Q55DT22TxW745Btm187P6Nap95gd73ip4vY1njdPRNQaXUcaGTcKcSrY",
  "key2": "5tyPfHz5s7MinCbD183uT7eEkRATXSB7f4fW6YvKAWKuMVAsSiiZErCXr2wG4cn6b31AbSoqaVZ4NUKuXp9N2FTP",
  "key3": "5fHAwDt245GqqY1fPwDUwcPxbK37j7s84vMPbmG82EFpD6GPBQ3V6v7LaCE38uhaEXJwQQJCK1yeUCRoXerwH3e7",
  "key4": "49BrRPiEeQwd7YK6kgNeYyNufm6HMDNQgmf5N4NbN8xB3aipdYR77Rm6ufqdPGkjKBc4nUAGAQPxveu1adec7Map",
  "key5": "6b468VfJabfBLTMcPeu75yHNPZCgwPdriSd9dQ117FBjSDkVN2UTNjLXBgB4z4N6crGdScjHpmfXNKc3Hjcrrvy",
  "key6": "4Z4V9vK8EZaih2nQeGEcLVHVmNDigpMAYLiscp5p9F84rwK1beuBGYqGR2cAmwkKPzLmgWQhmNfKfAscUyVdehze",
  "key7": "3QwbiKhyRvfHSntZYxrp8VpXACefwtfgWZmxchUM42zXUvzX11YzStSFJpTpNG5xvQAVCC6Yo4x1tLnJHcKVX1L8",
  "key8": "4UtRPGhKLeQ7obpdJoJYd6V9ipMTguC3vwEQcgDac97mUi2qnmRJYPXLceDW3R9wuEkjvnV4cuYxE59tEvc2Db8x",
  "key9": "5p8N34GZx6HFqgWd3VPcKSTbb5JVKSTh4GnoUhNbRp3REPqPeRnBcxrhyPW79zpNoanitsACcjXHUQKr2LzECweD",
  "key10": "5vYLcvzFe1At87Ei9X6rGCsKjJTJCKyx5e4zNo9Vuom393x6PNWzL3dxSrSanCnzAgCTHvMauMWuz3pRHrsVNMsG",
  "key11": "52AJvsVpCFubtSLqQj1R6Vk9kGA7YCXrHmaGpmQwJpwsSrkLFBsxUA2MQ6h8yhHHEZGpHhPPS7AKn4i6JtRSJQXV",
  "key12": "4aXZ2YKWr55PqxXzitqViSooWjiNHzg3kLrAEdP4d3c3vcVGaaHARQKhXNCcs1VNop6NXrspzV9AryexiXEnJ9Gy",
  "key13": "4uPFyttDyLP73d7QpeZkjqrHuVC75YBPT5Za7AwUR8se4XU3bVUzfMrMrq9WHeVhpxHGJ4yDNoFQn3tR5eJpnFFm",
  "key14": "53CL3b4S5qbNVKvGWjBQx87obKRzcDk72zt39rEGyrMcBNYyTELAY3gucqfP4HJabbi5XQtRqM6bxLi3k54gnGWE",
  "key15": "2w1yDHpMBgwwcigRp5DS3e7KbQPi9aQubt5Gsa3z36jXYhQPgNSStT1mjBzXLdWPAXz4ui3wS1at7V4XVmUZKf9c",
  "key16": "m9eaphhrfYNLDV1L85cZeeafPKkBZuptSj7iY7bsucE2zLx7TQkJ4uPo9Ckt5byJNUN5Sdb9FzB5okbtkiha5xx",
  "key17": "5TAzDksVySX5xdsRK5X59DQH4SkARrU2scL9FAnsbQUyRdZhNEUDqfMRGQ1RytHg6W1i1RxaYJRwzGN4uPap1i5e",
  "key18": "VVGtNuGfsjSXLpSEDMmwdNLBVaQrQK9oeHymUNQUuHajc2vwXdrz8SGKCxeDGpayMDYPCpPH1wicgH4d8fH8jav",
  "key19": "5VL7Jh4oG4o5A8jaRPdNrzJH8jaSgasRHaB97Atks8uLD4t6j8cjyJFhzSTeUdhDVCigNTTC7FKuFVxTFQpAitv8",
  "key20": "5MVtVffG8Aozn1AC8qxAu6NsxzJwpDECrTMxTWa8T3nXKfZHAgtzpcvSoDbeJEQECwd4kckRFwEhzM5aFkmCd2rJ",
  "key21": "3GdUEKfQj1gUgg5NFkhw5bhNhetrFrjZnguwLgiZuwmft2wh51Cx73GvEhoZhWp8TsdtMqcWv4DyUeuze3rfZzgb",
  "key22": "Tn1YzwfgLZdsYMdPxDCZ5HqgJ3mNK8rxBKKfwffVbdJeuC5kEGSjeza7juVVom4ddvQLBByT2XCrYbTvgiVko3T",
  "key23": "5SW9Shqr4m1TgiDdT7MUsn3qhAcGTyiszLg3YUHCWy7NTE88PfhDuCGr8s1fjZvEJ8LYppuHzPkhwZ9iYwpKr15a",
  "key24": "5C1rE9zDKQvqQg8m6vYxvjBkcNB2uNdNbAxuW7fZhAK6vU7LE4fgnzWutmKe8HFXiLsLwtg2pj9obHtjK59YQdWx",
  "key25": "52GgWYJTnzqP53jCf8ND3tnBxBxrwBwQY1LJruJbemU6jDvUjhjFSr2XYySBrEz6PLqNztMmfXe661ws75xXE9c5",
  "key26": "48mZgtYAUf7AYbQTC9hWWXN6w5VgGdKnwfvRmnRPpsxVTz1vtFqpyJeEkSqBWYJbHiuG4aLS4AaGPaZ4a3wbf9j4",
  "key27": "57zFLXNSUMELCXQbkh12Xxu9q2wdWdtYZXXfMHp1ABVbG3DFLBQBypmdC3DzK1611mYPZrf1EAFQqNtCgNnCgUkD",
  "key28": "2MWVm83knt393HUdUJXzutsGsXTapRRwUaqSoan4B1ZE4r6397r8JWfygmmF5N6y5zsHcREwqBJPddteS3QjNNf4",
  "key29": "3h6CtGMZuxjEgy2pVignEaUNgUf92PF7fGwYhHg6LpgmCT69X4N7DqSBpaWPbTdN8BsDA36WD4FxnUHtgf3fSQot",
  "key30": "UcYiNUbsTAk4CBsAVvPbsmigEYEQYjsxFAHHTw8GD7f4bdA58HvRx1fkRreebQz4V11LwyyopdkEVFVX8w45Pzh",
  "key31": "2bTtRsgGu16DVEVB12cnPSynHdduWndrGGoUjaxtXpPx65F2dPESVML88dCTE5PTViahhx99fRhSBf7MowBhQSyo",
  "key32": "LNjGFUVBZ9ZCxCGqJ3fJRCKcZ5tSTjUcfqcR7iLC4AwPww6LYD2uHzfFFmVanabCexQNibiDDuiDmun9DWHcwWR",
  "key33": "3VkKPTFYX4EUAiHjTdvm1HkBn3Eg7V8bNgqTgmqu5sYZ3Tvuh83L44rCGwcH2Sfm2Gny1ctWzLZ6j81QMNW3nQM3",
  "key34": "5UyNJTgysKrziA1pL4scnLtupvWX6k5PpnEi5dMidPkS26CUvY5jJCKmhxNvUrSr66SSgepgezUELzJ9GNgBCdKd",
  "key35": "2A8S24fBRwTa2eQ5rvCXhoxM8zD2q5BmBj7T58DHtiaiYMYkQ3g2RB1VEzACu7pMDyvXGCmV2CTHAZFaYVUCCWMQ",
  "key36": "4PRojywdoS6qnYRvYUTB1NTMtVcWm2Ma9NKCwU8azfeHBoPaSV9414NwvmAHKhJHhwCXuRH3qZZ18RNatvc1oiBE",
  "key37": "2B5X3Zmmoa5qnAgdSGB6QVLWKduzYijxWBh3w2JedCX3MrZwmcQzLT69qHwaTthKs7SeCUGc1TSxJ3u5pos8JPSR",
  "key38": "3vUTjsEyhiv5K2AZioBKZjw2PLsjAas6Hps8cjsJskMF3rUkXPCtNif2pkd5vRwzJ5wP9hRD3Ac4YTECUs4hf5hd",
  "key39": "28x4aVdcGBfPJTHQKJ8Mk79xLmwTYH473KZW3vQWd5j3KiPgSx6G7ctuc8ZF5fwbWCy376fxUrcAzvYyCi4bEAte",
  "key40": "5FaxSdzESJiZRjFKFUuu4APZomLr1CkTkHogvmqVwPyKENDCd5UHj7QwumJ9Ea1bAKky2Ms5zS6RUCRy598b5P8Z",
  "key41": "VrJNmpHSHZGp7g42vjB4UVkRLrB7ZDMM8SoU9NwZFUUPTQcagva9ghfHELRH51dPioBh6e6Mh7pAZVkX2MAvw9a",
  "key42": "578SsjS1BkEJbRdGcWSQZzSK6CiW4QABPj3a4c8eV5vN8i638JHUBq7dESicHHczB3VoHZU4867tNfmW2dZ7gNSE"
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
