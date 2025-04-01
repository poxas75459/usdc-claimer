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
    "2UfUhCVYGmEiASe2xMvQVvmpwdxPTUVjE72WHoiMQPUPtcoRnp2wN1ukt9VuodBsEp5SQJNJmuESyR9D3yHgBDrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pW57tC3jQJfBv3XaBEZ9U7EcfgTzxUSFcFyAdYbuFt9WY6fDFcBcruEKauf9gyNupSX2Ku5VPHZbMjWRh2J1yLD",
  "key1": "VCkzxT9T7GAk9PerGLQXoC3KTWQKuztJMJJBg1Dfx7sC5hYP9eanysguvkTweopWkeBssddg7vZqq6NdtWKsHRR",
  "key2": "396biQHBFMzzCwNGkLGKy8gGksXyFuqZPSs8iGTv3wSdeWdUk3e7hbEfH2mg2EzMFH2VMyDv7LKeNZSF13bBgHuM",
  "key3": "3akrtJF2Bv87uytFyLCh7xSVjUL4gZKRnpAgn5zEUc4B1SDu1t8WtSDe8Yfd2ShWY6JX95dd3JDtCHyrJRCh5BAA",
  "key4": "3qhoV8PTh2gdKQ6YtSTHGq3yB3skVG8HeGbQXJVPmFuMiKcZDCo6ezMzoLpbHSiVLCmLjNUH7usixQG46sBLpFRf",
  "key5": "5djrj9H8canqtxu9RKvgV1gLAfxRBj6AiF3r7gVjSXDYff8tqSGNc9scJekPVphkyXsjgr4scnNYZvtdrq39PuMn",
  "key6": "5u1cinA5CzTu5xyoAN8ztQr9vb5o72DV3oYRUChus7xBatpq18QkJzT7jMqVnxakHH6CPQNB6sgAfSTE8n2Ekt2k",
  "key7": "Nx3GsknVTZWWy43yLifBeWM6SuRDMSZjFNQCoQcGvL5nza4Ry1aygXrn1YVw76iKTP3AcK5SuHqJp6aLT6sDTCr",
  "key8": "rWFVYz6mM96mg61g31tJvSk47ytvfYXkSfgYjQVn9Nb6pVYkFFYnFvMEFsrnEubuH3PE62GDdNBVwARmUtPM9pR",
  "key9": "4bdmEWaZ9S6MUkE8yvpSbuNpfa88ZDsc8QftzLCbwv8T7ugYggMtGMRoxi63BfdiQXU6WnZaxjPR7b73qkJNgGG9",
  "key10": "662AFTyYng1wvm323SbGrA6KTWcVUDTvfuxtashdSg6fDjfjgNazmBugetPKKuQ1weLxfsXbeQ42BDYG2y4jfqFY",
  "key11": "4nYqEQx3JeEE69D3mZpLVx1uQYzvanR7hxQbcDG9VY7Utje9V7VdtsxMTEqhPDREBWzM5cfio4nBo8UQACQ2Aokg",
  "key12": "LtSPyvM8HJ8eofTsSPA8vUFFMUfXNTaD6G3ZktP9qmw3ocghHBqQUjNnFCvMTkRNoD7e7cmt6AMm7rQ1u3JgftS",
  "key13": "vnSLDrJ2LMbmHsJRUS3GBKNkXFfB3X4SwNCWTPFy8qQFgR5Kr9wLYeHQz3xkBx7qtaXVSgkAedrgWY2sUFSbxiY",
  "key14": "3fZA69n34gC6Hr1Y59qx9o1fzZqxPaTLzTywR79ZBoStBfbuMTRTYgHu7Zyxn9VTn97WxgWzLsvM8BpVvLycHUz9",
  "key15": "3kMjU6jY7g7s1DYWbRibJz83dDZK2KPKLnWM2A4zL4rQyDpmp91dZcK3cbSaZ3Bcr7QkQgqFjjxTcDGZnhoYwqfp",
  "key16": "3SccJ9qgMCDqZiABKsTzVdmvttmPM1pSXdm4QfpzotEaD26g6wj6bb58EiSXPf7WuJ8xQD9t6oNfMMbxVmKSAxGw",
  "key17": "5GQM32JVbHqnsxZtT6gw2gczuVfHS9ejbBcnFMACwiTVaiiHsgT5hXjkjBWe1UFxzRHFNvCkwTD5LzcYJneDPcP9",
  "key18": "65DjaaG8AmmFWLYtmvhYNRF1rvV11tSMc1dHWdvYc7pjisV5VmDD5Hx5gZLsaEjCzPdnfKWZEd9j2tRdoZ3MPzYX",
  "key19": "TmLKJsJcTFZ1YGXzP9wJdHED32g8LVRTFeoirkhiJABM6azCfBb7jhP6Fy72dqzR3y2yLFYK1h7rr7kRZEr5zQn",
  "key20": "5ZJN2Kzxfybxa6w3HiMCR9eG9ofJ9tCX8m9YNDDUmCHpxfFyGDuKvSDbsGmeBFQigymaHywzVcogbtyvqyob57vA",
  "key21": "5N32pGfeEgH6tKqZFp3vShMKbd8SduThubzG9C1FeJUgWLig6hJcdXGUzE75TsQoZq9iUHwwNDDKcSntY3qiTq6a",
  "key22": "4hF3ggApHiTwnSDA4FZdb1YpsARyTVzdASy1xm38e9EhV7RCajw7VjRgRueGghyVX9cRwXaZ8wwLp93MNqRATN6F",
  "key23": "274WDJjLz4r7WRBw87CUoEhBv1Q6eJuvq58eRqMs8RisCo69ffKTS44Xuc5H4xhacTSxStTNF6cLytEuAs5CRgeo",
  "key24": "5cMwCoRjWPG43Dni7DqE6QJoULeQEkNUhDA6gyj5n5r9cuShEyUrMSyM7FHdNw1JsxhufNnhx7v4wyJ8dcow7Ffo"
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
