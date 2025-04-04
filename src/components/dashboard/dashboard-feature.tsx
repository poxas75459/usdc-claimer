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
    "3tTBkzMwwSh52SLgMjc4FYFJGGMuFKpPn8iGELhoCJjCxSwJcdezKqZ6pgb9AbzXntxPB1mZdBoBz4PbKRbp1t1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VoaeHRtEULXNodwqGiPjjvp2ALCjkfBKT9FhJLQ8MCifSmfXEoamuf2Dvuozb493oLajkN17giLb84DvKkdqQbM",
  "key1": "oCxTUtnLwrdpcJ5qXbytXF2xYF1QdztJvtTkUMDXcFwuE8N45AxVpcjEr3giJv6ou5BiFAJeSSEzBkGcDiHYsSR",
  "key2": "5nMp1r1H5NKkEUuHeyF2HrHdLaxpaMMqLtqENKQPyLzQtQvk5vw2uStMtegoMjboKvKc2bevNxUJ46CqbRNxHzez",
  "key3": "ufxag1NLS3MKR8P2xQ6L7AvsGwNcjEgXNGsTzNKS7HW5NvqGdswbCteixrsypHDfLkGuS3yBBJt2XMLg4Pxr5Pj",
  "key4": "4SBnLMoS13pQAEM7JifN3gJmh7hxP3s5X3GzqgvKJZ8VDuY8kYzVkZXuU1EjAtM8xbwVyrya2k9o7RQ9E1hcgxA9",
  "key5": "5Y4WukRXd5kwqoCmLDQowxJwyoY1iP2CgtCQ8ooSfCZkUh52QQgWRRdmKVwJNuANYyEzKn8fkUtNPL3K4G5gFnAP",
  "key6": "67TeM47EvREZ9X54JKZZu8gC4sWUQtYVciJXzje2ju3xHPKD4ggMVawMHmQHwXaccbWrNoxPJDczC8imiyReZTCC",
  "key7": "59vaer9z4SUsscjGfA4hF1syJCrW3s1ep9gt3Fo9rBeLVTvNU8WtKNyFKaetXZiCCWmMKntwNgcfSkpcTxpXpye3",
  "key8": "bGEpKtyYfahHFaYdTkWBN9JHowdWmZH1tEnNv4xDZFu9DiSvVvZxwkqCCCR4MbpHQFc4WqZnpHfQkMAQrcKfUNB",
  "key9": "4UmANrcN2c8GpMMxFa98Po4fkp9meUu1aQYQLch6zHxYrSjR6QVXpwEP1QBuAZ78WC1YgVzh7X2Wt594Wo4A5yFW",
  "key10": "5oNCeRyvffVR4zCsYRa8t8G3rebMexHWWbhUo7hMG5yfXTmJxJVwrJXXA2JaCtZHvZjp9GfYhZWiHoVA2PvEfuYA",
  "key11": "2GWZnWNnYt7gjv2c6nhTBpFTH6nkeWLtwQ6zsgWfaX7RzzpxDCN2aF5w2kUX7sLpPQQkJuXeSRfc7RYhm7XZ7rDr",
  "key12": "YnPymMQUBvbudd2LcHeWFwJeeufUMJguntXJGM7FZGPrwg47QTu53B9pSNzxqGy1Ck9FJpyESV8vqj1BgZ6PCHE",
  "key13": "3Wo4Kwwd67f7zcoWofwkAe6TbCaDGPRw8pnYS1V18rvXTz8jAqwNEQkLmKXuaHGB43cgeS8mwJoSZj6J42AraT9D",
  "key14": "5M2i9XGVcv9fvStvfPB6kBneTJMNvo7nc6XPvKqPFWxAVstVHhgawJZLJ28sg3T6LjG3MbuzpC8Z9wN4TxuM9kLi",
  "key15": "kbMifL8awh5XLTc81w9KuDFrAnfDm2ZCWQbBKWWyTRtqZouJAJMP7P4FbjyKsTQQGD76Aou3BbyCA3zWCVV3EVj",
  "key16": "25RWHdG7vhnwEWZV59nuXwiTCGS3aYNDiueGr2zTbnKduVHVXZYffW8ZvGvQYWR3ni1DjvEbeePv1ZPmiqTreEH9",
  "key17": "218P6EPu7ijnxzuDo3VMWB1dDZcm7c7QY9615SaGk478ME3wXt7AtLcw2XdYX21z9iKpFjJYsUFatNoToxPi7qLb",
  "key18": "cM2HzsMnJDgxDr7GFkTGm1YYzTtGMn4hhTakhtPiyVZTMFFu1MmgYNPtWdJraVUKe5WDhTvTsgsMVEZDuHH3gjr",
  "key19": "4rfUyQidtJSnCq5jXWYWx6n2vt8f9ktc7RSkZYzCzPnSsouPCLPUxeM2YUo64TqyYNRhUbGq1HUjY81JNmU68NxU",
  "key20": "4d9QHdA8atWcECqBuEW3FLf3nmZyQYeFCqzgHM6BiYjPrfKh9YpZzZg5zuHT9EhLUxWqS6qWzip7VyzHBRUuapZB",
  "key21": "3UqCsRrRZCYqReGWdhG2VBUrRp2Lqv2bfHKuZsLnSGC54GTkxcaPzAb79vVYLAAjPnx1yrcgUprnwavMdXpYCrzP",
  "key22": "5fNdgGJsiRai9FzHgVbMDM6PhLAv7vxYjjDcxkokrxJd4wkwoDtBAVudjKehUVfATbcMB5s6pD8ovBLpkYiyJd7k",
  "key23": "3aKgobvdGhc7ZTKEJVybNyv43rMNcXYxp4ZR9ijvYoaMRnnveCvp42qy6uwB4duvFpKTVhSkfiLwh7uaxsqkyGjc",
  "key24": "4xLSHnqx7v9Tcd5t6GKyYUMZZTMaVHQFHeFh1ZW1neyCpvtJd35XT4Z4zH8e5vJ3HGqhe5Dy6CbjxUUXJdn26w1w",
  "key25": "7n3bMBMvzGMzSmdgbtaHt2Tfxtkcg7cFvAxE5gDJgYjp1NkY2RKXVLYGky5AZEe2obbLkX7ank1B1dR8EH54aR3",
  "key26": "3ZNpqm7i2S6W8xyNJAo6w9UgLbD8ADzfRNWDmHkfiPEAJcjPLDRfEYjzsmeGWGvqPKgqiijvC3sBnieKnkXY2UWs",
  "key27": "5TQPQipPAbe5Xi1nJ9dCgrLBFXE8ueRLvR4amF7MzakULzSdvJNFN6nrmRFntd1YRXybbUJ9FCT6sUDLqjEDWi36",
  "key28": "3RyvxL4augXGXVYQwc2Y37mGxYqvpcB11htkXngLtGCjwahYmZCtxf7UCnKPTQSyWuXww5YW3UmozzE83LYds4LK",
  "key29": "2buAYgob79HatbW3QjKNqCab3btA317YmfAFwPaZqRP6RJwLokNK6zUUhE6cbQ4HtHzAJRRug725KS8CfGUD3Qad",
  "key30": "2oEtqiD1TfucD45KUEoJVfiZKGgQzrrpu8ZG6Vzzy6zyNiNRs7vWZ8izdDjhNdB1vGUEJhvTpeGs2m6gufeWDwca",
  "key31": "NN7imwrcRfcnTueZtRz4spkjhqKsgUwCvsTUg7fmrcumxXwTrwAwugkr1AGvvkHENzhho8Tdi8HB9JworpEdLHx",
  "key32": "5zQjEEAiewjRJAfcnGn1hsm3ipsU1o6joQYKXBSsEZPQhkeVDPfh5EYafqVmK3TyMd91XGW7Ab14UKrGkzXY9doB",
  "key33": "5ZWUckxTPMJfgS7Kuxu7onWJko7omvJwLHDu1WzeQ1bSmXPH3ENao5q3pc1YKWk2J4p4uQDLNneDg3rxRyLEJjNL",
  "key34": "2pvFfRjF2JzA7TdRB7wX3wGSNnYWokU3DvRHV6ppcYCzPjKtKAKGPgcqahLfm6PQzD2dv9uXTjKmTSM8KFje1Rfz",
  "key35": "595ppFN7tbfZDhMxjgPJiYr2CJNbBPw6ptouSWKnKc9zVMAq1SsvyprvJdNvjWkJxf5jVcMgWjUioNd5cMK3Kdfz"
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
