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
    "4sas9VzDrLqdvSCk3oqH5SyMHB4G7oboH7p8J4gEwJvPZFHJVmQzYssnA2FocC6PYREXihYcmAuxd9ogVPxB1BE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zCUDY9j3RQsETgtmFejJS7JtbmiULRJFAa2sJfUg8WSJWEFZrVd11fgHTL6gyNEUeE7zHGBiCc5341zVoceH99A",
  "key1": "5dwJ6e9gyAeXPTvDtFv7f1J3TbZx9KsUXfo6ixFa1WHcHD8AxAghP6qdpkEgFX6QTR29sRbqh9UcJsQ4xm9znYT9",
  "key2": "5uJtQGVzHXiwkhhSbx11SWhAaPYrb5NnXjDupqWkrHPiF4dhnfg6pYnSouHss1cBKF9SK377WPdZuq6mRfjfTRTX",
  "key3": "3TN5Vb9CvikvAGfXT1nyrtd3Q5TdiazRc3TppRNS3YeKD2mp4Zeds5iuUKhUK7RZv4Qu95krjGRtQ9n18bg251qX",
  "key4": "5FwE7FYMF2VvwsBgdkmLzYaU73WhGhPxPvhVspS3D5cJoxNep72JGfDDUpwRoWp5im1u7RnmSYTEmesjMQQnS25K",
  "key5": "55eypAN3bpSa5Z4aU8p91uB2zLU2X5XdoRsdz6Sq1nBaFjcLHMNM6tQnkp4dKCVtEdh3E4fnacnto8KnTrR3tF8h",
  "key6": "3cDSWRHNwWouPME6H5x8wGRYbQwhZnw9MvezpepXbiAmsa9jmpi2ssv9EH8PsKfPeitwBXAEiLH46jd13Pqqo8L",
  "key7": "jaVVBvjXT5HJp3F2Ben891aDuLwdvr49TmG2bm8kqeD4gAyenELvmC1N5ekrCtkbrsNB3yXigm31n3ioDD9aZ5s",
  "key8": "2Jvoy7ajEG9Fbci6e7RhZqp239q518rjhu3mfGrzEF3SC8Q3LPGx5QVKDXC69Ks87cKj3GNTWTMTgp2jCULTjbN",
  "key9": "3KTtXBrsfSPLAULKpoHMdMjaRC9JYScMorrjoX5NNHWM7Axq8M1ubqNW3TFzu3djPqzTZKfNyWpVD9sCd1wH6BYH",
  "key10": "4wphWfyrrZd1fB92jArNfrdKZ4iMeREvFYxnGitNZzEajmRzSnA5GeYPw3SZrf1yiKrGBSFvVqtHF45UNGkYJ5tG",
  "key11": "2jiM2n3B6mq7kGGLavfr51md6Koz5Zqam3v77niekv7HATzi3PJL67jH7Fd2vgsjGc2rHr9Nvq4pQFdLHZ6ES1rR",
  "key12": "5kbj1BGcy2PgTVTdBch5mKqYTBYi9K1mwaRAhNsM3PUM7hZ7WScmSqJAX7K8Y7vspjvpdV2wjoMq9Z57vkBWToip",
  "key13": "5wEd8xyvZK7MGTw8BkxL8GvTFjjebZk43z3LmAZrcSGffg7vGgz42T8CQaArN84ktxYGJoezmnKKWVSzqkdR5d4w",
  "key14": "4XMBZwbSwL6U68BxGMHwXj2y59gTf8ie8KbAsJ6TnmbCkeE3bTdJtnbypcoCz7znJN1PpjvUQuLS9B35Vu4neWG1",
  "key15": "bPTHraBBu16ZarirKzEVxnw339BfP5sfPiTe64bVuNWE8FMyQfLR3XfqvCp4BWNwmuryn7Wt7AgSMJJa6KvkqDc",
  "key16": "4rKF94k8c2zE36yUuCMaeuPcxB3opwdChgvRuWtkMKNPTUaxQVg4jGVSF7r57w6LmJuRWan3TSE97mkmgZ67MjFw",
  "key17": "5ndJJi2fucAwfk6jixntJkPFSHRZ4KMwp25pmfRoMVpveYmFndVWWJANXJwoU2B4UXBVBKiDaAQpSm7iVZPTVbbb",
  "key18": "2pnywSh6jyVv9czhoaV7Nn8gnMQhYda5T4PTJwBv9xAmyjqm3UoGZ1mUcHCxZ3SzkFAj9Tfj6PSgHG6iD7s3MmHz",
  "key19": "5if8U4pLUu4Ns4vdg5xjSTqWqMRHqrnXQ1YyU9dWQT84NNqpTHVy1V5k48ZTh4iBdZT7jwxJo8cpv2s62KBY1UK6",
  "key20": "5sRWRi6Brn67CGUDAatJpALjt7J8a95xxcS9y6jYS9Fv5aqdffxctDqD61W7uoEDR3DirxuuZa4hcpmzoZ5JG6aR",
  "key21": "dtVVmtmGscDHhDqnPW3xgDLQgioa6zMPqFToNKiGZUDMM6o8NGjDbZ5h3QT5eaLUanxA8CKZNeXDadfU7qK9NtK",
  "key22": "4GZ3JtExhnButrwd82MuJKDYTnGV3rhMyqnCENcBJK553emdZw59TNWH3dXd8q2G68rjQtYNPXr2hXbRUVLuiXmC",
  "key23": "5BUtyosdXD1FTDVVm3e1cbB2J4JFv1coB1fuPqS8UfobUSdjP9dwPii2FXZQWwi42UDPH3e7TSnpEBaLq2v4x7bK",
  "key24": "7qJLpUAmn3Y6jq8oPu2hWuVUcnKByi2R7Ge3D79UcrxcFphn8bfLaJU9qx4SPqhZSyeQN3e27QAf64YAQzwTu7d",
  "key25": "5cpg1JLy5pJXLdBiVXJTxnP3kqoMjKiEeHLceMQig6MmEdzMszU6uCiYyXEC59nCS8p3qMxudFR6vgBS8JadAgKp",
  "key26": "3y9yu2xWdEEmFkhWiHR2XidSqUJ7C6Jr9ikKVihfCj2N2DPKVHXkMJG7y73k3sNs8tzvxsb1LjZVUeAQ6EfVgXwq",
  "key27": "4WeX1vsU68r1GTZeGNy8DDEJkxqq4AWUb8LAFooFnmchyjF7kFHNEms4LSDFD96Rxu6QuGR19W7KrWHDvv5XvkJM",
  "key28": "2MFVu4h7k8ptn5bXNRvJmkFLYnw86vocSUjTU23tJSdzwjQ3y6nAcKLAsLpe6uDUJiuNarVVTpzcyRpyh6v8fiK2",
  "key29": "4ar6M17G3EJNxxuCNVBvX7uZ58YWVy44tEpBdbQx9zvky9VXDB3sMLDqxxtedzHiWE6jZNjdBQaYxb75WTrmcN3B",
  "key30": "4Bt2CfhLF7o16ybLkLda1JCHigM9xjEm73fsMDWJNZYAQ58Ti6GfWUTLUcjseoKfjTHcZeXMnYiFA2DapdTH9uLv",
  "key31": "iMJZ3bY26RdseySwfzmHy3JCWYw6eBkJR2kBJajpMGVRDi9uZS32X8uWggRHgpm3KWbYc2X2YFyb2duQbrpzLV7",
  "key32": "23Rt7N52RnCSE1MShotmhnZnxYE5WcEs42jaCHQNXz3MvTNUXd1CVmNsKqoStGPYsLwrYGHA7mxn4ag5gkrZ2wYi",
  "key33": "2neakk6uG3hXPtxiQGgHdEriGDZ3nbaPHKBhQdCLoExyuHnwYwAGaAkcQyMAZ9RviY2YxozJps8hi2AGTmJ6LJTA",
  "key34": "2i93GEvdXj9zGy7MacL7aKTZaEkAMLihD9uYSJuxcWDjqCfu39W24iaknQpzrNSUjSw4Qm5SeFuLiLAczNA1CFnN",
  "key35": "3V6xSpz2sKQdF7piXbAPNEPaUsVKqiwqsQZBVBhp5pAjxoPpXZrgu86QocJujPHLUCs239xSodLJRUSaXbf16QtM",
  "key36": "57Dzi3NzU17YUF5jZu1i8viE443aZsLK7BDSKc4DQrEenoyL2dWF8CrwLASiUF3ng23d94D21upSMRocNdDKBkLb",
  "key37": "2yDU2J7ZF6gG3SiGPoqgEaEtm6bE9c5eswE8rxroYV7SSWocpen1HpwsAfRGKmoeeam7b3uTGGnnNZCPffZehnwh",
  "key38": "3rZDP3F441j36CwnBAEPAu8QWGYcgdWwEQvv6GwxdmcVQg92bm2RW5Q9R3Qnd4barTbGhgEBg2QcfaLVfD4B9R4G",
  "key39": "8acNjpYRL8qdKj3sf9bbf5z6tqnKruHZKjN78gVxRGhkYZ1YYGTMJP2yc9UnireKevRshhpoz8UnAqx4ESwTYXx",
  "key40": "4hFzj23fgQFYZSsHaeXmot2nCazUdEQmJ44EERmZ66vuWT1pxfHp7kfxDfCQK1zpXc3o3GaBX3V4D3UN4YVsQMQe",
  "key41": "Efskck7Wt9PJiEovi36zoR2FJrzUoXjLTNB7rUiwAm29ERtWi9kM8McaPBh62rseHMzNQDhGZpKMVGz9d5R75Kj",
  "key42": "2GYf6JzZeJttgTqvQqUr5FBmeNqpebGRKf99pHBaCXZKZb7sYrNjy1HmChW7zpdLjYmND6ABXqhtPiE3eazquVxr",
  "key43": "2v6Ngbjfjtz3W7JThjuJgLBw79SyhWGyYcSAd2Ltmj67ocz7xHweTHxgmTQB1ksxsgX5mdW9VBxkD66c2ih66mm1",
  "key44": "z7cdccKhmFqmSVoNobopRWNbHeLht87fyd92yWdyGuX9kYtZFCCGgTxRBym8XZZFFzwYNoceYV12LXpc44UViGW",
  "key45": "2bfNDYmhZ5WghcKM5v2wCykiyeZwMxev2qv29HzEvyzoCV7WE48kNyyJr2bwiZQnE2iARhoCHNLArwpATgKXaf38",
  "key46": "5g5tLqRtJgZ5euKoDGA8F4A5dtKq8KMXfUXeiiVznkfPYpZELGPMyQALk8BuX2mBMH3XSZxAfma2p5d5q1o3f2Rd",
  "key47": "4bkymtgzgk2Q8R778Z8XP3xB23WdeBzYbTkU2BGRBh5hkCDmDbsFtDJFfquyyQCbHH9YU3wsyLVEdkiFb2NyzPbk",
  "key48": "3cGLhYL91LZWZ6ijQ5K3ts1u1NuuGLC5vD3LkTu6YP5g5WTNerRsXhD25QdQsRRfdd1AyX8YyjKaQZBVL9a66z6A",
  "key49": "47TN3VRCfCFi85Rcgj8xTFt5zSUz3LCgxPeLtNbCTNPt7LeKxCz1c7qxQVcNQCmmSFEdFzQHLTA2Pp38k6YzXwLX"
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
