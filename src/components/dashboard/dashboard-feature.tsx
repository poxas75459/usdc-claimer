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
    "4gEpj4D2zSYu24C2G7nE7KhDxsWVDbXzc26zQwjKfEhXsgbPChoLCMhDNnnr8CQtTHmPtFf5CQo5Vt2S86hJL7a2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vuc6rVuiuUCG9h78vpN58oCDtQaCpzpELi6jrMuAxaRfMUfQuWMQD6KZssuJctKGPB7Vvmg1sDaVpMcZoy4fR8W",
  "key1": "2DMzXnBo3RUnpHQEdAv1GjaCUSjyKkDQfAFUeSwm7mMdagjN3BRL2aCyMwmW6Y7zFGVVe7wD8GeUpwoa7BHsfCPk",
  "key2": "575D87wmaT4cQoVRY5qKsjALxmSuC5fMhSqbuR8X1mdibqfp7aHJuRRCg2TJnGE9FfRYWWB1XibrHXfBhjTfG4CW",
  "key3": "2K3vJFvr5EyHmyQ8utCxZqCqzAgjnRwgv5Hc3xTpSQfdzjueP52oUxPRoLvpocFcmgQv3PLVGe8CwNSjpNgFfrSV",
  "key4": "4vFMjxnAXdTEeNvdQNsFiG3mquTxsj7Y1M4Fj7qUgLHognMZD6ts14PqFJH5ZmXhZmoNeFZ3ZtodyPt64FnzKKfD",
  "key5": "srjAu66g9vYfbxt9UaL9udLTzzUahdBVzAz3uCsAbdTSHTndDjp1EXWt7KpmEFyiKqCQRV1vSBzk6M6FURh8c1v",
  "key6": "23wHkmpGzAnfV6Qa3B1w6HHyUFkZhNSdk5iGJSV9Z5fM9anBf4sM29zyc9rhbBkZh9V31cAovcx2umjNKtNUKfAG",
  "key7": "1BJRfTy6R8dpdQwNsiaLN6dJha279ishajZgi7eV9eYurxfgNrbco83f9Q5wvZFcKq5cYaV16RvCtYQMvBWam8G",
  "key8": "2zHmGeaoSpaLBDZqadepaCFp6W63UNtzdJhehknnaMadrKXmHdkNKDixRWgPSoKpjLWQXKoY5HBaJk2smkWpVJ7a",
  "key9": "5rLmuXVsd5XGLeYo6UBuuCg11ybwXpe5PhMRrdAMCKc8C8tTB6ZmzvJF89qDtiXoFGxsNKhq19mxP1sFEEjneJdD",
  "key10": "5T5ZULwGBZiJcRCdRBgga9Lp1jVtFkqSTUF8vX13VSozWnooZP4U96cw42qPrjCK5BkYJrLsLtGrcpCQxpYMkcGJ",
  "key11": "3qA4hpmK6APmrPyCE2Hwu7ZJmHjzS8667yHhx8insmvy9vaZBBvJMavTa6ja1u2eydbRXHGTQr8wsyMwvRGVSeTq",
  "key12": "DRpYd6TTj7qKLf2kC5YJDP3i3GPbsKfNRrWZpEETGuNjF35YR7XsmfiCSLQTo2E7pyVTRFD7kynhcW26n29vjmg",
  "key13": "4HkivMjxQhMVk5dz33wr3SpxKV1ZbKHFPooN1RBCkAjMFr8DTH8cXJxGh8ALgCcFmqEeQgNpvaFrPqZSvkSGTErD",
  "key14": "23LyXVfaNhzgs9Npd75gaRX2bXbNcaA8T7KJh8wGnoAT9eAMxoWFsu3fETP5jNqwcEvMTXEXVdYC1RUjMBL4h7E1",
  "key15": "5oveubvYnyoYoo1xVxcGq5NtZC2Hw8ARHxMUTHxDQKseK7aT92UCtLrvGpMvBBXsTZWpNkSKqLS7ji16ijFZaWiT",
  "key16": "59ZeuypzzmdHXpNnSi98rByvnvdia9Zg1d4uuYXNSRYKPEhpZXGpWQcpLBS5rEST1aoKjNxmzmkaTQZCsy18Z6Rc",
  "key17": "3cwcuQBTc5BF686zadpadczdeRx2fQBYn4iW6zfyecGJNcHftWqnJAuGDJzQCdHpijxf7j2Jb8Qot1vgCJ1NYynS",
  "key18": "3cH49nobacPZL1gmEiPnZUgeWjKo8EQj4nrZUdZqP9MFkweinH8KT5sascQncqq7BonQ2BufSLrNfPsBtxpW2HXT",
  "key19": "5Z9QcGCzeXMHLZVWYpKZXPaApnKURLFeBzrgxPPh7qXR2mrM9ztncxqYvWswXkWrg9MuRkKkHJMmfebhDC923bxv",
  "key20": "rmjJoNRVNHMXNQKEXjgiM6DwB96sR5wUfvLFj6qVHsNL9ETVGtgSDoEZPf1pJXrwu3P5b6bg4mTTqQEVmNXbVqv",
  "key21": "5d2Nu46v6ujiDC5TZe3qMFgmqaVFy3VYeecdHQSSmFyLC1EHg36t4XE2SLPhEG3unje5Xd9GDdijHkDrDWBThYFJ",
  "key22": "5vHSPzvmNTPidEenymcxZoStAQmKK44QZ2JDF7WsAReARSPfn4gXtJyXpWBtiZKdixFYeSVXUfBcBMZ6NCy1kAeh",
  "key23": "47NcNZscBqfNvmqu9fEjVCzb95s73519fiPDfTskQB61TUMmxeXBetsnpLKBX1MykTu3JgU5iebKanozxTEQEU7h",
  "key24": "5EjTn5KTdX6BcnQPFacfZHj4vVcsmmze66Q6zggs9dbvS75izWVTugQGDBuZxVt7nCL8PsFbw2XMkDW1mP4f8qZv",
  "key25": "5ZT62G6ekqtkUWimjeJxCyxuY9oniVzpHyn7Z4cXodKLSV5H6t3CGNZdxBFNyvZi43o7UYt7Yri1Gs5aHJDcnhnA",
  "key26": "2bLZ8SAMiamZfaf7kgEK5gvQLr9WN5oCMKeLaEz3rmUXWPijYQFV88CF2chW1q8aafNCgMVruHgcpKDsPA2jcS1g",
  "key27": "2RASMdpWHyNU8QCZXkazXDvZwiZAFnW774jKtVK9hnkz7dKhCwzwGzqX8yzQ1tST4gps1zkLatTjy2jgMxCbWyeS"
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
