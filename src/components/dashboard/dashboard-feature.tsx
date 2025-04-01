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
    "AYEyfqhL61ymuesFAWk56vuATTzqFBV1EYgDPUmc96dGtGY4kZG7nCRBNvE8kWVemsyPnBenMWFJdUq8MX7auNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZekGcQ3U7P2uvmzL4W2rMruFtAXZzzNyuDveYsURxzQonVmwZf43JNNbHrTetzFK3Bt2PoMpJyVSZiwfqEjPDXd",
  "key1": "3beABgJxVnXVUyjKo5brjYGQLopy27xv6tsBzbnYjmDCe7zzjGojPr2JSn21kCQm7g7JYpL4jNsyyxEWkuWrBQon",
  "key2": "ZkXPqWpyfBicqz7ZKJbTEv3tywG8vNgxiqKJyMLAZXvadE69ERvkfCn9GBALbkyhtbqnbKwMhTrtvDuyd7HCz3D",
  "key3": "5rs1HbmqN3LVNGbb8yv3XqUowQwwQvCbcs5FFXsYMb4VAq1WK2BYjuuCgU5VFEQeJPbagznBBHG8ox5EkDLYGdjV",
  "key4": "4DwXMdhcsDYa29sv7qtzjTB2hDuDGXa591Euu7h94NxzkKcYnZMYYvmNfFRcmDQ1snZcbpEtHr3dAUgnrUrwppGo",
  "key5": "5TAWq4FpaX4F8N8ganajkU7dJSSnbbfaXaqULuYZUbLBYuS3h3sXxqHUqEBk3YauHyuLBmcUkfBHSgjKtc5CrVS3",
  "key6": "4uRgY86qM2NHDu1F1LJzqBykVs61rwXco5W2GLmq4fQAJtRr2vW5fVfNnbwdZfSpZXfGizgwggWG7B8JmikFLJK7",
  "key7": "5KQK4opuWDfJQw6njj1kPXmqv7gZEhTL3p533MM17SmPfkUktwyaksScuYpwz14P8b233U2gFs9bCUs8iGHgFguA",
  "key8": "4AR5iMLYCWqQUr6GYb2vAPxj88aCyLHAdD1b6vCKJ9TmmGqVB4V6vctMVPSP3UzL4F7SD2gxky3v2sQqNk1QVvLE",
  "key9": "nQfJZU3WBS5afNd7rgCkMHaD5BxboY5irJHERjykybbHXZGsQVnaAcbq951De5yZJS1uNwaR43s5cNDWTaMpyHn",
  "key10": "4EVrtV9am7eMF3iPpBSayEKZn3d2uVJYyDMMhxF1gktKM8zM69az3KigE6dSTeAHJTgYjSUsXb9ayhZpcTad6e7c",
  "key11": "2hDXhzHp8Qd9wfXU4SzDdaLH926ct5zN8UppgNvuj17cyz4tfLWXrd183zeq5kyccgAVdVQ6pHgpxCVi8u3QNpUH",
  "key12": "48sshr1xM95dc88S1BjTx7oeSLDN1gTAQbJZLXCdhioekWfJnePvRD6z5Emm96nBcDUa9tSLkzSN2fjx7hHunfqW",
  "key13": "2SKXTYPHSe5tT9G8hFLQ2GnyvFWtPCsshkvsAVVo7BuY8qaER3u1yftK1rHXrh8HN7WddU7QauD36TJxVN3BBPGp",
  "key14": "mBAm5a6Pji1WQEvYzggDFkTNJFsFag8U1WoTnMzeMdaVCbMu1turfe9NcTv3qpFHGh6Q2HEo9FGky1zM4C4oN6M",
  "key15": "3NY1V49nKMSYczHD5VhB1quMEMfEMkJK8wNgrwAAh3F8whmY9LtaoXBPGeD4cjW42VPkMQSyytoX1bQGfe3Yb6pw",
  "key16": "5MVngSvDjTRvqipX1nCP91KzSE612sJ4MjB3VC6hnz6HgNoQFbJ1qhtFPD3awdb2wFkMSigWtPkCULCiEsokKEWg",
  "key17": "6673wMUiEdteVLPk88SMotrCUgGuSeWLSM9ao2mDJd9RXbP1KdMKVM5f1FTGi22WjYg7M9BZrEnUFa6AvN6MpxSi",
  "key18": "5T6J1WxpbWBuhWrJSJ77gknES7A31NUZQbEpnWJ128AdtpZeFoZnfwV9nS2b2MiPxeRMZstewPCAtrtXkE9RUish",
  "key19": "4NpK3EStMoLRLBqUtxNzqC1QgE4oZbEeUYcMvoz3keuRgiLfcKXjCqcqsWJFXL5zYPynfBq1eNdt7gRfwRi6vUCF",
  "key20": "31c3X52rZFdUDHNv3nLKjQ7LvZxcNAUzHv7q4MEUpezuqAitpaqoQZvGnfNSDWbNFNeHi8WoejtsEJ67tVgZ7Zui",
  "key21": "qxdW88QBTuGWuvHq8WDxqPSeJB6bpSk8CKc7qofKaE6VsugX1b9YsuVAjztTyhvXJ9pVDwTrSxm1NApvZuwjzzB",
  "key22": "2hMVcGrRffKxKZcoG5sfQ7EGQBMPd41sWVDJQX5WSSRveqp8vGPddVRdrmApHzaLjHC3eWK63Ki8W7mPyqAzpfqG",
  "key23": "43z3auyuN4xAVcpxgQMopTArwzyu86sX1uK2P9jjJPyK9T9y912rLamNKPJA85DChNcCMwT2aD1ivNE5TFKqp9KG",
  "key24": "4WegJx6U9fo2RKwMaQXs6fBJmVpv9npPKPtzkMzzpHzwLsz1cf5RNi5HTHstGzQAHm3YnfVHCjCCYumxxqVFLHe",
  "key25": "3C8GvUPibwjDh1wE1w9dqvJxgUNtSRK9iXUuHcHTMrSEdKkPQXHXsLbJ2oNa1pPSgDhSV14rppmb4EnDHLKvF57n",
  "key26": "4TjVubGNU4VemB3x5DzRF2UqJecZEJF1kvfVY72cU3Kn1KnTDeJ8pFdcQgDVGBHkcjHiu77A7XcychhgoNfo13BV",
  "key27": "56ouSxvod4noVm2CHYeGTMLzxsMj1revp4dJ7avDpn6DxqRcNVzF3m7mh1JFuypAAC9jWe5mM7VvrMs8bFxiWMke",
  "key28": "65Ebg3UtFjjufkx8Wha5CXdfRYrTVcacvBjyGMjqGK7yxrWpAXmCgfoa26Zhr2dF7DoWS75KuAbDCqKUk3RsmUb7",
  "key29": "5h1R84pMiBmcsZNy2HVQRymsopQ5du2MSSbMfSYDbmKKY9xVa2NpAr9EeCsvoQNMfuocMGCqJfpekENWjMAFqZpU",
  "key30": "2X5M4UnNaBhoaymmwugMSd7j2ZpyqBYNon56GsKFtVzfN7fJoFcwA13EvP5jDgeSqcFaeAJ4EDdLVvkSFhbB2xY4",
  "key31": "2JGJh1Yy2bxyEcY1Ax6JLLeEsgQx8jxEDPZYTmgaChLryQmdQBJGnWgZ3MJ7MBXKNNX2HiWFnpk1moxM8Wejk8y1",
  "key32": "3ZDhMj6AvSjgwxju5oCYzyh44ya2jwfM3LHRHJKBbDakfJnAGBsAx5tzPWvdipQfDQ8guDSCTHpM2cBTSTSsqAmu",
  "key33": "33kZZpUm6o4EAG67Ecr2mz9CMog2EmNU2nzVRGdh9od4TjzyPt4fq7zF3nwiDqM4Qtq7T2fcmcYiwJjgdyavfACi",
  "key34": "3qdVjZZbLymdVXmXV5vz9LLhGoXFzoonHpW4dNfwWSQ3yKMnhYsx2VPa1GUPkcQzRji6PmQPRdvgXn2Si4eZ6Jhz",
  "key35": "4jkALafsjF13oNZQeZpWphBFzb3j4AmXqdKmuj1YPST8VpyYgbVJT3MdtnNGiLmLnCJ5u7Dvmymbxejjq2ZU2Acn",
  "key36": "Lzkmvzj4m3fFUj4FBHM3nZipsMteWrmgQC27nJESs45Q7mJxyhHiEK6hoN66EKMZcYw1pc5QZtd55X4JH8aNNWQ",
  "key37": "2rbfN5RrWatC6E4b89UEvwDQti3gscwKR624gG4Pv86jFm9XNRs6cC9tBiZxzPXtY59HasJMxWQov2omjJperkzP",
  "key38": "kvgihBoQxdr3kP218ZnG5T4xaswm6L5ZQcBdRxTvxxrZ1RUmq45MnwfgtZFdDmTBrjKUpfxrdmCGZ71dAZB7Pzf",
  "key39": "SvvmF8na526d7QHaFidqQUoiHtDpYMPnsFdgQQy1sUFK969XCprWH1q7yNDSPkwkNNG1hyPuhb6tstCtGxFWcox",
  "key40": "3hnoe1y4kRB89UASdjRiZERNpTbv1VHHVT3zRsXbuNw81P8u3MNXfS9ymTigSonR9miCeyWFWbrsztfwExLd25X4",
  "key41": "36mZmMuiRnNSkMeGbdBrdaabrCQfkvPq5y9TziX7DN72ZMeX56QDSHURGzhLQxkm8wMEKUYpkjw69xFTLGm91eUb",
  "key42": "3VqQVesyU3tTyDQFT5Wh2JEG5sAjNkRahRHkoVJ73ttL9KfRvmbKDn86MijEjRvfUKke6mCbgcKUXU9eeFfKt42o",
  "key43": "3rT9n4surJDxbaw8UjDoXnVMxsmTHysLp46fYvTXRGCjZR94YuUnFAmCDJeM1AsPdmpaz4KdAVeve1AR553cDtKX",
  "key44": "2bHjji27e3nYJYR8YoQcZnKNSdHyDXEykeP9NB5iVYVHSLEeyDrRR4gMQTjYAJ1zn71qQGzVbJqTKiQbBAXeDhfY"
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
