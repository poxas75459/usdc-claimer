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
    "62PCwChTMyvdwLYkffoox1oiTtPt6dwZBVhX41drDvsfv1eEafXdsvhieynuaui3oAtn6i4zMBk9m9RSNP7nnBvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y33hoff3Wq2Jq6Z9E7j1oUscR6sBqFUsTo87Y7tEyNfAURYMhXWk3StDt2bcWkDmqNZbwspkaAES5wUBuomZWKt",
  "key1": "oVEWqP43EvbSEMJ9xvPPh3KqVYtSmwL22d8U52cqXKytcosRaWqRSmiwSDrjKpFxyZwtRBrgxEQakvZekiRAFt8",
  "key2": "3edwAVcss7gzbiQrLnCHjhLrhTpqswFM4JrkR6KCCceRDVNiLaHhwosuTdjzChaZFhSbqLty9xqAkSNkwbAZho9m",
  "key3": "4GDaKB31CvMHwDwzR7JmiKBJrC24omVrngQkT5cVQpB5dz9gLofRBB2e72y4REosSEo4pg3nCqdK2p5oxHpE6r18",
  "key4": "2NEmuHCxjREtuzQga2EkreYNQDHHQoYryDCg1zAfUQk4LqospK7553QTaRNkg4i7JkuZ5mDDSvtcCBo1NFtE78xV",
  "key5": "2raXJbhD6UyUSkdWk3piPDun4gHv5PrHjsZ7eoSLwE2wWuDtizaHenNPHPuCNErpyj1ax8aA19FSr6kGHZeJpSB2",
  "key6": "5rwRvvAMHt8P4CeprEvz6HUYC9tGghFpJoiYMbMu8t1dzYrAvG7BX6ptP2x2toXhh5iEmXzjkdDjPzrXXnCTWURc",
  "key7": "3nHkSS6HviJHsnSf9e8iSkxsDKPjgLhwvMJ3nsEcrR9nBGXitenTS3E16ZCwogG9FGrSYphPAGTBZUXsrndvJToA",
  "key8": "UbhM1LkrzTyEJ3thLAMUfdvR9ZoAD3TrsCLqwdHGfKjE5QKdCfeMyLZga8RLKG2r6epUoADb7j8BmdK124s9Uum",
  "key9": "4mp7U97ZFsHv5J4sN4zyKAuE78k8WNjoUocBunCbEtUo9TNYYyomJ1r188iiMeDes4gsyLbj7Z8kcB99qaqauoDx",
  "key10": "45GuSGbhhoyqJKh7E8LuuqYBgMad8XCK42fm6A5VjUV2R8ZraUP2t3Lc982nxmpyQnYyJZHJWBWvL13zkgbkSJRb",
  "key11": "5c5fWvkBmdBD3yySjBtJTzrmgFCoEcCp2GhJYRZwLYiWr8frLLQuQB2n3u49sG65fyhcgrxH7M61DEqfUvg9STpq",
  "key12": "3vfXLKRHRaif7QXyvvvyHuiaHK3sMGGiUKqjFvfs8npYFLGWDNSCHt4TYXNekLxuj5QNcb4qxd6kMpvAn6EwHyJL",
  "key13": "4bzu7gB1D23wPQ5rg3HsrUreLhpEhTHdChcYEoDuG1BVGXs79VCeXVzxJ4GWUhpBZKAQDpMuEFZYNCssV5gxpF7g",
  "key14": "4GHZTTo8r2t9N7X1ucKhgk1mm6w2NSjtqABzJakRqw6E4jG6N56rPkpPLDpjmKuMT88gXVwn23smCh9px1Pb6CP9",
  "key15": "5omQXMZDxkmVCXWft5tWJszTtBvMHvi913hbBpmgcZEJwwhBH8VRUGUJ1yeMzRJZJQDtUkhkcVt12EvKCMc36rS9",
  "key16": "3giHwjQ5EnwxwuDrgiUewgSHNerdPewetXaVq4i3a8bgGqEM6Zb1YbND9cfYTJL3NAgZhVus1VQUDDTmSS7J7Xjv",
  "key17": "bGU9ov45ZcKvSjJxecTgtPURQR2n3WKYtEdeYuCwFMCSX3YLUuCi2P7Xxiqx6i5QMJmHUWRpgy9F54Yp6RmhVV3",
  "key18": "4abRTo1gooPS5cST9YjixNU1W2VKh2WVNhRPShKyjKdQDTWG9P12wTc7yH5WDMcJ7FM5WxxpVQGco1RyBhUvFspr",
  "key19": "4Fby3qBvLjc5iyseaPmaVY8bmqTpPE2M1D1chgqPj82R1G7uVgfemGqQMyKqhvAW84MxFgveZfvRibfLcKmh6ZyK",
  "key20": "2p6ayDhbtcTjshQmBZqAhyK2xH3JKK5azhk9sU6wRULmj6M2UxkYTKZHBkuDyPiEQVjEX8M3TtTBDhKf1Xpq4FNG",
  "key21": "5NUh58JxjX5VsuGLRjiTyzT6nw5NuoQfg1LXV1exe1BycZ4GfrqtuBoQRxmd157sv8ufpAbVG7mjyo9SmR58LckG",
  "key22": "4nWN2Q797bFYYr3JhQFmbz8P5uJaReszhB4CCNSEaz1NE59JPGAUdiDywc7HUaub4Ek3ySUYB85hGWUbjbCQoN5v",
  "key23": "5FNHoKHYHdHm3QM9aYbSzTcA2yNRE9Sa32J2Ka5mScpficCpmL75axcTR3JoZe8udZoGpHeWoxqGvajgKdZvoVb6",
  "key24": "qZoS1LhgHj4H5geAN1fpPGPBxN2UQsvHjPPKMrTjdcG2azDkbyARYSZy2xziUgFD7iN2e9eDvxPKDTbC2BwiY9L",
  "key25": "5TczQbL4cfzjmC3b477WBQVBS45dB8m8RPup3bAAMiAaBkCWgPA6NEgQ5SQNTH2mWCvrFsXkh8gDwJooyxMQT6Rj",
  "key26": "3eMbTVEx6dZvLzgkDEMTFw4jkVQXxkZi47YYtLzRqk4kFwkHDbSXW2JZGHdV2RazPyUVcQVjWvCqBWN6QaxrN6Fn",
  "key27": "3Ah4xdTKTvX6ZLvWNqM9Pqa3NKPhNyVh8SmXovmfnDaFEp4nx9vPeMQsfcTygch3bVfcU1Qy5JMp5GDmFNZjuCX6",
  "key28": "3c81dLMpcqw3aCGi5sidq5WkdSxNHwruYQarWz3YPTr9K8VwFBau2PyN3cU1Zz7NyGgUBM3tp9ZhvTtgtj5FcK8m",
  "key29": "2PSkDLEizYQLzh1J6SkZaNk3BhSHE4RJn3rAyjguGqtvNJ4XzgumTfV6peS1KU4Hbku9rKushZVaUufFf8fGmqH",
  "key30": "37qDBu1QnWdEg8ukE567ukWRzcmndZxiKeZqvRkDVwCCseyrxuaZx1HizmdzhvDo3XS5AQjzwSRy5xHjDDJq4cQG",
  "key31": "33mMhk58ysQW4hVRRGYJQKE7bLHkSJCq59FXhZJgkw7H1dcm6teLzbUaekDFWjUzWWV9jASkycaojJKwXV54PU1y",
  "key32": "2Pf7Da2qKw5hpu4JTCsnQaDhMDrkwiXzNMmoEWuLiY3EM5WupnEHJ7yj3WQH8GZHamkdNgkyp61SSJUo8WHAzaX9",
  "key33": "4NQS226QmWLYwFcuH9LJy44kBZGspDK68HmrDGd4nZQX1oBFQqAaRmayCjr2XmNJBqu2G47PmrT9MZBqZi3C64oJ",
  "key34": "35KCWKKpooRWFmPMXN7jUYiJUoSMPYKa3gm4reZegn4sAWNJAwyRq5DYCZM74693hLK9ann14rEeGYKd99mpxwK",
  "key35": "2BTF3uoX1axSnUCGqUdboSryzgwUni7SdGZpDWKNUbVznQw35nLzy8ukSMTsoZwFqJkpzYyqv8bp5jRmNa9V8fZ7",
  "key36": "Y4vq8Vyh2JvSXZGeDXR2tiLmRkHf95XnngvYquGxMaUp2gYN1G8GwjLcSA4usa5v7U2TvvJbpCJjG8itKxKunJf",
  "key37": "67jshqwwnWyjNUHSWSgUK6pbE1MQGcsn9da197fnUffqVQDiTCWsxUay51oWemngbU8vzz8vRJg1zGmzxmeZDcAH",
  "key38": "5sZs5uwLHNR3DsN38v52eUyL98L8cszqcYBHQnkuCmDiUpXv84nTRRKFecor4uVaiFKL5opTDjTqhvKQy1EbcNxW",
  "key39": "3rLhQtxFvV7TBPHArakZGon8sswW3TcP3pv2CcmD9gU7KLZxSxoaX38FhguPP8EQWBmfaaBSCfVES2qt33xwSmGf",
  "key40": "2ZmqFAewMkhMxhhwhsV7YbLD533fXHyS3Wq5XN8PBhg3wF5F2cW5gzF9p72TKVPSBtcpmAwF8n6qdBMz5gbTuCa5",
  "key41": "5SePiQ7rxRjnftTEtyJ3PzaEJfjETxnqKMwjACD3jAyqFt7im3gvubBGp7bHn6GE4vM6zmAyVqZFt4XVy8usSEDR",
  "key42": "4TcAVirhQfLPLfDA8zxdtb2FczP5YWRGBE1bSpWK9BkcFWcBc5ZFHhzDViaiwoEHtpTkTyLuc1e6WjQWFitW3Mm8",
  "key43": "3M2FYv88hXocrgELbgYjm5we5D7tfyUuqBHJ2a9AZYT8B8fRFiomyqT1pueeBsAytrkAYLP27vcrMCVJkhYu4YED",
  "key44": "5n4LkDCvvgLUQMzXMgTKPbwM4aPzKJyLPzcm4P35nUdYb5sakLaAnTVjDxoG8G3gSnHYW8EJYpZytVRmjcxvvAJu",
  "key45": "2i114AJgFu9AWyZoG7BSg2ySTp1zzoD3a58fmHGrqz8Kw9YS4heNaNrX99GqFnp4PPvzeXemrU3v4M35Ji2BZmiv"
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
