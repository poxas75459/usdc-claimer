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
    "3RS2P91UyXY9tCKYfPvbpQS5SPZicEgjo5XCs7FmajKH5M7CWN5oPJ29dZ9wh7W6FpRLF8m9BTw2CVuubhUukGt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mMDGF98Wfvf7zjCeZiujYz5v87ZvNLSxbYLcA8NaN9n96xxNf1GhD7MmdEVsHkpgHrNnCrrqtEsNgrRNGMNYyj6",
  "key1": "4JVBQ9jxpJmA5xh3MqZTCXKubkEJcn3bB5pGPWCHw5SqeZczipDWHdexH4zejZpMyhHhkYwpa6mLrHbJKssAT9RX",
  "key2": "zvRQYVQzkHEKriW6X5h55UQHsH9nASHv9S434L4stE2xirHmD3eHba8eH5TkwUcNASuHSYnwo4bqXtL3EvZGe1w",
  "key3": "5Lhur6GWv6yoLmSbWc2iNikfjT4GZgMBJLztBqtkmkaxukK6ErmxX3JNt2QRM5zzAiVixJd7WVaBry9VBVnSQuNS",
  "key4": "23AAx1uqeSqS49DxVyQ6bcmPduQW8G6vgHng3X6gy3dMw3XZnRnMHppME9omP5MnsEhHx7rM7XRRtkGC7C2JeGzT",
  "key5": "4meZn7oQtCy1PGBCyLvQmAxQ3kDzkbnPKjRZzmnSVjUutxLxSx8V1w442DSXMVqLhz6sz94KRYAaupx6tU599syf",
  "key6": "2FyY572PUgjFMp8Dax3cBQXxd7v1e68zvPhypDTPgCNnoqCooZXr8KK3JfpnMeEPnQ9SHuYTSq3QywY8PLjLPf6F",
  "key7": "4YrJhwJLMbgB268nB8gWJ61L7zGLNufQtRCXHxdT2GzYDi5F5khDp6TFz8k3j9emWWTktkf3RYqp9xwQjrTeMw5K",
  "key8": "2M2oJcYL5eH75KLvVH4pyQWpT9tAt2CcVNAGAXNafYQ2Rsd97DDzsPL2rLKazZwEJUJ3KbKRCtRhURDB39b3hPtg",
  "key9": "3AMk5Spw59WmX4pbuGZVWwfyfjY7mNt8vwvfv4LpqgAX48FKcDNtAAaAqCFmv5DdoBJgpUt2pQi8QNHwzTviEVfP",
  "key10": "5aGB93MUoUGGLxhGGywoCqRcVMo44rVyyeFckDE43SNzT48gua1ZnKGWdsWoLCt2Wwm9tt6RT13MYd1gMkttEkyg",
  "key11": "sWgQ6qcD6zhECoh9XPJunGfQ3M1hcapjmKWx5ZqfyAijvCg2yH8RD2Gp42BMNAh3jx4P3sQnG7K9LZ2Stem5QXZ",
  "key12": "5Dv14JeHPYbXkCu312yvSHuX8cLfGRmdqtoocw4okoCVEVdB4nR7VAgVZdNn6Czwf7KsK6X7Sb9xZ967DJptg16s",
  "key13": "3TYiaU3A2LQT8vXws1YiuuaXoXLWdvHAzQmhitCMLade8n1QKBU2WXZLfbZxmz2PsibZBQefNcgYpBTbxcUys2HC",
  "key14": "dpMpspjWcHD8rdvJjkxsaNFwhY2Kyxy22uDofthJdK1KCw5iNceCNoc1gWimbqPg4VdBzhtK7dZvEA5WW58Xjsq",
  "key15": "3UodhUENks8tzL1CdjcVenn5xSKSWaKJz91YSDTfr5NsXucMVWAH1GwB9bboNUyc7ffiDTFhVBjtETAa2oZhE5UU",
  "key16": "5rBqj57ggmMGwokcjvxvJPxk988eGkH6c5fnKtmER3ctELh5vDCkjfPVYYzqkwWi5XWM7PqoB5oZ1L4FDEEUoRD5",
  "key17": "SVK94Nj4GW5Qc3YrZZ4Qwdg5P5UatbGFwpx8wHPihFxbHc4qnPtusJb94QRmfan6G1JebrpGorwDrhYhNX8XVRU",
  "key18": "21S4njjg4gmhxnoqCcEfEKYtj1PThsJNkuA4opWtdgb3hkmzFfJ5ka6mjRPLNWSqxb4aXTmZjfGfbNPKc2qhEHzj",
  "key19": "3d23dM8z4vh3f1KpHvETSKBuZWLoUm3XkzJT6XEzFUFjutLbf7AJbZQYJWt8e6mJZZrPUaYMapta5CQfbr6fW7D4",
  "key20": "4sWpEC1PfYSHg37UBN8m4gTCcT1eytGcEZVbu5z3BrjSMtUdmNraBkPRwnHH5mFJTH4i6cyQ6M4AMWk9gDsyXidi",
  "key21": "5Bsdw2fija3pnyQzURYGJbgPvzgEiv9rM8aFjmdAtJVHCpaDVmbzg59oH8JGnLe1Q1vhdi7Bk3hksLiGUPEETe15",
  "key22": "2vARUqaoTvg8gwS97uzUzX1EgmG6PYo5YaE7vfLGwwUAfk2kbFD4LEYzLz1Dro2RU5xJonmx72p9DoTzJRX4ZxHR",
  "key23": "5nosgUqSTvNLsb9b9aj798QFo77c8X5aizwFbvcZLsXtwsakBQh2gDKWZEtvqMQ6in9bnLv5A3GQTiXgLPik8vSU",
  "key24": "2YomK1HNBvBFXVQrgby6irnTBhzjPYxEeCHjg6bNBL8bGyuYSgtybNUmYbaZM9SedNxdarkxGgLCbFgu2MAkJqG1",
  "key25": "2SkPEBVLHqDFiZRjC3ynsd6PtmToFEfHFm1fqXYf41mTKZq5J4gkqSBFXavdG5oV3Ymjk4CERc7CGpR5ccQ5F3E5",
  "key26": "61E1Wq5QqRcoRKWVWFmZe7xKgBgahSoRveH5SwsUUR7QAm1DVBP5EN6ctH4r3wwbMc1cexeJJ5KuxBekULYEo2H4",
  "key27": "2xTXWfiYD5XcBMVHVvuuFy8eHeR31msUEvPDo55Jfyi99wfHVjk2KHHPeuWLar7xszppLA1f7nLE9mHaqk6g3xrE",
  "key28": "Dh3v2HvoY2Q2ezHhRifxHpa7DvjLJHQC8RLTaxdKysxW1ycYpFGZLnmbHm9nja88pX6TU1HM7DetkrVrB7TMn67",
  "key29": "5jsT5z62bvCLnHtHWoK2Yb7DgpPX2ijtJTKfdHSwjcRi8dG3PmLe5CuSi4W41nxxaQ2LF5E6PRazjJ4GeBNfCLfK",
  "key30": "5eE7v7ttt9Ev2nvAdEzYs2pDVEYTPFznoeLUqgDbWqn4kHqizbUqdgm36oHXPP9axqcwWRz1e34FRq565PpqwFnF",
  "key31": "3dhmYvpmhvTTj6R71xuqUx1KFfgZbdJmgHQ4scPoJo3SDcthpNSHFQbetd24mDgot4ohg2zkqEkGB1BCCniSiQDR",
  "key32": "4fmdQV5WeVtrFBKYksgxURPqH6r9htrDzweu32pkPonDBSTv3PWunmTvqTF3xbCWw11HwMNX3uznL3CiGGQRoHXP",
  "key33": "2XKjJ5YQ489CgPfUYRL4n7rfMssPEh5fyA7XPVQrvSUD37N4djZyZCmYZPdcy4w3b52p2iLRJYuYB7TWK63smQVv",
  "key34": "mo6Y5nY7cgG8xSrDYC1StVmmLK2KEeswKeV3hGjniEXjovDVUuPBnUpDYs7cZCPuXUBUEjKwKE5YPBBrPrkG8K4",
  "key35": "64uA3b2BFHgLeVEvoLH6M8BCSBL9fSUxwcFkEE5FqRVEtgTA8rpACznS8CoNnuPHXfcWzxNsvLfSPyHPUXL3EN7D",
  "key36": "313GYcXUPik1ozXDS5efFnctuPH9jaTSLeJ4Kz7MR9ohb4KQF2GuLnNuqBrB5UBCf3BFJwiXMAYLen6fp68UVb53",
  "key37": "FxQSJcL1s1MtKKoqvAKd7J9MpLBYvGCTRRDLJii9CffdLMbqtRAXqDLkuHMastaLkJ5PD9v8pcS2iuMmHn1PjRY",
  "key38": "EVLCTejgseTA3mdDoZRDx4Cae1Qxa96eMRqA9UztP187VBVoER4LGfV95uN5TAM1ZDFL3iLXeeqXJmC9wE7LDYY",
  "key39": "3xYZh68VH4iMRRMV5Lg8a2WXqGxApF6Qe4SE6fKNoE8ZbqvWDpbkxRPjWufBhFeboDqccBDqYYqnzGauUGrgaoDs",
  "key40": "5oBTnKVT7gBjbEKf2vFbsPkJpnvmTouX3JpdvgdnXUg4uQN4V56f78YkM4YwW7GsY6SEZsCy1ugYZwpPc1WnTgTg"
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
