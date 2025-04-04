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
    "39kGoDTvUj12NHr4TMuqj3iK1ArFyr69LCBLFAYKdbzeZERde3oXzD1ZdcqiQBWEasxKSjqxnWLyq9xVu65ybwCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HWHJN2pcfdcA7nBihTg7DvcAqy5QrzT8hYXkp9vXgwaKxRXxLutzHDDfa2DsiYRimtctPUJEFovZEfuCeuWvtC8",
  "key1": "4SyBF9PRDnS99hYpC6MuzrfJJYyt1pbz59PAA9YhTCfjTzquzqUFBJzW7xyHPhDLEJWTb4cFW7kTXWVFqTpfaPyG",
  "key2": "4gJwJrG1bPnAjazt3nizND7SNSpLpRcLkZYhAFxpSs8gbVAvNCh7phHgGhTN8cqgMptBaeJt3XRfcXN7ZAc4Bejx",
  "key3": "2xjiKoxnZNNCJQBfqpMR6Fgxofxp5zEGcmNfwxHSYk7Ud9223oYpM1Nma8LMomSJiisKPoah1ccM1DsGUe28MQPo",
  "key4": "5d3Sgo4v69az3LFY3kr7cwRUTwpakphmryhc89ReQLAR9gr7Zpqvh291Smrd6XnSAkdRCVpLVQNENbFUEp45w9bc",
  "key5": "4hqoGfxaqfdV7SFCa93wgGMqvb6idEmYX87r8mse5aGw5kys3EnM6nQACnaXZ8ZQ24cXHFqNYiaxfAGKQQRC4AYo",
  "key6": "2YUXUXoN1o3s3tbc8Xmpg9NWTsARH7B2Z5yjGLPgDS7SmrXgwLkS8nVDdnPXj9FUjP8zcRL5c6xkLwCEGLDJ3oRn",
  "key7": "5k4DKiyrEdYuX9Zi76Ws2hzpjmja8av6anyTUuqe3syDYbLn18yvTdhnduyKKN8CcfkC4AzUR35ciCpE7HpY5p8S",
  "key8": "3DqRdp17xvBka76oxDHYeEF9DPH2pQbhdYDNEJtddfXFYFchSagv84VPG3ykyuaNafwLbKum1m6dYvtUqR8U6niw",
  "key9": "Qy5noLDZFmZbvx6NWancRREsXauXzE8iCNJj627BsJq8KrM33PPEaFDnhEtMtNaDHkfiB3rGhZbmv68xCjBdxEc",
  "key10": "4K7n23axKDApvprJEmdPtB4myDeAcM457irQ1gu95r5Agvk6i6eZeARibfDiCWLEC1KKN56bSYy6H41cs7i99c4A",
  "key11": "2MPUDX1MiMS9fBmJ1eFZwbw6QMkDPSyzCcFfxrP2z6ohW4sQ9y8hgkC84mycZnRBpUVzi3oEpXkH3tPQ5ZGX1j22",
  "key12": "PspMwcwr2sfx1VPiMJRykNFSgAFg53i9c1WhFQRQS3DvUDHBio9Pm5FbnSyfkP9qFQJAeUeSwYLy1PEXBZnFGyh",
  "key13": "4hXyrEe996a2rLWB8V4FVMb4nXk982SCizCgVb3PiBscfPv1WS2Hruu4tyMfA95GNbPE2kgsntXXTPjkFYmUJ3X",
  "key14": "3pnSnDcBLNx9ZnYJHkoM8oTseBcXCKpucHRFWZPQNXreUsCkhPZijetQ33xtHD1gdCe5nsfvtZifoRThsYMtfZ66",
  "key15": "X7gydvaE854XjzsFeM2FnCqiGz5wR4edef3xu8dvxzjy5mCNGREAGFB999SigSdyc93EPgdU4n4kHQn8N25ieqm",
  "key16": "2gwXdAjSTq5XcytB4qrSHovS9F2ReSRocFbfCWCBabzXZQmYakP8nunr3peUGE3rAkgxviYpFropPDPLaDUbwmmA",
  "key17": "3eiBSivYWBW6CfuvGxQ7vv3CugX8MQjHYF8cE8ttzPEx1TB2CGfj4TsXsUHQGCMQfw8MkkFdvfuVDYbqM3K4hrET",
  "key18": "2abt55u1aVyUZ5nYAgzg8fikfC1vhkJVRPJ8AbQWJ8KUyNZZqqp8qsw7rh2G7T768wMm4mV2sfnkVSXDNp42rH2f",
  "key19": "4mAUE6T4Wusxu8HRtAZJ2pSju2vS4wtsFisjSwJMXEKUrm9RupvF9tYP4HWU8PuCrQVN7ypHEWAuwUjgfQwaHJrg",
  "key20": "2kTbNRm6HwYo5iRY3VD52GdGvBAwFeX1vcmbCxFGfJbXZegt33cEA3BMbPNURKi7PcSKUn9APufkRtPLErvJDtnR",
  "key21": "2gsxaZWFjqLroH1v6paxJJNfEaUqxF7mtFkK3zMxDoJo2D8JXrRbV7bZCK7BpVSLdoJmKauqkwv1f27Y2dhxDcR1",
  "key22": "3mm3oMtd3bkV9xhezbmEtQjkTXgYZDZmUBXuSN85QnphQbYuDc3DcRmmqBujyHNxSwSCo8ChdJNBBH4df8nzBY8k",
  "key23": "4pp6u41fe6T9bwr6sNH4A2f38Ag16Ms5gdhZmv98vMncJo5cRG72h2qbBBV463YSK2SChiip5EYpqKeQE3WBQTMa",
  "key24": "2h7hAfxJ5d66z9iyWrC5XGt64Ufju6FWPxYMvuZTXgsCTFEbbbuu3p6LA8uWFmMwFDYpZvxepzHzkDMdJeDzp7bT",
  "key25": "4CguaTjxKain3LivUkBUFtH2v9zYCKcYGNApxs3mx96oRJTcufiavfkwbnF6bUYTjr3fXVx5KwbuGozfWwtTCPxr",
  "key26": "4fYTbaCQBiaV7ggiQcbMPrgGSyvZTPExqUACgu5GyieT98TVpN5ubLynzzUXkd89qYKWbWezWnhMBewcTMP8AybQ",
  "key27": "3h178RyFfjsVhBgmagMFifZgox8PA6ov1CGhm45kSwCPerS5WKrqUkQ6y7kLhXxtavBqGEMRraT1pnaMLGP2tr3m",
  "key28": "3i6aYcfSiNLPkwkyr2M8F6onF239VmEueYnhZuJwPtfQf7NUjJMbJX1h1JXuBoMfnRarwbGUfMKdQSiwWezsTeh8",
  "key29": "aeHCHhX2jk5Rj2s3nUBz5bpkuaV19A3S52K8kAT5YpvHWW5DZrZx1VoagR57Cta4APdoY14473C6yoGKQDYxEkR",
  "key30": "3MM2HRTJGb4ChXewhPpSoj5ik4qJuPw2LirLE8z8HgP687n9LDgUpBGC1Ke3jkCRzWZvTjaphbMHesLEweZCePFC",
  "key31": "np43vrMDq7hZtmQxAexgYQMM7doeNQ2Ruc7UpteL4L5rE3QvqeCL8qfWW7qeuQWcWW3w5mdc5hzyWVDGh8nMjzW",
  "key32": "FHbKsgB1injroS3GtgMeCvzRz1sdcfd62v2eEasNFQXKya2Ce3SoGN2bz8Cvq3TCAWCXxd9CvRcB2vMqEHn5hdH",
  "key33": "2pvHbzph9XZWRKS199gQdDgf7MX7uKotAFokrWXq1gHDk8XgVCZwnehWkXeiyg7qitDTPqGhNA9CnMpT7pQWyjiG",
  "key34": "3xJSAvBLYVbDVEVBrAPhfjw8So4tA7ExcxMNkeTbohmCME6bX4ew4nLBLFXCduqByGoCnAzNy83Zo33AtmUHib5m",
  "key35": "4yrFo6AP4Nr7RQz6nYFoNBUZD6pAqngLxmnv24Ub58ESNinjRVx1KnS8XFq4mvY82287ds1RgZWAFNzXUfN5phMi",
  "key36": "2sNAb2zWmgjt83rHaMcXosVuyDH7SiwexubDyL5cTPXuA9HvMGG6ouirB8vBwwD6M16HQBYivzEBxidsmLJTd5zf",
  "key37": "3ru6539Het73TUyytWUQDWoqrNyeFdtcyuB15qqYteTxUW7DoKZFZnP8KjBBqULPLdraT2moemvCBZMYPoeiJofb"
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
