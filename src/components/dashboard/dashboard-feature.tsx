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
    "38uYBhBjwKGSDEtqp95GScWycmX3edxLGPkE5ieaBv8bPRgHxyF3RRoceB5q2TcYwNSpBVEmukChwAsUs5aEMBgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gzW32Jw85MGfoKsLURZZSKcsLHkJELL3KWJfP48qKfMTHQGeH9CAo1pzkmPtyR3Ma3s8C3f4BYkhGPkyCSfy7Vw",
  "key1": "aPG4E2veWfJG1YCCg243zKSKGdv6nL4pV4a7Bx5CM9uqUWhxMent8tVUe8s537jcDsgDgrgHz4Ha2mWVM6H9Roo",
  "key2": "3juppvnwM23Xz4987ZWyhoGBTZA85YfkfEd2a8aXg4NpbVcsoA12YCHeJsdwQfdNHtMWZaADTJiFc9VDfe36CyQM",
  "key3": "4PpHKSXaxmHaJNyBt2LkZaqngwa7oNxgXUAemJvXZev5XAkUEUjBsESMvQg9ffQRATyt6y52Dfdqphdkk7DhGKjV",
  "key4": "5hjmGAhYSmcDC9eyZPbikoW4PYzWvdtAoN6BNUoaBqK5VQ9idUKzGJFbgePr1EifMcBqMDUESnEhM8XgCCcZ29Dw",
  "key5": "25UXuSdeq17yyt8UVg4uf78WqN2Bd7u4ZJpkXKZrFvCsc4qpdQwnEiVzk36RM4V2RRJVqF1BMZKZNQGivzWczBwm",
  "key6": "38TkrirMeYC7Nz9LhZ2EUo3SABCczbdDZmFAg2NgHhNUWy1sjzathqJFJ1vvQC5RYN6uniHCkw1nUspCU9c7iTUy",
  "key7": "5CNYw7Sopp1upVB7xeF5553B74Pfxpo5yt5oCjCeZ1f8Ad2T6rn2fpVx9KDFuvLgeC5yFLcfzBaayPPktxCipGUn",
  "key8": "4NxYPG1YwpNbe4eSFXA5bXmot3m63MSDaLQiHZcxpUpuPhgxXd4D4sDiwvNER4NDd3TSGe1dWkWHDpaCZC5sMJiU",
  "key9": "4RoWEmS2njBsF9i6Q8LALuHf4kY9J3Z8YUUY8CmDWW86ntJB47xs2G3hb5qhEm7VQtn8aXSLaSBuucuQdmYV9ZvT",
  "key10": "52RVo3iQDvJ5MWK6N2d7T47Y9YfZmCcP971gSPnKtAfKWkyWAwAD5BUiCiziormdJu46dAGX36htWrEmmFMMb4mW",
  "key11": "5BW3vveDstcWHSSX35joQgE6sQcZh1ofKUg4qnzVyNatvwfTR58cNB4tMjxgSZ6iKkdKo9D9Wn6tunLSoWxThqG8",
  "key12": "XyASEhzj8VYspcZoVitpMa3hWySwnkpxVh9ZdoW8hP7TUhkzRKFXN7cFyaKM5WtKd3eXFeSpqwCmv6cF16eJb9y",
  "key13": "zA2Mxk9QsyWM8hqaKpkrioEh9YGpKd9p32QzojnLgEjnZWvLnQ2thU4ttXHhTd2PnxAFb7no1ghpyhYdfaMynop",
  "key14": "5ZcnQBLJ1fio9XsVWEdyCTWoGHaQ5M2gvmw7YDPaG7dJ12D3GZfEQQs6bFJKhoDDV7fqnsdnnMByaWDHvZefZLGs",
  "key15": "5PRbomjntn25BFU5rYJLeTuKAwxX8BcnxZHvtT1yhXuxEMjgjFGc2fnX8AcumPVcXJmWG8RM9MVeQqYETmJj3Kqu",
  "key16": "2GPJ8q5oaVeg1san91bN1cZtH4mSEUZEY3t5S68C7mcVNybdXYo9PBEa6TdUqLZrVt4thsPLG785U3feiyYAbTes",
  "key17": "3AnuZbHqD1XRz6t1S9rmdZ4Q43EbuMRq354wzA1o7dhGdhCnumbpXLxMrxiCpgPYWAemXosnuiiKZGFgy8kvwzda",
  "key18": "4sdPPQv9YgGBK5uVJ8Gr8ruXUTk8s52v8tV2nun2xEWPhWBaDGgXCGpoWJyGTCUeW5yRzXGDdUpiDoNynKLfpYfz",
  "key19": "biirxgzRVV5Ubad5MhcrD5sGo56Te8EtYK72SWduTomwv8nWiMsdwkX2aK1oRs45jwCE9k1TqzX1F3T4cQHSHFw",
  "key20": "5hykNGhAwNDS7Z9AkwV9hzLmXj85VYMt19AoJ9NyxyPzjUBjdDSZ1veX2WKcjhomTpDoFpXNStv2hLWvDFY4LGjR",
  "key21": "KEqjf1etoGXc8YWVz6h461hyirVMgbtmpFsSnrFUbnZQRY45x8EgMRPAXgUnMnU8n7f6SjC5ukehMVPwK7YeNP1",
  "key22": "xqZhpY9NJ95KgwGYBRUswVJzLn1hciJPZcs9eNcjt3QLbMqGnYm28a1WC7zNcZx8YQvEbtQZy3jVkXADmMC1uAo",
  "key23": "3X3WwzckyRcJ9RVg9bjESdGZSpuJgzLfdb4iFSXC34zFNaR621dpW88qKDDjyes1RGwTwH7nz5bvPZH2wZqoq6C4",
  "key24": "pv5mq9agrQrgnc2ANUuLeUFK2pykMRefR1gfRBkobms9YzgioAVb5QGxusuGhvDm5vZwPLzgSnPi1ivVrjjdX8L",
  "key25": "5uWuGPxNsFRKyuWvrSjb8Ev8jmEEzgQbKemew7y1GVgFfWYJgAVUtHn13rmR8wACbLHQb3KZH6wMVrND5Uu3w3Sr",
  "key26": "2SgUUBeKujDS3AESDT3zB5ZSEQbygSqNRgFi7jsfoLH49vjAXCgKLsSnxoUm3z8unbDaEYMU6KiQEQUjKPZFcQ1j",
  "key27": "5t7FEtPs1HQBYtr9WS9FRBZz3vVi4H53k74TvbaHfazxYPFDeC46rURFropzbwUPit2EBP9Xyra87pPYhUXDEvgL",
  "key28": "WW2yvDEqMVi3J8j5LRU3tMgMZcygUFksNGcPDJPx64CUbNDr1yF5fqeoFmVQFreB7Eb8AKPEuA21fuNo4FRcGXr",
  "key29": "2KJBgzgWGxnShsH6eW2dBVt7NqgWR4qkBendsKYVr8L1ka2GeSLVcgXNhQN4mNHQy1WFhzLF11Z6CcSWzX4LNHXV",
  "key30": "2PwdJNCTgcShZT1b2pfP5Man74fEgAxfMAFNfJYVCYTTtTBsksQwNQjMdSxfvpCuVqAySHQgLd789JcbfWyHimLi",
  "key31": "2AoaTeaKaCimheMNqHvgbonMAs5ys7m5br7sDecmuECKaA8NWEbddPuFSXjy7bSBHXXbM1VH59wLoS9t5PS8jn6T",
  "key32": "538Vgaq7dGM8Z7U7aQLhozaUcRTUnknbgsYruf2uECZQPD6EVw1UGYSNaozqJRSsSrD68VDJ11JAcfiT9s7gHuNw",
  "key33": "2qKdSXVVaUmSK9erWc44grAbtZa7jYddzNVum5dJoAUgE1nVsNjrAhCQzvb3wRfwr88syezgoz7sTPgiS9FaEUeJ",
  "key34": "3AkctWQUDAE2gQ4uzHLmRYMZQy1PZ6GmiwnTsz8afrtB5NxWmHD7RhtEzwWsqQqRKbs6JziYQTQ2oWuP4G4953b4",
  "key35": "4mp8gPVfaJBo3jTeuScGCgxnqhPegZ8Bqtsxbr2nAdNKBfdpLVsq5Ta8FtJFcw21WQLgr5ZB9LKVFVb6y2W73ijM",
  "key36": "2mHHmEgJsjfR6KH73xHnN67tu5zXTPaK8y6MPRxnVJFabSWnQER6KCkWNeYReULaaMGdL23UmoVWwNUeYi64Y1dK",
  "key37": "SC6WW2n9XwDeaEgMnYjFHmYoiB934hF1SQ9HNJSypvRyiBqeptkEhunigextNpyokh8rhUyXBEMzvutGvnqQkit",
  "key38": "4J4REW6fJ2kqHbRJ7vin9LJbWg3GXeexU7T1d9c5Cv1PFAoN9Hcavei62hUA3yeigNXKzCnct1omdnJUwdaAPVf5"
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
