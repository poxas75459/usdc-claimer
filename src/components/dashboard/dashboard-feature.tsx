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
    "2ux1G7xSSLHHakm5dcrBWz4iGq2iCWUduuk37SboSMh9dXxwcZayXwpvpuqZQCazRgWWNYV3N7q8rb3vDwNHCAzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F1JJQgoeHaiPLUAyh4UnEkpfuwC6V4UCreurwnVVZGZm4LovdkEjRAP7f3QnLGkPomkGaVgpuMG9NnGK2nvB4kw",
  "key1": "4wM4v3i2d1DDMEysBXGHUoEZwQ4K6TbiUbbRXN76RXHyCpxUnE5MrMK1jDjXYELXtpyqPkJzjPAjr57MUFA3Wmbc",
  "key2": "cRfRhb5WVSDnwU1W7ixMjjKvmmbRkAvcv1NwgaKSWxK1pgDo1CZDjiVEpqf8tERdmvE4iTcqHekwMWYKv6vgWNm",
  "key3": "FgMSGi6ifHcJCt7KmjioxcmgJYL23SM3zrxZi6NnftgPQhZGEmNoHs6zfsgFT8YgRmhBqcAB5q5Q6teGpPf3faW",
  "key4": "5JYLUatB8cBUFfbBj8J2kxYbcp5cf7W2VoohXiMFfwpQJNm8nXyFvZxq3eB7913AAfQj5XAfwFntLGCK6Z2QEZ5V",
  "key5": "3LLMX8GD3RkTZesGdJVKfhXcaxJzLCMj7pgH1B3KkKqNP9tboKcwESmNAxtPHZDcEjoYkhrGPVxvGydHqApTH3KY",
  "key6": "28EBbbQxFBDXHJeBtadyvnYcY44ygq8JTYCw3zdVmYQG114wWCT7i7iu1ridBJ7vHcs39Rc2VnxpcNpWYvRmcW92",
  "key7": "2HDmjzHC8RRrATwwyUN4nUkWhEpvRWGWZqszs693FonD1CLs36VsKLFj67gZssCqPepZYh15T2briSoCWZqsbCqD",
  "key8": "3FeDk6ArwJxCguz1h7SkDGDAXhu2FbYfrpdorYhJEsJ4mYPWXDDn95xD3137a5DCRUnrAAD3xEX1sqPDrhDSEPnh",
  "key9": "5UneP6m6LB7RBmgwZGsvou4i3DSnkk1W4yCXi2JFkEr66Sii7daN97qMr6drU1BjxFTteFRDKeRtfiFE8r39W8Ze",
  "key10": "3YFDUXcZnfvBrJNxhSipWFovo1vTCeUay8k5zppcuSe85mc3aA56kaeSF6p4b1XBWBZgzB2mHJiLkj3QmHtGcnAD",
  "key11": "5gU3DrCVqzZZnXTi17cVJatFTFQ26N63tLjyHCKbtBukCxVWuM5ASNvUDthnPro3Tnw389s1eMiFmnrF54emPhkV",
  "key12": "3U3E6a5Tc9PhYXRUZq2wYn3oZuHb6cqEQYX6GM3Hvwks1HUvs8s7ghZNXsy7Z4fnLbo5XtEnUSUACStmhDiV9ZDh",
  "key13": "2L14VFM7v86tp4Dqzojur9o7XTkTF94yFBHDpAu8dy3kJNe7YjHHJMQ9bfJZ6aKN41J6CY9wZCYdRgQNZsjkYnyo",
  "key14": "31Kbuu48rvwjdZ9Hzb1BgHXMsh1n4rLCSnJ7N7sdVi6vdELrRqx4FiUFJbkeJbNEiAAaXsvpA2V8UsNQEowN2p8y",
  "key15": "3YKcQmDY22FyfZpHccf1QVWMWv5LWSPA8CCwLwbmhyRzmFGaCwbq4fBYLuN3BZ2q1kicvakShbr4dtj6K1hGDBBL",
  "key16": "4rbQnmWZpGf8wRv8UMobFxGDkYwbGrXgFandvzNN7U9XVPnkzD7MMcYtTzMj73j8oYPtcko6U2nf6U3H8VBRPSEn",
  "key17": "3tUSMzMBQPXwTAeBmaKorZygkJFStSk83WvCafMZaimsrhtH5GJ88G6VDT9HaywEAYmhv1hcyFLTRsKwhScfFnPb",
  "key18": "5VoJ12a7pavEz38RR5aGC3eHx5L5tfwFdGRNc597TjdYzdUDM6cMkbJ3hFMfHmqQzrXe5ggtAhdWVL5MYEun8a9C",
  "key19": "3YV7k7fapjgdP5gbBHZYepjuxZkXhnTd4oABs7hKbFvMiRKC3hgbNJnXj71MCE5q6eJ6RU3zo3q5rC4hkEGuUwrz",
  "key20": "4GWVyJmDvmzRZkhacHh1iRqXBNn8boba3GqbnBaHHNKjNB9i1Wff4xg7bhWbaExFQA6eey6bibeQExV9E1kbBXw6",
  "key21": "4NYJAkpJr2ctKdrU9srMFa7SqUw7VAKk9d3yXWxxQa4mAEXb33H13Xc6kj4EBDqEQa9oNwkbbMvmJTSPTvUkcwfa",
  "key22": "4ZMnHHASX23rbA7HWpMB9jfmVqAAxTCS6pzAFvEwTaEBmV4FE2p7e5gjc75HqCUe5DU3YgJ9z53fNiLz3MZLQkMc",
  "key23": "SHBDQwgM9ESCEYoBwwK6V1Bnrzyf8mqx6EBW4XceKvdDyqZo65MVe8Ukuwr58HPaP3BKwuJmgHQ7CjJZdseDSW7",
  "key24": "456Y2CqGhV5aNAhDjEHFpYfVtAkR5njWSzMv2FERAk99Kbq7GBvmrWD7ZKujEfHwAPGUGrYjuyrMbAPoaRJBp8RV",
  "key25": "5MZqejum42M4U8eSm7ww8dPmJkN4HmDSmXNR4rNifBwp1FFumt5VYNb4fS4TURigfGpZNbeP2i9AzFP1Vh74Epws",
  "key26": "3ydM6A32jgNkiJdSA1yM4musHQ6p7hcx8pfeVxunYHzGhzepnX2EUC6BzGPdhK76NRomMhoyULTYkcovfwTcwb3Q",
  "key27": "4GzTigbS6XavaqBXmU6oRLrp85S4y4HhcTx8xR3Lh8SQms1G3S6qHC1EQGzUYHMwkWF4j5szctAVpsooQZAWrLhr",
  "key28": "3Rp4QbxCH4iVfeGy36TYQSjtNbdsAStEicuQN2M8txGv8W2gUiLsXK2ddCjKtrDGQFhmhDo6ASSo2VvCqp4YiFGr",
  "key29": "3vWgjer4rUZw8gvu7pHQJtJsWTXNsB9kRgHciyT3okAo1jVuKUhzJ16YE1gpW1eYP8HPSVfxJq5cxLeQwdrGb4iA",
  "key30": "5R9SHTDPbgTAfMLb2pFBQnn59497xMsmGTZzkQ1Gsx82hT5Y1EByECJqP6iDHJVd84gRjZ7qKQQp7WW5tykjTrU8",
  "key31": "3icmXW2MmPzzrmA83E5sodtsEzVSD5Hxb19ZMJoW2cLw98eV3RgYRf5t9wmoaMGp6icCbfz1mFZwjt1LgANkqUkg",
  "key32": "3V7Gur4Uosb1fEC4vk6c32udTjsE1ag1g7baDLRW2edpQRr2kp73Nt5xgNiLmTVtRkGCJ2tyABAxpQbv8gNb1zrS",
  "key33": "3TJrncaHjwcPSWyna7GDskzopM4bqW9kquCoBu8kHM8rVRp2G3LFx87oHw7wxJwXLX8XKPyuYanRbqDgw3N5HngQ",
  "key34": "3iKfph6XkbnFjFcWxBiXNgSiUYxfFyF8XSyrri2bsWueSeQ3JhArGa3sKShPWBpAYgFPNNzGEEPXPHeEnkEhKWeG"
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
