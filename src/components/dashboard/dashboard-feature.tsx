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
    "5NMTtvt7dDVgLqMCLMjUVU7KSGfohnryz3j62a95QroKJMaVvGheMoJpKYFvP3mYt6RULrB9Qb3JiyAFNHcCwG8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HNGEPCmquUkXpnEhukRMKgGeg75wzWWa7ZxP8QVeXXMXp9Z1JaR8sJeWzhKjywvzUAe5QETezMufjrCdeuqXtp6",
  "key1": "RJT3PHSYy23CRmL57DHCnQQumaz26QmBXG47ARqLmbW8d5GGwZQFDCZzyjijSidgcJrhZ64pQ1N892kvhiofPh1",
  "key2": "pAVGdYr9v8dMNTJkvDFMGe6qwyE6z19Hr7peFVFH6VceMkBHsvfqKSSmhneWt1UMxRSuvefkgP5YKeQhxukrwXK",
  "key3": "5668qVLhDNeofm75414DzpWtt8kX4KUi6XgYFsue4S9dyjbPhKZ9FHt7icPrxaetBWagQLXAm8Lam2WL8KvX2okW",
  "key4": "4XumzYsXCptJmqouwneuq6VhiEGUieJaSsy8TsxJZbx2upUumpguucyeN9qdtwJ7yZuCjx1xsm529UBfUd3ncWvM",
  "key5": "C2JcgWKQnw6KjLKY6ggDkhNtRN5iiusMPEZEAtDMX7rQqqmk2YkDdoZMqeSTaJhdTc93CVoQCidf27DvSsSmg1A",
  "key6": "4KGzZXmm6T8uQ3TkqZeAhJkpGSa4hkDENy1uQF5vsvcoTqGoS6BvqzsXtQFBLcwGRS16ruN7bbPoEgWiGBECcFXu",
  "key7": "5cWY911PVbSWBPxXdkEdWZ71gbnxic8yZQ9JF3ZPrUnTxTWWqTgvXGVpTZhyW66GAp58cxaLfPN8NrKAgddiwTML",
  "key8": "3BYGj3kJp3CZLzDKMtiZysJFzEfAzC2SwAT5bEpbn5XdsQbrPM7Vf5V1TpSns2LxccWLe16bJVankVBq3ipq91dg",
  "key9": "57g2UnfBUUxX1GYq4gubQDJ97GyPVxQUMu2GppZapiQccjm1S4t6m6ksvH3FPhfcj87KzjX6DyLomsyKzctsfFJN",
  "key10": "VFdH3hr1vWVBJTk9o6kfPCJmsYSkVZj8eDuBXdGJqKMjZeENEKqzq3htgAn3ZNU2hgJ6N1BECJGJA8144cp2c6W",
  "key11": "48kiJWhuUqma492yBihrfqUxmubQvSGaSqfoovLh7PkabRqJqRSrPWEaxXQpqcUQ9Qwrj1U7dubM9cuoW1D9gAMn",
  "key12": "SxWBnxYvxLSq1vLgr6DKdbbo5b3aLvTnceYMzJHEUJXhGEv6D5nKHBLGM8vVsz5a9rVTbqZxwetdsXh4ngaMNBr",
  "key13": "4tVy5QyPw6FXxFJi7PK1uaKKYJCH5aZ1Z6ufuRkPzZELr3G8sVSbpFvYvyL9qwiwD2zKsMp7NK9ZKE539T3tkqPY",
  "key14": "3VW5pS2mPjzw8q7Gf5qmQRtx7dB4tw2Xg9zXcbPDFMwDd89Fi5LwgTp7Hd5fFm1LJGMRiWaLpfoaRUSqXpBZWU3e",
  "key15": "DLUPZhAFDhjmmxQpTGqFFRnAPvbYAR9C752a2QKF7X62S3irJC7ap6CvAF98Embh6pZot1SSE43p8GefAaJ8PDZ",
  "key16": "5fgfBsqaAF7doRRKEFike3ZDNpkyyNtoHRcEWG56YzgMfQU3fJFxoLSCQvUrPAmNc4h8inBc2CKRyrrXm9kYVzEM",
  "key17": "3yn8LXF7f9vipKAA9ym8SsKn32z2Y2hub3euCTBEYTKbcg28iKtcRsF96qNpWMTnioBnMUEaggjf227V5phcQuZm",
  "key18": "46EcAY3s2DmDaXwbRqERHdwDB9HwBmXJk1zai31itAE793yFdjQN1r5LP6DGKDM5DUtBzPGsBd8SY1u7fSrjtWmX",
  "key19": "4N19DzrX8WfMWjto5NTL9qxxkhmY34tWWhrMiamrE5Rj9Jh7rJR3epvMq5cXvSJNvLL4DCUobEHiFrDD2HJpUFyL",
  "key20": "3XZYoZJFq8W2kyRqcFFANUHByjnhcvdxaBZdg7SAH6YbHyNQKHURcsLkE8UfyYx6qDuznBg3ncNEQ65zRZeRaJJ9",
  "key21": "kTo6eVCCXTq9pc9kuoYpfCVCz5akExe7hxLbSJZyBqkg9JSpKAnNKD6oxrT7TTptdoQ4Sp1F64DM2CXgpA1L272",
  "key22": "2jctARemjdmbFhpJERiAzm8LCxnbvFSXjbEW1ApeABFHeyo8gNR4aoxBgBtW9j22dcwqeXzPQx3QhkuXvsA7F2n8",
  "key23": "4rsctJsy7VGwz4Z1h1tPPXRUnDCMnSq7FJonLpSp1ZXREzk8GpB9PPejRjejxjv94GZbPKnxHV3kjbuTVFjeeKEG",
  "key24": "3oNvgu76YHzdCAnfBRR4R4C8ierZq4H9CCjaoJu5SJxtEtaY5yUu8Yr7nAErfT1srs3P9NsBRnJV7kJngCDEZgGQ",
  "key25": "Mb3vhyCe7eoQUZHw7srzWmpRxzn23NaPr1SFqMZ11TGS7UU4V1psqHWpGWKZw4RWmV12FSpmHuvU54MFxwUnVqh",
  "key26": "5epa7GCjXcs4cCB1VEwUUuijzPTLNiDrhLBzwz6sfMQmUg4Pkhm7c13TaEbywc9b667mmDBjkZvttM2NBT75EATV",
  "key27": "2BT3zmXwCty9JCoP3ZiTJFf8rjov2x9a3fHggkikz486EHmWPzRsxdQJg1ufg5H2UGhYPytG4xGx6wXrn7Efgmaa",
  "key28": "4DLkyE5tNXKyb1uVcR386E6KWY2LPuKzyBtphMs4YHwzJQic9V4bhtdk3CNvpPRMxPj4jki5hnEa24N5bDNoVePs",
  "key29": "3QEfmwsU2XjoscGYFnVgr9KiT3rKb6RY9N2fMxPWJ8iJfB4Dyuxpi7CW9Mo7E2RRTyY22yey75iJ2cvLvsFk4Neb",
  "key30": "2NqbGD6BC4NppqnZZsXmCmxaEJipmv6Y3ZC21rW3aq7kADjwL54rTqob8AUbk8tyWyHYFPC1sAoZuff3SDZUyKvJ",
  "key31": "4QpYqqwqvZpkjByRnwR3dvZWuXrgw16GmU7C8uuzioB9spUxg7XSFzcmtuKFsSjV2E9tQkeEN3sq5r9QM2beic4i",
  "key32": "4EGKX4X6ev3gLvkzoeTeY9NsSQSCc1xkNzQ8SD4aVtvmFkv91U4r1DXSb7DKtCJ2P4g5q9T74ugNmVx287yXVFGd",
  "key33": "2eirQuGpvgoxwPAWibeQvbaiEsveN4C2sbfYamJ2hB9uynQnX1titnNRubWYrgZ14RLK8FjreKmq3TE6NtunRjzW",
  "key34": "2wPcWPrkivyWFsvj3gVeG3pcSjZh4ifEsdPt5PEivx7KK4ioEX1BPwTKhuziPBFueX57yT94nbaxMUvxUFg3C7Qb",
  "key35": "55KN6bSEqmDHHj3jducjiTgQ4wAcg2YdQQSQqdd2s8W9Ue6BzJ5dGyYLWtfpMM2ZXstkGZzv9wQEjuFPf5F72Ukh",
  "key36": "28jgheqVBqYcK1zDSBbpMgbaQApghAS4HjnG8hw5x867e2J1NWSomUUWod2uFCMiUuvboBEGwvXcLpZjU7p3NJ9E",
  "key37": "26dRwHdXB4dtQmaW7nziY9bemgCh4rzAeyxRaTNDeLgyuvscoku8fs4krSXgDJaXHHCWNXR3kiaTC9Y7NbKh6WZL",
  "key38": "4MhBqJLMu7ZDSXbyPs6Zi6yKZnku9fBbkfV3RSHF8H4iLQzoaUJE1K28pQsejfqighXATdLdrYBxg9uBX68jmryH",
  "key39": "2sRL6mMLty555bTKNogXHLUT24b2ksWvcbzKz6T43cjuokVe3GbGPFfvYaHGfPeiUJdPBg1DuMLQp69UboaAQMFe",
  "key40": "3ExmzJJyJdq75HRD8RSyMyaNUACKrH8DZdVLEYyq78vrWBdjo8UzZmpj4vvgc77Kn39hvFUuxw5Gejds1CnHa7mQ",
  "key41": "oNSEJDw7dE3Si7PWeMvumnhxbfxt9YXEMGCtkuYnwoDP78FNEdefNvCRJfYobYA7pjLNa1x5PZDX3BiW7yWgTU7",
  "key42": "JUrKFsbQi6GGRUqxFFxDPwy36W2K4WuQ3EjFBnLstruuo7CPUM2xt33YsAzbpTgfAgjx3eskKtcqM8CizE5Xeyu",
  "key43": "3HBFgLh3DEQRdCUaowpYutnttbunqieLqtpEsbgHsrHFfg8rfGFCTC491A6Tij677ZBfmxyHMUUWCP5YkaCPjupv",
  "key44": "3wNH3b3xyvQHYsHCKWCgzKLwcELkjAMu7FZ5yWgBwbEhqDsjRQVakuHY8k2tqWGkGfz6qmH8Gbm9qybTXXVR616S",
  "key45": "3YtBm8SuegYi1GNpTbyx4nmghkvECnFYJboABy1RC4evJ2tvTMzYsFNgWfndCbekwhNjYqbmEWC1AExTP5iekWer",
  "key46": "3VaK31JPsx9ie4BPZXADEH5L6krRFFk6tJy3FpwnmLJseNj3UCfD2HGT5Pmy8oiHzdchWiJ3L1N1qnp5mL2dcdey",
  "key47": "3FbjZtVppCKZxSt7x46PBsLMBpLK69wu4jjQqEqkNYb8Sy1YHbbcSJxtLzmUukepha7tTBiLqSuj9JFbKiEMeRUB"
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
