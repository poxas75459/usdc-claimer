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
    "4xievWKH1kAKrV5vEZjz3YqmNDS83fqVAVFu4qMRiCKWMKZ8Wzzs6teU9wdgwqcHtNHEMGzrcaroUKnFwb7dhR5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PDPPbP4bydnCteJDaECLgTejktoSP1kHKr8FUyMu2YQ9XA9MMyeDt7armnYUA35gbrpeM42a6rSqKCUvuJccSgs",
  "key1": "4yXYE5wqZgduydpkGG2G7DMUGTNAjnSYRkZEU2bo8F2S5JPHyVRNPGdxfVzL3LKNifbx39Lh32nqiVLjZyqRw9td",
  "key2": "HTrk9cG2HhsibFpc2mkGyGNTztEi6V2hxZymtYbumrwtkmBeMSHYRN3ejoTZrRNTcUgFKnEE35NWJBF6iZDbYRT",
  "key3": "25tNpg5FXQCi3ZuqKLeGFXnz4Z6kRoVc5SmWERuBdaJBa2QGodvQ755KdVkLaTshMrC5MDUAAVjv79hQW5kHoAkM",
  "key4": "2omuUY55ZiGHJPVgy6V7KSn9d2kcS5ouX2EWPXawWTM1rPeyEd1A7oUNuVsj6urvmu9ryFEfUADMB7uHD9xEF8WP",
  "key5": "3Jbm6CR5jpADoj6mHcTmZKPPEaC4Spa9F8JNGSjbHHFZeYf8ewzrniUGCJTwvvcbejX86hbxfusptegVn8G6jFX5",
  "key6": "5AAaYQLyp3LknpfxZuiMD71vkonT5zsBiwLyKpeDTzuneHJ3nKp84tfnDc1wAfz4UZERseC7VThEx5yRiuwcMjtD",
  "key7": "5xQrXzkodAdkCYVKh9rTmdz57btaq9rUWhrVpLQ8ezeSshxfUGVDVPhkDkY4ur2HeoQHGS57XDzzxRDKVruDmkvp",
  "key8": "2yaHoLTQ5bUYKoX5xXyNhnEiSAugcC2qCgxxSJSmcjCfiHDRno9qngpGxPWcrRpXBV4XdCMFz5WUtzXcJgrMLMbZ",
  "key9": "4sMfpx3K7BjJXD7W3X8m8HG9AQTjeM8AYr4aXgyX45GbPTBB2QdjeCjXDpW16CELz1dPj8P475pJZucS71AH48a8",
  "key10": "D6Tjed1K3w2LJZd22WXyMQvZuVBVjPyL8QTZvdT1kf7UZ9RBApvxFw19sbChck9x4bmZNptDMhGAcG4rNTnmdsm",
  "key11": "2hoR75KUg6bMvmZafkMescd9H4aZnR7GQdB1xcxZ6vV1uoCrfruxXeuo6XskdeFi22WaWWbzwfQPRizKMXbZeaam",
  "key12": "3axhZTVKtyYt4rGknk9r3sfdv8vfFvcRNcNYdEUbHq91JdCwJGT2a2Tt6yNCnUQAEzJisYRMMN9vuNVUFPR5s9Zx",
  "key13": "2Tfu2oypUtM22Lrg3zfgG3ytAFZoLBRuPuFkEqdictG8Fz7Kd7y4Q69dBN8MYAcgaDgHXnDp5soM3A3qisxrWrcw",
  "key14": "4baSrnrmaMm7npjc5dcw2UjpBAAQB7KeNjau9B1T9hS1HRKrQ3mXQqwh7mPhP5p2cgrT7ZhZ294raMSW3vXh7vyP",
  "key15": "496U4icumpZ8S9L2ejmrPzfGf51hJ2tFD67t3zokWFDS5nisByCkZvDUr9KsQBqArv2oT24BGBAE7DbzpHchyLEt",
  "key16": "3TLbfVRs4ietJuZPyFcyAoVxZDcYiCcvcZ7RVBYzC9xhfwajXyKzG3ByyEyphu5Yt57WzMhtcAjFc5kwAPmo8MkT",
  "key17": "Tp8asJL7tcK3qS3EQ8jPxeNRFAbte3G8hAo2G8m51r1WZGNEbgtvY3gVxLCGDoLE8RxB43EqJBcUkCbw8wHpZz7",
  "key18": "2nWqF3CSVB7eMiczsi9j5336oyB4mJtUcMseCdP8QWrEDsTDuqch5qVofSFqfSHuDkUZD57jA6H4vPJKxRffVbgb",
  "key19": "3vGc7NWENNVkVNxtpZZ1jGiQG9J4ASQfTomMGhH8A6ZspWhpv1HJPw8YBstZbhbAbntT11dWunxDDx3drSA1LGT9",
  "key20": "5rMZ5Jaf8J6bt6Zgt4w3UFrKm62nxNFtpmcAxez5jRY7esHtSdoYerehe2unwviUcu58t6giuav633E6KLQZLCf9",
  "key21": "5Y3atthHAGpxaqo2ooMKN8c9sLZ3TLWshi8u8rnUXHvuEX8ARyQHpab4VrMb3punrZYjtjrPR4m1DGeyPrUCEep2",
  "key22": "pRj4kczx7wrNMbsPRKnbkE6jrQ6w11cw5zqXuuWFXKNakZSnJRmSYzNGinUu6QQxvKSwWbTCsBJQgwWkAEJtKNz",
  "key23": "5tq9kHzzYu9NSw1rY8x1UswtZ9WcCvrGnhKjnxgFYr2JGawzSwLGr2cqy3KHJyajJe2HufpFQpZtJd1sYq4cvHZr",
  "key24": "2nXEaeVtg5yBwVagYU1wXoBDUpWpx27RCyJMF5KR2zta9tQsHYREYeGAMsRPyP15gKmD8QRUST98et5g7ZWZRMBe",
  "key25": "2jrnkmoRMGJVEsW3isHUs7soxYosp91ij2mmvuoT7WBHsseqABBN1NfGsk6Bi3DqKmFkbsdiAwRtArjdefdJo5Uf",
  "key26": "ADeHUbbG4jdtdbLE5ahKJCwkjW2uyoTg18vBKodVwxyEimy9zujMKpZLDaGZAKY2mavseptTWXFE3SXJqRkMfUQ",
  "key27": "3aki8g2q1UW8BLEhnsr3fweEE5pxD455v72zRsVfmjRrX2nhPnjYy7C82rfywQAPwyXLTd7VgcDe9XzVAEc3q2ju",
  "key28": "5hmN2o6vdsu6vZ6PeBzsecNMaogV6DfdFzLRmra3y8yWENu9bhiCb3FSDgZjWDNRYVZkZ67hDrnM8J35y3vdPG9e",
  "key29": "2mD1yGMpSHoEqVzWxHrbbBEVjg9EPofAn9dTLVdrRyRghcGFbiGbPnbRiF7xuT29RXDNX5fMHUJ7MUQYtrT6zQoD",
  "key30": "4J3D9sQP728ZkRXTp5CMZMQdEzKt9v9mF57w25oze7tniFEHtCDxdssqxc7GxUd7eMJgSBYJriuq6KNmCRqi1Pt2",
  "key31": "UTYnJYqNJ1jWniHTR5qCGxd4xXdSjE3Ahq8Eb1ZHQgvRkuqstyV14dv36fANchxuGCfCtMWyCNhqx2DaLV7von1",
  "key32": "3ic8JRjh7GAGZ1NrVHeFYeMhynQ8hZQ4Y2u9RhutMwm8ddSqpP5uVyZYcKhZVuZ8tcy8jpD8dZFkBxTgLKn783VX",
  "key33": "5ggBDqtDD3uqR2gV8PxBzdWvARibTr97XZGhGvPhyQJoSnYXQkQKQkbJxKmxLuKeXjHZHQDMzWd16t7zjEtzXdjg",
  "key34": "2fUwUz5gvCEcuURWVMCWzqhV5p31MtYufi5FoAB6DJYj5ijDBDTTecbKuTpp4JcndaRRCyGNTP5RCHFuR2nKZXVQ",
  "key35": "3arBHBDwP9mHAdV5LF2CdYss1oX5SAwQ8m9o2PDHizBFKbydbnPBdEtKMEk7q4QsiuzoiCLkmycaPa2RP9n1ERbR",
  "key36": "2LJqK2FU7LPyE8bvowrFrA2187E1MfkCozMVeVXvZytS1kr9BBhE4Y6F7ZvpJVSnPw8C97bDrPBci1X6YQZh1sQu",
  "key37": "HZZfVRG5Lvn9tC3zeTgpMeuMd6Fa5X6q8Z5skK4qFZ4KaSvuskhBoRkLeaz99FZZQhq4bayo75BRqZbCZ8rCtLH",
  "key38": "8h1xsNdxFSKgcZkzahqmyHgnLV5kb717AgreAWfLcTzewtvr4hpSgHnZZhVpUAeu2nMiRJ2zpF4v3q9qi6GBoYF",
  "key39": "46UHXmruLfV5ACjy337bZqBMBnCpgdR6FGnxzigjf1tVbs19vNBaLCtArQxarYPNhasMoDDS1XkkmN8Cjyyk9Yz9",
  "key40": "2UmP949LfX66URF36Wq6fnNLUzu6Tc8UTgst3561wLVNQToHYz3gmQWsMiXEE9Ep7gUK5qcMZUUzgE75Pm1rnhft",
  "key41": "2DtDFzHGxosK3rMqwEYHZNSBVN7SZqEFbZP6oGszz2MjrpuVa8DMhV5saJUkeR6WWp2ijdJMHmAEk6TJ9pN88Piq",
  "key42": "3jo4tjrqsovDFH7EREcYyt15VA5L1N5dTg4CYtx7QgxTfN5AR6BmkKwJJ1gNQQGyNAe48aNFvEWHubhs9LbXbrFr",
  "key43": "3Qw1HNEQXRsnZ7vNPujG6JJWXMRo982DyXtwe3v5HtanQuY8MAQjgjjHyZipy6a7YeWiqctPGs4WPjvUfQKc999z",
  "key44": "3etC3LsZhda6AwKmYdFoiM3KWhazHWGqeMbfGvytb31WoTcvhBsRysi4W67difHwRqGj88DwM3ZKTrrdko9tGtNj",
  "key45": "3ddfFFDivxe4drp9VokdDESkab1KB1UsMf3GzUrXsbK419Xf8Kn8tnCShGw8z9tDgWxTp7qqQfoP3k49dHepxKHS",
  "key46": "4Y7uFrCDUkSSBmZn9T7t7kRsjxfbJs1zqNs3iAsEz51JGGxyz1J9wJ1BNrpJX4qHpAqZEMX6hruKtwK7KgSmKNTj"
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
