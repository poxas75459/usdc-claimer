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
    "51SW6FaghygbwFm4ryraoHrBdvF8SD7sQz4amM8rpkFH6UnX8PbsShFDALMA8GqtSGWyNGLFSKfFWnjWXUws2Je3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rbS2jmL6PEjBuiFsUkFVDzbMgnXdo6PUb99qndxVDjWTcWzG9FNmBpRGMbBTY3tTjNq9U69RbdeN71kH9S4EkjU",
  "key1": "2iNuWTSFEWWbhZSs4ZFtpc5YyL1HJn9HCbCeVSRNEsJyW5goDJNSMoSydVwzntFaqxUdAZ7Cj6j7oiBG5tMti2Af",
  "key2": "AesZTqTixJ1rXXo1yhdLfZbfWWhQBGWzq1aTdfZYVk9xqFazBXNYKR7wYXkXtgsqo7LBsqQ6zKzXNDi57Bsg61A",
  "key3": "vjARB6Gn2kvzwdWsecf2UhX5SRs9ShUuiknrtjkRS1YRUVfQ55NkA7mrMNcnBpEeCwGte12j8yAFQdNK1KBQyKE",
  "key4": "3yQMioyNt2wa4749UHnsBnJXE1pASgzLFiw5Kp5BEaphrGBf9Boh9yCT8E7ddmvRnzVTyZo8JzeNbGuRRfx6WQ9p",
  "key5": "5GnDNgXKs8Ds591rvGTpBuoa7BKTcYtjbfUHWbQFLpNeTAPQyAGFFszyi1nHodL6uomJR5WR73MzgpwAwgxyERBr",
  "key6": "5k1MUxdQawttggca5iU3gphh6C38AZMKPDZvu7cJZdnhWUdPUrYuWtVVoWQkLBkvoJxqVPYN8u3QeQXM4hdndY6o",
  "key7": "eopUUSQwcVmkp2srdKG4ei8gc5BcAbrvEikcFZ9fAEuJNk9V4hiqaDd9MFrMjL8qHkFthZTyhVpAATWMNJRKREt",
  "key8": "3YG6dzVG9711TjNMhN9jrLkEA7KVkat9CxWrhzyzRDvakTgFNarsdXB9fYmfRPZ8jdv4WrDQSCB453n4tMUu2h6J",
  "key9": "2ZuRZ3hPr5t4vjafcEMZUj7hivjVKZdjghUyExkTqmgYwyrJACbSpDgRuZcssR4j3yRVHhxQbFauyyus9oCjKkkf",
  "key10": "2xvNYpNMnseefBh53eqtozt9vf35A7DSk7ZMb3ScH7WYv9CyRgy6FdRfgJDfYa7vboGDN1nQ9b4D8ZkGW9hgubnU",
  "key11": "4UnCXaT8zdvJ2giPB69U1Yv2XhfCtRdM9ALMK3qYvbTFEq7k8cq6tsgRhjoLzfTo7WuLz1QWgJtEBqnPzitTwjpG",
  "key12": "2hJTmuF2HYFSvYJE2BbLBhz8eVY6ZQP6QDhBo3Joumr3AvE25DFfAdPsTtDpuEVsCeS5SPi9udHRpe65sm31qSpT",
  "key13": "2Ao4FZJfuj2e6zUiX77WfR2Agx2uaFCP98dJqwUXQMLmkNhjwM2jqoA9ozduLoUco9Taw9dkH1U4eruQjd7KSf9Y",
  "key14": "4GFoqfUsCcsNuBkyuY4oRwZ7xKeTWd1vcBjKW1jhtDqGE2qFqaeFSvz9bPJoEVkuP9XcZZD5v9dDJD57VMNQY4ZG",
  "key15": "439mp69ygUS9TpDHwY2y5B421gQJ44SghQvMqwFMoGkLDCcxiAgC5d6h7dvDrFSxjy7AKHsX4KmsSMXNZ3Jn6BY2",
  "key16": "4AJ6jRc5DPipFtVhhP9SZ27DM2ReJ4BAwAHErycCGjADE2CUiKffiAC6X6akQFBqSy1V9HHQYuw2FzvhHUASu1eb",
  "key17": "ZLvvX3VdMxA1dcnA1i5xg5XwGwcdQAnobF6cso1pH3JbmNBGVNL428HZsVkycXBKEFBjGXqaQ4NJdktkKJyY8r2",
  "key18": "3VHhNQdGH1taawiT53tRH7vfrxfucNpRQ4LTAPwbi4KhcRF5t8pxz2QyotBmyBtAs9EmFQohcaXDNwQoz3oEAAF7",
  "key19": "FmkUGW9TBYRnuHoBB7rWFZsFbw8ueHXFoktgGL3RSTc8XHZ4CmguHFVW2SfgWp9XEeXmogjK48xNNViShYNbuFe",
  "key20": "2SW2X29GgbpbSW8QuJ9yejoe12dcQXDuXqA6Y1VADztcCisv2ewPHhQonVNMD3udsTVZSLvh2btLk2Jg7h5v5VXD",
  "key21": "dddGKAUgkdDSF4piQvDiEGQNFjQha6uryAXxZjWFpTHQaMM3kUAvx385XgheKvfYfiKA39VxVHdM7XxQfnVj8bw",
  "key22": "4GzaBaJP1eQQ2J6v4JEr93mppvPnwNfJ5qUsv6ChrAnKJgS6Ab11nc7Lqxp9AE7MdrHdhPP6MS38m4EBiMNuMSNr",
  "key23": "4PUNcZs5XKyKqgneJwpQR47rxck4fZjkromztAb9Ccg4h4rmXzzGFYGiri6zPPRbcMgaamND6bwo6uMdm8Z4WKcg",
  "key24": "4apdmonuZwpvErVrintP3qjVQ7qn2ZyXZByx4ZjaHLyrwGW7UfwzpRTegmRsMyTtteFk1LcXCzkQuJ72QfrBrNW",
  "key25": "5xLhTBHgW6j6fbnb14XkaD4pYSGrCfWGJs66nxJykfXRN3E9mhBjvt8SMuvkSmXher326U4oHyRP46SYHABgKgeL",
  "key26": "3E3v9yvjAuXUDMF7z9CdZAyrjb9C3Dd89mmX2TkTmEJzZ8ZQtUEc9wa3jBdSrtF9cTPp5mnJwebp9W1Ds3LaGG8w",
  "key27": "UH7F6o4kQ2YBHU2VpKWXa5xGHK5erE3Q13YMTPDMHQLiZaYEfZnbRTa4Xg2n4UhTqfmXHF7PYeHB6tHxxgh4yCg",
  "key28": "f4DQczR47KuXbAJF297rgCQUHHwcG7xcHUUzZTqzUREpBek5gA7DieKytQG9H8ZAPHf1ACyLfKVch1xNC14Ez2x",
  "key29": "65NXcWVgf3pSaSiDB8DbxxWYJ2LwXYgjmDjDg3t8XSg6QA6dXgzkDU7QSGEjTEySMGpo12sWmpKc9zB8H4spSukX",
  "key30": "5JfVxfZTp3KPwm5WvRUTHTkpZbaPqJsDArQwgo6uTCoLHFqJ3GbVW4STqqrQrR1qL7RCjxTkkVhRHSSmJH4iZPcd",
  "key31": "4XiUEUWf6CE6ndNgm5BrxWziPkzbF1rjDwVNTj6TTMPdNvMJAZPQc2S34vQT5mpoyMN4Kb2AETtNTxuqhCERfLxo",
  "key32": "63rZhQoX35ULU3bzED7wWP3fXm2UE2BkC2DiFG41qz6GhdJP1Apiq6rD4MSnqBahXerfqvaaHey7W2TiQbGPLqZN",
  "key33": "5NUjG5MzXjb5fZzUnrTdUgR8TvVtSMZTZUEveD4YAWhe6uBez8ujwkefjFZbs1mm4cJMMrz9YDrR3bGa59WUBEMU",
  "key34": "4WNy8Amvfvz6J8JbMRo1qUJ4qj7dyFWiAYWQ3QB8pPJxG4JEbmt2DRmxpNvrcDFjhQaJuB2wkjn7hHafLHtBqEbd",
  "key35": "2XddJp4mUxFdinEx6i2G1frj7eTfntUXZLWALMd6cLzjLmeGaEJC6f4ST8PUg8dKL8iJr6W1cvkiP1RW1WtwWquW",
  "key36": "47iRcigxZ8z1yB91oPNPzjnhuDPp1cs5i6c2CuqiSYRgXSH8Fcj7wehxZcBf28C1njSWiZsnNzBokgdLk6SY1qv8",
  "key37": "HB1ExqBMUhCoXzTEVobAUKXsnzcfNZcxTWXFkbRCGGWbLfoVgz52gtxFprKr29KWo2tfFiBfawwWT4FuUCT4b4A",
  "key38": "4Deb51zkbA6B6CWSjzwqXatucGktRw4phvyNhK8dsZyiXd1vUhHTQeE5DTNAPXdsWFwFekbUwBnR3PggRed3Buue",
  "key39": "5AWJYbcwopzFTTSYN6ttVUemzvjyTTJYqTjkuAkusEYT6G7jQyrtxQZKNo22XkhEyJqbyBDUEBTR4BEL7Tp9yUdn",
  "key40": "4oU86wsVqiHfeJEmPbw9upTaCdjgmpnUCw5EP8HaAQLWyw4tDG5tdTHwQrNg2dKpR66P2HCnJMoa69CZAdGTGbtH",
  "key41": "GMmDW4Nhxb4RbSCQJwnF64PS5JuxDEKgxaTv2Tw5f2iZ4oY6QcDAcmr73J4CyfSYJVc6ubpk8WL8dr2GJEQdau3",
  "key42": "4FV9YYqawtDx3oWnbNHaq4aGP1FURQuUDfUP9WHM5G9fH2UXevJWgWitnp4xbv5Gf5Sqw2CTswzbR2t179heJMgL",
  "key43": "4w4jSst14cXqB4b9sCUmTDgKKytjLn3T8sfevoVqoMMb3XYAiNcEAfvEroKFcuEEjuZ9jT7rwb19dthb2UEpG5k7",
  "key44": "63Jh6pYFSnXG2BL1qA39ZMDMTGDsyoHLpx1seQ8SKvP1nghAJA7XfhdLugB5md7b2NNYSzMnxynxwnxuAKyWLyZf",
  "key45": "2wdxA6UStYeB6LzHsy1HpUoLhzuRU2qijjPNgEMGGwrV89QTG1ymLY7Tz5GgRPfDenU4e1ViK7aNPth3h9hyAuJ6",
  "key46": "44A5fx1ydRxFgQ818mkgTAiVNhMxckenVrw1b25bekZJwtCXHtPq1C9ep3EgSE1zGeNB3Zd4DuthtCta96bgPRce",
  "key47": "rwkMvvJb7TyXeZKxPH4yxxgseFc3DHBacc1xd3tuVfJ8LbQXKqawiFH2Vv2GeVLkaMie7T3s6tW4w7ZJCmsGBDZ",
  "key48": "5dttcMUSSBEn5whUW46gXvMkHVN2ae7XQEwNYc8VuQDHib3uVnbFZV376pEVSBqW1gjHKQ21q3FdBWwYyvH8gDtv",
  "key49": "2uVJ2rZMqo6y6p4hZ1YVoZWoGSPsmEty79dcsTB77BbfwQghWQMZhyRxSAAgEAxvVX5eb3JccvCr8Udtc1XRVNui"
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
