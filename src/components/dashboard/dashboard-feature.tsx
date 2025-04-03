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
    "5hrMpryhnTzkiq6BhvCcyjoCbpkm7jVUhZKp8tc37YA9Jvb2JfTnbL6n37VRzZ6LN3VSNoWej8oYVD3hpoqXZAwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZnGMpg5qYWZqLZAtRo8hU4FLSpreW8bbxeH94HPRRZmeQDpevpsbqMD6FnEMLcjogNvoEKAWRqugeyEazr3apUc",
  "key1": "3gj9jLNfJEFQQ8cDyqG7o5whfw965CJznpr3hvyztR1FtjVhXhGrNhzj2e7vuhVrgFjYQuv4KHov7cEXg3eHsCFj",
  "key2": "3nKfyU76TpwN3FVZWGwBKmpbJjRY8pLBEkFuxU11PzUCE1G95LLzYEDj7s6PLqWdX6hpRBzjyA2zeig7vstQgwRd",
  "key3": "4Vffwts33vdtF8tB1uxJyWz8qATvNcoYYrXS8bTvXzUKCAFSFfEEbZykbZ6svE9hKDZjsXFNrZxQ7BG2vwgr7D4g",
  "key4": "DNjB631Gdn5ysHQwfe99V9KTW9MEDieamUKtBzN6XtD8si8pP1xBG4f6QQz7VbJ9BcC6jn9KwyM5V2Rx41NLDUB",
  "key5": "2pDmPSWyqrAUZay5sCbeoXZmQ5NWCUPzr982yMpaEF1P4W4rxXRJ1uxYEt8CHQ68FU3R1V5ysx49bXVEyYU8PugE",
  "key6": "3EZvQudnxgeZhaFM1XFK5o7qnrEfmw4dnsXQiuN61VCn15N478L1jN15XG2xyvqrbzCoLFFeouEZt8EFxP5SUNao",
  "key7": "2tjqJvdHDBXusEVGuP2KijdWY6kusyN2aSuv89V6378DBWCVmpLLKJHHE5jaD4drcmtEMGmkFekfbEnAMpnomQao",
  "key8": "5tA32hAYQitp24PDhpYeV9GSzzzjo6hbDeK72KoCky8gBKjavSPcdCRcBBLqCgz3aDm6EeURNgycezymZBmb6XFX",
  "key9": "4iKuyDSsWADv4MADYsXFTcUrUqYyGFQL3uKTvhBPCjxntVoWbKEpJYqS54QbKjc5B6ZgPQE15Yam3gGJNRwEfxAz",
  "key10": "3KaQKmRadLu7N5Uza4AoEMMnVTpnG7ThGfEUGmrVtbgvSqeU5sU9cxeVWWcFSWgwBDy1RJkbEQh1DySZeVJknc9y",
  "key11": "5Dt3ZYbnKsCoBMBo3oPXL9LJhknFexQeD8zNynkk9sYcg59uBLVdvtWfL7aPuf4Cr8eNCEQX4xg9SawFafmzQJDz",
  "key12": "2J8RvxoyCpcNSNBcFg6Vew2HyM82HRZJm3vjjW7USpocQEZZXvHF5ky6Dce97aixpxFrxxTQMcX8tbcmgmNgmg7K",
  "key13": "64w2V867PutQCnqHBb26fv8ZACFqXQJSGghuBw7e3zyMDfVoZgqpM8SogJbWQa15jqFe13MeP9j8yN9dXn2iQQRs",
  "key14": "aJPAWT1BAKB5c5Vh8f4W5i8Zk1c1h2EQB2sGn2X6U9C2AVujKc1GFri9ayGfFsrWVh5V1SdfF6QF8xUVJoXJ1jy",
  "key15": "64Tv2Laheyi8YewcAnLZPoWUaUgsNZdYHVByqSqX85ZWJ9YPa8vHghDSMA2ZZdNG8ZDt5fufsUFiT6Z6W9WiTAW7",
  "key16": "2P1v5ZRaKuuKKVo7SbALWGD9nPbb8KeUrVbhRcDYcSR9LGmANWowg5W9dkyyn3YdE2Bo1mgfSkNzAsVoZYD9Asj2",
  "key17": "42ABeZniH3XuES79pRYXYzSybhwwMkiyNctah5d5rfjfpyhCyuKmktyHNrCqm623FETQi6ajwgNJdS845QQeT6Xy",
  "key18": "3aMQjMahYEbZnZ5XnQ5Ub2QnWuAXSfgLjYWVi3uMZLZLuY8ouAQzo3Us6XPuNQHVNBq4mVPCep3GKYBn32qRBC5q",
  "key19": "62CotGPwQMDsJgNHxnY892h5TX7P2en3GWpJditbXaBXK3JBEFZpXtKPcHYgWKwR4yAes32zMGi5wsTvn9oxzqnF",
  "key20": "VHxbkfaAsVJG5QfiUNPuRxjWdqyMq9HXiS5nRTsMZj1s5eMvQy9eqpLcTiMCMwN7qAPa9LLtB2Ldyzx99Pt9Q1p",
  "key21": "5oZazSNg6JBSAWHFg4LTwTT6Gx8x6AbStuuoXsXNfd3LkXYuLtQfPX6TDgCX7J9iYr5XauCVftn5yaUsedD7dfyA",
  "key22": "61DB26BR8Vambvvv66YGHLQEcMyQ4EbNt1vSi6m9PGxr5QEn9vFSiDmgyc6QUZcDPEeT6xRiG914WeCL1f8Bfnii",
  "key23": "5yP8bWVT5wgyytbiTUbHCqAsdgAj5b1gJghWf4wXGcU7egVvoT3LtTHSTwUwXkMC4DGvhLGsBGd2hxGnPqbbXoev",
  "key24": "2mGSpdTTBp46XtdgNa9EGCZNnZDLwcFEVqJh3WjcY8uePw7mdNKbVmCFV1irhj1i4DTAoZURnah3hgLnv5NLUG2g",
  "key25": "4foRs7zgfXuSKForCps9BStyKPeq6eaxWKfow3cCrG6Sq6U73AWgYTvnXRjRj3n5gaRzc111xNDTcaWsvxMMgM8R",
  "key26": "hiw3Nc4t5hMNWA56uXxHDUNa22xLpv8H77FzAcyahamqnyTHci3p3z8GqRyAtZmsnCFomjARmovRmydMYw5XgAg",
  "key27": "3k6eHuwi6QnxLJHGZHvpXceXR6zJBtXuX93sHWcqQJDP92L2u8RzR3Ti2Nb6VAZq1tHWEPZRiCRA3DF5nB1PzBrQ",
  "key28": "pqYXL2huNJGv826U2CkBiFmqse5h4ZfrkDvBDCWPcDQfS3qp6YVmVaSAgK5cEGkuQSWdCp7n6TcTydqWk7LXvtL",
  "key29": "4dKKeZVFUhjBjeyuuuLVkHBrFetbU72yU5Qip7csv5wCuD8nGGdaqJG9UxkSH4dV6vu4Qaf5sWYJmJPaD6pwKJSs",
  "key30": "65s14VdLvGDvcshCKzbM51J3iCeX9c2hxxKHoBjaVi9b4wFJk5jXcYqWjXM46Q7uRRsrRoPpGpzJcX3v88GbBhpR",
  "key31": "4Ns4FFHNrUjiTibD1R2pT48KtdFmRtLdG3Vp8T5MSNmNX7fUZsbqrU6vTBw6ZQXBUZqyngfKev8M6z41tvrFMsEU",
  "key32": "5iaKicwrD24tp2A9Z6Uu9rk4Y1FBuQbwTCPxLCVXiStsvw3dfzbHetbb6DBwvc5J4CXa1jTG7UYRnqQUfPWNtvCK",
  "key33": "WRHs4k1zaY1Y29FcXnCHUBtTBEpsQEXnBCcM3Rd9nV2KNSmCA443edQcdwbQPLMyGtK3yXdsdCEb7oqHVH8dDoe",
  "key34": "3oto6oh59iGZDAoD2iiMZdiMNwKhojcxMVE2aGQLMoBsuMMAxbSLjNwBiiQpqTzmvZFAQeja2HAGt8jEkhX9hhqG",
  "key35": "2NdKwrh1tDwhe9mTtUm7FJy7aEnXVtshNsaqVTimkHZztAnijuZcAs3pfJ7QLhZis3gBqHabWKT4ZmmgJ6tpj4Eb"
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
