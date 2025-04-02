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
    "296jH27ZMtbh2JokZxdNQeYiEwHeaYGedv6TN7RFgFW9NoSVpkyB2zW87zUTMuWdQhXt5AVNNBnFZPooASbqQziq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uwVSY4qF9yPeRWtwvz7MwCtiFanNRMhNXzbH9ZC1jamUpKRNUfDroAUZbdodFFNzAh7roSbsmUSdqXkEeTmsYa7",
  "key1": "YtC9gmeig6vKutjdHzm8mTNP9gtNf64VVX7BFbU9dU8skvgGbGToZrcXcPrevQeZdc9BJrCX1RYnpH2A4K1M4RQ",
  "key2": "4qqQA3vvvw71tf6MpfS3NqTmhvCKMXCSJoE4gjpnCxY8RD4EAdLE6fFYZJZCuvDiFsEZeyF1ayDGNduJuLqRFezo",
  "key3": "5RWc4DUwrQNLP5mPrM61XNyAZFTHiNFoScPZYDyypNMDuqxZHV1eaGHNiPPLFNpfeadKUpNWTR8uoUguFt8MDdD6",
  "key4": "4QVfjTChhwShHGZwdAUjiNLMXBYDPLSCY4AS1WeZF2LzPiuqAmoW6PVkvSkg1d5TYWpwPANh1ZMdF6rMKKzhYZ65",
  "key5": "4H8ES3STm6BT2sF6Kc3G1Zccjmr5PmEa2i6nFsDSLefzLZPVAZF3TV57X524WaPck7vS2fFfK7qb8R1TYP95wRXo",
  "key6": "4XzHuayoTUYJXKR9ZrVd312h8tZ95qLdo96BxtwSMfE94bToELtQAc9uRd9ZUv3oaEzWgr6tagWjdGerRETWMz75",
  "key7": "3HBaqJRBFJ9eQudn9PqgxcB7V3a9CWex6joYyiLPjewEpvqCcQXcHFT58mRSpL5wRv5ter73bVtqp2VUvX8pRC2e",
  "key8": "5kjLvfrKGNTDjt6n2w57rXjRXMFnpHai8QMaMRNRsMdx7fqF7jwp7aEq2mJUgQiHVfgfgZ7uVaWkywUnii4vGf4h",
  "key9": "4jiTEkubQxgSLU1dcivkor5ZrBHANHD6tx6dfaoJc9WDCcUW4HJ2NrFRXAtG48MRUzpit4kmeTGn15XEhGYnvRNZ",
  "key10": "oyrzYY7QqzRBRP1dc734Mc9SBS3KiPVxeZCdNB3gqmC5vEgK8VQZFH1Tzq3opz54JERNxpnPuYzgeMRXmNMSQqh",
  "key11": "56TRXwv2WfjbEbrbKd1cyUWLFxwHwS4nDXLqWwnykUsHjoDxgeY97Btnd7p7kFeDpUddHy2WDX57y1dVfxyrVCjw",
  "key12": "3mVTH5EveSNscJ7ek6hPc6ZqnT3cwtinPwtjy7pHZMRAQV5ugwGXUu53d3mQGf4yj96A2zdXGXfLsLUWeAZ22oH5",
  "key13": "3WhLeVGaVtJchL23M6snneSsLBqhzg4yyaVfLUZS53oTqLQKYeLDkMwPUVApjp483kWmAxZ3Kc95Sbw3n8Vwwccr",
  "key14": "2mTHf58kaTRt47jLxC47Wf1UMXzXj1LNyrCuqHXxs7D9TWFSJBQc3wZ21po9VWLJ9LbFotwm8TKyznwsD9FYNce9",
  "key15": "56z9VTvEABbWneMqa5JLTDYzAS7BxVxoZEKJ9xmjGdt99wgdJcZpaEJDP7Uz15KEvkpK7eXy7sVnKinvdNWo1rhM",
  "key16": "2YT6PbupaoNPjr3sgAhvpUU1BiAgu3mfsD1nbe1VJinTrsgDVyL85CLp9GNtSjHbTup2P7iKJMQMjP2jKMYZb8q4",
  "key17": "5kS88RKJmicXk7y7mZisBu79gVVHxiHy87wDkMs5H4kcfMTHvCiJy1Phj23sC12NeVvgnqwaYL7hUYrfk6fC1FgV",
  "key18": "Zrk7uhJTxUNAMrLtn8G3e3rvfVWZUTywnPgQfEZpTwA7JUigUtHfiQpjfnAYLg7zK7zomQzJS3XLiDWJHUBJ6Tz",
  "key19": "5oUoJjCuVXaocB4FqnohjzRit6LFm9rVDoadvUVXPmGrPQ9v4isquAMiSjQqACRDmCrWRTY1cawjGJJXNdExNpb2",
  "key20": "tayUpYWq4bp3W2jmtgba5Y3y1a7NwHyWYUBsype9N3utyF1bcEVmmEmv6K9qTxza6y8xTnrHvg8VoeQk7PmZRox",
  "key21": "QtM85nNMNhSobCvtgTECQbzs24zSZoX4MSBgD28MQtig8odSBkzQC2QNKm4QdtpcHea4nFKgRJTRRvrXBNNVgSu",
  "key22": "5M7BgusyeSCJsGZSXcojzsJD4DcPuZ9vsnXWArrf7nNaFpJhK4LRgy8nDAQJzCQGJKG7rxERFeiGXuPA4PZvsp1S",
  "key23": "2ZQETLGjnqXYMGqSS2RN8kkoC7Br9JLXqFDpYNDUEEqjxzGwwPM939JHkEkdvHbSv6h4ozwgFXRFa3HELWyANB1X",
  "key24": "2kmmvuZpdcvfVffBpT6kpWGoeaMVQoHBkRnFivATriX447AzGnBSKF5n7sW6r2fwfDiGY2RDGFTCLkZXrKejVwzM",
  "key25": "TDieZ6WPaMtKS5MVJj7jpQThZBs3hW5ptNbvC2GLbrcYnpbkyvpWdgPhBADY9sf8s8URP4YbYZQR1N8EzaMhq9C",
  "key26": "4NPB7D38VpVx5p88tvxuD68zQ1fLFr5iQUQBxfgP5BRYhB4hmk4XBn28vcGEeVnfUVG5dBYoqXjQGoS3Bv6oicq3",
  "key27": "4BHLbPZjE3YEVrzYmWmG6FCABZkxXzkA8z7u8apjMxiYucP8b9XCrUs6oQJiRvLcjUEvkkKbTDiWTd7KQkQBjx2k",
  "key28": "63r9qAfMgDLv8P2Gm6DKauAHUGBZ2USYsyRdqwoAZuP5Y9kQuxyNFuK3Hou2Yw1BF9HW9qcvVLPXRi8KhZTKJVgB",
  "key29": "61VHVS8BUZsyzonUEc9uDbdd5Az6mnzReunofqhbaEJ4TZMpKuJb4GmMmZt17ekm28PCwCoPDq32UWvT4RHhCB7D",
  "key30": "2DfjxwgTddi3r3VBUoTYrGQ9X8fdpXWvAYw6BH3xwjuza1MDp5yNhpfDDVEDcUcxF9LYKNt6Ht9yuUUGi3a4gAAu",
  "key31": "48dVKcUBYUKLQnGjFFzrasmXiAqEUdYcKZiBwjJYebHUjvC8LW7Zft6WQniq4zLKTqnuWCVpScQbM4Em2zLGEPM2",
  "key32": "3yFgq1dADckbS7v3STLYFpJojKzQKAEZGRhBhVgTYLPAhynHYzDLDrpfVj8rc8SC6oe8txFTwVsKKhBvv6tuhEof",
  "key33": "4FRssz5rJpwzFBNwjiKNwNVLfrWKUJezhh6EcfuihVw5QttUdAbPGK6hku23XRFd4pQouiY3VzYi9L3m5dhyHzek"
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
