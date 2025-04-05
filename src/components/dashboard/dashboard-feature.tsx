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
    "4SeEErHcbsD3uVRdZ7VmdpaDJLMEa1yQTj4zCimqGJc1i1BphCV2MbLMmfttAcqkEjByGawLEjzy97NaJsgxrazm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GWdcDd8rzCByjV3zfoocTwsJhwtUmPi1ZZawjzfEWVZGERtaRGZcbHgsjQjfzujHAaq3ec5QjiPyHNZyA4uyPuC",
  "key1": "3WeK29ovS5K9G3wpzDd7cmiJiSbkm37kAN2EHGSH48aFzPXWSEh1n521Jo7MYz9SQNAmTFtZJmTcS3ye5P4NCJV1",
  "key2": "348qDohP4viv73qrmXfsGBC64MzNjWV16cjSL7iJpPD2jkeLBEtKoih32inz6VhvBGgL8Xa9XcwF6gTawee68N4u",
  "key3": "3huGitoN5GZTZUNjeKXxdebyN3Tekke7GGbwzdM4R8MMa2k2gtev8Ey1UjS5N2o56yvrzQd3LeFTVEHUQhdA29t5",
  "key4": "4ZUFH16NYQ4SYagmYzShCsfGEahswgpgNMDdLw6NXXmTbfGUEhb23gtcUTd8b135FpsEcYaYZPprRMZfwmpjPWF6",
  "key5": "5iEdy61zS26NdxBUCqLHaLX9kArVTE3vxfwNt1tHNLDB5hMTcQrk3d5wMvwv4BxzD418ePVDV2psmFDsf97AcMwd",
  "key6": "4rdLdk7NeUh6Q4w4cR7knLSYrAYUAih1FznAXxUuijMpduthymZjYtcFYsbiR1Fv91NixQjWrTYuPfF5PHQnsPY9",
  "key7": "reUCticHHxkPRFKfVVLveA76kajZcWXVwo3ExC7QLUuCEzgs7UFER6mpM3yJ82QGoQ2atfD5HNYYWD8jGPkDJRZ",
  "key8": "3Qf8t3YeXJf6fnsZBYe4JFtNRtgeMUzzjq57TNVwUZM3s9CHvUbEx7Mmacb7engxZkStgxLqvLJT21maKoUs3cKL",
  "key9": "4zZvyhYGuvBtzKFBL8CyDU3LhJsZ8cDs1agmR4G2wYqPvPfapnvWP5vrz3i4KBnnbcj6DpXAmQDASdbcQRj43oop",
  "key10": "2mHmnhd9ZErPLCVFYZg5KRUzmGAy6NbLY3FmocoX9wGgBZKme3dXHrpcdsA9u5EEQqyDv7XE2gyUwLCq6mTEbDKZ",
  "key11": "hB4EePX7ujCTAbfrxpHf7FzXVHDs7ZgCVZaP3xZb5Q63DuPznhmHZpiX17YBwHBwmJLmubt58xJyD4QYLMAexRy",
  "key12": "CE2MP5WR4jVW7j9Ch2J3wXH1z2yc5SFSMb21pvW8m3bzFeQ8A71dekSJwCtZNkrQU7LNtEq4abxnoKv1mdvKE5y",
  "key13": "5RiaxF4qmwXy5wxWHogXe2qpaaJbq63EeJRFnUSgFDACLERK9aj3XVb9L7RdSd6c2dxXV4FHUtxrPbSp3sjjcmTC",
  "key14": "2U8Yq8hYWECFfULEKkf9ctC5sPRgpXwZyC66T3wVALhx5LsGTL7aNKCGgpnS32RgFi1ucMy33hiPizoieauiQSgQ",
  "key15": "iqhgMkZE2maUao6jkYeZ7sVPvm3Tz49xXSzkQNnwF8BiSqPmvmujDHjyywsXLsRBW6Cg9917TLNugudXKPoTRcE",
  "key16": "5KznoYQS73nS4ZoEbTjr8nB1oRxWkY5nVRgLg9kzWyMdtBxmgntBAyRRZdLibkrRdHmAkmig11DYaPyvHZu7tTaE",
  "key17": "3eJ38HWhS5FqPauA2Xe6TVrx13c8LvwGWetPMaG6dgKaYPUSERaGhawDKsKYriUEP4fV2rBSj5SmTR2eVfJJkuxw",
  "key18": "3AGj9NhcjkoMeF542oC6maBrrj4Z9MV72VSddA768WdLmGLYjF6RMVn58YCoNSTrYTDt461pXADqHp339qNNYi12",
  "key19": "3K3NNonbfZtgoyHzXDBrSbbRseVjCUKXceNd3LgZ4NfheLz8kDGG9fG6KDaKaYTqhEEvwyd1oeUxc1xEgHZR6h56",
  "key20": "5twwYuLwb6ogQhL6nFYUuNSHoj7cKGhQ1SPFNDs9VjSWvfsjnK36wFDRpj2wmePh9aXvgpmzhRyqDJegVJJ25sZN",
  "key21": "JMAWAgqTAmKoVv7QmvVEzvY2518BC6SjMUCGJxym3ArAA5gb8ftaBeRm1niWY4nErHUwf6oezchqfvXKwRvMk42",
  "key22": "5aJsrUwUf3woTfDgdUm2sHi68uDQGcAKMabrsmxvmrYt3vRs6xhUjnRpkdiicofpyUtRJQHD16pkeUcLmwZeV5Az",
  "key23": "5KqNFejBvwqqtmN8mRfQF16eGwCusix52JRF4kVxPKZZoKMyX7J7j7p7PJswTb9Vmh4VjXCy7mVfWbAdk3PnGyt",
  "key24": "utfep6XHu6g2QdAxYsxtbsauysvDnjsc2qHT2mfD9omqZ1shY17Y5GDg9MajP455qNgmGNqnYrKMkj38AVz4Gz4",
  "key25": "4CwEPfqaCmjntC3qka5rRHgrmXzjrgfijAUUXaHtA22HTNinqAJJNSjaqw2o9mcAg7i5Rmh6wYVo4FpFNPmtyaWV",
  "key26": "4Rqm4DistHBeNfPbgiux3pcPHFShu7gizEtG7ezd1Pos89kjsgzRa3MXt7nnZdzoZ4scBQmBfFtw6tkipE6RZnpF",
  "key27": "5zEccwuYqh4rLSkF7tQxcVhU3km2YT5QKPFXFeT7FngkDQiKhrJBhXDGNvbq8ZpBVpTDsuNnQTiNNQ6bhF5eCwV8",
  "key28": "3jWBzzEyeU5ubg6uPUoi9uuJ7yLVeDYuTzW3ZDqixUpxt3WyyFzGEg9HsmGpi2D2Ez5GBCTUJWx5zX2PJddWgXk2",
  "key29": "2KfXLCSPpggX3moXWmXkpFavtbgVg3ek9BCTaVYkjvxAe3biMAyAXmMoweKRaH1egpTmL7Pu86bkF9pRqwp1jCiv",
  "key30": "2y382NzzJuVw2NB5YJSJG2J83is5VAyyTvRLTQU1wN6CuMubqKqA5ikgeGpePG3F6R78jywfbTFjua8tyN5cztTr",
  "key31": "5AjQU56B7KTPogHZ3u5JRKJj9R7YgwuBLf5BPgq3ed12f26uZB4RBgBacy7XumH6mKkt1avgHAKoyx5JBRUEESwC",
  "key32": "4JnCuHgZjYEEmhkYHWmntEwwShB7rHf131Gdg6JjxehMiKgbz4P7TyiDbgWZJUyqivFAPcXcJrA3AXoMBAutgD8F",
  "key33": "4Sz32B22saiftJJzQtVTFDfaeyGN4phMQ11aySSCFPC5U8zUhT7sAvEHpjuy4M2ZdgUnGefs9pSpv6gCVcC7zENN",
  "key34": "JcxGwo43csTcAnLKZDh7MT9od2wpvL86D4jd2u5jDreGMd2osqPcsNLzHTtpajLNQNNZ2nCPHu4nV7cN8eK5v7v",
  "key35": "x22v2wqDT1b4u3jp2AkKkFRBd2h3FY4Y1RBS5jrKHv4hsxUFUKuUDncxYd6yqpC7kasFSZZf8RkrqYcNgeP24KC",
  "key36": "4gFxtSiNXvAjrvmmj86oZvKdvVsCdVCBtpXEwJx5gbandvDqB9UpdkodcG7ZB9WASAEHYLQ8vYvVA9rLkJFuhjTg",
  "key37": "2wQxjGnBHjHYF9GuXjcFoRGHTdQi9kC8jVAZdNg6eQmJsPuCr13rNTCKLdrvn7nQSiqBjkbhGacL4TeJFoQhen7N",
  "key38": "65QWZW1LXi7Jj5HJDY247Pik1ccMDrvpMcoaTgWiDzMAccigknpuvRDaUYJCMfUZ9U1SK7utSDUqE6Ku9CJesPYU"
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
