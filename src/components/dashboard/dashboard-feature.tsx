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
    "3nDNbFaNhxZg7PMxSrGTy5SnUuXdm1ibwfVrRoNPYLqNKsQkcN7R7dPCnh4ykGnshxi82WYpVpCgGDGvpswEtdtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WAXGKXB5k87iD8LKBHM83W25ag4oYVtgfTJVw1ewiVBHJc44a6AyHqgTWjZv1o7L4nURj9dRhKBctL99ZCk9jW",
  "key1": "4Y7XvNGggkNC97sjAVVoY93EN77Sh5oGkxHX9AB2MYrLkj6bqfYVVNg8yp31LusM7WjzuBFuehBbw812UazpbbFk",
  "key2": "3VsVjiXjVwSyyU2fNbnvRYr5JVyLUeWPGZSobQESAhu5ADdG2pXTToRv1XTLgmjHKdaHvsAtAWzd2UAeyYAkGjN1",
  "key3": "55AKS1puBv72sEmH87vKedxFhsscywqu87x7gBtTupmg389RFdKDybakNd7CtUbDKLzrzRc9DHszDmYeP1RFfXbg",
  "key4": "26Wr56JWbaSr3q5MEjvC1Y5kwnkV7QA4wmarJwAbyq1MAJcA6wris6RPjMuv4XioLagp8rEEPzQi1ZNNw662sy68",
  "key5": "5sCPrH8QM25LJcGvRUXAFeRZMQP3CYRKtntKjzRBTjEkJ69kSYFyiSg8fy5XgJZ3ADHhtMn8mUj5VDQzGz3DSCsq",
  "key6": "4LeYQzPWrKHMX1BEsvSChdN696Yhbm2BanPGue1ibhJGonjcdac4jhcZqNNAevYS7Vbdmrrh5Ln4xmetVBMZpjzG",
  "key7": "34DvyBgdt5omip7x271Y5StEHCk78t59358wZfUVVjrks14grxs8HN5stRJpr1EvGXZMm1Buic63RGiTai3wYZPu",
  "key8": "GqPCsnKRZ2YnPbpYdzvwZsM6ESjZoLvch9Up1hWK4NsCHVEmigNFR7LFtwe8phJwoRQE2n2m5Bu42DhtZbuE1Jd",
  "key9": "C6uxgifG12enDgDU9TjB4yrKBwJjRUJsrGJsEuWmT1X6YWQnrfep4NG5bsYSbPYSvQGjFs9AU1VCJYPfVmfLiPq",
  "key10": "3WVBc4T379MeqsqXTTEuk2n4bzhLu6Sr6VRXE5ZjFR1eAgbAEuEFE8VBmQ1d3xquammXKC43KfBRiD9opydFJZwy",
  "key11": "4eJRowDjyXQPTbKcxefpVywReRaxCBZc2fJMpJkg7QJzWtTD34sdqkq5D8vbqiRRBJnfMdCiejMW3wY9YoNRq6jS",
  "key12": "5iKB6SSdciUQjykgA4hnkVEC4Pu1TDa7C2wnoJxDernnxh47fs85TJBZMuH4gvonHhC58hRqQoRQo9gFnLW47RR8",
  "key13": "46e2s8QQWs1mTnj9DwfasLmeKEMbr7Ydmq4yAqxPmn2LMnzSmnuCWABjvsRVdTNXhs4fGcXGCxVK8BEosm4T1jFE",
  "key14": "2hMkBkGoaWNjgxE6ynYHVLnFiMHd7hnEdRsZ7rFZDmJUitHZ1tbE2cWrBJryMyJXx8su2Fa37PErrRgcN96N5pdk",
  "key15": "4VgqQdy2acgrFLudXqUBfN4TRXXsCXS2MKkaYTZqKDb4ogupgX6D1ERbp9tEbpsDjpHPnUrxMpdjwMxg79TeHvHA",
  "key16": "4rR86MrAveHrk9EXfMKqMchkzBN5bxqTQSXcwwfH66STSrQbkbGY7LE8SuKpdvmCu4T3muwnwPvFJEg37MFJ2vUc",
  "key17": "5DMdo7dBu1qTfEwuzTWX5wWaWD4xJbXubocX6dqvcB3we8eDvazdhpx2VtsgvSTngJZ3XB7BUVPYrK7cfQaWVZXd",
  "key18": "2FSYhLkt5cmhZp7DF2jFTnvnq24YvzgQ3zxy6FiRB21zdTf8zp5LrC9Hp6xRcVcWg2PUwcEaDowNQfw65BLqMGRP",
  "key19": "4RE6Nr65BbAEypwginRgw3BiwvX77Y3MmNex1HbKE5kPdchCudVr26uU7TAQJqN3YiDLz1ZbnJEH5qkkyQityk4p",
  "key20": "3atWBS6B3VZgmunozt4Hp2ZETZFE3shznpXvm3usvwbNyZGSi6VokMGf387ckvRdgsDs8rstB1jkLS8LDDN7kemw",
  "key21": "4WqVHhU6faxsUq17DgTvj7tKUd9LXrBZtXPNGjGCgvpHquK8Ubj753XjVTePj2UUnhR6kC4ATgJCcF4TqMzykPjj",
  "key22": "22S5iPzw3zPLbS7wRRVLHn9oimny24Sq9xrZuWKUYboutVzUyvNzn8AzEZrh2QioftSb2VN2TzvHPXaXSsvAGLtv",
  "key23": "2NHD9tp4QvhGRDkbX4MHmehPCy6rMdVSQcHimHsiwKwPnfcutMeieSkAoDeRYuiVxGCQRzWzgPGGAvDhPWNu7J2r",
  "key24": "3sSDvjXHoTBchWk1ivKAsdA7RpZpyyUmhXUkVG5L8n2PRqVf29jFx5yqoZARvS3YoTUhP4mokEFgex4ZE7ht1cjp",
  "key25": "2YQ1LHBPNyxCw3dF2gwgXojQVpep4dExzWP9go7FieT86MVogTCoy4gaKJYSPV1fSePMcUnSUwaB5emDTpdECZEw",
  "key26": "3ab4jBuUSpJAhxukJ7J7GjMa7YnAZndwn2R9biM2iBFDk9BVPS1nfzn5nxv9r13DuLPRF4nMf27kaBgDNZ33TUVz",
  "key27": "41FuoQnMDeYLAbQrBJ1f263qV76jZeGmsdRvhSRkBGxRyyUNUbaYEDjHEia4rMMq6HNrppm7Bm1F6CX6HoZJbjL2",
  "key28": "3KYXcspsiNPBUKzEznkuqniR5ag644Gm4EmkNGjibjtBGNnWh1APwZeDsyDHKwD5eYrCJHuKuk6epBaaHbeZCV2o",
  "key29": "JbH9CvuNNJyTasUgwtFRt2TonSTa8Vcu5B2XABCPFBDdwHEdtvymR9cakEtKS7gFe71SP7d1sGaTyx1be7m1kPj",
  "key30": "4Ki3jKnMPq3wgVUTdfZ2Gw7BPjrY7wPjDZLfHSrCy79TdpKRzyord5TqhFDGSioZSgM3x2UvxkdfmcZ9uDM8ywt5",
  "key31": "2Aen616YtX3Sa5MoMs8UmyHkpmGfLSW6osXJFWaE2YS1mxACNUhBBJtEdAxJLBnGdfNPeJiomzu7Fq7LHsf5tnZb",
  "key32": "3yCbtGDzNpK7q1Mr4PUpFxkqJdWy737dRbqWSvBeVLcJ3RhNQ4X6BejoAPrMnLrpGkswvEdDYHq9icrXhwcNUicM",
  "key33": "2sVoRceCLBDCzoaL48F3Pw6gyU5SbTcxVjVYjcU8UzprW9eMp2extzfh9m2iLpfDMy67WrrUXhYZ6KvWmM5T9wDC",
  "key34": "3crLj9fz89b2k8DEbrVaWfezJ1CjPHRYjtA91V4Dcd7ytD3GCENGT2iyiVPnctcw85MgYCTcAxFsKa44fFs8jNEJ",
  "key35": "5NrHEk9HUBytjhkPro1NkyS1GCWmYzDs7Lp8FjZSa4Ve7DYYx87MRfSN6evFAmoe1h1w1C8MAMwV9XTcoiuDUXzs",
  "key36": "J4aGz2HsTEKumxZG4MehWBAVg4QoepxQaE4o7krxXHXQgsjvwq9RrSJ8mCHmZD5FqUse3DErtZ8PHcqpjQCCfh6",
  "key37": "5PcXyzNXe3sWEhkFkYfPJ9pGsa4rg25TRX1BXbUg61irSetc9P4rzKRVchabX3uN3KJDziP6Qkj2chSUz9GL4KKg",
  "key38": "4H6Gsq4zpc7mUeruCQaCn8DUd5KTnjQP63uNiFwtci5UwXm6aX1Z9zvNikvzt4V5Wd8NFoqLr33qE1KQXQKbG3E8",
  "key39": "z1uQQJG2YunyCCTcfAUFAALH7ssdp1cusi5K4yCQh1SjEVXWs5GY6J3n2Rj9uGFP649AZNEEUDTKSY9xeKoEtxL",
  "key40": "43emmoeJdLxgbzwQEeBqiWbpjoYi9sMBJUiDanTAM52iN6yFXNdUqU3WqmYdPfJvgLPxH3om2dF71caxwt3JxcnW"
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
