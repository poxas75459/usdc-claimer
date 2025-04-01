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
    "5yQ443wHPwzxmgdw4AqTwofFdfUT43BG85NEdJgLAPJUcU26hTvHgiXp7N4VkZRYMSBHc2AQNdsXGFMirJDZoK8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27VDRAvd19kcEtVqDEu4pwjDrUsgPVpj8LU2GAWmmDZDUzQHYTe6ETujCVDnySJB8R8ix8ipWwLPhHEyZ1xuoqsC",
  "key1": "4BMLMcMooh287xvt1PLKnMFf8yCUY6azMkMGotuXWVavUqv3qZtu9vpvbehXXSEMGCB8PkiKkpn6yqRVnVxoFqnE",
  "key2": "3tVsAD6hci5kiyzhBzfqmdHSEdAwowJRTH21gzaotWZwjWc7U3gmPTZuxxYa2YgBsawCDq4pgHb7AUFDzeaFakdk",
  "key3": "e4x9BGS2yjpR69exf4of1uqPzcqZ5v9cnKnhrPsnY8j3Tz8E3PthGJwBsLGMJ89ihuRA1KdrUH9HTMmHVuFtp9N",
  "key4": "3RowaeBmgTx2gKuam2sArGmvmBUXL1sbHdJ2rYHoJKHQDHuH68sAvVBLPqMsKxgFZdbpyCtRFLJEviLcojuhThJy",
  "key5": "3orTXPQutmVd2g98KpGQnR7Ryavv75k7hJkKYk4kAJoaV8zc6h2enekCEhUQviA269mgi7s1ge9Jc2Enjn2ffG5y",
  "key6": "4pt9Lc6a3EmESJER79wh4XXBsfXWmFM3BXsLdst4WoCnVSnAcEsxUDuVgw3qBq7jvE7zeEiUxPpzZSC9ZAHnpACu",
  "key7": "263MUZXgCrTyxzpY28XUiEQRYLY8XR8Zhd1sppa7unTANKfMo2UpXm6pwQ7FpJfsDCqD7Fchaz7xFQHFbbfajHz1",
  "key8": "3LT6WWBWA6F4UR92EewvtBZArXjJBDCacRY4PzE6JeBx1j1zz8PafmtHqZN7JfzgaC7RhwNVHWqiEka1h8d5EeSJ",
  "key9": "263YE35jV8VTmtsYZy5JNpstQKdXKX1GsaVkRJ8wvNdzCFTTm8Pp5jadib8qN6awwiENXAXiDC481TPy3TE3MPFr",
  "key10": "5WabSAss2yfjCzUnFGnHTB7f4uctTbX9zXSqV44L4EbHUdNUdEsmi4yXDEXtK2S1s4T8wioCB2NfVTzKxehWewYU",
  "key11": "3uPqoi7A7m44K5HaFyNjMi4LPaTjsnuErk9JUK5G6u8ytYh6afFfwvrpYF4GinwRuXiwi46C6311xDZT7myfmxjw",
  "key12": "61vukVxqzjvkjU7yxKm2yg1ySxKWJH5ZkcfErJsyeJZMXXzBscdfUgKCwNS5hrfnjkdspEMoqQSE3C5jGL153SZ1",
  "key13": "34fGyBYN5ERXFJ4Bk8CCr813EprEj4fT6upRVfR5JT9KEAew9o8jWvmBSrc5ZqvMvE3hbma9xEkexbi9JvNGy6CK",
  "key14": "2yefUSyFn5YBfbqd1sPBpjTFpH9mjcpDmZ9CttJnLCVa1hawUyEKtEFY6aLPfZotUt5y11vxxJNMNvGgh7CsqnLA",
  "key15": "5gY8ihHwt6FjZ5JLHwb4e2EgVbvfhghFHiwmeirf7FiKy5dLvPLnnEhjGyadwJhZj1KRWjzhgfCsrhgWUbfiqCRn",
  "key16": "4Mjv94YtQgen56fygq67aFyhoHW7MRPmDKJxWQnHe7FDjTyg8NZDCwFmHsotEid3HgZpHCzmezaqWdGeh4nPgQat",
  "key17": "381nfR6hdXdoFkaL4uQwaKLbY6KqebYThWusHTvmwmB5h7SrvYFvYQLPiZPZP2wZ4rV6G3USZqfpwXHeWTHLjHzT",
  "key18": "4aCTAWdbcWg6X5xun9swJ2HLUFJZqER8MWBtdtxwrK4v8mY76TAMAiDQj95Qg9DEiQpmD9sW44rBWyvPK3VjzYyE",
  "key19": "49tmDCBY9qirGWjaRJY7gcoC48QniuYQhwoMRmL4h8vnjpjWyDeSiE6sCKVA9Q6drub1AXvDqDBu3zzfWFx5S27T",
  "key20": "Y8e73nZwk4yWdMAq77KrtKigBykK5CXvBhWTMU4mKFvEYZNm67aF2wcceETsnjnvjFWLjQAZuqT5ZxdveWHz4zu",
  "key21": "gQc35ACYTthzaxHWnaqf9yL2Tfuc5QZhAXMYxQ5uHam7waWpVs2K5GA8YUh7C3x9jGPeQfm7G3bB22Byuy118up",
  "key22": "3AmqqHD2mCM9cbSRM3aLkN5vZDVpgYkZJbVihLpZxGmNPyK1s6gfsM76TX71fBvMqu6sXAKZtCCoDVxS2udt69q5",
  "key23": "w6CXcycxKJYMDhXYymx9zucc9XyKFds62rUUhwJovHDMfYcqScDtJEfBJHp3htapJr7CW48Q9CmFDK2u3yeSpJV",
  "key24": "2JDvMpXGDYrC6JSmbFoLh4Xpxj6Rc48C8buoA1Q49JhJ985NCaRGoGWhn1BidxotUu8QxXvNq7XjbNY669Prog3W",
  "key25": "ntgP8hm6jrKfYNeBKgrtmkwPa8dSy9WWQSUmAareqAjr6CbjBokAeYYt2FKeMssSLintsMmG5Hmq7VfqVRmwPFw",
  "key26": "2crYgkBK4tbQSVioo8F4xn5NXezxwceRFqrya7zPDfPu4pjWf1jHBxYhHYUvnEpPEbRGHtnjPpuj7WK3BPvHe2xu",
  "key27": "24Nzmq7bhD3a14aWVgCjauDHm7gUxW4cAyyqEFe5yzuT2G6o2GnJBFNtLSFYg2CTH6ePjB3L4gcFMdWYNvgdf6ub",
  "key28": "oQgYB4rNU1LUNhEdddEuaykukK87BHZwnR6LWfScLj24TvU2EGouNuJeUaqCtRTUbK3u9mnTQA3mcLtgvjV7rGY"
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
