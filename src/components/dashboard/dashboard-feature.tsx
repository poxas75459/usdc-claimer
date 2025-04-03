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
    "GbuqGWjAwCMvZPFLfvda79VzenwWLKNrCFoDi1ZihrXYNN7QXwTzLc6NKCkevBugtYACXowK1U2bKNxaxG8n4Fe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pgk51uCMNv9bFdDwNySzyRbDZE1QrrVnCqKrsccpxJYxmsHME3jyRBLRpsDv1NaiLgo37rEkc5qPDPaCWEFWkKN",
  "key1": "5eSkZscB1w9MAirkKeeSL38h3AnwTt72hYhSNdnNXnmCkFKXGvx7dtsBvjZ2DzMbVviGrbLyAiiVf1uYubfDy1Fr",
  "key2": "5XjKV1KpDXWyKGu5MmSJYNz1RQ5FtBxFseJSduBtcBKyboK2jzD6UsGASoztdc4sBXsfEuGpn8bQNVg2ZS6XkJbG",
  "key3": "2EcDWJMvG1ttx3ANkSTEiGGkRS9MqYRsoTinhgvGV5H7TRhgZp4fsCPQWNBRURGxGoN9122q7m35ScKTbGoeLCxG",
  "key4": "3gqytJ9pWLdZMe14nmPBJ1KkXqJjjJWQyk61TC4gqD8tuwQocvbMcFmBcdQyzX1hFDhx8YdYb914LgbXH5Dnfgmy",
  "key5": "3yRcPQSmkWgYGmu7VLoEYrmfHLdXJqeb9sf85QZ8HSzPgstRV5fcM4eXkXz78LjhVqUNNJSxnWP1ZHsxVzMJ8rTp",
  "key6": "5oCf6EkdBECSA6aBX4YPxoCkWZGG3478d9XoSvhSrPR7MTmbAVaLVktcvUKVf89KVxxaA5SrzbYn2uytXhqXh2EP",
  "key7": "59pPzN6jiAqM7rQYXMqRd9oHCsoMsq9cgNcj1sHeRWHN5z3ehxcSNtbXGHr6SBsaGYUDFF7bs9e1RU3LXdgs5dsC",
  "key8": "5k56FaPK93oBCkxDo4NtoNzsLerQMR7JdiaiyMPc3Cyr72MHkiQRwWx6rz5bfGZoaSzSXigKhYhsLgfZ5qtAsU65",
  "key9": "42aZiXUAPLMH7RMMAMf8ZBA26oEWt5uabGck9Em5hsDuQYGWtYgRwAuJB2inaiEw33k4zQeRzff4atB3fVEXy624",
  "key10": "4SzFHxZ3buR2FVaRYwHTeGSiMuA62o7m3B8Ca23UN7AmrJFWcvXz61wrkytSXUT4z7YSasVQBnQyACxPZHioMXGR",
  "key11": "5uB4ABdhPRLbHhnFryuYZSm11k3ALFWwHmMvFEiMzrk8kiqR2a3QR1KXRxVbS6F1Lnug3S16LNmWUeANSfNWoU9v",
  "key12": "2k4itc5sqGWhEMFq6w6m6iX9AA28zsky1FXx39amLriDMfi3YCHtEiJrq11p5iKnmSUSRL5AW5m7qYgxRc41H9TV",
  "key13": "369rPzXeThnoqcz2xiVw622vgcowvQYPxmyTrgEvDnuV5bX1Jv4omhcJc7R5QA8eBg3eHY2pwKCx5adL5Uunkwqi",
  "key14": "UiuiaoKn9NhXvarfPHnWGRHL6gSNj6zS7Z771VLW9HqWXUps9unrFjgJrXx7mfn8Kk1k49LKh3NMQFgaYQueFz4",
  "key15": "31tNx2Ygyd3QsVJAsjQ5fnFnx8TDihpkCjj8ExRSz2Dptr1bPk5DXJstFJnvm6nAUFLeuSfnktDEP7sZ4D1LRsbr",
  "key16": "gY9Mb7HXgCzCpJZXXJ5eewU2KMU2b2i4BPzYgEfx7K3seaVEjNGT3WNJ7Dqb28uWWLEYaE7tnZXNiqdvkf5Dwjo",
  "key17": "2H9fGsbdwfhXUhKiyRRuSZHkqWrAdBjEgbh7y3hiVjxZHzfqc8tYrxpLEY8TjjipRuKUDVZAcULXd6HVWBTGEU6p",
  "key18": "2eo1LYkMpq9VgVNRazLrFGGkhXQUUmZgQxyGDGJgAsoNqjUd4kqH5E3s8iLdKhPo76WGm2WzSKKQbc5fREx45N5n",
  "key19": "2Qvg45P2BB3JAm5tjr8XiNvCDQcYDQZV2RwUdJfyS8YEC53eRJVXcB39ZPHQHfUwbuG52ifrDyzTJJYiRzFYorXv",
  "key20": "2eDBbWkQ7J9DD5jZTMok3V86MvAaPGmh6vXEpBT1KGaPUNc3GhjL2Fi8z4PvdCaCP2UjxcsjtgnwbtYQsK8zCXP1",
  "key21": "qeHnAyJetT9S8MbVApcjHj5jryuGjG964aP6Wx1mbComwd4Jz4eZhZM9ogUtKWYyjqocvLeVCNpyNd5WXhqW92r",
  "key22": "2uP52DXp5R4C7SKZ9mZm6ErCJuUik1ghQw5QQpTVuPrbvaq7mn3aHhBRtmjK2ziGCa25MtwH1eTdhT8XWPuxnNf8",
  "key23": "Dzzb3C9AeQ86nGq4wZt8xq4wjhA63FNRJyMfUpftWJkep5w9Tprxkvt3YnYTiUSbnRqRAbXvRRxqVBTto8yK6Pq",
  "key24": "mb9gQCDC5oseho4sjoLCNLDD8LPUpVUcuF43yiMA2pdCpZQQt8a8b5Yw4jw4rW2iELpGzeUdGPkFDt5reu2MZfN",
  "key25": "2nBceA3KohQYYKAmb3BipDnZesL5VEmrsLVgPi8EvGyZtiNvPhraNE4FhxsUaWfytfNQa66KPF2RjUdQJJCRqVic",
  "key26": "4gs4u8oNJUxoGbtd12RKmiJr7Z1SwQM75fb5spJTkED3TGhjTtzgnyGRtV7o17mczCTysVh2jm4JLQkGdfcG1Sv7",
  "key27": "3tRdj5igzsWoRCtnqd13ETmmxL93XS6iniTmgh9kwt4FaeGZLkqWzzx9uTuaAy4eo6XntsSJ5HL7R4kGcCAV2ikv",
  "key28": "3Xu3wYfmHPdggdQeYtU3rjKhknd5KEVmvHkiTGnCCvFUUQes2vTd4qPEwjNkzuiLRo3uKQuRjQaZVVHYNPsuQvW6",
  "key29": "3Jq8grWLrySWcCEDNHTq5BNuemNRihM5pPAqefsQyd2bBXw1dDHk8V9EHFeT3wxpnVDYY8wgYcnzoe3ZfqMP1X6n",
  "key30": "u7dayprBzsJDFJ3eJxY5qChLvVADKaEDq7PE4czxxoPzr9H2sNrwwXPBvVAzGmbTBMMARcoYVXhUrqijrNXUB1t"
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
