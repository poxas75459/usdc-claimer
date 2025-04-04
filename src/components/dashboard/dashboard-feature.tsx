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
    "3yDEXXAZEuw1DinxzpKY6fYnoxXrB8cj3bnyx6qodFp5pNgAFhhALG4hygmitori2cUcAHtU7FFzkdGvoEUYHMpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48vmno3C8bMHzZoAFRUa86Y4bEJ3Zb59JMxTTrj7GXYdFo4zJwLwtsih4igRRdjv72fSMkwTZo57a4J5wLEHXug3",
  "key1": "2Xf1AGaEv4MDkKd6US1yMcbniYRqTkfQCobhG3Q6zoc5hMwtxSK277tVwRArP5gvmYXMTMg4aiEvFCK4W8SKs34V",
  "key2": "5CytdFuNjYXqSyEVoGAdp5aBYWZuEvbPX9rPzUNHxP5q3FBVm91mRaYJxx9iD3udVevrvppbFrr4vusrskik5vvU",
  "key3": "4PJrrqS7bd2zVk4ugqu4rtjrQK5S6QMWtM7qAzmtcyRwctvpCf8BkHnt4jNLkog8CfUNFiTgnA7hgQfrjtgEuNCw",
  "key4": "f9XHu8Czcyv2Z214ERAxtU4NhbKhHxoWsHmNhmJUcXpZCgz5p5W2jGfGrDzp1UWdYstrLJPB7s1NW4gBZCZR2fc",
  "key5": "3qe7DedZkmWJWr1C99uiEV95K53ix8S9UaNQYdQrKsYpLTaexkh7NZus9ShEpVNb7KxhF716QrPErDdZUSVk1KXv",
  "key6": "3EekHq8Ln4oezD89D8GwAnBb5FeU4zXxYqn8iehQifcYFJPZSpLNHfoDnwAmU7wPCx2wCk4LVqhsLfcN2VBBSdFR",
  "key7": "5sda4RXXzyN9Qfya4jfRLzTzw7uVwyJUPWJ1emr3rkjgdrAzT766w8y2kaeFy2bRnrNc4M2rhGLazvbXTGW9Mtxj",
  "key8": "re54WWQaAKFrGAF9DhDd5rPqXTJAJBkCq793Q5Lay31NJZaczFRHyJyLihu1mqSi5xWEs4VgUhQPzbpTf22yM8A",
  "key9": "5cP8UgNHP3CLX2N5bmbahjwc8KEejqRofWGLwSWa1eVvPYxZqR4Mbx17TekVPZmTtFwdSj59iySknNhHLZYAc3cL",
  "key10": "39es5BvyiEQettniYEoPmBEPQF7FuWF5MsfLCmz7B5LMwzyBvxeDHYRtJKfWTWe5gihxLyx63TanYx8yyHGE1mdt",
  "key11": "3HuUAXVdzKgX3TVhQSSvLfNsKMmkfM6GDViojB63rPXDqqnqiUNoZVugnqb1KfGcKUK98EchbuYb2m2DAVXGimQT",
  "key12": "4M8PbdRDkWBFrBmGZkRHXhEnnxz45E1oPYEp6PDsQJhEyG6U9AVL59nvaiJMGKuZy5spoQ7UmnAAaapJXavVcE8s",
  "key13": "5b9TRSDGNehQiHGrze1PYs2CEfv62LWB2zHYppGoGKeYYAiEGrew3N7ENGyVJDDseSGC3gjabBk9eSBezZqm4uYj",
  "key14": "3ayC52LJYfPDkCgosBJQE25kKfRrR1cVAnTzSUgUR7LgDY9AHzJ56C51kMEGHZCstPnxXxWqrtvq9AX3UdekNqsh",
  "key15": "5B2hKbnvZL4aHuD21YfuqXvsJkL9ycy8SDXsA7nvbaZMmSssoXCY4cBdAc5WmTU7BdG9V63dPrZCArSejme7zQaU",
  "key16": "23Y8go28jRo2ZCnbB2K9ASLqynYD9NJMi2tjZY7ncaMXMXWA62ChcEB1a5aK7hKUbWyND9qgsENM39Up4cV5LnpN",
  "key17": "3xd3b4Y5qQjbAUpA92RWKhTRmWLAo2e9dD8aKXrEMiNb9gPUqGVyKfj6YnRcYaHHAVGggYCUJBmdUbx3Ey1wWTnB",
  "key18": "3bxdUzougzg5fTzUtFqUKdmi6QDPA9kP1wKgaj6nB8EbTvTCxYbKayyKPjQmnjYW25FimtKu9eH2nfhZBYTN5oqK",
  "key19": "2k6pBgsxEErGqXks4fSt5hh3bzJ4jF8E1R3UcT6ZuC2ZrvYn983dr2qZ2werF5R4rGJaB5ZXchzJfwvbnhSh46KY",
  "key20": "PnCmPW8ETKUX5tpoqkwkbYJGfy4pq2oXkdTkrPgavmvFiXDwhN4uLRgSRXfhonYn3ygfpPpFX6hKBkdBsJ1LTYz",
  "key21": "9sQR6ZMzmLkQsdpapjiiPNAxQds8pSH1NWx7Tg14hHTRXxnchPiE7KCgWzSgwNZYQbxshXhGYWW5KipdAtC4btN",
  "key22": "5vrANkvd6M6AGeLcnM9aRrKChx13Q8QUYZCaoZqqw2Pqa151vEYgfzz8s5DRPkGn7puh8DBrCecGfzqWAzc1RW5s",
  "key23": "bcoif8TqWtDogxKWfMVTnChjAB1ZU8MzQW5uNZQt4nrHDkiF7uwLFkT7q3wRNL5srDWvPkz9iW4ac8iURw1vzCk",
  "key24": "5aU85e4DoWEcc1om7beYdVdrExoacPo5pLZq2SwDhWpgHASbCUdRcqG6Q6vqbVZ1qz7Apwzjv9cf9f98WX6q3715",
  "key25": "vDVXbJLrLYhvu9EYFeP4QghUHhkQh1h1vpcaTvSDKBWJxB1EeharWjrmN6EYfnRHWwnuLMZMF4ptursUDTsBkNP",
  "key26": "3iGb6scyzVshfJ4GeRpYedo8sZ68h8x6n18dd3wdxhtctVutbPsBCph5PiQD7x6TLo4UmwQ9hMATqg91ueMFtXnk",
  "key27": "3nJ93ea5Dw3B6VcrzWnWjE3BhE4FA9yifWZqMmxqXXurAWjXJTKYqsPhCcXCgWioNb4cNbopghbjb29vN7R5cBa3",
  "key28": "4TEuejBx3GLiwrP6bTn5sG7jTc1PBFiMGgLJZrzmVfZXNTvrQsWWb5pEyLPUhAaN8Y6nou9PneMxhUEezpDsYvBU",
  "key29": "4AkQZvLsZ7gYGnFSmnqvUEygbo6rSpGJdy5pZJ4V31yo8zbzyAvbyEKRU3JeFvMrDgxurSwXAoZY1pkhALFjtDL5",
  "key30": "Qcav2URm2HBRmu1dCCCw4VunxpRMqjHTqHNj59sYaAHFynyKjFMRtyNjMAsFCommrDu4YK2ubqR5YDKa5a3r9HV",
  "key31": "3CR7YXbkFnKL3KhCqa4X8coyZkKy5prcD5jk3iyqJq79ZYTBPoDW3qPmzqKDBPgXT5M8JgiwcYDRc9HahGjpWYZn",
  "key32": "2E6vq2n8mWZmVoaWA2bxN5GdoeBQE84FDtCx13VdnqvCdqsQrHHUMmTbyq8RJ5Lz5YmqF9ASTPkzCQ2FQtZZq65a",
  "key33": "2YP8nLRT7TCAQuPJgPUNMJHyZ7wZia6Vtf97QL4aqEBvmU848RfYZ5KSpiT5Eo3p46LMKaUidRM22CW5nS8e8KvL",
  "key34": "3dCELrwGV7PFXa2jnGfabQ1JEn6PXLkeHVL6eE5EQu25JmbffwS1UVR7GA9ThpkYqGEWNeM5Jd5RgxNuPJvbxgZ4",
  "key35": "3opMNUVRhwTurfRn6XALokgTfE4tXg1QvL9wbHnUrj9eiDURzCC94m1T9xWLmNNGdmnsaak76CpCgLQZYNEHh4AN",
  "key36": "29P23Nax26BwhThLRqe72mqUxWQuezQRQrz48hwKFpJaMgqt4x9H6stuWG8GwarqzTJyRFEa7FQXo5qkNZbjQkmB",
  "key37": "2EChWtDcy8jELbeAfYc9FjwdknNsZLckQYBTdm2egkAMaWFaa3TE5FyWum5vcaUYMPN3xDGvZ6gwEiTzE88DNxcj",
  "key38": "35cB2BB4FkBp5nLcY5V1iGjiTLDoaPdLBiaJhbAUwp2ZXGhaosTwibZZ2ELAz4JbrdZepdMTW1BBmP2uNZZvKs2b",
  "key39": "661sEivNMWvyb3QxRUR7TVVYwp4mTdk2642NZEAuRr1L7afsYAbduv2UEjqXdP51xgVLaWZYKJNxsFZkGTgfQ8aC",
  "key40": "3rHW4Z4e8VwaqUbPUAq4CuEjtYx3UVFckddeb5Vc2Bo5T6r3bTDpUxKE55WLVsysANXs3EdJRjh31ndpnEDMVZy3",
  "key41": "YXbyLNf6SZp8DX8eHgFbQKE2CkdA6v1sLEHPKFJMYS6ZAnTr2FDvvp6sS1VBrSMnS7nLdSDRSPpwk5Et1nJBbJU",
  "key42": "4ywDzSQAwT4r2AvZqbxDwtMdj3EHx328YDQLYnHGcEPLQAW6L43hpktWtvHGCLfePWKvjQhHaTQeQa1GVerr1dYk"
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
