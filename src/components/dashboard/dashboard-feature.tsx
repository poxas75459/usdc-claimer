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
    "61jJ95YSxFUhoUBVNDGHLDWG1cyhNyK4yiZ5gFHuZTyDESZxLv5P7erLXsAJ8MCfohPNMajBmUqh1BQ9W2nvbJhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wAEiagVoTyiqXymmy3uLaNfpPZcVUNm8kdtGXbdqqYEWftTWHyHge1EbAhBdKuhrE54yDoR4yqaWg2kmJxS58vc",
  "key1": "54e2gbASnqRWTFgsMdncBWy2o8CFDgmxehKFVvNkwykbVDiL7QArA1js7KgsWFcET4HAC9Hq5CZs4ydWed246Kfw",
  "key2": "2mcJkJh3K15nNTPvLnFR5pErWWyu4DQTpbSsCbRq1H2jiZfnKvfHGBDFw81QFd93SF9ZvQLSVouvdR9VqZpSVwxQ",
  "key3": "3Wj1b82FjtoYHpw75u2KwpdKpqPh3DHp2AFD28Ko8gMfMWWc2jNFqbME3FgDnriFABdSCrPTgnx9x83u2H2Nut6P",
  "key4": "2AFg6yGF1YzWfyQJYEL3B7QiaBFFriy2wp2G9mkeJJ1V25uPL7x9RLNTPZmuFtuqhZMqeUURDfBw2G4BbvHcKfgu",
  "key5": "55dVoVaFqmVJ1TPVCehhYEaDUSD9rbhSeUVYo78Joq7pcywFA1PYGiHhjLbn8jXME6bHrksh5Nqxv8zkgFCgBWwo",
  "key6": "5rTQ4uB5PnC2FfaidiRYjUFEQjSJsh3zBR42gGXeYCYuxq7piiEAPkDmCA5KNjaNkkYP5R89eCh1LsWKi7ezaAxg",
  "key7": "3Lh13JcqLu5PLA2p3yZUpKNhzA4FozQSRwF5US23GZgF9rr8KhtV77SXjDe4cRFrzP4FABc49RPQG6ucZ2pXCZ54",
  "key8": "5nHKEoyf5VoXHuuQywNZFwRgMCJxykJUCTPUGUvh5zEefraNgCm9ghHAz5zB61XNCwgmq25CDfCtA29GtVCkUMt9",
  "key9": "5XPoHZRUTCcun4tcxm6uGpD6WvMBoxnjXGVUWP5ktzfKNA5hiVE1uHarFRSP5SbH9isAdgGCBedFPiRzUJZpoHwF",
  "key10": "5uoHfNpmJic5niT9P8W2AbPXPGbYtVjRsaDemKRD7AbqVcvjix4LpWMSAvHKrFeU3G9qMLAGTG5QeVvPEpd1ZAcz",
  "key11": "46Bo6HzsS86f7X5WfC3bKdZ69GwijXysRPGajKL9G7nCw3TqubHUooothAMX6648FxM7pHWJTXgBqf1XvpbqS3NF",
  "key12": "eK47VP1ipxQw3NQnuzoDjwSMijXfVVuzCqBcNYyhZZcbQHuCTkEkSMdFSbiepxfs9D9MnnXDSGoi9vnGN7Gy16H",
  "key13": "3FXQYnXGEU3CZdNhTW9oBTaNvk8c4iGY42gc7UDwUZwVj2dWEgumCfcU6vnzXAA37njofPhDFvf7aqr6HYHhTTnS",
  "key14": "5vYAvhSubYVN3vSS7bqYiroqgcj7EcUcbuoMGBYBEib7wZLHGU5qiUoDDdfNekgm4fPdJwisoRkCLxzzohySvZ6T",
  "key15": "3WdXPLyDtAari39pTeABVJWSjQUU2TaL5JBJy51TuLqApEwSRz9vEAYW7qQsdnmaoFSUzVGUuK9ZssHGkyLdeU7D",
  "key16": "4RijwadySY2iWfoX8m2jmLZ4njQC3GJoyBe9ZuvdeRqgWg42qmzMU61J41Nk8yivdVPx8KMouxC5d2iP2gfzncFo",
  "key17": "59BqgR8TCXUKWy1AtEmDuBmMfK1QRrYhvV83hqK45ifyeTvrCXyZxy4RqmHBhRQjF7eP7kPhQkyCD119vwF6FG5j",
  "key18": "4WWiypWoG8dToYmJZAgZrM5y9EWoYWk81SzQ4nyezY6wX54NQmahJG5upvFMheudru8UZeLxVhe4of7czsJpyRK1",
  "key19": "3awsuN5odh6iUWUjZ5DXZaaA1DFSjW5YFjmqWsjakZHG3CzkHGZq45zkFLdiZQSWQ7aerNduL589gGLV9tNA1aJq",
  "key20": "5G6sQcAsMuBFmPe5k69vKoPq9KPScszyfmscz1tsGQDFKip6i2zgaKVs2UKTATPb9f7iTeAsT1D5pPTcQMZzXVpr",
  "key21": "3T7kgnTqJEdHBQAkEr7ZAcKB2sKwP2e6xs62nUzBUbTJLGykYyjH4JAFWy5Y3ZvS7dzsEoR2dArxj3d3HvUZjQXw",
  "key22": "5QF9TymopJt4kJNw6333EcfeXo5UbCHiS2777AfAhk2PNr5DQfzgaLQCUoKp1A3Uzwdzjo4HHCTZQ5h6YT1MEnBR",
  "key23": "4B4vR6g76kZV5Zgvr4BKdjtwE4ahtpy6SY4jh5RVdC2zpiEH6a4rPU9t12tkeD5gRfUB3A2JMTKUDCHYA54zDVyp",
  "key24": "5dKtCcwwqXqfQahr6BkPZz8fxRLfzkV26h4t2ULSjLdqW3TPTbqGn1htoXc5BvjQNQwtuYBnxv6tq7FCnEjsxe3Z",
  "key25": "3ZUi5rpsDvqYi23LBiqJjLfXnQmZkWjf6zuKwB2rYZq1dno2jkUFnVYvkqpeuL4mgmjRAVBNHkmHZEzTdbzmgoXv",
  "key26": "vUbjtBz9tZqQZUUKJrnbRgHTvxKcHvBv3Sv3AkEm577qAgcJ37bLvjuGFbMQFQi8hiiiTrghnQSqMDygQB3vRPb",
  "key27": "2zYXsdLhRqogQwqeV4XwRpvUoyjiGPaGAa8xjh3B21vjdjKcfVZE16fVHECQ4arLxB3bzcKQrX8dqZ2se6JhR2q7",
  "key28": "Sj3i81oUQ5cV8855NAGCj135j6Crtxzk3n2HWTPYP3LLND6iMkJpJVhPayyGWi5eF2PfKShvhkfZsxthxBYr5gX",
  "key29": "3dEpNEjenLxEdihCEwCwfNnynQEFEzzT9yCzGwgm9XHbdEyGYPEW2yscKQkoEf7ywuqTfvp2wufhqpb9ofQ7rnFn",
  "key30": "3buLSomQb98myVM5dSZciJVy6j3KJi2SgGNP8nwaG8x4xQS9RwEhtujgKoc85kooUSnj7pT7cBe2DeFzNdbRPo6m",
  "key31": "3HyB1uE2kwDnpc6Jta9o9capxFif3BZqGdAugwNG8pifDZ62irGqsAk1hevrHET1wVL4yiNw5wbFcxhMs3udEtGD",
  "key32": "59DcfKzeaSjqXsmcmbAq5eKn6ZVGFxUMAPSnptmE9TyD6eGSEmwWe8xJon2k34nqBJV7k5mr5Yy35V4iyC24ivZL",
  "key33": "3y7zzGyrRMsBpjQX3C7RvNji7MuUmYTUMoA5UdSfQzcc8EnMZn1rmAmuV7t2VtMSxJfYq8jhrNkBf3XroQCDwcnH",
  "key34": "396n9uCZJDc7Z1bQhcfLM3bvtBCq3b9Lxr2Np7VH6WHRvhjPV5FuCrhnZwfL3dzHQiGLyCqfu1PGxRKxVxtqh3Lk",
  "key35": "3gU62aCLzRYihnYS4ASBG987YwdBVYpuenFHHtrTpqPj3YWxCgFD9eJc1k1aGCvMyxn3eu6dWHrxBxAYQVAfiSYh",
  "key36": "5TULxyhG2t3k9BJNAF7wxbHD8XX7DPvPaniEJ4UekqczJR52xgQA85hXYDBNDX3cz9cWcJihKhnkM9XaGWBxQoay",
  "key37": "3M68k7ATMd7jXbuLz9zs8eurCWnfgM2oLq4mhzccnawNigCDkaGG8nxQ45erpGHNucKNNtVYqzh7LQc7hCNDiyKY",
  "key38": "5UQyobADisQQcsht8kQK9yL9qnKmxdhATBQfMk8vZQxjpXSfTK5nso5caXVC1otZqtD8McjkU1ahKo1fDDrEXtz3",
  "key39": "4qYfTpXuVaT77kFPa55p5am9YAXfUuDQ2zuwoi1oC8oJrihm5Z7WUjea1r7kumF9myxBVBBUUat58PDQCv28ykva",
  "key40": "2a7zdWu61JuWknmrRhkmuajbpiJK2aoA4UVcpDDtGpUxEZJBEBPoSoKfx6JkQNpw6QQTRwA2tP8gwazLhQ1DsH9y",
  "key41": "4v36jYN9Tg2NbkoSRA8acycHree9JrtL6pgJR3oL1PAuQzDwfa4xZ1u4St1p1xH5KZ1MwDVxjUjb6MGDA5XR7YyS",
  "key42": "U8pioR9b6fY3psYLEuPWMqV7b4i2g6XSu1Ssx2yRL8eCPDtiHokZAfuxtrsJ4jGpWVxjjojmsJmp4GjkjsZ37XF",
  "key43": "3CkQJxLHQhLUMbLUxhfr73pZwA7Z7oX4EN7BuWbdqtReGDE2888satxhnfo8STdVm62hu1ArgiQSFnWxexMU3512",
  "key44": "2r6gmb77qyf5aBcCoA7oiQYQHSqHHFBGpRBtBL8q9ZLFoL5isZELGfS9GTh61uLfVFCRS2xNbMfJeeiokqPNPK5z"
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
