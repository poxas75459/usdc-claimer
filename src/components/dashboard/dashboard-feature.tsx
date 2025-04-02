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
    "2KD8vuvZyCJMEHDFfRQgr5HmaBoQ18B6mUYTKNod3ubWNfsPHSoS5Y99spRsyPDSCdGrzqYVartpgsVtMX9A1NAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V6etV96L8axhq3D92EdspXZuDL6v2zJLd7STqLWErtk7B4j9VPi4yiWZJqtbkpEey9SLLGbgRbtnk4cZbHHKgaP",
  "key1": "4pdcGXFNHVofZLwCadDDohfvBhvsdZSFPacL9zejdBigrKj4vRM3GCHB2wkFsQLSx9rGJ1qWGbss93RT8Mqy2SHd",
  "key2": "3FtDSa5HzcpLJbSoAPoWb7DqNLypsDmRkntR66zawjCFH3GBKqfVUMtW3EKxrD6bdfafZeMb9ScnLoFE2DPPuomG",
  "key3": "NQj9n5CAD1fJ6P11YifvhfsCSi1umJ47ErxZhqo2xuJxn2t1nFfbNgH5s5tKkyTKQDd1xcQw31D21VJroDM73Ub",
  "key4": "BWnGP3rHTBLKFwCTJ3LcsS5AhX4DKojCcMpXFR3LWSh9sD6XyGKuB7uN3FH13KEqYqrcyaNgjeUKnHF44gdbvRV",
  "key5": "27ipdVJNRjLLVhdY3kdtYmC5KEM591ipmjJhH5AcTNjfaHwaU1wLCoV5X7qrQPokM4V4DgeG2HrMbhLZEo7axq1p",
  "key6": "2Q5vJz4apgUeC7Cdcrd8kDFLM3bXQDmky7UZauLarathCziq5SZzBQvzt4dxRd7Wyui3xEtm6Qc8tr4vsucJ8Maq",
  "key7": "2TfYFk8gxrS12cGeRBAYWQG5hsnmPuegrXuJunGY7FnRvntx4pAv7f9CknWwJXkFFFP5oTQW6eAMyJRgQWrioWA7",
  "key8": "3FNfUxzBdsZosPMxgb2AWeMFXevtY7gYzksFZbpcmwbVWguvgUHmP2jwESBmRiJRUffFykh1QyCuxQT5XzFav8FZ",
  "key9": "3BgPwEiaV8g1JQkfZZcQy26A8UMsAVAyAXizz63pp3ffWqyHV1WmtqRJH4UgntT5T1Roi2XVZQc1WSwU7x4q1bfF",
  "key10": "3FmuYttstho2RRyYh5JyzyNNuGvYx9F1TYwSsgwGLLfPXruZDx3F8JFPShhu2cQkAkmRrH1dYPYMpBER3trqrBPE",
  "key11": "4WHcG7pocoBZKsBuqZnvVThKGLXfXt826aWbgkTRGNhqdpDvE1U5AWjj95f92oEvHz3FPfjoU5UrraD3pT8FfU8h",
  "key12": "6D3HPr7PbQAfoRLXbJr9JtdZeuUtGZLppMhyp66BKBVqAv3fDxVWJwwb1nqDKC7qzQaBdzq96P1E7Kxm34t1APv",
  "key13": "2TSiQFqdJgZjvUjw4gecWSCVr3vpiSqXz22CZbaz9QmWmq6PGntm9oqMk4EqrsztcTyYUhWoPAUeyzqxJvPGJtTN",
  "key14": "41EpJReJUhLW7JM5WS7zMf9NdJYfhSZuE4seJ1Y4TqrfZadz5x5SyfSmYjg9AU8CdciC4vyMovecrxiZx14YSku2",
  "key15": "3WnmgawAGk29C6GrjjzDHFyh3a9dz1jHHayLGkMyKKik7TPLRzVbZwy9zHPYv6oLKAynvJSMVStv9dw5vZyzjfS8",
  "key16": "2GhsvUUcYQzpR63KhAS7iSTT3BsVXm2wfMcpFbaHoo8S7oJ8L1w7KmP1CuWn9ZNzrkYZsccXVPxftwedYZX9mqpX",
  "key17": "3GnhC3aZBMxPxH8rCcnR7MPbV1jcN6NQMiutEPg34TqDAeZ28bHadJoQCyW85PMYt7pMubWo8T8pttgvH844QdL1",
  "key18": "45SQpA1tGfiGU3xc4B4TUdEXy4r6gQixeZQQ31HDjQC6GxU8P9SxrPrzE4eKd3eAvw1aaWhVGK5nMKSjqQSVMTa1",
  "key19": "588CCTqCKmCp7EsgHiBopM3C955efa7U3TK6FPPYA94Ufs1sp4W4y2UD9xJfAVHggPqnCLdw3WSi4a5xzCLPkouF",
  "key20": "3aHDv4oHXsCp1zvfK8r37ZX75LLpUoVFHrVBCso37dLxW2ZGbAsDkrEbMzqChndefnc7XJe3GGfXcjpdM2Vd8y9j",
  "key21": "4nKx9JaooCWDeCbQyM5zL6ApJEekSUhwuL6GAnpW7BZjQky3wJJJyUfr4yb6eZ4hEcJ6yKRVMtPCAcYe6K955aVc",
  "key22": "S87JQbHpSLZzmChEcgo4naQhz5rCycwmQds5BP6mLoyy4ybkukc7T8kdGmL564nmUUUNpARY5LDQ4kqhBFcc2Rk",
  "key23": "28ta6ngCrhYbN1iHHJrASyDAGSRbkv8xZMpxASfvAGB2cySwyPYpW3rwHxGJRdwZMK7zbRQpF33yQnADCMP4hVng",
  "key24": "5nLFCHP73e7e9J3sDm3Mot5H2pXH9LTT6KYjrcUANonbzBGLBUZB57YeXPjcR9fEuvw2E5B7pKv2r5Bsrbr1WyY4",
  "key25": "5ztkggqTt4k8gaLNpdfYA7AXyp6csszb4PEehKS5d7nW7Vu9YCPALc3GSQWdbUYZzKh8K9EZuPEfV6WcxuMdyQ7F",
  "key26": "2aZkE9dV5MoPsKgZvUrEx7KGVrNCsW2Sjj58ZuWdvMsCPnRtxbreCqddwZovPFgbHsMKTr2aodSZshGZce6FcZEk",
  "key27": "21EgDbYn5YiRajfiHRvTHhCCGEo6Kpmo2wNmbK9XQ5WWWHraHfDvqGfJhnh8FAwcRwx2WjGxHGeN1NM3NXxswTY1",
  "key28": "5DbJuLdbCPsXkDdTT4ZnaozrZzJaJN4FPZnB5eBvcZQefwM9hraAD7hJiiKP1wctbb9R9SPB1eHGFJGHnb5m5jTk",
  "key29": "CiCTAa9gusc1f5RqLwKGJqkAzFdevLzELWkxdeVsVQTWtpqj3R2mRAgxsDtUdpgferxmNBV286bLApfPSzgcrMj",
  "key30": "3Hm6QZH92qy2gDLFnrWNecPRy1joBiRmQREnRMxQGGQDgBP9wiKzWVMTaugCdbsc6EwBsZjvtTuzBzTgFJrwfzA7",
  "key31": "2LCk1RKvvcHnV47uXFvKYXc4z4vSybPoQjacCqk3Fj76jQP2uDtvs1BaakFYf41nyUWsb3H9JTSXLeCWUMHWRgbN",
  "key32": "5efsWBQke5sCxgy1XXgXZ9QMaDwpeyxLQcHcWtPgmmJwH1ZS8iVoNF5T8Vxr1mpvBaAQ8Q1eCP9UGnNHA4bu973p"
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
