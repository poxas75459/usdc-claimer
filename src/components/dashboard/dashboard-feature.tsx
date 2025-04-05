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
    "oyadAxy3UXW5scsSZyZ8xjfi78LgxwG5zfVxgJvPo673PUmeyshFuRoQRvj2NZEaVXaLoKkKPzyHvkqHXEqhr9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ToQLxFzEMBdZdF97Ff7gwqhjjz8foEJuV1oCGVBaJjVaWm178Hv6ALQQvF6ZfQu8XBcVjon4Vu3uRKt2kGa5vbb",
  "key1": "21FHiMNgqc8VhX11hYmpE2n1G9ikXrSwjhHZubMbwBAJRak3vJoXM1eKGVxKceCfE1BBuqQXBhZ7RG2BLQHjJruE",
  "key2": "4zbkCMw1nDcYfpFp1aPDM3TcjZxFsi3tr5D59pJiaizQi54xeHd8Sq1xhHQrSdDk9Hxsai6YsM32hYA8U7rZS5vG",
  "key3": "3EirVZGLQPfCE6ZMYwmQ3UTYPouS9TSi9nvQKAJvfjMvo9tay5PJyDH6dWfNMBsScBybihkUGqUCWUmzPZnd3Q3s",
  "key4": "2JFcg5euqSNEAfTy7vyPr8c8qKMszouUuZaMWKFMVxcCLdg91D23aAVxLWQ2V9dU3pcS9QZ3gUE7Yxq3Kdsejavw",
  "key5": "5ioBgxYZeMvtZE5VxgSDwcy9zfrQDsC3G15apE8Jvn7eSPfFpeuzBV7AQj7FnY3v9MuG5GLuHnpuiXqvrd5vtEMu",
  "key6": "4oZbRVP71sQMMhPMMekhwU2ezHPSDRisoR1mmgxddpfAvicfT2zKAGP1BPmAwFkgTH8SfrnmHhY8KU7iCUorP3DJ",
  "key7": "2SP6rgwaxbxaMixC6pGwBJfXg6weKBxQtNZHo1SjCdFeNVvQvfYvmmAPri6VxUiXeEDkJMLVZqQtxGrY9f1NjRE4",
  "key8": "4t6uvLVBNFAsgDUNCX6YbcWd6yCweiyRnuxsxuDFpMTgz2ueP1utd8bgdeEf6edHku2fuRCBbWBgv8qFpD6S2mtn",
  "key9": "4PTsDSdGyGXTLswFtXbosFybxFBcAYQ2YsGcn5xr1XcfAvsVPPUyxkHSNP2qhawt2ckET3fbbDNgr3hmLG9Xxt94",
  "key10": "3Sq48SCEQkJ8BpKxEHeL4UJ3dsm7mkKqHw4iNLqUf1q5DmzEGz3jEThzvap9jiaXzvK7tFcqigrWcfZQxahDkKA1",
  "key11": "4X9RXVpFzq1pb7JGsZbvBqysRbfiQAAD3PjPoAfzhmmfY5hNnwtkRJ6i6jnsG2mPXwfujhtS27ssgvu44DfGQBSJ",
  "key12": "446hTcEJd5wAeEDVgzyNGao2Mr6bBxbkNNpzV8a8up7yFqhipoJcX5uCLXBCf9XtqrKrd6bh4Hf4vHd9qmwJkQgH",
  "key13": "rKstb55yf1TPe22vn2Z7V6Pq6VuLT3ZtVF9XYYfwZv6FLhWex2dyBrtY3LCMQFnzDWFSCM8wAo4ktGB8z2P7pjc",
  "key14": "49i69b4w3m1ErQTbaLYHANmJiFWtP4LrqGCDeLiLckan1hE5o9VK8KS5Zbsr1hUzdbGHNgG1hhNHFDSA4m5rbXBp",
  "key15": "3gbmYNhaVXk5cm2nWHiJPVKUQC74mS21iR2UJF6XV3R25X5GQkuzRCHfHpL1qsTxzhnsa1kVru8Hexdj9BLWjYmv",
  "key16": "2iHrt1C3YxzQSTmesWC3durwU9NjArJqToSphHtYNWzwt69Ec9APD7wFc29KAU7rsJ9XyMHbDeJHLEqK8BmFDa5a",
  "key17": "Mij34GST6HRbNWgrAptdAbeDhbeRFJjYTSwpxhMmHumKEAUqmSi5PdSaPGz59xLRXGeZ1WVJ4N64zvC7DG1XLYZ",
  "key18": "5XxTZnni2t5gCThod5qe7PSkqoFdhfJadzNBYJ1CKqSHXyaffAUFEub7NQutRvFB8ThUYK7qZPFiAbynKpzp35Pr",
  "key19": "3VE28NDjex5nt7X8YtjPchT41vtB56xWpsnHaqxwUBM8BE3YSfhx8fhnpFDscfYw9fbPpzzLESi4CSRdZNWMQVcj",
  "key20": "jp6S77FCFHzfgHvU5X7u2rtinWXRoLvS1NX334LjGiKHDDyNoJbmPaqewnYSgvqkrha2ztj7cHaLAhxfDqqXXZA",
  "key21": "59VsoQTW32rMoY2Tm95UcSAXGrtfsZpizMQ6Ci99wttg7eQNn2U4Fgv8pFFfrtyQufuLc5713nVSb2kS4AM2F94b",
  "key22": "4REHaBLqV8bDBk872SVBDtHKxVFHtGoQM3xMdCUfY8SCM876RMNKCAFB88UefUPgzRbpF1GLjqNQP9yt4DFedhmq",
  "key23": "4KgXS9Mvy7vcEKysDq4hGiwbMkEtj3A5haFvaCYrZcvriZyfpV13P7y3c6abcXFb3dReperR4FhheSB5uV93eGKf",
  "key24": "4tpCtc8shS3G6qf5qJDowcDQ1uJ1hrW5TYgg4mRKAbVukmLwpk33sYEVprTEiaby2eHTnenNBqpaBe6aR888bk4t",
  "key25": "r1wcG7EYzvdwy37cSU98TLCUgigRZ8DTecSM14RuR7rtzB5W5CvBWmu6GLTe4p3Y2gcftEwtAr9J4jDEBugi76L",
  "key26": "3ouoZirznWCgAM68YYzkgy1TsbMbEYs1zkFnA7xuCAoJjft9oeeSN7eUCq17AtGwH1tmRzMdk8ejpFxMJ6dTv4CE",
  "key27": "2c4E7NLJPqVL39h6sdQKiouoXRW1dAaVBCuD57GRzfcZRkEXCwzooQACZE2Skx5EkhgeFQ9Z1U6UzCGxDLnkSN2c",
  "key28": "Tgyw7br4tcZgcdaam2ZcSFQFEJM1Rh41kexW5bxJ9zysyvJNW8m83bSaxGZjaeBB5cKUNFTyNCSqfSHL5GzF77z",
  "key29": "4ubPaWnLLbsJbR9UwSUFdtY4nyp2KeEi8cA7tgLcxvSQhReSuvQAsU4Ft33zmsCY5FWAWWZbxEVCPoHQBzAtYvTy",
  "key30": "K3ZUMSbz1E1PHof7HxydRmtCv1o4EoZAQCTSdpWAv2LPqoGWYGR6xu7ZTcGuvyeha5NokPeJUBaepKvdW4c4RdR",
  "key31": "3SF1eGgKMFJ6fAwx3wJFo3SdL7Vg2gV2C3Bu3dCddbooq28HhuRm4HYBj2P3oVt8L3FcGprYbaKAyvoiQfsJ2tZJ",
  "key32": "4SARQdCWRLLLM9RG3ULTzcYTBHMkHt7P8Zq4cBjGh9uiMpNQBdDS5XDq49pm7gTz1cQxpD1jm2HTCnDbZ9vTnqnR",
  "key33": "62shoAPEBeELqyZkSaP27qtKq2fSUszB9t3P4JJdsN4Z7W9oGP5ko4QY87gCBBBypAPYnr5J2oidgbkt2TLCJU7a",
  "key34": "3nxbzupPVPTma1nvnpKZTmFNv7gUVSxSSroReEpSBzM5vwbVzbxZhw3FKwvPz7kwsRKXKR26YmzmdatCX348GRx3",
  "key35": "4kgaZA6fq74UvoMcdH5s2a8Gzu7uSn2Q7qpuQTEVyq2CVb8N47kEsdFZGheVx4Gqjbxkok57ehRDKVXHsnVjB7Qt",
  "key36": "BtMNDtqwUZveKj3zoPXPu5WZzeYwAhXrmYNXFWuF9KQQVi8zfedakhxapdVkEhxj7oPCxWkh5M9M8LuLkC7vFxk",
  "key37": "2fkWv6iUJ7oZqkxy4horwME83Mb59Fbb7jT3gz4iSx58DKuVgmBxDPgWTk9Rf3CiphswaQuwHDMvXSSQH4zYdoZh"
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
