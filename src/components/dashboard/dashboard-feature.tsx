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
    "2z6DzqBtJGLAKotvz1JPe81B1HRdXyBmyD4ECtbvp5kiRnJYaGFrHse7CtJJ4c3zgPrqZeFukKq7PJtgrFNAPW1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HhViDRSnjNSzX421BUWHqqgWHPn7rJmUooCzbpUczCs9hE22Ergo1Tq5rxDF7v1KCVQmSuqqRAEzyYKE5jPJUYp",
  "key1": "3AGSB7CKFYFncXbKZXzJKAT8wYAmUx6ZQz89Xk3nYoqfJ2zWeoP9R9oUapCmVbZiR5VuvDsMo1QMd7YN4s22vtEF",
  "key2": "4j3vQYKHNbzcevxG5ZTTjiDgw1K7qQjSqoD39dRzrqJt5jsVr9GKhw9MkDCMhxJEuq1SGY7MsytcaPyJxsHjUZax",
  "key3": "4c9btH5abaFYW2HRPT2LA64dJu6QqZnjjrohnwnErmswHq7AvqPfJatMtNWXS5trbqjHpwW3Y4qXgWr5sWxT4JuQ",
  "key4": "3zj1mhZSZ12QcTULT8k943B327Eqe5pRxffMVJomFTWN4DvnqCECzRsDXqGUuFhv38PMLczYGfLdZZtv7idEbNX8",
  "key5": "o4JQTkmYkirp3uaSkq1uqnUqo9VXh4h5EiBA9kG26TZ5miquusksgdqbkij8B1mWimFudAVybZRJtYHJCyikwny",
  "key6": "2tvDwfAgsncQ2Uue4UjSQH8pUG6JFfdqTS72EuoJ48JyUMRxCy3nfRrAyPH8h9UZ651ZvtEeujMpEt3HAsJ8fEu8",
  "key7": "3NdczhSRbf1Wom4ApqYNDCsjyjtMziWkLLj5Zkk83rbP2gxFbYzDkFLkkEyxECQoFhfCbrAi5CjDdfTZ389N8ccD",
  "key8": "KRRUxdnd67usVXWV6j31uYjhkkwKWWRnXqu1vpW3azxdPYrxSB2jzFr8rNX2VFgTgtfLNrw3MfYbb1zrX2Q34sY",
  "key9": "3DaV1WSpqYcyaHFNC2bG2bgTxiP6qZVtq1RwRpq71afLKgjLQEH5MdmDXAKkp27DkFMyvaPjJEkqnUKGRvEDE1zH",
  "key10": "5Si5hxDWMMBDC1Zt8qVcgzSGgdT5Lz7aj6f91TZXfxZqx1E6yCaK2yxUcCmqk7NHJTDRXhHA8azvm8ti4jevFTdr",
  "key11": "3qZGpgvEopsA6d7iydMhpg1c5CAZxj1QQKS3EFQcitzUf3S1KdqfPTWg6w2UgF5qMzQLcgtzY9qogrERW8y7faHb",
  "key12": "5Nd8ELD5mm2e5a8KDgQGx4xUn316ofHdT9A8BTgMbH1YUTPYkgf142shJKCqzBgdpAF41WJFaMc5wiCwF9WQNEvb",
  "key13": "3MNnMyqGaxkvXymnNidJiBxfhsWmnzqSWKgMPDhCNiiNyzdCAKGEgryXaRWNDFSH9dXCYWMDnqsFk83nAfxunVj1",
  "key14": "5vghNpmANSKZryR5FWAvbxp3RhJy9c9DQaB5aCNXVh26A4sSt36HhDkASoXYSnvhbLGXfSFPkUssk9hQo7ARDGQK",
  "key15": "B9j3GVb4SAJX4v8Seuw4xroqBnseiCoTYH4AVsWuqnpmZHwTeyDDVupNbphUS3LWygi3AXnGt3675AaZy2gEAbE",
  "key16": "BMHR2tEPoJ7jjjXRmuRjWTZLRSzM915PwBaB3tHn2xaurfz3N7WU3MmcWVWmeSrMNZNYRWBx6KQFFP72gS9LTPA",
  "key17": "5KxAeayaF8691uGKL13NYKKsYZwmHDoPr2H9hpWrfxFNejYTHikHcwoPZQjAbQBJfjmwph4xXoyTAPMZLryVXXd2",
  "key18": "GvYZgvPuGQVrw3vdGEtXLHfMG7VjpWBoS3Dzj8BMc1XrvLqjnuCH3N16wWLAzya4TdsTKMWyfXqvVXDQMSPnNcs",
  "key19": "2gjcuFgguLibJt9v7Wfe3dvyHDGDkisstzKB2x9xMzu2AeGLFJeo7trp4e9W44v62UNbzLWxxHGzgrEH69yKMWC1",
  "key20": "34GEfESGzhRhB41p5fwHmeawVAjC9KZqszU3Z7tqnV1ZsAd4VUqZgeQyXNxhhGCdf7R3mqZTnAoRcVQw8VN1hGpt",
  "key21": "62WVKJKzCbFVvQYKR52F9Z2vtST7URP2x6jufbLza2qSMNRSQ1Z5TfdpFuhsoASME7wB4jxQYp4FuxY993Vskv5Y",
  "key22": "5RLZiesRqTwFjHS8Wu9pjwhihEcidHcgWNhC1APchb5tkJr2V17nm8zJL7a8gTvDA4MEND7Apn1q1cfDoXN8bfiC",
  "key23": "NtGrxm4z3ijHhP2Y8pyF3Qw11rgPBwNeeWS8PcHGk4dP2d4zNSuYzho9xEP2u4dt8Ma541AdkqUkDgdhXdrh3rw",
  "key24": "2fLP9HwQnwA4UWQ6YPAxZJSfY7sJp8F27WHJZHGWspMHVEMshrhZWmbB462WyJCzYAnKbVMYAXUy33EcjsASR8Qj",
  "key25": "vz1BfJgBaUC9uPkSNwDfFx8P7zoZtDGU7jX1k5bMotcTvio1T9WGv7uMEQoE1f6F7Bgfjwo1NVNYEDL3qscSUeM",
  "key26": "hNNSBkjLA5JAFgEwKrGzsSG6rtQDEbD4NEvzYESTmdrubWbZeNG7BoxLccdUPzu69h2feeAiJRTWhuYTfREbFXd",
  "key27": "5FtM2N5zsJEz6JmR2Tuj2kdJ2g2cWUjwsz6iq2UsH4oHQMFfmcFeZNGbWTENPWRU39KA8mSHsCrDdEzpKuE2THdR",
  "key28": "3uEGU995rEHmTTDSV76nnSuHiATferGs2UNx9kHurNqzjgpZh6toymckQMEaxYJVKdoaBprkowDaGpoYa4AJK86B",
  "key29": "59wt4fPptHZyDAxhTwfjnFpfiH4nrZpB9e8kmF4xMRC45dKYMF9UoYc39zNLXEq8jX8o3oesNDFnExAXeDUEBfJ9",
  "key30": "3Vo88jQ1bDeViL795ZUvd8TkxJDzNLTa6qRvdG4Qf93rS4wNDbNu8ZkVPufZJpmNeZztePxTnYXVM2L4HvKSQf8T",
  "key31": "UfjNhUAbb7gSEz5SQpRQsy8RebWyCsToaRmGBEVMEu67hPjv7Dgebhw2zDfwu43GEbrd9gEmfHyK78Hep4S89T6",
  "key32": "bxvU9ZSyiUA1hncfeHufedtsu6uPMtTZEF7pAmgE6DgNyi1qfJcJS7hYvU7GfC6MSTYm7UU3v5hHFUT39cTeHWX",
  "key33": "4xfwrGeKsN4HoysArfeFMuX658KGp9siz1Wzni6diUkHSaeZG8MKoRD3iySX4nPmPZXnyinxUnG7ZgaCXbQBgfPP",
  "key34": "2Zu8kcUvadnBBYHvyNmxxtVnS9MAWiC4ehLZ8Fuu9ww1xYZ2egXcfvPJ9qSvAY21gbjvmph1pY2qePTrPwsbPwZL",
  "key35": "NDfdSAPkyjokzMSvft267aNJmtkVkoYQwH2mr3pG4XXmoZbLbv3dE1U6UBeRPLoYqcrh8d1CMcUpctMhmmXvAqG",
  "key36": "2Whw4ZtAg4FLAFjHBhRvcbYkhQKpiQcBzqmLLik67tMAyTM8jgzAtzpghcAuQFLpECL69w7rtk4NJT2Yi5mzaaBG",
  "key37": "5hbShdQZbhwWziwWbhub62r5xHDFzxXhRoMMknQ66MtD5YfXoE9RU1ZStf6UcZn5oiT268wYnUD5QWTpmpPDSETD",
  "key38": "qZnZ5qaD3qcY6B24CgrNSrZ56j7Kv2gwgziFnccx1rVetFPBZey6bP9TUBRy91V9LwtssYHTvP7Gf2BoXhFZVNt",
  "key39": "5u4PWR15i6t4K3cjU34iWUEty8wNa7So21CfPCSQ1HU24x9yaHQixDnWAwarK3voUQQimtoaP9asRzfZ2jP2Qo88",
  "key40": "4suKK4Beoxa2SLkNAPtGFjTbdUQLhMuXg4EJzvbZJSrCyYm6LmNphGq96Ymyz35bRJfBYwAn2tR3Z9C8VwcXzhpG",
  "key41": "4WTDXEkCcotkCo3qJKadfwBp7u59KN3ZfAQ3HpGoPbmVhQQKa9yRyUN1tQZAR2uQ4n5vgPuHpdUFGzN97Ex8J6Eo"
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
