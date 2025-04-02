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
    "4rgsrtx1dEvjsm5pUCUomKQkShiQSK5FhiMTcux2gTEZvJkR9zRiDyemnqLJGjHnFsYZUCTscfnTNpRNuwxWKGC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DvdWtiBbP5nHGf2Bisis4QW4zoXYKf9BDDkZvdLBmLZogkXhvcxYSBtxyfymvwJtdM51XTmW5qFooZERVwiMKXm",
  "key1": "2P519vueMBLrw1Ttk51MnCmsruLDAvmwn2rPMR6QLKDLD5PJTYwumk7dLHHftA5KKrRVeqMxTGUuzMikjjkgjWbM",
  "key2": "j9AA7Gq5QeYkLnXGjE16znXhGAUBYE6ZmwVC98CHWeEh2Hq7JVmdUF5g8ecPczLUjzm2YssUZ7owdzENDJywnoE",
  "key3": "4gv2oMHw42vJBHghaozasT3Bi6N51sibE5TkdCk9NCZfz7wWcAK9NkYVqSJd7G6z7BxrALNwGorHry6rZA4U1ijC",
  "key4": "3SSZT5kdM2jLe9GyaoMFjXAp6Usx9RkzuoxPvRTEojW3B1pDtH5i3Uf8GkTNxTKya681L89tzMMvfUwm7NLYYqKB",
  "key5": "59Fb42EAu3PaJs1t8f7j7Hjx8mAXEEK4HFBUt7P1AXDuUsBhzoHmnBm5zs9c6QPR33ZnMKnXayDRtv9nxeDyt5Mk",
  "key6": "3zTgus1i2Aj7WwF2c3pLDPhsFyUv4nrV5YhQC4GUBVuvz2B8EtpyjSnn7ySa9NxmY48CkeZuCqExxpu54taXrwkE",
  "key7": "ifJceV2mAa6jDnuC2a7bxmCwf43NTNeZXv2RrUgxDeLhLwdmqAQSLGKG43RixxrxjxU62Z47oU7ggpzscpy7jdH",
  "key8": "63AoRbgi5v1KctqMPL5cwyM9iB3rzKzp6iPJUXKxojVbWqwBaaBR8S2MFBhB6TZWstDJWta7GYgaUNJ1nY4SMiR4",
  "key9": "3GFjJQwUu9mf7LnrbFkrbgVFdon7QkDtDP2b4FsSPeFcrvvLj2S2N6QCGW7Mmv69H4gdfHF87sxcVqmvNpibJSXs",
  "key10": "3JkMAPhoZwstcXtyAZCABKrzfazFuMfemtcfaVAi8PSCBcXjNVmhB2Dd9XXNv8ea9UxZmL1px7o8bZscagaP51Zd",
  "key11": "4NTFzprvGH9sSxtZkpcU2QtuA8K8Prhw3jw6g6KsL2MGgtVVQ6acbHiSkmhQtx84gLe6nNPuSr8PNmvqYbYKXnnU",
  "key12": "3E5QtjBDYqs7gmpYWhfUtG9CuMP2gLW16oN4uZyYNpNgxKD687GKu627izpD1PvyuFtapzauXJmERpizRoCkXbbw",
  "key13": "4f2UEinPTe4Mf3H9FfwDp3Yh5mgPYoE5UZAo4UZHqpHQH8vF638FruirsD2MWDX5MgwgGWJU6KeprovPF8hEYNMw",
  "key14": "5pHqEVBpoGLrVZdAbe1DHQX1SkvQiQg8BGdREBG586p6FcpeS7fsjv7atq4RiE5oKiHNGRhRNBMwn84voKNGcsaC",
  "key15": "3fmN7zMPwSBPf74rx2xdHTByw8GimojEwxJDvXMgxUwasHBFd614fFispsdshzhqJ7s9o7SHsRHjacAEwtXCBAcp",
  "key16": "2iM3SNC2boHfgTtQoCJ46q3TBY3ecVwv2aXqkV94NjoQVHd3DdMz42hWoq4t6UoXQww28w2nRvXvJ4vmTSWZamXF",
  "key17": "51rR6qNJV3bnkM3DB3aCorHMCWMXAtdxTbLeihebmiodWeozqTcH7eZ67PvZFY9dAoEWcx11xr3ygpE49khNZc6v",
  "key18": "4WzgS5W1DoA1bV3ekjdbbWMDrhe4ND3D7RFbX5cvnoznQ1s4pccJjgZtwRV6qjyjkM3p6wygmGaVVZHPcsbfscVd",
  "key19": "5QC5S5wNiyp3HZJ9XDFzbezXYyT5H1tKu1eeeieocGCYVUL85HZeVV9HSCDM7q5XsoUg5GX1YzoBqkFtpByqU97U",
  "key20": "4jkHSr7WymKL9vPXkuxaHbZsD5iKem8iC2WSUftq7F9CfEa1mcNziYKooDr7E1di3oWgNUnEMNgDn9qEVgiDVejx",
  "key21": "2P8MdCqXdheUWnno6qeW1PPZrqXpfHKbLxqiwE8yZTKDu8m1XKSHTQQ2KdZzvBQiktdnLn1gaTEgtRmSsDxidVRA",
  "key22": "D77euHxMDB8SaYnV6QcsGSqSG4EgSJ412zuRSqgodTbf53iJa5GZAK9L4Q6hrVMohWPXcArMhT95K9DUn1GHLwt",
  "key23": "jZNfAR5HQcQtPktL8Wv1g1f4Fq5Mo2HHgcHtbiNJ6W6inN7LRGGjerbCPWW6tr8mVxW8czUqT3N8YCJYtkSEA7o",
  "key24": "44UpTdG3tsVFJTW8Fzn1Q3BQic1pSJ831V6G5zHPGk4GH5THgeBbnvn8tUm5GtLJFDgUgALvdc9U8BWq9eCfz1kx",
  "key25": "sxDNdn7QtpieLiWkDVCjNuYCLLemurGqWq1GoNS72SDM4PgzFSJdHwdEebTCzwYVXTx7KCTtbTfid8gPKC8ue35",
  "key26": "mFs3W1mqfaxtzkgYwnPyV2Q3prShRsAp3YHTEMEgE5mXt23getYwX7XmahqCEifTdvHjsjSvMU9Gp9Eciyaupj6",
  "key27": "5Ex3GokiQLVKR5Z8fiwo9NPynHqEjVHShjtBqTsL86XKZwfsaNwCSgYm4oy1cWu1wLY7jEEEfCGyMDQLu7gndSJP",
  "key28": "3N6fyUQ1TXK17MRfGu2rcZu3YiWqe7r6KnEVvy4WMNWr978toiCfhQMnvahj14LU8YAVJZyGYzzShqsnSFESBkXZ",
  "key29": "5Wc1MiZ5fC34Vw5gd9vEZWW3zVcddX57tGfgiLRin17J3xKyNfUTcuWZ2dXWyxZGMnEiRTk7YC89BUwsMoEybmu1",
  "key30": "3pjX8uCTPikoGfTAWxxKgKvoRxRima9R4U2es2rJumqoRAmwx5GFDZwE3d5isfbqMD59zyaD8kDmLCeCKJXNE9Uy",
  "key31": "3ZLiZucZLsQyYgN7pUiRUaLZKzKM78TDqdphzejXLK49RoJ7qQde3rDVmAwcBSYWWnGSCfbTGskFc15wrc864x2c",
  "key32": "3SMXkMpFq7MFaoS5NR84RxNCrfYQxqwLLHhZZSPBAwJ6mq9StQ5xLK85o3V9hcb6gMyd4W7y2DVN5FjgSLqsYJQJ",
  "key33": "533jp9keW57qRgPFG55hAFiM1vuNS87G6gjprRdixAqYX9REMBvJMqDSwfgQ347ybvBALBPYyJEj8mz7MPSjgamL",
  "key34": "3vVJbYcDTHWUXazTRiXRaXzGCPinFTGXD6Egec8DYmNX3QZhzAKGR7wGjQmkEsFHZoSxWYfhX2ZSe8fy4Jzd4nPU",
  "key35": "5JrgpXrcZVxG3jo2h8Y3MVTDEbJcpdfmm44NLQyYEg8nkTF1rr6MTpsSMNSdmcv2fZQ5GwfbA4PoqrCWk3eWJZ2x",
  "key36": "wGS5amRC9Uqq57tA6DU54cjFc5oZaaizEp75bAnhuHHZe8AAnrtFqRwVerhQZ1FCaEXfKpNwD7HPSqP5sh1XxdZ",
  "key37": "xetpGJGy5ArsY3v3KYLssxPmZ9DTzZPcx6rtsBydNkShPuByXFL3HukUMb8oTm91t88GuwTE95j2rVL7pcWzHGQ",
  "key38": "5ceENFmCm1FpKWEddPoJ6Jkiqkot7uafcWiJ8PJsKy3wxnkwDWCJetZh2JPf4od8jk5fSNfjaDtEpCWk7iGYrknJ",
  "key39": "2xpdhcb3FJe2rpJMWHvZSsqTcULZe2cSZeWDZmZQsMSpRUznkaMURpZQynKyp55rD7TUprCBewQyamGCgDkwP4Cx",
  "key40": "2MbXz6T7kZLRyuZSg8bDSqkNhauzfD7zGCgDfSZ5NCU2tn6dbTmrmq9wpMyzRkVPtHsmpV2gCMLuz5aD4aTdhnw",
  "key41": "54V5dZ3rt1YX26zeMTKtXseBHj98PUFnkCnQHUGqxKmh9zAycRuA32pmJxnBKJKHSpRRzgk6s5v4RQtPUhAFT9T7",
  "key42": "3VVpfJX8BpWtW4oHSjrJM7os6dwbXVNv68sXCKo1YeKH2Pg63oTTNYLow9aZrodYKyzPqiKSiQKJeGCv8UwftDSh",
  "key43": "4ZEE3xhfRDEyYAcHbTdBD9H8diZ2ZK17BkzvHCD4YVPWbMabuoL8Su629ryZcteaJNLszsKGt4BUDWBBiRRd3t8o",
  "key44": "2HXAYyFgT17QeKWEMx49JZYUgGE5SppKjiwUMADxiUYjs6pnUNNiNe6Hh9atkENTemyfoYrCeJjmM65sgYuE4T2E",
  "key45": "putmztuyCZwUX3xSPX8uj5i4ik3TJBwhK1qqNA2rT6wGENBfYfsXnmaNATjpyoAsp33bTRHR6j43zKez2apXtTv",
  "key46": "28rcUiiKbrMe3WRhfJgC1vLGMcKGqgEDCapGiUnVHJVxDPjVFqPxjmPp9JGYZPoFytS4SyHZqF2hLPUcYDsqjqgC"
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
