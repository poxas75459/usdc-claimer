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
    "2s5qF1NVbXKioM62spj5itmUGmq6sfqy4jeW4g4A99XPW964vFxDCxQFc38r9fjHhvNwDHZvxAcJ2LZQKsPsxXHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iciRLx1wdaZ2zxSxFpF36NixA6K5iknMGWk364Vp5GLMBroz9q2rqq5FmuwBebBYNThDAw3mkpWQ9AjvxFsvaUX",
  "key1": "4nFGFwhw8KVkSipbU4HJcY3CDe2zE25yG85XLgWzfvrtu1aYeZWg5v4iAufLSLNqCG6peAqLVdiP9wJJzs5SzHa2",
  "key2": "31H5zjSEXdX9H5fHXYEgVRYQQNw5mCdg2ciBCY66amhRgTbvEjJWYyLXPjwk549bcKV4dHWNm9Kew1G2mduQjSd7",
  "key3": "mULBDnNjVdY3iAGb5xeqNQdF7Kvt5hZQK1XUANGBkefqVGTMDtZyXQGKK19wGHDmi7FU54Zz5gRFepJYwWRwJK2",
  "key4": "NmQqnpiRYUpJQa3JCQYdxkCwKAjMhkDgPSRqoDroavTJxAGrctDX9EuDWqwPiLTT6Q1Q5xXSaQjkhL73KyuvUhC",
  "key5": "5ZSDLiZKLNFAjjBc9k2KQHXd51LyNQbJT6onXtH9F7VM5SUCufNqqb7cUkhZXC9QEwXyfZiALPg4q6nUL8sYKfFG",
  "key6": "4wPfRqED2M36TNw7o5Zs4xG46B92ZReew5ViMQzrW5dS6AFCrGZps6PU9CUvE4YBAoAqWnyfBsegwMfj73fddqKq",
  "key7": "3qup9kAz8FZVfSj2eVvX9c18KEKXVrWwRczh7hjgcUH5N7vG16ohJAA1wtrGPGz32hkPX5LR9AbXMcPW79iqtJJQ",
  "key8": "4GjT3zFTBKoi8u98anGMc2fuHUSscieQiYoXSJzwdM3pAvio7USk7KpGJVq28PrBhSYhtbW8xSQAnYwJLw1AqUoJ",
  "key9": "5Ebmrk2RYvSPSJG6tkQxx5xyQoEiSAqk7Xs8fNYSi6W3djWrFupRjcrmbnvwD3cNYFRu5bY8v41YS3Gy2LtCr29n",
  "key10": "H5A6nVbWSNJKqwCYbyN8qmC4Ug2UVf3DkGNFQjtWfM561eoXhD4FmMqmzGySFUhv3HWsLyhMDymDistX4Hc2wTH",
  "key11": "5a6b2ycBuu9YMbMKFL4WZ8w34Zmxqx58iQ2GZAzCRk4fa4Vi7VvHGj8Gyx7VS7fbNYabLgVzStHJtkSrQEnL1gD6",
  "key12": "2PB11hjCP6ZCRqNZS29mCk15BykDd9WnqebfKE1xNgt7EqDBzfKg1ipxYxPtec1JpsWRjULVsVaPc96FZRc7LLCQ",
  "key13": "ksPcVdsRCDW3kp1sgFK56GceTBUcMTY47omScrNuXqmK6baW2TYVvRTQYYh5aprUYXbrbJR5LsDe6QP4maUxykv",
  "key14": "4TzE4rJuSD87st7zxXh4xUNy8PqahUgKGuPobU6nYYBBKkoCNhCEvsB2QMnuSj1jRcWQjyd7MAyTWuMNAJ1CYwxP",
  "key15": "2GdP7cM4fX2qSTsQ43eThRho3RLoMEWhi1EwxtF9aeS7MK6Cbc16AZhf3zRBouC6HVDHwCLnvKGe6NBFhPRJuEgG",
  "key16": "3DozskLEfuW7sSfuvLBxPZLtq2mXgtVHkdYhN78xEMvxqjaiKSKXACsyqSG4TLyyp6vrepi7mtdfHrooSubUWJfj",
  "key17": "2Pn5YtMYqs7UJVMc2XQmR39CgBTh3QtDgqNx8z5TqKEdj6UtBqFB3dq4GDVHhdFKCD4YPbv7SLfyvQoqdFjQdhzh",
  "key18": "2YMFAc1RJ22FGk6iLCXn6npd7qVT7zTSohUkt6gRED7izXE8cTFVeru7qm8bcYfjA4CwKrgCKd4WQ5KJ4U2iGPpq",
  "key19": "61nZE3hpkuR8xvG4mqFpqZVrT2GYgtZPchMxG68ydrPEuGTcGDeouhZ9A9vcTSKB5BKHRG3YdvsDN7Rn7uqNSUfH",
  "key20": "45WuDpirgq8bcBbpCnjxsCAG8bhTDZ6a3W8P9XQbApPw2G1pwDx3QEvyQnAQiYfVQHMsLQCyDShRkbaXjE15qp4s",
  "key21": "f7aWD3Ty9FahzNZPGQZ1XfXHcVmB6bRmBvwXXD5N9dHbLzUqfBfGNSyxhfUHbPGYMNz5ky2pmJ5gBthtopckYEk",
  "key22": "uKVbmxLmja4ADboCyA4bAaJNXoqj4tyyurNgCALEBAdQ5HZuKJi8UULLNDavMZ8Johb3vmHeA7RmHSG9UMwkQPD",
  "key23": "3q9cGiV7q171Y8TX6gVSWrNADp3fUAdMAWAdBFQMZuwLzRg1N5bafyamMaZ9o81se83qh9teHgVqnD4yxxFUqomr",
  "key24": "4U3JsxbwPtbeff3xTJbaELhhreDVsGtDMf53Gr8YHPDvhb4UCFT7HgZ6aJE1aFT7ehMkGscxNb6Y75MS6fAXPZm5",
  "key25": "5PTAi2oB642vSpASPPzJYakgrRcrYjiiMTcd14HRiGTcAtB3CiJPiXsPxiqbBoAqsHqKwWYgs2wLZqgkM6RqDdXn",
  "key26": "3Mh8wWg6Zkhoy4K1NQnQERJGh62LfM16QjnrmWkEcbgATb66wypWPkgJo6uBVx7xKojxsCKmXd43JjwAABXiLBFy",
  "key27": "7fGsqx2S1vTRRsZgFT54D42PV7etsiqm5vKEEBaZW69uxY4Gt3Ka2pVNqzgUTvtNwPLyxKco3HTnwjHA1wkYy8G",
  "key28": "qUXNs5nwFCrcmBz4te6RqLxprukcAHmhSnBDUan6JeSPa2fYePKHcpqC2a7C8hJCPXz8m7yKBYCEuYP3FakoYWR",
  "key29": "4gsvbpoFic8DssnGwkFXzr3Na5zRaKx49LrGiMhouzGEgSTdRyyjxdLufZJ16V7WpjEgzwKnb5u7yFcPtsKnBJJD",
  "key30": "4CGw7aogvEBNN9CHefmmU28PVMcZ5mYLgLJLaVvexnhngStY41rkYfa1GB96GWDfPS1PWJSyRaXvNXATsFqTcCs3",
  "key31": "5wm6yUD2Yhjp52511hgejpzLs1H5zZJxf5gBXk818o9Fq8wvfSSvoaoBQ1hsCCxXbUY4X6s6xWS7do7bDEQpNECe",
  "key32": "3M7w1GRJCStciHkaWjda1oD8SfYNWRnmPmhwu8xo1LQnHzPk1h37kQrxryuPHtsbtARPyAsr8KCx1pRDAs5e5WLF",
  "key33": "2FxyzJ5BcyiL21yCu6Ez5HM5cdXpQNXxo7UxKg64dUoweT9ywLEqUSJ81eu9yVRa7ASF8Ee7YX4WruGvt9q94Tb",
  "key34": "58Syir6UPHPX3yPpZNWx5YDqHaZsqngiUvgCFryQDCy7ognfMDA2c4EDsTd4g4UiQGujYykN18ski5irT33XHccm",
  "key35": "5HzSLqZGCQbRV2Wvz4U6ZtEZzagbNqpNjb3XF2PEVimpzRUKqKLz1iKyi7SiYkH9BZcYHpit5qTvBrXPpmhWZvwy",
  "key36": "2PvMBwUuX2YZHUPVdAPPvsA3VW7u1MYDA72yksRRW3DsDbXLYyLsES6Figt1SP5d1mHddnKgbYfj4HcQDi8KE5TS",
  "key37": "3C96BKe648nW1f6HWuV8W56RJJ7QZjktjFr5oHeNRwc1vAo4mpvy5HkK5aZue4GMa11p2dXavnLo3wNrGUoHLWQQ",
  "key38": "424usjuXzQC8mqRJy8yc2RtbJULCZ66j62rzEV9H9shh9rkRQx8oK2eqaBmkTZwRo5LGmm1PUnpgXezrZksSM1hC",
  "key39": "5vmJXYchhjbPiKEXoynUDFtNdvmUcUNPM88Dw5Fc9Wz65sZN8D9AqH99DeLikGE3Hx8EtJnARV1Ug2AwXhfK1zbm",
  "key40": "2abD8DCCfJPkyF8jJbH28v27vJ9t3eCxiBUok3wFLn2yE99ZRLMpRJ32SHUKHZriLDa9MX8kpChEn7r22jtSZdcx",
  "key41": "5vVhfnRMiieNAqDGYfEV5m6PFv9zwAwBEjKiRSBKGYspX83RHZupGyduB1PtWE6f55aHqHKerKhKs1NK263DT5Tr",
  "key42": "62PXJpHo6iBtoxEaoShjKk4N92aSNnAFqMtqbDVjmYyo67Y2cSzG3GnMws7JGLkysT1eYRaVDvoHDCiRjSdtjDJ8",
  "key43": "4eancwjrf8oLA6qEh6yQ6oXgBWxodeEZkDs1y4yAeq2xYAWfJmFfBHNcpr8D6utEYbkNCYPFE6Chn2YrZJbjqCiY"
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
