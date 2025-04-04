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
    "3LywP725jhu5ZCAeE2A3cEqHforzg5UoW7cRjQsYnJT7UvvQjkHpdmQi44gbKxGtSnfHPUzADxofMXfeVK8ijiY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L6bboV37wpMxkdxHkNmJ9vHuNVyKvPaPmiobAZ5KLupiyVfCABKAeMU6wY2BiKTXhnLLjbiHvw4EKb23xd8RiUP",
  "key1": "3yf7Hjrsgzt98ExPpXUCuvFR6oQsTgQuYXnEyuT8bpqGtefQzTCsWtahU1fH2burU9WU2PRCH8ai2ghP794Pb39o",
  "key2": "5eJkYRYzQWXiwQyYbjDUCrgk58r4NPuKoAnVgvVPdvjAvjELybSq2qWzq2PRBV4fcuSmXKZZuMfCgLaLwrBLkFk",
  "key3": "2arPDfz3qSKeP9iagwinsUttBLMw2NGMcdb3Cd5rkB7cR7LdC52VcKiWH2rgkBgUAioYKhs4HoszWqCKV5HTq73v",
  "key4": "2GMy4REQo7Za73XoYWk3wQNoA2m9zLrLrUuH3HRtMaa646R34u9VfcybXCoTLfVoc8WcN1mdNq7pNrZNdrZXVgvU",
  "key5": "4iEAava7fB28nj7L4jqsuxzT32UddBpSM6L4TWjrmNZbzTmx7RUQkguct4SBx3y1Kx5q88Dut1kVRfAhNo4e3EbX",
  "key6": "4Fawc3boRVyMHuSQiK9mtCQFpT98MQS9Hdu1HhdVNZW2Mg5h6v3uHfruL77TTwipo1Gxtkjj2gWZT5YTUDCtcZR8",
  "key7": "3qD9z4bqx2o52jVreByb7dcprZESsB6Mxq5wHQJhzRne87ihg4CBkQBTKHjnzWDmy1Ltorb6WmBJVz1ygKNHEzzd",
  "key8": "4L7rDxC1w57m6szps8pXcqekuhsNWHMG8WhVuK6uHacZ6276AfC7Mp8sXyPtaW21X65YheWRy5CeCPD97UxM4Qgr",
  "key9": "4ntTMr9kQCVjG7ktFBzTZ5X1ZiXF7BLD9gckkKeQYSppa6WDdyNWDkczQYnJUR9U8Zps5fBGdNJVBiyvuaAUXjSu",
  "key10": "5kDdHoLdYPtMgL8eZeqZPhMziqN6Ho4owqXPKeF6KXKQkx6uverw8qJSP9aoDNV19d94cxb52SQq5TBEvFNcVEKb",
  "key11": "48Ec71U69MsRrruYYHA45CHKQGx3BvSnp1QwCaQyvQ9YyghpGQVQP1fU3aLDyhC2SrGfRC4R6Zx6DeEUdbdKKqir",
  "key12": "5FrM3ydG3Zj5Ju6DTzGYf9LtdLC2UD3NsAumq464iAniyAKnnnzo7MYK4Ugcc2mgVFiLBpjfhcmbmCmFGf6cRi4J",
  "key13": "4RsMvrQRTLWEm6rwWKAYtB6fiTfYYWdx1CTnvw1Rtu3U2fHHJy2NQC4uQB9iqkbj8B1nFQCzxvLFgTWStvcUqJ3j",
  "key14": "2ykQ7qM1td6Mw8bsJGPjzN4kkKnzPVyRGYsooxHnNGGoyRYPPHVMJV6DczggzMDM8y4vZBYJL5PQyjg8dHQV8LE8",
  "key15": "5cVW7h12xzozKYU4csRiZwn5QcNoqJ3dKbtyK4mhduyVYkXgaKNLSYsbN8kaJwZFxTFNtZeVybS4qNXRteGCVBxM",
  "key16": "3kWi2Sc82yjn8PotVnFNpY4rmj2DH5d9zpHFtAi12taREHCGp8AmgdV9VX9cXWr3UhEhGkRVpPmbf6g8FtJFnjyA",
  "key17": "2dMU53Zr5YSsd4hpNXuKi5k4NFr1eHXv7cWmycsRPbWdVcG5M8LrfccYauPCTN1PMxW7yDmULksuNcjc8Uj5AoRt",
  "key18": "3hD9RSd5qdsCdKoVGzwiihTmnaVR5kr6SXuzhEqopMwHzKtsTrU8Snhy3JCZdBfQBXSa9ZGegWZZ63t78qQfEJyg",
  "key19": "5kdTYpbLdBrMyqkPYdgBYUGJTMShSnRgVvFSZKhqKFGjQDEpojLrZE7UL9wGYchafRsSvxfFaXtK2coxauv26evG",
  "key20": "k5g8Yva9ZJfPmNv3XddR722ZDEB3E9LSqGRseDbjjnhSshLjRVEfuRvCnLr3L5skd7VE86MsU3oTPEgYSZYtVy3",
  "key21": "5omDqFa2x6hQDTvWzL9uP79fkrdU6Hj1s3g22Erjy6Buc27vhE3aBWCyQdWHkmvVQzjpWqVG9WtPvEWGFvbQTjxi",
  "key22": "QeobYEJakC8x3u6sHRAtBp4mQvqfyvz8ZbPoyKP2SR9mEiRfguG3H1sPaF7ZtAWkvXMJn1s6Dux5K3Jgsy7guQe",
  "key23": "3fiM4N3eQHpzRkP6fpfd51KGhu6ChJzn2nA4ZiF1mhvmWU4F4Zd9Zo6s1B63dfcqBopaEDAyceo6kiefMxXBhWdA",
  "key24": "RbwihXA39kq5UcVHYcK9Cw9TQYu3wKWEZ17U1j8KEjMpfi7EvD1ZSU2YXRLmXe1BjV79avQs5CLpWZuX6MyHZQ7",
  "key25": "2tzqoEJS7u61AMuuoPQwCQBXxdqru8xUbAZrXkqNeZavSWta8r7sKTbAWTcS68W9ccL4psw3RqfRTaUeXr3XXxDU",
  "key26": "9qKcuoqBjUGkWTAcJY9isz5typsj5EwPzfddqRCcBzqK3eXeoWhuKkCtKBnZwUDkXTgHXuhLmV2Qx2sgb1BWmQK",
  "key27": "2FohGmsHHe3HKu5ZhDiZDLm7DbVzn76A6GgNwondHa6u4AZrNfyaHNg9SQZLcqEQreWso9wDgkZVbwbyzkjYyYh1",
  "key28": "4YjZLbXiNjPeNBrKz6kdGKWajRHjU6qhaVfkZWpnF5ZiGq2gFQxcZicuWh44Sv5jXppCENP2te185ba5pwn63bj9",
  "key29": "37kJxJFSP6bCygG8Vk41ptCpHNoxiaUCJ8vifD55CXwDCFbRvWZUEd72Hq9Lfc7CthsLja2iFjnvFLbTpezZQtsJ",
  "key30": "41VjspkoX4o8FFDvJgJcwKcm2ANjeiHHvf5mc7AWXi7YE96muNLsEgHRSfaxsBiWAQxPLsEn2aoQQ6Fn25hprYkP",
  "key31": "Rmk7zqoWosisAyiboa94D9zYJjUBVwZosBbjcQHHDn6krWmCGHA9TpG3CKakpqZHCig1oaFmEJy3zpMLTrApUwz",
  "key32": "2Fuwyc5kyxhd1uY831y6Dv7rn51suJkxSTequuQ1JBGuf6DrBkhTQimnCHs2QAiJtx1A7Nd67qDQpgaYCQopfown",
  "key33": "2WkEqQTQVyNC8jDW8kLCDPqsd1d1fDmCYKRzc2f5vRL3cj2mkQzf1BgwZTfhT95f18zpLpz7DdqN8BAve1weLKGm",
  "key34": "tLVUYkso6gJHPsXaMWGiqZ1VDaqdk2u1k17YmmSkQf413CmxNDhEdMe6YsHHzVRqLwp6XZZk9gJDCAU8pFMJ9J5",
  "key35": "38G4NgAhwyLNxf8Xxdc7DKvLtcu5LHa8szyqqTkk7hBy5RS24kfwKqc2wqxgurEgJj3y7jTWHqsXRgiQ86L4RWaK",
  "key36": "2g28hqZ6bhppMRavFyPPbxB7UZJaSa2a4iMs6j94ffWK8J9cELY2tmyYAeGv4diteZ2VZkHfViaMomfxKB58dH5E",
  "key37": "2GZwruMVQDkzCLiL7mRn9xL9fa1Dwm8ScuHj8v88BoX2TLW7LXxF7jbWD9tn1Mt9bLgyVEfYQ86w6AZw7fVsbziy",
  "key38": "5NuVK5YmpEJZwkbyLjwuDPGdiV3RpAUV1hKjmQajrm3jYDWdgXZWxtyxozkGX1ta1xgjUcCeMgSUJvSj2GhKauVp",
  "key39": "4FhTUjab7WXXrY2v3SrbaXvETCE19QCgMy3yPW1MzwdNsAsbHjxaDNwSYRCy3D3mb4sjmat593Mt8Z9UY2hMFCb9",
  "key40": "5977uwqaVXNjM4DwS1ASpvk13oQp7DfbMUJogUs3UVPZskt4YxrS9ZGfVQHTpnnyqzCDuc26kxnEpZxZKNaJG5qL",
  "key41": "4nFdam8TJj37ptzea39Vo4vfLsv62aGqtTcSMciUNpAAVktBYJaUKDTyxDJX9JMhKr91MhnwiytM9Qadq7Z6KPUd",
  "key42": "5zfwuUhDNXWjkJESHJeh7sZiT4scgeb8xqSUyAZsJ4D4WiZUgrVtWYs5q4vCKnBLBwiL9sZNoVXRVdtPYYAm5zgz",
  "key43": "hu6asxisG3LF4b8rHqbjBRiaRibJete3gKuNnmndRVazyVbfJzvZch2R7bcLMvzpd52MFRcZQvYfWqtUg91nArV",
  "key44": "3uhC6N5ewKHaRnvcD9vC3QJeJ9nKC55wJN4FkjWis3DbCBqXvAr3yWLoTQuLEvsVhYiHZLEUew4vN8tYDb1uGJpN",
  "key45": "3dsU9PuUo6wHHoPLt6ZTdAHHpb6s2yHJ4ezafc2D4srTR9yeJMPSWCzgmL6iXWmAh3TrkorhxNsNhHqszG2kYvuD",
  "key46": "Gnw4tJBdWwAJEudj8Rim5XRihweQgFK7eYkRx2aE2648Gr9ot1SSi8u7smxPDE4Vi55xQsTo1jgR7Hz3u9ebooK",
  "key47": "3hdE7QrpKfbk7TC4zywkxsmhy3ZGpwDqw6w48GfuVouuEGZokpmVU4HM3UggghFUJJLz1HP4Lipkk3Yt7hr16LqE",
  "key48": "5C8G7N66b6bwNz443Z7CthQVfaxoUB8oNiiW6nuCrydaqREf2vSmLXgiBpXfwWzYqtB4SE7s6iqHr7nnGF3pdFBt"
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
