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
    "61H4w6FvQ9kQkHzVSEgLLtEtrnARiyWfi6h1gqaDftNBM37vh6QAxUM4qLJFY2PLmjFAnTZJG78vgTmnfA9sTRTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L8ynGfMFEAV2JVXNG4FuGbzNKUTw7xhVaaCGMy2uSY9xbusofjW6xEgBgQxKqrEANXkirMQWEjDxQ8VVpY7wh7N",
  "key1": "2dLQ1dH2H4Lk5akk7NCHNiHVXDuruwKFcYB3KLDwpsDmG2dYeqwyzHKMLWTStcjYU79ixSGTbMVQZbvEppAVXyL6",
  "key2": "CttMqRU1otX663cmRRVmfsv3DSW6MQJxq8dJNxd8xpzur4n4C9zD94TzoYDhPvE6kUSyeXDW9JSdiynAJRUoiZy",
  "key3": "5ZfUEzfvJchuykTTrnNU19KTsbvgGpEBuwQfTzy6GoSTBUG8c6YUCLrKdSv4WvMo3uE9H6LCp3nUktg1gLGZW4zo",
  "key4": "92Pn8ydRHn5JbkpCCWdAdh8T1GUKRmBXSYNbGQ2h6ygvR1uC3A7e449kojeHxQQtKXCf2v6xqJy23xAcBqJcmBA",
  "key5": "5ghxiibTeLqSRRGrhsSKJ5UBonka7duKHHrEtecPBfdycfTKNrBFQrFycRPxY382DfEckbxPLayzWhbtGdwirdAC",
  "key6": "2cZgseJ9cgAtaEZKMGohR17d95vdaEHmFhHngCKdWcGxo9UFLJNKj7ZzmxP31pRErEeqMdhaZZutXsMJqVWHevcG",
  "key7": "4JWA55yi7WWUoc6m1ZMdfrBdKy26RUP2ZQwRRhnTQ9Q8AmckcpaZPzZmA8r21p5VrLjYUqapmec6zaxHqBzKTqat",
  "key8": "4HFPoL7gQuaLkYwbmTDAx8yKW8EinE3yvwfeiN2LUoS6ZvHWYZGc3znu2yckitzmhrYpLUzKwJFzEoTuAC2UP5q3",
  "key9": "5Cumi5h2BRRT5cpLUEoXkaow7zraZFUePc41JwBS9X9VX9QpxyV3PCDQak5kF3pXuvDWvpzMtXQd5NAu7eYrSBgD",
  "key10": "3zGkhhmvRP9d41HxJWBtxxMbhhyLZftupGoAk1jbQ67jk5NnuNEgFgvrdHuejfbmnd27sMkM8VYFWmBhZXyJaCuY",
  "key11": "5tHFMns5QKyPRM1kMLDkQjhQJVfaa4zR6brTejDgBAcqbkMYzm81Dv1Va48HJZX6hhNnSKWt6498XZtoiuJaHnrD",
  "key12": "2DnsrGjUktGujwKa33aFha4swccW2N7UQEqdsKS2oTcXGjkMRxaScQgHdT4uDN8tk4MHtCY7DPAxT3Zj7aG2fXSe",
  "key13": "3C4svctKnPa1uK8xomPqXFwtafCFRotQ2cikzD956AztxLCmDtvcjQ2aZrHmXfW8Uadg36UgJpj2kL1oFtx9vPpy",
  "key14": "5E4dYURwkndAorZ25gLJnt11SFenc9XprNiVvEmfH7zneS7cxUu4q2iSGgumyChM1AgLFR7m1Bp4N4rZRQeGdAeK",
  "key15": "42hnQmSPKkfesQSCQedMas9sp7TPTkbnxRhd3QJFVYjYVrabnWwoRhr97bUVKAVkcvisG8U1GnDVrKzBFB6xcivx",
  "key16": "5LQ6KqVXwRKB84TwqCqWEUH4quC251BDKXRVFHMzddU7gzMT8RxXKzQAJSHduWkbMLXv9vDBC3pyyuv1K8hQfCzP",
  "key17": "2kJ99tB5ZRDSdioow3ZHoTFfCKFXkFgY2EbVmGG635S9aNEUZS9KrMZgk18jdCvqWPoxTQUoborBYELtiQmgdEDQ",
  "key18": "2avWR8CWMZMYS82Qbx6SPJ52eaVDxhfJLJhi3ohebuAsj8PSXtcGpBW87o2bwcGLs1Wx3wBrhrkg3Jjz2qReQEz2",
  "key19": "3jZNcJegx8jgfDiPT1vgqS13qdsfPz5R48erKRJsWhrtCanPGMVZsgPA4NjWxm6z8gxUjDjd5PnB7tE6JJSEB5MG",
  "key20": "2LDCMRU92FCUVHox7CawD4egnPaub3UTsp5vUVEY2gtHLUVv4aVp24FRF5okUKL7fgzGe3wKE5YNVfmX6Q9n22jS",
  "key21": "1boG6ffqpM34ZVSCatjyasnag8UrMhFE2wrUnGuWLr3qRqojdVfUke9ZTY4bPfYtoayGxF29J8sQcVJB85hfkyg",
  "key22": "XN9tyubUziqayVna5vhM295cqThwU1Krmg1L5561exoHLYD2dXq16SfoaGR5voxPgaqtdiHdw3km7dEfBfxAE7N",
  "key23": "UyPdewYNeh6fd3Dj2froirTSonDCrCxMRqrcqkA5uhSNKUFVtQ8gKSruHp1BWpVbi5rJVXYVjNVCRTQMasCFXbM",
  "key24": "RmL95jZBWKeMSeSZJfwqKkz7b1PAnyn7T5uxzoZUaS9fM8ekfHp1ZjogePMTVCq9ZZeb8A5RVbAdpgG3Y3x8AY5",
  "key25": "2WNxNpfVYFtGrgVFbjWRdrvWZBxCFcVPtB8gZocWwZDmm3qFZgdUfgtS4sQTedJSJEmHeESAwq2bkdUbEZKBhoYP",
  "key26": "2XhGvuDDwgNpKyE9YWsPa5M17BW368cjAGimugMK3jHP9fydc4zcR9BU3ip1bVtRBp6Gm5z9aaoKmQDJMXzspfAL",
  "key27": "4Pr2JcpUVuyzarm1wrjYymiRD3eJbNVFiM967JytYCX82eyMrmkCeEvZDeAegA5qHFQsigkJ7XdNPisWhU1pa7L8",
  "key28": "Cn51TjEXaFHCza58fYe3u5eQZit68MXV8KXJZJXQGVrL11yC7j6omvhnA7QdZbuLVFRXSaWmcTni2srE7QGvuK5",
  "key29": "4bdsJdCh7c5CBvFYKjwqxmMKKEd31CKqTEbhPTu1zJveeitRvW24rUkGZT18jpkqUTv3XXBJ4tbxneT9MgfdxCaq",
  "key30": "4NvNrt9EHFnuykjihQzT4aYCHp8JLD4rAH7qYz2vjpdUKeMY7Y81Q7EvQpambue6d5iNA9E43mr41CFTDWLLJtkM",
  "key31": "3DC8e3bQtZppw8hAo7X8SqQpGdzzEWs9xegfHSdeKWSCHJHPrCaB8n85ydbApQqju34SosWpgRdpPqDf5iy41gnf",
  "key32": "2AwrggNx5PV73LhnowUm455J36n1EkZF5NTSNBHQhGRXAWXDu8qWh2T64BWvpDLEmo9Rbqb87BBGsiyRBvLHHW8V",
  "key33": "56ppP2qAWP6GM8xUHXrN51oEvLXoy1gdHCtgTrV6NveU2wS3WX8kLCtSFWHiECURdZPJdWTNHymfWSTmpbhLMSPt",
  "key34": "3grjsMKHpu44Cq6x2vbE9mR4ECNyAJ8UgJF1iAMQhhUydcgfzziMixmJYpXPRWxWsUbLe5qgpzK9fSBuS3pXKy6P",
  "key35": "4wRN8YJdi8PetmeSDXSkPx3iLi783KQV59TvkoRJm4FGyuCqZPztcf3mY2qZewELTg9kXTUY77SHjoju33rsatjH",
  "key36": "4gsV7gpXu6VzgFvyzt3Ciy4Jvn3MHsSpn9gPXmw3wMXSjBHDWbHQ6hToDCBo2FmxLqLFEURo1v47XWUHdvjvtySe"
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
