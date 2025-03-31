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
    "52vGQcjuVuSwWKREyDL8H9ZNR8rcZwT14SDCVUcRFHgCbGhQ6uPVc85KYLQtV5ixukpnbECxz5xeMs5BmXH7bDMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QuDf5e57bRDAWNKKzfaWnp9q9T5LmYbszt6CUhuzsA6YLLY5A55BUrAQt7PNHWEHjQB8tekwDDaEmEKG7C9Ch4P",
  "key1": "22uBJptM1wuz6osdnFMB98wQnfUSRg3mFCSxMKcvGM6hThoNMUtbVmSxJ9hetEnzxayPoQs3VzSYKhN2RnAQdiED",
  "key2": "4rTCdJngbWyffaiyVqxHpMkXbhDN79edVPaezvMnutKcTysVKf78ciDg3LszxhNe5fUoKwP28aSNyYxs5Jc7EZV1",
  "key3": "5K64B9HabRt3XPj7WJrtGsXsW9jG32d8Zhydvj5tVjCP4j7zkLMh4rN5TxA7rjwKFKjsQwkuUDF4F67AppyfkMQH",
  "key4": "4yYenqGcynkTbHyKvrks1SCLLwLwbfhEJqQsSsx6MGjViAtCarFgQyWZGCevhDDJvetCKTxm7f5itttAcyHTCViM",
  "key5": "249CvU77BpBsaEW86Tw3VSQAZDrdU4Ckb19Q9Qe3Smm1RR2Ai6zwcNthvEyEv8Gs8LcAihguMyXvMYJFqs9yru7P",
  "key6": "3FFPnQoRrNXsRyoyCupmmwn2ZNcTEzrAh5SRZs4KUaoU7ZweGKecdASxbwQuF9kas92fXQUe5ua1X8Pp1aWRj6ma",
  "key7": "5RpY8ZPyd5kdqfaoVbyHX7DMg9nDVLtkzfBFsy8bmUb1hGtKUtkzU4eUEeswJ2ygwV8kpWw9ziDSHfhjhDCivXtW",
  "key8": "44nc1YNawmx3PLRi3FSRbeZRnWHXPna1P6CdzuNPqKZt4Bax2q6mk3KwVoiv74pc3ChVRpbdLdptWwefcLK81MCw",
  "key9": "2rNavfRH4WpDprjcyaK9DnRwSjop1fmTVQDmgArNgS4JLpmnH4ZzEJpSDxfeA7LNQkHurrwtm2YmPEspZdxgqdHc",
  "key10": "WE57WgL3taxi4CTK1tj7GyY3MTH31U9sNcH69qgCybUyREvMN9pYuqjjhXdvfAddvaN6PtgyP8NZJodaPAdMnkB",
  "key11": "4Cotg9eUtzKswKLLwRGhejaWSijU3VhXpH6yEL98UiEXjTyQxBVJAcU7bfEedtBv5Xqo4x4MMYTSu5xFe6UoenwT",
  "key12": "2gs8Z6P2cZsfAwbr639DvZ2tkFnm6ewo3yb1zRfZDKUfgbB7cnAJwvdsESbt57gBBYuLeonYgL4UUZNyMXVkpwbs",
  "key13": "2yhhgZo71AkPEdV8G739dFyZBYQS6u1im7qoGQDr6HVpb6znthKHM5QTha6jHHQjT9Ln3sBHSC66JYnzNFmzB5vX",
  "key14": "expbMaMd6YgxAUnspJFC87ik7HScyag8ZS7WQxMTR9nkBtTfDXPNQi3gbMZsawFdmzCuVZ3Q31CUUUvnvJzMK66",
  "key15": "4RWRvSwRCAnToGKQWpxV6vYzwK8HwqovfGV6nh8tMfCDCQGZC3FTduVWnJThnFKbhpcZKGqu1bQzHH5FxWkdgXVK",
  "key16": "27yKLQeFihYS71ZtkthDi1q4wHwRwAJfpyaDpnzsKBCfuZjXHSGV7uxDiKjcJPrwCymdXvjga9DanMR9mAkjyFjA",
  "key17": "ZY3wuY8tGTdJK1vbUEWfcdRU9rEsbnoC6F39wUYR6yt29z1SWZ5EiutA9gmZRfTNxrPC8Yc9zBy1rby6FzX4x8g",
  "key18": "qTX2n6NoSPRxA8X22z9XYDHcBtLiykP1hhqrc7dextSe9CsEfCfscCiV2RPvySCsDjcRuwHifqJZfyCY7AezJCk",
  "key19": "5Njsx5ifX8gTjFgEwvYZQqHdM8cfgyd5EuW7DWZMqEisVHBmBd8mMSHX1Ciiw2jccw5VGq7VYgL4Z2S9bERf7RoA",
  "key20": "2diBySncwpNV1xNz6sQYPyNxahcmcBHng99rpYpPqLiqH4UxTVTRehgo5jScPLgfhtUppapVPJCVqWHMWvn15kUr",
  "key21": "4YvYQrFGirvrYcCFEa5YkaBRJiLa7pcXQvtyuHc3rbaoyrnGRVCJ9BrTzrpGmzzPumEFrnokoDkR39zMsEcHyoT8",
  "key22": "2HQ3k2k2i7u7g5FqFRpJBK6h4rESfGAXh4YvoYxdL7gEZFE5rHzuSL6MsA7sNDYBUsqbrbKA5yW9rXb7trNGyBsL",
  "key23": "2y47Mpc22ovnQcbHmjPauaSb1NAa67kuMpYHmUUmjGSB7ryc781K7hySxqBWnMcJPApGdQ1PMPy7sEJi1yjo4HEZ",
  "key24": "3sjeUC4rN2esWDYBWvhdTEwDnYausSRfJHnw6oRpbVxoR4oVCBcry52HWiDcJSMKsNfLzQLn9Hr91MiLdzow5d8k",
  "key25": "45qR6NAaFJMxymhxPfo6Htiak5CawmtDYjZAX2utN55nrjjpJkWcP6TbjVxhGrVMAGbEqHkfdb8D5GYbNpyrZcTE",
  "key26": "31p5jehxzM7MND5iSvQGwxn6dq41dEbbuQQu8YwKsbfdgPFtHNsBPPbGASD7wPUuzWxzuNTs2su7psWfZNXtjB1G",
  "key27": "5XmZEzoTFMD9BMBkAU84C8GUHfF4LMdDMnr5LonPEfqQrakZJpZ4QWyi8cnAdiXhKFfQVQ2E8kFEbwZZJEtxmY3W",
  "key28": "3sff8vh1MBz27CqjJ6fqsVcPmTnXh32ZPiGHYmtc5pnvP4RnVZABzVAsjfSb5yzhMYKHxYNV9YbS5SYGM3u8gqmR",
  "key29": "5vZ8guFJrXNni7DNSYVhzGRsjFhMvDtnh8hqUB8WmzD6d8Ft2jo5p3SZJC65VppknaU1WcCT9DeUE6H2UA1ZRtDr",
  "key30": "3Y1qNF4aFRiRX8iVi8FpqReeK3RaSk7Cx5iuqzpcZaPijUecXzK3d1Zhd7Z9nwT8ewNnQ8wKjPzMGU8Na8DUP3VK"
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
