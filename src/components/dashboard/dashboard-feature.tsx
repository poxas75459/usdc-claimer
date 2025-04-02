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
    "5J3wUi7X8UNwk9K9Zt2DzguCMufyzzURVdioFkQ7CJD11zwiDywj2obvfsKfxLNP1FNuyzrUGvHNrcSRjBqaoDaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WfjJ2EQ1PSH416c6Mim1by3pztQk2hpLfY51JhsPuD4RhamDys4g6DEPse2kd3P3yetfqe6MbvNToffZNJx324C",
  "key1": "4AynRDpzFvfjXVGmSvNNcJFbPx9t5c1y3fJhhWEnUPPqZEP5mZ4QF5BtJS3GoixCh6DfkG2CFdiZBgEBwPCVfdhj",
  "key2": "4dNd25DH1KHu1hFrhh9m8Epi1XDvURmBrQPXHETtu1oPDr9jX7JyFigNjieBBFBPJsRFvbA1xmZXgPXigRfdwhDd",
  "key3": "3W6WW5cXzwmTXPRciYLkXKzDuKG6DPYuwKqiydt5tw2WxwEC2kGnonQcbETeCtGryX3RXESLGuQBfzRHKXArc92k",
  "key4": "QdihkZ6RzmBwnAwu7Jc55HR4N9FAm9sqdkDPJLukvNKz7fQ61KBaCXc9292cqit2qTzEdoBoMd1WYHykkTRFR11",
  "key5": "2wkkRKs9Lqk3GtoAVf3GG579eRgxy56aRGAFymcd26DwV1jWXXsBRVWM3FohneUA5BWbEDZJtYtdVNSbqF8F6Zx3",
  "key6": "52BsgGeBVPhaq98eyTuCHv1iTpdjP7iqBphNYPDrbGzah1WGc51tX17gm3syZYixrNz16DkrssLjq4YSNA2moPNL",
  "key7": "33PmmCCsnVgT6hfrZQHTPwmWDLPGvVoThvrArGNnPXbR9xhXP3M7JPLj451pHfUAAzfRfqKyZTrdorfBYbhkrZb8",
  "key8": "3bE5Cb68wDipsYmT785LFZ5qrSDbDXoWR2DcxxjUK58TWg1asZDDQYf8viP1C1mQte3sgxdSpTExdRLJF4zHSCVr",
  "key9": "eRuFyRaKYzfARRSnhuwpYae9uQtc7CL4t3aMesbMUCRhoyAnvDd8BRRTLutucPBFDfWpnrXDN9zTffPNNjQgnuM",
  "key10": "ogTGb2DB49unRvWtKskv5EA6SeXTxTrrJhPb7XxuxGWU2r96opk8S54nvm7zvWYZwCwB7hJyGZeZfnebhg5kkPq",
  "key11": "5LaAsLsbG8XPUKrkmqh6DekAgzGDLpQMUp1m792nD1SihJfDWhz7B7gRRaQM7F3rtFdFPEsisDC3qoH35PViwgia",
  "key12": "31W58bvBttMUGFAPoSK2RFoJSrQYn1zZT4wJKpXGcHRBjD6FgWuR5wmThkfvrLDU5te1syrDhYNaZFJzhnrNeNPy",
  "key13": "3B7xd9vccs7C9wSMrGVkLso9sA3Ji23cWrDqBTVNZFTwURvqYxftu7k7bUWbdEfohnGvnEQgCx7RFSUnaKt8yMK8",
  "key14": "6nGBmVco5hgvvVa8xz58M3u4vYNpwnGPD6a2o5HZpQfCY8SjFeK24Fb6ZkJHDA8t6ryg2sW5tgbszU488Pnn9Ks",
  "key15": "3WNEEsf7djLPxiiUVPz1gb53BJJcdHtQMZFTr6tsg8b8a4PULajnMBD2sKVxFhfwQ2CW3h52gp53h7BTuH8GV6Ur",
  "key16": "49U55gYKyPEujgibfyK57cT4SH98BX2fksE2b7jeee7FdxtBQT4PLRcnukifB2NFJL13hnN1QNn1i8yfxhyHpQq6",
  "key17": "21cANRWoHD99aZYA5fjbBD6yKmwHSLBCsM94FQovJPMGftYaXt8RXLjGuJxVGZSSMM4wHWEcExWc1yoKDTsrBQHq",
  "key18": "2a26fa73jt6XzmZvzS64zZiryBdpLMHbYrCKRNoMUK8xPbztLYvoL9tx7HGGQqvzbqC1WAw6WDhckYkv3yTPUD97",
  "key19": "4MokRDPxwEH9m4egZ4UmZPWrCtWENpsoafUQAnBpNmLre49QmdVjmnBkSHzQu888KQ8pMBkxd4sGbqTbC5ap9ouP",
  "key20": "4Qzff8JyPKKFYPt2FJtfYUVqwtYkboES3h446vRusV3DH4MY9M9SERuqtapxj8Qee3DG1kLnwxVxZWWk4iHaZVVM",
  "key21": "35QfBPhaDwf9LjxUbqRoaqurfwZhU6wmY49rKGBdvepKXFHXuPQ2zVJGEoDF1uVJhpcsVCg2F9E7iLKdnWLNvpeR",
  "key22": "2VAaTh1M2LRJDRRcjyXqdnGCcHGKczBhXhrJuj4UBLLV913Cscyc4vSKMhhkDJMA1fe6tSLo4yBHbTFCQ8xhHcWn",
  "key23": "ec2eSxj6KaEHop1DWCXV7w9eceN23CBjKxwkgZhDgKDrvpDJa5Y4BCSmBe2dRRq66judX9uWj6beEjJJo5gFBdT",
  "key24": "3PjUwLvDGbfr479KLGyB68r7gM75ZXkRstkWBq8bVmN91LRnopfHM7xx4ntwqnwAQ4Kvy5a1f69YmkaTjWJFn59U",
  "key25": "5Ws4NC96RuNRdPKmRBUi6HF4dekdoyjhskqjQG6Ffx2LPQpHYTVerfQo3qnjq5KQgbJg3GMwo4BTHEyJYYo5DJzu",
  "key26": "52RbUkZJwad3jxWivvNXuL33NiRsbgMyQUWRen1kJZUka3rvMgvkde3qV8QmvnbFVhqatq8xgjg8S39an8prwMdB",
  "key27": "4Ctx8CjR8wie5dzuAYikW3vQ8WtFJ23j8e6EertCN4593L6JHRqvLemk1dL99DhBGh39ixAk4PGj2Nr5wzF2fowy",
  "key28": "2CykGxiApfezSuyZeDfQHjUfAKgWaiZu2jZrCPZ4rNWZkVtcX3FLbBJ1s7H7ypX1zhXFiSLFJfX3Rf1B1DLRR651",
  "key29": "2YSZS2LrSVfBCuahiwUFFND3cXvVRHqfkTWvN5TXsc4LQYwgePA3YVLEKMDhGJYvP8JUUtvhsLTT4CzJ7rEqVadj",
  "key30": "27ht2BtPTQ1iYcCXWykHazpRnAU8bCBxV6x43ww9SVPn4jfr4T2KUx8DKFeCbrHfAaGUUrGkZXYmT3qTBpcsQ1Gd",
  "key31": "jHiNzvX5csHscawjnDEB5NP5AuNjKpWgyGqAgvSEoDZUykvZcVKndkGzgYCuPVobn7j3nfhSPTDpmzLVrfxCxUJ",
  "key32": "4Ev7QQXWrYf966xaD7iqUWotWmGBX74MDAiYbNCgSV42mCZFfYUiECQ8Rg6g26y31pJMyuWN8x52wbJhibsJZjr3",
  "key33": "3yCaNHk7uPt6a3pxzzHAm815tYw1DWFKzUiSsNHYV3sZS8gLmensB8UzDYT7xSQveo8MbW4MtNnPbUrZxnM5cSph",
  "key34": "3BjrFjpgHj4uB8DcWuSjwvvgLuhPHP4qStgZfvwhowZhyytewTq5PRxYdSf9k3aLbwrYmW1A7XfHzRGdPqyUWxLT"
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
