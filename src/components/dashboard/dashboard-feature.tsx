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
    "5LM7xxShHZW8AFsU4Gi5fgDMg7tzwd7oTERWTbcWkfD5ENEA3BGru7HRGygzv2hzppEBb3zxvhZbCeAsXzUdN5dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b1rh9L1ZisYhgRBkztCTB8v1Xx4z1v9iHS2ysss595XVhR6XxqbTYyF63h8qxZLuYAi6J8gRePW33gpCtZvdeVt",
  "key1": "46ekgsR5nBN82uQzMxjvo9PUKfaEmJfY7uRs4gAaZUr4A4SR9JXg7BuZuh7xQdhe8NnAtiuL5M548QWSWo46YY5E",
  "key2": "VU6sAooGYDumEXagv7crztEavPnubijKZ2cUrTn87ot9f5wuaxw6sP3xrs9K8Q1g4msG99UizBxdJfR2uwSznx7",
  "key3": "4b2Z8SJi3MUKuUp37Syi9uJmV8g2uFSMWdDsfmNWGYFm2eWka6BkU4B2TP6Ptgb4Nkv6RirLR4NKJw3jDF5V5fpp",
  "key4": "3i7sNEDCeYT2JwgkM478NbHssWmwscnBEYWa9152r1UrqAApzmLLZP1N792jzNteU3yBD6cX61x9mfKypMWUxLan",
  "key5": "2qEy58jd8xGnGmcDUesFBT8RkcxFq13mPDRuGZFsXQnNRScBnLFffxCqZKeTLjJxx4Q9iNcHFfU1a4eeTY5R2iZW",
  "key6": "4ouXHRmCh7ERDt22o6UC9WXCxhTNZzP4H83a9k8yCmhG9NrXwoLLoqetk8jnGohadHJWKmg4kn7E2DZifJuWuk2D",
  "key7": "pGeysJH6DntpQfiErCV4bqgrF8nVsyHpuijUpiCPdzet5zLvfZY2zB7WeCYXTeb9ZQ3KTu8empJWR7mL1ToACzd",
  "key8": "5q7r55RUunrnqn52ndgc3oGy5NeD1S2DBSRt7to3uFdbrZFXEeU8S2kSDFgG7SZ26A39Lfbvyt9NiYq3b5njEmKi",
  "key9": "saFAy8wUKzcAzX8dNjkKYvzHn3Dxe4sbyPKJueaQhDdAui2qCkKCsNxK7XtR6tw6kMQqDdSQ7F536W7FKCiZDgm",
  "key10": "4aows7t4XMU8U6mkgoUGBrexfSnbPQ8yFkDFgAZ8bESgDEkiYD4jZQpyE6jiMuBP4X3J8b85dMz53iqMmduNQeU7",
  "key11": "R94EKWhUMts5hovW7eh2cyx8MzRkmaioEUSMGsYuvKg6qqsXSskpK9xSYnszxTJ5qEtJoWmUH7cmJbCTVBFqhd2",
  "key12": "5tftxmU8pUc73D5N8Sv3mCpAkPYugfNArwPnELorjpmP5Eruy4jb77zYnAHDDa7tBH4k5Yn75L8kPjJpHohcFemV",
  "key13": "jzyKJhFjpuf6TtHuWaRfR2ketsXBSs7eYWLBSnQQD1rbCXSkCVK5enoVNDDz1ENc8aWxmUQd3xs2Lm1Kup8Jh9q",
  "key14": "2k7khVkbRVdXRnKESHx51nkKngHyz4rQftK5sTRAn2NggdW16wgSi6qiWdVjQ95oJUhwtz4uVVvRibgi8KVNtjXA",
  "key15": "HUtsvq5bRYvSfbWpJxrijmoua8SB3ufwPyaSDYqEyeP2RJZWRSE5KY2oBpragT8QzJzGwasRyRbbVaNha7LiKjd",
  "key16": "ri68RKzFdtSHvmC6pU6xypgtobTQ3wUyAZ26Ggsap1m4ojdhtcRLb436dPv4Fyh44cyPoMyqcujWa6nPxcUJsJA",
  "key17": "4bN5uebPNhnu5ZNSxY91K5JZc7K9jCR8CwuB9JRHuA8XbJCysDTTsM2syzYuhmToBXhhcXjvSQ7jVT9BWkBMJo8J",
  "key18": "jLMhnix8T9segnEeDQghKqVsyrpBPrYnH1HtAKP6LRwZ9LszYytaPZog8SBvo3ghrjkixFNNzi5AAaU2ki9svNF",
  "key19": "3Cp8bEVH4euuidewxBL1SM8yc8gWXffm1oWGf68aUYdj7qqbHC5ewD5UJ8EXEZuDfbdggV6bAcSab2nq5Cnt7rxa",
  "key20": "cet8hpxFuyF39T1Qxg4UcbhFjkWmvnkXs4DnNRc1WFxxW8ZEp22HeSyQfjbiF7dQWs95FpoZ7mEmQVRRnUK1eHV",
  "key21": "2NNk7DsuXQEtRNmja6EEEFXvmszdofJjM9JRvSbwbF4yXc2NANddEStC9FtVMpSGQGwSktVMbRp9MVoLdTLF3AYh",
  "key22": "3DvGQ2YNbAeu3JcfAChyyiTgq9azi4vVHnHFuAJxZ4CL3U9G3ZZnGN1J53Eokn4QV9FjrMxm7ubs6XrwXkkfhaHx",
  "key23": "2PFzm7vsYWN2vgKDNTwVMqAVPQfcpFYLhmpWmxp2BxhCECi77YkKgDDxTWGMU1iccFgdsJvXMg7KuX2cfY8STLPN",
  "key24": "5oxXeA4LfJcYE5VjuWdYqAyhqp61aXScAToCcqEMDDZrsgJzZJNuZNBQFk6v9UQY8SjQ5NoTqik226PvSEj8saNw",
  "key25": "2pufKMKKpXreNPLDAWFMfKj7noaE9X1QnQGSBWV2nhrth5U7kWsJGo9uxzHzwbfPwKzyrrnCu9PjL5Y7oKa2dx3q"
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
