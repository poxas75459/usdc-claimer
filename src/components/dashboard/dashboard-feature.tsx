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
    "5yF7uDUx8WgqvLaYcPaqBdDtfiPwwzHnW6WUaUqJsGshN8RqXzMfe6FUER2r7iUUTeAAYoCLPxCrm9AQHCGmhNwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zz38yGoRFBoMnNv2PoHRYPcAJLDPQESGC7u57u2B1KdH3Q78xesbAGAavsWEEZFiAGZLPZt8akCxoDHk2NYb8Da",
  "key1": "2LpixdHgDLq8ys5qLPbvvB9d1tGvH6EUK7ZuPEFejiVn6yxYXGo9HqFGP3zuyxSWHFmgSgNXKMoLyB3EcsPAgY3",
  "key2": "kAzfSfqptXoG3eDSXykFMCxXLx5ZQSNY4Qzc8Ly6C8LbSdxkikswjL8fuic7UHRi4qcUCv5uMqdvdmP8w6RKFcW",
  "key3": "23cG4vCnT5ZyiXjomhwzMRDsnePvMGnh1HhUx1tHX7HZaZnwhPtKWrMDQFDuXYAHAZ4au9ZMydr17NCaGL1Cc4yX",
  "key4": "65gHhm9imR1AVu8fYHFXhhTYg28W9Hk3rJGJCbhWYKzbvNoXSXaqYc9h81XWZmDbEQMsgU9N588vcKsSfYz6i6Gw",
  "key5": "5sDEfRigUyRTdw6gyxP4L3tMnNzq24UWeqsbhZueEBfT9zzzAMdmMQh78oMpvignKSL43t2wJbBwNs5crKgbD5b1",
  "key6": "7mMyVKa2SMKsLLXvnUFUw7PanL7TaZzVCnvSuNUxMVC2DmobSDdb9yfTkfX9pREsqM8AK55LmenvKFtm7iserVZ",
  "key7": "55M89BwfLwGqjdMprXsKKEbty7HAK75uoivMiAD6zsE3AyagVhiXXa6aipqBr6USDwUyyjmUJvNpSnMoMgNAqrzJ",
  "key8": "5NdKsRziQNz4Tsvf5MrHjJkGMzkruQq8wsTeRGFtXQpwXsP22kq18Hz7G5MtDTn8UD1v976vYRpLnkqNo3hfwDXA",
  "key9": "2dEh8bFTNcja3cLwwG1JBQBrKyoM1EK31VaCodvZXz75oauijf7iq5Rw8AHypNnXaLTp8gRU6Vmbm4ChUvgYADLV",
  "key10": "3P9aqvftocR96H6Zsg9ocTFbJSB2Q9MUoSxuL7B5jfRxv2VsAQnMLhuPtBTG7nMiq2ZhK3VpBFmict8TkfME6Pzm",
  "key11": "59vWLam8Qz3XXiBwyT2qrT2tjbuFGebbXH1qARcjTXARvuGBpCNi7Q4yEb1zEdaHfDREBSWSdm6YszH7yzMVQTai",
  "key12": "JtcZZg2j8VsnDNqHZgA9sLKWjfXXACTtTL3n7Y4XJSXY8DSBCmtCEGTmQMxzWxCavPpVz6ioNfERQt1QAeKiiCa",
  "key13": "mSYAQfxHZWpkXokEcYTqEnm8biSgNJCuAJbwLL2YYpczcL92UzKv6GEE78vdWTECrAhoXXNf8DRTQxtLfSDHbi1",
  "key14": "3rtusoWf5frn4DYGQtVLvMRvzjvs1yWySPb8pUNc68FTQ8nR1bzbZr1kqS1HGvXXr5JXcZPetXVUbE7Uhf9FTJzF",
  "key15": "yg8fA8pCYHC6e2DmL5fQQFf94UZDqUDCme3JK5kedKbX3oEa6cyFyb385z43jJT1hAxB8wBc7pgdCSmA7c89uty",
  "key16": "5inaLdEPU2NAPtydn6Qg1Gqjh1VFUv5mnGmzFit6wzNczTjvBpDwcRpiY512DyuU3CnXhjvchtdgb1sZYTx5QM2V",
  "key17": "Rogwd1URvK4L2sEUwWs6LJMeLCWSKQmhPg3hMvaN88qr99FqTuxb9kjwmhp4Q7sgdHnt9ZjW5xoyTwB7fYRDTWh",
  "key18": "2tqW5veR3FUebdkXdyAxNtoBX5VK93Rg1pkX37BkNhoEG5FBBvXdyyigqgMYKWD7Cf6CtztTvE3cyWuyei4qhS5r",
  "key19": "5hvXN59w9aLwBRJSdkTWfGhmvufRuunMcrMK5L4bUMrVE3bMVXRfgcWTy2sAVvP6upbJ83G7s2VZ3kaEFo8caUnr",
  "key20": "3N4QvCcy8wCfQ4xp7gkh57KknuFhvB3AsCRiXRBM7AxovrxKGTQxNqfuQ5kTzG9D8Y3uTd6PSjaS6uTV7TFJdjt6",
  "key21": "35dRsRpJRLCKnKzGri3xAPEEjnt7q6qKLyTy8Wn6zUU9ViaMmqxhszxW7p28UN2uppuRCEXQmqAfQ7Gf5k4CswHF",
  "key22": "4btx24cP4GwV8BM3mk7Pvyr897Af11FajHzP67PpVsKPYjx4ZmNt8TZ1MyMpYhsnDJgJstq5y7Yc8xyfFYdCB5VT",
  "key23": "41Kz9MAuqc7tEywbaEBZ1MZRxVzEhhgZbw8sN8Ruq8zHvg8L4ToD266ytACtU9jcfWW4LT7sr9HFmGpEyYcfL2j6",
  "key24": "38CyvqwpddeJu7nFfF1enFgJEMS9uLexQUysSyneTHkepCmVEiUrH3S1LYgro2rtQu62ZuCcxkP3PDWghR3ZMqux",
  "key25": "4mHuWqGMZjbxUB5pVtNt24CaiCK4XWcYNweMrUBdLngcjfSTMdrmwZx9DCkGwgfWTVPY3ZYsDRKo8LcJzr8FbFCL",
  "key26": "4M2oL8F1m9SfGAApPcXwuuaDGyeKppfQTkNL4icPPpsQq6WbhFHv2T4pEhjbAegRKLu2gSSKH3nd75RpsCcfPmc5",
  "key27": "5ozULMMRMGQqaZAjcL7dziGegti8Xj2R3JCJ2wE2ddbM9EYuqqVNZs5pyNkzWt2oXPXM4Qes3rNUASxUT3aYxuct",
  "key28": "3U8pK3jV7tR4cZwZtJB8Pm7ZDiZLfqQzLcxFJFPoTQwovMZYsZGvdtb23QWnp2mnajR9E4VGZMLxepqgez8DsnGG",
  "key29": "49B3tZiewjhAdCDKwoWPdggDDnRHbSkQAefWHw3iNtcQBQD5NiVdLNk5TG26wgq5A29eJTuczu6i6nPNApyXouNE",
  "key30": "hc8811hbi1hLFnGQfP9EfVeTCEAX44FB5PE9zHB592QW5GPPS7SEamZpH5azSh1HwXAYDdZAkRWGk9umbU5Yupf",
  "key31": "4vv1CUZq11dGJgE6f5z32GJZxei2n3vejMcH9XaVrLb31GDGXUD6JskY9sywVGgW6iVn3K6XN3JaDNAZaH3QmQNp",
  "key32": "2yPK3QgtvPFz8JaXiEy5W2kF9HAWG2psPhSbyxn89aGJU5g6C1LUJjWtXxmE89go2DASvE21dX51H8UjNLGmyC43",
  "key33": "5L6Xesoq1mPXdpHuH9yLC6mTbVRPS5uARarPvKmRbtCF9fepqtaew5wcg9TMiJmoyZu35ksBk2pJNpoQQ27EPThj",
  "key34": "5DBWv69zV8rbcJVdt7vL8WnvMqWowMzgatcsx1kTrPq36bVZADtd5KzPLBLoxXPHkL9kiM83FtuKxs6f1tEW48kJ",
  "key35": "F68JcmC45km433RkEKy2XCqfQmtNzAWNqWagzhSsam6MzhasPX7j2bYQp1Xbb4HXcCeWxm3k5uzY2S1L23gZQBT",
  "key36": "3QRzMtS8kU37S3ocVWpLLWaNcsoUp2KxyuvTFGUUi8EZBAZieLyDgRN4u4gkdTwQUZeYCiniTc4xpSQBLjsVRd7Y",
  "key37": "5YhmZ5MqLL1x6r2ML6Qqgq9MKYXqPTRP8g8XcC7obGrEDWhLrxjjt3sNLC85uo5aVN82We2c56cfF7srHPiNs1kM",
  "key38": "56k5VgmJrXZaJK2K7dDscyggzKQKsBCX43UnVvdkCDsdD4zotvLb3QwGS5PHUVWnWa1YAbZUaoQ81rF2PLGJkZyK"
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
