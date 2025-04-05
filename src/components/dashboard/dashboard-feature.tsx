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
    "C2y7iDkTnnDwwYfL26XKzCC8uQESkWbmHV7AEVixQuChosDXR6ti85xHyBD9yczamDSrbJ28JfPKW5dEHovNiv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S6wuJRktWY9BN7fZa1292Pe7VghskzT5t1rLHTJg9WLCMWvtt2M18Ms3KpzjLk8HTvQQxmCGzvRDFLGCgUyiyjs",
  "key1": "3v7VYC6YiERSKhMR8GdR2LFKvZwenuDwGKW4msMZn4Uxo7QaLi1rpyaHv9qGt3W2rXRdaXeSfGBztCtF8giGypgy",
  "key2": "25Di59r9V9gatymAtv3911dfbJaezP7TW2PNjS97drirZM6NfBUB85u2nTC5DTRxaJCKaBgZHwU9DCCtDmURwssb",
  "key3": "j6xE42Z2RRst7aT1DBxPH2a86ge791Nceyc2o3Gcs5YD1TPrjtHNLagpJahqV7f99c4qdVaZvYay4XRwrMc5iMQ",
  "key4": "4MAfKpkPotcS5MkEgDvWnM83Zs6DdCYA3j1LkmoWKpd3sbpNFyhx37ka724ZgmEBNqmwVbZ4bEjvt9tRsfvH8Df2",
  "key5": "5AVuyRxrKMpRtNwRDRi8eZxBrbsauYT7eSRBEVs813oWabyfntoaP6CiBPG2S9VfrhN1t6oSZNeyfFWKtaMwysi3",
  "key6": "2NY3YoP6JrnmSgZeSdeN1m1VgS3SNAmZMu8KbViCPQHd3eBBHoNc5rqGNSKhwb2CjXme1BW87BVfKnWqc2DyupF",
  "key7": "4JddWuQvSEiRXBSoo4VeiY1YCkknMT1CS5Ar4W74DQPrsCbdBPsitFdNEYd7P7h2Xb4BpgCGdCVNKebLoBHBHXVu",
  "key8": "5ZwG5GRcxCAwtoGjXmLgyi8NfEkD2hbsHhUoK3LXUT3hpKjHVaD81xgWp79yB7xe8g7NiZKq4zxQMfuEzzkT4fxu",
  "key9": "5HsTTgaKn43wzMKjp2vVaTAPxkVvF1aATLoSZaH1Fzv1kgFETKNqsaMAFV9bUpx9K1BbCYdmpsSaHHijnVczZCg4",
  "key10": "XyhnsXQ3UQcxq5U2V9tPLQ5R4T4GQTnoMHkQosytyLiYsp45K1RpvFMA96FbB7CHo8Rxpy56LEKRHUe4dq3XbFF",
  "key11": "4yj397QFLn1BDzvaNyiZ5mhS2bhGb4gmydg2ZLwh7ASUeVusrojPQk9YBK3GBiarGTinC94WqAL7zUcFWtG8g4pZ",
  "key12": "inpe19y8bBDPMaLBsXznUN4RQhBvEYKYfueGzX87FcLV1c3gATUduKDuH7T8a6LgYzHqtAYGQYPRDCuK9yrTq9a",
  "key13": "c2awWbH9KPDKQLyAVJTD5q83CVGuwoE9JGTPULBdiKKvMM7N5WDs1cMRgBWCcEVDY913uw35bAuJQAigYKZUkvB",
  "key14": "3E2b2kdezsT3t6WiyP4jJqT3SfJnCPimgFzTkGz4mMxnqxxvm2eZFVcGGwLw44Z6zn26XM9ZBqsdB8uagehoXp3X",
  "key15": "5WsetByRiymDDLEf9ajaDJztDVUzL4yWQPq5pmx5rW6ty5AXxK54ZTu4AVvtqZDvS3YSptY1NNHRTXnti7X9z8ky",
  "key16": "3nzM7b875Rx2S9kep5q66VA87gmM8zR54NwPoCyTHL7qcS1mq1nWPoHdb5udLL1JhnhYLB8cCMjMQ1RBjDMeRpBN",
  "key17": "5A9CE6gbbTgUs74Fu6hwUbKJtRU2WeDFzhPwVLAqSihwz9shyf1KogSCwB5WnF4xuNzdY32pLDNvn8Q5nGp9qKEF",
  "key18": "5B2GtCoMxXfSP2mqUq1YqdcnWLMAaUffeDcE36cN5CDRfWZcvSG9tKTEoX3wrSNdNwGaDJbaRhrDiJi2Auf45d67",
  "key19": "g9jJfFcPm67oa3CVBt5bfm3aHQYwdkgcq9RaZXU3AbvordR6PavMg1jiSZ5G4ipQf4inzpGKsCbaVM85PBiosuT",
  "key20": "3XTnwU1wJ5TXugUmZbXDJvS8cnxmM8cQGT55w9hhUSBWdaecLTTL5CRXJyMJ6tQeXM22mGiPCcCHCN1Ryq8S8o11",
  "key21": "5gDZcG69LwEG6ghG7by4sCB4M3LNRraYr199KHetsr1KtJte17tpdDAnZmjisWuoH2kEgQVmyeMXoBkU7oAx7ZGL",
  "key22": "iByFkyYAi58QicBo3xmr3kkmY2TSR1qratfpQnv9aWDvEhZMY3tuhFEuXKHr4LjNrsDVf3CMSpg87FQBRobtA8z",
  "key23": "4SaKFac2QNm8L5J2s8SY3GyF6sbXKhw7bhEef2Mk8P4aWpf5MQQRG4TcnNuGigJxxmesNTeC7BnuMjmC9pVSCi1K",
  "key24": "67SV2xqk5Vujky8g5LVwUXn56AiEDiWm5r2RRYcEyd87siQ1vgQaUrxDhxMc2jnQmNgxQaXJkpubBkBiRa2HWuWe",
  "key25": "3PJHv5v4dm7eumENGeuPzecxiEoa2zQWhtiJCo3db4wTfmqVoYdcZXfxnmz65nphxmCbPkRNZfsCrJUyg8GYVc1u",
  "key26": "5Tj1V1mbpZvDZ5sCat8kxDRNCJFsYKLLbaAfkMsnsAZ5atUBKf8N2GwofCoYqCSZc7r6XwpofAxuCJYps54CKKow",
  "key27": "2H137kbZQmf5QL1vkxyRQnA6o6RcxC7Khg1xLxW7r9DextWkXZc1ByJtQEmiN4ZSZDWGXneUd9fNm876ADfvaQ6y",
  "key28": "DgCnE1ZjHmL3PDaC2npVUyfqMhqLh3xUALLLaHAaVSDDWYqTqBqQ1DJB1gMCiU1opz3X6kj7KXPTcCdB5a9NRit",
  "key29": "35tj1tAgkMzPnGYxJFo4PZDxyb8F9JWf6eLz5LfFX5Tm8Ne4DcXQ6RVYrw5FA53VpmJgZ6yqnWyq32ahE5eEkLJv",
  "key30": "4NgsHXJgTHyMvDDYup9epiKsCwM9LiWXBbcyoKNC1Gmb8vTdi12PU2QyemBvJzX2iytNbA5NShmiWhJ626Tv2RW2",
  "key31": "5jxfLgT32Zy6kq9jn7aV5AFwMtzyJjTmCT3R9HCF5dRVdjrG6CtjsidwiwPTBjdwftHkkEC1mpskiTpYJp15P22D",
  "key32": "3bAweM2iUojibGgTbGSNRRcptgx1MDEGaGwasxgZG6vx3Xuvbpp1dxnSnc3f6LR7xh1Ke4rqsN12JDHQmodmw8jR",
  "key33": "MzLU38wHYdYoNa24e6uHaGeQY5uBYgsLBz61MwVnpsF2CGvgHvUV72QW9L9VvxzwgYjPYUPWisHZBcnLm5dBL9J",
  "key34": "5zymDFAj18ibuaEG8T7yubSEBLgtD3EYWWBKKKqwgnzt14ZMtL97BMbEvL7nNnyRvtAHMdnEdme8RUTsi4BH7xQ8",
  "key35": "5rCUkAHqrJc8LGefTbiWUHJFME9QHE5g56VrxHQ9vYzweNJcszpZADLHAQYWwo4Z3Tcwrq86E3oMnVDPhvZaYSm8",
  "key36": "UocGPQkLQ3ykbyu1EiWzpxfaYHFduBjdT9A4VVqt9bkE2iuCSn5nT3p7BevbAtCZmydGYGYtQi7QJGU6RAaZQr6",
  "key37": "2XDYDFYBuzJ5eF178m17MMHZaujEv5kXMgZKpgnvNBbmPn9dRTgUkHv81MScKEfk8cC8Wfgm5X4Vhk2GiLW1s9at",
  "key38": "5xDXw5wvFXaGbKC9Bf7QHHb5rrUi9DnHBd5JfRV84R6N6LhPisrAQkKjpRUUgTietCXtE945vBbgTV2RSWDAb2Rt",
  "key39": "4gG73iM6ggJsLvJ3nUGg5SPBwUA1FZYH6Dnn95wf8veuFoBiByVCJF4FGPM2tN3iGfynYzvTsjNRndvYKLNau5pf",
  "key40": "5DvZWnPQ3DmNX9BYyBjWzURf7y78WNgp219ae1kzuPppoMaCGZNwvMqM2DA4u7xh7xXby4MTuRwLL9AW82P8vyBd",
  "key41": "2cEw5vaM1of2stMqR81RgiMLnrYAB7uyPZF6fE32vX9h6MdNhkwta4m2bKpQhDx4Gkd7BeqdUaozwdqfvuPTxjB",
  "key42": "31vRJLhje2L3e9Y9vhdQvzizC9jkRXH9SQ9EQA385z2soeXgfqBqWGFvnfo5qbVfnwt6KLx7Y9TabGvqxSKG5Ubd"
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
