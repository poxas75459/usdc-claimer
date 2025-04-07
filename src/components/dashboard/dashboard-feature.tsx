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
    "5Ur3V2MLsJoee4ngSAKNp6rSDotCnME7xQ5jkFtXoeiDGnk9XSUctXZUYUiWc5rXRHJMnqJrspnA3PAwsYkUH46p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e4Spsyq8EDCiPwdn92KU5YLwTL38bKm4ddsAk315N5TTTUdQpm5puZyvLLK2qL5uzMPzqW4mMKxxtzdL1fjGFro",
  "key1": "7ETY5oMFqL1jBPeVHrSrbZj4rebqoiJunZmtBWRKW8isdgZxAudGwqmDF9sVh3HEdWRd9RT11vTJPHBmj5khnAC",
  "key2": "hWaTERqQCHhTXh1QiDyDJLAQNE1YRbrHpKfUmmdKi9fsPyJR85cqzGDWEcqr8NeKkUvqWYLJm3KTmup4RSWVyCc",
  "key3": "5WVM7aUEnn8ewQbrfw971pThV6gYegGNu6FrtExercnzu66GjGELRYM7QUC5CFCSTjCjo9zqPMLtxX36VpYCsePN",
  "key4": "5x8CkkU4aPq3dAy4PGaiNT1rqHcAj8AuKyPrm7frt2izKDN5BVa6Z1ZuTVur8qzzYfjsiwe1gwhKrSpc79oYLPBQ",
  "key5": "2TPrKGrtuyZ9catUJ1CKFALvPgx367FtG6czNfxbMZAuqqYZiUF6ULXBqbubfifGdjgvctdHra5NpeX2Z8Mf5Pbp",
  "key6": "vXLpev6nY412vWqqh4K3PY9UfhCB58hprqc78XxX1vvjQvpnFDZvJV3pzVdQERBN8N1JZLg7ofxFg2RLR9oKqJS",
  "key7": "5MsF9W1jk3xd7pXLQpDwnYdYkGQiU8mmpZmS5aYnJZhVZQQxctbUSDPYCRRCsfb9bjvxy6RxtQDBALBjAwPjdXux",
  "key8": "317AhXv5zCTp63Nd2zpi1z4i1fuRLLB6G4ZJ5HWoVj2gy7FFGHFXQiYbPaqCUNZd3UtgpMTnCijdbfTAAibtSJkB",
  "key9": "3GGyRWV3DHsSzU2uEQDo7imoHEHv5ct8p1CBjE7niKoGwVYDWx1LJyeveq92NKGPaTtmwsd18sCAh2CkCKwHArc5",
  "key10": "4r4KFJDdwRSjrpvHwSJh66WLofiR9NnCPPq7SstQNpAeUeo35jc7rPfjqpTqNUMrVgpKne3fRVmUAjSTLLRzZK7e",
  "key11": "3vry3w2zorFkkimATmz3TtkcZtVRJ8vEyLvF7WkXDRzWVy7rBapqRbFdsLtvkrpGPbxZofQgHhTCsCYd7hVFQwXn",
  "key12": "5siyeaCKTdqr3TnVsqfBcSKZQwy68r5FW8DF46bDUkgHCaddwxqqEhdw6AwYsi7WzTcvsbLc1zYiY6kDHdtrn7Eo",
  "key13": "yTQdWjJLdQF6k2LVV2gKWDdoHCGnAtbTrrnA4opAarn8XJFuWwJW3dowFcvvJCCgjm2qpk8LRvW1drtjcZEELzK",
  "key14": "4ckTRMst6yHqCDaky7tiWWNYuxTNb54cCA1kHD5hm56efedmBnrGp8DVc3h6QFbEorBGdMomneCxUVknqf2Tandm",
  "key15": "4FVFukqhBAa8irPxuFX2EXN7qhD2zeon4hfYKgBdHE3s2tHjQDia1hYs9rAWetuE2bbABrBVbAaa2Dm2qpMcjKbZ",
  "key16": "2SQc3PVLwkRyVtpdKLCprzPH4gKL6TKMuAssz3zSjXXHyywdLzoSjPM377BHUKYn3yHf9soXzNTkrLzpFqQHU8Zc",
  "key17": "33NUM4BBTZf8NKco8NzSeoAFTN4E7Pm5miatvHjMcyV9eBraWvrF4frCzhWjZktzhG8d2kws51XzpNBAi6pptEjB",
  "key18": "3RqqAbMAmgMADpRCfeuNcauznFvZ5Fzrhq9QpqNb7tWRSJQ5b9oSEH5nQn1M6g2xUShPuSVDpAm4UTS3Vnxz7k4J",
  "key19": "EtXRJr1EefoSKxzYPv8jR3KEN7m8w7ua9fV2oh5XDxxEcmkViRxXkD4MjYirEysbRosdw8qddSK7LBxZKkETfNV",
  "key20": "96eXMFymF4Z6fqjvb3zd5X5Bf6yBG1j7bTHkZvDFPteQNcmbaZNisEkFQwPZSj7a1cpMGwxniFZKie7XjGtp818",
  "key21": "57qBUgSDMnAhbMkenHbt4CVMAyLxqzknDxQ9eh4qyQ2NiSorA4iFnebvDrM6gvsYcdDPwfJ7kbkg2kteRyosFm8q",
  "key22": "4Bxq9UJeG89CUsYFkjfbgFfH9kBXYhCDjXWQ24411VRyNfAJrrgduXShreqoyvtFLN62r78p2miUJQurMRVv3F5G",
  "key23": "2JuqkmyMGxev6GALpbxvfYq9ttcgeEJiytkU8LNHffUW31ku2q6E9FGTqK2sWDFConnYZA5gNEfbNDsCUYtat8xL",
  "key24": "4vfpsU46zQ2PheU3nMpGvh6NvdB6KW5LB8kqjz4zMvDwRqwudWH769bGZC6V8v9nnDMhjwntMDFMYWd1S4EDrZMR",
  "key25": "67DyXPb8ZNHHB3LnCdEX4f5FFDBnWArxKUH7jshMxY9WsFBAZr5ocEoEax82RAuJaWf4AzWiSwek6G6sn6uxR22t",
  "key26": "HwoYQdjhxLVVQkSS5J1ghCG9pzFYjGvgrp2QVa9SftbKtXWgnQDu2httWEWKn2UHfVBBvwgTE5ia4TjCjBf93U2",
  "key27": "2KrtvkiURxtvDymoDMAhV3k5YQFTufDLSAuXWnyYmqy2ftLaqRQzgYeKrjR2anxodDdpKA2gXz3HDnGFG3eE8NU2",
  "key28": "2tNjYUHhyk62ufdUnoDAZZ7dzF8CojkSEAxEjT2VHSwtD3KX1crTBmW1Gjr8xKiW1nuCwnDwcxHk4K6pLS8p2j7W",
  "key29": "2FM28FvuzEp3Vdcjorn6GMpDLWazoaE31JL9y2gpaytrJYzL68FpydSvFTH5wcodUcM2wM9HErYupDtgEqhRriyP",
  "key30": "H3qqgev3QoByyRQ5BNMaRzSW6TXx4CpMiWjJDBk8VLq8xe4niSBU41it7H7x975E3gr1pgewpRP5FAvEXenh11m",
  "key31": "2pYE2G5pEc5detS8uXJJfUtfjY9S1HmFK6CdhRjghsZVhK5kdGH8ZZpPzvHPXbGQBsVmC28cYmTphp2etepmxVtu",
  "key32": "5h2nocD2yycTPh4TsaS6LdJsrMuD99J6jxezAzDC9nx29yyraMryuuWDNKrdrJwkFMP8X1qy7YPK1Y1nWJh4DTiH",
  "key33": "336acebgmoYrqi1nbwYadHRXx7cNkFK4VFEiLr18AG11M6xsJzF4Mqo9EYcQ55ZK4LApqgB4cNyBjCQjbWxo3TGf",
  "key34": "3esAwgFfM3BLK9u33SJi6pUhB4bhcKvQtt1JFxx1n9S9LEu1aghqPgMKrbp8ngCcLyEgtcSj27efYDnywtpTArxz",
  "key35": "5PBNHN6LhMUDjJQZzLcqZL6ExwXtifj3W1ywMwbwydUaX5wKfsvEgc1msuLL4ejrstbGwUeRvaVT2YuhhYgEG5NF",
  "key36": "2vkHzD6vCbZJHV18jEAWSJe8v9ZJWLttmJ4PevDPLV9jF7vnbaCorHxRXi6ET1fcS22ehxYW4y8QZ6hzXQ5nS3z7",
  "key37": "27H3ouKQ9MJNxtHNnjcYshXoR4PvtYpZmdujr1tQkKwh2ozDc22Umneu2VhBhjvoLsRBCETUhaRG329pVy2Ya3d2",
  "key38": "3hrjPWNAYDHmB13kqpxEwrXeRyCSQ4SmEaTPZYin22MRLJoJsxToBSL2jVH1gm38rEWTGSkASrt23wfagFb7ZgY",
  "key39": "3YEL8PHqMdLW5EmYgvrBvNUC3W8SoXFMLQdix8GHPNsuDctBfB8pDLr7rctDoCfZVvwmYV87rdsV3ccXf6ZXiTUM",
  "key40": "3xeocB4XucjBG5uKdH5WvbPc1qMqpavothA89MA38M34jgEao52Y4vn1rvPwBLMMi3LVNzMevENQn7va7dSf45Dd",
  "key41": "3SsaaMzxRc9KhPwwEt5Mxc5R2dc7vjERbM2XYxG2YM2nUj4XvGY8qzJYxstrsWeKdUhMAqfec3q1jLjFcRWj4ouJ",
  "key42": "4BYztBYJxiiJSC7Q28Rcys2gw1PG2vBvJZeZm3bxt5brwH3gPPxXKkk6i8K2UrH7MU6PvmiGJS7j7ZrsjaT7a26b",
  "key43": "2u88nYNtHWNYn6eBWguw4uEHLACMBvbCWw7ScjvFrq2iZtiaJtMTt8BKLVdgok1JdTYQn8qDnoWUpqaUVhrTLS7N",
  "key44": "55dRqrZhABZgDwrpSLviAqWw7D66F2DXV6eTL5Y4WnMEPfwcpzGmch3SDxkCpSQLC4GsatgvmEmPb2VD7rtYwXAj",
  "key45": "4rmaWXAZamYuwVXh4gAQqBkypWcJnHn9ZD8GQNA1mqeNAPTcVbus3rdRrgT3gbbXvpCg73qGCJyXKBCCR7s3nUze",
  "key46": "4SnybUrJLHZi8MoMSkzHahMXqEiVGjeBU2YvuLhwF8qf8vmhLW1qss3jh5BfzwdiXFsGXKtpoJp3CLqpzd9HqxPM",
  "key47": "4jNwHVCbsMa5rd5AraDzgP4CczwsatjY4PPYPoU4bGnuSWGNVWiytcfumTk2XuKTdso1gg4PRFi8EyQFXZCajPEP",
  "key48": "4UZYAwz8PbvYUyDuX7uidNCR3gnLqVhW4JYpnc9yHNYernftSxaFhsyFpQkdsnkiXDLsJK8wD1iTT8WTEvajC64S"
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
