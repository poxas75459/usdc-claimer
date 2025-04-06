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
    "62o6n3iJQE5s4bcCC6LusaskfCy2JjFJXHB6LvQfigfWuS3L7KB4SbL1RPgPQmM25ex9iTzvcBGGuAvYYybfNEx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hXdaNao4cVMuyZzijiLwCS7994HXrwhcz4E4WcsFojFcrz3QzkQUbXrNhVhrex4pA4TGW9sjZU3FF74AD5gUACQ",
  "key1": "296B7kd1CYqn78gLpY98Su23uFgXftzpvzQKS5kyhBhmNYurwdW3hYtSx8qmkTWmhUkjNbMhy3Aww2WLoqNV2N7J",
  "key2": "42RkZtsgg1tEtASgmrFBc152z1TKq63tMJriKXxsBqFo9XkhSMBc31jUJBoGqaXrck3KoZVo9hWF9H6hhwRZEYfd",
  "key3": "24c5JMVq6MtutGyakPztZmnnwKCqxSunr112G1MbRuT7LC7Udf62DeU94bZk7my1bwAeBxZrTWd2oNi6QXjxDb19",
  "key4": "3PjABsu74hCVp6qGVffPTuZG5QFUFKSBDtSgHMwbddTff1LJyRUYaYkgsjgYUkZgQPWspf7UGX4bdwuNMGjHvc7B",
  "key5": "4pfp6xz9G1ktbEKVWGKhRjetaGG8vgHVNp5cmZzFdY1qo3JjgH78CQ6V7LyYCFjwDgLSFfWDnrQJNsrYsuRnA6H3",
  "key6": "66WREGAje4R3wJNuTL7LtdsDHDSmKVwQKudakmD6WeCYN6iDqmkBVNjh1WEuTFg9ZNeDGW9JckzwMVichddiKHFy",
  "key7": "4CLZ6qdxmzFMYpSoKA2jKaT4XRpFXntxRGtHq45fC9a4R5ySHGpjzJZaL4jpURDcyQ7W9aY2JBP6d3ZPbJkEQVYP",
  "key8": "3bny1o345NJ1oDASimPcNdaDW2Us2xujmZSM4HWVMPimHT4FxuBXmV5LZYN7oy2WjtDu1E35CDoCtEAZyXRwCNAB",
  "key9": "wzVrkKy1v2UqMDXbc1nXdvq9h7youwbAq7ftaAXpQ4dFjoD4cqjag5W6xqEErGktGDvCF8G7Bi77AW9o34ABQpH",
  "key10": "5Fiafi1v1SL7SXq3Sk1YKZRvxGS15QK92H1SzXkHYivYXEg2xzFMhreGqnJwauEZCfENU9UEezSFAPeRNHGqjqJG",
  "key11": "2M3suUapKDeedVbs5vUbJpUaY1ZjMLKp8yekLu7gBRocqto5AYwJYjwJk2NJ4zwC6SVHbyjEvCuPhjojVwWZERGt",
  "key12": "2kc5SA2Lr7bidv5e6JQcGREMRpcbtPA3HNJVURVpAyi5pXGjCXzYSkREi9kvQiZ1XKRjEfDn4jgFctR5GCQJnUGz",
  "key13": "2NGyEkqLYa6uF4vVWbPdTEYdc52GXHLQZQkHbgvXjs4a29Js3jNCNKvMi9jtwc5Vb1UxsyGjpKWaLFp8gsGPh2Wn",
  "key14": "4vJ7nsuc8Jr2PZFTdqKevxyBFpqiGga5FJhgBmndSjB96h11j6pXUhLzshfuFXQKk59CZuMphsQmnBG1YrVxavoG",
  "key15": "UFaK77dWimivRN8fznzMWVhnNtDEgLJwuJ971H17mw3J6fY5XVg9oxqDo9DsgiDVDGU2N1pn2bMPBJTrFGzoeoL",
  "key16": "4sVnVTZQ4hMt54DufgKAVX5EEvUyKA7X1zxMFcK6r7fSftZAQ5VVQaFkPyjY8aCaZpGj7wmcYVUaNkscc2vDuByJ",
  "key17": "3j9xuacRFiBh31Ack9yBDDpsDU37KBwCrmQSNsJVzfWKocxQaVeZEgcF8iyEpJD2SxyXktKyTmK6oFswT7VDh2co",
  "key18": "2R6NaoQe8abSvwV3uoZnosysR8KuAYezqFjM1Fwbu4oQ3nbEJEfssDo1tqVeG2T3nUrTEqb8LwNGNvRqLpdSuFYx",
  "key19": "51o2njUhg7z8ZJxF1tzR9Hh5V32KYrQoDcjvBRNeoUZhbWprWkuaC8kUpR5fUgMJr2AX8MGYGi458YuNCSeaM6wj",
  "key20": "2Cdks7vSNqjznFfeSKb5eYiekiNKnXbXTDb7oX3KG6ECNaUVAbUCp9CHrxfCPhigVuAduMuqAjRUj9khdcJBvYys",
  "key21": "3F2ktb2yhxw3y1jLDdd8xCJhoqJV2Hz7Du5NsV3BWaLkdUZGj5BFq5uowEKpg7sieVm5DqKSUdCHZfmSWUvexu4S",
  "key22": "3vjUs7N4m5yvQbh5YcUdGs1WdohKb9uJTZyTs7BiYGCSuG1aYEbrEr4aq1bxuk9uvPagMFuJR9QqpsFbsvwoNa2m",
  "key23": "3c8CEA8xCRYor9PPPxxAtZfUgPuSvbcYLTGYGN5WZVWvbg5Fp8RGLrKk75ycwLU9E3TkjfUieXn6QgV8CcJ6AQcK",
  "key24": "2FU9ACQMup8mkVVEX4RVmdsJEbNijBLrnagZ738nnTCoegg2nTCLMzNSSJPFvwDnx5eKvQup9dndF7NQDkQrgrtf",
  "key25": "3zaTrcuDQa5a31732LqfihHVBCRBuojujEWXPukx32FZEnGicdivAuZJhwYnXqBZi3BtuY52QFoyjuxMQ9rX9DuT",
  "key26": "2YsHqZ3FTDxkXNXBysrfrG7yyZHRpA9ukhA6vitcXMXneuSgpyqsorKeujwvwbUmmYNkLHE4Taym4zLunRWLNp7K",
  "key27": "4QXUPzfn32yTXr7GkWRthp6aveCeRaDd4RcZ74oS898TXo7iRABpbfty8DNSBXydTchNi6QPN7Pe3ux1xEfi16Gi",
  "key28": "3y3nrgBGHTPJN5djHPkd4Nhwpj1MW8feFdiSgBpoPNpeTRH1TX2BRsK9T5ehvFJ9euys31CgS9VdJewZj9hZo6UN",
  "key29": "3LbKd7ETcZ5DHz2PspjW4D4YrBMx1JMvLj8c2A66RNqohvHTcSbZpSGZgL8eenfjYw8vKdz87vd4PkcRqLshUQPY",
  "key30": "cr2ipDDoFbaKni7dauUBDDT4yaaooPHJYFcfDaCd7hdh2KoYFZzTGWdsBGmAKHgx39dDuB6LnscGgxjVT9iCX3i",
  "key31": "32u2ZNfLSgk2KNyGf1526XoRQjCvJ9VUKiVCjgA9wK8ahtLewb2BXrmxNLCKfoSDkQYNELCTcjFJrRf8P7HZ6oAB",
  "key32": "3QP9BpoErzMDeKS5K8zZyVJtHpHGpUPMS9uTrs1pLPKAs93fBEMBSDHKBYcfmMJj9uBu5wJgXL6jzxa1Q8mHccA8",
  "key33": "5VcpyeUoP1RiT31embQ72WsZb7itxfKgfXGUT8crsUYa9iTmw5kFsy4P1kLLmjqjtc9KMKfcW9WR6fyDdEvCAm6A"
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
