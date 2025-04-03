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
    "3RUYx4VQfXeNwTTSp3tP1VHeSRDJQWFB15mZY3tbh91zGe6zCfLs7r1fRNjAY3e3tNiWQLhndJiQGQeb9RoZ6tFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NU4bhmZubfVzSYa24HNxY3Zi1SgFw1TPsYGDunE3YiUAxeeenMjb56ujfWmX11fJ5FnimkyjCPEMkP1PWbv5Eg3",
  "key1": "2esGKaw1ZZYwNtTvixRpyMzYtySTLjuRwLQ1HPKccEcmJYD7CuGcFeZbEaHT28oLaBwNCqWAeUcPfkZ9w2ZRcG4X",
  "key2": "4wHQmtf8RL9QyMTPNVPn7fKZkVHWxSiQoCUUPJLRmyXCvM2jSpRgP2wocASRMP43V28NMkscc3ogUkMURADmnmtt",
  "key3": "5wEzWA3MJypxKTyK9HGS8UhWcL8Nq3aW5wk8QLL6E2ggDpMDYa3f3BY4KLfuXXWAvDPnVqHSchLhA6NLMfvgrELQ",
  "key4": "YWxbJaa1228bfiwaT9BCZ5BKzysEKnXTgeNCkv4kNetEW7QycyKRiuWtwgHFjNTcz6SWnbejvxeeQHzL9EoS2gF",
  "key5": "PqbmZhKpMYo8gnCsxrT9qaafLi86RR1paxb7SnbTJypFBQEQkAqe75tCx4zF5LbpdPD46kWNM3bZpPEB4F8ce7Y",
  "key6": "2GZdEgDnMcacPVSqLcJbaDQgupLjTxkk9L5jHxycHUUAqnZipjqkF7dpBoGx3dVedZKzbrNDqV66bGzTJNiZX1Cj",
  "key7": "Sni3Gd5CM1G9tdNTz7pLG6hRZuyMm2Xt7tVnsHbpmm1USPcDtSxrxpaPRaFeRuX6gMg4J1XNH7QqHzXop4BQzit",
  "key8": "2t7Fqu7K2doEAayxmEekHNMgv54kRxEcTgas55LjGVHgp5dayTvNrZguKhkgp4FdfKhYMA7ZcLYs4CjX1cGz4QA2",
  "key9": "VeooGWzFw8EYrT9zUy626UnkeVWcSjoJkvyiUtCiwKYNtwxqTFC7s6K9Czdwzo1Xt5Z2n63FTuFoP6cECZFVyjS",
  "key10": "58a3UUCWbsUSfbpag9e93QYsiNXrVbtscD2kQ1VsvhrXTP9evTACVvEpnzBE8UdznxcwDmAbwrYWwBeEiW4wSTcJ",
  "key11": "3HaviUioUCW99QJB6qwc5VKbXk88BYD6fB3JmwaWfmKnbLwSwrn16ypm1a1i6ig8VnWenUNcqU1aQNVEVsS1n1wY",
  "key12": "2kSTFc9RmMKDw6wf9LxaVuRkFgVj91Pf6LwPHkDGXYQSd9zwSYjKdXrmYZ3vYaptoXGrvsEKbRTeDs79xV7hzLoS",
  "key13": "45DtxeqffzMxJESBhrjJTfRaEJPrDHR1P5UGt5ZU3rbRZL5MoTUJoeCszuUjgKawdmaJdMLXUBjYVsMbF4L38wdb",
  "key14": "2Q6UDW9vhs1ixeXB5AU6mCm1zJgP5HxN6kmjxGEqye4qTJH5D4owWUnnfXyR81CDSFzj3PsHt9nzzE8Fs7bEJJQE",
  "key15": "63bYDDYdgtoRpV5azAqkiEjqdiXr4NWjg9aMrEnKiD4qpRqSz3NmcDR9z1f3DaxHbgR8N1yv5AU6VfNTBMW5n26a",
  "key16": "3yx4Qnyz5hHZYyc9yyhipDpZn6mxFUUv7gdYPfLK9vwy6vPWRAxKdsDTgyEPjxUJP6YsfHyWuzK27CXkVLHcZvp2",
  "key17": "5n4L5g23Jwv8H7YNFq8P6JKYKaeYiHajgjUQQZKbWKzf9kz1VKxoUeyMW3WmLBgSo7Ze6hh3A9RqxWNu2XykmhC3",
  "key18": "3XvDKhiZGJAYcc2P2nPCkoSvdh4sWzTkAbJEB9fn6h459kzfEKyTxzj71nBQchHNEpCQFLV7EV3XspidJvFqqHcv",
  "key19": "8YxxuHQM33UaYdb8NMQKtUxHm6i1C3vEvSAzbnrM2hAZq6Z23csiHw9HYEiRc6SkJoBZ1Jrp3h7qzbRpHBjnLcn",
  "key20": "3xLcQRJyfu1wy3zTGQ4zEXLWCKCEfg99wowENNCCj2NoZL94efBMPN6YtTb4qbkQTjmiMF3jCZvyHsCHYd75f3kp",
  "key21": "5rz4xL7bAWWwV1JrS5j2pWd7X4QnuYAZxdTv1r3Edb7UvSdD5972gAUCDJ4ZstJt4NFSc5uNUmKanpcM2BWMt323",
  "key22": "5FcB28JBuQLARMZbsn363v82kJ1x7s5qDjcRJxErqoRo3DBGthMDSQFyHNfewCCRkWBdz1ZEc69e7kEmh7Mwdirw",
  "key23": "hTkH5VojxCjFu411mxZjsRfkK92QBawPsgtHntnDJMLfgekYWEV2FZ3hieEseW7aWkJ69ZkzwUMCXGcyVQ1G8Ps",
  "key24": "4JRJGewQXEQRPAHts79VSWjJaBWsuXDSxxKMpfF8iULnhhWRB1fBL76krQGnWFMjKw7oBKb2eeUcLqHvDB4Md8mU",
  "key25": "3LRHRF8vWpWFKVTwEQsau1WRkjQLgyMMP9fJ28BU4aB29fDSkiVqcJbgPpX5Lcf9yj9WHfBgcGqXwadvtdJ63qtM",
  "key26": "42x884TTEJ3ThDoPxLu4yp7ABGKMhWTtm5u3yNRnWrGQkMTUvHJxBFLbxDCSoWcq52FLKNvkRjs2Bhyc13mKqTQ5",
  "key27": "6uyEPEEewV5FqiYDfaRT4TBhG1VmNKg9UTtA5TxCfLirs5sA87N6gnY3KS9A4AfS61M7J42EJd1hybcLydDJeLs",
  "key28": "4FKLmubgNwPqcKvpzFWPCrYLACtyBMrD5zwaeNYLfGJiwFizF1sHYtz7NXqNKgnntyVBu62XQ1t9MYF4ygVzZwhv",
  "key29": "2Wd8Y9iC7GMTmFt6YaBTkcXNcAPpUtpN8pSDH5mi7dW1fw4nXtu66cnZEkzDMg8ea3hebRLZNcFHYSMfi3kEVqpj",
  "key30": "3GsQsLC46LDaaYMwELmyJGEZDfV5MsHbPwrhMgAjLVWhuBE64puZGmcpersisn1b1K4UgeGfNvGE3ygKGmpRKHbV",
  "key31": "uRN77ujKegNeiaMcoHF3WL27ZRaSWPnejqtbpoKXkbHusv5MLpKGUHZT6nfmuE6iSpwFN4ZPAX5bRf8ewMCbM2f",
  "key32": "4bT4VXU6PuJ8woNmqMyeDy6HcgSDciKHq2ToFSj7E6tFGRJFKuf7pCXwe8mcoGtyJRA2rijDEaycoNexw3GhC1Js",
  "key33": "4gZc3bYBZGC8Gk7VaNTtAx5yTfo8F2zQ2UK1THF6kYZMpSpJvwc3WHRYVq7DKUUSsdFBpERxu6uecm7qanobuy5c"
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
