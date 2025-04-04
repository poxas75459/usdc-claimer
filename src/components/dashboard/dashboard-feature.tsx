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
    "o6GCXYZY4aWege5hgUoT4yp9bWZWUqb7c7nKi4SvcBChmZvMfDyRkDBB3ZWKmd2NYX2L4NHhpi26HrZ17Dq2JZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PZRQMdqNscNGPytdQaNXiiZUsEkQN1nRrt9JLHjze1svuCxSzDxEQQSUNR1ko4wjeP2aianrAL9A9NLCUs8RAsQ",
  "key1": "ZjbRogXiSuATmd7FVux4ui4uD4Xg1uRm3pHr3g8BQnzfNsENPsr5n6sPuBUxtAczw4MMtpBwbzrMzg5xPK91bSs",
  "key2": "4jNtY954CtNfvJXXS77ooAWyWvqoRhk5pufbErSTd1GGXQvrMfkMDqFTSBFgnDw8SzSho7DvQiXEUgmtyuBveus8",
  "key3": "3L7eFqgaJz8uUHRCCnKs4kVtKkFKEKwZRqDK8LFEoJeGs4q4x3bAdwvMRqLEgB3yS8yH2X8jkUTM8qVFVpYy1vdm",
  "key4": "4XrBkMmHpiFqerVea3mZqhN99kgxhEmu5nxzq8YjdYdDazXBNDJG3wUPZppHZyN3GPcNyZ362wkHkZWWkmxaY6vg",
  "key5": "586NCh8tT7fWFQgBTbT9C2RceYwsFbKpvbMbptsURnaYJdZ9jwoKJUV1gpdUevzwHR71eAe3NpZ2xR9VcSpj7rYC",
  "key6": "2Hpmtb1Jq4FyF3qi2ZabmNSAgjRkzaaXByNmKJ1btArUsSMozuujSkdgHbmLDacfLJtyLxuLgitU46eztcF6N727",
  "key7": "3iPk8G1QL7z98GXjncPS5iGcDSw9LJzVMyurdfwGH1W4WHa9hnfc3gG446tPxXPQTgH89jfx6V867E5BauHyNqvo",
  "key8": "EnMzo4GQMLymcd81oXK6yZ8LdoQYdqCGFsuNyWRhfXX7kNjQdCBQXPEzou8VFkCVmx5arERypB7DJnAQ9f3n3g8",
  "key9": "56YP1Bs6vqeeRh79PRZ3awgNEczoQ3E4KRgAuvvXTGivBedgVkRqEt9G1ufZtkaAdmdTDKyu13qXimK9DJv8L8nw",
  "key10": "4THKpCJ7FuZz43FTMcWJ8RpABD52Q8xxeCKhrfSqy3Dbd7QDNaLpxtv9Mk16pjdxhLX5fXXqwTdTUb2ZmCrgQzy4",
  "key11": "4fSpHL9TH97Zr8zBo3b7Nxt6dbJ7qcxHKgC6otCG9a6rFvepgJV9SqevbCbShVZkDGKaodg7xJNh92xQZemSrkzy",
  "key12": "2HSdViCmjTVUcReNWtC2oicJauKgnAJ48e3QmMRcAbNsCBQoqwrtop3mi4yfCG6hqmLF8ES2A2DzaTRfbEj4sw9V",
  "key13": "2FmcMqK72fRjHT1FCebeUGSFjjiAkDkzdkm36zy6CCCZyggiB2bnHk5m8prnxpyWdhWE6Sax27xLU5x4D5Fz6Gkf",
  "key14": "4ERb28Akr3m9BVvvspoj1MGbK55G55Woh7YkbZP2g96HN9WEeTRXtCahpgH1W9Y96rpqs4fZiUvKiK1NDodziSCY",
  "key15": "DkqQTYsfFDEXxdVAZUFQWN38e2iZnALUSGFxrChkctCAVxUnZ81UK6DrbXvYE6Wd4w7jucxpzb1w3ont3phFb3i",
  "key16": "pNouT8cCnjGFivefniFb2XBv5BdM4cGQY2ZpPHHqT1D9vaX9DGjByFKtAwpca3XVMP5aqao4rkCG9FQhUfqLHMF",
  "key17": "5hjmzifTvsaKwTK7YfHDxUZeTMe776uu2ZkJwsB6FdaKse3K9618MybAdEmBUP9qUwHBzVh9y294w961hmnX5dHN",
  "key18": "2M91udHvti3E459LMvCTw9QxMCyoGFRqph53JA1asWJSVcbQndHSqT4aWEEqGrSGJ7B4dra8xhpJFQmwfLokXKeU",
  "key19": "wUtbvwrLcGU9db6Jm6cA4JFNG8pZKY3FQKD167SE98narBmcbSjDq181u6UtSpAKmbgqrHkjCmd21avRmSS2jHE",
  "key20": "2UzxxV9R1R5x5JD3FDNTCLAaG9vXV8vRWG9HBmChPtdSJUpDAutYya2cAMibpx9Xp96yBHL2xBTZqfqCzdDY7oYr",
  "key21": "2JQsHSFGRScgCUxBZJGQyFjdn8fekFdnFKHy5We92arCCmdkUCzLdpFHcQqzb6ne1YE7KtowGzLKDyKsyuzcSrmo",
  "key22": "2Hw17URpgVHBKu2zjp3ikuucyjhh5R3Bz5VBxF2KMHCKSx2FyTUW9DKBdwpikPAcPAhfh9LgbdMAkiF29Furci5g",
  "key23": "3jG9MxFd8R3NfsLb6f2Fuspv8DCxxJaqdnf44ozU4vPhE6JcLQY9WG9S2RodTENDZgPdz3ivyiPu9T8nUuaKBUfJ",
  "key24": "5Pb7JhidHkseKRhU5JBtY8o6Csm8REppXUmW14VEoULmhtacsz8J9tqVyxfQNuNFrHnZRGzZX1MZAajHgHAPgaRd",
  "key25": "3fVA9MX4aDboqdD622e9iuYc9eo4G1qchZ7EpmQ7FD4x4rftvYeA2HiGV4W9sSnjsDkts7axKQFaswr3y2x729zo",
  "key26": "3GJQkJKkJN3vGcbv3KNWTCntqMa47mh9RSeFJPcbR2QL53UbuHkmqd5STVCEm2wvmt4hRvPh8xUwZx245R5MAhM7",
  "key27": "PFkmR8yNPQbCe8aBquBkEa6ArzT85X38TosY6d9TnfBbA7f2tYS33v6yLyrPiDdHzfffgVoPb5r7LfB9xJwqpzQ",
  "key28": "67SD8cSDDyxtcd8gXDzQLMvMgvTvnwBteg1GnCNvyFvB53Fr3J2gFcEzV7xVxcmTeqYaVfAwXfMwfjve7om2sbQg",
  "key29": "3ZWMGcu6pyzMz7bTQGyB3NhQifzYVc6HEKJUTyYJeNzUcNFVdUYAYtwHcVH9ARYwNmkLW3mTuwMcvXqL5fwZUbLY",
  "key30": "4QsJZ4rQEYFCLzrcHFUJnY62KwFNeXLAcfvBtLNQYtKDfAR3Z8qdWBuRkoDqcGLvmFPxfsy4ypN3SFAodCQxSBBe",
  "key31": "2E2TDKRihcAKrc4CoausQxKXQkJZKCfVzoUjxbUP6od7BUSYg3q8Wj6THkExoobBMCdtB4y67Pv2WA4t3MCSWGQx",
  "key32": "3R4QHhYg9jJpRchodrGPjCtsS8EXwMuJfrSTdBaR8Uxj7krwVHG9darJG5Wnwo36g41XgLb22GXAzuvkNPgMmxs6",
  "key33": "4HK8R3M1Ry5VGYTY4zFFs8oqutZZ6kMXNmLw2VBNkXQYxuZWrTimXHZhspfMvR5vKYs2koGS1Zb9ut8D399in14G",
  "key34": "5oNydL2XtkXHB3dB1iYeJK7ZSFL9bi6bP8FSJj9rPu7YuX7TgTrTzsXBknaCGankEVLezqarfHbBibkJvoUAsSBR",
  "key35": "SR6q2opTMYoL7QG6a3U6WH6sJ9EqjJ45mxWUB3fFBwcMKwUJrvoxkTum9FZKMPyXYFZD6U4WRA18T72qChUqGKe",
  "key36": "39mAkzpiQh8zZbUpt9RGtntntFcDqZnpEPZ32R3iXE75du24KQVKfau6BU48PV862aTvxwYQR6NwdGk158zcJNxT",
  "key37": "8uM6sMhC19vg8AUwMisdq6ZDM42XV2MsvXpdtRik83rFaXTaKhpDJGubfuTKEDeuYGFJ7xpWq1bxu46KWSxp3JN",
  "key38": "4KiEWmxDGvn2kXNMeLvJKrNuGpNCt9yAG4fbD1q5AS11V5izPXnVzjXhRf7yaVkBkBFdXSHwejMRXwHenU2edpYf",
  "key39": "2WbFzbfsMDfuoCnygaYXPoPGqU1VH6EdcLfKLjmzEAroxgfcFoeCEa6uGKkT5bWbtEyLxQCoWYss8owBvUFCUfAJ",
  "key40": "3HbwZtceJmKJaMALtbuidMqMtbJUNMEswrKWCUqZV1q6izLvxEKAgrJLLN5Py8cwFQVLTNTmuuJEd93Yk7AzHxtj",
  "key41": "3cWi46Gt942rCUBuzqkLbcsgea3oiPmrqvxm2QgQWkiQAcGTdwG2577nZxpTKFDF4qKie6rkeBsdHiE2GoRXsgBX",
  "key42": "4ZGpFBLn8bFC5zf4wWWF9inPVdjrFyYdQTpyCwUAYzcK8M2DfbecvDNJfCDB2shKaw199c5Ry2knySU8r9ZN33cN",
  "key43": "FqrwB6F2VLvU4G72jicxZ7tesouqAXedjuUgrq4HUMtAG3fAaXyk4AMMFnDsxLC9BNahdoHsZh3X7bvScqQURSz",
  "key44": "5gheiKSmfMnuTzFLkoeiThL6KGWT85R2F14ajofN6UCyzWSKCSFgEhHiUwu1VhxJmJSwQC1UV5RX3LcMgdeucLzN",
  "key45": "2MjZFc4dmXqT9MRPk8GsRGXezEVwRBTLp6maczmUmLvttsCCK9uZsu1gyU1SxdPeDsABskyPa9UYYpEU34b37XA9",
  "key46": "DhYqU1tPtxoWKsE7gwp82MMKuVxaVjjyhb2iMZuNb5z5b8rovyRHtvBYsrq4E6yNnh4PTno14WxneCVNmfexXXH"
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
