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
    "rExjfFTDUkmJpJswkmwHtGtU66MHrYASgjfN2Rtk8mLMYdE9a3WeP6s4ELXqzGXZcw2DLZHZyUw7vPzca34B2hv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22DYGaebmtrx4azZx6ECGngWxHdRL2exrKG9TwzVeNX3PhdCGDeXtEr4xPjfvja55KF49AL37RmSXSMequ1CY9CL",
  "key1": "2nbeWoKL27ZZotMBGuxrboXKWVYun62WaERZ1nMU6SVCWWZTTyJjNA6PRGJYWY3Wukjh7ACe8ANeN6ognvGxogRy",
  "key2": "2FxN6GZr2t7vwmErAytVofZDFwph3HteH4iwYqoqnpFtanMZqokRtrEhTD94VTxuTXRxcZX2Xmg2QLwHXp4LZgad",
  "key3": "59Ue7WPQoEryB1MMnw5TWHGe41ZDrXMxns3AHVRwJgjqRR53gozSw5DKHgyKHnLwiGLafWEkCs3irZYTB13hDpvG",
  "key4": "4b4meLR6V1sscZx5QV1aRiAPSD2dfrzM46bioZr5qv3VcY9KacvP94CtNQnLJALFQM7M15yv58tuP8GydC4G8ERS",
  "key5": "UQnVDcc6jjSZw4ABWdxzpRcH9ymbMxbJAvKjkH5r9u99CPnaJh8NRquFpoffU1a4qyJx5j11KSZNCVdAzU94bfC",
  "key6": "2HeapSKgZDNFfG1xf3Anvdyg7VaTWSudDEJinamrUyQgvEM4DJk9YGCtDiaHjgwkn2pZLxCrhXBe8FVg43JtcGQh",
  "key7": "EF4u7FWf7pQ7Tz4RDSbkguwDGNZKo1zmsPCRXUFYa3pcmLmjbX2KgMsxRrSfA9j9girmzJw58dKytzcF6R4A4BN",
  "key8": "2x6cnxuLzExAJQrUQrgoYmgzxHLaSsByvV5GNcBBXa3soEu8GzehsfMR7Anrq4329mS9WZC2s7NHw2PMeFQ3sAWY",
  "key9": "4teRCFNc6wmc5xnRx59ZbgKuQ4TKLPqECGRSySfHYpQXLh59E3bPR2B4LcyNrb3Mtmobp6REb9j8PZxAnhNnDuiQ",
  "key10": "4sxybGVUHiiS7ekaCshpwqyi87HQQtCNtjyYq2AfuTNjSvV7jcPfKv5pxbZ3Pmg8Qxmsfe5bVborevHuDYRvfBxr",
  "key11": "4QnQfFkLgpz37D334yp6SP52p7KpmhysCtgBCKFt4wDvxzNnqYRXCrynGgoNs2sQVNgk6rgLvcaPm9i3iSs51xWq",
  "key12": "4Dk6TzwbdqAxjyGKJaGaXjwBT4vEtwWJzxqWTjK1R7YcKrHMxJSwie51F17Gsx6h4FeW5hx5iYjYhe7DdtLz1zbh",
  "key13": "YKXYGL43PBMBvWwTP3C5zGQwrPuU9RhcQh47Fdr6bosHxPqcDi3dj1f5DrxuQozLPLvK96MkKNhLbuQVgc6Jj8t",
  "key14": "2bZmBxSM4nbKzHUX1NGpVfRHNQqj5EJy3pXyBZrBGxqEbfrbeY4hXKyZLfoETBjizBxszZfReXqUaCgJgJWCs7ks",
  "key15": "3Gkm3eDPYoMuN8v4Hp5Ggg6Ss42d6kEyrq4dGVQnxhdcdNSDgVuGsu6V5eh2twrBF5sqnV72gVe49M6NnfXCLvUp",
  "key16": "3C4iwvozRcksnERBASLKdvFdm7Nwx6oHrgA6Zck4EoiPmBnCdFqmRTTQvuRAfjrb1hxmQhKnXCe1FtL87oBKD1RQ",
  "key17": "2vvtyRSayunVfu6Emyp2TT1g3gBJSnq2TWwQVxN8onD2dmeVpMRSyQwT7AR5tBFLMKtja8hijVgScqE1YSGQykwP",
  "key18": "5RfRZAAmBBciw1ByYbNp52MyX5Zbhz5N44YzSD8TUmR2aairTc2LqruagjdoWesENsdC3vKjhDLYtCdGHsvvcTe2",
  "key19": "N29ZtbpePEdmJSRAuAyLBzRmpgYSq9CG243GUwcRkNkJx5KXrCZJ7ULKiS4dkgPvkQXdz8ZMD5smBeGJ515f74D",
  "key20": "5FTaagJehhhba1LNUqKNcH1jgQ8HsoXt1q8sfBPsMXwYfLY5EXk7prd8sWS3TyksLKNSE3uwv7nvyKfLnU4DMKJF",
  "key21": "4HvdMi2ynEjaBt722HzSN7qT7WvRLx4tJAysAkmuLzGpv5RFECT9NFYdKaHJXwpFAKW6Vzzbk4PRgvYjcwtkEcpY",
  "key22": "2dHPguMyjDUR2k7pMgoWCKHDTBLNxb9PnZ2yJrWTSo7SNckdEbqyS5ULm3jAwRhMirBsxDScCKUue7Wr5hNC7DCV",
  "key23": "4V7yMAYWcDf1LF16AHaBzZaBAnsSMJXoPsZ7uSaGFmgfiojVLLhwt1wzJXnriaCGVmAz4EmYFPUA8KDHgSdSXGGc",
  "key24": "4tucsWgZmkmCDN3ndCqE5MYQedZqD2UDnbk73NVYr5QnZGcEz33SF9qR8Q8FLfAySXSRrZV9dATySCuCJY3wDGZ6",
  "key25": "4Fno3oWVanKky9iqwyz3hk55Xn8TaB1Aje6gzmzmehyinmbpL61em7QZTFPUkrbesFiJmGvB2M2uKj8NbisFUJQk",
  "key26": "3jLunoNUzso2b5vYkjwxrRcDbEzNYsmpe2ZMn7BwihncCb51VjnAfEFdsggpw1pQLyua1rn22vXGuDp8usYVMUDQ",
  "key27": "34jNvosVfp6fCHSNeSG7pt8qK2RFDdAnsZe9oK9deCq4dnKXXdYfYfCGHzJdCy5vzEpYY2MNfPNSwQnRk7TCH65d",
  "key28": "3CRVEidys4Za2KVHTV8tQguQ9JksGpHntEP1fFGPgju9dxun8iN6wP9BRa5CxHcaUsdELJKs3wNUdN4AHvm2Z8E9",
  "key29": "22rWf3iu7U3QNPbrFd6kVGLFdxty6oiyhSej8roP1FvrBTPFcubjABHZR9GA7FT9Y478Ea4oJy9uz6nNnJCdELQs",
  "key30": "2MeA42h1nwtQrgyuPyVaHu22QcZap4oVniGdJTywVT44ZTi8BnLuHj4p77RZrNqefXyxxyjzKhrpijM1xcgKJsHJ",
  "key31": "5AsA3HvahL7xqwYZYwwiuSXJwGkTPQokrX9hJC1j4SvnHbiEHemCioqerY1LaB62LjdK7Txkz3JrJLcXfMGAQ1n7",
  "key32": "4aadfm9RNd4RjEGGr4GE1dvTE3vnbyJSxycZkxivP7oPJcBi6NNsNJ95LxqSkcFi8mHZLQHd2R9XQc85pBjEdvkD",
  "key33": "GFfaoWiVUFJhWKyYSB9YjsU417gF59i54eKvgPks73mXnj6xbmGRPg1rwW23avWsHimPaBkbUSbRo49EdQGmFvy",
  "key34": "23HCtB2oR8mueq8GUdYfsM1oDRdk9ePVGCQLXXcPFz89Z9borF3GD2tCSrwPFGbbKF9AmiYU2ayoLkg6e42WkY3k",
  "key35": "hHyGHABpiU4qwg3Q6ThrBCKpgsUbuA9NZTE97V2A6ZgSNHttDHGNeX24PW6QfM4cCEs6oQGE1BnnKb6pnAUE3Ng",
  "key36": "C2dK3KDt5x2iyNLYkd7tKNnk2ymCbwkLZxAPysLGb2tnLohT3k2bK9eEL6eP4bHvfqLQg69NSSLJbp7w4mRDZ96",
  "key37": "5DXPzeXrRNyZ2XYRtD2PCG8Jp9ESs9TVdKQQKvne7KFrKvMeyY7xh4zRrHJbf3pzUESEC2kZ5U6eaA7LhX4Jpd6W",
  "key38": "38SmMMX2tNA6ZZM8VfhRMjNLd3ENSFjB7WecweEFZFNzhmTXk6a5aoubY1ZZ5vetjpobuPyabz1NkpTULNsPK5V2",
  "key39": "4cdQ7NmhyHuqHrNX59axTH1VxADAS3Wz65o9zWSkQ3Z5Hgr1CsZw3j92M1MBitLbQ99Kq1Ve2H28VjSqDHMyQPgH",
  "key40": "PUmkDQJfjFCrbm7SkMCGVXaQi3cwTcWBVgBh6TK9zWitX4vehRYR1d6vZPAgmFaCpARrQ384mJr9bfQZGqkJjo2",
  "key41": "89UBCugNc3EFCAHzHKqb3sKL9LJkn7kvxeMivMgXK4zVjR6pg2tnzDGNGTZn12PkNY3PovxpuZAdXPYbLHgcQwS",
  "key42": "2Nbhx4T56dhc5xu1wyhptvcs9H4T2jGgnrGjRo7ZrsXGH3oDfRz4DZb7HEFasr7DpASjsG5dt3gdaSiairTnKDCF",
  "key43": "3r9WLaYS8ANdEp5njymyAqcBCwngfuRG8FEDcFv9zGN9rgvmm3bx45WuN8kuPSHNnhEsNVqK3Fnssk8uhYtfFDBC",
  "key44": "2enot2GJpQrk4DF2cbdmRD8DtVb2iCLLi4sRMxCKQDRDDtjQcEVJdKmvdXehN4RJudyWSTtGSaN12jZEPDJsbo7J",
  "key45": "2skpMfNLto9WZhrZnByf67zCTyW4giJWj3VMR6BRVSAuEpnTu3CpXTbFkPNdDBx5RkV2StYDLHvgWcjMsMADyAe8"
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
