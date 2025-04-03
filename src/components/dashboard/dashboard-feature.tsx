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
    "21a85pgHr4Q35qS3YQo79LpgBBE5SPqAGRZ9XbjMLzCXPp6AZqhccd77u2v6PyYwedPDgKEHjwZJdGxKyRfL3QrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MPdvMyxafS1s35bNiVJGm317cyx49aVGAn6jNq4mPD7d2ztwFPiC7HeoPtrCJWUdP9kNo9DhEjLsJpU1avrwyJt",
  "key1": "2bHR1stAEWxSDEE82k2kDH9Jj2J15MScKHjx1RfFmgcywAprfgnuQQNDnpmbuNe8Lxyjm7fgCHk3bTj1DttdvCYR",
  "key2": "3XH8rSa4kFQCeqUy9ys1qR3Y5C9hNdHiLLSB9BJGkSf1oxuBjjhouA74jgACXyHWff4c9bvrtEvoDaL5SMJHGEPn",
  "key3": "22Cf27xwTux8MfVsNNYw2o3PZftMugYjGn34gt1sdxoAk9QcKWTTRbWGBPU74rVdqKQywZ117a3iQxDyD3GhAz3y",
  "key4": "4aeXuGs1wjfj2PowxpgYp32AVLNTqKso3J55op2sVsaJMPZEZ1jAdVgCjYDH6YU3USVa7x5jyA25m24UEqaAFwyz",
  "key5": "3DSHcnGZnFPVRyC1LeceztKSbZ4SKWiH46PuXXHQpNpU7Z5ggi18TcyegxqsDPLCQ7qjBWrLtGawWCob8zZsNFgp",
  "key6": "2g8ZTGREdWTJYYvu2HpMVqnV2qQhRznfbAs6cmZpwfvBnNGc2hHKv675gjrK2NCSNy9FMaxD1srvsFhoMQvkF3Kb",
  "key7": "2j4buNgtXNyhYxv71tcH9Y85YA9Ur8SE87Gq95zxnEe6YSFj7otEm79PdKx5Q8uXNqUNdD5f1a6nxrtbUr2RHGCM",
  "key8": "3cuFErLxWDmFENyTN7NCQHDM2Q6Yc9ZL8JVQ1wdg2AvVgzBTyQp1eQjscUxkYzq9WVT1UJe8BRRp1eorfU5QaNxW",
  "key9": "3TtXoe5kZKSuAV8WxVZSBGuxX7BYGj2UhdhKCsDwrbnr4qVYEMpGTyF4ZBVMbQsU1bC6QXkjzcvn5njJKkk7GNZg",
  "key10": "5dzk9oLM1Lk6FfXKJG2bytGRbxyEoAoXYQsDJpyRNuPaTZbLYickPb4mARu55znio6p44yebjGs1Lyem4NANvoBC",
  "key11": "Yp9s6H5pss2GFhRE2GSvZJTWSqfbQNBiQUdEtSgBrw91eByJp2d2MnEcrYa8bYmC9KQY6QsEzCrYYTp4XYk63oy",
  "key12": "2WKiZiwYfTUp9EnyizPcJzUSHCJkk69USVVgCsgeF9fmHjXZbtHurUBBNrA164DuSMChDWDZD5ADd6szC4s3UbdJ",
  "key13": "2xT93c2Py2woVgc6yPkGUsfATCU1iUJycerDyn4dCx5a6r6J7fTuG47oWHK7hXXRoatRmsUA7Z99ez2YpRPEoTeD",
  "key14": "3ZKgscMdJNk3c6emkuuNTrKZ6BDVLN4uLhqskmNwVvpeVs1tqaJJv5ci4mMWJGxwX4b4Fi9htHx4yHVQCLqMwfzC",
  "key15": "3DGeuyQM4KyVtK6MvckwS2VjF4yp8wWQZiFpWY1VjiownkFnU3yEGkUfjX9Nr1gobAL7b58vVqJZf7iCaj5oiSGD",
  "key16": "2vVAQCeMPxC98L1TCgNefP1bT4oP8aAn19nrxg9w4CDZuFsBAGjkZrUCZjisfAK7YUd9Dsy7yQvKhcEXukRkLX6u",
  "key17": "2RPdjcDrRePPPdRM28WhyxuvWLrUzB5uKHtrrMzVxuzkLzuEZhSqjweDWhyASiUVyg8Qsjminmgjh9BcWKtUwYEF",
  "key18": "3vC13TvsgLXKRziMhcu2uPjdw5igCtZr69BWF1CLsyQCbckrdyR3JrTgAHZemr19r7FTh2YHkVeaNs6eb5wPc1kd",
  "key19": "4fhbHLWvQYzHW7QfHN5FJxN4oKvnHvaTvAqKkv2HGxjmWnyG4X2WLosNiYH5YCP3xBbcXs1Jxuyrmm3Zy26Yzv1M",
  "key20": "TPxCURn5VAVeRDUL8HXTifqxzpptZzvJtKDW6T1hZ8oJQoTeFbAh7JEKWkZAm6S9Jc3GmPYhLcSvcpKaB38BMPX",
  "key21": "5F439uunrX9huDvQjpdveahw8kLx3bDcMZ1R3dZUTXWteGtL45EZsW2BHkjfFAWiohazkoLoRrfrePBALCYJEhq9",
  "key22": "BboAbcBhJqmFqDU2paVjnstvn2sRt9s6NshzvDXy7Az9ZmpkhDPXcK9CUkHqma7bYukWK67SCN9MedCkWeJ4Xpj",
  "key23": "5nmQjC4GQ51mv4TrsfUNmHWnMjoEp6DUqHESZNUcBUkeSwjtVbQECpL8GMfcUtY3mqJ1Xvq26QQcDK5FEjVjytKF",
  "key24": "36CYBN12vxE8hWk6HWQ3UJDtV43SaRSaYL9Cug8oHHMMz8nEtFxQz6dWHB87WV9Yagmw38Q8tPwdTBBBX26Aaqhc",
  "key25": "4GQ66zJWZpyKRLeFbPgrhm57A3jNkUnhMKzsSfnirt3EUg1dsXmnrXfAxo6QR2s5KjMSUHxFK6Kuu8APjFK7KAE7",
  "key26": "4jLGL74twKbgNPX4DUKzqJbseFDj2AxUsdLb6cxunfFBoAqqqJc5ca7whi4SarauaKCr4gQXpwLYQd6CnqznhLDy",
  "key27": "2Ja7JHzAibfj6hRtExzpa3NdgzMe7kVqA1hQS4KQTBPwARvt1DeudUk2MRdEsBzDTZgYufTpFXdG1JRJEobP8PHb",
  "key28": "3giUcEgJJbBKZ4f2r5dEuboJFVdEVwowGfPT3TwXzWWcCKcXt4cnhko833Ygj2Y9cExrxWbJQmJrErFtaAQzyY4o",
  "key29": "4gLBHYrXxQFcugzvb3YEgwkNpSsev9FvQZ65uv6zLJCwxZP8A73Zhg1G9mGaxwGj8JxJJz4Y8fdowNLAUBD7MnhP",
  "key30": "4PrXsN2F59BPnqGjdE16UMDkAeSwWpZQ3KduSynHsy8Bb2omsHiAtkcS9gZhqS4c3Q65nCjDaF4jSVt8TjcgjMQ",
  "key31": "eyds2mUr3kNMBvDyn1DBXqYyYSH5BhsX5j3XtH7Y9PK8kWdNsm6VuTM3ED9n9sTGU4CMnGFpxP4kivmT2mGvdQJ",
  "key32": "2dpNeb54n3pr4QDbXf3ZXgCccAbQ5mZu9GU8FXoGo8Fxm43cU3iCZmhVpab3H7FKibQhLJfD5YsaLVi3HepwWQ69",
  "key33": "4CMR6Vk5sTupJDp1hEioEGCyCmNBe4a14yYPswBYK96uTDPPxddfUQA9SQChHV6A599BgoScP9k7c9Adfzj7LvrL",
  "key34": "5tr8n6PvsC7Y8y5ze6qRhfpEkjv2Z7MTMfy77kRGXmEUATh5F2NGH1DhMZXro5Uvzi28Y54qVRnifNcvxvij5wGe",
  "key35": "5Qszygpa71XuALyn9RKtDESbTkDX1Dm5nEUcNBdGhPe2V2Sb9RwqpaEewSATjREZ6dqHEK6o3775AsHLH2Q9x9wm",
  "key36": "3PFqoc2vpSrDDDsCdc3Yn9KoeMhQ7L1WQtKAqfKj8sas2ruDAjKwdiQd4qLJ68kQM4aJnUhtgvUhzqZBCfnyHYPZ"
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
