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
    "4XMN6MewYpfZrg7c5wYni9L49rbZXQbst91WQT6S9Mn1gmKPuEKnaR4StVmeCaKK5JbHBtZRQWv7mPEo4etvBLZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TdBbdtjXi6gBTgCfv1Gzs9HVeJYX5jQE49CZre6yBdXH4N3j9j1FDwCmGzit7Vzbv3cYA7ZrXGGDJQLpUWrF2JD",
  "key1": "5iQjHZh29uLx6mt8irhj7Dpk2d9SmqJuaHJQX9Ts8CSf1HRuzFxVrXm73o8TuXx2YWSCxcopHc8yz1PBYDwXGi9r",
  "key2": "3Tg9mxMTJouH372U2NCxkxaJWy6SN8m8AjdnASF47oRhWDcVFfEgNdMx8opDRw6UghDYUUsYyvEdfJYXzT7UGFjy",
  "key3": "4K3ygxRQK8MCfvsu35gxpyTYoRWqWzzAEKUK9FULVvUHaVq1zEBEv834jfk8SWWokVhRNytTCGWjfcKyBBABu4Xh",
  "key4": "4y7SNzNSfifW6JCyTpYQAiGAjcrbJweTDZVnfMDVaWMZzzzu6aq2GmcVXnfcU7nUrjx94hvWi79wQSKPfQELsxVG",
  "key5": "5PvM8XC4Pi9Kxjw9XTihjTPPgJEWaVFVCvzSMWWRKmwYRZ4u7GNMEi4MPNh6T6M7vfyQVvA8qREKXZwzf8QECJ9d",
  "key6": "3VWFpGPeoHriY2MYp3XM1vXepUuJVR2QsM7n5ummUZGg4vq2DjAGPDhZ3Wp99QaS2giBFpsZMcLgX5N5TCizWi72",
  "key7": "PR7aXueWkFEDbe1ExZJuFK22d8asExzm3DJGAN9b7m22fdvVTKM1B7smho2awdEciingva7hSLPsQ6aQBw3K11v",
  "key8": "EXLCtamWX8UZaX1PPZ1ys89Q42w2TPUyHzMkY7k85PzdxWfjhrnY9mh8mzEFC5Sn4uFcPW1krZ1Ppg6mVD4huBS",
  "key9": "5hbMF378dUQWyanxLxk5cHwQwQEB2wXmua5tcccceGaJ6wzA2pb3BjBBFiUKP7QV696kvCB5mFxbdhVDmgska5Ee",
  "key10": "5Z44BbSfPHmtmtgZy5Mo7J1dz43jzFiEbCWVR3T3mi44pkf8rcnVgxu6ZBizaAb3D37C56dgTqhnksXMXtUfDCr4",
  "key11": "LG5KrVqWtdfru6yLV8cQRNe2KEfSonuBT8r5xxGK2BHepLUXYttUceUcETRXE3UDnWna6hv1Zcvu9bvBoPHrCni",
  "key12": "5vWF5nevBUwod7Q5cKi6HCjrrRKKrTJQURgi9M8gy1ZHdrGrBFqGTjDRwkJLpxzropJhRWTBC12mgUy5XsjGGodB",
  "key13": "2Chnko6ixC9bN4PbjvUmRcPiRB9HFG8ZvLtJ5MDhy9Qseb3z5A48mSSv5vmMTSPCkihNhUm9CP9hhBM5RT9DWYAF",
  "key14": "r5ZRnd6WzubGsipBxr8yepn5ttbEA8qJArA8RrrDrwmGmYdMWtPm7aPTZFxDL1XHdkGGS4P1JTH4oWFBKU7wHw9",
  "key15": "2hZSPsHmsTWTVW3fW1ogPs2HefFXMpovUZkaschHmWHoTQevK9129RVDrQ5ptv88cfCp7wH1XVhB1iBYvo3fveB1",
  "key16": "pKb8AVWR8DhApwtWxqP7HqH6Y7nnoFQHpFm54LQH7LmwG92mR3GjxANTDq4JSpcf87mKGphfRBMuvomDF3SrJi2",
  "key17": "2wA8cQKund5Ktcb4aWwU5uk2GaJkSkhKMcHLAXWcZSrvDtqau3Kc9fcavsWmWW3iePm6Bj1XzaoWVNwUFg6kEnUo",
  "key18": "2TS7c5XLYjZnXY6cuQsQwJNWb1MkKs5MBhCrzBknCM83ffMH112gmJZuxeaP9ztWubT4mjXgyzHmP7tzq7VSXn5Q",
  "key19": "5o7GsbNMoNhUBRyPh8embZymDYjpF89MpBKPERWigaUrHEVSRktxghqvV1vauhoApmW4X7Azthr7zazSDFfEnJfp",
  "key20": "2T4Qs57d9C4sMMejHmVGTPRZtFSvjMMiXYT8FxgRsinhrdryovMkiaJq6NS5BbF5tDqrQ93XiV36kFENNRwEPCQK",
  "key21": "2ewNi4AwSHiNwVp7fgamcu9oRa3NgBX7yBEHVCQBpqetZrShA9GaMST4PCqPhuEpkWKsApNR85o14VtR2yekD8Ph",
  "key22": "KHyBsR9MC64y6rxj4qpLZPm2QGf1AjVjr4bBZM4jZv5EtPip5ZYjKiVYekw4qw87Jua76EJ455S5rgus8wn2aCv",
  "key23": "55RawgwjLYKXr3uVCFuR5veijyaQ3Q69XTMXA6M994twvXN9qwrQ4aNK6Jnb1ocAca2LQGL5s8kxJpPsK8ieTeDL",
  "key24": "Vvn9ZsQLDYUYoAYxN2FFL9WfyDTbKFJLWjgg4Yzy3wNNhJEuFc3Arn3YTHkZ6stjPa2k2dE6ne4MMdZnYVzDvVM",
  "key25": "2uimmGtj62jzahHSXdpEBisMt62ShZN362MjrU6psLLpWbz57RAdZXQGj1pRfZm1tSynZzZgXufQ1ZScL9wJ3FMQ",
  "key26": "sn99Xenrgum8vDJebyCxR1jF8LBQTB4Cob9NEGTJ9yCJK38Kkn7HULK2foH4TwgPYrovUhgbyA8MJJUwmfVhDhG",
  "key27": "4QLQc85sh9X4VQUMw9KrrRLkfBNReiW9kWqiTqpAaepRQTFJ8etXrFziywYjatKAAyTJ6aW76Pz3zwUfW6sj9hCr",
  "key28": "23Fj3mGjdpyF2An1bwjRDMtHag3uqCrBS4uB3NU7txzUq3xjJpJrFWWwyDViKHXrCuWENd1pbnNhD37dHnowhveY",
  "key29": "2qehNpa43exJTVdHQhC2pPmN1kwwMb27csHTvQDxiVNKSFJ3ttRPrWcJ3Z4iMJK24Lk9URbQfddddwWDgx1iBg8E",
  "key30": "2RRf5rpiVU9JGWhXer5tCwtSY4QBqCvw5vAz9qeVepZnNbJjVoVhjYykhpkNhmf74vzLGJbUgtAeVrrPfaukN9VX"
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
