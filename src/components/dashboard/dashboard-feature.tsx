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
    "3vdB25oBYRKFSpDjEi8rgyjKGDKscT7t7K8pFTnfiCmohpoaPmkbfAiGfcLZYQUTeUFN2bX3121bu2jVnTJUr91v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X6Yj34t5Sejg9EXK4uayE9h3puk4QmTnGDUveEDHkpo5TdTG4Hfm483KrGZvbxPJg4Z4x1fPGRrDGytmy7eF2LJ",
  "key1": "4GuLLJcX3qFWbGLmBAfXR7f9ysRZYTNVxmChCzjU9tZdec57raGU5abypVtTEyp3rGh2twFks27ymcVP76xGELib",
  "key2": "3423RUGcHt7ZA9XMp5urEJZVLr5fEaaSX2KUPCaKn1nHcxGQL5ohjBtM43VXQcL5xiEcdjsM1Jd8ocVRTqaSHx7a",
  "key3": "65dVrE984WmJ93Yoeimn1iT9Nwka3naWLtAVYTBcfX35xJdhkvxZNND8pN7MBpoBpEm5DGDUGbKdoryzgMxXAETm",
  "key4": "4TJzsWcE3gvWhRmuHeFXiCnpsgJC9MizT7hW4MFyKx79NS1JoJSs4fCVArXXu45GVC1AXh7rw7dtykb7m1zuDCzs",
  "key5": "5Y7mQoCSasY1TTEwfMhYX2Mb68JHp61fxs2LUAsmJ4vrG3pFCFTUSmoLHRnMc2x9UVcVkwzLYXC5xmACRo7b1xFc",
  "key6": "3mVGedCP1uEqwzkfbkjdJjDBDgPrbMiq9sHFF2uEMbbhTvyQNcSt7W3iFycF51Ty2dHVBr1SMzJmySZKCbap8drC",
  "key7": "3BF9VG2aM3BsxuLv1BHAduikUzVf6CfsCN8qAWfEdmks1z2uzUNd4CAhhtbJSTjGpmszNRy9CfcA76JSu8Z6zmkR",
  "key8": "Ar5fkNwt2nbmVDzJT1fCansmLbYrswqj2zobfboug2GdbP68pBCWB33wG8B1wm8fdcSVrXHafTSoshc17qwPMGL",
  "key9": "2UCMqLSH8gCyH8kUGyx7xzJFVqSc7QRMiMUxJQ7d3V1csH54AsKug9TjQnSBZ4nwxJj6iXciC6HwxEYcxNd5cwkB",
  "key10": "XKgvjVbXR7dQsLeL7xhXVrwm6ezpsUoKUH1yHtkPwfEKA77b7YFRKGrJMqKUzrq2LvDY7DagY7mLV2exxZ3YC5b",
  "key11": "2Gb8u7dDzafGYcd3PTyxzuHBfDNBVLGwwzaoCfSp1YnertXsgFHmExA7Nm8jgbuosekSfwvLKwaAiZAXMmiGq7wH",
  "key12": "u5WQnPeTUWz3UZQ21qdbQp4zLny4t5oNEmJdgCJwLobTNwa18sCkTpoAUrBfeFsHV2CjNWsie1fAP3EwzAH9Wrr",
  "key13": "2MW1SUex6XWUR5RA9MkVsAGo6rKRcwew4BbwTVKUxzzmcPCedHdkLLC7Tqs42JiaWeFAXuqzsndUDiQbLneox6ku",
  "key14": "2nCat8vppwwUPfCXu6GGMR4sZZdxNk6ruXaZ4LyUY3TaignRcn2eNBqTNsSaS2VL69jtYExN65aS6QGaUtEQCqie",
  "key15": "oqtjVpHLZbGtMt6tDXfw6u4x4FX5arkMv8AhswqAoCnn1RQFm6nMCj2iPdfKszs7pY9VuCe2jcD3sTxb4prWckK",
  "key16": "rKLyWYZ7WDu6MRusQUNrrjgk4SmsmpYeyyp67CLDvsePQYdCsekz7FYtvSuaQPRK6yr5krRCEn16xv2ZcntCHdU",
  "key17": "RiFhzacw7pyUakYhZC4FNqmt2RnAj7bqKf7t8cJWHkvS1ihscRE3wC8VZtVVcAcXrMqHG7VM555MMsbDweuMYwW",
  "key18": "3YpR1D1MmBCoiNswygwRBbjh1YTmkJhhKysAAMrvzR2wwXrXs1yf9UKJoqdAo5F3pQBYsmhinRtyXfJeXX8g282E",
  "key19": "D1dCzVfNet1CVFvSJqZsKQbCsS1uSL1KHRbvBBymtP5Cyhiw1FBeq5V6nGHEpoX8RWAvHhWR7Ss4267pKgAqjez",
  "key20": "7iWz1XqEMwAj5QwVzW7dny5NVT2LacxLdJaoDJmUMiRBrtqceBNRkyMTuR6UZgUuLyoprwFtepPE8us2MmgryMa",
  "key21": "3dQGCAkc643dWVLaqHCtn7hUowgaUgQppNSAg7et4Wv4fpAaVHDYYyPnMmmcytCQGuKqoZBEFHkLTN1e8qxFNPqU",
  "key22": "5ZqhY5W1dZwzNB9gKDiSsujivXUmXQfAbjfPma9giybPWSVwHjWQz2HYkJKRV4qT9zJyRSGE1s68eF8yNsCjvvFe",
  "key23": "3Qas7zSR8PN5mzUehEZNEys3gRESbQ1kpmC1idJkfYYfa4Dy4yLkacY9zCavhpDLJbGJY85jPhBcK4m2bVutWjna",
  "key24": "3UCjMKvNwC9hboPdzWvqQeNZ4i5Mic364uTS4jmHSG2vFn5eNBAyaZ7HkrJX6wGtn3ZLB5nGtvsXF3CH2ggJiYnn",
  "key25": "3UqneitEphBq9BbNBuM2Zg2VssNMDdMjSLEjLmvunbKbfd6K3e7WyZW5bLv1mJVZr4F8ERvHU8D297QuLXRvMeUL",
  "key26": "4ogQno9usp8sDk1g3Q2gQRToBfRLVsRN45ChLS22VPsk6YygXa5cciRL2e5Ho69wLAgsuDDp9LjbBd4jFAei61jc",
  "key27": "3NafNN8tuAg2LFES92xqu57hyCj6DqQx3xF1gDhzwJWWRm2B3N5CXBCbGhcStffx3J5aBb5FYSz4qLFzSmkA7ub8",
  "key28": "5zZ4f9t7cUf3SLac3c26pVdEaXyzKDUGjEm7eApLKFkzxTFS571JmkStuzkNBTG7xhktPiVtST6QQMvkMDrAMR67",
  "key29": "5U1Yv3a49SRcbV3ba9e1ZNw1gaAsPeysqwPAivi5LTYRZaPqLgobcHSadA54ob9DUqSdHkmJ2x7xvLTJmWxGfBMJ",
  "key30": "5mfabyLvYwHmGF6NxomxdJqnNEZV8ZUBoQjEpbnuncyxfzGdCpjqikEoJjJMSnfbWimBGzUA1eQAwmQDjTSRArJb",
  "key31": "5DEesdmmWrWQX5NTz3dnrowo1V6d63SFpbhinMXY8gij1becjJREzUPBsFQ84dYywsUxEtHn45vuHJ3tPDAHDQTf",
  "key32": "pHHm5PoviKi5iXFXV3NR9yYVUD4tqG5k7XKibeYZG5iR7s9YYzJaf5FWL1gFyV2NCRzU6Tq3awtVTju1hc4GRah",
  "key33": "2UeTDyAzGQUrAFyhfhk5uSJ4efhCdd8SqpCkSMjSrigzDtjtZ6U1DRsphuUtEKfzG1vsrcSks5esEtQdJS32bTUi",
  "key34": "Cj6pNCgvbRUWU2bvXoKWLzprhydHj61pXoyH6dRchvsg4xSRD7YZyEGKDQSyECcXdNd34aV6YUA9SByrsmmqahL"
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
