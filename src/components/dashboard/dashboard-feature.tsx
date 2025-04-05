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
    "4A6XVWm8oBU5StLYVknCzMnrNYRR5S8sik1361jtJ669mnnCn79dPNTg12gSpmadEsobwHo8HtuUci7EZuhGkZYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j6TKXzM4sCfAoCVYnAxzEqnqNp5FuA4ZpDtPfpp5TXmV7S1uqx2fu8k4baRfcTWHtWh3V5gGvJoqXqSHrJH3gQt",
  "key1": "28bGHeJ95ArRbnRsJzQqRoCHNPKkaTVt3CPhxf27oejWQQHA5oZjXsoDKJMhGnwGsbsb3Q5oBCbbWLRRafniVjtf",
  "key2": "3gAbwo5z8qmuqaoqnsRvcKQYF3NMeDkDe2TAyHbqrRWMjD87yRRinnPASD9QtPp9gAjqPfrvyjheMToLj7qYnqeT",
  "key3": "3GrbfdKk9f6XN7ErVHGqoe91nm2e7yRZQkxpxbQnpDwsF2fkjJ7QPhC2DmukekXFBAUNqNj4PKbwqUEppAsfqKv6",
  "key4": "iWtE3FkDiLegKgx1BfKwYwwcyavNk6yte1NMEYPXrPmqveYUg5mtyPXJszGzTq2oosUyBeBUdHMb8n8zpNVVR6k",
  "key5": "4ThsqejF6Qf2xVRrG7Pn8vVrVtKNZagtKa2TMnjP8dSEY3QT39sMWGYMQEcZovQ8pVLCxsxkX5HUCuy9XqEfeN4H",
  "key6": "3x51mhToU5NPpF1pccCoTVZ7zAsZy6kkg3U2f2YWxPQuUPGtmGfv7sQ8jZaDKEuX5wQGzKVX9UnmwVa1vuk7NWKa",
  "key7": "2rgaKU62bjRYVFZgWek8e3nbx1im9xCzm6Mhdzg3DjnPZEWTofwjyMBzmphwwgTkBT6BgnHRfeqnrRh9Tn2WAfzP",
  "key8": "4XBNhveeZaKGY5GGmZ7Ufah7Dh28QZn2D2X6MBcM7hiEeA1PrQ8QUyHeD9TCPUQLzAERYsJE333YwxomNKJ9DV6e",
  "key9": "3Tp8cZocRbY8bdaXZoyFPJgnLVSYsthq399YrWW73769JSNkTHX8VUTAFd12HYHPMShoar3uzMKAdubDhvKEXuaJ",
  "key10": "2RZGjPqE2BzJqTgD378biv9AKdp5itM8uhyEcyfKvqbLuGorN6u21JjMagGmYG484D5nMQNgXK2eq6b6e9VAZeoS",
  "key11": "5NSyWw8hNct5MbpvDstp4NrWnPznHnCdHZ7nbWN4JCpLjTCn7zCnbjd8DhU9Vt9A3XEA4VgpEu4pAq1pcbMvjYqN",
  "key12": "3Vc1y1jSizsjakS73WStwmb8sK623TfpmtadpLmBtGu3VQG4kU3KzwmYD4Gfrc763BSVtgGU3qmSGNXdEX3GWbdX",
  "key13": "4nKKR9sKfixSygtFE4idZ5sxAvgcFQ9LyXCqm4pCCMR7YaEWxQo7rUigHhVzi3ysTiEUB5iGQDsFGePmpTZHt2TM",
  "key14": "2N4HkV3KmBZCHdWqy1SnFgzd12ea278t438C9hqjts3Uv85GvzDWXk35DMGNeQ9RtwRsm5VQfrNX3rCVq1D7XwTa",
  "key15": "2E3EKKPTddks3nmeMcbV78UKNAVSNz214UGrdjDqV8FXhA19F3eTVtEVNULbLaAMLrgW92tJ6E3na9pdk8qhPQyV",
  "key16": "43EUVe7r3q8gbARY5D9a8EdAnf5TzWJZouJZxiS1c981ts6RfmYkJe1Q9fm4kaJrNNYJibrV1s6GrMXh9QWe9A9R",
  "key17": "5p6Raj9QW75rxqBL7ftFkhC3bQyYd4x3rkirZqUSUhe2cyFPrao31ZxVySx3mNtTQV5AWu9524x26799Gcd3mJor",
  "key18": "4s2vMB2kpxEXXq2pnPokiB5vCfe1su8oLUSa7M8tCb7c4SSaqAXPmKJwAC3KVeAJKiQwT7WrBBizDHq8tkj25gSU",
  "key19": "3JA3Qk7B5VfXkgmhuSwbbVHWSe9mcW2iPx2jtQvrtigQvqGevQLhWyfHvx4cuBqk2gxByqPrKpoT9eoxLNFQYRZa",
  "key20": "58ZNjSDoGvYYbzCoGmF8JS73gAJrJJDFqcrvBqftfwzS2tjV5Jn1yqoWmPa7D4kSEE1rrBK8kc3kCy6gTmtC3F2g",
  "key21": "4kv68u5KNerk82jVu9zX5EmcELpo7SZcQv68Mn8wh1vyhgVFBYeX1zPgx84vvfVCByLu2YqwmH9vv9MEFoDH2nH4",
  "key22": "4siTG61KqUtz9P7tXSWX7ywMWvsLmx9GEpZEmavXv6gCWnB3DdFg4RzdwnFVZ9Q49Z8jvmkZpWSLj1syznG2HD7u",
  "key23": "2MU7VwYf3XrNGSD3z8nxtx2vTL1AyRinpiaUEMFFwkxdiLj5bCT9zZeWsTBLz7uPgo4uGREqS4ipXFPyQVse3qyA",
  "key24": "2aAwHcEWFJyXW6ZF3zo9Znp61TrFVaj9bwkL3csEGUUyL9ocRsUDjWmqgABeJxfkCg3ufYKJmAQw7SaMLj2qw62u",
  "key25": "5CmFckcnGGemT5ragRe17D1UJXGjDqtknyXzkNmaREzuVxeAtvCQ9vapxy6A34dkx2V23HJPEgx5a7rkGJRS1rnH",
  "key26": "27XKk5mCs7x1uPmA7HmtwJgnG8UUp33QciUF5EDfHDxBmQtnX8RPdTys11WCBLgEAMAj9SAYHwd2rJ4NQqHYWaSg",
  "key27": "5V7h9rUQA7dZvcWtMVwLUZTfyHU1t91SMccXEWFEgKi1XW2HuUtdieGwCVufFGKGG2QstLFPe6UbicSSbvKowdbM",
  "key28": "49C9HXnHzM5cXoNbS7JD3FQaoPrwHnJtyVgmNnRoihtizoJ1syw3Xwj8wLj1jLwfF1Bi4JtsW5PAJGqSK4tqYrSQ",
  "key29": "5jcahdecFn6A88EsRX9AoyZcMNmS2VTa3e5SkgRignNCFHGmzi9KhFquHPD67XtM3h7iqEsLPmUQ1FvroFzjcf6K",
  "key30": "4VtT3fFRCkdkZM7nyx31WMNyJbkUpvbV4jvQfNCyKDH12ZqckZ3HH38fyyLuTyWVdP8VPkmYafU23ARrocMhAiJm",
  "key31": "4Emc8u2fBuf9veU1VJVb6TgLfSnF9o98g4qdukpP2Ry71A6RSP6eNJmWkLaijUBpK33aXfJHqC2qp4jJD4iHr6Cq",
  "key32": "39NrLSPB17fEqTvNXJL21MaJLtJa3UREvg9YBd1D72E1L5joErvhTpA4sLASkpPV2bY2Nis7LvB42TRWckieWbA6",
  "key33": "bVxKyM4QeXZzQaRynYA9L1RNJgTURrsabDBsCvtZHqgVPf7U2BfVe24WPUgVbdzfAwdBQ1ZJFaDDLe7JCJZp4rd",
  "key34": "4FWFQefj8pKXXjuj8u3LjX6tYBaXn7XJ22KT9zR4sGgTqJ9dLmL1oCMg44X1X1ngyM5Kzy4bSCs5YBnS6VeXUk1",
  "key35": "5uSxbj7oBFbmotRmzLrzi8ns3Q4kRxbdnbx5XydpjEzM1k1a2uPsD9VAKUsXQ6EPTDgDJGU5UFjtqoboZ66NEcrd",
  "key36": "2SkseHDpXQMJjp1DwjhhrXgooWA1NiAumAFg1jhFuXdxySS61x5NHJhB98VMB8YrtqdfhgjKLEoSP3UgYdWvmE5g",
  "key37": "429wEZ8WWiNza3pHgaJPtRoDbiYxo1vBoo31fibvR2HhLCHCDtLcMQniP6yFUwbkxnkdpGVTeeXTXSLeWMxhQQg4",
  "key38": "74PWEYjimXEEpMRGzARHKjFrXPnmhhZvmVsKbrfhoierLgRBxMFK9VKR85B15QfypTR7yTniMCBfRVgSSXRdS8A",
  "key39": "4M5E3uWBnU28qqWfwLT3Tq3Lsy9rYp7MPZJKbwcJhgtASifumRV5kc6g69iC6jAycYomvVEaXE8JumMaYKxEkNLA",
  "key40": "5vxmLnyWxUuPXHMJ2fMWqw3eKRPypTzJfe6C6m9b8cYxRpVyZ7JxpqbJubVaEZWccNUMgTpiHRaZFocPnJiyTff2",
  "key41": "3RuDaqNk3saYkax9pp8pcsT6aUJuMb3PJrsy57DWXfiD8s6pUvLajeCzYGKBsgsMmB69j5jDhDVBfccpBn7wgXu9"
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
