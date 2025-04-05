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
    "5io3NZ44MoUTivcdNWbqsXkZYWCQ1SmF43hUhcceTfahvCNKN89vdP8We9N8iXfwXZrU2EQLF2HU1rx3RosWNMqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pmcPuBgXfcTSVqZRCZujSeMKRtG9S1PSjeC5GC1TmJsheMiifHL9hxLvvCYWVnPgeS9yDD1dsmpALVFWwFcQKSa",
  "key1": "3DTt8qPHAwhNmfhrFhAFPCWx4mqzAp3MU7dcN7KtjtLHk2krtzpwDy3QvMz98bY9XyyjzHD6E9Uy1NQWVbfPnycj",
  "key2": "4VxMAwFrBjtWujZ9zNbxTyeUyWBgQBwjrkG4hncBRsdd66cZJxjiEr8G2pAhcSjckkzttWMQkEiFSadSEhfM2Tdr",
  "key3": "3fhA2oGfjHXGQnPd1rRaTJsZqPsQ1BLpCQN5CxuGkNJJFhR955XCXenzis6PT4mwFNGrRWyQh4GtL6xejDitAjHR",
  "key4": "3HqUUhw9AiEMM5tN42tfuGqJcAsytzehnERrfP5xFE444cEGTi8dKFMPkhvcLAZnh1mZdHHuPTwc6onqRnY1ychQ",
  "key5": "2wgWBqKo5KFMASkh3UnctffrLoytyUzbmAA2cwHDz2eknq6s2MErF6xqfLGiuqpUtnNbn9WbV2EtuBFdaFDzPNNf",
  "key6": "4AeJgU9B2pTNVztn2rXjdeA3Pfq1oXRDoUfS4CdJShPY66bztM7ScVaF1BBLgqJo6HtDCC5GiYSdMb4aW2P9JiVh",
  "key7": "225ABGx5YkUj57TS7mSvHLv1d8HyjQiQdCpijv5mGj8Tn6vAJG8mHWRigtbHKMvNroRCnQYP3coStUf2puGQsfVu",
  "key8": "3L5U4BvnZNNckRf5kiYQNUWpMmWrU2Tneg4SYjEtJronrj5L5BEnUYaiF6z2A6EXHGPUtneFejCY9w4zC72Wq6ve",
  "key9": "5cQA8MFaLQnummmwMEFLmN9E7GRn86penCjX95HhxvTWgvwUySEowEPZUDBa4Sa6a7qbQycH3SUjbMJEs5mt9D1P",
  "key10": "23LhJiBt9tmpotRq8awMLFRGJMQCZcrfToy18dcU16P3aEi4JAfZUGrUY8uXmee3ZvGKWRjLwYckX3GStELeG1mq",
  "key11": "5fFgbLbJLhgnYKo1b7UkaRvnjvanQnk5FLipotL45dxxEjmCsnnKPBGFTq5CpszjgqWiBWwzAgFHWjZn9VQTjFQs",
  "key12": "3puwMHuETNrrwfiTmSfsba79cZtHQrEV1u8a41QYbTT198u7iw4GKqRkvGoQ9VSNgV6RfreEaZTaYKbmoFa8gtVi",
  "key13": "R2FyVRJt7ym2PiFtaAyZuZ775sEvLrdxX3x6E3C4nGWAk5hYCBLYbjVRkiyvAMCiMyAktRtskC8vvzwnTvucw6i",
  "key14": "5Ek2Z56dqDD848546QrwTjp4e55BBfmRhB2gB3DZpxcxePSFkEKVrUpAE8Tdeos1xnJM1M6U2NaihUD5aTy5XR2z",
  "key15": "4Q316LdnEfp3y7VCYX5eeYkJj792ZXrWqiVtF83hSdnbWh1kAJHMEJNHDHxoWyPGAK4Rb2r31cxEu62uR3v39SXL",
  "key16": "2Kzi21iG98HfGLsw1EzzFeAerp8kz1G4uFXNK4XtUAfWjAVhJaZC3nrgQUBbyi3H5pkvL4R5JmWpG2Cp4tFNkdnp",
  "key17": "2fPgxntsWTqhNbQDea9woBzy4YNHoiAHx49tZfpSQd4Eack2Tj4ebka181wmxSegJg38dwceGVDaaA6rq3FsVbTB",
  "key18": "27mLFeg8K1J8gkfTNZCUz6RLyB2Y6i6CCp7iTo86sawzXkNKkNJzGTgWGZkFqW2XseJnti6yJKgy88qL1gWy8eMa",
  "key19": "3bZQfEZPd29feL5m6c6x69TW9gD27SGnZTP6njcJEKYT345sSQeoWEBWeHQg21cKvGFTYH2vPYw9GemKGA8LbGkU",
  "key20": "51Sgsz3nBQE6Q52GdkNnZBxMfrnWJCQ6P7HwfKHUTi9L8WNHz8qL9JcSyr2tKkEhtzcLUuDnCb4jsRsAbaYBT4pb",
  "key21": "785262vE4hVNms1TYJaH6sMhSw6JVznJmacqa9krgYDVjXf61Vqr8Gj2Kkab3Z5dp99yv2qx69FSsQY7B6WR5wW",
  "key22": "F5XjgivjFBHQ6pAZiAQq4o7JSjHwSd1xMUinWfjRCpZLDxhgxayce5uMaQQtZvNqqciWpnBJdsUViy7Ax5C6BZv",
  "key23": "3dggTFV9QFhPDsL48FRPhDuDQTuBvViiTwbbYBdjx8v81jQc1ekQTMkp4VPoAgzvYX66jbqJs76p2XZPn6xHtx82",
  "key24": "3A7TJghgtoFRVvKhUfJ4oNMYjVDNoH29SCWSqN3cgerSnctgLAnr5ZqXYNdH6kw3bfq7nvu79Q7nExhsDc352Zvq",
  "key25": "5ruMbEEiNmHV6aTvXHe6R254BdXeYu7AJusgtB2Pe62ocowfMXbCZTH77go4JDbn5gkjotjPaWoMVbtjzvq8npG9",
  "key26": "63Uecka784kfJYmkBbZRLVxCqeYnXGYDZaxpNySnF7BEfKNHkgXncxt1obTNDWWNtWurhLMdQnaKw2xKGh2kUDwz",
  "key27": "4KmxtsgHx3dRro1WaFrddtyxyqXwmA8WwhrTmZwmoNqzReHqiw53pSeC7pt1yzxBKGBnD7wBTaVpo4Jb7BYj9Bbw",
  "key28": "4Jtxye8vYzaQS2UVzWzpdRHLSdzm7JA3VFM4Vwr1gkZQD9F5ikodWJA4F7cEoySMaUDSY69QAA2Sxbi1MAnfC35e",
  "key29": "2R3fnDd3urYSH9cY1hdRRjUTd7wCBM5YGGzo9FhM8V3DLH6C8tQBiGWq6rotcsE1nU3fVrJgh26WSb2HXz8BV2wQ",
  "key30": "62856RudxZP4qKPL6XVVH4u9R6brKFeeXaRPbcmH56Y6v5JXDT9WToiU3m2fvpTTpBXcbtFuG6idTJxAvRCxQpC5",
  "key31": "ASUSSt1gDEzsqD4VhsvCRqB7MjdcFxz1tjkaG3XBL5nh9UdDSXY2Nd2K4LC92UEgmWiakCJxomEPBK7AUq6xtRG",
  "key32": "4h6M81Wk8DwHtqara4FHkedEMWHpLPVYpyYRxh2ZhAgD3ceWtQ2R86asnN1VqfJPZ1MWSmeFqKQLaxNc3Db4Tx3V",
  "key33": "5yKw36ym67k8hY7BFMWNKjmp3A82caM3FKwXCMEJJNMwGtVTTDvCohDWxyCYJjEFPS2j2KLKZTtRLFh8Wy9ZrEZk"
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
