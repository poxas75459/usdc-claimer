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
    "5q7evxqon5u1fco1ofbwimNP2x8FhR2rLrnHsQjGos8kRefcQruUHJNPZZSNxAuvdQ3KmhVzH1TS49C59mwC4ejb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WwmfjLQzhTTMT14V7bA6pzTYRwJdScR8oApZ5FrHjP7A2fukE4sxescU75hUc1pUPDY4uthnGAJTnY6x1spWv9e",
  "key1": "5dfZCCZzLZksMh8tD1PVhAHwRxu2b1TzXdwBhrUop94MzwapbF8QUnf8XJEpoGVBhVLwx3HaP8nadPgJcHz7znL2",
  "key2": "53UDt2FuN8XZczdFan2sv8vrrUmP9mCb7tkYZ7bzqdrgV6ck3bjgDVHyNBQE8xyPAwwruVSHTynPo8mkuaKRiCdG",
  "key3": "5JyNMhdu4tYuxPteWwfhbcTJW1LMkEvbSSjTnrouKx3K2VknZPBuyLYUsSdgEtELFoJDd9gTte44S1V4WKRdSmPC",
  "key4": "5FwXzKgv6TSnoukYn5oRMiERadDr9Q98CP44HdHmz6RWHB9ozH71ecSdZEaHBzYifQdhogcbFzATM1ku7XNkb7bF",
  "key5": "5PXWRFShnAUMx2WwWqbRtURFznHcRUGdheUq671s7ZKGMUjmBLusDP7Lvw3ofvsgNffgLpME99CZSAkjd2ZK4eRi",
  "key6": "3pHQjmEqTDvGZeBak3rxVgXp6ookSK2z6xUB4wExCgQxLjBGvKtSZjKEtLuo2ad6Mh6iyZPvcLMqSQ8d4rqm2rrT",
  "key7": "5bpfZk2syGBYowHiSRyZSMFejpAr9LSqzWrxFdmXeLk5DcnWm6du5PFLs5VDPFrPA37jYpMUrCCWcZrbPohkTdP3",
  "key8": "45GV98RJdxqGn32JD2cEpWnYF4TMSLqrK3TLshNYLwcq4d9ax5BwQkmQDf9duPRsc5S7k5LpCeD1TD2HwoSSLnup",
  "key9": "2ofMfWSbj5bK8FnCwbzAxEXJqfnCA6xbgiEkE7sA6cA6gT3MW4frnboB9kpv36PWKGDro5Nd8tgc92PzG4D3z5rw",
  "key10": "4yerVxMHhDUwK34F9vuyqwkcUM8JX68SwZEAc2KqjF5HSbcuW1Jzy26JnF2Hw6LbgM2VFDXqAA58ykzchZMBfoh3",
  "key11": "5dCZvo7GnhwkF9qRMVSokps2zaz2gTtuaSksbjNZarNcWoSoPUQ9KA1QuDhDSXJRHRdGyAsmmnGw7xcqKoZLjiVL",
  "key12": "4jcqfyjy5gx9Pkigasy4GwCXfXFHzZr3dh1YPXWCAr1YzpRatFYYTm6risD3CkvUaXMjpFYFpu1g2A6gJUAduLDF",
  "key13": "5kbch63Ee59jq22pkgANoyryRQ8FfrJGcfBqLqBspC1EVoWkKK5TzhkfZ89UU4Ykx3sfEBDZevxoLujXkGpqg4br",
  "key14": "3RSNpCTtkZicSyXPNgugYbLBXQGu4eXnACc23evkH6dJUNL2i3pfYk2s4dS7nibNn8DPKoRidnSinEictFvAcj8k",
  "key15": "8ULnXYyPzDZZPeVWjtSYSBp8wQPZzz8qjoxse97FPWTr5tjqijZVdmxuv65dzKWcJDBZq8GBKSb2SBtKk9B3X2q",
  "key16": "3dAfyYa7iywHWa41Wu5kWkYTovV8SBPjzH7enawAKVxda4HomCs97ZrZsPTpmHvzs5zamHypAHgviYgz8VWshPdp",
  "key17": "3KrG26QtjC9BfVN76PR7n3bfNGGRssHbJyW2hivXq6NasE5Ksuz5ycnu89jhsFo15DNxhny19Zr4Qt38EzZd7fAx",
  "key18": "4XCKBr3hXBd1W1iMe783uEJtKeq5rDKVKn9CcmvHyiXvTu2DCgqRZDtyMSFmV4FdUrWZ2KYowSqqLtBUTrDvpoic",
  "key19": "59xxzaZw8qmUeQpJGfVtmDNXfycm9aYLZ3nDSDBuqAMgHstAegXkFYTGhptUCNxPEGYZFRibJwYp29Qr8Rd7RCE3",
  "key20": "4LJvt6RUJRAmLRG9taHs551ywBVkLQtJMimQLBtSpGMBdok7HzndKUton4ZWxCyBomDpTciWRsu3zL8TT1AYRJoo",
  "key21": "2J9LbJgv4X4geMHQLinCi1vNz4ryoRgDQecDnNRdbgBNqvRCSZQdVwvqWJZ65fcv4YfXaZy7Z7YwFPn4AWj5f4Uz",
  "key22": "3wYu2HXGME7cEc8GYkTsAtMWe1Usd78J2RrRt29t3RVm1WgNUrh7A7xU7j6D1wLFMP5GWLfWFW4jmVUPgM7ZRey4",
  "key23": "3MYRmu9Qt2V2FPQAwTQZoQanVyKnoyNA81ebfSGgNfcjjh7RpDDwwkv7yHBLj2oMkkpJo2UPzbxyfb8N5TA1cxPd",
  "key24": "4Pw49qt8uC6aEdXYUqi3pu82zZAMnXFY2perMH8eh8GM3aMzB9Kd3VYSmkbEhVWiCrRTkptwhUSuwrRy1LWSd9Nw",
  "key25": "3U4sEdGoBKQJrSQFGNmLiGscc5zL7UhP1oPzH1P9VezZ5kZm1dJPFePzea4u6UHEXpoa4t25gfoQVqz7R48wCKr7",
  "key26": "27GM1mZ3sJppHBR3t2ZG7GPcFDdNyTXuVZf9BVZgwWohzez4Fu7fsLAPHnJC5m9MSqtFbd7HnM1Z1Dep1YdoZtJS",
  "key27": "5vkqczv7k34xa1WbkQe9m3L6stMBFtt8nbSSeVN5kbCo7FTDgkohmJjpmM7VWUWVCuCKqsN5gkSXZ5We1MmPr4JQ",
  "key28": "4dbxTZcRKZ9ZaaQikPdWaExLyANDWgc3nNWUnG1CMVD9ZCDFmbPodDhzyUy35SktdFjeGLr8MvxJwEmeKqFymGbJ",
  "key29": "2MmwkPE2BHQwFuoBpKfS7MhoBXFRsb6NCRSdEtHXK7RhaXFK58UVo7scn4zjW1sAUYxgDwFdd17qkgV39TEoZ6jT",
  "key30": "3BMhaSsSMV5pwegMWyyshXRbSg31tXv7ik9TY8zXE9qTNHhwzuUcMMNW1L6iwKGmFVZFgYvVgaoBpeYEs4gTvttK",
  "key31": "j1UUdzKviz2XcepCHRnmxLDSZug9gjSE7uxoNeNN59oPh536LM5R9si3Po8EtFdHS4xjqFgGfycPDK7crUPpTqZ",
  "key32": "w1UySx8cKPnshLmtunuq8hyht7dgy21hXWjU8xG84AHqzPstNaM29gtG4KaKKRBpzQrW7Yamp3pVXGaeskKwbCX",
  "key33": "5Fscwdrkv7vB4dam7EFZcVNoTB6Nzsb35wrcvf9ss1VCiWiEyR6isx7u4AjQSBnGAk5NggAYombviCLKom54xJvf",
  "key34": "rwq813FMFZ2SfBcpFj8kibKNitAFWNYA7qP1nnoTSDt2vUHTNsjaWNymh3ECA5iqfWjHyiumQiZg2cqwkBqtrRy",
  "key35": "2cWXqBWZhFr8PY55vjteT5mxMouFrNAmxZPWiJbFcY3YtCToqBZPeqDfScrC2dLzwJdEymCQNpJdq8hhu4zzcGgJ",
  "key36": "49ExtRjU1X7CrH6iJFnw6MD2xnNmQcQ7xY2QuNX5oKWawCP9DmZqCQyC2RmenJuxdrMy6kKkaDue8dD3RgpMQsEh",
  "key37": "oEfZeUM3XBUib7s4zX7GWTSYSxRMQHLF7BEqrWHyKAkdgMBtqof3HctGbHt6qvkJodk9zsSaRXdurbVZPfNBqiU",
  "key38": "QvZ1JyEgYH8mqQ7cCUoJ3L4cKwJZ2TEXva7muRzbz49jjFuR4MDvYMhRb3w3irzbjXRqqXqPTsALNF2BhQv4W1C",
  "key39": "BUa8zcyu1kGs1XrozA3YPww3xFLJWVvW6bKuD3HN5P9ryNvXSbZPtJxaVBSW9w6jFwHkxfS8YdrTAeoJN116U9q",
  "key40": "MSojrsFWJMz7MtFsAheL7GFMvQhUpSUBoyz89vLs8CPaz3ZN8d8W4AA7pFbJB2UGbMFrcPUG263cFT6SGxCMiEf",
  "key41": "3VHSNUwstmsDqhwnd39yTr4V4gb9EKfFURhhmjKsJHtzZr9GEKLfv5mVFfit1EuKqr8VfnLZc6nh1H9Bv6P2hGBv",
  "key42": "Ed2bpZPbFqe2QYbbFTZoH5YvCdWDxQUfxHbRJhUEu7a9WbricpueGUBETkbQqmP7wh2wR2TZiGPE3hj1QDNw5fE",
  "key43": "4W8AUPVwwj4E83xZJyGzGz9dAtiHiUNL8xsK6oF67UzDHbBapN6yGoXC4cQxar7a2U2crHAgGy6e8qoLW9jYKoX3",
  "key44": "5DZpFdehHw3WWor93MYQvnkr97gCYCeuqEfACiD4ZnVomEuooKvGAtcj8Tb9QKNE3AnJHHEU4D3m76sUpR9Uvi5J",
  "key45": "3HpzZz7aqZmuLY72AEC94xpLctCfG3uoWhfDWAseXkCrzWr6W3DHLLMcvLNLskMgryMA4tGwyXei1LbxAxsYLVLm",
  "key46": "Tv4PvH4wbN431ZvUXWmsEV1RndMGysbZTHhPvcWac11a4SmPKRHKMyF74fRtBVxf3tXMhqHKYDMjM9SXAEA9Cwj",
  "key47": "3ef7ViLtTDijiKpGC3bFYyy2zLC3Gde5nLkFUmhU1WVGakHMp4UtfyxXatwTQp39w2wdJU6TmSGUFiLgy2jqQepz",
  "key48": "5LKPnGYLCzznscdyop2exkvwzLT7GoQ2EAM84VMDCHqrcrBHp7pywTXcru8Lb3Bsk9zdfLwNPrATfvvaBRxLxcb2",
  "key49": "35cxMSfkGLkzA3tSDgSfeUSyVqqJRG6Y219qj4FrzAZXj65K9mJ84jfuxpVFq2ghFdSHgbU4phZHw39vtmWUA2gZ"
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
