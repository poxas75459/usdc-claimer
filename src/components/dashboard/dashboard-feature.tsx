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
    "3a2WVKZU1LKha7qzJmXJFtrpPZymXNhXYHqi7CWNSWfvf7fsNDq9wiV1yhNmeAqwCdMafSj5MPx2ZZDxing97y8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uBJk7AHJW554JavZAuYnp3thj5q4m4dExZmiJtkiGEbGv7HXgsJvWagbRUgxDBSgnnRMLF1RNcHt2ESAwCHy4PC",
  "key1": "5AUf9g9ZyYhKxGkr5ThNdxutdwZ9eH2hmNS6U2JjnvVk4YgsbbNcgjtm46LRVxXKYPWh4RrrPtKaLE5K42BcrjfK",
  "key2": "2vrHenfa74rGT8VJjrS8cpxbKJZF9nkRBzYVrSw8A88wxDFEbFK35CWeCE9i7TbHH5QtwxhR5wpow7Rp3zGFBWmd",
  "key3": "327v2SAXmthGuQvTbRHhrHqtwhQfDHhDijFSVCJguNBeBk3a6upikgWVCF7tZwMarFzeWPWbzZ7GCyRm7J8CCa7w",
  "key4": "39czevRJhrrjs3Dj28LFi3buju3D1UBvT1tj3fQ1sQQsouPLzbnNHtKhBqUMCX7fpyyRQgo8Y1v18CvsZp3neQ3C",
  "key5": "UGYp4Qxwdq8SkKsvWMtLtfVY6L3q5MZ8yZhoK68KA3p9ToCf6Mbqw9VvubYdhjWPsHdaKq7H7diAa25atbYcYCe",
  "key6": "4wYfvETA49jerez9b1KkT6ShhsM7dQkM3BWo6uxm2qmNasyUK8vQtBnoVe7ELkK8Wfqv1uC3KEbhtfgnQVzjarsF",
  "key7": "5STV3BVYQGP822bd4f2B8h8EKyo3RzJtcK5ELYn5VDqiKoHkQAmjWKYdru89YG4hyjn4e36snCDUMHy6Ltn6wtNd",
  "key8": "2PT2AUk135ejDWmaQ2dLBCycHiM66uYKYQCjyzS9Gw4akavnYJ4WqPP459VvgDK7TfBYuHy87wTMeD4hzNids82A",
  "key9": "5RmoQ7taS2SG3o5ZGXf2GopG92qdWecB4PGVAx2Av9rk1ur1c12QyJNK82zhr5NTgKMHQPBJmSqAG5RktuLVbR4B",
  "key10": "36DJBUtn3YvaHnYdgnMxXVDZUD6TS6nfcu9ZuiksiRyFFaxqBpYikXeUgx79quY7gjJHh8aF4MKby3xzZTYhRpHP",
  "key11": "f2iK5hDC31ggFcPyEeYJpUVU7ZK8mAzuRxsCunjWzBErcDxy2SfT9eBkQnMizPnVKkTG4ULGyLgBb81tfyN3e5U",
  "key12": "34wfPdidKMm8UDj1hniVZMULALvME1RFBiEowvfZBRhhWEYH4EzgGYBDCK3UgnwswRZSWA71TQKBoR75Ht5HZHVK",
  "key13": "2ubjr6zH9gvVWJUiuihc4QmSSf7wHtoniChumotzXd5k5ucKzoBL64cRXipqpqeQsr9uuaVAmra7gkJxpULLWDKf",
  "key14": "DDWGR2uvBPEQb7EfQXW9S6o5kQTbgpTEPxMQk5ZvX2dagbQPHXqrLDbacSMPA2Bj9NYrqkwBYAtDehRVXPN6r2w",
  "key15": "2dJMnjJ6PdxpBWqktSi8pMuRH3XGV2xK7h16AeVrQyeG6zLXjqWH5PnK3v1wP2prFZ9ZiK4TL4i9tAmFgnZSjmx5",
  "key16": "57iMU6hUwCaasJBp44h65QhoY1g8MAsWBcZjJjLcX86yhKqmr11MoXVDw8Y3XYrdhne8EVZhQe3rK1QqyMaBkUsy",
  "key17": "61rsbjG82tJ1Rme4LpG3Wf7GiZbFUqfJozSADc4LuFPfCFa59kYVpkpBvkEH9AhWxNduvqq98U8PeZ5k24UaJQgT",
  "key18": "3zPjc3N6qELZiUma2J7TQg8wGn4FZo31a5BpJZhMTrg9Gi4ZrU5avKSqZpmmAdZr43y4tuU1ejRX6ayJ3FE1wEtG",
  "key19": "JWKrmTrsQh6zyZT7sSvun4LDHi7q5DJLLBxhv3g5dYoSQTWLGibQWDM6bwspyaB8MHpgpVs22FMthPzByVUfY8o",
  "key20": "5MyiThkBJ6Prt7RLeJczRX6Pe57n5cghusT27iFuZxUbcTtozP7M6thATW4eqr5VbF75hD2W1BGZfnduC4CXui9X",
  "key21": "3wC9VMe3SPdXRGwLtZBQzpy2ECc8CNZLxGkeM1gNmL2zw6YPHgFcSoZWb8BKSYjEKPLZYwEYnCndfSPH7CcELuPn",
  "key22": "Wqkq3Fwskgv6kbPhnCfnKPzbnwvMr3cm6EbT1qfzise9ybnnFgyZ5QtxK49XwnPj3vmsxvr9GFCK4kmEYPvUaXi",
  "key23": "2pVdaWkUEatSgf8qraNeSG4fArXcnvu1fj4eCu1g5TEAV3RDnCdat5xcxmrcqGQnMAd2GiRHS65GhuYBRnEtL5NK",
  "key24": "3T5uEAG7cxyPnJJiAn6wmub3FMe8NGMwGah12feMztrbEVarJNkKkWLrAW5fEKu3qENeR2L7XXhroPmt9cotFugN",
  "key25": "5dKVAtAbt1oLSjCwgXMNX1efa2guLCfVNPr5bLFCHE7JF6BVE4m1GbzFxeUTssF2qbaHLa2yxoyVJFTYaKaqmjb4",
  "key26": "3Vg7oy2oAbDR61F8FCYVDqUVAqfYW3zmtGEWwX94ACD2DexQuxA4DpwttuTpkSYdG88nntGbTp8S2zE7ks7vu5wg",
  "key27": "66mJkqLma6UvZnie5ZzweTcayraMd5qZqrE76iBqW3uVew96yhrTVHD18rdLjWWWzg2R7hJVXBKX486nioNfdtTE",
  "key28": "2tjuZdYZFD6vBcgypi7vxDwdMKzr9VWv4Qt47aUdYtNmmCYFaK82q7fVY8UeUrxrzF4vCuNrjsMzTPAUt3uKGaZF",
  "key29": "4Shvzc6k6zwEp5TDc23RP6ZDmMsMZWvkh55dP3rF3shfBVCmnGUVkN9zyXKwwD6XQLwyZ77kjXzqKL89i5eqM4HB",
  "key30": "CNYTRQ4Ge5drf6efpNqpnyWgPfEKhPkk1aGp3NTtnrZrn7LeHaP4dbxUaWC9YjkbQECfUMVw96DLoueQTv4qfUS",
  "key31": "3x64rywsiEGZQ2jffr3TGxuteU5mf9hM1gYPeqSdQS6tqYMQMwcFGZyqM2hywUXKQwmzQDRSD1N8y2jrp7ejnVuv",
  "key32": "uGDL7cQ9fXFbSxhahsnrVrCMYb5dtkm77wqs1VqCghNycrSrzJcu7LeNCT5yDBX4k4Kedp4sHC7qmqtJRkgXWnu",
  "key33": "RDMKaoe3riv6q5iA4E51YZ5U2kzcxhXts7TuvpbDxF7ph7SAEbDFkHkCv9sarpKzDCq4GeLuwe9ugMchYgZTq5S",
  "key34": "3yrvFtZ73N32m9g5ENanaB6BB1fuY7CCTAAzoXtuCPMMbyNDRjF2Dt8PdtU2FYrWR3hKG3abbHhWZEY7QSojLhjc",
  "key35": "2DjQg4zt3F6dzqr4YVtaGx9jM2bnBWkLhMSSTgAHHghqTBAoSXdn9iKSSaymYsjW5M5FW5hQu8oAx3Tj8J2Wa2So",
  "key36": "4gJrLronqwK3bHk2gTaJLJtALuER8gFkfRvrU4TkrbtoxkwJxDvinD1poggtVFayGuiiymBjdb3J4Wew7CciFkxV",
  "key37": "4UuEQAzTebKVrM7jMbpGuScG4FZm8eBhXW2rPhpC4mJiEVCq2qBkvd6jVEpztAmQDrwKpcRY7H3ajucByjUsrHUK",
  "key38": "2q6Q5gS9Q4CfLcavPzV8Q4857jdd5og56zmFTYvjmWYUFqcPsqrgXV8dsqDmQSt7wApd2TLWsajREU1EvRtWcEjt",
  "key39": "3Bb7quTeQxLuYcaw9WmTE8ET8hzUgyVA9cS3DndkHhXcpNv9wFhKSsRhgDrphCCnT9AxLHXxXnxyhNaw9CN2rCoT",
  "key40": "2piEXwgYyfwwYD1Sgdt3Vh9fZTWtwsSwLGZ4TKT57PAbW4NRxU6fzNzHKBAfxF5YL4rGPaw1AWXQVDdrkihhEGso",
  "key41": "4z3ipAMChBXhjdTRjidhSoVuhBUJdDv7TyWyacXdw2NMjUUFcVm7rKiwqDsgTmSMwdEot7pK17NsJSDHVrXVG5sW"
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
