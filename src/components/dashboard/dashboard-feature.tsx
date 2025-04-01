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
    "23xY1F8is5Qk8CTLg8XBAb7RsDwiQg88NrNSj52s3d7ryv6MpiW9QyFpv1iXp8a7MrsAKF78kBFoPuBx3ijFE3HA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sPAmEZio9nBxqpRa1PfZay1j25aLsbYXnZAF4dpb1LhdtPgKG9yv5mFLrSbiV2ktsuuXhLxcXwtdZD97jgRYMCX",
  "key1": "eyYrLL1CFM2ZGCYnuxXH9zSVmjAGr1ZnYUXPotZ5urNeqTfCxHUZS3eRiV4NbDsV5qQusXKyD2SkL2KEQjNK9kc",
  "key2": "BUzzWqGzwzna87jR3YLg7L56kDxH99PfxYJYidmagMk69g4dmat1MWbeDzs584wCgnuyaX9fb1GrbMK5HbPRjLR",
  "key3": "45h6ojfnd3nBaC4rrGD7gGYxLDYVKu2J3JhSvsZGfaZF4nq3RySWeCPcPAWpbEZofCUQfYWZCPy2ccs64XFE1bMX",
  "key4": "34jS8rTzg9dvVvcx3hsu2rJ521TTjw6fn8ou6engDEYdPSMjhSt6kN6Uq74UrUnSvnWPfLPUEZgoy6qEvE6uuqag",
  "key5": "3WDyxHKEothKAEwY37TxtSBEodyPNLUATzCUnXKPgJmbP9amgfL1wrkQDZ1nL2TYkK2wGrhmDQ7FtnNqw8L5EvP2",
  "key6": "4W2XbL2acXAypuPkQ48dSR8pd2VLF7kKWCHbbSW7TSqyBsYxhyTDViLNbXtnKZg74SYpyg1ENMFPDYyjMajxxorr",
  "key7": "4gD1xZjM6QLzgERhEyUWPYzrQvDorWySTx98CrzrCsxoFZN8mSsGWFZUddf4TtVhQVi1PnAyCT8gs3u8dy8hwqYV",
  "key8": "43dRTDNRL3Mqg36SGve9Wn1MoGZ6nL1msdWp1AnQiSqnHYiREHsTrm2ERsSopVye9K6sGpvWNtZoypJAdPGb11qG",
  "key9": "3trKgM2vkuzmh6F8KucYh4dPSNiX6KaZnWLmAFR5hDTxb1FZCtheq94g8xo7g9TheBbpn6wK4mn8LWrh9VuWrGBi",
  "key10": "25wAcE5vYbgmRhSjRRAGJTT3uHaqmfCsXVib95JVXefkE3M8BBA6WKFwTSeVwrDB4AX2fSCDvkBdkrTpk8gEt3bD",
  "key11": "2LL25GdtZbsibJmHToQ4PuE881oCVu9trs6DhqUDseV8LUKBGB6GRP7hNBmTe3udofGhS49fDmfrPrPvfVKdwgRt",
  "key12": "pZdquxHxvam6PbuMkke2vy8RRY32YAg2RYKBN2n27bUrsPoGTj3S45PCV5gqB4QoGxiQsdzF2WH4NNuXBbn9Cma",
  "key13": "5PXy8rp3EKfXE4xHEUYx1h9WdNDvmVWhTTCgdLVzD8mdgDHKL2y4VdEbrSFA7ec7RZU8ZjnKvMFYBbyFo5V7hMam",
  "key14": "2TKp6FXFP6JuX4iVN5a3yLYcwqfd2KmHewendcyv8tBNBNBpbXWKCpgFzmzwxRF4HYpTqHKvovgxBQq5nibsALwu",
  "key15": "dKxd4EPoWPNQVLyMTLiRQps28pVkks9khRuY5u9JCYmyryWAw6VJqeUa4qxQsN6ZKEoDNu1fe7VLskdLt2nb3qG",
  "key16": "2fHpjfSy2oQbWksA1hvDFLu1wGCT5oXndfv8LXgdh4YZPRaoGPmwTENu5r6RdbbrtDhJm8Pai3kmx81w9jv2sfMf",
  "key17": "43TqKBgySnyKGWshTycKqeSapnNbFXkxnWyzUPB4AzzMXLSW98rndjNy8KT1WJNAQzMaZy85qDZVRohhN6f3hdTP",
  "key18": "3Cz3pFqD87WwGoTni9Tj6nnC2ibM34VJE7mknPx353yEEB5i5CxZYiznWbW7R2MuQBkCLk3dxBTZGAuy5ifBZiJb",
  "key19": "4yZFW2RYGhQ8jFLmXfgJP6pim9nrTqWUD4GytDhdaEeofiXXTT2ob4PNNhhpPNTzDVe8sGuRFXs8tuSJDdAYG9ya",
  "key20": "5wpjosG9YfWeCjjJ4BvMus5hCjFVk4Ps2JG8hHxqdZTEYfKY9DzqFmt3wafm4cUUXSuJZ9hwZqAwemqGeH3aJ8gj",
  "key21": "5PU3peyNMQ2r4PiTX2isW491zb56BnpfQFNjqHVyxVhVsEi8xcu6KUP7TQz6FPiYhsj2TsGdgwoFHW7CubLhQvD9",
  "key22": "5tk1NHwu3ubYAf8exEU4XDSmGjzrXTjG6HBniAtDRmYo2w97v9eZvrTMYuNYCV6wTe2UwYk2eZb7BWsAR47HHUw8",
  "key23": "HKC9LsY19yPtT7KKTu3zbDzgHiZ3aFtKPJJyDncRoXdCztTmWLg9ccz3p8hAobESjJxkNqxqhUtCaWwwdzBhMEz",
  "key24": "ksSSSZcaXDAGuUeJ2B4W7oSuwQ22XUp8qHhuQWed7PxJWSJ6PEYXaLtrGx541zm5pa2iuNLbB89dmkJLTKNHRVz",
  "key25": "4EsSjY7WnxrZc2ADC8ns5wbX69fQbbfaWvrtobfuzekMtY2MuRxcGi7k7BkP9bujDxQpVy8mNYkWJikvFuFyPzTa"
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
