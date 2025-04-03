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
    "2E7fQnW8gzJuh6rkBptfmJEuegJ4pEK5KvYeiGNA7TPYaGfgrGGWxbNW2tStxwnf4mwhbbWNgzcoiGDip7r9DByA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ArYQzGNqXuGUGqyZQd2qkUKvwdZyXPbMYYuzxHTXN1hk5yLAJEGTFzaviKCmatgFKbrVTYQJbyuU8XFbouff8tV",
  "key1": "331sPjf3rY11JJrAQGsR9o3y9DfNgvt53uqNdSGr4xznNPWqEtTSfviRn23zDqFXb5vuQS2KRoWrtnrmUH7kqno7",
  "key2": "23yo99yafDq1jnXEr3fuFU3LSS4DLrSqTi9yimzNAXuiWCCNTeg9tpucRmdFbeyALeWhmyLs3pfhYr76PtEj4bhn",
  "key3": "PUGFGN5BJ3ucswnEeEVojEpa4gn2su4ku5EuU8yhtTK2KqgYYUha8nNLR7kdKvYhSp3RJBRc1Euh1hoa3UZKkzr",
  "key4": "cVtF5WAP46F6zcCWctJ2peKfY5kDmoKZr5BKzY8dEoxpJwNRiJQYdws7t4tL77h2HYYAfDJ3GvTek66ghYjZkS3",
  "key5": "5DuVcv6HKPyG92rHaokC994c2ucfanBdn7zQtQ9nBveK7uwnshN5M4MgAmS9Yeegny97d8ywyogjW85DiypEURzV",
  "key6": "gmhpZjs4nt8V6YUGtxS44shLyZacwAwrjgbiJd4QanmuJHB9kxthNB1icCEW1XADwWsvu5Kyc33WspNWLQFD1mP",
  "key7": "3x39JeCkX6MxxMSP11e9j5v6GKhs1ivwoXFbuWpaRmFHJvELhYYAwh3KDqoLXWmVtHHTqcaTjo21ZPcGC4V3sDeg",
  "key8": "47uPqsQaSXYQrcw76goebNRikJW14drveczd3FeP96z3L1DzmdqYBWwKN3sv9pwP6L7AxtkzEqQvkCkjAjw5CBEi",
  "key9": "65B3HrxiSiTqJBQdNVQ2FVQoDHbxLuDXdu6V2wwUj3CTDv2z1EMEKGKrycbiZYS3WqAAkwxg5fbemoHNo3mgZF86",
  "key10": "57YrTQYCJKyWJwdQ7QvKsu9sWztFocYh9MmpYkG3DDXUF3Kh9hV4DtXTLsbwMEFt9h9brAotsdgtRKAecGodrryh",
  "key11": "39HxZ5So1K9ULhvnYEFyfMK3421mWK445s97xeUEBVZYB4UiYTy7rRjiArfpYeCtLqJ7FvmPJuWqWXx2pqL3W6mT",
  "key12": "3w9Y6n4jh6csyzmshrMB3mErmMVq1TgdfjMsaYy4QxKAAMpMNkughveVZe61117e6ZTdVjz1dQjrZo4EX7BCynCZ",
  "key13": "58DsnkdfYxLhggJuDTsL8zWLrvAePkphQ1Yu65Sm2tLGHjG6ZzZUbbC1g5rNRZmnHwnB418BxLmAb4t3wdWKj38C",
  "key14": "5xV6P53MrmXUc9hw3o7tkrkCsgL3r4eEHzFJi6zz8uTHM9UycSmYxYDPUuA9XQwYnzfKiCWxdwmx5FAKYTk9qZ9",
  "key15": "3637XZYE3pfd3nqr3ydhYSWvmSyE8U7KA3ZRcfBhZmuEj5nwFg1aDiU6CU9om4BcpJyw5rxeyBxzA8EUDXRN19tU",
  "key16": "4fe1xjTkxnksLnLv5gGRrd6eZmvJ8DZXkN6RAeVTHUAriwExwgh8HZKpQ6CgdLeL6v1SDNPJwweh2GkdVYdjJWqq",
  "key17": "2y4zFWtAjTnCHFg8YEiAGdmvYzWmkXRedvTAsKgVRV1A9oDwn3hkaVnukontyvhb6XuEP1mKj3q9fAqYXn2h8dgT",
  "key18": "3RUGDPgyKbtTBXK2GJDBnUHLoYbiJEUAwkF3Zcnv21KxdEnkNbvpNGX2emsApzNwwATb6U6s3W9EVHpBjUKx8QJ9",
  "key19": "66F2eAQb3tsJhdYv24caFNX6EtTrfYZKdvM4KsvoK4L8TGMArSbFfo5cyg3iHMU5KhgCxfoQH4EqwB9g5CrzvMnL",
  "key20": "2imVxa3RT9Q1rAkdRiChWwfWCV18w11xzx92KrWaBdJCpDVeFjJZopT2ng1jdv2sExiDgd2apsWMMj7yJRAY61b6",
  "key21": "4xH969EnkfmXo4hyPbFCcmEuhyrPvdqRRKnDM4YE4ZnVxXMeSvACyP8VynUoNEJFzyxKsbJxRDpL53X8b4GzVMrj",
  "key22": "5rX2CKPvyj62fmaSvf7StwUeoyybtQqpdX32ggHpiHjj4rmodJDUvE9pM8sR91Xx1tx54dGKQhLNGfToGuv87Bik",
  "key23": "4L47fTRr3mEKWz1VPmmBNtRhFs2aaxpgKFNu9hiuBJjSPFQ5VQzquCqEmynyuzD8k8fpmHD4SRbcYQc1LLD289pZ",
  "key24": "4gYJFHCu8QuLAW9mLGJk1zmsvk4Y34VpAqXYiG5XLtnR6qauQqYyHBPdGtgAvXLFC3SCPrxrpiqjRtFAQQFMm2ee",
  "key25": "2dMNz8hFQC7qoAWkcTti81xnzoXL5tPA7nnDhUCoUG4azhpJrduDMueGU47eAt5VCzGNX6npebsVH8P4D6bkBX1M",
  "key26": "2eXRS9x8BZqNgWk2zzxQptdoZd11eq1eopQtYzFM8Ejz674qGudo4hrRNF2BZK2F8CXV7c4fF2bkUTvf9R5FzGnA",
  "key27": "RNSFHbBPdCwfquHxoJUUib7uEGMnRRVx9GggBCo9YKCcGeotB8empsP1JyHTmxNRcPvsQAEM8kAC3AmX5C1YTXM",
  "key28": "4uFRZg9P2zAQAAutAnNvLXXs13X7fnQGdh9Gom8vgqtyLX8wT44gurBJ6poye3ppyS9m9XKw9jrSLXc2PovLJBz8",
  "key29": "4uYDhxyeFQqs9t5VRZrSXoKfW8HPWsqui7jFQdT2VQgTHoJbiRAA3gRWdTMuXUyVfzXWCag6px7zoevDxgvhUC8j",
  "key30": "4KFWvo8KUGcQzJrz9GNVQHFSVMA4q6TW2123HLNQyBmWsd2DgB7tiAzXBkTCJgB9ks1XEKGwm8ris7joyCEB4oBz",
  "key31": "5nvPHZmUaC4iT7uHJKuoPo3D9YLcNR22dRA5hycMBCi61X7DjNFRTdNb3ZCZTxruJRPS3NLRVJxTkjmwpci23rks",
  "key32": "5Y96AwU6ffo3SnwwArzYVmKivkYN3Yre2A9SeZ4mhddYG6TWD4tpDpWz4hpsBAMhezSCzbqfzSKAvSEJwTu21r3M",
  "key33": "37oUQp19zsWyhjrb6vRMYhErXUe6euS9EwxvBi7tPQ9ozbP7v71mCEHvj5GHDGZxmLpxiYFsYkAaTYu2J5eZLEzJ",
  "key34": "5CQhibR1WXLrQ4XagBjmGKHYNNJvRxhsSLTNhqJgk98YDjixm4GvRKj7Pkh7UrshsaEUj2oVHa7NcDjZHgeksKGa",
  "key35": "26AoWQ2vtv8dMDTVHa4GBjxvMrieFsCf1jDSW6MyiSEtq6PpPUUtVuCfBLRCMGx9SDZzLDjLb8SiNcmNBFskv6Kc",
  "key36": "xBDVuuDi4ojyYCdPFh1C1bAuSCkRYWjzBx9zquU3HqP9bPSJN6xu8uAD4GhzRmyi2YSSg16uiqTVmKWBSRvZMAG",
  "key37": "3XdBAjEi8nKaYsKhKUWv88gmkPYz4yb5xLHExFC8CfRnNNPGRe4NfUFLQLfoeFEC9M64FU3VXMwWCKwg8unYf7nV",
  "key38": "3wBQsWsJQYpXrHjYaKuB2tTdyMJ6bDEQA7ktfYUGaLqqv261YYtx7D1k1Ayb6ygxDY8JejLM6E2yArDXZtPayTSB",
  "key39": "njHAkHSY2GX6TzG6yeFRMM4Ewfdm5w3pRFL93ECzL3UaVtz8Rh5k33zB82AJacpFYnHkFK9y2PVJMqj23zsYH41",
  "key40": "4nWzAtWGhi5pMA2cwLJhSVs1wqRKQLKNX8JUgqEcZmkFeh3MXLWEkXWnvYssCyYR6k3VrxQtr5R1FkXKzEqk3v9a",
  "key41": "2GYXWquLFm7mG3qhqiACN18cNEA65T27NN4efXHxtw55x61imvxeXSAMqDxsCBPrUUm2GfsGK3QbHkdzkuTu3eRV",
  "key42": "3iMnAGW68az1p7GZbX3e79KvvgBrG1JpRKPiVf21RvgDdB6a2q8bdzbSA8Hh5UL9occuP2eW2NnYe6ZWLTvcQZSF",
  "key43": "7fC8qAboRW7FiwVKJRpabScWTurb68HCGopYqgVuwEAbXU9fbecf2Cttk1EEckGx1HhKCL5ikNSSsGHvsCGo4xQ"
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
