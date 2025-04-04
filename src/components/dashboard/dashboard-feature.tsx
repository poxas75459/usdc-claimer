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
    "43xTNLghTaWAuYHCXwd6z5mFQwLKfQ52ARea8krYgMrWo7eKp9srNhFHUtZeh2WBv1KBgCZUeDGP1oGyJQY2jL7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KPUBwgmXVZraaVi67WeFdSo9TVchqmwLDyFQRfJsm8HxYh5uMYfn2mNxHN6uRndLCKef1Rm8zSEqFfCALqdPTX5",
  "key1": "5Guqb2W1T3vmUqYpxS4BERjkDZkwQBT2nKTrrA15svv5muEGWm37vmevQbVGibwTHpnw84GJLDQ3pfMn2ECWGFfq",
  "key2": "36Nc127u66dt8UzjDSyZBDgDWmgCiEMH4qVAqof9ufR7LhnXQVnVfMZFhLmYUTn2krUKYe5rzcEpb2pNvFXime4b",
  "key3": "3wJrwmiJEU3vtk6VpwkZANoaKjBm7HfsxZ8b7HvmjmFtygidk8vyEnCRuXzfj3Z82ThDH47RXZQhv9KbwtnAgxPP",
  "key4": "ee2NEg7o1H7xZ9xtyEHAR7Bz3eLU4Cp2FfM7Kv4jaCqdpoHidoqwHFQ6VnMyrkmi7xk8UENPmPFUtJ5FsWQZDJV",
  "key5": "3dXrspyUdECFknwe5AhFVeFPohhyaE6PVShbijV4aYXq6jGYfbP17JhKpq88a6yPeJKeJmGpgVuYtWAevggCUHmP",
  "key6": "5y51jmsDUrnNsdakNMSzKCyjQJhCcreZYzJorKHs56zaDJU8LWAyHwrd1AxfDKR5mm3PAzodiwnoNWJnxu9qCWUD",
  "key7": "4YrFLxdHDjvY5uUtVY4bppsAVmaSyQWaJofzcRAEJ2LKHQH8SytTUCAKmHb9UW5aorU6RUE7xMvHsMRxSww8Zwa8",
  "key8": "sVTdcnk7XCWLdkmZsaYdkQunxEKHqq5eWXzjyJ1piws5sB44Z4EesNiUM3HspQvGAs5WhPZB8r4ooqxV2uym2Hu",
  "key9": "62Fj2aHhGgYC57t28PEmzVbbmCMa37RrdzNEaspNaFc5x9SEf5rgM4229XG3pdTR4BKsiTn5aubUAJQuvCkNs9ua",
  "key10": "5xHvnqXpkMa2syGYwtuKhJTR25tfpvujELJ1353Yqvud1YornFrBFgy4fAGSrRHX4UomPMwUj6CeUzr9ku6BgzNk",
  "key11": "A6pmjVM4GkhGjPN3sY49jWMdhTBP9gTELCbWNTsfcdBAPApWjaiUjv59Bq5JhoBP6gYWBC8Yni7zubRAbEAFce1",
  "key12": "76FGYGwBs3qMWduVnHY9zjDqKsLpdvub7sxBM7VynxCaaj6yPk1k3Tmmb4rSriXmLTf9fDCpYEAtZcMYApwoWVZ",
  "key13": "jiPkbvnJ5ZQFik7rKV5Xhmh8kXz38BhCr1GXRXDQR7XDXDpPyWqDTa16gkt7t6u5vdJh3HVTDcWz9kZJB2Pv8Qq",
  "key14": "rnkUkHTccyRcQnKgDkSRNCadbxUQaijggZxvw3xJLg5h9ZhTgD2FfnWrRAYp4KjE3aXFu39ALgGzK6paVkR2x9M",
  "key15": "2MPM9jEs1WjWPqZhXxmBVuzCU7Px7tKibkRo11ZAzjhDSdaQHiXhzQJ22WPawjoP1YruaKuYtjPfeYPba5SyzSZd",
  "key16": "4C4En1EwcP7HcVfyiTk5Hj43iVv3My1Ficuh32BhDJLG9jPYvRkmZhCapT3Ldk7Gjd95Ldn4GPk52UDyZKwfqfeb",
  "key17": "3MW89rE9ferbfxzPKygpYDoBhano3w1MsG7JZfNiANnQnsjQ5Yciei4e6yT8aPZxZgm3muPDHcQaBjumJPBmATGm",
  "key18": "5r6j8X9TRb4ShWZMDRoW7yVwdddJgjB9GoquFUwU8L9FD5ekQNj2PZLPKYwAd3ERd8AHdgxhgwYgYZ8uqPq6XUgd",
  "key19": "4cM3NP8X2MwTQEshyBobzyGrpwkJL7qAG34HnscZNFwcrQFPVLiQmkUSzB1GEkN1wabvdHx8GMjxJkYYLwKPTtnE",
  "key20": "7dfmANuNxTM1zMs9Rf9snyvcDQoBzc4u3YQzWVX1wynKZtmsjGAJs9SuXv5fv6aPvau67u76J37ti9bQ3vxecd1",
  "key21": "2mvPSeB1ZBVRAM4ggdMKfKy5iwn9tHg8dtX4BxbGfMiP19WiCtds8bpYM1uf8i28HaNmgcSLtBbYTdr3M2JJ26Hd",
  "key22": "5jfYADEKAtpbngrT3mj7s6e5TKauUs43z38RpPJZjTXFFZoNYN13323GGwFL49j7tA8PhVNMM9ZFHEh6wrSNdrDD",
  "key23": "eTvaM6ivpyCPPiZRgkV4NwDVf5U8yGRkBPnQLxGkLToyu7AXmgNc6NypSouZiSC1DyNt8zRDfxU4St1YEd26bUk",
  "key24": "5KGeMf7QyBmUnMAy4TNR4BygFwdxcAxidiS4QpskKy62rK41j1erXsQc1XD9R9XqRf4jXyh2CviuoWd3A4M8WmUg",
  "key25": "45HQuWZB3WL2gSTNvddmpjEcmC57m5vmbKubLkfteHqC6j5XgHiC3B9ymwnT3J1sttgysZdKPnqyfPTccWeUv2AS",
  "key26": "2TnbLzrAVxDNm6n5gRg56EszGjR2vXgjM7BCzTU6VVoqg72JthKeeoNddDBGTm9eqrUcePgHPgH85YHzAFtQVNWY"
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
