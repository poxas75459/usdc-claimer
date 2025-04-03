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
    "3FebR3HHyGGicNhD7pwWHJP93svvRwknrowEYmXx9wEL2JnWeenexE5idwC7uEbt3wRkAbUEcaWTi4bzg5FufCJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k6MA7K1Hro3Z5yKSu5TrDkS9kyCnXaYBywyeJv74aaCoW8WNNDZdrRKrajF9G86ZFA7LwBXwPk2SR7tb9h1Nx97",
  "key1": "5caxa15HvyvJ6eVKNziJXfGycgZC73nMC8CZvCeZDxCmAb6kDcAeUaq7fCP4F3jq1pDm5drUGLmZomfea7cGxa2n",
  "key2": "3omVLBjPadXNBN5zNgHN3UtCcrDim2oqc39FQWYpmTQLTqTztDY586rexPeu27CQP1xA5D45u9pM5xbk4SaCNoTb",
  "key3": "4esdorp2X8UBAmDwAD9KyiqeNBxLSDobBdU6r2LPe5hXB7aNGuA9bYhmeNKX39NzPUuccMbcWPE1pd6ndhaXMvtw",
  "key4": "3823eAqiqTa5tqMqqJtXge6Cxjp3QoXN4FGapKAbL58yVTXj7JLmqcA7eUv6pZuTDBECyjqXnBfYtYvtSMnirbXi",
  "key5": "2ScZ5hQc3ZZhBbqFTz6TAT8BEq816J9SKVWQHW6yTeJXwQQUJeJqfrTE9ZndRkebSCzGsC6jRjxHf59uqa9k5VDP",
  "key6": "2tgiKk2rffymM1WdsFF9FJDkUwx6M5kgAQZefDmXBSHZPuD3hqJQBa5CUc4eskjZgPvKCSuh1x12smkaPxkNsr1P",
  "key7": "4VgACCTCY5A1BE7EjLaQCWJj6Jp4VV4xfuxj9XNxruabasPvG61b4ozH2bJXFvm3iJGGfHYeNjWrtdowSoY77MpX",
  "key8": "3DLuHtUr7Gxr2qaFDyEjGUZkGG7Z8VjmwiqbLhvaj8FgpSrzCQsijwmy3gi4hSX1wrZMRMQJLfGSsMZFyiMpEWjs",
  "key9": "5z6urHHhwBYHEZc7ewrEEX3KYFNjZq1RAWiW7QwUXWHKAsoUmSrXoAF4t2obTgVwMAZQcbxUTJjm4iPKxphnvXHf",
  "key10": "BQhWVUu8jg3wLmdB12Uoi47wzpCkKUWYttpkvRRbH7UoNZta6PuMfixnMwMYwdeVH94JBWV6F6EZgCwBk8MiFx5",
  "key11": "4FdXZZUvQZ6aGSDusEiX51nDLRvtPmw5e6KTyKEgQPNGq35ovKbjtaknmcc7KwuoFSDM4iWQb7y2Mjm3GHLXEazW",
  "key12": "26MpVMiQBSvbsw8xWafbFfDc5cDQs3vkB2rqLsAFTeKkPhq4psJgMGFEGwXALFjSZkZnpRn6Maj2fT5yzkECfaRU",
  "key13": "2uHmQyM9aTgJLfhAcSqBQXtmuFUi1YrQGV7xcpT9WnXi6psT1sXXCN1aG51C6bpiTekeioS4GAkyXfHFEFCxzMFc",
  "key14": "5nBiVcSiuTKCw6QhbVxbpvwarbaZy7xezEvLM22pRNqAuBsdRkyj4WU4XhCPdcLvzCf5HViVxAjUc9KQJhkZgUXz",
  "key15": "4piuHi5PptDvboEJYeXs2EgCdB8QvmBexPhGQY2UoPzGXjaEPhMwUU6U7VXDHnaa48RUbh5feUtzFEe358QsQtHj",
  "key16": "3WD5nA2CFdGyZCG5KVtLfnpNYpVnmFd8ACbnNWDxccPNh9Jm6ox5RkoVGiMyW9YRsqrEkHF7bFq6SnYrvnodYiJD",
  "key17": "39ASkF7UxYhHL4qA15CCEMCpoz244f7igeLJqxz4YuZ9y7LHrWMAAn5wy8q7R2nGZtAKV55245qgrkdtnN1ZD3Lb",
  "key18": "4Ki1podEn8FCR4cNBKvjmu7jqfDLgq44ZLPdiDtqxgP98pVNNUpPmP6S26Gxaey9SNNFLoiQBAcvNs9f4DEALcqT",
  "key19": "5uvxEiv9sfzMg4bA8NcDwb9aFvAwjR2FnCKKpgmzRNSWNo1gYicDTtN3wx5AQwAdXKfabL88jWmtYJzELM14GpWM",
  "key20": "62fCAgU58EAdLHa5K1i3aiRmFdGDksvct2p7U2cseKajR2qKPK5hLrsEpMnS6vdSagGJFLSq6LfAYHYxpxmqPiL3",
  "key21": "2wwhQg9tRWnDoExwKDipu8eiLwMFGwRCVeAt4ZhY73FYM71rWjxG2QoUNm9tZpeG58HbLnnoLQ4Xfs8gxJjBCmRA",
  "key22": "3wSPSR3gtt7kAp1Hud6SjMS2CqbxwLY8RPkR7CUJy4j54RPFGtVsQz1JvL2tTWk6qYSBLp3D3bT46tSYK4A2qdFm",
  "key23": "A7d4ZBwAjNbnjth57NnXd7xbSv2qbH54ZjpsGgmAXs5RfHF1nXgjheZZXqDuM86yZJeq2w6Qcus1BzYwnavJXRV",
  "key24": "5Lvm6mWUso5aeH9VW6DLXmeE8UUUwk615yShCPWvJTBW9obxHHZdRNH7kLaQ86pbSDKoemX4FNoqu2t7e7PcrDZR",
  "key25": "Kum3sWs5nFWdMBYBWiSkatPJGWGxmji8Y4n4RjcFk5o8CohV6o1Sk6xsQWaXERv5zt54UexurR4LmMWAW7efPNB",
  "key26": "5zJYjxW9iPPQZWt7yR9PxWdvjBqCjp47kJeohBsPf9mEVb3TjkW7ZmxTpES5nTyaf2cUbSTrn6cEJK2rQqAeA9Dh",
  "key27": "42Wa1cmMBBDWawZ7BGCynoz8NUDM8n7MTXiMjocf3L7AdEXJobpzti5PtvqUsFh7bmY9pZ7uiir1622MKnzVFf1y",
  "key28": "3FXQ44HQc9qoorRYRNFDUnhfsTaYZe17PtPq3qFasjSvwF6FHT5NVBe48wLhZ7W7LZkkwpt5BhE5XuwX9Wiao5JJ",
  "key29": "5b8z4AiChAyv4p24T4BtKHMeT8G6VNErHZ8NS9zPDvWm5zEyAzurC4ya1eMgNkoqcxdPmk5Cvb81X8yTc29fpu59",
  "key30": "5T5sC5uoZysHhu7s8BvTimMaUDfCDNtdmnNQ9x4E7koWhAnwdNHSsmyAxxAJZFrDbar59DUPWaVfyesrBWofE2Pj",
  "key31": "23VFZea3teA2yjZsC8t9pQ8Q3nMQbkEpvgDWSaUM8LmBGvUWJyD6zAMSpkd2GYPc8zU7jwCSndGJz3UU8L4BSZCb",
  "key32": "25birhVsg9Dbb6iNd7ZoSW7BaXj9rsojCGYpq8AFAYZk2cY5m83kgE9DEMEGxBoqoZMRnMCNCPjKp7ko2N8vT1B1",
  "key33": "2izpLVTpi4CEjtCKzJPfCVBKQ8FWg95du5HctJd9NWwMrdrRxHjeg2p1WEwvPYK5i7MUi9DFcmrnVG7NwYp74Dk7",
  "key34": "QvZEK7ZGHqsCgAKQdWijim8dHLhviBCC9j6eZ8GfFNgHq7fx1wKTvXgQQRaeuENJm36L3YqXM79j7ofKCwppx2f"
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
