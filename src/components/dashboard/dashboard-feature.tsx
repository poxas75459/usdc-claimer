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
    "3Y2tbt1bHsaGNaZwoEdtEs6pER4oyB9ApFfgcbYYNBNrBrayY3cnkouBwFScAjUs7BBpLUrYmh22zvgRUUmMMm8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yHbWvGKqxwJsgiyeQAMRcPLaS3zJxDtc5GMgjjTtVm9e38VFMJ1WunM1fV2MurNaLnQtuq4PHBZBw2VWeZvdghG",
  "key1": "57KgpFEURHy2MmGDSKH4mgYdepp3KmMPz3QuCc3NRCy9rkdrqfywgrUMESaEaFfEa7rQTPDzy6qZkVWbTnn5p4Hb",
  "key2": "cj8zJQZXnY8dxftqFJt8Qp5xMgqddjTLxvw7aBs6KL8jEuoX4pRhpykqibx2S76i2Nn3VKGRtvN1sphN2VHmYNd",
  "key3": "23b35ayWLxct6TcutNewVqTYPT5SLSMx4ycjZ5CKHAjamJubyLwrZ2kyWANT9EBWVMdZegG857JZ5ixnhV9Ln9z2",
  "key4": "56BeGSuHvcJFM2hvAVw4tVnx6C27yP9hrwRkD3uSZ5fvH74v4DDVfR166Uo3JrN7q26uM5mwvBj9UKRX6RqB9F76",
  "key5": "2ghRkvBmbcmxzcbK43wvigPyLutGm2omnufKW4tstuDMot6nm19XFc4wpErMqeuXgTVEpLfbvatQfcrMj1YPmWM4",
  "key6": "37t2WQBD67kem5a25w8EMHzRFLDix6GzTYt2RE2QmXMNazRicMnitccpXzz7cJH367psrMm3ixsxHQweQgeWs3Ue",
  "key7": "5xJu1P997LL29BccCYrc92W9m2Y6RrBv5fBcbff8a827WuCzTAtwf7y6gM3h9yGLaW8fQRnLE9vvaT1SseCEt19z",
  "key8": "5UzCiWQ4L9r1nexHuy1vP8EhhCAAqBPuySCA8arkrzT4QhdFeym5JXBjwjN8qcEnm1LNcJQWJ5RQDt7VBV3Q3A21",
  "key9": "4kZ9e8dPSXXTCie7kcBpzW3tLzfWyrTDvwJQvpiaj7Aj4nnWgZTrBK7PhgmQ9ehGTmWyEQvP8pQrFkN3HtAbaGHY",
  "key10": "Jtmc7WG8B9wCFKaKGnQcX8WxssuhTTzLE8n9qjMubAKmEfXtLWyzNwasmG6Z8kRfS5PhLCGAF935iPsu3yux3BM",
  "key11": "5cNZw1wBMec4mRPQNtSVZmyGzUgfN2ZMwzNWykyDXobUXywwNproCYMR1Zq7XXFM1Jgp8wFEV63TodLcGbpwySXa",
  "key12": "4eTExPP1yc77fVBTaNv39iERqELDzBWpaumue6RNK7VdFh3NVgCCBqrkHGAzhYBWdzPqHft9LmDuj7rMembj5cmc",
  "key13": "5x5P3AP4SGpz1QocQXRPdzKjSAy3Bh2TwUEcfQaCee4nif5rN9UC7KPb1sBfbHuHTF87DArdAitHWPn7VbjDMG6f",
  "key14": "4emYswC5Rx7WXF8rc7u796ozUbSMZCAgxG65BReFWUfdtRrX9cnx8Ho8gHoW3AfKGjVnu3BPVRMP63Py7y2U8WhZ",
  "key15": "336zVVG5tFnSvasWVbMbE3vx94FWrQboe7tvW7wQA5MrEycX1ksa5cXXEGujZQb7C6EANDRCoPZPoBMAEUa2Fy7U",
  "key16": "3ZXtiEnoqZGjivn19w4cnV9AWu52L171GFt9mUBN4YCYHWiipKT1cPDY5r3xv4ckaR38xRFvQNUV5Hjr2WH6yV6o",
  "key17": "4CKFhoszNaQoMgoMWUMDGRqS7iFc4V2M1dXbYXdauvRnbDzn9fBnAPbwxm11DdCvHEejSf2QMf9RF4ey7yPyvEWL",
  "key18": "3rnwnrTHd8NQj1d5H46JczoMS992iJabYTzRVh6bJ8J2oddzs8T76n4xXDf5XVhGwAYKeEjZWoxfka8mCo6cknDK",
  "key19": "2FRyt3S9a4CojEnmLZybTx9qfTFZuXSQRinq7uWeJEFtBJugsie7iRbybby5dqk15D5qg6nAUQb4FYAxYKuiT3eS",
  "key20": "2DPVeewxaeE7rJPUnb7n5huXxfeVXZ5BgFjPLBLdY7k8bHPtP76Qyo316htzbQQUnDmZ17vbfQYy9L6WKx1mD7HA",
  "key21": "3DatHsSYBM3CRceeVCyYa7531SDdhWJq5aHnzsxeLjSQPbHDjuxUgbUxute2rCERYzfoZoJ2mYXVypxxeC7jnGsT",
  "key22": "3GRrchBnRpY8p56G7fReRirMnrq9wTdqVUYVMTBkzFkRKiPWzqPb3j9hX436JwMXPY3aYD5NT2Znv4u3QDXBKNcu",
  "key23": "2ATrHsPUaxTeChYEByRacky8h8HKjR7tbmCC6ZuQQNFfSC1FjSK58qCZgm36rwJqrG99r6XhxhTAqi4M8NnhWJYM",
  "key24": "65Q3PxK6WtbXwvEq8i7mE2JSL2kRsBwLu9Qt8nUWRLoRc587CXdjVwyW2AjKkgSo1BAwwbdhLripMZuRUdBq8P4m",
  "key25": "3dR5BGd6ewep5iXZ4KYAKVpEoroPFuSiwwW4opo3Q9Pu9LaBWJvnyP4YySfgQdv1qmMPXh59GTbroXU4D7t7Ky1P",
  "key26": "3GH6uRB3rJu8macqpHhzYQQ4Hj2AycVBYQbAW9fwkK6sHVjEub6TyqAu5f3fQwwp4xd24pETp8kgYGU6Zs6jitzc",
  "key27": "3oPcQD9iBQc84cfSBxVWnWDohXrBfYtnyTR4Tx9uz33YqwGbTDPTF8eBqaCmpMbjzvq8CA3Lty4VtG7RegmWtXu7",
  "key28": "4qQjXw53r7T9Qhj6MGd5iwUN9V2XvjxVgC51RpxMbZgDjk4dCuUfE9edoKpnaJWdSov2qiwwTmu6nqWbXcYAw46C",
  "key29": "5werWFiTs6hnYdT4zwKueBHmNtrC8YJ3hjyxC5R32Gnpp1D3qGZtwCWeBVYDjh6KtsS7BWyYyUXovGZQq8XbxCkC",
  "key30": "2uqBwmygu9Y8B5NYcH4nQR3pHZEpHsNegsuTbBPw4gnLe5T19mUZ4GPMfy4oZZGTzbCFiHAfgsCMyetCg8HEziTW",
  "key31": "5caCebVNS41bR3cqESX1xPu4PzCWuipWsDU6mGxQEJ86gRWCxoUPSCkPNfix6ywRVMJ4F921JpVtgnXECiJjEqYu",
  "key32": "3oq38Yd1c1K71J1pDGoQWwQ1nbda6wRUKrDakAnPduGprWqYZBXUsVkocCf5jLC5BNzLJsf78jeY745PgqdLJack",
  "key33": "trTqrTXoc9rzhDB1kqDz749YRH1TeGCpVXcPNN4tEyTyJ5LdV6wVhNxPJwiZ6LPUJZFyU26tKXHG7sVpxnJzHxa",
  "key34": "24FFXJz5q4xWAEncvr5tXn2DjJzimATGzNbmTdZfENv5VBr1vGdo3JsxqRGmtWwjvn8RK9Rb1cT8Byu4uUHDhiY9",
  "key35": "3WaPb6sMHmXtWf2s5ksrmoUZWknNA6dEpfUqZZuvzNnWi2vNjBDhGbFTtnHUxLvzVeKJpTWoK6ZkJddLSPpWMA8b",
  "key36": "2zq4Jmk9yxTRmZ1VYzsfkvqWCPiVVsKqm9PXZYR4uC4faHacdPWNxbDtjwkSA6E2crek28JS9W8yxyQHJTrp72ec",
  "key37": "2rXNxAEXJoTBFWmADMVUQm9nwCXH7oBPr3sa5yj4hrY5gz4gATyum9JqfK5vWYbVEv7UC9HfmzbWX8bYi4nvGnf1",
  "key38": "3wWoAsweVjomixAAq1hvZjiUA5CJYBsX47K7zBafMzdu5EEPNGiHKEPFb5zWwusdLXWMFFQKVqcmfBJu5mA4x2N5",
  "key39": "4Y5N9XLAMzLy6TgHfdtqx3fq19Vk24rjzajhWUK5QF3g3ZFy36GqJuAz3x7dUiXoxjNPX96pWnXUG34ZfKC7o7oj",
  "key40": "3YW4qBARdE755XNfayQKgtbWpmJKwMozacimtZWjgb3mReZus3pSSGWaUGUq9DxnM6YWy6KmP2QozpmnbvyAd3sv"
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
