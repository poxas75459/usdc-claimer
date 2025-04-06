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
    "4wXXtJhS6ahc8wVo2HqLJJmkkE4yVBjWFmG4GAPf57H5sw3qfh7snJw5NFHZxcGTdmWvnJUwE9sqfrKJCqvgEXP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v31nSV6GHqsURk5GN3M2WkTZw9wBNDZBVeqg7rcw1vW1D4XizocLaVtX1fJq7Jpsk2DZHbgQE747ktBu4C2EWSJ",
  "key1": "5Ki1B4rnFs9YWSujKx186SD4fMU2y24n3n4wtRza1pNxnHeduSASbhuynYWV4jXizmFkM8FEjupxtvdyuyKRA8HD",
  "key2": "5Hxeg9cLTFZHunSAwGepkRyGkvib1wZg52rw8SRHYdmqfYNucrhGk1WY6h9wQrHxu3oHmJtxAtS7YtoaSLyjBXnc",
  "key3": "329kLS2hxNzAtHgEmnBWy9JgRmmuCpEyUK5JfQJyj4GuNUs7gqGQwpQWHjN6rusySjx8VNAUj1Gf6xoTErsjKY5E",
  "key4": "31mtY4Cw8gmpVtK4dBBLoCBc3uQSaee1uxsqVByASoyjwLJgCw2Tp9GCr58UQa7hkNCskPDu6sMPQBqHDwHrLQGu",
  "key5": "5Zymquyg6gzcFx7SSd7sR9Cwc1cTyG82dqrVhZ1Qmtw9VsLi6wGoyQfeqCs7veoi7NtrUoUt9iKAvWBeNWzFnTbD",
  "key6": "54sDGae1kLSJnq1mmHKeT8uMyk5a6hCCNpUhKvL6CgPEVo6vVgYhUDcEzSEn8HMgymHkvDDUs4SN4S2h7akAc5uK",
  "key7": "2RSR97WAgz4gYqTqsBCAHss5xqwZr3vt32Vh97U4a6vMDHHFh13c9iz1B8nirvoUwyRHDfzL6VP5BBGDpH4vVNEt",
  "key8": "5qkGneZMd7oZfUeho4AGFpXDb8gr6P4S1GJecahwYsjtXRSNe5LCZSXRh2wma9XNNY1q7R8uncbq26SVGgKu4vXh",
  "key9": "cMohvGWBnJnWddiEc8GwBoUkA8TaAg2ux8JcT2QV6r2h7H1dHrDRvtJfUoWr9XD5gn2LmDR1XZ5BXBFcVwgpn6A",
  "key10": "3sq8YcARUSyLLQxsrZnSJZqAhfwikzr1N1UZPsMqv78nQ2997ncZnRCSCzFGx9jHYKqcKW3R4wUDudRE675mP9BF",
  "key11": "2AJFL8C4VAR3d9misMYAxZgtLkNWSHsqX3ayhmZxzp2Q1hakyNoN8aZq8PTuJ2KTJy66ekeNNuCY2PaQtKzjjUfs",
  "key12": "2DNS9mEcE2MoZi5TGojEDCpXv6kVutZ9zAmvrFzzE5LJCuffjtBse88QFDXK28EZCddZbVssSmr3FdtqMpUpH7Hu",
  "key13": "4ph3QRJWJyppF4jr77cQC3MdgJFeY3XRS1diBmPqgVGcQptxcxSAoRAq2a7Kcmde7nkFTUbUepccM1H16JGgEbMZ",
  "key14": "5kYBUhNfRmBzScoXENp1CCLGrSu9LcLmd63yQ1TdcUyF5D3Ym7iMn3X91BZ23JcTXhJVbkAiMAWC1zvA8eVQV7E3",
  "key15": "Gz6NR3Ba4rkSYzusqLmwz2eLG3jdm8qDv3LyVTQP4nC9dQnZ9qjPajomWP79usuJnDgNytsQjjAJztRpviT2roo",
  "key16": "5PFADaeUJxzJvoWWQkUyJpAMSmzF6i2BnFNUrTfDpDEhvCnSnSDKnzDPND4PnfjviuVSWG5QeR6NSZiYPfFM1QKy",
  "key17": "2obmVkJBFMQxLJ6R8MPUc36APD8JyiGXFfJzoqjQz7GoTJyVvUdzTVCXoC6oBut9iRUSCXS8L8hxmnQ6LFC8cEma",
  "key18": "52xmBgci4y55gU1ghEhZdgrNyyj4FoHaXRqo8YWTdxhYP9qfLJ5jRrNcZJRkAESFd4a2AVK5x2BqNc477x7ymSQK",
  "key19": "5ZrjbqH6XmHisxsqimW7Z9X8G2avv2V95gR3eBwf2MtUR19AQUcdJw7omhD97oRdHrHvPhtT8jQjXSvFhF1aEGC5",
  "key20": "588iVuaAdxudQW2zrekrh1NSoszghPupdByyEPVdVtouiwfwSa3JJ3oPokTwB66i7BybCbYFFwQ4nHMKdo1U2yo1",
  "key21": "5X9FCi3eitD1mEDQcP3Zr8D7LwfWeHaU7teyph2epEC9ecgVatseb8mVT2GyGYiqyjBC8SnHxQJKwKhRAWqkVv5r",
  "key22": "5ESQem2V27dVtaQNjGswW1QjBVbjnnACbEevxiFVUrBiZHMdLUj7G7Pnu15F5MfPCSXzPJK16SJgE88Kn4p1vkvS",
  "key23": "46ZiGe21hcfhBgpptXJ2UuVdsZFJVe5jXA3i3GNBEpBW3kHsdnrEsDBc7pWE6vmgPcSYVKhavRNwqXRWCoYBKNm1",
  "key24": "3E4LJ9FgxMGW3RW2C1WNZFW66yKujzFzSpayqHuqLMz9FUSYXEjPB7ncwoR18AEuATkoHGmmTjjLW3GFv8QEM1Xg",
  "key25": "3hdXu6aKpyTYryqvcrtMAo46c1zGfntKDpfGiTWGYgEyKoNL6CFbhqvAereAizJRbikNAjUvf46oQhkwmLUPpq9i",
  "key26": "3o9ZEjRowjQ2EakVaWAZA97UBTm9d3QyBh52Q2ktdf3269eqpDY9weTTGmtoFfVF9PG8qE8SWqq7e4L79B5HtZXD",
  "key27": "3kHtaK2h8PLLfsgiMVwTSmXrQ3eQUVm7w2YdxB6hHPdanmEj5sFuH8VJx8RtBxxHumefP1RLr7mGJHvYX1bctWCK",
  "key28": "5XHBYh5LckWVvnhmg2H7VbhAfDHQ8y6UcH2hXVgprqUVVBwhpopzeY81bdvsNY6UKUN1RB66Cnv8kAW7SZCUdRbV",
  "key29": "5Mx7beZWdLRcEa99NwkDzrcjKqwbXDHSTVqxGkmVySwoLtKELNWnRW2U1b1psGSSnsixMEHUquLetMGwRmxhmcbK",
  "key30": "2n2mSkthvBxpwaJDWunVwCFnxMc5ZUMsbgWibm6esC666BQcHbcBYY1XpthnrvLDEjtqnYGqdC1NBSujhLcrG9rH",
  "key31": "3vdB3ogqSCa7q4y5kg338ktaeFmnLAri1YDrVHtHRY8m851dz8FJQtftGMpDVV7QV7PiBrCDpt7MEdjhuqXCX9MF",
  "key32": "3DJvJ7VTR3s6iiPm5W2gxKyP8Eg4U6VB7QiL1oUCrT4zT6HYW2Qmr1EvA6UiLoBTbrNjxsuHYhzL1toEmB1wddxU",
  "key33": "2koZKU6FMkxcGuZYmwqbhZn8iPCn48hizNoJo4uMhoSGLW9DQxUf1ketLpGaxxSvS1pVCE83zzPLipKmCfCL3QGZ",
  "key34": "5dLFaU5cwswMVeq2BLv413dtBwD5mkPvVjNDSJRVaGmyF1gLamdkGZR4BSUefXLyRjGtJ8u2sRit7kqTRip4Vvdh",
  "key35": "34FuDkfcQtzK4SRgKTJKVKr1yLdf8GhSS2PvNXgePSThNz9r1oJLHswD925gcvTrLNNPrwpsyx2zi7198zoM2piE",
  "key36": "jZ4AmDtiwmLduzBbij7K4T8cadVU2oBA2imnKnyK38Ako2XYY4UW1UBm9YoCLrKYsS6NEDE9Qet1Ghjv8mbXieA",
  "key37": "4kNNdL1vSfXq5KdUY5iGm3Sc6fnzqP9UcRZh59Xcv57HP9w222ASCiU1kovBp2GPs71Hi6LJgUSRBYUqxeKQGMPL",
  "key38": "NCtDpQXAz1d4AAWne1PRzUqXfeQDvGhdTRmmtXwCeYJsrtsoffs6GN1U9V47k4XzAgK9q32xp54iX9yxsKm1SPh"
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
