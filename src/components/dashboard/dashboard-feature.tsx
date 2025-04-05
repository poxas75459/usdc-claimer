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
    "4SgQ1o62ktqUvmAPA17VCVonxZEXANG2TtfF6AspfdNR5osxSyZBACaPaQGTjJPbJbWM5YHMgMeacRDydvXW2Ygb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hxV1MYatudwTC3dXFTy1RFZefEazxjuKFnyymkrfrADKHLN1fVj9RmX5pPKThGkzdKw8eaJ7YWCC5ijvEZdXq5W",
  "key1": "5QmnLJ16nCXFTHLS7GEXCrXBzojuD5xCHKzw225VpHvZDVo3YXGh5TxjXHxVtKvu3BoRsRbjaJgHMCRK4XETRoFz",
  "key2": "cRz5M1NEUzYKkbYNWNzzsnmcNjRHmi6HaTy6Zv6SCELCybxAKM1CJmomDeTC63ad44dFkr4z2uwkSytGrnFunbA",
  "key3": "5dmiwv8BgUuwn5XmRU7Kgc5ZLgFTQrAkfp1FZPiQ4pzNwu5um456dDKwu5Do1Q3sPaaQgtsipRzNozV4ui1YcfJN",
  "key4": "39cBdKv6stft7gexHV7c84M4gwJpS7GRSMGyyjqeSg6zADcUmiXWaH5AHaPqZH6vFr8tge5RHijsupHHukbhBMxA",
  "key5": "nJVknMBAnvBb3tGfefXNwHpcU3RX6X6A1ybCe5S83xqQhky2uCAF4oP6Xmu66U8DSGz7q6KE8vuuWuhWWu3eMWf",
  "key6": "3osnmnBRD7t8B7z3TfqNFwX57BRF2WtBeHTvK2JxnM36Po56QN1UmvdGVySDbUjpWhEmwFtKGfCoNSgnV818sT9t",
  "key7": "3urUp7xSjCpGXHyEqFZ8fKBRc1NzbQ8JJ8kAJMZz2sUPXsSzun9SswLhWbkk5GFeauaKosJMX5MHP9mWenL47GUy",
  "key8": "52TpkXD7FoLVHbdXiSksY6BbX7G7FSmqjiFmP2pXn84fPhWf39N6hUjm55tJLMFKDUGpwqJabdybjBiUXk4EHaeT",
  "key9": "4Yu5vo7MrHx5hdXxRidizJhVhatzQxJgHgn3fqUVDoBPbH1QCNKV3ALHUKazXSSYaoKCUZsgzpLFsEKiGi4qjA9K",
  "key10": "2xvtdqR7avzS6GmANr32Pj4TpAGEvE6tDtfqPToymGRFreRXGztd6kSr3rHg5oociC9diTXJWVK9qtdS4HG2tD3T",
  "key11": "4hqB4itQ7S9oRRR79CnPUvF2DRgmwV9fBnJx5XidF2Pq43WbhGF9SoR6jsE8prKg9QZPTMQSfLpM4GV5Ce88a6wA",
  "key12": "3XZjmwzx4NFWAk4q6BbQsR6RoNsQTUPr16TmptfciEQAFBHG6KSj2eEKsWmKYB99mxJDPGVuyi8sjSPuCqsruwsf",
  "key13": "3Xs19VTLfmY7Jh5aQ6bhR6FBVtSQENGu9TLsA9FGzuL8YcUVDrPncFVpW9AKg1KhLCxXY3tNr9XRzfrpBfJKFqad",
  "key14": "2PTBQ5R8mVWB6egQCQdFTJGMNAyX6cNqTSddaKWqyk7MKSvUV3NDj6abz9P26UaqFbPRc72jpYey2WdTJ7kNBGve",
  "key15": "5AbpjuSpsa4jjyPRrhPe61XiWZNJCRMSF1YmbiPPzzGFkT6aMHmNrGF3AuztymMbNYaf5UkpqTpCtwLP7M8RKQEQ",
  "key16": "x2W9dkUZRKtAwjjGKWqMLjAYzEySEGij4NGpQTnjXd46QtDmcz1L5d6X23TWKaZySMZAYNpzjeojEMVd3zUk4cP",
  "key17": "2kvwXXKbWPFE8HkWufEt39ooUXKf8kWoJTmEdN8DrN2khBRXcMB7DPQ7VNexohL9rnKrvVdD5VW2ZSecs2PyYKFN",
  "key18": "cmXz6odSx64GCgqmj1spyZ8nG3W5HEoeSTFJYekniC4asmTK2M3uoc3hFwrqdJwDUkVQ2DEwzsDY3G47tGcX8tu",
  "key19": "4qt5RMaeWqvVw17UBWEN3tsW12VLGaAFYAbmJCfC8iUkcW1S3Dzt5uWYbqsA9WynDbsLeods3hrztRcbVGaRbWFs",
  "key20": "JTPAen8avUsG2J6Nbvg9RSsu1Lz4dCkLrooKK7RNwFg6XwFmC4xMdpySEQJjxQtFmErprZ8ZWda4KdhfCJxQHGN",
  "key21": "59CRchuRZHDKTB1vJp7nkL9vxPdj99tXNtpKyfM5bStj54QzNMvvr2giUWgfP8WdUpnsgWXhVBrXfTg2GAipxxjs",
  "key22": "4zM9jdvRVYKJKRJewd18UkoxESNfHYFs6PqPLSo4qmdsuo3sAFtsrHA2q6DZMwz8PsyYfZaB171qTnEBm9GCcoLM",
  "key23": "28tKLQ364XSYFXMsKJYnSkE1x7KG2fS1FJDPSF19Jm3aW1VDLJ4xD9K1byQFsXz3L6zE872zNE3mvVnxnnp4JBks",
  "key24": "5McJPDaMYmeD4C23DB3ve4PJ1jKGEjcxtLh5HtAaArApNmMQE9WeBTdDy15yoCvxehGHAYUH4QNnMhneHfNTqhU1",
  "key25": "5FWSPAH7V8zhYek7uYHkRJouHqtTcvdxqhdbR4wQ161vLBS97PZECWajwhBGrKDcNrG9d9P47xpBMTsYe8qodRGy",
  "key26": "2QXThhtgHYiHxUguitHAi4E9UsgBFa65UEuD8EonJ4osggLHxRCTzkSbVCHMYetrBbgGkSpM6t6jewH4NQigY5TT",
  "key27": "4broYyeXy8ELgDDbNHHB6UbHYouQfNi9jE8H5LEtCMc4jfGyEEMt2dtuig9aF4Wm9rL8HF3jAZ226oWAStkHGufS",
  "key28": "8Jfxz7zYJMEU63uKW5dMCd3KmAZcgLsXtLTmdnzYQ7tRL6ofVnkpASjoTEnzoaPf9kT5d5VTgrVbH1yUkeovHum",
  "key29": "5AhF7ZJzcSCr9uWXiLhedVTyrhghCXcyvKHh1NhBgiMHxFF1iUnHJmDaGXpqxA6ZatvKjhtk66e1wNRMPMd55FzH",
  "key30": "3kGiHJDrbQFgC8HyuT9V2D3fjyNe71hBn3wd19ic5wXaRAAvR1ce2CmgjdwGPXrHZye49Zx9UzbcGPiTRLxBeAHx",
  "key31": "5HcVp1oyhvhD5s9fo4jH7FpsABCJMxi6wysiWwXmWQZbWHdYUzKxaodPNHDdNnfyapt1cZnf4nX7qPbVLX7SaXh7",
  "key32": "5aEYo9g3qsyp4gWwXHqjKFmnf2xWqgTUoCM8mJzjWtc6K3pQ8E8NzVtREkE5fwYNNA9Dr98tS6DXZBDeFpqcFViy",
  "key33": "ZcA45Ax7qBmgsTEHoGgi9GFpMaNjFLTZaFqWim1NWqnQJbKrdhgDkyuapUvvQVmoG6deQNCCgSoPy64seb1T3Ed",
  "key34": "2Zgqi4Tcag5ct3paENdyipzA93Zk5yhBfPaTnyFaeqGEtvAsd8zMLb5AZXHLKQXws37NxyAmadM8DL8coTGypXYA"
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
