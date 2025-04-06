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
    "42RETR1UoXCpJTbSGGzAWDnbLn4qNAueAG2pKWcaTVnFc4nLwa8XzfGjZgUTMUnb3v1ePY2ThDGLCAQQk5NeXj8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nWKowGY9LadSaeiniZhNvwyAhSS5FykhmcFp57Mc6QGsDJs7LjgLDgQcUWNWfw2ADTct6RDDo7viqBb5SnSDtgp",
  "key1": "Lavp2iK7xw2TBK5bCP5m5ZFVvTyDNNXix1pQhwZjHBoMQ9yp5x8qx2m7HGvSa75xhrL9mxmJsqEaWbWeQRkxJr9",
  "key2": "2iYsecdgpdyhZXF37pHfXeWv5miskfUcFSVzKmuPdbhyVrFJxzdafP1xQszpgSpDs7iXKqxL5gi1YdbS6D3d4Q9J",
  "key3": "2DwnmvJKNGEVmbw1ETNQGFMvm7Njkfun4jMoPPmVjG4KJqD8meVCm9C665nrXHY8NGHbKDLCKNtHFY8VBHG6HVQN",
  "key4": "39Y8cpYg21HsvA6kVzTgAnjJ3kM4d75BWsqdAdgEJFEYnDcFgzKcXE4wnLzr5gs13rsmBw7MhGstAqM1xuv25JVf",
  "key5": "4KhG5TxZXcFSxndFPccRndVwE6CTfQ7jn8zzLtWMcuTCiZai1VXTnp3W1p157eXbdeSLYu7cWZKoMEsc8bWkrWns",
  "key6": "2UkjkYGSTS5YLDrfngZWq8CKZsBcmHexPxxRi5RFj51G27XdDPeRQMMgGw1dmsCtc32jZVdvD732oUf8zhaSwNKN",
  "key7": "4geNJBF9Hn88cULNKGxuz1m4FpqHfbWUdbpGez4m5ofoEbwh5C9kNqDRG6x4hPzKLcqaLCboEpFx5EBG1cJbV5FL",
  "key8": "5kUsRfCfLVkwz8NsHnMQ4ZUKygwhteQ5Km7pQr3woDpgs1ocWkFi8Y435E4XYXVBo3PcN1nB42J9PYGiX6Aww7rS",
  "key9": "3ZNA8Ci88sNPfpwjxW1Wxc3SZkt7WBGH2tmBLo9VmjfrdnKjt5cJkKC2Ao4j9ZmpMQVDriqwXWgLHUjLWQRNkKvF",
  "key10": "31SY4ipcfNFuE2fNiJ8kfkk8A4jwUcBkYdA4ox42edceLcs4iCEbJVEnXEKuxxfF11bcMGEMej64EnxarRNoHLeZ",
  "key11": "5MfkoYepkE68XQKgUXP2z29Sns3r2H4YN2Ewa9XtXRVKFtc7NWjg1ecoRuxgTtzi1TQEoL48xNwk9f9XqXkHyCFM",
  "key12": "5is2C1N7oUFeorL3paKWJ5xoLjzPVTREt7nbEKDkjtqKGeEKNDZFaf8yE6fpJd6Gp45ayV9TUNk6gKrLP9cZrfKL",
  "key13": "5xNYLP45RGsnJWHiivM615dePDNnheafdJm83GHRejMonj4js7mpaNcABKzPCm4UtFJPi2S88tfLXseEzEbQP185",
  "key14": "4TF5HeWYunkMCzYAWZfBtMasq3LZYEogS7jYSnDbZ2qYx8t7XaSDY1WyBumRSSk2xaEGPf8m5dHPukrghZAPPqoJ",
  "key15": "3NzZVmCNTsMdiLQ23oJQxv2aWJ9wXbTWMKUBeiTMCNDdin1BFHQTJv15ob3faoq8zbSQN81x1vPMErvJAutcp8Ab",
  "key16": "4a51jAHx2qDxT6h6E7b68AGNZZchwpsLuTAFaGwX8JVHXwCB7RPYpAB28jrQLzQvw7rHYfT3WSi1qkmSgoR6G39U",
  "key17": "38bg83xXtKPacTSNV3wTd48SC5sk88HLfjWFoL7WNVYacd1S7sJe28iQr3i6d7C8D2FKLYLdurMgkAAaXWx9cBXw",
  "key18": "5oq5asBF18w3oWbmmPBKb14XZBevSDZ3CTvzHvt2z8cpYj2iymm6YVcFnejEiyfFueJwWicsKFoz4vnaCZAHfKwi",
  "key19": "2Z8ozAs7pb8N64aDJhSdSbWZa3EegydLLhoCBNZMywDmvq7sqfbwJX2MXJqymRMTe1VKZwF6zXU7dwE1i4S2xj8X",
  "key20": "cWywhLdgyjJwAiv8v5gWk3cGAuaB1fgvobcKNMqtR1tFxbfGaGDcC3EgsTcpb6uSV4fgKZAwZwdcdB7HkCtN8bV",
  "key21": "4DCEQehG88M7ktxkUth65duy1djm1PxaQf6rFkQck4QdVZBuAKPuLCVpi68EwimvESWEBVHg5eZ779mVW8t1SMPJ",
  "key22": "S4KhxqZtLzR8hmCpb5BGwiq5DXXeFh8J45NUvyueMVZZbU3LxAZjd7NjUFxsik4fn2PLDrfUm4Cu642pCAcDmN9",
  "key23": "9YS5Gi8R2sUJSyUnXWqhAbtsQQwupGJhWodvzkYs7w3yoXxWE6NsfQByj6BuTaQgKU7jeRpdKYZ6WiNVKcBAU9T",
  "key24": "52dDDXgsjPHnp3p2sQuKjLqJryUBsjHj1HyKsKqpjVWrFUWsqWo44xQZW5qWemVagjPEmxTwktRkGMjYooz8hR43",
  "key25": "2Bkjw8fN4RRXMkEmhntDEiJLSTGJNEWY5huapfuUgxJrspKSN6kXFNnko6TbuxrKBQHu9jvyNfsE7NNodQpyReD5",
  "key26": "57aQ9i2ZdH54wYmQJehnFUx3wxhvUhDBU3uRDCo3WaMZcYaLP68hMoiBsMu4TcDdyEc7SJ3NvDRz2eEuHDxGByih",
  "key27": "4Y4GKbmSaWpfTknAGSCteWMK3mSnoMKvnKiBJowWBA9dYk96wYyEvntTJ2xVdBwzdB9pTLdLvSiNJsHmwFXtci3e",
  "key28": "5q9ELTc9DWoN21fQLmunAPWF22Us2uF41aqF6i1Ebxypi46t7tf2v64eRZLbJAy8Qzq42hQ9p6PuyKGY4RAvqgjy",
  "key29": "4veeihSFMzhRbnRCDbUrG52R6mw7hHm29eSPnaccTPWGd1kEnms4jTt8jWainYgBwXJDQtKPwVC1qNhjLcYyVUok",
  "key30": "2prM8quEM66qcv4qGVAEwBHsth2VrQPdYBhPG4KhfBU1pXGqykHYWfRNXMv9T361Ca7p7TSren52VqDzM8Wj5jGB",
  "key31": "efYAJiiwF32WxM5XvZbyeo1Srfj2AVx1wSBkXLbmgdy1zhS6QXU9eXBte2YHin3F9vahE7DbTVcDWhYmFBBqYGA",
  "key32": "3jKzEqfLJL4BpKcRBHaNSX37kfFDENoyvFMUrNh8QFYZkdQe1vvLfoZ1Uau1XyXB71hvcdCQkJh1bn3jjAxRAsjT",
  "key33": "4vjSoQ48kvVHSprGgjiRPBnWVn3zhmZbFGe6z2JbEm1CeHVK4NrGyphyzKWccSiuaMQCwtSs5EUViBwmgerKYhwf",
  "key34": "4EMb7jAKotyeBFEiNMDduT6L43S2SBo8CEg199VQFQ9eRhTpLty7XUsBtzgvktHwCE4GGAJoHTFy2v84fzFyMAZx",
  "key35": "2qcw9sVu1UjUX6VBEfCQUJ4aNuM58fwS7ZBHGJCLZWeLaUNmwexH2sc4qABUgdqbLVHJN6DXEjea3sfLyyWAgqsR",
  "key36": "3c2y3ZAFQXm4dF2cR8zTgGpA9QZWqyrQDLW18Fx5n3Pmhykmf5EevvrnkFjLq23UfAY9T8p27ozg7mLZnD3aBQQW",
  "key37": "2iLCt9L1ZUAHJ8nueXohF53WEmcvmZt7s2uNdAoRE26UBGF2ZrUFoHYmG75H6VnWHTHwZQwAfR9X2XCqmnhvRxGM",
  "key38": "2B9jz8GcSYUNLXvM24pGKZmNB8BSgvNYWq9Y9LgoKrVKVdn4AaWAbsr5NS8RqdgJrL7nNW6Rjz5XCcy5ky3onbbF",
  "key39": "38v86HdaovJ1FyNUnTbHB5cKmwAYrj5JugiyCD1ueUKvgkV9UFynkiB2xWSGSfg9f7dcSDhRo5PLQinapsSB3bYb",
  "key40": "3KFmccQ4d393Je8BAWsfQNX1wuv2THhLqfmsuvRbvbP2GE2MfTfCqaXbfjXza6DUxiDR5jDE26XajetkS1Mgeq93",
  "key41": "BBZjzDxLXVJBMRzE3iZeQ4NQEYwjsvHefLVvqVVLaD7BHdJYCU2N2SgQCFH4qrurgdx8CkrKM2Yw8Ss2NYgx5su",
  "key42": "3KSWXBg7tih3NFGcqKX82KBPLM2vkLaE3PEfi67CPsrFyqcKVDkwf6JYVomTNe7xutuALyaySkH2CEPdJ9fs2GLP",
  "key43": "PcRCdwcSDZLrxqSAZM8asLQXX1DBZFuaGPgjrdSKxzwntpRNFUJkUAAqkGSfV9fCitMMGFAs4nGuZd7XcpYvVEg"
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
