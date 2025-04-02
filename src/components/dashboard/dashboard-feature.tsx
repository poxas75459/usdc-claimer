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
    "5pCGeV21jMbR6JK2UBaG2HbkWzZ7zeyPbp1piZqXVfv8QHLkbK42jBbyE1FzoAptzgVjjVCKV4p2wRxKFJcz8E78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rC7qeR2fD4pgggrjsbpqKBP2nPED3bXzvN7RCP5FesUM77U6sReTnyP1XNQo5TWg8W4mUmeZAqj5UFi7nNRK3K6",
  "key1": "4pPUPcXzpxEZS5d3Bt6i5Vi581nDKYFQuEJhS7KstRwHG2wAeUv3GQuHbo5EmfpLg1e1SfPwMKe4RdN1GvvypWkJ",
  "key2": "4iHKdzfXE7QfXRKSVYP9UtMbPEhXYisWBnDEd3KZQB163vPAXus4GS4FZ9iCUrmhe9QDXLqbb1d3kdTPvwi3o2k",
  "key3": "3d1GaYgdvqQVuvQSfkqJTzH7ugBCg4FjttQiU3id9b1RHWkAY5MxjLrNAXt1LMoHGutdqF2Y9EySavRhLwzxGUSf",
  "key4": "41GE3Hz1MvnXDmJm17QA4tj1pCjeD2LDJh7erkUwZAqYLsSM8uYBT4qcMhXbzkDXWMnJAWgEtuBA8CPAEQ9KNMh1",
  "key5": "33t3ZxzCbYiBH7KmH1i1LHMunytGjPnreXg6q8GRPh4zjpRakehJQYQzhpCtE9c7tvgydQd3rNNRD3Vdx8b4KyDf",
  "key6": "5e4zu3NR6PkmbnLpC8d1kVt8ndZ7GQAGRPoon6YkCaHvqUuznXwLRbXv1fdx2YeKF56vKXWCYatK6rFmGfZJ2u6x",
  "key7": "4R7hRNG3J8GKXNoU7GpgATdnsD5abJRVfJVnmMxncU8mU7gkxuyLZZ5zqdAwxiX7FvTWkJfC2BgaLXGSAWhE8N3G",
  "key8": "2gmyay6ZnmhGhwb2BwHiSszwMioPwz3iKa6W9KyXa7DJ73ozYNptE4DmZLSzAjZV1NRyQzTRb6AEm6XntWaHYaVf",
  "key9": "4bt6XtZUmALiFcbmzpyqj8CppKHNRCKVErVhb39vPsv9F4iQB1ajoa79jG3m6gKV7Rw243tcjYCLpg44DyYhk617",
  "key10": "4kasBvP4Li41ppudusDPkogFGoVc5REnqG222Rz9Q3hNVm4YnWVF8HRWUQrQsBCaFK9cReDP99e1gVYMeDrhUP2Z",
  "key11": "2Ds3JvsuAmuAPTNQ3G5BKW2vuf18vwoojZmpwptoxN7PS37HRmLQHRQNKemyaiHzCwWXByBWTHopun9fdKk1249z",
  "key12": "4YwncyfQMuXEMQgAcSYQy4CvTcfTMsBusAvnKpPwaKACk8h1EEzHTZjDxMd3P3vtvjQ5bzoavnWtnLviDS7RH26v",
  "key13": "61V7HNSVYXHtHN2Gpt9U63niTZ2tCLyz3ozuiJe163EaY2ei2WoracFNvUFc2RoVEWcVLK2MnRVMPRNET7Vfrnnc",
  "key14": "39f6oaTEawMmbW8zsskQJowdjcGpCWVN6agPL8iWb6r4cEMBokqtNTzA2Tm7JGPbmTZGb8M7HBNK8y4fJ2NFMxj9",
  "key15": "31woxgAcdwsu1uSEwFh6y99yX75LFQdeeQZx2rbr7p6EasSTDXbWCF9G82wJqNr9SQPWege7MKPT7nvvocuyVXgu",
  "key16": "5xFP167KxhKJTVtD2dPzhhn2WvbYQusfEf3PpqcXPxpdUVdxuc9pavUSvV214zH8xpMmnM7Rm3v1tR5cUnGoWHvz",
  "key17": "3iRR4Lgr7VqDHyuqRLKTf9ghgczJbVcygXs2iNQD4ti1t2SgAibu7MHU7MdV5SjnFrc72SDWTHA21EBDF5yScMkr",
  "key18": "51dDVsWQnqercFHyupHGYNj8Hn7iE7UmWYYJJRpFgPDcVDA2NCzXWwQWbqwXaeLVqwGeQJnbiaqEKuscdWh4kRAn",
  "key19": "4TdkF3EMnf7XSQFw9spX4r6wzzXEdXL3siqDYe85zed9RkwhacQ874F161FCaEzQP6pYWZsfCAwGvyJRmGqbTYRL",
  "key20": "3ECyKGVj1nj8hL8Tvp446Vo6nGZzbvAUnTdk1BxFstaD3Ap3whYNYvGcfFQSoKQjDcfSQcMPZGgEg2MwRQ7MPFSv",
  "key21": "56Krv69fruW2drd1YsZJeXTHM8NQyMmn6iRgw1N6y3KR9RvXeTXSEuTq6F5oQZS2ncjrmy6i3HGPh3iYGrbGeBVg",
  "key22": "58yyExQfsvJkQKE1eWFsV96rpGzULsLfc5oTvKhFoMk2yV2LHEKSECdN56V9GPiendrUiQqjJ5V5Ss66p3Hpo2pa",
  "key23": "4nuby3cZfYtX6AsVjTqzhmBDNZkPYM926TspPUDJJX849KcVmvC1DrErz2k18NTAk1tLKHkhU87xyTLfN6iS46mg",
  "key24": "5qX1ig4JRxL2CTvCjbQD6nVeYYvma4PCiKycXp9dQqJrcLrqyMMzGHT4hzkrhK8ZZsnVE9HDT8EE6qffp5zMChUz",
  "key25": "3jKMJS2zwNC13Dp39yC9ENKQRREUWcCwwTt2PJT44kSGkBNXTYc2aQvVXufmVc2z26Yvte3B63cvMXSJ3nsPZAo1",
  "key26": "2LWs1XwjCnyJiawHcQrjEgHsY3iPSgjyM6vPcNQXn5K1ZQ4NqzVyquqY5gD9qLQhZahtYVVFED5EkuWeJv4Bx78x"
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
