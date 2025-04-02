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
    "4BKArtZYCnf72cgFcY4RHifeqZir8QJDvDkngKS2iP7thDkfbjQRdpNnF2seppCL57aQWzbazjbhG5vBmwwdWYFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KpTyJBbsebiP5d19YeDRj37qogebqvcQdSFLJFLmJ1qgEvVbECozBxppxupfZchXmpWidFzdNzD3cR2CVywAtF2",
  "key1": "52EjP9i1GyXAe24sPToRHinAHmirAK6wMcHTWDxkncuzphSjdRCMzW4UsYdnYLmddVQJrQ2jp3nmNmLohaunyDXe",
  "key2": "52JNxT8kHCe5XEbLeM6DTGDHyd6Nz2Ez8rgPHwZk3AX7sz8Nmu7YryqaMKGgF8aZpxykMWBDFwUg2JGD1K9wPkdy",
  "key3": "3ZMaKgrhE769PAW9xXowouaR2LTQoS8nPnDUdTLSKiCAVxXf4L54dKVJGALNs7YnmmSWm3uqn19vDRcVCq7hW4jV",
  "key4": "4FDZZJPgTxUyfs1f35unyRNYX1iPoCyvin2Z1SwwhmdSLyZcNHL3om16sSEYghWC3GXWetf6AQjymVQhgEfezLWm",
  "key5": "4oXmF5Pn9EqQ4DAjCLMxXuk3Y5mM8jeRfpW7HBiGAvYXeLJfs3svpmKNoUTwt4BkjyhmGJPgqTZi8wKgjPE2k5dA",
  "key6": "2vdDepVE2MpitwztpGPtmYTRiPJC3PetxZkfFue35gKjpPPnegunB228H73rnKKU5KKLJ1AYJ1ekmE8Tvm6FMMX9",
  "key7": "a6wbypP6NN3GyJb1MJs7SofxHoQPQ2N4T1YRMq4rXR2zdYgR3oyq2uRYhLxYUeXqgyXcT1BQCgQAoTBib22WtXf",
  "key8": "2RhU2oBJ7SATYAJ1AL5wHSGURdyzTw5CwcRLeBJZgLFqFP2iHdkREmUwAoV7mCsbMufdMB9zyGpPuGZDwMpxQUzk",
  "key9": "oMJ2xnxTDtFqpfRiQJngAk2GCpQSo9UnHgVUNFtxTiucrag8fohLxypScCVqaCYUVEkdZN51xLWTXqdAC1vb24Y",
  "key10": "5tZS674A6mL3WFtGiKDoK1LMAtBwwPA8VNHsxL89HEb4A8fefkrqY6QUtUovKaKpho7owbx7qDzvST9VDfD3HTBH",
  "key11": "5BSEru46jzpnZFBn7ST1QpmNCPKkghpZ79ZkxTDNpDxt2X7izPq7eeCgN3vjFfU7cNTx1YhNHS2FtZv4cVJi5zX2",
  "key12": "mRGVApCQxpebcyp5f9tbabuQEAX8mqcZx2wZmeDHoKCkHychuhbutngQqZectqjE8rwrVYyL2egLuKnKzxRNBEd",
  "key13": "2bRri2QWHUcf6HVuKKRBZVDV8uY5DixbhZUM3Qn6BddUeWhCAyc4gMaA6edHv3gd3KNBrX8gJwzTPTHED8C5RXRg",
  "key14": "vMEyp7fFbPQ3a7rxcpWBwoP2K3iF3JBQSXGpFM87p5awcv8Wh7nxCth9J92AGdNuSy86mx92fNjZM31rptTosuq",
  "key15": "7RggNvvuani64dnYWw3afHQnpirQsMe7cBo2WbmwTpHonsGJ7e6wvqyXu5ivnwkThrVomckxazXEVSe77P8S7k8",
  "key16": "2tV96dq2ntUZDaHknao7zpCoYrB8huWARwX84i7ejXtqMPgvNj9Qes7LmGFy45KddfTAhGLhL3RQynvx3m7YRGqy",
  "key17": "4Y3GcjxexzA78JqqoCAJYJtzW2UbArCpSzBGpod8insnYpZjFBrMjkoaHN6PBFh1mGtLudPrzbXCPC3dMLchEYYo",
  "key18": "s6YBdTjh8YVpPtQvsRSyjgoY7itCSs6goLDcEuacxktqHN2woSCE6PzJ3Ey6riACV96q6eEaoSFK2STTKwiBjN9",
  "key19": "64ZTFjWyQE6my6C5BhaPYSE7vKxVYKDjUtmJhrxyTtAUXojEftbjbKTUB31APcrQqA52aFXkbTGY91TfrrPHEAVN",
  "key20": "3wE1ZAUd9HF4wpnC9PUvWB8EBsqGiSvK8KsvahS5TCeFDQMjfYoz4y2bSENqPw8xVvbZUGm5qE4NzcE3qKd4Nz2r",
  "key21": "58xFWX3Ca2rpFswNnoLNKoYg4b3u181FEak3seFLYFb8AhJ2zWJVtxMfQc6AkD91fzgXFJ5o2J8mSjS7HceuN62a",
  "key22": "3pfPLoQ5wJGckEm6wQD151C1FVu4WVrBrpNZ8AqP8eFLZm5k2wtL9bvkbLvK5e4wWWgLTewWQ6gd6tVntQCD46eJ",
  "key23": "4yJtnsEgHGeESSBXGvy43DZX1TGjYuYa8CoywCJbitcrZ16k6FYKVejA7AnaqSwDKmJHnsm2b1rBLqcbBVytxB8c",
  "key24": "5aLEFGbt3V1AFBfDfWtZLygcWaKWfndgPCVmafZLXfESygMajzyYmTWHNTzDSqbcEaA5sCmkuknU8WJ3SnK9vJWh",
  "key25": "5mexL7zdJqWxXg2UoR4LjF3ufMtGGrQDZ4NYerFUZ2sbwkkMULVwvJkaKeQhKmCxzfASjD5T9JeAwQX7X3LdPr4u",
  "key26": "4WmxZYXwidYvEyAie63HBBR3yyn6iQHjL8Zrg2jQS64eX8WGPedbkXhCM4Ax6a7mjtwn1SAkeReGXD1V3pAFKprj",
  "key27": "5musX43v4ro6uv4gLPPG3u6B24g6WGLGToWjqP6z2Z1rstXaK4mcnPFK7LMbLbZPdLhkGRDAJ3SV9Nq3KcjvMXdJ",
  "key28": "3z7vmmpmEr7Jub4ifHhA8usVfQKj6axNtRw59ptKkE7aAESLVFfiiGseCdT4mgLzGpK1bK5bKGhB1Xuh1zFaf8Co",
  "key29": "5waSqM7c1N97LJtRDc3pjisgvQRgYovJifZjVAhYSF1rfxaNWGWxqA9yQdjPhW95EkDSCQUeP91QCYDEuFo76ErJ",
  "key30": "5Q27M3aad4NKmocLcwzTByMHkcENyhUacbKQuMSHpMn2P74fRhG9FVTStP6Mtcrk8xLcVdByKNZaBEQ32Lvw8gVM",
  "key31": "5GHVzxyqVTq7tpuVVngNbWQYfkAMKTn9LHZTd1WvfbPt9qet93UppBW4CMSzYMyy9fuWqJ1qWYnDSmcuLpmjtxx8",
  "key32": "KFa2bkwXSbzD5jrjmZpkyicpg4uYap1U4ThDihRqQ4y6HkiPcX73oz1EWXYx1YAv9uDwPEzj38MBw1rr6s9Sr8Z",
  "key33": "4ct8U3sPbFXG92oepwKp8CHfyUevewrfQxjgTbrFWkL9g47LxXBUsA74xDofok7SSy53oKT4gdDMjrqFFBG5nnRD",
  "key34": "5uEHQ6AdgyRDVmVzDqZWfTUq1Y27MZJ6qAVvyiLJ8gavgMpfr2VZX4QL5Givokx8cFZwVCP31wXQaoG2et8PPn7",
  "key35": "3jPCAVUwTQEMQXEG4vq1fnRCyy1DqCGEMDuLKHeo7CCTQDZHAQoXStRCV8dQUNhJNEvokFg7m8oKwcJrBELebPBW",
  "key36": "4emUP9cr7iWBgiDxSzB8YMvVasfLRQCHt3vpmheepy2Uz1iTzGjRtY6FcKjznut9oZyW7A3rbEHae2yvgQFeBR2o",
  "key37": "2tnDrMd8ZfVVXWz6wvqKRP3h2DZU4xM5Z8YrHVKdFMtu84iH4FqK6v3BfAY99hCovQXPQC9wBeQ6sqz6fjfZvtoy",
  "key38": "tEAPujE8fDtuS1Z8mwQCqGbrHbq1xBaAqKmNjBwFHm1Mm5tw88kbokTRMiDkEcYc7nmmQ6DteZZ1EwodBBmxG9u"
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
