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
    "4nzViifbAEoR2B5c9kYZXPyspib6Lp7n36kakqAAQ8ZtimzFHqeuAF5Wnn3T9Hq2yhhfRr3WwF8RZmH6t8a7yT3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FxEnjm5HvWAja1znMk9wY9vRqM9bpbJsWpz4MnW9d8shwTM2zoWj5B9BYEVYkTqRKQp7XPbtwNN9pyQgSTR82wn",
  "key1": "2NMtJ56JZo6NTZgNLJKA8gERKUgeW8nWGKkY4yAbe3qxqK8Vc6DdBk9iBzpnnKqrbJBuk2RE3y2QCf9nAkvhKkMu",
  "key2": "5JQ3aTMuravGfhWE5CNfo6RcadmnfR5AFqd72S3B148F2tbtWSAex4V2ytYfvTZ4itXWVDtumkygTykax6aaVJpe",
  "key3": "31ng61FcQWBX5PangvUbd7eXekmdzX6bJKUK52QgFyKXrjJHzpbgSipFHWAg3JnKWNctQJYnicqni2ZKrsZtENpz",
  "key4": "4Xof5kxitvcZq3rWZfK7UWTJJ5MzTBhPFUzJf5xnvk69DJM9PXuo5CoZ8KoWwYiXyV6U1tkYgT2GYPfN9AfYrPf2",
  "key5": "4pQm59M9kJqL3MvMRgctHZJeZBPPdBkUi1kXbnn41eAfZGHn5vowwL6yzqHT52wDEGtuPp95nqcoptSp15gqK11",
  "key6": "5wUf2qVaXggoiHNMQnwopdVPiE9uX1CCXJXGHwQVuAZk38xgY132paHjJeG44VUTCf8ToiM7Bb83huTtjNpjeTxh",
  "key7": "53ASXhqkDxbKY7x6Dp2EHrr8zTBoQ8zG4UpAgHuDBpwzijLWkDogcrEc3Zx563gxdweoKjcxqzd7vBNEnZNCM3HU",
  "key8": "4NG8BA469YKsDUs9MzpqzG2rYBEdGdqH1BFTqV7xmtie5PrCFnXSVSaNYPWCXrU5mPfUT4uYrjoX2CWVRy5ZFCpJ",
  "key9": "4i3hv5SedkXHPdZpGPGCeizKeEATbQi3aHYuGo3LQrR4CK4uKhHnaEP6c8VNjVeH5mabrUuqbQoinbxG2oeXnuHt",
  "key10": "2xa8fPC2uC4VUzFLETiMP97vG63ZaaQwUdQRPZXs292V6XjoaNYsSi3ZGcxNUYAHjMUeixVWLgT8QR3UqAk9xzwx",
  "key11": "3w3YCZt3y7otub3EombMzCMnKjk1Z6oSjVFbdGgpe8f8jYcfpUfqs3gzcWvoHkn3jerUfDiSAPqTZVrtCkqCioHp",
  "key12": "2HTtX4SqHUz8R1BZJhpx5oEDeyDRrrHT8azjxN9szxKTtHA9jJxxmyduYBpMMfKK74Phk6ScSJRp8CZXqN1KNS3c",
  "key13": "4yn7y5QodKUAEirkbN2HNgth7evXk54pC6v1dgX6ouMb2wJVZEH6tyqbjDCFotUsd4rqfGSjpTDXNtUPSQWU22oh",
  "key14": "3Dx9AA3Z1rQ27Z4Ebvo5Lh7ysU11Nc7SP9W4spe16KHaVQxA7TUHKAc4gufRqXGVzaGMYLTsRn7hu7Ebd16EoDis",
  "key15": "47GUqFgwb6qwFTkRG5p4idVofou1YNDXxoig26YM1o6zNTF4fTp98QW9e3MRvrLScEQMEbRa6aPzFduLaRBXUSSF",
  "key16": "ujJqMu4geRmFQDN3MaMKwG1EWngrhembZ7MPgWcorKBGD8aFz1BPrkrXrGWtfPcnkEsmJyARZVSyD7dFngKMLYm",
  "key17": "CWRAVwvYYCwtsD5mYTspbR6v3vF7KFdKwt862xHYi7dHXhbhdEAZcBkWbYx1HtoZdMhFkYurVZxE3SAPsbqnu1n",
  "key18": "1zaEAVeWT5ipbq5Ah3tzeac7rubyS6TfRfBQ2rqgo8hTSjJqFb7JGeERCHaX4qAAZSGZZeBWuhwdTXB6zt7ZKwf",
  "key19": "5vqqGjyH1WiT3VmbKwk1H9vKvmTdBhHWin8BFn9uga4DaswEbWuUjJ1EPiBpjTU1gLKVGEhPMpfumaBV976sgwa6",
  "key20": "53GjnhX6aEuoGxq7hY11FgtJUF6mD1hkW2EtKG2nMAtq1QCzdkWce238C9TfBkhEqPjJrFLtVaV1CVAdqjf2qdco",
  "key21": "AREYr628ntcC7VDEy1jYKBEBYY1w8KSP59S9LvV9DYno26xk7bAPaEt1CTkx3ron1gqhEiZ8hj6w6Ry7Qy6WKvd",
  "key22": "5EaoEJFm9mT5a6ksQpim2jLnNHfuh41XJyjLo98XGr1CkA9RJcxoWyE4oYvxHiZrzBjj96FvAuYnEbsEfLhH6SjZ",
  "key23": "2CLHj9nk3bcqfwbfuJZTkrmmhCcdhyE6vVsqunuTAViZN3tjJagguCV4QKxKEFEGemdAMX43Mfc54aSg9mTDG51w",
  "key24": "4aQoACqd2T4usuSN6fNVwawZA3vAipeppxELh8FBp8zDBpxoNmqBL67MJBDMMEdbnm1UihRjGX2m7dxmubTpUWBB",
  "key25": "2mYN8LMLFAFVyE7HrhaWrtJPwwY6fihr5JtHfv3HCoaYo7FhiAj5cqPx6mCoV2TUk2Q1bQiyMLj3D37KkgKSXC8N",
  "key26": "2aEPyQqTZBgpDRBW8wuX19tU5qN7xCGUQkiWrdqBQqReM9s2TuD7naQ1dGdtYtQWfXL5MQjmk7u52GcGXq3mCbYe",
  "key27": "3m7rWSMgQ7SzRdrSymDBi1ZtkhjyBBP8jkP5GqvLjqJqRkkCkzZ1Qg2zJGs1C5kGksEdpu9G4rzjzs1LRebSXQRv",
  "key28": "5WRn5AZKe8rEDaLQb43sipV7F5BXuC6vjCboPzycbJUnkeyWC2YxCVtQvPLbbMS2vknSqrmjGzcnRDPYZUzTCd8k",
  "key29": "5QUsEk5CmzHwLurWekBR2TMV1puvCQkLuCX6jC6dx7sGLJJMbdXJ2HKB8cT1m6fzDSMChKpDS21z3y6LxFierUMg",
  "key30": "DJz6UJRRuw5pitZPxcMvFJb78G2b3G5uUUVSABkbucTMWjcphKX8yyV2NKAuohTbz9nSchLKbVtDxSneSmq9GG5",
  "key31": "28PkAgmWDZtSQtKh4Sj3NPxYdX5oWCYa4JKEHMQrSCNTvEndZmtyLERzz8CRkDoVSaGNDckq2sf2hZtu1ix9keDh",
  "key32": "235JSjoJxN7vxuVCaHyU9dpiWfEPRpuEAFN4rJGAGnVfBzCAmcA8mBBV8BBWE5qTkexWDry7aJyCNNSBUU3xkS4K",
  "key33": "2FyGFPrF5Z5xPTDappLfExVsoG3a29sWyYZvyryik45tgnYF2NCuJVLJWnrd2hT2QEZ1A1WA4vNQJaVJ5SnkyGGP",
  "key34": "hDdkhmnKtTqyRmN8PYaPsbBP5Us62rRdsiBaNweUUvrHxypeGGFdRYSXfnHeSXEa2ZasGq3KeKELrj3X9zeLXq3",
  "key35": "4tD7JEeiWeKxoot4xBGNpVWGHRz9JNzXw9YWBHp4HJxQGmXzqT8URo53xGS2T8KrHoASNfeqnmakZWF9w7RXPie8",
  "key36": "3rQmQ5cuq2k7wEWQgcR66nVvgDGJX4ujv1wZcERn33oKrTr75HRdPAEYrDhSk3Fcrrb5HMpvSCfdMV5omx5tDc83",
  "key37": "4RRtTBUNCeeCpsjLVcjYHacqay6i3dGcYtpzyvVUEnE6yZpf6nJ6EjkRVuG1h7CFSdY3DBbbeSP3DPNWReyRwt5u",
  "key38": "2ZgtT5ANZhy1VgyEgrHiG5z9kKZevxHqQK3KSvvMRYFMXA6KPTFyaqJRNjmGvxSeALLQfp5UFm4iRmWrZLzhjoGL",
  "key39": "5A6QS5F3kaF4P7AX6LUvirnTxUfVVR4TsTyTKXHnfyDaEFnjsFBhawLiNoHWwShb9q7zY5Vkn6iRrGuDQVhn6547",
  "key40": "5QwDTX2GVH3y1jmu981AFtq3qMfabewyCnzwCY91zUKX5JyjQcVHZHZM2kBVcaUg21ryDMLyKfFxdqav1zKxLF5N",
  "key41": "3iBNSsx2HjZvoMFo9ETtjfhq5srMTVkB2XegyhpS3guLjv5SeZMvfv11DNchHNSWokAhbzArgof2zQVsYeBSUHkx",
  "key42": "cWVQFEi3gXmARPH7wDAERLaUXnVxS4bhuZTUpMKtN3YfC2KTYabwULsN9BmVVf6k3tymYcnvbmAmBbY6Yhu4r7U"
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
