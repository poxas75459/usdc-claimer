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
    "4DrBg2VKaHy9o13NeERyDmpAEiBJhXvPC2drLwaoBmLW4Bv5EXZAmtsqTcbRaNcFbvawBeZ1xEsN33DLNdNJrsmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GVwdAFuTLJN4rDh48Kw3FDBvvrbvyxqbbaSPgBCjm2Bqi8LC19MfJbcaVyBm6NHSxGDHZNcN8FnTBe1vqpv1cpi",
  "key1": "4mgmniZnZVh7tGFwWUhtotYmivXgbKxayS6kdv1NPQS4znVX2vvM6fpLm9LgUfM4v3Z81TTvaSuGVWfMBHo1hEK4",
  "key2": "amteCnzyuLjJYUBu4dyQY9gii1Kwnmhm9jZyUKgcWoZZ34imk9HfmXbYvpk6nR9RagVGXdxRij7Dz3eB7vfSgZi",
  "key3": "35Z5tmQMKzPoxB57SA5LvV3syRQVtCL7Wat6uDERACy2DUg9QpUKSGCATwTsWediR3H2w6hZzHJGL9dkEwX54xkc",
  "key4": "3RoAtnviaUSBiv2hRYFVpnhaDyrPbi5WqbRC23cfS9Jt7xBwEV1uJTyvnqZK1pzVs611EMp4Gh19sejWachgpZcj",
  "key5": "66icKQQBhZM3oZyrZBdbdhzkTwYntTzmgc4mdjHGLmrUiBe78aUEaDegmgqp2j2FsfygDa7Laf3TmcHJ6cCEpJCR",
  "key6": "4zRh5b4sJu99toZ8Gr6KD2GTfbcuh3GewYuXL2PDdBimGBagEQ4Pod7xhQHVppZFUxSSUCrMuG3KMCKWxSUxW4uA",
  "key7": "3ktGEHYV71DwqQHXwL99fBuXtKoDSaG8DXzQyctJMw7DSrjf3ah1b6CWfGzp6rD65Z42TNugegpHmzGsZbNeqbhr",
  "key8": "2EezUSLUYC6v7BpdyuQERTnYFuHLyeBeDdHqcjYo83tV3dAxtUdxD2Jn6ctVf9V3rW2S4uAEc53RDi3yeq2jVvAg",
  "key9": "32nLgJjYqVTKVVmKfahREsgehr3sfCeJpfZakWZzUwKqTHiTyGzD6Pvq1QKeXJgpjbuR1PFn8zp7X8C39fGvVrk6",
  "key10": "2A2m3tEZbtV6FhRvaEZ4SQpnPVcyUmwhFetyuFWy6GJ9Az73XfMDKDi3gwH74nvdHoUfkT68qwNr4WmoLyp28ES8",
  "key11": "BEx6Ww7qQrpZgvZfYWpwYBLazEB5hCr55BQNMkeTAVxSXGnncB1F9MLFcbrBczZ862Gm8DGAUSKUqztiet4dbQg",
  "key12": "2FMQDTxDPEqFE3i2NLh4Zq8LzsyrrjSbV6uCKLZVVv9VTdTQ7vwfSH678GyDuVwqEYZiELUv6Tfq17un6qGAWvqD",
  "key13": "3YdqtXDXheR7LdNR9qcPKzAqxdxQbPcxinZPL11rfDc72qUK9u6j7QKrtqnr9ifum53vYKn1zz8pRJRt37jwHnhC",
  "key14": "3swuwRBjCeKt7VjMvfTMjUycLtdEznMfeheeZX97WoHarKUsScM9R8KQsAzEkDh7ZDweq8zCS38JN4FKUYjdys11",
  "key15": "22ThYLbDNomthmBxU1f17Ka5zb1maSK78GQuqKRszZxFRmBRPXHdqdPzRaJYsn3NUjam8suxEhJzMMi2e2mukqj2",
  "key16": "2BoWgxvQ1vXXsnqVQKqmZpNyh2BNfdny4Pq4F98UR42WiN1sEtA1WA17UZJnWL46qsfnATwtmzgLVMCqeLNbD5uZ",
  "key17": "2MqHaoqfaf1V8L4134L1YpvWeVK5c8ryeeXKaF9FNDP9Fo4KxoYEbWPy1SJre4uL8kL2HecPJME1e72K2mFVFdES",
  "key18": "bt6N7wgCqrTmwy5KYSK5GCeQdVRXVe2n2BA62uzf5YmZNReLQjfLWPZe5CMVwjTcCDZDvaVaC7FoBtCkEUGBPyd",
  "key19": "3kRz1CGMo1VkHMLLHiZWHsA3WThxCnRYhi9hzAv1qxeyzyJET79WkTAq5ATSdYzBzf9UDhTYt4y77KhTZn4nqSr6",
  "key20": "pmqSWkFbhdHee95azPGjtFdYLP4rLsFzT1SqLG2wmoT3GLS2V1ybc3tr9iKnFJAtTgF85CXStAeB9eAAosg8XwL",
  "key21": "5VE8qAK8UkEsXujjY6gdfmRecYKNEMPm6eu5GEBUvKzja7AuFvQXEoLxczj599f68AUYWMyQ8HsZAT2dhs1WdXw1",
  "key22": "5iNf5yDE6kjKB72MsSYw1VuysFxPWYJNr4bQewnaXs69tCMBPmrMR79LYcGLomZ4UPLsAMkjTGvHAtqrtojDuAX6",
  "key23": "5pvsjQDmbcUW5RLBhq41469qjuPXgxYcAMfMV1C1zZT6QmKQp6SDpzw3zDvcFWGhYcVLrEL7XTZn8QChRgpdV9Ev",
  "key24": "5NVgFWynm3DMLTcK5oX1EeqzX4PKvcDn7zMGPKqUKrz4qqu1izb9FeZeJRr4VpPF38TMGLYYYFkyVc3dfnjdeMbK",
  "key25": "S4iyaHdFAwNUr9qGy9Sc8qCjDGcJswQB3nxYKKucG9HHXE8yeTZAFNK8E6mBf2vTwg9e3HahMd2VZsdq1yjKQkt",
  "key26": "3zZNhfgP62weZVLvSYpdvWV9g71PigkrPKjpG5nztBMGHxYQtBro42Bkaww5Xh3pw4S3h8E7rKWKcj7cgRuhvz9W",
  "key27": "2inbVqnoJPiSyfQkivdpLhaDPa1Y7VhnWWaHMhEZFAsCx8XxfhBExB1yix9n76tZ54q4aGMLF5zQo3LUpifidcxa",
  "key28": "3qXd9BRegLGNqC4vrNVghcMXrhgUVmBEwr9XZ7MaPCibRPsapXZcfebjttCipU9VqiFgwnkBR4nmVZpDR3FMW9ox",
  "key29": "4TsZt8p1bCoA7qFdG4ebrLrzw7GHDF8m4A7VzPgheQG3K9LwScB7e6eD1sqBBHaHvo1KmG8qG1iKZSvxYBtZ877k",
  "key30": "3pZsswCHqFoHbKBp267LtLEpQJAehipV33dQCkAmQr2NWBuqUaAYqhu4ZAM62SRb8tASvdghehGXusHwg9SY46Sv",
  "key31": "321LVm35e2ov8GdGjNTsGkTzZw15yAXKK8cg2dPbS7yyxnDzkbJBWSb2C5eiTejZFRGCbCQpY4Lz5mmYdLp8bmwR",
  "key32": "43HQ5Lh4VcoW89atLYUkwTPZmzFVrQcz4iwBooKDxKhHEQsMJgtseKknf3apGBg91r5MNf4fZ3g7EyzosKaNXY6s",
  "key33": "26Dqf1iKSW5fYKWr8QEH1HuskgZJSs1Jy54FijZuKsvxj8Y9WYiewMLwfELhcTzUeGB8hSCiRMBFREQmrWqqP5gg"
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
