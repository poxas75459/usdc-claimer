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
    "3tyqVCGsGEcoddgnkJyZfPtrFEKtz92yRgENrnTXyyzgEE1BLKT7Qz935hxWC8NoKHdHfEsxtWcF4ZDteSDKKBBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tmw3ibwGL8J9yL9bHskKsh2CDyymrWuupMCM8HTJJHLpAct5wi5Gui6V1sxmSNQgR76Ec4Hvo5HHzCJkzdbu6AN",
  "key1": "oA8xNzKsgML8MAr6HmdiL7D2ByMkLoF9RX9cbgN4i1fQTUiTedHyH1nkAb8F4NfFnfytkc38a3vKTxUczZc1ZxY",
  "key2": "3D4zkgNuMH9Vwc2LhDWGiNZyG6yBfpFee94nvUnbLprFvfVfEvVttYZgSnEAk67sCpGuZTdJjMQvgf9fWFKGYhst",
  "key3": "daWmUAZAL1dCeG5VtvBu199HbiLBFt5TGaFWhaAiqZz7tdAqU1RtsXADGcNkyBJCziRxZYvmbsvcHGpLf6zQHMA",
  "key4": "5aK69FSiyEscrnrqJgkpWNAfuUK7fjXMNW1BtM1rQjn9m4pcnxHtPWknHxbP5D9FTLg5csQZGCN7eCX2jjV576GD",
  "key5": "2xihVZTyrDvivrN2rmQn4UqYRK76DmQJGHVjxFpw7yNsGUaDwVtTLCTSRzsKEf2BvbPE93NvvkJhCEyHmQC4L7U2",
  "key6": "39fVyzUmWgHRgkZWEF6QYP6esZ5WNKthTARqge2waUgfeCVMMfqFMbisSxGnBJKmjnC3j8Qh8Xd6F5rniSmoSh6R",
  "key7": "2dQLThGmjmSXCsUT2sN7PtaqvXuN4Y2ZjyRmxgr22WgNanmJBFudjj1E3om8ivccyNG4FTax9L39gq6o5R5n5Fwj",
  "key8": "6eoEiH5ei5kTKE4exKnX4nq6m3X2SGRuTvgGPEWB8zGPHuBxaqd5Jv4eEnmXFav51zS7HxEcL8bHpMz6j7bBCev",
  "key9": "tFFXja3XTk4HH7fQErLWGWby663k496DpG2XjjY6S63snWEhaPwPyJezXXWwqeUYKM3H8QHc1cSzbvTTbMDUVkd",
  "key10": "3WGqMh2SdVPjBL5SMEtFZnVexADSrTcDpyviAJWC3MYv41PuBVNrpePwDiueEaFPpAhH2hgRMNncXTUwmFPC5fUD",
  "key11": "PGAK9GGNMueFaRDHBux8xPmN6xg5fsKJuTim98Jy9MMXQQ6WEf3FrWz2GA1r8TiP895SQ7QQhNyvYaXYYr7Ptbq",
  "key12": "3TQNgATHdXV6krWUpyNhEifezccj6SiAw4Zfp33m7ERoChwqdfAbYJKoU32ZVwsaeJBbwv8TY3FcFH3dvSYdmVZP",
  "key13": "LVMTYXcT4XSBaieTiMRVUhxVpaaQNwEvPbZn7jANAiCgaNRpiRqR9BReodkm5nrPysrUiuXof2n3sVQuwhZEbKw",
  "key14": "xfU7RhYD5pG7PKSKHA1svLRzp52zfLc9tftic2zJnTdQD2MbZrg2bt1ApigLUgPDwieUfcXz7rZp2wAbm6e9rUm",
  "key15": "2pEK1fsBsQBLrZx86cqx3GPtDSZvzLGPVaCgZdBu7q7WRskQd6qUfnMj4fVn8YNjiCp1tqoqcM4pVEwcEvxSiDLE",
  "key16": "57eNBe6HvHS1dR287eCVAnfN36UGgUvuMStBSS3NrZ8xUZMMHjyNDJ4seGZ5sSZoCBcg8WAGAd5UvTZxW9UomyZK",
  "key17": "49ndqBMM5edT9qREYhKkvstuMaJpgGdaFFaWfKntk75jffQ8QzVxs5QHtb4rXme5nz5Hdf464UhftiAjRP6xnCQq",
  "key18": "2CBVWrQmim6u2TQBEKgsiBJVFM9TwtLAk8QZRWUVxVqzv4CSWh5zy3R3LuYSnkgYGYaXBUKNrjcpALKRD4ZwBwc5",
  "key19": "4gM55htkTnoadcMdzo5986m5qK4nc1fxXs1aPcafcGoMYsUDYKzpSRLWm19QEGkTFRxhXzak9mpQFfdeGKZoZNT8",
  "key20": "2hGmTxsJ6A5pquobWsfbP4Efz9Ui8kH4kWjxGyzXw1opWt42y9qGsY1zMdxofsNAVx3cb9bpdcdQf6wctfuFXiTW",
  "key21": "2ArMBfPJBsBr52pxk8fSvqrhHsq9uDCJPiHZ8xHqXSf858x7EzpsgcTFSKs5aLctdLoBktNa3nZLCza3tUYmtr1E",
  "key22": "4imHDaikeJMt4DaFi6Z2Vcd7HhDRyWYGC3J6ZZV6sn76r1bK7mzaWBit3po2QPZjhWnYRfXMLGG8xKcD7SVp5R1P",
  "key23": "2YExkUWSJ47T5WQhjPLDFYFk6MHYB4SsQueKQC7wwMt54aiTCNUfeAYZiPCuJN9HyfS9CexoR4YZw2oyvYfUfnFc",
  "key24": "4xiK3DX72Q8HUcGbzK5Zw6YXKPEytt8xfZTAhTS5GjK91iyN6sj7iCxESo8PsRPzGr9nufT2VAVK1JRNZT7n9ZM4",
  "key25": "2k1KiMmzHuqpjA3RG73m5RR3TyM7jZPWPxugsFxsnxK2JoDxC39rE46usn9hmHBSiiqQg4GJQEqpRc8MFYHhSUKi",
  "key26": "3Syd9zkdHECqa31rEUrhdpRqBJ6o5E6LAFfmkkQPdiSjZwcytQR3U756QEk37Z4b3FUbkUYL8gFeB2Q4VNxUqxeY",
  "key27": "5x7Ut7WusmyaHKeM6uM5ySVjYVPFNyGCYiakP5DVNpk7m3usg6UNXobwFmJPNUj51A5bof2UuoHhdFbE5qZLpbLr",
  "key28": "63wXMok9YSzkFPZnJmwRP2GD2Wm2dsbsuYEzi8Vmiewb9wKG3fAAdNvDDPSjJMGJ8R5AnzCoMjTZezazaMBhwgMR",
  "key29": "3CDuN3BKmibBb587RAJSgv1WUJNzWw9NbJg4zHFbMR6wivLJP9AeKkhn3YbVR9pqttEtfQ2PRACTgQYFs2Fw8hru",
  "key30": "338n5GYvq9Qyqu4wLRKqXEfu9iMdhsvTZ5RLg2azFbhLsyKyqRy64W98iNT2vmWJXKG3w4HbW9q5vC1hc44wi8DH",
  "key31": "skcZo1QEHsvmCwd2YnDVBFXE2ARUAPJWXRNZxAJn1Zs8UxQ17zy6ni3JaCFrbQ9LbVDJNmVvbojpEcXoii3BBRF"
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
