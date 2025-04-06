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
    "2YscP4Gzos8qfAe3DU7nzSfoU3Kux9SURaWASp19savNPNk8aiW8xmw1YTM2LYrCpamtvxw7FKi7UaNnm4cYE45S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DN2DUJcTSBaTHXtcnbyykrFasciEHpTX9GTL3jSEkQajSJv34ctsRbwGk5GhepVSSKSrJQNyvrgTVWGfchnJWDa",
  "key1": "3BWmpbeMs9tYcDozQr8NCn9AUE3uvQHKzLhTkoMDFMpCJEV7Yp3zoVqnne7U3PaXTupLV7iXuZG2A5gFqPreQAxz",
  "key2": "49AfvR3pwytoz8Fjckou584wKCs4fHLBP8F8T8w8LsPMh4dQzVBZtDTcdHrkJdrEqvfVymbE5kk9m1e1rVXQJdLj",
  "key3": "4PXE1yP8RGWRYZR3QJE34beKCYLjns4UwkDrZS6kRqNuLunE4mXePUJzHAoGyCqoScadM168iHswAsatcbN1Cyhw",
  "key4": "QpGnyNEpFrsEnkWATfYwcjqM3sQNKUWgF4WGverbp1fAU4CD7px2kA8sZ1UEtQiz2vx5NmQbtNsK6hn5VYnTRY1",
  "key5": "4t9UNExBkBTjGGniZbxnGHNmcAnRSCBAicx15L7sqkGqkf2DGEtxorpoqwFbguX7tXzodvK8bpf79gQBLhuZV9xU",
  "key6": "4GXt19D3qweXm4F6AiBpksJ4eWtt1Qe8Btw4WxzPxoUnUDf2RZURt4MgTbR8BpPpyBt2TYLrciYA5XWBmMn5ET93",
  "key7": "3QDME5kyggwWFsQuF14x2AAZNtrfXqDurx2ZarmyFiaFG6WKG444ANoKMxjdk9ypNj52bmrdmLWowrnRVj9zN2ua",
  "key8": "3e93f2MF6uDjAE6MVqbq5M9Zji5pHz6xnTiDhHD6RiFwFFcUqkM9AePQxCxaA1fBanuqrXgs82Fp5aj3QSzUWcWo",
  "key9": "4C1ii6p3cGR2GYSqmMdfDLg7oeabjZTPueCpLk6aCAiQi4Bvst99a1L5tzTmhJiFaYU2iEiGPgADTBphKSmfP3oY",
  "key10": "4wuECB98PtyC3VkQkJNa138sh9Ns62bREFdZybkUuztpKjeadYAYLjG3k6mvMiCDV74KER4KbeH8bTB11umBpbmz",
  "key11": "4GxCEjruH3L2EEUsYXX2toM2yQXv7Y9YQWYpDz96DFtkdpcA7kFkqHWmFYeYjHL5XubmbKf8UKGonEHbFpidARep",
  "key12": "64DPSQY2EupdJzSSDZ45FWWsSSQTRNG8R3x4hEWJPmf8y39rPgMbotGZz63KB7MMXpnTrY958tvaTWTF9QLQmQP6",
  "key13": "24i32hQ7oZWNeLRbqNB8ZMnCQUd9RoxZHvavWvmgsR6p3kE9sEz8qmTtgrYGJbPXHHNwQZULVrMELdQsvgQd4o2S",
  "key14": "4cPXpnuWyLCP8Typ9X7q6jdZvEfSrTJJrSvf317jgmL11hQVx2FzLMMssZvwZiDbHi62D6ZPi8quZSxXiJtQEprv",
  "key15": "2iyGdMuct1MkcoD5KCyRbdTVBT99kETd7sm91ZCAkxwcAa4nEV6mhGbr9jPDHiA6wMaDfFKiSXCpvSHyxS6MbUvQ",
  "key16": "5TynvJtBnAap4xoLnHJTfKvx2GdghxNzK1UcLAqf9UsNN47c27gACLTxTPtHDTjQhBSwPKXiznAzqR2TquCR2ebr",
  "key17": "NN3S7hTUA9L96ndML4r1VGgjoZ1FEo1yNALrjw5QzP2FzqHniu7eQFbmgtkddkCyUiKZcupesS4H3UCL8EXH77s",
  "key18": "3DKo7M9c3PB1E1dkWCJ2vnvPPcy9v1peGR7w8CneEurTD9tnmp81dH4SiEx1heS847nxWLokfnKahuHYRbJ7fxEz",
  "key19": "2HmMMP3CZrTteyrzVmhfiMzGczRkWR4xa3jcsRbYr2uMrUeNdLbPpoJQZmM4DvD5eGPntSh2qUMef4msniNV6SRQ",
  "key20": "37ZLu4WVr9349J3L9FqMAvJF7Nj3cWbV168jTsjZPWhvCAi5BYrXmwqxrPt5EhacNmpcV6ur8DkNqX6oByYHQoRg",
  "key21": "4kgqjwKRYmr9ercbdoFVxvoxrnjHk1Rt32VJJeYRiSmwVjcmUp2GMeC9HsVUeKHzrP7VqBqvL8udVhNwc1RfHQog",
  "key22": "4U2eMTF6WgBG2ym6J7TTaDtrF8VC5pbzmu89LrstbpbJ7mCJ2qAbcSYzhU8zRwDigFd6SMhpzmLaHw4yaT3gHNof",
  "key23": "37YCu74nTer2xTdJeSLxrgu6vYZZAfgZUspvitDfqrZhN7TVSXLkjfBUYYoN4auiCQLrSPSGVTKk8tDmpAz2Z8zp",
  "key24": "4zyWAgQU7KLZpcLCqCodgELokioFhX1cPyMXBDZPudsD4jZxQrjctH17YMZE6Q99Kn67zgCCWwsgPxVxuKihQsTq",
  "key25": "4NNo87SZZsDsdTjQj3XibXFqtLWb21R6CTnvDVD4dAYAGCrGvvSpgmr9GXJ1mQ8NnwjGfPahdeARyH3MLhw6h3tQ",
  "key26": "5xzmSMHdo5wDGvcbed8g58jxvTv32PyA4asjHuwzwt7M7Y5dVp5Eomfjvw5KkDN9DXkcdLAzHPdivBTfmUnQgUu5",
  "key27": "cXwrxqivVG8puyVLmtDvPYX41AEmrTnXMfoCLiadsKW1UyWBe5ZQdRVYS8YmY1RuGfoJ7mwJpEqDjo7nnCKttoW",
  "key28": "58xu51QiffofQgNoVk5i2JyBF1TfFsxkQCRFojwuUsArsfTu7uu8qdKL44mTttip8shP9u8CJPeUqAVckqviZUP6",
  "key29": "2p7yNwGwQaXytiowEMZRAoTjd56GUhVNhzxHxbYWgmwgx2dr6TUC8umj8VghvXiCtoNYyEDupm5BhcGv5fje4hy",
  "key30": "39KnDaHXKyCH1vpwyr7ZiVc8k4Wg4CkqMbZixgqSKLi1jmcAm5EUYZRSyY2VSzjQrvnd3NaY3N5ffBDdN1ZPG8Tc",
  "key31": "4kEbAszFYjTaPKvXhmbLvmsRq674ccef9JcGu4g2bmUsZTrpcwnQAnoqE3M63pJYm8UYYGqPy4UJzNPDvn12M1vn",
  "key32": "fj3Ff8PfLaagkq7rmo1C8jpegyBptdHj8pwEgDRrtVHhsaiq1JUtMrEg8CqvAH75ykuYc7Ark7cYwdrK4Jd9cQA",
  "key33": "3dzdw9qfZL6YLd2wjpxPevN7zqv596Y9XGpyf7WbuxK77urkF6hSQPFjZRCHs1Gi8L8itEPVSE8iWvB14xuKjksh",
  "key34": "FQcXqxTjQCFxCijPHEdcirPPkJEmTsZYEZA5AWVi5VayvbXkTuxquB9kJ2zNixmPKVDuStnwAuHvwafQPoCwEL6",
  "key35": "3dEqS4SPT6MHRgt1yFTUKdiSt5DzWoZk8H1XbeTvrZHjy6Nr56D34M1R5pFvYhjfU89jErydfBj7jEed5bCJuSwd",
  "key36": "3sa7U15z7iShjA8fUnPUM7Yyrg3g7JBKb9xJjDEkghsZA8PDMfpjKfdhzWdnDbTTHk3V7sgRPdTGG6q4fkfHcg8r",
  "key37": "4WTzxi3vC3HYtXyzr1GKKRxBKm9kmnsBMU79S9nah3vVMkGgznEdnnF23gyX2amtU5Xc6wTyztzmwPy15oCshWDC"
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
