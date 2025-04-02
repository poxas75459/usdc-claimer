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
    "4uo7g6SySy2XDXxoXQsoSpByVWnbRRQHXhuHFrF6sb7Lme5ZZe9671aMr2dg62SXgoE1cspHcKE9uekEQztsGozE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VvMwNPGS1xf6TGfsaCqG9jnZS1jVsWDEyHLFM6Vt95dtCV7KsnTMupe6jWLZKDWTjuLq8aEZDL7263syEmrB1gT",
  "key1": "5VkhnCeVmdCY26mZxARUFYnve65ip7PnuPyGBVsLqq8Y9qaUPGaMkj7eguGm3t87Wfs53bh3zZmonQm1FkzN8sEL",
  "key2": "5dfb66V12NdaM7Adm6RZ8xMrABDXaLCBR8Kfg6JVwvte6GeEeCYUrjcVMNi6qf3K7wbXJXGC31jd5izYfJ74kxQQ",
  "key3": "5gouLnVMsxKrPTjJifJpjxJ2hi942qwJZNUXWgF1Yp2kydqXARbXgvjHj6dYvD4Mbeht8MVbG8ton7yBSwVQKSjm",
  "key4": "5VePNuubsf66ye2p1Sg968Y3Hoz9geWSJWKXg3t1SREDKEthWYooFUHYegzPW1yCiPdfm3pbUiYp6hRC6YrWvNoq",
  "key5": "5Pv3yXdY2Zwjb4b2uvAZXHWBtqAYjvqSq27b94e3sKxdyHLzEGfdhuNAq7ES14ZxNXDsGUfR8LJpMKb75m1aqLuG",
  "key6": "N5HM6CzBLkd2b5yPBWFtFy2fycWLmP7sgTCjADpTGufHkTH9Fwo26w4DAXLJvaVzdmVUZmoP7hCA7SkMaepzTm1",
  "key7": "5qAY4bcxzyi2PkmX4vZDSEsMYAzh3RNEF1gvSvrNeiNRPDUYHirkpJoL9TdUwZbubHMQVKuPBDFbKZ6M7CxSPEMD",
  "key8": "5D1CxK5EufRN2NnQvLAKrycMUAj4zp2VVhdLKatwm51Y81zMgb3fXsVceF9WbRQTxjjj47PEZ1nAXSBxGzeGLXp9",
  "key9": "28jwDHwLs5GhuLHQ3bboAvE1tNie453G47SKN1NtoUZF23w7yuPfB933NPxu2mvs99QFBKWXXA3dJHJ32Dh2jeb6",
  "key10": "4P53Nq6AH7W7UEvgn251Lx1esTJbjKokshn6rv2hysxp4JdiTS4gLrx5c3dDYzieMJvQwYLhce2t6yY2rwj5c1TE",
  "key11": "5UvhMdpw5JjMdTSGT4q6j6e8ykrDQYpEEFJv4p54o2ddry62K3MLWSqSPFHipmwpqc17EtCbDXocrFfojo5iYQeD",
  "key12": "4G2qKCdMsmWPUPHiPe7qTYKSnD2R99Hav2et2JqZP5yhrQRKKJVs9gJpPUC3JcA82CMcu4Eb8PwNad5ZAJs18b7U",
  "key13": "GVGZBGcDGbQqir4XyZHR31NGHhKq6kQmNwgQmfBFEi7dzHGj5K3sV2GvXaPpX6uC2ygNkTCYnYtyoksZ16cP9J3",
  "key14": "41GvDHmtYJYanVzKxKfv2ynafsrgXArZoGMP7qKmjWhjDFsYYZuWCYMfjXRDLVjPqUzJV5eHS4ti37iv11Qn1zsV",
  "key15": "386tTFydHdF7TpTMEFVNbkCmd6idnS8bthecVDiNimHub5dkE1Grf2Eqp6byrKRAZCy7TknJsaovNXTDLUDqsu8i",
  "key16": "4DqdkWt4YiZo1NxKoM3GWq6VqbwTas5ZB42yLLqUurBYLvSxH4yVdWvE68oy8u44TLoaKwcVL74iAUgHDcjWiPvr",
  "key17": "2uRXytmN8sr3JSWd7X6XaNiiKjKfwzszCzDVYsH91xNFENtmbnm5bR7jSti2bAVucYKWEAdmhJf9T2mfEuRa3PJ5",
  "key18": "4iDhneeAyqXPNDoHoqApV3Ny3SaJpjQ2P7fWBsFkb7BWj2Ftrs3ts3qwJvghqT1oVQ3P5vXPeuE1q9URBSdfoZQz",
  "key19": "56QMiL6dMbmUNJzzU6eZ6iQrxDaMpS19ypUVSqfufioBFEiHfrvtWtAv3y8Ao2M4DQ1uVv6i7fZXJHW4Wh2JZyM7",
  "key20": "3xEoN6qYoe3zrxognFLsUEbH4CvpvFTQsrRoDanKWA6cGSUbC9exxJwNTEfdNveBouMCiqCDYAZC2Rpj23uQHN2K",
  "key21": "49szCbGg3Vsi5d15LJ946azzZZFFJPfiyq6QCaDTcgALEi9eBeNAW5ShuUYPFAsyw3aSAJJmuAofCdi7Dxhsf3Sf",
  "key22": "5GAyDkgd4h9usjZdJVb5gzLHfSoKyENcL3rq48hjkmxBnnno6rXgAz1dh3e8dYmTDJVqaBGnxjxbSgscqfZ3Wckr",
  "key23": "27Ui66ufedZMhGVdY3tKv5UtD9uk9H5LcoMi4KRXcyCuZKFou1Bo8QBJ8Cod6bBeHE6QoD7ST3emQqYLZXYrwyDW",
  "key24": "5o7QShzqcHVL8WKbnxdQp1jPbz8SCNJf3LjZCZqUzUhQGbtemfGojBHK8MSfKdzghyAG2qDyZgdA3Dr5VXNDFWWb",
  "key25": "4KCfpPQBa4A6yRCi8TSNaVbgYDdXuedBizWcgSdZb6t4KYXpjUUotirM1ST3BgBCS8jN7HeEckBTapnzNxvmz4Nq",
  "key26": "Y1Lu8rGjMUxxfrQ2vxjDW4yLXchQ1xtoSy49sj7BmZSxddfkt1dMxUBndXJ4pc2YUuY4yf7njYWEpE6mqmac92H",
  "key27": "2ekaPfuRcNuVS9pC5eoqA5bn9m1BPHhoTXCRg4LzkKdEFCeUkct16xUHPu95puXLqkTPXWMEfdam8QtVGuLCEGwN",
  "key28": "vkX5o41QEqjuKPvv1mHVfvNTaSEvPf9oCRrfEMX3sMnYQoXhtc8Bz8wbVeYmvFRx7dKkfRTWV3rLT26owPToQmv",
  "key29": "4fs7XRMsoDoaNGG6JQDoz1zGzFNgrsaHhoV2VM2eeTv3obU7u3mwyTHFHABECmF4ZnKq5dRwFWAavanJZ8PLowpX",
  "key30": "3x9ethNBmsHH4NmAQz3JXLiHfJnFPXBzvYqRAwAgZNy3RZ7xbfCYWXN3BzhSre7CLaPpqBixQJheFeK5qonEdtet",
  "key31": "3z2w17Qg4d4BfzCQ9WnLjsHKQnUkHdWoHcFXiT3jpFBGSsGiS4d8ptJzq3V2cRY81BL8FTEVERUmSUN1qCJyLz8Y",
  "key32": "2ZUfs4Wzqa6qHpALKDavJbwnKrhtp3Tir1A1nXkS9PeB9QR6DXBSeah2Gh4zLESkk5WtSmkjs9LDaEchkHxWfU7",
  "key33": "2NNX9MQsg4S9pPkf5MBrJVZQ4FwJx6mKnh2HaRS1JsnnSi4ckiyXL6bGHFaTTonwCcZuPDLcT3kaa52hUcHDiUe5",
  "key34": "65DosCg6QsZjUPUTeX6pRMH5bedu7FJPdgebYxnWv3W3j8x9hjwq5yQ62yZbMEdDHX7Bavn9UQriTW9bteFLwTfh",
  "key35": "FdBFAfSF8rvHfxiRHW3EmY6ah7D7tuwVZR7SbU7kyMSLBSZV7Sx1uByfDGx2QbHFzXvzXibZTuQmxjTWm6F9nsM",
  "key36": "2SnLLfrtDVKLphHE4in6bz9Gv9ei8XYSoGAjm9pZsfTqJQVFtsvnPuuG5qe99yfhTPBkzMmYZSsAtRYEBi7c7yWK",
  "key37": "55PNtKj4EbJykZagu31XLmRy3euB9d8ZwkwPMvLowyoDyFpwKG7ja2twaHsvymzxD39TVSuZu1ZgH1fTY56KBLLD",
  "key38": "2GkeDfsKci6byVwaBWKztH4nh1Ju2iMzk7zxpjjJ79La5jsQhs8Y6BkZi9rweptFv1ra6o1QfEeHXtpm56K1YPae",
  "key39": "5HEnHts11cNDWLj8xffYz3XHTFFcLcmrjqJoqM4xezoNSZwSDnNZrQyiYKFxwsmrKEH2ZudPuigceRRg3SRoECe9",
  "key40": "5dWVh9kj18bPNeRyf7doeLGC7fAuQuDQAUbYfjtPDQxALtTCZ6yVDTPisqeoW8aHziFRB89sYSRP9kLU2T54KZaA",
  "key41": "37LufHsKDzk5CRUkk2aQXyD2ZpBX32AVthp9caFgDKXvdbmh7CUxVEFDy2BqgPmwYpDmSCLwritCcUQJMDjQ1ssW",
  "key42": "3Ly68qErUUvqnZE9fCJhhmtngck3nUc3Lc4hVnen9AVg5zt2J6HYoYxwjEjkvjWcbDKXMFEEenWcDhUutdZCT7Ea",
  "key43": "5mzQ7rZhHBrJ4wZEfkdMHJ3eJ4oxfY1E9sckt26ntpoAkihqW9uqiyRDSizwVZmbAPi1u75E1iroUyZhhVWXsYma",
  "key44": "8Tm14BbDbg5kFdwf2AuzEA9orqSNXJxqn2qenTxSexSKRrSHpuPHJzZ2Zp2BjHwcbSquyNaeWUKZ28D2PDuKemK",
  "key45": "3XvxPMYNfpbaCykyY6jh6wMpn8gEFeHsKyRQgbydiJ5YkNVZvuUrymaN6PCBcUnYMA7UKjCth2Y5ToYVaJdTGvkv",
  "key46": "5RQUc5tjPLMaSf9PfQzGTcMMdEsJAydtgNVwwvCeTgTYRHKhuiDQxJxjbTv4pGnah5MfNyxvPmy5E6Ks6MjZetTR"
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
