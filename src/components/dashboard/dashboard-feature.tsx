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
    "3CW6r12CruTpzmb63bFQRQwK9xZbFQ1esy72BWXU8P7jU46KM93UgkMHBzDxbA2We5ZNRAXNhMWG3H2YHCZMx5iZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VEzNEZr92ZQ6k7XSAMRiup7rZ7PQLhs9CbMb7tCjycFt3QyemjPbkSLrj3fj3oaHZgyDRPjeVZWSm2geNXMAnrN",
  "key1": "4GgrypG4YV9jNYvgnEdHXBDDBJNzJB4cx5KSvHperHQ48qszdXzdeVJuUMykWMdjF5CbraGyiWX33icNQN5fks7e",
  "key2": "5kddzkWVDhtweZKvAPv2FmMsCp7txQxGmmSbHMNerkPyRfGXWsUH9xWN6FYSjNz7aTMhyuofwgFhqBg3VJbLKAsT",
  "key3": "5RR6VQWfZUAXnBHbihA6zxKN6vdnFXkdPGNNx3f62Y2onW6CitT3jejXLRnYsPto8Q3BCXHJbsFWzrKaYJaUmEdB",
  "key4": "2RUeQBYv8Q3D5UdJqzu1QNWpZhWfvNR3He4HNZZaP4U9rz1K5vFMPQNfZxVMopkcE3Ug1iddHVTFUsYWQhucP1ZM",
  "key5": "4TmBWDYkhiAv9bCvKJxRnGzUeG4J5hwBCmKPtW5jaisWGHwLKoND8C3qsv7z3djUGRw2BZ7q5Q9Rn8qMAFiK8r8u",
  "key6": "3T32CtYYubbGx68KdXJpgfd9D3RgFMxuPZx6DM5Xgjzz2ZHsggWfxxcQ7cbiVKXgq5kqbavvVVcosDRL4BKcRBvU",
  "key7": "5NQ4bqFUL3MCeYLi9e1QtpxMCC27d5zqPDhcW5DBXN19nyqXWm9dkMYwp7BsJXLFtmRkxmbzweLrMu77j7NhpLEy",
  "key8": "3RjD3A8oJtMiya4Hwr6UVn78QaGkRTdDPHtydJcPNHbEytoB5CoznwvCr5j5QrXP6eD1wqhXWQhs5eQZzdLpqky1",
  "key9": "4aqT4rUQAjkPYigRx9waLmrEp5FiYqrbEUzSCNUjRPHtBZKeVEcFqo51PDzBewXjwMewc5KNhL3DjSfndUrsheJH",
  "key10": "3gc6f8iWafTUBgS7nZ8zeDtJyR1jRR2YEbbXRgPF3iiUAbanQBVvPM1b1u3eFG1LeFFwcKLhx8PDSoQdVTgtL5Aa",
  "key11": "4bVkaz1jDsWP8tu8niXK1xqLnqYr4cL8ve89wLSmrhbTggmQ1LTwkUh9kditKzHE8X6EyEDXwwicNymiB8BHYwj6",
  "key12": "4SKgcE5t2rXbtxCZ1eafxQmLdeKxugW8yqDBuG6m8xmGHaZJtYjCJC6LDcuXYaVhoyjQ9fncXnor1E6YVziugwym",
  "key13": "52TwLtvSa4z9aCnd9mhNPhTY1oHebGcS5ceQ8Jskn9gp69PthAJNx4QSH18RcMPJ6e4tJep4qN7a5cBa9awpT37X",
  "key14": "4VgC7iGZhbEn75qfWJuaoVsGghYnsUQpmdMHurQL7MMHZsYcHLH7hjxGCAyAyNZW6qCLAi5eedobpq8CoU89hKTc",
  "key15": "3gq7dfYRyAi15VBZpLdxGrz9SdFAex6fG69EcL5x9NbsdWvcgJ2rhkHsz1B5SqaNNVByksgaXr6KRo1yJhuyKw34",
  "key16": "5CumMWwwbpKV3d7aqYQHHegpFojmduDwKKSUmW2hoXNfZCw6Eef6xCBkdwup5eef443ghti3t1GY2nLfDh8RjiVF",
  "key17": "43RHZV5ww6ra2M4dbAtFMEGtjR4pdsX6YpyeKZp3VH1vbhUDrofG19FKECFNHKG3JgmA1mKLAcaWFUBqf66xrbSu",
  "key18": "2PaSuybmaxTTsahbdHCikYApgcnWT4tBXA1kgHyC2QWBeavoAN4cEffb1bnMGhSLL8oU8K6jxpWBGm2i2odwCpq2",
  "key19": "U2KzYBguKS1qyo4HLpkjWyX1R8zXTqqKXdi9huYyt1vKmGwosGhmgCyrVfXUUc4VgnAwmkxYHc3zdBsDGCjPFJR",
  "key20": "3QFaYqrua38U7NJxDf6Ypq7odA2jnXk4y1JrSPyDqCKdMTqKo2uru4YuBuKECKBC2jRuVzBG38phFxY6NDbiYyv7",
  "key21": "MMtSNuXPmbcVdiNHYgb14qwVsm7zHqD6iHX12XtPunzVk6EGXeKVjnczKVEKi8zVd5g1v2z8rH3ej7b8yuZrUtK",
  "key22": "4Ge5mdtEx7QNjK39yCBbaFMNs4w9fEAZTZpJFECX2jkgJSXX3FPz3Tq2iGLYqyWMqFvKqRtAWwxnc1oArw2o453q",
  "key23": "5QouJNieNzr5uCHQybzEzJd1cd7ERA8ZfLcwXzX5fpL6FcDX8HbDhjMwY9zgF95P22axPN9MdijsYj1kyLQzbttw",
  "key24": "4YLMx5en17UtofS3dtre5E3d8hPEPzafrwz2VxGTabbXKJbp7WTgW2FmfzMPy2gLaZ8Jd1WNUWKajdsBrVcaduvZ",
  "key25": "4oPDUxXSzyt87C2Eb8cpbZUjXgzs23mXtkpRwPQ88mTVYCXkCnxmj3RiKu87czbUzRsfTzk8rQhtHKtmMjtKs3TS",
  "key26": "5qfJvzoPMjJYCs97GeAU9dQNhuUPippNe9pF2qAfW7wDc2hUis8N9xBmPPFVggaAFtpFrakAqXQL1x5R4V71rh8R",
  "key27": "34Ap7v26PEuqeNjkdERNqD1AmWAVju3UmG6JL2qpD3pXYoh8SkcfBcSViwsEDCGPQXP3SBG4KzJv2gZ7nYB9W28U",
  "key28": "2Prv9jep8WxU2bL4QBeQWeA1HcWEn9Dgunsb9kWFKDXvCtyjotzgfymSpG81UBDJq3x1BUJboDdfqbbKk7KwAnuN",
  "key29": "3YdCUPTSpbFzEeVxrYPTK6HBeQKRDHfN7p1DvivqnirV1yKPAWPvJJsyJgBSqi6K9MZFsxFMyJfw8xj6nx1Qv1Ev",
  "key30": "VzF7oJENhK2M7Ua9gA6F3TFshjL3mz8dqQ6GxWXd6YkeH8Xk9yvH919Rw8aDCN7JsdfyMsYP7XMghFRY57U1f76",
  "key31": "3vMZbcoNMYAkWPvf2bwhotMdfJ8SyS6Jptt3QPA6ogzYf6gPQvxLKnfMGt5CU3njC8Jp8BgnKNCerWRbhJgV3J8D",
  "key32": "4AjEDFNn1db7b5cAtGMCmqL5yZEEaacJEq7skVkySe11pxiYaghEJhdgnCjaVQ9UHcpW6qVYWRjk7jrTo8xyjpQj",
  "key33": "4CM2SsG7nHCMZmCak4Sp1WMDkxXrYWYMCg1twviiTsH3iTrUDNN8RDtR2wnSW9UnQCmCDbe558AegfUURE7HAkJz",
  "key34": "2eH5jB7ryqyEDiCUuG6fzZp3JFzzgQ47JaWW8dFXXMa3tMY3HyRgMZ3H8sfoFYEx5Kwk1sQJy1iSNw3tYowjRhKF"
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
