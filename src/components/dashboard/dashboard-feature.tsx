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
    "5qYN4Fcd97CmR3VByXR9JUtQNAdfub7pEHwc67qLawnqfsoswiCcn9LC3W6yVVHdfSvsMBVGzAwGaTHoDAatNXcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xX5nNYAxRiKmihxLxPrxkgieyXhkZ18qLYugET3fTQLVvjQL5ymrV1EDhVaQYwVEdyvu6St3dDQUrCr7gL5tdUm",
  "key1": "3fHDWP3qLoTDZ1DJzPHgTqbfD1mPGKboTpZuognzuPvbDucPB8A6S9L7AQkgCuiv2UQU3g8ys4NY7cMqFj2pVPup",
  "key2": "3caV528xHwiNEyDaBXevbfREFk1ZENEgMagzdg6iRRd7p2dHyiw5empy8nPkXTMj3bqCF6UkmJ1jogdEWWvx6TSa",
  "key3": "5hmo7K65cD4QHmm6PRSi6C3hNurp2431ZmgWshhd4kCgzttk643hQ4wMePxsot6L1vr4pfYg1A6L4N4uSytAdMiU",
  "key4": "5B5caN18gktigBnZ7sHGqt3szXiuH9GaMLonQyEosBvi84Y5sdGFQYgRHvUbmq96kUt6o2Ae9ViNpzviF9q2y7Lc",
  "key5": "2ekUGHfLS3iArtAs1yu8hktGL7CP24BR2ygjVCSxKc9s1G3VuLQqVT9aEAn9LdJMXvEbpxg3ReSicJiddXp4EauQ",
  "key6": "Gj9k8J9UhPVjNtAN18ZMqQttpQCDPoL9wy4cthjRwfhZsYoMyQcQkcewdgXLVvw3j1cHtPkCpg8iwwJwtkk6wRR",
  "key7": "4mLHtLWnGMfM7EVvnkbPNA16QkjmkPPE4tNUqnEKwdy8GwPTMoBqSNDoCQyRPDTeWWhZSwbJtCFAwgif84eGvbWK",
  "key8": "65cGeiBD3RNtanrGpBUfz8NQRSwmx8NeS4kzZAHzo4R4spGYNHX6Waywbjp2xXpwaMmQa1tKicvKjfGck59mPi6D",
  "key9": "4tZ9zsRPijzBE449KwRvHbhb3CdaKuXM2nciXHWD3kynrU1bev3gXz3iyaxkrsqWh2aap8H5HoK5ed9X5Fwbfx39",
  "key10": "2k8LDwmFNsgACPnmnCdNymjbFcwhSW4UQxkBhbjEbM3XdYrD2xTXKdRPe3B1r9fZ5bLvDqoA2SkW5RoRPNXhQ3LB",
  "key11": "4hK24Ee2P1pULeAxV47E7F6wvXMVf2hmgTqgmhD4azD17NLv9ZuL6pCW27m4pMDX5uMHdcGVtXKyAN7kUnAxopbb",
  "key12": "3UUnzgoj8LQ1Dud1eQWyHqA6n7M51SC6QvM2N45pvgqtrCQX484cpeh5ALdfiXGzjAL9xuLHZKArcERtUXme7hDU",
  "key13": "2hgmaWsRk1AfpK7bjUJEXYiYfqrbUXCTJhoMRh6G4S9vG5hJ1h75d9jf9ciSWTjfCpZg3Hoogrq1wXQu7EC71FGB",
  "key14": "2xotZ8i156nGfG5WpXXMEy2kiWgrDc3iavUodnXvWRYfL2ZeTMTSqpuzGDqJ9CYpWpfPJwG7dNASzd4ii5EZk7H7",
  "key15": "2jVv5wi3K5bXrwWD1V9Sx7TaJtzFCQakZfkYseCeX5QFq24a9ga4EKBUDvqQgXDPa81zhS7WJdxssRtWxrTysvCH",
  "key16": "33TjSA63pSECx4J9YFD6s9vnTwz6MN3CpRN4qgQRuH94NDpYeubVmoV8kkb1y3qnBVKhjemu9qcLZPFxYzkB77Eg",
  "key17": "5G71xUCArdkNFue5yDggX5Mrdu13pvxUvAFTSDpCiVKCXLp3kQa94xPkGG5yN5z1nYEYHx6ttYWjWCDMpWDxh3wp",
  "key18": "4L5FSPu8stjSvgynEhH2JSgVYDQsFmtVHaPM1sUSQhQn2Qcrjh7AUDFE67LxVEeTTdwssQHACi6f3bBQj9FfjsdV",
  "key19": "4whZXSDVc1bYY45giA6Had3nNYbLaXN7jkKFjRDUzRwwnifDfPQuTFSWXK88e3sDy77Dg37EhHmB6PYHzURe5iHa",
  "key20": "3VhMCMeww7e9GaaDNWF19aLZmJkKVPATPnsWNdbmXBEC7A8yXJEhZybo4SGJULsbJXcr5emqRa2TtmWY2xBiPKTJ",
  "key21": "3ZtsdMEdS1YaCKcQm6CNDHUZE3EkYKx4HvkjQoh1YKzqCPPMrDcr4b7cKF6R5GoR9WYq8VXziE8mJhCSmQd16tQX",
  "key22": "4N7FRnmpH7AAqJR8T1jDPseeTFEBjHjr5GSHZ3BuLkjvCkfqrYiN6aKK6pecMpu8ih6q5jBpz1Z4tAzBS9sJni5x",
  "key23": "39fa8HJaTcJt1yyRg9BKcRnRxVjjnJf1Ls7quRjbjiH6Ev5ToaFVppbc7svNvvQ65XoDStcQqMb9MZhR28r33b1w",
  "key24": "2CXkfSqnLjPdqvEdNsz9tHdQ36to3xLtSCWhmGqcbkUTNqesudUbKXDwsanuip6tk8qiMPQoHQ8wKrGtE1NVApnX",
  "key25": "5h6fLZ7riqLereZBHjh3G2eiiha55N2YHQ73VtfxfBXQUqYrNYPw45sr1kxpBkBMchRn5Zwxncn6RWop1ESNNHiK",
  "key26": "2oYgd574XsgbzaKybSybhoWpersaikDUzYwjbCeLhRzEi3wrgEoi9GMgzs9of2ry7p8CKjG5FMkUjUCFTWnNccT6",
  "key27": "3qiwc5xxmBNc66JPrXxw4BzKP54p7ZxFgLXKB9MR77iF6XJP1krtpdVfQzMC2eykNpHkSaeoJGtf35MjdNDVvNVK",
  "key28": "5JcxFELazTQXQNLFbwH9bqqgdRcjGYRw7m3YahKrpRco9XqVXGKVDYbPrM2eRBoMEfDya6M3Msm4rWiFH7Zzje5G",
  "key29": "5af273Y3WB1P8dxySBMRD78EvcQWDENfhKz7QMobcWg6G8aftpBKJue7ffJ1oWWR2EVCTgvjArPBDfs5EAaGebVL",
  "key30": "4HfEQ7EGNVHcTwTpiqcgrKAVQe7Cih9u2C7eE1HearSz71jpMXL1YYCwat3Yd6jZSuEcXkEa67TZf53AgRtdE8b4",
  "key31": "4nuHQtZTpoXTxA3XUabjQwtPf55o2h3KeN8qfpmgE79FT2bZKfRhULEhNe4Uxw6VoLpnaJd9Xz4xaHwiWpFxzr38",
  "key32": "2dABdR3sYqhC2GpQvbQNMJnQ64e86KSu7KQJWDLQjo9tCKz9ZrtkPYVbQjkxmTZF3jjCJeRYuWUA9RftNQpDkvqm",
  "key33": "8qJZHumgSjsiMyJFaijTAWRAWv8bSPRbTTfYdjiVmGTLm3PP9Vyx7pRaWp28Ndz2m62FZwF238RVB4NUxXiqo3e",
  "key34": "5KB8qzSfzAJz1oQUJE9sTDiQSEAQBVnjDfJAczFKV8iT9WcK4j41vVMvnSw49R9gCMtuY3k2qmhVHoFABxuYb1ZS",
  "key35": "2JK4pCRPWjLZYdzrB17NwiSPmQkKGDrgQ4P5V6WHpXSAQXrigteophHydE6cssFDuMxbV5dVs81ZtSuoWDn5tHGe",
  "key36": "5kpjwLQjj1vUfwaQSS3qxZo4FygYD9xs9CAJM7JS5uG4fcVRDSYJ745YyZV4Kb6Y7c14Um9DJ1K5p1JW5GiwCnwP",
  "key37": "4owXAkTxjtd9KD93oRny5RdyRA14UU1cQKH7ZScae98hEabr2d3qMZR4Uinmbcjeh65aRuKDewG5d4Kcenmi84fh",
  "key38": "46haozacMtZirPAqpFhy7fXvqq3eSDvFvCz78ZjmGzLvxBBY8JVA6g9BewB8J9kcCuA3K3Jbma8aLH2fXjZvnW7B"
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
