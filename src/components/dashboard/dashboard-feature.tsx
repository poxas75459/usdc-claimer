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
    "3FpRMKSVyJspij17PDTXdR9bct52tdcyu5xBuDFj77vsmZEmqFHuPZEWesmar7M4nZnLgBqa3b5Ne2odUQ6eRZio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XJz3PpvLtZRnGCaDxUarH8FEK7F5Sf9djZAzmxGGjsiHJ9BKCz6K7CgbmK6inPd94RuJZokWbU5nNeB1gdkV4RA",
  "key1": "5Z32FgsePeJJ4ycFoZBUnzuRnABRYgPWCSRfQf6F6gXggF4HTcYDVUacM2az878km9pikj2MNazhH3uUyHn5kavs",
  "key2": "41DAfDtxJUgznrfNxvoo5LhxmqhmA9o1EwpPZzVzxRGhTkCVW4ztYXAC91aYkr8JPssAJXJdB4ne6eY3jsjAESXr",
  "key3": "3vPf9fqJZiayd9gf3U63sNXUwejqkFiKeRSxVHQBwpjjUDCtwqE3mUFbQtm6fGK2JJ6ZnueiLaNhnNNJFkWL36Ey",
  "key4": "53yMyuwbUE6qg62QrTwKac27KmvgpWvFHiWkzrhp9kCZAEz91HqoA8yPaHEdGrPNEopNSxtmPwNuoimPYQ9qgHpR",
  "key5": "55YECr6hpC1xSFh8cnidVn1XniXLKexay3Ve1rhLjf1rfZxagvLyHwZXwWCibSqcAWU3LFBi33nVyG3tE7zoQpDP",
  "key6": "S3c2LeKBMMJpSkmMnnYZJQS4oFAsGwiiKWBeV7mRV8mnbNJGpWwAYvhfHh2QpbmUyA9tcjLpiQhnNSUiNVmye7c",
  "key7": "unwUu9SFTb5uX4jc4KTZFLYdh91PaGVaMUwEo9uFADzpnyYgSCP2p4BwHA2iWEJ9TsMGAPAByEu7f5ErXfFWXEQ",
  "key8": "5Bgg1nfudV5vseaaxCd74pxk49bsBvJ36VLgw2bJA45ohkCYDxKnZw3a3CgaKBRdiDqjSNrC8Qiozr1GU8Kg2o1K",
  "key9": "56Cd5uyUTUtvvdWVE3Zm41AKsGRf7yfZ29U4jZSEnVfDUSrKTMM3BB1FqJMB9bEBEGrBGb2sCkCp23neudgQeNbj",
  "key10": "3xA6SBDzQFMKAQe7ZHLuSxBzNCibkDgS74c7t8gA6awFFWFfi8jJSu6cyqS498APBK7KmPpR8fWeHX7eQ8jjDvzL",
  "key11": "3e9pT6E3K41kXjGmVTzqzgHimhb8zFbk8i5sWYeyCnfe3R6ZjwmEGALDjbzjpfQZsF3qXK5k5Ze4rhE24o1vuD3",
  "key12": "37sRhgRMa9hiiLYKpyrPRmTZxbr7r8SjANVwXCMWPGhVtQb8zHjvoTT3y3ZuAv19uW7r5ENhuNJYoQEjE1hqCjfJ",
  "key13": "3Xhden59vaMvKgBfAcnebB9aQj7PhkBFTmxt9HRPX6xTsvQRi4JR4xaAgvZA1gY8r5XxwmTFFCk3G3SnCJNhpxzm",
  "key14": "eeVtH6sx2WFGnchoyhm6bRbaKCm8jsAk23nPRGkVUi26F8iQEemcrojURQA7s2kfw2ndQrCUjxBkadEWF5G9iwi",
  "key15": "hvBQLV3rvtkJu9FPHFdciAR9thW2456xHvvN8ERTm9vfA75SsTtkK7WetSs3osVf9rAhrwTt7muGuSFke3NTvye",
  "key16": "2S5wzzQWRL3ogbcqgKUFMtJ41Ty2XyyuBLe4PoSdH2Wxwa8q6Gq1AbskpcoMRVKPd63FUPBJC1vPUrfVsSDjFrPX",
  "key17": "3GpHqc5qtH15B7962gAHavMK4Y8aiaL8V9GVkgUBcxAn92qw15ZFCdM5FaUCdUjS1b9PpjcxrEfkpLoRY6sbRiip",
  "key18": "xZ3HS12A79emXRZirfvL7C16bFjCYY7K4bojxqr6bV8xScsg45sJj6k6xxHiWvuD5o3pXBB5AxW1RwzFAEUkbmq",
  "key19": "3CPsibJDB4hvkg9bVxJi3SzNhwGeBvFViDMGUVx1ytF9BgoVYxHBULyqr5LRERYMNNGxMSs9s5Swj4uvwpHoemJC",
  "key20": "5RA8i74Rbnr7wFAUXZR4fVPKREJsP6aHFWD3NgPAycwbra399aRp1GdvZwc4ustAQRh6jEqPb5ArXjtPLZSdoMvg",
  "key21": "Dp2aMgdVXP8VPnw61BgTBdyURpDMzzo5eeLF62rSjoCHobDquyxpJXkxX9Zbw9yhgJ4FVysuvDQNfjyEBpu1BVh",
  "key22": "3ks8VXNLcWGgRGmzWi4dBmgU35e9m24gpjmDTFsKU58CzFFdmESzqBc4U7efpirFapYavj7Pcgsc7pcsiXP1Zm54",
  "key23": "2uang7dXA74BpJHvCTAH3ShxNgeBKQSTnz4mJKSXKgsfFKgoM96yieYT8tockNWqWjXMa2djgKfhGp6AFTwPF7ZW",
  "key24": "2CSJhXrLTCw1GV3CeTNgUeVZqf9G3jrvbSik8toMU1VYxV6gwMaeq2dbkE82ztAqEF8yUzUL1ygmvhBpkaAWZTz8",
  "key25": "2TjoMC7okL1HTZYrBRLXEeAS3VjqWJNpq4uQTfFoc8NDQrYnxjmLQYyZeDNeA3H9xGiBWb9dAKAL3iHovgaxG5qw",
  "key26": "ZtTxvaqoomMjLF99qPfwoPSjthKSmgixbdVHM2YoKcSCbmMY9db75dkxJsrBcaz2qSFLzWDsWzpnkCaCtKB9ZXY",
  "key27": "T5iYQ9XSDKKSHr4ePG5d1og44vRX1iwbrumYYznR81zssSbGVKW5WJPRTfxrB9atfdvDXTnUzR5yCA3B8fsdjT9",
  "key28": "3GapgJbWczd3J1SFpku87UsiFVUEgNPwojrr4uGAuQuJ5EyfbWNYstnXPnfDArjE8x6ePdTzDWUxMiMv1ccNXoFo",
  "key29": "CcS4dw38cnZVn5vcKejVXdwHFGSqUeRBsdTD8DVBkzfgHcNHYikXJT854jyWysXr2Q1bgDJtcYxZzzK3vcsPv5b",
  "key30": "54VESXuWRMSQ4Y7UGitqH2gVmV7wXVX3UU1MbBahuYxz46Tznm9RM3te4WufGs6GgkZxVgwZ1Wv1JgbsVHHEJMm6",
  "key31": "2EqJK4iBuvid24kSHuuJYLKwG8Syw47FNzR9u7g8Xkph1cd7DrgQ3yqKDoMs973XZNHjzqeKXFcsC7BbspeGfs5C",
  "key32": "5PLLqNaPBXLXmF83zHByhXHDEdvuEcVFyiAAhYiaHQZWoZmk12AEtTdhV2CA3W6CFdr6XcSjsrwyatzfbmnRjfem",
  "key33": "2ofiuqBWeJgKnA9GywifnCpEFP9VSbe6JWGGapxctkayGZ5H6mpWvZeYqAM3JJsLQncQqMbK6K9WEzZB7e9syYYA",
  "key34": "5b2UwvSw3Xc6jD7tkf1A6pfXkofTCXXNxA6d1dmTzAiuqXn1ZAiuppptiSrxbpbFqXyRfy6PAphRVJvbhw1LoHVv"
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
