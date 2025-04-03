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
    "5G6ZAxtonmN6kH8vedv83u1VuRePihLzTV9KRivCzwqCdw9HF5CaiVxNx8xdVFxrQYWMjfKjFesSZ4gD31Zj2sCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SgjCa6HgFpGdYtHzVFW2UooLHhXCasdG6RK2LbYF7qjvdfaU2jtBNGN6E4JDB1XB2rvYY3ZfVYDrMcfyDpJEXmH",
  "key1": "3qod9o8q7B3RK4GZLAP5wAqEh3rAzWMSGu5iV8sAostSttUD1GFD3snxRUf4LDChb6acuk1B8emF5rmN132ZBMDg",
  "key2": "c2RTM66sVExxnwjT7QhkCFL8ok2MFPPRJHRpLEeoaxg31Mshf1sDFpXdLZQGTwwsBSXpeuLstyV5nn7Aseygu9T",
  "key3": "4879VppzaCeWxnxJPV5Fufk1jvjfxgGHWjDgumZe6oHAwcpWP1dp63pZMqHtvdCZgE3zpU4wAk4zDumCQyPU7HKT",
  "key4": "2GgSAbRRVeQT2qgxzYB8rGLj9Lp3svqyumpzkmCLRcQtqyewbQtqgpVnMQfuVjMHHXbRHvE8fpjmSdedsw4xK8hW",
  "key5": "5f5Nwcqgqxd3AJzMehR3VCwm1LVzSb25fA1ZSSBYtHiAaRFpkZNt63cRWttNyzQVcCGmPT886nfCdTffKdaPPYKU",
  "key6": "5s3C1TiddGjEQsLDGk9TQbucaQNPtrR6mN8TZU6UzZGcLSxBvmDFa78DdpScw2Qw2mqdZBBgg3gDHzvYYt2Jggyc",
  "key7": "4mgJfoxyUTthg1Ci1A92zqxRe6wEfJYACkVwhjWPF7QfuobmfqQGi4VWpdqgSpQxPHjJjH4T2wPqWctq6LYKxYth",
  "key8": "2JnWXrsoV2iyzJ1koYCdLFa6ujJ998pPG4dp6LzoxDm6MH6SjMNQsygdyYKRGBpSSGJbdL7ojd8ttAxTkGkahHFN",
  "key9": "28b56ktu5Kw2WV8MreYb3WEeBkxhcj2My2QQoyrCQYK6zBMrKxNEj3XXvECkL56vvwd4s6Ppc638uC14ZbJKyzCk",
  "key10": "2BCZwbrWx77xp3esowUYh89RyfLpgKvGP9e672dN33daC9qgy6JUuBnp12rQNS5o6UtDSUVePyxz6KGvqVAKWXN9",
  "key11": "3nxu4eRzik8An8vcYEu7KDNVExotW5LFm16LmRTfCSjLDHtmTnXsqf7UjvfxtnWZ2MkFwMQwKv8yZ9UscZjo5Nwu",
  "key12": "Am79wj37Xhhz3HGYWLuCaqkUauc9hN7cWfDTyC2uLgCZSWHG2gq5gGD97SgeoSQVxieS6ytMKoPp2wQLhw3898t",
  "key13": "2RSivc4KTpksi5eWG53soFXzzW6JGYz8g3aaGvcWjWFJpJPH9rf8fjkVMLBYc6jbtEWo4hk1TvTtAg6qaQVDJqpY",
  "key14": "5eexuxup1AdoexQY4tSCxnRhTgz7b38Hmk46hhn32MV6tDFhE1Qyc5R4XoHb5aG1vd3e6x5Mk8NwhrehahtDPQAg",
  "key15": "4mR9hrDfNfxbrG1KaK3KjMJTiTctcqybxDxgv3BPDeGYZYPAsiTnPJKpqTQ3g5GycmKRUMG5RgX2s4EscTvphvPg",
  "key16": "2MXq9XbitS8sVXk8WTc4sfZ2xNsmrDnEeZQ7mhRSD73pCTafvCzu6dhXTSrnsLXV2dAP7J2dJpGeXnsGp3ujTF7K",
  "key17": "47a4UTpehXo7LuYsidCMwFMYAk9auSEkYvAvxnvhRx5MwEqNkgRjBvpTuQ6mY5XcP7hyjvBv64nmxUaGexpoL58X",
  "key18": "4mQpoJnP5ra4qsGkVYV2WnJCG6NKY62561X3a5MqB82dZvGkrQ11D5nHYFuQaiyMgQBWoDVNJijdVwaE5apA74D",
  "key19": "5HNgYQt5uA76S6Kbhhj9j7sAnBf1UYSuCUu2NhCb8M8yYgrLDUHkJMf6qAQvK6PZ1zUKNJwvPgggGwht2NH7qYpJ",
  "key20": "5NsyJSkEEXiWc3gM11JPCAbB7iJbXjn4gjWriDte6EMi4gQhdKNUxtddTPnTWS8DhQHVPEEmbZ7Hyv6d2tzEpATx",
  "key21": "4jp43TzVWj2D319pmkbLTsPrVYnKR2h4W4ePyEfatrsWawz2GCsoKuYqiKaBWuYyG4RBeRycZYeTEt6UZxig1fnY",
  "key22": "5SAH9TRxxYxRK8dmMzjwfX8X6Jaf1Zov9XJpt66X6AibC3LJ2hJ5BLskK3gJ5aEQvFPvZQK1uuXRgKUxByrTxJRi",
  "key23": "4BnRt5HPw9KFZPZn9PfpPVLsK9LmAsPzLM1BcVcYpKw9Ws4SgT1bMH8dfJQ1riAUERYVRYAzpDG6LXMjREw2eKrX",
  "key24": "2su3ijnnfCz3X6SxTSrxCL4WokrhHp58XU6e59uusmmha4pk21R1XUz6qWjAs6764sLqqUD5iy444MFg62hSBSWj",
  "key25": "4gkGd5dJJiYx6LvrxLbwTC1zDMYdQ26R3Fh9Vg4crBCeo7v7YjP95Fporvcx5mPLHzNWMWpH2xbjE4QxWBJHHeo3",
  "key26": "LAvi6Jx41CXQBuRaWyvCaKKLNM3q9ySdqzDudP6KUGkBMtSBPsHWcUtwhdoU7SypKCoSRE6TGXm6CisEvDXqDhr",
  "key27": "2yz1QDKNxtXE7orNfLmfaJ3E57bGftDcEV7tvYQa5t4J2oA4zZAiSWK4QNfBd2fudTJqJaNV6xBxSdLFdz5Kt4Pw",
  "key28": "4K6kVECpFimXHP6v6BovtL2BVzjbWfXXGTdGCnowib733o8csNLNxcpnU4HwBieJ5fYUrFWDBnuX6wqHQL9GYShk",
  "key29": "mhdJDfbdc9VeFyEcLTnmq7zJFKsj8TVU2Wov38nu2Cz2VwbXw7odenfMBZBbvtqMuA7HttV2oGYC9F2G8TMxVj8",
  "key30": "36VoWdEfxbVSY4nDecj1eJsW1SG7tcrwmKGYo2t4mPUHqhGQ4fxegYXWf9X2aLrreyWwCK8GkcfYuieDfYwwyPr",
  "key31": "5qXQi3F1wazGDD76HfP3bDFeDGKSLkbiRqPrai8zjBg6yVupSj2GkTwArAbL8qF5bkAC4n8CQFFidrfu2iUftuVF",
  "key32": "3PCWrdP53LLSntTL5Vz3guaM6bzL3WCr7jfFJXYZTvE4hWjiSuYQQiE3Dyz91RvCB44JYTJJFzYMnL5oR3EwhWrG",
  "key33": "JPw7rdMMhf3D1j5BfkNj3q5sQdbg5k7wSWHfvjUNd1upRDUvuBKNYgerLrEiUML1ZCPoZ3nXccLC1eYy7fuQgDB",
  "key34": "46NRDrgfpW2DJKNYSg3La37nH2cZVvA4EjTFh6v5t9tcjB6ReNQq7AxYCRczT4DXxWgP6xaQ4xGWfnjWcVuNNSUo",
  "key35": "CwnA86nDikbER9pohZJ5Lho8nSbGhiPhnZVDcmHtYKSqQZf9ViLaJvXTqmRWR5vmkJuvz2bC63Q2UEWfsmeigUZ",
  "key36": "2HedYjJXXGkKNeh1NLfWS3uawZjDSegY2SPRMNR2ViyuC8iapps7QSxevYehqvDf3TGY2apGSXM3XEktA1PYtZhN",
  "key37": "4PChfRoRHhDTNiEpsjtKQD4Wjtn5CpCgdzubdA3Wzq5DKb7yKidjMrNUywrLnonFt7QJLcJG2tn4fiBd72vvPZdH",
  "key38": "43ynZbP6fve5sqit5C6yztsYNmjgnnmQ1CBGCubhmCWh6GodYMT1c3YeihXrwPb4J6wZpzA6ZN43FaDycqp2C98P",
  "key39": "3fiWKFuZRiWCiZ9CFUpU96wYQSQhSzUmRnnFcCDqZVRF1H9A9BkhK5hXCben5HAFnPpAfkrAA83FFPeEdkMVy5Fs",
  "key40": "2KjgautLC34JHXesURLVCB8FhYj9j7v1Rjnco4nCPycHP6dDStbME9afQdZ8bUjsL49rcQuBpGdXTUtNMLt3nog2",
  "key41": "vj5RqQLWBGck7eADmPUFuP56heSNunHtbRncrwsZpSJPbzG7GEeJbC5KE77aj7LMTM6LuiXu3L43C8hNaLnBN2n"
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
