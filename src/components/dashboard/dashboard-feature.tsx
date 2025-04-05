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
    "65yhZqhZwP3UGxPx5d82u1KrErpjdLUaBeUuHtt5gkJ17c9UsPGg2LZrFj88FvjwCorGK4A4E3jrQtHwY2q1Zp2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57pwoBTmSyQkzvqgNQuyJRZ4dj32HybRxHMvhRgFFqx1xLjJgqwzH8cJZSdsds6xTjWeHrjYRNftivMXREXs2RmH",
  "key1": "4j9NujsWiLZBsKHzw1oUV87TXt363oAbTm5PDcvAYYVnQSTb1gc2ofiN8pqgLgNmrKPRenuaxwSe5drfYWsUUgN3",
  "key2": "43CwmKyE7TMQB421ieYP6E4vSFSPikHzmmwfLTj3Fg6GQ3xAA8JFQLXkipZLqyjGjJDPt3ZKnZNeMG1NRaj3GLuk",
  "key3": "3h53HUy4fhSnTBGQV2zguPEn5WkEmv7GX7DLy6k45QNCFa9dkAUz1XKWQEru6Tym8B8xKhjZ3MRgBzrZuMRGpM8A",
  "key4": "2ZKYUiKcVpPEgQKVzBau4A5ANkLVRLXSm8ya9C8J4PaT5EWQLSkAw68KCFNsubsYDpSVGAk2XbTcMerfjVwWh6Xo",
  "key5": "4qLjhVhzKfaQP3a8SzrH5tLXfiHqFoibHmEjC5UDvk28tEEJLfud85XC1kGf8umPunQHiQRV8ybQqNQGmyBEAhHf",
  "key6": "4cCnagukFdURoXvgFgaX5aUHiLYGEiT1LSxgTqMxXw17MVQ8ar5Ts81auimwdaLL1N5Sqm8CSLGJ69nqS3919at2",
  "key7": "5rr7bLgaKSEZPYLBCiUVdm5kVtGkeBK2nnnKpZQiq3SWmmHYknhQDPKCQcrFrxZwfQurzPxcyxDuj5rNq64X26nb",
  "key8": "5FSMLaPA3PriXzBejZ1yEZvz9fKKMD7g1yfnbGknsGznPnxfUrP2VW7hesdM2wzCimLfC2xBC9oqhYXgg1Lf6Vwu",
  "key9": "45C5zxDPwV7FAr5pJwenSoPxio9HahWemK68HCsDkei53WkJNnMNEruP6G9BJpU1Ng7DDwWtagKYB69WDDiVRP4Z",
  "key10": "3Yqo7cUZHbtqgCmoH43G1ChVFHoU4EALgb5NsBnie3vqKKz11YxhsR6sWC3nrWK3ajgtxFNqNRzP6yVjenmhCnTw",
  "key11": "3VbNepSnXh2ngvakTDss5pMgbPPxj6saS3YTH24wtu8JBZR2N6skbWETp8rdhXHcL3ikHcwJAfuNdrjbSKz1otS1",
  "key12": "3gaqggBP2sWyKZ9TWZKmrtdApkmonmiwX6uB26U47dyw8Y1kkUScAvqRVmoRM4h7aESvCKANbGH9qsS1qjhdp45N",
  "key13": "2qoXGZETA3tMqk2rzr7DnadGaG5g6AE7C8xk2CqPgQ5roPDZvm2k8P5QGcPacY4q13HgPciaRo4XDqNtu2mVDG5g",
  "key14": "2SzJQ8ceAhvRq7zhetESbGvAJYjPCxggaLiUamyewL2fqMkgq9KZ7psPaBiTxfqG6Yq955t64CvYdNLhK68Z9qR1",
  "key15": "Cn4xiA1CqTwKQD3SV5nG8dJQQVRHnKYNMzXprKkUi4Zgmn98cRyM45vdus8nGjcP1awT4hkrtEZkQhDZLnvzmci",
  "key16": "44wuCXMgWrPhjByhAxBuraUYMZrA5vPb5MdKfBrNUKiHG26wxAhyZY7riHLY9616BbWaqZzKgD7WysNmGh9hWav7",
  "key17": "3FDYotstGZ3NbwjyZ3MBxzkosWR5DgiqepkZwTiLS1Ane552FpcC7ww4vcuf6AHnSp1BosFix69fNgJrymSgBRpq",
  "key18": "5ouHDfS1NcD8K1xuEW8454nzjscwozB8NZMd4jFBBebmkjKePrUVcE76YPAvXvLQhGBGeE7zW6r7RjVMJg7iUuPT",
  "key19": "rbXaY9T6UiDZ1XwiP9MCrdBESJSaKayNYJCJZH5TSAcpXeejdX5KT8CCT4xoE18RTn1kXT3x8bWCTb2VV62syry",
  "key20": "4GEq8Exv6VQZdhDZgakxRnSjBtGEknaqYUyv7tb7yBgHr37VAi2kYNhCcfv9U7p6MPDkMFucJTvcP62SYLvYEPmd",
  "key21": "3EVyDYj93jWrL32Rui5j3neAyWbD4AAfKa7yFb7PLArzKFfHBYWThQZFjzxsoNgBQd8X5j49UvK4BNwAeFq5CK7z",
  "key22": "56RXxSMqiqyX2NGMBqLj3Mj4eTRq9yiW6yxfYynycb8wvVA5vnQYW2vDyccXyubn4LJayM31zUuYsEQSmjLWhjBe",
  "key23": "3QrAYteDEPfcwMUjbCexV2bt2ikguYWNvaZ3rTpTzjyxTPtWT74okByoLFJ6EtVPA9UKTb6QcfgfimdXstw7E2Fh",
  "key24": "5xZGyxrQRv9HTWe6w5mNvYjEicWM67CNHF6HR2KPWLGYzVtdPKAFuowTAJAaxeQn53FR6qFdJEvkJVv8oJvDLJSg",
  "key25": "4GXcEGTREYqipVeKEH2PP6xNFGr7ancENqWTUiQ8hM2rLp2Agy3qLEqMntAGQhLKs8roEWDMYkmNg7gon1EVoxrv",
  "key26": "2qQ7kQjs1SXUuMKH2SCGm6fTHX8PG7dwNcLQZAVsd8Wucw77gWtUxL48UjENXoteeyXJHuaZYZtJnRs1qyj2EUqQ",
  "key27": "4c9U9LXrznH1JQgqq9Dq4qyuujiZGHEL6ajb9cYmYFc4sFzvrUY5DhR1zWe4Zq4mEz26b4RVwpdEzvyjMED4GSeR",
  "key28": "cHaDdoxRUZTHLtbogBH5veEYMXZG8N5NLBSQUWhgbqKZx2y1LewuqSAcBMQMnCunXb2afuDhqimUyN1NTQwdDzv",
  "key29": "58Gymp2wVmS1dZdKeTHuND1dMKyrKo8i5rCh5aDiGnJLkcfhmfRutsayh9sHWX5xKnAf5NkgKbh9CxUC5hyNLVjt",
  "key30": "yktKbtcmcZDaSYhwJ3onDBrUXiBV4FP5o4GVguTVesJvagjxv9Puh5Lxns71Wht2tJPStFE1PvHk46tVCz7T8zi",
  "key31": "5z445gCC2sYPZCiyjtpAnWVJg2ruu4jjk8uyVdHatvFzVp4TBg1SpqGXyUas1zDRZhezj2tdUECDTZMY889iQUi2"
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
