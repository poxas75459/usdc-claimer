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
    "24nwHGmswuoNYkyNxUSTHVopV581kzCDJkFqhBUvfmJ1SwJBrzaFVZcbFhoKfFg1yaucNFEGQJyFyPKVhGEKH7vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sumKbz7VJXimYpNfJUbE3kAozRkBESg2kLUKxqKLToha7rNn1kY6mhEBgR1FJmJztiDC7nM5VgAVBR72X7azhVK",
  "key1": "2FUR3XVjv6bnPUDLXE22yeYLpG48Uat9yxfpMLZhYXmiCrjDi2b2s849BRzW53YN5aH6mBo8chGRMCJwqiF7PAFr",
  "key2": "5GdsokjmxeUALtDkf2DEE3yRyGcS3nLW7iurXXJDjY5EY17yLqirdbbyW9Wjeoh6qXm6v212neHSLnNKyTNNjZUf",
  "key3": "666UM9uvbVjmi45yQ9FVp77VYjqifF8ZKWNu1gqdh2oGCF2rBq1Y8iNj9eGCsT72RAhdWSbu39geY9pzt9tHNUWP",
  "key4": "4rmYzs29oYyptXaSJ9SU4btPyzfrXwhh36LTpVN53mJJ41hG6PuHqNL4CQSR3gzm2WLMv3XJT8ujJVUFk7JS9Kq5",
  "key5": "5XF8NjJH5Mw7KU8kz8F4FQALbHL66kpw5jeU8Z29yxr7serJrQYJEUAgEuPdVBke7evkkULUtWxTDyay2yEKzLES",
  "key6": "2xs5CWHJeD8V5q2nKaALhLbYr8rhMGF7TjKeHrHik735NuZ5iLqqevwFEAraP2PHsTvcaaQa8svUgM4aoUqjXpGP",
  "key7": "SaTmrE5h2nnQBFtFgKMp1rhDqteragQrvc6kauptLi1hm394oeFKTjRnnm5mak7J14LnusQEPiS38agMMj7aor1",
  "key8": "35o9U1pP4jSMGKQYafZaqawMCfJSQ7FhJmjTLDorKAwnbYMGaDqR9RUeDXsJJFkZBjA5Day8wnMgY4zFhFr3WGcg",
  "key9": "42sFuQnJi7xCjzoHTVtyb6mNUvvn8PyTrNRS9vP2tzP6JdegNxYmkcJVRhL3a8XPE9wBBSb7Yw4iGPNFWbzsNFG4",
  "key10": "3HDBKbQo3sXZdqo9ff318ZmrGyKT5Y7JVooNcoWNLea67Ch1QxtX5qzejBhqiSgqBdB3Ne4keEhdQ7pgigQbStEX",
  "key11": "5uaMoCUpdcNNF7MJPg1UEkUyUM4HJmTS6Yf7uHvUesMUCFqyXJN7ymR724z8jruARB8vkvjTQQdEFdP9Fp5imXao",
  "key12": "4n98nA36Nd4goiemfA23RUqn78QN4PBmgXBFA2YFc2V3Cx82hWr8qxNx8UFaAjEmVpqMTfzPBsTFvQELrknFg6tB",
  "key13": "4GDz1tVDtHDYsmsHfA9mhWw1KiEN27j7BU9BH947jk8sYx5sgJkG6aJ36Da3hzQE1wmnupTzpen166aWhYpJH84E",
  "key14": "4MEn9sbc1sFvoiuTwRkDzwVHAtiqWwENnVdew7U7Cu2YwUyGkws5kSqJdTNu37U5ZVkE2VU5ZMK2DHy8hQNfUSo7",
  "key15": "3JT7jbCchSZKYrp68UgLnBWsdmQzgkMbCmdst2ZysQeRmE3EoLXLJxSzCmAAnmMivVkS5uVTXPtQS47MkQVKwNQ6",
  "key16": "3N7xRKdUjFLXtmbciNTbW7UvstTwtsj2scrdSCtH8tMUEjE9dDLPkVLWPmanJ7NQHYYXzUNpEwBKGnQK7QeeeyUF",
  "key17": "4jS141Yhyhff4f7U63z8YWzzZNgNiewHiWTacUiVsz9taGdB1tTojDc5kff8u3T3mgimzajriXvbUwBVe1kxuYLD",
  "key18": "4mz7TnsyvySpuBFdNkqAeRyDd38H6e47s3K3GkKVK7PxxaXHUEznuBcrpLT8fDbiaGoos5CWeRVEo6ikTtuf7CL9",
  "key19": "3wgG7GoRJRgxS3b5jg9yQnrPbDGFJrsUQot26gyqL2GahzCw3M2kQxKvMyjZjEi9PwPtGU7CjzD25mhQ8hTFBJF7",
  "key20": "GX7UomMSmYdN5JFCxD3KYjx173dptYSetUij6XM4tN23xiKV4N6fWE3Mt8gNcoMfdM8tNqWNPqEQUqhXkMTmPMw",
  "key21": "YUgjYYMSBxrGzxdZQFDPchRevUydUDdu3S9xoDTBzP9ZyGPNhgCwkhMw4pjv1yrYtGVQVq438b8WqiBnx9keGV1",
  "key22": "22E9uViMABWH6d5aZorHohmAimYR4MUtii8qCucS24qUVDDyYWinnE93A6vSMEFw97Ee4hJB55dnakzTkq874ryG",
  "key23": "3f9UDbDH76Y68nLr7sDp4ZPGpmw6zdALZ5gTm2b8xoQX8v3Dmk8BQVou86BYBFUySweEpdoWMtxbRdMooq55agSb",
  "key24": "4mPSK7ZAH6atvXmUDESPWAczUXFhwcZFUKr4JW8T4hQprjgtDaSaiYjFVRnmg4nmf2RKYPPZAvZuWHNzZQ6GUAs5",
  "key25": "J9zxbCasxGTUwsy5rYT4A5YUddhYAe2QP7V1C1bFRrvnU96hPLxoEQtu7EGRf4xCUhH5UFHy9dKYijs8Jngcsfe",
  "key26": "EQUCYESeAeMQv2xa26xPekaL2ByKKEDYxckF3JQ2cYbwHp6oaR8vSertKBFYcEgopEG3damfx8Jj9w34g8Tai1q",
  "key27": "4H967RNWKAhPxuxSZEJBiPBhaH6iPSrYTuU9ENG5BnEwPJHYdCv5VhHE7d5KraY6BT2syW6m748XstSynQuPjbSp",
  "key28": "3AhHiBqRUoc31rhczpJjzmnCae6mpQAXLvN4NDdCsccNxbjCxrb8YgmdmCPcLJntaoB83cu95r1Qfx25LcRCvxgP",
  "key29": "4RngJ9Dk8KhoJvgSYFLpiRHTdTuoQTEpbxhRQHfs5HdFkVgnboLqDJrotpxxJo9kMNtuzxfskBya9mAh58zh4sQ6",
  "key30": "5mgVBwBTmZ3VtJ4TkEWaWmLW8FjkwbM2JFJSthAbG6xB4z9PGR96q1RemfvWX2w8qhdhLLFbo5XsLNNL7LCk8t7k",
  "key31": "2niTGoF28J1qPXSvCh5dUKmWhmjJ3MjfXPYFAh1Vp2TZVM59WDw2jNSnzUM9FTLvSGrU6b7LZneUMtrwKnAZCcCg",
  "key32": "5HdadU274L6wumf7aPv4ziwXWNWdWV2ux5trfsEiXQppygQ29WWtdJxbb4g2h63L1QpnLi9sHBWESmJTeQMyo8bA",
  "key33": "7iNddsk8qXjp18JhwRBCRx8bNkYsEnpoXjNyiRZVPPXXdcCuYT5MoutkdPeu6fvr5FdhHBkwT2LerwqGXt1F2Kj",
  "key34": "5mPugex6F3Mg7K2uob6RRyYdhn9XMt7D7n5E5QtR1j8cQQxQV7PJvZ8E8ENtqp34J279KuX1L6Ex8yY8ZCQG9Dut",
  "key35": "46bHcNFgF77jHknDpSSCzB8JxiXEdBZVviBsxmpUnumDf8Gscbnu4GXjmnwBfjNk89KW8DoGDBzKbB2zSPsCUymJ",
  "key36": "5Gff8fZt1vadxVg7LVqBYEazW9wRstcE9uxfn3pZvhL3WfSqcby5uqZgjtYA55PbFzAmQbPKJG9nzEJB8tnMU2a8",
  "key37": "2Pr7TCxKoRnYRFU6QZCzsMGJPrrfLnq7hSU9421XDNUWJJ2uMBkrPyvtrqU6gESZ1sV35fDFDBLrsU6vRQEUjhYr",
  "key38": "5Vadci8rfzSWjV2LBrGkwEk6KyQk5u7mnd3ocrL5UuGjDAPftXCuhV4DAdxRbPxLQ3fYH3X74NpCUmTLoXZxu5ab"
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
