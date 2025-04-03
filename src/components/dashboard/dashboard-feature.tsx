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
    "2K9xzFAQqf1EXFeo7nuPDXCxPCK8dFLmcs6zvLU7zGuYqAAtqhTTyy7kypPH1GvD79Vix83BTmcBs6giqHscjfK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44iQwWCLHh1Ms1NJB8WuQEa3NYbEfAvZAcjtpaGo72C7sJ4WFewyMdsQJ5DAZH5Sk11pwFEF8vuPqJ5wjMvErm9U",
  "key1": "nH9tNiyDe6ChMFWWF5ffS71MWKPsw1Yp1Nc9wFKspiL4j6BUahUEPgo7DMkLyS8zqvehpip7CQsspBQ56DaJviS",
  "key2": "2H52wXi2ZJ3uLQ797MiAGrPU4rZNnoMMrGXA95PYBWgnJEC1aVkQNhnQVD6jzt1z5ccXdHqrH9QerYYcXVhsS5hg",
  "key3": "oZvkHYFwpZ9zGcK3H1WaEprTHsdwef3Ccj42n9iXG9bJ8GfLsUFVzn4Y2nV4kCRiHeDcBW2JYSCiqcm8j2Ltitz",
  "key4": "2FUkDuAraEu5dYXNmbZkhbkRcFnvtnfP6CxvENMcti2sQKxqeNiW5L1LCkrmiuvnf42wionffv2SZpDyeCcsQdpe",
  "key5": "2wPhS3vRHJXDKjvCzLGdtZU2rqrPGS5LW8Zfj7tBsvZTuR86B21ZF983UWgMJcktpsUnrHE3hbnR5nbv7WB73uC8",
  "key6": "3ZgREwC4TspLkkxJXo8VPXUcwQ4kSr6oKQvSrouLqKVjm7bLNY1LPuFhv5CbtHzLXkc3KdSFPcRU1JyE1S3crixx",
  "key7": "2jxQmKoPxi4rB52QFYBZJ9ujaARkrCSpUbUDkNwoWTKr4kPv4kXiL4m7Aot1Mgncz1UXaGKSiUEEQYdSNY91YiWV",
  "key8": "ToSvsHeHptBCPFVNERyrLxL4i3JAQ2fRtQepa57ZfBxwdPSzV9qYbgfp1wfD4gNZoDYWqFwtDSD7q58fE2k1Rvi",
  "key9": "5VNFnmvunrZPfEneAtUzhfcofzKPmxrZUykLqrUThdP4sWJpi9sTubbLc6PF6G3jjbagDkWs7Pe8WZ8g9ScaRAoh",
  "key10": "3v2TSuQC3JZEYiwhDTX7SCwCeRQPjdqkWEWwDShaXz5wYBZgkUBq2HRaNbTFGXfnDgWPKuiGKQyg7cC9uqfWSRtR",
  "key11": "2cXgXcDo8PGLXe9hwth817N4vDttLvJzKzUnqqgTrw5oJNRzrf7QXNv1qazLUnx4TfySzRLYmWXadCbNsr3VPmf6",
  "key12": "5y7XimffCNL5QTGEVKMyhFMLnG7jud8DBcKjd4aG9fSorqnfV72nj4kG8Dnu11gxhAv16UDZyGLrv9xRt8Pp4ZUT",
  "key13": "F1iH3LT2GvB7StFmqisUAxFVPdBwueRp1Rux7UeinvteqDfBG4ZDp1d1cwHeyJnrSZaZHM3pJbVtCDwu65WWLq6",
  "key14": "5JQ3yUgmgxLmHgsRuNoN7yHJpHskoD7bgE7Mhn6xQ3TLK2RsuHmgiVdNpUzEtDD7dDe9qVVQsYqfAPSZZXKw6aXj",
  "key15": "EKUU9MPiYwggcYeC5bKwmD1AAsx4cHzWZwUxN4iqsoKvsRVGqy5YCMT67qnipMbLQAEfLEsAMYHVcCdDkFtxeBq",
  "key16": "3QJ8RLJrQ4Li6awH3RyG3suQMWZekhQRRU3T6rRXrwDo8zeDcU31PvSRPsydVkdbi1C7pKti5Ka863ZJLM6DEND9",
  "key17": "4B1UFwD5fEafFcsDgSaCZJSWDTmKBi9xLVzKojoiicgkuzj8dH3tyUkdJ68kureKsSKaMaTS9kBpc1KbzrLKLpz6",
  "key18": "5noW3CpRP4RPBMLiJTv4MzL9TqBUwR6iHgnNYRUsWbRktAu1tex5x1RmdCkMXdwkVuaxCaaP8CC6WZ8WVHQUCyzV",
  "key19": "5CE9JSwf29SqdqyPvhGJM7EDVyPCawZGJz21g9QxjhrjqskdYA4stSDqxiicNhB5mAvATyWTVGB3BxzNueRroq76",
  "key20": "3HHVVrMoHVRYPjZdFLx82kKs7g41g3nnpULnskjMSSALgaxd2bSqwcH4srcRXrGVm3nQVkCW9msvQ8ebngYEB7Rw",
  "key21": "3NMa3sytecVxr6ZBX6mCUC87feY7mgVkzQFpcwBEUDXCdsoqEMnQjYCvUbwDkn86nZxoKvC9WPZiMCNCiLVUeUAH",
  "key22": "2hpVTP9rBJvcua8XeJ1aDBPctJj3CGT8hobuvU9NpZqSEFQcfsFztXiVXXHwn4KgwTThnW2yD3XiUCTNRNdjJzms",
  "key23": "3t6EkRBYKzA8kYe27fWUqfZrPVfa56Ars9iLwVoJfKnsftgy3fUpx7ZNH6E4ShR7KR56TzuMHmmV5S8kQ1zkGnpT",
  "key24": "4WyXsFTEJMZcEFcoiw71tEaW9pCxQkLgTnwhFFuaiBFCTMHhE8KC1y8yzTEh2a4DxhtPBcihBpCb9rPohyJnphDp",
  "key25": "4PHkj6mFGs2jEDAA847VbCB6LypdDbUTLVu6Rf5j8Eu4gpTNyLf83EDnhFp7M3kN5BbNQJne6td65HSCo1YCDmUB"
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
