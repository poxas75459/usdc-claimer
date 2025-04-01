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
    "4XcWwnPZF78AfY5hCiYyjx6yuBucMuzH7sT5hKRg5jkeuB6Uqba6ZYMkY6J5FZJWktrz7kdvJjT4pLT2MbktvmsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eqjgFYCDNUEKiTFpjVKEn1HJV9ZyDcyteAGj8jUKTpbj5RdnomHxFWKou5ESrjGoVBDm4r6s3LUfbWXW8bSy4zj",
  "key1": "4znwyF78KD1EF2b8jbdFtLv5jCSSdx2mU3535QZAz1wEzS1mxuPxY2rgifWUnwYvtE3Kpo8Rn96abVvFcDCC2mfS",
  "key2": "3RcU42dZ5L2A271tx2fjaCF8GP8ZCsWqhuM3YqN6BGoBW7aWJiCuNUcT1rhbEEjS6znxbDfKKdMrWP9U6vJKLV7n",
  "key3": "3SppymuapkjG9RJPTcXNwy7AJWMhHFspzpvb3D9ekw31Sst6rLVwc3H1f8ajqBiNpT992fDWsMCJPWbQ7WjoGFED",
  "key4": "5GLk5H6rauGqBZnHXThV63KmMrn4HgUL5nqcigsj6a6yFfya38N327q6qogmTqxTbRVtGs29tmPM7m94SwLWcghD",
  "key5": "2MF73sRdhqwBA1cB2bR2pdcZ8xMDCfeikeBU357UCg1gKo4csXENPDJQK11gzdz5mFPEDrgMuLVcnHqGX1DS5q7K",
  "key6": "2VRyRC9boPvS1MhcPpyvmQPtj5WAAk4QJSXFuWhfN19nLsC86K9DZke9Zeu66LNCo5d9X15DQiGBPKp612D16Rqu",
  "key7": "5gBdZ454qLrEq8beTpQ71R7RStj9DPcTHLRrkKCYN8B2Y91BkynKfgGEaQqMMsgRKmCHXniHj4NJY3E9qDzzcJMA",
  "key8": "YkhUEADyJCetkmedJx1tU3h7tbtkuKASfVRpnyRsfEMkSCVR2QPwDiFjNi5dmNKC3EoJQ245bNhcsGV2tu8Kt1g",
  "key9": "5ybAezdvdz86bohiYpsiSotbGSEQX4SLaRUJSAoicpvjHSaeYqPDZbg9GvRRr9DiQtZKkBpJ4Ue3ALU2Chg7HE9T",
  "key10": "4JZ4CHRS5reHj8XtLwCth4wxfnGt2EkxgHbJK8JHw7BQuXDvcDRMMTfV3CcbYTDSfHE2FAV62Gb79TwMeESXnseX",
  "key11": "3cp3XK4ECUUMhEuXCw5yHQ1otXn44tJW36a6ybcHDKrKKUPWkcXYKEePd6CWMU3eQRkfDY3eN874f1JfgXXzrrYE",
  "key12": "287VGssVFTCB3CK6fyJk73dmQFuGmeJYdLFU9AcdYkxWd58LpkwpnfAocPojhbxvR8qsYadduJAsP4gcEfXXFiwd",
  "key13": "4LEvvrosUiNDqcpAdtn32zaWbUt87gHWVe4dDad5xBMdH7S6cZnEjNRgDS9V2TKxcGGoLgV6iBVuaYfir1W8iqJJ",
  "key14": "5jLkbvf6s6zzsnxPAbKjtujPZZVLhbnYbLJifNwQuGcSD91zR84jtAFRtopxY22z8ArsUHZsidnME5p68uES1EBY",
  "key15": "Ymk9QLr9pRzd6e8BsfeejUxAh31qkZ5Zne4tfJxQV6KzUVHVDsJY7qcMvfJDeMt1vjbiYsmfgo4EFXDrPc9VAq7",
  "key16": "4vJ9vUf3jJP4cxmCoRgoRHvFD5DHWWvEzejpFgbEfDyPqLmt9iQdTJ7yZCngjf9p5wMYFQJt6Ug1AnbSMZ3uXFb8",
  "key17": "5mJP3BDTvvBPAVWUpLpmo7wNQAGbZ2h1PozmEHUU9h7CDLGJ7n8YUCFiQteNjRGqtKDLqp4jXJCpTpyjk1HyCcS4",
  "key18": "QTW1yJaauC5HoYXKv7WXnMBeUoVLjaDYP38Eoanx57iuVcGw3yZDsmLDkqookusHZimmjfH1e2r3PKQY9byRmjJ",
  "key19": "47peRWkiE9p5w3MHUKNqNsxtF4yoWGj2GRpx9xDszZe7mYqFzp3xMRR3V3Th9Q4iwbNgBfHjGviwurJG9dhMNrnv",
  "key20": "5X9Y9rT88skx9gzD52eJ22BrALnkRfbe3wMsnHcE5uZXzPZBd2eqYULhp9igpjTbhCES9nipCkCkni5ErgjZCfWP",
  "key21": "de6oPjYhFyL9kwKqX5s11LAVpWMmVMVYwJUfWmKUPj8Qzv4KfUxtU6EVhRmdmsyeb7YWP2Fy2ukTN2ZjssKauQ6",
  "key22": "2vdbj4WpwdCP62Vyxcuq5DLcX2Fm7XpwfwoUX8ihGkDaG475Gp55PRXQmkAkbXPweAhQkKBgNpPC41ANqnsh2vY4",
  "key23": "2yj7vRnjb7XGqecx48dXp43dJGT8EVvpgvLBG9MQeg4ftPPB3matuDdp1mZYR6v7tN7RvE3GqeFcU2H56Df5rZQy",
  "key24": "4YmGeDwDEpE1RujQ3BkSCqaBjMkSsbLVNpR8rxjJLNLTAVY2nPKb6ZPhBoygZF4j7E84znjgrygZACyKRBtNgyW4",
  "key25": "5k3yvx9bG1LBEvTxpd3MaD42qeKeQrwgwvqNqZ1Jk9TqrAMpg4BojMfyCsAtZWW7uXB1nwRrNFvgQHWoDbdGunaF",
  "key26": "2LKwKzCYVKnQv8V5Eru9hRVbvi5CtQZvgqqMMTWAEsGCNLVxT3zcBg3A5VyZvGF2vuJgRpyGBdMxseS7RcEKWame",
  "key27": "5P1YQbtLD1BWbR59rj4dzQZRBC3B93tqMwmbRrSBqvhFu8SZHY7Kua4wsBR1sL1oZcbzoczx1CR7Q5917Mfx4w4q",
  "key28": "5zuztvwUCMYP82w8KLCg2tbb3huZmJAMpfzFYvLaD6xgfLb7d1Yt5Xyj6dBe4bKbBMRhPkbVSXWCcBxfgC3T7Drb",
  "key29": "4vwZVhH5RMSCbsg7ctNZEUDMMZzHbfgxWRE46CpcT7iBCRe6PJK3eqh1WtnqmPcyDncHkR5RcPtwp8EiDnbU5GFZ",
  "key30": "XmfwSdhfuqAt7wc19KG5MZUGQjibh9FwdZNe5eYfA7FP2Ewe78VdFfVXwLq5sACb8LSVnKARrxa5YpM7SyHri3B",
  "key31": "4NY5nV8mG92hJ6otYWWV8Qu4nQtacW9HHqAFgqZzF8gY8N3VJWpFXSPkBPga9Q13DETpW8F9d71nXEtBixRtYbfM",
  "key32": "NjnozQxffiHdL5ufKTXNAJeYSydKgTHnWyaGqV9sYWBHWNFocLLcW4mepoyTUkxeGGTzzYSmjnQ9FogXBx2ErKW",
  "key33": "3E2kExhjyd1jsHz5qae4BAc8wVRG2GneYZ6nfk8Q9AJQQu6k4E8b4mah2oZDf8iUrapgzCFr7xG9d1GusJDWksoK"
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
