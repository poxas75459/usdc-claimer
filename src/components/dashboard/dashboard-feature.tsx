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
    "5ec7exdC4GubqQpHH6DWNoe5ih8br654nNuMTtxFPVGn2zMxk43jxuSa3gpEiishYdw2c3vrM5YtDRr3tAFPPST8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zDcneht9FzqUcE2JUztRJHS1vn5eHWBoRqdNZTCRezZMZbJcs7GFP4mzKkV1aLi74WziKEbCzhEXzE8LhFZxq5r",
  "key1": "hntDZ4bv8gbSKhwtzY3Mznhbsox6yrK88hifLgQYBVkjGLiMWk7y9MMcEq4Ap4xHhj5Mx8vGW8NAZBntkLHNWvD",
  "key2": "5PNVaZrPMCwezLr73EXYyBH1BAz9TTY6sqEq2iH9Up7ph4LktfcU6pucBG5toXNMyH4BR785mpp5N2tWMQpxiN8J",
  "key3": "2ZsvnVvPm1gsDBdiuBXHGdK8oFMAq2vBCw7SRgwh6PAXrzkDopPS56DrEe9eFkm2n32WpodHV7eosnTAVA755paX",
  "key4": "5vnRUCegS3kPfQgYYJXtnoirAZz4aWAArcbHRuLFAzxLQPUfKcixi4VFwpM5gTt5uwo2QsNxuG2jdWBJT9d7LRAn",
  "key5": "4tCKe3dtKj7psbT5yWuvMgJQuqfso3tWxaRC16L5TMmsRCAC6BLRKmbU5vKJQMYwtgC2WirKMFAAYD5WMWGYADw1",
  "key6": "2ogUiTim6Pun2LmF6JCSyfADfq4HDjDmydBvJusPQCa7tBEuKXdFMasTYMk2tbb9iFtmnzQzEi2kcoMmdmkgYmoN",
  "key7": "5j7iagfXVNTYxRUQgeRY2Rfj9WSyC2yW1er4cL1oJtjchDVDXd98GBiX7tKzbzJjH7gHF93zgHaQpMCcMGCP5r2f",
  "key8": "2a6CAtRFeifZ2aRYnekwG9K3JdwA6NzmSbcbYNaCHiQDG4g2z7fD3aGUGZ9Sbk9vvsASZnhV9V9URQekQ6u1TEiU",
  "key9": "24yTboCfGBcTpKS7j3RKDM9U4uts4kXhWuKrfKRBvKuGbTeAyNfPiwfR2GUB6jPgtTqFCD54M3MQfJLoyfJs7VZf",
  "key10": "AT1mdUdaWiwKMQVX1NGfXS8aAWUwL3751sJt2eiPdfq9yME66gCNvFYSiVon2weUx9JWPR41wbPQzkq2LSCsrDZ",
  "key11": "3bsm67NBjuFKuJQhVWqHzoSKHrbwGvZL5ZXTFdRTNm3c4snkGZqkxMxnMvv7N2hmL6xGnNELwya82upb2S8ACDYi",
  "key12": "2wpEFYnk6S6KuSM8dPGUnnbK8ycQPZagTmu5kpiwGjK53DxXxo8RzRe7oeu6iGUnefCREk6RPFGgN6d1to5U2u9v",
  "key13": "Z9X5WHB7Q8mVFMDi137yVpcdf5Vbx6PZ1AQAS2kE5zcjWy6CsJ5bD2PWg9hYhU75dhSbqbChmDSSsg456vDb7Qs",
  "key14": "3vERnJ3bL7suC8P9XyAwinMtcEEtCYGY3oiNM3eceJZDXE9QgUDv2sVSJM6WNkw2YbKokx3ERDpbXbLtPh8AaWTi",
  "key15": "4tXn2JE1nvA4KuKpKqMagqKbznqbv7jz4MPkCMbRZKzdGoZo8bkq3oS8f5doyLcEUBtprhtRHJ4TENF8WhUvXgRk",
  "key16": "2KADFPjByuHoAFE6mt4pCvApAqRFW3ZeDX5gd3jkQXFjaajuirQRPjf31MaV2mUSQgsXSYRdU5DX2dL5HKQojNA3",
  "key17": "4f1yxQNG4XaLKrmyDpkvkzxpbT1LwTAYMtp6RDEoxVhiVpZ7MYVz6PUxL2gnK9dWZWkMpGv5LeubAX6twkTxuTxo",
  "key18": "49LPB52V3mWHBXiNtRuCazWD3eaJUs4faD5qPWMg7QkfiyPGygMr7moH41MRv14TKin37ckL6Cf1gBy6yvYhyh2Q",
  "key19": "zTJfixSp5pfU7YrGUSD3EdEfmoNmroGfm1WNt3ZRSRpKdXhE4o7h47yVJDZfAAvAuMvp3aAQcuQLfwrnUgznNeT",
  "key20": "5c33tRo52PpFTB91pDmZL3BZFCSiRAVQPgmMf3y9eiz8VGUgSqQ2KeoCDRb1XZErAsBSfDMBTEsqqyzg6nY21m5x",
  "key21": "4Zw8Nkwu6wzGNxq3kC73iv2bHUKYNxNn4tTY4T4YZxRTofQTzdYf49R7w4DUuLYxgt4dj2oVcFen3T9syXrmWS3h",
  "key22": "59LcJdNuM4yQovRkZNJ3iKEBgMVw5pogTqS55xRDUEU2PEPvRCnJT69pToic6tqthV663PsUwNZrQbBS18bCfXVR",
  "key23": "53Q7PWkaS8Wzgw3Jrhotd9Cv19dCsaYNacvyWxzsoMJbXn8YJBEK4Lb2RVAZU44N5T8EiYfuhMDoqZ5VEWjnhtYh",
  "key24": "o6Vi7Vtf9qFTqowTGX8xEApwtXrKnTaSJxmF7KaLPz1eUqckLAr12dXRg9saCVQUuyLJ6JgeByQakUYCvQqmxM3",
  "key25": "zmUfxhPkZ6JTyYDNTvegeifQho4fpeesJPPt2LD9S5vn222mgDcsWGmAJpU9qjHpHHffLNucB9mXfJYCNwgqPjR",
  "key26": "5kMFsUATF3TGz9L2MzJgHASRfXuZrxnb6iLkmVFndKThhT3TCBc4GRkFLGyMSCcYe5bbXK34Pa9XfKkJZtFb9N2Q",
  "key27": "4M4Km8rsAKygdstEPmtEtW1fo9NxqaiYW4g9sECqbX1hdhfFJap1FK8LuSMkfxfNLFWQQhJTCKPiTrAdbz6pZzP7",
  "key28": "3p4uMHdifAhurcuEaX8oMcafip4Ts8Sdc9GQbe3934KNW8qe8UdZ1ncjMnrtnrmk58iw4WgXc78e3ktiNK6AZh1c",
  "key29": "4MTkBr24MLfWyPujC412xLksm6rmNWbEcxUe4DmCNNxVqA87CYSmfGt1uqBy1bCmgFjkoYwtAeT6DK1TQQrVQVb6",
  "key30": "rQMq6RnZhE7dY49aHDWHjcgb9q7qvgL7buSUygPPLW7po4F15jYTDMLpZNVz7qHwnNW8HceYiCe4PQzfTShMMpK",
  "key31": "2vvH8cX6GXjdGKS5nSzhc6DDKhyxatPM8LxW57VTR7RX7T8EaMDred3ymFq27AdVQjadEymoSGxDk5JEbJLMq2LR",
  "key32": "3pyVkCNUWBHfRdos4NMmfwDQ43LVaYJPrMp8f7kCkXpptk4yHo2Qo8GLxL75wXnzpSFLPCHt2tdwNqxpKrQGC2B4",
  "key33": "m6VR8GQ8r2dxzAu4mzbAd2hnq9cKHg5sH6UN1KRAiET1ecg4DF7Ek59ZMFA2JAxQk3UHrRPAN1uZCovS8tmM9ZW",
  "key34": "7HMUwymqJDNGe9gwnm3rpfRUYbKPMsMkzZVcg3vmGdmXhtDf6zZN6hDArwPicSEMHn9K1N5jEUR3KVSbZFnm2o5",
  "key35": "3JmsyKjbW8USPiuUsdbuKndNPcbzwsAjqCbxTo2f8GDmnLzJrGh5xCDEF62PxyBqaEyVaf7yZhcjTBQZtpqpjKy9",
  "key36": "3BjuRVgou3LSaLdXk1cim6mXXYYLRvchBsqvqNKwk3vtt3V3YNumfAjUo2aYKchM3EpyhXfbGZRTQqBF12X9WYGS",
  "key37": "3UjCRPfQ8koiSMzhYSQK9wk6EqppMEzA6Xe5G2vRq1XRxT8hKGoCWvXrojU2EARUXtyP2hcMer4EjbagCfq7tXY2",
  "key38": "2Y6WRXuqtz4rJsZKqmnCr5dUgCYjVpaGj1bxARdeCxytuf8yhQFDe5EcUKNiRYry4wYwSfQkFT6CfnRwKNfij59w",
  "key39": "R3sWgce4HC32KU2x9Cqv3Y6GAzMvNFszk35D7oYAEBowrfBqfTePXvY9ackCEeMxQ2dJtvy1CwaAvNEx1WCfn57",
  "key40": "2pjV3WgrP2Yp4ztGHPjHdYTFFALmJr8HL9kTVWMNrYb8snMRsMCMfKdHvTtBxMJywVyP37v74HtBx7fkthY5i9Fk",
  "key41": "36gHgCowZLzWpPgPHpUNJxfWKpbVXQR7qQEaFsdHDKa3SiCHck7eY5TLa8pBydkM1AdbK9XcZ7M2dTQFiFzDEpJg",
  "key42": "22UDTARMaeZfwEW8HL6demkTouLD17kKF6xeoAXVXd2kNaE65t5Khr9UBvncEgdMotcAy2Y7TCtLnJVXVUk8KmAT",
  "key43": "4GZi3U6wf5yxTvN2eCrtEdZBzitJgz4kDeJ24oz78rmxS2kB2Aoo4YjdSK7h8uWy1e8QKQJCZGzHVfPdkB6S8G9",
  "key44": "n41tZ4JtpYE5DCgADh5zLk6RbESadoTqHohvpkjJ21EkBqutKdprVXcL7oLEEM1xe4BDkCerNDESknyQnXmHX2A",
  "key45": "H73AJCiK85DEaGPstmGA2TySfkTEYDzs844ToqeiKDfiubUiZkbwPG6g9w4HGs6yLaXSBih9vXa5DoGzSmTg5J1",
  "key46": "38oKVBQRzDbZxKtBjPtkTeDrazSAMVRxQRQFBpvzYhVdzXg6GwpVTmYM2pBeYPCDXmwR7D9n7UpZ8RPyvmzgQkEj",
  "key47": "3EYuK2CNTFZ3SHqf7W2tfukcbHxCAa45vvFsQ1BP3wa9psnhvDvghJQ2XXYYeshyggRy73UKpto6sh7NYrCdigQc"
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
