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
    "3de59r1XU4oxymQAbWeEsHbi2t3VMqPnyPk75jCxt56P2mFG21yiDR1KJNp4HBrh6iRGqaEtAekvajdt8PSUdVhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42gXdX7FcU4CrGXDmqz1iENQX1e6cbPJimABmMzvdX4f8TUbYGehReAELX6nyRg25LsbC6rbWmU2j5TCR7aW7jtn",
  "key1": "5WSDmnGzsaUG9NFBwPeFgcqkfbQo3DCyGLVNpA1Btt4nDcRCF7WzU7F3cJ6JyVLXXEJrfCwns9MokyPxinznFAeM",
  "key2": "VHTtmfEWtmEPo9GPA5VUvyhXMhVoKcDJtnvkf8vDni5QQbsSzuV3GFFqWPQfXSUFeQZwh7ZGHZKT491pZSoCXw3",
  "key3": "5rgUokvGpd7Q4VWawbHnJQAbS4unbasppVxjoq54yk3EwEs3YiFLxbtmj6amEuN7EmPUMJMo36rq7z18HfRHCa6G",
  "key4": "2XFUo154k3QBQjKvHH1z6cAjVQA1NeJsND2G64LDph1s84nLK5KRsAQWQtCsNoD4SfVP2SzJiSgGbHy5a1DXDBCe",
  "key5": "3wMvdBtqMCeWZGeoYP8TTdLoiDkbFy1Vucgf76PnoE59nk6yjJQUxnUwbsYEM2ru7h2uEafZ1T9BHGWoyCpLJba5",
  "key6": "3VuYt5ktr2paV294DsC7dX7MxMoH39w9qJmPdWwrPMgQs9GhzxqZtfH67qAZLKkq9xaX9mLnuepbVNEBS3NV7DPj",
  "key7": "MxRZP1fqbMwNxc4TZtXvee4HeEHEpARiMCxozRyVuVb8WzBHoBBRcCwL5XMUdUHmgo9Q4gjjYWJQU3CPLbJRJuH",
  "key8": "2LxmRVKGqwxecLuR16G6Y5pkFuxa38D7meSkm4Bd81eiKWMtp4QTbBZr8xmx5wyAKK15R3GbUdfjf6oBuw2FPn5H",
  "key9": "442euDacfEFfXNffWC4xUhWCcLZhfCEx1qzCkM1W7AQ4GyuGHqW6h25ucY7i4jiFwvqJudb1JteL3WQRV5DqmNQs",
  "key10": "66kspS5M38S3QQRxDzM6HAg5iNiiqGgaobadnPAvrG1ULbj5GA3Vy7QgGn1DTFd2kMHc8qCKvBnHc4up5PyFS6an",
  "key11": "4ry6eXczkkvxDrWygXeDrh29moHn8o9WbAdzigUF5AwiSzMpnmztQdNBBcqKKKvEqBu2XtESHZbUspibmaKkwf3w",
  "key12": "36CSv5NQuYWECLqm2LrYmoNQgecVMo4FLHCJrg8RCcbEvBfCTBuk8FGS6WURNUuVWN7wXs3yidKKpW9nHVqPHn1f",
  "key13": "DTnNENKsMEKiMchnemeB1ntVqWtCPgDtSDErV9rLAEzGqC9ocniYLXMknrxzZkQjGGa8Y2AEouEqMTZPCCeFQzm",
  "key14": "2L5hgJnCRkcArJyY87LnAFbKehhLu5ir39t35BAickvy1Sxzw51wtg2KKDMopTnUPD5Zihm5L8JfvrLYtp5R7rZt",
  "key15": "64Tgt7PYEFWwB3HKFqT1cBRgPGVipMuUgUc9rHiLg8xa6h4f5VTwupjiNcns6vMiC4ZNCFT2413BMD85s6qNdrKm",
  "key16": "5C1ANPMFWBSxj2mtMeKb2QBQZcgP9ZAeZXD24xEvpDkHxcXaTfBa2rSEdBtfMhSxsFrPMfYndTAnFqLPKYKmL1sH",
  "key17": "2mBKR9bJhuKS2nk7VDijB8e9EFJkkt2JCAr2CiZW3Kbbb7wpkfGUTDr8tozL5SvdG4bXf7KnVTpVxJfeyVBvuXUN",
  "key18": "3bpNrHRopcFkvj4gVmWDJks6ttzk8rMWKM1uCQ3TAEJgojaT18yP5nHv7djJAfti9K8d3XfSDiAuTx5EbS1R7hXS",
  "key19": "5GsKZEBw5TbdgqX2D7JQM9BwRoAJRyJKW1aF5tyeJcFo63og8KfGKn39Lbzq4dqfpwcXbNLSANDVDjNTuSoT7exh",
  "key20": "5zMxdnKk8dFU4DGYgwP19WBFGTxFjNDgNBHQaYKTvRR599VoeadAsLTAtS75Jh4LVmBa6u5vbRfyJrEj41HNQG3i",
  "key21": "4LPY6wyM9GmopjYVKZjUvaCMEon5YTxmeX4g2nxXTB5E2YrhVSGPADx7oQzdEG8UwBXJxyd8QyzCphos4PngieXp",
  "key22": "2nU3mtz7nJ6nKykoCeg9hhEqCXXFTzoeXu94W3EH6xrLTTcCxKNu89m8DuRkimyAPi6tLzKT5kjnzmccxMGzRNr4",
  "key23": "5eA6oABLF3ZvMYBaSrcxkeyvkPbfVB5FhtGQ1PRBm33sPEXM1pKJAeZaxgGVbbK5o7vTyACffHvnfzRpwNjiBrxo",
  "key24": "27aY96dTmcB3ad9JPqmLXC2rofwgZQoMPtv2Jvr5w63p2uV4sHFyaA5yKJnTm1fksR77JBwdNzaW7ZTL1YJxxQu1",
  "key25": "4WQYsgEVq5YopF1kw5mawaBGbW5Pn4df4Dj4T2AtSj6jqDLGUpRrhWXV2SEbcKT7C6hA1Le2q4DYtaLzwNkESaqk",
  "key26": "4ifoehfcFmXF2TEL589JYfid4fSeiBsnEiYG24ssy6UYBckQn2es1ZE4hypnJDoywVfcL2mnAMZNqoDNq2X9KVzN",
  "key27": "65db2sqAwXoaZxihkiyJ5oG1sZLsp8mN1J2QL1QmXwU5S44euo4qP2qb7kmB9dgzwvGmbXpEaTF9prxYyV4AktFn",
  "key28": "3RR9e7otmM8qPJbWTK25yDHiZ4u8TBmo7xYb19tSw8z5CTu1nRWzTFqV4MS5upod78EkXdvY25oQZKMkHh826U1s",
  "key29": "2HW3Ugg1DP8zchFn5D1gDTxSdqLrmBTrgP1pdTSTAVR9Fz1YWbvV1sWCbMDBcwGy3xKQ9WWaCqNGH7mC9JabTAAW",
  "key30": "KLJvftuwjXcKphx3X9m95H2j5GdEqJgUANvttp96oEXz3bmax3p85exMy1gzPDw2tY3kykY7A5Ywo7Ptn4FfFpR",
  "key31": "2bm1jsiborTeGFrgmn3SCWh5wjN1W5rjcJHeyR7vJ2iAYYenX6wocxKrXGKe9xTcxbhA4hzXbaB8hHLPKcaiYk9L",
  "key32": "67esgg1XuU5fXv2cQSmdUa881rcapttKPPREJubViU9XhzoehJtXTfXYM6mxFvvoj4N4sG5nz2Erbxu835Kf7AHK",
  "key33": "3z9kBSEw1Rb69CTdVjK3ufSTtTr1d8WGQYSnL1Vk2AXTHhFKaME49STfGoem4nTzW4yWZkPttBYEpKz4pnsNCT5f",
  "key34": "hasKFJ9nMHyT9fJmhvJby5uSJd2RdJXx5xWEcxthVrmq6DvBUq3hWnXaB3s9ZTMzA7zUH1UCvaAzbndciFGvZtZ",
  "key35": "3t8kV43XiodLsDwiot8GyJk72467xiNjzDHTjNvEB8sSNNVVnFdHTUgFfCpfuomk2ZB81DsWTtxSTc9kFUtP5U2D",
  "key36": "5bD7jCJd7HMFrJ1Bigj2iE6jKyX8wF88gpyoCZhYGy8HBCqqaXF1tjazXVK1xkKtvvPTtcmN4LkvcZGS35hRhBC6",
  "key37": "5VnSngn737BniN9NnBHCc8RUsmtrtbvqMfVCBfHiMo7Q1GbnRNVtyAjSG5Ni9MRos89qDhXiT8AnwPwYJ9i7gYt7",
  "key38": "3TdDkCcqd6naugLR8vxwpP4Lh8nsx76shjg2KPq1hLMA1m84AzMJopxArrYJo1pb2cWfL5rWT8vneqrco1cVnDJ5",
  "key39": "5K5mUDxC7mzX5K9vJoEjKjWWuG4RiBrQgujG52rH58pQ28akDd8S4rZ5kG2NjVrTdPvRvLN4a7Y3psGUFT3aZYS9",
  "key40": "AiUYQa1GJTLgRBxXzUvMscf9WDjAsuPhEYLxJqAnmJ5jL6TLCaQs5ZyzPehCTUQ9QTF5KUfhqmZYYkD4dWjDcqY",
  "key41": "DFWKwLLjGnQBtje2r6gRuA5qZvXZMbo2ZVft2UH36eNVK3devQ9TWMV3QsUqfEvC1q9whCQpEXwvNP7WjKr1x3s"
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
