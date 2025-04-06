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
    "5RGZSCLJXrHevQbW5Vj9R9HE5tSuZvPAfH98t51gf8ToZWrTbkmZgwikqWEdmUoyUiA6Z7cyyjyeKM8pirXJrP5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kQd3QoWSLodDWrhiQdVkRxdgC9JWckma6XVtqEq2GAW5jdjh9NTSr8VbR7zfpH2BPtfrw18okn9B2JttGRDzDWW",
  "key1": "2HDrwiroP3G4N8EHdN6Wq8i4NgjQLcpN3HPFeeSBnnPDTPvoeExXJZFMMHURoWpGy6PSLonq24Yz7nsAScnUF3cr",
  "key2": "4bZQhuBEb8YrYyLhv9BG5SD9H2PXRSpmSZYAMJ7KPopqHYj3o48G5VrUY4WZiAW4RzHqqZLXY6gr2ASueH64SHSf",
  "key3": "61fbSAXRSB1onexwFhuBgroCrnXquJiN3Zke2qkYk2dLCyMYq6Lbi99gwp4aTsd8ZjLPmtaGkM94CqEjXibFHGkN",
  "key4": "3j4Gm6R5AP9UMDTMLbectFqewti4YmUH4p1JHBi4JZFbTeRDLEj3iYoa5HPBN7Za4gtmxZ3HyfPSLJ1caTpUpeZ4",
  "key5": "3HiQFxgNKDdjdgdvZHLKYUedwCW4HswBTW3owTk2HKLnWbLiDxa1pyTKVST6SNPz1GZZ72GwYTRNDZ41QRi5RUqX",
  "key6": "2X5NPJhjDGAobJi1Pmg6LmFssgCDLiZd6ZxoHinxenqHVTr4QviAhq9aheDrmSFsbPqwfsg7dRhzSAnepfaFjWMv",
  "key7": "4sDhrn7UwHBTDhD4LNcivCTfhZsqCixKN28dpUVf11S1atc5Heaj8of4Ff9YtMrjg3956K2urfaueXodWa9AyYBL",
  "key8": "63ru4JLKaa9xWDHfA5Mz9dDvtjAPzTK8dZY65ZwKY7FRfSAijCNxYfe2VbFeWttEVevRiostQUnQnUxnAhysaEK2",
  "key9": "bbkAQV18Lt9duVVGkiVvjvQi2YcTDogHFA1epMvXEeCbWyd21aNNS6KsDAo17R114PGFEQt7DBoCqwvwxW5yFPQ",
  "key10": "38oza4tHuEWP9uU5gcJ97rJM4Zx7TsRbDAVCfGgA84DNB62mdwCRchxSSjosFM8hKM7jfSeV1SesjUecqdqzeXJk",
  "key11": "3om3tpjz1Ei4fCv5AMCkJNXHobgXp99gFGBLR68voMXuYk74L3CwzVtb3Z8ic1qPuzVJaDgAUGtVWPr1YnGNEoG7",
  "key12": "hUUpDepSusY9TUzJGiatvGaRjhQSZfuvx22ZgKdsKE4kgyXhcpCySLMebDhEDQdzjRyY9yTD5Ft6XJBvjWyo34C",
  "key13": "2BSYDYBtTkmZz1mmFQ3MpNvwdXDXe7DexvesgqX9jnKAopwcAPUR1j2iZkCQjPV84rYwK5JzWpnnmH8fzH96BGF",
  "key14": "2foAVUxk8pmocK1Biv18gpnghEJaQzrQF2eGMzdqJ1LUcXDTjANdL2ccG4wCvbLwhVqDTF6LKv9xwzCto887HS39",
  "key15": "3favgvUQr8dUW7eGbjSHaPvUdUM2WsoC6bpfqUjuHpqjYoeNxwTSx1oEHuFTY6SBibazYpe2hSQKQm8fDBByXor5",
  "key16": "419sLWwj8xEsy6iaKFxqWRwVJkqAuwGbd1oSLK4toQzfFYBmnZKsC8LouwMhM1qsi7VrpiCuR1o1VNTDJhideiLE",
  "key17": "NMFUVvb3ywFB9Wis2b1pcqif4JFN1XWEDKhSejvQFDWTAu4q2KnrJUaVG5wDuEYXnEaBLDDpTaXQGLPF6AZV2FA",
  "key18": "uuZ5jUuNA2CX2bNuVn8g7CCytdtdY5q4N9wA28j9XTocGpZWD2JnWCwsQVtbNTKR3Aa3wisrAjgK4bP9whJMtcA",
  "key19": "3cDdq6oryX7DjJPMwE8qUwZEuqQGpJWyoRPu5fXSUYjx4bQa96iQrmAnWG6Da5z18JdX9iW6aUJhGqX7sgbrTA4c",
  "key20": "kEWc5qeHPzMn77djFLzt67YbURNrdHefzpW2BZVKiSKZFinUidUBYPpKQZvKcS2RmHtADxpEAFToozsMPw4YMs7",
  "key21": "xYY3qJo411AnWX9biRUz8SMsjLmpkvCVckXznFccw68hd5nXW5uvbrk8AYcM8dvJTFVrHG6gXpvGDzdTSopjALx",
  "key22": "3T8gDRDUDTg29pjHQbtXoYoR9i4g69xPSdpH4k6WtUx3VQrYGrKMc3haAymYX7WXkmE7ERDTspSAvskQokRgeAau",
  "key23": "2PdVkDv5ySdvb1RuFNVNDBWt56h7jYn7pvbcCFpMRkTcXZmBkRjb563Sx69Z1pRSWa8dZSwP3zNRxKb2CyTcAADf",
  "key24": "3ENm6MvHQLbmWZFi59dMbC9DaSvgAxgo9Zd2HuwXGT4wykvVrFJh161sb64VZ1jns3EBkT66TSriAhpDXMKkq1wS",
  "key25": "23VHno1fUm3xDG53zYehz7LS1XAtUnzibnN9f7rArBiT5CGnKyVaxuPGjRhSuFwM834W1zuLtp8pFYXZcMar6seS",
  "key26": "5MEbw8ayQQyMa77itkTUbHrRP4bWqLpKfFE5A84w6PiwFMmSzhS1aKg8jLjzu35uyXHXfoN7XHwFnY6Et9s5dzPJ",
  "key27": "3bCFMdXx4Gw2Y1YGH9jkDLSYkWTAdML1jJxSS4tCp8Z2LmPvAhDBVwjKZCCFhRdjr5aRCMQdo3axuhcchtbaMojp",
  "key28": "47jnhukhKUDF1sNxgHjWVZ6gv6KQ13a6dJctEbzhMyuBHc8hhvuuZ9SP59m658P1ZeJZb2zEsujsTE6ssPxsdHD",
  "key29": "4FSWoMqj7fKpeZQorRvB2ZrxssM7mv3txMHJH58hsg2MWacGU4BRsdn6TMydvWqXQUxG2ddeS4ugBVDtaQjSYxf3",
  "key30": "5i8Dy9BVuRB9zckMaYe1HatxNfuH5Qfvp4RjXfZAkDWg9AkdiCAg4Rufyp56s7dH4vos77i7a9AkU7pcSLEsKnzB"
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
