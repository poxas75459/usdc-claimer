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
    "TfxqdhdGfnVxFjbiDnrJ3TDa2FEBLnDtMoqgDEY4BHBfRMZcUV3WzUgzVspoK7qSwachcMdphGhAP3Ti9oLAvrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cVQAyUquNCYadV8SFohnjvQwLZfKfJBHe8QhQTPZigBXeDJpLNgdRAXXjageCQK94qTy3kpj9hH9NNMHFxA6xM5",
  "key1": "34zvvctztbeEd3xwTuqC7YQ49rYfdu7EbXiLCv9btei5xzNi6me5rXoQzz9mctx2dttv7grgFHxiKQDWwU7eD1fq",
  "key2": "3vWwjNt8pGSJD8TTaSLfh6mk8wKmdmw9FKe2QRwTsWU5bGzzDdUyd4RtnPqnviaFTxbbKnUsn9v32cRrPQXJEMYW",
  "key3": "4oVpPSaG1LKokDy9NuknGAwXLk2utcNSRoMVABQHAS2Yor4BqQizicn96cHx38kqz5UTxmj1fAFWw5q3uAP37LUA",
  "key4": "3Yj7kvQiaidH5FcZtSeiQrMjgHePLhAMgeBG3TWh4fXx8RCxrSFyUspFPtkJa7AMrfr38oTDYmge1cpGffhi7Vn4",
  "key5": "2x8KjCHnkvJndVURiLRusA4tmfJ9jUgGh8gwUGZ5e76DUAg3EnSBrWmqQ11DUtJnp8CeL9CJGrQpmAM3wv4ktXDU",
  "key6": "44bT5gZRGw4fSxRHkeCEGxKacPtngtNYVxWqMSbcrG5ErPwqhsYeVero1rVs8qokRZa2yQBiDxjwxJFTmejtS5J3",
  "key7": "4xg5vTXv1u65F1EH7TiSj3DxcquNS2eW9aLmo6xkhfeEPBgNHTjDaQVWU2yKNa93iBpibXBX1YxoLyN3TZLB6GrW",
  "key8": "3NUPc99Vw2zFshSYU6nhFHJ9yEtWTzRGM2sJ4AGuUNGArKSe9REB3BzRXjHrFs795ycvMBv6xmEwNKdM244YtVqN",
  "key9": "2JQmT92CUMvPA5it5icjaFVXxqM8Nc1v5sK3DUMFWhkaYfWidXHwh1nAhnfHVBCTSuD1huK37yzjsCAWxEijub8K",
  "key10": "3qd2pnUtM7GhKycK1FFe2h2yZ2vJmgVBk2vSXdZSNbAuY2SH3e8oNt86UXVYvogiw4uynbmTbdHMKLytgELPmaTg",
  "key11": "4rhx76dQmxgJ65qx67cqU2fuqNzVZMjZ6XzQsgfuRNwGZ9v8z2sXm9ziusd9Kd8hNG4DvBuacMzeHh1aoythYezj",
  "key12": "5AQjgNZPXNv6k7zgD1AZ1yTFGhcavWZp9F7rQwwa34uhAcoG7fE6j82cfdTMWfNCXfhxQcj1DtjPcafpnMY5yZx9",
  "key13": "Vaup9pYCWiZGi6bQV1xsgPpHcYPtwsuer7CyT488pj4LF4AHbVE3dCG3zmPkBN27kEheAR1PwRKvv1DCdbBmwpe",
  "key14": "4FfLRFHZcn9fC5EAUxo5jx2LBdeBycdgZUNZHcBU1HCff9hCmvgY9G5jpXfzngYnLQvFhGEhEVwr73Qb4YdMgovj",
  "key15": "ddFWLfDHUrUNCs4DoViRPJRANkAiZeKQW83bzf383utjtHu6YrvTnvCeJBCBKUga6ryhnDD54fAoe2Eu841N82f",
  "key16": "tGBbkRRmw5RnD49jJG7vBC2HnWUrW4orQ5wrD17SQgvyAm6V9SxAbPeNBcYeBuUyJH5k8pQrQWGFGJovyfWgVTQ",
  "key17": "3zebmafbXiBVC3Wr3MFemxZ1JaSDkFS9JUG4TPBjXbs1r6jxS5CUbTqJSVeZexAo6nZQKRJR9fz1RyzZZ8c1yuJZ",
  "key18": "286WCqeNAFGLrUTxmAXEhXbKGGMU8gQmob1Pcp6jn4VZ3ERg5LDv8XwZ1wHAUhcS88D6XzeT7TwLNBQR6bvRfrUV",
  "key19": "1YUhMRvc5diQGgo4HDGQAbeuFfd6QjvjVVa6FWyVhMJ7681B8DMS2AGHreSe4yd6MvncGjdnvQT51G4ZHrw3dYQ",
  "key20": "4Qx8chN3bodzEoR3VMvP5sB24oRTc6zkqfCZaU7vxRDBRbxHpMEDGrcgqwhTduA49DfcZ6kaoDBSPDv1ortc1vgb",
  "key21": "42yP6tRpmtVp2M2AEpHBHKNwtW1WKVirwsnF55WAcodzBkcsfyxWtcEfic9Kkbf8sUeLgmS2RmnMLsHGpNdei5Ai",
  "key22": "62kPdC4DK9h45ooXw5u29553WSyQ8f4TEfi2uiYhJQ5GwNLMwtR2yi27hNqoVq32TugdrRMmGkaJSbU1Ak2mSgeD",
  "key23": "58dmMw12f86iR1xqvfr6UJ8t2RRi8ZqDiRnPjZSMJ9kooY2z7XsxvDAq1bvabhPvm3T81vJqahwLUdx3mc2ZWR2Z",
  "key24": "67VcgFU89YPSKYoVxvhFvTj3pnsiuT54nuyvxAKr7oHFdyKJ6y1DC63VcvjYLt4mrTP2SPY7fPJPkEqseEe1oXnC",
  "key25": "61NyjSN66Ka7ERrPYabMtQa6FuvKhUfTKxPvdikNpecwV9Y1EYQgaR6EfAhNxaPqeHQMpc2rYZmnSUUHuu5f7V5b",
  "key26": "4HAvTzLvB3Y5dJ2dRTtVyzAmSiSHwpAK7raYTL2eVgT8FkpXuYKJqbrE2sVpxQT34TUDprcZfTuXQ2aK7ueSGHiW",
  "key27": "5ptqBM43bChupw3T8cPz1JnBnBj3n72fxuakkKnjWW9nyKxuHbmg1QJW4D2CW1ZTverUvZMchUFhaZMqymihXrUf",
  "key28": "3xCK3nJBixte1xSPq5DziTgmdufQQ1vPqAtcpN6L3nrWrchboGgqRSDfCuJjQWZVXMmvi6v6C9WVpYk5QJS9n21V",
  "key29": "5rP1UJNMif91MvV1Q1rEHmATFgV6apDYDc32Cyb3JbGK6cTueAuE2iZ8b5dJEWBNLjBroicAe96iLbRMj86NhhWM",
  "key30": "3G6TbR8XPXUHqdMmuHUqv8favvBhMEFPEbaMjT7eLBoihqvJoAWSZZCu34nceJ8MadwCbtTTafR94tESRzZvNzhp",
  "key31": "4oTEitdaGWReouajfjN6bpP67f73bvtbrcrjCojx4sUgvrK3kRKvUeuLczpGg8m97rHVXgWvste9RcAwGSZVqmAs",
  "key32": "3SQ4bBgw9UcsHDidSnvfQ8UoeyG1uqZpct3paV3Q3tRwnk6NcMzjoxLFU7NHyWLGqDDUZppkdt3XynPTzd1fZ4L6",
  "key33": "4vaHMWq4PbZuvJVoWcmQTXYoSHFZBjr4nAYjFiD46Fa5weYncqdQ8tndV4LQ5MyFNrPixH2ShGRcNeTZQj29AGng",
  "key34": "2AxV43MTV7sea5U52rePPACDDnXCxsNhhaML32vN8ZCp3hdMivsqvcXEvWvCEjR8ANgvtwMGmm3VgH5NDsYWiN5b",
  "key35": "4wJJTVkTQWig7ypChAgGqSFjK5ARk3fzVz8wpESyz83JTzX9EkD5Ryw5yJgVUwMysJoJaEtrhSgkVB8RZjsGFHrr",
  "key36": "2w6cm9c8vTS6vNXgiMkDH8fMLK7bEL7cHhUrT44QgXvWYtzq2p5iG26rNuGb7czXeuvpEVzvgAS9XKHJ2Zher4Gu",
  "key37": "2ZQeJEahK6vbhPeWNx7qKpAcKBd7mjktPBaWpDDk3zi5BzFwZTGNC9AW4DSExTCHUix4m66wSQTH7XuxPEp6jXoV",
  "key38": "KfdbfpSRjpwWFmPoa2AEaZjCtDTss9BPNBHwJXXv87XiZBZXFznKweCfxbFpMHrHG6mzFuVrewjMCa84T528ewM",
  "key39": "MuJ1PWaJj9iBnzvsYEBqXPx8bK9UXyC779jbeTbQ91utWUnjscCgQmM3HJ2mTQbHjBZ1HqUR3DQiAxHNTcDkpsA",
  "key40": "445UyXDATyh7MoR8ipTVoAJXfH4tx56ctjRSa5Cs5zDpSBDErAbgindTe2nM3YMdPU2BnmhVjvjETvVq4r5YFVmZ",
  "key41": "124kbRXRhkfug59PJNDSFLMMKt8GqPKtc3BRKhikGeP8V3ao9jP5cDPLY9cskGJ2jZtYTsdaj8YvQ3mXV7CPE4UW",
  "key42": "2ZPaXoDRrhgCvJoRKuDjuRW4ignsMfJsTwmbyBeMLhoLHSLhfV7cYrh6dFZAc1SNRPADt7fH66dFioLvojULTvoo",
  "key43": "4CnGjxqkjM1y7yaRkmPuyuV1W9dfVvRoMtAVVrMn9wHG7jsBFuLfGTGSnQNae8R4LQfrEMMzfb6LCYgLgRvjfvsY",
  "key44": "8vV23Gox3o2skF7Y1L3mH49C1zgz2yfCQmCVy4RMcnVudBi83niFdC4quidnaNa99mKcrwjjn79xEfqWYB68B3c",
  "key45": "29n4FeioA2zgjKZRxTsQr8gNfabkJEZazWYKG6JUVxuh42BaNysYR9cF6U9Vd3SbyYDajFMWdorE5amkg3dTzoX2",
  "key46": "5Gue6PatgPmrwTfM9Pyt3X86F1p3oARN4aZWRfckE9Q5PWV9zQPb9Mmh1P9WqrhKNPeXQxfg8zLSMAmTsjmCFSX4",
  "key47": "9f1XxDGkjZMZf7GYUtqcNjWXQnEaho25hstzp1zkYBMqED7hsudrZB9X8hJCfuSTzTvHgankrmFTa7owLTchQPM"
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
