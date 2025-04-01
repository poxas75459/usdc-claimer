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
    "3zTQrQLEnpm5ZnVjk5k9kCiZT4ELRFFu4MJrZmUEjZnxaFXM7Ldgmrrw35BdT6Qm4CjmsV9uvE8mWfyzYH3KF1fV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DrRaZrxxDjuHHH1muy6aFHhyS479gJkPaTjHRwX1wzkNxd4tJvKUZK4341GxvfbDC9qy9oQ2dXxVHsXGwHx7LEg",
  "key1": "49iDHhJjA9wKpwi2f9FAXUvFUj6Hxnc6y7NuuLRyeXnSgXQhP6mD6wadA54iBuRUTM4bZCBDT3riwXkxSYV2ouP4",
  "key2": "4B9JSXvGZfu3zsSKc1F8eySVLExJmZXp5B7SwPRzHYV1fyEAjUq6QsvUZVrRe5vmvwgfN7iEWJ8pCxGR1nF9Wq5m",
  "key3": "2Wt7WyLVwpREHry4RmYLFF1z3xJPtZzax54TzPx97wzPsUm5wjLFkiH9gboELoh43gTsAmXoLEeHHw5KpGirwe8t",
  "key4": "2QvUYwrEw3rgyX2HSnzGd7WwRqeBcEUbxuCA8hBSuomQi8cyoQL3i6a6tXCLCD7nuMmGpUuKSb1GWccbZjtH4k14",
  "key5": "u6PjsV2yMgeNUStY8wPJofcqHqnVUMbgC6cnCDrkLeNvjC2iSbZKa7Dpsz8KARpcM4pPovrEHAXqGnkCVfD7GtC",
  "key6": "Cn2WaVWEuC4fCGRcf5FkrR164is5LEaTStuT2xqPciBZibkZiPSkM3UwurDBvz1sDBcojxWyyTnCwLjf6HTBvua",
  "key7": "3a2JTxVCu7BkDSNfkZKWZUXo9kRGVZr1KnicrHYwKHZ7fd1YcvnpQgar3vLKmhh2GG3NA6ygwbuAtwjErBBz7gu2",
  "key8": "4PiFXNK8qY6w5eNbCRhfLZnphZb8X8VdstnkzKj3em4WfF9Mn1c1HjYY9uPAKv5KrcLPG9XCphFVeM9hJkxzJGYu",
  "key9": "5dvPxdtVTdd4sjLxnHndCtC4TVx4iUBRhzxg9wrautZGzVPZZxXG8iYNR8qkLEQG5yEMvKaAnvACT7BeSuegazu1",
  "key10": "3XYxFiCsQA75hADnY4VzHJfynAioimZb5fY89AHhq4EupXNRvh6XMWS12QQfcSbZJZGsUfUE12CaHinZWvDjkKKF",
  "key11": "2gQkPyAKRZbSRbAFSNVSf4bF3qQMVfco1LjL4V5gcR74UVDsZZ6zGKzVPSb51RAFR6T5Qt4kzR1CdwQuUexpJp5s",
  "key12": "2V7ZkDc2hD6YN4Z7BdjgmCPEryErRhLepbauzgP47yAUMTLRFamEUumV78Hq79JjkssBTbxpMmk5unxRYNRVv47s",
  "key13": "3dkx82Pz33zXWkkwBHgPmi6JdphBQJMtDcehYDkecn93W6tpsd4Fe6eTQD75M5EGj7NzcqioYTaDiA1wJsGpRJQc",
  "key14": "23CsA3dtAnfmFABmyHQS1jTsSBPDa1eYZhMYpjwsu8StNe38mg1swJwiHnfSgTgZ3jgKWdq87h7gqvUeJya8vfQq",
  "key15": "3BWcdfjiEab5xEkmJaneiDzSJNFxf2y2HsCYGyPL5cEDiAHvzrv416NQnrymyeCq83PHkCwe99sGPpwbC83b1NkG",
  "key16": "5WAAxHkoDhX1JoBUw4ny1fZbc1tobPnVAtEWovnei9C4CCzLW6P44EXJ5ZQ4cP9CdXAwqJ9Ea8DNdYUywptJ3vfC",
  "key17": "2rixACwvtDr35ZLRbCSUkxBz29hUQSB1DiBi6BWtbxEx2arcePcby15wkaBTus5cqTS1NYUbNHZnbbDYLGwcELKN",
  "key18": "2vV3vetvhQ2M4jGGoJ6APwvPvVjD3hBZz2wRj9bn9UvJ71DLJm2gfYnwzHW8bJ8mhsL2XPQbvYwUEqJd41pq9uyg",
  "key19": "3KuqCmMsYcYEz6zgz2jpVG1P6TjKzG7Xhuv6mwXuJyPHYWp6vkQ3VXKdfdfNSuQS3FJ46Whg3yxXshLcTi9RCSWf",
  "key20": "5vZMPVujwuZZ6bbSqeRvSZF2fWPVaN86cFLvXao9FUcxCQWWVmhU5NpqSnn8wxfDtK7n347mWQo7vvGfZnmCAhaY",
  "key21": "DZNc81ju2JegPeyBBTWkwLJ95inQHQtvD5SHGvVqtmTj9rxg4CRrKzX7nvGGqLqcqDnyw2V8oWHKEc3dVqR8AmL",
  "key22": "3re8h1r5ocwDqTxhz7sLDBrvgaXE3RPwayXD7d6YGzmSQ6qVn3VnR3jo5eXpmZsGhq3JqLXUfwNhTVxKrnj1YDBD",
  "key23": "3zJoTzHP2boorLs8ouvsKutZSsFdHbgSpQ6xAXnEQtkgEHqy7UvPGSjH6fKF6gTc7KVX72wUZQUiSHArEPNSiyzV",
  "key24": "3KJsSZYzuo1KJAdLszkXCv6xJLGUfP8cBnp5aSwzYqJ5y4m6cA3BmmuakABt4rxyoyiG8ZRqFZG7cvFSdyiXiVS3",
  "key25": "4eEcuAvcbEzmJzgJWVKzBjF1dvUg9KsshFarHjdqRhyR8f4CLFFgszyV7WDsxF2EruS9q2mtJqsq4p7KavPEk2K8",
  "key26": "5BduNeQ7wGdBVXesg3kXcoo61dBo2Ci1XJJvppwmD7YZBGYL1amgLUUkaBB3STkPvm8AEBez6nnrFjiB1N7EX7Pc",
  "key27": "43XpSNvDATQ8UVz7tZfayvstei66zZtZ4opN7VEaoEmmdKmTNoqueLBTnBSuo3C2sab2fWTJi9iYVfsKgCtUnn6S",
  "key28": "4geS1NGjqGdBy2VyRNBEvu6vNZxbiH6xRUuMKBxrgChXpzq7xYqqdYPTumggHDnSAvXrZGBC3ix3aLhPea1ERRbV",
  "key29": "2tvEnf381zrusqfJ9xEdzZHbTsRxTEpcN5B6pQtTBs1iquQ2Q9SAWAFf14ep5Ms7cdK5E7rV6aknWQJrhiD2athE"
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
