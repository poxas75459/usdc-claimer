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
    "5BJdwucZvAtGe8ks4wJm1Cvian1KR6bDJrSbKKLeHqxCvGixTwTJF32gLh65XbMJGYT8kXhUrM7QMfVr8ncoY7jj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mUy1wsYrrX9qWMi8YM8scwpwytQAX31QsvbVtbk2t7vRN9tnGzjduAKTnwy9gKDRX9eUhDdQs9C7tznz3rnyRVF",
  "key1": "49gWm35K3nDA4DpDjJBKhUFfWzj8gfyd8fhSnY2cmmJGGx4p5QNkikz6Vc2C8PTuaEzr1bnJ9Q4JYTJqdPHL1Pq5",
  "key2": "39Bqf8UKDQd1by7MD6wNrS1QtjKvfDnAD7a1JkFf7Wz58Ct9R2YSTbbibVsMumLs1EjxHh5LTBMC8viSR6XidAFq",
  "key3": "2aCShSNN7iYFSi5DaHWiBqk2VTdwRap9shMQUyQwUWG9HYYFL1DRFGGscZfiBsZDaCNtNCossMYZZH6D5EU7HMTf",
  "key4": "sE2uoRnPcbpVCjnsXYVPrt99963UNyF1d9peFqXUTgK2zRyQsa8pErC8pFHGecEPcwWXXZgKjKNF9CUqMXYTDNH",
  "key5": "5zs3s5yTfuoopZbiaufenxpaGUKqD5ngHXmhmtQ5SRzqaq2HfLvXTyY5sBcyTzjC599aia5iqJTynPijn2M2dRCo",
  "key6": "4uCx6LGFWSV34w6BXLE7TjsKzbFNPe87XDu7qwPKfGMpXAiK4miiRdfJioVohdZefdyDkPP1D1r24LzwhpQDRzo8",
  "key7": "s9JTcfSAoJddYdzkBF6iNG28cWfUwajGnoFYAq4MwJhNdu2jXgJbQQkMbKZYy9bpVHs49CJrVFfJdsas4zwYmnP",
  "key8": "2BDQcCGyfAhY9wnDQdaNkrha3ifkGQAxtzopXQjcVBoGmWTRCAZxECVk1dvwNXZjikGGV7ujr8Y9ysdnZqcqHxZK",
  "key9": "ummmwGLnLjHj52JmjkofdECS5QB3XvGQHdxgESQEye3Nt73uH5fU4tUQNJwUwKzUAyqLsEGXTAaWQ2YzuHeksfM",
  "key10": "3vGFhQFQGqVDuDpNKKv9k2RiHFdMgvBmGL51Lt1AX5C6XLDiTVwsugU6Dzq2uwgQbUrhCSbHtaDhdjD3sCD3bUbE",
  "key11": "2ctHVhgkpdx3TcWKRjtvoJWsCYMmZGEEx5rdQcULuVp8wVEtSbrz3okdC2XFzGegTvWLCaWdQAFAj57saqNbMsGk",
  "key12": "5HRWDmQ8G2h1czPh9mp8Q8W1HbbeALS23sX5dkrkYNXUyPwgMkKQpzHzXVnZ3bDkSMaGVKrm3R3Qhkno9ViQ5zaN",
  "key13": "3uguSyur6vwFpANii6m73WZc8mWdCHwKHRf4rNztRQY5wLe7kzbrTW1HWKNDqhZRLycGMomKhzYuUgFtaPEffJw3",
  "key14": "4Y4z7bATJYRRB7L7jMvbrwG2PnwsbPLx9xdHhMXQhzG7mU6zCMGEbiTEaoGbzsPoKDzCgBDF13hsDRU2d4uBFLvY",
  "key15": "2rWwmgrcJRnmeoCn4NTgTaHMbSRPGtZUNAgoFgSZbutERrNGtfuA4tP854sVFb8djqKWcmjDJRyNjJwb1hJZwzaB",
  "key16": "4h4qTXcrRWrTs7taekxka9nyC8W1sfu7TCnsho9vK5rVZjG1chnCXpbcvJykqxph1ERVkzCLM33fBTkamN51iRL7",
  "key17": "2XsuDyT58Xu9gzSUm1FJkkyAVYh9gV1g9LDMo1kfB6E7UsPqRWzc1GRSTgMhq9yrq9NRGJyYhWo32WJKHU2kiwnL",
  "key18": "3Y8gcHHt9B9f6P1GgYVegdrJr7vH14bKAkPMbrzKaHUjmubMhRhKozDqsmkhsNYuUnjJsVZ6BnbekoFkkAbYTQdJ",
  "key19": "4akPdPj6NoNqy3iz5mLJj2aznF3Cn9kNXNP6ZEE9MJLoTFDNQsx4HYcVJfKJQ4VAPLvMyuhPm98kK5QB8yduCxBg",
  "key20": "4sshDLvuGKWhTUhukrnaVnhtoupTnyfZriNMJ5ZbmFFhBkNASTFd63fpfPVtRhiscmjgQvbxk94fcSnw7iRUbnXo",
  "key21": "5qEfZxiHC9xTyUw8axwiLFhYs7NCZ24R7Y2DoibngUWqBVXx63HbnF2yvxZnXH96dV5pEwNSE2C1TdMfeydjwxHJ",
  "key22": "56ieThJ9hKG8i5i8GX4R1LfocU3exXCUFcZG4eku2wHu6v3SSVmULggDDzLCu91f9Vjt3myzQSa3sTVDT3fxVseS",
  "key23": "42rRy6Jt5RE1Tnpi1To2JtqxVRTD4agQN6zn8wCUPUeYxrcBbcULadQEua1C87xkXuqTLiCLvS5doJQbWqfcApts",
  "key24": "3EXfHh2NqgPE7yAnCGArMTQcVrr5WZrBSKedF3TAAv17EtkMfCtudpy2mjjjmk6qJWeDXYpdtRpWct3p4Y55sncd",
  "key25": "3YMRkeY5c626CpDsCGe9bBuMedw9TEpzd4q2p1VA3uyPiNw3qMaxpfwnWgcD6LQdfWAWoLUZw77YgtLPzF7V76FK",
  "key26": "3Qer3gpArKVxvSm73hJuEHMDpr5TrkRgYrdsB112bmweKiYDYTXwDJRgtbN7VFADAVGZJqm1kdVZRu7g8npvH9nD",
  "key27": "3Apzqor2HSsxkEZo164BBFqdyyLtNS4DUbmq5TFQwqf48KWjUGXWQGxKowaQuTdma6DVcwFHEaYUZ2ibErEZfRiP",
  "key28": "EMMbDPJNX5BAqjRvymVXiHW5miMK89ZSDiG6Ef7Bwr31fFoEAiEKSvfAkCvT3hrTEUt3hfFQJVfeszV7J88kTEY",
  "key29": "rnuXoxUkbScGjpo8JMo3rf3NuLi4BEe24z8fJrcACzHiSjAHmDxZJLPYtuzP5tfp2HKXAicG5qysZ6ZXfhSYB94",
  "key30": "35478A1mdkzMYZLcNYF8f7meHrHT2mxfSNj5FTwsPbEJquviBP46ciLW7RSWFjp6GAbgQxLAAUFTpE2K7rcyxEDq",
  "key31": "4JF4uApSoxEe9n6ECabm1WETXHHe16E4CA27J2sQd76da156iW42k8Aoeyrj2pXqDY1kkvyj5m1v2xguW4iJSwFv",
  "key32": "osrvAgPZREHYSGhMohqDGsMucEnPFVtTQuhPXiGe1TXfNDGFJGzvdGKxri9HLPJppfHaDQMVKTWZTcD9QhXAReP",
  "key33": "52xVwRE56yZvD8kzQjws1dcFoAbkZSAqfjs463M6EgQryUEmmRPLEaZyJiJki3PaEhvUMHjwuukoeE7ShRYvetLn",
  "key34": "53wUBE1Z4Cak35VrgX4UfYS9cVdpNJf1nDhRXUZYQ4ycUckB1zkCZ3vjKJFR5q63968c9tbzNsSFAsSgvsdoMxb",
  "key35": "3fuQdTub1MWrBsXqMza8p6eoCzdjY2m2bP5g9kaeVjVnW7f1hJzwySyKRUs4MNVuqcDePyxumeMqRhGVT1AkoSsd",
  "key36": "5Qkz3NjZ39gYXX9oxso9qeKn9uoct34hNTQErVf82NMT4Sy5oijH4D5Qw3icm3q1i6NNJbkBCChiJj2xuizpQuVQ",
  "key37": "2qjFXs11EGaLVJkAR6rNEGPyoDJBX18KQBND17urTpanzfffgUJd6aobvLCyMSNTnwcwatbhygtoyTznD8njrSyV",
  "key38": "XMy8r1NNcTEqv5Xszyb3Pvj4cgWRsaQCQPa8tLYmyLuWMkNxrHEKnyfnx7s6CaDSZ6qPsL5p7s7gJbECLfkPe4x",
  "key39": "3fWjEpZnom3a1Pb4YANy9hd9REdBwGpH6RkJ9qxvogzwCFjQkhSw5Kk1auCmoweGgDV1ryw7A7iPBchdMVZ4c2rB",
  "key40": "452RJJDUck3oxBinugYXWHXeUevvodCKbZ3KN2sHKT3x7QL23p4CYZ9FVJUsBhW71G8kFQkSDDEkfX8Dj39fszQU",
  "key41": "4bUbEewxiJvAmQ75YkuZxupT7uSV7bHhWLhayJs5bCYUK77P6wNNaBZDzAYNLemufHSmXNsDUqWoWvJ9kRmuoqMx",
  "key42": "5v9ZkE4Pt5WqVES2rAeLMcSv9AavK1DGeXd8AAY8yPEqBS4iz3fM7CzMUa7RcMEuF2LsYq2PdLNmFt3ih8oRBMwz",
  "key43": "4NGTt8cSLH4sQBpNTnm3Jc6rn84sUzCVkeczu9t8XzwNSXbHHoGbUjXnw6FVKwkcf1BE8q31LQCCCuZD3xRkJNiD",
  "key44": "2HeWwaEBGg9M6rLDdphKtELpCu9tY4FEEmZyFLWHG7YRvdgsiW19bRGccE7uuQP1uosd3zebqSW1DTVKVj71o3dj"
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
