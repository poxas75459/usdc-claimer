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
    "hFWTE2LaXDjQhEkBUpdnp6ZnesdBCB4jtq1BJ8ZeNFr7SZjModPMmcs6hkr8SowPtrgoNwLfUQp8SjTacKRtbtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mK785SfMdfcTuNN1Xp5TxHD2FecNrTQp6qEmFUcbR9ziZX5vjeWabbqZStmpjeiV8U59yHNLWX3LRWbHXGnoLKu",
  "key1": "XHT9TTLY6iNKGiamiG6uvWEMTW2Ru8JNTxmXosTbQJQ3HpHNEGM7HJyzhNdPzQ7SzG1N3o33WzJTG3fCuifeUEz",
  "key2": "5jpKwS1Ksz7LxZea8WoFwtESn6M6C3QZek7F91VdwBh4GzWDzUSPAnZJUB96adZ2xunsXE1pBAAjM7n9PP5vLwjF",
  "key3": "4eNPzoQe9mWkcaTJjcFZxDFp92F8zE4MHCuNymArV6QrfXjx6nZL7eoqmpjwUWggfXx39WSKdPsNfLPqQVtSmJHF",
  "key4": "44MKjj14DZQp9pVZnXrqUN2MXYWuJqxjQYE4BVFjaRWC8vnMXZRsw74D2joMrkzNq8wUZ6rAU8fVu6LYn6bPSH3c",
  "key5": "5QBBeykco9E47XjGwMwoxyK2RvN6Ldgdwsova7o7ymN1myvBznpWcBWTkMzdidke455sgarTTZ7UuGMQPbt8FrsU",
  "key6": "5onVe3yvtcbxYNDndDdTdNHzXberPpPm6VjscomdAxJ4GcKxAvctufbjNcZXaDAzfNmisR4S8rrX2nunvHaEgqMU",
  "key7": "3PWLoxJCFiZEDfbazRmCiL5tBc7mEod8ZuBMqRb1feDSQMPDpHzn96reDbKC8Aqby25XsD2R4ev1Kk9pNKr8359M",
  "key8": "59uD4bRTPmDGHrW4kkgFVPaW9GMnCb4GNfJmAG1BczNokZgxJezsMBxMgvfRrQG9oij42grvsFj1CBiARteTqV7b",
  "key9": "4x2tSmVPU1mJYxshJYSswyxdyKtwYCixaGpbMzVyJwBE8ijyGSMBcdtyofL1jgciF88UC3L2nfMBLaG7zEeRtDhn",
  "key10": "4Fs78UAEAxa216axdd7QsN98wFB9FZNCpuWo4uwnf5LjQVikVk11gUcAi6zeQ5vMdRkfxt5BzJ6geRv3Rd45SLYj",
  "key11": "65zkSZEUrpDe9vwQpJ6o4Cko5jN8JpN5bR733nntrKpebp3fiD25v49jE595SATFyoaNMUfmUAEz6r5fA9Zy94V2",
  "key12": "3ezKQh3BAEjNa8XppwjxMYYD7gJD8w7TBiDg4a99y4jEPstxWNSgAMq7pWm2CatW5pRpFLktNL2k1wfcQxRSA89f",
  "key13": "4Gdhqj62sraWDNvcZji8gq1qTCbaDwdo4Sn5n72qHTZxm7os8acu6xx6M33Gc3fJBSYBnLbXJUAeuRSTTdvGWdvZ",
  "key14": "3UJLWShpH1RkPz6ja5gxX6Fzd1QfwATWuQmy9gk1xCWMtJVax9utzG2CMtxc8x14JG86G8URCLV6hE16X32EtoQq",
  "key15": "AatHaU3DkPcbWuWGFqWcAbTGMe4jnRXkhVu9fwEJZ3W58EqFCcCkC5yNnNRi1NFo6MeTpA2c3RFNT6qebTvszQg",
  "key16": "249Wbn6NZkP7XTPUC8W31PK2ohT3HT8RYYJpKvsrWJbpxcCfY9u9EqfNaUZnUN8N1C5MuGpFujKuvVKsWf1gHSCZ",
  "key17": "4cMDU69pmed6xW1YskbxNjHJp3AoftAeWKsQTW1TsENXCnGEBcTcyTYbQaomDdP9t6wqQC98dS6cRedgcTJsSGaC",
  "key18": "UoqWWiX4sN18fv6BMfb6cEL6CcyvNNAcSM8AJhLd4fpCSQjBTWx4M9je2FE3NWt3RseaLqZ8BRYACebdNBPvXrq",
  "key19": "5s9q8zNShUQZbK8TtEB4KCYnBY43V7qE8hP3dFRwkh2yMfEUVgai6oXdXbsXegkgy6c8rWR63ki6TNoRgyuo4pe1",
  "key20": "24UFL9HyLw1fELVc8u5XVJBkWhDvPZritdL5tA7bGJJAYKTajcLXohB5EGSLKt5XF3bXAHwj5BJpeQ7Zg73kxuLu",
  "key21": "3n9tXk2NjZb9scVkfJxXS26c9o3dNoqJZCWHbSTJxcisawSyHJpPg7E8rDwzT6B2jGUY99FZFgw91bz3RsA52bpp",
  "key22": "vHKZCFCi5a9D9aHtiq8qe3SBmUFLqTSXkE4iibMeTJZyx5q2vmwgsh3Cw8opYGo8T6PGN8rgfNU3T9hoZSioEbu",
  "key23": "2qzmkjLPzWKzTNUFkuyg4ZUScpZJ2YDNvZ6TD9VPamwqTHMyFp55NGdwoVkDZc6BdgiCPeMrHbsPUVqd6mNysfrz",
  "key24": "4Fi4ivWoqaYG5qVz6zKJwdZgRWSF8FSxSUAJXSDhENCrcE5o6zg62L5QoJgmgLeChK91Q3wLMzVnkj9huLioUwct",
  "key25": "5yxHtCoj2ZknwPKQQTGyBgzaxYKPBETN5XBqSg8qp7eRckqdtCiKqiEbtDMYos4L9PfzSGCuZFc6xVTXTf8w8nTA",
  "key26": "33CGgQwTz9LDFppWhv7A5DC2MBZverH7ZmW5bCQSVz7QjYvuJF63bVQC2tUzNRa2vink4fohVMX4E6ZjStvB4epY",
  "key27": "377skd9Q7u3mUeh27xY4UhSUfWs2U6sXd2XXBiSPuQzrM1Xk9etmsQLtkHNe9ZnCwnPJFa17tRYh8yL4W4oWVdAK",
  "key28": "SqxRFNL9UFWpSZ9GPrkqEyskBpna8UruUdxrK6fLUJEKy3FjmiAWNXaKBTpVmLVbWwxTnnJ2QP4X2YjQsebmdfF",
  "key29": "5cbNsDcPQsZJzd6ys7QFE8NBExo8PoxN2VdnuSNHXc2pX8yyK3c3xPc8RtgHPGMGtmqNGswCmmQdzH7ie79Y3yAA",
  "key30": "61ziitNYeCVmZcunB3ypFsHkyKeF5CosM87vwH99hseiu6MSTGdefUpasaAoukcBe8dUguCPVPziz3Lucb7d9FeD",
  "key31": "2AwMRCd2ja1hrAiKbHBPgKoMk3BYZdKs4Nq6z2cEvdrWj4hf13jV3igVKK2wn8cgz86cKSiXQWq9xUm3zH14ZBhs",
  "key32": "4LTQG9PT7zy73rhTVSjSxsmbhitP43jANtCUReLraEV14ggnLugbbuXSuXKHyAVsnpCmWY3CzzfxEAMuA41adwxa",
  "key33": "4xcvPZZB3d6GY19kRHwjEKmSeUztJzaLzUP4jEFMt1GXCNDPPwwqnfKdxoE5LeUH5rgXwJXmFTqyvS7NPTBAGjVz",
  "key34": "67nSMRLvftnDMkikBkWxfUgp2BKRECiRx8gUEMH83NWorECwZGAP4YWWS5TRNh9KCHH43aShM7kKEopSxWvnqyFs",
  "key35": "2jhJqihuWNo7LXXEcGXiQmxg3tAwDoZmprzdwt1sBQN2HcfuVkw2nJQbfCkkQssKi7kQSdnX7ZJVTrDo3XriNTBS",
  "key36": "4gRKjntK2C6JJwCRWZCNcUpU7jpL4c73w1AdgdH9prZS9cKjgisKTPTuTPBW42JV1DaiuYhkreKhU38HzMeHr2v6",
  "key37": "61dUajmrzHzX7n5MuN4y8zt4KnmF14iHicivyerYsxHu9SKQmTGzrBRRC9j8M3xox9WC5aeJd4vRCfrPiSqCV4Yd",
  "key38": "5kYnYAKeyUjEUygxjhigh8T58Uj2AkPaBngfxBpTRVaJJHn7MnTN1xevu274QQFkV3tVnHLLoHXeBt7XY4mkBNo",
  "key39": "3Jshfr1fnrTtZTm9bbF6Hvkaf8UAgHQG2kj9kDryHCwtNnjYvoEvfVSyw62nhz8HswL9dvwF6HVhJPQcaHjVJdbm",
  "key40": "58V7iiGSpxPyvTTT9sNVxpvUUk2WaZ7vKwnCwKCn5wNLyMon3nugkAMsN6cbB3NXxf8kZCHf3kXSW6URheszVpqQ",
  "key41": "3xanxjqSAYij1Q2bZw7RNyADJHppyF3UDengepEH8mGrHWEJAeSsXJ8cTNwEgdewakHK2ddjVutPcZ4QWVauFDeM",
  "key42": "5WLEgZtHmXQZEmVGms3ZSgEYyWJ2vq6J5LXVujvqSJzTJe1mppxttjWBoKSz7vy4w2JhpcNh9vGu5XRiPmDYtH6W",
  "key43": "fokt9mHuq4DUA9FnyniWBe6PpzZXhCik4nfLczqxv6PzM3Ss7wowwG473s3zUVscBCHrfJ8CimbkbhA1AA78dR4",
  "key44": "2A565YCmYiTjcKAJKSwFU6RYoV5ujsjMQTRTotreMiinm7UsyovzuMMyJumYC16a73RiMoG42bKa9bxrwQ5uMfeH",
  "key45": "3vGY1hUkLVsy9MP6RQKgdsEBUSrjsrVABEvCXkfCrCDHALh66BkwTJW2dDYBX97zvQKHrLZ1FKrWopgHU5w8Yc3y",
  "key46": "3ZkXadNYCLFqgdwcKnnKLhR77LZA6QxsqdXcsPR5YwJC2jkALPDVMHh33iR4UFc33wqSfVG3NSe6Q6QdorCFM4WE",
  "key47": "31JRzGiNsAVkQjUqywFLqym3oVLbNRobEKpKyxk6vQ7UU7bUbXuQ8JoFKAhJuXwGM95mT8XwapHUwMbkWcxU7QV8",
  "key48": "4Z797B1X5eippLKTHapisiuvbY2AJb53q1bQ9tNridXnzf3Zri3UCUmHnVTEySXkJU1ZqJWfDo8gzjMEyQNDNbKW"
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
