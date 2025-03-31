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
    "5qiFw5vVx11rBE3QiL3isT1Ky8gEv7wSB6VouLwbAPGFkrvB2BKZGSX4YoBTzg32dMtKrxtTSMYMwUcXLc8i678H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "whwJzBUokoSkq2ds7gUo96vjZ7iy7hvH92pCYtJMnY8GVcotwmkXJiHnJjehi6Yx8KFDqof9QFDNQRXF4hpg6p6",
  "key1": "3dZuuX1Pd1PAMRkmU75anEMY6PK1tvmmNgh4KD15pipTtUZaFmUEHQqUWq59ZBkiuLVHaQMceJydDjjrbfkpfcnn",
  "key2": "5wvvk5g2rtATt4mDNytqHL4d8jAfV1oMQzyHvxtH3wvZdSayYEuwS7rEuaYbgdX7zoXZmBFAdLLpDi2aS1RTTvCH",
  "key3": "hSKMfParYDZ6KfwTzgN474hrjttqq4bpLSW82rDnwQ3hFC1N6TLm58tLCvMdkYLm4duA62UX9HQ6MpYpvRUAwCm",
  "key4": "nsFQipkLGZ6uEbasHe9HY1PwvJPy1V76cUwKpxudZmMfAK9qmKCXdJJ5mS3LBbM1XcDG23YPQT5B4hXdJkvJTGX",
  "key5": "2rnBjqZD7W32X4VBwHa6d1ozAXMPUnpHspVMaH1Leq8oHa89EPYptvaGG8naLWjYwAw6GhijjLgPsxkQ18pjCTjJ",
  "key6": "5igvUmV91ECenPT2sn8F5Pc6mxSyFxPbRRpf9xMXyio6ibxnsNm1qoNKMD76KgvEyfmovrg93zjAbTRHWLRe5hAf",
  "key7": "3RwEqgQy1nMFrehqy5ZesYH1j6v948pjYVLQGgY7vffim9BYpZ3Us8cZv1MzTrZKpiVjxeJdJM8CUc5PUrAKZfdC",
  "key8": "WR6i86Z8sbCdPdPqC9uZCKPD4VcYFgW9gzoAKvDQ7c6RR8raGqKL2tJ1JnWaff6N4Cxv5WCpRX8qvYZjAiXHEL9",
  "key9": "3g5hXbYDvFgZBADTGSLm9onZZSVWb1XpaYw9MZhjgFC4TxWqBe8KWRYYWsQoBFosKAKrH4u7dZMKXToQygA5UphB",
  "key10": "2gqepYvXY8MBbS7EAqCDeTct1Lf3HQDhBHehZvV5UPrbgmRWoAymo3BLLkJd9jk4gx5RcsrUGbVkWw4Txn1ei911",
  "key11": "3LZ72SBrS8inFYrHNSCxr7qgWQCjDu9hj4yYi5UBfHdCgWT3hg5qACW1xs4idUT1MiVGXcHcfMXDtgC7fbN7wj6i",
  "key12": "5R8UPpSrUb49Hn7sASx4GFuddMgnTKVqHKgwEZTENyUh2RdyjN4wrH4fU3TuLW469CSTkYfheacExoRjamwV2cQg",
  "key13": "3LGckswA4uVHSeT6YFJsdWzBzKZssyK7c3HZXwVDYf4TaGWFvvt31m7Sgd1jWkd8TifkXTwXHK3J2FLkSciXXJha",
  "key14": "1izzCcXcmQ2L5FniikXFMo7owpwAaQJeXAcLXGfx6PQv8PuJbqprthYEEe1GCWhW8DGi2Q1t5cMgmicxrdvPowc",
  "key15": "4mEt8egyD15fpayiL99JXXXUKv2qrUwUXvUynRee1o6bA83znmufgkfNizNNeHGJNBVjf4xAbSktHx5pXHBpXpNW",
  "key16": "52PG7gAsrkGR93WpGzBgFjAvZJyXnWbBgMV9XvEmT2b4sis2BdhWGNHN9MM5m5PnYA2KapBtSooSu6U1dccBNCxp",
  "key17": "2gWhyaP8uNntfEYgdKSkVr7pb9fm2rNKTMb6ySkXS6NVMmPBe3gWKZut1UNhfPjjJBKmhGh1yWiBDrRPfqsGH51h",
  "key18": "GoUj2sJ3SjAMAN8uFC4egjNWuibUYs5TXBLGUrrj3PX7TaQycqa6ucEbULJu36hSa9eHWYgqnBBtsQTATxGvH6F",
  "key19": "3ZJA18G8Fi6ES4bEJS9ijETFAwpHmF7kks2VkKL25sxW6BWYdyrUj38P4EqkRpt3tr3TdyvZ6j8gV56zZ62cpEhw",
  "key20": "3sX8R7PssnhZJ9LnwZD3rVRWwcRx2F9uvWVy8C43vooamVDmVQuHmQ1urhoAcJZDxzzJ8WXgwTiWm6C93vk6pfU2",
  "key21": "mBfBaVitCfncmCoar9RpmWnuaCjspBkQ1BRA7wiKbDbS6N2KZepDVoQnUo7QfASXi5Uv71k4j69kcVxeuZX5Zez",
  "key22": "5wpKew2rJLi7UtNzUwHFMmwNN3iHYL6i9FqENAc2ay1JmwhsMshYCZtqRgh4sX5uiVFt8NJBjvG4j2QUTCnaKq4k",
  "key23": "4XQ9U91dKgxZnUVNXa3ewCWBmjV7kDRdzxmtQqDs7Dx5HWsPpke9yAhSJooQYUXVouto4TFvh39vitcjW7XFHox7",
  "key24": "366N1ofwV1AkKkPL52oke3cKr2eHuoMHgbibkiod5mh9Uy3R2kTVJb33JZJcnxDyuSKCWczTFCLd8KvMs5U7E89",
  "key25": "2bKf89g5fQykN3qPLCjwXVbjyQ9H6EXDVoH5jvkxAu6a69y94krNWq3uQz6ZFADn9Z3Dzry8fFB9BNRQqn3xMgYv",
  "key26": "5hedWe3oXfaj7Fdr1kJjCtBDjUDvSDrMJsDkpcEvqN1xRgxk4ckjmd6o4yEkRTV8SJmkujRwbrbKJekKx6a86FX5",
  "key27": "V7KTN5KjwP3KGqLqmdzASjS9NyYqkmnSvKrcFVHbjSnKYABqXtPuVkore1dvuMhKS1gqJYJkezG67GJFb8uYFP3",
  "key28": "2inVA1xxfgNWiJZG3kC9Ua2VnqXHSzgF6NU27hpV72qR9EeS4i14B3Kk6EfCcdBvnvZUimYLkNgRxP3VvxWrxeZx",
  "key29": "49qrDuiLJYhBFXCNg1sBiS7nJcPEQRz3utUGe6w2xLHBcbvgLj5b2itiMjQckHVB8QZjZDeLxYAPrFQdeoi1TWRx",
  "key30": "3okFeknuM6bUkYteMkw1QuMAmPLxYs6Nvyh82qnDCTFPzR5mpkRDGBTUYRx7nfNGt4pHtaphE4P1zNg3ftz6pd63",
  "key31": "5DarQ1ywpqRkLwkv8DugwQwDphcSQqXdmt8wdeKKNPw1wbXts6VXqJvdY9zTxUnTYEPnjfEytnFDu3riMZy1ctYA",
  "key32": "U9pdbkVUzrFaiQ6p3cM14brtW8G7HU87qn2sEyUMgurXHtGCdwTqfAFCoXNe23DmQB39XaS2ccXd83hbYx1DaP5",
  "key33": "2neSj4ujSggUmeqjWMFGNGhAEe9KUEAAtwhqyNBWURXqLdZiHX33mxHmsTeAaPUa3TudDv58TgY8SFsH9CHi1v8C",
  "key34": "27r5Wd3pMoJDmYiG361NCAtiAZ7JQCbqaHXTX4eLTLMq9rqQmQsSDeXch1UnrhoYmTGQtZWimJw1QA8J58Wpvbdn",
  "key35": "ESy6TW7pQVE4CQoGZ45FLEG1yQQ61V7EAUxDAwkuVqF9z1uJwvyVUx9uk5tUdwSL8ZDgXotugNtuftRAQTkLWWP",
  "key36": "21oFBY1GjBVFC9DjYvj2GeSdoCxZm4rRbmkyAz4NtnPk8t9QT82TtD3j7NsQGziJ5B5CULKJ9BdML2TEimZYeZjB",
  "key37": "5BRrEYfrg9YSkMmba6DSeHJhdHhrywSZh7tRsNNgNqZSLFLGgaov5VyPCdTGSchmGrNQtXPfcuLubS9eJB5btgFN",
  "key38": "5J3JhNd5foiwktJhcwuuTyZbaqTGuwjTN22v1NuF2NVyqt5KbzmvMMaKebUqZGwAsjuiVn6iBvzxn9eub4B7pmwM",
  "key39": "5ZwgUmyiUXeya2eCRU6Dd7BQkjKjyevuU7Ecu3QkSMbLR1DRGmAjjVANtPpxMDEMC6DjfXvt5KyMC1J7YCbK7WCY",
  "key40": "4ggCqceghABBrnotD4fQz3vLVdzU3Mee8woChVVzhDadzwZGW7AXZv4KiRMhkHUVc1b5Zn8WbcL2E7k91cFSFm8C",
  "key41": "3ay3VER8RZNHQB9rWNDVnf42ysJSoUJLkjgoxuqv8xRaVLGJ2nFcvBL3kdGYbe72GtdQ8LuH4W83X5jNCmaQPSuj",
  "key42": "5486jmYfgUtQcip8GGeKP19Pqz9Mxhcv9kX7HxZPpy3CYozWoxaCgk9BuHdc9oH6LDKB64SVp6RHEm4VF8YghjUQ",
  "key43": "m6gBrbEYSE7eh2DuMF5nWJdkrn5eGzp98cSuRrQj57vGrdLvcGbHEtz7mKGiiPzCjbqmMs2jcNo7jrSvdNhJZdX",
  "key44": "QHuUXsqwkQWN4WLH9sr6LWwWJVic3FZdoSPKQnhfsZQiFJCqBZiCQLPyPGBvVWVZcUMe6GoGjzQ7abE9md44FWp",
  "key45": "5acoosVsBqq6b5S2rXiTyibf4JUTKtn2VXY97mUZjLC4QHZ3iJjQyrg2mtGYXm8xYFz6vHCodaPmv8j27yQm8HS9",
  "key46": "KAavg8B8JKV7cVrcrHVDee95Rt9UZLNRb83D3wjLay3T59KVakbSbVhYjazfb2ZQaz4MASHBsSy4SyvHQd2AdyH"
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
