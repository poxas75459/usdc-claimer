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
    "5sHC9TbfZXcLpkdjMB4D8ks8QDRVRx5RZ7fPdFPa8fM7BxPFcwA74FrWjxdFxKL2ttAyqz4BPMzyJ5iVG8ohs3EA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46fmLGPoCuYo213v1N7NdgkaxGgmdgsPSHPC2i9jqb41M5uja2H9aYkYxN3sBPsb5ZwALVkqjko7zTESsR5YxWJi",
  "key1": "4eVHeitjs9RP5nZZCw5sTnzLhZDFytuU1gqPi5knZNfZvh5SG4fP4dJSaU7DPzgWWJqvepp4zLp6yzxdTBJJL8hm",
  "key2": "3EbX1SPmMaFNw1bLXz7CKhhmP5BxJEHjF7bezjL3Z7EtvawdjycvXGHP2UAgoM8ggHr7tYKkhkimD2i63U4o387J",
  "key3": "3rbnTQjTsXaRCujxCFqmV94qFnFH3TLnEZuQ7PWEVg98yKxe6NPiq9zuADgiFwcv2gZNeeSda5cyXMgEmXbqS8ZT",
  "key4": "KRhq8euKVEcBn1TDXqpNXB1ftA7WMVqHMEj7RzrR44ApvBVC8NnvwYFsfE2jdRN1EidQz8GtSkBLKUNa8znUiDq",
  "key5": "5rYPQ4qVQkHcAg9NyogLBmD2kg3XbV9BPoxMrwo6MxCpqBr7H7h5z2dE8jCZtdKb2PrrLi5SKd8vd89r64h3ukhv",
  "key6": "2xPpd31AiPW7F4FowNZyBKHgezF14EnvqeMPqkpCWAC5UeAk9jL5PZ7YkpjMN6RX42BndrS4cDCDGe1AY7k7dHQW",
  "key7": "t3yRrPV9MAd7UhkpRBrJcQhP17baaeoujEWrcK8AiLeNUzFAJfH8YY1BsJnGKrA3RhoKgvJB2JWurYciWBeaMci",
  "key8": "5vn8LD66mJKFWAeH3fZpxMvY9dovYsBcCdwQiDyuaRFaUhusnK9vGFvhZuusJbJ32aF8G21BGB8JwKCKP6AZbGia",
  "key9": "SNNV9XLC1bd9aPuj3EGrKhni6tf6Q1mmwVyJmofNzb752T1co1r6UvbSfxyaBoj2zKfcJsqKehdKeffU3wFCbyx",
  "key10": "hrM59Srj9HAa5ReYneBXfioZUoBArpFuj8XophfB1SSTdP3SjcpQ68qvedW5qLNts25yZA1YmxheH2CX42noDTv",
  "key11": "5MmNJ8k2MxdkuvQ6m2DnZVT9CjntTJYQk5AN1zD7VXNCRE1XYb9FE5A3rpc1C1ZAg6EXHAHX1K4Bp81U1yY8BdsR",
  "key12": "36s29PuA4ENx95pDNzYfdjv9khtZTNsrBZphAZDofF8eHiHnUprtCraGdRpTMbP8psqxtYUKGWvQaS8rd1GdYFwp",
  "key13": "4mJnnkdye5YWRuhR8nvLfhzSZ54t9xrPXXFmmYRuymyQXCMtPkJMWzf9y1HSxnsSdCE4wEsgk9XZYFXkg99LC39H",
  "key14": "672P8paGYWF4NisWae8LPftHxthW53DvwAQ8zDFKY48aSWg8mD3Rmx82d7rhzfjgG7VGVjNNLzEGTTqHkP9emr9z",
  "key15": "6ZGpryTnHTSWyVfZqrPELVFyDGFyMost6P6yyh1MrQBQzqudNLLjQZWUbM71sGpnEAQfccBU2JtaeKvjx5B3suP",
  "key16": "66pA4mESRXwdGivGZ7g71Z8c2kkpiyphjgjzV1fMJjo2D2XcxU8PsUU8qZXCC7f6koqvpAZsdDFzTynYHm8AteYC",
  "key17": "3WaEEnUcZZx4kyMuVcPktELrrbpg5QLkewxpKWM7BEMeBjapuxiJq8FimMgXUjQks73yUdy5mYzWWLFByewRoyyE",
  "key18": "4Dj9JHN3UTXk9FJ587MW7NmNnRTjXW3LBfaxwTbHXLxTvbWCmfFEYkfVAdxTdTdgkWiwRzBdZcLE81QKnwt2mCgV",
  "key19": "129QLzLokdcWQAfcYHoqLiVStQH66wmV9ocfEhUMy8kzESHg1GXbZdQkSUj67af8kZGjJf7qfBDJQNaD2d8yMcf",
  "key20": "PYwTQczMa8ktg85Lhrim7zAYWLbviHUqf7iHxCLBgZrNd1YkHrY5dyFaheZNtV9B2egk2CNenZsXS6MYh66pK4E",
  "key21": "2JDRsPRcGgVwig95Y7CUz5rfkmST8uBVx9CEU1QeTQMnRjFQTiRVFmmypmrA7ZyMMtaat8NeYAfZ6rm3SZLcHsqB",
  "key22": "viQMyF5zP3RA2AnVj8Z3RU5ukvorFfCypoQLvMkSdT7jUSTzRDsjmjzAC6iDELPcurn618CTxH2rmF4ZMRFL1mq",
  "key23": "iicH7C2qeKc3ZVJYaBR98GgW3puHrXQfxM2Yty6EhnoyC1b4AjTFW6PVByoVyb285fNxmpRLDVhPguvWBs9wXti",
  "key24": "5b2NkdzYpbzdabPcAPwfUWvEH87FTuznmVPY93UESCDnSBG6bVjrxnQGiaRkamvXzWRqM4LEyqGPRE46Lq6sdtvR",
  "key25": "eQx7iD17u6VHEPkFNVGAg1B9P9hEiQp6Z1Eu5kKtY7KcmDNTZyHi8eGZmtNffUWgVi4qqQp9uUQnau4KQ982f99",
  "key26": "3bPRDsWSBwTPb28mjzvA8nAsEjT5es3mHKK6zpkhBvsULDrif1hyuRhQ1dFRXBpN88t3wz4JBNyAweT7P9vEbphq",
  "key27": "5LkTX7unL5HKew5Nfdpw5iNDqspjEVGmcLFWpTWDEx3mnLQpeKZaifkboyYA7k56SuKqoX8gYNHfz7VpcKYb4CAZ",
  "key28": "3dUQCNQWpWL174r63tCt7TwaizdaXXnqub9PN7Qv7X5yZjJZymx5voeU5dJMgfiWmDvi7o7qMxHEKq2yd1bduNZr",
  "key29": "5jEjdWBYmd8qWKBZwYS4LAZPQsryAHS6X3e9tyzgHrGrVbLtX2GjxtC51RHXkePo5ipx3gELmYUNfjCuQSgTzNvo",
  "key30": "5vS2Js3xVzEef9iSBVdCR8MnEaYADvqYJQoN9i3YoegAkQMjyJwnPaudf5kAT7KquDa5djxrE9t6pwT8ysh192Gh",
  "key31": "aTrWAEZiREfsxEf7Ub7PKQfKzZFtntBwGbiHdaZ6TctL9cmJk5vVnFvVzC6m6EPybER8iDkCqxPLYM7ZjNK8w21",
  "key32": "3kLSe1KVgMLDC6jQuBKsEMwFPLpwAwbMb5XbTTQCeWPKJqy2aQMnmAN5J5yzfUHEBMCkDufN2tLbb1sTLmQFSE4r",
  "key33": "3pEVoYf3hLSEHMhaf4xEWUDANotaAdGvWX85PCEXUt71g2kCz5grxkQ7trZNV6MQqnjdmJqgLHWs9bySPestqhk7",
  "key34": "7hUHP6WPZaJvge6cQapWGEGoepLsM7apK2Bi6oxHNUFKu4eZ2o6BiURhwFBuAD6Fkh3VqzZbDLiEGpe1qHne3LR",
  "key35": "48XwXkjgjfbEazZMFRsib2gawYiXop2T863kPTGb6RQdWMEwrxfW6d5mbK8CUkQE5hUut4c3g8u3EE8en7WUCWCU",
  "key36": "2SSnwtNaH7kaodvvhqGxqSLanshXALzSjpsTSNicEvYbL2WJHsyUkP9bUTvdYxM1f7uGN56uE3YrDfFVHZNUfjsW",
  "key37": "mpLsJLud73DPACfJ6C5Zmje62behvNVY1dcNTQi935cY4bj6WeXZbhVEknu8pksux9AtTTxK9myDaXWere8Hg9P",
  "key38": "ZepmbwKnDKG6V91j4D8SaD22h3GqZ66jAmAvJq9VA5GzWYruNWjA11HAAc7gWvfpPAxpjk5GcYCxaj3396MBVGY",
  "key39": "3t2QFbWhR8HH4JTJmMb7N2GkcadEVUiB2emxTQAbicUVUUG5LJcsCa6YhsDgGinK7UFBLn7GWHJ3RLRkgVVCfKUa",
  "key40": "2LreY7EVsmD6ePPJPhUKxgX8zdTJaw93fmy3zymuJgwT71ertc7b775DY2oBwipKNN8YPsdzhQCaanhpNRH3Afx7",
  "key41": "5q4hXWtaVw61Bcw1w575RSzyZGUkoZjPL9hyXMcPM12jhuNGkumnG7YtRN9Fpy6ZzgcjDxo8E1bJYZZZZELB2got",
  "key42": "25bbpac1t9VooAkXtLov7GmeCEdAWGrPbPC1nmmom7sMUDRG8bK1aEcLJVCMtAmDQ1Rb7E9W3FceVNvBUo961YBa"
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
