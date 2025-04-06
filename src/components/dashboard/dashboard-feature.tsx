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
    "62AgY6kd6eegiu9YdTps7VvLm1kEqYzJWiDUJhJUeC6ddR2BvpxqLhDhsqE2QfrzxvsNcjdifBaiWahzFaqMJy1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wv2u9F83EWcqgJRxZrA14Lb7ahPGW8CugZDiTK1gLvPg9VTRX4mJfnVoMUv5AM4PVffbWMnBV4NUcWB5bdrMZh1",
  "key1": "PamqWpeKYsY8tC32NKerBd6aWKaeKHwsTqdeJS92ZUgPmDZDnbKeKQqUVnzpwfFodT6dez8MC41MPtFvVHf3MTf",
  "key2": "3UWToVcYgKGF2cbARCyM2ZpqhFNb49s8hMH55E52hM4HZwGDZUNczPrJQKcxUHehLcNvVkfimFymXpP9Xdyu9Fqs",
  "key3": "5oJJYtZC3wBwJTCNeshMM9guY1HNeU8pn6Urtmnqpi1hUMwHASZyNNfLMZoS4uKxi6M3MR71upunrMauN9Zqy1iH",
  "key4": "3yDVdREWpDmNjRYFgrwAxwe3rPXGsRoN1fSnbCa24AaL9fgygWYjMmh1Xhk7SLP8VwgatEh2R1h5o5D5RkfNDFSv",
  "key5": "38pgruf1S2NZw85T68Jc6S5DJwjb1ntqmmauDnKEGzfiHKokP7m6MyPpvg6KyYVpX8ChP9ZMpabctfSnzMVairBU",
  "key6": "2fxNvFSLzbjP5WDk9nJvQiDCMs7XvVh4jkskQw1UyjXZnAnVpPNV4uAninJ94nfXBYmUZXbbKRm9cXNcX5FjCadC",
  "key7": "2M2SZ3LLHjMJZA6zLbp3z4Tp7RsxqNWp831GhZ1KBcq9pcMT6nPWUJL8dWCastVNcCmRRJ5vBUPE7R5gt8XbFpwk",
  "key8": "2CrJwKpzGUpswgFckAu8qtwpQJnVfdbE2gJKYenUUjF2abkpxz3FW8xedUxPv1MkQYHNbPjxsgsuqHTBBjZrDcPG",
  "key9": "4Qo1PgeNgNT2y2sc6voUbkkQMbaezmEGUghGSRysBpWUh6hSAmWrbSSzTY23hoP3pXDGoy2NophLF8vytmNuKnAc",
  "key10": "3AyaQpK2kCpaKyrNjZwWg9Gnhb1kuEFu7UaLynM5asNhCqK7coZWvJkEawStECUGYRXCs3edimYjhQuUKBqZMf7G",
  "key11": "3ZsExaP493M4RD1SWaoJUiLk3yCB6HfSttLfrNVH7DmyCHVEE3WPtYR9VHETXLQFR8Vr553bYZqyhSsEgQs7Haqo",
  "key12": "2gHVjUY3nr4FxGY48rtLb3C3qtoMkHYkrGEzpK1ziH3mr6i617NDwpqqjx2mhpTuWxzxtj2QxSwifmAkTKJaXbaY",
  "key13": "2kqNfWs6vowMg6Gk8YdSywHHiSsxGHK6HPbRw7nWDty3hJcPgzM4WJ6i55vuQ6fobNYfQfevHkQrmgCo4Pe4sKAX",
  "key14": "5DoBayvzeKF25PcvX1azEUc56q6orxXoYAnVg2pcEWhdnkKA4yye7Z3EYBCcuFNPVXFwLYGGnm18wRKdN5jzJeVV",
  "key15": "57fTk17uGcSoovdsbpbpRUHXPyFjEosSkjdSVTor7Bp8t2XWexFxvS8198hA19QLGPy4LZ66xSjbwUcKombRjy4E",
  "key16": "3Z7ZYruif1sCCFuVDSeeXUxXykC7jsStrBzLnK29RHpRSDGCwjU6RoxFNqZVEq3jJMWPKLnSibbJh15DRVbXhHEi",
  "key17": "psVdQGHk2fefC16bfWTNxeJjudKhaxmpptEQipf9NDRkgyvtLquWETtYtT1VSD2A6RE5FT7Xhd756jCnwS7RWZo",
  "key18": "2N3Wc1XnRqJC7xR15AS3sMC6G9PP8DBxskbmtduZ2DzC4By2UrsKwQTxTzmLMW6CfBjM8vFp6iG56mmhc7AGNT6o",
  "key19": "5ARwo3qh3AX9iTyhWTdF56jPJo9qofXyq4vuHekJaYgW5GcdKtVeQ4VC6vs4UesoFFVXEqFaK3bRsCATwBtVKUyf",
  "key20": "5cWBGXfDB3yNVWrnAvHqE2YhgUCA6mtHLT5nudpd5K5jcMwPXT9wooHK5aVvNFiuwozAZEuDEjiV9t6ASejM5S7",
  "key21": "4gAPYEkSw2FzZ58DPzqHzncH3P7UeJimUrjuEmcUkkrSPPCpYXwxyvMr7WbyjZfLimRy5vgj4jzJNvxdpu49BkWx",
  "key22": "4uGbzoFyHtHKYaKYr1RxXC2K1z2UyRvYt7aoGk3cwj9KS8WoKwx1ycQ4bD8qdGCSt8Wu1Hkg3CuYzopcVxRvXxYV",
  "key23": "nx6AUGHyQuefFSeFZjBYPFS2jFNZqFTSu4kFu9qXnZCNknaaMRWE1wYD2TYn5KBneA5tciRMLRW7fzWJ3268DAo",
  "key24": "4ofEB5oDwySqtnevmDFvgoJssbQvyfrmMBX883Fzd6YCZo8Vxyoh1LgiJUyAucaLyVFUFeiztNuAQSpTNkQj4f2a",
  "key25": "Ehcckw9GW8rwsdBi7XDmujSjsgYDzhdH57GCx6TxJTUqLCGSunhdQz43RomArM7Q1qGLMtbZAN28bhDhb8HXECW",
  "key26": "35jCPP3LtWU7BVPyukyNGmRQaqjNVJ67jdJpC2bThT6PdTstPAVWWpjLiZiW3WKD4tjRq6T3o24AXTJ8L2kWevXb",
  "key27": "3VeNbChe9JxmP9dYbMYVqFPAYsJR7vwgwajUkTK6VdNe3C2krhvWyFnPMoS6dt2ZCVctkqK7NXpxomwttoYJjMCC",
  "key28": "2PxDcezgHF4GN143JXU5nBGNRyfWSVGFjjKdPbC4FiwMtP4HpztzGBno85QiqaLGa7Q995KykwjEnbSbTaiStgt5",
  "key29": "2vKbPF1NNK3qooqu29jNqCWwpA76b81vUDpSvX5K9W1tm59577SRiVxKNiyzhw8PEuVhm5X3Q21H4LT5kCDctgiw",
  "key30": "3Hu41DRmd6r5iGGLMN3x1fABCPgbygWN6P5D92DJRffRfb1s6ss8rxrnFWKGFVM78FgzQ9nQcu7mGgaYMTBDBgK",
  "key31": "3W2niYbLSpVM4ZGQJmJV3gnzvgn5ft8sUMQp4vTVsVozfrPyTVapTjGC7mpbFgcwJXSzAgLqK8GrBCVSVTsyYFN8",
  "key32": "4wCDXu4HPTn5AHhk7ypZPoAUn82RMVdpHuxRr3rGpn4JGsv8MnTWMCybLw1QAZh6V3GtR5q1W4VKHxoUDVwhX8T4",
  "key33": "4Nd6ofrPEfhVn9zFwDAn8tPqiSrs9mqK3aoKNER2pHDaw43LocL8BtUxgb6QYYdt1BkrnGSWskQUqXQg6diUroH9",
  "key34": "2p4DUyUB9ifZzDvtjCo17fSZGLqgtwfTJLJebfRo1mq8Bv2HwNuiCVqjDEK6yMg9csG9csjmqAqe3Zn46S985bZE",
  "key35": "5Nw2okWJ3dAf5D5JsUr6GsMWfXBePSHHC8RRPrxGApN9aa5uriMVbAVaRpKXDEEp6TsJRpL6yrwyCxCtdUfaFWfj",
  "key36": "2irBd4zzr92Vve54ndKLvF5vZDSy7D5p7tNNHvBQhiCRS2THZKRCu2E6d2Qzj7MxB6Z2EJNEqKjeh58kQ6ziLBJg",
  "key37": "ucZS6PGv4Zv6JFMhrKpVMGMG6MQnfVaVRMZ5cX5h5gaVdHqENdPa6rBRycgXuycCCy5f2QsbRedHuDmtQH5rUfC",
  "key38": "2n9Qor3U34T4ECu2g3YQVMJSsQArHqpgQi7jibTkgtPn7gYAb9j22NSQAjVdFJ2G6e6unM1JF8M398juzJuQupLy",
  "key39": "3ABnGLfWpkmdCfdeBWTgyhpJm35Ws7eHygeGQggvsqXx6YL88fZbvaUvQ1qExEwCcT1rsdLcbyqGvdHwSHcTzBnR",
  "key40": "3SwLPrk6JhFRvZPDqTD3x3DnZTUWR39WehftxLNRLj4XA9a8JgZy294fJ8LfvoBkQHYhcy3mLkMNgFQwgztY6QRV",
  "key41": "4phnKLU2iYLEJvEMhbNEAVxMG7X3GsPZJxNgRoncNzbynRycZekV75Nd8NkDPwDYDtSAgEPi33hhVonUdWt9KzDL",
  "key42": "8jcv3EGP1Mpxr4f6ox8FV8BykxRTAT9qLxqvDbVoXzYx9dsNAZTzcKjE187eiMngEzBGmHLXBPL8P3RnzDR5SdB",
  "key43": "5QfzQXFT7p1MhZHwDgSDukaDoBLATdunXn4uKcsPUkimiCbFQmXuygWG2r44KnJwmu8zbFomWKwN3YY9NgKE5LGn",
  "key44": "hRxnGgqaMSHvi4BzzNKujr9t54PAn4W3K4JjwerKUGgZ3BnLZ4MMPEpCGayDDsLpvwenwpub1ULiyVf3h53wc4A",
  "key45": "3iauKhV44wdsqvDZtGxiZvtf91UFdjgW4jYen2UN365QJ8Ab4UAwtKdhL9AjVkrs9D6jDYoPmMwZEJuarNwU7fpW",
  "key46": "5BAUWQ6SexurgyjncGKyjwRpx3hKQAyqVNcBExkxxiXea2L4aMH399y7Abs6v8KKGoq5voYHraFBoCCkNaejSf5B",
  "key47": "4Ut28kRYTAUpd6Cp6Fw94kHq9zPcHwRXkFkq1kbZgsraVLoVPjaSav3HoEXntyU4NKckVGbpWbjwuPgweiVBRPJG",
  "key48": "4AgEiKpsKEUjuNmPmrjkDahoZQrMBstvXpNm53TPeamXPtDCqTowNyL591Lf9qEhCq6Cb4QntDMhTnoSdbFpojqc"
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
