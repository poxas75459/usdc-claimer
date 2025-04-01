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
    "2BVybof2na7yLa6mc1qP5uCEXrAoXv4cLpc9sk9QkxjFzKhzajtMzcfMTRTJWq3K4Zr5akrtgi1ypjeUTtNG6tkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q1oaXNYqF6Pmyp1PNoCEj3PnAQMEY1yxMeXTgRLiTGfqFwdw9PpsThpgodnni76rZkVDPvvDUnvs4i6miZ2wiK5",
  "key1": "5VwDNUvWDaMHUFEk2HsuRPxhnZYAJFozVZCB9EqDMkSmkRWh8eVjqoPj1ncN6vtELQFLHrrCywPsMhvDMMud6Sa4",
  "key2": "uc7yMmajXFmfqpt4Cz4fhasn6aTh4iFM1gXrajzdPV7ZRCaLjXrFUgAWRRbH7wobyMcqL1GJ6Vx7TN3MRG1VHm7",
  "key3": "3nLLtBjcHo9kwp4CF3ydDXMukEUJftPPotTrPVo38zRPjwuMab5mxQjW1Kh3TfRMEsv53YPyvtHwnPwu4RJnmxtc",
  "key4": "4X5Y7Jf7quS8uv3rGscAFngzQQyBWiouyQ6RZPtpN2sw5931pusiEp44SsGdK8aHYPTWmSvCA3adz7ZSaBdTLvEA",
  "key5": "2o4A88wc52YuUnBmckbuSvbccMNsrZVssegrRdQe8L54vo3qXmHAgNLs9iXpnm6MgWuTt5g3hhBcC6tCzHecyC4o",
  "key6": "wUDiUA51rF4Wia6EQ9sBwgQvuk7ncuqmRaKWPobXM7haC7MnaV7os4VkmwUcPUKziqkrDNXfBNXFGksJcUAdzdz",
  "key7": "5NcnwZXoVoEApNcJF5AJ95SuKyShpXjsSX35pXGw8fkCZYmBD8hExHvDdg8dZZBHR8z2giYED8BTLmAq4fAukPE8",
  "key8": "4ZnjyuriLyw4wvo3cejrkbHNv7ckvLy8JZ81QgMd961pHz5pgWbsPdnoJX77voRNNxCHn5FeZFo8yFDxfCN9xCmU",
  "key9": "5MyRzrB5gWScwkgfHVgTSxcD2V7rrwj4H4FBXqoBZRmSpqSJsYDPZ8iLufcFKAWwkn5wu7RiJ5owdXjfVnmk18DV",
  "key10": "5jkVRNRrYY4SfSiHZTUtdGh1z1j3mBkTNbimeuXuDGiCeuZHEHh8znMoSjh4a6J9ng4pMokPKPFkhAxRq9ZZNLRv",
  "key11": "3kdkwUFGgweQQRyARWyiTxeAZCiYEFNPYPUVB7CfUrThE6AQU3tbAJ4u2NRmSaG6VxCUYQu7Ckjx7xWo4Bo3oCjg",
  "key12": "2sik8H3KrvTAyuVXgD7q86iZVyvcRvSQc1PqbkwVgZJGmTP7TDwqwEDr8ELkDY3jHFiqcHAwWiNY9pnDhmd6auoQ",
  "key13": "3mKpPiTcnN45rPWJqFoABMaoLmdFE64Pzz4QtuBQhNrhNpCKqHCpABpdaXGibZRdv3kYLtXmXVb5QZqg7TWh9fHM",
  "key14": "4PHdkaerrF5Jb9R1ZnXXqtmcLTMETTjS5WbLSr5SnGGVSdeBDyWtQASKKMJKXJqNA74BmkWLvqr9RztG2WPZP16U",
  "key15": "4J6p8d53AQA6mK6ixprYdWUJJNQigEjhSFn5y5cyK5aCC8gpfQ98f6khBjW3aNvefMRK9qm7i3sgVnWcJiUEEoS4",
  "key16": "5wdKxmWN9VDDxSkWwKgAkYHch9KWwdrS3KXuiSFkxFKoi2rj79Z9esD1LnFdF3fkHgCESBdyJgBp2UW64HyCt2rU",
  "key17": "3n5GfDwWQ41Tu4N9xa3i1jWyLtrASHy7LFb2QPBhvKJNMce96ymcCVyU9hY3suGC9XndewuMgZZTzLhuVu9f2eRQ",
  "key18": "FcSeW7hmpA2zuek6fBR2xWg2y4YYw9GYWAKKMXkcpU7wc2CYEaigKDw7Hi86airzPaj7qHWoB72rvq8NGyvGdhX",
  "key19": "2V1WAJu3pjeMmm1TpEu7E3UGeH4ZntGCVBDs48Xt9EHYkrmdX6vGXZR3UfMGLNNLKn9RGNXtHe6dCNunb7cvz2TQ",
  "key20": "3jp3hwWYcPCdXaRDdqhzsHt5avMB8pKJXScACfDhZDz4RbERDXEhfBF4mD3iQw2Ptdss3RXosh4gyXueEsYP1FMs",
  "key21": "CX3rgH5DLQbsVBRExfdF6oTqWZm2H7kdjjic4Z3qEP4BUWHcdFyFo9fkSS6uDoLeVd1tEiqJV1Qk9irLfZ1PQmM",
  "key22": "4yKaz1YmQKkr1qHA8inwnRAUvPgMszpTErnWCmq3kvJjwrcbGwg3fwWmMsubUvXWKejhYybCgMhCtRvgFFYogzD8",
  "key23": "4aLdGKeMdFSeyRbjgB8f62zbPxjbyGbA4wT6Gsm7dyHjZ1D6Bgf2dpc2Nexoep3v83vcsAcWyAiyeuY8iw3yjNYD",
  "key24": "4f4qBkYRNjp7bVUjrHijTTP4v7tn4NsuQjPxfH9J1nKDnULzuSvq7PRWmby5Hx5zP5RGjAXkK3Jwd7p4LbYxj4FE",
  "key25": "2knr36KTjJKF1CNmriaEgqiGCSecqyKxXfPhXXN4zRDaj9TvUyyL6pZypQGVtohFDU3gJkkPpdhusdApPC1MQSYg"
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
