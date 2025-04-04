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
    "5UfP3sDb7Yfmx1Li7ewXScgemVXhX7kSU7HDYT2E7ev4ieDSbo7vpsQYSjjM48YHyT6RxAtCjqaNk7Wb3cykLjkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mM9A4DPswKHu5kWF27V1UtNYLVHDxfFM7PQydskUkqxkzQVoetTXd6fdrVY4DANkB1K9osTuWNN62XSW1qXeK38",
  "key1": "2iNmFnwL6WsHKSHabjmR7QHqUnUGPNPdM1oZ2yUb3hcFpyhr1YMXQ6psKdjQmFfP5gFsieAv71aUYp3BV7CnBZGQ",
  "key2": "55j9zZNQrAJ6b5phSzjrXqveRXC5cShWVUesSbXboRo3GQM5bWMBSFmNPaQYiVSBaauD83yoTsV6Nt3g1uNzRoiU",
  "key3": "42jCVy6S5jMgyoCUHd1Nts98iLg6cncBNSRMzG43XnozsmRGm36BkayPrCB8thwzooZ9xn14RLx2vB6UkdNU5U2g",
  "key4": "41izsVbPsverDfyiNQXNseo7xWyXoCE8JrBwoM663qaNqGo6t8jGGbkn73PNNWuEQbwmJAJdxDYMWknjtaykUF5n",
  "key5": "312UyGWAfyWEASizsU3oEbEzh1QJpoVjjHP92LQdcASruGFrFMWEgXxLMLe9tvsaSyheWdHMtPYLYYdTG6FRVF5N",
  "key6": "5J8Vnz1o7zyqeCBU55B5RCb8P9Wcpeu34MpBr8GvHiP2bEN477wXQVxmz2Wf1XYJkJAhBpehYy8gkdmF9Y7YA2ke",
  "key7": "3M5gBqdJ3dZYB293DwnjXuaNuEBNrpVHXF2pyUreTgJ1tBxq3damFEcuXCnnhrQmMwLt2aBCbwQePCcNwo1BzviT",
  "key8": "2TPgWxcseDYDuqdLP82qsEostvpzV4yu6qe9pogVi6DpqVcduexSFu7MmEyXxV88ZhdCBdgC8CZDdJNWSfpyiA6c",
  "key9": "2g8EHcC52HDGWMDFBzGhiFWFPfbQuQ11kssNJvGvznHZJw2bW2TxMMT9zEJq9hPXaKWg1j9LXdQsEBKKNjP8UqRV",
  "key10": "jwYhRpz2fYygnJmhmmhVtiPLkkhb8S6z9JqPY7BXHsPrLjYfTawadBLte9aSCV67eSjT1KPtDTTm8NTp96xBqSo",
  "key11": "5cWyTWSvapU17ktd1siQSnM9Ur2BnUduM7PwWgXWTLT7aVDU2vyHfWayZ48sbJ5ZPsTD6RQwouvwaLPfUYtKMP2H",
  "key12": "35hYANHs1HAdJHE2rThvFNXmVfSi5DNPoVp7exPWAAXxtpomECvprFBm9Y2p8gvT5tRgR8FpyBDLd6BcR1bCpawr",
  "key13": "2SSS31dGWdysdBeyJM3zGcVSvHMi8t8xAN85ae75J6hwQHoj3P2FsRgfYthpLG7p8jLmZbzMAgL7M9Mopdr6TUGC",
  "key14": "4nrmwFVQfrq1TNk8SdqmoKMWW9bim9RKwk4tTUo2TdZzoXycMKGXdajS9VCCDH1oWUpgHVCRHfePZLKd9wrPe3R1",
  "key15": "3aVXgHtqiK8cBTFjnvjEYMoXJCKQUkD8H5HeFT9mfeN2TS5SywJkQbwA1QryvGzDSbiGBoznxqj2ahayFK9C8yEq",
  "key16": "4YWU4aj3nDgab9iiuAo91RdPYqNSkAVASnQuVVHSBN1bqRTHfHwHzbMK7zxrFAXjSRDzyA1wkjz7ttUdiLcKx9Cq",
  "key17": "2zZgMLgTy7Su4mMSbYoPnLgYeyMSLYEUGkFgm7VthRTZb62s9aJMCozzqRbaRN9igbyPxKd3Reweni8ZNjAkFWZ",
  "key18": "5N8UpfRWfnDdSU1WjtKVSb87i9f4Maav9Yn7tTgmJnWY9ssogzCUfrweWRiQsFdo4ErJvK1PMqaRiK6Sfr2mVc9X",
  "key19": "4PgEW7DiPg7CDaRmgDqCtpnthJSPTHR9wqAXGptVdrp9Fz4kQHFcYVCYhALHKrn5GpqBxJTeawZfpsvQS8yZFWBV",
  "key20": "5skuesrgyiqdtV6rBveVzL4SU324mGKXsJmdUQg7sTf8FFz1jd8xDtp23EhYQG3xzN79qDZGjd54QNpTGSRZgFbg",
  "key21": "5BT79HYZMWwgEyeBuiNwZJpwy6W8e6jnJEeqSiQnpqdpQt5DsTi7LgppcSMLGRomxfykyrmafbWgvKsqNfpW13Z4",
  "key22": "3XSAgAoAhWUUW6Uxdqp8SNuJFJPUNWRwwa3PDi9up5nFy7dMmxBNtzd8zx1yiHAdyYSHYKcsBTxqTiDMjY5h5xgE",
  "key23": "49z4Kk5qMHZuADhMHNq3pQMj6vwJBPLAGajMNy8baW34MHGmVf856W1Secdf9sMo4PRxHoRMLgqdW7vsX5UBseVM",
  "key24": "3DLR6WXUSFDXnRZAASCzqz5RzoA3ZZtmG5kVTwdKvpkg5AHR6a7Dqg5PEWGq5XEFe9c1dqAXdoDb14dePBi3rH2k",
  "key25": "2xkzz3JKBG5QCYQsovoos6tgd5GqckZWLo35wb4fBaRTPdeYY2EdJYQKJw7VZudBAL2DdvPmHPrEJ5QK8QaNk6Xy",
  "key26": "6rg4tZNSpQ2kD5m9eYwcm2Hiva4kRf5L6yZFyTzACRrErA3yPJv7NbHLv9QLcSN46dNSTCMpN19NZCm5oRW3EMa",
  "key27": "5Z5cgq6k1c7btp64eFf2BxrY58mND5TaGDfb8jBx8MBpB5T6fJMDmhgQmTSXEyHFyf8RYxfZQKzWJbYbiF2WA84a",
  "key28": "3HMxzozPLNacNKDgNWtU8cvJCb5F3mNHuJq6fTm1BSesmaHpSdUAMZe4ZpPHsJ5swGcRzfmiA7h57dLdMwBMo2fA",
  "key29": "5Rg9takfYCQs2385mQmcQAnVtydqBzue9pdsJbbK3WPwPmjRJfrkesHBxQstqfvJsN4ymx8pyasJ5a9vm6sHs8yw",
  "key30": "39kwbGXiW7Dbc5oFacjwGUdxq8QprKA6aWF83Ga72oMKY5sbKTprnrYAPWhzqZBoisogSxyW6AgUG6zq8CfADxPC",
  "key31": "2w6fMKXsTjYcadDmMFPScwgpyykJHyRr46a6VhoPU8PpmevmTjrNuAqnui8Heg1nySfTdyJBqy642j7Lm3ChPTdf",
  "key32": "ay6YbTz6VEbrNHh8SdFRH3oxWWM9iWFqwMcqMbGp2aFZXYjpahTEwXjkxoZp4yVyxuFT1kgVtJXL5W19eAtfAiW",
  "key33": "4y2ZuKEaXJmxt9iTGywrMUMVQmKgY6Qo3QQTNYMnhkjZKvBcq1zeNy8NoWmEyZTan514Qa9ZD14VGPsEhz4kA8n9",
  "key34": "ZuDoSdAu4jDHrNYoHKuk9H5NwodxhdhosKwfpxk1bXD8etAMGVTqfzV5nKcQ5REVN4K7vQq1pauxKMfUpTcx46Z"
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
