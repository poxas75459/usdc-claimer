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
    "53EDNfyDxHWEtpvMFZjpTUvsQERFHPxKYjfriuoU27kiZVPkLofiRMt64XmAkRCMeWdQV4rKDHxYCJgdW4b2u9xR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GiLipAamKqTm6JVXt6yUQCy5pDM73Pv1pXm27RooyxerbDt23zexqTPVxUce4mzVTZ78kg6ae35qBchnkuMPdku",
  "key1": "5F14KtLQAQP8y8oeQtNAShhJKiC99s5pkbJYRwk6JuufQhEQfSjQYDengTs3BVMAWCyykxMgH8oRouRBUWnikzCg",
  "key2": "GRYC1vSqZ5uckhgmYYuS5d8giZRzXr6uw6bi3kz6Lu3Jbyw8uDDX4qXtdGpWa695qTYj4bg33ofBPc5YLzNYMy4",
  "key3": "wUphfG2X1HfiqEYgg8s6QrDK8K9JqNGgX2Cr7RuFHQTh36kDUFeGeZ732nq1WYEMfkXPx1AAFr2GX7o22yt6sXR",
  "key4": "31UBeBjta1yiUEKt7kaJYSCFcdv58CfRHoGByMQLR9PswvR79NMfugsaHpfzAVSB8mAYXJYU1Fkk57NpwbPwuHAw",
  "key5": "4ufGeHVVsp88S9D5ZfdJ3XnqGJ2iVzASst82jpFtFzQWYmaN6qRrV5vdJC2yD8MCYKK1amFKtkxxzNWMhLeF1giM",
  "key6": "2Di5Tx81XSGAAoApn1ABvTMEuduFCuHjvr87crXpJoykpEVAoBAY3SYnCPGpH4aWY1iX9QyS9DV3bBaKTYro61Hm",
  "key7": "4CGpFpPGqPpUVT1ZoZ2US1TzWSCZd5Xo5QD1u8x5umireBCkBpDXoXbfkJFBd47EqRw2NF4Y94tfXckmy5eC6J4a",
  "key8": "3yC8iAJmPAS7rCxoVSx54NmofsCyfwWyg6LuM3H1ErkPeb25cBFTynefmcMbS1DCpC6Mco6n2Ni7pj2q9QN6xBkk",
  "key9": "2F7w4nFocU6SKu5RTATgCWQAWTU7YFrUqwfQ4F7SDmFANnGxu7TzyF5isks6B8MU2T8mattrCuLyG3zMXGqLcCQh",
  "key10": "GtVxPS4AKZhU1cDUgqVV6C7YRy1PZVYf4onZsQNDXHPBtqwL4Z4CwJg2mMmGzNb9XMYGkwcWuj61vbNHpKCzvY6",
  "key11": "3UW4CtAJouUfM9f3jn8w6MQhopaBeNFo4Yqgm3kCukowFH2swTqJDaYjZ3P3Jz6rZaohQPfNqgCPDnFsPSXMzA25",
  "key12": "mwMGQFp7SeMwL5HF8i6mGHixXrnwfEEfRARLg5abCoQDLAV2c7k49tm8LZsNEtatZat6Eifqk6iodNxuJ5LPAuv",
  "key13": "WoYmSuTGxakrP4SurD12w4kS1xiH2ugoxwYrsGp3DuJEdEFRwM79xxDanc2hpJ4t3eS4nHFkAHfZLHPc2G7Erty",
  "key14": "2NUKBeAqW5iBkPaZdhf8AKToHXtppGMz1xLsLAqUNXY1QHVotodzR7kvH8s1xxXCnihzCkAc7CNFu2uMNdXkSFEu",
  "key15": "TfGohbYsbJ5jLd22QMHACAozXwvCRd3rAodtm2NvqUYptQwXAji5sP56sfpZJWgYfnmNDCoihP86MQrjkuamAxj",
  "key16": "4D7eoFkiUPmHtFnELaTs7CBZcTbi3RAJ9h3LHoBnwQMyycHNRzYLTAgiccAaPRtiE4v3qXsMsAitS9cY6SnVFfo1",
  "key17": "2FKNUrNDjBAiPp8dct18wYoFKR5jh9rQtuaWXYfPWEY4FWmCn8cktXgL8QCq9e83RAXuca7MdhqYh7KwnkbHZ8e4",
  "key18": "29LPWatoFstTL2dC72qyLPAuqaCvDekbhWxbojbEVzsSTiJRHpRtC3RRkja5gWHbwfFYKJFBn4GTD3wZhNebQr6a",
  "key19": "26akFaVZV6DHR2mZx6Td8rK1CDZDBfAzfY1nzEVPALfZ7oqPj9tUkEowU9KQD5BJoHSQp4coF6zAbuxwtFBFHviE",
  "key20": "2aLAJZMZ2MWUd5hbEpzQeSuf6DJmH6xEiqZWfb7g1avVEbzPh68tbvy6ScX5kjKpQrY1rn2vU84ph6tBHUZz6eH5",
  "key21": "3n3SgjEfV9cMWUKqkzgTtfDCS7hUrDC2DSkn1x5Q2ppfJtt8yQLHDRP9bAGMPhmAN2sCmZEf55oBuhn7KuP3LGQC",
  "key22": "CGksNR4qJXtBxe9xGYCc5dE28d8xja2dFZgwABJnAKS8E3beQoAcFs2ffziEaptKai7v2wqMFjxG9f25HWi4ueT",
  "key23": "5DWsAh3ppB54cnKQY8CEtEBEvBwhYxA6siiTY7w4yhH4QLt74qibv92ToXpP7QeYM1VUShf2wh9T719jJFdhhNCF",
  "key24": "xzADo8SbEi98FQjeoYP71LNFTbNUJGuGseEzfEnEgn6t7kYBCDccWAt5usSZAk8hotr1cHg6Sg4q9e741jvR7js",
  "key25": "5Eb7pXTnb7TJPP8Tos8L4yuFjXDPVoXJLaiJXo92EXssAEiGHSsNZ956NZm813nGtMT4iB7zXJkhKY2Eam7Za7Pw",
  "key26": "24sC8HjPZpQYPyZBpoBxsZEkeYhoaD6G3M4hXJuopMsuoBeQYSNByrCFKM2MB8qU49AMsAVb5kLzk1ZXC1zwM7Me"
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
