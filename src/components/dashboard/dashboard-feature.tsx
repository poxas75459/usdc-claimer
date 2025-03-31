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
    "2AbG6GF4CdSSt7VHYVcvNoKLS3qmxpz6Ww9DT2YbbMjEVnDdb6TeSxZemWHVGbofc3rq5jCYTBnYMg7nXxZjQTPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D28X9Kk3752ZHxfkF2HN7VNDivqZ7oow16gt5BPQdvRVkX3LdbaFeiZLSkWronNQBw1c9hkftdSJJ3CmsadvhSd",
  "key1": "3v4w4mzhPLBoDwWDE98ts3wQ9bfbu18PHPMcMKMzKu7bbEHn6sRXCAYbZBFbDJgNQtiWXucJoqh9qA5gXKgMMpJB",
  "key2": "3jpKeU4cAQnQ3yHn58qSRhiSqAFEsbAZE9P2nwGD2Eh2i4x1VaEGiDAFgZU8EVn2UASHHPdymwq2idzm7jWy471m",
  "key3": "5oAAHtZLQNmefK6EEYQV2pVxwZKjxDeAMmPuPckteQyXzVeU8GxbjSSzNntpKn6AMNv4JwPzdH1bs7LkFjvayD85",
  "key4": "2hcZf8hUWRLaFYYQhZQiF2wnqYb2jsuM9pjF7z3dtrQ2s6YCdDZmhFBizihEVaUgEfaSdCWYtAhBqU4vkguj5hoq",
  "key5": "3XraBqpdZioNqpaXAD4XvHpfogj4MPeMoPyjzsXZrLS1Jq2yP3U9RzJWG5BE2LsC5pZHhu773hkJwEwpzF5kvw4T",
  "key6": "4xptP5tuW5P3CtGMwoiMcgz47UzXmprvZdyuwY8Tsao4BkXxD7MAmHjE6QuD4TXAC1k4H2yJBkJujL2J3mKSW2nq",
  "key7": "wdHrxVRgd8PbvLnf4kCkqdDWmCCjXsrny5SZTa6WgeRjxBnmkpTFgk4aZGcShmgEzLGdnKTbm72YuCpUVp5dVbQ",
  "key8": "3hJrKdD4fLbLFirMbYGiZCg9kcPuvTycJEC6kCQP6EgtoosUaQGuGensNEwTE5X237g1T2LCM8xttfXS6EfNmhnP",
  "key9": "5NB8KQ824ZLxChbwbewVZytLQqYj2Q9CksFJi56AvWym2VUcsQMW8wDq3URJ6YgeEtU93GS9mWcVteX8QSPZKX4m",
  "key10": "56BGg691SZrAdpv1rkWvC6H2Tb9q4fnZATqNZxZgxWfj8chske7oyPYQYi2ZpxsrVzigT1pubyb4xUCsySM5c3bD",
  "key11": "5R9XvCGGKh3zTBCxb1inLdwLLmaJmwWUVoRTLcmjpn2tHV39xzyMFzrk9pS4HNJFcy7JhAzjtbxeT6JbreN8v1AE",
  "key12": "4gBNVG9NMLSJueSNPRdNTpgCA2XPa3MVyJzJoU6XWT6vXWStJDGKKMy6SB3KxGW6LoC6yjBjwuo2qvRJoV7Z1F81",
  "key13": "3n3J1eMsfmrhLNLy88BatNsoMz88CXen28wv8xgWW84YddHgR6fNC5JUfgCtF2GhXH1HpkyaMGj9GxAfgcK67JeV",
  "key14": "3GenTyJryQBSbb2b3ifZEVmz4NVTYPvv5ykbGewbGzhJbLC32Q4vkQTs5uwnhT6fdti6nGkGoN1WD6vLkjMJ92Xt",
  "key15": "NPiiyiShrwQgdnz3bMr5Q1pwUWQKzBZ5uz9Y9Q4b6zEUkNRXdaFnzAhP79XcfrU2jMgA9awrdcfMmxk8Gc7Ws2f",
  "key16": "3znQiNFndf3r8Uob75kLysJpRWqqEtXzczPHdJfhxhsmrn7NEzM7e8AjJuPMKs3kQzsU4vSCsXZq8ugKnvCRTvED",
  "key17": "55M5ky31RD28Lhq3v8AFgmP1u9HmX5sF7WZmr96STeonAucAoiE1W9GpJf6MhQcLgb8MJSAhBx1cctjGFnugh92j",
  "key18": "3BidEWShzWT1A8pp3vdNZLZgifX4ABesm44aPPcXgfJHcMzrbQ3M1itPor2dyXpjMmjrg4RMnHQJYYe1zTZnVKQd",
  "key19": "5rt9AbTiahARpFssFzabyaUDGKuGEoeS8v9www5S8xuJqY4TKeFDT5RtLCxKfXQVqneamAPEUN5iB6WWpM4vemhy",
  "key20": "Vt75MTiwi14und3qdM7pJAUzo1VtwgWn3ieL3NxFxs1ArhvMus9A3bkvvniEaGJRKw8TuYwpRsE5W84b23B1TWP",
  "key21": "G8fF91YQW8LfaP3ukqyuA9QHokBnHsvUcWsNwX1CmMHebxgkcooUwFaKrmT2txNiSbZTuATwvL3DBuJhrpF1Qg8",
  "key22": "5UZzVpcMhDi9pTh6qcP96U9MeB6nLxtU8iREx6cZTvvEcqarFrT3GVCtyGipnoCoW4b7BQr56g55pmoYJTBSs6Qd",
  "key23": "4EwXsANjekBmbMRm8hN8ERUtyekpNYSRFo3xyQgu6ZJNj1n7ErdLeS7WWfSeu59PK83fhqxmkYK9cY1xdoANNixj",
  "key24": "4j9ZoaGBb2txYhBsufzRcaxV5TFpxtJffcfE5fYq9fKh4VtuVrB9pg5gAoH2RjEWY5Wbf2B2WCYFYevNUqnmvh8S",
  "key25": "fErqKmnnbWxxd9cg5YW67hqkXHw3dZbCtxXSmsDNmgD29Hz8dQZUC9GnuEJKVmWPvTG8w4K2WpvMVSJH7aouGtM",
  "key26": "5bB4RnzvyMbcUcaG3hiNmqqDv1Eg4rp8EWyfLgcGPHCbyLsttG6kcQQLC1hjmsNsc9nRtZzHceGDTRdfiTVnQ12d",
  "key27": "4EYW71CDjD75iiJ3cw1EV74cftSiBcD6Ri1VLWG5RtunBTfPNvM3tnePqNY5LBuQL8AWPpfeV4sYPuP7kDGqFhS9",
  "key28": "4xvCqtXBXaYmMhuqyn2tH1tkXWviKW6jFvpTxeiMCwr4Bj7fMZwhLxdKApKRziuK53f6eZBsSv1qtkKV62CgBDXc"
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
