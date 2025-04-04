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
    "1ENMzrn7nU4trfetYvsNoc8hvL69GyhDqKPM3D21yVyLhhCWwx4ZSnnGiPnkd1oMxYcZ3yk174RcwHd95zkBT9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cJAnbxNujRfMd6Y57HhaHT3V8HxCEhqhJUhREiPuTiKtk5gxwBLuaYPFtyXxKZ49xF8nZv1Tyaz3rW2B8z3SRzg",
  "key1": "5GJqyZQeLNBdQRJoRns4zZhT9LdUaPTCroMXz68P9S6pfLnncmNCfTf5Nttrd2TLHNkJ2CexF3ZS4AzEmgGjSbx8",
  "key2": "3GAXozuSTZf3vLJ54ADdci9vD1Ex3SkqpFGiXc7gQ7JBESojWsGoxvna21a7F58WnbaixrhhtikAvGEkccL6XPrF",
  "key3": "5tvsXGWv96Sn5gAQV9xi6xMoYTRVA5L1bKruiZWyEV1jCTw9W2e4A7bYq5fv3PLrw7KiAbTiB4jzUf2zGNbTL42J",
  "key4": "3f1aruDTu1opApnXYeX4voM2KQxPZfNDng57NeEFv62PhEyjggLNweKZiEXVjYWXT2ZdgNx7gjHc7x9XNKEDJpCd",
  "key5": "5Eo5UXU7nxnTk9By83qcoyTjQSyB1MRW8dpH6MNhMuikL8MAEqH1CQuUmLzzDcWPnu8SXsFHKb4aWz7jALZ5xgpa",
  "key6": "5rnGefsFVTAvP2ztKvXHuUoLqP9gH17AEmbo9LVmehyidBik4RUYLpJMBCJLwpKFSAB9JRgyYfj8ohr2XFdzvMDr",
  "key7": "SKGjZH6mVwonfukwh8XXuFH829DktcvVGaMcz2mNzzPBRYxF8N81uUhjWA7JqsxuHBxx9k5W8CdF8Fgnqd5kZ39",
  "key8": "4sGs7E2eNs8erTXCGG61BTGHJvAWNwdyvnzAKEu1j3aLwgj7HEznyQ7vaEPiNcPCWH7E7kJNNMsiYdf7GW1piPJH",
  "key9": "335FgYXL6JVJvYcr5Wb5x6dByqWiumX6k22963ZtMUV8zTaCm73H4LrRugbFz2dxV5JNGZT92M8ARrfNrWeaY3K6",
  "key10": "43rbz3DA3PzpxqEagRz61AaPZ5tqvdG3rPx6nMRKwFj5YAfQkoQdxe4fabnBmkb7gwLivZWpBBmJWDAxiVAvuF8C",
  "key11": "5v1HAXotqwN5EdrK42T3uZrw15cba3yPcQLHbwVM9fEFGVy7z1duPSmhtUXEDnW5maweHy1iSBRvKKZtsM9isNEd",
  "key12": "5snTWovpxuaeYfGxF3oyATJ3urLWxFJYKZkKwjv6hVpKkGxFWLKvfQug2f1TsNz5MkeaEGphFuzPeRpTbU8w6Dwo",
  "key13": "5CjHVbYtB7BZANJ7nYc8UMVhWVqzujYjmdRu7yXfM4EbBbZ7nH1aWXCq3xjXu99RyXbYWttQvwXXpjmhg6kAsu8w",
  "key14": "robewo5FWG8eUjQM7cAoB6sytCZNMTswTvTYsNd6P7ZCxHoqm7gsXVcTSvyUqdtLeh8E7k3bofJKAg9ZchaGALa",
  "key15": "4yYMhdnDMZXmapyWAjUL3BZHakMmRKdgeoS4NjSHt2hPSqBHQZjMCepFCjPXmttkNgZ4ripRtW6W2itbpvshxfkv",
  "key16": "5fdMFS9Dgy8hB9vSmVfkqNp2zKVvwxqL85wogBo4EvenXSeLbjuqKWCJ1uCVnYu6p7bBSed2cPe4x8DqyZPkjMcn",
  "key17": "3HCf51A1cq5ySfr3wF5mthTJcP1HoCHb2NXLTPrCWeyYXFaj6wu12RWFPk96boX6PC43p5ZP1PA2syGCd5D2JH77",
  "key18": "iAHWJPhaqmqivJkPkcSBBBtHm4zbJSgQ6qARopMrJmzY7SPUXDBrGDhysLD1GZqwTVwjrrt4KWEQqU5FCuiiRiJ",
  "key19": "5cprSAYgixYb57WhAN9gjc4VcAm2uLY8PdurPWGqbGNaCadBL5vAg7wzvdc1ginBS9cAR3xN4nCNE2BfqPAC74z2",
  "key20": "5H4iTUk6ieaeG2tX2tQCBviaYELXNnFoR4ecwnogtRMSS8YfnFY54aDDp6zZcc7wasqC31rDwyzWVf7rQttKAdHq",
  "key21": "2PprUEwJXBi4KMdzKVGH8MDDsJF4kw7Map5vnzr3U3KpV1EAsh5N3pifYrvNdY6GJx4KfwVmaAC6bkXnDCqsVPch",
  "key22": "42sC9Wsb41bSDRMqQL7xSm5t9fYAC7xgbMQAkVmJeNUBx8ty4JL1evuR5YP3LmpmjD7kGi1r5t5FyBDTMg9kxrjc",
  "key23": "4QVH5fPrWrtetWhf2BsLummb7Ag7DwmRV74uzYHQFE6QaierH52TP6ekZ16wr93eKGnZ3qVAvmdCDAgvdXFwvfDF",
  "key24": "r7rCHTXQBpo6uUELxYSGC5B72XvHcgUR7RYPJv3Gnyh8K9SqUKuDyo4bJEQGshe23JQe7xyWy5PZFkgUb8eru6d",
  "key25": "335di4ruPmY7zRmMDnQeTHSZaV16UnCqKsoDRSwGEGTmH7DHupnLYv2rNJ8BNwNPZLGD8Y6QsvDKWuFHoCBz6Cnu",
  "key26": "5ESSpEq6kYhLk89SeT2HNmLo8L5fTJnKRysM5mnCTjAPwk1nGH6T8dGCmutnP6LeZYFhik6auTz2F8vBDQd6bHV1",
  "key27": "26cXwg7pkVyFPuL4dqnxED9jwnJ9W8q3tJumSJhZDTWQRWoX8ZwoaQ5xME5a6JcTRrP5FhrgfqspWjE6DegqUduz",
  "key28": "5DCg1tKVszTAGXSL8rC7szJ8ZA8wx1c8cweWBkSGuNEsqtZbhBzTBVioUxcbiDQPqzdxnEmuw2PoW8cYuanzezk2",
  "key29": "4iQZVWWeGjuJWHzLncRyGafGJcCQSRhvgZQjzmkqmLKiu4jcJmXykXGNDnA6WaSy9E4BdTzVc882CkVGmJAaxnxt",
  "key30": "3r2F9XvekAYFgWxvfuAuq4QHcgoitzEtqPi13dn33s2beg8TVRemH5VeSUaMwqBytTUPYn8KVSGpQY5eajqp5cdy"
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
