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
    "4qEpdPJvkChDvN7V2wFzS3SZAgfNyCcQs557SaaUm3n2mJYeo9F16vtUZjkwNYCoJh2uGovmJFUtqbDzNrG1GPjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BceQkT4TUpHn6DewMnXWB9imyLG6rXdCnw3bSmdQjBfdjrPP6vbFip8rsCfqzdB49WvVfwwiDNuYM2929xAitsv",
  "key1": "5Wsa5HfUjNJEccjHbB4GAribJgCSsLyWYKy7Br1UDej1XbTerNtMjNmgegXCwgQ9AoQzcXZC2eVYMfegAqjdkzsM",
  "key2": "44B1WyGD7SBFh4Qn33Y8vqx2MjDupS9EuLMwjc1FLcy7Rn1u2MFaEbncNtD7bKH1wnYWrNRpBENkFaWBuK79Hs92",
  "key3": "2W146KPLMRgKcMrpaJxk27NQSYQdT8mkTz28y3RwgDqXD93dd1JqPqX1ANeD1CrGPCPAi1CvyX78HYH92RufjyHZ",
  "key4": "2NsykmnrZCBUFEY8VGwu1vAUPfca197yDzYp9r9gcPkRWS5S8vaAcDj3UnYmuvhYn15krGYQ2kgHB1esXVMREFsw",
  "key5": "4xLGYUeavmf4EArzZEkdtJHgH3oyDocShzUFqJKB7nzREbfJDZ3V5Rh3EK1DmV31HhTgH5bGLbz4UVa8Kb72r7PF",
  "key6": "2FZxYG7ETL6kssqKNgaG3o85QCcCPew8ub3sVTDnhkwuvCwQ7wVKsf58rFCESvBASDwZSNBcRLqZShVkT7wpWc7f",
  "key7": "2J3xRZ93LCQwJ4QfFzs4FUWnnq4XCWRu7CTW4XocWYKriEzYjW6nPA6Rmvhtjk3nWekk4cECMP2qdKqcYUu7NLcD",
  "key8": "3Yt8nUjaPKz9M84d7unFioWatLD5mahUZuBT7gzD9afcGRbeU9pYjfYaPn8jY8oXexbtR1QMEcVtgNmLnMKNoCf9",
  "key9": "BfkSJX4nfzN1XEjeyCZM27vcUzieptPoh6BEzvPhRC4mtdGtLQTKwYKc4yC35xsLxDxZtJnTt81XTniq9RDhtu7",
  "key10": "BPNYgzLqqNfY24j3zWnCFsFkQd4aAP6pdwDsfYaTv95BxSeu7jq1uxWeRRUQg7Ur8zbkLFKVdSjZUhd3cFXxpYg",
  "key11": "49LbeRuDyp3GDH77AJi2GURQ8n5tKdSVCGQzmf9YGmS6VNwL57esaenS8612LtAJwrNmdihJJx8NXfMvYHqm8cLH",
  "key12": "2KtmjRSHfcR1zupSpUqSsj4ouKoRrE2NzcCNSBZu5WeeAtubEmXx1YtqojZBF9jTTp8vyLNK8sJ2TcKphaZFC3Vc",
  "key13": "53JMWdB4dFWAQvMt2w7UuYQg7bhDatGjzYxZsYFeXZRBkXMBoWdGBf1PPTAFvwvZ2xMbosjq4RdpdprhRRnSvaQ",
  "key14": "37yav8LzF2HJKXj54gCTg1vzo1vzDpkVYW6YdjGocPvQd8jEVsxGYcubcVx5y2vVRAayXhwRazPDxxGKi5CNmDT4",
  "key15": "YDRNT31dLpncm4q8YVZa2EAYcbRDDsJCGRwKwcDGxqFBY68TtuEPZCRhHzJ5p8jdDQZyQVnbRN4YCy4YBBE92V7",
  "key16": "28MKDGReemuXRGPMJauF226D7a3ZkMcYdudY59qPvXARMi57yMpY2Gbw4mNRbDFYRiQMMSiXkn66ypoNSRC5R3Hv",
  "key17": "3ciQ4BtGNzVkWNJg966Sn6oaaKECMmAP9iXdadEmFi7tpt9Gksks4V3xaqPeJyV2KMvFX6LJmoMqrb3Uf7xDXLTj",
  "key18": "4v2LJ4jJjqRDqHKYN47pVrrxrXr91SUdjhKZq1LkYo4yNSnLn8KBJD4EoPbbTWAXLbW2XC9N5txc8VpQyrHyerWt",
  "key19": "sY5FTsEFjpbLLbPfuezCw4kidN959zq8TmiNTWa2Q21nmPNAgqfCbVgz62pJaNDPe5qog1d5yA2xfdjG58SGZZe",
  "key20": "NoumyCjAfDhphcmUVdgYmW9E2kJyhUUZxfPPjcmDxFAvPHTaJccmey6x3xTEgqbycp5iG3s3KxodJ93vuQrpY5Q",
  "key21": "2SkioNaH65QrVkxfS9EJRYz3EZ78TTphMBXCPNDGHyNDYtwaqGKhMqFDdCaQpdGccWt79QSFDaRNTcgYRYuH4hKo",
  "key22": "4fHnqdo5GeaKvDFa1rfQR1uLzJ6Uz2kmmgNru5eVeRqHu6SgKD1xWwGHJaVHM8W47TGWBCX5w1bVp29U6rxdCBCq",
  "key23": "4pX5RJqZZsD7PHoULh8sgqFKumPLKjWvXT8Rz8wVf2ek2YcRWGWK7TPFx9FgFyq83UzBbDPAi6sQUDQCrbXAF7Ew",
  "key24": "3wRpho7CiM9BectxfeYymZXFoNVwpk2rPYosHpEZe4be7YEa7cUDAgi5z9euXJ5chPXDsjorvjYgJ5LRqfYc85j6",
  "key25": "3RdZuXzrqQd7jvmotFMUtFQ9SkbwAWe9H7iXC8WUX4QtgLXeDWkpHwZRuvqpkebMBrmScVBgJx8BaG7oKqWTfXfs",
  "key26": "44HsLenwsEtCrU5oNA8W5kzkxKPs6TdZ3486v6UjJBdspTssVKFhJ6n9fW3tf1fZYwGyLgWtRGnmWEzU9WD4z7vx",
  "key27": "3vbnFvnMB3wQ4NA5imX2Syxcb2NjxAJqNiCNC9WeE4291a1Lu7KeVAjxJksF95oMkKqhWM4audNprowhqYRrXgzv",
  "key28": "5pPbQX91q2g7Qa7JBGTiJQwkuAkVJhPDi3bwZ6WymrVqmc2JCtTXHfMTsje5VguXeFRBhHqUQnMpBFNaiZDKrT4L",
  "key29": "5aJSCqmrBeBGe2FMsXAyXbP4KCjLFG2pZRAW84VNs6M27QW4wi2AxC6auR8ac11PqBXAr292XhTNNNvmFvoMEzF3",
  "key30": "4heLSpcp3En2JfnnYTrRiGrArFUeGS7uSTqGGXaw3M82g9Rzsq5z6c9b16uTJy9gx2cUud2zKRoR7ZPRgU1uy4r8",
  "key31": "5aqfafuYh6kusb5LzU6cRqCRNnTZrVtL5ckYAwMV8rwUWTJYXCZheRJLsCS3Zd8NGZ22zxVo3Fzk5is3zbCLfQTK",
  "key32": "2SJWFbS6zxVUmb6hSPv7UpYbC4EXtV4KjAkfU9ttSLiNi3HfnPFao8mCv5qzCvzVSYkEJ3149viC8HUKHSchS8z5",
  "key33": "3oUTWhKP6FB2A6ZPZJFHTcbVf8D7dcFcj1VzVPvBYtnHsyoHGFgegNzNRXCy7SbfbrxPUEBd1zqa6aEmtp2wQmfq",
  "key34": "5Fc6mnLPR3YvUy83xnANDUP7rrtMiUhSsGxncujEKzeYEct8GcvPCoGXgR7Vw4xMZtEB1WgXwy49krCqBeXWgZsY",
  "key35": "HmnDVtvmxDSbushpFSq31qSGsG6p6hXjn3C4m44w1CuzoCEtv9uquidZiJnX31GCbT5kfeweNHLSSAGwHpbyeh5",
  "key36": "4XS86CUYLk8MHxN1tGNf1DKKtvzUNHLrqBeTLTojxcCMPz67RnxxoPh9ybcAmGEHF1QNHsTBXTktaoJd7gAnRi1P"
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
