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
    "32HJAfenh2ThKBnnLtcxtHiAy3a1MvoudvmUmZApmQxqesFojkhMC59j2qbSJckN6jN8i29tpzDGRZAGjMYUgCDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zp52Z4EXf1zhKWWL2pH6ufMBEeiZucemjc8xgb2c6UEbx61Tatq8Wq85WpRiC5q2S7dEMwPLBxbiMifk1HuyPcb",
  "key1": "281us1bfzaCNVr3f6dsyNv8sp3Z5wLJKQsghLiXdg7sZBdVVCBXAvxVna3apryukFPFVhmfWTYVufjJneFvxSHYg",
  "key2": "2aWWtnv4JzsDTAnt9ukDviYfYxQzUGDzxtP86jePEgDtB5C6utyCeVzH8mayxqfzTdhjUXHNeH3XWWHvz773UnLM",
  "key3": "3m3qK51nMfkbGCzCHYrUK55mYEd5S3BcKH42uaD2MgidWT6pWTvDnW7BL4R7yn4JsZZvwEvhoT1tTHquaPq8hoD2",
  "key4": "4nP2SXrXDGNL9JdrGSAYBdsq9k4J4MfZfgcWNQvpNj9cpXXf2ZbZoEd2sR2aW5W2Xptm4LLrbtGBoraqo2ZzwBPB",
  "key5": "3rVRUo5gGp8hnmuFfjygsTNXzByxsTVTazPM5RTjAAwXEiNGzdrdbK8fmsJxxyUsVpmq4DGUNk165XiiKJb1dbmG",
  "key6": "5iCacAVezBzvaZg8Vf36EV2awBZXL1H55v2wsr5QLpLNoksWEMYDHE8eQ2d1X2oMc1JibRUivr5Aj98hCFDjAgQm",
  "key7": "38SrdNUTB6ZTyvvSm1Z5oRqJE7Lwp1KPFzgh8dwLznXUCTgPm4tcUQpPFr8imPFd6nYpHXZmrD8gsN4ABsxgdziJ",
  "key8": "2kFYAKvfZCt7VEhYU4nnNL22SE1BZCsHAS5oYJXRn2cf8qU5gA9SzgiMsALzYcv2eetpG8bFLGNijHbsN7kPLtmv",
  "key9": "Cp4qT1QeqRdrfZGrB8SJsty7BeMTJ6LiDBc12Y48gGaJcRnFwqcALUvdDcgWsj7CsQgoYNaPPBMt6yAnx2Awth4",
  "key10": "x7ytKykEFheq6M8Qb2DMkHGYAbfbeiEUSKGPwnCGguE9SjUUrdUGajdfLZrXk6PBVqdyaEpE5ts8pVHYPs56C73",
  "key11": "41gfGtosmpRqitmMuYtYH32FqSY8q9yA63PbsQ2eVkw83VUdZ8gvEkW8ixba7AwJou4AQcqeVee2QSALbDZ2hewi",
  "key12": "4GXJAr6anzYJxiFkxX9b4DptN8dW6sdXFdRN9RhefDwXahWFeosmukfGxhsDuMiFQ25NuQu7kZVNd1hy3Gv7W71C",
  "key13": "57nwGZhRUibVHPHHZaC9dQovW3kPtKvA6qRZccQpAnicg4UFxi1wtrDh8WKhCmjhoNjsfo7Seb2U5yB4NUrinFcv",
  "key14": "2CnrjrFdDrkg8UM8ZUjFi8Znn2GG4dVCSJL9vvPbzWsq6HzHdzKEieXEi1J2B2ZJR21sr7m7hJipz55R83YEdQec",
  "key15": "dvga8resKendgjHTv5mGLgh8uPh4i2RLFL8MYqVgvgaLq1eHtGUxAUbWA41oKFJuj18hr4Hpij6Wv6tvZ1KBqQz",
  "key16": "4W6m4MP4U1TyFxSDyJrupPXd4oYo4AJQVvkWZp4BH8kRvGzyfqhiCKB5z571Qd2hKZYsdEnGV7y9qM4wZAagdw6J",
  "key17": "4ra7g91n5eg7oLgCxnGBdYHF62ETgdiwbK7KZv6A3uGJEVwZ4y55gnNE577VmFvsdUe5VCJxiesRAfNxqrJWtJ9Z",
  "key18": "45rShLwr1FLg7i7h2YyGSBedJWMCLJmhJfmouB1Ky8FpJDr7J6LKEx7znr2LbMPkvrhgUPJV3prABv3qrgUHZ5cz",
  "key19": "2tFdXq2ozBNEKp13m4qubAeDC9aCe9WbnN3bTiM5cZbPjMs1dK6A9chhoYrxKzYZkuF2M3TpeXgkUpUFD83eb2Lr",
  "key20": "rThHU6FNEyyFZ7ipkFZHpYAn2yavAk2dp1t4dwcKFBvFcfCR6gobREYEgpEFVk8PjPQ8uXBNjfsFcTkvikQPCkv",
  "key21": "3XD3XYijXAhJmjDHBBmSrUTrgpjzTrTCuk98r4jLKdG9WY58h59FewQpXGSNvZwDPyRs9yFu9gdyYLZj2aah8rJE",
  "key22": "26Qcw5Kz4iwMfkcmtSLF7DHnvqrHAVbkrJG1MWzEVxLTMpVP8DYhrnyiHEfzJFqBzMzvjV2S9ixBWNtixveP42ns",
  "key23": "4aY7NF5R2RdcTkFNrzJ9kgkb66t7CDaTdU2Q1P6HcTy5e6ad22U8CaxGgEARJEYLpWQMVnRtF8xYeNA6doGtHFkC",
  "key24": "Fm1V1EDjDMraR6HFJNjrE32WaDZxxAA2ytz3Yit7fPBHs4DdXXNEusHvB1E34XRu1XQpkNWWHMb4ddvcZWqv9dN",
  "key25": "PtSi73BL2xWBdhm75ya4jwdCRg6cEWWWjvjZe63Z18VPwR1HZxQqz78q2A6tXZFfdRga2m1uwYDqpLJR7tfDnde",
  "key26": "5Fca4gzAXExfHPuHEecSSaLn2dbc2prCq5QKc3TKuLhFyriQAQ8iX1TuNpoq9Vx8a1M2S9h7zzAJwho3NA5ocRbM",
  "key27": "2qFdhmZWRgoA29ciKBMJUkG45zXC92hxZNmUinLpvWZyFQAeuSMtjq15MntfTCN3H3iLa68du5Vz1Lu4kwPpYmey",
  "key28": "2RfVjmXH2CrtkNiCEa5H5WUBsC4hDKXak1PunXSTgDhWcdTwFyjcUwhPqaGAstS7KxZSf4WMtMYQGBCGjqZATsDK",
  "key29": "2uBkCucMd4SaUhziq1VkPJDgHaTgLK4RVcXYtcdgqbHAnDfveBqjAYaCXFvo4Y88GoGxoSfJseR5kVkKz7pvG3E",
  "key30": "2hAhSA2vqZFqSsiSxkmdN49cyJ9BAEDaeuqs7rNSC1ULuwh6HjKwapZru5Skq8Lf1u2M7HoTfJVwzmrsMgTdxMWF",
  "key31": "Xt7U4LTfYvmedr6oJgtNcK2bcRbH2tRRZPPqcoNAWqBALyTy1QA24vzmizpZ8i1oqVHRFa7BvAF66cTVP5FMptW",
  "key32": "2TJscJCkdoEtZ33W5gjvGgHwZBc7HMWbnMN4U5RQLmeRCXw8K9hPBVyp9LB4ysDpanYPZuVbYTUxma4DAhpiNTfF",
  "key33": "5wVGjeZEMFY8ExhdNfP89X2KRTpGG7LwAkCjgXuRwFmwnYkaFTcGp7UYKAFTDcKzbGMXTG3JxwEiNWHZu9Lm32op",
  "key34": "2w8E3JDzN2RPWmXbk8Ck2hGV6CSk9i9PsbTSqo7nazZSupeTeYhJcCjv2YAUM79Cz8Ja5rTZPbYuP5fe72uUUCNB"
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
