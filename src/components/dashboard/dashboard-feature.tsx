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
    "35PE4ccGVwtjzEgiy5uFUWLKMcurYeRKb8yKyNzxa78LF8uN3ZamAjkxsQ4r2osYFRirHAFuLBGou8BpRmnX9j4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pYJ82YeAoJdr6uRQzsa1x1d18C7ftFc7JMypNYXcSjptLVXRN8jYrrJ7w8jP1MqmVmTx4oMMhuskdMfn5sC1wyr",
  "key1": "5DSqM2CAqt9JZmrAdrLvgNswfNzr4rJVsuw7bQ2vYLrQ2uEL3eqThi8fezEHQSFx5z2H7cxxG7poXyGGsbjjiMDV",
  "key2": "ukSRDcSDPbz4wMe84Pj3CxBDfdxS6Kn3QH4Jsq5hkgKEdvxsemykasRCRd7EwBoSaxnHQSDXh9FnUEbQtwzneK1",
  "key3": "3pgXE4H9REQb5Nrpcg3xJCSLxQsWE4kK6pbSHWS8A3h4Ty5VFAWUg9CkaCa7nohcdhKKcc4zRGUAasU9kHuS5G88",
  "key4": "4gm2kd9m1dMyeVCUZxwbjSzHSvcP6yErHGmbzotDGQN1d7MrJSa1uFxdU6zvAewf7BTNU6KLw8WGLk48xoWbZrzf",
  "key5": "AMc3JX1pqYsjR7G8mrY3PzQiFn2emRMv2qR2v9zMQ3SgurWFvGiFv3BbKhiP9b2pN76A5yN12ybdPCWSofX61Qa",
  "key6": "ydBJLUQhMpMdwSkGe8J78fing7GC9uvFzXMBnvZ5kYF4Ceq8D1Ky21rhZAGcfHxcuvovUGdGguRkjXkpQEokR9W",
  "key7": "3xQZEJpF3L4yVJVNAcbzY3Z2H9mj8WqgzNxsPbdY15BWkAgFbUTXurwEXw55mj8g2Gt8XwoP2vaNJ5Lf163YdBoC",
  "key8": "2nUWzcJSikNhuTpRicXHTshXnkbs1UQbg65uDuseAtmzs6aHhyAQbo5ZhNARAnBahXzTiAP3bM2kavEZ59Bdgfux",
  "key9": "5KwDqUNrrBkbDvSvxw3BcCpyhuR2Rw82YhC2kVjH8xbBd3HnaKc23rxmUpS8fh1rKFYqAcgyX6WLg1V4gfVs6phh",
  "key10": "CHh1VEPhA6wEQBTwKVRgssCHUpaHcWbCuv1F9onerMEDoFuibeiNtx32VVbHQPcLYbT9Ro8dwnufkG8brkUS1tW",
  "key11": "5QkY2eoRwwbGa8W9vGTvBrwx3DeRWB7UEWjJp97oegvCkhDH667bPb6jSV3tys6gwfgCtYPie82spkAq8LPM1xGb",
  "key12": "3ankwHGudtYAzTmfuk9BMcWzecx7nUBoRvSPTZqZoEeSGuBJFGAXQMuRSxWYokxzfd6cf1xKVHncTrWpsiArMBrc",
  "key13": "2SUgHP5hVxgkNoRyzHEqvgQKstM8a18VCRn6sFxGn8VazQyNnaZGW89WbAsSUCpuuCCvhzwxRGSdhBeExoqDECoq",
  "key14": "4xY9KdBfQ6NhTYpbLWEYagSubZ71V49QvY7i3mrZTbcAWviTz62JgxqrPERwfsk8xnCjX1cJ46aV4y2CP7Np8Sga",
  "key15": "3YkYhDAdQhv6szf19SBgt9Yxk8yf3yqaGx3iciNJpSrVrzs3YtzpwRfcLzsBaFuCC8Tjprx1ShTkatx48SzmTeMe",
  "key16": "62MZ4GSMPxXMXRWfGdTwxUbJheUrig9PvY8guXwSNV76GjZBpvHfRoJNgXAvP5hwBbr1Qv2nCU4nUU1mBJT9igEb",
  "key17": "28XUbAjjwSsopZQUop64ZgWTbR3T3CwN7PQremeMtB3E4FaU2XjsGQLWj36bMWwCausFH6CokPnM9qxgDnYUe84S",
  "key18": "mwy8LaZqK5PCn7a9PdjMyWJfjm5oR1MoXKWoqfa4APPagaFCR2BDuns5MsBTKi6Nn2svqXzxax9m83WQXVhn9aN",
  "key19": "2pP9No74RTAeT6YRWSwu8ejKFjWjd5Xj5fnsuVodsBUz1qGCG3k29ohF8p1wTQFBK6V8CwwLGq7HUSzoai9RU9nj",
  "key20": "3iurp69jA8fQqbHDtCUuHqCSvYUeXsPfwvQ2oNxcFPbF6uYsJwRk2ZdjaFpdwdbXNvh86qJHjLH8C8W7RrQd5cqt",
  "key21": "teX3tDc8qXeotiLWTGqGN2QvJqyKYP6s2ELhvkoYE99ogzo3Um86Nb6M2wn6ZNFAsQEPcDiQLrtNt6WmB1QTLEg",
  "key22": "5hRA3RNqqBguU3Phuxj9d17ChNcbrrMDDRq7VC7ioe1E8dH5pLP2EWPA189tXcgvUB2tQH4xqPNNdEmJ4fpDNqYp",
  "key23": "fnTUGWopWa5tBNaHDyNLjcAdYnpVuBH3Ei3jx7NzB18KVWTN1CCUWUxdKzbwda97MqoKprbiF3Ld6FAM7yBWrmp",
  "key24": "48XC529gSUj5KPdUL2xCVTi8W9CoyvhJ7DbG6HqWCqQyNNRG6E4ux4VYt4VKqxXzaxZJ3EW65DjiZSzc7DiQSipi",
  "key25": "Yt2TM699d25A3AUcagTSJp1u2FK7PUvFqREpcT96i9HotLWgM26YhPYcT9qKFCzg4CkjkSkKyKTKgqwmuPJkVc5",
  "key26": "pUCWFon1cuxndZVWchKRgrEKB2p1wpiAunbppU6biRhvj5FWRZvWgqubwE79TJJPTtZX1DC3gCM3kWbNLa4HeYJ"
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
