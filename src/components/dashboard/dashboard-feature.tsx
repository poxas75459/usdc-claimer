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
    "5NYaxdsQ3QUMFP9HXqnyKuUM4m4e2JyQvrZtQLYGCa1ocfP1eWzS3754KM65xzSinDmYKqNS3rCikEaaB9KwEA2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42icE1kXVYkUQVtCHady7kSixp1G57s16Y4CtdCG8ujYgJdFPyvr8qRqiWiKgZsF32ELNHs9y6bzFBcwAceHUbVu",
  "key1": "3otnUjRzaWeGCo7WkzvcRsrqbWcnkjZitYM7JLTf4NCq1pii7mcdCveokrjnGBGWw63BdEY66Go1v5rJQ7mTgmED",
  "key2": "3Bc5BFktHgRGFC3ooErLj2c16XDkUFisq61xL72q2HHd32Py1E2fzLf8Ai8Tfba9WWuyFXebRAxYHqJMLzztcrC1",
  "key3": "Pf5YhQX6He5XPt5GPecdv7VYaZT3t36SjUrYafQnAy7TPTGW8vRRqAA91nEncMD99vUNCSvcWSQx3qngb7xN7qC",
  "key4": "2AisJN8vSsvsHfXybAawFt6GxLrmDR1xyvtz7Znj6YDsK37jwQMUoR6YmRfb31Jt53LzHA36efffb1Tg371xETSy",
  "key5": "32eP8vrk6stTjoHHuQtWRfcTonZsQLpgYW4qjBkmmgZyZNZhY14pwaX2oWifWhaxZzWNkTHynyb8JMSjLzDvcnJS",
  "key6": "37pZRKDNgAQiyXJNFT9zZ9yrPvZHUtXoDEtd7ZoRXQQnMeVTkWZZCbV8hmgkzNFS2QTSQpSPf8CJk45U61CtLH3S",
  "key7": "5pxUxA8RkDFboJ4tA28VttZRnn2QtiY2qTnmHiFZi9wAL66kbFcaUR7e8UkwnMarSfLvUd1bFRWH8oGdoTndCPxu",
  "key8": "5KLUMPXLGZCkDjnj2FqWxLZmWfh6ZyFrs6ov2RriA3LALPdGZpQKuwujtDpni8NAotERxHTo6qtJNVJxgGbi3UuQ",
  "key9": "3eDjN1GobJGegRdJ9zd3iCu3fQFvTFRqvyJKKH8xHf4FG7UE7ebCVSH5bx4AqzeSGfkR25jspV8XcNKcF7Bujd2v",
  "key10": "5MP3gagBteWSDY3BbGJiMEEDKWwiKBU42dNrbsk8Mh84Wbb7rwESk5kdYDjUNmCTrNYpTcgqTW4JsYhBjUw9Q4cW",
  "key11": "3LoDkPkD5KdKDKTrChTq2BLxPd6s2KiDnYQe82XWKFHjzzg4VA8GNM1yRzpPqciFBf2d4xUE9bJWPkBLRWRUF5Lw",
  "key12": "3ZueeVypXRGiGyRcyminZkFdfkmaTbkojF3kyWa21Kjw9YKEpi47ckmnH6djXroQQvE5ymr71mLSAZeMXTqs8yQz",
  "key13": "3s8zkGreovdUg6oPwdgy2Fy2ZJ3DJ62RpPGsf8h8XMP3v3SYDHF8Np4oKiaN2oz4PY5Qn5PeP76m3xDVQP9QcRNt",
  "key14": "2DiWXwBP8moziGbRJA2qhqofMssWnnGV5CZx3bmmNng3BvAP7GT9qx2U5CLntUsEkko8YAypkaQPBTeT4tqr6Hfw",
  "key15": "3NssHNJcKwo3P4dT4YARDn7z19UUug3XNCK9ekWnSwqKXzKadAYTxccsn7AQcA4zV2MK26ivJ7NVV3trJtS944ZS",
  "key16": "2HrHTzEDozT9WV1EqWqGHMzCJX7Yjx5FC3wAPNUYe8XEtoWMkygZkkd9fijkNKd4CpiA6A8t9L7SUsJCzzEdRKvn",
  "key17": "2WR6HMrnzuWKM4STC6NWs6PFXFm6oWg5So8mtg5MwqEuhQx1Kh7kcppTM7jT1wUoazkVwz75PA17y2FWm2Z4E1Zq",
  "key18": "36FLCVvwKCEmGLK5RjHUL9xyHjzSYomSB3CLxApGj3iB93hnmes7FZM4Cfb8g6vkBDz43e8vnjn7TKfZJbBP3L6e",
  "key19": "3ThgsjfycWAk1qgQXj1eMCD7axkZ717hp9y17zZEoqkcsphKrHpkuWb8iAtC9F9UtTb7hrKf9YbE6LgeSeeg44oR",
  "key20": "2EpqjN2AftYovqZLih7d5pNyXMBNwa3XaoCWpU62ZoT6QRBDDR2qeQiwuHoftuTC4iXoK8iX5RLFGM3vXFyUEqzY",
  "key21": "3BaVy6vp77mW4khV6yh44jyZRxpFVA47ZYtTEcqWTyb3cQhxPRbA6UkgG7p23d9DP7qGyDaySppy4LokGhvBYHvN",
  "key22": "4uwygRAywympCBuRhcob6zRVXQGeyY5NoeMjZwa4jFvasb1raFcK99MVyY3DCf9km8D9zhNJAJQyE4hjnfuJcHGb",
  "key23": "55ogm1fWGTu1gRd5SNCtX6nhwAd3a2aGM8CZozVB4XPnTBLp4bJEHT43ewsM2RpRKDjeE654DN7sE6gt2sjov3pK",
  "key24": "3c7ain2CyBLJDsUawSWmLi3LWFjsh7oCxb4uiyq97MNjeGTJP3HFfkgbJpHNJg6zTdM8d8BWmmUgsgiQ9HmKvJsY",
  "key25": "3hLzdQYt7hrsUVWgwDsLnxASbTG6m4uYx1hrQEdqSfHkBPgFYZ3Scv222wX1YHNcHQFE13DfUmJ6WFRjUfPWbR1K",
  "key26": "3MnNhf2HBUitN2VoaBw74gtwzSva3T36GG9dE5s2oFCVMoea6CGRJDkdH7253mUP5fs6QRwsmGZpJaJQ3hh98d5g",
  "key27": "4C9AjqSsFUjLHSgy8m5mc1NWPnQbhwsiNKjvRRgegDoGzE8SXKbBsUSundweeD7rqR4ypdXsYTvp1TJmXrNDhPiC",
  "key28": "4WBmaj4hYfjmiY8eYBPdGc1h2UFi1A8psiSbmHeuTVWN3D2bZSnNSM8Yz5mETJnTUXvVjf19S9JWcCKx4F6YqK7S",
  "key29": "4Q6RP4eQSrmdPjxMnXXydPxRCSYFUW9uETVU4tnPbWG4h6mBftxMPHYbNpvS59mWKt8mszUK1k5tJnCXcnqKPL8g",
  "key30": "47TykUjsKxcLn6dtdThqYyUCsDArNjcXWvJ8yisfh5Fx7ggv4KeDU3BzL65KdSW5LjSVPx3BnuvwR2v2CjayNgAJ",
  "key31": "wvExXnMT5YVFfVrbNhgMBQWYRyHGMtj8v1mRY1twdgx3CkA1rAfVRM5dNTWFm5fJq3MTgWtyQqVS5FpqneHG2nu",
  "key32": "4UjePQcnrojPLABX8TSHwbtULraXh7j8m8nKG7y5jc6vDMvDHaBzzXizEzBRj7neeutMSWbGVDNWVUHLpUa1YiKN",
  "key33": "52eyZxHjUBLS8zkJPog5N1FwUwYNNXeV6xjyZxu4oh6Kb6C2Kbc56nAoCgSZpfZXMZLsNaspeLWm14YeLmfZAKsf",
  "key34": "3iNtxQiRJjP7dvgQhi8XcWb6VRMXLnogTPSRVBqTdWmnBoLsQtYaExgAdh3mWkQitqax1msQX2FT2mje31cVmYRL",
  "key35": "3n2e2pL6S8nYn2yXycUWyFJj45ptoBGNyUKBYoU4Ntw76pHAQPSatW7yTUZKV1B4E1BCZKwFqvSAohVxaKVr1YoB",
  "key36": "3ZsLZFqvZHFqpDEmHjKVfQLh31seCYNmn8Ly4aDJ6oevTXvKPztn4DGdfazMX2aEDnSZ5q2PWFEYsCntVxDUcra3",
  "key37": "3Av1ozF1cQg215bKYbQuiiES2UJs5qVbJns5ePGSyAUis3stZL1bEMrGfam5DL1B6vnCsbTzB3GH31AdK8ZpzrX2"
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
