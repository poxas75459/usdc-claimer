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
    "2YFM1X277w87mkpqRktrqeXJ1FqD1NNUA562U2b17B5h1F4xfgooY8r1cGqPAbQ5QcLa9CwouHXRVMxyiT3PFoVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rw2awFpyjypSa81Pz2srCSgBCWU3cUN9BDiaTsW5fxED2yivWXduVKdbix7coCdWAeyvjUcNe95u6cLuntcemL",
  "key1": "3n2UZ8VBo6LMajyAiNv7z3Mr6pnadGCCptfCaYF6FcvBxbR1MNRR6nQmd3NQNRsmsv5Ysdsot7XLLxpKshMaceHV",
  "key2": "5NwPRCMqQ9CGjoiVGTzix9AGeYmz8Wa58w4Dnz2nRpVNyGZy5PtF6LE9VvcbSU5H9tVDtUX1XQzgaQajPWow9Jwp",
  "key3": "zQLYo6sod7b5Ku25xGFnQUYDZBakeevTWZuuRQe7YuQPrkvkCbHwyD8WBRK5CRtT7hZy9iWeAQQnBXvkjHzLbSk",
  "key4": "4pyVi3sgho59Fo3RLNCr1dYstwyRgrbhLARK1aCzYG8Xs34gSUJA4CEE76bhktSxmNBowMzeVk8hxRkuZQzaG4JQ",
  "key5": "3iej1B6WEujGW1CNHPpKLxkyAC6FVfoCPik3EgTcxUbQKAnsoAjcAykQVe1ip3MhLJm1sdyeNjuQKcutm6nds2XJ",
  "key6": "3Ft2CrktcU9jDV6GNULFMNx3U8NA6g52eqK6CJQge4gP9hnv8Ve4q1B4CZ4U9yprKE8WPfo4XuUARcyPSQ8WdXDr",
  "key7": "2yW75ZAvC3RLD87pi9VcfEsHSSkuUiYbT5gpdfVBG8kRTJYGtrJUMeV96awoT3cMMc5mtGEjDNUSY9Jxkkj2YTfR",
  "key8": "5QpYn5Kp9xqCSj6cziGXRATNjQTSDE5XiwP5pwcCJK8swGyrFWPgk7yFMASrg4trskC5FHgc1PuuUKiKfgVQMn6K",
  "key9": "66LTemQungcRcJDZD1tX2Q4Wn57QGGK3ktTpKs2DswxBNu8GBAjrA2iEiwqNsEcW13USEzish8ie5sPF6DnXNXjd",
  "key10": "65AhJSyce1kCTWoZsQiQ57K81u97X23R9JDrvBH4oupCZCfDZhis8KzxDEyqfHdv7xYML2uYhNEnAxJXkb6zyNW3",
  "key11": "4QvNdm5Yab76PXGCkwg5Z8FJ2HHhmUdaKVWfJDubBCNgTnUj8MXjG571Uoiv9wQPKSU6CQQn6U1XxDL2FmQndERp",
  "key12": "vxFz3yZ7BacW4J7GA4nQn2FRxFVbNTBmpCRL1At7feUQjUXZqVptPp26Yh8v2rt9K8wg59TEqUvjq8G73VyincD",
  "key13": "3HMW118rYVLAfVKaUG6EX6KuiepCGjkFck4uR45DRXPVjRemuUbfX28CqetP6xiiscf9Gq6ao7Bm4wzq515Qehg6",
  "key14": "eEL29ivM5iVbiS37nLvBmL5KMTSiwBkxKRBpkrzuvjmQpw1Vj8zToezU2guhzo3zfuwMgpCVAKxnnf8naArwV7B",
  "key15": "5mc8rc9N4joYnNLUGcC9YemjPvV3To6259K3MitGVozS4JxLTBpsrgMj2zCGJo68Qfwdwgd1R37mfxWzNB4JipkB",
  "key16": "guwSR9vnnZL2rj6TTkwVywmFMq2zmFQoDgG7ptusr54djGcLT3CfuEwsvatQFB4JghfRtR9U72XAC7miqSgujCz",
  "key17": "3T2mBezEqWJuTJ8pDecuUqHdyQGFR2kR81ycoqGMU79yo76tSKSjxm7cT1ghfdURNyqWKfbyDXRQHhu9n6CCAEeG",
  "key18": "YWWnAtLBi3NKk17uhkurD5gsVfZ9UnXzcatm5PnbjX5onZE21z3MLytkJALaQUexyz95TzgtpTCzTGA6vZpFPCp",
  "key19": "4YgTnomJWbKkYEcjNaNMVHovNBmvmss3SgcrJpfvcwwRcpotMM3Lo8jr6hgu3XJ7VMTHpCjGJK8d2j35QA4YrvNj",
  "key20": "4BNxkTsMzSHiwybqmQMtEZ3YWx9hroCDt1ZQV5ioHxYZYtvVNUdetfkD5k6BN13QAHAhDFbwSFzMV7UDFNEnZCJF",
  "key21": "ZYPRt8mGnd8zREgcy2T5LPyu38isFqf4hBJUJf7Jvqaum1MhfQdow6m3hM4L7LYpVYbzDMSKAsAVv5kH9nZ7aMQ",
  "key22": "3hvST4bkU8bEB5u1KwoABemsk6oURGauLTbqkzUd8ChKHUabLMbBZw9RqnXqY6Fs5FFSd3D9QNXeALV3J2TasL1p",
  "key23": "5nDZLM8hxr2sDXaweyYS6mfMvCW1mjuz6YMWjUoV91nbpJcJjgFjys4wpHLtWphXs7CdGYKBQE7DwaW4Y7D1Yapw",
  "key24": "4Pv1cAArgfADD8HoXjEYoRXr5EMBWoRGx7ajsrFLwjwRiR9TuAQQjaJ8XbY4LBonoWFgfFfJTSwijS4pPLXmLCyi",
  "key25": "3FbeAQxC4u62zc4MidEttJJGiMyNy6Qa69dEXW2M34j5kcrcN4fx1YME1CQsJMJAyAmynBuCPTzdiVtJkon1Cip1",
  "key26": "3A8DKv3zaaWH6SeNWvrTrzktyVcghdRgYCJnraL614LANr3HNbxTnbFxtEXVnmvYgiscZgk4oSpssXbirLcqXwuZ",
  "key27": "3a5AvSbvJ1aZ24BddVcYtRGdm7nZRWQAWfvkYqurv9HUzkyfCH7wPbcqbzyZNf1hjPk69MZR9TTrPhpesWQpCpTa",
  "key28": "TaQxXSJVEnBKRymjFJBddVHcE1DLq1qm1xBbhsdskkR5XsGy7n6yTDztMmo962EwX5DYfKFpGvjgZcCSiMaZLmm",
  "key29": "qAssBmCaV9C3sKuQYohtJCJBSTm3U4yUKEbh5ZeDXfkfRKuP726d1y1Gc3tXTGn9XvbYHt3AoZDZq7MHhEVjFX5",
  "key30": "3HzP59KFbu5Uknk1ziGcHeHXg61xd3NcuHvP6Dj3d7Ra6pX2hee8hYAvmRAnRwxj6cupBGi1ZrwuakP7z7ZoPFu",
  "key31": "4682WTcE9NLgLZnU4PVMEiLPr1mhxHEMCkz74SD4i4UaoXvAK7mQ7DSjSThiaZGyACX6zHNvm6jJFUXh8AWiLWMw",
  "key32": "4TNeXhZhTjHStWs5wjY3qy2yixJ7DTduPWGbDy3Zs5VfRzzg1s68rkWtyXFGy5gMmuGLott2iSYoeixrUZqJfwX3",
  "key33": "39co8FHqnyJyVy4M91N56JA9UWBu5A7F69cZpqffLSSbN7CNdsP6x7QCkgEQcETcJ2xSHayigRv2e6pNsYWGF8wT",
  "key34": "3VK4q3PgkKKP9t3i4fnwytwwzPpXedfXZZK67WSYe7TMnMDfSuAWwGLqwb63SspVTzvRJ8Fzg2ggLxUZXyvWM7VK",
  "key35": "A8B7ocGX87hq1ZsBa8RwXZfQ9NaP6ziq27mRobevAGM5AMa1fjGMHrWskJdZ6oRiEVzctDhNyu9pZ8jfwQpoym2",
  "key36": "3hXvkRoMsKb1aAYTNWWLDEzPHiMwbF5AtTzuARjAabbyf8Tro8p27A3yRbDuGL5Di6kCJgyz4GasDUojrS8b8pLq",
  "key37": "627anSkBFEcsH5K56ZBnvar1NodEwiYSAnXHo8BibpCsFY5bakG8AwRTqaZEeeztkaUn2D35fnqCsk7UMViX8Xuw",
  "key38": "43HkCVwxdKq5QV5yq8gTGDgzX88cS668EMhd712HbhBPTiwEhp3ww9W1PuU5G2rG5wxR9ZSzQYMUWTYqmeByqHkX",
  "key39": "2KzeXRsB2sUvZ6unZo7QY8t4evZgXSjwvVtjABhZ6i9TMJgDNfpSsLsMQZsVqYPzknBby3sUTFB2cczfLRyv3bwD",
  "key40": "4g98ypdTrb54R9MR4urusRNoQrCpbXK3VwyvDByBD5REVtDHor8vsmER2xkNZMqHFpmvwrfDPubCXMrx3GyZS3DN"
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
