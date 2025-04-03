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
    "2Ns7BwKrJ3CR6LJgkT8vNKKdwWinRNCher7kxi3ECx94UGZxi4uFo7dvwAVUihRRVKtgS5EbpmifpyfCY8w1fiQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QwnhtTMrNqaesvvbZvs2P4wMo1pZWctTDsCe9UGS8weFYrH1m4M9U66yV5P9Q99AcvDhPeNrdTTfspfatYXzQvw",
  "key1": "25eXKHJpwAsRXhtzEFK5V3T3oZhyCLi73Ese74HgTu5fWSvLUL61P6zo7Hp21RJtuRh59Xt2KGr1fLHwPVVzyQBo",
  "key2": "4JVidE1NNu8XXBvYX3R5Lo4eFLJg4Lamnq5fASHkbCGmdtm7RdGNf3DtyAHqa6vgfft8cQM4fPTBdRH6GahMtnUq",
  "key3": "5ddLUGELHrsyEtdRFQBUFUVRsrXHyvx3BS2Be65z4fTAmk8McqXZnY38x8TuR15SHFcszKHDwiBbJCv5X8T5gT7D",
  "key4": "4Wvz9yobCBCBB45dQn3ixMKme5qRJLAbB6wAXGhQqSUeZjCybQnrpHyHNrt8KnBJv2sJL2ZR6ErLgYVHpcpEMviT",
  "key5": "4Xnj3BAHcntPmZZU9KxbQAKaZffnbmvdoRy7urCmoUzea3UXfdQkmQJScq3JA5TwLmzRkNR5ivptTxnnrdzUKm1R",
  "key6": "5HtiEAaoyZen1LgwHBMGRZVkAd1gyNuHNqgVWAugDa5d11Mwg21CKc25muvKG87zCZHrQdmjwjMFZMYJYx7CvRpT",
  "key7": "4rR3XttuUbpEYdTBKRFSDdTaThZMaKHJQTZ2UifBpmAgMHjm26L7KtwCn6aqBDLzM8uiEZnwLoSCp59fubttqcju",
  "key8": "2RgCFie5i3EtgHqSXoT8vnSWpsNN6nWfHEwJt2mM7Hp6gmmT18JigC5Ht3W9Xdwo7CFRxQgWvLoW4T99iu2TyHXY",
  "key9": "4PC98EVnDBFJdinyZRGhM9cCPeMfommNVuspJLtkQ8pdvreu3HqbTp6sTRdqkGjZN29UMA4qrzCeBT4EzhDV3sVZ",
  "key10": "4wJxDx7KMgwLXUpZtG8Jf39GavMgj7Z87JjqcYE9bmRggUbtdiV2WAANjMbqpVb9nPygn9Q5DbizS9jjguRu5Wze",
  "key11": "4Aek9KtJFBgHb2UHsP2JHfDj9eBnzv9b8wMymfdqBJZUiCCZfuyPk9wpWMNX68tkbzrFKs32wiwDkfh1fQbu2U8D",
  "key12": "35r2x5frcqceNz4uouos4HxFXGXowGya3vFu2PYUhqC1MtZUe7UpUWD28xSLk96wZymiPqXn3dQJYKf5yeQnW8V1",
  "key13": "4coF5EBteYt3mSLizu1TQ9zWsex2F9YVD8naSxrKUb84cMv1bs6rzGeRzgB68GE6NSEDKVkx4Y67qwKRZKn3fdyq",
  "key14": "5yefoiRoiSzM6EFq3dTUe4mPCcwnwA9L93L2cvnmmQR4diwrsgD8NpPb23vtyYU91Bzd85VyDMdnpPtH2AAY1nWK",
  "key15": "4xxqEXBRcTiTR3FMxaq72aYKEyyswz4BkjMUk4b4y3T8FxfG4xf4BAr15hY9KbngcevGGonqZURmVctbFKVWWftX",
  "key16": "5y4Dxtx1sxE3MYDKGhhM8eV4MySdWEVy2P3RZDjiKakoLiMgz5iFgSmMCwdjWpXG2dBFZ81rQwm6hSw91j5PPhKE",
  "key17": "J4ZiJKR738NYb8tAyMBt9xHZjQAk36XT555SALocG16KYzqQ6Aw1nB7SaT1nBb84wxoeH7QS3FeRSwLVA8h2zeM",
  "key18": "5nDFLxFWqB6P8kkfuzG81GLVFFtkaZtURTzS3E9vx9ZcAdyMSWmwEhxkKQgC8YxRYwXBT3rNDHesgBKCpcR3zE3g",
  "key19": "9nYMcN4QG2TGer2CL4HuvMo77DKxENMr5bRycsTcqoWZXYTVffBWDVNQjsUoWwN3JyhARXCLCQrppNPRdHM817a",
  "key20": "454bDwE42cxYChbTH1QHvB7VL4gYV8qXs2JwkrQoQX2poeLJKBvyBrvi4DErQfiaTxYyCjxe1NmNUDHsnh6DQgfn",
  "key21": "cBJi5SpTXS4WkJoKe8f5UpwVyPfJpqkHZrr8ATMFuvkh6ebR3V3VACzDnSrDkommozHMAGfvgfhgDAH5yAUciHn",
  "key22": "kycApEiz2u2NjJSQ8wm6kcSRzv6SRxwTrPKp3nNcWntGMuPrLf1JW59tMJtKophCyaeztd6C2TMP6s7pSBVD2j9",
  "key23": "jTjWuniT2AEYoMK3JY7LfqAHGLBxSdVEgLU8oo7xpTr3qLUg5v9En7PzXpiwFWjpUgc7PDjwkWUsa456uTWUWhN",
  "key24": "4HBWCS6NxnQt3xfdj1rLzLYMSopvsrrLpg2jwfTjgzSpt5Lc4rtBtyk8XghaYAcMGfpMw7PoUWpofN9Mhd6zdGyy",
  "key25": "5fNKnHREPhyM6Lm6M4cgLUqxwsKop964orU5QG2texErYJNstrRuDW7dg24mYBQLcJAt92YVUH2HRUn2MYCNEotA",
  "key26": "2MbceK3AtLTPozTQ19yiAdg3mrNnZJyDRm6mZoigCJ5V6CSqgyqWhWa9rk6orVG152Ao4nPL5gWqBG3UF2HEbE77",
  "key27": "5viSgzehiGiu3u7DgPhnWoXVYUmSsZCkDTz7x5WFpgBoF6scyG1CcUZbFpxrgEhxAXmaLHCUvV7DAp7E9ft4E79Y",
  "key28": "4Tp6G615Wsyn43pBjekX2X18cuHT7fWPBE675yvwAp8HnqJCcnabEfFMkNcXDuUTutKhndQt8HkaHcgycLapx6es",
  "key29": "5H9KsDz7REQsnTV4eFQm3k5jw7wnMLPpmAPtxP3bamzmFD6bYkjmggamynJmLX8vhcNpHSWajafVfr837ZdjZozf",
  "key30": "Q44iWUveD7CcpHePZ5WMidvo684E7KEtUjRBqHbUYGmrQuXSaRei8JT5DvUNpKLF2j6oM13vmNBHmYephxco7mb",
  "key31": "2rrHewPakUYpbVEN6Ho127x3qeaWmKE834histPEpzmSWvD2gtjd5hvp1UAvBcva9siyyyA1XamW4VAiv9gttQaE",
  "key32": "4hgL2xFz5LTukYo6cE3NcSgk7V3fbZ7XiGhPZ9TBAg5LNNQP36V3RBmBjEzKCbigULMBuPNKFJjmTBy4GhDWobTb",
  "key33": "8aSGL7UMNSnRzBrjZwdoXVt77N6rFubnPMHed8fzkjddonaLyPNV9b7GA6ddQX88QxgqGTrGLkUn5e3BshsjgAs",
  "key34": "5Zuanp7LhBsioaZnYoMpHDbdx9gJUxckDzsCyjM59R7QuwJ8qgWrAp3VTYuEf4p6DUxmd6VLnUkFWdpoDeMF4tGQ",
  "key35": "49iy7ckBfMTUpRze8gJKb5Ctv5W731DfXXjg8YMJNQyvRfwAzNMtfQA5fFUjxcwGdW2V5D2mWbj7nMRzhzzRWqVq",
  "key36": "QdwYFcYUL9XBqeCqm1KWd8NRk3HaGTRbQniCvgm8qGiAUDPGVKnEM5wPaSXmeoDk6bXXDF9TFibBema4TnL63VJ",
  "key37": "3KFCwnvSBXcCqkqpBqVtLvpCnqjN3EPF8bYBnEYWFYtF82sw5ggwEDNKdU14eaJZ6rcLeJXRkmXChFdNYrQUQBLc",
  "key38": "4JyXvo4jQfKnQCEQtpXRTpqeAC3hhqkAiXumfedseztUv9uf5fMuioW7CbDv7pKREz1FKVCgZSTnozcZbMdM69rP",
  "key39": "4t9J98Z8CwNArTSUxYixGizT5QYUF8qxtapPztknFDanHVJ7a4bZUTPcV1e86KMRRSFgGVnC3MZUuUjs11jcdNzB",
  "key40": "kiyJZHanUNmJ5Vx8GNBBEiCinqUhdTsXUDm8geaGmvhsBKqbQSvB2FLbugLbsMCAyfiPngtFrw9dwinj1DVb1CH",
  "key41": "5XyVsCLun8H3PN6d8i6Nu6T5Xxs1dSGRxkYrg62LGM2W9dVGksayApGYvXAg5h8sfCmhMou58bqUbRLNYE8n1veB"
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
