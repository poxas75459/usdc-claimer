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
    "2rrSnhiZsWLUQWdaj4DiPwU1pxtbazJNBtkWgk6VG8cZSNjtEfiFA9aZKxhHbNyJP9y1R1XMF13dUmBzQBkTDZZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d4oySeaMDw8ZPxxXp6iUyweoRbmkra1eqeq53doH8yeMXg61SAXnoDHsfeARL7UhikUjSHmvNZVccHakhBzgPDm",
  "key1": "44tF63SZxkVtmgNABWnFXz46z7LmLfvxvtuEZVQZ4Dgnz4hnpLaTpHpFEswAwWTSGJwa6uX9cUbuJsuzajdYwwmB",
  "key2": "PV5VQnj1iq5GTJ9bE1tuqER3xaDHjCBvuUPa59CFLzjUC45JiQivvTcDCAxPWqbDjiDp31TMUzfP7M1hbM46JJ8",
  "key3": "3JDmZFu6R6ZCcE5QKpGebmZ7ifFscvTs2rHHKctScKhDG42iu9kHwsX2UvreZBtjiByUsajMQ7sVf3LehVt9aGXQ",
  "key4": "3zn8KFdTpSzN8rH84DBeuz45f4292dLvof9RxFtgeCYCzu8h9vQar6c7KxbBvQkmDSKRb2mVrfpMY6K8y781nLdF",
  "key5": "3JvMRvGJZKTNZ5yBKHtp8xGTi8PfuuSDcJwihSa82ZDQ9HgiWvhVS6qAfpAbC2oc4eHcxSYrrvAo3jLkrEPdwHd",
  "key6": "61X2NMZNrjeAKCvbgpgjTXRnHALmDNcYhJDtharQBsrZg6fvQ4WTGYG6cfftN5oJQ8TJ373fCfbqxsrC9fUEdSjB",
  "key7": "4ibHHtg54MeP6hHgtBe2B2zoHJ5JsMiVmnpGx45VuwEpkpUDXtoskNwJz75L47JxF2hTiKXYtBkQ9UFyq2cH1zWm",
  "key8": "4ZwYL6fQEeeAYSfiZLyxsWYAYVBRcwhZxDaXrP7ZnomayN3mMZmXzQWX7p1GqsawDrzQqaFA4C6y4H5vQ6qca3ok",
  "key9": "2b8w1d78xnHHBuzhd9t9LsTwchoGSM6uDpNxztCbo78w5eoXQxU3Jfhpj48pz8JcWtQhAtjP6TaFwkGotf8MJy2u",
  "key10": "2n9JJFcNgPXjsaMkpnjSZ49qE7ujkgT1baTPJX4M9JM6jyo9SKL2VhsaSeu3DHg1AJUX91iKmTc4x6yofjyyVYF8",
  "key11": "rESizsiQzFShKTw6suCzF2sMfPNueN3xPhUnpMGnxXRQipmzx1QBEKnHypgfvj4u1mP7eyqRFEcuVrR16gmnHpT",
  "key12": "2VSYnxyp2AL3boZUqfvYf3dGPkhF4GE3XmKgo1z294csau4SZdmxRuAY8w4r2bJ6tBs4SSMZ9qEAKXTRHpEVZCgB",
  "key13": "4uQAkwg4VSxZUyLK5aWHZJ42q9uejFArwF3zqsziKFBdojtLNp9QSctFtbXQeBjcbPRga9PiQqsAHVxPbXtFK2uU",
  "key14": "48x9e8AeUcrr1sWPhU2Qp7pnQNwjG2bK7hy367i6hGGCFNifuQPKKKrb16eiMenZigGw7CjWchnmHiQwvoxEoqLz",
  "key15": "5LknwXQ3h8pPkUs9S3vwFGGX1utyb7ojWysd28yLAmhpAMpe98xZQSjnqAj2nNJbh6TdsRhmewUzGkSyKoUe1RxN",
  "key16": "2M2mnvGLetLCeXMVWQNjzEaENrJnkh2thMBhjwEtxRw9rZNEhPmijAVKsd4YMNXfQNqZBGZA5DsHH3cACEgNwX4P",
  "key17": "55EJW3FiHTXfTHkbjxgVjjA9DHQWJjs6MAngvBu2TgSXK2nqgDNrqNcSypZ8nvURo3wyn6gfJcfvjPUaYCk9RcNs",
  "key18": "5bv54XthjscZyyrPa1Yef9r7oJVBps34AuALcS9Frn4X99cQtWFMAyhXUtzKCiM2jHnJCU6iXk8dFRzXjpXXwbAQ",
  "key19": "2iAQk9LS3gALKtAU4YKzx8QDTrHUfqbSyaMHwKkbh5n46yQbNC6aynSVaVrHfBDvU69QBAitT88DVy7LUVsXWSpZ",
  "key20": "2KLJEyhv4dFTkViwM7RTj49o89ii6KxMQSPwQyVL7ntYMjdbqnWp6aKxcEPyq7L87iXoK4ULXxoCZrgCts5KxRo6",
  "key21": "kg5KSMmP4uvDGXYZXgyj1cgUSeFBnWdrGmzxFmTH5rcJttyFL8sd7ENnVeJ1mx2YJTFQBK4QhfatTvRUcjqiGic",
  "key22": "McStivBeJz6jYyR2hLbi2T3TvK43dWZYxk27hYfvwizNymauNjV6vZYY2Akd18fHshUFdrkZtLY2824WuXr2MtC",
  "key23": "5yVwLvGtG1VFMnBWufRFBGHCTSaNSk7KftDC4n83gcFEvXc2Tpj5jkFe16hWs9G6timHmVWq8s6McDwB6mwK7TjW",
  "key24": "3fXTrTK4gachBYHp2mznQhFVb8LhjwM3kTqE3GXcDCmSYz6YWrkG9Lo1d9eydzzDzDhM5KvkY7XWNi1AV2PPYgs9",
  "key25": "61D8J65VToqNWfhdTDdWfueZZBTULGzdEcwgYSYPN6Fc8dLbTcW6pjhjxm2RZAuKPHY8ZYVNfjMPBQ18E9AyxkYp",
  "key26": "2zDukAof8RaZtP6TAzzUFjVwNyxdfzg9xzDH6FdFbGRezYRrhEx7hRTkBrCuAeHfgQTDMkjFiNokrEjFJYg3SymF",
  "key27": "2yN6x9jWrG1q6KYybaUYi3rJEcDhC3yBjXT9Umo5LjmbAajzKmdQzxYVkmLmLcqCj9B7m9JUnyKa3WvaGmEtpWcC",
  "key28": "233uWhuiQAcKGFVB5rtHJHtTMDZTtdjZxgYhAbw2LZ7NchGR9ekHiWzxU1Jk4WTSJRhn6VWLDQ33ixgyxJ9GBPXu",
  "key29": "5h4FnLVU2Ss8virYxthvysZQnLTLFxtTBUzwdZ1T1gYfKYidhrHfVw6h3axDMRTZ1wc3Hnj6o6fNg5Txx6cLAvrs",
  "key30": "icvUSDCh2tQTqbyTKVkhBQegKNcaNKKnWsSshif9NRJadGqDhyqi5ZqkyZV9QCcNo2qLPWwy4Bom6VXDnWBZ42n",
  "key31": "5FxmbXLC9jXGZYXXB91V5NyW5sraFYJe8rYRw5JRcyrjiDaC1tedRbAyrVe1S4dZX1GQct9uWgPxBVbXWct4URKw",
  "key32": "2HshFJaX4aTfpXudCN4K3BaWaU7aVjyWpRZ4aKjo8bCB19Usjg2dDsxwrADL91RgautZ3Wy2jDf4duhcj3keqFUH",
  "key33": "2Jzy25YhjmWHaq4iqPFdFoAvoRASsX1CKeTLDupvSqnCikoWaMLY6Futqy9yir8ba7sfVyT1rA4ekPmRE37hreUN",
  "key34": "2CvYdUaGbkXEZQqXjBpo65PHEFT6Y5RQ5tYvtj4b9HVmoSH3Y6uSxSW9UGb7gegk9o2N3WQwkjngJZ9BQ5ssznp4",
  "key35": "532noJBnhk2jM8wnV2NeG65jeC529EhYvkTkH14sH2VQJScWLnQLdUtzwvbGFjhTss1ivzCXsaxiSPbpnVMwViNo",
  "key36": "oaseAdabPnHvGYZmdrygNAowhRasdajbYJsQELKmW7v3QqSZo1thmib45nJvzXt4cqbNxdk94zBk1oTFfgS5uQF",
  "key37": "3uPkqEg9SZG65zjiMc4s1JRWg4hanNiHgiBUVdf2dKJuXR2PQ2ZbWkAMci3fGuU3rTo3XqDkxArGMttqKzb7EAtw",
  "key38": "UVPc2jhTHKCvGFzqMpyCo8vFzY9AkpFbcsLBmqYXVneFyRBmfC5CgyJjUDepR69iLfwHYLXP3P8KLrjY87jdSz8",
  "key39": "2hPUoKUmHBR9Mcx4NZt2gRurtCUwuQTjiyGYDhHiCS92uSovpZY813Ywp4XwxHviTBcnkRSzFeeaGViQEB9BLFhS",
  "key40": "5kuzre7BGky7aJp4qjGHXHFQvpef2pza5VtX8teBKiy9ArRGV2q8XkQS3hjRH9mTispzA3j7pxMdu8EwZt5MbTZ8"
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
