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
    "RHLcXn8Ln9wx6wmV1CPAjmsnCi7ZQ3sxtjHMRphQtsdH3HNeYz4vTBTzyJfgsNrRJD6zA2LxUWsf9DJMvdsELh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kicx9dBZHd2aQdk4o8F88S82Ww4MPf7r45oFxQ3N48dxdfB9xifqyRpbjFjnt9GDxogWcsmAPTLhVaiQ5dMTsjd",
  "key1": "2YyUa9tBfCaDBimMAJVuVHf2Wsnv66qH9atV1q4mCFF6GJCLEdNSUnzBg7SLkN3WC95zUfxBdik9nTgJ7fXmJsvP",
  "key2": "2vZ1yAHMCL43Uauva9PGxz8d2NRvSVM9mNAHrroBbYEq2xZ31JZo3Z9VvW7AuiNSYUQw4Con5uhsz1sRBF6DbTWF",
  "key3": "3zGTL6fhvTW3G6V2uLaUBL5WAzvFEVHpu7x86e76D2ZH4Txuj6GsFbMnWHBF1EpLMQtBSDY9n1wmmKm4wReNoS7j",
  "key4": "3yCG6hetPZWxMGCYcLPGLVDiZD4jFCCLpw9abEQzuSpiKX958Y5Ls8ccRWz6vv7Vd6tGRKwW7Y1nNEYwq7arHenB",
  "key5": "35UTaLD4euPbHUxdzcgfW2Ao7Mjep3KnPHtbRQLq624fe3whEhUvMvq3A7d4opYsCMs1axzchcYQ6uuFu6rpcXfY",
  "key6": "8EmvsNsxDA4qYJB7JWmwT4rpXAmDvjm1kR884HDobLvsq9tLQMtGEA1xxy2mgUjBLycTjzE3gcBku6b3c86AYJF",
  "key7": "3uoPBsxyawX8VhqV2L4hJHSVzWQM89qzEvaw8kKMoWHkjsfQ7fFUDFJbVu5QnUsnQouUimiPNSMRuXTtsmTbSmw",
  "key8": "4osWM8LcyRrCn1MGRVP88BykCUuip9aW8GPnoWsuHSgXvpg564rTuZW9PT2c9aUwwGLSnYb9VKgcQy1RYjrYvhXB",
  "key9": "2aYSRbedWNs9DYyUnYp6t1UaGMy1JqUe9yPSwQXBvJy9RwE9DYi6zXaRth8pJmjvKRkzsKYbU8jVTE25QNzn5o4M",
  "key10": "4Uw6JMPMKY3goYuS8L8RmgFKqmMtxvU677wWf2TWbsHT6HrV4gsR5zHhg1bLnoXZiHKFWvrcPbj7XhVYV9TBSsta",
  "key11": "4VDhfA7qc8rKhPPnfsLR5MRNMuMh2PPEWd8YE4tiMogV2HWu161e8zQU5YmcLtju3dGYRGGAN39SugnvKQSqC5oA",
  "key12": "2NCUiJz8aAMWc8Y7QfjV77K6QhWAfaJKWDFhKoveSMC96QnbmDoRr1SQLSpDkJSUVBqNnG4CgZbdTuh31pvTKrXx",
  "key13": "2ypbeXuu3KiFwDzdSRUY6Q3w9zLFCM88CJu39dg5a5VzpSXNyHZHKZCfEvGEwfhx8KHptuBdQWXCUT7MR7sSNBMK",
  "key14": "514bhmEKmiRR1vcaEz2QDW3mLNX8GgrNJWT4BxKz5pqaev2XUYVSwcmog9ESXyRrxN6tQvWvy8g2f4a8n5nQGBSy",
  "key15": "5SqSDYqBGiqhzmBkm6FAX2ZosHGjJso7GMzia6xffnNSjXYVc23SDEGfGMTKaCLBrbLGE6duF2rD1AsV7ttSvh6v",
  "key16": "on9o1Pjogbaq1ENu8f8xYEHhJY3hjemULpe6L9Vw291MhJeWK6vwRKcuA1TfUsfCDzie9NxVUpuLuWEUy7CjqgT",
  "key17": "ApCSFQBotUzsGhmc5vwHtB2nmKREXdxzzQ2WA6D9mLmwJxQwqZqt2zp8cAXArvqsMKL4qVA4tC1iencj5NiArrz",
  "key18": "27BahQ4DKMw17t43EM5oyAAn6gEV5Y9ozojPc7HGgE6GBWzasdvfLHcuDNniBMCUyitaGMxwCFrWHS8MArAAAgmL",
  "key19": "3qF8F6z8mqkzus4J2vaS2tCSSbDaP9TxKw4T9Sf94rGKkVXzqsetoPnWwmuNWZgUsJg2s2AYYum8a5SG69HBnos2",
  "key20": "dvfa5Tr9zMHoYMybYf32xCfJPFomkN1d5XhBCStLcfgSWxSCDyQ9g7Eyk54gfZ6bDLY5UmDTf7BBcCXEmhqq9ay",
  "key21": "4VBtw2FjLfZr2ssoJbTmsSq3EbpbStru9YWFy8bYsrXsfohm9QY1A34Jp5L7b4cXKcMRAoeQbpqKLTi6xaFz1NC7",
  "key22": "3fy664gSMsSEBxJw4YHaqYHbbCpTusw5PKGXvjh9R2ma56mgWLRdMVY94NjfnxwNGSZWg1PJQk9XhGQnGFEDHFz8",
  "key23": "4yc5UiFEhPD4QgXHiyV92YYy4xHnXU8wFEb4Fz2GEzkWuu2AsRzcBwVwn44JbtwiGM15gUy66fQaJ2ZEeHFs3j6w",
  "key24": "4c4jo5WJY7tfyAr7GeEfiaHkZNxYEHWspbjALnTjXzDZPDTdz7izVFt9zYcyNCUVQtastSsQeVQrK4k7TWhjsZ3t",
  "key25": "2tVS6q6VutCzbuhGKF7ZSmbkrR339Vk3WFbotM6bFnw6X3ng1AXbW3e86UFn8xGaxyybA1U1fT7QhmdLdPEpjcYq"
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
