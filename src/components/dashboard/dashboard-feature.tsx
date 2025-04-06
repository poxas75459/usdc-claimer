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
    "iRraGHvvfwbbvpQ7jRJB11E9cRa99sWN3Z2D4MvnBN5oy9t7LokE7DDiJR6oX4dDZCu6hL5LZipNbao1R5ZMZ5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zgeEQ2tUc6ZN6anHjV1ZE2MdgUpuFBdTxEoVfXfpd5yBvbFTm9ZcAAsTEXzJDtEQ7CmhrfrmYAtBjj9S4h7FVeh",
  "key1": "5PmX861aGzGCxSE6A4yux8NVsM3vqVai33QuXAWKzA94mkCkh28LBmz95t3HJDG8dAthzrHrX5wVc74op8pxVEBW",
  "key2": "29WxTcNcfJDoGfNnWCB2r2ftVAfP2uULgNpvta9n8i3NCiKyFAoC5eAWJLrhAVSQ1Q93NUy4djLAPf4NRLHuJRrC",
  "key3": "4B9ZHNmQDgJ7wWd1CjFEUQAyQeuhgyD9CGdEJWpFsYDEMAsiwFvQkgeqCWCAoXvrENGvBfsaYnnzo86uLVFnwymx",
  "key4": "27rGiwAcCKGEWjigDbE68DQChYgRyE2hrN9Q2AwkGV5FapkKRBibKmLoTXMgubu1JHS4GZ56hVV5R7F2yRZNaqjk",
  "key5": "3rD5d6WaB99cLsKmTbQnM6JvxWVoWCDZDTSofCzttUP7BgM8afkAzo48Lq62sjCyv7nx4szbxd2ZVUfjBFqvM5mN",
  "key6": "3WsujrRUFefwBjkukQ8n5hMPs7q3sQ67BaYVGqpCXP9g3uYCRHWKathGCDCJJifLA8shngKK2KBLGVRmwXmULGyw",
  "key7": "2CjtaHN4xzoaa1X4ugGvmC4cG4AL7FJR9EBCqB9fCeBDdkckapdiZSLfDtmm4PNULt57pym4gQNw1jP4VAePrzWa",
  "key8": "4BzT8rig1cRV3MLtCzkG2RZ86euTYoqiVfjvqNjwFdtGxai7EFb7kFkvG6ogqj6fDa78XqtiCi7h6pT4UKse6syY",
  "key9": "3ZQ6S8HUNYEt4dsTgJGz88qeAY9imcpb4JrYk2edCo4SF5Cfw8jmFNBz2ZpRmrceoz89pwJbdDEe1p4Bbbhr9Hs6",
  "key10": "drwv61PpY91GMvMqB2ZoMVDW7ujZZWAU7jh7mwuSGUhmstghGyQKXfhSyCcBjAG6oRHCQLn7MALoJr1YfpkoyJv",
  "key11": "66W9DAjBAcGafjhAB7MRoZ8vzgx1ZcxCybNpEkoVKZ8dTpW33jUMGs7RXwhUzi1nToMqK1jqh3yzLgm2eWaSh246",
  "key12": "y1iXeGe6n8931L5ALT3sStFecre4Ann9b7QQmhbkU3cT87ahD4UXaYKU4af1VqNwySPuXArPjCTWcUNB7dNxq4x",
  "key13": "5215dTPXZmBikL2oL534oKok8igpZqK8pGAt3C1K1VgeCBzLPuKqk1sEpxwrGo4mw2bJfy8uLowWgMYJVCio8L3b",
  "key14": "5Uo5rMSJV3uQGo83CtwHggpBGahKCQZb8sLQJjsqbWbH3XrmWNAd1iDyq7uVS2Fp5QL2qoMFET6meSjCZhQTSzwv",
  "key15": "PviEhJPpqcqarMxXNhssEdzeiMFpJySG1QWA5eDXBVCinA9mcuw2JaS1HWpdX8AXQaqe57rbL9aQmAWxpu3iCFq",
  "key16": "3FqwpodwkW7y7WaqvA1iviisgLcBVaUk9WwqubvRwsaeXNeA9TfHfZrtMXGE4L9jN8iNS4JghDyhzBAyxNaAc7v7",
  "key17": "3v9ca8fVVmSwfLMFvH32gXh4YH7MfwhC5XP4TfhyWDR3qpojhWLj8VBDnX1YrqjAT4KKxZf4bzqj4svdYLXZsM5V",
  "key18": "2xkAoVijDjfFzo2n3UtESJrPkxGCNvvUSsA8Tqn5ZHLemfcJMNHtcxmo8G8iGANWo6R13X29G7UhE9DRsQXPkjiK",
  "key19": "3es7z8bog9Wven4JpnVbnNN15tjo6VdGET1bJpV25PmPhJKxbjThWZ1ZuLt8YxPYTwG3ECg5o4iiBoaTcBK7LVNm",
  "key20": "54HTXCaXsGJSF6KGM6rYKrywYuHphk5uSdWYcrnNuY2KSwfhJh8YtK7v5ndToJmd5J4yCkZamMkk1eWPWJaijG97",
  "key21": "5tBfjFsS9ECfMbdd3sRKqjym3btojD1cWVRHSV6VLjhXh6Q2cCNvhMRF6avm2d7x8soAGtViVWrR1QZdg9JDf1V2",
  "key22": "3nBKQQoTWvwTSZbXNk5ky3EP3hKA6goXJhZo92eJHj2UJ2miCqaNJfhQtNVLQGdunWzwPrJtenieF2uwLePvLmck",
  "key23": "2bCdRz1DD6z5xk54HiVx1pLU9ofX5GG8piaTh8obZx3Sbzd63f353cHMZ3XEK4mSvtU1zTH5QDr3RN6AaxMFLwv8",
  "key24": "5pNdbVsCT5WpMGrnTSrB91HwkQncwRLGx6meKNiCchwp6NW4H1uFzcPqUPUaZ8mcnpFjp63sz5daWKAyF1RjcJNz",
  "key25": "5aqXSxQCAJj5bWhuhPu5Mza9MUeqUzJtahUnPBJEz7bhN3RuLsSwKUcHwdaYhe6ykaFzN1jF5i1ixzifM28P7mEy",
  "key26": "3sVEUDekw1KQfRw7fZU9JsGA2RgUM2yKXrCHi138EWuiyaXkFNCEqC8qcGhd7ARYaAfux2h9xdjeeGn45Cbwxbcw",
  "key27": "4bpvG9U4nkXsxnnabwmzVAqCKsFXFzLgLFhXeKCWVR1YX2D9DFUg5q4Qxn2Smw4HnttZYD1sy8XbzpmHd7czM5UQ",
  "key28": "g3Tzo1CLdLP1AMi79KvxE6tY3bjqUbsMRj3TmonQgXUy3A42ZxDaAmdUZFPGq3qQJyrDwfw3gNNyu5tykYJ7cKh",
  "key29": "KnuLUY3ueHhJBHHGJnpispdsPWZ5qUJJTiuQ3NVtoeEpbjmttr5tVVwdUe1FpaRA1AEne5fA8UhP4U716Ge9n68",
  "key30": "QcViEiMiWPwb1NZEQgUrioUzW9uNBhPtfGNf9DpC5pL3kSsJeXLXhypzkQ6djiwSsymvePYXCjyNB77wXzdQJiM",
  "key31": "JwuH6dQdwc4hbFMJmn9GbfKaXjuQoAfgmiqK8K1jF5FnaNqEJKMVDZCCLC4EJw9Z2wWVJxbZ6wuyWvmoPg4oPfY",
  "key32": "uNWf5Dx8xfDQffNd9bqDsr8Zv8dEvMemZYYUgwbXYYuaHQpJ53zY3mzpBU4Pu6qCJ8DWZ35XCS2kWWHJsBApFKh",
  "key33": "2ho4vqTAHtjbXVQpnz6PLu7PBoVz6hceAEAUe4i2tjCx7L1FGaGZxyDeBuH6s576762yDqg8Z8yuqk7RVikTmeHs",
  "key34": "3inc7QQbfFn4YkpZzi1uoB537iPsfY7NYiwbxDi9NZ8LmSGCUWqNR7Jvszi9kRT6xcEG5HjVtYiYMehjGb5BXKti",
  "key35": "4hufkCM9RGs8B65u2JbYdk3iiWh4tdcfGrdVMPxCGS7YB3iA4Pdse8pHJAh128QLAKkuKKiAFJkbJB2hsrmiAJW9",
  "key36": "8cQuvPMJS5PxNvqTePC6Hvhyyhqj6dJjYBYnECkGhyyC5hx3ze7Z7DZoQoaSvdqpSrhqhA2qxbi1b4HVaN49ZSd",
  "key37": "326EgTe7DSvVxj8iYfTSJqbZJXftgvo5CABPkamt79X44DYodjpsu9dmorK2kfQWr53T9gk6BcnoaiCGkdn6LCkQ",
  "key38": "5gceQzq24ekZiek4vGC2k9fsVTQTvhosYskFRGvABLC55Z6FdrUsc6ZxcvfKTLgaKb6NXVG4oBxjxq28EArjkRTQ",
  "key39": "CPqQupfsvy2t7qDpuA11WqMLW2UZKduSjoEiVw9nAx3ZKkJbK9g4B4WoKjfofr7FBp8nzyW7axm7ueFewwr6JkR",
  "key40": "3u4gDMWDgMfaLo6dNvHJFKhwQvc8mRTXkGPrPqgvNkpy9nsxNRi8yzcNWnkoyp42dX3MUvi4N58YPo7ecta4PYU5",
  "key41": "2STqBnBKcdrtZ1yam5Q7eWxJXkeE8yaFE6mz1qwTAmCtwV44rYhwLPi5PxxQKG2Fm2NBshVniBpuy8RTxe2onEiQ",
  "key42": "4TUkvLaiYyv9BXZ7uTXuPcNgCTCoaF2wJvmmdephHyNHr1evTfq94bhipHnaWMhRRgDKDD5LtvuoQVvDBgT2r9Ch",
  "key43": "3LHES2UwhrpUawj1asVQAhSaVpr1PceWHBgFe43VW9QsnuHBSTEaSY4dmound5wv8yJdFpkwQHEA3R8dcvcZPCEu",
  "key44": "5WejxMHSrMyZaPdngaVkd9LevEbmdew8thb2PLYeTF5ABUpxgd8wW4RyxAZQWoYgPDpZqPD7ZMKVepAUWoq4u4By",
  "key45": "jV8vfHENgiEEYTUT3qhzQ6TRjTvNS2oaR2nZTYRt3K7HT19gpyJD2KpdfALB1Fjy7j7RaV8okERE5S49J6LbZPo",
  "key46": "QoerQRk3F1CAQ5PzwptCb686HgwopX9G26CT6jbvL9YfgejLsi41eyVEpeFFu9K6m8NkU6FPj4iKh5A7CqhNhtz"
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
