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
    "47vz4QCVnTrsNMK5ymHLNmqygJiZPNpcACqzUaAh3K5SezidqpEo4LyWd4hZkgJYnGMKjHKVoeLiaZca4oeiSAia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jJzs88eF1h4Dy9KonAqWReUcgZ1g3MkxRKHrQ3jYBnZ7Ygdet7ukp1LFKbUDMMwv5E36thDBL4FvNw1E8puqpn4",
  "key1": "3j9skArdjctW619tw5AzjHfjCy4affBUFhevELDbEg7TgWdMNtiUvx7WBpnFWsBarQF4smZZ56U8dRhjCDuSWhw1",
  "key2": "2F8wEEbJdfmFv8F77esuG4nZUoem5wNAdjeWthsQW15vWKbN3sJCjkdzVqnPEkxkogHJCzy5t1PpwLmRytcB2YRT",
  "key3": "5UfkefMrUsSkGzw7wkCq4tpmnSw1gGxiiBEv4PgJhxcBCCYNAt4xd2v3hnJZmvim64Qh4QGBybSp7pSSY5m6ATYn",
  "key4": "PSbq7A6qiThCnsMRtEPRzAADzxPEtMiRjzgjzMTB3UDSafUFLqjzmiX9d4YUiQpHbZEpKrp35xei4oazhUNDY1N",
  "key5": "2TYzNMYwd2YwuByhCV5nXm3UeV5ecEvomPdfDA8SXNpstWqNQ6G2aQMMG3GyQ3ZfiwCT58CB9tJsEy2C4AsK3va4",
  "key6": "3xNs5vjQaf6KP6ia8iNPbH9yizEixacivdGNXFbjLKbHbaqkX1V9HtGfM3d8wr5mxdr3iDTt31FN6qu1qX5DkF13",
  "key7": "3dXL6bxbatv5RJyQDbUX7kbtXpsJJSx26BtvGkt3frAt92uZNGF5nZpWAp8xABGVKptYwBXYWuEGzEGWxtpZsQeB",
  "key8": "BMTx7e78QrVVyoF4SgYom2oZ2uMr8E6HAadxiRXBiqQxyxo3bSz14cveooay6YMwpfFPkUVis2xwN9mrF5YziVi",
  "key9": "TZRSxuVgcjFRyMz19xvYupcRaftebnmaPtAvRmHm8QDh5fzDgTmrDBrF9cgiUyZGyK2GK49wrAasRjRQcSfcdxS",
  "key10": "58KCRdHSqmRoTSRwM793cTsDeWdtZZsGZAiBo1Jts1y9MCJkbwL5e6m5V6ec3aRp18qGBmh83cWGJXs2yoWJdRFj",
  "key11": "4XCvPjPwAn5kdz23psTpkdwcYK2cYYJEpGnxm9EawcLXAefSafgmmA2VkCZy7FY1xQMSkfyMki76g9tnTvhDUznt",
  "key12": "59ZfXtEM1Qi36CUFyG4GveEarAkwozvHVVrDskSPvcVKajMauxPwKFNTaLd1RRwuyykBe3f1t4JNA7hCUiQqiGDQ",
  "key13": "3rcqjSt4gDqfXwTmFhQyTdcN55ASb8o2XLjQjBjHDji3R7xwisN8oS6zX6cbZgSn9sz8At8oPswJrqdq2WvkaxHu",
  "key14": "Z1JbQ6Uu2upBLK2hZkJNLjAfm65WwVYryNmtoM7qLRReSzaUZAikZbmyvVa4tDKJGZ7X6vRPx5d9cvZp46WEqND",
  "key15": "5p6yZXnoFyH8irakTe2kkhfaeBFK1uXL2YQSx8gvfz2Qr56nWgEtDKnrkHALAx4tRFCQmVjzGKUjbpbrvfqezgjr",
  "key16": "2jACtaMaonbkpSUHDovJwVRio1CJDmu8iQzKWVrFQQUq6aamk3QDGtCGChqb2GxZhRXZgzR3PzfXznQVaakgxQes",
  "key17": "3BVwNNch1XvH3cFFCoeszCKhNB97oED87b4kYBxjv6teXArej7JWcHkZxkdLrESiVS6Z1D4Zbmp3KNVzkmqv9vyS",
  "key18": "34PqvYrQbnf4y52h8tfLAPJGjCh3LR4jLV1m9HGn9npXdBnGdvuaXe56aCeNP7jdGTdE5sAy1ezS4aEQYPNm5Dhc",
  "key19": "4yaoyhCiVCusHjpHnf1ijUW4TKM9uCrq9mGe6R9ojhC5FPYeGCxchogLcADF1eqi2gEiCmPbRxLFmZL8ramVgS5F",
  "key20": "xbBu81ynAwpTEPfB58mHkMKdwGenNUxUyAWkT8ktocH47GLtcsvqrrxJE9hw12bBw2bTyyJAKzgcXdMw9fkicDM",
  "key21": "PzdhE1n7r7Tz5HRSyaifBznM9m9UAUUKEipqNmTYpGxETT6h9cpNmqMkGNn67c54JDDb1C4mGo7vEvd9d6v5Xay",
  "key22": "jc2zAisk7ZiUvYaemRZFdrqGtrQBNiELM9JCzybuRbw5GBA1uRwFMSSEyKvmvumQmY6rztY4KDttxdasncPpykX",
  "key23": "364ygo7vcMDgEnMatEytrZ7AqU7GFt7fmUb2Lpec4es3ZjkRok12TciwpHLmDuZuCMbpiCJxmgKo2o5KfevAv1ss",
  "key24": "26HmTjpyeicLxJq3ZAG9ei1nUwL9zYQZ5RbWcSD3HpmS6fxw2sz8mbmFfHkwvujG6eeSUKEpSDojqj4N8sG4s3R8",
  "key25": "3kgbPuazbPPSteogNtLJu6Zkuw5o8887QjpxZWdhiB2NRSfx6Q4p1znoipjrKaSYXBghGXxHg6SQAq5d8b9ny4PU",
  "key26": "LrY536rHVpS1GgZ5Amdg1ot5d1ykM8A5HnStEVazUw8S113nu71H1EDjYZ1mWwPi5MMzW9ZNYTvG6eyjg216RpJ",
  "key27": "5Xenpr5tWVGGhGPWMHVEafFGZyzw5bZweam6UsvcALQWTgyzvHXigVZiYKihZ4kZFpFhkA3ZU6GgiccBMRe2FK5W",
  "key28": "3M4QjF7KFoQDhWAtKijNM3DDWkPAN8BKKZRdbWoAwBdUpcGA3F5X4MAZYGQpxZ7DztsmW5WRXwkSf8HK4Sz9gdqR",
  "key29": "66pgYxWWRAS7dzR2JQfk4X6EQ3smbYDRHRwWxSHvmrTA7L8oq8GXWKwezz66cqpLjV5qEkGm4UneDKE9rVvdaE6Z",
  "key30": "2GSCvHqV8NystMGsNHeZtdSNvhj8Bi1GPGw6dzf8MZ4m68Yb1Px1ZkHRQWYf91J9CwwfP7xfTXFYQqCa6UmR49mB",
  "key31": "3wkpGqXq4hCYozgJLCYYP4RGpbYVtQeM1qE1m1Yf25zKppjpypWecgdqFg17Xk8gxLJMp9ExJnKYzek9j7wNj7pA",
  "key32": "4UN37Qu5rUmcwSRHbW31F9kepCNaSWohfPeGC8EDnGdETyH1AW91swaa5s7LcJNK6gu4XiJTKpydc9GKaN2ZkJ4Y",
  "key33": "21ieMwP4hENujHdnnx7cNG9QCQDqMKFcr2TYVNZooS54MkRv71LzAr5Jgvd3RMudscqQjoZ29wVbZgsTXi2u6ACo",
  "key34": "36AF5zRfEaxHGfzwPBBifBawcBZyBp37BtUKb5y23UaZkGGVCprJQT2yYJZVxnMVb1C5aPUzimR31m61KxNyW5Zp",
  "key35": "4ZkbTvsp5HKgo5Yjgq1NuR99ax84EtNP4V8ctNB5KpuoxzAXXZX5Mow9RhLgdDsz9KhH5ReFA3BFiuH45FqxUj86",
  "key36": "2K9vM1XfTvib8tDT8ScmoMfHSx2zzciiUWSuELoM7pcqapnWxdg5GivsJhRDLvXzmSpXrTtK4NL9HcLkvWz2uJRG"
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
