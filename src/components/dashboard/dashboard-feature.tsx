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
    "5gXAnVLLe5NNNPQHKvoxcWdYxUXfexUTWAGWzyDC28LYFzQ7W9jJU4FdR8CUvFGFz8zZnEmj3frLxrpe7a7Dornk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dxSPEVKspEHzqb2cPt79p5DVv84HSsqDANyPuwMwA4LNmDFjJ5sqy3HXhsPLeDpjP1SWvJtXgvMDh5omxZD6nh2",
  "key1": "2U8KT93jQdcV2px9CQjb9FskRjM5J65eLPtXP7TTD2J3Tcn635vBH85H9aLraJ2guEd5xMn9kFyu759gzxHjBfKD",
  "key2": "4Y47YytMHy8kWjNkWN9ftwrhmbENp5HCqY7fqHt2Kv5imHt6DRBLwPkNcWNpPTSCuq9rvKVys4RXMfS6HhjnZ1iA",
  "key3": "2Ea87WYviCex5GmHRxm84v2LrtY98V9N7kD5rCTbCTWfDi1BxqvUw2wnLHsHYyMV8KKuqq4oXSaM2EbwEVVrAQt5",
  "key4": "4hqJzuDavr8BnBwHfb7E6F3CKyUGGNWnr9QghpXoCTE8eKcZzgx2DLzw4C8XRJW8M8GK711uaa6duMTPfSfrzoqB",
  "key5": "5q8pmGjYxNozX5MjjfvJp3zwXX8ZiGPgb4PuiFpCL8FFS2wBpkNntLF1tizge6xX4fMqAJa2qAF9eRNfFPVxTQhN",
  "key6": "31xe9A8vUMPJC2JpXaYkAgv1sQPUiJ97N3EPMGgXSPKpMM96pt4Ey6Lv5DPLduYnfpzsTYczS3LduZzpUdoerMBG",
  "key7": "42nu8N4955Zf4siDd27e2fiATcJAA5n2BqGHSCQZ9MVVNpP97smH9F3SrvEsLomR9cogtfbPv6bz6sbeEp7vCdJn",
  "key8": "u6nSVyoFkM9iAA2ESHRFRF7frHwobBBikXD488BsRv4WyJprXSF89QAt49uyyFyMWzmpNaitzUPtGN2m6pZZhph",
  "key9": "4Fq4FfF8Kbp6oG8g28fRjhQsHofXoR3EH88bYw7XrWpT7NGq3SwjxudjYsFGS2VWzje5RH8zTYNCYSeziccr5xM6",
  "key10": "5HrB5Bj1o7d9yeGLc3njStbGLirQLB7Yb3meUPBd8YiqXWk7z3KR5MoeDap4cKguKuXWUiGEvqshE7nwRtvohL9D",
  "key11": "5PNNkQ2MGkLdYWdSRXTAcnRmPxGsgg562KvhDu8JAjQ7G4BMWUEC176wJVDKgcQu7dSam6faMWPvHZhb8PhZiXPd",
  "key12": "2FuDJUfyty8upmCdZgveP3uAZwiVGTBS8Gin1yEYSsAXTZDzF4p1bnqpZ1WsXEkJEwkfTmSD14PK3MWHu3hyZ2KE",
  "key13": "29XdADFQU4sYEcQrmLb3xewjAUzDHUbXby8a2iCqwr7Au93oKronYx7H1H5CWmK5Aw7K4Mi2EQAKcVnyZgqr8hed",
  "key14": "VadEQJW7tuUe7mdNWXR2e7vSUj7ZiDrfNXdtXHYndVth5km5z7J4PvJFRykX1PwHpLxrP2WhdTXDXbLBLKu9133",
  "key15": "x3mr6mDCWLtLbh35xrWWo1pmyvKxzcAJZ5PhHt3RFgZgYEqZgnHzfcXsmsBfS27JyKVqeV7khLJ1QzLhB9maYNo",
  "key16": "5CNCXwcm2cXzGiPEhziKHEV4wXpZavubqFHbyk1ULGQgJG3X7MPfYVvSWk9N1ak5K5gSsdpuV1RpJn9Jkxvie4pc",
  "key17": "bZXshW72Dv9kmUe3tzPx1WbUSRV3CwQM5PEJoJAW1NyiMKU2t7inpRfUwo9CzbTo1S9jvgDFiqcWkqtXH4BV8vK",
  "key18": "3foYfs89TBzY8n6YL1rXAQbX9njEaGMW7L6beESf5BGHr3PQyhQU5zwb4ML8rKF9gy7TcLwMfmJBeHiPoXJ6ciKn",
  "key19": "5kCQXpGkShbJK73qycVR2ptYFxfh1CAT4rpo7JTGHCcnm3GFd1DMU2cs7PS7kFgqZZmhLJdqxGAUzCuV7uMoGXQ7",
  "key20": "3yGKEcZy1MjFKUHj9huv3tfGnUC4fVGgs31LyRk6HJhKAS7nBKoyjtS5Cz53gRetzYJqNptEHs8AHzsuDSAsTeqg",
  "key21": "3xFjEKaXsk6P1wCmKDws7Ex2emahjebswGG8QzgqAbhiL1V45CRz844VCVJSLw26bpeksne2sHqQHatkyUKQtMGv",
  "key22": "4DaSuz26UFg7NeXC1qM21hCeGjGzBVa8okHcg9PJRsTxMK43qWd3WMNtjnpWbhgK7QecRV3fi6oTvks5FhNLwRoi",
  "key23": "5gBqnR4mSAwmutWqiaj3aZ2j393Z3QNX3AfBZuCmNx3cEZix1pLtLTkpYnvtRCK5mxsZNKconyH4rtx4wWKETKpq",
  "key24": "n8Vzj6MKqPr2iSyuhs1CP2oH1u7Kb8nsUjrPkcM7xJiiQzvp3KE2gAJLjyHej8soUNNbuRAbCbYTxuyT7Q1pQoR",
  "key25": "5pK1fhBuvNkuMrsXyzLiPR9j46QrcyAYzxszXhxHvAKEnGpR5jUeNFErHX1z9Be9TS9jGsrELYTxBaJ9by7CVMdW",
  "key26": "yhSUFVa52q16Aa6rbkAwZc3QdeKnU5iiwcrBVQpuB9Yc7FH4QHFaPvT6Rv7mCovX2HW9ikrNjyAejRnW14DtA4N",
  "key27": "4NZKr1XVLz1dBTHFRZhugU8pX71u3HDpQFXzM4Eaukve29MUpf9rHXxg7y5YcLNNPu2NbQfbMLCzke3mVLJD2egj",
  "key28": "3EZptpnEedkfygHicZVgGXuJRHaj86rovv2RRZEkGa8SkoozLe6P2iZ7WYPJiXgwJ1jTCWXruLE3eQ3QASKDabbg",
  "key29": "8A6R1FKwQ9zwSG39DQFYUbjrPNkEwVWo9r3be5VEF7KuXTJu62R8YvHUZFjqgyHL3ZUNP6cDw34YAHjBnHYYpr4",
  "key30": "57W13xehqvRpuJ9d6ALedeuKYyesYpFr9sQRgt81inXxo8LMJMwsFu9KUt9pyo1mmbS4dq9FPTjXBvdJHHHXv4Tk",
  "key31": "4vMayoNtKnDAxxMvJqkZ9JqzeRNWuoXBnxU3eU76zeevU8EtCDi9Pi9sNTgX1dmGuRAQazWSSisquWX31i7M9aEB",
  "key32": "2mF1qaVjuSwtYfjBEvHDsyC8h4fqFMutsqThyVEAQbQRndiRbnCLTDUxz2cDnbAMrcLWLQaFF68AyYQF2zZsgLKf",
  "key33": "2iTc3dLFssKP9ZjANSzcfsjoTJitVhFmjPX2yCcoGcrh1JVQPECTUFNvQQi1Ht4Ffzb3AECmBkgb3rL347icyiBd",
  "key34": "5wED7WH7kZ5Y5Q7hbt7kcU2doFte6BNNPLBU7n89PPKQK8aw4tHysgeGeecTFx1umPkYJtbgCGSGiirWHbDnPyPM",
  "key35": "nMLeYJBdA7mktaTnLKtp3BDpfzc6FAkncFXwRewnA175W7zLzBLHvE8RWusupyEpHjhnGxHcnByLuCqEUYe6QvX",
  "key36": "4eLGJAwRd4xfDLceZ8oyBZxsX3vXtZwr8Sgtza8F5Kg9r5azxbFkjD3JKwMNJmM589VKsdsxckM757PQ5yYiHrEb"
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
