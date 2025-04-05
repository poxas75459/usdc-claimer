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
    "4cccb3eQgTmuMfzPvKWSgmV8rE9yb3JcB6f7B7cSvoCApaqVpsoH1bW6p39pPuJ8RKg7bZAp4hZQZqUHJZr6pUM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zVk6Jvtzf1HViTpyttvhkpPprGmeFcHBzLjvdU2dZQgLm9K2T48fqiDZXLea3Yxtm8RBUsEs5KTaoAMgiQwnfWX",
  "key1": "4PgWKPTMhbUAUXU3mNYTDD41WqeUsdkgMFiAHCjewjbjUSgaCDdxTBE786XNiMWyaj8GophfTP4GvFik5YMHLxnE",
  "key2": "5msYVwwY2xz5oQCNiS9HR4eV3H6vQYHJ6xncRFWovAEKE3rhNLSFWWVKQFXK33ssKMfZCNKDs1RBtVMuBaX36M6h",
  "key3": "2NxZgzMxJz12hpFV6Zx4chw9hjiEjcSEE9rqEEeE3McUAeQVmmhMvgVwdirkkc9mVPvD6zDzYVUxsAK3DzroJ9tn",
  "key4": "3M1WSTQv2wNDzcMfBHSitBUCR3KjrRNG3ABFb3KUNYWAcUmd4KT57wLkpBvL1mgQijyHyyPuPZUiKJQbFq6gVuj9",
  "key5": "oLQTFaDCz9Jrbp3M4w5TqBsjpknTxnC8FNhr9BDpxVNhNjndmDdeZY3ZQadcAxYhqNUfD6vxnipGCSw2MdkDBe7",
  "key6": "4uaoiDBEMRb1Ym5RSZVTNjxkVgdyj5MR9iKEF7pnLsDwPeAcqFbu2Mdja5v7qpDYgY1Enzcm3S2K6QLT99Xj6Gzm",
  "key7": "3nQkR6hSbTD4zytJrhHrqeosw3SmTQG2AHBR6gxdZWN6YTjwiypE7WiNrXLC8zUcP3TBpE5DYjMH6GjAXQ8gq25C",
  "key8": "3EkoJEg4m9RgLahijmzCT72Ea1rNqkamuJSenZ9AneHgpTCXa646Tf4F24mgiDY4k4FPuoDJXx8QkkDRSzoNp7r4",
  "key9": "5kmGnZfjUNzGpRj4UpqrvGbii45Jnbif7ZWm2EpNL2KECr8jmGMnGtrt1LqMkH52r6EnHeWcmxdunZXwe5FcJ9Ay",
  "key10": "98KACy5HpzeYJqvhe84ng3rjrzrsGVQRrRQzriASB4ey4MHXf3rNkLcAtdC3z4NmYCzu7QcWsZ51xvyUErR2dvG",
  "key11": "4pbFMwMrNVjeVKzuCevogM9SHBU4SEeuiAJu8h59HcVUXRcwkABJMkpF6K9aBFNCfspraH5ddxgvLsHwEUskma45",
  "key12": "31hQkAq2qFSXtrhNtt2hvCHq3uSLAVqPeKmu25vTj9fEVT1yNYZxSVyE5vkgWbix6Ae1XDzJHFNYtGJkZ9CCu1Rd",
  "key13": "4xepxFvdy6KsLLyizssafvcCeYwFCKRGhNWsqWWPdMtGUfjWir7H3Ef2LfwUFULvRoNSL8ZGTQwpTuj34KoY529R",
  "key14": "4HbRJ5V8SJ2bQRRy1rLFPNCTVUQskacaFF9r4PjCNgTR6XbQiuUt841SKX9hFKWUHQ21Pk5dCvGu9d9jetgTrzAc",
  "key15": "4jHmnn6GMAJHm8XpTh1LHKq8ddNnZZJTVVTAGP23tcfXR7P6s8vUSPLCiicduezz4RqvXzGAnkUqNo6HtXBrrvTC",
  "key16": "gbRsjEq5PczqSojSCdBJRi3RJNHkkh8NDzQ4eNseDtxkJdK9Ef8df6ZKXtyKMKB9CHDsa3ndHbMcV3KHvjwa98K",
  "key17": "42xQ4Fb8UjHiu2BD21jcwFCbnTRSLNsh4m3JyszY6U5gXNUvfJhFB3FYJsDfCqZ9MSTdzkwtDKpwhMNAPyvubaFe",
  "key18": "2ieGyHV484pT1h6BDr4vw2WUxevTruKiszsSAkf3NdYWr5pRrRns1bJEBfRhahtAXARaEH9xjVmdWf3rq2pVbfgw",
  "key19": "3TdtKLnoBjRH2Y4yi8Y4vXSGw9iUnMDvnhGH1z6mrPSgmWFwK53GAELHFVcwVwgjhiFMcgQanKiEzkdoyQvRRNnr",
  "key20": "vVU6vdmm4zJjb24oTdips62N2u4DJYnSEaXkFwzSrAa3caCc3XxtDRaHLDz8o3dkqidY5ZMS3h3SYet6WnrMNNx",
  "key21": "41BKnAy14ho3JG9gYF2rcyd8MBYb7LnDEcyKYcbiR6hfBwuqDJg3oGid1EzSapGWAMKiWtXSzEcVqmkgHfsRUWsj",
  "key22": "34um8JUaWzEgy9pdZcke9NhhAQtdQiWe6uYNQPmM8qBiu2u7putLZWizvSTwTXEHHg8Sm9YkFevtbvnA2CLumuG7",
  "key23": "3WpSGBYoKu9eR6jBBnosNBsUaiPug7m2gzKjMKvKmRWtSnPEGUmtfQSmiA2CttPtUrx1QnLKCBakUTdKKfZbmhJv",
  "key24": "3cfpNU7y7e7QyGA89AtRCWnGddwPMGU6mRvESxs1nbfk6xMJhHbCbvrjTYE6E9L66vB7tcbFJ3ALJVEzuiYuij7y",
  "key25": "55DoEcB46P1voRUubcao5idMRumxHqyZExR6Y18k3DFNZ4fsjTJsgwQ7F5zMY8m8siDYuPaTboDdzmAvRFW4xwxk",
  "key26": "4bDXjmHK8FmnDJt84MCRzEk95U3RURCAjaeC2Uasf4bB2rwP7CTd24PrpsJHqXzdriHm6LKcPKwwKtAz3kbYuXyU",
  "key27": "2FnUWHfumfGsMQFz7EzqzZuNFUhHr64SttDJbHwSfz4QehtwtrD5XHwZiZUEV2CXzMgpqkWTwF9TCk6UV4CX4Rpx",
  "key28": "5fb7Mh8apfH4y4rwDygZ4jt2srZxYktaocZZdA8J2fP5CVLuH2PvDzHMzpWacv61iTo66Ax2YxZe1Fnwq2wJF7QV",
  "key29": "39qHgC74MuXdidTkjY3tE3GR2cx3UxEuwmPchHEPWsDfwe7qqnwTNzXVmLQmndREvhnVT8iqLkEaiNnZnTdmJc5R",
  "key30": "2fiNobhZurqKv1gjA3cxsG2urdgaBp4eJ2UddTLh8nq3aTV2QrSk7Tx2rZiEJHLarMVogWq3RG67okRnGqiKBSwp",
  "key31": "38nczNyXp6qUC8bjAJhvJvDKcknD7h5BAeju2WqiXJM4uzwUvQz9z9K2HnyGq9YZUVSCewStzUQFzBDysaFkmMPr",
  "key32": "4AbB81bxeFKYxECCay83DFswu9wXbi1NJrBWvZWKjqtbcXvg6gRRmTQ8qXRypLREBHDVf3Dx38cqUjug9snstLr5",
  "key33": "snRBSgmEA9zWXXKybPqPZ6kD5uKDVe8WCvXW2tbiceRfaJbgpAXHhtKNbA12K7wFaeAxenxYkwN1C3KM1wxDuNC",
  "key34": "1NjriGJgbq4Xy6v8vkMQSUG2fLgFHcqUTRFcedtvzjoVJcwLTa1KeAkgGs8SdJZYn8nwy8vQVsWdwcf6MiGnGV4",
  "key35": "4YTnFWUi92dFMt6G2JawscDYA7tXXQJwrbLBWVC5pGgt1noMxUaZNUqE9hfw1Q6abBjq6cyZ6inFxf9Lcadgwz8j",
  "key36": "5q4FQAvJaYYkL1eveXqqD4UPFHpPZixTDZCCRqeE5dxGKH9rax4PU1CFqYjE6ZpAC2yjsxNbpKXRx97kezc2u3bj",
  "key37": "4LbUernGK37XNVym6Xa64GijP5uvhBJrrpjW262J6MXn9LnVALQoUzH5imS3YXaGRkb5pCpTCU6L4JdKrR9Lefzq",
  "key38": "2GeJEBKTBFZ8oDGFdqiEETtEZ5uCzvsZDjHQ7A8QgFP6MqoKWegrCTD2CKC3fBUwZM34kN7HiTPV54nVxQeeiuhD",
  "key39": "5THZK3MX63SAfSPeTE9QzQ8ECTGajMbVGdc4X7RvDU7GQFNNJdjrfoH3Cx254f2W55jFuj4DsH3Dqdq5LiCa1sfj",
  "key40": "2Cf8KAN6z8LEKfuciiADMJUsEpees7hbjRkZhptic6edzgD63sSnP1PfwY9CXzkpGnrHDiBK9joh74Nr2baQAtw",
  "key41": "39MjtT4iHb2psan618pVmy4CdL2K457uvAak4imcpApKwmX3928zDRKRv1nFuYndzZmc8ecveVVDmE4J8fkNnQTJ",
  "key42": "3chriNpN36p3WyGb9F5mytW8cTDkc93u7gs45Rq1UGSJmfxJyFr9Sf1QNYr2ZHgNLMt8HVf3S1HjSkyASzxf6YRp",
  "key43": "5rViUFdyKvutd8XesCKrCqvmXWPhBLRMTSfhsuZQNmh3J8PMEG6QuZBxKjqT9RkknkEWY91EU5R7655u6SdyypE6",
  "key44": "63h62gQQ2XudtGF3CMM8tMiQSJPDDgtdPYYexvBiMLmd39rfkRVKsurhWdUeT5358GtAtYFyt3xDxPcgqGNr9d5V",
  "key45": "3RQkuc2zJqAuYx125vd3qPaYuqsxMTJZCN38qGqYpXizfYJDkpymzcc2WjEvwNm71gbMUcWXxXZvUbC5jEYN5qcP"
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
