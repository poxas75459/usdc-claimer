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
    "55FpPGxG7zNF2id17VjHhVqwNRKH84wqeMzH7bhbeo2YiwJMSBEMemvGyic5DfcJuieaRaEmEycC41PB1Wd7LNC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Ccb9ExFzRf6ZVnXwSB868ejPxjvYZetqFBd7gqgsWvcNSZcvfLMxRCMLHeu6ukERfLP8jdWihDbJNaKcTZc7BB",
  "key1": "3KAqBkZu5WnQ1KjN8Ai7V1ggeVGyFkW94TVC4ti252DvXLf8GYRe5cun5hQ89nTVsS6nqdneX1R7SAA7e6gCSsdj",
  "key2": "n1Rm4eSYHgeRvx234Sa7eqkPUY8wMqAbijVbbR5tH8chdHpxqUmEkoZRm4yW4D9JWWTiNmXjEyLBJPxtiqwfgVi",
  "key3": "2x6RvcfsoHzFRttUkBa1oGjGkWhneofRDJkRsSYFGN8Bh3aj7mYxvqsDL6wdSKZNtKH5bL3Vw1ofnntHah9uz99W",
  "key4": "5oUDijSPi7jYJmHiW761GnzRPhTbUnBnAXr4HTXddTinJ1C1QXDqeGCexeT26jpjXDDTzbzr4Et4z8TRnDveX5MM",
  "key5": "3K1TZNzHKgEvBTouvBk5vUZdKV9yop6QzxJzLbg3253j1RGzX7j6y486rPKaVCKTnRpYRY7W8KctQvcQD28hWQXW",
  "key6": "43ubpE7EEtcu7oTufNXsCzGcE8PfKNSyBLf5it83zYCKVi3evGqsqgMaPHBNmzqjST3RrBc3gbaom6oHFRrwQJxS",
  "key7": "4ks8perkzaLdrHXx6GP5VquQzS3wLj84ZjrXaa9DeW3zfLF5Hod6Q2PGj9H3be7UtVmRfx5F4s4sp8NWTvpRAD7Q",
  "key8": "5mpxDNWZE3HRSrNdrNLWdhcUt1NjCbQ5HdcuBmYaorf9VWY4GcPYG6VTrxBeZgzCJUQedXSaC5Ty1JuoRDc5HCys",
  "key9": "2enSipZu5sz1AibezVKyARrt8DsjPv6waWqC68VAC8sffWGsvGouq3U2H1HaW3J1MhfqxqBVXbAgZpGBmVq4hn4K",
  "key10": "2j6eESSPg33GnbMUAmLsWLo6EQLYcaXHU9qLYgfueA3v9UPGopAbbLUHRZDKwxByqHdk7aA9MiaBuS7yM9Z42bir",
  "key11": "4fHYcna15V1ZadsiYogd5MR6J4rMVT1HRGwS5GhrQHFKEjEkXidm7agmAWunyQiSaBvmFcbHpNiX9VrRka9emyg9",
  "key12": "wofkLBrPyN8hsxBkpYpg3cQNntNjiKvPL4J735fsXVg8iiNWGsLRScHi7cQ9WeNamykiDADLC4jkKJ684dGd9Ts",
  "key13": "3f6wBaEEP8B2K8jxqSeSRC6viic9o2KnHWqxHxfK5w9mgdXSS92geeT1QNx7hU9H6ksaL7YdB4RbGerarTTXkxUJ",
  "key14": "3Fs7trZP4ASWkTyyEHtzuAhCJReMoaDewjLzG9Hvq6TPF9jA8CUA2jJcp2UnXPCN6UKJSTsnBiZus6GjLZH4L3uq",
  "key15": "4i1MiH7sXjP1VjrXBBsVBHRrjzPdLEminFjisWCcRZmkJaFE2H2Qyowkkf3hCwUJ6zYBH5wF5akQDkeB4fqEFwmY",
  "key16": "4DhqdyZ278gdyrhFA2n8VYC4XxxqEqApNU4duuTQ9ggFJ8h6JZJUN1wqmTo19P1vdzJtAswTpTiT2yVAZbniCxz2",
  "key17": "26eywFd2SPPMd65LH65otvx7fvdYX4BwhPKTCNYEWHSDo1n6qJokUUtFn2qQbWNtfuTtfp8Uy2kRfwwsC8pGmeDs",
  "key18": "2wZ9NM2X6e6GXkBFTYkvvpJ3KiXZPLjim2WKUWbpeN16NCbw9cewBso7mM7Mzgi3gJBqSJYX3Dx6XQJvJZn1YYvt",
  "key19": "4tUk4Vr5Z2xmwAU8QCfrGFBtJCdQsj4vLWRUfv2S8DzgTgHjqsH6etWaSdD79WyGzowC26r9ZqonodpcrxHyH51q",
  "key20": "2xduKK4iWj1DHRLQ6RkaGokQXdCoV1PqrpgN1GmX293M6xtNZs4bCotyKvDSM9QHjZJEs9VimZw1Jb8LVAwXdKHB",
  "key21": "5RnrVFffvVCzXwvKpA6zQ5MSQ4TMmvbZhAtmqnr8J6xc9hExYLBz6NASzezzncDFJApBJND1a3DWSoLHPryNqNVf",
  "key22": "4mSmkBcv5qVDKPzm2Zfpm1ZRqothdsvLqvpEqj2d8aRj6BFGso6RgSw1sxTrLpXLmccNwxtjbDD54p4cyHhkw3Zf",
  "key23": "28o9HownKqvxFAEwhTUiwXouiLfcFpmWbHGDFJiUiPRbe5BH6HjEnZDUsZvZ1hWVYZsNoDHax41gu5gzFzLhuEG5",
  "key24": "FbbbTrKvhEynnBw7Jv4kf9LgY36BQaL5wK6nLCMpsZjDJQFAdms2bW9Sj3ZWWMBMN8Lcg8rzxLLUkuC1bt3o5n5",
  "key25": "2ZejyYc6gdHTgnDpqfscMF7iPbDZcasVU5edxiSeSxas6EKU3V2tkpSbhuZ25JJHtNY53AyHuLmY4G84RE3QykCh",
  "key26": "5UfDhEDaNGZLSbPWD6RgUygi7W7FyrVNQ1kmuACuRrSLsSQDc4bQk1j6KtAi7RVLLa564T2aLWuRioJDAwX7PxqC",
  "key27": "4Kq39WUWWBLebjLrvANUGLt9ijqAtByR514sF9FiKi7aqriD98h4cke7kCjhpuaUCpdzHoYeso5g6pAbJVDsctA7",
  "key28": "4R47fqxkvviG44zmJSbnVbzfbFKB5iQQqLDJ7vrnx1MMVWwEnCZ7Eqv66736xnTF8xHG6aRm3WHR7whMm668wnej",
  "key29": "2kE2P88C4wkjPn5afXESS4aukmQLX15vu5wQxW3M6VMEnPKcnVWPHU6NVimh8eLogF3bPt4SXMnFWXGVgqHEbNYH",
  "key30": "3W8mfNFMztmdrpjs8R8Ui9LYrHg1qaqGii2xyD1FNfVP4YzDz6QW5a3RiohYEDiWg5uhXZvZaahWC7dTeni98DDZ",
  "key31": "59X86QLaEMAELNJA8zhzUtF3js5ukDPhwN1D2xGYvCMhU3AhHkUpaKMRsWtLdEfMy7GHK7xo5hLk5L13TovaEn2R",
  "key32": "5mG5arh4PpcXAxdz4tmYSUmRiguqWW4M78xaBdeYCFpUHcwYMn9x4d4DWGWtk392qCAjK5yv2HneFLULZMe2W7Pq",
  "key33": "6FGSnRrK9Hxq5BUwGXbdSC48mjrkuCM3u1pFYxZg1HEDvqrsnmTNVML6ehWGSG7ZR3ep5mZh69wzBrt1ZwP1hCc",
  "key34": "3KgaVPhe6AjecY35Ke396KTS7CSwcmXeEbFtbu2h6EcuT8nAKQfr9ND9SWBFoJpmYU3gxv2u3XRrC4zkuejFZCkj",
  "key35": "5vRAKt8WtrwBjegP7Bkepz12MDu7gQQg1qKT1LQrKBMgLKKnMywSzKwH2CZ4F42tn8GNuwD1JUhjinbhXXy4x2XV",
  "key36": "4G8p2BT87ri84fP6PrBFGEu1NouRCYPRuhMFNw72UumX8skECcwZc71dujEt9zDLsvNBeXHoNETFwmpE9MePFqkS",
  "key37": "2Smpqys3mpaacffSPAqhHEKVmHYUGqhLrGJJCYo9Q6iSJdphc1Zsf6mwGSmpKii1EkiPWRdtxwx4DdPJzuDTCa9T",
  "key38": "5dEGkJisMKS4rjf5ZETC5ryZocHfRVddNc5gDeGFJTJyE8j6rV18tjBtTRtA5cA7ar81GfwJMiNTcUdUHt2xDAis",
  "key39": "3MphW8UikashQWwoKVKvBowmoJ3iKWW4mt21RyyPnLFtVMNr41yAyjn8GEkjSWfPVjvkB5W9rBHv8A3Uoo1QFjbh",
  "key40": "2VNVFDmcK9Wn5gc1FrqYCah1wdKeSmpKQsXmCmcLz3NgTWN22RbgANC6Pgrw7aGTyBJZHYisGhSLvh2yjyCDHkqy",
  "key41": "669u6Sds7nmCaYFUXkMrg7Fk9Vbio2ydsDdXBhAMp2fWKKzuSckA51mCAgTG9Z3RgAxD5Sg9e86r3NPRJwaj5GZg"
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
