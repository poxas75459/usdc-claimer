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
    "3vYfBJAsFDZdX1Q6URjaQDGDmL55YrKmSGnUFHkiiPGheQ8RNwztatek1iEZH5CspJ5M2wi7x5nCitCjKeHYT7WS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g4YN16Kd4mWAb2RMwKLw8UPhTFTXnoazszszrjAauQJeHCQmirW6xhfeQFUM8c7VicjaMLSAZvT5FW41sgofchZ",
  "key1": "3Z7XDcJc21KyHiz1BUFsHULWXr8BzEwCKV2LU79zzEsbhQV7Mh9kz6wWwdvn5ZQuSowTBXwgeDJJGdmwFdzT3XnF",
  "key2": "5BsUH19BnmPyp6EbGFU1wgGZpDLRxXRpuWj4wHSEAFghgyxryybHBurRNuiqUD6DGNQwmH1JKeR7d1DJsLcNTFr3",
  "key3": "3GuiXQ3Jss4wJapuZ6TGAJkY6AdhgCXFQChBEGYW93J8MqfAzNb7ND3u81RUq1KQVcWrGCfEpQXJcZvqKuabuJcj",
  "key4": "4uDjzAmv62GA6PFg51u3BCvpizoV8tMgpVB3c5QKfbQaFMQ2KVCsvAERPMGbsg8zwHbVo4MffLG9ZrTqv7hBRmAu",
  "key5": "57tGUFReeLtNR4Z4rmSCajnakKFWoVQMsuzAJR11utHNppUhs19T5xzYS2SkPct9vnN89tSuLJv2r485Wc9wtgUm",
  "key6": "2swQPpQKsBTwmfWnLEBdzGyca5XWAc2MfB3xfDrZ6FSANi8Wge1ZWK3KovRVeSepkVGaeCS8tCnWLnASzx6FhfBn",
  "key7": "3wtMryNPPyETWPzpFZ7VVkWJ3NCPEibseqk9NAYaLTBXkHBGjvAo1KA6PtY8Q3MVcAhmMHA5NoiYBQqA5mDKH3wr",
  "key8": "5cowojNcJVbDT2N7qdHmwgQA8HgKfJS8XrLRKbDWVwse6TinuzLFpZdJ3f2Di2e6dH8QjzPfuCMKubn282DHcd3M",
  "key9": "7bywRDn58c2jJBuHyht8zTDdupN1BqfeejSH1JksDVFu9nHsfGyaFozFp7FvXrwKrKvLFnBgzXs6mH4k7CoZFeu",
  "key10": "59Wk3y5cJb3K8NkvPsDG7cUmkCEq4fmnYMiVR39tAdYSykBE1QDZb6wdhEtD5a3yARtMjwqvpczh2NVt1NX6BC21",
  "key11": "2Q8wwQB3b38vWa8qw2e5L1v2HneNRpBLkxdrifEqkXSdf1fLM3BkGutkQviuR7okwuwGEWfcv9kJ6q9FF2rq7UjT",
  "key12": "dCpvjCqcLRK3E7qbWJQfqPjUAkAGnVqen4oB6Z6TbH3QRMkLN3mRBMUehWdAahiVh3tYvGanTi7zCvicUHauNGT",
  "key13": "5bKHTt8MnRqHWppxXs4rmHHTie17dSMGkfakbB9AmGywywqjS3RRbZzBWDYZSq7PF2RraLGrV5MAL8JAiTpmuxt4",
  "key14": "q4J3rTmLQT35JtHbf1Sf4V1rh1MpHBGnNLEhNZFvesRk6i9bkemL5LCcagBeBY5VjZn2HCt3zg8aE1GwpWcGfZg",
  "key15": "4wJzRXhDEGsF1nYWCT7RimFhvh4f8xVTeXnfTpyGhfKymjA9Y4eHoXzbFjDCjtrLBhcucxgD2FYEbU35mJfsrpw6",
  "key16": "4EXBWkNc91eVr6Cfh9GTqGXBGzHvhkMfY3W2Bzr1Hsgssp6GRrDh1g2eaEcvDAmhyggMUQaSnXW3rYcxCPiuyBfR",
  "key17": "414VrWy6hNKHvJqNDKwHDVMTsyUdhbQBkF5RRm91EWDgzUCAkQXtTQwE12EGtExvTaLxxvZME7KEjAkRhCKWVMN6",
  "key18": "3ymv9qpzCqQaF1ZWT3TJrCMRuVUKvN9Ye3k3NAn1JHb6J3J8vnXyqeQ43nVu1xtEk8NuZkjWTXWV2qzHKEko5gEw",
  "key19": "3aUqHAm1ppM4giTt1qVK7Ebbt7vpcWpjte1ugWG26QkZ9SgWkWstXVuRuAeWoUUurieJiywHU7jAzJZqLTnitFxq",
  "key20": "4vK3CfNdoUF1wqmJsYrMTsf2kTsTXtwBLVpc6ESQ6nYr53fqJkUyvHaKB7tHdW3LgvsxpRBA4ndgo8yqXbkQtBjf",
  "key21": "k2Q71Q3gYQhdaCWg4hYTbu1hRzRA29LWXuTixkqzrnP2wjzTR8gQC7m7UvT9DEw6NDHJvadi4zUgMAbiHqPjEUS",
  "key22": "5HvXgM3RL3XaDxdCnvNGsAhwnukXfhi7PdA7WHzroV7JSFYG5z15hwqDQmqZyXJoNJo377zfVGxjScRss1aLNmW8",
  "key23": "2WAzfEXzHLqNn3qGKPixS82e93nSg2JACXFt5Q5rm4Vk6i8sz91ix5zcNSrEQL1NTN6qQCuytt9JLzVLxcHWMsS7",
  "key24": "3iy6XZjZgz2515NH1R4jjcVx8T4bLhexaVLNwtdKzcmyFYRF8WgSv88kHpws39oCfsY9LBTUhBKnp1HocEcrxu2J"
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
