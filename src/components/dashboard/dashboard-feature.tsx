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
    "wbyovMEndonoa6M6CQzrdFHnJLzersEZMy993Ag4VNyd6DmMMC9cqTjG1gAUFnB7Gb6PamrgL9fwnD6BTaEQFeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SyQFQMkby5dug4AVw8KfUyZsZqoPEuChneTCr6cBYB34w4gohqqDLswk6nRMerYpvJJmJU6kJeksSVV8V7BUu6W",
  "key1": "4jo8i5d2BQ7pGxzdywDwY1cMg2gzXaDebQgQmnhP4YJTrknkFU2ZjXJUD1vfQt3LFTXViFJv8JsuC5FThpLUurZA",
  "key2": "5UPkZNFfnCtG81mfeHf8q3wduTTTvvsAn1Rqi1aj83NDcjJMhkFVb7eFTow5HtR2L16JsDJ6NbpKEGkVRbQ3tWNF",
  "key3": "45dYC9Lc9V3xcRjRUwXwBVc3dNMqvxHmXGxLPQGtQuV8VnkLhcfZa38KShtDGkhxzwACCkoqzcdFPEyca7L2L1Fp",
  "key4": "47A5nzECesD8cjWTxdPpKvrjFxaRTB21KYLJcgpXZ89huGcEDFGyubkHVHda8HhjwVQ89z2F8VQV4BFAWamcFcPk",
  "key5": "3YaUgRcgyPoQ8bZy9aQjNWdxmSGpCYVada6cCYSCc2raaz8fa8u6UDE98CkLnvZApAbZ4r8iX7vSDsjCoPZU4nY7",
  "key6": "v7JtDKTRXArzXFn6pXZuTLahr3GPMbCGw48CZVYmmgp6YsQAkUqz2shEfVBCLZShxTcksAMmAWZC63QVisstUnS",
  "key7": "5w6oXmrxyvPrKdicyyCsj3RawftEeu4haFnZHe5R7wJR2ir3gc7YT39PqBEyVBkhDPP25wpfmv2R4CRoQNr1DYc2",
  "key8": "8K7XE1UC2kP3x1wZqqPceP2EYvNdPVHc6TCaA189M2AUaUVA9ULEBjQCnF2A48ptf43bHPSPuazMTow4oP1kc2g",
  "key9": "2wDU1L8kbLY6uDUbEVXgFcZjSCkbrxFc86HuLJNfK4Zr5qHEY28FNwPRVgd5kF8QJJ9ZNZ6NLYQraVg8dpM6DDMA",
  "key10": "2Sx28vUfB5g31jujwZ2bqDBhR1kjVekcHkGfpRkoZjprwALq2NvUNqAbynkvoseAvSG9bTJam8tDe7YiMNVKwTEK",
  "key11": "3dxNA2m7JCnJr6PmAiHc4QZZyLsFNXygMfDFcCRPxbRHXaHLWMkbivpjq36TxMMRpHrcoTgytVY2aPPhKbAozx4",
  "key12": "2htj2wfNkDTzUw8XF9KLgNmuxoDNaeaqSkV1LG8jWkbpewEkCX5gVQbAuyBanphEyZUo1cKXsJiPNH9WS8vuNFM4",
  "key13": "3PnmS4LCGsnaWvVa3n3QogrfNNsyvoxmxPzt4sxErv1vEQZymqKKR1bqdhdrPhGF1aT2Q1Jtj5XsgSmf5rtQhKY4",
  "key14": "RprdgvSmoBYxgEeJnrFCopNg3mmwgShSTgMAYJoS6sUwhvTVuzBiyy6sReRWLEshVypbLvWKduhQM9gEufSJdMr",
  "key15": "2pvxyq7BPdueEw3QnmQRxKniR2dRPKT1gvFPFYKgeVLHtZYrnkkKXrmgAiQwNP5vFDAH8U7bchRndAQUuT8LRhwF",
  "key16": "2VXp5fq3TqA1c7pAaJbtqiMWMLPmvsaksvKbXE22agqkYhmaMXRRazrKCk4MxVkpi5gJR8RqbQ2Jqck1iaatE5xx",
  "key17": "ef54td8GHoE7Lm3oSBvMypoQaDGi91gZW2A8CzXXLSDgxDBLkK8Wz57X3TbDawJyyxEgZ9oTToUV1zNkeu34WFj",
  "key18": "jr12GAGnmYUEFmF81BKTXwtgGgEV2ATphFgQSo9igXg36htgXaAnSnZCk4je3X9CZfVpdhejMvyTTBSqDe1Z2XA",
  "key19": "3BSjEdJj5ZR56fC2bzVjdndrQ9Bi9YhQQyN4h3EJgyYUFtVsimm4JMpcwnQcBpHbkoLKPkUSCZUQ8h39aNNacT5H",
  "key20": "2f67ggXP2YvcDAxaqQkGZXwhteeN2kqfCXEtV15GJmkrPAhbxBHiNpZ6JE2H39gntH8SmqAYfhBd84CysTvLxj8c",
  "key21": "3hrTJzgsKk3WY1wGaZQhfkys5hJtqTccfReYAggQqkNNs8Lw1i9eMaCqKx7XeNuZTmUA5VyReEo3UKMp6RZqHh1T",
  "key22": "52fr7usu3BxChjcBKDEWSdnvd5bjH6J77s7qURNSQAZNZDdqwqUiBACnBDCqyhUiKJgJWzWTSo9J3USmAiL6ZCiD",
  "key23": "KJ2htNNkMJsGZFZAftCfp4QzZDNDhu9FKobA2npJukCQGRxaXSn4dz9vYg46qy7Qv299btbgZrm3ZyLxYNX3XY5",
  "key24": "4Az7LmCG873upDcZLKReqGLJKXq2Psx3XV2ECFKSi5WAPsZeLoPQ2ri1QT6tjPQqNWiJj4MP532C7hqtcQr1piee",
  "key25": "56Pyhh4TzeT3xvSZxHYYBYEVftXwaHELvZhbZTCumqLneerbfj5T6wvjhATEz4t5aQy1cdbGhbtQtJwMFeAQrB1c",
  "key26": "SJC8wAjdTMyrW2shXAoWzmWdipaEhnLS9BgzeAag5esAjYd7w5Dm6eTWoLQEbnZNnXGiDXB7jPZVX5KXvBjSVgH",
  "key27": "5B5zRGYWji79G86g6bLg2bvtcRCvBvyMMancuUygerPtZ7qu4YReoJMxvVr9hUhx734ZeJSTssxhDEj79kCHy2xt",
  "key28": "5Zayu8eZ5KwutUpbaay8jfwtsgQbw55g9B9j8RPaFEC1mfkxHS4WP83AE9FXWnjUbki85Meb4iZwKXfd3sXBkpU4",
  "key29": "4cKk1GmgTRMAUNpFK4mNvmApqn877Cr6uo6hcXPzEhLmMmZbi9cZgfkLPKFTgjbrg8uxcz9nFJz42ZKptzDJ5aWM",
  "key30": "mChx7RrxvJiiHKQj9MhWazdocD3o9n25kiutnxBG9oF9qR4ucpBtmkjSo5GfWie2wnQ77FEfJAD5AZVHdB25wNB",
  "key31": "5KYSPoeod4RwQJ7CQvcvXuWFMruoXBTjWGWJEwMwGq3j2RNr4WEiTHyTmtw3XPidNn1qt4Ks74TScswEBZgF4cSH",
  "key32": "PTEr8NvJW9nHfxdRacjTo5TZNzNfLKPNTAbRV6pesRTeMnwT37UQ6a9zsVvCK1zje3XFiwgMTC97HJ18jVHtSwh",
  "key33": "qWheLEyk2QZbqbrAok2Dkdesz2yzPiroJ63UNqWszMSf9Bu4iW5p6nWRRgwxpEdHCxPaunoaPjoppA2VUKfPgTk",
  "key34": "x7u1CFiGnu63s58QZvp4CS1gQRn7mSFr56mF5d9LnmRQGpKWo8GtTAhgJPCQEcRsvaiJZhTj28vWDpDYvnLtHwb",
  "key35": "3PszayndVSEJXggg4jhH6NHK4j42ZVpfNfTa8u9thS3R4Yd2dXaPYKriwHVw2RAXTn5gProu5t8RTto1Kp3mLo9K",
  "key36": "4toXoPNVDE4urhXwaGokArFFuCq9f9hMWZcgHLgTkNKPty7PvLZvLtPyyDvEUBDjD6aDB4aEnbu694BKdWiaHPY8",
  "key37": "4B3G9PVPmXbLCojrVyztkPV9P1oPMZkMhapwaSJgWU8fBeeWSXsgwBPwU5oYsGqSyevgSdsHuYWqp5QQf4ykJfCm",
  "key38": "3wuCFkSGhcARLudN3uqVMdRwznEoKE6cBGPeghG6kkvrnJ5eX8sK9N2hpLySCNnpgRRgBsVTbGLPAhQJ8nfNdwLR",
  "key39": "64Fz9KzpV8FznL2YmUuYuPa4mvsRXPXXJg8XsMEZAqUwh4anphoKej1rDjCsuzRAuaNqgB3U9EHHwi45fd2J32Mh",
  "key40": "5vRXBW3H9c9jmEk4sGA7LEDBqzNnPdaKymhJ2uh5VbekBXBojc9Gn18Jru41ouEg7jyFMBC9SHSxj1mMJDYy6rG9",
  "key41": "4SHHhLZpRUegcQqPXtszKcssPzKcGuSX7siLC9Lw565nPsdxrvSxQXWTwXM5RaMmUX6tUuqB3KXqhoTJPAqUKVhY",
  "key42": "TcyEbhBkj7tKmZbg7Fd3ywmG8XMia7T3SkzsRTioKiuGzDAyC1GF4PMC2w2vQyB4pLPdmbyKsTGEVDukt93zh79",
  "key43": "3vcfx43h5SyF8B7VBbR1YyrXr6cVEEhrSz7wvg5F5YiHm4yZzZamK8j1qUjAhZMPQWvW9zn4GmRNa9hQ3MRz8VrQ",
  "key44": "5w5ED8zmbjnAQvEQb2fbtJC96j1oUm6SiHPgbGDzXpyabtBy9tsqjdKscjsfvaJbwjiR3xrn64CNuABRLA3Nq7yw",
  "key45": "46Eiim5TpwDBcBTxMdgjSsgecczREaPff38DdfdcrKhKKj4mHhdGiLAGGKhbr13VjHpycnKLdb2sBiXr7Sk9uxia",
  "key46": "5QWoYuppt3Ps1K4XzvmBc1KiwVtCD6uTpuQ33UJ4ScADw31jUA53VEsq7Js1hqjAx2Tszd6LBaRwT9tVxynYFJ2x",
  "key47": "4n92ad2UkL1VGTzMqqPPGZY4MiYqiVbkebWqapZoxUVffmPm5yp1cKacK6revZeQTgvNaXpvfovHeFNLgBUtmbig"
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
