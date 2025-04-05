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
    "2dGikkMHSz4mMdasiPKUuUBbHdyHaeqVZKtax7TLxtiTNPGNMAWmbDRGaLP2VXngNuvDPRcWKvT5U1CC55KawueT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RsHpCgvgEA3qiWqMfCRXBcFHVuHDFWehRbYCTC9SXjjq6qk6VegsoaYDMpmfNwBdB4m6Vkm9LZmjifzawhDRXko",
  "key1": "3zvAhHVbFnvfbnw1Jwuha1VW49og4ZjkYuwzk8qDD1q85sBkj6Pe1g7D6YRPqPYcrRaN3srWa6PibQEUDyTjgkLY",
  "key2": "4qBV34HAPEYqHR62GBKhEDrgffbVhPGfyNTzAy19qYLYEue8hwzqBp4KVkyXDEHhiYQG5AfjooFMhFu7txzTNd8o",
  "key3": "jw33j5W3NP3Gvq9hUjgZTwqz7XuK8N7jaZEC2cAUxbTFDofc82L5XnEPwsdE7B4FQ3MZdxM5sBY5C59w6Kbwxz6",
  "key4": "3kvSUYStc7pTen2vu94H3f8ZGYCFzVWXFkji4Cf2fKHmXNm4VModP1k6JhnPogVbqGcVCMzbfe6DLEKBRXK2R9uH",
  "key5": "4zGDoXxZ8nf4GrAfRPWFrPUKWw5PmPE6eTtLQp5H6D2uiGMf3xVSTCFNo3nBnf4wVXh8iNNHH5dqSeKv6BWDK4CZ",
  "key6": "5GVyEpa72MWDvrHc3zd1FLfompA1xwe4cQTA5v56kLwamT7xcTFejviyPeiARJAWq7eBJuWZ6g3Vph8Q1aaeKMGS",
  "key7": "4QmCXH5TZYoDy2HQLMsvKXm64h9zLDPabNXPhdN695US3Rn9VJREW2LrT8ReKGsNXa4P8Gj41oHZzx2rTDhaui6R",
  "key8": "4JUezrSTPgm3JBAx9otFRJAtRQXqhCJAW3cteLE4CVa5CMGexQyDwqzL3oHeu6ZFA6oikaaEyVT5SK9PtFG62AkN",
  "key9": "5EqGgss8Cf7fT5jF8WE2EKKLKVANzXzuTtob59FuvbbPrABFGCpfeTvWZMjxgcJFYnznKeuSVjnxgvT8MzMXxWAg",
  "key10": "pAc3SxQvT8zrLBxxkKgDKeSHUffJKKkBaymTmiH3o7Sv6p1CpvkYK7yiWnaewYupHvQJdKAbercGw6modveBcqq",
  "key11": "3YMpPRtYKcFtXW857sszHf8nMy1p1NdNp1FkYdVffCEto12chtaXM5r6UWM9piY5KpkX9vcQmVmvaXGADaBdAS3E",
  "key12": "4vCS9Yy3Ues8YJmck2GKkxiACC5Ud2VWmp1b1mEaHiGSFqPmKKCk4wLrcgT4xWcLnepUKVdP9cvi72VJY367jj41",
  "key13": "5HDBRZ6NV2TkVUtYouGU8Phai9TiGGCYRH17oTCCHNYbZ6maUN6UihxVfETVxaQm5PdEKuquVoi9m1ScvBePMMvw",
  "key14": "4KooNWGct4xPdmV8bfsBqz4bkxyrD9dPoEYGaZrgZ7CTRH2dub7rHyH3ZmU2iNVt3g8NKu6qmGp6PeMJb48VVq5j",
  "key15": "tyUvRx7Fbxo4GDiMGDdyN62bEcLCQmgZ7KSmyHxbHEyRWNiLm2VhLQJqge7gqMv31r1g3YESSftUFKbKTAEVr9v",
  "key16": "4baXHGRpdWU22qXeGeAzcEjjhnWFrVA21fJMJYgiKFQWJjYoijGwFd3crLT1Mz6XsegTcaKw3aseh37oFquVaAq7",
  "key17": "2bR9rck9XAkPBfBGnEJU7GovF95Koq5gxgoUEHVnsJpogXcbRb4qWTjVAeNnq5d6ttdxY6Rg95ddJcqrzNgwNQUf",
  "key18": "4Xc1HHYqcgrRuQ2LWjrcdUSAMRtcA9nLBJGjt6DiwwSjJkpFFWtVk7L8BKdf2QNEz4SdMyifNXSPwyppi4uCTNk3",
  "key19": "2m1RKUTAg9tZVBFFVwnJoBYmhBJ3uydwxZRw7MG5P5QFgVvpnKxugjeLrmK6s4x9FNjws3EeFP6eQSeSNDX3c1nq",
  "key20": "4CHYwS8JkGQ2RgMD4zAqXrJ99iwAKRYys858oZCF9D64Un7EzH9mUnNwPiHSyvHLWxvpWqszvH98FVzWtP4hZDwk",
  "key21": "f5DgRBph8DTbbAk6gejDXsjez2YJxnGwXbWe318rR6cx3mx9jvCwN8BrUN3ZYHYj9TBDa3JRVUu4U2PAmJMerH9",
  "key22": "2hnX1sFzDChzLYWhvMShpjc7tb2Wk6oTUEWHsAjqXSLbCQyp4Nio1cfrHDEv4bCXM6JTLujv7rLbyc4uQDm71AKB",
  "key23": "3RQHcqehjmXukAErpzaSzfTxvZRX7L3zvAUE2A2SC3n4esSNRm75zdYR9uDxKDYYRXvKB5TuxLiBgHJG9kJsPd4Q",
  "key24": "2LJga2cN2adKHbCFWRCDJpSGBBE87enbtzMAwrUDTauYw5tbdf4VWgh1dnQbd1kZX1e7y1zYZ8JWcKSCFzWs8aGB",
  "key25": "22p746nVCVYwxPfwEWRNiaBLRCJdQjibamcUj4SW988azW7GDqXGJRE2geZfCgPMid7Q3hP9JWZzDwdRHFcLCSEZ",
  "key26": "457nuEYEw4WmeiNLsdrfkq6hGfBvYWtTbmWreDA3iNPmcyNdbT1zm1W6961dGAN3N3CqzPFTPM2b97M9zrEcy8sK",
  "key27": "5XJ4nias1Niq3osMobCNVAzXnzsNwSC1skArrPTmkaeaBeXSNnUoSWDcXLtZRkHKWB9sW1PjdCGkGYftexu8ciEA",
  "key28": "4CUhd8Z3iHnoKoGB5HpFgYAokLMoG9fXNLa9BcMhww9i2dsFqe8rDX8c3SLbH1VXLcLCZXcFepYAqpjj9vNHhej7",
  "key29": "2NhkGi5KEvNSyQDeZPTdutoztSYVxC8m6NPBCo2xVUgYTgotcbm69FR2Hpnke2c4g6vaCmjpNULmW2QKfJ39xJHn",
  "key30": "4VFj5aj8SkcVnerFhPQ4Uyh8HDwPH9U2cxNJL9L25ibdzcFmVFjRakek7N7fmQJ4aeEAvaRFJGTqAwbBMRLaZ3VG"
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
