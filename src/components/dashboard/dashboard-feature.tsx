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
    "3pcaS8cw1VReirQPEZGc9UErPhDFhMYdTq6xAEgs231CFxNsFfYGU3RaZEaYm5BCiticjj3YtrAbgC5TKgBcPHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h8p18BxySBXPgkgCurV5yJPm1fM378Gky6nFZoksnjbhZqvRsQf2tmtUYtPdaAFGAvoo7qKYymcqA18sZmvTTmA",
  "key1": "3ppzmxdj8fexb519oDXAmHK57nC2LJy63hxi7a5q24as3x6XLM7w3rmQtwvK6ibC8zX7NkMbFVfyNryKPqqTD5z6",
  "key2": "5HHQ8e4Eh6VbkgyWV31kkkBmmQAbRDcwt1pKSDVHgscRmYJMSxUR4fXyqkmdTziHToC16iRKPhMvndfnivh75PVp",
  "key3": "2Qj3HnfrrApdYyK7rggk574oStjVvmoUKBRCp5NHne9uwhuchjd3rcTCDieZ9ZrKCZXAhc6MVhoHi8Ymg9cQvqqH",
  "key4": "a2DDL7oHA6qjDU5mGqUo4ddKGfJ394oN6bsRbcfZ6nJnGCHi6S1rsqfCmas58h9vM7waLSMPRWq7Smf7JfN4pH6",
  "key5": "3KrSjKVc7oCXRozxfuYuGjMDbu44XJZQHZRjTEYcRoU8unN3DHmovrcDWXkEPTnHKidWxNNvqiro2ya2MR4r6gmo",
  "key6": "4PX3f9VzdrTSoAJLyDv5gmpQgedmjVR9269uixEtpscZLQvNY42R4eWGUzhZZgaR8vKE1h4mRq1mUVFSPtFck9ex",
  "key7": "5fNjhCniihrBYUZ2fn3wtt9oWP1LTVribPrdq8L2NKAVHSQLq31CYuRxSwAVxUyx2oCxfDXe4vxbMzgcMWmj5xoR",
  "key8": "48h6RYxNLvXHKbeeQdmgwvrQHP7L1DGShTNth6vurZXswArBbhUPaGnSZpPk1vbYChA2GVE96zmwjX6jqQJXjVhH",
  "key9": "zn8b48398r9FhShPWE5kAN1VNZfvgP8UcLStepRhTwEyxqu7q79kDT8v3sviGAGMbpVa6nFFvkh6M4FWM2zjMym",
  "key10": "3ht5Dm2PQQsGZnzTBD2uZQ6Xq5DwgYizCAdP24HmctGP74VqQHmpcRupAcJBRnWgbsqfWd4SLKrHcPUEvXLQDG5u",
  "key11": "7V4XnMLPMLBWpAg22wm1mEeBkBYG6cpRNVmr9FyJatTFJGnPEdPi29epaXqXg5C6JynwQrF8zuH739kXobHf9Qh",
  "key12": "29EE64wrAEaR4FGtzzhFqD4hJjeDGjLCX2pNiU8Qpd2APyMG8VaXcdYpw8Za6KpWefLAPekadWiiSJrdZEJMUryt",
  "key13": "VGg6YD7MW5k8v2LrJDxvfEUiAFkU7oF1cwj8mZAGRn6tcdbMdpheRra9Gik3gUDLpPkejA9mpynydFtsPnnnRs5",
  "key14": "2x9TjLbLTSyXSi2RoChCCidtqPxVwznePVpxBNRE8K55xGzASPw8gQPUjhaSdFt6yxRZbhxZan8rDCRArXyqRq3B",
  "key15": "33aHVvhDPYBpDtNUxLDeXfXrMKTzU18J6R97ZcuCVdNLN8zMhpSrHRyFAbBHy2xyPxKTJS79wJobzJbFny8PwybZ",
  "key16": "5W46KMZcMeuy6xwjBGMJmuET16qTuLoEmbmtTeu2RTbvvYwXJ8rWCdHrXxdpPHuA4HnzziVXaoddTqcCw9KDNWXZ",
  "key17": "1LcdmcaeZAuc5vW7d8puuv2EoRfEkSN3Zeavt3W7gZG3q2VypVnfTC84jjpVLgABLnKB7QejMGbLVp3RQHWmebV",
  "key18": "2Ub7CmaxQ6wiU17xV7tKzunU5agGzavTGmFS19DfXWJxr6iwhqTvJP957GG1TXCBgeZ7LcYerXWy8ysp6pGkDrTW",
  "key19": "4yy3FBMxVvzB4V99wQehbuTm8deoGN85uJGSzupZ8U4m117ej2DdsfEZFM3KWYXD1XuZrMAVk7Y4rwUSm7NX8yjb",
  "key20": "5sbtLzmDaUCYE75uwKRvSZCPUE6hi7aousQhdgs5X9WnBjfcxxzkr3gfbGubhzPhiNZ3CdLGmkPRvK9LsQ3MArWG",
  "key21": "4U1wvG2phjMeLMP6ZrZL7P8EyKr9ofzReCvT7ufqDKGrapV65EPajL7DCGCGzKAruso37UAUuPeforudeE91wSkb",
  "key22": "4P2pePmYQ6AyZKJVEA4ByHYAoTBm9CAuXtfHAtShHEg65oDgNZXUKY2SQshHZN1vi1HWxtVi9MyFYfcvzVvoEi8G",
  "key23": "3qsfWzjbWMRonPp2URKBUYPfAHVbn73f24JDSn9DqDjkNJJHrwLB4YXfJz2KNKZF9v6gEWL9WdRagiFn6Vxa5hSE",
  "key24": "2ZiCQpYx3u76rBroa3vCSFxbXBERQ93a7ZZXYkSVTqhMVTX94AexDR6xyPrgLww75BfzenTpX3jyVnSa86RpKgq4",
  "key25": "4UN55P4oftThWo4fWtudKZCDG8GeYUh9wrQFLTP3Z9VYiP1tTEw346WJogYkqnGM9MakhfHi7jgozbC54NruaDiz",
  "key26": "66sN9FuMvVokhvqueEgqrpVhcJ8UUW2zcY2jXeGL5hg1cVh7qo3ifSeL67S6qgAA2DojZ9LmmdCAmZtZsQDxQcRT",
  "key27": "2XgUyHkVfqZXemV9zRNhgkYz7ckRdkSC812G4ALTr2vhVFWiRHqURLondeKBGvSzRf6HSJwMtgV4P3V9nu3jZicR",
  "key28": "9Y3YxpnF4hw3weTowBUDLH37mCUQb2AsbnYLTHTcxYKAthLUKasaxYwm8NkdHdMnkND43xR1Tssgg4uuX7FXvmn",
  "key29": "4jqj6m9Nq5bukjhPFY691zSoDbVfBNYrCHAvBVAGNLdCME3rVUzbkEdRUuBrdYFs7zJRSstetcCaddaWJs2zW86c",
  "key30": "2XhrjFUsUKQgm5uht1DxENLgbqT5hWyyVMSwJ4oeesY4XBV1ugSXZRG7cJcxUS2VhdQZeX2E2i4xZTM39kdmUa7n",
  "key31": "XBpVQn5wfU8tpiGDUjLhFYijmMxmLqotYR3TbS9A4tg64byzzoLTpL3bXURLLfo3BhdL1TK2UUxZnTfkffCzdee",
  "key32": "5jyT4FEEcqx6RFUX2wVeAyScZ2VWgX6XVj74uqStMcC8z9N6XpfbLZN2NpDr77hVMcJqs7WDXWcKNCZ1osfC7HYf",
  "key33": "35awbk5yZ7L7fHMQcFfczmQaciKBcsFhEv6A2Kngzw71zxMmor3wzqtvrdJqLDqBqHxBWngRhqqk6veU6Xwf5N3K",
  "key34": "5iUYpMQUEiF9yAp9SBQj554sezPcC8mjWjoEUN1ZRMcCPvHU3AfsgbcGR7PVTRh4kRDQL9gTvFBqjBccAFpF7SVX",
  "key35": "zYuCrfkRNTqvN2PczF6P1s1N2abnTpaCUAa1e7oa949Zrmbbpyg2nj1VH1sHrGBmb8VRQ2ncWHYLaeDEEAGFuUP",
  "key36": "2BrN9eMmE2ouNULYDXnbYf18Rr2E1NuE4pMafU8k5jww1eT8KoLpJ2EdLaFNXV3oibuH2mGh3fu4U2Pkmte4cjTM",
  "key37": "2GbWk2w3onordMCxQQJWwYHjGbRnYtFBS2e3wywb2VkkqVcUuMbtdrsopsqw2EyrJrmfMfuNfGoeinfpLsfeNHXd",
  "key38": "38rPT4j3VTyimRFa3FtkXvwcA67fjbUzrjxzopNRtkzdzHQXfYkDZzYMbCT9RbcU1mbsf8M5zenP5PJLMMhDcviz"
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
