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
    "4AFM6RabAHXiTPCx92PZVxDCwynHe5r2EXRzHq7Zf5aM9Gk3LebhAxQrVLFVGNrv9sGJA2pVsPM1zUnpoN5gpNDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d1WcCG6ApxKvC1un67JJcX82CbZ75xtokuQJ4p25VvEdJmzAkm9Y7fgHrrbf9PnKyk4ARnhzWXPxgB4S4oFpRmX",
  "key1": "ceZ2ifWnoahkbFdSN8PXTh8Kb3AaQSR37YXuNREAR7ZwdkTJu6FwG7KXWBE3uNabPi3h4UVu3deehNymEEsnyaX",
  "key2": "2ytBX7cr69RisAKGGpMKXVQArZiQnHqg68K56AFgeoZ5o9K6P2ZS6fU4tsxmjrnWXVs7c8gJnEVkfizfipXqLAvX",
  "key3": "44iGVND2CsKV8Q3mWbdocGdW2xjMbDfuoLy9HFx8976BGuYsujrTmwLGyFNQscNDvs6u34Wh8jE3CFtbyomfk5Hb",
  "key4": "5q7eSMmVZMZ1n44NXH1rsmZupJMXHuFKXpvp9xNfMQPRRgTFiKaRaX2Y4s5RxGgEfFQd1GLwoEoBfnkNJHVVW42U",
  "key5": "4wv54W9L8Xy1idyMTg2R6R3kdruRPc6sNYqd6VEPyMq5MtLZdTbQV8855QfhnkejDB5ch4qvUejRNwB966XewKZv",
  "key6": "43R3jTZub33qG25M26pGrd991mXTVnY8yrunSTTCHRUvGicXMiZTPmA1dXktu7CviD4H4KNCR6avjh5Uss7wnmkS",
  "key7": "3HoRjbRyCZpJ6mj9MAPbo554VpRZk6LkWPucYxNt7YczTzMBt6evZQjweXYYMBg68JHHWcCLtUDdHDYQaN5FjCBs",
  "key8": "5NzerYJxnLugxU7GzdYsVgWjtMsL9ffSmKpBTJes33kk1qk8XsZwfKgWPmdqizcXSoQ3eZWKL4VWJkrMdBtYMn5K",
  "key9": "Q3pE78t2xAr5TkLVE2tCYViaEfdV5JFktpborGBbTRG3FBMPgxQVW76whG4bvwXMJU184RSKtxMXD7DpXip4ewc",
  "key10": "5DaWrXc4YNzFpgNXayjQLnRT5N51YXh4qYvHfdVszM7P1pzDkcesL5YmCeQHL1hPKtLGM9c1qb5dvu3rY7iue6Zt",
  "key11": "4ar1ZWd9QGojcUMFqc1xV9b3vhmrUQ9BMfouHmwgXdkRBgM77AUWCDjWu6YcXNH3oqR6apNv1acze4UQAoqAi5uZ",
  "key12": "4QKu5mxjJmcgZ4MLExa6zeV766t3xPP9iqSrHKSj63ieecYTe4WAa9z2cNpq6qMZpS5wKMKAuJb6YcVEQJWENsJw",
  "key13": "5C4cCryk15r4xRCvj3FdsjZsd32KsarrQh9vvHRuHGxWWrN4Fy1P6MkDzQzJipmdYiUJhWwm9ziyFtPHQEAvwDok",
  "key14": "5LD4Dx1HuGYLCCCwFSxhWbES2TUhMqgPVm3SYn6t7L6C1SusGWHgYrddnDENsAGbd7m1PXWVYri2a2NQn2yjkEiD",
  "key15": "4XvqTb2f52fmB2swMsJ8ZLkj2hwN5couf2dpvXphEmHChx2rFufV1PatxsYz7bTGgHwG89T5FmmiXnZxnpGmeHhx",
  "key16": "5hiq26o7p6nN4uAEH53GYN5MYu3GzFLopqQQY5vaAb9R9wN6rcSGgbmceAGcSd2MXKnTfXENhdHV9ncPgjDqumF3",
  "key17": "CgN3zZCJXcMkq7w2V4dUGp4UBVe3NBkKY3FDmxCXAxvL7hdsPgSAbjTFh1tS4LKzKveA5DZYWoEs7QU8PLT8JCB",
  "key18": "26Y59VxHABYmGfRrRLhet2oZDANM1WEqcWWaEcNTJBG6iiyp9y99Av5qSpSG7EE8RhWpYCmSxoVgriaFR8y3s1YU",
  "key19": "3QZs8KuemPYD6u4Rk44oxNJbpMyMKP66YTxR2AP3PvmejUKmm6J2XfwAWVrUzjoM8RPfYw2CCM47BKgBHttMdmN2",
  "key20": "58Jf7U4SkT1LGnZzVTpKwRcgK62YdKJeyGa6ED4gTuLuJr6FWe7iDeq9wS3aNNYPRkZ7vQAeJKWyK3xsjBXzNYPf",
  "key21": "qDWGtbG7cPPtH4bxZNRmMgggyEENfs8EadxrvdAT5rKHrLh8TSXWiRVH1i42a614uYysr4EtxXG6SVRWsffCJhK",
  "key22": "48XH9btRkba5nD1zbVhjtdFp9kRdVausumxLBNtbQrM46nDkgJnUDJE3x5jVmW4fkWzNL5HUWJKEU4och7KoWXEs",
  "key23": "4CXbww3pSowP3nZHtgCdCGZ7amaPNEeSWnERTRBspr6Chx7TtaGLNc7ADdQLQ2uYRPPTCeANo3ufmjt8K3ogvFmP",
  "key24": "529WCmtzUWV8PPTw53Lua1R2JkZ9ea6cuQZtNUWpYkX3yWBzLD9dTGMd9j95buEH9fSY8jzPtUFnZzNpxguJYj7i",
  "key25": "5RhntsvzheuASe37MSkpTtEakpWkmfp9Xt9Gm9gNyfNFxSimCsez59SuJ91PyBW5aD1QTaqDTb27mCuHBqdzN2Cj"
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
