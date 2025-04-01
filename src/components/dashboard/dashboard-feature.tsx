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
    "5mvpb93KPhjCcnWSvp9tTmBeJZmC54vVYr95AqiYX4WZAK9sy9o56YXTXFBdjgdtHM432RG134tXfaNMsMd7NfUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JUA2x6SPXYC1CPCZfrgJhEuF5Q9a9gjXL7jZvcv9Xt98yaQLfChhBypaZS9bHLaT4H6iSYMAqAPEPJDxsMLaVuf",
  "key1": "2aBZoFDzcZsPhKZm3Hs1GaHGUzaqdfX3xLzA2r8HGYmoXH1mLb9wQLiVv1QWBmuQHZwUbF7VtWWNUrrnbUTf8wmA",
  "key2": "3Qa44yj9xNHgFTB6fzJpKPeCkmzHNdhcAoGdJkQRbbA8jd7u4waUV32HYefAeJvREkvmBnD3j9WjvsHosDpKs6oR",
  "key3": "4treGVV2FbvrdakvPSEKpadxtMKo66TUSw6Miw9JzhLL41mdyxmfVYH1sbcjbaKvkQ1pFSJbQ2XHe2Uu4QmsaSoV",
  "key4": "2MnH2qWZyD3Uu3v5cF2oDqkJc6pAkRrY14Kb92nkazJpfYGwe4imqT1nAFUXRb22BFUNCr1y8a6oyFUeqncWRBvp",
  "key5": "5aYZN56VTrgXf2fmEFFHxzpNzq7Hxc6HaQwbEBcMPSqsGHYUiqv2V7wbFnMHFcuRQzWfKN2rf4WqrVwQvbr9Y1Ha",
  "key6": "Si1x1cnfc6nCmWzVm9Mdw1PPnTeuNYkVa1SFQA7Qiumr7Q7mFEXh5qjBs6QppXze2qTWSRXX3cDQLHJn13dkWPQ",
  "key7": "2JyG8vxLACgZrPtNQHM2u9MzuyR6gkZTaVpnaQjqhVumo4ee4p6m5og2LUHbf7CeHtSpgmH2xaQCz2jyJpgreWoZ",
  "key8": "PcQxcQWNLprg5FL9PFz7eqkxMz4n3L6yGKUxBwXMLtDm9VpAwU6gcBAH3dL9wGDqWU2Jr3CvQ4thWdbQaWDAaW5",
  "key9": "2nk8DuvyBbn22WVPAqaZ9yur44UtfRX5A1REhAB5UZYHCQcLFcB6Mg7XmUijgUG1ybVbCR6N55aMLKHkti4u8tGS",
  "key10": "4igJvM1gHoKePpCx9xESkcsaU7Xuvqp1763mmykoHGdqEs1rcT61NHCPxyaM496pQF6g9qpnEnnNb663wzxTotqB",
  "key11": "4nLAJdTQ4FNsBBwZxzHDzHvDSu5Njk7rL8iJpzxDyDwy6NvbcGzaYtEj8oBMBbpuo749puXVvWHpuQVAAprmSFbe",
  "key12": "zsQhsRj3K9nUv7srtXJRCRLV7KwiF1LSbx1ovNK96hmLptnAbwCZjzZq1YxDatH6fHAe84RyCJRD9S3W5WZ1AgD",
  "key13": "UVupK5bVrnmfFpbHs5Jg8aSbZ5GosH1hvSYh4bFi6oaDDSi9WzEkGM33PCzRA3F271mav57LoP1BMyt5gkkD2j1",
  "key14": "ehaebpojA3yBXzf6HdKBQR5SvbcYSVfAYcGdp3fD3AF5bijN7z1vH5bjFkBPjn8nGhwQgzRMaY4VBiuFR85LBVP",
  "key15": "4EQ4cWQZRPVcPbL7gkTKmY2BeXfN2WYLXDXoZv53NxBPuaoWwKb3Woq6BCYAL35aDrpCV7nibXHdSEppYyHN8kKo",
  "key16": "3k1pELLre6NWxMxchoAJkjiToB5vKrYucygkUmJW64bNMFNQdK3aFBbDoRubLhkeWrc4JMiJ3X98T2aeVpTnAF7W",
  "key17": "kXbrqKQ8EHJJcQGrfbNtevndD33j1g7BhBhRK1N47Xteukq8m1ni7e96hmtAxTsxcD8s4o1m7teCP5crRaTpzXM",
  "key18": "5L9QcipAmYoAQ8Bw5MNieNZfmSoNQ3CXHsvhVt51ZR4KYx1qKSRHUqBjwJNzdpZ1TvBuDwY6M2vSWwHpouDosqKD",
  "key19": "5GBUsZ9WLNXnXibfa3QnVtt2KCzF4evkjuazKmWZkUw2QnUWWA5PHK1i8SWFTGojAAboeeo1xAnhQ9VTM2L1ybfK",
  "key20": "5JSW7Sr5ZZDsqHdQUEGeMcZrKmCdmbwyw6My4dm1Bz5GbRvh439waeAynCC5xNvQgmJcQpq3U8X4WCCSdRK4B6LP",
  "key21": "4mLbFBnWhJ2QoNh59vcS7Z5hHJGGTiDxdhuDtYjFwtLth69vjWy5WKeB1htnErHGHxk1wyhx8mzNq7Nyr8ztkZtT",
  "key22": "3jYazsBuFH9Q9zzFGeHoSQ6jUEkUwMD4iLMh6kVJjYXbZruUcYbzR3KyqVA5sXaWHruAU8oqT5LdhhQagcjeggow",
  "key23": "43fPoxG8QSU5vdQrbz7NpH2Mq4QUMNKiXPW8PEEKpRosHj3a1mMeSgCNoVQJ1ELcc7RMLGwQmuBEJWShSXBBdorK",
  "key24": "3mRHR7d3ixDh7pndNYVxmLX6ZtH6xYcfgU2GEzwqznfs8ybD5QYubmjb7vh7J8gECwn38eYGxhFf2Ms7kJ7XkZYm",
  "key25": "36KA6LzhVGEYtFPw592CtQnRZHBShiv3wiKqPs6s92M2jFYHKTgVmsAcW5yCsACvJdjnHJaYU2QssSL19Jb7UzdP",
  "key26": "3Ryzs1EBZmWjGnBJajNQ35p1ca2JqnEzdz3ZNXm1toGjTeJ4RixkCVnb2cZgiqi62qcUw6y4wtDncY4vz1EtD47e",
  "key27": "i5y3A4pTQmf7KhD2cD9CTC125a8YGCRgfoxLS9LwTwxkX1VzDM8xxP1uBMxSRzmCQFqP13Sv3aFAJGDaZmUBtJo",
  "key28": "39UksegD1BWAH7G5PHjwhnPZzBNz8kSxD1BW6MpXdtSpcvo8zedwx8nS7uUythCy3nqWZb7UXXNqE19iJGzjJhEj",
  "key29": "4iZtAAc46K9yYVmpSXaQnSoVQSa1x6PUJGurd9FevuY6aR1UnYZ9VCLgGoBRSibbMbQTcM8oA9Gbh4xJJ5p53trw",
  "key30": "LwdhbWuZA9W9XLqGWSfU9jxiuBhc6zN9cMPGDKfwd8s3Bwz8AVbWriaZbDrSrmgZL9qfqnz7DEF8dFzg32g2Msf",
  "key31": "2wTqJ2TSmgPpKgtj1ukgw1Qzy35gmhXCZknUF13duPUNbjkE4nmQ1WkQABYzfVbV8GZnTGPV1zcqtRGkt19GDgom",
  "key32": "N1ui4TXUhGnCoHao5na9wJmnmoxidDyMRz783qsT1XsYKcqoSRwb8sjoni9umzY4A5ZSX4nosFx5NCHGktFTWDk",
  "key33": "5GEQh3PgeEGEWoMaZ2qp4oqi7SXJVRXXdUuiV14FPMs5XrHwoR5bA7YaJ1PWn5pP8hVxumusEdtZMUQM2rER3iW",
  "key34": "5BPU9f3XXZ4fVThVy4bLbCEXxBXgSFHNQerLaDPP3YZFVJo4WVHaiGZLEjMBf6m866xn3kNnuQ6CDBDEsLKihdk2",
  "key35": "xjYra7fsL8ud4H5XMBYR6qwnm2vidvwo9tU8TpKH7u7SbUmHGbQsZB8HbMEhuhoNPcmn7CxA5qSsEiYDa7jj6He",
  "key36": "2tGwTwBpAVTA9Vkbvzcd3DLaXe5M3RdF6nKBn9HSvHVjXneCTkD1mPKeUMzJxv6gpuYvxS9UDGa5B63X2fGNt2ox"
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
