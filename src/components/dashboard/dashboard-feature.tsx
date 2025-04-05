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
    "4AwAQn6uNnUEGqBJCmNUaobmG24k9rwMihUE3hwoV8Fp7YsUbGdrx2hM3zL2VCcKejr5nrXTAc3sKSuUwZFwwWC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PJKmP288H3TomNNUA3tnwjePZxUftbA2x4MjqV8KXwm1tipyDzFnVhvsioUvtR5LpwRAKdz4mgHEC1Gtj3A3VV4",
  "key1": "4tNAqNVMRcRz66DYhwAAXdVQWyebjvQAaYc33r1C4iac5DgGhDMd6dexpSqgrgyzAwxct2tAyujKC7ya74W7MUXr",
  "key2": "d4XHC67pyUrLMEDHJuBcR2ME48kZp6i4wP7yd18DxJ8mcpE1ezNfamFfRCHynUD4GqGLFjxRZo8CFUgVStygEHY",
  "key3": "4LMioQLD4drpMaMY5pBwmsZG2SgYNwmuCgG9HxZ5L6FR4AeKvQMfUfeMfPkRcgkGTxX6eARgKcAd1VABbEHAxm3r",
  "key4": "6568PYXtaWF1zbzA7LZjFYaDXznTCSAdRApjbCfTfKe5sTPCeJeZP7V8Yj78vmFmV5PF7JGrkfvdoWsCcqAwZcpB",
  "key5": "3sf1t72MsexTRyBcgXheVFVP7y3GxjMjrriaNYfp7vqCFajzv115Nx3747nXrr4QuphwMNqU7T7x4jLzMtq2pjoF",
  "key6": "5AVmMYBupPvv1ttSsqxEPREh197771eeC9W5usVTnbZ312uAkUHNPTDKWpjE3debd8bwZu9VrVAfZ9b8hwLnspPi",
  "key7": "tBQexSsigAwF1yFo2oxGPiasknnp4U9h9kqjmrbJmaPvbrXv6BeSc4B8iuky5EBxgxGH6ihfpnoxixvbFzpc8JK",
  "key8": "4d8NKTtxUe8E23Z6kGk1FBBiBT7WTE5x5QzvPB41dadiZWMyw8z3qeed2GBaLBrsGd6eeX3i13W6vrrwCgR9V64q",
  "key9": "28Fyw2YfpcFAZKinXneUpSK7uXrboVppqzcWaeigAvDinC9guJt97Pqc7RogTYu9geFNJcva84opTrtZNRDKdxnx",
  "key10": "TTuoh8i5P3tGdaMUFc14ihgeQWgkjcVSneujZueFEwCvpM3rpXjUQvprWe56N5mZnNqPKdry8rxrsjvYT5Q9by4",
  "key11": "4zc5BppfcsFF419vWd5QxFvH5ZEZ592TfuBPf6XEkgCrCUxTP59hamYvroGFqGxRhpY3ZtHtVPPGuhbwtFPdicjZ",
  "key12": "5io9b3mKSKf1NkMs8hANTzmynh8gx6ZFuBgYW6YMTrSbedjQffDh2HtEswm458NqQxYz5J7qKWojPWyoZVatQag5",
  "key13": "5MkvwfCNP8QCUsgaL5j63s545Kgz6qREAiMtLPR63Nby4Ngn2dsmpVJFvxLF8gRUBcebM1XdUSzZb3JoH4wWDqyJ",
  "key14": "5cBaNE9BZhWQLU24EgwUdByHMVoiyXQQT27FJWqjRztsnuH6reMiFdE1qUtQvkpjTL6piwPFQVfQGnfqwp71aCgW",
  "key15": "2Vj2j2RQYWjNiB8bV9aRt5ntCKScLVzRjrSFjhEt5xAa8HuwWGy44zWem7UbbX6fRntP5GBqtAU82LUx5gY87G8e",
  "key16": "4m8SE1hETgVeYRny7csnivucHUstcLDJtsfhg3iWCo7XHw7TPhYc6muuK74TSToMdFRhhmef5yYkJgmUuTVWZhoH",
  "key17": "4W1DMUZbGTZBkXj3b7fbcGrwVgmYbfhx1ffHjU3WYaau59zL4DMvd8vWTyj4PbEeRvXoQov9q79LM7ZAoZ1DE9uJ",
  "key18": "5Lk8eckfGX6uxCw8v3Csd6Qkr5SgA8KMr3YiMDKTSNMtndojJqsUg9eHkEX1kr2rYELbZzHc9RMHdEMCgAN7aMwR",
  "key19": "58XCLPjEgv7WFWCdpqLz2j7oMoGP8f8YgLkjqXtmR7LqfyMMLWS6fRdxkYtX5ndw8rAvya5LQvKWbnTnoPytrwCx",
  "key20": "2s1kerLBoK5FVNZfMnQx9GMPHEtzSaTvftHr9buAK5msDMQerPdYMN5P6SvgUS9Dctyg8XNfJ3cToWaZEn1nwPai",
  "key21": "VFCbLbGHvAhM6UE1GZUYeh8YJpV7VF9Hrs2LXcs1yEagZUJsx5CMdjF23XRaJJGtTmCEA7Bd3w8h6iXoWnmtxcW",
  "key22": "5WHvvoXLuFtYrgfmqW6kWR36oM1qrvs37K68NvjQhd2iZtZwBrCXP5WGn7kHxB3qSUntvY9wQ6tS2U7sQMv2riHy",
  "key23": "4jyKYzp1iT9VSyekVKyBKB6jm1byktFeHLterevbi8sjS6n2xKw52Am98HJ32kZ6YDJVeYgJKcA9MkTEk1hLJFr1",
  "key24": "o5QZm6RpT3QEtFzGCZDfbZtaSRxW3bMx3SdRLa7QXz5yUeiDDgPCqMsmjE7c6McZkeUeAuJGDFKppQfVw6oSh5i",
  "key25": "3UU5WqRDbUfBJ8E5eucL211DEvv9kBT7T6gPPfvAeZ9zHQp416TVePUGjWJM9kUrUZyLQ7NxE9PZBTwYtkCfABFp",
  "key26": "5h91wkwanGqjpyTqGg8AJ3XbPfmVab3nqkCHNeESMJULTQb9vogBoAT6gRSK231QPoeTNkCQxodUsp9REeZk1VRf",
  "key27": "2Xm153RvEh44WhSAkg7oba68NLYTRXhHJdYU38KXw8qdzm9QPHPVCfe7oRfbVifFgvx6CJ7VcL6XddYug3qNsnQh",
  "key28": "5UwiLRoTfYv2ftWkufRpbh3bZqSSkQbyzCbrqXyPwZqpNhG1ED6NrkHUQkKYxnd1xurKHrDhbQSJMb6p6pGtHg83",
  "key29": "gpnqM25bEkpLHMKboxwopyjQ1w5P6As5Kb1BQqLPicpas1qVrr4JfAuYEPNwUPBMGpzNvTTLFEfFGCPqrVwRg3X",
  "key30": "2HRwZdsj65aWC8Pt15g8nZACtG73UWSwcsQzQDtBrNP7JWSgZS9fN6c4w67d1eBp3u1GK2vPs2HZWYXHzq6wPXgA",
  "key31": "s1NtvcNA6GMm4pKNgZNxM4HLW33U48Fj7qScdjRtYukDXRFdRqsQKMq5dCvnvRrhSM8Cu76jmELtGke4kgeaQMW"
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
