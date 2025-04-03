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
    "2RYJqphsnKH1n64WPnw937QrQEGnRyUnKpURQPYXGNyXW9hQE3TUXURSmA1tjKgmwZZjeBD7P5zxSYWTUxH6jgC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39sSiDz9bcGXjydAQ2iAcY5SoXWFWobGdWWqZ9ZphwS3eTKUedYySjDtBXgeskfu6woVA2Kjwd5UwqbtGC2JUe3Z",
  "key1": "nJSPQpCNJHAz4XaWHCg4fQrjb7UHYyChaDZqP9yBcMRBH7jJiR5azb3SznwpbKWAWX2zsbxzZahLXzyMTrGKhkD",
  "key2": "2JYmNNSkbXKJuPJ5JRdmHN6b62hb3LqEoAXShRQEfARBTzC6uwEPgsyJD5EtCtTuJgMSmgt3SPEbGbdE4tBeXCpd",
  "key3": "nciP39bDZTQ842HM3AsnxczE78gaNLZDbWYBuPwoydHNFwfp6JkTAXGdZb6PFut1Phf5dXFkqSHnefFcGTKy7KA",
  "key4": "3Vi9WoChuWw1y3UqbR7PCzh2w11dXCQTGiiTDYZ1ZUn9896Z7bBC9ruLpVKPUawi6kVu7Uy19ByfdhAzGABc98gP",
  "key5": "3aXqTeBkzBmAKqBrBLPaMw2yTWeh77dLnF6SXfYbAdV1BLSUyaDoGz6945CDoEGVoyS11QHcrjFz8KNu5m7JeS71",
  "key6": "2jRjKEfsug8e88quRYFGyyRHEZmnGQ3v1MsLWgBBUQ7PWWwk16SDrJorx1wdVsX9VuVM9KC4GhPLhBWNuxdhCqgs",
  "key7": "3sKtDXFB9QfeCecD25UefA94CRHZkFWmoiQCGmCVkuyYLWWGVetXXSVrRBAwt9dXeUJaJ8nEsjAPz8FyQRNiRoa2",
  "key8": "5CXtdBd3PL4WtccjD7o7uVSETxdg2kBDSjyU8wt7hDWdEJwJv4ucuWLSrQv7MksHSRnt15PdQ94DJePQpxgzSuEb",
  "key9": "5MDaKTL8AJ6mco5YrZkjYXgSpxXpy8rseWqajqmtmq8hvTz5m1mnLFgE4B7KMbmhgXCQ2wWDh3S6Kv4vrqVevgBF",
  "key10": "44DschZEa4rVbqJPihnNF6vTmM3bxKugAwV652RZf3X2tZLKgUwA9ByFTmQJP4UKtfR6LchJuhmnLqj3jz2QNewx",
  "key11": "5AHNzvo414QMNEUqTXFujqM5e4nPghmC7uX3crQvUh8nb7N3hGXH5YYPY7MVPjoAuE1YGgKN389fKfLFzfr4rJU7",
  "key12": "h2PuQjXoFBF6Db11BMcXHHiM7ExNyKBn4EyWoSEaWYcddeHtYcVbJq4tZeDCxipWvbaNzJR7ozYFGvjR1HXsKRM",
  "key13": "658pLi6pNbX2kDQvLAuAvTef7c2yHLdUmSzkFEm8GaTRfWobRyP4tvDop2NKQZ4EueoUvL3KQ7CcwLncoZY27XzT",
  "key14": "4egLLWnsAdv7qaCHAcApSU4eeYmL5jWLAtXJ1QAzVH8NH1ZZjRpWvcNDLa7Bn9SsFGM6jqtyHBRAowuQaaY9nZtJ",
  "key15": "4k7Xnxz2F4WmzPT2k6TbM8TgzmVpexiR3MRJHDEi2eKGcsfZXJ4Mw1qRZ29ppNgfbHQznUzsnEY3Y6gerW59JaHc",
  "key16": "2pZ3UyjWuEjEom5JEWKVPm9wAQaYY25Mafhfu8eRc9iwUzJ7YfWFSP3wMWMQCXhXnj8uto2MZvZPHLduPiLDQYsh",
  "key17": "zFY6vXnJJgu1YZ5BV1ApPE2gvd9mNQ4RckSeCLtErkJCcFB7QNQcnECn6FHjJ3MvMYoBszfyMtX6uKgSZ575sFQ",
  "key18": "4vMi9rniwhJxmfSpQiXVL7AtvPZnnFTmTPDdUhNQHJxt5jfo3uLLNdkUmv8U5HxMoNpBvKfgPr2PvdCJxdTRqzJN",
  "key19": "3BZ5tqzBWmfVdcnUFFkUUPBnnHyvG7hhPSwCYkjtLj47XDt3P6piS5Rgy96J2pn3WhWNs2nPDM7bDpo4Skj3172K",
  "key20": "5t7NLuqSJAG5t2jC7BZYxjfXJSYoX7AHavG89rAzYKTcZENnMkk17VaTwD9rJj58mXdredWJKyXDv1YhvrLGYv76",
  "key21": "3jeUtdXrbiyNxGZfKf9z2LWgYUQcvhjXHgGfBRP7sp9qXR2bkotUy39ALTrt6r4r4UP9RoH6SaaNyhXprpXhbBJg",
  "key22": "4iEhVdUwEiLNmuB8ttecbkappsYx9ok28oofiWcpUy22ppmZmKYyH3bAE1B9ASidirqhJpbsnL7Wn15w6Q7w2m4Y",
  "key23": "S42isyea6zUTRXoHrm8TmuKBx2yQU7c1Hk1f69tFXk3hbnfvmrQ8ozaR5q6KXn2uJnR3LFavfrKAkaXzmBNrMvJ",
  "key24": "4CxGPTotuv9JtWV8BTtWKFF45NRhSFGx8omn8MNY5aBEr8fbkb2tu7VBz44MBeU2vCt6pqCFfuHecFkNXQYtmXPJ",
  "key25": "3ibn2kQneeYR54TWVfxjkrLgrEYva2cWCCK15yTuvt9uiLLCqH7dnJ4qyTNqRUP3W3Bbpm6Vpy8MWjrewQ4yprN4",
  "key26": "3uRYmfNRQf2yD7EyEF79QhvopnvhyYxKx4doY8KTqoVoN1Niu5i6tNnSuWsv9QXTsfitC1aa6wBQQYFjXPVXQBDQ",
  "key27": "4y9vAnKsUBLtejW5GajqY3giis2JbPCD247P1kJQTWXtABz6RwR1i8cEH9nV2KebEppCc8QR1LMxSF3JUJcVXYdh",
  "key28": "2eULeH1wrFqcs12Xk4S9QioGVZqnMssizQcZfr473kKdYmSceYvDJ4jdzxqkfhjA4KrJjFJZiZ3mAPxBEqHS3czC",
  "key29": "2gFmbtH35YAgwU5o2qhj8L4pWFRoMPiQfBa3wnwbkFBFA21P8miRBr5b77ieqWpTogqwcRBjut7QvdaR73j3KUAW",
  "key30": "5U9bDfCFi2RqHNee6o9FUYdDHgkvCYgVouDcr7p9brcB5VhY5wR3nSe4DLtYL6YGHsrqYD4qn8rEHQ5NKVWTkY6z",
  "key31": "5Pz6eTFCut8Y3NGFEKU1AYmLhbK3CDCrgCaga13bPmAtjx7DTUSrC6eybAWUZUTVJ2ksftxjkXrecTCP1VnyYMCc",
  "key32": "4r4JRZrBgni24mDFrvizkhRRCr9iJq6ZTzvB1rsPrScnUjTJP7uqoBuXtka3y1787uAddzNQucqEGfGv8rfPrsXA",
  "key33": "4Mj4o1NTNm4QfXDTBg795PcUnjKcKq6xvocQnyqPXBGgzAWtCzDFokgAq632jz8YzfBtzyM1uB3Nni4oRRcRHBpa",
  "key34": "WAA25P13g8utDJHaa3NRp9uNxpFocMwaYSTUAZo4qdgHLubrZQmn1Xkza9jtW6YoD83H2LFX3JZwKLTX6zoDhcX",
  "key35": "4uTjJfSPbBNCZNpDRF3fPSHKVzZfR8Pm6qsLBqE8XRcsydSudqDFGoZWdioUDtNEEADq8M5m7GNDtwVoo8YCbxnD",
  "key36": "3oqwFqH1setaLi38rguMQkmcZEy6oH6zPv3Zi4HrWA6KRPb86QHp99yaQ7gXoVwRMYfSA4dqsFgLCt6AG4qgHBs",
  "key37": "218w7qP6HaSuTtGfVU4ppHu4KuNTAbtbX36Uc1JPEoGvV1w41W9B21Z4xunbXZCoDyHrqSR3qg2DyzwMHiKMqhXQ",
  "key38": "5zvUo27sXTDS6yMnfo8U2aD3b5ff5gyGCdb6TGqsDkcj6qS8vNhcgv4AghS6FQp4YKiqEVKxWhmiyemvGsMm816T",
  "key39": "2ffxT6Jvg8PDZqmqrtGSMm3P2KUNtzLXn27tN1dgm98VhjgET9TP9ZcKCVRAuSQfR8akYjnkp1rDyHPBa4a8sfFk",
  "key40": "3siAiHFrkjWmQRP7prV3omZfPk7fYb78Gbg5Kj4TFbQzvfcyiWFVaeAMdmM8b1MWcacFFumP58v9LbQEeGvMLKzG"
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
