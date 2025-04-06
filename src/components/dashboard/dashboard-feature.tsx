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
    "5T2XLq4QobWHSrPYPRbPxHKsb4DryokWqY5NjFbQv7gvjbVV4B83r5K54rjEKCeE4i73ABC8H4qBtYZ2bEF9TM3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aDvK9djGhrM9APkf3JmB6ZzAaMyxAn6yZLG6nTz13zGqFaNcGurkHBXqBScDBcgHPi39p4We9B3xokSTy48ERWp",
  "key1": "3XZdPS6ZVc9jVvCaQnURCkZReDkUJjeNmwLqwvwJA8H4h1RXGNQqTSWtGwbAFbqSsUz84RH5kyhJGizfRy1tHQv4",
  "key2": "qBCaLuXqMV5NhewA7Ao9zn8b8ygxRP7XZJHjXnQ7zeC8PpDggeb1pWeaUdz9raZPAZT6C4uJXXkEMREpig7kMgM",
  "key3": "XoJE2S2MPuMRp45UvU5uLGotxpCniSpdT4HkG6LdpKBgrjq4xCRLuBvSfg4FmRWD43ZwDZJrhLGJGx8rvPJPjY8",
  "key4": "SDoGGFWiJV9TfNEccsgxZYnGoTQy19wVEfeVErRqGtY3Pafkaim9qPnnZygBQkDVA1BYgvpVctHZG8QjVYScpXB",
  "key5": "QduNG9noTNp6baL3BeC8R85Mh9ycJeJUh9f77cukPj6VLMN6d3ztjMc75jdzNoUQZAb2ihQAKR5zWDw9Q4LEYaK",
  "key6": "5NYETTiDmjpt4TMc7xDoXrcVfYvqSsRouFuDBBiUdgCkEzCtpMiWkSabBsqHrYZsoN7M2TXtivaB4r4PC4KHEXRX",
  "key7": "3uHRFxqX4THEzhoz1yyENoufhyf1PWRhLknCsKT8pqFXjEjQQC5cmHUDHg8uz7vt9cggHg3zsteQGUssB6STg2V8",
  "key8": "3HfRuiqaSDVhMNGwVxJHbWU6JVzJvsu35DhqaKZxjqBoLovyAbi36EpaAMytpbGFfVvYB6ijcPBLTAaUa3xfevuT",
  "key9": "cx5qEdMpu2A3QrRUsmPEtDjgeNX5kruV76voj6pcHvPkECQLcJWGLGbkjVzprp9AJKjPPLCeFVhcoJzssaa2JoL",
  "key10": "2KJ8mnEvGxvJ7iUoccDvwYinzELEBBC6gJ6YA1WKDRPeB6ZDWE4MgZYSeAXEfnqUqcj9T6PWwhkj8qC5vf7Uuryc",
  "key11": "2nV2ykM9w7gcihcKFJ5XVmNbDg7N1YS91oFbdTx3KGAYYBcKHjgQ9JXHpdfucAbuf6vK3BCMSa13rnKg3ChwUwVg",
  "key12": "4wDJrYsLwMzMV7FAK5ZjhBYuL6TAXwGu7RTPTuhpqSoM9jxqC2kUGzhks3qtyqENSPdsm3hah9f5YXHBmD5vfanm",
  "key13": "3mcq8NyfXNPDEF1aHyxkfCvVUvPWy5D5dBXX6HgCDJFN72Wug5dm8d5bCbakiqXwVcqmvkLibGLspoEbHC9pnUwF",
  "key14": "3X9mWW1k87KeXbTKcGhkrd75zZYzNHbcFtPLxtViQZQFUd8qDgW233LSVy38D3V4Yg5LMZRRQYRBphFEwh6JkbY6",
  "key15": "4UVX171W8suSaPq1uaYFSPVMez6M5YrWA2RUmkYevKtTYU6d9JMXeJx7zkSHHb3eAQ5tWjMZzJNhbnvrRCit2Ztu",
  "key16": "z29HqeynmzmCQ8US5NgfpVFM62RoDGiwk5YX78kQkwRLx4Y9JQJBWsS6DAZmGG14g8XwNVk4mWCAbt2fhmPD1HS",
  "key17": "jhF79qvLxn7AML1bCKxRsgjCXd7THrqu1xBYNGDxy9gFcwDsoWLAmze5LFe89kDwwejPFYrqSYYrueAHbJTzE82",
  "key18": "3gt8Dz919pmxGab2u43WnWZr2U78pz7xajB4RDWLK7MmhaV78M9fP2yY669Daun3GwMQG8hjwVeKJcBvZSSqpuRR",
  "key19": "58oqosqvyatmifw1ePMF2DJVJU4R14JS4YymVdRp4D8JrEkK5juVRVLYvCYDjSaKFquJKmMu7HTMTU2bbVX9Kv7e",
  "key20": "3jFW79TAmmyxUt1fYsu7VpEdyfM8XsDS162WUvuSExX1YKt2P9q64Y5hrfMNMuhiC1x9RBDJNUdqz418eUBurbdz",
  "key21": "3bYVcVUqkmXKUSYcsaaz2EXE8bnAzAps311Wyjdz8ar6nWji73A5PkgkhvtkUqUNUz7Gbd8EfU4V74oqCdRj7oFz",
  "key22": "5kgWKeYqgYYXysxgPh9h3ordSBjdtRsD5v7fEsNSpGQiptZX4JvyknH1tQE7e576d1knPzkx2ri3mtrz1wZnGSwN",
  "key23": "2ZRfuhnxETXLzFd514yfANiHnXhECsfJs8Y66Hiv789ZmVjot8DDPtLGs4KGGkm5ig4rqBAD4HQWjotdDL4DpAgS",
  "key24": "67B8s7tCUaDRJLKQYvVjZ1UxMa1P5bcZpS9Eqjz4Az4ZpEmKGMUNMYHSvPDZy8grQWDSFQwU6pBs7Gp6vaHTRRcJ",
  "key25": "42Cv3abRk7hTbZPmjnbFx29LQyKyCafXSpgGP2nMnJc3kdMbmsj8sxgqE9JTAErnaX5rToKAVmjAsa87FFcAHjvP",
  "key26": "26fSESKNCND5jBawRtB5Rax9NnSSVFPWED8aLs3gG7ZiNKFjpkYbKYQ5h1o1nYsd6Tph7XxTc3mcaUMxTBcC3t3c",
  "key27": "3pgy46D9rwfXK2tkP57aKvCpgaCX4fvN2pJREzJYFyZssPUvNrKWaCHvS1pHAt9HfE3oYsQZdF13dZ6nytFYkFsg",
  "key28": "e336Vvtag6srPHNY9vS2dJeY1UCLeV5XsDraPDaqE7Ebq3TDeHoVcHDk6dj6ve5BTgpqTANPuatTuqHYDkTQeYX",
  "key29": "2962x1qsk51E8sKsDvJgipb8Kp1MGfvcvFAx5gZbDyvWuH1FPL15shD8jWQwctFg9d8DZMMDjzfBydYe2VvUzAEs",
  "key30": "2e1Q3N1QxkSdYHvQYJsmdhRidE1xyevkuSRRHJnoe1dmMEqFB5GBQYJaWnAkp8k3MuzYm6VfgcCK4Z7nGhP3qn4y",
  "key31": "36siHU2CDnEySvPWT3ju6UiA9ZHAiZ7RS1cKY9VxHUCW9Tcy4gyfgLjUKB4mU7ypNa5iiiGWwCQuwrMyHhZJ4ApU",
  "key32": "4aKnXwm8Ps32jeEiLnCdUNfePaC3aDAGE26DXUasCyjFXCnUZBTF9AFVfi9WYZK6LqcWS4jJFUoCL4PRvet4ndZp",
  "key33": "4F3qp4pguJtvjJzpkYYSyrByboXpqqrXZyiFEeFWirYH5HvPP9AoRVNUTEdg1CvnBaVSQ7hnt4asZQTRQehoo1WK"
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
