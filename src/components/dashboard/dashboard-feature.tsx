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
    "2uXL46zqAcqAdX1BKHsocZaeuGqbRbTsxycqVCWd9s7neyz57EquXc8UrGRCSLsZ9DCqRjD9tm2Y53kxQWz8VmTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6jxAzECz85cQDwqU8NWp2KavhsywaH1VpJaSVUdSzLsUPrzJSjHw8NAMLvXMWezSQGMNmRkuUN4tT7sjbbmeM71",
  "key1": "5cnD8Wr8m1Ed5hc7qLes1XqLR3Eov8hhPSCfFqcQ3CW2eRmV4t7bTrGSnWAuMFnFkR2zzMHzDY8XQi8tp4hfdeQZ",
  "key2": "RbEzLxW9t65A6SSZdhXSEGVMuhf8Q2VQQbb7GcAoHusFBHP1ZMeBSG1YuKkXecKTRGSrSQccHsDKSq22iT1dZiu",
  "key3": "3rqLJVQ66YxdGdxre8yZogtsQNv7dfgM2AXoJFboryYWGHbdBWqN9CaooWuJyBWVAE7wbVTXki3d6ayPodn6FfsW",
  "key4": "2Aok1PhNGBg5H4W4mTyzqvLAQA8KYtPPN1TiECigESe35CoDj5EqmqTW7wCTLAbRQuy3rqJuzGttjEhhezs5LpNt",
  "key5": "373XD7ARG4meTeXpbmNW5c6BktzSmtvd7L5ucv94uYC6cJG3TBRSomLcFZfHRsayoccybxpX4AwDeK7NFHoDk4if",
  "key6": "Tz2bViobJQrifsVfHkMX9wUpwt5o3m3L4sdcP76YK1nRj95UW1QAeQRV3cPiwEcEUchg1HPh6aRDMMR7dc3b8qy",
  "key7": "4hZjcdZVZ4nAtVFK8WKjjZgCzLtUFs5WjweWKDmJY88XQLVffDP8zdgwFLg2wP2AxyKmeqtNZKrd9AgwMs3orUL2",
  "key8": "3DEmrKNMRKFkJN1LtnbtCmooaJSs4H6BBJzG82d2uFKchb9speXmr4ugdAmKnkcBezgUNqQQCDaEuAdtWkGHt8yX",
  "key9": "3DmKBGLTzUXF7YobWSpg1aC1FyaZGrpX3eWgZn9BumHH1hGe3CjjErALxVJE9G9XYsFnobP5tT1vrAGrPH68LnQW",
  "key10": "3ao7RMFhkS2dimfBN9LCLY2V419JWPXA7N4tyKQggzpSxrP3Y3SjvK6QGWgPJYHCFR1e1SyzUwEyHmSXEhLKgJkS",
  "key11": "3pUrVeQ5U8z7qxSQL65CD6aqsUbVij8HmdPQ2hXvzDprtiTc8F3fXQayLohCQ4JN5TQewAojRT9eRrcH4fehHr8b",
  "key12": "2j2wiEfJziBb3EXUunmzvZ2yVGuDW9VNTBy7CmHzzCvyqDMK4ZW1Wu3HKAoAoRiMLpjyN2XFADqpzy4fjZWXPLqM",
  "key13": "zqzJw4ZaSoo7cAuvhNgWuCBqf23VJTyjvU2p7695AL2XcjJD3QZG8DHxfxbw5QUgCBKR6Wx5DhewzzTSPirDmU2",
  "key14": "zZf2QyTnsnoGh5WNrryPLHJ9KfqrtpouEo2YzWSfCCdM6Hv9LRHmsFhhgqUiWyrTEexUSbEYAEB77ZnM1yaSseY",
  "key15": "4gVLHaoPVRxFMKEQ9LAM5yXV2x8zWsPvHSgRVVbm3rBzQTzJAuZ3aCUCUr8GdWMZcGahBvBLU6wU49vPczYMdHhw",
  "key16": "36EDR3X4sbRaH57j4LTnZysb1wEzpB1dAhWmkmVYK9hrQW297VuuhzrwHwiuspxmY3MWXtQfrteqPdysXxCHonh1",
  "key17": "trHTpbs3wVB6aFU8jBMF58TpENRkMk4RH2bvVEi6jzosm6UssYxq7JxeggSCfrF3qCE6tkm4eLZ2SCKZ4nDDKrn",
  "key18": "3p4So6XUURznFM9soq7sTCWK5SV8o6Dbhgm1xLipDzXTPu5hAvK7UoFhGYPpKRWcVjTMWjnNDLVYXqZFqFsjxkm8",
  "key19": "3woemnoWyKNN2WJo4CUxpcEUJUD3RiAwHyDDLtaVXZxJpsW77zs1neZz5FU7SKrWwwFVqR3i1tuFjt88D19Ye1CQ",
  "key20": "rMoUzN9VLGC9KZn8LS7JQpn53hBh38pp8gj5U7inSsvSrNm9HEHZfSrXLSJQ5QuPrX19xhHtiGPrrXFBE2vWTkX",
  "key21": "5gPsNtzuLbSXsV5DViSvmJPWmu2NxCzY3ApH9Sx8ARJsMiftpvFSwRdJVHgsv9fBQ9giSyjByBcWmDJkoS2NK1DL",
  "key22": "3a5nLjoXyPMmtRu2Fa5KnPTHzE3wz71fXJDhtLD6pFeTahRHpq8rYpvCCLtiPPL2sGXk36HMC1QuJqNB4uHt84L2",
  "key23": "38KAvprN9ZVw3S4vwb6G5DTXhJ96LewnAtercR2xxxUWtGr944EV9kZggjMK782femrc7mDRsptY3NQ7MAHpdDzo",
  "key24": "3GH7x4BNgtbwJ84quZqbo75hbxQrcNsZFwXXqyA68udhcxk4VuuyK9hnkAQWbofA2XbaUm9gVaQ1JCTYV2YfMBXH",
  "key25": "2HXNQonfcuGK9JAA7pLNMh9MR8C4biMF7g35HM8fY9jEmLZaT9kEVskTTwENpGYyRnKEhf46RFMc2ZGFnET6qH6D",
  "key26": "5xgXH97wd9m3ddBDMbw5BbkHsYBVrMS7YvWiKV2kTZfk89bwJjmh21UgQmdbMMpNifWPSSbyhRQt2dcMwFKAd6Vr",
  "key27": "5r98DpbDi6CHqh1etoJWt4GGFSA8TE6V9r7KH3RGeX2JUBUAMUDSGeEUjaoVwfABUoATDR9TfCGXLFjD1wz6vJFL",
  "key28": "4NWSdCGoEZqzhwf8V4Se5qRuvdivmLViRARu58xfMyx5Z1TCmWqAKhMyMBWaKZfQpqUAx21zmrWTdYqm1jMCfxnn",
  "key29": "TUqSCESpN6YBrHoQMggoqRht1H74uLpuFtLgn8Lo8vpY8y6QHNsWJmcRiZvgqQjvrmdgBgovhABzYt1Mtq7gvfD",
  "key30": "5k7X8yxysXP2JbPYz2MbVWnitKhAgLozPvcuo4G3hYp8ki2L3nm8WuXaXW1pAFJ2bRDjbhGwrwkmVTsaaihyMBjx",
  "key31": "4fbsV5vBiKADu97ZMbcMkhNAo7nZ5EpA943SLJ3HGpNjaanooeXR6YcEjq6KPyG9ctgnogWD6jvWQgVcqrQr5czn",
  "key32": "JnnuwkAV6scgYbAgqAggjxK4anhAogWZjqq1cRA6CRvmUj6NFvmT3YPn4p3dJcUv3R5ugdzpdbeXiRpGF6dCNup",
  "key33": "5DgWjE3ycTCMph2a2hv2FGdLHTjhEb9LBJsDgnMG4TuMzC1CmLnwtbrm4bdf7XXpWfcftEjwpgJj7s4xt2RvLaeb",
  "key34": "7T4sEdmTgkKXq8Lm1JBzWrafxZB7oe9CyUZNLGX2W3D8QZTFbQGZi9SKqGjFFfCnJDfvZXVH2rqVwYkkERDZrud",
  "key35": "4Knt6ZsUCXremNMszGcyA1YGboThqquiQabT6gyBjojxnvrm6PcG5cZFTD1e5sRiLW8Lt5f9smWxDnaLzXS5uYQr"
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
