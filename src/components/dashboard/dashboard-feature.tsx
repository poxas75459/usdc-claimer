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
    "3y9T6LHmFYpxJRk9PSY4Ni3J9sqpUEwUCDxpjRPqPkbqHmjyLuEd2V1wx3CUifM61VqRGPasc696s4EZgyu7nT4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eeCeBq19yk6TcMKT7fxifaff9dzPC8ANVJdzho7UTEucGx4B89dip8eUvG28sf68ucv33pG3Nu2J4Lt7PcRmNim",
  "key1": "5QEix4Zh4athjGG1FJHeagsTdasNndGo79k1Hj3yaDPpArYksG2gqJpVqb9FQHZwVw7D4tbe7NejKvL9pey8fQUM",
  "key2": "3rxZLfZG3Wrm6FBakLfhU5hgzRqU8kyoJtzJKqfgERgoKxhCSpR8SdYqQYewrc6iouTang9nbDB1nqrCQ9D31hNH",
  "key3": "5QZqz3EzcvbHmES3pyoXbDedZFFsAksGQTPCP7scwSmVKNSRY9DxsKrRsbfTgygE9Khja3Vzj2mg2dhe7eL4ibP4",
  "key4": "5wCSeKdpmJ9Vm7dXGEY9d4LPXRuekNRXYGMvZo9MBeaMUq32KsMsknfoP3oB9coscp8fi78s9RMYqSfUQV6e4a11",
  "key5": "27LZ9Z8trBXQgDdmgeMeHhiG2TskPidYpQC8VxRsySuryzkhcurdM5q3Tt43rVikMKP12gNn7SwXifB4nszw5SUf",
  "key6": "4jruCuBBSEnDpoQ2Cv9aW4UfjrYEPCnq6539PRiHCBBqXGTbeBKG8rZwz52Y4iiN7tdHeLWpEHy1VYAsddR6dzgW",
  "key7": "66JQDRDco3kC6sPgczjSPSiSizPUu8MEDjCM8bAPqjxrvSnRX6g2WpwH643RmfpsFWA1Gwa4eifcANHTyTFVDcRu",
  "key8": "3pjN2P2cnaD7G8toxb5VtcZNmpoHZ1UL1yLbhridN1bxKK5rD2pAEev5VXFpCDmttx8oZMcjqfEso5RBRDeND8ri",
  "key9": "KrwA9rSo7Hnk2qBkDNMGVFs2MoppYLqcx3Xdj5cyWMmJ1Uv2bhoUPDNaHvvA2m9ecpkxyVV9i9jnNEswpjreTAG",
  "key10": "2GVDa5SEZzVmYjcjNNJroxHtMQSKM6N6UXfJgMwPTz2vvqgcXKYuJpF7bDn2K4kMuiyQJHsuBRX7BHHxQDuawJCt",
  "key11": "62EGYxAqbHzUyvx53ZND6gmdz7zXX5n71HGjuNMWgSivbix8J8HNU13gyAmQoaXCMgoPJZrws2Vn8xdvvvzXJPaF",
  "key12": "3nGa4Regf2uj5NG5YNyVT9BoCZSHUvyPqChwUUEVKvFsfGFe438E4VU4dGrk3NTtwJvnJYQShHbhRHxQo35Q9Rox",
  "key13": "2vZzibHdiSCv2hGDy49BHgUgLLTtnfo9pm3xiqfgohoPYj9hEi748vQ7zMwMs9ircemFykMuMjPiuepYGkrFbA3b",
  "key14": "2fhfp2BB9U156aNMKdsu9Pi6RmHhniEh2D3DZbPWFH6EJ6mx4fB2oQxqUv99kkxZrHub3h9raEvqXsW531wWXboc",
  "key15": "62ymdq2QVNvfgw7SCqFBYZM6hdT5M27UudhJxWjCdu5wuRAiNRYbMq86k5XwUFewtrs2jw5abH5H26gwMebqxtGm",
  "key16": "4LjD2F1LtBucCzAeLj91cBxdVdckRzGv72yHcbRe9TqrSESWstHmDd9Xji1YTEHKeKkAz8bZ2dc2X56CB3vmbYph",
  "key17": "5nMWdcS6RcMgvXLgYQ9N83bPYfaBHhBXSWU6QGGJknJfpFRNNsuk7bdSh1A6DvFYrHDNPSj9R4rdQiNkx5mreq8e",
  "key18": "zSvtDbDVpFrkCAZ7dBQLCgEprxJ6smUa8S21r4cMCH32QfDBiWmNURrsTJeGK4iRLyoZ2QzD2GpTYgkhbGgjdcC",
  "key19": "5dujhAme9HotL8JJGohYLkepN17n1c9HHm3LrVAGTUnUAzkcDRPfYVAjG4nHFFqXE3fsFUX3f9qhcqqj9vGzHReb",
  "key20": "2QtDauSt3f2xAiseGZeupckN3YWGH1o2FCzkr3eib55KPu22NcDRrLneVRjBb7F4hXdyJRdEca4RhFDjbY99cpZS",
  "key21": "vQ9z5Yoix14ZYFJJQdSTmYcLvhB7HWwKSCqUv395RYPk1yusPvzZduWm4VAazD26DLLz1UcEByMYQFbxtU9Rxrp",
  "key22": "5Vqw3Fmqh3znRy1ShBiAd9rpaFGWC1Vfpf4dq6RfW74KhYL5mLe6QjvZwh8a7KYfyfRkZXhXhyv2DxkNPxCmnkic",
  "key23": "5G9giScZd5Hz6YjMvDeTi4abeJst67su8pqEdGr7qb2EettNjxFrTEcJkM8tpPKyEg4GvkzYx5xYLDeM8KDb5fF6",
  "key24": "dBvDB8odnEdwcJiAmx3UdUmjQ6wpoJveXaY3MNKqCL9cUdztkYHJb7Mz6pGxMn3r5VxdAnwHkNdtauZEovitcrc",
  "key25": "TJyqsjmXobqbMJGAf7jFL7TcAU2SmUwkPGmTQdd5GUvg1hFPWt8986pZ3J8pw6EVtYB3KKxD8XbRnuwvKRWfDgj",
  "key26": "3XiPQy8YMjop1hrp8w8zVeDU5PLVenxSp9fqp456cmsnECszhzuHgXRxauxue8kS9Eqc3CYF9QRxfEgQxEhFammG",
  "key27": "8C77j63JUcS1Ty5FT4wm93UY1g9z9g4UMAX6BTday54BMcKYQGnGqDCiDB2MZS6MpN7HKXKBjSPBCEvwp6ch39u",
  "key28": "53Fsb9rrpBw5hfzjSD9VWkmSjrPJfRJEbWCWcEd4K1Pj3wWpQN2Fs6S36EGk1xEqvtQaLPLpyD6H1oVdZ6T8kFPx",
  "key29": "5dhvGATHmjmw21tqgPm4FyVpZ2fbXz8Jbawy6UuWaaiQLEFEGLbfeLTE2M3TYfMtjXF4P7p2xAUT38pJEFqydYCq",
  "key30": "3NnTeSLHh5TWdN5DHEsDcbSCNcrDEqjCy9Q8t4F3X4aQYyvGwF3ZE8tkTDWhsBw7NPsyNCZaWJJHv35qxN12Cp81",
  "key31": "ZcyTZmW4cBL13BZu4jdteb25j8vijh9Xc8FrXfj67qZEsKJEbHcRZdeBs8CgNkZWe1SLqJHAHmT5YJiAGERy1Kd",
  "key32": "4jgGafBf8TaocsTTL8PuWWtpB3qTYQZA1SkPEFgXXi7PcZbMParv4LZkUDjsZmkELcwEdsNAYHkgjr4BbHtYNc6F",
  "key33": "5qGLpJ4hvYGicvUBvJzDjVRbYrapFMCzsi9xRJWu2GEsAn9RCGbZhZUMMYckisVgCes2ihDNK14TcBJh1WyKPKNE",
  "key34": "5ivtTRpmhXCRaEg7PMsnpbZXhXvaD868RrE5C8nYfiXhWGGrEfYykQQxbYvNANHi8GgRQWhK5LJeNdXv4h2sUqr9",
  "key35": "5XFvQupMopwvMQX88CnBNWcQYjCyDqPeSgP1cRuCgLnDjNyzSrdHyNejHs2VWVTc6jXKFvu3B9hQDPrvPekAMMW2",
  "key36": "3VUgEGwE7XbnbG9FgFPmhXbfkMV29mMnCmNXAUUaDs5yW5yGq9DS5Y2iQ735vGLZnvidXDuhe61jPayjGL2SH32F",
  "key37": "5Ko6YaMtwm5wfaBxJQwmKSLQybwM5xd7V4HsDcAjsQemYvctURss2eZAjs49iB36FXxvUw3nwq7udt7AbMe6Conf",
  "key38": "4eqD4oRNwEq8oaAp2DeE2bocsXHZDqM5PQi911LVPn1xdBhYZ8ppfGyYmhTjZAjuAR53n1RLwSx3jteFEjkSu22E",
  "key39": "5dJfkJevdd92jzToQSui7iuoYA8BJfBPoJ9dE5Wxm7X6N1RhGc74g2Jzt6yvVM8gu5ocByB7si6E1xgMgv1nSae"
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
