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
    "2rgw2xq5EJDwL8hdkeAQ6hMps225oebNxsh6Y46T4FJBNEEjbKEmFEYWkNg7Q77CEFmi1Up6ZLT4duSAv8QTGURd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51KHXGu2B2Yi8LA5e32bakejEfJj4pSBWFnZB3j3GykcSzK4895GwiJXTmUJeuLHjHtKDTm3f4CdkeSGiiyYJG7T",
  "key1": "36PpxQDqKwmNSDA44hxToCpBs3HoexBkcZWreV8uzrk4QskQtUVmbFCTHLxztVqDyxvkyNjSQzXH1qQjjrKbgoC1",
  "key2": "2bb1SAGZVzEMfKKeniMGzscXJsFFbyWK8JsgLfVHGMnFyABPZZpWh7g8fZJZjL3H7dyynzKt3Y7Efd2yFQB53DyJ",
  "key3": "3Msj4XKLkgGwfJBMWEtcerix4WBiueLTzCoE3Qb6ys3cLe6uCLg9dybghp9BBoyhVFLuDdeJeqW7ib2QGF92chHP",
  "key4": "vyacrLqpDRjbXaprWxtvEKZf8PrR9wyqPgsmwuvisi9K1TsfQSZSguh2bgPXpBnvFHqpKQiCQMeViDYztQEyF8D",
  "key5": "5ZvNHGpFmb69qD4bQworvbfLteNVHYPCAf9QRAPcNkcjWfq4K4xB9QnCYjnxbSp2LjV1xvoWqyDxpUrWkhGnMMzD",
  "key6": "7jAi9EuMy2Z9mt75tdPzYNVf8uBpHGpxaQjfnFopxNp5Cw3tWYoEJ3pdszKgVijJSb48XtY5c1qATjzZ6sEkxKY",
  "key7": "xW63EMxmri2JEdm1kyUoqC1sR5axUKNgfPq7bkPPjgKsdLTsecpYKMZwufMAFb94Q3RsYT9xzb4bpiXuPCFdYqk",
  "key8": "4S7TVuBq55jUYGVBm8WQUQNt3N87YUFoU2Wygy6b1tj6khc8ZA14UvCTYeJXTMCQGDFq68deirv4FPkAdgAkCRuU",
  "key9": "2i25E9Lz5KgavnsZppqr3RJsJDCrueviaFoqZVDHexYi5PHgQe6w4HU6xWLYRfABrPXpcjqcdRWRWaX4Wu6SYaqk",
  "key10": "5oaGum836xHxM8asHWu9KfH9kNXFam4J35hDX2xAd7gNJJRTpFgRSL5aLoufW2xFiGbVJKxwutf8MmTjy82vBbQV",
  "key11": "28J2uu5GhBw1w5JppN4KbPEsJN39sjJZcHQdBeGY42dFenChqk2RR45sWWLq6HqkTSrhmETkrooghXmsQ9BrTwnY",
  "key12": "iPjZiDzWZ5yY3H3aCGtZLmAoygAb7BxJbrCQpm3uo96C3B6M1xL93op1igDTrf5S8ewiWrQ1NzQ4n2hmxzFStWK",
  "key13": "2tThBZgWRNaYiWH9hgY1sZz9NLx2NKB6hBSqxe8qU1mz9dyyBTC51UFhKJq8jzqupBNNLbsMbdbcHYfKa9LNetSL",
  "key14": "468TdQQqgYHybureyDX1jrhQ8Bt8GxbPptBfDkY5wMLPTg8W5TjcQKJE2PQC3TffWpJjZEGQXH27P5MtSrDTM34d",
  "key15": "3iCM6UVRtpHRequzcZaa6jGKw7iXLc56CDwrFh8rfKr6pqLt3kRM72y76ZMqutzAAgu3yECmCFeD3EWUMfxcpMWY",
  "key16": "3QTZfcizcVae6ALHZEijKcLM3xzXB5H37ad84FfP8pqFBsBAkGW1BBBEMKJ9NRQpsxHeRWqRYdEesZzCjMds2p5B",
  "key17": "66pL9fBNwKoWvKRPyht2px9fhEQDg4EHUZnBfxi2hKbBCjBdKcN3bdH3teheh2NRxCwn7GhpfQoWrQUMvaNWugzV",
  "key18": "3reD85of9eTghVYcAucNsWqdKQEhJy9WP4AgpB6CSHvJAzeAzjXBzf9cMj1PTYZWDGG9UeXqpjden3fiVdzuLPj5",
  "key19": "2Lbi392KVspDzhPwKNESRW4UanwykiXroUQSUQp5mjLoPCnr1vCa82hukV77vUU8UbBfmbMxQKq6Uk8BMxQ3q9NR",
  "key20": "4T5n9DTZDzKkcooV6nNpw6r6oBCvdXegcpPUVY17YtteiQysherSWKiGevHypwC53D4srBNnBC1JB8AbhPy1qr41",
  "key21": "5AbruqnMMASvsZPBM3RowdEdB5gfu8VHyHyhkekAKVAA2evd9hEBM2YhS4cNHicvUiqnY1dcnyFMoDpPRPSSEvD4",
  "key22": "2vFY1eQ2aXKMDhhFqMjSRejvCpKPJ3Fpm29iHjSZafe2Z1efzfXXj3VHY3QF6gYdD5dZn41zLFQtf1jFUmRLc119",
  "key23": "5wFg1yL314VNVJTx2NaRycvenCdHvLBeezEwJE5BkFykSiC8iBVS1a2fe19WYvnwk2KxjjtRwz77xnX9us4pXkUN",
  "key24": "2GZHVYdC5ASm6Ka9kn57D3Yd542xQhaB9f1sK4Kyu3gKQjhNEZ6iYznmPBfN7QZbyn48uG4aBMmE4usAbZnb92fb",
  "key25": "2Wunpw8S2QMw1gCUHeJ5i83wxmaWRynn47KcC25eja2XUkWW6mbdYDmYMyPfzk6yjb1fn1NWb6j9WzdGj8yiMgY1",
  "key26": "4zHoca7czPYhNfYthhLwPT8e4jfCvxnaRaFq5nvHeJLY5nqxqLYBDSk3cAbVYBQgFEz9CCKzxh2ir4jY1SCUQb3G",
  "key27": "H1qK2xW2nucY5wrgm9gDdQ5cKzqzdwjna9KJQQoxFFSBU35jcQeEdd5GAyawJdAveBR6NoE7j4uQQAKwFBoEC84",
  "key28": "2ZFw3y292kJvzaMQ8ShPU7DQBVxZxVUzk9GpPaLx4rZ5vQCn6ujU3Asbn4MbT1hT9rDryycB64j91ecBTz4ibpBz",
  "key29": "4EXbBdnVuGf1guLzzWthUhPdQBgvmyWpmv19ntLyFALBYanU2S6WA5i2pFLLwzUz52NXLemCcuu6dUfL5UBLEUDy",
  "key30": "7TaMoRgfdcvMVT45wXPhyZ2koznZYJGzPqGBJXtSiZWuA7XsvbrSrWjAQ5R3ntF1Q7bA4V2qXbMYkvGyzow61e5",
  "key31": "4r9uGfBaie4zqcXKt2g8S3jcT6mdX1GQtUoY1mYhVpmZipwbb6LL5HJH8dzxiKLv62zW6utnT4Y23btzJn9NZzKo",
  "key32": "39REkFm5iNrPL2QKiU73Z2qR6GS3chJSsp7eE3j8jyBc5cMdfszHvCjz39dxA9VzvaVC94bfZeW8ixiQonJyDWSH",
  "key33": "3Wo2hqmxttW9Aag6p4rgCdZ1ZMEhH9vAFgpcAxugpr8GYwM6H9WYCc1GNhyJTuCSJ8JR1a2b2M8xFgmfPvedwL3X",
  "key34": "3jvFSPiz7NYngGGXwbkGQWUa8aLHQdC3zbjMjVpwiTmrKmzpparThqjCFCga8dfeTYNEgceyAJGho7GBxPK1Whct",
  "key35": "5mR4u8JFCasKAkUuDWx9vQpw38bYft4fHVbRMpAbzCMqZMKn4CphNBjVUbVi65bZqtt7LhbAj7E4sQX9WQj9MNdt",
  "key36": "i2P1RTRAVVKXFPeaP7BFHCtP7w42dLQDeYx379vztNdoW59Q3HvB17kusekJTP7c6fiZQcAnrYubA4hE4FMLoen",
  "key37": "2PCBACSEYoazqHjyaqE3HshvYuE3vh2g5cDSRg9CVtkDxnMc98pTZ7E9bRNEARcsKxaRYdXgiGSmoe4pRXtYyRqw",
  "key38": "3gdWMcnQmewKTorwygJTNkbgMQ5r5uapwJSjXwNV7HaN3q4z2w52U7az3ARZ5vmZPMkwAWvPdgmJ7Q4HS6vzkKTn",
  "key39": "24DYVMGBD6N5LQVX1H8iaRbfwrVKm5S9bZ5tHCjwNBrxrtnzXL5vAi8KHBAxs8vp8uTek8tsWbjyg9NvZRVCVEBV",
  "key40": "57j9G1MkcF3pTN5xk76yfhmq4LF8pmvcFNgLS42QnDgrJ5wjXjRh5anRqrZNKCuTUFeMj2FHuu6yvSayt3tKxH3G",
  "key41": "2hyHRAKxag3e53C2S8yyFMwQ7oZbKNg9AhZaftBET8A45n91zut8tsnEogsVvp7QSuYc1YcGcSprmPmAxHtSJqnL",
  "key42": "5jvgoM8hLJrNc8BNV2SxSf9GVQ4eaQEZGdRB2mFvUJgZ245GJvLyj3VWcq9mxmDChvEKfRLD5ExpLeX3X6Fh9L23",
  "key43": "Nc19BVEmSsESUz4DeR3FR9DFUVaWu5eGwaW9SB67VzT7NtuDYRBGJ5VQybSqmkVdJ5dctyRnVEELbFNckTHqy4W",
  "key44": "2Bku6cLCqz46kHh6pssS1jKR1pBjhjU7BYAwrGAU6g3HUbXaKNVGVF1G3sjHNn9nUs2HJ6PJY7H49bgPny38ug4Y"
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
