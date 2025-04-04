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
    "Zxw7CYxXZH3Bv8ukMPkw3h4fZN4qKC7b3pxJAkuDs9MJNZNuTYZGjhZmbeuRzHQqBEVLCKJZfB57i9SFsxLN6mi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65aTj1hdMhv5AAufgeBc224a59Uinc4g8D1oLWHZqYWdbenJoJV1ZwvNNC6aqthG9PNgri77yYANq1fx5vPkGqoC",
  "key1": "5YHPGUweoBhjvZGHoqWCr5Bo6Zm66Gwypaxro1hwiD9R9cYnZvmfjiVsquTQCUroREE8b7GVmRy7uuXhtNa2T7CQ",
  "key2": "22PtFDsMMuQLRiSieycL7BPPdA3ZpX9wpweL3WomzsNqcQDFLT8gjXVUhVUQAh3yWmTXxAHcugrLn7JChrYG96Pa",
  "key3": "Cbb6n53yTPnBPVCfxvFAvKkbNXCirV5mPL3PLi3xKJV6G6nfCxiSo8BPkmQwFBBVkq3WdnNTahuVxbjhyP23yaV",
  "key4": "3ZYbrvZdR8sbdt3iuSGJHXBjsZor2X77i8aM2iFo4qbGUF5SK7RHVVWXuzvZTPUFT3y1KWSt2yS7nLNRYRQWj9Q9",
  "key5": "4CmUhC4pU5xt7DQ5mg7qEUNAqJyUzmEYeqJT3Fk9NpfDF6NfWGNVvdrM2U419rW2GKtspPcFMELn4Rv8aVBQ8J4L",
  "key6": "3qpyQfrqWCHCSqFVxBoQZEcdrADHGrXgbHnn6LtDszbXTbDkHsY7ch2NjgUdQkXPbhWGbPttqYDjgxvpLQFSoqHU",
  "key7": "2VnA4Ln18kNHb5zwHTWd89DYSf8dHnch5uoZZgh6kMTBe2MZ3V1bJcdJAzhv1XQcUWrjLhEUA77iTJzK6FNLPGxp",
  "key8": "45eTac75jB7EsP8Q3t6E2jcSbCsWjUZbXbfAq241f8jCKa8Ldp1Uo5NH1cCQRJV7EeK7yGdgjrPmCNLj4bKNYEHD",
  "key9": "3EYxcBDFsPJZzRYK54hxgopyng1baV93CcjCQmgpFKg5z3JxTKve3gTVVD2k8Bw4yZ2F2E8bjX2MgpaE95adXL7S",
  "key10": "22VDz331TASpVURhXK8e84j2PQmv9JBeecPKq8mP4oipgLDXCPpBydHXqtXbMnVf4MHkR3kVGQSBubZQRnuquiWq",
  "key11": "eRYamt4fjJt99rc3DDWXGjumdTQvA5DE8h8Bhg1zg3sMandY6aoRQJtUYGByxzRmJoAXNTnom5KntkfxsV8bRWC",
  "key12": "3kcW2NyCgrmUYWQDkrh3jeATGutuKKmrMxvmjo9GmLZjdaQuFr8QqcMCw3SrDXYAqPAQBrQrJcVNJAUzR6mN4j7V",
  "key13": "3CA5zxJzMyWyXj5TyCNvc6fZzEDev7vCUjbqo1LF5ef23Tzq9VLpDfLLt1Egfr5mXMdVCkF2t2LVTX4VWAJGdvEd",
  "key14": "2EP1kxfwp7GdChP1HYoZhSwSm57dr9QvUGisRWkTMN3vT9ovXHmzFKsHMRzQubGByktv3nkqvVCMWGBXfcrfQyfy",
  "key15": "5CXAGrhYiuSvpj412st3gQCHBYYzipFJ26jjFEUjotGjTvuh5D1kPM54yXcgN99QzDU2tq9CCENaoaZVCg5x11nx",
  "key16": "4nHj8iNT3jenNnweD3SBRMMVXpd1BmdrBWCCMW635BnLkWsxgoydFi7wfJRQgPyx3GamA4d87YjTgUbwPa7P6FTZ",
  "key17": "3FGARNo5d5jr7hMZuARsqgHwNb8NRiD5r7suYndfKjYhfp7D9hsbKcNoPFuz4izg2C3ndpGwBaA86FQHV251tPQy",
  "key18": "3MMFo258bH5MjY7CCE64rVxyh22HAjYNqS9PwMLSuLZGxPZatoxZ63BbzxnDZtBhE1QShGHRGwEs8HnfNHFzz48s",
  "key19": "8F3Jx7GkAbJAoXSrzNGfUfLSvvdM2r6Cgeq7iLyCTaDtrmYASmfUD5soH7TFh8jHUZhG1mG8VZCKj8gBDqnx7QD",
  "key20": "5JtujvHbNW1YHb6kXWkNFSvr1L9oD47y5qRSErXL3Ag8WeB3xsvuy21niERVDqgTYkQHNcWGSRHmRYZMKhrCkfi3",
  "key21": "5fQN33yRzxPcVUtx9yhSE6y23KPNxgULaDuG1yo8fsFdtr81JMHudjsh8DY2aTngXpVrtEBik4QK8EYjUmJJVw7P",
  "key22": "4wNJUP9mmFzBGAN9eLGzdfUriyRx7ibdRKokC5mSFeeSrx7Zc96bLkTL8p6FKBUdrtnA1YSSVpaF7cRdz2WqpsDJ",
  "key23": "aFneJ6Y1WBPhM82WyfKgzV959AdQrBZYfkwsnTymxLiMwbg7NZVmWZMhquaUk4ytFnUHeZF3NSGMiuPifbmTUBM",
  "key24": "29ZNPNcoTx8cD5r7shuASpXFxzxVzZpPc3je8eCmrYUez9vPb9eJY3cgaCP8tGLrmRb9FUnsYGaEB2UtweyTaH13",
  "key25": "4MmLx4tN51gSGwqRMPF3LKV6mgPDrasU8A5p9yFSYwiS36tDXbqoooNNvMiiKCVHdrcguymFkzTMSCL3Rk2oQ8yg",
  "key26": "3CLEk2kJJD3HaDsndHnQPe5bk5AFNfUwrGnFvDVJJtBmiRPWYqxLrAkrXbJUCqenUWJUo2gAcPdHnokXoghqByhj",
  "key27": "2JcZdd9yzmNPgPBhZM3EBtN6aMTQ9yhut3rPWLLnV6tRngi6e6kFLKCTsC1oJ2N8CKKo65VuuYEqazccqFn2jWZx",
  "key28": "2XF39XVCsPsP8KmL1UEEtEA68QMzQW17qnYpKLwxKKEYvRvK7nkLaLB7GP4dsrwwxzq6XHvWF6PY2U5qoFx7XAAm",
  "key29": "3z2pnrvKt2KN85aCSDWcQUsyDteD9q6wvY7M99ASK9fDXuRgBsXVZxkNBDUCJof8yhsLgGpXBDSabFnyYffVXcP7",
  "key30": "3WVXncd3nn9A7McMMruz4Xpjn3ziNaqW5XqEXL7Td3N5GDU4qNX8gwZjdtbj77aYr3jJuB2dvZRPJNtKsE5tbVai",
  "key31": "2K9FfZkjRpSTwrKsGHELCrqqZpTEjEQtpHd6u49EobbKBuBNM4Etv2Ss75RgG4M3sesCc44aiNbrd66yGgATaDiZ"
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
