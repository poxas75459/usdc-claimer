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
    "2gHLwkFxohA48QRUj2husZNK7KaoFsmchSF4S5ZdTVYoSTbvaPKGthf1iGxwqRKWNgHXxayroB23MJ27ACNjUnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hH2vhmpQwf38M8CbTv2qNu87WJw1PuwesUDN8YEJR4no2sdAQRuQHGpe37p7zeB35cH51r41hT5fhzCwBms5Z1m",
  "key1": "5brW1DS7MmZAcpTy1CTePt3NX6yPTaQkEDLhWpkdrYcDHAnepS7kTNCNA1JzrkAmDMGLSQvX6HXt9pxuhuqVvQjx",
  "key2": "4HSB2ZxHZiEijwMuB6hNzgrDnXsr6ADeBeZ11f7VVyhT4C19GMDCy5X9QwXJgEGD71WNPRFa4mEPqw68ojpkgJuF",
  "key3": "5KztPohvWwbGX4HukXxmzmzgMLBxqvLPj3jh7WBhLtnySSnfX7dghNWzHjfLAUeaFkgreYYzsePdFbnguP62NtWV",
  "key4": "oowW7oSJdxQWVoyqkFFYhyCNq3PhEvp4H2ABJD9zwESXXNLTrvQDh3hojgEzsCFGnWagpu2SwM2D4wvaH3HsXDj",
  "key5": "4HpzungTDGGVj62E12EBBrw5hiVn1oKcXEyMKs1YZFEEghpzAeRWWipARbJ26Yi48N43fVfQGe2XfVHEaiBU4ErP",
  "key6": "bMV3aAEXm3yif9YJWZe7zP6cn9B8RCtaWgyJtpzrDQK33GPCjjwtFiXj9SZbcM581LuCuQo7VxpwGaPMCXsssJo",
  "key7": "2jPSRpcKK7wfp7Khu7RTFjxw7gWe5siK1Z1inkaxu2jAwqfaDfWmdqrxwaoSAWutsC6uAeqopYbJJpvYMjNXv5SU",
  "key8": "5uguf48tRaUbQPRpSWTZQuqVfX6ULTMT7ym5XD5iSBFnPju8PCzAcodFF1NWSNnZtfhKv484gSB2z8ZFLpfSAKeC",
  "key9": "5Z8HX7wmHfXAHJEmmeJcNxvDtESbKV2Y81oGTw2z5s8oGcYy2T6PuM3i1nb5xEw8GkFB52E1cwmo4M5kmG5FF3YU",
  "key10": "5exPxQv29mpsDkxSCX6rrTUyT5pEHEJCY1HxEJCHekMXMVLSo8bKtFLFSETSn2cPbdxWLSx3v67MEvnrGSmzquLD",
  "key11": "2nkcjoehhw67DDcQDCN7c4BcLVAMMLbwG1YxHc3uN3r4UQuPHh66L72bnsQeH3yWg9rLCzqyB1N2T4YS7w6vmpGx",
  "key12": "sBzwcBuAW3dzFobqmZiYTJoAS7CQEEgzrRjvApC7KcpKEN5qzckTXFwx31fn5EwgwBMKrZ2GZeDWnNpWcLAnoUE",
  "key13": "3fRKdTzHG5UokKNmDoa8FMnobtuimRJLLuamih7AXNV6d6FYPpk2Q8HCYcKtvfY4pfnWfopZKWrfoQHCdaSfU6b5",
  "key14": "2LmarjunPQKSon9PhKUJ1yapTfM3JhcJ7XRqPo7N6F3DhVzytNtutJzH9yEnvyMYsirSZhYPaumvkN8LSQGy7GdZ",
  "key15": "3jZJxLLG18a3LMChb5JiAfT5xBaFZzwu2nDAEGk1jEnzmLQ54HvpXAxJjhdtJ3pxonSSTEuaYRpjvF4Yn8rehJ8x",
  "key16": "3Hbj1kDYjQZtjEmDcLVQbXN2zpp7mrWpCJDZcUunwZa7MN5PrZdqYQUkKTwvzxRh2agNCKT5dSx3AstLjYQ22WpG",
  "key17": "qBSTXdf2sw3ZUNqMEGmvb145yz7CtMs2SJWpfrhVjicHKnVfhUCtEmpuoVc4Vr6B2tMWhzDgJCUSnAvj7nRRiX7",
  "key18": "2UECsA979vBSrZqCQhcQxx3oTqBMmfNLarGXkyxuL8UkrJgt7YmvKDTM2GBnSfLBupZmLYG6y3QandG7bbRttDPT",
  "key19": "5oMhWCJpJsMJoLtvA4Y7U9pPKXBSZhaYffTTmZEvJRqEMkCy33AgfpDzWDG3GHsBXH9fqV1trybobu8mdsX8uEgA",
  "key20": "5eqTZgZfZyEC8wVXT9VYX2i7oF1Kk4HPf5JF9AzHkvTDJwUX52PBkqSXFWdmZByv71buLJdBRfoShAyfsawYYdQS",
  "key21": "5urbN9PkFeHsrGVUAZ9Ph2DEEz9eVjeFi1ahELM1cng4Y7y7mVM2Pnjj5XU9e6CGsc9ffpgvBY18VSjhGhFpH8Ze",
  "key22": "RKvDTHKgKfKtUmdFtpoZdZicEjaex9mWjNoPFWHAj7yLCbG3e3X7waQKjneS8C96tCd2SRkcSdDEBnreQSVXce9",
  "key23": "2Ps8yedg7TEuwJs99PD6gEg5m7MstoG5vGzWsRfJb4L77HQ7NVFahA7vxKiDygq9T7Q7vxuroZmLvfGfhmNbTtxD",
  "key24": "2ZofMgdU81SRcGFdQVq4A9ufAUbMUF1gj1Qvd2pEaHKTfGVN5Dgykv95ibWPDZTk8rvUUFxGaFain51RiY5QD3gc",
  "key25": "4KPBEGQJvMEgXTfXpNkfNY274zJCpQpkVJttVm6sAwhkcU5UW6DXpRgBhy9p73xpJuXMBuveWiMfHraKzFqf7zft",
  "key26": "5twX4FUT7CWwUULxNgHfmojjqaBLANL8jLHEbGWDnk6DSry25Qi1ArRNWXY1Rj3tsuuJVixWqFs2c1X4eWTvbmXY",
  "key27": "65zo6FJL2DCFYFU7NBjci3KH1ppdKD1t3ucoiyBDv86yL8EXrYzbqFu1H823v6bR3Z1wN458KboZa9hPVe6V9Tfy",
  "key28": "5rgFWMLe4JwQESFtdXfwpx9Xy4u6C7Rnn9eYhBj2nCJrpbhCFBNgzhMicySTpbu9wLVEhPMZgy25ZDp4YGGWFh7Q",
  "key29": "3z4yBsDfSZMfbtN96SLsiuYNKNARcE7jgmemg1KHnsBYEb4Psq2kcdCQffuBKAG4Gowiw8G2oeYGqcoJQGdUPGQo",
  "key30": "2PkMkPrp1yTwDoyB5M2vnd2o1K2ozgtcHTxUatspiHyQt4t1rJpSA2j5igr4Axfb62LjTDt1GmEghnNZGq2B3oHi",
  "key31": "2yhEZbpzGTXSR6usoXdqjGGzMJJ4z2LrhXUbxnZQHkU7xne81YxHQQer4nvZ4b7xTK49EX4wjXwTL2eijANqm4Y2",
  "key32": "4BqzbxjqzFZKv1xadahfwEH5KJQa9riCARte6QfLFB17pab34WxRktX4gL7xhHbeL3w9CBBTo9XmNHfu1dCaQCH3",
  "key33": "dkzUwK6nVkSv6RsFex9hKi9B8qFWfE1TLwww3fwa8Be49Sn8jT8EE4AGSvPiyb2ZGJrceGFSTc8VNK2rRuwNN9H",
  "key34": "46pkjKbnek2jKNvkUSBdTWPfSLrp3fPv45hARPNvvz1pPsy5vd3cMYRH2JwGK33GidQcjr5YA3HfgXTN6xZpERc5",
  "key35": "2e3Wiq9k3CpwduGJd4Lsft6GvxCwqZCYx6tfFRaEMnpHjxHCP6bhJyg2dhb1i7AF7zMpkVaEepNGUXA5XAeo9uZg",
  "key36": "Pjz3z7ZpDapa2B74J9ajvT4h149vJoEi28pkTWYW1rLpZiTD9ZCztkY9T2xLPR3jvTsMqCokSS1HWGpeWvciQ1j",
  "key37": "66PPe4ZgAJd9kXULQmeiqTpez1CQh3zFv1vq2aZSbvc6vmWcVeyzMvRfYJDkCA16SBnAUgeGD1Xb89eQ7CDPH8th",
  "key38": "5yfgqi8rurnEwCChhVmzPpPc3FpfXb88YMbATYKwrSVW2D9pHEW15W9ejTn59Tm979PupRugG68SheDwxYSU2D3L",
  "key39": "8AgwbheG7TnthVAxcVMKdji4jmyu3iLVA2Zav2m3uytbByHjA2jc7ECKKTtLxwuBtFZBh3yryUeiBuBTZrz9bqU",
  "key40": "2x4DVwntfCDEXthsn8SGKQAEs7hLRaE2fhSSw2HrwbtEeA97zy5YKbEQjWJd6N4Dyvx6VUpSnmJcJZzsXo3LUXS7",
  "key41": "439M1jLfFgqp2eQuuvj6XhYGaF6Aj3pZ7TLFfKzVEUMKzdPAd8ubRaGXCYPHRqTGQK4spUSyKu1LGTgewdfpRYNH",
  "key42": "5nPJJnx1Zk1gKsTPCmYDynqPkekjSqhEo39VpTgoV5ruETHnR65Ty8H6qNBy4zCWEVsEaCAhANBNf94ZMtcsbc4T",
  "key43": "3HbTe1KwShpYbnMn27UhyWEzajvMP5r715nmz4zcDyQk3gcP8QQN5medjPkjC9GKEWAdFyEhQsMQceoquV9iN548",
  "key44": "2NDHEGioz2prvE9KXpHe6qia96wWnDP3epM1M7GWwWWaKdc8C2kvx3YHkW2Qr6Uhp5LyZA5nW7wHgJi3JGQHPp6i",
  "key45": "2q6qZemTwLXMt1P6E5nceg5uwD74Uap1Xs63dtApYGy83XYY8cm6AQAo9tZgWQhaF2cuBTQDHsMwKqFGkx9wxzm3"
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
