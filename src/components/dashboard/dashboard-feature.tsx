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
    "5R8bPCpiq1z9MxEwrW6n8ptfGrxxoCiquQpeutgCHzbbvQDehKscFWSZGTCZr3tbS5Jnjyp1gMv5WbhB3zcSC5WA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49TJh9F9yh3ZFkXFzVXWeE6m3jJWgTJxfkx8hgR5HHYe8orhozxQx8DvcqLWJEpUH75t4zj9SsyrbtyR9veJ1e4P",
  "key1": "5wHYxrUdrg8uQQmJXqHGbn3byKfBrfMLc19xhypEpcwZd2hthtaub7wW1FWzSnGtCd78d5Vx9Rnm6Tn61yYRVn8W",
  "key2": "26NUe5DSQY28JjBuG1tSPovvZF7w7QF7pUWjtJ4CNPmLzBx7xciYoysZUmUDmGaKtm8aNWtzkjTiAWFo6JW6jMc2",
  "key3": "4Z7a2eYf5L3hnzeScode8mzyFUunF63J4zjvAxvGVYNvuEWdY1QiywFijq9WvQk5T7NEtEUGU2Frw44oj5TEBPiG",
  "key4": "efCmARicudZ6TQzLAafeeZSXKHbQxd9mJCxAMra35RBEGyDT6aEhoYAGZCtuMyD1U7EvP1aAqok3Wn3LNCZ9xiC",
  "key5": "4UTG7W2Ssz3E1Rg4WQzwmxw7Nxo8EFqps9wft3AL7LwprxHYGx15FQwuFAiCpYAq783t3edjVMaVPAEf6JFcqhWG",
  "key6": "Ey3fVhuhfxMifb257DtPC9aB8dJ73heE1b53iTyvJy8P6dsgqkc8yoDHpbt9Y5FVnhbhbSker43s5H4yCZwt3G6",
  "key7": "wu5RFJMBZwZ9s6un5apJj4XgXBQeYySDffiet8JdAoVwjtD5j8DH4axyLArotxApxqcvSrYXQob4j46S5oqbzDz",
  "key8": "2x5kHyhxXZqoxabTLaJEA8CtXeZqZimzNcqDbjxVPe1hpp7VidYMgzVfS5Xhmuiv67e3nJp1CoPmpMGpJ388Zbkr",
  "key9": "fZsCCSuhWkxb1jRMduVZgLaqmDjf8GQpMyPhzX9vzhyuRoksUd1VrF6GWkpnfkc2BvZmjKs7Hvu2yTWTbKpCqh7",
  "key10": "EqHB7sPLrLvqUKq79NhaNaq8atwRkKcxnkWBGtaZvoAKH34RRH3YXEhUMcjtF9UEYLt9s2jc6oGPhRooQF777T8",
  "key11": "45GEpRNqVtNKyvCiwWEdp8Q3fEhqAxVBhGWQFH6TJbZY6KeNukgLtbwVGXfuutj8xGMqxuLR7k4FY9eSe5gLBwRL",
  "key12": "2oSJfU4UzEWKdnBqUbRLYbRCoNHDJFioQ5Z8ibKyCQPgfqkcXY4gxWs7Ute92fXxLq2U39fJe39LCWmPGrFmoJnn",
  "key13": "4mqEfds1Qy3bnZmPJxkbnWYx18HvScMBUtk5W7YnhVp5H2Yevw9oquWxBJFVLSeujBKewTtQAHA2sQ74TnDH95rK",
  "key14": "3x8faaBCpE2gJw5rgtUDSpoj3dwBxGkFjuBWFj9HG9eQX2iN9MrggJrdjoQSVtZjS75mexBTATadZfzchRCePWkF",
  "key15": "4maLodd7GtLnByfG1vconrwqaVwxs7LDRB255g4v6wURjqBkGpdvXLSuPgNKSaGb6XC5mE5CM9x7gtjgQTMLKn7d",
  "key16": "5exPH59jBvp3aJJRB9xhxuwRPQhLvJPAP5LRjWKdpW97nkZaQd4VQS8MpXt7uHD6UsoBYTSRuePgJWuv8VUp1Vqp",
  "key17": "2BAkWQbqhcR5EjfA35LJDWZqQj6XYz4JQfbF53rscSoxZy9UCHeYU9aE7DHyAxwqcRzUmYMFHwRszwGVTZqTJK6U",
  "key18": "jdshvodbxff7HttFw4KAbzzMFzCfVdDWnHfRVEnMWHRNjCZnXU2VP5sZZNpRWAiQxW4YpRGke6DpeA4kdPWkfiv",
  "key19": "cZDRcEYEiSRtHXBcMKi4dUmXRtj2hnua325jXU4J3TfkiMFw1fCGYD1ZTVpLPTKmFSiC3UDoMn3rwooZFrKKASa",
  "key20": "3qyx277VPcff9sAyT3dEa5fj3k5xm2QAjWUw7Mjb61S7ZQLadu5PvnEQyHPZaD316DLyLbxkzb6w95axRjWpV7Jc",
  "key21": "5ngGavPcbxQTikjDwiVDAcEbwKSTfvipkRXgyJvRkM45nCY7Un419pFNMpDBaMhsXjP5TSVr8qfHMLG5EJ2X1ixK",
  "key22": "3Rh782fYmjHBFf6k5vk2TUmTHb84qdmLJNuctHDnDJz13UjBBDukGZxbCVYC41aLcoPbAQ1fcJCFyD618vKH6L99",
  "key23": "8b4XaBkP7vnRvhfRosuFr44px9XEzkVettgK63QZUjfaM1ikAWLSThDRaJsrF8jqKLB1mfXpMmLkEvs6u1mF3Nu",
  "key24": "5L5EBmUpBxyHysLKjZ53meqBr8BNXEUuZqrfpzuf5opmhvz8fXghkzBsGav8SFhbkr3oLt4x6tDt4hdcSFWCM6d6",
  "key25": "3ne4LBj6ThFwYxw2xFfAKhLy3DmDKyKxMxv1jzSMBaNzxiYRwRfRrrsBLCoAbrhfhXMuFW2LzYkmRRrC6afYkJBt",
  "key26": "HQMfgJPoWfcHyQiDF6Nemg3qkF4LEPx26j28muuwV5XMB6NhQ3Dpm4XZtSW8tqYPUgFGVZr4Z3UiBv8uWjxYmAz",
  "key27": "uBzdYqYtaCwLk6UoMdzJN3WbfHiHhTc2Huxsn37tmQBnQXch1hzhg14XHqSLQbnm9LX6VskaMFBy62d54GcaFb1",
  "key28": "2zVxJPQ5uxVKTLMJQNH1JT31p7JWVgJWsAjC41uA9G1Aj5Phk3S138grvDMHW8EXjnqZt5jUBzLCS4VnLKGRnQej",
  "key29": "568uZwP9khwF8TitttY8xngWygsz7CCV7dM94KCdmskGqCGDTXFJMxnLHa9py43XboSYDzXHA4LPqgYz1hugAQeP",
  "key30": "61i5GcHmfdQQH7DY4aHJa9M5Acm1S2UA6KMWUAW1UgjZUaGYUc5CctykzPjsYtFtx9W6ubdx75o598k6FcNrH4ux",
  "key31": "3ggAnadcnykeBuDbKfb75gC8NnH5BExjBJJE79NhCNwjh8BoRC4cbX6RNMSfHAu2c1JpMc7XKXyBUS8QMvws3LdJ",
  "key32": "dm996cbduL3vjQMs3qrR4L1PTTA7NDjC7CduiHoGSeMQpYqywizrbX3mqTx9kYjfjsmWAb1ArsNcoPZrxxeZ9id",
  "key33": "4d8Kn4XPA4VebE9Q5ifcRupbxtHhtsrCTvXy2x7sgThGFxHNF8gQ2FDzahPUue4KgvJLdfDbgw8X5viAYy6P41aF",
  "key34": "3N8ZNMjbGDg8irQxbqZRkqQTuNsqBQSHbiQ2buVEAF5mM9uycJWh7WEVJ9TYhBVx5WLazihRRUex3Wor8jKqCGUb",
  "key35": "2szBDhv12dhasHGtkuU3Wnbbeov8QAoNpQ8Fji5yDnqGQArSC3WcM3JpRjuqMhgTnCV4Rv1bY2M7YeF1ZfCFcm27",
  "key36": "3apZD2RPAqfqW4ZhDEWma6Y5Uj1yQ8vLfKM4tZnXDaQvV6YXowBhFFKJqHZuy72KD52Q9fsVxZqDToCeg1J4rVuE",
  "key37": "4dSf2qQyhZifWW5kFR8kYLGKk78Et8Hxi4oimbvurWEJUHZ27x4q7xL8ajBAjNmMpWFFq57tm2pg1n5vP74uz4Va",
  "key38": "2QxKspiq5VFzGRPKiMwYGh5Ha96fLJM4tqndTLqBh6GgX6chHZF91qvmBMFkJGkJTykYGxnDcJWagaZuH7tW5brw",
  "key39": "5XV18MKaLC9KscmF2958ZKHvX1xSZZ1Df9ec8huckHTi2gQJXBiHobPzTgUsongkQAknS8fjBEAMcjEFpoHHWpiT"
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
