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
    "63yngsA9Bqh85WT7NTuR6ssyAPnQMims1dxVt5pqtzFJQBTCaVCqpN3YmZq9sKqCdRGKoEBEagcKfUCnQm4NFXAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56QCvd3CnEGiRsCZByVQa3vEJijtjNZv3G2mAu1kq3WFAM6hZyctthgWJJPwRDwBrSwzHAPsqRYgRjz1M1bssWcw",
  "key1": "buKxnA4d8Kz5wE2BVxsc4KPXfpAD4rt8Z2TKJ3rWXDW8SBarYBKTzYd7FgXuxhnySJmXLxWqsoLWyT74jyd1SM5",
  "key2": "u8xuQmYHrjLZE9M89meqE5c8hEWUVxnatoekmjtgLKwJB9V35hxu1xZr8VwUegud62cQDjue5nHYq4xCLxCSdj3",
  "key3": "5XEjMMNq7QLabNuTfaB36MLTZL9rjRyfCKVytUXyFVhc8CX5VbRmYa6WwtQF1jtcjUMguMpYcaFXjGHdYy4WdZeK",
  "key4": "5K3KVMGgiJ3rSAy7wdkoo3aHrycBNgsMh171wxBXqbxH76qFC47NuXjPsid6FgZZFSNSd5Jdaza7tc8iGVZpMQM8",
  "key5": "3rmZFtcih2zty4wPgyig88Vb3xYA6bYuHjh1zPSHFotqE7sHAskdZM9vGrcJQm8ys8uHe6h9VEsUod9DbyVJEaqX",
  "key6": "543JKBdwCJBj3vHiaQUaSREjqYFBCGLrsmCxR4hrmbD8egZ4rip2m44oP2XYfBgZHVSXo5RHWFkUrFFsoh8UiPkL",
  "key7": "4iHxJUPLkuF49AF3ZP7wZqvsavgJabf8VvheSqPvqi4VznD2mHDPnz5HAphkdTiLuAkTD4ZA6vgiKNeA3HhJujKs",
  "key8": "4xDbknMNPXKJZaeJAX3V5a1CauZwr2oUHdn1RXCiidce68LgwNreDezNtECk2oJxjGuYA4VmEbgbc5L89YSPNZQa",
  "key9": "47MbPyMSLGbsPnhEZQCHV44vKoraKZj4s47EvZZmUDHQZe6b9PkhiVx9CbSaDcc24UEZm69vpfxKcTSU6vMKJnHL",
  "key10": "27PQeWFTAGX3xPK5w4qC7JgSLJ9WrKhQ1VPAB6VBomcJuRrx14G7NBrZ1PJG8PzSp2khqueEDsYoYrRMPb1PfRPX",
  "key11": "m3Q5GaDeok5roun6RZpKg7r76L4N9DhkSAz5iu8H28eoNhhwXFvPPsNHq1whmZ933gQ2zdekLsjhd6CQb8vtdnn",
  "key12": "4HnahiHiqjEkLcfXNwaW667TeuCuUAgqV4gY52He833kRpHNpYRoqxgXyPcs8K6G9R9hiVjuFShWaZkPbm5zkTFY",
  "key13": "3bjizuGLctafgUvgvos9Eu1cU3W5Sn5eFCysaDFTeh97u5USWRDmc3GCfTzTC8f3sUJnbkhFf4BEFwxtK9qt638m",
  "key14": "4SyKgBgjsVC6WaAuPTLeDGhgPoToSQaFg4UuCmV4o9FGvTc49yVf1YANjf7jR6VLsf45cskUEnvkBw2daJSqhx48",
  "key15": "67RHvCWSUrHhDX3YfZJASXT67kmfyLE5fEJqozHMfBsJ13TyxdPLCz2Y84dn1dZPBMPyDWjytfc564QrfnV5EHDq",
  "key16": "58GFHL4MDUwqdVereK2B4LEXFuVwdFicpVs9H3fN2kDgRBzvWX8dSE5bkrY8cAsXgc1yHrPrdHfegbMVuDmMdkuN",
  "key17": "5L39xMUkkceV5RWWxWqVXrMnQatfos4KrGSAKTysQnJFNPio13HFuAo5nZ4ycx63uQbQvFNM8T5LA9aYiZcuTbpL",
  "key18": "wDoQ19JER5GZ1DYNhVWXfrgFNVV72TakVpRS2YMg4rWsj2KXzcXdveQ2mrJ9vkgKE5jnqt5V84gq5rbXPq6hytx",
  "key19": "3eARHf9zW54C5jVtqatEBFM6pL2igJ4w9vLwbVRyhbFUiHgP7NKMmyum8xuGTGM7Mf1ffSzwGdFsQXYx4uMwK41n",
  "key20": "54c4view3sC6r49QgXeykiTaSi9rTi36TWJGoHJdpD7Wsr4wdJXdrBshX6TPYrkQ4VbExRNz4Lqg1w1fCwiLjUGM",
  "key21": "5HWTCQ6v9BcjynAtUzAqeZTpv8oXg7nHQLFauWMQuJ4Q1ACYbhjiRM1jfSEfH9y4NTuquEXanNaJy7zZEQK9HxKg",
  "key22": "3HN8E9YEc6nWk5QiCXWuAbB8uDTLbsXqkY2GcVa2cdnkCznNCYBz3cp5agnZ3WBitE9727cdG8PJCBzfiqrrfsMP",
  "key23": "2BZ33CyvNYtk7uP968uxWhMbZneF1Dt2DrgjK2c9yssjZgYFFszHJYthKAN3hDu8Rv5GfXqxUZzUPb8kNVWXZmiz",
  "key24": "3hz9dxZkgKF7Y7uRWJGysmKgcxL7d7Uc4PFt3QWRrT3AENPUZ2yZMUVt2CAW3gY24YTnvnPDvEJMwEzgqrdhvYgu",
  "key25": "3goDw7WNKTCvyACJpTuRiovya4MTtmQ8mq64Fg87HrgEJMMnAAsDyVGs5Dq6H2kvT8TEz9viaw2YbfhC9GMijda6",
  "key26": "BHCvo4sq7c3xhEwnAPD8gGVUQBA8gXt6kNURaQJ5LBcRz55Ch1DdM8WL7Lw3qmVdWidqJASifo488EZN2uvRhtd",
  "key27": "65igNXNHWXbESevDekgL1WAR7tPHRfAh5Kc29CRjnTbco7aZwmmz8XGx3xQ7eXjL3sNSLCHEsyh8qA7zRoBjWyTC",
  "key28": "5Dtye5WQoMhbY25CiCy1QHFtkshFQDEDLys1BZuq3qjtRj3YqxcPJXmX4t246FkWNMAy6rGhdP6ToSGmPkohMR1D",
  "key29": "5Voou4iqaEme6M29GKmSejekuT3C148wvVY1vppTGzhGPN1cphbtd9dyJN8uRJZ9dD9GZUCgVDoQZoxWCTf35NPh",
  "key30": "3vzVMGwKgQJ9Wd5wXvtBFzhE96RXVMXXbHUSmNdj96Q9SqsFocMQ9EFZezuhrXKyvJ7NaZmmys1EcH1HjZSwt7WP"
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
