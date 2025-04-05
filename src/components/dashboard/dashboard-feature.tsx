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
    "FCKfe58rxFUciJLgDnpwRgxhLxEAWcbPG6uLEowbW4RMktVAzm5AEJ8zsboHoDwgrQrD5NuZnyLpzWiZTW3axmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T66xYgKABVZquNS7o2tMqGfvV7tRNtNBmqp9twDqFvQoRg1BMuK3CYtjQt5v45FZr23xiQj9J5wbJeZEF4LmBqM",
  "key1": "2T7GJktiU58m5e5PCRjhhzY4MiA5arTstRCconJUBvH2uN1dqvuRS8BauCBJZBxZpgN9Si8DGueHDLHBXmZAnCN6",
  "key2": "SrFTWrtm4eyY8VBUCLX2ia1dQz8n1oaEwCEN6yZgC8m9Kc7y9gwQLGt9pkw4RwBHSnLfKzD6fXxt7QVWHMX7u4c",
  "key3": "4DgJBfRXGhE6oM6tBH5HeE8ZEXih817uor3sWRwp5j7mj8jEstME6ZVQL42Uq8ChveXcJ5XPSLTM4sfc3gETVh8h",
  "key4": "3vVLyMFAwwfkkQePi8niM3rjuauafkzdjR4b4oba34Pdgk95bd239VDrEsTAzP3pg63YqhKKrqe5c6jNtjsBiXQz",
  "key5": "3JrBf8JLF4BELJ68fno1ePct795muHtKfQcGk7EXPAKCJKXsG1Gk9xiaW5hzAHgmvpPXAp5viJgNZrAAcbdQ9GAT",
  "key6": "49zAQg7tEqpgQWsW92HL9LJsPKPKwau8H2uSgv4PppdmgGEUY7FBYJftFKkjzPdH4MVwN2FQwuTRxfnY92efz69u",
  "key7": "38BLnqFTNQbgYsvZjbUbr4dR6e11rcD4pTkPspEPBjYN5wcKjw7JF3rEvyuhiNDJ45AgPZnrAGuqb4fRUETCLQHX",
  "key8": "39L7fKgcK5FdexZwYJx4EjVKVAo4D1UiUZYqutsgzqZjhpmFfK2xsqEh94CcmbfgzwtoyoMNPDNTVLqjvnQS3x8d",
  "key9": "brsN6ECTgWWKD1FcJMtL7XqFcDjXjLRBGgBMiGEGXKrWT1wrgqSPPx6BSzqmDkVbRq6QB4odE5MxkvhMZcBDkMZ",
  "key10": "3orTd6XdxL53Z3vgfa7Pgaii589RdEHqSyq4nwiFVQyrKkqj8dab5DNfijo6LCuPGgxobP8VSA7VhJBfdiNorv6x",
  "key11": "3u11BwyAq5MMtnGnuoPry6TGFZSSMavvMRGdpgZgK6LXzXYq7RsZBv3ywpV5YmVbE645jcDaZJ6EAcRNTxBkbRQN",
  "key12": "3tL5axycM2u9oHgWcRMdmCqtJjbktnHrF9hAAvaDkttrFrz8QEpLjpETobiW8E59JVGsiK3M9SrgrEH6M4vozb3w",
  "key13": "4yibpSAojVUPkmwLRxsp4geR9PfiYPe17eXrxo3joYqF9qL69wyufqdEWXVNRLuJYJ9d5Wo6E91BpAZpRsVRhQb4",
  "key14": "5CaKdX1dm2eTziX5WbrZMDCwh1jbBhFK61mEo3nTup5Sozh2Lfgr7w1Farte2EgXohSD8FiTXwXVgXMae5AVv5Kt",
  "key15": "5DF8BbKxMdU6N7kSDtbZXeLRYKLQkeR7ydGJ75iKqTDu1ZAGxjEq2yggBtoNbTzj2F4j439vPDyuUkX7qYTBeRbW",
  "key16": "Krz2ErNbEMxjRfyEtD2Y1NHZnpnXbws2Qw3SpzfQjRYSoJC8e41djUSJ4BrA2WKWYq6L96jAbMNy7N8TtTyh7FN",
  "key17": "63BzgU3qJ3RiQarsuPrzSYY8DodKNvsvKp8iXVPqwFCUC33HY8aMrJxHjGx5W9YWEjRLAohhe2NEJAoDHySZEj71",
  "key18": "3fhM9tefL5iz3DJS7gLUYqWk7XEAQuQRouZjrQDtJbMzmktKVPZwfhnRS54fHD2A1GRgTscyPpDS1ETwuqodLjK9",
  "key19": "4sYiKAvFf1rTY8Bh37B3Pph2rAugXWbLAbQoyvPD6wAcUHmEna9UB6iVRZmr4qDkcZ6QnVHBav7w4txXfPxFMtAe",
  "key20": "4Fxqw8Vj3Auy4faHsfURJtBAy8PUHJpMYQk3VVuJSm1RnfmqpEJd2Wm6tPRkJZtgxixo6Gc1kSPCTnZNAk6dnu3G",
  "key21": "jyAzAo4wPRvU9tAqBqAkH6xWZD6vecCKRcWtg5wuAQC3i8q3d7kWzGCvtTxBVruEqopXCCmyLG7VaftrZhFcFGB",
  "key22": "3NZ4JZkNVSHxtDDNfsXG4whCNgC9ewos9s77keiJ7Mk5ErmV5rDNn7PcmXKHmkN3pE4g8yWu4jEdVQtP7AJRw79s",
  "key23": "4UxQ3iNAGds5H3nRqYjXRv1kTveEu9avx61qDWEzVw3QFtTSbPzukQgv2KhPDNQCiGWzehe7P4geafav6C8nMwoU",
  "key24": "DdFttQD8zFmnU6VNU6euEctBmi3Cj6J9gc1mMJjNXEXbVzXTtUTLZb6N7LRmGY3nreo5oUKEyQneqdndyy5i3T4",
  "key25": "NFY6WrGrTV5an7ahFt44zQ4oeGzwyafGgQQdEo1r3BmeV7fYFGzHdfsnczysGMX4kpnDJ1dSXi2mrRwrQN4woT3",
  "key26": "5fouxSEVx41K3pE5jKS4JXDgdXfoEFCX3n9bSyx6QNk7y7RnV6jqaQaZYLaZq1VP8vrziFjRCQRGcu6bUjWH7a7K",
  "key27": "PbtJD5ik5DXiS4RsfmvZ4EKLDsB3dLf7yC7RutJUcfaMPbXzCYKzUXCDr2swDPHJA2KMB4TwsTUiapxoBSVQCMb",
  "key28": "5pSM5aigtXwKJipKnsuMLaTa7oopXHeBNrAzqXcoFHJLUdbkBTuWkcK5pnBEC9hXvGdv1mN2w2JBj7TJT1VGMpuf",
  "key29": "5AZcfgizmqfVLCy4Y2iT4u6A5a37XK3io3hwd9fWw8UP29ESn458YfPkgotkJwuMe23LpRMMCqweGUeBYMsRrKYq",
  "key30": "5aEBYs522RvoQwUWQ79BqvSoPCmYsc1fiyDGM6FSyVHJRrCCXnnAR4ENYJVqMJYrDUbPKgXf4SHbKFwfbfJAKTnp",
  "key31": "24PA1SfmL8LnfLoSVyf9i4Ffn3FvJt64WuYZKQHm3D3MJysosorsgya2kAdqvjMHubAEuTbyBWCABuVjiw3soPEG",
  "key32": "3rLbbBHELRB294M4EC5EPV8itcJRApoXiZWcD17iMagkcdsgKJ64LAaJ3dajL82Q6RHcuy5isBWKAtYvxMYYXrzj",
  "key33": "5HdyTvjEsgHFwsjk6wHjjUYjgkHy6kBsQiN75sUwCXUQvwBJUaNnStjHV1rt6SjJkNXrKDLzKmaseehyu7FagpHL",
  "key34": "3UGyaPBUnnV4HJrBwJ2xUFfaFaQ3KjH1w7fLimZqTjE4JHrq7wCobNKqT6EmaeMQDE2FtBVo63fVcexDnFpzQfHG",
  "key35": "3YSL6fGfPx3sN8qGq49gor9P7vU8v1zFud9miXqJLMHQGaWDgdmaizP8NfHwoEVmexLnmBFmYPUJDtMQr4kDKPis",
  "key36": "2VTEZdPckzSyk5VL4hXna9TGdmGxXBarMGThiwVUh7Kfmup5fEoATqfkydh9XEuVrEnUPtwxW6R3UZU5c7aMJqFK",
  "key37": "4RCRtemv74GmeUvJMwMW4Dh4GXyjAayc4UV71DvULBmSxvZe4d8ufFpWLMUF4Ut4xGCLRwLLyBbxZ1VAJN2iiM4a",
  "key38": "593pu5wNNFr3Rsozhz7kG4dCPXfDLQRsttrx8aWEDoKwWQ4oZaXhJU9NohGndFJVNffRpbgFtdZ6qKzViiNifWbs",
  "key39": "2bRZ7T7AYoeKBuGB5LczpSWjnPQs3anVbYf7mbTFomo8Zky87LFByUCHHau4DB21FXvhptkc7xaH6wHgwvKYRr7a",
  "key40": "4aK81iGFy8UZSja5zETRWXgVBrdJZVrmKLkPVE4y6eVSoKKSiUA1fNGHpPypBF1Gn7PPLAhrUUHwJwVtw78XX1n4",
  "key41": "2kfZbT4ZcyJmY6eE4zBy5Y3RaAs3RRSGokipLUgJdEddQeZvK2JaqyJzaMsqroRCdpcp7GVMA5wPMhtfztGqbPWo",
  "key42": "2UPcxpn7iaWa4Cc2a8zYcJ4sNa9HDaJZ4jVmi4aVboJqBhzwsRVpS61H6hq1AoNLNJPJr1uwNBAb29KrwAUMQTqX",
  "key43": "4gkanYNEDDA2aHeMjWhNHfcCVLdYdJRnHuEp1GA64aiNrgmiEtGpcHfraQan7EJNamFPzC56pESF9cnMsrba5cqg",
  "key44": "4gUjFvx3ShaUPwqPi6ZsrrqfKAPV1FaQ9mMsJLxDRKsitxZR2opsH5HD2dzhUMJBuNh715LB3tLZZGwKPwZf4fsu",
  "key45": "2JCu6S4d9WTssTaey6MHMa8d3MDHxZGuBxKA4iUA28dWQMLHjdYPZ7KyJpjVXGYAx9qXsXDT615p6s8ha9WhAg4m",
  "key46": "2b71nWLH8fqyxGCZz4qvcnJ1A8SD5LfyjjwkZunSJHMnZC6WKRBR8rttAHuNF7zSpKkbHXBM8qcsT5wrDfuTWuCv",
  "key47": "2aLNgsZjqkkW6gMeZLQCifzFJ21iKiLELU514TWs5s6ikF4fWx5wZvGgvyi8cnjFD6aCHE4mxc7x3o8aSwCaYyJZ"
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
