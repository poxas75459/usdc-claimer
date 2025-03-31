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
    "3Ndx96AXiV7GJzxbyTTzERifeTGVWBdqYufzTWmViGRzGPft63EQfJj5qLKijufXRxNZDts6QxcFn45nkmp7kvMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ude6ymcyaoNczYSEgwXtHuT3apizz5KgoYgjJZoCnKxiEtLcfRnZVVqDtizP3T9zbaVigdnW44zuDWjxyA4kv6z",
  "key1": "2GjHYwYxDUn8rSw4qTRAE95wRge5WLVLS8ufjGX7xSVxFbPv5Wuy966HwSWKdeYgUz5iWSaK5z2Nz6uLGThQADAa",
  "key2": "5gsWjqEeAQvtpNGiCWjBbvYGNUxBPUnLkBWjSoygJpGjJza8BNH5ZS8zPwzfdVFtiGyyoWAWttDx8YtxkAxDo7kE",
  "key3": "3WBoF8Hcz7CDxhTKyv4DYXxBF6ZrWqY1PBqRKwmxizS85Tqq9cXnCVRYdTt26uqUiANeE5T3ZEqFeTUdh6kWm5jY",
  "key4": "48XoarZ7vqcRi67X7UCDzCdn9eEGrewnYu2ZCEbhUNv3ykncjsVUTFQcCPvW59kzTP5kgYPnqw2vVrhA3v58SogV",
  "key5": "2PC4mp4M7ZxpRPUiV97NzfVJLGV7tbB3n4qqUFhq5PrVNCMKBHBGCuQvvkzGTgotY2EwnzYTZCCAN2ANrpfUrF27",
  "key6": "r2FBfmyGERQVN34kGidXXdH1FmvS2t6zXF1C5ki7zHQp1BSExmKEzjRwtmi9pAt3zUkKZwTGshXrHKdxtcxKTht",
  "key7": "2TQYwALdrLEsEoRKwjrFFd6j3dtVCVRsJSCs5RB4XwkxrPrcKPeDNRMGk56bQcYe7egf8CtdNDLaxed1x3nKGvCN",
  "key8": "52L2ubVoo3WbDTVnuqfVEZnX1V1WuJPjywCKKx3oH9JNQBZnoAbWnF2Ptev3KRq6ypJR7RePeCqtN1v8mih9ggn9",
  "key9": "4BVweZUTmrCcjTszny9vQEsf2r8ieZekh6eKLoejq9RX52RrkdubZJGjaCupg4UhFMLG1egtbobpLZ9hqjN3UPF",
  "key10": "3mQFUQngw1ySf2UtVuJfT4qUrqLFG5NrW6WSPGJiTZD9q1ZUZ5ayRuNC54qjA1qYxVFtt4UBbtGkpA297BedG4nV",
  "key11": "4wmtgfmSaUxgeXu7dw3twA2S5okUM1Vut3CjEmBDpBq8k2D54paaLwUAA9o1bX5EMpE1Ygsrkcxdtm14cjb1FVJf",
  "key12": "5MS8guJthGwid5a5PPha7Q8zHChMtaSbBMufK3e4ZXNHbFD9WccNu6usiagdximARfENQCsBN4oTMdi7b6sRjg5",
  "key13": "2yhfKnRw6h8N7ne33Wof7XQjvbsJD1Cifdpm1pK8qQVJBeYmuomKY6pCzdYfgh5t2NBmuQGZYQpFB4dq7EH1vqe1",
  "key14": "5rVdARmEpt3ranQygtQFLR3QqtuX1Dk7Jssk5gCmGUMAfv8S4xSf1vkNshcWbuvFvYjaVfBkaHb7om2Y1HUjAAQS",
  "key15": "3NBjJkbKsYwaAgRZXUZd4HbhM19k8rDeicqWdYr56BNycxWBeBmz6UoUd7Mx1gPGvvrLa76SHvT6PhstzdaSKk4h",
  "key16": "4NmFo1carY1sef9arTZqyEgw1MN93im2o7WcjvAEqVmok7xYDTCy74cDx7kSLyRGfxXciqJzBjti7cR7ZFrkMxdC",
  "key17": "RJMqES2HV79CwriEEGif3do5BDySQkZEfUJdMvMAqAP7Y3p1KxwxgCZacaerpkV5GSouXbYcKhsMcuvHZGUkBao",
  "key18": "5ckkSH3oMx3gRwyehHd6jkRr2n6X2pJTxMh7VRpP7QTbRrYiaPycWcruvmzVYmcxV8vVRscGYJHASEFGnVmVCGQo",
  "key19": "iGEaAbAqfyCEZY72BjGxdSPze7Yt5w759ZqPTDm4NVdQiz8oKy43qPhnhn7spSryWzYFeAVpVhGmZD7ekuT5iGt",
  "key20": "5F2mogamxemQ2nf8cupnRWbWAqPsgSDirW9sszFmWXsk1EYaJu1iRz1HGCw4Frfx9mwd4KKGLfQGnXTXbQVCKXmR",
  "key21": "3QtAouXCJEPEXc3txA5RNZmqcHv1wPT7uREFpa7JKikgcsfWixb24JAQgdydody4yh7sdUGvQL2f2HWBUX7z8bUk",
  "key22": "iVkanN6RUNKtmzeCgE8hfpvy1Dh3nHUeBNtJwqQ2dy5BN45hgrJ9uSLd9FueaZDkqJFF54T5SEJiMLhfg6qbQzY",
  "key23": "5yCyiPpqWQwFFFcaQAwbHtaq1vojq3VSzMj1bNtA4bmk6sxmbfkrX7dJFEuf9nz6379ZnQPB6wtMBRGquogkh8JH",
  "key24": "3vHHGM6Js1V9jZ66onsFVYGdKrGWh9Cq4HAMCU1Src45q1cwDFHQsKK44RbzGoqDBDjQHJenK4j7FQQSQUzaCi8c",
  "key25": "3ZNrZcFEj2mYdxea7Y73JwgR5fYcVEsyvXMuvetJZH1GNNx8rDeo2GQ7KHSkcjz8FDyaTRam2bzBMDVx2v8ZXN2p",
  "key26": "29iv7fWXQUkrB49y7RocKRSttUwZaAdAj2An3q2G7jAWhqWrS6guXJK1tic9VN63C5fs3Z5QMDZxJtjLbn6zqdJJ",
  "key27": "5jNZSGpihScfgtqfgucT317cGPo2s7ZWmuyatQVXG8YsExGaUSjjaBk2oKMZioMZM5sft6Wo3QztHkh4EPt8Yojn",
  "key28": "5W5tfR8SrVSiuVbRanQg82S6HACPChA47mdnr2VNRsvPBN3eCZ3Jv4KN4xKQpgPMvHpA9oTt6YJu4ihCbKNvg1kX",
  "key29": "2MjT93QWdxbMCf4fSPy5RA2WTD5udrADw6umxzn4wwwE8EJBd3HiosuhzpenU9Wcgxc2W7mDRCYt3DAdnAsmCWiK",
  "key30": "4PgaL1RCBhMGW533L4hXHzAkiJKaNEDydHyoChSeYD5d1vpmCwK6vBCKazKKoVLb34H8wEmS1mA7fJ9Rvq58De5u",
  "key31": "2jaomojZwrJ2MGG6m5KqdNNaUCVYacY3Xq2Woq1WTZEZfnoojo3WG6cfb1zoDgiyyLgizPBeHXr81SvcTMiZjRYi",
  "key32": "5VGkiu3UiLoRqfk1P568UWGT7JkrQsHwfN5uMg78B1U6X8XE1dMQ3AUShDQoz7QAcd1J6mPrEdLxx8Z3CeWH8XsS",
  "key33": "k9JxJd2uz1j6B5ovWHCpKWLUFVoBoC74H2tEtJxHah2ue8gDRZJ8JgZ78twLMaTbnGvW8XJoSYuVC8XYZzZVU1P",
  "key34": "2nwiPMxdvPikFEYWaG119Nhk73ztrzdFRruJph83sTzcXHiZhmhkU31Wz6wmzx7s9AfzEdqg9GrZT5WtQe4Rdn2K",
  "key35": "m5KzWiRUWYsBFURjg4ji4fRtujSXXt6PxUJLUbc6Lv1kh5mHsQ2aHZk3TikcwtHM66ozRVMggv5qYtzSzu3jGsU",
  "key36": "2SMHLn43qbrNRDJCfCFWTLet3WCUmTauQaae41pGQAcsgGsxkUNazqmTjsNdyY8Lttkasr4VHnGKyySPYvuSr65M",
  "key37": "tobjhFojiW6mQgTrwro7wDPpGWcjM28731vG6ZBorZFWxyAC4X7cNcyctuq3SFDskxgvEN1iEKRgByMc487SGBu",
  "key38": "4GuErxKajLkMifN7oBmneZRsDcwCWy9xoRPL3u1ocPZe5Bcm53QMW8qorKBRDwFEpt8KAzA6y6ZBsSqC5WEB81Mz",
  "key39": "5CVd4xMeFpzgHfZeUP1zRH7o9oKjEDGwz3nQaUM6wq3oUeovNBcYKa54FPbQnVGn9TGFRLFB61kkjayQXjsAVRgm",
  "key40": "2UpJdnJo4h7zSc5DNjdXgZH2pcvGz2odUvuFaX7iHb3dpKis9jsYfRy3LHmXrFuyzna5aGqWs7ajkoMv3EBvUsXg",
  "key41": "5M9YZnp368EYxbGSjYEJZRwXgV6pRFNsoHyPjCrwBAvNv5V2W3TevKeoop33KNR2empYoDb8YpPVCQZMUbP57dfk",
  "key42": "56N7K4ZTZa649zaeRMpU7zNkqHzbgZzqw82quQcbkmaqB95hYj9bjUEoWFQJLnGhSpwKGWc4R8Z71TDybvYYpvbE",
  "key43": "2gKxp61EHB3MjLPLjbhNzzRv9HJE791tgZywwphqwy5MoambHJjVXJ2jxkjHSzdY3pWzPiuEBp7BrzF99bTG7sL1",
  "key44": "hxspXDXaEBaxqumq5hWdgzmfCDksZ58aNga1yYppyPer1Y54ZJ9RvEiuqaFwJ5rARAHACDMwihrjQ5ZCkUrKwZm",
  "key45": "5uKF8yKyBJEzphimLqxS1JduYxcqeNTDne8cSQtxPeZUKDJsYKFNEQ9W69oKAtsfafgxEbzBNUxRehdacSSgmxLa",
  "key46": "4W1LBQzeWWvj8uDtXNYdL6CERyMDd7TQzvHLA17BdHie3QRT5q5yZUrUJJUsCM8HDAav5jW3gds3A5ncMJLBRnjF",
  "key47": "4431D3HTuUr8Yu9Mq9W9Fz4tjHARf7D6R7nPDp4SiSc4jr1xG3GV78RxkcSppKHU7ZnNjz5vEjTDrSqZ7NG3NyUS",
  "key48": "33oHBNaf2zfPvpVXKGumzLThoL7WWGTSUrEvzxkXmoE2SNyGBTwmVucaf5xUqTyPSQAdVw3DE26JLcugtdwiAq7Y"
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
