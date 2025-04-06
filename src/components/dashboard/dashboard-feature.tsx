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
    "uh1HgZCozpPcrVdYbpoLjsGUuAMHK2bX9ojT5wbefBEcZAkJy3PnJ6ZCkbtXbLP98q7rau49PoeEdk1UUcR11Eh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d5wYQhpUJXahaiZgNiLD4v4ny5DSE5KV6BLKD57JTD55Z2U1pR5Y1Hmb5CythmDFJJaQrKWPd3wALGsjnnaswrY",
  "key1": "2W9BnECfpCUqZbmHPRE6BhseXXgqkbrzLrjV5BTFwNn6DxbMpVihjbN3bidRahMWx5aPLucSFZacBTS9SksuZpqz",
  "key2": "2z3EQf4Qac6PaC1F36B5RbnLwCpUUKdj9exGfmGg1vfAfsehmXVf6DPvjqiJRpcHKcYJrELFfqXaG6WXdLgvBrux",
  "key3": "5MPX2ZUbyHEMED4Yzh2uxbtj2SFFz21nv33Zn7gasY1GmEU8MZYZzgBKycrKvDvmyUUJHsS5VqhExVMEFSuPqf4a",
  "key4": "43hhpvoKd8J6NvssfqTGt8kvK2517BpZBxBL1S6HsHXaBRV3nfh12T1QbWfRCrCnVG628xWDxBrdPKQya4FeVzLJ",
  "key5": "46j4Bz4Ae9wDwiKmDjPrhgNjk9XTWnWn3oHmXbFEecku3GhAS72pp2qDo8bpFdGMFV1nH8sVvmXhAgZzAv6zhvbY",
  "key6": "4x7mWRZMvj11C1wBrBVQRWHpnyFPQcVYNFXU39s6RBvMHXVKnFWuiCcjXXBkURq4WUc7GFxkgmQToq27X3nGFQbC",
  "key7": "8fxC3i2WbG6kQ6W4bhiJ21eXwvawcij39w8N4dmKW5fumR6JcN369WGtZRjWZhQqZuHS4LvjgCndKGEqUi6LYBb",
  "key8": "qchJw3cAEcZMw483E8FdLZnTJCrMN1uYUFBQ29N997DQPGRdrJmHkMCtvRgCBWneqpqJgLsuuXgfRQp691vaPee",
  "key9": "39Zs6vZicfz8KrAZDRVmTZp2KhjibNxNd14ekzer7h3SbnE86x8ALzzoCBQs8otviMJPWygtaNSVe6oz2cQab6fe",
  "key10": "4skhpZbM1v5nmdnhm7e6tL4RJWVE6t9qhp1xPK5d5fX45qQZREpyzXSmiH44gJivPLKZLpNBHqSqwZCCXisb1UZm",
  "key11": "5EpeRqXK2PcMmWb7AbwBdAWzrFtVw2tpto2pTJe55dkPXMoaKKjN9SvSLG36g2ahkYhcVnByUNhi7tTRJP4bCmPq",
  "key12": "4oTvyWJmhagPaRKGPGNqCsD4pN55hQtqtWzii6uiYg2opVUhKMxMRLZrC9CbnyBZx4xPabvoSNgdQoLUsSFATdiP",
  "key13": "3tDJmyQ2HWFXmeHmSGFEsZQWhdmnvSBcKzu1TVt9awP8qT22w5Amdbt3UxHSVCE1KVvNtytKXqZ2eoE4k1zDN6j8",
  "key14": "jbKsRf2aPYfKimzUQKtVkfnokzN3EYD8ivtWgk43wtS6BTbW2t31fjqYUJ47rG2Kr5vurX52WB4QTFkkBMA1Mi1",
  "key15": "4itRZjWP44vz3izb5s958ZkYja7inhVhFctKj64PAy8sTkHJFtdUX9wBKSwGKJcqZr3LcD5EKLZAXaAho5PZiVLT",
  "key16": "3fhRyTzEYWW3n1vuZwUBAdX4C8C49xSBirUtVbUqvrpoSahoizxwjyLAXtYSXG67D1vydPdEKRi1bCk8FB4FsUEA",
  "key17": "2KVnsJUmZwFT2DDt6JhQfq4aPZ8vLGVKw4J3g5YKn5RjDJvwec2ir26D9LdRwPs3p3fd7TeEMwD1zEcvA6LF33CW",
  "key18": "ziynJSGVxBoHh6tNie4tze4TUcjL7jEttXaeK4H97TiB175SSyR32b5yJ132qCM2oPqPf9kG29pkYPncJPWScsp",
  "key19": "22KTWwV7FFcNFECkmB5SPzVsabVZ54DtyGTMJbsLRJcNW5VuKwRc6LdZGe3KBUc5sjUnPzGxt848rdmzV4UKrU6d",
  "key20": "39sfAKfwAyVdLAeVurGwNRAdmGHbHTALqa924cqF8Zecaz6dR2G58J13JcqvZbUSjgjjWQMupv3PdNTgkKL6jcjD",
  "key21": "3A2taRi5kzx3gWWxbvUBWe7yUgmNVpgBJR3X8W8EvUNvZSfQyuTvuYCPbneXsseJBtdeatAv4YmsDTWUJxw6TDTr",
  "key22": "58H8cgaJoKVddQhni9Pt8r2X2FZ67qFjPzercsKsnY2KZaFgS5BsXHfYoWwGft9a7qQTXGNd4tXiSyHu2BUjAcRn",
  "key23": "hJ7ndpsxs6R9nghE42R2Wh8sYcLjzRDRSPXSNmqazLj3WKW2tk62kkejtngEUsVm3vKnLRGHybsPty8EaLjLtqm",
  "key24": "2idamV6ZDRe6r6VHPD37FC8a6tqrV1hvJisJk4zyTaP9SkUUkEKuZtFRMF9fFSmnohEGEXDHLmYFq9nzGjbbGi2H",
  "key25": "5oSSD5gffwpsmQeufk8SazZBfj9yeV7WRtpJhJKuM12yqbD9HYxGZYX9EeWCcRm2XkS1WLrqyBMtf9xjyuX9Ts2R",
  "key26": "y2wgRZEWLuGFgazrWLDiH9JRPjqkYTqAtJDQfjkaKpoVAyr8JPVpxj5BJacqv6HcUN115VKBSx2RkWHhSgy1GLg",
  "key27": "238WjGtoqWNHzFWJNeEy4jssuCkFWJyHCRA4HLRSw9XbK4sBBZWv21t3cXPKgjcLxwVFZXG5aJcU2jUDDca3XEaT",
  "key28": "4fw8GzTaNm7Pd6k8vM3GwuNJTC65aJSVeNLb4LSLub63PQbYS6KuF87XtWjVixFKkr7UviibM7pdDguFboiAcPcC",
  "key29": "63FkN2vJnUUFjtXpFPstinqcgN9Gr3fJD3CYNuFYfuy7z5byQa7jXdrF7Yneyj5ZZknsnEWTK6rxEDTN1WjuRtqi",
  "key30": "5iEgF9b4tj2wRjXcwZpC22zr6JboECSPZSSKTUbrrjdUhhCU7Dd1khr9wZqS3hjuck2QdJZfnm5ffRvtRmgdsdio",
  "key31": "51n6wfcz9p911ShRxjYLHDoNhnSKKJbr87zBG6KUBNTYBzbunVRtmYGjvo41Ged7DdW2FCGDcp3bY4u8w3fTPjx6",
  "key32": "59wcAQE36tvFgSHXV8GgSZYNN1LXDuVybULhDfjuj9NQQ3V91QZv1L5KTWDfxioReEpwwGHVGP1f2YnqAUZd1v1P",
  "key33": "5iUwXa2X4HqcXnPtgCiGEn3c9iKFnKK75F4GckK5r5RaV7WnZNjQyCYLjdKxMyS2voMQjyt6yF5xg9xFv8LKQVgE",
  "key34": "TuejpvzpbKxX9K2q2TZwqpEDCxJPEUbQ9E7HSBNUS3z4WZhfxs9bUUhT6qJZRnwqG7D822pghLAFETK4XvyguyV",
  "key35": "wF4vEiZvkDWG8zJp82rjVnBjhAAxPfvhBZMM6FfNoa47bLrcGLriTxn9jTFYQhG5Dq53joDra3mCPedEU5ZuFTf",
  "key36": "6FoFmUpNNoqFMAKA3SnfW3DdX4QQheck7Skc3kzrNUS214LyydQ5rMPT3w5i2Wfn5peu8E2ZAnwa5EfqhXskHFG",
  "key37": "2dSCteXqzG5w78M51WGqkXE4pXDPVgtwLtFGCUUwfGV9AAKeNjii3VVmhoASDdLr8hif9MtaM1yfYDtt7ks8zd2",
  "key38": "tgBDW3crf6atLnyLXsRLfcUJuKnpS8c8fvdjZL79zHwzEB5Te5FccFkYx4kMbWVPU8bcHv2r9DuSxFJ2RrYdujm",
  "key39": "2NF7GLeCtjcrh5n1qybEvF15TGLkWb1JMy9uQNaGnTaoiRgeXtk6bAeHUd1bq7aC3fRWMsNyKP4wqSVjx68eBxJL",
  "key40": "2azRxNeYHDLDi3f3mCpUn5Q6Euoe8uRvudKpdySGbcrXh2dUk4h9QXUSEKUynwHtuar6upk26tXZwKzzmr2Yvz43",
  "key41": "3zZyg7UqpgF7ExqxDDMkgS2r89fNzPSw6iNcBzmfWtf9JnFB57eECbamaYBAgfhoAFtbdi7jooEGPgVJRBFA2ELp",
  "key42": "38qRxsvAUfyy29SM9j4AXK1RTyBjVnL8ydRiq6YaSeyRkQZ7UoCSrTanZ4pS7nhcC7LMfbeucm9y82BTB2m83oDZ",
  "key43": "3pp7oLq24dKugE8T7BWJebRNitGr5MSxT34GJ46u8SgwJs3zHJjvxzWWgTPgWeWkR3dcdwsMhiqHmQHi1KmCALgR"
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
