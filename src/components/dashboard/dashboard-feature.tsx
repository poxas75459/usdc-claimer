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
    "2TRB3nAh9XjsK3ShpVC6v7EuTXijyw5nsf2PEVmeoDkGGQRBya9GqUNCX91HfHNUV6ZSqhKoELvjzJWSyxPpzeq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "323B8DouTSMzuBN7W1whV1MpY7gSXWdKy1DfKxWKwJHe1rCrUE6spJ51F6gt3iVQoL9peGVScHG5PGiLqugL831u",
  "key1": "2e7mpZNFxTGzix1ciNoR9YsnHBsn8VoZnaWSXUpSniSY8FCMshenZpAnqMrdogUaHkFyLcRDNg2dktxUQv5JGpq4",
  "key2": "3LGDEKTMyBrZDg5VCK3VyKbrUG7WD62BQMSa7k4QPcKV29wie6p7QH7kgUE7xbxS5YAT37d8sVvULPEMDBjeNUZM",
  "key3": "4xbYkEoTpUpU7iknWodnWyYW381BkadpAmMHckQh3JimGaDeXtkA8eSreqHTgGyyEL9whfadVVdzNs2YvM4PZTx2",
  "key4": "59VCpZjwsz4UVYuyfA1kxHd9D5gEY2tdbb8owTcpyeugeuAVecA3WEKjwnTX4YASmhcMsVJbhNhj5ga6o6zjtNMG",
  "key5": "4SSzh2p2rjDDY395zvgjvertZD4KrMtzteP7QJ2oiwQvUG2ks3CTxtjv1cYcTbtokTLNYym8eVP2nXCprhs1Pek8",
  "key6": "2u93aV6dJW31cNFmZbmah4noQwWz9af9KpQChqyEvyyySKhRddayXdKsZaw35ZpNSZWTJzadSNLtLjVJCuHMguV9",
  "key7": "FnaKjKE1gsTfZyXvqhkvxhjBEd53WABUyuLaSR6cFgdef1MnvJxD6EL7uDhJuE4Si9qei2NGpjFAmfKGhJsfjzk",
  "key8": "4m9FB7v3fEawzaR97HfWwf9ycvJBHthanhUSthiVBQimK9rmtM4cBiwyx77AgiDifCo5dxpzT6nzd2ySpVEXHjqd",
  "key9": "33Qa2taxTTJwZV8tKgEQSiAvvDzvup27Tw4LmFxV3cvXcTCpzZ4CYaF1fajPPMPdDb6AMKJ76nHgUWwDqPkkKTXL",
  "key10": "4UK7Tbf49EZAg3US7sSZJDfk9nznhY4GMwXVDELrHV8KUW2DvxDeJyqEH339MfbxT2bgNj7bPm92rWBJbh96NTCA",
  "key11": "2DGicGwfqagZLjJPZ8evsiZF5idJXBRRXugXgyLdz9qiMyqBWoB9a9Z4CxRLoxss2J8DJ7tNfmxggaeN9dkYBA2j",
  "key12": "GSTvqCdz3hjMTFy3XCFighdbKpsmoaGHStANCq4udcNqgpahsibGaRiP8sS9QKNPbCxX2s5KYwbsxjyPayzzBgG",
  "key13": "2ALEHJQwfJKmwRij96J7GSxJagkRq9s8YnxHskRp36g5Mrqk1cxPBx9Ug3KpEVbjwtTGZHqzZt4ERUKny57Pi8Tj",
  "key14": "4ZC9sa3HX8UaT5W4mjrUtiEF6TjgWaKCKmyMBUUwwqDtzt8b391KZk6NunL8xXuynx12LUQ2PMNLtUNaBP8R2fMP",
  "key15": "61DpzBbcUK8MHLqLG7CJRqSdMP5kCLArAWQoC7mbWMGGf7dYeoGzRBrL2XV9vf2KYQeRoAWMVzSGZoMT6thGcxqv",
  "key16": "YcMG9wDVyZnLPtmeZ9SxyAQKpDnwKbCDfrnjnCi76Ca1x4zFu17REF2FqzhZ2mVhUcTrQwTQrDbHTVbcnrjHoXV",
  "key17": "3Ty8LCRLju24ycUw3xGBwz7dLWZTqwDaWF4KcrbzZyPTKcmKi6r5A1xNZd1MaF8Ftq1YyqhaJQAdGFLovvAKL2qV",
  "key18": "M7zZEE426XFTABPHfiNJrVdEErtG9nbNaK4rqhXtUHVbxiLFeLYkoEGh5VssMEvVc4KsydgtmekK5inyiyQxqtx",
  "key19": "v3AmPiQbxC2XM3iP3mvDBNh7zYF7fijd5o6SG6wpLUJkba33qSEJsyYBCTPfa8N6fWvHAbLcpsf8uNWpZoAXig1",
  "key20": "39sW43j69cQWsfrykuAV2bHWaUAuRPUPyyRG6f7WstRrcXe1kLVyBm18YFKLJankZ9QPP673FXqz3ec5o7TWU43R",
  "key21": "2jphBbpsrkweyz5H2qd24MDNEc2SxfkwE89tuB6qKEX6sTFeDiGykNg7jDJa5ijv2H4bjr9wPEokjrQPHt26354R",
  "key22": "kRS1TaP94Lg6xXAYkwafFvNrpm1H6zVRmKquFwJ5RP7kqwac5yCn58TUKSvt8sfbaC2HtaabD9t1kA6JZM5cdHe",
  "key23": "iRki71nvtrGxZHyqBJRQMHbpnAtAuDJPjNJu24ojnSu9Hhxw9rK1CfCAMmhewduY8jwGkgkGetDBCSd59CdNYdj",
  "key24": "5NEhH5dTnJkVALwhdWduGnAWfYNtzW79WmaWxgC4j6YZfGSohM6UftBkQqEqNFMYdtRrLmBmAhuo57w9DLZHBV4Q",
  "key25": "5eDLWAfTsSB6KVMpNWUuEp3MK8BxLCvafDbuhr13MPZ5MzH5QoGajs9Xv7ugy5SYPd4gLDEHStFdjURxb2MYKEP",
  "key26": "4aKyFapJZS7rEU8Yu4RRFwHmEBgamyuG7GugQs6jma4s23FQf8KWjRrQEFEJYjnLYwv5qmiSNJEwvKdofVC4A69h",
  "key27": "3U16iyWJZ8VyeXgLQNhqKJoJt2Pzw9cm1fKvocRMzG59HvKKT8cKPYetfwKzXRz5W7T7NVxaWud9oXyUCzLxTsFv",
  "key28": "2c2ZMojLam6Xo1EmUoSUyFz2N5SEWtNMHco9uCm9ZRFXhnFg2NH5DfCjaVUeiGSYLyHdtoQgFZxh1SNTrWCbdqxb",
  "key29": "4Fgm2CJ9hPJc7MqtQaj7MaqgVxUU9ti1dPrJRjANjsvH8nSp82scFZNZ2YHJ7VyZwB5r2jpbW4P1okD4YnGM1qmf",
  "key30": "2Jh1BVp7LirmJy5TmKbp7sN9jJZec4DbDgemMiw7goaJoZa2tnhh7sw52r2SuyKjeznMvUc6xCpVTVErVHcsEHKw",
  "key31": "5awgBg2m84Wq1u9icYxkzgBDXWayb8CqeKMwo2WobPhjiAqc8UYT2aZ8VJENqCNm2r4GkmewnBYM2ugZ61jjsyet",
  "key32": "5R7FUpJKNP62ThjqdEmByN1gmekYDcjLTjT5Sgkw7CFjoJwzJ1hFCoxM3Zb6YnNV4jb7ft1PtrY6hstnYjmvyTzE",
  "key33": "3SjFJqifrwh3NSboXACHuHgyaZZfB9D7aQinBQD9B7XCRZ6sMRjKksR4gVJas7Cwr7NNf69sn61EeaVuPvidSGHD",
  "key34": "5t2b2yfzyHRKdzktBcSHM7gPFq7UB2hFAjKoU9miSLKUdLLy9BJHjpfkRBfTW67Ti4CKjdqT5yg1D7b9oBqtf6dP",
  "key35": "34muumHmZgEUnpwFEzqxCB9PQBVZ4waDKKQgyTQASrBSB3m6eszo3NdfgbfVZxAofydKAyDRbwtnAEepMXFpZBSZ",
  "key36": "5BNMPahoKmPKJaf9AfULxfSsVQuuZNAEV97VARyDYWZzRTSc1mNdwJytKEbveQazYxCqmS78K5V2iVX7oSNGLtCX",
  "key37": "5bQBriYixNAXcvHdKWPsnKHBefiNR9Fkz7zBJBRdxJhSNVYbj5TYmrwFq8J4SJPQjw6V2x43zseBvkPe9JU79CTs",
  "key38": "5t5cR7jLY19eg4drsm4t8LWvsqB6RaNKP872ZLHapmHuTbjAQTdeLGCZFRWCsvvPjoLaj9YhhM1XQJwDBXMmfv1g",
  "key39": "53qHnxBZL3nDpBSgHMV3TwzmaVQKLioZdMsYq4Q2W9K9vnBtKeyzEEKGVaS24nGiN2sqkqqyxt5BhRhEi75p8X4m",
  "key40": "4Y7hpsCgfM3v5RbVdmMMQRCsYXMfvJMPxifFsF5aETkD7ePotdwv8H2r25xdQuQgnRRFzyCmLUeutXz4ZdvVzZv8",
  "key41": "2PpwdxrRgRgLLd8jbtYsXRNksxcKz7rMw7F33HoEoKeF3Z9fJSEZFNmUFpucM4jeQtXm2zf8pT3ZH9eCrn7tE1ZC",
  "key42": "3AbT1rUJzkFo9gumh5H3DkzBVyZCf7yeRTM7yWjnvKoviZfx9BHX7UUxDXyuZ1XwTA2gVQoKJebKCoqXeD5jcWgL",
  "key43": "4fvf5QPJGmCeEEDvLxTM6UetX7DTtBoVnpeAsLqGf6MGTHQBu9ppNb12NBhKNzB7ReCU58wadJUBjHpmGMWHJByy",
  "key44": "3EQQgevZZYN4JEc7v2iF5Y8DW54G3RdzrkEEEATsYQCv6SPDbJz6PpcR61EaWSBJGFCGbxGne1MqvTgYmFu7M1Z1",
  "key45": "2dBvbTHcKbydAcodE9yepVvJtUo9hBCqCK75wQ7KgRYTGN7NppZCy9R6hsk5botTE8yrVyUMrciYv4C4rdp5cbmZ",
  "key46": "5HvnPdaokNh4NPqbzNz6RANz1GNxPxHReCVjdCm5v4UbpsWogtUurXP2v3rSoXtU7cdQ2rxkmGNoQ9HZdPTFANVo",
  "key47": "2T8zDarZmnppaFmC8YG5wENvDDAcBmXFEH93tv6dJnrY3mv7ATy474wHjioKy6uKH48nSVX51H2dzv6wRrohJUYS",
  "key48": "2xkfNTrFQiLvBQ3t17m8NJ9i6aW8ubbcZfjYTAYvKYYmc6DYRujY9PZrYCgqcfwfEsD5f7pFYApDi6h8Wp3KiHW7"
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
