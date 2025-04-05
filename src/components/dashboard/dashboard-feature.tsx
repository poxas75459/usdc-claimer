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
    "2ad5tEvNAjQroqn7Shqh7KWJz3JDx3jGiNc7Tzr4pvwFE4YBqsYXcHdnVGHj6iVEQwJAHSgiueVzxEBUQ6Y3rheb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43EmS8PHZ1VxSKFCEF886qFGuyaQzjXBigkAu6ALSzFrxEvXwCcXpY3C6brfsT1LBoyrRXvDWXoraSVk8Ho3HPEG",
  "key1": "645h6LWFhG8vCbHqieczBacXbvF6outPQaShWFpZBUgLGRRUFGFx4zoZkJfxH2cpJ8ejEcbHE5KnhFGM5MFoQ1YF",
  "key2": "2eB6GeEYCpHcgmSVi437age3zjTM26jua7RCaKaMp3oazbgHPZHAHQiGHe248HYWdqA1SeyvaX8NPdZjqW5Eo9wa",
  "key3": "2uDJJ1MXEt2Tfe2y3mmdtuJDfuKtUfT7oMSCD3UN3yUL8CKEL4u1TQJk1rK3q1ZXUB9J9LU7sZwBvuuMBeX4X73F",
  "key4": "2VixQU1rvq2CsUBiRFiz2KxHEKQQ23YfzpnLgtdZSY7mzYSaugLsEaq9ZRXDyQQfGcUz2qP4c68DvshjwQcaPW7o",
  "key5": "44U9rxVa3kZNiDmkbV2Tb3jNW8zurFGZmzDAWwbvfmerfC1L337o5yU1vXix8EWC8WQZhZgcg7JMXbALusx2KJD4",
  "key6": "n6U5AADPPMpsRZWauhZzBs2QAL6JaKyN2A8gef18kGTz7nCS1F6d3CE8sAnpjWVvdGHsb257MRFhq8q4ivNhJAn",
  "key7": "3pLKufheci7263cjH9BWZq8GPyKxASye8a2ZRWRAd9uCW5BA9uVjMgHe9UWCAB2JHtfrrg3nc9CR47xQrzPD2pCa",
  "key8": "4XMXsrSaPeHQb6HdNSv4omU7iS2kfW5RVjDRijKoj1kVnhsxnMmeYP3bsQy8FVb2rFLo9sNAvCd3NtkQmasrrMrJ",
  "key9": "567WaUKz8DWPefvj9KvvLMhkgMGbxScX9QzRqq7REYJLoGYp14SYz28vToPEjpihvSEjom83iqGV4V5N4nJbW6rs",
  "key10": "58LufcxzG31QyBDSD8GV8XTzoikr7ZkaZEVpNtbYVDhstrtXbuWRi3qbEeAe6nP2DVXK8FXvTaWzrVDPaSXN2dW8",
  "key11": "47TmWhGvUCMuwfUCu3LwFekyNuGvZd7o1yYuk6TrsfDto4Atpat7pYgSk3KK8ZKfr8jEMwmo1iYAh3jW7FyMeopb",
  "key12": "2RVu9P5dJ8p9toKFbJjP3SP1ygyEFS3iHye8TrnS6swi6KR3nsCjNYVVtaLw5GH7PicZW5MwaGDwrj3EeRT4esTS",
  "key13": "31aWSv7MttRge61QTh5Fvgk9mCzCxx1Mes7MjhrGgqPJRumwhd1EX6ReabZN45kitC8MTpUqjo3rNnXZg7niBngJ",
  "key14": "19RWd724LEUhXX5UBzR7PDJhxn33wEbgp4X4sAL1PN7Nun6bJjG89tyRaEKbTX5mZUWEvcxK3BbB8Ed2TsBUVi2",
  "key15": "PG9GR5GbqqpPGLh6FL1BKZcBuZBwdpyGAb2Ud7dg6K4Te5aVS5jLJiSBo5QNQ83bAG2s8CRiqeZhcm6wd3qzA7i",
  "key16": "2iWYyZkNizagh3G7v95M7va1PjrP2ShJ8JqSfguCwUdQD6zGL5YP8uVengwYj8YGj3ALiVhUJBeWg4z2nkRmKuXV",
  "key17": "3sipiNBR5hdCFhK1ZPAdAQNzxfL8urFnbx791jYjfJjMyevRA73MnkzHkMxtsURcxxVRJdWRm6ihHptGDjo5GDVK",
  "key18": "4Cekat1fTQLkKHt7gFTUfLBBQtp6SP9NR3nZQa7PbpGjWcjE74yqJ3ymqBA27VLwwqXdEYsVFxA4fKiVBVNp736b",
  "key19": "4Nb5exceephe2BoCMTHFNkRHcKyURz3QJ8qV3JYn8wjHNHy7gZXfpgrU3wvVhhQoYZfwHxGVqQJPV3XS1fBwYUxE",
  "key20": "4dbTLrVjAaTan8aP2xhSZfW9fS2yRXvKCUB92GX9PgsQCpMC9yyu7DfHLvqCH4t3QPZGhptgK18HM3iZ3XTNeLax",
  "key21": "4vasic9wADq5dUphN9rRHHAFTjPrNCUyNykp1F1WcDbUEM9ERLBUrK6A5Ecy523xn8sdrPoGcUSZ4aLtyNycJryz",
  "key22": "5Lhtc8evUSiC2Cdbbmd5HML4eTZ6BJpcrXg6gxudhDF8hRHRHnfTXxdpkUS5BgpvcgdWa53cSX2qyse1XQDSt7o4",
  "key23": "ifoVf6iM6n5WpzwPYMi97XgiomGR2LgJ6TyRkec3A1vYNs9KvRrHHj5kKv7CoGrt71XRneCFs4usCHi6Eh6jPhH",
  "key24": "49xc2UzBkYimP5VGN9YwhhYwo35ttqCp3iriPLwzY1oUMphvvRnon5HpfxEpPLHws7K1r7L3ALxx8rrzKtRycE3",
  "key25": "3VesoSgroDR8JcT6ART7Rr45tFFwnpKfGJpchDg3bmyXLabCs1ZiJPvMkiiU6axCztFV6J8jUgFAeR9DbMrRYVeW",
  "key26": "3uQPpQKqQz42EwneABY6XNma49Ft9cbV3zNWDXnqNRw1qmaUEnQJJv7mwDfpNo92mqsGinsFnXefUv2YkUS6gRxg"
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
