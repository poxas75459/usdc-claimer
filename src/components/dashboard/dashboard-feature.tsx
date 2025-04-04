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
    "3MSVFiiHK7qGakJm2GbAU6BC4XzEnRxX5itjVzPY9VtgAQ6RtJuWCBi9umX2iusV984PiJYL5JiynusSNviNspUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fuc3RSbK2QkmgR47Pw8goGSBBCgF3kBTeW5XVcc4gWZ2AbPYcHhw6JB4hUFq3BgFpn2fRUNAjEu8J8N3caH8r9c",
  "key1": "BTkWLDPBw137oKEyKeUGYk1fykXWGHZcpZJo4cmEE3YH7RbL9CD62mZ7JED8JzEAfAgtXooax8JJsth3rYZm8UY",
  "key2": "YR4j4kagMDPxES83z5CegyNscLno1SPNYcebQKUWkvMro1k7RHpMkK4d5vmfNYrcG9MmiRDQYpXHrPza6uYWrBs",
  "key3": "5f6R8x7XvHCXZLsQz9hdPSHStFd1vkPTxHbpQczeQDKChfrxdFLc6fRD27xUEX6erPdzzxG6RsjBJs8ZikErkHoU",
  "key4": "4BdK1tQgpqnoNyqjrKY3iL3ZooKpBy2RGVLccHQmRt9pJfnKQvsVeYHrtyzKegXd4DrNBCyc2ozANdgCZfLQ7gif",
  "key5": "5ZAa9hFkLERefYri9R4u4dKGcFHfSjDmZz1tqWPeuxK5XCYMtG1KaHnh6AwXx7ksQWWuoRXYj3ca6eqbmU2qkjgR",
  "key6": "4XAcycGNUL4qtLNaKZBpw2am3HrMQjXFbBiMyz4EJ6Tu5evkuBsqvNha81MnwN3WxonbEfKKDBMNT3u1zCrEzr5i",
  "key7": "2D2JtBFQHmJer6Xq4XW7fuEsPEx8vrVicViGQ7GH33ErgXBqyTQmNB943sKxhSussmSCKCnBuVzcC13jYfxCXvJM",
  "key8": "5gakr7mRTUYaKghuiQ1h3s5p7q2zT9ULX8jgKvJQcmxHeKDY7XgVchq8GsSHz5JTkpDXrgPDj1DytsNDGbFa1iVf",
  "key9": "RE87RuBLeZkriYJ4zswxi5eXCmUyVGgZ6RBVKD9aAiqy99oVCfNBnowYZbF1Vo36RtJFC2gC5pyqxtivGFzXBD5",
  "key10": "4M2D89Syf7bsZcBTqoorkg5gu9Q4oVUBN6E1BPJr69amMpndWWCaZi92FY5JXtfCgbK5GavUNkEowAiQVC51B1rT",
  "key11": "3tLP6VFUg1spohwJpxVAwxRxGBH2HJUUtAGCVxxVW83t7ktevP6BW7UT6aKoqVwxsYnZWrp2vfy3yX22kz5dJgzs",
  "key12": "4LmmntcRxRmj22eY15RRyjRFUfAfPCXAPr4o6246NFKLXBdCRnfR1kwMZxZj55H3M9BSst4pAbRnQQuEDmqFTkjJ",
  "key13": "2hFW8wnoWPA4ehsFP98JHc1NUw6U2cJmVypaLoVQ5TDVcd2ZpEkxXK9653wf6PZhztcEoZZZXLwSFTx3sGbU2RCk",
  "key14": "5W33mbS9AcsNvXPrM8Aausvyvs4RPU17kRf71ymUk4yGJ9NDnu9QfPA6qUJbuEFhC4AzwUzZEx6u3f1DVfJ4pow4",
  "key15": "27fW4dRpZKb2TsogTPuEhdpNjqyEiLzi6Ag6w73yno8RrDEY84toWZdasCkUbvfgcYigAbK1muM5E6apcZZ6WZAb",
  "key16": "kEjDgbzqzMUa1SLbaT4ky4btYdumhp2WKhTJrQjqSLGRFyKBw6qGHYc4sWVm2jG9T97mGVdercjLPuKaoYm8vVb",
  "key17": "4PGh5h1zqhKUQXKB9nTp5g72GyGXv8b1wktFxadE17dLzw3YLKPBbxHiQ2MmieC5QVUBEb5mzcsschfPV54VMjQs",
  "key18": "4E8c1bs2hFqzCaEn3eMaxYMFSfKq6hVaF9cjyZsMQWVKM2VaWhpfqU9icNxw6ok1rTbDL4DKye6H1Aeu3w9XfFk4",
  "key19": "3VhxmxmxbeDZ6DW67rMzviLcver9onXNoNGa7ePqMGxeHwspLHJofUmWb5HrpLUK1pSHsUHa3Eq8oRkASiZg5gKV",
  "key20": "2DoyhenLAF66HvW9M6kUuX8Zur4N5my3AFcJuycXYAAt8oAVZpAK4CGXKTDiT5KmfrP6fzQyacULjQYLjHaUmw7Y",
  "key21": "kqTxVnbvXoqivNWaA6y1J7XNK4YDBua8jYvrHZgqjtKfo7PujkRYwGbu2hSb34hqLGzA31Cgwru6nPHPCFQfBUD",
  "key22": "4Zj3ZyT4EVG1VSJZfwxC7dYS7KwDeRN8v5prMWctbNujrSziKW6mh9kxyuBYTP28USr8uF7iYWwEDk4fi3X9urSZ",
  "key23": "wdH591PQGzsZCDkHzx93uPFFka39Qy9cGeshjZrsxZEHtFGQUiHZPpcmPKCH3afWkrTqRHDGEmVYqjes5N99XAr",
  "key24": "4pACKZh7gZg6NzWkHSpJeF6ra6qcoRu9eV8YKGXuMQKPwYxuRHE4M8QRagvtwKat1PcF6GpYXeHTYGNS7d7ij7U6",
  "key25": "Cofue1E5EAnXsUw49tVWApUa7AZS3Qpfwkh7MYDeLd6L5G9q5jCCMLa39H7GCYXcgJbmanSY6qMw7KqVkvaTJpZ",
  "key26": "2NZ4FqWm5KPbp3mQ1yQWmWZeG6GAh7dcPHisCgvQ7Gq8oEVf6L68jnTGQNQnM1rhCQ1r13Rh2d2fFioMkwonHicL",
  "key27": "CjPwCBxd9UBYfwwQvAmatTKeAHY4ic1BQ9a2c7Ly5rXYEnX2rJ5tfTqfH6WYxyrtfn5gZYUVZaxvhFkqT8NNxkh",
  "key28": "V2Q3xdGfncSGYcPqMMPLGQxpnj7PoLLqh2rbg12QTBktRzn8dFuSBFSpv8gw6JCTPPNCGLuy8tnbhBrwDhumvps",
  "key29": "3Cj2KHjDWMURLoN9TyrdghYKB3diLgK6VQyCs3rg8W3DsqLJqW1WravpngS6KqoTkWuZqh5ecvVVJWqQsQcVCjYt",
  "key30": "2dtVkWhefQLud4DmvPVehH11h7TZ5yfgRWCMYx4xixT2jsRCNecxfvst6JFMp82w6xMKxjzXKjEf7YYGfNFytu8F",
  "key31": "2no21G6iAiJxshKgoEw4eW6xarzUcwf7bs34crK2ouEWRBU7ZPgrKCf7y8yC1yC4nmpxRAwzqrghcgViTBpquVFe",
  "key32": "YJAwvM6XSpUvDu2xezHFN1ThhNWF1yTqVW9c3pJnr7UsLyvdzBZuevZUSDpDncvwEEEnUT3K5MKbUzzW7pVSsGN",
  "key33": "64cPRUq8bbFdYudKhqmSLX8iNY1FCyxArMPLYCt14F4dygqeR5XtKtnXJwwvYAeaSUcdd8tCid9wnjy4vScTfu1",
  "key34": "2q3n2pjwSaYCcvuFLuX5QedWrojNijKtmXTYWwygZaTv7DghzUbTFeDLKutVLxN1pDWa7RJ6Vrfzn3BVTu3hZobb",
  "key35": "2f5FS6hjaXrvDpUPqhF1k17TjdiDkdwyLSsEW7RuTHQqKnfoXxtgdydmqwptuncp9cgyfQF9zR4RfyTHDa1h4MMN",
  "key36": "4AxDuTxdWJcGuHFhLiW1paZjDbFrqCU9jsqaAqVCGaru4cjc7d3GzT7h8bcQW441K7VQzjJZnyi2MogmcPXnKBVK",
  "key37": "5YnerZowB7Rgvh5ZYKap5Dd3bpjakgqzmWgvz5RfQF8CnHkC5bVs5tvpKy6eMEQkwkLCdzJMnQgF2HthX5WoBcwn",
  "key38": "4iCRsKqLkKdvzSJg7bURHJQb6SR4Y8NN64wdFqEvm4Y5vASdc5dx95kiAMRtqTV7d3RtAgDvKqdFh5f5dqtbi8JW",
  "key39": "42S9x6BJ1La1ccu36bqLUvVgFd36poEx9C6hfn2TFcqXxe1tpXME1CMSspzbni43gxNcWhUCtjtpv51HLV5Lg1U4",
  "key40": "4UBGn71WkJVrv2neQiFWoC82GYYYcsm195P7ntXiuBuqUVJfWXmJzSstbszXLRqBvsmKpeiMne6Dv8mMVTG7jEyT",
  "key41": "24nU6WSraxWVvKquDHMonvoZpmvmxQoD71XrTPqtDRjKqLeofRoPmDx6LJRWKDGNyKKNVmGeEaUeeqA8anURvr6e",
  "key42": "PvZWr9ieMoEU2Lzq94WMxGY7xVxXfqsRkzEZPSVfKVsoNJ5AahursnahNVy9uzbyT6Au2M75fSSUCb7Y8F7jULM",
  "key43": "2fQK8KvLSyiiFwhHBhxQKi673bAAMAVBjgNvbAdq4tH9VUSEzYytzg7xFHmXexK7B3EfcH2TfAqPwmf5XxCawqf3",
  "key44": "23zoiE2ciLMKSiXr4yBV4kiYPpPD3mdy3vhi58VvhpcxF14GaqeRsxFAQG87tXozkYTDY9Ao7pk4QLxFPR9jzH5F",
  "key45": "4razLJ9EE4qPRzhrYZurMP7ifiGz3QW6mfXRVfD5b6Lfcxd6xsH3uynBvpGihJckrUHcghmqDUQVQF4XaKFWaCvN",
  "key46": "qR8LQuanZvzJXfxktnBqhkSytoPvTZ1VP4m5MhvWu7kHDrRbbgMxjt6jgtzG3N1nhfbQNVKyGFZbbzDZqXSLjav"
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
