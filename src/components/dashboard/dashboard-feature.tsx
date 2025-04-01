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
    "4X5oDSa6H7zwwxKiVHBQo99gL91U6n8qts7wdaupr5eFWBbgwHL8BY5East6tM3KT7Zniq3kxsiB1ospPk7He7xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AQW4VXfpC5vRoUmpNBiLMsn9aizCn1Zg7SigXojp7EHNi43NKn7BNtgR2WvtfZhVqTscP2NrC6jHK7UWM6WCfe5",
  "key1": "24Mt15KapgS1WUucuwh7bxgnH1pjtuBE53yRcpr8wD2QX2bmfZgKWXmVgrJH5GGx9cs7igwpqu1sVgoCPW6URnMN",
  "key2": "2B3aVN9KX9GxZ5W9HMLmdz2mNEeQK144mrYRnYQAt5LjK2uNPjX8x8Yp6ktPUyRYsVPkngQkgwScNHXrH9pioVSG",
  "key3": "ZJcgxfDBDh3P4oRwuusTQbGhyc9ZnWqMZK1jZZ8DeZxkwrKeumPBKcRh97txjD5UypwvoqxLJTRjLLxNpt4mzWM",
  "key4": "5CEhu86ySaiEbVGe4ZC4sN3QoB6GLrAPh1HCynhdJNkpoYTeTKwN8XoNweV3syRoPPSuDGSxxrLsEUSefTvZP8oP",
  "key5": "2YPFCHWikGtrrkUGYaqHbS3bLQU24B4ydtmPj6PPRvc4QJWkrFFDhdwY6LaKjp6VoWFvUzxXN9zVVbNTBAmTGgg4",
  "key6": "67fAes3wnrdpH3CQsYGdKqMjjJ5qGyv4dQcHurL22hQaYhxJcPQAWrPVoPZ28t4bNh8qh5QNkx8Vev6jUNuU9HSy",
  "key7": "35RqCMGb6RmqdyBAfCsqara57rEpP4MxipTCxqazf57WoeJud49ven6ZKxXCmCYJsPVs6a6mcVYdT5ZEXuFmRsUV",
  "key8": "2xBFFwqYfLvgAVFXdXioNHJoJwgLnrNFGothb61Y3o7bSSN1nkbyFb8sopEKbkHN8UwUtdTdZEBgEtnMpo5AtkpM",
  "key9": "5fcVY5k9jNovX4hg4n4chc8s3JXwKAQQ6hzRixkKA9UEwTnQ6EDA6nJg1o7vKLc7hr9oJ6VJaohXAe8k1Bs2hhXB",
  "key10": "67QEeMtix9EHxkWgHYscQW2ZHStDkitMCroZ2nWgnnPLd9fVL6qvWB8UkyKnT2jqfMzYgEArXYiWHoQ3xgT5MmNF",
  "key11": "MkKYL9oMfDfoBt49Xtk2tKFRgXVUTDbypC5rkm8XK21626WT7x66HoC2JL3NEWdP7La6cBy1mHNSAKftfGcyyZo",
  "key12": "5CdTqvZyyGfwargu7FLDSCAhaBFnTH1EgLmmafZaRkHV24oDXwvkfVNbkdwnvqc9sffQEqjvuuWZEZGvhRhQv8e",
  "key13": "3odsTovL34QwUSmS8QkPdibARL3mBFRNA1jV5bk8VaMpKqtMzyA2H7qz42wBoTyoXApEQ8Yb4dcQiEcAWc4q1UF6",
  "key14": "4RDQd9FJiE3sMeS89MKLHCna3fePdWvD6yGr9dZttNUojp9AfQtUi28E7sRnF2hXQcyUaPhQjQzxwd8Wtfyv6SHF",
  "key15": "5RbGx5a7YtPAFXfyFGGZCzNivYSfxC9MEE2FouMBxu3ZgzjtuCzcaV14btQyUvLJfvcYvdfm4EUCqiJnsUaiJ4cM",
  "key16": "PMRFchMKARZaPZXAcCQRggZfBrKCFUUE3U6h1H69aKCzHbQbGRtoWKHwrEUweDBggh4qL3tsCwfU41KfbRGTKB2",
  "key17": "4tvYh4DM66TXvFZ7uf1on81k7PabTWjKpZCD4M78himVMF9CKue5X5WecEungHqybss1jnie3vooKWKb3YsmduYM",
  "key18": "KwRju424Hsu7DJyhHfn8hSB9aaJhZrn4icRR7WppeoYky6i4eVxBAt3SwiBWjqgpNrBTfdWEVyNCotrYPoe7ZrA",
  "key19": "25LUzCMiWjc8TAfHLEQxiUYPNEoyVos4bqVZ65pwPo7XMAmSLKKFikt7LJTiqtB5Y9JoZiyV17qHiZP6JNbupEGZ",
  "key20": "2VaJV3X4dPfrnwNWbzWQ2u9efFGVdS2jF5GxvtT16twgbBBUNYniqgsNUhorFrBaubTmUZe96gCPBB8sPxPW3EFf",
  "key21": "5jjpgn84Z5YUFH8AuU4WaChgaEXxg7DkumovHUsASJLHDvpqAHYzsmgtyFDpFRNrv7JBP9MHKP8xj7GZycfPS9i2",
  "key22": "674owFkJftH6GjxrfyAnJxHyCXpDAXXcmk8MEK7vZ7UtQZr9pBDukM7qQmmoQoZ6ziE63F5nVnWrFwJrhpacre2x",
  "key23": "RbudgUJPzE6wriy2CqDcXUxqvPFSmWqY8tsczGxQB7ts8TFJysXX43nwQAJDJLQeBtFWL7Endw93XA77LpDnL2J",
  "key24": "5oduGKQBKr1UAgdG1sWVT7jUkqztiffKW6HCYMvjDXF56rtoCnoKCwr3zj9mg7foVpVjoi2r2pTfwnrbByPgWJJH",
  "key25": "VEPut39NnydEjb3FYGoCozTwL4gNXQEoocVn2YTW3AARTQ2PGjRtnPndQmrCg1CMte9SJSsGyLUeTgLSQbQERjf",
  "key26": "3Dzej8x7MCPFT5pDTsfsZqpEh1tF7aCbiT2XUZFfne5abtn6QMqDJrwzR2ddgvyaPiyVAWiBnpn3SEQAUD5Ffk3E",
  "key27": "2cZzjVAcn3yRffDpwLcQ9ZiG7z3aUwmGzg1oJm8DLH4PRhL1kAQfse1iuWhSQ5zvVaHVFitnY2K6XpCQggnfFsmp",
  "key28": "5etY7KWLzS8GurUuiFHSSFmcL5mxkArADkWx4UW3qPWzkJqSsYZFEYzaumBowoF8J9iEX78ej8HmiJ4DQ7UKkxj8",
  "key29": "4eKC8cdjm9p6MX2VDSymXf5nbMBRbtsrT3gcBTZodV4fPPd7S9LepqProcfGwoed46orCrcdjAogHFSpoVJSWGWU",
  "key30": "5dsKCjcf82g4Bd2z3br9rMaj32S2JSm35cHxzqT2Adst4jmoevoNsayrcgT4u2d2g4FfAjJkyWLndKrGESn4Tc6i",
  "key31": "53h7cneGYVKtER6tWvtPtENjrP3vm87KAJ4Y6z7M1a9t7J4ZJKGn6G7QjTEduKST7HEgXQfF95gT8PowLcfREtRG",
  "key32": "4d3h2JfgCkSKaPB4XkKMoJ4Q3C327DAmYjV37G3MrCzxSFiS7iucWkRSmC9zdkVGst9ijpWtM2jtAxV7sBsEgdFF",
  "key33": "5JKFxzqsdYUuCN5EkwVzXgxy4scfiqTZ9UkWN2Q7rJUZxiECkomu56f6inpQtCD7XBrwiiik6fp8Vu2oX9wBETCZ"
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
