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
    "5ktHmzjbSUyjr4nEFe58fZwq7LPbRzDwkhx5CM9NY5TpmDKR3Fk4614J6bLngGUh1bBWArm7ReXYcmS111pPfT1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gHaNrGTkGH541AVsWQtPqGQSjeDeqWhvo8jMDb8LRbXW5qw97BQQmFpcRpV7MYu5yxpNk9SLka2WthxxFhijUQY",
  "key1": "WfaVAZzqPMYb1pVhJJ55QmjQJcJbMbP3cArTi7qLbnPr4GzPFSCxzv2uhK8B6ywdTYdP1rm8ZK8rUYtMoj8J2Tp",
  "key2": "E25bPXHUMgdgHgi77s4f5QeiMWaoVi5FDRmZirY6DyZWYDbxgoy1PHLaeDYfKb28j6dxZdYp6cgbhtyFFhJh2WQ",
  "key3": "5zCZynB2LaWGMq7uH882i85HeLfishiS7Ht1RkBeWN2VPdbzDUBkEs7qhesuQg9wBKx5vMiWw87Tj6p2fBYjdPMs",
  "key4": "65a1ovfFPNESRk3MNk2PK6RXCkU9Jh72FgafAC7i3eAJHf5Pw9DPgkKW2tpoVFytiMHh8fJ7seKrPsHjhRvZYaSW",
  "key5": "3MR9WBSrYGpGqsgKEHa8rXCq7ZVn6WD1yqjcMFn1DZEUgRAnE7dqj8dQvkvBeXfeXd7D4CxBVdGkPoEaYUjcsRGp",
  "key6": "HKMjPpPWFdiY6A2BebyFiW5ZbYHTbyNkiRAuiYjtcTDVBfLdv8SLbzwVM7vesy8RM74HUtHrzT9BSoQajYJJBui",
  "key7": "3twG4VZSQ8EYJJLWo3EDSdehqA594N5HALfbFFHvX3ACMVpoyBd9JTcmK5YVqsTg3ao6CTZsYdnsSfQdUjazQoDy",
  "key8": "ViqKYrhyaVTTaMSibFJUw7W8zKHxgKfJmn7CkibvmWaaCmJCpiG7x2jNbhfgK4HMhEx9AdtB4mdZcTKbheJQu8L",
  "key9": "62P2NxPJ8VtGQ3eyHJ6gfeGi3pCw1f6hPkZq39yYwVLFFFGvTane95FmpNNyHPs9mxLeG6tTrb4N2MJe86jzGL9A",
  "key10": "5FqTwT3Aa2w3WXCD9hRj9gFhb3d5KxYUJuJVJ8RNcvL77ZeDXfyX8XJgD5YD7Q6fnFm1mFL8BAtvTRfsuV79jKNS",
  "key11": "4HFM3xehNBi9hmiGKpmMcgaRirrGgt8XGP9iXCZj3tj5SwnvZF5XUd9XTnCANZvGyYxcX2aMZkE5oB1NxebYpE5m",
  "key12": "5un97tg3CKJNQkCB1Rq4CdaRPaeMXvVh6Vs6kPCtVWnBvCj2jd2CWS3xNzMAQdDkQSWSPyV3v7RQ9gWgE66SNPx5",
  "key13": "2oZxphR7N89ENYS8nT6qBecPJNVZpJ2bPfFVCofiLLinGkhsfmU3ArfghXDRjgXu2ndBYaCyobxeap19m6miG4cN",
  "key14": "XiygvuW1bt8RsdnQCznNKuwnyLpnSyGK2cwcCcmSF9thvXGWQMV4zuqzHa8v9XgpbdU46evAuFLJYHuAnLiCiP2",
  "key15": "4XVdKebxRikHqAXtzwWmw9o74VZ1UK3DK9Q1R3PRXnw6aQK9YQERZpPqvQ9hLx5RUZvrRf82A6dvisiBdmmcvVck",
  "key16": "214bXaBq7uKP92JEJLbjoUCpJeks7yQEdiBVgiSoJBTycNzXCr95iRw4xT5F8CvnXk89HkrfoLYsfhU3kCnsPBvF",
  "key17": "2p5D4NUCKXpPgpnsQZ4Nu8UFnfLuJHTUshv4J5VqfEd9hVn4pS34MY5EJrCyDBM8Qs1THutbAkwrVcCxDVDVVLkp",
  "key18": "g4cMErM42fXYtgag2jpDQsnmnU42uaF34nVJ5MwLjnBYkaGJFP1aitYgSgCJjDY7ptXBJdRQzdvj47Yp2f3MM4P",
  "key19": "5V1e9q7jKkezdxg3KVJ84d83x8Wv8r7nuRr9SCEC4DeREyzgvkE1pntzNKXfHUBQQNQsz9JDMtQgAztzEeK1BqCZ",
  "key20": "3cft57sgYcr2so7jrDg1Q87DyqegcJb5qa28uRqrJXNiYDzdmvofa56AU8HKEdfQvFENQD7GMebGzbt9jcDHzQ6F",
  "key21": "53jxQhi9MKxNqcJ539Z4xeh1sVsXrtys8qq9Nij5FjM5XcYJiSFvwV41NmGySHCQn8h6SC7qWVEzZpJygWLsGwEx",
  "key22": "2Do9iJ1FeWSAnaaxwb6ZXrPjmczBLN25pP2eYDbfFyLUAYG1VpPSnU3bP8d1kHQs1ggmgsxeztKa8suBnUdk6Zzt",
  "key23": "61YNLaSAyPWgzuonYMnWHmyU83p8wKqccmsDePNdj9HKvpFFyCcDp7TVhv7W4vRtVKts4fbLCxgLXdSBW4ZteQzX",
  "key24": "4qSZUxsvxM7m2mFWJQbAA8jUyx98ccQytG43QEnYjyG9HSA44NL83DPvjtjBRBpABmgKHabSu6xvJHW3UFqnk68U",
  "key25": "2V8m2L1axgvPSrubXP7bYNzV5xqjWLuksUzFX1Q2DmBa7CKbQ7awY9yaFGadZptKxPhGdNXPC3H8RqTALouGgzQ4",
  "key26": "63WqzKyqd5QEiq4Zp8Bkw8n6wPGyGFPJrZzCcsvb62jGxNGMRjf4gEa82g9q2QGXp93zfGSKaujwKqgFqbiUDY8H",
  "key27": "2WExpm4Yskp6qPXnigeHQNgFLZjGrUD8Nqn6CLkaZNjFUvYKKQLf5wNmFXTRcT5RigsGy3da6meHrRwuvZgKXqf2",
  "key28": "4hKaC9j9X8fdV6xUyjGoYLnuhier64vh5FCzf7UzDZUnx3gvmMD85fNoeYJqQNBVVrXGj9pN4vjzDxiJCNfyWgxc",
  "key29": "veJKAzEB7EpVPjZDUnpNXoz6wjUfvqxtsAQvtS1g1ARZVDBKZbvYcdDMxUYjDVvGbYfisom3udMCMUr166CvYrU",
  "key30": "5KBFuQ92Va8Ff516iA8visx4QCT6fz4dfyaoMHCvckcAHkea9he5BBXePQd6vgs6t47w4pFKRms1gWaHYCtxn6aD",
  "key31": "5xMq2VicuYdEBNWMsZCCUP3TK9DXvDXJr9y1ndKpNxZGGvDF7rKqAKwoACxaFVyb2RCfwoYqYsRGardSY8xxoHzA",
  "key32": "3n5XcHdi7ss9yLQB7sx8mWTtLP3oGUShEMfKujUy1rDxcRZ4fPp3gBmdBH5ffUFuFkVuxFdTbB81BQecL47iz2DM",
  "key33": "4raXnV4SJubJtk5HcX4wS2kznwd3DkYMQpAggCFvxjCfeZnxHsQrwLKEve1Sa4ET6AuoaG9G5vZ34VkXTkW7RsFk",
  "key34": "4XbQnxpGc3Zh5FMAbsDNFKV4eocTJKJDLWQtSERq8ZUyReQz8kJbcZH1RhzK1AYw8cP8Mktf6Sru5i2YJ1PDDHw7",
  "key35": "5jN6H6uf4hEXc4ChjZvVHXkw6my47YWdqYBsFHJW8zm5rGMqNVvAgzGzL9dVq5dz5qR6SkUxy6h7qLxwGBZ1bVZm",
  "key36": "3HwXALsdHCsjHFh38vFHkEqMcLp1SCNanSdsiw6s7nya6Y9w8HyrNTFrw4UaG9dbTgVFFc7tTamz3wqKqQFSe7zz",
  "key37": "4xtCATvnAyi31kGByDZMxFahb8Ca1B86GbwxyRBT7HSsbjEA4GF1Zv1T4VHiWducb6dYBk1Ny6De5bMkvj6r96gK",
  "key38": "4m8S5MfeAnSgoWpJpwPAk97VxqJuQCUMKesVNA1Qh2ZCBeJ5dKfjH2UzKKdN5gD6pbUwUzQgi85ddCw5BQ39NcDf",
  "key39": "3XH1uwrptwnf7yeAzyKt3GBjAwahPKixM84rd2AhwwxgnfYAAgFDnUaYFeVnSJiAq7pgPQnS33whU3YTEHVt16cZ",
  "key40": "GmmvQBLvi64nugDkzbtXtBW3pJGuD6mDPXFkgkYq39Gs9HmB9FbrZEjMEZ7J5Zex3L5pr8C59rwWAnVX2t4ucHs",
  "key41": "3RcV4D7VZuGznmiejbk7b484RAsnXr3HewK6SqxdWUPEMidhKdtAQ6wePxg5TsU2khnKHTfziUtJ4PQbNGXWzqA",
  "key42": "hcPfnnnTdPHheT6wg6SXrWoUtcFC49vwZc1uwG69Jc8Wdykyv3oSeVfLpnuLuwKssdNvLd13kKLtUvejTygJDKz",
  "key43": "3R7ytQqju5sCAJBiow7TXS12L3p3FQ996mLB6h7tP7pHuVN7vYSVQdcNhEo2gBpb5FA7KjUWKaGmMxELREgnoezh",
  "key44": "rcqPfdeAtZX7shk8CQexfDRGCg18DXizUL2HLv2mbL9rG9ffgZK4F6y4sqmfA17u9bkPUDmZ5AyNLhx7KhF6m9q",
  "key45": "29KHSLsXJFPLnmNvh3e85nBWhpMs5JwCbvXohKns55UcPMs5cvK7KRFVd5ERFmAfzrR89c5UHZCJibPkQwEQNcCC",
  "key46": "3KW9PSAbNfBvPggEkNuUZSLhtKUXVSKwoLpA9XJ5FRpmdTLwMdrzFWqkc6q3EERRw95fyZ6NPqwYqHLHYX4TxzkE",
  "key47": "4QDeY79U8EczaVXL6AogmBRtZnRuykvSa2p6Vy4KZEERMYmZp1AqLUJK579knEPyaqAGrMBQEBNkECxPL8zqBvP6",
  "key48": "2rYqoDnHULk7tTNQ1fcPm57ndk5axuJMWjcka98FwraZU8J18UdcjMWsF2ZsKmtLY6gGaV7y1R11hyef6WzijuUx",
  "key49": "66DgDiZm3e5Mk8ziSoYn9tXkmiSKDtANYTYo91SjtMVFmws2f3geXcyoFJtsx5WCiHr1JfzLF93xrakWayni4HnJ"
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
