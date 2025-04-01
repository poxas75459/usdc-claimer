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
    "Jhg7cQVySRLXQ6MZNrJYi11swPsibgwbSTEPN5UjXV5FqBWmCeLRVVsAcx8ZNtndEPYfCKRwU17L6FKe5FBkNJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DdUWzYbn1Pyi9iTcoTGAbLHtG7PEu8sDBSVJcqVqb9J4qT3qrwy2d6yScGhngHqV1VTo31AtxzVybSABgYSAueM",
  "key1": "2P6dWAdbz12eWbjfj47u2sAoFdrRGtDYRsmG9zyDkSqneJSEFsDrTNkxnmbGAYhkCpdAohNYMmofKnRbB8P8vq5X",
  "key2": "32jwt6EZTim95fYJe72ZFwAiP424FjvwJ9D8NWegmLEMCVXgzP4schsH6RJrLw1FHnyGQLFkS5LK8uR98CGNc3jt",
  "key3": "4e7nqzVepSz8B1gSrJLtRw4YrdbzvHhvAeYdMAaECqGGgZFY8Ey3fqzQKtZXGtNoidY8NyHuoZb4XxajaZsYbbAz",
  "key4": "4jmrQLjnXiSrwm1bnDjgV2UkgRso1VwiMExvM372cBGhySfasKjQyAgrNEDECTptcmTtYY1H7vK9ZDEBBQLAD7Pg",
  "key5": "2dny58vYRhx1bdLqEGiA9FGbnDLcX2RMSrtvjQpgGsj8spagv5L8Hngo9pzhdDH997oBBYKt9Hk4cUqGGZ157Tmr",
  "key6": "64wsLRyLSdSzvYJHwRRHNunac5KqERfj7wBFAXtYyDePHfr31jtRzEb6UdVEvZ9g7QJ7ghPcsr1Pr75dttAJfa2Z",
  "key7": "3cf9BtTHz86dto27fH2mNfPbRcNSTYYfaryX3VyKrM7fd5p3C2yhg1rdr45Pe8N2QdzPbAMP2ShMmsY24T9DCn5a",
  "key8": "4CNnNnTn2c6N3CMGjdWXAHwupzL7aUf5VswXn7njsBD8EXmq74NDFqiXTWNF6yquUDZk3TFc5d3CDgWskkadq8sW",
  "key9": "3bWLjUeSSwnh6U5rJCzbvJeh5UPFxShahnAvoeeyvWmiyeGzjKggZM4J1YRzWw5Yq5FjzpBdgGvFei7qmhP2g8YW",
  "key10": "4J9nuLodMvncs46Tdi1ZV67Wd6bXnNXDcZrckPh1wVBLxXsGvfJ1h7iKghsw69DtA8CKkL9CzVuZfq8BSoKLUwYF",
  "key11": "3ivXodXDRLQ4vKJ2E7GN3XfSYqN5X9k1PXdRE2qR9AV6axF3nVfDvWLg4efGawMoKBiWMhBskY4KythzpeRL1z9c",
  "key12": "2tcqBgNpeUxF12Je7mLY3HYWi83oLn9tjfpCLFcF7ScHKVpzX1e5NYfxsUSLhArCXitvYf9NgsRqtnhvfRj3aF85",
  "key13": "zumerHEQbzigiC7RRXhthoVaZSdRnGvqvxn4QWWQUmMoxxzezTyoizRoeLDU3t6wzUXRukG3TLESdApT2w4MdxM",
  "key14": "4P9uj6sEBVjBDiNMH35z9sW8pfAZ1NM7ue9rCrpFt3sgrQMvzJePums5Cd5VVS6N1N5f1WtgGB7rK5zfaBKnWeJ1",
  "key15": "3WTqnuYx1b5vGy5AAKPF2g73BNUcUA8HECsf5sYv7Dg2gfBjmsib6w8e1CV9ehgBQUovdFMoTnytKQLySBgc8TDX",
  "key16": "2Pi5x9u3idmm31AuR5Y6fFDAG891rCVx2r275qrRRSxDaudD9gGhGvKnh2wrmqmz4TaWstGnxrygYf3xoBD9BDhs",
  "key17": "4wYR2qSRGUAMWc1ZJLEqmRip7gh5hw4Hem44JaeSBAmjgjbJpKVA2hEAgvprpQ69QuY1oqTHzrQPpgXWAdtaYEMX",
  "key18": "pjVcbPFEjvka87vPKaAWKbCMvHte4Q17aFMrrvXG8KGtHDhzGZYFtA17AQFwXD1SprwrGExCi3M1HELvTraTsXe",
  "key19": "5ARSZubZmdzdJ5kJ4gaHy9MK7evTz3BfjzeVez2N6gkgUJmtTqfJNWhRkaMsUFQn38iQ1XZwKksDn5qpkjKrzX5z",
  "key20": "2ttE67vrvPWqrXj2v3p8CVFH6y6YmpsEMZ8sQFr7Y4oSkGpoxeRS8ybihdh7apJuo789UgAqcAd7ZcVf47aju5VR",
  "key21": "3evyGdB7qWuLYPG9rP3RUgeWrCGdccx6uUUYo7qwn6H2gNqeHHxCnrfh5u1y4Z426THzpD9KcnmBRDatkx6EvGdt",
  "key22": "5sg82Dnuy1ACHcSTGdGewEjwqsbJJWzTcrwBeSXtLcjzqXjnBFj44Ky9G5yjcq4aJfNz4YmQHW33P7rXxGTau4Rh",
  "key23": "oj7rxR5Y5ZixXvFecopDtfE3Mr1CiAQcJ94kBRycB6K9AvDe8CY1SyATfS4a3NYGhwwLVH5HTavH8UzbwJTe3UR",
  "key24": "5neJT9Uw9PHJFLYvbjGicW7nXearNyPnVpjQdyyDqyd5LyCYtcjYjaVN8MwWgFfDxC11s58VEYbfUPZRb1R3PKm9",
  "key25": "2k333XKUjwZRbPGUW9En5LLQybFbKvxLv9Vh7Axw3Dfhk2WVa8hVmdx3f7QY5Fzt92T7aPnpvs8PjUmgG3UnpJK",
  "key26": "5rw8thMUxbgfzwZX9FrLF94a3r7LBWcsmTKf4YZ8uRuRFFebHfzRPN66yXj99t2WDVp4nrwR2pL3T3xETxqDx496",
  "key27": "EfKRYHmTM68jGURZPphb8p4UZGzcTPdygBGaBMsB78NN8UDWgXC9DGZaBSBPmyQU5F3Z7pcPNdz27To5G6rehmr",
  "key28": "3cqT7E8zaQRCy6d4jVXNNYuLH1U4Lwoqai6EqwANNYB1YmstWgpEqKPrMbDtP7zx3icZL9BvqsYHu9j3fqtVPBZJ",
  "key29": "4ALQMpRzfvWEQGTmQLjZTVzZ3t1wxcNaxqKPXHFXjgXk55b4T8P4Kdzunje2cGtYwAGCDHpDUvWhmJx1X4JWv4Wo",
  "key30": "3F53Ga4KdHjKrUyqWBrCCBv36STKXcipriPhaQwaYPRgc5PQ2jtExejWEiAPpDiLKUqgPNA486NnBKYzxG8FkMLk",
  "key31": "64SbKKDcxE9VMZY5Yig6fASJG9zpTxJe5KSeaEqAPDugV9HZaAe7JvHMocSQ3PkfABwYCVDmFZ2rWivDDjP5Wxy",
  "key32": "4izB7muczbiaP8yUW6a933bG3EggwurCpD6roJFahMFXNTC21MNLmm8m79gW2cjG6YCu2rgXuyKqRtJKk2mGSyNW",
  "key33": "5bdDKBzwbRX3xkEqWBqbkPVv1B4fQLYbHM1nRwSLA9GhX7UNMJKJdAerxJroDw9vZLd6JzJMtFj7gG5KqRhSvpm1",
  "key34": "4VCY53g3tPNqp99WKBCVwfPfGpvXSmuNvtVtohkcjjDX9TpupgDj98GzPTmqpw6fYwJi5wghmkpKE9LrVaKQYkhF",
  "key35": "4AYa2Ln9Szq4EiC4bKySEFJjCF5QLEGnXrHj9TZAoMmzbwLZRGxPZxu1aSML2RKQxro7xYqnkN28P8NbJrZMoZpg",
  "key36": "4cFYJWm9nsadQ5aEUtatuNnqNjjKLxYxypah6KazBPDgj5Q3GCJyEhLDF9BKQJKyMVP75rbPvrx8ZXhV5s72Ct2L",
  "key37": "244MJ2C4BU3427qsFteQ6AKToF75hn3heGheTEgQ7oXvYrGbzWpdiAGJHs3p9iNP63PvQ7eCjgVSXY1Y9yeLax1Q"
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
