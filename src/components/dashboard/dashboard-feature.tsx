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
    "3pcsCkM7ovR6Yf3jrnSMeTL4sxCoRB8W7jEoTPPHfkxEzH6qHV9LMJ3SA7iRmAeVsfuCT6BWfmvsPUuThrSVuRMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W8GVxGkEaKrtjUKbt8JZgSk4GZfEH451Ras2YCNyA6ZUZvUwYurDbRKnhrtYJoTqm9uttuer8ea7ZFABPmRKSZV",
  "key1": "Puu9GKxho5cxR1ARA3aR7jvYKjj9WUn4LYriGrcVrtgg8XQK1ThMakfcNVQrCAsmwoiWEeinfVgNdpemLWALgEf",
  "key2": "kANnomZ861WzXZqPa4Fr6NYQ6jGQD1nLxP4H4qAceHjctC6kRBHz7GJd73Rw2gKojeoabzNq5iUg4aDSk9HDYuc",
  "key3": "KfVvWWgguCzorBf1tsyu5FJsQn1mxc1YEbJp5FuWt1UgR5yh76ijRxHRGzjfLD332dZrqv4W67vpGo2ysv7UDof",
  "key4": "3dfxEK3o4PDd4S8aTbnX235QEh3Q1J7BM7jo2fUfYrTfruDx1rhdjpCsFuLa59SYeXCDpSC4aXhurRE9J88oyXXX",
  "key5": "2yo73Hair7Uxu9g7a4ba2jinQDJd4aRibtbNScFNzPoTFFLqo8V9i7J9CMkBvjcSdPWYJLbBdWEAmk14PcNHu3nT",
  "key6": "46999kNUd6nJaDRPMEbLgqkZrxfHwHB56GTys92TF95WeELPVUFNDMjo7Lq1cbLNMhbesKWgqDNL5EXyidTAh8q9",
  "key7": "5hbPmGKDnWv4pRkQ8RWVetWWxNDS45HvhAHVR68u94F9wap4LQkN6sXeATmggVjhVdkGtWY5onHMRwF2henwCZwq",
  "key8": "5LG1phr5QSuFrn3TkHDA42DX6VjFMYXixwHSXdx4Jfkn611y2KSKnTXvF7aXQpDQV9ma9Em24abDbMsuHPbdGpid",
  "key9": "dEaRST9qbPNHLxYcD7fPz9YhpzQ4EkAYRM7VLRGYz5Zmp6Yi5ehDghNVMaAfXbkSxjTvgdJhpKV3WBFpGcy86am",
  "key10": "45sXejRwCLDwtGxnrYnnmWyXmxy4mJ5FLkWyZaNukRC8Z2WVzvKRKxdoPybZTTzYqXbgkTP4SDABYDC1GToh3bPG",
  "key11": "2Sw4nkesTtHvox5sSWfJzRKeg7xLSfhFyePhACmWzWdoNrM78RsD5j9szsSTgrA3RpPRyHyu3kAPmASLcsyqXoaB",
  "key12": "5ycndqb93fbc3rJmJ57E67nbE4TEGHSW3htVWhH8Gz2DpSQF2DYB4uw1WrYBDSBzuWaCyDeAQt3tdqeTDELZHV1H",
  "key13": "iruY9xKEsjj9yLZscAzaanVXsAiXKvBVEGcabu4RQFv6tiGBqgfehaVbsY5SphQVEBR8ac81LRwGv41g7AfYA3v",
  "key14": "2LdoKgbmLGDmdWCuJiC8rbpktVZ7hMH8XrmXaeh246JAh21Hw5GMVnsEnQHC2ZyvuCiMdQPqS37nCLwNan6bJLdc",
  "key15": "WAi3oHxzacGuJUjWb5i6dW2UBLf1j42GD4hKxomYCRDxZ6GVqGW96B1zZGUTDMFYp9YC4hc5XKo38932eLVh71Y",
  "key16": "5rhWZpEYzVLr5cXdWn3P4CdbqhiiBWCjLvFJEwAyRo8smXhgDoJfMihL6hQHbp2dwBgrfhjj7EXVzuyHhpQ4o9WF",
  "key17": "3MXpMaWXF6tetana3x6esKSLgjbTpjDG5FS6Y9ouj9ZLWLnQ7JGuWNJghhNJXb2iRJqD5KV11GV8i1V9W2Xi2gKZ",
  "key18": "5Za1BM1ca2JU1HzLkZh8njQS4fhmoG7816RPtpmRcTeKZCGaNSH7Pc39m46RTCFVK5XXnYVd4dZFi1oERsjQEpPT",
  "key19": "5V5TYSLKRGn513PMLMmeqxE35iyyEeXtY2yRruBFvnkKy4qPa2tUG7hFh4go4NDs6KRHNEJSSBSjrT1pAVRVkDRx",
  "key20": "5LHrVe5Uxx34AwMMMPMRCrHA7PoxddD7UuJk4fowAoVyRtKLCpGcpXfR3BWueMaKCSfD3H3H2ye7Qf131jtcvTxC",
  "key21": "2MMxXR9pqJq36EoRhMdsbPLheWBrWwcXT7HPBx6z89CYS3soBVqPMpU1QtsMGSjhAnk6DEvufd28J7rJQmGxC5dS",
  "key22": "5BXXyWsrBrMRHDHNzyXv4yxx1up8dpkG31QAJtk2zqaPndEbYndYrf9q7a9eJnqRYEhHiHUDZqGQXjAamRQEtZQ1",
  "key23": "8iSSWLbKKUrexPTpF6zU25We6LaR8sq13dt9A4f4wEWwm5PAjGud6GpMKo6QjWv7gKc9aVRKDaMFF7kUMtdgvfw",
  "key24": "tuKfAg5pKdkftHNABpa8hpk5wJ9Y9DgsKWjimEZz7TR8kfZHySZNQ3RqKVSt28D8egzJ1ihY65BdhKy4mxjn6aM",
  "key25": "4apdZQVws6BzUKpS8wrbS7ekzCqi7S74FvAKC3s9vh8bhGg9iomEsogqtUw9efy5VcHSxgvANE6qrnga8qVsErBX",
  "key26": "JBVtwmb2ZJUKSH1gd8D8Hb3jLkRedRij5qPbEEsKvTCMdprCyT5w4DrTp2Yy6RQLZCc9VaEiEfBNebeFygo5tsY",
  "key27": "3vLRNK35X8UBa3X7bt7faD4EBvrVPEipHu5nxr7jFPzrQdVtSjqBp5nQT9xbDpo4wu3HiMqsPhgsPu9FdzBAGeyN",
  "key28": "5GRD1D3qrHkPA5hoitYaz4bvRaYYDiwLAL7H1wcJPs17gv1FPJXaqowFmKp7aeNsxhBZnUEHyHjgAs9NqfbUbymS",
  "key29": "cuafbu7BNh3dVqwBEGpB5zR2JsibA3hfALYpkqrhHkq8avq8PFojUcKpa5T94zKksqNjQzbkU4XgkX3cHvr2Lrn",
  "key30": "4SBHdpQFs2MfVnKE83fuyQVsxv7o7ayLPqFpqdihN5zx5asPAYurLYWFqLJjzP3Fz2webzvQDUXjKjFmyn2GM6n1",
  "key31": "57YcvULAyZZFqL9jY8bj3FZBiNob5s1frtboiyR17xeQwh8EGf78XLzupwF9MKXqdaqNABfPPHZmjMsn7kFTCTzu"
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
