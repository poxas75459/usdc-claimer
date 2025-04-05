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
    "36kgAAxKj7yBYVq7CvpRkV1Mf7uazVnKMagZhLYCHEttnNMzf5X7VM1YezD9pmch6BnAVoT7zRR4KsGqQs8NNxo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z5Bay15MQtYJA473AC8dkoBmfNrBGeVSme4EsgyhM26uXgdSQzR3qmqwN5cHTiiqdxVcxjnugxqSC3QgyZRM1rp",
  "key1": "4Lw1AxukceUyR8xQMyKmNeHj2PBPQRNNWtSfyB5mdfW5i3HrK2QhZGoyJtKzajZLbG1GxKeW6ZUuVz62pRW5rwW2",
  "key2": "5AqYemxAz2yYLuhqNc271eDDpwjEoShs7aqrhp4bnkU9WXcCbem8ngHpQkb79TCNU7wWDFWHr32acH4qBr49XnqP",
  "key3": "HPr9V8a69JnhZ5pVusigvP9qxyMshvRoE2pA8TMUWzR7KRwZAbgrwEPGUhHc3MdgDSAJXja2WrPu7PLYrgSB8Gy",
  "key4": "3MYuGhW9R9x6gsTWH41enqUotiLEPu1SzBcuoaGucqe1yrmZ77GrqvVXqXTdgjZqmZdgR5B1nn3BVyqWarVWMks3",
  "key5": "6qceKYPFEcVCQWKsssiFmoHewqUcVvv1NwHu8KJ9VmEZE2VkMeUJziS6eaLn1tFVcirPcjqa4BeBDH9vmYouFAb",
  "key6": "2fqsmELFev48BT6gft9xByKomfNnFBJmUvAizK7fXRCtprTFqnGibR5tcPSxbW927i8ZECB95FuHA7bC6kqvTmby",
  "key7": "Yh9gdCo7Qh5uks5yhJdYHEyMnBNvpxCH1HA9FrHncXLZM8VsQVLtto8Tg1acrf8w5ncL8vegQxgWvPLPcPWYx2k",
  "key8": "4phKS3M1v2nw8qkmWJpmG4bULioMS5E18WXF5mMhKWAhBmtw49kCzvmrNbxqDmt2NNvx2W46cU3W4ioQhxQP8znk",
  "key9": "3pbpTowxaSBz6YjbgFR1BxcTwDmTLDGqYMfrdzQ7RRqwMyd4jBZKPBV9zzDa3u2ANyxcRf9q8KzuznNL6YZrDf1j",
  "key10": "5ViqTwkMKXETrnDfL2R6ijmHZ8Vn6rGR51RXRQVgyGmyjeRb3AHppZcEDc2DY9eReYf8Q31WCqpPipf3fvhBUuoB",
  "key11": "31axGcxJSG5LwX3WAx1pD9qCouae83CgjRxUBWyqGZ86VE1ka4Vis4UBNn79sMqXRq2wExVCTWN7WEb6PFR8RBVV",
  "key12": "4LmCuTK5khBPzRnxRMxvYymTeyNmwv9hbNFLC8JkkpcXVUZrXj3nPbmyYuyWkcpf7ivd9JVY2UZDpxRPjsD4dEFx",
  "key13": "4AZgvXXm4ArNXFpa15xGZgs8SgHpGL9k5pTgkhDXeRdmb8ZRPYz7Jt4vErtxubcLvvBWaRj3Muvoso3TTm1vDJju",
  "key14": "27K5dEYykQA7cJ3BNZgqm1gntT55Ugv3bjUitCH64cPVLJUmemaTL1yVkiZR45ftX5GyBSk2AbDJ6VSWZ57x93jK",
  "key15": "5XEYNG2C4GFHVCSu5sJjeMW9tADhkQ5WZaMUyABh4RBJCnd9yYPYCzUSxzPvvNVm65zYB4oqG5nw8P76xHonS4cQ",
  "key16": "2vtWGq2LUc3Y23LjAKxdAE3hcpti3MFkBsAbi5CcEC9A2umfHLmTvFbXNtQWAWJabs1ArzU1sC6mFaN2ndASkQ1n",
  "key17": "421UzLFUAdF7CV2Xf8VUJFvL6sAYNs4mDJdboRSvVBwRAS1TwgvjEHsowY9NuEL5zybLMZY1w6EitC8y6xyoK89a",
  "key18": "2W6CM2psDqHtNxGJpjx5ZkLpVknvDJV5UYd1DL8p4ScfbARFTD7wFvxxti3rdfDDcFJAtpgdMAmtLCSJZoXVcGEX",
  "key19": "4FzHia6rXLrQAahK1gnw7JReBKPSotrYacXek82MytUCVXMux267xg193Sraivcjyxe1MEYQJePtKMCze9TYSioC",
  "key20": "4UEDQN6Yt7Lr6WKsth4EBuNz5toisgH5P2xuZVZ9wfu5Y4tscVbqxELhQ3Dn72cZ7evrbPYXNDjNu1YdnghKTddx",
  "key21": "9D8vp8BVF6q7apNNoqNrbzWAF4S5Gjv92qnop2A9M2XWERpzwo33ySiXB8XsKdqXqAtEpA52bnwBqNFmqvFYFXQ",
  "key22": "XD4r1Ea8yTntD7jvkKAPMSYGYYqc7CMmxxmEbX3pUzSjakq9aLegrYTfMzZACsgTFqGFUeZVX8mEb9MQ59AT1kv",
  "key23": "2jxSWDYvruhftRu5D45biUh8dRjWBHCbqhgb78dHDamZynPTa1eqPBzPN6ddHtqFGvVSNesk8ZNmupNLeCF74Pj8",
  "key24": "5MhptTCnNZaF9PvMyGS75qHiQUGCjngqEQNaSE3sJ9iA849ajFG5xuQ6h4sreRMR8LCVTPnouHjx3iCM7BS2ycr1",
  "key25": "2ZhPSKiK6Wz2Hb82gxnSLSahoLS1CmsEf199BFLEchDwnsM9TKDgy1BmmRD5vscuaZkvWCJ97SuYWKmDixV9311e",
  "key26": "Z7j6BnuV4y8yg3SjEfi3wqSFFnwDS9zZAdHBZGrCVKg5VDFg8JQ1VX5G5h8KgpiGyAenu3BFZBFtyrKqyKXV4Cn",
  "key27": "64bwtZfGJWcMa1H3rwLUkwETvMKZ2Lo6VuYpRqvZYChsofVaHKads88qD4cQy75nbKLtG76DV1dX8E4dDrMarjP6",
  "key28": "3HtivpAjjXmpka8kvhBT1qS1SckV6uwuVH962unqp4Anm4QuJrW3N4m6bMvre38F6az3tdzBZ8u2V4gzuEaCxxFe",
  "key29": "syjpLDrMhadSoHzJGxV4FmsgbyfRmY9mKhxHm8YPUpC6hwfQZajVma7dy4PeAVQHkg56eNrovhrnMHTttQufhCv",
  "key30": "5hvvacf7NJW7cu1QDEy1qQAt7eRp58nLzf6wzrfmnTDhudzKv4sYbLGYW1dxMDYUDRLNCVNP7tLfPRy3xpzBuVkf",
  "key31": "4juFXqqZ7jWgpn7H1wXixacDBu96vaoLTJ7kjfD113a41HU4Hizw1gUHgVHduTiUi9LJEHhDWaj17bEhw65yMBmm",
  "key32": "3bPYrgAsmWY9pmaeF9VwwqsGWVpVGepdJnjxN9oB5vQa4BZZd1Vv6iaPQaU1N1boW4Dbz2qQf2HKHMubuTZtWXWu",
  "key33": "2LWMKB9e7GxJ2rSPwtbML3BxNYmYnApbQunofnc3V16RNzeWA7UH2Jzx5fF4MR1WtsnHNFUD2X5Kp9Jw2KUSHfRW",
  "key34": "5sEVa7ekWfqnaYqmJG83WFF35maTcM6xu9vvm1Ku9TYhma2M7S9ZSK7UhGaptKr7HTyB7YtZvH4o5qreDbKJMh8R",
  "key35": "5URyG8WVqU8wQ4GbT73G3WzkoA6Z4ct8F2mfo9aFJUT9MVxFdq1FvqJbdUCiaTDzBDiZzerXA1k85gcSjRcWfsWm",
  "key36": "4aZApgwi3X6bjALKNqP7NptLaw3LR9Q4VWk4b6vK64MQQBhrdAUssj5tC6Us4WhdVEAtBpnLy3K1nZAyMsuicjWY",
  "key37": "5GYRogRDxLb7PcQKWuGyATxUhgnDLg1yKzDC7tNDEZexVC1C85GSmzYkmjBUKGZA2NgkE82mET7QNyyZoyRPK9wr",
  "key38": "4fvV3K91iXjAqG5eqeZD93fveAJBfyAxJ3qFoVvF15N5sraGpuinoJaEAEa3RhGPYHjziNf6tXtw9NurJBjAuQ3o",
  "key39": "56arVzsXnmYztHAQwWX5RKMyFVWX6ExbbTQ7QryrQ2KKigCHK5ZJYJddsyewGvN43aA15zvwMyXQerSt1QBcSatk",
  "key40": "5GF8FaXeYnadxoAGVJtj5rrvpKs7hyywncQDcKu6dSJJeaAyWuPXadrR8ocE7MR8i2XinLZB5rZM1Z1a1UHsg36E",
  "key41": "3FjMJZk7CcvWHRdryKZzz14NSDgYfd1ddzqeatyVE317Dm8Dtab3wdxdUUb3sQDM2uT8ek1moQFshEDRtfyoXJK3",
  "key42": "5xwSCDicQkUzuwfLN9Zc4DoSQEvhMbghvqLYCtrCYsw7bhYaCAYQe8aeRnBu2rGDhWAZ2Sr2kQx49v2goCtF9dcW",
  "key43": "32LkRHWyFKvUAr7yudVQwDtzeDetXsMb4L44N96ucyiNDrA6ZHxBx6yFnyX2xtRTPouurJhdwZ9xtQCYDFtw5WdK"
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
