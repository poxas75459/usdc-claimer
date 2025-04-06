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
    "4ttPfX4GgVBFrARDNGiKNBbDFZAKoCFGFPp7JR3xBRGMUgn1UFCsTL4qnF9SJJmaSmPqbG49qFzAm3i3t7LkQgs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wh1G34xtqEXzG1CLEYZ1DjcweQ51BPWXKpxgm1uryJzVzqDgZVau27ixSd7L9uqHdKgvhSPRwjto5VXXHKWXP48",
  "key1": "Z9tssdC5Zuc7k8eumzqDYainbT1RFeGgGYaD8f2k5egW6FgTxacKNv5LwC5vegTFCA279quXVEPP1qXFSV61xmL",
  "key2": "4xEiGqh1uwrdn96Rjgyxy1F1kZ2bFhu38m9aigpU1nvPSjqPQUkdvZNL6JKUnvHQHSQ9R29AgpRSaYYwhzKXjhLm",
  "key3": "2FEPWCWKX9CEf8P4HJxK1evzLsPYp8SjA2BgcPEp46Trm29ozuifaGRKCTnJ5BfciF5QLgwLMSmEd5s3D893hU9Q",
  "key4": "26hmKQekW9gt7qQy4dXu42JNLbEx1LeResEokKVCvnGM31qQwMc8Ad912Xi3eeLWTym639ziauzo16MEpidFjpJA",
  "key5": "3sRejvuv8wp5VtPfTg6GthtbincRhxAxcSaFg4TEqWFQKrsPnAou4unFyvzSJ9u9CAkmH9BCWuCN542Nm8fGm3W5",
  "key6": "3g6uQcJGVjTTjhyVh61oErsKboqB3NX3Aaw4Pv7BNvZobX1SyMiL7hF1VpsFta4sX9sFXsMairkDnFPnZdkB9G58",
  "key7": "4QowYE51Ww1z55VbT3RihmAh6rHksYBRZPf67Nq4FzgLJUuHEGg84hAUNV3p56z9nYpLZezWY46wuaQNxpETqfM5",
  "key8": "5XYyV53LQP7AuZ3r6ntdgJLmKGfbE3zhZC3Fyz6EYTfAyuKg42ohNWRVciKDfDnRD2oJ1XypjWifMmmY9x31b9km",
  "key9": "4hugMqFc55Smv6huxYAqSMkyWHAv1Kbxj6U8msT6XeLmXK5KCccALgfCe44TFraAFZes9UubBYdV8k3a55HkzfKT",
  "key10": "2VK19XFSTsDYZp4iVb3kd2Jh9VrZeqTnhhE2zKvHznQ83qqxQjLfa57gwKJhDDCohLiRs8KcUrquNwLmZu2jaoeB",
  "key11": "2NBSXDzDcnppzyjAb261bm2HLwrFDCvquj6yohjvqcg39tbWd1prFQ4SFRX3K6uj4hTDjj3uNNbv1tfWnQSq66SJ",
  "key12": "9jyATbSeZhTxYKMRFb8QBBepNCBYqMPgJ9T1CBNeViQFEbzfdnhzn2rCXRtZyB5MLxRmTnT4pa1ghTyuKfPryD7",
  "key13": "3p4JZxYvJtvV9YaiWS8MoTT9FKsXB9XBcjg9RxULHeP3rE71fn1SPhMPkoAVEq18kNT5yjd4oB5mpoK1W5jZLX4L",
  "key14": "xAMDewuHUPr4Xgefyn2DQWqJnP9KJ2ZG9TgFuCMq2Mpdssi1Zi9vsK58W7qimcnKRdzGdTzbKzwMW5H1TFu75A8",
  "key15": "3nn11JPn2aP26FVdC5q5NafkEjYdxFtN6zkKYoe7rfFbNzBfKXCrkbFgWrrpbAWJTnmU74zfaxLtbGCNqrifD7LB",
  "key16": "39mdSFN5PPvRMS2rh7o39gFqVH52R3mKhY7vTM1onDgYQBQLxPYPJ8KASR1Qvym3nSFWx8F8WP7P7Xc5s3SwwgN5",
  "key17": "2Bm54CoVrVs1Pzjof4dsEJpLp4tCkhPpqevmtfXfLiNDZz1AsUYTf4oMP26ftBD5oQUcXL67LyjGC5Fnc9E3BN3v",
  "key18": "29eePHJJvj6AVRUvcFZiNmRiac5ceGRLw3YtPxzDsGGQHJA8CYWFaDbc9G1Q5X7p4TQ3RGwQRQ7A3fmhydm2PC5C",
  "key19": "45W2aZVXyQLF5asBvFsJyXQ5eJHz5cnp3ZzjJYrTHQZAb8qRLSVj6v9woFffxAtSsUmUrSRhA46ynk8ScUwj9fcZ",
  "key20": "5QnERNxcHQms6JUaGdao8hPKdbnBvMUTkFK1K2yXkaa32fNCCq21AqvXuEHuj7RFsjjshPCQdUFUFeUfY3CSu2vu",
  "key21": "3mXyF6YU3GTn4tmAApnTVmBNoDWwAXpaaR8gixWNdBR9Vr4mcpq9gKY17Ev72hAXb6Ybh8iCekJJky2Su2f5dsJB",
  "key22": "2X3gMTALZqZYg8GKLkC67YvWnZDtdrGqa5YnpJURkwRrjjjhuGZ9g3HdGwBExjUyfPKCYhhCPcxQGHbxV5VuV5b",
  "key23": "3G36i89jmkUr31piZP4yoF3TonXzjzWk5Ppn8iFSK6rLoaUhYrFEZVxgNxR3gxuVYgJy7eyaTFwCzLzh4Qqwq1KS",
  "key24": "xineUcK1cnUjn3H1QkXyTPKcbA3wuQryuqSQXqJYeaa8f1WNLDPwspkHWfpmD4UDGBF8SUjJdjfHgKiXEtiR6w9"
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
