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
    "AVseUpcmHsihaidc1YMQqWHGa5iXSt6tSqodcFgax2yvQdDjBTer6YhnBrKCnniMeKceZdGrXMWhZVXxbx7wdef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wMC5bzdUPGcMDx6HJuZYNmXaztCX6MgtLYQ6QMojqJmUT8Vx7AJseevC2Wap6NrR1t6kBK1E8h73vnAsBoRP7FW",
  "key1": "iJpiCyX5pFBwpPV94AXkX1kMCLVW8YrqkSvGsHMapGmLmQnnUFCifum6bKS8vt5oSPNoBZUWdDF7obtHxHmduxj",
  "key2": "4PCK8Saiih7tGUKUNUw828Hj2W3bXdQsP1heq9cNDGUfUGDw8q64mN6dFy7e5ELJPxVRxCqX5AfQRHsrjzJc37y4",
  "key3": "3NL2jbV4M3rYFAE7uWfKPZxbPqV239EViXnJ7yMK6DMptZF7juguZvHeDuCS5VK1rfNiXsxwXT7y8PYBQYiamzAh",
  "key4": "4ZA4cD6srgfvrazzQ2A6LJMWJJZ8fbj3Eq7EWTVdB8ySvQcKdtvUYdnHN5wxyfs4BQTCcnnZWVnYC11kdn6ErjrH",
  "key5": "2U2TPKzSwc4kMcfPfaZB32pB3CA3nxjQhzVhZEqw9F59yHU1RthV5QHcNYKuFhbcMeigpZzYrTvq1cQNJ8UmC964",
  "key6": "5VqShCqnbAXzuDW3Fa1qpcCNcCmyV6XxqHAEp3Ase7CNKCG966RauQyRRhW4ZQdT6HUBaT8Jnhzxbw3kkgp5JrbS",
  "key7": "cGJAfouStv4EArcXTyCwNqrREJVMa9gy4UghwiBUmWDJHPXaG8beWXUkvmn24FXrrQNkcVsV4fxYGefpRQAhVf9",
  "key8": "21VJARMEfHNpuA1pjrcmGsqxhExp6mDPg1Q1Wfkgp7GQepHsMUk1dXeQKP3JnSQdjDpdPfZomhkxnAe7rUq87nfF",
  "key9": "49YuAAU3Aes3xAN1eJWuU2E1K8m8rnpQjan14JW8ihjokPw9izHhvQhy3Li8QffbUgLCXDGoHmZixjnvDXD1wGRJ",
  "key10": "5iwxUcH36YcRPeC2rsKAj42EhydCUspoNM8sSs5cYr7ExtuLETivXjG6xcqLY9P7UXM6GqemRSSaPVCXpow7TLRn",
  "key11": "2CW5psYxWvTwfkQZsXxC434Bmrsj8qYZywKTSWv8e2TudBJMjtHWoFfGVVVzyH9YnCKKai2HyRTgwinxon5MAF27",
  "key12": "Bwpc6VK12Fp7ZVT1zJ3CT2sNuXYAQLyyf4MMRE14s8fExQZpXzEfsDdFJuJHo4dU5mCv1DxUoUmdnHv4ujv7Z4D",
  "key13": "5K4HzGRVD2zGYRYxRgNB1BR7VLwMBBgFtffnf7LPuug1hy8JmksywijJ4eZUm27z7jEFcEV1D1pz41DSoCVAuiC",
  "key14": "42R9GuT7QtMVtxFATeVBPpDQ3pHt4yomKtCLronVqcFPbjTbsPJsYn3UqSRpgMpZUgVoxBvcsPdG5H1aVkKC5z3R",
  "key15": "2enGdmQVZrqd8aZ2uNsAjNWVq2HG81qCKT7yPxD15znfiE1p7X5UsPDurxzAKJpY7GLE488N99au8rQDGRPFSjUm",
  "key16": "4fwhtVD7ZnMWpkGWtTi65YXVajirqJnC4R5aRFL3aoQecPQu1NTDiWuo5QteEiEQjbJMY7JtrbboVC4EqBYEPY7V",
  "key17": "gnY5hKSGrzUGNAQ6dHJR8rvZSeGQkfVpM3SgLuQSF2LxuRbcBN6GqEWHPiBgGszEfAZcHtV4wsL82N76Kg7wkVF",
  "key18": "ghC8kdm3E8ULC1gqrdrTT2AzZkEQ7CZCp6F2pb4fP1T4QVSTBzy326xZTiW61FbZB9ecJbyDg3m3MuqPSpHAGA7",
  "key19": "3Pi3Jkw86RXBTPq2dvuYoBYSrdFNysMYwHb8j1JPe2a5vyrahnvfhUb29UGLAt7AfZbcmn9GDjRxarVykyZELKmT",
  "key20": "2HWhsUkFkUqGbEisue62Ek6d4JgyUmhvBX1DGmYp9z41Wim2SCpAEn4rys8Rf1yytQGS4BWvkikMwzWnz6PyQMH2",
  "key21": "3gcn3vmS4UunVmqdKh9QwV1cS4NrP133p5NMURnjRv8nrCPD91yj3cV9xX8rQy3R9ngzDYMyupiY7rmE5K3P9ucY",
  "key22": "62N4tZHjosP1pxPeQQjp8tbPx6KafmRfknEd1R5JP98g4c9acQCr4ZMVuV7DWveCmnT5GqtLzBQHH6hAmFpoq8gw",
  "key23": "vzYwRfdE6TxTdYSwK2vtKsJhKarAA54rfghH3YTGbvDQaoqvMCSoy5dwHgTj1h3mVLdr3apVEas9Wx9tD8yS8LB",
  "key24": "4xbwLvv3pjBDoHTvuxbrPM6nkTZioizHJ6zKDvHFRVjwaVauQgHj7xf6KjandHxX5mUFfBqce2kFe5Vcb2UKTo28",
  "key25": "4VxEwUZyo2oe7kwHcqZUi4oEzjXuwq7dRULuyPjQwVh5es3Lf29MiVzUDCeTWFi3MB8nFw8UtPvgbXVqd8cisNXS",
  "key26": "2o3rYe5xyaNCZnWUZJo3DQPWZYUVJ9BLJTRrMq56awRpj9sJr1ZTngSvJAde1DkqUPrByVjqk2YruWBKFq5Am3T5",
  "key27": "2XgNk3HFs8cCC94sTnfkb8XqzSTPQ4qUti1GRz15LBEwJzYFGYW2A4C7z3Gk1CpMkkhKJWAy7uSyj9AMBra2wvSP",
  "key28": "3Cd8yGdY7y4N3gbyFm7AqbZzuCoBVGhJ5FiUDw1MiHFs9y95fw2wtTTemmLFtnyFJ8tHQJumJpXBTEFT8MrEPLS8",
  "key29": "gWac5qPGasztU4aBbQRyNAos4WAaNzdR7rwybyyVdxb4ibbwrns5kLMSfyBy7SdSkb4dnCRRAPBpbzweJ1uWDx9",
  "key30": "3yh9Y9VQZ1wv7GnKLRVdHVocFUcBdKxMhAf8sr6TfrLgHceHhBKGhyNAhK5XPGpkRWvNsNsZJGT7Ho8skr386H36",
  "key31": "4eE75P8ZvtwtsByMmphKabzFvrkUsD6ZrSLXK49bDEArJdvKdyTjrVjZPKswAYJwkSu9Ct4NagxPogXkBnSoe16r",
  "key32": "3P3Lev3pLshAqxFDdEiKF47qTQ45PwXFz5BiHzBzsroiV5vQ2XgiUswZDb2pvqS4oErBWcn7SPg79bv7F2Jp6HQ",
  "key33": "5AeqHMp7W7ifWofWjurZag7bGsKrU8zZv385mCU1q96ei2uV1EDdqgBVhxLRsPkpuzBwgdcAn6Pf8j7rzncYYBHW"
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
