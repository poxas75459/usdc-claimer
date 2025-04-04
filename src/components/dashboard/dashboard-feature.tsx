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
    "5eCzF7wGqNEhsVez3giWr8DGeTrZb2WMxjKFNQU8R5mk4i8sbLeEa6NvrrQFif2sejLL2frEwiUNySvqhAHFeLb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66xetXNJ1N9baNtRgeLExxhRZDzyfdcYakS3BGMZtuF4Qon6XMyhBy1cMq4178spM1x8W4ppVrSxkhMH3VqNDUba",
  "key1": "3yCkXqv9AuWu72WwDjhyHof9GXwvKavuUi8mdDu7KhE5gKrAxVmZoA7QfvSNn4rK21oaxYyuPm6z2tU8AbUrGmt5",
  "key2": "65XNujzYyuR8SJJtXbHs1m1oCRgvme4nczjP52gUgvwLAkCfGvWAG4aBNaMK3piYdYB5znc2u3TMAqLsuMDubYrZ",
  "key3": "2QQb5kwJLVhpHJnJXt9PR9D5JhusPdoDraJEAQYYm7ipHvq4vfnDLdQ8kyrcCgbgUmRcsCAdL4NuyB5srdMaaYz2",
  "key4": "aq6XCq2Fnroj3DXK4R3Lko9ys1Fk2fVkC9cUPH3zBxfRghDavPYGYbtC3UJ4bwNLvGVsveD5cSe2c9r7WMoh7kp",
  "key5": "24wREMq8Mciw1dpqd26vUb8zqhztN7qfCaXr8tHtvhR6JtdiYiztvNmDi396kK5SvSh5sMQAjEgVFA6oVA7iNZc5",
  "key6": "4ucuPDZEue5EzNNgmZkhGqMGkhZXEgrLtPGGJCbUPWvqwMMEgvqyA8A8qmwojPnfWuFGMutkr1dygn2eUTPMasE8",
  "key7": "4J6yq3sv4ueqjGxyT869wyATRuHNptyQmod7TWNmgzuFxGqSC34WkD4CoxdKSQ6GvVoRQtjbfiNMretwCQQuhsuR",
  "key8": "4ibFRac5jWWw2Fs9d3d4MHjfnNczznHu5zJhw2UYQYMkdgkAr4DkCVJ9yFdQ3yaaXN12UPETbAmSaJSJJkoJCuCR",
  "key9": "2oqQUsVfntYabdxAzjddPoHmcX7JqFNcCGXRN9ZdoXUXMyt7HjjQHn6CUXT8sAsNWAt9qjWqJi3FKqPq7iGeF9ck",
  "key10": "3kUrvTTnuzfsABcKNSg9m6WLtkoKg2YkzbXD7WTXxS3S4sxzZ6bHJdGVfZTke1wsQmmaqDJLtzTydwsM6ENbbTZb",
  "key11": "3n4AaHxybP5MyQz5PewZRPxWwhu4qcjudtEMeByaP3mZHGyt1xxHN5z14cPeeHY1qg4FCccHtwRdUfwsv1sAa2W9",
  "key12": "5V59B2j9dRKcVxD2WtyFhECJpTGAfKTvmLrMYFBf4F5nF8uDXXcWA64TgJoExvrk4qnXyz1KvmdALA9ucbXjusH3",
  "key13": "3sfTZxFSYpq46V5q8ASajyYvZ1Y5BiCYkiYAazmT4QqrzTF7hQcC9QGxxbKokjH12yA6cbXA1t5699wBieuvwEqa",
  "key14": "4Qe8DoL8uiqYHkej6dJvVssVfJjCFKB9369YMxuoAyjZx7kmTMBh8Qe1sYWrCXjUdkMMVFJn2s7FLMc41Yn7fxcp",
  "key15": "GuvXKqFsYfR4krcF3aowc9z9aFARFhPhJwqpUWE2HE94Rb6jkSUHW4gFMLxZWStEiDqyxajDtY3Cs7YmUTWFAsR",
  "key16": "2p6c3kfDML67MLarWxDeHxUWXwhSmh5vp2w8kL7UfpxSQ1VfEYupLWbGKEgjZ41LTY6F5samWq6mFHkFj4Hd48nP",
  "key17": "2JGPd2F2mgFFUThgp1A66XV9EA5Bf4z18T3hY2nwBbKg6AtCMXa6BPfzY8RM562mzvoE2QV9HnhJguphgvSaEAE5",
  "key18": "4YyagXFvW8JwjkzJcbVnLjFKuqrWCQwc951NCLQjgNZQ5gSHp1MJK3hjE8Kq659ihswiBveDa2ThUFHEFzjJMx1c",
  "key19": "zdzSqXuh8soEAxZtXUgm4YU2FYqDNtywib6CyjgamYxiCUxNZDBud6CZKkgKMnNZDKKAKqWs6crhHVj8BKAnquw",
  "key20": "4Y13tvjKeDEyob5fusdTuBRXQJMrnsZ74vAZVrsW7nkysh7b9iavy5AswoMTRPLLxpPMaESQNnF8hxZGXdPJvmzM",
  "key21": "8psgKiECZM2NmM3cVQbgkV8CaSB5HCVj3Phc3HwraCBAgmR9SchsLaqpdWpV4JrBq3WTN64r4vg9SFiiNnt8N8E",
  "key22": "5nMPXj9brwK1BLYGR99uEC6RSA7mmb5XR36zEwBrnyVJjbNqD54bKdw5MLfqn8eeNg1WRcRSQSkkK3KmSyddRo7Q",
  "key23": "WiZVWFFKRyPaBNM36i8GmksPPWUTjhUr7nJ9XG6ExxoMHs1oHopymFVyUEBwT9Tkh1kev1vSVAFavTu1UTBRaB9",
  "key24": "5Fr2GVPZAvH4mw8CEGGAYXV1kstNVwghsYN2XWhoaopRfRZMQZmzKLVgj2Smeb8VTV5ZL8U9VFb8g9z3ssdTLEjH",
  "key25": "44KJxtjJbiEhcmtT36L1XUSqZN6yvhQYyWkrceaddMsNjfuvmco6qS1bzz4Hbf6gojuGmF99RojF6tRVUHPJdu2g",
  "key26": "45fpP2g1C4obeFMrpuWby1KXu2cEcjrx2J9Z6pYsHnKwiGHNcweSS5zxqS7UBrieAxSNaN5G43ZSwcyM6dBWrSbz",
  "key27": "bX9By8Zk8746TcXJQHA7dnQtsmcktkHdUfKsjMAG3SeStCgxq6wMNf4Kb61KyC1gigfezU9Hu7B2ZzLhvQhuPbG",
  "key28": "5muJQdSyN4j6pcox89Mit7FpEUzchk6V4AW53t5yv4ySEVNxQkVRFdJcZYn8Uovgj68ijnPR7RNSeb8ACpBPpMbs",
  "key29": "3NKd9bwQybq7F3TrtiKDrney5VdWnXyB6sXm3Rofs4ccj1onyrV7M2SetQQc5Z6DZNjacYcdEVE5zesvnmxT1ZFg",
  "key30": "2JaB1iZstQqFHmJsKV7eCV7ua3nuezKghicL6HGdVp1pe9g8wTETZYRwYUxbvSS3AephpVQUPpLAAWo4LUGPk9hb",
  "key31": "3X5Y9gvpkviNZHheQvyH8WA3Lpu4nozZhjXUdTy2Q2GQSBQDaWx9KXEcdpJeuwQtsar3oeqVAae6Sxpt2GxhrWw7",
  "key32": "vocKmj1UMysyfFaushuaJ1p9eE91D6qBKL7TQ1ywF5xYy5Bz2S1atrxYXrpdBsNYsxnMkuRcWsWpPYzh9eaX5kM",
  "key33": "HD2v8n385iU5b8ZshDFqtqjAWWiHz1Z6EtsVwH6vu6CxYVKjX8hko49BQvLsyDpKVwowPxj4YAqn6kjsumT3tMb",
  "key34": "3MhzXUJhdZG9EYrwQzE5DxnhSFtMPKUvvQWc3FPBbQifnGiPJPCstZCvC3BpuMmivrYWZKheh8iwBFUbVnoVDRpV",
  "key35": "2V6WNECbQ4x9NCCf5QZPvik8GxK1pxtmJJoF7GsCj95dBao7Xdp8Na68wTHu3j6xoSD3bFvoc7UiGDWv8yZv2kGx",
  "key36": "2axzXhbdWkBAXeBxq8zHyi2v39ZC2Envk9RXacn4uvSw2XTHTgxHVYqMoT6BKS2ML2fSn9BLhUSgLowPPfW548eh",
  "key37": "4LiPJ5yWaaTWaCeaot38PggGB4bA4a3jzyg85Q7E4zUzYN79uTzZPfXaZevdvvkZntM4FhPAWhpWW3Rref7ExDCB",
  "key38": "51hFaHSSSVFJiivgxzG8EzvqPEFsTq6dm5K3fPBP8SNPfA4fSSsmUa7RJfdzVNd51HEBSzGeY45DqnGEE8tnGJ8z",
  "key39": "4cZnujaZq5TdDGQju8CpEdmJtWWAkLhttUVxsR81gSbkqYgGHk2ifsfo3Hb98uLKd7qPfTAVeT7QzBhE8z53uWMj"
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
