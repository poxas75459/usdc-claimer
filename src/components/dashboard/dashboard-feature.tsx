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
    "5jnJG91Zed7WVbnmPCw6MjvwU4EH9PqFYtUtPMfbci3CShbs1QGeH9rJBnX43ATT5ngPf3iNgPsLiyRXKfXpiqT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VPdCeJX7m6nK1JgEfp42kDSUUtJY9BNX4SuwM9zdfcruZN4ac8os5cMoZF2rYXcFbKLC1hZ2vroaoaYbQnGNEVv",
  "key1": "41jsgdg74wH8J4LoPqi2L58nNk1nWoTDqnUGY2LXD47xXXWSkAM1zbFGeeFoFVN38DGqczLiMqtAmdysDyu1cNS8",
  "key2": "3BcXjwqM53nejcJL6DWhnrrwbfzr5DHxnjnRn62XkBj7WYT3xpu8qbSFWW2FfavgxfEmtmvo1jii1sPMQ47tYAZo",
  "key3": "naafDYpWmSHeEss2vFvGQo7zJ3Xi3hZhvFsBdoxaCp1R3PFNxZDiKirdjXr1mBqTr3u3FVfu2hjKSkzqwchaaeB",
  "key4": "2UkZ7wk6DSQ74EGJKrwAaC12hAna8JHcXopDhiXrvzLYvpjjCMG2CRJMKL9Jc5r7Q62TjfbQ5DXoz3quvPeK6TZY",
  "key5": "5ZXSbQk1aGyXJRCMhfUkhKT93479XGTNpj2G6RryZ2xfBeqt5VG8qnHQHF5mBdUN2rhwwQqrRrEv6pqz3Q7MSoXK",
  "key6": "Bd2JQDgNhxMwszDLuPsQyBtQjyTBCR6ZDRisFQH4R2uhP1Ms36whDiS5s8QLQdF2WCKn1JoKNDhZJmufQjqYAyv",
  "key7": "NtpZsqoahFFvv5bRqh5SPwARaNFdk9ydvSBAMCWidrCNFVjxXP1KXbuytQDJo8n3QumbYrW8WbTtPV8TvoVQ1nR",
  "key8": "3F5SEymCZdnrnHrt7aNhpsKG6LeNUzQ8txsfXwTdVMiubbyvbNWHvM5RKyQs76ptnvDFPKyg2ivriqyUHyDEhTDZ",
  "key9": "hMpJoHeKrhnLCGhsQgMpAjwYY9BNBz4jRKtq3GZkg1hpWs6cvixrsgnMbAbaCcBZ2YZfBYJQUmHE2QunubXEmQt",
  "key10": "33FpAoT2tMe9cy94boguMWHhxhVAP1mCzMBGHz5X5h5ibnJh21uzS4Fi81gq7TcgXotjoajbyiNmPhgaG5rm7hxg",
  "key11": "3bSMoPdfLEUXY48jxAN1K3reS2v4XAA4RAsmLfpswQRSLnjUeeyQ6ZBZjnSWwzsvnj9Gy7Amw9BLNf2m3CEm2AEQ",
  "key12": "35sm263XoPmMAxEC8HPaSL9DZtrXR7r89PPx374n2C8uannZHX61SZKyqiGFCdmYuKqLAYcpGSpJvKUBoheTU15j",
  "key13": "2x6YupLgTph8GBLTDqFs7Kt5mWA88V7b3VqpH1FYwaX7BmFQwRyE5fkwtE1pQn6tMdaGCZfDJW1EvN4uSMXX7LFU",
  "key14": "3VSGD7jLvAG6HNX5D5NzdwAky7jkJtmzxKBKyFsFpH725Dap3njenTMNb9ovroF6DK9DJGb1kKEGuyXb8LKM93rD",
  "key15": "QGT3uGqx6P9wHRt55fPt5T4F5mqhXyeGt8eLTuvkcmQuTffyZ8j7Fd7DbjzZhg3Cjkm7ceYmgq2YaTd6y5WZ1iE",
  "key16": "Jas47PyGW3GdWQmpruxtp86u7CyDio5R3R3iXM7n7RMp3N5rfDwvJYqmj6XzodAKmcEuYRuKJMrXkktsx7aqDNV",
  "key17": "4KkTq65iC6socxvxyvCD2qLut9DxtHdqritVq5B74GqS8pFDNf2pdGQkZjQRhGrLASqfHkvrtF9ywrr5PhpmNEBm",
  "key18": "3sEQb8sttFkhPUf5zNEGnyGVrmDpcaef65h6JCpYx7y7X9HTEWyAYnihZgiNhcMee2BqyfS2oYfZaWTdshfnGC1X",
  "key19": "5XBRxKGiAKEbPgnuKtu3Xv7Lk5L5A3EMvb47BstqyB3t4MyAGPsG22z8C9dH4sE9BthsFaqJxFiQo83JwT6p8zbA",
  "key20": "2PNSnhKXRrzUsdn8kKnm91YUsXiV7EGtghk2iqYwVEoEV5TtjMh5VAMjnAc3GmomRRdqgVpDJrdwxPgefBoVPyXj",
  "key21": "4cNiCBnDBeVQ6KtvJRzYWzJ6LLCFUPaGZNW1UHfhzcSwuxFg5J2tgDewnc3w1AF5W1y6375BNJqP1NwhaLBHWua",
  "key22": "4KJcAeEmcfhsTvg712HWThcvRSjDW4kJAMEAfuxKaZ7cH6fn8k9TUkGYVyARo23mbsp343wqg1YDVigY3KzPZy7r",
  "key23": "513cMiF1p42wMwSJNa8jP79qv2sju9SjChAuedcn9LgmWgt1WZfCNAEAoKmuSxpVFhmVsSUWgPzVXW33SB19Mz36",
  "key24": "2WDRSrVz1HMrHmn3isUyFFdKQWVTJAAXu7VyE6rxvBevNrVse9kRwyGmhFxrujwf1sErjC9jtDtxSty3GeAxhbfP",
  "key25": "3qEz822DoU7rmePU21hcWd1wmETUi7hRdahvU5p68VRCaxQaDYTwJe4NEf17VymW9beDQ29V8oSREzBQLJK2i2Uj",
  "key26": "3E1oRzWQcZctYkLB9MY1faKf74JTDT2vmc2QoKrHQLVwbNp3VKYCfsp7bM8YdGbrHsGefCY9SvDryNHq2apwE2rv",
  "key27": "sN79Wgr2aXNFeFbuHGmohMGbbkj9so6Yiew6AE8Ln7ueucTG2G2ubYJg1bbnW1toSF4g1dz1azbBnimBbmodLmz",
  "key28": "2PfrXzPBZQnM6SKzgHdxYB1VePc5vYkXi6C6pDn9xqkVHWWWWqrw8wnpdgCJ9nNxQDCMGeohPLt6qqj2eSdXSPNN",
  "key29": "4C5G9WiFtLEpPEeKk5ghzsd42ZvmKYHT44wdvL3ES3g9NGnh3m55bQXkTFbpvf5Z1CRuttrg3281DLWCkHNaYJUu",
  "key30": "F6sSAFhnoz563VQf4oXJREr4xbj9P9CP5YkrD686rXK9KsNt9n5bbZem2u6s9H26jSguEadQ7QSQ4AZVRYtFYVF",
  "key31": "3Kwi5WxDybBoWqugfwnZ9jtzNM67kpWKUDXPBwb1qzWDLKev8hdNLfeA7CqZwE3iKkowSri3ABZu8x31V2QJtW57",
  "key32": "qUTk6ivpf2snDim7RdG7zPW2snc1KBhk9wA6Yx6V9Zkkxdc2K5Di6XyRx2Eux3tKkpf7jUJUs1e1UUMkBQ86aAY",
  "key33": "2LBT7kkYKX6eWaaa35vF67XeHg11yFFitZY8C5L43TqSSyZYXepXd834uhyxhRkuNG1VQ2LDP9K6eML1j1WC6hph",
  "key34": "4eYUkzdgicEEQCJSNguoAkg1DLe5Axk3rCESzpvMdYT3XdMVakHc1k8oF7UCrVFX9bwmme6WRgrXqT1PE2JPNvya",
  "key35": "NhNcSmSH4ZcwJRgDabxRNwfbgkPtehUdcs76C6zMEntyS1F9c2HNvADq6DFoi1coAszHnz4mAVrsAJK4HC2isNx",
  "key36": "2ncBmfm9CTTXWYWBz8rdksqpCRNMkXEJHGHdiwichZ39L5eK8wCxj5J9BJiQ3FqxjbKNCW9XePW54f5engafoEWY",
  "key37": "326ERWzScRLPvMDktijppbG2qMPSioimctL2qajFwjBKymmVtNYxyPEeGSFMLLZ4Vd66cw1xFpkXMWK8U5NM1LuW",
  "key38": "4uRnHQGVycaYhrpUaPmx2S2ozy5LTgwnDDr4rw9Y367QaNmMHA83pX9xrQJ16LtTWBQkTTTw1U4SZwvt7ZDzNG8U",
  "key39": "45S6qp1SRAc9BitTkw7JwuDe5GUxqHZYQ8dnGTPKH5wmJR4kcA8fo5jsk6e5RUTQJPpH3DKNFtmHGuGfi6h7nm75",
  "key40": "b46SR74T8ECd37ZRepdADmQMz9xHCQNMdqm3RNgJP79oqJC51NaRWwtR6hwhsExFRyLtiagjT36BYda3ENL58zF",
  "key41": "561R4saQwgtQRthNFsbURcLo2GKuoGNXPm9XoViSmnVUqzW5gcqLoakT824FrMvkVr67RX3nVwktWLfDrhakodFR",
  "key42": "3o8xq2oZUCA7n9QSDvQPjdECAUCafDCrhK7BSJfAcpkL79LGs2paykqyrbUzmd4f19oAT1as7VJEPv8d1syw3inu",
  "key43": "5dyNetqE68LAPke1jwKvSbWQa9VuRED2YgBvqisbexWWTLrXY9fjE1ngryCG1phVUc2LAEUPkm14JTcKdnKpxcPx",
  "key44": "5JB4KtQdYKj4UPphAmvZMbSq5f5XWrSZ9yZa2Rz9quzvVqMauoeskTgBdcbaXvytYkc54JWvvGJ2aKAXFC2kRJEj"
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
