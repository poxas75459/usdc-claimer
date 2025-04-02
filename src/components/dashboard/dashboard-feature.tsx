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
    "V7qihtvuRz5EWjZ6P4UM29yo5WLa4sNJsf1n8a3y3o71Z7FwhDWQ5JAa9XXnimNYnXvGTov7v7rVZh5en3RjGwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mN5fcTPRSBV328H75rQVbADTw6SKqGXQw1PPcawynfzTc3jF3UWpyyHQUX95njTnCjq6ZQ4fgtRC7PcmQ5ShWkg",
  "key1": "3PbG8FbeRU9bWZG5nCFzFfxPqW37t5Yzs6TC4jTnJPNEj3SiWYw6kJCaU2H29QnguTDPFS5tcok3zziYf5pF7WSi",
  "key2": "5EyczWQqgEGKLaErB3sapcsAH9uwX2yEQSvzNnRCDnxHJfj1cE9nihvM57jmMz7wBAtTtrKac5heWtBFka9CfoQr",
  "key3": "3TN6cfwrVhaQxg1VXeDQQ3QmpT8kJbrkvxa6RCStMeuEauejzqpQvwQU9hAtYcXQp5iCRnwCJhmrR8dxwP9pEpE1",
  "key4": "5PRoSpTxmeBWTtBBZxuYgKk4UCGEQSzBxnpMMFTpAQfpxxVjTYSFWkCfxggLK4xypA3KcR7wJ63kud6qK7f3dYHV",
  "key5": "Me4YTG6hsajHaR6c5VrkSe95ZZATEaYhV5yBRpbMaiDzPHhUDGcjHvTXp8Abt9MdFYNpe4hCgSEeYN2KhkBDV5U",
  "key6": "5pHku5p8rB75JebY2eis4oz3BBKPik2e7fCurSX3qVPtWrGW5TnwT1SmdVWazA1kpCGV6sxD2ch4eDn2iGJEiBde",
  "key7": "614oPmQ95876chXbMT9cnFMtViVCAWy9E5v3vjJhUDPFqutGdKbHoxh3ES2rQWkmLSp7iggMfVNvMZFCL2GFhCdi",
  "key8": "3ZHm9CmCHrbaWjmZjkN6a5UxnWVHX7fENcs5SBuDVPfa98NRqbciFyDYUpB8NtPGwEDvgLMGG8i6sTTxmm5c6hW8",
  "key9": "2yqHkM8eu7H19TBqwKyS5aCDGknJEkFif2HYQwVVxytpg7D4RfpBjKgzQawJ3zNjdhyQMpNKwbK3Qopcboib9AHb",
  "key10": "2dcGGfKAzjjHGq6SEkxUfoHkAJAuq7yvw8wntacmEfZQbbApY7kHcWiYd3cziqfthojBHXeENzZu1CunRQnK9zJv",
  "key11": "sibH2Sed8r7pqpLByTwdVHdQkXSnwVPLrxV7JcsPfXmpYUJawqkubd1fD7WB4BbcWipnF9oY37x6mZiLSvLFbGr",
  "key12": "4xX5tNWEVWJFP5dAhS6wPRjzoja8Kd9vgFd52YigG19G8LWe3N1PRXMBBUkwdkiUVC7DkZonwEv553b5crTUPbgF",
  "key13": "5o7X6f2n48hccTWtoq23KEYgjCJwAv2P3DdDdvv4pgnxRHEqAZZ2c9f7o5DZwfD7niG7Dj44Ru3QUGFhi868kwTo",
  "key14": "BjPudcX6reeTjTE1zvzXXx1DuVhtPd9FNyMko2MmW3aw2SNcJwduui4e99GbnxoDwH3gbaboJAyNLxTqb6AgWJX",
  "key15": "dE6BdAKJGzjjvDYx9maMtGPFMdZR4VcWAXvPmFvCLd9e9saiaMMUhQmxwN5fvsnkkc6x2Q3WeDsmfKTfazD8Zta",
  "key16": "2RsDPDxjk1iK1gbehi57eAi9mJC3SSBNj7nKPJCcKJUUAocm71bNf1kgiJXjyYyRkjmprR4zE6tJd6WMuPgQeN5b",
  "key17": "UTXRZ5xavZbYCrf9BtjoDxqDJoNkKGeqtRfizRJYLh2JFMKHh1raxQM85r4G2LjHzU5qXJK5X8uE4sEa3zaKgWk",
  "key18": "5D51Uw5dE5so7RUKCpsTFcvwX9RWPTz93N2z9kxxghU5rv6om7JSko9PsaWXQ4EWHyGkGYLQixbqXvMTfUwhVeEB",
  "key19": "2pMzFg1wL66qqyj8ztCj9jAcGGn5QLTMAHERm1HkRbpbTVhRoRzAB41zBhFeo6XxAatwaXp2Aiv7MWzme8gfWcmP",
  "key20": "3d7eiXPz2qaSchLMrLhQUeZCyy11aHzwS2nzw6E71B5cPUhjhk7gkZcADNQZGDHa7rLr9iAR9mtw6YMsMtSLhza9",
  "key21": "2dwBstgYHAsrdiF6PMbEKfU4igMp1tnbbMY1EtshEF5fLQcrrr7N3UkEmhbLQb6SRa2jnDdaZHYrnfVQ6WB8s627",
  "key22": "3HTUx6ai1Mdzk1A5mL1nYEa6BkaJrhi1ZDrVRyoPMArYWErVoFpN9cf5rNmNAeUQgCkAGT2KpaRbEr5VrLN5Juxf",
  "key23": "4tEVBjfa63k64vXKY89e8To5PsApkQmgyRUyuASKXSNgMbuRJXJK4eVCEuSYCTRT9n1RtE31z9E5vb7M4wfqTuMo",
  "key24": "eiyL1iGvuiNahGkfBKiHo3wJHZnaubkrv5YooNb4TBx5kGxM7VhbDa5BXDrduw4n6iCZdEn1CfDjB2yHv5W2gaA",
  "key25": "28f8kiBcBtJgLaE6FkRuGqhjoQvRiG8JEB3V1p66R3Z8VCqjYPJdsF2M8QqR6SQxwK64Q5mi72k4tZHpXqpesNH4",
  "key26": "4JbywkJ9H8PtA59gYrRiUK3nyQfiivg9ssgdUHBvSAoDaAr3XGVrYci4obfmcF3anBfmdjZ5LGZKAcFrg14EGwku"
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
