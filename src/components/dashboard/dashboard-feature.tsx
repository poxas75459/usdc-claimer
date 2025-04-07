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
    "5Pc9gmvBjzrirzN3ndJbJbVJVR79shU6MabZoJnG7DezD6K6EFVkcXHZngao66e9pSreJT9tRG7cLTYZ9BZRb5sJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DwznzsvaGTGohnHS5XrF4wcaYb62agYymAKujSAFDHUgbevbU7TbJ9c3ELNvNzipVZdyDJz8wS4WpJZyP2VWJPs",
  "key1": "3ifQzYnBfV34t6QEixXXQmrQx9hnEgYVg1WQBMi27LWFB7dysAK5hyzUf6HzQanULunQjm5rgq2YmAnRxBuVMYZG",
  "key2": "5s8Ka9rHaLC94gStY7LtoPXLPF1jjA6hYiorHjNsSgNnU51H7jL2bsr3pXerbAxA7zprJizGLuLrHQBVwUm6MbEr",
  "key3": "5tZ4jNkGBBHL3rMPWeYYpUkHVWZijxhnz2rMJu1fcxF33GdgVTnib5WTpeGVTJ8gmDzjohUb5QHjhVk8yj5HyLZn",
  "key4": "5oBjGAazG6NqfvAWwB8NeTcXkq6fJUwbdYnkVkwsCiY2PJbwATB8zBZiCEApyf7Gn5t2fhEKN7QascyY1aMPYuUu",
  "key5": "34en8mu73zs9vPdaUoAHyWcuYwTpRUKEEH2CfmpJqFnM1wY8MQZvW8k5pGbh2adG1r2qN3rWftS4mzBs4azdtF9e",
  "key6": "3Du7wiaeyPv6ZBajksDuv7ZXeR4E9TZt44BMrHRxyqfBBn8zUpZ24RkzbqowTuZ7HZQCzioGy4BTRYxVSq85GzM4",
  "key7": "3FsJVcEw48DTRetso3FC1kEfX4PXwrbWRGYvcy4JbL1NWsPvTNBkXhpcmg6iaGtzzbzVkpgVi4uGVGkVFKf3cvMM",
  "key8": "3PFC1Y3m5U68pfC7hhy1nq3wGg37Adb75HdmpsLS5gWS6ogpQzTV5yzh7qjGsJiYPoGRzRdzieS4TvT816f1RLAU",
  "key9": "aKxSKbgYDGzzeRw4FjzgU74UT549GCAZFn3dVXY1wMZzjRzWrcWKPwiuExFaQoiMQe36JgpPZLih1agtDVVJHW7",
  "key10": "oxa2fCAhy4pEv2yHZfdjso3YGM4aAJ8kQN8uggJLzQTT4CaZSV7BpWV2WNB5RqQQBGmjPUwgKNP3pC7LyivrifF",
  "key11": "2V8vVmo3rLxgY9iMQEdHagzCsY4veiZ23toFJmRVYaQHPsETxefLSHeS4knhM8xQiamcm66cjKaP7A5BJQMnFD2F",
  "key12": "4FK2zGBmHx5MQVJx7wEhXcpGuavHjVKq92mmNE9DdBGvWEupftxtdtwmx8GNoqSytQ4ecKEQoBda6KrrqhTFvxCU",
  "key13": "yAYokvdmBZ2RY9oHpM9sauYH6CZgKsAXxX2n7cmQgEELJKW8Mu5z98Khc2KbJZ5F8TQKPvCgfRB9y5vhA18Lx5b",
  "key14": "2iYtcfTZ7G1FeQSRP4i8PE6ZeYfGnjmXHSSRyAC9do4TKZgz1GFqGzd2HDEjNnB4RDEacpUxrsdva8KYY4ysi5QA",
  "key15": "5WkfSjQeTKPZYW8BECv8X2nAwUEXGPqNWSowuZ3GUQx2weJKMYp1oEATgs7bZZd3AWhDjYAXyki3MgnaRtfXbhc4",
  "key16": "dRdT31VRu2XdYPyGFMrvLwpNTnZynX2rq21j7FsrG1GDVHJyDv6fHsmbiYxD7YzWZ8dq2MqFE8mrEiBtwUbSVCf",
  "key17": "3kXenUuacfjTCJ6ExzaM9vs1xA2QVeJqoeC3k9fbc569c9WoLot9dVEBTbiCuzf3gn27iAMqT6uqZ5mvBfcYVBBR",
  "key18": "2K5yPX4f2UW1WWvPWBtqR6aV8B9KebFgkaem2UZz8AS4V5dMfSdhpN4g8GMojq2RxarfBLPYnMqGG2JUo5igeqGk",
  "key19": "3WcxeqKStvzAXxYTVaMPMJDm9xUqoQvrFAhZbYkKQ1x97N6SkNvhddNJMgoAx5GLSFk9tPhekYqdqS1UqMPeT8Fm",
  "key20": "84HvACjmy1Pvyj8iwVsVRuxL9HwR4FV2mf9wHdGgTjfRwVDscbQCn5iAMGiSJN5oSvZmrzqxJAU2RAAFWc42hhm",
  "key21": "4LY5rU84omAduo2j9ncwHuNQpzF2WP8JqeeMYfL9pF3ENpDSR2WT4VFNEsPBiu7QjTEPiUVNXNBbVz82FKckeEsx",
  "key22": "2qfNX2om6reg7xm8D94xmj7oipi5rK8gLcyuSeReTFP5a2dLi5vHbATBqAXPVDTuQyQvh51uTGA2ZU2YZjGjv5NX",
  "key23": "4XLTq2nm8GrWofvRXSnTpVJpfWbgRetwTwhdvQm7qS42e6xJpYBnz9fTs3Exkgm2Hq5Lw3ZnA9b3H2Hz8aCqgCpw",
  "key24": "fvoQYjD8y7PGXWcELs2wxCW6G5PiwP8zn8ToHqg8rUT359rW9jvNeytDMbmoEAQXJvsw41nhFPyAYNBS3ccM33J",
  "key25": "XDsb5wNKUs5N4FGWHvzLiSNfi62QfQQXyqb6keq5MJXhG9p8Ygk4kcR1RaxGgdBa3vqvfz8j1gYXNVipxy4Avon",
  "key26": "2qiFbvuQ5jat3c2AtSmxhzq6YeWbdkeJ2nxWxDsSwjhay9zGMx3VE8fRxrEvFjsQChuUoetgDR3BbK9kurGJ2ATj"
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
