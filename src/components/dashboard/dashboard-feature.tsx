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
    "3NqLYYK9marNpMyLB4MojjwaQ3ZqsHjfMS1BbHFeK1YvsZ2DobHv8WJ3nGynD8M42pvZJRzXLjLg3tj2VQ1BieEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C7WCxVayrpG8NFWz69sJqfvTp4XLKQ6K3N4XpjseBko9iNcAAyeCcqTnQeZjzaGXoeGgt9ivWWvXwyYZ2EBxCNP",
  "key1": "2NqnSmegrMV25PFb3YiqybNy3Ausdzs5643YWhZDwWBVc4jcQocudv3MqtiomW5VxoEsAxWrexEzRkBSGtATYFiE",
  "key2": "m17kdtoThS26WZghbsJEq9S5Bq6mGn5nh4TX2bKki2yU82dD33LBRqf6KMEBbBW99q6cQ7iCpnYj7uVwCQy5rTW",
  "key3": "63PuRiZsaF5qXsorwPxw8FmHCM6ZSwuMg89N4pJayBtKr5WegoW36JKusefpJ1s7Fr3SUZcLRMwu5aWfcrVMD28w",
  "key4": "327k4CL2cyAUrVqRiqXjX7MhDeqxDuADxryYLxsMNzshwRszwHGAr8cik9LMpaGUF1mnv6iewLbWQ5HsmWRxLpf6",
  "key5": "3kNXKLYJu3pXnMvmeaKVJD91V7rtGYhTNrJyUq9cPodQjEFFJNCgBCUfGHb1FVUKrhtZhQxdiPwCfUKvRgUKXtDT",
  "key6": "9oJgrNf7rHomwzWR3euz6YR3a4VNjRfqzbzVtGkdMu24Xyd2N8MVoj9AusFnmzDBUmYkDiM8KMDqt2KoVmFRAxL",
  "key7": "2jjJyVfcjmZj1uzVhbZ1rvnWVdgMfSQzcMs5o9ktQkDMpjikszLd8AUeVgopbwcm2QiAVuJuuXrQ5jmsYeL3h2py",
  "key8": "5MCMVngs7tfBfhbTEtVqFEf8ViaeyGCsnj6JhS6eLsLNs16CoVHS8HgVioFshG4FYa5U73irRpz5XFEhivYBkr5j",
  "key9": "42U9vBzjLQnc7AvZbv9dQ2AUwCUT321SK21mmfzgF1QxdWuEK2uTHuLSXHDdG8aWQsdVhNht3be6VFwyjTHRbMJv",
  "key10": "2cWuraVbiSAZp6aa59J274b8Sj6qJT4C58yhyN3Kzov2JqjRxJvnVLXQ2TwKeUN7LmjkoieqsBCA4viEPmBJ14Qr",
  "key11": "5yenzg5WRvTq6CNynUqWQdBbVXrZ22JkFtthESH1EEHnrWyC5bHyDzEUKVYwCFdnYYv2F9BrCbbjS5TxRRrS9yvX",
  "key12": "5FmvLCkMaXeQKPZkZmzBC4HwDtacrKznrmJpiMsJCrXxBqzNbWApQ3GFcmQotzFY54VjMgFwCZvuoexypQ2K1mM3",
  "key13": "5wWE8avZCUUgzdYj9euGKBVVL1B6QHQNVGwtMoMcgcqzZNmdqWmx9HZ3P28Df8r9cVkZrCYtfQmY9C5Gn7p4bJt2",
  "key14": "2Xoq8gCCfptviiCKfUaH493NyqhHdbyvjqqbQ9kp8fRnN3zRMp7MouQdkvAurTX4FsVFM4MB2aBmSj16PgGTmTDv",
  "key15": "2jAHMbRZa3HfoZxAJp9bAWBAnPKUGeGJU9GYTfqPwMUZV9hTb3CFJkB5d5tktMMRLz3qYMQSfSVZsNYAx41fqJRn",
  "key16": "39vDVZeB3fivVmRsrfVVcJ536CJJco6ukfgh5oZZrryU93hzgvEgtABEj3yxZ61yYLgrx9KV4hSw83XKxuYcVnDk",
  "key17": "5JyX81wtY1Q9ZMTQRGWaeUST3LJLUkUYoCkrGT22pFnjYPeqqqKL4PKE4woSfH1r3wsyyRYojdrQX3NkBUxjB1UV",
  "key18": "4cZhrx9as2vig6PfMNsgfJzZEFgqor4EoKsRDNxbQu3FwASqKrqfE1sbpzJNRSNkcPKVnx28CFGxTSEinpoBUE5b",
  "key19": "4tSwE5zRDMoDSq2oAYpZTPRCRocwr2KXZgVYn1kv56cif8qJpJmbFct7L93MiaGj38i91CYyJAa3mqv1Y6htjPpw",
  "key20": "EgVvsM45mzojSqRSTnhYCxCYi3w7wkrKYefixj13nf5N1jPQutt7uhPHnMn2bbbZZdHidgZCJfUa3iwvrYbNhKh",
  "key21": "ZkY6vBWj2Q3RWatnmJSw8oZ6Ck4QvLww1fNtQAkrq2BnuHZV1xGLbr9id4qQNJkdHoTt7DabvvqKtAsmVtsRqS4",
  "key22": "5ciLFzaGzKHzB9y5tXNhCUfbyYcCGDTNgUkr7n2VucyURvFuVQgDpzQVGR6ahdAXK27uYMM6mDga5mAf5C8qfaii",
  "key23": "2KmxRCdFMo9B4h2ww5p4uJmN45BCXpbGxPzeirMwRHmUckGgmuciGPY9Qe2JJGPYxBhQ9wJtjxXxxRYQr5XG77r",
  "key24": "4rMfaRj6h763hz25m97dsBDAnKFrPRgkRYuktfWeQ3XkXeJPks5Y4fSzKCHDwowG2bj95o3KMbu6vqfGCqBoa4m9",
  "key25": "65dAgWradmcWUEjQN7x4hLwvNcyrfYUcc5ZNWQW3VqQnqTNHy3JhJDQkgC5ubRso6ZpSymqfBGeayRAQiWB2cznP",
  "key26": "bXFYSLTCNxcXBZXGKHLyBTkNsbTuHaB1iyuX1PL5U6smSQ6MheKsrRg8WqPkMDSn6kqmg7rGS9PLDknCmWGfGhz",
  "key27": "2FDPCkC7WVET1o2FGVxX7K7UKhSibYFtK7TRQ73wzmN4Nip3pHk3ALwfEjjAZhhaXL7U9MjngNWJ2kNjU9YU6B5Q",
  "key28": "4dZykr9PMgph8HuT1UzJ6z1ZctBarjdcwyU5oEHkMTAQ8KBqxuQoxWLqxoF78hC8YFsSXNDv3vGpHaUFBJbC3yrV",
  "key29": "5rXAMWNfa99YhZp2MfDhjiyRtuvfefNdyhEhtBmKTA9Hk9ZAFR1P4MmGfVs8WC6mjXyBc8B6CRyXHbDEbEp41hke",
  "key30": "27wmyKZCt8GC4tdZiucKrTFkwbAzwaTmjLFgFZ3ftFAimJSZcS6GkghBp5hAUt2URLKb3AUPef7F5YXbcqjTD2je",
  "key31": "5rMBqMFyBPtyN9Pd6tYBqC3vy27p9upNpNB8D3Zot39hNzpoUc2GLgZKTp68ybdWk5foPMJtaTMYo8yAAXUzc1eq",
  "key32": "5fDJk4U2m3VudNMHC6nsHtzwcGcSYGDwFhF77ij4r8wELD2CBm6bUQ5LgegXtwCRy28XdVaW6zmsLo1f3H7EvKnS"
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
