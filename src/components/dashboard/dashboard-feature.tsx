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
    "2LA7LaCEHHKoYVcYE2bHwBy4eN7aqFCoFNbtQMduv49cCsziGMFLLeT6T31EQ4FkEALpeLfGdkESzvpw4ybyaKcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cyxowoQXBk3tifJVDpAaAEmQK5FGCESMWfhxcN5BiBSEzxWuAnK9rftyPmpo2j5afrxgCtrBDutXrX7ozrFmqJy",
  "key1": "2wSJjxfwq2btJ2FiZzaDVRzYzcDJgcfcS4H7b7kFK8C5ZhpPNe4Vf5GWhZwBJZdFvs9qS4jGBZkuAXbAU278hntR",
  "key2": "gz4DYadnwyST8CKFZfBkUTvsjqTRd7yLhUMsNHWWp8mLpYK9Ex9mfC2bRjVM5Z61VpbHLtnW3PYvAWdVtgP8PSR",
  "key3": "3vGQ9pwFaEZS656ooacHmY5j5G5B5JENbPcXThT6W71dY6sd47TUKLTkBdKo2U6B9uKgpRR3HsxUTQRGfihYpisp",
  "key4": "5HKtuDFNwampPQzP6JbPaVrGAX3nJA6gUKKdYMHaFzKibUEM33q2YTcMEmW4iiEz5peSsAbXXvmXM6yK4GyUeZyz",
  "key5": "3Y8yx97mtTyqfDyUKNWUxs5CGb9mdMiDbsoKu653MzZZYqP8czRe8Ba3nBgUWX4rrBPofmXMH6gAZeg5wsSPSxtu",
  "key6": "5QVKH245rx59GZeA56RQgp9qcbjvGM5nghGSCAF9emSsvhzyHiE7wMtsWuBNoBUx6BwNxSBHKNR6Tv9s7YBhsHg3",
  "key7": "nx1BysUdd36U6AYsf1zyLm9JE7afr73GVzM7TjPGFLUSygPyMK4cJSkfxAWvmswYEALVzJf1obS39JRmfFVTLWu",
  "key8": "29Yd654F6LaPzGje28JchhoKzMsjHAbM7VWcpyw9ZeTejmddSCfHDwXE3dz3hSzFBbKYeqNmfqKFpA1zuTfqjZB5",
  "key9": "WrxbcuPjZ5eFHrHetAvcRPt4wmkCxkjXFx9RkDrNwdQBTbSEpeAghFRaFB4aF7FUhyu5tkfTAU5pQFBQdjwQzuc",
  "key10": "66cDHf5TNa6jSzky7AWE3b4VdzB36v2oeYWBmwy2fP6nUgKcxsHDrKMtf215UXuaKKL6JxwqaLoaBG4QATsXj4RC",
  "key11": "66XsLvswcqKoQwrDM1m4ThS5fKSgajbKCz5a2igWRgwVfoQoF6RHJG9kvDap8k8DYzkLhZETd5oGhaUqVezA4NV6",
  "key12": "4KLKbcBfSBzaktbT7G4Nu3agPGR4WReeJkPQ2BxkuBXYoS4EqFtvjKqDeFf3eyasTBHRtuzY4iL886JU7bd9yHGL",
  "key13": "mJSC7DJXFEUH2E8GVcCcQpL2ah6s2VSQFkGnf6Zx1cBcwVBQktq5bKTwKGDACbxvMKDzsCTDbQktDxhn3dXujpo",
  "key14": "4y6mEN6jdUZA1KTg4nuhBDRgoUrnAj4Tfiir1ucwMbEG3RD54prGAcV8EcizW5Wz4b9vAQkm1UAEfaqd5Uq9fVc8",
  "key15": "5FUiRpMHvdVBfo6moooWsADofusRv8hVLSbnxjJwdco24nUdWhgAucw9eqwnf1GQjRewiUf9cqS6mb1rPC6DDQsJ",
  "key16": "n1JPG2sy9g5dxXGxPoLqtbwad5Horbs1F9wvFGXHMxvXQb52WsGFPy9ysjbwe2WEpxaBf4dTpksoG489uBfYFft",
  "key17": "5wkWkV3dniUHqUcS8syinU4K8AVda5cezMUA7p7RW6d4A5EexWrWCk4cygFBg2RpxdGzUHiqsCe5WTEp312ruzjF",
  "key18": "2TKvyt4i2MNLgvQksqePqygA49y3C4gYT2RMb3iYXKGZnM612hjSsfMM3f6vA7TZJKBaNvi4DnpZQCMXa4JA3sM1",
  "key19": "2SGauMhHV2ZYmn67CqPWhApmoJyRfQ5L2jy5ngVooujRJjM6W7yAVRcnx3ESpRr2EKXiD2YterxZD81ELqcZASWw",
  "key20": "2sKPmfrNcT46yDCuCvBbVVQQFHimueAVNtbm1eqVGLsEf2ptR5PhUasWPyNGusrtFfxtKDsSinuoqtKs1txBtnvY",
  "key21": "2UrXjVHYuxvfE9t3uNAdMeNK2aX1t4Ew7xtBH8dRqLTHtpaTJNGMnt43uGprvusNSaJYCekNVctsG6KFS6q4zfRP",
  "key22": "45owVrG7ynxpuhL2iijK66AmJfv42ZbVJwkYpUQCFNTpgUKHoJVQLRKPW3Bm3rFi4gdDM318iLEfN5mFhxobSktV",
  "key23": "5J2ffcisQ1pkpXP8Fhgumi6A3J7bMFKC4o8kKb6kAmX4rSvjLrhjXT2pfhYj2VwnqeHXTQAgKyxVCk1UKT8AbbvG",
  "key24": "c6uSLLS52qs6X58KXYajoKzCKTrCTHbB3vDA46EvDcipUQtPFjxoTmyVSrCUCCMkhdjXam6iaG8FX841kEqKGLh",
  "key25": "4ugTgGNAv1pQWhJnNC5x9Qo7nF7gooXa1p8T9ck4nuXQkW5sDZqkMHiSKxGoTBVjvVUPieZHNup1CpDVkNpwHoEG",
  "key26": "syzEpjZRSAyssmiXkUKar8EXinziURTjFXy2W1gjLcTZsstfJ4q7aBBUg9RZ5Yt6zquFPX2BS5h4PxSFf5G7Veb",
  "key27": "zu9cSLGhm4N1grwgkojW1krsKta38qyDWwTU4jNACsgJswnC1pFuWfzEUc51487DvnueWFrFddjoaWJzYiseMTi",
  "key28": "2qkPfPejNvR1ZXM5YwrDio846xM9QJJqbk1sLz14wzBnGSRbA8RN48nkkhBCG5Z8GHrcxhFv6JmNx28wW29bAgFo",
  "key29": "24o7Rp4Qzc24mnurNB8fEd79ysMebbyoB56BD3sNfXBv4JS9AGVcCSS45KiQJMiZKjJMhcuvvjzsvB5F4K4oTDKv",
  "key30": "23giPbZBPdy5cgMvfrVmjFWxCpyDYqHJ1JrZrdeFRM2Fy8Jc9vSDBePGBSutV4v8Fyr6QCkToASgfjMTBUyhw5Fm",
  "key31": "3YLgT6nebQVjo48QoSQ32tC4nLzagiVuysNc7Ck6gRCNHdwB6f1nJCTanfBCGwbJeXWqgcAYocpUkDgFcySkpqA9",
  "key32": "5pqymjdq7pDyiD5gX9LfJwcMwMP5w7zzWamq2WDgC1qCT17zJ5kdpNrimVGzqE8NcVdz8zmpFuPw1ja6J9quUDVK",
  "key33": "3SkuBQTT4Cffgx8yMyeCo67Wk91pKmTE9bGXuX9HvYw4tUzfbw4ufyHuB4i5pRS7YhhedoMxBASMiSTFo2WoAGqS",
  "key34": "5Wy4ZJTDpRH5Znp96Rr8Ym7FuJQkJePC12Ka3hicpLKGodxhsrRRMmE9J9d9TFxhzKYsP9YERoq35oV31Cbdsz6G",
  "key35": "3QgrHLbDsdhWeD2dFAbuA8fmTtMddWRPMnQjewnyTm4qWZ2DG3u6PGxpDNuQSy5NPVWNcrf6RmtmTNFS77fiuNmq",
  "key36": "3urWJu8Dv8yvpioKmgevzopuQczvteYGCZhct4tJUJpTm8H15fdvjoCgVdoanJwND511uKn277bc3XQLbg7PfsaX"
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
