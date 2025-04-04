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
    "4ZUe2PRXFBzrzubsVNfBFN1hkX9QSZM7s7oxCtAeMtywbTnoEEWq2zv3khvxRb36fkUsyZMTLB48LCU7aH1EYidq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tcd6VYMobrLB53sQaHGobfW9xHebVC2eVbdfKbvnr6kLubkJWmDXG5VAXD5wXxNB2dbwLexRJo8UAHTBVvXHYML",
  "key1": "3q32bbPW6pZpsK1x9t5nQTow1b97qWWo6Nc38SPaQ6Pic2nHN6y2QdnuVAvc5K5oS5L4YntPk4h86yBXZWDaRXgQ",
  "key2": "4tzprcgVzRQ6sGtQkFaeha3kqcVsaKgyXteMi1V1Y3165MP4oPxNw8uFwEk4qSinV81UbC7qL2rUJ6PU3U2WZzNu",
  "key3": "4b5S3sqD1tUZUzo9rU8akpYncXMj5rAxqM17SsriEopGji1vuo5nkgMztUxQMF2gAFYbkxDA6jPtqscchUobYTFB",
  "key4": "oTmEqiBf3yVhhdCpsi8DkRoNVS8gigD6PxMwMQc756cS2w1p2ivCFUYPEsBLrTmBhbghKM6CySYSmvnGLnEgYJV",
  "key5": "3uT47DPFCiKLV6chMBaJnp6QyQGnyJW2keQyKvWWVXz1aSreYJroBjEUwx15JpbXJC84tsoRuJeiQeqdPHwoAWjy",
  "key6": "3Nn1BtbXpHvyBdwm76AoryugMPa1AEVaozxVzNspiXaakyEL2LUcN29okCFp67gu9Vs1A4Yb3eT5QhTLHh38FZfj",
  "key7": "61EKRjCzb1DvTuQQ1vUgj5AUBR6p9Tx8AUQn7pv3vxGpzMYRBEwbK62qgp2faLv2PYGAGkQ5GGUAbRS6Vy7hDFpK",
  "key8": "54KhDqJApYYMB7miPhyPgvVDtdZKQNje9xn9dwLfDAJeBbtJzVdbhHXVpdbTMC9oYsGRV5YsMrjSJbiWN2s3AWfs",
  "key9": "F1Q8yrqxvRj3vZvENZYTxDDA8b4gTZZxoVTW5UJCTUtnAF9qyecKmKjzu2X1cNHpTJYMc3NV1kT2Z5LuV6Tu9W2",
  "key10": "36CSrfFb1dtHVpiJWcUhiJvLTExz6qu7pvrvBcY965XnVbgeebvH56eBvcgexXPBpdMm3pTMZ1kTMMvbHNXNhey3",
  "key11": "4uN2avz3cUQg7yAWFk1Zg8wwkHYcM12RkuRBXYRmDYwnq8Zei2NF49xew9uRphS6tWistXYF8Lg4b85wxZ4ZEoPV",
  "key12": "4rs39CbfUEAbXKPrcD4nYMQ66rhtyjQP8RJqvgMQh8V9UpVoj3s2a2QYyAcWn3jyuRBwVhSdGPM6oeeEc9XbqKA4",
  "key13": "2qXpkZcwSnwdnNszkL2ELSnKc3H2BK4gu3Hoj3mkhrPpuJJwKg4cYnhS7nSsiBidoewF3QMT2Q8QAgdtkGWfvr4V",
  "key14": "e5Ha6Dcbcii5gbWdD45Zs67Qw7iXnSpwhCvJjGsKxxnfsuRoa3EqbKixNS31CtFTSqBi8SN5MXjaX9wGyM3qSvw",
  "key15": "2UHSYQvT4tefSWRRGR2YUy15zTxpKWekkL5LWU8WHnGuYSn6r9G7iLQ8c423dnYL3aXzhcbz13W7AjK5eTcMGRi3",
  "key16": "51s1iKN5zzqFtKhBfnGC4Dv4AE1rGSPS55d81VLVU7iTtoi2ukeks9GbHGYhTWpVZv4xJJN93hsxqtp5FiUGRB84",
  "key17": "2nAeRxNicCrEFWpm5Dwi7KdR2xYNkUfwhYQCEzCH4dLkR7LLWPZ1LgijcdTrJHeL2LCLewV2eKnm7jEZCYSnFiZq",
  "key18": "5Rsow93Xb3X2AQGL1Ngxp4m3ArKDbKLiC4inMfMLeorS6ZrJntA7LQgpuc488RmFdaQFDWzBmLHVwteML2ARegAL",
  "key19": "4xE5PDq3RRbNtqkSVNgHhjmohfgACT2j7RTCvzQ1rVpnuFBLphnA7s4k7w4isNPzkdSo8LdvoNrCu72Q4LfKCHP8",
  "key20": "47WcRCX4LAZztPPS9XmcTtGxgixMTGdzmVb8r3YPhLohLE99AzRHuqbw64Qz9G1KG8Vpk8J3HPeA8mkKMyho4U7t",
  "key21": "3R34YYPSfc8o8rHHBZwH8zsNSXwgBAG51Mgo8XcRWZhsQfD69hLaeArdHtrKGzPF4655uQX6Y62NZLtKaYVwNun8",
  "key22": "8B6RxzmRsYFdBz5qjrUmT9ykv1SmhWfS4z8FinysmRorUYGtFrNMJ1UkR4J5DxJZB7CtPbfCqrvvbNgTVPBPoZG",
  "key23": "52R1Njfx8YatDdaLdCprWSQ8yujLyA1iBgBk4whfctV4egzCpLTbMaGcGDtJGkJ2sToS24Vse7ozHXpNw7f1dYYG",
  "key24": "bzrf9Zhbe1NSfPeXshk819EYqMSCbt4e3TPYMS5hSWvcoDfZMAvXmD2jLPvdsJXjS3hge2zUwhYb81NNDxdWdPL",
  "key25": "4X2Tf2rTpz4r3N1rzGDvmneY8oxn7ieLCr5Ui35rXUWTwoKYCZFFFaLiTb3np3Afy1t9EJ3ioBcc5Y7GxRi7SqAJ",
  "key26": "qfne89w8ZmWWeqtHmDNuKEdviP3ccLg3LTCwbbr6FL149U5DLdbkpvMBYqazjgnQbzKp9SDBxQA2sBUzsYHczvJ",
  "key27": "2ceDHqNLpFx73FfYKHKT23khKjsPMYVfdXg2R2PLVBKPYywNrTmvDme4aggbK4SJpgJjmjuHswLdUsmXfhYqzEkb",
  "key28": "5dEmoMwynRXpNoTosthRhsmn4UsJvo8XgsTffxv8WAk2DxMXm7pzJQt4dx1WNCFG1uubWULCZeuYVYwc6t8AnJ14",
  "key29": "4CbQy1eAdJtknMfZcuhsZXPXmZVYsuCeGgoCx5mL37HLTUxmMv5KHMDra7MFeNSauGjiFjX8RMsL6P8gET1tQTLm",
  "key30": "5zwshGdo3qMCTMVukT8WxytfXPc3Vdz7nj2X47YnB9caPNsci9U9E6vskcicyVSiQL5cWPsbiU8oVe5r2e7ZSS6u",
  "key31": "5HZpG5TdGq4AK4hjnwxx1bBmCXsTCgve8A8vDkgCCDoNqw1pg7cqzrw2hMGhgxM6doMAhvB4RGYHg3uC9zaVaoqf",
  "key32": "2U1hgGX7ryK62UA38A2MSRRu3AyWSSMoNBPwntuENymxW8rxubMjcHPNUWt6BRmcZvvh1yZWgu8HqR8SjrefXZRa",
  "key33": "51WukZv3B3MXfdt5xaT7uwwdVAd4aLtsAtHhJ1cFdzPub6UyWhyn97yJpFVG5wxMGvpF1s94F3VRT5ewvrihNXZX",
  "key34": "32UCRGpUZaBzxL7Y2YrNsrNzqyqHhKCsF6pgUdXTwo7ZSjMTkyg3uAgHDJu5eZc6qQ9eJiXnLw8Yx2j1pP22XVm8"
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
