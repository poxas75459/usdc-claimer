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
    "497u1wTxZt1stgXnqo9Eb6VZyXtmQyvLu9Bv3ZtZRQwJdezwKJaA8cmrBLDGdW9n3XufGZ6D8EUPHVM5A8eCpRRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ET8nJJpBYey7rrLz51P8c6RYzG4Sew7wjgoBJuVRjiPgfTe5ariRDAohrsGVRKdhQruEC7RpM3GXoXufZAhfu7x",
  "key1": "3VR5t49eKDfmTAjPBRMTz7wwV9iQhCMM6ZikmhyTxJPpoyQhgynfB7FHLky7znVSR1Qm8M5tqqkYAZiJRXH48HHS",
  "key2": "5CvMEKNuaxNrHjPuZqGZkdspLfEoEkT4tmQJumZKYJzXzqXKGrHzP9ZD5p1PTrP4gcfUG55EoUAbZ6Y7x2TMBRZt",
  "key3": "5tB9XPopj1qJ557unshfFJEEE34mYQ5DVuHxgq9kqS18c2x21b2DaZFa3J4PtTFgtaV623nYPMz3VkG1TujQ3fqn",
  "key4": "4zaTNvYJxRt327zQPiM9UmqqR7Dy6YdTtS2oAynveudsUDLJRE6azgNDRzZcH4fvANA1j6X39t35ijssJRpSKtMP",
  "key5": "28EgWdDSe6DqoETF7ix5Hf7gVfNNFDbEXU33Sp2QXoLUS2faeQqzg7EboasrMZDU9BnDQdbGcGeLtpRmWrRzPtbd",
  "key6": "2FNQyBSpyGtmnfaiXAHsdJX4ZoS86MEB3HgTDwrKWf1ntPt5Axa6YgYoKU28mqdZZ5Xhquo3Ktyp6o8wHKaXUzje",
  "key7": "4YU91571cKPThjFcrEXcCj5mxQzZvb4VaUyQdSKbp8hLndzyPvYMGQKMGu8ajoSW7vRZ9h8C2DTXtkU4MDUbF9eh",
  "key8": "3MpzPi8P6eCKGYbPzBZCBM5CjHHjtoCyxmQdZUnEV1STApXjAVeksRWBptVtMzLfc5AGs3XJiXruiV2SR9Y8JJFn",
  "key9": "9CUTWRvdi7Y5x8kCFAhFr2zw5WS9CCfc8cSK2AdVTAhAzuX4RPFgy7MszWwvGa7ZKP8NaF8jMjQMw41uxESqAwc",
  "key10": "4Z66wSnFnSefFE3kEWQrrkPzXe4318JNSTftoWfaRuARE2XX7knszzqPLms1GCaMDnGbG41P9RWpLoMxSFRsU9pU",
  "key11": "5FaJYCfYmwuHBuGr34LBnCJWHvmHuWuutQH5ZPTpDJ776r7jAMS1F67ykGcQ2KXaV7hygGC5TcfNowzQNXeJjjAJ",
  "key12": "5vxLVCAHG69VYNHABaCvtSZPikbeLbfp178hWh8ncv2apHmNAsRb4xkBoX276t1gA1h2LQncgoUu9iSrdZac7vx4",
  "key13": "5rEAwf2qxHCbEWeNiJocPjt5jm3sh2eMt2eYRmpNUkRJeD7DZTdEY6AvnXLcoMtivcuFwEPCPC6XGzUUy94rijjH",
  "key14": "PQr5UscoPghUTRvYAa9UCQveqsdCyXPjgWetnS7QbZE3z7MduLjY8ouBEQRBPYf5qio75uGQTLWKBKVW58i6Xku",
  "key15": "34eD3atLPYqzqJJciZyXWKgwUFTqF7AXkTvgDKQ6fdqPw2FaaFjaJWhp98quLqfMkRYBErZ8gDKguaBnYuRU58o2",
  "key16": "4LvMpptbZoPsNWzcdrbBHTNvvbzp8w6YWBgimgodnPTMsuiALDFVQRXuZDRgRe8e67AWro6zWUoTFBDxJ2BPPstt",
  "key17": "4vVyXCdobi9eRRPrsSawYvt8AY25aJLsF57EK3CsUN5K4KrRA91PpafgFmpxe6GqWSZDNVM3SD1xT6KvLRD4XdmK",
  "key18": "5iiPFvr3noeCakdDhDnQ9qoVT9knpvY44LwBwEffGePy5wsazitZJRWtbejHquPJQhSGhWLmvoL2VrGxxkF1EGRo",
  "key19": "5ERobhtygJMUhQbMMMm6J6EjMBy3NAo58YJrPmUpbJV5veL9SjrU8mGh2GhtXp4rXF733yWCtY5naSanqTueU5c3",
  "key20": "3rHfiwpEtP1dvfg5w74vernp1LqQVxNXtCdT1QSWG4grSs6YLWHfAocnjR9BoV32UynKpDWAhcGDSL4aVj8hHKHD",
  "key21": "mq5X3GWyyFwme3JDJE44Lys78zMrHwixvTkn3mZvZstcwqbbmgN37DVDstt8CmLb2YqfkCYBkunDaDNUWzmzg5F",
  "key22": "2j2BDQeWZdMhjWFCYLM3DGCjj3xQxQNPSjAFgHkp5yfYsXa12smJ6qQJX8MBkmm3p4PXX21VdzuxBuhuyYEVnqXM",
  "key23": "2wNht8x3FkpKuSvAn2WCde1HA8dtqqX269ewohm77uS4jbLBUHnqjhD7G4KH4S59oMmZT19xnmSQBpmxxNmTvFCn",
  "key24": "3gFpXFRdeVPHG84e4mLnUmBud2s1gVbDWxf1LmhbMtPw9mPbgsrBgTaX3GrgcxG75wXeVqV3sbBZ7Rt2AArHNLK9",
  "key25": "jNYyb8dWth7btXQb4CYdZ1UDFbGuVK2WPLsfXVn4mCT71SBNesSRq1JDnah61SomWxHpbUdbBjtvXymHQtA4Q23",
  "key26": "3frRzeKW5NxsJinT3zYUPWUi6XzMrjUhJDtXfGHahY4AMoyJtKa1E3rwqgitijXUX12XY6wdWvxtauBEcde977oR",
  "key27": "2j6DqW4xw3HSvSDDgRSUkmDUrT88r88s2ne46PaSy7xn4jx43RfrWLggif4fgpZCGogYtcegXxqjfsBLUTVznNsD",
  "key28": "4G4xrQPcSiEUpxAfg7CrZFJF3d9WBLx9aKK7UoNv3JbyHG74ztD4vUBZoPnLrC9xAg93htwZBxehCurVSBQyfPWi",
  "key29": "2gnm9UbEXj8drPWTKaXQBoB8RrXVzPsnDq55wPGNQzBHaQmRKoPqv5zJsrsffiTQcjKJCMsUBxPgkPwHAjt5UjFP",
  "key30": "5s3QJYSUfCYZ9MEqa7M2uuvhupj7VRPBZy69PV5aZQbYENDyAU6RvTTrN4UQSiyKK3HVGGud5WKspnhSVeiHc44y",
  "key31": "43Q2YCY1NtprbpjWFAmzHBEC4nrWnbJYecoQ1ee6hEJisB1SE4nvATd7vP96oSpmpDwh85huQLe5BmR684SxJNHj",
  "key32": "4L4avkCgmt9jETUdbtPMVEubR7gu25mwDcMRsv9X9dCeZXPk5N3UAMyFTWd49UN6Cy2DBJc61SiVJsw9ou1Cati1",
  "key33": "4ZzYwMqh3So1YhZiE44Lz2QicSpi8HYapqYmXV5V9opShnzxqqQmH44nV7FNoLc5CXLJx4Cu7u5FiciJRstmSwEL",
  "key34": "4HGBbwLkvbkYK6VsFtmUEznUiLhAw33Dp6My1PTsYg1TrzhkQxGA3VnNnV1miFNJ7B7a177yuKNEzbndASLafUSB",
  "key35": "5yX9SFa5CKrJGwKVbYJqRV3tVuGzqR7Pn48PeDGzKGH7CdUxKCymdmo6dJqzgDxBYafFcgk9FYCbKrnhMG42dmMc",
  "key36": "2hntsytpgKNz85zbDgZpoaYPt4enW1ww5zgN5jAhYWZ8aGxjsME8AJ8zjCky3mEjHnG6WnzWp8WPamcWfqcgAVBu",
  "key37": "2jHrHWzEdR2UtVthwBE2f5z6v5jWuZd9ksM9YdMD4pW4dcoFgrAuzsmXnqp2XyxZqMmohxWpEEaGLJWMFioxSoPi",
  "key38": "33aHG4F6akxr1dbzHoLWg6Kk9xqmzHPtSMre5LwRBVbAuhCMg8UDCLoQVoJCiCTaWdLs13hDbyZQ1TEBomVDi8pd",
  "key39": "3tr7tYXmKSXxrLdKSs2o2aTiqigiDWEMbJBDsJmZfiQCdm9LnNiXbB6oLAQSHakUy5yhVdCLPucDacDnBdPsR9QX",
  "key40": "41mDSrr3FfBrNQC9SRxiDyVxXZ98bYiDUhAh9uko6hJuCAZDXigBitHSoNgYQ372ejcw3z3ftDwnJjpaify4qNho",
  "key41": "jo36sSzNftmGWtLYEtV6rMZNUzJaTe1Tq84cqkPT38ahxG1ds2nkhKuNqv46frpBJy6KxnXPGXSrSJKLQ3fK7fV",
  "key42": "3S1SsR3MiVgT86rPwG76tbsNUfwjHtRYSeFBB3KV8XXHK81A2HRXE4RkdYzxBM5DqX8S43qDKkPZqSSahM7aG4D4",
  "key43": "26gqxN8df1gKCVvASPrJ49DviqQ4vgrvjzw39akNtNk7L98Lupr5vWXpT9ZwsQkz4sAgGmN3Bn6nca3vSkskSUSq",
  "key44": "3RuuDdZi1qVDk27u6B3Xac7u31ZCr8hP68bDdHaiUK9SDxFK8uf5ANZE9fGgKYB2pVBw6AxRgsSUxv2mMypqiLNL",
  "key45": "AGAJYHKgv3eBu2NbuCwc1c6k6xrQt27hwQrv9K4j4wqVHw8sf9czfvuetTyGYnc49pamz6urq6L5Zrhq5Pj8b7L",
  "key46": "3DN9ck8YYd7BmRMKWF6eDzd7VVZvi71nyZ2bgqdM1feYBoZhKQ62cwqHWsCg87cc8QJiVTVH4V22bc2BdVP5NQav",
  "key47": "mq2C6NdJ4x8noEKJC8fprVbX9FKr59ygcA5eG4YETHoQDwR19Ma9i3QQrYCLMsC9bDRngbXwj8sdJjdPWYvyuhP",
  "key48": "5E7hjk6AAy4bzuZJHdgZYpZ7PQHtukzJwgF2h64k3s6DSCKYGcXZWNaJoDS8mocD1GhvoDsQCKZziRGW4psNc9Vh"
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
