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
    "3Nv38vymZyfpKBV9Sc8pugxaajz9TJmUafkXiEZskNztux7tYCemoLNEx2hczdWoViCsWPoLFNbHCbcJkDwaspqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62hDtZwGPn7yH199Lb3Mi9PKje6bSHVuFgKPBeYEcCi9ebUH13MDbGPN5AddFUUh3H8XVLxRG5a6v6xGMow1Sejw",
  "key1": "5gBkhvdTivxzcQxzsqVgYcfs896Gdp88zHZ7ZqeeXszq7T2LG8wJRfoZcf9Jvpp8KK1Hie6zQF8io2TXioxyfCaz",
  "key2": "2sLCELTBteFHB1EraQJGtigQHRHRecKTmhpK6WjBqf5s2rgi1bcEgZNkVAxM7DXuFga3zHv8FChLNPPrzNpZePMr",
  "key3": "4VzsabnPyjG5X2EnsrqkEUuJ3oDAotLBxS6GNt6PWp7yKFuo6owfijw7dDcnzrJp8UiUqj8jhTL2xNzT6NixsNjD",
  "key4": "4E1tV838D5mhNHNzG42SFdHPEJvB4XFSdh3TLdb7aPUjNMj5TZWJEMVv6tuEnvQPMuUUSf7ADAic4Ea7utDwxqDF",
  "key5": "3cnc6Gg8LY9jtB2wpc8r9Mi6SJeqNY4Naep2XMSmvbMBnm7vW1wERGkCxdiGdiNCHw1YZCgLHU57peWrBp1KmbCp",
  "key6": "3BT8oXCB3hXxKRoH4Gd53Jt3mTUTzXRtCbZK6odvgpRKrFH4TnefpPcyKB9SnFXmsTA77aCwXUsNJ9Nw6tL2QtbS",
  "key7": "5zrBcssTep9fpSTcgn1tZu1ST6N91EKgVsCi6C5FHdD22cC5pbopc2cvMmkmJwoz7BQ4i9B2Ud8v73CDDSKDM1XT",
  "key8": "ftcyQLcVZvZNLtbYWwgyokxnJ866HmAkwd6sqsT7kUCexEwaMvBrYfjLxyJnw1RT71cHHcApj3os5ws3nbTNZYz",
  "key9": "3r1TwC4ZVho7cDmSJQGbEvPLB8AfnnTuQLkFjMoQERhFMhqUBm2huoBVKFsPfHBkAzPMCJxQHJzvaGyv3nS3xwbh",
  "key10": "3f5iEgSYBGk6G4dNSvMiAVeA3UCdYNHKFEJ7GBLqdg71pPG6CtupBjbyc4JpeR8gspVT46bFELSPwjAG6oNGJRN6",
  "key11": "42NR2nWWpLeaGf7tj44LMa1RmSU6K8yeCFSx7nPsfW8zB4vFYo6o6326apxrVmp9bCwRA55KhfPwcZ2GgTXbxyzi",
  "key12": "35v8bUFpPj9ehznHAwSQzq7fdzN4254k3HjRf8w1hif2GF5qUyLo5yAqpehuS2ZJDrXcrFSDUWfu7jRnSiYx3rB2",
  "key13": "2RJUuKkjMcmZmX8x1fMAHjbFLBN6Txdu68HRyMBbyn4ckxa21uuPjgV5MyxttbjipeZ2aioNCCbqKtBQQmB5aM6G",
  "key14": "56kn2QdTmpC78BvTEBkS26vgtWZruuAiDASoWFafoNS3pMFV9A6bXD6tUTmExBwpNxt3tWViiAnGW9DbdmeXJqb3",
  "key15": "2Kx1QcULLWyKzazm6M3QuyVngLiUgahNYvPfGmWVXNVM5FpRT3D8q6c73ZsHDaq9c5jEvDPWAbHDoNEXQcsBfSTK",
  "key16": "VRdY8yCHej3cWSJmi36iwVBwXvixZnYTdTK9wbt1WFWBRv7ffqsNhdqt8YLyT3fN6QxG4qX7ezGhZjkySfYMwQn",
  "key17": "2siNuUi5wDEnqsoY2WPkDMcJdFbCYkGk6hMeDVCtfw3aiCc5sF3inarvibY6QAfefBMVc6CyPNaexKmjKb46Jy9A",
  "key18": "4XcLiP8bRMi82mJuVsEks6ysiP2hQXZMV2DfKPQKjbkP2j6kfXG2MQZWZNdd3mAJBm9iaG7WdTTrkUWAJ335Fatq",
  "key19": "3ZqV8n3pvTQAy8GoFdv7f9EfjbF4hMY9qsijxfTNp8fxxmpbzEaWwJVUdkUf5VGzG721VSi8tps2vTGLuniUJEkC",
  "key20": "55QR5Xk66Jq3aF1AT6bpzKHR16SNp6ijUUr3HdfW7ipqWC3VyahgKMwVAqmNwNektjDLimkRdEi8oJ7j7sFpG1eK",
  "key21": "5HCdgqCXFjEZNAeGMe2N3yiYbjtpD76zPiwFLh7DVFhWhR4N3Nh4kP5fNVjSGNHRFV7wbCfrgsugVEFSHaRq59p8",
  "key22": "4Ese35y3b9vMwcuBGVCaBVAiFCYV7LDhQPCLSLfuJncnLJc9VAuqDLK2dKpRDsBv3uCxLZLjEPsxhHyjNr82GbCr",
  "key23": "4ScZMx1pXFZoyjfWudQbLNATZQfHd3nZQDkR4Z7BHRpBUrTQ9ZedPe2iMfnx6ReNDmjVp8dfocUJkvBo3xu3Mo4A",
  "key24": "7mR7LLywqibnQKcbJgsLG2ADF9nhWRq5ioRLnFCr1x5w1rjVEiCZXEnsqir4SST4Sn7unS8zU1wZMH6tqPJWJ43",
  "key25": "33RXek6nVKPcq4hjwJBwNYiSUhHfRKYFGkHf6osmtRgNTqzTWHXdtWUsyjo9TMNCcjonjMpohJb7h7BNyJjNDsXm",
  "key26": "ZT9jX7A4CShFug4ncsuqY47aiAFRA6Da3aUq2MHaMzMSkhhud2jNogj8JVmZ2gXUkgei49fGTepaYYKM7PXYvvK",
  "key27": "4UJjYpsJENWnjBUSmGtjaUJHG5Nm1a61e4ExvWAaULs8ScTELUcgTCxzJM1vQNbDeG8WcyR3e5VboALapj64Y14y",
  "key28": "66hytdAoBbjBJM9uviN6pt8pUgAQgBZ424M4Dk7gizTEQRSoFGVkphRwSa35dUK4hw8GMWXVn4MZ5SbXiBiK5wNN",
  "key29": "2q2gzxhTJ6zrP2zGhwvmSZP9rySMtiZiYNHMU5tKTyA4BYQ8GY19vtvv29aBjn36aCaB7F6vdNBVv453vv2fTh76",
  "key30": "ZcQfN94zivmWoCauFCB2sm9uDxHbSpEGVnDjbfSz2JUDyQCq4CSijb9TPcsaWg7CJZ98MQB8MUkkzYoXZnpN8sn",
  "key31": "3beRR8AGw6EdzebQWiYZ18LXQyyf637fnzcDsRDnwqCdxeHUSmuxo4amPvZrAZ3iNMryhLHWzjZTrQM1Pn6ZYxTY",
  "key32": "5XvRNfyCYKbLHtRWZ9rYJkvprxhFchs59TeDi489XNd2g14m3Jr186hyjTxrKGavkPs1mwMWt4YickobjXwHQHe9",
  "key33": "443tjYkDD6c48374wcpRzjtCbmfHXRy1z8dWrBCfVKBtSK26LzrSavgftP25VcfXd4aXxcbAPiVDMj5MFKaQ7RVX",
  "key34": "2cDaznVud7ZsGh5vQ8cxw2A8CNB7heKnQoKfHa6KB9bYJo4uqyLPUVGYL73uEkwQqqo83TiLdr7dcfdSqZ1NbTo7",
  "key35": "4GmvB9aH8J3yaMd5YnZdK4JgtdsRMP9BhwdQcRmyT7MXGYUw729yyBXSEEsJBJC7dNPNgV2kv3cfEzcnRUWCLd2B",
  "key36": "xircTp3KSyBJNYBUkwHC9QRFijt13GTVPQJxbnUX1Y6nvknx6vwvtu4D7okW4PZBsuEBxGuzx4nDHUeHoDxDXB3",
  "key37": "XzD7AwkXCVaTXuXz5SKgP9SSC971eAdHv7L6dyxDpKSinE72eBo6sSE1oPsctdTMz7mGE2Kzwv2eC57511GWKjm",
  "key38": "233VJVDjpAnMfoYCYxCf9Qy6Qq3tv4H6wfAGXb52DCv1VMCfA1wAMTwNM5XvtSf2uiasq2kSGxJggKkcSciGhQi7",
  "key39": "3MRUZ2Sgc4DrWeBikUNg8vNw1SLumcDrhsu5yAeu6WGheMkMhg9nCXTy33KF2Fqpgor2DXcK3QDKwbZXEtbXkqgs",
  "key40": "5rs6b3x6eBXKP26SsPMVPcYKZpSfNqZ1XPqmGN9Kjij6FfbPuDZ1BJYHy8BjMmncqcWGmdXfhBHXNZabKf6TshHD",
  "key41": "28b6hHWN7fPrnfnmwDHP2UqfCqGkhvMQDYPUJFWoDkBtdsg8p17fSrrBEXb6Gu8MxzCrDjVEJfvxKNAULwFx2V3S",
  "key42": "2t8MMwi9Vx8qeJBgE6zFsPgSeCxnrm742UZ6HjvPgpXHuGN1DDZEpcQJRFrL8ZibYCsAcPrvSH6sKkmUk2yJAUvK",
  "key43": "5USf5DszxcLRq11z5LWmawB5mxKgGhnnpewLEtjjgvh7SzP3uKvQ6GSt1bUceDXVj5ytBkBPM2G2mYfY3rfTT7sW",
  "key44": "48vL82fEDS5mhyeo6DpLTxefo3QrApCvbjtdVUxVM8umttMQY5b6J8ccrSBsiTeqt8h2qon3pgkDbrVCGMd7bmh3",
  "key45": "4dNxXNzw99hMw3RAJVxDFJiAy1uwAsdpC8gyjbf8a4NMYcuNSqWWJCuDrheAjwwPHwpoueSvCArN3TJ9Hg1oHXkT",
  "key46": "33t3CFDwGkUuDeYhX315ZF7qGEz4JZyuYqKaA1MbYxQ3bUdUxDvVsJHXgAP67rTHfzKDUXzgKubGxosKuNiGkKzK",
  "key47": "3ppk2aPUB7sj7WHmYyMf7G6gGmg1weveZ3QS6Vy1mpN4AJn3bDWkTHGZUvfFdNXyww7CJK7TYc3Td9RUP1NvtU6j"
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
