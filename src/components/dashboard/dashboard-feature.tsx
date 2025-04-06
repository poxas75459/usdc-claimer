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
    "QNHVxRuqaJJZGQAo6HPCuY23H3zHb6c79SLq4SYSjtFRbeQXo816Ja4kA6w3rrsRsmx76X2FQWjdkhd6BmAkqbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pXt5e2okYbzyg1sE7NKkzdLTHyPjWGtdEutVPw1m6bCjyg1nVVhBmrkdLWY7UyPAgYKNqgz9pnYQeetSVrzsTdS",
  "key1": "4VEYptURVQ7HBN3VUsZHPuoGfCR9vwWfwjuBzEr9vWQwDj7xapqvTCLqGLSoMXseK9BvfXJo6bcVK62w2Xxat9eS",
  "key2": "29qZPo1PpZBfG2SD7obQ4qKSkQGkZ9ipVjDMXa9b3TK1MchTSCjhfaJUnGCyaufVoKybgxGWc4kaUfH3tDmoBRfC",
  "key3": "2ebjakKHBoCDJaRP2s1WCPDgrjkBqrW6oyYUh1jA59MrMqgZhK9KYy3xcz9zZJ4Dvz5ksBZtTmCRhDYA2amWbqHq",
  "key4": "5hPgvZPTn8V4tf1TYLGypDieiP9NvYzKj7geqLXPmVLDdp6cmbT5PDVixdRbjx6RbWhURiSPhrNH7Un11bQC14WQ",
  "key5": "5QpWEUJD7ozde4ocSnZqXZSP5sy9M4EZjvUmAKyvJaAdYHsUDTEbmkEcbN4JX66iTvGKDEJzYV2TYjPEqiRKp9CV",
  "key6": "5rZXuNE7ebFrPzXs98VphRaVyEZSeRGDGbgQ6G8kp8cdy8mhfufwxm9vmmbVXfGpuZDVGXD27FZrE93JkYLTCWyv",
  "key7": "4MXGeHAx5Y46qr1z81bpa3E3AH4UGmRjMQqGfrumsF4iDYeNg3NnzdS7CWGqr5dwXTxpcJQ3cAwHt7KV6xnxRRCk",
  "key8": "5hJUqRSofbyMb91DtW913RtfhQdEK8nD4xjtxFRn3xEVQSw4kGfunJRxviVXpNKe3kL2jbexU7dexbJPoaVYh37Q",
  "key9": "T3tY5VAaLCMFG45AN7Rbdd5Q2rZzZkoX6CaUj2cDWSSn94Jt3gcKhLYtFurqEGFaZGbHCAr3h8y1fuLBYHwFoZA",
  "key10": "34LXCcQFPfxQCNYwhMU514QJeV842YvpXfbkL4EuScx6T2Je4w2guwKoEiMdWZvTAPuC5ptRZr3jzA3TrB98XEjz",
  "key11": "t7MmXMNxRaaxR23DSFsG2uNWodadvgtk5pasa88H2ZLZLvvvhL1ZTkbsep7LhzVge1FPkDMUczei1C3Vv7o4JLB",
  "key12": "2BH3n4SkaKteAxyZBceF8XSfc6MhtD96rk5Jhdjzwe6Z3cZf5eaKdDzfpnxWFaDg7arY5wKiQf7p9F7bsTG3HfWq",
  "key13": "4wTWnoq6m1E9dDmF6GbGgSLxy3DzdL7ZBoXrmtFPfuUNrdKLUxR3SkKC4BxKWKFBuCsBTDm6ev24sWNB7o62fmg7",
  "key14": "FoWfkbbc6HfBja1qdStXDGtFKfRRyAABAWjwaLJkdyvNACxYHVBRBPy1RRqjn5sEvmX6ZwbEjsZWGLjLd4EiMGy",
  "key15": "3nwPr2FYXGqUMtwtmrCAbRQcQBWbQB1raaiM4h8PizywcqeNryM9QZU7qiCvd2icJWNKFiRhNgABz59LjqrQSKRd",
  "key16": "3FV1D79a3VYApYBPz3fxuSvCm8YDMwL68qPj5CXfCyvhuUojs8pLAMzFyxP5rSfQPJ67qLTrMUYwCLp99avJucC5",
  "key17": "4GgHvTgkRqcQX55zVoHrBQ97vbepKpYmbRi3TNoWqtmdKQUYk2tiV7VGfp25RAm6G6UY3EKjrg1stLmkADRbrXvn",
  "key18": "FK84Mumpr6S4rVyqmWbLMfKfquRLw8nk2XMrJjNDix2VTzFWnaGGF9GozYGkzPRqRnCXAsdV1cStGwqvt7DaEBJ",
  "key19": "2TXydHuc8rbotDeBJPFA6cwH8pMYfszBuKstxWRV3n4CtsKTeXQ6SVJGTtJoyWwAx7FDU7dGedi9Bjdd23k4BFti",
  "key20": "hCexgp1fXNgDZiev5h2BaLp74vF8ej7rqfrNJPuZDWBYXZjWJ7Uq3F6pSkDxgn6wQL2bXn7pYBVboisgQXVBgY2",
  "key21": "3yTboNuPY8Z18T1C2nE4W93Q7Fy5U8ZMF2fFFFtLbwNQKw6gKzcFLghvfKK8AHcqpTpTVBHwbCr8n8T2MLgPeSdX",
  "key22": "3gPKfhVPfJq6Bprz6XqdEHXiAo1DQakDiSQFgYzaoNs4svQLEYLqBR35dFu9VhQKTSEDaPRySacNDGL5TogoNwNy",
  "key23": "3Q4cqvpXkSYMcyhx67XnqLiFtqReEdBWV8sTxw3eWnNsssFMbafEw2UQgmbix8i3RpbkGRAwvPtnuArYfEhQMKRs",
  "key24": "3q7K5wsWdFT12WiqZ1JPBkiomPB3jfLurwQdp219pfW6heG2eZoRRPLRhKdWckzxkALDjjEoHqrWaiyJMwV71i8D",
  "key25": "7UsGhG5friavhT7G7p1qGr1ELpX8fQzMVY4mkPVaSZHwLHfQ3ss39B2kzZCqqScpkcYNeEjSoXdkXGP1YLiDNeM",
  "key26": "33afjDM7cyFUyPiL25eE67mHpgADC5HhBW3poUXJNLPqbEJct2Mg2r9wBNQVx4hiEDHLxrceYVjcV1Le6Tt1XTeQ",
  "key27": "5FJdxkzNkbhAmHwQoTC1JKTt3SnS5jFfepwAXcjp4Mjah7NCbVW6bBJd8gE6cCv2mBk1sDFHnj1zbQYXALdsUmJo",
  "key28": "4H2F54tFVQ7wGYx5DZMNXzhoTuyqbrByVFbvt8TE9vufPtHnxMSoy5B4ixzpMkHPjoMeFm46H6kgSuPT26Vyxb8C"
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
