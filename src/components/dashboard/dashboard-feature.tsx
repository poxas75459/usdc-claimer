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
    "65tatWkog9jQVcFuMwiPWpnmr2EqLhWVHQ8CGRhLVMh3hbv1vqWFHCcebp4yB8p63QoGLMRP2XiRGg3sQGjH7cM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2twQdJVn1ksMePShehCQu1ZLKH2cwN3SMG7C2KPcjyttUJiMBF6Swuy95M5HRyAmX9ZLG5nnxo9yVP4b4kJWxEWb",
  "key1": "4nAcuYeUqWRqw4T53Ct2ZsWDTY1eJteYi13b9BC8e3cLejEsokPQZyC239nDAeUYsbuJy5XRMTBgzsx2buRh7gDC",
  "key2": "5BuWX4pwfTz7aveCqn1uMqeKNKHLHWDccyBrDA7WCa89nefvjVwhguRPCvjJjo4cW12n2qUF24AzggHTFTo5rnfq",
  "key3": "5RWhnFaHSUJaxnP2vAw3UW8hpPo4kackgxVZAEG7758PVMMEQdh6dmVHAyoqeN2X3EVs9up3x46xftPUz4H6FUc9",
  "key4": "5ot9gXbMj4gYVVVPnXMazVKqiRv9SEeEPTNCMnGQDECVmUXSr2BgRUanj2a5qJw6jtxUKupbe6JQeZTB3XLb1yHm",
  "key5": "2EYfiU9xUkbecVQqbaiEg6xMgrbKs5koPx1V8Rcm4f2kuVPH4Ac62TPXgVCs5GbPNy9zcZJenyAFtGJTw4YjKKLZ",
  "key6": "2AhJzQpWHE5bgDeqsQmhHRTczP5XfNjFiAePBxzimHvVGcHFdoJuXvBrdD1tZMCZ9fJFFGcRX1R6DiE7zymS4NZh",
  "key7": "43fnGTJsgkpR47riz1Ca94PN5Epfa3CFYNLNFHzNzF5zXxSjNFYeFUUYcTWaDjBSkjd6PVcWfpJGoiJ5H5JBrxY2",
  "key8": "4pg4AhBwEC1Ef9wmAVXX8dtFTswk6yZN8yRUZFjDpVLqHN5UGSLjema5z3J8uvQh3T6kJds9EpbiR7ZWFtyEsZug",
  "key9": "65f8F9Mhcq24e7VRVv3wyjZfftYK7iXiwMGG3EPvJfx4aP79PKgXauDx8JcSCbwtZbrsDbFg8yH47s8PkroDcCvm",
  "key10": "3b8DEdeucfKWCoDmkKzJjHdo9TWB2Mz5sUVQGUvnJ4oa9C7Ej6rFQrg5raAEArkog8AeXrwa281hF5mnZjG6z2ow",
  "key11": "2yunrzGu9dNvWDhWNKbmTrZwvGMNMTPZ8XmPdx6VHgjPtAejEFSXiMngcSKBgTtnM23nbGiDUUmQ2tNUaziHSUob",
  "key12": "Esv7GvHrJxb6YgWdrcSZB8GtLLmrw4TB1U72NkwUZLKYZtdeyXW2JfLJnvL6ZMCf4AhPykmT2Uy72HgwfWKPWJ9",
  "key13": "67hDGtaDWYWNBhYz4b2RjKzMnBMFue7YiLAsLgvNXb6H7MZwBJnigq68yMVF6VbYDiZef8BvqYor9XZBUWmgYQeK",
  "key14": "iKhnuJtv82wnT18Go9YU4R2vHfPBt9NHyB8xi2abh96HVwjquZ9aW2zNWDxMeX63kttirGvoDZ1jQugBd2Gpmns",
  "key15": "21PytbehY9D6PEMypJnU8T2uE6AiJVnJPZc49xD8HYakM611YpsKT7xNgQNwRWEGN29rU9rpgpv4BKNiEfYnL6Ar",
  "key16": "3aLihgF3ncpkzw9XxizJj8uFBfGbBEF1ZvX7QhbuMiyM53HCQpjARDKS6DWw2vK98MadVXWU4XscQRBJVq2Jp1PQ",
  "key17": "2T4XSCuEw3YBFJc6xpanJPgSgRqmZXMzxHCdZTwVpSGqjZgAMvxWBALj5fawaQK9Wrq3rb5DNU7Yd8nRZbUAmPHR",
  "key18": "tA1Ddcx6Leaw2qWa6ZaRUsMUZhkzJATzfF9yPCAp7xCq122KZDFh1vbJphmtPoqQtMpgXpXSMcaiZq78wy2Ge45",
  "key19": "3BPANjbFNJK9b7qRjkK68KfXQUyGfcdgtGwfbL2wefd1RFwZ5qLtcjzr8vuj8dbRwRjkWnv5aEcKUNXgsYnpnjHs",
  "key20": "2ikForgbbjhA4qbc2XLaDkMozt5ToiPBR8f48r7YFE4J9EVACveN15i4T9zWsTEk1HLsiBA1sqt89FnUBtCCbw79",
  "key21": "2McyQhNzQJFaMEj8fm4ZpZhn4tk6JWbYhAY6jyQEBc2F5cVxNRnE9NDvTufYhyEv3XBy2PKEx2x3kNMmw7k1rYiG",
  "key22": "4cNaJ58dnTzqkFg9durQFomxgVCsqYvGcpARQSBrK3MXLPurWPdynVhzRDhUh7P7QXPMyc6naRzhRtd3FyF4JMnp",
  "key23": "4E4D1JM2Jh4aYaeoWSRiEgydDEzHzdAPpF8NV5N7pRvmxnGZ9iococ78e46YDuWjtEMg7JKxJj7sXbxbfz2npCrn",
  "key24": "5qQsbVsCP47vTxKLvv5dkrDevQfQR2UG4vYZQpMweW4FLLeN53iuVdraGmEKjr4KSCBnvuW2r63jLA8iL5ttHbfC",
  "key25": "4hV7Lg64ueMQi7V5RpF3LAmfts3ezSDF5sZsPYhMcUawAeZLRUd87PHvo6viT1XEpHtF8GFAF5r5mxoLHsXreFQY",
  "key26": "5y54PBotBnFogs2ba8XtvSrqrzjSeoVYnX9f1R26R2a4QdRY11giAvQm6Qj5gwirJUAQ4ukcfBk9h3tZuexFjNAj",
  "key27": "5uk9rpESQnca1HFX9o2ZoCZNRm5BxmUY6wZ2NSz4Evww4CaxPckSbtW7dXBMZWAfdeViNwFp3wS9ziJmRfwxtRCP",
  "key28": "xjkYTAFY8qPP8gs4KqZSzpbBBm5Er1k8kB49F1kn8GcPr79Y2DRKGqxoc9HRz9hDtTP5CyJ5Wj86DGfSfZAfvEb",
  "key29": "3JuF6q4UTkzPNuStY5Np1B3sCioHcrL3WMx56oA5Fqk77jD2h38v9SSFrTeUwRrFVWUKCU8ZRp9F5LRUMvpB7xDm",
  "key30": "2LBQzfZ8wfKBcd9yCbXrmbHDhR3hniiEnPNumnLQYB7FfmSxbPL7FKxTnonr3EoWS5STW4xMxwSZ4AZ48SrsoazT",
  "key31": "5gE6N6czhUMVSkukzjaQPQYJFuzbNeVMHs9a5wHqaHLcWSTweps28JnbgHe3db2oue82wMacnfYu7kibs9jKAr2S",
  "key32": "2VqT8YmgjY1DxskmSmqeghMYiF6mZ8uP8EXNcX6fhf7nDZWeyE6zZsQ98ydZY7vXvEu4J3r4EuEdZU9n3Muq9FVh",
  "key33": "3ZegLz1Q4QbvARTotPhFQnveYRbAafa7BAELiFemppBHgXwBS2j5mQiex5LeL6hsxdVTgQ3JRBQ71oKxcwCdRnbE",
  "key34": "496KLPEPuvAuTrKFLHPmfLDMfWiKMqNF2awEZ7WuZEa2b69mLnQP7Gjry6Wv2CbdTUP4eHc9SPU8QCC9jQMyPadH",
  "key35": "3NPhjtYS8XBqG9YAXDwgLSNRr7wcd6wE43b1nnvv8gadHXqVzJ1e6pnBUWjf2zxYauLwpVJgL9RefZGRB7iFTiiA",
  "key36": "3ZTFUy3CJVqrGx7yiAqDw6EBqf6YgZ6ZxfMTxQ5VytZjgKjFYJ8Lfb1To9tdteenmzMWvL3VU25ES63B1WJ3DWpm",
  "key37": "57R8c6xXqN7xrXmwsZwVsBxAGgZ9NqHnLPPxcMBJTWMYQsEKK7BGNfq83SakS4BKa51qHWBaiMxCMW3kvJ5N7XGX",
  "key38": "2KV33hsu5WDuBmQ9ueqe8MP8CrwiD9QJUYtaaDgfaegkkySHP8Zq6Kjkkbphwj4r1gQdMF6N762Chwyr8TnKhXWb",
  "key39": "DYpM9R2Gw2w2EtXRi6PYASjBG811qTTWcqrNiYy4m2ds2VxoeP7PXzB99XBdtduBDyMfgg3tZLTpcy97fqF38Ya",
  "key40": "4Rjpjju8YGvwzpWNJsqfiBXSYC7xcSMhhscembPxi4DspfhkosmPKEYqyC5YBagBVGYnqgeQgVSxH6eaEGKE4U8u",
  "key41": "9MPFBKv85BWrA73CrSJ7Zho3TdFixfyNQMtz4ES98Usve4fCEgPiZQyJJCLQ1Q4JUGbvYLXTQM7iXLmxTqkGGtm",
  "key42": "3JAHNtbBQzN7VuFbodiYyayE2e34zT4jxkZCw6ncun3bh5Lxaf7R7ytP9mL9zsFge6PKvLDoGEhWvPF1MAqYtoKs",
  "key43": "RLKnxq9Qq69DH7vMk16tm8TkFbtnfPy3ZEmnjfcZPmJob6LaUmZbELX2o7SLgW35EiDBTnwphFVDa9kY56n7x17",
  "key44": "3A36ghZMguH6L44NthN49dbR3QoNwBZ5P1GwwgkYYzrhovZv84CXWehvx4kDJTuhk13e4TWmfjNEDn94wLmaNJiT",
  "key45": "3JM7FbuQYLF9Zqy4gSpKtAq2fmUbyA8U3uRExw88ysTsJ9k9rcWfP3kCywzWZS8j4BExjqXu7vnZiR4BkHkJx2bJ",
  "key46": "4ABviYY161PMWJWXCuvUuAzMhoQ4s2AcYxEmHcw2YiZtUz2Fnik2ioFjh1hmddd9zrnjTgFL3M1FbkT8pemqLS1u",
  "key47": "5ZxxJoHU8BY5Edz6FmW2PrjaDnk44v5LqCxCKZZVgeuChRTqmtf3ofFo16YyhAbGs6RgsvSp5dpVjMKTzEcd6oHg",
  "key48": "2jfvbYghErd2pkt7YnwQEAfj6SVnAK1VdqhVQNx8F6Stunvrrz3XdzAaiBWWVE3yUm3h4vhY7ME7BJWbZnMe3Tcn"
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
