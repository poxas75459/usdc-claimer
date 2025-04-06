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
    "2otogCp1ggqLZrm2aWSRYw8jghmSD7rZfL1FUJPv3Z3GaRfJh8WBs2njuHAWj4P3bKbWLQpZgD5woQTHYicRQtQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EJiBimQY1Tcqh8YYrbSfJPYwtPMFwQHDb5qb2W5chNocJBHwBsuXEnnah2wjP9kTymWtDb6f6MUJFCFXHw39ck2",
  "key1": "2fDMJ9yH6pqWq5BYnpUGnGYUWkwjbCKY2MmLQgnR6GAJHB84ep3MKVRvL3CSSyPuUBmY9hdr76G6fhG7jKi7zgzt",
  "key2": "SnRx1Gd3AXcWWLfRaZ1phV6sJMK6xBiHNtUxXg5zMceHZJFZxnv5F5hdK7ikU2maVdTYMqNauSbtvvuPQWCkG1t",
  "key3": "4zb9mrFkiUNwoLsY6KE4sAr3NgCfdiCgT6Hss12CKmGBnjQaDDBEyA6LoR4o4WYBPWqjyqZmkxyxvt19jwtd8PKo",
  "key4": "28GrNvsd5rsAWXH7LxKWSKsbF9Q41CkWh33BVL1XyVRgYrkEYAY6ReBrhcoLr8NXKTVTxxrxqVBpFC6SEmDgHuj1",
  "key5": "3NCbrDRjiAPZvPTdsQDgmDWFezKTpEQno7CoT6G4zi5LyeUsmJfsKMUdQ49DNdfdPnqshnVRMU8x8Dr4tXidDvHc",
  "key6": "39uDJJZiHCeykCcQ1TXfDFfPXiCgyHukkELLkdbgrQKCdxR1UXVpKvcEgoVZqLrNjaS3aDFt3UtgAayU6afFHEU2",
  "key7": "5bTr7mXM2mDCarZmuKv4Cd7dCJ4EtnLvvhZrP3CSFxyHGnacWdrpniUHc5z8t2TMKE5f6rbrqYT9TYD4fgWwXN6M",
  "key8": "5nSmkuGHeY2bGAPce7XrJbLLKC2n5iieJ8vq3H8KZ71Dv9vgfYVFkvQRn9RdNWtKpHKv98jRF1FKymYyVQR16CMf",
  "key9": "2D1siWdjkWuN7J2SsMHQVfkNpjTpZnaqsN1EpraXrUgLEMFa1F4PUh313f8HvGbRSVtsUiJAm2q5eXC1m5MK6KFJ",
  "key10": "Uqnpc634b8VDqfCXsg4Dg3AE3BCvP8KtyHBpoQ8rCCwaUjn4Apu8YhqNmzPcLTyu7NBJN91exW8DxeNz1SuwCwm",
  "key11": "2cHzgCVVaoHfSt9pnPXtJ4sb949ArERvdHXwNe6YakKykZMHhLj3uX5ro9GhTudzSnyxgnonR7jUUPbisFdCghwW",
  "key12": "gsNe9gtHzDVR5cEsC1NRc6eyJbHaQcoaNFE2XHnckNTXU4FokhsrgZ6hhV7fSCBqmJzEEjuGACAbTbMYSy7fEqH",
  "key13": "2tFyd93yBi8MA8kvj3GTQ4Ny2cG6cfg7W2CSP53YU4wKcrooWRD9ovkT3JmKoPrwDCa71CDpqNWzDwfpQ3aUE4Fo",
  "key14": "2h5TKmfC4o4J6hPpxPQDgNJ1vMvAc5Vj5s8Jpvh7ht8PA31bFiA9KFoMPhoBvQxEzmRH4mvuyTb73Zt6FcQExyyJ",
  "key15": "4BWBSo1C6LGzQDxz8fd1ojbN971T6yfRrBmgxoeoKQGHyQqQbbRExRLZFtoYFMrpbvWNQtunQfWucvkhY6PAHtbe",
  "key16": "3A2FUypg6y3SZEPpHd1WVr8mhJz4cupDnYFn72aGdpEbfEidvCjRWe11nYzkTRb6PTPRjVfF18i9y9Ytn8pUqt5V",
  "key17": "m1NjFJdib1DjXNNu23JFGk4Hhq43hN1aTnfUHqBFGgb1NCtFCVmLHxT8pX29YehaZQQ24SAs9NeCcjVjihanh8t",
  "key18": "NkGg6ik6JHdyasFdgJ71CN8SasEBytaJkL8HUCUPQNCpRSpz6DmmGWZg59VymuZe9v5jyThH6t8gTkoaz42ybN1",
  "key19": "4Ci9bo1DmiKV4CxT74RF65FWAMxX9t9ESuqVKxpFTusXMuneT2PoYpo7CJSzL9ap9impRtQohz8Y7r3QSPVXWu3Y",
  "key20": "2puZPuaz567gWC8DF3cupN9AfTxoBkZP3XwD4hgh68gLmhhdLiDY6C5VGRG7VERS6poZrpp53ot2gFJr6A7LypBe",
  "key21": "3sah5i8kg5p5UoFXiGrD7QGaebyyupWk5x6454YaDto91rT9PpYf9V8sWqw4GaZ9ViCpfVC5QtNYefu1bEHHpwgi",
  "key22": "3mYPfKsQHr6uURiHRis46fUp7W6wmp6rTQNU9Pmq5mrvPZWjxtFq3994cTzYR1rakRxBrN7j66VCXiQeEUpqgrHU",
  "key23": "xjQVJWx5pdM3BXBFjW2g2kHjr6KU3gjWWpgNbQR3JPstsYQHJzASZnJjSdK1ryFPizA2BsVppmK6oANr8DvRnjy",
  "key24": "4VBg8UYJuhVPKuK32phCrxrdondeMC1oQpqSELmd4dboG2MvC7znAhShuiz9wthGYBQt1n88ifkwoaRpuP9gQknn",
  "key25": "5qRqLgyJnaDrvzfgauhLS1dHYJFN2tzMqBn7o7CyRWjAdEYoR5PT5x4WttZmQMU5wAGvPom88YCwFf2Txt5ZAvUA",
  "key26": "4iEvmT9nkLxaVA9w4raCsDP7it1cFKQjVasnfbHFEBQKuF39ygpF5rkvNNax175uuczZRba1GAJtQokzRjnUh5Hw",
  "key27": "WPF979LLoHQDtjktWTpzADUJxxHsUjpuHSJ4pq4kQHx3hS6wZGtx3HFmW8eTyLYSbJ8Z8qssjVq2LnANkYixLQd",
  "key28": "4WcgnFf1S7qU88YscqrtcFamUo43PeTVAv5URB6V6fg8aAz7mEtE8msCV6danNQgWyuQAWm1XcJka6BwACn9ecJM",
  "key29": "jdWPp9ABSK85TtGv4X9v7eiakD4kX96vTxFzpYign5Mytu9RZFXeEqjXLKt2zW9YwmjpdPcA7eeksqq9DmYLma8",
  "key30": "5KucB8jezrkgpkddvtWXUTUSvkguDKYX82za467DkSkzbvdYhmpyrEsiwJs9TSufPKzGV8eTK8AXkaEJFR6Nz7oK",
  "key31": "eBfBBuim7twtT8vdzmmN3Z35qmBXXoyYMZEzAGqwfedoWX589zYVq4P7goFgxUgu5Snr2dKH9KEFeubL99fJu19",
  "key32": "5bWgYBCTyjSNo3YTVtcLmns13QY4QHvLU32H45iaAqrbUCLN2uj1qvZTFWmqfT35cMm2KrhH9ftmfNfkCPjsZwSm",
  "key33": "4Pq5dJjosezNnDNyzKx5WA4YSseaAuG1j1AqKYYdAH69Rk3E2gvwKBH5KqciEqFTUFM2F8WPRiiaEcbrnPfeHvsk",
  "key34": "dzP26gmSSGFeKfPtWh9fVjcqh5kGysHxc412mho3WrUNJ4jmcRAngUUaQqtgwqeMQWFnTvC3uBkEBsVEC2TU8m8",
  "key35": "VPBfCv7cHRUv4QUHu5FWUmnUx6zq3neo5xgssLbfySLSQp9peMmf91vmYKXyy8khKb5YnhnU2bP1sRnqDgFBYop",
  "key36": "2WCrGR8bfhiU9Bqj5nLTsH7Q2ixNPeyGKbdSPqgv1oTyCij1hLRXVqEVVKeqpvKseYEEVaM7fcyrnjiZ8bDeUxLP",
  "key37": "h6qpUSX6oqxJtYZnk2zYjibtuzfXasKbq7p69ugaU5bzyUztsCEcsCN1r2RQv2edVe7QKAZojEG3nBDdq2n28fg",
  "key38": "3Zmv9G1gsDVjSru1H5m9HqV6gdhhYUL4ThtNJmtEkULWj9tAMsHvRnc19pMapimAG5HMtqQhQHCpE9gLmwapuSci",
  "key39": "3MTchC74emw1vMxCwU4GjHL5pJibBmddm2SK2HAYEpbvf7MAjdLyKy7RfzT8PkAo65j6q1ZJa4uAP8yoPCgTNhqP",
  "key40": "3dLJ9s7ceGaGPt7YTe9gz28sHgNq8jUmuCePHYYYUABXMRwuc5qdvtYbotDkY38jhnd8WNTjacpF7kpkchnz96uL"
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
