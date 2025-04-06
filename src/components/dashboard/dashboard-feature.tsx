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
    "Gxhwd5EjrnMhKUkWYTC6F6nHzVT3yefVPb6znghC6GbNHbSKc5Vc5Wi7YxzQkuCKegmCWzUTG6kGcdAyEwbUnnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bgrLJUqTsyqhXEraL1EgiQQZweaDg6dfnNFtEUzzGC1McFpg3nfwhaWVDP4CYAD597m39LhKAtvT9ZH7DmVrLZH",
  "key1": "2cUye8FiEJntfZmWz5xaQcoRgf7ArMXCZihYfQyxq5XRTLfSK6G5ZxLcLMsJdRtVyrotpMwJWjxidXMExiK3932Y",
  "key2": "4vUkkczxWf9QbPH3DFsQdXRH6XdWVBgLu8hAiDXpGFtr5zvTb7zA4heotuCzHJEpEeBm8q9yec6HfZ6gXapRkknh",
  "key3": "kQqDiBx4gA2GnfXAAk4w4GJrCAhFqDeTTgZ4yzLKa9ciHgUh9mRVNDb7ocoTJqoBwMRLWDaBsQmhuEYyVki6thG",
  "key4": "3oR8P5nPKpSgWQTdEyiNFb95f9DFfxSZcFaNivTq51Q3N7mbz1uRjx9kiX4efxpEarRq1QumvcoLqUFDQM9rRk5c",
  "key5": "22bhGu6oEJgKaAwZJNREDUymvQ5GMahqHNFw78wnSZmBSM5UVG7ut3mYM4ZMKvznLwPzrc6b7sJArn5u3KP8Mfd1",
  "key6": "42qXzzwJ527iGLZW7rBY63ZZUfMsoCqMPpzsN6E9zj9YWMXXy287i6FHdpQW2Li5G2Xkz8SMygzJrej9PVkwwP6K",
  "key7": "55sRcpFj1sHaypRXKvtCt82Br3bvL7tatowWLL2PjYUWA6W4MojNi1QaJo42mYj5YAo6tarRGHX7wjZrNdYeNtFZ",
  "key8": "38tvErmqoWqbS5YLRcpGNN7t9JoscgDwsqPHwfmcaXx2tvEsAkw8H6NS3GmLkotYXuQfkeo25nswbDEhTKeFjdKZ",
  "key9": "FfBL35aEfaGxtbBfAGKpDHXZ9CzJKKxc22WkAh6JnWX9eHjtW8gLGcZge4DiSJQcHWDXXE3yJ1XDyUsuvZpc2Tp",
  "key10": "CpPpAxBW4uynAp7VMokVMB4jN2adBtN1ktNt2AQTKmVVReQvwZz1rvxMAU1SuiizvSy8rYj58sMwQA3HEMpRVRk",
  "key11": "2iL1kBdHvo1xs8xKRa6Z7VzJHvSw8wTSaGnYisaYLi6PE8wCojvtjGLJxixWPEtgSfAefD4s4Tet4wSZ69kaGrjM",
  "key12": "4fmkmkhs8Z9SjTGNF2z43y2CCSbSFVHQuDuTCPNuZXPkPqAq73fAvizX65hAMwKEG7RwGo8wfLhJ3SCS97kT64Lp",
  "key13": "4TGnumGnKQtM6tHgCdWNBRUdM937oA7QrVRjrUWAYvYCEyvmBu4jDfeQK9aXBZf5kJWQwH4uQXwKMwbePDtd7hzM",
  "key14": "5SmGDMkaeVkJ1FbifkX4isqkzK5VaRhWezxquK3u8vRqw4q9zUaTJ1ba9ees8cf4An2ZZowdyvyU2oXzn5eSG7Ty",
  "key15": "3Zq9urcgqaY42qJh3cxHxPSXYidmfmqkFX39iLKhsZQm2i3iwvVL5H5MSc43vc9qFUs6BM7CNE8XvvxkwyKs6aZf",
  "key16": "4UrHTooLSuHetihiqhidiLeiK5kN2djTANGoLKuG6MifxMnuBnHyxgF4szXAyQWhdqfrCtSpQgShyD3JfJaPLVfz",
  "key17": "4EJKj2uiUmkG5GNv2tj6N3iKWpnPGBddtALqXKpE7YcPCL8jVTSfMMxc7zi4GJr3aaD9J6soQW1oJ3TkjQ8VWwrQ",
  "key18": "ovYzktxXoJcMahNWVhcSQnSBTwnZfiGdaMHDitqiR5pzwFrg6agG8Kd6uovJV7nUhSH2pyGaWZ2bCYmQX7YXund",
  "key19": "24Qag1iZtRV5j119i1VcNJjLPjE6HQxuhpkNHTC1MT2Tu8oiGNyJJ2G5ceJ4mwQawwCZcQ43MSXnDwTqjF4BumiF",
  "key20": "tLHFhLgpYLfkjnuKqrkx47nNyroSgEsqR9HyabA5EM7Pg5v1nXDSEfUULCZFnKPF3iykHtnULXqL9Mhqa9jJ14T",
  "key21": "3XQezDjWxnVXvQZpc6XR4K3BeQTzWXEYd5Zj8bzBKy4uYgqLKE4wALLZXGwm1QmzmQctN6NFHzZMTxKtrXB6wikM",
  "key22": "2xgxU3EJtab4EmXSv9YtZf1rPYeySiboe7hJLszX3gBsQ62FN48HfRaRcRHVruc9eHwsXyN54EMpT2soRcgc6ydN",
  "key23": "5MbWD7V7WKvk1zqx8VM64sjta4Moe1bMNovsQqdJH7w8xEMLw51HDmbarVQwWsXNgL2NoonuDhMkHN7Yhk687dmC",
  "key24": "nZeJZnfsdjwJraSuqGsGcd875aaCA8tUh5PrHBPatXEnJJp2v8PDgmpK43vZGsSPjTU1ypwiu3Gwt3D8tKcsRbW",
  "key25": "3YyxXXKM4HmpFdngMMjBBir94Q6C9UbdBC5yZghVKt21paAGpNb5RytSSmSJD57esBMGMKEJPaTjLC7gK8Giww6V",
  "key26": "4HBY25FsvFrTxQpFTgWaTcEoHrF1E2pV7MWhrtavvmiXKiyRejeNg4fHujhpu9bkPbuodLQ9QR65CGD43LgqQQV4",
  "key27": "4YrSn2KX7bTuMPUKHuyATNENPFiH6RZP14zMQ6wmd7Vtdmjb416Qw1b6WTYAzSzVxkZcHxFauMHq5hNoaa7JAU3W",
  "key28": "57axLT3iyneFUSccDXQ8nQxxazmHFCmM1P4pp8u9CKPoVZNdwqfihFCUJTj2gcsBhSmQTUqHBAhaQ4UVZT7zWxuH",
  "key29": "2AdJrwSVP8Mq5rpLEmjzMfyPQx7q9evhTQeHqvfU5mKnHMD27W9GEyVhCPCmwMUPxHR4ZKzvusCCtffH2hY91T7t",
  "key30": "4P5bJB9rvprFMmfSidzxWb62fyHdGoxpZKJKaZ2A62wgr7q83ktxVaAHRJHVr45nahGLW1p4SVMdscpcrFAYTM1i",
  "key31": "2PirXwntY7cEMeK1BbYi9xjd74636DNrdF2xkBnns1NYCcjWqynumUP5Mmbw2HQ1qLs5Z6pksHb71F4i7NoibMgh",
  "key32": "2QXGU4NXwrYtbT7RFgHH2XVkHjmDD3aiEj91w3nSLrRRaZdf9Zdrx5tXY3tgXFqvATvNqgUpV2fUY5fjH27KbBHg",
  "key33": "3GTQi2tCFjaufEfYseviJ9MHT4YZ6wbHWuhKjCoNjAfnZKVaTv1N1AcHTw2gLgPwfg5YMvxCFTZMT82dNXRzqEpW",
  "key34": "voXnzoVceHatF4FS65yvY1Yd3k2gqtWMnsMXq267tQhM3i6MssBKN8sC7P4bG2iFNBHkuZp8EkMf8BsMBiYMTbN",
  "key35": "MBKyhPjGsGFw47PNgo5svxgTTzKozg1YSaUr2bng513nYafa4Ft4dYuLRd9JWMMjhAUen9NRH8AG1QD7qRBQnyZ",
  "key36": "4XVD3PUeW9UxroL6gjkg2WHGmH1iDSk9FDoLQgJhANjTaYnZ4Zij8RczRDdRDV9xh8syJ29zURE5y1gbAPtqKNXg",
  "key37": "X5FvsUqPym1KX8nDh67S6afe8A5Svht9oG7CUMgF3SwgnxJBYvDsYnkJv56hKUXtfeSvwHEjYUNzoDsvQVXv1PQ",
  "key38": "5f6SGiMQ65nG7mBR838AXTBZWxwAmjym4mbXKiapFqzzSXY1Y2odGjDftQSyvs9rzk61Bf7gGisTV3su8gj1sRnQ",
  "key39": "5bceDueEc75Fckfgc41ckx4jN782XWdfQgWVsQkKQNCzygvR4FTfjuhZ7ydhUq9rqnKCVTMJDdH2znXw5mXzHynJ"
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
