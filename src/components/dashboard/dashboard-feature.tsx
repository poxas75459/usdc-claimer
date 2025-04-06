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
    "4wRdgfbd89ayzivb8VQAEUVgoC7psr3RFvC2FGWm7tmaaQFSXEgC7qF1k5e3ss9uKzcoNsiAynCTttCvk31Cuy4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PWnY3D328eWypWTHDd8t1anKxEdjxzHRNMErkfVJcrdepwLU24kM5z7VaN1i7M7NKRJYY18TdQqeqXRuM2T2Qhk",
  "key1": "21UNxewGdeG6JpJREmyv8TSkohjByoXCoMntKR48eM4XdkVbBv64W1fm1E1yoo9UerqPanqiEPfnSvUuuke9756a",
  "key2": "GSfFnzZ2QtkGNKvE5iTsKMicDs1K9EURwQnCYvWZhsAX9v3oj5hqa5H6PFJ42BwWYpr2fLiYiDZNMasPoKs13MZ",
  "key3": "VXuknawwx9usr8EX4jgkMbGvuZcaGFCyzieiM3xwjRSstEvRd6SFmmxGv2jg7hYDgv1tyjMQUJfLzFzZLKQQRam",
  "key4": "5UfhCWrkFgurFBr49bMJm1g2FQaLeBoz3jozW4v7oFtHBmhNwJ4iZVYFRYwjzmTntcY4uRFPqZ799LHz8mYmwR8y",
  "key5": "2F19Uo5oadChR3ahYek4iKbuKoZzkrqVjw6tt6d3LsN1M99KWNFHPLy1M9WgJtJ3z3PSbmzFSxZ23P6vPn1drkcX",
  "key6": "4TndaPnpT5NCkipG8AT4yD2vKKyh7u6WwG54AFTruQDbq5KiRKV95B4DSevgtUP6ZXuSSoSwAJKJJpEn3TcMnvtW",
  "key7": "5WpMHJ4D49471XZ2wXCWJuTdSqFfRbUNcdCisYcayNwng85vr5Lh14WFNDM3annjtbkK2HoGgGmkZJSGPfoozZDw",
  "key8": "323qPZeVTZ3iikAZyGNCRuGNvYSmxbBTp1RYRcaMVJfQtDAjc5fvxpNeR5qyiAqu9gV9JakybuqAJKGv1A2u89o4",
  "key9": "3Vw5vJ2ACn1YpV2BYesyfRkpehbKuzyW5DCy2Gd9gxFMZ7YNj5ZjsFrrkejDeN9RWurpLtCrygt7S8enBURX7jui",
  "key10": "3GZST1LchakbRFrEhoqyhY6JXjh9DjCJYEkvcgRjkpXy4LF8CVehVfR6SyVt9NjekAMjFYrU5RHk2a5WFQK2ANzA",
  "key11": "3y7ZdPiGP1tGMGoSr7rE9QXxE1seSNivZkpj1h8cjEUJ48uPkjQwKvXzBPdvv5XEEfoYupz2hk6oSNJEZT9bPTst",
  "key12": "5GvNr5VShyGGx2KnUUzbrT62ztHcPrHMvT9crheYSMPgy1s9ifcL3wpMnNbH2WhZyUsgaj2S8xcqkH9rpN1Tgz4y",
  "key13": "2HaSotUakUCqiUreeAdDJW5aGmJnK6HnVFU8ALFajERi8et291koYq4z17HQdbjCxaQ5VDW9hczAN4dKeQpjXHzA",
  "key14": "4j9Lr8FJSrfmnNmtsAt3zoVhimo6boZE1HQrUhdRvfdKrAkyAzWSBN7cyUnqdEDB2XEyTL6dy8QgCQrnS5CuKtFh",
  "key15": "2CAUdV5t7CA71JydBWqhGTXKMp382CReMQyVt9ZKpuPvyNcNSPk5S7MytznC4Jrc8ZEHJv3M6mwWK2J1SgGVoVhC",
  "key16": "5V8dw51vwXprLbozjTz8HPS1VfJVMChrevH3KmMXV1zTEtYYS5nyFYTbhMCsmUPUHUSf86MPxK1FkocdmqFswqet",
  "key17": "Qk9r4kgrNojqaf6LXFCuDZAuwvLNkC67QN1NqU86VHVJh59eiKy5J4vVT5RDGhgM5Um1R2neWkAQwWEzpnBhten",
  "key18": "Eks1yYMJk6pTmP8RCswUf95s7VVcxS2C7dTcoGq3qpjcgyrWPUxWCoFSPtMkrzhZQmDMZiA1MbevLrzYc3iQzjH",
  "key19": "63icCZS3CC2V8B6wfJaf2gKYt2xocMrdRuvfyVroQYB2oSAKSc9WJXyho7vjWHyQs7LvUBCKSHis3mEHKmyZvbYZ",
  "key20": "4omZ99Sfgj3dAGkzzGeCj2mDpjwhZX9fR13Vf4QEZZzPW1LMrVKPk6RRKpRTtR5maXkbu1Lnp6t5usPox7EVHh4",
  "key21": "3vekCeV4un4YwWHh8B9iPrLaWnBk1PXWRDq7vNBnsBS5Ya34q6DP23md4ziBGnSNJUjpAfiw1CpSBSAkc7nqGkuN",
  "key22": "3CDNZZ7xHZ2hawdTTr3HZKWsY2gsZpfDyQtpqnnKkkHTCUScZHQ9tZPkCAujeGfeN93GhQ1F2yJENYp9VmTn5idH",
  "key23": "4tif8uwmBzaypgUnAepc81whWhp6gbc824pMGsna2Xgv6FFckBdJSppDtpVPPaUeBmAnoDFowDmUXiArVJzRMsBa",
  "key24": "3kBF7tsvDPJUyeDq2z9PxfnMdtTVMzTgPrtSif8KcSiCLyjEKzD9epseQQ1rMAH3wtUuvTK21ReRDmngeyuRF9AJ",
  "key25": "KaLRfY21ritkGHRGSsQnN58c2qfgC9vUNr4TzpLM34Lv7tqCCTdRVv85pVQ3J7mw27zszj31bCkJx8TAS7eJEYw",
  "key26": "5sdirnv23czhbUx8ddutcN41zyBXvvZhM3jydFocwQZoz4u7UFMLSTTRe5pE4awSKnzJuuRH8L9D8Ps3wc9ft17C",
  "key27": "2W8ahHpv62uP1UFCfAErVYw4q482dYmsHH31a72HTqXLF1FR5xcpdnsjNgv7sHQpim5rUFpFEtBy3orFj46PvzN",
  "key28": "2EdK7SmPbML3B9XxaHmH67PAQvc9UykBkMmqT7WVLERm26WT6N94oPuv9gdmuYDVHvHeMP1aw76bWzao3CRS8Gum",
  "key29": "4gWX9DZE1SKtZBxhi4HY55u47Yb7PPw9vLtuiqn8XB6mvN2DhPZa4gdqRNoRwgvF6oNjAP1FL1QiqDpy4bDdKAFk",
  "key30": "2hrdB6XrRriD2CPzqbSzs4UZqQKER5ogoG85st7m1d3eqaExe7EBjGoWuW4PZgwgb79w8DjUpAV3G3mFwJ1vH3hx",
  "key31": "4Wxttt3GQVzupdkUEPgEbVebbCvDUasowCpDb6KGcANhUMfW3rdW63Ku4YztbJWrNmmigX2kLjjWo1S3FC3V8awJ",
  "key32": "2BcH2LtgGCqs3iKk8B1agWvpKgCRLaPbUrJijrn45VMP9to9F8n1sTxFiVAF9Prtefp7jEc5nGXXUU1wJQ1pAvb5"
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
