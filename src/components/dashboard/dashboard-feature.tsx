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
    "2wQawsDjhvMzb5CfnDS4jCDsKwxD8qJpC7UJRvjSNLAgvEj1d74hY3f9QTC48ZTESXXfWHjTkMDhBMds4zJXRj3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XpucD6Mi4ASHbFdb5hyJF2fq79vcskpVSubaoPTAWkjneQEWe1LKng4nktnkocsNRshrTmD89RK8uz7c5i4i58R",
  "key1": "DUtJKyBqvFS4WynRyQHFBMr3Afg6L6Udszi6MmLNKJPWzj6MDeosMbRJwDv2gEMC3xJmKAxB2Ec6AwSXaPcap6y",
  "key2": "5dBQz9ihamRRFbxAg3FpMHNG5WdCqwaSTH1yUSC54dEuqXH7u4UkFS9GPP5GMQmd8faoTJLHLFnkA8X3sMzDfWcv",
  "key3": "4bQvW8NxuiRg5oMaq7tukbnbMC4mhThgNkE6yBbwJTXRa4et9oES6yNAFXi1cW5RF6YRbci9QeV2LbciwwNGGbb1",
  "key4": "3MGE38ttigMDbRQXNV7u4deop2MyKKoosgYk1kvFaxFTd4TWJNc8KP3PGnoNEkCmBKpbxwzHTtiQoyicnUfWY8qf",
  "key5": "5hy1u9U7tt4kc6dgAMqggE5VoAXLaXWA1k541yGojw86GtHfww9gxusNnifAWoJh8M34N4T14pKsHMMepdMHowL1",
  "key6": "3NmVrhS92kntaY6Q3WdYFr8y5vTtXH61VRDr15QX87TvtdSmZsfMMw4VmWRsbktUNNhVP3dWV7H2P17mJVW3hFzL",
  "key7": "1jPSijC6VCfX717kPhknrqfUhcNukDpcM5ff9GbkLUGjiSr66cJqqrKQXv6rG56t3sTBo9eZ8quXwgWcYGRViWX",
  "key8": "Rdh3wyipoRp46n986CY9Jm2VUSehA9sxW6QCjz3VUo1SmzP7grS4XesN7joRHhwCijuac26sR2kb6XzYanjA7eS",
  "key9": "3YsdGpQQvqepS7YicNtDCSzjeFNfuWYfipEdZ9DRa63DdSxtCp3ZEq6V3NhknFcNva1hnfjT6p3VcrTsBffZfjWU",
  "key10": "4vr8DaoN7Se5JyAMZuHXu3SJmCTgBWV2EwTUVcukMmnLr8kmH2FKXKTfsE6q229TghMDPm2s55e9bEKCapAyUUcq",
  "key11": "4VhbhrMzYbzA4HLVkU9QeA6yQEFUMvgnHUjchGwFkctJYg5Wm4mZiYLk8H9apP9dqqERsy8ErKK2zf6RfA4LtqMw",
  "key12": "9yzXFYz9ua7FfKJsoyXcTjdBAwCjNxuegUvdZqqKpBQUooVgq4LANGYpTVZHE6rQEsRPVoXYoEsmkHHUWVZyJGW",
  "key13": "4ahAGN1TvWQPgk8BPdPJSYmTHiDJBreHYiKuzyfCKj6KUtex6jPoaWMpBQv2e7oB4B9Fp2YKV686fbQGEgYVAK7H",
  "key14": "51vNtmZXMuKGutPuzWfwQegYtVbkJjbqgEc9oFHvHqSrFqyQ1JhWZaH1w5bBF7jsUZVDGbVyj8wzmespyU8yoUfx",
  "key15": "4749EZJpT3XAVuiyR9Dgn2R7JEEvVnbbS1ArPGR62YbJk5NNrFX7fcvDbT9VLs3DAJ4wuq2SYXMUeUsKm8FzxTiR",
  "key16": "7TtaTAdScCsVJtvAJs946EhyP5XgmGc713beZcqpKKs5LQ1H7VzHqhb6qTJKfKXXk2gjpBV5JMY99y2WVhwN5FV",
  "key17": "9T95S5NP57oMRqMMq6dev4ccg6kEhDNqfwKesCy7E4opfeaJ333DedsoPopJDh28pd5Ro9JqbLJ5r2J6gGjUJ9z",
  "key18": "33s8mrHfGgbAkF9mdNdi6ayEEwnMwkcRyNFw5oKeiRxu3nZekHi57HC4RyBjyAT1JBHRJubPhfefirWvQi1sBunB",
  "key19": "iGK4R8VnQCkjdFCdaXWJ8NiygPAdVpE4bo6YdFkeEp3B6pU1bMUJpB22nZHFUmUebtWjNAEUbiXVSp5edDFWRKe",
  "key20": "3TAevxAqT2rYEfUezTU3sacCBrubkRVNGtMZq7QgXm1ZXMgwmF4khA6a6JcJQGvfob9eSXvGUxtgY6WAbHYtQvae",
  "key21": "3XQKTUCvhSF2nLx5VyYpo7S3xRFjuk378QUtmGRtnwEfN9XAsoWFkZawjEo4ciE4G9Bten253qrWyCFBbexq696k",
  "key22": "4oevhmuYfW5iJ8cmfUFGp8R3eioTuqD2KH8zxpzZZGhfvib6aCSSqF7yeQVLGhH8mjuQtbxei12Qb4SPdaH5fVux",
  "key23": "4cEiwFR6pzyMoyRDr7Jg5Djh7z438r2mvup1uq1UDL7EpGRCNZP8GcjxxWQfFKETXmBHVXtm4SJHgw7CtWmkP8mJ",
  "key24": "3AtD2P7aBfK5gEhzuB47mChu1Ny8VyHqqrHTnQWkhGnNytpGMJtJGmagiCBWs62JyuaDMRiZHn51bmVNQu1y2cPE",
  "key25": "3d2mGRcsjiCq9ZNPqm6N7t6akKD9R9TEVCUHJ6tyf8F7xMimyKpUAyQ6dyNKWhc99UVe49vxuzPG9VFS6DD2xaKT",
  "key26": "2y7zATyk7hogb91WASPTMrJwb9kJPVntnzipUERVA5rzS2M99FfScW2KuYABhQFB1DMa3cjCYnasYE2k7iLc3YhS",
  "key27": "4tHcRf6PpRAHmGyqL5K9hmqNpYt3FpcN5C4cwsFBfqgnJAQns4Aq1M2TiUaJKUm8PaxegPhRZbyT3QBYegpKfHbL",
  "key28": "4gaf65KxrpWvurjWMbyyey3a4UxD1cVj7AanP5DRAAN6qeJ8ASVVkHvfD2BcbtazfY1URW97rVb72mMfoPpRF68h",
  "key29": "kA3NUPjbnvTFN8NXioTb45aHyiceJ6q2ExBz9V2qbUgcW8FMURSPYFmLppa5pnujfXWBjvPfuDMYdUB4Z3DvbJq",
  "key30": "3i3DbrAcadwqpT7NqbgZR3Jzcfw5dpR7TxL6X1qHtCLRDpmru4be8AmyKgMeJWsXxqmcMZ9zeZwWqZSB5FvGc2Dx",
  "key31": "5ahiL5ZPbhBLVtDzVLDFPw1nPASRA487z39LZm8Vsucgb4STMkVVNjBDnRkShv9HhSGMvzdcT4uvnNgCanifMxHx",
  "key32": "58yKaHktcDbhU5U9ZAkwokdMy7P5UBun1T8dphRhqcDqRoeDdfGNXoYfMNnfFGezFvrFFmC1893mBXKVeJpQJQQE",
  "key33": "JsmuoMs1DXkH4zjoitt6cdei6u3A5Xif6tFpv8jjo7XigUu2b61eAY8WZxCzZGX33X5vG25aiDXagj7XFtCTirX",
  "key34": "5TeNYkK3SenjQXtVBD3Uig8cKtQH3RcxXGZrbSNvAMBTeLnwBBRat2kZKHMYNEKudBmX1VSjJRZhrogcoyqC7LP7",
  "key35": "4otqA2uFHjBWVrT36pwo1jtn3A3sZDB6canF3mcyLMCnWo9ZPmtd1usmzeugG4VXHZAhAryhP53Y36HDuz5do2aJ",
  "key36": "CTjPRKgNr3KD9TLuPinU4vK7JXjxyzd2H82yQN8uwxHfBAzoZMugRPQKnVXdW1QtiB8iYWGxeBgyLqXYdwyaVXd",
  "key37": "7aJydRA7mWBr1cWjtb25zBLFCU9j16viiwJoT3DCiVRrLo5epHWYnR1Z8e7nqhHbgYfrYpPdNekc11XuywiiYrQ",
  "key38": "56BY4s1kNLHSYQQFBEGU6nMFHX5CzZRsq5KVRVfs31aUyVYcKLynQyfcP8RQC2pbEYHsHakdsLkiHaGV7q2gfsei",
  "key39": "ipCMJ26KvnsxC9HrybAS9QquVPWz9ZRuN9LcwTfPe85gGMGmXZtHv81nnabnkQ7upvWu1pppZvpXeRhusLX9HfL",
  "key40": "4taVzguw7nZr3RzhXpEhMR6iKFZQYcjDjRYddKsnVXNDdNvGkDKNdN5tWty3geDvwqZG1ocsig3mHLu1WHYn3joN",
  "key41": "53jakqaRHYq4hrQAq15iQHMpz9yetz2XnmjaHJRXU9Zgdny3rTRMLgt3GmGJ4kYcc6Czd9BUCqyUunSnDUuEWSXh",
  "key42": "2eqdvNRusTWRk3EpoWRvF8feUSv6cQxaD5AJe3xLYY4hQyqLcNPv4hVZ9iwD58wFxDGKRD8EL1rFvL6YLPTvRh13",
  "key43": "4hWd95tQTgoiMu4TeRACBwxGKH7LX5TMFwMM7vLWhKMNuYuz7aynTgaZAWNYqkRqDSKiiF58HTRMJWCi179ZZQKM",
  "key44": "4bBNW1Hq1u3gDhodV6mNJxCrdjjGYyTNoVpx55XBX5T1FqDhRZqByseFg4Lk7QPHCCWPCLGYo7HhuD84NEgCjsXC",
  "key45": "c9enXnHKJU68Q8E7EQKnAfFRFiwv26FtQc4fB9NNWqgTFesgneVYAfdeepYeQCGYiLLLXoqcx7qZqGYFtnYH685"
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
