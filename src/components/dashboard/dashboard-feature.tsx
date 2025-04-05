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
    "5Jn8u8WTUE9JYVPUWejy5CEh7QdN7H5PZA8aVEBjShBsZ7xPXPkjffRzswwxtPuoH1kwLzQFZYCvL7fbR4PXdoas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AXnr2CMVKfPtWq4gnNUekZs6PAJDGyGfptnEFngJWnLvdZZ7WzHEbMqJEztsy9SudKaxg49EA4arCMfWKCBmb9Y",
  "key1": "4PwYf3QA3RFhQTkRpfPTyXrfzHWnQkBeUu1hEBfpv2sWuB17ToPUsnoNPTYDayDFncNPSLWfWZVR2Bwb8zJ2xvvi",
  "key2": "551Ci3Vrkd7XxSDtSz2ScvLoLueTSj9CTVAuLQknKqZZv9GYuqkRdgsK9oxQY7rbiyvz3dP1pA8NcgxpXHtb9cjf",
  "key3": "3wBSZKbPon8oTeGLdCsQsud4kvd3jxY8by7sqnBrZFrrN7pfCH8Kt12Hy8F45Aij5Kefz5Cq953omQGPuFQv4M9V",
  "key4": "3E7DLXkZD3TSBMLu6jmdZ3GSFcEdJbVw7EiUhe3xQGFLFbdr2pRPTDyZxtxSfRUHBBAJkMCojbUgx6Fw4R2xszb2",
  "key5": "3kSPX4wBqUnoXYSvGxEDmyJ73QokK4AKWajLKZGuBB4sb8trKmKiTD3g2aM957z7PqjuEzzuVYoA9dzXWyqWB4Ut",
  "key6": "5XZThtCBKWSZsRJzs3svfnaWd5A6jm7ZrLNkh8fKrHmpcN2nBjB1V2Fr2EGQmcXeMo2tzjD1M4VujF3xs5ZBrPx3",
  "key7": "2WavLuPxafkxJRr8gRV5bafkrRYXTy2rFBgGLf9N1BCZ8kjYBS4248xe5Po2UdD7rJwN8GAyzCTV3ZhGjK9aZWUD",
  "key8": "4PQrFtiWjGwt2FtW6xhs6Y1fuZj3mmGgWGsHCzwcKiMEA4AyBPn3yngatyeda6MNSZ1HrE9KitZuoskpu6ALV1Ec",
  "key9": "2upvsUfzaq82XpSPEaWrgzRG5KqJNYDwfBftFJoZq96rQhG8SZKD9Ywrki59TES85RxzagRAz7L573LqZqgpDHN9",
  "key10": "597pf6FUncsDKCn5ThKa6gvW3yyQrS7J9cAaPP47Z6ENyg6wH7pwvEysXsmp4Ym8qaW8o5gKuqCAWfuRcmjQZmUR",
  "key11": "66RPb639Pv6avox6uJk5KkBMn9mqACuTnbuGB375YEu9b8oqpH6ToEcYFBtvXiDQjpfMqLZDKXKjRDJ2hn7YQGrC",
  "key12": "2vt6cXfZxJYqDQRusMbdb1ALFTegBDY8f1fpHAgHobyaAc3n7oNFizk5Rq7rt9QuF1fPq6S1DhWR3EkKuNCLhj5e",
  "key13": "41rZ8CLTvwRm3LTdGRiRhxQ4PGYvkqFWjQwyHhbx5svBXqh2G7jVfPfub9c6zSgUt4rmgJFAtHjiqfBzfUgf2W2q",
  "key14": "2S2ZxEYzjUEKUnNmt83UovW2JVhNEBVa1Y1fRxqBcwQ2DSfEPkEZwu52t8wnMMj3Y3kDUEJegbYzUusTa5RHqkzx",
  "key15": "5FQwePXtopGvUKtvJ9V2fMZQxnMAVxN75BqcTfFqBUFqoYtwytKLR2hPPiwLBdQXDpwZCWauB14qffMUBFSoDKZ6",
  "key16": "3LiiTmmm2ZBCTJtueMTV6oiPmMQbbZpvLLF47hqpAigKepT2hoMCTkgdDenWzYeQ6xnKtLZQLbHSZptuniCDXwHS",
  "key17": "4vvUbUWbpcriRU3MCkM2Tzarrsx28PC9td9zu4wCW1C2tPMF37nrELjVGbvJwKUGMNCdQxnrgXivqWYP3mx5HhCq",
  "key18": "4smetQ894yFYhx7kKU2bj21EPEqe4GopUeLiZpfkXSqLDZTKU1jYJWah8Ru5LxHqEHdjEfwBQ1kJQGRdtUnDEVzA",
  "key19": "4kHZ2PyL6DihE61Lco8ry72TBX6xZtYeTjfJV7xbJkT82VTAV1EXKKx19DFMszVRQ8pSwZph9Ms7Vx4snwUyLobT",
  "key20": "Ztt2s4Goxj2eqJyDVwsNguK2KXBPMKd3Z8nWvPA59Ym4u9wjqoMG6hLfidVsSdPm9YxU1ZPRAGxaU7vMzAGfwoB",
  "key21": "pT3r3bwD73shRZ8assKfZYVH25s2CQ8cCyYQkbPXmgySaJWdYikocNF7AbBQpBH3Ahe5suVS3AJEKvM5HFByANa",
  "key22": "2j59Aqi5a2LtawhfntrYnVvS4uttBHi5T9MpLiQzABixbUw9NWDQmGCNDrNXeot2kJuVpXRRng6rGakNTfwbbwXY",
  "key23": "2DoxdTd1vhu4bhxgf9wWsPSq62D39agwrs5xn9XgzRQGaUuG24riVJnMzo6AQrLtXNAFwBd4c3yDgmHYgRMiTrRL",
  "key24": "2fvvKziYebs8t2A9xEh32fCBriE16Lkg2nGrfJ5Wczcf6PkWM1ivHMyjyChNSCKsdSVKWwA8rqbVZqy2bKB71Awo",
  "key25": "6AznuH6dadEa5qG92KQcmJsTptavuAMJ2HNw8vsxFCbxtVkYS1ucofFbtKRsupRPNGcUQ6kzM1VgQ4oZKUQTXaK",
  "key26": "2Jsw3rJM5BpaiovosRRLBJXSCU1Xvs4DAqZ9MbmjADsTYgjgZKgFy1VkCtLcRSuxq9xKSqkfmDMQphwRrxqHhdVV",
  "key27": "HxAJ6UXFxAWhPsNixfbqpxsgrayHMqurNtNcfzqm9vvbfUwjRaRA3y8N1hNojkGwZDaxR9Eq8rhUbC8DqFWj73u",
  "key28": "4WHKdhhb5PQAmFBEnJ4ts3L8ig4SPw9FEwLopkoPWvQXhP7xvY1W49XipwP8AT1NPhFwrnETivMuLXCXHdvApk5R",
  "key29": "294Uxbm1zVNtkao3wnmJDHQBn2wLacV1AFeUYimnVRD63tvUacdHxGgyxAmFBvHwS5K7K8BUiq9Qmrmg7FgRfJ9c",
  "key30": "2uivH7aDxP9RFS7sESdfd5Z4khLqGPAgoXpojkxZn2BrqLCuGQixGMMmmHacutSabXrBc4sCP7nvJU3CaxeQgZtn",
  "key31": "3HnModyFrp6KrhVCPfitV93pQ5QfHCQfk69J6vznvznQ8hxmUdrnhB8aiVzSq7VJWK1fzkmJFcth1EQ9zesLJsGy",
  "key32": "D7nBbikQUqGEAd5NJ5bfDBpuBVWnaxuU7vYf9cUqiKAGzdZ4a1QLDnMfe4S8tbKjzTedGSC5rjE5pQjq9fsZJYw",
  "key33": "3ckqzLqZp7J4X7n9KmQYeYmo4neDngX4eNTDDQrWLoMkHtLQudFkb5XJUJCCMnfUUHhu2FDamdJdoXWXZ2Cd6eke",
  "key34": "5s7UUhkfdSDKcSC56oxutikBrsUiS4TCbbNBSYBhwmjX6csyWoS2RfpkwCUcjDeDbJW5MCsyVeye5DGCEVFUHVsA",
  "key35": "2BaRjwXNj2U1Ln6Tgh4F5ERc9zgXjZwtrSMbUtzbq4sxgb1pKV2d1XxmSeBYwYzuw1Tyi9pfN9qRvGyeceJVgETR",
  "key36": "3iHEHxNnf3bCuWeU9xhKioDsgdH5HjtppdUqT1ykvAxuvcjGcEMeE1MmesbSGwJNnLGX3heCeNRFajhoL89RUEhN",
  "key37": "4nTZYuqeQx76db4bMrKi84hK83QWHvSj8fvLHVb6XsYYZGmJkBX9VJcoVFSUCwpFbS9C9scCvwFCS978mxj7xRpy",
  "key38": "2chd73Ja3M4gARf47vsCtvseH2TPN5rSAL22vhBBycesjuKqRATAYasJqqWa8cU2NGaSNSzsJG4hbGJJLSj8LemP",
  "key39": "DTyurvTrKdwfevhbhbnvEy8cqPCW4wKusw7wBZxY2riYKKtc4UGaAhLaQCGtLWSk13zBN2vzHidWwWsdKY4hvm6",
  "key40": "5J7EWjPwpSpBJDun7QWQv8LpmYLKmudM47ZrmYGt31pShQZ1is57WQdZ7iDrgs8rZ7FSHdTpfwu6KXMAo6NYpTF1",
  "key41": "295JcVCBWeChbfJrBDoaZRwvrbRqE8PiyirtGC9c9PBWeZmU6eEH6qqjFfAYP4CkY4sfwuoDeyqVcEf4mrM3KRR5",
  "key42": "26Q7zXLuGvVkcdsyafFCFMWiezZkNqdG6UQaa7UtieitR2Ft518vGzeMf59WbW17oKcQKtZujkhhgFf7MHwXL1sK",
  "key43": "4WztjRb39aqpW3f35muRA5FJhd2b6seAgp8L4AkP16JZgbay9s5zfhQ6Ua47H9fkn2x2Q3o3idVzgC8z734VbNBG",
  "key44": "sjyMQ3Cg9mzfo6GGGFrXL1Z1FpgmxVYfMpyAGVPJTHedYDU15Bg3PvW3BFthHddpEgg2cQ11yjXAK66rWbERous",
  "key45": "2a2LB8pSyJSyzm8RUS1UvjVMaLJguj5oQnHMNSWzDP33TFe1MhW2cD1QGa4kpRp4WjqADJLsQXsT1xst8zuxcb31",
  "key46": "2vNeHSLeS8jCWDkMg8yMyU429Z3rC3miAza5zYeksKMAN2o9safBa9o8YDM6se3JZhPRVpn96eF1N4EbK3kF2HNs",
  "key47": "42PcuwwDCCu8Pg6TiHkVWNseRbC1gCErP51nprZDQ9jexWJfahLkv2K1xidPMzDSDQXjS25kCpLoXcbNUHdho1W5",
  "key48": "2t8tapni1zpDMLBbJ92yyZarBdE55neB93FD3rcxtpmSe7LZFdBwAfcbQZLEWr2MgAaBmt227rD6gLLoZezdda73"
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
