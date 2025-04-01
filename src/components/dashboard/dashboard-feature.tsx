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
    "279imMijrEK18TwUXv8Bvx4QnnZCQHiPmpMFGPJwtX4iDzeU97P75ZSPGwEPZ3yaP25bxB1FT6e5z3Aa9Mq5qawd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67aUfqvj8HSvxBfmAyiieD3uJGXsFbT8ghrU2goNec17Y3sstTeGAsPW9vunYpe2MsRBTxoDHqSQnhvcqJsBymJg",
  "key1": "4XUxv8PMYdDz95cA8M7E58cp5KejGy9HonFwd7F88kDBT9NGMjNYkyyPzcf8NRPeRatpE8fRLe2WAs7qWvCVhvU",
  "key2": "542QSRVi8rAMuyp2RzpCkR8saVxvuHBBTr7mG5xzLtNyPHkPmn9c459ULmqyvAk5UqN9DtKs5c1zRKnuuZSsPip6",
  "key3": "aaNtR7n8ZAQwQtf9XFRKrMnM6QLZJeLFg2ZfBiwvVw5xVkdf7T5byNUKSezBfHETuyYLvkpSjqb6qtQba7epJtN",
  "key4": "4SWipg6vZCQZCWkvT9kipCtApnYfHqayjXpmWZZZWANUMBNKyib4ZhHscMdFtcoMqanYfjTKTedhQ7xWBjLqyWva",
  "key5": "NvUY69NjP2VXymjWeNyzK4QjcjMunVMXfRy5gqVQN3DjEXFXx39sepsmktkLsAHWorvt5E63Tggd6LCLwqiDBLE",
  "key6": "61bRTgVkLmsrwcZSaZwEnDszrPukuUi4RKvnRyRJiAzobxo3vdCLpyLqTnxRg5GSqvsJm6gPe2Ht8B6HcWC4d5A1",
  "key7": "2GPU3tpCdMkAAs9PaKLvRtRppdNzGwooRRkBgPFBtDgNse5wTQkZskQSEWy3MyB6KpdWQdTuqLJoVBx1Wo2QuZL5",
  "key8": "J6G5hUSsDu2dKEFvLBqRFK8a7cLYm6bvbpqxpurmkFM7VgAcyX5RMVUjakuJgFLALbo6hnaRaLc8nEex97Yt1Qy",
  "key9": "gBrtrmGAEXzC4xLRan2ioAVU5NN4joWrY5bVaG1YJ7UmHad5yznvGWmkj27YSwFJbaQ4hHqwTJmKcxqH5abtc3E",
  "key10": "57u1497kskwnaZoRvRGHmJYG6V5Hny4wr4hSabbh2zVTHyTnis8HMbqo2Zt5oM5wdTTJZdbDuYAwVEZnptoWM67J",
  "key11": "UJMFRxyywhJWcapNk4vK21ArKvqpxbiPNyKLcFL4GLXWdFUbttKSXuzyTyrMBCBZNehDw5Xs2uGixFuH7ruEPAL",
  "key12": "2gbavMbwCUdmYjHVnwzbS9Bts7mRNciPfXiEDFQgiSbuCzdaB6G2vNBdHjB1Zp3PU9rytRV77RJ6AqowWS3smFk",
  "key13": "4kbwEphX7jGWwAXGqAfdBM3teKrvzoubR7NEhimGyQNa5YmBmss3UN2HajxVqemRFGdKgf3Mi6Yuca5b7YrsiJCH",
  "key14": "UJ8TURrPT8Xy6f9nUS1RC5cz8AiAppy1MPF31Waw89gAgogwxCu8ZR9SccgfU2FLN5r3zfZBe9tif6vMPQnSJSo",
  "key15": "5vRxaFTbKgYW5oha5qCXAn7GhYN1XAiYgLHYrmc62xGF7JpzSSc8yea1UMursV2o47nGXtDLHqs31byaCqe4c6V1",
  "key16": "5fdcacTKoC67EHyuM5dVB6XFt9zHcyrf8wq4EsWbjFSmmxGFd8shBVxWXspJcQb6u3k84MK5Wi5pg4xWWD1xG2ma",
  "key17": "32X5pcG6oLnJxSjfGndyvJ2AY3JUwdtB9fHAhniZ3zixsGJJzaFSNk5PP2qDyc1MgpFBLE4e2vUgcy7ckNPpWgvj",
  "key18": "3BnRBLH5hNg8vVgrMJ5ivaRcLyS5AJLUaqJhyFvzkHuxP25BzBGh5rP9Lw8TspdkdPqprU7g1E8TXBJWbBTfM6je",
  "key19": "4RkGMNm3RWeS5DpT3HJn2qGSe4NQ6GUXQbiD4xX2ED8ffeWGePXi1NBtbaF5qDAuS3ruFhCPBYirQ6s4CriAiPWd",
  "key20": "2zb4tmfBz7bPVYmkB62PvrAXWatozTZsp2M41Vudk456bNuZwp35Agqj5XDyV5bg4C2sNpFaZLQrNUkqG8aXpQdt",
  "key21": "tQRYeMhswguikaw5p5p67ph28Fxh2x37JZbqY5d4nokKRqwoGKkMg3rXWAvySXSnsjAkh88NKDQ52GRvgf6Cc7U",
  "key22": "3X73wcaksghHe1mznFscQXCdwiMp38E1jR8yBn5itzuxGW6n8T7umT55Bp31ftAeyoPygTKkEbgBGyFVYkAqYE1g",
  "key23": "4o2vWojKGRVdyUgmJ5NNeD6CgHoAvgGA2TvhUF9e34wV1P7fbUBsFu7nQ2xEFWuyHepize2727sHjAGdnYDFWVpF",
  "key24": "59yUKdCi1nZisdMG3duqPi7dSw6DrS4QMhrnDypZS4NSPL4bR5dQnrVh9J4Fz4ifk8mwyDd2dGGaZ74hapAqGBgo",
  "key25": "4P9tq28nnc2w4MRHFdMsnaDCyE1sWiEyBvKKCcGP51x6h3JTxRfJhDWmqzLfyMXgfdm1Hn6ojQMxuWYYKXjc1AW1",
  "key26": "Cv7kQbEn2kzfUbhNP5YcTFFtsFCaEPeSchMmv89GRJZQQ5VdFmxfiLF57Htyn3AkxuWcLLTFv91UBUkkerVLq7n",
  "key27": "3Vsfm2xTzWKLHBxvY2fUiDqq76XYLFTcbymkZEN8kfAtuxMU4ZQWFAtmdBPg2Zv5CXkVaLkXRoJPPZZ4cjdLNdY9",
  "key28": "3Ed19CyTk1YWHuaWiEDtqZomUSpDQWJrjHFKpvzVobMn2yZH3Wez25CXq33v9B2AfggbQLomrvptHu5W5GEv4si",
  "key29": "2oqwmvwHxeRVXCPgwuwGw6dALiRaHKD3aQXQCL9ju3Et7NeX9dUqBCEgdHNnYnozhWhHvgQk89n26jD3xWhKgyUC",
  "key30": "4ZP7JtEgZMGpUToVmuvGvCQaSGWkf3xgVce1wmRJhnA6uyPDBwqCrKn34FN1cHsRa3Rs24R34GW5XCQnbCBhPMmK"
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
