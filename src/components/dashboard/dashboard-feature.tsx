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
    "5iw67VuMTJeh2iWzyCeXkGJ3GxkmMSkiZRvbXmtBu8JGRVUQwdFWeCjsviSs3wQDLUZuZwKN8RgmxTrtJEgQMxrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yeM9FDTGSMq68ihL9w2qbUMYKVLVefJcMW7Z2ni7t54hSvHb9JYX8vHTQrXmK26B3oAcov7RBkbR7Ya2q3j9vVH",
  "key1": "AYeoJNumLZJxoLPtMAfmfrdkYUcGSpfdv7eMyi9P1RChNLiznfu3gct5bd5hbNndastzG4NFt4dmvJX31AVwqGE",
  "key2": "2ejQzjbfpg7VKE49myfwHBEFxRFo7VGtcLwVoAf9Ny6X41pVxfbjtAnSuc4TEGyfCgNPomjVfKuGZ2rvczA8LZat",
  "key3": "5wh18F86S9AJVo1dwEwbw3X8oNvokEhu9hgdQfpdi5NmLrpm6mfegJRaMzmcxUwzc7qMALe8T2aNk8FT5nF3FKKq",
  "key4": "Kv2wPwNe4e9qk3oMtHvVqPmxFgxP5reyZve4XLA75a2sTTBJxvE5QXDiKzFNncfPY4LC8AM8ji6djxheQDvQeMy",
  "key5": "5CQjr81rayMwuPjCCm4EZGYecPq2KoZQMxDQXEHqrE5TniMHcdtsvup2XpMrKY5CstC1BGpMBeMkkcVVUnht6UFR",
  "key6": "2T1QPqw65T9Dq9mFFn3tAzTWhFE1tmSkdSsZh6eM1sJkSYaWZy657bzgrbQFbuPiKouQypmiH1AbNpiZRgfyvwwd",
  "key7": "2jg2PH5zyV43uAd54QGpevoHeNVMGKZDWX3CTkDwek9rBgbAbKz2WPArWt1W98mr111eKBGPZh7gQ9MZjjhftFe2",
  "key8": "2hx4VE1L685c35FmCuSdXHXJ3Cwp6weYes9vzqsDnETYH2yeax6qV6aFou6kspE61M5xRs9reJvtG4RsoQmdtG4f",
  "key9": "ShW3hoGEpwZSvofsQ7QePZaPy8LTrTkPbYX8KLh1uSiwYb89XWqbPsCgjTi8FVkUs5pXc3rUEY6HFLqnAWhULAo",
  "key10": "nE6uSA3BDyqsFnL2Hb2XYuK8uwk5s7ji517n5syRHUiz1YRvnwyjAFGJEmJEbHQz8xwBPB5spZ4NH8EC4jVoTWD",
  "key11": "5BfsEXpgFLvmGJ7hVUUKhTKAs81xuwGpZCqkFGqyHBFRLxxpMVbCh7YGV1ooSzz8FkRqaDGuYPJqf8ebn7kJH1pn",
  "key12": "2MvN2SoKqSiYSjV3q5VniYdpkBihHqRSver22BbuKAuY9StfjNAzU6k7EwesXpHuYDiSTA2xPbKRgSqHdqa9qFhz",
  "key13": "4Np9bLUwrm4QJLXkqoUr1HPgE7GzRkJqMTbo1v6JWKkCrgqo1jLF7K2QbBeWihoJLEo9ezGCBu4avH3PHqEtdtkf",
  "key14": "3rWj1Se83ZrYh3AZUP9tuVM9Ep6pJB2mYR8KnN8Khof8vSVxvt6HLd6D8fnbkcESTsmpKDANEpe7vthrgn1WKGpZ",
  "key15": "7fzX7HusLiG7xjtATUfHUh9FjFAgQsDLJnCxSuKChdrWo41tsz7hH5nheg1xUhHB5VdHP7fEWFBbSSTbdCCLnih",
  "key16": "6538gkizJBi8wu7EdtF5D1uN3PwGaK8uYoMRobsFhHqV5czQY6bt8g5dVVXK5BSv73MDyVXnJrQHm1K4TmYNgmy",
  "key17": "4Nb9MjTEzQjGi7y1SP5ZMFoBiKuRo36WNzcttL5q8awEpSpepRYpvnQML5hs8QDd1kZSebnEwWwq8NQkh1ttsqhk",
  "key18": "SM9i9WT73p1waUUixPosDR2eGwzv5an6WYxjkv3RfVz47XKwWeLVjS911eWg2LZVoayguQMbLusF5nJ9uZmbh1A",
  "key19": "4LEGJ39jWLrKJg4QwEjnurfcGY5ZED1ECL7YuVzBPT9o4tTuuGJcDNb7vDMfZ34VKMkutnhk39pyzJMMPzrXzLk8",
  "key20": "3mm9MNyDwMRJ6a6VUmRkC32B3adZQDjsQBEnyWC63YG5vUAfo185cDVgkef7waFRG8ssNPbRLcBh1eoCaw9DWZ2s",
  "key21": "47y41AWvgk7VDHYrdCLe1u4FPf1c7eoL5bpcufhXeB3WF8AWSqrTZEKkCvMhN7qqG1mT8hDCsQBFnogXHq5gtGiW",
  "key22": "5GecoRbFCekueZkKQcHovGqv8xsptmaFRPsZ44fbMU8mJwJoL6C8QAM2TzjZyv3bmZc2E3cEXmouX6AsLJqgeFpa",
  "key23": "2ep5TnXj1BFidVPXuEfyYGfn19mZ1uBiRsnDFwUZ5JSyzts6fF7EksgRvswhHTz7DsnNFnZCvw6ZuaL4cGpHVt7T",
  "key24": "4GWBcyuJqjjpiEC7Ub9aUL3wty7MKwuoqCFXi4qLkfWMTbwiVsAnFRzvjgXBTZyFCKp68f2PAVQ4qsw5LpviZswZ",
  "key25": "3xhfghEjMFCLMkhrYRAPQxNcSryXZXWv8GeVedfVa7QogoeNKjbZdhSoqEvLLQiDwZeTD5ivCV4BVAVbF9t4RV5V",
  "key26": "3b8hJSxexRe5p8KQrviKE24Yt2n8uUzR1MbVBLKn5W45fsiebPXWQJ7jELsnPUTSeLKDEur4pQPomfwKW2sQBpWj",
  "key27": "2cfxc21iVYPK9WHjbxj11qfycvrrvcU5em62ESYwfRBU8jP71r2CDWyx9Xxry1azbDwYdxHw9sQBrVAoVhDbBuXC",
  "key28": "5tbLrrgSpRF6cB5KKqwPoZwZPwStvK3nhJT1xnfctmubemHqNh86sBDJhnLawBhvQUtPchjbNvxKbNz1gBQSQ31E",
  "key29": "3oLMqorrJUenS1Fppy2FdJUxJsMdw8qsv7NQaybVjF6Yad3u7hLLopnBTcGD5QmDFSqwiWWijt5xXdHPpN7UB5mo",
  "key30": "2PDbLqrzJXeqDyFNkVmBpt9ensKKx6rbQ2GsD5296sAeT6qXcVPVz4QfLrme4fyHf7sceC99BBUCTw3Ft84tRiwn",
  "key31": "4k6u6zoFsAvtED4TyLwZqwkuJ32rMZ1CveW2KRR9v2XkichGKFEfuE5yQqgjn5CLXoVHybSqL31DraabpoSvVBiZ",
  "key32": "5cPvLrjXpVig3GDCMguJLss3BzkJruxzYAtKWTqcEmYATgtnTSW8dLwFPBqCjnmkpLGtiMVZsGcNV2JZBdtBotBs",
  "key33": "4q9kTRZrzoGip36eehwvYqkTvBF79ukvCHPgwdhftmEEJdGYVFJTayz5kPBM5EbHpPokQXSqGFV8HUPWMaarGdSz",
  "key34": "o8boeKkqfFtrPfzvfZas9wDLHwHvYU8Rw5AVh3vVRo6TTGMmnbEN4ZhKYDGZRoYS9r4mKigx1MrAX2jJZyYLFCP",
  "key35": "2t8UHxAp9dtnkWWGkE9PW7JkLmxgGuEnq4tg4waYzU8x5HchcdyTh3rsTRS4tr8qByuWJXPs2xDPjx9eKnKVJUUj",
  "key36": "XwaENqGfpVe1rnKk4NHFsR1iAHsWvxQ8KxSuNPQBzg5qLysvBPyKuRR22WP3Z3k9pT7z8rXKsUH82boZo347BUd",
  "key37": "5q4VA9h6KGtxsWbpYouyt5vbopUfDrSGhD6ir7kt9vaerZPVm5Lq8TEg65o791xe9ZCB7McpHcCWy4vR5uDEY1Qb",
  "key38": "5DgFugmkTRowqhQffWJMK8Q3UnK2k5Cw1euqKeHrhZohAXCJUtbAJcX7mzgNc4LxveMyhEQhnB9Mudc8UiAM3jWT",
  "key39": "HDi6z4WgtFAA9hgaYmdhUw85tPrLsiZn5uzr8PXqtoPqCnYdxPKnqBAi8xnVnYiVwPwmn1cHwC77sdNit3pB66R",
  "key40": "4fKx2iXBpR2yLUh9UZQRF6Ystx3TFR1Z1A4uVH88vYSK7F7hCgScJ2HdkxNxhRGWGUBg7HzvNfo9JRmhkJZq1pBM",
  "key41": "r7czHUpPZiCF52Fe7PTvbs2TTbRdoTYWh3nW2sfXvNbJfo6D3vvmNwmjgVzEZSguU7Wn41xzneMJ1nKAU1nHsB6",
  "key42": "2URQpY2GkjcyVkDb5cXV8Jh5Z9WWVkPyC1S9gG4yRhhj8Wnur3CDBwmoxYhvXbsGoHorkUMx8bHsw6kHwf7woQsP",
  "key43": "54dvwxxLAdtjHLCqZ5xvqiutUkLPJixuvACGG1aX5JzTaskxQRbigavZKkSRHeT9MQzNoRFGhgc9ipSPTRQT5fTP",
  "key44": "2UTuBwwK1N7dbo2b5i2t9GzitgbCx93t8Q9XR7UfDvtHyouuMhYhfRnV8y8RCkKDqozh8KUQMvEgsEFck8mnVrrt",
  "key45": "3QSHr34VYden9uY56TqvVPyLxtWADdg2VH2sTHXuQwK5TSJg3dDaKnHsn4fhkuWzaRZM1GEv9eNVuzw2itq5aLpJ"
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
