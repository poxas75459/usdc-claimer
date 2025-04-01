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
    "5vw1pig1TFRFrf4F8EgxiNeuv4tn6NBqrAVggzDJ1WPR6XCPbCpUidsbLRHKSEaTPE9UobDhM8NaDJmdBHgWXwBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57U1yQMJ1xSGSry5rwJEznndtXqDWs49cmRcJeXXkr2fMBLQSy5gjDVdafDi1uKeFtMJAEuPiSAvesHByF6XzJA8",
  "key1": "vdq9UJRucS9vdGgEMjdaTpFCJzvFXvUVdJQ335cNT7wQHe1MBCPWyhizKsx8N7bZxSgwZun4xZc8X5TofFaRYHY",
  "key2": "ze69QsVL1dwfVWDMrsroYnjnLCqLMUcddeVFYeNnCWD6nqJxC7uyhcgg8szibgpYz8AgaDxEs8PzgXuQUaxAXe5",
  "key3": "46sQFWiq8MmVuyR6aua1fYkgE7Xe8Pkkokfq5XqTjkiZY8xyMyxTPBfniqPQCi98udKgE9mSK9yskzu46yP7pnXc",
  "key4": "26v5tW9e2Tw54VNQGNaft26wZQ9LNRxNzn38CzKSAdSa1tX7B2MTmU4UdMApTKNdJkdRTPAMqC3WU6QtTu8Xhb5s",
  "key5": "36QYV3MNvU6aUYJqKhF7Qo6YbWYZNBcAFVbLZ2xDgU7t9SaAFc2rUir8E6iM7hLpRCZab3SouNFZ7j8L3Ky56PH2",
  "key6": "L22hACn4DoEWxkPEqJd48vcsDH59dBYEp8z5RuxhKAYA8CtX5iJhYTd9mR4NyoPpywHJ4YzNfqxdUrToxtaCrQr",
  "key7": "4Eu394mFGutq9HxR37ZetcamtWv62Q9TSMZbE7zWtAVT6ZNYdVn1q5UTPh1XqSVtEifN6NHGHjy222RAtsfjHhy3",
  "key8": "4S6mC21jLDWrN7sD6eP7d18wmpjKUcsZFt5BREqvDdx45M74uqPTEDHuu7BzvrgSZJcyn7Dsq7AFW5WEVUfXyGKR",
  "key9": "2i83HwCvBgjpF9tv9kU9MQUGBcRSD3dZgry8HYpD21w233Vf8VWquu7cZhVz5ZxiLaBxbYXnKfhccJZD1zFHs2d7",
  "key10": "32LcAusFmSM8wJxQSgk59fTTQhYJ9rpvs4eVUudov3iHyaQ4TshDcpMhFvtbea4aFgG1Vy8LodrAhqUmtpWBgnLc",
  "key11": "5PKMFL6vvNwVhekT6KdVxxbdMmTzs17rzFARHKcxHP6mNfr1gDYUoDd9uUZuTLzciu7LTZqtifL2PgQQ5tCUJKqD",
  "key12": "3svfoRpUmErPLiQ2Yt1mX49du2p1ngFXRucqpBvcvGDVJzfhA2SVjF25iJhTxkuyFU8gXRDMzQ9cgPLwAnYuTKYB",
  "key13": "5Ub6hjHKdDCBvxpN2tapDJUSmQbTubkM9CNbaxsZnqqZZSfkcEhZZAesyBhsToHmh8PRGAwe2CFoSG1hR9W4aftG",
  "key14": "4nbBja7rkSWteAPoiVGqisTxP4yCzW1XjHdNLZf2cNEvz3ZfJwurdkMfKRtW4JMn8fvRXH72WVdnYWd619uYjaiL",
  "key15": "2cqwDnPa8Af1jJgrDguTq7ZwubU1wGA7ZBxLNAqyYUEG5KDvWZXNAT7e7tEPYaRiJBexQD3FfGUHxW3HH5Sh6PCV",
  "key16": "3fgF44qYxphkASDqZDTs3gyXh5Ck5x7eB9YcgSXqAb624Kzajeo6Z6MWLhUG3La4sbvAZyNZbJwoenTmANjvGjZ9",
  "key17": "5xhmXkSMBuee8pZ9jAyLgf5fVFSGu2T9FQ5LVhYerdN1aGsn3CXL6dmg3DAGXVTngK8H8R9ofAxMCmA1omgF8eBz",
  "key18": "5NfacVbaPdN2oNXK6dqHh1Tt6bfGnSuCpUFR7rgt6JymQ2goKBJ5uP3Gqcjo3xPM2jAc29ebepXCqYVeHEfBV26u",
  "key19": "2hzzLYnbJYoQP9tkkXmRGeQuR3MwyPp4SFSc1UoYX451rxLu3GJzJJ1p9LhehMfY8pGwLGyCpsTN7eZivg3GSwC6",
  "key20": "62DZLjG2xdubbgCYKYFDGTxQjkApLV2q5CcshdfWay7PrksmpyXS7g4Z2XYYyJQyxbDqkBPd8pUPS3p1BnNbo4Np",
  "key21": "2FF1Uv3LtfpYP974PqinDTx4YSyPZ8AtaDnDhmNcL794k36Gnz3s922hvqyn2LTgR4uWkfKU7KjXd2Q1ebDrfyTt",
  "key22": "eSVjSUcE2dxWNT6C9RbFeaxNkT9ANwgawXMhUsmtF3mWhagftbEahtEpfiUVU2t61vsxqMTYQ1iHAYnjh7paoft",
  "key23": "5NcxoJtdXxumPSiXpr6GbufMQvZ6cMcN3i3tDg8yL7BMdCX1gNbhqgsNKfxKfQzYdwbiucSBby9yTiqXVR6C3jgV",
  "key24": "3ivyELkHjxfXZMb2JWZztES9x7DxCHmWG4Yoz1ttRJuRLmMRreYMi6T7xRpFkLjMD8aPghnMUfDjsyKewXJxW2xb",
  "key25": "21sY85361QcLeF6j8azxMQ5Fg4MyGJzWTewz48wMF9QBgHnXCYsrdPFttX9PPjoRTmhUEb2pEBPybxCMbT2hpux8",
  "key26": "h9wu6YodRTf9fLF7FGo56X6X9Ad5aYYoQ98KM3UvZ9pgKYvKa8JknfjHLbbcNMyydGsnwzm1inQAdQPxgvzgg3Q",
  "key27": "5K1pTXdp6ejfejrQ3QtpGzP2xBRmTL2wJYn3KaJQAyTT2Tt52RWcFqehJuJpZHonumqRoJoqJ7cEsZcR3kNoTrBC",
  "key28": "4smzfhHgoDken2gg8oekGVNrY2YYWHGfRxLe6f7bipTXLE5tgjEnGw1BWiev9wBSUKpYUUeaeSrcHo9baDJbwpYx",
  "key29": "5YVwfVmHumfyNbeShDXrdKb5saeX532uSwqCvPT6dUFPnCSKi5Xm46qJMFJyppGaUoEurXPgCL7H53qku9sNbAC7",
  "key30": "3M6optTbfYQhgtr5ZWeF6zLJ8Q3YScEixaReye6YnUi5vy1uYEjdAbN9A75t7dsELCepgCN777z3A5DbKfhHScpL",
  "key31": "5Q8pekXxc8GHNVoZAXSBCCmc9ktJarfs8zie34uFzyYQxgd1hsUzTxtZsqX7YXFMFcncRCwFJym8cBgKzgZYXuBq",
  "key32": "3jfWER1sQQX1p3Zy9mfMXMANzaVfzeM94ayYsQvaa88ZtBQnJDj7qLx7w2tRfdvyXh5dyAkHzGKq49z9EtXRp4Lm",
  "key33": "33Np3RJcDk3uKmUh3gVtNRxV7ZG2QaHa35SPdeBQ9ADSbSvWD2AcdWCUj7aagznG6LSbv7zqp3Ca364d9BLBFYLT",
  "key34": "47WQHUxpY9XqSybJGQNVg72QocqpargQeoyzxtG47VDbwjYTFeqrBK3AxyQkkLtT9DV7hJ6PFoDGqqG3xLPcvnSK",
  "key35": "nYZ5CSHD7bfLqqjfcmTgna9cCnTwWdowDqrSnVrQytKBd8DUjUbtpcrSiWo8LEB2DYk2frh3snsyZo6wvngSZsN",
  "key36": "268N2rgSeqCFZ6iB5Eztq26oLZ7KyGnsMvbZZAZqzQB1jMeVGY2GswWsPLWfraUSTjsY5wBCL3h5KBJ4AdeQ8Tcf",
  "key37": "24d6G3NeLBq4ZYXvBLWnPLwV2x28DvUQdxu9CH1ZxNDMf48JPEEuqhCi6TX8rwg9um4rJCQrYmqbXjCDg6tZxWRx",
  "key38": "3TYBSp1yhVV2Hq2WDApzL3EhPGL4ZEzFj6qW4tVxnX1ACXqJ4YEMjY7inJ8BvonKef6cfpNDVccM23EBomZz8iQ4",
  "key39": "2sTvMerfoKyYjBSPqpK4jP5MeB7QpG7EmpSZ42zue17WjPJR9rSohYgYW6xGr3RGvCos2u7prXK791Lc5XvTgQxr",
  "key40": "wxPY4FqhsiFtimCVyZi6NyqvEb3P8kdTY9zGyBsYR7PzHUjCNNTQBWgimJVw21CmcbL8fKiHfYfHXAiRNyfe7Wi",
  "key41": "Kt4G8zFc9VbwH8bC618S8fY5vPFbayPM6sjxFtT48iP2QExH8QNUNNr82bNhtiSmZwRtJAtisujvwhbgqHJLQgW",
  "key42": "k3NJdWdEeEASK7oZKwLRn1xRdKXny8XLYkWSomA7YXDH64B7X32GXzGPSYdZYjkoKhgKw9C6YouD6wsAxEyoK3w",
  "key43": "HEhabJZQjqDoKQqdbeLeE8n2MHAU7SkcvG11HYcB2QH9ZffxexdQ9hUvC1PWfQ292NvyQoneGEjde9LqCYcZMyL",
  "key44": "28ZdupxGyVSW2Xc9zbvnAB961aPiBbm6XJMhcEERUyMQ588Cc1GpsQwzghG5WQLL8xk3LY6DnifaJYtJxGgGBKFt",
  "key45": "vP5YPDSgTnQUru6sHSZ1pCNuTE6RbpeL768ZFTTiRGcWTFE4eqTmL5mtAs6fjyWa6hfot5rbSAystWP42WvKxrD",
  "key46": "3AnpcxLEPrWFNinBMfMZ68wNMYWrbfALFqDLJsA4Fw5wLsuEEKA5eotRbDWcjKaaZyLKsVERM2Xhy1QBwa4pSzvQ",
  "key47": "rwWkhVz9C1L8sKzYbRXjL7d18GGD97VP4i1bvcBZd5wWnTAjCy7xp4x63M8dWZs7jQ4giLiNAbfj3yrRQkvM92r",
  "key48": "2pQRQ7JE5uBUk9PBVhNtkiW47ctpDHeJcGRFBMnshqWKnZExg1VfANJvpA7tGPPMLTgdVYrjeudEqzmYTCza39zb",
  "key49": "3V4WbacyPtN4ockYVWgTsB2cXyqdM28SvATkz9LpB1WrbwL59t5NPH7Sgd5dwM8X34vDuVYwhmLD5vXmLb7zUZTV"
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
