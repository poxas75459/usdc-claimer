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
    "37FcA7NrhAkHACQi3MCru4XZFXa8QHa9FQe6WBbxEyLEtFWLKZbwTqjB6CKwmcsLqxB4k9h8BRAxntcCPX1ggYtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cQrp9EzdJBhHmSaeGzVzRfQRRhJ8knZyPxQ4DDnPs1Y9Rghq21TESunudBY2tG94KrTTj8Ng5VxrEFrqnwet5eN",
  "key1": "3FdsG2Hn23nUK1kbX4J2oefDoduZY2zcXxToYJYnMtdSwg7Tv1Wyx86YMuQrHLTq8u2i6Tpz2NfhjGy5Tf6PKqX8",
  "key2": "MUqJ4aLytVEGKu6AkRCvbqsVd7gmetaro5o4CexrVQc4EePcmyskkQn8FzAFjgku9Vu5BTuF1shpCbJ1yP1EpHu",
  "key3": "2qbCxrkiSjVXMAAgvqttMQeVLGjebrPZE9YeY1Ygq6Xx3iS7MQzg6t7KMz2GpzCFKvefnrtjzTcrmF5kfSLoArS",
  "key4": "5BEDjtjLugB6WK2JDuB2AN5C61fSvThLniwtHKKSxgZfzuEVXJmAUWzHw9UdYwxdGD2nQcrh7qffUk4JA5qAgNzM",
  "key5": "4rJHJT3bj3ew3SZcn4tfdo6RxFzAWe1m5k8aDREr8MmpRsjaTu8pRn8qXBpUW4DruKPD3J1gqpYuwTvV9okprh2T",
  "key6": "2PgDB4z2vyuGwjWsawGjDS9j4zEBXd6rUgQT4MzqHQh3T1VqSmTMYQ1qTXZdFAc8dyvZjUYCPVBkMFLYfHDNkHCk",
  "key7": "3WihLmftjp9F7H2CPkmXV3P6euX8G9N5ZC85NRbUL4nhWKQRjZ1DgKnHPoPM7Vbms66QrsLxnafDAtRJA2De8zRH",
  "key8": "gYz2ov8aG6ohZtUXFrG9nN3CVAbD6efefprD39ubfjHDrEnJEHBCbEgJGSgrEoFL21tNEf8NDuXaNozM9LFQHh5",
  "key9": "3SNfkE4KgeS6zeJfWZ4TCu8z9Gc25hkLVWTvY7r2UwpSkXJ4BGwZneU3Y9saG29wkp3an7ToErUuZRNqQ1gj7x8v",
  "key10": "AFg44NZMKPHD1aTKTFaKX8UWMHYyrtRhP59AAqY24EkopQ19q52V7KXFs3FWAYNfezrNSNWMN6CwEPyWu178b5k",
  "key11": "2Rp6HP2nLHKhu1XPdPXWLkwtCaXJg1v4XKww6A9yC18YrzufXc4XkGLk3cUPZRusYmo8xKY7SuZt1er89BJw1wT6",
  "key12": "5S8Q84u3i8LWjBNmAsLhwnbUWfsaEy9489Ya5YhwgdLvufrd7ja2sQ13E3F3ab1U55X9DBvH7Rxj4JnoHXfHkTLv",
  "key13": "PYKaMzwpX7RCdgUEJGmCGz2wx9nezeBu84rzBrtBny4risoqq9Jb5LXYBmjvPNfPEddkxjf5Da25JGVqmz9gFuJ",
  "key14": "5CViftEVmtsRNLi8fHpoufp9i2UC2QBAQd6jKv7iusyYQgkHPZ7jDhd7JQCXJBrVvHDcmpzC63my2YgcmBNpiLAp",
  "key15": "2zjK19ayvqUB738FpV4t9dBiQESKaQktdKgaHhKs8VgnQabXcEewEgrAhZiYj2pcWofUMeJ9BBidLz7RUNePodwX",
  "key16": "2ZqvR9gS8xMf18YxaezuActNjJPkmr361rzU6bxq9qa3guqcA5HS7Gio83xXSUeNBTCYx68tYTK1fCXKxkwSiUVv",
  "key17": "4mZtKzYz6ZyQ2jeKFi4iU5UupQ9WtwFLmbRKskjewkCh9bBFWkgf3CPVbUcR69jzPNWMszkLnvJqtAJNpqrTaj1F",
  "key18": "2RToCUWqf3DfT8Po2r5s2Kkg8G3aTTDoS8utGv5qB6Ezmc6kjCWV7h2CCCKYiKw6GVVFm274FoubdrpWsbrWCVyb",
  "key19": "2g5DPq87XjWXvZp1pL8WB4sj4LvTRXMzENw6Fg29yNd44ELGANpTYKvyXW4fRUU8DzsnNZifHzTfRcpTDAP8tcNb",
  "key20": "CFzCKurgS55RgStE1uYFJriMz7zqh6fvzNeh37Yxxi8TuhwLgjYg5H5Lz4duwE5HbgZPEaR1JvaFUWAz74Ut2No",
  "key21": "32kJxyxHL8iWheWYjVWkVSjPAWGLG8AoYGU4fePDAuXJU3dxHbyJjQDss35jpNmbdq3S3UNUspUB12NrVwwzNe94",
  "key22": "3FzLFPn3oesHT1BPjxVBHKb39dqckRoRAcbCbMJQxiZoXqEDwxuA6HmkyLWR8ghsNq1Y5EtvmHVSPe8JioT2GkFS",
  "key23": "56xS1365rjNHvbGEKWLM4giKsnEHkgu7oTcsnbLuX4RcqxqsU5w8Dnf6WPWMEWWSgfuYewgmhbUJwSjjSwfWuq3j",
  "key24": "5ETSUeFk6EWaUA2MotrWy2dVQCiYVhFj8ypPhQWsvt7nwUuL6uv6LCLbf8A9fgTyWTnAkHThxmSLX5WTH2q75P26",
  "key25": "3EgMqhuUtrVq5foAtK652t9wqyGXiNECeZ66eA2XcP7wTU98XPwYmi2maRJybAHepfQgmjasSo4um2y5gQbPH5YG",
  "key26": "3wsMqLb8wSodEVJpVmqYowY1Ab7zy2phi1Zx26BFvUojE1B2uL61thriqRV93aLJsKhB8Fur6uPqkc2sVTW7g9qa",
  "key27": "3p7ffJ2gjMS74UK8kiQS8srRqys6L96V9Vm5RcWpRbme3cKEBWbcb7wHFtG5oVs5k6EURHzSwvoHCWDrBTFmyDCo",
  "key28": "QtUNauKpEysEuPZXYXd2BRqbDv2JUCXoVyCE13gYco6q74qCmQ3KgxrzNejgCPACxCYotF3tJG2bGAPtChDEn2P",
  "key29": "4DgVXZRvDXHUDHtWDSqsWnLvvQ3s1qQ6mcrPh6nvMa6VMxtrXs4JQ5xDQpG4bhb6SZgC4oMbRXSJLDZgPnZmUSnx",
  "key30": "5GpPV7znFwDx3gTVRnnza6Dq7QerZBSZEGozExBmVQnsaGyaz25ENhaXSmNS6EkbDfMdkfGGkLPHi9rX7NSwV4Tg",
  "key31": "3f7ZwvMJjab7MawL6v3Xo9WCTRz3DthX5fbEQz4JRafteoakTHbYNQJCPh8oiTTo5ztU1RE1kaQPNZUeEVGdPLMs",
  "key32": "5h1pDEANVLZzL8xAUDS3n6FnUyFa4VhbgVMJLKTaTn9T8VXRXxXD4v4PvnjV78NzgsBZkskbeKhztKJdSFhtU2C9",
  "key33": "4UutGV1sGVjQUrMmVGGcZqQXT8G2qym8qbUvbWhf6Y9jfDPFcY8YnKvS6bKecPmfS5x2sZshRX5EziKMXmvQp1Fb",
  "key34": "3Lybbx5K98JbKLZfvDLg7EoK8F4hxuYX12eCdyq3qzJAy3zquExVYabMAmCNPRtu4Ng8ipgyH8xyy7NySxRngU2V",
  "key35": "2rwWGnoTxjJcwLkr81U7ww4th8B2fcSYZzN4bhmU9YmaEirb175m5gzmmjqpWwqadMJxGTY66WmRNVKBdYijCRv1",
  "key36": "TqGXRT4NUgXqb7mRWaaSgqLmXWPgsLxyy9w47gKTBQEAnTuWEwjFpJEoqxmrnxnU5WLd5geGmQobK2uU3sRMNa9",
  "key37": "5q7kvtFYihyYrK7LtFA4SPHVKvJyjsmuUN75xnRYwKKLsF4AVzajwzGcpk4yZz5WPFMQWwkLECqRdrxBZdzZCzEZ",
  "key38": "QstGCdcsB1iThzXENZZeHAi3bnbNcHGP2QWenjci7AkZW9JCHoKRMrYTZJ9oSsHKqeVjzodrT2Y9RzxWiWi1fq4",
  "key39": "3Tk6ze8YCzy6vNrZjjjLARy8s7obSHAYQHUe7mfz4T61EYAzYUr6DD87M1XWSu6mnhhgvYD8qNpYP1GSVmKvFK7f"
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
