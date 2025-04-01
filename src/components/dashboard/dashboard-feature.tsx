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
    "3T5KD7tvmSAyWnDKvnj8PvsJjXuih1245xZnxMq4D7LC9YPkD489kYyn7YZJnShLvfa5HxQmtxL37QGTzyeuujQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K1RK2hYu959HsWx5oNBK4xS2M6K1mBVjzxpyVhDxXEwbVgyShtv4WkhgwL6Lq8p5xtg65JCF5nHhZqNGB8tKQHj",
  "key1": "4tK7Tq9uzfrf1v6co6NhtHQaqduMv7yTXEtseVNMpA2iYT5cuD9jgMaCYew9JobCGGQavMcx2QjWDtuYUKiBxPDw",
  "key2": "2LCgN3ygeYZNNAJwGyWgYBBRnRrdTKywL4xGVUwwZVEMoPbS1fQTW3J7dDLmzvp6w4cntURfEp8PGkbYxRQuMZoK",
  "key3": "2o6Yxzzc1TjczvG5CJSSW8fZEDQGQxDt8JQPScFdYCP1onkdqyEoakTGQTJ8snkhsYoAW2k6KfHVrJuwrVVhtG1g",
  "key4": "54EgEEjbfDKe37TwiaRzzhBwKYjo1z7GY13HxX8X2tBKJyqxgfphCtaSnDBPwcdPJYp6Cu9LMdBjZZFGjSqK6ffi",
  "key5": "2p641JDJG5btpwXbSNPqv2tdJVH36v2HqnL188M6hHUQo5jYfWsrLLmCZdbdiSFFiVsVzc6YhQwhZ2971c7cMJ3n",
  "key6": "8jJjU8oLxmXEgVtBFdRyTurayiiWj8uo4gf237bhL5NA72tchJGz1NN4ATQc2tecKotEuj8MMpqguTE8Pf45dc1",
  "key7": "3j1G9yzXPFykEfmZx3NXCi55M8qhWS8BhdYc7A1hcPgHfm6yrsMr1BSt3jM8vkiY3cwYeeq4fNMANWGE7mrcanRZ",
  "key8": "5W1DgPm3u3f89YQf1S25os1M8H8V3oGbGwR1Ks1nHNzA9EqkwJnHqKy4A9SxV9JWqbheEsGgnAcTPz4ADpTnSQbo",
  "key9": "4kTVzBy7BZGFNLdAsovX88k7zL27trMFzjVgSLiF55krHgD13QEy3Nprir4aizxsekQUwZZmwbr3kF1zcDgo2xny",
  "key10": "4GiVPyAYkm4xBHokUwbgAFs2aWcYikDSwsB3vndLjJaaAX6E4KfQZ263yBT7dF3zfZr5LmDnVRuFGmnP46WKqQAw",
  "key11": "3gQK6kk71jxUyZLh71VcnciJxwnNrioTuVdzHXehAEe4zQg5VZfuaY3Bpo7EQa89Aqc6nuihvKJNDUmrJgkPstAP",
  "key12": "y7pSBCp4RpQjjTFPHfmyxFd18JDSnK11mhQfgGghqgHpXwEwy6WP23JcqDWUuZBsKnyvqDmYYgsncGDWt2JLfjj",
  "key13": "x581C7bA2fcK4cneCRuTjF7NesXy5S6awATnChu3znjW7krPW7iRu8Yy4AzmTbtWZrpw2V9bVfqMregzapxBQXS",
  "key14": "4EgnzM8XqsaU7RyaxnmxBUvssFqndQJvBmfzLBDqLg5Wrnbo4MCxwGFPP5xqgk1Ta9iSPdEY1YhYXtfJJSexTzXA",
  "key15": "J7JoBc7PcFgBjFgUFc5JAU9eAoVtmMMdUR7wMwMt6z9M4tcaWiHZNYCygZYQ9kGR5MrFehPoXHo7JKA3Ub5ATBb",
  "key16": "4M3rnXwgT5AXrZKPFm5mXTRh4sGz8T6MQ1ugfH21h9dThZLcw9nnqyGFuADLSsXVPwXXJzDmHw6PbfgzNxyueB1s",
  "key17": "5Yp8wPwUktzHWTqhA2ens4BaDk6LJBCNPXJFWtkniQvXVsguMadZUu3YGU6Byq76HKJjERigSoyrtUeRX1nZp22L",
  "key18": "3a6YGXHXXQ2sR9pQ91qX5usS5wafgU7wHw7GzeUZNGC5BZhXekTf4dsYUCPgYJgrnw8BdqgwGCutz6PQ8MTup98n",
  "key19": "3rkL1X2UTGNyqtAjR8SvrbyKy79LFogb1vMyARVwCupptvrjUF8WANPkxQ4T3nFmXmBDmamz63GDFnSwoxdYdgtB",
  "key20": "3HqBcuLvknVphCiskJF4p3oJMPrxT1SwW8eMyHKBp3a3RbXJorV3ZTAWbGkEN4CXSEdp62BmLgepgZmNJ2vVhT85",
  "key21": "4dmWNv5ijvgHxVmYEhFihM9EseGN2euURUSPbPA7gvb4fCYGuFMWD7bhbzaVBnCy2xD8UUXpfhMN61871EhSdcE3",
  "key22": "4RjJNmMkqJu4774zLYo9LphH1cp1nGyhKbLm7mBhpRvdjsYi458NPB9BDM4EGmNsDqTq3HwxbpaB6nhzHbsUzuEx",
  "key23": "2SNDoP369AdzPuApSKfZfAFpptnF4GAJ9LyQ1soWjGLzzvLqxzQQLna6F4Tw6MAJ7zc4ifbZHrxjcLod8MrzNDD3",
  "key24": "4aKDwXb2Bk5uo9LJ2PJrTz6D1CrauH42WNDB46aBezwgpu2DbwSrGsy3HmBpJfYEcjXdU9cdg4LjdrPw6hAnTCWm",
  "key25": "3QF3kWRynQUDE42yXo3MWVyJJekzrmDf8ny6aykJnLG82S2H8tJPCEpyJX8D4QqDxLJGi723yYL5kzoQovQb9ZYx",
  "key26": "91p1b5tRD9exMVpJPVHcEawJ2CzVZgN1nyVYV3yzk6soRC94sN8S3E2GaErXLcvsV9VQGLcBU8C1dVa59uG7BuY",
  "key27": "YxZBR9coYHTYoZYeG46muYPLuLqPgwu5E3dDCvSPUQ2poDPxnmdPmrZz2qhTXrMxMQyJVyrMRBWuTw2fawsJMBU",
  "key28": "3HVdE2zUmVUiBFB25umVGPbYpZuZBdtoiFErhy14HY8cpdHeVsP6K2YwA51MaRDkuUwkTk13QhceaDE8U7XDc2Ky"
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
