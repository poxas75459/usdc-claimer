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
    "5fuBTatUcrFnP1iMTX2MUznkD58mCSsm6jq4j1Vpe8rtnSGwRTQgffYYWwUsBNqaKdqW95Lu3k1bdZBJuA7Mcdfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vFz7W2JGCerF6RDUjrr2SruZ3qGy6xwrbVRwV6ZUyUmjGjbTLpsJupDtzKGoxFUhky7maEonqucRs7PXJ7yyRXu",
  "key1": "4DHLQmjtoWmEagRL2d1NDayLPTYDHCGYuMzU3keZuf2oLGCjR8KffR3AydPCei6x9oFyLtVtZNDnks6VeeCe4TWu",
  "key2": "fnZd9uj6QXLBX3zyu5Rwc31cj1d455gpfjpnNQ5j24zcZeH3nNP6SAQnQ2xXmE1RRc5wK4X9VoNf4DJueTF5p1L",
  "key3": "3AhjEZk95fxCLAkf93vuvG8SgsXpy6u7WTxpCYniHdiojuics8snAq7x74zezBeztf9tJtLmDPPAomY57gHrqySt",
  "key4": "66zrXhCPniR2tvBguzCNEoHDHdoSZzS5NDipGt12E8VU8DWQLWtJ2yS16Zp6pZMc5zazzt895m8AaQSh6zGNhqoo",
  "key5": "jFPKYSCtRGgnqWCAadTtgdXJw9poT4ffwFcrkMZpDMnwLTXBABEnVKtGffSaTUM9DMWHF761wvc3ec1itjGaKZ1",
  "key6": "5b8J5XrYXkQDQf1QW7JxRi5mc5mJUfx6SBMUZjRRBjyfocZnUGQvFCGs92AGnM5i3VFffR8UbBRKR7FnE558yHQr",
  "key7": "4b947ph7x2xWsWGyGjvTwLBe7AY6hHzmEpGQi6RfLr124EeGLjTGVZRzB9A2MgdmUFCyABqzqLCBndR6V4j5PSz1",
  "key8": "2SjJe43nu54qkkP16Xshr1X8ZSpqqvuL15hyGexKRoJtntzWzJFuW8hUfX7zsiYBNPyLz729qEcH7RUjEmpYuk93",
  "key9": "4K3Finy71oaZccURLzYkVc3D9SZ1LeRYGKANrK9F7nSz5s5R214fmNVtsGcBRW7YY1wSrGRu4h344GMm8y4nJdBw",
  "key10": "4tv8TgVqKLuCidY2p8aUgPfXURw75zdqv9ybz4KgyXfr43mzoG29xHVAXe3LtdKa7ED5PrweVidEhoMNoRYw14rS",
  "key11": "39ooxtVRKQGniNd5Gz53RGy7DdWXLXgjSegZYAxQvkLzjVKFbT8no6nHF6hwL6RYgYK2gzL1aLZvB76suY7uddjD",
  "key12": "51EMbchPw9eJCQt9yPM8HvqRSz5GxmNv7HKRNXRzYa7seMvbcxT2oX4jnbCvFK8mrCKnzfSVescGp9pBrTYxoFfE",
  "key13": "4WjyivnXY51hk59kcFSAJKuc3UPVXRt9XCWBsZnCEpFMWWjketxZaFLurcqBb9zyWHF5L88eUeeH4fVEKYXrBnuc",
  "key14": "34FH41AXLDFeZdpQh3tooQ2EZssxsY3djXyVHVC3rBBrsqxMfcn9FEaweMEeZ8hRkCLHfVx1fC9Yf5PAJhAPkxT1",
  "key15": "4rHvUJ9ew34ebZ69revWQWLMykwyAvYLLyBnCt7qEqsgVkhFdWxBaiKNcBky3PkYswnGUkN9weYoAGgmCZbUthJx",
  "key16": "2ubCSzfxVwyUtWt81smSmYAauQ4yE7LSoEPf8tDtbR7RusjvC2zFSL1i5ao1VvGEZXTXtgy894iePo8hVZmxzsba",
  "key17": "5NDBhL2hnfjq2qU8g4dYb2rjSQS5HHedFKkpng8KixR5cavYXDfcCFprhCiJWzpoWszWeWdJx9FHf4ZgZqP6xhzc",
  "key18": "7QfLWKzAbVjrn6mYcDnX8wV7897TbpRbxu43eamswbauMVdiJTiNbWofGkpFqrAKqscyik5LTRWfR3Bov41r4Wa",
  "key19": "3xJo8tFCX2nppLk6ZqEQGVSoSSrMwvE61PGHUcC8L1tNUYG6HKJGRQyDc4zBCJpLkC626fYbTGSns5NTWQLUhGoS",
  "key20": "33Y8N7JCo88iX9ohFFj7yPUTDh4BRU3gbKL1HigJSf69c3biQgG5Xke4ajXvub5vvg3PPfmzRjPLEuZ28ivfawSZ",
  "key21": "4RRtMVbGUempcFAVYyhXrut7ET6tQSN4oNB1rLnKyUeRULveihc4tWNNusYzkwkviwAfTmUKeMJHxBiSan8dLDeF",
  "key22": "3wYCeASdw1kMTMRxNEnGrGptcbXfJTjbVUr7cVpN3h9BKn5TjSYtPMF12J33tRPbb88Xw94io2qA9x6wCi7rPEvB",
  "key23": "5LFQ76DbmUEmitvaXFkd3QUtPnB3maKX31ADHVJ8yngL6dYVRJA8mL8pC68eiVj5WZiukCeFKRk5fa8sJc4xHbRC",
  "key24": "5F2eWsUSFAy1DkzGE41R9kH17opfmPAXGjLJAxD5St1NrwnDK5JwpanZVpoM6L1siELdZgfaHkKSKxqTx6JkkA6c",
  "key25": "1ogMq2UiAGAFbKgn1Y3A1yR6Gp3G6YeJZc7BVLTHWp8oshshsmphTiXdPKdnEjCLqm4X1kZ6KPcV3tFYrGNVDJ1",
  "key26": "5TT7vrbXUsF6YQBPqHJzNnCA1Exh29TPWd3morUrYSUj8eEng3kHz5WHJj5wfv6S7cme27tyMVh7DZvxegZqW3mE",
  "key27": "2xb7rH6KuE2F4XhZfM5thj8CDxardnYzXTcY6w4twkzkQKEMTNcvHy1m9fVP65TYUsep4EqQfAPPVL5iWTaUhtYT",
  "key28": "3kbsV8opFSn1UHLuQAx5V9XZymEMRnSH8pg8dQPeyGvU7ymmuNMA1vCbbi9DvquUdyqykF6uGvZwK9hrdVx8n8Qb",
  "key29": "1hvj4riEanfaDKqnaS41znWAEYNQ7XCcRvJxsksbfHV53DCe8yshaXUg2ofnzfXv6cMBVxRVUansMUQeCUQGvjG",
  "key30": "4LwNocK1iys5iZRjcUAbJxnYNeLdH1aGevaKyz6rHDbKCnJXNezVbxBamWDGEwWUEjFoudnXf3RVyU3G1WeEsvX3",
  "key31": "4P2KDh89zRByuWGCjpR7K5sLkRgbKvcaog3KnbTdEYVnK1co3EEAGcwq3DPfJ8jmxkar6676PHWiQg2JTQF7awqs",
  "key32": "52wuhDeZbU6YjcNBSsLdbxQM4qU8qHP4Vq15LaJXTUy9oE48jCzVNisKKSKwSYPTs7sDAUpCnQ8yvqjJgGgkE5zD",
  "key33": "23cAmAYCBESRoUnNrrBwf5tjXbWMwA3HND4wsTigPcWPr1wukW8PfuQFtCjb35X6HSVTrqVk51gU6Cd9fK78YXG8",
  "key34": "ppui82fueK57JNRhR12A3Bn3aKgBGiaDynagGRAw86jRRZgsvLPz8wPCYn5xm2JUphjY1E78y45KUSgyQxNoUBb",
  "key35": "2Ea21gxn8NJjU3GqXm9pCMDSCxNTt44m8Ljn6E8rQP98SzSoLtqBuMkxQ81PPNUsRpguqumo8HryxoPPPTzPEG6a",
  "key36": "3Yv56LisnJejcQy2uVdhM4sjQbhcYJrQDxtt9VfyqyWzDZdBsXgXD2h5QSd8FYuvdWWf4R6nMw3ZwhHFJrst9FMe",
  "key37": "MhvtWc17rHPu514EyyZCZq2Knq64fCoBt4uEw53apHn7D1FXtPj12BkyWq2rqAnSKWEYw9YsDfEZ9b3PMDkuTQE",
  "key38": "5SnziAbfUs2NuvqaS81W1jqHzbCWHo8RvN9acVXGE5k5up1x3tq9K3F2zvrWBJHKyy6QdpoBWasQKw7AfYYaX5d9",
  "key39": "4EjU7Hiu4GAirQXRp6cpJn7N2srwuYCABuACop8hzEXGGB16cV5H15rxdvMP4oyX8MBEXejemCFkzcjELq6s8b4x",
  "key40": "Bdw8wpKfmjNkcikH12nhe1s7x8guBioKJe2wV5AbbR6DnmAtmK7zFM1o5LLM9pH6eW58Z28CxWN2C5vKSXUht4Z"
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
