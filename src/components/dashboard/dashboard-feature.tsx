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
    "2v1T7DfqyfSTeo44AZkRzcvxo5JsjpEzpoCnou1c9LYtpKHxW4zfBg4jx9QHjqRquZ5frRTFd13PLuAZPJa1Gai9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oN7Mm8zEv9TdrBZmCe9QyMhRHMaEVJQjbdbqaPQMn2Yj44f5L5A3np7u4nGw6KaCZ3Gqa8E5WvcAEXYqag7Z1fZ",
  "key1": "4pmyTAW8CnvpVaEPsH3RSsbGeF9NK3o3nCfsP6D6nkRaKbaXcLgee5pEPVk4VKmRvYpphzwV4FzaZzwvf2TLA4Z5",
  "key2": "H7PkfqjiaKyWp4EL3wREHhiDRm4Xw68m2BKoXawve7YLb8np4ca8SJxkpwHEr1wf9wLX3Zj3a2uiXnbWM3Skn1M",
  "key3": "2ydgadW4y17PxucHt4UvbuJ21bKZiKTGU3tHjZhpVVQV1uB2aciMMa5y22iyoT8nMByig96wnjyKXb6t3J4Mdqto",
  "key4": "4ir8zVbkHnYMLzTRcCj2YNd2rt6PX8XZ31HnHyfAp8CVTxTVq9QG3Xu3ckm9KXnK2Cu1j9v9Mnmxak8v881HEyh3",
  "key5": "4rojRC8wTd9pvyRU8RoN1QG7gPmTfMUX3k36PhzFSRh4iztLG3HYj1jNnfXR11ND4uds3kuNKn8VKBQu8nY8kQRD",
  "key6": "4Yz5T63sFnEX4p2ekAcL3pwNhQxWnPePvBMGmZFA1JffyPUkYhqsyUt8ZVuvAaQoUC4Qw71aA4m5gh7vqTvTRKZ8",
  "key7": "2x5xKcgw9NLcfDRgcpz192B8cjJ9yZZa8rCW7sCRTufVpyYJpYszNsTRRevFYDfFZmz8R8gsoLp8WSsukYm5TvHT",
  "key8": "GmUc56CujtxERou7SQr59d624P7rfEcMR6b62N1CuW74fNPHTVAvUSvJ2fxor78dVySJ37HqjfLDMfrvbMZLNZ7",
  "key9": "44iW6FZawDxtqhApEfNzVRCGbnYGDoZuJeefSqb6Smv4AG4bmBUkYpXBUvyexXMvq8DSrLuPez3Q8xpChBFUJkG9",
  "key10": "2kvGNfxcbeiNVuvFSMubCLHciW78uicfNXJNb8yWGe5CZoDgSMfzyT5CxtEYDW2G56Q1GG7JZzBcnPaCtoaPfkdx",
  "key11": "61h6zjSnoEkHuTwGP3LrcMWAezDrv3XGj4HDJSb2ebWwWQ3Ex7myihPHc8uLVd9CF8mi7rH7VXUzMawF78XRgf7S",
  "key12": "5sAtPjp53nWZP7N7sc2CocDuReiBkVAJu3JJyGrnyCzqfEojZEVs8MZAPF5dHubRF97k97d3FbMc9HbJhCTJkAAy",
  "key13": "2UGTZYW4TXM9gKBaQM4v7XuZtewdZLCPzEfSSa7fxfnegKj6wxTAateMLzs5JNYP1U1vBforgqdPd2XjDH9QCDex",
  "key14": "2Y519jHffENdHdNsL7j1JZhkEcja3u2kXwikLHzEmohAXd1GRfX9mBVACm8hEXQ9Z3ZApSirnVzHgN62ykPWVaqQ",
  "key15": "HPPt3HUWpu3ouLsNbymjFYc26ueHfkjUwkoVXLB1J7qYHSEfkbREjVbdxtuTu6ggcSCd62NHqUQGY4EVTyL7MGg",
  "key16": "3UcEwMRxVMNEaPEoqSJcWKhhXmYnTokJxzVR8DNp7BX4XjKDXEciHysmmutV8yC9NZsiVqedwFwhD9h1UedN5ppY",
  "key17": "4fq9i6jruL31wrLgA6Vrrff1vVeqHvSTvWWdAYozUW5Rn46SY3BShbcrxzonCiFGtff4MQdjJfyiP3yb9RFYRcWL",
  "key18": "5NHytGfLnB4vfF4Jsz2qpsEejrtF1qv9vfPJzfLhzCjf8qpzWduECUwSFh2ysep25WrTuDdP9z8fnsCqfM6YRAmy",
  "key19": "zYZZWWE4WEj2ZAQbPKJigFYDExwZxwwEKUiLHmqsHnUBjxFWGCcPcm5crAe37c7TBP3sUp79UKmMcS2RYEoPQ1Y",
  "key20": "3HbTUGSGuwooRmGGqjSLpqd9v4knMJVSMuFHmUPwPoicUpXRxXL71hs1qz8rvQEUVThLTegNioyCRKY3M2evZGbQ",
  "key21": "5zWKvgpXvT887bANLQxk85ExphCakAtyYcBnmwqP9Vn4DZm23pN1QyDAV6e79dg4XddKGbkLujUULuTHk3X4bX93",
  "key22": "5YzLALcyUGJkh1cqGTm5uKacyeBkJbRg1TkYHR4kUtfUzR3CU5HRzJU7ovZzLGzVTGVfidDdqSWPGGnELgX3ifoX",
  "key23": "XsXCJJc1qoQLxpuuQyB2jey5mC7RUSpEwdzRJYE6iYSx6Fii7ciYfDmxGEq7dh6cnphj4RaJes2CwTa6xvda4tt",
  "key24": "3gQiFP9xTJZGjZS4EbS2xaLU1X9bGogrWYCesdAtvu3sPGCriYw8gnSNdYHyxm3NrauiNDbbHWpDiYiyREgBXwbm",
  "key25": "599oZECtFTZm1Lb3aoead9QLdqKE3Fu9SgRWUVxBmQTAkbxi8g2cNokssfy4KwkLdzEuqpdkxmQojAisS3VHBMB5",
  "key26": "SS7vrU2zjPVJn6bYTaY3ufvh4LxYmU5cdd2cJyUPzurbsQ61BSJrc7EhEsCpPjDscpeNocJaDur2UPwcmJ6RCev",
  "key27": "4QVAbSByzKHjpy5Y41EeuE8hJ74V4nYjXvQvtWCb5zVwgv3JSxa9iNTeN7TZnpYxDZH9Mk8VQVMjqZcesESCvDxo",
  "key28": "5LZMuPQgjV21EnDGQdumHRM5dfkqgMPnbcPSUkXS9jAGTBvnJSNdJ967fqwjafGZ6c8ycjk7DpoHZTgxoFFSuw9E",
  "key29": "5VoAMaLbFahCfzuDiMRjVhB3BnZuTxijN7gwzcnaHhTkB6rBWnAKhhF14NYYYJt7GredfDoZGUD73oUqDm176g9k",
  "key30": "61W8N4WAmAYY9pRyAyxdmM5PduyXKZRnsNh2bDgRQ9BDke4sjYUTdMUJN6khxh8hyg3GKVWyPQVkcvSRQd4pHuRE",
  "key31": "GwM67KkQEUYktnsEDtGE1HWY9RoXJcQjzJ78Urk1wjLf4AB7zDjHtdmD52mU8nkorHuHzPaN8E8cZNRGNbeqq9Q",
  "key32": "5wRp5qFdFmgGMsZfopZW8BMYRhpj1zUpvK3QymkGw9GGATbJxHQxSUdNCp8trjwKVv6oKZasJSC8zsa6vATJ6SfW",
  "key33": "2icCLD3zZzVSgnW2jVuuadxHMqw7chsBieXJ9HQnzAA6VPEnQaND7C7yfRxSjT1M6LSoTVPFEPgw5Thso5fPxCav",
  "key34": "4rxk2KevgTni3hbZVpJTzHCv17ueyHbdMeHxQSTg2U2r8cbTNs7obTRBUkc51HaiPPEwFRhCkYztYySB3kZSXoCv",
  "key35": "2JAC5ZzLdDR3JepG8i94YcJnGLTHx1ACdhD5Ffoo6YPZoRLrN7VBDBFZhhx9es6BZwreMkHYxBJJpvZVvUxrsrmh",
  "key36": "YYZGBEkWZbWiSVUJeg2qimwV5GkF1RogH3n4Y5NGqU17Kzs5Qy3UbWkn5wG1iu1iogwsX8YcZogWRWH6MC66JmU",
  "key37": "qLf4RvmGUuPVw4cuCdDMUYZr8gs3jwhVE4ojw2hBfHJoTZ1gtqiKq2RJCWaDrfJF69FDHSWCvuRWsCyvUzdEoX7",
  "key38": "4FCMuHQg4NGm99iSFkiWr4mWsUosGZmou64wWmpRCkxtymvTg654LXWtkrsTcLXUf47KvpSxdTtGcF3WV8xC7CnL",
  "key39": "2sfVLGpTVj3mb3dzwf2fscgB43mp9sKEhdrGUjerq7Hvaf8chmYCq4mF5fYeZLMxnsiryXC43szU6qXXDctuD1ao",
  "key40": "5JNuPg3vRL5CUXYJin1od8tzzTy92EmEBp2DEamibCqu77DbwFYRua111C3w4Gu4UWAu2KVjFxJ8o5roSFJjSL81",
  "key41": "4wEcMh5w5hxQuU34y4Skdt66VfAbDGwYuUg1PSpURZBUQWJo4WjYXKzUCZpdcN2Xszjwv4zh9h9vx3Z7APgev7ZM",
  "key42": "5BqtP6VQmHxoExXafQBMeSU4GiMMzQmxcBETt4z81Zm2yAGvEpL8bn5VeSyaPFJNBkkGPcvRTt8Mdk5p1pq5NZPi"
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
