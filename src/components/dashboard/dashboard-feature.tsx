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
    "4XhCpM3gLJaJ2mJYkntPLXfn4LS7m3MVjn78THu8sa75W7Fo9n3oyBWyDgKTj34jThbP536yAzR5Wcn756tNA73Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GnvgCVG7fkcn2MW9cUQeRyQZnotmbuaGHMJ3FmUBq2t64cahiuMAQQsVrWyFrNCVvMDQPHwgKGRHV1xRMpKtUo",
  "key1": "41Lqkc8kbrE7Z1zRP6vYq7YXxPNCVaxLFpnFhzTgqgmneQqjut4dXgWccy6C3uG1c2oooeNm9CLtTh9YRtSP46Cr",
  "key2": "5FjBBnaqEBMrUdQbtkqhQUiXdNEhhD4icGxpsuWZcXcXgxuJcT7ghtVsmALjtpUC1iERe8NjWYWTNUux6eZUd7Yn",
  "key3": "3BFJKSbwdE2JS8cVqbhfurj3CiLqFsoFryfEqNshmXYFdtRfp4LH6RxmLnGguriRPZnSP6DdrPYPeos1KnommQbY",
  "key4": "4xSoPzTcSYciQDwMrYKZBwQAZv5gKrmpG9gLFdL7Gy49EALvtQLFs1RjqYUVtSWN9SE6fDSnYXomioGXsnSUoViF",
  "key5": "2MVYws9nZvX7q7uZcdePm2h6VcAfjTk8FMp8zjFDuZtr7qQjJDTvDhEBtoKjE3g6wcHribmSvhX5xUmVZG4aNSMv",
  "key6": "4GPhjUrJFE6cefw5PgR4BSNYJwXd68HmB2qFPorwQFT8n3SJzm7UGfsckdqYMWBgZXmEuwyWfeop2sUVhqi7fyDc",
  "key7": "5iDj6DHwZ8PUSPd8fQjRP1cJoZmS6hAjPVpVxM14XqysYWB2XHdxQ53cWyQwQyoLu4DKGcqyFb6QysS7w17RzDPh",
  "key8": "2qQ4tEds3MQFpNL8bZVpnJnVHG3PZEjKmqZwVD3dPvmFeBjd5sQpNadVyibMTFU5eaAyrXTmiXoSt71HqcFRBu3S",
  "key9": "3e4F5Rn8BrxinyFSjHq9Hi45QJCfY1pYHdkJabbYtZejqZi8hCKNceASRMMyjEbR6BsGy2sfp3Z2GRkiKxv2CuFd",
  "key10": "4MacQaaRvTC9uzAZ6TmEK6NxjWMCW8S3RKEANCbKYgJiZrX6e8cZHFUhuKFv5XP7C4ghYf4Y3wejY53q8gDgBCo7",
  "key11": "2oKNxRptGSmeiuXQqvcxEPS77DMtMsC33AhJVvTyGwWpSvSWGouFGnFMS3H4HfH44evqZrv9u27rJP8ybb5tnYf9",
  "key12": "469R3Ff7byWpZyKDiGML63MFren16AknBPuT3giKMjZbYrbBAf7skXwjKHn5JqGAuADCYsG4Mx4nPDgNgps1YoY2",
  "key13": "2wpFPCCeRmebA8nVx9aT3JzAtKq7MjdTsYLqUibF4qJE5eecYi2JHChSUgf7L4AaeYahHN6MNr83pvvwsvnHo6zM",
  "key14": "3AbAY4SzZMiKhEwGsFQ52oXGM23JxGqw2Y4vNVQrhomhWvY7tGoDHSPd4AssT8euyCi3Nwb6uAc7tnZXTMNbBh2H",
  "key15": "2huYKGj9d5x34DbuhcoexQGwoXqhZbY7wFwzwjVPaAKbg7mwy31GMpeM9TZBgw42XXkDAECGeoEhLA5ML6LhmRPm",
  "key16": "3BeFCNd6t9BiviZoHyPWMauADoetDYqZB13mLWYajjPcFTeK49v7eAG34F49Ym3ovhdTrBpw7dhDrq5HW7nZjdbW",
  "key17": "26XoRSmLzLY1DWYbcAanJqCahdruHoKd5Get3Ac3yzjhcknYUBSWu6tPywvuudo3x5ina2Rop5F5ff6TynMDp3Yf",
  "key18": "B8BPqVdMtpWR6q5Kej9x7ccH2kCU1eYixzt2YHCEfQ3iLyhbCU69YwARoH9JWrdi71E6uZGJVa9qs2LBNA2t5rn",
  "key19": "4GWjTECUDhbXPyA2pncQMyVheTFidKzryxiFBFKSgfwAT3S9XGBHezPVvcjfMvnTbUHupdL9jsqZnmkCLjYHjbRK",
  "key20": "64oLmxKvurWBQtk6LUkTaGbrWMRecHy3DVREv2xHRHoJS7pTbjb1Dd281FYBS5xeKDWf82VofaP5Wh4iPZU1Mz2K",
  "key21": "42r21Ufw5vTFpUrwFkGiwsS3pxA9xWkLg12QX73utS2rbQ4o9AJC7fHXiGj4zPGoXVobnPwCxcJJHPEvYrj8QQJj",
  "key22": "5yC7S7fGkWxxZWnUPLu7J7teqQ8Xk8eEdZPaf6YRbHCk2rhYBXZ4yvdZvrEcuZJsX45rcqxZGhhWVCNYcQNLaVD7",
  "key23": "iwNUUGhD3t66wCQCXBirTkCLpY7pLfXxdkLRCfQemaxAZyzEcZeZUQQ2PeEEapgdy564Gjgw9UwpQmciuxjsAEb",
  "key24": "4u47nnCzV4z4vFPPQnGj7nTv2YWvPwdSXTURKHvQr1fPwTvdfh6dUx19umWqDhdsNCsjpknLdGF4TpRars53FwLr",
  "key25": "3b2bW17FarWVtXYxfMtD3x8gfCfPAA13rZeWF1Ss85ePm7oc5ux9p2G1pJFJ6nE7C9BNFoLnPWcPms2tvZWMoBDd",
  "key26": "4XoDh1afqQ1bNAfyRnU7dXyKyseqfbnfQVEXqKWVxsDiDKzYs7CMjtHAi7kjTrdzAAG2iAbDkmrZoTvtryuT17Xe",
  "key27": "5ft7SUfHFh2jz4LrYdG8bcjBnCkxDNoYk2ad8uCENKTk5JaYsRkjhwW2iGrtLbA1aZX5YwS3trvyLyav5z6noSrS",
  "key28": "67cNRCmbHB4Mfu41oRsm3vQnbAD6KmzPu55NyPEkcqE2kVLoXRPJC6iSvZPPFWmvEAaxM68qStGmomtVhBK3U2c7",
  "key29": "5ZCvMRCV82QkQJfsuS46SzwptaaNpfJwvZ4yAV4cuNTdxzcj4o87LYqDwX42kJY69cBT5jRP3YGdE8qTkzhtb8Jh"
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
