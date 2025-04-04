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
    "36xbyQ7oc7EncRfPpM2Pitj61ZAKAQTbSE9v4nyEcPXqdQ47XDfycYA5EM9ZjhkY46MLRa1o9Lo4E4J6RjYz7HZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eMmp5RJDzKp6FHzitNn7nbT3CY4NSyNqnWKbRT3SNyXUKxRrHbaYqMKNvqWcVA2vha4LVWcHFYwqjQcRcyGYdfg",
  "key1": "3paMB7XP6GZptthtLavjvfNY5J7scdTXmiZrBSZ6koZh58QS5bBhc12pBcbG6bKrwuDVVUZDFEGcxxGRFyqCvQRf",
  "key2": "57MJ8Yw2MjU3VEipZvjGQo5VQcBiCLGGE3Q4J2uMusay64beZC7kyfkbe58o6iLDZbmpMFNiPx9A69A8fvJHVW67",
  "key3": "iowoNSwh3KADazuB76X8UG4p3Z4wwrT5Robe3NS1nXp9gctTR6pJHpaSdpX25WPsLbt6dA7UbXpe9d4QyWzThcg",
  "key4": "2UGHMjWgJ7NhXUDnCneRihZ9JCeqZxR94yY61eZT2jr3QnLokTqe7a9gWzZt5JatnWTzwMQ7rN6Tw2ZXFVUTHGNN",
  "key5": "2HAi7pAqJ6XKAdfaYrisZ7Ep185JDMn79qSHjc7NcdKjxxdfsqQyGs6yRQZ7RVGHvMT5CsBPbQ8Bd3qbBWQSL7Ux",
  "key6": "5p1NdxA454EBWJQNdC8aLaCemsysauEEXh4FXCjznP9BYG6HjJgnAPW6rpyNnznRW3FuouNpek1RPFWqr9EJN7Fs",
  "key7": "29f4CnZkUVtUHHo7MzT11LA7wP1oXjLNjvfPHaupKPzwrZjf3mDY1RKpthLwTGFigboiobPmmRDisFDk8TPrBDAQ",
  "key8": "4Q7wAWiXLpySQeEwnEiPUosRrLtaFPjMspbTtNS3nLFPk2dLBnQeJifCKgrwuydygfrtAbehMsZDeXYLzixZSaum",
  "key9": "4LxQputi2UzTnKFzQBJBwZYTVhcyBswyRvxpAvvgwsPU1QkzGYVbfASLrZcWTDAk1sqqZAKF7CkJzPupJvbf6LAj",
  "key10": "4EajR1ccZQoGqDQMqCoMBVquRnsCgD12RKXkXKanbUuJTLZdUsFmZBTTMeUqj6zWebq9urapUCR1K97i48JuPh11",
  "key11": "3jKhtQxXnRUFvENU8zKbxx9efZTupcfWfyoph4g6DqXmEdZbJY7od7gQy2uj9qYu1ZX55yySpXCKFStpk7LkxnF5",
  "key12": "63vTiut4hFfmE7iasLgK4rmPBSXyk9JMdnuViiizsRB4E2QLBr7BuFJAZH726iUNrr9PJaQbCJejbFfwB4i2Pw9D",
  "key13": "3KsFjEDioG3dBwh62cK1EtTpbD1xwT2wfhe29rQKghvYaArJ2ro1dgTfNUNnDJ3b5a7CDfULZ89MCnezQVh1UvbK",
  "key14": "28VpFPqYUtYtDypre1ECCnjYEqdw33JYnvpLdw6vqcqWnT42vMseb6bRrccUyrMVNq2KTcGdw2knMiDb8E4VvUHn",
  "key15": "54XQ49kbrY9XU2vg5SeFCvv8LinBi8QYeWZHanwGWTwSJFoWAUwGFsH7aH3GoM5ToZGRRGF29sTwT6BD5PEJ2DLv",
  "key16": "54QmwuYLyRTVrzyBFqUnDiDxdQqdd9rZc9SPhrMAirE7VsMkN2MAUHpe8A75evu8BR4sa5mL5k6NnBeohAPDsWza",
  "key17": "3mdnhXDVyo6sW7Msyi9zeZwmD6WQmt2oJ4rwQ43UpX7Q1UNYvkkiLs1rdiqry15eWn54KoMohDQJqXUd94RWsds9",
  "key18": "4b2Takbxtid7sxhsbum2UwBGfdkHYLYrGpgptBWzwLnTYaL6ijy4ZKyhw9ZfhCVoajnKLsEEYDVb7MP7311pebnd",
  "key19": "5shcsYoHoL4vdK4FgyX69kCYFMDKt2mrn5fszzw9TSPUx3FAwPePfM6TLN7caPC1QEKtmNjj9n99weGp2nPQSye4",
  "key20": "66A87RnbHgr45VwsRKxYDCoWnH1FFTtLGwPzWZM13yYuVF7CtF2WdaE1vxkp4iETmd53Bq9tAB2waoTmMKXm7jKH",
  "key21": "5LfnSbpuGvviZ4hJDMf2LFcTfpyGdp9kAiKrNYHgfvpS6poa2JcapVgfgM9Hzk1w3XJk3xGcvQSxSaUoBhYoUsS8",
  "key22": "39zxXbE9UrezVH63HxcjPqGmc5Dk1B5waVyYt9cSiVZRZssjiEqS5K8ewuo7Sm2JSkZ5kMhrZpL7X5Cwkm9BFqYy",
  "key23": "36Fgyn7B7AKBZqtWQgEozeUh6dx9Rs32GD1TpAzofEVuuaEBQE2GUK7jRHGfoZHPCnVq8456fmuhDhkE5F3BpLCr",
  "key24": "5jQfqmtXrm2a9dpA2YoNubVQuwrHcDnN17Ep6SR32FU1ke4yHYmSeKHVQRgaKkyBtDQ2fFXwjTH3pFoVDkfsKwTv",
  "key25": "3fxvE9aVCqGM5do1qkCApUmGDaZyiFiiMXPCqHbjwdixs3BAtnBnGaqArDL3ErxXtFcNECoixFDjHeUz8pCAzqp4",
  "key26": "295jcKZGQj7ckbBWdJZ6ztZZHr4KZzHh9MtHFAJE9hmhVhCwsoN28J9qYtXvnMrK29AmsjFuay5X6WsgFun8zVfA",
  "key27": "27Sy536kaRE7soJ1DuBj5Umd6LJ1NVj4U2aYu6PJiasrQ9xDyAmaH3nK9fMNAJuya96XYyHrDMtG3jQvM18k243Y",
  "key28": "zxNtqVfSRUWuX9b3XBJysftnCPGGzq8BNpf98UPReSePkt2qXevmJDBZVBozfwBZTY5s59BpduNCvQPdWVfUW86",
  "key29": "YScKkaDrB7zWwwA8Pb3mNr7YhV4GksMaJNwU8np5rj9WnNuFe3DgrKXypeEUn4tMj9RFzksXZ5Kifi9pCJ613JC",
  "key30": "FMB34ZQndfwFsFtRi3gBC2v7zf5Vx9tteHTPZXdqnzuAuoGKxPSuwjZDynmCqay6QSov6hVsRGbLUkEreAjrFQj",
  "key31": "5PexuuWmmxa1bYUYPc6MLL7RnN4QZJmANgwRhJk8aCQbhpduPoEnduP4HffzxGLmLmNyiXVKY7PRwneBiHLPCECB",
  "key32": "53Rn5HYXE44TLCaNNaY3pocYWYVYmLexmNPDB2xK3uJwTcex8e5sMsWETzqpQC41pU8bR1HiW8tXWbVmoRdFutwm"
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
