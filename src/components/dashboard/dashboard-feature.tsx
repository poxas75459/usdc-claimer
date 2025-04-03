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
    "4uJNV6oiggpj6wmn7VA2p7yHdNfWReATvaK2Sm1CMKx4s4CQah617AvWhUvHfRCQohRT5ECvwRF4thtYEmCrXrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JdP3eq4MYDarpKYUPv6DNUV6XiXMNb8VsUtHCdjSerwvHiVBLoybDmrAZmTizqLa3favbvke28QFhJKrVr4dnfR",
  "key1": "4EyLqTZeLtVT6SRB1ZrceYJLjEd1QRupEMz6SWToyKMd4SEtcZGTxGi1Jp9jG6pcV8oGwZL6NXM3D61HKQrQHmay",
  "key2": "2w8hHBh6xFLYXdggrah8LbwKSemPZxyjFveL7pS5LZEG68cfCgLqMZR3VcA78vtBojqgjztjMqCMgorFGvDStnZc",
  "key3": "45NPY3UuV6oa8A1VPcopDww2fr8CoTvXvNrrFdpQ4GeXbCK5Rf25KBmqo1XCsAjjHJnoTWoT6KGzbqNPMhyCSLn9",
  "key4": "21odZ4vpAAYWKkQUXawkfLearA55fQzSgLc3qETerQDLixJNL4AqEhrSWFBw578PQZZcpgFprL6rCDvtDPW8EKie",
  "key5": "4GBtnN1n97rouh2ep3B2G3YQykMsk9gJpuSMLimG8SGu7fygbstvaHU8f1uCZk8ESed1Xvf3oRaCBsoB7BRbuJ41",
  "key6": "52Ngc85N75ECsdkLXY8pw9AhPizUCsFHb3pXmU8TtShxzxG9c9Nnd2iMgqEmjYa5bhZZqFv3fo1pS5kChEcuT46K",
  "key7": "2QAv8CWRzvYFeCBihf2iVpRNZG5XCkYad7fefDQygk9WwaCRuhkdHduNjdiYHKMYip2cPWsQvBMLQZ62MFqVt8Qt",
  "key8": "9rKY1a3ZsEU1uBa2nWVA1D76r1HJUBtB7QEVym3jgX41sezrrETQ8HeMHakyY2Rqy6LxPR9EQSHwCGVZHTPJT4Q",
  "key9": "5ftAXdS3CK4Rk68JuvKBVtWKC7fuohgWLgkdG95Q3uFGkYDLd4NQTbe4rBoDsUXURETocbcTxHNctmTeyv9WHTQE",
  "key10": "2RnDLGt9NvrmYiiz2Jr5WePQRKLe9Pp7TcE5GsLuovVzWDAaPkximDm8yf4JSEGMuyi7Y4v41sby6zKJEhx7Y38u",
  "key11": "5csPdMhsyBLPAauiNS7fXv421vPvw2Zj785JTajvhfzUE3HgVZUqkJgk52EQ2wgHEjhPLPGNXmkAz1zSH1fYgTC4",
  "key12": "5cy51DsS7JKvxjyknhLQMA6vMEv4rjE9PNQSymReksReXDwVyGoGUN53qYofkbps3ki69JmgeEVuciQBjWbCK6YA",
  "key13": "4bmdBcCeZPq8dhJNz6oowDiMuKkENyRWTrA7bbN9YRwa3TTHk4kCNgAg5w6psueaFtUUdv3Maeo9gvxzfbKtpAAJ",
  "key14": "5R2Dnunk4RRm3P6kioDKHGqC9KbjkA4oUna9z8KGiPQB5butF79db2o3Dj7vmoWNufxXbrK7RavjXuuWjw3zbVHM",
  "key15": "o8fmYTcZaMiPs87sES8SFn9pNaQSQFQcRTWgsVA3676wbcSkiTjyo73PTmyPbcCatqZdwJZX3efcczahCUrPYmg",
  "key16": "3KrW6W78r9j7gK5skmek6ZYyEXkYQ6Yep9tKCJRVHJRcjmMSauVs4x2EJ6W4Jwu43qVqWwoDy9pe2ySphmCmHTgy",
  "key17": "3YbxpKA2qz5HFWcTZAe7UKMDu3WaSWKijoQ5ZEXue8jQP4ygZ56B77X23iAf5vo3pLkon3JeRQxpTp1uHKBFF5qD",
  "key18": "4Q88YdVPdo3pDF3x2E3Wx7CXvLGdyAEVHPe9AoKU8p598jrzMPnFPQtudBA5nYTpqz6NsmW57Vw2fzjRoBUD12Bg",
  "key19": "5j5p17om5cfRyQs5yoHa4vaxp8KA6dYEuaG8wHrJBmM1kF6THTCGn54Koh3AvrF3kQ4khmndzvwoXfsGaCHa56TB",
  "key20": "EWGA9SD3TEzG7pye7QitUBuDHbbU1uMiK6E9y8P38otdhsN1qW6pLARAm59g32dMWRMRCBuDHY6pBbGdhmrDvcU",
  "key21": "5R3uZcZMYDNVZZuyQuX6gujQ1mD6FXANw2HzpYsQXvYNztDy1iFKMAXvbNEUABenaRRuPc3mBHFij9cmdgEwovGk",
  "key22": "3bUhWUruBBCemfcgiVpHPgRtRKiaWDFKJyuHX3f3hNBz3SxyBvdzj4HTGGLGdCvMSahd64HfGMJFVwRaNeiPBr45",
  "key23": "3e6jbeixDJibTmM4KqdRhEM7894MJhnsCiKguDzpk5Yj9TARLYtrCcZtjZMpxW4SZrQDyVKGTif9a2Shr7XS768g",
  "key24": "5RfPFnH5Ymd1fLcvnR7kbYWoUXi8csUcLJV4uKwRfhPJt6B69xjzWUjF18jo7R7vSCyYTAUYWP8cDdLYgrUKVn35",
  "key25": "wXDyWumPK95B4un1Yvk6PFwWbRNaPWRaoePc8rjAfx1BvqVs1Ef9bkj6Kd1AZxJYBozFtN1949VaexVrJmdJ32F",
  "key26": "3nqBduYQNu1YYE6kfTyXjdVNsycYatJDYYX2h1HAgirYGrAd73Ff4MiJu5Q4BUQZdYLgyfBxJZE7A3NbCf4AH5m7",
  "key27": "TtjHHJRY9ibfb2RPKSTwSsVb9FSwEmqULttx4Sorpw5iTBzkFBCH2Kxjqbd2GqxmBtD8ZixFaLujjwNaibG3usD",
  "key28": "hjAVpRqUpwjxvmJWS1mnsQEXhK9pJq1Spz6aLT8YbBTYDYZ7p8coxiTQtf4oKnQ9yrE5hpfZq4a73ja9fdcTJEJ",
  "key29": "62t5PsXC6rq9NNJhn72B3Q4GneSNpd4TWKortdPiXs6weqmHPxt2tsX6TkBxnnZv5xizYnkfjbxE35aL7H6j213G",
  "key30": "R1VmaQ7qdaKTjP1BjAxVCEY99pGGGc2sTo8ZU2rmVht5QAhye2dK7Xgem3MVvsai7bjPNkU9AYUyDkggS4dMNKP",
  "key31": "5VfvSQzGn2sP729cJd9xhDEoxybFffVTCz4qB7cErTzWh5ado1rSQDBYoFb6pQE9qzfxRnhdfi5h191rCAjcMRgW",
  "key32": "3CZaAvBW8jzzzQHPoevm4L9HwFLtAeU9SP5hE4Xv6L9xXXmLWuB6KVKFbGfqmfJd35p2JEA8DYJAbEP4dJfb53Bt",
  "key33": "2JrJTkFYuHZYof54FW1hZGv4pi76Jhh3ZqP1Ln2fUgmhfGM166BGs6UAbmSLR52z4ryyru59q5tUjMrJxC8WSsjm",
  "key34": "3NqATSYPcpiD68Ra6ogivwc9y5uHhhHmcg2BonuSbkVQM4VKJhUBR1V8aXtJAPafqJ6i7qjyh32x652vJmVdrwFA",
  "key35": "A6A4WGr3p17z7eNfZVqsJw8JUKYcqV58e1mtbLk4M5PYj3wkCC35KjxGVMEpbbwNjWSNjR9jxsAZBsuJqCXP26n",
  "key36": "3qxAvKj9xT9w3UbvETsaHYVg14GXSuyQtFKUH6peQXDbhCrqg5dgAPBkRETLkDuVARefHacKxW2xUQr337LrA82o",
  "key37": "4vPPxoH3V6d9KKmR9A6JbQy7EZJZAV8piPeqEMgRtY5gyfSr87k3TjvKu1o2iDG4kCvhtKDmWuyFVBYt5B5Ygeoe",
  "key38": "2GZURu9a795TGvGmiqi1iAHD2vYNzJyzmShnpYNV8YCHMGodSiUrYJzxum3joQQT76q47QzpaJTh5zP2d8fmF28e",
  "key39": "35RGdPcMcrcbFHxB5QMxPPPgAqEN9PqbPYRA1w8dwZVwMiPGtw5L4iWWTtqcsmsxemCrSH5XDzV5N6VS1vTvk1Bc",
  "key40": "4nyePS1t4kk7kZQvZLAYn6WRu35eRwDphvvfrTZYg8XhzijuBTUaQjoJacX6cJ1f9R3mrFn6jnGuWqKLyUGAkuC3",
  "key41": "47PhLu9amrig2aDonKRSpDpjK3vqMNbewW5r4FrXfnn7vQHWjviDbx3RCxVBsAsYrmWxzRgovMkDGRpJrspkVXrc",
  "key42": "35ZktM7tCS4NXzNBkSY6rw9Yg9Gknipmib472bp5qWNmyee5nnvLTbt7xcQuhX6RDoZXcnwGyUn5a8rqroDRhThD"
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
