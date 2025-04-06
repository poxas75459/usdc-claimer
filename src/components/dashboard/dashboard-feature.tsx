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
    "3umbiMxVw7cFUSV4y69DQ5xHqfBmxoLWh1vBSTXqWpsAxYc6WrSdRAcv1QxpatZqTJGnD6R6gnvCipdvqAmR9pfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iCN6jHLkX7bnrnwKLQrV6ncTJK74txRDZXGH1BDuGptZov9ouXbgBsyzahFosh2wZQU5M9XD1KX3vGD1uwe116R",
  "key1": "2gkrT2J5EStifxm7USiyJczvGzgGsKU4vtwYvEfqFeZxGUMaKT553ZjQpCZZMbkVEszZu6CQpKc2EFFCRMt9VxNK",
  "key2": "229nW7NoXb9aHAs7ocuoYCryrkkyt1zbHso7KMkpMAsPX7TugVZ6GKfDUrUXcyFS5hZEQK1Wo4fjD9LVfgXYnHhb",
  "key3": "3Fj9m84iw7uUHAXMnTzdGRuMDZo9bjJNimfQjFY81dmqxGkCCUGMT8rKkdEGuxRrHmRA3jvsP3G5hD8zazyVExtp",
  "key4": "Pkae33TnEJ8q6LQ1T3JuhAqC6gxdZxJTt819GZmaTsdJSduy1E5D6MpagidNuZb4JJJpwniLG8e2o792Epd5yrQ",
  "key5": "45ee1G1GaXmBKSuxZcpLsjVQdFuzyGmP4jbBfFEm9sJ8g1hiLSc42AoN7mzMeGSvtWDc4ioc4tdd9JWbekaPCKnz",
  "key6": "5UDLDHfJPW5VLgxyrzvLXdGHtfd83NinqAbhoZ3nv11XnAgKropwvuMQzH6LPC2J3uSrNZ2gnGQ7XKSVqfZMEQSK",
  "key7": "5d3jx5vFHQoSPz6rb6hP6NBgtwMAJB1DNwMBu8uNUmnMAk4oLyvYXKuP26D1dJtGUNHuJM4yvs8ZqxZi39WHQJN9",
  "key8": "4YZTxWvdtfRq4JxDTkvvfoqCvhcA6FVsXx6YuNECDYQ8Jkvn2cfH5XNKLKvFam7AmX4GNQDCQTUdArqmhE3skkUp",
  "key9": "5wt28cE32fDXuRtxqQKmRfyM6kJ7M5B3uPgtBf2wrftC5ZquJkE2xdTWEfe3EPM6j5BVF7q23n3DxWcAJELbsCmF",
  "key10": "2jrYE8oADNDVgLrpK4QLAUZHYedmYyh1GF5hZmsfb45fk8hdoKFj9extx5sGjHzbZNp5afnjYZ15q6BibMuT3KZE",
  "key11": "3K1ashvLQSAF4gvifaSnzMU7UHnqh5S2LJtWcRimZVKifiCBsAXLXvTcyLxfijziKrasjVGypZv2sahDYoE3kXyg",
  "key12": "5oWEaAbVZwPfyKhYZ5Ur9c9Jk3RJdMeTpMR2D7MUipLLE2caRTPCb8GvjKUj5Z4ff2rdiTFEt9znfnSch36HKnpH",
  "key13": "3HDGwSJRPoPRNsmeBdZvLRTezzuWzQ45YGCwUGJ28LjPTKsf4yqguoqMUbq3CMdFeF2qK44deoRAGuvCwJFL1oPx",
  "key14": "4h1K9Jrnh9ZG1VzwJ3csgKQ2fJRQifBJLCLzhyu2Gz2wwRfYkmuDLhZGVqopFuezy9shhGVUowHfpqL2PTrwM9rP",
  "key15": "2eAppGSfW6rxQHJeaHg9ghM1UCsUTTTatqoEn8DUzjsx9t7oWkhhpeyfhSAeGpQAhYvCKMcUsyrah11dyPKvt5ry",
  "key16": "4BFegb2hV5W9XVprPFK3J3WVS83cnEiVueBLuYd9zfvJ4fqS2p71PTSCYTr7AXwuBP3tuQVmA3hjZAA9tdeBJM9R",
  "key17": "xp6s2ZoqPTmimyxXEPk9C3vsG7GmPyY7nUSQLgkKCW2AKddbnq8NaBMu31EL59ov1QTcKjt1xNhm1FMQo9pn5xF",
  "key18": "32D1ZNRW5KnoTwNodoRbdND3jCthnV5BrZrq5gyvq3je4CbNWWePNbRzj338LEK8gP1boUYRAtJxoZJ6fSNtYP4w",
  "key19": "3UicoiLGKFb8snGgehL4kwyeZKhjYoZtm2QDxrEWYXH4Xf5kFcEfpsfGcdEkgC9n4j58LXV4Vr3sRWr1Hxvmqakw",
  "key20": "4tuWf6iDrhp569EgcUv6Zt6XyRWhVvMdfqVygYdyxxVM2NoTusYmSrZbzdmERQjqUMixP86pRLe1PSVrWB6iKvy1",
  "key21": "311AhkVdRpWs81bdEisu7awkrShDwcXKSZafEPWCukgiiwwvb4wZwEfQ1fAHaFf3GfaXa9mJzya8fb4Nb3acaJQS",
  "key22": "43picMqufpd3WpaT8VNiY8TLvXWqBv2yRkV8FMtyHZ5D6ZbPda2ZuAVc7LYdzaextvibYLKEnPjkPcKLMtU7Xaoy",
  "key23": "3LhAcwfQVfbKi5rwydsPSbSnWY9UncifqVyxnvUSJy2AdKvsPuTzv7F1PEEF6Pft8mFJzZT2ZrC2Coy8cp7n1fkr",
  "key24": "2b6fAHqotDTcxveF2x7mTimG5hzothPd3hxHxT52TjswK47xttrR9aE4VEqMEfHG9eZsnHkihfSbTH6G1ysp4bEx",
  "key25": "5mihM2dpaqd1HWcSwAymU1gE8pwcH4kchqcBYcP26kMEwMovDGkH1VzEdoLVJ8m3g1U9qQwUkpQs7tkWSiZCz1Hs",
  "key26": "nsmWihkw8asAwTZGv8ui4rQEFv4Azdnpr4NYPrMP7GPWCZc4ChiU5DtMzxYg74nESZDQsxyzepJ5G61LYswCw4n",
  "key27": "3WuB7PktkRUQZacnRpybJGjhKpLzmNucEdtSNWqh6jdKDGNinPXpzggFV3AxMBaDDiDhg5JJ9tVATKNtDDvY4xTW",
  "key28": "2GHdSizFGVJqsv2yHbbCrZzbgHKgsUjZiXqefvHp2N98TA5mkQ4Et4rCZLbDGZQKwJtY93ZLNn4X2iWPfroQF3Ny",
  "key29": "3umXUb3bbryKNr646gUn6VXT7LXivejzikqU2DZ5d1eHAML9JbWQpD2A49xvkC9vDtBDeqdn2ctPx5CiGcceRXEw",
  "key30": "29h7kYsroXmRw8E3Guu7nP8VwBJcBvuPeZgSL6VAcaZ49E8uk6SdwJKUwgkRcjTwN3aM8YU1XwJAooWBFSnPzB5c",
  "key31": "3DoLkD53W6EBj2muWZj1iLyt763jdbRUfzJD6m2W36BfUh5SwoYQZYSpfvZm1J1Vwmvve8v13AkTtVijzy5u6XvA"
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
