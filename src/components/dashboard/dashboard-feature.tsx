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
    "5VnEniRKfMpsXMMKfLtoF1vbSDGHx7N4GmihxdTvJqcqBifxLD62zriBKALxVSH48ssTYeJUHtMtrZ1DUK4gmXuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ma6hhzb9oCaULykbDb6rW98bAgnEQKQwBVnUUDDXe6fexDB4ry985nW5X7ef1s4Hq4B4YpEeTMp6kUSmQ6MYGPk",
  "key1": "5iBEYrrgAXotbi68JPaQ7cqHN2f491NduDKmUbKgByEyjTPyFf8DeRdCN9cjQYRQaUgR9T2UnJTHe5K5puFULVF1",
  "key2": "5w7bp8dJZvfpeEGCMK7z9mHpg4YwTXFPh885UBjisWvSqkbueX3Hy4sbAv3wfFpRXswzxe81Vk1if6KoWMJ5opVp",
  "key3": "2Z5Ccjc5N5UEtsZkhzCxsQsf37BGUa8a4foxp4NnrG2UhAxJjRZJ4BFCGtEC6pBRTdVraCpdP3s6jwFVTpvr73gq",
  "key4": "5q8YSdP5LV1m24uDhuecBPEWJkFnZ2fyA31p22Ydjhnmmshb47diJvvbFSFYTYEfj5eBXbcX1RVoQroy8hWJFNaj",
  "key5": "36E9x9iHv3NEYp65rHPcB8o5UVUGyiovR1FsXoxeWdNUUnD57qKm1tmTn9S7w716Fycca9PJzAbCxzbQkmsrcnG3",
  "key6": "4Z2b7Sc75rgmjDANRMqU2BLZfj9LPXFMde5Z2DZfYLQWVfHbfMxczLoMLm8NALWYbxm7AnmUGChvfJqNqrRM7Xoc",
  "key7": "2RNDKX3yXnVWPQNTfiAn2DA9T3gZzus4yDvRRB33WBB7MahFzuKYUpjQ7wqvWnHbSip16WvkvrmuSZCMbKCNE5uR",
  "key8": "31fkHrP6osRVES8mXsyV5CVpRGtTnZz4YhEMDagBLxgTCDAeaSmicVQVvzqpsrYPVQ23ob4b4ZoTYWapsF1LwWpM",
  "key9": "5QM687tgikSRSjVtFg2mvZkbFeebDJJ9ZD7rJRF8GWVYv1VprDGrsQgr14bhqB8ABZ8gNPSmep6bTSGZP3NjkiYi",
  "key10": "up3gVCmHoHcDXWcJJvjPM4vqQE7QDAb4j3HgMX2cjztyREbe66siec5UeHnz3SCGBkYXSXVNrpJ5biJY2nniG38",
  "key11": "3nCM3f99YX8fJU1rRm1hoqBcMrUV7McnX98zhjHFQ2L5cqQ9NDLdrMsR3vNg2NQ8Zo5khMfNpE6pcBeSd1JXJDhf",
  "key12": "5zL9aSDXB9UJ8vLM98wHxeFX4FhsJBCyKKrGcbX57aY91AhgtFJjAbjAvYL3J4MWJQuaRUcsmGqWzvCmYiqnrK6P",
  "key13": "4RZNcwz8UxHBLFcVbYEJ1Z1FoqWDmFUtv453BLvLXMCb1iYNrsh3AHMpyBSio9tptzEv6VLGsFxkSYLTBVCZkDg8",
  "key14": "4qP7taApoafh4cf9uV6YMX5zCguDSWkwhkARVf7EDL1up1NAaPvVwhpcbhXHyYsD6ununXieDSLMzQYiegZy3a6V",
  "key15": "PBs3nz7HSTRTNQ3U4J28duj1UDkQedmWBRa4LMnGLgYLP3mHzLZDPurLGyKhLdq9KKLKiH2B37bLjhZw1JfBD1t",
  "key16": "64xPwiSWecdzArkakajajULiebWAgSxH3dmJGKVECiAoUPDZxmVkZiWiS92aosEhuaDW7a7R81NcF6bKxmF89WSn",
  "key17": "2v4a36JoimW3MLj9aVJCAxRTethM6ewVFdfvCUj4e38GgrHiGx8QWdivEY5KRFHojj6XBzMjTM7CUd4L5mYdBLQr",
  "key18": "3kKtDbwf5jo32Kp1z4xWqzFp4kMTpXQ1UD4DGqGBztgCwZKS45ZMNaParDgom1d5sQr24zVdZQ6vW6RRGrRoWyBG",
  "key19": "2k9jLYW8Y84LmUGn14PCzGpDEFiN8pw4BPETVhg5xVTs5LGbffjVfPcjHgmTWDqyTZQwo8dzemXgPJK9YTSW5McE",
  "key20": "3rRQkRoW59fUy3TACVFZNtHjgeBCXWHa4grKBa3EgukcN2czq6mKpBmiSJxntxoFXPHjsZGP5LAhym3UhMZWPqUT",
  "key21": "3fbFjfNWRoZ9UWYJSENtiHTaraU4wc2Jx9UT6Lvg3qotb7KH7TxWknQPfG44a9oo7GPs9oB5whVmdKG3xBumd9fS",
  "key22": "L65UvcTeWumCPyjzcfQp1JY2cKJVYxVcwCW8LmhiQQiBX5gq9tUVaRHR2ECxPG5ELzysjNEoEy1XbSH6uF4wW9r",
  "key23": "4hzrpNYjC7eSR3U9Rw6EHLQodoqSbxUonKWXZh52F1YmGJj3LCQVWeZuz7fcgLutYB7Lm3yveKXc8LYNu3wC8qGR",
  "key24": "NUeEWaMhec65EX7H8hdfAU6U3zDVTVG9r2W2bnUn24UCBvu1hNn4mpTwfooR4YZBLbDpzxM2Af8KVKK1RKY3FmN",
  "key25": "5wiAsSRGHmos5wXCmzzorJwCtrx3nTrv79wWfktmKv6oSjLHVkbwDg8RbFRFMjKPdqq1poJdjW1wvHZYqcg2V6tW",
  "key26": "UG5QyfjvqmXjggv3PbHPayY47NMbrSCUwfpPayPmZaVDNagCQjqdE78fXfYLbxZuc8sje49AFA7znzdMUEBFwDZ",
  "key27": "5GteyB5A495MFC5SiL1PfUiRJxsuy5wmfNgp1XksCyegm3wDRwSSmRJmsEm3Kwzb6xciWGJt5HxeHRW8ULrtzSKT",
  "key28": "5uQfV9AVxRLsuzA5d6BrG96CJEQgL3t1DTRsf8AsLUHrNTUaAtAwmvLQFMwD3A15pb5XdzQ6yNgsfN1yiHuCDHcD",
  "key29": "5kam3RaxWHWnYrKJXPnAc6r1GSg8BCsr2zNc3RtDgx3jDmyevH63FVCBnoTh8RKrFp8byF2Ras6CZhZ9bW6DvheP",
  "key30": "UhWNvqWisTZurE4FJhnRXK3jRJDpRUjsrVaeNW6zUbQuSFNJLDVSvFVbpMKzvg9fnui8vcpZYzozz2wMoWxeqgd",
  "key31": "4JCiEKGqcHxSUwExjgaH35ctz8FB9qvySjzNjRHv7UUXif4joTzpqKdSDpTTjQ3RwWfKg5ufHsbeXsxCFCoZWeWX",
  "key32": "7nFn1CuZK2TjrtVGhhg5j1q7cszFiVLXGde2zEaFbk5YHaznhiea3f5Pni8yK23jGBe2na6Tpq1P8u7TV8fTMVk",
  "key33": "5PSUuGz5kpJqKZvAmKzPQesmyDbQYxUgPUCM5QKrpZeVHf4T58qN3bPuGkGgTimrSUQbi2wsLJdTfH91BUcZRp4u"
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
