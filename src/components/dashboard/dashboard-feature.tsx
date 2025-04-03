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
    "3bVcrQKcuPmM4ohHDXxqMuVMLe8T8Ag1R5YY5WcGbQhDYX74NRsFfDGKJAYmJmCaEXMfYTcTHA9Ktf6JvJcJxbCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wRwaBLUT6aqorEo5La8PQXV2yqN326Fb5zeZjnv7pNKDKNF87pLD3EnKqusagBUUeF7GqVN1yT8Rhkdi8yotUCH",
  "key1": "4jHCw8N4pNonX78zUaecuhpujobf43jE6ywRCgwe6tqkRA3tiGYDz7fVqMBe81vMz5yzY4TEX82zjv4opRczyjZG",
  "key2": "5zxFDBkS3iptZvVQa3tWWAudpS7zKBX5Jo32Cdbb3Tt2cqRWfEEkyVb2yV27f34kgjKvn22XHYau71xqZEnchfWF",
  "key3": "dmCzs1hmcZHDytfSzk44ieo2EfMbbmm9XM5jSJvw4kytHPfwZYbdY572Uz8NJdnC9chKHQZbDa1abBTtBgzuoxQ",
  "key4": "2riFGBLgkuCTDaLyAWanijqiuE9v6EeHic8SGrg1me4H6ruyU346bLEnvfCt5Xgt73V6yhozqNMziFYFG1f9MgtR",
  "key5": "3mH3bbNtasCRfqR4U9XjDLNVvWWCqFqHFaXutHRAcVkuoRUAUmjeQsyqb4hTJeek8cisFar7pE2zPGsnUEbywfqW",
  "key6": "3vtzhGmENMg7Fcgp4jVnGwsxkzcuwwL151fVgQNy1VW4wtbyxko7JPdq5cRPYgAsJtyJ4dKw444yVU4TPsCrw3BB",
  "key7": "3RGBpXREBnFtpN7ze2TK3NVVAxZJfQq4AubhXgGWjXiKHuVZ4ffbgb6nsXTk7C2twFjSYxwUMjEEm7CNLT9rhKWy",
  "key8": "5UZHRQwG47GrS4Z1osV4wEQ4BX14DvbiNr3FGHGxdMDbnXWqoediykxdYiyHfyTchSzrXkSzNTMp6fHDTxUsD35c",
  "key9": "3MwaVogRULLEgEHYPRzT5C4ZqgposbSeYhFYEg7ZAiqt41Jht4bvUEeLV5HL4HWcHhvztE1gpo6fc4U3pzgM3apz",
  "key10": "2juutynGAq5PzDPNKNK9kDxoEB4bsmnxiXNJzCv5poXDJRhXPhrdbr4ziqLNL1nh9YgYZqpQqn7oJjVjkSdfmapW",
  "key11": "3Fq8cRptaXuSzkonD67riisV9Pmd2BbCiPv43JW3cM2dZccuU4rtEsPJsgvDNaNUw8nfHUNrXWSVf8mENPmJDdwQ",
  "key12": "aycvh8KdWQCNFDJ7PfGCCbsFjwYE1kvGmGdDJ5ZLRS9TW4aPXuzwdpfGrA5TuQx2HJHRwapTAynPzkSfRyzs7MT",
  "key13": "3cUvCCHjRFUXDKCmi56kyvupYk3D53ZGzTJZZEF4GfVqLxeNyfzVnJvmtL2DqSbtQsbYzXoKaHVvhpsJfYjfHdbu",
  "key14": "2ww2DHi1BEdgEuZARikN73sCNTPsZLdcBuBFwtEg1sP7xgY1WrzozvdaMFGFL2DQLxhGoHJWLEa9oMjeLoysVESU",
  "key15": "5gp72HiytGw4d3q44S8vzEfppWWrVKsXWnNoJpgkNkGVoK6QUWFKHP2aC9L9cP6TA9jEUqYV7x44tfAB3cCJ5C4X",
  "key16": "29v5iSHCxzsD5D2wgnm38p1Dw4MrwWJQ6vu1TcV5ewRwYQNwLcBE7RFQ9gpvA2CPB9uhRZ6K2b35uNKC3LsdNoeS",
  "key17": "4UPxaL6P9k7fEDBHzwq7jUUqwHQd5S5svwebLMpPToHJsnVs8WGJw52suU97EroRdpiPiwY6P9hTfsGTLcib51oJ",
  "key18": "8RjBQNyyTfN9LReCRXhYKd68DLTXi7vLVVQqmnRzEg9AgQvsiq5AuVoTYRbYvMY8eBrWLqVqQtc1ZEQmRLCELye",
  "key19": "2HCa7nSxcWxbaNeeiK2dXriNAmD8e3r37xKuuMEu2wVHkGmAwiiGgUBDTMEZDX7q6dofEh38xkdSiB7nmHZHRpBd",
  "key20": "5nkuatPpcDvbAuXFF295mnR9UKnuSegBGZq6Z512zwZSK241HuAZznx8mXC622NMujEhFHS246Tmt5ZaUSCMGbgm",
  "key21": "4NHXc9af4kqaZGDLbGXJuA2xA5JAdTK9c1KhmfFZHnnkBSMPKMh2dMN6vK5c9mVjWWrDssgdAsvY8akVkkwJTTap",
  "key22": "3RHWcyfMaqiWxeQWKrxDbrDnn38mfBjavRbdT9NZgQUWR9Kteobhb7k6JEqdXrmPFbuUJPwX5Lmjcu86TXRDpdi8",
  "key23": "3tzmrEQGMDy7Bv4AFbr21NQKeycL8ZfWXKafoL6Cjw7RFhWHhXrVbGj2SQ1p8cwYXsqZSTpCPqMK8Q1gCSSz5tBk",
  "key24": "27rrpgAFWek8sQT8BrngQcs7JgRLdJZXxZhiypqq2p2BfRSTeG2GiayaKFaipDdG61sAd57YZ9CjgGsshWUDJiM1",
  "key25": "4ZLd2E6caocTTdT5MqxiQxU3WzD3jB4RZwj1KEUAGK5YBBzxteXXKMmBsVNRoDriNwLFcPgsH2KqGYreUYzbKtXe",
  "key26": "2edBV1MBsYMmf3avhJmtC7UeSFRsYo8eWX163huu3Q3WpRmjzJr84tUpzN8hQ8xURyWpvWBDtwS3mLKaBykK4eMT",
  "key27": "5GU5RSkxhjgZRTpK61Urben2XVVtYdEfob1qfp2egv8GA7nanUJcLqcCRN1CSgMaDpE8F4AjtxXzw1Z5uWwjVCoR",
  "key28": "4HSBajxvmvrMXTgfF2pA5QMnoFVVCqWau5p2QNp2mTSxFBPHG8t2hBN3fHzFC6VsyWwi1VHDT7KuVb4U45n66nGL",
  "key29": "5fBoUP3vdA7rYPApr5jN7FMzmfMzHPqawnBNVWG7g1D3k5vq9MZDMhQUxXmXbEQYEu9Na9oeNWbgEK6f7RSoXgVv",
  "key30": "5EpqGEPgKt9eVA1GrfswrTcYSFa8ytd3U8u39iirkFAppKGndoT9RTTfqbUZzwmYqDbNzhhfDjDx72kRyuvoWzjX",
  "key31": "GPf57TX4BgF4sgMBftb9tS45psSHPSCBYrtftqgdrQQBreFJ3TYW91vJdmD5Uxh1Vb8W9HpaGCLuGvFExdTpH7n",
  "key32": "494CwbZT3ggr7XtPWXvU6uaV5b61cHmjkAJvkpNiUmH6TtMAXjdF3sonfm136EEWoqPsEfjxWYjwAqnsAPb8hnAE",
  "key33": "3NNxTpQjfxHDL2njTkHndmZmXJhiEcj5wbPfE4AENxBMsEWkSJPRFbMnKDCVK5JXbZQhygHYvRRpNSvpeYtWuEHc",
  "key34": "NrD6PAoC3qWxyXhayk4fG6aiyvqgcPesYbhDF2JBHUZ7jMk8goqQMuTVYbht7ZasL4WR85R2ioJ6F48d2VxS3cJ",
  "key35": "CBdMbveY2KVbn6bi38xv1KM6VbfR8LHvJoCY4b9iBhvQSx5gZ7fq99ssuwHmGk6Rxauo1b3FcmaY3sMvUmugX5V",
  "key36": "g1M6FHc7yuTQXyShG3W2xSiZiUai2EwF9eVMGQHi11KBg2qw3s9VCphZv6RTAhicXTyu149EdkVaihyJNiZttjC",
  "key37": "5H8UFRBytwDZKEv4PT51Yaoz5StHUFnNRwi6o8LJbm9Y6HxmxPFZKy61dQFmpDZ6Pxd7osDQQdo4YFfAFdwhfraH",
  "key38": "Csgmqo3kTj4unt2g4jYyrCK6tEXCiUvsDdBcd28khAcvMJqSq5uRVHwj1KRxZKrKVA1hfDXNkTcppR2jEtNDhf7",
  "key39": "5dva1ojpGTxQDuWuhKK8LXGXFoU4Jj5yg6MRQLBA7RQX2xv8Hhsaddz42ScRtiZxQBvUbNUGPxLvMZRB52haae8n",
  "key40": "2arkwY3mGQZAUJt39A6X7c2LzrTrX9DmDotF7GGWYpQt26rKEyzCDNztJmTc6wFEvKF59g7U1LYmXXnqiRVPofDc",
  "key41": "4mpNb3kEKmoakHtWcrJ5BZ3QDoq32YqTqQmm6fCFats33duJcmSGRUeNBMYSQihvpharZkxg4ku6s2Zg8bNpyEc8",
  "key42": "Nx88kMKN8A9ER2gF5yXJAsADAWYKr3FwFqHpm8j39YECm2zPBfzADGPL4H8i3SgFjoKYmr6ZTKujYKRVGra9xdQ",
  "key43": "48dADEjNXLPXJtbvWs9Ec9by2VD6iCo6iraBjnNBFFswbDU5wrqmMNgLQMKZcKybW2JkZDC1Pt6PD7w4TKuMDzR3",
  "key44": "CNQaJzXfYcNykLjhUtDkR9UcjbGvorNRugYKov4hcqmztXwWJDCiHLDK5cHUBWzGqcRCfbSU9LqitGLHkuiYSLW",
  "key45": "4AFMsAPPGMsEhd1NjykDyVKecBKSNh41vrnTbqdPP5yU9HEDinPv8T6HMVb5Jcx9u6jeKmztwvhnYj8n9n4tPWUj",
  "key46": "4fNHd1kKkD2Qmthuc8MMkJF8xZFPXN3WprnFNaevAengLm3TB3niqACszgkN2HJ4yT2uEpeN9jbmDiWGauuzyHGZ",
  "key47": "VjZAoAgoJrirmT9PKaXGGojJFX44GtGKWEdPEiSoQEq17ggH53eFxixfsP3JbpuzLMCW5KH2XNP3xmAygJfCdX9",
  "key48": "2MnpUTNvhChoW7oNzr4vLoqPLUYBaFxJ4rF2o3xyZF3u26VN2rd66uRa7VGfCXTj6FawPohBd7x6LLvJxito9VJS",
  "key49": "31weuBm4dK1zseruVR3DvzaxaSGhCBPY4JhVfmY9tF6JDP6mM8aDcBVraXjLM1747gyGYx49Ed8Sz3iQtSF7Z5mR"
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
