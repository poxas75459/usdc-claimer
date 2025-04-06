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
    "2HwG1yAwqkJrT4oxJSNarksSjqEZhTeqqwqwNwoHgqAo2d9HjVsfEeNZW8JHPsabYKJ2PshbydoGpMgFf3Bp9g6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wHKkvwJTAfP1YVwhcfz7H5rGDzL93hTFsTuUJPF3v86PKwV1Ejn2zqdLmNLjsE3hcB9Z2VJi7njGQeqArXMN3w5",
  "key1": "3zTxAPLS8AaSRmMVkFgbw67NqXPFEmqSkk7pdb8dSGcbKcgAWnFnQHrq1McjrGiF5NzmpN5U5tw5xqmKnojAdqVP",
  "key2": "4rNFw7rwLRAJsrFv8m4Bktrvrm6i8Cn1FR5XYM4RiZ1eH5RJSgjHbDLj4swvyeXEv2ng2PE2M2HvVriFmHTbe4yS",
  "key3": "ELKKBE8sDwztLXm1xeewaTW1gCHXyfspsjaA4Mdsv5YwnSvPxwVT6GgY7CY1NXvBUXSHHU9YkCXMVj3aJ4gaAh7",
  "key4": "5Jg1Cd9meDC4U7ZpE4acRzL8JNbFJZT7qkP75TiAg7Nw633DbV4dE5nxHbem3B1BgftytKEAqzkSh5d9GqkCZ23V",
  "key5": "3U7AG8myVznjp7jdgiTwawSzQj65gUaxhgCLafMuKDYcDr6oKCvLwZVUb9prXtu2DyinX1yPaSTVbQLi1bDbyYwp",
  "key6": "4dMwxSePxw4eg6yBboa8Mu3wWrF7us58tm1E3FfxJS1Xaf9iqkpqFcwWsttEwYjY1t2vqhcmeVCBkKYEuvtRWLDa",
  "key7": "56qaKMujPiKY9vT8hYRqu2GojVfh35GrBgzHUzL8p9Cyfqz4ecKwZusiVmzM31XpnnaMPTPJJXDQYL4oVHjYCqNF",
  "key8": "2FdZUNMgQyj5m9e3EEeAGaZj53PuzjPesEEFfjcBFmrSNw2TcpRqC2HJzY3w1UmoG1TjVJCaLpxiD1e7dNRFXHU3",
  "key9": "476njdTeXUk7UBGddddDnxFfa7feLH7X2K1RMFtLrkziZDyGWC8MWcrd22uqE2qh1UmLbvszQSa3qsQ9iEhfUQBn",
  "key10": "4etptuDuk42gWZx67RsAuf7rCakjwHW7JmtSQjZi1SzJHg8nfug2Yq68wNVyzYK1xSakedJJUEpFQwCL71uszr4Y",
  "key11": "3ZDxVuP7JPhRJagTnLLzvixGod5ajD1h4a9QEYRuNaknFJS9Ki9pFzh351hk5AedhnpmkKT5Mnskxk48FqpRRAwc",
  "key12": "4CyMdxSBCGNe4XBAowzdVytbQhnXxDqTzhZG28SCuTpi88yuJxaKdmucEBBQKeczzJxMTwFu2bQCcm6PzzmXcT23",
  "key13": "2g5NqvoRWkpGUmL3Esqv5iU57BG9C3pijNn9HJdELxAuHCcJL87aXaiWS7Tv2JyQYnrp7o6TExoetwTqaxdvykXp",
  "key14": "5KZtb8jNkjsCyiZj6sPb69h6VbzupmDy1VwcqeLr6KJ4RfehiDMKZu3mxdqM7hH9sTReAQzcm99DGtuaPDNBALo4",
  "key15": "4w6PHR2WxLK797rPHXtjrrwnWYhvKwm867uFRNSH6SBemzWxk8yjmgjPwS8Z3thLxow65XvAMjwoS78SFvdA84AQ",
  "key16": "4sGqVLWo7NHw1S5kHdVHPWHUuVQgZH6jGxAe9Ky8bgEAL5ABRcvVJfiqoF3ohTPhkujok3rA3FkBMmJFfSgfRvcz",
  "key17": "3fiJoUTGv6yY5B8kBzu6Z45SrGRmanqgeGgZcUQMD9ekV44Y15pd7qf522VDiAxUMmy1oPSQJBE7Z8NSnPUCsykV",
  "key18": "4o8N7UxvaFHYeB6rgPxtSXVCosr4fgiHu88fNFBzAtTritPwwBEZCSdQnsh1E3hcxcft67oNP2B5985x131u8u2C",
  "key19": "R1GFd6tV6hPQCy6pyVCX2Vtgduyn5XeLJTUa1rDsCkUtGCj42QhWM163CT1WwYt4zZQ4M8krNmT1DhxGvXruu3X",
  "key20": "3qWFVSUP4n4TCsHE942pxgSjW1U1H93hMby6vEsXtLAnvtxVN4MasMa4Q2Xsdfd41Gku4FJZqDaLsqJEmxrUV2Tg",
  "key21": "27xHkc9ko9D5482TH5KC1kk8vNNEyrpjWT7dfgXCjLmBWPSEJfLqsc9kjrmZd6iVyUYd2RmXNvd8YojH7gPL1Urt",
  "key22": "P2kY67H9J4SnqALV2AqSkr6gqunS4JQK5jPpikcheTEEFbKQs4wPGsGFRerDRoxPc2dVDRU7P97pP8ZaEtc5T5m",
  "key23": "122DB7T8GWe1tnjKhFBYyk4VgvN9yRMShwZgBT37ZkSCd3izj5KYmUu8goU5zNZQFNbncguJiMTzrh9FkVo5qzFp",
  "key24": "VG24mQqk2dywtdcFpcaAcA86EXujgm4FQAu489hPviUwsZwQwLeSYX7isxT5bqkixZpNifTdyNnmbTkLPKr98Bc",
  "key25": "3sjrSvT6M4h12PJHxVgetvB7Z8WvpM6q9yJ9miAJVeySGgHNRR1MjfFQhcTex3oePYQEJNxxe7N49e6vSzy6GJPB",
  "key26": "rQc6HtZ2fyjY2zbKKuPyTFm6nRT9grKi42gaD64bzg37va8aAvxtkmAa2JJW8ozqYrXjyJBo2KLsU4XAG8RZYWX",
  "key27": "KvmKXF65Rm1cdTiQXAsxHWiRtP9SaE3BhxgvwFjsvgUW8nL4RTXf6WMtY9LUhwavugwPtJ56dRx7pKU9zYQwkVM",
  "key28": "nP7oXpTivze7QdWsGphgzaEDbWhoD3MgD3LcsFsLcgaXryogVmL9rF1R18dhjH36zX7unA6KGjHVzccRbRXmJsf",
  "key29": "3QoTbKgpM18stQGYiT9cLGKQrtMZSGm4Gzdmyph117Y5A3PRLyNN1WZuRNz3RZVbc3M4QtsZC5BG8YgxvhqE44wL",
  "key30": "2f3bJz4hAb3zsMiCy4t8CvBnvaFZSXAGVeSTKZTPZVLCeLDn4AQrDZFBLjkF7C7aKHxLfwmbCQmpbRZJfcCMGfUv",
  "key31": "5Z6MhaMWF6Pbg5uUsjJRau14e72wk8rARjwUciLozJRbsABiZPnZrWYodqHgixSknF15JSrGxn6QSAr8EpP4ZwR9",
  "key32": "4S2cZ4J4snVFC3f5qJgKzi4jgxXfjnikjxCuKyYrsypfu6eRSp9nnQoaNxpWX1tFvzLrmUrG1tViYv52uDGKVbkP",
  "key33": "342b8tfhBQZimFRQmwTEFmgorqVuHaSov1DvV2STcytJ52cbwUNAEsuJpYABa6irRqVLst6UXeJrRoHmD8iuUsUd",
  "key34": "3TQ6dQ7vqQWnAZGN6nfEPj1r5WBUxTVPUN8by9r5tN4pM1SZnY97QnWQgZgsRSU8Q2RPxXXk4Ar4yRS6rMVDHtEc",
  "key35": "5o4fPJ9XaAv6iG8y7dRsUfCTo4rdbdSV23etWGwdxXrMpZsy8nGfGmvz1AVBS7Gx3uULr9vW6F9gPnrJMFY9gQ3d",
  "key36": "2yqBEAD9mAcuQDWMRYXgQGWLT22bruu4p2LFBbb1iyxfUyQ3YZvqY7w3PjjASNFucVt4mmJH3oiNyeNU2pjqaXxo",
  "key37": "28nY5XYYKw9VNFh5JZQqTgU8f3gQbVQmQPjScWQhs7r29JpLvr7ofHTnLdgUW4qxrk1YVQM7JdW4bGgjsBzKja7v",
  "key38": "UMnMy9WHkMYTTznbDF41xU7oChPoUrrGvWStomDfoSSCYbTT8eDLPLBL2seNA284LUX7EDwsaSw9q7GrUnkHMLd",
  "key39": "3aDpq9uYbmF1piuQ5a983kGPoSnzrPTYLweiu5TW4VbLqTzgv38sZGJWWHq289LYRnpMJ3yAdcYyfSpksWnafBa8",
  "key40": "2vp6HjZXRRikZP6SmD1DnyJFkScPcu8NC2xk1AdBZkAsx5AnsaywbEsK3TrVNuopDcYk2tSki6FR82pzB2njVBhV",
  "key41": "2D8swhkhRPyVeptHFAeD1wAnvJawtEt3zqgexg9k1cYzAbwTMohFKNBEyVq9WbPSr9RBJoMZZgt4SoCcA2FXVYHo",
  "key42": "inCmxZ83FcWq4dTnDpTkCrNGfiTuPAXw1mzjE74PKBn7Knd4hKBpxBe4FRcZ9NzzduX446am9KanEw6qztYnHWo",
  "key43": "3K3MtB8857jGXhCRGVbH6Z9Xf7BP2Kw8MvCBJESEyBySM3JNv2R6QQsrwq6VkGxQpNKKxbVmN78Zc3uYaWRCZoFr",
  "key44": "5dNhVAMCapv8ePdTmYpBdJHM1FtcxF1Xp6GM4XzVDYQve8z5gQCDxtuYRSqxn6SooJFJMCQNbDddrpirBHcKq2TU",
  "key45": "WoHH123Ga33ALDZ5N7dPqyqv953eUiipSimTaiqqHT9uYMaHoP8rVu2ndYvLcWQT4o9JjkYxdUELVGYgECHxWTj",
  "key46": "5b8BwiKnyxhTz5U2c6XA1fmronwioFs29b734MhtpFvxTbaQgsnA2KivDNowDUpHYstwXHPstgRCPbMo5B7MevKa",
  "key47": "5xsFcScLQkUXoLdErGkK8SZw4nwejdUotxSymPoyWShQU9YFZ7y6Fsc7wAvzE4pgyWc23gUpmDxMLux2TJRq69AM"
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
