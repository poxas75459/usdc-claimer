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
    "Gf9Kjc9bAtbBTpVPLtHKVorX44w8XYhZzcgLu3wEqqJEn5RWBmr1woZETq5sYxAuiChhJKek5pQXSpNUyai91hN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6B7gcq1krTzTCmW4bBNjhM9EoWSCn1V1P4z2aDhfgxdZXqqXnpZZ1oDJc1P3vvetTUYXJ8uwnn5Sh72kA7gDWGc",
  "key1": "3ZfYAs2eZerMvXnp7vbZxkSDvGJq2Tw1J4S6KKMCNGfk9jsGSNd2QEDmKAj3o3mYScERcu4GFeq7KeYm4GyUxTQx",
  "key2": "3VDpVd1JZ7GUAq11xnYrnP6eTS588cxjhSwAiNLxgsg9A2u4v2VfkPZxLdMtSLTriRhP591KQmK5mqqUyGVoXdH1",
  "key3": "2ifkuAsigD7XXXbD7edhLGxGdcdtaNkFRstdxbQepkTbQqxRdPEWmmaTZXGTnA2r19eyNE88VFstMBxFrJZ4isYu",
  "key4": "4YHKQXnM2nxWXKLvb8enpZZy3vQ5zaMGxAntpqBqfE9RamNnT4iE8qwksHEAttiDY9UwXoPMSCZLeyGovPwvFVWo",
  "key5": "4jzXua9VRbQJ8CtZg5DzMazZhG7GRYHTxPH4DBvLkknP8Ji6BY6xRqnKCU438R5L2ViAaPRbzM4eJE5kPvPwHGHe",
  "key6": "49uJA5ahphz86LXdWfBG5LF2tuhpezYXrA7ryzPpszxxmhD8q7ECW8nTLBhPYzBDExGozEVRKxKeWbeCCT26TgFo",
  "key7": "uu394BbHRU6X39aS4xUAZ3NLrhZBtTADiQPTKFAZaVLW3aqcTa9KRkNrcaQGBAqyyG15UFqMcRsH2oBHwCxkw61",
  "key8": "45BGp4k3wZxCGUzTbkk138i2Q8g3eCh6HqGzErqm691fcsqKy5oSufZ5YykhLWxkhGZyd94eSNMUvF2uXTpHddNj",
  "key9": "5cTgZdc5DvY8CLyZSHZZjcUBnK3au2kFnJ2gjoUaUbbb5NomS97mmGr3QLtsJriRBXHQGkgx2CwT8VWw6yAJJNni",
  "key10": "2GAujCnBLMrdYa6ZchkzLZaR2dwWvxT8Lrz6JbJHt6M2DPSp76djwdsKn23JvnZ2Z43zG6Jb9vom27hXHriiVKXh",
  "key11": "5efzy3PkKHHdZg4G762pJBMNHYE4BWNioDVGSEkHEm7pGDsmLyKMXSfdsRHXCArfY2RktdCpYVD3XRn8K67w16of",
  "key12": "3xpXqWFiHZMXB7FsdqHuWu2bijQtmm2yWLN76N1JYZghwwRDQV76io5aveRZD1wuvnBdHVPPPdgGt9FcngF9Dnvk",
  "key13": "3voxPxbCXQ5Va4WCH53fGrd6aWERSkMn4SvKV4gC5kevgqH1HJBBuYHyKaq8642uS3VadxbaKqujVj4XD7wzdokt",
  "key14": "2qvVbZk9BoU42doWjdLeX3Do63WGtzVgeUcyXdYkwRL759JBZdqTCAijzaR1y5d1NtyabcCE1R4PBqHToYBYXpSM",
  "key15": "Vc88GqKR5ZgDFEth5qRDRXqrnrZywyewFwuyVnFZsFiGcmJVrAdPx9YGj6V3Ts4hgrCuTuAHmu7uzDqrtn8P5v4",
  "key16": "k4WbZbFjWnK43bNiG7LhVMdhd944kCdpqPaBS99wukHz1uLcELhD72CvmnwGa4koJ6Mn5TFdjQFKeYk52UhoE2r",
  "key17": "5bJT5RqhQcHtHF5RPDGcVK7TsaUnLUgkefdnQ8BfxmKM1qPRxfs4q9tArt9vZfohyJq7fjSAuLDiiTtbo4at1LRS",
  "key18": "5zu8EZ6y54BhJDNrZoKBiB25AS4hQrxazadjhA2DWQJrd5V6bnL36GvK8L2tCbXULzhtFtmwZLf47HEqJfqHmN2S",
  "key19": "DEpnymwkHUCosXx8NkNUMcAyQa31ss5YUaKYsEEZp7ZsxSJBabaJrMAZmdgDFEeYtrQZDQvvBdYcmn55obUawps",
  "key20": "P5xoz6q7SzzVJcr8Bjq12xfLedGSqFwnMMEZ2QToTM5NiuR2CAnX9aY8Hv1ibPZa92spegiSAnmYeyLeGAvbnn3",
  "key21": "3LuWVGeM1Dpwvwe7VZcyMoAnEsmcaevaZn889SPuz2MUxwQD1hakirhnjAd7xxKk19nb4PCrAvxdUuLZKYydKsXp",
  "key22": "xT8Wj6VUj6sDafpfnYMXwMsKpHRGgBM16hK2ukv2Xo4PsyfUwHFpPY3f6oySfvouu9jrfnKMWykE7jXHED6zBZN",
  "key23": "24xHJ5UM2bAjJWee9nBkit2kA2MuaeYMxNNYe4y1NG1jejP71i2UDxhDTmJxUMfcCyFKjjMWY3sviVpm9o6VnXHs",
  "key24": "2reLQwVN3sRouZ4XSZvtU5MQsPEBVnuwKNmjEs1EvuBEkF86haWuzBJLc4ruXevnSP9QAMqMA58QKfZTMseArPw5",
  "key25": "5Xgw8qW3XE75WqHBkjBwegPJBjwi5HY91DmpfQdG9dcmXAbCQtRwuacTZPLMMmEGzN2F2atk5nPxyRGqGVdm3jaD",
  "key26": "59TgsL7Ea7J6xcsjrNqEwKZ9ZVVWSrPLxkUSFddtQr3MnMdBNXZomXpzxnhoHVUkx8NJWjAtWsHZkVaoZYNL6wcw",
  "key27": "5YwJnyEYuVTYKsJzeXWWLuvAyHoYBJanDBU4vKdqfzDgzW1jWjzsAXymL1vzHDP1N3J9QomU3rDQ2NQGJPgBdBCx",
  "key28": "64qVPXj3FMjL4D4J9jjxDAEtN37xTvhnfcKX2wGZByU7zBLEo4uiAVgyJf7HY2Wq2ux5t8FXn1LWbwsX3rxERz4L",
  "key29": "2Mgi3iZ7Ma9QqNRPNfAvK7quMA8c23mWPhEur13wFNsJY342hhFiPUMAzFtxvV1L3o3YpebhsTtG7FhdPk5A3bqE",
  "key30": "56nEHcC4KvYTZK8a76wosTzpPPaY7cD9x6hJbCNzUpatfkWuN4fHwQjR5gDfJCds5JwamwRPHJahV4i5EXNV6L7f",
  "key31": "nc881R39mNtuADy9CJUabvHNHMvFFwXq3JMt1xHmwnyxutMAwPvSTKaEXeYEBrmPMsciWpDZjft6qEDbXkqPUiJ",
  "key32": "4FGDTVbyQnARftzAfvZd7bgyub6SMkuVXTZeA1ppgTbYJCSFLdNWWh1aSbNV3mFMY9fhRL3yzLn4uPjBjoEE1Y6K",
  "key33": "3SNZEYNLtTziTZ5VB9RAyMkyQmagiasETGyky7hbYnmmsd3K3PsXUbdAsAbsH6RmaYqg3iHmf1rA8MHTjhxynGCF",
  "key34": "2oj1e9RSdt1aqCm8FmHJFojnbJKnZCm3n7NdkhK49sUWv1NwCupX93xB2oh2rGrARPw3gBm4AC3ngmTHPgy3brXN",
  "key35": "2cUEacgxKPtZGoqS5i6aMonPH98TEjTJcS1D8HVP17LwM6sZhYBEAQtN8u4w8xHX4ArmTUP8qcBugSvzUGvqSfu2",
  "key36": "vsqr3KEi1Cor8jsZiH1f3QEVorpi7swyfACPF83P6WD8F2PLb36t3R9zjGKHoVafnTXT1ss5NqMtP1WiAfVi8UB",
  "key37": "4QCG3MEveUcMQjmx3goAJnJbp6rxfVkfkxcsgW1ZLbENNDvpPnNurfAUd6UCcNV8UCxYV2ZbUmaUmqQwuvk9Nz4Q",
  "key38": "3WCGSqnFVNgiWgkaJne8K6QV4PWfZDjh4zrmFbL91AZmYXuQAojdkDc9zmumwxzRC7QimxYQ5YuSvR49eHCndqGm",
  "key39": "26bqQWKTrYArfYUDswdrypVAyh6oH9NHaimA3omaCPDKjXb3khmE2xUYJ1GHQieGrkP22QcbDHFdhyJuhP4uj6Ct",
  "key40": "3HEDFKvaNgFd2q9QidUakv528Dv7fPVHGsFjH84mFyfE9U1VSbxReaeHjwF2Vb9wdXPp8y3NNAMkHrLiKFqKSaah",
  "key41": "5c6EivsUcyn6GhfQYiRexc5Y4UCTPcehxSjuyLPxZWFAd3YejufPradb1RA2FnYXqxnm1qcvpRx7kWDfsKGsPFjV",
  "key42": "2hqStPAFgxLzEvrHQVKGuKz23WGtF1NU3dJxXpJGec6B6esR2Gz7VqQUc8eBXCszZxMaJtrtraTTgTVyWSDQSTRf",
  "key43": "BhyVw7YEKFact68QNu3QrZ6ipubBaLLvNpC9XVTP5KRp8Uvk5KLQycLWDsJoWcvp8rPoQfokfp8TQct7ebipBiw"
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
