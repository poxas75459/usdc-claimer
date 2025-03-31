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
    "62sFu82muTJTLPND8J7K9d7GA2BTrKufJBDgXhnUKwx4NLe32pawbzC3eMRHTziUn4ZPrgEXYCTs17oDCrkZRBmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PXmGVc6mN9aVAMMEbJx8VFs4NKByYa6WAZSaZVWPPyQwnCvyBi2xSet918guDY4oA9uHfyQK9rfUCneCNozFict",
  "key1": "2hTqywfAkX198EiPJT5xuf1gPCHRqHZSjqbuK4kJAYLg8U1vZSktYgrMZ9BDWLJaCMzAvQns74Sq9eXeGqGo5CCu",
  "key2": "4Bu1i9JMy2bv2o2pKqrfJkcZ9aBAR3yvhvcTL3q8R7mxkjERMbDagLKBTki53NKdi32LFsDANynm77uZLr2Wu8Ph",
  "key3": "2hAuJT9phFKhEaL4urGRhRyxyLJQLUDrzgVkyHRgTDEtdEEYszHAEiaQLL3HDDC3wGgVpnyUV22Hfrf16ymVzmh7",
  "key4": "ZSnvXNWCDypSvZqh3hzEDrgQQrZVPEJfFSxp5KAmw8T5kySqLyf8qoL4zwZRaWFd3iedbsdkzbxzuuN66RGRRVe",
  "key5": "4Hgkef7UMzjBewqWUVdqRxYC5oAJNgVFCWgMPZ679mA7ynaLye4irP99HvY4Guzm9rSDiDPe4DnoBJsZ769LKh1i",
  "key6": "41bMHqPm2qbNY7q18NYPLscFBn4M7oHjot8eWrvvox2TxbUXzZnhWM1nx5j4j4b7Rz9SGXukGv8sAtAxygLpVRk5",
  "key7": "3heo2ZjwxdVmBgakiTUkAmbciaRpzC8a8ZziirjQe3fRY2JCPEYn5j8DqRJaWaDC92RRwcFMESYLUvksdPwrr9qH",
  "key8": "3SUypKyFiANDRMKzeNcuNYa6sjtiGXjzd8kRVE7DvrsvFiQC41VhGPwXs2fe4Y6r1LvGhdZtYde4hGrGeyuMbDrY",
  "key9": "2xCDeWSpSC3jXQ2tsaVkpUkZE3hXbSsrXk4b8SjbjadnjPhGxprJxdSn8vJ7kCDKpJpWwWvRjjfjAeonoLQYwECq",
  "key10": "tzTo4G3tRVLJBvKUcEAXsgzTYUSk7FUARMK23ur5UhTcNPim4w6xr6SwoqVTREX2kmuwq551kMB2U3gT72uSUJq",
  "key11": "43LzjwxrWFgEM8X3815CdwrKGSx2tVqjvHPmrS3LygRtc2y4xkWBiSkwJmbAUhDjfbvhMyppv4yC3ZnzfExwfbUB",
  "key12": "3PEzb1QNXHXFSuNWjLBw6YgjwyRu4ZwCPgcXsn1RWk9sv1nqzeukWfMvenr3GGQhDDnCVy59eaBNo4YiVRdka1oJ",
  "key13": "2o33WtvPQXNpyUYnjLJfhGRWeGV2ikini4V6LnbPKq6G5FjZjqr5RAu67wyCrpkehx8wFsCbzQajFR1Jd4vdLDcV",
  "key14": "3JvCZZcHWXPbxUhsxsBUU6Q2ox3DAjbpBdaRkCU98aC6nFStY3eQxybiwX4PAtwDYWcXgmDy5tmtvceaoyEgV59w",
  "key15": "M2bBM2otmCNT9gHchk9MqfQ1hKLbEVRnYGfkGfXzzt2keCV2PsgmvQrcLp5FFHrqudThuW39JEaoTPUamrQ9eBc",
  "key16": "5idvcxFU7mWbb4rt4wqrEsp4B5hkDv77BrDmfAxxxwxQFjSSLoQKoNxUNjz6g7WYiXFgiXCLhBKueYP5AzRycCix",
  "key17": "3CHh5Fai9MKM7jmKLwECT9kq8bjkHv7qC1e2bdYcPd77u5cjRDHPxjqc6gDbCSuAtq8kViFL7r1gqGfxRTASHzwz",
  "key18": "4dcctJB9mrE5R66jTBp2E8ieR5QsTDrdLZftu1zY1vLFmKadHgZc32wpHfaV7cHwnUN6TqT1UdcKdZ76FR2mEg73",
  "key19": "3kaBszJuBqGMu1zU4rYd539Ss4pp5gZN81Gxwj6dBfVjHGtNa8L6K4G22Cj7TDuoKATN3dPVYDepaMzmVXChFLk1",
  "key20": "N6v8hqRWwwfVwtoQfu64csVZGogPuUPCxcfrzR6QdApmJpY3nw3ZCxV9VtXnEcpqRkxo8YNmpomSDA13Et5Np5E",
  "key21": "5gX3drktcwiv3DcxhBsxKBmK2ju1uRcv7SiasGXHeehw1oLZr1ZmvzKiRmg91EAMhH1v655EJX5Cx7TPG3fzm1Mm",
  "key22": "4oe9bwzuX3fBMzsJsffDBvMyZBxbVc42sF7qaFE9JbWU1r3kF1GfcnxpWxu1AnWZi52HcNqN5f5UFSnjiRk3Lprr",
  "key23": "55KabqWmAKUwct46te3yS8jetySbQMQHE5XPjRuye9XjpvDjPxu8ms5nfH6DRMsU3FT8n7byT3uruhTx5zjsLQeJ",
  "key24": "2u8SGvN8M8T5bC13XZRLg1P2hGGwFwq23qZtRAN1zo6p4LWqWoH9RofFCaVHdpkPKwHU3HnnWUMVuitjBv86Fbzh",
  "key25": "PPRJu72cSZFAZNAuE7zgc9FGeEuLSoXZWqBSH4NKkDHcGPdeqEg2vksUokhFy5XTX2QP6f4CCBpNmDedBX8a214",
  "key26": "fr1ZKLuRtuAFWvbCsNpSckQr5KwVaco6qrqCNt8ZLzYVsGPUsDVHo6bk2b5Ca2HRBJRHEafV1dk2DKx9EBoa5Tz",
  "key27": "3HNWSznjFtCkZGtVn4FKW1knyWDbBCTcAb1Qb62feajvUx8yEAdpyDQVg2dR142fyBQRyVHXCUY6jpvjVjB666i1",
  "key28": "52u4FWZ7eCxNLYrmsD2HKHUWjB1VrnBTLhBYhBPpMzuuCAdvJTkynTmeaRk4gLEfCCkqM7TdyPBimzKZ7CSnY6Ad",
  "key29": "Ci12Rn3QmcPECGyPqzRDBcXG2JP58dtH34Euq6jDmsAMBoudH1oqokM7AvLfRPVRV6Y8JznWy4GS6e76TUik7UY",
  "key30": "2EwE1yRndgpKJZkTAzdVt2dyktfTQ6wHVdmTAUT975aoJGbt8QW2r5a3Tv3iL4bvufTUmeYq1TqPpe3hPeKh3Et9",
  "key31": "3YQuTtXnT2SHSQtQSWdtK1jveXnARns3jvkod9vH4LCbBxJU5u5NYP6rZBaoVL8jLQoPQVLQgQvdvK6zGUv8s4Mc",
  "key32": "5brM2vihmirCqaRrfkYeJ2Pc4hF8gmtuYAUCGv6sP3zGJXb3YPF24sUTTCNXo35J5esasGNHgBZZcwGcw2mHbBS3",
  "key33": "2gUCDh17AWms9TJFqXsqdesqDdYYhhbsJ91SQBUiUgLkwKqQAwExijoxVFsaLfNA8pKw9CDkEESXtb76SKyfETpp",
  "key34": "2zwgyNeqKErbGeL9fwR1K7QPLecL8NRhhdvzHMJTnguNYqFKKyVitMKMgMz8sySsT4MumH6S1t9i72L4tdAMGvHD",
  "key35": "4PahySJg5jCJZGRnT1RbGjBfHNJMjdyqdpn6V3mSmaKrr4hSASmxAviBKL6wCALttiHZEXum9XZwWP1WhEJyuU6X",
  "key36": "2GpCqYPLgRAwRbcEKyvSC27bQwZvoL9kGK2SYhzaLBszJHxoq4344no2tytNZ6vQnkUi32tXmn2KCXFbKtUBGYuG",
  "key37": "ywBekFrrzpWwCHjbPFxuDjWBELa2XLQv9G6xKzNoB5MQ6RXAD1qN2jQcQyMVUmNsbZpRXHDrp8zrt6iu2wDmxvZ",
  "key38": "4VbXvpTMVc6vMgoKkNp9JMJTgEuQ2vhpJhZQHa9pzNcLMF8JNDGVLsM3pZgNUfjCvQ6b1V93WXa949JRaaVBQgaS",
  "key39": "2GWwpgNNLCz2kgkp4HxLXtc9oyQpn9kgDydajQczwvPDbddWYN2ho1a5MkY1ymucEH5cgMwoNMj8KmhVTrk6DPEo",
  "key40": "3SH5roNPfuP21EBBK254n8avAM2CqiCP8rFayrvQKihYssWZ3qgtMfSKkAGhF6qK49G9FWR1Mn7237J8ZqvnxNP9",
  "key41": "35FfQkwQKdJQPaJJqpp4VNS1sBHbXDnJPM7aTMsp9vuhSWGPQYJasYyL2e3owU9km4BkQsjQCeoWczn3YzQbhUPd",
  "key42": "4qWSjT4rkedmZEPVcgJLPoNSwV3yELSDZyiA1GMMX9Kgmw53dSTQ9bcibKFZubeRv8HdAHxquBGsUjUhh3MVvDAw",
  "key43": "grt5p6FZSvduzGrYfLmCdYS4vK72KKBgzMYK6mQVrAUTyZEeNsxvw2QzJnrwknoPFtmvRkPf9MbF6MCFnHucPPC",
  "key44": "5dSkq77RQE3XXZLmE37ZtP2LJVunTpJMzpcRksarn26TH7nMRWRXG4J7wJpJBafba1aPbqJ1BuqMazQbvW6zWNTo",
  "key45": "4BLvMDFCaenb5ugMyzbywEyEPx6X7YvSHMGL8Bi5uXQLfcUuHv2fxSpoLufSs6tRc5EKD6gwqC6o21GGkFBZSbxy",
  "key46": "3GgrpED8UxbqJXjzvmQrqpGx2V4Mh7DumB3JDm33tenS67wX4uJfjHMnfE7yCwCifiZaQDDJr7Wyu5GtUMAn3A2K",
  "key47": "2zYbTAWXmr5t5JDG9KxjQcy1PWxpcyZvmuZx1KVDWCwV88wSVDmW1fG3PTr6sQT5cXYyV4JVXVwhUumYk5XoJK36",
  "key48": "21bfnwocwgWV7zEXyWt3j6PdyVCo1mD8a6k1WLvxoczkZsPm6WK9oH6qpQuwuqEN6L1EQ9M1uPdyCtQGy9w68FNf",
  "key49": "4c9sSpFJ24R82QAJ22mAs9n3PiADMJCJGLoQKAjKLospf14Ai5GhxEtVCJEkh5zKedmbcZZT7zqbVen8NTzLX6R2"
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
