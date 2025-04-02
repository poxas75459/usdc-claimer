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
    "S2LLQbhxKVN9qFjFqZVcxmZMvD2C8o4mtjzkpgfbnGSoCVsk4CYroCqPnYuTYAwsJcYAGkdLaaDigdfspvtucby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VfTZsA7ovtNMUzdfgdtjgPz6jDztAqswqfK3xRGpxXkkPVLvcRECk1AUjecaWDM3Mv9itmDEBHVqUdDynGoCoT",
  "key1": "5TWxxicZxx17HU9bN8hE5G9rp7r7uZky89evNNkKh3K245FvAF8dpwFHBVUqxkSZc5VLzSXZLjkLamSFgxfLjC4f",
  "key2": "26zDiMPMhohZwQVYwGUvSXXoy5i5vMu3BNKpFwPuphUQziy3psBceHepprYYbUW9bixvpXkSynqYWANTtHUZsu61",
  "key3": "XkMvdZWsyAzHmRqbSGryNdTmxk73VE6L4UxpFXRrX3xZ8cHyGRyocGoUYgoi91wgyDChphq3EyMDnYV2Az5Mg8f",
  "key4": "3kWdpY6RNezHS8S4U3z6NQFayUf5eQHPMoA1k7M2anU29pqKhMv9oNthqRqbKXFiZq3ctMNt6H2WtcCGociC4eXw",
  "key5": "57NgsWSZ96Jwbz3oyrZGzPszB3hMZnZ5e2skrqoEAXWsiY22EfTxnXP7KsoeBJFExCGBYLY2w1Wzh1CQVhBwjD2D",
  "key6": "2Sz1p9uUKvYay4RiFFuZzEVh5umZCHAAcRrmXoa22VyExZJ4FHRMchyWMLS1ZEj4Zpv6zRWcXFEU7p4a2QP25SPF",
  "key7": "5kPM8tp6YhvNu9cTTPBg5xScPDZbAsmKMqzVLXxwXXJqcC2zwgNm4GyD3ZBev2XN7UdyKHNAjyHqPqmsSJMVXKAV",
  "key8": "sY6Yvp4myUzC8mXnYf7L1Mqg5Sh4c1RixxgcvjgTf6dhs8K9NQh1Av52DqL8Q9PGFF6WTRZFG3KPnuAASXXA7sE",
  "key9": "TW5W8SHD4Mg7FyW9tQQBqid9EXXVApE1cvw9tp6stEreeW8SEwqRdUT4NH7xPTJnR85FM4d1t7HtCRnqWTEbsHz",
  "key10": "2XVBjQSqULduMFmtheFQgUsUjJh7ADKF9md95wuBC3o55MAiFWuhitejwXngFqn2ZrBFZTP9GV32zubjkEK43Rxh",
  "key11": "3cSKbi2ALboMYLJxbRZYKrfzSMNLH5AyRHfM3YpFEUxansbJiwUHHokcA9fPkuZ99twQFVrEzJB77T6pGZ41X5uf",
  "key12": "3m8yZ2DV5rmS5QdsGJeYHXvjEyp81LgDgXYJZNPKazdiasYnFQNWDR33QXKLRUshukXB7wxspzv9SQuAfDFzQhAF",
  "key13": "3uWxkL1kVY2MaxBAx4MSNGrgqPiUjt8hJDifwRiT5pya7DbW3Hnkx2DJNqZBs2rcHktGxYoeUcdi9sAbbpapJjeS",
  "key14": "ZyYzeDz684rWLUJrRsp7wB2sQxE2MJjJU1JVMEw5bW4KgVyhsd1MfVF4tpDBgsoXjd4MkN7q33ersXxe93iPem4",
  "key15": "4i6iXssmWWA55ytpY8h68wtmugt7GPCzs2xe3Jo7Yqq2j7zV4eKyxobU5S8pkGNGs6bZ1JK4MNZEVydqLzv1EoZd",
  "key16": "55baeX9zdnBNkA2Zg5rBgYaeW6kevbP7gShhvjy4UfW8tVjb4R6FipUSgAEJmeW67d2eBee7vJFByrUA1JCnJ5DT",
  "key17": "4JEUWQ83YxrKYW4iNvmH4SodhNP2hBMWMJYFURyN65X7i9umEs6ftUG6VPJEb8qBHvCfG5weFhhT1XvKot9o4unm",
  "key18": "WL2qVbdkbb8q5HZdF4Z7nxbqrkPzYdpEqX6n7vePzGS8xbyYQW2Nrum5WUYJ6fFFog7nBnAX8boKtRVosJoe8u6",
  "key19": "Y3r5ogPV6XuhHiXRqD9kJAyq1tmCgYqNTjeFuCTN3BR2EhzeqFprjcMQWdxaVLwohpcsE5EQkHNAAUS3bZ4sdEd",
  "key20": "3ePF6otL1QQZbffweYHxceheikMX3QZiuzys1XkiKxWmw8fc6w29zuWRHzT7gYTB2oAPGpM4vhYNGD2nxj3c2g3k",
  "key21": "29c6bN6CYgjaHwUkfNLYAXfT929puZjRPttSu5exCETvzxyS24HKNsvVNL5Yg6x9nPviPDZFPm9ke6XuF5EKfHkW",
  "key22": "5r3umdYksEn8ghAyqZMxyXgFVRo64ofgG5cQpZswXRTtzfmGzFvJEHJ6EaGofPWDH7ZRAdED8xrix7xZNgMqUfDw",
  "key23": "5kwAnkGzSyF4wrm8LFWL5Kmt9tC172m62rMaR1TDAAjZV1VyFN1W2qH9oMaGMryrdBcJf8ETKsz6yXQe6hFCnY4y",
  "key24": "4mxptuFEMH5pZHYnwJeh53zKg9x6iihEsmwULSfsfHoAhYSK8JfQQH8Fywqy5sVtSVyfQ4mmd5WQanumbpigBWnB",
  "key25": "5Y1faq9Y6JmdqAfj4TurkKnvJa7cTR2cfotu7EAEmdki4KhBf5zJgX48D4Sngq5LYRG2RGJ3itmR1gXtsNdDotaX",
  "key26": "2149B4pDcNxbC7pYJXvhs98oRhnnna7jZ5dYwuwdVi6gvMAzBc8QxANtZkz5bBtwk7gbFyh2BrQw2K2k3DZZjLme",
  "key27": "4NjdBNzfhJRLMjNHafiC3wYGYbvYjnWAGp8fQ3rDR6tKQeWHF2kFugFgU9fMCEGWGDuGpqDfsYTWabPd6cDJw4JE",
  "key28": "5RGJruEZajMvKmG3TnLGoLQoy7g3aMz17ZPhH9VHXRKHnQZpgmfjef5JPs6QvcHhvVP5N5iaUqhw5ht93mSzwbAr",
  "key29": "5e2x6e1EjqfQSBJAp7hR9ziNcnENzWojern3YaXWg5UFjXfhGe4SpGUDrs8CWEKot4dKDpCXks7PPQRGdiY13fNB",
  "key30": "3MAsZ3Dfs8s6tXmtwLvGz93qxyB9imKHYtuSENrmVJkz1YyDmTiDxzn8sayinYHoCJw3kt4nHnaVAUe3963mVrpP",
  "key31": "51jNkqebzH9j34Z6PxTFhcwnvpyrdU5SuHmAoevo5f5WcmGRoSSAniRd4YkXn7T4g8BZUmZQphQ8BGLWcaa5KAGq",
  "key32": "4x2P6zC2H7c1kQYNqPAZDkFgtPXfs9JDyzEfEYFYcLFp9s7Qm7BQjJVT99qRanTd8fQ8VAcP7VTKn9ThPeFBDw6m",
  "key33": "5L5uJ9L1v6zTkuj16PxKgbfAZ5KmnDjrhWUL9pCLdfWmSmQEiwLSoKfjYoVeyTzSTo1o3V4okLq5MbBg8G9pWNaK",
  "key34": "2gSSKUFwpCZTwv1q4Mzrq9VeRjr5QrxPez1vxq2431HopQDj4ZoxQPARE2dKe9Dk9et2a1XzHj261WywGXQqsGey",
  "key35": "37TaEx8G8gtgZQanyqLvn2qF2y4KHoefaVgAKAauJoH2YzK5L3YcUwYB9AXda3huN7GCymoMb6UHJ5nDDPDdhsyk",
  "key36": "3bTsF2y1Ycwce4WsU3f7GvSTdZEK8AykM11fm11uDGhwmbuYqmR1tDqbjArNT2TQgy6DvazeBRTPZgdV76oPSq8T",
  "key37": "ENoFEfyWCajREwJsDfydAAno54UTd6HJ7VEQU3VkbVkLzSdzSBq7GSoLW4Q6pXWPfDsJRHpz9wVxav6qtLsJWfg",
  "key38": "4WvYQvWTrgE1nTc3XoAx8pVdDUf4Q3orrQqhsLUthkqv8XofVotsyu5aR7wCPL9jkV6x8oXxk6wCgBfTgTRo6zH5",
  "key39": "3V4ycHwgzpAvPecLXagfGauCXUsg2p6Q7Y4eD8HYAiJENmQV8Fqv7wodgCo6Yuf2fBWPauEYV9DFDhpfxnZMz81X"
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
