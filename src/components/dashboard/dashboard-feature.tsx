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
    "3R9fzDSfs2WJUALypdsqUcE91PGWjDDEovLYYeSsH7t5jqpyeQVChU8iNu9M2pq3zBAt2rAxrveEfiYGdig4tEhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NdKjEJrNA9brUiy5vuXPCU2kqSg7pVGhTUGE11hDgXAAT1C6qesYN3AkhiKD8WJpMyDXE9ecM6nLJyGWiG9uLks",
  "key1": "2Subx8hWS7BbZvSLPxmjjoHFBkJE5AdmUudaTFbFhoc7J3pzop1rRVURAukxQnkKzXHHRMLxysvaHpwepbpi2RuS",
  "key2": "3TbG7LCdaaWHTBtgbDrmc3bhexyhCHKfm2muoKQnPuZz6EwGB9X6CswRHqmNCH9yaPUaZT3kgzGZL8kx6SQfaMoG",
  "key3": "5fqR4oqZXbyoHi5gN9jqZSgZSZkuJ1f6X4AmLVnNd8emvRczCamKkFRJySES2oWYhnvQ4jy1eVoMm8dftJc2uVmp",
  "key4": "4k8AASadThsYJXTPpCwHkT7UjjhyFUxEGyfPR34Z6jAMNhCMjxgsb3eJcHTjLzEyjDH2ECdrQxWHJcaZ7KzNZMqr",
  "key5": "SijxugJJTtjC7CLivTMSiYJngdKt6L3XX4uoqAqyZoEVHdHQQqifagoeNk47xnJEmDdksvYvPLRNYrVgG7crmec",
  "key6": "ev4VP2gRRt3eXZBuFLahUF1B5h62bhiaMtWfwYwdWzvwiWabS7cyiDwL7Q9P8GVWMq2n8Vje185QXzYXq7B63bL",
  "key7": "51tjwC3NAwykBBXH9FagZthnoJdEU8excEN1kjXufr6y4bnzfSM3jFjKmb7cySAfFGEZZbVqC1Jg1uabXax2JGWH",
  "key8": "3wyvh7QdokuCFEA6Fzpx7ihxK13n7p2dTAVCXexxWdTraxWvQK59FDUr6TWKfKxbe3MKAGyyjkqFN78phhUpuLda",
  "key9": "1rfFqxJ4D3p5hHox7eB8NDmrGUptePLKA6g7UhPr4AQcHM2yjP2DSYvpM5kVd1rp5tzaVtiY8cnxQ5eYmJX7crh",
  "key10": "4TN8cCvfQYzmgzBosuEYLtb8ctYteUj4GkEoAR7gqvXfHCACXX9YrobC3XvP7wHnC635RfaBDZAzZZo5ugTGzQ16",
  "key11": "2nqfxYym34fmmWrLd98RBhvDoY9XXxwxcidrsUmSLVLGKoiy1aNvmBZPxLBnehakcnrXPNwsgSSWWh2bae271VWZ",
  "key12": "2Vv8w6NHrVqstXDT4FXTdJcMYa3xnLrp1o8RozpMjAoEGZSJ2vsKqsi6PXAa9z987MdhpaVGcMnrQRejTxdrZWiJ",
  "key13": "4LEkFzs84zehwnRUdpsxdtKTS2HdZAJae4d3XXBxV3e2WnfN2vCfeaRrRNwUwqrc6qTT1Abi6jbTtGU1RkCpi24s",
  "key14": "3EFkRHVyzjHiQ8jqcXo4q5asQC5zp8giG8Jzk85gfSgkZV4Bcj4oFmg5sF3iYTfLQGXYTjuTB3sbn7KSqzguR3em",
  "key15": "44jMcDp2erpkNR2rH4bAaFX8XLeRhaUwuLnTxxYrJEQTfozsiVxQC4hbhP3ikBSxVYbGN9XmW4nXVVDAkySkKN8L",
  "key16": "3EQ8fgmEZN7GsYZdUDYsygZj1Q7ZST8RuWnb7oKogixHjugZPabdZPYpyfjqFcZSqmzSnTa5uKqXPZ8WRsg2XpQ4",
  "key17": "226Erx7RVbF7ku2d77Q1VgycX3rR6hGWb9twnwQUGsZLtvSgU97CaLDmLkuP5AdUCZ4abPhHN3kmEj6byQY2zqr1",
  "key18": "56BVMEvytJakLkBVfBMGMvSDEBsD635Dujb5pYHKRVhzFpyq2yfm1W1m1y6tS7WJsihSwVqH3bWecWz4KBVGp564",
  "key19": "3z1TSpvHjFuiq9fbfbLfmuow5ufAmkcsRTWr59X68yNhihJ8Ee52WZRznSLdKhJ1ngY1kVskrMdV9MDmNBXdP51q",
  "key20": "3AHUxTwLDAhJcmhugKDAebuKanq2C8iSjynpDMd9SQBKUVjS15ub1HLrfyRJg8MeRtzBPA9f64rLeEFb6VeD4Fs5",
  "key21": "61wZUoL4ZS52AN677eE84uuBxKiAeMG5QfrjuMmxTG4ktJqtJDd6iVLeDPnD4k8XDUBVpHaaYNNiHSbg1UN1ZkTK",
  "key22": "49kKsksA69YKknverqbKkzRGtxK6FdsuH3u1uSf39PQHCz7rQtEGejsPghpN8g9rTR5FK4uNoVQww8U9GF5RvyGj",
  "key23": "5Nw9G2L5t91y4BBn2DfByAPDvxMJ5a9zepNtp1PDeh9pNUViDNJC4k491kDbqiebDcjMAJd1V8NnXMgugYmwaULM",
  "key24": "fw88aE9p1r1GZ3r2RQ98pHF8g1nHahVEbJEtVJtDMJHqQLBUK4qCy7WKgsqAn5LCgn5jRB4u6E9aRqYhpbnFA5F",
  "key25": "2o2SU9vJYzq11yRAsqnbqhPzwj7bpo3Xsi7aTdHCMQg8XA7CGvjtJRFgsWzUGCXAU84Zd5PPKxVQsP6WNyj95245",
  "key26": "5AMvN7fa4PzenoTEarPDLWC5YWkQfdx63q5zVXqSxzBWmtWeXsneVVTX3Sp2YVAMkziCoEDkrjNfCytLDSzoE7Ki",
  "key27": "2urfxXi6pjuckLP79igRZcF9o7cbj4yF62XA1xpg7uxaFueitN7tEjGb4sTpp8un9xk7qt31mGg9pRaHE3URW3CQ",
  "key28": "2pn7mtJFgSw81qVi4zHYJGWLvhcP9wxWmyLKAen15tZAFi2k5Mh6pN9eU8wgDaGNhqvkXWwZpzEEeTsUdz5oa4mC",
  "key29": "4RpHJaKXivLifwZZEg4pGKTJ9oAaRCs9w8TfQmu7KS4ycTLkthR7xbYQyqyN2hV6LUNeCqbmyv398Daj5NpHE2gY",
  "key30": "5bFDYnaziYcaVxXqUcg2VJfQvRoLpzU2QGsoEMYoAXsGq9U5Ku3eVuzQVzJrXKQUQ3E2H4mJCmzVovJJ9vGFGBQA",
  "key31": "35xmsMnV3c3ahjVVF9xErCg8wC58zhEYpTBWVHKJJXhDYsXoyradiiHJDtK46cZ8FrtTn7KSNgyP8AQuSW1mr3ti",
  "key32": "3qRkzKLAtVr2muMbbiz7gpcuTwW2PtmhYbU1Pbq5WmyXWgAxUsz7drgogCaqUhALCfsJWMLMi6sZVeinu7tGykRG",
  "key33": "2BdhJR4NY1AYY8Wmoxe7iaPzSrUYcJGZQUKwNA1nwRyqJJ92LtzfnBexjwnEADtye8MgPRiGyoEc5JZ4yuwFAdBU",
  "key34": "2JKbjB88Ha5NQKQjyLeytTGqg2jJX3958zgvgo8zNYDQ32wnLeqyoCBNWrMfp5FJnSrAxbc9WTqgGNBedUUfjKpH",
  "key35": "4MnoGPE9uuDAzJsobh1XNGw1pDsekNGvyG7diB9aGCp5bg4v3N13gEHNiQeWjt19BzAFAp7sboUvxPf2c2uC6u8s",
  "key36": "47G7mASGsGeP8SjGt6AsacxadJzRaVW3QaFsQZNL2HeptWm313ob5DHMn32skWqfv7WLWV9H8dgWgWn9RtYqeHi5",
  "key37": "h2VbrXqTS1hZYDLCLQe5kVbAr7vG2ZfrUhqyLkXeAZSSZ66sjpBKtWKCyhqpWyv9HpZ5KFKZmAS9FUeysPtjvFg",
  "key38": "5NSbqMwsKSzN7RL8kzmPijXgMqwCe69cMHViFqs7Uqe6daCB2Agx2Z1bzWD9iVwxELNGmzTAo6NUn54gGRCZ37Q",
  "key39": "2dV9dLF2FJBZuDEQ92JfFZjk8yq4jZxzJUMgjC8t1KeTkxkasqL9T7XMsAAgf79iKnMxWvFukLjJzqmQ4pgc4p5",
  "key40": "5B8XfRAQ4QxPe2Vx9xgffGJhwp4Xs13ciKvAVs5faGUtQxds9iwWFNjzGN2waCLaddDHD5yMp8B1gsRTGWHB7T8b",
  "key41": "41BjoxUN1YBqeqtbWbutS2w4gRXMKS3dnu5AYrELLUWPc5woWcEXXq7ctaeSXwZWmtWxQma1xUg1hKUdjfMwSuuj",
  "key42": "4a9xV4HEHiUvM6spZKdoPmp3oKZ5zJEQ2wwpnyRHuRufZKjFKMKmETemzKYLWhVDo8JkYnT4JZvmu5VJg7Ee7L9s",
  "key43": "3jdtTbSWdAidbPKKGzhdEXCKSWkp5XX1wJdgPLyUhFwPVUxaX3c1vb8Cw6MTtTeDnZ5hM7UwYcvbrYZnwvwstNmE",
  "key44": "4seT8ZR6Y1fBavpUb5vuzML9RJxjC9HVArNTSCXg8vvyG1kNT17omj2Z4AmQouFUTiJSS5PaKK48yTncUHqxkpXs",
  "key45": "4mMUqUvwCg6orcyv3TgpCpbzDXPr7CTtScMEUfEEKqqCDKTbfn3cso8tdx5fnj31AEAfnjdCzdWeriu2nWA6d79i",
  "key46": "2QHLWjeBt5UJ9t6aVVWiFXuD8a6usDg4EeCjWRKnvSPbJpLN8dpKYrZeCe7v2TT9HpWwBTDi8jvLvFXC3PTYDesv",
  "key47": "2Ev9aETaXQ7TsG5v9x1qAuuUWpSy5Pno6DFkGYa22yyPLiP19j2XPqqCP7XKc7pSati97GydZ8B28Jn76BnWA83A",
  "key48": "2m7WrxJoLhfBs6cGgHeNzASNVtYfjgisdMsDgiFbfue4n6Qa5wEha4NWsa2vA4sSDsQk2pEHTSEjP1mHVRzrofTU"
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
