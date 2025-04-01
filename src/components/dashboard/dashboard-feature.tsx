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
    "4x3mLGxEKzDEfbGcqsnyHS1xJQi38QYLH2q9kLTjL51V1NoYeadM5BCjfxQAAaB4tt5PkyYFA2urEAxrpmTMEwvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FK8gNb8hu5nFNFtwBFWfNxZ1ePPN493go3FCqGvhXG4Rec1f4o4wpTLJ7AgcrYtSd6pgvWMtqFqayTiWTB3UzbX",
  "key1": "3PMpuqnChSzePZB4HZoRYSSMSkgRgBj9Wtt6WLLJQ93iA42wSAoNaHRtam48DMKdFa13dfsU8bGUKra3iVzfvqs5",
  "key2": "3GS87FR9Hr3hRJ3TbwKWR4KE9LcSHQej71FgHea7PbMgjB4oQfCtiNM3k7Yep6pwcC1gT9UuMNfp7NzHg9ZF6M6M",
  "key3": "3hZANCBLiBfGQJVY9f3FdQhESpaFAsZVdAT8Qe7wiqNsCZfhEHqJFLMXJGhxkWZmCModYqScKAVt12Py9HBWn13s",
  "key4": "2iw2ScSL2WAXqE8bPo8z4QSWhrHosPignZ45Rkyduv5NDcKdqpZTkKZZaV7nYerZbvUdXoT3CbQJZ6PK6PAfvHsD",
  "key5": "3nFKP1RUM9dAhb8FK8t6DynXiosvhqxCVZDokAnm3hmMy1Jy5vckxPt9DhYmM7SUzGrKqCH3XDhdGwVesEAZHWS6",
  "key6": "5nXT6Sog5kRvd32aBPA7eJ8B79vSjiRew21SESgyhGtMNfhGSpsTYV4tabhd8LJZ6KX4qoh3VzuDt6ZQkGhGvSU3",
  "key7": "4wAZHcpXU4KJEYHKVJsPfBdYZMCTsakdY4Ebr5bZkWrKjqm1Fj1P9RRVDV4UvMDWZhHobjbEj2v3nvUEH6nbnXtd",
  "key8": "4vxYwJCSeNC7g8KY6Xx3VxiwWKy16Jopeu3MdoDxxf3qMXDwUBrL9RSs3hUVKhmugk7Y5sTUpEzwW4rbcmaFwca",
  "key9": "nBjv6PSebqM9G7wNrfLRXBcssmkkqJ5WYBsUtJuUheggD8u42TSVa5L3hXvuAhm3cxsLWfDPeYU5QFkYhTm576G",
  "key10": "cnukmWxYS6RvApH2vG8Lmuy41Kdqa4CWkpVaeaoVMM3SZ5aZEu8CEzVbQA7bDakZkS5BqJjudVaVNYvDRF7cFTd",
  "key11": "2nP819KKZ5W98ZyKE21MSTozZ6A3uFbLfJpQGoAHQ9ZRW8wmGkXYLYVM1qNR7S9grn3ArnNp4YRTDk51Gw8ygfaz",
  "key12": "4sucFqzaSGLJsF9v8XfyWbTK5w4ZNo746dozmKqA8ADiUsXLZ4Z9YWNgARBBZFWwzuuc6YC3SttZGXFEMJ5nDyhJ",
  "key13": "5xvrHGVofc5z8zSkENZXAFw7B4H8ohBYLZJ4jZXQa2kzaVXy1xWv9KMTLh9KHkJstEyfmLLkqHwH14QcbeB5PFMo",
  "key14": "4vmwsRM3zzoEoyvPzjf1u2qd9vSa6e1mmqe7t41EKZuDXerBpfZTUD53MSSNXBtLuXfZCXadcruX4xGo9rfMNSVN",
  "key15": "4Xkpov8TSZz6AbuiwRqZmbKsKm87T4tupNpaJrN2fWFF5Yb62N78czRKVHxyP8oux5fM3FNNU7DHDcrN3wKoNf8u",
  "key16": "5ygGX9uhz5zQ8BPwsKYMYbaT9jdSi93ny5P7ijxtDWBhWyVtg9hepgj1oSWkKygMS4NEmKK1AuLynhfXWmy6X8PW",
  "key17": "3ysYCFzAShw6RnzxW1NJgNAaQRfXtCrvKTdR53SPiqNR44H1QJHnG2Sdco9giisDPCxPRGenhqqqsExWomQpjZ3W",
  "key18": "QdrX8AXhSVMtV57cdLwDvtfbPmN9mwCtKoPNYGWCg8LQh1T7n5eRr1mFwQ9wpdkMfCaYeP7rbhYbFWPtWD9WUFr",
  "key19": "273JmsAAGYvQ7tUyZejg6s15q6Jdavj7EJCu63CMp8U7E3DCWGHTjvHvEJNgFUqeXdFuyDHEPd96g1rQkSCV8GTY",
  "key20": "4juAhRDoHx9Q22WXdR91SFRrjXyH12TzzkWXirvSQwZ64UrMEQcpNDA7VakEaPwD88w8N515915AmyXdsE7HMZ3q",
  "key21": "5gB9MXNaUxrbb4fxhEqEzt52uR7bqxH32uYYf4eoaZ38TmeZDAhrU2krvLme4JzLxfsN5UkW4XN3UNUCUn4ePpJk",
  "key22": "97NK2EJ4XTfkBycdyRmav2P7QWBvdoxiMEU5DTAXDwGytTQKvD1pTGEVziVq7pfHr7ZhRPXy3kJYLRH7YnEWFgp",
  "key23": "2c83JqgqgJjfrcwmqLBqQXeNZYr7E3akrEZczL7CG7xpywmEtxJMywVzvmomAYkfURfzRHiPLQYpEciBNbXBAtum",
  "key24": "4yLgWjGJMpP6tUys6KGUQdq6xebQKFAsiXdDJndwD8QiLq84b8hdjW3Bjab7ikb6EPyyNg8tXG7GAMrZp51EoQ39",
  "key25": "5ojQJ3fqouUCGHerFM7MNjXbsZJ1bWEEH9mN22o2UmkpqXyNfmLX3jg6pBgDerzzupv1qftpFEmp1txuX26x3mVq",
  "key26": "39nqZupY5632TR1ApX1Sn1cb1fmJawuwf6vZUUwUMwRYoqnppCYg1k2kijgE23jdQBToiUJYLABuxnLjP13cCW7F",
  "key27": "tNgfjbTSpYgzHzoUakaGBgYeVP6DDP8tZ7higf8sMWkwKc7V6oqN2qZmdbzW1isB8NZTek47BGACQDRzvQYj9hG",
  "key28": "3i9ZaAGjvGtWq814U3KXJjXMdFCfQxDrtVyddUcGAscmexU3E8F6No8VynyDG9erHR9hz2LSsdaJYWdUDUENKhn9",
  "key29": "bG48351VeWS5th5sB2iUNUfKR9aGk9o9zw3qrWStzhv6yu7vPydfhSFcqLUfy6Y3GyumduK22FomWUi5BMztqBL",
  "key30": "3vV9EnwTghqbahbE1qyMdsswkwi6WH9YDaoPnc7F66UpXBYbmx8o7NkkvRUjMaLcKHGkxD4f1Y9xoon9SkSUzdW2",
  "key31": "3thPuDENmGQkcGo74khMg8QC7jiHmy8Vs7iaefyfBrykHx6u5QbpkVFRiHpCuKaPYHCAaZg9FRzcpLkDGcrjMRkH",
  "key32": "5YgxJiPFikPZmUuG4Rtdoi1p43CjGN5CDRauMbCbdHMLM91sbNzYPxQDMcHedt2NKeHzMuNKCQHSQ9PtBhsXaawe",
  "key33": "wdSomGTTb3jbNL4ZgHC1JGhhAKzmR2izH6rtjykuexin3UZn2oTDbnWkxyVGESka89qZHtbTc8i7PoH7NJ9RRnA",
  "key34": "4dEaZxTKZzcVLFef1aArQ2GGZqJA9DTYwksVg1Uwr9aCiZj1rQdRqrqQYs6De6b48hnBgKeCSwnFaxJ8b2Bdyvcf",
  "key35": "qEarKnLHoHL1Bv21TvMEZ8JDMVytmuVp1PuubmrNeug8FHQ8NKTpMe6LeQEvCXHBZFmFW4MLt6MHYbRvi9DFtvi",
  "key36": "3CcAiXucDPZxFZBWMb565CyKGxfpnQ5mF3KtnAzgTQtqFXmRybCkkF1pzQL2neXrJXmW877yAR1tJXAdmEzDw6si",
  "key37": "tgn3bisdnAvep4LF88f1YHmCR9LMuHTaE9ybsZquoSViRera3fac4DQFYSYqKqmWi41HXosbWMQFUPjzPPtaGNr",
  "key38": "4FfngsrB3pYvvU5KnmnSVGWSaJy67SZXm2YgQZG8MyvcXgHjWiiqaQiD4FR7ERrCgNadG9dakcoxk6qftiiopxHb"
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
