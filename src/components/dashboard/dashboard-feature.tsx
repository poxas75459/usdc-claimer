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
    "5fsUBNsuDif3e9jd7qVBzbDWv6dru5jc4W3CNurd78yzu5fMZmo6yDr1C7bZCAYfuGcT4WDgwdXaXeo4KQaM5icq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MH2mJaoEVx3kDzwrxa8pTmbsCCeTscoiHsZnXWCYFyHS34hZktRWDC1vXcpgtM3bxX3vw5GzNdrehzc9HysnA5N",
  "key1": "2mtVjLwQa7nytr7oXybspw6HDMKrTGouq4VYmbcWETsLgHh2Zn7UdFSRM4pZcRpZU4pmjPyNfzXbQMWoFzHEDU1b",
  "key2": "3Dg9UJzAAGxfVYkG5JhgmdcKHKeWo4DmZYiABDqysCXgQFqFzRmEwZ6CNUn6EfEWtSBQJGFyQfmnhpWSPmnRnirN",
  "key3": "5DJJPTCE7KGq9nhmWr4aJPDhXwsixNmyGzrBVo4cNvcGEPENG89vn9MemriiMVvVJxBYRwB38NJgSfmsJ8GAWriq",
  "key4": "25sgsxsYehHrpxz8vy7HzW9CCQNqBVgFrc8o1bLegihUWF7DFnj4kLVUzQsxJkESHnoTnYUKrCefq91vWVrVqkGB",
  "key5": "4fZ8CQwD7gp8wCsqNNoFHmVGQZDW2CXbNH6NvxqRRFkzKXb68MvoxRcs4rG7Kexrr8KKp6X4nUbsquXedUxUX1js",
  "key6": "21tXWaHp7nUJaFcpYd4mqMtyd5QnXUMjjE7s63tBnUb5QPP1Eso8zGEJ4aZXrvin687TDFLh2tJHwkEwqCCPVgy7",
  "key7": "2ch6VfxL53RipQk699t8AW6jGz6VBV1uSDnDsMUDRZpnQU9ctkosgDqTfrfdLLxUjzrpgRraLA1gHvms3XbknKgo",
  "key8": "4LmhoP3drmY3K4TXJE3VQx6diP5XRSEP6KTQgDFX83w1wECA2meGdCuNWbYQLEpq4Gs4kA3BeeESZ7nTTh2BJhjR",
  "key9": "4nXZQu496CDrf4oKKvMWymtWbMKhnhKUupHqDZTaXZQh7SzYVKzPSk93bnJ16r5waFy75csSQcNdNTfS9hqUQS9E",
  "key10": "n7ig6DwaEHxi6My6MsMVPyqmwgWeHzML1gLCt8yC3z7xZRreE5v2rSvEMo6qmk6FqqDpBS4S7XRe4EWURM6brPa",
  "key11": "54enXogv8rF8kMNEvBN56GncHZaeE9HY4SfF7ruSro6ambS4MKQ5kp64RmbeePkU9ttjoLsibWRZVE3qXxxmbG4B",
  "key12": "3j9dstkSTUaD1Y7bcef2hycU2ZZd3KfrCNwTSNLf1ntT23vPjoK4SeP8PKEQDqYGccBB6QAuMtv4ToCg47gkEbCX",
  "key13": "2WM47MVJLQTYycQL7sqBproJo9WeUqtd5FfRPiCNVK7hkN4cg6P9oFUL8jcMgxjTMANyahw6AxZPQXMcajiukheS",
  "key14": "3LeR5JHjotAKooAHPTji63cPevr1Egr4DULadRp4tYCwJmiLQQEddMTihDyRiXfRn3Yjtxn7CPxSQ3HXnphymDXs",
  "key15": "4xeRkG2N5oEe5GyHoXKC2nE54FWBCWMcHw3a8dqcAeSWWBQ213AL37oTjXLhec8BPZBtxGLDb3Y4CwTodrzAW2YV",
  "key16": "62YE2DmrQqpMwbSAFTiy3xkSiCkbGjqRdSYigVMoiq2dqVUjqV3WGzAbvidck7KuAeUL4bmCUU4r4dEYieYGdLFz",
  "key17": "EWUaMQ4M4CTbV6513QG8K3gwaMLqVk6eGLPMeq8Z1VDnEUgKxqMeCh1JxuQ6PFtMT4Vesc8ZWtc1BUphE3gCr1v",
  "key18": "3X7q25Lok7TKiaLGVi4MdWMwoELHRYxgLG5KB2L4qtkQYbc3jxrSU6RS57reRLYVsF3dWcrvcM7okzQ7KkNHtmFa",
  "key19": "2q5TomsjrUEcSgrxTqFPf8YiGqDtLL5cAgNgWXjrjQkkD7nnP8KJ4gb1hMgLjmTc262Rzk4cy2nJbAwDgUkNZRwZ",
  "key20": "33duufqFWJQbXdyty1m3c2wXgCUXF7tUo4RCPRrY3BaChqeBZQb5Ju3XyqERdupkVSfUGwELnPtGWboEhE3qdGYe",
  "key21": "31WcWMfq2ATFX3CxW8AwQtZfpYCHC7ZZ4n3QDh9fwgsFxQrtJz8jfTZRJzM9gN1ob2owfhsuDsprJxn9QSKq1E6R",
  "key22": "5PF2eb2wUzG55F1Wquy4Bb1SK9CyCdMRoXJBtW9VCkqa3ez8VAWFuC51dFXNACxCgzMNxUtLvzc5wNVochFCRMmG",
  "key23": "3vSSjyxXxyQe7LnQzmMdwkq3o6QAUrHn4AZUhYz18BC2NaPiEjnZByivAzaA6yX42QkRXCVATWQpW8PvGDmCpyCQ",
  "key24": "4cy7NMMukTsZHXHkaSTPLuqR4Ct4Jd31fGTNvHRRDcaPYnbgetfD2q6iJ6DAgymVqkaWayjeQxS4xqJC7nuhB9uT",
  "key25": "59tXhF4Co1PE8NwU6XoT97jzqBinfG8KL26aWhVQBfwPhNHtVXo7EPGAGdkRoiJnJomfeCgQMonQVXEfFbvNP4u7",
  "key26": "3YaDoJBQExWZBMHB5a88sBssJBTSKMYAcWaxrKZCNev8PzkYmFoeqFX14BdiwyqKdymEetBRytKaBa6Hr9a3hy87",
  "key27": "2xaeMr2jsuc5erA3Za1wGSMoyfTRxYP34YLRELAk3pqE9ibcfSa55EQBGQNdziLLNCU92SzJWv1TPzFj1U67V3QE",
  "key28": "3borbU3fA1DniMUwTJbniLmsjFLp2LsdEqQYfzdgRzH2FYJhPrgkyZXCp6wxQjnxaGU9JbHyWiphJzX8uFrqcYs3",
  "key29": "5XPdr32edT95CKtur1vNVGH2gBdycdiDGmghicWQdK7vNkv8hWbhtzVqzjNhDdnmgRMr112xCCW8urK7DbwVKRsV",
  "key30": "3uoBC57FbkwwLWHc2AGZ8TPfCgDpt6Tz3N3zqSV6E5ekN7uk9iDvRN5a7nyDaB8U3wTsDvU9P4tErJ1onsrAYS6G"
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
