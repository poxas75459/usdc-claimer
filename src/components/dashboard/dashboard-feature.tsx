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
    "4azsmQ35EBhAL5h6tqYMjCHUvj84s2PGcP5qkRkyZ1gKbZVusn8NmzVxjBqvqbLyddCKDpZx8PQfRGnjvDWHboS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ht5vzE75Fqzuo2CgqVX8Ckbshh2Y1rnSDtRERgqm8cUUBgYonmjkbKm1byXuvrYLGZ12xxFaby5UJ5pg29rdzmT",
  "key1": "5wrh69SxmLEbphG7pQhfu4zj3XfxJmUSREyURtqm5nN2LjtR4nwywprWUyxHhNRkZ2AFjyW76aBEvFjNcRZvAsAM",
  "key2": "2yiaPkdC9VwUdbvc5JW8Dfxe7UTmEJY2pk3v2rJavVryuvFuR7uuXw4oKcLLVr7rogUhbBqfZmL3WK6Zssc5vCA4",
  "key3": "crVGRiRgudpjXMWkb8bjWecq6WDPpaPTzwU4VArzBeeGb6F2HLmfqnoQMzK9abWh6Xz9RkxfKWXPpvKAba3m7KN",
  "key4": "2SUFkpHfUe5rG33SUEoeT9MbdJMda9xhrbd58GHzGGSMA8qAMgC2m6ekWA69FuFTDtH4pRmvrEz8u36sVLa2oYv2",
  "key5": "5gRCNWKvERLddjsz3twyy3eRZKygevR1NUnrLKZcw1UXjmGQEbp5fT4yEixKJi9bsmV1Aq9BhmpUzZBX7CqKjXiH",
  "key6": "32svfN8f9g4M6uaaZ69FDCGjCyTkRy4QsfxaBQ5kTxLuXe9PGXjiFKnEW36r1C6VxA4v7ThuGYEPxRfNxabCdKXr",
  "key7": "23VaKGen3DXH5dSde7gXWn6YegFnnqfqkAnhpzBTngYCkwLTLUSYW4npNt2JQ5NNyYjqCw27EALcQ5PnVGTfdoZw",
  "key8": "44PJmvtA6GJKN512jybZG1iuXVGCk8vEHa9SnkbD5wAQfZpaHxo4MTEWiGZ1Mvw5cvU3AsmVCLU2SWuVsPCuyniY",
  "key9": "625BNoSGWWKoHw2JmQ31XpRrVC6DHnjN749WV814jzh2BcsGMHhLdGaYSYKUnfDUYpUJXc5oktkRiweyZN1MfbiC",
  "key10": "61unLj7j4QPf3Zjmy7kGaL5CHLNe8v4PMbWVAHA9w5cfynWd2r9M5JyfriyXxe9ZwS5fRTxSXggzVpHGKmErSz5K",
  "key11": "5RVqfEwMbPdkUkfWWbfnyJD6LdGSJqH7zoPuWuMR6mHstg53KgqDfVtpTADHR8FDy7wHhnf4i1eYDS41s2bRasvi",
  "key12": "3YMZvVfLHScwL2k2t9qVD26pS9DEyMVvdgjreFc6e7Q4R6UngeVaTBuM2QSzpZRcE6UkFGqCjgBehm1F13EYJbH6",
  "key13": "3PhAHFVCVS4Fjntfi5BMXPe2wvMJtm5HbwrEw8BbY3tqcu215iseJgA7Nnd62Kdb6F5HQd85dy717kWkzKDMTHRg",
  "key14": "4BWkcVRH6Hf8NmYPuRMVjbm3dP6C4AiUHNrtwKxBqK1pzxfQgmtBGKLcZs5Pfj7QrDKxjG7pBtwSyUWvjYd6nCmF",
  "key15": "27F6SAWE5he3EhfsDKi5UeP8f4JaMv9DRFDqkkeW9EnK2Nm2SKCZnRMTNEyadzNHtxjnVUW2QyU9pLQmFubppCmw",
  "key16": "3WCPz17RB4HqgHJN3b181ipTrU3FQSCghE4XnsSPxmvSoPh7iFgBHSxMVbfzkoSJ2oKgAwqz8Ui6a6NuDcjWFtHj",
  "key17": "5oYgDgVb2EMJQQjD1ReveEiTjMUXCNmuvcrobNCQw5vWnaFhCrkM2RJaRyEXtTC3XWX6mrDZt5XTpz8Rj2X1wbA1",
  "key18": "5hvFAvbxQA5kQnkuN3bmAgYjMPXzFanMcsyRwD74KJ7Qb4MFbbbw74qCVeXXZmWAVcGbRG7kwdNsBCyGcbQUUAhf",
  "key19": "466X8w4VrVrHDh4ByNbq25BFkbMw5Awyi93xpRZoZSmjZbq7SZ3YptSir8ZetbbDQD9QKaTP9UdNGu5u4J69vXyM",
  "key20": "22wcUp34ciRyuVyu4YR1GG5cycLXxsqW9bg4SiW44ytespJbykUwncSJCovXDU2cyFXGqQMcR9GYq1rpscho9AYa",
  "key21": "45SoYjLeQjKpEjQgLk9EV2MvUa3LvmEfuXVeQ1x5WB2DYLpKyq2avrcvFYBwvDFjdUZYCgD53geiSkDrAmRdKFkn",
  "key22": "3zgLDgbRyMSSYMgf8vfyG7fqhXu6venUeay2gnNmxsGYB6EUbifGwZ8pqA1azEcXJTHT69FiL3eXDWkQFoaoCSeM",
  "key23": "5BKJJNwN4DBgwjLtxEGhcRaUYrLCFyUNpYtxsYZg9qTWbKgYxsvv4fYM7p9Qj52BG2QpctG8wxGy3i9tokKu32qD",
  "key24": "3A4c4sMDmkGsdBJqZst2d3xHHAKe1CZjpECH4FWLMF16PRhvACnQrrzmVGKRxkXuyuNpEZorr4HRBZGjYP5F1fk3",
  "key25": "qBFwzud7FTyUA9qHDwqB4wJKo4zeCZt5Db6rVnSkzGQYVEQgsByXLTrc2t2LUydCuRbjPsExW1hAnViYZ5jGhTK",
  "key26": "27YGsxHrAHuFcCPida9fJvmzVJZagUXWoSnG2NfCfVjhm5cMrdwpeX9ELTKXWgyNiX6czeNjKtzf4UwZ6T36FeUs",
  "key27": "46GfiBdejFy6CRR52nKXEBic6CNJortAvEYcgf1VcsY4Z5zrHTm9FrXRnks2u58FmQMKiMgRGQX1ppeh6VQ9HPEj"
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
