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
    "5djNQjoSQJBtVBZsbKnEiHWkV9MFjvGdB1aL5FmLB3EKZcJTVLYWxrw4FDaxkc1Hvkkk2xmi6TpFVhMCP2w3bJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y5zYueYQkyzChxRsMZQs251LrYqfXRAfpZ6LwaTtYxvxtXM1X9eiUWtqoj8JefZQnuJDxb2NvBKe2PekcRGKMy",
  "key1": "4GjiP6w8RRPyJgYxUKZkLL8XqJ1szZtEj57oZoGqgQti8C3XrBDTGqdnB987ZncE1jjMZnzrv5Wp4pLpB7BsrqJ8",
  "key2": "2GhQnhAAYjjhQPi6bBiLWDof8wY7PHeCDDtKTBarMX9uUNFjuNuNMceCNAZRBVPArCsPwtVjbJjBKVZTgmxN3y5B",
  "key3": "5eyeyCcE9AaEyJdQzckH7HEYKoqaW4RJ8KU5ZD1vfBfnkkGr1BjjGYcJ1FHpCa58xKtMybWHGTbnK5gLsywawXm6",
  "key4": "EnrUApuACwLxEcQ9UJJNMmU5swMddUsRsYYNwzuC5mkvy12pXvZaqAHRNZpCLDzBAHwimdY1tTbrYrjPwMfw7AV",
  "key5": "4TTBYYo15zuJokz9gxGte1vYuEcwiFTvMeFbVWVBVg4CVJRp6UB2m9pV3LKvgF3hSMLHdMwcXLHqaPLJRECWv8eA",
  "key6": "mko8R7K7JwuWMtjNrUEBxC8EQejWGJ7229wVASyqTqQ4jph66VgGT5x8hsecUx77JWqDLpa7meSqprt4htrtU3s",
  "key7": "4CMvjwLgrPBiSTanShQGnuwbcwnVdZKUATLcGFENVDSrd9q9T94pgM7BeACZXYavStW36VN35sZCf1AZ3m5F4gmG",
  "key8": "43Qb1tbLfyYpCxrAPD9g4szwbHKimuvBR17BmBjGP4TUpPDy6vWFhGDJQrGcwoTiz3XrvqvzgcCzoDhHgT3x7B1D",
  "key9": "5yUmuSZVBAf5q3ey1eGYkAuP6As5afkMdx92Zq5JuSbAqzKeAC2iLbD7dWGyTWVfrRuKj1RQFfKwcNSDgmVXq4Q6",
  "key10": "23En39AXPxF3jPvJ4ct9KnZaVTcbN2z9byW5TY8ahH1u1czSggCowqBNvfRgCU2Hi24jFcLptoHkQiP51L67hyQs",
  "key11": "5cvzyJUVwU9HvEfHinjmhDt7Zeqp6SpvG1SaVVn1AYkTmiFXQ6J5wXbmqbTrvTYxyd1Lo9iZt4JxyN88Vf61uSpm",
  "key12": "mg8pWnnwEG4AuuLwKbwKesqGFuKhZPP7CBaVBC3q5XzQY31wmQMXdniGbiNAJKXPRcRFP4n4Qx2QEzk5FfszqSL",
  "key13": "rXZdKk1AaADpbSSYZYMQ7zMEB6nGJ4R3XZb1b1bQaVnHirVzZaqFpLtiPgtDX6Hm7QH9BcQ2Xtdgxm2WM1SP3VQ",
  "key14": "4b5yXsW3m8U6ibs5g1dz6AphUhfYbpKa5mAkU2Ebbrp9CkNZsRgPL6VkmPutMsuajPJRsXmNwcHavMXVJxJjVfRQ",
  "key15": "2bMQGrjz4m5bVtvn291tpivPvczmeTbk2hKX15LEL745Ck38nFnk7553jLYt6GcbjwBEeys6j55c9eNVTedJimCz",
  "key16": "NNTfM17BVtfw6cbGZUTk6CDNgT7zBEfcVUZEtU2aAi5KBMvHrPsJKLzhpQkc6ZQX7h9MjebB2hAVQkE5TUgd3pb",
  "key17": "2ethgqb8CKmnqMH6jKCNsoYBTbxr48uzQXpmZY5vLGBcLUf3y6fF2FnvnRvPXfNt1PNxqAX8BPEYLwjZS4HwzZEH",
  "key18": "4Bi3iECufYz8oo1YKedyEfH4f3DQijPWeRdGBtnjZGMoiZap6QqBvep9s8eDQu6Z6ZrunbYCnHQ9TWWcHgQrn98D",
  "key19": "4h6h9V5ZqNLxdCrHQm7fgfb3hhRvhToRLnJZvN7s9fwdCcc4sB3YF2mebRoTSoFnuRiKAW2Hqgr9yybyuLkq8dkd",
  "key20": "4s4tZB2zYREDRv44u1ZfWmKWbx5eZxX7JjLanjXxN12CZK1MAkH8DWa2XzvL4QJUmoZpRnNtk652MHSJ26LmG36v",
  "key21": "6QHcvkeqrDddW8BUisTXcroQeskfXMgA7AScPiTYBPXZgGh8sRCYe3Pc1gykbhMBHuksNnYPzUcPpcMjoU4LTcN",
  "key22": "4P7Xo7iX8N7sjH8pKe1j4a8KmSXnr1EAswLs5dvH56BRYGAMNS29uPKts4ZSYPg8xEGW1egc8YdM53ch2LTfX52x",
  "key23": "5R3rwkTLuHi3iRAMBg79h2TmKR324smtQXQctw9hkLDRDMSNXUvqyTzKPfUdD3Nfi4kwMxsKGwNiLVLukrQnjY3x",
  "key24": "4CJYKxzJrXVaRmwZ9rjH5ZGBhBwH33VPNe1QvFQzzEoWiE4yNDX5iwEEkTbsq17P6XxKCM55kuEXPHS6MSKvUnDd",
  "key25": "49pfrJQ82AMVPPUKX8KhhSfofnwrRxuH8uQFB81yzbA2HUS69SYdLibkDyFLdi61baXgiyaw5Cw7nowBvesUNRs7",
  "key26": "3n28BJ1qEmmSPxvMixUwqZngTVdRAHCVitA6ZswnTefZhGBrwh54KP5e7FF14UfuGSTPgRu4wcvgSnJbTpHPSWy5",
  "key27": "3iX6aNcMih3kQZu6t6Mz7RQK2nC1nCmExQj6QCvZv5S5UGpivB7ZDTbhDcqatSkKSfYS8jp1FcnNoeo4WyjaCxQh",
  "key28": "2bgMKKJq3RCatyM197iS1JGopsBZm1cu3o9W5y17ou44Q13NvNxCqQTqvp5KSoK35B5t5X69HjhveWKWj2aUEP1N",
  "key29": "4xnKToGJrcBVyKGhDJUP9oAeVi1ryAR16yFeYMAoP5Bb8wLoNYTQCvoREEZD98wrYzcHv7ZkBMNYWCWYuQNGMqdk",
  "key30": "NkwGvuqfF3yuKQykuHLUQ6KqhbTvrBQJYeBhroU4k2qxb27ofh8tXeoE47mieHzmhGTMQvqGRxAWVGTh6kYSNpp",
  "key31": "2p9UaAkHWdzAKzmcaKLZu4fb8xqanjL8PYj69nzjYDQBdqBgPEzRp2YPrkwF59NYs8uqDKTuUrvetTadwyobiBie",
  "key32": "2RCGLKjJYMJp9RpyA1Ep5ReuMYPGePzjWuiGZ7ShaFHcpQecbrcGwqNKsXr4akgsrAKrYRsLEbCLQFZAThDDdtRV"
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
