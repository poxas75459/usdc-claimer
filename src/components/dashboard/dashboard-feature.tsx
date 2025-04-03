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
    "3jXCZZuVn1nCLyLUxu2DrttJ7c8bZXRkTAjiDbcE88TeuyZKpPJdqUT6MN7Y1tjCZB1cFGKQ3ZSNbdKQHScV9ziG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HATPCqtr3VRUTQCzHC1sGwBCNzZA2qDWsUWhZQbURqBYXFTUHNrJyWmDrknbT3fiVQHEetNkqS6gBx6afxtSESh",
  "key1": "3wjA23FzK9JrVFG5QNZLv9nLTagH3s9rFdiuB3dGobfPNyuQ2zUtVuMSMSegisSzkB183CcJf4Ydfd2D7qbwcrXE",
  "key2": "3tn84jYSATFFPTQBzvzUdG1EG19zHjBeNzpMoVgX5F62wZSwNdHUuWAagnYSXr52vxcFpXPDrSyspniJ7YG8RY7H",
  "key3": "5p4CiYPM1jG6ovigxgwycZJQtDrGDxGsP391i1UHxqh8fbUc9ekefWCvQ5monhbEWqyoWfbRpYYbQHkhTZcjrjoU",
  "key4": "3ahwomANn5PZu5c2rjhh111MtnXu2sUUdJneTRzEPym3FWKNX2jQbHHiC7onmnenGWmnuqaqeza223AbqNYiYrnK",
  "key5": "4oBpKMLvNUcpCQMP8zCNt9sjf9K3u249iTwoQfCrrTVQkjWQSDP7LH8MahPqcbHkqkkSh2LTjpUWGL3GttJBBRm9",
  "key6": "3MV8GXLENzPGCfpprydEmT5Aq4womHHsoMAW2bYipZAr9fekgjqhAJZ5CzEqfeacmiD8CNAiLWmvfNafNTCxuGRw",
  "key7": "2r9oa1Eb3j3nmX4CTxQmh3gendyYn9KhvjnaiVMRU5F1xTCzJafpf9uiXELXgCodBY6fmpFootHR6ZM32Q2w1Zx3",
  "key8": "4wJMjd4J5QdxSwP5Mr8oWUWLbAWCnNX6KoHVbCTbLAKGKmErYzn7n7pJeoAxw8Sbiahxi6Mny5h5ZAMxw9ZBRXuB",
  "key9": "22v3dLHCxbeXDjtsm1YK2cXtJPqajT2M3pfkeVLkJ3CQwoH94RArST2XN5Dj2YfkCDHddSwkjCycm3jFoVko8s5U",
  "key10": "3MkLn237wME9LqYepSu5cxQ9xKH3DLbtYDteFsTvgFG7NPLApqxCSWW499sUzMpZfqrHkzuvLg8wbry5wz6nY2hm",
  "key11": "MYzEuQxXpvgFS2x2yyw2BKcmfYECT6kmM4qLyHML5584fHoi8GjStoxVBjEXnoqaVVRQTBtzmLH8GdFsKFu4z83",
  "key12": "4x56a3K6v1eJsFfLFPKfHthtVZeywPEayHSSsgd7D2cxs1Yaj1HSZkNFs2MhDWtuRjAfuK9YWf1kXvCejFkU7AwV",
  "key13": "5TFYwtKRkUtZyq7ZzJ994gSMPcqHE8q3puk4wjDJazghZ535ce7LbBp6BZajbiWH9dQ5eaXRRPDpNGF5Cf6Mwyam",
  "key14": "hG9Lzpy692QrRSJLtBev96NiC4YJvxxYFjJy4ypdM73mmBioa86sGFccAeEvAgfuMd4UBgaayhAjbNx1i7KHugC",
  "key15": "5TMxB2wZoqhUpVXVhTbXEbFjVdDaivfSJQvoTQPwCq1qJQjN3558cK2mgE5ngD9BNn6JMtzbk8PB4STKA2Kge4ZS",
  "key16": "3BpMYwfhY6RVvu8TZL5oEw2FEQpxvnGSsP82R1D1VV5XQtXJk33vhvwd4gEtgp9JnmVAxaJqC9gmvkANYV9YHFFo",
  "key17": "2sNzHnUqqZL5WUdLKBn2niqawRSqL3qpgFceEeUYd88myMKgRqtzZupwEqPJX7oF7Fd17m5PDAW4iSdEL49vTUkr",
  "key18": "5hcRUZzUgX86bGYm9jC6B5WA3sExxFEPLxrJhfh2mTYVNeSQbvLbTNrMWa4fDfrFHway1bpRzhzZPPdcAY18vwhp",
  "key19": "fNFN27xmn6oPHuGrQGXd1sHvS4P16mJe9tgnLkdXJPt7bQUrDU76Q6eGQhhJC1Uci7xLRQNrpy1JwFgdPWNxMpy",
  "key20": "4D8LQARSdyFT49Dus7KrJ5f6RjyS4xLtzhXM8uQhV7AL6oWE5GTGbF8DArdXJ59szGHxcsTZPiLibcuJwxs6A5Yr",
  "key21": "3SDYeahEX22xfi9XVmCZ24jtkWjeiVNT5PEQJdV81kTfmgsQdyY8GmNeQnbDS67scw9EqRuXNPMvohKMWugdkQuU",
  "key22": "4DP13pVBzNfX1ikRrJxWjnZGoshLeP7xn36PHErxRGb4nLcsf3kA8t6Niyq4dGPFRUC5nGZtJp15GaZZeKcRTiNc",
  "key23": "4fNMVhfjK9p5gBgisvv8terar1oo3Dj4aCavG5vN25Cpv4mGDfvR2NDu8czhy3wVkHs8D89frJzaWzScV3KPMrWy",
  "key24": "2UTk44MJ66VFxifkcoFr1gXxaqSxj7p8wZoi7GqntTHN6W83Q1oz6VKLnwvF1vk9W3GZYqcrsNy2xxj7CYrJpf4b",
  "key25": "3Z6QriMvVZ25JjCAkzH3TUyzLEB3tc2WpEMofX9zFx5EMSNzBVqzJvueuHoaY8s2Rr4ZijPmTHPCgMPVpH9xMC2y",
  "key26": "bfF9QH1hzF8NxU3C2AedEGKWiWy6o2Z7pNH338nNrs2UuC3W3HsUatVaprBTQzeTvGnA5yPQjqd8tS3mzv8v3Yd",
  "key27": "5sXssmxyL5S1xJCsttXmPrM1HYg47crBruw554ryLq9ucNjK7kdJNHTamWyoSSRUsg1yGQLLau9umaBKSVwqyxgj",
  "key28": "2EysX6HmKHmLuufskcSumTTbULttYwzXWLXijZA4PxQpXa795oFd56s5wUuefCq9ZujecK9U7qzB8Ui79J7ZFH79",
  "key29": "5nDKdscx2LmdGnBQGQGZkrynd8BPGewZKJhmtXSpMi5uHPM8JKeEm5pjnRfeaE6SF4qKJTDZqMfaZ9n7Rv66WYtK",
  "key30": "5CwfgxMdpp6d6tVnPykKeRYDoZKJdK28kdiP6jWJC3kkr3CP6HPb5N9b1SnTjrvbjQ1bpLy4Z6joduociUMtNBCQ",
  "key31": "f9NNRVANuYYCxSKFhJFmFhNBjB4TfdJB4z3U1V4wGXNokKFM6hswMTCrikLoXyAaCova94eEZC8ZqNRSx9rpKEA",
  "key32": "bZf5ftQ4zi1PHyUMuYLjbUpsT9jyc3wNV7goyQevWRhHJLgfnnBTrGAMzXGDky73yHARmuHeq2mq3uPzatefqGw",
  "key33": "4h1PJzAjdUNgT9qiLqcwDSJDuyHvtGwdAKnTMLB3y4Zz78RvCj6eKPVyAGN6pboEVbdNBNjND5PpdY3Nygq1JNvA",
  "key34": "1NMRqik7Uig9XXdeccT8zacuhSKFC5pvvddapYbURLEcqKkEUTnDSgor6Ve1RnLLg8FnWq2zLEPVTuaVBDasd4T",
  "key35": "i13q6sCNkixgxF2zx89iNMYqhB56a7cdr5PRZtVYELWEaVywuxWAicUCej1MmYvHAXJYjUopvLpYRiC9FCZoXiR"
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
