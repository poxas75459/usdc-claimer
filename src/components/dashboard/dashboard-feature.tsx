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
    "66sQjPiUXbsMqFyC6F5hZFxPAV77D7nYiEUwgmL4eK5v5QUxBED3vKGxjP41BoC8saLwgKaE1JnBfSbH3u3tEQAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GgdiB6jPpHEp1AYEEERCpiSofp46DmTg7VTUsMSFW4Ch4AkYdZWfTAnWABgSUEgQqPDLurZ5FAtjYbDQuz7gZU",
  "key1": "4LGYUVXVWEh3CUMSpFfRNqTHhnrPuoWrRgVYGC2ZNaRD1YKquiZT4zegtEN6poaMNgUCKrUWUD4UsEgXaPUcpqi4",
  "key2": "5UEBWr3Pz9x4NTmgqB6qWFiAE1jkw1evZyRTTNpUB2MY1K6o1xbUJV9TQEu6ibBi3PAEokPjDGmHH46dFmgrkgPQ",
  "key3": "5736pKjEe5F9mG5qmAzw9CcXQ1RhQhgsUqNVFdpkCxjhNbjYuNuayKjB7KjdUjE95MTA1KKf45Sbe8jUv9vfsWy",
  "key4": "35mtFmZPqHE2L46HtTkJh3U8bDD9a2tXMoNi8qxMT3KJ2dAxEXtUQrZybSeMqhz8fxeCNz4VjpZRdc7ivqmGMwsX",
  "key5": "53Ha9b1nmrkHGrWkpMPKrNxM1rkd1M8tVr8gy2fvnv79hwBdNTDYHpyhw8vgzVYQj3L2E1nPpASmvPUY78F7tCHV",
  "key6": "5ak3nKfoK4Y8d6J23q9UhynoH38kEpM2GP99xXrK9QP7yNZp62zBbEhF4QHxYVFyKFkWBBRNoKwVFyzHmRnARCZ5",
  "key7": "55zT6fK9WkfX4JtsqpRgXW6rbRdsbbZpbMdWpS3GG44jMrREw97CJJQRNg5HSy91vmLro3QCkiJavBDMRLbgTYRL",
  "key8": "3WuWFCgC5FBssmPJErRQxdWrCrpGLBfaneve4bFN65MKjsSuTjyVQ8EMgqCcBvSaiuziuWGx2cnAMmZDPBQtADDf",
  "key9": "5K34dFZBkp6KW3LEzJpqJth37fQriSyBhCqFthMRpc4KkM32DCdJozV9AST23w2FF3SSrSAQoz736prwdd7fxXWr",
  "key10": "58L1P6VUqpHrvq2ceWDxsRAXN2HQjq3hSpBak9k8kMbqh96QcH3DJWh2n9qAU68YTBui4txc7xHvoPnoTqKN3c1j",
  "key11": "4st99kUdEr5GyLoA7s2iKMY5ojwzX4SMdZ2XceVe43w44YQqjx8ELVoke6fAL67c996bTS8EseEkmZLBPR1d4AD4",
  "key12": "3tsJE1rZs3qsMAkTk4zBrhcyYDQYWVy7Wb9aicDsDqcpZRq9FEsseYQVqYSiTZs7SYX24wqCbQ3VX3Dni8MruWYo",
  "key13": "4j7ymfLzby7L5rWku1WwgGHF42dwkbPWGiUMUqQERFCxz9Q3W2EoW9dhhXSMqkpbt6LWP4xjTC9eojSUEd3DGo93",
  "key14": "5vdZw61Tmzqz6JMxZH6xBdXpLt9FYkLRPrQMTLjcyBWXZRMtDGvgeVYL6FKcFvUTcMNYinYBT7iAY97ZgkFpbCyR",
  "key15": "62xfDF2ULUhpkBs7z4SWi5zgGMT8R72N531SXdKPYcQspPuUzSHDLMKbDvUMQoZJE7vz89CwyQv6wP2dsDXfJffU",
  "key16": "2frWkiKbHEnPeC9XvNxfhFq7PA7bPxXuk1sbRXh9p75sMUT2V6t5f54xz6WQrufvJi9TwLdLS3itditW43rtUjn1",
  "key17": "5buN5SiWy6ortdrKcXy9WJb9zeydnQfqcGDmHhPsAsx5VEvD5j6R8oEQhMSZJzmYaerqy7c5aeAuCGq5Rpbstrw6",
  "key18": "4nZn5jxPSewJy3EKKcyJ2LpAg1dHg6jt5SqmcQRZjzCBzxCpwLAo2nVQLRK5rXrrGrg1Gq2e8P75ejqXKZsWscyP",
  "key19": "5DG9LFxSN6e4pS41VoWqSeL9ebLeMF6mR1FvfmUWsgJwYW25Bw4X9EUfGv8UAop1uKbDahSkBtwnMbEyKbR1AyQS",
  "key20": "67eKua7okDSQTp7swKMbxVAxzdQe3Rke4gYV39BAinJTbz8d71YbCLGMGq1ygUavNAkKB4trq52eXvN4inMds4t8",
  "key21": "625wvoDg1SffJRRi3ug5mSHR89LUjMhaproaMzi5Dy91mQSicQtzXjKjxB6obTBLtqtDkD3GLmkRYBhNktK5xzoh",
  "key22": "2s8kzW8gwPgGZXN225MLP4SDi3BVmREdKG1YvcTq44HvoEqb9hBsTxudBeMM2AoWUEsBE3zDCtmMH21FfSpXryUy",
  "key23": "48jQcvBxxoAmbm9FzBmXC76J1n2e3bgE683JkZa5XjLFDRbEDPxCG3vXCWSpsxiAboyonsu49sHGVENxKxx5royU",
  "key24": "5Wk6MZTHA8RorKgZizSshanYeZ2z2TyxUmMsPQaW2oBqDt28xu7u9GQks3Qt5UHpz2VoZTbCKeQKndmfYwm6dcr6",
  "key25": "35W98skGJ68UV5S8hF3rPMLDTwzcTT3pXPvEGKR9EB1ryU2L9qbmkTeaEj45E54XB41ETaZss6B8QYufMjDuPz6h",
  "key26": "4SLPD5J462pWXHrwzDNfAM5UBq54WzsDppmm7kUv4P3LgjksCcvwoS8SGeUhPbMAaBXNYEG1cAp7Mio9DRpH7nak",
  "key27": "4Td2S9yP2SjHm3KVhdbCDBeejGLoWC3WG5UQtW31upCsVjT6sd91th8L9pJMa8VudxADPNpbRoNUbd1zxKt595wH",
  "key28": "4xpQtXXCagMuWs295HB3hVsat4j5s4VNEtA5XeWvb4NJXfTSvmEY57RJJxb9zA2iSPJngrU3n6hFrg7hgfzvWMvM",
  "key29": "3aCHCvzX26bq5nhiBp6ujdHaoBFcbZGvCNbk6FLmxYS5hZ6rBjdFQ7sxp63tFdNJuat65h3UTZdTWn82fnhmCpZY",
  "key30": "3NYz59c9sBa6BCghyESXqXchAsv4geq5L7buX1QXftiGDL25H3tCjgpNBZpv5zb2WbEM2g3j1AiyZvE4CwYGRb72",
  "key31": "4HX37MMCKMy6zkrAV5CoP6x4pH84TXekKpXjH8ZpmVEtZ7R2YvnMDqgCpApJhPWguGXMRxQBDiTmFFHv5reCbBeF",
  "key32": "v7tDAaK6GBWqJS4YSR599AWjKzpcLE5Zii1DjXcsPV2kYsPVVYKkdvTbE7TsJCruxwMDgP1MavH8iv1r2SM1UnS",
  "key33": "ZeH1jDANeuB4nXWixcExtx9AbAfurodePJf7zTJhhtfZDa2PAZGJc7PyV4fUoaV5ySabuXawmjYvgqVNAnx3TzP",
  "key34": "4JSCjS5wSQMaBhY81ujXtqdSGjWnyUzmAJghXD29QJWpJhWiY3WVg7LCyBh48SYxNpGcrJMdZnPDQi87Q5TmcpT6",
  "key35": "3zTqpwDHt3SdtbP6xtAyYN9XuRCezwyiiZd9J3r4dbUYyZTem8mE7jtw3W7Ghusd5jmfYYmiat7TqRLnk5kioFaJ",
  "key36": "qPToAhAeNtMwU6xaDXiXmyANdVvJvGLbCqpZ7frcMsUdCnCsMH1CGG35BDBR64atBYP8R4yaYnQ33SEYBdqjNsB",
  "key37": "sMkpDRCk35WyAVxBSzC24NHCLFeWgutMhT6s9G8AKj7Fc2faiB5CScKVJeYeZrrNnb7ReQBVH7JYQhGoKMJXcxk"
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
