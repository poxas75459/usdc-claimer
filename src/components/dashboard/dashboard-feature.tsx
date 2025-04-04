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
    "3gfHfGhVwwyTqMwGPubnyxKiv4d5FbTeTeNraXudH4hQ5EHzTVit8mupRCfSxYyKQJRahs5SEoQxh6vrNyH8aNvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HYQx4oFU1spmrpzFrUYe7yc1SEJDWkc6EP78CzqjbrHbsBWhQTyyA8wf3YFSGdyG9F1kZPjS7RBkoAQozswncsq",
  "key1": "3hwMfrHjMbQ5spv2MzCc3xpHW1eRJmSB71YzhzorRSdR1spY8aZyBm5zgaYWp9TYMSTNKLTEpL89hxUuFXSVysuE",
  "key2": "48xB6kXwGBBRFyRHVfi7Y9asksektf5cYsdcAxZdyZDjHdtbHff15nZxS7Q3yiyNboSBYgUzegkMkkUUNfHiPANo",
  "key3": "2fN9UXyksU34gRXWSyAQSd1wmyLFXuTkivCQyW6uBJuRAxZvzZzq6ND4ZBczpHH3VbWJpXB594S8pmKutHyw67w3",
  "key4": "tbcAjFpNzuiCfUXE6u68KbSh3pCjhmAXGnazV5UHVsMjUK2cmmPKgGmSvLL6ZTibVz8EXNXu5tpzdxr5kHrDegx",
  "key5": "4UNK8s1FHaxviDwLvouScAQ1FEjX1FzYKpEmAj57hXMoeNKTTvSFdNJYdSG4eK5Uu4Zj6isPCj4zCaNgSDYA9dVr",
  "key6": "RKgPHTwZ26GL6VmDW6WH2Xg5U7xiD5w6bvGWLtjyCSTshZexm3vT8koQTuwLDU6128xtbdDKdZn1wMV1daxCNqL",
  "key7": "5hKqb3LNA8DQboXogez48ZPysTFwHpVzcSGMtWRg18wuX1iT6Yy6hnTQubEE29jrZ9wuwpPhVt9kkU2sfFRiEuGG",
  "key8": "2wajFQYZVmgUV6Ur6rWqcwRi69KDDu43SJe7QhLH6xxeFZoDHTPX1T4WpWN3PTjxC1VM1VyUYLcxCMySttpovLP1",
  "key9": "4bpNYanWYpAEVxmcQwWNyyztaJagbVAfdcFLFbPu54QeSwzfKuxnHosP1HVjnvxGWm1QYJm7UhjecjpWZuohXAVW",
  "key10": "5UyeKTJ29w96ejNpvENw9Zzd6bZsdrjH8yRH3vMqPSVq4aUUULwWPvkLT1ENvusnWaqbN2DjyW2Wa6fzaKEXD2nu",
  "key11": "61h3bcL2Ay3WLrvueokGn9urAzd3PpbTzC5W86ciPJjWqSUWjT6jMqxmDbvc8XUnTrK3usHZck6e8fG2GcPLgpxG",
  "key12": "62BoYAX6MmtW4YHAZ7hNpd9C4GNk6NxsJyHFAXiwiBbXE78LGDxjN6bd8DNwQQArNR3sETtyHokxKDxXe3CFVnvp",
  "key13": "2rmMCJmaDWKmtUtZuouWPi4Fks1E9UWYLvfAqpxnjPRVUsgCGFYdUfheJyykQNTFxPrmxh4RjEshiZJtjBX6X3Nv",
  "key14": "22pE8dYPoy9XD9PSd3REVXGq2jLD1PN5rQWjabFSrGwYLpbEYmX5wr7H46TvU4zXqvp8UeDLNATpaDzAJKxhwWXk",
  "key15": "3kLuiWS7rGUn5sucy7BAzUJHZfNqnjBEtSNicxWEoKjaxJV8y2rL2TrHEx3gMXbWSgbMQ56MAezRpYzQrr2iNm2J",
  "key16": "24cVrEY9fyCHQkxNXUiAnJsiEvUt7V4NKQGkW8513fqUdLdHT7TaVywndvYKu4KJCCdc4LGbSTDcRZJoTShXsSYM",
  "key17": "2CZ3yfsCPwLCwqz8uUA5SPjEis8VzBA5YHfYicEELFW1Cr3AzvnpezGEdBAuVCnyDXyP9xhigY4Nidd5pENF2M84",
  "key18": "qLesz2xAjCBzoV8SVNegoHgjhMzJ6B25y2Y2kye83XHtPqN5UuntAvzgCfBhoRZtMV7mduaPCWFnM5qrPvKpE6d",
  "key19": "dtCa5N5ZzT61RMq5FmGzFXJa5Wq2BvmgrvW7z5iycyptyVAzVC3y6F1wsvv4mCtKs7Fzzqiay5vrxPZU7i5uE4e",
  "key20": "5KjZagR2esvWqyy9vPQBg6D46DBi71sEdtE3WMf6YinqAte1oEr3Y8ayiCGyvAJowmPrEspCrYWpHB16uBPT3N5n",
  "key21": "4pKHmsiNvYmcxBM22QmJvT3HhoKoshZL6inS7aKwaSSYvqupAWH1YFMjMCR9HgMhSx3WKceQHQUJYETAjTboRbed",
  "key22": "4X4N3GYVCEtgn7kp66crA6kuBtBjmW1D7GeAydUH8B3ZDfEA4tN3XbM4WBMUbdP87AJ67SXdgLiJmEkzsmquzSxc",
  "key23": "5XjDLNo62H1CLkqYeherSKRz7PEYi9SexERsgTfgHm36QZYM26xTfQCGH6721VbpEPuVMKV6ML13qr64MWniHT9k",
  "key24": "m7tthV5gXV5JbUcyH2cSYQmRwmhx5jWW8FDzXRZckPgGqPTEt66WBHGWGaxusiEaveyQZgZo48UCyzbhJeCCYiY",
  "key25": "5Q8e5QkYUNKj2qUNbqHPwb6XUCVPX2cGcrviU9R3kmp1GLdUkdZN9PcE47pnzEqJiTfWvKVnzSxp84dNq4Rwkkm2",
  "key26": "5fefZMggCo7RgYMacJHp19A8YMNGKVAPqRqVRVvyqeDMa1PLAYiSoohCsGHZgb68Cu2S7rcTFf8cYJJeniGZxW9e",
  "key27": "4FQDgAoGEhJkYtqKcWsM3Sq6eGyMBkymSXDW87pZ5eRsXzYze7ArKqBipMKVshXJaeormQUM6iCEQVvgKKVKXCPb"
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
