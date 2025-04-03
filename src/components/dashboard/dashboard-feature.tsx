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
    "39b27YXYatTLjkgNwcdyXTsPKbHdReUPN6LySn6piS4T8ptbM2ErNxbPjesS7L5poSYURYZgGdVRCLEZjZZhRMSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QpFGTXMqJYVevPWEmMjSyR9jsEwhSXPYKYv3B6JZMCQ2MXXWosbjqAqBrmVcQQQmeAPKeN3mH6JVGUS2pzpyCK6",
  "key1": "2khDdtaCYqJwVXiXqxwcEDqECkt5ApyGFBcMcw1nCLJyLUdXoWXDL4EMwSnCe9GnCbHwC7U2TeceTSsrWFxTnazu",
  "key2": "5qzEWXfYsm1V67HwrRcBi8QBbzrVxZZC3Tkid9aL8WwsGQuxFiQRS2a6C3qZ95C3CDqhsxwqUURZJ36wnxg4ruqj",
  "key3": "p5niCDHGLR11tyfgQG5myubR291wQ2VMH5EQC3YZxoUTFxWQeXYT4oSBDr2BYo5VQ2qkeSvb3Pv99Z8Ww8ZtMzh",
  "key4": "23Lgr9HX6K1g41hsJZMipZk6JbsAQdgtenXXDRR25cM8PCMFWgsLPbEQ9dV9GrEoRvspuxkXRQNUy28TvTuQDNtr",
  "key5": "2nTe6HDaadrWt5jyP9UzFqpotHhdnBE3j3MAmz5qfj768jEkiNsEvJe24LKH6pB8GwnrpbZFS3R1zr1x2zFjphzJ",
  "key6": "4PwgPVHp2jtvxjW76CwYXGzeHo4AAnEvXc1TGxZTo36rUQgHuk7azmj7BN5vVxy2NWUqqbtZwatCVjAVVQoBk2WA",
  "key7": "2ZsruxjrGEey8oAjdwufFAaZB4Ho8tpW927cA7xYMNcVqoXQnGqH2uaViULhyBa8urXF45LVcRQKmNqT3P7fDJa4",
  "key8": "539U1VaxnwLoEVq4cRheA5KHw9Daisvc848fiHPX4QvTK8mLv5CpUgvzGA38SKM4GAMYymDG2tkgMPMnSwaPcB3m",
  "key9": "2fKM99ezKhWHtbtF1ZNXhid8xsf7pzJbHoukVppXmQA9yjbjBMLsRyfPjZYpqfFYKZa1aWETgSEptFaSwJ3srdTn",
  "key10": "4jRz3fs4STGKQZMry5kBvme1PX91dpjMKd1Zt7aqVCYN5xERo4aavnCp6xAt6pG56r1bjNC17AiHRrTVHL6DWqQ4",
  "key11": "3UMQAQdmXqRFyJnqTFKtoJadi9SgxgGsQE7sFsQ2e1v8M55U3KgQHxPVDUg1nT6abhmRZzjAymTUz7RegANhprC4",
  "key12": "5AxiWW8PEEtzwjqJV5VrDjbVRDLWGkRzoZ5GnjK61aPxitPSAUTmGW5MGbBVukNUtE9auCt8TaMYsymmSob8ZnhX",
  "key13": "56fdCz8ffsLssDnAonn5QQJT9Fw8NMihjn68LAKdQDLo52UdesMf1AtXTF28i6AUNwM9WjEmaJjZwDtxZfmNpM1g",
  "key14": "2BKw9qGxpDSt7AiByHtfzwwf2JrKP5ArmxhdF6PJfbZYHU9chjAPWVobXQJap8gnGBkEqQT7okXdUvXjdMFkG5No",
  "key15": "5FFgicLa5FLucQudptdm5X8JgjbAshb31tHeDr4HLabBWCPaGEpJo3TWY2DcPq7S5A1bE5kx4ZziorHp8x8ZFcBr",
  "key16": "4GDfQkeT1FTwVao6PdSttwkNjE4siVSKJG9wQx1SFyjgvLUunGAzuKrF9YGdZZsKNJp11gLB2hY7WMnDma65Z3nG",
  "key17": "3et8Zeecfn3Rf8jMzLMPvpdCZmSDYCzuPWDib2hBZyXYTC17qHmRmsF6LyYZ7pfH1Nv65wYJExVzsU4G5PxQ4vnt",
  "key18": "ToAWCiF291BthRzk8trD9HHAsr7RqdGpvsKCYacDeZg4ZQdwdJVRfPvMGDXVSY2VJfLTYqayVN8KeUntbqhm6yU",
  "key19": "27ebvMLqhebYNkG3tRKf4qh2zWNzMFt7Y7MSHPUbD6sCSVW9FjjDViKhLRPtp4McZX95eHEeGpNDGYnHhAMCy7nv",
  "key20": "tHhCFyJ1QUyNPZU3MbBxgQHnRYqgq9HttDutYb9T25CvKWjJoSAYpKUPiQd3LXBwXHpgkXWNnnrQWcKXJwPrjwo",
  "key21": "2MAxZ1jK5ZLXF2d86C16Ke3zDevWRwMcgpXkBhRadchmyGeu2GarbE4gY2L5FHaHD7gQPSYJYQSR2diPBJHYiAj",
  "key22": "5Bq3LVv7J4s2sLURNFAE9Eq8xXje67eWpBYg3dXoVUjgKT3igsFAWEbAbo65J2QYttnjrCLjJFztQdAYmhLtR4B1",
  "key23": "2eSB2J3MjfeSNSG176zHfiXaxs6m2royTeLzi5WEt4gpQB6R9qVkVwLXfS2D6iFU3XosfDtRPdQNd66Yz7G1PpZS",
  "key24": "5tLuVrqiCTDLLsTjxrYHuLDYrdUkazatrDZerRz6uxtVurNLap4E6X6rDKiktnKiTeJF3uCyWTX9fozL3zj2XoZ1",
  "key25": "4y2NndYdRjBi3tmSVxBjHZr5wdb32S83ZuqWHZsd9pS4rrQuhM4PiVsXB5SDeDH2YXbcSvP6DS7QRM3rxJXFr6rS",
  "key26": "67b96bpa7NAgQtypK1ZxdAvn3kT3LAyhZWwUVG6a7pcVLNkNrGXj9KJqHd1T7xrcWSs64yHkoP455S8AG6BmdDbF",
  "key27": "5daRFcRV5WHyoWjZXNdophSdgF5EwELjerWw5HrUuK8afn4CL2waCcZcCBWGbSRpXHRE2vAu4XsgytU8VpcfwDnB",
  "key28": "55HCXyvd4fFqVgmRmF5aXiK3BDBEwJpcSKzTCBdKPTrNaVB5YgyqmirJL3w7sn31FhyHeDVZENWE61FCisFiSLmn",
  "key29": "3icMxJk1JzYUV9zQKMoyVb6QNDcpRBmi6jXJCsWVJafQEKd4sUoBufExChspcRzRy6hX9b5DHN7qUiyDpKaH1FSR",
  "key30": "28XtTef5VBNfuRUp7ugkDr9aVbqQZFSNJfTVP3cX8XVkGCg9KW5T65UjScGRLarUFh7N3WopNHKbZSxCYLxmczTT",
  "key31": "59HwHJbnBANAfH837rXAnPpwdVb6CxGXSpR6LgCRgGjTUTWpoFPQdk5ih5XsAWH4V4sUTJUiYM9H6gwHzqictT1w",
  "key32": "3aLTcv7MwLarWexrKUmbvLDQVwrbYt3w5fR5YnAvAjqARCg93b22jLvjPkKAi65hCy9qH2DwTY5Tb3nMixjKnfP9",
  "key33": "n5byc9ubacGFNX8YmbFZBuWmEkgzx431pikeGVWNcQAUqwjEgzCtdPgeoWAyMFTWPPTvdwP77qVdpNHkKri6kqs",
  "key34": "4vvBAVBEUERGeKC72gMgsaByg419kZmS827B4GrgPePHUVtGvd6Msfy5gpGxQxY5zG6LLidPT2H4AxhuJybtk23M",
  "key35": "4WZzUm2qpR3VpQf68sXD3RSTPmfuKBzeJ1dSR2GMXPZrL5wQVqdDnHByAdU1pETK1sDPc5sBqz8Sj2vJNo6RK8jh",
  "key36": "M1WJoGU8U3kmK6XWazjabkbQPHhoA4nEJK632KFea6r7vyPHD1Rt7jXCQNwf7gKutwoxk2DGDw4zfLFZdA5pV2E",
  "key37": "2cfNTsNrhvKgbyE4Xxi8d1pEm4C5kFyQ4s4ibut3Wd1SKtuvj3LV5EfaVFmXRKAgypVx8JAZvssLqFFS8gA5JizZ",
  "key38": "5zGF3ZffRnF1M6fa1EmLzBqMP6QoezHhmMUBKC2FYcRgH8rvApgGmDVd77J8ydUAikKpgRnddufHXbrJiRox63yK",
  "key39": "4d4BZfGjBRjTDK3zkVKhDswgENDr2KZYara5BNjTXtQ4sbs25r2X2uoZ8BLdy2H68ehnejBh7tqSVPf44T2HANAh",
  "key40": "vsgZLEuv9pkfAc8cpuXGrTZMZHoMM5Ro1qtQU7Sb8rwTpXUVCajU5ZGrVtJztBG274qmyC4DXLRrRa5VqaXByax",
  "key41": "3B6rHVa33F8ApvmEKdLfJaSHyu4DD42L1HmHnqeCgP5YdfXjXW4EdzvpeZ3xsLhdBBv6Y9ofo1MSyBke8TncTfUW",
  "key42": "wrkkBPaFpCYSQV5jdTKbzyYgQZw3ekbzgpdTL1u9PjEbM8fHjUcSM8GoWzZjGDTz6Mvho9E28tfQiBD9XA5vuX1"
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
