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
    "4DGq9CFiempWV38F4KovijpLjhVCkZEUsBTCifiDE3cWpF9wd6yeSLMz2KEH8gvBGdanmWxZ8NUWLLkVYNE17fQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y5jPVCdPoLYKiccZ3UPJewBGJgu2kQU4mgVjRFDRKYHnuykJgnZxyFnKUXNC3sjEUTg69NP2CEE3sitKqx9nVJW",
  "key1": "g1hE642jZRdBAgaUTSnC59f88DADpzVYGRb6foL2eL58hRvgZCp5KE5iALdzsKg1jf4wun75X2jqP13cMMoF2AL",
  "key2": "5risAgpP8XmovQ9eBghcFM5Heok716sVaXR3y9cnHNoDxbGjJcXo8oJGZB79xWQYrfXAXp9soyWdTGUwKu4oWLUH",
  "key3": "x5QRbhehxVPtfHizoSxc4xmREzSzgxjDRhEKtMszXiy7hrsCi22MLFnYGpfHtJYQS2XdorFPxxg2JtkZuH9YuXJ",
  "key4": "jL3BdDFgjqWCfphEb6J1GFsmBGC2ifmSJjWpe4tSNWdJJbr93KyCVE8AqVp7agjgEufj3n9L522H9mExTHu4CaU",
  "key5": "2CmDd3zEqaseKFB8vC6NopvLoN7CnKspDdnQodaChjmyNX93U131A3uYuPYkPy2WDFicEW3mr2SjaSThckukx4sN",
  "key6": "2FbzDot3gChCWws77K9q7PVzxSe3XWcSbWdkYTea4wN4Kdg3aQ9TLtfN1uRHNKVYXmKFkPgRjZrsNPqcSterJFky",
  "key7": "Wycx4Ujixtee1amgqFcDFghy2Ch7EUD6uqNBu3beRgLqioMzAAeYoWzi2ZWfmzKwtRLpbXtHT98vXPgEXSU8eWe",
  "key8": "4rWFNBCNwVRkrvmhPQvmkGYsauVhNjsH8KnqbsLw8AE5V999Jgm7uPvrJpcQvZmTDyF7LnFmjxo9bwjFLp1hDqtH",
  "key9": "5kPuFmYbEw3rvmuBWjJXrCqTLSQbAbTmoHSAhrq5JJSnTmafALXdTC4uPjrAoDaMcDJBttvfjPwpHC8bSwDVViHM",
  "key10": "5hxvZAbFXPPxwmsEtqoyPHooJaqe58h7h6XdVjt3LoNqsfVyTrZ3JcK5AfdKy3rGs1NDNYGntwxj4FpPgMnVvPvi",
  "key11": "4dwdhiTTJSb5NsPX5m7LWjv5MxqBdNpvxuvGGfYJrEVfzWBUZkgePRt9GDsiyXAwiDzZLfmF1UMGzMRokvVA34ce",
  "key12": "5kw4YiyxYK7RSJEi3ApjSr356omevw4MgHbDMFTNTBZjFJz1opDjvqF2kTrf3oTTGi2t9Qgpkq8Zdw6wM6VWzUGG",
  "key13": "37yxTuAaF2aDoTipKkwqkJm63oXkAbmMXyA7cH1M76Efxfe9Zo4H56de7N7yixu1KsxsqVd4zqibp4PHJeN5kkwq",
  "key14": "2UNrbviNh3q14zef2PVke7TCUhzdmmU3ciRwGJbBc9KaG5DStyXb8rX9hjt6v2LN7D5NAkfdy7n7BoZ7cqg8faem",
  "key15": "5QoCJCwBdpwwgqJaCmXykHzfJFKfDaP3eNs7R8TPCwcuxdm26FL2P7WMpMh2Ei1BtwxBNLbZs2V5SKwpmmUanSQ5",
  "key16": "cBt8PnGpEJmMq9H1H1LeijNvYU9113JX8QQ68w4Z3pMRab341b48e9rAiUqT31ubfUMvdzUUZezNkoFuvEXc6a2",
  "key17": "rRejgSnDtvbK4gUBRRxWRpLqazSgDApJH7BsA77gq1nejMCW4YYYM8PofLTnHW77FT1MxxP4a4pRTCe6aXRoUKD",
  "key18": "5sRQQ6xi1ksf4cVhXe9mLgPYqS2y2YVdWdX6k6tkbzJYL32fAgmLCRoahW65svrwjbT7yiLEy7GHwZvpxPCKEMHB",
  "key19": "5dDhm7XhW2ZxBBQkTcBZZJ47aPL4eXoScJThuh9DJ9ZWjmuevTo5NrJw3yfhmbvLZkuMA2a7hM3JBvs5TpRnruGA",
  "key20": "3HVUSBrgF8bNNU1Uy4eWvY2xiNXS9Hn6nEgcZQvwniEr4Zm4uuQhwD2XSS2shyeaMJkUexZ3d2jzbC5yWXJJRTJe",
  "key21": "5pDvKrhjhzPCGQtaJHkur6EjHVsy8nCqQ54aM6nWvtjRXWU3SmtsKmdfErLDvcBsKqbpmNYE2S6ePaB2yrBWAUSY",
  "key22": "2QncEH98dAfGQUAD2L6igjAaAxL4AhT73ctgB9JhH5276wduJ24ND3TB6KkKMU23Rk9u5szykSsp8c3HoCPZymKf",
  "key23": "24njgNJtp9Xe54muyUpq6xDgkBrrZmYNoE8S6Td87T4cd9Bj2qUDQqso3WSjFUUNfpq2w1zpqt13cgwESiPukqHe",
  "key24": "3DCBjPHH8kPjekerMdeDrrodCRjMU6dLd24c43ajU66vHLB4j3os1GTEB1jTQN6qR66AnGs8AtPBRd8GYy2c2zwq",
  "key25": "2UqVT34EsENWKXLKTPoKHRfMMgzsqunGx6bDVY3hyucivT8C9hsMjTYaJABtGYrAFinWi12tAj12EMH6omuCTCJZ",
  "key26": "3fXmtm3PzSuKtmrpJtjKjzRCFd3iMWrkVGYbjnaSeLJiim2Naf2VWG9gY3oJhNRGXzWgbJd4EgANWfuuFqS5ZNd",
  "key27": "2ZRGgxf4Seed6AA8WuJ2nU5MpYBqw3YTp2fwB85W1ytAKe7GW7FX66BfGbSuUnSnLnxofGM2rYZZRhYdiENPiRfg",
  "key28": "bAzod2zd7M4BbqgMerFa7RmHAhbyDgcqnJ7xYVN17PAq6QvStboDeCejPA8mc4b1mqZwKQhE1H4bNENQoCYLQB4",
  "key29": "2b1KZggmWXa2jumah6f8GKKHfwhEWaD81Yq3dofoVkTdpHJm9uRX6WUjvGc8KqAT8vfr8M5EXrdY626aYAnLnM2A",
  "key30": "DeJd5DdHojAn2Xhof5SmQsE4KXeNMeboVtiWV7BDCBbE9ju7sMfTtmbzHzc8CAtXFFxYVNsxyr2xLRC7VqBXYwm",
  "key31": "3kyMFoYR9d7BXyXnu1DyxDMNjHknHufvn9iobVNFJn1trngxrDZeg7DK6t6pW3t5K8QHsCJFhXxHoYpzYBxcDN1s",
  "key32": "xkqr4hojypPD36SWp8mx4bMfhtJGWK3GoyNuBH1dq9q2J3XVeWfquwNfEK5uWeWbckg16JwHuBcX1ySooj1pRRW",
  "key33": "2L9NGocn7A9f8DFXV9uZoDTNRDQQ25ZUEmQcZ2PhKp8CV27H6E6QXYLLAkEaHuH8toaaJsoZ7wxtUaHcMy6Dnoo",
  "key34": "2XyV1ZNgoiPeNQsQ3tZtLMGJ37hxFcxtFh8SRrrazqqEyB4vD4Bgpw4ZEKykQf9MbjtniZAVrEDhsnnJo1CGjkzG",
  "key35": "3hE7nxAKF5zpR3bZf3RUvnkrYLMeQwu77gCpBa5r1nARUv4JuQ9sxFHwpR9xQMzZM9bSEua9AKE3B4gm9T8ykrbF",
  "key36": "2kUjqVpWviQduZuW7uL6CNT6axAQYZS7zqSHBq4FHPvzodXqGkbJghR5VFxp2CboLDnahhRN7RTGyBYQdmKZjCnj",
  "key37": "32ZuYDSG2WZYB1MjeDN4AWoYQfoWsqRMffT3Qd75BW3i4dkAiTXPdhdAK9728y3rHVfo1Q78s9yPhVdQeAtA7WSp",
  "key38": "5KPQWR92mdhXG8eVRpCT7P5APKr8LrvfQR3yzut3nUoioe5Pw98FaMKTtFaCdmdaA4G5uVM2ErphUajTkBhjY61q",
  "key39": "5aNaKx8tPCQUWWYAWPBqGkKAYxeuYYkwBcbaJYEZxWDzkEY8pBdXnMWkHPYApnMxZPTtNowo1XU9DSp9Tit5qkUJ",
  "key40": "m2p2r516rZmvMz29SFSsLKFFj1B5YxXmydxwSu7QveEQ6krVnC4yv1sTR1oYygNw2quHnYyRAzFfmSMjpuZX2t1",
  "key41": "5usv9nahNt1agQjT7JQwK7LpejbWtq9Egmydj4CrBZvJaSFbL2RbKJh8Qj8aLZBEfs2QUxER2PJvfia3cE5rXbDK",
  "key42": "TfAvjsh2JJ6WUYPt1oPk2mZ2JnrYxwNGTKMBGhiUK9oHwfcLgG3EPUJqYjzS9rCmUUsUgLk5JyVTJ5kqbDBu5w3",
  "key43": "2D953UTvXjg6iBVwNnYL9uDW9eBbCJmghTnr3TXpC5yi39xmRqFRfweoKN343GvFwLC1wehDS2xmq5HkFxdUwY66",
  "key44": "3GwegrQ1W8cTLxQchriNZx5cSLrfmJSkTdSEHWUE7pXdDBm4vhfzKTuSbyVdi33kggGmEmqaG6xXqRTbXWFrVdHp"
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
