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
    "4f3GLg7H8noW86gjLUFgaJLyU2yc3fT49xwyXug2yTMzD3i2vbiDxPtSHxLKsTt9oXRmeK2v513vsqBxhDftVVUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4947MrdovfE66Ym9g56SZMCoMFq7xFrg5Ry5DueuGYE9UUE4JGGXpcYgwVZv7Qv62cdv4TjAbasw9yjtagHpJPZf",
  "key1": "3Ug2a3h791tkXFe3KU7JPJuYDRYEPWjoQKhavcuDb7CZ9fAqNXXExwoEhMroHAxAcyC3V3gw6FiYEiyyfqCA8Qz5",
  "key2": "ya9dcQqNnW4BPKYj1rySv6veqWv6KNKJaeP1bEwv8jFmZMEmu1QbXcG4VA6FPqEgwBdMmQVHY8zMZ62t5kJEVQC",
  "key3": "9HAfyfhgHtNKeeG5iEUoAJHiLqUHeENt4pdoGodMB5aCQ3Esvon2caViRdaNRcCCLbeQfKbQ9jXae13k7pxQ67a",
  "key4": "Sjr3PUEypcpTJQcVmbwxWmxNLUF9fQ5H79zC9WqukCi6zN9ZHqS9PQNhMvT6Cnn9HsYfcwaJaG6bLAm8F6ED2Vh",
  "key5": "ZUcsZxPKvwYXGFT2BJK9vDbKFNZT7frkVJ5vjc3zeh2AFGHcQRWK6ZMdJpwQzawstXU8hnKkZ91yRxMTsu3WTtm",
  "key6": "65zxHyZ3zWkFznAx8YsXbLiCDRga7mFaQJbBYTcvbCkCQBrPWtzgT6FxhibyraXKED1XKUrQvzkZU1MMaPavG3s6",
  "key7": "3o37KMXfsvtiit88PLmifAgyTVdnofa5huDG44M7Y6yjNWfzBQ1MuhcGWZWJ1s6SEWncRoo5UuZtZQ2yJkVRXh3y",
  "key8": "4AxCsGR3P7ehJi6HbTfYcmoc6WwJLcXrcWKGDLEU5DxrZPFFGDXkPCuUkVcm8XJUJewBemJu4WrJ6GqRSM3KQpjd",
  "key9": "32ADfRwGekPwQmcN5thXhM3ngeReMNaWM3ff8v7qDnzptvZDrtt3E8GV3MTZJq9WfHd6qfmRD3zYhVhL73smDEnB",
  "key10": "5ppcCYmVTtXUDtYHAK6W3h6Q1sGWd17iUMRUXF1KXyci3sYGfyKEmAr3V5bxcwerxtLWDnRfzoVSz9TFiwCs2Qce",
  "key11": "2uKxHpbMBtirFcGuJZU6yrm6iB9gN5wF9piQDAbd3H77CTeGi6ucCYgCGRwr5Mv1z9c2NwfL6b12ut27bA8cKLc4",
  "key12": "2ejAB8VXbbzk4WaMfhhgZwzEZryoUsZjTJtQhwcWhXNGWSESnb3e2vWj9G59fZvABr8cXM6Y2ZrvGm2rnTepqXjK",
  "key13": "3953hwFzAngWmjdgLu7RdWf7APDjj8pg1gPGMi1c4Nd6dK3UskEQ4YRz9n8sf31ap9gMaoCZTwh2LHg6CZgqFw5s",
  "key14": "2to9trHpwpvFDyp9NRAgunwxMgSmtU4XCx8DGKYe45c7V4bBjygooVHdxHgtLS6Yr8bR7kCsv7kWUE4LjF7MqCda",
  "key15": "3yNtR3KiTzjre6ia33gHhy68c4bXsA5224RiSu5PtvohrJ7jfFLUF7dnFV2mxYvdgrdGEZFZ5rRwTupxKCYfs51x",
  "key16": "23xNyAvgmm4dxGfq75a8dvLf7sq7X9R44jdrLTa4jBpsxkEV8Kpr9D5Aox7NxqXZi7rhPT1tq79mMNinPA1nmKo6",
  "key17": "GFkUc1kQCUtbtApvi41VSBThdcN5Fm1WWyUnozgwwMTb1KDtQUxZLgmrgMp2fFX2sUmS9HUGr13a8Uhsy5ExiBz",
  "key18": "2B83jphC1W3GWefsDwTaPGcV8tdpEUWNck6CoXzd7kWrKQbSd2rxAvkddPYzpoHFqR79kdG2ABukvkJ2CreeBjzC",
  "key19": "4XMzpt4EEzdccoRg9EWd9UNSpt7ppJBChBBQ6XnUF8WZjLpDtTyYGTnmwhXRa9EJHp4hFwyRXMBuxtvA6ZvZL41Y",
  "key20": "48QvnFT1yxwX4uPJA9Ry2pZTrZQTKvRCYMRSD4fMN9wN37VCMRp8HfQDFJBNU22Q7aksR3QQQHNzp6FjfbhEfSHV",
  "key21": "3RWFeoGT3tBUtp7EZU5eE33tyteVvuQxt5VCM3LFm3qhwqgPKGc1dWvC27nwXvg1Fa3s8bTfKv84ARnXGPzswTWB",
  "key22": "3R92T1cP5Vke5hbkY9fDMUesLrwy8Az9ckmUydwsg8TeEVFcE51xzcYNNjAjaPMMis4GbCry7jCD9Sp1QTbm63aJ",
  "key23": "4NLLA8DpQvar2QCJw7aUJaQfj57jSk3YqCXWApuCz6eDdW3NYLifQQUZTUqQAL33778wLKe1sTL9JXo34fzrqNfM",
  "key24": "kXV6qGMmdHRNMx1PkwiLDqByuGCVWChvznb7a2QqmDp91rqhw5wbjzpJVnMidHtFPJER79F4qk5rZAewRmxdqfQ",
  "key25": "59CVP5S15CEkstfwRim7ZP3gTMWbyeM3HpMGpu4zcSLfrXwKyDCfD9RZFgZrKEAadKPseBMB4T4T6WSPZuz1UyHt",
  "key26": "3iQRgeZVs8nRDJoX5WUpSyfKwAF2Nu7uSKvmckpgu9ZBeGwKYQ3eXiPZT8CBxTqxCkRin87cBx6xLXtmSh35maDC",
  "key27": "3p3DTg8fLyZc2zQXo2SURNkY7fsinxWjLVhTeGnkUbNbWyWFSy7LV5mWVA6HPq5jh5WUdZ2ZYrmdKDxWKb41ZwFj",
  "key28": "iDSeGRL13vNwgZ5vUCHAtJoTKpL3Pej83bE6sHmFDPV3t2P768DQ6EbCDyBp6DrbCJkEeqUQ6Wk573FEjyw73mg",
  "key29": "5CkKDdnWKH7TDRWVXYkJPrkZArvDzGj86bFZPcwg1Yq33NNWs6b941jvnbd5vSHqopGwCBWcDJMKt6mSuH794Cvm",
  "key30": "kWTxbgAUYfUBv1vkU3DbTobHQpEMdezsadcVDRYrRrt89mxZbB82DcLQM8oeC99LbYeq5ZPKyGNe2MUzafbLFRX",
  "key31": "5SfBroruHW9xkcDkYvh1d2GY7KK2YmbRAFcqroYgsmNbAsxACinGsSecRnnsvnoFvVbzt3ZMsGpiEtzu3pVxTNUk",
  "key32": "3wnC18Y2nTaW79etYwZDhvh8WHgLEuGDMgkQkiCGhKmPUj1fwBn9gRemNtGtum6p4ShkuCpqZjsf1rWzdJpYVMkx",
  "key33": "248WgaTMzmxpBLVhBfQdCL3p7XX8xUzJnr6wvtZYnBr7CRrqDLenoRftnHhY1yaBd9VUsbwvknL65QVkE9GWNgXC",
  "key34": "2RHnAsMJ64A3CSSxR5AhfF8trpCQyBfy6AvQ2Pbr7CUyFqLVLyVz8fgWKgDVWtp9r4KfsauTn4bqhzxXTePP1Sfc",
  "key35": "3m9AeYVwLBaTKE5VNk5XVBJ6a83jmriYvAJwjAr3YwJRdsatfzim8QWV2a5m75qkzgSJLgVMqshRiiqCetnSgFKG",
  "key36": "5fKpVG1mdtHzHBwgwDoL4PCCJuPMATk7Uptu3ayKjqFfuYhizpWJgGF8m86SfH5ZGJueVgvuaGDvd1R5UwwfHckF",
  "key37": "3tyEnCZBWRSMfSakN1G3yTv7gKyAFcLTbwbWUj2FSMxVqzo2zWLcPdDBqEwyLJKm2NZXx4zjDn1oW253ngLEiCfp",
  "key38": "gEE8bGALSD9bQwnvPRd41aiCpQPeqNWWJYpWBtca2MsL17UstVXvH2cSXjbc4uwMS2uvZsRTWXosXSxunixWnUc",
  "key39": "62S8CraAG6KnLkaAPZAxEEu2LX2zhHRKGKc9Pe37Yhk7Yn1CGDC8qHFdKksBuPjGZBZDBzTJe2GMMmBXwMPmC7Jh",
  "key40": "4RqtEBUXQuQF4oLRyUbKq16qnpgHDeZDZK8CJG49294ydxXY1Ysqp6o2uJCLaE9bP9x7m5LhuY5LvhtsUhDtmffW",
  "key41": "4cqsv8MyoEDFdVin3s6TZuiSrRhwbu2TEQjGhqLphrTasW6DyBdEUdBoGUEwDUNr5daSDSXbA3wvVhKxHzv5j1sx"
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
