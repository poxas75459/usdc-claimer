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
    "5seA3VGu9U1zs7obd5aJJpeL2jVcnx19kati4ztcMLPgXgwG8EGXUEuPfRhBXybPBdGm2QYtKx7trusHatfA7a8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RQjUMjWxwgXfEJYvENCwPkP45cDYt9QHtvJVQNLBkx8WGKX693K2eGizwkc8igRnF4BbJUQ2hedCTXkXK6XY67a",
  "key1": "4CnR7FzBbR8ipPoiDsNkda8t7JChwifJGggzAHK82DZhLHcvihtaExjK3L9YPK2LmToJpWLXMvsEBgC5y73dQDJ7",
  "key2": "XnmJJfjsyeZF5H4rNpreYufmBbLbsCKZTedMXmNq2z874Crtnu6H5Qm1fvuYFQpU5hTgvc5KdT71wPTdQURPJ5o",
  "key3": "5hcVhCbCNUQXAaLaDFYkLxddUdRxiyynzVxSkJcrRJ5Pyks2Gf8SN6jo6dcbLCNkZK9YS6SB2wrh8wa4a3LqhBkE",
  "key4": "4w8DvHKyYKuLGizcbVFFPJNTav2CkA6hJrW6CEFB6Xbvct28Fa9MGiEfJXxvNVMrRQRGbtTAHQX8sQTimXN84wBN",
  "key5": "4B6BB1Ks4QoNjpzbvJwWLpUu82AtVkRhE918RVMo1EHWqYu9tPgRvFEXLCsWMm9DzDYVkJUzZVaU46EPq8J6QZA8",
  "key6": "2A7rCH5uburdkyJtyDPyPfWTYaWvUXzyjUr4qZuG4mvjjMhjtoHqKPUmiaLVWrEePVMysf8g6mWNAzWR9SPN7NjR",
  "key7": "4b6MpSZGwDfUasdpbL3jT8dxm8QztgA5cm9hjCw73XShcvkCcxWnSRPAdisN2hEpNCaGTowvKe2QNpyEMd15gbjN",
  "key8": "3VhX342Yn1kvijhSB2q796yEyH48QXYcpzFePXzjWiUfmopzDhRhhXf2HSKCJFYqmFtGbohxv6L1TrEhkkhvTEz2",
  "key9": "4sdMaYHafKy6z8gmnLnukjLGV82hrpcfjuPHH4iwwFW2yXMhFHtvKh6nfYqXLr5Z7GUj1dJDf4ktzxSmA7UxKWob",
  "key10": "4GFd6Gk3mWg9ZCRvx5mwCMLJoxtQfutQsspRC8HCnfd7Tn9mkRKKkHdyKy7k9DHtAurdoXW7bD6oXqJ6H2dQSZEC",
  "key11": "45QhYXtSw9qohhUBiFC6cGn9awYKUV9bEi8h9egR71Gz8csbAQjYrcf1DNYzEqRhP2NoqByp1FshtWUGoroiYbQA",
  "key12": "rbbZfnB3XAWH39jji4W5UUcTrWTjpzdb8uQpYE3WeZhUW8X5dx9Z5mKzJ6Z2KWV1yc7MCqein7GfZrH5a4NxgFs",
  "key13": "5VmaaTvuPcnY6gYeLFW6QDgs5aSev7JnZVe8n3Lr6x8wwQpFnBTv5ErDdaRHZG2E7SwLyEmpVLVpMmsR1B9okwkU",
  "key14": "4waFVucKzHHVhTgYZ3bExKB4nYph45wJHizZSBv9reZ9mpzAaPJmMGRHE3y5HHs8jdKHn6uifppPzYzeWx4Ai3JX",
  "key15": "4nduqFZeevxNfAxxuaU2P7auTGPQFjX6UxZYovviHyNFvU3BXoJgWfinZ41B6GKkLuAfEUHqDPNrQSnJRyvFsfTY",
  "key16": "5aDB2AD3J6LPxEkUWBHyr4uRpx44Nba8woGvFTeLGeVhRq8MoACQ5LZhzgQzznL4i2ggoMJZBUGPK6WoLwLbBXBa",
  "key17": "nTjvLJwq4ZGcWpkCvnca1pgVLTRoWBq2JiaHuYibhv5vipD2ZB2r5bdW18JzDQD2HjNdRGNfgbPwjTwdafoKwS3",
  "key18": "2xvjjLAokC1uTUUkJXd7ZH6odgx22RQqHT5sgnjuM6EieFkNAxjVF7T8vRfndS1iPkmept9fz4wn5RS4V8sU3GEP",
  "key19": "59dQo3WJtGRidqbmjxPNzHQbf4kS1XqF3w5kzHTEzrfuH7T1LYMFUdrCB2tGK3A9d3iM6dakBGirEyu9GxqSmZpJ",
  "key20": "5hJrajNFvtV7GfDMaQFfAJ3ZqP17NC1LnsALmJbhZnqGfsYZZiehoEKcvjXdAjaK96bzpWY1smHoVttr6WrawsiD",
  "key21": "4NLPZGeH7zzJJFdt3u6VZTXE2T3mRbuscH6zfz6UFQsLR5sZQsrsWNt2a1UnfwrckcrVuocPi9UBHiN9QyphqH6F",
  "key22": "4c9r3p72kB6onm7yFqrRcFtbrGYHNAa1LjSBcjczDWgQhKBMBpHd5MBtCzfzwzeVPERixQ7RRH6ixEy9muEC7SYF",
  "key23": "vbfHgo9vXPrvu5Rt1ajryuUc1BARSNjyLQRugGvoNroPZrQuSWojojZV29NFysaaBkmmWzQC92U9i1YAZNPP6jw",
  "key24": "3G3mXkRdk8dy1XUZucHPTvJbNEDNb6kESZuzH4nVf6KtP151biKg2ZZKBhJ4RvYy3nXzycMLYWoApQuS46rw2x3u",
  "key25": "2xX6MiYEq1HzzTvu1ob9Qea4gwJ5RNT5UqkLYqVwXjPaEkGpAdjvTAMbPG1DGKfrpepJhM4yyQCJ14WxV37AwEcz",
  "key26": "4fgvmnRvYYNnwD4aKrAJKjnStiGCvSD6sYja7KUTga4Fz6fvQfyx1XF4QJ1CTpoU9P4E5n9poxDm3PuFFvXkswSd",
  "key27": "2cQXRef3TgTr4zFsBME4pRhPJ6HUQ2Q3tq9krynT4rksvFQxv916f4J3W47EXovUBazVkQgCBZnjbZEBstGgcbuX",
  "key28": "24naSAkoLt95HY771uszi93vdkNt9xrhec923WJYoeKNtW6hoZteahDYsUkYQXDcAm3CFw5tqVyapaSTs55MBQf7",
  "key29": "67VEetpJ1cHVABPu9ZWj9nFDoRHQifuQcnuJrFKsHFBwSoqvT676t1EhwXC7XmMZVCywaswDp3EQjPG8KP51ZEUR",
  "key30": "3Hwxq359Q9txXjkyRAqEH2rC6r1kGUYdFqJUh71KTjgJEqSBLmkBcqC72DQ5R34wQrCaMhF6NvsVKzC3GRE6KtJ1",
  "key31": "32XmH1Vgo5SqGPUi6YqVwzxbLrccbg2725rrpnuz3jy9egFaZwzwoyQ3Uvu3cox4QtirPA9Xtsx4ae76nUjCfj8Y",
  "key32": "3YZn1af4tvdFCJw1Kk1bhHvRvFUi4d6hr28VA3cnSE56USx1C3Gy5uCjwDLeEV3jCZne3RsD5CxjQJ9UocorGcMx",
  "key33": "2wnC3S3qR2tp478voFg7cytpNYiP5LQ5BQh5a7NBjSvMRdnUcxMBh78HXsGbu5xGXiztaKhqJ8PYTdA216S4JSfu",
  "key34": "oZ8EpxaNKt96bYDvH1MHGX262Vqhs1B6WFX7d9Pfx42km2TgKNe4fzBVTojgeiw4SweWzy52bv1WdSWWn2QfnmY",
  "key35": "3XKrwvLYyKKRanADbLnFayLfXZwoffh3XZDyiqTgk2nUr65TgttapCrDrzxVnru5Js4RaZtanqZa4A6AA6UR6AnW",
  "key36": "FziXENvr5r2BCCrwMcBWrCAFyC6wgM6A8e4YmxgAGVDoD4im95UpJEePuzatxnmKWY1JDaT5kDa8vwmfJbAQXAu",
  "key37": "5ZDhpiQHtZFF3rkESfACowQpnHA7pA4ARTebRZ33nKFkfMCYaA933HTJttLtezrJVVzkcAN23u9K2acRm9BVR3ZZ",
  "key38": "2RRrfbLi1hgFgjTMDQoHpViA21S7X3K6ZRWcFGT2HX3xogqhp2FubttEbgnGQsuEqXx5nxVPmdgBTKuVoJ4wXV2U",
  "key39": "441eBBBpqrqb8Z52nfsYa8KRL5ybobNAmgkCU9HigkLTmZkLc9ig5rLsWnKR8neZ4iuXkMw99UopnZfDJDDc1ii6",
  "key40": "4gWUKSHpcC8jw5JDBUswRULUk7znvsyHxMJotixqRW3fh7iGqB6SLX61rw86WyjmDURpWLxwKrGdojEgUpBUTNvd",
  "key41": "zoA6wuBttkE8tApjL4Xmob22SZ2hX267UvRtHf4z3gJNmauscPikKKh5BopuAF17M8YVLUvzjVeQhmgJNt7exbU"
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
