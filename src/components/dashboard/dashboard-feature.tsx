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
    "Bq9ZSDjE9pVz4CsW9PwkPFmB84D8q2bERJwwYoG7qi2wb7zu41GMM8uXvXzjKqYbfHgUEeFqD3faC2k8viKS54z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29cKL5hR96qUd38ATgn4MBZqfNwauMjCRBqPgcz7mca1nX1cUm6KdasTxVadjSuvwjV7DZbvyNaqRfdNL4UJ7DcH",
  "key1": "2Eo8wHm8JEGk54gWequSVaesTD8cMax9vWp2iAnCRDu7yuruPsim63Rt5o2QoCrzLXT3aNtNomM9Xg4ZsP5c9mUP",
  "key2": "5tGMtqHdHG8iH22nFCYCxUt7xgazCGbSTLE7PNDW7jT3JWhLaA63Ajoy9H3mmRdbtHrLiFTvfCUuvFXgqp12eSsi",
  "key3": "2pDwUt6CqEYBN7faXd9ubwAUJcvBh5pUvwWM1CvE16ajYiZ727Ecq714HKnTyyY8FG3jdX5eTgzMtystMYXcJP8X",
  "key4": "47XQ1YPRkQ7jTHtu9bd95ipBBkbJdEuyejBAecLaWryUzLm5YoRbkxNkKzJ2sRRNqvKrVn3bbC5V4f5yq6XLXQTJ",
  "key5": "4codPFFaENjVr64jx2N6aXqrkxkY33YWydvL5aYrPyYQF1ipvGbFj2NfyXrn6cm9dP4miTLWQuoZKLfG4CUXq95U",
  "key6": "3qV4bZj7D3W4EHeJYiKq9n4NCJoNBLSkNbNWKRXbPCFUw3epygtWCVMWGweEdCCh5pJ3EPgyg1SVMAiVytQR5qnb",
  "key7": "3xQU7JT8Hki9BJ3F4QN1u3HMEhVXuKinjTfeeUGJaceSaMsF25zonjGgGP83NmfDPADA6onPeELgTWjC24yGYYsq",
  "key8": "5eCGWq9zNuxdoqtNGfXKjT6iQPKaJXYA3WhKRKJo3p5TQtFgqcEUkj8ceiVhALEMVEd4Nfjg2Wh98iChF4eMTGXW",
  "key9": "4dbeAbNGu4UurjAfpiYCNbjznBqFPPRvrfvmHmKrZ2Tb5wFE3T7xwxJSNc5ApMheCijLguoRFHRLSx1NDtA6sGTN",
  "key10": "3jRvG6A8Y3rDDN9B7grEpVvbtbSs8mKxS669G1AqbSSAXzHukqeLCvwA7PLtgTTc6DvBtwJC6hej45GnsFddm54i",
  "key11": "4rySpjbSVw1SKpZ9uQ8LfiKYv9XF4FrZniTRcNfVwVervGqFkVaaFuGHX5PfeVUJJ5AxWru5jegCzTNUrpKpdV54",
  "key12": "S2UtcynabpxSWiDZoE3gXMueP8QzmTdnvoH8AAAzTgAFX37jZhqQDZawj8t2oKhmp19ALuv6LfY9UL2tWS7DNER",
  "key13": "4BjPMvx9C8VMQzxceQwvBWrv9SegmkkTSU6eLeNuvsUhJer8QeNiwyHvsD63q5kyxkxfbqrPUprPZhGqBmKQWBPu",
  "key14": "5wMoHRUzsa2tfigqYTGYqJg53AUH362c2xTxkWQTomzNsJSX2kscVMKutbj6d69kQm9p7mMGAf4rLGhyYyjopboJ",
  "key15": "2MARtrXkqTMMo74kwPRbNq8XfmD7iEM9GwSSEEWVMKzKqPC6VVD7C4oqEkTCoKFaAGxLj3SeDXadd63y3s9AK3Gk",
  "key16": "5bz9X71w76cxZ6ANsaXQjxuKVLaUN1ibtbjGsp7TiNJ9PmbXt645xvckxWQiPS9zFSpQLftQ4XkCah6T94wWLMhq",
  "key17": "LtHWJA4AAMdHekHtHYYpPS8HNjL6FU6qotUd3CXTwYnsRNZ6k6UJE6KAMLMHmgFiee3Eq9myquMDqVFSiaT7uDB",
  "key18": "6U7vrcG9RgC7rmQ5rgPLWGy9t4wzim2ZndRYvnGSoY2Q3tXmMSmKcG62ww6pvoDqfco45CmCpX8X6GftN34wFBL",
  "key19": "4xh2VSZifNbGPMjQYXBUTt2JoXSmfETVvpjCLFsTECAmerf2xiLUgcV7tmaBYyR11F33DYGuk5auWgCaqrKvh9dP",
  "key20": "k5UvU62GfNaa4TJ1CYEFsbgHnHcudaefTBAuvqgvYKvtDQNfWyrPapZWB95fURvTSEjLtT2VNJ3GSbA9mgusJKP",
  "key21": "3oKhEf592XGUsbdvBUAfGqMHqJBqPJsY3wVs3Bds2nvwjeBKMQwgRWunqZk2fBHtxmQKHHeS5qumK3aZJKhZJ1B9",
  "key22": "3toZ7ffZxSaeSGVsLmvpr1nLXaYjuxSqn6skFZsfNzBdB8VJ5oBsRTBcQn8WNpM1UEFep7G3VRjZVsgCfNJAP1FH",
  "key23": "5J83tw3t7riLAFuKo9baUyuKPuyBtj5VtswGXDgMk1mVmDs1uq9kneCcSAEoH5WDAF43kxoKwjNdb1qGPEjmZtwp",
  "key24": "n4ZuJTuzC3ojgkQHEevUM6f47rymKYYXU8jzQLnCWT3Gmg66uAgwt5DEchMWQvZYiEnt9oRbSx4YLZmCysrbsi9",
  "key25": "65DES2sJDnypzrPwU5opvub2kBLuyN4yrpeYWq8Jat7Xwz2X8qzdSXZCaNnYZWAouHmC1L47ydzh5w5RruubybYk",
  "key26": "2svvFy446Y3WMAhYYy9Z582Xp7CN15YPDSxudCxLJZzKYb99XqEN8gWcKwxaZCBgTq26gE7JJSgN9jn6ced8YVdZ",
  "key27": "5hf2y6pnQdpF9Lzt88kBq5hhaQNHxkyBRsUpwTMQhUQvSjjsdzjDYp1ZrGqt4LsM1PGFCmJdLdpJr1aLfunHqwce",
  "key28": "2yB7XRnhfvRjjQn9mseVVA1XLnN5DjomtR7shpBDZwyj7tFzVUpmaJwZoKCf6zBtrnumauBBtXWVTQ2MqDi1WFMb",
  "key29": "25Ekw7WXQHg6dLXkw6XHXQ1mfREuD8g8jFRwga7DobHKXowEqm1U9n2bJ9VvwL5NBCFUinNVTvFUrjceP2kHPyGj",
  "key30": "CzBWpWWECs6XibEH6kAZLjFFjiCR1CV7aPQfCFRBijuEwfVEizQmoJUBE6u3z1YX9qkWnWCpLFHRRgPUzU9wEru",
  "key31": "Pv2jYuTCncreCQPEwbbiJ12RuUKbaFh8SWaFYJjqf3ZetPjSjXrwr4LcscFq6wYYoZAA9NVx234ycf7D9NYWH4U",
  "key32": "4o8n99cwzgYgLTBfYQLus6uprT76D5XcA1TYfr52i1WCepENidDw2PU91PgxmZwHhigEwxk9VjfNrXEy1TG65zDb",
  "key33": "5bDyZAPftj3ivgctPE3RGiaKmyRnDwxos6xFkSMoEXyVjPNdDf1NEZTcfDr5gF95Eyz2VocpczJjcHKjXrYVxRSq",
  "key34": "m9EEhJXHP4gsoXGbnDT4xzSiEwrcybFhZz3XzF1hsQe9WShxHo1LkQq1iGnKnj3u5ueShXC5cnRJi1ixKFN5zCG",
  "key35": "2a5S4LaRFVnXfZV9URfzGowFoutrs1TPhw4mbJZykb3ziUfHV9hqAPaqVvbadZ9nxfA1ycxRpgPvrSTNZsyewX7r",
  "key36": "374oyb3Tzec2nESVfagZKLTXrjkT53LDS3dCNZVTQnvRxuUH6jAi2mPxFrzyvq2RGVtgQmxnZuw59VsqXbQbnTKB",
  "key37": "3WzaphfUgormEjbx1vyzX5iSDMWuRGkbACGkgxfCGLAgTnKZkQHuKmyMiFGfeHch6QeAub3k5eXm2SWPfafQnKRf",
  "key38": "5qtbDCtegNSFmTXSkNZVSx6bAK9iGkixH1fM9pGbJK5m5DBfU4NB9bQ99PCW9vjraaEjdNEqyCvsH6a4Q6uX4byK",
  "key39": "2BTcJXvu1c44MMEcCgLvrNuXQJaaQX3LPJzCbG2fbXpx3WtAfYda4vuCUcpstpExHuWELDFmrzuaUnzRUJ3PLm9S",
  "key40": "5Kg1d1Xx6ATHjn6DvrJTCVKdaVCw6YNxwSqQUDYFZYPzAaChAMQoTvZVZrYx448gXxQ4Vkz47ynxMgu9Z8MTMB8g",
  "key41": "3vW4JKdBPDdtbAMhGoG17FU8vqh1v6qabEEfSoDqN4UuJL6iQgKwRNgPqSaMPNmMuMHXEcpwaLAnTWjh1Z8rSeNH",
  "key42": "4EyLowshtjnAVrjMrtqjghV4fFWLPvNfHGUjk7jtYK8j5sexUMCTXWch8dXbfTFrJEY8ZCdQETXGKbBGoBrSF5ka",
  "key43": "4StkwpZ93TUZU6RG1Dy9FP2hxCY8XsmsThe1jk5zLwPxEJPyehHn29zFpaewNcuobiiCXnE51PYaPyqrAfPX9bwg",
  "key44": "HrN5rcWUR3ZjwWTLGqr5NjMXFiXR2CzqpTNe8Zu7eMcB8TBWtCWdpgcCnLcdCDyNXEjpNJQ3RRzMKjvQYCdmm6J"
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
