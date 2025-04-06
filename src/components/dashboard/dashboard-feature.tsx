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
    "56kgLQkhQzu7R7KQ6WRuP994BZwBHQ5rgbhSasuXz5zHNCKcDQMjj9hBfVyRaBbApAPJTgMNqe7vjFe4gP8QkKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rrNYyYWxxwe8frGcwk7rTTh56PetZAeM5LWzE9AozLTh6UBqfdbY1m1pqomRjhfC3zZz3DaP9JxBvmmpHg3nR7B",
  "key1": "YADWZPK8ijFdKeuMYCTMKcUqWvCGiFNhmMHWtRH7bimB2kmwjr21LdDkphU3aSdfEqi9vRxjEPoZB5W8TG7D6E4",
  "key2": "3MJ6j2jcKBBWEiLVeAkmUpyVuvKdeMkp6robKhcDDjHHgMn2yCadSiufEwqcmm3CoWAANwcSYTdZMC4gS2Qptihs",
  "key3": "54kWhZrTbzpGNpjwpyxdwfX5m6cXwTqw8EDkGZpEsZEMj7VufdBDdtYTPVjBxPVTkUPJmF2hdERSmFHbeC1MfMk9",
  "key4": "4QeLkqQDsoYwwwpMF9NBQqrFkT1wwwqPhv1CcnG1w8mEqjmP33ML14H6P3fVnKKgzF63QfdMeLNGP6k1NL5PXcwE",
  "key5": "59Es5ahqpaqJZ5zf8FKrKwf5KrmberQVAoH7fb1KQN2p4q4oLHoxwWacqqTtnAu8WUyZTZWupSeSJm9HsorMp37G",
  "key6": "edV1ac9yv4B7WQe2gpCKF2txK8dqp5dXGzoNRPhhMxcDF8KTD6vsfBCe8wti3McaKDgufwHKAzS5rSVdW1QfwDH",
  "key7": "6WRA57nDDsqjvNGQEX9XAjWvPzCVUV57jFM7c8RitTfXb1o59Zxh46U5THVbKGpSsLsHPNTekWvcVDUMqZwhjCp",
  "key8": "2PLZ91ADsHSXfMyZK2coZi8cP86KbX5mLSFHH1qCJ3wStncAKuYC1v1zp1934tttSWFqBWanVDgRb4nFr7mtSpUr",
  "key9": "4b2DjfYUzpNb8RbSYYNALEvjPVrnDJnbAp2cnmWsFJKYwPwYVsuZ6bf9axJK6euhRVpvjsQwHMbTrTJrwP3Fjvym",
  "key10": "2TFYTtnBwewu25JMFHWtGMAhJh4Ws6fhCdHVyezXp7d7UnrmNVmEuaJiZXNBFyBUocTwe7aejwmfDEybzkH4HEHr",
  "key11": "2iDUwCfoNpXhLs8XYvNGqNSmJpA6LJ1o2WnDoUnc4fP5nvCJoRo7sDZtNe3EhcU5JbZ3vy3sPxLExdecZe83GgtU",
  "key12": "4mZnZmFYKXYedPGvP52aygjfHDJ4ALgVdbU2MYgyu9Vh4c3S6RJNo5juTX1mi76fck8ThNMcS67DZvhvCAeFwFJ8",
  "key13": "PytGyv6LUvVszfDm7CjR6wpbPyGgX14QiEYGaxMuNvsBNX32fQAMPTN33zBtgYYShwBzuWGY4azuWkDGPCPCUj4",
  "key14": "5w34sCNeT8UYZRG9aW9tDgVa5DcMhYNWxPa2A3yxTh3yHaP9H8zfjN1gp4QRwrG15frC9ZxNYGB3kyGJcgmSfrfi",
  "key15": "4DpV7b5fRNYjb6iXJXKpg2EceaMDx9ggh86bxw4f5aJumRSfuudd8tzZW4f1BdBWYNYmcPotB2rP8NEna22FzBAb",
  "key16": "5KK7CJV9FxMEvMYtzfgmzP5wDCXSMAD5hjTzTA75P9kR7Gn79Nqf2V6bQDSucx8M7nK4maB2uy2U99UyFkZSk2wP",
  "key17": "2NExznhYwLPPXCk6Lnq3S6qPBw2skfqs59rKRLbP2uWLuJRbLdu4SMnybZVmDKJkAZSGR5XY3MdDpG9m9xc7rbWZ",
  "key18": "2faUwcqAdKHAKFYBZRyxRdAuhJUQksKJ6hKxP16YUYgguccgQ9souJRpThgGFQnHnHXKjRmT73t6GvftN9cyimkv",
  "key19": "4qLe98LbmwMKcG7DAnf8xWkthm99BYwVYVmWHdCJkNPYzFA45ZZvKPkzt5ui5BNH5gN6hRhK99Dz89ekNc9fbA4f",
  "key20": "2m9SiV5GpQAMiuykwqhjrfNaDGdNjdeYrQwJNrfHKKjBYrow71cjbnBXWHYCkyD5FibgfCpbDLpwFSmgMngR7n8h",
  "key21": "KbnkxqZqyFoYfPVxphXvPbPDGWwW35YLRPM2drPUFiucMpi7ibG1pYMf5zFAFwbBjh6PEXmwgAkVm9KCccyonXC",
  "key22": "4EA3LZw5wUhEPrQ9gUvPCp9oGjAAtEA6GA8pS4wDk8hnNTJbv9ssx5dADeQ3r58rWTP3MhRASEGKGAQxZW5fuMSG",
  "key23": "4jCxAYwjgnbBWyfaCHZppstF9ZmGnYdzSjQfcxDwAyKzvcaNsjoJ6De4uGEtqvUCpeszGQSF1MVJFZMGXvD6zUeX",
  "key24": "4DyFZ4SoDXqns4mWCrUPvJN5QB5JeVB6T1KY8P1jD5W47c7sC3XLYZDcgKKkYQ46VyhByc5NcBLRFvN3kZxvFUMc",
  "key25": "2Qs4djFNCEjjgSptwZ8i6uhQVc6mniR9KJjai55vourEhYqtrRs54qyLMRkybBuFqnJQppJ1JvMRxCEus7QXangp",
  "key26": "3DC5wHdPmiRNtWKEeQHvmkkfrTejqjeixcFxBd1g8XzXi57muf6mKqhB2gZbz6qKm2Jc3PX3wSTHNn36Hwrko2qE",
  "key27": "3CwRFe8AWUE665Df2ynSrTZQAT9HVJiTMzvUS8VhobFm19H2jyPvPGGcgxEDZPwcJ321DEnLafPe79L8Kd7X326p",
  "key28": "47FBTXrRJifusvSJcwTw5Nz6JuBRZ4hEU6KfosxzKAAzy2iJQtXXL9jc6baQuCNGdw2Cn4tejWGhkesATNK94R7t",
  "key29": "5meCng552ThsdvFj9sg7GRQTKWSFxmMWNCUiczLGLRsmPDuQEtx83DyC1mNnkwGkHo7KsQyg3mvNb54crqQPEG7a",
  "key30": "38nedj7rn3NTAT5T5dMnmfuKvUdS1xk5Za1uhusRqAvg8yKHAYnKa82xPpdqsRund95nPNK2zVQJ9yd7Lp9BDP7Y",
  "key31": "3aWWnpws1CWDDg7sMA3BwQ7xt7hri4MQVP2Z83m7ZFgwAKarS9WZt9mD33qAuNmAsj29FaiyW8dsEMJqEFqpnxNa"
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
