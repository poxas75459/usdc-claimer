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
    "4U7yA5RgYaJW57Me1Etja8YLgbY79FrbmfUgiK5gfZv5ZSoT9Eiozx3G3an63zKot8JhVAXf6RcxZFNQfvuQSfag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LDxyTV6fmQAdNMv861bjpeXdsxS8XSeqweqecdcqtPcRSChGbBqaUT6emKVeG2NvKACrdULXHFB2MXinwwKNs3q",
  "key1": "33g2osmUEXUgWsLgSpqvr3A8tjPvbUwyu7s9MfGQJiYe7iPxqEvotzFgyKbM7p6xM9fCz3DVdmyvMkrV2gNjhaMD",
  "key2": "u2NRGCs9W2gJ2T4HjSsPtcmrJr9Mp8Vgr7Q9yFLbS8zB797nDCyGxa2tSv6nBTKeSavmyCYLEG8pxVbfDcCapC8",
  "key3": "9nCtmp3Gbc9ixdtwnfiE9chAWr7GFmwTWT8Wccjg4xg1CyLmaY4SvzvRyVBeVPFrzoaJ5xn4TQWynEkXpU9UHPT",
  "key4": "2uJw4KJgeGWeeLDSV6BpYcQzuFAczYGFbxRGs5926ZApM7sNjyFuyipB2GFJhks351sTANjpW86iMW9LAaDb9nkZ",
  "key5": "pBAQSZwtVn9eAVUF7TFPQxKZcwR9wNav7oLC71cL1WBUZM8hjwxG36mryRkdrJUdR47SkkZtsyFpS1vvzS5b5D2",
  "key6": "3DSqrZosNTNqftYc18ityJbqAq66bXjRJqFdGcTffYcqsmyNSb915oK2TjLNNXhWrcqeJGU7iNmS8GQyiyi2pxgv",
  "key7": "2PyYGNKna3ooEs1NkZA48X5BQh25sTN242KKD4TEv9LFAHxbC36snR1Sk3Sj25s3Ssd43Jfq6Ssst44VCTUThwhs",
  "key8": "4L8DBinKoDq5foHhz1UXebjSvg7dX8DJw3fy3hsXtQENpBY8J92qT1P6yYYYL3AdaPjLW2aQeN8R9DPAD73bXfu8",
  "key9": "sULweV1wJaqeZx7r4E47Gtx2kn4Zm31g3t4DmZcH1VwqbHNcPPkqLSuXeuuoxpvY753hNdVpYtWpbn792E4s7fV",
  "key10": "3LS6QGcgQk4aT2pXcMiKj5Hq1J7GG36pNZsmmpGU6Y818q4oU5yQ1zsd9TQkgSBeB46R8z5zDCXyHM3rtiGUkEAk",
  "key11": "3xMTPvEQnTZCGVXdZi9RFS1tQMBReVR7mXDLMjhshdWLmdeEnrdfa2cCzucFZNisWJQgis7E7DKdV6ecdkgZ2FAz",
  "key12": "25Czr6oUb31Q1jDDvp7VJYGGppnNudcKAsy2dp9htNo7bkK6Hx1CjvjoNH7qWb7KJ16CQVHm6cJEQFrcEkysjZMb",
  "key13": "2HfKHt57xZ2xyMzzeHxYo8QNtpptybb6Eat1GuGHmUWnUSrcx2SdtGyrXc94LBMf8PM21nMUUN55zFtZqtdHeFnr",
  "key14": "33GwnQ9rSyFZzcQryD9XcYHfc5YF1RTaauuGBFAVDmFZMw4Te7Z9aT9hBx4Y3pGiHaP9LgUYmxKtvGpKJ8TGz53B",
  "key15": "1PS24QUyHMmU35yiRmhtgQaqFbiYtU5LXFYHg2dDfLeKehbXMv7gh6QXCz2qg9SsFo5bDMKWRELm7yUYBuptteo",
  "key16": "4AzsdLxXzBzKkHH5KsPy5gk7BJCz4nwCLmoX98mudfNVtqSaREgDxLKF6y8kyq9Dr6A58oqLj21ZwtRntvUT9Ry1",
  "key17": "5uf8qRoNuSpQbHHBQuMhydUAwNsU4gRc3V4bGUTW8sUvLdDewuMLGCojjz2Rgk2JBAXQq5nWW218Key6b8osgG4S",
  "key18": "49Mhbc3gWrKD9r1UM3KgyCrpdrCLNeToqHxxUwDCAijb8qPjJ3MKp1dJUBFdbhvxUJC6je1KE2ZtPmybS9GrGppo",
  "key19": "2fdB1EDNGZMgHES4SJGzSjCV2x7RQMpjqNgppQsNgZv8kHNSAYrrerUvHHBMs7bidwkGf7j2vwkC5BkTKhuZGSoM",
  "key20": "4jFuKS2uXK45ffeBEbsANwyrvz3FtbdssBV4wuasDm8Xc3e1DJ4SoEDmnMeW6k5u6QX6HiMHxTZByYPRUar7ac1d",
  "key21": "5A4aZGAZRPf3hokPeBHZR5GFPvGKfjSSaRdMBDoNwy4D9fX8qnSQAAaGZwFS1HngbCW34EeZDAUk9qoxRnzQxrFq",
  "key22": "4pMx3SFbaTQvdqHrwnefPKqZD9eqRmSbrUh3h1z2yNbMETimrrjtMNJw85SKLHukGYYvqP7dpKGsFuv4WAsUi3gd",
  "key23": "5xVBg3AHBoEdN9mhS48P9dJ4hFVUYhNgVwxFM4jYQDchmLwf8rbBzu1vNTKmzR4fjqgkhRdFhB7rkBVsay8qNr4T",
  "key24": "CApax2pNQ2U5Ho4Sv13nvPyjhwCBts1ZjkZGVvJ3B1Yfwo2JhUL8miDnBgNKwgXiVnr47KzvXr7fcbFpFjYbqHU",
  "key25": "2RQC32sYeo129FopSLJFoqUGHFhJ72frP2NTCfRZuAivaPFy6bY1WxbCMsy3EV2nLG1KJnGq9gE5PHHtQjrSJ9se",
  "key26": "3mKHdtiJEEfx4D5xvHnCNEinUhqRwA9vjYp2SoeWec2UTxreq5HGx5sHiHwseGEYTGg7uQ5PqvX8eaqQv2mZHnft",
  "key27": "3V3pjxDc7qSUCDn41oWTLyfTjo4ZpQNesEMShssCaG2b9AHzostVLZZEYzVD7e2Vktvgo6VY4wq6VHV3qJG7wC6H",
  "key28": "addi69Ptr1CZ2YkBDV4D7iKkhhxv9rrsANLzvNxnVQNT6V6QBFmzV9m5yGj6BAWKD7JzKUrbKYc4BNjL17ajnEk",
  "key29": "3VHKXhkvsDH6x32SKx6JqsPRmdazLDDNFRqVN6tSPe7D7QPg12sE8UvTsZBo41Lcn4d9AoJQo9Jfiyc7nWwVGhzH",
  "key30": "5JL4MmUrcx1SHLqazXufrYCJo1dSdneWEyft1o8KYrJ22TX5gSQYpHP4VSQjF8e4ZcRDmKSKgRMpnL3YsTJKQAtb",
  "key31": "4Mwaneous4bJvvQw6tTPTBecXqp8VsBgAi3NkAQWcDStXqnDTKSWxF6xwmKKkJRd9rhgcyWu4he83HMjcAqhfeCd",
  "key32": "37vm1fgMx6kLw6cugXypoMUM7W78EWSNcvchzQ9Dt5VEqr6FyQuFYRGpiry1zZrdPGuz4QjSvqfkbWjnjHye4ti3",
  "key33": "2KXTG5aSMjVRLehbEUxn4dBFNTXw3z2PrgzbMj13Gk4Jau4MBs96SLPN88YzEtjQeHrExWHM7fsRDA558StkrpZq",
  "key34": "5emMuNTiaBMd7NyGVQZVpDQBrFi5YwycV8NCahfQ6aisNPgGR8nFrnGo1s3XnoaHAK9xy4Cev8gnYVwcDyjE5eXh",
  "key35": "2iARZE1SnH4Ub4k68dhheLFNDNZr3nJws7HHgef5ZL6hq2wkyJ824Tyut252yachg54Fp7UDxwosr2Vzos49UKCm",
  "key36": "31G15GLLTu3V8FpAfHgGZ4sQGVJDEq28CDGSMXxQQ9sjSMZV2sgq6mqr66vghuFxEKQyCLYSQycLGYm2VCY7zA3a",
  "key37": "2bCtk3nfNSbg92uPYfrFaAVSF5n54YBXZQjpivrp8xVY115iwnJmhNMeZ3wzpN82JA2D2y4c3pcW345t4wzG8BE1",
  "key38": "4yJCBNkuaT4HKfPuawzpY6rKURTyFe1ggWgp2bjXDQcis46Sk99A7D8i8tg5koRtxujrWerewjB1vuzjvJi76nYn",
  "key39": "28xUdfGtx68ixYKCAwQUuiPgxdVEHMRetsQUnpKi2UWPGQC26uNoktMUq9dtADxXB3HYiFvXbryLP1WeEamfkZPj",
  "key40": "59SmjsuNYwEVA9kKZHN8rhZuvTFLu2WBcjYxGsdtcbXHsMcNYV6tAXWK1Jn6vjHWgKw5KFCar9rR4DA9QF5Jge35",
  "key41": "33yKofs3VTLd6LAQ614ZgykCdBQcAzDL4i94sMM3RXKVPvb3Fxk5XrSdkjK816KjLFBuN3j6T1Mf9htm9gaZJ7kK",
  "key42": "5zBbGCjSav5UhRx7a4wrqCJw3HshXfLRB5e2VxAuW6eZSRd2Q2zhPCrWqjpvvMTfUfx4iqHcojSm2jGoSFaVWeDk",
  "key43": "4RTowRFkytQy41aS3h7anXxTfaS86uHiAQxPEoydxpJZF8TDsZzNtv8mbvJV91fPS8PGk4GckE5eNmEbT7jgMqq1",
  "key44": "5jrTg9b1qjwvGJqVkYSRk5q3B8LhNAxecQmXg8ywowdcp75MbSrfykQ2qqbrxnzp6aJSLj5cqBD82DX7fRBS2Mvh",
  "key45": "rixrotConGX2pT1CwTFNcSacFPLtmBR7H3S2noAb3Rnu1aposXGB6JQqpXDkMp2vUpaZRmTALj8RAP1cAHAcRmm",
  "key46": "3pGLVU9yYyMWtA5AUFZN556LPjwdRcKiAwirKcavT9SRauSZeogvKsvsJzF9azEVcH5R3F5XZ7Ds1hg3WHiRvMo1",
  "key47": "383ntJu9QUqQA9gvwj22JZdGoc3yGJjQ7AbK6wJv2jjFn88mNugEuLGwfJ97yHoPrZJPq4Mc2QBmuAazxXDwtxqG",
  "key48": "5HBXS2FsGrWZszuyKStpKFatZu4DdYwd5qeGfQ6Q1HSez4dVJ6n5pE58CJL7jRBi5mAwCC4bCVVbz3byETeMw3SB"
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
