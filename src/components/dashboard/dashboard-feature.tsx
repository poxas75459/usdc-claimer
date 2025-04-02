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
    "37mKwSTjtZ838wZTwJHzjtDWENscB7NkSg7FjZMeLtNqtzQPKJvyyKyreGyr3Rh6RCKVZ6FRxQHNELBANcQCoiep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BSwoo1KyENtpVykH3TimbBMuH5XVaf8d2n6QnWs8gv2TJ8a1xS293Bb3ZP7NkMPZg4jm5Yw73mmp2po42tgkTWM",
  "key1": "2RVnJgeSvSvUNAYcKYu9DmrhMVmyXn3judqaC8gKiY3mxpvGAQWc9qJBR1SKJkRskpqg4uPJa29HTBp9e1NntunA",
  "key2": "3HQZvLvjx1iHJbHB86AN8ci5TLyATRcK3qT21j1KDGNySwDeDJN7ur5wbuaRuNNgMDkExpt37gLotmJAPAfkggcE",
  "key3": "5dUmgPWzQX7FNH9gA11bJT84At7nFPBH8mrj6BZawupNuDqocP5YCHkCdJYVLjAGxLrZb2Q9e2pmPV5C1JdWTEQ1",
  "key4": "3eCKDLLLTBQCjDRFc3GkogLvu1z8kLC5HKqqmyrhT3DnhuiZVb8rUc21L3ZVLZZ4Prrjo7EDqjJqvJ3ygiAqiJ6K",
  "key5": "2YaLz7szHFpzCRiyCwn7xGsp6HLFuLjnofLFLPnaRrJhMN57bNp4qqcvSVUP8mXkFEtPR833D33wHvemUueDoV8x",
  "key6": "3uF3fVDPaV9zyFBd3yhb4yLV3i1wrNqqZ45cxwasCiHnhRLrypnbjv3YsteFG6NdeG9BbwGVgHSoSW17EemeyPSk",
  "key7": "qhp3w8ziQJ4XLFk1T85R1hPuFTfmfuapq7yzCW9BLDmijJiQpqLCwuG8MMvY1a8PiNMTiMCf1QSykERwukdkN69",
  "key8": "2r4kkvkWoN2qWhDzU8T9su2QAjidNYgFUkyrinWbJqMGwrk8p591rciqguzZJRG4psVXTgmmiTTZXgAxgUB6t8qB",
  "key9": "33F1qdrTeab3ihGMtY2e5RqKDupfXmjnnyafFZnbX8hS57mrvWATCHWpBbpE9KRTdDHx79rGofXc3Tdozj5WC5Ua",
  "key10": "61PyHfDEHhKj5Gbz1xW1Fkvu2T2oRfyM3vK5bKUDAL9jSu8XpJNEDWtHxFZwmYkxcD2YFjKziWFaPrK93uQikjCx",
  "key11": "3uwAKf9uL4dXXJZremmuqEy1M1sgzLGtS5rRscLyEMASABqC61nGRrNkFwA7z1wAfH99TbByFQHk8Zrv5HCG3qKP",
  "key12": "2RWKSa3b9FPRp7y9df72fXPgxbQ7K4WijsUPQ1zTWAeLXDESaykvdZiGJyZeYWNaHVA9GAN6ZcjyrRPPFNKxBTgE",
  "key13": "2bqnA1RuFvDAXn7ZJFNeeDTMWRu6Uaf9PsVPUKkC58PVFepRLnCsm3ySTvPboohoQWAZRSiCme6a53W8UyKAozp7",
  "key14": "3DbMFZaHEy2xGWifrcebGSHgtfmJtpAekeHMryWjoPCp9dfLkn8uPMHDBArHsAxMeqFF54wgZS7hBtXx32BN6Voc",
  "key15": "295pZjmzqoipdS62QgAZpKYR4vGwS1HD1mCPEpphtX8YL9Y4UGsyAkzyQrsjeWR6gJqh3eD2a2WKX6K5a8kSdsEr",
  "key16": "3wzWBmyUHGwSYRHC7WxZQ24dcupps2bMBZAjsco9JPiDksH8GL38J6P3SY2ehaCSpaeQMGU4PXtsikPb2bzVPBj1",
  "key17": "5xdVE7hEZWVb1adDdjs2i7MRfQBMrgRcRVJMMaJrhD83uFH8m9kxEQLnJow6Z16NANwymQknQhZfj5u8LEU81iNE",
  "key18": "ExLqo11dw77L8Qf2zeMVJptXTN4w5FbwHkAhviVuiho6sufkuYxdnshrKQwZGFoof5kgC5ZL9cWDRTpt1c229xS",
  "key19": "36cj7okmFTaeytM4hZ9adZt7YL3xWjMhPviMDugtgDjMyr4oMDGBFz1GYpoLKHCawyvy2zMzyFtGoZjdN5UtmW6Z",
  "key20": "46BcMqooa1xoGowPdFTQMAUiipFWK6Q3T7w1iVGbZ7kPbtmbvPnJ7FWMS3YQB1VNt5832YXJq4kg7zvgZM6UvkYx",
  "key21": "2av2rX64nNfPVDkDQVjorbANTbhD243YUc1QVuPnaDQpPs9MbarZ9ZFR6XesycavzUnjhBD8kVxUkS5soKAHLaTa",
  "key22": "2Q32ezTtwtR1ngeWrshNggibvDyEoAZsQ9mgkTVo46Q7EDe35Yo3vwya57SDdRnriQhRfPR3DijJPvM4DLETDVtQ",
  "key23": "4gWzM1QdCMQK8xbNgxMZ4Z6p355BDuRkCJ1vh7t4iJ8Z3AMBWvEzqMkS75hs4BRYzTTtvxtnPaRkxkGhYr6h77WV",
  "key24": "3ukyKXZFEvR72pQQHay1nRkXePE1FshBFUVqF8jigjQYqoxvx7oDDWD7Jed1cGcjHqEfkUizfzGD6VuhDStZzYv8",
  "key25": "4nFRJQwbmKGyLmd1yVfkwfb4WhdNz66Rk4XiBDqgoZyXhrN28ki4h3xs1Cg4DG7hJNDgbcuRAwwB3ZXWADMQYHUb",
  "key26": "2DsWCYMYsmKXo5PJHE6YLZ8uW1jyTtg9DdLaVhhxCXBsLGT1Hd2dtPzwxsf46rbSD6v4ME6szeGZXCLh9nWfDiEh",
  "key27": "ze2BjNJ89cSYM1fjZeeJXYXrBG8pCuPqrGPpQN3qFpeeENe7SeW81SrMCUQskfFRaYgAhx9Ug7MJJgVyVcdn9eT",
  "key28": "5utRYrLyLmWyRsMrK519D39Zp4zTXngUc7vcinP9Z2Peg47iVzckHJVWoUV3qwnGgjdG42h9y6QbmetLB9g9Lidf",
  "key29": "uUpNXKNX7cgy3RL1reCwKNCvzHrbGRWwqWXrWuTrkkMrvw1c4CcNocX48Qo3c1V67ztshM5FyC6EALg6dcv1U6n",
  "key30": "3TLCDBcezuCgiJcvB18gpdFXBBLs5ekVVZxCTUTG5ZfWjjZ7r46pugKEkgoA5G8BgNzt4NVQ2MDxoaUBKfJat9mS",
  "key31": "oZvWT1SYViPvGMNDvJTxEHG7kzkwQAbkKzYBT6NqnhDH2Y3iBxogxBm5T4cgxrcfKDW2bsJWcECdjVwy48Vy9rY",
  "key32": "4ULZn97Waw8kbXmRvgN4VMh9X5VLGX9ouqFvd7Wcb3EkBwrxQJHvqhDKGAtgHuFizTibBHYW3JASwDzhBxSpKdST",
  "key33": "AFxWrJFEfhimV2mZmcF3Ds634CjcL7heNRFkTZdYMzEwxYzwFPmqVGkcFW9VbiJoW36QQnefiwcYWLGEstgF8R2",
  "key34": "2jZZB3QEZ1HJzt5AhtkpsS4nVhzcsRtari4PH7btQUTRjKM9zrCUswCLyJ6aqaZrrQDPqnFhhKuCKgVTrnyeznXy",
  "key35": "2KH9scdt2xkAUPKXHRVR9GaLSKjvYbELv546xd18opEpkuHbnMSSHURQPv8279Jr8PbYiRtCug9dBczS9aQog41s",
  "key36": "SxWLvh8zK91F6AC5eQ5ZA7J5XGz6Gx6QYA8UUA43ypora94hHrXSwrVjEU44uM7yuXsmonu69BG896kvamozHbF",
  "key37": "3XFhq9oN1fa8EEkSgXMKQ4fTuCg3SBRz4Vuc9HtjL8WzeqxEbv85Biwhh9HPw5c8Ca1v6mWjQ3EcYUhkiiuZbLQz",
  "key38": "4rMez2LthNCheAbFjxGRkogrM8DZG34vu2AJk7dYk4Apg3Tj5V3Jjjwjep9HhjRUJz1TZHLj5p5yEhs7xavHbRre",
  "key39": "4eHCcGzMtoHQs9PsFdPM7ph3KTh49gZwZq23KPjtue6eaeM5AAnTmqjqUYj4EV5DP8jbN6guZGnagdVRnHfHgKMW",
  "key40": "2wjNQ44zuTg4rwxvHDcXAxMh1MYtdf45ewqFk9pQaYdjursnuxCqjQCmfPvhpCVHFVM4UJR4C1tFBxZrQbUcChPL",
  "key41": "2SDtGQAcuqyM27WxWZCLBLRyHbHAYa5eX1EmbBBqmBfUdvMHS5uoiUgfGpm6d9XH2JVUc4TkTCGS7BNVvUgQykxU",
  "key42": "5AAEtZQmaTRQNNWfBG9p3FAy8ymsBwfwkwEN8C4D3gfDrb9JGbmMykPWPSqWcbL7u3G5ah3R2bu7Y1vW54X3RA3A",
  "key43": "5KrPZRhwzF9kSkYCoJEWhRA4kL2f8Jy4gjLzAPdCezd1fBKE9eWWDPPQhnpbo2ZGKr9aX6rq5o95Uc2TWpdW98W",
  "key44": "2h3v9G6Ze5Uk6mmfbiynzMvqfej8vHAkZXWzhnMXhbDSb7ivZCCZCcSTMcr6Z45fAkb7vNx57sDNv8CfXmqGaLFk",
  "key45": "2NkCq4CtKtGKSg8hQ8dJ5FAJSGV44s4GKjNkjRfcnwDTwEUqShDbw3KXUEavy4BzZwoDbpxnv53fSCQxkozVxpos",
  "key46": "2i8Umzab3Lj4iRnpaMVSWEGdvR5XFfH8TsALLX8wwPCKLpZrF3pNCbfJ3J2fuggs4uWpeBcX1seTJo62EkHm5fL6"
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
