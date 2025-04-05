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
    "23TmicHxCwsPeN6q66dE3i2zU5qFTbTbdsCWE7r8ecj1nK2gKXLvdtuGFwDZji3112xUdgVENgn9QLLKzcmiUicq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KMkbd6UMJiRMGpcrdA86xovQVUt9iDHi9sPgdXcbf2MYRbmXjTTMGim556eC8hTUYok1qnksi9aCockpCDaJUQL",
  "key1": "2rwJWQH48sGsarxjX5zQDxQ6EYWbwCh9GJg1wY3zMoz7hEp16PLYtuASPui9zvaareYTpyUiMQMBeXPCcN1UsimR",
  "key2": "5Y3ouGCXCdnDgYZXBEaoko9mS5pyJbz1WtuXhR2PuJ4VXABYBZm5zVwUJE97PUNT5FaT82VdLQu9FoSp2Y4sFS5R",
  "key3": "3w1B2UixjkLewcgsbiXuomtL8ctEuesYSt2kYSym1RdMowggP8UHqWJFcobEJXudpXZskzbaQywuEVhvxX3mESYo",
  "key4": "3RQbfnVGVzFXAHMT3uJ1TV5J2313Vg2MWyDX6wSrvcK1sVv1BupSrPL386J4pCiY72ptHgDDL7T8kXNp8Rhy1wGm",
  "key5": "6WEJvPiwxQ59iRcLLo9ctvmkj7sKnVncKS373zc9Aw82i3bZh1xKrKDSAzmyH1uRuhmpj38RnnLAb9qNTKoGoF1",
  "key6": "4ZfTfhbMCTTi2Zch8UauQvRdYsqeMSkQqCGdCYyX6CQe9NsDDQYXQ8URuEmCgYi7YfGT8rULXxhL2ctT96mGy3Ue",
  "key7": "3iLADyHid8ZRjLPkiQMBbJxsAJcb2Mrz6Y7G53j69ovHXvcCKK5rvKoSwFAqjSwbzrfzVZnUuWewWuoXgPnrtFDR",
  "key8": "37rSih2dKhKkybzrisJw3rgyR3z5NCZ5cFqQph7qmx7Zrq4SBCLnzgyAKZMhWBJZV7uakaaRee9NKfevjYAz9CMr",
  "key9": "3tMPmKkjmhZoSCZ4qaL6EBPpMxmGuzEUCk6MU6Q1h57M3XUFbX1CnAaSHLALV2s3qx6yHvk4Ad28F6ppacKfHVwP",
  "key10": "43e4FaATSehC7Nch6hkq6Q3j5GT3igaTsLnQk8ZB9uy2G22Cu9XsSA8Y93iF7ZWZs4HzzJ5fQenKBzr6HrfxXVQc",
  "key11": "5RdDi9938HF1mmnwApw5xe8ps9yv9MT2FQjDRmV4o1NMjcEwcUqpLzXa2gLesRCwUZY5n16LJECfpGAZe6G3vL4S",
  "key12": "3wY8Uhf2KkYYLFrHjv2jJu89dh5gLptgZDcz3424Ge5nmEg4y6fk44vkWKZb2QqCPzpS1AxN4knSPghXki44mcN1",
  "key13": "22NSTbran21kBaLHvm7Hw2iVVeV8Y4ZFmvQtoCVRNL1GzKmzYCtEuKip7xfFw6tJw54DN3EECAWi96Hp689dpD9Z",
  "key14": "5Eju5KPo8KmLVHVFAfciG2GE1sApmFftpTP1DKWFzZkNgmZgoMc1auJEJk9C8pB9bjD5dWfvhWc7o5eBLxuBvnzr",
  "key15": "KwSftzQRVWLPGPzCPHwcVYpS6eH7JFUydakH3G89GG6hCnBRK3Qu2pvJGgQaRAbBkb2Secp229S44hhR2pbCPZ6",
  "key16": "4w4vfJNPGovm1qV2EoxPodZ9W8Z3pgt2yYiQLHL4rFVxV7cbUfFkTd4PdbgReL4CHu6bHjyS5P1tdkX7K7hFDC23",
  "key17": "5frcH6pcJBikoZFPxpTPUSzb9D9ENFJkSds84GkE8eDycnTK9Ra5gTrRsnA3ESupSPP5Xj8q2341U5qNGb8jYRUC",
  "key18": "3tJFQM9XA8PLq9ZWGCb6gzsafzeLbqV7D86guDjiFhrvyDq4ihsirS7HWrQHV5bPVBB2DT1SKdP5WwytFziYNqjX",
  "key19": "35nruFHCUojDPtHBznfoxLpSeSh5HMPvKDjMp7WEmmyH8JWPj4JkmKz1CqvLu42pqa5UfzKMwYWNCLdWF9XaCbCP",
  "key20": "HBVr94UsYPaMq4nBsm5NRbJsNGshtAt4YPTRfZqYo5d5KyVsRhSXVtPx2eqa9KqKvynqEhiQcd7godyWT5qvfVM",
  "key21": "3ZGL4Kby2Nafmp51GyL83VhfADLiA4CWoL5bZrcoukBAZwH3KNrTFtunQswq6HsH9QqoZS2kFfMggPU8x7THVoTP",
  "key22": "4KL5fk1fNf4F156H1aKxLFazwWLqt6wmyT4dHKKn1GGBGxqhhoq5ofko6C9Rsvxo9t711rg1ogkR3nwXU2odwMyD",
  "key23": "45Dr6hu55zzDTu87dJUPN4tcFKm68UhM2txEAWrNuUyGV6Wifb9RgonmA431iEJodM3eZMFG2b7aofkX63ZMGXzW",
  "key24": "EaK3CtKtUiGzRsNdLC9cL2VMoLKyPX4vVsb6RQmEqNVLfnfSyMEjfzibgkggtPAVeLk4PnAkwERh7buWUowok7U",
  "key25": "2ysFLmTP8PNmvS8DwtqXieKJRN2ALBcECH2YR4E5q83quWmKCYb6Hh31nZFJVn9sgySFrmmSXaaxmjN4KmPGeV7v",
  "key26": "45Bf5VPhgQBm7kmuZiTa8dShYMXRGV8tUNGYEys645BMzYCWNu9q1TnAraieS8SoFBeXHJ6jvWG4LjqwnnqqKzep",
  "key27": "26bqmSqC1bq72dd7ihDkuRtpgFBiXTEz9pWve6GUqMcUL5xpH7r9AHG6Nb7HKJm8S8WAeXS6H1fjJ6vrsXbRZpFZ",
  "key28": "2Do9o4KYGxg6dU9872VehG3nLW5YEQjcYoL573cvUKjKiZf1x5CYfna9RaLjFuZdC6su9fpgjJojx3eZvuLFqKqn",
  "key29": "5ADkFUCcmiECBPa71RJ6jRRjyPemUjH9jFqXrFLdbCqdjSpaufokxvGuG89aZRTLaKpoyWMRDj7eRfePjmpVqUyG",
  "key30": "2ft2T9NVcMnFdoniMTB8NVK1PKdVDrL6HkmiWJdLL8UuNxMToAS9xx1mMWEZ9sUuGtm53cHff6YHWn9Vjvcfu47D",
  "key31": "47xVaDQXyQY32t89fexu76jAczq5h8YHNwMrjzCnG8a3gDj9CJKKGoWvSmFq43UajMNCMcEQm7C8Lz57y39XWE8Z",
  "key32": "2tKJovDHZNAZxgoFoWV6QgMVfgFpBtt5Esu9rXKNDDTnVaBYSidmJLtXu8xz2S69ZfkWVyC7APDDjqUbaJqdWGc7",
  "key33": "pXxyCbEzynLALZjkxsULtNr3MHf2MPa2SWYYooAHM4SDZZ3tUHKGBPuLeioS52ZweRrezAGUjPp9sUWCddAs2qa",
  "key34": "2Qk2GnXmJEYUxBarSD9gXstAvisVPbXzJVDdVEM6foYZGKwg1KLWNjNpwwFD6fXbEFiCZqyistmVsiogMtW6vrJD",
  "key35": "5pzfdjshHhCkwgennEDvE5BXYpVANeSLb6dKuR1DYTSoLZH6dyGouexfXJHKByYJD9XcJ73rBQ8UsWnEYL2GjhSq",
  "key36": "2s4NvT4aFcPLBBtGpzSXYBDTM7dHVkhf5BrKqXUCi12gbbX3i5jXeqH1n5jTS9Rj2BCe1JmopnmoJMwhdmgJrvEY",
  "key37": "29WgtPvyRFt1EHHNEcAc4rt6hPBd9ngqATexvaUpHS33VrKN79GQ1hf2JQ2BwfSDPtg3JEmZYQgzy17wh2PskRjd",
  "key38": "nEeHoMaQpL9bmLxRcQBrSacbHfTnf1DPxThB4HjXDsjLdSZkWrQoQdSTGLGQ2zW3wHsoADLMuUGTNAvPRw5Ce7c",
  "key39": "2M7aNhXdMrZ3h2DGFJkC43UCXtj633KWaBegvQdMkmzXBMPZKowCZtbE1H4hSEXF8SrBGWVsL9pg8BFhNwnLz3zU",
  "key40": "3jWLftG1KoBa93uCS6HkxbioVnaQWdesDXdJawvc3yyEuzxREEEKVyr92T7edCynp4tC1wufHuRcSCgvjUKvkHmC",
  "key41": "3eQ3pt5irgUQqcXaSUE3YtMNvxY5jeTxSpKsEXoQ5REEoSkZiCu1UCsG7FthAsbX2x2cdp1RpFryt6p6WDiMhs7t",
  "key42": "3Ss41nkCkiLYtAeZ3J3EYLAeYYXuJTyYKaDGk49enZEYNVV2gGs78HbY5tK5LVjniGLWAj7dE1e8Jpf4H6NDNW6i",
  "key43": "5dDmBdywTeKy9Nk4F8ZVMWVkwxJFdKZ41rE5ZNLcnT6ezn9T22cUichNj7CDAdxaC8iWCejwgtqNGVVUQcezK74A",
  "key44": "37HUcqp812XcjpgXQEEa77L4Hpvn5ZT49W95hB8h9rrZSFnrsf7d9UYDFLXwgpLMMaewaVsYggzKFMQCvjQzrhcK",
  "key45": "L2WF1WAkBQWHDBe8dZqpPZqJiRVirSRp1D1rcBhiyBfTDN7CVftjLChFNgGgYqrzMA9MdX8Bj3aqPua4y7dcMWJ",
  "key46": "54jMEwkDy7waZnN2GPqvGtBYwpuSoXBDdx6E51Kggv2J7mpcW8UDS9iy7b9aPHHsSQ7gGFQtqx9MK2dsa3wgmGJU"
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
