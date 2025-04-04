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
    "RcetkkzhvVzCjMJPBietMtXrj2vc5PrbNYgKkNVDfrZ32jV3rqwWG6grWQ1WCKmpWmiuXAbt8whhTiSD49qMGbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SyurUNuTQUVdWsmDZZ4NahNMoN7ggNTvgaRFgonaeUNwyuyEvyzzqvdweg5HBbJmoTu3RnoX94WKKEkm9zfRc3v",
  "key1": "4X7JeYprKfbNeUGWeDtWVEJzWSR9RQpK98T5tFyAbKmaMJtQqMeCoiJ8CvaHqAbMckUwfe2YNSsGVW2RS7rF9eP9",
  "key2": "4Sgp831A9VRhbkYsTq35L8KncJmESppdx2RyrJMSY6ECFdh66tQx3N9u1iTGMK9coVbt9AWxxb3obn3cPogQUZdM",
  "key3": "2WFAeyHKSDsiUbvx8LMyRiuAUwb6w2Z3noWnou3ZDBfRkejoejviCEgmx6QVpfeQPVX8JAMqykpPiiHbX8rBgDcQ",
  "key4": "5k87skWWUj534AgyjhPkotRJBWVWRRdAtXhvCmx2DDMtH7BWv9WMWBKL7pJDVWY12Tv3azuRWE7276Ur7uQ3PfpQ",
  "key5": "5hGEk7QpovsU7iMqJqyxTkF7sGu9v7VhrnWVXeaM8a8vWe2izTjNYB4o5yEPkzr6uGvWBh183ZP3q68vTAp92LFC",
  "key6": "3xwbGHDBTWzY7uuEDnbksyrw9rQMNnkDjnr2TZmisUq5Nq593qCxh1tzB91sZcR2zqaXbFR5Apw3C8PEN1CG9JF6",
  "key7": "3cztBrcoM5jQvGxj5uW6hgrTUpP5kNZRdEvpgiE9cy2NCFirTe3cmvRw7NsWPkDDJcAtRmTPZDVWTDLkYpJr1n6N",
  "key8": "4db2yByeD6Jov4rf2PF9wVM49akbHakAaracDfkm6ggHoDmffguesBn3EqZMZKwhcS4gJjqSTRcC1xNHxyeBZHkg",
  "key9": "4dCi9BUmQmcbFFdzqtYYZBkgsRgbuhXss43ze25WvYXWdwfzq7JR8ckWwHVzZGoJVcdeZsHRrztVsy4cuVnMySzn",
  "key10": "2YAkngzZwnMe5ptxZJUDNekboGwuigUaBnbqNLf1FWGBNqN9AadX4udkhNac3PbzGwnPyp68jsYR3vJhAbYg91mZ",
  "key11": "3uYndYYRJxgo9xJdrqwE9VroDrM3262SxoCxRairaGMmwRAfTGKyqbkryg2RyD9d2EG4WsHCouzv7niBTMuK8prb",
  "key12": "3bv1m5YzJ9Qv6tvCg9umJbvyPXbFM3iAX8PrRNCSfiPGsB46J1P7HHZGBAZ33QwXhcdBFXm9jTTH7ugxcaHWW1cQ",
  "key13": "KcU7PCsenn6zxAr8FuDvdpoc5Uz715wHCW5do1LqGDJ6U2jAX3FNZX3Bsngz6XAUFFoqQnpWV7po9pXE1HhDBcH",
  "key14": "5P5Pk1XbJewQ9cmryGL6NBWXbprE41Jrv1Cx9pepVZ3MwTs72XqwfLkD9kok5cXvVK4kWsLpcZsh8YM85zPvUPwc",
  "key15": "3k8RsypUSxYyg1HRE9uQ3pHJjifbDMdmDMTFHdpDR6Jf7HD7dghUPQB6sVtKgXuGFyPgkj33o2T6uA1BgQBnWwYD",
  "key16": "4YJ7J7ApL7nTDf9HNagFokpfRKBLX7jLA5hc43UvTgUR2pUfAnfjco87DEY4Z1172MN3yvcUJ2g3hkS7JU7NN17S",
  "key17": "5rN2aWPpxrZfyFQvxt6q3PioJd5msnMMjVaiQrFaSucoe28yB13HhvsveexLXg2CsFmWPXJY9d1sEbbLtBb4ix2k",
  "key18": "M9mPimLWj4cJKQG6i6JEeFiqDeCFx44YKfF14whCmzbk9VQH8ZvTUheempmcCS6xyrTcG6DimK6S7MYmKgzRkyE",
  "key19": "er4ewgHBWiTBJYSgf2wQQynuzk8uicRgDRtXvQ5oguV1othhtoynDdFQyKDYsA1cm6hGTHS4QhU85CdsbsKUBEt",
  "key20": "GRP1nUaGm4Y1Ligq46x2zA16LA7bxZXhc4FrFxQNYFd3Q4G3a22QKQZAN2D2Y7msA4YDqz5SxhM1N6BDp59wQr8",
  "key21": "2pbV59k2GcKG2zK8dnB6qtNMpwDc7rvoRYmUc5EV8VjeNcfeZyv9TEZwTzoB4kNM2ypk6zRZR7kRySFjZ7cCk7CW",
  "key22": "56dghLQaztQjVRcJ6qTJFn5XQ1c8jZjJeJHmf5zW4tv9ytdAioktDtCR7A69sxgDggpbiFC8gRo7QtG1eDeR7txX",
  "key23": "2qvRMTW1kNVAgqAtaGdAHYjrcN5f4nqyTRjsP755yvSvzTDGW6NoYurs7qDg8shGsoZvn66NdXTua8y4bkQvwsic",
  "key24": "3hRwNbm1DkHvzAcUM2uxYZiv7oiupR7ZD9nSiye2DEA3cEdCnJXUP4wvDvJne2154cPqP2Q98KyBRkAxA4X6uUT",
  "key25": "3z4jnCrNUE4KYnoe51BDpgFVMTN11nyRokqVGbiwdkA57BCnus7Htn2mdBwNdac1YhRGhVMD3vb1ywxhLG9NaCwL",
  "key26": "yM18DE7iYoXLkSnSc3pupaxnhNdz1XsuSZymrZZCQsyudKAsu93daJEVionXgTYtkqzAaN1g3dNe27JmTY6kRCf",
  "key27": "aMVdCDpvxf1hf5rFCRZKUdaEKmXyfV5RLR3c8MDYHpiZ5f6zkKrKfXBkjU7hkVhUTBtsmaXmhGUFpyQ5PxAzvFo",
  "key28": "3E5TSTo4B1XJnyRFkBUFKNzHZ9LTu7Gou2Y4APud6hmQbEdSHC9tm9NMf9mXb6oUymmUrnb8oQavgGgF5sbu2h1v",
  "key29": "4evYHxVDSe2ZKBeAawZ4vhhySNwKWbVnRpzDUbDieKP3AX4g5zmf1ZVzKv3X9RCP3iS26Jco3jA8PMkFG3maJbYg",
  "key30": "oZLXNDYZYMdoaQvqGjAT9pj2DLAbrtgpsbyaoM1BsKKKR1uNYgFcnT4k99zZCWCx19jFasB2ZR5M1WJGjF9XDga",
  "key31": "iMZNtGNn8GDvKr3Z7JSWGYxLQHmfTBpFk9yK7oj2f4gJNET1bpdfriRYkzkgMNF4aaV2pEePA2Nev8uPBPm317n",
  "key32": "foLd1VJAP81AFrPc6BMjRUL2jJUiHsPyiBHr1qZdGrrVjyDt6rAQwpAZzcfuTtbUdoH4GjKBUjYsvrtAtzKrxRD",
  "key33": "2AgVhjbqHqaRLr6oEndzrZK27fgrvNF2pURpywo24XcAFFPJjMCqArAukZBx1N282SZjgsKPpgT3e48bUxY271vt",
  "key34": "2iDF8jvnt6UKcNuAJC64AVxg49emU37p5sMXueKwAndnbWD84mKAv8V4sMxpaW37wv5ww9TM4NWL9Am1giKVomNb",
  "key35": "56a2yBSHEK8nDFqTskHkJFksaov4DzLyNC6LDtAA2tL82hgwTQKw6GWoRJfb7mwKbWEz7zy5xTLoAvrJefiqybsE",
  "key36": "aKwQyJ5E1PEpxRHM9sV3VnHYN7m8fKV9c6BzAEJP3RhDtS8rAdDJdvPTCwL57G3UNjp1UW1VgKp3QxCFAv8GmRp",
  "key37": "6Nr8t2EBoinS6HdWJsG3R4CuoVD7SPhChUboSgCbVe7pmKrTpLJZ7TuUw3WjJDhEYN6pZDghsHqjWtxunbyuKDd",
  "key38": "26U9epwjS1g8zDUWqnTNTDQpH6xuVZR5ZGd5uVN1AZQ6SkMJpeRKSj9DGWDtH13JmSdmjjb7R4SWmW2X7nyfnnyn",
  "key39": "3iGDAc2SPGtEdvQJFUdKRzMhPpLmVG6yCG5B1R9iDeYnHH81hv4KNCiseLxddgKG9rEEccaGc2RL33Xb6Hc91F2c"
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
