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
    "2C3YuyFRwPpM47KQKCtKjEuj74BappDzxXijAsx4rvjVe882GevAMGaUCxiHLqPfhrkCqdfjwaAEehJFt2TWoFna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RbyfRTGHxCUGNuMJj51xLronbbCjKHLvbW7VtvxxHU8wpc7XiPjs2xtLkwk4uBsbW9NabCf4Y3MLFtgaWkv3nH4",
  "key1": "39UtUvLoVnWFUGb2aZaTYX8NN2orwEuQpjdEZza6Mun8iPB1LfWbdD4ywM6oHGFQy8mJ9eiBTEuZ8oenX4WM5r1e",
  "key2": "2rKH34R8T147AVEwUaLwquqhZgNfesd5HvWq6cWU45gYj2pbiPgoYzohfbMBRNNq8ipdJP69Bw5pniKfj9teSo1D",
  "key3": "cJQnsMYZhAPTp2jBoJdoaGr3NTyopXBC55tzAW7po3f2VEkjThE5Wb986i3yXxtESHvWntnxHjRHTfd2Xh2aBUZ",
  "key4": "3TUjac6b9fZUNEhwLr58Jwh2qPoWzYJij9MJnMbvM3YvG9NJyjkxDVw7VairaDZ9vysGhqCtNJFdz7Rv1u8RXMpD",
  "key5": "2a22EV4wBJ5K5CXBR8ZFGf6NHtmamJC6m1oe1axW2WUyhYXdu8fSUf6esviTmjK1pakuAyV1AQ7G79FSvJniN29F",
  "key6": "495u8DGxvvm7dqf1WSzWozVMBGmgmUiySRhJJkP8FpRFCDYDYaKFCj83tg5k6UpwyRJ7oArgnzZyCKSfQSqSzQCE",
  "key7": "2x1FSQzRFDwqrPo87w4JpCdtESvjCCQRrK73xwUf2RUARRRHG5aMF4cRiYZY836mpYZ8GWogcNshXztpPvm3EK8k",
  "key8": "3UgamHN6aPYPgHSPmfLsexcBfhZkaL72BfDyvAXrVhURHMuZnpgBekUoqjp1DuJCesgu8F8fC8fJRVqMk3fQ21D2",
  "key9": "vAajDoVu6D1jQcCkuZeqnFeBnMkPzN7iP66tGukqgvAKkHxPtekDRBiwzf136YivcVsEAVK34vqjEQwiqGaJD2g",
  "key10": "2gHwnVcHZj9Cmsr1KiHq82wCjuhkMw2vfZpB1rFdvHuo82xWNrwJhGzLLUgjoBf8Srzoai11gckWr9WcHaruk21s",
  "key11": "2S3wyUnzwPtJQfanQhCCnPDXypABWABQ7ZJspvqf1MQ9co5BH7xqowB6LRNR55VRdvK9txNxKaFF6VFrDWBDhjZH",
  "key12": "zG51tjBJ3w51DMSXC9M7P4tGPHfGgUhDMpq9a3dvP2kmYheW7MCXLtQgY4H5HWi7GUpEDnvQDg4kz9B56sZdcst",
  "key13": "57AE52c5H6A3MzNLvnGqnHKi6f31U9PwiqyL5Jbpmim8cJ8hSDMprJXNCEcMV8F7CStRgdADgmrmMGReuAK5pY9u",
  "key14": "UBmeBVMZU4FMG1H8dhLa3P7uZK58688LU4hLrw9i8jNx56WsSqggrkjFgA8kF2d5bmWsR7vzFJBsq1mg4B18wRv",
  "key15": "5WFhefhNNiH5nRTzuZ1B6xcMw5yd9hWDXsoQXcraTWF5z9EEHG7XRJG3zHZWmdBZRrRYXWLYE4Ewuqd9LGXEiSq8",
  "key16": "mGAJCRtmAhUSHv8NScGoe72vqRxG5pEddSin44icJvDG2CKzm8dDWxD3iYKcNSNVsmmhDpDKMY4F5gAZDPf6RYh",
  "key17": "5dxv4mX8oRmUkbE1M1t8Su9dTx124SrMKGyW41CeYmHSzdcwjdf1mzVkhH285v8wZreBrWQYsFPhRk5wu164QKsk",
  "key18": "27XNjkVwojXuzmDnp4ZjZYs9JgnVBP6HJGT97wGkzBWE1X8TZSnM8zjpnLWCJcoiTG6ENfEigCDkaXAZNKdLxVNA",
  "key19": "UEFEQkgZuC5NGVbRG3NfvQtGejjoZ1uN59XEr7rocNmAMGnEfbiX4NRgmxqpQnBQeT2dhSjndhdf6LNPGGEU28P",
  "key20": "2ipmMBxQAjGjGEWeP447fgiDyFVhFo9TQZtEBUH4pLa3Z314K6fKxKjwMAR8qibJNk6Q2FHKR3g2jZN8KWztFmBU",
  "key21": "2JcsP2JNi9yCUAS2L9x8GGHf6pSE6AeVU5q91KeYSj1gDxffVSvmwUyngk4UsbyxrNT5KDHpKuythirBe38Wy4rs",
  "key22": "5C2JuqFNaaHPNvSKsS4qqyECakwc2Na7JyzJq7yGa4RB9uL4ecbnFhs6aS2eEd1xFbV7XLdhQNjRRBYnD2WwUsZe",
  "key23": "54zYCpUWrf2qpNgVUEaKdGjRSSAQT9UkBbfGSfV2ARnX9snvUqLDaZH27ox2vpm2AeKmEZP4rpPdGbaHUQycF13C",
  "key24": "66cYUCMRoYMhRZfM3uRLK5JWZoiTYbPvcVm6U2w1jJDZE3ndnJLtUuLsTsHM8FroULecPMXYLE1JPuvoXsZwifiz",
  "key25": "5RHa3cdB8QZNcVQWxTqtUbdu7t8rLj1tajADcw6SeQ92f1airSfKcfYMCpPFS5WAsVes5PesTbiM3BdkPon1Wy7F",
  "key26": "2kZoQQAY6DR3TZBMncpGTrhuTmPb2AFcsniyzFKTe7AzYYpCWZGJuzQ8vTJyxfAGRRHmZyJgnhmbyhytzkawfH4z",
  "key27": "3y7dYZQWjszhJ55es1h1yodShg4Ygb9zRLZTwW3NPm4JkcVUXRYYJHqym6LNqUB2HGkXr35b4xJFEcWKmWTHQxKA",
  "key28": "5FwFGRvb8zyVkNvj8L4huAK8P5EpD6GUPfFWXQfbUXvTMd4udChkUuvKHJPATUVwUFcAooGWHtWzKtpas2pVRdcn",
  "key29": "4yvySVAVHAcX53iH5cEVd1viUz722rGC2Hr9eVjy1oKY1p84mRaYfwFap5GEtcaDrbNN4WztYFgP6SAD3jZoF8SQ",
  "key30": "5soStUMzzVR8i7PgEp5G5g25AriTMdF1DYbFLkncvSPP91yBxYwcd2xZgFpRSaBYKn5uKMtM48CxnnyMDmwgUBCp",
  "key31": "5gMpWkKkh81SpPJZ3crFr53oPGCgZ6LSD8ESm9GzthC7zwYEMkFHvHgVbgd43a1gUMwXj2RL38AtwqQCASeKN3cu",
  "key32": "4Uy1C9pG9HUz9pqhzVpuesdJoctpKZhBQrxMgztLvVeuyt64ZYUSXKDKEEm44M2WiyYxiCFV8nyMigrfhfnmnPnb",
  "key33": "56nierddGBM2r4XsrPCJEamCwzdg9yHyMHTNCdx536dN9KAx4P9cRgnJ6xLoD8ArfXXwVyBFZ2exqs8aC1quaohC",
  "key34": "3K3gmt7CKc9R9Gd5VmqCV75uqJVRiwTB6BFMjiMsHZv6QzyTCieZJzyyrgjK41PTJKHPdYZ1qC6HXUfs3UaMcJRP",
  "key35": "8aLe2ATAZApA2SvTKdAJuo41jenLbcN3T7ZBHwjnkvGCz71T7mrLjiB5qSGGmjBBywW7XidBzMi7fge1rqCrfDh",
  "key36": "iHP2vZ2UErxBgagu7N1exQfpWnPk4MR89TJr6EdR3q19EqbiA6fxffy6xZvKgCq9eMW9w1AifjsZ13SgQPquxJT",
  "key37": "37mYQuYj9yBanbGHrark3CXfVo1DmfMw667Xfk5sNodWKrBKExcV7TQcLhG9ZB88JQDu5H65694B9dLhqmPGKNNs",
  "key38": "3z1UaT7trzb2JEXpjFPBR8rmeetPQPBsvFku154F8cHyBQC3AYNFfMyFPKNYPWS7TQvYJJBBwZUkdv5tyzJ6kwEB",
  "key39": "6EhWM8GuxVLcHbRV2ozGMzgdopPVM4akzWe4CqpNHxaScsGYgdCQRG3R2QubzubxXjdc5suqMMMFutU6Akkppng",
  "key40": "2HJiCCdfc8kgdKLaoid3u28K5oLfr3zhN8JfkkmKhVMFLxbG7ib5fwZGEU683LfYFrLQ2BwDxxHLyZ1C6vvKQ4yD",
  "key41": "36pmgfR7Mff13sVe6PB3pJs2RDDWW4EVgA5HtPgTZgcEPPzdgYUoG1Y5yqbz1vHNF3B2PPwa1F82AfDyHNTzsjbG",
  "key42": "P24fkHaaXwMD6wNFJuJk3MKL56gkfqF3FQUjQ92GDa2ufQZoUreeum4b2noNFARKU6CqsqSAjUdVQkhELVrRF61",
  "key43": "3Yati7RG9pyy6gen9xZi7GsQhE75TVX5UExDKztZZR5TGNSBLLo3JC4A2hzZRzkkF7XuL6syMhk2HPC3fv4CoPnf",
  "key44": "3J16g3VdMTPM4oML7bQaVP43bBcwR8EEi4TvupmJv5GXfGEapxWVwgvaPFkVoPP5gMgQLhKPV1hjCXNCAtbCdZrU"
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
