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
    "5Ne3wPUN4Gv2wuJ3UpHH9ZbgCtytFZLhX8mMvmKbpqYriShp5Xd6hVDShSPyYoQW24E221smCJ8N52Pko9DGMp54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47PyFhbYxpN88ZjKDFgJ18Q1tY9mf7diu4DNibv3WkoLiULXyxJphKYJvor5uD3SN7UfpPNWshx612pKXg3fvGGq",
  "key1": "54gnKVdHgKByo3bDbR5ZV73hSZnS97VAK9pzgKR8zmj9g625RVB7ezS2wRRiQUgUVwR5Sm7q53mTHi8x44R6qBGK",
  "key2": "4jDm6tJkg5zuZtQBi8GiJ4LFvqA8c5PLvbesf1ARVTNZDfVejtTYFUvbT6VE96yaSBzo9L9sUHuYsbvdxobasGyt",
  "key3": "32huW2ACMwCSgtqSbrhH1za9YQUMCxK2bfYZStbmccD1e3WRsNNKC5c7Zr9DNe74JhwEUXXgB7iieQLJzL66b7GZ",
  "key4": "3aBuhgiZjscGXvHrx1L2dMJFVgzhVbwyQAUcFsiWAcmY22JDfpSzS8NNKTYAdukdJTiMSBJJMWrvHqibhGAmYKac",
  "key5": "2yk3KuFxT7HCGoKJxw2pEHcYGdbH8KMCwiZMPCq2A8LqwhNjpZubdPec9yQhXkJxV4aAudSP9PAVVu1iULSqLMib",
  "key6": "5Ue8QXek3E1y4o7t6tLyDMXxp7euAt9iZiYaSdiWTLet5p22vvTZskpdDqxkG3nwivwi9CE8fsb2k1Wdcx3ARBvE",
  "key7": "aiQQLaFHJ4kpnaBpRWFT2kxVv1tuPRMvzMeP8bSdTuhB5JPYE31Ez5YUxDhAh6FEpR5xPkVJthaE1TfTHSEjMQJ",
  "key8": "2YBruUyJW5NMaPMWU9p8fSWD8C2iUKWYT7sn6AZ5kqkwYEEWKtPidRxDLyKcuJSKJ4zFX6MGzTw3u6a6Ndq3Kwja",
  "key9": "4q3bM1BXAznLYbTcE4z1NTq1Azh6RuQyS5uZxUyRUHx3MpFjzGcfaW5nLC3pW2bduHF69dh7x58DbJ1bKSN9ggqm",
  "key10": "5xE2XjDVFtBQDWoPJtytv1SVXsEkLqnkPhsVYQEWRD8mhKgSDS5R2g5yAHKrw5uj4RUZisTD5NtZCpgJXFB9Xnn2",
  "key11": "2zvJUqD8x5nz2ZoXVJX3o4L6MFXrzqMzD45gvJBvarqJB8r4V96XSyitRaJnbpHHk2BhKMucFvPhiNDXeRkpB7Cr",
  "key12": "5wR8AWYkSZkLHqGW5TaGUmTLib1rk3XBiD8QggDeknje5EzUQsCCaCocodFhZ4RdwcKsNj4LBFh5fUBUvtdBaEBE",
  "key13": "3ayZXsWkpMe9otEmknNLgFMn9pchSboM3Di7ixVxXbPzU5heKMinUirupP5xTuNJFUTJucdsR2Fi6CvTzeG6GBG9",
  "key14": "3eKyL2xsagwsd9YQvD1WEc8AwJpWvEc94cmkZ42Do2FZMgjL46CQgfoXXugYXu6kHJ6EP6hYoSwTEFfNt9uPUoVX",
  "key15": "2EcJKx7Si8qcG7SbTSEdaRK6eJYeqZwjvjoT44psUMpDK3qWf4zrswQM1RR5S5YoavJ1zRN29rrwRBNMXMqL7Kic",
  "key16": "yhsuhCHUvDR4tnRYkZcLfzxCRsJQ45McT5f27o1Ct4P7Hip5uqFbZKndXdWgLUXzgcojvePhjJwdqgCPJsXQTSk",
  "key17": "34BnhCSWAW7Ho2JxLi3AqjCNiQDNkgQ6a7pogKAbueaKKmqVAKwmfBhQMYfVDmGg7wvD3EwbW1eXsgNc5UdVsNhB",
  "key18": "4aG2sduiBsktAW6FYzy7Cw7QbGS818iUjpYvDPwxxuF9VwR5fyudZZbYh4D8E1gS7M3LCHpxn9XaRWbAdxxQHYmC",
  "key19": "32ceFRDagyAdGCtswtzTXw6bKDVnvnwt4HWvLpkVFWHPBVayTy1Qesi9xjfD5MTtioJj1nmiHSX7bobXw49poY4D",
  "key20": "5aEn97uqedXYSZcQ9AxB65AGRn4eggrmo7NMkKE5L1oaJ3M1QZRXeJiL2NrmNrVqDc46S2xy9e7vt4PdsVSxqFWT",
  "key21": "vZVeZ2UjVkvpZqDzesBKqq5N5B4q9BzzBuye4ifiE7EnNF5eQfDEcE99PV9QYDb9en6B4zNUJm3SRS2zUNmGB69",
  "key22": "56SN9uSuCwwH4rkumJvJesd3L2eU4Xb4F8sxRfrT29xQ7hJNr6e3JdCvVAWqknNknVQzdLv1U5k6aczfnJ81DnYo",
  "key23": "3Z7N8mRQXD3QEDQLJ9ewTJTzhMojTLW3fY9dh7KxUZPKsZqktCpgpiF4nyYW1i375DHG1vWJb1dmt1pjwVid59Te",
  "key24": "2GC5qBZ21Aj1uSQSmaV2hvkj2FpbdKnScXNzfzY4TyrLRvKAK7BxNgjMqaYeR2jLTSa9PGb7QFv7Rd2TeFPeGLbY",
  "key25": "3LP4C7o36GZ5AFaBw441x8s8h2bizB2xPxzShBhuFux9znPNfRK1GSnx5QmLgZdQo2RYCtZn67FwgfxSo5wCtoEh",
  "key26": "3rNH9AFgButztHFos9bCCSsmJKSLJUVMUhVHDtCZftzBW1rJqXFkDv8chX6aEdwSdwP613R1CSQ35jPS72RHM8kB",
  "key27": "62XLsAGsDF6iXZuEiiT6Cg3xzgemVxfhARn4dD9gDiSP1vUUotYULxrfuWDTAGcFPoorKGbPHPuSDskKxRJZrRGu",
  "key28": "2NupYQ4nMrf4xxvfRXBzHymkP1uYNBHxgp6VdyznmcRR7qHvgg6Uu2YfB7ZvY5GgjkQ3KPxBjNm9Qkd3DxGaQ2ue",
  "key29": "JF5F5mTKXVYXKmuSi9roTpPct2LfAVpar9TQ1TH1aVKnaKAknBJzvb8pf4W5NysfK4hXUrVG8FjndR37HYB5bbu",
  "key30": "665WUVFQTjNiFLmqrxmFKMD1BmVeqoTtmLKu8bci7uprrMFdqEHG1y3gP9JexwmGUR2HKs4XEY2Gge7mn8R4Dm7t",
  "key31": "5fXt15WZu7c1kDsyxS791hoyC6KfPJHUTrEmfkXSN5589nwQypPBqPhRFZfQ2mi8qM9MLo4UsCeXjhhfJxGtEhTu",
  "key32": "3tgYVd5EC6C3mAhwZfwBGw3ejoa19umaFmUhiTnbjUp1zP6oMTFULxhPYLpc2fF1qYxissi2owkHd6hMWJLfS98z",
  "key33": "MWYPW9Poh5ou1k2gpuTxvCgfS8aScwUS4sBcSyWUB7HwD89eeEjMZH9voZbchZQj5k14G8ynZ6AUS1hkC1NG887",
  "key34": "2spTV7aDxhHFGLwWoqzd4uCfj18VqWJqvxPC6UJcBbvFQRVGSAnSkXREuZCCm8x9qzkX2e2M8FwiFSCv6UNwh2BY",
  "key35": "wJidaVAPMr9XWh3ATzcB1RdMhQAnvWzm1iCCQQgyDGCpHf2kPiwtW5cFwaCo25Pi8MJqTjCz9dHMLYKeSVL68Ki",
  "key36": "46rsxKAm4Bv1Jg3JXfD2ETZhS9HZiNEC2QAWbJExhZRtiX2UitH4zV3BFcADYoS3nKTnoiWUerPnt5gGPS1N7K1p",
  "key37": "UXD2wj5HWoasLdWWPuskiX3cyjdZo8Pn6NzhhvVFob5xEPdMYstN38WMKdNow8oKnGpoHrYsSbNZtZRrPVNKZaU",
  "key38": "3PULPxW7sNUNi6riCKLeVYCKz94twjpf1PSEHENyVrwvxhYtoRXBiQZgSMsaUaJzxfUxus7Tuxz3dXoVa3H72zaE",
  "key39": "2jB9LwYWFp7WsYXJmCD1PfpXQ2jwNwSjG5wTzyTqYdJVf6w5B9JvFcknercRksYUGJidB86GVGdVFRq6n1GyYp8Q",
  "key40": "3SckkDwutNgqhTHsS6J68jW7LEuqWLnmGERUkYshsUVq4EDHffLrK1aLyxYrmUTbvRm13SmNm4dsCyhQqes985na",
  "key41": "3EG51KjqnYxYMhv2NPqe5bQN22dmiEQjndBcYQ4ct3aBNtWsaNHLwFwWfNHcr5FqqDJkNNVbuwiGkwMhmPM8SfwD",
  "key42": "4UWpivQgZTVKco6E5Fu1pGLHMcEzLHpgGEgvnisqWmLVjRn3EQzTEtjvSJVZFKs8i1xnDzh7yng6wByk9Fo2Vc1p",
  "key43": "2WKZ8bvgymjqcCi1KnCWSuLJoQNXmf3hs2VuJtEh2qGCX2yRiERLGntSoyxivq9VG3zGffkvtwGh2v6AEkBfMVBP",
  "key44": "2CKN7CgVNhSYyKK9ty33RnCttuYtGkMVE55UNaPXbTgzwCbCBggD3gFSDqGmMnLNyYk6JKZoTEXDWLgNMJnwGF7m",
  "key45": "2AgtRjF9YVJ2tMJ66WXnvNyAWaMoaEYGZiPZ4RZeyDEQFEoNgTDvsAP2ocjjHr7ZsXSRNCVwhxFuQUoGYeUMKDi8"
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
