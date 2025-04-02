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
    "5GjWfAvkxf3nYMNNkB4daWvDiUJJ7NhHFCzWPHk9SFKQc7huB5T4FEcL1ErMZT5XPjbL85SYDakXX7sUQxqaYBP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X12jPhxZKBb7hEYqca2gvrJye69u85gXvx62KjndvZWeeb6P6912EVcDEgA6XS7gcSjo9PGaTNZxRExYpTADnz6",
  "key1": "2ACjzkCfNFVvvdLiqoFFtFrjP1m9jEHcWS7gZhSs59Edg4NLp6vfJPHh1jMRhVbcCEfo6X7UECrAhPZLXP9YRSeB",
  "key2": "3gv8CB1yFF4gzjHbT7PV9YyL3Mvjh1akpnr1q4kY6vsBA1cZG8DK3vTrDFDMJVod6zQZkQErxEnhmb9htXLQxhVb",
  "key3": "4L472kypb48p1apWYXquz96XQkYDRGS5QDNNt6BoerWPGz1AQbrQQjUfPATFwhQYNEuS4eeuBevodfp2Ri6b4Rnn",
  "key4": "3TfYxJ9YUHMvcxjfRC2asajUUAUSZ3ZBVdhf93vKVADv3yb14ruVAF21DU1B8i5L3dNFrh2NAhqkT84psZTkAdnH",
  "key5": "5mFYBnrmHtYSgh3E8ccQkurRN44X62GxsNyjkLGxASBKqb7DVmz4iU4pSQviaVCFPW1mErzbfkqFpUx2oS3ufQpU",
  "key6": "3p3StYtQryJYwT2LaGQSXx1M44LTwwQUyFeQScFmj6LyCinAD4bYADgqyT9cbVijHPJSBmjGF3CUBy7EZNSdCvb2",
  "key7": "2fmYdntRLjTuZCWCFys715FhDmeqwjfPRkcQK3UjDaXSDzn9xs3DCB8BwnaGp6k3uQ6kFHhxrSifmmJGNC1CGipp",
  "key8": "NwfJN3Pv1Fb4zUaGsWSFzEUpqYU8MGuqb5g4wdymus9ReB58BTrrvxy6hzKMdt1MD7cMLGVk9C6sc3UvV3bnAmF",
  "key9": "xpVax2kjjKnYAZ8oHQ5sge7TfUeccyd6rff7SkWdgTqZAwMEKP4JehWxf33o2ZXyD4ZHzNZq2zY73prKyPAYwgW",
  "key10": "QTZpMayE5KLz1eKCsogChFi9zRyFkiKvDLWTszPvKehhqPSirMLfrF8xUS5Dh2Htrx318GCfUX1W7KbEf6LUAf6",
  "key11": "h2LJRS4Trqq8Zf1vfKgoaRjfz6dZWPMiF2kGRe9r6QfGvjBSv5t7AGsaHXfqS9xZsmkRnYJ3HbNmndoVjEYczeM",
  "key12": "575oYspWBm4nt69wAUtjLQLdRdneR7v6h4yA1bgDrGN5qwvULYQfBXuKiSswpV1tdHNRPMTQLUnbkNhF4sqAC2NA",
  "key13": "4wDwvd4ynC6bfN1LdcWnKpqNGK3CxV4Y7J7VwrUUDZtJwW22kgKPiBsV1NcUsVk1sepbX7G9sC5oQpBV7dJ9p1vW",
  "key14": "2Nb111GKkkfAXwcs9nbEwrGCdAv4ThneakGCjkjPJghKHb2YK9kdB8zJ76arpLbyJzfvTBr8BTZRT28x6JpcDHWK",
  "key15": "55jf2wv7RgH52qSA73fnckxv8pBWTNmSR1s2tWFxEVLzutM1USQjQXrUAGiBEfThmixuH54RgnnSSAajyze8Srvw",
  "key16": "4w4n23Apc64EGXaoTwVDNpkSxyGD4nytKg6dQWx9N4wRpU69CdpwKhtFwwm2VhMRkjJMKC8nHvN1AdCPuZgNR6WX",
  "key17": "28H9znuVSLsNDzt7BSFCN3Umbnd69xMt1WKgodY4ydTiz2MWj9yZDw7XVeBXxXKKaFSUTTQHsK2xucLXW6Y2dtqB",
  "key18": "bE7y1PDjpG3YvTvURVaky6z7V7EiXG6dokLGYnkwgXDda37VoxKMpH7yrhQaFSmufuymparyquZ8sufVYdTXYZk",
  "key19": "3mqZEAPdn34fWJwtRPdxTPY13MXoLBYWPvsuEtbM9K5tnZkfPPBsD85ztkUND9wMgoSnUrXhLLmvdbc4ocEvYRL4",
  "key20": "2P3AcWyo6QUmagVj4v2Wp85SWHUnBm8f1HCLwL1A6toyWzgSP7pophWkq6kKn3frSouexJAfpUZja5nYBrq3Pee",
  "key21": "62LDzDRyseCuymY39TEgXBVhpz8zMbAUeaDVPV8W1zXqvSJ6F8GgtG5hNAGURfvVELaVgR53aadMQ4kwzHav4bE8",
  "key22": "36UTN1cmWyhUwxVmjyYG68sWhUVNKQQzRR3CjsofTugmPo9YC61QFGZxWeKxFrrgZaMmUUxQfYQ4Hx7ACRaK7WeB",
  "key23": "5h5pCMSr1H3wsK9Jpg6y7CrgturxtvJZPL6tRiVQ646JRLKZ52eu9uqVRHa6Px1enYYXWsDaTw4NnFbagqAPnY8N",
  "key24": "4Xz9AQKygvmm4aMHYQF2uH2tt7WR2w34mpGY7esJhbSBWswhMAJDo88sNtgW9EgN7xNTUkBMhMpBT3NMGnqq4Euz",
  "key25": "4cSxr6hfWB1ffDmoQLudbb9yKEsXJMBmSgUTyaTTQTebLNxGdSUSZzqM2krd7ANsw2Rakc9GWuNae9fpZfabuQ4v",
  "key26": "FG3fYq8e9Nzh5siw9JWz39YR12r9uQeSghRVLbphzpjTH8oVc4pUK7qXkbiVKJFjiF8Kqpe6YK8VzTXF8KFnmpc",
  "key27": "5py6z62bwi6JUb3YiZQaM5rsgCXgwdp4MYwwiyYhpL5c6ZMHPLNUAGxYG2hBNuGZ3qo776bw34MDMJ6YqeUKnFk6",
  "key28": "hyTSmCXPaveyrCyJ2YqBSvL7tBwYhs8JznTeJBw6vxwpW5oBmV4vWv13RxjB2V2n4XNLTd3ikkZanSrLpzgzSqL",
  "key29": "67c4pQsdH2DBCxS7BexGf7MxMrP3inEhUQK5VdRHG7QWM612F6MDGLvWgbpyMM6mcEvPUJJMjpmvJV1JNpRFoykT",
  "key30": "mmGcijZxN9vkfUN1BJbku4AAwekxha32nGM9LDbLM62QbjzSsyjN7gDE16AGPzWK3odadGrebcqgSZRcTDTSDaL",
  "key31": "4YQWdmwyseWtEAGHoPy8JJJa8BjQCMfc8HN72DfUEd3u8Q3Gqay1BVJxSiEXyb54X9n2Z8SR4hCiWVVztFfkAKsj",
  "key32": "QXXbNrRgwt62eW8uw5Bf2XBKVUgTQHBQFuYhyzJE13nnCQnpvvMce14XxoBLR8oQ3mjszd8Rh2vKv4ZtzgdaZ1f",
  "key33": "5JHryK9rzgLZVwhzNNeaMWR8UVCcjrkZVXineKohFtPtgHHt6JYRjgiLugdFrBkLAWykoyH8qMBx8DEzhRDTVznw",
  "key34": "56pGATyF26zazayPB6pD8xuret1YHbz8WQD6Kn1t2pkrZdvgbNDtQ93o4Jttp3h45aJQnZiowUVyHHzviMXRMv9E",
  "key35": "fNFRCc2fCSpthaMR7Fw8x3oqaHkw41sN77KvFAzcN3hbPwWnmhAbeg7XVCWoqXVN11Da6B1NUX25r95J6JXEQt1",
  "key36": "PEspzwqqMyf8RKNsjYj9jTLmQ5Jgtbag2SXgMvY8PWEjDRfak2VmQSDSm9CQC9NrdsnhsHvyTMJR1G1JGgdVwF7",
  "key37": "4DAUTJq9JVZZ9KDW8qLHVrQynNDXHgBsec5kMkyfjSHmKw7ndAvCk9hW8FCX8Dv5nB56qdafuozQCQyo8gFphKAD",
  "key38": "4DwEZjXpZbsQrzZV9QKDgPntoH3PpCeCcpqfiRxyZMsWaStiaaFGC1jQUH6HrJPZJcW6ASGcc3iFtBSLdHYfUKMz",
  "key39": "5KaUastHdBCfLod3ngSkNhsGfRHGwyMzjJ5nUzxsYy86u8rcPvSK1nnuPev9YsxNvrSXNLW2CNjVjs8SbyW9xdzP",
  "key40": "4G7caDs514CN5fv5pp6rkUoHzHBWgJjphoPm9DTXnXEp8qiy3oWVfvMs338BQd6bteBHRKUBi5UhXAMZ4sx29T8r",
  "key41": "4NMAcjss8HHqp31gshxxKqEux6CeddbW9rVPg36pNzRCTDjnoFaU3RgCDCGnb12XWiJGWGGESJh9XH4Bkz1u3fjS",
  "key42": "5RyAuSBgENDCzy8QEEVxrZoCiLhA8mZHg25L6wsai6VZiFnzdWTdX4xF661yLZFDZhPTWo1TVjm9JKjfDDQKrNdS",
  "key43": "3qp482mjeUCPfMmH4iWfsX1zWHAeCYRSWwJE1JwdQkei3fVpC17xrBgyQu689KBxkdMhzABof7KzUD7BMeAMRdro"
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
