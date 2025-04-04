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
    "2SANoFYA17TLk1R3TK1qhr2ZfNxB2egj5ZcGaTKkP9Qz2J6k3kEDaywbmpTrVepa6AZbpFh73ZXjFnrM7Gaisrdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MdgNU1d7WmBUbKSzipzFigyGXyzBSYu56AVHwXjVJ46Wi39S6szqMj9nktQp1LMTjAV6MAKsDWn1ZkArenguXjA",
  "key1": "2UZNR5dGuWoB8tnjHkJSL5DqAjoCRcqC8K59DP4CbJRHLdZ8SMVWdW8QDPHCPWn3R6v1wLhM1yrXzXy1CwnuRg8s",
  "key2": "3j56t1BtXYvYpV5Hwb5mC5BLx5WCHcJW369CM9L49mQbRvCifhSS1sF5opNmNYcE2fRKVpejx8ND955uBy82ECTw",
  "key3": "2p7argBXd2fF3FnyF9MydRknnEXMp7nYT6CNkQQCafSEFqHYGQ4jV5aQqv3FoiqbPkg2ZmanuTUVYRL6JffZDN3",
  "key4": "e7A2rk9jb4VJf4LETXKeG3hYjMWdKrCEDBLjTEZ6b3uugYrpCJfDnAbpDF9B5cWTrnqBd1hjLDeMDTGrBaeaE6k",
  "key5": "5ihaBV8KvCvV5R8CZKLgxehqqH73sdH6AvhoDFdVjUzmwyfp9oTiNCLsbo93ZFdMRMxuCGECib7Yo76pYpjPQhv5",
  "key6": "3mZ3yhUi4UzHyLNHWDcr5dqUbc1e3XcpKpYqVqWZgYVET4Jy2ZmvgQcAwphxASUzErwtC97cx7NE7v1ynVnHNxHN",
  "key7": "5ZCBP7zVcXMGSPtxY1nDravSRdyBmNz8kM4ehU5LdsMc2J9NVhhpi9rvvpb826bbVUnh6aeqEzqNVKTxeBQMZwMz",
  "key8": "5rLhYGVSYL8Pg7FXMH33iUok3dqFx5KL4Ej19zgGuajpBDMeb3GECGuDB1jHzNgPWdbs4qoyeg4hSerZFGjxmq6u",
  "key9": "4eS9atredAsrXWbRKMQcbNB3BoNXDcsPzcZ6cG5s6CLNBr5Dj1UbAHDaq7Y2zrQPCx5bQj6K7mq28wkjdNxxZxo9",
  "key10": "23nz2RvGbtyae5SogoX2cUHRdbvSZXpUhUYLDkM2211C55nDFUpofVxNjBrv7BPTryWD3LorHVuZkJ7pqt3AS2WF",
  "key11": "4bv4ihQp7vWxzu4y5qMu5BK7e8y9i1CjfgLvZJ5KsMxh9YPwproBm5ASswLBoxanxbyRo8GPf1c6TMtfsEciHSxP",
  "key12": "3LMszfDQVB3rQVzqT4kyjwMdz24oAECB4kBMCsrLLZ4yphFPgp13dPRmDw1Qo7fSxBvAwsfADnY7SPHczu8kodg7",
  "key13": "2HE1h5jDo5KqrSwZNpBZ6HbRRudCVvemQGbtXup7M6wxBQJvHxLaYUsqBLGWikjzKQ1Q8tNpHapy2CEpnsSy4s2D",
  "key14": "22s7gPxPxW1DND6iZe8FnVrHfk3hTxezdvVyZMAqnLxm2N4Nh2f3sqTXWGDupAwZjQ4nMSBWN2jWAYefRPCNbu7i",
  "key15": "3sW3RuikFRt7Tr8HFkoWdWX7VwN7NsnDXNZQBywCVd2Cp3Jh64E6uFtmZPQSDQBRmdj71bq7iVqitW7spCt1RhGC",
  "key16": "37jBzMf1AcQJ1JyNzBNwygA4KXPfDFVarZ3sFcBpXSVBEzgousmAMw1QvLtaocDydm2gE2x3zWNqTfq3vMJg3cPC",
  "key17": "2yZyMkG3Lhs5KLsxfoa8fjLuXmiEGH8NShmn7wtqb5r6cvReqYWx8hqavfPzhmqQ1JGvtAb7yB6RLzsFeS7N3Va7",
  "key18": "3hR63kBPzSX81cq5sLorBb4ZxRtj5ugmt7ZSQ9ikcoJfzasYm3f5hcGfQizica8ei1MkSsA14ezPS9ybCgeU1tBQ",
  "key19": "RaTKpsoQHt9M6TVy2u9sts6NFHr2PCw5qToRfapdnrD6o938K8GsDGRmtpk4gLMqu6nfZvtL455UfgAN3MQhZQS",
  "key20": "2wcmpQ1v3Vs64vRApuSSC1Fpof6DvWFinQbtmSFy42ttVZACwBYqE3JfySVpQ3J8RumeBYgPRM9MLdk7xBAvnz83",
  "key21": "31SceTUNwWRXkepgsKDqwZugMufNqhrHUMhxDn9FmoAuMmCcFmfDDgBWzgmCneES781UXJe8K3jB3WdaT94Fnins",
  "key22": "52jCFRBqscgwK7PLtkrfxNPhZZnKnG5LXBwNKY8QuD8kBnFc3aTGTHwfAG4Qs8P5UAmWqS3VegmvUo6QgQ4AAcwg",
  "key23": "2A8VFYqBmma5KV1ePEZhc14FGWrAQMrHbtiQpGB8yFDBo2mqXnptuRUNUSi7pQnYKk2AufdwXe139oy2bvA6tvCo",
  "key24": "3GqwDSTj2MrasWM83u7wHGkZHU7azacsMc6qDgB9qq26FYRQv1yJTEk1yxk6UKhofgSYwbDf4VgoFxmj3KFyDFHr",
  "key25": "5PtJY6SBjgZPJgTefcX7J3PsDUAHi7ERKcHM36PEKeDobbrbvBFn3yYTTUJdKRYYZ4mvKCSjyECk11yBNTBnrDUk",
  "key26": "2mEAPFiattmU1rdE1UEpJsYkzrzyLfLTCgBuWwZ9cWRUBCk9tU1Yjg4RgoQ98B7c6BPZxMK7pwdTw2FxjVEjTfZ6",
  "key27": "29kHei6M8MwqhEX6YShqAxZNngizumENaewRY9ddHS4ZJtHLUVBNrrKpuNWDpzW2pzY1QYjAcfPmtucPKByeReAT",
  "key28": "2mAdCGxE3UvqEfQCW47rcLN2QXtiFZpoWWxQoQbo3VahB4p3n6ZzTtjTJemgpyvNfXG1GsRBL1d5LHTuQ6d6PqAu",
  "key29": "cdaNhiJdZf6bwpzmrbXQ7nSCY3u8hZQkS4A7ps1X8FqJPtRuxSJ8YnUBn9tkykNRwZ3AYDLQNro1VzdaWRE2X6c",
  "key30": "2VrCvzfa8gJpBJjzUfGKqcKbwASrRb9u2HaSbiyoFCi9TLc6zyzzmnsQ4Sesff4rHQvcwQq6U7Wsr1ZefcUrKLqL",
  "key31": "3KN4sC26oft6vtY4Eg6d1hYSaD7H8aiigPYRaAeouGaMcWAPbd64GshTHuLim3qzMGSEgSs8yG68HEGQ9tMt5gbu",
  "key32": "2TveJ8fNZtqE8DTHycqigLL9tHtcZxJZreu77atowRVUMXs6s9r9HqPsHDcmvG1HYWpnXMQsasYFgKvbLH4ncCdA",
  "key33": "4iGGv9o38RwtiUVJuCvia5y9pw5GDoYb8wEeRG3du94W6jgfoNNz5tWfE1JWd8gEsy8HGmtCb2jjy53rsEDJzDT4",
  "key34": "5EJUFmgd4CB4MfuFJvgiK4cDvabKkSr9Pxac7aLS7pWvp4KUgKZsheNMv5NzGQT8YZqSt7RWMd7dzt2JKv3j2SHv",
  "key35": "4h41bvR5PRnqYU3wA7ukopum27QTto3E6CzuYHDQbwnsvDJNR1QY9PE4kxGNUE8nm1G4sr1R9vmEU4sHAafprMgC",
  "key36": "3mLuMa99Upzis6URHpjoNTBuaGMD49xzS15j6fC6f1vtsdQSReKQwjKvgbinqn6KshmdKcW8ZoA9WiHHYjCzHaUv",
  "key37": "669M5B8JF6krnRurCHaAuYUb9Zps7eVrQLFZb24Y5HzRhjUnnwzwLX7mYfV2zZxBht6foFTRsXRspSt1NNg8HrVw"
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
