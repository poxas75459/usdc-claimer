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
    "WH2QJ5oKiPdePgi8QPUGHEM3NauKQHP9t1EpEGSMcHob3sQaXDwDtaDvBewNRnAiCYyTstzdNZbYoVzSPstXTpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hkL9RpbyqM4fqChDpkB26qDXcix4VFmZPX2Gd6pkkHXPTrwf8E5hZpQbfypqMvrrh16G1zMm4KX8RoXjVyJgMJr",
  "key1": "4xrSy6cACesG3yztPULaUV2dvS5T8xDXoZeqGkzZfahLR22y2Vn2c1afAygA74ELrFaEBrhiGUJnDwgYuShrXyxW",
  "key2": "5bq71HGcNxwrbHRwspegaXsFiRBHqQw4Uj4PdNhobHLGMEr7WvT4KyFoByVKiPCQjoeWuqw2qwkQxb1QPfgB9v7N",
  "key3": "5TbugekMJPKsHDTpx9eLN4ZZ7ifYGQfZD59bWjWoP86HwgLPwCux6idUNJPi2JpfzXAAwLWQMPhLxMRv23L52oyu",
  "key4": "2NW9vgd9SaAyCn7mxeFKNucrKJF2m9u5fpGFagzhn4siJuUQg99z7BNBC9qLafPozDHbEhhPgHVhN4ZSosawHuTs",
  "key5": "yomwF97T7EHy8U4Yfy65DtnmaEpVGZVxiS83xKe1fxsD3KiRWzb13RfKYXdSY8MR9Un8JXJPU4dXkfyyAYU6DG8",
  "key6": "pr9mU3MBwbwVZfXtDtKdgxD83NhFr3nNCch3TvwUH5ZezA8iqgWe3Lg7RnZdzsUvYbxzcbW2UqFiqwcuTEKLqFD",
  "key7": "41JDg7CyYnYAdvrKMmVCmiRZV4jAK4FffMa1jBQ4JJwnxqpk1ACNFXFJDRXZaSz6SQduen4tEw27bv442G8QS37M",
  "key8": "4k7q3Kb8JNBcbPhjJCWcHsKMHyNkLvHvDR2gs2XJuhn2s3ceAfFKWiGc8cneRL9X1hBHjA9EozHfr2957tdmxTS2",
  "key9": "5JPLwzcajws8v7iohMoCamdAtxcuye1oJ8cv4ebpJXTaM4EPkdeD5RJPNmFeuKJJ8ib8qpJ2mr2E1dhEAd2nhW3e",
  "key10": "XEnrFFeEpZiXgiuRTMLFi9149N6tFuendtPfBMrNApzFg5tkJCyVXJAGqagSPYFiNb1t511KgyDkEvaVLW8GrgA",
  "key11": "3ee21BVQxjdRFygVRHDtCYqMiuuWyimpzSC1jvNmrUeLnvK71prrTkSiBPqAiTEsFT1UzNCk5xbRQzHUmg5C8XMb",
  "key12": "GkttfLA8KrTiuNQKbASH8J6HEyiM5iCEGK6JGT2BaUCbBkBeHjd4c6TURpJZZiCN9q2EjfqvR2wZz4V1dXAAuUH",
  "key13": "341wiiUQZW1iGBcpRoPsethfpf5FyMkaHsjfJ7dhJYhgG5JkJg8uzrPUci2q4uYEU1jXYNDKtcMEkDtQBgUgrJaq",
  "key14": "3BhRM2MC4BsrGaHRq1eZeCfmZv79Et8D9WUJRrsuDWcZYpNtCXt5u2rzgiQ9Fo7J4f8aeXTE6Ssy4oeAZHbcSU4n",
  "key15": "5WnngLZFwmgeHuTuyVmA8WfxxAiUGKazB8Tuoi64US5cv6bVFgAhCkBMGhN3ScxJGtQ4FhaF24BnUx92cCf3bTRG",
  "key16": "2SF5UTsZb8sbM8cmXbGCHuTfgJvBYwgG5MxyNmoNujQdsPGrC3TsHrYu3Xx5qEaRfvgBDPzY4P9b9M5HSRRZL46N",
  "key17": "37YfErYApag2vfhxhCvazyZTmL1eVBb5Payz7xHTF2yQ58iyA2xutJibkEVG2tAuagXC4KELVAZpWdJrAKjVh7z8",
  "key18": "3ZjpQNrczg91VXHzvi2bZuJ2Ee9eMMMzyXwG1uDwevo7RMQikXUzUNTfHrqv1GK2Ch5MMwnkKskELvouLuLY66e8",
  "key19": "52Sd5p7ss8JkEdfpbvWHiRgV6v5qFXs3e6uXR3AVAJKkcbKf4EG3zdEbE1zpxsfxah1Gov2eLQYgiCSQ2Zid1kBc",
  "key20": "3UKTcU9ii6iaSfpJ7BsP8jdtFrGByAvgqf5NKww7vEDGtEDphZmDcGgGUZDn13dg4ka7VTwz8uwyR3jeQbvDR4T2",
  "key21": "3NetmN2icrxo36kcoa68ZtF3Vyq3WLtDkANgNZwFczGQWVWDs7ccdvnDgrZKZ6d5FfdUpCQzB5C2LDshVPamsRXT",
  "key22": "cNcUExgiXPuaxvdzmnA4FJrnYFyryHU8VvqHk8KjEpkZACi8bVJoPpyLJ42i2jJtxhVXEME3P7t8RwhNjTjvhY2",
  "key23": "5xMNQs6go3Twp18Aq55QLRtBUyPtMHVRWkGq73ZNYMZNZdxGmTUCrTr77yxPR2NoeqzsizSwkQsSpzThF3KBrZhv",
  "key24": "37gDjt8eCj1oM8J3Y36cg9PgczyZzbL1YzqNY6hZJgC4UDf8LcfrmczETLdud2YgRQTWjpYnc2vkg6FrovojkkvM",
  "key25": "4pLYpoqQvEzuWGiL4YSmkJoAdu5zN57BvHwKX9tmmsbBRw18FtvWjSe1kFABGGfnyHXZwADazrV7UxJxLZaQJmnL",
  "key26": "3zyrwESfYH9zNTACye2S4Q6uZZhuscu2iiqvmSYNU2JvjWsisLv2X57muBrcqjPQXQ1HYZX6UNw8ZEWZZSYdfcoV",
  "key27": "dx4uGWrxKZ2dZULQFifKUzCjodmjz6QQZ52jMuuz8HJXq7GDsGQmL4XVu8TRGPpiSjkMbnmTrUxuKPdwFZ19kBB",
  "key28": "5UjX8zPd1SkXvwJnMr4x6NXQuPStd53sYy1rA2cGE5enSz9jwrXQdJnoYSmiY2hBcbDw45ZdXb82GT8LiqYfparC",
  "key29": "2PzprGp3D6j55DBVMbcBK6JTxqzjfcqoqKJsrF3Pe27Md5Qukp3omQqjPUJXZYHAJpwuByxrr2TmW14Weq8xWUQA",
  "key30": "318YofR17VjjFVx1cDbezNdJehjtcyJFCiFqC2GHs9qbkwA82bs7y2EYQQSUk3ttWETC3y9oUXqUGdNatUdeE4Ne",
  "key31": "82p652jwoGbWDCshsZqmLELofg8Ppedp1tVgW6sScEzoSwgir8bHrEvPNS684GBgAT9aqsNDFLHxsLAHvkYbmE2",
  "key32": "415B162GmxaYEHr1Bp9abgTjYvGrz47R4JXwPZkRuH1WDGMs2EiEjLf7YCK2rQFaiqjtKETqPW8EgrAFRgHyfzdH",
  "key33": "2VbXKT3ZSeACbYxRv7V2yjLDm3rNqn1Bi5PcZn3QVa9A32vESszwwx4YoYYpy6mAYWojhR1e55pswnDaPFTtoRgK",
  "key34": "4sGrSKstmaDncfkEZEjjYujPUSCWepKUJy8Vu3dThJznE8jgKhXaojmJxvbWhsML8BzEBUj3d17o3Arnqwfn2X3k",
  "key35": "4SeotfCvZLq6oDa8f5bL2vJU5mquTRSwJymunM7J2uproBciY5HUHadBHbyQF3cf1zFuvuSUqwKG3nGcitW2YgcC",
  "key36": "4sxet9UPqiPLSBC4FAUPK88rGpu4whFj81SeQSA5Xs2TugR7tLJURYPoJxakzswUtVRPds8HRH9sKQidHyHiG94U",
  "key37": "2wbVjbv3cJoMJFGPkWDZg9HnLjNVqq9e6x9HaALEVofL1wMLFqW9Nq8XsTk9S6bk45STgDkEEMAfVv96XTXTYh9j",
  "key38": "25EDQqL7vH6CG7TNBhbxghVgWh354udBpvuyakttzHiNYwNSRsPh9U3SaQtM8RysTW4SJqiamfFHKRxneF7mpzra",
  "key39": "5i6aqMVeZz7nMTKW6QDqphTiNQUoYrKAgEyKR8LH5rix78mJLyFkZqroiEXT8BavjQo467uipiJiuycThf5Fw2Fu",
  "key40": "1yPdxFjtMzurqDWNGE6eHWcrEZP3QkWNaLpYWPUP9kPWjWPLPGCkRU1BYz9BzuVTh83krgY6nZukGtMUfpwvizS",
  "key41": "2usktS2DePnEk8ivdhMMNqZzmiozeBP5kPjpzoB1LNrkdqRmBkDtBWDFZDQVs32qSwouw7uqboVzsYvsD919kmmv"
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
