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
    "2iLd7JxZg4h3i41jaEt16kuFwqU8DYVAJS41Zd6UnJbrbHVDydcnGbpQbLVDzJTBBdfy76WVA1p8NfbtR6yyJXcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uASDDMrc3aBQATm73ZmcR456YotrZmfvdyvxRuMjZbA46swjqrXMP55MjMg6wZzqJ9JgyF7ndtJQhGgpPVMPKJE",
  "key1": "553Ei8wxWSqbSfqXSCSHLVUtAi5DxJBjA7VkxL7VLbXLW6RoTnY1qBrinwgtRyfwh1NScBicgy4VJ5CP83MzTBy6",
  "key2": "4HkQf1Rx6SVDXRXJSDL9EUywFLx3FbWapkDUrTkH8rAjv2gydVynwEv1yPFo3Me6tdhL1zBGfS9Sna87Qw4XK1S6",
  "key3": "5s2psEdxR3d8Y7kJeZfzJQuBKBW5iDfXXddbwVZt2JoSFMpFT8gxsAdoCnVFeHU1DeznDZZyPW5addg8HSuR825S",
  "key4": "2cBKNC3MfsbnFZEX4iTSFecPRxq7b6aEuP7MeuZiJohG3bn6zKSYjdtQZC7VGJc9nLTkP4LkRSz21AccWAMkDr1F",
  "key5": "ecHwKSkboHL1MuPGJ2CrY7KZmpEsjNxs1vZsWngsbdfKCPfPryhZ8FsZXzHNc9VHyuxJtjTR572WJbb4suFGRRU",
  "key6": "3Niju3afFV4ogaYVitbEDiAdUu87JCUWGxZZGRA7EsVYFDSoBKu8KHukmzMWCza43yWiALpaEtsRGrN2W66rumUC",
  "key7": "63mZSxjD2ShZAdzSBPTj6kjUtYfwi4G3TW5ux3KXufYd3fvbL6bx7WfsbdDjuUU49ScDhSMLBg9TS7QRdWYq6rFw",
  "key8": "5TebGvAmRDntZERLiQnaexxV2dmuk3TYZ9LRKjuUosbBco6ckkPbPow5HJeeJ4b5mQzZfNp566sTBa1u4uYwEjv9",
  "key9": "XgmX4FinanJM87LoNtau7YoCRwJphjffcz4Ss1qZdwXPeVNTyZqZdoC2fiCzTsgT6JP7FMqgc6wcigS31GRK2wg",
  "key10": "5opFRJRaJF1DdrBGYW2EMreBscmwUhGRe933xwmkCWzpxvyRiysWpRNTExUUYkVYHNJ4oYSZ7ePbaTucoNZ3Nyjj",
  "key11": "4ravX1y3VDQtYwxkhwL9DxwxzvTM7GDGUzbgDSdPxtz977gVXiUKkNYuYSV5eGvvGudnX32xjJNeFuh7L1mtZCWd",
  "key12": "2EFwovzg7gh2jVPkHVtodtBb6V1AcxaL5XekkSnB9qvcPuTRCTbc2LDB2AXz62aQMQxXCnqMrZibNshZvCZfLrFT",
  "key13": "2HN3Fcca4W8zf3bD2Ux6SfmSBhy7krvqrDvVDwqu3yK2oPMVnGmmNew49PbdRAJRNeSHdLPeSAe6iZDXXhu1eAZx",
  "key14": "xKJ2tAPqZpjLsxbeKbGqd8QMosCRinoSyy4qSgK4TMA4j9udmvLkBsnNAqoZt7qGVPggo3t16YRVLEofbqXeSNw",
  "key15": "28bJjxaUWkQ5AMkywDC8D7sWt83dKrNfAUGLQJwktTTiVhw5kLAFp77DR5DrNxrqSjWocbMZ6UkX88SHVBMK4nHD",
  "key16": "419D7UTCs6DTwn83bvriqbGasu43WiZZhXuLk7SXwgBEevdBMvH91o9VwiBuKvps5KNjWNDRUdE6bTD4995aws5W",
  "key17": "55PJNcKsAdQBcFR2jWmy5vLfTsFahNuMac3tRZvxHW811DYPnEjXHmgfUfqsK92qrigwJsmeajf2HuerLdXDHErU",
  "key18": "5Q4qyaCWDaQq68Mn6vg8R1M8sG7CYbPdYbbhnY6e5yFF5S6g9eBia7Tf7kX6Se286WFbhnTyUAtyKbv1LDCHaun6",
  "key19": "4x1CUKp7dVzdUfVT9cTZRmH9g3MZQtrET2rsqAms6Ji93FeH8tgGBGpzm4mWbvuZhUJ2kioZhbAU5weY3B7jYR1U",
  "key20": "29F4msWYa91eAd3kKUaYWW78WPARupuXfZu6dEEmPkL1dPf6o23gN6L3op8ni8APj2cZ6RHZMTXbWEkc27w3d8Yv",
  "key21": "2zkY2jG3M9otnQG4ni8vVjcWephdNUmkgK6jvd1fGJ8TfgifMqCdv6Rkb1WYdjgQ94ik6yw35F2shXhYSwoqsjXy",
  "key22": "xWaKv7eZSQQbxkU2Sa5ZgeuajciRQRKmmYfAX42K6NyzrJRdcfRU8gc6ArdFSMzddEEMjV6xom52FdoE4KfF1Bi",
  "key23": "66AmJhv4b4bf6Rmm7zArnkF6RghCiVuVY7P6vpk7NLu1odtfhWt3JF1tUHkFvpkoyvKdSXKLt4ZozV9jSsRRukVe",
  "key24": "3T6DCFJhJP8tF3bhdbdZrp94AXgbxpf4MfopmZy312F7ShXywm91nfcYG4kgqx5KshygcRahC4Hcf9PYd1Jc4D5g",
  "key25": "ubzetvVTqJetPscBR5yLamyutYzPeYQwwN2brcZX3L2i5aoBV3SLUSVJHwwBtGmiTrUQr2tfqHhvKgugXa72nyB",
  "key26": "BVwxXUs3bAXbsnCGqY3HXSbhkVqH94ueb4GJFXBacgrRnfLH8sD11VYQGrPHydt8VpZaaQtJkCSA4gfmiyTRBSp",
  "key27": "GoREJ9JAFFtsL83PoxqrTfKgqjQhnuhrtae8Y6bSEjL7NYU7FYqKxMkwRX8GUuT4WCY8zJrmPwfrdwbt8VZ1pES",
  "key28": "4oTcTLWwK8rQpsneLFMUSdfT3r9kXGpF6Uvwo15qo9mPbgR46q39469JdYZ3eM5rpirSYMrV21ipzHeDrK3kTKwm",
  "key29": "2N8i4ZvPA43vz98hhYqKN3HzwcniaEmEYe2QgvUfuNdvJsDVAg54F4v7oKvHKy3XAkc6Krsfpceqgwv3GuMf5Fx8",
  "key30": "4JVCQ5wjPUANAfnPfesCtGAexVREvtqchMHHfAWVRSSu3tMJAYmskfjc6m2jiecAZuGAVW9fvDCgi4S8ntPY3qwn",
  "key31": "PM57mVVhxSLuGyeeKp6qHvmomAh3QbpkpoLxZrRmA35ZtQysY7MS8EXE7bYtC4HwFDoVEMUgbYRq7n6KyoHu5hg",
  "key32": "3Hkgf56ghSWb4Do5fD3Ue99D8oaJJpQTSw9dL2tDfD6LwsvBtk3wjomKT7afLnBsjhUvVWhTZEYJagXUau9Xrhsy",
  "key33": "5FfXhfjpP3jsfa4LtdtVb4MQ4bkTRgzgGPHZWRfJnNf6KZu1xpM82KVS6c2gkUk96Ui2pFYq6MtE4dNQP7Kyt3rb",
  "key34": "43EZNPFSbC72dw43gXHUnqmoRo3eCvKkSVBhSfJsxy8j8BWemmeReCUL6ig1dQzjjqffWLcgweeDwm6ExAsm22Ra",
  "key35": "5P1NfwRigh92YKN8DVJVvv2yPVkUNAc6P3oqyVEC7bfvDN6RCkMbZK7FDuDHBvUyxy1MvGE8CobSoK2t28buixoU",
  "key36": "3maJjHpSYLde19CPzgprtu5oqrtaLxrZvRk7ep8epPEKNZ3cQy4UFvMCuLgE3papwFt4YXJTp9iwzYAdPqfmc9Rk",
  "key37": "4xU5EEzTjVDSRMdsw32mcUbbxnbvModEaX1jgDkLpViXSwm1ybcJWBSLGJB4P51G7tgBwih4H2pYv8CSrzBxcS7e",
  "key38": "5WVov1695JjQ5B3hgafQnJXTsQ8m6iLRSHDsZuh9xHL6ayNZ5ym62HMf27hUJZA1zc69Rz4TThTTyVFtD9eHUvuU",
  "key39": "5TbaDrp8j1WjtkDpzsDX5hxsmGtHyZBkkeaqCtVmhHJg9NZvNKnYVh5aPC594gwvP6Fcg8QwTbWTE9v7arVvDFgi",
  "key40": "4P9zLRDXDr4EcMQQDRQmUrqFnBjMHrua3TTy1KsMNdaHnFdDNugzF7FsLhbSNZEnyJcvXX34WVoSNtpfRvJYkGUK",
  "key41": "2c2htudewmXC4JBS1HnUN52JZskTCuxFzUDum7i1fH154xoga6w7Bihs8abywpxKSpN5ftmQpduH2SycyZkZ6qJA",
  "key42": "355DMCstBhVBgRt3pSEuZUWk8nwswEEfa3sPgQuhcABVdBN7uPPp8j5XLxbeBWapQdWVT3NE8dnu8Mig7Tdohkqb",
  "key43": "4CvCyv7YoxVHpJCFGcjyxxzevmtuETYw68hQ5NHz15kfSaaERCP99EFM41BEtpmnDpdvqjDoBbSuXeB7FKQ3N8v5",
  "key44": "5B6Q98cgCKusnqcUMirpjMv2Pq7BMD3vJBf615p3eMtgy58kYtenD7m5sAGiXQrmrX2zszY1CNNwG8Q9Xdh58VtL",
  "key45": "knDNaHekLbFFbShQSkLfDazYnLDAF58jQkRsNusdETs4hGym4T3oAW14pU2kMYySCTgcRd4p8RyCt4jbF9tEWMf",
  "key46": "2pcvu4CPgJPFBGYKjJdN2AjjaJWwfPw9euAYvoEsxHwEGhLfRqFnoKL2bMrfk4WX7qRLAUCnSyzgyaWpWPei6Q6Q",
  "key47": "3ZKqQsQyNWL2vLZBGn6nwa68uzahsHz95Xwu1qrnhZ4SLLfPMZxzWSKe2oTTqZ6TwXkmbSBQmed3dEGzQbhgcXDf",
  "key48": "kmwU3GZgkKtmJggnSc1dKqo9xZfTamUhfKMxyYpLaUZsfn5MUveFD1LiKBCkTSogdjsi5cSJXPMVdgzyk5nDTZm",
  "key49": "2RxciaYusL9GK8bFcKFFG5SwwVrKP1zoaiXYZUv6kYvKhBD5xrLmRQBmhacdMBjfgWQx4KNQ6EtmnVxTpVTH5TKX"
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
