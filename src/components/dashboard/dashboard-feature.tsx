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
    "4zQ5vGZwTbvUTNEriuE59JtymKcL5WYq2ZomxayEmH2ou9bB9UMr6J5f9zyuepKx67b4SZaCAt89TjGTwJszV1By"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LtBSo3aMrY3ghj4fxN3nsa8iq389xYTYxhNvtj1ZkpwUMo6xdBfrcS6Haaea1DFfJjRWPLbvMaZrzu97yfNtiMp",
  "key1": "4QrS4d3ZCuRaXCfKn1zXxsAbwTBZKVddRatvsA8cz1pVmv5JNranUpX6gboL7pogkW5QxDrEM6YpDTtJRRCturJw",
  "key2": "3Xe9639wd1yKUfB8zb9mSbXyQz6CnutiHQRjiB1TXtccPHfbtvFrSxALdrR7NHGoDzMdYromYDY4YKqTXTPKBuwh",
  "key3": "37XqyjcbxoGEkkABsTCG7FsV6FfpxstnhV6GpagGWU5XjKesFzXY5zNtxbzSF1QWtZp6WUctSmFEBBWN8eazJNW",
  "key4": "2dRAoT2onREjSQe1FucCi4ckcbyGPuSnUZD1RDLmM6aEmvrBxQg4NNXu9GTonAyediateuUHW1dfAwUzAKo9Kvee",
  "key5": "5btsunWHimoMTbaxmq7j9FpWbuQviVLsuS7nDSLqVus5NMpqtNXw8cHLL4yGeq6GmbJfxJxdegqeF4ZYFKb6QoxN",
  "key6": "Pkek52acDbAc6he6dvx1JKga37pEFoF2KdzSkuCyzmjVgh7GzDmcnv5gWnTcbNfPUbJhBcK5qwBzxscBPoCC7Rn",
  "key7": "48Dz8z5f8rMGECuGceXq5kqH2tyecARQr1Cayouko15Z7DdUoQ6bFF2FnXwXkh2HuLra2LrLGQ42G6ryoTpECCyb",
  "key8": "3FhAPGtxVEeEY5HdZSfa3rgX2EXJuvLUtGKHBgWus3Xe5hjoGoo1Cnp57tdnTxQAP5d1PpmdUEsFyx2xu8JNwsna",
  "key9": "2czs7ZUWm96pjN566LByBBsEyx4XsV3YpenjQJrLEs7fZGxqDB52ERNSBqW66bZf5xshyefir1f8PKeCafhU78xL",
  "key10": "58jo3Hw2N2VqkDf2a7SHYppB5hcP79j7b7KyqziRnnDSzmQr1YNrnt5utafjJNKtuD13MaaGUMSApih7uf4ys1sM",
  "key11": "kAVpRipjK5jfbUEiUeNQ4uXN4uVQyzvd9cvJmbziK9RHkiHR8AfYRPpWcYjo2eYEkwgwTcHq2nsjHMHJ1wEJGQi",
  "key12": "2ui7qbQtCexrNaq2jNxdP53J9RwPa3UjDgEiigLWbrZJ1ZkQZhBbfBYte4doBgNDsyAq7FXuZL3udXXWcfQsS8Hz",
  "key13": "122XogoxSkd6WWNoG72KAD6135xonXHqDaemTKJkxWTmwPfWVd4JzLZFs7WUAYXNV9VBJLKmFXTs7SNCfwHWuL9j",
  "key14": "6777jHunDiZBEqkCoQAx8b1nf7sc25HiQuDhvgnrGqCVGETeQTKZGmNhUQoe9TGhEoPF8PTdb1aUNDy2tem6tCuL",
  "key15": "3KEKYPya4o1ocMt1jMAX7GhYTc1JjwRM4qw4hFM7787UK154TuXzQSKHoS61R9n8tNgMtAyFN5hYDsiHav9LQdWu",
  "key16": "3yJhb8rNzRuB27eDyzbuQwTAWy5bWWBDzNJvJawvUzbcQyWtiSwFf64uwafwwyvVvyQ9opergkPWJvtA176fhdDv",
  "key17": "rf5EUEjqjcBNEH7Jo9et16AqnURrqyTkiQoRC53oh3wLNJWWgyXF8ZWQVKBQrVb98NzJeicxLjQ2pMgYmpb6QcC",
  "key18": "2ydbuvYYT3wnNk47GysMFcjHLvjmpWZn8tdNYzxXWy5wLipN9NnFEu8Tmhp2ws7dC43wAR3iRQLQjGg5JXKHdTtc",
  "key19": "66jCUyepajwM9phR8ouEKiRfEAX2XLuTRGaHvZSminkYkNeHUXwTkvC7jitB3miu7NWBwPvGGNRXu7mSciixDXMr",
  "key20": "5htBdUxd6a89eJgKLESyofkxiLZ5skNLixam1anGRgDq7zie2xGENtoBjDjP9kgMn7g6iFpEXf3e41gW8aB153Ex",
  "key21": "62rwEfLaCyP9A9eBpjhgSAcfjWmwWqcyQRZdSATmcDPoSzRG9yRNuPU6Deox4aEnY58oehPCyMhJNGWgzy3bzZxy",
  "key22": "2B6LXnb1Skn4MgXcCLULoGhBvYZw5ekc2PvwFyqa3ViJGYxkgzm6UB9LvQztsjovgeajEdbTDCEzMb6DNg2zi9MR",
  "key23": "3fzJ9gFs5AqrBJHxncEcLrNG3dbLMqQP4LUhGhaLxouq4jwJdQvrnxMAinacrkbPWs9WSWGw33rEMh1bQnQ7Vo2t",
  "key24": "4hsJffMMQaHjVztDwHUBLJnwc7uwszJLoSZTHWU6EsCP9xMKfTjT4xndWELsF6fHbhthdTFkJ2fXWUDkyPS8G4Jc",
  "key25": "rR7yktJyfXQuuBjJo6vqqz7DrknmXu6fhVTjm7LjZXC2bJkh58MWS3ebRhHS6SxpzLbCgQtZy7aJXfXfLptgZUC",
  "key26": "4bhugpL131cVTegnA5mgkEBA3w4AkN86pT1Mb46w31zBBjvPuVBvtFpmbnAxELLAp8kjPM3RXb9EwDPfEqMdUb4b",
  "key27": "3a9vKPR7jakznxuLdXEfw5rDXEoNFNCpc5Sf38thVXJKxdTGHR2qnvpA2i457ZEhxjfutj6ZzzcemNdHwqF4roeR",
  "key28": "274zT4GnH4hsY7Qj7hh6kBRaqVaZ9RVbJdGiMDqiSagckshbJuerwUoi6TDWVpTJF5f344mtYkE2qQj796fFi3vh",
  "key29": "5UyGCB57ukEFSkwpnbvqfXKn66QfcaZrdqMP8UAdxLDBcVyuYQUFjDfGEj4EJsEkqHRJdZdiKYCZpV7SqzCBVH7P",
  "key30": "x7xnzumTAxhySvJXq1b9HHZw2o5cYVMMm4AjV35hYJ6LWdiCzPPcxSYVnSoRXNEWhXRgeNopafTTxdsY7oejY1J",
  "key31": "5xfqZZt48NgdqDE3WJY92mv1S6KWcpu4YowjcP9r2Z6PMW5F7X9WUvqDeihKpDkaoBBJuhxnSbEffH7XPkAtZjwR",
  "key32": "2LHApnC8azheYg9LPV9pyFPQBSJ7Tq634tJTPWZUruC4KTiS6Fdokteovc1GJT2zJEsKkDPo8u9mKDpsz8PiSdYq",
  "key33": "2nxwUNEkyKDy42cWGVfEvShJYPkvjRHsTPwWQzuk61wQgHPvuV8dQkH8tnz9RVWxJMhLxq9ZcfUmops21TKHUigA",
  "key34": "42LDGf5mvWfV4AgmVuM5CqSe4KQRewaF75GNocbnJaGds6K7Chs6TkQGSaXsDXrDaDyffzVCq3GmnRV6QMPUE7rZ",
  "key35": "4HgSQ3FoJSEVzQiKLdGWZDHoEA17aPBpsnhDYfgVgTZiEsV6ghssHFCnthhxRe4P1qVhWYeFe2MUeEbstW3KwSha",
  "key36": "5tPPZiG1S3rVaficMwLQrZoP59CS1UYAAJGkhoikNyhNLDRcZ7Ekfkxz8Jyft7FMJebAbhmEcGt1wikceBwsS7EM",
  "key37": "5y8d3HHHhoqEMdf5ZunSKr6T6S2sBiP51EjL24ZuVSZBK43w8XGd9N1n2dfbQ4uwP3sBAqTNqa9mLVcMedoRmGQm",
  "key38": "4HyWdkTJcCFYvM1gQM9BzB5dQU7J4gHFw2VUYcyvg64HbbKxj9zPQpG3bpBhha266Ch52Z6LMGDEStzekLDxWCna",
  "key39": "21cVxq2a8z7khCSppFY1Ax5sp6118SWBVu7CZV3VtSRSQGoNuWF3RRqfRzS5wDffQJc2yEkbAUAc6BRiH9Ugv1sH",
  "key40": "3RepsPumvwcJVZtvEq6X33aB2Le15eqWXk2TQWYSGVfZC54GWkd2q7YgAaJ6DwtCQCaGaht7icCLAeNDXGWjjq87",
  "key41": "2bn153GDopDKHuhBqJrh4NTwSP9CqYWikxHiAwLHXjyFUVDrcGHh83kxDJ7WZS1qd8KbvHVN5WwK63cCCDAKVcS7",
  "key42": "35rCnp6MBXHnjAMoineBAcZFDBkpk1x7HYKw46NuSjqbAs1oiPa5VyY9DGPGQG61yhXY8sNL2Zinr4jdncm6CEDQ",
  "key43": "5nvNsWjZbFvFNFyX3AAXUtrdpuE68Q7thZHfY1j57abHfxc6Brodk2WPWgGjgDjhwmQjyKghjgiKsJpXUqsxTybz",
  "key44": "48KkhkBu8LdSc8Zyx2Jagqh2PVwWBteE8vvV1uQFKnvGwXK4XUNqTQXGNe5U5FNdPwo3Mbxt9jsREeCjdgfoWidR",
  "key45": "3wGnqNDVhByjL6PWHFUKLe7Gr7HU1QsnqrrG2sA48mifvsjk66FvS2nfASFQRoKAvMdWtxM9nNKcYJErWRZtSMUH"
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
