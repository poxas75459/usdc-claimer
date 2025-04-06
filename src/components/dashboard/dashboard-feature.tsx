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
    "5pzGQbFQo6MtM91t7mRfaHkotxHm2PmGDxE9zbPqT8QChHbAfBWmpsmGwd3891fTR8KHTqKw3mRBu5cbSsXpmWKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2etGsXys9o3SheCB9okkS97VmRCBEsBgWSmqLeyjMBiywzuC6JZYwzBUYZ2zJ2E6C4EzHujviXk4bGP4Q3KJUf9G",
  "key1": "3S75FEQ3rAay2hCii4MRpsYMeGjizEUiro7hxvCR5znJ17Ccd5wtQkYMtyRrhKRtbCb7KL8xeN1UMYiDFHXxdXVG",
  "key2": "289B6MU17xy5cEs3Wy1PwbZmyxAExxWVAaG1rW4xUhdEoJVbMcLkBFdwyD8DbirBYrsewdWa4r1yEnMmp278G3Qk",
  "key3": "5U9kSgTUiTUu1EaQsrH6jRNsuQe5BxQy2sKDZCStNYniTRZD7M4VxXhmXJLo5AMhESnCKD2ekcQY2WS9g27qRz48",
  "key4": "3Bs7aTYREquRjPwMrMor6kRNHg3WxAWNoC3msS2dALGJRbTkW9c71rbHP3Z8xew2uwnroPsqTmmU3mUf8WiNnE3G",
  "key5": "4daXeumXi6n6P4ugNQ1vBg6mqrG3ABnTuNUTdQadHg514mpxSHosiXf7hCcWhX6uSNiwxPdp8N4EG8eEYMw6oysx",
  "key6": "zfnbRjGwySqPffyA2ArjV7ULgZycmR5nLCZaiQCY1hqC75n41U4LhBK58rbrigSSQRiCA3M636Y8zt2gz1q5RtF",
  "key7": "jZYNrEN8MX1M2hcvMF2vouV7KMGN1QK4KEQyAyJfMsxTGGx7Z4JfWButEUeGhPRmt8eTr29zsQQnGjA3rQGnvK6",
  "key8": "5Lw9ZJGAGwwAXqdUpui2Vd1DprBzK9ePRkkvkStyn6d6UV3XXMJeitTMCtAVcchs8av4t1TD7hruqdJE8XGWRRyo",
  "key9": "5gobvvaKxgB4wkmFYR9swifEoWhTYYr8MtLbEHrv5nGuaimdAQpYk2LfZYeABYVnZQS6MkXetFjKrR11AB3zVnXx",
  "key10": "439XY9Z1AoZviZx3P78rMhauUH9dXqLeUACqnfWjHFcdhT6Zb5aGZwBcSxQTZxjTxDMKCxJdHgmywD4AGwV2Jeir",
  "key11": "3c4MrMhJJtH72C4NCjFJoQs5dcW8eohx6YEV63AZvBVwR8yV5BguSTmjVvRHVmQgKdY3y3VTm2hFs32tisA7rQB2",
  "key12": "3cfoUN4gYBpETKJm4uRjupAnZk7WfnWQHLqmcKbmbG3acv9sVy2pdLYmDNeMfhYHYr5H3nHM86PmTHKh7rfaUvqt",
  "key13": "eSyz894WacncMcCimoMCFm7wfnV1UCnkBJVQPH5TKTHCnMiARsCVUji9gJMdpt1P3mJSiWwPNUAoQDkFXNXfigs",
  "key14": "441U851d8yn35QKZefA3KxzwoqLaaiNWm5eSXetA3PFfeDf8Yf5GUshvEh5cPLKFPUrn5av2Lkp2XbJKJeYZPD8q",
  "key15": "5Y2vVuMtyLcBiiYTzVatjHBHMPqRt2P3uciD3mo5CTwApU4pMuiPUqrXSP6hbGezu9vWrGhDzxBRhYAnCg96EVsH",
  "key16": "3UezH3iy77qqZmqx16U16ZpaosgQeXk1kRo97v1NFZuJzq61aE6rSUaTcMwNRW985hm4oxfVkY6WYWbgvfVqD7uu",
  "key17": "vCbeBpXyskCXLeKgVE1w5vZhYcv3sahnfP6ND5rbBrNPkEVgCBqowJzANycrowzj1uig4BCRMZphpx4pJEqjuKi",
  "key18": "5Wf6wDkWKeDMmCbnoebtvcJcHg4Zw8Y5doNQfNYKVyHDnkq9RzsGsS5mvKkEgfAR6hSezf1eDYWk1npm9iiv7xfM",
  "key19": "4uxf9riSYkMo7jF84VrLC7oTVrzZWgvkZnUP75VcR2SWdNhdkPQa8xyZH5WmgUb3s6kgLwPd84MYLB85XCDm2BN5",
  "key20": "33qN5hChbPmg5jEQmssGmiQvnvXegUnBKrqMZCHtWjHHKUFDct61GymFc97TqoKEVeG3m4iYH79Tcw7usBeHmFS3",
  "key21": "4SKeKAepwWy5hf51TKqCB2C95Y4bWvLVGKcUw3WAyNCQCHUMvjEuNBiRo2gGe6gSWcYvax3gQKSST6BhrZ9QB7o5",
  "key22": "5AKiGynY8Hm1ocPw9zTcksZpc7ThXK7LsPi83MPMun174MApTzr6C4RqmMt5yQkAVPTwbyzdANYjDYB9ziM6fogm",
  "key23": "4vF7c1jmY8KDSY7hj6DPeiZfV4xDqcgdHuLy7syUTB5vTTkTkFVErGk3hEJVxEbcX7ZVvqhdLXuTBGPRiuF7CBfE",
  "key24": "48SfPd84gZEtmjnFjWpw2V7P89V8oYZo5tRPzc2T6MH4q5V4SXUJ7UiVczxnxQ3ysgtJApnP7BpXAMdcmHg5yuQH",
  "key25": "57DbizuRjdNAxGmD9e2C2r2Ataga6dG7wwXUtpwhrSb5suyxsDAuwabYVhpQMNdmtwnesux9fGA8c57MjRxd7xaK",
  "key26": "5E38UYQT4CLpzmZ8CyZ7Z1MDfVEE7bpcLACX5syPUJkqgHSTQrdpDFmjqW6sxpiBmGBVgEwYnHNDwemw9wYgTHn7",
  "key27": "3rUYtcQMZVecCyEaNZRoKJQ5xbEQ59G8nd6vSTxANC7SuvVurxbeRSTHATTxquwEhir3qfDxT3vAWNrTBbkF75zx",
  "key28": "2F8RRX83JyPhPcvM44iPxecdUmrBcszE9EW5ePY3e6AM4zsu8LsFh6UvGuv3fPaghJn9ZmUT12Xb4uUu91sLnuvs",
  "key29": "GpKzqEYPZDfogTZR1HX5exfkWF4FkaNKqgYrDE2fe1Leeo18sMLkWTBScbGZVF8nCcoXD2nGbaRVWcsVPT5cWNy",
  "key30": "pV14ypZDqZyJNdVFEWRiTEs4uF8GGi2fPuqH84PT15mHAgfke4N8xUPujZmVzoBFk95DeX1gMeQhPcmvbQJY2Dr",
  "key31": "27tDXGEHd7LzjaN24RjdhPYyJoP6pJR4UdkC7ogqDJ9Qc8Gsaa3MHp52d14nJVoJ4EP2N12Y5AibZ5HEkC7Fqzzt",
  "key32": "2YxKTZNYzq9wUe2SPv7sW1bmhTA3utnvpb534t8D6L5tdhi7AA3ofpb88CZQr7RuvzeGs2nPGcwbcCDB9Bv5W6Kr",
  "key33": "4us9S3R3WqheXrSPViC6BKLoii9wgxQoWbRbSaqJSCDd6hzDZCvbToFxiQp8xcSPrqFMXJXAJMsMWT6aJKEeic9B",
  "key34": "3M7MFs8tQMerd1qr5akJ7PRLg9ErswRrqNp4oyF6nqrG3WMzWXVbwR2LT3dA47qMgwjBcSoAbDMBCiwkdPCSHdEp",
  "key35": "4TontRGG4bJbfevpt3BrBkcXHpxAuBNx8T4bZbXeDrhVEH4uhFPQtaJLTcoye3P3cYQApvNmHrJENLhwFcB36gDM"
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
