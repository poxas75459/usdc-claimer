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
    "4aTbFjEcKMx7xVRZzRE3VYaVfhN43vfRtvgognQqsQprMZdZ1kY298G7uJPh6ooBV675LF2Nmtj71VgjNDQedAhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t8nXBEWtftSfsda4TfU1tY8PrRizVVdQgtGai57Ydd1BxfG3WEm7vkirhdbhAKuhuDXNjjn1mR3r2QjmH2yhL2r",
  "key1": "WvmbJuZSwC2cg6NVJp7TaacKiPHxnggiVNB7fSNYq2hRMT69emCEWvnePxkpjYYSbirXXhpzAm1R77kL53o5QH2",
  "key2": "2USpp93f1wtfeCFXhLfArK7L26CgwewhiAbtj7pHzxdxhLGqgqC8QBUPG6tVzgnhBTcEH9F6Xbmvmv1WdzF7WmMS",
  "key3": "3RWXztC9nYULmc7mavtcDNmUKTbedEYzV6qUdZJZEeccR6Tm5pyVgkAKkPu4vXeu8tocNBCBWtKoaQNSNMYktHRz",
  "key4": "2H5krckVkTCu777U1zHsEjgNHvmKECUZ6vC99Gni7WW5kuA46vczNhZHjayQh4HVyropP1XFLRqWqFFVX4HiiVGB",
  "key5": "4aUrszBGLTZS1vRBGyntVdMUfim4uT9EyiAyjibD3XUx22CJQKvZiHgzX6BVuDn1HTPyqv6rkzm6MTTtc9DXwLEm",
  "key6": "HyrYr9434n17mwNLWPiACBZnZz4GGaGsmvq6x4D6uAdMcgL4PrHLNKRuFjoN2k5EhzzgFig3KU24MgwRP22zwcv",
  "key7": "gGaB3RqmUDFpN628qmU1tYKVoot81XCo5116y6dUTU95asM1JoQummCYWyDwgrVmN5XAPAjLXS6WWxGuU4Maoog",
  "key8": "3J3pZMKxjbPDHaFcuY3xTBMZwGjD4FXF3eEqfwukdezsLE7w4qui3UZtoQNyDSzs6wwMPfBCiM4BpmuDiLNpmKH5",
  "key9": "2Z96XUiTv9RCgEDXPhuoAYUC2Hz9D7MeWiVrMc8aau16TmCxEZGDxthTkVhGjK1Qkk2NqMUWmEEbaJmw9Dkhrmpb",
  "key10": "TwvbFAx5cRuCsdr83MaDURof5BogQJswWez56Y1WnnHsCCrt2BthLNPW4mFEY8isSzktNsSG6DZ4HFZaxfNp7eb",
  "key11": "5bkvazgxVz4KzFPxXXa7JALvPYUheidU1c2yYYkMFsVGh7ahfdmkXbNwTaFsmW9m8yBcJGP1ZonYjeFvY6xTQ2uz",
  "key12": "4upWyvrf7LcpQaheBpzeSRf5UZ4Cnks55RbNrt2Pwr6Dxxg8gtF8PuUZFFf5Aia8e4XVg8LrYCjUu772rYRkfti2",
  "key13": "4R1RwwHqX5qeD7mc4g79nitHVCJiJd9ZknLmhKkwt3Rrns4n3feTPZTybfPRiddXQgxEpuVNsnrmtNJaEtycLSpi",
  "key14": "3DpWTe66PbURgXy8nA9a95vEXSWf1nXde6XeuuK8m94Zf6reskKQCCw1Prni879Edo69XE6UDxB98yP9pefrdwnD",
  "key15": "4AbUs64p7a3uqS7n2b8cEBFopez8tqz4A71fcMHZetNkNmU1FueexY1pDDnQCbdtCHfiBvbs7uUKbd7VpEfN8TwS",
  "key16": "3HqypbjgfSsDsYVxETWqbGYSkX1nAr459nS4iuVEqcw4jjJEDoXkCkGGZ6VTo8fu8Pqb3hXjzASFmn4HtbLKHSCP",
  "key17": "5FGP27GQYKMeduqA55EktqCMXtmTS1dDeVRWLaz3nZLLTxxSE1JamP2KNxjYTeHb2ihcMrP19YuFxuY6Ah4gJpfo",
  "key18": "NqHtwcGZiwwVd87rrXGxAJgrLr3eXQnLKVdPT2Db8wCzWAaGdyeTTMKihRHrNGj8Go3m6LiWs3nJQsVXKJpfJ2F",
  "key19": "3P756266NUgKRayCzVwR95EjgMUdaqk8iTYtnKEn3EKXpxEiFKW3G9RvdjMkHvMSZQR4TtRXxirJEywuAisxbGcs",
  "key20": "3PY1UbPKu1qCjdKVHmLYHRgKDmyCgyYMn9xi3QSi43CtemYbWsr98ExX3jvdFo4tDTo88Aj4DCkxVbcA96PmELGk",
  "key21": "hUFTBPEwZmqs3mvved5zuqpKxPHa86ETQdRNBwP4VPZ3SVHZ31yberF6urBARngidJbUJWQY3W3hGTaZK7e2tnn",
  "key22": "pp35tUgRoaDL7NVJHhAA9ptvt5YCXQa39DpLEn1T7Ah1nZe8s3PRiQqEY9pWF1A3fMuwF8TKLcxttKLukwkdYTC",
  "key23": "sLDWSar2AkxwngSQgEpR8wGLXBMnhwvVg3Ckzzr8hqFghr5oLU2ZRRgvnFUFBHTGzkgDEXXSjGuCq4ntCdLnEms",
  "key24": "RA7BtoEyPNDstjRg34aLcgCaP2Gj5okJNJXrVbihjZyfCn6ndHwx1ipMgGxXmgjXJ939pGvFWodS3nTmwvXDJxf",
  "key25": "4cYSXuYQfGe9HDtFbZDkXmEeaPFgv971iXmxG8p56JZptu89Ugr8ZEVChF3AwKiavqvNxG7soxZqUnrhRLwLS5td",
  "key26": "3vHvYdbjvp7XpgQaAZNCBuzDruyD5dpUqqHCjroa2H1CPTM77NdMNDfozcfER2Cx1G2MPb2DXjksTYP2KTWGBZCu",
  "key27": "5wZR8K3yMvZVuhCrmGvjPbbbn45SNgwFrrkPJXfnFT2jmX322LUSfU1H3mPZQmkhDNpjhZneSURYGe63ec5kbbYg",
  "key28": "4qTCRtzmK5sndwR87uenYr3G5gRcrnAFceGRbM4d1U48xDKiuAQ4UuazUvrwhnw6DYjHreb116dc9drnA3VsHRki",
  "key29": "5aiFvGtbNNFuDe8eMmae42g3fVpijyVCYvgcT1fVVsJCrFW6jKrn4zYpDsULae1Jv1yhCEqzw4yR6zPgEipLmncG",
  "key30": "4oP3Z3bMZcNFwPHv1Tp78398WoakTS9Gpc26m9XsPHjiUUoQAcJHhepwu93xciqVf59jax5XupQY7u73qhbE2vFo",
  "key31": "3MZPhLgu1JjucycV5D6iCgGcbuV8r8y7cHsbVXh4yP2SbZztRnZDqzHw2wVATP9uzdxXBd8wBsBgi4gpoHTep2Wy",
  "key32": "3EAgDv1AbVpDEf4eG8CVtnRkaexoscXEw5YB9rbgqcTyLE1ogkHG138Qyv5EmiEkELNQX53RyxWoTaafvKcLRqcW",
  "key33": "3uTqazNUTsFDce1NciACiWjpJcpgpm5EkgpuEMPRbPsWhGGvgaooV8obdHVxkizugLnyS9wDa2J9DYVnMxwo39RW",
  "key34": "29XZpExfrzJqLYztQCcktyaqmYJ5WJvUCzNa8QWGugR2N8zFWCsDnKTNjQA65G9bnZtvotcQGQUeokJNBbD7cgSU",
  "key35": "4FJc8YYb98YH8jMmpCRmVaknH9ZP6tZ3g6vZF1kQ968Vp7QnhxzTKk9XPKmVid5BGKYN7pnr9CJ3tSnoq2ay2zDf",
  "key36": "4vuiN8gLq8fk6FWyjj9N9Bp6QegCVMZjair9PV5J85s2RPgMHAj4n7J5zY17wLye2ZMLXJmGKVXfNw5XAcnXFLvn",
  "key37": "4LgdZXYJFM1ARmd8wwiuC15NnowGDQPCGHh2ffRaiiDM1w21dp1sMQ1YypJhF3vFuBhmLEw9fnEsSiQySLJMtGD4",
  "key38": "wNzZ2NhQvaY6oiikd9XFa6KjiXx4jCTxSkSLcWSPyxqGCvmDWBVJdPtci99PfZnBoRKf6Qfs5FMdczakmJEzC3b",
  "key39": "5esUDEMr5CinxRnRynDsi8wp6thMvSeokXdha3VjJQBybGCMis7gDRa82QxX7o7CyDdJKGSzpFZY2v3jgoEs7sss",
  "key40": "4SsWv2xgnTbmABkLep3vwidernJ15eEDXag1KziW2Yxdt5bYjZcDbtYfAgNvbB6WuDebaVM24M9VFHWX1ujwRE8g",
  "key41": "3YVxWJ7C4oq8LufBoK9BUAMCuvaSHtRp15cJmU5XM4jrDrLUMqi6GzVvsArMHHoRwTmHk15HrfpHXHpnoXPcCbHq",
  "key42": "31eCZRmbnyxUQYXUvx3FZAmY6dpNNrtNk377Nt6tWhrVZqpnR8MF7h3ewNtmgzbNDzojAQBx7gbbqYVySH8x6Xfa",
  "key43": "51xn153a1LjvkwCfzRcWd7LAjCzEnzKUgYsisouLarWfp9BQFrHmtMieZGKqL4dwq8n9qTthjkgcVPCMutGPGC24",
  "key44": "4zdVEqCkVFaEtkdcufMCsW2mpAKUPu7ePcCuqUsLAdGcrbUDofM2F4CJn8QzVqmm8CUFLVeBbVj5rmuEZNzAqdZq"
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
