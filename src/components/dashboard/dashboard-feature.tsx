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
    "diWTeEqqjFncFSgBhRaYU7MVYTKJn13xRGggEJP9NcynitE76nA5CwsLfkVBeQoPBdhn5vkkTnnnnsVFYUMX972"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UaPLrbCAyg7A4xhUmTawKf6puDx8zcgyFcNypwaqaEVua6e8y6J9XdkdvuHufRNXy8bMmCtshxF42f1ZCmQhp58",
  "key1": "2DfC2Jz4tUmGjjFCH6rAeftVszYkbYaPWQPSdLibyxj7Lx3a91QPaFqCouiUgMKNHqCpg5u7SZDULEd5RWBFogJ8",
  "key2": "vn6n91H9oLnmaLyxvejFxmjRAGM4oMX9HNWAAHiPwRJWTg84LPU3G2uXBZsFKsC6Ybis5RtR2B5vA2DqV4p3QLK",
  "key3": "26pUCK5XcEQgsjgCLK8XazeUh5SqaTknJ6h9x7TWQrg7irB6sSJcJEkPp1DmkUnz8Pn47z7kHvqtiJhWtoEN7K5g",
  "key4": "NfpKTqVqoSvJmRUhJ9sofeQ9hnobyHeUeaWnJoW7W3u7uH6Nz9DYtVX1ZycbL75Rndiis9zdpuV6F4LCJ3efr1C",
  "key5": "st8zCMUkoDFLUPzdH2aZVhM9Y27m4Azv7H3hqNB1Hsf8qEawrB9AMgHHn8u3sLw42gJLBaCotBc5JpdW48x1BgY",
  "key6": "2Vemt47ig39Cs6ZGmjscLuVE2kLVx7yDuxitEGnBZdfPU3yM898cKnivfipKvcDKdV8agak5Qgm4anMTPcXURS3L",
  "key7": "4Xvpg3jqaMG3WY2nBMZyB3Vg2YK1ySwZirQDNG9BRztsugPM32aYeizx87yKse3ndCTimHYjcAyCdkK8uBTQPQZi",
  "key8": "2N1K75PfqwdiSQsLhLzdgfVtJXk33BdbxFc1x7svNyJiUdbQ3SUyhoAbenmEttg3GbPFNBwU23ikHF8Q3DjstGfQ",
  "key9": "4U1WN7gGjJXnR8PbNGdNDouX56RRKQyQZJr2nNL8Z2aNWqdaavRfLAr9suDtAiUmfjcA51eaXmv5ewdYVTMfjY6n",
  "key10": "2hRTwjQTQDkgfXqDNBM7yTuHXarbsXud8PFjGeEfyBcefgDT9PNNtWQza8gZBJ7brep9UxqUMbkRKq85BgLdEgaG",
  "key11": "4MZhmHbbmAzb6vC7GayD6sWiqJugmJyK9dW2QmwKdHuF3XsxyyNnqyNmeqTn9bZQ9iKDxd4KpoteQtfaMZsPDTTd",
  "key12": "bbBuP4scni1DRnsQrMF28ZEt5P4pG4uiqcFwU1DNFF8jm5ARnh6ZjzAteXhHTFkh6AKoFDewx76d4ah7xSFzH9y",
  "key13": "4YJBqmSMuNKMQajW5XguqQCYPXiPJizhh54Q3to2jELft1BrE58xTF29K8JkRtbGBucGpUjK8ZmvHD2aSFfauXZC",
  "key14": "5MpgxyKTzXMBuFzy1TMKciP4ZTnV1aGUhgRpjD3kwCZNv9Ug9DCAP3V2ZPs17CrMK8JeRUhQ2fogHw2u4MwEcBPa",
  "key15": "KBkJTHGTEHiCYG6xPYJF5iRv8stH7BUc2VWzdecQkZTgJ42GZUYr4BmhBRX8n6Xz7YGwwDrU35jEFGqnNXPywRQ",
  "key16": "237EcM7HRBqZNzLcb7vXKaLhicP8YjrAXrwwypnkcneFaBrQCAE5k1BzLaL8VoZJGVrFAj9A7ax1menDBmojVgbU",
  "key17": "2ZawmL2UN5GSHrJ27P18ZYiHGtjhd5HLw6iyZ1GwvdgNQ14jhyLsQMeuQtaUYeKjzCWzhqf82UEerjsR3WoYA2Jf",
  "key18": "4eRkLLAmzctwz1Pif5e3aWJ1zkt1QbfjQBzCf7BU5Mbi658AzFv9VxubjuNjtRHrHQonTEGsAYextqjMWnN4J9y7",
  "key19": "4Eucij22xgbkiSwvWoEi7RQ8wZYzFL9D6F1KzvSFJc8kFqDtRs2U8ikS66VCE8RoxkFjFWyxZTqsarCeT6aKsb64",
  "key20": "4a7jHVdE2GBoia8R7uC5ehuFL8ZhhRj59C6pwwtYRZiPVomWQX7tPHBMwYXPp6B3LvaatGNBESPMnHQaBpdcr1Sq",
  "key21": "2bBXLL57y22RuN2LRxafPLgSsRXMpZARRgVVVsY2x4Z4LHCzt5JVWTWCvH2W2PZo4ZmsvQQmtPfYCmva6ueu6QMG",
  "key22": "55dny27naMFEb83hZCc4H4JkkFYD9MutpzGpxWSd8yAKkVVxouhjsjCRzBdcZUA2pVVcdMcHVNSnDZNPKTLL91Qp",
  "key23": "4HRjsbtmakeucuEj2TVf7CPosQU71YQUm6yahrTjpX7cGaEWLTDJz6YjRmb1jT4f5X7YSicy1EV4aj2ZxHBFLgeW",
  "key24": "3wG5mD52173mRu1yxZjLEciVGyekqXRZgSzWgdfEq5SXzRrKe3WdMAGfAheuoqD33WqscwKg6BuQahJQhxNMzqhu",
  "key25": "4wEeU6DHwDgSSAguuZnHXZTP8EqFoZVGRnxt8s7GmAutn1iZdDAMVBApD2z1nyxsydmvfdw5vj16jm9cSF2jpFxW",
  "key26": "2ivbrZ2nPq27khRFQKBSku2mYZaMAka7v85WdrMRBhnGjrFPwaXgpkD3ifwfvYi84rstwmEbn251ny6imUkTJDH",
  "key27": "4NaXGzmgjoUWEP8cTkYz75PDaJWqRcjEvkmFz91eVz6DvJWnaksuKerkrDyZ4meSPYXbyHUpuo3FtCaZMe6UuQMD",
  "key28": "5yWkoJwbQWr5GWonnyD7VnyV4HUGPZXF1CErgRmWcAAS8HsMLApCDUaFG8FuHijMzrWJGKsSTymUQwJygvTPf4rT",
  "key29": "SCAo9Jz5mJjCqdapT5ZTaFwKjqdVQ3ShX7Q2GjuPq7Cv4xH3niik4Vgf9yNmwTLgFcDbpReuBJW6PF5Fus4iCiK",
  "key30": "3hs3SkHF7fpfztk6skUJv3PQhf5T1DqF7iXGvuk6La5iLZ8keMDbVgkKt6jd2RRnCgNF7gEh5hsEHS8EsjFY2KJu",
  "key31": "3Do9rZcSgTknVqVdF4tRHQ1yzqiTpeMomRBbvaKoiZ6VD2UbAs81N2C95HS4CnNc1ryJfdvy8Wx4tGJaoX19pB3v"
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
