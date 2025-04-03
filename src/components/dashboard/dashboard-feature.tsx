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
    "33yuzjVZwMPEpKhyLrk3Y5jsY7rzgVZACTcnDiectGPU3vWnvgTjjtrJnWCDn5AAUNiW5iCjWrmRdeznzG8eUyNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51xJHYPxptXtce6imfERW4XVETgByKys88WLoi85gcdzNiHwFnFVmpYMxbUdgdZUygF9QwyqAe1Wh6jSEHxjCc9C",
  "key1": "27Lmxk3TaebCgJ29bB1ofc3MPeBbJAM3xKAWm5231pdgKQi6m74sRNDt8FKYuGivxW8jZkVkFP2XTzAYGr1zdttU",
  "key2": "3Wpxv44GvwKMe8Uio3UZcQ6SpHfE6NKgosAVSToAuQDAiuGSUHETiccwxNr3AEwC2pAHnmc1bEHUvHthbQsM8ukU",
  "key3": "22XXh3uShwctkRStoyZcCGmfewrepbCj3yUUj8bpQks4YVo8rb69kFGtniYD6aXrRWSxwwPHAq3dGnBPocvkcdJF",
  "key4": "4CLdqxNz1KWEk8AR1Yy1ssmMZ7Di6KBewTKVMVDpJ29CoBRG5adm1dutzYiCFcoMEvRBCHU8Bdo82ZceqPZjQgjD",
  "key5": "4Lbw2hfUBtz1NowCik77jgWgTHywmJbmnqv1afQVYX5xgE7Hf58tvJX5BocytmgUniYEaqRgNsLRkvxABzpDvtG",
  "key6": "4Vt18htuGSeCxcCZShzxGTKTMg2khPSKxLFZGwP97CCBTx6qsDUWBtRBEor2irAPNRmzKJ321XRc57PSvggpdci7",
  "key7": "4cWpSnvSVyBXx9hsoyy2Bwxh8iq1p5XjgTZcE1znCRjuxd3vw4SbwRWLbvUz7ky2ew6hQGw4k2aKNkEi1LcNVMX7",
  "key8": "28Yq7nJ891rn29k6F8ffmS97qGuUVaBX4XWT1UFqk4DKnaMZQ87zeYqWKTmW7ShzGNK8XNVskGLnVv1RGu2nCX53",
  "key9": "2EdfMWxzGtdAfLqEVDuzChUTrMXpTH3es5hpHQwJ88SLgtS2zredtQ2C7sWRSDy2oHqpB8tPErPm3zZnZWa5a3TZ",
  "key10": "5F8QXmfAJp9ZASfsKi1tqhFGT6pMpFY5eT56bGhQy4uV87BP3TstYxbmSdUgLBRW8v8js9Pe4qpJtV37o3u1b4Pq",
  "key11": "3obRTYy7idxC7WNfVuAJ3KjZduyyKFofpkw86KuHQ68QD4rSEMJBSn3x5prGSDN6zsrqv1PyeT11Bun9UVobMpzF",
  "key12": "ZXW2MLNXBG6ibCfuxLeCLEG5mNPVVSytWGnvRgP8mnp8sT7LK75BZycRTZ3XDsiGbRJ1ih2b7hoAiYP45dym7uh",
  "key13": "5ri6EKzuFL5XG3HK3sXpnUPVnC913FLxu1WCBTBVzWszHeK4ER64AYdMvBhbPwxXytYQBeVvp8cbUKiSaC8P4zmh",
  "key14": "2BbwpR5ggi11kQwXeYKXs6PWEiEgorNUTqGi13aNjmiKusqwE7z4Hg5M6WZRxQ9sJ6Hk6aA3CvQo6y37zSERKjiK",
  "key15": "2qJQmFnABCM4eg6dsWtd5Fw8pTZ9T5mMBszLLsujyiChS3fwt4hryh1PW8vnYPbnNArA7XMvYbYmPbWT8Ua6BXUd",
  "key16": "2XhrWfpDhqrdmT9zr7nPoUick6yMSLkr16vQ66nxND3zDEBiyLbxknyj6uw5gnP9sSQVWLgu7sPMLPb597oVsFbw",
  "key17": "2iskcRLv93qJTMis993vkwgbz7v6itdejtkdCiYbHBNwmPQDvgUWk9rN6X8CzJWGuBUXnQUGwpfCQjPku3gvY1Zs",
  "key18": "z6ZCxQHQPmC6yGnrXGyhg6K534URqhJszREZTBaFYpQaAkdtX3u4qbCr8FEtiqraiSbP1gEz8ZLaj38mJ447qHf",
  "key19": "5rkHjz7awfmTGTofc4cEyvWPNGdTENCiP44qTLNLCstJqasFMnDmffGFqXtka8JAyG546bKMpd1yeKUA2KPkws5o",
  "key20": "5j46GoFUT5fkYpooMHKrf28mzQkYJUxCoo7fWPCpckpNH9jVTYeHNLpWqnJqtsn4q5JM2rw6B5gnNcYJKoKNqHns",
  "key21": "2aisLrHeLv1o9VKHuU6v9SfDRYA6u5zrFsfvFSVtuq9RnA3a86R74ee9ckQF7WezqryStNZ6iD4iTtzUESEEQcYh",
  "key22": "3oH7yt3A2drWhpgA3yfyHpWeqU3Jr687j9DYUFnpNHTnd22tVfW8Avuvsst97wacd6VAiXgjqFZbx2YPDCCG1A3z",
  "key23": "4RfPB89mGjRav5qFPGhT832kpuM6GDLJ1gBnm6ZcwTALWeC4YWmpDDzUEau9882XZRGoSncZLaku76hEYwavsAQw",
  "key24": "4agsMjwSaTG2EXFxf7nSqw8Q1nYbRoXj2BMEAKdNkWUPkNgzzE1XeZtLR2fepBTtFZZLgg3BYwpFwfNFLz2t6LgE",
  "key25": "2juK9PbHFjCvK4uKpKDsYRspmjWsbSgfhQdVhJVsZXZKhzrfTUCZWokZeb68VZgv28fQct2raho6H72EkinKtk1x",
  "key26": "5gz4yvjw4HCzHjKjosbDB5yuiuHYTkZLXE8ZohTjudFDsSTqQhaXUFTAAaLr8Az8vPaRX94aUtBZhLfYwAj6s9LV",
  "key27": "4L4LNqvjCpCqR37i17m9Bw3dvzgkrS13YWK85fshdpPC52cr5Wpc9BQ7xhgLe67bFSnt5wpE32kDGgEcVASERXcF",
  "key28": "5r59mrwz65ixuc7dvzSM1WiWRk1mKNcCh1h1BAe5c2SqhPTdrVUQCTbpi5ZbC29kuVrc7ZLBoEzvZVQz3Zvh3iH9",
  "key29": "4SZ35CPeuReRdwV7HieKRhyWhKt6sMZLbhr8WS2TneH3EKvxJumRRva7SkxgJ73S1kFjJch4ay3mJZ8AkxeGq2X4",
  "key30": "2fHvCNC9zDdxDUxoGP3cMBMVzf1T4GsKZXDeTYGUXn93MX8RySSgZjV7qaAHKt4TWQ9ZUpTsC5SBEhVHvgf97yhG"
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
