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
    "51MkzX1otSrfd8EYQsGRhevMoPM3p2L1CM69dfixc7bag6tK2fArJGaSecuehNobCqYEvjtZ3zsJ27id4s5J7Y4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fSCmkhMRqUwosGvAQoQwwzQMoAGv5XFMSNddfXr74EaJqRkba9nz1XZSjRLr9NNi9PmYgxY19dkUyvmTWXhcT4s",
  "key1": "2HaQUAsAnu6V2akZTMFJ8Ncc6K1zy8t47T9u9kSe5UwFUjKAscVzEjc4XpuGokyMAhLtj7u48ktmzxsjKZbrRysp",
  "key2": "2fnPiVWzdBFUS85b6LRGcyDur9hjeACSwHPZzwhR1VKss8GekGiw5gJ1aYeogxTNQuDK1gmZrLPBMXY9neDnYRNx",
  "key3": "5zTuYso9PPHPZhpopFhqUrtJoY6sCC1Np4z5wPgAkJv1U9ZJHvejtczBgsGC6qg7yWh2BHZoCEtXnaR8ocwa97SN",
  "key4": "xD8FVDgQdFzdKXhpggiQJNcqZZDuMKGpVRBLyJdpQJmmkucRMZiKuPEUQB3u9n8cZa6SN4CSX5RX7zLxyAWDfvp",
  "key5": "3SL5ywRKdEvJZmabnhbdVfSZ5Zz9z347E6vg3cogwg2BmAzAAvZneLBbnZBB2dBD5cZ6ZY8AEuUrScguXukorvjD",
  "key6": "5Smzj6magxwXotqTjEheNuatie761Cs5mLBiTaJSFqnhVefr2T9cpZt9WYLmkdvNovTdK79LAz86LVqjKvxpNYoh",
  "key7": "sT3n1uZpHxjvotxjHWFWPowKbubHby27rCqz9AjFmieMysCKDJpTq2PqhDUUiJUPTmmCyLtomguUD6W1bjLzkaS",
  "key8": "5uV7F63uupVReoxEKNZNqQDzqE9txQTAen3kPYQumumYXZtUA8MuvJFL558zogeLTUjxr8xDRXqypoBybwYmGTdj",
  "key9": "3xAZi7yZf8pd8xWeqb486bQF4dg5wiURtS74Gk7HEnMqkChDwRBpBNHYVyTa3rrMiR3HcQQqCLXZ9j5bnAraAQer",
  "key10": "35ee3Rpa95Y9gXNnbkj8QfCisyHiWVZ9SNVWoprbEj9wgwnKXFpMwsStxrXFj6DF3fGgenX6AYQ3Fv7ZMXCMeQkD",
  "key11": "Qtvy3ZLprCEjhMxB8WA5SySHSTx1rqg6gtpqWHDNQL4SKimJbEssx4xLmEVBEYkxe9ZhRKYaVCCseEV8VGHfjCL",
  "key12": "5KCzgd36Ro13WXSzQTSiX7EKUHQrfNXt9KSDKw3zw91t4gjiKLUDz8C8cBm6UYcdRifgfDM5cz27zgsHo86Qs31L",
  "key13": "2UBXrfgqvDv7MzrFZuXvJQwhhyaxtdXqmWhbED29XEdvNh9WeKsZ6LKrjy1eRBHvSsctqQtMtr19SrJTcf4d7sBX",
  "key14": "51so3cXjXMVsee3wbsknLLevdZSw41i8yybZ5mKKvPfZHB5mNDEPevrvnuxXz1NPoKLKu5GFh4TdL9Psna5P4E5r",
  "key15": "5a7DXzeFmFZAa3udjgptcaodVSm8WAsmQzUQd4Bqn1Zf9wehPxWxjF4uzcEibLaDjN7YJZUhtbGi3srXshtq59ip",
  "key16": "5jXowrALY8yTgCEvQLh7iRLk98wT3soR7asNjBVeMgRJtsZMpdSsxeQej2ce81o6LAcUoSecY2CRTBTZEdbnUEyu",
  "key17": "fdcJuVsn15EfAr79BYqEve6ToQSjJ541yWtQLDBGQTDVJ7hGSVHxnScu6aLUSKqCCbmVvsMVpR17kd4tLkRCRza",
  "key18": "5on5QJYmGHJogXVa2E7b1q3T1TsmgdnbSYi2QHabnQYg4G89iSW5xrBSfmhgCBBazcdJuEcQaXJTGgqg3mQzjC2C",
  "key19": "idJHeyEd5mVxs8KDkQwiUi6t9EH4CMMm46EDav6UHoNmwjRj7FoDWyPKBBUFyqSGbVEof1zehSwihTfE3TjE9VR",
  "key20": "596bgaJAc4WDkqYr6mbLzkgrxKdFa42hqkJPbA1zLC7rKJs2zp98qsL1QJHfTP1ZUHLNNK6ESUGsSPxHoWwj6XH3",
  "key21": "3qGxqXig2snwMwtiuJVoQ4gjr6swrrMqSMPcN2mMMtmUbYxMt1pK6Snrs4tJceeQMuK89Y5MRxQJyw1mn31hFYem",
  "key22": "bYdAeoWdGmb6VDMWXLNqt9XKzWFSsQPo41cRXBXXQdcXSVJnJE6Pz5ycYsmj2Fy4tQyub5VJHgyyD9LyqUZYPgL",
  "key23": "5E1MwwSCUCcmyAZBJ6qTDz6ej2mkeAv7AR1dvjMnEr3J2zBNvpUCVzJwXXP2to4svA21VjWK6dCK8LTEaQEC6BoL",
  "key24": "4PGxuanzhhwBFZKFDT7LimTBVcH6roTeUPF2eaHmkoX3wKqoggbE9auf2xVXuUMLdZ63aANS2yiRHJxHewii77xF",
  "key25": "5W6NEgoLN7mvBZu4KyPRRmdX4jCUMmgcncPwYJdiSr7UeaUhAgnnS5p2NLgANNPceBJHpNwYPWHQNfNgkvi2Zqp8",
  "key26": "67c1fx2ajnzVbjjN2zM6Er826LTS8A3epsERdSLMdU2RKKWXg1uM9ri5ZUsuUYKmDQa66vmz4pBWAeJJMKvH77tb",
  "key27": "34oY43nWRrQEAWqx822zpofzbpG7sk4YZd2MHGycyaWm5SaPMv46wsGtEdB8AnpeSgBiNfDTdFobtD6v4Vw1j2Ba"
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
