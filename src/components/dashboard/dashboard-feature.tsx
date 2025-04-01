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
    "3RFfiMvqTfY64CgxcqqiiFbubZpXYD34UTxFp8Qwzo8CTtCxR8rShhqWjvNJKdLs8AGZhG8ZD1XwU7m6UZF1PnZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nHJapoGLSBXEvxcPTQMp86VpyyjeGF5hHBvDYaHFiAqqyGYg5jsyjLA62pMZ1UHeUXHNfGirBmJZ3VWVAzc3zfC",
  "key1": "2KxJWG8Y7MFEg5bx9qYVeCLDgRdpSKEtu9x4Zp4vBLfyTmwGCrc4ka6CxNHyutGymCtBcqAcaTeCfY7pg2q9JPq4",
  "key2": "4uxWmJ86Dzi6u4CB4FSD1A5S3cg6YHaHGH2HLM9Z8B715miuebarifD54yz5YxY4YceLvNfKkyrY5vD24sreDLXY",
  "key3": "3xeMJK964kWJDKyX4FzguBcLxeCZTeyjFAEBBLEVvFW1aeqLTrPmGW6vyGwjzGEiB49jJU9hEJ4pQG5qfVZitfov",
  "key4": "4H8TBQjRiUG1VsMb6cvBpWxC1ewAsZE8Ui2v6VeYR5KKD91t3xL854yugJSC3wPS7wQ9pzCsMuh42jypiwPQQNnB",
  "key5": "3ngbmQQWVdx3GkatYxAbmAwPG8DMAVphqSQDFGRDm59EbHPMjdCLghN76mS3rWgLU4i8pdBFowVM9Jfzm5vw6kG",
  "key6": "5rae5p6TujjU5foUZG1MTUuDEkGrwzkQyh3aXV2m8bQXYgMXEoMhpVzwpgu9sN3CeKfT9ExEhz9TRQpyeZFVuKp2",
  "key7": "2FWovifSy9XjitTWstH9U6q6FVTMrgKF6HXXQKWbbtU3RqRsWRkdzib5cqSFa6fX9pWd4V9XXBprRM8aGbCRz4S",
  "key8": "5qaZv2jWLSmcYhqez4ZGazrLoG334LrLEpXQhdweZiec8bmu42fkbaGsGDRskihcNc7Vw1URhn7strtrGCzxSVoC",
  "key9": "3Gvxc1xgjgzhFYfm5W6bGLz5MQna5sfRcNobbJaPgqWBrKULe1tZCmpbRD3QT3fbuaZ8U4G1mCrTu9aZFwaXWhzU",
  "key10": "2sKcv65Emd3khztxHJ6FvgmLgBGcdsjwKwWdLgBFUd85V43C9CJVcbsGrN7LZApPug61gSLuMA35Uk6t94zeoBT",
  "key11": "53jTft7Ab34nk4tf4dAwju6XiPiYyRvqrD4bspPfRsYnZrNcBMkPak8H9mDja4mFqgsme2tVzDLinv4QcA4zRRbU",
  "key12": "3QdfSVQtpHZT38rvL8bNzXNXHFcR8Tx9RzRvVyjyWPf4o1ybK3wQeFZZCYKY4SfxwKoyFyG47Xc28YSqptWUGfx",
  "key13": "4pXJz251v2sx3N5Vb7VfZvXbMnN22Gh3L7Qn2UvxLESSnc57KBD9SNuM5n1nFCeXaavoz6F3ELmS3eV9L2xS2Hpr",
  "key14": "4GRo7D8PUan9XUBo6wEkpKDBv9R75cEtxY14A4naipY9qffB8JKMEH8VkSBogSTYm6vDZNr9PrvzQ2FvDTDKyceW",
  "key15": "55xCrcJwCJEQiKeSP96Tp9LJj1EWkeJHaT92osWYNtE4ht7nifjvXFjHkWaj5fiJyaEzDWTWva3qEWg3HQqSYfbE",
  "key16": "3AGXGLtMSCRaC2BPCHkNU5wf1wLGNyZRg6XZdZG3uE6uyLDS5BQc8aGF45f3Vj67jsgdWFKzn81mXhW598ru3g5s",
  "key17": "2Jpuu5fJNR3z7vSu9XBWo3HJGzzJnQm59F5r4JJ2P8gGZCXPVMHLJfZKaNrdwFU49QmhPH43zrN52PUknC9Jq6L",
  "key18": "5aNtwreuNCiU649kXmfhj8QkcKdddQHDy9htCGGVkG7FEZaEYME2kXP3ztauUfPNnJYzhPzRnqu6qoQeJ1PwCpwF",
  "key19": "4od48j5A6XY42xNowec3FGfTSrPUpPS6RGk3vUX6CvsNwAkzSDveFpefvs6ecyXzqynWXmm13soNw4dXymN8mWAR",
  "key20": "A9onhztLxVkLDitbdG6F8n3kVmAnZeyR557rbungRz5ogYKwpfVMXCcr8Huf6HjaXqYgJzs19eHHFkwEWYNSWox",
  "key21": "5DYhtDgbFLXuZboqy5cKL62fmHadQsC4nCDBCHNEgh8KFen822oxWyuzBpaDJDj9oc7tSKXAc7RGKUWhs29hsCcf",
  "key22": "2o2resSBVshmf2Ysj47jHYELWZaHJ3VB9JMBXB679wvkZjrJ25aGCZVAQTbvkyP47fbosDTfFHbkEDhCAxe8Ah4n",
  "key23": "4UJ5wU8tqevVdQreGFdkJEVYZ6emrBwzDNuCg8ztH9vjJr3kU96Kw1oMbaayERoY3uqLfPBwhaanPBjhNmqAbeqx",
  "key24": "zN5ph2jPuqpotjfk6o7X7uCh1rqZUpCLQMk3FkfGU6jFf9cvHTU9AcRCpUdUZ5dC8p9odCurQKpMgaKALaQyCHa",
  "key25": "5D5gWo8jSYbh3qNGT7a2SN2f43odGq1vQDgw6nir1FoFN573aDZw3DDqxjaeBxdAiPu2UpTZ1ixfUHRnMoB4XwzQ",
  "key26": "56uqYGx4Pp73kC7REkxexMAZy4TePS3FRqriKKZWqiCvWT6uUZeBSCe4MmjnysMZseNDfzCsGbppPNzXHioyuvD4",
  "key27": "mSNyxrUZgqXpmBkDB8KjfYv4NhpSkHYArF6G3aZnnHLk5oYkdvJfjbAt71Ypr4T14wDnPUCwbPP4BZsHk8nqoWx",
  "key28": "2KRAiHXSr3utFSSiQES7DQDbyLJ62EtazNpNC6dnCpaghrc6YoP1FhvLCJrFEMy1PJpTfieg1u7ecMYkpTrfAPAk",
  "key29": "2o3r4i19HieeTD5DRFbArVUmPQiuqsp4N2hdEaft5cQGdqZK9AD6e8LHW1vuMj5gFtir3vBs9DCzD9feczcY2SZ4",
  "key30": "36ffR8RN4Dj1PWzbUzfaMQmYchR2bCYSGKAS8QVN8mD6cL3y2MubmpRmMS9PWGpxegcsowhR8y31ByCqudUSp86u",
  "key31": "5XnSdRNW3Z3JYZWTZBYZEkU6V6WpFLe3K3WpgNxY3Jj4EjvvJfgf9UDb6pzy93ApvieFiUxSEztdbPyo5zA2R65R",
  "key32": "KnX8i8f23aBuLv1YBRWtWFdaWdb89wqGPJJo2roX3xyVTq1JnhbDH3prVvGXoWVDWyh61CPqqiEJNA7vXcqQitD"
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
