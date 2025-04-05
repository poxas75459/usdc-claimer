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
    "4B8tfvjGxE77qr1q7Y9x9cCnXbQHXLv12QUBo2S9J4rrnyMRhEnfKa73aKo6wPnYYqXMpVGaaLEkw95D2TL6Y7M3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xAyDyDTy1G1mbkp2anLRR3AippR1jcrGvv2WXzVdtGBcV4bi9DLCPWysu5zyPkL7QmSu8B3FZKeTtTwZh1BvmV7",
  "key1": "4fEouXFUSDyyMr9PQjzXP27iLwGonPUhPBDoAa6ZxfR2Nuzf9dwiWE49msLphTSxNyxQrYg3xp7HmZdZ968RVmKC",
  "key2": "9qFzV5EZLRpYLfhtdLQsQ2njvmXL59VjYjNHT6G3h2um7NZ7AnRnBesd4bDYQhRb1oFfEjYhnVEZWzi5TvfJYE5",
  "key3": "4Uq1CSztghNzah6oHDgNfUzt9k32pYKKUaeaAMVv6YGjLoqyumu7qRXwV62o6wPhaTB36Ny4iyVsHgipFaJEjQN9",
  "key4": "5BSkG2Wp1Rx4AzXDyR55pWRoZGco7wk15wf5w2cnP3SLxgkPVFSHi7UWRY5txbXuxBBXWt5UEkWjS4eXazhnqutL",
  "key5": "22idezoHkqWYGd7tt8frvxZo9aDDd4WCfs8zNPjnh6kfyDm4RaTtEY4rekr2HavXA2YjudUUdcRurLsbZ63QSPYt",
  "key6": "4h6QYb9FeeEzVqZ2bLCqzDvT3EJsATvn3waafm2cU5Vh1s4FtE7mjM9kTNnu7iFLgJoTcZMiUVdberxADBFYphkq",
  "key7": "4FezgZDwuacXEoLWCKiK5WeKcHaNL9kR3ErVEbS9BUmXDWzbBvUVQByDBq9jqigiJZKXuhPkQ5ArGQmwoKzmH4ju",
  "key8": "4cq59E33QUimKV17RkwuSWL1qSH8N17PoitjXBatkFDvikyWKHHYjoArkfoppU1b2ckfVhnUNRTJJi2kYVYh93cH",
  "key9": "3opBggcDMjpto7v2sxViDVCCgKt2ocCdzKCdVg17sg81KawG9B7bzpuQxm2afgKYwvoniAJWj4GUPGpgBrDwhENy",
  "key10": "5ATD1XX8JRzac5MRWbuqhLGPmaVV8F2ZSfh6yi3mXPAgXs9wA8R42qJPXqoxtuSuiNBKLpebJr7Y6Tebhx5XnuLr",
  "key11": "3xmAhJwLr8BG6rYrYcSBAdEVtBmgi3p34Ngd871bcopF9c35U1q1NqLrVNNAQnuHawrwHhfHkZPpKcu7xBcheBsZ",
  "key12": "JQXgohPkU4LwiokCQy37DJPQXGYUuoP3NHnKmpZ7zCXbhVmYsfcY8p3huLMwWDrAUHLwHmRBXULcrzcZa1sBpqQ",
  "key13": "VrQE7oMJ2HfRKYrBQwCnGqf3AC48hUM4jpx6oVCnYaLvuEMLaKbdhoxJDf9die8uhwEm5GrZs29YAac5Bpecp1G",
  "key14": "3oE1bxE7XefPDPpE4bSRiScjZFzTBZ8A6Z5P2M5CXYLqBRoLyVRaSTe7c3XfxYFyW3Urc95943HYdRSCUPHgvBT",
  "key15": "3PmCQFMHLY2wKFqpN3J7tdt16bddKhwERnAEGpSk8dTS56fFeEQuXsu1pCK8DUCzyPiEyXwNMpuBqbT58a13jLmv",
  "key16": "2gDSwZf5RAWZEDBppU75eAapLpPMTroRcZfszoLPkCr1jpGhrJUn3a9ob9FADAi3N7tJ82yF71RHcxkMWQX7wUvK",
  "key17": "3cLQwWGYagpQVLp2ve4f6t1G7MXYSB6RX78E4o9AHB7uvaYgcnX1aPNmZ5D8Knc9DdM7pX58zxQWHkm4nxcfGxce",
  "key18": "2sQ9p1hGTGPLUB6wW5nDkhHVtYETomSetGJyXAyP9rxddx7GubGmySzw89Ca7ZXCs9JqvkJL1rVWXFk8cszf2bJQ",
  "key19": "2cHr29CsnBHSDmEvXXBeXkKfPatML9biTmdRHqRUSWavpndCkrcDsFuyQsh3gzk7DRjQoHjoPk8dbfeY3FQEwd4f",
  "key20": "4hK4SefouQ8vPxAWPdiwxb8TNPsBVsb2KxKCzWNUmFPFhHBdPXtwikJTMpnKvTjPdjraa2BnBgyuZqtUmmBPErxx",
  "key21": "58jGgHgbMVPzCBhB2LnM2W2gVSYDgecrcuGZWGp5NooXASV94aYdwq3b85XwR6hrgX4cKHGp8Pfaydqqa4FbjPUh",
  "key22": "C4WLreAzmEBFsbuVKebecBEQpdc96mfAtQQsHN5oyKnr9kgoVFgoGjSNkbvduSLaoDAJQiQgAJRt48ih7S7JRUT",
  "key23": "8mGSdf4Mk5v7Zek9NjMxyxLjeBhWCNszxz5BkW49ByM8nWsnYCf37Ucd1TaZEbE7ZbcmSoANDV2C2tSW34ztLfi",
  "key24": "3v8jxRoN9H8qT2JXSBEeAzoXR7tCP1qTSxELdpLcAbpWx7CXUYT6SqnehuAS4Gd3Cc6qSYRNaj1reqs4jnbPSmfd",
  "key25": "4opWozFbsV3UTCwDF85tfoDJfWgGkXWWRY8649FkuvQDk4yVAzwuhgQf3njbBtyYb4wBQEnsnExxfthi2zrWyJte",
  "key26": "5i41D5ActoWoUvzDCyM9V2PsZpJ1Yyc2qCrFAnR9PD8dScBp2xFEEiQFRAugtw5ZRvb11N9YiVsfQa21SpQJGppz",
  "key27": "7ZojXkPTvaHogjvPDX3HWoop9c6spKaFoDVGeF1mqA7QXABf4AJ9mRB6pSsEJYhK92uGJac71UvaxTNV85bedGF",
  "key28": "4jJDHYPnkuYkpuvUufxQX2PKgGHxfahx7mgn49z3s3nVNDKDZiNp8TuTdSJRtyFGwCv8VTmo1GeRBRjgNpAjpC5a",
  "key29": "5nAuJCJzhUbLWsAx47BBHRzJHTNGfa8tWwLnzmH9hChL83D5C7rq948zZnTKrUmWWBgfyzGrhPdknSmP8SQHD8ea",
  "key30": "4K31nh6QmzRQutLwgwacmnp2tQUY1rCsCkEPep3x7MGrnSqzK9LaFkSD58sajqgN8rh3Un2TfPFHDwW4Thj36n5H",
  "key31": "2BGki3NPe1BiBoMLLyLxtxWi8KgvaYB9H13gHj6EzGcd5boKeXmfx5s2oeN4hsmusg3FR2Pwzpa982pxBuAfu3o1",
  "key32": "kKXm9JVx1VFQXqPCKryA6UqocxL75rAFnv9bSbu3xQuiUzZyt5VE15R7YbKLrGn6TJACmRnkWhb23JJirMxsT3Y",
  "key33": "4xUvti2z3ZqezkxAYCUPbcUJYxuHSVMAH2ZHurvdoBhPQmZa1fiiTizAzJ9e8eJ84wFFYxPe9uGnPp8ZFUKUcquj",
  "key34": "53VxeiDSgacgdBk7PSm17nDh9vxEQUMcyRJU9jDZBq2oejFMJ776khUFsHeEQWmyb4X8q2tgmYA8nuXxbZfJaSeh",
  "key35": "2iscwsp7nNby1exArtiZQomwrTkAnzSqHBLaBkCajv66inmBaZkyCxyWG6Wotj11jD2Q6jWds6biZRbg3FNktEUh",
  "key36": "3oQPdFXRCv6m6tAqHxFDd2ydT5ttv5BMTq3KD4LvVufov7bAwEPD1D3m8uMn5LpigRWQmErhUb1ijG4KfTE8QmpE"
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
