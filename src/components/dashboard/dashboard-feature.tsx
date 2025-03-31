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
    "5onJzjdjFLTEiLwt3Ug3GfL3FxhvhMTf3j97j5Q6YteZn74ADLXdCM9Z5v4Qu9P4ArubSfZpMEVDe5Zh7jtavw1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cAtSwovnDvYUNSLK7GeDqXrBL1p4FvvfzL7qKFGvz4kpjUhfh5DuJ7FRVAg2JKLUYGFYoPph5v8WjUvavi5tgTz",
  "key1": "4D2KXq6f4FhUmFJGmG144XAnrs99MPvP6pF7LUCb9nUjyRE92hsoqYofntKpHZwSg2KbHpe8ZnEaTyf1uvxJvhjm",
  "key2": "hiFXm19AQ7jbXoY4KAXxTy3Vs5i4hFRPX92VEVAyRdu47Xj3ZzwZBgKFpWDxLcSB5qjPo7adptzpSKuYWiKu6Zw",
  "key3": "5YK1zvHRuLMqy5d9tjZXjzFxGpSQqLSg42a4ufTyxRKTWeXSDRghnTZWNAiT3XAFBrcH77g9YC71a3GTq6UZ6Cyr",
  "key4": "4dCrEeoQYJzWRpH8T6bjg1SrH2J5sn2bFVeM6qx1rKeVE3GRE8Uc1g28A3HR2gmEntkaoKvEu8k5qMSAtxdoXZm2",
  "key5": "42KMT3qkK4jYQYKXPJudAMCJ5uS7v1zJtpVN4eCVwpjs1H2X1TZKffxiHruYrqhpQPVjPtov7BJwcSWoHQhJYX8u",
  "key6": "2bqY6FFpff5rSGMVDaj6HDm3Nn38LEANkxqi5n3HBphBUSsiqLRvUvN4saP8YzTXZVy4GgmD6jeWcFvNN7V5euWq",
  "key7": "3Z2nznZK4dgd9UtQfhSUzZZjHM23R8jRahFJVEdo8tLedvmzUd2VWuR2HtryayS3mHsfFVfJ8vYkq76hwwycy3ZK",
  "key8": "4DVrLESMMUxwPUq2uf8NF3WrqaguCZASNUeUUHXt7kYTmREJRA7xkvJuxHPQgKw3b7BxeK85NEyjj5nVwiGi6RyB",
  "key9": "65ktQ5QBEzyjrmpw4RoapAFnsc9jTofx6gJJjg1z9EAob8xUAqYYUb8aJEzQ7kDBmZNjyRuVohutBccKQk1s6n9S",
  "key10": "489j5gW33Fp95N2XAp9Evnbd9ftD1ovCS14yAZBoEMtRMgoicMKiWTgUtejwE5ihV7ef9xvsHiQDRKQsrDTnkzpV",
  "key11": "3QmbiMi9ihju8U6z12AcCFJXZCsyGYXqwdvFDyFxs8V7WxU5jtMsEa6VtS1oAahDgkLSeMwqNz78i7G7v9qWU44N",
  "key12": "MZZpiGbaSq6WKeZN6Tht7jgFzUapFnhxoCazgtMvBSmGd8UKHhqKHq7eKQGLffsCm4fP66tqBF8TL8Sow8VwHVF",
  "key13": "3xZGDqyCCKj1VrhLgqJt2YgcxGFz8y8U55we5bEzhobnjQXdiQaRkALUAJuceqCDNRkxEp9qJeUfPXbac2i4TMT8",
  "key14": "5F44RnoDvznjFEdDMTNTJbkzkXUMo9upPPzwakyCc5rYEYkkvLN4oioxiDNWs4JRHoG3dmUsiMaBEfwUaeepJFxX",
  "key15": "PXeYF79gtAScJjaLLbwfR6dU1Cmb3H8nCa8Ad3puuNPZWnyZwgVEPmBZ92qaED4ihzKKHDfBDGhYgZZHhr8duee",
  "key16": "41NUb71he3TcS1NjTz6Bn49tV82dyYt2AxpMgfGDGqdWzdMwzY7YPSA2KfUQcc2GPRBktvdUdERTZkaAm5FwYyFv",
  "key17": "4k2BYjnjkWzqVucFXwZ2EQVG9tkGx1Dbrnt28MCewEN1DFKXnnMuSpjsf4A7T3Tba3q1Txm6sKgxYQuJW56R1KoZ",
  "key18": "2kyG9psCP3HZJPBcPYsmXtcpDx3kKjpr966b5tju8r4MuTvzyaAwM4a5fJJoZMxMctEPVcMdLjhCcMLg6axbaqzM",
  "key19": "tKjWyxazJssuYtMj3zr2DytoCnmWYiRgEW8rgQYyX4yPm277iKd93MuR6Z6sZiKTJzJi4YorLDVBs2K9PjeS3iL",
  "key20": "KjP4t2DG7ekZLm9j2KEFPFTBckUnDqKnzpZiaTKEBCHGnfkrXFtiqytaUAbaoWYL6znmiEwqyQodZ2B5wWSmebW",
  "key21": "2mcNkqW8Sb8FP4uJxdwh4xnVzfnasBoDk93fVUqcjBvccVMq8dLKq4VNwBwth7w95c1yrgDfYDxsLtJqUkBCHpad",
  "key22": "9NZr3WGCjayLC1tyQrJUdpASdzgAmdY3GcFEnCDhaJv1aHsc8KYEC5Whu8mB5eSfd3iYJP3jdKWZCbLgrmpnrcB",
  "key23": "67nmJuNp9NnShFK2HTzFNNMEU2XAzH8fc6A1jDQvAedHjvctzn4RaSna7Ma9SSDepbQ18PfXq8Q6pQJuDmoMwZDa",
  "key24": "3NuyCdwy89XT4tLpvnEiALtjEga4QDw5Ps7GivKx5PuUWNUvnupXRBHRsJSpknw2qjNCBKkwCVovYhD7iRgcnxZF",
  "key25": "2EUEtfKn1iaTE2CpnXv2Ku4CLjwiGbDjuLi7nHqukfELwCLQasmjzdiESj4tE9ZAEwa9Sdmjmj6raV25T9caCYMe",
  "key26": "2XgNPoCrP3byVYydjQ5AyyMQ8TuF2toXRYCTjBCp39tCj25K1Qw7Z9kCZFrgKSeqanBLxWEPBjgzUvzfTEH6mVzh",
  "key27": "392DoV33FVRMCZggxgZZ8TZX6pszzK5PoC2nWRJ6e9SYovsa54wUTUR1CsAhach9H4HyJFLCd7aEUFN8rugqAeuT",
  "key28": "LPGb5Bc4z5XvTMbXhegtHc5bYJUSJFgKKLoggXKknZNBSXa3tsBTrP91CugTJcX894387qdHc4TB63CC3ChvYVD",
  "key29": "5g9SszqFXhaCBMrz4wbphvZwJ616LJNFMEHg3E4evJhFwHTr39HVD2uih6mCKsgRUASPv4fR3P9MuaAnmWQcjXaN"
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
