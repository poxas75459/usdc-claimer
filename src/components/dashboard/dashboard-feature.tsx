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
    "5iQq7yYpeT6UHttvrnvz6KBXdfdVpo7usoxJFzCsegKMBaNNL82n73SpfZmqw9J5dxb3HxKvi1ey1maAGTTuRC37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n2bYqJL5mC8J6AsBvnssBD5pDTdLvvPaKwKtn6c9qCxp3fbU4M88bGnE7uKYEcq4fZ3SVGxZKroNNWEG7Lt4ZBa",
  "key1": "236iRS8Wna6MQXa86R9QRkE6t346jytZdS2sTDgDGPxsevucFLLBKepdaDrvSEughvoShn1qg4jQUYQJFEXE61uH",
  "key2": "3t9NaooWu9s7214L4BPJK4fFJHTfVbPr4fjEYBKBmABR53JenRKKgcC6ButZoKxeiXEmGptQQCy5rMYP5v6DQwNr",
  "key3": "QgxXbhGD9doW7efN6cvrrRsm7PFisp6gDCuuoKUSxURT8e55NoZjBWf39XHj446UzSmLJADKuhEpR9g25K4hBYG",
  "key4": "2GKFMxpUX6NSxNhQ85twMjdgFzeW4uNygdR6kDDuPvWSz6zBqusrvVkvVWRnekkpuzUkASJHNe8mMGGTCwjtZRcy",
  "key5": "3SnsBdmsTFKLxiswC1fHS8UYF9doa3C5BeX7oSiSTUL343HHQfZ6NXWcGF8ZJPRFavZ4iprxxWRRysnVyPkQkJN8",
  "key6": "4ERHfr7Ygk5x4WSA1TJPNFiMoqiT3s5rJDVoFinArZrwEUHgZ6B1RQfgRkku5TE3kegSPTmYeEuQThPrE92uoqpY",
  "key7": "iaJ2voao7mDvcdC3RDT259isPwCd51SCVV57JzoucX7nqu4G8LS8HUaKL97YCGWFUaUBq1ePaURpMLriKJ5Jzp3",
  "key8": "gWopVNw4ghjhkre5Xg8JZ6upca2Q6jJ2n4BoQqJxmcHWTVYkNjE7uCfLjLxhdpczVQPryj7yAkXyk7QA4vkDAjH",
  "key9": "5sDiXcumBcL1BhNK5pHZXGEuFbMpXQu66ji58ytUcHMJoWe3XLcqTyFaHeY2CregqCy1WgTL3QrkkUHA1jcx93pe",
  "key10": "3DhcGUGZfzM1sDh5tMRK3C6rdpYZNShpFbdEpHwUKiosAeSpA4bFCQBuwNuLDpAF3u8xfCWkcWnc3yYt4DVzXDBE",
  "key11": "4YoxVgWvxpEbc2eQoBZeqJfo6MUX9ysqax7LWaTEg76SAMc1p6jTW95mbLbYNXwX7jMCNVE49VxZN1CQDQ3fSM7u",
  "key12": "3myuJYHGgKGjTM7wSFjKcWtzTxVy4bSQWdgWk6YuR9VaV27r4nHvDiAzTPYoDzkGjAZGc8xYzrpMmND3PXP7TeoS",
  "key13": "3Tr3AGHrxw2p3necrv3nJXVp7RcCS9dcXYyo28g4QLcGs4XXnPGmRcUbsa1UUyMG6DYHPY8cksNb57mxDEPhDdek",
  "key14": "MQMH6sBRWyjw2KHesxd2w5wmyBzhKfNSKxGUWVCJNq7nsnsbZY8aNXa25rC6FF2xophM7Lm2jNc1YfTCbJchYaP",
  "key15": "671ogmdfoYLA2JSJ2oWHAaUPe3jx1u2ihMuo59rJojmRCFaTghrjPhhosKeCz2xpL1ktdpJhNszh9VEq4xkmcWS7",
  "key16": "3dyt1HkFpHNSZkUsic4DsVCyPabBYjyPWyJkj65zZa3VF4zme5KHdcwMjWeGuRma8ryGkEzw2L9QwhX66oqSRJjb",
  "key17": "5Apf9rF3bcw6uQMfYMp8UsbLDoADGUw7ufipsA4nn1M2VDvMe25hMhsy25C4ux1y4snChrEiFxPxWKszKQDsgiQg",
  "key18": "1USWQUxT2GT7qT75qyUfzWtS46bcXhmXaNtYguMaJF4QLTVSrDL4QudnCQ6DVTLjDyQTwVDuL3yiGKdeH8TCKdF",
  "key19": "5LVS4SXSTUCwXvspzXTqNUfk8KiJJ5WCDAbSFukZjsYGHg8Q5UxMgWV57AqmpPUFDMtuzwWyfSk1cW1uD9awT2qM",
  "key20": "4r4LK77VReV2Ni9n9RSZ6tjUgxi11MkZzjbmeMp1XKiuuRgaPYqv1AiWdY7MaGeNHf19GqjSHK6LY5aNaZWFwtsz",
  "key21": "4a96KRqaHbj3RDLcZJt68MfxAHEPZzkS6jqEEoL9HcEU9RCj6hrN6rPRHhXu7hEVVCdouWrYEVz3PjFEyyW9VRmG",
  "key22": "hNwtaqTJHoFsaoYzzK647TH5Yu8WoNzqoY2k5zenBYCuFFaEUQAmyrdWnVzsaepUYTsg2mtHFU7UwX8GFXZ45sZ",
  "key23": "5jHvmhnyhwH4QAsG2xQX7sH16b9viSLqqq73o24SdxGykFPHdxA5XfATp1Qd22y2MGCDRAaFhGjBxFVsyBV6V7QG",
  "key24": "4BSgEcg3CWs9Um5qcTkxP2Yy3xqWjd8Uf9Bb8p5achZ5SNYrZskPqtSYBJxDqdEFjcJhrLocJD31PRgjwhBMdHh6",
  "key25": "4hKktQqu33GMm1Zyy48b4FV3kkFegta92RW3LLUwgPehcppYCcA3P5wgFVyfeyFPBpN8FcTKQuGY7gQbmS4DBdRv",
  "key26": "2GGGpmunWEaYP6rMa1EaHmhiwU2xuBPjV5GwgS5m6usakCQvmFEz7b5RR3HtFa5b1pDkjgipS22PEsegfnfYL8SY",
  "key27": "3jroxVW13ruVTg85f2nhFaWiWevgavHQRzLZ5Bz2YT4CmCrCEjAsakdsUhxtc2VJk4uxNnnr4tHUh766UBeWTkzD",
  "key28": "4ST8KRugBfrAo2jacr8u1GzSjWMwanXKbELtPuV1UPcDLeZvWiENDwSHsQSfDb4VYz5rzegpB2uZDk1NyE5uU5At",
  "key29": "5M6xcr23uuUo37KP1k8sdS6k1Dmfk4KihNJauc8C3iGs8vaiGEtRWxpVdGkhuQMkvZpAqn9Y8jJwjv3fUKCNP8by",
  "key30": "2muB4sH95TeXNjg1uJikACGNRfxy8KavuNVKKSpywgM1GSPy2gY3wJ9fA6RF3NnoyFzsw8fcAfuJTBbiYYwT8y8g",
  "key31": "2XmKmj7PGw5ZYSPxDjsxrSJX3Arm9WoGtsEBe4GDcjFDDSDcX6jWCxutq9KgY7KAwccmSjAG6b3peNmdf5fSpRH1",
  "key32": "4jWFS1kWLd56RD38YWZvPWVwKBfv8WoSFjKK88wmzdK6vEMJaD7KotMYjtso3SVC6ccCDYi2WJv5Aw1WYgA74PtL",
  "key33": "3KEJuJsCh3bzaeKKCQob8SN4o6y1AhBsRVDkgeLgRSPX5xNyFwd7Wm8H4RdJ7CSiHiABp5Y8p77XpmgLXNetCziG",
  "key34": "4ee4nzENNqwBG3RyQ2SWBeo3GqNubR7LQXJRruyx1EhokkcWPD2zrg2LLJDR3cJS6yaPbPAGKP4wau4qeJd79oGS",
  "key35": "fSnPsapMKQAZQ6mohDg6C2Bq9a7PxQpaq8JGFgi1HhoKQVJ4o1VKrqeqRjkMWhJ5ZxxpFR7scUy54QTizRy8MQf",
  "key36": "3xipqwKzJbqVr4QirREApXMU7n99v8u2Bhb1yFwehfzyM9vQXHX438xKbjDzLsxBQFZgSxJxoWnTGsssVSF4M34v",
  "key37": "CtiMoGqVr4iEh3j61itav3Uauwp2cz2iqjojjbq2voZYBtgADrPxhcsXtNCfSHM8QJpCoMx3Vaw4T9fnF2YVTek",
  "key38": "31889Z17QsnHt5p4hrwfTEuXMrQb6xSVTmHeaMbojaNimPmmmxMXUn5YSMDNsLAJhyWTYMkMMDzHUmQwe74UrxGc",
  "key39": "5dfSjbCmxRCxdQWQnKaAtVeQ4hruZzXEb6nWpKAYknkXSM24Us5LFJF2jjVMz6d9xN8wSEeCTtY7wU9nr4Hu9GqP",
  "key40": "45uFukRdHnqnj4QNmgNsxUxidbHKXitgMUeLQotLg9F3CJ85ABukEup4ZHXSEbdpXLUbPDZKXuzEZvoktFMByHY4"
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
