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
    "5Rhu6HCbBNoS4pn3aUTpECAQa78ckk9o6e1GanNo3GkqLmw1K3F91dLmtADtBoLtiMnEAUzpLxaQ7QNqHPvRKeg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dayrMJFMFXaXx3iFpFbXawwm1KLbsbD1sjmr3m6Ng6YnEdPnPmKgGf1MKEQRYHTN9mpmEHaTCoLdyGhuSANp6co",
  "key1": "3rcQy8WmjiVFPMA5RN7kg5UiswpohijzkjmGWrHrZXq1QSqnqKvaaP5Eu86v56GS9T3qZecnt5PdMRNdEftMonzf",
  "key2": "3h2Qw8PvnBGkCjotZ3EZWnSLvHLyV9c9udukLX7m4yvq8W93X6MKsDEBssj6f7cQ7GhAei4C3BrGaQm1yRhGH3CG",
  "key3": "3aGEjDfnz5CNi1XV7y3dzApZ5qr6o6heuq8KEKyfgC1zHokgpPieBtxWayBZnxAz1BrwpuW9hAHZUjeVNMTB9R36",
  "key4": "HRjbUHq2cjySVFdknKNiX9efhJSgYdaRY74vaun19XncvN3nVkazP8NkScRh64H9qXaDVHQGutBsdYvwRRDYP9y",
  "key5": "3vEEP73bDnLDckowChSqaySiJjRJfoaHLHUDEzeRokuqPWym6yGft7mnNewzKqc2XD2XLnqcfiSae6JiG2q7NbcM",
  "key6": "4vVzffMwio47ArFa16N9jX69JkaUdNgSfmXdYZKg7zVBbH2kucCBZCsRFNAJB2VC3S3agcZJTa135DQBdNEXfUKg",
  "key7": "36trWFkhs4uaiBnHTsEVj1kRGMLASXvKBSciQaEaRGzEbVhpovM2kWHnZpt68RmRHHCMKLcznVDGtcFpaJK3HVbb",
  "key8": "3G8YV6fE3YYhZijSUdyMm1ziMEyq2CDqGUqypDZK1JEVN7nRnKtHfnjLBUurrFdJ8jXzWUqjWRoj2ZU1RBmE64YN",
  "key9": "5r8bcson7ZrRSWenxWJ299N9PRGCgrRNBuSmJXXAgrNoLa3p1Ex4TaU6B9ijEMnzjdSFSaefZgDPy1MZnmrqxWp",
  "key10": "4EZWpvpViZrDksQgHsKmUNhSs7sMYagdzGhZbBbmxWAm6JxAZsqLUDZUdmcbuDbsCBB91hK6xdCVYUPRXF5NubKf",
  "key11": "3hs5WMaJkZhUTJNmhq7Ju8yYJAF8AtYjD1RtkKktV9p3KYz8tc4iLR79Wo48xdgMb7R53bqYMkmPYzh5EnV44htz",
  "key12": "5LZhfchgt7MadJv4zpCeyuY6M5F9zLi5XXcVi9tPVyxcy1m1Vy9m4LqL4H5nXnKBHuuTmkiZCp3m9PHfeFCeXPcR",
  "key13": "2rNuQiT9sZxsCehZcmStEsgrc5fcpC3wgU6y5daBuREwoa54ETMBcBzmYjZEpnKp7D7fxri7NXobPuPhkppoF786",
  "key14": "3Zz2sCxe3r2woe2c442T2rAhJTFDbQjgS8RNVEasxVudAXRHeV5Fuy6hn3MiQL9fMfPVwqZaFBTpkem7NYCyn8Qi",
  "key15": "2jVtyJd2tbhRYuX47H8zfxDrnHkASayvaHbevScUd218KFMaqez4T9r27KWEcge7T1nA2PRtFFyvpE8YHvS4x6U9",
  "key16": "5JMeCq8zmepHTYytbgrriXhYTTt4bZPjM6Qua7nf2N1eoNdFG2hVpq1GQM61JUu8SyBDPbLTDSmf7aE3BcmHEfh6",
  "key17": "3MZxmx7KHm6fE4UCfJSgV82fR6BC2qHcAyjrxAMgVyMaGYUv4hcaVRnMiKhK3SCzj7v4g4zZyvAc2LZLZUzPqNg7",
  "key18": "4vWnzDWGT2RF4kLt1bScfTU4HMbPdU6eKLmt2KpXLaDkKDUBFz2aSpunXY3c2GkXwGjaR7Ki4j5SSH5PM7czKPTo",
  "key19": "4PuCHA6GfUdu9MRfpiguw1ZcoEieHeq3t6BdQsVwbohiMaXFxYbNgD6x757r7pkQZK3JcQ8QWGdstWRF4axnSTe2",
  "key20": "4wppTDMkS85BcyrFLUB8ynjsosYZc1wQ6F6BQ1rZM3BikVawrkN5DN6xx5HrFCp8KEHPdd8soFLzkwAMD7KgyAfa",
  "key21": "2SNVMRu6VW8QahrAJaTGCZ8qdQJasbwUZAY8mhgscPiT8qGLizWKEnf2rqNxAAz6ExnvzQsUWe5SxWYC8yYyzzCh",
  "key22": "hhgQYWJeueuB2HwVZZbmQpaNCijtUgqhLJ3XGR9D7nMxMVwvEnSKUzMz1NHKNZAHojRtvBTdaD14nB4ALoAYqaG",
  "key23": "4xLJVe44DcAvUn46FhRJAMK1iFDdFjUAti1M9iUNA1FLsbeqX5iy8t5QJ1CxRfAeTLfyiWH3bM6FvMHuKKHnmikb",
  "key24": "483sjywuVzVsBUAWM8wf4YCQJmw2Z2QGut14tnHik5B9VXsi7QQhVRMxD9EuEPwjZhXttj9LDtK66hJ5zjG5QjbD",
  "key25": "26XEwSJwuQNsgqP7eWkdQT7knPpGoM8xoyiW6aXWWiyFdsR1BA2Sqm9ryL7tNSro7xmzHXRQYrcEj1TgaBNeVbij",
  "key26": "2aCFfK5M83YRzRd2k3mJcE3Auf6JUdp9ZcPrxqM43LtdnYAS2TbrpVrkfPxqLYLy9m5mpYSF57AhjoetxM2nq6HQ",
  "key27": "2dAWQHxpvGDkn6ML17eW74DUzN8jB2kieepk2N1CSNPMqzaX1DPQnop7MTmQiL2QnVFjqjnjn3TiT5r8de7w3G3t",
  "key28": "icoWZz3mtL8BGPL5EqVjWCRKotYsT8ahp8eCEtTzL7HyeYFQo5keqpRqM6bZtwZ2Lq4kRwL3bQNHGEULrX5jiiE",
  "key29": "EvwrPhYp5761Av9gF7hh3unS3EDxDvvao3Jqudb7hHTRYYTbCqiiGtn2bJK7DHggqTnj8AWdYkS8FC747MYnjBf",
  "key30": "2d5G2u7KScsnc3XTbAcvRvy2DJWMdMqSMUBgzHs8wwb2C9x5bSEYmXMUZnQEVtxapEsWCk6ZhSwiJKS8mEwPE3x5",
  "key31": "4mcH2Hj8XTtjEZNaEEmQJV7fvW1mzUu7zUhyCpBjpG9t18amPcRSxDwge7PCURZE2nxkTmeBFKW7zhytJ53PuwMT",
  "key32": "KA3mjr5gjrdiLGkRJPk34bj3GWEjegUmrdxCw6QXdpvPJLeFmfcAfGTqQQvLZFxeRQwH5E2cYjVWhAFZcKdBypc",
  "key33": "AoocrWxG3DGN8g29H9EqYeMkmyyPMsq18ciEEebcFerDPG96ts6vH9XkXfkumhZ3dCDDqxraUExnsC4vXjmntCC",
  "key34": "3LP9kiEWBw7vXYqK3EcVpTnsqkwTGziRDUazhdovAesErC5do1yUjdbwqTfWAxcQEAnCQiZBaNMhXjP4HZaeEJDZ",
  "key35": "3EjmrUY4Q1cuPqxYaXJtzTFHcaWzb4JTQcUc5opYp5udqnD7dSHNMHteh3jTDiXQLtZyyXZywmCSqdeimvba96U1",
  "key36": "5AFjTLXexoqvFvyZ5uidG8zgoWKK67vM3ocrLbE52pB9pHvRRgpUhobDNv4SyaeAeM6ARZefnU3HohQze49amfC4",
  "key37": "48UdgdLSVji81iD6vTsgvdkNcKA2mpNtMt2YU6iYi8jyPAWEPMmhsm4CEn7cnBiPZcmgTvnRK28reCEvhzwuwUFn",
  "key38": "5YDeA1PxsGis4hR1sKyL9G11JVRKFVFNXcBhLhvvdpfYPG6og7fs2YRaqgpBTnuxDpw8zaCcyYjPjjrYBxC2vMgN",
  "key39": "3PUeY3y3F6ZRbBPtnEDBe7LEu6XH7bX97Ff4M3y7cRENQDHjvXHjv5t2v9EdW8HdxzMXQciamwLBtMv4bVbrzoKL",
  "key40": "Po1nUVExFPzNvYUvmvkK76Zz8pKNoBTBv8PdDhHjECo6ZPS6wzvdaZhNDV2LXVD9YeaHcHdw5vSGHCmNTEZMZxw",
  "key41": "2km2LwjYtxwvK5WaSLZvB7Yamt368tNePprgJQJcjQDyCH7gjY2zp4TUmSQtpw8bq2NZyVz4qU8HMz8UadsZquRP",
  "key42": "4UNWbbWHz6DyL1vUtvYU4dmx9gqJoUHHK67xZgSa5XgzRKzSkmPArvWFgpBMXjj3SzATta5Qkohg2hLbg3R6B1Ga",
  "key43": "4HqzZY8U3s1SzK4gWpwaba5hzNVAp8yyULfphJKeNPeKGc3APuaaZbkZSMWXZR5NWCEsSzBaJ9Mt38mBM8XsCpMs",
  "key44": "5iiZwJSNSiNGj9QYVneZyYyS1gCEBue7vT4abrgarrPAmsKiD79gh8m6ejGYzyzcGbqZS8WofEihgoboJs8u2jLF",
  "key45": "3J3YDKYUocdSakHdAKGpMvUMaoAPMK4qChXJ39Dq6G3KgNXpyEGZVg7uX2PVb8HX71YfyMS8vPzDv7kB3mfgqumk",
  "key46": "5vw9m1GRUhxnWpk66TG6VFp9LZ3AWqKupVwaLtjc959Wv2TPpj278piAEQuWtLowvBaD1FPchFV63qALRijNLDNr",
  "key47": "5ob72hTB4T8Bp6Fed6udq19eXJEyc5rytA9ZKUnosf6PBTQ9NTYEMSXonjfEnsYfv1pJu9kxg3QPiFb5iucRzuix",
  "key48": "43Bo7j2n3GZWbV268VCMXc3USHoaDgNJYw7CTGCRzGqgqoFArf3ZYC4hHbGzAucEmfhaB2hUNGdCv6Cs1ZzYun87"
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
