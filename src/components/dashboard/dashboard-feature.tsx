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
    "hFzowRuo9AXpc9GhmM1vjYrVjRK9B3M1nNJGmXKs7ACVfDLQXb63XLdZSpKpgvf57QCKFRAK84sKKVfZ8FiLikA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ikJUmkPTkpFiSwC1CEC5e5vGHCGKZVzmrMZxjnrCCscSRVTDzyAkReLHrtDitzpGqzEYfxwqwwuFwuRPcSLy8GY",
  "key1": "5CG7XW6XPU3gBQoCLHqYYTqarXmb1t7XwCgvo9ptmZ9gspbWiYU9Z3jYYc2z97pwKwogic2xkTGYqdpw1oz76td1",
  "key2": "2EfcBHrcioKgtSMoj3WaWidJrzpETMFvkmTFZMWgF9SKpxgVgE1i1buF1dZqeyBWP9kh3STcPsCi5CA273VHDzCM",
  "key3": "2vwJYExKSjpLLHgYvaYQquE7312kyBoEfCV1XTZreXwAmmLMqAWFhT2XUrqvQrU1VS3cbL4VZ8MQFP18rPnT1bJG",
  "key4": "2tVTo5oPjugorwbsAseyHG87v4eAbwssGWaEzCegp8Vvr9oampFvZ33tBY5zpmPu3wsU7zE2A5dJbtp6HuS82H74",
  "key5": "4Wods1Lfq3q4gWW5AAXBU5QDAyA8q1QfQkEcUXukBgEWkmiv1X6TTM5NRwDK2YbafTiBmZDKgt3tn84AoUUxUMYY",
  "key6": "3QBp73Bjrw3TFQvMbBPZ18Trxb3RHswHEhSfTbJMg6FENkL6b9Z3Hw2ELo4WxcnAW8muUMYNAd7rDr3bPAYCQJzR",
  "key7": "3ivyz7j3YexKSN2gQSZ94hw8jor5yBhReDVmY2jJjsqaA8VrEtLwyC4okyK1A3WHKQf3WBGwk3yWva2LkXe5UMbE",
  "key8": "65hMnSA3ZDaZYW1jSkQ329cWo8Zy3ARiQqXqs9qKYZyJCNunEqVrxZkNtsQdoYArzyGxj4dmShajnfB28Pa2urLi",
  "key9": "61hotUieukpA4cNZmXqeeTCKDjsPCxrxwmqtDG9AF1CWp2rU4nvwLMKAppp3VTVGuskUTtKBMYwr1Nqo2rPsgmmo",
  "key10": "4AZ8AKFPVpKfVRYErRC51tawphn9V7giRD6cXbA7kinnqfQ3wFVgM6omAJVwxH8o9TVSHxVDnjKM42DdN1BWVtZe",
  "key11": "3QqpnPXizbvgn189PCMVAoRPjMUCbVAhQDGpvD8EeftB8henNkXybdiDWKRMvBqsPiwpYcbHk3MTmk1dTwh8CgwT",
  "key12": "5YxANPTR6TbEffAYveg5faRLpSsQVrqfSvy2KzAPTLUrrTbqx1YiwTFRp4Qu6hweKz58xmRqsCxKWdgXVGd4wE2c",
  "key13": "GYU9h3MdtZcoH6TbJnuExubZktrG7bh87YHRWN5eKHRr9w5ve7yBkttpFpHazXGGLDE9J33TZjShg6ju28KGNu9",
  "key14": "4Waha4v8a3yfAop4cVNHM22bmrJfHbNRu9hTJ415fBkxdBSXj7SCjqPMqNoUswTRDMA3jY2pKTq2P2XSF5K4JZ9V",
  "key15": "4aSQXQeMkRBEwDx9GNuT2a1rJ9qGYpV3rBaiQTxt1uhU3ADF6UaMCMgUqvjLPAdJpwkyfzDUhmqrC9uDqEWq88UF",
  "key16": "5NjTGnLSr5LKbbf12KKjRg6uXTuwyPWU7jikFmam3SncyjLZevWUtmNB8LQjimnu95Cr8pk7uFkGQNyhon2MGe5r",
  "key17": "2AskJnXgeQquJ6ANeLmjpkqVRJQzRK5q3B3XRpvwW7xDCiF5Ca5mf1Y1UQkpNzWmykK5szDzsaGpsNFWEBbHyL4Q",
  "key18": "4JrHo6eBf73e6adCDeAvAjufQESPj5fkQsTMqfWKNkmuBt5nkPPX7qD19H9n9W5pN2jdrDVwGftGmxFEeQwKwkym",
  "key19": "5yjHLpYyNY1dZEoDujd5zhEcv7s48KoyDah2SN1xVLLDKKwJKnENFbnYNtSZ4SXAsMDH3p4t5JQK1f6RmVQTojW4",
  "key20": "v7NoDfpZxD4Xyi3ZDJnKRRkAQeknHkj9FqzR6YHe6W4sb5LtMhZ34KrEwM12h2WWhKr5iuX2L2AsEiEGof2QPHD",
  "key21": "mG1GGwFBDEQ5MCuMy9Dzz53BmoWhxXreKzeqQGcxgaBg7EVBgtgVX2FboNQx26tUAMrsFy4539ksLXMyfYrgQB1",
  "key22": "3nutWqfqmjcTaUHnkddNttG7owBKBVNsboRhJHrj4cp893LAd6eWtKqWWsKWJmCs6L1amkBCoyF1pNVVNjULW6V9",
  "key23": "4KQS9Ft9HFtJHfiUm3bGh4gUmiUrBEAtjALZA55APpTGrcP96vCsV2ppsqNJgA6DWvHQWM66dCxQoTzpuFZGqTGk",
  "key24": "3PoEfXE5Re6XwATHsJYfvqQYPpq9bGufGQJfDwiS5yEDyYSPfo48XVZzpryCmK3qLFpe1UxY5Jkb6x5LxAnHbc1x",
  "key25": "5eux3HgurUunUMGdefCfG89VJUAPttMMKSoPDGnH1muF5syw71dk1z3vMGPbRYnmFPxHZHiHWtPf9WuSeXYas28o",
  "key26": "LdQorH57Y93ctcwq6rZww3Fh56raDZVC9R6ygF9tbKnsZhbE51GJ8gG1TAmw9TXVB7zDzD9mtX3EAGaWeeBpWEa",
  "key27": "44BFTQfv689zxfZTxxvtyXtSXAySqiYz8odXtVvQN9ngjHuNvtLcNG3FgYePw3SBAcMoZPFSk59bfHw8U984amQs",
  "key28": "4EY7PYpyK6XpVhxPBK6iHoe1PEYogzXuvrs1T5zVhmJctuBs1jw6A1Jsx3HBnuhNcSv8yavq4oPwsBPot3Kdgk7V",
  "key29": "19MGB5QM62uzHMhDATKUwuT1jvAHsgF7XF44DNuNdEAQW5yPGfUhLcMn7p6KSLLbzATJ6zjQutBK5kRbuWeE4m7",
  "key30": "64GYbKdb7j7A5QqudZv2jbmHcyXRSLhkdjEifcidU1RpY9j6nCsHwKpX4s8SPaSSTeqUxp8xDMAWw7etmzrvyAnZ",
  "key31": "2tDAbp7rzFhamhbmnuQrkS1thUJc1QMG1sbwwBCpF3h92a6xqNTnBoEBG7cyo2cfkq9EjqzaouHgUtHVqe12cJc6",
  "key32": "GEqWrmrjiVNpEWVHrGSWeoepwTzfUTam8ZLoAXy8FxnQJaBFZGvLFRaS85be6zMCfanX1LEGDjJbWmWn3dFB5kM",
  "key33": "3y8e2xBPPHvRAjRTKiSJRz1DZVwCDGpiEHXnvuSPz8PbBYGVA62vF1EkvH4RUhF5vQm4u6LvmJjdyRA7CxrB1p19",
  "key34": "3soKmevUHpDqdx9As6F3w7TzaTfnEAE4WcJK3JYJv5tyfLhQkxPfZEdvq3ugg3oaijeS9PeJZmsUVDWod8uBMqnP",
  "key35": "2BsU3RCWbfLpvmi4k63RKQriRAEkzhdz1ziG5HFhKeTrXUEUXjcTEmgBpxiebtrgX7uHPTbpettpYRuPMHrgztGJ",
  "key36": "2tYVJEpRaA8ghFAivJoYKtWukH2cc2AcnhtzHkZE6WpWTnAQteQ7HM2WTXFXNXgKMM6uPf3cQEMYsBfkGBbJzZ3B",
  "key37": "syzrMPg7xtr5XT9kKByQX95K921SYHrHyruXmFqKQAzW7NmkYYT57iQgF75L58LA1VzArhhbi177hbfwvrV6cYN",
  "key38": "9xt8wdiQcN7M2qsZQXtGyMw9TevHMDY7ncFFm4HfCCDXmyFjQQeVDoYuvBtUxq6ppnthXB3i4HNJyFQkL1PJUip",
  "key39": "4Yf9LvjRFZtyh6w4YrdPeDB6ENc9LnvM8ADif7FmKbKZaSJVG99TsQwT7FEsyvDtgcQQFCU6u76gGLBrkJ7zqYwC",
  "key40": "2gRjWUjh2PnjQUAQ2adVo655tAi2tD9e1p1AbxwhWoL2EQA54D69f2aap7f64Jzm1Wh25ZhDs6tYki7i3FoL2RWk",
  "key41": "4eJgoS5jKYfZUTMbE3QDbqrZ8EALbMRAaoyGWoqpJLyDFUD5c8bMQeDMWr7pDoerSxQb9gSSLq7LwfjeTfJyywrA",
  "key42": "2k6vK2WF9pVgG4QWXD8aigS4zgGSGQzVouoEVduMi85cRGsNx7Yjw7c2dbRTLvdnDMKPdjN5QckAPKfcqyXB1J8",
  "key43": "Z9dr8FvqefF3SZGhHW6mfkwLrm49VdDozsFNUARoUEYuLhNS6KUSXwAPTV8mfwQLmCiGAKG6fR5dZp9Hny8LQsK",
  "key44": "4kuveSFhsAq2QSm5VcZjXpZE3Q1qZZo6gfJbMTvDZaVuoyxP2FMkkMmNQz1UuZLPqYN7XcdrmVPD1U9fzFJV1gAt",
  "key45": "YSsnHWNJ1RvE4VqraGJSkhRUdBJgpbf5jnXjR4krapq2SJP2unPPoooWhJnFFJVzt8n7DZQCGVFKQFWKWtcJpzc"
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
