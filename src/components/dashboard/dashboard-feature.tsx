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
    "3zoAQDMS9pqFT4XjSvFptkoEGVp5wpaWQHQxuW1KqTPBtXMBmJVMoAWhvghrvo6qgPYAn2uMwGmgKBAsEck7bTcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fMtorV9jH3YB1uQHypRGkC7Gp1Mjd9SPTRsocB8qqnZKddmBzzf1uTAEYWgvrvKNweUJQ35TqvRBbrgsLzB43Gv",
  "key1": "kosZ5ysdR2jNvQ3UVWqZFnUXGLCKPQrVufEinJiZjrRFb4gL3VcjMNruPZF5hpFc3cdmsiYUFzsi9YyLabgXcUV",
  "key2": "5jbMpgWi7nDFCx4ok8qHCfDnX6dF27drcVEr4i3ggnEGmgWHGKxNrVsK6hHf68Hmxr1jJDH7MJt4TXDeQkBDEL2j",
  "key3": "5herUGUppCtjJJ3y6yfSJ3RwYouo8TqpB8gxEy2xLADZih2rYN7TzwzKX1SDXnrekVjMDgYQCAvu5AZQ6XAp2kSJ",
  "key4": "3ybs34FKSXBHkvJ3VmXeNvTV7zBsabjLQ51qSVVSLr5bxdu23XVnwiWNj35Y3ttA4sdAgSaTguPaCZuFcaMzuxXg",
  "key5": "5bboCJQinQLPEber2PN62gGqU9K79meyDFSUhPXvjvJk4Gr4nzRPSVzBpptmJDt7y1khWqs6fweHb1rVckx4HpMq",
  "key6": "2XPBsxLoxwv81H7MGzbUNGosofRRycmpHujXHRsAxsCtunGB3KofR8bVTLMA8Kn22xGFfvUWwuiRS7KE6C6Px3Zn",
  "key7": "6VthgciGu1n5Q3JoJT5zdHdgMnF7yAZMFBhZdy6dA9MQrnotkAJ1Eew4mpg1wk2M4aYijooVi26TfWgV2t1h6SA",
  "key8": "2NjSUY7D4vg5RzpQkZuJQnSTj7gNpmQNVTAhXjekAufa8HC3YuAF5cf2JepUa6CMuFYrL9sbJCEsmrQ1xRZwBk2c",
  "key9": "3pPM7xiuegj3CnGApTocXqjuLSh8bGVFiS7iMwa2aB2jY1fri6EoiMBfDvkFRkYjaKM5TiWCJHm6w9YoccbHGUd5",
  "key10": "2tiQcmF6djCjaFxo3u6CGf1xfJBauANVfson46sLEybsRfd8B8Gdzvn2tFU57T3Bpu3ueQd2mH9V7zRuabUkvbTA",
  "key11": "LTLAEHTJPhbaqi4b7VqtFNw4fz5htdtzsSaVDu1WESsHHDDBowRebyNssLKmCzKng88GkGh5h1jNc4aGVG3hveu",
  "key12": "5x2h7rZiKemAVBfR9TDZB6hDHcuEthLVemQkLfKWPDqLGEtLZgy1mUjNY3EU5jH6qX4cSo4haZrF7SK7MBEsMcjB",
  "key13": "3ZFQUMNmZEWi5V7yr65P1KWVYERZ5nGXSQs5JRMYnnmrw4Hd8EBUvaaPUMwknFLX23fMQtVMyAgWkz7wVykZijwN",
  "key14": "4k6AgdfxQ2Sgpzs4JiW4vERDbCkgZJGyrgMhfD6Ft7W2iesKEXsFgYwS4aF3eKATGZKZoTihVNoDWDn5NkXdfAiH",
  "key15": "2KH9qJi7Vk6qTkzhPSg5p78EdZ4rjbTXvwEKswLwTNQQmHKjKV61PrTbUx5MJ3Wj8Ka8NfanhLuDDAM48J6KhYqF",
  "key16": "4F9bUQFUUnUGhjH84D5wMqNnuRC2HopRNseZSmdf8CdkqqaCFmFBP9JFBzaLayupFqz5tuxbJ9sCuwELfiyv6Aqv",
  "key17": "517sUAkuUqaLJhfv738wqMuaXjJuWK3GZvdN38sRXs9i3FCTN7jEEzj2wmQGTqwYRpjorSJXXMjneFvtXd945UHW",
  "key18": "2LabnceJ5WZfED6GciceeFHDxysRUu5dsVW7UYxoAhT8TxpEwNUirWARmeyWTpCZ4R1a6n7Pu2qQQorp5KNWHq1d",
  "key19": "36wDyHrUN6ZBnbtnNcxowjQLLDec1TkdX5X3er5XA7TyeSCzwXgK1dvsbX66b6xppCdGjhpJHMg8xpCPfF26ydBg",
  "key20": "5wJZDwvHFzDXC4SJ7TrLv6yCUVDVyUcMYbmCxkfCeLof3tLi8jqzbNQhsVH1SGc7j8VWfCAFBvDPNUPkMMaueojR",
  "key21": "tJfFsicGMZYECuVGfQA3XL78hDAfx3th7jJ5gG1k1BLYT1ZwCRP9ZKGhCwANtyzPZXQszFGfL8fT5T5BWfUs7MR",
  "key22": "5JV1JmUCCBGDouhngSJ2dNscu7HTk44MGEDc9ejK1v5VMC2GRYHdgLwfSSTYowFjkTXeugkwkBSE3SdudVVP7oHv",
  "key23": "5o99WsY1XGMWfu9VDvsRCHk2tiQGxijwm6JJ7ShqXwU6ae26Qg5mf8AZeepr91JaAjf3Sxp2ix15ZmJWA2vq9auW",
  "key24": "35u4o9gRfrSxkbyhybY3FjDLP7ux1xqUuvJcY93UfJ5wz5XV7WusYAFW48Kyo5wDJRKdVk5MTSpEMLbuBijgiCKu",
  "key25": "tsptALdEZB992Tzu7Ln1YEEK4YJwNuvZ25c8yi5Qv3uTJtQ4eJHcfdZqM5mfRdx52WaFVwheohWQ6WqrZ7EtA4n",
  "key26": "2YwV27nzewNthE6qLKQMEZubMUKnUTFdkmkoxKbrXebr1KAcFsWaq8EfcMBQcjxN9GxywuZZeEpZk1YHWMu8uwy3",
  "key27": "2ASsUQCVrG2YV9iPxYpT9fE9Zr7oxRmqeVLwj6cZue5oC8SZ3KusDhB72pL4xP3oGdxxecUHvhzAmcvSJHT8ogi1",
  "key28": "3yXcyfWeDMaaZUt3sg7pMw6D11cWRED5eKDtc4d1rMttiX4MjoiHmDeFPyzYAbsRbq3kjJvpL4vAxRneVktT1cMU",
  "key29": "48mRN7BACPcMs43bvqbd9AXMHFjj3bEwSMsZEj1DddZVgfASez8HoSk7QHWEKoqmcgALKvjnRWxbn3nNQAnuoj1z",
  "key30": "5TA7egtuouri76VVv9zyCqWEMWfs47hRKdtFW3pwZaoE9s98SrsGzMNhJy8ZuEZSQQXWNbZGRryKAjW9Z7YdMPzN",
  "key31": "33KnmHGdQafKbwMK4cf5Rf8z4epjVqkdjsjTBxVbjfzQkGUX2pxFjUz62Sgdg5ot5BwP34AsboopznSuui6be2rR",
  "key32": "TARN7MxaNbULi8tj9R4xWampSrnMDqLa3SzuNpALdVfAp98cSAsTChgBP6uzLWYMnuEf1mba5Je5t1h7Qr7mC6r",
  "key33": "5tMeox6AsayQbRLgQkX9duVpm4Q3gYEvwCas2xmp5A8aHQSjamTjh7LHDQJ5pgXz5xkjeHYurcd894gxDs6dufzC",
  "key34": "2ATJGHaxFzihyC7U3ZQYQP2d92htv9XTPdrvqN8hdABkSznYYixi5wS3ofu4dSzn8Yu14MBi3pCXKKVMFt3RGnUm",
  "key35": "4vXoyCxYT9utFseE5r4x4Cf9zUtF8seGL4DX7tyTyuZDoFY6LWqcefSyeHKD3LwtyYxvpGPjLyFaycgyqg9m8qut",
  "key36": "3azJCtfJ49AsDfgaLptUu9h3QzFXSBTPeJtJde3T6tGxhXj4G7YtdvjWZxLnmziNBUf7PqyH45YcyWjSxZ6QKyD2",
  "key37": "AdtdJAKYnQnFuwDtCTGwkStjVJ1VuF94uzama9Uk1AZfxB3toqFaiAVuR8ZzJqBvHkkMwmdHZkNVziZaD9c3P9J",
  "key38": "4ykTGAnAywey5L5ouDAyM1M8hC53NytnNwcZVzUjVrdjhQRSdSG19x5d7uEH3MNBD2r8cC8hSzn1tX4n8pX19NkP",
  "key39": "5nze7xCfu8e7qUHVNiGLJpZSmWmr1636gQZJUCyCunkGg5Fem96fj88T4nYhRnhLratam7ELe3b7KFEJGaPWfh8g",
  "key40": "2oPe8vBamTuNM4rjSaY4XNCD6KhCoJTRLC2tySxw1YhYqbhBWTCroqjtt84VAcQ43rasVeyjBnTNskAkRtxzBcAY",
  "key41": "4wdHbtaUezVBpPuhYjsBF2idrScQDQ2Weu6YemJNiwSm1DQfFEgvsAXjnhEVM79MTZYjvtFnkZH2B5kR5V4cCtQU",
  "key42": "4CEPxtpMqKwk827GhVMae2ptpnq6ELcX4k2SNP8DQfoNvCYASAiLivsYyXjJ5QUEeiqumvxLbsf9pgyg69o38mnY",
  "key43": "4uSJix5zx4KhMGLsKFU6NBnd17vAffdaGEcK77tuMEVWBbSgHihnm872vEtxRMiVoZYxmyTFbWcjLR42a7GnriwP",
  "key44": "3bTXUv8WgGDfqRPFr2KSmymY4cggEz5krRdJAXfztHBdMhgTs6heSCsPypgPYBNuTCmbdD47gFY3Y9UiUSDeBG4i",
  "key45": "4ZpbVBh2733oH2k26tBgtZxSaK8gjjsgE8fzyJSm17CM43rSKfunzyWPpFuJsRqNjp737U1Vg8PjT9ka5Z6MH9wt",
  "key46": "4A9xHrwgQEXcjXSjmhEfYMuoaiTMc8TVVda8gL64Vqi6aEv7q5RoEpH3Lrq33oVFroHCSwE7n6VDpVkY37FBNNXp",
  "key47": "3J5KjK6rniju69Nt5MsMNrnUww8M8j4Y4ZwyKrvxJbQE9qyBnL3oMRfVczG3QVVqbtZEa2GiwCrMXZrwfUfzwfs2",
  "key48": "2Ejf2UTqC64eWXwQafzbGPbhNpp7G51Y1xCHZpRx81W8g9Fk7S6zTo1RsePBeHKxS8JoLG8JR3baV1xWLHoVaXEc",
  "key49": "3XZ5RAwH6i5HVvwRBwGkhgZLa3PyWe9tH1MiCBYc2zP6fQg2gjo5Wb7uXBXJ81QsnRsCjN4DCc7tyYgKnd2YKGKr"
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
