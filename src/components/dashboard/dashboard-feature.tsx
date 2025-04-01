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
    "2is5o1BN1EvzeKtadPXNqagM7vfjQzsWpag5jgSWZD3bgyqWgbwdQ7tSruCV7KaXm4hfAmZ6jTBX6Dvd7i9VoF5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "272jRAekXxXhqKrFbNzwyuStBhNsUA6YLRpx3cQw5puWMvDNHw32EzBbu7YCyp8zf9yi1yNX99J4Ez7jkeYAJVbk",
  "key1": "3FzzNECX6wxAWWNogW15G1gAahXiqosDabWxpar4vXJpbrtDxXW8ZvynK3ztRtiiyAf1MwGdaSg1DPM7fwq91wP5",
  "key2": "2MK54PS3piRr45273vfVTAodGU9R3vvGZqJxV6Qp3XrS3XGHcRLVzysfbNYJMHQ5JEgwbd3RuEXUg9ednSVtY8fQ",
  "key3": "27mAHSjwzL7KwybD27s3sCh8EzkW5WLihzM5NrYXsFb8V74jsnnJUF4r8B5u7AJ3TbfwbUcahb8qkH8YtSoVL7mJ",
  "key4": "tuYfV1xS1ALZUCe5bUquJumsES9zzbGGPxLKNXCC6NubWsHr6KLnpU1woaRNHJ8daKLsU6xAPEyRNLaadFZZQXX",
  "key5": "BTov26icFwm6JByE8h3o7oYcHhxoPgsYrzLmm5eiakntLNcALYpcqSkTALLUv9VY79ZtMwg9TPZWKqq3GVJxVa1",
  "key6": "3GFZ7fzguexvvUmPK9FnAzNp3sfYcgEf828tJJ5sFNCVBn6fW3gMM4XtCxiCTJtM99eN4N487zTqMpfUHUPC6s4U",
  "key7": "47qteuosTSEXkF5DT6Te8xkNii7YBWB19j9zQZQP5JicMSH3oBsKcPZixG5m5m6GAADu5hHs2WBmqtAyxkeBihnz",
  "key8": "5yyiVztwJEc2WT8Pb1k9zFZCa19NPkHErEMt8J1CMPmMZ37DXL4Yh1h42Mi6QYzAzEgMRdCz8aoiiTQijdJayauK",
  "key9": "2EF9G1piv7nLZCS3UGgcoPfRg3UKabACz53ghRwLyd2iSW2KyYZYaKpDDMppm33Wx6DXu5mXWcY99aKQsEm77GH3",
  "key10": "55Gy4i5bcFMixTodxwvxw7XuXFE4khVneG4F6tfr6x3FF5WEM7bguNBT9McFN6yQmjM2qJRxhW5KCGH6ctVgomrx",
  "key11": "3MzCp6Bw1sg1Wj5Go2W1YRGpRyaXVuC37hjMB2vDbdSoWm95dwUHH3vijQB7J5hBXacLQmChjumMNs5r3NVyo2A9",
  "key12": "63C87GMWD7H5KWRhUgyVv6M1Fbtx3yaLTmcR5nmWRezWeshnbxb3QY8BzCQft8NzVSo5DTS1PP1ZYarJ2tE5RBHJ",
  "key13": "64Npq7aKFH9cFbuWnHcVqtdUcezCREAB3FZk5iozv7XuAimyHwAQi4nXBm1ksmmFst7rAyNNpzwcuWobdkL7pGNz",
  "key14": "2H5Wq5hCjBUGcXvAe1PzbgP4mkgexe9kM77JJtUsrdQRXyNWmcEiXnx3GsSnRSfEA3amwDSX3jx5vFnMqQ9zazzH",
  "key15": "4sYjQkxnWknSDCVteT2T1fEQuyXTCHQFRHEKCb3CVRSmGwj1ogSUz7UggJBDHtrnvdEwzRzQgMhXnZjrPmeKP1KA",
  "key16": "42c6fCfJiPPnPKzoUStq38BGeswtbR2JaDnBaaGpGpgSpAY42EEjLdC4ZjUM4fhsLboSroczr1rHkVGGt3nb1ax7",
  "key17": "HFN1YDALYFGEWESrgDPWvzfYbbr9g5eq2DVxEvgUy5wd5kTtxHdMRwiANTdkKZQT2k6kxCJn6tP7Mqnen12iKqD",
  "key18": "4v1y4HjMK5rci9TJnNnYTnK1C3fSDXhym8FsszRM4UaW5wLmQpvhqbGiV2vuAUZ9f9UNpXdVo2HqMEKSkQgkifU4",
  "key19": "41cv3ppAGq18ABHH1JDQMyCbW17bnxzZ6tW2CkZJXRQKgmcfgAX51prcfrpeQwPVAajLgpLh4EATrK3KAdGqJR6H",
  "key20": "5Hjrbs965GPLww9n65rAp2thctkL68zBe9dgdZTCTHnaXD3tEMPCGzeJ11yTRMUZQVHAXaxSPLV8kGkhVkP1GN28",
  "key21": "4C6oPF5bXpnyF9ysdGk19A61eMrBbYkjmoBG2YooHn7YpuP1oCCLc3FpK4dxz4APDca83gv3XA8g85sY4KHEvdXp",
  "key22": "cfSwTMB9GAKP1Y7hi81k3gFt7S8XEJZinPL967LnaLjQ6E4s4yF1CpQo6Baca9cK3XK8AoXFBiuhZ1AEiTrjQoM",
  "key23": "6tJpXggDREoGxuLeUJm6qgm3iiZTgU692ZvyBf1nYfH31eUFuUw3zRUKX5Agrf8bn5pT5GLvKB37G2GFq295WfQ",
  "key24": "3k5Cq9MvQ6ogcoNMeqFmNhucrFNaJeJ7ZT7aMF4xm7YdGFnwVcP8Vc12GTg6Nre4fcUZBJC52SRDijryfaXZWtuf",
  "key25": "2UUiXH6nSYbrw1929Ap8To1115aK5RoV3ZWvvV6LpAa7q3MNevMkfEua5cMWAjEbPhRssYU4sDoTxn5Ts1xMUBrr",
  "key26": "2agBdqNHrbkDdWBhVD1bdSWG8syEnLwp3zRR2HbYLr4Y9vZDWrFBP3xeSRDQ5eTwKiCLuvvhwbYxr17y5B6n5Fv5",
  "key27": "5pRuNJsmyQ4zM9b49NjH2pVhyF7pFKgV4ECXUwGa5pTM8Yz16HHRJV5B5GfB1DrgzY99p7a3ZU39C8x1JqXRe3kj",
  "key28": "3Xxnq938uuP4LDK2MQigXYCYqe7Aicwi5f9PG2KJf79LhJceoRMJGwDLSSMBdrsCaJX7cUiPDLUX1e1KGsg4bkBK",
  "key29": "3DNfvNdvvJkD2mhtwrKaLAEdCBUyC1AAyAytwmCCkLErnTafDvj27asBeVTvvb4pyh7pjpA4iWrqhSLu9Cqnhsrs"
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
