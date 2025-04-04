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
    "2Fb9BtFymSeJpvv8aikqGCvwd66yT6bJu16LzJs2jk5LYMDCyYdnbduKHw3MTcBFPzp2vr7mhEmJABGvN52UgQRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eBJvL4gmrKWp3yLkYnCHj3XAb1gZ5MJXCbGJKDEGRXSVn15uLxy67LPoJRzrSZiKKrAzBLd7vAn39dS727faNu5",
  "key1": "qECwMUAGNiU6GPTXWZPKMfR7vwERyGrbRBi5yHx4N9mMvCwss1Z2WFfGCByPXCMdW3CSAKLPPGzXk44s7p5S1fM",
  "key2": "5T6YwmEm4JcormM1Bkw1p9vqhue5X5Ay9KyWhfMFHjBUC4RjZf7w3spzKEU7rdx2TpWJd6mw2qSKJEAKBJEeK3gY",
  "key3": "2GV7eMA7ZgpGUimT5gLtNyqnSd7rtsnQYAsfSYXfNgyjd4sU7CeVq35eovgzGnWy6VWUtJPXwxgtnM25z9TVe1Qg",
  "key4": "ixQcGZ9AmVuuJPK3HMWPJ8FqYF2kwAbQknpRZqqLiTVusH3xWBHV571JpRPvSvf4XrpjHq2bKyTsQSByEAvtvPm",
  "key5": "4jcqZzPEm7NWRARCCm1AKi2D4oqUW1zuDUXHp46cpFJApte71WRqaa8w7C2XLzNfz8nLM3f2nwG82hu7uYGEo6dM",
  "key6": "5BYKdRJV7ngwiJzPHFzxBsuTautioE2HtKnnpkvepvJiq7bbRYi3hxDdzCSYikvLKUiLvF4a16e8wZHBaR39dbdV",
  "key7": "iqMwkgkvjAaxLALtDTA2PVPkEp15YkXMhvoSG6swQC8aYtsGm3FeuKnQavQ4BFAVF5M6xXhtoDhuDPim3yjfNvT",
  "key8": "NSP1mUY6oy7f3h5DpCd4iaVPAAY8Tesv9Xe2rWLc3fitKwJnHp4o3qNpMGmqdfNdzLEe7fa2MeopPzbZpZcV5KJ",
  "key9": "5pFzANcpovjW5DjUVKF5HVfX7SKLFP8w5WCDGQYPyeMw8jXGgZ4kRuurre1XzBg4V4UwG2NNTmkuqEH7pXCJ8ebn",
  "key10": "d94jDtH2LAvCT8fgDWDBcpY5XAjZC21Wc6CCMV3c3kei4MjPggz8kWk1zKRjbUTvdhUctScedoD6PELbFu6iaMF",
  "key11": "3Kd7CRBhPunLnV419xv8gUwSC2boPsQXZfdHS1ngjLW891RX2sRwRZgoDmJezT5CA7nQtttz61ajCf4Mfhwqwyon",
  "key12": "21hBJoiNs4BUQqxJhdBqQw4ddMb2cUs4XE47eLCgNcjxdCJGLGRjgX6ruaeBKZCHBzpMoqsmginvXmV1BRRJZuEo",
  "key13": "23UEWP9kn2CjNx4wpqYBVY74P4ARpxFPQPwYgx4ko4M3p1474B3ZayMP8L43HAVGZJcqkggxFC5V7QMaNQrr54Z5",
  "key14": "o9fJpDrTgoLwxZdWq7AYv38NjyfdvvhBEaNvGxwseFpnk65qznFrJoaK4kJy1ZuHJKEPLJhpwMo33APLRYLjtzo",
  "key15": "4XEJHVnxJ4WmsxVetnAzAynGdbAcqG2oRQFyS7baTyKJuB8tQDkZQmMSJ3RerefDUxs6weorxae5hFvkrjBQQy4h",
  "key16": "NMKDcaSQHTwCZG5vq3tfgW1R8Lv4r56eMBV7FxKxUEdn66HbjyfqkHaEWwyBQA4tM1jxLfd7cF5jbK2s6XxtLML",
  "key17": "3UoE3eLUJJ6m8xD6VqxLNQu6bYX7rUXja2mjvudhCJ1RB8S1MjXjLhazmCmkDhry17b5XyHG6GuJnyLN1cnZ5rSK",
  "key18": "3mjfGpGVV6A8hDYCBAMa1b5AHvoaHHbADvNPsvoxUJgidPFnATHKkEza6AnKAeYHnHxzvZ8DciAF8sWCvCsQhrbh",
  "key19": "51VZ9U9mN71BNriZ94pzB1iJib7m7Jaf1vZe8KXvdag2CsFKtwn4H3WK6HqREz3DWXBX45SVqvTsegtfcZC9mV9V",
  "key20": "46LDyKjMJR25E5kQcnhkAun1Zs31DEPp8zi6TNuPnZzPC4swXbsbTZh5VPoxvrVUdG7xai3icuNTEQfJ6yH97icR",
  "key21": "55wbYpu8AGrHJaWqPUD7kA5BK9uMYjZXQABnigGG2uz6S2mXSE4kEGqfhw9hqJi7fUd3u9VvTwqdHpkNTsPQqYTb",
  "key22": "5Fs36BKzTkoXGkbhiduJGGNhGck29HmzFPMMJCjCwjp22zrCBDNNPzXqp3svhiXjmUz6ofZ2FapVjVhSUv3wehAG",
  "key23": "mognmpuWq1hnv6CqcKGF1sMZit11gmcNsgTsjVNNjzyu5Azcfr6DKL2ETc8FkCHDZTwm9RMNdyrqJ8vuUfyoLFx",
  "key24": "5eF8GKSZwJnLVugZZZ5Gbuy3D7NMN5n5BG1rZL8u4AnstHhK2dLReAZucJBfZUH2LkkbPJ9g7PUssmzMRCK3GVGn",
  "key25": "3Bo74KpzH8q5WJdjxCDZjSxh41u6PRJ9VyhPqqLpMBqnYuoex8GaCpuQQ8H1t9caEvpNbK4ZLZZF9Zr7XX5F9RJV",
  "key26": "5sMJv5h4Ph6MRM5agVyo1UAnYYrVbQiiLmR33FffGMRGwhko7Cqni1y3pGEqvKkqJ9SQs1GzTLPH8CmYSMxvdzZe",
  "key27": "4ChL3awgeEdbcQfjL7XWX4r3Ufk4thmzF1kbvQ2mogsW6FyuD7tesu7az7FH29qAjZUzze5NHi1ZQT1eEggQ37cu",
  "key28": "EHuvxMAR5NRkR8bymmHDgqez9gKauL6ae8icKcrdnYGc4FryzubovwTFfC4HiU4J7Yf8p6gBqUCqmxA8enx21TN",
  "key29": "58vZk1stizc3e34xngF517TW2yuYc5y56CTCh4zsqsEbwfZpSg8P32eizYM9VbiiG47gtG9wpeR4Fs5rWFLKnXKy",
  "key30": "4jChikSdthfQWCrFshbBbqJNJAZazkaC7YTiCgooDgJaRvdXdLKYWQxieQs8YwYnWJobifg17tC3diJd6XLzJf6S",
  "key31": "5dChCPAqKzyhgaCMNdEKfPCLrSqfvQMYCEVG9hsFgsQz4KPfPTGJZDwqRGCZub8BcG1c9d4hE7CuJ9GCaq8fNbYe",
  "key32": "3dqphPy9gbiY2944MKcACVfk5ZUvMmDoDeSnoRxs43W4v8xeF2zh9yXqXrvfvz5ZiQz42Kb8BeJ4PcYWnN89Pd9D",
  "key33": "2Qk85vmUbg251XJ5caCB7256xgvxTnniKWrwAHQeSJKVF8G34eTJxmMKnCMvBJbd77s2rv8dmhZDBuH82acPtTMo",
  "key34": "GACsSAKh2FMW8eWriA6oyPtRjHMgJEtCFeYXdJmRcpsKSHZNNUpAf4PutKqgoo9bsrN1pt3TSPVHDh7e5Gfw6id",
  "key35": "2Mcrqdi1ccQThhQLTrqkx6HdjHrXssQupZmcdf7LCfDMzvcamyX9azdCwEiZCVNhLMiavkDWj9VxhzHUEFsMUD2Y",
  "key36": "2qRENh5vFtDkxBjBHohALV8LDuyDKQyDH33N7PHkanhpF6crexZ1SZLYAqrQvipQzb4tSZEqvmgSyLpzMQECUnXk",
  "key37": "2NLW6c71muh3NEfbJxjvRDc5Xoo2o6xKZm5Gz8uptRfDWYVrnAiZFbzgwdZHWTdZq3fcfbCWANjWLckmDGaypBHw",
  "key38": "548VgXhu3dTRds7AjjrKqpjk6kDJBd4moeicxwUgoi5U5cKJfZq2BoUEAcLMjBc8VU52wxs1o7NnrqthQwTQ5Jq4",
  "key39": "5Tf1xFA4gXPN5tnGvcrs7gnPRC1Zb5XaUmzbeBkPfCgoSFJEdJXdv7x1LFLY8jW7MYZftHU1H1xAGQbpA6jifUjF",
  "key40": "5fZQ8AHAq6b7uMD6oXDnQQaGEYNND9vqqoDFe6b5gt3kgDGWxfjLJEPBnbSfwJmNZ21EkQ9uCrWnuKW94EJC9Y39",
  "key41": "2mY2JPxhngNU9msxQWgNKwDxXJpmje8SW4xQuMCfA8qSYUNj5HQb55aU3wGeuLWBvED8JZyACEV7fLvP7nRFL1tp",
  "key42": "62x6UGpiQDxwkpp133GT1HufeCiXW2jD5ett8XH5EJPabDBjKP6mAY39wU9J9tLEGyko93xj7SA7NXsJSt5AY6N",
  "key43": "4j76p7n12LBMQZ9YQNEXpf2fcTcVQqyA7TRpx1Tdot3kgwoWWEGQny9eNN41QgQJ7oBAvQoxADhzpf5Yc5xj4hdy",
  "key44": "28k1QL7ZCpugHZnotGtTEbSrqzEyKA9fArhMo6PzZFMzySmzvDVU8s11mPNDEzUokSdv8gFX4eWVakde7mFFGfFo",
  "key45": "3HqcGh5aU1HAfMUEtqZP8zwpq3XpJgXCBpCgD17JSke1BvJ7ssbWzXFFGWhqe6RCgLbzYnX7KHt2SSTfvE1csUR9",
  "key46": "cvXeLM9o48NYaYfnZwzEEtGaonNvFAHWqwsjLKpirP8SNsz9esGScMpXFyKPN9MZBuvEyS4zaFDfto58n12ebZq"
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
