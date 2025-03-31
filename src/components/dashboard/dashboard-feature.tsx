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
    "3Dc6iicibMG3osiyCG3PbwAVuYLJi65BoNFArTGPZEe3rMhBtKwyfZMNJXJmwoVeYbx455iP76z4xsxych785Q6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "241E6jkbwzcRYJdqpkMEg4RwpnEkftQhRXC3VEkmcxDS6LDgm3wMPT6ZhY9mSLGFLvYN64NWmSf2rAjx9197Wsfj",
  "key1": "4jMXBDWiGdZkV4tmfUmEB8bmvX7v5XKx9uzVeXc5MmyX9QPwvcn87cLZypK3VVEKNrfrQYoBsmUfDpnq84YtZngS",
  "key2": "2dPHGbXHApyXrGuwoy3zVYeNQFCoprkargo2S92S51TNCyWWACnadLhhihJJHCXEV3i7qVMmv6vk6eTctcHiMrJ8",
  "key3": "5YhyP6SExE53mdE6EVJ1nhG8nfjEjRcpn8SJvHjV1SqPg9BCEfBuXnkvkdScdx2yU6ki6S1joeowJPyZAYYZ2pxc",
  "key4": "2CCQDeQkMyMavfMZCSa52XTWTWbTR9j31Tuf9hvgdyhWxsaDnrgmK9WzFiKxLvQSkTiJvhSkzpMm3AKcJ57hKpkE",
  "key5": "2ivmmcL3QqZsSsVEpvFzQynuAyqhDFD355T2BFEbSnch1peYiJKKmyMy4uWeXHvzk2pDF9jfXe4Zf3BMYCPSMicm",
  "key6": "HYVvB4LmUv9BidZVaT1qgq2oehbNoEZj7sueiJxpXtrH4Gm54Khv1b37tcDSBBPRyWEedk4FoQdkrpdUpbvVD5L",
  "key7": "5fwJgVBUGuM7KS5HY3vK4GoUUFGfLpDYXB9Xg1cwMTnG4njCHdAB9YJDiuVEi2xrSQNtGzY4uNr3NjYiazGkqFGh",
  "key8": "CqVQY3TBoMnDEauDrkpa63SUGjFJnMHknnvFvQ84cQnwwEnniNGTDQeesqgUppiRgHLKFsTjc6vhMpVbj8eh569",
  "key9": "4ii95jUhdYCXdFewSwGuJU4ajYdipjvTUcSgktGg4EMAyGjvi6tqLgbKJPe9J4x46GD3uZ4YHygr84xX3oAGVbTg",
  "key10": "3rwqNyWk2qNAhsd7tWC5qmmrNbjY2JgPHEyHBDxoxgqPbzw2NnDB5K41YpLnJRrGmnFA1C7gSeMESRXtJi7jVsRE",
  "key11": "3yNc1GTVboCw7cMmyS6KuJAgXAePhYe3rncsnquyYSqjnkChctpV1pqrxzqcN28szHdXKPyAW4VX4ztAjEudNVXi",
  "key12": "RctK7jMzHixHPQUWQmPUvzxajfgRoZkpjEvR6MjY4bfMtByznnyzuaSiwmfV11Wdzj1sXasqSwnPRYTSwt3DKLP",
  "key13": "4aN9n9oLRmcD3rpwLCFokKsPX1ziHMXvbW3yL8VAPk94KB9DuJzmvbkkCT69YTnoho59BSGaQQ6k84ZZRkB5Dse",
  "key14": "5aDi1LW16GKxm3KQx5bAtkf872y3yba2wS3US1DW1jiTB6MgYjkBMwYm8tUJuM6s72aPYvLQX98r9DAPWosSHB52",
  "key15": "5vdmpNZV219G9Gj85ALRKWwBEKAcmaWPVC915QjqhnvAPqddFprJmfKFSybBwYmKNF7xtyrzMuvkeiwjNV6CRxym",
  "key16": "3oaw7qBpeSXzHHSctNF9MA2iui7tKPvQrLbVBjcfGnuzj2W1MBQZ18fAN3T7oV3JuNoYkFWznS14VypyjXESs7hh",
  "key17": "UtwJpCoXMfpRT3CHZE6yjdiUpa4hZS7VMdE3y4mPYVe2Ct4D1toQ6xf1GEpk7yjZ42oSkPdPhRpPT2z2UHoTwJP",
  "key18": "2T47gZPPhQo5uEqTgNo9MD2yHkMbE1NjhxJWzAbp65v8vTMzf4wK8YoPYE9yjXFmfyBA3t2J96NS1QTb4uPuy2pk",
  "key19": "4eW7yiMZrH5UiuWYn4gnEwpcfvmQtpbQaaBYBUk73tyQnpu8dCyrThp3ADVrcctUeBeC2Y9Pob2vW1o7XQnvuktm",
  "key20": "5BdzEjYQkSQ3t7DQocJasWtzoEx8jJmpW62sobybKoJmuiATP6Q7vX5BCbFtzxcVWHrya4yotCnXXwUDkj4TYXwk",
  "key21": "Wt1J9HUYtBKqop5YxoGoY5JeNyQcc7Lmo84EiZ97XrZgaCjatvSNQiYR6mNWQqyRzf1FJ8EnmHNA9Bw3XtJs14y",
  "key22": "3UpUGbBE9AX1J2vjap61Nn6wcNX9Z1NGsX8aYabNYbU3ip6WNtFEkmX2r7L5YvS8mDjRcUTz6hc8FFaJGtojcJgU",
  "key23": "4aje2jzXHXWGym7XHVnhyhwwkFLFFGdvccUFTMdMUkBRb8PwsoECb37A27ivSevnFqMhj71Aps5kMT7Fa68XdxAu",
  "key24": "4KFr9694RawH8UMYujAXgwXJvqTGCrZBE5Bz7CSDw3sRUmciDFTTt1WPXq1qJmBuJCdjdNe3M2sKg7xMQdzsrXNT",
  "key25": "z6fq5QabTXUuhohBhHGvWyc6eaGNkHefo348xF4MghgBdwxFvFabA2rxs7ZC65frBpPXrsmzZ6h77VBr5csDHi7",
  "key26": "3xk7WoL95qNEJFoiM7yon4W9qcR4JFgabhiBtcPECAFUQzYirChhCe67qp4bstSUuNnwMYgC6VcbaLqbqxnghfZz",
  "key27": "MdSNrhkHnbGbc1B9xDkMBLSsk1BV1ezRvahA9R8emtGorV9H36RDMPU6oz72ddiVWD4kZ73b1jdaY9AT3x4Co5i",
  "key28": "3GRutcknpi7JFaQ1Fi4TzaPvJCc7ETooLCiLUpJbWj16Um73TGt3WPfJpvuTq4hCjYXhZhemt9KTPMXZb5yPzGtq",
  "key29": "UPuaPejDotxTLsGpbr51FbtELYKjjwp2inFjdrdHFZQPxSALQj5Za3nP45WKZ3zbQxHDEQbUwyCze3iHtGvWeUg",
  "key30": "5U6A47xni7K8B1uxFTHuoery8CrpHrUWZLhUvnzy9ugxKDSqYowtRiTZzRE2eCeVHKpftU3Dw8uKtJWQ5uQdqb5M",
  "key31": "5QqD6ipGSsZa4RfKjDUfGamCqD3Kw3FCPsqisr2Mcgh1DqEpC5DyTULgToCosoYMEhLv5oXQBVQYqb36hhe7aL7y",
  "key32": "4uXJk2fqAtBDphQm6fn6SNnPMgp7xUciJAo581kvVRJVT4ZfMcYHicgsMSey5pb4ixeTXahTAoRZ9YLSwmbxdHtp",
  "key33": "64ZUz6pUpTxE6mhjf9gNFHDE4Mo1UrWsuGPW9HnpS1bYbNn1y1etwhQkezwDE6aVzgQQN6mrwPGvBkxbZduJTLMV",
  "key34": "Eck3GSyqsBoC4iHNNHhmUdPWJpSnaZYMdRtuATSoM6JRxwdUzApoHPfC3K2aogubeEDaYfxSViPyh4AiHUzs84o",
  "key35": "2zDnV6t8Cx4w6Do5XzkLDTkwdbU232FuBC1Kp4L6vxX5fX7XQNQe63StHBfoD8risC61kqDaVGbUZfm81cvoMj1M",
  "key36": "Yq1PXn4EgPdT3zYHjqYc6NhdHQEfuuBoSCFTZtk9g9qQeCVbuF7UCo9SKrKrbeU9QZPJdsRCRDC58jGGVVErCcM",
  "key37": "4uo1oQP1XzxRSqXdAuCMzKLVrp4YADhTj3b1XJdrapmCMR3m4Vtie98v8FipdjKQmoSRPkKRMCV9h7kHUsaDewrQ",
  "key38": "5H9ayvKh5tdVox8rTGLqSasroJUpLyKWEaYckrjJ88vdPtPFNwCXNMBJx7Ku9yETDTs3k65m2qq4UBCNJtBN9UJB",
  "key39": "2ugyEvMoivn4UnU9AQnSnXpLfhnjcGEcvZUc31a9GfoqzpEey4SuSqKrxdD8qRJrvFqiBMe22yJMd6GA8bg8tWYg",
  "key40": "426J8jbkjxyJDzUxc6koM3p1jk72QoSsKbzFvRYNFaU4yFpRmE5dty1GPDBWHWvC5xJV4DpxJ66UuNW3j1YVG2A6",
  "key41": "3uNiJAQhVouXdvnEpiEPMT9dKQvHtZmnQAWScvVmzJ3BSMXMK8mrYekaNxZoxEQvfdLz1Ueofm3hXjakxyd1qSWZ",
  "key42": "4VFwJTp64aEzKutUmReRov3TL3gYN1GWzG9bvc6pkqrVYrjvUgWyfYZDXH1oyf6m9ThxizSxnrzh41vDF4jy3kdD",
  "key43": "4Lwnd6wh8tF8F7U5hneBt4WRtANCEEKAhnh6VTxVCXAdnXnSu2v9dqaeVbKgMTbAwTXFRvJaMQkLcpbxNiKxAhpi",
  "key44": "46WLBmuVEX2UjEYDbrjPasCv51CSBYHK4JgvXp2aTWKHctKoakKUTEG7gZEhSDMMKyGXz1GhYwYkg5nLsk5nY5au",
  "key45": "X1x3E6RCwv3YEtSDBmYrP9BxmSdnfH9qvbuP32ZiCvocoq5u8roDuUTnuLm835AxrpYtVe259WVQJjGpGS6jkS9",
  "key46": "3337aQtfgH2YTStUMT1tV4QJvusZZTU5KadsLhhtMotBPkZQmYBTRzpSrkJPqyz1Vf1pAB5Fr6VdtxWTerPcv7JW",
  "key47": "65JBEpAPqVJWTdx8EUQWYCBvKdsuLokTWEC5pe1m2hCPwBwGDJv75bCkKh7aBAyZtorCUe4JCPA4d41AkRPF1nk3"
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
