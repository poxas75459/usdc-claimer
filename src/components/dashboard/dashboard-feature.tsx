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
    "3N9iVpRBV5AuRD13h3VTbCrFSJiQDALLNrbAKfPrHqPo8u98eyRUHSRBEfnqKYQVLQMmEwtCA7Th41YmBkWoGC2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MwLtnPofru6btApt9xorGobGshrwMYPja2s6X7eksvrCHJdCFuNXfWu7JPaH7ATCCnqL6goxWEW4LBVooXtqBZu",
  "key1": "amX5uKHzuWTxchMsyXfxaLoLM52NmmgEtumEmfpyjAo6JAbEthKKExV2fQ32eEVD3XJWszt6dG6Cq1XLjC1updJ",
  "key2": "XGqhvhzBE793RArNHw1NJuNkSdecPr5VQ6799mVQUyBDv1qCxfSjqUrm3LonxWLD6hS2WXvLQDaqfPfauSonyCB",
  "key3": "2mD3ZdvpHaDpo7tDPJw7wSGVN8BcMYNCodaq4gEneyyY5bFk78FECvw9Bbc1dvWZREV4ceBwfCMKGbLHm6bR6eNV",
  "key4": "3Tg9cGKRLHJeThMPX2GXBy6q6TtyLCuz7t5kGLj6w9pP1pXckGfCyMUvLfnLtRehuCg6PfnAugPndiHbwxP8xBd4",
  "key5": "3S4YTpFEjePkgiR6x8nniNMtQsU76ZuepRyc1U8fbHRkYkz5eBupevmdTwXzhhHLtDbwvWF2GKHQHD9t6tKaTkMB",
  "key6": "4DNoasHaTGVtDhPAi15CmmidopLmEZ5Um2vTC5SYVW5EVacgcn5sxqRnfLgbiXbnkGXLbCgoMpzHaSPX24ZpsY8F",
  "key7": "4DiB18YigSKMia6S6Cd7F6Wg4yiABKQtAQmgCD4muM56KNErHniRMYzPqpnWw6vG5a7w7Y3BwcKR8qFrPCSK9zzt",
  "key8": "34dethAMy8m21SwcCY8CdGUBcAAmEBtm9E9rkEfe8t8hkDct6v6jhv3tMCJpJ4KeqQN7wbytngPka29dZeQ33zfX",
  "key9": "3BkJz9dqjamRhPptPu74V9LmhWDYY3xz6bYHQuAbMM1isR93bf9ocYZzHvvYr7otZAKRK5gxey6bmU5BcdXGTQPD",
  "key10": "4DF8VSXR5QcoaqNhv1B6S71mZmPLYpRxMbo91Adp6MkprNAgb1xgmqwneFQDrxGTXjhZ4Wt5aEYpsNaRSf84kpwd",
  "key11": "67Wz3Q2yJCeq9gWUF3v1HvzrCtFimt3Ske32BcqnLXxzJoaMY2xv6hMJdaXzhqUYj7ZosuKgWqaFsLqv9vJ81ngw",
  "key12": "5YtF2xiLKBuWbYatyWaC4SAYYYSqP3dzaFL8N9CiT9cBphEErF531EgHqrFxFBRMpv3Rgn4NmMcTubFu3VXgk9xb",
  "key13": "5tA65cX46VTdsAmWsZibbW4VrkmXGVRz9ZpmaBsA38gJPvrSrhrp1ukvSfR4PLMPFa4FXZHChWZCJQUZmALKq6JQ",
  "key14": "48hxmdsm8VsWgdkMuKRhFNZjfAfCdPmLXj2VtbMZTrwF1d3FJgDqjUnFS6CN9cHRMcpYJrayAk9GaPv3BFGmzKZ1",
  "key15": "4JcifmMYBMtsNoEMUTKgnHg57KYaNaztM4ZE8rWj9CJbWV6HSmLzNYaSRkeFzB9e7tcbdPRtQPL8yS4aWGgccskw",
  "key16": "3zLzPA5LUAJ8LgfiBxbSVbhKnpx3BV7GXa1PjzdoiiqjjXdsB7gSpnPkjo9bo2DfG5VkSogku2Q4XqwvX43begJA",
  "key17": "4PrpCTfuSUzyuA2Bco9uEKw5KL7riGzfZdsofXP2Eh8itsKakDyL4wc7paSMJzJhgNMFqd5oB9S4iDMX3dNGEEUn",
  "key18": "2qGkDAYVUUr4ZUT5JJMiX84u4m25uawgRAhtqFLskkMmbmRMi2UaQPzZEzwbwXgrAscm1EGga3MzSJB7r5c1gSfU",
  "key19": "45CNdRDjf3aG46Rk7t2qSvt5RqCzALytZFs3gvH9SGFvifprGbtCSUTwLyRmCdC2qePLYJLjY4Fjqvgd1U8dxGW6",
  "key20": "4M8tfoXs1jnCp8Td6ibwtkvc6hSRyc6DRP1oQKX7gPKpN3Sjr4iUn6ZPS8EsV1aagkwW9cBzwP4zc6DYSZxqitCk",
  "key21": "QkhNQyaLGSgWje386EWS5ZkE7y3oToyevnyuFvkdBNJ6DMZYBFYaoyEhnCjpy4fYc2im4n6461F9etSDiguKR7h",
  "key22": "2N86nEWpqAhwm6xCPQS2ojBLjXKmhBUiyR7tsSukAh6LqQNNougD7qLZWGcHX3mEFpq6AQUqY3fjhM4ZGKYRZzsS",
  "key23": "4gYBDajWE2iCdzKwiAhpR8BjYjDzGaDFHB92Nx2rHfJfZhgdj61NaAexyhX6uXiV4V1cqBEFMsksjeQE9ZsCLKg2",
  "key24": "4viXSJ2aaW74fYiCvba6znepjUVE4zq7ZYUwUoGzwFeaATuYtK5rnnvLPJvq2HAQkQSiZFxEScvN6VUAtJ7Ms6PH",
  "key25": "5uG6WadGivQrX8iZjhJkhwThYF4FA4DJsDbGjka6GHWFQ3S6NknkLZm3ZPdKVmVNuMmjQG4raPjHemVvHUR8r6ej",
  "key26": "5yRzyCeDaVqaqNxDCsPKbiZ3ozinn2CRaehaf1u8LbrKdhWLdSZyhbnnVAgMw1zLw19SMHCyWQePFyjZqYdi7wDq",
  "key27": "LS2cxsG6yZ2EUNZwPbBYHb7jL8UjZSeLQdSFM1DyRjV3ac2MTTso8DSRhNx1j4BcvKZWyaXPVNMtRVVpbtpUKBU",
  "key28": "2ZNWdmZKg9qWfJoAW2T4k9q3X3MLDypngRNRhnvD4yjuSRgpLzefVNmuy88HodkbFxP7YuWzpdN6cJcTKciJMCor",
  "key29": "477pKGp633qCu5h536DbBaVNDqaG5ENvrEG3QieU4UYFbDJVuju4Wbrqnvi14YNVz7QQCVHmENuNgcdTJ7QaVevh",
  "key30": "2EtSQPLfRBn7sTYvPjiePXRpSD5DFiaG1XfwoMoSBncjj18PdRMXL4cLtDP3XvPKhz1MxR89tppKmFVwzFGurMW1",
  "key31": "3beUvzg6Tr7pkXNmz4B9CWaL8KVvsVAGM5seWBfFMJm61JpUiZ3CHzLm2jmb1nUGUrUxFHWo48cUziAQvTRyREWa",
  "key32": "67yjpeNCA3L4noBSCRRdkT1ihcUKaCwfMjBudG9A2ByyaCVqie6b81RQnKpiUMMpRT7xBoy4osJP78J96k6hF7T",
  "key33": "3WLFc6AWRTzPx57UaQG5QbLrQPPtsDWfjn1Uy1e691gPAHJTHB1W48UtWfiThG33JEQTojwKixJXAGzM8TihWpqm",
  "key34": "2E9mbYVRQ5BS3TKk86T2tAaebihEtHWiahkSQLCnppfWVuS9871mLorphNk3JgXkgVMfbmNabpc6shriTgaa8rZw",
  "key35": "5wGhjpN55eK4TtMiYd5hmVzUcYi9gVsjcwba9myHbtkLdPAa7cHv1Dm2De4A3cazjp4F1MtshVwnpxWonhLPukPv",
  "key36": "2NoVQDSxALqCfz5DzC2APVJiCChTuh2Gabfhcvsgh7iWNaEWw8ioYb6jLzq3RLSDNdwxExAgoDdur3nEyCdU1FFJ",
  "key37": "5ejwP6bDo7PKLV3SzdyxDTuyW7h3LUgjn7QJJDNhriayorfscXGreNaa1P3Wtq8PbY4s8oHNzmTUKDHtJb4xa9oe",
  "key38": "4FVkxjF7nn1bc4dG6w3ASNH9WFQVcLHGxrjHGb4uMh79MCS2pYYUcv4zDf1d8XGzTFkxLrkLoJxWRqvzd9SKYRkf",
  "key39": "2t8EoHPSNEqmaZfgHYzD6UwbP6p1p32xSkehZUokHu2hkuPRAVj8bMbXM25XEDrFZPm73R3oXCdehCHzZ2ELnBpF",
  "key40": "tiJpLWbCz2VPA932QHn8bKL8QrSJ2wF3h9NiKcd8wDhc6Uc14cd2DC1Xpy2XkMYoY9M2AEKbKuHfKMBvi7ph9CW",
  "key41": "2DTud9FdggWuJnbcE6DaXpc5XQFKQceMSCgL4MpYxzQSdormXzCWEESFkq6rXrzSM5PYiADqWgM98bXSi9X9XCML",
  "key42": "Bjm7vPhphdL1uv8RZ2g7qSZ6R2meLLgjprmfRhsAvhWE73HMTTATGGkFwLiqUtKAcaE8cNYxYkVRB2nRQagSW7B",
  "key43": "awJRMNESSZSKiiZYinVei9ovPzAwYthKwAMsiQewH3ZBHEty2f2GQBvdbSU9LEeWMzYTxuvvD2d5e7V1KecTPsS"
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
