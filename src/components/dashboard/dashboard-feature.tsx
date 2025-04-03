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
    "4ZCVkgqNMkVMjU2ccVT8imYYnQ56nueYfeG83j1jm6fgQr4eEZJpYLxFfhjmPJY7zrZKputa9uh61Fpe1mZQcjR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zmLfi4fCehmMyHNG7Ac4uU7DmhzPTW8PBSxyoXQdcznY1SEzR9zzwbUTWXh8gNQhwbqaU39qi1vX2RZEATEhMY3",
  "key1": "57r6zL9KHrrpev7PsDriD8H2euS6h5sZqFAxZj2iowobUyfVWNNAZ3vBmb4zZqGvh5dVujvkVZs5ApdWQgER3BS5",
  "key2": "AcP1KQGNpajuwrM9cvnn2CVG5UD5Y4jG7mDAhBKRXvsQYNdFv4xFKB6w8JA47QVb2CheS1i1yfbXogFKQgSN9jk",
  "key3": "2vB5rHWkpxT6SEfVVTcNs9dbpjVASiWfrFxdEzjdsowtrm2JKe648VpHQ7gJ8ArNPGoXZjXvRUaW4FHGAurhMYyh",
  "key4": "2XQT9ujdv1azYThFhb9mDf4tSeDeTnkqvSkApXmpvxjTTUPDgQMwSSBiGoHQn9N77Jo9mDXgUxojiikDRzQKrnM3",
  "key5": "4C3UgicdeXnvbw6AkN5gKHTgSHnroWzy6NFEAX6rCGnLhhK8gvoCKpjtY65vQ1kvQihGG96j6fkQwe4YC5nmdJ1a",
  "key6": "5NxJqBm6phKNp3pj8TXTxmyg1CmAkvQYVnTDmAkdzqPRvdzUp1Q59QEGonajh3uu1edGhj3s1idmP9cpPbaqYweJ",
  "key7": "4PfeDbQkTSpGdXrQCJgsKUYm9TCPQ7TVntFLRnXipMmw9dAgzL9nDSwQ5aw7F8ejFjPqKhjp3rprtnFhEnKKnUVW",
  "key8": "4hape21BUsSK94S5D2HVWY7htQHgdW3gg6fboYVqvMMesb3xYpxg6sMKM72C5vuDKzX36TCSCY6V4ufkszb97btA",
  "key9": "5fPyDEkUVNKQut7TG88dyxZ2pCWGxV2btNj46zU9HmXgvSeEyML8BXYHiDm9Fu6VhJzDs5JVHQtV76aCXiPjEiso",
  "key10": "2M2B529Rsa3XjoXWgyzUE27sbbqorT269E8USY52ABAqpB35QU6wUqu4bY4fPHHprd2QHyzcqGkSoMSWartzyK9Q",
  "key11": "2FygokJcXHWmnv99Z5mAD7pYPuBvHYhmrz2PfG7P9wNPpuBu2qh1NTrqEumLhS9ARRaotAPfH77VZYUXPPim3vFd",
  "key12": "3aSct6twU4v4bFeuKLE7dPtH5C8qdHfuZLuVXXqNsqw9Cc3MFTQWBJyoP7inBy5ma98hyaNy9HrSD4hTpEgu34co",
  "key13": "CMpEyPegMnoa1dQge8RarKXYfwqqAMgqnLVBjDxmRQp8ypQLumD8xgPbchqyfdDijNGULH7W79g93JqG6PwuVeu",
  "key14": "3WSUem7hZZGNwB4Cf3hHSVRjPTvrPSQsVTBAy444L8Fc4UryaAYGY4aPZfEiKJ6z5N2EL1Rg6kSVRL4YEXgAoWqj",
  "key15": "5RJU1VK9pG7LQkr8mwZJ8VhYaiGxx3WC4FB9nW9MCVkVFDwaJvcWioHvopVtHkPA7oFGdNRmqvbLv9oSApHpmqGK",
  "key16": "25rcV2cuf8wXTqdsybSJqSV7vtK4J8rs3Ld5RmMSvoAU5mVdrRh3KKjFzNay3BD1S4h4TBQe731V5H6Bp75oGotC",
  "key17": "3psNQwy9w5KQDbbouLZj1b1pNkTKPUgbYERR3SgaVz6jASCAfiAFue4Q1kohKYykczzgWk1qWb8G245KVMmpYhFL",
  "key18": "4Dzepn7EpPWo5e2N1VeHP7mF73hayyMuhFVDQU6nUP1nnX6poMAuHy2sYmKuW4dZt9ZHr1m9AKeSZy8GVwPRZCSo",
  "key19": "2dSqU1XfYR43ETd6wb3i894SozsWmy2iDtyrFQ3kF6Nsb4gyBsQ53SxyQ3U3JZtXBMaLpAaxCZBuwmSeZpfxRy3z",
  "key20": "TDgKmeow2H6JuEvTxqn3Aqrn9mmnzaV8npZ5NoYjByQ2yCaJJcGtyhhHukwTVC8Cz7yXTLbj6VrrC4oRPxiUixw",
  "key21": "gKaTAfw4AWQjYkosAD1yvP7y6FnqzdqHrj23YZGjWtxXqnx893WjsgEuqP5f2UwKqnsAax85dTNfna5tj6HLU5a",
  "key22": "qQaRLeEt7ZHdrB955Kq8r3EdPdbeT5Vy7LS8i7YEoXdFW2PSiMEwmhLaufgLhcNTKJLmJkJMfdCadJHyo8MU5MN",
  "key23": "5NzoNGrnYBahifQ4SnPaEA3pTRYo6NW9HbUA8QaFeYAfFW6TswjK24Rb1b1LC3azCHhS55CzBcvoi7ci7MYAZog5",
  "key24": "4ZcgJUEe4LcyqPS1zRjmV2hbWZUZ7zPdc5ioagKsB6dh2NUKHuF4mEV2nTFHBpMD9zskPX6T1TH65tMK46yhTWi5",
  "key25": "5AAGYpgQgh7nypyqiLAtcfdhs2RbuoLPVHPu3nHDRy7ZgrxWE8yTeiHG2eSXKPTbQbkoBCStCPz3jeJEiDmybCAd",
  "key26": "xtoqQNvTn73rf7fnMBpZKS8KJLyQ4YsoUyY5Vgv3SQ18i8bsh46tGbMt6Do3BBE7aGptVkxokZX27HbM6P8q8NA",
  "key27": "VSu9TVxJrDfF1zU7AWvvEZVA1NFJVWDfqC6feqBsaQNyNxWezmsu6ooADoJ1qp8So83yKR4m2pk4znnKA6Q5wzT",
  "key28": "5uURYCiwHcaQisBJMbiDvGmvfA5uxkr5D2VndpFS54tF8CpzuCUmHp2QWxGkCQYpS53uiys8Q55MD2eT5z6Q6x1x",
  "key29": "2JCu8LDc4Qe1i7ZHGBodx4asAQ6L1nC8rJsAVaXxkHuPe9g8B23WeFR6SrceBc1DWy2PaqJTsq7DYVLjdLeN4UrX",
  "key30": "4aaFDJZ6Rg3HnJSyd5DsDV2HZ5XhYx2FBmMYKyBJFJZKVbQFDrzVkpA2HiK8cs7u19B5VWTdsX5Yiq267feQZQt",
  "key31": "2ru1AfPUr8juWFy1D64UQG8Sb7twj3ztoGzCtfrgjRQYgUA1NJAJZH58F24e12U7b9vxBmLtCG1migAeAr2swvjs",
  "key32": "4Nvjoc9aGEBK8Q7sxEo39umXpihuC1MPYDQofdPYUfenbDXnEBvaoWqNNJP9ufyzy1Q4QxcCtPPJbNP2b1RhoVVe",
  "key33": "3tt2MiH2j1CxEfpTiki1gqhx1mREfD1DBttN2eNsXv2FWWT3KJ7VazALhSJCXvxvkJfLZ4pAG3bKfc3thq4tEnZG",
  "key34": "3s66jnfsqFGxotqM2sz2YLb9GEPEsENcmDPB5wnTTboCvzFnCxcixkoFHDboJKkjvYjFVPBvpGSgkNPHpKJy3g5w",
  "key35": "3qmM9XEdRQVbBiYS5vKiojwKaeNRZ1cqBij7Y4DDTAmKi1uNQwNUSb6C8j7xL9avNS74ijo6VZHAJhSdLgYfqk2M",
  "key36": "5qjW1DdkH4SkYEqHF4PxsTXwCZoqMWXzgATAynXQk6VjRXPjxt9ZLzYqPQWkJd6ZPU5kRNcFaTvZcH4kHQjX9JEg",
  "key37": "5Tc1EsEw3zSctu4Lo9ZwY9mTJGhRFXa2iTaujdmnKHnDDHzbTjCZUpsaP4vLywZSKf7E7E6W3BPwyT3MW1aSBkAR",
  "key38": "55vrTTXBhV47dNfg84ro8kqfo6WVxP2XJH9cnB4uqdU1jDTnrjFXaL7EM9M5zrPvaZg9FnX3TMSqdQ5DnQP7Ciqb",
  "key39": "3rDtvR4DkKNYfsYc3RfJKUFRdKD4awPptB2dT8oERDQThoJwU75hexDoBrYEHzewyDhRFeHjfuVgocn43uc2dbHb",
  "key40": "stYNMP53QzhwxabbhF7r4uRupZTRmUvfza8BNEpprvEYuiLAHbjSSnkcY2FLQ6yNGuSXYLoGzE5QiWB4RjXpQje",
  "key41": "3R8yez3qA5BzMXnoDGK6bfVqi85vpg4obedGDhtzPhksRjj3jCBbFMxCZibXJ2zbm4n71t1AUV3gbUHfXoHaMXqY",
  "key42": "2k8UeBsnzV9Eu1b8CkkTncQ818JSosFnL87kfWYg6XabJbsN7R6RAmCHiBMbBWNMxFGjTRovLJbe7icMN2BY6AGM",
  "key43": "49Kz34nXf3hz5FesuuRuBcU2gtXjv9fpr1iR4Sa5qusWbFXua7kkhygBM3ii9nmb8bRT8DoFYG7T3ywcTz8ko6iQ",
  "key44": "5WU3adb6VCsj8zGm3U8FksBZXpa56uAscax9CgYiSDgvxRecGfco3yuZTnCydcL9vctKPH6kA4PcpxnbEPmd6Awn",
  "key45": "3KrvKmtDDYGLqWsKMWFPLjonKd6QdvbzHVH4zRZkzQpzzNAEUtNpotKkTF8q92MT4jrGhEgaHWHQmFq2RfsEzfB",
  "key46": "2JM44uVBC8Wp1SQ3P4o5TEBGG64d8DpV8XrPdk47UL5YZkrGaBfuuYRq1J3RqsKSTa3oaC8myNHcDKe2rzv3ZscV",
  "key47": "3auV6RdBfdsVjdd1qiB6oQEqLUXf8j2DL73XvNx6xxL6bpBni29rDQ7L14LKkLvAuAwy71GPGUQB45HUf9CvT21P",
  "key48": "5yddAYjw3dw9bn5k8gy3RNF7PBTe7RAbAbbajaZZzRNwyX8oG4dza4ku75xjQFGWiR85Qz2MBCJiqFhxeBVU6CDJ"
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
