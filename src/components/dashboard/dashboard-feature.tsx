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
    "4aeKBWYCs7cxQFZG59CJiW7AYcnUD44ZTPA5R4TQScNYn3UhQivUuYkQnazVkysmgQcWUCvjVDqPYDSaiYTFdcan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uzdd1inirdehFfap11HSLDRf25rLGMn8oyVRWZAKw1jadKVjJD8wtrqcj9yN6UuiPgSaUqALBWTEV4w9YRySFPE",
  "key1": "5FaWCftSSxMwskWoanwPCM3tQg8LM7DtiK46utLZLAiGzRNYAcynkDWy1sg6uEDqZKdWub1FK2ZHXLviq71oE6Qj",
  "key2": "PLbEqfxQcVvVfWZr4gz8Knen13TE6faAJbqHkHNQ7sLQg49eS75sMdSxwsupK117YysbkwrhFYV8WyNurA8Vzyt",
  "key3": "2Nbb4NapMQPWpZk83A62Efg9p36TKoy6RcWt6hGDvbfduRmRHDMC25bA4bF2cH3ib4tj5ZqJYfvFxQDJjVcMCUiR",
  "key4": "3MnKWNjgvhHGt4XWU5CL9gXb1EdhEk2jyCPvHxK4eJYod8Se6JjUnvnzcuNGTFSSgdySb4u6rfYkdWXXQENgg48Q",
  "key5": "ZYkqnyyuUjVprLmNChE38iRFjgzguFwaAnmtsBTfwCkKpAZvzvpj2JGQu2SftAm8JVJiTo8YCUe75S1ba7fP1B6",
  "key6": "45SbvPg7pbwZVYCjBxGRNT2Sp6TLooTE5m331rFi7dC75GDd6goUi8MPx1pSssmUYdbau4ZGbqhqr8aFZ1fKjTZW",
  "key7": "Sjh4uzgLtm3KYtMARLAdaoYPrWTLWYoT3MrkUfgBbk3NyddESafVkvVeRDTjeft3Vq7eJJx1LURYQjdszbzA1gZ",
  "key8": "3phC5yhaHrntTKCyExLRHJkgGDUF8tgeQLq5seauj1gVQk26NPJ8xftwMGCfvgxpfKweKPGJb3nGnSFDfjR9pc1p",
  "key9": "2tvy12mp9w5dPYm2a62qXXjfiH2svv8eKdRGFAPYqfLWf28fZTdsAcSF5ybohYZ48FdkjRR6q9XXQTy3Px9FLH86",
  "key10": "3AxYM5fdrQNrr8sGaNaVkqkLV3USSkwSVhtLyJxnqiLx8E6WCLcPSyyPRDffhDfkm6CDRBM9Fx743ULz7BaqHyoC",
  "key11": "5Ae5KhttTs7cwRAs7hz9LXzNnYjQyC68WhdTVoPNcpy2npEdY47UvTarMqued4YDYTbGMxsDmLKkm9ZgSqw5gYhx",
  "key12": "4crkyd8zGciq8GLL9bj12J6K7zY5dAKJB8M4u69UbsW3pfkFvDZ4dTQ2qZ5aJUfgEvFBD1U6BgzbMKLUJyAQU1N8",
  "key13": "5nDC6MRtagVVuhAFYBxHmmiLrbCvxfFy9WD8gewCbfrzkfPA1yN7PnXTtLFGAxz8TwSMnkaFGZuezLcmpJSwpLXM",
  "key14": "Nw9HjtNab1nefEFDMZwtJ7hkAkk1faD7ZmSKxKo3Zw9irWKNiuWCLYxnxonuAd17gGauvViqb92uqnMg9Z1mX3b",
  "key15": "3BzfVA3soq65z1dXCdxoTaGwieRKim4xkWZL55Rzq9uDbio4rNNsiw7rw6nuzLYuuZigu5K3b6NG6tYVrTX4RRap",
  "key16": "381NGkYXWBRZnRgdYE4aQkX2LSaY2y6G7Rz3PByWccF3tTZWHVaZ8UBRp6AXjgcvNVWFNnEw9KsxLu3jibjcFPuH",
  "key17": "3uSN85c5xDrs9Tq2hpPyMnd5Y8RuJvvqUZJDAvBQmP5CvDsYbbGdy9iKW39dHXv65kk71tGBb8wkWgJEA4hEJrvj",
  "key18": "vSXLVPUySKmLTUH1eUyCEqvJe3DZB3rEoKMw1h4oJj6AYAFQpJb4N4fPe7Hg7EGggmSjGrBV63sB4X8DCqaTsHs",
  "key19": "3Bvf436hU6AvPJgUU2i6aLzsxuL2HwpFBqJjRKvwW3Rxbs7UqEqtED28nafxow99Mjrx3Wn3pAGawxBDXctEhNrD",
  "key20": "389CLptMJxAsnw5fbYvFLYRTPkZUdqi3ApffUsSP6X4kzEyhbNWWzvzzyQu19Z9nP4nJv8gwXFGmSreUkB4tk9Kc",
  "key21": "3xkAuuATHTwEJ62Q1sMwEkKkdLciv1oKdgRh4MS6idAxbXappyfp1ZdTfUn4UXphBSjwFuGtn7EREKMCdqUgfy8a",
  "key22": "4wid4dc2CJu8wC9ziiR1XMuqow4SQUfShoDy8FjmXRAELfibje8a2WquF7xnpiDwQt8NY4QyM5tYEmReo33Dkphs",
  "key23": "gcbKoiFxw7tEzZTaeo6SjBf1zTbpRVJ3kGTK8fbfvoYoic4Gg2SkFihzJaLyy3RTyGDFnSUK7wd49WpBzr8Efpa",
  "key24": "5Ag83YpnzrGfaZLm4MErs6RM2JTcsabcPgqHVxJRGtTGFAvL6wfpmvvJPuLM8fFfrk2rjyHajrYxDSgEDjNezwgG",
  "key25": "U2noxxCabHn59xrokmegR1b9xtHsFBx2Rf3HLgfA7PUyoBhptSz6g4W2tvAeiTBGCMQc9FPXF85Kk2so2RBkV1j",
  "key26": "2gAAU4bey4zoRRfhafg3QUtjMcWazXRQvUUsFzTwYKeo7c2uuhff5FirR3t98rjs1xBLacvg7auqiZJ8svTdEFAX",
  "key27": "wHgMyivdZYXaxef2ncj8Rnf4GA9s1d1qy9Apf7d5Yaxu6SS1jqLn9jvLFRtJHdouZVT2JEvCYijU2eDxFSF4ZSf",
  "key28": "4b6tWV1esbq45e7ST1aGT9K4oEMGjJRZHYAvGDzMmYuSumpXYD6mD3zb61TsrrZNbqR1qi5nkeLRME3wk71d7roW",
  "key29": "2jpuhDe1UuKoXmunDrks2Fpy8PgAK63E6EjbKaxSF4vrHA6aCowAsCmwL1MUvpKHqSLm33zY8vBwvswnDM5e9vmw",
  "key30": "4K1K5hTL4S3vpdiqP5snx4R68nQF8waC5EPP2A7TFFT4iQBtzexwUSpW6iKvGtgnByq2bP8sYZHoyPbFWz25sVJn",
  "key31": "5icGa12FtAe3eNXZb6BboheLaT3YRHFbGTs8u3ThuyBtAEaB1ksxueqE6NkS5vT57Xe2sRtzESfGy3NpJnCZRXWF",
  "key32": "28UwTYTh78Hhpq6DkQwLXxdqwHawaN5kHUL7EDNgsRCkmQUdZfHCfvcrmai9PHnYXsaKFj3AWweG5RiLUv2Sfuj8",
  "key33": "29LBwskPxMnP6bZJcDRd2ctEEBYr7sVtk3Ugx6UEwBUg9f1rf5XovDmDYZLDLAnCSCPv7eSFdWW55YwMY2WaodBx"
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
