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
    "2RfnnrNDxMZiK5U5DpR7QCQhWA683jFipKvzUQiMNJS99cxkmjUP5X6rNWEJzVEpqcRvsNdwiYKYBEECn3E9h3b2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZysVrqzgdhJM79TMpK8i9kPgG3sR6dMUuNiVcacuAECv8J2jeFDC2zXkJVMXdiArM1PphZ2whD2r6SwxrYAhrHq",
  "key1": "4uXBUmFUzb6aJWxFRX63u7zKMnXudfvfY7jCDCrAn8qhe8ZazJuj7ZHQdyG4xS4y2vQyNXCyyyqC5v7RD5ZVUnF1",
  "key2": "4WZTg2PD8Y3CaAZagMxfP7DYPjLDsMDToUjvC5wRDz55TFcmhcYCuhLYvpwCV67oUAfdk83TEHf5EwuQQpZmjvVs",
  "key3": "66SL3U1jFiB2vtsw5BPM8cPZdjUak7WQFJTMsxjfVm7JeXMEGXemqUKKT5hyAtACX9i24RSTYqE1rJamBRAixogN",
  "key4": "2qJ266rkQ8sCv6pNsVaZPMyTYg7ymfnToqh1dVVK7vBjGTkZMmixmUN9t76M75o5GpXvqpdWzBxRZ6cGrZqUmfP1",
  "key5": "65bASmMa6NnHAM1ARXofoA5JEGSDgvCqF2ooobHdcjXvHVPuP3R4ba6Udzv1q2SX9d9wjEy1kBPzKqueAknHuzEj",
  "key6": "2rdd55hjVMxtfJvTywM3jZ4jcUAZs6y2fFEgrkmjHZhw7HK29zQtcb6RZLexo13B3omHFTVfVnDyhqjMWwvemPcj",
  "key7": "2ykD6FHHUMxEvsn5MK2TbvLVuJ7rJ9FxMkGS5RE6xRj9Yg3JpPWgdNFSgQJHGACs5uatxXnTeHMTJ4xNpuDoDt4D",
  "key8": "2XMsKJMk3fMoexPkYRHhxTJCfkokRxLP4FBg3zw53Xu2Tufxw8WHrQiqhnSJcd6fyYD8NX54Njtu2wPjh3nsZxo9",
  "key9": "4We9DZmKji7YuDLEzxWCgZVoXHPNDaAaZvP3CuUjKKDzBHJE5RGEMqFg22SKncqgf49u1ELdaHu2J6JfWE8rbzC3",
  "key10": "4RRwGrPsenhsPdYc8ZF49qqeZN6ynMCZRQHBbbmC3rYCRCEUFieULcppb9Wtd1nKPHZxqKCSpNgDAzAbdzNvzwc5",
  "key11": "iUghXFoBXCAoR2d8VSAjrxCnn7Ab9tZUEiAqYqv5wTmr4RYYTcEf9hS47Y8Axd3Dk8PzV2FcXUjP5pNmx13hE3M",
  "key12": "4rNnUwnoYh5i8mPKJR5RbjQCvdHAyde7rLpR2H7Q2KZfLrpYCAgpMdUg5QLRrf4YBrGdKyfGYmYAdLD84LaUCXiC",
  "key13": "5VPnyhhn8x9iqGUL8uorgZFBPdQpEqCpxgoLh2XtNUrRMmkDmcx9u453B6mu23tRM6Q5BhHqVbkigXwbFiSord5R",
  "key14": "hmeMchK4hSTbEDeebWSqqRqaRZzXscaMMWhmBiM4vXDEj1ZvPuu52Z945xVb9FaNDFKBWpVH511LF9mk75zSzJq",
  "key15": "5tZx3tVicMGezpANTrPKs5dyWsvb2kx6FCDEnF4AkcJoycJAsTLwiK1s1fZLssNV2STcPz94RsZSo6XhrszBL9m5",
  "key16": "2LtGHqzkGtn7gNUWcV6d9qjfD1P2j4PQKwh57hcNb2gkJUYekzLZu2z2A1z9mr2mGNbx4LyQ3FLVWKtq5f2AHTtq",
  "key17": "4CZhQYWLDe1m2Uftj48s25WPR1kBdvACHmQi6QNAFqHMrW2i9jxR5P8ReHmVHCR6288XzbYMiqCH39UrWLA4P2Eb",
  "key18": "UhtTz8qXyW81758sYyLGPfoyiWeEkX17W7SRGFLrh5mfz6vwbJnWBtAWQfYECqABatu6kxAUMcHGs2XaJK5JatD",
  "key19": "4AKgK6cP5EmnfpzSce3Buit5GY4d13xuMxxXHw4DCYvFRTrqm8U9ZViUuSHVvtW8e17DVFTLy9yGGdQyuBcek9ZN",
  "key20": "4r4ZRJEQMMuUGhqUKoAHpa6HGFiHU62Er8RCHWJLt2azAu7FmZXfmyJPnaeVK5NQxpe6vHDQPaHcev6sGK8k988N",
  "key21": "5HtSvs8pcYhP2oRFsanEG8zGFdP34zArs77pET2SS7RRKXDYBrvLfQsMq2NRWgB5VMBDU8NuxaDxE2eJPwXfTLky",
  "key22": "2jheDtaczGdRSuM189z33PDG5jPZPwyToc3z6x94Rpg57wLVWsWQzsKQFTN38fVcTCHyuYbuEbZm8QJ3D7gL8E8b",
  "key23": "24Li3ubDL4HjwBWynLdiXWJodpt2NvvcfR8npaRsxd1cf9ZLTR587gCG94qgJJzDZXtkAU5DDmJjw1VNooW7H98J",
  "key24": "2LK5Do9xVe6xNb86SoWULrPP78oc3DPYMDw4GJ5cnbRvUVx1TDsHwjMwam9dsMQcn8Zc21iw9jpmfSXqA3EkkiT9",
  "key25": "3Ysgggka6ekvUL3m4ogsd9ZLpL9SRKWya61e2txQ7guoZH4osL3LNHnKb2tzAdJBxFWdQdXKrzr6hWeuB4ETdbq",
  "key26": "CmvGk5JsfQVEp48TWGhSasBEADB3afJWtanwXFeZbfhNY59haeP8RJXvEmi8UStQpX9zDJKiyo8QebdACm5sfnR",
  "key27": "5sqx9CDtw7FZzL5P1TCGa2epZrCxF6q6d2xvhpSJp7xUmfR2RUUv4Nd9DpoU5RYQVEd38Q8VExPTWsqyGzEyuXCH",
  "key28": "3EHXhMZ6wiRPjxXcQr1nBdwAxzGAXfCSWUrcekDfVyUBxUMzVBUxXaZds2FodRTaoJ52TYTw7t2GKVNM1BAwCT2Q",
  "key29": "4fQADDb9TYr1j2bMUZAvaWhJ17SmpyU89QgBxQ33saDcFPFAdvJLTNYnTKFhDRQf4DsuiqWexN4WANdPGYAg419W",
  "key30": "3xpvnQTMvVhD6bQb8dVsYdTDTBWtAi29d3cUyKEAob8RXwUC8d3cLHXR85VBphVTtGJ1nbYgfWyoJjLTEfe7PFF1",
  "key31": "5fJvqBKCBDKm2EsF8epbZowNSwm3RsR4bxMFVhdEQMW3TdwZxfCcdTUTWbHWBfdqjoDGq8NEr8kHqmkkNAGQ9Vcm",
  "key32": "3B7x6Q6z1uU9CxXfTbdG9CzctF4eXiwomYU3EDDeYVdDeChHfLif5Gqh7ZDNSbJJQ133mcKUM6F5VvgGHKxHVhFo",
  "key33": "22tuiHFo3mKgJMkJfnD7cZxDLw6PAgPMkTAwNAdo8vJB5n5GTxmGqxoaAJPMtPqyu4M8Gpq8JNPNFcY7aUtz7ogG",
  "key34": "eJhXEuuXnArdSz7jm8iwBi4Ku22G1arrLoQagSPiSMRaZQ3MWHp5Gfdzu1ctp2AaQv1NcfSP15hUmKGMJd98HYy",
  "key35": "5QfEmnvYfuohatw7Mzn3vdtEXLb8PzaNWp8Z2GUpfgyTpP6H1aYnwUKjuRoXekjfcbpt1iMuYgFF6XXVm8QGvNhZ",
  "key36": "2Y1jXwNAemD9VeYbGvwzyoC5kRg6JnaeovMQAE25ntypkVhzAhpuAFfN6DfhhokFpkTcSJqLF58fJt7Lp2wqKRTT"
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
