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
    "2BFz3PDTF58DiUQA4HoGYfAdjSo6BoMzgkHZvn69u2jYrLwkQMrjJRvnKe67WL46pQALGAHkkv4m39LhD2QDTiGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e5eRg58x6VQV2BhXMzYGvLoQBeajjo45FRPZNzA1XP6UG7PkUJTxby9NdrKM5boVKG4sRShZTD7XkoSqm2tY2o4",
  "key1": "2CMqARE4xkKJjHZSWe9ZfdV7DVMZR7zYqmfSHZKucjKsP3GnTk9uWA5aLYDZ6yivJ3114ppiLYZguWsCwc6y2Eqb",
  "key2": "NUUTyJov69K2gQ7iSzzmtLM2nh33SQnqJfJ6iZP7yc6eALevjZ6FQCz7xzR7jg1ck5z7ocYQzpkKSzRtTeWQnHt",
  "key3": "3h81GY1RGrZHKSutqt3bXic8vEc2hXV45xPcG54jGFYh1JgEU3TZfQE1ya8MfJJDPfECyaUuuTJGUtZfegbEzfb3",
  "key4": "2y4yRFtr5pgpWMyfZQkF54YYXvcRGHDkS6qgiT2z3EeCbw1S9azKpph3FgbJ5Qg2wSTJgb5b4t3u49SMENpz2BM8",
  "key5": "2b4rJkgpGbquEBbENZhrYoib1ALHqA2xfnR7q1dPDpvPtfPKNPMJkFVKzEW9AQbT3zsTR3Q7WtVUSRTY6KtB8QTf",
  "key6": "47h3RTvbJ2d4XLHozHM8uRavoMBWrtA8UznFbMTFof1emDdfPzMqDab7QzqSR7ULWb2FpDdzH2LpuLxQksWjdK73",
  "key7": "3EpCdNJszZzQC9VpkNqGBjYSAm1sqRP1azJ7EJH75KoUJGNHedw6iypvPBRGJCEUeVETBbofzQ457V4FYzUbfB7W",
  "key8": "3pxXwNmDPHeETKb1rdwY9o98RGqCyzhSqXoRvK61m6rw5Z24gjnjfa1mJG4yPVpFmmH7CmaguKtX4r8RgQBgM34G",
  "key9": "2baj8u8htqCNx1syFSdmGEhe5M91N2wVSYjPDcQpYMNrec4B16Lh72jwh5yixfsqjnhkap71t6gQSmZAhwpwRS3w",
  "key10": "38VfYuwy73E9UnYZeBpNpcxr7VEHciJaVUmB8sGnHsm9Jhqisv8aBqTnP5HHMsPd8XPNj6WiQK3E1vmzenC7jCbY",
  "key11": "BJ4BrtoFhYLYeaerdNBFALBenX9S8ZURhLavQa6XAQ5sUjze7PwJm4oqULsSGTM8VKzwTUPMUnAUCz5AgfqvsdN",
  "key12": "2DuktsVQqvEWL7Sk4WP34axfgnnoV5mw1NPFAd9H2ErpHiJRQrA5eoV9oJWoKYY9Tg7Q7CLt6BSKvX3py1KWiDm4",
  "key13": "5UfqHH2Th5Fe7vMAfng1maDgv46QxxsxfXaHDMcz7VvRTCmYf6aeqJydA23PTrmWFU3YDhWDXpGr4GBP9HwSAg1",
  "key14": "4VT3ShRyJ1VmqFvLQBEVHq6MG9jCcE482b3pDPBRJTxNeus3DDpPZBiZUtSVtxNFvqpEY9hpqvoH6sJKfvzuAdfo",
  "key15": "3k9acja6S3CkTASS167EFWwFiwseC38FFaGD8Yg9JZWmveVWT6v83YMwzrtg2uec9vf44LHH7mHiTRr55YgAE36q",
  "key16": "2eCHC7w7btno3h8gwDUYVicT1rJB99Y978mhC6VrLbZmGrCJTQSt9j33k1GuvE5Lg1wQRmdvnEW5FY3SXkYurXzf",
  "key17": "4Nut9bwSWPkE9v2pYQCDsXFj7FrZiiFBA2xxqCKEBRYF1bVHw1aJx2eELExe69XbRjzZpCexwfqmMm2Dx8C369vn",
  "key18": "5Sq7PG8ESyHGZEjRoiM3oWbfTbK2sHfVhksmMtKdSrgY3Cn4fzYCLzF97LJJKkKVLuGLzrxQCR1YjUtzHe1G8TCT",
  "key19": "2SuuxaCvivJPrkWL8DB3cuFY7NNxSPjbKpSLRMkBXuc5z4qYNUW36MXCGejP87SdwavUEGcKzeb9emCM2bXdkx9j",
  "key20": "5KePYgvo514VJw17mK7dNDQJWkrzLuDsdRfvKAoFRNsKNt9BoCnx3fKxqQeGaUtKGcezZpAHkjaYUfeG1V7JFNDu",
  "key21": "47PkwHL1S9zEMRMFh5sn9ww1EVx5c3sqpkmhFovwUnjEBDpDAWmhcx4yfnrELa1wNVLM9AVnFQZufVgxgbUwr5R3",
  "key22": "5G5JXfqncSLDrgf4e2fBeGVUgBVaKtqDPE8EstKkMZnVGHJTmNeXd4CrrApZg8jrgBCxGDsspgtJ57C3KDZRf9kS",
  "key23": "2TjZRqSYHyqq69GPuBbEiA3sxF1Y44bhuDVAq8Srw4SQZoegEL81NpYvazxc9eTob36Q6wyKZqLkF53ZAsP1aNAo",
  "key24": "5ybuQBUgjQmDUE2HBQ8AphiTxKAxMJsVsfDvQ19AhjHj5ttuXwtKtp96oC2MAKBfHgmH4mJqFHb2kn7tCsCDpzNH",
  "key25": "J1jAbLVRwaa3qNwEFo3Uzg3fEHNpBJDGFZFTWbzehHonrxTZjmHienETzywNU4zbUkqkUfNRQ968jfvoyNRNXMs",
  "key26": "3FwehJLcfEVLpWHJ4CnUpF7rsgvEpSksEmpfi3na4771deNu8B5GVyQeqpk95Z9mLDznwJjTngRiSaA4FnZPMVpb"
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
