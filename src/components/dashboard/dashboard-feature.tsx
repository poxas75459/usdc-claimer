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
    "4VhtnYGwsEx4bmVQmsqmpec9zyCysCveoz2AZAo9g81tnLZ9xHxLuyLsYeMNdrTHA6enysUfmn6eVf7bKBeS1E13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tVQqK9nR995qyB3P7eoCgmpQwGcqfXZsSu9Dzvpdc3b6k6ptsUVukXDdBgBL7SXmTRRRQ9t6zHTaaAJMNbUGfVh",
  "key1": "3j12TFFAsyqGMYqQD1Bu2pDFtYpRCkx8ZoTaSosFi1zR8L1EBC9M4gBVqEBbJWQ8HnumiHZbNuKaQtUtoqCQnR5c",
  "key2": "5DFDSqikT35b9vKnxP25JbRzTqD5rP9RwbtrxEWfniZ2GAGsTYphs6LXXvSFoo4YqLTSrvv5CnJFjyZbt7AzLgUr",
  "key3": "2aku45PqrQvRrETxUnxJEJkseGu9mXkrepBDZ55Syz29qNtsQ9foDSmNSwEdpcZErKdonSuw7qB4Vty1moQNfZRV",
  "key4": "DwpRyw1fXJHLvPsWhrYGGNjyeq39Ufc8TjsvMqeGJs8LFNGcWpfH8DZHJpQoFjiS1cKUK9fCu4PvJaf3SaADqrq",
  "key5": "2qnAaAbYqg4QDiPx8UZBucXM4CV5yf78ek8TkCeJvK1esnyhoeQoVapo5Hfh63K8M6vC53iCSJWnKn76rajwK1Ms",
  "key6": "3Sgr8G4UNAP6k3PsBfFhuVrxEG627G6gk9PkBD4pPUU5zNGwPmJ8nHkSqXNAzeVSdH623rQ8r2d9ijdrb8hXbi78",
  "key7": "zA9FzCe6RqVVgjSFrRcRiFTuFUupvViqaKS3MMg8MmqEWEMKgcTevPBxD4wdsnH1iUnTwpTbgFR9LqhyrQQP7CC",
  "key8": "35iy7Ze2rmHhSw2D47ABbrp6s5VeM6G9UraPF4B8GnRwrfugnci2t65xBRD93yUFX1uyNJrv8q3veywccie74iat",
  "key9": "4ySUKSdXfFceAnHxPL2hDpPbtmtsug2ED5nHqraKEZV2fyVJdTdYWVdAuGn9S3EdQ8Qt3C8X4cqomQyaw9qcUTHC",
  "key10": "eTnSVT9N3UYfD9i9o47hcKU3sjqVCRK7GiYX55LLcfvspNaQVpaLicFrnYt3fPTiJs5dmhUvyW4TCJCTbusYkZg",
  "key11": "53mZtnKRLaBLNmXNp495p77VRE42iPanJ9ZaGU5hyLrTCZyxUbsQv7zfQt2N5nyY1e6xHLGEWDxfrMAvUS6zypwn",
  "key12": "4cGebs17crovhvM7pKVeJjoeawQcyZ9eBBJAbzmVMvCFKh6s6dTRnQSxN5XpaZocCCWvteY2QKb3uv78gjVX34dt",
  "key13": "2xEddHK9BACA3RzbjVdCRKcxnAkChBo2MqE2nBQWPgnq6sxAsuFJfveJih9Rv9HMhDozjrvXbxuMGjae8mY7WZhb",
  "key14": "58oouEiT4VRxSGZMiV3QGfVwg3p5kjSN2dnt84Tgq6WpQd8CVizmiurzpjB5wqnqJW3hBogPoeCQBpry3mxjoU7A",
  "key15": "Ndq3kbi8ZaHspHLfQNV47npPPRY1AGoVrz34SHByXC5qRgM76EuT7FhB549nXyacTajXUUDjFdV6rEELEcP9DtS",
  "key16": "9PYP1UgjSguAdvchdGtmSnZ2ZMqUCoX2qTwFhj9LBUT2hYxfPdKHQZxHA2Kqr5c9YsP6xVbaszGJVsPKgojp43A",
  "key17": "EGd6ToLcRWhTBdQ1gh5Aj4kQNz9acfQjfysXvcWdSQ83pA66YthbQ4g9bQBY7arFpnN98onBDYUT9piXvcrgtG5",
  "key18": "zSTd1eJewx9kcUrguK73ubEAfwqHb6DaChYZtK2cnzbpUkqfHjej6eaYMomgzWuXasy2EgLea1zGWy1JZtZVoaq",
  "key19": "4DiPb6fnCrhzEc3Sm1HzupgK5iBsdCnVUF1yh538PPuzXxy1rwW3kWNAamK8mWeQnbAixDqWn6jzAosJJkKP9gWK",
  "key20": "wtnLjNayFnwQeWZKoBkrAQFyURNyZikuoRURAdSPsPM8CAAzkEq8GhRLYySkcnYAHjFmxdjvDBjMASg7o9oVapF",
  "key21": "3VghYTSfbvwMXbcMJcNYyj2Mfm5UAykE6keNmLU7z3dyf3iDgbcQ78ts12xWEjwy8WBRxEcQ9Y3Q8m1y5mx2smA6",
  "key22": "4hJfrpvMra6AqhJ7e2fA4HaSKjygSU63pzgGSU9sZHxXFUuvwP17PNYSMH1XSEyN3GZJsW4hTcR5fjgH6P7ko6Wd",
  "key23": "2u6MxHGmxaTxBPvqCsAEoeugfehzaGfvxfs5dUNa615ZfVGFhM2hTnoScoejy85MhUxwq2LSypzrJTb9WKpcfxij",
  "key24": "5XThWeTxrNGoDApEBs5jZVQ3k1nz62p83oax5YAAh6i5Gin1Gd92jxVtf7oNDYsem44f34TtyP6jxMxi5ruYKoqL"
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
