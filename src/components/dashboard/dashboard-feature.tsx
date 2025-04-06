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
    "4zev7KuaNrhGm3D7tyQdVezdc4sXio66QNKhGvq1EjqYGpifDM8Hkn6E75pvjDbHDhXzHfHQxFf5WoALMD4ghhwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AZ3sKBErcRonGpma4LHmeAC8JM2wW16izjjWi2cbphps26jPBf4GYrrBUGr4HTjpjxpf9dbUii3w8UtvD5kQa17",
  "key1": "2178cjTCTEHKRjdvj6vsvPVAq9tpz7z8YC6odgqhVr4UdSwEBi1UjXCmcfw7S77gnZseKBfyKbaiRnU2dz9e51ok",
  "key2": "28DFoRFpeFsTicSE2RoQeYYgZDxoMyzzfdjcfNngMRRSJELq43hbAWNFVGXrHzmyYwuQumJ1AVknUZN1h26w7BXL",
  "key3": "5JqcUT19mtCcsZGBZTBvEAzgm19sCZopoysWBCqBoKQ9pAfd8o9W63TR5m8W1vmDekkgaK2vkFLC8mMJxmz3nWoH",
  "key4": "s3pEKv2aJ9pJo6ULiqZSaKK5VWJhrZDZNqdrwAqSLyQdjM4g3mmvFENrQnpD9y3bmnbPPFnLikPNxdtdjvMRWqq",
  "key5": "4UvVuEMS9WZ1jmQGNTGGoHFm7qv25qphJZB58SY9AnLFtwgAU42sBQFuizLcL941URdZayANYCGdgAT6CLy8FUNd",
  "key6": "2yCTNLQxXhnAAeYdmtQa9Y16PEndXfVxtjEoFcpcUon39VVLqXbzXpJuhBHyjnUyiTY9uacVGz828KUAvzE5MGyq",
  "key7": "rx7jbad61TzkM8tTFr1Pc3CNeA5QGHMJFswpxhihqTJN2rm4YLKjp8rk1XCem2m47LhNZdBzo5ADALKGjReitfG",
  "key8": "5w5Wc1kU9yTdt6LRbHz9Csyr5KTg5BcaJnzszE6EDpo2JpCzmrnHZThPN1CBRp5vGn6V8p7JciquanB5MW617mRq",
  "key9": "5BKMRCUs4HWKK8yoLzfcvQG81o8Gw2LJhGuT4RFgWZZy9UUifgr1nwmQ8XZgNP8hX3JPTTAmr1JWhZfgReTy5etc",
  "key10": "5KKNhHancPvPYgVfNKYf1ggCFgaXs3YpgJA7w9hNCesBaCFNLw8h4rHJc33Bwng1XAquwLpZKtogHSSpNBTtsChU",
  "key11": "4nSUZzR2w78onecvXJCTR5kCq5xF4pJbfs2iTsMU95q9z3nwin3w1Jbf8tqyAsJqYxvaF9ZpuDcmRrPEZzXqLGWs",
  "key12": "5gxPndfaZ5tppSrukdf2LDmTET3achNSRdEeQ39D3gGDq1S7KYknVZuGUwvgtRJKHtJ2vg1LyBnQVN8WkUyZX9EK",
  "key13": "2bsjL57PxDQHsx3E6N9P12HYFYtEpZdFS8KKbvkGCqTMA2eFGeFiMdp21D6hE2E4ixMwTdLwVHHRSD5MY4qHHfyk",
  "key14": "5STmj2YDxpRdwutfq3GRpApGH61eJKjxvwBEiZN89FY3kCYLY2bb4A6V46cKWB5mWdPzvtwKHuySZ3uuPZGzGZJR",
  "key15": "3sd3GEhzRTXgqv6F6uuDLxQAC6DqvYb7pd4XVhZENXTjS4HbjVzVUPS3Z87khVk4pFQAaKLjLMXPY85j4CpVkYqs",
  "key16": "mGLz1ZqtHEMPXDzm9j7PeHBoWpU88RkYSQsyKtJ2nYS8pvctC68Mqb4C6afghB9TL1yrjhXzFKL88XuEzpeEpUT",
  "key17": "XogRPRSp6odknB2kK8SBr8GgmyQBZxK88k2Ye2jzqpcj6UdceA63i9DnHC4tokJxuJvNEAJfuqQkgKDybmTfAU7",
  "key18": "5bYns5DuJm2ttHVQJtnVHSiA98XmAnQaB6qV3zUkZE25zdvgs4W2fRaFnJ29qALyctMjDctu6zE9D4NbffrMtkMf",
  "key19": "LL47bbTBZYwM7tEfmPsWGFo3G4FK2ZymNLk7E7ZgxXUWZFyAnvqpQaPrfej1ycJc9Hi4vyHzLxUqp5MqQyzFK3t",
  "key20": "CVy1HCfCRjuVeoZmqgvzwFFDrFB6gn4tzUjzibjQsYiWoYAQDBUYmJ2RqEMwhyQZWW8dgETpKVMhUYY9jG7gJMn",
  "key21": "3h1gELK2Zo34zKJRPFbbkm3tks75prFG437Y1GWUoc4jmhgG4fA5ZVayoamCeZcSDgUpYEsj2DKtxpp66GXsogVW",
  "key22": "5m9n73JyTFAjPS6vAxyJXgFXRW3Q31uWAymLwHFtqRHuaFzCzA6f2PNeg1SFCdV1yagcChnqXVZvDzR7TBWCtSiu",
  "key23": "5UNzgKCpniT7oax2zwiCH4ekTprgWwEafBmeoWPEwfkdeeZGSabDz8LAvBSUg2TYBcXo4MymwSVMMADkovQ3BFrQ",
  "key24": "4XRmz246A1Dpqcm2CfokyczKr4A87KBQ43TRDEYzKw2QCZ8M4GCen4rqMPdZT2AgJizmCAJcmAfhGLmHJ9Q656sD",
  "key25": "4r9HpXVbfv2eSURaJdCP6R3B8Vqz8SgvLyPchoUES6pEbtG5vgT8ZVQpZvmH2U368vXYUJ1JntcwGfHR9K4wbDWt",
  "key26": "2xfyGawBcHC7d8A9tCcERVkpUmrdfDNAdU6jfNHnHmg5zzFaiMewHmSwAyaJGU6Fe5tnPyGYBz83vKLz9jEHmz4V",
  "key27": "2edfGGJAry2mYLZaEATbunNKqJVFYx9KAFjiyRWsffBPj3dzboh3xee2BXzJ6kQa3eHgh7N3cm5FbBZj1WWR94pz",
  "key28": "66r2VjTX5ZqYkpNZozLsk7VBxBX3iyi1k1SYhxwE7yRb1ZQGm1LAKWcmTSEpykPvabBzKk9i13KBVVnR7S5JbRCc",
  "key29": "5YioFEXcT9NBkUsh4SAoNiqMJ1PkQSrbfjESNoQm7yaDypFYk7fkJQBsZ5dt5a4DK3sBoDEEvdkxmEjxUGrdtAoE",
  "key30": "5Xjjw4ShVKvgrA2h7m5dNKdTVBHKYS4A4ojXmcHfXhRvUexGa7uqjWwTnCCaq1tHw7dBUdGDrWYm1SC2GBBnEY4J",
  "key31": "5N2B8cQu5nQLDPTUQ1LTZGWcDM47oBRK8ZAw4b2QshmZ54uaK6Q9XXwvCiccRgVUB2YtBEKaMPtosSVbmXK99xED",
  "key32": "4bwfjMYrL1chSXad47HuPBpGYR3fZ3hjQDSdn9ihtuUwXpT22kC7HHfx568CU8e5ecg6jNWeg7PC9Lj2om6eH6gt",
  "key33": "32dfBPGYW2CPVMdHtY5x6DiLWbbhDFe2jFJwSz9JJms6WgseGEzF6QjRZFRYfZpK3hhoyJH7R8T5czpG24S5yfxa",
  "key34": "2jwfde2MTapFn4F34qXjA6nYjLq3YL7nvncrgWUEqkKekjym2cxpJoqmRMV4nGiYLWEQkhDk2TkVHoffux6oAm7W",
  "key35": "4yjiyCidFz8fyQbMEhp6fs6dXJCVvmFuHZmR2b9aVEzUxR3CzLGxEEvnABFqcHrg1w2tgTK1WF4DdqxFq58o44nd",
  "key36": "LPLty1pi1B4RszWEf7GEC3HEjTF91533LLEM51L9aor1bTqZjNNL8nBn7FoHmpXDnhFnLoaF2V9vMxjTzxXMDEV"
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
