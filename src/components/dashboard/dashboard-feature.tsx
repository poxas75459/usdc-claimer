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
    "2bbsTqF1MtGaS7amtX933NPxWJF4P8hiYjCAV4vSQjQtH6jbm6zoMXQWRYUGcw599cpr4PS1jnMGZy5H9JpSsSFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sz2aKmoY7vnf5WV2BY2acaS14RcRQ1JP69Ts5FU5puR6BuuQkkpGz8rQDoc4bD1kmDtyLCh295FLxrYKNd8m6mu",
  "key1": "4AG6UymtLbafNigQcQWYCNMsMXbVT7fu6EzVfEiXhe5VpYVWHkERx8MUTcnfnXCFowqJxaXpZ4Vy44XMg5zpZ8Cz",
  "key2": "5dvm4g3LAGy84YLGtw1bWLAnbiMgg2qyjGMV7jQf66Zre4sAXi2igH4iP87tExumSjVJCkm61gC6gABLBJM5vxYL",
  "key3": "5J9Fs1iJHkf5KHQ5bDasrrkMXJ5QksSL5D9wyNF2WLT837qRRNpxKhmTuQHr9MF18KTTgG5iGm4UQutkEgzH9ShQ",
  "key4": "4AnB2VCJDDQBrAPm6ohbD5gMFbN8XYooNaMsXUD7MXDSKJA3AQyhJ5FgrBN3J5aT2oRsXbBwddr56awB3Wr5RuAA",
  "key5": "y1sjSPGbpFDQWr4NcokbnRinAwQ1pRBh3BCJprRpEQ53bsmxTukxHTzPERC3escaDWemm2egBVdemkjBCjaUdZF",
  "key6": "5QMCfyY4bFEjQmD4mnjnHYZsYNnRxSpm7ANLhBPGudMUof6J1i3JT1CsihfUitj9P7DykboaZpG1xyibYDHBkYLG",
  "key7": "3rhCBMk358NeLVYmaEcAuEgDtCbFPNABDapxEDVCKgBaq4A25iPvfU7DmqrnKm1Y4FxmDnzaiE56JucVjX41evJ",
  "key8": "4A8odh1PDeh4VkdMFqRdC8peCUMXP4RCySiqD2S2sKQLEJNd7sUxQMoMKfh3rrihY9rPbVBgnEEMRXJWytMnpkcw",
  "key9": "fiXhbBjf32ZNKHLngamPu9JxxzhwoLJhU5WfcTdxjxtREnNi7HRi7jv33ptUAMka74qP6AiNkja3zJSRexumQna",
  "key10": "3baCuVzvbvHVFo2ynUMLUcAn32Ff5DZjz8jKQTBMz7kDs8JYkmxMa8m4gLcmG2HP7rXx6b2Hvo53nENDyidSHFan",
  "key11": "cop57f8MFmrhdKsKDoiLZ5zSfYp4oKwKiRoxnR1GPM48AUmKB7yhSeu4ZUu1Lf5mhBsXwH5Hh2y4E1YsbLaynoz",
  "key12": "3A1d6XQEyndqyi5rmUP4TVuhRiaWCfabh3VkuZBSXJvehCJYEXExD2oQvwACvKaPwuaPVXMcFeRLNQbkCHvvXizo",
  "key13": "4bwD7bRMNRgnCGA1u3gUqo8h74WWDBGBF11XyH8GvrMyW56J5v3nHETppAZy8QUAGKTGAVX8aJE3gcSdiMdLzQHJ",
  "key14": "oKY761tjS7zg7QMgH9UgykWYqExXg978XukTo8uqYZHroPE8mnjprjt34rp6KMhUnnNDWSiztXasq4WpysiRNwx",
  "key15": "5Jjrbf7gm4oTvGZe6T1nTiQH8MtK4w9GRAhXu7gr1Auhontu21WDwPX2mziCXnkc6adcyynfEtiwaweVJQMqT8bu",
  "key16": "4YXFrWZaUMxn3rNGCY3LTpeJPGhK9yRzbVbeLHHpWVfFK81RndfQ3QeQtctqpZ2z79Gifob3FkXMxktsoS5QZPjf",
  "key17": "2EYb8e3wNpo7iBfE88jBnS8kWxpJzRZbuQi5TeN1QcaqztFwAQ7usnWMmaazH4k97cCNGHd4mKDhBUqikYuTAmtv",
  "key18": "uUawMnNKJs14cDd9WRHqm6RrWT6xZJaBcortyfYGDatfcqPnjpM7mL3g4kdYGayivEHzXrfUPNCnWc7196ANPB9",
  "key19": "VqJo41hrdkNnxauW2uMHgnWF5s33uQsjQm5mms6qN1mu53nBKx9JJEfPX6BXcxoE28nF2JSYsDeXCuZ1jALXms3",
  "key20": "5zuMvKs8Bpc45b7PRvN64nhfumAk8HDwGERWVddyqQJwkX9fD4GqDjYqf2HZ9wPUXZtd9p2MAAH8RBpaMqarUJR8",
  "key21": "5Nha696VaxvTmWFHm5cKxJe4GaXZZwJjtvRcxtRWnQC35df9Y9YyVXaMERnNqEboM4N7TGTCSedhsow5aKZ8ZW7L",
  "key22": "2QuKXJ6kiJq7KzhjkFamQ2UwB2LXZvBakut77k1sPiMSkkxjxmr5YR8kCvYw1sfKCJUowAPLFEWEJgAXR2cqWKNr",
  "key23": "3jrdXtFbpAnsUvnwZeUqSmbRyW8Fr2D2VXTXDYSsRSAXgzKo9rbs6Yy3veSZivugkkDbWTRRQMeS5GohHYNA1Wvx",
  "key24": "PUAjjS9KBbz1acZbh3uhrKAhB1e8FHeTq6E5LERTCHNthsMGMokXqEVcpQXv4Tv7QmfQLnyd7VkzTBW3Zbn3Tvs",
  "key25": "2FZkTHs4iq68P2uJ8cxw5uzLZ55PCoC2tXxycogLYQ4Sqe3mSRru3163jdAd6nAgBmbbCNx4QEUK9pbGwVyeonPn",
  "key26": "23ahrxvkpMFmYH3168w48GaNUzyixwifqufwiYJV4Fg5M45fjts3he3aEayXoJGi9P2m7k5Xsw9uhxXxBFYn2scJ",
  "key27": "29wRACbcpcyRzpguYPYg2LK9mSE4uesanH5wGLAuHMzys6ApdWa3erCGanDbM2jxJTG2GLXRU78y1LwL5xG6cusx",
  "key28": "3D5B5p3oTZu7c7LeUiaZMA8MHc9z4cdcfa26MjQkCGk4qLZWHAksvfDcGMNr4ujKZXfnbwPzqRutgbG9QyV7CAWN",
  "key29": "489qbmGyYpWZg4cm5TNRyruksqDBw7tXqQrrvkKxqwVQjoidQFUDZH5FXCcsnoc4iGmMu3fWkgTNcyUbeo5n6pK3",
  "key30": "GmNMYeDFxRoeaqEikQzXSB2ZBt16if9Z8eGHvqDowNMxsZfPDVT24AomH78oETuwfWaBiHRxSn1bDFooFYeN1jY",
  "key31": "5cDHKzs1EqzVB72qn38KZ6QFHTLzWGGnv6AQfu7uyW2LJBKtFQAf9ZBjcnmzMo3zmxVk7yjffnkr94q9xoGyAWh",
  "key32": "5TRnaresqPzitz5jZpnnYAGoiUQ5kRKgCDTAbDygLcjMzt5rK4p7xJN3PnHxbuSGbbU35wG7aAHd4FGwmE7Tdwgr",
  "key33": "52jSdVQ3puCaxkZF1ouBk2joc8SvMHQgBHx7ebbBFrX2qzFxzxtKueVyneAHdhXrLnJgVGgfpftJJaQm5kpV5QNY",
  "key34": "2m5CKx5JJa91urCJyeKPJPqHwFghyowwATXQ1wuVNmAL3q7NM6ziNGczt3Dtjpu7L8t6DMQPwWcbGfkJvqrrsm4",
  "key35": "SRP7CrBBLFAgbm1iQfEev7jrXqAJ3ut3itqUHk6k6i2p1avjjxkv4JzjB36CvPEoTJmmZ64ZhaFDdxbkU9z882L",
  "key36": "3Wvw7UADqKYYw8soapCFJocd37GLYoKj6nqtftprFex3peCsQ5tmXbdDEbCxUKpyLAbYjmxLAMe8JddYnEC7suw4"
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
