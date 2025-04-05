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
    "35AJvkdcdmL9bMkuu2gcWsZu2LtKo2yUfBf754B5DUqXB8ieQBczUn1n31N8fQcmJMYg1KgtrdwmYvof93fsRLKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52DGfqq9Ygz2RHBLiDPou3Wz4L85x4y7PRv78JbW45dsm3DX7nBeWAEaJoSx9PMmPYr59KUinJ8QTHWybzSJ55AM",
  "key1": "3r9jTYMoPCji9EcpMsADBptTUcgcSFJadfLETcBjYmvAa9vn8uF6pJsjDeHBb58HexY9xxTcy6qw3ywRzAJ15DJU",
  "key2": "5GCg8uN4fxKecGsgryFcPadGYabT6qoRKNh6TSzYznFYkzbEt11hQGRxDpAR8ypXWwFDavbqrAhm1fB4b69LHCKE",
  "key3": "57krWudT3s3dJpKx9w7svfDjybopyr8okHwq8yXfmXahdFNwoeSe6KKap19p6yNHdowxuZjzuFEQ8on86qxXTFoN",
  "key4": "4VbxrBtga9peD1c8i1XuopQUxEouQCo77gPq8HhShavqpeSMWKNxdkftjfecbeEkemrs6nLNgZRFjChomheica47",
  "key5": "3sGNYJsdbh83PZeEXrRp7zP4YP1teQEX33h2iu7UkhG1JZd53DdmQXaWgFQnPNxgibrc35QEAbQ1XaLi394SSbx2",
  "key6": "4EUDmBBCjU3RJeQNLf327kbK5KwSFkX5DnAJHT1UiXea7oHuX7HVUXhL1ebx7J52RoCMqvx4XrBLjrkPgsCPSw2b",
  "key7": "4tYoHr3rsaBdSZUjdt559PW9gNXjaJnTAtpbU41ZcY2iU86v7vUDVnxzDejmUC8rw3KPBXbNGP8fRPVjfngWUtEG",
  "key8": "3X5ZRPz8z4AfZ7BueyrXEMMxASuBAPhLfEcxX2xavb2nzHf42HPrjPg1REk6Bwiw2D77wdBWsCjT6ejF6am17P9c",
  "key9": "3K4jzCQzJDQdSHQqen1mwnVnrfcfxTPaMo1q4dmLQpjRqdi9UQsunpzTmWDV8tyWiGqhv3cdbZqxtCnGDr6HMKYf",
  "key10": "3UcWuwVjk6jCPuDhfxMqm5q5czqcQD83b9qfwTJYe5TzDBDwuzMfosCx3eSqDJVZvcCQ44M2JvNJTdbEYBbJh4HV",
  "key11": "3zUKeZFGZ97QuntyJort14dDhjP6jghf5dU1eur7bcMjkEVd3uAK9VV3qQnjPZX2pUTPoyjyqo5p6tWciQGsj2yi",
  "key12": "3ynjPPzHEFvGfvksTYS6y6YKXXiBLUX3YM1XFmWRMK6o4tENHWiJhw3gqMpYr5itJY2TbSJigwyw3dyKZbeaVhRc",
  "key13": "4kUsd53bu5AjUUQnFGw3hp2RJNk6wnvfwv8ZyyNB7EW9zAp3o59jgKBkux6yTutY2D9jvpTDxV9SpAwAP78y8Kcr",
  "key14": "2NFmrhD72ZBwjJqb1aJik5sWvgUdYHq6AVW1gN9g3B5gHLYcoCiigrNyrGNTfBzbbU8a9qsqaJLvmSg2Qn75QQZ7",
  "key15": "2HcKyTEWGvBrtfNDCDWDhFMuLuUsjgQfjrsuwAozbiW6BuSdigbcnHDSAMsJKEwPnYJjuwL61R7yf27BwkSmqAcX",
  "key16": "2fWhwyjt3EhapKpZA3oRymX5MDHzFyKvZoah5KNdU6URAMCHnCnKcmueLkEuUWnN1B4yD6k6ZFCPgJ2w733LB8Xb",
  "key17": "4t6pjR6ZHiTWFBRrCccWApR1dZmCVHpuGyE83G4dW2XhTzQBrjcuH4QqmNWfGaugYNZpKkz5WLiAiGwd6JMHjV9a",
  "key18": "3syUnTXJxuhtzrAhNevEBZBAXKDgMfZvmM89yHCDoohLfSH6iYGMds55NZy4viUo6TBb997euYnPyHimMHPvPbvk",
  "key19": "3H1KC5nEKKV1uDcboWwKjvLtCjgVSQd8X8XkySWs4QfqAFpiV6wAgY9cEyR6cEq3KcUmF3okGMAVieAxpXkaG5oD",
  "key20": "27ud5q44PA8iBRUBH7khRw5JL2AKtB5bB1U2XpwVtvtZFVdokmBikYLDHcwCL7qo9Pt7BQAh3bGm2YxrEhcyLRwc",
  "key21": "4TrgfMBpcZQ5U3Ss9KWAnLKh24yr3nsz9gECNnbjyzjDe6yhkrNJkA8SC8ahmhWgMuBUKrjgn7SwwpJR9YjuHsUG",
  "key22": "3MhmiQeanoWHrJ9qu9g1fXFuZPSaoBHYudmWmLmDFWzSm9LqYqzZhCM45x8vu85WBrWpMdsLwFmY7yzUgtfpGyEZ",
  "key23": "5MznyxGBH8AD9PHfiEQE8PGY6ok138egQM3xDqPNrKM83okAvwh5kViqK2XesAYdXVcPAiRNV8GVjh35tJ6yjujr",
  "key24": "39hgojxRxUKGCh3S7DmPDJXQ4MazYhxzrRWjPMCGhi1Nmeb8WRshct83ABZYN2jnh9piXiPGpSq7Ukbta9KVYC1n",
  "key25": "4pKv5xpfCyuikGpZ9cY9m6GQPzeqdpya2Knbvwmupb4tARHkEp5iJgXX1cc6oL74CxRx8pCsLQcPqkBdNNDkEEWc",
  "key26": "Ed9U9LEf7RCvZoyxg48kGMz5wfgu64siRu2Wg1VdDLUsWB2wDXpWmMG3hDpBai5ejFABG5wzcp1kw7DkVK2DukA",
  "key27": "2ZE2sntDN6pN7TGdgQbEUNLw24t9T1NpoKshapWVPQyGWShcyVZde4SDXtRgF6ru3MmK7BoDSTcNVLJpyZUZzFQN",
  "key28": "3Rr8Z7oTcsnR7dSQ2HwGc6Uv6RE9ev8fAeNR6WHB7bixA3ucWWGWsRm7xTq9f1hxnZn7qqpWgMHWATMnUvgkfHCP",
  "key29": "5J4JCjsDUNvbfHWSEyPkhXCMxqAjb6NKH42gaFzwHSszKBDoEWZkszSn96MagwZx1Gnh8oTZZU1mFdyfMN3Y3S1j",
  "key30": "2YepEHAuQCXVDYLXrrxmELTc2twivdHfDfDWDCAcGEgyf8hoZ8v9AWLPfGNxxvGBiufMhCPMvureAiKqWN1MjYnS",
  "key31": "2spkS2u9Ft2RsBb47egTbMzAPjYhtGVRN7Wu88xaUkjCKwowWc782neJrv8xUvi1TxDEE7ADvVMqLgwBh5NKMwGa",
  "key32": "3sPSQMD2At5KL3Neksf35ZKw2mC6jSuLoypaJJBrRt36cUVxqKkLnEwoBfZGauBSPVAghNhyTURatgrygvJbaHmX",
  "key33": "3nk2kjNnG9naLttdGPmuHcN6HR3vc6tziXn29qVWu1y2MxqkXxEna5nqJ15iyKfXVtgCB8NERJUBJqgdV6oBPdwL",
  "key34": "4Y9y2f7syGZzz8CpcbqFsQdDAPLmcy77AdPL7hwwjvsdT9WHX5Kg1add83r36vCmfMG2KeY95XqSpXQJrw77tnME",
  "key35": "5CtGnWVyM9QND14uMWsaz8Ec9xpiLzcnokRCxF2Wi6vLWT3sU5rKb1dD7H7jNbNVsYAdTDVYfvoyMD5CwF3LdnNa",
  "key36": "2fHMtsD7248vuHJ78KsiSSqkkxRpRBThQo57YPjnqKn5c1NPw9dGtUTxQxc5HCEFNQwG8QwdzX8NaBxAXDUVE2NU",
  "key37": "2uxi8om6fgtdUZ8uhsEpwkX6ZZh4v7ao8qDdW8dRjwP2twrztuX1jFeXVQ42wqTLe6wunoXnf7ec5iUVTr51Bbsr",
  "key38": "4K9d6opghpBYC51SkHi55bQn1rCvk63MZuuyvxkcs7v3kTCbD5WdRTwB43GmPjUZCoywnKQ7wbEt4fxwt6gE3X7C",
  "key39": "35N8Q4oPZgA7xh5SdQ4thVpfCC7B3knP593KWjRE9ZzBuKT78N3shJZ1xwj8tYXzi7iHJqfvbp9sdufssGvM3bmM",
  "key40": "JAUTDyWcarzTXavJbicWAgY3ZPUSk86mdi3m2bcDnjoj6GoozpEv3URQh94sWhgf7wfehuePqRgAdBjbmuS5mUd",
  "key41": "2ysimnxFNhESg1s1WfKvmS7NhFRP3djmzJDNhhiZbdbHiR7URdNd7gv2XjgqxuuJFB7hRRrKoz62H6veV6YwpRG8",
  "key42": "3QyKAUp7EjKfQdfAJAq7fzGw9nkJnNfSoxFmrRndQ392B44WrDuyWfUCjqGfAKhLNBPxMkLxJgxa4HuNikFiincE",
  "key43": "3ds6VxFWg76B3rvPyNGpzT4KdEGusSUumZ3JXVUDfn9ejWMb18avYYDZ352Bq9LRrZokGfcvK57EWHYyAogEj1L9",
  "key44": "aWL4z2jEoXhYqxJHMdf19TZtDM8Y5LdqoPVEATgxtvWW5KARmanZQDU8MXHWB9tQGPPreqoebMcpvrBbKySdjed",
  "key45": "5KjpcmKgomwzaRXTMPeNwXZHfVF4Qux7Hv3koStTPL7kyRs74tcqob2TwCPsKjpen7V3LcSNQMKfacNGJuBTihoW"
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
