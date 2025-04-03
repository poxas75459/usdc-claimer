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
    "2JDo8YkoWkSGFUx5LKuZqPKZAFd6iSGWrjBrNjxd7dMSUZk2G2FPzXet14GbPNCeQPtTFREFyar7Q2h4dztCNVhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uqb1TsLQou7NpwNoQz34t8VQLh98unoVjr6B2UcuaDKYoWskoNUBCG8wXyiaoHq31CtLNUE6JHcD1uB2DEixWfp",
  "key1": "2CmF7FCbDgjmU4NA4FDBAhYMTXFZGCRxNLRSF1gkq5YGme4bVFqQv9t8hT9K7A4wq3AGuL5sJJc6xnXs12fZkgsP",
  "key2": "5zncVPFuRtqV6E4hKc3KtKkcCehtU5Wg6p5w94CvQwK17eW71VnbHgsnhRivBeTUBVofwsa76GqhVxeoPhTA1845",
  "key3": "5DXtUW4Mf4g32vr5bPKSeLBorTHgaMdbauYYE4gQ6rgokC7YPTjXj714ZEcFBt1BbxNY13tmjWMuHPjEnAHjkkQ8",
  "key4": "4q5yDYgQXSVngvtzMofJ3fovEfLpnc2r7HPKoEjrc9DLNFW6m4V2ohDsYfj1PCWKpqMKUcgXmrLjkc8rcxLAw99v",
  "key5": "5N3LDMJwtYKndZLkpF934BPPuqVzhXQoHkxnsUvG7UPX1oKXDLnshx3ce4TxVsJ6gViT1XkqSQ66DSBgwkSHUHHj",
  "key6": "3Zw5LY198dBHWzMJQ5o7nxJooNdiMjAwpCWBppJCGzYynwXUPyts1CmJRy1Ugdb1YMmnnFY3Wm3cyoTsA68g72kQ",
  "key7": "36h3c5DCcPB3wZh98xzNUPRZEQ7fsQrToCWVuqpiNEWhs31wR3htTyYie5BrssC2gEDLNBEtpqoE2muPLXUW88BD",
  "key8": "27HYcWjsEoxwU3wovbUWgWgVrJE2u7J3UL9G5TaTfmi9YrnFvJmq8erLYHv5c6zP31uv49xGCtKJgAHHRG4kyG2Y",
  "key9": "24g2DWBFHXyMoeYXzGFdohs92dW8bn3NCdnRHbCP99BXfdBq3sJeeYd36FooUDJekfmxQJVW6mb8SN3AFaMHQxnJ",
  "key10": "2Bm1JQTG53V7dsZjnGzWUXPmW86qPGPNRAAYgyYKX9fb1sbriTZCuutaSTJsV7fnpKApB3NJgbfzWDnT44DspVbK",
  "key11": "jcyB2wjg53MBhG3HaWpg8ndx4TCrccNzYe2xgjKn8PcbJ8d8EhUHpZb3wXXevh9DhN9GXTUAG9oQB7gb9yqdBfZ",
  "key12": "64qXrgBiFfFyph5Fs4ZcziJPY9bjQ8BuudsK52CJSfAjTqu7pYq5XDoavpuM7S4g6JPmhCYReouMVgUng9a1f9kC",
  "key13": "kivXJ6Vu2AiPMeyusGYknD5r642uhi2iXdRjKTk2ePPEA7BFaVWAJvZLgELqgsREarNnuhpDFW1f8jJzUDA3rcY",
  "key14": "33NRe1RQafQsKQjfujvBDeg9c8mRM5tC1Vd3UTnhgopiREAwwSGK2XSm2YqYT1v9zFct55D4ZJ5Pcvu3Wgpt9o1U",
  "key15": "56RKvz7Pxz5Pd1tByKr3E28TXJQUnerXMaJtPhyPFJDgXfRwaFNo7fVGLRRRoTqHyZcLTpkjQAYxq9NctbU7nTwj",
  "key16": "5HpEJd18taxC3xYWnrs4xrUcKTQwzGu7LjFscwDuU6zMXqTDon5WtX2QZgUQ15cow89R1rRGFZQaEdWqv7FXhPY3",
  "key17": "4hgmU936tg1jz92JTfvLsg8zGQuNi3hKtYGgoAuszv51nUkX2uUe8jHzxD7r2CtvRE6YPCjbnbe1bkAWYMGo7Ayw",
  "key18": "37uxn524aYBPVAMsJbHNuBcXh97NtRTt7cAcUKBiC9Fn6EpkAojQERMv3ZuKqdVrd4opvkxtTYSkNrqZbfYKPzEN",
  "key19": "5sJ5FJ3K5xi6rN51BZmeKZxSZyRRz55FNFgBxdgcqHyz5F7JaiotUR2CcgN4GSpbtiH1fcpQyWzpV9erT6dPpDad",
  "key20": "3kqLh3g118LbTs751gRWHVdUMji1461mU925fxHVAoSPk6U3shVeZfUg8F2XgxL8gRcwLbTGcDkj1nxQbCMqzobB",
  "key21": "5QZqKo3KsqnEjZ7ovnpRshoWGBPtLp7U13uuKJEchLNJwEBYQ9VcYA938PMQ6xS7mjnnr9cuYj98X7xWHt8RBaYf",
  "key22": "5QfRUNnMRhKrBR1Y1zjmrz5j7gWu5WVRUu1Ky13unsuuC71N4BwVdBrP7w9rPYxmavmjZAyqX8BSgy2gwYaDuBWz",
  "key23": "xYreEf9JzXpxXZKygz4L1yLxSbC56URYXiYtrX1p333JPHv2Lr6zByZxxpa3XjxFKxUmACpxr3bKggNbHniME36",
  "key24": "2R5RU3E67gsv2HUHwFeoFK8Y8BfgkThKocuGXsNFtyY5UHCTa3m7TBBD8ebpALnnSvLfipaVFt7o4feYu9zsRCzh",
  "key25": "66TxfbhZzH2q4MtTUUAkL34jf3FLMWkDqtSDBYDKgG4PKk4hind1WLmX6FMGqBaQtNqid8eMjhr7XSpjnAa7ghqn",
  "key26": "3MXCVZExbVUSCmFkASrketiiu65J3sqBPCTHwusPPTferVtcXePsm7H5he6ETSH3rYLCxQKZuepKAa8SXvpGdBVK",
  "key27": "SyF5URwtmQApVHaFwSVQCfA5oEpbRXPcy1dFjQUS9FCfj6twQ6LWrJNLLpHv5imBUP6mfcXdiie7XuXU8cX1c4T",
  "key28": "4SK3HogK9SVji3X5mAqq5oB8deo3w3QpnwaFtU1QkTr4tnbhvKy2GLXp5vp7o4tzpHRJ4RQuR93jyxcjtfuhyk6X",
  "key29": "3W5STZqBX1nonECpYMQT2vAND11ko4XjSyZGkpPeSaKUS2xdGnAJqTLRtwWVumNybwbhrEk4ZCWKPd3yGcEN3cGu",
  "key30": "4QZSug1NG1dREqkhjTWaxnULUd3dMTFtDz7T3S9hmQfKsR3DM2K64FoSsZACMFhXNbBeFxBQJc97VKuSsLGG2ZXj",
  "key31": "5uEEhAdUrg9H6bE7P34wyUFy1sBFw82Ghn3VrNsNcAQoudDnJ3YYBs46qjzbLGtmBeTPddBWhscCdch1g2csrNX7",
  "key32": "4UYsv7NFGUWsTGGP2rLGDZmZtuvZ4q24C5czCRWSMLdEZoL3EeihmpzXWhMQYSHdCPSmi1tzTksfZ8ZuDVWC2kV3",
  "key33": "35dpfbq8AZb14oXvZNML44aXw41tXNJSzb4UEgr7PsSeKmpi4cSmEPwAyaqppqiWE9wRoW5h9BZdqxwsbKRf4M4T",
  "key34": "4oCUPAU5tso2ov16zzL24GaFbZNFkKSxDjwr7fR3xpiQYxvHEeUunsCKYmb4g6m6AXn8beGMG3iQCywqVcKMEGWY",
  "key35": "4w2Hv3jyCsxi5QoBNT7h4oE7JpiEEKKHYNnYa7aSDLUaWG6iesz8WxZqzsosvGhZ6Uvhr1ri56E68y9dmFQejk4m",
  "key36": "4p5HGxFS6nQNbXzLCUq827xdfcRja34iHhdWvDqz7wZ4t3KJ2HHktR8MCyvcc6E4QWcJrhXB2LyQ754x9xbQsdUE",
  "key37": "4ifAdiSF7hHJDZ5ZTZtGcoEH4beuMxsKqmyw4ePMNpWGAB3Z6uFpPiu2LhTPXPa9CevqspLww8FUcVMjqoRwh1vm",
  "key38": "2ysH2nQjJgzyuuykH7fdCpmrnwUPWyBqRtq1Z7fcgf7pqTNcyaKfEWETs87s5SVfpAd4MTz1w7Tt5FJWzheK2DEu",
  "key39": "3GJuAU5KD4QSkd4puLvntTA8x6fxRzFLypNexa9Mu3eBUqx5WuPaMGmcQSQcd3ZfvZN5FUgWf2Jx4b7fWbBbDtnH",
  "key40": "4Gh5ZtRdMT1r6nopPxvYSaoCtEYeMy7xcTz5iT1cR9cwyfcUJfdQpN5VaTnTunrcytKj7daJunpw1fxGAmd5MQ3X",
  "key41": "5jUM4MtuXaXVCpf1RYgNBkeujdns18NfgVKq2kixgqS76rZT3YoMLd7x9sWrubJoBvzuGxAB1hkAzf8Svh8PENyN",
  "key42": "4EGcVURjW3Lji7fXNbwfJadTi3Sbjz2SGoPsguqGhQGXGSTB7hUEBqESX5NfiX2EXrGnPzKzQAwvueLiLauzdQBx",
  "key43": "5RdE7gWYWLeFtBr3E3wH5i37b431Hmfu1JyB8ckhckFRXxfYKS4GwT3ksyj6cBPfezWZufAa6hKuKBstebcyBASk",
  "key44": "4T8sbVUCiXsGW7fAuoAMippzS6Xj8GyP1GmdCzpTFGMqQq9y7UdH5XCwVwZnVXAe3qJP8SGw3GTbufLTcLPbiCuW",
  "key45": "4vKBFKY7YT2pwYmtjLvq4dysRYaxvgjsAg6m7cZVSpp5A8uhaVr7d9od7cXBisMTtsdPfrBqT1hDJ5FEGHJnXLhQ",
  "key46": "3v5ZydxE9qB1aD1dXD1DwxkfZonw7Qj48X46QQE1sTZjmtdYGKjTzYXfpaVEGDLu4vEZsyCCtYs8E6aRwSdAFbHY",
  "key47": "2BpwLz1gtJASWyj8TGP6eJU1rZNkSVzgS8Pxp2KR6YSr1R5aMRfoHkNvK7X2gVfh5QPmfUyKdrUHpfeSs1YXEj2p",
  "key48": "4c2FkyYDxGT1hdnpbGhGLdoPPYKdQpxzcPE61xgq4aKswG4nEiFpCz2SnJneau8oMLnECxjeLk9k57kEFc9nDNHB"
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
