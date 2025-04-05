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
    "5PTpS8SfsoVuPtwxKtsJRvkW2mdhPyujSUFT4EP8MD2FTeCtipKcfJzAhkdYTZgkmXRSi2KxpMtzwLSUxxGTskH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wMheZ7QuMcteC4ryRCZk6fsH1szhp5vS4zL85xR7Kadps1UfKYdmnnTFCn69Dm62J2YvJToBPZUMBHcBvqNJ2oS",
  "key1": "Cy6dKgvagJ5W5CwyHFbJJuBSu4527zaguL3iaAKHWE2xUcnQwe4o1E7ZbGp4YoHtc4Ndc46yzf75zpb5ZMkCnnB",
  "key2": "4LTcBz4wjHkHaA5zM46Sx52tQc8oqpqbuHXysuRPXmNnCx1R3c4Xr7ZqK64FKN7rnP27gY2VhKZZ4sPrQsa86hhM",
  "key3": "5sADivHCK1p7HmChLYFigy434xgprdwtf9RY5UQqq8dC8HSiPpF8hpwcf8vHEgk7wPsXnXs9VRdHNLvWvfcizLxZ",
  "key4": "p2cqQMpD3bTzDkyzfvKxmHyDxX9nfY9ddQhToaGyYUHnrU5nRXotvpymf4w2kFYmk2DpZ1YmSFbg8CCrUvum2ks",
  "key5": "4ecaaVFR1n4pRUDbdusdUjccx928Qeiep9wRPeooVc1A7dp8RR4Qmd26ZnmMYhMdMViHL6YK6JMFf6XbNTxyceqt",
  "key6": "AmrQ8uVHs4cM8akjyE9They2P8Ai1uMFeP8ssYY4KPxaGibzjgzGYtPFk7qgUSCSbcnEgi31myZchjpnAe3X3LJ",
  "key7": "63k6bD5gcjFS78iz79jw2PYu2PYvhFxedF6ZEFETFNeaEXj1vcDECg7uyqqgSZ8YWs4YLtg3uiHP3GSVJPBzUSoB",
  "key8": "4Em9GcmHCWZNG6d7cvoCjSj6B9RrKVYVkEakMKGA72yKAphLEvBW7fVSecLy3CKhNZRgKperwfRHE3PNmniHxSeo",
  "key9": "4yCpphtYY4U2T82kKoEHCHUDSnXaSxou8qHDNmczPEyrEsuzbNvFkMBvRFtQbXPoQMiqdNgGZ2vKM9kFTWFhNhFg",
  "key10": "FvH25wgbJLZWLfT5aJ4dJ9y7pVUrpfqMWMouvuujMoxXdbF8dfdD8oam9UPhqHhkm5qaKtNH5MhiqrU3BKXxcAY",
  "key11": "fahrseng7PhiY8c4HFms4p5ev6XENDumui6BuZKm2JzPVceMS3J455pAiZ15sXwRwFhFXMXZPkk8LQd2C34usjQ",
  "key12": "4RgcaNYTDe1f3A5PRzSFZd7yst3NW2pqiQDGNJivJxwzp7fNcpXhpW7Yz9XQqqrP1bYno6U72JVPGZ5SiHoxdR18",
  "key13": "3LVUGy7x1meefFah3oYwJs7y7LQMhjwaEkvVC8rFYkmrjdJtmBQNSEKHeyCha1qYHf8XtCRDCAeSt8NaaALtEq7F",
  "key14": "5qHv9TXnigE2GtEXs9MTBZasZ7PPX4uVPhPcmEiNUD24Ywo46LxB69zjKNYyDDFrQEsh59o6yCP521okYsyCiPB8",
  "key15": "3Q2sdKGNrZNFwiyHv9jxQTEYJmGu8PkVqAS6m2XWLoWzeuYrbdJz4ZYLWgi6xNPugRnVqnXWkcsYa49FLdbfmqKN",
  "key16": "5FxyP1jkxgA4oBQX9tKyGAxAcMQHb1deJXVEWZqty75MqCFzsbRuH9k3fC7mUh98a1aiH741y17pq6NxMYnf91h1",
  "key17": "2gBHVu6fF4cxCTpvoWL8iBPRNi6L8qL8Aee7nhn4ufLW6dyHFxoDFxqxvmYiSknDX19hojQaJSVwoWpoAYeP5GiQ",
  "key18": "5eW2fLeQQPCDLwrRqSsSTsc1iksz2X6tBmwSxtQ2mhiPbJLKfYfRicJ1ojbo6eY1sTjFyQ6ddkNxhAV4vjmEp7Br",
  "key19": "22vTeYV6FTPqTSeH4cTQyJ6b6DgcVWiPXDjzgS571xbd8nDNsjg9knpZh9CyiBrDSLrNsxkkbTGWUWmudBJqkHJY",
  "key20": "2EMwh8VK6vYbToD21HLctWcJDHg9tQMhNxKyHTsPqDGodyAc1yMGz9WvV9nZShTxrDNJWLp9rXr3UQ9gDgMxNXcW",
  "key21": "5NFVn4dNDVhvyGSS6Vu8s5EWDrLk8Kvsw47nNWAERokHJxsPDPCPmVqc5b1ESjE6LUY2uQ5riTK2ocpDh2RoqEXW",
  "key22": "4vfLoQqMivNsVBMbfsh4QtrtcHk28wMNwR1bf1TnvvmAJgKj82vkjyV9XtfaVxdzZdms4ZU1GHYzLudiLM2vZbMf",
  "key23": "bq3HATEDjDyKhFeYGxBw3qkghTJEWqwbedwmwqumAWxWhRQ7fjLPEnLGVSnvKLRTiHZ5q2g4135bQS7CUQsGDy8",
  "key24": "4N2GvynGREcpEZ1J2TVrLNXDUasm1fGVEoTr2dpxNtm6XVPEd6d4FSmxTAkRZygZ6cssQCYuzx4d6qUyVjjj2xSc",
  "key25": "2rZJQr6LG2bs319s6ce31w3pQdC2RTcXDUcX53zAN1wKBqwoArJ9wMGhe2HXK8fhTd2afNJKsjnfwjgxtkgymqUR",
  "key26": "2mCmL4YqdypDc8uhkZUutmBGmyXvRA1ZiTEwGm7SgNcANyMnZBUgCKFS9kwj3R7q9EsDphviitk4ttfGAZroXYYK",
  "key27": "25wYPVKvWgAjHUL3Zqz2tafYDgYinCmBTVdagSjypVpzQAvdc3RNem2WQq4yuGsntMHMo8udzPYn1w7VmmjLAgb8",
  "key28": "5VKtqAdC6hKwDe7u573BhUY6XW4jxbUJzDzL3YDRX4wwG5Ud6N95hJyk1wJcdVEg9Tu3d3PZb1wMKCj6aM9eMScj",
  "key29": "L6oa18XbpJkAuGDYvANsYxjXhprvC5f9b6JkxhEG8J4ePtwV6VsPYTJVEgDX43TxEWpHXGK2Sp9vQ4NoyrBXsUG",
  "key30": "W6yCGA8hVQ5GeeefSTTjtbknJnHpWV6sxCKC1Qyj9vEcjJdg8NgQ46WXp8NoEMse8Lsz1biYEa8TpgUkj3jgMVw",
  "key31": "37gkcnXkvYbGRgGeGoYnkjH6h4rGCEwEMt9iBmvxagBRLqo8FNTJ7rCTmQFXarc653wUePAKZpCXqSQngHWbtDxw",
  "key32": "5wJqdReRXSFFpgwLmFwzJCLdUJXhN5xNiB3UFoLfx3BTqVC4wjS72PN9UZ2VsGFSgeyTxnvGjeXgZWhsKShCVEae",
  "key33": "UK7vCvK7SMikNzUc84jcxxj5BECL8Ub14DVRxbk1K8fqwAFqJ8BvVLh5r9t56sBttsruV7ZmaA1V1BzNaKV9kDZ",
  "key34": "3SeoXSz6fD2iB9ZA1a5MWHKJm9NQFKUaSB8pB4dYAdfXDcLTR19oxRv28TJVrhbRHtmaE5WWVuMjUHVaP7pJzAJd",
  "key35": "5BHDHMy2vo4H4RUbMf35kGxd7hYKF1g3BTzxzMzQRunbCwNn6C2CXB4NvNQYZGg3eNK2iGqK6iXnbjkf6avG2xNa",
  "key36": "PLmEYcKrHCP9nFVNh5cwoMuSgcU4GVGNe3vtctHkA3cg21tvHGfjMjCGqTeU26CagNcMVVWxxHus29cVRr5DTK8",
  "key37": "Wf9pyfvVVpT1q61iv5aeeYx5TL9VptXLSUyAaDseyYa4wVCHmSqnfJcHb6iFbpgoMqYc2RG7MxMBBoueW6ck9kQ",
  "key38": "5JHH4Nu3gweYFj2pf4ViZnTx9HWshzfLeifknD3VAsMmKN2Hj2i1H8k7Y9d5TSbzca2YBc6jJsxuj9jabDV36Atr",
  "key39": "2N7qjAp5gEbXWDiJDQE4c8bCw9HJikGxr3kG3cfzher7j4U38bXrpYCQUTcqu47xDEmy9HtQH2xQdzSYmsA8Ecuj",
  "key40": "567uLbvahUJezb3PVd89Z4yakhr7QWX7Np8tpqT1dfF2mj115rHipZqnuGt5PhgpXZkkL8ikNQDmn2hEqzHZ95jY",
  "key41": "63Kcc12UPrscfHbS54mabM7uzu7XxkjLo5GSVbUTNtzZhJTsWPbqupdPou4tF4saPXPqw695ND8UsSyFSxmhAuRK",
  "key42": "4EmsxxCc6ZBXhLXt81kQA8ikuPK1iqPzCpLQjh4Xegzj44tDAjRkA77gtjtJqbWFEQWxFwqgqEixVDPGvH7AJpyG",
  "key43": "58Z5sSG7ZdGRsBMuqLoeKwpi3nXoaRwkMEAMkKPT7Hz6gTQRgQXQEBQWr8sTdjUXMszyZA1ocaPMgBYzCCAvexAk",
  "key44": "5PJqjHpmqXwufCC3iZ1ib8E211ZGidKsH8Nvfz5xW9u77tAyomG7QyvPXaSzKbpzMSwhuB3pg1Bec6CFhLHHexKs",
  "key45": "41Z4NmRaE5cwtpy85fC84e2gi8qXaJrjm9vFr65ADn4Zxu7BMWur5tRXyN4x9QSGrnhExGaZuttu5NUJ6o3t9hRF",
  "key46": "4XYHnjAGyvcCoWukWCfPSjKk1X9f4py9J6AyHU3dULx8SDCWYPjiGE5vmMvBKXtjvKG3f3LgnyQ1YDk3A95aJSon",
  "key47": "q6Cjn9pDSfwWxnP2cAsBQpaoqDjKAohgCKayoZ3tBWoN5Q5VRNV375sHGZBDdfLQqkJfJTL76wdJDcBEH3Tnkfx",
  "key48": "3E4oSPpg5KW2hhZWTYDUAvgeNWJEk2W3AJN3pPU2kZBp3yU9xgkT4jRy1gAagTax3Uwzm7HE9qWwCzK1n4k94kvR",
  "key49": "1r6UMveMUb42abRM4PeEiK91whGiJGLnsb8BfMFEBNttGFDbgMV4yoqJrJgFg1YDrGrw8LTvJs51cfCmAKP3UjN"
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
