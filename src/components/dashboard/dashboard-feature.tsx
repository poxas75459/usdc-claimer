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
    "3CtYgkEF2A9J7nw5TaGXixNoZadMXTpqrcFBhnbaxTpH5yQNZiNQuHEtr7hGz4DM2fZwW3uohFPepSn1pCR4Qsin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MtiJiLn1sFkwqfErM5wExLbaH2anmqBFJs5tFiM8mzSXsUVG93q8x4jbwp2U6d5DXZEdvHtcFz2FULQMKNYc1mC",
  "key1": "2xPuzWgdTQrf4YPw9duoiMKDoPBhWyRZfYkZKrc6gfSKHHjGHFKU9ssH5SVF1dzi9WNTAtTJcDFoiJeQEPB9nqB8",
  "key2": "Qmt7GJ57ZpisfeHULicmt951Nur1huMRENwbtaqyvh8tD53fNxe34mMYLRypASDz6s6iiHYgUuVBSYiiNZ35UnF",
  "key3": "PVs3oMKo3F7fbpkQUhGpAitnNAAaS1uTfdLTF3FwYPKV4xvebpTrHez2ceJDH1qhBX7bMb62qWTofesJx75x7mo",
  "key4": "ry2snmUQMFT3XekHDCfwzevPKuvEkVEs3WeCm981FpzTsC85LAtSWcgbunE5VHJ5JnrzWKRM8FKqVKnWPaECKYT",
  "key5": "2fSrZ4jrCCm1vA8nGuGwGfXr8eHyh95QreBYvEz7v1T2dmHPVTdJYXvMHdvrcDnPDx7TacbHYDqeHAksv5Q6UpkP",
  "key6": "225jKrXE4mX7xyGNJMrd72KpVCpb6N9fXmNSWnaVPVKgwQ6UBSE5RBNbxNdFBxcYhjcN658makjMDNQkbgaV8Ykz",
  "key7": "4HZYUPCHBDT1B99sWgZNyAat5LXycW64MrGPraSZceKf26nwNxexCD94B39HfKnu8jZU2YeKMRWts6oMVkid35wT",
  "key8": "5aTk1iLJgse7EYG1wtr1mxANsKyPJdGrxiHUyHBXmbgB1VEwGmtpw2ZJ6dK5gw3vVRTV9ZTLP4FqMRgf7abFiMbN",
  "key9": "3hF3GbEzcVyBxRRMsjQ5YGsb93m175veAA67Kc9Y2hz9WwDVN2XvbsNRwkubpCALu58ae25cKqHrWBkdQhA2awWu",
  "key10": "5twiLmtw3Epb66ZwNac9KA93dTuCAV9hccnKtksFgEy7PrzLjxFX7Y826FmurNHVBNF3DhGRHcvh6Hpo3mqF3rJy",
  "key11": "BwCMpzBC4F5ZJWbaZQvQfrWsmhraNPyPyN5TBCQm21yE1jcxy3AaSCUKgvcZyLCzxLQJAQ9nUaHa4Kch6XB3ovV",
  "key12": "3USgAxbSfXZzBFpCBaQCCsvLCs4PdTwPNBAp6pn42NX4os1MmFXHLpQnTndepa4TZP1U4eCoj2trxX3NnprBU4xK",
  "key13": "3JJZf9dqdf5RcZpvd5BNNnQscyaarkMLKCJsCdTUAzD4pMCnmtmLGTq3Qk6SH2kLwWF3hzZR1izwvvx9QY5s4c86",
  "key14": "3oNGRfzC17xADW8XQxWn2EyMrUyQg2rmgqpNdrNN2SaMT5tB9JD15p9XHuy4Ljw9o8TTxN2aYe5CxaX8bUNGhpFb",
  "key15": "5WnHW4mibDkkEGRTo895Mr5dUmrYobmigLWnFZB3mSxPEHBbpF1kz1zWgzjZWCTYoL2Hh64PhZ7VymDSyU3hheg9",
  "key16": "2PGAxznDTjRkXg5qpdkNZBbi88DCAaKaXx19QBk3SEGC7bkAqFcynfjcCpSQ8BrG7Cr8dhDBy1S9R1G2jR1q2FNg",
  "key17": "2qdpEWTeoaGMjiusgNomys5fgXFQCzR7YG1dX8qHUgkmxqsgxnGBB7w6KKKDHRxvcYPUjrZWQ14rUHsFxBk8Gnz8",
  "key18": "3Q3NxRr3PdNhfyzhuspH5MZHh8a8vZFsiL53PtnSEtsiVKeJDoTNUd7Ld5L6PbTYpwFtr1zTDfv6JrBdbZjoGDaf",
  "key19": "41d4kzBJi4CBghi7AGjCUKtxmCNpvgEkfNjEYnWTv2smtQtV8fvAAH3bAcz85kCaQgt6HaLzHAd1n6PT6WwjvraU",
  "key20": "53qdDYMGzYnWjPcfGQygzAoh8fdnNKvm7NJXBZEAjpfNdSzQRKBoD826qN24Tz7BxfFAMZ93SQoKeeBZEaqqL8SV",
  "key21": "36Njmt8NiK1NTMSQmyPZwa2RzVQjuUzs7cfN4QQvG6STrVFzzcMKbNXjLmk6wbkhmJCSNrGorZojZ31oSqtZB7qX",
  "key22": "PvXsZMDXC4SRX4tng7PnsfSS72RAYcF2e6Rv7ZSMryDWWbxtcySJESS5pnXDA7yKsoiZcjfkierFLec9QQCrmG7",
  "key23": "heAfjCvRur6U3bC8Gck28QWTEM1e4YnmzkcbykCuB816gBMSLTJEkWqViBiYEb8zXNnAPNob1vKEDJuwZnSz69k",
  "key24": "5cbdpGjyeGpqt7GKaPHn4C79u39LqZGNQUvciRtrUBrPVXbJUUmPbcxq2XfZi8R8TGxbHVeCVMQG5rhGAzaPDcSd",
  "key25": "nCPCfGq8RPE14hPnVp252URxdYZFjq6xa9me39Ln8ycVxHX591NnNfhKrkY7W2jMS22qi1yomEgabbR6J4tZnfc",
  "key26": "5njach7aoU7pMiVc555EaX8S8gcWbj8y2gWDr4vWYH2VpXEfyec973uqUe7pivTjwpmaHohdVNeR5yNmDEgaLyJA",
  "key27": "2EM28YEX5BrgKN6TWEj4m1gVG6bxt43twUsih8AT37pPzHyrE96f8123N3xinpo2qZ4mNbWYZuCppkJGiuhJG4ag",
  "key28": "2uf1ixMHwvtqicFZZw46o4xSGRR1ifwv7fdH8SssnRSaHAbWopuYe3Q6tKvcW9xL7tXZrj3F9sKUkMkqS1SWTuUo",
  "key29": "a55Qf1zodJi1a4j6XzFNWC2pCD3qCpkaPYyF6xdFsqERq1Yg6TDHK7w9BfYWvmBqFM7KwD6aq8VR9DueDmf4xNh",
  "key30": "2b25LEyi16TDmh8gjxszNaFoF9tJmAj4H7dMq93e4Ha9ZC2dNSwk7mTEe9fhwjK7NG33rJciViWh5Px65WMXKxJ4",
  "key31": "4Q7PD91tQtdUDYLB2VVq7qosSCUyaPaj7AHGTwhX9AB54zJPSQzKywq6FHFA9o9ESSmPD3FpJdcAVbujeag2x76D",
  "key32": "5ff4da6Nff9nNmaBaYgB8B68RyBRdAorbXUW6vbcY73JXEyfZQ34NPVKFiHBV7JX1c6FFssPvnHvFHeoib6qRh4L",
  "key33": "44ka444opcK7fQwC4634YTn1Tr6fZ2XtRfTvUqarcQsHuoR2As85drQBAyxtczkMqD9ZjshZvgmzcUmGVhvtJBF5",
  "key34": "4qN7L4YrHcZT4h7xzqvAKKy1fC359gwNqbcy9qZEM8nQgJtXoPghAay9As1xQPQZdwdHuzekH2Ma3XaU7kucjrVG",
  "key35": "4FNFsxBjsVd3FnCSYndkQGHKaLanuPm4ie5vv3FiWjC1Ax2nD2d5VKBs4hs8JDVxheVhfZToJh4xzYanAq8fLXPM",
  "key36": "o8PkP32dX4hPNgyeKjNaBRtnmwNnk9EUYkXRjb5NNsFVTqHtbZVQ3LFvTZ4pTSPy8gTnfYZ3vH8DtzBtcAT43ri",
  "key37": "3FVBPYBahxukRYHByhPdDonpkxrhyDXsU6cdBrvaN5Ts7V2gPKqgmBGMj3KpWsNyVqNjZdDwJcRkyGeHb5FBVNGn",
  "key38": "5s7KKnXj9MoSn7FGPxsZTu4ebpb1uSYfWbH3xz5mrTPx55bsmoEnxtpf8Dq4fFMgYZV65CrSeEKNW3hguDLjSHTT",
  "key39": "5N5rqTqSqmobeS682yozcajE5Fv7aXK2DRaxYbMxMBfC7a8s9KAWqwebgD1WkAv4mwbQ7KMXP2AjDxGNGV59HW5e",
  "key40": "22L2cgu9V4VphXm58oBex2dJBpS7cV4LPsfu7Pnbvfp7bAFL5mkdZXdVz5oqPoYViNu4Xx9NJW4BjF4tX3aD12No",
  "key41": "2oG55hRUkU9Mc6Ex1MMe58xUDLs1tDwtM88JjbddbkSQ1n175JcU3TvZHSV5KCqrWPqkXNXrJVP3fwWnYM846TL7",
  "key42": "48GmYu4pix51F75qXmpKcQfhHarF4kmMT3uzuDCHhfb9RZW1TiU4RDzutWSHqzRdMYnBNkMSAq8yR1ZEjPm3ecGQ",
  "key43": "4LhpGB8VjbrYNiyCAVaJPPGQZmHG26o11ivjLwHNZLqVJFEME4MvYVS2bTPtrdVxHTQKSQLVwF44sLatApyW88Gc",
  "key44": "39Gr2DsqCZaxxuv2jwPordQtknzXcjFpHHy59sx664Po1NqpU8J4wBQwVfS5AKppD6MLsfvJ5gwckokNYU95ULoA",
  "key45": "4VL5YVh126cHQuXiAdjSWz2qyuhvS1AgyDEbk9AxWWAgD5faZrsDWyeyFo5cjFBMt3wi8EjrqwpqupAcdtog2Cz1",
  "key46": "xTzzuVc7kvFKyfyArxAupJU8srP9EBYH9hyXudj2gMWwcRxhNwpGr1nkjbjajqBRAY4p5gLHD2JRqqDeUGGZhVk"
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
