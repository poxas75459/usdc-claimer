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
    "3Nwr483N2R7PPnGXY8zP9r79ECKrssrL3qawB38cig756wCVAU3T6qXxC1e2Np6CUxVPjcBMrzFqacYu4e5ukd4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rcEynFZ7ATDaBGr9AECXJ4LZZ5BTujptD5vbD8WqZo7SQCJSf1BfNzVakJqGFpRwmtNKfX9J1L9aSz7M34eDeRS",
  "key1": "343nQkBDWRcwxkzidCWUizJ8Uenzyg3Ndp1VBo4PG1BnknihpqkzAZpsuJ9sjFTDPwqziyd9rqpwbZmXFncCBLSX",
  "key2": "3xujDHqDC8qD8fvnHLnrzQp3hbsZJ6kYd8SG32FdEzs14bfq4GDDEB7D6aFjtt3RLKs17Cp17LUyimm11YwyQWc2",
  "key3": "2QBm8RpMqLdN2p5MYhYSMNgXzGNZA1YNcQJU6Ctcb6ME1v2RjYLzXqiVGBQi3Jaofc3Mk21U4GoRBc2DNq2CPi9Z",
  "key4": "2kJSgkzYfMq24Np1y2eJ491kW5ypUypfTgMLd2GRMSCvACCdEzdNyNBovyLAJGZLDrZnpnDseYvPofue1PQQfrbm",
  "key5": "4gw8o21ZihAAeF1RvWiemqDyLbyryAV5Xk6drZyiYDs13UnekQwiFwToQGzRUQbDqUWgQDWW5JRChHsCZBdQrxSn",
  "key6": "5Stqme7zEc8YMJzAThc7TVUXUV1V7wyNq8mbmVFLDL2cHgNK14LpTcDdVzoMLzWhgiKERumP4Apjd112dzB5oQvQ",
  "key7": "2V32S3vrqQMSeNF2vUVicexeL9NbAkK72YtwZqWDveoeA5XBgHGBq88wsr6jUEAB4Wzo7iBvhKCs6AqP6X6wpxik",
  "key8": "4u1DAXeFycMTEJCkHussfHJLHdokW8imKUuCudcTqV8ZqhjvrZ9fFtCrAdmLEDM9qxyLMoCZNgguQpeNn63Mgr96",
  "key9": "46zFuQUzCVCwZYkFU3rQMYYh6CrTpaCxETva98MwGHCwHwMAKE3KH5CddmbKv8jttTkZwBMSc4KsyEZ3AHSEYJFD",
  "key10": "46zF9HAVQ5tPLPvpLmcC57Sdu78BjGQsCRiRS53pB7HRssUgY5UqQNmXF4h3UtjoSES3ZALWec5YQQ4qqMZRKRhL",
  "key11": "4rrGREEpFy8LP4boCyKwixAgbqAzhp1rT752uAj1ocWGR6zujpyhUr86a8viEFrH7vPGju5uuoFiUyq5Az3hZ2vZ",
  "key12": "5WxFEjuX9FSUkhAskkNRHvqqYBERvkNTei3bh1t7m73tof2P5Ripf6CkzkCHVFxqnDe61kxmRzr5ykquMBuBx7ze",
  "key13": "4YaMaioH3ShQcqwPABJmnix2hz9Nn8SghsW5YhRig2qVL1nDGtfJn4d6fk3KCJaiKn3dcc12ysCvqXqYWnqE7Qr8",
  "key14": "4qhTgZc8Bnex54nFdH5fi2YSStr183tjGu7ztzfKUTFuo4RYLZa3jb9ocxsGQEjXKxwZnTZgEuDHVX3kejysEsfS",
  "key15": "4gPRGAQkjiePWMVi6eHtkMLECwaMm7oEpoFcvZUvHzWnP52drdzFAV5qvzrBrXmT2nQhoYroSfyh7eo66VU1zhtt",
  "key16": "JfH2tbJvxbvYLg7eCf1oDKC8hXMeKSFh7xeKUJVUeMAimjzoqsPo5axTKALxtYywx9Vm3Y2S3qP5VgaXoXAnSkj",
  "key17": "28icfjmCWsiGTRiAAsF51i1ATD8WUeX8tPrWV1bPz6Sk5zNJuUQcf7mjKJJkbTQ79x8xxBDa1f65nRqtcjcBz9SW",
  "key18": "4hhXeaPX8j84FzdB68R98ujGXeEQqqrfDvzXio7yB9nN4ppR9h3L61JL2JSSkT5Qkgsfzdg8F19ZBmKsbEeE9w9H",
  "key19": "567m6kgCFpFrq9KxpKyY8XYsCZwuVJpCPab1GD5ZYypyLdQdRJuasPwN1SD9ZVuXLeAf7BK7zoSu8J788TtAZjk3",
  "key20": "34vphoWA8HdFARwdSSY19HavzvKtAjeUNgXKApTmbTHwD1JnjHZceuNkMbwPD7BQxsnUXyeqvhMq6kXSXpByxx9y",
  "key21": "2G746nmwJwAweAfLEvcJqyQCyG6Chqy3XZn77yQFf91GxZebtUm8TNFZeGjxhjP7yZjQrJMhn1U3o9TefCN9JmZy",
  "key22": "3BvFwHyaEwTEJ6ciRMppcrRDjrnUQYRkn8KdsyJuhhnktJNWRQkXfgaacfvzBsRVfesPqbchzJSxcKcuDai5AHcv",
  "key23": "rSJ1mw7byWAbxSNxWJS3XKe42fF4Dw9pP9ePeDTJw7UNwaonHujmsTXARx185mP5hAnQp5BVNw6ckZJkyWZeQhF",
  "key24": "3mYamhaiU4WSDvk7inCKgLmNdkz4UZXhGtRpvRJfMAaWaKeYVDxigTJK3Z5tKqhsdxpcvXcZtFmfXZcyog1H6uo7",
  "key25": "49d8XAj6T2y7CDobKvK2ucMuMygBqLjtzxPrytytFQFyGFaYXKXwnH243rsxBCmEa1TGuptw6JMmi2EdkZKERgMj",
  "key26": "3vgbmSxb2PjYs2QV8TPddLnXKCdxCCndoWnZpg11g7CK3GgFyyomHAwuDZ9M5wfLyr1SsGBHRKFhKBnV7cTp4kQX",
  "key27": "3ScrabTaaG6q8sHKhv9E9CaHL2sHopUB9n59qzFzg6WuWmq95sa7jDV2XTKRVeMMVfezTHAUvBP4KkpKcyKW9c7e",
  "key28": "3rstfgSuwqAidaFYoeKE6c7qpusTkYqqYPwH8UiGMwub3HzVuRx3x1ih3VPCYSMTSH4Gduo8W5aAxZb4GXC3LtGX",
  "key29": "619SXHHRCSNbwkWqC8TpjqcBSxZX5Hg8D8BRPiuytV3MGH7oGwgYfdXfjwFnuNhgps1sPTRcg3JvHuD86QYc7pi6",
  "key30": "34jSqGtadpCETMDP3JwDEFGqD5p36HzHC5wfqQTGPkxjsnK5c1N2MVfu73oJ6HXNxgTdkArTXiBYzeEyRdKrSZi4",
  "key31": "5zj11wtzSXzRmVjcH1WDKFepGKzw2DamG2WzbQ9H5TWQdBipCmUJpkmcWZb4ro93mt7EYTdNvPzKxgUBo8FEwViz",
  "key32": "48vowrHUqTR354QYDnPTFfrSKECL1d6yuQ8GzyB4H7Pz1qHMDNirKbnmXvXkKxcUEeYMangKMuqNceAJ4du6NuiJ",
  "key33": "2rx7kUA8Ngf3m8aSYsc4ofdSG7oNs1r6HRT27mTncnxc76ZdKUqn6StXzkCBC44G15okehXcB4rLHtNhCWRxxDnW",
  "key34": "4oX24KYkdxuPKr2HH3Won2keGRaWCc66W1GbD6tjTwyVADKHFcSxiHrhwUi69sCEakBHA9f5hw285f7UWkBhKWAA",
  "key35": "3BPCfkTS3ZLEBHXBKpCnR6Mim7VhNw9Wwt6DXup3JQLnKQNGcZTK64Ae1M9pezz3qTLfyT3NJx3Ww2MrZaAu1fsJ",
  "key36": "3RtXksgdWqrK7mpjPGh9P88FYXr4JgtSq1Jrhrd81hVmifTNF6E8wToXiH5uhWJHktpfPmwen5yrfv8UgHiaZrLf",
  "key37": "2kcHf8sMYdfxKRC5WRCJWGVWCVE5XPkvLBnwoA8St77UqFGgr5DKsnvAj47SpfCcRDHGFwuqRzhYgG6fA68mBrTF",
  "key38": "4Pa2mYzqWYPK6cmiXDFWK9gaSxzzboWEBTpAEnoe9sfkwdfQd8RxQbqAuuH4LbqkQwb3uDm2gZCFx9YH8DggBsua",
  "key39": "33aemjtZw7fRtPsbYotZJndXd9Y2hXbz8BVpatcDLBE9YuVBFdhTNdqWt2T7HUwbmJBMrVNRDZJNWsNS7JWxgtxW",
  "key40": "3Ab5XptzzoFY6kL2bFCpCrTCTpVfY25Ej6oeH731Ntt7XaHnmj3uHMZSg8gGpZeYCahfi1Raazy7uyidmbo5TgTb",
  "key41": "521afDrhUbeTCSi2agnpn6LuhTqdckHBTTspUEPgfr6vRpXM93qAFGsJyAWnYAMSEoYWBjN2aMJfM9hdZtDACbCU",
  "key42": "43KbQ7pVXy44TznCnXRNH3NE26dr74szRaUzmNL9Sc5hTHt5EdgYztZnddy59GCuGeSn5W6AQE4JapUx6dAkd2VU",
  "key43": "2ym8bM5K5seZV3yLpks1fFXhgqZAa3JPGkobY6p9RDkura7nqS4bbLZ6kcpc93o4dtHNqMipUYqAVw8Luh3Yuvs8",
  "key44": "3KcP4g9X2RxyY2J2THQvczo6mRzmx8XyR8AbLvmEHbhvcZKPcwQQUS13CQ6nd9VQVgHobCfJkxjVh3TpaBUAhqG1",
  "key45": "3TXUKDDTDt4nqArEz5Bq8fnNisPhz7ctDZV6oMnGhukkHUysC1bhNqvRNPQWbXmBnYj5x19Vf9mTj4xiDYXE3jE5",
  "key46": "64jgqZUQKEpCqUkA8WFcg7kJ3GEfCKpkgokC1isYg5suzTXDP7CMbyFbkbKfGyNyfDwXeGQfo4ksbN36VwVNTc9H"
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
