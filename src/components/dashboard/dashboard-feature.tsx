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
    "5Dqvm7fLZhost7HYZhiZPrNcZ9mr2N1evhdcAshmRUryPgpSgcPuxDTXgJgHseBKZZUyHp19UqHqNyuzPjtz4nP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H2Gz2EuE5paM42LWtzSXXTczptFyVNcRBWrBaRrjZ4X5qt3CDYL1ipS1hBftjxRseVUw62CUp3EfuB2hkKUvZcE",
  "key1": "2iQfmGto3xLVe2eVT5PD2juMPHw7mEp7Qw2Jej86pmGRCjhuUYStrk1gQQRXshEVEaSCS3HFktEGMcyfsNgQ8i9r",
  "key2": "2o5KC3wdnPhvmdJexmm76CRkpd34f49cDdKVHJKKDrdgU8eyb8ZKnAukAdNwc33dNRMBycj4TEhc3cUp76vK5cpd",
  "key3": "24WqAvdVuAx11hZGDjiguAP3Wveyi8swYy451uPp45fCK92oy2gQfgQqgagikWkjnb9Fhe27sTkMb34timpLxdRb",
  "key4": "23yPpHJjSpAQpDLopqemFHzXjRA3Vqi2deaGMb18fkM5oejahiGjRrZWibwuf338ZMPUjbp6RNb6rVc8SHqK68WW",
  "key5": "3ae69fvqhHurRV15qbNZUp1DJxF4TiJBiKLaYXq6ig9JDvR3Ry2tea5Cstm5PC527juwFvvcuNwqQPGN9wjH2w3v",
  "key6": "3K9ysGRsvJxHQoXfzwsRPj2APqDAkrjwFTWYdjECLmcN6ZUnZZKZHmpGMJmVKaHkC35FdBR4vCNFYpgdByKZWwVd",
  "key7": "469fyQuwMet4QDNT87xVTtaLVKM8EAWDmymCfyXRhaeCkEr5885gZmYzFeYyvw1Ry9k8uRhV9EXQq1P7BihVzohe",
  "key8": "3XsmBtKS64rbisXxhWsAp2YT1UsM67W3cJ9tUDCFxNxadTiL44g4CSG7iAcTAFXA3Tz6zSToUeMgFGUoRoiJE3Re",
  "key9": "cGz2eAh1dBDmhhM4PL4Xxajf6Wv2X6GBSqo5TzbXcv3pBiGart2aznAEPcKNwrCjnE35d36uXLWfuKU5k7Nr5ii",
  "key10": "Yfzr2qZvm65XZtxfVBDrPPuoabShnFkTs6erXxTWzeoeCby55mWGdSHBLNdCdFvF8pNjzrhFUw3YToHMkDP6ASi",
  "key11": "5YFZ6YngbzQUQAgmSdKg2hqkME1f2iMv2PPkWcLfntCTMW8MaCor9WaYkbiC1hosS8EooYKHnonShRXqmcAnxVjF",
  "key12": "424yhzze5XSDFAwebZTnXY3xUroXtJ43HLMgEb2QY35SrGx1gj9YTysBthEZk5JoPuWzWu1uWFF3Li6b7pCN1WpE",
  "key13": "5GXhjZJ5d9cc3c1HKXiA94oczX7P2H6GYhmW9Rn5YK1yYevAg5KNv9dLQkaFfV2UdstprmGpW6haBjVX3vcHuBsZ",
  "key14": "3ZdDEw3HFYBoczr54qZLL2BWUqHJJTbtxz6NadVCUM9RHeEuwYSD26FrmLjXKFbvWoo8pFoTE9JdcKi3ChvmAE5d",
  "key15": "2GH82vYf6ZciMSAPCQcE9DvhrbkJdtbbUMDFtcpHFBsg5Q1ruiuLJC6czmtw9AzeAhtyx5KdsMdVtcSC36qw8DJc",
  "key16": "34Wo9uj2JngZKo4FwEWtc7AAc774KVYyguyBM1zoa4x9TH3hLogyqStGAEycxKGqMuWMv8qHq4VXMsbjM2S6MLBt",
  "key17": "57kMA19kUcD5MRDQHN882q18oPkpik37VX9Zrd87LfbNa1Va2AfG4RpmbLnTPQSiCsLmUkeabfrfBGpVrVFoLC63",
  "key18": "Lftc9qtNFNy3WQDmFE1fEhLaMReDTEKHKT2X6xTwB4YRCLnsy3qGQthoUMgMXMnRFEwsq3Bz3mSkE1KrMiSggXG",
  "key19": "2TWUESJCqshpptpgh9Ca3Jcptg52RDqMvwZo1AZHmbCPAAK9iBmj8viTSPcbkvrnbR5a88gHF6cYLYavsuTRup1y",
  "key20": "4mRwdj5Dc6zRQfxLEudS112aJP7JiPduGdQKTEf3MyBPdskzwtwKHLsBtGLt97GvCqX9dKz6tmwHc1CeCuvHriWw",
  "key21": "3MPLHZRCUh32GgRkNVDqaaWZQ3gZgJk1b9a8EYr59k6izL68GojYnZFyd7L8k8HneveU9iqphJyCwF8nTKDkSXWx",
  "key22": "qLVQPhBP3wqvMn5Af4afJKq85cfeE8MjyGQGgL4R7u3mbDDmQbSW6o2LFrSHUeoPQEe4FT7zD8u223xJeTqGjpN",
  "key23": "xQQ9cqpjPG9XrMKjR2uGWuozsQvQn7mjAjzojbyfHW6qfVVuJ54coVWWFzkuEXAoMbcc9ryfc75rwug3x6u6n93",
  "key24": "3SSNT8VgaerEaxxh8y4yZWoggMkcTAduwXohkwHax7DfG1EfbGpd8yB8qHLhiXbaq8mGAzTTDNeC93n7A8pj9EL8",
  "key25": "5mxnq8yJKqvTdsTDbo3B3NRcS8oeFMppBRTLjwvUwwxV1FuHuKnDms7uGgunwawFVTot8sE46Vqby9yNmnxZcxVw",
  "key26": "5EQ9NfXBkvgwQa8CdhhkmB67wGSTAFYRNMu9Civm7e4N34Nw5fp8C66VPXuWKnt5KEAZA9w2u7zwqttk9SN4kepw",
  "key27": "ZFcZ83N8RDCRgE7w4bgY3rVdf95d2fXXiFKFnmNgDCWVhvjSBtksqsWdsZtb55rSDDhqMZr76MTX9yHXjEhWKqZ",
  "key28": "25kyN23X12J2iAUieHDHXLRV5T77nCGJZwm7Scd7yUuZBKW1Vx6ygdaX99hscUG2rD3RffdvMHzfhiMtj769R4Md",
  "key29": "xUM8oq3DNubzXksKmRumio8ADvcp8ZMaFG1hzGzgohDs8KUP99vEgNTqh6ydBr8qdSkEHkpnsdP3CDboKqxLK5z",
  "key30": "3AXWQH8PcJx1hHTxpfWczank4L5ennifA78BoDtVpkJYEmFfnd21nURbsN7zg2o2zmaG2Y94WrNkfw5QQ1SRCTDd",
  "key31": "24dAUDSC5nXbWT5yeCSMGWiX2usubAgS3DStEdeL8pJziaEYzhcUXEdb742Ta6tQJ84Uo6CKcFJYNmpQo2a2kYEq",
  "key32": "d1zUxu98Wh7UBV5J5xui6XmQDdEoQJeHGaBRgEZN5PRaAgJByyXyR9hiRaWXjiuZ49F2gzRJbo3tPkXbFMZNjrw",
  "key33": "59gdo3HogrttBQG9jiw9dpJ3DD3HnrQwcUekAUdAJcy1wcqdeaniDG8TqwEWi7kfmCU3NickosehRt5d7hGyyvAN",
  "key34": "3AX6K9Jkpf6faXAataJiH4ygVvsRDeczbEGXGmbt8qQ7aXFMiLcc9QDEZw3ML9FVAqPwvVqb1m8AJGksCxKzsffW",
  "key35": "33ye6jygUFqNYP5UZ9DKWjx6Se764Sr5nQho8WDxLFcSXGGqsrC3shS3djFfrh9eNgmFf5DqTCB2kfo6ySnVQW2L",
  "key36": "3ue6dZZ1MqHpaVdYhdbh8D1rDKjwuvHFwdNAhKtWD8VzvnehWLjQEJau5c89Md8DiczpS2d5mGWQnPaXHQgjuPLf",
  "key37": "41hYCGPnWye13op1ffLi4z3ZPEc2ov137qBVWAVVAi2R1Yjh7Zdp26ANMhoLDGcCkdsDaeWzemb15k7k6sdVipNN",
  "key38": "3haSQaBHvh19sgsfbQL2CsQx6kfFic967RDnv77pdhJ5hv5Zi8cepV9atg9C18gsQNWnGRySF552vVT6ULhQEfEf",
  "key39": "5U15r76VfxqCC4p3s6hvCoNyp6BwHi1EPEL6B1cr7QDaLfN9Ph4mrmwNan8mH7YhZoCPw2L4eCwgP2LaTDdMZVbj",
  "key40": "vNrRsA24JiMkPc8zD3prhdYey88jDxhgvffGU5iNVxCWDaPPfr2x4Ck7fEBYuGiB7mqEbZj6TebjkU8y4hGR935",
  "key41": "4EhcZVmfERp5caqoDmmnnc6sWSEmzQwNA2gugpmV5xychZomoC9WbDGJTqfeZHREMvosgTXnnF8oxuSeGS1bZjLc",
  "key42": "5HEjscDSUtGFVHFDhbVxiN3HrgkrqUb76hjgjvLaxv9ykPhzNMPqfr36FBSTgcU3WKAjunVvZr3pY2oSxxaepbdv"
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
