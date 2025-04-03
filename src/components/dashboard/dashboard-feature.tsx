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
    "2tQm4WdZdWHXmCydNwP9jqsbnPBjktWaru4V2BQb9dyUJga4jYxrQf3zUNWuYcXZg3nUjThTN8rHDteZ87y4iKr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GMv78FWLcDkgtxwopjNgE5UkjZKYjN4v6GDiS8gmq4cys3nRYpKASJjveeJeQ2vkTNm2jpGjzHNnNQYiwmRh4Ay",
  "key1": "5pU83RqKFaSt8aS1E8DHiA1dcmsWDvyKvSjw23wnVWKziHFDDs3168jmBzPoJUQTLuXFP3HubzrjQKKiWBPGr82G",
  "key2": "vzKA7irXzxVyHxFSVxiB7z9SB1J6yWchVtuBWFHc43nKoxWXpZ5kTuPNAA7bwD4VsKYA7DP7FNmnFq11F8VwSAz",
  "key3": "5JiHjAvXffDswDesnJmWxF74moLqvgCQdReSvNQAQ1G7aHoDEaoJXA9511n9JGjyo76TznUrYzH77V2ywcaWQ78U",
  "key4": "5iavw8GfQPiELK9ckpMvy1ESUurDnQnd4QjMabasjLvXFkmAN9d52zsRictMjQtHd4ppV9xphVTGmTgDD5shRba6",
  "key5": "3HS4SGBv4UQ3yb7GYj88rJAHChxBDeugFQD58kWA1bHfrqvbiU8CuKyUWxH2irLaUJN2ccovstVCha9CyZ1cDqof",
  "key6": "4KSWTR6h6yGw9a6ymrHZYpDNZX39zpj6yv3UqUDyLjPzgfwdraDc9wZuGKEixRVwudJpFcwfyEgRXa3XNKKeqUd9",
  "key7": "4Gu9eShr4hGu69sSPgNJAi2oG1KXq5kaxQGzH3MnF9TLnVar56TkYGLRZ8LZoPZTN1Q36ZGsn9CoEAnsMsqUYjsW",
  "key8": "5SC6RdfqJ9R4uy3AaEBYiBHbwG31ZceptYWecPHnHyg1D7Ek7WGBG2aDsyoPbNHWYjNN6KWJyEVBYdgDK258DBFu",
  "key9": "quSyr7ypKfqnHfmsBd4JLCfk6WvP4gERyboEHJCY95F26T2qEUvNfkQhk3XL4mDxmvZEsvH5AZPADjPPyiX1t3z",
  "key10": "4ED4W1zDXjcogVBQBFM9vQvjL7tCDDg8bivNwS6952CRgv6SzQrLG4ApgeUW27eY3RDsNGJfdJdB8jMuFnaiZrGp",
  "key11": "4SMjfq6RpcVbgBXUFLXPLSmHy9DuuE4h3TiYmFp6F3THfDDkifCrWxBM1MjAmNK2RCvcVmHasegDxhY8Ji2KJVkY",
  "key12": "3X1psSuTuuGL4LQ14hkMvRWf193gCQr2nhvZPDUzJWhxSpx3tdSzJwktf68Rj7ApHwcVCtpXNpwjVj7Ztzorjmem",
  "key13": "4tzsXbGXYKfjGBhM2YYuCq1hSp2q833YdZKXzFwdcRNRZXonhzixVXYx8Xcr5YwBptvH8T7tUq7QcejTf4hxnRGm",
  "key14": "2sUhYAs6Y93Bds393vx9UrvEzMwagpMbcfY1bVKmQVemGymgFkXrjR6nPz7XuZAtmBXRTrveG5LFrWRtkFhsb3sG",
  "key15": "5vSkostS779h5FNdJk2TZymBY2ggUfkZPBfbAS2j4ijrxzXuYgv4GNJDDeTQ6VZ7ANJBwmF8UwRsZVeEvLq8rEBF",
  "key16": "4Db8Jd5Qir4J91R7CCrVkGB9KVTf9ChW15mLCNmiwF7tUZohU9NL4MzmJwMBcCCvHYwU5bzmZSVTJpV8uK8sBdVk",
  "key17": "4QjcXZkTVHYpSRN15j8EG7BKoijUdid8zQtV6ytTMzjQCd8RDr2myaUvc8j4yAaLm4moFaYrKvnCREr6s1QmPKG9",
  "key18": "5QHejJuvQ1wGLKGMddTn9x3CKhNetovLozau6PAgSB9esRTS5BLTf9RywECRo2UjkSKudWGNWLqv6cppvRuiLkpJ",
  "key19": "5MYBh2aNqayG7K5gFkNmFVu68ChkdGpAMsfsN29i8FDis5WRih21G9gmjy5phUpRe3fKMUymyzVuNGE1ccvvM4rF",
  "key20": "sythfa7uB2tMfparxqnbUK2EoCwdcVbZ8tioveZQsikvYUUAJEDB7iqFS49nuyMfYnMFPzZCnbVHiVfbS75JMYt",
  "key21": "4DS6Zfp9wKK4qzgXtZb4LPzSpE31edVsKmXFw8TZViMWKTiz38VV8DgfeCJVuGgAyz68vG5xq68CfVx2hS7JxMcD",
  "key22": "53VBt3EAA4JJypi1K11mj7soMcbL9oadcRxGDN9SwfMWGvT9uXZX9EmYKZx53K5BfYkDNbCgMoEY5gsd5mMk8DmB",
  "key23": "4mgv6rJJk42jgRtCXAQcRQ3jmcDzmZWW7hoTMLRgXcAu7WyW3qGd7yy8xvu8t5eXBoMMEBrr4sWxqMA6ZraaGxUN",
  "key24": "NXxa6csaA55SsBE8LLr1tKomRygdTGUjJ9VXBQXoke9oZHMMmXUyxXwTQCJe3rw8FrxbvNvzjhS9apcgZn3ZWWx",
  "key25": "2bxHihggLPZJMy7SVBivqWaE5w3F6Af8pW8xsZctqyTaRavfX7ZwrTNdVJCWgWdWZnH5JDSByLzpn79M94GfLu7S",
  "key26": "5d49rMRNuHw7PZNazj863E21aY2y8YdZgtP29vKHSfyNLbW7Lcs5ee6yJHQfABBicXejUu8V3wjoWWUZTBJY9wk2",
  "key27": "3i581xkSjcLnSVu6WCUdA48onXkcYUTFPaECvr89AEAFfESAtkFRgGzfBJrjU7fpqK7GWyM6b3brnfcSPrw8L4bS"
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
