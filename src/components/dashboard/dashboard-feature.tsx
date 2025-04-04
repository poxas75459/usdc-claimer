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
    "4YT2gJ3GbDd6UyTmf8R1ai3W1ZtnqACB7cZ1efMSwiY9ujmC621FQQaqg7wx9BbXyutgqse4YSMF5SbmrsSJih6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39j9M2KYPhNB3XHWcEMcuBf3iVZgtfPc4LQgekYr35Zv37jJqgkAv64YE3ED2qX9oDCQ3fR5qLioP518zqQvYEDd",
  "key1": "3JZzRdw89NpDbZuv2wsuXuzHZvUaEsQgjgDJ497c4LXe52FumsDzL54ajh3ZpcV42ra4AD5hKi9ekZpGSHgGwrLJ",
  "key2": "fjTEtbspxcin6ChELkzd7DLjN7EzQHPKzqZECBubzQdkSG3Q4eLBsaEqmQJKaqazAcW3noE15offBxFFCZfgSda",
  "key3": "79u1N26jCU9je7SuZN997vshX1G5Jc2ivD6CQ17WFNLqje5MFyapQA59r9UPKayQdhmr8M6WJ7xtaFHke4GWsqv",
  "key4": "3feMbV2X9cUkjZCtTitP4W3UvoRqmrY2ekr8Gh8ynfbVzCwWHN53Afd6KKpU947UiKBvwDvebJ2jd7Q2MoTPpZ5n",
  "key5": "5ZL18PyQ3XXBMJwWmpiEvQVSEzvB5r8HLTMVqFNPAppzad2o5yr3p8gZQgMDxnNGNA6tt5krWKETrJoX4R1obe2B",
  "key6": "3smeRttGBRXV7rZJirCTCKkEGJDoke1srfvCizizEFiTBFiarqDzgTzxXVFo4NCxTDR4iDETzFh8CGJt7JzDMeQR",
  "key7": "2RxKPs9zseR5z5iF52fHnwwyi5pxVewg1eQ1wiHCb8HUEtwRj9f5BTM2Ap7y3EpEYDq4F5YvnVF7kGMpKEafDZh",
  "key8": "2Puhxqy92kTSckxzZ1vryiSDhSDNZkAbdBguW6NRzt2tpaByCdSQyDxwGptoCrsZPTAF7Jk5ixqLR2QXCV3Fj2U2",
  "key9": "ExEd3ua1R8V6UaCq5HiSzzoTjosErofCzRoCU6a1cx8qGS6BeCAVPkHFr3WQg6X9YRT1d52rHjAkhouwjMcAkFP",
  "key10": "3u8SZdvkLEtkBjz3ohV5PU9wA9Dt7stE9E1ZpHtyuFHWDndxV8ZPyvPyxsk6vGDZUqqhWYdHfxDQfJ7Gv4mjuxwy",
  "key11": "5Y7tMjpaPGbNXjGcL5tJWZu3gHjDGkbC8kEaRcm5xV8drV3jQoMSDXy8AUwixkpiGcxLo23WZUhszGrjzXPUdMmV",
  "key12": "3fozUfg1xWiNmuf7MFeikMUTug47YNq6qwWsCyeHNXHpLYExfKaNVCH2BmPJp1u5mdrPuFFex6nHxB2i9WvDMTL9",
  "key13": "78jpjramdkzBvs4ZgsNhZr82eZZJoBuYkwYq2bGqsWkTd8taSrWuwnXPQYPgFspMdRm2JwKXuwGfZMAVPYZ2uq8",
  "key14": "4JeY9mT5Wq3SbkACFCMYHgimWVS1o64tCb3Rqkd67akSzawMLYFAhD6zghCG1nPrBAmRAvdxYeuuJDfKjAWxxXJ3",
  "key15": "2okd93k9WjZJ6rWNiNo15oJ528cH9ZpnLkAMibkKQbm3Fu8fnmGWMUvbEB6NtFggvKznCmqVtcHhcwZc5onBidUA",
  "key16": "fjQopd6zWiG2s3giwJT3TZAC1YzbZnJkoSt753F8GqJgCyCmuAbfKcprsmWzcC9AGidTTwFdXL2tkSWzHvJGUCZ",
  "key17": "VB96M2kZTJe9WhhePQZKqxnYQUxHz9ac36w8oUwJp7WVzDzRsjuYP5XVimoyw9Lh3esnLerXCXKK91BFccyjCgp",
  "key18": "5HeDA5kiB1j2zzmm6Sm6qZh3jFLssQvbKwE7yy1PaQAmKyncKe6pJkk9CQGmK4CAXfEgFdYhYanuzCeHiGSDYrhw",
  "key19": "2cC1WzwsTX2nKr8pFYTocVmaqzVQWwoNN8cdcczRhCkfAjqrHJNh9L6YniSGEu3fRVjqScBYCUN6fX2vo7CA3WVQ",
  "key20": "Un4PTxchaBCjQ4zqHDxvkAmjzqb71t5AHV2S1SNem813LixskJCkd6LrDqGQxgnw9QJDyUtzPXdivnPX3VT2SeL",
  "key21": "3AkWngXvrD2usugbbjNaWFdoPCNQzvH37KtbwYUdsKjC8dLgf9EAnyNsKPn4HiVrbWgDuN33nwzxTXmcTBRUsdRD",
  "key22": "xfzWeentk6LnAi7mB1tM1ifTZLmhDK4YZqgug1J1HimczTiRDTr1Pa6PZ3hQXMJUDbW1UxaB6yL2amwtiXYcJJj",
  "key23": "4iKGAtYCCFahxKdSg2PoAK56qqGeNkN4iKc3BYJ63rueWchW3UXwXwSrpH1hyehihLkZPdGNS5ejSxz2GKHtDMim",
  "key24": "2DneHQ89S7rGsZhGZoqAeGqDdgopVQHmPXtN18Yf7a946vh5xopFbNjN6jRT4BP2KypXRCPkhm181YzsvTQdwHZe",
  "key25": "4AfAiRLgwtjHUwLEftUwj4gTTmXpvDTKhqPGuiCHUjDjzu2kVsGzsdm6Mdd4Q1q7zgN6Mg8Zk5CZgY8iobdCJtPk",
  "key26": "2ZPBjdW7Bz13mv5sUyRV4tivR3FvbXo3geMUq8svCynHAzAKavpyGReMK3V1mrsiHR9crRvhYr2WjN9bBZ2Bmxgk",
  "key27": "3CkS7bmXcE7rkEMpAmhjAM1Qb56pWmu5e5VwxbF6ubfnM3k9jwqgf4pTn7xcZBE6mwhrk8ddvMFvjWQP9y5etVvS",
  "key28": "2wrxQbbGtncCxcJ9BNHmP1fynmDc1cmFJcwAYRF63f5sMJC4XAf5tkctTsLt3mAgT8BkDYGkwsYheE31hpiUR2J",
  "key29": "5KGqvceX5PCPFFKZYFzkGjQu2JJm6XCwrKgRMsHLDE9gC4yMgYPTSuuqovvppo5TUMyYyCNZudt6rFuVTTYKSRy8",
  "key30": "291Um8CkpmZxLpiPTFKSdrCxnfURFaeZSPuFcd7nHnHsUt9xwpG5c7oEWAekA2tBWPpYY8PvYXushKz7gQ6pEcXw",
  "key31": "4x33Xqaed4MjEupmdcDRk4rZnQBYbBZ13oztCQJXn8CPzy7MBoaebiV9YZ2nVCn6tP5oajMURguddZSNufzzz4PU",
  "key32": "gFEyuvxqQ6NHTK4RbpfmrUjzyWojrVpyafVJwtJ4hJuuEP5Ygpz8FEMsNBsBhh3H1M8BSs2pQ4AJDjCnpUfxe5q",
  "key33": "2eQvMzXcYY5DC7GMREYP299qZ5viQ1UHyRrREZV8wGfr3NiAm8QC2ARiujTamNZdrp94eKcjuzvs2XPBFzGq76Qf",
  "key34": "2xudLERVrYZsagbz6cT7zFNiSwKuY6t7dhzn26P3CtiTgq3ybE3n7HxS2psEGeNHT6TRYFTdbbzDAuztgtZiii7P",
  "key35": "Wx4PTEubpwmoZTTgewDPPbMf9av8BpSRERqEnpZ8MF9t4MZoribJ7D6SUN3JwrXZqvPaawaHpKy9FeSGQTtzB8E",
  "key36": "5VRcuLsBZQfoKeA9Mkyvy4uxDJefgAmi7pUeMRQDSFsnis9cRbVQ3QFdYnkhc837p9EMGXKtp5TE3C4ZD63jNMFv",
  "key37": "5uAAdF6wNQrWc7VyKUyLeUzZce2AMGGtwpSxrdLrFpAEwGQmRVDfyVb1Bb1iHxoXwmzX5YAGcRDP5PmADk77Efj1",
  "key38": "3A1aKhBXMj95G6tzjDf3jVrZkCeepredz7a5YNTQymTdVxcWj8Dx5qAu7Fj77KkLdQSzGVTDV4YakqXjwzSsbxJ7",
  "key39": "4EVoZyZzK8qkapmjmD1XL83LUk2XNGmTy6Sg4Rc8mLuKGJ9v3SwmoREzq5DW57A5v8MTd5SRv7cK9k2cLDmHbLbv",
  "key40": "2kDpxEUULPg3SDZXgdAD3nxCmv5QABCUnR8DBHEKdwjZ6QBzwfE2Lv1VNdZZ55W5EeYXTvedwTa8xkokG9qRTmdp",
  "key41": "ovT5HZG3mwmGUVGVL868mp9pSwgZyNEUFcKq1Jgok5j5wZxSbZ7uNP8HYd8AHgz4WCQehnQHsYi9JWzmWdkqFSJ",
  "key42": "4cMS4g3pnUfai2d6dQZ3VGsKoWF3CTXc93ENWFH7adBKuyDjfLzdSNxtB47cZB82gvN6osURGKTDxH6HovDU5aE5",
  "key43": "GQY4Hn7bHNZniHa7Z2k4Rc2gJcpjCY4HwqU9V5FLss7vtVhPrcbH1Qxsmod5dF9yi4BJGGxAJni8BkodhtQ5NeQ"
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
