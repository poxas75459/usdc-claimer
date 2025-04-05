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
    "2ftGR3mfEwTQ1cxJXHrGCQ7zm4x4t4PAMVp6Q27WxH5op5PNESQVuPtQLp9ynbA2cewfHruqmM59ZLFHpaUM8Qdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23o1Faujowmgc5PLEF5D7mh5AF6hCzjojLjRg1GyAm8T61bbnJwtyZN6gek4Pz3Xnaujvb7BgqH8yE9iREqPDdpD",
  "key1": "5oe8CEDvYt4y4QoXdA5qfStkkN7fxd759J8UpcpvbBdrtmTLZ44HKSeM983N9EDV1DB8mk6fPYA7CRtcmC59ez9C",
  "key2": "4mG53yHisPDaBjfdbRibBcVwjCnD83sEJk1pttiZ1uUsCKH42UPiUGv5QzxgTcjCyyhiA8CJX41MPyueAwHmH49j",
  "key3": "nQUsdSVpBUDUSqGM5xTsV3kbHH2cswBT3byLLfrDeQDeyo2YWF9mcs9Qjm1i1R7DRrUaLJX7GeUQ8uVQNC1uC8f",
  "key4": "pZT2gqD98BAcNNCRMiYsgWG7DDBAYiKaT72pjWKC8DNP2EeDkXofgBrVDKkQb85yJw4JueFsoFXuzvovRrG2Gr2",
  "key5": "3TXX98Vvu9JCf82jvAUJDQxeg9GeD42uMVUaJ56Dj791uMFE2gWS64v39E44gjGvhgCQe6m1XH6AbsWUcrsWXh76",
  "key6": "3idqEMcycf3Sgmbde6aNgLiqEejAJ31ZWkKV2iQxERMoBCYmRNAeNdBYuwGyLG6mWJomUVnUcEgLWdVUsKTdFEyj",
  "key7": "5K6N3396Qcwu24vs21SLw8DrBq4QvakVhwA2vJBE7bFhZ748t6dsSUokSPVT8f47Hor7vF3CsBhWDHfoJj6ywcsb",
  "key8": "F79gQhYKasjBZufaV7xSatQd5mk52BpLJf449VF8n38bHyPonuwV4WnsdDbD3jLscdTAofoEzdfTEQ52nphzW6u",
  "key9": "2MiSZEk1VJXN73czqYCdVfcC1wLPGS9ZKh1bT5hCMVCakrhLWWTo3kfGznGjEfNeZzpTbbd3XmD48c1242vLLCMQ",
  "key10": "tZnr8oNQPakjgwCeq6naeDU7c6BVKS8vyc86b2M6vbdCtVk2RzsED3cE8UdmyN7v4ndQdnguzjhF9hvrJQaVKD2",
  "key11": "3S1NmWXDVnW2RhGugVdfc5xD3jD1k7JXviaCkZLUDh5GhXDzngMkg3Q7cbsrLDdeF1gwRpCjvLjBuoFjzndAMD4i",
  "key12": "5LjGKMgSQ2kjuSHTXZh7du5Mv2sY1H5WaWDUaD4ssWKzV8HPwN81kDiZc4UCqLmnG7fhjSngejBTWb9JtqVvzE17",
  "key13": "2NU7ReGsMmPH8d2QzabTBLNUDrbAPbViPunAbLGz5brPSmnKXgXKKxSmEN3x7uZH8pUUHU4dKTeXDby827fqAqbo",
  "key14": "4HF2m2q43k8BvRcN1gzYEFM6AwmvmzQBzZX2e9g52EcapNZTjhhra2eoZwXJY1qsT8TQ5QPuSP2qX76gq2958Wsr",
  "key15": "rg4Hh56CgxrKPsoxyNHo2p9G4dvagZwyFvd8MMAdB9YeMfCf7sxwokCPPoGLMug2wUiFAsFTGfkaMMrhY9fYTsP",
  "key16": "3sTs7WDJpT2QsD4sKnGkjnYhGN23uHnEJq4whcCf7P2UwrcwuzmTPA2giiVSQMrg2XFD3HpWNaKaxeGCdu3eqHAc",
  "key17": "64C3CVpAAsFhSX4UaEZbLXX2EScvGqV11wwq939LJoRF4tjbk94GBEWWtXcdQzbu18dJMA6usykSYYER1kQVJu9A",
  "key18": "5g2KwdX7vmno19XMPudYgvpZkeMsx9gbedy8btt1MvG4Qu16wCMNyiDGkjtjwRGf8pErary1pGAiRLxtEtXRcRVt",
  "key19": "54pQgEsNvLs6hRA6Pp5uzXSECChRtsEtufyf9YR5faC28MvYAFLnLM22GKLQfLqQn7w1hRi1Cei5k4wMwcMGsaWM",
  "key20": "4rbCi9X9x3MmJMFVLY17V7TaWv2Bb8EvZysPF2HZR8eF3JhND8FUFvsEb7Hw9vGqSStvhVWSEiVLA23ksQ45318J",
  "key21": "28ytLzzLbpAGq4Bc5bqwt1fPJiKpuruP8jJ4vZ7cCoAA6EUctNKfRrRhfvusS9U2w1uQGVpq4XDmTiXh3LoL54dv",
  "key22": "4tEEmRiaF9SypqqRDw6CfvxsX45ra6E47vvmaEmqhrXYKjzbQnB8ooTaGUC7AKFoqwGX7fsA8djTesmmMGsrq6bk",
  "key23": "4byrKZR7wwnT1qBVeDahX5oVvBzJ5bqYGPipph1FyMufqpeMQyV9JmHGeukyqKYFwLrSwCP3PaTLgFGcsx25u455",
  "key24": "3KWMNAztS7DdbAFZUPizeVnxEzvSs16um5HfVQ9yog2PoVLDUGSLDdZFSHrVpDAHBo17YmzHzJ7Sy7ic7hRFntDu",
  "key25": "29Nx2jqkTtQU82jwp1At7fA2iCvM17x2utq1YAwZkY2kqUwiSVYUWNvhyXe4JjqpzVgXevNT1A1fgnTDWH2x5FBS",
  "key26": "59aYViYb5G8ws1noHmdCzwNJunoqfsuu8fnb6KXWp6jfAP5AcRCyufbGyoyW9fCvJLURVsu32SXsin1Xs6qtiwz9",
  "key27": "4XzQjroReR5WNkYTaRmoGiF9dAaD3vSr9rQmUqgcXp5KHT3kaK5Ej9sysJYTfTTaUPrRyY4dYDUoiqfgCHZmwYDe",
  "key28": "542PdbYXs4hURLWaZybzM8sJTR1xF2aDpdJWpsfjPuGo5Hn46KLxw1ZPFgDG2SjFaaz5wnbRzS3eYzeYZwcuXmfy",
  "key29": "RZECfekwnmJ55BgokiTLAKN3ySM87PYctVf7yYdRMh36DdSNUL4EftTnqbB59494hharT8N1TF9vHm651376tkS",
  "key30": "2Z48x5vpv6WDA4saVq7QaHzan5a933LGHrs6dTx4DHVRSTxGiWWLbooTJUAqgNVfiVprHvSjqnN3YSymmBiaGpsw",
  "key31": "zTsYNJk5ycxVqwHm561heiodgJaLPwbRJe3VapNSWQv6nrBGp6WgoJ4MBcqwTmit3WvNrjRjSGCmes4EzVYAr1k",
  "key32": "yTedWyvUeFKkfFXPYJWkycFapzCwCDpCrZUFD8mxkcwMPH93e8drm2pTWpXRAdPYeZBh6RpDGMPen1L8yzhquMu",
  "key33": "2RQXsLGazZRRYHHmcUNTpn6XYpJV7BAXXEnUjzog5yQaGxfmijtCWrhusQjZRspG8UdTQVbATzNYfP8NwxeEK3g4",
  "key34": "2rccimCjxE9zZs4b8Gz57L2N9ZGe1PA2rMwcHkvdnpamQffBa3aF6mUQpBP1LhRoF3ALvKVw7njjeyxYTK9kMYTB",
  "key35": "MpCV1Hv6s4swuDHKypjygQVyiix2J7UHcnMt5prQ6gmJaCmgKowDija3kxjWh6Gy3Q53ko6GmgDivDF7g5qQWB6",
  "key36": "63MGrQCX2vcxPzhjk4R6xfem5x4yieZ57k8HPTY4PXkgacTRciKD89z6BMQxJkJvyU81Wfmav3qqSC25aoWkKADf",
  "key37": "4qFhAyvEmwvwQmjPxoSDYLNYmbNmk8piXhnGNbDDeqwzyKbL4823nHitu3haA7Tnhxcv17RU8e5Zkgb2xD4W3jhg",
  "key38": "5ymEpMTJkG15tNDTwniMeDDt7zChQFUcon8f8HLyg8BVBzFrszYb3nq681JACjzjj6iTr2gj6aQrPbFQzxiktUC6"
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
