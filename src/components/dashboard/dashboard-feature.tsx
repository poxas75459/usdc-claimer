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
    "5h3K6ew4tpic62TGUZecLhDTzMEZa4X4La19YFdCz2pJGUxiAd3xmNPkn4G9nF4HhoUQuHTd7RYKWJu9Dom6EG9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sey7mHJ9ZWrbrsKhdv4zwpvtaUaJ9RTDDt9bsuBPkjpEgJ6SrjA67kTpib6ukHa9J9FVNZ9zXZFt4vg8GzoonTd",
  "key1": "MytEnUrsBSLTMxHhaTZmgPHHVdpXsMqkXJNx3vFzyi6Y5csLQGhvhk7VzenYssLaAjJDmA6QiBUDPTswVLXKtZb",
  "key2": "5DA1eqiuFsH69fPuaGrpB3iwcgDYPS2qF1MPjs7ETLLGg9JfPbPb5TCrfYYHYd1rM8QNfBGqCRTxrpSkLQrVjiQc",
  "key3": "5j2Fi6o3thg8DudWw4K786fwR3NgCkkcmEiot9sbKoUoDXKiywcD1EXpcpR8X77oqtcP37YF79hXRaGCaHAoczwM",
  "key4": "5bBVqvUhmVMs1oq2Z1e2LENqySneD8D12ounMqpcyM4ApLkEniJnXB7W5BmumU7Ja95bY8MYEFBE2VcgxtrzMGXH",
  "key5": "63uvtzUgweW8642hy8UBSUpfJGP2RqD1G7LNZuTRvPVnn2N7sivCEMB89v369gUccKZ3McN6bRtE6L2z8E8JJkNj",
  "key6": "966H6CDS27LgdCgvJn4j8VYwLLiRfhtyvFHy6MeM7iD1aNPvzxBARsKw1FcSpkDshdvMnJTk7KxBdakrzPDEeCy",
  "key7": "2JVgQjZncsT18GAXKAseiw8n6wPQVKqQJs5PnmUWxibDfG1qoFmjNxRFXZP8kZ3wvt9sJj8DgmSYaomnYxxEhV3k",
  "key8": "4UvYeYFMi5yntuevXWzYLMB5XRAySub3CbmBv8bGLmtqUVYrxvWM5fFVEXzqNjjJmLPb9zMTnQno5NB4JxzJtEeq",
  "key9": "3mLeVvBBuujXGRLeVULr8mtuMfX2ChTt8rAznAKHJzAmZPiLp9aJc1s9VXqYSns6tJDPctdkcK1KmsunAkztN44w",
  "key10": "29V9PUEX84nNGM54tFLM9mLDcVXFWbXqzJCENFmUKZr1taavUnXP6YVtSVZSB3KkhctGrgvbhf8zGMuytgtEjnGf",
  "key11": "4htKYQ8mZ7Nf3bnv1v8HMUKd1CjXNhg6qMjhL4SQSYNXVi9Aw64Ehea7WVKSdvsT8fNZ7732gBBX1o94BytUChhV",
  "key12": "2E5kBw5UEjRkmMpTFFiJFUswTxk1wEZo9UEb6Tw8KL8k83hchSgMmBooagNG89F8w8WwC8FJEWZtC4uqhfRbpmQe",
  "key13": "3qktiUT8cBCgZSN6vGTnUZSnps7tNFQxYaJ8Q9K6mb4EH3eiAxWnnqGoGQj8S3y7jwQC4QzFMkjapPEQ8oJQ2Bdq",
  "key14": "k4MZUh2FvP2NnLqYMGUdhH9cB2EeiubzV2kRoaDtL4HNVCxiidL41cqTjfbNuaTHPqVJmT3EUoSxaGGh8pGfkBb",
  "key15": "2FLwYC1fPGASxg4nkPtX7fjUpnoJgX2g1MtvSSHxRhRG6NUBJ2xSucEjovemfiqyqWJupsNGGB4jEpJ4H7GVTWL2",
  "key16": "2zSBwLtkzioZu7dZCL22ZdF4zxRLTz1PKsD9DjipRWgbTrhm6Eax773XnJJ7aecVWJeP9yjoj3aMJDdLHbbeTg9B",
  "key17": "2qVbM5Yfj9DassGHQRW6U9gKkuKxPzTxSb41jdYp6fsLpF3gLSD3MguuwsFDJyZhRBK4PMUCgNUXkK6XpbESUmHA",
  "key18": "4TWbBLzSnS7kKWB8xXJRrAw8H1BM1qaQ1MQVcDQ51BoSXDsX8quumbRf8cBmCBLEaJj8BqeZQqx2eJcFYGZ6KAFM",
  "key19": "5W4HpB5GpzsX7EKmuECyeQB5CvghvvnNmHAovUVgR1da56Ddj42LR6naxcXJuvczrop3QraYpyaDeuR5g7bzyEQs",
  "key20": "3TXBiPNaSgFrQhKmczhrGxFgAzJEwaqBeEC7nrtm3cgwHvouzbwrp6EX3rXATTTzAaHk95TozhuCof5WCowtmxbA",
  "key21": "ant1ub1KG7uTYJPPNRLRzmqps92ZPuzyEpZssgazEw8bWuwfPUbk4tqRMfm5VDo9sUv1a2PwiL3bcKYeHuNaE8h",
  "key22": "2C9UUAi3RM1frZLKLqfPGVHc9RpGKW8PATnc4CTeEBLeMNf3rWhsxcm8eehQUdNgEt4QeSpMSdKCssmRMgVTQwyA",
  "key23": "gXMMEfi9oDG6FEfVuxvQ5DfVmnVWPRLJ5vZbtJKXozxsYvsHqwoaH4fUzghWvRvzcDMasPhnswDEboyijciWopa",
  "key24": "2etooUN1BpUXZ1tLjsQkM2RDAtudP8oxTTRqGzuqhDhQiAec1TrwJ9ByNHUwgJnQfbqadkufKnXgRDCsk64epo2o",
  "key25": "VN97YTBYdtd8Lo9xu9P8j5nJxFtv1hhC4uc9pZgyrnwjdc3EN7LvJCJJ62fncoCXd9HyDwo7eykYryQescF43jx"
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
