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
    "38LBEKw9JdDDJvnmEYEEsZR9U9WrsqydUF9aDbjJjtJ1KS4Qt15fUWufYjbkpNVTykSG2EhipUF3PdjeDPiigupH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VADsDrgnWefn9PAExy85udrE5U1HRpDafaws3pZqK6r6srFcXRtY8UX3MdTK4rwHaDWafaXuJPSARqS2VdnHSs9",
  "key1": "5p4JVVbTFrVJSPhngK8CtNhVjXhpPDXdbJH7AG2M4e6KnVtRpuH4vj1aVw9tB4gxiBH9xESGhS1WBiK8Kopq4Npf",
  "key2": "4e7Jy4RLuAtUSeJjGUbSzJE2qimaVBKg6cXUqbnRWAJURihThUkbFAZrmtv6PqfRJLWEnNxZNPWRGkC3sjWHbYBx",
  "key3": "5Qya6pJYpN2st9eYkeH9w8pvwnTbCRMqdFnFVR48Znuuw2mnejxhkegrBEcUcBoub4b2SjjWCjxShbAC749U3iaD",
  "key4": "5ZPr9qb7bSMuGrNZEvFSdvdGEQ4QASSZpkMNYVFbkE5wed9EjSafhHDqYThBBevXedsno3NXic6iar71yxoVN8qm",
  "key5": "2sFSs2TDptQAF72Gb8AZEo6N9fyfpfHsLtwHRgUU3dj85Wxrsax6hZYmR2D65G6EcYC6yWfE38tZSFq5qJxsecSD",
  "key6": "3PRoknt6sxLwYAYVLPuRL7DtWpAoUSZsGYnmY2V4wT4EeHAmFr19HYwkbsVtDAgLsTFs76DudbSRFDwJkj1ivjVB",
  "key7": "3onHmzVtDMeE3SE4govhLiYa8Kqw71NV3QVRyD69aEVCDLXuVpYFwbw2gqMtbm3g88RZ5wqTAc1Ls4vyJmT3jS6M",
  "key8": "4S56YNXgy6szt4AomzJ9H33nNB4HqvB8zreqWMCFGPvhVsn8PUdpBJANaQxwCARe4sxAMKnWMVjAaAfJUiehSUAT",
  "key9": "4poqaY7ofL74iZ36Gqdhh43ZseNefb4XVbZStD7EbGcc9uYbomw6JDF3DS8ZPZm32Q5Kx18huHUPUEgbsVRPJQkW",
  "key10": "2v6ad6b8RF2SWhEmRQxiy8a8GhDTziYo66hULerRvZ1DDSseFqtAEfQeexhgVpQkp4NfiCYcPYNT2PfxcMXDZUC1",
  "key11": "2PjFuGhbFYpi15Dpzz6HKSn1gaRxyLz7s5KKFaQGAyzuormYUPRcSDVzWWdLiVUhrYG6wnKoriajDDB5vs7AixhP",
  "key12": "2GZRAAcEex2FCVP13faoyEmwPAMe6wtG3xsq4Rw8r2Y22cVtiVQEMGFkjhhj71cd45Su91KzMKJ9sq5hSt4a8uQN",
  "key13": "4Q4CFqMU6qmatjLXxxqyYBdanx5eDp7a5MNKsWvu8LF1pD8P4XquSVaD3MVn8iwJdfnTjJPSx8wLhf47hTP6KgHE",
  "key14": "5qq9F7fjqediURG4GLZHFevnoNzz81fkE7qRo4wFcchwTexmvD5JgTY3LQYQcHXsrV1GWoifrPzxAGbbyob53beU",
  "key15": "67Mr3G5keguuWaf7VCtPyxVxi1KNBWXRKDbadnUFVDvWSNNbtNTZvzSMLhXE3xDLmgcd3DKqp1aUWSAu9KJL54MP",
  "key16": "2UYMhqeH1zJFKKJ7vEwXaKuvbjscaEno4Ff6iuFNiDhYPCvGbVRVJGxVyQ8Ge77kutw1vALjQpcfngcn8mfcikjj",
  "key17": "4rCq62c7vWfoBFVywBp58h1D5o4xPoteyhuMawoiY4W6gBH8GQ9JvDWyUD5ZEgcxhU3aXryUAqua9rNd9rRxdQWR",
  "key18": "38HtNwS5YomnZtCaQD7KQQBFvesJSajgB85Tmfa7dpGDLBEFoFKcKLzpUkxLbCkAUJjSG2cSL87rU8ta621f54cN",
  "key19": "1ABvaHdBf1LFCcgMjjumTGSHheiKLxTqT77ikDDmeupgdCrZ8ETThzkHu7ktxVELc9QD8aequ4EDqQzfoFtj894",
  "key20": "5nL2bK1gV5PpHcAYqxS1UXhV36Kj5D8aGx5jX2wgfq7Ki4GijPEFvS1RT2DvnpwzA2zPKrXwsLNUumUD45JiCVWS",
  "key21": "do28Lvz2GMJXGzmzDxYtmQJouX5oZY1GqGkZ7zipwiYt4XLXBpr1gpFiLCcKaKvWt7Vtw9vxw3wXrMCxeKiQiCU",
  "key22": "4pLUU7AvghBA5rYYnYo7ibGRP7KMBdaHejeBm7jxtbTMkT92xhRG3QX28j3cwBgAGwnSwFPyvKqTR4EJ5hLnwSJ2",
  "key23": "2iffA2Pny9UXR4bGuKVqjDHv79fcXGr475DCceemqw2JfmknYsoPcrMe1wx1i4gQ9ft9JBQQy5PrxAdoF6UxrpUj",
  "key24": "38b3FVCqKdrsGUtHRLjubeLMpFxL143crwMKWkC9mrDgiacjj41ntkPicjHGF7rEB3NwUjK8Wpi5gyQNeibh7uY",
  "key25": "4xbaYugoZTHCf62ukYzDC5GAEBffQTUwspcYvJr95tQxX5SqZvq9rbB1uwyurUiQPgHJoSDMV7G1E7sFGVazg3NR",
  "key26": "5kR5K61yERYZs2wj3NbWiCv8runV3rkDGj11tqCxeYLdvqBsGRhHARRr7ndhFxdLPKZQmn9YvbNUVECNrTYCbeoT",
  "key27": "3ZpatumGwM8o4PcoiPMTcNwzZJGmHGBajNi18ZGi5r6M72k4kXbjfXmTXXPt8gMeuEdRv6RMniRfAoPePPGnRGJc",
  "key28": "36VYfe1mpMa2Asg6dzbv2Wjvhz4NbjvbpcAna1MMNf41gz32ssCkjTn2Q4ZmUccVsFnosjC3WRb4DyTE3a61Saa1",
  "key29": "2nC8rMwDZX6UycoQJnp8ZfMqFaMfjqFejhfhkPoRpKKeLZQfL97qowKK6k9sCoa7Qvb5FZ7hJv155VjfEN3LfS7n",
  "key30": "fh6e5LLNiPTJpzpXYnGArfZunDdCbTJxSjonpk3AdfBCpafK8JHJ4TFBisSkchkS3MKCgeuCcWzLX5NNjmNKP1b",
  "key31": "4sjhE9jo9k2pvs5BnpjLV4C2cPAfKn8GQKH4hmi66GwWnJDA4CMkSoAU1ummG6h1Xsj9qRSfomDAxVpshe8oKdTw",
  "key32": "3SLok8NUZZSy6hPsezJpCWGwLsgtVa1aEnk24YvhUpKJYdm9kXxoymtktSA2kGpGm9wb7NEvLuhztRub7xB2sDJL",
  "key33": "5EMDZUBWmvPRmFmomsvTP6PCsts8KzBo5TwfK3V1SkHnQT5d2m4n3V6feg7pWYWNRaas6DTSd2wfqeoU1Jh6QVVQ",
  "key34": "2u94AUR3CJw8KqJMtTSYB28QxU8ASRW1WVwfQsyDvVU7UHDA6NuYHRYaEvDGD7LGCuYzmMet97A2TUmcfucWYrB6",
  "key35": "3XYevGQq4232bTTpSwDNxxRitXkwDZ78hyyffntazn2xXSR6d3MK8Uq9Kj6EoYBdvefAw2f5xGgwbarR9pXDSZCA",
  "key36": "3Lf87Ty5Mj7aqnkLWoU24ys2j7JqtRfxdENjJE5NJfALwLYrihnPSDyuNtcPvUWVxFsmBQwoR972atvgaFa2Auun",
  "key37": "3evy8LyskGhQ9QcjtuQzVNFHN2av3kFgvC75AXHU6vUsdD32VqvoSd6FWForwFh7w9TWukb7zFVoZDJzdrgkUwWW",
  "key38": "2PqD8MzDKd8XJByzELHCjk3MEjkMFXB6njPJpwPk3njQPGvPc4PMpgqjBKnz4Xwx6kp9BtveXozC2ZLKwQ4fG4XN",
  "key39": "4HviKsJ4QqWEFoJAyz1u6AaAd4QNAPq6EwvW61VAzkTey2Pf5yTet8LxmFdsMdJjQMQAiriTsTnWE2RRDa3BRDBH",
  "key40": "3PL7MsP2S3nXiqh3gWFJ9B7BSzUpS8msiCxFEDTM7mLgbxdZfnyVbz7uo5xrHqRomHs9EwuXEq2fZcoCoAdBba3t",
  "key41": "JyNHP9J2swUJqwPLnR7cgVPKUt252dDLWPSwDyv3hoX38nQg4oR6YdaFBwKZxedohDMzbZvMEzisDNh91GAoes1",
  "key42": "48648sLR9yMkSsFvmhGob9N97HW1MMwRyBGbRJ72mktZEy7mBa5L6sUu4bSUriD9LigXB9AYEq5xdYm9nQ2LUrqy",
  "key43": "5HAqieTcAu7die4p5CmSRrgUMrZz5P9DwZN5uh5XykN8UmVk1uQGQbMJ9grQHRmgjS2etKHJNFECBVVAY5MN6BdH",
  "key44": "2j3jstsooayxQ2ZFLqy3yt3zQXAKuMLn3d3rmdYQyLP7azF4HF2y8TX3T8LHrf49bPehbgSNj5CzMCqSFr6gPhp6",
  "key45": "5DHBJpcNmvESQsXaLuvmscVnKGTzKFfsD8csA7V3sSmkdgFWHewvEY3X9mfkgUzWgTmwqeJeHvi6FrMbrmacFDm3"
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
