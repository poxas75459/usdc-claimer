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
    "3HXPyTRg2EjaLvcpyGpk11uoGrSWam2Ce3TuXbYA2wVXm6M2G13zkmbdx2VM5f5H4LxLoTFwXhHN2VaB8WWui4J2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ufUMvJMi35ygR1WUXEbXuUvaVjCcvFVviAvi1ubm6Q2JtjnBjoRktJS4h4nhDGaJm9m58gdBCxbLNGg63aKfY9b",
  "key1": "2PfSSRpjWNRtsmbdNXE8gcRu2RBkbV7UYLJbtWuKPYVv2E7NSNKLNSjejTyCfLVaMozh3X4EG1pd46W7om8rkmKh",
  "key2": "XWig1GtzmMNKTecPFdSQZJwqM1qg6og9TWDgjKWmSQtPrnVbeEg6VBecgPUPbb2E8nEHpq3tkgEK2YMq5jBDchv",
  "key3": "4tHgmA3TxhgrsWSfDe4kKfyzHhbqUxafkMBgM4aogGzTYR8oirDfmwyBSXXcKk2bqsYq1Lzt4TKaQ9HbrVWPkRR9",
  "key4": "5i2L7AZZvHx1dnk8Tjgtnqd3ZX6k3zMeYp36gfcLJuoHQLqVRkZwHgPME1M4AeqJBwBQ2hv9zyq3L7ZyKTzipju2",
  "key5": "3v6JeAag2QzZWeE4LxjKsmiMSUY8XZgN9musHTZWvYeXS3728UFHmWXNgohnJyFkUbo1KfYGEjPMbFHyhrtcJm4R",
  "key6": "3s1GmM41W8aWfurAaNQfJudre7FtavZmjWXE63KMPQSiVjEUNt96CYi6dyNBLrsuo4XL8pa46fCzctF8RpsBQb7D",
  "key7": "3Ld4GSzWuESATEVHgFzBefkxMtDoJjAutn1VQ3H7s2NebG3mMiUm5cnVp6gwmi4QCaFnxoBpVmzPfj2BUkoeitmk",
  "key8": "2GmVytTxoRkrNh56kYwSGLzEHPuhwkRNzq9jwnGiySMtHDgY3oxYQHMjosDQANTaneQuXN8AsxkEBgipVmnxdwdQ",
  "key9": "2djSgMSqfc2YbeZ8eowF1Am2AETW3rsW8HG7vAYcG5fDqRTAZkbbDLXpQxtkHfMVCbuFPTJ6Av61kuWHaVbsC2Dp",
  "key10": "G1kE85tA3jt7Frv6ufwD6bvvwzp5DUrd4PLYXbTrcqPgMNE6X9u8fiBcxt9B6xmwLR3NfcY7kSCm4muRKdFBE3n",
  "key11": "58hK4pfkajHbNUWA96sSd5hee8pG7CkxYjgnKzAGNcE1p14VhSDAixkAQmhPiXEcC5uH5zLQJSFsKKH2aA9juJFx",
  "key12": "2uyv3GiqWtpqaHgKqPNrsiXVsNJAkVo82FDYNpCBTYbY1eePDEMuKKWtP83K8c5vuqPjJLBBVSwJJWxdVf68GjNc",
  "key13": "4qPVAda1vQ2UQPA82yxagBYack4NorvtfbfRDN6A8AdQE4CvX9h1kaY1Kg1PjRaabrHkECTbn5GgzARU6N9vzUh1",
  "key14": "2SBgGY3xtbVEyjQy8Lcvyvjrk3V3NJDG6t9ZF3c1Us9MZXtdEhk8mAfhry5KeDVRojsBxMQa18hNncE8SFC7s9vH",
  "key15": "2G7WFRnBst96CSQ3vWvCc2oNadqebWH81rSj32b5W9ceY8LeCn8MtrqbchvqVkU1tFz2oRXW5saAbFKAsfUjw1rj",
  "key16": "Wj474FFqWFuoWF64mcfXQCqiWit6MZkfk8yT7YeeTUBCUFwpKvAcTTzNME2QJyGFjTjVqLdiyoMqjMqWW4pvcKA",
  "key17": "B1TgN91TrEurwL7XVxmfBA4MQKQsCPD87VBAynGbhLmd35cRQ7aS5C9xQPbTxCiB9qmJFiZGuBWXDuVFyS1hxCQ",
  "key18": "4gt6GuxjmuGAaG7Zrn4QhUy5jNK89dB7qu9Bv6VgB2wb7ez4C4qszqA48qpkX1ASHW1AcKdqdogEYDDKfgVi4VQL",
  "key19": "3KwekZNTBq44DMXyyr1BvBgeJ4N7PvHaw2sazc1CtFzTgEGxM9iDNGv15Dh67czKFySrEBCrFjfc6r3btMpT5pA2",
  "key20": "wUSSQBqck6nLj1g1tSLVoS5rtVf6WjudzvBg8jtKdEZEA4sXH67q2DFJ1ozPSnqk4DEg75UmT5JVS2GnChHPt7H",
  "key21": "27LTRee5ndHnZujqoa1LveyyHs6iDsAJqRbEPhUDy26kEcP5Nk88S2DfwwaK55XyTptKKM3xpKgKC4mxBA7q6nTG",
  "key22": "4qkS3kamkrhxNfFy2tS8FJTTa3ibs7EPHrZSFY5515XjPRx9Jnz9LpnM9K8ZTTQ8XqPrRoYezkXBXGivmjwuS2xk",
  "key23": "4qpMXEDhZjCzMdJa5SP4oBbsfbB3eCxnWR73pAUB38Hrz3Ph6xhPbkg2WuEn236fHoZKJ7KSahZkMwsSVvvLHiNk",
  "key24": "2v8Nq5Eu3jpUEAZnVjkg9j6ZNeHFhY7R1NGu6nVQhRUE1ccsPCGr5G2Kkk9mBYWXpReNuTtdFnmiRQsnyLUcEF8V",
  "key25": "3bozhbuvVRgjeJhjGoDjcWZ9HC9NYh1VLRhV71EZ4X374hd2ugZWaTgQmtyMk3b2qFfNq8Przhad2aXYGibKXfhC",
  "key26": "3CiFi7QxoUA12C65ake88tdPNncEVBoipFbVWgRTef9dpLV4hGvQdRFBz66WFNUDm1ePVpYddDmLxb3YdRcEBc8h",
  "key27": "5fUtXF3GM9tnGTfHPZiGsKmtpkuBWB5Ukf4n5n9Yi54UTNemTp2K7UvyTwZrfspgcxb5VifGgopJ8RZRCoG65pNB",
  "key28": "5dGDqE34QaiF4gqq869K3kSebtKbV53SrJPAAapWRgbWGcQNcJv4wpSxLR22brWP7BnrRG6mpD6Db8RMLYP5doG8",
  "key29": "2GJYhxswaKKKEV1vAZTF66SxXAeXDjk9uDx6t8czxvMRwu1cm5VS1KcmY5ES3ri8d9a3Hsvq2b6Sz5mBcqbW4F1g",
  "key30": "rCYqTs91JDgqphM5goXyedM4bwdFT6QQ2pRafS8offgG8AbZDNofGEiqnbKCYh4E8QMCXy9WKaM64w29wgXcH7R",
  "key31": "4akjvBbu776CLoU1FQoae1kCt2AaEHwz3f7caE9kqyStLtZd5iNRChfXvW7HHRJqhbxNdaGagLqoygxeMcWvjvp4",
  "key32": "4NqBbG4VCupxtPZQ6Q9GyrUuAM9Vv7BRPMcaf1xePqPWqCwc1JtVGM7axVU6V3KWrXzeN1TWz2MWELP9eqTqpvce",
  "key33": "5CEVhLE8tG2UcPLNUFBmLj8xrq2AsQmwb9qPSBAW8bunhPQoRZ4bA8XErjCTUKLZaMJ5fPwyV51xHwpo17f8JffA",
  "key34": "3qRUK1qsfkmgbGsrvMAXBpVwzswZPsghfyak6vSSNGQdVbMckrxLZmTBzzFrnxNGY1m7sCNT6kvPqXt96vXTyFJR",
  "key35": "3rq8teA4cL5gHyBfDR1a18rinmuJwx3YVVEqMEAmwYys81AoTACtAaxqBBYGB8g4DuDkmG6Yctr6YEX6Cpqepjbs",
  "key36": "5QvwrkMf4d8vc2s6drCzJ5ywuf5ELYar5CZud4sh4NsEhV1S7n3ZYKEMmhJ3742deBy1BPyWGMxLs1E6PmAYzj1V",
  "key37": "43kMiyJiGhvc5mPoADLzkVrkKdTEydd4oEmntRb71vnraJw1Vgo2oZk3oe14xb6ivEePCXAnoivCvVLaQbxsEzba",
  "key38": "4XQH61ZiwneAueopNS9eP1mhP3iWx1iSAxtgyvtYQE3uxfid6Eg8xrYSj29Wa3xyHJGQqHp1g7axfCgut4ptmjUS",
  "key39": "2SNWzMdoQ3CqX521XWNmXDuyNdkiqTsJZ7SGQ31qqhFsrnyvdZQN2Be5NzcXGVWGgS5pwfK5CeGWULpxkPcWpXa8",
  "key40": "3tLyvvm3ZQDBeSZcvobsVJu8EwbpEbXqj1BSwCGuqbj3Q8Bovq8C1gzK82HP2uqwHNTDp8UUoZaFTcapXkzGfhLM",
  "key41": "2xgo8GZJ1Hi2Qr4xNGdJ2UpJ1wEUNV5ZgipiGWysDE9ZdVZweML7ioLCPaqTLVYRbV8BGBQDsvMGGpLdZK39m5vf",
  "key42": "45WjiyZBtgstfKLRAT4RvF1ZNcTPPEy4Eg1bm2sJCXSjfQiZqFsa6Co1TxQ8hoHWY8rg4RT5yYt9GqRkovrkczLG",
  "key43": "5EnrS6rD6f9JfezPBwN7yQBbNzNeyhxdiXs6pHDfctoSuerGFUGdMwJWBKPkJZYKjhdEpgSat8aPbQWMnSMKLnf2",
  "key44": "3wfrsehiY9YL6APYefgweqDEVngyjFvhFZY1LVUSQUT9cFxADTvC5esLgs8z7ksALxYbtRBq8QWxSMK1CHLMmje",
  "key45": "21r4NUDanZSVKkYpvFXvZN6j3KVpWp5sLpmkjfNoW5ngTe9PR91HqmGktyy8P3kvSf29wy4umjLwWjcmLctTqomp"
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
