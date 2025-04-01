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
    "21EYyQ1qdx5fPxdECXs1n39GViPrmfKapts9WanzpgpBvd6DKVbYt979LMyHN1sb6DbsRaccA6ktizEv2x18T4rk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gDHzjifLdBttwWfuHx11bcV9PMTJPa11gRWKV51oDPaTqPnienPmVx86BhvDxXJCb38guVWkRbgJDC75dY8QVcV",
  "key1": "2bcvPfpLe5DC12ddMcogLfhDGkQxJkjidfDXePEMhNSQ4ckVKdS78kLpwFT9vgmZhY1tW7aR7tnLwL5MMUUY6ve5",
  "key2": "SJvbGjWNqp83JcbvMsREMZnhku5DYEBDw2ZWvMu69QQHpYnjvmeDD1B8mYG9esBgkrNQrSLBLK9gRUJ7sHY1xwB",
  "key3": "4ShQHqhK1iuEqegpjivo5fvM7W9XhzVmJ2WRtpX26i2QwiW676SP8e1iUBNXvU1dJ9rfA6vrwMvALB55aXtYRLa",
  "key4": "4snQAF9jMfQ4N8p12dYbijP5LzyrGWWyhhMsvNx2N8jRVA1ecAcR31zj5WYac8rqLtftHXCeDMhvawvyN1ovF3tw",
  "key5": "otbTSWQoRxEJA45ALwfQ7WdMHC889zTPKQ8UGH7UiCWQBQi7eygme5XkduxXYxWgUpAJwdN3Ntjswf9F3hwWeu2",
  "key6": "3BwJAMCKvy7FjyZRMD6vNNjZmQYvyZQGdY6EVvyHiCoL7rMa2WfNFb8Bm8NrXvU5SLopdfGT2h5exsc51dLDWCtm",
  "key7": "5kuEemXp8F4tNSNVvELXxzd9dY3FdzMmd5SrpNmezFbr9Rk2QpSWcFgKv2s17CaFGfTcTSqEWp7CzPBkcst1nxf4",
  "key8": "3tShFrepjxXQAYUd5uA49foqeGm1FHpwuBeRVVAhs1GDd25m7PGdWrHfbzJFG7eYbsysuc4j7KyTtBxiajjZtHmi",
  "key9": "4QSPNU5M5gRGonq8FyUBSExk2atxjoXkUFoLP1C1dTmSro2KLJR5TpSos6A47CuD13bFyEDbJodDpGJG1Vqz8DpK",
  "key10": "2FuAdxP32Jgkxj87LGenspzDQKRwFaiq32xpUsqEFsymEKwdkSRoSg5JTD4aFQf2pQEacJeAbegn4NX6Ukijr62k",
  "key11": "66pg5B6SwnvDD1HwF2zStyZFyB4MTk8533qWhJrQvyPKF6GNzbAirKYoVQT1v7J3DcyLRYUa8jWkkMwmFhzXSk2R",
  "key12": "s3vcbziDuh8HbiJhATLn69Htad3C73GMTxgaZHV82eAz4xPNYj1FfXZy5EtunQEks8RqDBu45x1hbQA2s6aCcg2",
  "key13": "kppWGbGEE66qC1Ez2MVtJpGBuFuJcMWsZCtMDz9mSisT5XKim1EL7EwLsEnQps93sRi2qBg2zASnvMxSvQYcwY5",
  "key14": "5Av7FW9zWRv3QiAiei3ydJpn2xTtnR3ZRGNCCxH28QwvAWuRTBwwfewy4HQBMG7BeXEsNVrHK3p2ZvxSH2NuEHa1",
  "key15": "5JP1gkuU1jiycK75o7y7zBH68RncAvaRx5ryHQGhnabV9R1yJ2csftUS5EhbfgyAKDboUNKAwy6AXGtgoEJB5zaq",
  "key16": "oEVow3HiEjLAEBTgPHdbdgCLwkj8cAHuaTL4stFNVm3mpHCFdrqFURTFZDpSGdsBCqsbTEoHn4Hp3JDCZKc62o5",
  "key17": "4asjqikphHJ4c46jgKEQE6pZ9DgGQfimBRP5W7JwrmPSXZoMgHgAGGdLKYkycN3CNWJ9j8SP98yVfBuikDkfCMLF",
  "key18": "3V9ydYbdtLS6TcXaV9aMC1kmNYKQyJjUH6coBhhj8KnPGSBW3LihdA1927AmE95L2MJCLAi3AAM4jjXUBp9YrVHS",
  "key19": "5dKwmzExWL6Xeu3QSWKTEQfgTWarVmb17RoKjoTVxG7v4QW7ud9Yh1rkJRvo5C4tVpm9VJDEZL6gLGSuRuVbZd3e",
  "key20": "331HCCvptWKRFQyKQoMA7ZXpvSK9RyvBCKQ1WaigP6DYpjubLsw74acKbCx47mmmQT5BC3wvsEBpAkbm33v6WocV",
  "key21": "kWxVc4xCrdC4NkVCcDpCpsMKQ4jH7E8be4ZELjnwnfsp9PDVhahn3STgShRdh44Tva2o5F95AXTuFVJDKM6jdWA",
  "key22": "4qjqNNYTY3mWAC1fBQK5XhvfhLKELQ4zhXi9KChDeFXRrhgTgFkRtMdDK1cZxpeDMSrnxYHx2QBJytB72gPBQ6iY",
  "key23": "3WzA7nfNsTHDXa7UvHgeNvwJu3599boZ7T5M2KgxqzGqW1Cx41BwqsvAceb4sPebsXY3gnfYcKcgGpJ18PQRBWhJ",
  "key24": "tgFvietpotPqky9n2LxFJJwK6wT3H6DpPB8T9LMDFdu1DQs2QcLEdHCsWYumEZeQfmri1THx7hotV8zMfrstMs7",
  "key25": "2agx7uEA5c4d8d1CiKWhLdZGZGbkDrxCciKVN9w6opiuqumBt8NJJXFT7yg21fnJgFmyQHnmiEK2goJ4FrG8oVC1",
  "key26": "VLGz583ERzpuSBYGdoB3D29MyQeqBexw2jXR9YxXVAJuLok1nxWbzEi1ebiRifDoot6tQVMRZkAhDCGTEfQ2Mmy",
  "key27": "4aYqvC6A6vLhpvXrRQ5tTpHSjdp6Y7V2m8h5sNhhEBYeGeMrrhKFcahXU2bPwz87oCFdgf8T6HhmW8EKN6t8Wwo1",
  "key28": "2XsntcA5fR6hoJEgCpSvhCNSHP1mm3dQhTZn1NkHxDuc8CTu478W9g8XZrnRKD2N8y1kmYadnnXmZPkAt4TLY4dw",
  "key29": "27VtuxDSwgQQrrhxkNNa7sipUE2PdSvkskzTVSDXccpeFNLhdKed5MW1gyyLNwTT5KYeJ8C91vGc7odTS1zp2dcR",
  "key30": "5jNTrYEzeYnd6ztxeow7cwzqY3WRuZ3Yjt1b7RdaQm13uBakjBTPg2nYVK6fzotY1K9qGDgpVbLsUeXyJjvs6SaX",
  "key31": "3KcmJFn7vSo7v3eSXZdV571fvpnMwyDEN3mBDH3gHHKpjWNKxKHuCqwwW4vtxb94MBP6SCSsTtLiYrCPtLazZBJ1",
  "key32": "2bWdiZtA9L1LYsenSMFR2XVgnMRB5ZXGxkyUxzNhBdGZSb4vRKxNpstqgCvR8Xc1b6MNFGAKFeL74oVRo5zcTXvA",
  "key33": "5uJrHCZbckygkKbAfPebWSSALykdsPPLMWJg2CGwyeTn4pLCjPE63AdnFFufENL4LW2xeijPGrg1cVtvir5mNwHW",
  "key34": "4cavTAKpRKqhngsPc99qLs9kz5wefr3tEL8UBsr6YVZRZgoEeiSHoSj5woBkguufXEBU5pj3dqdLBiGTFz1eTsPb",
  "key35": "5XFAKsuk6wwqJH6ubdiaz9Nh5qKUgKCGztWtxsm8ADKkVUpBgmvkTJ8L2jKSggSnzEBjnFALzDfasCfsFk1M4mBD",
  "key36": "4seH8SBja37kJ8hDMbFVEdCuCTVyHC7b2ZQhdWnJ9TcoSBrUiY8W8CiGbH8hKDMudQaDJ36GPF8qQmnuVcefc5PW",
  "key37": "5wbbLah8xfJnJayPEMQX8u6Hvs33JmSEooCS7zDGZrwcaVi1y9Y9pBuE4G6T2qrTdEBZqNpY4sh6sPsJtkiTfdNt",
  "key38": "4HWbcnVvK6B6w35XyCU47ozEYE8ECnCdz4aF1kbLNLTb5jEeN2uuXC2UNNDqodiokiDQ6mjMXjiTBvDBppJ6aQkD"
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
