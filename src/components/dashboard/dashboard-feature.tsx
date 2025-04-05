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
    "zKQ2DuKVysJT69BtGwLnnST82mdHLrBHRLbbC25uMnFzLZnJ6edibk8XYvfxhz3M55piSfVzdmomDBRsppBfqjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jLV5ZJw4CmnriF2NambcP4yivTi5BbgH47KdS3SfJvSb1bSdJ2MQEhiAqAwwS5cPBDg1dEWLCwdVgjYT1sLDTxK",
  "key1": "wi1Ds9FfzkXh2y5LKjJ9CfB8wKfVDm4reKgf1qJ8GbkzKcQPXF5cvF8uYdkCKfNLjJJU9VPVcx1y371F3hX3bUM",
  "key2": "5JDi6jTmV4YR8E9Mr3zjYdSygwoUxdXuvbngjwSGbEjvBQQFdAcchNvC5YnATxJ4B6tJdDd1FksJaCRFaVa7qPHi",
  "key3": "2CkzeGSmaL6QPBAcq9eqehzVhMiekRVBCRDR5bv9MJAwJqYXtgDciehHGD8jnKkHkLF6YGqEL7SogZ4TboghLvjo",
  "key4": "3Hn75McKKzXfDKua466mJioy2uRvgfy1oUZRS5oCnCSaRJ76z3SryHK7tXCeccn25pdYaMHpuWKhWzqBzUaDfMAk",
  "key5": "61KS6uZ7CRAXFjSV84ZfsefsgdbPsmrjh8r6C7wQot1e8BobbqMMBgfyiNF7HB5stQqhgksi4nbW7jGCkLyLjSZm",
  "key6": "2qAxodg9zwWnTKkvJbYCH6ZQjNDPjFhbi5TgYjBXdugpi8geVWHSS9KhmHJWYhuwgqSeLFiV1avaEUkMRGNkeQw1",
  "key7": "4U3UBF9ddP8JAHKg9jSVZut9wZeTjnPXCQuk2HX7RSu7MPqY2VW7mHiZ82JFnvvNkF2DR65hntQT72JBkUpGQmZQ",
  "key8": "4ydGabrGcRbTJZiPctXapU7CjiBsM1tmo4fQjR7MKwK6kfcgSNLD7hidX13V2DYaMsgLhdfrafxZK7aguX5hYQx",
  "key9": "3TPg4ZrzxBwuHui3gjWTvrWytCQ5jeeWs6Wv2pLnwFBH3dSxkomUUiG7RZ3YvphpYbq7w7pmPUBapBVAQ1yi6ELQ",
  "key10": "3TpaKExMBgPkpdfHtSM6Cetvjv6DUF6kNFLv7FcYu3PMduWDMsteZFDCXqsHBZeqhtqQ1zT8YmeLbL3p8Du2tSxc",
  "key11": "4foERSLXjUjgJbboXQUbe6TZ6QuxatP7weA32qPaZQtuucBR1ANoaaMbXiPFW7tVWaxgRFpWD69js2dfiVbTL5bY",
  "key12": "4vmUmQSmivnuhEQCiaej1y78oPTDxNb5ZG1n1CboDgApjHuUEZjeLmGEYTnnEdWHky2HGYzwivoPr3RZkehdX7Vi",
  "key13": "2bewnrkJEvj2VUifk5Nf6bJZhrEAtj1prEcHXYiJEA7KeHYoQ7zRr5VbyChVwhh8bCLkJzBeifiUxePyoXYR2irw",
  "key14": "TF2rmywA8iepzRKKESXeF7AHQJrVmu39E8SGtrLw4B3D1yG56rfYiH4asMV9Nwg1gJWCiazuLYF12rBirgDSy67",
  "key15": "4R7hmNPCL3Xn7X7Btyjo7QbmswuwHBNdzW32hqQX8dxeetX36zAUcVVmVtX7u2EsVggMfnFB18uMmAxyw5DtqYCN",
  "key16": "3ZccW9QSWEuDcHXZ13qniMVMA9hVMu1edNcPWRBw1egejSzhPd75YLzEVmqqqQDpXHVrNQsg7MNoPdcFecy9i5mE",
  "key17": "3PRipWwG1fJzeyFg4N2btndfSD1RuRe7hptAByJzLhARthSeaQP8orgfSnazGCkneZSMHDNvZ1TspFi12aKFeptc",
  "key18": "3xtpPPunXukUwFHZBnLNmwhfLFnuxtemGwN43L1s7kURW8gJnSpDsVSa8NFn2To6FqcjYQtxo5PL5JVh3jyKWm3h",
  "key19": "4dWRb3ySGP51SJ4Ezpdb1cS3tfMvGQ1wE9MEV9NkcT8pM41oGqmqLXxCYomBVvpqj5LUUGd36Wvw232sANL5Pp9",
  "key20": "28f4S3dC1H42Jqq2M9MQPgxAFjXZ6T4GYdZQLcSRVpZR3rt3rdzVuJEmVCDaeDkWxZS6gs4tPuGfmh7z8pwWniBZ",
  "key21": "cPBryyiSWtY5MCqzfQx9Xes2SBJeVzP9nrK7iLEUErUhKVWbFuKiAJQNnFiAU5EwNUpEv97xAbh8y691zkoixY5",
  "key22": "34NeghYDKpC243wwa7dhtS5USB2EAyopUdksK6TBL93QqgEezrvTy9pvyDuJgtqFwk61VxHvaKEm8HgtNtiyoS54",
  "key23": "5sePSnUDEvo6PA6pS1k2bp7Y9G2F5y84RArndDosGoP9nvAM5ruBYA5QUs4EsyVKqEwe1hbtojSEsHvNMj8FAsyp",
  "key24": "4tsW8L479enk1ETpeMExj5ax3xEKuYckHid6xTcMMHN2QJp7FKBoxadGHPL74aj5cxG3JqrMzucxxVNnocm7ExXN",
  "key25": "5FcbuyjKzsqUf5drYuK9Aeskb3xxHQqebUpDYfyPxbnSiL4VHpa4MnARv5bv4edEGLcX6osfMHkzwmEQjHGqToK5",
  "key26": "3qdaBjyKRD4MXSbaQiV4muQJ2TjHwRKUPu23iknSMKnwbKEs53bAJqaGBF67rjsnfqvqXGKpRPSr1FceiXjWriUD",
  "key27": "4BB5dma4zm6V7Pq2jw59qwDcDvVUH3rxC4ZzW25c1HZLe5anw7H8iFf1vs6RgqT7jfaWPximnfCK4PENzgtWMRoV",
  "key28": "vVfdmG7MEnNo2uKr3QSiWdwZMkKXwd11Wuqi4NfSjsvPHmQj8EeHaHZZjkPaG2EoZP1SsTkJP3ModSqKqXL3Rte",
  "key29": "4pNo2GJoXPGFfjPkcvZVph7RpENSQBiH7qDAo4Ed1DYW9gwfLCbvqEDRnMt7vocZFjFjvKuMLDYLUKuBvZByorZq",
  "key30": "2vPPgM7Tpu7WsVvQNNuNexUrjbFVe8S5qsnv2Au9xC6dTgGxnqJE8xAqdwSZFtpHYRhx3dLiVviquQ5VMEnWNapj",
  "key31": "4nfdbLAC2ytapo9Y73WRvNmrfkXjSYvzUhKXphpbcNJK4Mj4K1GbnReAx36G6jtCoVsytfJTKxczg1Rsrohvh3uH",
  "key32": "481UkFnHe2B7SN96YQTZCXVTLZv1YYh5cG6S2eYWD7JkMGzxGjQTtnWwc5wsXFNuzT2vsbMdEuwLJhR8hfLeVxz3",
  "key33": "YV8QwrCTwP2t1WUmMBSvzjo7DHwbEH62TvNyNxcS5roWetdgDNNGfzJ15n8DXtErqugCFyAwjiAJ4yrc28zRkLg",
  "key34": "5xAnRRuea6LkebQvKQH58EZZXbb6AhcmuYxVQjuB5sGtDkukKUgJs4ZrxtHH4AeBjp3SKCLDHXMqvPMhkMit8iFe",
  "key35": "3zcX5ysmcvLweJzbDDwjNuZEjDUHnfvdfMqzcXnNYEvTgZmAhdLA7CLutYbCa4zGU8TiREDZNW5bzLf9UtQUTShw",
  "key36": "2jyTmjPDfeSF51pSt9T8KZWAA6ZTYsA7baGK4RYHfs4jKFN8QicvUwUNqQmUaBkHikm2kt9UhaTC7xWo3gTPmMJe",
  "key37": "58WLhcwSBcXnDLcTLi6P9V4wHABnNiyX8QmfBgQBL8BqpT4AYDbkxFTeXDi9bdc227d3s7Vf8jusuUZfUQghjSWT",
  "key38": "3F2zxs4PkFGUqmXXxYyvSf39ZjpyXWNJ2KSFESiTtUZyQyPbnYCy98b8uEnDSMKAAs4rfWeWvZis2gGMC4SXUFau",
  "key39": "PFED8JjE5ECJuKzTPGuE4o9Fe6jKDzixAmcUNbT1M1sjJcNVnEYf6HHwgMV5pwzqR7Lp2gdJhY53QY2Pnt6WBuX",
  "key40": "2Zaf6hoCxPSoyiEJxEECmnrAqLKoutchfi6prmCkSzHKuwaBJcSzNzDaiGQX2HbFUdAAu1Wjop58WufD6gL6q64y",
  "key41": "5UCYgbTftENRgf5DrA4vx5E7QZGE9cF4nGjVMEediCjvdGpURzp4Drh36XGWwUfBJH6qcUgj9qY4AxGr6NAwDuCP",
  "key42": "5YEoQtZidSD61AMPnizWXvJLSX9xysWVf7oz1w2bLSZpcZaKwU7GdYiVHprfVKA2TjaE4Zg2kxeunujFFBpuqobP",
  "key43": "59pRDV7eAM6TbYYGSWvXxLAcB9SB5M8i7cznazxnaSXmGudFcemZrAfDgKHhZgutnoqZZUyVBHgTkCihBBZC6uCC",
  "key44": "5G9KyHNadZaUzsmKh7wAJaYPMHjmajPoDnRjAW4YsFBiogegePmTYQGVi4RJGcBbAFUuUfxKvcW13LGBjBDvzmPo",
  "key45": "3G3UW8VnEpfHqavLM9wKeC89BphLXAJZ2dGavWVNLsCzCFMK6mxP33n33qCJihu2SA5REGCePLkVu1jGcjqBtQkJ",
  "key46": "1ZTssnueYE6g17e1MtKQ84B7e38wraw6ErGzQNL2pqWz3DmxgdUACczX6Ef2ULuBgJ3ZGL8yQQrU4SG9jARB2Fk"
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
