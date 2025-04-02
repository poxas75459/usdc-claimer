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
    "5L1YmsVpgCTcBoKs6FGJbtLSngFLDU9UZwaa6UyF1yRhfhuNSwetqKouxbP1tYsL2XxdaA5pqPQdHgn9SsKerK4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yprbbKyZaZB5AcnSxer7VPR9Fk4jSsX5iiEdSXf2xAzYkfz1iqsLxkGk3pUVqBMcXV4bPYxhQ2VaBZreNvGiCPQ",
  "key1": "4P5VPTkiH34kbhfiKD3Kr36fFDAKUfEbpp5GFQU6eaxtGwtbFkYmWFnTGGQfsD2yGXo8GehARL97vqskPfYZzXkG",
  "key2": "4C918hqEX1fo1PYALUvRzhozGd1wY8axFH2f2V41iHTcGm6vAmEjU4m9B79YtEXrrhucTkdu1UB1jhQbAL24hj1o",
  "key3": "4MUHEHnkXHz713CXPQBCsmS9z6NHWptQ5YihedqRmnBa27KRGnJhTZzjsuJpyQpZs7dKq2qVNhC4LWGK7SiazBWo",
  "key4": "4vPpsnUbjRZzwHfhZwPbBcL3qesx5vqoaxHSKNqUJ6bBEmWEEvZ2qob7wsGgQH1kMSvw98FJdJyE732QqzPkHPYc",
  "key5": "41566QWSB3RK4uERk48cMTqRcd6Ab4tfqTzM6rNvxheAXkbjRQi3UnwvSYbGfsvbJjXDe3GRZwPSH8uX7ThmRV2t",
  "key6": "DkevBvYpQYFzLPjoJAerMk7zUY6m1iHznzPU9TqBLcJ9Aa1dNDM1unh3HvE36PL7BqoeVyuP6Nj9f7BAWWUepWU",
  "key7": "3Wyq3nmf3RFjF3HDQaPkZeKwsZw2A69HzZtVhv5P1fwd9Wj2Gg79Rj3rrHQFkLp3Xi7Km3b34akYsj1KVXrTU7nc",
  "key8": "2HMRCLhDjnSCZB7o6krHZ2hfiUpeMAbkJUJqhWRr4NEshA9mRJEA9KkBJqqaT4j99AtLyLa65ojy9epp5iXtfiXG",
  "key9": "2ZT5kFLFQpwsZV9ywa2EEJxhCx6cGBnZEVfKoJL2n8MAeJFpAw4ZPbJqUKXwH1aPshMFXBzEwPWEn81sXXrL1nXx",
  "key10": "KftymB1jnbjTRxHvjw7pgjeC4wmWY3NSPNDkFagGpW4aWaQNKvpV3rwYcQoV1YxXTt5zVEgX2Z7HdtsdyQMNm44",
  "key11": "45nzUd9mt71681e1tyLWYZgp49JEEf9kkjRV2DAqpbwa3hL3uJJMNZHt94xQxPJUYKzFc8MMsWqzY6nS49YZV7ib",
  "key12": "4QYeVbC4z9i1j4Ri7cTLJd22LTU5C7Y9E7cHtJ5NAcsDyYZjhUEv8VNURYdpDfLaMMcRg8QFZLNxE25ShoST681V",
  "key13": "2wf5bJSupNshYZGwyNTPXix3Ce27R4WBwrfRajK76DrdsdmdmngD1sRPMtHhZNYR3QAiFptuRUuK3iRySSNofZ22",
  "key14": "5XZ1RxmZEnCTX1LmvtcypyUWN3PovtJjc7VYTKeXwjJDfP5weZrGk61dGM5oVHnv59Dfsy95qR8auyYXUdUdY5Jo",
  "key15": "5ffisvyDbTMRJR7tNnxgrs15rUubB9PzUHCLnbx4CbYW8zKZJgR9JW3hV2efsYy6jkrArw1Cxf89wextEPnCUXrK",
  "key16": "54gHetaQ7tEWcqXEgehGHWmaFRdF4H57UwWjdKAXVHToryqzKANoWEew14o1ENudPjt3F2AF4AZJGx1xjXBmEJn",
  "key17": "2yibKGXYXwGfyjzphgFKS3aKWK52JGVnneRkSb4WXz7PN9ivxKKkxRLQceHr3HeQYKAnJhfvUm34a7YFRue6kG6U",
  "key18": "2pSJufaRniDrEL31Y7w6ZPshjMG9SaeDK8Yh9qzS3qcBsiYVeUKHVE7a2xd7VmJ7Q3UzqTRiJ5CH8pCcAnJCETm5",
  "key19": "5XCDXVnVACGd9BcL2TY6k66zXEmv1nVBwtejpY1HCMquaEkTbJFN6QzWik1XiHvqaCo5JTY9QfMHWapz4YmaCx3u",
  "key20": "3AffEYNnujfQGfuLPqyDw1bbb1CdKz1Qy67sRgn5RrQvXekvXdQvMPNiS2mF4deUEsVBL3AK6jrNdyod7dEsRmTW",
  "key21": "3oCM3uqbzqcuFWkeQswMSzdtYxUqkrxWrEv3pb9Uw4M1xYad1p87ftaGLBZCampvSCFZuf5drqYH9pusiWAdVY4y",
  "key22": "5QPVGUuJ1mNKwWGinDiTH57h2L8HGP3kk75jyfhgdyg56JveJEdwpg21TbpiqzgUpzXJUhezTfCMTWfFXKTf5i2m",
  "key23": "2JBbxz9af1WreP6LPV4NKC3ZtX66Ky7Y1o9TqPvJrTtrtWTEKWtYPYpskLEVnMpEoc8c1K5d3LWHDsTSbbTcvQUm",
  "key24": "3aoU1zevB7Qej82HZcq9uCw8iJKiPhp8EgRrTwhKuVra4TZGd5MPv6k46XXaFLou3KuvKq3uZHLxNQqumA3f5j4q",
  "key25": "5jRSeuneVtMP8h2pYKbF7b9wwJmaqvBhzpjmYMA87LhCH7fEf7pA5RStDW5SLbCsng7DVoHU3Fx5aYoRDWwydj4k",
  "key26": "3J74KsKe1HaB6mNBYUwXvVdvPFMLK34oyKhK4t89RCLqR8vT9Dw1wVMPWe4MAT1vwQjSkqoTt4VBYyY7LkBov1qP",
  "key27": "2vSJzqWHUqwZCpwjuPGfrv6Bb42UXawpQq9qpPtLfhMX7Qft8XuEzzSDuPWmPn2He9Wpg3gwJnBGC5BxK8Kg9v8S",
  "key28": "5e52QTxRTPN3MUymNSszGBKjW3wjdvzDpwJymQMK8GVWoxtMud4uiDvauEz2atuUP8ku3BPhx39yXq29Cja2vDd5"
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
