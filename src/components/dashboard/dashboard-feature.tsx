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
    "35fEkN1tpHRSTTE2HyyWAXb1oaHRndsVJ8RU4MjCQjaeAMghWrRXyVnqWg9WE9hSynBaN82a7dbFCqVmf3mR8MTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5meBTBsWCaiLzoE5Q5mmqRbrGxUuijavV1uevAjweCvrqG7nwzpcPk8DnMSo8Xk7wsevoC5XGF8BTsCbu8A28gGq",
  "key1": "4mZBUV7ddNSiYsA49MbjFdzTtNjJmjGEkTHcgYPHsb9oYBwMJ6nweZVgh23XBQq6rk2SafBQGgBW7AuarFpqPjrR",
  "key2": "7V3TpKpT1cThr8re1Gfa1FAU6YsCLf2MY2683KJXVdKpKX4PuDr4tEap7c82f4zsWxnNoxtc7j888C9fYnSPw5e",
  "key3": "2iu2U4ysCiyoqTT4Fnjvx18UnisT2o73SrmZJLTQEYuXjSkht5yKXFi2bScE7PnPrrBsPy53kNFka5NxyU659XZ6",
  "key4": "5LDH3zM3ykGdDADKjCS7YjKr3jmezDsFr8CSiksDzMe25vWsYNpm6YoHZhFxMSb3y7ht64tuQXeAkzf65K8VmjWV",
  "key5": "4J4kPT3NNzpK7Nk6LunNUjSkNEJV4fEHtUxA8DRQp3b2cBWkaN8uHyrjbtxCpsZXTQZT8S712uk9NMkc95dRENKm",
  "key6": "3wQFz8VTWQZa84RDd2GzvceMZiv4jQ1Hb8xuttfxq2gNNy5r6oSmsjdfGiYPvJiTrNA9YxYjsouorjXsivwS1t67",
  "key7": "4RGwSonatjdmP8ojvsEMzyPxwURX9qHsg9au3crUqDLYkzNPPLZF5bsrffM6x5HztpSVHGA7SsF45Cm4cwXPjjDm",
  "key8": "5pfc45qXPiXaoXjJo6BtYa1k4iREvLfxsTinrCZTSungedSFgVV6KbKccKk8PNX7Q5hNVa2tgts4rWQKMoZjDVC9",
  "key9": "39CYHEfErJrCkZgZ3CzLBZMHN3fxo39X7pxG8KeneyuBKMFD1uEXJWqrYNeUjkjvdwWS6g3m1bxUaW7p2toJxtxX",
  "key10": "49s5cWGXnQRHCBpdP9L4BtVthAEf7oxHGPSaARA9rebr9biXpKptay7LkQo74B8W2XX1uHkqXWau8pLeKY4yKHvC",
  "key11": "4Y5CqstKnAjsSjngtggceUYgKKtU38K59iaXGDj4jF7mGx69GEgh1d5XGUHTp1watHo4Z1g3NkgjWAjr9tvdJdcr",
  "key12": "4vfFpPKJMkpshAE8ev74p9C8QpkeTWdhBRAaFK7f46MD9rSxDRUiGyQNqMyW13x32hR69s5jPoG2XU3t1RdAD1jX",
  "key13": "3kB96qUsN8YrR3h65xVLpn3GisLsTML6dcdrGbeXDhmAX3wuNzsB2uk45t9Hx5fz4aEJ4v6kf1RnMmxNNq118pkY",
  "key14": "3M77w4Yw42cwb5fFCx1LKPVnFvdM6nTptpEgnmJcRBVKHdQ82MjwHLGgUA66LvDpAEWwgNVe7cne8PwjRQ7NVsFJ",
  "key15": "2Y9o4X8xfWmLr7Gd6nc86w9FWYnTTby5koteR36pNh6DhLeM2V8JUDfFrTPALeNoqtRu3Pr95iDR1pxj4HnNXReN",
  "key16": "5tqqHcN1vusGVLgiZAx2rdw1NzwpA6bkTsyS49jH2htucm5AWJa1ZMnUsxk8U2PjuM5GXSRvAEsc9jkhVkNwjqU9",
  "key17": "3dYUXiq945Qm7uoWMa8yuP6yJUV7iuqcET4gvBiz4UDoEawDCTvafaZ2t4ucft4cpy6SYW7CcLUCfm2m8ThDdMGx",
  "key18": "2CUXbjGhz2SQ1PHUog3EVSVEe5eT1vjqnyxNBkF5fnoGcBWta5BNioAsS69rnYLefokJPMkh4oUhDLLs2q1CSvaf",
  "key19": "3Ec4CGzDjENh7sjWvM2YZSUr3YzabjJ3AE9wq41qf4MgZwuGkN9ruvpGz3sSh8yHnoVf7Rq5pnyDGyJz59h5bgBM",
  "key20": "3Awp7x7MiyehtKsrRox4Uw673afP5tCiC4rMjwH7doaR3xaursbM8rANfzSGPAgUm7gyjQUKgr5HBxdcotbmU1u1",
  "key21": "57KKDTxp8wBTb965xpbdu7qxoWF55RMd6TAxMFrS7XuMzZFxW7Ad7qG3uY66rSi7BD9yLriLEsHLyYz5uhvjf3VB",
  "key22": "2F9PKmeKmiftepkPXkFo15QTHrZDzwpheLeopwjCvXkNySjE9PJ8sVYj95eThZ3xKUmZiKCtQJv3SW9H2hUWMxhr",
  "key23": "H43YZRDf423VFjJHcD9QGmpyvESmDDbwoZvrTxbUXaUCZWsiWrpUEXq25Di2B3TpY8BWq3mTAgMP53LTcuDo75Y",
  "key24": "fVKF1dZmAxxcjX9hT79egQVoGtAd9SXD88VTva5eGySAGPqdwK3kE8oJdsxmWy2f57NMGNyrh3xCFGcZyZh6qhG",
  "key25": "5BJH6Ss1sg8emQw65KiaxtXhVYY8aGnVMNMXqFpBfBnrxGNu3MQgdRAtJAqEjg22cxuFoiStRwYxLwvCnznc7tQt",
  "key26": "3QUgEJmnW4QSfjiXuYzJmKLb3rnGrsW7kXfzWZFiQ73k4dqkMA1w6T5RP14BVkChv1Z5XpwHTSRu1xX9a7MhnqEQ",
  "key27": "51ay9R4GN6WpAY6VPeSBZeMShCYQFvVqM7HKkfcsyjeEw9pj66jebccpGDx7jdevd34s4x9GH946LrdRYTC76tgz",
  "key28": "VmEaxSsFKGL4kNJJG7wmaPqhkxNhT5EUf4tEtyKWoyBzbUfDMdyTQo9CyzDyXUL5KJprdNkpujrW2vWPpdKCHnX",
  "key29": "4PWmK8yTWZNpTXqe5x3S7t7eUB2D3wbtUV6gNowRYmwJPnGfgtVyW1EEiMiip8hirnWP6MAf42VsTmUwZ4XZCcZd",
  "key30": "4ZuB9aSdbEdxNjDiaViw5zLN8hGTE76HrnTya5NZDst9HMpkTWP6MkMW5LCryyczoQj8Sgov6wMZLT4uZXFiGpPL",
  "key31": "5F1ibUFcRoXhheVrswXiU8Na13ZD6wiWncJWnjgWxRVWFuG513mpND89yoez3avmWU43xezirMqDBKESKmWbQBhv",
  "key32": "2jemKgFS8A9Aw57UtpTMZgzRz8b1YDMdU3TGtbxfXKA4uxazSMQ5J3CNZrMrGoSqeT8Rbx6UM8QKs1zeiWUNEGiW",
  "key33": "hvc1eMKzVjKjnC23gdcRbdgGXcndw4Q4MCofLC8PZ4fxdLBGNposDkzBFiPwKL97PzREAVxXU5UuqXdoZ5NfCaN",
  "key34": "2NoF6HgMSnvKc4doFZZNzutZFxeRdQF8WbVRzGncS6GzfG6piR7psP6xyukXugrdwxTgc6ziDctjA97TfYArG9at",
  "key35": "3G7Yuh1TZ6a6jHKFnLvW4XTaKK1BvKQ4Vxa3eqTnggtNTvt4dJHxi6mQPBGHAqomqq3tmcK8iiX57BthfYDtJdB1",
  "key36": "2YsdVD5k4i3Ssf53BAqjDMJoYwdcZGos5u2QjKyU8sFYN1oS2oE2wJNHfeuXAwZRNd1bpp3YZ4M3LNgqEogHbc2r",
  "key37": "3GWJRJab7unwxghDmHZZqWV9KEtXv2nxScYs8XYQLGVkJomJFtRmXcue6oo9RYQcfvX4DPd4pcbh1WjVVvRVyu1b",
  "key38": "5JmkopjZeMnfWz8DzmzDXridRYqmTKRgNeAD6eKkck7dtCurJT6Cdn8dmCY3Zk9sWitNh1RjtXgEZ1ZX7VtUgrHo",
  "key39": "QUnZyA55Gm2RM6aeG143bVa4b6n7BWTgC2yB9G6JhoV1PD7fJCZGv8npDZem4JTBA1wfHF3c96QhwAo35aHFoSj",
  "key40": "TYFPKe2t42UGsYzWuRhyPcpeSiJ4YmH6fw1RtC5cm52xYJSfmsTMCmw5JJb973A7DUeZsKBY9hE4fA3sQFBULp7",
  "key41": "5XZaDLHJq8PpcrJdSzuNNnWa252WD57rJqiDigdr1thoPA1iQHtrv5ekRahZ5bNQHCcpeex68GWuzoiPRvSD9USL",
  "key42": "3r5GJA1jyN4BApdAtBG9hWHuReBhWJVdtiSADhPohjQTV319tUvo1Vwyp9jY6afWkqcWHMMGPqnzjGsZ3sXpxthe",
  "key43": "2c6vY71Em5UxnE2CDj14FTPWMKXvWEBbdKmdRaA59sQ2b3WZUsMxzpc8g8Ri1tphKyNWcZ4hqjUcSptKT4UZbFTj"
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
