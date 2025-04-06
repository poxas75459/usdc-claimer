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
    "5AqrHvEE3WiB4HsQdfcpVAHw25nWvyuZRsy2byMqzC2evsvaemGbgLVmTWwXoFPpuZNSQZsMkVMMVp6Fpo4qJGvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u6dRQsDsmwH1s9Ts9ENSyv8d8RFbRnjxjL7AUdrXqiMDEVuFQsqKHo6AGL178vbqWavxabgaPCCtFuRUPKTvnki",
  "key1": "452GEvw3fp1447d4HAbtXX1eBTQ48bj8Tat8Cwa3FCuofG4i9GTjhGAwFbjTWFr9WVsLBWUDGucDJUE5gLXUjZmN",
  "key2": "LZR74RASpM9djeD3YTENxQE61DCfBCaprCjAMg6gcFHfsbZoaqeWHeRivAEivLPYgYYA6J8U1sEKUtTL4PbEBPN",
  "key3": "4Ld5hAGCY3XoAQWSaPbhPz3NpRguk5oLsNzYuwTyx6LHqPoq2uMqsb7GMicXzQRs9sJKXhMYXicNRVHTPQC89JLW",
  "key4": "SDPqtPyDW31TTomiPMveGwmWR9YSsZAY99yqorG7pwmg9BtdCmr2V2iPQp33J97GkxRTvpwZYbJ8c6CscY9PJQ6",
  "key5": "59uAgoRRiHaKmpKGVyM4o2kw4fCtKGjQ9Wi73SRtcwGBXivqH4UL8K2ETnKeL7XrJnwk7BWCRZntHHqL6nYbX7xf",
  "key6": "3LuhdiHWxLXbMHXVmkmSR7mKW5aRn1tgZ4PLictdNs3wtiMLnMm4i1qwAyeiMHAxdm7qVLonsxqY97b6vNJdtZ1M",
  "key7": "4qythn8rigUJgnStTSPpoJaSBDAhr362ks1eUFZYy8y6Y6QGs6XHY7ZbFtK7Q8NxEPKmxc7q89ovF9siFqvo44gv",
  "key8": "2Wur7kN3bNd4Z767pVoQ3py2qx6soR6Q7UE33N2NjvkDKd5uJMTTZDQBwdFK1GhxBNAFCfPA3gkZRsjagBrPHyry",
  "key9": "36Xd6D9Tv4pQoVzXwpxaSyDFHW1pFLLzn6NLtYswNzAh5RC3pXzyra68Ss3oYRzJpdQFG1P4sPhR8xXxBLwidSGi",
  "key10": "336Qe1qN43oMtp7xpqAnyQEpkQXxccoi5d54dYYsVbg8F8VavUMnAkyDTyDc5ustqe6HddcQtQkAhoo5Zwzispnk",
  "key11": "5eZCnBLUfh4vr53AwdkXx5VdxVQnQpaRRePvL8qdfzYDrWafbNVqDxk6irxSRxKEscyr7u2x3FWEc1ooaPFJyESL",
  "key12": "nHvVCiZNH44BqqJmH2D88cLHq7GCuvM3HWSi3k6XQ2k5xBCzZMNs8HpkDRdcPq51xoUzjP3S1XEhApd1gLJboUc",
  "key13": "hespNjpA2AnnwRvJWSJQ89sp2DxEisMbLKMqW7mPDwhT7YaEyf1tTbKcfL9VKnh8n46rcy3qtBL1LR4EznTevpc",
  "key14": "5tFsx6pjggtLyw5UuHqm4CUyy8SpgNgZMsZkVxC1Jex1XJrQpDZh9Fm7xniHmJbQ1tQL7gioaU1aEbr69xvY3QTv",
  "key15": "8CBo2YkZxhQfafr1eJnYTjNRx35e2xFWPBnfJYiHbFaW32Qu5HAE4VyWgKgWXyknFPY5EFd4yfxXmSuGQzD1t8q",
  "key16": "34116wfnXSBqKQ6r2mJzrSHbp8jZoMyEsKFaZ1WLuvq5yYCtExU6AGmsG7x4AWE5fXV7rD2SyaLhcXCDsX2Y8sAZ",
  "key17": "5w2JvrWVFupmDGa2RRRL9iocWVuaAPFoSfGfjPwZencV38H6N8DKSV4LUcBkdGgJR69ybZZ8H8wXZNxSk4nZoCKZ",
  "key18": "3tL1gj9xiYH2nvHMasbVnFZAddhgsBPW9eLfHhf7GJ9bt74SreTjUdHBxjBkS4wJRUxNHhcm7LUpxJJHP5Qz3zGY",
  "key19": "481Ay4KgjFpZwVYtd4tSM1KtVTfwH1WB9pdRQomN8f4yANDHrKE7Rp3aLJBbUsRHmRoFrd1Jp2NxWmET1n83J8y3",
  "key20": "4Z7M1CGHDsLw51tw9nrLJdLVPEfvhgzYmx1S9iPJqtyQ9pTV2yMAkUj8pCJrYmW3C8ZXgZFAod8TtzyKFd9QZQRn",
  "key21": "2eqfLUKVPK576ynNXgBE9kwrosk2bwbHSaKKkcyibHzF9mR3gCEVGKMcBtVpUdgUESw71xqZrxetgWBxJe2raxgB",
  "key22": "4BWiiFKgM8B29EuEagWVNHzjoit4hXB2fby3BcCrhaHvrSLMk2nJHhWaM9LHbiHS2nnZnym7UWuc6i1i2F8pqwFJ",
  "key23": "48aqP4Mo15e4H2HL9j1eDbhWno1HCokPpjmZFgpEi12xgVawLGq3GV5m1UgjrSNqGhNpTC3jwznGdWtkiad1QMAV",
  "key24": "5MdEq5pTdRsuW8PTkehXvEqbDcjHB9dvNV2bSgszywSABufHbDgruJy2z76vCB39sNiozaW6R2gA6rcztWsFbjHJ",
  "key25": "5qBuKbLW57TLGQ7md4E5pe1Q811Ky32MDoqdQejCvnEJJec9TkczsCA1baQbyPwr1MHjob2VN9rJdojGExKbENoD",
  "key26": "3ny8tYYRc4PL98vaci8QKzjRQvmyuLyZu6fGfbBY4hYRAJTY4tiakok5ZhUNBWnowHgUkZHdEEJRvGiZxWZrTaLN",
  "key27": "4hVuQeTVFrhbE83K4BqzZYTzPPqh3fMzHaxrMwp3PBhYLWK5sZxfcM9eaEnEzvc5LpUy7zqAWXVzgQnYvR51pmoE",
  "key28": "3ECCj9zkmb8XgZAxFPqBaSb18b2daWVVhAggsBhn6XenNxLFJUAQYB9ycpUbbVdtxqT7Ns6WeV4H3rzD5UUTTgG1",
  "key29": "3vZDLFdzf8yZAb4d1jt9gEb3QUBo3USxdSNszPAKTQS4YN9BWGeKQgpa72tBWKpT9Q9jidTt6j4BfKbbUhjWSqbx"
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
