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
    "kk6NRXYF8Hd27Ykr32Jfgt6zqa8hj73PzMryFcpoySUkhQmbf3hRvzUj5ysCDH3sWwivrKM7JdWBhr46JsPo3vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DSSP9vbeohYXcrAo7UdvvhRfBdfvxx7HzA782kNZQg7PA84BxaBesHYXR7KKGgT3EG1UpvxnapQDQbh8uginXnL",
  "key1": "3bhYgz8uNVPWrz6mrtmcYaYpAAaXGH16fYnhfL3Jcc1htR1JctbDY6jMUnzMbxBXodGiQkpKqhu6BPhrdRBTxybe",
  "key2": "3zhTkssCzby1ijcQtc97G24di87uP4Jq9sRwi6wMcBAC4CgL5aCatrCnWxFmeAcWUFdtysF58NjshfkmUJzZU2kr",
  "key3": "4sGpbamMMvWzPcJ1wVz24aMaPKTwrRf5SjkRttrYax2ad7zZ8TSv4XYWBCBDHPV2MYiuSPJxTV71KJQRzPqHASEj",
  "key4": "3Z7fnTuaBnSBbHikdu2vsgTtbuthcbHYxongqrDxd9r7CMMvs41nGPs6h981j3e2YFtREifyUyGtuhD18HU2hS7B",
  "key5": "2ZnEzX9Gv4iSjVpNxH5m8uCpJyPpi7whbYbKQavfbmarhwMgYsLCpWmVUJESRcy2v1UnDzSDmiF9TuR4JQjMKwWa",
  "key6": "63eycdHkDjECoZt8HJmaWMNWXJRytq1RbqeeNYhpNEReRyFq4qyFWLaM8fbqJZxA8RAy3gLQtFNZfSKaBudWnx7w",
  "key7": "3pTaDPCm4pRzRNNNNqY2sATZxHrVvF2KMKq9dtNCY1Q26HnEUhDKfh1siijZe3VqVh2jYzxy6fJHN5cELRcdDiYe",
  "key8": "4q3BpwVfgtxMFnigaqHx2s3X7jddEqDuNLfkL7fEDzcACHhPY9aCZ9xJjDYwEi3DM5F1YY6LVt6nDnu3hm67vmK5",
  "key9": "PfLUhecBD6ZKU65Fy2vZuxXiVDtmB12dAD7HYtBkUbXKF9y2PFp7f8hv98WR3yC28zCwg9EfWCdGCDKeRAEE31k",
  "key10": "4aHRAPEmevMLMC2skWxRTsEY5SpLWJAKiEcFxxgNeGqwso4jSyHQpEHfKywkryPA4tnn7nGdojV1fE9HC6d1YA2u",
  "key11": "okGAsn6NJF8a7S8J4MSrTBt5SudyjSvX1niDioLmE6iaYNG5Q7y49RdvZ7gQcUJpMP8hSTTGDBgXCkdNd9LDbvh",
  "key12": "5YgJxCjLbmWDcPWKtSCSZbs126z9GaprGFUPieEPY2Cvj5xHLBcNHWSb5xrpUuQfuGSW7q6EjnAPSxUma4kHo59X",
  "key13": "2jHFh6PnxwimjEPzhAJWDHTwB1j447rn3b3Vw8LL1Kuz1betuKNiyP5sXzD2kNEjp1abL438tPHe28SdpjeBg5Dz",
  "key14": "3cei13maovFUjcJ2PDN5BkBxGz2R5E86V3knDea9pSh5jNkpGtsPHYuPmTR6G4L89kxoQkMmh8FzC7u5mwmLMfTh",
  "key15": "5kf7KX27Mcf22cDcP12KN8gKU97wUBXW3eCYHfx8eM6NsYfSyM4xJXK7BVpuRGXr4j67BgLMDoAqGdt66jNiMiB4",
  "key16": "4aSUZnriJAjoBbM4gx5FGDb6ViYjR7XBqFkKcHbzk8aUBDRZzAAmQNZmr2CYPqwguumZxgsGbtK32iyqUUt4vsiB",
  "key17": "4msRZZM3hEthsyks22dFervMF8LvtAGNhVsWBV2U7aBNMEFVmhfGGtZRZvnMGPZMcibHQA3KrsBWMy5D8rUrbR3y",
  "key18": "4tFh6dXgMH7FWG72oSAqtrpEHfT77YAVrkZuxRXWuZQHzJrTTJy4sVtDgHhGwyvC9SrPXEy2Wya2RRTfWc6KZX9p",
  "key19": "5B7tp1CeZ1v7uGhXdniMpdvUEQxQhT7s7jYAA9hibRrA374P5EsCtW5ytvpoW7yZoZmujpaiYC4ba6uSC3X8BRg2",
  "key20": "6zzWB33pyaQ2pyD7gPNi7bdFv8wRjGkpewfazqkvehj5USPnmcQe3fKdy63cNQ4Pn1hxgzduAHBvChXkpcXjJ8k",
  "key21": "42qCNkXcd8FqoEU4TetnNSRBFeYVcYL6okvbLGXcfvAa6mcA7zsuZHpiCsyiGzp58X9v5uSW4HiFxsrqZkHmY1uf",
  "key22": "5EhihyHdkVYpdb1Dh25SnAYYMQXAnie5AYL5y3gTqktxZ1r2hJ2aeDGRWwrLM5CzrxVJDyDjhU94EuFKrjkmkpL1",
  "key23": "5PQu1ZhmkdwkBoRMYL84uhgYKihp3UY5A3ng1i5MG9YAdK6E9Fsj4LuxqjcB5yjKJ1w8cH6S2jDazQiSaJS7G2Vo",
  "key24": "4ayQ6xkusqm8b2FXuiDvi7rCgQmKTAL3YAvNM6RghPb4tEjQKLRDZmbZaZTpUEc3fKzqNmti6h5od3FU82Hm9TbK",
  "key25": "YTv1iMqBLAwdyEvRfirNtLGfFkScWBZvRZ6xgtYxeqwK4xb1M1bokH9qrWxy6orxxHEw7Fce54xnvsH3er8UL8d",
  "key26": "5gFNS6uKyPonw1q2UJu8fphJad8jZdVVj5dom8FbWdwdNXWC3nHLTKrQZtyBuyzgcMzAxbfkk6uvMknBvKRUfxNE",
  "key27": "5wFvuyMd4DUk7PSCrtmLfK4eByXwv6UoXVgnjUeYV4TefmK2M7Kv8Hpeft2eYTAAnwWujETZHDj1yMfvpxmCTK2X",
  "key28": "C81chdVUxpk3qw2DRq388vaPhrg7mip63bxPmDeEZCSyhLi9QDi3CCRyxiV9b7dy2SPr9RBdHvfVaj6nMHT7JiM",
  "key29": "22Fox6zwpXcoJnbBys2bC83emZMqthXSQ9TokDWMRrNVvW976kbNQ5MpkgCq23i7C2XPVRsxZV6EzQei3wjANzbe",
  "key30": "2X8m2ZWJXRBBb4RMCdPaS6FCxmx9dHhiKRs3PzrM5yxuHnxcwnAqjZnJwNx35Qki1taEfjKs1NYmma9kmpD2BSR1",
  "key31": "nJoEbGa9gCCykgBT4MdTE4zpsVrW5G5MkYL97BEUrdGX1su4WDDQY6MnbPoisVaU98fmnJskyaMJ3uf7WToqcTv",
  "key32": "2cnN3jbm1AbpDZH46PaR3UG3uN2XUwmVYNDBAy5D8jszQZV8SMh8dCGyDcwiVEa68jL6hctpE2FVfHSLzvPEy31D",
  "key33": "5tgSt6WxV8JoR3HsbqMPWabKDNqX1QbowznK3QY6kUi1U1n2rKMGGqnd1tdnuZB442kkhbBPxyURciNGCMx9sxX7",
  "key34": "2XZXCRT7o8NoryBzgcSPQH1Y8XwDnGSqjnxuNt6p8TbEgwxUxCeHU9wSdLiVB983Y9uo5FYwpZax3gStrdbaBniv",
  "key35": "61q8wYFK5Mv454Xj5EUJUMzApxQqySEpiVLjtTaXb3iWypFWKKNdC8ork5iwfZWa967S3cxgmHqaERwQhEFTza6y",
  "key36": "4L88BaHHLNrvCDP7p3JBPCGLfgagyfDt6LnHXxjCtLbTFUEHkJE7kxNCYawrjLi884vPeCCeGJWjxuJiUusBmqkt",
  "key37": "3w5ujRhEPumrLPCKH7y2Hpf9hYB6wASDrXdMfjcF7me7gWCQSFoXDyXy72S3EbUC9hcpuQjAGH3s221xFrthzanG",
  "key38": "56C7m7Lv7wSiQUQiTd9u8FZR7H6F5xpCb9KdNgPrfzxC4q5P8gKvkMhaSh3ZMoFMBUJi51a19D3myY2YeCWnRJce",
  "key39": "TjXJZs2p8CMoL83zx9BRp4LmBe5jUfEFnZ9Kqc8PUWyA8Ngrt9XkVKYdiwXzgHA1CoU5NpDAzSboqHMcU47oEMC",
  "key40": "u1XGf2aTFdUJMg4vPyZcp8V4tFG7J1Q3mi4eCAY8BMt1AyswiyNvB38wj3edo1GnSv7EECG7NxU4yeP6xQF3Pdv",
  "key41": "3sH5XaAdS5F6rfV52DrkgEXdze4JaNhZTQwhMyLr3eFy3wNJr83P2NuYpQdiBN2vAJt7F5spmG2B9AXSKidWRQCP",
  "key42": "2V39VMChoJwYoJeMQCDFNGbWEWYQZs8DW5V4SXiuFjMd57VqqnQqiTJcuG1nzesoghrJQ81pV7tyAhetYD7bhEag",
  "key43": "64mVG1nQm2Qyn2xKmywdmDXYQDugKeEPUAf9dKRLT1TuohPiaJmQcRCZVmq3zPVRd5ZUS1oavJ4BK7J8mJDJwMfo",
  "key44": "649J7m3GNnWcPso15GKszVsJ11kEz6La4W5kC72eoEcUbi1VUmRXL7s6MM6iNWvDsZemL9oXhKK9GdiqhtNrJTgF",
  "key45": "43QqxdizpPqHMFaMggZPpQjYenxzJRJRZ1JunZoomfbRRFjRsknJoeo6e2BCnMWCpTaWz3VN3FvDB6mQCdxoDHTy"
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
