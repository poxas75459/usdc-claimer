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
    "4ibLGu12rbpMDxEnTFPFGotHp9tjE6dZLqx9chURTyFKuATmuDTVddn8F3Y48FAHdTumG9crP8Q7kFUysfhMBKHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bMprsFXZZThCHttdEQDaSHx15DZhGGvDvcu28yFEaQXwJeyqQb6vr4SQsG5FoQyB4Mr3uQzQ1eyDCPSkpLLJ83g",
  "key1": "3whK8aqL1v6FNA7jrFPrLYfV9cnBp1YoXJHw4dXqJ7t7sMRVT2PT43nUryU46ndSjQrfoz45vdtkSFZYMsPMwnBs",
  "key2": "5yXjAoijptkKrmnnEW78SdsWESUwhzqB44Ejdx8ARctx262F6wyqYwdDdXd641rgx4LjC98sMiGR4fYo1RYJPhe5",
  "key3": "4m7BNKTX1Z5mcybyBYsxaSCB2CpatZdkpVxTZKwDdNjGF1waHShWAfhhzD9HfX7WqWMafncsiKs1kP1hiz2UNgJa",
  "key4": "BJvjB5L65EwPvBf7o6Dzvt3zNpdgUPo42DPincov9yDdbFT5EMHZm3FcuzuvSqBTLfqNWZneMKZBHa3vCLYRme9",
  "key5": "45WAwicsHKXEHqNy38CmiabUoXb2rYisNLFThPiYpFUiS4KbcFPZbCJNvTo12XYPNpxZntQYbgptS7hPYgfLUHbR",
  "key6": "5kw7WmcfjKs5X56Fxw6tPaYzkWTXh8B6MYpSuu2nZsmoiPS37kQsdTVrENfNDtR1N7eE7ZkZFP1BMs1NtcsnbYme",
  "key7": "2baKHedjVptcpW8SvqrfHud6CpwC7GaGm8YjJ7BhPHEGF5T234Gqiziu8qZsSVe81vB6wMsn8g6kB9GvaiGB7yzp",
  "key8": "2mTM1fjK3PM8qCLu3Hp5SfLN5m4W8GF4jJjmdzGohgnFtaPH3gnyuGrgZueyLx3Lqo4Mx3rMjsiH2isZEFoPifJA",
  "key9": "5gJ4MTTQyg24XXskiSsrZq6gFFdKqAoC395eWAqA7dcmr6Vjw5HS6xLo6GMCmZfsAuvubRC2X1W5LdBQP4RtMb2L",
  "key10": "2zZSzeperyaAfvdwPK5AGuGmtSDqts5BuqPba6m2htnqg4P2y8WzCZ5s9BNKqQDrzUYr5XK7yp6x9sVRFupjnv7E",
  "key11": "58yTyZQq2QxhaFAmFBA9W8c76XUfKpn1stKytqUttneNV27mdx4sF2WHD2HEuusMYkSEH5J5oSJVnKzbs1ovMnzn",
  "key12": "52LL2szYKH3yZpaLJvHmBcpGvqjVba1r4BSWST3Fy2VbfQG6W8qYKpVBWxiBvUbdBQoKzJCWTzgQyRu3Y2qzvSTW",
  "key13": "4P1JgGqk81KvL9gR7qBTacgysMxBcVoxRtRa4Kra7crVQXuPUhQHkHQ5ohhoRckwSWmAVTSsx8gAT1HjcLmbGB2o",
  "key14": "4ZhbwXNkZLAbCkGm96ucwiEgCaj1hUkNz5YnHqDDBkxJQxRy1HhCnpqMJb7BFZNeo94esYEC5yostkifGFmNVkzh",
  "key15": "6rjC8PTm5nwoQdAj3gsSguBaRz3ComjL8QKu7RPGTrtNuMB4Cbj7nSCGsKdpFkiCzEn8XJQfE1FFLq5qnov3CQ5",
  "key16": "2ZMJb1Vy9TuTVzAcySoHQPbW4hKaSm4kHqFXVjzDKsJWeW9RMoxYLWKkuvz1Uk1ESBFbRvazajbtw9CqPjLXSvMJ",
  "key17": "5Y4ohHDnXwpyetnMqL9mUaQ5FF4GQTv9v3CYr5ZEsbfXxyEAtC8eDvduEmf4V2cqFJdFSoLVNX8veqiNRRGz5kh8",
  "key18": "3QCDEN91h8Gi5Tap93LVyHvVacnKLqT1yNGT3Nu85UVFGHgQpBaEDHVPKZYgNnu1E97FCrjMrRkRPL8bFyk3fgnm",
  "key19": "45s4GPHBfUhmcvASMPjMN4nQdnGMK5tZNssd881ffukRJgbqaTcLcxY735nyLiwdZJ6SXdmWzDynDfoQZKTv48YJ",
  "key20": "5RGYBx8PqtkXTazooUrCz4hwQKx7UeEa68mVRchA4QEwxxronsSVbLCDQLFsjXr5kfTWer36Et1yGCtbhwkMeTwH",
  "key21": "kTwk42FJn36dtn4RG1RQ1fiznNomFmwDJrmxUqh5mFVJHUL7sXmqJqUdaKDBL28tZ27AKM9SJb4fZTZvYkgGBii",
  "key22": "ydMF94ZnG92b8txwDP2WF4NeTHdRp2pwA4TFANpUEYdUwVQQBWYmhe1HdbisXZGBhzaUPj87fWA7ykEwBfh37c1",
  "key23": "2gbsXu79P5cN9n79ra7rqEY1a3GZuXwiTUvE8Yigxe82bJyNGvTzNzNYzDcL6VMBfWdTSMMsZdEpK7X1UVK9FL6m",
  "key24": "56aFQf5JQcZHEPfLHFPiLjBJfFwagjnNgbJCbbMxznhTdP1PkUwMX1N7Poppc8oezSoGhTTFC7K2pP1j8RtiTRQS",
  "key25": "8rrC8CZSWXYMiYZ6i4CuuQDUSU4P74D5ioqCBGqXB8aHcmuNb9n2tZrUGtxiJL7miQ6AczSPhNxJoDwnFH2FVcT",
  "key26": "23LXkuprA2erdGDtM4qNWttjaeujXieCFLDVfwTtwtwR21T1VK1WL33CnEoJMbrV2DK13d5HSZidBEarHcrFryM5",
  "key27": "26dRdWL6Qm6xmuyCaxaY6NScXjo24egsRRoV7m6bJuH8HGtBrDoJBdHQTwwEqbijXtecJWjzcsgEEfnp5PKASN4V",
  "key28": "5LpWtSYvoLXxeWJgCKPKGQvd4Qic9KCsCoytpxMRCAc7YPpAiY4RcoFfJtVn7wCcuhbnt7jq6kWsudyMfuqBCm6N",
  "key29": "4XckCL93XBrdx4gHNrt2Xco6V1H5yKM5Rye8zoD7T8sRjas5GhKcRmBQExqsvubhQutq4ur3LhXBz4FpQHGn2CMm",
  "key30": "974XfEcGWCvSSjksumWkPQ7J8Luk1UbHUrvpFRF5bPLcfda2wikvxVB8WZm5KzSqqcgZjmZCKyod72EtftkXes9",
  "key31": "38DPXPPXzCQF3rtsNGFWWaqyArCyTfPB7abuXptreq1iEFM9om4Fc4mHPDx5qMsFZDq4fVamLXQZJhg95qHi2gZ3"
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
