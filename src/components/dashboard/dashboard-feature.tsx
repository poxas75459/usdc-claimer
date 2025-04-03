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
    "g2RSxcJhFEEFZhQn6ssiKmcRhgtfA4vLndRKsGZ1NKu4cnTBScdE5PHrBr3QU5AeS2qZgS5r2wpFVa5yNTDwDKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NjvPSQfQVfykn5RbCw3ZaUqdW7Lgu7Pv1f2h2W1KkuNETXSuAFJeRmTi2SQsC5eucVACDHCo1Tc8BNACz8LYBuZ",
  "key1": "3BwBxCvHFMdWUujMuJHrJRQXcbemQTfz8nDpqw35ReGeeTt43aUsdqU5SnFnLr3DMzTJ5q3jsstzfbx8eAtK8Evf",
  "key2": "5zBVXgXFimgqQUSn9PmEGjnkTDzsEGfEpEzvNk9w6682bKCStYRC2pqFwmaGPTny3jDmaARzXqL6T3f37Me63oKS",
  "key3": "2ijxMa7FFJ9TEFNr2jRWRDAZhsgcBXcjKDGZskcGiLj5TWeaopfT55wAKNUCJC5knxu4YnCUeSBBMLhev1b4BCzE",
  "key4": "wUfmsCUTd8W4UVQdUqfknvPrGr3rAkBX8dsKRfSUQd82oHMDpbgeCveEyKQ2LKcNkZvY45qjoTPW86PjENqSx1Q",
  "key5": "tGGHGhkovvHZ5JgtASxGfp4gDuPHbSW8rh2dg6fWGpB3NdojqMKyvvg6EUSMxWbsJBsJBd16NYHsp9QgAzghzwL",
  "key6": "487mHcPbZo6YJZQPS64JvScpghHfentjt983z12f7MntPjTvzUEqC1j1sV5pyj9LoxyonukQ6ob2PR7J1BjE8ntq",
  "key7": "3hEgkMLuPRUhtfGzVAmg4JtGvqqroEZBaAxfypAWFqRsvTviF2asSeUauTNPVqZf9SugQehRq9wVyoLLUWL9XD8B",
  "key8": "32H57tmpunTp3BGL4HUUxaHfEUyvUA1SFD3cs7xLkASPTyryVVXAN3RrDm4cyuaqxBNU71vimMBLc7N5MX3vTrCG",
  "key9": "KTHEjzpsazvmmrosT8XaBaefezEbH488xM5MA836q597hqtD47LcHDyYyN7hBbhUr6V2HEjsefhSwe8s4VrHxLp",
  "key10": "3FRGwo6YKZJzdA3HUGxLPSzcyp6saktJVzBQdSBMkdg4LnJgF8amyiqX3rKL7xwEEoYFe1WFcCYhk7QphpyeqGfn",
  "key11": "5D6xcJTf4jqjGGMpGE7QJWGVmmev6yyQqAezFjKamrTZ7KZtC6WKXShLBkyGbDSdtghWpfi7LDyF1k2cdXfPhp6J",
  "key12": "5c42hJEzrffLGZpR6BFk6dbiphbRkNszzmoWpUwChacinehv5basHpXvFemNxiT8bUYjDT83sDLzRgVqmqCRruzA",
  "key13": "58jrhmXBm8bC7uR3E7aYW1fbbSGFuAbHXKQWaNNPqapRJWzWXFXXWvqaEhQA5B7hkkQsXxqHqh7smYMcbdCM7fia",
  "key14": "5dEdtPsHrx3LNRkk721VtFiiGiRWDgeZPchRMQL3JmcVtwtazrqcLvcE4116bDj8ZBqpoXiYjAP1h6LkitQWzCXL",
  "key15": "QhuLG9RbsEcuMpGGRixJVy4u4XMzZFeZr1cqrzGqHP8fDPq36kbdwQrfzxyWpoyJkisoT8eweAHmbGFZPeFMcBD",
  "key16": "25SAEmbWrHRm2iCFJHh7hG88vHPzn888XbNAPNcwuVC6A22wLZaj6RxsdHFyDRpey2ZJPnb291mahkDXc52cQYb5",
  "key17": "4QUcaXsuWKRnatAD2d4RBiBo6KNgfS9NhG1EE73nwahpwVz4PSLzu7H9BvFxQXaA6jZaDaYghWoDZ1HxrYh7YJtZ",
  "key18": "4yvHCYKmgB4fUZbvNbFoY8NkqVnjF8QcVBuHY3DyAH4mwR6HFPJcsgq9qu6QMU4iRcWKpyAdonFSLerA9byyxix8",
  "key19": "38jW91NaMJ94Zo9EBEKcMufojLJebREtsEw4ZAENr5UrFsmT3T5GuZcKYFiizRVr6BekQxCzhnGcb67H7qbyVdaw",
  "key20": "4ihkjNMwaE83Lo1sWQJHUN5rFHcAWjKtupdxUHU1XKQ2Ra9VpxRCkgy1bFapt62Lsn3fpBSnT8Z3bMSBx8Etbq82",
  "key21": "2h5rKMhr2ChySP5rAztGiQBDkyGsrfqqVoB6hwFbbCMxBCSFQH1k3n4oFy78cD4K5qpEsAdJEgoGemsLbRoU6fLL",
  "key22": "4SyUD1H7Vx8x9PpWEUcJF7McCiBJB268wVBzAjiwNjFF6r5EjwJCqCgTx9FDwZCVJeA6s6J15CmdevGekYNHmHN4",
  "key23": "5UL1uTUKbaZkTRhyowho3wJwXQTQMbY7Uv9AUVsPkoRQU9JbxRxV9XHHnySSuJQCxHSunnE79qZs5JLSVGAi8tKd",
  "key24": "3AQHkHVAMECSHnHMwMLFNFdYUDxqXGc6p8cd8WZBHudhvV8C81zw6nSqQttg2LhatF5rdywUwDgiMuwAbfRqtrXU",
  "key25": "3HDUXiWoFBgQySANwQvLNnxAtc8w7yS3qHMm8LEXVVVimCWanLPh3pv9junRTfKkMTc9PzswT2fXYfnSN2wpvvDR",
  "key26": "7dupvR1DohbCYoQdGuVQ1ADeQEJGdBGwyBpzMhLU4yCqCgM335hMEZAdf1pAgpLS3jnnGxJee3SyC6hQ8KhTH2U",
  "key27": "sGAzAEnbAu6zN5psX8yrPV7v7gSKiD6wMnndttyADsd5kdntYL9kGH5RPmathL8bUTYj6Lrw7c8ecZzLtCpUfAJ",
  "key28": "5a6UFmatc2uSNRTY9kkZjj5bgEPDzVegmzRMkt5FCoCBjzERMdLaZdBy99gsdDXkeXEmsuiMdp6xYHAbc37W1ea1",
  "key29": "5KRZrXWQr6SoCLPigBrYnHgi4FCuYFE62W9ZC3vCGAxZCebMVEMyEiEedGsA6Zv6K2fjuzU6kPYxSQ9EnZcB6Lda",
  "key30": "5bx5ZE82pfgBsWMP4ePUzm8sGE42Ci3M8DZB8H8tZtbi5zTE4Td4UDhKpPrEdkbgxvcYtGnrULZmhaye9Fz5TaA3",
  "key31": "5gyxEmL2QzhjxuD3RS672ncJG4j7uvDVgzVbYgwS2zJncQfj71fz8QwNCwr4nMrbpRyeYLcK59U6JstCkebDY9pJ",
  "key32": "4DKKwkDjGZYGMNVWNBaP3BY7DsCcFZeT8mwiCpk88aMAQeLETPd8uXdW51J72BEBz9YsaRcsUHnRW8WQtzRnUGd",
  "key33": "5DEGRiNAoZ5WSUvJpa6BR4uDM39y3YuFDfLLhZKfM1j3eiNMbqhLwviTs2phWrrk5DTnExe2DqoiWjem9CAEQ5sX",
  "key34": "bNkPbW1hbbz4iDKpgEvXpz5eunKh2pv2S9rh7KHepkkEyEP6jgSaTvk3cE72HRrqVnXiehQEY1RSo2cmJtqzoz5",
  "key35": "2rNjiMJ7HgJzFd7LdnWx2atjxms3m6AQbdqJ1kh83rippgoUGjWHHuDMFzHEzuBiZvLZx3rCfTnV7stzTXU1Ts8a",
  "key36": "38cXksFpnutv4NDNHcUynEV84wE19971WfR5rFZ24ysPRJdRHCWTy24VM5UbJ4tqzd73EkGyJTURUWRd7WqtHiSC",
  "key37": "3sJbghsk4MbBfC99HZFjremwGRw3ZvSy1aGwLAQaAC6VAFJuvdr4ZLuUgQA8CrFfL2ArxgZeKPYZ8DRP4bREbguN",
  "key38": "4SL3jxV1ckTuv7MqAhES3DLY3TE51Za6Qjn5CDo7CK2ZoMAbRXEjPTe5BWbaiMBwVqyTz4Ljhcb4mRLpLLxopiD4",
  "key39": "4RNxaafCqErUnSjDmq5RZ5FNQakE7ZCej5JNEBZcS1Z1mrKMXfUp8PDgag1P38PYLxQrr9S2eb27CFUYtVjPy1nq",
  "key40": "28FT4EgpcsBwATCKdh2d57xcfXdmFbkvHz2UiWHYnYekPzsKfkV6ExES8L7hrws5hXC2DuzZg2aez6pDL4rKZcug",
  "key41": "8jDsDbLCbGA34fEWGZoiouaEH8tokxNeAj5jXC1JbR5dq2eHJWuUT5ehrVgXjKsvEwmRprP5Q4kaZdbRUNDFD47",
  "key42": "LbfD9eMQVKMxHMM3uXSot1EdKHUGXtmpD6yan1GcN2ApGGZpUjWwSdmoHznA1v5hE5W1k9kgFhg9uGZgnJL3G3w",
  "key43": "vzhoSMx9fzPniVL9BtA8rnVcp2ouAdvW6eGTBMyCgwfRwDf3mdWv2d9Uho7WjwC9EcS3bPG3GyQuo3pSWBUHBjj",
  "key44": "33UNPRW2KP61tNBR9PPPVcoc9w1f6ujnhKPpZeJQ6dY7WjKotkWyVbfqrxMH7uVzV8daMCEKrzyNtKeyoGLVRD54",
  "key45": "49wULKJ5Q9nQYxMfFMFvAFze58TwPVAQx6ZQy1nsw8tqULWErE8AgZpPUq33DveEk7bz68xtQb5fmAaqT2HzVL2U",
  "key46": "43EhigbwNQUUirrwxnw3YsQdf3RagESjF3vY8Cph7vCRbc4pSQ9jgSpwKteNvBPLk1vb71wcRo5qHXYnct1xnSn3",
  "key47": "4vz4myMxNu4jb2vz9KPDiPNCsdCJhfprMbxSoLHLpdCx1Lka4KQm9EdWgtnd45ectuvpf7kxMvHsfMuaFXKGo2DK",
  "key48": "4xYNc4ywuoA3vu7rYZGWB97SBRCZWGDArQwzixoN1vXrpiSoCKgtuHyDpBPpssJiaRHodv1t2MKZz1jTSuD4kmaU"
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
