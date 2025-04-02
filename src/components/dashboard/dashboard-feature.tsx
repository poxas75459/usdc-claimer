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
    "5vvaJSFPDNhBXHT9jZgJx96iJcM1UeHpjB1E2eWW5YVMEg2yc9yGW4JoXMNaCzaKvHAzsYoqHHmdZ4LTnvU4e8wq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NWDVVRGdhn6WJLcU71LHp7bseSaqimdfmg93w8CaZYGUMKgofKvpKJUWwP2bQhUJBUjWMWbV3TT1LpDGj97XxeN",
  "key1": "JKo6hkvZsF1buigPXvrmxe6md73xeQGScQEQRnFsNyriYJ4earh7TqgQEJdxeW8D69atPwCceUdMZBgk8PsWo9t",
  "key2": "35UuosybtakxksRxJJTZm7tL7ecZJ6vHQh2P7Wpk2vggsUZ7fMuuLUFwUEv2jiX5QtNJedGWync73jRM9rkLLYTe",
  "key3": "5LbGSimtZLkcwX2yNpDFfaTFFcN9xcN3AXq4pKxUEAe6Vad5gu7ZfnX9qu8zhCZvsMCtFDrmzAXodCq8UZ16E3iF",
  "key4": "5n1zJTTFiaFzifzrmEp3GE4LKFYMQbvDVDL9BRen9k5KV1VffmqkJVzZR668ygwDLvM2C8Todn5YnzZtiHV7PTWt",
  "key5": "SzAwxk4mvpJHjUxsdRqfrYBNT7Qd8y4pZtfd2fgYY2j5RvZT1TdrSNaTUTmLXxPtQdcUoVKE3yJvPycKBati97P",
  "key6": "5LCeLUDszgRYnaUpL1MKvfkwFZSzPGx6wAZaA9H3t6vRDUxLUGHoJD9PL3ZAV3DUcCai31QhMHz36i3jFWetU5Nr",
  "key7": "4M45oWGDzmk9FSWrktmLdzb4VHtXWEEQYbq1Xk1Gq6fRXabkyeSeMzqU9t48uMcUmQne3DMqQYfWU7RXMqKx3JoU",
  "key8": "25gkvpFAqYNHGqMEVoQ4QtyTMVsmQ73ko2uQ4WPG5breMjwk4mY33aZg2mmBKjRqmSeGqPXSZ5g5AFKm3kzXY2LD",
  "key9": "4NdF2BcsuxtYpixLzorb1Aty3egjPQw5gtrdtXCYvTgZd3yQnyeChaK6qG8UncH7VuVakzujUL6VWKNASkJBkFVL",
  "key10": "5b8pa7UCitroGiTQ62WvU21xsWTMKuqcSHS8itX8ds4ff5BGf8J18VuGJBM6qQoP4RJeMhxQVH7hyQpju6my57pJ",
  "key11": "24sWrkwuLatkqrewLputapAVodQ7bwHh8R6gS95RrbjbztoUZs3A4MoDDmgDj8kFQrdZvTM1idB8YGJ269MSw3WJ",
  "key12": "5SNDEMjGrHzp93cFK6hFjnYm1LMs2F6J6812xJ5VtuU2WjZHcNAjF24zbFge57YkXQUpsrbLUzfmhRQKuu4XKvUf",
  "key13": "3bkLthGhFc6uV1r6T8DAH4V7JV6MceaT1cxJsUZZxP7cJwHuR8FLccD41P6JFroj8rLHyqkG7NrpeagU2AKDyGwV",
  "key14": "4H58p8XiE5jFpY1xHxMbSgL7t815RUnRUkU597X6MbZtGr6RS3ujY9pgmMNy9XDh1FbN5HbZN6fMGNdr6qKB7eyZ",
  "key15": "5CaEEmvZz4vVqT44NMV3nY6g9tJXK7smCN1Ypi7ngmSCKf4kzHreiPJNXqqWYti5BxWjiHxLsJoR46btMuCwz8ST",
  "key16": "477FFaCZ6fhngKPSsHUsmLTrFTfHQrjZ5CZDz6Vx1JBTK8wxhnRfSHZetP32niN1dt6SqJkqkdMvceaiS7Cy8XWf",
  "key17": "3RhXwsRH5D9QzpiDJwaiskCzYaMLaZGAErbqYMs55bh7F1coAakT31ut622qGkkYCGqWEnzTNbUEXf3pYAyhYKqQ",
  "key18": "6KDqSbt9cc674Kvj6nMwGcCtUBRo1D7oDeuKUAe6p8xhWrR2aFmUZcHSaF7XWfqDNeo8mzPQJnukM23cSyYMCHD",
  "key19": "37HNkZeQSrwJ2E8v2KEVynpDFRVLAyAEigG687EaeNyWqkJxZBSj3opfWGnzcJn2MHpeGxBFMvYeDkXd1RCUFwEZ",
  "key20": "3ydS1Ub6TpUmP6KjU5L1EFegEYrK2eoL1MCceGipARLMLAanyrKPXh9gzwSmyk7Jkj7hnt5KSCXeYQxPAkYu6TAH",
  "key21": "5cpzkqdxTy5EwByAzEKtZDSXbov914Hy931HHf8PdXQ9otAun9ZhhCsSM2VEHECkK4x429KhJ8pVkkvx97MPmfEX",
  "key22": "4DTTujUnodx2NL8VhWYZZW3S8xn1b37HrkngQSxhrEs73z8azhS8Vr2ACUf7zghqssV7Qou8H2BE9sA4paQfs3CG",
  "key23": "3jX1yeMZbZu32aLbrxFfWQPnzGvLp4uM7Xc4G8M5KmorJ8f1ATukKqWtsC1TXT7iGtrWPDEotxynCZgE2dKvQw6S",
  "key24": "5VQJT9rkqs36MLWnpW2rQf7QYEnJ29JJFNNvMSLNprWEsaEthQLtpUKkX2m29Hh2J5isYKbwCCsw2L1hbx2cZvBD",
  "key25": "2kfeb3UvY8g3f9PGiUKwriVhk4nxm7iqcvXykcoN1PK48JPguNxs8tkreXt9bpn2P8MweRkskmLWVuW86heXV1jp",
  "key26": "3xCjriVJKQn3mbV84UdfZLZUXyLvXJ8YX3YBHWZMFRsCm5oirX3DsGFb7CteDXpXyq4x8CTyUkSrQaLMjqXL9rwL",
  "key27": "4omq8vjc2TgyjWdLgpwaTg2ZAsVQ84LBv8L4dv5j8LdH3DbYcy1NxGo2sU942rrt9XdRH9Y6PrfgwUFxwnYpWDPW",
  "key28": "cVnBnsRV2uNJJCncdoqZUDh2FV8vMrxY7ccMJGCipffjNRgdBWHFzu1gFG3CehkxzdcxojXwyMwahnk59WbNgAZ",
  "key29": "5iFFAiVgQ81uJFxfCbWAhgn5MRwGMpzg4ahcxzSkTJ7o8EHmrK79A8CH61AFmTb4VjGmkQej8jFXA9Qoqr6x3eKU",
  "key30": "2Ccc94fcLa2aK63thCdu9ZiTQKezMqidb6EE4D1Nb7Z8cBAJCuUiSpaoGev1UsTtwQ9U1g5QMA4Nfg5BADci3AqT",
  "key31": "244RPtnFoyqaUeq91EHUdKCJEkjq2o6FjThSojwpuD4BjPfb8L59KJJFnRm5sZzxVqXRn5AwpA4Xwh57rjWFeXSr",
  "key32": "2QdDg7nnEMytPDVJcVdN7JoRgssz6FDu9xfWGbME6ebwwJ5SPBwap5t8WCsthJc13PowgPFNVaRK1Q17cZiLR5qi",
  "key33": "3xm5aVSp3hzfbwcmVqsFpyiV8EqV7NzdSFM9HPw6unuBVf2tTCY4CKAVE4hafWwu1pBCHFgoti1sYnMwc7biW1BW",
  "key34": "2gBEZLGexvAshHtEba9edL5iGzV3rBD7fDs9J2t4kCgWfBmFmDCaWTNqVieSkT3TdgfXWjUWHp8FZTvgxgYc6yjq",
  "key35": "2eqhGXsGAhizcBF8DFAHZevVtjWq2B9Duam4hRvbZhyvnzG2TyP4LoZeYdHAr22yx4kyt6pqvfffpgyFTQAUGvQK",
  "key36": "3adfHGhtFa99PBtdgRinodNTDFPijt76LrtER2mTyuMGSbDyW9D4XjQDqk38rVK3FwTvrJdvCWW3HwQGJurma156",
  "key37": "2F4MgoNrbbuT87ZiHd3eydhY4LWLhd4aSCuMqKUsYvQAQHa1D112kmXzdeWpDZCz6xcTtCY4fNwsaHsAvkmJJi8r",
  "key38": "3JbaZPF6eQGQEbiN5u2e3yCATxFJDJk89JMv3cFj2GrmqJkGEEpMxgbGF5xN1jMNHZVomr16VhzCck8zku9L63Vs",
  "key39": "3P6u8pQHrQNTr4pepsVscyskdaASUTX8XdyCGxgfdNfmKqffbDikwXnFXo5DGZdzGDgpxa5cJ9ndGYXXaBJLFCv8",
  "key40": "2Y7dfvDkfWZKyzqshA3uoecSiSQGau49VAFdhjcZNDfkLp9KVahDVx4ZMPwexYtgyoSC11PqFDTJVVZVggpAm2rA",
  "key41": "2kcCKNi2BjnQDX95orXR8LDpBrCvxxAciRFQh1rpg6PcEaNtQezCzXAoZFrmxYQWvSt652uU68Fs4mBtcSJBB1Sy",
  "key42": "5U6Z55grViG3ZyK1FSgqnpYoevBVG5T5K6zY7SX7o2p33yGVyEkUDsyDLYwbwKWfE1B86sik9JQhdg1tScQSB8mq",
  "key43": "3GyobuKSyWN34LXvoLvppMdHzt21YH3aZdK4pDQCegKQvhWFP4mTuMu4i65S7F9yuaSYHwPpuzSosZGodrViYQin",
  "key44": "5o7eojYDWNpkur69qEaw3tyCD4mGvL1r4uXWaGnBatgkzQBe4VvCBQovHni2URahuafHNqQJoyRcj4cZWP8tBVed",
  "key45": "4eB4GgRbJHZ3KBEXbMnM2xijvRmHemTvRrKNBannNUVfY2KRmWVwdKdNR4KzmC3WAqFHTe6hmqEHhxbEvZaKXzbb",
  "key46": "4oLuc3yBwRvD2ynBRnAM7HRUY5yCrLWVNznAVQzGcub9uZBARAeW8N1GybmCqFVaK2DMskBAjdwHwMuvJHERKPaT",
  "key47": "2WQqpG7YbzGNeUuwQ8qn26yRM9pYq9pnkJNQWWunkcD4uF5jESnbH11mFLABkakKBmiLn7RNKdkorxCr7k1jqR1u"
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
