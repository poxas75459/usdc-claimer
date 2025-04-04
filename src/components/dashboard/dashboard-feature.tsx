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
    "5rVnZb43oaCZGFv53WR5XK2YvvUzDSjDZ1iuFdM3UXs7FXUJmDREn4febMDXNcJjWDnEtRU3o3BFhqPhzJgJb3kS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UQinKTBFV3vqadaK4SAdAWH1X1k52GMGUBBn2b4t5wmkpRYNEUfdSwpy3izh8EhEy9Bev64CLU9RBozNHpmSLSX",
  "key1": "jYCYfZHEMTk7QYjdtFG6PGLmi6dimSUcwHTzXVxoQHcaDp342wUm99fYnF976mxfkh16W1BwbmQrW6Navxr7Fot",
  "key2": "3d8phZo1wGWCcjD8genKJUMs1cMN6zoRV66DqWKL4SaJWnq8vzxqBpEyTWWXX1qpbxKprTe9S4odnML2rv1qE5Fn",
  "key3": "231RE1SVnCYM7EY24ZcEB8jJNq6EWCY46ctkBRjwtZGeCJwc5M9tgRjC8jQxhfidR7ppe3ag8CBMuY3nuQgMc3Pd",
  "key4": "4G89dR6KzwdEfRBQrcTyifoRZku3NuQ3Q8V8FpZPXyXzRnkVbNKPj3BrAx9zfodNzYiDtzUzP4mjRwF3X6YrbGcT",
  "key5": "fPKFA5KW2ZLUiAjDpRgtaCEmTJD2AmXYCXM7zHuGPC64kZfEj8G3CHXHzMXtWqtLNNh1DtYPf1GLLYqqRTv4Syo",
  "key6": "4rDSodcErt4jkNQQvhojeYxxhMVZKbsgr3k13wVxKeMhMViTtjUCnDxnANd2iJNAfVH6hpBHZTdNGem7KicHvg8E",
  "key7": "5pz6d6Hs7KExeitqo56Y1veX5iV8aReNRgcdw26rfaBzc6wb5PgBBW6P46jJoFWvDHBsV1A5aN3TXK2QgSCs6AnP",
  "key8": "VcU2YqD3bLt5VzRuGBDb32GRBYdDGFpeiMwwag1XYm6DE75dhDuGfoMBVKUy8BzFu3uvaiD2XtBXgAeGmM4WL8B",
  "key9": "p2zTvp5ApHaGKEhgEMja2cn3xEKWpM7Crtv95oNCtbJA4vJbMiC9VadpDWEeMzC1v4QbWqEK1wFK8r4zc83icPU",
  "key10": "3iwXZW4DKvwdbPbKWVTNBNpLgJBRyvWCswZhYo6kKvpnqM4vU3HfaNZ6NVAsEymaXUmrLyToKTgbSfrjKV3mpUm9",
  "key11": "5faxUjUUNaTtD7qJa4hL6QaqDuQGPtDGpUDY4GswhQmh9UMMTq6uE2ixhsm1NufgHmdY6uUMR5URcwxutgn3WV5L",
  "key12": "3wcsfqJ6wt2XiW5DNPTmj3QU7eiKjuBhnP9Uv4g38GvsuEyiqedewRgsVwQf8gDTRDXX2rG9ceeUbZWaQxeBhB3B",
  "key13": "5zCEMtMeMRz7UqmcRoQRDUnu6Q2sagtTY7V7FvmP757vaxrsGBaFnjLQUso9DB1EGu56YhbtP1BkBomB9sPrBMHL",
  "key14": "2bn2w3c2saQ9YMj63zKXxj1iUwdK4JByczx4YTEhSMcF6jkNTYj7RJ83rNkJa6YvGTphDRjNnweUCnWChSVxkNKx",
  "key15": "41wpiNrpFX2mNcyjkh3fZVY5SMoXTikpxVA25dK1WERvXi21JjRQL1XABoWPnNCtcW54xPbRhYcHgVQhxBCP8ZKx",
  "key16": "5X4r36TtuBj6SGJCWqc8f2MQJHuZHVfLn4AwT1YgANEe3HNzvZYd64ytLJcjKZ8e5qxvUqdKZH6C1QmYEzHwyWTW",
  "key17": "58WULuvtaRtzzwiEXukPF681a5ATwtWTVnZURBNixaDXyeMobQSw3jGohsFobVYoAjcHS4LJpMkG7BdTEQbSa3dY",
  "key18": "4aMLKhvtgZRa21FamYpmuUYbVcyckctip2ARvy1g2TUfSRQUCzCiBD79bMir8twxX8833ESSBQv7wCCZNrQKfTV9",
  "key19": "4L5jzm4yEA2uVCwkuDMPjV3MSKRUwHTHfUHJ2iA3yXP8sxh4bENj4QmjhzRGYNTeNHugExmFgw1pX5z17H7DueJG",
  "key20": "2fsPYFHa1nEstMztTrTmrKhtNDpFNRNvVqrMof1EZcQphnHzDutvLPLNgYjbdX846XkocnQiMshoyvTRb3PWZWNx",
  "key21": "4Dd724dLutoWwFLPfSDottRwHkDAaDQH1jYAXqr37j7C3KZRNnz7ovfMLZuArSeSvKJQGgTmWA5DhPfXQGdLqX8W",
  "key22": "dgpbgfujmjcjtd1N28W9kbU41y1cUmn2xphxQB1R4d6u1nZEkPzZNnNEg1MmDzue5uY2rK46LjzrLcaB8JRkMMB",
  "key23": "28MZXcbA5RgC6poMymGDgMEWGAjMrKNKdAyzX6HWPZeFPxynEfwX7bj2LJmA8FgpVFPpKB9Q9oxuT72ZTm25Ei2z",
  "key24": "226u41FJvih7BzZugrBY9kzE64pvwwt4WD1BKPiYgs8HyWHGXwf2v2B482y4xoqwCrEs2FD1q2ejgK38oqm8xqhj",
  "key25": "3sm7beu6zTe5ivauU6GBJBb5ubD8Frq1LoJnaWSirUQnCDwTUCvhqnNEwsnxH47DkAj312SQTMyTs2KgwAL2iHbP",
  "key26": "VeYVvBUwykvN18tZaqrjBfaCKCxUz7Tep2X5DF7xCa9NsnSEsEJ5uQwfJgPKEyEWq7F5psAhSYXv1w9KmL1gLAM",
  "key27": "5avuRqVcMdupBN2NgBFMLijSmubQsoh5A6NHoAjn2s5MuXxHHKudgmuCi3L3eS1UPnaapgZNMy2Le4mmi5vm5hud",
  "key28": "MW88bTZvizaKhx5cEDoBUuUyKKgZrAHcyq9yMQmLtqQT2gaUf52EHtQcekhCo3VwbaETNUGbagowQGr1hUUTYBX",
  "key29": "2wF4FzckMqH7rp9bA7Dyu49FVHBNtfRgs1AL7FrbwYs8ZejdH6QqKwrAhe57iGLuaur3oNPzTdBeN4F2s64zYySg",
  "key30": "2ZGvuQvmmw8tm3Q1a7aw9h1Po4BLYEvhrbNk5jRL88vnzkBXprzzJTiNdSryTPV3gLrbwC7VazB6kjwBSGDynpEX",
  "key31": "54iW75FsZQaELdQzXy44aq52zp6EmhJ564fgkrBnCCNxbj31EHAborNZVKjGXtA83g4wffdHCUkBTreHJkwUQnDz",
  "key32": "4MVDEG2afyqgqD8xvhyPK6HoHTq1ET5wzAh7ESSLJi8ErxxAbENprPx1kz7DC68hAyPjbM9kMjZnFKe7eod1iS4u",
  "key33": "3CugRZDyKvCT82bNthR5PArETRt1Na2P3xemy5BhJEUg5tdWCYTogNHa7zr5qsbWYtBkT4R9JUQjsadTCiG4W9S7",
  "key34": "2pnU8GL2RxoWzYniFKuzJTt1xHErhP1A8hm58Nfpd12ELXZzrtQAjQSLCWKYN48wntLexmz6NaXUXRn5ieBWFN1c"
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
