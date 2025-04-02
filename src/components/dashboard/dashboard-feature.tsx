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
    "4MoDJf5Rdwd1QWffpm9xVZrLQEUGKoai8swL98s5DiH9yQwoEQtw1JMQshmsWwLNj1T4EC743XQ2zzdRNHSDsSRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wJp9Zsa38x2QCFcSjLP4DfGA9RMYU8UZCjLBqh3qvZVCFCeLzcEd7PhXrBn3nx5Mb9pdqqQt4M2CduioxaK6wWh",
  "key1": "3vJxmjKR8SSxfnXANLVfecoJGVzjDo88sgNS6TTqu8zJYGdvGy3H5B6KkZbaHzYqLUrpxyYwYKHHVaXp5RdyaUP9",
  "key2": "SsJXK69VZTHpjiFkbGmwcg3ebmm4oXbUtN6aU3ghVWPxbUjiSD5pgYbnW5G73wtP4JNn427wv3E9ehhWdY5fiB6",
  "key3": "37asW7ZXVbWaJrP1e9QZcx1mk1182eJEDNaV8PkUFQdDQG1iwpqbE3rCmaLNZewyuW9vBoHQ2mXrsT5KZGqLSkK9",
  "key4": "4Thz8D2uL5RtGWYzrSD9ry2mhc5BAZGuYk5CtMCdp2ZFYppPyhQAJqHHQAKwo9WNSGopjSz7uTp4nmaeELNHtx5v",
  "key5": "4Rcv4Zk1cvVWKDn6PCnz8feiUXMri6ayMLeLxykcA6CxzLu3fUWuvSCTYVuR92HXzeW6bDRdz5RFvRqA9ZnJdjSZ",
  "key6": "39x5hDcd7uhFS6SukZuaeXQ14xnei59FwXbHK23RyU2Nt8ZTQJMgiC8MyFa7riTrsWQ1xJT2ayBJ7vMCeRH49otY",
  "key7": "3PE7Y9kE6sj8xYHxc2EYoBbs253SrJWmMiA8q7qrJmRJQUSSWTYbsn7wRuYqSs6Z5rAJE1rcxyfk2mbAh4R2rExM",
  "key8": "8viKxX7AeYacfFNmdFFsFLoaZ1Q4D756PaEyPri8YGcoseQrUTVk3m1tCFkh5wN6trPDUaHv2XjM4neR4AArjRA",
  "key9": "53JNdvqVjc23LCMCx2LwYiGdjK72nVCo1rxPfMd5H6VkWK96qbLPXrrBGcs84HvLPj3MgG8C31GHT3DM8qXrW12Z",
  "key10": "5DCJxs646vgDUMiW3opMSR5UXNJxJpoFJGLDf7jtHgpJZpkmaG8WNzZaFBorXtfLsEvPs3XTNXZkYZ7QgAanefUn",
  "key11": "5rfra28FVoJHtimmocRVaCNQChkVFRCTXPrMqPoc4MqMDeG5vUbvvLM4EZZjmVHgJibYf6wH4dzvF76FimNeTunt",
  "key12": "2HcnZvghQBcrVyRmjLQDmmVUGDDGXZzKuaxpKBg4zSnj9J3ighh2cN8NAQnXFz5jKUi7WwQUQrxxXkvWMQWYprvr",
  "key13": "2RsKr9o57RTC75hDv7H2NgXkatcg4bDtKVTzGW7AinVQ5ZbrztmXGSjjBwV1ASTYXGZZZvmf4RzagXCEjUjtNiUY",
  "key14": "5nEVR2fBKjop4qhQXwzpBMKNxmPdJp6LpVWY6ZrjLVNPcWc2eEafAtdbEZm9zjZxzNEnA8STouhe3jGzQ8QdeJ69",
  "key15": "5DN25Wux8JezhhbJA9LfAZxHg2BpSZuUH7cfZ3vwGRpkXsu1DZbcDVFJL8tLEix3HFJb5Xqb848yxi9CXhHhcDeG",
  "key16": "3MwmmXDoJVes8npR58rFWq7RdMjNBpjR85KfFXWFqNsHQQSzdtja2XVnfWwrUd93VztFCYNM8qawM5YPW4xbLQT",
  "key17": "3uHFqn2mQbpZUFryakMYoCzSvT5UQbdG7rnDJqottVwmqtxvkVHh8P4UDKyfWfNhNGb8sNTgsUgsNtWbX6uAWgDn",
  "key18": "2hZBxr9iqok3isyc3S5VHFMtsVx5WkMkXJhhXLeF9P8ZDJeATJqbrLzf1xMBTtcsrKwB4dJrUgJKF89eUwXSL8t4",
  "key19": "4UoVBXy8dYpT3XHdqSC3dT2LPWrfJFE5QNMadfzJTQupacVNmMY8Rx1mLJKDJuAghndCw8dDFskx8DkcdaVceJEb",
  "key20": "3T1ssvf4GSGvTdKpw8BGir2i2tpYEh5wnRXEVVmNPvk2qTpDgVBaSkujnCwtb61ynUq55yYPrjg47Kk1Gh8y7ZH2",
  "key21": "42bhqYLewkZVnRUSLrdcTYMHRK6tko9QPDvNr9xN2vg78Cfrj7UGVegkggcu7QXVoDh76fkEbqBwSD6dW7f2X6E5",
  "key22": "4nrfqAyqTjjJptaj5P4hA6QsM5WZ28CU3sAi5nagVw6eDQwLGFN1VsTPR22P3so4iPk66NLY4kDNkHpzWXDqCgJg",
  "key23": "65ctfgT5yv7BBfhVDjHjh435Q8tTCtminGikfWa2LEWY26i8n6ASmpRHtcb4EmGvoc59aotf4aT3zqcJV3MXv6rL",
  "key24": "28B4Mo6ihoxQKfrEQGFX7hPMoPdjMweUcvVJeKqPgfkEmqQD2BHwdouwbNcwCgJm295QK545hvmcwPwLUYHMFn53",
  "key25": "5Cgs61jSZS7rrbrisGLsWe5sJpiyS88ZfaGpHeyhYqiGCocWqwvAVVXahPJK9o6ANxQYDDDDMkdwGDz6VZQpb9Qu",
  "key26": "25Cervyd5ASg2Hbhbdu2ERjkkPayozJoCDtneeTZJ1YaBaiXjpLc51956rPPtcULXB4EjWkfFngdjJvBhqDw9qta",
  "key27": "4meaud9YQkw5Yax3Ci2wZSfpR4JunCxFA5y2iaMJGF3Pqdp9jsejGcLBVBb8JUgwzignKicUf5rQvM8p2skGH88S",
  "key28": "2m4RSzmRbhYmbfFjNuqmshgFW2tht8bgfCzh29ERdmYCAiVMgm55KaLMoSJhpveC2QVaEXzviicqp1Xa6vqSjSzo",
  "key29": "53HZfjBUmzLAvg9eSirbUUdacsUjA3XCjJQ3rWTg2YUgsh9DLwC8UQB6vYpEnVMTndxPahRpRFKV13rZGCuF9fBs",
  "key30": "RssvNmXTqMsNBNwGjq5sDXfhNMSbMPAXb2A8fMfz4NRaYyHziZjZmVUwwxnCYEfZd2x13wiJApX1i6DzbUmayZ5",
  "key31": "4ToqJ9fxJpy3eihGgcXTQ8F6ifq6cqwbWvvjx7QVZRXmQgWpBbKGpHmWEg3uKF3vZ6wxqiy1FtqwwoZF12KEzRZK",
  "key32": "2NkgVscGFAVs1twndhWaY75bdtKWGdZaH2C3E72AZW3C6bG1T3sfm11SayPrYTM86SeKwWt9r32Qthhx94tXzKnv",
  "key33": "52ESqZhfRqLWQRZkHQnu3yuh4KkYD5c8NQqLGTB7Kykg234e3sE5XQQhTpLS287vMcpNQp2nBVYBH8GxBsSTUxRz",
  "key34": "3MfeVfebLK2k77vYpm6nEhaQjxDETQkvU1KDoikjiaE6PRHeDecikvmfRAEm8eGMCPvhTJBjT8XdXnRDjD2ntBHo",
  "key35": "2cGB82q1EMZ8q4ejF5JoFGhbsxTVHGRR7AyC3aybTfZAP6gu9BYLASaL6eHQQYbCELPX8XJDx3Cbkgzvq5djE2RY",
  "key36": "4jeSxqwKSLmFdENaiCCEKrK5uPv7ys5gtArQoQQo6bLtxVm2d5dyVphUvZtoWph6wTJLBfoEqbf8ev68yqF2dbP9",
  "key37": "tVged4xUahNCZefdLUFs5cPidYCdfSxkeMSPWL9e2ovsnjcNcQWF3cexVDNtf3g2fGYcVkLaxfaQTA4c18pGRey",
  "key38": "5j2MZL4wE3KQm6kuvDySUNRXMnPR8V6MSehcgTyQN9woHWqn4fDu2jwrt9sXeUZ4xvJayqQhaxmA7nMrPM5VWFPD",
  "key39": "5ybC9rDcbzTsnQGfh9o2YLZcha4zLK4Ni2rfJPQS6zDuezb1k9NJiqTJfqVRB2t4ALkbxquBhGfLruNyECC9vUjX",
  "key40": "2p1TPa4rwY6CqYLLMNFouZ2QQgsfxDnkGHTwWr2iAVbcA5VfZDsfSfnkUND9roDDrBAT2yg26u6XuKRVSmqLs8t4",
  "key41": "5yUcSeUs4xmp6J43RS2KWtfvaSVPBi3zhhEbsEQq2RysJrabXxqQmUFRoEcf7hCiwV4Lj9C86hFXv6XnW9iVjoqY",
  "key42": "4b76hB744y1VJqKSeVKduUEtdpe5HmDJbGNh1RuaZDckS92vusqFKnt4Yy122nyPXs9ZbSVJ1jPVhLnYmFai8Xwq",
  "key43": "4rF55qdM7Vk7rjWNpgRN3WrXYi4oMvGGQ1CY6GNQmKnm2DEG8TvZe6giixkat76X255rdzE9Jo8kv3zmvyT8GNpK",
  "key44": "58XtVhuizkGFsnzAC75GJPSQNyDSV74phmY51NKF94Naxtxo2mJf3uWiTKsrEGQonEv9MGqSKmNunG2q1Brxchhe",
  "key45": "3EWhfdSDFGqJ7QgPy1fW3g9BcAncg7km95CTCm9ZVcw7At341cr85GXnDk76QSjFk41dffiNSJBg2uv41gVhrYAt",
  "key46": "3vqQ7m42yTQbDT5itjBW4FtXFhZ4zTe4EVHu9oMLLoC1H9nwcK757sAqy9bRCW4P6Z3CSHHhSMwvnWbo4sRBF5FH",
  "key47": "3yiAVkNnq4McbaHHvSJhVuSFKErqieCPNjti7QPy8mww9LQoNMdaGFUgC4ycAL9Mz9XHyuNRt35EUwnsyeXqS4rP",
  "key48": "4jNqt2P4bb9qwGY9VGzXa1u7LV8GxhNLuaJNm3nDbh7QzRjpHXshCkAfc3S4eZQaC9aRRa771Nsrjm5KXvTHVmX8"
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
