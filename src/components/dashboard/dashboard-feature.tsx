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
    "64nueAUjX7kSmRe7cJ78f3KGRi6Xf6TcmydfjvSCNZegMeUWbqmrEkLg4bU7oYNpRioKwoR9XwqBkrWpJZLAJ1k4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "286iifaexr3CQmpACu1ktoh3ztQJfkzgF7K9EFrZeTymtJngdPJFaZX8WmMxrgFFWR9rpMw3TpvAV5dKStTL11Y4",
  "key1": "3Mg4ohUTXAR1AGA2V9vknPfNWvtznRtSTr65hXT8vUujJiHY4EYUVwWCJ79JmjwqsmYAPW74CpgobuMRsMxUCHrC",
  "key2": "46odhGeAiHJ7WbH9Wa2WjeReZBLM5bcPyCg9hVHSBfZhLxpvTDHgyMzGkxo69oNPfM9KhzhbuzmgsPYw7inJFjFa",
  "key3": "5SV5ASwmdg8raBNxE85yzKx9rtFeHtCtn6X4i3VZLPonhZpcujmpsLdXo15UHPUjtzzpNPJgABfMgY5YUZRaA8ER",
  "key4": "L5CYrpNPHzfr39CavEdTWLu6NHLcJjjJ94eJ3ScT8kYuVEWMXok7gUYpKTA8nLfgHbwfp6kr6wUN11cbj5AysRu",
  "key5": "XKkyTB66YSVJK5JtL7rVW3y1AkAR9bWEV4H5ftVze4JHGBRBuRuxKgQVfaigoY3QNiBJnkuLXpmnPWThH2nhgpA",
  "key6": "51kCY5oNcNA5a62uUCLZ4vBUPpHAMESTKejrZaeidTosdKrWw6XxGhWBMm3MZMfiR4gtijQaVcz6LRFEk78uho6M",
  "key7": "3YojdRv8QrShjtCEHAkL2WE6zmunPLMmyR9NxhQqWgEU5qS464csWWoKhwyNMKuBGy3SfVKRHaQb73Eovm7G16nD",
  "key8": "5xyK1e7HozLTJKwS2hwaPLqrZDCCpYLLoHaFPcRZnBfRtav5VAhWheve2fJyXi7iWyENCL4u7xMQEfeq9F4ztTiK",
  "key9": "3PZL3ik72qqWW56PrNFSK4CjnMhdSEBbXsdUkmYtZHrLP7mC5AFZ6xQuwodAWJ8t3cTRHEtud5meGnCd3vf7Az4t",
  "key10": "2RR2WcSstrtrfzTvaKnzPmzwjfrXfqRTRuq4sV7do4HZBkMK6SRBqfmmJEhehdFiTrLFKKiZXeXNiQTwrSJinHDb",
  "key11": "5s53EYLHyuv4TmhCBLwxwSj9Xbag57gFyH9Cvp3sRUKVJgaNFbjnGWi3SRKckXgVbd4EkmKSawJg8rhjscXr8nP",
  "key12": "zEEwopuF6L8VHW3ce1HUHLVfssYUwzucuQ7QY5yMrWoMvpDR3dDTMAg5jEe4zEPt9ZfT5idytS4qmMuKZiYyrG8",
  "key13": "23FuRHSrMjU7Fvj1fAdJmVA6nqSGr8V8fpjLT53Zm8Pw8WuLTMXwAvsKX4ouk5YSyUX4rYccacHHbZGw1JrBkEbB",
  "key14": "5mT5FWtquEQ4VfNdX1sdRgyniMrhg4C29a837y4P4bJtC42bL4ZqYRmvArepq9ZpmuJxGCdkDr9AqF4CXr33QvDf",
  "key15": "4B4AQC55VzGrQ3AXhTRo79QVdR8YTeN3Hky44ibKDco5LAqUhcGHcKiJ2bQqYR1fbpKPBjRDc4at1GeYRHg575sA",
  "key16": "ZcD73xEbHckqZsCn3dA8hktWiDdbLtfFM1YDEAj5jbyZWyEEpH2WjmPUs7UvFvytg4mgxpwRwdxdsEy13ZvBhhT",
  "key17": "zt6WpXzY75LNp5N5CtJJwFQEsaEE3ECCtfiWKmWD4hur3Put2HmnfPegaESEwJxoW3UoeCH2WJfBRtTNPdWFYgi",
  "key18": "3XnzTPqxCZeAfQfRcCQjoBfWQWLboAz5MAz2kUHHLEyPa5nTszCkn1CCPSRYudrqdVkdQyhxJQhFdXiJtsnJeHkf",
  "key19": "3Y5xjTA9DySLkbU75S1WrpMMhLcuQPLbyPTxDGre1kTk3aSKm1eDZcYrGWeV6hwneYeXPAQ8W2dLz4dVqup9BbV1",
  "key20": "211iqjPZief3WT6r6b7M8weGyFHTxzHqbtMcyaXa1vhEjbYNq2GDz5CZzQLCVt7yP2b9e7gkHyHJLftiszz6NTTH",
  "key21": "3DrjY4aV2s2mzML4id5YfJg3kipYwNtzghZMYaschV93CNPRrYe53sA5NjKUaaeSWM6SwsVZsNYSb2Q7PE6f1sEF",
  "key22": "3LL6iin7dsvMnidqHEvEKmVG4z23MjVrGHYMfNGcmWjTCgB8VvMF4B7oe9sby11eP6yc4MXsy7e9rajzZPNvDGSP",
  "key23": "2DuyTp77XYLRBsuukis7ycCx3aZshMfiu3eFUpaBRy1wH8j5Zr9PejS5xbRdrcEXgB976dRHg9pckDREk9J6CHuU",
  "key24": "2pc3Nct9TmVEXPJj1gCJmxnH7J1FZiDN5ykF8UTWVX47EJjsEgCR1WcKmXSG6U39bLYJ5BGmUGQE4ixeXJhyStau",
  "key25": "5LXNqskZBQXWRDeSGR1RAywtMcGnh8WVQPSM1RatnoWv7uzheWUXEN7iP3rb5zhGz9fXwDUn7YU5rhgcuLYStxRh",
  "key26": "22fAqyCVX5a1ahSC999CoNSs2AGZtosztnQMhQGVJ4CRiS8ZrS4VATwjJqWPUyxMcyfUD7Td2nwrFYebj2yL4Gno",
  "key27": "3q6o1sNhDPDRsYZfwxWvUvnuCbCb2nHi64d6QHBq3G6XVkC5rjvxyMSVNDy51YF8zyXcG6my3gq1kW8MHJRZpBd2",
  "key28": "9HwQ5XKjDXQ3j665hp8tQsRmuDSHGEGxrnCTG52rHVVzePHDES2PAoTrRMpvUu7AXW7Liijknr2eSjb7mvFfLxg",
  "key29": "MTv2tfANwe9XLtCBryN5ka8nprd6AvLmTFozfjwSTFr5YvkgtNK9vSAeX1vj2n9emrUid5gQTHiP9QE9PUkuhyy",
  "key30": "4vCvuKrey5P8oFMEJ639JqPZEXCocaoUDKrKXVkTmSivXEQE5aQ4dA5r4goQqLrwLZMG3VsSJV2hFQfNF9cRwoEk",
  "key31": "23mb8jR2JUUDpjnPHzwycXPjNPTbxmthcUKYRXFs4xcLNqAXAi7voqiQVgLRcJvpa4HW5sd95McqjMWus2j4Jtf1",
  "key32": "3RKENEZDi92812cvrE4j6wC2ugzJzJucTktvzgWLH23UdRMxqRUxUqFJ91CiT8jhtF7HKYnqYotQe7FphU1APyD1",
  "key33": "5QogtmsnaSRrpGgpyaB8dSR4be1utefkvmJGFJXJaUQ8TzZgzu6u8QD2hWaTdop4sEuQzFetr2GYkGqzvTdNKkaK",
  "key34": "41hUjM6y5V2HJwDLqy915KqW7o6u4GypMwEymefGMZuMhfws83afLSE8YCF1PrKicbBtnHU7U9sKw7YCRnQcz3gW",
  "key35": "iw4AZix4RaJXqkVoH2gqVQq4uAAHnsmrwLAKoos1jmohTtMGAP5Tq9Cu6CZLvZwTbfB5MC5akfYBGzdnvXxiLz4",
  "key36": "LQDrBJ5zkTFSizF8PG8Lubq3EgB9Lg3mLMHXiVQTGDUs4U2aR1msZVuMMsFoPSUuo7zN3CWNzyMxfKxvVN5oPve",
  "key37": "4guB7qxboipvSHVJb9GzqcrkVfynwMDhvBLwKgK1mhZd55i7215awXukW1ZJUGFVtYoW5Cswz4Avx4HW2n5SkhGy",
  "key38": "ScsC2nFbnDJRM36P7ywPu7K5ojgLvSB65JFVBgdj1uJ2JM3f2o75kgddV7LxyMzuHpMTMP21Dyo9yHrAQqL6Aty",
  "key39": "38mL3GoUKLt83C9XpUaxkRuy5ynEuq8GicvGJ6LiMVCFGzGpojLn6ky1ADTPPhPXB4yp8Q1Hg6pX55648SNCEUrd",
  "key40": "5uGytYiEjEv5qhiTqqW8pP5yKJdNctbxDdxce63H2vYFr2xnFeXAv4kpwNU87GetGasBK28jafvt2eYHRyFko3W2",
  "key41": "2Xhu84YbfizDBEHc8iYKFEVTkGzpYDi7dE5Tb6nconhxWyofFDQHfdAXekvw7qDUFkL234VXtwxhvT75QRUyG39V",
  "key42": "3UWK5P3ashxzyanDsUTrw6w1AbTZ3yMe9TCsCC15jiDtyNcpgVyntYJqWaw7eqrL2YCeR654ArYz8WG5SuKiFR6H",
  "key43": "61z4g8K7du4GT61XqDTD5msrfB5bspe6HS33j6ZK4mjfb23oPnhfnwY5tWnRy6bMRYx8p1Dk2rmF6bZHe3E2Hwqx",
  "key44": "4umWq3tTGsFiFUF9w95LZefSn9X91A9A1F8rfr6iBGwBSSumXS5499mmDUY6vJKf9C9Qf9N21LNxzWgDvvxNQ1sP",
  "key45": "wf1LeF5n6hoN6GJ4iHxogSqEo2xTp25bpQMiZNP4T1SfJcMtAYQUQy5YNY3yGEtzW4yXFhyxNM5T3ptpswCEcMB",
  "key46": "3pPTiZUUUWxtVu25PfTVyeJyiMbgAKk2yhi2UCaNnM9a9xCL6qiNpFgLVKTGs3ErmtYrkFEP8yT9ayC9GjGwoPwT",
  "key47": "5g8UVtD5ToVj1PZzxXMHLXJhudhChjjqrNLs38YRfZKk49brahvchq6snD5BQcoa6TPTxFLc6JNNR47T5ABZuRBU",
  "key48": "dv9F1ZtY3TCL4XyPoF6TTuD6mFXkYNzmpxpWmHaJoU7WVQEuT2qRGwDJDpuHUWmnTUipnQEwgPS85YsULBRWQtv",
  "key49": "58xnEzkBHPX41a9fPs6immqnwhA3iDyLSV22UR69eWtotS99PAj3QzXuUqJ1UgcJPmBoLAeGr2r4WzV7pg1DXz8p"
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
