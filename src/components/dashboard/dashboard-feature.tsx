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
    "3wn77ySVHHrEnzhqhTeXhfGnkYnE2TY9jHfgnXn34VoPaLGWGtPzrnNGPoHX7t6b2zPeasJJZC3CdmXyTJX565D8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z3TG6ydXSyRFC2KoeEyStF3bqi9S4dfNDovcoXUTxyZKAvF4NJyFsRy5X9AvAV8WEpiPKdb5NKTubDG1LEkYfmf",
  "key1": "4q1UHemqp61TSQZPQ1E5uQdU9TDTfwKWxKZw9ve85bRbCKWn8exBM7Vjj8qUBdbEszX9GQYBf4cP7Scjf22bAU2Q",
  "key2": "4KZceHSMwk28SRyd8DgSQ8jty8R8RfVX96fr6tbZvPnUdSgKF3tB3txBHzmsFFpcs9ZmDoCZG6Gx5myi8Dt5w9XY",
  "key3": "mLFr9DMDjHCnbUzJrCTkMEwHUsmmDkfYPFZHMXGxaarbfmZz5Virmsjve5MJ3DPpwSqLFSPybqtTdVkjpgTR3m1",
  "key4": "2jhj78SaAdSEdKtTpRDuWmit9uyaSD2yKzWPeAiELTKheCn4qJPtqaC89PP7zRKbDjBtihYzii9EXGySF635xtFJ",
  "key5": "39zqMowiCD4sz9dzRhheFU5AbRQ9KYMAVh537BuqfPuGCirzEqf9gA6FQ7RVRitrcMFpPsXhNLuUNWeXjzYWBrPH",
  "key6": "tHbH7SRjCwzt3PeyQf4XXBT7SuRjHvQXYzXmdsNGV4hcbrPs2oZUSEKQccGSfpjVZCu4V4r67cM81db7gjAFfZW",
  "key7": "43SiPPSc9Fr5UdqdP6S3XRgPqHPnQ9CvS1yAMvxxmXDYNyEB8nzJDevkmLhHkM5AfSBxmixCsc7ds3YvpSoYJxrh",
  "key8": "5KztPzpUuXxcfinSxDaAUcaBkhZGA25chkx5jcNGSvPEiqMqXhh7hcCwkMRbuENLHo9nceRUVn4SL2QLD9Y1W9bX",
  "key9": "5Cx6EkTfTmsRkfXfcQvkmuZh629JjH23QqZqAVstYvyS84FKmVL9jkhmQowdYUzYdcqi4uGMLeVAQ18QL1PyTAbu",
  "key10": "2aqezq8xW4L2fw8zyaiMS2i1AfSBnzaBjVyaBNTsvvy7edeW5YWHt7Uwk3Jd6ZUrYinJsDs2sMWY8GcZSnBSU6u5",
  "key11": "4ZzNGJXPDZxeWKzjhvJ4NTybnozzo2wRdCN3UWcReGuKLSjCX1YBwgLsVfLVhkm579c3RzANXrWQWwR1rd4qP9Mx",
  "key12": "5e67vkfXJ9W89ZE1nZnkEWxnepq3WYKLm8ekzZ4eP1UwZmPmsY4yTdvq2wY8qumJCT7Lmoh2ZasBWmcdkKc3C85F",
  "key13": "5oc6kGcqXpqsNdPHrMHpXkhDk5w6adUM21KqT9jCGHtuGfxkA7N4cxNXbARjUmbDsHNpy8N5sNkPwKUuw3NNMQFX",
  "key14": "2xfrgfu3TvQurQC9QfFWBtAAzKr4bLLaJ6VjoB7Us2qyx68bMXiysJr7EZzhkVde1QmQXB9NqLNsbF8Vrwqw8sD5",
  "key15": "3Pg4bzLqfUWR7tR9devcpLHTpQv9UJP7kwZiLUNNsiwgxy2eRCL5jayT78rD15VEzAftGCwPApCUEy5ypd731gT5",
  "key16": "5GYJyMGREMYMNXMbTkUN7dtwcHRnWfYShcvumxTWPam3mM1SHs6wCxjZzFyDEZGM2dFRjsCJegeX5bwP96NUPHW1",
  "key17": "38E4btHQTzpSSf2Zzu9xT3CPHk9tZzMZAwWEzNgsAAtBtN2VdDgoVS65FmackLnPyQx9eAUQwytPpE64Yc4x5hoj",
  "key18": "4zihu1HcRwoh6nKeWE1x1yzUYie8f5YxQD3segs1Ctiec2qDFR2qq4vviTTBdWdAdsfgbBndWsY45Rj6pWWFk6oY",
  "key19": "54KctAJyrUu2pbzfAavoX1AcsGC9CDXvL3oSLaFLzNGw79X6PUTDxF5rNfF1uibJfeSPW1r5u8AWuacDRdFJNaKN",
  "key20": "22WbNRzrCSdJzdGaeEvqC1iKzVaCHZ8qtYm67Zne36oYV4VpKFE4QHAZiKKaEG4Q2dyfRGYMc3bd7GKxSt2Lhdbf",
  "key21": "TzAnGfL984wEakQpPxdmtQbXZ9xc96daXoMqwaj1yzdk1iCsQ6osnguMKgbf4oo6BTmRogrxCqu61RzaWsobzDH",
  "key22": "2bPN7N3nbEc8fWhNbMGUK9EJQvUCEZL1SzxLyUnmb3cxKj6RibHG9dShUhsGtuPJ4csK52UBpe5XxY35QcK1gtpp",
  "key23": "3U2Qiy2uqcsEkQRKQJHeKsaCJajxcNjGPDye5dCt2Yu2NTu2BYwyXzNViNmfmnrSfL8eEc5fZRKxfe9ic2isbrpD",
  "key24": "eYSZuTdnYpd72JK5bJShPdmu5sf9jjB4DY1sSJvfdFZgk1wPPsYgkKsBYuPhVzkYTsKCQ31djqWoL5Qpnjmjdhz",
  "key25": "5DoyGeg4p7FdNXdUhPDVvwyQrjhVxWcfkdm9a6QNAfhpTt4LkEAwUesbh2xuZLnx5nuxKkDh2bqLdck1QtSR2wm",
  "key26": "5XGvHqrQEF6ULt6zoqgUJ6vthUxGpuT3cs3kujG1NgMSEbQhZeuddvgF3nkEGoEx8aGfApWkeZLbktL9ZkJeM6Xt",
  "key27": "5DrXsYtpBw2oEwBCXFNAWYpBTNnNg4Pu9KYpJV4MA5o7CpazyodTEGpKyLnhKkdKEtVSpgQ5EyBP2J55NMwF3WGB",
  "key28": "bird9htjWfWSp3Dks8hk5ibpAgYxBHdsH3HLkFSKGRuFqru881ssr6UCMvEznzta1ig4LcRLfJ9URv8dhayrDVJ",
  "key29": "4nBrehv3xtp1yVrfmtKcn4BXtPhnSduAv4FoFCkvRaS88CAvoboVjiRwiHdWvTnxtvjd7vRmJ2rCjV41KDiAmfe",
  "key30": "45HQfdGuCFwgpqRSV56N4UEiUnQJ6bGHowF3VAny6aySmQ8Jj34XGzVzXMZXcWCyKjfon9aug7cwYyC5RmQeoS4L",
  "key31": "3FsCLi1eyrmPpnauMVdwTVRxMkd2WfWknG4vdHFYF9ETujbQNr1SM3YcC7mUuToZZ6q7eYQJPZhLunN33rfA8drc",
  "key32": "35DEstTJd73WqB4VxDbJpn2E3jtndkzwqVK1rfW1SgnPa2SZTh8F4Pv9guHBCb7MceruPudGqHiUHTrQoCAg6ZrF",
  "key33": "YwaFTcNfHYyjJrnxN7sPSbFz6cx5mAtK1SdjJEyCr5hF3Pf6Zzw5JiAkHsNjWt6jad7rsb1dCiwuANdCx5XnF4r",
  "key34": "9htXSnrD2HPiMjhK98w6brARqmUdWXK6Q5Pofvd8jVWmpqjwo4Nx1RUEkkhKxzr1HovT86BJnbnjFYHMU29mcWj",
  "key35": "5RmtLPDZKoWtwgLSnhsqYEBcFLzZ8YFL2y8cQY3jQNHuT9FXGc1RR4tR3x31RJ2nBrcTDdQKTWSx3iZvjXoHE2tP",
  "key36": "3ffWcgaiuVrE2bYo2G1m1L6wuk1RZFW7ZcvEyGagba1ts7cM5ZuDaous6yHNPcMQKFFHNsfPzEKb1pfnPMd86J5s",
  "key37": "4SiRMmugSoTUdCaT8n8gPohFotP51J7p9bpsaQtF4NouP9J8ZK8WNseVde8efAcjQq7JUjVDKtMLJTZ2ickviSiH",
  "key38": "5MBQJkYhJy4WX3s52LzapappY3ysJEpgPvS13VaG5TNni7pYbci8ooiUB23jynb2jeoMpSasVLDjaodFuQyZdYEj",
  "key39": "gnr1JmXhJ2NwTn1XsDVRQNQD5Rm3LGmroQktXxMiyGjaRsbLAgi1a51DDNzAS7pG3AGDYTGJwoQV3sXXLsJFDcY",
  "key40": "53q1zsvFaifm9ncH3LZz3M52R4ggnHGA2k4UdBpWgpFPdPgnnu6FC22qik4eAYQ9BDpo4ziFZgzZVc3AF3uigbEg",
  "key41": "23QiMmRshBvUd9UTXdjzT6qEVPWREWH9gbGdgrPRyd3LB21vB4xQiQMnea2mEnEZiPRRDgAHuM4YAZVTLoNMnbCE",
  "key42": "rEdjALVdjKKizjt44fguY4T3iTSNqFib3feE9nK8U5ygjc7fyd5bUTxZqWpy5A1n7kBc51tcxELobJCPyiAqpBJ",
  "key43": "PHZodLkPdAFKS4MB43LiX9epoLqZdoh6Sc4MM1SndkJRsUyBHeWBEBSAMkWUKg4axxtvL5XMRZwg7qPcCt9h5Sq",
  "key44": "6SS25mmgQESKQVyadPmbe2McepXHG7A12DTH124CZkULnR6BHSZ7jpmw4xSeWqgpUgXkYCv3K7aA4RUucYiaAas"
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
