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
    "64t3HaYWxG2FTByCZRN41SPTVCVwnX3ZEHiXc9RSpqc4HtFq9Sdy6DnVwGUeQhBkEJFM5q22Yr1RMGQVsCgFTPwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fPSw7bffXgSQU3HXPjsy4crKaTUZCiKx6ErVr9WxexvTmQo4XW9NPonHPeYiu4RS3JvnmydZAApTXhPQvcV4Q2h",
  "key1": "VqQ7u7WdLxvozhYt4iRHoMCt32a6BrMo3wUqpFbey1rtGZP6nMxQWso2p3zGJ3eUStZx5Hrgi8avVGWvNkEErH9",
  "key2": "5dNbSja1vW4AzS7ZF8Xf1cR7ysMs1PmEgZr8XoY3BudaF9WsccdTmf4HUkHJZ79zsz6A4SHL1T63KjRoCDieEtnp",
  "key3": "4JDx3exGwiMzxyTny6k2Cw6LxrpceF3DSHanXZrr9QnFoWq3f7cS52nevgpZ4aojoJav1hNis3pWCeoQzduBUW8",
  "key4": "5ZJZ5rh6bG1zyhtRNYHoGsTZAT8uEYkhHM3EcYgR6EUduPjJck71fbPnZgjsYGhdQ5HXpRP88KNWfp39rnYUZ3wK",
  "key5": "3AqHN8SiKJATu2Dip5tf4XrfnNwj7ZjAeuRy1v3mBzGiCwCdL99z8GHy463sY1xU9cRnht3uei2SEtLf3rxsQyDC",
  "key6": "67hFSs47P86hpRZU2H9DxQu3zPTtpEPJVXxxsgrD8JuSTSKB338MvEg434URBeZd9fvJXTchpKbjc4uNnN25NZw1",
  "key7": "S9V5UmPPSQPXfsBT5NnkMhHWjTL6bUzeyv5FVZMSHEuprNNmuStPYprwyrqoght8ps69ThCCsBo4U5mYFFkBDAK",
  "key8": "3yn2gRBuicpborkjL4YEjYab4wsx9dYc5MPUUed9WkusrucLrcHtPySmS6AayBjyqvPEESaJGhFDpiYiFr9SByQx",
  "key9": "xLAksA7Kyj9WuHnShgLBjfaWchxwMA3AjoESF11srr7PZUkFHKZb7qLhGjR7q2TttxiE1fGY65iWinD4S7gHCsh",
  "key10": "2DNysRDPQxXvHodUiR5x2mT4phEPvCVvdAdGnoy2LnA8d8YmVhpuQZYXETWYBXzZtcAkm7KzbtQQWxU9o5xJE5u6",
  "key11": "k5tYmY4wkH3yzmqgLZb8jon45Q81eWtezYeSgjY17X32W3fEBG37zMS2K417aeUuDZqisiJXudCBeZbC6nZHZhE",
  "key12": "38YihLWa6fd35vwr4iRsmQinVV2tk6D9NftCgqWcZ2xLquGemxtRox8ftB1JyDDqGoWDqNmT7Wg7rVHJiEukDRam",
  "key13": "4VcdZKRs19HcrmZaDWAYNqBKkRowXgxC9SzKWwZ8hu7sdPYbZAC2LGhNLs94NsEpptvMNY5PockBBK4S4Uv2bmkG",
  "key14": "4c9canNCSp7bGfPUMM7MQGAxLWiuNjtUjznsFFsCKfzTQqQEQ9Bax3TDtYLkf3Qe8T3h3PrtU84p3srPEEC9Jigx",
  "key15": "NmXfda7Rf5hVgCmDMfKXboMJT5kYwacf2v6jFcCyjwvkWxb4oM2ezd5mWZHnE8s1hEcMZG4deNTWnSuwVrbE7Ys",
  "key16": "ZZoJqHZFHddSRZSras95rYm64tjGhonQ4d9DyA2TwhfG7c9D7gomZKZc2jeLk5XSQDa2sjEQEemPQEVgikHUHFg",
  "key17": "5NSPp3H5VMLfgywgJc2VYxSjn1QEZFKS2mj7acwgbu4uejZWLXB3R6p6dRHA8pgrR4erUE2hbsgUzeBvFeoxa5Mj",
  "key18": "2Q7EYFo2vSCCo5XTGwuF8MkhVNypyyzW3yK86D6DD2YG9EKx9YJ3dWkQPkZY7vWLmW2eX7vA7VzgPYSkJZfJsqVV",
  "key19": "2g7viqC4VMwqCHvZBPaPHiETPLBihg4XiHqfNeUnPBEmN1fJk3BXPBdRJhjwDnXHP9XzNnhKLvorKCQWLghPbGfv",
  "key20": "58SYGK4k2dxfKefax3mznStcrorZmkG9w6ZF5C7rWhNjEXHTXEyjZFNZoXobAHwSfyuzdUjeiQX3StDczUsU84tb",
  "key21": "29JKDp3TnXNMLZTSscUAjbvsEST5ynzC6ibL69RPRYtjMGNJvK78bCojAhpJuWrnhskhsp6TAdWUceFEcWh89kVx",
  "key22": "3jYWMLR6iLmQx39o1sjKMLwr8Bdf6WATzWubBNB3cjip1cA9ZQtiYm7NYerRMh6y2LpsmEi18LrZQt84YrvurHSu",
  "key23": "5ASfwdh8vntdNeyQD7ajkULy4sWEsmDxJCrvPTezxUz3K8wBhfCAd49bkFRUjSj9gTjaU7nXuFLh7FS1MrRj35a7",
  "key24": "3XDH92FnBmfjZLuzXqXCy7AKfSQVSM7wcjCvom2Joq5c37FyCXrDCKnTzuEXEPwp3tP4Abagv3w4tteoMEk97tki",
  "key25": "54z9w1xLbHHaDBCxZjGyJGvShNMz6k4ThAHZkXZnU1juJfm6pumvDCwpWmyTvYBCtRkeacrXHfADa31WJ9dWC4x4",
  "key26": "52BG5rMDKAH3Qvw9BJCuVAGGqyzNZaCVafeiXMngXQFUUKoiKbDSFq8Fv2RtrVA3XAXXS7KYHp1b6gvEEYvVakVt",
  "key27": "3DciFKLsWrgGnv5J44pZgsmhFGvwTjE7kaFNyHBMMjrvqMJMW4KnP3uzw87qyohc9vMhTzKB9nrC66WijZvzcP1D",
  "key28": "2yjjJrC7TntzczEizi6m6R7cRC9JqufhAxyYG1AVBjbAbveYAAPKU5J3dZJDX9V4KgcxoMSo4yAoKn9BDKYu4VKv",
  "key29": "3EwdcR9FCxqzCxJDwtF3SogBFyZX6xnzDpjYe4kBxnPGx599HQzwuWjHK8S29pJiFcbh8xLFwA6kKcBkcgtiDMQt",
  "key30": "HYqZtmgAJ31bTQauYFX813jSRsnpZ1ej3b5D4ohsCMCdAiYXYkVkAbTNReyh9ibdzzfXALBe171642Vf5Ut1jfX",
  "key31": "4B81kouC3bpxiRszUKuxFFHcTuPex149W3tD9bve4LEDr5YcUgpmxQvvVENbDzhsZg3MEg6mwW61DyxARcGkStG7",
  "key32": "25z46rcPsYKfCBfJVJxqUXGU4wW2xNkVCwaiBEmv8SZGMHJypdD3YE5kCiseRNwC5P2zG9UKWeNRfpUpfSKrjtDJ",
  "key33": "5r9VoQcf1NXe4xC34BYe67RB2wMXkv7ZsXrn9xdNEErdXMNAA4UFYzikXV9WZb4vsGbrsdqc7sPhW3E8wtkh6FUQ",
  "key34": "2XLiEcUWhhd5cJAunSRg3poTwPAbgBNqedz63Qa4hH9CDujaHeVg8PDn2oJepeZAbyg4QT1Gop2jnwWhDPNA5Bws",
  "key35": "2Jy6jCg2Agrfinxug8rhQhzYx3zN2QvXhTKnabE2tUVpuKoqLhBwGJE9hRRcyQbu34CWVGocrPc2fnmVpdQ7WjiW",
  "key36": "2reCDSgYKmxuMquKzEMutxumwk6tnUf5fw2Yvd8r4n1daBxSmybDoiYNRy89s7JBMCfxcibHgb8cPSq51tnR7Cbt",
  "key37": "3LuxYYthWALbmCWSoQfvBej5Vvn8QhG8aS89aDMdkSB9e49sv9hDyL65L7Fr6qnKmvoyzUJ3o9HhTDSnZ6S2Fahu",
  "key38": "2pNbRJ3t5GtHK8NBCovfKq8ynuaPBrCHb6B74jCBw6raCAE3nkpiJn9VkiCPsy4FVWirshQ4xRjyUBq9aXoBj7yy",
  "key39": "2tWUR6Sq4Y9PQotQeU2hSLgu8jJ5ZRxrSHkjkKMA5yyD7dePfxvoHTW6nZJzpugRXEknfd5aNmmDiXK4TCkbQEbH",
  "key40": "2hZkwR3bDMhM1K6hBuEG8RHvAHJEg9u1WUKQdcJsyN8cPwCKxRYPdM7A8xpjL4TW6o15Z7i9PD6eNaKnS3dkMjxJ",
  "key41": "5Mu2UuqTabWaygJd6WfjQsMSGQSgrbW8bbDusG5tW8yeN3bwRYkS8mAmnxHeq1LXMZEBWKopiYYRgu3Wh7XQcExM",
  "key42": "5Wb3WzTFWe1z26nfjaKv3pBzwLa8nsen6T9AQYuzhf7zUNsKUzTRXsNauSBqyaopBQfEdyVsczhqGAtbLaxxs2c4",
  "key43": "4uvezAxT7PZb2QFHzrPZK3FAt5bZ5obcEQ7voY4182ZWx1LUqLn3kEJ5BkkJbtbXeY7954kWVLWmpmDp3LjUUzjJ",
  "key44": "4Gme9XUxrQQuo2jiHrR2F5ipeKvZpgGCrrqzEqHJ4UHAXHU71mbSgqXJN72YCnwXBUmgpPDj3k42aZW73pjeN4cE",
  "key45": "4PfDuhsp3MJczPvje8LDpe7pCa4ycd1b3zCu7jqv5YKXYhPqqLPoZmgHa5ERgoUmYa8D2zgkVPf7PdFsVAgp42gx",
  "key46": "4GFwyuUBt8SdJhGqLCUqon6iYn9K9ng8npw9iWZ9N4a5AMokZ3chKboL16DDxFH1MNrEX5dfd8RAtaawytbnhHBf",
  "key47": "TMpa3nZpbYUnbFR1ELS9y42wK8PyhDkJhd9m5j51WTkRRTYxgNZJoWY2h6W6sTwfJD2L424NnUrjKBY2kC9toGr",
  "key48": "2Ldd2JaeWSPyTjEyGVjN1XCZH7itrCso25cZgajvcoXtgtoosdtNy5h3XiWVfVTtRweiiar1i2v2kPV4eJZdNK5i",
  "key49": "3tuG7Ha3utCtLae67E18GejcWWJFSmhKxoGT8MZ5H8gwFR1dq4RWV2297NMAYREVf7yoSNBGPPqCXaRf2enAzTx7"
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
