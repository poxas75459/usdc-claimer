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
    "2k4yNed4seTuYswjUFT9R4f1VDJ1zYcj3jQGp3uUXAa9GCn47TL4cX245BfWrAPQqHjP2BvsJPTYk7NZjEgBBshq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZBRBKa9o1a3epex1itDAcUdo44TnTgqRa3aYKKr35FmHdWT3oJrdriVb9RvPHrpVQ4Qc97oJTLChettwJSV5dsV",
  "key1": "cEFJaLdRtVSJ8cn9fu1Mxpq5UKWVApv9nqWwx5xBAvF2cVnEgR5QR7KYAhJ1XPebMeX1ga9BuPkWJNV6DpxWUR2",
  "key2": "2Zspd23bVkqnjvZYVXWgiR9Fnwt3Tx4tV4VuZ561W8MTgcaWE6K3rEZL7Mmcid1XBKM5NbKW7GCQ9w8Zt4X49Hin",
  "key3": "KJ2gmRcjjGW6rMqVr6EYsrRAeqmEfKdY317tCsQDqiQR8CcriYA4X6y8dfNooUKMvWPgXW1WHdbfiYJ7fw8JKTy",
  "key4": "3xcSYytMA7bAzGXn6cTstafGKs3TFyJZTYRBtPUVrSxui5hXyUVjEfGv7K2He2uwAaTv3A9VEFnqKDbmyAhkJhsg",
  "key5": "4qZcmws5wB8YpbGvgHU1tSgpQArfe6Vbr7tLKfAjAXoWriBVZTizMQGtq5Nu15qGpn7PCuSCAnyxaW886q424TAF",
  "key6": "2aCdpmY732CTQptzBNU9dZKu5i7u47j7RoQXMsw7kie3iDgRavSFnvxCdQwM3N1rRBkzHq7BVmVc5gYDUCfF2GmU",
  "key7": "GKSWNncsbUoBoh25WVLoV6CQk92idfLZT5LmSavyYNgn4ssV6y3ewnXuH7zLjwPFA38FsraggZgxTkybnus6wou",
  "key8": "H9c9iUW8yDRkeL9hc3BDwgmEuRanvAs4HpPMJqsiSpGR9LnHCnoASqw5aSqo8HPxXpZcEFN29FGNETA9kiBXTFZ",
  "key9": "4uWFNHQj3fzrVaef4HmD7XbbmXFWfS9ab8dh4rBfzr8XTkdkqpDMZvnGWkCac4LhZBK5xv1Wx31PB8FjiCADiFf",
  "key10": "3d24Fzgpdnd8v4HZJ5n3WGzQHZfk9HRZdi6HNDgjdjREG3wBxgeewxmtHjgSVFoUq16pNrAFzN2E1e6An3oKsMbV",
  "key11": "3vVbKqjGEnXWdsS73YpDQgwqGnPMjHuBMpgP2VisRFKbPg92rTkKBNsKbBtKwz276Eq3CGW3LdZM7fzeePt49SxM",
  "key12": "q5D3cftQ57Pz4awTAVJTL2PY9vEqgUe6TvNnzjdsEh1tcCNRZMHtKzs67Kgb9XeurvqogNqjTqMrgBmoD5fbzsL",
  "key13": "53q78hZxgAP7UULCrDNAsjFxFtR6jWGo1r9osjbeGkt85nLxH9Nb2mcJL6jXqMmJkNhDR36xJBGL7Yhq16MYZFV9",
  "key14": "3JVxFwypqS81GGbmiWEH4K67c1FkY6aMv5kdXycU5yASz2EuAegCRtnKm23rPLvzZednoFpTUeiAvfbgdEo89JbR",
  "key15": "2ALCiRiW6Ep1RzkwfcK1ukhkXhtYZf1PMLppWuEM8LgXx4f8Crk18cfuvZm5C26UCj5cuUadJo8sApEfhqnZgwWu",
  "key16": "5qBpjmSDPJ3X1a91AgGjmtnpQ6Fhxj2JKzfdvz5cc6x7Yoezy7mjmvsKAmakasFiT7h9oyLxVH6SMGEDbCzfCyUp",
  "key17": "48jRSG8Qgf4urZScyX2CDMX2nfsLMv2gPtysZPHjCdw3dV1f3HrtSR6RrRbpMkSSZs6EyhKavH9b1r575EbA5zBs",
  "key18": "3VP3qzuxpsNjwposGVKnhfBZ1epQd3dS8YJ7TJXm2f6hbGEvEYZV33nwtbRfAWoifDe8p7f1f9CX9x5QqTKc2Mxa",
  "key19": "3teCiq27VZo6o9qiCFSXBtSSrPyC3kgRQEZPzjbLLSBmJdBNDubmaHg6vZkEXgeB3TVxJgBMemZnB14xfJjMQ5Kw",
  "key20": "66Wn8iiuukLfAQH7c8pnEsLeTKyT34ef6ZqVGQPy3dALt6KfG7edqRK1QeFpBtg7WfvRvpzdbenATWeuwgUQ5aqA",
  "key21": "4zfgykKE89mbi6657XyTyA7fheTqtdhLBF3DV8tMRpeczHxhZTm1h6hpKSqEqkDB3b5HDZzhCjjdg7MKAxRSKpMw",
  "key22": "4keRBf4LasduKcS3cdom6p3FkK8zN74VXUxg3whATC3gV5b7uDtZDQ9ZM6X5tr6uyHPS5siSCVKrKzS3xtbBxQb",
  "key23": "2CX9XYiCGACmvfTPD5N3EJLB7SHMs2VwPpmPpBWqNDRTVZz1UD8kBoSvtF1BWKJ72vRTj6LGYiP9Pz5MXjYbZ7tm",
  "key24": "QgfBrpoAnDVqb5vq5hewsgwP986QS9gENRqY1mCfCemRMDCffaggneBSJDipehdPcRYaBECAxwXmjbJ4tGNDeqS",
  "key25": "b9MRgDW3fUDgCEjdEyDj1MipHQVFwPCY3x2z3oDTdE4ap7bnZj1PJYifpv9eQdoHpn4ECwJ57gBTidrnDponvvZ",
  "key26": "3FbE1kNcFnSJ75wuVoLe8JSZkHXeyHXYgvUv6TibZMhmXYRXzonzhWzCPcPfu1dyZQGgcas7ousKBZQsk3RCotye",
  "key27": "AA3YvWAnAHJmM3KFQ5ydaV9ZXGh5nUUvHVQMTeBN5Ai6wXduYfU2tz5LF3hjTAzkimXQxDmdXgziyGBiVeND7iJ",
  "key28": "4mRrZoemRKsChHYvG7KCzDveGCULwWAKfEYB6Q7coGfzVg54jFEiEKhExVnw4DRS1HhwWRSRFeXDbyz7QcHTLL5P",
  "key29": "4VKzcUmGcWq9FqLZq3QwR6pRECxsi6uewz6eKi6yRE5Y2qtFf5PdwaVaHaaV7T319dPig9BKM3u3fVuop3ukmjpa",
  "key30": "2S2URfRRWqa42Ap1QFEWCbEGjJZuH5HgsYF4fMZeWmXapjnDhMb7FviqDiYhxUspHmLetBFTUfdvESfYbswTZsDt",
  "key31": "5H6KQqGHH8Z6kbBEu8Betzj1FZ56nfngguM5zYX4zTPHYmR2kqZTWyrUeQkCK1KGUuwtKxnRsjk3e6UdowGJ9tGq",
  "key32": "2phKZhwZHmt9weGJb853Xga1B7RQmgdpAwxN8M3jEeYeg6819KR1rxXYX7gVK7b3NMX5xToHM3Uf2Vyref5cHKSs",
  "key33": "37czqoQ44J7iMf1gvHZEx8stQiAoTazWYgpGem1eKEkcF6vRQfwUFMryQ2jfqFUxCinmdpgtjygfJTqzqqxcbG2N",
  "key34": "5wPdibGW4Ux3cVeXgdD1RpfTmphXSS6KMLC8t4PhQAvgtVk7zBTzQpQxLWuCbxeDrs4f64Fs536i2uEPt3ybFafQ",
  "key35": "4rEZsmVH8njSrEhdoFnZddvei7vCyq6A3tyPqVdex7iDSGZSDiyMqNhEAmSM7f9jKensyXxAo46X73SyrZQuELpb",
  "key36": "27oJwHw2kQBo2rWdMtxgZQ32pSSjhvc54GkkGpxuprbdWFrXmZacKqF8tTVGZMpVZDe14RHFiK84M9kwenu99fwR",
  "key37": "Zm16Nwb43SgLGZdJhH73iCLSHusjXi5dncu8vhfmNyGMzXigBHMkwrnrsD8iXwS2o6JfnWgSTHNQkqw4q5ZLFNa",
  "key38": "2HEMf94byMEtnQ46YfPUfVRgS8TqWQ4h2FmTe9TUm9bSRLmgZepj9Qq5Y4hnE1ut4TZzwfANF4Hf1GBDTSsrbrCJ",
  "key39": "5SttKAzzmD3S4dr6KNHkFwaywhJXoPUeh4mHbksNpEyYmRmPuPoh4iSdSRtEJwGxorP1YaLb35W64bHTQHCaXXDF",
  "key40": "3FFTrcnN98dSsAK1gg4ybEmnmVq8PU6VdqiRtU8g79mMJU1MNGq5ot5LXdn3PkvB2JtgC8V9dFH6nQktuffzugVZ",
  "key41": "2W38GMCmy3pUgDQ83KYM5NA1PFtzNRD3JkkQL1WRGGkPP96hyBVTJmScPhjJLbHeFt9rojAthAZs3KDMJukFw5G9",
  "key42": "5ZCn8DS6jdWurwzFGyJmAq3YmJYgBqhjeR6zjqyXTdpBfZxeCsuVZM72cu6tn3ig4KMEEhdF5YbsrhJPRuKfYF1",
  "key43": "5UFoh5A7CY539tSq7H1a3Kjkd8BQNoTozg1C2xd6ed9hQC5Yb7CRfJFsJFMDeFZNGsJe58eQqCGzHsJuQc329wU6",
  "key44": "3ZzLf72w9B3GAWBGnyizifCkHkf8vcEbGCw82BkRi7NDrLnG3uK2RWxQ2yw2dwoppvLbrJkb8FR2nrfeiP29u7Px",
  "key45": "2hEdvRsZkCL8KkBT8fL3J9ULbt96DA73cieYz5RDP6vS2CnP3ixvFn6ADEfCozTALim47Asf6UTgzp3yvTCdzyUo",
  "key46": "35rpi37cBYptJcWMKHmFtL5mRvqNXYJ3tGfzmTy6d6pk4wuoWEeRLRZG8UDoGUCUcuxvf2q5xijqSsZJkBtLhPNw",
  "key47": "27YoujnJC1JBW3fpLNggXrQ5FpAKQu8GZrggCiErcUXeatswwwXcVnnQw5eWZnm8W5zhGXtCYT1D7X7N3T9KERPb",
  "key48": "4TkujhCuX5JSZd3jDoHRiUUADwr5rquBDi3dkFfjVkqtL4tDYyWGN3PWuRwLJ46sW7qRHwNtV3cBiT5AMxigQDfs"
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
