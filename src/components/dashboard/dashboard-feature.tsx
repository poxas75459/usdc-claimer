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
    "22SphLJiqZjHJSeBYyuX39UAWUwwSexWXmWQoXhbztCAHLdK8ajJGAqJTruh5e12ui9V6qGuAWoFymT9N7LzGmVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24ESdcKkSAcAXx9AnoEvZb18MbR79E7wBHi7xN8oHURCbkHbjuvRwEv8mHLYTqR26xoCWRnXvaoBGnMVdEc2coBv",
  "key1": "2D7FcoB6aLRSuBwu4EmGUrgAqbSHtB7T1VTAiR7DFN9zpHXWKawj35Ddacjo54hz7iCxUM8n7xtvapjRrJpfcxnz",
  "key2": "3VszAxQ926Wfv1oF3SVhxVLoCfZJtXNJhYmJuxmgicuyZNNEAWXUj3wWBcA6zfVWw8vcBcmezLsdX8PARJ46pP3M",
  "key3": "5zjAKzVwh4yEyYc3XPt6CuwxkmyAreSpaeBTgVLyUaWmPzQtVFVaGkgXreEWrXZc4mNiWzrWbq4bDdv8YuaMTQjq",
  "key4": "3ZW3CJheuMc1mvHMtQvAc2J2oRRTZDMVnefipHMm2xXVNxE9La5JSGkcu5GRKcHLBUsekauvgps47Ee2YU329PG2",
  "key5": "3qYAaWkieEe2uYqfZoL5pLyq3FmA7oFytpHauYQRJV3fJG82PJeMuNXtKME4nufArmAhpJJsQmP6BFj11CmkJYoT",
  "key6": "5AumZcfwNgDMWMPcy6kWRcSKedLKQfNHNmRRU7h2oHYVdYGFNLsZaN9pQVUYQ7AHfL6Bdr4ocbkq6HUad5bEpqtW",
  "key7": "2dZTa1Lhqi65oDbKvNmqUmAk525HcVY2pQYwr9Ne9szhwoAxdZVLsXiYf8XByBLGhNYjr14cAqe5NUShmjHzjqsG",
  "key8": "5aoZ65pn4W51Es3Xp6EpCpSs2oCxnREQPunwJsDPqYPu87tPXoZpNDbYbVtZ58PqdmBstpqzGfW89mjcPcVDxf2F",
  "key9": "QF1EDsLsX35kccrLjZEAHKywGWcenXGTfEcbczSCQLmR6NRA1EZzYMLoPrPsYxiayFqjXakr5GUAsDcsdvioZkw",
  "key10": "35PwdzN9G5NNMpwDt5t94oVYWBdE3Cmyc6fP4FoAg69bdDa8UZ9zja5v2ejNCWekpVEpCmqwjzpct8NMNBmXqv4S",
  "key11": "5zqVPNw535PHhjd3yGRNzd8Rm7yBHsmeQ4e1tkCSo8kDdBKRtwWnbG44a36eJgS1TrqMZTRn9j5H4qB7hjvTdbzT",
  "key12": "59rU45KjrHsuC2Vkf8ioMX8uxN5EfhtvFA8sMyqNTRHyibPdu7jpiFwAyg1JrZXxegUHDfM9KiHomFUgkJbh2TWc",
  "key13": "5WPYU7MBGNLngfCGp7qAr97xuTVp1XNu23pWP5735o5zBRDgaPD2id3onhcNEPh2DyEmC5w8NzXQEmLqCoJjVMFY",
  "key14": "3TzgQAHUZpima1BQfHjyu4LdHMT6uU4qiucQMxRPuxTHzvsXmCHcZZ1RYZW1h4vsfLvBaKL6prcHD2iCaDRLNYS8",
  "key15": "38mR5AS3wzFKdDtZ9ksGmxcsqZSamEhi2S7ESuuyC8LbwqaNMXVYKZYweP2EMNqwkYCQbG7X8dB3HjPyWFWYDnvc",
  "key16": "29AFTVw9ZKwGWgZNK7z2EsHA5XXnmyudgtnpDeD82zQ1jFsqCrE8zXu3BSJ1rAGsTfw5NdAo7SAB1Xgx1DyjgXAm",
  "key17": "429KyB18ysRdWcPhSgqFBZdZwNe3BN3BgX9phLx1uT4fhQgrMwopYWbGK9A7Urb1mRGxe8EpPB2sehp9fXLtjBmW",
  "key18": "3Wmhba1qtQZjgmh7qtn7cVYUuLbBoU1PaNjfz4LrXbS55H8KZt6ZGXpkmTxrSw5hEwzn7qbFgJzUvhjPthtjrkEm",
  "key19": "5d4SQdGiL7zhoFZ83e8fuwhTm4hbFG6Svm8EkYK2CGNMgjMbwH5BeJvirAuDtmGr8kXRAFaGTwQPSSaj6z95LmVu",
  "key20": "3cVVCqa9Tc787EnBM9Avvc6tAjvJXMah7u7PBURbv2RCuCUADjj57zXLBs6rWCEMW56jYdt2J51x91qVPCd1KKXo",
  "key21": "2RH1qhwYC4jVVJNeyETnx1QPZ6JascHttiHkWTTChSQE9mNsT6Zpyf6CQQ11ctcD1rcRiJJz5rr1n5Zk1A5LoHSd",
  "key22": "2Vxeh2hZdn4MP7GLB5qbCA1D3uAKA9EzkLpmAkcn5tY9k8C8EmhKpVijZUR94ByFG5CPTSrsTRvKLZ8h5WJNRKVW",
  "key23": "45jXJRFhNoNTY1pvnykgo6k7uz5hf7MDaKgsuRVewHsD41ogP5KTwEAjUPCWwNBKXkwxdUt6wmaSnokNXMrAGCEN",
  "key24": "75yfJVfuNDukcG4d1GtirTjaFwAXtF6eDM1EYeK2yDv7fZy2xZsDDdzRdoQTBvkpAEXwPvWQMcBS6v6eu6Z69AH",
  "key25": "2MDg5U72GBFsTrpJmnuAdxMQWzDrya34Ko1YzZNoscZGUormegHxtYWixfLferFPv6nsy4wvpMyGNdpM9hnooR3h",
  "key26": "5kA6PmrP1ryitt7S4YYsGeKQ76dfucJ4oRicNAGT7GAB8gURSR1vyVm2VQXeaH3nozErQGEAyp8dQXLpMq24Z19m",
  "key27": "2GUyCNAZF23dkHNQTDAVU2U1HasYqYnMDmWfPx1AbNzd2LtS46RDSh9MpP8NexDPb2qippmy1uzng6zoY3r2UoWj",
  "key28": "4ix4HSiWjN5erVp7UiUzNsB7kJR1KZSPaCeJAF7ZEG8PcpxLCiDJp1sPKgcbLdwKzbe3ibny1PcKhWzCj45WUAcY",
  "key29": "jBP8rQCaLPFLf3u91LAu5nPgvNHGyEQxYEJSDn6YCESyJ84xSqQjqL9a7mY4dP7qkW5Haag2rdcUvskt3fuonre",
  "key30": "5kpia9F4gwny39Tsrh3HRkn7wDSrqx5SJzoRvwxdna8y9nbJeYWpwKKtuZ7JWbmcDEvEpYAoSKwXYhVn3idnHfU1",
  "key31": "5zSSemtdp1WFo7joSU7qiXZAY2xhmbzMSFy8uvmhjSa2ovSGFk1KL12nSNSFMJvHahA6hQrjJWmdKNDx3kMJwMVn",
  "key32": "2jYYAz9ScpvcKzba7sWFtD9qZ13nEEhsJ5Q9v6ZVznDB7uL3XXNtoNLw3SRnrLpDGnomXNoNQDETQA3uREGmf71B",
  "key33": "5RSs8x7phwhDT7bgXUt2kigcKprAGemadTnXnAYdi74CHJEGX61ryvPbzfmK5c5Lw2m7NizzQWydndkEFUQfkQfv",
  "key34": "2dF48N88KnKzfjqZUTBQeyrybJutTaL7fyFmpbdKiXFdBaK3f4gp5ffowQJ2FA4QhDGzUmaEAYMXu5LPB6aqshUZ",
  "key35": "2U3cDRjR2SUs5q7fimjn1v4n26VRkB1DmmNgdVw53aACqVATBgLM7aLpsHJ5PoK2qvV2DVZYLkRjxfkY1WjEboW6",
  "key36": "4A35y42SXAdLxHy1RFK8XMBMrFFADGxFQCnCC8DDjDHuQY5zsXtcsZLHCDtvubhRrjeYdPxFBbTC6GRc8z9zuGVK",
  "key37": "FAmVsmgeKfMHBYa8L6kbqiw4EXEHHudbi1tDaENNqzFXsZTRsWjzFPrq6Lr5VgdZHuxhqwZ2iSYddrQYiYRW97H",
  "key38": "mQSH5iKbzFHgrb4WQdpkq4Y2dEgSjT8fxdojS5YfbZtyFwKt7tmefkSSW1EknZBb3KhWBRtkdWDN1NURT6ys7XY",
  "key39": "3EfrUWtfwTbkai98UkUjvRBdVF9UYiNNCfz3oaRuLgYnpG3yG66hxEoPwPv756wwqac5hhVhGkB4DPBAPEzwQKKj"
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
