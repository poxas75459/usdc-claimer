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
    "5JJbpr9KPn7fTkDgWhaPRHwrzbKBgRB1aNVSzSbVtjvH63xwrdhY8fni7hLPx8mjXQJ7yDBEi61rzXDT3tBAWE65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HyBEmoNvF5BuM2fMaMvzrxd4VMFzhSCVDKy4gwxitTCxcCfjFU5rDGwjw5KKZjqsoEgx5PpstmydfM2VNrTCnRT",
  "key1": "LhZ81MFHMFBvVnXen4CYS2YsEgCBcAzok6WajU9ME9kUF2xmWtbQCG1KVnXTzpwAPt52N9iNsWfW52rUm4w3Zvd",
  "key2": "2KqW9QZ91D8qpKjbBPYz3EoUTUsKdTadcN5eauoB6u2NYwirUWdPzY8RWXBTXuBwSR8SZ9tDWewTCUNPB1qBXeJy",
  "key3": "4SEKuP6cnokrSFKxi7hSeFqqTnkrXyQkkfGo7ogYZAcJwztA4o1rJXwQ56pFwCu5q9b8U34fofzWJojLcBLSmBhj",
  "key4": "3uV14myX4rdXHDR8Xe5MWn9EPPn2Ux6M5bgCbBtpuMnhdMQiid3iqpEqff8br3F9rSRJ2KeyhATWzaxuYX95a2KJ",
  "key5": "3ZdM6sPb4WAeCSQFfjjfAiWeVg1rdBpoiGvyYP2XeiGTNkt4MUpgWpp19HNcTFm8AgqSydr6uQhyJvEZsFshdtkz",
  "key6": "3ee2T85JcpE9G5DrCnAik6iLjr24zM8c44a76ycMMEDv6J4bf785Fvg2Z4voSy3svVDuzaRJW3Ps38wD9v4dCdKR",
  "key7": "5884FEDvvkYoiSJ7ZuvCZw4ac5okQBsGtr8HZFQVvf3xwMUQXM4GU3KheGJCehNcYn5XzdEGh7w68c1jViRCweCa",
  "key8": "3hpm9yNfDbbyj58RAPDCYdyekKPyRdbceFCenNzyMJuhJpH1HwtHnJHNF2LqnUhNxT5Do19JtbxETcTkkuqraJkm",
  "key9": "53tvrfvvnHDQ4W8h2vsmhYio8ijUnN9bqeXS1wF5HaGbyUk4Di5zyk4jmgBELzF5L384Pu8y9qcG33KELoudKvRV",
  "key10": "DfiwKGzyUFcbwBg5tHipbmLYfocjAjXkA2ASnLqusoAAyc8KrR9DdPn4fBXde3DYpx3sdTiJdWR53pzU3wX3DR9",
  "key11": "2rj66swQjE41NNYiS86YgGj1ZeoyR2aZzcXYdRCA7EdUDgjeHryax9LradxKo8EioySFErsLfV55XF4TqGvpM7rr",
  "key12": "2o6GqsET8QE6SBsKLfmSyLRJJJgg7jNGE7euBp7hEKMiL5BP52swKuw2kRdFe2GTFGKXXeYam1EGnrR6jkop7b8F",
  "key13": "x6Bk3oLc7DuSx9X6fQLsgKauvX3JbgXfF8vD399hJoMZdp14CB4z2VvicjLLZq8rGUZuDGZza2wUEPNAuCXnzpD",
  "key14": "3rQRSFgBPMnBxuoeFbd2wwUYi2yL61HttzthsZFiEjDYet9bd2enk9onwDjovqtbghFkSKmUvZ5EFRa3GzCebfCD",
  "key15": "bNrcc1xK6aLTFZT3Qk2vYutLrt7oYUyAj2iw6W6oKudWXz8BR76zpcWWHRXReGKdaZHjmn1ky4mCWSRdffvG7sa",
  "key16": "422wwRwYz1kBoSLp8ztqALw4fFgA8h2ofuiiY8iZtJtuqhAmY27Q3FBS1iskBoN92xkPnWtqPev6RKZnhj66GJTw",
  "key17": "3RF6kuvYCrh5MWpXF9zh9SGXtso5wYxM4eFcXU7zaNUbv9Ba7ZHU22fCtwY5HaZWVS4TWGRfFZPg5n14BH2QDTWG",
  "key18": "4mqTbjiVVjSTVmfvLCBvybQsgupvDHrJerUbcmJSinhiN7HjUoceG5tcvnCsK4T28ncrod1aJYG6yAUGJgb2feg8",
  "key19": "4bi8ffzSh2vGHGwoWVNNLtkH5UxhS741cnHuF43RrPopSoy4T2oxZHLXJjkWuELWPjQ4dmQhZX7MzG3PQTK8A8tP",
  "key20": "5qKzQEH3pmEahKicKPWkqeVUSFLRPkwVuEwP6SxacYx3YhookHEtbZMRWx3Fqk5iJhqjwpgmuoFXxwgkcUn6KUQP",
  "key21": "3ZwnVUDF8TorQpn2uYDZzcykwrjHhP86ouTSiWSkaP5FRL12TpUgxdHcP4QWVJ55XibRZYvY9CbAAHNM1yERY3Hw",
  "key22": "3RMjb98Br4x6oTT6RAVPTfYJdhE3TaKatktA6eVXGR4mxtRzokwMp1QaY9aAat5v6upEiVFb5fzJz7RhXzYVKnf7",
  "key23": "2Z7KrgBRMwba4qcAAcxDf4kJDhDj8vyKFwgyrdciBi45sXMLgV94x1GHtBs3Uya1d5SXS88cFJa3m8LAcA6ozPpe",
  "key24": "38qnk6P1R7TXwTXHQY8KQaAJSHUHD4qzyGmAxr68VTG7C58Z2TNVGCRLRhNRG8s8WSUj9uLGV7CStXAMmewAybg7",
  "key25": "5uAZ12RpySrKskdPBscSxHREKkHNhSrQqD1usMzQqVFWEi9fkhZXCKdxi5MHry3fQa2mQ3qPNDaeUrkJfvh9v3k6",
  "key26": "21a7QS5vRGVYsfa6Noth9bSLHoyoWFBe7qnYVo13nfhjAJXeJfBsY8KwkAoKcpHMa6D53GPGJ7vu5MDg8dGybKwU",
  "key27": "4sySwVi6Dug1yKhpLfir5drLQ9tCYE7HvvSzGjgX1YWUTvsZtxSHo2Uf1yMFs5CyoqcJ3HzKFoTu8MTP9eKNySiZ",
  "key28": "5R6gFpWWZqfyWxgwRg1arxUdHJ9vuTPaCX94G5Yy45u1AwWP7YLdGphdrT4L8L7znd6hwHgSdBiqYdmpJqswVk22",
  "key29": "4jyb6UojPobNFwgSPrRTKmGkkE1DV7nAxrCBNEMjwNJMAThqkBgEqTXK2gkF1uSKzcWtHvYcBzg38K72RzqbhyML",
  "key30": "3EycMk1CA4egeuQvGHLJksuzzv6hCS9HobjkzSwZPgHxTkPDzTrAJaxpc5JS7v1sQhNKxZ3YYaoKFqDqggow9kaX",
  "key31": "4k58s44dLR4aEXiGUEW1emPgpAfNFKxsynP8mubfE5fXskSCyZReKqA3eR6xESQDzcaLfEhCfhduzarXpAqVrvf2",
  "key32": "2b6cgp6cJ4EsQJ9v1FWFrLwhXpHgZnfPhxEEzsPvxfWkuWhzjsNPry2g5fXr58hPL7pKkCRBpv1QzGWfBqwKwoAH",
  "key33": "5mT5rWHcggcJSTwVzc2ZiaQfrYFuCGuyTpA3NptJQSzhY43TH5dhekv2TLqy8FswJuCex13uoRhWt3tPDYNAfxAq",
  "key34": "7vK5k1faejEjmphfBLmRCn5mL4kVdXbCnQHAEpspUNjAxVYPoVgkxdpVa6nmvdpaKYS3sGoZtvh2QtXerfLA27f",
  "key35": "5e4EeNxYnNWrV25HaXwRXYgQ8NRDBAuriRzgrdhbJZqkn8qUjCaY53WNaSPNCsGPRxqY635rUeA1BkKoYQVB9RFU",
  "key36": "byU5RfgF1JjJmfVWZCYpBUtaCT4Zm27ZyvUnHeUeQVJAuqW789GEZQsD4V7tUp4kHdGWsfftUC9xxMWWeRQN4pk",
  "key37": "3u9cmBdGtUhsEZDGwr3zD8cpJhQiF532tHjTPahWcjU4pxp1WGkQsNe9MYUbKB6wn9Ximmbgs6KzK2muMreRdNdk",
  "key38": "5QjLbfwS1yVNYKbTp7YLGfPxz9cUEqpkmaLTN3C42xMneLy59wDoowFkSj6bZvdJMcc7XA6YnzREnx8urCuCBFrT",
  "key39": "4ZPR1S6u7as8Q2NGU3ns5ASsrupA4m6LYM47HEdHVv85vtmMX16ktdvVGZ9eEMMtK8Km7H4Zh5E2PzMWwuNboJi2",
  "key40": "4Y8jE9foLNB3GRywBVkfKhhChrQQRH99DQutFU75T4GcDrZyodHvssTCWWwncni7cR2p2FBxRSq22hKwvT4X1R2S"
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
