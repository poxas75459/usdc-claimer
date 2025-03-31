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
    "4tEHXQ8mAPWK9joNMoFUNpCiP4jPpVjuXbVAY5XKN2Rk1YXovEKhxrta6hoPrnfAbVgYRD6LoxkzFVD8jmFn3sVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55THvUGrHHFM4iUNzoGvujxDfyitocdrCWkjkRDeb8navPatkhQ7DTvwaLGfVzXu3Ta7c4wUVhHVKNttqbU6m7mc",
  "key1": "3PneDUV5N5rN1ZP51JBVSzCpUPSWB8LMjRddpRBU4xiwTHcrL4TLx8UgrTamv7kT4ycRNfD5LQeEAENQaKxTPof3",
  "key2": "53oC7VHeonntTKj2NWUghUgP18Uxmdvtf2fuPX4ZDp48KGgJFqJddCbZejvhLok2WC6Sg7jZRBBtnTqMoqZxMyCJ",
  "key3": "3SiZV7RQpanB6y95KwcSZHNweFCn6Varnp86D8UoxbTGHfuU7iYNNuBSQNseApsG9Y7iohntdXPxDax6k7k9WCFP",
  "key4": "5jGuRt5VvoqnmRhrt3HMBo1EaMMzYZK7nnpWpw8LoiovC8GLeCRKHDSJ3ZwFQCv7zZrxtmAmFX6dcWfmxRCWjUNn",
  "key5": "3Nt7fJxMVE9x6ttHTCkmLWtXzfkxBSU4egETZJyRCWpGcNHodRqo9tHn7RQTFQiirGFJLMcwTkKhQshFFjRfw1nn",
  "key6": "5yczyi1b1feRcB47aPC9Vx49sAu2pgF1ggUeT4327HMuV1NSP23YpUoYtQbYfTaySnk9ErABC6EEj2rJQ1E5YFe7",
  "key7": "2Uw5onhR2hd2LKSwa6QJdjaMt3AGSssEBNWey9ButuiiiUp6xEmaecRzF9hyByxGe1bgcJBHEZFz1AkyFxj7EZbu",
  "key8": "5jrYgQH3pWwAdqKuq826pWAhZacZtHSa3gdioX2K2V8WbFLGxpCSTU9CxZYHDzJnCGt7jVGoU3y4ekRq67cGQita",
  "key9": "uHx1vdDDaNXtcFytRTDnytHPPYD116A3HXREjKKXB231yJhsNndh9YBeU18A2MV6e82FeKhxWcgsM8EQe71czMy",
  "key10": "67ZP6hTqTfMMdM6fjDdQsvCyTSeDY6MFtueKYRuafkyhZveui5ssbH4sjtj4pMGs5ZsbhFQxhxn2hY5FAQmvXQXG",
  "key11": "43uK21ssc3j4MgZxpuueKT9QuK5rbqVUnGhZvwKFfyT723gUY9vFDBeQtoa7KaAAMqG4LSGEczYRdoi7U7xfJWpc",
  "key12": "5b5q2DX5JR48NMAsdx2UM4A7U5S5Xg73YaQRtdWoGYzRGftMvSY6oKo68mbCj5MhSds3CeG1pB8TKQcuy6gJo5qQ",
  "key13": "4BkWgj3ct1sj92fKHygti6NJ8ZWQi5xTPQEx35dXh9kfkgdZVjce2KGmdmr3476QGSbEe9xnG4ErBnqsTbFphruQ",
  "key14": "5RZ33as9jLdDmEhbGZNDGTkBA1PkzA1KMP1ReX7fbQhqcWxWoi2USc1VF24wJW8R5AxqMwwXCyfVvRNbCdd2rdZz",
  "key15": "4gcMH7C8Hd1NqH3oRhaefoazuBwMQn2aooTZmhxyuua5moj2Ue6NNiMxYBBBeYXacdk4YJjXf7NxkRh4rSRZzKb5",
  "key16": "3B2CTcX2ZiPkqKx7bz8prAtkDSwEugjtkSrq6AiBaJJmr6AZSDBbtdb8nq7Ae2qkgAaFeDHtCbEtf4wVgCDAiA5r",
  "key17": "5HMoQ6gigCatTVYAsFUYaTjHTS1ioTLBfzFgBi2yep4D27qPafMT1ePRpJ7cbBcWbkRzrZw5Dye6HCb7MYR4ZwgM",
  "key18": "2KDHqfhgc7enLUnoZRibGfjfdEDbT4u3FUoUuhVnfpubGu8Z9Z4BvuUhVbcRPfBtG6PzGfYTgyFkuBVMDrTfPdHi",
  "key19": "YiPgif8aQtdzmtb6U6H1xUzUBcNiyqUEDVdyp9Xy3cmUqpB447xaytfBDren1vHsLsWA4bF1e8QxbHrF7gEzA7g",
  "key20": "26VXWVxwCGDDm85VkbvLhCkJGKJavcdyp8RRjSHEjBZtLj2EqyJUv2s9qAL7ZL4hYqbmLKe7EVY6JCnRrrhHiLdA",
  "key21": "TtW9JPzmtoNRCTQ8Pv2UuJgr6yL5qL73ecTB32So8kswJKoXEK8ap2KPmba89hSPqL64dVVdKjG7TaqR64vtWxP",
  "key22": "r3HLVzbQfVayuVSHrmcMjJqErJeiufmgCzb4stZVZQ7hR5UmKZZCgNkiUeGiHML6GWBeeNy9mReYSL2ZU8dxRaD",
  "key23": "5faX4j5ruxFbqpiKAvQvxzVs7goq7ShuTK9nfPfFdTjSaGVJaJLU9kGpm2HupuP1YkS3a74bgGgsipuLrXCFnawd",
  "key24": "54xdJysHWNptdJtLutxhpXQ6UzdS2VzP3zLxaRvgcmVjxMyryMVGKcSQJyQM1Ca6dVsPf1aEqPadXH1RLfBkj7uy",
  "key25": "9t3K77nZkiuCxn8YpGd27CZZhmPwSFbmAdaVb4FbZqWnUsqnfjKZDQoMPFdLsxo7jegSCjUfcE1apf3rGu3HQoP",
  "key26": "5Rsr4JaBW5M14RYQL6ygjkHENb8Lw7Y5SJgjJE9dGqvH1q7YDWAdjp56QLhdahRPLGCAA7hwpvu3anvcVRRa4eHN",
  "key27": "5n13Aqy5gZcUj868TvgibZVSTrEi7aDfNyWiTwxraNbZrPRYuo7k2GRPyXJoYPViBdXAf1j4Lckb5ZA9Ka7Khwh4",
  "key28": "2LzYseP1vEBwDNmpCxXC1vN91wz8Uc5h7Uo57qgLoqeH2kN8ePKmsippRAJCbTBwG3Uc8dYtmWvvMcwYGfD4ZhEA",
  "key29": "4BLVpNSvQsTdaedPpfv8WSizp38pj3xK15KywM1smPywHwVW2Rp5K153ZjjER6aAZmogxh24Sjk1A4Fhrz3jgmr2",
  "key30": "2Pxe3HNsYEdBJ8v6BMwdMazCrFGY4j52eHZ1MAZLgV6dNjcJRMDfWkJW8z3ehkSxGZTkpKZ756rHcpPL8WAfVxhX",
  "key31": "5jV6phCtfwQ4xapYZtMLdGS4G2khZrb3sLFUoZdoXMyrzFvkeddKqDS9kE4tNQDK9E2zYYC9DALxRsTf3bUXFQY5",
  "key32": "zkJ6CsZD9GVsBHHRWHtRszJREP4m6MrNoPi8wfSPjSnxPHz7hxoZprpyBAyuYe7DVBdqLHgzGkjooMPjKM59pPX",
  "key33": "3uafV9wgVZYYdFezXpBvBizDR5DPusihevsr9eUMWqcv1wL5u3vMm4uF6nB6uowqLscxh6KR75RrRXhVM6eRBULD",
  "key34": "61bWocjfa8rfqxbPmJD3nLGnaazaEd66bo77UmgXWZeYpKrhD6XfYmJCaytLoL3ERWTa2ViGEnKn6RLJYfDNzWRR",
  "key35": "4DTyZpS1yUcxFzfKYzprueVKdnhRkedTArhUEPtSUPcmoaRoBvbzXES6EqzbKzQnyo8jnATayVBhXQqhynLX2RKd",
  "key36": "5cd7jTMeKJDu7eCWo2RAdN1CEM98KmpUmZTfbT5hzJtHNDe1j13pnizNac5zPyXGcpJ6nS9jzbVBa93kShSoGg6g",
  "key37": "3uQT2nKouoEpkGLePwbYzTzPdsq9mKMDKZ27JBe9MECxP6vF5eXubLJtoTMY8yj57YRZuwvFbZhxomssvCL2KQ9Q",
  "key38": "2uqtrmKKHT5QHYeJT3mD3hfKkQGh8VQawZwEn3in7WMQZUHGbaiTZHzvvg3z37zZNacyoQsN5RCTN2xzXbiTw1Zg",
  "key39": "NSyZKB98FCrohaptivuEjTXH6FC8hkVNNdAwEue4q6CugLWXMdM1M27ozi9sbvzFHsorCfiWv8XD6LYpzATs5FC",
  "key40": "4zxWEafFbAsLq7m1gqsJxk3Ja7dyF6AHj5z6rLrQYXCARbc15pk3iKkQjM5RX1s7P1fijEyYy1ZrkQot9QppfTgV",
  "key41": "3FmAnXjV2uQz9Ck9fPHEjNQpxpsQ1LB4k1gFqrfwXz9zcSXk8pMKiyZfeAXTyr4uMRe1qzzpMu9kKe1jzwsis1T2",
  "key42": "a9FZka1EMQffoeKZ2Bj8MbaXCTUM5EFDezzXAh44xu9wovB1KmP9s47putbo4xiibk7qyukgKtJY3Wk1MfqJruc",
  "key43": "5K7az8nozisxaeNCu45atULUHPYaf6CuDe5VM1aLrz1Hdxch8PjedLBUNRAMpK6fXLukFoKxM1T5aWHotMqZ8ENQ",
  "key44": "2XWGtreJYcXbjpoVLdgY4ztgqREStWWfK3qiUBEfYVdiNKJ5YLLdVgjJi5CProH4UQrQLDzctmrHZa6AZKX55tj7",
  "key45": "4bV1dJxLMBzBmvg3jFnkcAH4NGB8Nj3AYD67AZZDA4Ay76WiFmkqCNkJwp6aDRFRUpmgawrnRWL4ThvhNwnhtTaM",
  "key46": "5gg297McSKdWEo1iNPpGi2zgYka7SJMwPoNuv9UHqwiGdtQJKFpgsmpAgPbcgyjZFAewomzDNvvjCZSWasFEYNa2",
  "key47": "37ZEscYbGndX1rWdNMcs94hqDbDDA1WMtSdFWF1XX4T95CxX6h3ChNGe1SfxbfThydGuVaRD6ugDdLoGY7fAz9nr",
  "key48": "33JLRvKiJBc5XbuVqJduBs3E1243i6TdsWAB86z66hPbJ6F4AnTBc1XcmvdKs5vtJPbnbi1AL8ZW8LHVSSWbZ7oB"
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
