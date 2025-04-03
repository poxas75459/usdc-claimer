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
    "4o3dbL7SfsoAfhpar7gfAWYTbuRHvXLCD8EBqC5qELtJTkDRY5EZk5y8UH6MCWavYMafb1rWWd3JRvS7KMNZubjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aY7EoLc9vPeG6TwQ78G8qjp92T2scJ5TUVqYJUzpmiEHUN2WojMFAtDWUs2SmsSWfxzmLFVUQTXcnLD2xbqzBjJ",
  "key1": "2MtisLoTMHEYySbiinug8uLppDDMyy2nz6cit9Z3QveKBRmNdEG3AhYm3hafu7CqGwyxoDh36zajBTba1ZF1G7W2",
  "key2": "2oLQfuKQ4fmgQSKggsmV1CxMW1FwRsvCfbDr5ijy1e3USzrT2tXU5ZjPXFiBfzWTVHhUkD3LSaCkTzgw8amaQNxJ",
  "key3": "dQpan6mFzDHdFGaQR6voShYRj29hXMq4R6xDawJMTgmErhfjZrHgnKnBDv9JaJgnqhj3mSUaSDB5z4h1AfLMhHX",
  "key4": "qVjhfo6K9v86bs3SRbQzenKKhfKsYsrPyWrFmR36jUZZDrF1wYd4aCESjQsj8fAfoAMPefZyovfxtpLNCR8Lq8w",
  "key5": "pTTjUg2YLPTfuF9dkkJ9jV4sJNkVdz3YFUPECYYouZASvnGeS4ekcT8roHx5Nu6athfWs43Ttq8uYrCk9dwCr2D",
  "key6": "5VE7FZHtX9FySfHtq7u6U3Jb6eJyTregeAwVpYsVbX5twS3RRomCRTXnLGCuYbxj4yxtFkrPgTxxueX39ZBwDBg2",
  "key7": "4e3Ruw8tGbjw7Zoegf5CgeVxronqDKcLDPWUAWq3w7faS7p1mZPBJA4Nid47ZNKQbLBR1ZC7HwenYLWAjsoZRymg",
  "key8": "5dyyH2w6YYe1E9WFa27UeXg2k2k3t4X3voJkXjmQrr93sCjpFfaKtj1pn44NWE92JyB7dazsRhh7qhuGBq5M4PTX",
  "key9": "5M1URHFZcGv9W3G8GbaJFcd1rGK2u1jM3MgiYnECnpmHi7aRxdaz6QtfpNPFnoo18Tk18ZDCAwwpm8B8hSb5x6m7",
  "key10": "5KcSbnePMEhokVRvWeaofSgzfLL2ZjE58p4ecfGHAoVZjhG9kSqJHUvbMA5ua6vxqWR6YmeUtwEbEjna323jjSSw",
  "key11": "5suDDYGkxvAKdChLo2cHX1o9CUqi68AAxg8U7o9KAazLDZEVTLfoCFwDAaxe7MvvGLTC9Py7Kvd3w7WyCRpG8MVQ",
  "key12": "3hhkXZGVVTwXjZjQ1Rnjs7uB5cgMsaQu68orTE4gYmvFEJoQnG7pxhQdkGyRbwvTihvX8iDVKVP64X3wB69k5FM1",
  "key13": "2mLmb3sqfGX3uSK9EatiZVUXLzdQV5DuKj7UgXVcNFG5hgn7WXJUBm1kaJ27YnedXbDsHJLcebx9DnNbHw956T39",
  "key14": "NiDgTFHKeLF75cvxCPbFjwjBkXR7uibHK4FLvDBqwHHhNkxAosyxpEE2jrp2kmBKVYebnPHymkKAR7XeasxotdY",
  "key15": "3Fd9XhK46XDrQXj1baB1anLoDxWU8WVMmVFyUWLgPt5UmZCiiVUjzPnrAsXoNpvn2RjiSY45uyARSiKoR6sQTiBA",
  "key16": "BhTpvvXaSEBoKf3tND9pizJwJXmc2xYc78FxQks3RYGBZi8Vj8s4vtRWL9qVmpyyTMxSt5CvcFVyYnFgTq341mn",
  "key17": "2E8QpX5miuHUHSvZ5A8fBwjBjwRp8JpvjS9SxyEVGxfLvBS78D6LFqt5yEdzn1Zi7eAM2TQVQSLdKntpz7vs9WHR",
  "key18": "5WCYJyD1Wkk7eX5jNieVmSrQa5Go2XQ5PewsAPaeaeedU5D1Ue8J1iwyAkP5am4sXcDmAEzxcMc8upfj8YzvXv8S",
  "key19": "4fsBE9rfBYqSaoX47VYF2sxhXpYSg4tpPxH8tw2HDFkWURioxJy9UBbv7RwcAmeZw2poHwRjea9g83mxDRcfcUoq",
  "key20": "3NzJr46UG8KwKtAAHq7LDzHWHQogTocJKc2xSjPc2yEMLkU2Dkt5DoEhEBZatCK8NhXYqN7LEMPM9R9MvLC3pQ18",
  "key21": "RBJ2d4tBptnWKyQCZmrWdiR192GX46cPa6v9oQ3E4nNqmJAJr78HCDkK4TvZeCoM8wHgLpuAXKkD8HRfcLUDojN",
  "key22": "9Jpb6mpiYnSqPSNF7cWeQ9XHkDtcFDPGxjUxWnDh7Vu4R5HP1mB8mdVkrKMuJSCTdNsTeWhiAU4VWZkdFu7BMKm",
  "key23": "K4MM7dNFaRm3bfGqKBukZ2zPn8eJpUKujYasCYxBjuDUqLrJ6hWBmG1sZtjp3VajoTQfZMMfNqaCZm2LbjWFUyP",
  "key24": "5XroNm1Nwqm7hncVvbyGjQsLC1D1VVnv9C65rooTRT8UtcVFgLsgfknMvTuicpzA4zU8reBMj4sbRAzMcZ1fi6jZ",
  "key25": "5HFL2T2Ua8sxmjoioz75Bg8gFWdFWx5VyjL7TjnesBc7buVrj8K4WAVKgmbHC5TomFUiACA1hXVhdn1NepWTDwTy",
  "key26": "WVpSsafuVaP68toGr9MYDBj7kJckFcT6yw6WXXVLZ8JD2Dui4nS6mZZSCTFhjHxwXXWoP73gWnR9woQw94M1HtL",
  "key27": "2PAjFChHtH5i4J5v6YfVFQbHFSFhxk7uh1W7CXBvWLmUq6Uy5ivARytKrX2mEKoHKLTenHHbXzRuJ4mW9MQxWgj7",
  "key28": "5iZ2UvmxLzX2eBq8EdeHETcFbm88m4GDpNQcMtVgxJaEGTNtBTYNvjJHk84U7rPG3c2xu6LEdWztZNT5pX9oVZNd",
  "key29": "3Dow3z6EiHKANjPfp7Vap5DieSpiEBymnZ4zMJuTac94PkiFAspXKhTxtxZhvG8K9rtaaVd5nMvnzr4z3RHxyndE"
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
