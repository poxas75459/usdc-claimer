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
    "2UX7RzUuf5npKzjNYE9bWiRbGLj4n55LYx8c9riLfQ78PPfx41xKi6g6zLeYUdRdaakpKJCoCqVNtEQ8jCjYKK4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24GvyqJ5eFmZC7BVfBeh6czd51BLZoKThbmLaVWm46QsCVVkwgBF6ggnDBmrcA6BVarZjFKbBgoF5huRpTArDGpi",
  "key1": "3uPPpAFTRew6hGTvM9X69gQWQeSkZqYTqhELeoLENKZ4NaFJWEhvKu7cRjKD9VGo4dDSmNpUWzK1ckbp5xacEhp8",
  "key2": "5Qr6azvVWjhQKktAzXxtLQ2bWp7yQXw8jt3GVyzb3TQ5Toq6rhdgWriPZ4itBYQ1spkq2Ze6YXYTErTbKEfYxkZp",
  "key3": "65xYajdPHVyrUiCPzzTfAFcZMeWe8UVGY363vVgBjASEoRNq7CocgBkfSNVL5HFmK5RcyAby8nRHTE6pPuEuBgEy",
  "key4": "2XwEn1bhGAV5ZXjgjyUmpmssDPvPJFmNQ6BdwiEYR81jcG4yiuQwD9ZTdS2HSTd5UmghK427YQ9g4jMMRMBwWNdd",
  "key5": "3k1qxjugRwXjPJuFP66BmGbp4UQTJsCrcHL9Atk1fRgXBQ9WrATBKCHmsLskUK6NjjYehapYo7yntM3N3DMj13kP",
  "key6": "4bNt71HDK7Ju2XQuPdBgaaPhHBBco5QdyWwovN4psv5Hmmhu5bFCYNjq6KfRBT1PmYvo1dzeSTdTn97fGaLjU2Qy",
  "key7": "293tnxn9FrQuS5GJTgMxtDjMZT1e3it2VBn49ZD2XyiuqieEEtgT4vYqv651jiKHUnGnxWSfbXDYqGZH3dcPvSpS",
  "key8": "3ui9GsNYFZ1jdkqhLiTJyEmttLquoopvPPyVwi2ZQxGwHfWhsCSMUNor31cpY6EV6EbX4ab4358jWDX8pnUSwxM2",
  "key9": "3gz56ABkJGMaoZ6YNE5rc63md958Q2dXb4kva1WSptubN42Tk5GUC9EEJ9YEFo12g7dK1vAW7DCBvyVN1EHu75tg",
  "key10": "2UPzZyNMgUBcxQ8kJmKgJi3wYdQB8RiTPzb1hyJuKCS3uJQFgXyhmqd4k6ZaNDjQRTzLygtAZTxvQtzQMVC4RRPA",
  "key11": "XrfVqKYvMnmciG9BAipmTQdCSDqJtaVZJgHnoFaiMAwx5ejPKNsvF4DKPGc5qtDAMRpCb664kG9TYKPbY1aGD6P",
  "key12": "3KJJGfR7wrzPS8Ta5QS6PS2PLmPgJLbd1d9kh82bHjGsao16MU9bATLUkoFDUbiRyJuBQHBDHQ8LF6ZvAWrmqN2W",
  "key13": "2JJ8Aq44WtEbkBjG9MasuwxKcsqSQ9sydrW5PP4DRxkz1dcgyEsCkopDQxsxaxZZfwFitvuVrRWCKS1mAXWfK1At",
  "key14": "kktMpqk1DfbSuEGt3UidXSmX8nGGoLcMhjGam5r51jyHa7cKYGZY9VzHKvuZggJ2ktYoXcdX56qL9uRx1F8y3MK",
  "key15": "3Ztt7GfhDrvK3L6ydeGLh8mv2sSPbkjUp4WKMihHrKwMENFU6LrEdqjFXu43kPSi6KMeR792q29d7u5nQQU97LZi",
  "key16": "23Wm1GB55PBPmpJ7SRN7Ruzj8hFrYY2Zey7Q68UCouEgA1fXUa34ugdbU12Xqu4HtG5CeeHp3Fy5mz1p1zaD9z5c",
  "key17": "9tdqYMveicanExcXG71Pb55wZ9KMWBeE9Y241Lzt5Pqn1SC7uGC83SSwJGqURJeaEJaCNUj1VvLf7ZZKsYqxRra",
  "key18": "5rt7G5GMyWZTTzDMyhGzTb8duyxJppZd7AQXhycJUUpuHJFzvRV3PqBTKQdXkdV194uzQxAkVrTBgrAKp8QGTcPo",
  "key19": "5eEzLoVt3qsKovWEcn2hNBBvks4TPQWFXbEkUJkBmtPqouQnc3Vngb6S8ujrQoddgu5Rbv2asP14QNanVAB5892H",
  "key20": "tRvj1nJwwN7ZuhLD5ANTzSPNLua8bFQuybkDfrE1qZ1WCaXoFz4XNE7XJZrcYpBB6oQqAmChLUH5dYabuuwEQAY",
  "key21": "2Fv5NakTxNa9urF1txe2xPihFrUZ7iNsijhN8UJkTrRyqv2GsTZT7AALd9FNBNAqUmyQEH5TSonbxeQwPWGz8V8s",
  "key22": "5cPEGAednb6ZeZzV2XLEtDBrpHSQgo6AgzF1r9jLV6U7TuFmsnKuwPX46mXqQ9RY3xx3hQvYT5Tb6GCouEXfbPxE",
  "key23": "3m7epZEuCkCEUoNJSmQgYyd9LZ12xQTBDwu2tyAbUbhtYPsu4pqj9y8JL6tYdEeULscZZAzrgXzhrvTHR3JLS6cZ",
  "key24": "58Mcu1F6yEKQhS1BW7ycTz1xngnqrH1SCegesUuLoV3FhBRzCQnT3pJyPFTQkg4LQScLyBjVfeCUKahy1zQzrVXx",
  "key25": "oFXgwAziEeNEFyMj2RC1esvmmtQtKNYHiXQS9pAYjQah6PPSuFHirhyrX13oYwtVwscXHNX1ZYXQZrkDkapqLE4",
  "key26": "2eZiB91qML9YV5t7LCYRVP7ViKZXPrJYktfG5bwADfju21rVgbtEvK15Wv19QxxXyhFYRRVy7dQi4i5RPR5ydXHX",
  "key27": "XdVYGW3Mrsj384KTtMo1zdowGJaPyigfsNw7TiMuQzPGHMor5xrWgHo9wBURsrNNE9U17FZEXFsff5WXCGtJReQ",
  "key28": "3ZiiE99jwFJ5173YevZd3WCiECZrfXmyHDEcv5iPCHtj58aUtVG8Ctkv7z15cksyicz8bg4RDtMP59F4NCiQwjjo",
  "key29": "2ksAPVRm7WQCR9TfzSekyqgpcZDRaqX363bfL6qeDnnPReF1W3ZttYzm15SNHjBzVKwpLTvJkvM2Bmoj1Zfw4pE",
  "key30": "2Q98wpAhkDbrLESzXFBujCyJBYpNJbxinAKRKK4pQu4eAsCoCxuNgW5HNf2SZ2nG2dyCvBrmy2dSDDk4evT5iYmk",
  "key31": "5w1XDTkWKf2bcJrJwxGTkpxSpHXzNejaiXihN5knKteRgZwB5EMAS7DVykxjxWpJxXk1P6NkE49CutNCNK1US9wP",
  "key32": "3nddfqgCqEUFXzgCLvHHUi1q3GaXtk6q5sLMJDbPbnZGmeBHwWmxxuH2SZx22dhDqEQcWVgpvs7MRng5YZEWhmD7",
  "key33": "fDAinK3aLz2vdGSTiyQtoTmDYiaR45mkhjoTpSf7wNxCcP9gF4YcFuJywkqCXUgGg8PwJTVdj7Vm3rfNRMfgd6B"
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
