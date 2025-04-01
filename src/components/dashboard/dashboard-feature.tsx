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
    "4pi71JQQZJpJzTb3HyZ1MKuL7N9sW7nxJC2BmRer1RLpfWiiUBT8dYL7VjyNExY5y7R6LudtabtDkVZSm8J5whhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41exNUyoQvnLjvVQrWWh1nYMvamZ2MiG3K97u5gCvwxz7yfN7LLjAMcJ8Dzo6yijMEumpF9Q27cY1SAtknCMmud5",
  "key1": "3CM7Bnj8tcYTwPvYaM826UF7DvhPstsVT1SMykFQR7WbjEDLBXE6gdKtBHWWGByJY6v3DHgcrgpEuSAMyjbF3bb8",
  "key2": "2v2ksu99WzXas5g3aAwVxWMGWzdkay4rpfmyZKf84u6vhVWEDiPG3c4TZVx6S86Ms1Z5c5NBWxP9KkVCQa1PNuQb",
  "key3": "2YVqo7Ms176zHULeXonUWiRjqVhGr1fu1LvN9WFVbNBbgMZWGL8tR5jvF2g2wrMP9pBrG9PxB3oP5M2kx83Qd4qg",
  "key4": "4UaZT5KagYe8M9PeYBmB45poSnotcHixYr67HYHfzstZsX5d72at1gR8d9mEwPNc5cA8BepnWzujEwnGbC8xQ87b",
  "key5": "2ibi9dnkdM3trd7wih8akzJ1EvLE2wAb1mEeQ259USW1it8YgJVF936PDugEuEADw5poBUPoqmK16F3Y78t9Rwxs",
  "key6": "5dDEDmLsFTDLjLi5X3DnYqn88bvT1XYBh5UMPUFDAF2mW1SfjWspuDYiMheXJ3UsDdsXyXW7NGNypKdjsiQJs6Ra",
  "key7": "3uAUXPD9L953j8cKhqrt9BdgSV5JZ9G7iYH6nS9RkfWvHg7bkgUUbYCqbtfi9xFNaRA9rJd6AGJEiE84AD6TtK8B",
  "key8": "5542ojJoo76kT1TXQKSTedCjeeYxFcx9acExZhnd9p3MQcePjEP3q6zqYG98VbNUYXjqBp1UF1TfbCZQt4YDf3fV",
  "key9": "2XYayyo7JSBhZD41tepwtoBRK9q4qpJVdPowz1nr6G9CsKo8syHJ3qKySqrS8HsQXVLAJ91o3XFxE2T61iTyr7dB",
  "key10": "3aCA1vdKfpTr15DzurtXVaQD8TBmFhZx6xrv5tNLLhpTdwnd4SkiWLPnF4WRrZCHC2Z8MVuW1pcMdtjsQQNAJoH4",
  "key11": "3VBarJbZ7fzSKHfMZERUcBdCmwFXqDyhvjtVTWj3BbXsjDscSKknagh8SgfFDpWBycmBRJggf1KgqPN6nL8w7bjS",
  "key12": "4q9y6SFHdRaeXVTiKFEpC5fNvjN83vJCgKNFGLQSi6Ga2Zz5ZwM9MkKMjWmKKTj86vAJk1xJsYEbN2ypVneS3YcH",
  "key13": "3Arm9dBBoPMxHnwkPbQmu1E7wWH2cCs8WAu7SoSv2pcqKJvw1zxd6aCfY3NneX23vhMK6B3aDLCfqcmuABEXssfb",
  "key14": "23nbHxsiPzcySKGyXHB3VUdnAGP8Voaqcq7HyGfPPEmuM1XzmndXXZowFiR4nyNpPmgweMabFHjE1BW3711miDvX",
  "key15": "5v1oDTn8uLniTe3D1Zw3BK87wJzdJgksbDUSqFda1G5fjon7iR3gcqfTfdaDr5DxJhwMZCP5ESCgf1F6ggFTKcEQ",
  "key16": "2aPVd2EDAV39pYLGzSaaAp4vh3s4KRA8CNTzqzLiicWArJSjuxwy38n1B5VyjHtjknWvnsPWF6MLVPsuUQDgKwZU",
  "key17": "bB3EtwAJDVCQdiRnAzpZApYy2VMdcDa2p7mDytkjK9Z3r89wi99jLDTzA1yM8gNGS6YAaEtryAi1V85XKJriFdv",
  "key18": "33EuukMjxzb9rCys4yrskhMeTX1d1r3GBJSBRMMMJ3ueyY8AuZtantViL7jmqgaTMpVZH4EfwS2GguPEWZLt9oaV",
  "key19": "43KTYqjrweaM3SaH3tM8fZyzm6p5gGejMUB3TZpG3zwpQ6YqqupRGMQ2qSJbNmP88s8sCUwHik85DKPoNf2yeFL8",
  "key20": "594fL4iCcmtj54FGXP5E1TXYXzio8BKPvc6Yf39rzYTpw5cG6vFmbSouVAFAPNvpT2S7KXL5sesTLhip6wGhYuTY",
  "key21": "3KAbFyjGrHWrywNoMWSYnckrbcGp55vEbnepC2z6eYHQztfJKbvYdePtp5wntDzS7EZCE6JGjNR9XqMmCRstyeWs",
  "key22": "UL2w7jVgix7uwifBjWrSsLT7FC3BtHaFdRVqLp9asKKLcdszXorWN584RsXU2XEfJmBgDft7fajtXFL4dBcZnVz",
  "key23": "3nuD3kbjsitNpKYRR7Z8tyfG82k7meNDZaAjZ6Lw3UZmefPkMz5y4Df35Wz4NNemcyTCvyAQ1vA7ZejAYiUaM7Mt",
  "key24": "2jdyQYcnENSbZR6VVtNKCoLUSHm9D5EWJ1AR4fjX4gEwaeBFK9xd9dGUuJZkzcwnAYFhwg4TMkWiKYCsmoxMePbX",
  "key25": "5MTavE3B3a6cTnqC9kD37R999Hk9G4scyqTs5hHMX9Ca2Tzo9Kw58m4qmWaepdiVZrE4uFpR3bb4MzcA2XcvGQsz",
  "key26": "58Ybs3P1Fy9R8Fug5JhtMSs43Uj8uvyViMHXEVwhVavjtqHfTj89CaJBGPDcS5QY7NqzSW3W4bsE2o4tyBdswqPt",
  "key27": "4W62eiBjAJxGGtHA4QdD7XL6xWLtHyWcuguyQfe3awonA5b2riB2Gf3Ltn7oKgtewXjNeJc7BP8CEwYdBn5fYtrg",
  "key28": "4KNCrLFWBEYvgvDdJEcmELS7vwNLh16v1T5X4N2tuwg3ZhN914J1H1wBW19YFwNHKQdyaSXgtVdU4sZMVdGvQz9R",
  "key29": "cJQb8MjrYa2uDYmDLsFKsuHFBd98udwSKTwf7WuYth8djgD1aRv2AvfS6C3koE6dBBsrk1A6bXQVnUkDxtyk65e",
  "key30": "4k4oUDhg8Gqc5zL3dY26vbjRnncrf6ULSGydMTfNDAuSeCPrSxsH9qp5yKC1GeKtTwUcXqJ2Kb648QxBubpwy6vP",
  "key31": "3UytJFinbkGnYzHrvBdnmKeedSjSQKrD29Hbt3iaz9eg5K83iVZFX3akBgkakK4MrsnVXDjuxqAQdS2iq4XXzre8",
  "key32": "3kq84Kk5H2mzv8XYPquj18uV3YrcSGCoxg7s6X1p1Wb4rRMK4PoPCQCxdhynFzfHLVmCym17KPtbRn9ejQSbmcep",
  "key33": "2cxkPwonmDQLF599cLMM3YqpPGYLosnxEVsP7V97AjBdfoRkG2McQowu9N17LkxVevspZpiVHHTwv1azvQcd9wA3",
  "key34": "37yoFhHzaQYfYcNoUyQtcL7xzQBAQHuyFc1x5iSPaManqacGYNXArZXm7R6UrfsFfhHpdjdQyVdBzjvWx56UW68s",
  "key35": "5cVJS6Bj4YJeH8VCMGRkjuNegaHp9DxhC3WjNh99b9PGwh12CS7rHp8d7LMo8rbuW7Ku8a3VRPZyBWq71Ms9Yc9u",
  "key36": "3KnwPcB3j3jFmm4eCnAcE1DAPj6irE9oKLHP6eTZaCTro8CbVYdpHegmGWiq5ChpujCLMBkGbXeNf8NnpCD65D9F",
  "key37": "25hNJWhZWuqZWo8UtL6Jr6MFxTQh8XDRckd16ueYkcPEMUWy2z77uipJCDMeyYdqUQXk7yuyYLnPQRQ4LS3RJ3SS",
  "key38": "S2GUyhwizHjC4LCNXuXyhNuWuetyhfKRFJ6YxJJbmBN9NqaR5KpYX3PXUevfigB2FcBf1QDJaYPMuWj4cseU3ot",
  "key39": "2ErRDn9xfMSUWQbZkZrDsRPNmatXfzGfSxks5jMbZ9jZRpSpqZTtmtYVwTRG6ekJkD1N3MqiWuJr5Bmjrw82aU7r",
  "key40": "4x3prvztxVAXcvEEwfb8ZACqk4FwW1g1eDrjuN4KJv3eF8gHC5voWvDhTLNZosrewTA5h2dEB8HNvyScL9puqiEh",
  "key41": "4pvF7F2wjRAaUZffRZhccX7HdRaP2AmRYWRMM3h9AHnvvzH7R38sjCwXiHmQxcZBsvEpekebMRAh4vF3yDxyqMHo",
  "key42": "4QooCTynoM6t672hFA6nJZHnr46Mquqq4hySQhdRf9JDmTdX5GECE3GH43iTwJnaWqK2CRrLiDeZNy2fkriSba9",
  "key43": "5feQTZyogdLhUZssMjXi1PxjRmiT2ofRFMxhsWANCqeTC7cYmrBN9nzKtikY5L6uMcPV36e2qw7zz74qMjPwfh9g"
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
