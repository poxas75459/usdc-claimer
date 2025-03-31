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
    "3beSZQyTC2YPtw2xrUyiG1VrLHVmBsrVXTftvqSyEHGSrYrXMXD1MgwDbMw9dJzi6RzU1LWXQfUyTQeeLKS1ZBaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MBDpvad8dTG9L8a6oCKzug1L92PZkcpGyZhYrXGsg2pncSs1TcSDGe1W8Kdfqo1dokdfhYyyVjdqqmKX9ETjBmX",
  "key1": "4bDcUBUeiyouWuiVYfiAm1nF7ogesmMSaFpriSjM86Bashh7hFye8iV3u6xUQbXJ3k2QVWjYWC7i4KjXmKifqBFA",
  "key2": "36RPcaQTSq8ciGxFY5siQJnDqvLHoEz1GR9UoMWBaC3RdLaj7WHBTGeuttfHytWWmic6Z3UzCpTa7hCQ3srX5r1z",
  "key3": "Td8KZ2ePvXPv8TuevmWWz3wadPiPoD3SUYn74NiNsbRPtMVeNZhqMPYWQHoWLvWpKDmc3TfY3FywC2NwHKhiEgU",
  "key4": "2gHbBxDC8nwAmbR4Tt3gBYyk6JeJFbskrxtNPkJJvhFSCYi87VByN4rrposC4f8kEq3vgJ6yRXmmLLN8YGsM2pY5",
  "key5": "MzZKVL4nKnECPWqwkaseyfw9kvtQffKbUttVhQVN8nUwvN4iu4ragbKp65UqsYAG6XSQxrKNBsnk8CpW3JfUqQY",
  "key6": "5JvrVZjFYqXgvDg6aPUddGNcCsxNweQCHZmXDBW3w5T9RwBG45Ds9gnpaXdzE5jdm4PwGMxr3CwnmC5m6zVHd3vL",
  "key7": "3QYqWvHg7jPF8Z5eJHqeZJSXjXsAZncMaoZ3vNsqReXagcqvo9r1vhVX42YNDgMRAmMW32QYjuK8kQ46WR2j2Y15",
  "key8": "yGPQaXiV7UpkJKowC3qXFmpwn3kQKzkgpvbHNmovbbg8kRY31rGK9SEFtwsAEKZXrkuCCNWadRhvpyKYKLk64dK",
  "key9": "58UmqPqQs9EnHDSAAKnYf5SHq9TwVSrWmU8qZ8ZL5apsdDXy5xEXVaCgbY2RSxnHE8ZF6GqBSX8PkrJVRURYATuN",
  "key10": "4g6bDgd7fDMHGvYz9CffNyrzvXA2ynmWZ9UJmVYx7aCtkh8oHqTGpBAJNy6Mtq5K68T4ty979db3NpmS6HbrQhns",
  "key11": "4ttZzFqZ955wK5DvgnesS6Qhdy36KphPGFrBq1q8XZcpEBz15nv8vZKET3KqpcWXL8isjKcP8VzjeTtpEYfZBAaq",
  "key12": "8jLvUt34CW5fhmcryduGyGxJSb1sRe8s3KWECqaXj7uXkLJE4rzynC6yTAihRsnApwKXEkL92fxGRdG71YtvYCC",
  "key13": "mBmAJ58uLz9EcUd5xfKQcxQSsrYjR4hvKSEX3kiMH8RBT7hzcFTKAx7PHtjEEPP9rsuP8nHwY8N5a2xyrmwUaqF",
  "key14": "2ANZuSKzbUVuHTKrcWG92D61TDqcDJjY2GCTLxmAAqV6p1cMD1pHtg6k9zSvq93bEvCiyokLf8badQsRYS1pKxMr",
  "key15": "5WHvThjvDdY2KKvJq7hQcVAgvvauPgkSiZgPhMyd8rQeXnAxFDHD7yjkMYa9KnXFTaPh4GkWccx83m8iy8aLDb8H",
  "key16": "iNNiVpUoFpcTrRqX4qaqbEmkspWM7ppqED3yixwgbJRj2omBfY7kB6qrTz5zRTWKcB6iQNCCz77zvLLWx32fNgk",
  "key17": "657ZzPLgiQfjpc5mLWgDobacvrAfR12mLZh4jzfZ2PoiFCJNNKatthpNnxjsM34LPXH3rMTN3DQNPXfVAuppbEyu",
  "key18": "2bLaHggzHRo4fQcHQ7AM9Vsnnfk6j7CLgvKiotP3kCbkwHC2W7iZ3VbiKiAPxiHZi5cG3Y59WTzvN2iJ2RtDPqic",
  "key19": "5jwSRgdytLLzLFjZsAHpJGgkhmWadWnhoiuqxKNDnaXJfzq1fwQWPprVeJmJEkGiH9noCceuUbhsS89HAqBgp62f",
  "key20": "5383hoqVABoDGPw8N6pJ9XUZTRd14SgQfmodETBVhvdtDDuveyx9nLy3BVjx7BhirJWGQ5hDG226kk39498WJQEo",
  "key21": "2cAENDLLZjS4RZ2HguNd8k6EW7CZjjvmtWErhGYqji3Bk6Ghar5xr8wwVvuu1qsZwrsB2PTACPmrMNfKvQF9Z8KV",
  "key22": "5aBoSxYeMoLDa7tL2ZLMUyu1bvV3NUoQUJGmESWGHaURUu3V3WDfTMqm5X6oorak9wbTjaDjGi9511aoATJYovdm",
  "key23": "5XaCk2yvhBTxBpsQ9DzXLfYBgkrEdPgRpwvgy6D3MgZTzrs1Gg7kxmBsgMCnHd8VY1rnMDsVoDxo5vnumMR5otui",
  "key24": "5Y6u6WKA6KjWM6kBru4og3tPUBbHHew1r9PcYr7PdprG9FC1yVmqxj4BLXNrGYNf5Qg6LrwWeyRrygV7CkZuFsbo",
  "key25": "5FB2RGeFsxVpXNgU8SmJcCX5J129vcYyyKWUDQCkB5YzDq3APWRPNWaNbTc8v4bHWeXxRzcS7MqmyTq1Wy4DP5TH",
  "key26": "2Jd89dXQVt9JYKXGwG6yTw91F4EYFQhkoPuayqd3uPNXaeXQi32TW58C1cWWHPmWhFaCPg5qsHXGiNXWzcfPyoYD",
  "key27": "4UVnu7jdXZZPnVQ3mZ5iTNButp9zm6Zj9pxgYGyvnBc472XzTE1EtQkaiw5rWnpo8ZSs2ncMxJuBBcP3Er1Wv9WG",
  "key28": "3goH5KZEMcLBYg1UKr9eHGQuALZVx4MihaXEnLQPpXmSb1R53sMMWX3tU3VAPS9LenbPZwwJckJGDk2BuuZPCodb"
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
