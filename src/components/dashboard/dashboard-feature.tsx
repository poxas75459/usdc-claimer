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
    "3wAhTEcrVJQ1wJMNzPVH1KRTRS2jruycHHWxMR1aAmwrUdHjQ11JgP46qkZtrbsNdavRYLNSbRUyq68JhuQCGc2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "276G5nED27FjuEhpXEbqkmSuUAjDcYdM4G6eZFWRDeWXJf6ofZjtwJpBFHHpJQa5pvheQi8kHMpMPWwabyRfQihP",
  "key1": "84Ldf7nALUKYh1u1D6NuDFmz9mPf26ah8dn11Rh282QZQr5mizf3uAeFzYCe8Fh5ZqseT1j7Q7SDMe2dmasVRTs",
  "key2": "5mmQ9pR4wrETYppXCETKdBbBBxityniSzr1FsZ4P7WzwzhgYYBXJz66G3THRwUuvKjR7kFS5AfsyoSfiXe5ULwMk",
  "key3": "2PF7feZfxzMtXdA4jstzBvUkzatjerMufEw9V3DxG7AJnmfu7a2FA9Cf8AvYJ6hTbC8pWJhsoURzf21LaW8iFmx9",
  "key4": "njci89u6n3WH7mYA5jzB5w6ZvKnNmqLegvmBEBQbh3u25DyPyJ2hj5aaEcKjZcQQ7eTX7nGRKBLHgTAydFANQDz",
  "key5": "3TaXWDd9kJtocDvxGttsJF5xQ6r9z9kNzj27RKXxYwqgKJAHnUqfkoVFPMvSnCZ9b9p7DajxV6LSWHMEH7yfehvX",
  "key6": "67Y6pPz5FcVW3eAFKwKmJL2XVZp64ac9kVbaR6PZkMDywvDVHUAPLgNcZ2PfPemu6TdgWztbNV2j3yXmHcouvvtJ",
  "key7": "2uiDsovogPeoL5cZWBvZfp2YmiWpM1qtyfU96FGmzStGENyD74sSY2Fa4dRxXMAducXxxd6Zd92vi5tsjNu1rago",
  "key8": "5wqFjx6gUEv32LPyTEm42HTkYM3MokTjiFSnb9JuqDjsbe1j162o4Nbea4KvNRP8DAzaNYsarJuTvevJJdnQTi2a",
  "key9": "3nAt2Z7FAThEeaAnhnn7KSZRVKYeL6waMe4xLKGvmKwBUukxVUgcQf3YSFC1hbc3jbfDAoHEeUp6xiEe3tF3BuaN",
  "key10": "3hBR44nebSGv9gutNCUEPBWqmPuVjwifJdiwURn79DfkWFn16dkWrJ3LV89qFoXsgJJEFybv4hHJh6UxxHkND8HJ",
  "key11": "2whzxVJmMm4fap91hkgZBsxyrm1TRsWrU5dRGAzFULiAkm187KmSmeEjackqGn6phqTW4Hvd4ByeeuhUFrVzvNAV",
  "key12": "4JNJVzbuXZNtmxQhXdrUiTeqz78MDaF2beeV1gjDHEeUR9ndpsLQB3pYgF9vJ2oc4BryqS11gYrYUVe7dTmm5rw5",
  "key13": "4AKDFpBgau1Lp2r7JTQvwPMjenzoPcwJX2XSfVuAdrnhxc31jBGXQzB4xcgZe7d4zKt6JKWT8QGDBSSckEhH1T1b",
  "key14": "2GgqEw2Qa3akxtZCZJRS3V8PNeBLWSQ8A6tH9HxGa1wjE7iPBvYyC9k9VFboPx9sEnd4PyixLH2cgeNoYZCJt3od",
  "key15": "32yf14QfPeyJgNXYsDZ9SvpjGrj3fwcMzFPD5v47kia5P6vczuyBHZHsMsJC9MXJRncueSrqqC72WYg4SFwfGN8W",
  "key16": "JYJKyeYu7QeXLjJsWCeit6qipkKANhNkAXpMtjeJ7LqVtX6ZQr2wZ9pE2jj3zZW9s231pe9kPeHvL27epr8QRwY",
  "key17": "oNwoUTwzLhWYUwkPoonFNKmB5Xa4WCFdh7tyUsANwgjQHpP2SsYFnf6AqESBx7ALHdBiKWfoEPgVjntoCmVZoa5",
  "key18": "2Cx6nMYeqUtm3YhuEhXAK5D614MoBuTSdTxjZSFnoJJA3tUbqsfHJTYwPoM99wYwFjCVxwPrr7ragxE2yYUhus1N",
  "key19": "4d2vJwjzEvw6tdaqFcDvSYCRndo9vt9X5ZQqXP2F7YCWwsjoeAZTq7GzfC1xBEMegpCymc3nCbdAT3G3To6Xtrmp",
  "key20": "5qfHYYs5ZWW2NvVv3f4ib4whKYRCGdcNC7Q1U8roogVS3Zfri5BFd4G6SiLcdzPWMj2MxurkUrMMV29dVF9a59rQ",
  "key21": "62FS9zKjigB37pqZ2yfjW4LdgnyLeY2hGR5bKdNnqgDbmoGwZ1esP2UQjfxDz6j6yN65MNfUroFejn12CoYAMqo7",
  "key22": "4ZMU5KonHhsDgByz9PeFraQFrL71cUuPb89Doq4RAqjD6ibn4pZrdikchnZ51Zi1PFuCCwrqYjDiFFMA65dyStfa",
  "key23": "5CJuDeiEhUKEt3CW5pjGCuQ9pFnEq9NshwdiChv3egVRLaes34a279BTosiLFuXuELq76xVxnWmjz5h1GNzuJK2V",
  "key24": "3DzcDUjn7dQvc3uufDNZdwVnWixeqwwmXwY7uYLhMc656ZjoD5VHTbmnJ1cMMx9toYDiAB1iEPKw9WDfssht25fT",
  "key25": "23WRrYdGdFH1gAU9bHBJfAkLbZ6fA3evyL43H2QBy1fthUgW7q4EQtCuErbBUHm4XJXpMF1ED4GY1aRdRCmMqAQB",
  "key26": "5Kix9DHriUYbqcCXDRTMthz6nD9VKLiPkBpDaXSWp6JAbsuRxFhk4QSmmS1Nh46LXVVNnkjTcMXqYQjsCNiK3LWK",
  "key27": "5cUwZmRwL4hapvAoQDbiJJSTeqC2bx1aSgpkZbA9rii5NnAqLzd3KsMQFHoDeoy7LGUVdMN2nGLJxTDN29hze2yq",
  "key28": "1uD5QNvNduzksnTvevZNzeiTdo8R5MTg4Tuz3WEpqHPoGo7S3ehMxBEJovj4EfcehFBJMgoZeTgFvoQmiGhErdv",
  "key29": "3Dst8pgMcijvQrXamx9xsurJFFc7DyJRgBmXH5rKXBfTAh5mfyxQLJNjmKecJDnUQqzkkDdCccYdy4vhoLPCAAGo",
  "key30": "2aywrqEXNXixb9c5m95s1tMnMd6EBnsnjd3Dyshq2NPyG1jBGQbSCy3scTbUNpjQVN3PkTA4ecWcpQ2SGAicR3RZ",
  "key31": "2twBMCdkxeHtGh1LfUCb4LYmPMF5sdPUgA6vHrGEmTGTDYwitzMCpibNZjZsfpVmjbYZhBZKuGrFYgei66JvncnW",
  "key32": "P45prAmZrYThuUsLTnvJnUZkxnqBBKp1MqeYEdmnymtAVfSRFiNrbCFnecfDjxUztPUcmghn1ebY9WXbDKjSCqP",
  "key33": "NgqgEbYDf22u44k8Y6nxZj9APcvLNLJtYMBUx32AsMcvFj7ELYhbenX1vHS3y3SvB6MAjPQz3Hos5LXaHSsit76",
  "key34": "3VDjTk6PAnk6GiZSYDw75FZC7DCUUHKnUvBHZDg8KMsmgWb6kg3UEBr4SoswzMJrALb1aHe9rGj2btGMobwR9vco",
  "key35": "pSgikBYCU1Rf1Xu2XSZHSiZrnwgyyUrv3USYzKt1LeKG7KJgAry7Mj4Nvi2GxQYFKxK8u84GCLdor5nLDC65mbD",
  "key36": "5gysqoiLNLYJo6NTHA6bDBU1SeMnRgfN2z3sNRfbKE8tn8cAJxHwNEynC8hNk2CY8FWbA3doZkL3SNA1YarrfNQc",
  "key37": "2tJ5tDrwqrHRNWmoYtXUjuENxfWUwW4psxWazqWCcjGZUo8FKqvjQMbAsXYx2NDQHBoDmFpmKvEoGL116thUiT1r",
  "key38": "2YPTQ8fkyj7QaNAXgNf3f2iDX2iucnXphcTqmqtorWdeHoFAPit1Y3KHKmPoDitKuWYnwZgz7hExtip7QVNx43gm",
  "key39": "4j2a864wq3KmRWDuMmDGVPECKWiPLqcAKNapsNT8DDMV9JfrB4c1V1qwaBs66Hz2FbpvHwFiHJXqnfwDPhVQGuTZ",
  "key40": "5KBaoHp1bEddy6cGvtWg2uqSo6feEkqeNAGFufnxhEkcZNWeVBVC8K3ShW8StsFZKs9qeKcBZcPZh19RPoZv8kxr",
  "key41": "5kW1hoJRYouvHbvWwehCi1YNJKVKbguoYs35HQcVHKQEpWmjaUvcEisnEE6T8ijhrokoVH61ZQFY6aETfoA7Rr8S",
  "key42": "58zjqq74YaVRgc8SjiyqRdmvLMbvzXUys6cj3Xqd84hnhFNi5G9mcQPgxkZQYWmBGRuGXkC83bP2boMFnHEUhHo6",
  "key43": "4oq86D6PNJBPy7UitSznMaXwtJkJyjp2ydabcnoLmCdTCeGZqgq8xGu9jKAX3AyQvfmxQsN8dgTrBNmthhHrqSfm",
  "key44": "3FWm2G928sa8Jbz7mJCXV6c1jdHfrvJT3uNDZYXTu5sW7kn9YzZs1rJCqXbtgC3ddLKzVp9BUqH93L7L41uXKbiE",
  "key45": "4od75oTGHppTQC9Vv6suDgNWsgiZaNPfhUqce9sPXb3bpgSKqGz8FcNANTq2VuJk65jncAzypxVGQcGdgQd8zxww"
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
