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
    "2xYRMeane7nJzBh41cE8WXzq3cESo54zEzmUfuMomkXzYiz29y8onN3mykWYRR3Th4Xrkk5weeconoZjxAthLxZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25gTSW2hXgQuHs2dnhLQnJhjXFJePfydbwsWzfbCXMGYHzEdzgPmfjN46eDayEG36YxcEro3MDZMfRe1CzpfZhMq",
  "key1": "2Nxp92nL7jaZhLbXyE6uLi96wkciruLCDGRh51bzZGGXVky5ZXQVwZyde4VjE3vH4r9J1nqgWMaFibuX7PeRSRa7",
  "key2": "652ZMUEbd1S6iPN3zDv4GKypaKH1eyht2HyWRduSM77j8WpmHUijCx1BR9i9Dhy4taA3QF5vj1iLTLwMtmv1ySF6",
  "key3": "X6WQjyn1cnP4MqRWFwqdxUCqsxgFwHtwvo5BSbSAzPcUxZGtMUxpnSvjXfUbKHQRg6kGUxMbrMGpZZeUKoPjzaD",
  "key4": "651BxLzNCmewgP9tUxivpg5ZDGL74bQKGSGhkd7MA8Nemx13NoGg97yKqMVQ1AKNNPGFryWen5nTc3KrCqnJbJP5",
  "key5": "2zdvYBrpzK6zJpquQxrKVNiF6fLHMSF1FB2HSVZd56GKvK1U84gX3RsPuDzgnYx5WtJEaH9h3fdqhfJqPRgBUx3g",
  "key6": "2MCBpY3qSVnEDMaRRPrbyLHiKtYTxtwZEZefuZe56gDr5dtZS1Mq2eP7BCHYMziDfULjRJkc5jkSgguf5eVEL8Uv",
  "key7": "4c6zKkMQMzLvPSAi82vCjuyACzfGMKfbyfadZDBP4C155eqc7QBWsXTvdVi8KbNHLsGGmJ2WwnV6LHs3cDU81Rer",
  "key8": "yi8Fi5vKccUJgyvosPwCtubVgkywRWXSQ8M9RcNRx69g8f3JBm3eZNcDEUNTn8ozev5DEwSfBHGwXniSWA7HbgN",
  "key9": "YY6zPj2VD5XSoX5z4X8m95qsqfb8eoYskWyu5nJEQpAj7nszgR7kuQq3EmWhZQg4Wkh6CzuxKqhBnJBW1nrYSTf",
  "key10": "5tVpUbd26Q7iz8vgFectGw8JrfFNUdJusKgLedqxUfKCJtQydPZoLrsL3c99iTPkTYGsSsxNbYHboUNgZema36YL",
  "key11": "2jvPtxau9Ls7KvdYH6NELN8WAvF5etU8t16o1r9AiE4biPjhyZxnDugSTqhJKRsWRcF5KJXnimaQ1ZpYCwBG1Vgd",
  "key12": "4VFFnTL2faqd5mnT8Rf3vA6P9oVtLCVPNpzjD7Fyuespfgk8aKogJRdz5hbySFP8HXd5b4DBa9UhS9XHG3LmwTpm",
  "key13": "43Mo3mdFvCMreMYTC4SArXCicS3q7EMT6MkX3SAaShryNC81R9xVok1kYRckxHkCxCqHg5SvRmrVwU7XTegBJ4k5",
  "key14": "4mAFKpL7DYFALyM8htEkVsVCVepEWQNyFn9nDagmR3LWcXUzfKEdM2esei65i8Ct1ypQB85VMw3StHXeQKqRDHo8",
  "key15": "4MGK9nLjFduZY1obsiLmfmmsZAq27P7teVNrfnuvqcGza2mPeSVspDtoPunWAKJnjjd5ZHBT6Hc9tV5SnVEF7NkH",
  "key16": "Vmo449ctczBTxuhRhseHbAwJMYY5Rxf3CX3SAQL7KfnkW1gEv6MP3XuRos1PCyvAdUDosmv1WHTgHiHbv9VTZ6G",
  "key17": "H9ochVwe6B3Xx5Jded5J2Wm3hHq9tDyu5qVCje57pN2V6ZhHGXtyQ1qCVB3pM9MqLgaMkUn6Z4dHMBeVBcs2vdJ",
  "key18": "5NpfqwmWFNoALxhGUDGA3BgFX8DwtxbSCEF6b8CGPkPJ94fdPnoPPYeeSDXSisdXYYHeYfeRCJcNuEoR8g3S79Mc",
  "key19": "2mD5BH91iEuaefqXierhRRFSKgpgSmh7qSEL9qWTwYA8BZfpGNezeFcwtpaTsmk6WzASRFpcidE95YhCddZdvGKH",
  "key20": "3D4Wgg7RYkSPS6WC2YAxrKEzVggs16Hi3PUh3N4N1TRDetDXBDtdxvCJkDicq7NZRtELERm8bGThPMeXNWwHqoPX",
  "key21": "QxkLhAYFybEgk5MbKr8XvtdcA9RXnr5GVX3KvMpLMrVmcYFtKbNqym21dhp4UfuaRCHPMMNx4d1cQyuPrCMoTSe",
  "key22": "3CnLCenRPTdgMidfa8Q4YyQEpD56Mj2LW4ox5a1YqiXLKvJjFSK5EKmosoaBTgffkozzymURAtrBF2mEi711mDHX",
  "key23": "4EyxsdBx5JDsi5Zv8c2HpEHM89WRiiiHm8s6AMYgewkSC2vtYfbg65KGDzKfHmhraWuhyD95Tt3Wb1PknvQA8nfE",
  "key24": "35hod7jrYa4XxHbLa5H163kXNwTnfsPUVBK8Bva6FPMsam2SwVRw7MCXxN3bQ6khEb38MRiqT7kANGRHzzfw7KTc",
  "key25": "4Q9fcWCstTHzxMaRdwNo2VogwwL85CK911UfXHmH5YAibXEJJ1K8hdNMaktdgzbVV9xhnw17pF8iaDvHAMxpyhVb",
  "key26": "3jCEMic1w3zYDKgbf7nz3MA5UCLeizhpeNHrggRDv5gX4gXKrPidbvnFJnMWTJ8SWFg9hJCDQbUe8Z5LZq45T7dn",
  "key27": "57mabZcmt1GCAsERgCC2PyF7HnmAc8jTpeu5L51entJdm8AyAVGR4XR4v2Q65aHG8uaQyN3ifdX3DxXwSUAmK5j5",
  "key28": "3RQ11jp7KwmR65xpcPhB71zLBmeZ19h6PDt3egVw1kfVdVRKJgoNtPfahzSoSC52NKFA57XrtahrJR3GBLGtW2pQ",
  "key29": "5hrPTKoCjE2fHtRFnEnQ2WJvoBDJ1DuFdEQUDaZBi1SEZ5qWqoWDSNTYytqbs3voMwT1v3cxrABAeQWzKheFZdnG",
  "key30": "3gqJZA4CnUJQ7ZHXgoRJG3PZBZjTHbkzoqmuxVrTN8pDPKZ2b5oAW1gCiPGdrZftvUfhHKkKknwZKsMVXxby55p4",
  "key31": "2BTFFumLiATVNhTAByrA48v1mtN8nSJ1FXvyAwCEzUfpyLnhnJFdR19NnLE9kRqiP8sunurovgPt9BtiCpv5QjMM",
  "key32": "4mqZ9ng1K1wGT6wjuVGh2jvY9gPZMbCQh8wvtv3rV1Zzma4BFXVPaESW5U2aLJMB1zy3gvkMF6BM5vRj5qHFZXxZ"
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
