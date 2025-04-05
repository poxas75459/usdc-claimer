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
    "5naFoGuyNHPvrXmuggy2KY3h95HKBgTReXjwn2cnTYfdZTrzMVyQoByNwNuwYA2hU1oNCp9MztqTqfG6sM91z4AS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h8UFawfjqBdvYpnZ8oA6MFiGG2LC8Gka7sD86v1tdVdKdBZEA9KMCy46sUTeVUmDXwYGHsGS7ZWiCTjYsEj4kqF",
  "key1": "4hzx6crXoY97pfASLQy7Tt4NTeSmTzGLhtEtYBRnp3yTuKeJh9jm8fbFuscEmZhS4bjuF8ZSpCvyyWRz1nBJtJ9B",
  "key2": "32TK8axnJDrvoajUcpVzkb4ewF6HDZ7UCP1aMa8mirXzJD6YLMv9rffBGqwxMp5e64U2FgdnFMoJHaWwzquJshHS",
  "key3": "5b116zpkyKTGNXGP3VZ4WNpbSAWx5iq4S4gso3cv5usmbxf6XqcfEqEwkATzV2gq9dzsmCzxjxNGArhk1skwreXr",
  "key4": "3HLmyFHw4rmyzJrgw9e8m9yuFcmwnQeBPFNHVF7dUw6y5TXamu1Lx2h8AFxSg39dh3XUeDPLQNJDZRaGgziNZkjD",
  "key5": "2aAAXZxjNXQ7iKqmtJsVBrMFncuEAnmY8DeMYHK3VCg8Urgq1Gm7nQa6CtJw7vFRghVQr8u95FmCwEH3PWDx8vKg",
  "key6": "3ZqWqhA8Vqwr3CGBNAXvVDcKqgm9wiVgM9huZmevett2zAciZrAM79R541diq8koWNwBFeH971tkpJcdWo3pBe9k",
  "key7": "5b8b7Zm4h9LpqFFtLgAxzXh5qqE65Ci6aFYhwATerfJxKjyzCWsExQe37vP7mUSobQmYS5GZcbBozzRaXJcRpYq6",
  "key8": "21mrCyzxHSmjCjwX9VdPHXEuNdtdP4BxRdJsgRFQpLWYiEmybWz2FNLjuYo4bpiiDpnRLZhiwQEh4sZFfL5mZYuE",
  "key9": "yuVP2ziWh2JZapL9iVS57pNJjt3qQpinDicGm5fmo5LWBPweaTJoFQRM6T6fPpSPJUJop21WVDQQwwXFRJsEaQi",
  "key10": "3vW5Afj16bWsgGLnpv7tzNrf2f38ES23BgmmL3912Eq21S762pZwXjm42uzp5SoRTgAaXrLYMzr6NyJudfPtadqK",
  "key11": "3NZQZtTYEqPHt6BggfcFyDSJ6Bu7VyRkLn5EsELTEXuighTnEHCBeKXwpj1pxiA8FmTuUuJBun1JwpeBPiWxNDL2",
  "key12": "3z3qCsF4t8k59Jd8cNp4m6UomHvAzJ7BzmXYDjp1LgSjujKZreVhrAsL81X2xPuRytoz4F5sWRJ8RpRAWBFfd9in",
  "key13": "2imtZCw45zWnv86hzQbb4HhtUB9UcgX3KYSzF7PpqEUAeG1QULRQUpsWHmdBDKj8EQBwTuAmjgTaSw8xTvE6xTMG",
  "key14": "39Kc8VaapJDZ7Fky2GJZLra2KSbufWdRAec4thkSiaDc5LqWtQshT5RHjtcBEmJcVexWbXgQSdzru3D26zcQLQJ8",
  "key15": "dJ6Hk69sj9tCKXqk4BkrgF41W9kuWxPKBxZC2rT3vfLy1Wjf1bADX1f8MebFv6Z1t5Gvkua8QCQmMpauUXdiupB",
  "key16": "2CaGr6Hy1qMvy5QiTADpE9SvqQGz36cxjWpi7XXSA4JbPSWy41Xgrrfnzb4hRRvnZS5mtV9LfwWN6nR8kH3kA5Sg",
  "key17": "5oXATRGLgyQbSuhmz2W2Q1BY9Mz1FVpxXUpMBTp1hVPVhFN1WsbopbD8U1S78Ag86VE4z1vgV9zKHrLxC7XHwY9c",
  "key18": "5Q9RmRbtihiWb88otfrBUdjLn6qqkA55ULrBSfeKSB7GcNpiWJnfAhkuo2EyrcA5F6gDYPQYXv2TrPJs3z4xqyKv",
  "key19": "4FmhcyNcsXqvAHtreMmw3CeLjhJ2Lw3ZtZ5hMH8LEPSJtKAvY7aEfKmuAy1DuUvvnnv9Drs1KAmpaQ2DhYFLeWpF",
  "key20": "5bSu1CsQfBCJTrCje1QrxoTzBtJX4gzkDdq3bVwfpsrPM6czrcQDKVD6VTgBtAdpBXZzTJHBfV1cB7ipYgv9NpKN",
  "key21": "3oqwXUyLzUm5iu9NgBUAY2S1Yx36KLj3yoeXJjzLRxnHnGi4fPgf3MhBBzQHEi4CdcCpMK5yZzHfXqSZwJRPziNv",
  "key22": "KHeKrgYe4vkwzvKNoW1xCpWVsEkUCbDraPkzM7Q5W1GCVAgiNLCwRsVXgwPXFf6ERPTUDV8HtvdGc5LaYqq85Jf",
  "key23": "tGSYxiPAdZmTGnBCCthR5VcPqLyZWEHP8YbQLGxHJtcQEXqb6smwMK4gQtWUgiXYHwvw889zZqLzMXqmzGsWZM8",
  "key24": "RHWScVhutprHU6V2FFsBTrk2EJgJKT7GZ7dHeGo5FuvZFm41wox3ApLbWERBRf3ZKTSGzHYxxGXx1rhX4zCdySc",
  "key25": "5v3aHE5rCpbVtjoWXUASMZGtrprUP4Piof6D6Fwj83dxsrjb1on4YEFkq7M1G7H8CEd9jK7y69DFFioxZ9YxrTWx",
  "key26": "3GbRrpWCaySAzV8n1PzYj5nmN3KjEonxvnm7cvrbrJYR2ujRkVGK9Pzu8PP7HBxerq5odg48qYC6EUGGNbQtUDqs",
  "key27": "45PEQ8TgT2gm7DC6DYyqSzvn8f65HmZULLMpwsRm3k81Fp4xQWe2srJB77zmujCuKKrhsMiQpJkbXLLDnx5X1rVH",
  "key28": "2v4wRu4CHwciccCWDKcjQ7nZRLJn4HgmMkNCFt34MkHzukAsxutkFyxSJAV5HgSZssNSPBgnu9RWSppPh5nhAkR2",
  "key29": "57eXnB2tSDrLPfESZpBHCRCQotBqaPFvqo3VDAXmv5dWi1nrxa5RJiGSHjjCSiqJcFJRkMUd3pYzbiSnAGEQodNs",
  "key30": "5qaqUbZz1rC8DZe4BqTCU6dmZF5xYWjmNF2D3s1Q7oJ2yfaMGnarpbmGVSTxsWrn6ZuN1qvi7hvTnKszciT5Spo4",
  "key31": "PSFnqhycAjCEh7WTd2oQEz5m84k7UryEPtnbpnD4U5eofv849ubxghSpcM5ZXPLiFLaxJUb6qAtY1iLrTmQpAdA",
  "key32": "4KXTaYd248NEA41s79EV71hLczQv6MzU6aENNwETzYL3iUgkg22DGF5n1ritgAWapy4Cbfuj7jgeG7KhYU9Pme9X",
  "key33": "hr4koyvTpBQ6FEzwbkkjjXiEFG6zYvMtG6hTC6Jdqms8bKd7Ryy8evzqaMRRk2C4fe8HriiHkk7zkwEAkrpUCL8"
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
