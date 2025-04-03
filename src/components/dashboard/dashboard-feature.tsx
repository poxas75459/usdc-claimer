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
    "55JogJEp7baPXdpkcUXKmBKDYewVzZk5ubiDbHkkR15vjovGUQJGT3EeNasU9vwMaHxPSLGASTT8CCD4aUyeGmur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T9AaaRy1JXVYMd3JpRVT1NxAuN562wtLxtmTRAvZwkKqmVk3qtcSpnFahs46jeTdsPKsjp8ZQCkAtYUeo2j91bz",
  "key1": "63wGwZsWmG92Ms546hkBzY68ipYP8Wz4NoNLk4kV9vz44XAWR2NKfX7ZBCqXer4ZYULfjjTZqAY3AaZcnbryDF1h",
  "key2": "5H7ocrNumpruLjPhu2QWjNomRAENwhbK7E97xvjXPGmVXFDSwJEccfiHmPEWzkUcXLEU7U5BDAVgY58a3Kp7HLJZ",
  "key3": "4TdJXqsVcWpBKt6f21W78nxRzNRpwvLx7ptSAgAjmeK1ZbPfk3QDeoLra6bLZw6aVNrkCAPgmhQkv6cL42h64sQ8",
  "key4": "3pLLy9hgtD5ELU8fskRC3rh2oqhNWAfGMEwyvu6w1dg7RbaVw67kFwFiNuZNViJiRcxmPtyC57D1NDWjUzNfaspV",
  "key5": "4eKkCTsJjEzUjFCK33QPjmjKZpbiUr4TDtbL4x9LdSrQEGeoTRW3cRCboK942bgqVhFVyCFHvPxkX4JjfRkzYvzZ",
  "key6": "2C5PDBKt7X2UqEpKHvRCFTHNRPTYBUrpfWiCzKKgiUVo1jHJvp5ipAHBDWnwZ2Q5FC41pNn6xVsdXQ71eKx11TNh",
  "key7": "2Qqnm9xqWNfgYqNUU19u623uiGJ57KBmZR65VkwsHgwFDtSBieBzRbgvjE7YTAPtUXS49hsXeMuqKKb1EQJKrqGQ",
  "key8": "3s938FvjAmdm5rPxmf2S1zZJJvrTcjmPPujMHFW5gUWrazWdD2dAakeWJzAzL4U5Z1vqN6jeudatPD3i5zxxGfrP",
  "key9": "5JQfCVqwzMUvGwcwffgXwWD4zN9mZqtFKzUgTu4n1QyxF7cEjwuJFXwrzG8W2jkRKwmnVcq7qRtv9j2KCFrRHEQw",
  "key10": "2gsFqLc3jXEGEzR5jX2SNG6aTrBMdG4Zq6h39pgfFYhGYMzkTD6DgCqEhUUgyajyYHQR8ttVK5UdHGySGN7kU4qm",
  "key11": "3Mj58QKgTpM5cshLHXAKi5Yoh1RUvv5VFoc8CSECctFQNP5a3Vk5UoUpAdiuZzw9y6FLWuCUM5DB3pynp4FdPrBK",
  "key12": "63bc3fUQoVcPn29FFUespV97NFpVfwbt3cfv2r1rWPheW3HREgb7rWw1Pg8NYFzHE1vCaWd4utHkjEyjAATwkpJs",
  "key13": "5TBZebYxjfxEdtnnZx7pMJfF2br8GB2npfjDCPjB5j9ZDsTf5qF4jEy5HwR3LF1t7wzieesbocR1fKNiDbfiNvxL",
  "key14": "3MB6SqVFwHV5EjYXCwZiqU7X3F5q2TbzczMYxRVTjo4P51QhdyN8TLXd3CFNezfTuxJYvdChuetpj5dEHjpggg6d",
  "key15": "q2diANcVwBfz59fARowPAenf8RzHVefox5ou3fQkVrE2QZrTtpd5ZK3vYWJ69RjR7f76CS6BfLDdtwT4AdVCrv3",
  "key16": "sgxbcgHDa2zkUGzjoRz2NmHh36bUih7ZzdLd6raLcTXT2fb9LyW2jsKdxGzviGxM5MKLnRSXMNE5GuVHmpf4sHV",
  "key17": "4r1s9hJrSCCW5aHBaijqNcsy7gvg395L53iMJzYQHhPonFJjfCKUhenFCEQYrSo1sL2FsYRZR1cjpmkv7nA8T9Go",
  "key18": "4mMSyNm956qheBHQS85yZEEeVvexWnv9H1Hz92cX9GU5ExJcVJvutRh94BTu4QfYuFCbs51H1WTeCLsu7s6z5TLb",
  "key19": "2QUnDdPPvE64EGpaTXDXADLZqHK3KjsUZ2M3jX8NduRW46R643xxrnv1Dr6s2pgW1uVrxAPJUdkj7JtjqCANEodM",
  "key20": "jq1venFZZLHK19a4WpexPqGnf8P7Q1GPbnFKUz6LQKkv4SxK1zTa8MQvJ2yqXPNxwbZXnv35QQxvw3K1rQweYeC",
  "key21": "58prW544sRqozdnL4ckXaU4DYvqZroWSEymyt3DEZTZVbvMKSeZEpBanGPxnw14PnXPdvyHNobyNTXaJxcuNYiS2",
  "key22": "wSJMsTgzxuQJ8Px7Kq71KoBgHK7LrrZZH5euAP3JnJ62poeZdP3J3hSneBMYJutVahqkcAhwcgTX3SZy92VKw9E",
  "key23": "2i9b4AbX8EnRsvJQFJfnoZbZ3w1RooPctQGjvdB93WujrHiXsP4pjqbGinkRZwTaFeUEJv8NarurBgmPLwcym2fc",
  "key24": "f3YgyZEiVQfXA4gMDvxkTWRkJFArZoLGgdxX8aRN3cK5fu5qFWEnvi6pc2XZ85dP2zsCupVM8mLRScKYDS6e9zK",
  "key25": "3SCHvPJsrrTNFkDQ2SZhb8DXu77e9hvwgbrdxKWoKia1zYzo8REbzx2A2JnDRseVCP6Pi9pUCsH1Zk5emJUCeJBL",
  "key26": "3mf33PGJffmzfem3V8fz6B2SmLcJ4V9PCiMVLeeUqKwxqrMqjV7XYPYNtddKD3PBfA3BQ8J5XRnqB4GxeWCAyaMb",
  "key27": "WsZqjVRUxRyDLzj4V5CEdYWYFV3nBepgr5iKDFfL9m5TnRug28wHfcgK7mzp65qaPaN61KzSetyFVYsXeUCjwNS",
  "key28": "3dEHGGGRZd8ECXUn19g3ewNKLmx2KVihc6K8R8SmvjWg9LRBu5cw9BD3PajAziWrrTs5r8mGDcvwsPDmTsBsJQuH",
  "key29": "674CmG15USmGg4w4gDt5XEPP9s5A6gAxR9BydwGkA1TkAuuReRd5ab2zRmGGDGcad8jrwFLMrG3pyB1qV1KEMgGU",
  "key30": "ZzUr9NVujN2C9h4kJnodB7x3uoGN4UVe4cJT2n1YEZqjrsk4QhzX6ysJeo8qneQXUa9vyEAhaqTGEPJGFqEfwyE",
  "key31": "3HZ6PXkZwYgPbKyyUjvaEM2eiBiJnLHgkPgKtJrkHP8kmL8hfuMuxZf9jkrUkQDHVHxBaGdzsMybZEwvsz3sJPiz",
  "key32": "4fJnQiRsHzSTNtmg46Tpeg2ef74r7vhecKwYbwjhmEdb8aKV7HwoArq9VKP6TKd1DncRzBJkW6Ap4qWu21utLL5S",
  "key33": "25pQqn3fQPNAEyTVWzeZxWN1XFqyz7yQLh3ga4HoLzmEZuYMBnbUH9tqPoxcrMPhgXNEL4t6nfuJtRCqMsPhYCPv",
  "key34": "NPtVsjHcLEpfBLCxEpUeRCbooy7MVLRrw78GJNXWwYNjrv8xzL3drbaMMcfdNu415BU3eUKr1sPmifC127CFua9",
  "key35": "3UQDLoecqFsjkusFzC9gWoiMUF7SqK3dVRyvboxRCJdNwG5dsFWjQFAVFWaRZEuQkR42G8qqTJ1pVoADMasJi3Ai",
  "key36": "5TZWdWAeoWw1tnwgYXwQVWHAcUaVEGBnvaik9b1a3XmVF4PRgVbDL78rDGtKhBZiQcHwHzQXas3JFhkysYcuEN2v",
  "key37": "2YwzDKnpZkofLP46jjPErJyYXMQsm4185RCnWEChFfktDoz3yFTedj6fsBsK6Y7u9Q6umXF9gWtbdzkrVBqejCXC"
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
