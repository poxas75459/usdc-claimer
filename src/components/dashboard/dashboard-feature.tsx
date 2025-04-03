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
    "4tRhqTV2qRf3WMiaxntLAzostcWaWj9FjqBWP4EQu8gUgtBfERJjWMsFcJfk8vqdw38eLoCN2aux1V6U51KPgWJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FC57ZBE4mBMGTo9HMRASHxMEawRJgkUas6jZuxihGw9hgd7GqwG6xDkY51FAHjyPgtj4AG9tb3wKXixkUjgH7FR",
  "key1": "3z5vXLTHcPi7bWGYTLZizD4dH6PmB16pXK91AVEe6XmAF9uNidTasd8CwuWA8S6fQm3F1tMcxKjd8rkZ7k8fnJPU",
  "key2": "2x6yGkuPTRZbo44BrBBmCjJHa69xuqtgp9wMQymw5pfYmqVcb1sfKHaMEg5BrdRYMdwVGc8w1T5d3qScHe46vYg4",
  "key3": "56LK1oNcHodhUdTuy1xsbRMAmonAmP3pAxcApFDET221b7FfKidQguV4t32ma6cFZyR7LNnLGe2Jt4297KoNzQwu",
  "key4": "53jcM2MDvSHdudnsrtEqGksxwtPQ6xnjEqSDaG47FXzwE8kFGkub6zaGLEAAuyXXqpUra8c9Qa9S2CGbd2MxkbT2",
  "key5": "SqsuzxrgzH3Ahep5eysuWFzyA8G5QD2WXjYh25DjcHXfZHAQCivUA5PzVYiWQtSnvqoudKwyyPpYpHdp2tbNwUm",
  "key6": "5VJxTa9xhFFvJoxaNpHrPf1SUYTd5yx9LifNCs8RnjehhR7nsi2TzkGLvvwavKdEPxZQ8cF27YGHNCDE8etyuDMD",
  "key7": "2xZuYca14UcELNS6NSCqftCg1MTzq7G6RqQ3rX6dQXqQU8DQumYwRLv4Lw7BC3phB5rFr1mLWxvbhuomN9HEr5fS",
  "key8": "5i2dZUjGHDSoCXF9XwtcyXBw6m7fak74ZmrejQrVJJVNJ14mm6H5RWPVP8NUYhZNGpSKn8Cro4jxRSwMQsSLQRLS",
  "key9": "58biHWGgZkwozUNMf9idp9xDzPysnXoVF6bohHS4V8hsS68SW9L13gUQvLnuDzTxNyfDvgWBctfxd62awPj1GiH",
  "key10": "42Uek2jGKkM2yHDdWqAKMeB8GaXatdWYoUjxDyJQtRYxPYsYnE8ihpVFKG3gig7K6HaFGh4X6jR9uUvkr35sjEDe",
  "key11": "22wfuVuFsCh8JjqhddxQL1QVqohN59cqhabHVyDfthkT6zkGoGbndwadscBAPdrPaDQ4N7E9D1r2Qhv8fgoFPm2F",
  "key12": "5aTSKGLcdzryLe926hPRjrX1uYqL5AmLc7RQ85ADrPc93iFqwNyrFZKtVuE1vZHY6K65Sk3Jt7TqtuwvYazo9zjY",
  "key13": "3p4MM5dfRfKKZ3HAqzZYR8dRewqZDQxHdQ5K59WmGqmiiASGBUNqbLe3T99MwFaAczePePozJxhiU4yUnGymZuX3",
  "key14": "5WVWPdhoWFCBPfhEePMs46FUTSQ58xVozukqw9KKHFyVWATRhE5UMWUC6trXt63CfQEY4M3HdmsFGzYKKZuXvyrr",
  "key15": "4RVRnxBdryqLvJjxGE4tYS3zxyyYLhyv1Y7xjQoGhhTzDX3QGVBxnpgVnV99vxPmUDBMvK6krUb1nxHioTzW9Cn5",
  "key16": "5LgShVCwNwCfPs8RbHULigpMT2bChJkdnAQ5F6mhGnracjrKZUmthCg7B89jDuMY4YgvjuH85VNy7CiRpJc1fJ3A",
  "key17": "4gzoPQqKjTDdgtVjCwNJ8152wuufj9zp2bhBQCAL4vFPYWWa4Jiqiqtvg19RLt4iLrVn712msNg3vZXsQaZnFWAB",
  "key18": "4vX5fxU3KnTWs6uZHma3qpWkfmwqbE2szQ2P3CcogSqB7GCzwaHd8AtntXfp2A3ncprd2BUhHbqcNMmibgJdq26k",
  "key19": "3gpg7YfHfE879vFxvrZNCrCfEUbcDCvn3SDApoGmVdzVRazctidmb57qsjrXMdiAKU2aq1gpJrrNh5MKd4unQoB7",
  "key20": "2c8BqApCWBLjrqVUH7eERtfzgzYbBxuZaW7M5uiKaxrhUYAbQwzycU3HpmpjHHnHBcRqP8sHZfGNWWtssQ1mbvy3",
  "key21": "2PtPAQ9Zcj4UF1ppFZHUSzyBPqL1sEXMxqY3UqZDGdK4Sfp4DYPyhEYEdxunq677io1Pyo7TiijGPLC7YbCBf4du",
  "key22": "uo8rytv9VRwubNB4FpkkcgsdCT2dumUfLbooHfTMLj9oPS8eFtxX9khGjHtjQKKms4GNX9ZhgijsrfLkKYJ3j8k",
  "key23": "33QsacxEXEea5XTvGasgvbp8QrnmM2CedTNq2sZDZURkWEm6pZmjrE24ecA2NGxUZiUfaS6q8g75DYP8VJUF7ZjU",
  "key24": "3siujypBPbSMMhBBwMNqC8fstUFNExhPAJCqx4h3rjQ5rsFfmNu7BWJMoGAxNbYJ69QYdQsyZkUJjFwybc7LDpmA",
  "key25": "TmMwNgYM8WkmRbzjfE9mkb8fQ9jmYx3FkKoKkZ2v9bswPP4DsHJb7aFKBpC7RiRs6UHzzBZVZ97xaZ6A6VveQZ8",
  "key26": "3oDam272sDqY7L39CuAvHSKu4vaausgFDdoayNRzHVCSUNw3Ygbg2iJ6QpohFX8MYUcYk4WoPLeFjgBkDFsx3Hi9",
  "key27": "5zEmB5fL9p7hdbguPf9EBWwE7CFLnpwGN1XSaa23sVEykM4hhKZy6FJiwiGJAdxH8H1yJgfMSSQKo1AQF4APyTyV",
  "key28": "1UW31PZHaTKTVn4eEYnJG7hyonezj8npvxXbMG4DTbziJkYG8huqL4AaT9UhpANztUYbQELs8j8ofvTQxyPveeE",
  "key29": "5FZ6uM44vVjhFqV89CNpEXRtZNjfkyrtpoGiWw3zrfuywnexcWTd6y4gKnDkBAm3MKFrutUDmyRdUKvU1nqFZna4",
  "key30": "tnKjvTSqrP2W1vQkAhLRRSbP54bZU6pCR4hDmmGRGBY1WYYztLxeTtYnn7LK5eUisHLZ43KA72WbRiPWGUdnxqv",
  "key31": "5JzNBXGZNDho62FuKt692qXpyxdDi9EedeYro1MLJS9HUj5NuZjaQGnPdc4FbRX1GPasdnvKMgtATzviJR2VrdZL",
  "key32": "Ns8fPgiSogwq2jTtP1eu7P2pbVZYHsJb1LCDs4FQLcY3JE4HVE7vmgLiGriHLDacrboZoNTSeYL4CUgDKW1tyeo",
  "key33": "2Sy8VhDuMmdHcscNYS4SBddGJNAqCJFiHijEzeh4fCaTyFj3rmTkQK2goPsWQAbx9PdXGdA6VrPbjEWnDhCo4Akm",
  "key34": "5sDzNwtfMfLWyW55h5Q8SSgK6n9iqCyh7vYfTHQWT9Cj2jdQHV5ZQCn3Px4tAZrFpshwRJ4jBpgwMRcqti2kjA2F",
  "key35": "5ByVrXgZtSXXBNvE36m19mw7nrAeFJv3Ki2bNxt121jiTgLXoDU3iP8PaqLZrGnu3evVx11kFGaWCH4ZD7uD4Y23",
  "key36": "5VuRawamjQWHnPCrv39Jozbsfzt1wHzBUyfAa4jYmPbvMwjXcqqdM8vt28dmHUmgjnD8T4o8Zk4soyLmJBHcYDUZ",
  "key37": "5UK959W27WpMED3U1uCEor3Qe9J8AfX87Vrxkquw4b67Xn8EfuHZBPx4y1v393WaSZDaC2872yTShxSVjYUQ82pp",
  "key38": "2eSWL4NmoCFiXmMcqXDYQ31SoujfxFqAojcFBf86F6frj7JbHU9vSRC77TV3khra8eb9cjWJkJJKY9UZPm8SC3cb",
  "key39": "3XufmPwJF89iDDXF3EqTo1iARSBQvBECWtQHtDnbUz98Ni6uEEcVP7ZFRwMZaW1ZJYSDkw6DQoTZetA5CG32Fdro",
  "key40": "3ypX9B9MCnCUQie3YZ7Upkwf35xnmRPBYv1iEJ5L8KewRnVDXh5nbJ5nmsnB9CYkYQEHV2B9iRBMv3DkxVxDm24a",
  "key41": "2H1k9cykL4i3utTyGhRdaHWvnbqo6hmJxsKurJMe22gW3Y4111LshwUh9V6BAZyEGYkUfZeQ3kDfxu6tWDQwJvn2",
  "key42": "5NPkGqr8cwxYi3HEEWfLx2mc1iiErQhZx6mH4cG8jAoBhZy3zZLtyM95CvezHeh7cKeweZ3WsWKSeHjYZXzgRCT8",
  "key43": "3XWqCdgAvtbwgM7PoxMuJR7cubkRW6qncXySuMJbBrcN5Ny11C7mdQDKCJs342X5Ap1zoTQdovDDMeKNsV3dBxSm",
  "key44": "58CXA5kUZUXdsHgngC1WoPEkkqiL3gtJ1ELkuEusjFEEtuxY8DpEnH4Sanw1ah88ckdBp7Q6WTiTmxB6uKymv5s1",
  "key45": "cSRAA1bPra4Dp7ouGF95M5hJZPfZivkRywJnKtqRC4WZQ4nHMMJWHWbZ23P4cZE6H7V41qzro5LfthJi6FVtusq",
  "key46": "567nL7Us3etDPdmgtG8y9vvpWE6qa7fRBiJECV7Fv3q6jjGmFdcMdk2Qf3XuZhwADNZSTWLSL6pc7jbVtkBpSBpH",
  "key47": "23urwSjFxdeaCS9GHUAS5cBqyJApUY4Ah6h3K2SRHJgdzSjsffDQhzTxDEV6wZMwSDdhyp6sT65NXDeRhEwFjDao",
  "key48": "2TpQpjkwaxtgUGhJm65tPbRxnrw7N19yj8muSpKB1QZgjcLGUGbj64cnMWzUpR6k8B9dfqQeUPuXcLsRXQFb2fFQ"
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
