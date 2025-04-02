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
    "2556V5VtfHKiMVEtt8T3irp4TV4CWmChLhtnCKgGrTXKrHH5q3v1uuid4ozqWp3cDYw7t9Gecc7TTpzSsj4sw7Tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UGaRLCQMAS5c3tLksp4JFjUqs4GNaqwqPEJtfNBpxLcV8T5x96XQnb2NqAprrydaEsRyxwoS1phU7JAPssMLL95",
  "key1": "3v3ST3dQB8mw8KngwWDG6vX7svAaUf48SFChXFBwRV3uSnPJB4vMkkBvkMaCgwhGB3xgfLxFSJBXwuP1EpAPYu3R",
  "key2": "2WcicDXRZ3j6nGmp6nzyEKFSNV5aQ98kKfu5w8118dMsXug7RBayLJyGR2Hfvak62guKguSB8Xv3WCo71MQqehgx",
  "key3": "3f4YR1wWaCyg9ugNrWsQNqJXV7mHyRki1J3ACKFrumU443pctzsb1mNcShJSBQ2NbeoZvw7pXyrFgMV213qCTuNa",
  "key4": "3UaNKfRfUGFZM6ELwjHq1Pyj95rUdqQZgX7Tghm1LedAnr83ZTNPdLfhqbPNwUdyRf6oLfoWKz6WmdAFKTRhwMXv",
  "key5": "2jL9Jv7P1xAKyM9p4RiYvogTT7eqxwKe3exosyHNRC192ZsFM6gkyVvgC4m7yDLxfQnugLFdKQ4RQu1Cp6wZFuWv",
  "key6": "4UZ6k2wr72wk7zCencH9XPGGFkW1PJfwWo1uAsiNTCRt2DerNh2cTtUzsfCQp7DeV6gUzQQeuDF5vjhhRNLfKNsZ",
  "key7": "5Qw93RZ1izeKDZh91WSqYixWdnPqhFMq88fP7oGaGBMEcwWk5AgwqJtKn77xXUNQtxZQ2k3KYDdGHKPYiNgE7Q6g",
  "key8": "48HC6wfr63o6HJ52zhBWRLGRAioFHPMwEwCmwGadB9pRBa68y7sKxpduH1aQ41jcKWQu7puRqgGjrfjxssRzRWvR",
  "key9": "4LEq1JCGfZQQg2tGtquSsiunxY7ciZamvKFwGoDkTAunTbLBmgwLvmbQj7249eVdhv7zpbjvjTSQiF6bWWgHx2eq",
  "key10": "31BTZ216SE6zqKbn23jTcdN1PcmU7sNY1pq15ha5S4AKKJbbnvabUAbVfHv6ozzSLtJtf1JxDJYreHHb3bd8vbdr",
  "key11": "5aXv9kFUP8H2YiYuYmXiR2CrL545qj4bJFD2QMABX6rcCdmxaH9PYWhTi4AUo2z79QKtKUQeVfECfx3awRiwoLra",
  "key12": "5gbDvmHkCkhGPt9uv7mvkUyHG7n8n1w3nNdNoBwYDdna8MpsdDJks3GhJ5EiamsXSyQLFz15QMzUhCrvWZfff3HT",
  "key13": "2MCA5VXzK7c9c8RAzMWFJ2KrKuSTmJUXzeJcPtjiJuR3Sycc3hYFbb5oxYbbuu4TjG5Q8Ygk8QwW29tSoRE1FzyR",
  "key14": "5MXuH5rMLU6FeETPjeJyV31S86QVoyVb2n3zEwbDpJ8GPLsaKSaNUeuvtqyaciNfYgpjYE2Pmke8ty1Zt9mTjkky",
  "key15": "4Gxd1SjzBXkfG6cYoXd3hVJ8V3w8CqNddVADLyjZFK2zjtjshQMnH6UYGVdYRjEjswjX2XyF68oJjxCeFs7Gnt8w",
  "key16": "5UmR4hhiCvE8E5sUrFVzVxh3qMJzjkLUfk3Z484FQxi4vUy8FukdqjKRC1WqWdSztsSz3EqHja2zART57dLLDYCR",
  "key17": "HLcdqpTBCNWxCHWGfytDj9Nx29fNzPprFjyf6F3f5JTFSADcBsdXXL8mVc6oYrZSPCxbETp6YaoTtX7HnMRe4Kf",
  "key18": "4h25PEgGCP148FZa7zq9A5X4vkg84dJDuysNGt9uiN8YBXvChuc1324BTjghC8SfGJih7jaurCTv7Co9s3LuH2N6",
  "key19": "4dymo211ZNs6WjmU7kseXkRebBTNK8Lrmed4LnYcH2pLThnkiFnWtezCaaLmEGj8gYu6b2s1MHvqwxbVH1Xv1otc",
  "key20": "mT8qAEM1BZJnVt4yHzthvCpAKQEfVEB2auyrQX1RoY6LbTJuJsbA9dyeYD4ApB8r8Rka9bouym8VHdCf1VV3njp",
  "key21": "5epXgTcq2xV1rwdcaszwA6JuQTsnWe71Cpw47vGX5znu4oXfnFB85zH2YRE37wBirvs3c4YTCLSnbpLLzSLyYshL",
  "key22": "3K2P15xjrLvchA7Rm1odrj1qRQJPsLX9e81soTp4MQvjnGGMQs5pJPoYMJnwdgtpc9PqV5MDtWZMirfQbrT5gAAs",
  "key23": "5DiGcyppwr2Bmt6iyK37MyMnXcXrbT1ZaGBR1FJRPe7cVxT19ym17aZfm6XvJfZcRmShxUTTrzNa9R4mDndvgzyk",
  "key24": "2eMy4S8mtVAMUDydz8KNSZwswpCN43zSs5xmRiPo9xtWjE9wHso2mo4FxTfy3rMCWqzW8byqNv4AJMSUWo5m4XgR",
  "key25": "2ZMUkNhUNL2vHsp2oBEAZjGGpUF1PgLWUzewS4CFTafUSXD1ph4P9JCJkQXYXosUnXdty5ejvXfhhTFg5etEg7Mz",
  "key26": "3PUh525Lg4Npf4Ptty4c1nPGzoh5KkUWgYCTQZ1EQ1DYDocYHY8Uyhsn54Pjcbfs4GPbnJqsbzsUg229SRfipDEf",
  "key27": "3UhnkYgPUZtXheYqvePtv3J37xxTwbmfa4b5wUxrBGKNmv6Rm3FiTJeCGnPc6heQVEZYW22Yp6yf3j332CDpzrux",
  "key28": "wdzQRAS9DuuN8nC7GoC3XbvArZAuLZBWr9jgDZs5Xdz6CuTiPqMCmCY4YTMY23x6gNjLcwU3udcdwGVP4hxa9AJ",
  "key29": "rZzNKegHYfcx9uyXjT27Lh8iGMHJ6dETzzfbjMRJk4vZ5LtKPciwujrLEcQgdKcj5YU3o9o1QAyzm1YbzcmVdiQ",
  "key30": "4wqeAGSTtUCFdxiR1ip339MGpXy8tVHku16p5xFnQNCNCZ6S8E1xVdR94RXUWABu72sVUau3NAQgKND1rb9QB4QU",
  "key31": "5CAhyMq3FaGUUWst5kMEDmJTtmeYRpA2LZnf4cyooyExrBhxzUvS4rUKJKLFuEUWT99eDXmhdjRwMyfQk5vZJFJa"
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
