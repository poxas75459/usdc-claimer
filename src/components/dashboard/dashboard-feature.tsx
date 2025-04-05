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
    "2RnX3VRHP5TNEwv7uHSKoYUGopwQtvsHkpGG4QXbuyMsFfrSd5oh3mN1gWriJef8XGd9P2SM7ueR6SD1fCMgiAYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qzHzzWMwUXtxmhUPz8veb13P2fGnat6NQvgYTBAjCb8XjUTTUf7hrc7S9sXBZn6jZL36pLAS2X6ezQTuDLc9bda",
  "key1": "3ZkdL7CzA7JDyCxtn5R5acYjSsUL16a9iCvRbX7VREzeLsah6endvUAJ1wCGTTaE1RRxmmRbwxuEqdPg7KVNHBF7",
  "key2": "3LbL39Uc6iTVyStYs9cckVkPVRjpMEmjxw9txiDaTRSdQzMstdvxCWzvKNViMCJvi449CXkDcGXHKfn4xRqniP3G",
  "key3": "5gR1PW8HBCsvAmcMSbAKozGdkGhoV5qKNcbYMnakyWttbwDdU6QgKs2oBVpGGhT9yMLZPL98NaRHRAhsDpCF3oMs",
  "key4": "3DhQGo8gqbCNHgk6EABQQBTE1qEF4BaYmQQnu5kH4fjmjwTpKfqWhkg6tV2SSfecwsexpFrk15utW39TRkapetcy",
  "key5": "2VdwtpMyJaRAFfhznZqzB9q4vVtezvKvNfZbjYQFFSWR3PxMkp8J5Th6FUZopq85u473xp2Ke3y43vLM1gQ8m2Ht",
  "key6": "5yyozYpvKdBVd9X2cH5EXJtUJSrpd1U5w98oNfjhDYZ9ABqAs6PngZ7Umiu9b1jxc3sXzSevPKBKs2L5geb1VXbt",
  "key7": "3akcsrNtsnVXaf7BaHxCE1Foov8KhyfyNeEiJxExnQnanTxMHt2xVqUFKPXGwMp5MkVSkR4sVJ6ewsFYiav6nxw7",
  "key8": "51MbG1Jh7eqfnywfrvN4Hyi2NRh7nNqHdjQDEAgHcyEwVD9zCc984Jc4awXRhQ9HNtXouxDowzBSiu8GEbmx59BF",
  "key9": "48KJZcjc7Yk4E1S6Hghhxpx5pUciqrkMaLd6Vt1DFFDoeGxiw4LQsMaAKf6p2mtURkSf72kUt5rrjEBSXmjQNfG8",
  "key10": "2otePAuWb9MLRN7qj7eVEJ9Zp5udVjK8vWLhG2gNxx9cfm53QNf48YZeTj3Mv4F3uc84mzkWt4SANgicnEEARkS",
  "key11": "2nvZSG5avxjnpHH7oqXAq5DALmrvZ2X2UJcNkf7aC8JvGWczXPmDLwRBFRBd3xBLt784DrJAfat2HRQSog52ZvUx",
  "key12": "V5agYtaLdhW66tF6cviPqAfyjiPL62j5sgYAJHXjqBoSsTa2tv27WbBm1CA2562GXgKCfYRwZKRpV74tdGcPSW4",
  "key13": "t3DTRHducb98rZzpKYovfpRkWgeJXJMNksWkBc5uXXVmGKzSD37iR1iSVQAcS75GwRhXMCzx3QT6b1uU77iHw6G",
  "key14": "2Cfwkz61MfpKG6ocbWiLfT2gQkHWhyWTckneBcdjMjv2nC3zubtPSZRUz6U9oQFW3xeLpUuAuCNEAMQ9dgiqQyZV",
  "key15": "P94opj6Ssxy7xzx532vbuBNdE5DmVEKLwQwHUuyiWunx9tL7rLgbBYRmrUP7neS4LMpPuLDoikRb158KMFM814a",
  "key16": "4zXLWbvfJBg8LMo2zSg6Bq3GBkTngwtFuW2LEktMCDVmjXKkmawk2ER7Q2th7tguNfpZ5AK2qPp4Yr1rsDdts6CF",
  "key17": "2ch1W9GD2qchusSt6myoyTtwjg1SZDJKY1T3WwfwLfr2qgA5BjHP4yogykdX3kaBhbuyKLPFqp8rrjj3cxHnJ9Dc",
  "key18": "4BapNq8dxuZWxty5aPtBfmcfE3QCy62nft44NpsXPRbD6oKaLBXbJuspdnQyCKgYDPjKKFN9jWLcymy1W9SqczS5",
  "key19": "ArzQvL9SZgZRLqU7QAhUVagrdj2e1uXE9zHg2cHwe7KfJMmRbE3cCECnVoqn19J5iGd5jRKjJGJxPor87d1tuAw",
  "key20": "5xcYbxJsPjzmzFoiUGM9UorvpsCp93U7SjC3X9myeUKUS9S5B5z63EoQwv8Jy4eFTaBeKtPZRUp3r6Y4nTV1aCCw",
  "key21": "2NnT85tDCNiGbdG4RUKpQX6o6zCMzuNh8ToqhKsYEgeQu5F6RMw7cj1XZbm4q8JJnvSjxX8Gq2YD3vVccPHQrGmq",
  "key22": "2c2KjH7Na1oZXzPGrLPfUzAiFVTZaJyvsTdWwSPzbzPGh8RAANM5VeCqsdEcrodpr82pb211WSEh4urAFKYibYY5",
  "key23": "53dyR8oMUZhzktksLNvensVL3YULg4JqYz3HQFLtcZ7aQtmpckKBo7K4BgYgwuFA6q87gzsfdUizeEqXQ9aLBLE6",
  "key24": "3BAYh2U9S9Lx1BY4Z62BkqcMUeQibAY7occkWWJ24Cwwp9TTTw25ap3RrprgrTkRGfJofHYTUwPK83Nqd3K7btzB",
  "key25": "2hu61XYTF4d9XCrJ3KmDGxh3q1ckfXZfT2yfE7Zamk7fXFDd6NZYZeKVWCZ5zH2bhsq9J9hDikfSRcn7MHBieYMi",
  "key26": "2839UHQMLJQpNTNmzuydvqfaddW88tu17DGXgrDPbwjh2uQhQfPUzXVxSBNkDSLLQU3TuWwNkQrYpgLB6vJV3Xez",
  "key27": "4J1TUaXpa4jjxVjjHpmWTMbeRTkrHmVX8cpXkKgP3kLk4uvU1wXUnFGawspjRvLW3PHcJ8Gec259R8jpjVb73YRh",
  "key28": "5vxMwR8M6M4kchF3Kaw3KgraW9FGS7o8xBDeKU3yw3SEgR8fqbGVovCAzWxs6936XmWxvC1zT4pxcSx9n3uAQCSh",
  "key29": "2xoHRJvngqLZo2mtBGjMfaz6w6o5aD6uitzUqM86JQ2acUSW7EWsMZVNvUZrBWXFAzwAYiARKUTS2C1HiYRVDhh9",
  "key30": "3BGkcyXMmdXWh1BN5qRE1U74a6YNAdNcqxg3Nqq7qeJzbqYhFXXmEDdchck9hih1zqxeQ1mQVAGLsW6139S2E5mD",
  "key31": "2N3EKEZ3PapjMeVUiCnpfUtKuUfPt5SZNd95riWUGaPeg997HynVGZsumcyDkSg9FNVvPMBFurEzMsLizoF7Y1eG",
  "key32": "3WNJT3MxutKbTAKzTYxoEKo664SBUv9WD6W9DjBZxoHKGdTjcvFJRs2c7325AArbNrqBvxnhzBBw32GoeqUh4Hz3",
  "key33": "66d5U3iEJMnMTDWkn8gPTjJjxB4sWboRKUbYvH5BHNjxVT7pvhKbKuxRAv1ukHqQVJzcgVcxutYV4UCCukcEhbAW",
  "key34": "3ng87MXiT2Zuju9SbH4EPnV8D1ueoGwh3iegYBUrfppHwKjn1UYp7oha3Pw7s2R67CfJjN6ukxgspkuW5kcyU1dV",
  "key35": "2VFh1o2bhYEgjVMzbzva54JYx6oiuW8mizA8whW5dEtyhAyQCRMLLYxeif6jMugP7sN84TN3afpsyYQPVfwPNjvF",
  "key36": "3CrBM1zrY53LkVfxvFcZxvPTtrHZyEMguez6mXESEL65jusmTpKuPkbNqCUZrKVmzN28u7u1YQvdSjzmGSwNsdFA",
  "key37": "2kTuExwptzGjYPXKnXaz5uCjCPAw3WFbUuJPu3SjAT8PndVHXNrKFf1ZLy2uU5MFEUtAvJj7gayyBcyUGMyGtwZq",
  "key38": "ZodUfXAZhnhn84R6Dv9EezXAKwYHLF3aeeLnr9UYmGBxidGEY14WT1NWeo7iLgK6RZupcNfR8Bt7TUBN3mzTbVz",
  "key39": "4XbgLpnWQ6RNAGGKoaHKF1FVR9qgrQAMkwNniXfZnbdE7tAgJuDcc53teqJNJKxqrVL4NZChNhyuYVuLV47mWs3T",
  "key40": "3xuJcujuay4Xqk41meAyMo5D9oMBxydYGiquA7Li1dGhKGJU7NZNtVFogUbAHPEDk3x1HBRCLVv69jN4EwcpFFCy",
  "key41": "36dpq9S9SAVVd5ZN2mnU1hkJdS7AbNzhvtXRiBid9qXKa9wT5eSXPERv3gdGzTfJx8fe9vSJhWnzgx1CzYaTA9dX",
  "key42": "3hnUWwRooenJSN94yqRLBJj2CtsafBrcseRgmePgktRYfois2mWNpb4c4V1m78Gi3FFHBmzYND1tAVUrbpDFF6k8",
  "key43": "5TPQCtHZ9K3F7g4tyt51tNbThdSce6JQUba1D2d26uJGExdwSfGmWgynHnN16XrkGHmB6QMon6PbfcpjPyivLKLj",
  "key44": "MrFiZPkEwFDKXuJ5P6KKyBkuQojuJ1AcJuzfB6v8ZjULHYeW5H64dQSUDaF8iaDyhctB9kLo4EWDkW82awB2obh",
  "key45": "55gS7yZtysdUn5x9aXv8RaxPtqG4WTT6VqZjcYLEtouUHZcBGBcnaWxCQYcNkuRN1bUZMNAHggFSX3YmFVmxgws8",
  "key46": "fgcGTWKtXyKGtQRTyYgxQMDgVGsLwRcBfkgPfAECyCKJa8M3Ftxfukf8Qd7VZTDsKkMceSUgP1E7aKAyMiJX3x1",
  "key47": "4As3EobAzfqcUiPDRxh3b91T88HZ9k4PDdppw7qmdQQsHZAt1QYToQ66bsWxF77CYmzxNCwMjAsZy3ujZtTB2T2S"
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
