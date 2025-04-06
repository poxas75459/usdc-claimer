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
    "4zbaKTMr67qNNWvzy3qzeAePNKhHBRKuUziyofuEy3SK2r6JFHQeqyVV1wBjXwa13kuFx3QZF1DeL5X3wdMuasqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qBo3Yt4TeXWwUgC5qmY46VLKvYSDyqsVwnuvpjYXgpuwUZqAozmJK7U4tg4jr61Y9fSnpqk4DNz4PrZkLZDbCib",
  "key1": "4TStQYKHzVr5ecb1XF6wcGzZzA6aPcEqV1raZk8GLKj1ZmiTqqnBQ2BhPaJmQ2fmwUpu9fq6WMvL3GFwZHx9ChML",
  "key2": "5ooKytcEJzHYTV3qiByggje88JxGYgZ6nsvEKaUrRkLepRcRZNRRpcQC1jWohyH6XRRpUH5E8CdtvHfkicDJTb2m",
  "key3": "4cmfwFXQBMjg7Kgu7yxMcU2Sb5mDP3mXKfc8CgjyaL19SkDwFEUcZodv1TPtwWFmG28waFGDq4EC4THP5xzSD83h",
  "key4": "2vbHeCDVAhGF2uAe94hn7DTnxzSFcTsQ7JtZcpMNHzLWEeqqrqepz9G2n3hGn97AJbW7krNKEQUjkBckzGhjAtod",
  "key5": "2tWZKYN4HgQP4pQxAAVcdDr37aFEthGAKWHydDFU1oJHQNTBoXtqNJnq1SodruihbdmH7QMGvTBoeiBT5s8wLiF7",
  "key6": "n8a3P1Bzi661Dnjz8pCQYJGMvi7iwwFMWkkGGmcgEdVF1qEb8Kn3JD9Hab2TKhcvdKgYZg6RudK565JxaN6h4t1",
  "key7": "5Pf9ECNCdViUjxP6a53rdeGu7N5FEuMdLE1sLUkgtt3QURZqxzfoskTn2BMPBasCSgkE2VwgPRHrQam3BtvgZ9uA",
  "key8": "2mA3gErNrS5v7uQ3Quoh9KAQHEqhNcsNQmNMT5kC3xeWLT4fN58KZfhyacbigmCiDi6rTegHvAfDwEdxZafyUELA",
  "key9": "2e8b1pEifCsKJuNwP4pQyimtiTPsofS6dgkpwDnvXAnn6SxatNxEHb5BUMxQVFBbXynfFEwSojXQAvM1T3DpUjH9",
  "key10": "3pbodTaB51oHxAq1JffZy4Xc8KqLoUqmmoQMbBs8NSyN471RUmtPjDTbZEXfX9cFG8AMXy5FEg97db2gxqrrXgrB",
  "key11": "5RMT5qwB4vFJRUTGgMD9takr9P2KEf6yX73CiEaHGh9qMgX7gxBKXC7gipzEudm7rmUHnodUDamxdfwR7DJM6WYy",
  "key12": "4BpSVcFAG1rRjBJZAJaDRxJrVyuAfEzgNMXQXeyy4dkQaYUPBMwY6xD8M3v4vXwDrTgPwiHRZw38wv5SVBSbKFQB",
  "key13": "4NN434SDSGBQoSXRpJ6T6CW95TwSZ2a69rdDAypwLR5WzvrNWSCkN7yr1ZzHaWqUcVHT2uG21uqeA6X5z56x5hKP",
  "key14": "KnrnN9X43BZ7GwBUjRnFw5XbheGoAKuAf87AAJTgeJ5Bg2BntvEvrLUWS4cVAzsEKgbDH7Vt7diagfA8U4oT7KS",
  "key15": "4Jcr4tmZL8SoTwckBZ2Bj4sAihwB9uBzC4x1o9VdCnzTmGokn7udGjDvvd3wcnPvpuy87GvZmAe4dZgjqLTWFt9m",
  "key16": "4K9YiwhBTFz5BDCtv4a6Rj5bxrXBTRtfQz25VAMEkopA3D494x5YJWY1uRVJqCKHkbZoZgBoe5NUet6GxsAi9wDT",
  "key17": "3GxhLcSJ7AiWxBo62kctQcZ45ZV2iBeb3L5RskN61eWfqD4HQ1oUB6uqCFRRedAALo8peTxBDKHwD13R6b1C5AGJ",
  "key18": "5Zu97z8shpbzG8DLHiM1CReNnDzbY241WBpS7Z1RVygt3VJ2LCacVNJ2U645BFhugSwdVZ19A1ecWcyEExRu5iGA",
  "key19": "MMkFP5GeMppAvwk4jzHauXTeNprR8JmRMsbrzRVkqivDzXh73yLgEtBZfqjaY6noA9ZExMfyXr947uKYTSPbUoa",
  "key20": "4khiuYDQhojhziU5ZG4xnA6pktqnT8cc5z4d8kVtWdHkfWrtzsADkWpoJ1q4Nm9z1iTdPX2LeBBGYmZyHnEZN4zp",
  "key21": "N7LobDkmEshvfR43pAyiPxVHLN65xUJS1RHkFbhgJ9g3fUZU9jR4ndK39vJ7xNJm48ayGfbY9Bz5dvnAzhtnYYE",
  "key22": "56ze4QVTHkMgGReqbYvnTDmTHDZHWDutN1rxGoBdvnLCWUjEsfwWED6QkWXqUbsdemcjC53j4BduZaJmDtZ2BBxY",
  "key23": "35eMAG619BVJtfQRxVwbmY9C6eZtquSbsVcgR4X2tGHXscBXatabBpY7H8LACU4C2iqVoHieQPkVKdiAp4HYUkSr",
  "key24": "2KdVS7LHh9RpCohQqFjgP7fpn8btrhbu54Rt6fvLbhNS1PRp82AJyNS34Bd7yqgJyvrDYNFhXecVTtgVTjGFie5f",
  "key25": "2pugpTGr9hWcg123MqiqJCZy4rDvzHRAkABHqUKMZs5rFzTQm2nKm5EuEF6VqRDT1NZEtLr7WP67X7Spg7Gg38i",
  "key26": "Z3Yb9nPWkE18YKxX4od4FcrExbUJEWujJJpgvSud8faVyYg2qJq1WetmouNQzWYDZXZuWmRhLyFz3Cnu6pLoNME",
  "key27": "5WvdHGGsw8LuB7bdWmEqoj9ZJfzuTz8eBEgezzzmhreS5RR2cm3KufFyJCKdkDKcYjaNLbvKovN1JRTaCRG9AiZD",
  "key28": "5jDtSX2wngNxt9GuJvomauJk8ZSZ8AKVJxSg8M1bb8qXub7oo2UQvkjwGSMNcTRYmQHdhTgq345KeRQJPLh7FHC5",
  "key29": "3kLJmhjEyKQaVg3wkMSNDciUdQh5m1tk869QvXS9DGPePfvgL5TiuxeKGwXn1RY2A9Za5ucUWXWqhWLjxRY6Lz2H",
  "key30": "5X32to3TFdYGfJwiMvNSKhyANLxJm6tKDSXwH4zSzCmvH6MCswaP98wi9pZ8tcaGej4cCbwjtaXvhdyDRgr1QziY",
  "key31": "3Cvn9yeGMMqPR9TdEr16UhEhFvc5DN2udn996rjvZttdypwBb1f3hYTTBSmjrGbsGUGic8Z3ch1MqeXnu3iMFj2W",
  "key32": "miXp32g9gXak2KdmZ8RzvJiGjzLAiTy4WevGxwcK3kR1LYSwvHEt8ZBZzMoMPbWf8Kyo2WApN4ZdtkL46mQDukx",
  "key33": "2ttSFyt51zXkE4A8fzLJEKidSGsXFSGzUhdUVYwYhhgZWPpNqXCyKRze6DPpAJqHEPUjVpAXEc9JRTVhrwaxFjPG",
  "key34": "4GpLJdrqMEBhdVcDga4waW65R7v2p34tTjAin4wj6gMzFcoXUXH8GXn8Gi8KTy7dCSg9h9kAPWU5QTaP6i5db2Kd",
  "key35": "3wJER3ZMnzGxcKaa3gva7eoEwWgMnJc1nAR6Bdr1ZVLpn23MNwZKZFZYFH8HdEunHd9BwVAQ79NGtpoUzK6sRDCw",
  "key36": "25ztDUQHA2XCvVbJzLamorfJxJw133QNzpRBqkG7b9yTSgk1ogQ3pyaSSB11ESowToHFBqmLAuDq3tLVfGYoQvjT",
  "key37": "2jwJK38c9kBknvWZmMPGdvTvXarBG3NerjcU6XMyoMyc4impvKL72yS3QLHzrR7z8C2PV1V7e3q1TXwqwRShGu8U",
  "key38": "3yLTrkeLCsreQHVfyQDwh3yErT1iT2v9NDZ2YQ7GADYQ4BQq8AMJeMK8qwNpdLxqgYShxR4w693sieUSBJDijcka",
  "key39": "5J5f1cecm67TQ2SBpMXz7cmjPToFVejbD1Uyg6QYsUoxhvbczUpMRxnttKUmo81v6RcQo1MVZ7wzfWExHiMsEu7S",
  "key40": "5FwcmvMijqzhvpkhm11AXCfTQ9AHWQ2eJyy1G7BPompwv1FWVbF49YZD1kwXN1KT3u3BzuiwmrmKK4VRWxJVr65x",
  "key41": "3uPJPx25bqz73S7hgVfX9Bd4NUNucR12idgfBDgiFGn7YaCoBtjjfpFdU8j2L8xqedegQmMn7KKBU27uopwoYjxL",
  "key42": "5ABydELwAjKNpwHwKrsDJhTSsWQn1BNoz2rGX6YQCUd5HzX6eKw4hcfbiRbFNPQFR3vg9fFJGn4Z1RmfX2SPrPnX",
  "key43": "3AgYcfRp7mGm88V2hZRmHPeKwygwecfbnQkyrddbKD9A2KPhXUMcYimiyFptB9B5GRwJ11YvQf5kKPd8ax3e9MeC",
  "key44": "46or1a1L5VbKSNmKbNbHM3PQ8axd82XaPARcR89udKYGa77SH8uPoFzVyt7KuVv7JuQj6dVSt8wcErHV8XKgX8Ne",
  "key45": "3NBcxUFJrJMeoozZGgdLXxvCAntm3APQ6GNdSggsANcpzeCZSaCqgmBz2KJioz5FTN7cq5RUNbtogJVEUWc3XNYH"
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
