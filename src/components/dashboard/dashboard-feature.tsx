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
    "3UuYwM6C2ZsmjW16NULc8oT2XKFRerRQPXf79892b1V9YUSEBRkZ5kzXwEVizTWUovNVTKEeeNBPL6zRuAPfZFiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gdkepFQAewBN5weEDcgBtsBzzi1UeCQjHKXEjFabPJs1PPsve65XvZDCyMGpLjcSavD9Gg24FdqJXiexLLjcHkL",
  "key1": "2jdza2KC7uBtKLh73x4CxJYdXxAV9bYwQyfdofoNaea9g2aRgMcL98fGXxUXtSuFjCXHN9FDT6vKCgdFtwNFfggb",
  "key2": "WdcbBy4WWfn6NZswsLtTQXR3ho4q7NkD1P4TEuydctSm2ewgubUQRh13AbsDUtTSLPiwD5HmoW9WhrVArf6oDdh",
  "key3": "42tY6yuCYRcePW1o9sNn1RptgrMyYpyh84EedCd3tHVUubnPGcin2WxcYxqqNARF35zzBNbR3MJigPJAqECQaUDX",
  "key4": "5BBzFM5uEzpes2rEpaMEj4rL4BLgxD9WJznhcZk5H22n55jvUpGrT8qrMnsATHyWRofjFiVLsX1r27kKn7hGMbXo",
  "key5": "uM9bFJQnCi1JsHtL68iXaJXfZp3tX2S7yUnRzwkuTm8GWP2Yz8WFw4tFDoNCHqNG3o2GbgFXQXitwwGrMNq6PzM",
  "key6": "3HWVKwLGvrmhD8DBuETp9vRNphsVMbj5Qsa4ThaztXn89m3CGwCHn7P7ybLiaTn1CKZDsRiChX9dAPY57xnq3nwS",
  "key7": "4dBeJSc33JzVSjmGPnLtEuHdEd4xMPCQ6SWGy5zaWTpNkBzhfJWDVCe2HQpuk8Sb2RgeyBUKxZtbtWC4SdkzwEDA",
  "key8": "3uPnyWEuhZx1rHeeL9izahFApf488tiWG4uv2siLhSEW4tHS57Ftyeasmbot6uQNRVvo8jQQj2XKgZaHeUNJ2XcD",
  "key9": "2sv7TMQUGa3nkRKyeEBg9C1WT9b7aBu98KdtDxhPYSFT8WQT4oLduaaeGfuGGhExo6vhXaaSGjeU4a4HyQp43e6x",
  "key10": "5PDnKLKxWTsKd5fzaDxAgg7qhYWR9Ge5A6K2awtzUX4RQ7pG4Nb8GerULK3YR2Qeu2KWENxysvRTEgQ6ZN2m8egv",
  "key11": "dhrQEqpnnCuEXetFGs4QPuX1crQizggCakV4yW29UZeardaEDHMmt7FmwoLtrgk6CACwBDdSaybn6EFozdvTDKM",
  "key12": "3UgLtemCZrA82XXMc1TzrNWvUshwenAVspHcdb5Np8YTktheQDzge6QcTRjiTi678Ac89KaQCnrFTdHAvvB1hS9j",
  "key13": "5FxVj96BoP3dM9qiGCDwZ1xSX8fkfiuokqTuRmQx9xmV2Z88GoWzD39ujVkdYn2bYADFsPsH3CbJPJQFrS8mKH6E",
  "key14": "4AfUCk1qvvvayQFLciVBkbgSjL2smixfG4YsREFJhAJuQ12hJ89j6eQutx2SG3kTk1MSuykHHvNmguti1HUAVeEc",
  "key15": "3wxnHZkuhA3aSCmYu56MmywH9mv49wUk1AYf4uKAZmMTzDnH5acWiL786QGsUiy6Muvg6QFQVkCaqLAaJZ3eiagL",
  "key16": "4XZ2wuLQ8LjHjuqHystD9SwFLqnBJueiphTVdTEtiUTArAki1XKDxuHAhNKFmrMruYN92Rp3fbV2HD69ftNfCwD1",
  "key17": "2DXyGCxMYFbk1Nywgw4UCLX1C7zrgG1udYf27ktBNd3ti3VfYsjt7trzYnHGvjDTNyLjk2hEjpz51o2cKSHu5JJW",
  "key18": "3Ys9Rp9EeXkooVeqwfkFcFkxQ9ZkeyTm6rFviVqdETFawXt1ntquM9X6jNyb6fknUw6prtPeEUYBfTgUFPJph41",
  "key19": "4zRegaoBhzFiXK5EoaG3oLgPMxuEh2KyAxuYnMqkkNnBwFZYGyrDENHNvq4fpAtjDAYWNCon63orXYK3hw9F7bsa",
  "key20": "5wNvJ9F8cph9Zmrp41cFmNV4RYpmU6nTFB3rWkVsCkwwjXVifLvFnb3fEJezUMWDyfraagEnUvana84XcwViRE7z",
  "key21": "2qWXSvaQKqi9gVUHoJqkWE7XMSfaURE2d22WHRYi26jbfVhagU8Fj2yzSSSgRHfKaTvUTzuTP8qRXQBi2qmMEYqx",
  "key22": "4k2Lajr9ExVBP6k8MGkf8M9admcbzkDB548KiYigbk13jCjGTDkmB1abxHkBPAwncES3rwaGJRHbTdVqDBpv9CF3",
  "key23": "4WnYCPRnTsM3oAYrz47Ez14Nt93BiwsyYz2YgYeP4NSk2mbZoyTpfBpDpHuzxokgs8ieWXb5sJb2LwiSDats6vED",
  "key24": "4WTY7MrdKJyjC5zDLGcbgXDQaJRGyrtFGsNiTfe74TqhU2vyZk2FHVytk94upoe51ntkRYFoNCmuNkdsKVnUnmVn",
  "key25": "3WeW4TS4kYGdkoHdpMeqgaMvsG8a1ZTfbGzvhAkp6N6eWBrqcpL9cpVSorcq8Qnrt5wMFMWs6nmb2MjF4mqE7CMy",
  "key26": "3JmtpwvRpGDtE296oFeeAkw5QJKoLAng1HNXfc89BxiJEDmG52GnsfXJgFQV6n4v3cPahbzmGhiUDFioedwdBGJG",
  "key27": "2cstfCsxF8uc8Qmp9gUH81cdpFLhxZGzUuCHmXPepJXayriGC6LyYDkUAhqZxfFJN14xzq2Bde8qkYNf6kDmWTva",
  "key28": "Rz5L2Sur647sXrvMc72goW2rG8nR2cyikoo3qgYbzk6TYmYBamYf6HpqqjrVtdzj5LXQhMHVr4Uk35rEESrHcoY",
  "key29": "LsvaVg34WVsAcunKPv3roK6FJUhgr11pTZQcURRDYBjGr9weXieDa75ifR5gmTsn2MzPUwEXA38sbKH42kXyLfd",
  "key30": "58TDz1todPYbeAGe1KGMMDCv1smKRzWYmiJFaeKEHPMAV4Yijpxxz9ehge1hLRM9A5yXoBbyTE2pSRhxZgY23k4R",
  "key31": "5i1WzBs8UeLJAsXppjXJ4GMg3w1syY821oXhhtWu76MBtBqdeiBwsquWRKVjDy64zgeZKfgD9MtGP6fPuuH4bkvb",
  "key32": "x4qBsk5VjXJkisDYNRFgEvUBNyVJBhoKw2gqRZB4ubRrPVxTuRTPHogEjVic1YU7YioGYrX6KrYT3SfP8hjASKm",
  "key33": "aEWPvmZQKCAWy7yYy3rS3mkXXTjgj1wRgcRGR5Yr8jXg4w3wcopRvpuLDwSK4b9PKj4fSwNhSD9FMvHEvnqf7Qg",
  "key34": "3Mq8s8Kkkouso7B8m4PTPCCzQq5nrpbrfhxXrmdLPF1GPKVrZx8GS47PNQuGXhGm87vnC1yPBhY6QvQVF7KrkwjS",
  "key35": "5hcEJJdXYmmkXvb5SXRDHY3WYPaMDPzayB22ikuunTpgJdcm9xtonnC1g64zmf1okGMLPx829NFCDaPevf2MNsv1",
  "key36": "WFSuTp8P5DGBLYRyZGCpZPXYRCmQsXf5Y1fVLCeBQ9m9kHd4WffkXvP6VXWAw8jeTcn2kGDRyW9Dx8dX9sfXwNA",
  "key37": "2LZFx1iq5Si9Pkb7DfUFvF1oKP31rFiU3L2QFs54Lyob9qxXCbLotJxW1tAR8PqKLG6zCC3CusebiF3xwyRpfgnr"
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
