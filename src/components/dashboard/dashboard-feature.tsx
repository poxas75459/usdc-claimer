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
    "eFr2YEVMSDi8croM6gvKCG3WtDAVRaAeH4CM7UBuMZm3njfCnPwijRrW221tCRpUimJGxqaCo6yj5DUm2JaXy2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cypPdYtnmTjCo4Q8F4g5RdUXVyrDge9U6w6f5MB4SdycPg49BSUkNzBxQ5Yh3NRdnPRe9jjucbFZXQ2Se2L1mLs",
  "key1": "4CYFx6GcAcdJa5zc7pQ3frtnMXjLKtHiE7XRV618CwbSCGJrbUGBzzXNdzWkpE2ke9FcvZaMQVVp1yRnDWNLUkuX",
  "key2": "4Tuyqj2rQHm9K2ya11z7JzU3pcVXMaF5PYr7qh3MG9fsKCiKZMTNoBpTBj1ZQEqd4bEoD7rPgzMnyxk6RiTUXycq",
  "key3": "5XFjFK5FcVtemo6UqaEMa8zPU7ia2AFbbLw8n2tvYKUPE2DKjXiFyvoryGuPsFmfsjtCaNY6XnNN3YU9TeWc4tDG",
  "key4": "bujvVNTsBVFirsE7vRaFPQmBMcvfnzYYh8xdsTjPoLHFU4djKLS9DkUXoyJN3dDnuYz1w849SB6awKzSHxqL2B5",
  "key5": "3VFBxMSkyD1LncJVL9vXrghDNQwF321TE5meSTeT3o5vJwQye4YYNbHA1vTC4J8XaJhhBYbU5k76WkRM9WYQRcHM",
  "key6": "2LifAaRT1QM9WNALhxTxuWjc7SYGzjFmGMjK6YdR5sqgEQdTPyXi3ZsqR8PNpdGULPTfDbuKNobb1g8bxWAduHuG",
  "key7": "cuEdMQ2KCH9obatk9xU2khUvH2NBur1A5vr9EKgKbZYpNGxQ45ioyWEpyUqezsFKfYqHgtCXkiqPYr5sFCwjTR9",
  "key8": "4mQnVjA2ieFNZuoyc9Lofd1pxYGkYpAnTjZ3TyeKdy5wSdWw2o1gzUhEMEbG73wsdWie6oRQEBcCyJSAzxBgSbe8",
  "key9": "5BmY1Hzz7t9sxhccJPSyYcWuxwAMKbo91GUWnks44JyED7utRD4ENav6HWLJAdVrVBsjDpQ2Mwweh4dseJgVHTcp",
  "key10": "5Le2so5iwd9fGqGit42tDKi9euY4AfLnGXapL5C4CyxQEiwBmMs2wFnTNuzzE6fTCPmJ6dRyQYtDH2xe9wPSQ66",
  "key11": "5PRR3XWzTaELEkpM6xq7xzXWKQ9Cdmz8KZJ11YKmWQTjZjPCRXis1PZ1BJd6GtGaUvqPDkH1MSzQW5e7Styav47k",
  "key12": "2LzN8PgMXjyXKCyYS5Mne41ATnTmPFwmAuaJcZB63pUo5upxUj3m5t1N8vLyV8nn64m2kw7prng9ZF1afrY95eMu",
  "key13": "4fUVAvX5P8ZaqkEfTjARaWg8M1oXvEBYwEfBjmKRTPbkKyNTRKNCp3NZMExQ9TxcZj5oj6xmJneT5MfjD6LsidbP",
  "key14": "5xj2J7Nz9acbNaQwM4buDJUgb4Z5mMhvSWZdXEyE7Z4aZUPLQuQkj1b5AqGeTMBYRGJXWsWxE32chvhiJBY2NqDw",
  "key15": "61BrU1xayrFhsai8u34WoE93H6ToXRrZ4Vv5mkcuQf32YGswiS79Zeh4r3rhnFqJF5haYyXJ7xpYzeWGxYENaEXU",
  "key16": "3Pm3aNomRAZwAWhJ9nKYh2syY2FCoBgf7Tgxt6w5k2hm8PZTYkKDfvR6xZBi7yYKm7cdXEPD4KD4ccgxMJvF4Jag",
  "key17": "4eWqbbJUnBAzPaPYmBynjCCCZRs8xeDn5cibHtdGhHUaqsQT5yYkA6yxqTDT1pQb2zMwKmLjNhQkgSe43ueHGA27",
  "key18": "V3o5f9BxdgE5Sui23YyciKkLYdXCszy7ctcYvycbe3VTx1h5KfpiVq6xg3SMVqafmvXpk9BSWaD5V8tVCZKAgMi",
  "key19": "5ccpjPEorvY38XxtmofXtkuopzM3kYfA4SATBhLMyL3zpPfSBVqSTSNvEAK1pe4DmiqNLYB7u1ohq7rjUyujN6uw",
  "key20": "3s6MaYGHGDvPf9QrZCmLRQYMPShJBiKLpYASvNSKt3KfUWfZwsLiZH2TFhX9K9pTqBcJ7HhAUSnNv2J2u1chmW1X",
  "key21": "374PjLnqfrMUz9WqbRzxpLNJEMZp7RKtUT26RQ8VjiLe3Jh7i1x8g6BMHwq6EpRiU1QCohJoNXhHFkjmatx839yL",
  "key22": "y2RzNjbdAxQKt862rxKGqvAAGWivmLGcx49MxnGsyQ9LXGgB9ss8tBVAmWo3vb6JoiGrNDor8Y51cSChcCuGUu4",
  "key23": "5KGE1kPk97hKxYuQgpQogNAUS8Jw85vY4S4rSUL2N1VxndSdqxRup1FTkNYjQiPDRyZPE2F4hyXFDeCRzr4fMX4y",
  "key24": "21QxnXWauQaXnENSCEQ6Pov1zjtZzuEtvDd9VH7v4bDdzqYDkrgR92LbHUn2kiWnTqX3onJma97tN4scTD1Hxaix",
  "key25": "X4BfFKYJMcVxTPEyjrd49gmP9dppmjaPyq2bdpumcbB1eQSkTz2TNpB1DF8uU23JDBBxDLnLKV9iMxw8tbnR7Fk",
  "key26": "5jYtthxfRec629bvNc61qYaPzZ99vwS7xrAVTDCzk1LTxbcA1sorvEQoCruQMiT6Tz6mnS4FMKFGhqyYNcYutHtv",
  "key27": "3sB4Mw7UUq8P8pV3tAeNzehBn8cGQFHXoJyV6p2ockuNDMs2rFTz61KhYtZR2NfcT1q339Kao8k7GoWUySXoPc2C",
  "key28": "4GXXHN6maM4EwpjxtXyijN3YvHTFqjFEcF1pX2Ygt6RR4EFTvEL9W8zR6qBu6g5CRt8JrjkFPghi4NtUyaWGAbxe",
  "key29": "4N8ejCF3oTQf2GguUuEmaq7KJaC3BBz3YZ7LGnuaKjyqornv27haB4rM9fd37EcFQvmxYFES2V4bt57thaHhTdSZ",
  "key30": "2XTsw2UBBAvXJ8yvLTRsDAktQCUqXnUxWF22mJ5dn1tqkcAJRWeVE31wavF9taLhMMGKGQnbEtgdR1R2TbdyfXt7",
  "key31": "5wzpArNM9iYdszcAVT1rRJ9ZR5gjnGcLtisRBdMfNyjUPHs7THuVkCywPkkiJJC5qH9rk6dh5xq6LocRE39iTrjG",
  "key32": "5gLgGF5oKCvnMum3bTNC51SW3A9c1c4Upc9A6kxAQbKw9CNWEjc6tqd88iKg2sY89vyoApKGGNjfFt31Lf5hqQGc",
  "key33": "4AFu3ijHLGHaFBUUVK3wsUTntFKLoR4hWdZBBFpe5g2aXxPor4CBheQtmzK1DGuTmFLPUcQVndSBvEhCRicrrJKY",
  "key34": "2AFPuC4hHQ2yFsX9PQi2gZb8gk99e19D1n7MtV1JrJyU9PjAJdWFwDsLGZTS9xuSQKqjs5SZrhz8S7rE5oaRowed",
  "key35": "wukAn6kt6coiMY3k4qCye4iKUqZRHgWKhXLibov9BwWmzYszdUGerW6ZDiEyoEZ6jHVjKfooDkWf7thsQNgkoYa",
  "key36": "BbXQf91Q7XmYjfPVqRY3jSDZ7PoMQBWDdHi6LXhbdg1M8eNYZHLCRyGWERdcFqBGgugMyHoHZggpFbbBEK9ur7B",
  "key37": "352xeb6bSpJFb16UBhNTswNRqBki1wc5R7THEQWvvbhSdtFpcD5fqkAbRSCynX4B7J1CXkixbTwWsoNKs4hhzxjx",
  "key38": "3arihujubR6bZGTGMu4dH4Czt3dLc3avVFNmEHbaeLkn3BViwNZx2JryPPmFDf2LEfR8K6LBux9P7tDQKtoM3hZ6",
  "key39": "3EN9HDoePx8FdniLGy9tbFzMme5UaaDPXFKd63VK6Wtbr3pi6zf44Z3eboWHX4xB84cwjud9EPgjH1RULbZXvbi9",
  "key40": "5n5JD45EESFQdcpmP9opjm6jmqLycbXZW1x8H1N63SAWYzBaVdc4KkMY8Qb8JnnUGESvLxkkhuVtyt7uhzoMu3Lc",
  "key41": "4ik9Ce2FacwqDdzQ1US1QjvyRAUFVq79RBHRHTBPaLu4iG4pgueUw9RzqTa2jVK4ydADEpErz8K1uEqWbJGMe4Rg"
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
