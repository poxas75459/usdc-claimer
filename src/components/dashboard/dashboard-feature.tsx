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
    "2ELbw6tMHAsigREEG1Hiai3gczqdASQ6pdoJNtjbgfc3EQa22huYtDDpUK4bs6jyK9oVzKbMNGECqPV73VsHUpXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CkLFByC2TihwpV4cSGgRwMxsWfXTPBfmnCszfyKpaVk9qVj5qufQqL6zr7ftwKepW7Lasu1KeyrAshnNh2mABGL",
  "key1": "3jr2YXs9d5htDGhTvXjEMJTGd7S6TTRMZy3ycRjFiX9f6KL4Qe2oVPVeeCPHNEVkMyDjEaBHiP79kfJpUQBt3qq2",
  "key2": "2ErWmXhRpAkQmWLum8Dvca83Rj3da844AuCAFVGjKGMv9Db6dLo4TVZNqVoy3kRDn1HLh3ff8d2uhdAQLNy4X4Pk",
  "key3": "5PxC9YBVTJrrRq8mdyANEmtuZXHaitrQpATpa2QLp8J2JfZLSAHzMKuRqoF8Ek3soSjmnQuLgAqgaLD8jYGM7wDH",
  "key4": "2b6UtFdoMGpeuAsVgaEmKZpSQyRweUjZjLPSQpHRCcj7HQJgzTWJnu2KV9dYeBGuVfQP9dPzi4edcS9hyAMuBVTE",
  "key5": "5JTNorhTu6egg8FmHytvA5dB97RRU2MVSgbBiUXyKmcMe3hbZCwBzNAKkoGdE5YXrdD1ZDED3nuc4924nrqZxrpZ",
  "key6": "2CBkB8ej9cqeRyNi3bnvZ7ixR9seCorcrZu4AVDtCWPauDqTBfffKtxp2DLJHJqTgHom5ojHsSXQVtCRro5WZ8fx",
  "key7": "q3iNWenMdJrUwgRA3rDDAfB44iPfPYRZrP8VxdKdo7SkiP6gR4HCvMJjkpJoVQzPMiAgdVDZ2ss7c9uNC3VdkDA",
  "key8": "pzafMsfHsLNrSGmxYTZ8zpRuH134893fXKDqpDJannwMRWUQSAkY8hihqXGZuwmWuDX6YkfqXS8SydwpHbNC7Lb",
  "key9": "XLNWuz8mEGacuhsn1FrwS18VyEB2WyJrraFmwnCP4Kydic5xbDBmd3z6nPVqMN8EtwVhH4dHYRnkpyV2x82hBZ3",
  "key10": "2pbWjrkDRgSyzzokYCWLLX5owA9HDLGAr5rMYU2DXTXcesoLd1FwPv4A7LYsCJg6sAs9Ani5Y8kB8rboEEiPafYz",
  "key11": "4f8LVwv8Nq7TXi5d7wRcVm1eSduE8AhzRvj3ERNJMyGMgg6u16Ss6R8qiqdBPenvNmJCPF8BGbM1zjh9sPM6i89W",
  "key12": "SVkFtBFSrHb3Ryi5hvoTowWZ8mdfzCgdLuifTzN87fatRnyYqytArbm3k92zPheCJm7egwa5veYKE659jaHgsHa",
  "key13": "3NwK8tUxuNv87gD2CJyKf2LohgTL9irCYQQeqXCNGSHbvV9YqsRDpUiB6HBWpBudAk3wWRd7g3oj23A2NYt3tgpg",
  "key14": "2je6gZbVi11Nq4PtZsBeXFfwu5TJo3jnXaLWEhPvuKVLKmwSaey3wMF3fw7GSTZQ8oi9Ge2m8RypRst3m5TCNwV5",
  "key15": "2JVxekxHkB1HBE6W2ZXEdS33iK2N2fKJDDR5bKuVq3QVZbTz3AkKZCUrotrkNB9jem2FkQ1WmKcatZ8vexJNVZmC",
  "key16": "6TZrio6HkDezUGXwDYZkLVfgXsnsgLn9MWAZRzko5GXik23EoGCQbAqGbXqu9SPEwE4otdg55q92P236SdzXLqS",
  "key17": "4hVDTJaPj6yqFA7QoEHR7ygidZnsWFMgAtxEwe57WKHquPNH1pTovVFyvs2iRnQFfV8tCb9uxymzRbxDCHEWf8VR",
  "key18": "5PknNdDGz8C1dCoXPynhDDeb9DeSjcswxpebSv1yYDTDaW2QfyeSRz4rXRnV1W4rCJ1gE718w59CuSA6feykY3pE",
  "key19": "5dp2JxCKpCS9qahsPGECvViUewrJNdkLKgBmVCvrSwFqxeCymrQPiaRDMxRpWf2qfnPsAjhfBWzAez6UD1cmMR9d",
  "key20": "4XjGScbYmfUys7PWyPBAVSqdWnf5vyie4aC7zVuL9zJHVCrU9ExXxaXMvtdXPyDhQqBaGkpUQrM4Epzw5goLaZQN",
  "key21": "4rbcmiGmFVveZc3vNRntSCJjNCHHetRHesq9gMxciPyNL6P5mvLJwQd79bjr2ZFiSZpvEDkSsHBByLPYA9CRp4rn",
  "key22": "5ek5dZoi7RBE5YabTy1xnpsCfnJc3n2TGuD6csgd2Jcnng1Ax42eT28hSFraeHhbAozXaNGGcibnQKHUkVpNPmF2",
  "key23": "4PJzwVRUY3iWBJzqQoCiuuHK42N9TpRKKSwwJTPouNcyV4UF8ZBMXdAMUhju9FwUugUsD3RW47XTQeMuqSYuVrJv",
  "key24": "22VjZaRC39noePXCvKVdvsrPhMMXQU8SZNgDZ3HWfJG3AwmDDU5dPbYYEtN7xLMWEgkrB7KKXKDgJX781Fe1kuU2",
  "key25": "3JD3AfwW5QKHh399Zwt44SAqtrHSdbo7z9BVnczaYs9B3jEK74aXY9uhdkKACA7dE32d7pAKqugDd7RNWmUggqAN",
  "key26": "46GVcX1bU2bv3B7mQ4fNqjitC4zVAwWdWWQyWoEzX2SJyXU9GK5Y7LqfWq8gTku7AqdEUopnxCnewVDPrz5LrWdE",
  "key27": "2jjRbvgRkiuTRJKxV9pzg8sepjH5mzqgpSjnVNd6ZCRhz8TL9SZk5oqHYTASw8rSPhtYndKmY2FpA1jDBtpQFGmK",
  "key28": "3w6yaa6GY483xXmGFvt6SVRzBBrd8eai4QzF7C8dymfq8SakFrfEUTMqtLLmvyostXcdnbn3rvJ2QtviFmSc73VL",
  "key29": "2kxMK9aZBrpqGkhaF9aWCHAMM3tDeDs1AAdYayC2zCsQeWkUuHnnTxsoGErfzCMgY8zBzcPFeVESzANHDrgdDGte"
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
