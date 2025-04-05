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
    "5xaG5bTbAa9MHNgdUXTgHobZqQafa4kJUsR7sLk9QA6iHGpj6aVs8UgWV6xTD5V9DRQK2pUhzvSZEtyuQrFuSQ11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RTQsVqzbpPMsDgQuS99JaNoSU4dYdoexkKWtgq9BY3v6eCgcdzpcJgrxXp69KBSfPpFEaJdmFxC6NiFevELZ6H3",
  "key1": "56h5z8WvZV5SDU5bwBqyxfWjCwJXEnyUgFHZVGji2tn7XZVRyQHvBS7rqjRfqM8D2bnmCFVUVKVChr8fCWWdLLyR",
  "key2": "4GFxeYV5if3VTsjgSdR8edSxxo6UufiZZEsqpJtZs8YMbVQvnGsmaXNSxwKBX2SsxUBSTrWctkBKREBEzDuiruNg",
  "key3": "3nhVqWKipBRa4xkEuY1YDDyhRJfUd77gVryFCWwfiiLsnxMcNzXCt4t2CxPMRCGEWei7vaDCVwKdjNjjb9EkXXw3",
  "key4": "58iPYAsNUgFkTDnM1A5h2jYvttgLBMFPTfTifwUzXoJAFWF6UBo8oabe4bNea22mMTR4QXMMdE43TNKgSvxBBFo8",
  "key5": "wH9TM5Fj3GtgmZTN4ZQWYs336oEbiXYnwQW3h4Jw3NRspdzSBoSzC7UYGzsBER58fQo7ViqPF9Khd1R69FcnHpE",
  "key6": "5kuJbZGPhSegM3tgxeUqNT86As7p5dMYGFzUZWLJwsCaZX7QRTj4xvgHYfj9d1gLMRyzVr4EToApsyfMgeBNJNfX",
  "key7": "2rB7pCSrw7Yo7L8Koi5ZafZ7ehYHjwmAUYtMBvUpNeGpF5E5JqVHBdWfxZvo2zT4QW5RdPqNyPADgXgHxrtbYJPx",
  "key8": "46witdfatxq6orMaKR94TVcQTAxJV6hmwPguuCFxB9fEffT4fVuECqnKzSmHz5FP2un2y3QNzc2LhoDembTQ9VBP",
  "key9": "4f1mZ7uv4wa2jroESX8ZNgP3Tt4iQcJGr3fVH32cMz3PwvhzFFDJMPsmRiJXEcyLjPsbwWeAmEs2WSxfbFABPXmb",
  "key10": "2hjZkZhpppjrqAHT2SDLrCtSDuPp9EcM4qvxfdn3t8xRYkqbkMG6RXxxmaboeheJ9jei6zwXvACB8TNNM9a8Rk3Y",
  "key11": "48yihGFTR89YuPmUGfujcnaFRxip4F7XW2gZxVBHB13wXXW4i3FpydM1eRXjw49rGG9cJ9CdYjxga9SWRAYELcju",
  "key12": "3YAMTYR29GAxPR23vJr8ptW7c3PwNa3wBzP3pHpr4wG7nbw3Jys682VajaKPBD6v8WrRcSis7jB3uhNptcUZk3eR",
  "key13": "2Xo7hQQ1baFDJDdCwtMijb8vB9XXj84y5jcJAej2jvUB3vqyaffNXa7icCQxzZiaQe8WeP3udnHM4i56Tt8iKZqf",
  "key14": "54GHx8tqGzkbuTowAG1SZC53WV7h2RXxFC9WVCTiLXmkkoQbmMhw5oTE3ZgDvQtqhbkoUQGHN5VjP7ZooubfpG9R",
  "key15": "27JfMooyFsfTFXV3i3m4zg6YjRW6nencGxiwMhqPCfskr8VUH1ieMbUDe96JZ4C6XBZhnwx4p9sVd7e6NDeSocU6",
  "key16": "TdKCHTk7uv1Wok6SvYyL942XhvCBMmtJm3zyP9qme5jCXVcB7qr7TNnZgxP45bn74tF4VKVQZU2NJkxuZzzbSwj",
  "key17": "4MSrK9oPNjyUQrYe3gqiUnyB5NcpVRH45woaXZHtW36zPB883gUtidyNMEZsprsfUu1x5ZquThqnMAegvkGAUKhG",
  "key18": "5yn1RFvsPivRFULMkgafWKU8u88L2NLj7JZpbG91zfpJtpaDzJmJ5d79PQ7FLKqUb4fP1JkwFL1ofhxYdYNydfFF",
  "key19": "676oKgyBrrXZhVCLvAQHpBd2EZnkHQB2KtqYFQP3cv89LaEUNHYHdqVdqrtwxFs57ZpojkdLjZLkK45vPhJkLA46",
  "key20": "4giTSjU3jU31NQnUw5tGXac6e9kbaQBv6R5iVEJf2WyuHLxpSt2i9w6jcer944QtFD6K3biuKqYWoFtjwzussphC",
  "key21": "P2sG9p5prszzTiM63on7Hgcc3K3cRDDsFNhpw1GuK7Xwb8JekgDPxsYKnwvXUYRHJCAJt87AcuthZxypJwBsEDb",
  "key22": "2enYQRPPYhJiU3317FhUrPMWfCaDY4zoueQaZis7JY7B9dBjvh1NxppVzkqbecFx3ZfZBDAfWmaoAeM89Xvumipg",
  "key23": "2XCRGHiLgoJfHNxwQDDq1koJhuPhnmm8Jq3TyUvS5EbA7xegvvrHKh5sj3oHkmzptX2wjFmDAqg5KexCnuRsXKXy",
  "key24": "5kxCBXXPdkBa8VY83nwbDANeBVxWKgcKiGWgYb32SshG57XuxbEdn77kPxPjx8SuUSszkqBRTgMGhJjFMqgGbFwY",
  "key25": "229ztcWgewsKcX9RBbLYC524G3rGibGgzZCAmSf9aiEzj9nrQuV84fZcH9Tt9P6LTRs6RjaSGboJqne2tqevoZ12",
  "key26": "2tVwa5CDwkA8Tg3XVdUD49DS1omsLaJEMzk8R59EjDucEG8LeTADnmuN8xBT7w2muTBXtuzQNRruCJPQoUawaaAC",
  "key27": "fP7hQDQF1mgtDkLDpCdrnkss4w49SpGi2bZTpF32zvecMiEj8zTZ8kNzxg2UDyK64nCksZncTsX12jimpfJLKh3",
  "key28": "5294XLGKxMpk7rWuFjnw4wdbb46TtnXdNbGQyNgDFgGqz5QsKk6bKUYyU4dV1ormTjMEcY113TucpSwJi4RS17tm",
  "key29": "2Tdbj6xng4n5PKBLcCwXxUFsEjJktzAhDqVxvmfQebtbwgfHdWH4iGoK5HJ6LrTPbggUvRTQrqnkDFWNjFDjzCNA",
  "key30": "3VuSMHaMW77sn5T7Rb9NynFbpbKA5CHJa7Yv7jwE4fVxrpZQ64t8SiAZWQSXbYEBhtgZ2Rbps79feHqUBw7fBPLv",
  "key31": "5V7W4RFgL4x6nE6nWe6JPaM44MdkJ8jVPiVbFaCb9zwzXxTUA388QgMweaKZzYyXUZuU5yc9Mjboz7Bvr1gvSnsr",
  "key32": "5NtudWPhHegY6yWZ1iWhEvArNVGAmwKBDxWfzMgZDiAYHUvmZsEJGNWnrphLvgxqtCQSuWEGyd2Yhw44jLMH9V2d",
  "key33": "WhQ9L43nSP6rF7yQAHw26eFtRjFY2xtaKeAfRMjZmk5guCCibY1wXQ8Z2Ts5BAkYuvKNYgsRKqkQfDcJnrqvNSd",
  "key34": "Nbpjiqg71HBxUjBZmsd9UvwN3e28jkAZjqXi7EMbJ3b9czrwW5nSihe3fe9dAMs4PA735Wd7oeUb2gxP1E57P3z",
  "key35": "2bJyogyYKaRr2XvM384fYhib6ysgzdZwjhttGmmQ1J6hMqN8fRgZrnrWEtnnDoytsWehWTQUtir7y5XTcCKttkoQ",
  "key36": "4L3XcsbwcrMSkcjfg4NPFX1niFg8xb1z19wwv5NZAn5N8hMQSfg5pBX8hFqbck5WCAYA6g9S6TvUtSTozxEPAg82",
  "key37": "5mHvQriTwpEzYMDAe55HnC5n819rE6bVGzpc7u4WCqMQRBskZuKuU6WKyt9rHZaDeSfNKPYdYHpqTpMTi4YpKUto",
  "key38": "4dP1UtzTf8yQjjy5CCtuQLKXmM6JsizHQrVGpUBrJq4DXCwwUNGPDcukuu2fZpKoHyB7DUHQWJnMx8Ahr5w7zMUn",
  "key39": "5TdUbmw6fHRjhoKELdKJnVtskNevU37LsgjSMtpBtjJqXB4W7W86L5ZkcZ1d11jJLLwQuweCsr3TSpAL4QTvPVqP",
  "key40": "xd13xK6YBo5ZiwiyvPnUaVKiehqZyLmNajr5AF8gZP9c5dwL3JNZQExet1biS7LdUXvAvBf9n8SBHgTR1jk4dKH",
  "key41": "45wPuLbbFsHvrz4cXiGgMQEXWXESnTJPpCi7sUSjGKrhdAd2vTYNtaQ4uRdN5a7AYXRN1VP4FeFX2A18JX5zGCzf",
  "key42": "25nuikH8Gh7AmWGGJQLrmFHK6dcwobrTAfjAeEownmEu1sLFWYdBqwBmmSS7zn45CpLRn9sChdQoPtUB2y9Ng11p",
  "key43": "39CmwzziUkGZWvGNhQM5ceFXqBVUWCBGBbGq6jGiEFXoufXjyAruVaorw6cfmJXEDk64hKxWfdiav49JuFLqvNvC",
  "key44": "pprmaEYqX3SvN4T1PfqHWgRDmpiCtv7P9Laa3Fri2Zy5dkXS17Uz6HWTZxCKDxbnabWU79CqGRkGurekVSzmBPG",
  "key45": "2zMyv7t51xw4WgYh84q9H9VYTAQqmoERDxBjJN5Myo8mBERypo2XuAS9jAZw7SrqCiDBfh925DBP2hKknQ5DxKpS"
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
