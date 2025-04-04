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
    "3DE9F541MvrWGycuX2s8KNcUwoMecP8s9b9J5YtzvTLug85BEr6ZQa74xG6EF4BMtFauLbaGiZn695MChCxFNF2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eSou8wDjuuugX9wfQ3EMdLwGafDBMwRnecyAQ3wMiLQkm3ao4YFWXvUe29pmNGzkgbgSrM2Jsha8Z1C9sP58GQB",
  "key1": "5b6kMBdKLsk9HaJkEdgMg6mecFccEW2hgJHLb5vSxdQgSagsqx3NYdTvRYCHxoUcW3MRrQKP53RpegS7VNGbhsdS",
  "key2": "2UAz3Gu1G8V3sMmqdBa6hevnrtzzBmMkHUxxTqDkW5ha5s774NPTMvCifYniVxHyQXC6Rgqd1PbXq8w26yeV6Skg",
  "key3": "24sZB5AuspdNPV2Jjr6LcGz7FWzDanEEe25o2x81AdxAAwwaYqqZYEpJPgp3ez4qFUuV8Z43MqKXnfu7Nc5SndeR",
  "key4": "5e4nNtsHR8zTYDp5eHMzqwoX8X9Rgu74kccgEdhd668tHqYEgP7DSxA4bSW5NLD2Cuvrkf9qfNx8bQzQ7aMtnK8d",
  "key5": "5U3nsSHuBGq7kkoP85DoR2vMJxD4FvQQh7miCiUazENvgkWr1Cr47umcKMBpxnrakayoEgLkUDsXEefRgUDCpSrt",
  "key6": "dhNgDLpfQLvLU9Vf1V3ZTvXwHUobG4dv5tfjioNk3G62nEuRJjYMFCZPnH56WS4vc8UF9cDMa6akzs4gpqCaZ8T",
  "key7": "m432AcvHaiUwRF8irnrTxvEGUSo1NFMVpw9eqz3nxd1WzGCHM7EQmQ1aCrAuSbYFE5tAUAg5GUtJE6Z7gwe2NXo",
  "key8": "3QCwqnKUUWKK7YTdi4ZqFS6ftPXAggwQnX3S88kaUTpCnCYMKrb7Vhb3QTpXzxk4BPpBkTYQsuMYQdDGwwwTcCbT",
  "key9": "44fRPzAA3XZkQFTZ4mtGbd2DuydGkeqaUjuaueXAa3rXkT66eNiRv7DsRsDdRPUq3WSGu7G6uVnrdGjPF3ceVaLi",
  "key10": "3pnxxD7NagRTMvv9Hp4zCzsx2MQgWfeDAmArNWoLPWGbKoPvcRQe7USsnrvnktjKaLZq57pskpCkQwm8eAwmsVrG",
  "key11": "HXN8FyMtn3d1JSztHSMakM3NKQXu189RpJZCsgH6U5f62XvZUqAbBhEP3vkbPLN8C8A6LtJh6Fd3EkDEMjZD5Dt",
  "key12": "FY2yB5axfw6UK5HhaR53HFShRg4NR9nFgrdCu7aTbpKNapqECgZTZU3bdr9Y5xpJ88J4hK85GRrnmasmSeczzWT",
  "key13": "4f9QznvLjDctY1w1hgvCCayHrAoii3jX6ePHJgsnxhqc493ewxEhyK8d6gLNUQ2LvotFX5Q71kC7ZLqMpNFymAsW",
  "key14": "5BTc9uVbV3J3x8KNtU6z4isBEWLSFL9SL5eBNBZQ7MDwyJw56uFNG5B7hd9Rj7pn4vWSuqTCsKNVuawm37fgfwFL",
  "key15": "5SLeGe37aN4MyhR2TWY483aWZW5HEavVFY8cVhzVCfPwAkZPL8GmXZayvGgcG1KRirrZYucveUTb6qKDx2dm1hvU",
  "key16": "42pCVw4JPiRk8UKhuPgoZErgc7YfaD9w3xSZouZas8smeknaLVbXRd2tvhFQ7crwe5VGEgnxN8XMqDvqTcZ38tmA",
  "key17": "66DfQzSkDGLdwGFZanB78L7jdXx7snt9J2dEK8JrsvdyHCVD5pjsQzH7sn9QGBBeBJbHpSkbUAADurN54upUBuCt",
  "key18": "3gNACezhzAS6qWe4VPiWGpdPLJtoJyGFeQcFjBnRFfvhMHSoXCxSJiWNy4aAS5umfMXpYGo6D44TRnSN7S2oSnQH",
  "key19": "4WXm8dXLACB2X7hiLW3yTQKbu2f6eRYaAyGWPoWfYtGKkQnqfMWB9jDkUZrgBHfeFnrPQGxyDYRfwmnmua3BjCmV",
  "key20": "5jth8qrLZNhH4f8dogXR29Gbc62kWJSatkVMZS1R2fvDuq7dzdw3AzNrgz8X6RRkMH8QFBLBxGxCCoBgnVZNCbFw",
  "key21": "5peqJnYzPSwDrX6q3WehuMZSUgBvmgz9jdM93hm2LLdV2CJJ3WUPwyoFUaTr8NgkgN8akwFeYc2hD3ehGYGxYrWa",
  "key22": "SAvJYmtqHB91ZTsq9JF4qw2oxmojcGiWmSnadNP3Xgmh7MHkrLE8QHtZAk2988sLSWrfVFXWJXr6wQxgjVStioS",
  "key23": "31ojSmvMqPj9DsgJMckpc31robW2RzB4F2hRexbJp2hMafr1PDbt9Zy2PRx6kLXk7BPdhjND5rChhvk8EUNZTUgb",
  "key24": "4bN2hWfY4nDRkiPTGnax83P8AeuEa8hnsPCRoLXrxjBEJbCjUgQrPeAJXsKGTJoxfCJb9Qxik2eQFjFyaM23JA5s",
  "key25": "ZcTNEJqR3YCJGpJW4NG898pFEnCB8miFGNGQeE6r6H1ycAv9BzrbjfWbrKwL78sW2o7swXYR99RMg6P7LQt4WvX",
  "key26": "6486GWHSFp2i1zYSyWdsJDRuhKqvFo1nPaknCVEzcupck77ms7cFqknGsDLhjBx1PCAztQhgCs2XiSfFHemyPNwt",
  "key27": "3MFTjw6BKZcrpKkJNmxhKP7jpUGzSLkbEJb1Jz4HHMnhQbYQaeDEesdNyjmArUMAbwrZP75fBMkcv5h9Z44DXjxn",
  "key28": "2vFa1GHwUkK8EGpfBUqfkNWSzuEZ9qpD18MHipWn6joZpyBxgDTYB9qpFfoGWS3XntAXH2UAwbzxpVBhSb5RaN6D",
  "key29": "3YipMH5Hwjwe5CWqftGAQ8r8BafKaPvgopgPuMxmK3dCoMsgWddT1iBaMLcjw2MFpc4sw5wH1WKBuMXw9D9ZLdnm",
  "key30": "5xnvZBhsZU2Af4aLrAWAQxRsPiXsKcpeTUhKKeFJLUgMDGh99PB4QRveLdMvCgYcWKbywZpnmDUc1HH82AhWPCLp",
  "key31": "3bjfJTkZs7W27BW8NV4e2edZzJw7jdqD85VEKXuAakSZMNHiEW2Q3Ph7mDxuLFLJQqzRPnaYZHjwYCbF7zYtSniV",
  "key32": "3vag6JPCeimqrYT8LphosyBouzEWEZx1oegNC6R12FuZatr96meWpmM2dZmQTNfDpBUi8ixSqkYrxHRYHcTneHYs",
  "key33": "4WQXybQLYvfZGpa7gHipenmL8wf6r19kbycAt69WiaQAmLt9RdwDXoXnncW3FRTdffhmJsvRQKMwvwm8bHCyPGzD",
  "key34": "4JrHfT4QS1CWzYTHB6zwA3sECY3oWcVZWXAEy495JUpdQ6r89uK17bpRbLSDE28rQQPGDpUc3ZfgUwiEPFx4kkia",
  "key35": "37SE3FtiNnTfLPYCVbQ3yT84yaqfeP6m2Dg7VqFSvrjpbaKsMTJS7Qkwypa2yRD9XWdLVMLNsi731FcPHoTmKSNb",
  "key36": "3R1BL9yQ48t4e9rMpEPHMGTYryLGXiBx1Noc3snThaQQQRfWMvRbTiFzHZLXNVMRvywSDbfqocT2kynCsAQte9VK",
  "key37": "4jajvpnu6fxWKp44Z64gkWnghjKtJ73CUXBseW3xb7MdSx5DqzqKKS9fMauJune6eQaQACd9oqZc94tZuqzTgAMj",
  "key38": "4DS9EJQ8LtNNP7zMZHJhsCRahB6HHB8rNH51xrJaBEgqkxMPCvVPw5CLN1yucqRzsBworxuiAduLR2VPdTcL2HaS",
  "key39": "5NGuBFeEbBFGQHtVVYDboxcqtxNszJiWgn998qwy5r3UrBAKbjmmQWFofWYfZYc9CgngYdtySRL64LauXtjLmWFa"
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
