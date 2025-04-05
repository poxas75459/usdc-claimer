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
    "3epF9f5gX218nmzMm7RiE8eHdpWmkcfUBaDo6CzvmUQC1EG9Y5oR2rVG2vj3Xy5JG6NyeY4JzEcEu82QcGX1rjtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nnmKLp7Rfn16mzJc5C6KrXjE7eL5daCSj6RsSN5NcG5EL7Aj4b3QwwbqcU9FREPMBqh3FwptL9Wi9rHLAcnQbSk",
  "key1": "3XQHGDxuDDLXbvf4fACyMyCEFaq7VPNkTJ3e6UrdRvwRTyqhxrxLWAWPYNt83DWcVHP1W2nwyGHARisMFwX8dsXP",
  "key2": "88YBX1tM513XnW7FB3qDB7D4jDeYyVrFNWzZxSqoiLmCwF28PusGesAbkEbjyg52sSV2yYGPjZ5RZcDjBEMcGd1",
  "key3": "2QTr1QDCkuPJPhEkyrCkz9u5KG5iv9zdpF3FFPcmVjPQCYxnuTnhqeiJdai3cZzMAFXzyqSP6qrhZjGHewEDRxAk",
  "key4": "5XJhwfqjEE6uBAe6UjZCFYQagTj4qef6D5ZTEBkMz56GtcwM9CJkXtre7mTWRoktbd8iyKhPJ6N74hBRJavEikGE",
  "key5": "35smN6rm4qq5X4iDeooPTBr3mW4gjAEaLVkVRr8R88eTfKstRJ3HcLyiXwaHmGfB9BqDFpaooPTKu4Ds5vwmqYHT",
  "key6": "3xshVnTMcPaiqxc1GQU9GjozUeZS5PVtUANPTxGzdPt8koyJ6zvqBGP5QFVoiV9smYojSAMxewsakxEQrXuXyuhg",
  "key7": "5BVEz15WNLs6rwAQZXEbsL8w94Dp321ohNjNMn3m1K3XpREeWAxQcbNHNr7v9rSYpmxbqJpGNTKuuZymX2yMorF4",
  "key8": "zyH8FYy25uZ6Fmk1v49M3NLH2P9tz54rf1abo9V3HUBvt11SC1hD1C9rxWb8kkrJrsQHki28wqccqnjKsbCFLJz",
  "key9": "4rXdD23nsahbNjqyF7tBcAwMssEcUrJxPwuUhW4vGGoRCU7ajcqpxbHvv4X1cZYnjRQAp2jXzKrJXXV8iVvCcVjq",
  "key10": "3EKAL4tz7KJdTEpp7wH7CepQmTp3j6fYmzNp1A6FkcW2apsAE1NmARUUg2MMwtfZxjMAy43KQtaYWgN2KphvK5gM",
  "key11": "26CfA8Rzvcrc4ocr2UQV6R2rUYhggvYBps2wkcdZDMJTruY2jPnMaJUWSRYDHuuQKEJ6tmvy5ZteYQqX3Ly381SG",
  "key12": "5topyVKuAQuApq2QULSS8DcTrVSPpgVR9zdx7nGr1enHJ53JHmif4kuAYX41gyBcxhiHxZB12XtkBtVyTngMHwGr",
  "key13": "GAw1nfZwZWPArsuqgTLBBV33ACbg8PFKcbT3BLMmKH2Y3GCMzoRpPRTqgFhypdABsm5cAXbWwE9WHyU6tfp5AES",
  "key14": "46kpWnFtsr5Vn4B8rfhD43oRuPDtcnqdYed3paHmsq5b9shf3RQ3dXL4ruminGwUYaXuaUh4uyoxNpCvxXfpTML9",
  "key15": "62aU6Sq87sPj6JjQc8kZfVLMNWoWWtD5Lq8zf4fM4FKJ68r3TKVp8mXtPs9j4aPHZZs4ZCqc3wpsdAKbgvGCpKvL",
  "key16": "2hZ55GWKiHVeX7hradgs8W8xEkX2X4LmDAxUJQtb7HgywTKX8qVSD8L8GofgU9NeCWQHy87CE8NzcsHa868H4ecE",
  "key17": "3zBdNSEauDsq49YNuP5HRa7SFepqKJQqmjJDh2c5o8zWkU3BMFgXwRuNiJTTp4kkbS1SnH4EZTbXSwnHUNz3QUXz",
  "key18": "3oGP31tzoRvZCuFKJz9k6ami21TkzAkbZVova5K9KUpLFYTikpfi3515aw8Rfd9EX8hjoQUmrKcnw1DwF6c6x8CY",
  "key19": "4H2t3TjBJeRWWwZ1VTEgy31zdyJUafk1Mjj46dY8tRxWmvz42WvLr6tMXk3EhpXHyqTZD7TTK3LbK46DGYe4cMft",
  "key20": "FGRPvFv3hBEhoBRVGSQ81QkQGLUsegXHQwNYvT3Y8XDEiTtBqNggonxmNWHJL7FRkekrsKbYjpiwje37Lx5yFQY",
  "key21": "3NVqVNpfPdxkdiaWAaFMsTER44B4ESeEvSvi73bJ7YNwnHHyhpEZsaCpjYSsbWQMtNcDqGx2VgKUHXrLVcumawih",
  "key22": "XYf5XSdD2BpfpPEYZKkkmH8FVKgP9Sxbpy44578b1rLQYrhGuB64TeXB1ANUsvVZ31nFF7AFUXBQzuovj8ctk38",
  "key23": "3ErruEPLDTt9vmEdLFBwfc8GDwjY4GDBrC1R8RQZM12oar5T3cUfTXUzDwwvdKPToAFcfeKLgXkyiR66Vv45mU3y",
  "key24": "jjetFxyCZSJKJXRTCKmtxDegnFRcaxUsaTc893xC1CfKiiNn9o4vxp9X32rhnZwTLEjVqe1NgtGGZFAvMJPqjC1",
  "key25": "4RDMM979QUNQT4xUNCfMyizYdP7fvDLFt4D4ajE7pi7sKEx5wFEwSgfABxAhjMeN8AWNxemFS4jkwkv7qCHMbBZ7",
  "key26": "9ckPcjUY4UrGPrAhoHWzJfN3QA6f6Gkkdtv1NHLBaTk7zHe81UtDh4HwM9nDKkWE3VABhU49vTj5PA9m8KtfzhW",
  "key27": "32Vqu5JsQ1b8pfJbYNUPqZB9gis4SqKD9Z7NFAZRHkBq7pAT94NoCw5wXksb52xhM4BDQoTRYBc6D7rY6cua3q9n",
  "key28": "2xCqJuh1wjcyvVQLJF7bgomtr5ExuVXR7AKxa7sZKiqC65Jk4cazWwCvUVLGh9cszC2KZZgnKF9kpgFHJLexdtp4",
  "key29": "VHSSQwwdgG547Vq9VQ5pPn6t3VTTY5D1EdhapTyt76Tn8DXs7oxubWH4qHrADzADqgURhVzHLTSJgKYBchCFLvn",
  "key30": "5aGc1WpNwtBJjZmuEaqPssmi6TftA6vJAEKR9kGGwydTAeg4eAB6e67djDJc5ghBMTZ3J27YzHzMYzhmjLMwDwcw",
  "key31": "4o9dttUioKyLSpUdGsWCeyb9PEwsV545sBoLadpjYghVDSjnq397NYmeN7bxBdc4xziPQDVVfPCxx4FTuEWicLKu",
  "key32": "4zuU17T2FjvAAXE5dm2P4S7XbvRqtVKEwt6MaRDu6Cs5y2xgdcXzKqM3SvHyT8f8NJomnpQUEVuLJwhZpFhSNAKG",
  "key33": "5TMP3nKT3FLHvJ3ZVhP245RQsV525gxCQo5vuDDvo9Regbzc6HPHTtPN4CPyeUVrEmoq5ZvXMGmHdFTo1xBBFTtc",
  "key34": "25jqvQrW9Q7YbakQZi7MM2JPciRh8cqs6gFw3Jq6UTrFdaUw6acjwRWydPkzkRsC8NNPDpkQ1H3Cpu2oCyzE3kSs",
  "key35": "rewxkmN1zewWkc6UiLwqUZ7pj9Js5589mJX72vwcZaKi72RLChroD31r4uiy2oq3yVaEfPMwbGfAPxq85vbPFBA",
  "key36": "3TqhSYPr2KXfHEhkzzpNE9uHHaPYtykUUA1u9TZZXt533njSpBR31JpUUojvokqaezoNi4asYu9uDMm7GNjg1HNC",
  "key37": "2cMKNV22wuEiWsZ8Z2kjdoYbNRvwZybvdmrxULkqcgcLdZxfSdpPs6JQznXNsQyZEgPhZsMdZC8ECisxdLNLk2Qh",
  "key38": "3v85Hhn1B1FhjNGRNgzHMCQQYctNEwH4pdkp5H8vqNvRaXqUopFtFmPsgsq16xsiZkNm53PJyGBsLxsdBQqPnZYA",
  "key39": "3uH6tY3e5aZ8j6jgfAeRizb2fEnVMGk48Q5b5j6htMKdqxg2GDbEyoyMXvsNqz3q1cgh3v79K8gbwqRFmcfbZKes",
  "key40": "38uZS4qXNMXZxbHBUodVnN8TSUY8Sm4TWijwAyHZWwmwFe4JPZ7GQBq5PGX4xJc1dNm7ZHz4XTC2hmKTDN13LRJB",
  "key41": "fYsjZ7YwUQfUPDgQg86GQme3UVeFzAorEHfh3LD9AnEDQ82V9cRho6PxBFejVePsYpcdpEtmDyLHGJXa1eTQvkf",
  "key42": "4Z9DpmotusfLCX8mjrjNNxyEcWkTDsaBtRvcTYCtT6E2cCkayi6EMo7Tf2NDPjUNQf84yW52DvFWF7DjeCQ5tRDG",
  "key43": "qTXoJQrJve2V4p8Zz3D4kKF3DqPRxgoYHN5F1zkNZrTesvo9eZaPwPaAxB4WesV59SdDbkK155CTX6wAH3Lzh4T",
  "key44": "Fgi1k5BbKUd7dhyJ2Wvg4in1DgxYbtRRVsfhq9pRQtQ43TjgwEWFjqzKdzt8u1XZzYxnqy3gsGiTDot6EmNNrzR",
  "key45": "doMfk6XsMqvPTtd9KuZV7NkZc2s3ucqjZeAgBFRdn3F1DiAQ23gdk83ozDUM9sskAXyw9cfGKPZMwBiyLS5RK2T",
  "key46": "4pmKVPbmg6pHkx5yCk1xMwCFeFKtVxbJ3v7hdVg36vQM5jofi5Y1nzEEHH2NEtQ1EpTxYigCcwUpBEjoX11eQYhe",
  "key47": "64jxjY36SYdgDSkWBLaSa8DLJndjeLm3tkSrYuUibQUhm2np5kHb3LWkK2R1Zpox8Lnjtw3u2UM5txhGWnVQM7Sk"
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
